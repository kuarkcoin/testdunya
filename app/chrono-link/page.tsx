'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowLeft, RefreshCw, Brain, Sparkles, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';

// Oyun Ayarları
const INITIAL_COUNT = 3; // Başlangıçta 3 sayı
const GRID_SIZE = 25; // 5x5 grid

export default function ChronoLinkPage() {
  const [gameState, setGameState] = useState<'idle' | 'preview' | 'playing' | 'gameover'>('idle');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [nodes, setNodes] = useState<{ id: number, pos: number, status: 'hidden' | 'visible' | 'correct' | 'wrong' }[]>([]);
  const [nextExpected, setNextExpected] = useState(1);
  const [combo, setCombo] = useState(0);

  // Rastgele benzersiz pozisyonlar üret
  const generateLevel = useCallback((nodeCount: number) => {
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

    // 2 saniye sonra sayıları gizle
    setTimeout(() => {
      setNodes(prev => prev.map(n => ({ ...n, status: 'hidden' })));
      setGameState('playing');
    }, Math.max(800, 2500 - (level * 100))); // Level arttıkça önizleme süresi kısalır
  }, [level]);

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setTimeLeft(30);
    setCombo(0);
    generateLevel(INITIAL_COUNT);
  };

  const handleNodeClick = (clickedNode: typeof nodes[0]) => {
    if (gameState !== 'playing' || clickedNode.status !== 'hidden') return;

    if (clickedNode.id === nextExpected) {
      // Doğru Seçim
      setNodes(prev => prev.map(n => 
        n.id === clickedNode.id ? { ...n, status: 'correct' } : n
      ));
      
      const isLast = clickedNode.id === nodes.length;
      
      if (isLast) {
        // Bölüm Tamamlandı
        setScore(prev => prev + (level * 10) + (combo * 5));
        setCombo(prev => prev + 1);
        setTimeLeft(prev => prev + 5);
        
        setTimeout(() => {
          const nextLevel = level + 1;
          setLevel(nextLevel);
          generateLevel(INITIAL_COUNT + Math.floor(nextLevel / 2));
        }, 500);
      } else {
        setNextExpected(prev => prev + 1);
      }
    } else {
      // Yanlış Seçim
      setNodes(prev => prev.map(n => 
        n.id === clickedNode.id ? { ...n, status: 'wrong' } : n
      ));
      setCombo(0);
      setTimeLeft(prev => Math.max(0, prev - 3));
      
      // Sayıları kısa süreliğine göster ve turu resetle
      setTimeout(() => {
        generateLevel(nodes.length);
      }, 800);
    }
  };

  useEffect(() => {
    if ((gameState === 'playing' || gameState === 'preview') && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameState('gameover');
    }
  }, [gameState, timeLeft]);

  return (
    <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-400 mb-6 transition-all font-bold uppercase text-xs tracking-widest">
          <ArrowLeft size={16} /> Exit to Lab
        </Link>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Header Stats */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Memory Phase</span>
              <span className="text-3xl font-black italic text-white">{level < 10 ? `0${level}` : level}</span>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-zinc-800/80 px-5 py-2 rounded-2xl border border-zinc-700 flex flex-col items-center">
                <Timer size={14} className="text-cyan-400 mb-1" />
                <span className="font-mono font-black text-xl">{timeLeft}s</span>
              </div>
              <div className="bg-zinc-800/80 px-5 py-2 rounded-2xl border border-zinc-700 flex flex-col items-center">
                <Trophy size={14} className="text-amber-400 mb-1" />
                <span className="font-mono font-black text-xl">{score}</span>
              </div>
            </div>
          </div>

          {gameState === 'idle' && (
            <div className="text-center py-16 space-y-8">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto border border-cyan-500/20">
                <Brain size={48} className="text-cyan-400" />
              </motion.div>
              <div>
                <h1 className="text-6xl font-black tracking-tighter mb-2 italic">CHRONO<span className="text-cyan-500">LINK</span></h1>
                <p className="text-zinc-500 text-sm max-w-xs mx-auto">Memorize the sequence and connect the nodes in order. Speed is key.</p>
              </div>
              <button onClick={startGame} className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-cyan-500 transition-all active:scale-95 shadow-lg shadow-white/5">
                INITIATE NEURAL LINK
              </button>
            </div>
          )}

          {(gameState === 'preview' || gameState === 'playing') && (
            <div className="relative aspect-square w-full max-w-[400px] mx-auto grid grid-cols-5 gap-3">
              {/* Arka Plan Grid Noktaları */}
              {Array.from({ length: GRID_SIZE }).map((_, i) => (
                <div key={i} className="w-full h-full rounded-xl bg-white/5 border border-white/5 flex items-center justify-center" />
              ))}

              {/* Aktif Node'lar */}
              {nodes.map((node) => (
                <motion.button
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    backgroundColor: node.status === 'correct' ? '#22c55e' : 
                                     node.status === 'wrong' ? '#ef4444' : 
                                     node.status === 'visible' ? '#06b6d4' : '#1e293b'
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    gridColumnStart: (node.pos % 5) + 1,
                    gridRowStart: Math.floor(node.pos / 5) + 1,
                  }}
                  className="absolute inset-0 w-[18%] h-[18%] m-[1%] rounded-2xl shadow-xl flex items-center justify-center text-xl font-black transition-colors"
                >
                  {(node.status === 'visible' || node.status === 'correct' || node.status === 'wrong') ? node.id : ''}
                  {node.status === 'correct' && <motion.div initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute inset-0 rounded-2xl border-4 border-green-400" />}
                </motion.button>
              ))}

              {/* Preview Overlay */}
              {gameState === 'preview' && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none flex items-center justify-center"
                >
                  <div className="bg-cyan-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 font-black tracking-widest text-xs">
                    MEMORIZING...
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {gameState === 'gameover' && (
            <div className="text-center py-10">
              <div className="inline-flex p-4 bg-red-500/10 rounded-full mb-6">
                <AlertCircle size={40} className="text-red-500" />
              </div>
              <h2 className="text-5xl font-black mb-2 italic text-white">SYSTEM FAILURE</h2>
              <p className="text-zinc-500 mb-10">Neural connection lost at Level {level}.</p>
              
              <div className="bg-zinc-800/50 p-6 rounded-[2rem] border border-zinc-700 mb-8 max-w-xs mx-auto">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Final Potential</p>
                <p className="text-5xl font-black text-cyan-400 tracking-tighter">{score}</p>
              </div>

              <button onClick={startGame} className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-cyan-500/20">
                <RefreshCw size={24} /> REBOOT SYSTEM
              </button>
            </div>
          )}

          {/* Combo Indicator */}
          <AnimatePresence>
            {combo > 2 && (
              <motion.div 
                initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-cyan-500 to-transparent pl-12 pr-4 py-2 rounded-l-full text-black font-black italic"
              >
                {combo}X STREAK
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
