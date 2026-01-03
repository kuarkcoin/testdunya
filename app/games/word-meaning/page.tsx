"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// --- LEVEL & TYPES ---
type Level = "A1" | "A2" | "B1";
type QA = { level: Level; word: string; def: string };
type Balloon = {
  id: string;
  x: number;
  y: number;
  r: number;
  vy: number;
  text: string;
  isCorrect: boolean;
  frame: number;
  frameAcc: number; // Kare animasyonu için eklendi
};

// --- HELPER FUNCTIONS ---
function levelIndex(l: Level) { return l === "A1" ? 0 : l === "A2" ? 1 : 2; }
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickOne<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }

// --- WORD BANK (100 Questions) ---
const BANK: QA[] = [
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

export default function WordMeaningPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);
  
  const timeLeftRef = useRef(60);
  const uiTimerAccRef = useRef(0);
  const runningRef = useRef(false);
  const balloonsRef = useRef<Balloon[]>([]);
  const questionRef = useRef<{ prompt: string; correctWord: string } | null>(null);
  
  const levelRef = useRef<Level>("A1");
  const correctWindowRef = useRef(0);
  const wrongWindowRef = useRef(0);
  const streakRef = useRef(0);
  const answersRef = useRef(0);
  const sheetRef = useRef<HTMLImageElement | null>(null);

  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [soundOn, setSoundOn] = useState(true);
  const [classMode, setClassMode] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sizeRef = useRef({ w: 900, h: 520, dpr: 1 });

  function ensureAudio() {
    if (!soundOn) return null;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === "suspended") audioCtxRef.current.resume();
      return audioCtxRef.current;
    } catch { return null; }
  }

  function playTone(kind: "correct" | "wrong" | "bling", intensity = 1) {
    if (!soundOn || classMode) return;
    const ac = ensureAudio();
    if (!ac) return;
    const now = ac.currentTime;
    const o = ac.createOscillator();
    const g = ac.createGain();
    const base = kind === "correct" ? 660 : kind === "wrong" ? 180 : 980;
    const dur = kind === "bling" ? 0.15 : 0.12;
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

  function resizeCanvas() {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const rect = wrap.getBoundingClientRect();
    const wCss = Math.max(320, Math.floor(rect.width));
    const hCss = 520;
    const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));
    sizeRef.current = { w: wCss, h: hCss, dpr };
    canvas.width = Math.floor(wCss * dpr);
    canvas.height = Math.floor(hCss * dpr);
    canvas.style.width = `${wCss}px`;
    canvas.style.height = `${hCss}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctxRef.current = ctx;
  }

  function makeQuestion(lvl: Level) {
    const li = levelIndex(lvl);
    let pool = BANK.filter((q) => levelIndex(q.level) === li);
    if (pool.length === 0) pool = BANK;
    const correct = pickOne(pool);
    const wrongPool = BANK.filter((q) => q.word !== correct.word);
    const wrongs = shuffle(wrongPool).slice(0, 3).map((q) => q.word);
    const options = shuffle([correct.word, ...wrongs]);
    questionRef.current = { prompt: `Definition: ${correct.def}`, correctWord: correct.word };
    return options.map((t) => ({ text: t, isCorrect: t === correct.word }));
  }

  function makeBalloons() {
    const { w, h } = sizeRef.current;
    const opts = makeQuestion(levelRef.current);
    const count = 4;
    const xs = shuffle(Array.from({ length: count }, (_, i) => (w / (count + 1)) * (i + 1)));
    balloonsRef.current = opts.map((opt, i) => ({
      id: `${Date.now()}_${i}`,
      x: xs[i],
      y: h + 100 + i * 40,
      r: 56 + Math.random() * 15,
      vy: 110 + Math.random() * 50,
      text: opt.text,
      isCorrect: opt.isCorrect,
      frame: Math.floor(Math.random() * 10),
      frameAcc: 0
    }));
  }

  // --- DÜZELTME 2: Play Again & Start logic ---
  function start() {
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
    
    // Önce state'i setle, sonra loop'u başlat
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
    answersRef.current += 1;
    if (answersRef.current % 5 !== 0) return;

    let lvl = levelRef.current;
    const li = levelIndex(lvl);
    if (correctWindowRef.current >= 4 && li < 2) lvl = li === 0 ? "A2" : "B1";
    else if (wrongWindowRef.current >= 2 && li > 0) lvl = li === 2 ? "A2" : "A1";

    correctWindowRef.current = 0;
    wrongWindowRef.current = 0;
    if (lvl !== levelRef.current) {
      levelRef.current = lvl;
      setLevel(lvl);
    }
  }

  // --- DÜZELTME 1: Yanlış Cevapta Tüm Balonları Temizle ---
  function onHitBalloon(b: Balloon) {
    if (b.isCorrect) {
      setScore((s) => s + 10);
      streakRef.current += 1;
      timeLeftRef.current = Math.min(120, timeLeftRef.current + 1);
      playTone("correct", 1);
      if (streakRef.current % 5 === 0) playTone("bling", 1.2);
      adjustLevelAfterAnswer(true);
      makeBalloons(); // Yeni soru
    } else {
      setScore((s) => Math.max(0, s - 5));
      streakRef.current = 0;
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 3);
      playTone("wrong", 1);
      adjustLevelAfterAnswer(false);
      // Yanlışta her şeyi temizle ve yeni soruya geç (Cezalandırıcı Mekanik)
      makeBalloons(); 
    }
  }

  // --- DÜZELTME 3: Balloon Regeneration ---
  function update(dt: number) {
    if (!runningRef.current) return;
    const nt = Math.max(0, timeLeftRef.current - dt);
    timeLeftRef.current = nt;
    uiTimerAccRef.current += dt;
    if (uiTimerAccRef.current >= 0.1) {
      uiTimerAccRef.current = 0;
      setTimeLeft(nt);
    }
    if (nt <= 0) { endGame(); return; }

    const bs = balloonsRef.current;
    for (const b of bs) {
      b.y -= b.vy * dt;
      b.frameAcc += dt * 8; // Animasyon hızı kontrolü
      b.frame = Math.floor(b.frameAcc) % 10;
    }

    // Temizleme ve Yenileme
    const alive = bs.filter((b) => b.y + b.r > -50);
    if (alive.length === 0) {
      makeBalloons();
    } else {
      balloonsRef.current = alive;
    }
  }

  function draw() {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const { w, h, dpr } = sizeRef.current;

    // --- DÜZELTME 4: Güvenli Canvas Clear ---
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#0b1220";
    ctx.fillRect(0, 0, w, h);

    // Balonlar
    for (const b of balloonsRef.current) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.isCorrect ? "rgba(34,197,94,0.9)" : "rgba(59,130,246,0.8)";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "white";
      ctx.stroke();

      // Metin
      ctx.save();
      ctx.font = `bold ${Math.max(16, b.r * 0.45)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 4;
      ctx.fillText(b.text, b.x, b.y);
      ctx.restore();
    }

    // Prompt (Soru)
    const prompt = questionRef.current?.prompt ?? "";
    if (prompt) {
      ctx.save();
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 10;
      ctx.fillText(prompt, w / 2, 40);
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

  // --- DÜZELTME 5: Seviye Değişince Soru Yenileme ---
  useEffect(() => {
    if (runningRef.current) makeBalloons();
  }, [level]);

  useEffect(() => {
    resizeCanvas();
    const onR = () => resizeCanvas();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!runningRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      for (const b of [...balloonsRef.current].reverse()) {
        const dx = px - b.x;
        const dy = py - b.y;
        if (dx * dx + dy * dy <= (b.r * 1.2) ** 2) {
          onHitBalloon(b);
          break;
        }
      }
    };
    canvas.addEventListener("pointerdown", handlePointerDown);
    return () => canvas.removeEventListener("pointerdown", handlePointerDown);
  }, [level]);

  return (
    <main className="min-h-screen bg-slate-100 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-xl font-black">🎈 WordMeaningPop</h1>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">EnglishMeter.net</div>
          </div>
          <div className="flex gap-4 font-bold text-sm">
            <div className="bg-blue-50 px-3 py-1 rounded-lg">⭐ {score}</div>
            <div className="bg-green-50 px-3 py-1 rounded-lg">🎯 {level}</div>
            <div className={`px-3 py-1 rounded-lg ${timeLeft < 10 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-50'}`}>⏱️ {Math.ceil(timeLeft)}s</div>
          </div>
        </div>

        <div ref={wrapRef} className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
          <canvas ref={canvasRef} className="block w-full touch-none" />
          
          {(!running || timeLeft <= 0) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
              <div className="bg-white p-8 rounded-3xl text-center shadow-2xl max-w-sm w-full">
                <h2 className="text-3xl font-black mb-2">{timeLeft <= 0 ? "Time's Up!" : "Ready?"}</h2>
                {timeLeft <= 0 && <p className="text-4xl font-black text-blue-600 mb-6">{score} PTS</p>}
                <button 
                  onClick={start}
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-200"
                >
                  {timeLeft <= 0 ? "PLAY AGAIN" : "START GAME"}
                </button>
                <div className="mt-4 flex justify-center gap-2">
                  <button onClick={() => setSoundOn(!soundOn)} className="text-xs font-bold text-slate-400 border p-2 rounded-lg italic">
                    {soundOn ? "🔊 Audio On" : "🔇 Audio Off"}
                  </button>
                  <button onClick={() => setClassMode(!classMode)} className="text-xs font-bold text-slate-400 border p-2 rounded-lg italic">
                    {classMode ? "🏫 Class Mode" : "🎮 Game Mode"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
