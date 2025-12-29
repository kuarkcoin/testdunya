'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { speedRunQuestions, SpeedQuestion } from '../data/grade5_speedrun_data';

// =====================
// Helpers
// =====================
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// Data'ya difficulty eklemeden, hızlı heuristik ile adaptif havuz
function makeShuffledQuestions(mode: 'easy' | 'normal' | 'hard' = 'normal'): SpeedQuestion[] {
  let pool = speedRunQuestions;

  if (mode === 'easy') {
    // kısa seçenekler / kısa soru = daha kolay olma ihtimali yüksek
    pool = speedRunQuestions.filter(q => q.options.every(o => o.length <= 10) && q.question.length <= 50);
    if (pool.length < 10) pool = speedRunQuestions; // güvenlik
  }

  if (mode === 'hard') {
    // daha uzun soru / daha uzun seçenek = daha zor olma ihtimali yüksek
    pool = speedRunQuestions.filter(q => q.question.length > 45 || q.options.some(o => o.length > 12));
    if (pool.length < 10) pool = speedRunQuestions; // güvenlik
  }

  return shuffleArray(pool).map(q => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}

// Zorluk kararı
const decideDifficulty = (currentStreak: number, time: number): 'easy' | 'normal' | 'hard' => {
  if (currentStreak >= 3 && time > 20) return 'hard';
  if (time < 10) return 'easy';
  return 'normal';
};

export default function Grade5SpeedRun() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');

  const [questions, setQuestions] = useState<SpeedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  // High score
  const HIGH_SCORE_KEY = 'grade5_speedrun_highscore';
  const [highScore, setHighScore] = useState(0);

  // Feedback / UX
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [lockButtons, setLockButtons] = useState(false);
  const [shake, setShake] = useState(false);

  // Counter (sonsuz)
  const [answeredCount, setAnsweredCount] = useState(0);

  // Confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Time flash (+4 / -2 / +5🔥)
  const [timeFlash, setTimeFlash] = useState<string | null>(null);

  // Streak & Adaptive difficulty
  const [streak, setStreak] = useState(0);
  const [difficultyBias, setDifficultyBias] = useState<'easy' | 'normal' | 'hard'>('normal');
  const difficultyRef = useRef<'easy' | 'normal' | 'hard'>('normal');

  const setDifficulty = (mode: 'easy' | 'normal' | 'hard') => {
    setDifficultyBias(mode);
    difficultyRef.current = mode;
  };

  // =====================
  // Tuning
  // =====================
  const CORRECT_REWARD = 10;
  const WRONG_PENALTY = 2; // istersen 0 yapabilirsin

  const TIME_BONUS_CORRECT = 4;
  const TIME_PENALTY_WRONG = 2;
  const MAX_TIME = 100;

  const STREAK_TARGET = 3;
  const STREAK_TIME_BONUS = 5;

  // =====================
  // Effects
  // =====================
  useEffect(() => {
    try {
      const saved = localStorage.getItem(HIGH_SCORE_KEY);
      setHighScore(saved ? parseInt(saved, 10) || 0 : 0);
    } catch {
      setHighScore(0);
    }
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    if (timeLeft <= 0) {
      setGameState('gameover');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  // Gameover -> high score update
  useEffect(() => {
    if (gameState !== 'gameover') return;

    if (score > highScore) {
      setHighScore(score);
      try {
        localStorage.setItem(HIGH_SCORE_KEY, String(score));
      } catch {}
    }
  }, [gameState, score, highScore]);

  // =====================
  // Actions
  // =====================
  const triggerConfetti = () => {
    setShowConfetti(true);
    window.setTimeout(() => setShowConfetti(false), 200);
  };

  const flashTime = (txt: string) => {
    setTimeFlash(txt);
    window.setTimeout(() => setTimeFlash(null), 600);
  };

  const resetFeedback = () => {
    setSelected(null);
    setIsCorrect(null);
    setLockButtons(false);
    setShake(false);
  };

  const startGame = () => {
    setDifficulty('normal');
    setQuestions(makeShuffledQuestions('normal'));
    setCurrentIndex(0);

    setScore(0);
    setTimeLeft(100);

    setAnsweredCount(0);
    setStreak(0);

    resetFeedback();
    setGameState('playing');
  };

  const nextQuestion = () => {
    resetFeedback();

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Havuz bitince, adaptif moda göre yeniden karıştır
      setQuestions(makeShuffledQuestions(difficultyRef.current));
      setCurrentIndex(0);
    }
  };

  const handleAnswer = (opt: string) => {
    if (lockButtons) return;
    if (!questions.length) return;

    const q = questions[currentIndex];
    if (!q) return;

    setLockButtons(true);
    setSelected(opt);

    const correct = opt === q.answer;
    setIsCorrect(correct);

    setAnsweredCount(c => c + 1);

    if (correct) {
      // score + confetti
      setScore(prev => prev + CORRECT_REWARD);
      triggerConfetti();

      // streak
      const newStreak = streak + 1;
      setStreak(newStreak);

      // time +4 (clamp)
      setTimeLeft(prev => Math.min(MAX_TIME, prev + TIME_BONUS_CORRECT));
      flashTime(`+${TIME_BONUS_CORRECT}s`);

      // perfect streak bonus
      if (newStreak >= STREAK_TARGET) {
        setTimeLeft(prev => Math.min(MAX_TIME, prev + STREAK_TIME_BONUS));
        flashTime(`+${STREAK_TIME_BONUS}s🔥`);
        setStreak(0);
      }

      // adaptive difficulty (mevcut timeLeft üzerinden karar)
      const nextMode = decideDifficulty(newStreak, timeLeft);
      setDifficulty(nextMode);
    } else {
      // streak reset
      setStreak(0);

      // score penalty
      setScore(prev => Math.max(0, prev - WRONG_PENALTY));

      // time -2 (clamp)
      setTimeLeft(prev => Math.max(0, prev - TIME_PENALTY_WRONG));
      flashTime(`-${TIME_PENALTY_WRONG}s`);

      // shake
      setShake(true);
      window.setTimeout(() => setShake(false), 250);

      // difficulty düşür
      setDifficulty('easy');
    }

    // 300ms sonra otomatik geçiş
    window.setTimeout(() => {
      nextQuestion();
    }, 300);
  };

  // =====================
  // Guards
  // =====================
  const isLoadingQuestion = gameState === 'playing' && questions.length === 0;
  const currentQ = questions[currentIndex];

  // =====================
  // UI helpers
  // =====================
  const getBtnClass = (opt: string) => {
    const base =
      'py-4 px-2 rounded-xl font-bold text-lg transition-all active:scale-95 border-2 touch-manipulation';
    const idle = 'bg-white/20 hover:bg-white/40 border-white/30';
    if (!selected) return `${base} ${idle}`;

    const correctOpt = currentQ?.answer;

    const isThis = opt === selected;

    if (isThis && opt === correctOpt) return `${base} bg-green-500/90 border-green-200 text-white`;
    if (isThis && opt !== correctOpt) return `${base} bg-red-500/90 border-red-200 text-white`;
    if (opt === correctOpt) return `${base} bg-green-500/40 border-green-200/60 text-white`;
    return `${base} bg-white/10 border-white/20 text-white/70`;
  };

  return (
    <div className="min-h-screen bg-violet-600 flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">
      {/* Mini parçacık konfeti */}
      {showConfetti && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="confetti-wrap">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="confetti-piece" />
            ))}
          </div>
          <style jsx>{`
            .confetti-wrap {
              position: relative;
              width: 1px;
              height: 1px;
            }
            .confetti-piece {
              position: absolute;
              left: 0;
              top: 0;
              width: 10px;
              height: 6px;
              border-radius: 9999px;
              background: white;
              opacity: 0.95;
              animation: fly 200ms ease-out both;
            }
            .confetti-piece:nth-child(1) { --x: -30px; --y: -45px; }
            .confetti-piece:nth-child(2) { --x: 10px; --y: -60px; }
            .confetti-piece:nth-child(3) { --x: 35px; --y: -40px; }
            .confetti-piece:nth-child(4) { --x: -55px; --y: -20px; }
            .confetti-piece:nth-child(5) { --x: 60px; --y: -15px; }
            .confetti-piece:nth-child(6) { --x: -20px; --y: -70px; }
            .confetti-piece:nth-child(7) { --x: 20px; --y: -75px; }
            .confetti-piece:nth-child(8) { --x: -70px; --y: -5px; }
            .confetti-piece:nth-child(9) { --x: 75px; --y: -5px; }
            .confetti-piece:nth-child(10) { --x: -40px; --y: -55px; }
            .confetti-piece:nth-child(11) { --x: 45px; --y: -50px; }
            .confetti-piece:nth-child(12) { --x: 0px; --y: -85px; }
            @keyframes fly {
              from {
                transform: translate(0, 0) rotate(0deg) scale(0.8);
                opacity: 0;
              }
              to {
                transform: translate(var(--x), var(--y)) rotate(120deg) scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}

      {/* MENU */}
      {gameState === 'menu' && (
        <div className="text-center max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-black mb-2">5. Sınıf SpeedRun</h1>
          <p className="text-violet-200 mb-4">
            60 saniyen var! Doğru +4s, yanlış -2s. 3 doğru üst üste +5s🔥
          </p>

          <div className="mb-6 bg-black/25 rounded-2xl p-4">
            <div className="text-xs uppercase tracking-widest text-violet-200 font-bold">En Yüksek Skor</div>
            <div className="text-3xl font-black text-yellow-300">{highScore}</div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-black text-xl rounded-2xl shadow-lg transform transition active:scale-95"
          >
            BAŞLA!
          </button>

          <Link href="/" className="block mt-4 text-sm text-violet-300 hover:text-white underline">
            Ana Sayfaya Dön
          </Link>
        </div>
      )}

      {/* PLAYING */}
      {gameState === 'playing' && (
        <div className="w-full max-w-lg">
          {isLoadingQuestion ? (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl text-center">
              <div className="text-4xl mb-2">⏳</div>
              <div className="font-bold">Sorular hazırlanıyor…</div>
            </div>
          ) : (
            <>
              {/* Üst Bilgi Barı */}
              <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
                <div className="bg-black/30 px-4 py-2 rounded-xl font-bold font-mono text-2xl">
                  Skor: <span className="text-yellow-400">{score}</span>
                </div>

                <div className="bg-black/20 px-3 py-2 rounded-xl font-bold text-sm">
                  Rekor: <span className="text-yellow-300">{highScore}</span>
                </div>

                {/* Soru sayacı */}
                <div className="bg-black/20 px-3 py-2 rounded-xl font-bold text-sm">
                  Soru: <span className="text-white">{answeredCount + 1}</span> / ∞
                </div>

                {/* Streak */}
                {streak > 0 && (
                  <div className="bg-yellow-400 text-violet-900 px-3 py-2 rounded-xl font-black text-sm animate-pulse">
                    🔥 {streak}x
                  </div>
                )}

                {/* Timer + flash */}
                <div className="relative">
                  <div
                    className={`text-3xl font-black font-mono ${
                      timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'
                    }`}
                  >
                    00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                  </div>

                  {timeFlash && (
                    <div
                      className={`absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-black animate-bounce ${
                        timeFlash.startsWith('+') ? 'text-green-300' : 'text-red-300'
                      }`}
                    >
                      {timeFlash}
                    </div>
                  )}
                </div>

                {/* Mod göstergesi */}
                <div className="bg-black/20 px-3 py-2 rounded-xl font-bold text-sm">
                  Mod: <span className="text-violet-200">{difficultyBias}</span>
                </div>
              </div>

              {/* Soru Kartı */}
              <div
                className={`bg-white text-slate-900 rounded-3xl p-6 shadow-2xl mb-4 min-h-[200px] flex flex-col justify-center items-center text-center relative overflow-hidden ${
                  shake ? 'shake' : ''
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
                    style={{ width: `${(timeLeft / 100) * 100}%` }}
                  />
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {currentQ?.category}
                </span>

                <h2 className="text-2xl font-bold leading-tight">{currentQ?.question}</h2>

                {/* Doğru/yanlış mini feedback */}
                {selected && (
                  <div className="mt-3 text-sm font-extrabold">
                    {isCorrect ? (
                      <span className="text-green-600">✅ Doğru! +{CORRECT_REWARD} puan</span>
                    ) : (
                      <span className="text-red-600">❌ Yanlış! -{WRONG_PENALTY} puan</span>
                    )}
                  </div>
                )}

                <style jsx>{`
                  .shake {
                    animation: shake 250ms ease-in-out;
                  }
                  @keyframes shake {
                    0% {
                      transform: translateX(0);
                    }
                    25% {
                      transform: translateX(-6px);
                    }
                    50% {
                      transform: translateX(6px);
                    }
                    75% {
                      transform: translateX(-4px);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }
                `}</style>
              </div>

              {/* Seçenekler */}
              <div className="grid grid-cols-2 gap-3">
                {(currentQ?.options ?? []).map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    disabled={lockButtons}
                    className={`${getBtnClass(opt)} ${lockButtons ? 'opacity-90 cursor-not-allowed' : ''}`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {selected === opt && isCorrect === true && <span>✅</span>}
                      {selected === opt && isCorrect === false && <span>❌</span>}
                      <span>{opt}</span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* GAMEOVER */}
      {gameState === 'gameover' && (
        <div className="text-center max-w-md w-full bg-white text-slate-900 p-8 rounded-3xl shadow-2xl animate-in zoom-in duration-300">
          <div className="text-6xl mb-2">🏁</div>
          <h2 className="text-3xl font-black mb-1">Süre Bitti!</h2>
          <p className="text-slate-500 mb-6">İyi iş çıkardın.</p>

          <div className="bg-slate-100 p-6 rounded-2xl mb-4">
            <div className="text-sm text-slate-500 uppercase font-bold">Toplam Skor</div>
            <div className="text-5xl font-black text-violet-600">{score}</div>
          </div>

          <div className="bg-slate-100 p-4 rounded-2xl mb-6">
            <div className="text-xs text-slate-500 uppercase font-bold">En Yüksek Skor</div>
            <div className="text-2xl font-black text-slate-800">{highScore}</div>
            {score >= highScore && score !== 0 && (
              <div className="mt-1 text-sm font-bold text-green-600">🎉 Yeni rekor!</div>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition"
            >
              Tekrar Dene ↻
            </button>
            <Link
              href="/"
              className="block py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl transition"
            >
              Ana Sayfa
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}