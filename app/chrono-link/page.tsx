'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowLeft, RefreshCw, Brain, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';

type GameState = 'idle' | 'preview' | 'playing' | 'gameover';
type SoundType = 'correct' | 'wrong' | 'complete';
type NodeStatus = 'hidden' | 'visible' | 'correct' | 'wrong' | 'hint';

type NodeItem = {
  id: number;
  pos: number;
  status: NodeStatus;
};

// ✅ Optimize Edilmiş Ses Sistemi
function useBeepSfx() {
  const ctxRef = useRef<AudioContext | null>(null);

  const ensureCtx = () => {
    if (typeof window === 'undefined') return null;
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      ctxRef.current = new Ctx();
    }
    return ctxRef.current;
  };

  const play = (type: SoundType) => {
    const ctx = ensureCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'wrong') {
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
      osc.stop(ctx.currentTime + 0.24);
    } else {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.28);
      osc.stop(ctx.currentTime + 0.3);
    }
    osc.start();
  };

  return play;
}

export default function ChronoLinkMaster() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [nodes, setNodes] = useState<NodeItem[]>([]);
  const [nextExpected, setNextExpected] = useState(1);
  const [combo, setCombo] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const playSound = useBeepSfx();

  // Dinamik Grid: Phase 8 sonrası 6x6
  const currentGridSize = level >= 8 ? 36 : 25;
  const currentGridCols = level >= 8 ? 6 : 5;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nodesRef = useRef<NodeItem[]>([]);
  const levelRef = useRef<number>(1);

  useEffect(() => { nodesRef.current = nodes; }, [nodes]);
  useEffect(() => { levelRef.current = level; }, [level]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('chrono-link-best');
    if (saved) setBestScore(parseInt(saved, 10));
  }, []);

  const generateLevel = useCallback((requestedNodeCount: number, currentLevel: number) => {
    clearTimer();
    const size = currentLevel >= 8 ? 36 : 25;
    const nodeCount = Math.max(1, Math.min(requestedNodeCount, size));
    const positions = new Set<number>();
    while (positions.size < nodeCount) {
      positions.add(Math.floor(Math.random() * size));
    }
    const newNodes: NodeItem[] = Array.from(positions).map((pos, index) => ({
      id: index + 1,
      pos,
      status: 'visible',
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

  const startGame = useCallback(() => {
    setScore(0); setLevel(1); setCombo(0); setTimeLeft(30);
    generateLevel(3, 1);
  }, [generateLevel]);

  const handleNodeClick = useCallback((nodeId: number) => {
    if (gameState !== 'playing') return;
    const currentNodes = nodesRef.current;
    const clickedNode = currentNodes.find((n) => n.id === nodeId);
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
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setCombo(0);
      setTimeLeft((prev) => Math.max(0, prev - 5));
      setNodes((prev) => prev.map((n) => n.id === nodeId ? { ...n, status: 'wrong' } : n.id === nextExpected ? { ...n, status: 'hint' } : n));
      clearTimer();
      timeoutRef.current = setTimeout(() => {
        generateLevel(nodesRef.current.length, levelRef.current);
      }, 900);
    }
  }, [gameState, nextExpected, combo, clearTimer, generateLevel, playSound]);

  useEffect(() => {
    let interval: any = null;
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    }
    if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
      setBestScore((prev) => {
        const next = Math.max(prev, score);
        localStorage.setItem('chrono-link-best', String(next));
        return next;
      });
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft, score]);

  const isCriticalTime = timeLeft <= 10 && gameState === 'playing';

  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="max-w-xl w-full">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors font-bold text-xs tracking-widest uppercase">
          <ArrowLeft size={16} /> Neural Link Home
        </Link>

        {/* Ana Oyun Paneli - Sarsıntı ve Kritik Zaman Efekti Buraya Bağlı */}
        <motion.div 
          animate={isShaking ? { x: [-12, 12, -12, 12, 0] } : {}}
          className={`bg-zinc-900/40 border transition-all duration-500 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-md relative overflow-hidden ${
            isCriticalTime ? 'border-red-500/60 shadow-[0_0_40px_rgba(239,68,68,0.2)]' : 'border-zinc-800'
          }`}
        >
          {/* Kritik Zaman Kırmızı Pulse Arka Planı */}
          {isCriticalTime && (
            <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />
          )}

          {/* Header HUD - Dinamik Paneller */}
          <div className="flex justify-between items-center mb-10 relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-zinc-800/50 px-4 py-2 rounded-2xl border border-zinc-700">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-tight">Phase</p>
                <span className="text-3xl font-black italic text-fuchsia-500">{level}</span>
              </div>
              <AnimatePresence>
                {gameState === 'playing' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className="bg-fuchsia-500/10 px-4 py-2 rounded-2xl border border-fuchsia-500/20"
                  >
                    <p className="text-[10px] font-bold text-fuchsia-400 uppercase leading-tight">Next</p>
                    <p className="text-2xl font-black text-white leading-none">{nextExpected}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex gap-3">
              <div className={`px-4 py-2 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center min-w-[80px] ${
                isCriticalTime ? 'bg-red-500/20 border-red-500' : 'bg-zinc-800/50 border-zinc-700'
              }`}>
                <Timer size={14} className={`mb-1 ${isCriticalTime ? 'text-red-500 animate-bounce' : 'text-zinc-400'}`} />
                <span className={`font-black text-xl leading-none ${isCriticalTime ? 'text-red-500' : ''}`}>{timeLeft}s</span>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-2xl border border-zinc-700 flex flex-col items-center justify-center min-w-[80px]">
                <Trophy size={14} className="mb-1 text-amber-500" />
                <span className="font-black text-xl leading-none">{score}</span>
              </div>
            </div>
          </div>

          {(gameState === 'preview' || gameState === 'playing') && (
            <div className="relative z-10">
              <AnimatePresence>
                {gameState === 'preview' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0 }} 
                    className="absolute -top-12 left-0 right-0 flex justify-center"
                  >
                    <div className="bg-fuchsia-600 border border-fuchsia-400 text-white px-5 py-2 rounded-full text-xs font-black animate-pulse uppercase tracking-[0.2em] shadow-lg shadow-fuchsia-500/20">
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
                    <div key={i} className="relative aspect-square bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                      {node && (
                        <motion.button
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: 1, 
                            opacity: 1,
                            backgroundColor: 
                              node.status === 'correct' ? '#22c55e' : 
                              node.status === 'wrong' ? '#ef4444' : 
                              node.status === 'hint' ? '#eab308' : 
                              node.status === 'visible' ? '#a21caf' : '#1e293b' 
                          }}
                          whileHover={gameState === 'playing' ? { scale: 1.05 } : {}}
                          whileTap={gameState === 'playing' ? { scale: 0.9 } : {}}
                          onClick={() => handleNodeClick(node.id)}
                          disabled={gameState !== 'playing'}
                          className={`absolute inset-0 w-full h-full rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner transition-colors ${
                            gameState === 'preview' ? 'cursor-wait pointer-events-none' : 'cursor-pointer'
                          }`}
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
            <div className="text-center py-12 space-y-8 relative z-10">
              <div className="relative inline-block">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <Brain size={80} className="text-fuchsia-500 opacity-20" />
                </motion.div>
                <Brain size={80} className="absolute inset-0 text-fuchsia-500 animate-pulse" />
                <Zap size={32} className="absolute -top-2 -right-2 text-amber-400 animate-bounce" />
              </div>
              <div>
                <h1 className="text-7xl font-black italic tracking-tighter mb-2 leading-none">
                  CHRONO<span className="text-fuchsia-500">LINK</span>
                </h1>
                <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase italic">Neural Sync Initialized</p>
              </div>
              <button 
                onClick={startGame} 
                className="w-full bg-white text-black font-black py-6 rounded-3xl text-2xl hover:bg-fuchsia-500 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 uppercase tracking-tighter"
              >
                Start Training
              </button>
            </div>
          )}

          {gameState === 'gameover' && (
            <div className="text-center py-10 space-y-8 relative z-10">
              <div className="flex flex-col items-center">
                <AlertCircle size={64} className="text-red-500 mb-4 animate-bounce" />
                <h2 className="text-5xl font-black italic uppercase tracking-tighter">Neural Link Severed</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700">
                  <p className="text-xs text-zinc-500 font-black uppercase mb-1 tracking-widest">Score</p>
                  <p className="text-4xl font-black text-fuchsia-400">{score}</p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700">
                  <p className="text-xs text-zinc-500 font-black uppercase mb-1 tracking-widest">Best</p>
                  <p className="text-4xl font-black text-white italic">{bestScore}</p>
                </div>
              </div>
              <button 
                onClick={startGame} 
                className="w-full bg-fuchsia-600 text-white font-black py-6 rounded-3xl text-2xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-2xl shadow-fuchsia-600/30 uppercase tracking-tighter"
              >
                <RefreshCw size={24} /> Re-Sync
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
