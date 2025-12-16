import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key Vercel ayarlarında yok!" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: {
        responseMimeType: "application/json"
      }
    });

    const { essay, taskType } = await request.json();

    const result = await model.generateContent(`
      IELTS Examiner puanlaması yap.
      Task: ${taskType}
      Essay: ${essay}
      Lütfen sadece şu JSON formatında cevap ver: 
      {"score": 0, "feedback": "tr", "corrections": []}
    `);

    const text = result.response.text();
    // JSON temizliği (Bazen AI markdown ekler)
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return NextResponse.json(JSON.parse(cleanText));

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
