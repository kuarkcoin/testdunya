import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    // 1. API Anahtarını Al
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key bulunamadı (Vercel Ayarları)" }, { status: 500 });
    }

    // 2. Google AI Kurulumu
    const genAI = new GoogleGenerativeAI(apiKey);

    // --- KRİTİK DÜZELTME BURADA ---
    // Eski kodda "gemini-pro" kalmış olabilir. Bunu "gemini-1.5-flash" yapıyoruz.
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-001",  // <--- BURASI DEĞİŞTİ
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.NUMBER },
            feedback: { type: SchemaType.STRING },
            corrections: { 
              type: SchemaType.ARRAY, 
              items: { type: SchemaType.STRING } 
            }
          }
        }
      }
    });

    const { essay, taskType, contextData } = await request.json();

    // 3. Prompt (İngilizce Talimat - Doktorlar için daha iyi)
    const prompt = `
      Act as an IELTS Examiner.
      Task: ${taskType}
      Context: ${contextData || "General Topic"}
      Essay: "${essay}"
      
      Output strictly in JSON format:
      {
        "score": (number 0-9),
        "feedback": (string in Academic English),
        "corrections": (array of strings showing mistakes)
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // JSON Temizliği (Garantilemek için)
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return NextResponse.json(JSON.parse(cleanText));

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error.message || "Model Hatası" },
      { status: 500 }
    );
  }
}
