"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Level = "A1" | "A2" | "B1";
type Kind = "definition" | "sentence" | "grammar" | "category";

type Question = {
  id: string;
  level: Level;
  kind: Kind;
  prompt: string;
  options: string[]; // 4 seçenek
  correct: string;
};

type Balloon = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  text: string;
  isCorrect: boolean;
  frame: number; // 0..9 (sheet)
  _ft?: number; // frame timer
};

type PopFx = {
  x: number;
  y: number;
  t: number; // time alive
};

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => rej(new Error(`Image failed to load: ${src}`));
    img.src = src;
  });
}

// =========================
// 100 QUESTIONS (A1-A2-B1 mixed) - NO SYNONYMS
// =========================
const QUESTIONS: Question[] = [
  { id: "q001", level: "A1", kind: "definition", prompt: "A place where you borrow books.", options: ["library", "bakery", "hospital", "airport"], correct: "library" },
  { id: "q002", level: "A1", kind: "sentence", prompt: "I ___ my teeth every morning.", options: ["brush", "cook", "drive", "swim"], correct: "brush" },
  { id: "q003", level: "A1", kind: "grammar", prompt: "She ___ to school every day.", options: ["goes", "go", "going", "gone"], correct: "goes" },
  { id: "q004", level: "A1", kind: "category", prompt: "Which one is a fruit?", options: ["apple", "chair", "river", "pencil"], correct: "apple" },
  { id: "q005", level: "A1", kind: "definition", prompt: "The meal you eat in the morning.", options: ["breakfast", "dinner", "lunch", "snack"], correct: "breakfast" },
  { id: "q006", level: "A1", kind: "grammar", prompt: "They ___ from Türkiye.", options: ["are", "is", "am", "be"], correct: "are" },
  { id: "q007", level: "A1", kind: "sentence", prompt: "My father ___ coffee.", options: ["likes", "like", "liking", "liked"], correct: "likes" },
  { id: "q008", level: "A1", kind: "category", prompt: "Which one is a color?", options: ["blue", "bread", "bird", "bus"], correct: "blue" },
  { id: "q009", level: "A1", kind: "definition", prompt: "A thing you use to write.", options: ["pen", "plate", "sock", "key"], correct: "pen" },
  { id: "q010", level: "A1", kind: "grammar", prompt: "I ___ a student.", options: ["am", "is", "are", "be"], correct: "am" },

  { id: "q011", level: "A2", kind: "sentence", prompt: "We ___ soccer on Sundays.", options: ["play", "read", "sleep", "build"], correct: "play" },
  { id: "q012", level: "A2", kind: "grammar", prompt: "They ___ watching a movie now.", options: ["are", "is", "am", "be"], correct: "are" },
  { id: "q013", level: "A2", kind: "definition", prompt: "A person who teaches students.", options: ["teacher", "pilot", "chef", "driver"], correct: "teacher" },
  { id: "q014", level: "A2", kind: "category", prompt: "Which one is an animal?", options: ["tiger", "table", "cloud", "shoe"], correct: "tiger" },
  { id: "q015", level: "A2", kind: "grammar", prompt: "He ___ TV at the moment.", options: ["is watching", "watch", "watches", "watched"], correct: "is watching" },
  { id: "q016", level: "A2", kind: "sentence", prompt: "Can you ___ the door, please?", options: ["open", "opens", "opening", "opened"], correct: "open" },
  { id: "q017", level: "A2", kind: "grammar", prompt: "There ___ two cats in the garden.", options: ["are", "is", "am", "be"], correct: "are" },
  { id: "q018", level: "A2", kind: "definition", prompt: "You wear these on your feet.", options: ["shoes", "gloves", "hats", "scarves"], correct: "shoes" },
  { id: "q019", level: "A2", kind: "sentence", prompt: "I usually go to bed ___ 10 p.m.", options: ["at", "in", "on", "to"], correct: "at" },
  { id: "q020", level: "A2", kind: "grammar", prompt: "She ___ to music every evening.", options: ["listens", "listen", "listening", "listened"], correct: "listens" },

  { id: "q021", level: "A1", kind: "sentence", prompt: "My brother is ___ the kitchen.", options: ["in", "on", "at", "to"], correct: "in" },
  { id: "q022", level: "A1", kind: "category", prompt: "Which one is a drink?", options: ["water", "bread", "rice", "cheese"], correct: "water" },
  { id: "q023", level: "A2", kind: "grammar", prompt: "I ___ my homework yesterday.", options: ["did", "do", "does", "doing"], correct: "did" },
  { id: "q024", level: "A2", kind: "sentence", prompt: "We went ___ the park last weekend.", options: ["to", "at", "in", "on"], correct: "to" },
  { id: "q025", level: "A2", kind: "definition", prompt: "A vehicle that flies in the sky.", options: ["airplane", "bicycle", "bus", "train"], correct: "airplane" },
  { id: "q026", level: "A1", kind: "grammar", prompt: "This is ___ apple.", options: ["an", "a", "the", "-"], correct: "an" },
  { id: "q027", level: "A2", kind: "grammar", prompt: "I have ___ apples.", options: ["two", "blue", "fast", "late"], correct: "two" },
  { id: "q028", level: "A1", kind: "sentence", prompt: "She can ___ very well.", options: ["sing", "sings", "singing", "sang"], correct: "sing" },
  { id: "q029", level: "A2", kind: "grammar", prompt: "We ___ in Istanbul last year.", options: ["lived", "live", "lives", "living"], correct: "lived" },
  { id: "q030", level: "A2", kind: "sentence", prompt: "Please ___ me your name.", options: ["tell", "tells", "telling", "told"], correct: "tell" },

  { id: "q031", level: "B1", kind: "grammar", prompt: "If it rains, we ___ at home.", options: ["will stay", "stay", "stayed", "staying"], correct: "will stay" },
  { id: "q032", level: "B1", kind: "grammar", prompt: "I have lived here ___ 2019.", options: ["since", "for", "during", "until"], correct: "since" },
  { id: "q033", level: "B1", kind: "sentence", prompt: "I’m tired because I ___ late last night.", options: ["went to bed", "go to bed", "goes to bed", "going to bed"], correct: "went to bed" },
  { id: "q034", level: "B1", kind: "grammar", prompt: "She was cooking while I ___ the table.", options: ["was setting", "set", "am setting", "sets"], correct: "was setting" },
  { id: "q035", level: "B1", kind: "definition", prompt: "A plan you make for the future is a ___.", options: ["goal", "noise", "taste", "mist"], correct: "goal" },
  { id: "q036", level: "B1", kind: "grammar", prompt: "You ___ smoke here. It’s not allowed.", options: ["mustn't", "must", "can", "could"], correct: "mustn't" },
  { id: "q037", level: "B1", kind: "sentence", prompt: "I’d like to ___ a reservation for two.", options: ["make", "do", "take", "put"], correct: "make" },
  { id: "q038", level: "B1", kind: "grammar", prompt: "This book is ___ than that one.", options: ["more interesting", "interesting", "interest", "the most interesting"], correct: "more interesting" },
  { id: "q039", level: "B1", kind: "grammar", prompt: "I ___ finished my homework yet.", options: ["haven't", "don't", "isn't", "wasn't"], correct: "haven't" },
  { id: "q040", level: "B1", kind: "sentence", prompt: "Could you ___ me a hand with this box?", options: ["give", "take", "put", "turn"], correct: "give" },

  { id: "q041", level: "A1", kind: "definition", prompt: "You sleep in this room.", options: ["bedroom", "kitchen", "bathroom", "garden"], correct: "bedroom" },
  { id: "q042", level: "A1", kind: "sentence", prompt: "I ___ a sandwich for lunch.", options: ["eat", "eats", "eating", "ate"], correct: "eat" },
  { id: "q043", level: "A2", kind: "grammar", prompt: "We ___ to the museum tomorrow.", options: ["are going", "go", "went", "going"], correct: "are going" },
  { id: "q044", level: "A2", kind: "sentence", prompt: "There is a cat ___ the table.", options: ["under", "in", "on", "to"], correct: "under" },
  { id: "q045", level: "A2", kind: "grammar", prompt: "She ___ her keys, so she can’t enter.", options: ["has lost", "lose", "loses", "lost"], correct: "has lost" },
  { id: "q046", level: "A1", kind: "category", prompt: "Which one is a number?", options: ["seven", "green", "summer", "sugar"], correct: "seven" },
  { id: "q047", level: "A2", kind: "definition", prompt: "A place where you see a doctor.", options: ["clinic", "cinema", "stadium", "market"], correct: "clinic" },
  { id: "q048", level: "A1", kind: "grammar", prompt: "___ you like tea?", options: ["Do", "Does", "Did", "Doing"], correct: "Do" },
  { id: "q049", level: "A2", kind: "sentence", prompt: "I’m ___ than my brother.", options: ["taller", "tall", "the tallest", "more tall"], correct: "taller" },
  { id: "q050", level: "A2", kind: "grammar", prompt: "We don’t have ___ milk left.", options: ["any", "some", "many", "a"], correct: "any" },

  { id: "q051", level: "B1", kind: "grammar", prompt: "The movie was so boring that I ___ asleep.", options: ["fell", "feel", "fall", "fallen"], correct: "fell" },
  { id: "q052", level: "B1", kind: "sentence", prompt: "I prefer tea ___ coffee.", options: ["to", "than", "from", "with"], correct: "to" },
  { id: "q053", level: "B1", kind: "grammar", prompt: "My phone battery is low; I need to ___ it.", options: ["charge", "change", "choose", "check"], correct: "charge" },
  { id: "q054", level: "B1", kind: "grammar", prompt: "He apologized ___ being late.", options: ["for", "to", "with", "at"], correct: "for" },
  { id: "q055", level: "B1", kind: "sentence", prompt: "I didn’t go out because I ___ to study.", options: ["had", "have", "has", "having"], correct: "had" },
  { id: "q056", level: "B1", kind: "grammar", prompt: "This is the restaurant ___ we met.", options: ["where", "who", "what", "when"], correct: "where" },
  { id: "q057", level: "B1", kind: "sentence", prompt: "She’s good ___ solving problems.", options: ["at", "in", "on", "to"], correct: "at" },
  { id: "q058", level: "B1", kind: "grammar", prompt: "I wish I ___ more time.", options: ["had", "have", "has", "having"], correct: "had" },
  { id: "q059", level: "B1", kind: "definition", prompt: "Something you do to relax is a ___.", options: ["hobby", "engine", "invoice", "factory"], correct: "hobby" },
  { id: "q060", level: "B1", kind: "grammar", prompt: "If I ___ you, I would take that job.", options: ["were", "was", "am", "be"], correct: "were" },

  { id: "q061", level: "A1", kind: "sentence", prompt: "Please ___ down.", options: ["sit", "sits", "sitting", "sat"], correct: "sit" },
  { id: "q062", level: "A1", kind: "definition", prompt: "You use it to cut paper.", options: ["scissors", "spoon", "soap", "shoe"], correct: "scissors" },
  { id: "q063", level: "A2", kind: "grammar", prompt: "I ___ never been to London.", options: ["have", "has", "am", "do"], correct: "have" },
  { id: "q064", level: "A2", kind: "sentence", prompt: "He is interested ___ music.", options: ["in", "on", "at", "to"], correct: "in" },
  { id: "q065", level: "A2", kind: "grammar", prompt: "We ___ a great time at the party.", options: ["had", "have", "has", "having"], correct: "had" },
  { id: "q066", level: "A1", kind: "category", prompt: "Which one is a day?", options: ["Monday", "January", "summer", "yellow"], correct: "Monday" },
  { id: "q067", level: "A2", kind: "definition", prompt: "A big shop where you buy many things.", options: ["supermarket", "bank", "museum", "factory"], correct: "supermarket" },
  { id: "q068", level: "A2", kind: "grammar", prompt: "The book is ___ the bag.", options: ["in", "at", "to", "on"], correct: "in" },
  { id: "q069", level: "A1", kind: "grammar", prompt: "How ___ you?", options: ["are", "is", "am", "be"], correct: "are" },
  { id: "q070", level: "A2", kind: "sentence", prompt: "I’m going to the gym ___ Friday.", options: ["on", "at", "in", "to"], correct: "on" },

  { id: "q071", level: "B1", kind: "sentence", prompt: "I can’t find my keys. I must have ___ them somewhere.", options: ["left", "leave", "leaves", "leaving"], correct: "left" },
  { id: "q072", level: "B1", kind: "grammar", prompt: "By the time we arrived, the train ___.", options: ["had left", "left", "has left", "was leaving"], correct: "had left" },
  { id: "q073", level: "B1", kind: "sentence", prompt: "I’m looking forward to ___ you soon.", options: ["seeing", "see", "saw", "seen"], correct: "seeing" },
  { id: "q074", level: "B1", kind: "grammar", prompt: "He suggested ___ a break.", options: ["taking", "take", "took", "taken"], correct: "taking" },
  { id: "q075", level: "B1", kind: "grammar", prompt: "I’d rather ___ at home tonight.", options: ["stay", "staying", "stayed", "to stay"], correct: "stay" },
  { id: "q076", level: "B1", kind: "sentence", prompt: "She’s responsible ___ the project.", options: ["for", "to", "with", "at"], correct: "for" },
  { id: "q077", level: "B1", kind: "grammar", prompt: "The meeting was cancelled ___ the weather.", options: ["because of", "because", "so", "although"], correct: "because of" },
  { id: "q078", level: "B1", kind: "sentence", prompt: "I’ve decided to ___ sugar in my tea.", options: ["reduce", "repeat", "reply", "repair"], correct: "reduce" },
  { id: "q079", level: "B1", kind: "grammar", prompt: "This is the best meal I ___ ever eaten.", options: ["have", "has", "am", "do"], correct: "have" },
  { id: "q080", level: "B1", kind: "definition", prompt: "A short trip for pleasure is an ___.", options: ["outing", "engine", "argument", "outline"], correct: "outing" },

  { id: "q081", level: "A1", kind: "definition", prompt: "You use it to call someone.", options: ["phone", "fork", "pillow", "ticket"], correct: "phone" },
  { id: "q082", level: "A1", kind: "grammar", prompt: "He ___ a car.", options: ["has", "have", "having", "had"], correct: "has" },
  { id: "q083", level: "A2", kind: "grammar", prompt: "There ___ a lot of people here.", options: ["are", "is", "am", "be"], correct: "are" },
  { id: "q084", level: "A2", kind: "sentence", prompt: "I ___ help you with that.", options: ["can", "cans", "coulds", "canning"], correct: "can" },
  { id: "q085", level: "A2", kind: "grammar", prompt: "We ___ dinner when the phone rang.", options: ["were having", "have", "had", "are having"], correct: "were having" },
  { id: "q086", level: "A1", kind: "category", prompt: "Which one is a body part?", options: ["hand", "sand", "stand", "band"], correct: "hand" },
  { id: "q087", level: "A2", kind: "definition", prompt: "A place where you watch films.", options: ["cinema", "station", "office", "garage"], correct: "cinema" },
  { id: "q088", level: "A2", kind: "grammar", prompt: "I don’t like coffee, but I like tea ___.", options: ["too", "two", "to", "then"], correct: "too" },
  { id: "q089", level: "A1", kind: "grammar", prompt: "Where ___ you live?", options: ["do", "does", "did", "done"], correct: "do" },
  { id: "q090", level: "A2", kind: "sentence", prompt: "I usually ___ a shower in the morning.", options: ["take", "do", "make", "put"], correct: "take" },

  { id: "q091", level: "B1", kind: "grammar", prompt: "If we hurry, we ___ catch the bus.", options: ["might", "must", "shouldn't", "can't"], correct: "might" },
  { id: "q092", level: "B1", kind: "sentence", prompt: "I’ve been working here ___ three years.", options: ["for", "since", "until", "during"], correct: "for" },
  { id: "q093", level: "B1", kind: "grammar", prompt: "He’s the person ___ helped me yesterday.", options: ["who", "where", "when", "what"], correct: "who" },
  { id: "q094", level: "B1", kind: "grammar", prompt: "I’ll call you when I ___ home.", options: ["get", "will get", "got", "getting"], correct: "get" },
  { id: "q095", level: "B1", kind: "grammar", prompt: "I’m not used to ___ up early.", options: ["waking", "wake", "woke", "woken"], correct: "waking" },
  { id: "q096", level: "B1", kind: "sentence", prompt: "Please ___ your phone off during the exam.", options: ["turn", "turns", "turned", "turning"], correct: "turn" },
  { id: "q097", level: "B1", kind: "grammar", prompt: "The room was ___ noisy to study.", options: ["too", "enough", "very", "so"], correct: "too" },
  { id: "q098", level: "B1", kind: "sentence", prompt: "She doesn’t eat meat because she is a ___.", options: ["vegetarian", "mechanic", "musician", "journalist"], correct: "vegetarian" },
  { id: "q099", level: "B1", kind: "grammar", prompt: "I had my hair ___ yesterday.", options: ["cut", "cutting", "to cut", "cuts"], correct: "cut" },
  { id: "q100", level: "B1", kind: "definition", prompt: "A person who travels by plane is a ___.", options: ["passenger", "builder", "neighbor", "customer"], correct: "passenger" },
];

const LEVELS: Level[] = ["A1", "A2", "B1"];

function nextLevel(lv: Level): Level {
  const i = LEVELS.indexOf(lv);
  return LEVELS[clamp(i + 1, 0, LEVELS.length - 1)];
}
function prevLevel(lv: Level): Level {
  const i = LEVELS.indexOf(lv);
  return LEVELS[clamp(i - 1, 0, LEVELS.length - 1)];
}
function levelIndex(lv: Level) {
  return LEVELS.indexOf(lv);
}

export default function WordMeaningBalloonPage() {
  // UI state
  const [assetsReady, setAssetsReady] = useState(false);
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<Level>("A1");
  const [prompt, setPrompt] = useState("Tap START");
  const [soundOn, setSoundOn] = useState(true);
  const [classMode, setClassMode] = useState(false);

  // Refs (game state)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  const boundsRef = useRef({ w: 800, h: 520 }); // CSS pixels
  const dprRef = useRef(1);

  const sheetRef = useRef<HTMLImageElement | null>(null);
  const popRef = useRef<HTMLImageElement | null>(null);

  const balloonsRef = useRef<Balloon[]>([]);
  const popsRef = useRef<PopFx[]>([]);
  const questionRef = useRef<Question | null>(null);

  const timeLeftRef = useRef(60);
  const runningRef = useRef(false);
  const streakRef = useRef(0);

  // Level async bug fix
  const levelRef = useRef<Level>("A1");
  useEffect(() => {
    levelRef.current = level;
  }, [level]);

  // Sound refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundOnRef = useRef(true);
  const classModeRef = useRef(false);
  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);
  useEffect(() => {
    classModeRef.current = classMode;
  }, [classMode]);

  // Recent answers (for auto level up/down)
  const recentRef = useRef<{ ok: boolean }[]>([]);

  const questionPools = useMemo(() => {
    const map: Record<Level, Question[]> = { A1: [], A2: [], B1: [] };
    for (const q of QUESTIONS) map[q.level].push(q);
    return map;
  }, []);

  // Resize & DPR setup
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ro = new ResizeObserver(() => {
      const rect = wrap.getBoundingClientRect();
      const cssW = Math.max(320, Math.floor(rect.width));
      const cssH = 520; // sabit yükseklik (istersen 480/600 yapabilirsin)

      const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));
      dprRef.current = dpr;
      boundsRef.current = { w: cssW, h: cssH };

      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
    });

    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  // Load images
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [sheet, pop] = await Promise.all([
          loadImage("/sprites/balloons_sheet.png"),
          loadImage("/sprites/pop.png"),
        ]);
        if (!alive) return;
        sheetRef.current = sheet;
        popRef.current = pop;
        setAssetsReady(true);
      } catch (e) {
        console.error(e);
        setAssetsReady(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Keep timeLeftRef synced
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  // stop loop on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function playTone(type: "correct" | "wrong" | "bling", streak: number) {
    if (!soundOnRef.current || classModeRef.current) return;
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    let vol = 0.18;

    if (type === "correct") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.09);
      vol = 0.18;
    } else if (type === "wrong") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.10);
      vol = 0.14;
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(1320, now + 0.05);
      vol = 0.20 + Math.min(streak, 12) * 0.008;
    }

    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  function makeQuestion(lv: Level): Question {
    const pool = questionPools[lv];
    // güvenli fallback
    const q = pool[(Math.random() * pool.length) | 0] || QUESTIONS[0];
    return q;
  }

  function makeBalloons(q: Question) {
    const { w, h } = boundsRef.current;

    const opts = shuffle(q.options.slice(0, 4));
    const speedBase = 90 + levelIndex(levelRef.current) * 25; // CSS px/s

    const balls: Balloon[] = opts.map((t) => {
      const r = 52 + Math.random() * 18; // mobil rahat
      const x = 70 + Math.random() * (w - 140);
      const y = 160 + Math.random() * (h - 240);

      const vx = (Math.random() * 2 - 1) * speedBase;
      const vy = (Math.random() * 2 - 1) * speedBase;

      return {
        x,
        y,
        r,
        vx,
        vy,
        text: t,
        isCorrect: t === q.correct,
        frame: (Math.random() * 10) | 0,
        _ft: 0,
      };
    });

    balloonsRef.current = balls;
  }

  function triggerPop(x: number, y: number) {
    popsRef.current.push({ x, y, t: 0 });
  }

  function registerResult(ok: boolean): Level {
    const r = recentRef.current;
    r.push({ ok });
    while (r.length > 5) r.shift();

    const last5 = r.slice(-5);
    const correct = last5.filter((x) => x.ok).length;
    const wrong = last5.length - correct;

    let nextLv: Level = levelRef.current;

    if (last5.length === 5 && correct >= 4) {
      nextLv = nextLevel(nextLv);
      recentRef.current = [];
    } else if (last5.length === 5 && wrong >= 2) {
      nextLv = prevLevel(nextLv);
      recentRef.current = [];
    }

    if (nextLv !== levelRef.current) {
      levelRef.current = nextLv;
      setLevel(nextLv);
    }
    return nextLv;
  }

  function scoreForCorrect(streak: number) {
    // arcade: base + combo
    const base = 10;
    const combo = Math.min(15, Math.floor(streak / 2));
    return base + combo;
  }

  function start() {
    // prime audio context (mobile)
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } else if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
    } catch {}

    streakRef.current = 0;
    recentRef.current = [];
    setScore(0);
    setTimeLeft(60);
    timeLeftRef.current = 60;

    // first question
    const lv = levelRef.current;
    const q = makeQuestion(lv);
    questionRef.current = q;
    setPrompt(q.prompt);
    makeBalloons(q);

    setRunning(true);
    runningRef.current = true;

    lastTRef.current = performance.now();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(loop);
  }

  function stop() {
    setRunning(false);
    runningRef.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }

  function endGame() {
    stop();
    setTimeLeft(0);
    timeLeftRef.current = 0;
  }

  function nextRoundWithLevel(lv: Level) {
    const q = makeQuestion(lv);
    questionRef.current = q;
    setPrompt(q.prompt);
    makeBalloons(q);
  }

  function onHitBalloon(hit: Balloon) {
    if (!runningRef.current) return;
    if (timeLeftRef.current <= 0) return;

    if (hit.isCorrect) {
      streakRef.current += 1;
      const add = scoreForCorrect(streakRef.current);
      setScore((s) => s + add);

      // time bonus (arcade)
      setTimeLeft((t) => Math.min(99, t + 1));

      // pop fx + sounds
      triggerPop(hit.x, hit.y);
      playTone("correct", streakRef.current);

      // combo bling each 5 streak
      if (streakRef.current % 5 === 0) playTone("bling", streakRef.current);

      // level may change based on last5
      const newLv = registerResult(true);

      // new question immediately with correct level (fix async state issue)
      nextRoundWithLevel(newLv);
    } else {
      // wrong
      streakRef.current = 0;
      registerResult(false);

      triggerPop(hit.x, hit.y);
      playTone("wrong", 0);

      // penalty
      setTimeLeft((t) => Math.max(0, t - 2));
    }
  }

  function update(dt: number) {
    // countdown time
    if (runningRef.current) {
      const t = timeLeftRef.current - dt;
      const nt = Math.max(0, t);
      if (Math.floor(nt) !== Math.floor(timeLeftRef.current)) {
        // update state about once per second-ish
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }
      timeLeftRef.current = nt;
      if (nt <= 0) {
        endGame();
        return;
      }
    }

    const { w, h } = boundsRef.current;

    // balloons
    const balls = balloonsRef.current;
    for (const b of balls) {
      b.x += b.vx * dt;
      b.y += b.vy * dt;

      // bounce
      if (b.x - b.r < 0) {
        b.x = b.r;
        b.vx *= -1;
      } else if (b.x + b.r > w) {
        b.x = w - b.r;
        b.vx *= -1;
      }

      if (b.y - b.r < 120) {
        b.y = 120 + b.r;
        b.vy *= -1;
      } else if (b.y + b.r > h) {
        b.y = h - b.r;
        b.vy *= -1;
      }

      // frame animation (soft)
      b._ft = (b._ft ?? 0) + dt;
      if (b._ft >= 0.12) {
        b.frame = (b.frame + 1) % 10;
        b._ft = 0;
      }
    }

    // pops
    const pops = popsRef.current;
    for (let i = pops.length - 1; i >= 0; i--) {
      pops[i].t += dt;
      if (pops[i].t > 0.25) pops.splice(i, 1);
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { w, h } = boundsRef.current;

    // background
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#fff7d6"; // warm yellow-ish
    ctx.fillRect(0, 0, w, h);

    // top HUD bg strip
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, w, 110);

    // prompt
    ctx.fillStyle = "rgba(0,0,0,0.85)";
    ctx.font = "700 20px ui-sans-serif, system-ui";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("QUESTION:", 16, 14);

    ctx.font = "800 22px ui-sans-serif, system-ui";
    const p = prompt || "Tap START";
    wrapText(ctx, p, 16, 42, w - 32, 26);

    // balloons
    const sheet = sheetRef.current;
    const cols = 5;
    const rows = 2;
    const cellW = sheet ? sheet.width / cols : 0;
    const cellH = sheet ? sheet.height / rows : 0;

    for (const b of balloonsRef.current) {
      drawBalloon(ctx, b, sheet, cols, cellW, cellH);
    }

    // pop FX
    const pop = popRef.current;
    if (pop) {
      for (const fx of popsRef.current) {
        const k = 1 + fx.t * 0.8;
        const alpha = 1 - fx.t / 0.25;
        ctx.save();
        ctx.globalAlpha = clamp(alpha, 0, 1);
        const size = 70 * k;
        ctx.drawImage(pop, fx.x - size / 2, fx.y - size / 2, size, size);
        ctx.restore();
      }
    }

    // bottom hint
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.font = "600 14px ui-sans-serif, system-ui";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Tap the correct balloon", w / 2, h - 10);
  }

  function drawBalloon(
    ctx: CanvasRenderingContext2D,
    b: Balloon,
    sheet: HTMLImageElement | null,
    cols: number,
    cellW: number,
    cellH: number
  ) {
    // balloon sprite
    if (sheet && cellW > 0 && cellH > 0) {
      const f = b.frame % 10;
      const col = f % cols;
      const row = (f / cols) | 0;

      const sx = col * cellW;
      const sy = row * cellH;

      // draw slightly larger than radius
      const s = b.r * 2.25;
      ctx.drawImage(sheet, sx, sy, cellW, cellH, b.x - s / 2, b.y - s / 2, s, s);
    } else {
      // fallback circle
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.isCorrect ? "rgba(34,197,94,0.85)" : "rgba(59,130,246,0.75)";
      ctx.fill();
    }

    // text (VERY visible)
    const fontSize = Math.max(18, b.r * 0.62);
    ctx.font = `900 ${fontSize}px ui-sans-serif, system-ui`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // subtle shadow
    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;

    // thick stroke
    ctx.lineWidth = 8;
    ctx.strokeStyle = "rgba(0,0,0,0.75)";
    ctx.strokeText(b.text, b.x, b.y);

    // fill
    ctx.fillStyle = "rgba(255,255,255,0.98)";
    ctx.fillText(b.text, b.x, b.y);

    // reset shadows
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
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

  // Pointer / touch handling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function handlePointerDown(e: PointerEvent) {
      if (!runningRef.current) return;
      if (timeLeftRef.current <= 0) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // find nearest hit (so overlap feels fair)
      let best: { b: Balloon; d2: number } | null = null;

      for (const b of balloonsRef.current) {
        const dx = x - b.x;
        const dy = y - b.y;
        const hitR = b.r * 1.15; // easier on mobile
        const d2 = dx * dx + dy * dy;
        if (d2 <= hitR * hitR) {
          if (!best || d2 < best.d2) best = { b, d2 };
        }
      }

      if (best) onHitBalloon(best.b);
    }

    canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => canvas.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const levelBadge = useMemo(() => {
    const i = levelIndex(level);
    if (i === 0) return "A1";
    if (i === 1) return "A2";
    return "B1";
  }, [level]);

  const streak = streakRef.current;

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
              Assets needed: <code className="px-1 py-0.5 bg-white border rounded">/public/sprites/balloons_sheet.png</code> and{" "}
              <code className="px-1 py-0.5 bg-white border rounded">/public/sprites/pop.png</code>
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
              Combo: <span className="text-slate-800">{streakRef.current}</span> (bling at 5,10,15…)
            </div>
          </div>
        </div>

        <div
          ref={wrapRef}
          className="relative rounded-2xl overflow-hidden border bg-white shadow-sm"
        >
          <canvas
            ref={canvasRef}
            className="block w-full select-none touch-none"
          />

          {/* Overlay: not ready */}
          {!assetsReady && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-2xl font-black mb-2">Loading assets…</div>
                <div className="text-slate-600 font-semibold">
                  Put your images in <code className="px-1 py-0.5 bg-white border rounded">public/sprites</code>
                </div>
              </div>
            </div>
          )}

          {/* Overlay: start */}
          {!running && timeLeft > 0 && assetsReady && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center max-w-md w-full shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black mb-2">Ready?</h2>
                <p className="text-slate-600 font-semibold mb-6">
                  Tap the correct word balloon. Correct answers add +1s.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    disabled={!assetsReady}
                    onClick={start}
                    className="px-6 py-3 bg-black text-white rounded-xl font-black text-lg hover:bg-slate-900 disabled:opacity-50"
                  >
                    START
                  </button>
                  <button
                    onClick={() => {
                      // small “prime” so mobile enables sound
                      try {
                        if (!audioCtxRef.current) {
                          audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
                        } else if (audioCtxRef.current.state === "suspended") {
                          audioCtxRef.current.resume().catch(() => {});
                        }
                        playTone("bling", 1);
                      } catch {}
                    }}
                    className="px-6 py-3 bg-white border rounded-xl font-black hover:bg-slate-50"
                  >
                    🔔 Test Sound
                  </button>
                </div>

                <div className="mt-4 text-xs text-slate-500 font-semibold">
                  Auto level adjusts every 5 answers (4+ correct → level up, 2+ wrong → level down)
                </div>
              </div>
            </div>
          )}

          {/* Overlay: game over */}
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
          ✅ No synonyms • ✅ English-only questions • ✅ Mobile-friendly taps • ✅ Sound system (correct/wrong/bling) • ✅ Frame-animated balloons
        </div>
      </div>
    </main>
  );
}

// ===============
// Text wrapping helper for canvas
// ===============
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  let yy = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, yy);
      line = words[n] + " ";
      yy += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, yy);
}
