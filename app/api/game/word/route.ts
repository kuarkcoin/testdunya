import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

function getApiKeys(): string[] {
  return [
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_KEY_2,
    process.env.GOOGLE_KEY_3,
    process.env.GOOGLE_KEY_4,
    process.env.GOOGLE_KEY_5,
  ].filter((k): k is string => Boolean(k));
}

async function withFailover<T>(fn: (key: string) => Promise<T>) {
  const keys = getApiKeys();
  if (keys.length === 0) throw new Error("API Keys missing.");
  const start = Math.floor(Math.random() * keys.length);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[(start + i) % keys.length];
    try {
      return await fn(key);
    } catch (e: any) {
      if (String(e).includes("429") || String(e).includes("quota")) continue;
      throw e;
    }
  }
  throw new Error("All keys failed.");
}

export async function POST() {
  try {
    const result = await withFailover(async (apiKey) => {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generationConfig: { responseMimeType: "application/json" } });

      const prompt = `
        Select a random, advanced (B2, C1, or C2 level) academic English word useful for IELTS.
        Return ONLY a JSON object with this format:
        {
          "word": "PRECISE", 
          "definition": "Marked by exactness and accuracy of expression or detail.",
          "synonym": "Exact",
          "example_sentence": "The victim gave a ______ description of the attacker.",
          "turkish_meaning": "Tam, kesin"
        }
        Do not use the word inside the definition.
      `;

      return await model.generateContent(prompt);
    });

    const text = result.response.text();
    return NextResponse.json(JSON.parse(text));

  } catch (error) {
    return NextResponse.json({ error: "Failed to generate word" }, { status: 500 });
  }
}
