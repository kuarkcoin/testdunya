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

// --- HELPER FUNCTIONS ---
function levelIndex(l: Level): number { return l === "A1" ? 0 : l === "A2" ? 1 : 2; }
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickOne<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

// --- FULL 100+ QUESTION BANK ---
const BANK: QA[] = [
    // UNIT 1: Hello
    { level: "A1", word: "History", def: "I love learning about old times in ____ class." },
    { level: "A1", word: "Science", def: "We do experiments in the ____ lab." },
    { level: "A1", word: "Germany", def: "Hans is from ____. He is German." },
    { level: "A1", word: "Pleasure", def: "Nice to meet you! - My ____." },
    { level: "A1", word: "Primary", def: "I am a student at Ataturk ____ School." },
    { level: "A1", word: "Classes", def: "How many ____ do you have on Monday?" },
    { level: "A1", word: "Double", def: "We have ____ PE on Tuesdays." },
    { level: "A1", word: "Languages", def: "I can speak three ____: English, German and Turkish." },
    { level: "A1", word: "Secondary", def: "My big brother goes to ____ school." },
    { level: "A1", word: "Favorite", def: "Maths is my ____ lesson. I love it!" },
    // UNIT 2: My Town
    { level: "A1", word: "Between", def: "The park is ____ the bank and the cafe." },
    { level: "A1", word: "Opposite", def: "The school is ____ the bus station." },
    { level: "A1", word: "Barber", def: "I go to the ____ to cut my hair." },
    { level: "A1", word: "Straight", def: "Go ____ ahead and turn left." },
    { level: "A1", word: "Pharmacy", def: "You can buy medicine from the ____." },
    { level: "A1", word: "Pool", def: "I want to swim in the swimming ____." },
    { level: "A1", word: "Museum", def: "You can see old statues in the ____." },
    { level: "A1", word: "Library", def: "You can read books at the ____." },
    { level: "A1", word: "Bakery", def: "I buy fresh bread from the ____." },
    { level: "A1", word: "Hospital", def: "Doctors work at the ____." },
    // UNIT 3: Games and Hobbies
    { level: "A1", word: "Camping", def: "I love sleeping in a tent. My hobby is ____." },
    { level: "A1", word: "Fishing", def: "My grandpa loves ____ by the lake." },
    { level: "A1", word: "Collect", def: "I ____ stamps in my free time." },
    { level: "A1", word: "Blind", def: "Let's play ____ man's buff!" },
    { level: "A1", word: "Tag", def: "Run fast! We are playing ____." },
    { level: "A1", word: "Chess", def: "I like playing ____ with my friends." },
    { level: "A1", word: "Origami", def: "I can fold paper and make ____." },
    { level: "A1", word: "Cycling", def: "I have a new bike. I love ____." },
    { level: "A1", word: "Dodgeball", def: "____ is my favorite playground game." },
    { level: "A1", word: "Skipping", def: "Girls like ____ rope in the garden." },
    // UNIT 4: My Daily Routine
    { level: "A1", word: "Arrive", def: "I ____ at school at 08:30 in the morning." },
    { level: "A1", word: "Early", def: "I get up ____ at 07:00 every day." },
    { level: "A1", word: "Quarter", def: "It is ____ past ten. (10:15)" },
    { level: "A1", word: "Brush", def: "Don't forget to ____ your teeth!" },
    { level: "A1", word: "Breakfast", def: "I eat ____ in the morning." },
    { level: "A1", word: "Homework", def: "I do my ____ after school." },
    { level: "A1", word: "Dinner", def: "My family eats ____ at 7 PM." },
    { level: "A1", word: "Face", def: "I wash my ____ every morning." },
    { level: "A1", word: "Comb", def: "I ____ my hair before I leave home." },
    { level: "A1", word: "Watch", def: "I ____ cartoons in the afternoon." },
    // UNIT 5: Health
    { level: "A1", word: "Blanket", def: "I feel cold. I need a ____." },
    { level: "A1", word: "Syrup", def: "The doctor gave me some cough ____." },
    { level: "A1", word: "Sore", def: "My throat is ____. I can't speak." },
    { level: "A1", word: "Fever", def: "My body is very hot. I have a ____." },
    { level: "A1", word: "Tissue", def: "I have a runny nose. I need a ____." },
    { level: "A1", word: "Cough", def: "He is ill. He has a bad ____." },
    { level: "A1", word: "Plaster", def: "My finger is bleeding. I need a ____." },
    { level: "A1", word: "Dentist", def: "My tooth hurts. I should see a ____." },
    { level: "A1", word: "Stomachache", def: "I ate too much cake. Now I have a ____." },
    { level: "A1", word: "Vitamin", def: "Eat fruit to get more ____ C." },
    // UNIT 6: Movies
    { level: "A1", word: "Horror", def: "I am scared of ghosts! I don't like ____ movies." },
    { level: "A1", word: "Science-fiction", def: "Star Wars is a famous ____ movie." },
    { level: "A1", word: "Animation", def: "Toy Story is a great ____ movie." },
    { level: "A1", word: "Brave", def: "Spiderman is very ____ and strong." },
    { level: "A1", word: "Funny", def: "This comedy movie is very ____." },
    { level: "A1", word: "Boring", def: "This movie is not fun. It is very ____." },
    { level: "A1", word: "Strong", def: "Superman can lift cars. He is very ____." },
    { level: "A1", word: "Evil", def: "The Joker is an ____ character." },
    { level: "A1", word: "Musical", def: "There is a lot of singing in a ____ movie." },
    { level: "A1", word: "Action", def: "I love fast cars and explosions in ____ movies." },
    // UNIT 7: Party Time
    { level: "A1", word: "Invitation", def: "Did you send the ____ cards to your friends?" },
    { level: "A1", word: "Guest", def: "There are twenty ____s at the party." },
    { level: "A1", word: "Candles", def: "Put the ____ on the birthday cake." },
    { level: "A1", word: "Beverages", def: "Milk and tea are my favorite ____." },
    { level: "A1", word: "Clown", def: "The ____ is very funny at the birthday party." },
    { level: "A1", word: "Gift", def: "I bought a beautiful ____ for you. Open it!" },
    { level: "A1", word: "Ordered", def: "My dad ____ a big chocolate cake." },
    { level: "A1", word: "Decorate", def: "Let's ____ the room with balloons." },
    { level: "A1", word: "Party", def: "I am having a fancy-dress ____ on Saturday." },
    { level: "A1", word: "Host", def: "Who is the ____ of this great party?" },
    // UNIT 8: Fitness
    { level: "A1", word: "Workout", def: "I go to the gym to ____ every morning." },
    { level: "A1", word: "Racket", def: "You need a ____ and a ball to play tennis." },
    { level: "A1", word: "Hiking", def: "We love walking in the nature. Let's go ____." },
    { level: "A1", word: "Goal", def: "Kick the ball and score a ____!" },
    { level: "A1", word: "Equipment", def: "A helmet is an important ____ for cycling." },
    { level: "A1", word: "Exercise", def: "Regular ____ is good for your heart." },
    { level: "A1", word: "Hiking", def: "Let's go ____ in the mountains." },
    { level: "A1", word: "Running", def: "I wear my sneakers for ____." },
    { level: "A1", word: "Climbing", def: "Mountaineering is a difficult ____ sport." },
    { level: "A1", word: "Healthy", def: "Eating salad is very ____." },
    // UNIT 9: Animal Shelter
    { level: "A1", word: "Vet", def: "The ____ is examining the sick dog." },
    { level: "A1", word: "Barking", def: "Listen! The dog is ____ at the cat." },
    { level: "A1", word: "Puppy", def: "A baby dog is called a ____." },
    { level: "A1", word: "Adopting", def: "I am ____ a cat from the shelter." },
    { level: "A1", word: "Kitten", def: "Look at that small ____. It is so cute!" },
    { level: "A1", word: "Feeding", def: "The children are ____ the ducks in the park." },
    { level: "A1", word: "Claw", def: "Be careful! The cat has sharp ____s." },
    { level: "A1", word: "Tail", def: "The dog is wagging its ____." },
    { level: "A1", word: "Shelter", def: "Stray animals live in an animal ____." },
    { level: "A1", word: "Cage", def: "The birds are safe in their ____." },
    // UNIT 10: Festivals
    { level: "A1", word: "Flag", def: "We hang ____s on our windows on April 23rd." },
    { level: "A1", word: "Parade", def: "We watch the military ____ on Republic Day." },
    { level: "A1", word: "Fireworks", def: "The sky is colorful with ____ at night." },
    { level: "A1", word: "Traditional", def: "We wear ____ clothes and dance." },
    { level: "A1", word: "Sacrifice", def: "We visit our relatives on ____ Feast." },
    { level: "A1", word: "Pocket", def: "Grandparents give ____ money to children." },
    { level: "A1", word: "Costumes", def: "Children wear colorful ____ at festivals." },
    { level: "A1", word: "Ramadan", def: "We eat sweets on ____ Feast." },
    { level: "A1", word: "National", def: "October 29th is our ____ day." },
    { level: "A1", word: "Perform", def: "Students ____ folk dances at school." }
];

export default function WordMeaningGameFinal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  const timeLeftRef = useRef(60);
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

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const windGainRef = useRef<GainNode | null>(null);

  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [timeLeft, setTimeLeft] = useState(60);

  // --- AUDIO LOGIC ---
  function initAudio() {
    if (audioCtxRef.current) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;
    const master = ctx.createGain();
    master.gain.value = 0.4;
    master.connect(ctx.destination);
    masterGainRef.current = master;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.05;
    windGain.connect(master);
    windGainRef.current = windGain;
  }

  function playHappyAmbient() {
    const ctx = audioCtxRef.current;
    if (!ctx || !windGainRef.current) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    const notes = [523.25, 659.25, 783.99, 1046.50];
    osc.frequency.value = notes[Math.floor(Math.random() * notes.length)];
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.1);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc.connect(g); g.connect(windGainRef.current);
    osc.start(); osc.stop(ctx.currentTime + 1.2);
  }

  function playPop(correct: boolean) {
    const ctx = audioCtxRef.current;
    if (!ctx || !masterGainRef.current) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    if (correct) {
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.1);
    } else {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
    }
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.connect(g); g.connect(masterGainRef.current);
    osc.start(); osc.stop(ctx.currentTime + 0.2);
  }

  // --- GAME LOGIC ---
  // Fix #6: Level Adjuster
  function adjustLevel() {
    let next: Level = "A1";
    if (scoreRef.current > 300) next = "B1";
    else if (scoreRef.current > 150) next = "A2";
    
    if (next !== levelRef.current) {
      levelRef.current = next;
      setLevel(next);
    }
  }

  function makeQuestion() {
    let selected: QA;
    if (wrongQueueRef.current.length > 0 && Math.random() < 0.35) {
      selected = wrongQueueRef.current.shift()!;
    } else {
      const li = levelIndex(levelRef.current);
      let pool = BANK.filter(q => levelIndex(q.level) === li);
      if (pool.length === 0) pool = BANK;
      selected = pickOne(pool);
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
      vx: (Math.random() - 0.5) * 10, vy: 50 + Math.random() * 30,
      text, isCorrect: text === questionRef.current?.word,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length], phase: Math.random() * Math.PI * 2,
      frame: Math.floor(Math.random() * 10), frameAcc: 0
    }));
  }

  function onHitBalloon(b: Balloon) {
    if (b.isCorrect) {
      scoreRef.current += 10 + (streakRef.current * 2);
      setScore(scoreRef.current);
      streakRef.current++;
      timeLeftRef.current = Math.min(180, timeLeftRef.current + 4);
      if (streakRef.current >= 3) shakeRef.current = Math.min(15, 3 + streakRef.current);
      playPop(true);
      adjustLevel();
      makeBalloons();
    } else {
      if (questionRef.current) wrongQueueRef.current.push(questionRef.current);
      scoreRef.current = Math.max(0, scoreRef.current - 5);
      setScore(scoreRef.current);
      streakRef.current = 0;
      shakeRef.current = 0;
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 2);
      playPop(false);
      adjustLevel();
      makeBalloons();
    }
  }

  // --- UPDATE & DRAW ---
  function update(dt: number) {
    if (!runningRef.current) return;
    
    windRef.current += dt;
    const globalWind = Math.sin(windRef.current * 0.5) * 12;
    windSoundAccRef.current += dt;
    if (windSoundAccRef.current > 1.5) { playHappyAmbient(); windSoundAccRef.current = 0; }

    timeLeftRef.current -= dt;
    // Fix #2: Timer UI 0 check
    if (timeLeftRef.current <= 0) {
      timeLeftRef.current = 0;
      setTimeLeft(0);
      setRunning(false);
      runningRef.current = false;
      return;
    }
    setTimeLeft(Math.ceil(timeLeftRef.current));

    const bs = balloonsRef.current;
    for (const b of bs) {
      b.phase += dt;
      b.vx += globalWind * dt;
      b.x += b.vx * dt + Math.sin(b.phase * 0.8) * 0.3;
      b.y -= b.vy * dt;
      b.frameAcc += dt * 3;
      b.frame = Math.floor(b.frameAcc) % 10;
      const w = wrapRef.current?.clientWidth || 900;
      if (b.x < b.r) { b.x = b.r; b.vx *= -0.5; }
      if (b.x > w - b.r) { b.x = w - b.r; b.vx *= -0.5; }
    }

    // Soft Collision
    for (let i = 0; i < bs.length; i++) {
      for (let j = i + 1; j < bs.length; j++) {
        const a = bs[i], b = bs[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        const minDist = a.r + b.r;
        if (dist > 0 && dist < minDist) {
          const overlap = (minDist - dist) * 0.4;
          const nx = dx / dist, ny = dy / dist;
          a.x -= nx * overlap; b.x += nx * overlap;
          a.vx -= nx * 5; b.vx += nx * 5;
        }
      }
    }
    
    if (bs.length > 0 && bs.every(b => b.y + b.r < -20)) {
        streakRef.current = 0;
        makeBalloons();
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!ctx || !canvas) return;
    const w = canvas.clientWidth;
    const h = 520;
    const dpr = window.devicePixelRatio || 1;

    let sx = 0, sy = 0;
    if (shakeRef.current > 0) {
      sx = (Math.random() - 0.5) * shakeRef.current;
      sy = (Math.random() - 0.5) * shakeRef.current;
      shakeRef.current *= 0.88;
    }

    // Fix #1: Proper Canvas Clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.setTransform(dpr, 0, 0, dpr, sx, sy);
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, w, h);

    // Balloons
    for (const b of balloonsRef.current) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 4;
      ctx.fillText(b.text, b.x, b.y + 6);
      ctx.restore();
    }

    if (questionRef.current) {
      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = "bold 22px sans-serif";
      ctx.textAlign = "center";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 8;
      ctx.fillText(questionRef.current.def, w/2, 45);
      ctx.restore();
    }
  }

  function loop(t: number) {
    const dt = Math.min(0.05, (t - lastTRef.current) / 1000);
    lastTRef.current = t;
    update(dt); draw();
    if (runningRef.current) rafRef.current = requestAnimationFrame(loop);
  }

  // --- LIFECYCLE & RESIZE ---
  // Fix #3, #4, #7: Lifecycle, Memory & Resize
  useEffect(() => {
    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctxRef.current = ctx;
      }
    }
    
    resize();
    window.addEventListener("resize", resize);
    
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      runningRef.current = false;
    };
  }, []);

  function start() {
    initAudio();
    scoreRef.current = 0; setScore(0);
    timeLeftRef.current = 120; setTimeLeft(120);
    streakRef.current = 0;
    levelRef.current = "A1"; setLevel("A1");
    setRunning(true); runningRef.current = true;
    makeBalloons();
    lastTRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 bg-white p-5 rounded-3xl shadow-sm border-2 border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-slate-800">🎈 WordPop</h1>
            <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">EnglishMeter.net</div>
          </div>
          <div className="flex gap-4 font-black">
            <div className="bg-blue-50 px-4 py-2 rounded-2xl border border-blue-100 text-blue-700">⭐ {score}</div>
            <div className="bg-purple-50 px-4 py-2 rounded-2xl border border-purple-100 text-purple-700">🎯 {level}</div>
            <div className={`px-4 py-2 rounded-2xl border ${timeLeft < 15 ? 'bg-red-50 border-red-100 text-red-600 animate-pulse' : 'bg-slate-50 border-slate-200'}`}>⏱️ {timeLeft}s</div>
          </div>
        </div>

        <div ref={wrapRef} className="relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-900" style={{ height: 520 }}>
          <canvas ref={canvasRef} className="block w-full h-full touch-none" />
          
          {(!running) && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-6">
              <div className="bg-white p-10 rounded-[40px] text-center shadow-2xl max-w-sm w-full border-b-8 border-slate-200">
                <h2 className="text-4xl font-black mb-2 text-slate-800">{timeLeft <= 0 ? "Bitti!" : "Hazır mısın?"}</h2>
                {timeLeft <= 0 && <p className="text-5xl font-black text-blue-600 mb-8">{score} Puan</p>}
                <button 
                  onClick={start}
                  className="w-full py-5 bg-blue-600 text-white rounded-3xl font-black text-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-200 mb-4"
                >
                  {timeLeft <= 0 ? "TEKRAR DENE" : "BAŞLA"}
                </button>
                <p className="text-slate-400 text-xs font-bold uppercase">5. Sınıf Müfredatı • EnglishMeter</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
            Collision Physics • Dynamic Audio • Adaptive Leveling
        </div>
      </div>
    </main>
  );
}
