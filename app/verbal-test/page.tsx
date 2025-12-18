'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { verbalQuestions } from '../data/verbalQuestions';
import {
  Trophy,
  Timer,
  ArrowLeft,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';

// -------------------- GLOBAL TYPES --------------------
type AnswerState = { selected: number | null; correct: boolean | null };

const TOTAL_TIME = 20 * 60;

export default function VerbalTestPage() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  // Confetti size (SSR-safe)
  const [win, setWin] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setWin({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = verbalQuestions.length;

  // ✅ Guard: empty question bank
  if (total === 0) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-slate-100 px-4 py-12 font-sans">
        <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900/50 border border-white/10 p-10 text-center">
          <h1 className="text-2xl font-black mb-2">No questions found</h1>
          <p className="text-slate-400 mb-6">
            verbalQuestions array is empty. Add questions to <span className="font-mono">/data/verbalQuestions</span>.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white text-slate-950 font-black hover:bg-slate-200 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  const safeIdx = Math.min(Math.max(idx, 0), total - 1);
  const q = verbalQuestions[safeIdx];

  // ✅ Soru değiştiğinde yukarı kaydır
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [safeIdx]);

  // Timer Logic
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(t);
  }, [started, finished, timeLeft]);

  const selectAnswer = (choiceIndex: number) => {
    if (finished) return;
    setStarted(true);
    const isCorrect = choiceIndex === q.correct;
    setAnswers((prev) => ({
      ...prev,
      [safeIdx]: { selected: choiceIndex, correct: isCorrect },
    }));
  };

  const score = useMemo(() => {
    const correctCount = Object.values(answers).filter((a) => a.correct).length;
    const percentage =
      total > 0 ? Math.round((correctCount / total) * 100) : 0;
    return { correctCount, percentage };
  }, [answers, total]);

  const mmss = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 px-4 py-12 font-sans selection:bg-indigo-500/30">
      {finished && score.percentage >= 80 && (
        <ReactConfetti
          width={win.w}
          height={win.h}
          numberOfPieces={300}
          recycle={false}
        />
      )}

      <div className="max-w-3xl mx-auto space-y-8">
        {/* GLOBAL HEADER */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center bg-slate-900/40 border border-white/5 p-5 rounded-3xl backdrop-blur-md sticky top-4 z-50"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> EXIT
          </Link>

          <div className="flex gap-6 items-center">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                Time Remaining
              </p>
              <div className="flex items-center gap-2">
                <Timer
                  size={14}
                  className={timeLeft < 60 ? 'text-red-500' : 'text-emerald-400'}
                />
                <p
                  className={`font-mono font-bold ${
                    timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-emerald-400'
                  }`}
                >
                  {mmss(timeLeft)}
                </p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                Question
              </p>
              <p className="text-indigo-400 font-bold">
                {safeIdx + 1} / {total}
              </p>
            </div>
          </div>
        </motion.div>

        {!finished ? (
          <div className="space-y-8">
            {/* PROGRESS BAR */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                initial={{ width: 0 }}
                animate={{ width: `${((safeIdx + 1) / total) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* QUESTION AREA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={safeIdx}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/50 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-8 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <span className="px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20">
                    Verbal Reasoning
                  </span>

                  <div className="text-2xl md:text-3xl font-medium leading-relaxed text-white italic">
                    {String(q.prompt || '')
                      .split('\n')
                      .filter(Boolean)
                      .map((line, i) => (
                        <p key={i} className="mb-4">
                          {line}
                        </p>
                      ))}
                  </div>
                </div>

                {/* OPTIONS */}
                <div className="grid gap-4 pt-4">
                  {q.optionsText.map((opt, i) => {
                    const isSelected = answers[safeIdx]?.selected === i;
                    return (
                      <motion.button
                        key={i}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectAnswer(i)}
                        className={`group p-6 rounded-2xl text-left border-2 transition-all duration-300 flex items-center gap-4 ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-[0_0_20px_rgba(99,102,241,0.1)]'
                            : 'border-white/5 bg-slate-950/40 hover:border-white/20 text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-black transition-colors ${
                            isSelected
                              ? 'bg-indigo-500 border-indigo-400 text-white'
                              : 'border-white/10 bg-white/5 text-slate-500 group-hover:border-white/30'
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className="text-lg font-medium">{opt}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION */}
            <div className="flex justify-between items-center px-2">
              <button
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                className="flex items-center gap-2 text-slate-500 font-bold hover:text-white disabled:opacity-0 transition-colors"
                disabled={safeIdx === 0}
              >
                <ChevronLeft size={20} /> PREVIOUS
              </button>

              {safeIdx === total - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFinished(true)}
                  className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl shadow-emerald-900/20 flex items-center gap-2"
                >
                  FINISH ASSESSMENT <CheckCircle2 size={20} />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
                  className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl shadow-indigo-900/20 flex items-center gap-2"
                >
                  NEXT QUESTION <ChevronRight size={20} />
                </motion.button>
              )}
            </div>
          </div>
        ) : (
          /* RESULT SCREEN */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-10 bg-slate-900/50 p-12 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-md"
          >
            <div className="space-y-2">
              <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                <Trophy className="text-indigo-400" size={40} />
              </div>
              <h2 className="text-sm font-black text-indigo-500 uppercase tracking-[0.4em]">
                Test Completed
              </h2>
              <h3 className="text-5xl font-black text-white">Assessment Report</h3>
            </div>

            <div className="relative inline-flex items-center justify-center p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full">
              <div className="bg-[#0f172a] rounded-full px-16 py-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300"
                >
                  {score.percentage}%
                </motion.span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">
                  Correct
                </p>
                <p className="text-3xl font-black text-emerald-400">
                  {score.correctCount} / {total}
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">
                  Time Spent
                </p>
                <p className="text-3xl font-black text-indigo-400">
                  {mmss(Math.max(0, TOTAL_TIME - timeLeft))}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 max-w-sm mx-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.reload()}
                className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} /> RETAKE TEST
              </motion.button>

              <Link
                href="/"
                className="block w-full py-5 bg-slate-800 text-white rounded-2xl font-black hover:bg-slate-700 transition-colors"
              >
                BACK TO DASHBOARD
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
