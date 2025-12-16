import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// API Anahtarı Kontrolü
const apiKey = process.env.GOOGLE_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(request: Request) {
  try {
    // 1. Anahtar Yoksa Hata Ver (Dedektif Modu)
    if (!apiKey || !genAI) {
      console.error("GOOGLE_API_KEY eksik!");
      return NextResponse.json(
        { error: "Server Error: API Key is missing in Vercel settings." },
        { status: 500 }
      );
    }
 
    const { essay, taskType, contextData } = await request.json();

    if (!essay || essay.length < 50) {
      return NextResponse.json(
        { error: "Essay is too short. Please write at least 50 characters." },
        { status: 400 }
      );
    }

    // 2. Modeli Yapılandır (JSON Modu)
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.NUMBER, description: "IELTS Band Score (0-9)" },
            feedback: { type: SchemaType.STRING, description: "Detailed feedback in Academic English" },
            corrections: { 
              type: SchemaType.ARRAY, 
              items: { type: SchemaType.STRING },
              description: "List of critical grammar/vocab mistakes and their corrections in English" 
            }
          }
        }
      }
    });

    // 3. Prompt (İngilizce Talimat)
    const prompt = `
      Act as a strict IELTS Examiner.
      
      TASK:
      Score the student's essay based on official IELTS criteria (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range).
      
      CONTEXT INFO:
      Task Type: ${taskType}
      Question/Data (Hidden): ${contextData || "General Topic"}
      
      RULES:
      1. Task Achievement: If the student contradicts the "Hidden Data", lower the score significantly.
      2. Feedback: Provide constructive feedback in ACADEMIC ENGLISH.
      3. Corrections: List top 3-5 mistakes.
      
      STUDENT ESSAY:
      "${essay}"
    `;

    // 4. Cevabı Al
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // JSON Parse
    const jsonResult = JSON.parse(text);

    return NextResponse.json(jsonResult);

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: `Analysis failed: ${error.message}` },
      { status: 500 }
    );
  }
}
