import { NextResponse } from 'next/server';
// DÜZELTME: Senin sistemindeki yüklü kütüphane bu:
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const { message, history, mode } = await request.json(); // mode: 'chat' | 'grade'

    // --- SENARYO 1: PUANLAMA MODU (FINISH & SCORE) ---
    if (mode === 'grade') {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              band_score: { type: SchemaType.NUMBER },
              fluency_feedback: { type: SchemaType.STRING },
              lexical_feedback: { type: SchemaType.STRING },
              grammar_feedback: { type: SchemaType.STRING },
              pronunciation_feedback: { type: SchemaType.STRING },
              overall_comment: { type: SchemaType.STRING }
            }
          }
        }
      });

      const prompt = `
        Act as a strict IELTS Examiner.
        Review the following conversation history and provide a final evaluation.
        
        CRITERIA:
        1. Fluency & Coherence
        2. Lexical Resource
        3. Grammatical Range & Accuracy
        4. Pronunciation (Estimate based on text flow/complexity)

        CONVERSATION HISTORY:
        ${JSON.stringify(history)}

        TASK:
        Provide an estimated Band Score (0-9) and detailed feedback for each criterion in ENGLISH.
      `;

      const result = await model.generateContent(prompt);
      const jsonResult = JSON.parse(result.response.text());
      return NextResponse.json(jsonResult);
    }

    // --- SENARYO 2: SOHBET MODU (CHAT) ---
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            reply: { type: SchemaType.STRING },
            feedback: { type: SchemaType.STRING },
          }
        }
      }
    });

    const prompt = `
      You are an IELTS Speaking Examiner.
      
      HISTORY: ${JSON.stringify(history)}
      USER SAID: "${message}"
      
      TASK:
      1. Reply naturally and ask the next relevant question.
      2. Keep responses short (1-2 sentences).
      3. If the user made a grammar mistake in the last sentence, provide a correction in 'feedback' (in English). If no mistake, leave empty.
      4. DO NOT give a score yet.
    `;

    const result = await model.generateContent(prompt);
    const jsonResult = JSON.parse(result.response.text());
    return NextResponse.json(jsonResult);

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
