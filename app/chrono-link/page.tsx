'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowLeft, RefreshCw, Brain, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';

// Ses Efektleri Fonksiyonu
const playSound = (type: 'correct' | 'wrong' | 'complete') => {
const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
const osc = ctx.createOscillator();
const gain = ctx.createGain();

osc.connect(gain);
gain.connect(ctx.destination);

if (type === 'correct') {
osc.frequency.setValueAtTime(880, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
gain.gain.setValueAtTime(0.1, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
} else if (type === 'wrong') {
osc.frequency.setValueAtTime(150, ctx.currentTime);
osc.frequency.linearRampToValueAtTime(50, ctx.currentTime + 0.2);
gain.gain.setValueAtTime(0.2, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
} else { // complete
osc.frequency.setValueAtTime(440, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
gain.gain.setValueAtTime(0.1, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
}

osc.start();
osc.stop(ctx.currentTime + 0.3);
};

export default function ChronoLinkMaster() {
const [gameState, setGameState] = useState<'idle' | 'preview' | 'playing' | 'gameover'>('idle');
const [level, setLevel] = useState(1);
const [score, setScore] = useState(0);
const [timeLeft, setTimeLeft] = useState(30);
const [nodes, setNodes] = useState<{ id: number; pos: number; status: any }[]>([]);
const [nextExpected, setNextExpected] = useState(1);
const [combo, setCombo] = useState(0);
const [bestScore, setBestScore] = useState(0);

// Dinamik Grid Ayarı: Seviye 5'ten sonra 6x6 olur
const currentGridSize = level >= 8 ? 36 : 25;
const currentGridCols = level >= 8 ? 6 : 5;

const timeoutRef = useRef<any>(null);
const nodesRef = useRef<any>([]);
const levelRef = useRef<number>(1);

useEffect(() => { nodesRef.current = nodes; }, [nodes]);
useEffect(() => { levelRef.current = level; }, [level]);

const clearTimer = useCallback(() => {
if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
}, []);

useEffect(() => {
const saved = localStorage.getItem('chrono-link-best');
if (saved) setBestScore(parseInt(saved, 10));
}, []);

const generateLevel = useCallback((requestedNodeCount: number, currentLevel: number) => {
clearTimer();
const size = currentLevel >= 8 ? 36 : 25;
const nodeCount = Math.min(requestedNodeCount, size - 1);

const positions = new Set<number>();  
while (positions.size < nodeCount) {  
  positions.add(Math.floor(Math.random() * size));  
}  

const newNodes = Array.from(positions).map((pos, index) => ({  
  id: index + 1,  
  pos,  
  status: 'visible' as const,  
}));  

setNodes(newNodes);  
setNextExpected(1);  
setGameState('preview');  

const previewTime = Math.max(800, 2500 - currentLevel * 100);  
timeoutRef.current = setTimeout(() => {  
  setNodes((prev) => prev.map((n) => ({ ...n, status: 'hidden' })));  
  setGameState('playing');  
}, previewTime);

}, [clearTimer]);

const startGame = () => {
setScore(0); setLevel(1); setCombo(0); setTimeLeft(30);
generateLevel(3, 1);
};

const handleNodeClick = (nodeId: number) => {
if (gameState !== 'playing') return;
const currentNodes = nodesRef.current;
const clickedNode = currentNodes.find((n: any) => n.id === nodeId);
if (!clickedNode || clickedNode.status !== 'hidden') return;

if (nodeId === nextExpected) {  
  playSound('correct');  
  setNodes((prev) => prev.map((n) => (n.id === nodeId ? { ...n, status: 'correct' } : n)));  

  if (nodeId === currentNodes.length) {  
    playSound('complete');  
    setScore((prev) => prev + levelRef.current * 10 + combo * 5);  
    setCombo((prev) => prev + 1);  
    setTimeLeft((prev) => prev + 5);  
    clearTimer();  
    timeoutRef.current = setTimeout(() => {  
      setLevel((prevLvl) => {  
        const nextLvl = prevLvl + 1;  
        generateLevel(3 + Math.floor(nextLvl / 2), nextLvl);  
        return nextLvl;  
      });  
    }, 500);  
  } else {  
    setNextExpected((prev) => prev + 1);  
  }  
} else {  
  playSound('wrong');  
  setCombo(0);  
  setTimeLeft((prev) => Math.max(0, prev - 5));  
  setNodes((prev) => prev.map((n) => n.id === nodeId ? { ...n, status: 'wrong' } : n.id === nextExpected ? { ...n, status: 'hint' } : n));  
  clearTimer();  
  timeoutRef.current = setTimeout(() => {  
    generateLevel(nodesRef.current.length, levelRef.current);  
  }, 900);  
}

};

useEffect(() => {
let interval: any = null;
if (gameState === 'playing' && timeLeft > 0) {
interval = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
}
if (timeLeft === 0 && gameState === 'playing') {
setGameState('gameover');
if (score > bestScore) {
setBestScore(score);
localStorage.setItem('chrono-link-best', String(score));
}
}
return () => clearInterval(interval);
}, [gameState, timeLeft, score, bestScore]);

return (
<main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 font-sans">
<div className="max-w-xl w-full">
<Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors font-bold text-xs tracking-widest uppercase">
<ArrowLeft size={16} /> Neural Link Home
</Link>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">  
        
      {/* Header HUD */}  
      <div className="flex justify-between items-center mb-10">  
        <div className="flex items-center gap-4">  
          <div>  
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Phase</p>  
            <span className="text-3xl font-black italic text-fuchsia-500">{level}</span>  
          </div>  
          {gameState === 'playing' && (  
            <div className="bg-fuchsia-500/10 px-3 py-1 rounded-lg border border-fuchsia-500/20">  
              <p className="text-[8px] font-bold text-fuchsia-400 uppercase">Target</p>  
              <p className="text-lg font-black text-white leading-none">{nextExpected}</p>  
            </div>  
          )}  
        </div>  
        <div className="flex gap-2 text-center">  
          <div className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700 w-20">  
            <Timer size={14} className="mx-auto mb-1 text-zinc-400" />  
            <span className="font-bold block">{timeLeft}s</span>  
          </div>  
          <div className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700 w-20">  
            <Trophy size={14} className="mx-auto mb-1 text-amber-500" />  
            <span className="font-bold block">{score}</span>  
          </div>  
        </div>  
      </div>  

      {(gameState === 'preview' || gameState === 'playing') && (  
        <div className="relative">  
          <AnimatePresence>  
            {gameState === 'preview' && (  
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -top-12 left-0 right-0 flex justify-center z-10">  
                <div className="bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-400 px-4 py-1.5 rounded-full text-[10px] font-black animate-pulse uppercase tracking-[0.2em] backdrop-blur-sm">  
                  Scanning Sequence...  
                </div>  
              </motion.div>  
            )}  
          </AnimatePresence>  

          <div   
            className="grid gap-3 aspect-square w-full relative"  
            style={{ gridTemplateColumns: `repeat(${currentGridCols}, minmax(0, 1fr))` }}  
          >  
            {Array.from({ length: currentGridSize }).map((_, i) => {  
              const node = nodes.find((n) => n.pos === i);  
              return (  
                <div key={i} className="relative aspect-square bg-white/5 rounded-xl border border-white/10">  
                  {node && (  
                    <motion.button  
                      initial={{ scale: 0 }}  
                      animate={{   
                        scale: 1,   
                        backgroundColor: node.status === 'correct' ? '#22c55e' : node.status === 'wrong' ? '#ef4444' : node.status === 'hint' ? '#eab308' : node.status === 'visible' ? '#a21caf' : '#1e293b'   
                      }}  
                      onClick={() => handleNodeClick(node.id)}  
                      disabled={gameState !== 'playing'}  
                      className={`absolute inset-0 w-full h-full rounded-xl flex items-center justify-center font-black text-xl shadow-inner ${gameState === 'preview' ? 'cursor-wait pointer-events-none' : 'cursor-pointer'}`}  
                    >  
                      {node.status !== 'hidden' && node.id}  
                    </motion.button>  
                  )}  
                </div>  
              );  
            })}  
          </div>  
        </div>  
      )}  

      {gameState === 'idle' && (  
        <div className="text-center py-12 space-y-6">  
          <Brain size={64} className="mx-auto text-fuchsia-500 animate-pulse" />  
          <h1 className="text-6xl font-black italic tracking-tighter">CHRONO<span className="text-fuchsia-500">LINK</span></h1>  
          <button onClick={startGame} className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-fuchsia-500 transition-all active:scale-95 shadow-lg shadow-white/5">INITIALIZE DRILL</button>  
        </div>  
      )}  

      {gameState === 'gameover' && (  
        <div className="text-center py-8">  
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4 animate-bounce" />  
          <h2 className="text-4xl font-black italic mb-6">Neural Link Severed</h2>  
          <button onClick={startGame} className="w-full bg-fuchsia-600 text-white font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-fuchsia-600/20">  
            <RefreshCw size={20} /> RE-INITIATE  
          </button>  
        </div>  
      )}  
    </div>  
  </div>  
</main>

);
}
