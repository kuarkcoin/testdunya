import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GOOGLE_API_KEY bulunamadı (Vercel env)" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-pro", // ✅ BURASI KRİTİK
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const { essay, taskType, contextData } = await request.json();

    const result = await model.generateContent(`
You are an official IELTS examiner.

Task Type: ${taskType}
Context: ${contextData || "N/A"}

Evaluate the essay below.

Essay:
${essay}

Respond ONLY in valid JSON:
{
  "score": 0,
  "feedback": "string",
  "corrections": ["string", "string"]
}
`);

    const text = result.response.text();
    const cleanText = text.replace(/```json|```/g, '').trim();

    return NextResponse.json(JSON.parse(cleanText));

  } catch (error: any) {
    console.error("GEMINI ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}