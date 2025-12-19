'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Timer,
  Trophy,
  RefreshCw,
  Brain,
  AlertCircle,
  ArrowLeft,
  Heart,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

type GameState = 'idle' | 'preview' | 'playing' | 'between' | 'gameover';
type NodeStatus = 'visible' | 'hidden' | 'correct' | 'wrong' | 'hint';

type Difficulty = 'easy' | 'normal' | 'hard' | 'expert';

type NodeItem = {
  id: number; // 1..N
  pos: number; // grid index
  status: NodeStatus;
};

type Pt = { x: number; y: number };

const playSound = (type: 'correct' | 'wrong' | 'complete') => {
  if (typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.11);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'wrong') {
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.start();
      osc.stop(ctx.currentTime + 0.23);
    } else {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
    setTimeout(() => ctx.close?.(), 350);
  } catch {}
};

const DIFF: Record<
  Difficulty,
  {
    label: string;
    basePreviewMs: number;
    timeStart: number;
    lifeStart: number;
    wrongPenalty: number; // seconds
    passBonus: number; // seconds
    comboBonus: number; // score multiplier-ish
    nodeGrowth: (level: number) => number;
  }
> = {
  easy: {
    label: 'Easy',
    basePreviewMs: 2600,
    timeStart: 35,
    lifeStart: 4,
    wrongPenalty: 4,
    passBonus: 6,
    comboBonus: 4,
    nodeGrowth: (lvl) => 3 + Math.floor(lvl / 2),
  },
  normal: {
    label: 'Normal',
    basePreviewMs: 2300,
    timeStart: 30,
    lifeStart: 3,
    wrongPenalty: 5,
    passBonus: 5,
    comboBonus: 5,
    nodeGrowth: (lvl) => 3 + Math.floor(lvl / 2),
  },
  hard: {
    label: 'Hard',
    basePreviewMs: 2000,
    timeStart: 28,
    lifeStart: 3,
    wrongPenalty: 6,
    passBonus: 4,
    comboBonus: 6,
    nodeGrowth: (lvl) => 4 + Math.floor(lvl / 2),
  },
  expert: {
    label: 'Expert',
    basePreviewMs: 1700,
    timeStart: 25,
    lifeStart: 2,
    wrongPenalty: 7,
    passBonus: 3,
    comboBonus: 7,
    nodeGrowth: (lvl) => 5 + Math.floor(lvl / 2),
  },
};

export default function ChronoLinkMaster() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');

  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(DIFF[difficulty].timeStart);
  const [lives, setLives] = useState(DIFF[difficulty].lifeStart);

  const [nodes, setNodes] = useState<NodeItem[]>([]);
  const [nextExpected, setNextExpected] = useState(1);
  const [combo, setCombo] = useState(0);

  // doğru tıklanan noktaların yolu
  const [path, setPath] = useState<number[]>([]); // node ids in order

  // level hatasız mı?
  const [perfectThisLevel, setPerfectThisLevel] = useState(true);

  // Grid 5x5 -> 6x6
  const currentGridSize = level >= 8 ? 36 : 25;
  const currentGridCols = level >= 8 ? 6 : 5;

  // refs
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nodesRef = useRef<NodeItem[]>([]);
  const levelRef = useRef<number>(1);
  const gameStateRef = useRef<GameState>('idle');
  const timeLeftRef = useRef<number>(timeLeft);
  const livesRef = useRef<number>(lives);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<Record<number, HTMLDivElement | null>>({}); // gridIndex -> cell div
  const [centers, setCenters] = useState<Record<number, Pt>>({}); // nodeId -> center point

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);
  useEffect(() => {
    levelRef.current = level;
  }, [level]);
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);
  useEffect(() => {
    livesRef.current = lives;
  }, [lives]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // best score
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('chrono-link-best');
    if (saved) setBestScore(parseInt(saved, 10) || 0);
  }, []);

  const previewMs = useMemo(() => {
    const base = DIFF[difficulty].basePreviewMs;
    // seviye arttıkça preview kısalsın
    return Math.max(700, base - level * 110);
  }, [difficulty, level]);

  const computeCenters = useCallback(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;

    const gridRect = gridEl.getBoundingClientRect();
    const map: Record<number, Pt> = {};

    for (const n of nodesRef.current) {
      const cell = cellRefs.current[n.pos];
      if (!cell) continue;
      const r = cell.getBoundingClientRect();
      map[n.id] = {
        x: (r.left + r.right) / 2 - gridRect.left,
        y: (r.top + r.bottom) / 2 - gridRect.top,
      };
    }
    setCenters(map);
  }, []);

  // Resize/scroll changes -> recalc centers
  useEffect(() => {
    const onResize = () => computeCenters();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [computeCenters]);

  // when nodes/gameState changes, recalc after paint
  useEffect(() => {
    const t = setTimeout(() => computeCenters(), 0);
    return () => clearTimeout(t);
  }, [nodes, gameState, level, computeCenters]);

  const generateLevel = useCallback(
    (nodeCountWanted: number, currentLevel: number) => {
      clearTimer();

      const size = currentLevel >= 8 ? 36 : 25;
      const nodeCount = Math.min(nodeCountWanted, size - 1);

      const positions = new Set<number>();
      while (positions.size < nodeCount) positions.add(Math.floor(Math.random() * size));

      const newNodes: NodeItem[] = Array.from(positions).map((pos, index) => ({
        id: index + 1,
        pos,
        status: 'visible',
      }));

      setNodes(newNodes);
      setNextExpected(1);
      setPath([]);
      setPerfectThisLevel(true);
      setGameState('preview');

      timeoutRef.current = setTimeout(() => {
        setNodes((prev) => prev.map((n) => ({ ...n, status: 'hidden' })));
        setGameState('playing');
      }, Math.max(600, DIFF[difficulty].basePreviewMs - currentLevel * 110));
    },
    [clearTimer, difficulty]
  );

  const startGame = useCallback(() => {
    clearTimer();
    setScore(0);
    setLevel(1);
    setCombo(0);
    setPath([]);
    setPerfectThisLevel(true);

    setTimeLeft(DIFF[difficulty].timeStart);
    setLives(DIFF[difficulty].lifeStart);

    generateLevel(DIFF[difficulty].nodeGrowth(1), 1);
  }, [generateLevel, clearTimer, difficulty]);

  const finishGame = useCallback(() => {
    setGameState('gameover');
    clearTimer();

    setBestScore((prev) => {
      const next = Math.max(prev, score);
      if (typeof window !== 'undefined') {
        localStorage.setItem('chrono-link-best', String(next));
      }
      return next;
    });
  }, [clearTimer, score]);

  const applyWrong = useCallback(() => {
    playSound('wrong');
    setPerfectThisLevel(false);
    setCombo(0);

    // can düşür
    setLives((prev) => Math.max(0, prev - 1));

    // süre cezası
    setTimeLeft((prev) => Math.max(0, prev - DIFF[difficulty].wrongPenalty));
  }, [difficulty]);

  const handleNodeClick = useCallback(
    (nodeId: number) => {
      if (gameStateRef.current !== 'playing') return;

      const currentNodes = nodesRef.current;
      const clickedNode = currentNodes.find((n) => n.id === nodeId);
      if (!clickedNode || clickedNode.status !== 'hidden') return;

      if (nodeId === nextExpected) {
        playSound('correct');

        setNodes((prev) => prev.map((n) => (n.id === nodeId ? { ...n, status: 'correct' } : n)));
        setPath((prev) => [...prev, nodeId]);

        // seviye bitti mi?
        if (nodeId === currentNodes.length) {
          playSound('complete');

          const perfectBonus = perfectThisLevel ? 20 : 0;
          const comboBonus = combo * DIFF[difficulty].comboBonus;

          setScore((prev) => prev + levelRef.current * 10 + comboBonus + perfectBonus);
          setCombo((prev) => prev + 1);
          setTimeLeft((prev) => prev + DIFF[difficulty].passBonus);

          setGameState('between');
          clearTimer();

          timeoutRef.current = setTimeout(() => {
            setLevel((prevLvl) => {
              const nextLvl = prevLvl + 1;
              const want = DIFF[difficulty].nodeGrowth(nextLvl);
              generateLevel(want, nextLvl);
              return nextLvl;
            });
          }, 650);
        } else {
          setNextExpected((prev) => prev + 1);
        }
      } else {
        // wrong click
        applyWrong();

        setNodes((prev) =>
          prev.map((n) =>
            n.id === nodeId
              ? { ...n, status: 'wrong' }
              : n.id === nextExpected
                ? { ...n, status: 'hint' }
                : n
          )
        );

        clearTimer();
        timeoutRef.current = setTimeout(() => {
          // aynı level’i tekrar üret (node sayısı aynı)
          generateLevel(nodesRef.current.length, levelRef.current);
        }, 900);
      }
    },
    [nextExpected, combo, perfectThisLevel, clearTimer, generateLevel, applyWrong, difficulty]
  );

  // Countdown tick
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  // Gameover conditions
  useEffect(() => {
    if (gameState === 'playing') {
      if (timeLeft === 0) finishGame();
      if (lives === 0) finishGame();
    }
  }, [timeLeft, lives, gameState, finishGame]);

  // cleanup
  useEffect(() => () => clearTimer(), [clearTimer]);

  const pathPoints = useMemo(() => {
    return path
      .map((id) => centers[id])
      .filter(Boolean) as Pt[];
  }, [path, centers]);

  const svgPathD = useMemo(() => {
    if (pathPoints.length < 2) return '';
    const [first, ...rest] = pathPoints;
    return `M ${first.x} ${first.y} ` + rest.map((p) => `L ${p.x} ${p.y}`).join(' ');
  }, [pathPoints]);

  const difficultyButtons: { key: Difficulty; label: string }[] = [
    { key: 'easy', label: 'Easy' },
    { key: 'normal', label: 'Normal' },
    { key: 'hard', label: 'Hard' },
    { key: 'expert', label: 'Expert' },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-xl mx-auto px-4 py-10">
        {/* Top nav */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition">
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Neural Link Home</span>
          </Link>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Best</p>
            <p className="text-lg font-black text-fuchsia-400">{bestScore}</p>
          </div>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Header HUD */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Phase</p>
                <span className="text-3xl font-black italic text-fuchsia-500">{level}</span>
              </div>

              {(gameState === 'preview' || gameState === 'playing' || gameState === 'between') && (
  <div className="relative">
    {/* GRID */}
    <div
      className="grid gap-3 aspect-square w-full relative"
      style={{ gridTemplateColumns: `repeat(${currentGridCols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: currentGridSize }).map((_, i) => {
        const node = nodes.find((n) => n.pos === i);
        return (
          <div
            key={i}
            className="relative aspect-square bg-white/5 rounded-xl border border-white/10"
          >
            {node && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  backgroundColor:
                    node.status === 'correct'
                      ? '#22c55e'
                      : node.status === 'wrong'
                        ? '#ef4444'
                        : node.status === 'hint'
                          ? '#eab308'
                          : node.status === 'visible'
                            ? '#a21caf'
                            : '#1e293b',
                }}
                onClick={() => handleNodeClick(node.id)}
                disabled={gameState !== 'playing'}
                className={`absolute inset-0 w-full h-full rounded-xl flex items-center justify-center font-black text-xl shadow-inner ${
                  gameState === 'preview'
                    ? 'cursor-wait pointer-events-none'
                    : 'cursor-pointer'
                }`}
              >
                {node.status !== 'hidden' && node.id}
              </motion.button>
            )}
          </div>
        );
      })}
    </div>

    {/* ✅ STATUS BAR – GRID DIŞI, ALTTA */}
    <div className="mt-4 min-h-[28px] flex justify-center">
      <AnimatePresence>
        {gameState === 'preview' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
          >
            <div className="bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-300 px-4 py-1.5 rounded-full text-[10px] font-black animate-pulse uppercase tracking-[0.2em] backdrop-blur-sm">
              Scanning Sequence... ({Math.round(previewMs / 100) / 10}s)
            </div>
          </motion.div>
        )}

        {gameState === 'between' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-emerald-600/20 border border-emerald-500/40 text-emerald-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-sm">
              LINK COMPLETE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
)}
                      LINK COMPLETE
                      {perfectThisLevel ? ' • PERFECT BONUS' : ''}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                ref={gridRef}
                className="grid gap-3 aspect-square w-full relative"
                style={{ gridTemplateColumns: `repeat(${currentGridCols}, minmax(0, 1fr))` }}
              >
                {/* SVG overlay for path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* We'll draw in real pixel coords via inline style (no viewBox use) */}
                </svg>

                {/* Real overlay using pixel-based svg */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: 'visible' }}
                >
                  {/* glow path */}
                  {svgPathD && (
                    <>
                      <path
                        d={svgPathD}
                        fill="none"
                        stroke="rgba(217,70,239,0.35)"
                        strokeWidth={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={svgPathD}
                        fill="none"
                        stroke="rgba(217,70,239,0.9)"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  )}
                  {/* points */}
                  {pathPoints.map((p, idx) => (
                    <circle key={idx} cx={p.x} cy={p.y} r={6} fill="rgba(34,197,94,0.9)" />
                  ))}
                </svg>

                {Array.from({ length: currentGridSize }).map((_, i) => {
                  const node = nodes.find((n) => n.pos === i);

                  return (
                    <div
                      key={i}
                      ref={(el) => {
                        cellRefs.current[i] = el;
                      }}
                      className="relative aspect-square bg-white/5 rounded-xl border border-white/10"
                    >
                      {node && (
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{
                            scale: 1,
                            backgroundColor:
                              node.status === 'correct'
                                ? '#22c55e'
                                : node.status === 'wrong'
                                  ? '#ef4444'
                                  : node.status === 'hint'
                                    ? '#eab308'
                                    : node.status === 'visible'
                                      ? '#a21caf'
                                      : '#1e293b',
                          }}
                          onClick={() => handleNodeClick(node.id)}
                          disabled={gameState !== 'playing'}
                          className={[
                            'absolute inset-0 w-full h-full rounded-xl flex items-center justify-center font-black text-xl shadow-inner',
                            gameState === 'preview' ? 'cursor-wait pointer-events-none' : 'cursor-pointer',
                            gameState === 'between' ? 'pointer-events-none opacity-90' : '',
                          ].join(' ')}
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
            <div className="text-center py-10 space-y-6">
              <Brain size={64} className="mx-auto text-fuchsia-500 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter">
                CHRONO<span className="text-fuchsia-500">LINK</span>
              </h1>

              <div className="text-sm text-zinc-400 leading-relaxed">
                Sırayı hafızana al, sonra <span className="text-white font-black">1 → N</span> diye tıkla.
                Yanlışta <span className="text-white font-black">can</span> ve <span className="text-white font-black">zaman</span> gider.
                Perfect bitirirsen bonus!
              </div>

              <button
                onClick={startGame}
                className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl hover:bg-fuchsia-500 transition-all active:scale-95 shadow-lg shadow-white/5"
              >
                INITIALIZE DRILL
              </button>

              <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-black">
                Difficulty: {DIFF[difficulty].label}
              </div>
            </div>
          )}

          {gameState === 'gameover' && (
            <div className="text-center py-8 space-y-5">
              <AlertCircle size={48} className="mx-auto text-red-500 animate-bounce" />
              <h2 className="text-4xl font-black italic">Neural Link Severed</h2>

              <div className="text-sm text-zinc-400">
                Score: <span className="font-black text-white">{score}</span> • Best:{' '}
                <span className="font-black text-fuchsia-400">{Math.max(bestScore, score)}</span>
              </div>

              <button
                onClick={startGame}
                className="w-full bg-fuchsia-600 text-white font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-fuchsia-600/20"
              >
                <RefreshCw size={20} /> RE-INITIATE
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}