// app/api/analyze-5/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { question, userAnswer, correctAnswer, subject } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Sen 5. sınıf öğrencilerine ders anlatan çok cana yakın ve açıklayıcı bir öğretmensin. 
    Ders: ${subject}
    Soru: ${question}
    Öğrencinin Cevabı: ${userAnswer}
    Doğru Cevap: ${correctAnswer}

    Lütfen öğrenciye cevabı neden yanlış olduğunu (veya doğruysa tebrik ederek neden doğru olduğunu) 
    5. sınıf seviyesinde, basitleştirilmiş bir dille açıkla. 
    Cevabını maksimum 3-4 cümle ile sınırla ve öğrenciye moral ver.
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  
  return Response.json({ feedback: response.text() });
}
