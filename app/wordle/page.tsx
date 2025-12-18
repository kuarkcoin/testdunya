'use client';

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, Delete } from "lucide-react";

// --- TYPES ---
type CellStatus = "empty" | "correct" | "present" | "absent";
type EvalCell = { ch: string; status: CellStatus };

// --- LOGIC HELPERS ---
function normalizeGuess(s: string) {
  return s.replace(/[^a-zA-Z]/g, "").toUpperCase();
}

function evaluateGuess(guess: string, target: string): EvalCell[] {
  const g = guess.split("");
  const t = target.split("");
  const res: EvalCell[] = g.map((ch) => ({ ch, status: "absent" }));

  const used = Array(t.length).fill(false);

  // Correct check
  for (let i = 0; i < t.length; i++) {
    if (g[i] === t[i]) {
      res[i].status = "correct";
      used[i] = true;
    }
  }

  // Present check
  for (let i = 0; i < g.length; i++) {
    if (res[i].status === "correct") continue;
    const idx = t.findIndex((ch, j) => !used[j] && ch === g[i]);
    if (idx !== -1) {
      res[i].status = "present";
      used[idx] = true;
    }
  }

  return res;
}

export default function WordlePage() {
  const [len, setLen] = useState(5);
  const [target, setTarget] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const [current, setCurrent] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [evaluations, setEvaluations] = useState<EvalCell[][]>([]);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const [toast, setToast] = useState<string>("");

  const maxRows = 6;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2000);
  }, []);

  const fetchTarget = useCallback(async (newLen: number) => {
    setLoading(true);
    setStatus("playing");
    setGuesses([]);
    setEvaluations([]);
    setCurrent("");

    try {
      const t = Date.now();
      const res = await fetch(`/api/wordle/target?len=${newLen}&mode=random&t=${t}`, {
        cache: "no-store",
      });
      const json = await res.json();
      if (!res.ok) throw new Error("Word load failed");

      const w = String(json.word || "");
      const normalized = normalizeGuess(w);

      if (!normalized || normalized.length !== newLen) {
        throw new Error("Invalid word from API");
      }

      setTarget(normalized);
    } catch (e: any) {
      showToast("Could not load word");
      setTarget("");
      setStatus("playing");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    fetchTarget(len);
  }, [fetchTarget, len]);

  // ✅ Stable submit (no stale state)
  const submitGuess = useCallback(() => {
    if (loading || status !== "playing") return;

    setCurrent((cur) => {
      const g = normalizeGuess(cur);

      if (g.length !== len) {
        showToast(`Must be ${len} letters`);
        return cur;
      }
      if (!target || target.length !== len) {
        showToast("Word not ready");
        return cur;
      }
      if (evaluations.length >= maxRows) return cur;

      const evaled = evaluateGuess(g, target);

      setEvaluations((prevE) => [...prevE, evaled]);
      setGuesses((prevG) => {
        const nextG = [...prevG, g];

        if (g === target) {
          setStatus("won");
          showToast("🎯 Brilliant!");
        } else if (nextG.length >= maxRows) {
          setStatus("lost");
          showToast("💀 Out of tries");
        }

        return nextG;
      });

      return "";
    });
  }, [loading, status, len, target, showToast, evaluations.length]);

  // ✅ Keyboard support (stable listener)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (loading || status !== "playing") return;

      if (e.key === "Enter") {
        submitGuess();
      } else if (e.key === "Backspace") {
        setCurrent((s) => s.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        const ch = e.key.toUpperCase();
        setCurrent((s) => (s.length >= len ? s : s + ch));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [loading, status, len, submitGuess]);

  const keyboardMap = useMemo(() => {
    const map = new Map<string, CellStatus>();
    evaluations.flat().forEach((c) => {
      const prev = map.get(c.ch) || "empty";
      const rank: Record<CellStatus, number> = { empty: 0, absent: 1, present: 2, correct: 3 };
      if (rank[c.status] > rank[prev]) map.set(c.ch, c.status);
    });
    return map;
  }, [evaluations]);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white py-12 px-4 font-sans">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Header HUD */}
        <div className="flex items-center justify-between bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-all"
          >
            <ArrowLeft size={20} /> <span className="font-bold">Dashboard</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-slate-500 uppercase">Length:</span>
            <select
              value={len}
              onChange={(e) => setLen(Number(e.target.value))}
              disabled={loading}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1 text-sm font-bold focus:ring-2 focus:ring-cyan-500 outline-none disabled:opacity-60"
            >
              {[4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            IELTS WORDLE
          </h1>
          <p className="text-slate-400 font-medium tracking-wide">
            Test your academic vocabulary
          </p>
        </div>

        {/* TOAST */}
        <div className="h-8 flex justify-center">
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-cyan-500 text-slate-950 px-6 py-1 rounded-full font-black text-sm shadow-xl"
              >
                {toast}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* GRID */}
        <div className="grid gap-2 justify-center">
          {Array.from({ length: maxRows }).map((_, rIdx) => {
            const isEvaluated = rIdx < evaluations.length;
            const isCurrent = rIdx === evaluations.length && status === "playing";
            const rowStr = isEvaluated
              ? guesses[rIdx] || "".padEnd(len, " ")
              : isCurrent
              ? current.padEnd(len, " ")
              : "".padEnd(len, " ");

            return (
              <div key={rIdx} className="flex gap-2">
                {rowStr.split("").slice(0, len).map((ch, cIdx) => {
                  const st = isEvaluated ? evaluations[rIdx][cIdx]?.status || "empty" : "empty";
                  return (
                    <motion.div
                      key={cIdx}
                      initial={false}
                      animate={isEvaluated ? { rotateY: 180 } : { scale: ch !== " " ? 1.1 : 1 }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 border-2 rounded-xl flex items-center justify-center text-3xl font-black transition-colors duration-500
                        ${st === "correct"
                          ? "bg-emerald-600 border-emerald-500"
                          : st === "present"
                          ? "bg-amber-500 border-amber-400"
                          : st === "absent"
                          ? "bg-slate-800 border-slate-700 text-slate-500"
                          : "bg-slate-900/50 border-slate-800"
                        }`}
                    >
                      <span style={{ transform: isEvaluated ? "rotateY(180deg)" : "none" }}>
                        {ch.trim()}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* GAME OVER */}
        {status !== "playing" && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center space-y-4 shadow-2xl"
          >
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                Correct Word
              </p>
              <h2 className="text-4xl font-black text-cyan-400 tracking-widest">
                {target}
              </h2>
            </div>
            <button
              onClick={() => fetchTarget(len)}
              className="flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-2xl font-black mx-auto hover:bg-cyan-400 transition-all"
            >
              <RotateCcw size={20} /> Play Again
            </button>
          </motion.div>
        )}

        {/* VIRTUAL KEYBOARD */}
        <div className="bg-slate-900/30 p-4 rounded-3xl border border-slate-800/50 space-y-2">
          {["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((row, rIdx) => (
            <div key={row} className="flex justify-center gap-1.5">
              {rIdx === 2 && (
                <button
                  onClick={submitGuess}
                  disabled={loading || status !== "playing"}
                  className="px-3 rounded-lg bg-slate-700 text-xs font-black disabled:opacity-60"
                >
                  ENTER
                </button>
              )}

              {row.split("").map((k) => {
                const st = keyboardMap.get(k) || "empty";
                const bg =
                  st === "correct"
                    ? "bg-emerald-600"
                    : st === "present"
                    ? "bg-amber-500"
                    : st === "absent"
                    ? "bg-slate-800 text-slate-600"
                    : "bg-slate-700";

                return (
                  <button
                    key={k}
                    disabled={loading || status !== "playing"}
                    onClick={() =>
                      setCurrent((s) => (s.length >= len ? s : s + k))
                    }
                    className={`h-12 w-9 sm:w-11 rounded-lg font-black transition-all active:scale-90 disabled:opacity-60 ${bg}`}
                  >
                    {k}
                  </button>
                );
              })}

              {rIdx === 2 && (
                <button
                  onClick={() => setCurrent((s) => s.slice(0, -1))}
                  disabled={loading || status !== "playing"}
                  className="px-3 rounded-lg bg-slate-700 disabled:opacity-60"
                >
                  <Delete size={20} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
