"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Phase = "teach" | "turn" | "correct" | "wrong";

type Letter = {
  upper: string;
  lower: string;
  say: string[];
  hard?: boolean;
};

const ALPHABET: Letter[] = [
  { upper: "A", lower: "a", say: ["a"] },
  { upper: "B", lower: "b", say: ["be", "b"] },
  { upper: "C", lower: "c", say: ["ce", "c"], hard: true },
  { upper: "Ç", lower: "ç", say: ["çe", "ç"], hard: true },
  { upper: "D", lower: "d", say: ["de", "d"] },
  { upper: "E", lower: "e", say: ["e"] },
  { upper: "F", lower: "f", say: ["fe", "f"] },
  { upper: "G", lower: "g", say: ["ge", "g"] },
  { upper: "Ğ", lower: "ğ", say: ["yumuşak ge", "yumusak ge", "ğ"], hard: true },
  { upper: "H", lower: "h", say: ["he", "h"] },
  { upper: "I", lower: "ı", say: ["ı"], hard: true },
  { upper: "İ", lower: "i", say: ["i"], hard: true },
  { upper: "J", lower: "j", say: ["je", "j"] },
  { upper: "K", lower: "k", say: ["ke", "k"] },
  { upper: "L", lower: "l", say: ["le", "l"] },
  { upper: "M", lower: "m", say: ["me", "m"] },
  { upper: "N", lower: "n", say: ["ne", "n"] },
  { upper: "O", lower: "o", say: ["o"] },
  { upper: "Ö", lower: "ö", say: ["ö"], hard: true },
  { upper: "P", lower: "p", say: ["pe", "p"] },
  { upper: "R", lower: "r", say: ["re", "r"] },
  { upper: "S", lower: "s", say: ["se", "s"] },
  { upper: "Ş", lower: "ş", say: ["şe", "ş"], hard: true },
  { upper: "T", lower: "t", say: ["te", "t"] },
  { upper: "U", lower: "u", say: ["u"] },
  { upper: "Ü", lower: "ü", say: ["ü"], hard: true },
  { upper: "V", lower: "v", say: ["ve", "v"] },
  { upper: "Y", lower: "y", say: ["ye", "y"] },
  { upper: "Z", lower: "z", say: ["ze", "z"] }
];

const HARD_REPEAT_MULTIPLIER = 2;

const normalizeTR = (s: string) =>
  s.toLocaleLowerCase("tr-TR").replace(/[^\p{L}]/gu, "").trim();

export default function AlphabetGame() {
  const [queue, setQueue] = useState<Letter[]>([]);
  const [current, setCurrent] = useState<Letter | null>(null);
  const [phase, setPhase] = useState<Phase>("teach");

  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);

  const [stats, setStats] = useState<Record<string, { ok: number; wrong: number }>>(
    {}
  );

  const trVoice = useRef<SpeechSynthesisVoice | null>(null);

  // 🎲 Karışık + zor harf ağırlıklı sıra
  useEffect(() => {
    const weighted: Letter[] = [];
    ALPHABET.forEach((l) => {
      weighted.push(l);
      if (l.hard) {
        for (let i = 0; i < HARD_REPEAT_MULTIPLIER; i++) weighted.push(l);
      }
    });
    setQueue(weighted.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (!queue.length) return;
    setCurrent(queue[0]);
  }, [queue]);

  // 🔊 Türkçe ses
  useEffect(() => {
    const voices = speechSynthesis.getVoices();
    trVoice.current = voices.find((v) => v.lang.startsWith("tr")) || null;
  }, []);

  const speak = useCallback((text: string) => {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "tr-TR";
    if (trVoice.current) u.voice = trVoice.current;
    speechSynthesis.speak(u);
  }, []);

  useEffect(() => {
    if (!current) return;
    if (phase === "teach")
      speak(`Bu büyük ${current.upper}, bu da küçük ${current.lower}. Söyle bakalım.`);
    if (phase === "correct") speak("Harika! Çok güzel söyledin.");
    if (phase === "wrong")
      speak(`Bu ${current.upper}. Dinle: ${current.say[0]}`);
  }, [phase, current, speak]);

  // 🎤 Speech Recognition
  const listen = () => {
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR || !current) return;

    const rec = new SR();
    rec.lang = "tr-TR";
    rec.onresult = (e: any) => {
      const said = normalizeTR(e.results[0][0].transcript);
      const ok = current.say.some((s) => normalizeTR(s) === said);

      setStats((p) => ({
        ...p,
        [current.upper]: {
          ok: (p[current.upper]?.ok || 0) + (ok ? 1 : 0),
          wrong: (p[current.upper]?.wrong || 0) + (!ok ? 1 : 0)
        }
      }));

      if (ok) {
        setScore((s) => s + 10);
        setStars((s) => s + 1);
        setPhase("correct");
        setTimeout(next, 800);
      } else {
        setPhase("wrong");
      }
    };
    rec.start();
  };

  const next = () => {
    setQueue((q) => q.slice(1));
    setPhase("teach");
  };

  if (!current)
    return <div className="p-10 text-center text-xl">🎉 Tüm harfler tamamlandı!</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-[360px] text-center">
        <h1 className="text-xl font-bold mb-2">Harf Arkadaşım ⭐</h1>

        <div className="flex justify-center gap-6 my-6">
          <div className="text-7xl font-black text-indigo-600">{current.upper}</div>
          <div className="text-7xl font-black text-emerald-600">{current.lower}</div>
        </div>

        <div className="mb-4 text-sm text-slate-500">
          ⭐ {stars} | 🧠 Puan: {score}
        </div>

        {phase === "teach" && (
          <button
            onClick={() => {
              setPhase("turn");
              listen();
            }}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold"
          >
            Söyle 🎤
          </button>
        )}

        {phase === "wrong" && (
          <button
            onClick={() => {
              setPhase("turn");
              listen();
            }}
            className="w-full border-2 border-indigo-600 text-indigo-600 py-3 rounded-xl font-bold"
          >
            Tekrar Dene 🔄
          </button>
        )}

        {/* 👨‍👩‍👧 Ebeveyn Modu */}
        <details className="mt-6 text-left text-xs">
          <summary className="cursor-pointer font-semibold">👨‍👩‍👧 Ebeveyn Modu</summary>
          <pre className="mt-2 bg-slate-100 p-2 rounded">
{JSON.stringify(stats, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}
