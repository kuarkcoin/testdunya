'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Timer, 
  ArrowLeft, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Brain, 
  CheckCircle2 
} from 'lucide-react';

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

// -------------------- YARDIMCI FONKSİYONLAR --------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function onResize() { setSize({ width: window.innerWidth, height: window.innerHeight }); }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}

function CellGrid({ grid }: { grid: string[] }) {
  return (
    <div className="inline-grid grid-cols-5 gap-1.5 p-4 rounded-2xl bg-slate-900/50 border border-white/10 shadow-inner">
      {grid.join('').split('').map((ch, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.01 }}
          className={`w-6 h-6 rounded-md border ${
            ch === '#'
              ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
              : 'bg-slate-800 border-white/5'
          }`}
        />
      ))}
    </div>
  );
}

function getBadge(iq: number) {
  if (iq >= 155) return { label: 'LEGEND', emoji: '🏆', style: 'bg-amber-500/15 border-amber-400/25 text-amber-200' };
  if (iq >= 145) return { label: 'ELITE', emoji: '🔥', style: 'bg-emerald-500/15 border-emerald-400/25 text-emerald-200' };
  if (iq >= 130) return { label: 'ADVANCED', emoji: '⚡', style: 'bg-indigo-500/15 border-indigo-400/25 text-indigo-200' };
  if (iq >= 115) return { label: 'SOLID', emoji: '✅', style: 'bg-sky-500/15 border-sky-400/25 text-sky-200' };
  return { label: 'WARMUP', emoji: '🧩', style: 'bg-slate-500/15 border-slate-400/25 text-slate-200' };
}

// -------------------- ANA BİLEŞEN --------------------

export default function IQTestPage() {
  const data = questions as unknown as IQQuestion[];

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  const TOTAL_TIME = 30 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const questionAreaRef = useRef<HTMLDivElement>(null);
  const total = data.length || 20;
  const q = data[idx];
  const { width, height } = useWindowSize();

  // Soru değiştiğinde yukarı kaydır
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [idx, finished]);

  // Zaman sayacı
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [started, finished, timeLeft]);

  const answeredCount = useMemo(() => Object.values(answers).filter((a) => a.selected !== null).length, [answers]);

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

  const scorePack = useMemo(() => {
    const domainMax: any = { logic: 0, math: 0, visual: 0, attention: 0 };
    const domainGot: any = { logic: 0, math: 0, visual: 0, attention: 0 };
    let totalCorrect = 0;
    let weightedCorrect = 0;
    let weightedTotal = 0;

    data.forEach((qq, i) => {
      domainMax[qq.domain] += 1;
      const key = (qq as any)?.id ? String((qq as any).id) : String(i);
      const a = answers[key];
      const weight = i >= data.length - 10 ? 1.4 : 1.0;
      weightedTotal += weight;

      if (a?.selected !== null) {
        if (a?.correct) {
          totalCorrect += 1;
          domainGot[qq.domain] += 1;
          weightedCorrect += weight;
        }
      }
    });

    const wAcc = weightedTotal > 0 ? weightedCorrect / weightedTotal : 0;
    const timeBonus = (timeLeft / TOTAL_TIME) * 0.1;
    const z = (wAcc + timeBonus - 0.55) / 0.18;
    const iq = clamp(Math.round(100 + z * 15) + 5, 70, 160);

    return {
      totalCorrect,
      totalQ: data.length,
      gameIQ: iq,
      badge: getBadge(iq),
      domainGot,
      domainMax,
      usedSeconds: TOTAL_TIME - timeLeft,
      accuracyPct: Math.round((totalCorrect / data.length) * 100)
    };
  }, [answers, data, finished]);

  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-indigo-500/30">
      {finished && scorePack.gameIQ >= 145 && (
        <ReactConfetti width={width} height={height} numberOfPieces={400} gravity={0.2} recycle={false} />
      )}

      {/* STICKY HEADER */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/5 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all font-bold text-sm">
            <ArrowLeft size={18} /> <span className="hidden sm:inline">EXIT</span>
          </Link>
          
          <div className="flex gap-4 items-center">
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${timeLeft < 60 ? 'bg-rose-500/10 border-rose-500 text-rose-500 animate-pulse' : 'bg-slate-800 border-slate-700 text-emerald-400'}`}>
              <Timer size={16} />
              <span className="font-mono font-black">{mmss(timeLeft)}</span>
            </div>
            <div className="bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700 flex items-center gap-2">
              <Brain size={16} className="text-indigo-400" />
              <span className="font-black text-sm">{idx + 1} / {total}</span>
            </div>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: `${((idx + 1) / total) * 100}%` }}
             className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400" 
           />
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <AnimatePresence mode="wait">
          {finished ? (
            <motion.section 
              key="results"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center space-y-10 backdrop-blur-sm shadow-2xl"
            >
              <div className="space-y-4">
                <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center mx-auto border border-indigo-500/30">
                   <Trophy size={40} className="text-indigo-400" />
                </div>
                <h3 className="text-5xl font-black">Test Result</h3>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 ${scorePack.badge.style}`}>
                  <span className="text-2xl">{scorePack.badge.emoji}</span>
                  <span className="text-xl font-black tracking-widest">{scorePack.badge.label}</span>
                </div>
                
                <div className="relative">
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500"
                   >
                     {scorePack.gameIQ}
                   </motion.div>
                   <p className="text-slate-500 font-bold tracking-[0.5em] uppercase text-xs">Estimated IQ Score</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(['logic', 'math', 'visual', 'attention'] as Domain[]).map((d) => (
                  <div key={d} className="bg-slate-950/40 p-6 rounded-3xl border border-white/5 text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{d}</p>
                    <p className="text-3xl font-black">{scorePack.domainGot[d]}/{scorePack.domainMax[d]}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button onClick={() => window.location.reload()} className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black hover:bg-indigo-400 transition-all flex items-center justify-center gap-2">
                  <RotateCcw size={20} /> RETAKE TEST
                </button>
                <Link href="/" className="px-10 py-5 bg-slate-800 text-white rounded-2xl font-black hover:bg-slate-700 transition-all">
                  BACK HOME
                </Link>
              </div>
            </motion.section>
          ) : (
            <motion.section 
              key={idx}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-6 md:p-10 space-y-8 backdrop-blur-sm min-h-[500px]"
            >
              <div className="flex items-center justify-between">
                <span className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                  {q?.domain} Assessment
                </span>
                <button onClick={() => setFinished(true)} className="text-xs font-black text-rose-500 hover:text-rose-400 transition-colors uppercase">Finish Now</button>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black leading-tight text-white">{q?.prompt}</h2>

                <div className="flex justify-center py-4">
                  {'questionSvg' in q ? (
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full max-w-[300px] aspect-square bg-white rounded-3xl border-8 border-slate-800 shadow-2xl overflow-hidden text-slate-900">
                      <SvgRenderer data={q.questionSvg} />
                    </motion.div>
                  ) : 'grid' in q && q.grid ? (
                    <CellGrid grid={q.grid} />
                  ) : null}
                </div>

                {/* OPTIONS */}
                <div className={`grid gap-4 ${'questionSvg' in q ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {'optionsText' in q ? (
                    q.optionsText.map((opt, i) => (
                      <motion.button 
                        key={i} 
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectAnswer(i)} 
                        className={`p-6 rounded-2xl border-2 text-left font-bold transition-all ${answers[q.id || String(idx)]?.selected === i ? 'bg-indigo-500/20 border-indigo-400' : 'bg-slate-950/40 border-white/5 hover:border-white/20'}`}
                      >
                        <span className="text-slate-500 mr-2">{String.fromCharCode(65 + i)}.</span> {opt}
                      </motion.button>
                    ))
                  ) : 'questionSvg' in q ? (
                    q.options.map((opt, i) => (
                      <motion.button 
                        key={i} 
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectAnswer(i)} 
                        className={`aspect-square p-2 rounded-2xl border-4 transition-all flex items-center justify-center bg-white relative ${answers[q.id || String(idx)]?.selected === i ? 'border-indigo-500' : 'border-slate-200'}`}
                      >
                        <SvgRenderer data={opt.svg} />
                        {answers[q.id || String(idx)]?.selected === i && (
                          <div className="absolute -top-3 -right-3 bg-indigo-500 text-white p-1 rounded-full shadow-lg"><CheckCircle2 size={18} /></div>
                        )}
                      </motion.button>
                    ))
                  ) : (
                    q.options.map((gridOpt, i) => (
                      <motion.button 
                        key={i} 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectAnswer(i)} 
                        className={`p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${answers[q.id || String(idx)]?.selected === i ? 'bg-indigo-500/10 border-indigo-400' : 'bg-slate-950/40 border-white/5'}`}
                      >
                         <div className="text-[10px] font-black text-slate-500 uppercase">Option {String.fromCharCode(65 + i)}</div>
                         <CellGrid grid={gridOpt} />
                      </motion.button>
                    ))
                  )}
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <button 
                  onClick={prev} 
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-black bg-slate-800 hover:bg-slate-700 disabled:opacity-30 transition-all" 
                  disabled={idx === 0}
                >
                  <ChevronLeft size={20} /> PREV
                </button>
                <button 
                  onClick={next} 
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-black bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 transition-all shadow-lg" 
                  disabled={idx === total - 1}
                >
                  NEXT <ChevronRight size={20} />
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
