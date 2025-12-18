'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Timer, RefreshCw, Star, ArrowLeft, Globe, Medal, User } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Global Leaderboard (Normalde DB'den çekilecek)
const GLOBAL_LEADERBOARD = [
  { id: 1, name: 'Alex_Math', score: 1250, country: '🇺🇸' },
  { id: 2, name: 'Selin_TR', score: 1180, country: '🇹🇷' },
  { id: 3, name: 'Hiroshi', score: 1120, country: '🇯🇵' },
  { id: 4, name: 'Lukas_Dev', score: 980, country: '🇩🇪' },
  { id: 5, name: 'User_99', score: 850, country: '🇫🇷' },
];

export default function NumberHunterPage() {
  const [target, setTarget] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('numberHunter_highScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  const generateLevel = useCallback(() => {
    const maxNum = score > 200 ? 20 : 12;
    const nums = Array.from({ length: 4 }, () => Math.floor(Math.random() * maxNum) + 1);
    const targetNum = (nums[0] * nums[1]) - (nums[2] + (nums[3] || 0));
    setTarget(Math.abs(targetNum) || 24);
    setNumbers(nums);
    setCurrentResult(null);
    setOperation(null);
  }, [score]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameState('playing');
    generateLevel();
  };

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('numberHunter_highScore', score.toString());
        // Burada DB'ye (Supabase/Firebase) skor gönderme fonksiyonu çağrılmalı
      }
    }
  }, [gameState, timeLeft, score, highScore]);

  const handleNumberClick = (num: number) => {
    if (gameState !== 'playing') return;
    if (currentResult === null) {
      setCurrentResult(num);
    } else if (operation) {
      let res = 0;
      switch (operation) {
        case '+': res = currentResult + num; break;
        case '-': res = currentResult - num; break;
        case '*': res = currentResult * num; break;
        case '/': res = Math.floor(currentResult / num); break;
      }
      setCurrentResult(res);
      setOperation(null);
      if (res === target) {
        setScore(prev => prev + 25);
        setTimeLeft(prev => prev + 5);
        generateLevel();
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-bold mb-8 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Dashboard
        </Link>

        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 p-8 relative">
          
          {/* Header Stats */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-2 rounded-2xl border border-slate-700">
              <Timer className="text-cyan-400 w-5 h-5" />
              <span className={`text-2xl font-black ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                {timeLeft}s
              </span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-2 rounded-2xl border border-slate-700">
              <Trophy className="text-amber-400 w-5 h-5" />
              <span className="text-2xl font-black text-white">{score}</span>
            </div>
          </div>

          {gameState === 'idle' && !showLeaderboard && (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl mx-auto mb-8">
                <Globe className="text-white w-12 h-12 -rotate-12" />
              </div>
              <h1 className="text-5xl font-black mb-4 tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                NUMBER HUNTER
              </h1>
              <p className="text-slate-400 mb-10 text-lg">Global Math Challenge: Reach the target!</p>
              
              <div className="flex gap-4 mb-6">
                <button onClick={startGame} className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-5 rounded-2xl transition-all active:scale-95 text-xl">
                  PLAY NOW
                </button>
                <button onClick={() => setShowLeaderboard(true)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-black py-5 rounded-2xl border border-slate-700 transition-all">
                  LEADERBOARD
                </button>
              </div>
              <p className="text-slate-500 text-sm">Personal Best: <span className="text-cyan-400 font-bold">{highScore}</span></p>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="space-y-8 animate-in slide-in-from-bottom-4">
              <div className="text-center bg-slate-950 py-12 rounded-[2rem] border border-slate-800 shadow-inner">
                <p className="text-xs font-bold text-cyan-500 uppercase tracking-[0.3em] mb-3">TARGET NUMBER</p>
                <h2 className="text-9xl font-black tracking-tighter text-white">{target}</h2>
                <div className="mt-8 h-10">
                  {currentResult !== null && (
                    <div className="inline-flex items-center gap-4 bg-cyan-500/10 px-8 py-2 rounded-full border border-cyan-500/20 text-cyan-400">
                      <span className="text-3xl font-black">{currentResult}</span>
                      <span className="text-white opacity-40 text-2xl">{operation || '?'}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {numbers.map((num, i) => (
                  <button key={i} onClick={() => handleNumberClick(num)} className="h-24 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 rounded-3xl text-4xl font-black text-white transition-all active:scale-90 active:bg-cyan-600">
                    {num}
                  </button>
                ))}
              </div>

              <div className="flex justify-between gap-3 p-2 bg-slate-950 rounded-3xl border border-slate-800">
                {['+', '-', '*', '/'].map((op) => (
                  <button key={op} onClick={() => setOperation(op)} className={`flex-1 h-16 rounded-2xl text-3xl font-black transition-all ${operation === op ? 'bg-cyan-500 text-slate-900' : 'text-cyan-500 hover:bg-slate-800'}`}>
                    {op === '*' ? '×' : op === '/' ? '÷' : op}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showLeaderboard && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black flex items-center gap-2">
                  <Medal className="text-amber-400" /> GLOBAL RANKINGS
                </h2>
                <button onClick={() => setShowLeaderboard(false)} className="text-slate-400 hover:text-white">Close</button>
              </div>
              <div className="space-y-3">
                {GLOBAL_LEADERBOARD.map((user, idx) => (
                  <div key={user.id} className={`flex items-center justify-between p-4 rounded-2xl border ${idx === 0 ? 'bg-amber-400/10 border-amber-400/50' : 'bg-slate-800/50 border-slate-700'}`}>
                    <div className="flex items-center gap-4">
                      <span className={`w-8 font-black ${idx === 0 ? 'text-amber-400' : 'text-slate-500'}`}>#{idx + 1}</span>
                      <span className="text-lg">{user.country}</span>
                      <span className="font-bold">{user.name}</span>
                    </div>
                    <span className="font-black text-cyan-400">{user.score}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowLeaderboard(false)} className="w-full mt-8 py-4 bg-slate-800 rounded-2xl font-bold">Back to Menu</button>
            </div>
          )}

          {gameState === 'gameover' && (
            <div className="text-center py-10 animate-in zoom-in">
              <h2 className="text-5xl font-black text-white mb-2">TIME'S UP!</h2>
              <p className="text-slate-400 mb-10">Incredible effort, Hunter!</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-slate-800 p-6 rounded-[2rem] border border-slate-700">
                  <p className="text-xs font-bold text-cyan-500 uppercase mb-1">Score</p>
                  <p className="text-5xl font-black">{score}</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-[2rem] border border-slate-700">
                  <p className="text-xs font-bold text-amber-500 uppercase mb-1">Best</p>
                  <p className="text-5xl font-black">{highScore}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={startGame} className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-5 rounded-2xl shadow-xl transition-all active:scale-95 text-xl">
                  TRY AGAIN
                </button>
                <button onClick={() => setShowLeaderboard(true)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-black py-5 rounded-2xl border border-slate-700 transition-all">
                  RANKINGS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
