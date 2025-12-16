import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const body = await request.json();
    const { message, history, mode } = body;

    // --- MODEL SEÇİMİ ---
    // Burayı isterseniz "gemini-2.0-flash-exp" yapabilirsiniz.
    // Ama "gemini-1.5-flash" en kararlı olandır.
    const modelName = "gemini-2.5-flash"; 

    // --- SENARYO 1: PUANLAMA (FINISH) ---
    if (mode === 'grade') {
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: { responseMimeType: "application/json" }
      });

      const prompt = `
        Act as a strict IELTS Examiner.
        Review history and provide evaluation.
        HISTORY: ${JSON.stringify(history)}
        Output JSON: { "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      // Temizlik: Markdown ve tırnak işaretlerini temizle
      const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return NextResponse.json(JSON.parse(cleanText));
    }

    // --- SENARYO 2: SOHBET (CHAT) ---
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `
      You are an IELTS Speaking Examiner.
      HISTORY: ${JSON.stringify(history)}
      USER SAID: "${message}"
      
      TASK:
      1. Reply naturally (max 2 sentences).
      2. If user made a grammar mistake, put correction in 'feedback'. Else empty.
      
      RETURN ONLY JSON:
      {
        "reply": "Your reply here",
        "feedback": "Correction or empty"
      }
    `;

    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // --- DONMA SORUNUNU ÇÖZEN TEMİZLİK KODU ---
    // Gemini bazen ```json ile başlar, bunu siliyoruz.
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    // Bazen süslü parantez dışına taşar, sadece { ... } arasını alıyoruz.
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1) {
      text = text.substring(firstBrace, lastBrace + 1);
    }

    try {
      return NextResponse.json(JSON.parse(text));
    } catch (e) {
      console.error("JSON Parse Hatası:", text);
      // Hata olursa donmasın diye manuel cevap dönüyoruz
      return NextResponse.json({
        reply: "Could you please repeat that? I missed it.",
        feedback: ""
      });
    }

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
