'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SvgRenderer, { SvgData } from '../components/SvgRenderer';
import { questions } from '../data/questions';

// -------------------- TİP TANIMLAMALARI --------------------

type Domain = 'logic' | 'math' | 'visual' | 'attention';

type IQQuestion =
  | {
      id: string;
      domain: Domain;
      type: 'sequence' | 'analogy' | 'word-problem' | 'odd-one-out-text' | 'counting' | 'logic-puzzle';
      prompt: string;
      optionsText: string[];
      correct: number;
    }
  | {
      id: string;
      domain: Domain;
      type: 'grid-missing';
      prompt: string;
      grid: string[];
      options: string[][];
      correct: number;
    }
  | {
      id: string;
      domain: Domain;
      type: 'grid-odd-one-out';
      prompt: string;
      options: string[][];
      correct: number;
    }
  | {
      id: string;
      domain: Domain;
      type: 'visual-matrix' | 'visual-matrix-2x2' | 'visual-matrix-3x3';
      prompt: string;
      questionSvg: SvgData;
      options: { svg: SvgData }[];
      correct: number;
    };

type AnswerState = {
  selected: number | null;
  correct: boolean | null;
};

// -------------------- YARDIMCI --------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

// Normal CDF yaklaşımı (Abramowitz–Stegun / hızlı approx)
function normCdf(z: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  let p =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) p = 1 - p;
  return p;
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

// Badge sistemi (percentile yok)
function getBadge(iq: number) {
  if (iq >= 155)
    return { label: 'LEGEND', emoji: '🏆', style: 'bg-amber-500/15 border-amber-400/25 text-amber-200' };
  if (iq >= 145)
    return { label: 'ELITE', emoji: '🔥', style: 'bg-emerald-500/15 border-emerald-400/25 text-emerald-200' };
  if (iq >= 130)
    return { label: 'ADVANCED', emoji: '⚡', style: 'bg-indigo-500/15 border-indigo-400/25 text-indigo-200' };
  if (iq >= 115)
    return { label: 'SOLID', emoji: '✅', style: 'bg-sky-500/15 border-sky-400/25 text-sky-200' };
  if (iq >= 95)
    return { label: 'WARMUP', emoji: '🧩', style: 'bg-slate-500/15 border-slate-400/25 text-slate-200' };
  return { label: 'RETRY', emoji: '🔁', style: 'bg-rose-500/15 border-rose-400/25 text-rose-200' };
}

// -------------------- ANA SAYFA --------------------

export default function IQTestPage() {
  const data = questions as unknown as IQQuestion[];

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  const TOTAL_TIME = 18 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const total = data.length || 20;
  const q = data[idx];

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

    const answerKey = (q as any)?.id ? String((q as any).id) : String(idx);
    const correctIndex = Number((q as any).correct);
    const isCorrect = choiceIndex === correctIndex;

    setAnswers((prev) => ({
      ...prev,
      [answerKey]: { selected: choiceIndex, correct: isCorrect },
    }));
  };

  const next = () => setIdx((p) => clamp(p + 1, 0, (data.length || 1) - 1));
  const prev = () => setIdx((p) => clamp(p - 1, 0, (data.length || 1) - 1));
  const finishNow = () => setFinished(true);

  // ✅ Normal dağılıma yakın skor + Elit badge + Advanced ağırlık + hız bonusu
  const scorePack = useMemo(() => {
    const domainMax: Record<Domain, number> = { logic: 0, math: 0, visual: 0, attention: 0 };
    const domainGot: Record<Domain, number> = { logic: 0, math: 0, visual: 0, attention: 0 };

    let totalCorrect = 0;
    let totalAnswered = 0;

    // Weighted doğrular (Advanced Raven ağırlığı)
    let weightedCorrect = 0;
    let weightedTotal = 0;

    // Basit varsayım: son 12 soru advanced
    const ADV_COUNT = 12;
    const advStartIndex = Math.max(0, data.length - ADV_COUNT);

    // weights
    const W_BASE = 1.0;
    const W_ADV = 1.35;

    for (let i = 0; i < data.length; i++) {
      const qq = data[i];
      domainMax[qq.domain] += 1;

      const key = (qq as any)?.id ? String((qq as any).id) : String(i);
      const a = answers[key];

      const w = i >= advStartIndex ? W_ADV : W_BASE;
      weightedTotal += w;

      if (a?.selected !== null && a?.selected !== undefined) {
        totalAnswered += 1;
        if (a.correct) {
          totalCorrect += 1;
          domainGot[qq.domain] += 1;
          weightedCorrect += w;
        }
      }
    }

    const totalQ = data.length || 20;

    // Accuracy (düz)
    const acc = totalQ > 0 ? totalCorrect / totalQ : 0;

    // Weighted accuracy (asıl skor bunu kullanır)
    const wAcc = weightedTotal > 0 ? weightedCorrect / weightedTotal : 0;

    // Hız bonusu (0..1) — bitirmeye yakın daha az etkili
    const timeRatio = started ? clamp(timeLeft / TOTAL_TIME, 0, 1) : 0;
    const timeBonus = Math.pow(timeRatio, 0.65); // yumuşatılmış

    // --- Normal dağılım kalibrasyonu ---
    // Bu değerler "oyun içi" dağılımı doğal hissettirmek için:
    // ortalama performans ~ 0.55 civarı varsayımı, sd ~ 0.18
    const MU = 0.55;
    const SIGMA = 0.18;

    // wAcc + küçük hız katkısı (maks ~ +0.05)
    const perf = clamp(wAcc + 0.05 * timeBonus, 0, 1);

    // z-score
    const z = (perf - MU) / SIGMA;

    // IQ scale: mean 100, sd 15
    let iq = Math.round(100 + z * 15);

    // "Hard test" olduğu için tabanı biraz yukarı çek (çok az)
    // (Sınavı zor yaptığın için kullanıcı deneyimi daha tatmin edici)
    iq += 3;

    // Tam doğru bonusu (elit hissi)
    if (totalCorrect === totalQ && totalQ >= 20) iq += 6;

    // Clamp
    const gameIQ = clamp(iq, 70, 160);

    // Badge
    const badge = getBadge(gameIQ);

    // Ek metrikler
    const usedSeconds = clamp(TOTAL_TIME - timeLeft, 0, TOTAL_TIME);
    const accuracyPct = Math.round(acc * 100);
    const weightedPct = Math.round(wAcc * 100);

    // “Skor güveni” (kaç soru cevaplandıysa)
    const completionPct = Math.round((totalAnswered / totalQ) * 100);

    // İstersen içerde dursun diye: “perfCDF” (UI’da göstermiyoruz, percentile yok)
    const perfCdf = normCdf(z);

    return {
      domainMax,
      domainGot,
      totalCorrect,
      totalAnswered,
      totalQ,
      gameIQ,
      badge,
      accuracyPct,
      weightedPct,
      completionPct,
      usedSeconds,
      timeLeft,
      // debug/internal (gösterme):
      _perf: perf,
      _z: z,
      _cdf: perfCdf,
    };
  }, [answers, data, started, timeLeft]);

  const mmss = (s: number) => {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, '0')}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
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
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">{total} Questions • Mixed Domains</h1>
          <p className="text-slate-400">Logic • Math • Visual • Attention (normal-distribution scoring)</p>
        </header>

        {finished ? (
          <section className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div className="text-center space-y-3">
              <div className="text-2xl md:text-3xl font-black text-emerald-200">✅ Test Completed</div>

              <div className="flex items-center justify-center gap-2">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${scorePack.badge.style}`}>
                  <span className="text-base">{scorePack.badge.emoji}</span>
                  <span className="text-xs font-black tracking-widest">{scorePack.badge.label}</span>
                </div>
              </div>

              <div className="text-slate-300">
                Correct:{' '}
                <span className="font-black text-white">
                  {scorePack.totalCorrect}/{scorePack.totalQ}
                </span>{' '}
                • Estimated IQ:{' '}
                <span className="font-black text-indigo-200 text-2xl md:text-3xl align-middle">{scorePack.gameIQ}</span>
              </div>

              <div className="text-sm text-slate-400">
                Accuracy: <span className="font-black text-white">{scorePack.accuracyPct}%</span> • Weighted:{' '}
                <span className="font-black text-white">{scorePack.weightedPct}%</span> • Answered:{' '}
                <span className="font-black text-white">{scorePack.totalAnswered}</span> • Time used:{' '}
                <span className="font-black text-white">{mmss(scorePack.usedSeconds)}</span>
              </div>

              <div className="text-xs text-slate-500">
                Scoring uses a normal-distribution mapping (mean≈100, sd≈15) with advanced-weight + small speed bonus.
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

            <div className="rounded-2xl bg-slate-900/40 border border-white/10 p-4">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-black mb-2">Badges Guide</div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="font-black">✅ SOLID</div>
                  <div className="text-slate-400">115–129</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="font-black">⚡ ADVANCED</div>
                  <div className="text-slate-400">130–144</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="font-black">🔥 ELITE</div>
                  <div className="text-slate-400">145–154</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="font-black">🏆 LEGEND</div>
                  <div className="text-slate-400">155–160</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setIdx(0);
                  setAnswers({});
                  setTimeLeft(TOTAL_TIME);
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

                <div className="flex justify-center">
                  {'questionSvg' in q ? (
                    <div className="w-64 h-64 bg-white rounded-xl border-4 border-slate-700 shadow-2xl overflow-hidden text-slate-900 transition-transform hover:scale-[1.02]">
                      <SvgRenderer data={q.questionSvg} />
                    </div>
                  ) : 'grid' in q && q.grid ? (
                    <CellGrid grid={q.grid} />
                  ) : null}
                </div>

                <div
                  className={`grid gap-3 ${
                    'questionSvg' in q ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-2'
                  }`}
                >
                  {'optionsText' in q ? (
                    q.optionsText.map((opt, i) => {
                      const key = q.id || String(idx);
                      const picked = answers[key]?.selected === i;
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
                    q.options.map((opt, i) => {
                      const key = q.id || String(idx);
                      const picked = answers[key]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`aspect-square p-2 rounded-xl border transition-all flex items-center justify-center bg-white text-slate-800 relative
                            ${
                              picked
                                ? 'ring-4 ring-indigo-500 border-indigo-600 scale-105 z-10'
                                : 'border-slate-300 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1'
                            }
                          `}
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
                  ) : (
                    q.options.map((gridOpt, i) => {
                      const key = q.id || String(idx);
                      const picked = answers[key]?.selected === i;
                      return (
                        <button
                          key={i}
                          onClick={() => selectAnswer(i)}
                          className={`p-3 rounded-2xl border transition-all text-left
                            ${picked ? 'bg-indigo-500/20 border-indigo-300/30' : 'bg-slate-950/40 border-white/10 hover:bg-white/5'}
                          `}
                        >
                          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                            Option {String.fromCharCode(65 + i)}
                          </div>
                          <CellGrid grid={gridOpt} />
                        </button>
                      );
                    })
                  )}
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