import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: Request) {
  try {
    const { essay, taskType, contextData } = await request.json();

    if (!essay || essay.length < 50) {
      return NextResponse.json(
        { error: "Essay is too short. Please write at least 50 characters." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.NUMBER, description: "IELTS Band Score (0-9)" },
            feedback: { type: SchemaType.STRING, description: "Detailed feedback in English" },
            corrections: { 
              type: SchemaType.ARRAY, 
              items: { type: SchemaType.STRING },
              description: "List of grammar/vocab mistakes and corrections in English" 
            }
          }
        }
      }
    });

    // PROMPT GÜNCELLENDİ: ARTIK İNGİLİZCE CEVAP İSTİYORUZ
    const prompt = `
      Act as a professional IELTS Examiner.
      
      TASK:
      Score the student's essay based on IELTS criteria (Task Achievement, Coherence, Lexical Resource, Grammatical Range).
      
      CONTEXT:
      Task Type: ${taskType}
      Question/Graph Data (Hidden Context): ${contextData || "General Topic."}
      
      RULES:
      1. Check Task Achievement: If the student contradicts the "Hidden Context" data, lower the score.
      2. Provide feedback in encouraging ACADEMIC ENGLISH.
      3. List the top 3-5 critical mistakes in the "corrections" list.
      
      STUDENT ESSAY:
      "${essay}"
    `;

    const result = await model.generateContent(prompt);
    const jsonResult = JSON.parse(result.response.text());

    return NextResponse.json(jsonResult);

  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: "An error occurred during analysis. Please try again." },
      { status: 500 }
    );
  }
}
