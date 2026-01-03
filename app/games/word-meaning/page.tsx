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
  // --- UNIT 1: HELLO! ---
  { level: "A1", word: "History", def: "I love learning about old times in ____ class." },
  { level: "A1", word: "Science", def: "We do experiments in the ____ lab." },
  { level: "A1", word: "Germany", def: "Hans is from ____. He is German." },
  { level: "A1", word: "Pleasure", def: "Nice to meet you! - My ____." },
  { level: "A1", word: "Primary", def: "I am a student at Ataturk ____ School." },
  { level: "A1", word: "Classes", def: "How many ____ do you have on Monday?" },

  // --- UNIT 2: MY TOWN ---
  { level: "A1", word: "Between", def: "The park is ____ the bank and the cafe." },
  { level: "A1", word: "Opposite", def: "The school is ____ the bus station." },
  { level: "A1", word: "Barber", def: "I go to the ____ to cut my hair." },
  { level: "A1", word: "Straight", def: "Go ____ ahead and turn left." },
  { level: "A1", word: "Pharmacy", def: "You can buy medicine from the ____." },
  { level: "A1", word: "Pool", def: "I want to swim in the swimming ____." },
  { level: "A1", word: "Museum", def: "You can see old statues in the ____." },

  // --- UNIT 3: GAMES AND HOBBIES ---
  { level: "A1", word: "Camping", def: "I love sleeping in a tent. My hobby is ____." },
  { level: "A1", word: "Fishing", def: "My grandpa loves ____ by the lake." },
  { level: "A1", word: "Collect", def: "I ____ stamps in my free time." },
  { level: "A1", word: "Blind", def: "Let's play ____ man's buff!" },
  { level: "A1", word: "Tag", def: "Run fast! We are playing ____." },
  { level: "A1", word: "Buttons", def: "I have many colorful ____ for my hobby." },

  // --- UNIT 4: MY DAILY ROUTINE ---
  { level: "A1", word: "Arrive", def: "I ____ at school at 08:30 in the morning." },
  { level: "A1", word: "Early", def: "I get up ____ at 07:00 every day." },
  { level: "A1", word: "Quarter", def: "It is ____ past ten. (10:15)" },
  { level: "A1", word: "Brush", def: "Don't forget to ____ your teeth!" },
  { level: "A1", word: "Comb", def: "I ____ my hair before I leave home." },
  { level: "A1", word: "Watch", def: "I ____ cartoons in the afternoon." },
  { level: "A1", word: "Diary", def: "I write my secrets in my ____." },

  // --- UNIT 5: HEALTH ---
  { level: "A1", word: "Blanket", def: "I feel cold. I need a ____." },
  { level: "A1", word: "Syrup", def: "The doctor gave me some cough ____." },
  { level: "A1", word: "Sore", def: "My throat is ____. I can't speak." },
  { level: "A1", word: "Vitamin", def: "Eat fruit to get more ____ C." },
  { level: "A1", word: "Stomachache", def: "I ate too much cake. Now I have a ____." },
  { level: "A1", word: "Tired", def: "I worked all day. I feel very ____." },

  // --- UNIT 6: MOVIES ---
  { level: "A1", word: "Horror", def: "I am scared of ghosts! I don't like ____ movies." },
  { level: "A1", word: "Science-fiction", def: "Star Wars is a famous ____ movie." },
  { level: "A1", word: "Boring", def: "This movie is not fun. It is very ____." },
  { level: "A1", word: "Strong", def: "Superman can lift cars. He is very ____." },
  { level: "A1", word: "Evil", def: "The Joker is an ____ character." },
  { level: "A1", word: "Musical", def: "There is a lot of singing in a ____ movie." },

  // --- UNIT 7: PARTY TIME ---
  { level: "A1", word: "Invitation", def: "Did you send the ____ cards to your friends?" },
  { level: "A1", word: "Guest", def: "There are twenty ____s at the party." },
  { level: "A1", word: "Clown", def: "The ____ is very funny at the birthday party." },
  { level: "A1", word: "Gift", def: "I bought a beautiful ____ for you. Open it!" },
  { level: "A1", word: "Beverages", def: "We have juice and coke. What are your favorite ____?" },
  { level: "A1", word: "Ordered", def: "My dad ____ a big chocolate cake." },

  // --- UNIT 8: FITNESS ---
  { level: "A1", word: "Workout", def: "I go to the gym to ____ every morning." },
  { level: "A1", word: "Racket", def: "You need a ____ and a ball to play tennis." },
  { level: "A1", word: "Hiking", def: "We love walking in the nature. Let's go ____." },
  { level: "A1", word: "Goal", def: "Kick the ball and score a ____!" },
  { level: "A1", word: "Equipment", def: "A helmet is an important ____ for cycling." },

  // --- UNIT 9: ANIMAL SHELTER ---
  { level: "A1", word: "Vet", def: "The ____ is examining the sick dog." },
  { level: "A1", word: "Barking", def: "Listen! The dog is ____ at the cat." },
  { level: "A1", word: "Kitten", def: "Look at that small ____. It is so cute!" },
  { level: "A1", word: "Feeding", def: "The children are ____ the ducks in the park." },
  { level: "A1", word: "Claw", def: "Be careful! The cat has sharp ____s." },
  { level: "A1", word: "Tail", def: "The dog is wagging its ____." },

  // --- UNIT 10: FESTIVALS ---
  { level: "A1", word: "Flag", def: "We hang ____s on our windows on April 23rd." },
  { level: "A1", word: "Parade", def: "We watch the military ____ on Republic Day." },
  { level: "A1", word: "Fireworks", def: "The sky is colorful with ____ at night." },
  { level: "A1", word: "Traditional", def: "We wear ____ clothes and dance." },
  { level: "A1", word: "Sacrifice", def: "We visit our relatives on ____ Feast." },
  { level: "A1", word: "Pocket", def: "Grandparents give ____ money to children." },
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

  function playHappyAmbient() {
  const ctx = audioCtxRef.current;
  if (!ctx || !windGainRef.current) return;

  const osc = ctx.createOscillator();
  const g = ctx.createGain();

  // Ürkütücü triangle yerine yumuşak 'sine' dalgası
  osc.type = "sine"; 
  
  // Rastgele neşeli notalar (Do, Mi, Sol - C Major Triad)
  const notes = [523.25, 659.25, 783.99, 1046.50]; 
  osc.frequency.value = notes[Math.floor(Math.random() * notes.length)];

  g.gain.setValueAtTime(0, ctx.currentTime);
  g.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.1); // Çok kısık ses
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

  osc.connect(g);
  g.connect(windGainRef.current);

  osc.start();
  osc.stop(ctx.currentTime + 1.5);
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
    if (windSoundAccRef.current > 1.2) { playHappyAmbient(); windSoundAccRef.current = 0; }

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
