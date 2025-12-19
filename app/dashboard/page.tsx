'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowLeft, RefreshCw, Star, AlertCircle } from 'lucide-react';
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
  
  const [currentTask, setCurrentTask] = useState({
    text: '',
    textColor: '',
    mode: '', 
    correctAnswer: '',
    isFlipped: false,
    isGhost: false
  });

  const generateTask = useCallback((currentLevel: number) => {
    const textObj = COLORS[Math.floor(Math.random() * COLORS.length)];
    const colorObj = COLORS[Math.floor(Math.random() * COLORS.length)];
    const mode = MODES[Math.floor(Math.random() * MODES.length)];

    // Katmanlı Zorluk Mantığı
    setCurrentTask({
      text: textObj.name,
      textColor: colorObj.value,
      mode: mode,
      correctAnswer: mode === 'MEANING' ? textObj.value : colorObj.value,
      isFlipped: currentLevel >= 4 && Math.random() > 0.5, // Level 4+ Ters dönme ihtimali
      isGhost: currentLevel >= 7 && Math.random() > 0.6   // Level 7+ Kaybolma ihtimali
    });
  }, []);

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setTimeLeft(30);
    setGameState('playing');
    generateTask(1);
  };

  const handleAnswer = (colorValue: string) => {
    if (colorValue === currentTask.correctAnswer) {
      const newScore = score + 10;
      setScore(newScore);
      
      // Her 50 puanda (5 doğru) Level Atla
      if (newScore > 0 && newScore % 50 === 0) {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setShowLevelUp(true);
        setTimeLeft(prev => prev + 10); // Level bonus süresi
        setTimeout(() => setShowLevelUp(false), 1500);
      }
      
      generateTask(level);
    } else {
      setTimeLeft(t => Math.max(0, t - 4)); // Yanlışta daha ağır ceza
      generateTask(level);
    }
  };

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
    }
  }, [gameState, timeLeft]);

  return (
    <main className="min-h-screen bg-[#050505] text-white py-12 px-4 font-sans overflow-hidden">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} /> Exit to Menu
        </Link>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-8 shadow-2xl relative">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
            <motion.div 
              className="h-full bg-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${(score % 50) * 2}%` }}
            />
          </div>

          {/* Level Pop-up */}
          <AnimatePresence>
            {showLevelUp && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-cyan-500/10 backdrop-blur-md rounded-[3rem]"
              >
                <Star className="text-cyan-400 w-20 h-20 mb-4 fill-cyan-400" />
                <h2 className="text-4xl font-black text-cyan-400">LEVEL {level}</h2>
                <p className="text-white font-bold uppercase tracking-widest mt-2">Challenge Increased!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HUD */}
          <div className="flex justify-between items-center mb-10">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Current Level</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xl font-black">Lvl {level}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-zinc-800 px-4 py-2 rounded-2xl border border-zinc-700 text-center min-w-[80px]">
                <Timer size={14} className="mx-auto mb-1 text-red-400" />
                <span className="font-black">{timeLeft}s</span>
              </div>
              <div className="bg-zinc-800 px-4 py-2 rounded-2xl border border-zinc-700 text-center min-w-[80px]">
                <Trophy size={14} className="mx-auto mb-1 text-amber-400" />
                <span className="font-black">{score}</span>
              </div>
            </div>
          </div>

          {gameState === 'playing' && (
            <div className="space-y-12 min-h-[400px] flex flex-col justify-center">
              <div className="text-center space-y-8">
                <motion.div
                  key={currentTask.mode}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase"
                >
                  {currentTask.isGhost && <AlertCircle size={12} className="text-purple-400" />}
                  {currentTask.mode === 'MEANING' ? 'Identify the Word' : 'Identify the Color'}
                </motion.div>
                
                <div className="relative h-32 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={`${currentTask.text}-${currentTask.textColor}`}
                      initial={{ y: 20, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1, 
                        scale: 1,
                        rotate: currentTask.isFlipped ? 180 : 0 
                      }}
                      exit={{ y: -20, opacity: 0, scale: 1.2 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        opacity: { duration: currentTask.isGhost ? 0.8 : 0.2 } 
                      }}
                      className="text-7xl font-black tracking-tighter"
                      style={{ color: currentTask.textColor }}
                    >
                      {currentTask.text}
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 relative z-10">
                {COLORS.map((color, idx) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(color.value)}
                    className="h-20 rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors flex items-center justify-center group"
                  >
                    <div className="w-8 h-8 rounded-full shadow-lg group-hover:shadow-white/10 transition-transform group-hover:scale-110" style={{ backgroundColor: color.value }} />
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Idle and Gameover states same as before but styled for global version */}
          {gameState === 'idle' && (
            <div className="text-center py-20">
              <h1 className="text-6xl font-black mb-4">COLOR<br/><span className="text-cyan-500 font-outline-2">LOGIC</span></h1>
              <p className="text-zinc-500 mb-10 max-w-xs mx-auto text-sm">A multi-layered cognitive challenge. Rules change as you level up.</p>
              <button onClick={startGame} className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-cyan-400 transition-all shadow-xl shadow-white/5">START DRILL</button>
            </div>
          )}

          {gameState === 'gameover' && (
             <div className="text-center py-10">
                <h2 className="text-5xl font-black mb-6">TERMINATED</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-zinc-800/50 p-6 rounded-3xl">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Score</p>
                    <p className="text-4xl font-black text-cyan-500">{score}</p>
                  </div>
                  <div className="bg-zinc-800/50 p-6 rounded-3xl">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Max Level</p>
                    <p className="text-4xl font-black">{level}</p>
                  </div>
                </div>
                <button onClick={startGame} className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-2">
                  <RefreshCw size={20} /> REBOOT DRILL
                </button>
             </div>
          )}
        </div>
      </div>
    </main>
  );
}
