"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type MissingGame = {
  id: string;
  title: string;
  prompt: string;
  sequence: string[];
  choices: string[];
  answer: string;
  hint?: string;
};

type Payload = { games: MissingGame[] };

const LS_KEY = "td_6y_missing_progress_v2";
const AUTO_NEXT_MS = 1800;

type Progress = {
  totalPlayed: number;
  totalCorrect: number;
  totalWrong: number;
  streak: number;
  lastId?: string;
  completedIds?: string[]; // biten oyunlar
};

const defaultProgress: Progress = {
  totalPlayed: 0,
  totalCorrect: 0,
  totalWrong: 0,
  streak: 0,
  lastId: undefined,
  completedIds: [],
};

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
  // ---------------- LOAD JSON ----------------
  const [games, setGames] = useState<MissingGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  const fetchGames = useCallback(async () => {
    setLoadErr(null);
    setLoading(true);
    try {
      const res = await fetch("/data/games6/missing.json", { cache: "no-store" });
      if (!res.ok) throw new Error("JSON okunamadı: /data/games6/missing.json");
      const data = (await res.json()) as Payload;
      if (!data?.games?.length) throw new Error("JSON boş veya hatalı (games yok).");
      setGames(data.games);
    } catch (e: any) {
      setLoadErr(e?.message ?? "Bilinmeyen hata");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  // ---------------- PROGRESS ----------------
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [loadedLS, setLoadedLS] = useState(false);

  useEffect(() => {
    const p = safeParse<Progress>(localStorage.getItem(LS_KEY), defaultProgress);
    // backward compatible
    setProgress({
      ...defaultProgress,
      ...p,
      completedIds: Array.isArray(p.completedIds) ? p.completedIds : [],
    });
    setLoadedLS(true);
  }, []);

  useEffect(() => {
    if (!loadedLS) return;
    localStorage.setItem(LS_KEY, JSON.stringify(progress));
  }, [progress, loadedLS]);

  // ---------------- MAP ----------------
  const byId = useMemo(() => {
    const map: Record<string, MissingGame> = {};
    for (const g of games) {
      if (map[g.id]) console.warn("Duplicate game id:", g.id);
      map[g.id] = g;
    }
    return map;
  }, [games]);

  // ---------------- CURRENT GAME ----------------
  const [gameId, setGameId] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  // İlk seçim (LS lastId varsa onu)
  useEffect(() => {
    if (!games.length) return;
    const lastId = progress.lastId;
    const initial = lastId && byId[lastId] ? lastId : games[0].id;
    setGameId((prev) => (prev ? prev : initial));
  }, [games, progress.lastId, byId]);

  const game = useMemo(() => (gameId ? byId[gameId] : undefined), [byId, gameId]);
  const index = useMemo(() => games.findIndex((g) => g.id === gameId), [games, gameId]);

  // ---------------- SPEECH ----------------
  const [voiceOn, setVoiceOn] = useState(true);
  const speakCooldownRef = useRef<number>(0);
  const trVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Türkçe ses yakala (geç gelebiliyor)
  useEffect(() => {
    if (!isSpeechSupported()) return;

    const pickTrVoice = () => {
      try {
        const voices = window.speechSynthesis.getVoices();
        const tr = voices.find((v) => v.lang?.toLowerCase().startsWith("tr"));
        trVoiceRef.current = tr ?? null;
      } catch {
        trVoiceRef.current = null;
      }
    };

    pickTrVoice();
    window.speechSynthesis.onvoiceschanged = pickTrVoice;

    return () => {
      // cleanup
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
    (text?: string) => {
      if (!text || !voiceOn || !isSpeechSupported()) return;

      const now = Date.now();
      if (now - speakCooldownRef.current < 300) return; // daha güvenli
      speakCooldownRef.current = now;

      try {
        // Bazı tarayıcılarda cancel agresif olabilir:
        // Sadece konuşma varken kes.
        if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

        const u = new SpeechSynthesisUtterance(text);
        u.lang = "tr-TR";
        u.rate = 0.92;
        u.pitch = 1.08;
        u.volume = 0.9;

        // Türkçe voice varsa seç
        if (trVoiceRef.current) u.voice = trVoiceRef.current;

        window.speechSynthesis.speak(u);
      } catch {}
    },
    [voiceOn]
  );

  // ---------------- NAV ----------------
  const next = useCallback(() => {
    if (!games.length) return;
    const i = index >= 0 ? index : 0;
    const nxt = games[(i + 1) % games.length]?.id;
    if (!nxt) return;
    setGameId(nxt);
    setStatus("idle");
    setIsProcessing(false);
    setProgress((p) => ({ ...p, lastId: nxt }));
    speak("Yeni soru.");
  }, [games, index, speak]);

  const prev = useCallback(() => {
    if (!games.length) return;
    const i = index >= 0 ? index : 0;
    const prv = games[(i - 1 + games.length) % games.length]?.id;
    if (!prv) return;
    setGameId(prv);
    setStatus("idle");
    setIsProcessing(false);
    setProgress((p) => ({ ...p, lastId: prv }));
  }, [games, index]);

  // ---------------- PICK ----------------
  const onPick = useCallback(
    (choice: string) => {
      if (!game) return;
      if (status !== "idle") return;
      if (isProcessing) return;

      setIsProcessing(true);

      const ok = choice === game.answer;
      setStatus(ok ? "correct" : "wrong");

      setProgress((p) => {
        const played = p.totalPlayed + 1;
        const completedIds = new Set(p.completedIds ?? []);
        if (ok) completedIds.add(game.id);

        const updated: Progress = ok
          ? {
              ...p,
              totalPlayed: played,
              totalCorrect: p.totalCorrect + 1,
              streak: p.streak + 1,
              lastId: game.id,
              completedIds: Array.from(completedIds),
            }
          : {
              ...p,
              totalPlayed: played,
              totalWrong: p.totalWrong + 1,
              streak: 0,
              lastId: game.id,
              completedIds: Array.from(completedIds),
            };

        return updated;
      });

      speak(ok ? "Aferin! Doğru." : (game.hint ? `İpucu: ${game.hint}` : "Bir daha deneyelim."));

      // doğruysa otomatik geç
      if (ok) {
        window.setTimeout(() => {
          setIsProcessing(false);

          // tüm oyunlar tamam mı?
          const completedSet = new Set(progress.completedIds ?? []);
          completedSet.add(game.id);
          const allDone = games.length > 0 && completedSet.size >= games.length;

          if (allDone) {
            setShowCongrats(true);
            speak("Tebrikler! Tüm soruları tamamladın!");
            return;
          }

          next();
        }, AUTO_NEXT_MS);
      } else {
        // yanlışsa kısa süre sonra tekrar tıklanabilir olsun
        window.setTimeout(() => setIsProcessing(false), 400);
      }
    },
    [game, status, isProcessing, speak, next, games.length, progress.completedIds]
  );

  const accuracy =
    progress.totalPlayed > 0 ? Math.round((progress.totalCorrect / progress.totalPlayed) * 100) : 0;

  // ---------------- UI STATES ----------------
  if (loading) {
    return <div className="min-h-screen bg-white p-6 text-slate-600">Yükleniyor…</div>;
  }

  if (loadErr) {
    return (
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-xl font-semibold">Oyun yüklenemedi</h1>
        <p className="mt-2 text-slate-600">{loadErr}</p>
        <button
          onClick={fetchGames}
          className="mt-4 rounded-2xl bg-black text-white px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Tekrar Dene
        </button>
        <p className="mt-4 text-sm text-slate-500">
          Kontrol: <b>public/data/games6/missing.json</b>
        </p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-xl font-semibold">Oyun bulunamadı</h1>
        <button
          onClick={fetchGames}
          className="mt-4 rounded-2xl bg-black text-white px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Yenile
        </button>
      </div>
    );
  }

  // Tebrik ekranı
  if (showCongrats) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl p-6">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <h1 className="text-2xl font-black">🎉 Tebrikler!</h1>
            <p className="mt-2 text-slate-700">Tüm soruları tamamladın.</p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">✅ {progress.totalCorrect}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">❌ {progress.totalWrong}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">🎯 %{accuracy}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">🔥 {progress.streak}</span>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => {
                  setShowCongrats(false);
                  setGameId(games[0]?.id ?? "");
                  setStatus("idle");
                }}
                className="flex-1 rounded-2xl bg-black text-white py-3 text-lg focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Baştan Oyna
              </button>
              <button
                onClick={() => setShowCongrats(false)}
                className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl p-4">
        {/* TOP BAR */}
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
                <button
                  onClick={prev}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  aria-label="Önceki"
                >
                  ◀︎
                </button>
                <button
                  onClick={next}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  aria-label="Sonraki"
                >
                  ▶︎
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setVoiceOn((v) => !v);
                    stopSpeak();
                  }}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  {voiceOn ? "🔊 Ses Açık" : "🔇 Ses Kapalı"}
                </button>

                <button
                  onClick={() => speak(game.hint ? `İpucu: ${game.hint}` : "Diziyi dikkatle incele.")}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  aria-label="İpucu oku"
                >
                  💡
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sequence */}
        <div className="mt-6 rounded-2xl border border-slate-200 p-4" role="list" aria-label="Dizi">
          <div className="text-sm font-semibold text-slate-700 mb-3">Dizi</div>
          <div className="flex flex-wrap gap-3 justify-center">
            {game.sequence.map((s, i) => (
              <div
                key={i}
                role="listitem"
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
                disabled={status !== "idle" || isProcessing}
                style={{ touchAction: "manipulation" }}
                className={`rounded-2xl border p-4 text-3xl active:scale-[0.99] disabled:opacity-60
                  focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  ${status === "idle" ? "bg-white border-slate-200 hover:border-indigo-400" : "bg-slate-50 border-slate-200"}`}
                aria-label={`Seçenek ${c} - ${game.sequence.join(" ")} dizisindeki eksik parça`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="mt-4" aria-live="polite">
          {status === "correct" && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-lg">
              🎉 Aferin! (Sonraki soru geliyor…)
            </div>
          )}

          {status === "wrong" && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-lg">
              🙂 Tekrar dene!
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => setStatus("idle")}
                  className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Devam
                </button>
                <button
                  onClick={() => speak(game.hint ? `İpucu: ${game.hint}` : "Diziyi tekrar incele.")}
                  className="flex-1 rounded-2xl bg-black text-white py-3 text-lg focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
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
              stopSpeak();
              if (!confirm("İlerleme tamamen sıfırlanacak. Emin misin?")) return;
              localStorage.removeItem(LS_KEY);
              setProgress(defaultProgress);
              setStatus("idle");
              setShowCongrats(false);
              speak("Sıfırlandı.");
            }}
            className="w-full rounded-2xl border border-slate-200 py-3 text-sm text-slate-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            İlerlemeyi Sıfırla
          </button>

          <p className="mt-2 text-xs text-slate-500">
            Not: Bazı cihazlarda ses, ilk dokunmadan önce başlamayabilir. İlk tıklamadan sonra sorunsuz çalışır.
          </p>
        </div>
      </div>
    </div>
  );
}