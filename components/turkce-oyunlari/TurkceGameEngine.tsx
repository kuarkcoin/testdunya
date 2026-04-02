"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TurkceGameUnitConfig } from "./turkce-games-config";

type Item = {
  id: number;
  lane: number;
  y: number;
  value: string;
  isCorrect: boolean;
};

type Screen = "ready" | "playing" | "paused" | "done";

type Badge = "flawless" | "score100" | "streak10";

type Stored = { highScore: number; lastScore: number; badges: Badge[] };

const STORAGE_PREFIX = "turkce_game_engine_";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getStyleByItemType(itemType: TurkceGameUnitConfig["itemType"]) {
  if (itemType === "sentence" || itemType === "pair") return "card";
  return "bubble";
}

export default function TurkceGameEngine({ unit }: { unit: TurkceGameUnitConfig }) {
  const [screen, setScreen] = useState<Screen>("ready");
  const [items, setItems] = useState<Item[]>([]);
  const [lane, setLane] = useState(1);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [feedback, setFeedback] = useState<string>(unit.instruction);
  const [roadHeight, setRoadHeight] = useState(460);
  const [store, setStore] = useState<Stored>({ highScore: 0, lastScore: 0, badges: [] });

  const rafRef = useRef<number | null>(null);
  const spawnRef = useRef<number | null>(null);
  const feedbackRef = useRef<number | null>(null);
  const lastTsRef = useRef(0);
  const nextIdRef = useRef(1);
  const roadRef = useRef<HTMLDivElement | null>(null);

  const lanes = 3;
  const laneWidth = 100 / lanes;
  const playerY = roadHeight * 0.76;
  const isCardMode = getStyleByItemType(unit.itemType) === "card";

  const storageKey = `${STORAGE_PREFIX}${unit.slug}`;

  const clearTimers = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (spawnRef.current) window.clearInterval(spawnRef.current);
    if (feedbackRef.current) window.clearTimeout(feedbackRef.current);
    rafRef.current = null;
    spawnRef.current = null;
    feedbackRef.current = null;
  }, []);

  const flash = useCallback((message: string) => {
    setFeedback(message);
    if (feedbackRef.current) window.clearTimeout(feedbackRef.current);
    feedbackRef.current = window.setTimeout(() => setFeedback(unit.instruction), 1200);
  }, [unit.instruction]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Stored;
      setStore({
        highScore: parsed.highScore ?? 0,
        lastScore: parsed.lastScore ?? 0,
        badges: parsed.badges ?? [],
      });
    } catch {
      setStore({ highScore: 0, lastScore: 0, badges: [] });
    }
  }, [storageKey]);

  const persist = useCallback((next: Stored) => {
    setStore(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }, [storageKey]);

  const spawnItem = useCallback(() => {
    setItems((prev) => {
      const isCorrect = Math.random() < 0.64;
      const value = isCorrect ? pick(unit.correctItems) : pick(unit.wrongItems);
      const laneIndex = Math.floor(Math.random() * lanes);
      return [...prev, { id: nextIdRef.current++, lane: laneIndex, y: isCardMode ? -80 : -50, value, isCorrect }];
    });
  }, [isCardMode, unit.correctItems, unit.wrongItems]);

  const evaluateBadges = useCallback((finalScore: number, finalMistakes: number, finalBestCombo: number): Badge[] => {
    const badges = new Set<Badge>(store.badges);
    if (finalMistakes === 0) badges.add("flawless");
    if (finalScore >= 100) badges.add("score100");
    if (finalBestCombo >= 10) badges.add("streak10");
    return Array.from(badges);
  }, [store.badges]);

  const finish = useCallback(() => {
    clearTimers();
    const badges = evaluateBadges(score, mistakes, bestCombo);
    persist({ highScore: Math.max(store.highScore, score), lastScore: score, badges });
    setScreen("done");
  }, [bestCombo, clearTimers, evaluateBadges, mistakes, persist, score, store.highScore]);

  const startLoop = useCallback(() => {
    clearTimers();
    lastTsRef.current = performance.now();

    const tick = (ts: number) => {
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setItems((prev) => {
        if (screen !== "playing") return prev;
        const moved = prev.map((i) => ({ ...i, y: i.y + unit.speed * dt }));
        const survivors: Item[] = [];

        for (const item of moved) {
          const hitZone = isCardMode ? 62 : 48;
          const hit = item.lane === lane && Math.abs(item.y - playerY) <= hitZone;

          if (hit) {
            if (item.isCorrect) {
              setCombo((prevCombo) => {
                const next = prevCombo + 1;
                setBestCombo((b) => Math.max(b, next));
                return next;
              });
              setCorrectCount((c) => c + 1);
              setScore((s) => s + unit.pointsCorrect + (combo >= 5 ? unit.pointsCorrect : combo >= 3 ? Math.floor(unit.pointsCorrect / 2) : 0));
              flash(unit.feedbackSuccess);
            } else {
              setMistakes((m) => m + 1);
              setCombo(0);
              setScore((s) => s + unit.pointsWrong);
              flash(unit.feedbackError);
            }
            continue;
          }

          if (item.y > roadHeight + 100) continue;
          survivors.push(item);
        }
        return survivors;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    spawnRef.current = window.setInterval(spawnItem, Math.max(620, 1100 - Math.floor(unit.speed)));
  }, [clearTimers, combo, flash, isCardMode, lane, playerY, roadHeight, screen, spawnItem, unit.feedbackError, unit.feedbackSuccess, unit.pointsCorrect, unit.pointsWrong, unit.speed]);

  useEffect(() => {
    if (screen === "playing") startLoop();
    else clearTimers();
    return clearTimers;
  }, [clearTimers, screen, startLoop]);

  useEffect(() => {
    if (mistakes >= 3 && screen === "playing") finish();
  }, [finish, mistakes, screen]);

  useEffect(() => {
    if (correctCount >= unit.targetCount && screen === "playing") finish();
  }, [correctCount, finish, screen, unit.targetCount]);

  useEffect(() => {
    if (!roadRef.current) return;
    const update = () => roadRef.current && setRoadHeight(roadRef.current.clientHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(roadRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (screen !== "playing") return;
      const k = event.key.toLowerCase();
      if (event.key === "ArrowLeft" || k === "a") setLane((l) => Math.max(0, l - 1));
      if (event.key === "ArrowRight" || k === "d") setLane((l) => Math.min(2, l + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [screen]);

  const badgeLabels: Record<Badge, string> = {
    flawless: "Hatasız Bitirdi",
    score100: "100 Puanı Geçti",
    streak10: "10 Doğru Üst Üste",
  };

  const start = () => {
    setScore(0);
    setMistakes(0);
    setCorrectCount(0);
    setCombo(0);
    setBestCombo(0);
    setItems([]);
    setFeedback(unit.instruction);
    setScreen("playing");
  };

  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border-4 border-sky-200 bg-gradient-to-b from-cyan-100 via-sky-100 to-indigo-100 p-4 shadow-xl md:p-6">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-black text-sky-800">{unit.iconEmoji} {unit.title}</h1>
        <p className="mt-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700">{unit.instruction}</p>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-6 md:text-base">
        <div className="rounded-xl bg-white/80 p-2 font-bold">Skor: {score}</div>
        <div className="rounded-xl bg-white/80 p-2 font-bold">Hata: {mistakes}/3</div>
        <div className="rounded-xl bg-white/80 p-2 font-bold">Doğru: {correctCount}/{unit.targetCount}</div>
        <div className="rounded-xl bg-white/80 p-2 font-bold">Combo: {combo}</div>
        <div className="rounded-xl bg-white/80 p-2 font-bold">High: {store.highScore}</div>
        <div className="rounded-xl bg-white/80 p-2 font-bold">Kategori: {unit.category}</div>
      </div>

      <div ref={roadRef} className="relative h-[56vh] min-h-[430px] overflow-hidden rounded-3xl border-4 border-white/70" style={{ backgroundImage: "url(/game-assets/sert-unsuz-yolu/bg.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-x-[12%] top-0 h-full" style={{ backgroundImage: "url(/game-assets/sert-unsuz-yolu/road.webp)", backgroundSize: "100% 100%" }} />

        {Array.from({ length: lanes }).map((_, i) => (
          <div key={i} className="absolute top-0 h-full border-r border-dashed border-white/30" style={{ left: `${i * laneWidth}%`, width: `${laneWidth}%` }} />
        ))}

        {items.map((item) => {
          const left = `${item.lane * laneWidth + laneWidth / 2}%`;
          if (isCardMode) {
            return (
              <div key={item.id} className={`absolute w-40 max-w-[46vw] -translate-x-1/2 rounded-2xl border-2 p-2 text-center text-xs font-bold shadow-lg md:text-sm ${item.isCorrect ? "border-emerald-300 bg-emerald-50" : "border-rose-300 bg-rose-50"}`} style={{ left, top: `${item.y}px` }}>
                {item.value}
              </div>
            );
          }

          return (
            <div key={item.id} className={`absolute flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-xs font-black text-white shadow-lg md:h-14 md:w-14 md:text-sm ${item.isCorrect ? "bg-emerald-500" : "bg-fuchsia-500"}`} style={{ left, top: `${item.y}px` }}>
              {item.value}
            </div>
          );
        })}

        <div className="absolute z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2" style={{ left: `${lane * laneWidth + laneWidth / 2}%`, top: "76%" }}>
          <img src="/game-assets/sert-unsuz-yolu/child-car.webp" alt="Araç" className="h-full w-full object-contain" draggable={false} />
        </div>

        <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-xl bg-white/85 px-3 py-2 text-xs font-bold text-slate-700 md:text-sm">{feedback}</div>

        {(screen === "ready" || screen === "done") && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-900/70 p-4">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 text-center">
              <h2 className="text-2xl font-black text-slate-900">{screen === "ready" ? "Oyuna Başla" : "Tur Tamamlandı"}</h2>
              <p className="mt-2 text-slate-700">{unit.description}</p>
              {unit.targetWord && <p className="mt-2 text-sm font-bold text-indigo-700">Hedef Mod: {unit.targetWord}</p>}

              {screen === "done" && (
                <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-left">
                  <p className="text-sm font-semibold">Son Skor: {store.lastScore}</p>
                  <p className="text-sm font-semibold">High Score: {store.highScore}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {store.badges.map((badge) => (
                      <span key={badge} className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">{badgeLabels[badge]}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button onClick={start} className="rounded-2xl bg-emerald-600 px-4 py-3 font-black text-white">{screen === "ready" ? "Başlat" : "Tekrar Oyna"}</button>
                <Link href="/turkce-oyunlari" className="rounded-2xl bg-slate-200 px-4 py-3 font-black text-slate-700">Türkçe Oyunları</Link>
              </div>
            </div>
          </div>
        )}

        {screen === "paused" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/50">
            <p className="rounded-full bg-white px-6 py-3 font-black text-slate-800">Duraklatıldı</p>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-4">
        <button onClick={start} className="rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-black text-white">Yeni Oyun</button>
        <button onClick={() => setScreen((s) => s === "playing" ? "paused" : s === "paused" ? "playing" : s)} disabled={screen !== "playing" && screen !== "paused"} className="rounded-2xl bg-amber-500 px-5 py-4 text-lg font-black text-white disabled:bg-amber-300">{screen === "paused" ? "Devam" : "Duraklat"}</button>
        <button onPointerDown={() => setLane((l) => Math.max(0, l - 1))} disabled={screen !== "playing"} className="rounded-2xl bg-sky-500 px-5 py-4 text-lg font-black text-white disabled:bg-sky-300">← Sol</button>
        <button onPointerDown={() => setLane((l) => Math.min(2, l + 1))} disabled={screen !== "playing"} className="rounded-2xl bg-indigo-500 px-5 py-4 text-lg font-black text-white disabled:bg-indigo-300">Sağ →</button>
      </div>
    </section>
  );
}
