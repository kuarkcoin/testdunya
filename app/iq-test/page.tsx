'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';

import SvgRenderer, { SvgData } from '../components/SvgRenderer';
import { questions } from '../data/questions';

// -------------------- TİP TANIMLAMALARI --------------------
type Domain = 'logic' | 'math' | 'visual' | 'attention';
type IQQuestion = any; 
type AnswerState = { selected: number | null; correct: boolean | null; };

// -------------------- YARDIMCI FONKSİYONLAR --------------------
function clamp(n: number, a: number, b: number) { return Math.max(a, Math.min(b, n)); }
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function onResize() { setSize({ width: window.innerWidth, height: window.innerHeight }); }
    onResize(); window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}

function CellGrid({ grid }: { grid: string[] }) {
  return (
    <div className="inline-grid grid-cols-5 gap-1 p-3 rounded-2xl bg-white/5 border border-white/10">
      {grid.join('').split('').map((ch, i) => (
        <div key={i} className={`w-5 h-5 rounded-md border ${ch === '#' ? 'bg-indigo-400/80 border-indigo-200/40 shadow-[0_0_10px_rgba(99,102,241,0.35)]' : 'bg-slate-900/60 border-white/10'}`} />
      ))}
    </div>
  );
}

function getBadge(iq: number) {
  if (iq >= 155) return { label: 'LEGEND', emoji: '🏆', style: 'bg-amber-500/15 border-amber-400/25 text-amber-200' };
  if (iq >= 145) return { label: 'ELITE', emoji: '🔥', style: 'bg-emerald-500/15 border-emerald-400/25 text-emerald-200' };
  if (iq >= 130) return { label: 'ADVANCED', emoji: '⚡', style: 'bg-indigo-500/15 border-indigo-400/25 text-indigo-200' };
  if (iq >= 115) return { label: 'SOLID', emoji: '✅', style: 'bg-sky-500/15 border-sky-400/25 text-sky-200' };
  if (iq >= 95) return { label: 'WARMUP', emoji: '🧩', style: 'bg-slate-500/15 border-slate-400/25 text-slate-200' };
  return { label: 'RETRY', emoji: '🔁', style: 'bg-rose-500/15 border-rose-400/25 text-rose-200' };
}

// -------------------- ANA BİLEŞEN --------------------
export default function IQTestPage() {
  const data = questions as unknown as IQQuestion[];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const { width, height } = useWindowSize();

  // Soruya odaklanmak için Ref
  const questionAreaRef = useRef<HTMLDivElement>(null);

  // ✅ SCROLL FIX: "Yukarı fırlama" sorununu çözen geliştirilmiş mantık
  useEffect(() => {
    if (!finished && questionAreaRef.current) {
      const timer = setTimeout(() => {
        questionAreaRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Ofset: Başlığın tepesine yapışmaması için 100px yukarıda durdurur
        if (window.scrollY > 100) {
            window.scrollBy(0, -110);
        }
      }, 100); // 100ms gecikme render çakışmasını önler
      return () => clearTimeout(timer);
    }
  }, [idx, finished]);

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) { setFinished(true); return; }
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [started, finished, timeLeft]);

  const q = data[idx];
  const total = data.length;
  const answeredCount = useMemo(() => Object.values(answers).filter((a) => a.selected !== null).length, [answers]);

  const selectAnswer = (choiceIndex: number) => {
    if (!q || finished || timeLeft <= 0) return;
    setStarted(true);
    const answerKey = q.id ? String(q.id) : String(idx);
    setAnswers(prev => ({ ...prev, [answerKey]: { selected: choiceIndex, correct: choiceIndex === Number(q.correct) } }));
  };

  const next = () => setIdx(p => clamp(p + 1, 0, total - 1));
  const prev = () => setIdx(p => clamp(p - 1, 0, total - 1));

  const scorePack = useMemo(() => {
    let totalCorrect = 0;
    let weightedCorrect = 0;
    let weightedTotal = 0;
    const ADV_COUNT = Math.min(12, data.length);
    const advStart = data.length - ADV_COUNT;

    data.forEach((qq, i) => {
        const key = qq.id ? String(qq.id) : String(i);
        const a = answers[key];
        const w = i >= advStart ? 1.35 : 1.0;
        weightedTotal += w;
        if (a?.correct) {
            totalCorrect += 1;
            weightedCorrect += w;
        }
    });

    const perf = clamp((weightedCorrect / weightedTotal) + 0.05, 0, 1);
    const iq = clamp(Math.round(100 + ((perf - 0.55) / 0.18) * 15) + 3, 70, 160);
    return { gameIQ: iq, badge: getBadge(iq), totalCorrect, totalQ: total, usedSeconds: (30*60) - timeLeft };
  }, [answers, data, timeLeft]);

  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10 scroll-smooth">
      {finished && scorePack.gameIQ >= 145 && <ReactConfetti width={width} height={height} recycle={false} />}
      
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Üst Bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-400 hover:text-white">← Home</Link>
          <div className="flex gap-2">
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl text-center min-w-[70px]">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Time</div>
              <div className="text-emerald-400 font-black">{mmss(timeLeft)}</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl text-center min-w-[70px]">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Prog</div>
              <div className="text-indigo-400 font-black">{idx + 1}/{total}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {!finished && (
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${((idx + 1) / total) * 100}%` }} />
          </div>
        )}

        {finished ? (
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center space-y-6">
            <h2 className="text-3xl font-black text-emerald-300">Test Finished!</h2>
            <div className="text-6xl font-black">{scorePack.gameIQ} <span className="text-2xl text-slate-500">IQ</span></div>
            <div className={`inline-block px-4 py-2 rounded-full border ${scorePack.badge.style} font-bold`}>{scorePack.badge.emoji} {scorePack.badge.label}</div>
            <div className="text-slate-400">Correct: {scorePack.totalCorrect} / {scorePack.totalQ}</div>
            <button onClick={() => window.location.reload()} className="w-full py-4 bg-indigo-600 rounded-2xl font-black">Try Again</button>
          </div>
        ) : (
          <div ref={questionAreaRef} className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl space-y-8 transition-all">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest">{q?.domain}</span>
              <h3 className="text-xl md:text-2xl font-bold leading-tight">{q?.prompt}</h3>
            </div>

            <div className="flex justify-center py-4">
               {q?.questionSvg ? (
                 <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-2xl"><SvgRenderer data={q.questionSvg} /></div>
               ) : q?.grid ? <CellGrid grid={q.grid} /> : null}
            </div>

            <div className={`grid gap-4 ${q?.questionSvg ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
              {q?.optionsText?.map((opt: string, i: number) => (
                <button key={i} onClick={() => selectAnswer(i)} className={`p-4 rounded-2xl border-2 text-left transition-all ${answers[q.id || idx]?.selected === i ? 'border-indigo-500 bg-indigo-500/20' : 'border-white/5 bg-white/5 hover:border-white/20'}`}>{opt}</button>
              ))}
              {q?.options?.map((opt: any, i: number) => (
                <button key={i} onClick={() => selectAnswer(i)} className={`p-2 rounded-2xl border-4 transition-all flex items-center justify-center bg-white ${answers[q.id || idx]?.selected === i ? 'border-indigo-500 scale-105 shadow-xl' : 'border-transparent'}`}>
                  {opt.svg ? <SvgRenderer data={opt.svg} /> : <CellGrid grid={opt} />}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-white/10">
              <button onClick={prev} disabled={idx === 0} className="px-8 py-3 rounded-xl bg-slate-800 font-bold disabled:opacity-20">Back</button>
              <button onClick={next} className="px-8 py-3 rounded-xl bg-indigo-600 font-black shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all">Next Question</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
