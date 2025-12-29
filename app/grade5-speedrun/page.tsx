'use client';

import React, { useState, useEffect } from 'react';
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

// Soruları + seçenekleri birlikte karıştır
function makeShuffledQuestions(): SpeedQuestion[] {
  return shuffleArray(speedRunQuestions).map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}

export default function Grade5SpeedRun() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
  const [questions, setQuestions] = useState<SpeedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  // (2) High score
  const [highScore, setHighScore] = useState(0);
  const HIGH_SCORE_KEY = 'grade5_speedrun_highscore';

  // (3) Konfeti (200ms)
  const [showConfetti, setShowConfetti] = useState(false);

  // High score'u ilk açılışta oku
  useEffect(() => {
    try {
      const saved = localStorage.getItem(HIGH_SCORE_KEY);
      setHighScore(saved ? parseInt(saved, 10) || 0 : 0);
    } catch {
      setHighScore(0);
    }
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    window.setTimeout(() => setShowConfetti(false), 200);
  };

  // Oyunu Başlat
  const startGame = () => {
    setQuestions(makeShuffledQuestions());
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(60);
    setGameState('playing');
  };

  // Zamanlayıcı
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

  // Oyun bittiğinde high score güncelle
  useEffect(() => {
    if (gameState !== 'gameover') return;

    if (score > highScore) {
      setHighScore(score);
      try {
        localStorage.setItem(HIGH_SCORE_KEY, String(score));
      } catch {
        // localStorage kapalı olabilir, sorun değil
      }
    }
  }, [gameState, score, highScore]);

  // Cevap Verme
  const handleAnswer = (selectedOption: string) => {
    // (1) Crash guard: questions yoksa işlem yapma
    if (!questions.length) return;

    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    if (selectedOption === currentQ.answer) {
      setScore(prev => prev + 10);
      triggerConfetti(); // (3) doğru cevapta konfeti
    } else {
      setScore(prev => Math.max(0, prev - 5));
    }

    // Sonraki soru / yeniden karıştır
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuestions(makeShuffledQuestions()); // options da karışır ✅
      setCurrentIndex(0);
    }
  };

  // (1) Crash guard: playing'e geçince questions henüz dolmamış olabilir
  const isLoadingQuestion = gameState === 'playing' && questions.length === 0;

  return (
    <div className="min-h-screen bg-violet-600 flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">

      {/* Konfeti overlay */}
      {showConfetti && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="confetti-burst text-5xl">🎉✨🎊</div>
          <style jsx>{`
            .confetti-burst {
              animation: pop 200ms ease-out both;
            }
            @keyframes pop {
              from { transform: scale(0.6); opacity: 0.2; }
              to   { transform: scale(1.3); opacity: 1; }
            }
          `}</style>
        </div>
      )}

      {/* --- MENU --- */}
      {gameState === 'menu' && (
        <div className="text-center max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl relative">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-black mb-2">5. Sınıf SpeedRun</h1>
          <p className="text-violet-200 mb-4">
            60 saniyen var! Matematik ve Fen sorularını ne kadar hızlı çözebilirsin?
          </p>

          {/* (2) High score göster */}
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

      {/* --- PLAYING --- */}
      {gameState === 'playing' && (
        <div className="w-full max-w-lg">
          {/* Loading guard */}
          {isLoadingQuestion ? (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl text-center">
              <div className="text-4xl mb-2">⏳</div>
              <div className="font-bold">Sorular hazırlanıyor…</div>
            </div>
          ) : (
            <>
              {/* Üst Bilgi */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-black/30 px-4 py-2 rounded-xl font-bold font-mono text-2xl">
                  Skor: <span className="text-yellow-400">{score}</span>
                </div>

                {/* High score küçük gösterim */}
                <div className="bg-black/20 px-3 py-2 rounded-xl font-bold text-sm">
                  Rekor: <span className="text-yellow-300">{highScore}</span>
                </div>

                <div className={`text-3xl font-black font-mono ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </div>
              </div>

              {/* Soru Kartı */}
              <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-2xl mb-4 min-h-[200px] flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
                    style={{ width: `${(timeLeft / 60) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {questions[currentIndex]?.category}
                </span>
                <h2 className="text-2xl font-bold leading-tight">
                  {questions[currentIndex]?.question}
                </h2>
              </div>

              {/* Seçenekler */}
              <div className="grid grid-cols-2 gap-3">
                {(questions[currentIndex]?.options ?? []).map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    className="py-4 px-2 bg-white/20 hover:bg-white/40 border-2 border-white/30 rounded-xl font-bold text-lg transition-all active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* --- GAMEOVER --- */}
      {gameState === 'gameover' && (
        <div className="text-center max-w-md w-full bg-white text-slate-900 p-8 rounded-3xl shadow-2xl animate-in zoom-in duration-300">
          <div className="text-6xl mb-2">🏁</div>
          <h2 className="text-3xl font-black mb-1">Süre Bitti!</h2>
          <p className="text-slate-500 mb-6">İyi iş çıkardın.</p>

          <div className="bg-slate-100 p-6 rounded-2xl mb-4">
            <div className="text-sm text-slate-500 uppercase font-bold">Toplam Skor</div>
            <div className="text-5xl font-black text-violet-600">{score}</div>
          </div>

          {/* (2) High score alanı */}
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
            <Link href="/" className="block py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl transition">
              Ana Sayfa
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}