'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SvgRenderer, { SvgData } from '../components/SvgRenderer';
import { questions } from '../data/questions';

// -------------------- TİP TANIMLAMALARI --------------------

type Domain = 'logic' | 'math' | 'visual' | 'attention';

type TextQuestion = {
  id: string;
  domain: Domain;
  type: 'sequence' | 'analogy' | 'word-problem' | 'odd-one-out-text' | 'counting' | 'logic-puzzle';
  prompt: string;
  optionsText: string[];
  correct: number;
  explanation?: string;
};

type GridMissingQuestion = {
  id: string;
  domain: Domain;
  type: 'grid-missing';
  prompt: string;
  grid: string[];
  options: string[][];
  correct: number;
  explanation?: string;
};

type GridOddQuestion = {
  id: string;
  domain: Domain;
  type: 'grid-odd-one-out';
  prompt: string;
  options: string[][];
  correct: number;
  explanation?: string;
};

type VisualQuestion = {
  id: string;
  domain: Domain;
  type: 'visual-matrix' | 'visual-matrix-2x2' | 'visual-matrix-3x3';
  prompt: string;
  questionSvg: SvgData;
  options: { svg: SvgData }[];
  correct: number;
  explanation?: string;
};

type IQQuestion = TextQuestion | GridMissingQuestion | GridOddQuestion | VisualQuestion;

type AnswerState = {
  selected: number | null;
  correct: boolean | null;
};

// -------------------- YARDIMCI --------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function CellGrid({ grid }: { grid: string[] }) {
  return (
    <div className="inline-grid grid-cols-5 gap-1 p-3 rounded-2xl bg-white/5 border border-white/10">
      {grid.join('').split('').map((ch, i) => (
        <div
          key={i}
          className={`w-5 h-5 rounded-md border ${
            ch === '#'
              ? 'bg-indigo-400/80 border-indigo-200/40 shadow-[0_0_10px_rgba(99,102,241,0.35)]'
              : 'bg-slate-900/60 border-white/10'
          }`}
        />
      ))}
    </div>
  );
}

// Type Guards
const isTextQ = (q: IQQuestion): q is TextQuestion => 'optionsText' in q;
const isVisualQ = (q: IQQuestion): q is VisualQuestion => 'questionSvg' in q;
const isGridMissingQ = (q: IQQuestion): q is GridMissingQuestion => q.type === 'grid-missing';
const isGridQ = (q: IQQuestion): q is GridMissingQuestion | GridOddQuestion =>
  q.type === 'grid-missing' || q.type === 'grid-odd-one-out';

// -------------------- ANA SAYFA --------------------

export default function IQTestPage() {
  const data = questions as IQQuestion[];

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  const [timeLeft, setTimeLeft] = useState(18 * 60);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const total = data.length || 20;
  const q = data[idx];

  // Timer
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [started, finished, timeLeft]);

  const answeredCount = useMemo(() => {
    return Object.values(answers).filter((a) => a.selected !== null).length;
  }, [answers]);

  const selectAnswer = (choiceIndex: number) => {
    if (!q || finished || timeLeft <= 0) return;
    setStarted(true);

    const isCorrect = choiceIndex === q.correct;
    setAnswers((prev) => ({
      ...prev,
      [q.id]: { selected: choiceIndex, correct: isCorrect },
    }));
  };

  const next = () => setIdx((p) => clamp(p + 1, 0, (data.length || 1) - 1));
  const prev = () => setIdx((p) => clamp(p - 1, 0, (data.length || 1) - 1));
  const finishNow = () => setFinished(true);

  // Score
  const scorePack = useMemo(() => {
    const domainMax: Record<Domain, number> = { logic: 0, math: 0, visual: 0, attention: 0 };
    const domainGot: Record<Domain, number> = { logic: 0, math: 0, visual: 0, attention: 0 };

    for (const qq of data) {
      domainMax[qq.domain] += 1;
      const a = answers[qq.id];
      if (a?.correct) domainGot[qq.domain] += 1;
    }

    const totalCorrect = Object.values(answers).filter((a) => a.correct).length || 0;
    const totalQ = data.length || 20;

    const acc = totalCorrect / totalQ;
    const timeBonus = started ? clamp(timeLeft / (18 * 60), 0, 1) : 0;
    const gameIQ = Math.round(70 + acc * 60 + timeBonus * 10);
    const gameIQClamped = clamp(gameIQ, 70, 145);

    return { domainMax, domainGot, totalCorrect, totalQ, gameIQ: gameIQClamped };
  }, [answers, data, started, timeLeft]);

  const mmss = (s: number) => {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, '0')}`;
  };

  const isAnswered = q ? answers[q.id]?.selected !== null && answers[q.id]?.selected !== undefined : false;

  const optionsGridClass = useMemo(() => {
    if (!q) return 'grid-cols-1 md:grid-cols-2';
    if (isVisualQ(q)) return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';
    return 'grid-cols-1 md:grid-cols-2';
  }, [q]);

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-slate-300 hover:text-white font-bold">
            ← Home
          </Link>

          <div className="flex items-center gap-3">
            <div
              className={`px-3 py-2 rounded-xl border ${
                timeLeft <= 60 ? 'bg-red-500/10 border-red-500/20' : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Time</div>
              <div className={`text-lg font-black ${timeLeft <= 60 ? 'text-red-300' : 'text-emerald-300'}`}>
                {mmss(Math.max(0, timeLeft))}
              </div>
            </div>

            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Progress</div>
              <div className="text-lg font-black text-indigo-300">
                {answeredCount}/{total}
              </div>
            </div>
          </div>
        </div>

        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/20 text-indigo-200 text-sm font-bold">
            🧩 IQ Test (Hard)
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">20 Questions • Mixed Domains</h1>
          <p className="text-slate-400">Logic • Math • Visual • Attention (game-style scoring)</p>
        </header>

        {/* Main */}
        {finished ? (
          <section className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-emerald-200">✅ Test Completed</div>
              <div className="text-slate-300 mt-2">
                Correct: <span className="font-black text-white">{scorePack.totalCorrect}/{scorePack.totalQ}</span> •
                Estimated score: <span className="font-black text-indigo-200">{scorePack.gameIQ}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-3">
              {(['logic', 'math', 'visual', 'attention'] as Domain[]).map((d) => {
                const got = scorePack.domainGot[d];
                const mx = scorePack.domainMax[d] || 1;
                const pct = mx > 0 ? Math.round((got / mx) * 100) : 0;
                return (
                  <div key={d} className="rounded-2xl bg-slate-900/50 border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">{d}</div>
                    <div className="text-2xl font-black text-white mt-1">
                      {got}/{mx}
                    </div>
                    <div className="text-sm text-slate-300">{pct}%</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setIdx(0);
                  setAnswers({});
                  setTimeLeft(18 * 60);
                  setStarted(false);
                  setFinished(false);
                }}
                className="flex-1 py-3 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-500"
              >
                Restart
              </button>
              <Link href="/" className="sm:w-56 py-3 rounded-2xl font-black bg-slate-800 hover:bg-slate-700 text-center">
                Back Home →
              </Link>
            </div>
          </section>
        ) : (
          <section className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-slate-400 font-bold">
                Question <span className="text-white">{idx + 1}</span> / {total}
                {q ? (
                  <span className="ml-2 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {q.domain.toUpperCase()}
                  </span>
                ) : null}
              </div>
              <button
                onClick={finishNow}
                className="text-xs font-black px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 hover:bg-red-500/20"
              >
                Finish Now
              </button>
            </div>

            {q ? (
              <div className="space-y-6">
                <div className="text-lg md:text-xl font-black text-white">{q.prompt}</div>

                {/* Question Visual */}
                <div className="flex justify-center">
                  {isVisualQ(q) ? (
                    <div className="w-64 h-64 bg-white rounded-xl border-4 border-slate-700 shadow-2xl overflow-hidden text-slate-900 transition-transform hover:scale-[1.02]">
                      <SvgRenderer data={q.questionSvg} />
                    </div>
                  ) : isGridMissingQ(q) ? (
                    <CellGrid grid={q.grid} />
                  ) : null}
                </div>

                {/* Options */}
                <div className={`grid gap-3 ${optionsGridClass}`}>
                  {isTextQ(q) ? (
                    q.optionsText.map((opt, i) => {
                      const picked = answers[q.id]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`p-4 rounded-2xl border text-left font-bold transition-all ${
                            picked ? 'bg-indigo-500/20 border-indigo-300/30' : 'bg-slate-950/40 border-white/10 hover:bg-white/5'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })
                  ) : isVisualQ(q) ? (
                    q.options.map((opt, i) => {
                      const picked = answers[q.id]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`aspect-square p-2 rounded-xl border transition-all flex items-center justify-center bg-white text-slate-800 relative ${
                            picked
                              ? 'ring-4 ring-indigo-500 border-indigo-600 scale-105 z-10'
                              : 'border-slate-300 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1'
                          }`}
                        >
                          <SvgRenderer data={opt.svg} />
                          {picked && (
                            <div className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })
                  ) : isGridQ(q) ? (
                    q.options.map((gridOpt, i) => {
                      const picked = answers[q.id]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`p-3 rounded-2xl border transition-all text-left ${
                            picked ? 'bg-indigo-500/20 border-indigo-300/30' : 'bg-slate-950/40 border-white/10 hover:bg-white/5'
                          }`}
                        >
                          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                            Option {String.fromCharCode(65 + i)}
                          </div>
                          <CellGrid grid={gridOpt} />
                        </button>
                      );
                    })
                  ) : null}
                </div>

             
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-6">
                  <button
                    onClick={prev}
                    className="px-6 py-3 rounded-2xl font-black bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors"
                    disabled={idx === 0}
                  >
                    ← Prev
                  </button>

                  <button
                    onClick={next}
                    className="px-6 py-3 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 transition-colors shadow-lg shadow-indigo-900/20"
                    disabled={idx >= total - 1}
                  >
                    Next →
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-400 font-bold py-10">No question found.</div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}