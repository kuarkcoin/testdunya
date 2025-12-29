'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { speedRunQuestions, SpeedQuestion } from '../data/grade5_speedrun_data';

// Diziyi karıştıran yardımcı fonksiyon
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatTime(totalSeconds: number) {
  const s = Math.max(0, totalSeconds);
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

type GameState = 'menu' | 'playing' | 'gameover';

export default function Grade5SpeedRun() {
  const TOTAL_TIME = 100; // ✅ 100 saniye
  const CORRECT_SCORE = 10;
  const WRONG_PENALTY = 5; // İstersen 2 yaparız: çocuklar için daha yumuşak
  const CORRECT_TIME_BONUS = 4; // ✅ doğru +4 sn
  const WRONG_TIME_PENALTY = 2; // ✅ yanlış -2 sn
  const ANSWER_LOCK_MS = 350;   // ✅ akıcılık

  const [gameState, setGameState] = useState<GameState>('menu');
  const [questions, setQuestions] = useState<SpeedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  // UX states
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [locked, setLocked] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  // Audio refs
  const correctSfx = useRef<HTMLAudioElement | null>(null);
  const wrongSfx = useRef<HTMLAudioElement | null>(null);
  const tickSfx = useRef<HTMLAudioElement | null>(null);

  const buildShuffledQuestions = () =>
    shuffleArray(speedRunQuestions).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

  const playSafe = (a?: HTMLAudioElement | null) => {
    if (!soundOn) return;
    if (!a) return;
    try {
      a.currentTime = 0;
      a.play().catch(() => {});
    } catch {}
  };

  // preload audio (client-side)
  useEffect(() => {
    correctSfx.current = new Audio('/sfx/correct.mp3');
    wrongSfx.current = new Audio('/sfx/wrong.mp3');
    tickSfx.current = new Audio('/sfx/tick.mp3');

    if (correctSfx.current) {
      correctSfx.current.preload = 'auto';
      correctSfx.current.volume = 0.7;
    }
    if (wrongSfx.current) {
      wrongSfx.current.preload = 'auto';
      wrongSfx.current.volume = 0.7;
    }
    if (tickSfx.current) {
      tickSfx.current.preload = 'auto';
      tickSfx.current.volume = 0.35;
    }
  }, []);

  // ✅ Oyun başlat
  const startGame = async () => {
    // iOS/Safari için basit audio unlock (ilk tıklamada)
    const unlock = async () => {
      try {
        const a = correctSfx.current;
        if (!a) return;
        a.muted = true;
        await a.play();
        a.pause();
        a.currentTime = 0;
        a.muted = false;
      } catch {}
    };

    await unlock();

    setQuestions(buildShuffledQuestions());
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(TOTAL_TIME);
    setSelectedOption(null);
    setIsCorrect(null);
    setLocked(false);
    setGameState('playing');
  };

  // ✅ Timer
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 0) {
      setGameState('gameover');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  // ✅ Son 10 saniye tick
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 10 && timeLeft > 0) {
      playSafe(tickSfx.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gameState]);

  const currentQ = questions[currentIndex];

  const progressPct = useMemo(() => {
    return (timeLeft / TOTAL_TIME) * 100;
  }, [timeLeft]);

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // soru havuzu biterse yeniden karıştırıp devam
      setQuestions(buildShuffledQuestions());
      setCurrentIndex(0);
    }
  };

  // ✅ Cevap verme (feedback + süre bonus/ceza + auto advance)
  const handleAnswer = (opt: string) => {
    if (!currentQ) return;
    if (locked) return;

    setLocked(true);
    setSelectedOption(opt);

    const ok = opt === currentQ.answer;
    setIsCorrect(ok);

    if (ok) {
      playSafe(correctSfx.current);
      setScore((prev) => prev + CORRECT_SCORE);
      setTimeLeft((prev) => clamp(prev + CORRECT_TIME_BONUS, 0, TOTAL_TIME)); // 100’ü aşmasın
    } else {
      playSafe(wrongSfx.current);
      setScore((prev) => Math.max(0, prev - WRONG_PENALTY));
      setTimeLeft((prev) => clamp(prev - WRONG_TIME_PENALTY, 0, TOTAL_TIME));
    }

    // kısa feedback -> otomatik sonraki soru
    window.setTimeout(() => {
      setLocked(false);
      nextQuestion();
    }, ANSWER_LOCK_MS);
  };

  return (
    <div className="min-h-screen bg-violet-600 flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">
      {/* --- MENU --- */}
      {gameState === 'menu' && (
        <div className="text-center max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-black mb-2">5. Sınıf SpeedRun</h1>
          <p className="text-violet-200 mb-6">
            {TOTAL_TIME} saniyen var! Doğru cevaba +{CORRECT_TIME_BONUS} sn, yanlışa -{WRONG_TIME_PENALTY} sn.
          </p>

          <button
            onClick={startGame}
            className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-black text-xl rounded-2xl shadow-lg transform transition active:scale-95"
            style={{ touchAction: 'manipulation' }}
          >
            BAŞLA!
          </button>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setSoundOn((s) => !s)}
              className="px-4 py-2 bg-white/15 hover:bg-white/25 rounded-xl text-sm font-bold"
              style={{ touchAction: 'manipulation' }}
            >
              {soundOn ? '🔊 Ses Açık' : '🔇 Ses Kapalı'}
            </button>
          </div>

          <Link href="/" className="block mt-4 text-sm text-violet-300 hover:text-white underline">
            Ana Sayfaya Dön
          </Link>
        </div>
      )}

      {/* --- PLAYING --- */}
      {gameState === 'playing' && (
        <div className="w-full max-w-lg">
          {/* Üst Bar */}
          <div className="flex justify-between items-center mb-5 gap-3">
            <div className="bg-black/30 px-4 py-2 rounded-xl font-bold font-mono text-xl">
              Skor: <span className="text-yellow-400">{score}</span>
            </div>

            <div className="bg-black/30 px-3 py-2 rounded-xl font-bold text-sm">
              Soru: <span className="text-yellow-300">{currentIndex + 1}</span> / ∞
            </div>

            <div className={`text-3xl font-black font-mono ${timeLeft <= 10 ? 'text-red-300 animate-pulse' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Guard: ilk frame */}
          {!currentQ ? (
            <div className="bg-white/10 p-6 rounded-3xl text-center">Yükleniyor...</div>
          ) : (
            <>
              {/* Soru Kartı */}
              <div
                className={[
                  'bg-white text-slate-900 rounded-3xl p-6 shadow-2xl mb-4 min-h-[200px] flex flex-col justify-center items-center text-center relative overflow-hidden transition-all',
                  isCorrect === true ? 'ring-4 ring-green-400' : '',
                  isCorrect === false ? 'ring-4 ring-red-400' : '',
                ].join(' ')}
              >
                {/* Zaman progress bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {currentQ.category}
                </span>

                <h2 className="text-2xl font-bold leading-tight">{currentQ.question}</h2>

                {/* Feedback mini */}
                {isCorrect !== null && (
                  <div className="mt-4 text-lg font-black">
                    {isCorrect ? (
                      <span className="text-green-600">✅ Doğru! +{CORRECT_TIME_BONUS} sn</span>
                    ) : (
                      <span className="text-red-600">❌ Yanlış! -{WRONG_TIME_PENALTY} sn</span>
                    )}
                  </div>
                )}
              </div>

              {/* Seçenekler */}
              <div className="grid grid-cols-2 gap-3">
                {currentQ.options.map((opt, idx) => {
                  const chosen = selectedOption === opt;
                  const correct = isCorrect !== null && opt === currentQ.answer;
                  const wrongChosen = isCorrect === false && chosen;

                  const btnClass = [
                    'py-4 px-2 rounded-xl font-bold text-lg transition-all active:scale-95 border-2',
                    'disabled:opacity-70 disabled:cursor-not-allowed',
                    // default
                    isCorrect === null ? 'bg-white/20 hover:bg-white/40 border-white/30 text-white' : 'bg-white/15 border-white/20 text-white',
                    // after answer: correct highlight
                    correct ? 'bg-green-500/60 border-green-300' : '',
                    // after answer: wrong chosen highlight
                    wrongChosen ? 'bg-red-500/60 border-red-300' : '',
                  ].join(' ');

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      disabled={locked}
                      className={btnClass}
                      style={{ touchAction: 'manipulation' }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Alt mini kontroller */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSoundOn((s) => !s)}
                  className="px-4 py-2 bg-white/15 hover:bg-white/25 rounded-xl text-sm font-bold"
                  style={{ touchAction: 'manipulation' }}
                >
                  {soundOn ? '🔊 Ses' : '🔇 Sessiz'}
                </button>

                <button
                  onClick={() => setGameState('gameover')}
                  className="px-4 py-2 bg-black/30 hover:bg-black/40 rounded-xl text-sm font-bold"
                  style={{ touchAction: 'manipulation' }}
                >
                  Bitir
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* --- GAMEOVER --- */}
      {gameState === 'gameover' && (
        <div className="text-center max-w-md w-full bg-white text-slate-900 p-8 rounded-3xl shadow-2xl animate-in zoom-in duration-300">
          <div className="text-6xl mb-2">🏁</div>
          <h2 className="text-3xl font-black mb-1">Oyun Bitti!</h2>
          <p className="text-slate-500 mb-6">Skorun hazır 👇</p>

          <div className="bg-slate-100 p-6 rounded-2xl mb-6">
            <div className="text-sm text-slate-500 uppercase font-bold">Toplam Skor</div>
            <div className="text-5xl font-black text-violet-600">{score}</div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition"
              style={{ touchAction: 'manipulation' }}
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