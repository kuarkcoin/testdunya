import { NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

// --- HELPERS ---
function stripCodeFences(s: string) {
  return String(s || "")
    .replace(/^\s*```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();
}

function safeJsonParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeHistory(history: any[]) {
  return (history || []).map((m: any) => {
    let role = "user";
    let text = "";
    if (typeof m === "string") {
      text = m;
    } else if (m && typeof m === "object") {
      role =
        m.role === "ai" || m.role === "model" || m.role === "assistant"
          ? "model"
          : "user";
      text = m.text ?? m.content ?? m.message ?? m.prompt ?? JSON.stringify(m);
    }
    return { role, text: String(text) };
  });
}

function formatHistoryForPrompt(history: { role: string; text: string }[]) {
  return history
    .map((h) => `${h.role === "user" ? "User" : "Examiner"}: ${h.text}`)
    .join("\n");
}

function pickChat(obj: any) {
  if (!obj || typeof obj !== "object") return null;
  const reply = obj.reply || obj.answer || obj.response || "";
  const feedback = obj.feedback || obj.correction || "";
  if (!reply && !feedback) return null;
  return { reply: String(reply), feedback: String(feedback) };
}

function pickGrade(obj: any) {
  if (!obj || typeof obj !== "object") return null;
  let score = Number(obj.band_score);
  if (Number.isNaN(score)) score = 0;
  return {
    band_score: score,
    fluency_feedback: String(obj.fluency_feedback || "No feedback."),
    lexical_feedback: String(obj.lexical_feedback || "No feedback."),
    grammar_feedback: String(obj.grammar_feedback || "No feedback."),
    overall_comment: String(obj.overall_comment || "No comment."),
  };
}

// Hata içinden 429 / quota bilgisi çek
function parseRetrySecondsFromMessage(msg: string) {
  // "Please retry in 23.933s" gibi
  const m = msg.match(/retry in\s+([\d.]+)s/i);
  if (!m) return null;
  const v = Number(m[1]);
  return Number.isFinite(v) ? Math.ceil(v) : null;
}

// --- MAIN ---
export async function POST(request: Request) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { reply: "Google API Key missing in server env.", feedback: "" },
      { status: 500 }
    );
  }

  let body: any = null;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const mode = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  const normalizedHistory = normalizeHistory(historyRaw).slice(-10);
  const historyText = formatHistoryForPrompt(normalizedHistory);

  // ✅ 2.5-flash yerine 1.5-flash ile başla (rate-limit daha az can yakıyor)
  const modelCandidates = ["gemini-1.5-flash", "gemini-2.5-flash"];

  const prompt =
    mode === "grade"
      ? `Act as an IELTS Examiner. Analyze history.
HISTORY:
${historyText}
Return VALID JSON: { "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }`
      : `You are an IELTS Examiner.
HISTORY:
${historyText}
USER INPUT: "${message}"
Task: Reply naturally (1-2 sentences). Correct grammar in 'feedback' if needed.
Return VALID JSON: { "reply": string, "feedback": string }`;

  const genAI = new GoogleGenerativeAI(apiKey);

  // 1) Model fallback + 2) 429 retry (1 kez) + 3) kullanıcıya bekleme süresi döndür
  for (let mi = 0; mi < modelCandidates.length; mi++) {
    const modelName = modelCandidates[mi];

    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
        generationConfig:
          mode === "grade"
            ? { responseMimeType: "application/json", temperature: 0.2 }
            : { responseMimeType: "application/json", temperature: 0.7 },
      });

      // --- 429 retry/backoff ---
      let attempt = 0;
      while (attempt < 2) {
        try {
          const result = await model.generateContent(prompt);
          const rawText = result?.response?.text?.() ?? "";
          const cleaned = stripCodeFences(rawText);
          const parsed = safeJsonParse(cleaned);

          if (mode === "grade") {
            const picked = pickGrade(parsed);
            return NextResponse.json(
              picked || {
                band_score: 0,
                fluency_feedback: "Evaluation failed.",
                lexical_feedback: "Evaluation failed.",
                grammar_feedback: "Evaluation failed.",
                overall_comment: "Evaluation failed.",
              }
            );
          }

          const picked = pickChat(parsed);
          if (picked) return NextResponse.json(picked);

          // JSON bozuksa düz metni kurtar
          if (cleaned.length > 0) return NextResponse.json({ reply: cleaned, feedback: "" });

          return NextResponse.json({ reply: "Empty response. Try again.", feedback: "" });
        } catch (err: any) {
          const msg = String(err?.message || err);
          // 429 ise 1 kere bekleyip tekrar dene
          if (msg.includes("429") || msg.toLowerCase().includes("quota")) {
            const retrySec = parseRetrySecondsFromMessage(msg) ?? 25;
            if (attempt === 0) {
              await sleep(Math.min(retrySec, 25) * 1000);
              attempt++;
              continue;
            }
            // ikinci denemede de 429 ise kullanıcıya net söyle
            return NextResponse.json(
              {
                reply: `Rate limit (quota) hit. Please wait ~${retrySec}s and try again.`,
                feedback: "Tip: throttle requests / reduce simultaneous calls.",
              },
              { status: 429 }
            );
          }

          // 429 değilse yukarı fırlat (model fallback devreye girsin)
          throw err;
        }
      }
    } catch (error: any) {
      // Bu modelde patladı -> sonraki modele geç
      const msg = String(error?.message || error);

      // Eğer son model de patladıysa
      if (mi === modelCandidates.length - 1) {
        const retrySec = parseRetrySecondsFromMessage(msg);
        if (msg.includes("429") || msg.toLowerCase().includes("quota")) {
          return NextResponse.json(
            {
              reply: `Quota exceeded. Please wait ${retrySec ?? 25}s and try again.`,
              feedback: "",
            },
            { status: 429 }
          );
        }

        return NextResponse.json(
          { reply: `SYSTEM ERROR: ${msg}`, feedback: "Please report this error." },
          { status: 200 }
        );
      }
    }
  }

  // Teorik olarak buraya düşmez
  return NextResponse.json({ reply: "Unknown error.", feedback: "" }, { status: 200 });
}