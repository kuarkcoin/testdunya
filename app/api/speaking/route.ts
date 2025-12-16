import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Vercel'de sorun çıkmaması için Node.js runtime zorunlu kılıyoruz
export const runtime = "nodejs";

// JSON patlarsa null döndüren güvenli fonksiyon
function safeJsonParse<T>(text: string): T | null {
  try {
    // Markdown bloğu varsa temizle (Örn: ```json ... ```)
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanText) as T;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const body = await request.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });

    const message = typeof body.message === "string" ? body.message : "";
    const history = Array.isArray(body.history) ? body.history : [];
    const mode = body.mode === "grade" ? "grade" : "chat";

    const genAI = new GoogleGenerativeAI(apiKey);

    // --- DİNAMİK AYARLAR (BURASI DEĞİŞTİ) ---
    // Chat modu hızlı ve kısa olmalı, Grade modu uzun ve detaylı olmalı.
    const generationConfig = mode === "grade" 
      ? {
          responseMimeType: "application/json",
          temperature: 0.2, // Puanlama yaparken tutarlı olsun, saçmalamasın
          maxOutputTokens: 2000, // Detaylı rapor için yüksek limit
        }
      : {
          responseMimeType: "application/json",
          temperature: 0.7, // Sohbet ederken biraz daha doğal/yaratıcı olsun
          maxOutputTokens: 300, // Sohbet cevapları kısa olsun
        };

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: generationConfig,
    });

    // Son 12 mesajı al (Token tasarrufu)
    const trimmedHistory = history.slice(-12);

    // --- PROMPT GÜÇLENDİRMESİ ---
    const prompt = mode === "grade"
      ? `Act as a strict IELTS Examiner.
         Analyze the conversation history below accurately.
         HISTORY: ${JSON.stringify(trimmedHistory)}
         
         OUTPUT SCHEMA (JSON ONLY):
         {
           "band_score": (number 0-9),
           "fluency_feedback": (string),
           "lexical_feedback": (string),
           "grammar_feedback": (string),
           "overall_comment": (string)
         }`
      : `You are a friendly IELTS Speaking Examiner.
         Keep your responses concise (1-2 sentences).
         Correct grammar mistakes strictly but briefly.
         
         HISTORY: ${JSON.stringify(trimmedHistory)}
         USER INPUT: "${message}"
         
         OUTPUT SCHEMA (JSON ONLY):
         {
           "reply": (string - your next question or comment),
           "feedback": (string - correction of user's grammar, or empty string if correct)
         }`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const parsed = safeJsonParse<any>(text);
    
    if (!parsed) {
      console.error("JSON Parse Failed. Raw text:", text);
      return NextResponse.json(
        mode === "grade"
          ? { band_score: 0, overall_comment: "Error analyzing score. Please try again." }
          : { reply: "I missed that. Could you repeat?", feedback: "" }
      );
    }

    return NextResponse.json(parsed);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ reply: "Connection error. Please try again.", feedback: "" });
  }
}
