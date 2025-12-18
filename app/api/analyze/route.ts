import { NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

// --- API KEY YÖNETİMİ ---
function getApiKeys(): string[] {
  return [
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_KEY_2,
    process.env.GOOGLE_KEY_3,
    process.env.GOOGLE_KEY_4,
    process.env.GOOGLE_KEY_5,
  ].filter((k): k is string => Boolean(k));
}

async function withFailover<T>(fn: (key: string) => Promise<T>) {
  const keys = getApiKeys();
  if (keys.length === 0) throw new Error("No API Keys found in Vercel settings.");

  const start = Math.floor(Math.random() * keys.length);
  let lastErr: any = null;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[(start + i) % keys.length];
    try {
      return await fn(key);
    } catch (e: any) {
      lastErr = e;
      const msg = String(e?.message || e);
      console.warn(`Key ending in ...${key.slice(-4)} failed: ${msg}`);

      if (
        msg.includes("429") ||
        msg.toLowerCase().includes("quota") ||
        msg.toLowerCase().includes("too many requests") ||
        msg.includes("503")
      ) continue;

      throw e;
    }
  }
  throw lastErr ?? new Error("All API keys failed.");
}

function stripCodeFences(s: string) {
  return String(s || "")
    .replace(/^\s*```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();
}

function safeJsonParse(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}

// --- ANA ---
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ✅ Artık question/context alıyoruz
    const { essay, taskType, contextData, question, title } = body;

    if (!essay || !taskType) {
      return NextResponse.json({ error: "Essay or Task Type missing" }, { status: 400 });
    }

    const result = await withFailover(async (apiKey) => {
      const genAI = new GoogleGenerativeAI(apiKey);

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash", // dokümanda bu isim bu şekilde geçiyor 1
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.3,
        },
      });

      // ✅ Model artık hangi soruyu değerlendirdiğini BİLİYOR
      const prompt = `
You are a strict IELTS Writing examiner.

TASK TYPE: ${taskType}
TASK TITLE: ${title ?? "N/A"}
TASK QUESTION:
${question ?? "(not provided)"}

TASK CONTEXT / DATA (must be used):
${contextData ?? "(not provided)"}

CANDIDATE ESSAY:
${essay}

Return ONLY valid JSON in this exact shape:
{
  "score": 0,
  "feedback": "",
  "corrections": []
}

Rules:
- Do NOT invent a different question (e.g., do not assume "Global Water" unless it is the provided question).
- Feedback must mention Task Response, Coherence & Cohesion, Lexical Resource, Grammar.
- Corrections must be specific sentence-level fixes (strings).
      `.trim();

      return await model.generateContent(prompt);
    });

    const rawText = result.response.text();
    const cleaned = stripCodeFences(rawText);
    const parsed = safeJsonParse(cleaned);

    if (!parsed) {
      return NextResponse.json(
        { error: "Failed to parse AI response", raw: cleaned.slice(0, 500) },
        { status: 500 }
      );
    }

    // ✅ Frontend patlamasın diye shape guard
    const safe = {
      score: typeof parsed.score === "number" ? parsed.score : 0,
      feedback: typeof parsed.feedback === "string" ? parsed.feedback : "No feedback returned.",
      corrections: Array.isArray(parsed.corrections) ? parsed.corrections : [],
    };

    return NextResponse.json(safe);

  } catch (error: any) {
    console.error("WRITING API ERROR:", error);

    const msg = String(error?.message || error);
    if (msg.includes("429") || msg.toLowerCase().includes("quota")) {
      return NextResponse.json(
        { error: "System is busy (Rate Limit). Please try again in 30 seconds." },
        { status: 429 }
      );
    }

    return NextResponse.json({ error: "Analysis failed. Please try again." }, { status: 500 });
  }
}