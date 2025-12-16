import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const { message, history, mode } = await request.json();

    // --- MODEL AYARI ---
    // En kararlı ve hızlı model şu an "gemini-1.5-flash".
    // Eğer "2.5" sizde çalışıyorsa onu da yazabilirsiniz ama garantisi yoktur.
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", 
      generationConfig: {
        // BU SATIR HAYAT KURTARIR: AI'yı JSON konuşmaya zorlar.
        // Artık "text.replace" ile uğraşmana gerek yok.
        responseMimeType: "application/json" 
      }
    });

    // --- SENARYO 1: PUANLAMA (FINISH) ---
    if (mode === 'grade') {
      const prompt = `
        Act as a strict IELTS Examiner.
        Review the conversation history below and provide a final evaluation.
        
        HISTORY: ${JSON.stringify(history)}
        
        OUTPUT FORMAT (JSON ONLY):
        {
          "band_score": (number 0-9),
          "fluency_feedback": (string),
          "lexical_feedback": (string),
          "grammar_feedback": (string),
          "overall_comment": (string)
        }
      `;

      const result = await model.generateContent(prompt);
      const jsonResponse = JSON.parse(result.response.text());
      return NextResponse.json(jsonResponse);
    }

    // --- SENARYO 2: SOHBET (CHAT) ---
    const prompt = `
      You are an IELTS Speaking Examiner.
      
      CONTEXT:
      Conversation History: ${JSON.stringify(history)}
      User's Last Input: "${message}"
      
      TASK:
      1. Respond naturally to the user (keep it conversational, max 2 sentences).
      2. If the user made a specific grammar mistake in the LAST input, correct it in 'feedback'. Otherwise leave 'feedback' empty string "".
      
      OUTPUT FORMAT (JSON ONLY):
      {
        "reply": "Your response here",
        "feedback": "Correction or empty string"
      }
    `;

    const result = await model.generateContent(prompt);
    const jsonResponse = JSON.parse(result.response.text());
    
    return NextResponse.json(jsonResponse);

  } catch (error: any) {
    console.error('API Error:', error);
    // Hata olsa bile kullanıcıya cevap dön ki sistem kilitlenmesin
    return NextResponse.json({ 
      reply: "I'm having trouble connecting. Could you say that again?", 
      feedback: "" 
    });
  }
}
