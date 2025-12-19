import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { subject, score, total, mistakes } = await req.json();

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

    // --- BURASI KRİTİK: GEMINI'YE ANALİZ YAPTIRIYORUZ ---
    const prompt = `
      Sen 5. sınıf öğrencileri için bir Veri Analiz Uzmanı ve Pedagojik Rehbersin. 
      Öğrenci ${subject} testinde ${total} soruda ${score} doğru yaptı.
      
      ÖĞRENCİNİN HATALARI:
      ${mistakes.map((m: any) => `Soru: ${m.prompt} | Çözüm Mantığı: ${m.explanation}`).join('\n')}

      GÖREVİN:
      1. Yukarıdaki hataları tek tek oku. Bu hataların ortak bir paydası var mı? (Örneğin: Hepsi ondalık sayılar mı? Yoksa okuduğunu anlamada mı sorun var?)
      2. Öğrenciye "Şu konularda çok iyisin ama GÖRDÜĞÜM KADARIYLA [Spesifik Konu Adı] kısmında bir mantık hatası yapıyorsun" şeklinde bir tespit yap.
      3. Tespitin çok net olsun. Genel cümleler kurma. "Hatalarına baktığımda toplama yaparken eldeyi unuttuğunu fark ettim" gibi çok spesifik bir şey söyle.
      4. Ona bir tane "Altın Tavsiye" ver.
      
      DİL: Samimi, 11 yaşındaki bir çocuğun anlayacağı kadar basit ama bir o kadar da zeki bir öğretmen dili. Maksimum 5 cümle.
    `;

    const result = await model.generateContent(prompt);
    return Response.json({ feedback: result.response.text() });

  } catch (error) {
    return Response.json({ feedback: "Hatalarını analiz ederken bir sorun oluştu ama gayretin müthiş!" });
  }
}
