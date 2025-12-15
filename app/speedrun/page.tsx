'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Konfeti kütüphanesi
import ReactConfetti from 'react-confetti';

// --- TİP TANIMLAMALARI ---
type VocabItem = {
  word: string;
  meaning: string;
};

type GameState = 'loading' | 'idle' | 'playing' | 'finished';

// --- YARDIMCI: PENCERE BOYUTU (Konfeti İçin) ---
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Sadece client tarafında çalıştır
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

// --- YARDIMCI: KARIŞTIRMA ---
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// --- İKONLAR ---
const TimerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 1 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);
const RefreshIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
);

export default function SpeedRunPage() {
  const router = useRouter();
  const { width, height } = useWindowSize(); // Ekran boyutunu al
  
  // State
  const [gameState, setGameState] = useState<GameState>('loading');
  const [dataset, setDataset] = useState<VocabItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<VocabItem | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [combo, setCombo] = useState(0); 
  
  // Konfeti State'i
  const [showConfetti, setShowConfetti] = useState(false);

  // --- SES FONKSİYONU ---
  const playSound = (type: 'correct' | 'wrong' | 'finish') => {
    try {
      const audio = new Audio(`/sounds/${type}.mp3`);
      audio.volume = 0.5; // Ses yüksekliği ayarı (0.0 - 1.0)
      audio.play().catch((e) => console.log("Audio play prevented:", e));
    } catch (error) {
      console.error("Audio error:", error);
    }
  };
  
  // 1. Veriyi Çek (Mount anında)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/tests/IELTS_Vocabulary_Phrasal_1000_format.json');
        if (!res.ok) throw new Error('Data fetch failed');
        const data: VocabItem[] = await res.json();
        
        if (data && Array.isArray(data) && data.length > 0) {
          setDataset(data);
          setGameState('idle');
        } else {
          console.error("Data is empty or invalid format");
        }
      } catch (error) {
        console.error("Error loading vocab data:", error);
      }
    }
    fetchData();

    const savedBest = localStorage.getItem('speedrun_highscore');
    if (savedBest) setHighScore(parseInt(savedBest, 10));
  }, []);

  // 2. Sayaç (Playing durumunda)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            endGame(); // Süre bittiğinde tetikle
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, timeLeft]);

  // Oyunu Bitir
  const endGame = () => {
    setGameState('finished');
    playSound('finish'); // Bitiş sesi

    // Eğer yeni rekor varsa Konfeti patlat
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('speedrun_highscore', score.toString());
      setShowConfetti(true);
      
      // 5 saniye sonra konfetiyi durdur (performans için)
      setTimeout(() => setShowConfetti(false), 8000);
    }
  };

  // Yeni Soru Oluştur
  const generateQuestion = useCallback(() => {
    if (dataset.length === 0) return;

    const correctIndex = Math.floor(Math.random() * dataset.length);
    const correctItem = dataset[correctIndex];

    const distractors: string[] = [];
    while (distractors.length < 3) {
      const randIndex = Math.floor(Math.random() * dataset.length);
      if (randIndex !== correctIndex) {
        const wrongMeaning = dataset[randIndex].meaning;
        if (!distractors.includes(wrongMeaning)) {
          distractors.push(wrongMeaning);
        }
      }
    }

    const allOptions = shuffleArray([correctItem.meaning, ...distractors]);

    setCurrentQuestion(correctItem);
    setOptions(allOptions);
  }, [dataset]);

  // Oyunu Başlat
  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setCombo(0);
    setShowConfetti(false); // Yeni oyun başlayınca konfetiyi kapat
    setGameState('playing');
    generateQuestion();
  };

  // Cevap Verme
  const handleAnswer = (selectedMeaning: string) => {
    if (!currentQuestion) return;

    if (selectedMeaning === currentQuestion.meaning) {
      // DOĞRU
      playSound('correct'); // Tık sesi
      const points = 10 + (combo * 2);
      setScore((prev) => prev + points);
      setCombo((prev) => prev + 1);
      generateQuestion();
    } else {
      // YANLIŞ
      playSound('wrong'); // Hata sesi
      setScore((prev) => Math.max(0, prev - 5));
      setCombo(0);
      generateQuestion(); 
    }
  };

  // --- RENDER ---
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      
      {/* KONFETİ: Sadece showConfetti true ise göster */}
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false} // Sonsuza kadar yağmasın, bir kere patlasın
          numberOfPieces={500}
        />
      )}

      {/* HEADER */}
      <header className="p-4 flex items-center justify-between border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors">
          <HomeIcon className="w-5 h-5" />
          <span className="font-bold hidden sm:block">Home</span>
        </Link>

        <h1 className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
          SPEEDRUN
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Best</span>
            <span className="text-sm font-bold text-yellow-400">{highScore}</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        
        {/* Arka Plan Efekti */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* LOADING STATE */}
        {gameState === 'loading' && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-indigo-300 font-medium">Loading Dictionary...</p>
          </div>
        )}

        {/* IDLE (START) STATE */}
        {gameState === 'idle' && (
          <div className="text-center max-w-md w-full animate-in fade-in zoom-in duration-300">
            <div className="mb-8 relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75"></div>
              <div className="relative bg-slate-900 rounded-full p-6 ring-4 ring-slate-800">
                <TimerIcon className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Race?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              You have <strong className="text-white">60 seconds</strong>. 
              <br/>Match as many IELTS words as possible.
            </p>

            <button
              onClick={startGame}
              className="w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xl font-bold rounded-2xl shadow-lg shadow-indigo-900/50 transition-all transform hover:scale-105 active:scale-95"
            >
              Start Game
            </button>
          </div>
        )}

        {/* PLAYING STATE */}
        {gameState === 'playing' && currentQuestion && (
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Score & Timer Bar */}
            <div className="w-full flex items-center justify-between mb-8 md:mb-12">
              <div className="flex items-center gap-3">
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                  <span className="block text-xs text-slate-400 font-bold uppercase">Score</span>
                  <span className="text-2xl font-black text-white">{score}</span>
                </div>
                {combo > 1 && (
                  <div className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded-lg animate-bounce">
                    {combo}x Combo!
                  </div>
                )}
              </div>

              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${timeLeft <= 10 ? 'bg-red-500/10 border-red-500 text-red-500 animate-pulse' : 'bg-slate-800 border-slate-700 text-indigo-400'}`}>
                <TimerIcon className="w-6 h-6" />
                <span className="text-2xl font-mono font-bold w-12 text-center">{timeLeft}</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="w-full mb-8 text-center space-y-2">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">What does this mean?</span>
              <h3 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg break-words">
                {currentQuestion.word}
              </h3>
            </div>

            {/* Options Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className="p-5 md:p-6 rounded-xl bg-slate-800 border-2 border-slate-700 hover:bg-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white text-left text-lg font-medium transition-all active:scale-95 shadow-md hover:shadow-indigo-500/20"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FINISHED STATE */}
        {gameState === 'finished' && (
          <div className="text-center max-w-md w-full animate-in zoom-in duration-300 relative z-20">
            <div className="mb-6 inline-flex p-4 rounded-full bg-slate-800 border border-slate-700 shadow-xl">
              <TrophyIcon className="w-16 h-16 text-yellow-400" />
            </div>

            <h2 className="text-4xl font-black mb-2">Time's Up!</h2>
            
            {showConfetti ? (
               <p className="text-yellow-300 font-bold mb-8 animate-pulse text-lg">🎉 NEW HIGH SCORE! 🎉</p>
            ) : (
               <p className="text-slate-400 mb-8">Great effort. Here is your result.</p>
            )}

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Final Score</span>
                <span className="block text-3xl font-black text-indigo-400">{score}</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Best Score</span>
                <span className="block text-3xl font-black text-yellow-400">{highScore}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={startGame}
                className="w-full py-4 flex items-center justify-center gap-2 bg-white text-slate-900 text-lg font-bold rounded-xl hover:bg-indigo-50 transition-colors"
              >
                <RefreshIcon className="w-5 h-5" />
                Play Again
              </button>
              
              <Link
                href="/"
                className="block w-full py-4 text-slate-500 font-bold hover:text-white transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
