'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowLeft, RefreshCw, Star, Zap, AlertCircle, ListOrdered } from 'lucide-react';
import Link from 'next/link';

const COLORS = [
  { name: 'RED', value: '#ef4444' },
  { name: 'BLUE', value: '#3b82f6' },
  { name: 'GREEN', value: '#22c55e' },
  { name: 'YELLOW', value: '#eab308' },
  { name: 'PURPLE', value: '#a855f7' },
  { name: 'WHITE', value: '#ffffff' },
];

const MODES = ['COLOR', 'MEANING'];

export default function ColorLogicPage() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [combo, setCombo] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [leaderboard, setLeaderboard] = useState<{score: number, date: string}[]>([]);
  const lastSuccessTime = useRef(Date.now());
  
  const [currentTask, setCurrentTask] = useState({
    text: '',
    textColor: '',
    mode: '', 
    correctAnswer: '',
    isFlipped: false,
    isGhost: false
  });

  // Liderlik Tablosunu Yükle
  useEffect(() => {
    const saved = localStorage.getItem('color-logic-scores');
    if (saved) setLeaderboard(JSON.parse(saved));
  }, []);

  const generateTask = useCallback((currentLevel: number) => {
    const textObj = COLORS[Math.floor(Math.random() * COLORS.length)];
    const colorObj = COLORS[Math.floor(Math.random() * COLORS.length)];
    const mode = MODES[Math.floor(Math.random() * MODES.length)];

    setCurrentTask({
      text: textObj.name,
      textColor: colorObj.value,
      mode: mode,
      correctAnswer: mode === 'MEANING' ? textObj.value : colorObj.value,
      isFlipped: currentLevel >= 4 && Math.random() > 0.4,
      isGhost: currentLevel >= 6 && Math.random() > 0.5
    });
  }, []);

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setCombo(0);
    setTimeLeft(30);
    setGameState('playing');
    generateTask(1);
  };

  const saveScore = useCallback((finalScore: number) => {
    const newEntry = { score: finalScore, date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() };
    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); 
    
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('color-logic-scores', JSON.stringify(updatedLeaderboard));
  }, [leaderboard]);

  const handleAnswer = (colorValue: string) => {
    if (colorValue === currentTask.correctAnswer) {
      const now = Date.now();
      const timeDiff = now - lastSuccessTime.current;
      lastSuccessTime.current = now;

      const newCombo = timeDiff < 1500 ? combo + 1 : 0;
      setCombo(newCombo);

      const points = 10 + (newCombo * 2);
      const newScore = score + points;
      setScore(newScore);
      
      if (newScore > 0 && Math.floor(newScore / 100) > level - 1) {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setShowLevelUp(true);
        setTimeLeft(prev => prev + 8);
        setTimeout(() => setShowLevelUp(false), 1200);
      }
      generateTask(level);
    } else {
      setIsShaking(true);
      setCombo(0);
      setTimeLeft(t => Math.max(0, t - 5));
      setTimeout(() => setIsShaking(false), 500);
      generateTask(level);
    }
  };

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
      saveScore(score);
    }
  }, [gameState, timeLeft, score, saveScore]);

  return (
    <main className={`min-h-screen transition-colors duration-500 flex items-center justify-center p-4 font-sans overflow-hidden ${combo > 3 ? 'bg-cyan-950/20' : 'bg-[#050505]'}`}>
      <div className="max-w-xl w-full">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={18} /> Exit
        </Link>

        <motion.div 
          animate={isShaking ? { x: [-10, 10, -10, 10, 0], backgroundColor: 'rgba(239, 68, 68, 0.1)' } : {}}
          className="bg-zinc-900/60 border border-zinc-800 rounded-[2.5rem] p-8 shadow-2xl relative backdrop-blur-sm"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
            <motion.div 
              className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${(score % 100)}%` }}
            />
          </div>

          <AnimatePresence>
            {showLevelUp && (
              <motion.div 
                initial={{ scale: 0, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-cyan-500/20 backdrop-blur-xl rounded-[2.5rem]"
              >
                <Star className="text-cyan-400 w-24 h-24 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                <h2 className="text-5xl font-black text-white italic tracking-tighter">LEVEL UP!</h2>
                <p className="text-cyan-300 font-black tracking-[0.4em]">+8s BONUS</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center mb-10">
            <div className="text-left">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Phase</p>
              <span className="text-2xl font-black text-white italic">0{level}</span>
            </div>

            <AnimatePresence>
              {combo > 1 && (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center gap-1 bg-cyan-500 text-black px-4 py-1 rounded-full font-black text-xs shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                >
                  <Zap size={12} fill="currentColor" /> {combo}X COMBO
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-2">
              <div className="bg-zinc-800/80 px-4 py-2 rounded-xl border border-zinc-700">
                <Timer size={14} className={`mx-auto mb-1 ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-zinc-400'}`} />
                <span className="font-mono font-bold text-lg">{timeLeft}s</span>
              </div>
              <div className="bg-zinc-800/80 px-4 py-2 rounded-xl border border-zinc-700">
                <Trophy size={14} className="mx-auto mb-1 text-amber-500" />
                <span className="font-mono font-bold text-lg">{score}</span>
              </div>
            </div>
          </div>

          {gameState === 'playing' && (
            <div className="space-y-10 min-h-[420px] flex flex-col justify-center">
              <div className="text-center space-y-6">
                <motion.div
                  key={currentTask.mode}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-5 py-1.5 rounded-full bg-zinc-800 text-[10px] font-black tracking-[0.2em] text-cyan-500 uppercase border border-cyan-500/20"
                >
                  {currentTask.isGhost && <AlertCircle size={12} className="inline mr-1 text-purple-400" />}
                  {currentTask.mode === 'MEANING' ? 'Read the Text' : 'Focus on Color'}
                </motion.div>
                
                <div className="relative h-40 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={`${currentTask.text}-${currentTask.textColor}`}
                      initial={{ y: 30, opacity: 0, scale: 0.7, filter: 'blur(10px)' }}
                      animate={{ 
                        y: 0, 
                        opacity: 1, 
                        scale: 1,
                        filter: 'blur(0px)',
                        rotate: currentTask.isFlipped ? 180 : 0 
                      }}
                      exit={{ y: -30, opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25,
                        opacity: { duration: currentTask.isGhost ? 0.7 : 0.2 } 
                      }}
                      className="text-7xl md:text-8xl font-black tracking-tighter"
                      style={{ color: currentTask.textColor }}
                    >
                      {currentTask.text}
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {COLORS.map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.05, borderColor: color.value }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAnswer(color.value)}
                    className="h-20 rounded-2xl border-2 border-zinc-800 bg-zinc-900/40 flex items-center justify-center transition-colors group"
                  >
                    <div 
                      className="w-10 h-10 rounded-full shadow-lg transition-transform group-hover:scale-110" 
                      style={{ backgroundColor: color.value }} 
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {gameState === 'idle' && (
            <div className="text-center py-16">
              <h1 className="text-7xl font-black tracking-tighter italic mb-4">
                COLOR<br/><span className="text-cyan-500 font-outline-2">PRO</span>
              </h1>
              <p className="text-zinc-500 mb-10 text-sm italic">High-speed neural training.</p>
              <button 
                onClick={startGame} 
                className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-cyan-500 transition-all shadow-xl"
              >
                ENGAGE DRILL
              </button>
            </div>
          )}

          {gameState === 'gameover' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
              <h2 className="text-5xl font-black mb-4 italic">TERMINATED</h2>
              
              <div className="bg-zinc-800/40 p-6 rounded-3xl border border-zinc-700 mb-6">
                 <div className="flex items-center gap-2 mb-4 text-cyan-400 font-bold text-xs tracking-widest">
                  <ListOrdered size={16}/> TOP SCORES
                </div>
                <div className="space-y-3">
                  {leaderboard.length > 0 ? leaderboard.map((entry, i) => (
                    <div key={i} className="flex justify-between items-center text-sm bg-black/20 p-2 rounded-lg border border-white/5">
                      <span className="text-zinc-500 text-[10px]">{entry.date}</span>
                      <span className={`font-black ${i === 0 ? 'text-amber-400 scale-110' : 'text-white'}`}>
                        {entry.score} <span className="text-[10px] opacity-50">PTS</span>
                      </span>
                    </div>
                  )) : <p className="text-zinc-600 text-xs italic">No records yet.</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-800/40 py-4 rounded-2xl border border-zinc-700">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Score</p>
                  <p className="text-3xl font-black text-cyan-400">{score}</p>
                </div>
                <div className="bg-zinc-800/40 py-4 rounded-2xl border border-zinc-700">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Level</p>
                  <p className="text-3xl font-black">{level}</p>
                </div>
              </div>

              <button onClick={startGame} className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-3">
                <RefreshCw size={24} /> RESTART LINK
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
