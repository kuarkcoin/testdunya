"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Phase = "teach" | "turn" | "correct" | "wrong";

const LETTER_PAIR = { upper: "A", lower: "a" };

function isSpeechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

export default function Page() {
  const [phase, setPhase] = useState<Phase>("teach");
  const [voiceOn, setVoiceOn] = useState(true);
  const confettiSeed = useRef(0);
  const [confettiKey, setConfettiKey] = useState(0);
  const trVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const speakCooldownRef = useRef(0);

  useEffect(() => {
    if (!isSpeechSupported()) return;

    const pickTrVoice = () => {
      try {
        const voices = window.speechSynthesis.getVoices();
        const trVoice = voices.find((voice) => voice.lang?.toLowerCase().startsWith("tr"));
        trVoiceRef.current = trVoice ?? null;
      } catch {
        trVoiceRef.current = null;
      }
    };

    pickTrVoice();
    window.speechSynthesis.onvoiceschanged = pickTrVoice;

    return () => {
      if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const stopSpeak = useCallback(() => {
    if (!isSpeechSupported()) return;
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!text || !voiceOn || !isSpeechSupported()) return;

      const now = Date.now();
      if (now - speakCooldownRef.current < 300) return;
      speakCooldownRef.current = now;

      try {
        if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "tr-TR";
        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        utterance.volume = 0.9;
        if (trVoiceRef.current) utterance.voice = trVoiceRef.current;

        window.speechSynthesis.speak(utterance);
      } catch {}
    },
    [voiceOn]
  );

  const teachText = `Önce büyük ${LETTER_PAIR.upper}, sonra küçük ${LETTER_PAIR.lower}.`;
  const turnText = `Sıra sende! Önce büyük ${LETTER_PAIR.upper}, sonra küçük ${LETTER_PAIR.lower}.`;

  useEffect(() => {
    if (phase === "teach") {
      speak(teachText);
    }
    if (phase === "turn") {
      speak(turnText);
    }
    if (phase === "wrong") {
      speak("Tekrar deneyelim.");
    }
    if (phase === "correct") {
      speak("Harika söyledin!");
    }
  }, [phase, speak, teachText, turnText]);

  const onCorrect = useCallback(() => {
    confettiSeed.current += 1;
    setConfettiKey(confettiSeed.current);
    setPhase("correct");
  }, []);

  const onWrong = useCallback(() => {
    setPhase("wrong");
  }, []);

  const resetTurn = useCallback(() => {
    setPhase("turn");
  }, []);

  const confettiPieces = useMemo(() => {
    const total = 30;
    return Array.from({ length: total }, (_, index) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 0.4;
      const duration = 1.6 + Math.random() * 0.8;
      const size = 6 + Math.random() * 6;
      const colors = ["#f97316", "#22c55e", "#3b82f6", "#a855f7", "#facc15"];
      const background = colors[index % colors.length];
      return { left, delay, duration, size, background };
    });
  }, [confettiKey]);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Alfabe Oyunu</h1>
            <p className="text-slate-600">Büyük harf ile küçük harfi sırayla söyle.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setVoiceOn((prev) => !prev);
                stopSpeak();
              }}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {voiceOn ? "🔊 Ses Açık" : "🔇 Ses Kapalı"}
            </button>
            <button
              onClick={() => speak(phase === "turn" ? turnText : teachText)}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              🎧 Dinle
            </button>
          </div>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Örnek</div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-6xl font-bold text-indigo-600 shadow-sm">
                {LETTER_PAIR.upper}
              </span>
              <span className="text-4xl text-slate-400">→</span>
              <span className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-6xl font-bold text-emerald-600 shadow-sm">
                {LETTER_PAIR.lower}
              </span>
            </div>
            <p className="max-w-xl text-lg text-slate-700">Önce büyük harfi, sonra küçük harfi söyle.</p>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
          {phase === "correct" && (
            <div className="pointer-events-none absolute inset-0">
              {confettiPieces.map((piece, index) => (
                <span
                  key={`${confettiKey}-${index}`}
                  className="confetti-piece"
                  style={{
                    left: `${piece.left}%`,
                    animationDelay: `${piece.delay}s`,
                    animationDuration: `${piece.duration}s`,
                    width: `${piece.size}px`,
                    height: `${piece.size * 1.4}px`,
                    background: piece.background,
                  }}
                />
              ))}
            </div>
          )}

          {phase === "teach" && (
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-semibold text-slate-900">Hazırlan!</h2>
              <p className="text-slate-600">Şimdi benimle birlikte tekrar et.</p>
              <button
                onClick={() => setPhase("turn")}
                className="rounded-2xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Sıra Sende
              </button>
            </div>
          )}

          {phase === "turn" && (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Sıra Sende</div>
              <h2 className="text-3xl font-bold text-slate-900">{LETTER_PAIR.upper} → {LETTER_PAIR.lower}</h2>
              <p className="text-lg text-slate-600">Çocuk söyleyince aşağıdan seç.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onCorrect}
                  className="rounded-2xl bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  ✅ Doğru söyledi
                </button>
                <button
                  onClick={onWrong}
                  className="rounded-2xl bg-rose-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                >
                  ❌ Yanlış oldu
                </button>
              </div>
            </div>
          )}

          {phase === "wrong" && (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-rose-50 text-6xl text-rose-500">✕</div>
              <h2 className="text-2xl font-semibold text-slate-900">Tekrar deneyelim</h2>
              <p className="text-slate-600">Önce büyük harf, sonra küçük harf.</p>
              <button
                onClick={resetTurn}
                className="rounded-2xl border border-slate-200 px-6 py-3 text-lg font-semibold text-slate-700 hover:border-slate-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Tekrar Söyle
              </button>
            </div>
          )}

          {phase === "correct" && (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="text-6xl">🎉</div>
              <h2 className="text-2xl font-semibold text-slate-900">Harika!</h2>
              <p className="text-slate-600">Doğru söyledin. Bir daha deneyebiliriz.</p>
              <button
                onClick={resetTurn}
                className="rounded-2xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Tekrar Oyna
              </button>
            </div>
          )}
        </section>

        <p className="text-xs text-slate-500">
          Not: Sesli anlatım için cihazda ses desteği ve ilk etkileşim gerekir.
        </p>
      </div>

      <style jsx>{`
        .confetti-piece {
          position: absolute;
          top: -10px;
          border-radius: 999px;
          opacity: 0;
          animation-name: confetti-fall;
          animation-timing-function: ease-out;
          animation-iteration-count: 1;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(360px) rotate(160deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
