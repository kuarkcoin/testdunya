import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 60;

// Dosyanın formatına göre tip (senin 1000 listende word/meaning var)
type VocabItem = {
  word: string;
  meaning: string; // TR veya EN olabilir
};

// Oyunun beklediği format
type GameWord = {
  word: string;
  definition: string;
  synonym: string;
  example_sentence: string;
  turkish_meaning: string;
};

const FILE_RELATIVE = "public/data/tests/IELTS_Vocabulary_Phrasal_1000_format.json";
const RECENT_SIZE = 40;

// Basit shuffle + seçim
function pickRandom<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Kelimeyi gizlemeli örnek cümle üret (AI yok)
function makeExampleSentence(word: string) {
  // Çok basit şablonlar (istersen artırırız)
  const templates = [
    `In the lecture, the professor used the term "_____" several times to explain the concept.`,
    `Many IELTS candidates struggle to use "_____" correctly in academic writing.`,
    `The report aims to _____ the main causes of the problem.`,
    `It is important to understand what "_____" means in this context.`,
    `Researchers often _____ their findings with real-world examples.`
  ];

  // Eğer phrasal verb ise (boşluk varsa) fiil gibi kullanmak bazen daha iyi
  const isPhrase = word.trim().includes(" ");
  if (isPhrase) {
    const phraseTemplates = [
      `During the discussion, she decided to _____ and explain her point clearly.`,
      `In academic writing, you should avoid using informal phrases like "_____" too often.`,
      `The trend began to _____ after the initial growth.`,
      `The team had to _____ the plan due to limited resources.`,
      `The results can help us _____ what happened in the experiment.`
    ];
    return pickRandom(phraseTemplates).replace("_____", "_____");
  }

  return pickRandom(templates).replace("_____", "_____");
}

// Public JSON'ı oku (cache: tek istek içinde saklamak istersen global değişken ekleriz)
async function loadPool(): Promise<VocabItem[]> {
  const fullPath = path.join(process.cwd(), FILE_RELATIVE);
  const raw = await fs.readFile(fullPath, "utf-8");
  const parsed = JSON.parse(raw);

  // Beklenen: [{ word, meaning }, ...]
  if (!Array.isArray(parsed)) return [];
  return parsed
    .filter((x) => x && typeof x.word === "string" && typeof x.meaning === "string")
    .map((x) => ({ word: x.word.trim(), meaning: x.meaning.trim() }))
    .filter((x) => x.word.length > 0);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const recentWords: string[] = Array.isArray(body?.recentWords) ? body.recentWords : [];

    const pool = await loadPool();
    if (pool.length === 0) {
      return NextResponse.json({ error: "Word pool is empty or file not found." }, { status: 500 });
    }

    // recent filtre
    const recentSet = new Set(recentWords.map((w) => String(w).toLowerCase()));
    let candidates = pool.filter((item) => !recentSet.has(item.word.toLowerCase()));

    // Eğer aday kalmadıysa fallback (havuz küçükse)
    if (candidates.length === 0) candidates = pool;

    const picked = pickRandom(candidates);

    // Oyuna uygun objeye çevir
    const out: GameWord = {
      word: picked.word,
      // Elindeki dosyada meaning TR ise bunu turkish_meaning’e bas
      // meaning EN ise definition gibi kullan; en pratik yaklaşım:
      definition: picked.meaning,     // meaning İngilizceyse direkt definition olur
      synonym: "—",                   // synonym datası yoksa placeholder
      example_sentence: makeExampleSentence(picked.word),
      turkish_meaning: picked.meaning // meaning Türkçe ise burada doğru olur
    };

    return NextResponse.json(out, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to generate word" }, { status: 500 });
  }
}