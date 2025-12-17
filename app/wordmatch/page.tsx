"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Confetti from "react-confetti";

type Item = { word: string; meaning: string };

type Card = {
  id: string;
  kind: "word" | "meaning";
  value: string;
  pairKey: string;
  flipped: boolean;
  matched: boolean;
};

const BEST_KEY = "td_wordmatch_best_v1";

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function WordMatchPage() {
  const [loading, setLoading] = useState(true);
  const [pool, setPool] = useState<Item[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [cards, setCards] = useState<Card[]>([]);
  const [first, setFirst] = useState<Card | null>(null);
  const [lock, setLock] = useState(false);

  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [best, setBest] = useState<number>(0);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // window size for confetti
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // load from API
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/wordmatch", { cache: "no-store" });
        if (!res.ok) throw new Error(`API error: ${res.status}`);

        const data: Item[] = await res.json();
        let clean = (data || []).filter((x) => x?.word && x?.meaning);

        // remove duplicate words
        const seen = new Set<string>();
        clean = clean.filter((item) => {
          const key = item.word.trim().toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        if (clean.length === 0) throw new Error("Word list is empty.");

        setPool(clean);
        setErrorMsg(null);
      } catch (err: any) {
        console.error("Data load error:", err);
        setErrorMsg(err?.message || "Unknown error");
        setPool([]);
      } finally {
        setLoading(false);
      }
    })();

    const b = Number(localStorage.getItem(BEST_KEY));
    if (Number.isFinite(b)) setBest(b);
  }, []);

  const start = () => {
    if (pool.length < 12) return;

    const pairs = shuffle(pool).slice(0, 6);

    const nextCards: Card[] = shuffle(
      pairs.flatMap((p, i) => {
        const key = `${i}-${p.word}`;
        return [
          {
            id: `w-${key}`,
            kind: "word",
            value: p.word,
            pairKey: key,
            flipped: false,
            matched: false,
          },
          {
            id: `m-${key}`,
            kind: "meaning",
            value: p.meaning,
            pairKey: key,
            flipped: false,
            matched: false,
          },
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
    if (!loading && pool.length > 0) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, pool.length]);

  const allDone = useMemo(() => matches === 6 && matches > 0, [matches]);

  useEffect(() => {
    if (!allDone) return;
    const score = Math.max(0, 100 - moves * 5);
    if (score > best) {
      setBest(score);
      localStorage.setItem(BEST_KEY, String(score));
    }
  }, [allDone, moves, best]);

  const flip = (card: Card) => {
    if (lock) return;
    if (card.flipped || card.matched) return;

    setCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
    );

    if (!first) {
      setFirst({ ...card, flipped: true });
      return;
    }

    setMoves((m) => m + 1);
    const second = { ...card, flipped: true };

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
    }, 800);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10 relative overflow-hidden">
      {allDone && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-slate-300 hover:text-white font-bold">
            ← Home
          </Link>

          <div className="flex items-center gap-3">
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                Moves
              </div>
              <div className="text-lg font-black text-amber-300">{moves}</div>
            </div>

            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                Best
              </div>
              <div className="text-lg font-black text-indigo-300">{best}</div>
            </div>
          </div>
        </div>

        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-200 text-sm font-bold">
            🧠 Word Match
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Match Word ↔ Meaning
          </h1>
          <p className="text-slate-400">Flip cards and find pairs.</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={start}
            className="flex-1 py-3 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-500"
          >
            NEW BOARD
          </button>

          <Link
            href="/mistakes"
            className="sm:w-56 py-3 rounded-2xl font-black bg-slate-800 hover:bg-slate-700 text-center"
          >
            PRACTICE MISTAKES →
          </Link>
        </div>

        {loading ? (
          <div className="text-center text-slate-400 font-bold py-10">Loading…</div>
        ) : errorMsg ? (
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-200 text-center">
            <div className="font-bold text-lg mb-2">Error</div>
            <p className="text-sm opacity-80">{errorMsg}</p>
          </div>
        ) : (
          <section className="rounded-3xl bg-white/5 border border-white/10 p-4 md:p-8">
            {allDone && (
              <div className="mb-6 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 p-5 text-center">
                <div className="font-black text-emerald-200 text-xl mb-1">🎉 Completed!</div>
                <div className="text-emerald-100 font-medium">
                  You matched all pairs in {moves} moves.
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {cards.map((c) => {
                const isFlipped = c.flipped || c.matched;

                return (
                  <div
                    key={c.id}
                    className="group h-[110px] sm:h-[130px] w-full [perspective:1000px] cursor-pointer"
                    onClick={() => flip(c)}
                  >
                    <div
                      className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] shadow-xl rounded-2xl ${
                        isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}
                    >
                      {/* front */}
                      <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-800 border-2 border-slate-700 [backface-visibility:hidden] flex items-center justify-center hover:bg-slate-700">
                        <div className="text-slate-500 font-bold text-xs uppercase tracking-widest opacity-60">
                          TAP
                        </div>
                      </div>

                      {/* back */}
                      <div
                        className={`absolute inset-0 h-full w-full rounded-2xl border-2 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-3 text-center overflow-hidden ${
                          c.matched
                            ? "bg-emerald-900/80 border-emerald-500"
                            : "bg-slate-900 border-indigo-500/50"
                        }`}
                      >
                        <div
                          className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${
                            c.matched ? "text-emerald-300" : "text-indigo-300"
                          }`}
                        >
                          {c.kind === "word" ? "Word" : "Meaning"}
                        </div>

                        <div className="w-full h-full overflow-y-auto custom-scrollbar flex items-center justify-center">
                          <p
                            className={`font-medium leading-snug ${
                              c.kind === "word" ? "text-lg text-white" : "text-xs text-slate-200"
                            }`}
                          >
                            {c.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
}