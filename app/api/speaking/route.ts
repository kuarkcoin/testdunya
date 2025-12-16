import { NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

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

/**
 * Frontend'den gelen karışık history formatını düzeltir.
 */
function normalizeHistory(history: any[]) {
  return (history || []).map((m: any) => {
    let role = "user";
    let text = "";

    if (typeof m === "string") {
      text = m;
    } else if (m && typeof m === "object") {
      role = (m.role === "ai" || m.role === "model" || m.role === "assistant") ? "model" : "user";
      text = m.text ?? m.content ?? m.message ?? m.prompt ?? JSON.stringify(m);
    }
    
    // Temiz string döndür
    return { role, text: String(text) };
  });
}

/**
 * Geçmişi JSON objesi yerine okunabilir metne çevirir.
 * Gemini JSON objelerini okurken bazen halüsinasyon görür.
 * Bu format token tasarrufu sağlar ve daha stabil çalışır.
 */
function formatHistoryForPrompt(history: { role: string; text: string }[]) {
  return history
    .map((h) => `${h.role === "user" ? "User" : "Examiner"}: ${h.text}`)
    .join("\n");
}

function pickChat(obj: any): ChatOut | null {
  if (!obj || typeof obj !== "object") return null;
  
  // Esnek alan kontrolü
  const reply = obj.reply || obj.answer || obj.response || "";
  const feedback = obj.feedback || obj.correction || "";

  if (!reply && !feedback) return null;
  return { reply: String(reply), feedback: String(feedback) };
}

function pickGrade(obj: any): GradeOut | null {
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
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const mode: "grade" | "chat" = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  // 1. Geçmişi normalize et ve son 12 mesaja indir (Hafıza limiti)
  const normalizedHistory = normalizeHistory(historyRaw).slice(-12);
  
  // 2. Prompt için metin formatına çevir
  const historyText = formatHistoryForPrompt(normalizedHistory);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      // GÜVENLİK AYARLARI: Gemini bazen masum cümleleri bile bloklar. Hepsini kapatıyoruz.
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      ],
      generationConfig: mode === "grade"
          ? { responseMimeType: "application/json", temperature: 0.2 }
          : { responseMimeType: "application/json", temperature: 0.7 },
    });

    const prompt =
      mode === "grade"
        ? `Act as a strict IELTS Speaking Examiner.
Analyze the conversation history below and give an IELTS band score (0-9).

CONVERSATION HISTORY:
${historyText}

Return ONLY valid JSON with exactly these keys:
{ "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }`
        : `You are a friendly IELTS Speaking Examiner.
CONVERSATION HISTORY:
${historyText}
USER'S LAST INPUT: "${message}"

Task: Reply naturally (1-2 sentences). Correct grammar errors in 'feedback' if any.
Return ONLY valid JSON with exactly these keys:
{ "reply": string, "feedback": string }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // EĞER MODEL CEVABI BLOKLARSA BURADA HATA OLUŞUR
    // text() fonksiyonu aday metin yoksa hata fırlatır.
    const rawText = response.text(); 
    const cleaned = stripCodeFences(rawText);
    const parsed = safeJsonParse(cleaned);

    // --- GRADE MODU ---
    if (mode === "grade") {
      const picked = pickGrade(parsed);
      if (!picked) return NextResponse.json(gradeFallback("Evaluation error. Please try again."));
      return NextResponse.json(picked);
    }

    // --- CHAT MODU ---
    let picked: ChatOut | null = null;
    try {
      picked = pickChat(parsed);
    } catch (e) {
      picked = null;
    }

    // JSON gelmediyse metni kurtar
    if (!picked) {
      if (cleaned.length > 0) return NextResponse.json({ reply: cleaned, feedback: "" } satisfies ChatOut);
      return NextResponse.json(chatFallback("I didn't catch that. Could you repeat?"));
    }

    if (!picked.reply) picked.reply = "I didn't catch that. Could you repeat?";
    if (!picked.feedback) picked.feedback = "";

    return NextResponse.json(picked);

  } catch (error: any) {
    // Hatayı konsola detaylı yazdır ki Vercel Loglarında görelim
    console.error("FULL API ERROR:", error);
    
    // Hatanın detayına göre mesaj döndür
    const errorMessage = error?.message || "Unknown error";
    
    if (errorMessage.includes("SAFETY")) {
       return NextResponse.json(chatFallback("My response was blocked by safety filters. Let's change the topic."));
    }

    if (mode === "grade") {
      return NextResponse.json(gradeFallback("Connection error. Try again."));
    }
    return NextResponse.json(chatFallback("Connection issue. Please try again."));
  }
}
