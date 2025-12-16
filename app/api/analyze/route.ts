import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const runtime = "nodejs";
// Writing analizi uzun sürer, Vercel süresini 60 saniyeye çıkarıyoruz
export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

// --- API KEY YÖNETİMİ ---
function getApiKeys(): string[] {
  return [
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_KEY_2,
    process.env.GOOGLE_KEY_3,
    process.env.GOOGLE_KEY_4,
    process.env.GOOGLE_KEY_5,
  ].filter((k): k is string => Boolean(k));
}

// Hata Toleransı (Failover) Fonksiyonu
async function withFailover<T>(fn: (key: string) => Promise<T>) {
  const keys = getApiKeys();
  if (keys.length === 0) throw new Error("No API Keys found in Vercel settings.");

  const start = Math.floor(Math.random() * keys.length);
  let lastErr: any = null;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[(start + i) % keys.length];
    try {
      return await fn(key);
    } catch (e: any) {
      const msg = String(e?.message || e);
      lastErr = e;
      console.warn(`Key ending in ...${key.slice(-4)} failed: ${msg}`);

      // Sadece Kota (429) veya Sunucu (503) hatalarında diğer anahtara geç
      if (
        msg.includes("429") || 
        msg.toLowerCase().includes("quota") || 
        msg.toLowerCase().includes("too many requests") || 
        msg.includes("503")
      ) {
        continue;
      }
      throw e; // Diğer hatalarda (örn: Prompt hatası) direkt dur
    }
  }
  throw lastErr ?? new Error("All API keys failed.");
}

// --- YARDIMCI FONKSİYONLAR ---
function stripCodeFences(s: string) {
  return String(s || "").replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
}

function safeJsonParse(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}

// --- ANA FONKSİYON ---
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { essay, taskType } = body;

    if (!essay || !taskType) {
      return NextResponse.json({ error: "Essay or Task Type missing" }, { status: 400 });
    }

    // withFailover içine alarak 5 anahtarı sırayla deniyoruz
    const result = await withFailover(async (apiKey) => {
      const genAI = new GoogleGenerativeAI(apiKey);
      
      // Writing için 'gemini-1.5-flash' hem hızlı hem de geniş kotalıdır.
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.3, // Analiz tutarlı olsun diye düşük sıcaklık
        }
      });

      const prompt = `
        Act as a strict IELTS Examiner. Score this essay based on IELTS criteria.
        
        TASK TYPE: ${taskType}
        ESSAY:
        "${essay}"

        OUTPUT JSON FORMAT ONLY:
        {
          "score": (number 0-9),
          "feedback": (string - detailed feedback on Task Response, Coherence, Lexical, Grammar),
          "corrections": (array of strings - list specific sentences corrected)
        }
      `;

      return await model.generateContent(prompt);
    });

    const rawText = result.response.text();
    const cleaned = stripCodeFences(rawText);
    const parsed = safeJsonParse(cleaned);

    if (!parsed) {
      return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
    }

    return NextResponse.json(parsed);

  } catch (error: any) {
    console.error("WRITING API ERROR:", error);
    
    // Kota hatasıysa kullanıcıya beklemesini söyle
    const msg = String(error?.message || error);
    if (msg.includes("429") || msg.includes("quota")) {
      return NextResponse.json(
        { error: "System is busy (Rate Limit). Please try again in 30 seconds." }, 
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Analysis failed. Please try again." }, 
      { status: 500 }
    );
  }
}
