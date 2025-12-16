'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

// -------------------- ICONS --------------------
const Sparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
  </svg>
);
const Refresh = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const Heart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);
const TimerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const Bolt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Lightbulb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

// -------------------- TYPES --------------------
type GameStatus = 'playing' | 'won' | 'lost';
type HintKey = 'firstLetter' | 'wordLength' | 'synonym' | 'example';

type WordPayload = {
  word: string;
  definition: string;
  turkish_meaning?: string;
  synonym?: string;
  example_sentence?: string;
};

// -------------------- CONSTANTS --------------------
const ROUND_SECONDS = 60;
const MAX_ATTEMPTS = 5;
const MAX_LIVES = 3;
const HINT_PENALTY = 15;
const BASE_WIN_POINTS = 100;

const LS_KEY = 'wordHunterStats_v1';

// -------------------- HELPERS --------------------
function safeLower(s: unknown) {
  return String(s ?? '').trim().toLowerCase();
}

function maskWordInText(text: string, word: string) {
  const t = String(text ?? '');
  const w = String(word ?? '').trim();
  if (!t || !w) return t;
  // replace case-insensitive occurrences with underscores
  const re = new RegExp(`\\b${escapeRegExp(w)}\\b`, 'gi');
  const mask = '_'.repeat(Math.min(Math.max(w.length, 3), 16));
  return t.replace(re, mask);
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function countTrueFlags(obj: Record<string, boolean>) {
  return Object.values(obj).filter(Boolean).length;
}

type Stats = {
  bestScore: number;
  bestStreak: number;
  played: number;
  wins: number;
};

function loadStats(): Stats {
  if (typeof window === 'undefined') return { bestScore: 0, bestStreak: 0, played: 0, wins: 0 };
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { bestScore: 0, bestStreak: 0, played: 0, wins: 0 };
    const parsed = JSON.parse(raw);
    return {
      bestScore: Number(parsed?.bestScore ?? 0),
      bestStreak: Number(parsed?.bestStreak ?? 0),
      played: Number(parsed?.played ?? 0),
      wins: Number(parsed?.wins ?? 0),
    };
  } catch {
    return { bestScore: 0, bestStreak: 0, played: 0, wins: 0 };
  }
}

function saveStats(next: Stats) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
}

// -------------------- COMPONENT --------------------
export default function WordHunterGame() {
  const [data, setData] = useState<WordPayload | null>(null);
  const [loading, setLoading] = useState(true);

  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<GameStatus>('playing');

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const [lives, setLives] = useState(MAX_LIVES);
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);

  const [hintsUsed, setHintsUsed] = useState<Record<HintKey, boolean>>({
    firstLetter: false,
    wordLength: false,
    synonym: false,
    example: false,
  });

  const [secondsLeft, setSecondsLeft] = useState(ROUND_SECONDS);

  const [stats, setStats] = useState<Stats>({ bestScore: 0, bestStreak: 0, played: 0, wins: 0 });

  const timerRef = useRef<number | null>(null);

  const hintsCount = useMemo(() => countTrueFlags(hintsUsed), [hintsUsed]);

  const safeWord = useMemo(() => (data?.word ? String(data.word) : ''), [data?.word]);
  const safeDefinition = useMemo(() => (data?.definition ? String(data.definition) : ''), [data?.definition]);

  const maskedExample = useMemo(() => {
    const ex = data?.example_sentence ? String(data.example_sentence) : '';
    if (!ex) return '';
    return maskWordInText(ex, safeWord);
  }, [data?.example_sentence, safeWord]);

  // -------------------- TIMER --------------------
  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          // time over => lose life / round
          window.setTimeout(() => onTimeOver(), 0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const onTimeOver = () => {
    stopTimer();
    if (status !== 'playing') return;

    setLives((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        // game over
        setStatus('lost');
        setStreak(0);
      } else {
        // new round, keep score
        setAttemptsLeft(MAX_ATTEMPTS);
        setHintsUsed({ firstLetter: false, wordLength: false, synonym: false, example: false });
        setGuess('');
        setSecondsLeft(ROUND_SECONDS);
        // fetch new word
        fetchWord(true);
      }
      return next;
    });
  };

  // -------------------- GAME FLOW --------------------
  const resetRoundState = () => {
    setStatus('playing');
    setHintsUsed({ firstLetter: false, wordLength: false, synonym: false, example: false });
    setGuess('');
    setAttemptsLeft(MAX_ATTEMPTS);
    setSecondsLeft(ROUND_SECONDS);
  };

  // fetchWord(keepTimer) => keepTimer true ise timer zaten yönetiliyor; false ise startTimer
  const fetchWord = async (keepTimer = false) => {
    setLoading(true);
    try {
      const res = await fetch('/api/game/word', { method: 'POST' });
      const json = (await res.json()) as WordPayload;

      // minimal validation
      if (!json?.word || !json?.definition) {
        throw new Error('Invalid word payload from API');
      }

      setData({
        word: String(json.word),
        definition: String(json.definition),
        turkish_meaning: json.turkish_meaning ? String(json.turkish_meaning) : '',
        synonym: json.synonym ? String(json.synonym) : '',
        example_sentence: json.example_sentence ? String(json.example_sentence) : '',
      });
    } catch (e) {
      console.error(e);
      setData(null);
    } finally {
      setLoading(false);
      if (!keepTimer) startTimer();
    }
  };

  const startNewGame = async () => {
    stopTimer();
    setScore(0);
    setStreak(0);
    setLives(MAX_LIVES);
    resetRoundState();
    setStatus('playing');

    // stats played++
    setStats((prev) => {
      const next = { ...prev, played: prev.played + 1 };
      saveStats(next);
      return next;
    });

    await fetchWord(true);
    startTimer();
  };

  const startNextRoundAfterWin = async () => {
    stopTimer();
    resetRoundState();
    await fetchWord(true);
    startTimer();
  };

  // first mount: load stats + start game
  useEffect(() => {
    setStats(loadStats());
    // oyun ilk açılışta otomatik başlasın
    // played++ sadece "New Game" ile artsın istersen burayı kaldır.
    startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // stop timer on unmount
  useEffect(() => {
    return () => stopTimer();
  }, []);

  // -------------------- ACTIONS --------------------
  const addShake = () => {
    const input = document.getElementById('guess-input');
    input?.classList.add('animate-shake');
    window.setTimeout(() => input?.classList.remove('animate-shake'), 450);
  };

  const loseAttempt = () => {
    setAttemptsLeft((prev) => {
      const next = prev - 1;

      if (next <= 0) {
        // lose a life
        setLives((lv) => {
          const lvNext = lv - 1;

          if (lvNext <= 0) {
            stopTimer();
            setStatus('lost');
            setStreak(0);
          } else {
            // new round with new word
            stopTimer();
            resetRoundState();
            fetchWord(true).then(() => startTimer());
          }

          return lvNext;
        });

        return 0;
      }

      return next;
    });
  };

  const checkGuess = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!data || status !== 'playing') return;

    const userGuess = safeLower(guess);
    const correct = safeLower(data.word);

    if (!userGuess) return;

    if (userGuess === correct) {
      stopTimer();
      setStatus('won');

      const timeBonus = clamp(secondsLeft, 0, ROUND_SECONDS) * 2; // 0..120
      const hintPenalty = hintsCount * HINT_PENALTY;

      const points = Math.max(0, BASE_WIN_POINTS + timeBonus - hintPenalty);

      setScore((s) => s + points);
      setStreak((s) => s + 1);

      // stats: wins++, bestScore/bestStreak
      setStats((prev) => {
        const nextScore = score + points; // score state async => hesap amaçlı
        const nextStreak = streak + 1;

        const next: Stats = {
          ...prev,
          wins: prev.wins + 1,
          bestScore: Math.max(prev.bestScore, nextScore),
          bestStreak: Math.max(prev.bestStreak, nextStreak),
        };
        saveStats(next);
        return next;
      });

      return;
    }

    addShake();
    loseAttempt();
  };

  const revealHint = (type: HintKey) => {
    if (status !== 'playing') return;
    setHintsUsed((prev) => {
      if (prev[type]) return prev;
      return { ...prev, [type]: true };
    });
    setScore((s) => Math.max(0, s - HINT_PENALTY));
  };

  const giveUp = () => {
    if (!data || status !== 'playing') return;
    stopTimer();
    setStatus('lost');
    setStreak(0);
  };

  // -------------------- UI DERIVED --------------------
  const progressPct = useMemo(() => (secondsLeft / ROUND_SECONDS) * 100, [secondsLeft]);

  const timeColor = useMemo(() => {
    if (secondsLeft <= 10) return 'bg-rose-500';
    if (secondsLeft <= 20) return 'bg-amber-500';
    return 'bg-emerald-500';
  }, [secondsLeft]);

  const safeFirstLetter = safeWord ? safeWord[0]?.toUpperCase() : '?';
  const safeWordLen = safeWord ? safeWord.length : 0;

  const canShow = (k: HintKey) => Boolean(hintsUsed[k]);

  // -------------------- RENDER --------------------
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-4">
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-slate-800/50 backdrop-blur-md border-b border-white/10 z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition">
          <HomeIcon className="w-5 h-5" /> Ana Sayfa
        </Link>

        <div className="flex items-center gap-5">
          {/* Lives */}
          <div className="hidden sm:flex items-center gap-1 text-rose-300">
            <Heart className="w-5 h-5" />
            <span className="font-black font-mono text-white">{lives}</span>
          </div>

          {/* Attempts */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Attempts</span>
            <span className="text-lg font-black text-slate-200 font-mono">{attemptsLeft}/{MAX_ATTEMPTS}</span>
          </div>

          {/* Score */}
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Score</span>
            <span className="text-2xl font-black text-amber-400 font-mono">{score}</span>
          </div>

          {/* Streak */}
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Streak</span>
            <span className="text-2xl font-black text-emerald-400 font-mono">🔥 {streak}</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl w-full space-y-8 mt-20">
        {/* TITLE */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold border border-indigo-500/30">
            <Sparkles className="w-5 h-5" /> AI Powered Game
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Word Hunter
          </h1>
          <p className="text-slate-400">
            60 saniyede kelimeyi bul. İpucu kullanırsan puan düşer. 5 yanlışta 1 can gider.
          </p>
        </div>

        {/* GAME CARD */}
        <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-center">
          {/* TIMER BAR */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-700">
            <div
              className={`h-1.5 ${timeColor} transition-all`}
              style={{ width: `${progressPct}%` }}
              aria-label="Time remaining"
            />
          </div>

          {/* HUD ROW */}
          <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 font-bold">
            <div className="flex items-center gap-2">
              <TimerIcon className="w-4 h-4" />
              <span className={`${secondsLeft <= 10 ? 'text-rose-300' : 'text-slate-300'} font-mono text-sm`}>
                {secondsLeft}s
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-rose-300 sm:hidden">
                <Heart className="w-4 h-4" />
                <span className="font-mono text-slate-200">{lives}</span>
              </div>
              <div className="sm:hidden font-mono text-slate-200">
                {attemptsLeft}/{MAX_ATTEMPTS}
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-slate-500">Best:</span>
                <span className="text-slate-200 font-mono">{stats.bestScore}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-200 font-mono">🔥 {stats.bestStreak}</span>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center gap-4 animate-pulse pt-10">
              <div className="w-16 h-16 rounded-full bg-slate-700" />
              <div className="h-4 w-3/4 bg-slate-700 rounded" />
              <div className="h-4 w-1/2 bg-slate-700 rounded" />
              <p className="text-slate-500 font-bold animate-pulse">Summoning AI...</p>
            </div>
          ) : !data || !safeWord || !safeDefinition ? (
            <div className="text-center space-y-6 pt-10">
              <div className="text-5xl">⚠️</div>
              <h2 className="text-2xl font-black">Word yüklenemedi</h2>
              <p className="text-slate-400">API yanıtı boş/hatali geldi. Tekrar deneyelim.</p>
              <button
                onClick={startNewGame}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all mx-auto flex items-center gap-2"
              >
                <Refresh className="w-5 h-5" /> Restart
              </button>
            </div>
          ) : status === 'won' ? (
            <div className="text-center space-y-6 animate-in zoom-in duration-300 pt-10">
              <div className="text-6xl">🎉</div>
              <h2 className="text-3xl font-bold text-white">Correct!</h2>
              <div className="text-5xl font-black text-emerald-400 tracking-wider">
                {safeWord.toUpperCase()}
              </div>
              {data.turkish_meaning ? (
                <p className="text-slate-400 text-lg">{data.turkish_meaning}</p>
              ) : (
                <p className="text-slate-500 text-sm">Türkçe anlam yok (opsiyonel).</p>
              )}

              <div className="text-sm text-slate-400">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Bolt className="w-4 h-4 text-amber-300" />
                  Time bonus: <span className="font-mono text-slate-200">{secondsLeft * 2}</span>
                  <span className="text-slate-500">•</span>
                  Hint penalty: <span className="font-mono text-slate-200">{hintsCount * HINT_PENALTY}</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={startNextRoundAfterWin}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/50 transition-all hover:scale-[1.02] flex items-center gap-2 justify-center"
                >
                  <Refresh className="w-5 h-5" /> Next Word
                </button>
                <button
                  onClick={startNewGame}
                  className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold text-lg transition-all flex items-center gap-2 justify-center"
                >
                  Restart Game
                </button>
              </div>
            </div>
          ) : status === 'lost' ? (
            <div className="text-center space-y-6 animate-in zoom-in duration-300 pt-10">
              <div className="text-6xl">💀</div>
              <h2 className="text-3xl font-bold text-rose-400">Game Over</h2>
              <p className="text-slate-400">The word was:</p>
              <div className="text-4xl font-black text-white tracking-wider">{safeWord.toUpperCase()}</div>
              {data.turkish_meaning ? <p className="text-slate-400">{data.turkish_meaning}</p> : null}

              <div className="mt-2 text-sm text-slate-400">
                Played: <span className="font-mono text-slate-200">{stats.played}</span>
                <span className="text-slate-600"> • </span>
                Wins: <span className="font-mono text-slate-200">{stats.wins}</span>
                <span className="text-slate-600"> • </span>
                Best Score: <span className="font-mono text-slate-200">{stats.bestScore}</span>
                <span className="text-slate-600"> • </span>
                Best Streak: <span className="font-mono text-slate-200">{stats.bestStreak}</span>
              </div>

              <button
                onClick={startNewGame}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all mx-auto flex items-center gap-2 justify-center"
              >
                <Refresh className="w-5 h-5" /> New Game
              </button>
            </div>
          ) : (
            <div className="space-y-8 pt-12">
              {/* DEFINITION */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Definition</h3>
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                  “{safeDefinition}”
                </p>
              </div>

              {/* HINTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() => revealHint('firstLetter')}
                  disabled={hintsUsed.firstLetter}
                  className={`p-3 rounded-xl border text-sm font-bold transition-all text-left ${
                    hintsUsed.firstLetter
                      ? 'bg-slate-700 border-slate-600 text-slate-200'
                      : 'bg-slate-800/50 border-slate-600 text-indigo-300 hover:bg-indigo-500/10'
                  }`}
                >
                  {canShow('firstLetter') ? `🔤 Starts with: ${safeFirstLetter}` : `🔤 First Letter (-${HINT_PENALTY}pts)`}
                </button>

                <button
                  onClick={() => revealHint('wordLength')}
                  disabled={hintsUsed.wordLength}
                  className={`p-3 rounded-xl border text-sm font-bold transition-all text-left ${
                    hintsUsed.wordLength
                      ? 'bg-slate-700 border-slate-600 text-slate-200'
                      : 'bg-slate-800/50 border-slate-600 text-indigo-300 hover:bg-indigo-500/10'
                  }`}
                >
                  {canShow('wordLength') ? `📏 Length: ${safeWordLen}` : `📏 Word Length (-${HINT_PENALTY}pts)`}
                </button>

                <button
                  onClick={() => revealHint('synonym')}
                  disabled={hintsUsed.synonym || !data.synonym}
                  className={`p-3 rounded-xl border text-sm font-bold transition-all text-left ${
                    hintsUsed.synonym
                      ? 'bg-slate-700 border-slate-600 text-slate-200'
                      : !data.synonym
                        ? 'bg-slate-900/30 border-slate-700 text-slate-600 cursor-not-allowed'
                        : 'bg-slate-800/50 border-slate-600 text-indigo-300 hover:bg-indigo-500/10'
                  }`}
                  title={!data.synonym ? 'Synonym yok (opsiyonel)' : undefined}
                >
                  {canShow('synonym') ? `💡 Synonym: ${data.synonym}` : `💡 Reveal Synonym (-${HINT_PENALTY}pts)`}
                </button>

                <button
                  onClick={() => revealHint('example')}
                  disabled={hintsUsed.example || !data.example_sentence}
                  className={`p-3 rounded-xl border text-sm font-bold transition-all text-left ${
                    hintsUsed.example
                      ? 'bg-slate-700 border-slate-600 text-slate-200'
                      : !data.example_sentence
                        ? 'bg-slate-900/30 border-slate-700 text-slate-600 cursor-not-allowed'
                        : 'bg-slate-800/50 border-slate-600 text-indigo-300 hover:bg-indigo-500/10'
                  }`}
                  title={!data.example_sentence ? 'Example yok (opsiyonel)' : undefined}
                >
                  {canShow('example') ? `📝 Example: ${maskedExample || data.example_sentence}` : `📝 Reveal Example (-${HINT_PENALTY}pts)`}
                </button>
              </div>

              {/* INPUT */}
              <form onSubmit={checkGuess} className="relative">
                <input
                  id="guess-input"
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Type your guess here..."
                  className="w-full bg-slate-900/50 border-2 border-slate-600 text-white text-center text-2xl font-bold py-4 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600"
                  autoFocus
                  autoComplete="off"
                  inputMode="text"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 rounded-xl font-bold transition-all"
                >
                  GUESS
                </button>
              </form>

              <div className="text-center space-y-2">
                <div className="text-xs text-slate-500 font-bold">
                  💡 İpucu sayısı: <span className="font-mono text-slate-300">{hintsCount}</span> •
                  Zaman: <span className="font-mono text-slate-300">{secondsLeft}s</span> •
                  Can: <span className="font-mono text-slate-300">{lives}</span> •
                  Deneme: <span className="font-mono text-slate-300">{attemptsLeft}/{MAX_ATTEMPTS}</span>
                </div>

                <button
                  onClick={giveUp}
                  className="text-slate-500 text-xs hover:text-rose-400 underline font-bold transition-colors inline-flex items-center gap-2"
                >
                  <Lightbulb className="w-4 h-4" /> I give up, show me the word
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER SMALL */}
        <div className="text-center text-xs text-slate-600">
          İpucu cezası: <span className="font-mono">{HINT_PENALTY}</span> • Doğru cevap: <span className="font-mono">{BASE_WIN_POINTS}</span> + time bonus •
          Local best skor/streak saklanır.
        </div>
      </div>

      {/* GLOBAL STYLE */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); border-color: #f43f5e; }
          75% { transform: translateX(6px); border-color: #f43f5e; }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}