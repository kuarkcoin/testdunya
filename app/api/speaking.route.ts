import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: Request) {
  try {
    // Frontend'den gelen konuşma geçmişini ve son mesajı alıyoruz
    const { message, history } = await request.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // Hızlı cevap için ideal
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            reply: { type: SchemaType.STRING, description: "Examiner's next question or comment in English" },
            feedback: { type: SchemaType.STRING, description: "Brief grammar correction of the user's last sentence (if any) in Turkish" },
            state: { type: SchemaType.STRING, description: "Current stage: 'intro', 'part1', 'part2', 'finished'" }
          }
        }
      }
    });

    // Yapay Zekaya Rol Veriyoruz
    const prompt = `
      You are a friendly but professional IELTS Speaking Examiner.
      
      CONTEXT:
      We are doing a simulation.
      Previous Conversation History: ${JSON.stringify(history)}
      
      USER'S LAST INPUT:
      "${message}"
      
      YOUR TASK:
      1. Respond to what the user said naturally.
      2. Ask a follow-up question (like IELTS Part 1: Hobbies, Hometown, Work, etc.).
      3. If the user makes a grammar mistake, provide a short correction in "feedback".
      4. Keep your replies short (1-2 sentences) so the user can speak more.
      
      Return JSON: { reply, feedback, state }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonResult = JSON.parse(response.text());

    return NextResponse.json(jsonResult);

  } catch (error: any) {
    console.error('Speaking API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
