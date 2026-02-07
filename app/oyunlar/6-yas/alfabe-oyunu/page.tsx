"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Phase = "teach" | "turn" | "listen" | "correct" | "wrong" | "loading";

type Letter = {
  upper: string;
  lower: string;
  say: string[];
  hard?: boolean;
};

const ALPHABET: Letter[] = [
  { upper: "A", lower: "a", say: ["a", "akadem"] },
  { upper: "B", lower: "b", say: ["be", "b"] },
  { upper: "C", lower: "c", say: ["ce", "c"], hard: true },
  { upper: "Ç", lower: "ç", say: ["çe", "ç"], hard: true },
  { upper: "D", lower: "d", say: ["de", "d"] },
  { upper: "E", lower: "e", say: ["e"] },
  { upper: "F", lower: "f", say: ["fe", "f"] },
  { upper: "G", lower: "g", say: ["ge", "g"] },
  { upper: "Ğ", lower: "ğ", say: ["yumuşak ge", "yumusak ge", "ğ", "yumuşak g"], hard: true },
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

const normalizeTR = (s: string) =>
  s.toLocaleLowerCase("tr-TR").replace(/[^\p{L}]/gu, "").trim();

export default function AlphabetGame() {
  const [queue, setQueue] = useState<Letter[]>([]);
  const [current, setCurrent] = useState<Letter | null>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [stats, setStats] = useState<Record<string, { ok: number; wrong: number }>>({});
  
  const trVoice = useRef<SpeechSynthesisVoice | null>(null);
  const isSpeakingRef = useRef(false);

  // 🔊 Sesleri yükle ve bekle
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const tr = voices.find((v) => v.lang.startsWith("tr"));
      if (tr) {
        trVoice.current = tr;
        if (phase === "loading") setPhase("teach");
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, [phase]);

  // 🎲 Karışık harf sırası oluştur
  useEffect(() => {
    const weighted = [...ALPHABET].sort(() => Math.random() - 0.5);
    setQueue(weighted);
  }, []);

  useEffect(() => {
    if (queue.length > 0) setCurrent(queue[0]);
  }, [queue]);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "tr-TR";
    if (trVoice.current) u.voice = trVoice.current;
    
    u.onstart = () => { isSpeakingRef.current = true; };
    u.onend = () => {
      isSpeakingRef.current = false;
      if (onEnd) onEnd();
    };
    
    window.speechSynthesis.speak(u);
  }, []);

  // Faz değişim seslendirmeleri
  useEffect(() => {
    if (!current || phase === "loading" || phase === "listen") return;
    
    if (phase === "teach") {
      speak(`Bu büyük ${current.upper}, bu da küçük ${current.lower}. Söyle bakalım.`);
    } else if (phase === "correct") {
      speak("Harika! Çok güzel söyledin.", () => {
        setTimeout(next, 1000);
      });
    } else if (phase === "wrong") {
      speak(`Neredeyse oluyordu. Bu harf ${current.upper}. Bir daha deneyelim.`);
    }
  }, [phase, current, speak]);

  const next = () => {
    setQueue((q) => q.slice(1));
    setPhase("teach");
  };

  // 🎤 Konuşma Tanıma (Speech Recognition)
  const listen = () => {
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    
    if (!SR) {
      alert("Tarayıcınız ses tanımayı desteklemiyor. Lütfen Chrome kullanın.");
      return;
    }

    if (isSpeakingRef.current) return;

    setPhase("listen");
    const rec = new SR();
    rec.lang = "tr-TR";
    rec.continuous = false;

    rec.onresult = (e: any) => {
      const said = normalizeTR(e.results[0][0].transcript);
      const isOk = current?.say.some((s) => normalizeTR(s) === said);

      setStats((p) => ({
        ...p,
        [current!.upper]: {
          ok: (p[current!.upper]?.ok || 0) + (isOk ? 1 : 0),
          wrong: (p[current!.upper]?.wrong || 0) + (!isOk ? 1 : 0)
        }
      }));

      if (isOk) {
        setScore((s) => s + 10);
        setStars((s) => s + 1);
        setPhase("correct");
      } else {
        setPhase("wrong");
      }
    };

    rec.onerror = () => {
      setPhase("teach");
    };

    rec.start();
  };

  if (phase === "loading") return <div className="min-h-screen flex items-center justify-center font-bold">Sesler Yükleniyor...</div>;
  if (!current) return <div className="min-h-screen flex items-center justify-center text-4xl font-black text-indigo-600">🎉 ALFABE BİTTİ!</div>;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-sm text-center relative overflow-hidden border-8 border-indigo-50">
        
        {/* Puan Durumu */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full font-bold text-sm">⭐ {stars}</div>
          <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full font-bold text-sm">🧠 {score} Puan</div>
        </div>

        <h1 className="text-2xl font-black text-slate-800 mb-8">Harf Arkadaşım</h1>

        {/* Harf Kartları */}
        
        <div className="flex justify-center gap-8 my-10 relative">
          {phase === "listen" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-indigo-500/10 rounded-full animate-ping"></div>
            </div>
          )}
          <div className="text-8xl font-black text-indigo-600 drop-shadow-sm">{current.upper}</div>
          <div className="text-8xl font-black text-emerald-600 drop-shadow-sm">{current.lower}</div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="space-y-4">
          {phase === "listen" ? (
            <div className="py-4 text-indigo-600 font-bold animate-pulse">Seni dinliyorum... 🎤</div>
          ) : phase === "correct" ? (
            <div className="py-4 text-emerald-600 font-bold text-xl">Harikasın! 🌟</div>
          ) : (
            <button
              onClick={listen}
              className={`w-full py-4 rounded-2xl font-black text-xl transition-all active:scale-95 shadow-lg ${
                phase === "wrong" 
                ? "bg-white border-4 border-rose-500 text-rose-500" 
                : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-200"
              }`}
            >
              {phase === "wrong" ? "BİR DAHA DENE 🔄" : "SÖYLE 🎤"}
            </button>
          )}
        </div>

        {/* Ebeveyn Paneli */}
        <details className="mt-10 text-left">
          <summary className="text-xs font-bold text-slate-400 cursor-pointer hover:text-slate-600 transition">EBEVEYN MODU</summary>
          <div className="mt-4 bg-slate-50 p-4 rounded-2xl max-h-40 overflow-y-auto border border-slate-100">
            <h3 className="text-xs font-bold mb-2 border-b pb-1">Hata/Doğru İstatistiği:</h3>
            {Object.entries(stats).map(([harf, s]) => (
              <div key={harf} className="text-[10px] flex justify-between font-mono">
                <span>Harf {harf}:</span>
                <span className="text-emerald-600">✓{s.ok}</span>
                <span className="text-rose-600">✗{s.wrong}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
