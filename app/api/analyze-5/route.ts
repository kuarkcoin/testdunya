import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { subject, score, total, mistakes } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Sen 5. sınıf öğrencilerine rehberlik yapan, motive edici bir öğretmensin. 
    Öğrenci ${subject} dersinden bir test çözdü.
    Sonuç: ${total} soruda ${score} doğru yaptı.
    Yanlış yaptığı soruların konuları ve detayları şunlar:
    ${mistakes.map((m: any) => `- ${m.prompt} (Açıklaması: ${m.explanation})`).join('\n')}

    Lütfen öğrenciye şunları içeren kısa ve samimi bir değerlendirme yaz:
    1. Başarısını kutla (skora göre dozunu ayarla).
    2. Yanlış yaptığı sorulardan yola çıkarak "Şu konularda eksiğin olabilir, şuraya çalışmalısın" gibi nokta atışı bir tavsiye ver.
    3. Onu bir sonraki test için motive et.
    Dili çok cana yakın, 11 yaşındaki bir çocuğun anlayacağı şekilde olsun. Maksimum 4-5 cümle.
  `;

  const result = await model.generateContent(prompt);
  return Response.json({ feedback: result.response.text() });
}
