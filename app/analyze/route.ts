import { NextResponse } from 'next/server';

import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";



// 1. Google AI Kurulumu

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);



export async function POST(request: Request) {

try {

const { essay, taskType, contextData } = await request.json();



if (!essay || essay.length < 50) {

return NextResponse.json(

{ error: "Metin çok kısa. Lütfen en az 50 karakter yazın." },

{ status: 400 }

);

}



// 2. Modeli Seçiyoruz (Gemini 1.5 Flash: Hızlı ve Ücretsiz)

const model = genAI.getGenerativeModel({

model: "gemini-1.5-flash",

generationConfig: {

// BU AYAR ÇOK ÖNEMLİ: AI'yı JSON döndürmeye zorlar.

responseMimeType: "application/json",

responseSchema: {

type: SchemaType.OBJECT,

properties: {

score: { type: SchemaType.NUMBER, description: "IELTS Band Score (0-9)" },

feedback: { type: SchemaType.STRING, description: "Detailed feedback in Turkish" },

corrections: {

type: SchemaType.ARRAY,

items: { type: SchemaType.STRING },

description: "List of grammar/vocab mistakes and corrections"

}

}

}

}

});



// 3. Prompt (AI'ya Talimat)

const prompt = `

Sen profesyonel bir IELTS sınav değerlendirmenisin (Examiner).


GÖREV:

Aşağıdaki öğrenci yazısını IELTS kriterlerine (Task Achievement, Coherence, Lexical, Grammatical) göre puanla.


BAĞLAM (TASK BİLGİSİ):

Task Tipi: ${taskType}

Soru/Grafik İçeriği (Gizli Bilgi): ${contextData || "Genel bir konu."}


KURALLAR:

1. Eğer "Soru/Grafik İçeriği" ile öğrencinin yazdığı çelişiyorsa puan kır.

2. Geri bildirimi (feedback) motive edici bir dille TÜRKÇE yaz.

3. En kritik 3-5 hatayı "corrections" listesine ekle.


ÖĞRENCİNİN YAZISI:

"${essay}"

`;



// 4. İsteği Gönder

const result = await model.generateContent(prompt);

const response = await result.response;


// Gemini JSON modunda olduğu için doğrudan parse edebiliriz

const jsonResult = JSON.parse(response.text());



return NextResponse.json(jsonResult);



} catch (error) {

console.error('Gemini API Hatası:', error);

return NextResponse.json(

{ error: "Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin." },

{ status: 500 }

);

}

}

