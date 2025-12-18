'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Trophy, Timer, ArrowLeft, Globe, Medal, Undo2, RotateCcw, Heart, Lightbulb, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES & CONSTANTS ---
type GameStatus = 'playing' | 'won' | 'lost';
type HintKey = 'firstLetter' | 'wordLength' | 'synonym' | 'example';

type WordPayload = {
  word: string;
  definition: string;
  turkish_meaning?: string;
  synonym?: string;
  example_sentence?: string;
};

const ROUND_SECONDS = 60;
const MAX_ATTEMPTS = 5;
const MAX_LIVES = 3;
const HINT_PENALTY = 15;
const BASE_WIN_POINTS = 100;

// --- MAIN COMPONENT ---
export default function WordHunterGame() {
  const [data, setData] = useState<WordPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<GameStatus>('playing');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [secondsLeft, setSecondsLeft] = useState(ROUND_SECONDS);
  const [toast, setToast] = useState<string>('');
  const [hintsUsed, setHintsUsed] = useState<Record<HintKey, boolean>>({
    firstLetter: false, synonym: false, wordLength: false, example: false
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- UI HELPERS ---
  const pushToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  const maskWord = (text: string, word: string) => {
    if (!text || !word) return text;
    const re = new RegExp(`\\b${word}\\b`, 'gi');
    return text.replace(re, '____');
  };

  // --- GAME LOGIC ---
  const fetchWord = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/game/word', { method: 'POST' });
      const json = await res.json();
      if (json.word) {
        setData(json);
        setSecondsLeft(ROUND_SECONDS);
        setAttemptsLeft(MAX_ATTEMPTS);
        setHintsUsed({ firstLetter: false, synonym: false, wordLength: false, example: false });
        setGuess('');
        setStatus('playing');
      }
    } catch (e) {
      pushToast("Connection Error!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWord();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [fetchWord]);

  useEffect(() => {
    if (status === 'playing' && secondsLeft > 0) {
      timerRef.current = setInterval(() => setSecondsLeft(s => s - 1), 1000);
      return () => clearInterval(timerRef.current!);
    } else if (secondsLeft === 0 && status === 'playing') {
      handleLoss();
    }
  }, [status, secondsLeft]);

  const handleLoss = () => {
    setLives(l => l - 1);
    setStreak(0);
    if (lives <= 1) setStatus('lost');
    else fetchWord();
  };

  const checkGuess = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!data || status !== 'playing') return;

    if (guess.trim().toLowerCase() === data.word.toLowerCase()) {
      const bonus = secondsLeft * 2;
      const penalty = Object.values(hintsUsed).filter(Boolean).length * HINT_PENALTY;
      setScore(s => s + Math.max(10, BASE_WIN_POINTS + bonus - penalty));
      setStreak(s => s + 1);
      setStatus('won');
      pushToast("🎯 EXCELLENT!");
    } else {
      setAttemptsLeft(a => a - 1);
      if (attemptsLeft <= 1) handleLoss();
      else pushToast("❌ WRONG GUESS!");
    }
  };

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-4 font-sans">
      
      {/* HEADER HUD */}
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all">
          <ArrowLeft size={20} /> <span className="hidden sm:inline">Dashboard</span>
        </Link>
        
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
            <Heart size={18} className="text-rose-500" fill="currentColor" />
            <span className="font-black text-xl">{lives}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
            <Trophy size={18} className="text-amber-400" />
            <span className="font-black text-xl">{score}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 20, opacity: 1 }} exit={{ y: -100, opacity: 0 }}
            className="fixed top-16 z-[60] bg-cyan-500 text-slate-900 px-8 py-3 rounded-2xl font-black shadow-2xl shadow-cyan-500/20">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-2xl w-full mt-12 space-y-6">
        
        {/* GAME CARD */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl backdrop-blur-sm">
          
          {/* PROGRESS TIMER */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
            <motion.div 
              className={`h-full ${secondsLeft < 15 ? 'bg-rose-500' : 'bg-cyan-500'}`}
              initial={{ width: "100%" }}
              animate={{ width: `${(secondsLeft / ROUND_SECONDS) * 100}%` }}
            />
          </div>

          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-4">
              <RotateCcw className="animate-spin text-cyan-500" size={48} />
              <p className="font-bold text-slate-400">Loading AI Mystery...</p>
            </div>
          ) : status === 'won' ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-10 space-y-6">
              <div className="bg-emerald-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto border border-emerald-500/50">
                <CheckCircle2 size={48} className="text-emerald-500" />
              </div>
              <h2 className="text-5xl font-black text-white">{data?.word.toUpperCase()}</h2>
              <p className="text-emerald-400 font-bold">{data?.turkish_meaning || 'Correct answer!'}</p>
              <button onClick={fetchWord} className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-5 rounded-2xl text-xl transition-all shadow-xl shadow-emerald-500/20">
                NEXT WORD
              </button>
            </motion.div>
          ) : status === 'lost' ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-10 space-y-6">
              <div className="bg-rose-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto border border-rose-500/50">
                <AlertCircle size={48} className="text-rose-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-400">The word was:</h2>
              <h2 className="text-5xl font-black text-white">{data?.word.toUpperCase()}</h2>
              <button onClick={() => { setScore(0); setLives(MAX_LIVES); fetchWord(); }} 
                className="w-full bg-rose-500 hover:bg-rose-400 text-white font-black py-5 rounded-2xl text-xl transition-all shadow-xl">
                RESTART GAME
              </button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 tracking-widest uppercase">
                  <Sparkles size={14} /> AI Definition
                </div>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-slate-200">
                  "{data?.definition}"
                </p>
              </div>

             {/* HINTS GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  {[
    {
      key: 'firstLetter' as HintKey,
      placeholder: 'First Letter',
      label: data?.word ? `Starts with: ${data.word[0].toUpperCase()}` : '',
      available: !!data?.word,
      icon: <Globe size={16} />,
    },
    {
      key: 'wordLength' as HintKey,
      placeholder: 'Word Length',
      label: data?.word ? `Length: ${data.word.length} letters` : '',
      available: !!data?.word,
      icon: <Timer size={16} />,
    },
    {
      key: 'synonym' as HintKey,
      placeholder: 'Show Synonym',
      label: data?.synonym ? `Synonym: ${data.synonym}` : '',
      available: !!data?.synonym,
      icon: <Lightbulb size={16} />,
    },
    {
      key: 'example' as HintKey,
      placeholder: 'Show Example',
      label:
        data?.example_sentence && data?.word
          ? `Example: ${maskWord(data.example_sentence, data.word)}`
          : '',
      available: !!data?.example_sentence,
      icon: <RotateCcw size={16} />,
    },
  ].map((hint) => {
    const used = hintsUsed[hint.key];
    const disabled = used || !hint.available;

    return (
      <button
        key={hint.key}
        disabled={disabled}
        onClick={() => {
          if (disabled) return;
          setHintsUsed((prev) => ({ ...prev, [hint.key]: true }));
          setScore((s) => Math.max(0, s - 5));
        }}
        className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-sm font-bold ${
          used
            ? 'bg-slate-800 border-slate-700 text-slate-300'
            : 'bg-slate-900 border-slate-800 text-cyan-500 hover:border-cyan-500/50'
        }`}
      >
        {hint.icon} {used ? hint.label : hint.placeholder}
      </button>
    );
  })}
</div>


              {/* INPUT AREA */}
              <form onSubmit={checkGuess} className="relative group">
                <input
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Type your guess..."
                  className="w-full bg-slate-950 border-2 border-slate-800 p-6 rounded-[1.5rem] text-center text-3xl font-black text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-700"
                  autoFocus
                />
                <button type="submit" className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-5 rounded-2xl text-xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
                  GUESS NOW
                </button>
              </form>

              <div className="flex justify-between text-xs font-bold text-slate-500 tracking-tighter uppercase">
                <span>Attempts: {attemptsLeft}/{MAX_ATTEMPTS}</span>
                <span>🔥 Streak: {streak}</span>
                <span>Time: {secondsLeft}s</span>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER INFO */}
        <p className="text-center text-slate-600 text-xs font-medium">
          Correct Answer: +100pts • Time Bonus: +2x Seconds • Hint Penalty: -15pts
        </p>
      </main>
    </div>
  );
}
