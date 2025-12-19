'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Timer,
  Trophy,
  ArrowLeft,
  RefreshCw,
  Star,
  AlertCircle,
  Pause,
  Play,
  Info,
  Flame,
  EyeOff,
  RotateCcw,
  Volume2,
  VolumeX,
  Accessibility,
} from 'lucide-react';
import Link from 'next/link';

// -------------------- CONFIG --------------------
const BASE_TIME = 30;
const LEVEL_UP_EVERY_SCORE = 50; // 5 corrects => 50 points
const POINTS_PER_CORRECT = 10;

const WRONG_PENALTY = 4;
const FAST_BONUS_TIME = 10;

const GHOST_SHOW_MS = 650; // visible duration before fading
const GHOST_FADE_MS = 450; // fade duration

const SHAKE_MS = 280;

type GameState = 'idle' | 'playing' | 'paused' | 'gameover';

type Mode = 'COLOR' | 'MEANING';

type ColorItem = { name: string; value: string };

const COLORS: ColorItem[] = [
  { name: 'RED', value: '#ef4444' },
  { name: 'BLUE', value: '#3b82f6' },
  { name: 'GREEN', value: '#22c55e' },
  { name: 'YELLOW', value: '#eab308' },
  { name: 'PURPLE', value: '#a855f7' },
  { name: 'WHITE', value: '#ffffff' },
];

const MODES: Mode[] = ['COLOR', 'MEANING'];

type Task = {
  id: string;
  text: string;
  textColor: string;
  mode: Mode;
  correctAnswer: string;
  isFlipped: boolean;
  isGhost: boolean;
  ghostHidden: boolean;
  isConflict: boolean;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function safeGetNumber(key: string, fallback: number) {
  try {
    const v = localStorage.getItem(key);
    if (!v) return fallback;
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  } catch {
    return fallback;
  }
}

function safeSetNumber(key: string, value: number) {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // ignore
  }
}

function vibrate(ms: number) {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (navigator as any).vibrate(ms);
    }
  } catch {
    // ignore
  }
}

// -------------------- PAGE --------------------
export default function ColorLogicPage() {
  // Core
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [level, setLevel] = useState(1);
  const [maxLevel, setMaxLevel] = useState(1);

  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const [timeLeft, setTimeLeft] = useState(BASE_TIME);
  const [gameState, setGameState] = useState<GameState>('idle');

  // UI helpers
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [shake, setShake] = useState(false);

  // Accessibility / options
  const [showLabels, setShowLabels] = useState(false); // colorblind mode
  const [soundOn, setSoundOn] = useState(true);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Task
  const [currentTask, setCurrentTask] = useState<Task>({
    id: uid(),
    text: '',
    textColor: '',
    mode: 'COLOR',
    correctAnswer: '',
    isFlipped: false,
    isGhost: false,
    ghostHidden: false,
    isConflict: false,
  });

  // Refs to avoid stale closures
  const levelRef = useRef(level);
  const scoreRef = useRef(score);
  const stateRef = useRef(gameState);

  useEffect(() => {
    levelRef.current = level;
  }, [level]);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    stateRef.current = gameState;
  }, [gameState]);

  // Load local stats
  useEffect(() => {
    const bs = safeGetNumber('colorlogic_bestScore', 0);
    const bl = safeGetNumber('colorlogic_maxLevel', 1);
    const bst = safeGetNumber('colorlogic_bestStreak', 0);
    setBestScore(bs);
    setMaxLevel(bl);
    setBestStreak(bst);
  }, []);

  // -------------------- SOUND --------------------
  const beep = useCallback(
    (type: 'correct' | 'wrong' | 'levelup' | 'tick') => {
      if (!soundOn) return;
      try {
        const AudioContextCtor =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextCtor) return;

        if (!audioCtxRef.current) audioCtxRef.current = new AudioContextCtor();
        const ctx = audioCtxRef.current;

        // iOS/Safari resume on gesture
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});

        const o = ctx.createOscillator();
        const g = ctx.createGain();

        const now = ctx.currentTime;

        let freq = 440;
        let dur = 0.08;

        if (type === 'correct') {
          freq = 740;
          dur = 0.08;
        } else if (type === 'wrong') {
          freq = 220;
          dur = 0.10;
        } else if (type === 'levelup') {
          freq = 880;
          dur = 0.12;
        } else if (type === 'tick') {
          freq = 520;
          dur = 0.03;
        }

        o.frequency.setValueAtTime(freq, now);
        o.type = 'sine';

        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

        o.connect(g);
        g.connect(ctx.destination);

        o.start(now);
        o.stop(now + dur + 0.02);
      } catch {
        // ignore
      }
    },
    [soundOn]
  );

  // -------------------- DIFFICULTY --------------------
  // Level rules:
  // L1-2: random, conflict optional
  // L3+: enforce conflict (text name != ink color name)
  // L4+: flip chance
  // L7+: ghost chance
  // L9+: "fast lane": time bonus smaller, wrong penalty bigger (handled in scoring)
  const computeChances = useCallback((lvl: number) => {
    const flipChance = lvl >= 4 ? clamp(0.35 + (lvl - 4) * 0.03, 0.35, 0.7) : 0;
    const ghostChance = lvl >= 7 ? clamp(0.25 + (lvl - 7) * 0.04, 0.25, 0.7) : 0;
    return { flipChance, ghostChance };
  }, []);

  const pickTask = useCallback(
    (lvl: number): Task => {
      const { flipChance, ghostChance } = computeChances(lvl);

      const mode: Mode = MODES[Math.floor(Math.random() * MODES.length)];

      // Choose text and ink color
      const textObj = COLORS[Math.floor(Math.random() * COLORS.length)];
      let colorObj = COLORS[Math.floor(Math.random() * COLORS.length)];

      // Level 3+: force conflict (stroop)
      let isConflict = false;
      if (lvl >= 3) {
        while (colorObj.name === textObj.name) {
          colorObj = COLORS[Math.floor(Math.random() * COLORS.length)];
        }
        isConflict = true;
      } else {
        isConflict = colorObj.name !== textObj.name;
      }

      const isFlipped = lvl >= 4 && Math.random() < flipChance;
      const isGhost = lvl >= 7 && Math.random() < ghostChance;

      // Correct answer is ALWAYS a color value from the palette
      const correctAnswer = mode === 'MEANING' ? textObj.value : colorObj.value;

      return {
        id: uid(),
        text: textObj.name,
        textColor: colorObj.value,
        mode,
        correctAnswer,
        isFlipped,
        isGhost,
        ghostHidden: false,
        isConflict,
      };
    },
    [computeChances]
  );

  const generateTask = useCallback(
    (lvl: number) => {
      const t = pickTask(lvl);
      setCurrentTask(t);
    },
    [pickTask]
  );

  // -------------------- GAME CONTROL --------------------
  const resetRun = useCallback(() => {
    setScore(0);
    setLevel(1);
    setStreak(0);
    setTimeLeft(BASE_TIME);
    setGameState('idle');
    setShowLevelUp(false);
    setWrongFlash(false);
    setShake(false);
    setCurrentTask((prev) => ({ ...prev, id: uid(), text: '', textColor: '', mode: 'COLOR', correctAnswer: '' }));
  }, []);

  const startGame = useCallback(() => {
    const startLevel = 1;
    setScore(0);
    setLevel(startLevel);
    setStreak(0);
    setTimeLeft(BASE_TIME);
    setGameState('playing');
    setWrongFlash(false);
    setShake(false);
    generateTask(startLevel);
  }, [generateTask]);

  const pauseGame = useCallback(() => {
    if (stateRef.current !== 'playing') return;
    setGameState('paused');
  }, []);

  const resumeGame = useCallback(() => {
    if (stateRef.current !== 'paused') return;
    setGameState('playing');
  }, []);

  const togglePause = useCallback(() => {
    setGameState((s) => (s === 'playing' ? 'paused' : s === 'paused' ? 'playing' : s));
  }, []);

  // Keyboard shortcuts (desktop)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (stateRef.current === 'playing' || stateRef.current === 'paused') togglePause();
      }
      if (e.key.toLowerCase() === 'i') setShowTutorial((v) => !v);
      if (e.key.toLowerCase() === 'l') setShowLabels((v) => !v);
      if (e.key.toLowerCase() === 'm') setSoundOn((v) => !v);
      if (e.key === 'Enter' && stateRef.current === 'idle') startGame();
      if (e.key === 'Enter' && stateRef.current === 'gameover') startGame();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [startGame, togglePause]);

  // -------------------- TIMER --------------------
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 0) return;

    const t = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 3 && next > 0) beep('tick');
        return next;
      });
    }, 1000);

    return () => clearInterval(t);
  }, [gameState, timeLeft, beep]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft <= 0) {
      setGameState('gameover');

      // persist highs
      setBestScore((prev) => {
        const next = Math.max(prev, scoreRef.current);
        safeSetNumber('colorlogic_bestScore', next);
        return next;
      });

      setMaxLevel((prev) => {
        const next = Math.max(prev, levelRef.current);
        safeSetNumber('colorlogic_maxLevel', next);
        return next;
      });

      setBestStreak((prev) => {
        const next = Math.max(prev, bestStreak);
        safeSetNumber('colorlogic_bestStreak', next);
        return next;
      });
    }
  }, [gameState, timeLeft, bestStreak]);

  // -------------------- GHOST EFFECT --------------------
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (!currentTask.isGhost) return;

    setCurrentTask((t) => ({ ...t, ghostHidden: false }));

    const hideTimer = setTimeout(() => {
      setCurrentTask((t) => {
        if (t.id !== currentTask.id) return t;
        return { ...t, ghostHidden: true };
      });
    }, GHOST_SHOW_MS);

    return () => clearTimeout(hideTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask.id, currentTask.isGhost, gameState]);

  // -------------------- ANSWER --------------------
  const applyWrongFeedback = useCallback(() => {
    vibrate(30);
    beep('wrong');
    setWrongFlash(true);
    setShake(true);
    setTimeout(() => setWrongFlash(false), 220);
    setTimeout(() => setShake(false), SHAKE_MS);
  }, [beep]);

  const applyCorrectFeedback = useCallback(() => {
    vibrate(15);
    beep('correct');
  }, [beep]);

  const handleAnswer = useCallback(
    (colorValue: string) => {
      if (gameState !== 'playing') return;

      const isCorrect = colorValue === currentTask.correctAnswer;

      if (isCorrect) {
        applyCorrectFeedback();

        const nextScore = scoreRef.current + POINTS_PER_CORRECT;
        setScore(nextScore);

        const nextStreak = streak + 1;
        setStreak(nextStreak);
        setBestStreak((prev) => {
          const nx = Math.max(prev, nextStreak);
          safeSetNumber('colorlogic_bestStreak', nx);
          return nx;
        });

        // Streak bonus: every 5 streak => +1s
        if (nextStreak > 0 && nextStreak % 5 === 0) {
          setTimeLeft((t) => t + 1);
        }

        // Level up logic
        if (nextScore > 0 && nextScore % LEVEL_UP_EVERY_SCORE === 0) {
          const nextLevel = levelRef.current + 1;
          setLevel(nextLevel);
          setShowLevelUp(true);

          beep('levelup');

          // Increase time on level-up (harder levels give less time after L9)
          const bonus = nextLevel >= 9 ? Math.max(4, FAST_BONUS_TIME - 4) : FAST_BONUS_TIME;
          setTimeLeft((t) => t + bonus);

          setTimeout(() => setShowLevelUp(false), 1400);

          setMaxLevel((prev) => {
            const nx = Math.max(prev, nextLevel);
            safeSetNumber('colorlogic_maxLevel', nx);
            return nx;
          });

          generateTask(nextLevel);
          return;
        }

        generateTask(levelRef.current);
      } else {
        applyWrongFeedback();

        setStreak(0);

        // Wrong penalty scales a bit after L9
        const penalty = levelRef.current >= 9 ? WRONG_PENALTY + 2 : WRONG_PENALTY;
        setTimeLeft((t) => Math.max(0, t - penalty));

        generateTask(levelRef.current);
      }
    },
    [applyCorrectFeedback, applyWrongFeedback, currentTask.correctAnswer, gameState, generateTask, streak, beep]
  );

  // -------------------- UI HELPERS --------------------
  const progressPct = useMemo(() => {
    return clamp(((score % LEVEL_UP_EVERY_SCORE) / LEVEL_UP_EVERY_SCORE) * 100, 0, 100);
  }, [score]);

  const modeLabel = useMemo(() => {
    return currentTask.mode === 'MEANING' ? 'Identify the Meaning' : 'Identify the Color';
  }, [currentTask.mode]);

  const modeHint = useMemo(() => {
    if (currentTask.mode === 'MEANING') return 'Tap the color that matches the WORD (not the ink).';
    return 'Tap the color that matches the INK (not the word).';
  }, [currentTask.mode]);

  const showDanger = timeLeft <= 6 && gameState === 'playing';

  // Slight outline for WHITE bubble
  const bubbleStyle = (value: string) =>
    value.toLowerCase() === '#ffffff'
      ? { backgroundColor: value, boxShadow: '0 0 0 2px rgba(255,255,255,0.22) inset, 0 12px 24px rgba(0,0,0,0.35)' }
      : { backgroundColor: value, boxShadow: '0 12px 24px rgba(0,0,0,0.35)' };

  // -------------------- RENDER --------------------
  return (
    <main className="min-h-screen bg-[#050505] text-white py-10 px-4 font-sans overflow-hidden">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <ArrowLeft size={20} /> Exit to Menu
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTutorial(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs font-black text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
            >
              <Info size={16} /> Rules
            </button>

            <button
              onClick={() => setShowLabels((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-black transition ${
                showLabels
                  ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200'
                  : 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-900'
              }`}
              title="Color labels (colorblind mode)"
            >
              <Accessibility size={16} /> Labels
            </button>

            <button
              onClick={() => setSoundOn((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-black transition ${
                soundOn
                  ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200'
                  : 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-900'
              }`}
              title="Sound on/off (M)"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />} Sound
            </button>
          </div>
        </div>

        <div
          className={[
            'bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-8 shadow-2xl relative',
            wrongFlash ? 'ring-2 ring-red-500/40' : '',
          ].join(' ')}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 rounded-t-[3rem] overflow-hidden">
            <motion.div className="h-full bg-cyan-500" initial={{ width: 0 }} animate={{ width: `${progressPct}%` }} />
          </div>

          {/* Level Pop-up */}
          <AnimatePresence>
            {showLevelUp && (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-cyan-500/10 backdrop-blur-md rounded-[3rem]"
              >
                <Star className="text-cyan-400 w-20 h-20 mb-4 fill-cyan-400" />
                <h2 className="text-4xl font-black text-cyan-400">LEVEL {level}</h2>
                <p className="text-white font-bold uppercase tracking-widest mt-2">Challenge Increased!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tutorial Modal */}
          <AnimatePresence>
            {showTutorial && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
                onClick={() => setShowTutorial(false)}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0, scale: 0.96 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 20, opacity: 0, scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-xl rounded-[2.5rem] border border-zinc-800 bg-zinc-950 p-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Info className="text-cyan-400" />
                      <h3 className="text-xl font-black">How to Play</h3>
                    </div>
                    <button
                      onClick={() => setShowTutorial(false)}
                      className="rounded-2xl border border-zinc-800 px-3 py-2 text-xs font-black text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
                    >
                      Close
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                    <p>
                      This is a Stroop-style cognitive drill. Each round shows a <span className="font-black text-white">WORD</span> painted in a
                      <span className="font-black text-white"> COLOR</span>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                        <p className="text-[11px] font-black tracking-[0.25em] uppercase text-zinc-400 mb-2">MODE: COLOR</p>
                        <p>
                          Tap the button that matches the <span className="font-black text-white">INK COLOR</span>.
                        </p>
                      </div>
                      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                        <p className="text-[11px] font-black tracking-[0.25em] uppercase text-zinc-400 mb-2">MODE: MEANING</p>
                        <p>
                          Tap the button that matches the <span className="font-black text-white">WORD MEANING</span> (ignore the ink).
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                      <p className="text-[11px] font-black tracking-[0.25em] uppercase text-zinc-400 mb-2">DIFFICULTY</p>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="inline-flex w-6 justify-center text-cyan-400 font-black">L3+</span>
                          Conflicts are enforced (word ≠ ink).
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="inline-flex w-6 justify-center text-cyan-400 font-black">L4+</span>
                          Some prompts flip <RotateCcw className="inline w-4 h-4 text-cyan-300" />.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="inline-flex w-6 justify-center text-cyan-400 font-black">L7+</span>
                          Ghost prompts vanish <EyeOff className="inline w-4 h-4 text-purple-300" />.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="inline-flex w-6 justify-center text-cyan-400 font-black">L9+</span>
                          Faster lane: less bonus time and harsher wrong penalty.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                      <p className="text-[11px] font-black tracking-[0.25em] uppercase text-zinc-400 mb-2">SHORTCUTS</p>
                      <p className="text-zinc-400">
                        <span className="text-white font-black">Esc</span> Pause · <span className="text-white font-black">I</span> Rules ·{' '}
                        <span className="text-white font-black">L</span> Labels · <span className="text-white font-black">M</span> Sound ·{' '}
                        <span className="text-white font-black">Enter</span> Start/Restart
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HUD */}
          <div className="flex justify-between items-center mb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Current Level</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xl font-black">Lvl {level}</span>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 py-2">
                  <Flame className="text-orange-400" size={16} />
                  <span className="text-xs font-black">
                    {streak} <span className="text-zinc-500 font-black">streak</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 py-2">
                  <Trophy className="text-amber-400" size={16} />
                  <span className="text-xs font-black">
                    {bestScore} <span className="text-zinc-500 font-black">best</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <button
                onClick={togglePause}
                disabled={gameState === 'idle' || gameState === 'gameover'}
                className={`bg-zinc-800 px-4 py-2 rounded-2xl border border-zinc-700 text-center min-w-[92px] transition ${
                  gameState === 'idle' || gameState === 'gameover'
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-zinc-700/70'
                }`}
                title="Pause/Resume (Esc)"
              >
                <div className="flex items-center justify-center gap-2">
                  {gameState === 'paused' ? <Play size={14} className="text-cyan-300" /> : <Pause size={14} className="text-cyan-300" />}
                  <span className="text-[11px] font-black tracking-wider">{gameState === 'paused' ? 'RESUME' : 'PAUSE'}</span>
                </div>
              </button>

              <div
                className={[
                  'bg-zinc-800 px-4 py-2 rounded-2xl border text-center min-w-[88px]',
                  showDanger ? 'border-red-500/50' : 'border-zinc-700',
                ].join(' ')}
              >
                <Timer size={14} className={['mx-auto mb-1', showDanger ? 'text-red-300' : 'text-red-400'].join(' ')} />
                <span className="font-black">{timeLeft}s</span>
              </div>

              <div className="bg-zinc-800 px-4 py-2 rounded-2xl border border-zinc-700 text-center min-w-[88px]">
                <Trophy size={14} className="mx-auto mb-1 text-amber-400" />
                <span className="font-black">{score}</span>
              </div>
            </div>
          </div>

          {/* PLAYING */}
          {gameState === 'playing' && (
            <motion.div
              className="space-y-10 min-h-[420px] flex flex-col justify-center"
              animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
              transition={{ duration: SHAKE_MS / 1000 }}
            >
              <div className="text-center space-y-6">
                <motion.div
                  key={`${currentTask.mode}-${currentTask.id}`}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] text-zinc-300 uppercase"
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {currentTask.isGhost && <AlertCircle size={12} className="text-purple-400" />}
                  {currentTask.isFlipped && <RotateCcw size={12} className="text-cyan-300" />}
                  {modeLabel}
                  {currentTask.isConflict && <span className="text-zinc-500">•</span>}
                  {currentTask.isConflict && <span className="text-zinc-500">CONFLICT</span>}
                </motion.div>

                <p className="text-xs text-zinc-500">{modeHint}</p>

                <div className="relative h-32 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={currentTask.id}
                      initial={{ y: 20, opacity: 0, scale: 0.85 }}
                      animate={{
                        y: 0,
                        opacity: currentTask.isGhost && currentTask.ghostHidden ? 0 : 1,
                        scale: 1,
                        rotate: currentTask.isFlipped ? 180 : 0,
                      }}
                      exit={{ y: -20, opacity: 0, scale: 1.15 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        opacity: { duration: currentTask.isGhost ? GHOST_FADE_MS / 1000 : 0.15 },
                      }}
                      className="text-7xl font-black tracking-tighter select-none"
                      style={{
                        color: currentTask.textColor,
                        textShadow: '0 12px 40px rgba(0,0,0,0.55)',
                        transformOrigin: 'center',
                      }}
                    >
                      {currentTask.text}
                    </motion.h2>
                  </AnimatePresence>

                  {currentTask.isGhost && currentTask.ghostHidden && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-purple-300/70">
                        <EyeOff size={14} /> GHOST
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 relative z-10">
                {COLORS.map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(color.value)}
                    className="h-20 rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors flex flex-col items-center justify-center group"
                    aria-label={`Answer ${color.name}`}
                  >
                    <div
                      className="w-9 h-9 rounded-full transition-transform group-hover:scale-110"
                      style={bubbleStyle(color.value)}
                    />
                    {showLabels && <div className="mt-2 text-[10px] font-black tracking-widest text-zinc-400">{color.name}</div>}
                  </motion.button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 mb-2">Session</p>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-xs">Best Streak</span>
                    <span className="font-black text-white">{bestStreak}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-zinc-400 text-xs">Max Level</span>
                    <span className="font-black text-white">{maxLevel}</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 mb-2">Controls</p>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-xs">Esc</span>
                    <span className="font-black text-white">Pause</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-zinc-400 text-xs">I</span>
                    <span className="font-black text-white">Rules</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PAUSED */}
          {gameState === 'paused' && (
            <div className="text-center py-16 min-h-[420px] flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] text-zinc-300 uppercase mb-5">
                <Pause size={14} className="text-cyan-300" /> Paused
              </div>
              <h2 className="text-5xl font-black mb-3">SYSTEM HOLD</h2>
              <p className="text-zinc-500 mb-10 max-w-sm text-sm">
                Take a breath. Press <span className="text-white font-black">Esc</span> or tap{' '}
                <span className="text-white font-black">Resume</span>.
              </p>
              <button
                onClick={resumeGame}
                className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-2 hover:brightness-110 transition"
              >
                <Play size={20} /> RESUME DRILL
              </button>
              <button
                onClick={() => {
                  setGameState('idle');
                }}
                className="w-full mt-3 bg-zinc-900 text-white font-black py-4 rounded-2xl text-sm border border-zinc-800 hover:bg-zinc-800/60 transition"
              >
                EXIT TO START
              </button>
            </div>
          )}

          {/* IDLE */}
          {gameState === 'idle' && (
            <div className="text-center py-16">
              <h1 className="text-6xl font-black mb-4 leading-[0.9]">
                COLOR
                <br />
                <span className="text-cyan-500">LOGIC</span>
              </h1>
              <p className="text-zinc-500 mb-8 max-w-xs mx-auto text-sm">
                A multi-layered cognitive challenge. Rules shift as you level up. Built for speed, focus, and chaos.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 mb-2">Best</p>
                  <p className="text-2xl font-black text-cyan-400">{bestScore}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 mb-2">Max Lvl</p>
                  <p className="text-2xl font-black">{maxLevel}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 mb-2">Streak</p>
                  <p className="text-2xl font-black">{bestStreak}</p>
                </div>
              </div>

              <button
                onClick={startGame}
                className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-cyan-400 transition-all shadow-xl shadow-white/5"
              >
                START DRILL
              </button>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <button
                  onClick={() => setShowTutorial(true)}
                  className="bg-zinc-900 text-white font-black py-4 rounded-2xl text-sm border border-zinc-800 hover:bg-zinc-800/60 transition flex items-center justify-center gap-2"
                >
                  <Info size={18} /> RULES
                </button>
                <button
                  onClick={() => {
                    safeSetNumber('colorlogic_bestScore', 0);
                    safeSetNumber('colorlogic_maxLevel', 1);
                    safeSetNumber('colorlogic_bestStreak', 0);
                    setBestScore(0);
                    setMaxLevel(1);
                    setBestStreak(0);
                    resetRun();
                  }}
                  className="bg-zinc-900 text-white font-black py-4 rounded-2xl text-sm border border-zinc-800 hover:bg-zinc-800/60 transition flex items-center justify-center gap-2"
                  title="Reset local highs"
                >
                  <RefreshCw size={18} /> RESET HIGHS
                </button>
              </div>

              <p className="text-[11px] text-zinc-600 mt-6">
                Shortcuts: <span className="text-zinc-300 font-black">Enter</span> start ·{' '}
                <span className="text-zinc-300 font-black">I</span> rules · <span className="text-zinc-300 font-black">L</span> labels ·{' '}
                <span className="text-zinc-300 font-black">M</span> sound
              </p>
            </div>
          )}

          {/* GAME OVER */}
          {gameState === 'gameover' && (
            <div className="text-center py-10">
              <h2 className="text-5xl font-black mb-3">TERMINATED</h2>
              <p className="text-zinc-500 mb-8 text-sm">Time expired. Want another run?</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Score</p>
                  <p className="text-4xl font-black text-cyan-500">{score}</p>
                  <p className="text-[11px] text-zinc-500 mt-2">
                    Best: <span className="text-white font-black">{bestScore}</span>
                  </p>
                </div>

                <div className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Max Level</p>
                  <p className="text-4xl font-black">{level}</p>
                  <p className="text-[11px] text-zinc-500 mt-2">
                    Best: <span className="text-white font-black">{maxLevel}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Streak</p>
                  <p className="text-3xl font-black text-orange-300">{streak}</p>
                  <p className="text-[11px] text-zinc-500 mt-2">
                    Best: <span className="text-white font-black">{bestStreak}</span>
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Difficulty</p>
                  <p className="text-3xl font-black">{level >= 9 ? 'FAST' : level >= 7 ? 'GHOST' : level >= 4 ? 'FLIP' : 'BASE'}</p>
                  <p className="text-[11px] text-zinc-500 mt-2">Based on your max level.</p>
                </div>
              </div>

              <button
                onClick={startGame}
                className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-2 hover:brightness-110 transition"
              >
                <RefreshCw size={20} /> REBOOT DRILL
              </button>

              <button
                onClick={() => setGameState('idle')}
                className="w-full mt-3 bg-zinc-900 text-white font-black py-4 rounded-2xl text-sm border border-zinc-800 hover:bg-zinc-800/60 transition"
              >
                BACK TO START
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-[11px] text-zinc-600">
          Built for TestDünya. <span className="text-zinc-400 font-black">Tip:</span> Turn on <span className="text-zinc-300 font-black">Labels</span>{' '}
          for colorblind-friendly play.
        </div>
      </div>
    </main>
  );
}