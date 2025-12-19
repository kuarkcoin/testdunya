// app/api/analyze-result/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { subject, mistakes } = await req.json();

    // API Anahtarı Kontrolü
    const keys = [
      process.env.GEMINI_API_KEY_1,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
    ].filter(Boolean) as string[];

    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const genAI = new GoogleGenerativeAI(randomKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // --- ÖĞRETMEN TALİMATI (PROMPT) ---
    const prompt = `
      GÖREV: 5. sınıf öğrencisi için sınav kağıdı analizi yap.
      DERS: ${subject}
      
      YANLIŞ YAPILAN SORULAR VE ÇÖZÜMLERİ:
      ${mistakes.map((m: any, i: number) => `${i+1}. Soru: ${m.prompt} | Çözüm Mantığı: ${m.explanation}`).join('\n')}

      ANALİZ KURALLARI:
      1. "Harika bir denemeydi", "Aferin", "Daha çok çalış" gibi boş cümleleri ASLA kullanma.
      2. Yanlış yapılan soruları oku ve hangi "KONU BAŞLIĞINDA" eksik olduğunu bul.
      3. Tespitin çok sert ve net olsun. Örn: "Hataların gösteriyor ki 'Ondalık Gösterimlerde Basamak İsimlerini' henüz tam kavrayamamışsın."
      4. Öğrenciye o konuyu halletmesi için kısa bir teknik tüyo ver.
      5. Toplamda sadece 3-4 cümle kur. Ezber cümle kurarsan başarısız sayılırsın.
    `;

    const result = await model.generateContent(prompt);
    return Response.json({ feedback: result.response.text() });

  } catch (error) {
    console.error("API HATASI:", error);
    return Response.json({ feedback: "TEKNİK HATA: Yapay zekaya ulaşılamadı. Lütfen API anahtarlarını kontrol et." }, { status: 500 });
  }
}
