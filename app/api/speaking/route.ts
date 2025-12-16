import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

// --- TİP TANIMLARI ---
type ChatOut = { reply: string; feedback: string };

type GradeOut = {
  band_score: number;
  fluency_feedback: string;
  lexical_feedback: string;
  grammar_feedback: string;
  overall_comment: string;
};

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

/**
 * Gemini history formatı:
 * [{ role: "user"|"model", parts: [{ text: "..." }] }]
 * (Roles: user / model) 2
 */
function normalizeHistory(history: any[]) {
  return (history || [])
    .map((m: any) => {
      // String ise user mesajı kabul et
      if (typeof m === "string") {
        return { role: "user", parts: [{ text: m }] };
      }

      if (m && typeof m === "object") {
        const role = m.role === "ai" || m.role === "model" ? "model" : "user";
        const content = m.text ?? m.content ?? m.message ?? m.prompt ?? "";
        return { role, parts: [{ text: String(content || "") }] };
      }

      return { role: "user", parts: [{ text: String(m ?? "") }] };
    })
    // boş textleri temizle
    .filter((x: any) => x?.parts?.[0]?.text && String(x.parts[0].text).trim().length > 0);
}

function pickChat(obj: any): ChatOut | null {
  if (!obj || typeof obj !== "object") return null;
  const reply = typeof obj.reply === "string" ? obj.reply : "";
  const feedback = typeof obj.feedback === "string" ? obj.feedback : "";
  if (!reply && !feedback) return null;
  return { reply, feedback };
}

function pickGrade(obj: any): GradeOut | null {
  if (!obj || typeof obj !== "object") return null;
  let score = Number(obj.band_score);
  if (Number.isNaN(score)) score = 0;

  return {
    band_score: score,
    fluency_feedback: typeof obj.fluency_feedback === "string" ? obj.fluency_feedback : "No feedback provided.",
    lexical_feedback: typeof obj.lexical_feedback === "string" ? obj.lexical_feedback : "No feedback provided.",
    grammar_feedback: typeof obj.grammar_feedback === "string" ? obj.grammar_feedback : "No feedback provided.",
    overall_comment: typeof obj.overall_comment === "string" ? obj.overall_comment : "No comment provided.",
  };
}

// response.text() bazen hata fırlatabiliyor -> güvenli extract 3
function extractResponseText(response: any): string {
  // 1) text() dene
  try {
    const t = response?.text?.();
    if (typeof t === "string" && t.trim().length > 0) return t;
  } catch {
    // ignore
  }

  // 2) candidates -> content.parts[].text birleştir
  const parts = response?.candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) {
    const joined = parts
      .map((p: any) => (typeof p?.text === "string" ? p.text : ""))
      .join("")
      .trim();
    if (joined.length > 0) return joined;
  }

  // 3) en son boş dön
  return "";
}

const chatFallback = (msg: string): ChatOut => ({ reply: msg, feedback: "" });

const gradeFallback = (msg: string): GradeOut => ({
  band_score: 0,
  fluency_feedback: msg,
  lexical_feedback: msg,
  grammar_feedback: msg,
  overall_comment: msg,
});

export async function POST(request: Request) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GOOGLE_API_KEY missing" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const mode: "grade" | "chat" = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  const history = normalizeHistory(historyRaw).slice(-10);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      // JSON’u zorla (ikisi için de)
      generationConfig:
        mode === "grade"
          ? { responseMimeType: "application/json", temperature: 0.2 }
          : { responseMimeType: "application/json", temperature: 0.7 },
      // İstersen burada global sistem talimatı da verilebilir:
      // systemInstruction: "..."
    });

    // ✅ History’yi prompt içine gömmek yerine gerçek chat olarak kullan
    const chat = model.startChat({
      history,
      generationConfig:
        mode === "grade"
          ? { responseMimeType: "application/json", temperature: 0.2 }
          : { responseMimeType: "application/json", temperature: 0.7 },
    });

    const userInstruction =
      mode === "grade"
        ? [
            "Act as a strict IELTS Speaking Examiner.",
            "Give an IELTS band score (0-9) and detailed feedback.",
            'Return ONLY valid JSON with exactly these keys:',
            '{ "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }',
          ].join("\n")
        : [
            "You are an IELTS Speaking Examiner.",
            "Reply naturally (1-2 sentences). If needed, correct grammar in feedback.",
            'Return ONLY valid JSON with exactly these keys:',
            '{ "reply": string, "feedback": string }',
            `User message: ${JSON.stringify(message)}`,
          ].join("\n");

    const result = await chat.sendMessage(userInstruction);

    const rawText = extractResponseText(result?.response);
    const cleaned = stripCodeFences(rawText);
    const parsed = safeJsonParse(cleaned);

    if (mode === "grade") {
      const picked = pickGrade(parsed);
      return NextResponse.json(picked ?? gradeFallback("Evaluation error. Please try again."));
    } else {
      const picked = pickChat(parsed);
      if (picked) return NextResponse.json(picked);

      // JSON gelmediyse metni yine kurtar (ama artık çok daha nadir)
      if (cleaned.length > 0) return NextResponse.json({ reply: cleaned, feedback: "" } satisfies ChatOut);
      return NextResponse.json(chatFallback("I didn't catch that. Could you repeat?"));
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      mode === "grade"
        ? gradeFallback("Connection error. Please try again.")
        : chatFallback("Connection issue. Please try again.")
    );
  }
}