import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, score, total, mistakes } = body;

    // 1. Ekran görüntüsündeki isimlere göre anahtarları okuyoruz
    const keys = [
      process.env.GOOGLE_API_KEY, // 1. anahtarın ismi bu
      process.env.GOOGLE_KEY_2,   // 2. anahtarın ismi bu
      process.env.GOOGLE_KEY_3,
      process.env.GOOGLE_KEY_4,
      process.env.GOOGLE_KEY_5,   // Eğer 5. varsa onu da ekledim
    ].filter(Boolean) as string[];

    // 2. Kontrol: Anahtar bulundu mu?
    if (keys.length === 0) {
      console.error("Vercel'deki isimler kodla eşleşmiyor!");
      return Response.json({ feedback: "Sistem kapalı: Anahtarlar bulunamadı." }, { status: 500 });
    }

    // 3. Rastgele anahtar seçimi
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const genAI = new GoogleGenerativeAI(randomKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Sen 5. sınıf öğrencilerine (10-11 yaş) rehberlik yapan uzman bir öğretmensin. 
      Lütfen basmakalıp cümle kullanma. 
      Ders: ${subject}
      Skor: ${total} soruda ${score} doğru.
      
      Yanlış Yapılan Sorular:
      ${mistakes.map((m: any) => `- Soru: ${m.prompt} | Çözüm: ${m.explanation}`).join('\n')}

      GÖREVİN:
      Yanlış yapılan soruların çözümlerini oku. Öğrencinin hangi konuyu (örneğin: 'noktalama işaretleri' veya 'ondalık sayılar') anlamadığını tespit et. 
      Ona "Hatalarına baktığımda [şu konuyu] tam oturtamadığını fark ettim" de ve samimi bir tavsiye ver. 
      Maksimum 4 cümle olsun.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ feedback: text });

  } catch (error: any) {
    console.error("API Hatası:", error.message);
    return Response.json({ feedback: "Analiz şu an hazırlanamadı, lütfen tekrar dene." }, { status: 500 });
  }
}
