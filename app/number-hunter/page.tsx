'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Trophy, Timer, ArrowLeft, Globe, Medal, Undo2, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- YARDIMCI FONKSİYONLAR ---
function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Op = '+' | '-' | '*' | '/';

function applyOp(a: number, b: number, op: Op): { ok: boolean; value: number } {
  switch (op) {
    case '+': return { ok: true, value: a + b };
    case '-': return { ok: true, value: a - b };
    case '*': return { ok: true, value: a * b };
    case '/': 
      if (b === 0 || a % b !== 0) return { ok: false, value: a };
      return { ok: true, value: a / b };
    default: return { ok: false, value: a };
  }
}

// --- ANA BİLEŞEN ---
export default function NumberHunterPage() {
  const [target, setTarget] = useState<number>(24);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [used, setUsed] = useState<boolean[]>([false, false, false, false]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [operation, setOperation] = useState<Op | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [toast, setToast] = useState<string>('');
  
  // Undo için geçmiş tutma
  const [history, setHistory] = useState<{currentResult: number | null, used: boolean[], operation: Op | null}[]>([]);

  const maxNum = useMemo(() => (score > 200 ? 20 : 12), [score]);

  // Toast Mesajları
  const pushToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1500);
  }, []);

  // Level Oluşturma (Geliştirilmiş)
  const generateLevel = useCallback(() => {
    let attempts = 0;
    while (attempts < 500) {
      const nums = Array.from({ length: 4 }, () => randInt(1, maxNum));
      const idx = shuffle([0, 1, 2, 3]);
      const k = randInt(2, 4);
      let acc = nums[idx[0]];
      let possible = true;

      for (let i = 1; i < k; i++) {
        const ops: Op[] = shuffle(['+', '-', '*', '/']);
        let step = false;
        for (const o of ops) {
          const r = applyOp(acc, nums[idx[i]], o);
          if (r.ok && r.value > 0 && r.value < 300) {
            acc = r.value;
            step = true;
            break;
          }
        }
        if (!step) { possible = false; break; }
      }

      if (possible && acc > 0) {
        setNumbers(nums);
        setTarget(acc);
        setUsed([false, false, false, false]);
        setCurrentResult(null);
        setOperation(null);
        setHistory([]);
        return;
      }
      attempts++;
    }
  }, [maxNum]);

  // Oyun Kontrolleri
  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameState('playing');
    generateLevel();
  };

  const undoMove = useCallback(() => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setCurrentResult(last.currentResult);
    setUsed(last.used);
    setOperation(last.operation);
    setHistory(prev => prev.slice(0, -1));
  }, [history]);

  const handleNumberClick = (num: number, index: number) => {
    if (gameState !== 'playing' || used[index]) return;

    // Geri alma için mevcut durumu kaydet
    setHistory(prev => [...prev, { currentResult, used: [...used], operation }]);

    if (currentResult === null) {
      setCurrentResult(num);
      setUsed(prev => { const n = [...prev]; n[index] = true; return n; });
    } else if (!operation) {
      pushToast('Önce bir işlem seç!');
      setHistory(prev => prev.slice(0, -1)); // Kaydı geri al
    } else {
      const res = applyOp(currentResult, num, operation);
      if (!res.ok) {
        pushToast('Geçersiz hamle!');
        setHistory(prev => prev.slice(0, -1));
      } else {
        setUsed(prev => { const n = [...prev]; n[index] = true; return n; });
        setCurrentResult(res.value);
        setOperation(null);

        if (res.value === target) {
          setScore(s => s + 25);
          setTimeLeft(t => t + 5);
          pushToast('🎯 HEDEF VURULDU! +25');
          setTimeout(generateLevel, 500);
        }
      }
    }
  };

  // Klavye Desteği
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      if (['1','2','3','4'].includes(e.key)) handleNumberClick(numbers[parseInt(e.key)-1], parseInt(e.key)-1);
      if (['+','-','*','/'].includes(e.key)) setOperation(e.key as Op);
      if (e.key.toLowerCase() === 'z') undoMove();
      if (e.key.toLowerCase() === 'r') generateLevel();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, numbers, used, operation, currentResult, undoMove]);

  // Zamanlayıcı
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) setGameState('gameover');
  }, [gameState, timeLeft]);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white py-12 px-4 font-sans selection:bg-cyan-500/30">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Dashboard'a Dön
        </Link>

        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 p-8 relative overflow-hidden">
          {/* Toast Bildirimi */}
          <AnimatePresence>
            {toast && (
              <motion.div 
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: -50, opacity: 0 }}
                className="absolute top-5 left-1/2 -translate-x-1/2 z-50 bg-cyan-500 text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg"
              >
                {toast}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Üst Panel */}
          <div className="flex justify-between items-center mb-10">
            <div className="bg-slate-800/50 px-5 py-2 rounded-2xl border border-slate-700 flex items-center gap-3">
              <Timer className={timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-cyan-400'} />
              <span className="text-2xl font-black">{timeLeft}s</span>
            </div>
            <div className="bg-slate-800/50 px-5 py-2 rounded-2xl border border-slate-700 flex items-center gap-3">
              <Trophy className="text-amber-400" />
              <span className="text-2xl font-black">{score}</span>
            </div>
          </div>

          {gameState === 'idle' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
              <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">NUMBER HUNTER</h1>
              <button onClick={startGame} className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-6 rounded-2xl text-2xl transition-transform active:scale-95 shadow-xl shadow-cyan-500/20">OYUNA BAŞLA</button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <div className="space-y-8">
              <div className="text-center bg-slate-950 py-10 rounded-[2rem] border border-slate-800 relative">
                <span className="text-xs font-bold text-cyan-500 tracking-[0.3em]">HEDEF</span>
                <AnimatePresence mode="wait">
                  <motion.h2 
                    key={target}
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: -20, opacity: 0 }}
                    className="text-8xl font-black"
                  >
                    {target}
                  </motion.h2>
                </AnimatePresence>

                <div className="h-12 mt-4 flex justify-center items-center gap-4">
                  {currentResult !== null && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-cyan-500/10 border border-cyan-500/30 px-6 py-2 rounded-full text-cyan-400 font-black text-2xl">
                      {currentResult} <span className="text-slate-500 ml-2">{operation || '?'}</span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Sayı Butonları */}
              <div className="grid grid-cols-2 gap-4">
                {numbers.map((num, i) => (
                  <motion.button
                    key={`${target}-${i}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: used[i] ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNumberClick(num, i)}
                    disabled={used[i]}
                    className={`h-24 rounded-3xl text-4xl font-black transition-all border-2 ${
                      used[i] ? 'bg-slate-900 border-slate-800 text-slate-700 opacity-30' : 'bg-slate-800 border-slate-700 text-white hover:border-cyan-500'
                    }`}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>

              {/* İşlem Butonları */}
              <div className="flex gap-2 p-2 bg-slate-950 rounded-3xl border border-slate-800">
                {(['+', '-', '*', '/'] as Op[]).map((op) => (
                  <button
                    key={op}
                    onClick={() => setOperation(op)}
                    className={`flex-1 h-14 rounded-xl text-2xl font-black transition-colors ${operation === op ? 'bg-cyan-500 text-slate-900' : 'hover:bg-slate-800 text-cyan-500'}`}
                  >
                    {op === '*' ? '×' : op === '/' ? '÷' : op}
                  </button>
                ))}
              </div>

              {/* Alt Kontroller */}
              <div className="flex gap-4">
                <button onClick={undoMove} className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 border border-slate-700 transition-colors">
                  <Undo2 size={18} /> Geri Al (Z)
                </button>
                <button onClick={() => generateLevel()} className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 border border-slate-700 transition-colors">
                  <RotateCcw size={18} /> Pas Geç (R)
                </button>
              </div>
            </div>
          )}

          {gameState === 'gameover' && (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
              <h2 className="text-5xl font-black mb-4">SÜRE BİTTİ!</h2>
              <div className="bg-slate-800 p-8 rounded-3xl mb-8 border border-slate-700">
                <p className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">Toplam Skor</p>
                <p className="text-7xl font-black text-cyan-400">{score}</p>
              </div>
              <button onClick={startGame} className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-5 rounded-2xl text-xl transition-transform active:scale-95">TEKRAR DENE</button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
