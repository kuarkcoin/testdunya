"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* ================= TYPES ================= */

type Level = "A1" | "A2" | "B1";

type QA = {
  level: Level;
  word: string;
  def: string;
};

type Balloon = {
  id: number;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
  frame: number;
  frameAcc: number;
  text: string;
  isCorrect: boolean;
};

/* ================= QUESTION BANK (100) ================= */

const BANK: QA[] = [
  // --- A1 (40)
  { level: "A1", word: "dog", def: "an animal that barks" },
  { level: "A1", word: "cat", def: "a small animal that says meow" },
  { level: "A1", word: "book", def: "something you read" },
  { level: "A1", word: "apple", def: "a red or green fruit" },
  { level: "A1", word: "car", def: "a vehicle with four wheels" },
  { level: "A1", word: "house", def: "a place where people live" },
  { level: "A1", word: "teacher", def: "a person who teaches students" },
  { level: "A1", word: "water", def: "a clear liquid you drink" },
  { level: "A1", word: "pen", def: "something you write with" },
  { level: "A1", word: "chair", def: "something you sit on" },
  // (kısaltmak için tekrar üretildi)
  ...Array.from({ length: 30 }).map((_, i) => ({
    level: "A1" as Level,
    word: `word${i + 1}`,
    def: "a simple English word",
  })),

  // --- A2 (30)
  { level: "A2", word: "travel", def: "to go from one place to another" },
  { level: "A2", word: "weather", def: "sun, rain, or snow outside" },
  { level: "A2", word: "market", def: "a place where people buy things" },
  { level: "A2", word: "learn", def: "to get new knowledge" },
  { level: "A2", word: "music", def: "sounds people listen to" },
  ...Array.from({ length: 25 }).map((_, i) => ({
    level: "A2" as Level,
    word: `phrase${i + 1}`,
    def: "a common English word or phrase",
  })),

  // --- B1 (30)
  { level: "B1", word: "decision", def: "a choice you make" },
  { level: "B1", word: "experience", def: "something that happens to you" },
  { level: "B1", word: "improve", def: "to make something better" },
  { level: "B1", word: "problem", def: "a difficult situation" },
  { level: "B1", word: "opinion", def: "what you think about something" },
  ...Array.from({ length: 25 }).map((_, i) => ({
    level: "B1" as Level,
    word: `concept${i + 1}`,
    def: "a more abstract English word",
  })),
];

/* ================= HELPERS ================= */

function pickOne<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function levelIndex(l: Level) {
  return l === "A1" ? 0 : l === "A2" ? 1 : 2;
}

/* ================= COMPONENT ================= */

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<QA | null>(null);
  const wrongQueueRef = useRef<QA[]>([]);

  const runningRef = useRef(false);
  const timeLeftRef = useRef(60);
  const streakRef = useRef(0);

  const shakeRef = useRef(0);
  const colorBurstRef = useRef(0);
  const colorHueRef = useRef(0);
  const windAccRef = useRef(0);

  const lastTRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");

  /* ================= GAME LOGIC ================= */

  function makeQuestion() {
    if (wrongQueueRef.current.length && Math.random() < 0.35) {
      return wrongQueueRef.current.shift()!;
    }

    let pool = BANK.filter(
      (q) => Math.abs(levelIndex(q.level) - levelIndex(level)) <= 1
    );

    if (!pool.length) pool = BANK;
    return pickOne(pool);
  }

  function makeBalloons() {
    const q = makeQuestion();
    questionRef.current = q;

    const correct = q.word;
    const wrongs = BANK.filter((x) => x.word !== correct)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((x) => x.word);

    const texts = [correct, ...wrongs].sort(() => Math.random() - 0.5);

    const w = canvasRef.current!.width;
    const h = canvasRef.current!.height;

    balloonsRef.current = texts.map((t, i) => ({
      id: i + Math.random(),
      x: w * (0.2 + Math.random() * 0.6),
      y: h + 80 + i * 60,
      r: 50,
      vx: (Math.random() - 0.5) * 20,
      vy: 40 + Math.random() * 30,
      phase: Math.random() * Math.PI * 2,
      frame: 0,
      frameAcc: Math.random() * 10,
      text: t,
      isCorrect: t === correct,
    }));
  }

  function start() {
    setScore(0);
    setTimeLeft(60);
    timeLeftRef.current = 60;
    streakRef.current = 0;
    setRunning(true);
    runningRef.current = true;
    makeBalloons();
    lastTRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }

  function onHitBalloon(b: Balloon) {
    if (!runningRef.current) return;

    if (b.isCorrect) {
      setScore((s) => s + 10);
      streakRef.current++;
      timeLeftRef.current += 1;

      if (streakRef.current >= 5) {
        colorBurstRef.current = 1;
        colorHueRef.current = Math.random() * 360;
        shakeRef.current = 8;
      }

      makeBalloons();
    } else {
      wrongQueueRef.current.push(questionRef.current!);
      setScore((s) => Math.max(0, s - 5));
      streakRef.current = 0;
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 2);
      makeBalloons();
    }
  }

  function update(dt: number) {
    timeLeftRef.current -= dt;
    setTimeLeft(Math.ceil(timeLeftRef.current));

    if (timeLeftRef.current <= 0) {
      setRunning(false);
      runningRef.current = false;
      return;
    }

    const bs = balloonsRef.current;

    windAccRef.current += dt;
    const wind = Math.sin(windAccRef.current * 0.6) * 10;

    for (const b of bs) {
      b.y -= b.vy * dt;
      b.vx += wind * dt;
      b.phase += dt;
      b.x += b.vx * dt + Math.sin(b.phase) * 0.4;

      b.frameAcc += dt * 3;
      b.frame = Math.floor(b.frameAcc) % 10;
    }

    // soft collision
    for (let i = 0; i < bs.length; i++) {
      for (let j = i + 1; j < bs.length; j++) {
        const a = bs[i];
        const b = bs[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        const min = a.r + b.r;
        if (d > 0 && d < min) {
          const o = (min - d) * 0.5;
          const nx = dx / d;
          a.x -= nx * o;
          b.x += nx * o;
        }
      }
    }
  }

  function draw() {
    const ctx = ctxRef.current!;
    const c = canvasRef.current!;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);

    // color burst
    if (colorBurstRef.current > 0) {
      const g = ctx.createRadialGradient(
        c.width / 2,
        c.height / 2,
        0,
        c.width / 2,
        c.height / 2,
        c.width
      );
      g.addColorStop(
        0,
        `hsla(${colorHueRef.current},90%,65%,0.25)`
      );
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, c.width, c.height);
      colorBurstRef.current *= 0.9;
    }

    // shake
    let sx = 0,
      sy = 0;
    if (shakeRef.current > 0) {
      sx = (Math.random() - 0.5) * shakeRef.current;
      sy = (Math.random() - 0.5) * shakeRef.current;
      shakeRef.current *= 0.85;
    }
    ctx.setTransform(1, 0, 0, 1, sx, sy);

    // balloons
    for (const b of balloonsRef.current) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.isCorrect ? "#22c55e" : "#3b82f6";
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(b.text, b.x, b.y);
    }

    // prompt
    if (questionRef.current) {
      ctx.fillStyle = "black";
      ctx.font = "bold 22px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(
        questionRef.current.def,
        c.width / 2,
        30
      );
    }
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

  useEffect(() => {
    const c = canvasRef.current!;
    c.width = window.innerWidth * 0.9;
    c.height = 500;
    ctxRef.current = c.getContext("2d")!;
  }, []);

  useEffect(() => {
    const c = canvasRef.current!;
    function onDown(e: PointerEvent) {
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      for (const b of balloonsRef.current) {
        const dx = x - b.x;
        const dy = y - b.y;
        if (dx * dx + dy * dy < b.r * b.r) {
          onHitBalloon(b);
          break;
        }
      }
    }
    c.addEventListener("pointerdown", onDown);
    return () => c.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-black mb-2">
        🎈 Word Meaning Pop
      </h1>
      <p className="mb-3">
        Time: {timeLeft}s | Score: {score}
      </p>
      <canvas ref={canvasRef} className="border rounded" />
      {!running && (
        <button
          onClick={start}
          className="mt-4 px-6 py-3 bg-black text-white rounded"
        >
          START
        </button>
      )}
    </main>
  );
}
