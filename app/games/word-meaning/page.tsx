"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

// =====================
// 1) WORD POOL (MVP)
// =====================
type Level = "A1" | "A2" | "B1" | "B2";

type WordItem = {
  word: string;
  answer: string;
  distractors: string[]; // 3 tane
};

const WORD_POOL: Record<Level, WordItem[]> = {
  A1: [
    { word: "rapid", answer: "fast", distractors: ["slow", "heavy", "angry"] },
    { word: "tiny", answer: "small", distractors: ["big", "late", "wide"] },
    { word: "happy", answer: "glad", distractors: ["sad", "tired", "hungry"] },
    { word: "begin", answer: "start", distractors: ["finish", "break", "wait"] },
    { word: "quiet", answer: "silent", distractors: ["noisy", "bright", "tall"] },
  ],
  A2: [
    { word: "quickly", answer: "fast", distractors: ["carefully", "loudly", "never"] },
    { word: "usually", answer: "normally", distractors: ["rarely", "never", "angrily"] },
    { word: "dangerous", answer: "risky", distractors: ["safe", "cheap", "soft"] },
    { word: "choose", answer: "pick", distractors: ["drop", "push", "hide"] },
    { word: "strong", answer: "powerful", distractors: ["weak", "slow", "thin"] },
  ],
  B1: [
    { word: "avoid", answer: "stay away", distractors: ["take care", "give up", "look after"] },
    { word: "improve", answer: "get better", distractors: ["get worse", "fall asleep", "sit down"] },
    { word: "suggest", answer: "recommend", distractors: ["refuse", "forget", "arrive"] },
    { word: "efficient", answer: "effective", distractors: ["expensive", "confused", "crowded"] },
    { word: "recent", answer: "new", distractors: ["ancient", "tiny", "empty"] },
  ],
  B2: [
    { word: "reluctant", answer: "unwilling", distractors: ["excited", "careful", "similar"] },
    { word: "crucial", answer: "very important", distractors: ["very small", "very late", "very loud"] },
    { word: "maintain", answer: "keep", distractors: ["destroy", "hide", "borrow"] },
    { word: "accurate", answer: "correct", distractors: ["rare", "rude", "weak"] },
    { word: "decline", answer: "refuse", distractors: ["accept", "invent", "repair"] },
  ],
};

// =====================
// 2) HELPERS
// =====================
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function levelIndex(lv: Level) {
  return (["A1", "A2", "B1", "B2"] as Level[]).indexOf(lv);
}

function nextLevel(lv: Level) {
  const all = ["A1", "A2", "B1", "B2"] as Level[];
  return all[clamp(levelIndex(lv) + 1, 0, all.length - 1)];
}

function prevLevel(lv: Level) {
  const all = ["A1", "A2", "B1", "B2"] as Level[];
  return all[clamp(levelIndex(lv) - 1, 0, all.length - 1)];
}

async function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// =====================
// 3) GAME TYPES
// =====================
type Question = {
  prompt: string;
  answer: string;
  choices: string[]; // 4 seçenek
  word: string;
};

type Balloon = {
  id: string;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  text: string;
  isCorrect: boolean;
  frame: number; // sprite sheet frame 0..9
};

type Pop = { x: number; y: number; start: number };

// =====================
// 4) MAIN COMPONENT
// =====================
export default function WordMeaningBalloonGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const sheetRef = useRef<HTMLImageElement | null>(null);
  const popRef = useRef<HTMLImageElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);

  const [ready, setReady] = useState(false);
  const [running, setRunning] = useState(false);

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // seconds
  const [level, setLevel] = useState<Level>("A1");

  // “basit değil” kısmı: streak & adaptive
  const streakRef = useRef(0);
  const lastAnswerAtRef = useRef<number>(0);
  const recentRef = useRef<{ ok: boolean }[]>([]); // last 5

  const questionRef = useRef<Question | null>(null);
  const balloonsRef = useRef<Balloon[]>([]);
  const popsRef = useRef<Pop[]>([]);

  const dprRef = useRef(1);
  const boundsRef = useRef({ w: 0, h: 0 });

  // UI prompt
  const prompt = questionRef.current?.prompt ?? "Tap START";

  // Preload assets
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [sheet, pop] = await Promise.all([
          loadImage("/sprites/balloons_sheet.png"),
          loadImage("/sprites/pop.png"),
        ]);
        if (!mounted) return;
        sheetRef.current = sheet;
        popRef.current = pop;
        setReady(true);
      } catch (e) {
        console.error(e);
        setReady(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Setup canvas sizing
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const resize = () => {
      const parent = c.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      // CSS size
      const cssW = Math.floor(rect.width);
      const cssH = Math.floor(Math.max(520, rect.height)); // min height

      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;

      c.style.width = cssW + "px";
      c.style.height = cssH + "px";
      c.width = Math.floor(cssW * dpr);
      c.height = Math.floor(cssH * dpr);

      boundsRef.current = { w: c.width, h: c.height };
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  function makeQuestion(lv: Level): Question {
    const list = WORD_POOL[lv];
    const item = list[Math.floor(Math.random() * list.length)];
    const choices = shuffle([item.answer, ...item.distractors]).slice(0, 4);
    return {
      word: item.word,
      prompt: `meaning of '${item.word}'?`,
      answer: item.answer,
      choices,
    };
  }

  function makeBalloons(q: Question) {
    const { w, h } = boundsRef.current;
    const dpr = dprRef.current;

    // 8 balon: 4 seçenek + 4 ek “decoy” (seçenekler tekrar edebilir)
    const base = q.choices.map((t) => t);
    const extras = shuffle(q.choices).concat(shuffle(q.choices)).slice(0, 4);
    const texts = shuffle([...base, ...extras]).slice(0, 8);

    const balloons: Balloon[] = texts.map((t, i) => {
      const r = (40 + Math.random() * 12) * dpr; // radius
      const x = (60 + Math.random() * (w - 120)) * 1; // already in px
      const y = (140 + Math.random() * (h - 220)) * 1;
      const speedBase = 90 + levelIndex(level) * 25;
      const vx = (Math.random() * 2 - 1) * speedBase * dpr;
      const vy = (Math.random() * 2 - 1) * speedBase * dpr;
      return {
        id: `${Date.now()}-${i}`,
        x,
        y,
        r,
        vx,
        vy,
        text: t,
        isCorrect: t === q.answer,
        frame: Math.floor(Math.random() * 10),
      };
    });

    balloonsRef.current = balloons;
  }

  function triggerPop(x: number, y: number) {
    popsRef.current.push({ x, y, start: performance.now() });
  }

  function resetRun() {
    setScore(0);
    setTimeLeft(60);
    setLevel("A1");
    streakRef.current = 0;
    recentRef.current = [];
    lastAnswerAtRef.current = performance.now();

    const q = makeQuestion("A1");
    questionRef.current = q;
    makeBalloons(q);
    popsRef.current = [];
  }

  function start() {
    if (!ready) return;
    resetRun();
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }

  function registerResult(ok: boolean) {
    // last 5 tracking
    const r = recentRef.current;
    r.push({ ok });
    while (r.length > 5) r.shift();

    // adaptive
    const last5 = r.slice(-5);
    const correct = last5.filter((x) => x.ok).length;
    const wrong = last5.length - correct;

    if (last5.length === 5 && correct >= 4) {
      setLevel((lv) => nextLevel(lv));
      recentRef.current = []; // reset window after step change
    } else if (last5.length === 5 && wrong >= 2) {
      setLevel((lv) => prevLevel(lv));
      recentRef.current = [];
    }
  }

  function scoreForCorrect(now: number) {
    // combo / streak
    streakRef.current += 1;

    const streak = streakRef.current;
    let mult = 1;
    if (streak >= 10) mult = 2.0;
    else if (streak >= 5) mult = 1.5;
    else if (streak >= 2) mult = 1.2;

    // speed bonus: last answer within 1.2s
    const dt = (now - lastAnswerAtRef.current) / 1000;
    const speedBonus = dt <= 1.2 ? 5 : 0;

    lastAnswerAtRef.current = now;

    const base = 10;
    return Math.round(base * mult) + speedBonus;
  }

  function onHitBalloon(b: Balloon) {
    if (!running) return;
    const now = performance.now();

    if (b.isCorrect) {
      const add = scoreForCorrect(now);
      setScore((s) => s + add);
      registerResult(true);
      triggerPop(b.x, b.y);

      // new question (using current level state value is async; use ref via setLevel callback?):
      // We'll build next question based on "current effective level" from latest state using a snapshot:
      const lvSnapshot = level; // acceptable for MVP
      const q = makeQuestion(lvSnapshot);
      questionRef.current = q;
      makeBalloons(q);
    } else {
      // wrong
      streakRef.current = 0;
      registerResult(false);
      triggerPop(b.x, b.y);

      // penalty: -2 seconds
      setTimeLeft((t) => Math.max(0, t - 2));
    }
  }

  // pointer handling
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!running) return;

      const rect = c.getBoundingClientRect();
      const dpr = dprRef.current;
      const px = (e.clientX - rect.left) * dpr;
      const py = (e.clientY - rect.top) * dpr;

      // hit test (circle)
      const balloons = balloonsRef.current;
      for (let i = balloons.length - 1; i >= 0; i--) {
        const b = balloons[i];
        const dx = px - b.x;
        const dy = py - b.y;
        if (dx * dx + dy * dy <= b.r * b.r) {
          onHitBalloon(b);
          break;
        }
      }
    };

    c.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => c.removeEventListener("pointerdown", onPointerDown as any);
  }, [running, level]); // uses level snapshot

  // main loop
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const drawBackground = () => {
      const { w, h } = boundsRef.current;

      // soft yellow gradient
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#FFF3B0");
      g.addColorStop(1, "#FFE066");

      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

  const drawBalloonFromSheet = (b: Balloon) => {
  const sheet = sheetRef.current;
  if (!sheet) return;

  // Sprite sheet mantığını devre dışı bırakıp doğrudan resmi çiziyoruz
  const size = b.r * 2.4; 
  ctx.drawImage(
    sheet, 
    b.x - size / 2, 
    b.y - size / 2, 
    size, 
    size
  );

  // Metin çizimi (Aynı kalabilir)
  ctx.font = `bold ${Math.max(16, b.r * 0.45)}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  // Metin okunabilirliği için gölge/kontur
  ctx.strokeStyle = "white";
  ctx.lineWidth = 4;
  ctx.strokeText(b.text, b.x, b.y);
  ctx.fillStyle = "black";
  ctx.fillText(b.text, b.x, b.y);
};

    const drawPops = () => {
      const pop = popRef.current;
      if (!pop) return;

      const now = performance.now();
      const pops = popsRef.current;

      for (let i = pops.length - 1; i >= 0; i--) {
        const p = pops[i];
        const t = now - p.start;
        if (t > 320) {
          pops.splice(i, 1);
          continue;
        }
        const size = 140 + t * 0.35; // slight grow
        ctx.drawImage(pop, p.x - size / 2, p.y - size / 2, size, size);
      }
    };

    const update = (dt: number) => {
      const { w, h } = boundsRef.current;
      const balloons = balloonsRef.current;

      for (const b of balloons) {
        b.x += b.vx * dt;
        b.y += b.vy * dt;

        // bounce within bounds (keep balloons mostly on screen)
        const minX = b.r + 20;
        const maxX = w - b.r - 20;
        const minY = b.r + 140; // keep away from header area
        const maxY = h - b.r - 20;

        if (b.x < minX) {
          b.x = minX;
          b.vx *= -1;
        } else if (b.x > maxX) {
          b.x = maxX;
          b.vx *= -1;
        }

        if (b.y < minY) {
          b.y = minY;
          b.vy *= -1;
        } else if (b.y > maxY) {
          b.y = maxY;
          b.vy *= -1;
        }
      }
    };

    const draw = () => {
      drawBackground();

      // balloons
      for (const b of balloonsRef.current) drawBalloonFromSheet(b);

      // pop effects on top
      drawPops();
    };

    const loop = (t: number) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = Math.min(0.033, (t - lastRef.current) / 1000);
      lastRef.current = t;

      if (running) update(dt);
      draw();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastRef.current = 0;
    };
  }, [running]);

  // countdown timer
  useEffect(() => {
    if (!running) return;

    const id = window.setInterval(() => {
      setTimeLeft((t) => {
        const nt = Math.max(0, t - 1);
        if (nt === 0) {
          // stop run
          window.setTimeout(() => stop(), 0);
        }
        return nt;
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [running]);

  // When level changes, refresh question & balloons smoothly (optional)
  useEffect(() => {
    if (!running) return;
    const q = makeQuestion(level);
    questionRef.current = q;
    makeBalloons(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // initial question for UI (not running)
  useEffect(() => {
    if (questionRef.current) return;
    questionRef.current = makeQuestion(level);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[920px]">
        {/* Header */}
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-semibold">EnglishMeter • Word Meaning Pop</div>
            <div className="text-sm text-slate-600">
              Tap the balloon with the correct meaning. Wrong = -2 seconds.
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!running ? (
              <button
                onClick={start}
                disabled={!ready}
                className="px-4 py-2 rounded-xl bg-black text-white disabled:opacity-50"
              >
                {ready ? "START (60s)" : "Loading..."}
              </button>
            ) : (
              <button onClick={stop} className="px-4 py-2 rounded-xl bg-white border">
                Stop
              </button>
            )}

            <button
              onClick={() => {
                resetRun();
                setRunning(false);
              }}
              className="px-4 py-2 rounded-xl bg-white border"
            >
              Reset
            </button>
          </div>
        </div>

        {/* HUD */}
        <div className="mb-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="rounded-xl bg-white border p-3">
            <div className="text-xs text-slate-500">PROMPT</div>
            <div className="font-semibold">{prompt}</div>
          </div>
          <div className="rounded-xl bg-white border p-3">
            <div className="text-xs text-slate-500">SCORE</div>
            <div className="text-lg font-bold">{score}</div>
          </div>
          <div className="rounded-xl bg-white border p-3">
            <div className="text-xs text-slate-500">TIME</div>
            <div className="text-lg font-bold">{timeLeft}s</div>
          </div>
          <div className="rounded-xl bg-white border p-3">
            <div className="text-xs text-slate-500">LEVEL</div>
            <div className="text-lg font-bold">{level}</div>
          </div>
        </div>

        {/* Canvas */}
        <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
          <canvas ref={canvasRef} className="w-full h-[70vh] min-h-[520px] touch-none select-none" />
        </div>

        {/* Footer tips */}
        <div className="mt-3 text-sm text-slate-600">
          Tip: build streak for higher combo. (2+ correct → x1.2, 5+ → x1.5, 10+ → x2)
        </div>
      </div>
    </div>
  );
}
