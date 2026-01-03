"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Level = "A1" | "A2" | "B1";

type QA = {
  level: Level;
  word: string;
  def: string; // definition (not synonym)
};

type Balloon = {
  id: string;
  x: number; // CSS px coordinates (not DPR)
  y: number;
  r: number;
  vy: number; // px/sec
  text: string;
  isCorrect: boolean;
  frame: number;
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

// -------------------- 100 QUESTIONS (A1/A2/B1 MIXED) --------------------
const BANK: QA[] = [
  // A1 (34)
  { level: "A1", word: "apple", def: "a round fruit that can be red or green" },
  { level: "A1", word: "book", def: "a set of pages with words that you read" },
  { level: "A1", word: "chair", def: "a thing you sit on" },
  { level: "A1", word: "teacher", def: "a person who helps students learn" },
  { level: "A1", word: "school", def: "a place where children learn" },
  { level: "A1", word: "morning", def: "the early part of the day" },
  { level: "A1", word: "family", def: "your parents and brothers or sisters" },
  { level: "A1", word: "happy", def: "feeling good and smiling" },
  { level: "A1", word: "cold", def: "not warm; low temperature" },
  { level: "A1", word: "water", def: "a clear liquid you drink" },
  { level: "A1", word: "bread", def: "food made from flour and baked" },
  { level: "A1", word: "house", def: "a building where people live" },
  { level: "A1", word: "friend", def: "a person you like and spend time with" },
  { level: "A1", word: "run", def: "to move fast on your feet" },
  { level: "A1", word: "walk", def: "to move on your feet at a normal speed" },
  { level: "A1", word: "sleep", def: "to rest your body at night" },
  { level: "A1", word: "eat", def: "to put food in your mouth and swallow" },
  { level: "A1", word: "drink", def: "to take liquid into your mouth" },
  { level: "A1", word: "open", def: "to make something not closed" },
  { level: "A1", word: "close", def: "to shut something" },
  { level: "A1", word: "big", def: "large in size" },
  { level: "A1", word: "small", def: "not large; little" },
  { level: "A1", word: "fast", def: "moving quickly" },
  { level: "A1", word: "slow", def: "not fast" },
  { level: "A1", word: "dog", def: "a common pet animal that barks" },
  { level: "A1", word: "cat", def: "a common pet animal that meows" },
  { level: "A1", word: "sun", def: "the bright star in the sky in the day" },
  { level: "A1", word: "rain", def: "water that falls from clouds" },
  { level: "A1", word: "phone", def: "a device you use to call people" },
  { level: "A1", word: "door", def: "you open this to enter a room" },
  { level: "A1", word: "window", def: "glass opening in a wall to see outside" },
  { level: "A1", word: "blue", def: "a color like the sky" },
  { level: "A1", word: "green", def: "a color like grass" },
  { level: "A1", word: "market", def: "a place where you buy food or things" },

  // A2 (33)
  { level: "A2", word: "repair", def: "to fix something broken" },
  { level: "A2", word: "message", def: "a short text you send to someone" },
  { level: "A2", word: "travel", def: "to go to another place" },
  { level: "A2", word: "arrive", def: "to get to a place" },
  { level: "A2", word: "borrow", def: "to take something and give it back later" },
  { level: "A2", word: "invite", def: "to ask someone to come" },
  { level: "A2", word: "prepare", def: "to get ready to do something" },
  { level: "A2", word: "choose", def: "to decide between options" },
  { level: "A2", word: "healthy", def: "good for your body; not ill" },
  { level: "A2", word: "exercise", def: "physical activity to stay fit" },
  { level: "A2", word: "customer", def: "a person who buys something" },
  { level: "A2", word: "receipt", def: "paper that shows what you paid for" },
  { level: "A2", word: "airport", def: "place where planes arrive and leave" },
  { level: "A2", word: "station", def: "place where trains or buses stop" },
  { level: "A2", word: "weather", def: "sun, rain, wind, and temperature" },
  { level: "A2", word: "promise", def: "to say you will do something for sure" },
  { level: "A2", word: "forget", def: "to not remember" },
  { level: "A2", word: "remember", def: "to keep something in your mind" },
  { level: "A2", word: "dangerous", def: "not safe; could hurt you" },
  { level: "A2", word: "quiet", def: "with little or no noise" },
  { level: "A2", word: "crowded", def: "full of people" },
  { level: "A2", word: "expensive", def: "costs a lot of money" },
  { level: "A2", word: "cheap", def: "costs little money" },
  { level: "A2", word: "improve", def: "to make something better" },
  { level: "A2", word: "describe", def: "to say what something is like" },
  { level: "A2", word: "schedule", def: "a plan with times for things" },
  { level: "A2", word: "direction", def: "information about where to go" },
  { level: "A2", word: "decide", def: "to make a choice" },
  { level: "A2", word: "celebrate", def: "to do something special for a good event" },
  { level: "A2", word: "festival", def: "a special event with music/food/activities" },
  { level: "A2", word: "suddenly", def: "quickly and unexpectedly" },
  { level: "A2", word: "careful", def: "paying attention to avoid danger" },
  { level: "A2", word: "advice", def: "a suggestion about what you should do" },

  // B1 (33)
  { level: "B1", word: "achieve", def: "to succeed in doing something you wanted" },
  { level: "B1", word: "imagine", def: "to form a picture in your mind" },
  { level: "B1", word: "increase", def: "to become bigger in number or amount" },
  { level: "B1", word: "reduce", def: "to make something smaller or less" },
  { level: "B1", word: "support", def: "to help someone or something" },
  { level: "B1", word: "discuss", def: "to talk about something seriously" },
  { level: "B1", word: "solution", def: "an answer to a problem" },
  { level: "B1", word: "opinion", def: "what you think about something" },
  { level: "B1", word: "research", def: "careful study to find information" },
  { level: "B1", word: "experience", def: "knowledge you get from doing something" },
  { level: "B1", word: "notice", def: "to see or become aware of something" },
  { level: "B1", word: "avoid", def: "to stay away from something" },
  { level: "B1", word: "suggest", def: "to give an idea or recommendation" },
  { level: "B1", word: "prefer", def: "to like one thing more than another" },
  { level: "B1", word: "manage", def: "to control or organize successfully" },
  { level: "B1", word: "continue", def: "to keep doing something" },
  { level: "B1", word: "interrupt", def: "to stop someone while they are speaking" },
  { level: "B1", word: "replace", def: "to put something new instead of something old" },
  { level: "B1", word: "recommend", def: "to say something is good and should be tried" },
  { level: "B1", word: "responsible", def: "having a duty to take care of something" },
  { level: "B1", word: "environment", def: "the natural world around us" },
  { level: "B1", word: "pollution", def: "dirty air/water caused by harmful waste" },
  { level: "B1", word: "challenge", def: "a difficult task that tests you" },
  { level: "B1", word: "confidence", def: "belief that you can do something well" },
  { level: "B1", word: "temporary", def: "lasting only for a short time" },
  { level: "B1", word: "separate", def: "to divide into different parts" },
  { level: "B1", word: "recognize", def: "to know someone/something from before" },
  { level: "B1", word: "influence", def: "power to affect someone or something" },
  { level: "B1", word: "feature", def: "an important part or characteristic" },
  { level: "B1", word: "typical", def: "normal for a person or thing" },
  { level: "B1", word: "purpose", def: "the reason why something is done" },
  { level: "B1", word: "process", def: "a series of steps to do something" },
  { level: "B1", word: "evidence", def: "facts that show something is true" },
];

// -------------------- PAGE --------------------
export default function WordMeaningPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // loop
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  // timer refs (single source)
  const timeLeftRef = useRef(60);
  const uiTimerAccRef = useRef(0);
  const runningRef = useRef(false);

  // gameplay refs
  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<{ prompt: string; correctWord: string } | null>(
    null
  );

  // level tracking (avoid async state bug)
  const levelRef = useRef<Level>("A1");
  const correctWindowRef = useRef(0);
  const wrongWindowRef = useRef(0);
  const streakRef = useRef(0);
  const answersRef = useRef(0);

  // optional sprites
  const sheetRef = useRef<HTMLImageElement | null>(null);

  // React UI state
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [soundOn, setSoundOn] = useState(true);
  const [classMode, setClassMode] = useState(false);

  // Audio (no files)
  const audioCtxRef = useRef<AudioContext | null>(null);

  // canvas sizing
  const sizeRef = useRef({ w: 900, h: 520, dpr: 1 });

  const levelBadge = useMemo(() => level, [level]);

  function ensureAudio() {
    if (!soundOn) return null;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
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
    if (!soundOn) return;
    if (classMode) return; // silent for classroom
    const ac = ensureAudio();
    if (!ac) return;

    const now = ac.currentTime;
    const o = ac.createOscillator();
    const g = ac.createGain();

    const base =
      kind === "correct" ? 660 : kind === "wrong" ? 180 : 980;
    const dur = kind === "bling" ? 0.10 : 0.12;

    o.type = kind === "wrong" ? "square" : "sine";
    o.frequency.setValueAtTime(base, now);
    o.frequency.exponentialRampToValueAtTime(
      base * (kind === "wrong" ? 0.7 : 1.3),
      now + dur
    );

    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.22 * intensity, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    o.connect(g);
    g.connect(ac.destination);
    o.start(now);
    o.stop(now + dur + 0.02);
  }

  function primeSprites() {
    // optional sprite sheet (5x2 = 10 frames)
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
    const hCss = Math.max(420, Math.floor(rect.height || 520));
    const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));

    sizeRef.current = { w: wCss, h: 520, dpr }; // fixed height for consistent gameplay

    canvas.width = Math.floor(wCss * dpr);
    canvas.height = Math.floor(520 * dpr);
    canvas.style.width = `${wCss}px`;
    canvas.style.height = `520px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    // transform: draw in CSS px coordinates
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeQuestion(lvl: Level) {
    const li = levelIndex(lvl);

    // Mixed: mostly current level, sometimes neighbor levels
    const pool = BANK.filter((q) => {
      const qi = levelIndex(q.level);
      if (qi === li) return true;
      // sprinkle neighbors
      if (Math.abs(qi - li) === 1) return Math.random() < 0.25;
      return Math.random() < 0.08;
    });

    const correct = pickOne(pool);

    const wrongPool = BANK.filter((q) => q.word !== correct.word);
    const wrongs = shuffle(wrongPool).slice(0, 3).map((q) => q.word);

    const options = shuffle([correct.word, ...wrongs]);

    // prompt is definition (NOT synonym)
    questionRef.current = {
      prompt: `Definition: ${correct.def}`,
      correctWord: correct.word,
    };

    return options.map((t) => ({
      text: t,
      isCorrect: t === correct.word,
    }));
  }

  function makeBalloons() {
    const { w, h } = sizeRef.current;
    const lvl = levelRef.current;

    const opts = makeQuestion(lvl);
    const count = 4;

    const baseY = h + 80;
    const xs = shuffle(
      Array.from({ length: count }, (_, i) => (w / (count + 1)) * (i + 1))
    );

    const balloons: Balloon[] = [];
    for (let i = 0; i < count; i++) {
      const r = 56 + Math.random() * 20; // mobile-friendly
      balloons.push({
        id: `${Date.now()}_${i}_${Math.random().toString(16).slice(2)}`,
        x: xs[i] + (Math.random() * 30 - 15),
        y: baseY + i * 40,
        r,
        vy: 120 + Math.random() * 60, // px/sec
        text: opts[i].text,
        isCorrect: opts[i].isCorrect,
        frame: Math.floor(Math.random() * 10),
      });
    }
    balloonsRef.current = balloons;
  }

  function start() {
    // prime audio on user gesture
    ensureAudio();
    playTone("bling", 0.8);

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

    setRunning(true);
    runningRef.current = true;

    resizeCanvas();
    makeBalloons();

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

    // every 5 answers, adjust
    answersRef.current += 1;
    if (answersRef.current % 5 !== 0) return;

    let lvl = levelRef.current;
    const li = levelIndex(lvl);

    const c = correctWindowRef.current;
    const w = wrongWindowRef.current;

    // reset window
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

      // small time reward
      timeLeftRef.current = Math.min(120, timeLeftRef.current + 1);

      playTone("correct", 1);

      // combo bling at 5,10,15...
      if (streakRef.current > 0 && streakRef.current % 5 === 0) {
        playTone("bling", 1.3);
      }

      adjustLevelAfterAnswer(true);
      // new round
      makeBalloons();
    } else {
      setScore((s) => Math.max(0, s - 3));
      streakRef.current = 0;

      // time penalty
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 2);

      playTone("wrong", 1);
      adjustLevelAfterAnswer(false);

      // remove only the tapped balloon (keep others)
      balloonsRef.current = balloonsRef.current.filter((x) => x.id !== b.id);
      if (balloonsRef.current.length === 0) makeBalloons();
    }
  }

  function update(dt: number) {
    if (!runningRef.current) return;

    // TIMER — single source
    const nt = Math.max(0, timeLeftRef.current - dt);
    timeLeftRef.current = nt;

    // UI sync (10 fps)
    uiTimerAccRef.current += dt;
    if (uiTimerAccRef.current >= 0.1) {
      uiTimerAccRef.current = 0;
      setTimeLeft(nt);
    }

    if (nt <= 0) {
      endGame();
      return;
    }

    // balloons move (CSS px physics)
    const { h } = sizeRef.current;
    const bs = balloonsRef.current;
    for (const b of bs) {
      b.y -= b.vy * dt;
      // animate frame slowly
      b.frame = (b.frame + 1) % 10;
    }

    // recycle if all left
    const alive = bs.filter((b) => b.y + b.r > -40);
    balloonsRef.current = alive.length ? alive : bs;
    if (!alive.length) makeBalloons();
  }

  function drawBalloon(
    ctx: CanvasRenderingContext2D,
    b: Balloon,
    sheet: HTMLImageElement | null
  ) {
    // sprite or fallback
    if (sheet && sheet.width > 0 && sheet.height > 0) {
      const cols = 5;
      const rows = 2;
      const cellW = sheet.width / cols;
      const cellH = sheet.height / rows;

      const f = b.frame % 10;
      const col = f % cols;
      const row = (f / cols) | 0;

      const sx = col * cellW;
      const sy = row * cellH;

      const s = b.r * 2.25;
      ctx.drawImage(
        sheet,
        sx,
        sy,
        cellW,
        cellH,
        b.x - s / 2,
        b.y - s / 2,
        s,
        s
      );
    } else {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.isCorrect
        ? "rgba(34,197,94,0.85)"
        : "rgba(59,130,246,0.75)";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.stroke();
    }

    // TEXT (very visible)
    const fontSize = Math.max(18, b.r * 0.55);
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.font = `900 ${Math.round(fontSize)}px ui-sans-serif, system-ui`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // shadow + stroke
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
    if (!ctx) return;

    const { w, h } = sizeRef.current;

    // clear in CSS px space (because transform already applied)
    ctx.save();
    ctx.setTransform(sizeRef.current.dpr, 0, 0, sizeRef.current.dpr, 0, 0);
    ctx.clearRect(0, 0, w, 520);
    ctx.restore();

    // background
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#0b1220";
    ctx.fillRect(0, 0, w, 520);
    ctx.restore();

    // balloons
    const sheet = sheetRef.current;
    for (const b of balloonsRef.current) {
      drawBalloon(ctx, b, sheet);
    }

    // ✅ PROMPT (SORU) — ALWAYS ON TOP
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

    // small HUD inside canvas (optional)
    ctx.save();
    ctx.globalAlpha = 0.95;
    ctx.font = `800 14px ui-sans-serif, system-ui`;
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillText(`Combo: ${streakRef.current}`, 16, 510);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // pointer/touch
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function handlePointerDown(e: PointerEvent) {
      if (!runningRef.current) return;
      if (timeLeftRef.current <= 0) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left; // CSS px (we draw in CSS px)
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
    return () =>
      canvas.removeEventListener("pointerdown", handlePointerDown as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn, classMode]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-3 py-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              🎈 Word Meaning Pop
            </h1>
            <p className="text-slate-600 font-semibold">
              A1–A2–B1 Mixed • 100 Questions • Tap the correct balloon
            </p>
            <p className="text-slate-500 text-sm mt-1">
              (Optional) Sprites:{" "}
              <code className="px-1 py-0.5 bg-white border rounded">
                /public/sprites/balloons_sheet.png
              </code>
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
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">
                ⏱️ {Math.ceil(timeLeft)}s
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">
                ⭐ {score}
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">
                🎯 Level {levelBadge}
              </div>
            </div>

            <div className="text-xs font-bold text-slate-500">
              Combo:{" "}
              <span className="text-slate-800">{streakRef.current}</span> (bling
              at 5,10,15…)
            </div>
          </div>
        </div>

        <div
          ref={wrapRef}
          className="relative rounded-2xl overflow-hidden border bg-white shadow-sm"
          style={{ height: 520 }}
        >
          <canvas
            ref={canvasRef}
            className="block w-full select-none touch-none"
          />

          {!running && timeLeft > 0 && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center max-w-md w-full shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black mb-2">
                  Ready?
                </h2>
                <p className="text-slate-600 font-semibold mb-6">
                  Tap the correct word balloon. Correct answers add +1s.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={start}
                    className="px-6 py-3 bg-black text-white rounded-xl font-black text-lg hover:bg-slate-900"
                  >
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
                  Auto level adjusts every 5 answers (4+ correct → level up, 2+
                  wrong → level down)
                </div>
              </div>
            </div>
          )}

          {timeLeft <= 0 && (
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
                      setRunning(false);
                      runningRef.current = false;
                    }}
                    className="px-6 py-3 bg-white border rounded-xl font-black hover:bg-slate-50"
                  >
                    Close
                  </button>
                  <button
                    onClick={start}
                    className="px-6 py-3 bg-black text-white rounded-xl font-black hover:bg-slate-900"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-sm text-slate-600 font-semibold">
          ✅ No synonyms • ✅ English-only • ✅ Mobile-friendly taps • ✅ WebAudio
          sounds • ✅ Visible prompt on canvas
        </div>
      </div>
    </main>
  );
}
