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

    // --- ARTIK EZBER CÜMLE YOK, SADECE VERİ VE MANTIK VAR ---
    const prompt = `
      GÖREV: 5. sınıf öğrencisi için bir sınav sonuç analisti ve rehber öğretmen ol.
      
      VERİLER:
      - Ders: ${subject}
      - Başarı: ${total} soruda ${score} doğru.
      - Yanlış Yapılan Soruların Detayları:
      ${mistakes.map((m: any) => `Soru: ${m.prompt} | Çözüm Mantığı: ${m.explanation}`).join('\n')}

      ANALİZ TALİMATI:
      1. Yukarıdaki yanlış yapılan soruları ve çözüm açıklamalarını derinlemesine oku.
      2. Bu yanlışların arasındaki GİZLİ BAĞLANTIYI bul. (Örn: Öğrenci sürekli 'sıfatlar' konusunu mu yanlış yapmış? Yoksa 'okuduğunu anlama' kısmında bir dikkat hatası mı var?)
      3. Öğrenciye asla "Aferin", "Daha çok çalış" gibi jenerik/boş cümleler kurma.
      4. Doğrudan teşhisi koy: "Hatalarına baktığımda [şu konudaki] şu mantığı tam oturtamadığını görüyorum" şeklinde bir uzman yorumu yap.
      5. Bir öğretmenin kağıt üzerine düştüğü o samimi ve zeki not gibi olsun. 
      6. Cümleleri sen kur, kalıp kullanma. Maksimum 4-5 cümle olsun.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();

    return Response.json({ feedback });

  } catch (error) {
    console.error("AI Hatası:", error);
    return Response.json({ 
      feedback: "Hatalarını analiz ederken teknik bir sorun oluştu ama yanlış yaptığın soruların açıklamaları sana yol gösterecektir." 
    });
  }
}
