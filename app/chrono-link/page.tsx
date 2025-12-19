'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowLeft, RefreshCw, Brain, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const GRID_SIZE = 25; 
const INITIAL_COUNT = 3;

export default function ChronoLinkMaster() {
  const [gameState, setGameState] = useState<'idle' | 'preview' | 'playing' | 'gameover'>('idle');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [nodes, setNodes] = useState<{ id: number; pos: number; status: 'hidden' | 'visible' | 'correct' | 'wrong' | 'hint' }[]>([]);
  const [nextExpected, setNextExpected] = useState(1);
  const [combo, setCombo] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  useEffect(() => {
    const saved = localStorage.getItem('chrono-link-best');
    if (saved) setBestScore(parseInt(saved));
  }, []);

  const generateLevel = useCallback((nodeCount: number, currentLevel: number) => {
    clearTimer();
    const positions = new Set<number>();
    while (positions.size < nodeCount) {
      positions.add(Math.floor(Math.random() * GRID_SIZE));
    }

    const newNodes = Array.from(positions).map((pos, index) => ({
      id: index + 1,
      pos: pos,
      status: 'visible' as const
    }));

    setNodes(newNodes);
    setNextExpected(1);
    setGameState('preview');

    const previewTime = Math.max(800, 2500 - (currentLevel * 100));
    timeoutRef.current = setTimeout(() => {
      setNodes(prev => prev.map(n => ({ ...n, status: 'hidden' })));
      setGameState('playing');
    }, previewTime);
  }, [clearTimer]);

  const startGame = () => {
    setScore(0); setLevel(1); setCombo(0); setTimeLeft(30);
    generateLevel(INITIAL_COUNT, 1);
  };

  const handleNodeClick = (nodeId: number) => {
    if (gameState !== 'playing') return;
    const clickedNode = nodes.find(n => n.id === nodeId);
    if (!clickedNode || clickedNode.status !== 'hidden') return;

    if (nodeId === nextExpected) {
      setNodes(prev => prev.map(n => n.id === nodeId ? { ...n, status: 'correct' } : n));

      if (nodeId === nodes.length) {
        setScore(prev => prev + (level * 10) + (combo * 5));
        setCombo(prev => prev + 1);
        setTimeLeft(prev => prev + 5);

        clearTimer();
        timeoutRef.current = setTimeout(() => {
          setLevel(prev => {
            const nextLevel = prev + 1;
            generateLevel(INITIAL_COUNT + Math.floor(nextLevel / 2), nextLevel);
            return nextLevel;
          });
        }, 500);
      } else {
        setNextExpected(prev => prev + 1);
      }
    } else {
      setCombo(0);
      setTimeLeft(prev => Math.max(0, prev - 5));
      setNodes(prev => prev.map(n => 
        n.id === nodeId ? { ...n, status: 'wrong' } : 
        n.id === nextExpected ? { ...n, status: 'hint' } : n
      ));

      clearTimer();
      timeoutRef.current = setTimeout(() => {
        generateLevel(nodes.length, level);
      }, 1000);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
      setBestScore(prev => {
        const next = Math.max(prev, score);
        localStorage.setItem('chrono-link-best', String(next));
        return next;
      });
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft, score]);

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

          {gameState === 'idle' && (
            <div className="text-center py-12 space-y-6">
              <div className="relative inline-block">
                <Brain size={64} className="mx-auto text-fuchsia-500 animate-pulse" />
                <Zap size={24} className="absolute -top-2 -right-2 text-amber-400 animate-bounce" />
              </div>
              <h1 className="text-6xl font-black italic tracking-tighter">CHRONO<span className="text-fuchsia-500">LINK</span></h1>
              <p className="text-zinc-500 text-sm max-w-xs mx-auto italic">Visual sensory training. Memorize, connect, evolve.</p>
              <button onClick={startGame} className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-fuchsia-500 transition-all active:scale-95 shadow-lg shadow-white/5">INITIALIZE DRILL</button>
            </div>
          )}

          {(gameState === 'preview' || gameState === 'playing') && (
            <div className="relative">
              {/* SCANNING SEQUENCE YAZISI - Grid Dışına Taşındı */}
              <AnimatePresence>
                {gameState === 'preview' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-10 left-0 right-0 flex justify-center z-10"
                  >
                    <div className="bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-400 px-4 py-1.5 rounded-full text-[10px] font-black animate-pulse uppercase tracking-[0.2em] backdrop-blur-sm">
                      Scanning Sequence...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-5 gap-3 aspect-square w-full relative">
                {Array.from({ length: GRID_SIZE }).map((_, i) => {
                  const node = nodes.find(n => n.pos === i);
                  return (
                    <div key={i} className="relative aspect-square bg-white/5 rounded-xl border border-white/10">
                      {node && (
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ 
                            scale: 1,
                            backgroundColor: 
                              node.status === 'correct' ? '#22c55e' : 
                              node.status === 'wrong' ? '#ef4444' : 
                              node.status === 'hint' ? '#eab308' :
                              node.status === 'visible' ? '#a21caf' : '#1e293b'
                          }}
                          onClick={() => handleNodeClick(node.id)}
                          disabled={gameState !== 'playing'}
                          className={`absolute inset-0 w-full h-full rounded-xl flex items-center justify-center font-black text-xl shadow-inner transition-colors ${gameState === 'preview' ? 'cursor-wait pointer-events-none' : 'cursor-pointer'}`}
                        >
                          {(node.status !== 'hidden') && node.id}
                        </motion.button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {gameState === 'gameover' && (
            <div className="text-center py-8">
              <AlertCircle size={48} className="mx-auto text-red-500 mb-4 animate-bounce" />
              <h2 className="text-4xl font-black italic mb-6 uppercase tracking-tighter">Neural Link Severed</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800 p-4 rounded-2xl border border-zinc-700">
                  <p className="text-[10px] text-zinc-500 font-black uppercase mb-1">Potential</p>
                  <p className="text-3xl font-black text-fuchsia-400">{score}</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-2xl border border-zinc-700">
                  <p className="text-[10px] text-zinc-500 font-black uppercase mb-1">Neural Peak</p>
                  <p className="text-3xl font-black text-white italic">{bestScore}</p>
                </div>
              </div>
              <button onClick={startGame} className="w-full bg-fuchsia-600 text-white font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-fuchsia-600/20">
                <RefreshCw size={20} /> RE-INITIATE
              </button>
            </div>
          )}

          {/* Combo Indicator */}
          <AnimatePresence>
            {combo > 2 && (
              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}
                className="absolute top-28 right-0 bg-gradient-to-l from-fuchsia-600 to-transparent pl-8 pr-4 py-2 rounded-l-full font-black text-xs text-white italic">
                {combo} STREAK
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
