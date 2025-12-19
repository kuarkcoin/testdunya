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

    // --- GERÇEK ANALİZ PROMPT'U ---
    const prompt = `
      Sen 5. sınıf öğrencisinin sınav kağıdını inceleyen bir eğitim uzmanısın. 
      LÜTFEN BASMAKALIP CÜMLELER (Aferin, çalışmalısın, harika deneme vb.) KULLANMA. 
      
      DERS: ${subject}
      SKOR: ${total} soruda ${score} doğru.
      
      ÖĞRENCİNİN YANLIŞLARI:
      ${mistakes.map((m: any) => `- Soru: ${m.prompt} | Çözüm Notu: ${m.explanation}`).join('\n')}

      GÖREVİN:
      1. Yukarıdaki yanlış yapılan soruları ve açıklamalarını Oku. 
      2. Bu soruların hangi "Kazanım" veya "Konu Başlığı" altında toplandığını bul. 
      3. Öğrenciye doğrudan eksiğini söyle. Örn: "Hataların gösteriyor ki 'Bileşik Kesirleri Tam Sayılı Kesre Çevirme' konusunda bir mantık hatası yapıyorsun." 
      4. Eğer sorular farklı konulardaysa, öğrencinin dikkat hatası mı yaptığını yoksa temel bir bilgi eksiği mi olduğunu teşhis et.
      5. "Genel tekrar yap" deme. "Şu kurala (kuralın adını vererek) bir daha bakmalısın" de.
      
      ÜSLUP: Net, ciddi ama samimi bir öğretmen notu gibi. Maksimum 4 cümle.
    `;

    const result = await model.generateContent(prompt);
    return Response.json({ feedback: result.response.text() });

  } catch (error) {
    return Response.json({ feedback: "Hatalarını analiz ederken bir sorun oldu ama soruların çözümleri sana yol gösterecek." });
  }
}
