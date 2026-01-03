"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// --- CONFIG & TYPES ---
type Level = "A1" | "A2" | "B1";
type QA = { level: Level; word: string; def: string };
type Balloon = {
  id: string;
  x: number; y: number; r: number; vy: number;
  text: string; isCorrect: boolean;
  color: string; frame: number; frameAcc: number;
};

const BALLOON_COLORS = [
  "rgba(239, 68, 68, 0.9)", "rgba(59, 130, 246, 0.9)", 
  "rgba(16, 185, 129, 0.9)", "rgba(245, 158, 11, 0.9)", 
  "rgba(139, 92, 246, 0.9)", "rgba(236, 72, 153, 0.9)"
];

const BANK: QA[] = [
  { level: "A1", word: "apple", def: "a round fruit that can be red or green" },
  { level: "A1", word: "book", def: "a set of pages with words that you read" },
  { level: "A1", word: "chair", def: "a thing you sit on" },
  { level: "A1", word: "teacher", def: "a person who helps students learn" },
  { level: "A1", word: "school", def: "a place where children learn" },
  { level: "A1", word: "morning", def: "the early part of the day" },
  { level: "A1", word: "family", def: "your parents and brothers or sisters" },
  { level: "A1", word: "happy", def: "feeling good and smiling" },
  { level: "A2", word: "repair", def: "to fix something broken" },
  { level: "A2", word: "message", def: "a short text you send to someone" },
  { level: "A2", word: "travel", def: "to go to another place" },
  { level: "A2", word: "arrive", def: "to get to a place" },
  { level: "B1", word: "achieve", def: "to succeed in doing something you wanted" },
  { level: "B1", word: "imagine", def: "to form a picture in your mind" },
  { level: "B1", word: "increase", def: "to become bigger in number or amount" },
  { level: "B1", word: "reduce", def: "to make something smaller or less" },
  // ... diğer 100 soru buraya eklenebilir
];

function levelIndex(l: Level) { return l === "A1" ? 0 : l === "A2" ? 1 : 2; }
function pickOne<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function WordMeaningGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);
  
  // Logic Refs
  const timeLeftRef = useRef(60);
  const runningRef = useRef(false);
  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<{ prompt: string; correctWord: string; startTime: number } | null>(null);
  const levelRef = useRef<Level>("A1");
  const streakRef = useRef(0);
  const scoreRef = useRef(0);
  const sheetRef = useRef<HTMLImageElement | null>(null);

  // UI States
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [highScore, setHighScore] = useState(0);

  // Audio Context (Lazy Init)
  const audioCtxRef = useRef<AudioContext | null>(null);

  // --- SPRITE LOADING (Restored) ---
  useEffect(() => {
    const img = new Image();
    img.src = "/sprites/balloons_sheet.png"; 
    img.onload = () => { sheetRef.current = img; };
    img.onerror = () => { sheetRef.current = null; };
  }, []);

  function playSound(freq: number, type: OscillatorType = "sine", dur = 0.1) {
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch (e) {}
  }

  function makeQuestion() {
    const li = levelIndex(levelRef.current);
    let pool = BANK.filter(q => levelIndex(q.level) === li);
    if (pool.length === 0) pool = BANK;
    
    const correct = pickOne(pool);
    const wrongs = shuffle(BANK.filter(q => q.word !== correct.word)).slice(0, 3).map(q => q.word);
    const options = shuffle([correct.word, ...wrongs]);
    
    questionRef.current = { 
      prompt: correct.def, 
      correctWord: correct.word,
      startTime: performance.now() 
    };
    return options;
  }

  function makeBalloons() {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const w = wrap.clientWidth;
    const h = 520;
    const options = makeQuestion();
    
    const xs = shuffle(Array.from({ length: 4 }, (_, i) => (w / 5) * (i + 1)));
    
    balloonsRef.current = options.map((text, i) => ({
      id: Math.random().toString(36),
      x: xs[i],
      y: h + 100 + i * 30,
      r: 50 + Math.random() * 10,
      // HIZ DÜZENLENDİ: Daha yavaş ve vurulabilir
      vy: 80 + Math.random() * 60, 
      text,
      isCorrect: text === questionRef.current?.correctWord,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
      frame: Math.floor(Math.random() * 10),
      frameAcc: 0
    }));
  }

  function onHitBalloon(b: Balloon) {
    if (b.isCorrect) {
      // SCORING: Base 10 + Combo Bonus
      const comboBonus = streakRef.current * 2;
      const totalGain = 10 + comboBonus;
      scoreRef.current += totalGain;
      setScore(scoreRef.current);
      
      // SPEED BONUS: 2 saniyeden hızlıysa +3s, değilse +1s
      const solveTime = (performance.now() - (questionRef.current?.startTime || 0)) / 1000;
      const timeGain = solveTime < 2.5 ? 3 : 1;
      timeLeftRef.current = Math.min(120, timeLeftRef.current + timeGain);
      
      streakRef.current += 1;
      playSound(440 + streakRef.current * 20, "sine");
      
      // Seviye Atlama Mantığı
      if (streakRef.current % 5 === 0 && levelRef.current !== "B1") {
        const nextLv = levelRef.current === "A1" ? "A2" : "B1";
        levelRef.current = nextLv;
        setLevel(nextLv);
      }
      
      makeBalloons();
    } else {
      scoreRef.current = Math.max(0, scoreRef.current - 5);
      setScore(scoreRef.current);
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 3);
      streakRef.current = 0;
      playSound(150, "square", 0.2);
      makeBalloons(); // Yanlışta temizle ve yeni soru
    }
  }

  function start() {
    scoreRef.current = 0;
    setScore(0);
    timeLeftRef.current = 60;
    setTimeLeft(60);
    streakRef.current = 0;
    levelRef.current = "A1";
    setLevel("A1");
    
    runningRef.current = true;
    setRunning(true);
    
    makeBalloons();
    lastTRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }

  function update(dt: number) {
    if (!runningRef.current) return;
    
    timeLeftRef.current -= dt;
    if (timeLeftRef.current <= 0) {
      timeLeftRef.current = 0;
      runningRef.current = false;
      setRunning(false);
      if (scoreRef.current > highScore) setHighScore(scoreRef.current);
      return;
    }
    setTimeLeft(Math.ceil(timeLeftRef.current));

    const bs = balloonsRef.current;
    for (const b of bs) {
      b.y -= b.vy * dt;
      b.frameAcc += dt * 10;
      b.frame = Math.floor(b.frameAcc) % 10;
    }

    if (bs.length > 0 && bs.every(b => b.y + b.r < 0)) {
      streakRef.current = 0; // Hepsi kaçarsa kombo sıfırlanır
      makeBalloons();
    }
  }

  function draw() {
    const ctx = ctxRef.current;
    if (!ctx || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const { dpr } = sizeRef.current;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Balonlar
    const sheet = sheetRef.current;
    for (const b of balloonsRef.current) {
      if (sheet) {
        // Sprite Çizimi (Restored)
        const sw = sheet.width / 5;
        const sh = sheet.height / 2;
        const fx = (b.frame % 5) * sw;
        const fy = Math.floor(b.frame / 5) * sh;
        ctx.drawImage(sheet, fx, fy, sw, sh, b.x - b.r * 1.2, b.y - b.r * 1.2, b.r * 2.4, b.r * 2.4);
      } else {
        // Fallback: Renkli Daire
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Kelime
      ctx.fillStyle = "white";
      ctx.font = `bold ${Math.max(14, b.r * 0.4)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 4;
      ctx.fillText(b.text, b.x, b.y - 5);
      ctx.shadowBlur = 0;
    }

    // Soru (Prompt)
    if (questionRef.current) {
      ctx.fillStyle = "white";
      ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(questionRef.current.prompt, canvas.clientWidth / 2, 40);
    }
  }

  function loop(t: number) {
    const dt = Math.min(0.1, (t - lastTRef.current) / 1000);
    lastTRef.current = t;
    update(dt);
    draw();
    if (runningRef.current) rafRef.current = requestAnimationFrame(loop);
  }

  const sizeRef = useRef({ dpr: 1 });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    sizeRef.current.dpr = dpr;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctxRef.current = ctx;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-4 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
        {/* HUD */}
        <div className="flex justify-between items-center p-4 bg-slate-900 text-white">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-blue-400 uppercase">EnglishMeter</span>
            <span className="text-xl font-black">⭐ {score}</span>
          </div>
          <div className="text-center">
            <span className="text-xs block text-slate-400">COMBO</span>
            <span className="text-xl font-black text-orange-400">x{streakRef.current}</span>
          </div>
          <div className="text-right">
            <span className="text-xs block text-slate-400">TIME</span>
            <span className={`text-xl font-black ${timeLeft < 10 ? "text-red-500 animate-pulse" : ""}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Game Area */}
        <div ref={wrapRef} className="relative bg-slate-800" style={{ height: 520 }}>
          <canvas 
            ref={canvasRef} 
            className="w-full h-full touch-none"
            onPointerDown={(e) => {
              if (!runningRef.current) return;
              const rect = canvasRef.current!.getBoundingClientRect();
              const px = e.clientX - rect.left;
              const py = e.clientY - rect.top;
              
              // Hit detection
              for (const b of [...balloonsRef.current].reverse()) {
                const dist = Math.sqrt((px - b.x)**2 + (py - b.y)**2);
                if (dist < b.r * 1.2) {
                  onHitBalloon(b);
                  break;
                }
              }
            }}
          />

          {/* Start/End Overlays */}
          {!running && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="text-center p-8 bg-white rounded-3xl shadow-2xl transform scale-110">
                <h2 className="text-4xl font-black mb-2 text-slate-900">
                  {timeLeft === 0 ? "GAME OVER" : "READY?"}
                </h2>
                {timeLeft === 0 && (
                  <div className="mb-6">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Final Score</p>
                    <p className="text-5xl font-black text-blue-600">{score}</p>
                    {score >= highScore && score > 0 && (
                      <p className="text-orange-500 font-bold mt-2 text-sm">🏆 NEW BEST!</p>
                    )}
                  </div>
                )}
                <button 
                  onClick={start}
                  className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 active:scale-90 transition-all shadow-lg"
                >
                  {timeLeft === 0 ? "TRY AGAIN" : "START"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
        Powered by TestDünya & EnglishMeter
      </p>
    </div>
  );
}
