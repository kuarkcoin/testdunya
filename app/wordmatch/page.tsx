 "use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Confetti from "react-confetti"; // npm install react-confetti

type Item = { word: string; meaning: string };

// Utility: Diziyi karıştır
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
  pairKey: string;
  flipped: boolean;
  matched: boolean;
};

const BEST_KEY = "td_wordmatch_best_v1";

export default function WordMatchPage() {
  const [loading, setLoading] = useState(true);
  const [pool, setPool] = useState<Item[]>([]);

  // Oyun State'leri
  const [cards, setCards] = useState<Card[]>([]);
  const [first, setFirst] = useState<Card | null>(null);
  const [lock, setLock] = useState(false);

  // Skor State'leri
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [best, setBest] = useState<number>(0);

  // Konfeti için Pencere Boyutu
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // 1. Pencere boyutunu dinle (Konfeti için)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    // İlk render'da boyutu al
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Veriyi çek ve temizle
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/data/tests/IELTS_Vocabulary_Phrasal_1000_format.json");
        const data: Item[] = await res.json();
        
        // Boş veya hatalı olanları filtrele
        let clean = (data || []).filter((x) => x?.word && x?.meaning);
        
        // Mükerrer kelimeleri temizle (Unique Filter)
        const seen = new Set();
        clean = clean.filter(item => {
          const duplicate = seen.has(item.word);
          seen.add(item.word);
          return !duplicate;
        });

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

  // 3. Oyunu Başlat
  const start = () => {
    if (pool.length < 20) return;

    // 6 çift seç (12 kart)
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

  // Veri yüklendiğinde otomatik başlat
  useEffect(() => {
    if (!loading && pool.length) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, pool.length]);

  const allDone = useMemo(() => matches === 6, [matches]);

  // Skor Kaydı
  useEffect(() => {
    if (!allDone) return;
    const score = Math.max(0, 100 - moves * 5);
    if (score > best) {
      setBest(score);
      localStorage.setItem(BEST_KEY, String(score));
    }
  }, [allDone, moves, best]);

  // Kart Çevirme Mantığı
  const flip = (card: Card) => {
    if (lock) return;
    if (card.flipped || card.matched) return;

    // Tıklananı çevir
    setCards((prev) => prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c)));

    if (!first) {
      setFirst({ ...card, flipped: true });
      return;
    }

    // İkinci kart seçildi
    setMoves((m) => m + 1);
    const second = { ...card, flipped: true };

    const isMatch = first.pairKey === second.pairKey && first.kind !== second.kind;

    if (isMatch) {
      // Eşleşme başarılı
      setCards((prev) =>
        prev.map((c) =>
          c.pairKey === second.pairKey ? { ...c, matched: true, flipped: true } : c
        )
      );
      setMatches((x) => x + 1);
      setFirst(null);
      return;
    }

    // Eşleşme başarısız (Hata)
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
    }, 800); // Animasyon için süreyi biraz artırdım
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10 relative overflow-hidden">
      {/* Konfeti Efekti */}
      {allDone && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        {/* Üst Bar */}
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-slate-300 hover:text-white font-bold transition-colors">
            ← Home
          </Link>
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

        {/* Başlık */}
        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-200 text-sm font-bold">
            🧠 Word Match
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Match Word ↔ Meaning</h1>
          <p className="text-slate-400">Flip cards and find pairs. Fewer moves = higher score.</p>
        </header>

        {/* Kontroller */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button 
            onClick={start} 
            className="flex-1 py-3 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20 active:scale-95 duration-200"
          >
            NEW BOARD
          </button>
          <Link 
            href="/mistakes" 
            className="sm:w-56 py-3 rounded-2xl font-black bg-slate-800 hover:bg-slate-700 text-center transition-colors"
          >
            PRACTICE MISTAKES →
          </Link>
        </div>

        {/* Oyun Alanı */}
        {loading ? (
          <div className="text-center text-slate-400 font-bold py-10 animate-pulse">Loading Vocabulary…</div>
        ) : (
          <section className="rounded-3xl bg-white/5 border border-white/10 p-4 md:p-8">
            
            {allDone && (
              <div className="mb-6 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 p-6 text-center animate-bounce">
                <div className="font-black text-emerald-200 text-2xl mb-1">🎉 Excellent!</div>
                <div className="text-emerald-100 font-medium">You matched all pairs in {moves} moves.</div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {cards.map((c) => {
                // Kartın açık olup olmadığı
                const isFlipped = c.flipped || c.matched;

                return (
                  // Kart Konteyner (Perspective)
                  <div 
                    key={c.id} 
                    className="group h-[110px] sm:h-[130px] w-full [perspective:1000px] cursor-pointer"
                    onClick={() => flip(c)}
                  >
                    {/* Dönme Efektini Sağlayan Wrapper */}
                    <div 
                      className={`
                        relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] shadow-xl rounded-2xl
                        ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                      `}
                    >
                      {/* --- ÖN YÜZ (KAPALI) --- */}
                      <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-800 border-2 border-slate-700 [backface-visibility:hidden] flex items-center justify-center hover:bg-slate-700 transition-colors">
                        <div className="text-slate-500 font-bold text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100">
                          TAP
                        </div>
                      </div>

                      {/* --- ARKA YÜZ (AÇIK - İÇERİK) --- */}
                      <div 
                        className={`
                          absolute inset-0 h-full w-full rounded-2xl border-2 [backface-visibility:hidden] [transform:rotateY(180deg)]
                          flex flex-col items-center justify-center p-3 text-center overflow-hidden
                          ${c.matched 
                            ? "bg-emerald-900/80 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                            : "bg-slate-900 border-indigo-500/50"
                          }
                        `}
                      >
                        {/* Etiket (Word/Meaning) */}
                        <div className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${c.matched ? "text-emerald-300" : "text-indigo-300"}`}>
                          {c.kind === "word" ? "Word" : "Meaning"}
                        </div>

                        {/* İçerik Metni + Scroll (Taşmayı önlemek için) */}
                        <div className="w-full h-full overflow-y-auto custom-scrollbar flex items-center justify-center">
                          <p className={`font-medium leading-snug ${c.kind === "word" ? "text-lg text-white" : "text-xs text-slate-200"}`}>
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

      {/* Scrollbar Customization Style (İsteğe bağlı, global css'e de eklenebilir) */}
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
