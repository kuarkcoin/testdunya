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
const BANK: MCQ[] = [
  // ---------------- A1 (34) ----------------
  { id: "a1_01", level: "A1", prompt: "Choose the correct word: I ___ a student.", options: ["am", "is", "are", "be"], answer: "am" },
  { id: "a1_02", level: "A1", prompt: "Choose the correct word: She ___ from Turkey.", options: ["am", "is", "are", "be"], answer: "is" },
  { id: "a1_03", level: "A1", prompt: "Choose the correct word: They ___ happy.", options: ["am", "is", "are", "be"], answer: "are" },
  { id: "a1_04", level: "A1", prompt: "Choose the correct option: I have two ___.", options: ["brother", "brothers", "brotheres", "brother's"], answer: "brothers" },
  { id: "a1_05", level: "A1", prompt: "Choose the correct option: This is ___ apple.", options: ["a", "an", "the", "—"], answer: "an" },
  { id: "a1_06", level: "A1", prompt: "Choose the correct option: ___ you like tea?", options: ["Do", "Does", "Did", "Doing"], answer: "Do" },
  { id: "a1_07", level: "A1", prompt: "Choose the correct option: He ___ football.", options: ["play", "plays", "playing", "to play"], answer: "plays" },
  { id: "a1_08", level: "A1", prompt: "Choose the correct option: I ___ TV every day.", options: ["watch", "watches", "watched", "watching"], answer: "watch" },
  { id: "a1_09", level: "A1", prompt: "Choose the correct option: We ___ at 7 o'clock.", options: ["gets up", "get up", "got up", "getting up"], answer: "get up" },
  { id: "a1_10", level: "A1", prompt: "Choose the correct option: There ___ a book on the table.", options: ["are", "is", "am", "be"], answer: "is" },
  { id: "a1_11", level: "A1", prompt: "Choose the correct option: There ___ two chairs.", options: ["are", "is", "am", "be"], answer: "are" },
  { id: "a1_12", level: "A1", prompt: "Choose the correct option: I ___ coffee in the morning.", options: ["drink", "drinks", "drank", "drinking"], answer: "drink" },
  { id: "a1_13", level: "A1", prompt: "Choose the correct option: My father ___ a car.", options: ["have", "has", "having", "to have"], answer: "has" },
  { id: "a1_14", level: "A1", prompt: "Choose the correct option: This is my sister. ___ name is Elif.", options: ["Her", "His", "Its", "Your"], answer: "Her" },
  { id: "a1_15", level: "A1", prompt: "Choose the correct option: I ___ English at school.", options: ["study", "studies", "studying", "studied"], answer: "study" },
  { id: "a1_16", level: "A1", prompt: "Choose the correct option: ___ is your bag? It's on the chair.", options: ["Where", "What", "Who", "When"], answer: "Where" },
  { id: "a1_17", level: "A1", prompt: "Choose the correct option: ___ do you go to bed? At 10.", options: ["When", "Where", "What", "How"], answer: "When" },
  { id: "a1_18", level: "A1", prompt: "Choose the correct option: I can ___ a bike.", options: ["ride", "riding", "rode", "rides"], answer: "ride" },
  { id: "a1_19", level: "A1", prompt: "Choose the correct option: He ___ swim.", options: ["can", "cans", "to can", "canning"], answer: "can" },
  { id: "a1_20", level: "A1", prompt: "Choose the correct option: I'm ___ hungry.", options: ["not", "no", "don't", "doesn't"], answer: "not" },
  { id: "a1_21", level: "A1", prompt: "Choose the correct option: We have lunch ___ 1 pm.", options: ["at", "in", "on", "to"], answer: "at" },
  { id: "a1_22", level: "A1", prompt: "Choose the correct option: My birthday is ___ May.", options: ["in", "at", "on", "to"], answer: "in" },
  { id: "a1_23", level: "A1", prompt: "Choose the correct option: The class is ___ Monday.", options: ["on", "in", "at", "to"], answer: "on" },
  { id: "a1_24", level: "A1", prompt: "Choose the correct option: I ___ a dog.", options: ["have", "has", "having", "to have"], answer: "have" },
  { id: "a1_25", level: "A1", prompt: "Choose the correct option: She ___ a teacher.", options: ["am", "is", "are", "be"], answer: "is" },
  { id: "a1_26", level: "A1", prompt: "Choose the correct option: ___ your name?", options: ["What is", "Where is", "When is", "Who is"], answer: "What is" },
  { id: "a1_27", level: "A1", prompt: "Choose the correct option: This ___ my pen.", options: ["is", "are", "am", "be"], answer: "is" },
  { id: "a1_28", level: "A1", prompt: "Choose the correct option: These ___ my shoes.", options: ["is", "are", "am", "be"], answer: "are" },
  { id: "a1_29", level: "A1", prompt: "Choose the correct option: I ___ in Edirne.", options: ["live", "lives", "living", "lived"], answer: "live" },
  { id: "a1_30", level: "A1", prompt: "Choose the correct option: She ___ to school by bus.", options: ["go", "goes", "going", "went"], answer: "goes" },
  { id: "a1_31", level: "A1", prompt: "Choose the correct option: Open the ___.", options: ["door", "doors", "dooring", "doored"], answer: "door" },
  { id: "a1_32", level: "A1", prompt: "Choose the correct option: I have a ___ of water.", options: ["glass", "plate", "knife", "chair"], answer: "glass" },
  { id: "a1_33", level: "A1", prompt: "Choose the correct option: The sun is ___.", options: ["hot", "cold", "sad", "small"], answer: "hot" },
  { id: "a1_34", level: "A1", prompt: "Choose the correct option: A cat says ___.", options: ["meow", "woof", "tweet", "moo"], answer: "meow" },

  // ---------------- A2 (33) ----------------
  { id: "a2_01", level: "A2", prompt: "Choose the correct option: I ___ to the gym twice a week.", options: ["go", "goes", "going", "went"], answer: "go" },
  { id: "a2_02", level: "A2", prompt: "Choose the correct option: She is ___ than her brother.", options: ["taller", "tall", "the tallest", "more tall"], answer: "taller" },
  { id: "a2_03", level: "A2", prompt: "Choose the correct option: We ___ dinner when you called.", options: ["were having", "are having", "have", "had"], answer: "were having" },
  { id: "a2_04", level: "A2", prompt: "Choose the correct option: I want to ___ English this year.", options: ["improve", "improves", "improved", "improving"], answer: "improve" },
  { id: "a2_05", level: "A2", prompt: "Choose the correct option: There isn't ___ milk left.", options: ["any", "some", "many", "few"], answer: "any" },
  { id: "a2_06", level: "A2", prompt: "Choose the correct option: Can you ___ me the salt?", options: ["pass", "passes", "passed", "passing"], answer: "pass" },
  { id: "a2_07", level: "A2", prompt: "Choose the correct option: I ___ my keys. I can't find them.", options: ["have lost", "lost", "lose", "am losing"], answer: "have lost" },
  { id: "a2_08", level: "A2", prompt: "Choose the correct option: We arrived ___ the airport early.", options: ["at", "in", "on", "to"], answer: "at" },
  { id: "a2_09", level: "A2", prompt: "Choose the correct option: He ___ drive, but he doesn't have a car.", options: ["can", "must", "should", "need"], answer: "can" },
  { id: "a2_10", level: "A2", prompt: "Choose the correct option: It's ___ to wear a coat today.", options: ["cold enough", "enough cold", "coldly enough", "enough coldly"], answer: "cold enough" },
  { id: "a2_11", level: "A2", prompt: "Choose the correct option: I usually ___ up at 6.", options: ["wake", "wakes", "woke", "waking"], answer: "wake" },
  { id: "a2_12", level: "A2", prompt: "Choose the correct option: We ___ to Izmir last summer.", options: ["went", "go", "gone", "going"], answer: "went" },
  { id: "a2_13", level: "A2", prompt: "Choose the correct option: She ___ a message right now.", options: ["is sending", "sends", "sent", "send"], answer: "is sending" },
  { id: "a2_14", level: "A2", prompt: "Choose the correct option: There are ___ people here today.", options: ["a lot of", "much", "little", "any"], answer: "a lot of" },
  { id: "a2_15", level: "A2", prompt: "Choose the correct option: I don't like coffee. I prefer ___.", options: ["tea", "to tea", "teaing", "teas"], answer: "tea" },
  { id: "a2_16", level: "A2", prompt: "Choose the correct option: She ___ to call you later.", options: ["promised", "promise", "promises", "promising"], answer: "promised" },
  { id: "a2_17", level: "A2", prompt: "Choose the correct option: The film was ___. I laughed a lot.", options: ["funny", "boring", "tired", "busy"], answer: "funny" },
  { id: "a2_18", level: "A2", prompt: "Choose the correct option: This bag is too ___. I can't buy it.", options: ["expensive", "cheap", "quiet", "easy"], answer: "expensive" },
  { id: "a2_19", level: "A2", prompt: "Choose the correct option: Please be ___. The baby is sleeping.", options: ["quiet", "crowded", "loud", "late"], answer: "quiet" },
  { id: "a2_20", level: "A2", prompt: "Choose the correct option: We should ___ early to catch the bus.", options: ["leave", "left", "leaving", "leaves"], answer: "leave" },
  { id: "a2_21", level: "A2", prompt: "Choose the correct option: I need ___ water.", options: ["some", "any", "many", "a"], answer: "some" },
  { id: "a2_22", level: "A2", prompt: "Choose the correct option: She ___ speak Spanish very well.", options: ["can", "cans", "to can", "canning"], answer: "can" },
  { id: "a2_23", level: "A2", prompt: "Choose the correct option: I ___ you at the station yesterday.", options: ["saw", "see", "seen", "seeing"], answer: "saw" },
  { id: "a2_24", level: "A2", prompt: "Choose the correct option: There ___ any tickets left.", options: ["aren't", "isn't", "wasn't", "doesn't"], answer: "aren't" },
  { id: "a2_25", level: "A2", prompt: "Choose the correct option: I'm ___ than yesterday.", options: ["more tired", "tired", "tireder", "most tired"], answer: "more tired" },
  { id: "a2_26", level: "A2", prompt: "Choose the correct option: Could you ___ the window, please?", options: ["open", "opened", "opening", "opens"], answer: "open" },
  { id: "a2_27", level: "A2", prompt: "Choose the correct option: I ___ breakfast every morning.", options: ["have", "has", "having", "had"], answer: "have" },
  { id: "a2_28", level: "A2", prompt: "Choose the correct option: She ___ in a small house.", options: ["lives", "live", "living", "lived"], answer: "lives" },
  { id: "a2_29", level: "A2", prompt: "Choose the correct option: We ___ playing when it started to rain.", options: ["stopped", "stop", "stops", "stopping"], answer: "stopped" },
  { id: "a2_30", level: "A2", prompt: "Choose the correct option: I ___ never been to London.", options: ["have", "has", "had", "am"], answer: "have" },
  { id: "a2_31", level: "A2", prompt: "Choose the correct option: The opposite of 'dangerous' is ___.", options: ["safe", "hard", "dark", "slow"], answer: "safe" },
  { id: "a2_32", level: "A2", prompt: "Choose the correct option: I ___ my homework last night.", options: ["did", "do", "done", "doing"], answer: "did" },
  { id: "a2_33", level: "A2", prompt: "Choose the correct option: She ___ a cake yesterday.", options: ["made", "make", "making", "makes"], answer: "made" },

  // ---------------- B1 (33) ----------------
  { id: "b1_01", level: "B1", prompt: "Choose the correct option: If it ___ tomorrow, we will stay home.", options: ["rains", "rain", "rained", "raining"], answer: "rains" },
  { id: "b1_02", level: "B1", prompt: "Choose the correct option: I have lived here ___ 2019.", options: ["since", "for", "during", "from"], answer: "since" },
  { id: "b1_03", level: "B1", prompt: "Choose the correct option: I've been studying for two hours, so I need a ___.", options: ["break", "ticket", "lesson", "price"], answer: "break" },
  { id: "b1_04", level: "B1", prompt: "Choose the correct option: She was tired, ___ she finished her work.", options: ["but", "because", "so", "if"], answer: "but" },
  { id: "b1_05", level: "B1", prompt: "Choose the correct option: You ___ wear a seatbelt. It's the law.", options: ["must", "can", "might", "would"], answer: "must" },
  { id: "b1_06", level: "B1", prompt: "Choose the correct option: He spoke quietly so nobody could ___.", options: ["hear", "hears", "heard", "hearing"], answer: "hear" },
  { id: "b1_07", level: "B1", prompt: "Choose the correct option: I ___ my phone at home, so I couldn't call you.", options: ["left", "leave", "have left", "was leaving"], answer: "left" },
  { id: "b1_08", level: "B1", prompt: "Choose the correct option: This is the best restaurant I ___.", options: ["have ever tried", "ever try", "tried ever", "am ever trying"], answer: "have ever tried" },
  { id: "b1_09", level: "B1", prompt: "Choose the correct option: She gave me some useful ___.", options: ["advice", "advices", "advise", "advises"], answer: "advice" },
  { id: "b1_10", level: "B1", prompt: "Choose the correct option: We need more ___. Please show facts.", options: ["evidence", "advices", "informations", "knowledges"], answer: "evidence" },
  { id: "b1_11", level: "B1", prompt: "Choose the correct option: The company plans to ___ prices next month.", options: ["increase", "improve", "repeat", "protect"], answer: "increase" },
  { id: "b1_12", level: "B1", prompt: "Choose the correct option: I prefer tea ___ coffee.", options: ["to", "than", "from", "with"], answer: "to" },
  { id: "b1_13", level: "B1", prompt: "Choose the correct option: She apologized ___ being late.", options: ["for", "to", "at", "with"], answer: "for" },
  { id: "b1_14", level: "B1", prompt: "Choose the correct option: We ___ the meeting because of the storm.", options: ["cancelled", "cancel", "cancelling", "cancels"], answer: "cancelled" },
  { id: "b1_15", level: "B1", prompt: "Choose the correct option: I wasn't sure, so I ___ him a question.", options: ["asked", "ask", "asking", "asks"], answer: "asked" },
  { id: "b1_16", level: "B1", prompt: "Choose the correct option: The train was late, so we had to ___.", options: ["wait", "waiting", "waited", "to waited"], answer: "wait" },

  // mini reading (short)
  { id: "b1_17", level: "B1", prompt: "Read: 'Tom missed the bus, so he took a taxi.' Why did Tom take a taxi?", options: ["He missed the bus.", "He wanted a walk.", "He met a friend.", "He lost his bag."], answer: "He missed the bus." },
  { id: "b1_18", level: "B1", prompt: "Read: 'Sara studied hard. She passed the exam.' What happened because Sara studied hard?", options: ["She passed the exam.", "She missed the exam.", "She forgot the exam.", "She failed the exam."], answer: "She passed the exam." },

  // fill remaining B1 to 33
  { id: "b1_19", level: "B1", prompt: "Choose the correct option: I can't come. I ___ to work late.", options: ["have", "must", "should", "can"], answer: "must" },
  { id: "b1_20", level: "B1", prompt: "Choose the correct option: He is responsible ___ the project.", options: ["for", "to", "at", "with"], answer: "for" },
  { id: "b1_21", level: "B1", prompt: "Choose the correct option: Please ___ the noise. The baby is sleeping.", options: ["reduce", "repeat", "increase", "finish"], answer: "reduce" },
  { id: "b1_22", level: "B1", prompt: "Choose the correct option: I didn't ___ your message.", options: ["notice", "promise", "repair", "separate"], answer: "notice" },
  { id: "b1_23", level: "B1", prompt: "Choose the correct option: We discussed the problem and found a ___.", options: ["solution", "festival", "receipt", "direction"], answer: "solution" },
  { id: "b1_24", level: "B1", prompt: "Choose the correct option: She managed to ___ calm during the test.", options: ["stay", "stayed", "staying", "to stayed"], answer: "stay" },
  { id: "b1_25", level: "B1", prompt: "Choose the correct option: Try to ___ mistakes by checking your work.", options: ["avoid", "invite", "borrow", "arrive"], answer: "avoid" },
  { id: "b1_26", level: "B1", prompt: "Choose the correct option: I ___ you if I had your number. (2nd conditional)", options: ["would call", "will call", "call", "called"], answer: "would call" },
  { id: "b1_27", level: "B1", prompt: "Choose the correct option: The movie was ___, so we left early.", options: ["boring", "safe", "careful", "healthy"], answer: "boring" },
  { id: "b1_28", level: "B1", prompt: "Choose the correct option: He explained the process ___ simple words.", options: ["in", "at", "on", "to"], answer: "in" },
  { id: "b1_29", level: "B1", prompt: "Choose the correct option: I recognize her, but I can't remember her ___.", options: ["name", "names", "named", "naming"], answer: "name" },
  { id: "b1_30", level: "B1", prompt: "Choose the correct option: The weather can influence our ___.", options: ["plans", "plan", "planning", "planned"], answer: "plans" },
  { id: "b1_31", level: "B1", prompt: "Choose the correct option: This feature is ___ for beginners.", options: ["useful", "crowded", "suddenly", "receipt"], answer: "useful" },
  { id: "b1_32", level: "B1", prompt: "Choose the correct option: I need time to ___ my notes.", options: ["review", "arrive", "celebrate", "replace"], answer: "review" },
  { id: "b1_33", level: "B1", prompt: "Choose the correct option: She suggested ___ earlier tomorrow.", options: ["leaving", "leave", "left", "to leaving"], answer: "leaving" },
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
    const speedBase = 120 + li * 25; // a bit faster at higher levels

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
