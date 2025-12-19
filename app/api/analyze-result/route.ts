import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";
export const maxDuration = 60; 

// --- API ANAHTARLARINI YÖNETEN FONKSİYON ---
function getApiKeys(): string[] {
  return [
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_KEY_2,
    process.env.GOOGLE_KEY_3,
    process.env.GOOGLE_KEY_4,
    process.env.GOOGLE_KEY_5,
  ].filter((k): k is string => Boolean(k));
}

// 429 (Kota) veya hata olursa diğer key'leri sırayla dene
async function withFailover<T>(fn: (key: string) => Promise<T>) {
  const keys = getApiKeys();
  if (keys.length === 0) throw new Error("Vercel ayarlarında API anahtarı bulunamadı.");

  const start = Math.floor(Math.random() * keys.length);
  let lastErr: any = null;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[(start + i) % keys.length];
    try {
      return await fn(key);
    } catch (e: any) {
      lastErr = e;
      const msg = String(e?.message || e);
      console.warn(`Key failed (Ending with ...${key.slice(-4)}): ${msg}`);
      if (msg.includes("429") || msg.toLowerCase().includes("quota") || msg.includes("503")) continue;
      throw e; 
    }
  }
  throw lastErr;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ feedback: "Hatalı veri girişi." });

  try {
    const { subject, score, total, mistakes } = body;

    const result = await withFailover(async (apiKey) => {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        GÖREV: 5. sınıf öğrencisi için bir sınav sonuç analisti ve rehber öğretmen ol.
        DERS: ${subject}
        SKOR: ${total} soruda ${score} doğru.
        
        YANLIŞ YAPILAN SORULAR VE ÇÖZÜM NOTLARI:
        ${mistakes.map((m: any, i: number) => `${i+1}. Soru: "${m.prompt}" | Çözüm Notu: "${m.explanation}"`).join('\n')}

        TALİMAT:
        1. "Harika deneme", "Aferin" gibi basmakalıp cümleler KURMA.
        2. Yanlış yapılan soruları ve çözümleri ODAKLANARAK oku.
        3. Öğrencinin hangi konuyu (Örn: "ondalık sayılar", "yazım kuralları" vb.) anlamadığını tam olarak TESPİT ET.
        4. Öğrenciye: "Hatalarına baktığımda [Konu Adı] kısmında zorlandığını fark ettim" şeklinde bir uzman yorumu yap.
        5. Çok samimi, motive edici ama bir o kadar da zeki bir öğretmen dili kullan. Maksimum 4-5 cümle.
      `;

      return await model.generateContent(prompt);
    });

    const feedback = result.response.text();
    return NextResponse.json({ feedback });

  } catch (error: any) {
    console.error("ANALİZ HATASI:", error);
    return NextResponse.json({ feedback: "Şu an analiz yapılamıyor, ancak gayretin harika!" });
  }
}
