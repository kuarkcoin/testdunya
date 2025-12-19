import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, score, total, mistakes } = body;

    // 1. Vercel'deki 5 Anahtarı Topla
    const keys = [
      process.env.GEMINI_API_KEY_1,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
    ].filter(Boolean) as string[];

    // 2. Anahtar Kontrolü (Eğer hiç anahtar yoksa hata döndür)
    if (keys.length === 0) {
      console.error("Vercel'de GEMINI_API_KEY_1...5 tanımlanmamış!");
      return Response.json({ feedback: "Sistem şu an kapalı (API Key eksik)." }, { status: 500 });
    }

    // 3. Rastgele bir anahtar seç (Yük dengeleme)
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const genAI = new GoogleGenerativeAI(randomKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 4. Analitik ve Sert Prompt (Ezber cümle yasağı eklendi)
    const prompt = `
      GÖREV: Bir 5. sınıf öğrencisinin sınav kağıdını inceleyen uzman bir öğretmensin.
      DERS: ${subject}
      SKOR: ${total} soruda ${score} doğru.

      YANLIŞ YAPILAN SORULAR VE ÇÖZÜM MANTIKLARI:
      ${mistakes.map((m: any, i: number) => `${i + 1}. Soru: "${m.prompt}" | Çözüm Notu: "${m.explanation}"`).join('\n')}

      ANALİZ KURALLARI:
      - Asla "Harika deneme", "Aferin", "Daha çok çalış" gibi jenerik/boş cümleler kurma.
      - Yanlışların içindeki "Çözüm Notu" kısımlarını oku ve öğrencinin hangi kuralı karıştırdığını bul.
      - Doğrudan teşhisi koy. Örn: "Hatalarına baktığımda ondalık gösterimlerde basamak kaydırmayı unuttuğunu fark ettim."
      - Öğrenciye o hatayı düzeltmesi için somut bir 'AHA!' anı yaşatacak kısa bir ipucu ver.
      - Sadece 3 veya 4 cümle kur. Her kelimen anlamlı ve analitik olsun.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) throw new Error("Gemini boş cevap döndürdü.");

    return Response.json({ feedback: text });

  } catch (error: any) {
    console.error("KRİTİK API HATASI:", error.message);
    
    // Hata durumunda basmakalıp mesaj yerine teknik bilgi veriyoruz ki sorunu anlayasın
    return Response.json({ 
      feedback: `Analiz hazırlanamadı. (Hata: ${error.message.substring(0, 50)}...)` 
    }, { status: 500 });
  }
}
