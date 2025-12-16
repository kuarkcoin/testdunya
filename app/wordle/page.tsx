"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";

type CellStatus = "empty" | "correct" | "present" | "absent";
type EvalCell = { ch: string; status: CellStatus };

function normalizeGuess(s: string) {
  return s.replace(/[^a-zA-Z]/g, "").toUpperCase();
}

// Wordle duplicate harf mantığı (doğru değerlendirme)
function evaluateGuess(guess: string, target: string): EvalCell[] {
  const g = guess.split("");
  const t = target.split("");
  const res: EvalCell[] = g.map((ch) => ({ ch, status: "absent" }));

  // 1) Correct
  const used = Array(t.length).fill(false);
  for (let i = 0; i < t.length; i++) {
    if (g[i] === t[i]) {
      res[i].status = "correct";
      used[i] = true;
    }
  }

  // 2) Present (kalan harfler)
  for (let i = 0; i < t.length; i++) {
    if (res[i].status === "correct") continue;
    const idx = t.findIndex((ch, j) => !used[j] && ch === g[i]);
    if (idx !== -1) {
      res[i].status = "present";
      used[idx] = true;
    }
  }

  return res;
}

// Istanbul gün etiketi: YYYY-MM-DD
function istanbulDayKey() {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(new Date()); // en-CA => 2025-12-17 formatında
}

export default function WordlePage() {
  const [len, setLen] = useState(5);
  const [target, setTarget] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const [current, setCurrent] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [evaluations, setEvaluations] = useState<EvalCell[][]>([]);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const [toast, setToast] = useState<string>("");

  const maxRows = 6;

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 1600);
  };

  const fetchTarget = useCallback(
    async (newLen: number) => {
      setLoading(true);
      setStatus("playing");
      setGuesses([]);
      setEvaluations([]);
      setCurrent("");

      try {
        // Cache-buster: Vercel/edge cache veya browser cache takılmasın
        const t = Date.now();  
const res = await fetch(
  `/api/wordle/target?len=${newLen}&mode=random&t=${t}`,
  {
    method: "GET",
    cache: "no-store",
  }
);

        const json = await res.json();
        if (!res.ok || json?.error) throw new Error(json?.error || "Kelime yüklenemedi");

        const w = String(json.word || "").toUpperCase().trim();
        if (!w || w.length !== newLen) throw new Error("Geçersiz kelime geldi");

        setTarget(w);
        // API döndürüyorsa onu yaz, yoksa Istanbul gününü yaz
        setDay(String(json.day || istanbulDayKey()));
      } catch (e: any) {
        showToast(e?.message || "Kelime yüklenemedi");
        setTarget("");
        setDay(istanbulDayKey());
      } finally {
        setLoading(false);
      }
    },
    [setTarget, setDay]
  );

  useEffect(() => {
    // İlk yükleme
    fetchTarget(len);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Klavye desteği
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (loading || status !== "playing") return;

      if (e.key === "Enter") {
        submitGuess();
        return;
      }
      if (e.key === "Backspace") {
        setCurrent((s) => s.slice(0, -1));
        return;
      }
      if (/^[a-zA-Z]$/.test(e.key)) {
        setCurrent((s) => {
          if (s.length >= len) return s;
          return (s + e.key).toUpperCase();
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [len, loading, status, target]);

  const submitGuess = () => {
    if (!target) return;

    const g = normalizeGuess(current);
    if (g.length !== len) {
      showToast(`${len} harf gir`);
      return;
    }
    if (guesses.length >= maxRows) return;

    const evaled = evaluateGuess(g, target);

    const nextGuesses = [...guesses, g];
    const nextEvals = [...evaluations, evaled];

    setGuesses(nextGuesses);
    setEvaluations(nextEvals);
    setCurrent("");

    if (g === target) {
      setStatus("won");
      showToast("🎉 Doğru!");
      return;
    }

    if (nextGuesses.length >= maxRows) {
      setStatus("lost");
      showToast("💀 Bitti!");
    }
  };

  const keyboardMap = useMemo(() => {
    // harflerin en iyi durumunu klavyede göster
    const rank: Record<CellStatus, number> = { empty: 0, absent: 1, present: 2, correct: 3 };
    const map = new Map<string, CellStatus>();
    evaluations.flat().forEach((c) => {
      const prev = map.get(c.ch) || "empty";
      if (rank[c.status] > rank[prev]) map.set(c.ch, c.status);
    });
    return map;
  }, [evaluations]);

  const rows = useMemo(() => {
    const arr: string[] = [...guesses];
    if (arr.length < maxRows) arr.push(current);
    while (arr.length < maxRows) arr.push("");
    return arr.map((r) => r.padEnd(len, " ").slice(0, len));
  }, [guesses, current, len]);

  const onChangeLen = async (v: number) => {
    const nv = Math.max(4, Math.min(10, v));
    setLen(nv);
    await fetchTarget(nv);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-8">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-slate-300 hover:text-white font-bold">
            ← Ana sayfa
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Harf:</span>
            <select
              value={len}
              onChange={(e) => onChangeLen(Number(e.target.value))}
              className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-sm"
            >
              {[4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <header className="text-center space-y-1">
          <h1 className="text-3xl font-black tracking-tight">IELTS Wordle</h1>
          <p className="text-slate-400 text-sm">
            Günün kelimesi • {day || istanbulDayKey()} • {len} harf • (Europe/Istanbul)
          </p>
        </header>

        {/* TOAST */}
        {toast && (
          <div className="text-center">
            <div className="inline-flex px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-bold">
              {toast}
            </div>
          </div>
        )}

        {/* GRID */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4">
          {loading ? (
            <div className="text-center text-slate-400 font-bold py-10">Yükleniyor...</div>
          ) : (
            <div className="grid gap-2">
              {rows.map((row, rIdx) => {
                const evalRow = evaluations[rIdx];
                const isTypedRow = rIdx === guesses.length;

                return (
                  <div
                    key={rIdx}
                    className="grid gap-2"
                    style={{ gridTemplateColumns: `repeat(${len}, minmax(0, 1fr))` }}
                  >
                    {row.split("").map((ch, cIdx) => {
                      const st: CellStatus = evalRow?.[cIdx]?.status || "empty";
                      const typed = isTypedRow
                        ? current.padEnd(len, " ").slice(0, len).split("")[cIdx]
                        : ch;

                      const cls =
                        st === "correct"
                          ? "bg-emerald-600 border-emerald-500"
                          : st === "present"
                          ? "bg-amber-500 border-amber-400"
                          : st === "absent"
                          ? "bg-slate-800 border-slate-700 text-slate-400"
                          : "bg-slate-950/40 border-slate-700";

                      return (
                        <div
                          key={cIdx}
                          className={`aspect-square rounded-xl border-2 flex items-center justify-center text-2xl font-black ${cls}`}
                        >
                          {String(typed || " ").trim()}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ACTIONS */}
        <section className="space-y-3">
          <div className="flex gap-2">
            <input
              value={current}
              onChange={(e) => setCurrent(normalizeGuess(e.target.value).slice(0, len))}
              disabled={loading || status !== "playing"}
              placeholder={`${len} harf yaz...`}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-center text-lg font-bold tracking-widest"
              autoComplete="off"
              inputMode="text"
            />
            <button
              onClick={submitGuess}
              disabled={loading || status !== "playing"}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-black disabled:opacity-50"
            >
              Enter
            </button>
          </div>

          {status !== "playing" && target && (
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-slate-300 text-sm">Cevap:</div>
              <div className="text-3xl font-black tracking-widest">{target}</div>

              <button
                onClick={() => fetchTarget(len)}
                className="mt-3 px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold"
              >
                Yenile (yeni kelime)
              </button>
            </div>
          )}
        </section>

        {/* KEYBOARD */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4">
          {["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((row) => (
            <div key={row} className="flex justify-center gap-1 mb-2 last:mb-0">
              {row.split("").map((k) => {
                const st = keyboardMap.get(k) || "empty";
                const cls =
                  st === "correct"
                    ? "bg-emerald-600"
                    : st === "present"
                    ? "bg-amber-500"
                    : st === "absent"
                    ? "bg-slate-800 text-slate-400"
                    : "bg-slate-700";

                return (
                  <button
                    key={k}
                    onClick={() => {
                      if (loading || status !== "playing") return;
                      setCurrent((s) => (s.length >= len ? s : (s + k).toUpperCase()));
                    }}
                    className={`h-10 w-10 rounded-lg font-black ${cls}`}
                  >
                    {k}
                  </button>
                );
              })}

              {row === "ZXCVBNM" && (
                <button
                  onClick={() => setCurrent((s) => s.slice(0, -1))}
                  className="h-10 px-3 rounded-lg bg-slate-700 font-black"
                >
                  ⌫
                </button>
              )}
            </div>
          ))}
        </section>

        <p className="text-xs text-slate-500 text-center">
          Not: Günlük kelime <b>Europe/Istanbul</b> gününe göre sabitlenmeli. “Aynı kelime geliyor” sorunu genelde cache yüzünden olur; bu sayfa cache-buster ile bunu kırar.
        </p>
      </div>
    </main>
  );
}