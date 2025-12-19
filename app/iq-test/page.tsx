'use client';

import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';

import SvgRenderer, { SvgData } from '../components/SvgRenderer';
import { questions } from '../data/questions';

// -------------------- TİP TANIMLAMALARI --------------------

type Domain = 'logic' | 'math' | 'visual' | 'attention';

type IQQuestion =
  | { id: string; domain: Domain; type: 'sequence' | 'analogy' | 'word-problem' | 'odd-one-out-text' | 'counting' | 'logic-puzzle'; prompt: string; optionsText: string[]; correct: number; }
  | { id: string; domain: Domain; type: 'grid-missing'; prompt: string; grid: string[]; options: string[][]; correct: number; }
  | { id: string; domain: Domain; type: 'grid-odd-one-out'; prompt: string; options: string[][]; correct: number; }
  | { id: string; domain: Domain; type: 'visual-matrix' | 'visual-matrix-2x2' | 'visual-matrix-3x3'; prompt: string; questionSvg: SvgData; options: { svg: SvgData }[]; correct: number; };

type AnswerState = { selected: number | null; correct: boolean | null; };

// -------------------- YARDIMCI BİLEŞENLER --------------------

function CellGrid({ grid }: { grid: string[] }) {
  const cells = grid.join('').split('');
  return (
    <div className="inline-grid grid-cols-5 gap-1 p-3 rounded-2xl bg-white/5 border border-white/10">
      {cells.map((ch, i) => (
        <div key={i} className={`w-5 h-5 rounded-md border ${ch === '#' ? 'bg-indigo-400/80 border-indigo-200/40' : 'bg-slate-900/60 border-white/10'}`} />
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
  const data = (questions as unknown as IQQuestion[]) || [];
  const total = data.length;
  const TOTAL_TIME = 30 * 60;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);

  const questionAreaRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Window Resize
  useEffect(() => {
    const onResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ✅ A. OPTİMİZE EDİLMİŞ TIMER (Functional Update)
  useEffect(() => {
    if (!started || finished) return;
    const t = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [started, finished]);

  // ✅ SCROLL FIX
  useEffect(() => {
    if (started && !finished && questionAreaRef.current) {
      questionAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [idx, started, finished]);

  const selectAnswer = (choiceIndex: number) => {
    if (finished || timeLeft <= 0) return;
    const q = data[idx];
    setAnswers(prev => ({
      ...prev,
      [q.id]: { selected: choiceIndex, correct: choiceIndex === q.correct },
    }));
  };

  const scorePack = useMemo(() => {
    let totalCorrect = 0;
    const domainGot: Record<Domain, number> = { logic: 0, math: 0, visual: 0, attention: 0 };
    const domainMax: Record<Domain, number> = { logic: 0, math: 0, visual: 0, attention: 0 };

    data.forEach((qq, i) => {
      domainMax[qq.domain]++;
      if (answers[qq.id]?.correct) {
        totalCorrect++;
        domainGot[qq.domain]++;
      }
    });

    const acc = totalCorrect / (total || 1);
    const iq = Math.round(100 + ((acc - 0.5) / 0.15) * 15);
    const gameIQ = Math.max(70, Math.min(160, iq));
    return { totalCorrect, gameIQ, badge: getBadge(gameIQ), domainGot, domainMax, acc: Math.round(acc * 100) };
  }, [answers, data, total]);

  // ✅ C. LANDING (BAŞLANGIÇ) EKRANI
  if (showStartScreen) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center space-y-8 backdrop-blur-xl">
          <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center mx-auto border border-indigo-500/30">
            <Brain size={40} className="text-indigo-400" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter">NEURAL CAPACITY TEST</h1>
            <p className="text-slate-400 text-sm italic">Standardized IQ Assessment v3.0</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-xs font-bold text-slate-500 uppercase">Duration</div>
              <div className="text-lg font-black">30 Minutes</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-xs font-bold text-slate-500 uppercase">Questions</div>
              <div className="text-lg font-black">{total} Mixed</div>
            </div>
          </div>
          <ul className="text-left text-slate-400 text-sm space-y-2 px-4 italic">
            <li>• No external help allowed.</li>
            <li>• Some questions are non-verbal (matrices).</li>
            <li>• Time used affects your final score.</li>
          </ul>
          <button 
            onClick={() => { setShowStartScreen(false); setStarted(true); }}
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
          >
            START TEST
          </button>
        </div>
      </main>
    );
  }

  const q = data[idx];
  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10 font-sans">
      {finished && scorePack.gameIQ >= 145 && <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} />}
      
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header HUD */}
        <div className="flex justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md">
          <Link href="/" className="font-bold text-slate-400 hover:text-white transition-colors">← Exit</Link>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-bold">TIMER</p>
              <p className={`font-black ${timeLeft < 60 ? 'text-red-500' : 'text-emerald-400'}`}>{mmss(timeLeft)}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-bold">PROGRESS</p>
              <p className="font-black text-indigo-400">{idx + 1}/{total}</p>
            </div>
          </div>
        </div>

        {finished ? (
          <section className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 space-y-10 text-center">
            <div className="space-y-4">
              <h2 className="text-5xl font-black italic tracking-tighter">ANALYSIS COMPLETE</h2>
              <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border ${scorePack.badge.style}`}>
                <span className="text-2xl">{scorePack.badge.emoji}</span>
                <span className="font-black tracking-widest">{scorePack.badge.label}</span>
              </div>
            </div>

            <div className="py-10 border-y border-white/5">
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-2">Estimated IQ Index</p>
              <h3 className="text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{scorePack.gameIQ}</h3>
            </div>

            {/* ✅ B. ŞEFFAFLIK (DISCLAIMER) */}
            <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 max-w-lg mx-auto">
              <p className="text-[11px] text-indigo-300 leading-relaxed italic">
                <strong>DISCLAIMER:</strong> This score is a game-based assessment of logical and visual patterns. It does not replace professional clinical IQ tests administered by psychologists.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(scorePack.domainGot).map(d => (
                <div key={d} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{d}</p>
                  <p className="text-xl font-black text-indigo-300">{scorePack.domainGot[d as Domain]}/{scorePack.domainMax[d as Domain]}</p>
                </div>
              ))}
            </div>

            <button onClick={() => window.location.reload()} className="w-full md:w-64 py-5 bg-white text-black font-black rounded-2xl hover:bg-indigo-400 transition-all">TRY AGAIN</button>
          </section>
        ) : (
          <div ref={questionAreaRef} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* ✅ D. GÖRSEL GELİŞTİRME (MATRIX VIEW) */}
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-widest">{q.domain}</span>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">{q.prompt}</h2>
              </div>

              <div className="flex justify-center py-6">
                {'questionSvg' in q ? (
                  <div className="p-6 bg-white rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                    <div className="w-48 h-48 md:w-64 md:h-64"><SvgRenderer data={q.questionSvg} /></div>
                  </div>
                ) : 'grid' in q ? <CellGrid grid={q.grid} /> : null}
              </div>

              {/* Options Grid */}
              <div className={`grid gap-4 ${'questionSvg' in q ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                {('optionsText' in q ? q.optionsText : 'options' in q ? q.options : []).map((opt: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`p-4 rounded-3xl border-2 transition-all flex items-center justify-center min-h-[4rem] text-lg font-bold
                      ${answers[q.id]?.selected === i ? 'bg-indigo-500/20 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                  >
                    {typeof opt === 'string' ? opt : opt.svg ? <div className="w-16 h-16"><SvgRenderer data={opt.svg} /></div> : `Option ${i + 1}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center gap-4">
              <button disabled={idx === 0} onClick={() => setIdx(idx - 1)} className="px-8 py-4 bg-slate-800 rounded-2xl font-bold opacity-50 hover:opacity-100 disabled:invisible">PREV</button>
              {idx === total - 1 ? (
                <button onClick={() => setFinished(true)} className="px-12 py-4 bg-emerald-600 rounded-2xl font-black shadow-lg shadow-emerald-600/20">FINISH TEST</button>
              ) : (
                <button onClick={() => setIdx(idx + 1)} className="px-12 py-4 bg-indigo-600 rounded-2xl font-black shadow-lg shadow-indigo-600/20">NEXT QUESTION →</button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// Brain ikonu için basit SVG (Lucide alternatifi)
function Brain({ size, className }: { size: number, className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/>
    </svg>
  );
}
