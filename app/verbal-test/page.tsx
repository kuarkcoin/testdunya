'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { verbalQuestions } from '../data/verbalQuestions';

// -------------------- GLOBAL TİPLER --------------------
type AnswerState = { selected: number | null; correct: boolean | null };

export default function VerbalTestPage() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 15 Minutes
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = verbalQuestions.length;
  const q = verbalQuestions[idx];

  // ✅ SCROLL FIX: Soru değiştiğinde yumuşak bir şekilde soruya odaklanır
  useEffect(() => {
    if (scrollRef.current) {
      const timer = setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [idx]);

  // Timer Logic
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) { setFinished(true); return; }
    const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(t);
  }, [started, finished, timeLeft]);

  const selectAnswer = (choiceIndex: number) => {
    if (finished) return;
    setStarted(true);
    const isCorrect = choiceIndex === q.correct;
    setAnswers(prev => ({ ...prev, [idx]: { selected: choiceIndex, correct: isCorrect } }));
  };

  const score = useMemo(() => {
    const correctCount = Object.values(answers).filter(a => a.correct).length;
    const percentage = Math.round((correctCount / total) * 100);
    return { correctCount, percentage };
  }, [answers, total]);

  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12 font-sans">
      {finished && score.percentage >= 80 && <ReactConfetti numberOfPieces={300} recycle={false} />}
      
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* GLOBAL HEADER */}
        <div className="flex justify-between items-center bg-slate-900/40 border border-white/5 p-5 rounded-3xl backdrop-blur-sm">
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">← EXIT</Link>
          <div className="flex gap-6 items-center">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">Time Left</p>
              <p className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`}>{mmss(timeLeft)}</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">Progress</p>
              <p className="text-indigo-400 font-bold">{idx + 1}/{total}</p>
            </div>
          </div>
        </div>

        {!finished ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* PROGRESS BAR */}
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 transition-all duration-500 ease-out" 
                style={{ width: `${((idx + 1) / total) * 100}%` }} 
              />
            </div>

            {/* QUESTION AREA */}
            <div ref={scrollRef} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Verbal Logic</span>
                <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-white font-serif italic">
                  {q.prompt.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
                </h2>
              </div>

              {/* OPTIONS */}
              <div className="grid gap-3 pt-4">
                {q.optionsText.map((opt, i) => {
                  const isSelected = answers[idx]?.selected === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectAnswer(i)}
                      className={`group p-6 rounded-2xl text-left border-2 transition-all duration-300 flex items-center gap-4 ${
                        isSelected 
                        ? "border-indigo-500 bg-indigo-500/10 text-white" 
                        : "border-white/5 bg-slate-900/50 hover:border-white/20 text-slate-300"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-black transition-colors ${isSelected ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-white/10 bg-white/5 text-slate-500 group-hover:border-white/30'}`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="text-lg">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex justify-between items-center px-2">
              <button 
                onClick={() => setIdx(i => Math.max(0, i - 1))}
                className="text-slate-500 font-bold hover:text-white disabled:opacity-0 transition-colors"
                disabled={idx === 0}
              >PREVIOUS</button>
              
              {idx === total - 1 ? (
                <button 
                  onClick={() => setFinished(true)}
                  className="px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black tracking-widest transition-all hover:scale-105 shadow-xl shadow-emerald-900/20"
                >FINISH ASSESSMENT</button>
              ) : (
                <button 
                  onClick={() => setIdx(i => i + 1)}
                  className="px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black tracking-widest transition-all hover:scale-105 shadow-xl shadow-indigo-900/20"
                >NEXT QUESTION</button>
              )}
            </div>
          </div>
        ) : (
          /* RESULT SCREEN */
          <div className="text-center space-y-8 bg-white/5 p-12 rounded-[3rem] border border-white/10 animate-in zoom-in-95 duration-500">
            <div className="space-y-2">
              <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em]">Assessment Report</h2>
              <h3 className="text-5xl font-black text-white">Global Verbal Logic</h3>
            </div>
            
            <div className="relative inline-flex items-center justify-center p-1 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-[0_0_50px_rgba(99,102,241,0.3)]">
              <div className="bg-slate-950 rounded-full px-12 py-10">
                <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300">
                  {score.percentage}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Correct</p>
                <p className="text-2xl font-black">{score.correctCount} / {total}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Time Spent</p>
                <p className="text-2xl font-black">{mmss(20 * 60 - timeLeft)}</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <button 
                onClick={() => window.location.reload()}
                className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black hover:bg-slate-200 transition-colors"
              >RETAKE TEST</button>
              <Link 
                href="/"
                className="block w-full py-5 bg-slate-800 text-white rounded-2xl font-black hover:bg-slate-700 transition-colors"
              >BACK TO DASHBOARD</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
