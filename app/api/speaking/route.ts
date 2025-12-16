import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

type ChatOut = { reply: string; feedback: string };
type GradeOut = {
  band_score: number;
  fluency_feedback: string;
  lexical_feedback: string;
  grammar_feedback: string;
  overall_comment: string;
};

function normalizeHistory(history: any[]) {
  // history: string[] veya {role, content}[] gelebilir
  return history.map((m: any) => {
    if (typeof m === "string") return { role: "user", content: m };
    if (m && typeof m === "object") {
      const role =
        m.role === "assistant" || m.role === "model"
          ? "assistant"
          : m.role === "user"
          ? "user"
          : "user";
      const content =
        typeof m.content === "string"
          ? m.content
          : typeof m.text === "string"
          ? m.text
          : typeof m.message === "string"
          ? m.message
          : JSON.stringify(m);
      return { role, content };
    }
    return { role: "user", content: String(m) };
  });
}

function stripFences(text: string) {
  return text.replace(/```[\w]*\n?/g, "").replace(/```/g, "").trim();
}

function extractJsonObject(text: string) {
  // JSON dışı metin geldiyse { ... } kısmını çekmeye çalış
  const cleaned = stripFences(text);
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  return cleaned.slice(start, end + 1);
}

function safeJsonParse<T>(text: string): T | null {
  try {
    return JSON.parse(stripFences(text)) as T;
  } catch {
    try {
      const extracted = extractJsonObject(text);
      if (!extracted) return null;
      return JSON.parse(extracted) as T;
    } catch {
      return null;
    }
  }
}

function clampBandScore(n: any) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 0;
  if (x < 0) return 0;
  if (x > 9) return 9;
  // IELTS band genelde .0 / .5 olur ama zorlamıyoruz
  return x;
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
  const out: GradeOut = {
    band_score: clampBandScore(obj.band_score),
    fluency_feedback: typeof obj.fluency_feedback === "string" ? obj.fluency_feedback : "",
    lexical_feedback: typeof obj.lexical_feedback === "string" ? obj.lexical_feedback : "",
    grammar_feedback: typeof obj.grammar_feedback === "string" ? obj.grammar_feedback : "",
    overall_comment: typeof obj.overall_comment === "string" ? obj.overall_comment : "",
  };
  return out;
}

export async function POST(request: Request) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });

  const mode: "chat" | "grade" = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  // Son 12 mesaj (token tasarrufu)
  const normalized = normalizeHistory(historyRaw).slice(-12);

  const genAI = new GoogleGenerativeAI(apiKey);

  // ⭐ GEMINI 2.5 FLASH (sabit)
  // Grade: JSON zorla ✅
  // Chat: JSON zorlamayı kaldır ✅ (Connection issue döngüsünü genelde bu bitiriyor)
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig:
      mode === "grade"
        ? {
            responseMimeType: "application/json",
            temperature: 0.2,
            maxOutputTokens: 2000,
          }
        : {
            temperature: 0.7,
            maxOutputTokens: 320,
          },
  });

  const prompt =
    mode === "grade"
      ? `
You are a strict IELTS Speaking Examiner.
Evaluate the speaking performance based on the conversation history.

HISTORY:
${JSON.stringify(normalized)}

Return a VALID JSON object with EXACTLY these keys:
{
  "band_score": number,
  "fluency_feedback": string,
  "lexical_feedback": string,
  "grammar_feedback": string,
  "overall_comment": string
}

No markdown. No extra keys.`
      : `
You are a friendly IELTS Speaking Examiner.
Keep your reply concise (1–2 sentences).

HISTORY:
${JSON.stringify(normalized)}

USER INPUT:
"${message}"

TASK:
- Reply naturally (1–2 sentences).
- If there is a grammar mistake in the USER INPUT, correct it briefly in "feedback".
- If it's correct, "feedback" must be an empty string "".

Return a VALID JSON object with EXACTLY these keys:
{
  "reply": string,
  "feedback": string
}

No markdown. No extra keys.`;

  try {
    const result = await model.generateContent(prompt);
    const rawText = result.response.text();

    const parsedAny = safeJsonParse<any>(rawText);

    if (mode === "grade") {
      const picked = pickGrade(parsedAny);
      if (!picked) {
        console.error("GRADE JSON parse failed. Raw:", rawText);
        const fallback: GradeOut = {
          band_score: 0,
          fluency_feedback: "",
          lexical_feedback: "",
          grammar_feedback: "",
          overall_comment: "Evaluation error. Please try again.",
        };
        return NextResponse.json(fallback);
      }
      return NextResponse.json(picked);
    }

    // chat
    const picked = pickChat(parsedAny);
    if (!picked) {
      console.error("CHAT JSON parse failed. Raw:", rawText);
      const fallback: ChatOut = { reply: "Sorry, I didn’t catch that. Could you repeat?", feedback: "" };
      return NextResponse.json(fallback);
    }
    return NextResponse.json(picked);
  } catch (err) {
    console.error("Gemini API Error:", err);

    // Şema bozmayan fallback
    if (mode === "grade") {
      const fallback: GradeOut = {
        band_score: 0,
        fluency_feedback: "",
        lexical_feedback: "",
        grammar_feedback: "",
        overall_comment: "Connection / model error. Please try again.",
      };
      return NextResponse.json(fallback);
    }

    const fallback: ChatOut = { reply: "Connection issue. Please try again.", feedback: "" };
    return NextResponse.json(fallback);
  }
}