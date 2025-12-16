import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Vercel / Edge sorunlarını önlemek için
export const runtime = "nodejs";

/**
 * JSON güvenli parse
 * ```json ... ``` gibi fence'leri temizler
 */
function safeJsonParse<T>(text: string): T | null {
  try {
    const cleanText = text
      .replace(/```[\w]*\n?/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText) as T;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const message = typeof body.message === "string" ? body.message : "";
    const history = Array.isArray(body.history) ? body.history : [];
    const mode: "chat" | "grade" = body.mode === "grade" ? "grade" : "chat";

    // Son 12 mesaj → token & maliyet kontrolü
    const trimmedHistory = history.slice(-12);

    const genAI = new GoogleGenerativeAI(apiKey);

    // 🔥 MODE'A GÖRE AYAR
    const generationConfig =
      mode === "grade"
        ? {
            responseMimeType: "application/json",
            temperature: 0.2,
            maxOutputTokens: 2000,
          }
        : {
            responseMimeType: "application/json",
            temperature: 0.7,
            maxOutputTokens: 300,
          };

    // 🚀 GEMINI 2.5 FLASH
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig,
    });

    const prompt =
      mode === "grade"
        ? `
You are a strict IELTS Speaking Examiner.
Evaluate the conversation accurately and objectively.

HISTORY:
${JSON.stringify(trimmedHistory)}

OUTPUT (JSON ONLY):
{
  "band_score": number,
  "fluency_feedback": string,
  "lexical_feedback": string,
  "grammar_feedback": string,
  "overall_comment": string
}`
        : `
You are a friendly IELTS Speaking Examiner.
Keep replies natural and short (1–2 sentences).

HISTORY:
${JSON.stringify(trimmedHistory)}

USER INPUT:
"${message}"

TASK:
- Respond naturally.
- If the last sentence has a grammar mistake, correct it briefly.
- If correct, return empty string.

OUTPUT (JSON ONLY):
{
  "reply": string,
  "feedback": string
}`;

    const result = await model.generateContent(prompt);
    const rawText = result.response.text();

    const parsed = safeJsonParse<any>(rawText);

    // ❌ JSON bozulursa fallback
    if (!parsed) {
      console.error("JSON Parse Failed:", rawText);

      return NextResponse.json(
        mode === "grade"
          ? {
              band_score: 0,
              fluency_feedback: "",
              lexical_feedback: "",
              grammar_feedback: "",
              overall_comment: "Evaluation error. Please try again.",
            }
          : {
              reply: "Sorry, I didn’t catch that. Could you repeat?",
              feedback: "",
            }
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({
      reply: "Connection issue. Please try again.",
      feedback: "",
    });
  }
}