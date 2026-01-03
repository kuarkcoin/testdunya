"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Level = "A1" | "A2" | "B1";

type MCQ = {
  id: string;
  level: Level;
  prompt: string;          // question text (English)
  options: string[];       // 4 options
  answer: string;          // exact option string
};

type Balloon = {
  id: string;
  x: number; // CSS px
  y: number; // CSS px
  r: number; // CSS px
  vy: number; // px/sec
  text: string;
  isCorrect: boolean;

  // sprite frame animation (slow + dt based)
  frame: number;           // 0..9
  frameAcc: number;        // accumulator
};

function levelIndex(l: Level) {
  return l === "A1" ? 0 : l === "A2" ? 1 : 2;
}
function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickOne<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// -------------------- 100 QUESTIONS (A1/A2/B1 MIX) --------------------
// Not synonyms. Normal level-check style: grammar + vocab-in-context + short reading.
const BANK: QA[] = [
  // ===== A1 – VERY EASY (60) =====
  { level: "A1", word: "dog", def: "an animal that barks" },
  { level: "A1", word: "cat", def: "a small animal that says meow" },
  { level: "A1", word: "apple", def: "a red or green fruit" },
  { level: "A1", word: "car", def: "a vehicle with four wheels" },
  { level: "A1", word: "book", def: "you read this" },
  { level: "A1", word: "pen", def: "you write with this" },
  { level: "A1", word: "house", def: "a place where people live" },
  { level: "A1", word: "school", def: "a place to learn" },
  { level: "A1", word: "teacher", def: "a person who teaches students" },
  { level: "A1", word: "student", def: "a person who learns at school" },
  { level: "A1", word: "sun", def: "it is bright in the sky" },
  { level: "A1", word: "moon", def: "you see it at night in the sky" },
  { level: "A1", word: "water", def: "you drink this" },
  { level: "A1", word: "bread", def: "food made from flour" },
  { level: "A1", word: "milk", def: "a white drink" },
  { level: "A1", word: "happy", def: "feeling good" },
  { level: "A1", word: "sad", def: "not happy" },
  { level: "A1", word: "big", def: "not small" },
  { level: "A1", word: "small", def: "not big" },
  { level: "A1", word: "hot", def: "very warm" },
  { level: "A1", word: "cold", def: "not warm" },
  { level: "A1", word: "run", def: "to move fast on your feet" },
  { level: "A1", word: "walk", def: "to move on your feet slowly" },
  { level: "A1", word: "eat", def: "to put food in your mouth" },
  { level: "A1", word: "drink", def: "to take water into your mouth" },
  { level: "A1", word: "sleep", def: "to rest at night" },
  { level: "A1", word: "open", def: "to make something not closed" },
  { level: "A1", word: "close", def: "to shut something" },
  { level: "A1", word: "door", def: "you open this to enter a room" },
  { level: "A1", word: "window", def: "you see outside through this" },
  { level: "A1", word: "phone", def: "you call people with this" },
  { level: "A1", word: "table", def: "you eat on this" },
  { level: "A1", word: "chair", def: "you sit on this" },
  { level: "A1", word: "shirt", def: "clothes you wear on your body" },
  { level: "A1", word: "shoes", def: "you wear these on your feet" },
  { level: "A1", word: "blue", def: "the color of the sky" },
  { level: "A1", word: "green", def: "the color of grass" },
  { level: "A1", word: "red", def: "the color of an apple" },
  { level: "A1", word: "day", def: "when the sun is up" },
  { level: "A1", word: "night", def: "when it is dark" },
  { level: "A1", word: "boy", def: "a young male person" },
  { level: "A1", word: "girl", def: "a young female person" },
  { level: "A1", word: "family", def: "parents and children" },
  { level: "A1", word: "friend", def: "a person you like" },
  { level: "A1", word: "city", def: "a big town" },
  { level: "A1", word: "food", def: "you eat this" },
  { level: "A1", word: "shop", def: "a place to buy things" },
  { level: "A1", word: "bus", def: "many people travel with this" },
  { level: "A1", word: "street", def: "cars drive here" },
  { level: "A1", word: "rain", def: "water falls from the sky" },
  { level: "A1", word: "snow", def: "white and cold weather" },

  // ===== A2 – EASY (25) =====
  { level: "A2", word: "airport", def: "planes arrive and leave here" },
  { level: "A2", word: "ticket", def: "you need this to travel" },
  { level: "A2", word: "restaurant", def: "you eat food here" },
  { level: "A2", word: "breakfast", def: "the first meal of the day" },
  { level: "A2", word: "holiday", def: "time when you do not work or study" },
  { level: "A2", word: "exercise", def: "activity to keep your body healthy" },
  { level: "A2", word: "weather", def: "sun, rain, snow, wind" },
  { level: "A2", word: "message", def: "a short text you send" },
  { level: "A2", word: "invite", def: "to ask someone to come" },
  { level: "A2", word: "visit", def: "to go and see a place or person" },
  { level: "A2", word: "healthy", def: "good for your body" },
  { level: "A2", word: "dangerous", def: "not safe" },
  { level: "A2", word: "crowded", def: "full of people" },
  { level: "A2", word: "quiet", def: "with little noise" },
  { level: "A2", word: "decide", def: "to choose something" },
  { level: "A2", word: "prepare", def: "to get ready" },
  { level: "A2", word: "remember", def: "to keep in your mind" },
  { level: "A2", word: "forget", def: "to not remember" },
  { level: "A2", word: "arrive", def: "to get to a place" },
  { level: "A2", word: "leave", def: "to go away from a place" },
  { level: "A2", word: "cheap", def: "not expensive" },
  { level: "A2", word: "expensive", def: "costs a lot of money" },
  { level: "A2", word: "job", def: "work you do to get money" },
  { level: "A2", word: "office", def: "a place where people work" },
  { level: "A2", word: "market", def: "a place to buy food" },

  // ===== B1 – SIMPLE BUT THINKING (15) =====
  { level: "B1", word: "improve", def: "to make something better" },
  { level: "B1", word: "support", def: "to help someone" },
  { level: "B1", word: "problem", def: "something that needs a solution" },
  { level: "B1", word: "solution", def: "an answer to a problem" },
  { level: "B1", word: "experience", def: "knowledge from doing something" },
  { level: "B1", word: "opinion", def: "what you think" },
  { level: "B1", word: "plan", def: "deciding what to do in the future" },
  { level: "B1", word: "success", def: "when you do something well" },
  { level: "B1", word: "future", def: "time after now" },
  { level: "B1", word: "past", def: "time before now" },
  { level: "B1", word: "reason", def: "why something happens" },
  { level: "B1", word: "decision", def: "a choice you make" },
  { level: "B1", word: "environment", def: "the world around us" },
  { level: "B1", word: "important", def: "something that matters a lot" },
  { level: "B1", word: "different", def: "not the same" },
];

// -------------------- COMPONENT --------------------
export default function WordMeaningPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // loop
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  // timer (single source is ref)
  const timeLeftRef = useRef(60);
  const uiTimerAccRef = useRef(0);
  const runningRef = useRef(false);

  // game refs
  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<MCQ | null>(null);

  // level tracking
  const levelRef = useRef<Level>("A1");
  const correctWindowRef = useRef(0);
  const wrongWindowRef = useRef(0);
  const answersRef = useRef(0);
  const streakRef = useRef(0);

  // optional sprite sheet
  const sheetRef = useRef<HTMLImageElement | null>(null);

  // UI state
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [soundOn, setSoundOn] = useState(true);
  const [classMode, setClassMode] = useState(false);

  // audio (no files)
  const audioCtxRef = useRef<AudioContext | null>(null);

  // canvas sizing
  const sizeRef = useRef({ w: 900, h: 520, dpr: 1 });

  const levelBadge = useMemo(() => level, [level]);

  function ensureAudio() {
    if (!soundOn) return null;
    if (classMode) return null;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }

  function playTone(kind: "correct" | "wrong" | "bling", intensity = 1) {
    if (!soundOn || classMode) return;
    const ac = ensureAudio();
    if (!ac) return;

    const now = ac.currentTime;
    const o = ac.createOscillator();
    const g = ac.createGain();

    const base = kind === "correct" ? 660 : kind === "wrong" ? 180 : 980;
    const dur = kind === "bling" ? 0.10 : 0.12;

    o.type = kind === "wrong" ? "square" : "sine";
    o.frequency.setValueAtTime(base, now);
    o.frequency.exponentialRampToValueAtTime(base * (kind === "wrong" ? 0.7 : 1.3), now + dur);

    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.22 * intensity, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    o.connect(g);
    g.connect(ac.destination);
    o.start(now);
    o.stop(now + dur + 0.02);
  }

  function primeSprites() {
    const img = new Image();
    img.src = "/sprites/balloons_sheet.png";
    img.onload = () => (sheetRef.current = img);
    img.onerror = () => (sheetRef.current = null);
  }

  function resizeCanvas() {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const rect = wrap.getBoundingClientRect();
    const wCss = Math.max(320, Math.floor(rect.width));
    const hCss = 520; // stable gameplay height
    const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));

    sizeRef.current = { w: wCss, h: hCss, dpr };

    canvas.width = Math.floor(wCss * dpr);
    canvas.height = Math.floor(hCss * dpr);
    canvas.style.width = `${wCss}px`;
    canvas.style.height = `${hCss}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    // draw in CSS px coordinates
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function pickQuestion(lvl: Level): MCQ {
    const li = levelIndex(lvl);

    let pool = BANK.filter((q) => {
      const qi = levelIndex(q.level);
      if (qi === li) return true;
      if (Math.abs(qi - li) === 1) return Math.random() < 0.25;
      return Math.random() < 0.08;
    });

    // ✅ safety fallback
    if (pool.length === 0) pool = BANK;

    return pickOne(pool);
  }

  function makeBalloons() {
    const { w, h } = sizeRef.current;
    const lvl = levelRef.current;

    const q = pickQuestion(lvl);
    questionRef.current = q;

    const options = shuffle(q.options).slice(0, 4);
    // safety: ensure answer exists
    if (!options.includes(q.answer)) {
      options[Math.floor(Math.random() * 4)] = q.answer;
    }

    const count = 4;
    const baseY = h + 90;

    const xs = shuffle(
      Array.from({ length: count }, (_, i) => (w / (count + 1)) * (i + 1))
    );

    const li = levelIndex(lvl);
    const speedBase = 80 + li * 15; // a bit faster at higher levels

    const balloons: Balloon[] = [];
    for (let i = 0; i < count; i++) {
      const text = options[i];
      const r = 56 + Math.random() * 18;

      balloons.push({
        id: `${Date.now()}_${i}_${Math.random().toString(16).slice(2)}`,
        x: xs[i] + (Math.random() * 26 - 13),
        y: baseY + i * 36,
        r,
        vy: speedBase + Math.random() * 55,
        text,
        isCorrect: text === q.answer,
        frame: Math.floor(Math.random() * 10),
        frameAcc: Math.random() * 10,
      });
    }

    balloonsRef.current = balloons;
  }

  function start() {
    // ✅ MUST set running true immediately (Play Again overlay fix)
    setRunning(true);
    runningRef.current = true;

    setScore(0);

    setLevel("A1");
    levelRef.current = "A1";

    streakRef.current = 0;
    correctWindowRef.current = 0;
    wrongWindowRef.current = 0;
    answersRef.current = 0;

    setTimeLeft(60);
    timeLeftRef.current = 60;
    uiTimerAccRef.current = 0;

    resizeCanvas();
    makeBalloons();

    ensureAudio();
    playTone("bling", 0.9);

    lastTRef.current = performance.now();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(loop);
  }

  function endGame() {
    runningRef.current = false;
    setRunning(false);
  }

  function adjustLevelAfterAnswer(isCorrect: boolean) {
    if (isCorrect) correctWindowRef.current += 1;
    else wrongWindowRef.current += 1;

    answersRef.current += 1;
    if (answersRef.current % 5 !== 0) return;

    let lvl = levelRef.current;
    const li = levelIndex(lvl);

    const c = correctWindowRef.current;
    const w = wrongWindowRef.current;

    correctWindowRef.current = 0;
    wrongWindowRef.current = 0;

    if (c >= 4 && li < 2) {
      lvl = li === 0 ? "A2" : "B1";
    } else if (w >= 2 && li > 0) {
      lvl = li === 2 ? "A2" : "A1";
    }

    if (lvl !== levelRef.current) {
      levelRef.current = lvl;
      setLevel(lvl);
    }
  }

  function onHitBalloon(b: Balloon) {
    const q = questionRef.current;
    if (!q) return;

    if (b.isCorrect) {
      setScore((s) => s + 10);
      streakRef.current += 1;

      timeLeftRef.current = Math.min(120, timeLeftRef.current + 1);

      playTone("correct", 1);
      if (streakRef.current > 0 && streakRef.current % 5 === 0) {
        playTone("bling", 1.25);
      }

      adjustLevelAfterAnswer(true);

      // new set
      makeBalloons();
    } else {
      setScore((s) => Math.max(0, s - 3));
      streakRef.current = 0;
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 2);

      playTone("wrong", 1);
      adjustLevelAfterAnswer(false);

      // ✅ IMPORTANT: wrong should NOT help player
      // clear all and create new set
      makeBalloons();
    }
  }

  function update(dt: number) {
    if (!runningRef.current) return;

    // timer
    const nt = Math.max(0, timeLeftRef.current - dt);
    timeLeftRef.current = nt;

    uiTimerAccRef.current += dt;
    if (uiTimerAccRef.current >= 0.1) {
      uiTimerAccRef.current = 0;
      setTimeLeft(nt);
    }

    if (nt <= 0) {
      endGame();
      return;
    }

    const { h } = sizeRef.current;

    const bs = balloonsRef.current;

    // move + slow frame animation (NO disco)
    // ~6 fps frame changes: dt*6
    for (const b of bs) {
      b.y -= b.vy * dt;

      // ✅ smooth, slow frame update
      b.frameAcc += dt * 6; // slower => 3..6 is nice
      b.frame = Math.floor(b.frameAcc) % 10;
    }

    // clean recycle logic (no confusing double assignment)
    const alive = bs.filter((b) => b.y + b.r > -40);
    if (alive.length === 0) {
      makeBalloons();
    } else {
      balloonsRef.current = alive;
    }
  }

  function drawBalloon(ctx: CanvasRenderingContext2D, b: Balloon, sheet: HTMLImageElement | null) {
    // sprite or fallback
    if (sheet && sheet.width > 0 && sheet.height > 0) {
      const cols = 5;
      const cellW = sheet.width / cols;
      const cellH = sheet.height / 2;

      const f = b.frame % 10;
      const col = f % cols;
      const row = (f / cols) | 0;

      const sx = col * cellW;
      const sy = row * cellH;

      const s = b.r * 2.25;
      ctx.drawImage(sheet, sx, sy, cellW, cellH, b.x - s / 2, b.y - s / 2, s, s);
    } else {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.isCorrect ? "rgba(34,197,94,0.85)" : "rgba(59,130,246,0.75)";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.stroke();
    }

    // balloon text visible
    const fontSize = Math.max(18, b.r * 0.55);
    ctx.save();
    ctx.font = `900 ${Math.round(fontSize)}px ui-sans-serif, system-ui`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;

    ctx.lineWidth = 8;
    ctx.strokeStyle = "rgba(0,0,0,0.78)";
    ctx.strokeText(b.text, b.x, b.y);

    ctx.fillStyle = "rgba(255,255,255,0.98)";
    ctx.fillText(b.text, b.x, b.y);
    ctx.restore();
  }

  function draw() {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    const { w, h, dpr } = sizeRef.current;

    // ✅ safest clear: device pixels
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // background in device pixels
    ctx.fillStyle = "#0b1220";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // back to CSS px for drawing gameplay
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // balloons
    const sheet = sheetRef.current;
    for (const b of balloonsRef.current) {
      drawBalloon(ctx, b, sheet);
    }

    // prompt on top
    const prompt = questionRef.current?.prompt ?? "";
    if (prompt) {
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `900 22px ui-sans-serif, system-ui`;

      ctx.lineWidth = 6;
      ctx.strokeStyle = "rgba(0,0,0,0.9)";
      ctx.fillStyle = "rgba(255,255,255,0.98)";

      const px = w / 2;
      const py = 44;

      ctx.strokeText(prompt, px, py);
      ctx.fillText(prompt, px, py);
      ctx.restore();
    }

    // tiny HUD inside canvas
    ctx.save();
    ctx.globalAlpha = 0.95;
    ctx.font = `800 14px ui-sans-serif, system-ui`;
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillText(`Combo: ${streakRef.current}`, 16, h - 10);
    ctx.restore();
  }

  function loop(t: number) {
    const dt = Math.min(0.05, (t - lastTRef.current) / 1000);
    lastTRef.current = t;

    update(dt);
    draw();

    if (runningRef.current) {
      rafRef.current = requestAnimationFrame(loop);
    }
  }

  // resize + sprites
  useEffect(() => {
    resizeCanvas();
    primeSprites();
    const onR = () => resizeCanvas();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  // ✅ level changes while running => new question set
  useEffect(() => {
    if (runningRef.current) {
      makeBalloons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // pointer/touch
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function handlePointerDown(e: PointerEvent) {
      if (!runningRef.current) return;
      if (timeLeftRef.current <= 0) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      let best: { b: Balloon; d2: number } | null = null;
      for (const b of balloonsRef.current) {
        const dx = x - b.x;
        const dy = y - b.y;
        const hitR = b.r * 1.15;
        const d2 = dx * dx + dy * dy;
        if (d2 <= hitR * hitR) {
          if (!best || d2 < best.d2) best = { b, d2 };
        }
      }
      if (best) onHitBalloon(best.b);
    }

    canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => canvas.removeEventListener("pointerdown", handlePointerDown as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn, classMode]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-3 py-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">🎈 Word Pop • English Level</h1>
            <p className="text-slate-600 font-semibold">A1–A2–B1 Mixed • 100 Questions • Tap the correct answer</p>
            <p className="text-slate-500 text-sm mt-1">
              (Optional) Sprite sheet:{" "}
              <code className="px-1 py-0.5 bg-white border rounded">/public/sprites/balloons_sheet.png</code>
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => setSoundOn((v) => !v)}
                className="px-3 py-2 rounded-xl bg-white border shadow-sm font-bold text-sm hover:bg-slate-50"
              >
                {soundOn ? "🔊 Sound: ON" : "🔇 Sound: OFF"}
              </button>
              <button
                onClick={() => setClassMode((v) => !v)}
                className="px-3 py-2 rounded-xl bg-white border shadow-sm font-bold text-sm hover:bg-slate-50"
              >
                {classMode ? "🏫 Class Mode: ON" : "🎮 Class Mode: OFF"}
              </button>
            </div>

            <div className="flex gap-2">
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">⏱️ {Math.ceil(timeLeft)}s</div>
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">⭐ {score}</div>
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">🎯 Level {levelBadge}</div>
            </div>

            <div className="text-xs font-bold text-slate-500">
              Combo: <span className="text-slate-800">{streakRef.current}</span> (bling at 5,10,15…)
            </div>
          </div>
        </div>

        <div ref={wrapRef} className="relative rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ height: 520 }}>
          <canvas ref={canvasRef} className="block w-full select-none touch-none" />

          {/* Start overlay */}
          {!running && timeLeft > 0 && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center max-w-md w-full shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black mb-2">Ready?</h2>
                <p className="text-slate-600 font-semibold mb-6">Tap the correct answer balloon. Correct adds +1s.</p>

                <div className="grid grid-cols-1 gap-3">
                  <button onClick={start} className="px-6 py-3 bg-black text-white rounded-xl font-black text-lg hover:bg-slate-900">
                    START
                  </button>
                  <button
                    onClick={() => {
                      ensureAudio();
                      playTone("bling", 1);
                    }}
                    className="px-6 py-3 bg-white border rounded-xl font-black hover:bg-slate-50"
                  >
                    🔔 Test Sound
                  </button>
                </div>

                <div className="mt-4 text-xs text-slate-500 font-semibold">
                  Auto level adjusts every 5 answers (4+ correct → up, 2+ wrong → down)
                </div>
              </div>
            </div>
          )}

          {/* Game over overlay */}
          {timeLeft <= 0 && !running && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 text-center max-w-md w-full shadow-xl">
                <h2 className="text-3xl font-black mb-2">Time’s Up!</h2>
                <p className="text-xl mb-6">
                  Final Score: <span className="font-black">{score}</span>
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => {
                      setTimeLeft(60);
                      timeLeftRef.current = 60;
                      uiTimerAccRef.current = 0;
                      setRunning(false);
                      runningRef.current = false;
                    }}
                    className="px-6 py-3 bg-white border rounded-xl font-black hover:bg-slate-50"
                  >
                    Close
                  </button>
                  <button onClick={start} className="px-6 py-3 bg-black text-white rounded-xl font-black hover:bg-slate-900">
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-sm text-slate-600 font-semibold">
          ✅ Normal English level questions • ✅ Wrong tap resets set • ✅ No disco frames • ✅ WebAudio sounds • ✅ Prompt always visible
        </div>
      </div>
    </main>
  );
}
