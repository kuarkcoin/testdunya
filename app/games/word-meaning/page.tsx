"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * ✅ Word Meaning Pop — %100 derlenir (Next.js / App Router)
 * - Tek dosya: app/games/word-meaning/page.tsx
 * - WebAudio ile (dosyasız) doğru/yanlış + combo “bling” + rüzgâr ambiyansı
 * - Sessiz mod (Class Mode) + Sound ON/OFF
 * - Yanlış sorular tekrar kuyruğu
 * - Balonlar: yukarı + sağa/sola salınma + rüzgâr + yumuşak çarpışma
 * - Yanlışta: tüm balonlar yenilenir (kolaylaştırma bug’ı yok)
 * - Canvas DPR doğru + clearRect doğru + resize doğru + RAF cleanup
 */

type Level = "A1" | "A2" | "B1";
type QA = { level: Level; word: string; def: string };

type Balloon = {
  id: string;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  text: string;
  isCorrect: boolean;

  // motion/visual
  phase: number;
  hue: number;
};

const BANK: QA[] = [
  // -------------------- A1 (40) --------------------
  { level: "A1", word: "school", def: "I go to ____ every day." },
  { level: "A1", word: "teacher", def: "My ____ helps me learn." },
  { level: "A1", word: "student", def: "I am a ____ in Class 5." },
  { level: "A1", word: "book", def: "I read a ____ at night." },
  { level: "A1", word: "pencil", def: "Write with a ____." },
  { level: "A1", word: "eraser", def: "Use an ____ to fix mistakes." },
  { level: "A1", word: "morning", def: "I eat breakfast in the ____." },
  { level: "A1", word: "evening", def: "I watch TV in the ____." },
  { level: "A1", word: "water", def: "I drink ____ when I am thirsty." },
  { level: "A1", word: "apple", def: "An ____ is a red or green fruit." },
  { level: "A1", word: "bread", def: "I eat ____ with cheese." },
  { level: "A1", word: "bus", def: "I go to school by ____." },
  { level: "A1", word: "train", def: "We travel by ____ to Istanbul." },
  { level: "A1", word: "park", def: "Children play in the ____." },
  { level: "A1", word: "library", def: "I borrow books from the ____." },
  { level: "A1", word: "hospital", def: "A doctor works in a ____." },
  { level: "A1", word: "doctor", def: "A ____ helps sick people." },
  { level: "A1", word: "nurse", def: "A ____ works with a doctor." },
  { level: "A1", word: "happy", def: "I feel ____ when I get a gift." },
  { level: "A1", word: "sad", def: "I feel ____ when I lose my toy." },
  { level: "A1", word: "hungry", def: "I am ____; I want food." },
  { level: "A1", word: "tired", def: "I am ____ after a long day." },
  { level: "A1", word: "hot", def: "In summer, it is ____." },
  { level: "A1", word: "cold", def: "In winter, it is ____." },
  { level: "A1", word: "behind", def: "The ball is ____ the box." },
  { level: "A1", word: "between", def: "The bank is ____ the café and the park." },
  { level: "A1", word: "opposite", def: "The school is ____ the supermarket." },
  { level: "A1", word: "straight", def: "Go ____ and turn left." },
  { level: "A1", word: "climb", def: "Monkeys can ____ trees." },
  { level: "A1", word: "swim", def: "Fish can ____." },
  { level: "A1", word: "run", def: "I ____ fast in PE class." },
  { level: "A1", word: "sing", def: "I can ____ a song." },
  { level: "A1", word: "dance", def: "We ____ at the party." },
  { level: "A1", word: "clean", def: "Please ____ your room." },
  { level: "A1", word: "sleep", def: "I ____ at 10 pm." },
  { level: "A1", word: "breakfast", def: "I eat ____ in the morning." },
  { level: "A1", word: "homework", def: "I do my ____ after school." },
  { level: "A1", word: "weekend", def: "I rest on the ____." },
  { level: "A1", word: "family", def: "My ____ is very important to me." },

  // -------------------- A2 (35) --------------------
  { level: "A2", word: "careful", def: "Be ____! The floor is wet." },
  { level: "A2", word: "quiet", def: "Please be ____ in the library." },
  { level: "A2", word: "hungry", def: "I skipped lunch, so I am ____." },
  { level: "A2", word: "friendly", def: "She is very ____ and smiles a lot." },
  { level: "A2", word: "busy", def: "I can't talk now; I'm ____." },
  { level: "A2", word: "cheap", def: "This T-shirt is ____; it costs 50 TL." },
  { level: "A2", word: "expensive", def: "This phone is ____; it costs a lot." },
  { level: "A2", word: "invite", def: "I will ____ my friends to my birthday." },
  { level: "A2", word: "decide", def: "We need to ____ where to go." },
  { level: "A2", word: "borrow", def: "Can I ____ your pen for a minute?" },
  { level: "A2", word: "return", def: "Please ____ the book next week." },
  { level: "A2", word: "prepare", def: "I will ____ dinner for my family." },
  { level: "A2", word: "arrive", def: "The bus will ____ at 8:30." },
  { level: "A2", word: "improve", def: "I want to ____ my English." },
  { level: "A2", word: "practice", def: "You should ____ every day." },
  { level: "A2", word: "choose", def: "Please ____ the correct answer." },
  { level: "A2", word: "because", def: "I stayed home ____ it was raining." },
  { level: "A2", word: "usually", def: "I ____ go to bed early on weekdays." },
  { level: "A2", word: "sometimes", def: "I ____ play games after dinner." },
  { level: "A2", word: "never", def: "I ____ drink coffee at night." },
  { level: "A2", word: "different", def: "These two pictures are ____." },
  { level: "A2", word: "similar", def: "Our phones are ____; they look alike." },
  { level: "A2", word: "message", def: "Send me a ____ when you arrive." },
  { level: "A2", word: "weather", def: "What's the ____ like today?" },
  { level: "A2", word: "ticket", def: "I bought a bus ____." },
  { level: "A2", word: "station", def: "Let's meet at the train ____." },
  { level: "A2", word: "direction", def: "Can you tell me the ____ to the museum?" },
  { level: "A2", word: "across", def: "The bank is ____ the street." },
  { level: "A2", word: "during", def: "I study ____ the day and rest at night." },
  { level: "A2", word: "before", def: "Wash your hands ____ you eat." },
  { level: "A2", word: "after", def: "We play football ____ school." },
  { level: "A2", word: "early", def: "I woke up ____ today." },
  { level: "A2", word: "late", def: "I went to bed ____ last night." },
  { level: "A2", word: "problem", def: "I have a ____ with my homework." },
  { level: "A2", word: "solution", def: "We found a ____ to the problem." },

  // -------------------- B1 (25) --------------------
  { level: "B1", word: "experience", def: "Traveling is a great ____." },
  { level: "B1", word: "prefer", def: "I ____ tea to coffee." },
  { level: "B1", word: "suggest", def: "I ____ visiting Edirne in spring." },
  { level: "B1", word: "describe", def: "Can you ____ your best friend?" },
  { level: "B1", word: "support", def: "My family will ____ my decision." },
  { level: "B1", word: "reduce", def: "We should ____ plastic waste." },
  { level: "B1", word: "increase", def: "Exercise can ____ your energy." },
  { level: "B1", word: "consider", def: "Please ____ all options before you choose." },
  { level: "B1", word: "imagine", def: "Can you ____ life on Mars?" },
  { level: "B1", word: "impress", def: "Her English skills really ____ me." },
  { level: "B1", word: "avoid", def: "Try to ____ eating too much sugar." },
  { level: "B1", word: "advertise", def: "Companies ____ products on TV." },
  { level: "B1", word: "complain", def: "He will ____ about the noisy neighbors." },
  { level: "B1", word: "opinion", def: "In my ____, this movie is great." },
  { level: "B1", word: "prepare", def: "We need to ____ for the exam." },
  { level: "B1", word: "recover", def: "It takes time to ____ from a cold." },
  { level: "B1", word: "interrupt", def: "Please don't ____ me while I’m speaking." },
  { level: "B1", word: "responsible", def: "You are ____ for your homework." },
  { level: "B1", word: "confident", def: "I feel ____ about my English now." },
  { level: "B1", word: "opportunity", def: "This job is a great ____." },
  { level: "B1", word: "attention", def: "Pay ____ to the teacher." },
  { level: "B1", word: "decision", def: "That was a difficult ____." },
  { level: "B1", word: "improve", def: "Reading daily can ____ your vocabulary." },
  { level: "B1", word: "schedule", def: "My ____ is full this week." },
  { level: "B1", word: "environment", def: "We must protect the ____." },
];

function levelIndex(l: Level) {
  return l === "A1" ? 0 : l === "A2" ? 1 : 2;
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickOne<T>(arr: T[]) {
  return arr[(Math.random() * arr.length) | 0];
}

export default function WordMeaningGameFinal() {
  // DOM/Canvas
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // RAF timing
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  // Size (CSS px + DPR)
  const sizeRef = useRef({ w: 900, h: 520, dpr: 1 });

  // Game refs
  const runningRef = useRef(false);
  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<QA | null>(null);

  const wrongQueueRef = useRef<QA[]>([]);
  const askedCountRef = useRef(0);

  const timeLeftRef = useRef(180); // ✅ 180s
  const uiTimerAccRef = useRef(0);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const shakeRef = useRef(0);
  const windTRef = useRef(0);

  // UI state
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState<Level>("A1");

  // Sound
  const [soundOn, setSoundOn] = useState(true);
  const [classMode, setClassMode] = useState(false);

  // WebAudio refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const windGainRef = useRef<GainNode | null>(null);
  const windAccRef = useRef(0);

  const effectiveSoundOn = soundOn && !classMode;

  const levelBadge = useMemo(() => level, [level]);

  function ensureAudio() {
    if (audioCtxRef.current) return;
    const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
    const ctx = new Ctx();
    audioCtxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
    masterGainRef.current = master;

    const windGain = ctx.createGain();
    windGain.gain.value = 0.12;
    windGain.connect(master);
    windGainRef.current = windGain;
  }

  function playTone(kind: "popGood" | "popBad" | "bling") {
    if (!effectiveSoundOn) return;
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master) return;

    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    if (kind === "popGood") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08);
      g.gain.setValueAtTime(0.35, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(g);
      g.connect(master);
      osc.start();
      osc.stop(ctx.currentTime + 0.14);
      return;
    }

    if (kind === "popBad") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.12);
      g.gain.setValueAtTime(0.28, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(g);
      g.connect(master);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
      return;
    }

    // bling
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1320, ctx.currentTime + 0.05);
    osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.1);
    g.gain.setValueAtTime(0.22, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
    osc.connect(g);
    g.connect(master);
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  }

  // soft wind ambience (no file)
  function playWindTick() {
    if (!effectiveSoundOn) return;
    const ctx = audioCtxRef.current;
    const windGain = windGainRef.current;
    if (!ctx || !windGain) return;

    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    osc.type = "sine";
    // gentle random note cluster (pleasant)
    const notes = [392, 440, 523.25, 659.25];
    osc.frequency.value = notes[(Math.random() * notes.length) | 0];

    g.gain.setValueAtTime(0.0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.07);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.1);

    osc.connect(g);
    g.connect(windGain);
    osc.start();
    osc.stop(ctx.currentTime + 1.1);
  }

  function chooseLevelAuto() {
    // simple & stable: score + streak + progress
    const progress = askedCountRef.current;
    let next: Level = "A1";

    if (scoreRef.current >= 240 || progress >= 35) next = "A2";
    if (scoreRef.current >= 520 || progress >= 70) next = "B1";

    // streak bonus
    if (streakRef.current >= 10) next = "B1";
    else if (streakRef.current >= 6 && next === "A1") next = "A2";

    levelRef.current = next;
    setLevel(next);
  }

  const levelRef = useRef<Level>("A1");

  function makeQuestion(): { prompt: string; options: string[] } {
    // 35% chance to repeat a wrong question
    let selected: QA | null = null;
    if (wrongQueueRef.current.length > 0 && Math.random() < 0.35) {
      selected = wrongQueueRef.current.shift() || null;
    }

    if (!selected) {
      const li = levelIndex(levelRef.current);

      // pool: mostly same level + a little neighbor mix (A1↔A2↔B1)
      let pool = BANK.filter((q) => {
        const qi = levelIndex(q.level);
        if (qi === li) return true;
        if (Math.abs(qi - li) === 1) return Math.random() < 0.25;
        return Math.random() < 0.08;
      });

      if (pool.length === 0) pool = BANK; // safety
      selected = pickOne(pool);
    }

    questionRef.current = selected;
    askedCountRef.current += 1;

    const wrongs = shuffle(BANK.filter((q) => q.word !== selected.word))
      .slice(0, 3)
      .map((q) => q.word);

    return {
      prompt: selected.def,
      options: shuffle([selected.word, ...wrongs]),
    };
  }

  function makeBalloons() {
    const { w, h } = sizeRef.current;

    const q = makeQuestion();
    const xs = shuffle([0.22, 0.42, 0.62, 0.82]).map((t) => t * w);

    // easier tap on mobile
    const baseR = 52;

    balloonsRef.current = q.options.map((text, i) => {
      const r = baseR + Math.random() * 14;
      const startY = h + 40 + i * 18;

      // slower by default; can adjust easily
      const speed = 55 + Math.random() * 25 + levelIndex(levelRef.current) * 8;

      return {
        id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
        x: xs[i],
        y: startY,
        r,
        vx: (Math.random() - 0.5) * 22,
        vy: speed,
        text,
        isCorrect: text === questionRef.current?.word,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() * 360,
      };
    });

    // refresh UI prompt quickly
    // (prompt is drawn on canvas, but this keeps React HUD in sync)
    chooseLevelAuto();
  }

  function endGame() {
    runningRef.current = false;
    setRunning(false);

    timeLeftRef.current = 0;
    setTimeLeft(0);

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  function start() {
    // prime audio on user gesture
    ensureAudio();
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }

    // cancel any prior loop
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // reset
    askedCountRef.current = 0;
    wrongQueueRef.current = [];
    scoreRef.current = 0;
    streakRef.current = 0;
    shakeRef.current = 0;

    levelRef.current = "A1";
    setLevel("A1");

    timeLeftRef.current = 180;
    setTimeLeft(180);
    uiTimerAccRef.current = 0;

    setScore(0);
    setStreak(0);

    setRunning(true);
    runningRef.current = true;

    makeBalloons();

    lastTRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }

  function onHitBalloon(b: Balloon) {
    if (!runningRef.current) return;
    if (timeLeftRef.current <= 0) return;

    const correct = b.isCorrect;

    if (correct) {
      // score + time reward
      scoreRef.current += 10 + Math.min(20, streakRef.current * 2);
      streakRef.current += 1;

      timeLeftRef.current = clamp(timeLeftRef.current + 1.2, 0, 180);

      // combo effects
      if (streakRef.current > 0 && streakRef.current % 5 === 0) {
        playTone("bling");
        // screen shake on combo milestones
        shakeRef.current = Math.min(20, 6 + streakRef.current * 0.7);
      } else if (streakRef.current >= 3) {
        shakeRef.current = Math.min(12, 3 + streakRef.current * 0.5);
      }

      playTone("popGood");
      setScore(scoreRef.current);
      setStreak(streakRef.current);

      chooseLevelAuto();
      makeBalloons();
      return;
    }

    // WRONG
    if (questionRef.current) wrongQueueRef.current.push(questionRef.current);

    scoreRef.current = Math.max(0, scoreRef.current - 5);
    streakRef.current = 0;

    timeLeftRef.current = Math.max(0, timeLeftRef.current - 4);

    playTone("popBad");
    setScore(scoreRef.current);
    setStreak(0);

    chooseLevelAuto();

    // ✅ wrong = refresh ALL balloons (no “easy mode” exploit)
    makeBalloons();
  }

  function update(dt: number) {
    if (!runningRef.current) return;

    // wind
    windTRef.current += dt;
    const wind = Math.sin(windTRef.current * 0.55) * 14; // px/s^2-ish feel

    // wind ambience tick
    windAccRef.current += dt;
    if (windAccRef.current >= 1.15) {
      windAccRef.current = 0;
      playWindTick();
    }

    // time
    timeLeftRef.current -= dt;
    if (timeLeftRef.current <= 0) {
      timeLeftRef.current = 0;
      setTimeLeft(0);
      endGame();
      return;
    }

    // reduce rerender frequency for timer (10 Hz)
    uiTimerAccRef.current += dt;
    if (uiTimerAccRef.current >= 0.1) {
      uiTimerAccRef.current = 0;
      setTimeLeft(Math.ceil(timeLeftRef.current));
    }

    const { w, h } = sizeRef.current;
    const bs = balloonsRef.current;

    // move balloons
    for (const b of bs) {
      b.phase += dt * 1.0;

      // gentle side wobble + wind force
      const wobble = Math.sin(b.phase) * 18;
      b.vx += wind * dt;
      b.vx *= 0.985; // damp
      b.x += (b.vx + wobble) * dt;

      // upward
      b.y -= b.vy * dt;

      // subtle color drift (NOT blinking)
      b.hue = (b.hue + dt * 10) % 360;

      // walls
      if (b.x < b.r) {
        b.x = b.r;
        b.vx *= -0.55;
      } else if (b.x > w - b.r) {
        b.x = w - b.r;
        b.vx *= -0.55;
      }
    }

    // soft collisions (balloon-balloon)
    for (let i = 0; i < bs.length; i++) {
      for (let j = i + 1; j < bs.length; j++) {
        const a = bs[i];
        const b = bs[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        const minDist = a.r + b.r;

        if (dist > 0 && dist < minDist) {
          const nx = dx / dist;
          const ny = dy / dist;

          // separate gently
          const overlap = (minDist - dist) * 0.5;
          a.x -= nx * overlap;
          b.x += nx * overlap;

          // exchange a little velocity (soft)
          const push = 22;
          a.vx -= nx * push * dt;
          b.vx += nx * push * dt;

          // tiny vertical correction to avoid sticking
          a.y += ny * overlap * 0.12;
          b.y -= ny * overlap * 0.12;
        }
      }
    }

    // if all balloons left screen => new question
    const alive = bs.filter((b) => b.y + b.r > -40);
    if (alive.length === 0) makeBalloons();
    else balloonsRef.current = alive;

    // shake decay
    if (shakeRef.current > 0) shakeRef.current *= 0.86;
    if (shakeRef.current < 0.2) shakeRef.current = 0;
  }

  function draw() {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    const { w, h, dpr } = sizeRef.current;

    // clear in device pixels (✅ correct)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // bg
    ctx.fillStyle = "#0b1220";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // shake (in CSS px space)
    let sx = 0;
    let sy = 0;
    if (shakeRef.current > 0) {
      sx = (Math.random() - 0.5) * shakeRef.current;
      sy = (Math.random() - 0.5) * shakeRef.current;
    }

    // draw in CSS px coords
    ctx.setTransform(dpr, 0, 0, dpr, sx, sy);

    // balloons
    for (const b of balloonsRef.current) {
      // body
      const fill = `hsla(${b.hue}, 85%, 60%, 0.92)`;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = fill;
      ctx.fill();

      // highlight
      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.28, b.y - b.r * 0.28, b.r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.fill();

      // outline
      ctx.lineWidth = 3;
      ctx.strokeStyle = "rgba(255,255,255,0.30)";
      ctx.stroke();

      // string
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + b.r * 0.9);
      ctx.quadraticCurveTo(b.x + 10 * Math.sin(b.phase), b.y + b.r + 22, b.x, b.y + b.r + 46);
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // text (VERY visible)
      const fontSize = Math.max(16, b.r * 0.44);
      ctx.font = `900 ${Math.round(fontSize)}px ui-sans-serif, system-ui`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // shadow
      ctx.shadowColor = "rgba(0,0,0,0.40)";
      ctx.shadowBlur = 7;
      ctx.shadowOffsetY = 2;

      // stroke
      ctx.lineWidth = 7;
      ctx.strokeStyle = "rgba(0,0,0,0.78)";
      ctx.strokeText(b.text, b.x, b.y);

      // fill
      ctx.fillStyle = "rgba(255,255,255,0.98)";
      ctx.fillText(b.text, b.x, b.y);

      // reset shadow
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    }

    // prompt band (✅ en sonda çiz)
    const prompt = questionRef.current?.def ?? "";
    if (prompt) {
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = `900 ${Math.round(26)}px ui-sans-serif, system-ui`;
      ctx.lineWidth = 7;
      ctx.strokeStyle = "rgba(0,0,0,0.85)";
      ctx.fillStyle = "rgba(255,255,255,0.98)";

      const px = w / 2;
      const py = 46;

      ctx.shadowColor = "rgba(0,0,0,0.35)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 2;

      ctx.strokeText(`Definition: ${prompt}`, px, py);
      ctx.fillText(`Definition: ${prompt}`, px, py);

      ctx.restore();
    }
  }

  function loop(t: number) {
    const dt = Math.min(0.05, (t - lastTRef.current) / 1000);
    lastTRef.current = t;

    update(dt);
    draw();

    if (runningRef.current) rafRef.current = requestAnimationFrame(loop);
  }

  function resizeCanvas() {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = wrap.clientWidth;

    // responsive height (mobile friendly)
    const h = Math.round(clamp(window.innerHeight * 0.62, 420, 560));

    // apply CSS height
    wrap.style.height = `${h}px`;

    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);

    sizeRef.current = { w, h, dpr };

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    // keep balloons inside after resize
    for (const b of balloonsRef.current) {
      b.x = clamp(b.x, b.r, w - b.r);
      b.y = clamp(b.y, -100, h + 120);
    }
  }

  // pointer handling (CSS px coordinates)
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

      // topmost preference (reverse)
      const bs = balloonsRef.current;
      for (let i = bs.length - 1; i >= 0; i--) {
        const b = bs[i];
        const dx = x - b.x;
        const dy = y - b.y;
        const hitR = b.r * 1.2;
        const d2 = dx * dx + dy * dy;
        if (d2 <= hitR * hitR) {
          best = { b, d2 };
          break;
        }
      }

      if (best) onHitBalloon(best.b);
    }

    canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => canvas.removeEventListener("pointerdown", handlePointerDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // resize + init
  useEffect(() => {
    resizeCanvas();
    const onR = () => resizeCanvas();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  // RAF cleanup (✅)
  useEffect(() => {
    return () => {
      runningRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const subtitle = "A1–A2–B1 Mixed • 100 Questions • Tap the correct balloon";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-3 py-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">🎈 Word Meaning Pop (FINAL)</h1>
            <p className="text-slate-600 font-semibold">{subtitle}</p>
            <p className="text-slate-500 text-sm mt-1">
              ✅ No synonyms • ✅ English-only • ✅ Wrong answers repeat • ✅ Wind + wobble + collisions • ✅ Sound (no files)
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
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">⏱️ {timeLeft}s</div>
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">⭐ {score}</div>
              <div className="px-3 py-2 rounded-xl bg-white border shadow-sm text-sm font-black">🎯 Level {levelBadge}</div>
            </div>

            <div className="text-xs font-bold text-slate-500">
              Combo: <span className="text-slate-800">{streak}</span> (bling at 5,10,15…)
            </div>
          </div>
        </div>

        <div ref={wrapRef} className="relative rounded-2xl overflow-hidden border bg-white shadow-sm">
          <canvas ref={canvasRef} className="block w-full select-none touch-none" />

          {/* Start overlay */}
          {!running && timeLeft > 0 && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center max-w-md w-full shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black mb-2">Ready?</h2>
                <p className="text-slate-600 font-semibold mb-6">
                  Tap the correct word balloon. Correct answers add time.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => {
                      // sound needs a gesture on mobile
                      ensureAudio();
                      playTone("bling");
                      start();
                    }}
                    className="px-6 py-3 bg-black text-white rounded-xl font-black text-lg hover:bg-slate-900"
                  >
                    START
                  </button>

                  <button
                    onClick={() => {
                      ensureAudio();
                      playTone("bling");
                    }}
                    className="px-6 py-3 bg-white border rounded-xl font-black hover:bg-slate-50"
                  >
                    🔔 Test Sound
                  </button>
                </div>

                <div className="mt-4 text-xs text-slate-500 font-semibold">
                  Wrong answers refresh all balloons • Level adjusts automatically
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
                      // close
                      scoreRef.current = 0;
                      setScore(0);
                      streakRef.current = 0;
                      setStreak(0);
                      levelRef.current = "A1";
                      setLevel("A1");
                      timeLeftRef.current = 180;
                      setTimeLeft(180);
                      questionRef.current = null;
                      balloonsRef.current = [];
                      draw();
                    }}
                    className="px-6 py-3 bg-white border rounded-xl font-black hover:bg-slate-50"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      ensureAudio();
                      start();
                    }}
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
          İpucu: Balon hızını yavaşlatmak için <code className="px-1 py-0.5 bg-white border rounded">speed</code> değerini{" "}
          <code className="px-1 py-0.5 bg-white border rounded">makeBalloons()</code> içinde düşür.
        </div>
      </div>
    </main>
  );
}
