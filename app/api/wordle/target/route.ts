import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type VocabItem = { word: string; meaning?: string };

function dayKeyUTC(date = new Date()) {
  // Günlük aynı kelime gelsin diye (UTC)
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// Basit deterministic hash -> index
function hashToIndex(str: string, mod: number) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % mod;
}

function isCleanWord(w: string) {
  // sadece harf, boşluk yok, tire yok
  return /^[a-z]+$/i.test(w);
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const lenParam = url.searchParams.get("len");
    const len = Math.max(4, Math.min(10, Number(lenParam || 5) || 5)); // 4..10 arası

    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "tests",
      "IELTS_Vocabulary_Phrasal_1000_format.json"
    );

    const raw = await fs.readFile(filePath, "utf-8");
    const list = JSON.parse(raw) as VocabItem[];

    const pool = list
      .map((x) => (x?.word || "").trim())
      .filter(Boolean)
      .filter(isCleanWord)
      .map((w) => w.toUpperCase())
      .filter((w) => w.length === len);

    if (pool.length === 0) {
      return NextResponse.json(
        { error: `No words found with length=${len}` },
        { status: 404 }
      );
    }

    const key = dayKeyUTC();
    const idx = hashToIndex(key + `|len:${len}`, pool.length);
    const word = pool[idx];

    // İstersen meaning döndürürüz ama Wordle'da genelde gizli; şimdilik boş dönüyoruz.
    return NextResponse.json({
      day: key,
      length: len,
      word, // prod’da bunu istemezsen kaldırırız (client’a göndermeyip server-side doğrulatırız)
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load word list" }, { status: 500 });
  }
}