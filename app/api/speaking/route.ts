import { NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Vercel zaman aşımını 60 saniyeye çıkar
export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

// --- YARDIMCI FONKSİYONLAR ---

function stripCodeFences(s: string) {
  return String(s || "").replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
}

function safeJsonParse(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}

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
    return { role, text: String(text) };
  });
}

function formatHistoryForPrompt(history: { role: string; text: string }[]) {
  return history.map((h) => `${h.role === "user" ? "User" : "Examiner"}: ${h.text}`).join("\n");
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

// --- ANA FONKSİYON ---

export async function POST(request: Request) {
  // 1. ADIM: API KEY KONTROLÜ
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("HATA: API Key yok!");
    return NextResponse.json({ reply: "DEBUG ERROR: Google API Key is missing in Vercel Settings.", feedback: "" });
  }

  // 2. ADIM: BODY PARSE
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const mode = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];

  const normalizedHistory = normalizeHistory(historyRaw).slice(-10);
  const historyText = formatHistoryForPrompt(normalizedHistory);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
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

    const prompt = mode === "grade"
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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text(); 
    const cleaned = stripCodeFences(rawText);
    const parsed = safeJsonParse(cleaned);

    if (mode === "grade") {
      const picked = pickGrade(parsed);
      return NextResponse.json(picked || { band_score: 0, overall_comment: "Evaluation Failed: " + rawText });
    }

    let picked = pickChat(parsed);
    if (!picked) {
      if (cleaned.length > 0) return NextResponse.json({ reply: cleaned, feedback: "" });
      // JSON bozuksa ham metni gösterelim ki hatayı anlayalım
      return NextResponse.json({ reply: "DEBUG PARSE ERROR. Raw Output: " + rawText.slice(0, 100), feedback: "" });
    }

    return NextResponse.json(picked);

  } catch (error: any) {
    console.error("API ERROR:", error);
    
    // --- BURASI DEĞİŞTİ: GERÇEK HATAYI EKRANA BASIYORUZ ---
    const errorMessage = error.message || error.toString();
    
    return NextResponse.json({ 
      reply: `SYSTEM ERROR: ${errorMessage}`, 
      feedback: "Please report this error." 
    }); 
  }
}
