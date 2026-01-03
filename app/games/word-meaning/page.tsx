"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// --- TYPES & CONSTANTS ---
type Level = "A1" | "A2" | "B1";
type QA = { level: Level; word: string; def: string };
type Balloon = {
  id: string;
  x: number; y: number; r: number;
  vx: number; vy: number; 
  text: string; isCorrect: boolean;
  color: string; phase: number;
  frame: number; frameAcc: number;
};

const BALLOON_COLORS = ["rgba(239, 68, 68, 0.9)", "rgba(59, 130, 246, 0.9)", "rgba(16, 185, 129, 0.9)", "rgba(245, 158, 11, 0.9)", "rgba(139, 92, 246, 0.9)", "rgba(236, 72, 153, 0.9)"];

// --- 100+ SORULUK BANKA (Özetlenmiştir) ---
const BANK: QA[] = [
  // --- A1 SEVİYESİ (Temel Kelimeler) ---
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

  // --- A2 SEVİYESİ (Günlük Yaşam) ---
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

  // --- B1 SEVİYESİ (Akademik & Soyut) ---
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

export default function WordMeaningGameV3() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  // --- REFS (PHYSICS & LOGIC) ---
  const timeLeftRef = useRef(180);
  const runningRef = useRef(false);
  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<QA | null>(null);
  const wrongQueueRef = useRef<QA[]>([]);
  const levelRef = useRef<Level>("A1");
  const streakRef = useRef(0);
  const scoreRef = useRef(0);
  const windRef = useRef(0);
  const shakeRef = useRef(0);
  const windSoundAccRef = useRef(0);
  const sheetRef = useRef<HTMLImageElement | null>(null);

  // --- AUDIO REFS ---
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const windGainRef = useRef<GainNode | null>(null);
// --- HELPER FUNCTIONS ---
// Seviyeleri sayısal bir değere dönüştürür (A1=0, A2=1, B1=2)
function levelIndex(l: Level): number { 
  return l === "A1" ? 0 : l === "A2" ? 1 : 2; 
}

// Diziyi karıştırır
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Diziden rastgele bir öğe seçer
function pickOne<T>(arr: T[]): T { 
  return arr[Math.floor(Math.random() * arr.length)]; 
}
  // --- UI STATES ---
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [timeLeft, setTimeLeft] = useState(180);

  // --- INIT AUDIO ---
  function initAudio() {
    if (audioCtxRef.current) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
    masterGainRef.current = master;

    const windGain = ctx.createGain();
    windGain.gain.value = 0.1;
    windGain.connect(master);
    windGainRef.current = windGain;
  }

  function playPop(correct: boolean) {
    const ctx = audioCtxRef.current;
    if (!ctx || !masterGainRef.current) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(correct ? 520 : 180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(correct ? 800 : 50, ctx.currentTime + 0.1);
    g.gain.setValueAtTime(0.3, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.connect(g); g.connect(masterGainRef.current);
    osc.start(); osc.stop(ctx.currentTime + 0.15);
  }

  function playWind() {
    const ctx = audioCtxRef.current;
    if (!ctx || !windGainRef.current) return;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.value = 100 + Math.random() * 50;
    filter.type = "lowpass";
    filter.frequency.value = 300;
    osc.connect(filter); filter.connect(windGainRef.current);
    osc.start(); osc.stop(ctx.currentTime + 0.8);
  }

  // --- GAME LOGIC ---
  function makeQuestion() {
    let selected: QA;
    // Yanlış kuyruğu kontrolü (%35 ihtimalle tekrar sor)
    if (wrongQueueRef.current.length > 0 && Math.random() < 0.35) {
      selected = wrongQueueRef.current.shift()!;
    } else {
      const li = levelIndex(levelRef.current);
      let pool = BANK.filter(q => levelIndex(q.level) === li);
      selected = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : BANK[0];
    }
    
    questionRef.current = selected;
    const wrongs = shuffle(BANK.filter(q => q.word !== selected.word)).slice(0, 3).map(q => q.word);
    return shuffle([selected.word, ...wrongs]);
  }

  function makeBalloons() {
    const w = wrapRef.current?.clientWidth || 900;
    const options = makeQuestion();
    const xs = shuffle(Array.from({ length: 4 }, (_, i) => (w / 5) * (i + 1)));

    balloonsRef.current = options.map((text, i) => ({
      id: Math.random().toString(36),
      x: xs[i], y: 600 + i * 40, r: 55,
      vx: (Math.random() - 0.5) * 15, vy: 40 + Math.random() * 30,
      text, isCorrect: text === questionRef.current?.word,
      color: BALLOON_COLORS[i], phase: Math.random() * Math.PI * 2,
      frame: Math.floor(Math.random() * 10), frameAcc: 0
    }));
  }

  function onHitBalloon(b: Balloon) {
    if (b.isCorrect) {
      scoreRef.current += 10 + (streakRef.current * 2);
      setScore(scoreRef.current);
      streakRef.current++;
      timeLeftRef.current = Math.min(180, timeLeftRef.current + 2);
      
      // Screen Shake
      if (streakRef.current >= 3) shakeRef.current = Math.min(20, 4 + streakRef.current);
      
      playPop(true);
      makeBalloons();
    } else {
      if (questionRef.current) wrongQueueRef.current.push(questionRef.current);
      scoreRef.current = Math.max(0, scoreRef.current - 5);
      setScore(scoreRef.current);
      streakRef.current = 0;
      shakeRef.current = 0;
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 4);
      playPop(false);
      makeBalloons();
    }
  }

  // --- UPDATE LOOP ---
  function update(dt: number) {
    if (!runningRef.current) return;
    
    // Wind Logic
    windRef.current += dt;
    const globalWind = Math.sin(windRef.current * 0.6) * 15;
    
    // Wind Sound Acc
    windSoundAccRef.current += dt;
    if (windSoundAccRef.current > 1.2) { playWind(); windSoundAccRef.current = 0; }

    timeLeftRef.current -= dt;
    if (timeLeftRef.current <= 0) { setRunning(false); runningRef.current = false; return; }
    setTimeLeft(Math.ceil(timeLeftRef.current));

    const bs = balloonsRef.current;
    
    // Physical Update
    for (const b of bs) {
      b.phase += dt;
      b.vx += globalWind * dt;
      b.x += b.vx * dt + Math.sin(b.phase) * 0.5; // Wind + Wobble
      b.y -= b.vy * dt;
      
      // Slow Animation
      b.frameAcc += dt * 3;
      b.frame = Math.floor(b.frameAcc) % 10;
      
      // Wall Bounds
      if (b.x < b.r) { b.x = b.r; b.vx *= -0.5; }
      if (b.x > (wrapRef.current?.clientWidth || 900) - b.r) { b.x = (wrapRef.current?.clientWidth || 900) - b.r; b.vx *= -0.5; }
    }

    // --- Soft Collision ---
    for (let i = 0; i < bs.length; i++) {
      for (let j = i + 1; j < bs.length; j++) {
        const a = bs[i], b = bs[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        const minDist = a.r + b.r;
        if (dist > 0 && dist < minDist) {
          const overlap = (minDist - dist) * 0.45;
          const nx = dx / dist, ny = dy / dist;
          a.x -= nx * overlap; b.x += nx * overlap;
          a.vx -= nx * 8; b.vx += nx * 8;
        }
      }
    }
  }

  // --- DRAW LOOP ---
  function draw() {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const w = wrapRef.current?.clientWidth || 900;
    const h = 520;
    const dpr = window.devicePixelRatio || 1;

    // Shake
    let sx = 0, sy = 0;
    if (shakeRef.current > 0) {
      sx = (Math.random() - 0.5) * shakeRef.current;
      sy = (Math.random() - 0.5) * shakeRef.current;
      shakeRef.current *= 0.9;
    }

    ctx.setTransform(dpr, 0, 0, dpr, sx, sy);
    ctx.clearRect(-20, -20, w + 40, h + 40);
    
    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(-20, -20, w + 40, h + 40);

    // Balloons
    for (const b of balloonsRef.current) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "white";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(b.text, b.x, b.y + 5);
    }

    // UI Prompt
    if (questionRef.current) {
      ctx.fillStyle = "white";
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`Definition: ${questionRef.current.def}`, w/2, 40);
    }
  }

  function loop(t: number) {
    const dt = Math.min(0.05, (t - lastTRef.current) / 1000);
    lastTRef.current = t;
    update(dt); draw();
    if (runningRef.current) rafRef.current = requestAnimationFrame(loop);
  }

  function start() {
    initAudio();
    scoreRef.current = 0; setScore(0);
    timeLeftRef.current = 180; setTimeLeft(180);
    streakRef.current = 0;
    setRunning(true); runningRef.current = true;
    makeBalloons();
    lastTRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctxRef.current = canvas.getContext("2d");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
        <div className="flex justify-between p-4 bg-slate-900 text-white font-bold">
          <span>⭐ {score}</span>
          <span className="text-orange-400">COMBO x{streakRef.current}</span>
          <span>⏱️ {timeLeft}s</span>
        </div>
        <div ref={wrapRef} className="relative bg-slate-800" style={{ height: 520 }}>
          <canvas ref={canvasRef} className="w-full h-full touch-none" 
            onPointerDown={(e) => {
              const rect = canvasRef.current?.getBoundingClientRect();
              if (!rect) return;
              const px = e.clientX - rect.left, py = e.clientY - rect.top;
              for (const b of [...balloonsRef.current].reverse()) {
                if (Math.hypot(px - b.x, py - b.y) < b.r * 1.2) { onHitBalloon(b); break; }
              }
            }}
          />
          {!running && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="text-center bg-white p-10 rounded-3xl">
                <h2 className="text-3xl font-black mb-4">EnglishMeter Pop v3</h2>
                <button onClick={start} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-lg">START GAME</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
