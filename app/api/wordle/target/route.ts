import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type VocabItem = { word: string; meaning?: string };

function dayKeyUTC(date = new Date()) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isCleanWord(w: string) {
  return /^[a-z]+$/i.test(w);
}

function randomIndex(mod: number) {
  const buf = crypto.randomBytes(4);
  const n = buf.readUInt32BE(0);
  return n % mod;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const lenParam = url.searchParams.get("len");
    const mode = (url.searchParams.get("mode") || "daily").toLowerCase(); // daily | random

    const len = Math.max(4, Math.min(10, Number(lenParam || 5) || 5));

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
      return NextResponse.json({ error: `No words found with length=${len}` }, { status: 404 });
    }

    const day = dayKeyUTC();

    // DAILY: aynı gün aynı kelime
    // RANDOM: her istekte farklı kelime
    const idx =
      mode === "random"
        ? randomIndex(pool.length)
        : (() => {
            // daily deterministic (senin eski hash yerine basit deterministic de olur)
            // ama istersen hash fonksiyonunu burada koruyabilirsin
            let h = 2166136261;
            const key = `${day}|len:${len}`;
            for (let i = 0; i < key.length; i++) {
              h ^= key.charCodeAt(i);
              h = Math.imul(h, 16777619);
            }
            return Math.abs(h) % pool.length;
          })();

    const word = pool[idx];

    return NextResponse.json({
      day: mode === "random" ? "random" : day,
      length: len,
      word,
      mode,
    });
  } catch {
    return NextResponse.json({ error: "Failed to load word list" }, { status: 500 });
  }
}