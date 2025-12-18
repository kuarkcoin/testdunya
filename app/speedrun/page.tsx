'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import { Trophy, Timer, Home, RotateCcw, Zap, Lock } from 'lucide-react';

// --- TYPES ---
type VocabItem = {
  word: string;
  meaning: string;
};

type GameState = 'loading' | 'idle' | 'playing' | 'finished' | 'error';

// --- HELPERS ---
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function isVocabArray(data: unknown): data is VocabItem[] {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof data[0]?.word === 'string' &&
    typeof data[0]?.meaning === 'string'
  );
}

export default function SpeedRunPage() {
  const { width, height } = useWindowSize();

  const [gameState, setGameState] = useState<GameState>('loading');
  const [dataset, setDataset] = useState<VocabItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<VocabItem | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [combo, setCombo] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Anti-double-end guard
  const endedRef = useRef(false);

  // --- AUDIO (safe) ---
  const playSound = useCallback((type: 'correct' | 'wrong' | 'finish') => {
    try {
      const audio = new Audio(`/sounds/${type}.mp3`);
      audio.volume = 0.3;
      void audio.play();
    } catch {
      // ignore
    }
  }, []);

  // --- LOAD HIGHSCORE ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('speedrun_highscore');
    if (saved) {
      const n = parseInt(saved, 10);
      if (!Number.isNaN(n)) setHighScore(n);
    }
  }, []);

  // --- INITIAL LOAD DATA ---
  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setGameState('loading');
        setErrorMsg('');

        const res = await fetch('/data/tests/IELTS_Vocabulary_Phrasal_1000_format.json', {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error(`Data fetch failed (${res.status})`);
        }

        const data: unknown = await res.json();

        if (!isVocabArray(data)) {
          throw new Error('Dataset format invalid. Expected [{ word, meaning }, ...]');
        }

        if (!cancelled) {
          setDataset(data);
          setGameState('idle');
        }
      } catch (err: any) {
        if (!cancelled) {
          setErrorMsg(err?.message || 'Unknown data load error');
          setGameState('error');
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  // Pre-calc for speed
  const datasetLen = useMemo(() => dataset.length, [dataset.length]);

  const generateQuestion = useCallback(() => {
    if (datasetLen === 0) return;

    const correctItem = dataset[Math.floor(Math.random() * datasetLen)];
    const distractors: string[] = [];

    // Try to get 3 unique distractors
    let safety = 0;
    while (distractors.length < 3 && safety < 200) {
      safety++;
      const randMeaning = dataset[Math.floor(Math.random() * datasetLen)].meaning;
      if (randMeaning !== correctItem.meaning && !distractors.includes(randMeaning)) {
        distractors.push(randMeaning);
      }
    }

    setCurrentQuestion(correctItem);
    setOptions(shuffleArray([correctItem.meaning, ...distractors]));
  }, [dataset, datasetLen]);

  const endGame = useCallback(() => {
    if (endedRef.current) return;
    endedRef.current = true;

    setGameState('finished');
    playSound('finish');

    setHighScore((prev) => {
      const nextHigh = score > prev ? score : prev;
      try {
        if (typeof window !== 'undefined' && score > prev) {
          window.localStorage.setItem('speedrun_highscore', String(score));
        }
      } catch {
        // ignore
      }

      if (score > prev) {
        setShowConfetti(true);
        window.setTimeout(() => setShowConfetti(false), 5000);
      }
      return nextHigh;
    });
  }, [playSound, score]);

  // --- TIMER ---
  useEffect(() => {
    if (gameState !== 'playing') return;

    endedRef.current = false; // ensure guard resets when game starts

    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, gameState, endGame]);

  const startGame = useCallback(() => {
    if (datasetLen === 0) return;

    endedRef.current = false;
    setScore(0);
    setTimeLeft(60);
    setCombo(0);
    setFeedback(null);
    setGameState('playing');

    // generate first question immediately
    generateQuestion();
  }, [generateQuestion, datasetLen]);

  const handleAnswer = useCallback(
    (selected: string) => {
      if (!currentQuestion) return;
      if (gameState !== 'playing') return;

      const isCorrect = selected === currentQuestion.meaning;

      if (isCorrect) {
        playSound('correct');
        setFeedback('correct');

        // Score depends on combo BEFORE increment
        setCombo((c) => {
          setScore((s) => s + 10 + c * 2);
          return c + 1;
        });
      } else {
        playSound('wrong');
        setFeedback('wrong');

        setScore((s) => Math.max(0, s - 5));
        setCombo(0);
      }

      // Next question
      window.setTimeout(() => {
        setFeedback(null);
        // If time finished while clicking, don't generate new
        setTimeLeft((t) => {
          if (t <= 0) return 0;
          generateQuestion();
          return t;
        });
      }, 140);
    },
    [currentQuestion, gameState, generateQuestion, playSound]
  );

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex flex-col font-sans overflow-hidden">
      {showConfetti && (
        <ReactConfetti width={width} height={height} recycle={false} numberOfPieces={800} />
      )}

      {/* NAVBAR */}
      <nav className="p-4 flex items-center justify-between border-b border-white/5 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all group">
          <div className="p-2 rounded-lg group-hover:bg-slate-800 transition-colors">
            <Home size={20} />
          </div>
        </Link>

        <div className="flex flex-col items-center">
          <h1 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            SPEEDRUN
          </h1>
          <span className="text-[10px] text-slate-400 font-bold tracking-[0.25em]">
            VOCAB RACE
          </span>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full flex items-center gap-2">
          <Trophy size={14} className="text-amber-500" />
          <span className="text-sm font-black text-amber-500">{highScore}</span>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
        <AnimatePresence mode="wait">
          {/* LOADING */}
          {gameState === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-cyan-400 font-bold animate-pulse">Syncing Dictionary...</p>
              <p className="text-xs text-slate-400">Loading dataset...</p>
            </motion.div>
          )}

          {/* ERROR */}
          {gameState === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-md w-full"
            >
              <div className="bg-slate-800 p-7 rounded-[2.25rem] border border-slate-700">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                  <Lock className="text-rose-400" />
                </div>
                <h2 className="text-2xl font-black mb-2">Dataset Load Failed</h2>
                <p className="text-slate-400 text-sm mb-5">{errorMsg || 'Could not load data.'}</p>

                <button
                  onClick={() => window.location.reload()}
                  className="w-full py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-400 transition-colors"
                >
                  RELOAD
                </button>

                <Link
                  href="/"
                  className="mt-3 block w-full py-4 bg-slate-900 text-slate-300 font-bold rounded-2xl hover:text-white transition-colors"
                >
                  GO HOME
                </Link>
              </div>
            </motion.div>
          )}

          {/* IDLE */}
          {gameState === 'idle' && (
            <motion.div
              key="idle"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="text-center max-w-sm"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl"
                  />
                  <div className="bg-slate-800 p-8 rounded-[2.5rem] border border-slate-700 relative">
                    <Timer size={64} className="text-cyan-400" />
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-black mb-4">Ready to Race?</h2>
              <p className="text-slate-400 mb-8">
                Match as many words as you can in <span className="text-white font-bold">60 seconds</span>.
                Combo gives bonus points.
              </p>

              <button
                onClick={startGame}
                className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xl font-black rounded-2xl shadow-xl shadow-cyan-500/20 transition-all active:scale-95"
              >
                START ENGINE
              </button>

              <p className="text-xs text-slate-500 mt-4">Dataset: {datasetLen} items</p>
            </motion.div>
          )}

          {/* PLAYING */}
          {gameState === 'playing' && currentQuestion && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex gap-4">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl min-w-[110px] text-center">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1 tracking-widest">
                      Points
                    </span>
                    <span className="text-3xl font-black text-white">{score}</span>
                  </div>

                  {combo > 1 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2 bg-amber-500 text-slate-950 px-4 rounded-2xl font-black italic"
                    >
                      <Zap size={16} /> {combo}X COMBO
                    </motion.div>
                  )}
                </div>

                <div
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    timeLeft <= 10
                      ? 'bg-rose-500/10 border-rose-500 animate-pulse'
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Timer size={24} className={timeLeft <= 10 ? 'text-rose-500' : 'text-cyan-400'} />
                    <span
                      className={`text-3xl font-mono font-black ${
                        timeLeft <= 10 ? 'text-rose-500' : 'text-white'
                      }`}
                    >
                      {timeLeft}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-10">
                <span className="text-cyan-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
                  Definition of:
                </span>
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter break-words">
                  {currentQuestion.word}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((opt, i) => (
                  <motion.button
                    key={`${opt}-${i}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(opt)}
                    className="p-6 rounded-2xl bg-slate-800 border-2 border-slate-700 hover:border-cyan-500 hover:bg-slate-700 text-left transition-all relative overflow-hidden group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-xs font-black text-slate-500 group-hover:text-cyan-500 border border-slate-700">
                        {i + 1}
                      </div>
                      <span className="text-lg font-bold text-slate-200 group-hover:text-white leading-tight">
                        {opt}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* FINISHED */}
          {gameState === 'finished' && (
            <motion.div
              key="finished"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center max-w-sm w-full"
            >
              <div className="bg-slate-800 p-8 rounded-[3rem] border border-slate-700 mb-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-500 p-3 rounded-2xl shadow-xl">
                  <Trophy size={32} className="text-slate-950" />
                </div>

                <h2 className="text-3xl font-black mt-4 mb-2">Race Finished!</h2>
                <p className="text-slate-400 mb-8 text-sm">Keep grinding — speed + accuracy wins.</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Score</span>
                    <span className="text-3xl font-black text-cyan-400">{score}</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Best</span>
                    <span className="text-3xl font-black text-amber-500">{highScore}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={startGame}
                  className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
                >
                  <RotateCcw size={20} /> TRY AGAIN
                </button>

                <Link
                  href="/"
                  className="w-full py-5 bg-slate-800 text-slate-400 font-bold rounded-2xl hover:text-white transition-colors"
                >
                  EXIT TO GARAGE
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FEEDBACK OVERLAY */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 pointer-events-none z-[100] border-[16px] ${
              feedback === 'correct' ? 'border-emerald-500/20' : 'border-rose-500/20'
            }`}
          />
        )}
      </AnimatePresence>
    </main>
  );
}