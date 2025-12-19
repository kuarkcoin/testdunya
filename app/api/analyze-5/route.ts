// app/api/analyze-result/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { subject, score, total, mistakes } = await req.json();

    // HATA KONTROLÜ: Eğer hata listesi boşsa yapay zekayı boşuna yorma
    if (!mistakes || mistakes.length === 0) {
      return Response.json({ feedback: "Mükemmel! Hiç hata yapmadın, konuya tam hakimsin. Şampiyon sensin! 🏆" });
    }

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

    // --- GERÇEK ANALİZ TALİMATI ---
    const prompt = `
      SİSTEM TALİMATI: Sen bir robot değilsin. Sen öğrencinin sınav kağıdını inceleyen, hataların altındaki psikolojik ve bilgi eksikliğini bulan bir EĞİTİM ANALİSTİSİN.
      
      ÖĞRENCİ VERİLERİ:
      - Ders: ${subject}
      - Skor: ${total} soruda ${score} doğru.
      - HATALI SORULAR VE ÇÖZÜM NOTLARI:
      ${mistakes.map((m: any, i: number) => `${i+1}. Soru: "${m.prompt}" | Çözüm Açıklaması: "${m.explanation}"`).join('\n')}

      ANALİZ KURALLARI (KESİNLİKLE UY):
      1. "Harika bir denemeydi", "Hatalarından ders çıkar", "Başarılar dilerim" gibi BASMAKALIP cümleleri ASLA kullanma. Eğer kullanırsan sistem hata verir.
      2. Yanlış yapılan soruları oku ve ortak paydayı bul. (Örn: "Senin sorunun genel matematik değil, 'Bölme işleminde kalanlı sonuçlar' kısmında takılıyorsun" gibi).
      3. Öğrenciye bir "Aydınlanma Anı" yaşat: "Yanlış yaptığın 3 soruda da aynı kavramı (kavramın adını ver) yanlış yorumladığını fark ettim." de.
      4. Tavsiyen çok spesifik olsun. "Konu tekrarı yap" deme. "Güneş'in katmanlarını karıştırıyorsun, en içteki çekirdeği bir şeftalinin çekirdeğine benzeterek çalış" gibi somut bir şey söyle.
      
      ÜSLUP: Zeki, dikkatli, samimi bir öğretmen. Maksimum 4 cümle.
    `;

    const result = await model.generateContent(prompt);
    const feedback = result.response.text();

    return Response.json({ feedback });

  } catch (error) {
    // Eğer burası çalışıyorsa, Vercel'deki anahtarlarında veya bağlantıda sorun vardır.
    return Response.json({ feedback: "Hatalarını analiz ederken bir bağlantı sorunu oldu ama yanlış yaptığın soruların altındaki çözümler sana rehberlik edecek!" });
  }
}
