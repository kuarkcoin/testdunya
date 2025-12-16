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

// --- YARDIMCI FONKSİYONLAR ---

function stripCodeFences(s: string) {
  // Markdown ```json ... ``` bloklarını temizler
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
 *
 * Frontend bazen string, bazen obje gönderiyor.
 * Hepsini bu standarda çeviriyoruz.
 */
function normalizeHistory(history: any[]) {
  return (history || []).map((m: any) => {
    // STRING ise de parts formatında dön!
    if (typeof m === "string") {
      return { role: "user", parts: [{ text: m }] };
    }

    if (m && typeof m === "object") {
      const role = m.role === "ai" || m.role === "model" ? "model" : "user";
      const content =
        m.text ?? m.content ?? m.message ?? m.prompt ?? JSON.stringify(m);
      return { role, parts: [{ text: String(content) }] };
    }

    return { role: "user", parts: [{ text: String(m) }] };
  });
}

function pickChat(obj: any): ChatOut | null {
  if (!obj || typeof obj !== "object") return null;

  const reply =
    typeof obj.reply === "string"
      ? obj.reply
      : typeof obj.answer === "string"
        ? obj.answer
        : "";

  const feedback =
    typeof obj.feedback === "string"
      ? obj.feedback
      : typeof obj.correction === "string"
        ? obj.correction
        : "";

  if (!reply && !feedback) return null;
  return { reply, feedback };
}

function pickGrade(obj: any): GradeOut | null {
  if (!obj || typeof obj !== "object") return null;

  let score = Number(obj.band_score);
  if (Number.isNaN(score)) score = 0;

  return {
    band_score: score,
    fluency_feedback:
      typeof obj.fluency_feedback === "string"
        ? obj.fluency_feedback
        : "No feedback provided.",
    lexical_feedback:
      typeof obj.lexical_feedback === "string"
        ? obj.lexical_feedback
        : "No feedback provided.",
    grammar_feedback:
      typeof obj.grammar_feedback === "string"
        ? obj.grammar_feedback
        : "No feedback provided.",
    overall_comment:
      typeof obj.overall_comment === "string"
        ? obj.overall_comment
        : "No comment provided.",
  };
}

// Fallback’ler (frontend patlamasın diye hep TAM tip döndürüyoruz)
const chatFallback = (msg: string): ChatOut => ({ reply: msg, feedback: "" });

const gradeFallback = (msg: string): GradeOut => ({
  band_score: 0,
  fluency_feedback: msg,
  lexical_feedback: msg,
  grammar_feedback: msg,
  overall_comment: msg,
});

// --- ANA FONKSİYON ---

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

  // Son 10 mesaj (token tasarrufu)
  const history = normalizeHistory(historyRaw).slice(-10);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    const modelName = "gemini-1.5-flash";

    // ✅ En kritik düzeltme: chat modunda da JSON zorla
    const model = genAI.getGenerativeModel({
      model: modelName,
      generationConfig:
        mode === "grade"
          ? { responseMimeType: "application/json", temperature: 0.2 }
          : { responseMimeType: "application/json", temperature: 0.7 },
    });

    const prompt =
      mode === "grade"
        ? [
            "Act as a strict IELTS Speaking Examiner.",
            "Analyze the conversation history and give an IELTS band score (0-9).",
            `HISTORY: ${JSON.stringify(history)}`,
            'Return ONLY valid JSON with exactly these keys:',
            '{ "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }',
          ].join("\n")
        : [
            "You are an IELTS Speaking Examiner.",
            `HISTORY: ${JSON.stringify(history)}`,
            `USER: ${JSON.stringify(message)}`,
            "Task: Reply naturally (1-2 sentences). If needed, correct grammar in feedback.",
            'Return ONLY valid JSON with exactly these keys:',
            '{ "reply": string, "feedback": string }',
          ].join("\n");

    const result = await model.generateContent(prompt);

    // responseMimeType JSON ise bile bazen SDK text döndürür -> yine parse ediyoruz
    const rawText = result?.response?.text?.() ?? "";
    const cleaned = stripCodeFences(rawText);

    const parsed = safeJsonParse(cleaned);

    if (mode === "grade") {
      const picked = pickGrade(parsed);
      if (!picked) return NextResponse.json(gradeFallback("Evaluation error. Please try again."));
      return NextResponse.json(picked);
    }

    // chat
    let picked: ChatOut | null = null;
    try {
      picked = pickChat(parsed);
    } catch (e) {
      console.warn("pickChat error:", e);
      picked = null;
    }

    if (!picked) {
      // JSON gelmezse bile metni kurtar
      if (cleaned.length > 0) return NextResponse.json({ reply: cleaned, feedback: "" } satisfies ChatOut);
      return NextResponse.json(chatFallback("I didn't catch that. Could you repeat?"));
    }

    // Reply boş gelirse de kurtar
    if (!picked.reply && cleaned.length > 0) {
      picked.reply = cleaned;
    }
    if (!picked.reply) {
      picked.reply = "I didn't catch that. Could you repeat?";
    }
    if (typeof picked.feedback !== "string") picked.feedback = "";

    return NextResponse.json(picked);
  } catch (error) {
    console.error("API Error:", error);

    // Frontend 500 görmesin diye 200 + fallback döndürüyoruz
    if (mode === "grade") {
      return NextResponse.json(gradeFallback("Connection error. Please try again."));
    }
    return NextResponse.json(chatFallback("Connection issue. Please try again."));
  }
}