"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type OrderingItem = { id: string; label: string };
type OrderingGame = {
  id: string;
  title: string;
  prompt: string;
  items: OrderingItem[];
  answer: string[];
  voice?: { intro?: string; correct?: string; wrong?: string; hint?: string };
};

type Payload = { games: OrderingGame[] };

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function safeParse<T>(v: string | null, fallback: T): T {
  if (!v) return fallback;
  try {
    return JSON.parse(v) as T;
  } catch {
    return fallback;
  }
}

const LS_KEY = "td_6y_ordering_progress_v1";

type Progress = {
  totalPlayed: number;
  totalCorrect: number;
  totalWrong: number;
  streak: number;
  lastGameId?: string;
};

function getDefaultProgress(): Progress {
  return { totalPlayed: 0, totalCorrect: 0, totalWrong: 0, streak: 0 };
}

function isSpeechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

export default function SiralamaClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const urlId = sp.get("id");

  // JSON'dan oyunları çek
  const [games, setGames] = useState<OrderingGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/games6/ordering.json", { cache: "no-store" });
        if (!res.ok) throw new Error("JSON okunamadı: /data/games6/ordering.json");
        const data = (await res.json()) as Payload;
        if (!data?.games?.length) throw new Error("JSON formatı boş veya hatalı (games bulunamadı).");
        if (alive) setGames(data.games);
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

  // Progress
  const [progress, setProgress] = useState<Progress>(getDefaultProgress());
  const [loadedLS, setLoadedLS] = useState(false);

  useEffect(() => {
    const p = safeParse<Progress>(localStorage.getItem(LS_KEY), getDefaultProgress());
    setProgress(p);
    setLoadedLS(true);
  }, []);

  useEffect(() => {
    if (!loadedLS) return;
    localStorage.setItem(LS_KEY, JSON.stringify(progress));
  }, [progress, loadedLS]);

  // Oyun seçimi
  const byId = useMemo(
    () => Object.fromEntries(games.map((g) => [g.id, g])) as Record<string, OrderingGame>,
    [games]
  );

  const initialGameId = useMemo(() => {
    if (urlId && byId[urlId]) return urlId;
    if (progress.lastGameId && byId[progress.lastGameId]) return progress.lastGameId;
    return games[0]?.id ?? "";
  }, [urlId, byId, progress.lastGameId, games]);

  const [gameId, setGameId] = useState<string>("");

  useEffect(() => {
    if (!games.length) return;
    if (!gameId) setGameId(initialGameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [games.length, initialGameId]);

  const game = useMemo(() => (gameId ? byId[gameId] : undefined), [byId, gameId]);
  const index = useMemo(() => {
    const i = games.findIndex((g) => g.id === gameId);
    return i >= 0 ? i : 0;
  }, [games, gameId]);

  // Ses
  const [voiceOn, setVoiceOn] = useState(true);
  const [rate, setRate] = useState(0.95);
  const [pitch, setPitch] = useState(1.05);
  const speakingRef = useRef(false);

  const stopSpeak = () => {
    if (!isSpeechSupported()) return;
    try {
      window.speechSynthesis.cancel();
    } catch {}
  };

  const speak = (text?: string) => {
    if (!text || !voiceOn || !isSpeechSupported()) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "tr-TR";
      u.rate = rate;
      u.pitch = pitch;
      u.onstart = () => (speakingRef.current = true);
      u.onend = () => (speakingRef.current = false);
      u.onerror = () => (speakingRef.current = false);
      window.speechSynthesis.speak(u);
    } catch {}
  };

  // Oyun state
  const [pool, setPool] = useState<OrderingItem[]>([]);
  const [picked, setPicked] = useState<OrderingItem[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  const total = game?.items?.length ?? 0;

  const reset = (g: OrderingGame) => {
    stopSpeak();
    setStatus("idle");
    setPicked([]);
    setPool(shuffle(g.items));
    speak(g.voice?.intro ?? "Doğru sıraya koy.");
    setProgress((prev) => ({ ...prev, lastGameId: g.id }));
  };

  useEffect(() => {
    if (!game) return;
    reset(game);
    router.replace(`/oyunlar/6-yas/siralama?id=${game.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game?.id]);

  const pick = (itemId: string) => {
    if (!game || status !== "idle") return;
    const item = pool.find((x) => x.id === itemId);
    if (!item) return;
    setPool((prev) => prev.filter((x) => x.id !== itemId));
    setPicked((prev) => [...prev, item]);
    speak(item.label.replace(/[^\p{L}\p{N}\s]/gu, ""));
  };

  const undo = (itemId: string) => {
    if (status !== "idle") return;
    const item = picked.find((x) => x.id === itemId);
    if (!item) return;
    setPicked((prev) => prev.filter((x) => x.id !== itemId));
    setPool((prev) => [...prev, item]);
  };

  const check = () => {
    if (!game || picked.length !== total) return;
    const ok = picked.map((x) => x.id).join("|") === game.answer.join("|");
    setStatus(ok ? "correct" : "wrong");

    setProgress((prev) => {
      const played = prev.totalPlayed + 1;
      if (ok) {
        return { ...prev, totalPlayed: played, totalCorrect: prev.totalCorrect + 1, streak: prev.streak + 1, lastGameId: game.id };
      }
      return { ...prev, totalPlayed: played, totalWrong: prev.totalWrong + 1, streak: 0, lastGameId: game.id };
    });

    speak(ok ? (game.voice?.correct ?? "Aferin!") : (game.voice?.wrong ?? "Bir daha deneyelim."));
  };

  const next = () => {
    if (!games.length) return;
    setGameId(games[(index + 1) % games.length].id);
  };

  const prev = () => {
    if (!games.length) return;
    setGameId(games[(index - 1 + games.length) % games.length].id);
  };

  const sayHint = () => {
    if (!game) return;
    speak(game.voice?.hint ?? "İpucu: Baştan düşün. İlk ne olur?");
  };

  const accuracy = progress.totalPlayed > 0 ? Math.round((progress.totalCorrect / progress.totalPlayed) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl p-6 text-slate-600">Yükleniyor…</div>
      </div>
    );
  }

  if (loadErr || !games.length || !game) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl p-6">
          <h1 className="text-xl font-semibold">Oyun yüklenemedi</h1>
          <p className="mt-2 text-slate-600">{loadErr ?? "public/data/games6/ordering.json bulunamadı veya boş."}</p>
          <p className="mt-4 text-sm text-slate-500">
            Kontrol et: <b>public/data/games6/ordering.json</b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl p-4">
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 py-3 z-20">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl font-semibold truncate">{game.title}</h1>
              <p className="text-slate-600">{game.prompt}</p>

              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-slate-200 px-3 py-1">
                  ✅ Doğru: <b>{progress.totalCorrect}</b>
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1">
                  ❌ Yanlış: <b>{progress.totalWrong}</b>
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1">
                  🎯 Başarı: <b>%{accuracy}</b>
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1">
                  🔥 Seri: <b>{progress.streak}</b>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              <div className="text-sm text-slate-500">
                {index + 1}/{games.length}
              </div>

              <div className="flex gap-2">
                <button onClick={prev} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                  ◀︎
                </button>
                <button onClick={next} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                  ▶︎
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setVoiceOn((v) => !v);
                    stopSpeak();
                  }}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  {voiceOn ? "🔊 Ses Açık" : "🔇 Ses Kapalı"}
                </button>

                <button onClick={() => speak(game.voice?.intro ?? "Başlayalım.")} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                  🗣️ Oku
                </button>

                <button onClick={sayHint} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                  💡 İpucu
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Hız</span>
                <input type="range" min={0.8} max={1.1} step={0.05} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                <span>Ton</span>
                <input type="range" min={0.9} max={1.2} step={0.05} value={pitch} onChange={(e) => setPitch(Number(e.target.value))} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Seç</h2>
          <div className="grid grid-cols-1 gap-3">
            {pool.map((it) => (
              <button key={it.id} onClick={() => pick(it.id)} className="w-full rounded-2xl border border-slate-200 p-4 text-left text-2xl active:scale-[0.99]">
                {it.label}
              </button>
            ))}
            {pool.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-slate-500">Tüm kartlar seçildi ✅</div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Sıra</h2>
          <div className="rounded-2xl border border-slate-200 p-3">
            <div className="flex flex-col gap-3">
              {Array.from({ length: total }).map((_, i) => {
                const it = picked[i];
                return (
                  <div key={i} className="rounded-2xl border border-slate-200 p-4 text-2xl flex items-center justify-between">
                    <span className="text-slate-400 mr-3">{i + 1}.</span>
                    <span className="flex-1">{it ? it.label : "⬜ Boş"}</span>
                    {it && (
                      <button onClick={() => undo(it.id)} className="ml-3 rounded-xl border border-slate-200 px-3 py-2 text-base">
                        Geri al
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={() => reset(game)} className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg">
            Yenile
          </button>

          <button onClick={check} disabled={picked.length !== total} className="flex-1 rounded-2xl bg-black text-white py-3 text-lg disabled:opacity-40">
            Kontrol Et
          </button>
        </div>

        <div className="mt-4">
          {status === "correct" && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-lg">
              🎉 Aferin! Doğru sıraladın.
              <button onClick={next} className="mt-3 w-full rounded-2xl bg-black text-white py-3 text-lg">
                Sonraki
              </button>
            </div>
          )}

          {status === "wrong" && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-lg">
              🙂 Bir daha deneyelim!
              <div className="mt-3 flex gap-3">
                <button onClick={() => setStatus("idle")} className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg">
                  Devam
                </button>
                <button onClick={() => reset(game)} className="flex-1 rounded-2xl bg-black text-white py-3 text-lg">
                  Baştan
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={() => {
              stopSpeak();
              localStorage.removeItem(LS_KEY);
              setProgress(getDefaultProgress());
              speak("Sıfırlandı.");
            }}
            className="w-full rounded-2xl border border-slate-200 py-3 text-sm text-slate-600"
          >
            İlerlemeyi Sıfırla (test amaçlı)
          </button>

          <p className="mt-2 text-xs text-slate-500">Not: Bazı cihazlarda ses, ilk dokunmadan önce başlamayabilir.</p>
        </div>
      </div>
    </div>
  );
}