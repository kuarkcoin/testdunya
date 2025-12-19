'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Heart,
  Trophy,
  Lock,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Timer,
  Crown,
  Shield,
  Sparkles,
  Settings2,
  User
} from 'lucide-react';

type GameStatus = 'playing' | 'won' | 'lost';
type Mode = 'classic' | 'daily';

const ROUND_SECONDS = 60;
const MAX_ATTEMPTS = 6;
const MAX_LIVES = 3;

const BASE_WIN_POINTS = 120;
const TIME_BONUS_MULT = 2;
const ATTEMPT_BONUS = 15;

// Badge/Rank thresholds (round points)
const RANKS = [
  { name: 'Bronze', min: 0 },
  { name: 'Silver', min: 220 },
  { name: 'Gold', min: 320 },
  { name: 'Platinum', min: 420 },
] as const;

type GuessRow = {
  guess: string;
  correctPlace: number;
  correctDigit: number;
};

type BoardEntry = {
  name: string;
  points: number;
  streak: number;
  perfect: boolean;
  ts: number;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

// --- Seeded PRNG (Mulberry32) ---
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStringToSeed(str: string) {
  // simple deterministic hash
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function todayKey() {
  // local date (TR) — ISO-ish
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getRank(points: number) {
  let r = RANKS[0].name;
  for (const rr of RANKS) if (points >= rr.min) r = rr.name;
  return r;
}

// --- code generation ---
function generateCode(len: number, allowRepeats: boolean, seedStr?: string): string {
  const rand = seedStr ? mulberry32(hashStringToSeed(seedStr)) : Math.random;

  if (allowRepeats) {
    let out = '';
    for (let i = 0; i < len; i++) out += Math.floor(rand() * 10).toString();
    return out;
  }

  const digits: number[] = [];
  while (digits.length < len) {
    const d = Math.floor(rand() * 10);
    if (!digits.includes(d)) digits.push(d);
  }
  return digits.join('');
}

// Mastermind feedback (supports repeats)
function scoreGuess(secret: string, guess: string) {
  let correctPlace = 0;
  const s = secret.split('');
  const g = guess.split('');

  const sLeft: string[] = [];
  const gLeft: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (g[i] === s[i]) correctPlace++;
    else {
      sLeft.push(s[i]);
      gLeft.push(g[i]);
    }
  }

  // correct digit wrong place (counting)
  const sCount = new Map<string, number>();
  for (const ch of sLeft) sCount.set(ch, (sCount.get(ch) || 0) + 1);

  let correctDigit = 0;
  for (const ch of gLeft) {
    const c = sCount.get(ch) || 0;
    if (c > 0) {
      correctDigit++;
      sCount.set(ch, c - 1);
    }
  }

  return { correctPlace, correctDigit };
}

// --- localStorage helpers ---
function lsGet<T>(key: string, fallback: T): T {
  try {
    if (typeof window === 'undefined') return fallback;
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function lsSet<T>(key: string, value: T) {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export default function LogicLockUltra() {
  // settings
  const [mode, setMode] = useState<Mode>('daily'); // daily by default is addictive 😄
  const [digitsLen, setDigitsLen] = useState<3 | 4>(3);
  const [allowRepeats, setAllowRepeats] = useState(false);

  // profile
  const [playerName, setPlayerName] = useState('Murat'); // istersen boş bırak
  const [nameOpen, setNameOpen] = useState(false);

  // game state
  const [status, setStatus] = useState<GameStatus>('playing');
  const [secret, setSecret] = useState('');
  const [guess, setGuess] = useState('');
  const [rows, setRows] = useState<GuessRow[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [lives, setLives] = useState(MAX_LIVES);
  const [secondsLeft, setSecondsLeft] = useState(ROUND_SECONDS);

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // perfect tracking
  const [roundWrongCount, setRoundWrongCount] = useState(0);

  // toast
  const [toast, setToast] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const day = useMemo(() => todayKey(), []);
  const boardKey = useMemo(() => `logiclock:leaderboard:${day}:${digitsLen}:${allowRepeats ? 'R' : 'NR'}`, [day, digitsLen, allowRepeats]);
  const profileKey = 'logiclock:profile';

  // load profile once
  useEffect(() => {
    const p = lsGet<{ name?: string }>(profileKey, {});
    if (p.name) setPlayerName(p.name);
  }, []);

  useEffect(() => {
    lsSet(profileKey, { name: playerName });
  }, [playerName]);

  const leaderboard = useMemo(() => {
    const list = lsGet<BoardEntry[]>(boardKey, []);
    return list.sort((a, b) => b.points - a.points).slice(0, 20);
  }, [boardKey, status, score]); // refresh on end states/score changes

  const pushToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 1600);
  }, []);

  const dailySeedStr = useMemo(() => {
    // daily challenge depends on date + settings
    return `daily:${day}:len${digitsLen}:rep${allowRepeats ? 1 : 0}`;
  }, [day, digitsLen, allowRepeats]);

  const startRound = useCallback(() => {
    const seedStr = mode === 'daily' ? dailySeedStr : undefined;
    const code = generateCode(digitsLen, allowRepeats, seedStr);

    setSecret(code);
    setRows([]);
    setGuess('');
    setAttemptsLeft(MAX_ATTEMPTS);
    setSecondsLeft(ROUND_SECONDS);
    setStatus('playing');
    setRoundWrongCount(0);
  }, [allowRepeats, dailySeedStr, digitsLen, mode]);

  useEffect(() => {
    startRound();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [startRound]);

  // timer (only status)
  useEffect(() => {
    if (status !== 'playing') return;

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [status]);

  // timeout
  useEffect(() => {
    if (status === 'playing' && secondsLeft === 0) handleLoss();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, status]);

  const progressPct = useMemo(() => (secondsLeft / ROUND_SECONDS) * 100, [secondsLeft]);

  const saveToLeaderboard = useCallback(
    (entry: BoardEntry) => {
      const list = lsGet<BoardEntry[]>(boardKey, []);
      const merged = [...list, entry]
        .sort((a, b) => b.points - a.points)
        .slice(0, 50);
      lsSet(boardKey, merged);
    },
    [boardKey]
  );

  const handleLoss = useCallback(() => {
    setStreak(0);

    setLives((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        setStatus('lost');
        pushToast('💥 GAME OVER');
      } else {
        pushToast('💔 Round Lost! New code...');
        // daily mode: same code; classic: new
        if (mode === 'daily') {
          // reset round but keep same secret for the day
          setRows([]);
          setGuess('');
          setAttemptsLeft(MAX_ATTEMPTS);
          setSecondsLeft(ROUND_SECONDS);
          setStatus('playing');
          setRoundWrongCount(0);
        } else {
          startRound();
        }
      }
      return next;
    });
  }, [mode, pushToast, startRound]);

  const computeRoundPoints = useCallback(() => {
    const timeBonus = secondsLeft * TIME_BONUS_MULT;
    const attemptBonus = attemptsLeft * ATTEMPT_BONUS;
    const base = BASE_WIN_POINTS + timeBonus + attemptBonus;

    // Hard mode bonus: 4 digits + repeats allowed (harder) bonus
    const hardBonus = (digitsLen === 4 ? 60 : 0) + (allowRepeats ? 25 : 0);

    // perfect bonus
    const perfect = roundWrongCount === 0;
    const perfectBonus = perfect ? 80 : 0;

    return { points: base + hardBonus + perfectBonus, perfect };
  }, [allowRepeats, attemptsLeft, digitsLen, roundWrongCount, secondsLeft]);

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (status !== 'playing') return;

      const g = guess.trim();
      const len = digitsLen;

      // validation
      if (!new RegExp(`^\\d{${len}}$`).test(g)) {
        pushToast(`${len} digits only.`);
        return;
      }
      if (!allowRepeats && new Set(g.split('')).size !== len) {
        pushToast('No repeated digits.');
        return;
      }

      const { correctPlace, correctDigit } = scoreGuess(secret, g);
      setRows((r) => [{ guess: g, correctPlace, correctDigit }, ...r]);
      setGuess('');

      // win
      if (correctPlace === len) {
        const { points, perfect } = computeRoundPoints();
        setScore((s) => s + points);
        setStreak((s) => s + 1);
        setStatus('won');
        pushToast(perfect ? '✨ PERFECT UNLOCK!' : '🔓 UNLOCKED!');

        // save to leaderboard (especially meaningful for daily)
        const entry: BoardEntry = {
          name: playerName?.trim() || 'Player',
          points,
          streak: streak + 1,
          perfect,
          ts: Date.now(),
        };
        saveToLeaderboard(entry);

        return;
      }

      // wrong guess count for "perfect"
      setRoundWrongCount((c) => c + 1);

      // attempts decrease (functional)
      setAttemptsLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          handleLoss();
          return 0;
        }
        pushToast('❌ Try again');
        return next;
      });
    },
    [
      allowRepeats,
      computeRoundPoints,
      digitsLen,
      guess,
      handleLoss,
      playerName,
      pushToast,
      saveToLeaderboard,
      secret,
      status,
      streak,
    ]
  );

  const restartGame = useCallback(() => {
    setScore(0);
    setStreak(0);
    setLives(MAX_LIVES);
    startRound();
  }, [startRound]);

  const rankLabel = useMemo(() => getRank(score), [score]);

  const hintText = useMemo(() => {
    // small helper hints for daily to keep fun
    // show "sum" + "parity count" (non-revealing)
    const nums = secret.split('').map((c) => parseInt(c, 10));
    const sum = nums.reduce((a, b) => a + b, 0);
    const evens = nums.filter((n) => n % 2 === 0).length;
    return `Hint: digit-sum = ${sum}, evens = ${evens}/${nums.length}`;
  }, [secret]);

  const canEditSettings = status !== 'playing' ? true : rows.length === 0; // lock after first guess

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-4 font-sans">
      {/* HEADER HUD */}
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all">
          <ArrowLeft size={20} /> <span className="hidden sm:inline">Dashboard</span>
        </Link>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setNameOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700 hover:bg-slate-700 transition"
            title="Player"
          >
            <User size={16} className="text-slate-300" />
            <span className="font-black">{playerName || 'Player'}</span>
          </button>

          <div className="flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
            <Heart size={18} className="text-rose-500" fill="currentColor" />
            <span className="font-black text-xl">{lives}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
            <Trophy size={18} className="text-amber-400" />
            <span className="font-black text-xl">{score}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
            <Crown size={18} className="text-cyan-400" />
            <span className="font-black">{rankLabel}</span>
          </div>
        </div>
      </div>

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-16 z-[60] bg-cyan-500 text-slate-900 px-8 py-3 rounded-2xl font-black shadow-2xl shadow-cyan-500/20"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAME MODAL */}
      <AnimatePresence>
        {nameOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setNameOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <User className="text-cyan-400" />
                <h3 className="font-black text-xl">Player Name</h3>
              </div>
              <input
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value.slice(0, 18))}
                placeholder="Type your name..."
                className="w-full bg-slate-950 border-2 border-slate-800 p-4 rounded-2xl text-white focus:outline-none focus:border-cyan-500"
                autoFocus
              />
              <button
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-4 rounded-2xl transition"
                onClick={() => setNameOpen(false)}
              >
                SAVE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-5xl w-full mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        {/* GAME CARD */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* PROGRESS TIMER */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
            <motion.div
              className={`h-full ${secondsLeft < 15 ? 'bg-rose-500' : 'bg-cyan-500'}`}
              initial={{ width: '100%' }}
              animate={{ width: `${clamp(progressPct, 0, 100)}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>

          {/* SETTINGS STRIP */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 tracking-widest uppercase">
                <Lock size={14} /> LOGIC LOCK ULTRA
              </div>
              {mode === 'daily' && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/20">
                  <Sparkles size={14} /> DAILY • {day}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className={`text-xs font-bold px-3 py-1 rounded-full border ${roundWrongCount === 0 ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10' : 'border-slate-700 text-slate-300 bg-slate-800'}`}>
                {roundWrongCount === 0 ? '✨ Perfect possible' : `Mistakes: ${roundWrongCount}`}
              </div>
              <button
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition text-xs font-bold"
                onClick={() => pushToast('⚙️ Settings locked after first guess')}
              >
                <Settings2 size={14} />
                Settings
              </button>
            </div>
          </div>

          {status === 'won' ? (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-10 space-y-6">
              <div className="bg-emerald-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto border border-emerald-500/50">
                <CheckCircle2 size={48} className="text-emerald-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black">SAFE UNLOCKED</h2>
              <p className="text-slate-300 font-bold">
                Code: <span className="text-emerald-400">{secret}</span>
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 font-black">
                  Rank: <span className="text-cyan-400">{getRank(score)}</span>
                </span>
                {roundWrongCount === 0 && (
                  <span className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 font-black text-emerald-300">
                    ✨ Perfect Round
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  if (mode === 'daily') {
                    // daily: keep same code; just reset round
                    setRows([]);
                    setGuess('');
                    setAttemptsLeft(MAX_ATTEMPTS);
                    setSecondsLeft(ROUND_SECONDS);
                    setStatus('playing');
                    setRoundWrongCount(0);
                    pushToast('Daily round restarted (same code)');
                  } else {
                    startRound();
                  }
                }}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-5 rounded-2xl text-xl transition-all shadow-xl shadow-emerald-500/20"
              >
                {mode === 'daily' ? 'PLAY DAILY AGAIN' : 'NEXT ROUND'}
              </button>
            </motion.div>
          ) : status === 'lost' ? (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-10 space-y-6">
              <div className="bg-rose-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto border border-rose-500/50">
                <AlertCircle size={48} className="text-rose-500" />
              </div>
              <h2 className="text-3xl font-black">GAME OVER</h2>
              <p className="text-slate-300 font-bold">
                Last code was <span className="text-rose-400">{secret}</span>
              </p>
              <button
                onClick={restartGame}
                className="w-full bg-rose-500 hover:bg-rose-400 text-white font-black py-5 rounded-2xl text-xl transition-all shadow-xl"
              >
                RESTART GAME
              </button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {/* TOP INFO */}
              <div className="text-center space-y-3">
                <p className="text-slate-200 text-xl md:text-2xl font-medium">
                  Crack the <span className="font-black text-white">{digitsLen}-digit</span> code{' '}
                  <span className="text-slate-400">
                    ({allowRepeats ? 'repeats allowed' : 'no repeats'})
                  </span>
                </p>

                <div className="flex justify-center gap-4 text-xs font-bold text-slate-500 uppercase">
                  <span className="flex items-center gap-1">
                    <Timer size={14} /> {secondsLeft}s
                  </span>
                  <span>Attempts: {attemptsLeft}/{MAX_ATTEMPTS}</span>
                  <span>🔥 Streak: {streak}</span>
                </div>

                {mode === 'daily' && (
                  <div className="mx-auto max-w-xl p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-sm">
                    <span className="font-black text-amber-300">Daily Hint:</span> {hintText}
                  </div>
                )}
              </div>

              {/* SETTINGS (locked after first guess) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  disabled={!canEditSettings}
                  onClick={() => {
                    if (!canEditSettings) return;
                    setMode((m) => (m === 'daily' ? 'classic' : 'daily'));
                    pushToast('Mode changed');
                  }}
                  className={`p-4 rounded-2xl border-2 transition text-sm font-black ${
                    canEditSettings
                      ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/50 text-cyan-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Mode: {mode === 'daily' ? 'Daily' : 'Classic'}
                </button>

                <button
                  disabled={!canEditSettings}
                  onClick={() => {
                    if (!canEditSettings) return;
                    setDigitsLen((d) => (d === 3 ? 4 : 3));
                    pushToast('Digits changed');
                  }}
                  className={`p-4 rounded-2xl border-2 transition text-sm font-black ${
                    canEditSettings
                      ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/50 text-cyan-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Digits: {digitsLen}
                </button>

                <button
                  disabled={!canEditSettings}
                  onClick={() => {
                    if (!canEditSettings) return;
                    setAllowRepeats((r) => !r);
                    pushToast('Repeat rule changed');
                  }}
                  className={`p-4 rounded-2xl border-2 transition text-sm font-black ${
                    canEditSettings
                      ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/50 text-cyan-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Repeats: {allowRepeats ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* LEGEND */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900">
                  <div className="text-xs text-slate-500 font-bold uppercase">Correct Place</div>
                  <div className="text-2xl font-black text-emerald-400">🟩</div>
                  <div className="text-xs text-slate-400">Right digit, right position</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900">
                  <div className="text-xs text-slate-500 font-bold uppercase">Correct Digit</div>
                  <div className="text-2xl font-black text-amber-400">🟨</div>
                  <div className="text-xs text-slate-400">Right digit, wrong position</div>
                </div>
              </div>

              {/* INPUT */}
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={digitsLen}
                  value={guess}
                  onChange={(e) => setGuess(e.target.value.replace(/[^\d]/g, '').slice(0, digitsLen))}
                  placeholder={`Type ${digitsLen} digits...`}
                  className="w-full bg-slate-950 border-2 border-slate-800 p-6 rounded-[1.5rem] text-center text-4xl font-black text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-700 tracking-widest"
                  autoFocus
                />

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-5 rounded-2xl text-xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
                >
                  TRY CODE
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (mode === 'daily') {
                      pushToast('Daily mode: code stays the same');
                      // just reset round
                      setRows([]);
                      setGuess('');
                      setAttemptsLeft(MAX_ATTEMPTS);
                      setSecondsLeft(ROUND_SECONDS);
                      setStatus('playing');
                      setRoundWrongCount(0);
                    } else {
                      pushToast('🔄 New code generated');
                      startRound();
                    }
                  }}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black py-4 rounded-2xl text-base transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} /> {mode === 'daily' ? 'RESET ROUND (same code)' : 'NEW CODE (same life)'}
                </button>
              </form>

              {/* HISTORY */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Attempts History</div>

                {rows.length === 0 ? (
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 text-sm">
                    No attempts yet. Start guessing!
                  </div>
                ) : (
                  <div className="space-y-2">
                    {rows.map((r, idx) => (
                      <motion.div
                        key={`${r.guess}-${idx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800"
                      >
                        <div className="text-2xl font-black tracking-widest">{r.guess}</div>
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                            🟩 {r.correctPlace}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                            🟨 {r.correctDigit}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-center text-slate-600 text-xs font-medium">
                Win = {BASE_WIN_POINTS} + (time×{TIME_BONUS_MULT}) + (attempts×{ATTEMPT_BONUS}) + hard/perfect bonuses
              </p>

              {/* DEBUG */}
              {/* <p className="text-center text-slate-700 text-xs">Secret: {secret}</p> */}
            </div>
          )}
        </div>

        {/* LEADERBOARD PANEL */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Shield className="text-cyan-400" />
              <h3 className="font-black text-2xl">Leaderboard</h3>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase">
              {mode === 'daily' ? 'Daily' : 'Classic'} • {digitsLen}D • {allowRepeats ? 'Repeats' : 'NoRepeats'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-slate-300">
                Your Rank: <span className="text-cyan-400">{rankLabel}</span>
              </div>
              <button
                onClick={() => {
                  lsSet(boardKey, []);
                  pushToast('Leaderboard cleared (local)');
                }}
                className="text-xs font-black px-3 py-1 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition"
              >
                Clear (Local)
              </button>
            </div>
            <div className="mt-2 text-xs text-slate-500">
              {mode === 'daily'
                ? `Daily leaderboard resets each day (${day}).`
                : 'Classic leaderboard is also stored locally.'}
            </div>
          </div>

          <div className="space-y-2">
            {leaderboard.length === 0 ? (
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-500 text-sm">
                No scores yet. Unlock a safe to enter the leaderboard!
              </div>
            ) : (
              leaderboard.map((e, i) => (
                <div
                  key={`${e.ts}-${i}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-black text-white flex items-center gap-2">
                        {e.name}
                        {e.perfect && <span className="text-emerald-300 text-xs font-black px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">✨ Perfect</span>}
                      </div>
                      <div className="text-xs text-slate-500 font-bold uppercase">
                        streak {e.streak} • {getRank(e.points)} • {new Date(e.ts).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-black text-xl text-cyan-400">{e.points}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase">pts</div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="font-black text-slate-200 mb-2 flex items-center gap-2">
              <Crown className="text-amber-400" size={18} /> Rank Rules
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-bold">
              {RANKS.map((r) => (
                <div key={r.name} className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-3 py-2">
                  <span>{r.name}</span>
                  <span className="text-slate-300">{r.min}+ pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 