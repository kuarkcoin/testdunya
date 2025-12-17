"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = { word: string; meaning: string };

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Card = {
  id: string;
  kind: "word" | "meaning";
  value: string;
  pairKey: string; // aynı pairKey eşleşir
  flipped: boolean;
  matched: boolean;
};

const BEST_KEY = "td_wordmatch_best_v1";

export default function WordMatchPage() {
  const [loading, setLoading] = useState(true);
  const [pool, setPool] = useState<Item[]>([]);

  const [cards, setCards] = useState<Card[]>([]);
  const [first, setFirst] = useState<Card | null>(null);
  const [lock, setLock] = useState(false);

  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [best, setBest] = useState<number>(0);

  // data load (senin SpeedRun JSON'unu kullanalım)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/data/tests/IELTS_Vocabulary_Phrasal_1000_format.json");
        const data: Item[] = await res.json();
        const clean = (data || []).filter((x) => x?.word && x?.meaning);
        setPool(clean);
      } catch {
        setPool([]);
      } finally {
        setLoading(false);
      }
    })();

    const b = Number(localStorage.getItem(BEST_KEY));
    if (Number.isFinite(b)) setBest(b);
  }, []);

  const start = () => {
    if (pool.length < 20) return;

    // 6 çift = 12 kart (mobil için ideal)
    const pairs = shuffle(pool).slice(0, 6);

    const nextCards: Card[] = shuffle(
      pairs.flatMap((p, i) => {
        const key = `${i}-${p.word}`;
        return [
          { id: `w-${key}`, kind: "word", value: p.word, pairKey: key, flipped: false, matched: false },
          { id: `m-${key}`, kind: "meaning", value: p.meaning, pairKey: key, flipped: false, matched: false },
        ];
      })
    );

    setCards(nextCards);
    setFirst(null);
    setLock(false);
    setMoves(0);
    setMatches(0);
  };

  useEffect(() => {
    if (!loading && pool.length) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, pool.length]);

  const allDone = useMemo(() => matches === 6, [matches]);

  useEffect(() => {
    if (!allDone) return;
    const score = Math.max(0, 100 - moves * 5); // basit skor
    if (score > best) {
      setBest(score);
      localStorage.setItem(BEST_KEY, String(score));
    }
  }, [allDone, moves, best]);

  const flip = (card: Card) => {
    if (lock) return;
    if (card.flipped || card.matched) return;

    setCards((prev) => prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c)));

    if (!first) {
      setFirst({ ...card, flipped: true });
      return;
    }

    // ikinci seçim
    setMoves((m) => m + 1);
    const second = { ...card, flipped: true };

    // eşleşme kontrolü: pairKey aynı ve kind farklı olmalı
    const isMatch = first.pairKey === second.pairKey && first.kind !== second.kind;

    if (isMatch) {
      setCards((prev) =>
        prev.map((c) =>
          c.pairKey === second.pairKey ? { ...c, matched: true, flipped: true } : c
        )
      );
      setMatches((x) => x + 1);
      setFirst(null);
      return;
    }

    // yanlışsa geri kapat
    setLock(true);
    setTimeout(() => {
      setCards((prev) =>
        prev.map((c) => {
          if (c.id === first.id || c.id === second.id) return { ...c, flipped: false };
          return c;
        })
      );
      setFirst(null);
      setLock(false);
    }, 650);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-slate-300 hover:text-white font-bold">← Home</Link>
          <div className="flex items-center gap-3">
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Moves</div>
              <div className="text-lg font-black text-amber-300">{moves}</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Best</div>
              <div className="text-lg font-black text-indigo-300">{best}</div>
            </div>
          </div>
        </div>

        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-200 text-sm font-bold">
            🧠 Word Match
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Match Word ↔ Meaning</h1>
          <p className="text-slate-400">Flip cards and find pairs. Fewer moves = higher score.</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-2">
          <button onClick={start} className="flex-1 py-3 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-500">
            NEW BOARD
          </button>
          <Link href="/mistakes" className="sm:w-56 py-3 rounded-2xl font-black bg-slate-800 hover:bg-slate-700 text-center">
            PRACTICE MISTAKES →
          </Link>
        </div>

        {loading ? (
          <div className="text-center text-slate-400 font-bold py-10">Loading…</div>
        ) : (
          <section className="rounded-3xl bg-white/5 border border-white/10 p-5 md:p-8">
            {allDone && (
              <div className="mb-5 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-4 text-center">
                <div className="font-black text-emerald-200 text-lg">✅ Completed!</div>
                <div className="text-slate-300 text-sm">Moves: {moves} · Best: {best}</div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cards.map((c) => {
                const face = c.flipped || c.matched;
                return (
                  <button
                    key={c.id}
                    onClick={() => flip(c)}
                    className={`min-h-[84px] rounded-2xl border font-black transition-all p-3 text-left
                      ${c.matched ? "bg-emerald-500/15 border-emerald-400/25" : "border-white/10"}
                      ${face ? "bg-slate-900/60" : "bg-slate-950/40 hover:bg-white/5"}
                    `}
                  >
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      {face ? (c.kind === "word" ? "Word" : "Meaning") : "Tap"}
                    </div>
                    <div className={`text-sm ${face ? "text-white" : "text-slate-600"}`}>
                      {face ? c.value : "••••••"}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}