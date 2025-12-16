import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const body = await request.json();
    const { message, history, mode } = body;

    // --- SENARYO 1: PUANLAMA MODU (FINISH) ---
    if (mode === 'grade') {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: { responseMimeType: "application/json" }
      });

      const prompt = `
        Act as a strict IELTS Examiner.
        Review the conversation history and provide evaluation.
        HISTORY: ${JSON.stringify(history)}
        
        Output JSON: { "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      // Temizlik Yapıyoruz (Markdown karakterlerini siliyoruz)
      const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return NextResponse.json(JSON.parse(cleanText));
    }

    // --- SENARYO 2: SOHBET MODU (CHAT) ---
    // Burada şema kullanmadan, manuel JSON istiyoruz (Daha hızlı ve hatasız çalışır)
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", 
      // responseMimeType kullanmıyoruz, manuel temizleyeceğiz. Bu daha güvenlidir.
    });

    const prompt = `
      You are an IELTS Speaking Examiner.
      CONVERSATION HISTORY: ${JSON.stringify(history)}
      USER JUST SAID: "${message}"
      
      INSTRUCTIONS:
      1. Reply naturally to the user.
      2. If this is the start, ask about their home, work, or studies.
      3. Keep reply short (max 2 sentences).
      4. If user made a grammar mistake, put it in 'feedback'. If not, leave 'feedback' empty string.
      
      YOU MUST RETURN ONLY A JSON OBJECT LIKE THIS:
      {
        "reply": "Your reply here",
        "feedback": "Correction here or empty"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    console.log("Ham Cevap:", text); // Vercel Loglarında görmek için

    // KRİTİK TEMİZLİK: Backtick'leri ve json yazılarını temizle
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();

    // Bazen AI süslü parantezin dışına yazı ekler, sadece { ile } arasını alalım
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1) {
      text = text.substring(firstBrace, lastBrace + 1);
    }

    try {
      const jsonResult = JSON.parse(text);
      return NextResponse.json(jsonResult);
    } catch (parseError) {
      console.error("JSON Parse Hatası:", text);
      // Eğer JSON bozuksa, manuel bir cevap uydurup çökmesini engelleyelim
      return NextResponse.json({
        reply: "Could you please repeat that? I didn't quite catch it.",
        feedback: ""
      });
    }

  } catch (error: any) {
    console.error('Genel API Hatası:', error);
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}
