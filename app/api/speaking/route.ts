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

function normalizeHistory(history: any[]) {
  return (history || []).map((m: any) => {
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
      typeof obj.fluency_feedback === "string" ? obj.fluency_feedback : "No feedback provided.",
    lexical_feedback:
      typeof obj.lexical_feedback === "string" ? obj.lexical_feedback : "No feedback provided.",
    grammar_feedback:
      typeof obj.grammar_feedback === "string" ? obj.grammar_feedback : "No feedback provided.",
    overall_comment:
      typeof obj.overall_comment === "string" ? obj.overall_comment : "No comment provided.",
  };
}

// Fallback mesajları
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
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  // Token tasarrufu için son 10 mesaj
  const history = normalizeHistory(historyRaw).slice(-10);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    // Güncel ve en stabil model (Aralık 2025)
    const modelName = "gemini-2.0-flash-exp"; // veya "gemini-2.0-flash-latest"

    const model = genAI.getGenerativeModel({
      model: modelName,
      generationConfig: {
        responseMimeType: "application/json",
        temperature: mode === "grade" ? 0.2 : 0.7,
        topP: 0.95,
        maxOutputTokens: mode === "grade" ? 512 : 256,
      },
    });

    const prompt =
      mode === "grade"
        ? [
            "You are a strict IELTS Speaking Examiner.",
            "Evaluate the entire conversation and provide an IELTS Speaking band score (0-9).",
            `CONVERSATION HISTORY:\n${JSON.stringify(history)}`,
            "Return ONLY valid JSON with exactly these keys (no extra text):",
            '{ "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }',
          ].join("\n\n")
        : [
            "You are a friendly and helpful IELTS Speaking Examiner.",
            "Continue the conversation naturally in 1-2 sentences.",
            "If there are grammar/vocabulary mistakes, provide gentle correction in 'feedback'.",
            `CONVERSATION HISTORY:\n${JSON.stringify(history)}`,
            `USER MESSAGE:\n${message}`,
            "Return ONLY valid JSON with exactly these keys:",
            '{ "reply": string, "feedback": string }',
          ].join("\n\n");

    const result = await model.generateContent(prompt);
    const rawText = result?.response?.text?.() ?? "";
    const cleaned = stripCodeFences(rawText);

    if (!cleaned) {
      throw new Error("Empty response from Gemini");
    }

    const parsed = safeJsonParse(cleaned);

    if (mode === "grade") {
      const picked = pickGrade(parsed) || pickGrade(safeJsonParse("{" + cleaned + "}")); // bazen JSON eksik olur
      if (!picked || picked.band_score === 0) {
        return NextResponse.json(gradeFallback("Evaluation failed. Please try again later."));
      }
      return NextResponse.json(picked);
    }

    // chat mode
    let picked = pickChat(parsed);

    if (!picked && cleaned) {
      // JSON parse edilemediyse ham metni reply olarak kullan
      picked = { reply: cleaned, feedback: "" };
    }

    if (!picked || !picked.reply) {
      return NextResponse.json(chatFallback("Sorry, I didn't understand. Could you say that again?"));
    }

    picked.feedback = typeof picked.feedback === "string" ? picked.feedback : "";
    return NextResponse.json(picked);
  } catch (error: any) {
    console.error("Gemini API Error:", {
      message: error.message,
      status: error.status,
      code: error.code,
    });

    let userMessage = "Connection issue. Please try again in a moment.";

    // Daha anlamlı hata mesajları
    if (error.message?.includes("429") || error.message?.includes("RESOURCE_EXHAUSTED")) {
      userMessage = "Daily limit reached. Please wait a few minutes or try again tomorrow.";
    } else if (error.message?.includes("quota")) {
      userMessage = "API quota exceeded. Consider upgrading your plan or trying later.";
    } else if (error.message?.includes("invalid") || error.message?.includes("model")) {
      userMessage = "Model temporarily unavailable. Please try again soon.";
    }

    if (mode === "grade") {
      return NextResponse.json(gradeFallback(userMessage));
    }
    return NextResponse.json(chatFallback(userMessage));
  }
}