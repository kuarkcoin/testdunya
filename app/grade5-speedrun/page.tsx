'use client';

import React, { useState, useEffect, useCallback } from 'react';
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

export default function Grade5SpeedRun() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
  const [questions, setQuestions] = useState<SpeedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 Saniye Süre

  // Oyunu Başlat
  const startGame = () => {
    // Soruları karıştır ve seçeneklerini de karıştır
    const shuffledQs = shuffleArray(speedRunQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    
    setQuestions(shuffledQs);
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
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  // Cevap Verme
  const handleAnswer = (selectedOption: string) => {
    const currentQ = questions[currentIndex];
    
    if (selectedOption === currentQ.answer) {
      setScore((prev) => prev + 10); // Doğru cevap +10 Puan
    } else {
      setScore((prev) => Math.max(0, prev - 5)); // Yanlış cevap -5 Puan (Ceza)
    }

    // Sonraki soruya geç, eğer bittiyse başa dön (Sonsuz döngü için)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Sorular biterse yeniden karıştırıp devam et
      setQuestions(shuffleArray(speedRunQuestions));
      setCurrentIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-violet-600 flex flex-col items-center justify-center p-4 text-white">
      
      {/* --- MENU EKRANI --- */}
      {gameState === 'menu' && (
        <div className="text-center max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-black mb-2">5. Sınıf SpeedRun</h1>
          <p className="text-violet-200 mb-8">60 saniyen var! Matematik ve Fen sorularını ne kadar hızlı çözebilirsin?</p>
          
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

      {/* --- OYUN EKRANI --- */}
      {gameState === 'playing' && (
        <div className="w-full max-w-lg">
          {/* Üst Bilgi Barı */}
          <div className="flex justify-between items-center mb-6">
            <div className="bg-black/30 px-4 py-2 rounded-xl font-bold font-mono text-2xl">
              Skor: <span className="text-yellow-400">{score}</span>
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
              {questions[currentIndex].category}
            </span>
            <h2 className="text-2xl font-bold leading-tight">
              {questions[currentIndex].question}
            </h2>
          </div>

          {/* Seçenekler */}
          <div className="grid grid-cols-2 gap-3">
            {questions[currentIndex].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="py-4 px-2 bg-white/20 hover:bg-white/40 border-2 border-white/30 rounded-xl font-bold text-lg transition-all active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- GAMEOVER EKRANI --- */}
      {gameState === 'gameover' && (
        <div className="text-center max-w-md w-full bg-white text-slate-900 p-8 rounded-3xl shadow-2xl animate-in zoom-in duration-300">
          <div className="text-6xl mb-2">🏁</div>
          <h2 className="text-3xl font-black mb-1">Süre Bitti!</h2>
          <p className="text-slate-500 mb-6">İyi iş çıkardın.</p>
          
          <div className="bg-slate-100 p-6 rounded-2xl mb-6">
            <div className="text-sm text-slate-500 uppercase font-bold">Toplam Skor</div>
            <div className="text-5xl font-black text-violet-600">{score}</div>
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
