import { NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const runtime = "nodejs";
// Timeout hatasını çözmek için süreyi 60 saniyeye çıkarıyoruz
export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

// --- TYPES ---
type ChatOut = { reply: string; feedback: string };

type GradeOut = {
  band_score: number;
  fluency_feedback: string;
  lexical_feedback: string;
  grammar_feedback: string;
  overall_comment: string;
};

// --- API KEY MANAGER (SENİN YAZDIĞIN KOD) ---
function getApiKeys(): string[] {
  return [
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_KEY_2,
    process.env.GOOGLE_KEY_3,
    process.env.GOOGLE_KEY_4,
    process.env.GOOGLE_KEY_5,
  ].filter((k): k is string => Boolean(k));
}

// 429 olursa diğer key’leri sırayla dene (SENİN YAZDIĞIN KOD)
async function withFailover<T>(fn: (key: string) => Promise<T>) {
  const keys = getApiKeys();
  if (keys.length === 0) throw new Error("No API Keys found defined in Vercel settings.");

  // Random başlangıç ki yük dağılsın
  const start = Math.floor(Math.random() * keys.length);

  let lastErr: any = null;
  
  // Döngü ile sırayla dene
  for (let i = 0; i < keys.length; i++) {
    const key = keys[(start + i) % keys.length];
    try {
      // Başarılı olursa sonucu direkt döndür
      return await fn(key);
    } catch (e: any) {
      const msg = String(e?.message || e);
      lastErr = e;
      
      console.warn(`Key ending with ...${key.slice(-4)} failed: ${msg}`);

      // Sadece Kota (429) veya Aşırı Yüklenme hatasıysa devam et
      if (
        msg.includes("429") || 
        msg.toLowerCase().includes("quota") || 
        msg.toLowerCase().includes("too many requests") ||
        msg.includes("503") // Service unavailable da bazen anlık olur
      ) {
        continue; // Bir sonraki anahtara geç
      }
      
      // Başka bir hataysa (örn: kod hatası) boşuna diğerlerini deneme, patlat.
      throw e;
    }
  }
  throw lastErr ?? new Error("All API keys failed.");
}

// --- HELPERS ---
function stripCodeFences(s: string) {
  return String(s || "").replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
}

function safeJsonParse(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}

function normalizeHistory(history: any[]) {
  return (history || []).map((m: any) => {
    if (typeof m === "string") return { role: "user", parts: [{ text: m }] };
    if (m && typeof m === "object") {
      const role = m.role === "ai" || m.role === "model" ? "model" : "user";
      const content = m.text ?? m.content ?? m.message ?? m.prompt ?? JSON.stringify(m);
      return { role, parts: [{ text: String(content) }] };
    }
    return { role: "user", parts: [{ text: String(m) }] };
  });
}

function pickChat(obj: any): ChatOut | null {
  if (!obj || typeof obj !== "object") return null;
  const reply = obj.reply || obj.answer || obj.response || "";
  const feedback = obj.feedback || obj.correction || "";
  if (!reply && !feedback) return null;
  return { reply, feedback };
}

function pickGrade(obj: any): GradeOut | null {
  if (!obj || typeof obj !== "object") return null;
  let score = Number(obj.band_score);
  if (Number.isNaN(score)) score = 0;
  return {
    band_score: score,
    fluency_feedback: obj.fluency_feedback || "No feedback provided.",
    lexical_feedback: obj.lexical_feedback || "No feedback provided.",
    grammar_feedback: obj.grammar_feedback || "No feedback provided.",
    overall_comment: obj.overall_comment || "No comment provided.",
  };
}

const chatFallback = (msg: string): ChatOut => ({ reply: msg, feedback: "" });
const gradeFallback = (msg: string): GradeOut => ({
  band_score: 0,
  fluency_feedback: msg,
  lexical_feedback: msg,
  grammar_feedback: msg,
  overall_comment: msg,
});

// --- MAIN ---
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });

  const mode = body.mode === "grade" ? "grade" : "chat";
  const message = typeof body.message === "string" ? body.message : "";
  const historyRaw = Array.isArray(body.history) ? body.history : [];
  const history = normalizeHistory(historyRaw).slice(-10);

  try {
    // BURASI DEĞİŞTİ: Artık withFailover içinde çalışıyor
    const result = await withFailover(async (apiKey) => {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash", // En stabil model
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
        generationConfig: mode === "grade"
            ? { responseMimeType: "application/json", temperature: 0.2 }
            : { responseMimeType: "application/json", temperature: 0.7 },
      });

      const prompt = mode === "grade"
        ? [
            "Act as a strict IELTS Speaking Examiner.",
            "Analyze the conversation history and give an IELTS band score (0-9).",
            `HISTORY: ${JSON.stringify(history)}`,
            'Return ONLY valid JSON with exactly these keys:',
            '{ "band_score": number, "fluency_feedback": string, "lexical_feedback": string, "grammar_feedback": string, "overall_comment": string }',
          ].join("\n")
        : [
            "You are an IELTS Speaking Examiner.",
            `HISTORY: ${JSON.stringify(history)}`,
            `USER: ${JSON.stringify(message)}`,
            "Task: Reply naturally (1-2 sentences). If needed, correct grammar in feedback.",
            'Return ONLY valid JSON with exactly these keys:',
            '{ "reply": string, "feedback": string }',
          ].join("\n");

      return await model.generateContent(prompt);
    });

    // Sonuç işleme (Key değişse bile result buraya gelir)
    const rawText = result?.response?.text?.() ?? "";
    
    if (!rawText.trim()) {
      return NextResponse.json(mode === "grade" ? gradeFallback("Empty response.") : chatFallback("Empty response."));
    }

    const cleaned = stripCodeFences(rawText);
    const parsed = safeJsonParse(cleaned);

    if (mode === "grade") {
      const picked = pickGrade(parsed);
      return NextResponse.json(picked ?? gradeFallback("Evaluation error."));
    }

    let picked: ChatOut | null = null;
    try { picked = pickChat(parsed); } catch { picked = null; }

    if (!picked) {
      if (cleaned.length > 0) return NextResponse.json({ reply: cleaned, feedback: "" } satisfies ChatOut);
      return NextResponse.json(chatFallback("I didn't catch that. Could you repeat?"));
    }

    if (!picked.reply && cleaned.length > 0) picked.reply = cleaned;
    if (!picked.reply) picked.reply = "I didn't catch that. Could you repeat?";
    if (typeof picked.feedback !== "string") picked.feedback = "";

    return NextResponse.json(picked);

  } catch (error: any) {
    const msg = String(error?.message || error);
    console.error("FINAL API ERROR:", msg);
    
    // Eğer tüm anahtarlar denendi ve hepsi başarısız olduysa buraya düşer
    if (msg.includes("429") || msg.includes("quota") || msg.includes("All API keys failed")) {
       return NextResponse.json(
        { reply: "All servers are busy (Rate Limit). Please wait 30s.", feedback: "" },
        { status: 429 }
      );
    }

    // Timeout hatası
    if (msg.toLowerCase().includes("timeout")) {
        return NextResponse.json(chatFallback("Connection timeout. Please speak shorter sentences."), { status: 200 });
    }

    return NextResponse.json(chatFallback("System error. Please try again."), { status: 200 });
  }
}
