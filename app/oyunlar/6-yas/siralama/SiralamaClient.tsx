"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

// UX ayarları
const AUTO_NEXT_ON_CORRECT = true;
const AUTO_NEXT_DELAY_MS = 2200;

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

function isSpeechSupportedNow() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

// Memo’lu item butonu (performans + a11y)
const OrderingItemButton = React.memo(function OrderingItemButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl border border-slate-200 p-4 text-left text-2xl active:scale-[0.99]"
      aria-label={`Seç: ${label}`}
    >
      {label}
    </button>
  );
});

export default function SiralamaClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const urlId = sp.get("id");

  // 1) JSON'dan oyunları çek
  const [games, setGames] = useState<OrderingGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  // a11y live region mesajı
  const [liveMsg, setLiveMsg] = useState("");

  // Speech support state (tek sefer değil, mount’ta belirle)
  const [speechSupported, setSpeechSupported] = useState(false);
  const [needsUserGesture, setNeedsUserGesture] = useState(false);

  useEffect(() => {
    setSpeechSupported(isSpeechSupportedNow());
  }, []);

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

  // 2) Progress
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

  // 3) Daha güvenli byId (cast yok, duplicate uyarı var)
  const byId = useMemo(() => {
    const map: Record<string, OrderingGame> = {};
    for (const g of games) {
      if (map[g.id]) console.warn(`Duplicate game id: ${g.id}`);
      map[g.id] = g;
    }
    return map;
  }, [games]);

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

  // 4) Ses
  const [voiceOn, setVoiceOn] = useState(true);
  const [rate, setRate] = useState(0.95);
  const [pitch, setPitch] = useState(1.05);

  const speakCooldownRef = useRef<number>(0);

  const stopSpeak = () => {
    if (!speechSupported) return;
    try {
      window.speechSynthesis.cancel();
    } catch {}
  };

  const speak = (text?: string) => {
    if (!text || !voiceOn || !speechSupported) return;

    // spam’i azalt
    const now = Date.now();
    if (now - speakCooldownRef.current < 120) return;
    speakCooldownRef.current = now;

    try {
      // bazı mobil tarayıcılarda user gesture gerekebilir
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "tr-TR";
      u.rate = rate;
      u.pitch = pitch;
      window.speechSynthesis.speak(u);
      setNeedsUserGesture(false);
    } catch {
      setNeedsUserGesture(true);
    }
  };

  // 5) Oyun state
  const [pool, setPool] = useState<OrderingItem[]>([]);
  const [picked, setPicked] = useState<OrderingItem[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  // JSON güvenliği: answer ile items uyuşuyor mu?
  const validated = useMemo(() => {
    if (!game) return { ok: false, fixedAnswer: [] as string[], warn: "Oyun bulunamadı." };
    const itemIds = new Set(game.items.map((x) => x.id));
    const ans = Array.isArray(game.answer) ? game.answer : [];
    const validAns = ans.filter((id) => itemIds.has(id));

    // Eğer answer eksik/hatalıysa, items sırası fallback olsun
    if (validAns.length !== game.items.length) {
      return {
        ok: true,
        fixedAnswer: game.items.map((x) => x.id),
        warn: "Uyarı: JSON answer/ids uyumsuz. Güvenli modda item sırası kullanıldı.",
      };
    }
    return { ok: true, fixedAnswer: ans, warn: "" };
  }, [game]);

  const total = game?.items?.length ?? 0;

  const reset = (g: OrderingGame) => {
    stopSpeak();
    setStatus("idle");
    setPicked([]);
    setPool(shuffle(g.items));
    setLiveMsg("Yeni oyun başladı. Doğru sıraya diz.");
    speak(g.voice?.intro ?? "Doğru sıraya koy.");
    setProgress((prev) => ({ ...prev, lastGameId: g.id }));
  };

  useEffect(() => {
    if (!game) return;

    // router.replace güvenli
    if (game.id) {
      router.replace(`/oyunlar/6-yas/siralama?id=${game.id}`);
    }

    reset(game);

    // JSON warn varsa console’a bas (crash yok)
    if (validated.warn) console.warn(validated.warn);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game?.id]);

  const pick = (itemId: string) => {
    if (!game || status !== "idle") return;
    const item = pool.find((x) => x.id === itemId);
    if (!item) return;

    setPool((prev) => prev.filter((x) => x.id !== itemId));
    setPicked((prev) => [...prev, item]);

    setLiveMsg(`${item.label} seçildi.`);
    speak(item.label.replace(/[^\p{L}\p{N}\s]/gu, ""));
  };

  const undo = (itemId: string) => {
    if (status !== "idle") return;
    const item = picked.find((x) => x.id === itemId);
    if (!item) return;

    setPicked((prev) => prev.filter((x) => x.id !== itemId));
    setPool((prev) => [...prev, item]);
    setLiveMsg(`${item.label} geri alındı.`);
  };

  const check = () => {
    if (!game) return;
    if (picked.length !== total) return;

    const ok = picked.map((x) => x.id).join("|") === validated.fixedAnswer.join("|");
    setStatus(ok ? "correct" : "wrong");

    setProgress((prev) => {
      const played = prev.totalPlayed + 1;
      if (ok) {
        return { ...prev, totalPlayed: played, totalCorrect: prev.totalCorrect + 1, streak: prev.streak + 1, lastGameId: game.id };
      }
      return { ...prev, totalPlayed: played, totalWrong: prev.totalWrong + 1, streak: 0, lastGameId: game.id };
    });

    setLiveMsg(ok ? "Doğru! Tebrikler." : "Yanlış. Tekrar deneyebilirsin.");
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

  // Doğruysa otomatik geçiş
  useEffect(() => {
    if (!AUTO_NEXT_ON_CORRECT) return;
    if (status !== "correct") return;
    const t = window.setTimeout(() => next(), AUTO_NEXT_DELAY_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const sayHint = () => {
    if (!game) return;
    setLiveMsg("İpucu verildi.");
    speak(game.voice?.hint ?? "İpucu: Baştan düşün. İlk ne olur?");
  };

  const accuracy = progress.totalPlayed > 0 ? Math.round((progress.totalCorrect / progress.totalPlayed) * 100) : 0;

  // Loading / Error UI
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
          <h2 className="text-xl font-semibold">Oyun yüklenemedi</h2>
          <p className="mt-2 text-slate-600">{loadErr ?? "public/data/games6/ordering.json bulunamadı veya boş."}</p>
          <p className="mt-4 text-sm text-slate-500">
            Kontrol et: <b>public/data/games6/ordering.json</b> yolu doğru mu?
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl p-4">
        {/* aria-live region (screen reader) */}
        <div className="sr-only" aria-live="polite">
          {liveMsg}
        </div>

        {/* Mobil ses uyarısı */}
        {speechSupported && voiceOn && needsUserGesture && (
          <div className="mb-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
            🔊 Ses için önce bir kere ekrana dokunman gerekebilir. Sonra “Oku”ya bas.
          </div>
        )}

        {/* TOP BAR */}
        <div className="md:sticky md:top-0 bg-white/90 backdrop-blur border-b border-slate-200 py-3 md:z-20">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-xl font-semibold truncate">{game.title}</h2>
              <p className="text-slate-600">{game.prompt}</p>

              <div className="mt-2 flex flex-wrap gap-2 text-sm" role="status" aria-label="İstatistikler">
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
              <div className="text-sm text-slate-500" aria-label="Oyun sayacı">
                {index + 1}/{games.length}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  aria-label="Önceki oyun"
                >
                  ◀︎
                </button>
                <button
                  onClick={next}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  aria-label="Sonraki oyun"
                >
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
                  aria-label={voiceOn ? "Sesi kapat" : "Sesi aç"}
                >
                  {voiceOn ? "🔊 Ses Açık" : "🔇 Ses Kapalı"}
                </button>

                <button
                  onClick={() => speak(game.voice?.intro ?? "Başlayalım.")}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  aria-label="Metni sesli oku"
                >
                  🗣️ Oku
                </button>

                <button
                  onClick={sayHint}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  aria-label="İpucu ver"
                >
                  💡 İpucu
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500" aria-label="Ses ayarları">
                <span>Hız</span>
                <input
                  aria-label="Ses hızı"
                  type="range"
                  min={0.8}
                  max={1.1}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <span>Ton</span>
                <input
                  aria-label="Ses tonu"
                  type="range"
                  min={0.9}
                  max={1.2}
                  step={0.05}
                  value={pitch}
                  onChange={(e) => setPitch(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pool */}
        <div className="mt-4" role="region" aria-label="Seçilecek kartlar">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Seç</h2>

          <div className="grid grid-cols-1 gap-3" role="list" aria-label="Kart listesi">
            {pool.map((it) => (
              <div key={it.id} role="listitem">
                <OrderingItemButton label={it.label} onClick={() => pick(it.id)} />
              </div>
            ))}

            {pool.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-slate-500" role="status">
                Tüm kartlar seçildi ✅
              </div>
            )}
          </div>
        </div>

        {/* Order Area */}
        <div className="mt-6" role="region" aria-label="Sıralama alanı">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Sıra</h2>
          <div className="rounded-2xl border border-slate-200 p-3" role="list" aria-label="Sıra listesi">
            <div className="flex flex-col gap-3">
              {Array.from({ length: total }).map((_, i) => {
                const it = picked[i];
                return (
                  <div
                    key={i}
                    role="listitem"
                    className="rounded-2xl border border-slate-200 p-4 text-2xl flex items-center justify-between"
                  >
                    <span className="text-slate-400 mr-3" aria-label={`Sıra ${i + 1}`}>
                      {i + 1}.
                    </span>
                    <span className="flex-1">{it ? it.label : "⬜ Boş"}</span>

                    {it && (
                      <button
                        onClick={() => undo(it.id)}
                        className="ml-3 rounded-xl border border-slate-200 px-3 py-2 text-base"
                        aria-label={`${it.label} kartını geri al`}
                      >
                        Geri al
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => reset(game)}
            className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg"
            aria-label="Oyunu yenile"
          >
            Yenile
          </button>

          <button
            onClick={check}
            disabled={picked.length !== total}
            className="flex-1 rounded-2xl bg-black text-white py-3 text-lg disabled:opacity-40"
            aria-label="Cevabı kontrol et"
          >
            Kontrol Et
          </button>
        </div>

        {/* Result */}
        <div className="mt-4" role="status" aria-label="Sonuç">
          {status === "correct" && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-lg">
              🎉 Aferin! Doğru sıraladın.
              <button
                onClick={next}
                className="mt-3 w-full rounded-2xl bg-black text-white py-3 text-lg"
                aria-label="Sonraki oyuna geç"
              >
                Sonraki
              </button>
              {AUTO_NEXT_ON_CORRECT && (
                <p className="mt-2 text-sm text-green-800">Otomatik geçiş: {AUTO_NEXT_DELAY_MS / 1000}s</p>
              )}
            </div>
          )}

          {status === "wrong" && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-lg">
              🙂 Bir daha deneyelim!
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => setStatus("idle")}
                  className="flex-1 rounded-2xl border border-slate-200 py-3 text-lg"
                  aria-label="Devam et"
                >
                  Devam
                </button>
                <button
                  onClick={() => reset(game)}
                  className="flex-1 rounded-2xl bg-black text-white py-3 text-lg"
                  aria-label="Baştan başla"
                >
                  Baştan
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Reset progress */}
        <div className="mt-8">
          <button
            onClick={() => {
              stopSpeak();
              localStorage.removeItem(LS_KEY);
              setProgress(getDefaultProgress());
              setLiveMsg("İlerleme sıfırlandı.");
              speak("Sıfırlandı.");
            }}
            className="w-full rounded-2xl border border-slate-200 py-3 text-sm text-slate-600"
            aria-label="İlerlemeyi sıfırla"
          >
            İlerlemeyi Sıfırla (test amaçlı)
          </button>

          <p className="mt-2 text-xs text-slate-500">
            Not: Bazı cihazlarda ses, ilk dokunmadan önce başlamayabilir. İlk tıklamadan sonra sorunsuz çalışır.
          </p>
        </div>
      </div>
    </div>
  );
}
