"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type MissingGame = {
  id: string;
  title: string;
  prompt: string;
  sequence: string[];   // ["🔴","🔵","🔴","?"]
  choices: string[];    // ["🔵","🟢","🔴","🟡"]
  answer: string;       // "🔵"
  hint?: string;
};

type Payload = { games: MissingGame[] };

const LS_KEY = "td_6y_missing_progress_v1";
const AUTO_NEXT_MS = 1800;

type Progress = {
  totalPlayed: number;
  totalCorrect: number;
  totalWrong: number;
  streak: number;
  lastId?: string;
};

const defaultProgress: Progress = { totalPlayed: 0, totalCorrect: 0, totalWrong: 0, streak: 0 };

function safeParse<T>(v: string | null, fallback: T): T {
  if (!v) return fallback;
  try {
    return JSON.parse(v) as T;
  } catch {
    return fallback;
  }
}

function isSpeechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

export default function Page() {
  const [games, setGames] = useState<MissingGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [loadedLS, setLoadedLS] = useState(false);

  const [gameId, setGameId] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  const [voiceOn, setVoiceOn] = useState(true);
  const speakCooldownRef = useRef<number>(0);

  const speak = (text?: string) => {
    if (!text || !voiceOn || !isSpeechSupported()) return;
    const now = Date.now();
    if (now - speakCooldownRef.current < 150) return;
    speakCooldownRef.current = now;

    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "tr-TR";
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch {}
  };

  // Load JSON
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/games6/missing.json", { cache: "no-store" });
        if (!res.ok) throw new Error("JSON okunamadı: /data/games6/missing.json");
        const data = (await res.json()) as Payload;
        if (!data?.games?.length) throw new Error("JSON boş veya hatalı (games yok).");
        if (alive) {
          setGames(data.games);
          setGameId((prev) => prev || data.games[0].id);
        }
      } catch (e: any) {
        if (alive) setLoadErr(e?.message ?? "Bilinmeyen hata");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Load progress
  useEffect(() => {
    const p = safeParse<Progress>(localStorage.getItem(LS_KEY), defaultProgress);
    setProgress(p);
    setLoadedLS(true);
  }, []);

  // Save progress
  useEffect(() => {
    if (!loadedLS) return;
    localStorage.setItem(LS_KEY, JSON.stringify(progress));
  }, [progress, loadedLS]);

  // Build map
  const byId = useMemo(() => {
    const map: Record<string, MissingGame> = {};
    for (const g of games) map[g.id] = g;
    return map;
  }, [games]);

  // Choose initial from lastId if exists
  useEffect(() => {
    if (!games.length) return;
    if (!gameId && progress.lastId && byId[progress.lastId]) setGameId(progress.lastId);
    if (!gameId) setGameId(games[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [games.length]);

  const game = useMemo(() => (gameId ? byId[gameId] : undefined), [byId, gameId]);
  const index = useMemo(() => games.findIndex((g) => g.id === gameId), [games, gameId]);

  const next = () => {
    if (!games.length) return;
    const i = index >= 0 ? index : 0;
    const nxt = games[(i + 1) % games.length].id;
    setGameId(nxt);
    setStatus("idle");
    speak("Yeni soru.");
    setProgress((p) => ({ ...p, lastId: nxt }));
  };

  const prev = () => {
    if (!games.length) return;
    const i = index >= 0 ? index : 0;
    const prv = games[(i - 1 + games.length) % games.length].id;
    setGameId(prv);
    setStatus("idle");
    setProgress((p) => ({ ...p, lastId: prv }));
  };

  const onPick = (choice: string) => {
    if (!game || status !== "idle") return;

    const ok = choice === game.answer;
    setStatus(ok ? "correct" : "wrong");

    setProgress((p) => {
      const played = p.totalPlayed + 1;
      if (ok) {
        return { ...p, totalPlayed: played, totalCorrect: p.totalCorrect + 1, streak: p.streak + 1, lastId: game.id };
      }
      return { ...p, totalPlayed: played, totalWrong: p.totalWrong + 1, streak: 0, lastId: game.id };
    });

    speak(ok ? "Aferin! Doğru." : "Bir daha deneyelim.");

    if (ok) {
      window.setTimeout(() => next(), AUTO_NEXT_MS);
    }
  };

  const resetStatus = () => setStatus("idle");

  const accuracy =
    progress.totalPlayed > 0 ? Math.round((progress.totalCorrect / progress.totalPlayed) * 100) : 0;

  if (loading) {
    return <div className="min-h-screen bg-white p-6 text-slate-600">Yükleniyor…</div>;
  }

  if (loadErr || !game) {
    return (
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-xl font-semibold">Oyun yüklenemedi</h1>
        <p className="mt-2 text-slate-600">{loadErr ?? "missing.json bulunamadı veya boş."}</p>
        <p className="mt-4 text-sm text-slate-500">
          Kontrol: <b>public/data/games6/missing.json</b>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl p-4">
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 py-3 z-20">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl font-semibold">{game.title}</h1>
              <p className="text-slate-600">{game.prompt}</p>

              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-slate-200 px-3 py-1">✅ {progress.totalCorrect}</span>
                <span className="rounded-full border border-slate-200 px-3 py-1">❌ {progress.totalWrong}</span>
                <span className="rounded-full border border-slate-200 px-3 py-1">🎯 %{accuracy}</span>
                <span className="rounded-full border border-slate-200 px-3 py-1">🔥 {progress.streak}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              <div className="text-sm text-slate-500">
                {index + 1}/{games.length}
              </div>

              <div className="flex gap-2">
                <button onClick={prev} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" aria-label="Önceki">
                  ◀︎
                </button>
                <button onClick={next} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" aria-label="Sonraki">
                  ▶︎
                </button>
              </div>

              <button
                onClick={() => setVoiceOn((v) => !v)}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              >
                {voiceOn ? "🔊 Ses Açık" : "🔇 Ses Kapalı"}
              </button>
            </div>
          </div>
        </div>

        {/* Sequence */}
        <div className="mt-6 rounded-2xl border border-slate-200 p-4">
          <div className="text-sm font-semibold text-slate-700 mb-3">Dizi</div>
          <div className="flex flex-wrap gap-3 justify-center">
            {game.sequence.map((s, i) => (
              <div
                key={i}
                className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-3xl
                ${s === "?" ? "border-dashed border-slate-400 bg-slate-50" : "border-slate-200 bg-white"}`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Choices */}
        <div className="mt-6">
          <div className="text-sm font-semibold text-slate-700 mb-2">Seçenekler</div>
          <div className="grid grid-cols-2 gap-3">
            {game.choices.map((c) => (
              <button
                key={c}
                onClick={() => onPick(c)}
                disabled={status !== "idle"}
                className={`rounded-2xl border p-4 text-3xl active:scale-[0.99] disabled:opacity-60
                  ${status === "idle" ? "bg-white border-slate-200 hover:border-indigo-400" : "bg-slate-50 border-slate-200"}`}
                aria-label={`Seçenek: ${c}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="mt-4">
          {status === "correct" && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-lg">
              🎉 Aferin! (Sonraki soru geliyor…)
            </div>
          )}

          {status === "wrong" && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-lg">
              🙂 Tekrar dene!
              <div className="mt-3 flex gap-3">
                <button onClick={resetStatus} className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg">
                  Devam
                </button>
                <button
                  onClick={() => alert(game.hint ?? "İpucu yok")}
                  className="flex-1 rounded-2xl bg-black text-white py-3 text-lg"
                >
                  💡 İpucu
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Reset */}
        <div className="mt-8">
          <button
            onClick={() => {
              localStorage.removeItem(LS_KEY);
              setProgress(defaultProgress);
              speak("Sıfırlandı.");
            }}
            className="w-full rounded-2xl border border-slate-200 py-3 text-sm text-slate-600"
          >
            İlerlemeyi Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
}