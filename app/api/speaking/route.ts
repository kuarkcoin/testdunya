import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

// --- TYPE DEFINITIONS ---
type ChatOut = { reply: string; feedback: string };

type GradeOut = {
  band_score: number;
  fluency_feedback: string;
  lexical_feedback: string;
  grammar_feedback: string;
  overall_comment: string;
};

// Gemini history item (SDK'nin beklediği gibi)
type GeminiHistoryItem = {
  role: "user" | "model";
  parts: { text: string }[];
};

// --- HELPERS ---
function stripCodeFences(s: string) {
  return (s || "")
    .replace(/^\s*```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();
}

function safeJsonParse<T = any>(s: string): T | null {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

// Frontend geçmişi bazen string, bazen obje gönderir. Hepsini Gemini formatına çeviriyoruz.
function normalizeHistory(history: any[]): GeminiHistoryItem[] {
  return (history || []).map((m: any) => {
    // STRING -> user message
    if (typeof m === "string") {
      return { role: "user", parts: [{ text: m }] };
    }

    // OBJECT -> role + text
    if (m && typeof m === "object") {
      const role: "user" | "model" =
        m.role === "ai" || m.role === "model" ? "model" : "user";

      const content =
        m.text ??
        m.content ??
        m.message ??
        (typeof m.reply === "string" ? m.reply : null) ??
        JSON.stringify(m);

      return { role, parts: [{ text: String(content) }] };
    }

    // Fallback
    return { role: "user", parts: [{ text: String(m) }] };
  });
}

function pickChat(obj: any): ChatOut | null {
  if (!obj || typeof obj !== "object") return null;

  // Bazı modeller farklı alan adı döndürebilir, ufak tolerans:
  const reply =
    typeof obj.reply === "string"
      ? obj.reply
      : typeof obj.answer === "string"
        ? obj.answer
        : typeof obj.response === "string"
          ? obj.response
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
  if (!Number.isFinite(score)) score = 0;

  return {
    band_score: score,
    fluency_feedback: String(obj.fluency_feedback ?? "No feedback provided."),
    lexical_feedback: String(obj.lexical_feedback ?? "No feedback provided."),
    grammar_feedback: String(obj.grammar_feedback ?? "No feedback provided."),
    overall_comment: String(obj.overall_comment ?? "No comment provided."),
  };
}

const CHAT_FALLBACK: ChatOut = {
  reply: "I didn't catch that. Could you repeat?",
  feedback: "",
};

const GRADE_FALLBACK: GradeOut = {
  band_score: 0,
  fluency_feedback: "Evaluation error.",
  lexical_feedback: "Evaluation error.",
  grammar_feedback: "Evaluation error.",
  overall_comment: "Evaluation error. Please try again.",
};

// --- MAIN ---
export async function POST(request: Request) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const mode: "chat" | "grade" = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  // Son 10 mesajı al (token tasarrufu)
  const history = normalizeHistory(historyRaw).slice(-10);

  const genAI = new GoogleGenerativeAI(apiKey);

  // Model adı
  const modelName = "gemini-1.5-flash";

  // EN KRİTİK FIX: Chat modunda da JSON zorla
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig:
      mode === "grade"
        ? { responseMimeType: "application/json", temperature: 0.2 }
        : { responseMimeType: "application/json", temperature: 0.7 },
  });

  const prompt =
    mode === "grade"
      ? `Act as a strict IELTS Examiner. Analyze the conversation history.
HISTORY: ${JSON.stringify(history)}
Return ONLY valid JSON with exactly these fields:
{
  "band_score": number,
  "fluency_feedback": string,
  "lexical_feedback": string,
  "grammar_feedback": string,
  "overall_comment": string
}`
      : `You are an IELTS Speaking Examiner.
HISTORY: ${JSON.stringify(history)}
USER: "${message}"
Reply naturally in 1-2 sentences.
If the user made a mistake, put the correction in "feedback" (otherwise empty).
Return ONLY valid JSON with exactly these fields:
{
  "reply": string,
  "feedback": string
}`;

  try {
    const result = await model.generateContent(prompt);

    // responseMimeType json olsa da bazı edge-case'lerde yine text gelir
    const rawText = result?.response?.text?.() ?? "";
    const cleaned = stripCodeFences(rawText);

    const parsed = safeJsonParse(cleaned);

    if (mode === "grade") {
      const picked = pickGrade(parsed);
      return NextResponse.json(picked ?? GRADE_FALLBACK, { status: 200 });
    }

    // CHAT
    let picked: ChatOut | null = null;
    try {
      picked = pickChat(parsed);
    } catch (e) {
      console.warn("pickChat error:", e);
      picked = null;
    }

    // JSON bozuksa bile düz metni kurtar
    if (!picked || !picked.reply) {
      if (cleaned.length > 0) {
        picked = { reply: cleaned, feedback: "" };
      } else {
        picked = CHAT_FALLBACK;
      }
    }

    return NextResponse.json(picked, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);

    // Frontend patlamasın diye daima doğru formatta dön
    return NextResponse.json(
      mode === "grade" ? GRADE_FALLBACK : { reply: "Connection issue. Please try again.", feedback: "" },
      { status: 200 }
    );
  }
}