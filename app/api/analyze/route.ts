// app/api/analyze/route.ts

import { NextResponse } from 'next/server';
// DİKKAT: Sizin package.json'daki kütüphane budur:
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// 1. Kurulum
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: Request) {
  try {
    const { essay, taskType, contextData } = await request.json();

    if (!essay || essay.length < 50) {
      return NextResponse.json(
        { error: "Metin çok kısa. Lütfen en az 50 karakter yazın." },
        { status: 400 }
      );
    }

    // 2. Modeli Seçiyoruz (Bu kütüphane ile bu sözdizimi kullanılır)
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.NUMBER, description: "IELTS Band Score (0-9)" },
            feedback: { type: SchemaType.STRING, description: "Detailed feedback in Turkish" },
            corrections: { 
              type: SchemaType.ARRAY, 
              items: { type: SchemaType.STRING },
              description: "List of mistakes" 
            }
          }
        }
      }
    });

    // 3. Prompt
    const prompt = `
      Sen bir IELTS sınav değerlendirmenisin.
      Task: ${taskType}
      Konu: ${contextData || "Genel"}
      
      Öğrenci Yazısı:
      "${essay}"
      
      Görevin:
      1. Puanla (score).
      2. Türkçe geri bildirim ver (feedback).
      3. Hataları listele (corrections).
    `;

    // 4. İsteği Gönder
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Sonucu al
    const jsonResult = JSON.parse(response.text());

    return NextResponse.json(jsonResult);

  } catch (error) {
    console.error('API Hatası:', error);
    return NextResponse.json(
      { error: "Analiz sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
