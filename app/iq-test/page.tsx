'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
// 👇 1. ADIM: Renderer bileşenini import ediyoruz
import SvgRenderer from '@/components/SvgRenderer';

// -------------------- TİP TANIMLAMALARI --------------------

type Domain = 'logic' | 'math' | 'visual' | 'attention';

// SVG Veri Tipleri (Renderer ile uyumlu)
type SvgElement = { t: string; [key: string]: any };
type SvgData = { viewBox: string; elements: SvgElement[] };

type IQQuestion =
  // A) Metin Tabanlı Sorular
  | {
      id: string;
      domain: Domain;
      type: 'sequence' | 'analogy' | 'word-problem' | 'odd-one-out-text' | 'counting' | 'logic-puzzle';
      prompt: string;
      optionsText: string[];
      correct: number;
      explanation?: string;
    }
  // B) ASCII Grid Soruları
  | {
      id: string;
      domain: Domain;
      type: 'grid-missing';
      prompt: string;
      grid: string[]; // 5x5 ASCII
      options: string[][]; // 4 adet 5x5
      correct: number;
      explanation?: string;
    }
  | {
      id: string;
      domain: Domain;
      type: 'grid-odd-one-out';
      prompt: string;
      options: string[][]; // 4 adet 5x5
      correct: number;
      explanation?: string;
    }
  // C) YENİ: Visual Matrix (SVG) Soruları
  | {
      id: string;
      domain: Domain;
      type: 'visual-matrix';
      prompt: string;
      questionSvg: SvgData;
      options: { svg: SvgData }[];
      correct: number;
      explanation?: string;
    };

type AnswerState = {
  selected: number | null;
  correct: boolean | null;
};

const TEST_URL = '/data/iq/iq_hard_test_01.json';

// -------------------- YARDIMCI FONKSİYONLAR & BİLEŞENLER --------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

// ASCII Grid Çizici (Eski tip sorular için)
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

// -------------------- ANA SAYFA BİLEŞENİ --------------------

export default function IQTestPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IQQuestion[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  // 18 dakika süre
  const [timeLeft, setTimeLeft] = useState(18 * 60);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const total = data.length || 20;

  // JSON Yükleme
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(TEST_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const json = (await res.json()) as IQQuestion[];
        if (!Array.isArray(json) || json.length === 0) throw new Error('JSON is empty/invalid.');
        setData(json);
        setError(null);
      } catch (e: any) {
        setError(e?.message || 'Failed to load test data.');
        setData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Sayaç
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [started, finished, timeLeft]);

  const q = data[idx];

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

  // Puanlama Hesaplaması
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

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* --- Header & Timer --- */}
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-slate-300 hover:text-white font-bold">
            ← Home
          </Link>

          <div className="flex items-center gap-3">
            <div className={`px-3 py-2 rounded-xl border ${timeLeft <= 60 ? 'bg-red-500/10 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
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

        {/* --- Main Area --- */}
        {loading ? (
          <div className="text-center text-slate-400 font-bold py-10">Loading test…</div>
        ) : error ? (
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-200 text-center">
            <div className="font-bold text-lg mb-2">Data load error</div>
            <div className="text-sm opacity-80">{error}</div>
            <div className="text-xs opacity-60 mt-3">Expected file: public{TEST_URL}</div>
          </div>
        ) : finished ? (
          /* --- SONUÇ EKRANI --- */
          <section className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-emerald-200">✅ Test Completed</div>
              <div className="text-slate-300 mt-2">
                Correct: <span className="font-black text-white">{scorePack.totalCorrect}/{scorePack.totalQ}</span> •
                Estimated score: <span className="font-black text-indigo-200">{scorePack.gameIQ}</span>
              </div>
              <div className="text-xs text-slate-500 mt-2">
                (This is a gamified estimate, not a clinical IQ measurement.)
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-3">
              {(['logic', 'math', 'visual', 'attention'] as Domain[]).map((d) => {
                const got = scorePack.domainGot[d];
                const mx = scorePack.domainMax[d] || 1;
                const pct = Math.round((got / mx) * 100);
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
          /* --- SORU EKRANI --- */
          <section className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-slate-400 font-bold">
                Question <span className="text-white">{idx + 1}</span> / {total}
                {q ? <span className="ml-2 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{q.domain.toUpperCase()}</span> : null}
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

                {/* 1. SORU GÖRSELİ ALANI */}
                <div className="flex justify-center">
                  {'questionSvg' in q ? (
                    // A) SVG Soru (Visual Matrix)
                    <div className="w-64 h-64 bg-white rounded-xl border-4 border-slate-700 shadow-2xl overflow-hidden text-slate-900 transition-transform hover:scale-[1.02]">
                      <SvgRenderer data={q.questionSvg} />
                    </div>
                  ) : 'grid' in q && q.grid ? (
                    // B) ASCII Grid Soru
                    <CellGrid grid={q.grid} />
                  ) : null}
                </div>

                {/* 2. SEÇENEKLER ALANI */}
                <div className={`grid gap-3 ${'questionSvg' in q ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-2'}`}>
                  
                  {/* --- DURUM A: Metin Seçenekleri --- */}
                  {'optionsText' in q ? (
                    q.optionsText.map((opt, i) => {
                      const picked = answers[q.id]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`p-4 rounded-2xl border text-left font-bold transition-all
                            ${picked ? 'bg-indigo-500/20 border-indigo-300/30' : 'bg-slate-950/40 border-white/10 hover:bg-white/5'}
                          `}
                        >
                          {opt}
                        </button>
                      );
                    })
                  ) : 'questionSvg' in q ? (
                    /* --- DURUM B: Visual Matrix (SVG) Seçenekleri --- */
                    q.options.map((opt, i) => {
                      const picked = answers[q.id]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`aspect-square p-2 rounded-xl border transition-all flex items-center justify-center bg-white text-slate-800 relative
                            ${picked 
                              ? 'ring-4 ring-indigo-500 border-indigo-600 scale-105 z-10' 
                              : 'border-slate-300 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1'
                            }
                          `}
                        >
                          {/* opt.svg verisini Renderer'a gönderiyoruz */}
                          <SvgRenderer data={opt.svg} />
                          {picked && (
                            <div className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })
                  ) : (
                    /* --- DURUM C: ASCII Grid Seçenekleri --- */
                    q.options.map((gridOpt, i) => {
                      const picked = answers[q.id]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`p-3 rounded-2xl border transition-all text-left
                            ${picked ? 'bg-indigo-500/20 border-indigo-300/30' : 'bg-slate-950/40 border-white/10 hover:bg-white/5'}
                          `}
                        >
                          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Option {String.fromCharCode(65 + i)}</div>
                          <CellGrid grid={gridOpt} />
                        </button>
                      );
                    })
                  )}
                </div>

                {/* Açıklama (Cevaplandıktan sonra görünür) */}
                {isAnswered && q.explanation ? (
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-4 text-emerald-200 animate-in fade-in slide-in-from-top-2">
                    <div className="font-black mb-1">Explanation</div>
                    <div className="text-sm text-slate-200">{q.explanation}</div>
                  </div>
                ) : null}

                {/* Navigasyon Butonları */}
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
