import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { subject, score, total, mistakes } = await req.json();

    // 1. Vercel'e eklediğin 5 anahtarı listeye alıyoruz
    const keys = [
      process.env.GEMINI_API_KEY_1,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
    ].filter(Boolean) as string[];

    // 2. Rastgele bir anahtar seçerek yükü dağıtıyoruz (Rate Limit engelleme)
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    if (!randomKey) {
      console.error("HATA: Hiçbir GEMINI_API_KEY bulunamadı!");
      return Response.json({ feedback: "Harika bir denemeydi! Hatalarını inceleyerek çok daha başarılı olabilirsin." });
    }

    const genAI = new GoogleGenerativeAI(randomKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 3. 5. Sınıf seviyesine uygun "Öğretmen" talimatı (Prompt)
    const prompt = `
      Sen 5. sınıf öğrencilerine (10-11 yaş) rehberlik yapan, çok sevecen ve motive edici bir öğretmensin. 
      Öğrenci şu an ${subject} dersinden bir test bitirdi.
      Başarı Durumu: ${total} soruda ${score} doğru yaptı.
      
      Öğrencinin yanlış yaptığı sorular ve o soruların konuları:
      ${mistakes.map((m: any) => `- Soru: ${m.prompt} | Konu Açıklaması: ${m.explanation}`).join('\n')}

      Senden isteğim:
      1. Öğrenciyi ismen değil, "Genç Şampiyon" veya "Geleceğin Bilgini" gibi genel ama sıcak bir hitapla karşıla.
      2. Skoru düşükse moral ver, yüksekse tebrik et.
      3. Yanlış yaptığı sorulara bakarak hangi konularda eksiği olduğunu (örneğin: "ondalık sayılar" veya "zaman zarfları") nazikçe belirt.
      4. "Bu eksiklerini kapatırsan bir sonraki testte parlayacaksın!" şeklinde bir bitiriş yap.
      
      NOT: Cevabın maksimum 4 cümle olsun ve dili çok basit, 5. sınıf seviyesinde olsun.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();

    return Response.json({ feedback });

  } catch (error) {
    console.error("Gemini API Hatası:", error);
    // Hata durumunda öğrenciye boş dönmek yerine genel bir motivasyon mesajı veriyoruz
    return Response.json({ 
      feedback: "Gayretin gerçekten takdire şayan! Yanlış yaptığın soruların açıklamalarını okuyarak eksiklerini hemen kapatabilirsin. Bir sonraki testte çok daha iyi olacağına eminim!" 
    });
  }
}
