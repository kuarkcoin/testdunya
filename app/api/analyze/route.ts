// app/api/analyze/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    // 1. Şifre Kontrolü
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      console.error("HATA: API Anahtarı Vercel'de bulunamadı!");
      return NextResponse.json({ error: "Server API Key Missing" }, { status: 500 });
    }

    // 2. Kurulum
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // En güvenli model
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.NUMBER },
            feedback: { type: SchemaType.STRING },
            corrections: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } }
          }
        }
      }
    });

    // 3. Veriyi Al
    const { essay, taskType } = await request.json();
    
    // 4. Gemini'ye Gönder
    const result = await model.generateContent(`
      Act as an IELTS Examiner. Score this essay.
      Task: ${taskType}
      Essay: "${essay}"
      Output JSON format: { score, feedback, corrections }
    `);

    // 5. Sonucu Döndür
    const jsonResponse = JSON.parse(result.response.text());
    return NextResponse.json(jsonResponse);

  } catch (error: any) {
    console.error("VERCEL LOG HATASI:", error); // Hatayı Loglara basar
    return NextResponse.json(
      { error: error.message || "Bilinmeyen bir hata oluştu" }, 
      { status: 500 }
    );
  }
}
