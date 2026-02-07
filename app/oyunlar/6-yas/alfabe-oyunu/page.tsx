"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Phase = "loading" | "teach" | "listen" | "correct" | "wrong" | "done";

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
  { upper: "I", lower: "ı", say: ["ı", "i"], hard: true }, // motor karıştırabiliyor
  { upper: "İ", lower: "i", say: ["i", "ı"], hard: true }, // motor karıştırabiliyor
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

// ✅ Vercel/Node/TS her ortamda güvenli
const normalizeTR = (s: string) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/[^a-zçğıöşüı\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const matchesSaid = (saidRaw: string, accepted: string[]) => {
  const said = normalizeTR(saidRaw);
  if (!said) return false;

  return accepted.some((a) => {
    const na = normalizeTR(a);
    if (!na) return false;
    if (said === na) return true;
    return (` ${said} `).includes(` ${na} `) || said.includes(na);
  });
};

function buildQueue(stats: Record<string, { ok: number; wrong: number }>) {
  const pool: Letter[] = [];

  for (const l of ALPHABET) {
    const st = stats[l.upper];
    const wrong = st?.wrong ?? 0;
    const ok = st?.ok ?? 0;

    let w = 1;
    if (l.hard) w += 1;
    w += Math.min(3, wrong);
    if (ok >= 2 && wrong === 0) w = Math.max(1, w - 1);

    for (let i = 0; i < w; i++) pool.push(l);
  }

  // shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // aynı harf ardışık olmasın
  for (let i = 1; i < pool.length; i++) {
    if (pool[i].upper === pool[i - 1].upper) {
      for (let k = i + 1; k < pool.length; k++) {
        if (pool[k].upper !== pool[i - 1].upper) {
          [pool[i], pool[k]] = [pool[k], pool[i]];
          break;
        }
      }
    }
  }

  return pool;
}

export default function AlphabetGame() {
  const [queue, setQueue] = useState<Letter[]>([]);
  const [current, setCurrent] = useState<Letter | null>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [stats, setStats] = useState<Record<string, { ok: number; wrong: number }>>({});

  // ✅ TS/DOM tip problemlerini sıfırlamak için any
  const trVoice = useRef<any>(null);
  const isSpeakingRef = useRef(false);
  const recRef = useRef<any>(null);

  const supportsSpeech = useMemo(() => {
    if (typeof window === "undefined") return false;
    const w = window as any;
    return !!(w.SpeechRecognition || w.webkitSpeechRecognition);
  }, []);

  const stopRecognition = useCallback(() => {
    try {
      if (recRef.current) {
        recRef.current.onresult = null;
        recRef.current.onerror = null;
        recRef.current.onend = null;
        recRef.current.abort?.();
        recRef.current.stop?.();
      }
    } catch {}
    recRef.current = null;
  }, []);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined") return;
    const synth = (window as any).speechSynthesis;
    if (!synth) return;

    try {
      synth.cancel?.();
    } catch {}

    const Utter = (window as any).SpeechSynthesisUtterance;
    if (!Utter) return;

    const u = new Utter(text);
    u.lang = "tr-TR";
    if (trVoice.current) u.voice = trVoice.current;

    u.onstart = () => {
      isSpeakingRef.current = true;
    };
    u.onend = () => {
      isSpeakingRef.current = false;
      onEnd?.();
    };
    u.onerror = () => {
      isSpeakingRef.current = false;
      onEnd?.();
    };

    // cancel sonrası güvenli gecikme
    setTimeout(() => {
      try {
        synth.speak(u);
      } catch {
        onEnd?.();
      }
    }, 60);
  }, []);

  // 🔊 sesleri yükle
  useEffect(() => {
    if (typeof window === "undefined") return;

    const synth = (window as any).speechSynthesis;
    if (!synth) {
      setPhase("teach");
      return;
    }

    const loadVoices = () => {
      const voices = synth.getVoices?.() ?? [];
      const tr =
        voices.find((v: any) => String(v.lang || "").toLowerCase().startsWith("tr")) ||
        voices.find((v: any) => String(v.lang || "").toLowerCase().includes("tr")) ||
        null;

      trVoice.current = tr;
      setPhase((p) => (p === "loading" ? "teach" : p));
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    return () => {
      synth.onvoiceschanged = null;
    };
  }, []);

  // 🎲 ilk queue
  useEffect(() => {
    const initialQueue = buildQueue({});
    setQueue(initialQueue);
    setCurrent(initialQueue[0] ?? null);
  }, []);

  // ✅ KRİTİK FIX: next() içinde current + phase atomik güncelleniyor (eski harf tekrar konuşmaz)
  const next = useCallback(() => {
    stopRecognition();
    setErrorMsg(null);

    setQueue((q) => {
      const nq = q.slice(1);
      const nc = nq[0] ?? null;

      setCurrent(nc);
      setPhase(nq.length === 0 ? "done" : "teach");

      return nq;
    });
  }, [stopRecognition]);

  // Faz seslendirmeleri
  useEffect(() => {
    if (!current) return;
    if (phase === "loading" || phase === "listen" || phase === "done") return;

    if (phase === "teach") {
      speak(`Bu büyük ${current.upper}, bu da küçük ${current.lower}. Söyle bakalım.`);
    } else if (phase === "correct") {
      speak("Harika! Çok güzel söyledin.", () => setTimeout(next, 700));
    } else if (phase === "wrong") {
      speak(`Neredeyse oluyordu. Bu harf ${current.upper}. Bir daha deneyelim.`);
    }
  }, [phase, current, speak, next]);

  const listen = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!current) return;

    if (!supportsSpeech) {
      setErrorMsg("Tarayıcınız ses tanımayı desteklemiyor. Lütfen Chrome kullanın.");
      setPhase("teach");
      return;
    }

    if (isSpeakingRef.current) return;

    setErrorMsg(null);
    setPhase("listen");

    stopRecognition();

    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;

    const rec = new SR();
    recRef.current = rec;

    rec.lang = "tr-TR";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;

    const finishToTeach = () => setPhase((p) => (p === "listen" ? "teach" : p));

    rec.onresult = (e: any) => {
      const transcript = e?.results?.[0]?.[0]?.transcript ?? "";
      const ok = matchesSaid(transcript, current.say);

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
      } else {
        setPhase("wrong");
      }
    };

    rec.onerror = (ev: any) => {
      const code = ev?.error;
      if (code === "not-allowed" || code === "service-not-allowed") {
        setErrorMsg("Mikrofon izni gerekli. Tarayıcıdan mikrofon izni verip tekrar deneyin.");
      } else if (code === "no-speech") {
        setErrorMsg("Ses duyamadım. Biraz daha yüksek sesle deneyelim.");
      } else {
        setErrorMsg("Bir hata oldu. Tekrar deneyelim.");
      }
      finishToTeach();
    };

    rec.onend = () => {
      finishToTeach();
      stopRecognition();
    };

    try {
      rec.start();
    } catch {
      setErrorMsg("Ses tanıma başlatılamadı. Tekrar deneyin.");
      setPhase("teach");
      stopRecognition();
    }
  }, [current, supportsSpeech, stopRecognition]);

  const progressPct = useMemo(() => {
    const doneCount = Math.max(0, ALPHABET.length - Math.min(ALPHABET.length, queue.length));
    return Math.round((doneCount / ALPHABET.length) * 100);
  }, [queue.length]);

  // Unmount cleanup
  useEffect(() => {
    return () => {
      stopRecognition();
      try {
        (window as any).speechSynthesis?.cancel?.();
      } catch {}
    };
  }, [stopRecognition]);

  if (phase === "done") {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-sm text-center border-8 border-indigo-50">
          <div className="text-5xl font-black text-indigo-600 mb-4">🎉 BİTTİ!</div>

          <div className="flex justify-center gap-3 mb-6">
            <div className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full font-bold text-sm">⭐ {stars}</div>
            <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full font-bold text-sm">🧠 {score} Puan</div>
          </div>

          <button
            onClick={() => {
              const newQueue = buildQueue(stats);
              setQueue(newQueue);
              setCurrent(newQueue[0] ?? null);
              setPhase("teach");
              setErrorMsg(null);
            }}
            className="w-full py-4 rounded-2xl font-black text-xl transition-all active:scale-95 shadow-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-200"
          >
            TEKRAR OYNA 🔁
          </button>

          <details className="mt-8 text-left">
            <summary className="text-xs font-bold text-slate-400 cursor-pointer hover:text-slate-600 transition">
              EBEVEYN MODU
            </summary>
            <div className="mt-4 bg-slate-50 p-4 rounded-2xl max-h-56 overflow-y-auto border border-slate-100">
              <h3 className="text-xs font-bold mb-2 border-b pb-1">Hata/Doğru İstatistiği:</h3>
              {Object.entries(stats).length === 0 ? (
                <div className="text-[11px] text-slate-500">Henüz istatistik yok.</div>
              ) : (
                Object.entries(stats).map(([harf, s]) => (
                  <div key={harf} className="text-[10px] flex justify-between font-mono">
                    <span>Harf {harf}:</span>
                    <span className="text-emerald-600">✓{s.ok}</span>
                    <span className="text-rose-600">✗{s.wrong}</span>
                  </div>
                ))
              )}
            </div>
          </details>
        </div>
      </div>
    );
  }

  if (phase === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold">
        Sesler Yükleniyor...
      </div>
    );
  }

  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-black text-indigo-600">
        🎉 ALFABE BİTTİ!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-sm text-center relative overflow-hidden border-8 border-indigo-50">
        {/* Progress */}
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-4" aria-label={`İlerleme: %${progressPct}`}>
          <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>

        {/* Puan Durumu */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full font-bold text-sm">⭐ {stars}</div>
          <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full font-bold text-sm">🧠 {score} Puan</div>
        </div>

        <h1 className="text-2xl font-black text-slate-800 mb-2">Harf Arkadaşım</h1>
        <div className="text-[11px] text-slate-400 font-semibold mb-6">
          {current.hard ? "⚡ Zor Harf" : "✅ Kolay Harf"}
        </div>

        {/* Harf Kartları */}
        <div
          className="flex justify-center gap-8 my-10 relative"
          aria-label={`Büyük harf ${current.upper}, küçük harf ${current.lower}`}
        >
          {phase === "listen" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-indigo-500/10 rounded-full animate-ping"></div>
            </div>
          )}
          <div className="text-8xl font-black text-indigo-600 drop-shadow-sm">{current.upper}</div>
          <div className="text-8xl font-black text-emerald-600 drop-shadow-sm">{current.lower}</div>
        </div>

        {/* Hata Mesajı */}
        {errorMsg && (
          <div className="mb-4 text-[12px] font-bold text-rose-600 bg-rose-50 border border-rose-100 rounded-2xl p-3">
            {errorMsg}
          </div>
        )}

        {/* Aksiyon Butonları */}
        <div className="space-y-4">
          {phase === "listen" ? (
            <div className="py-4 text-indigo-600 font-bold animate-pulse">Seni dinliyorum... 🎤</div>
          ) : phase === "correct" ? (
            <div className="py-4 text-emerald-600 font-bold text-xl">Harikasın! 🌟</div>
          ) : (
            <button
              onClick={listen}
              aria-label="Mikrofonu aç ve söyle"
              className={`w-full py-4 rounded-2xl font-black text-xl transition-all active:scale-95 shadow-lg ${
                phase === "wrong"
                  ? "bg-white border-4 border-rose-500 text-rose-500"
                  : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-200"
              }`}
            >
              {phase === "wrong" ? "BİR DAHA DENE 🔄" : "SÖYLE 🎤"}
            </button>
          )}

          <button
            onClick={() => {
              stopRecognition();
              setErrorMsg(null);
              setPhase("teach");
            }}
            aria-label="Harfı tekrar anlat"
            className="w-full py-3 rounded-2xl font-black text-base transition-all active:scale-95 border-2 border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            TEKRAR ANLAT 🔊
          </button>

          <button
            onClick={next}
            aria-label="Sonraki harfe geç"
            className="w-full py-3 rounded-2xl font-black text-base transition-all active:scale-95 border-2 border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            GEÇ ⏭️
          </button>
        </div>

        {/* Ebeveyn Paneli */}
        <details className="mt-10 text-left">
          <summary className="text-xs font-bold text-slate-400 cursor-pointer hover:text-slate-600 transition">
            EBEVEYN MODU
          </summary>
          <div className="mt-4 bg-slate-50 p-4 rounded-2xl max-h-56 overflow-y-auto border border-slate-100">
            <h3 className="text-xs font-bold mb-2 border-b pb-1">Hata/Doğru İstatistiği:</h3>
            {Object.entries(stats).length === 0 ? (
              <div className="text-[11px] text-slate-500">Henüz istatistik yok.</div>
            ) : (
              Object.entries(stats).map(([harf, s]) => (
                <div key={harf} className="text-[10px] flex justify-between font-mono">
                  <span>Harf {harf}:</span>
                  <span className="text-emerald-600">✓{s.ok}</span>
                  <span className="text-rose-600">✗{s.wrong}</span>
                </div>
              ))
            )}
          </div>
        </details>
      </div>
    </div>
  );
}
