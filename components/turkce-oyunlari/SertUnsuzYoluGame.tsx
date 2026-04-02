"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SERT_UNSUZ_YOLU_CONFIG } from "./sert-unsuz-config";

type FallingItem = {
  id: number;
  lane: number;
  y: number;
  value: string;
  isCorrect: boolean;
  asset?: string;
};

type GameStatus = "idle" | "running" | "paused" | "game-over" | "completed";

type GameState = {
  score: number;
  mistakes: number;
  collectedCorrect: number;
  playerLane: number;
  speed: number;
  status: GameStatus;
  items: FallingItem[];
};

const cfg = SERT_UNSUZ_YOLU_CONFIG;
const PLAYER_Y_PERCENT = 76;
const COLLISION_WINDOW_PX = 48;

const initialState = (): GameState => ({
  score: 0,
  mistakes: 0,
  collectedCorrect: 0,
  playerLane: 1,
  speed: cfg.initialSpeed,
  status: "idle",
  items: [],
});

function randomFrom<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export default function SertUnsuzYoluGame() {
  const [game, setGame] = useState<GameState>(initialState);
  const [announcement, setAnnouncement] = useState("Hazır mısın? Başlat ile oyuna gir!");

  const rafRef = useRef<number | null>(null);
  const spawnRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);
  const itemIdRef = useRef(0);

  const roadRef = useRef<HTMLDivElement | null>(null);
  const [roadHeight, setRoadHeight] = useState(460);

  const laneWidthPercent = useMemo(() => 100 / cfg.lanes, []);

  const cleanupTimers = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (spawnRef.current) {
      window.clearInterval(spawnRef.current);
      spawnRef.current = null;
    }
  }, []);

  const spawnItem = useCallback(() => {
    setGame((prev) => {
      if (prev.status !== "running") return prev;
      const lane = Math.floor(Math.random() * cfg.lanes);
      const createCorrect = Math.random() < cfg.correctLetterChance;

      const nextItem: FallingItem = createCorrect
        ? (() => {
            const letter = randomFrom(cfg.correctLetters);
            return {
              id: itemIdRef.current++,
              lane,
              y: -50,
              value: letter.char,
              isCorrect: true,
              asset: letter.asset,
            };
          })()
        : {
            id: itemIdRef.current++,
            lane,
            y: -50,
            value: randomFrom(cfg.wrongLetters),
            isCorrect: false,
          };

      return { ...prev, items: [...prev.items, nextItem] };
    });
  }, []);

  const startGameLoop = useCallback(() => {
    cleanupTimers();
    lastTsRef.current = performance.now();

    const tick = (ts: number) => {
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setGame((prev) => {
        if (prev.status !== "running") return prev;

        const playerY = (roadHeight * PLAYER_Y_PERCENT) / 100;
        const moved = prev.items.map((item) => ({ ...item, y: item.y + prev.speed * dt }));

        let score = prev.score;
        let mistakes = prev.mistakes;
        let collectedCorrect = prev.collectedCorrect;

        const survivors: FallingItem[] = [];

        for (const item of moved) {
          const collidesWithPlayer =
            item.lane === prev.playerLane && Math.abs(item.y - playerY) <= COLLISION_WINDOW_PX;

          if (collidesWithPlayer) {
            if (item.isCorrect) {
              score += cfg.pointsPerCorrect;
              collectedCorrect += 1;
              setAnnouncement(`Harika! ${item.value.toUpperCase()} toplandı (+${cfg.pointsPerCorrect})`);
            } else {
              score += cfg.pointsPerWrong;
              mistakes += 1;
              setAnnouncement(`Oops! "${item.value}" sert ünsüz değil (${cfg.pointsPerWrong})`);
            }
            continue;
          }

          if (item.y > roadHeight + 70) {
            survivors.push(item);
            continue;
          }

          survivors.push(item);
        }

        const speedBoost =
          Math.floor(collectedCorrect / cfg.speedIncreaseEveryCorrect) * cfg.speedIncreaseAmount;
        const nextSpeed = cfg.initialSpeed + speedBoost;

        if (mistakes >= cfg.maxMistakes) {
          return {
            ...prev,
            score,
            mistakes,
            collectedCorrect,
            speed: nextSpeed,
            items: survivors,
            status: "game-over",
          };
        }

        if (collectedCorrect >= cfg.targetCorrect) {
          return {
            ...prev,
            score,
            mistakes,
            collectedCorrect,
            speed: nextSpeed,
            items: survivors,
            status: "completed",
          };
        }

        return {
          ...prev,
          score,
          mistakes,
          collectedCorrect,
          speed: nextSpeed,
          items: survivors,
        };
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    spawnRef.current = window.setInterval(spawnItem, cfg.spawnIntervalMs);
  }, [cleanupTimers, roadHeight, spawnItem]);

  const startGame = useCallback(() => {
    setGame((prev) => ({
      ...prev,
      status: "running",
      items: prev.items.length ? prev.items : [],
    }));
    setAnnouncement("Topla bakalım! Sadece sert ünsüzleri yakala.");
  }, []);

  const restartGame = useCallback(() => {
    cleanupTimers();
    itemIdRef.current = 0;
    setGame(initialState());
    setAnnouncement("Oyun sıfırlandı. Başlat ile yeniden başla!");
  }, [cleanupTimers]);

  const pauseGame = useCallback(() => {
    setGame((prev) => {
      if (prev.status !== "running") return prev;
      return { ...prev, status: "paused" };
    });
    setAnnouncement("Oyun duraklatıldı.");
  }, []);

  const moveLane = useCallback((direction: -1 | 1) => {
    setGame((prev) => {
      if (prev.status !== "running") return prev;
      const nextLane = Math.max(0, Math.min(cfg.lanes - 1, prev.playerLane + direction));
      return { ...prev, playerLane: nextLane };
    });
  }, []);

  useEffect(() => {
    if (game.status === "running") {
      startGameLoop();
    } else {
      cleanupTimers();
    }
    return cleanupTimers;
  }, [cleanupTimers, game.status, startGameLoop]);

  useEffect(() => {
    if (!roadRef.current) return;

    const updateHeight = () => {
      if (!roadRef.current) return;
      setRoadHeight(roadRef.current.clientHeight);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(roadRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        moveLane(-1);
      }
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        moveLane(1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [moveLane]);

  const playerLeftPercent = `${game.playerLane * laneWidthPercent + laneWidthPercent / 2}%`;

  return (
    <section className="mx-auto w-full max-w-3xl rounded-3xl border-4 border-sky-200 bg-gradient-to-b from-cyan-100 via-sky-100 to-indigo-100 p-4 shadow-xl md:p-6">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-black text-sky-800 md:text-4xl">{cfg.title}</h1>
        <p className="mt-2 inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800 md:text-base">
          {cfg.taskText}
        </p>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-4 md:gap-3 md:text-base">
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-sky-900">Puan: {game.score}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-rose-700">Hata: {game.mistakes}/{cfg.maxMistakes}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-emerald-700">Doğru: {game.collectedCorrect}/{cfg.targetCorrect}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-violet-700">Hız: {Math.round(game.speed)}</div>
      </div>

      <div
        ref={roadRef}
        className="relative h-[56vh] min-h-[420px] max-h-[640px] overflow-hidden rounded-3xl border-4 border-white/70"
        style={{
          backgroundImage: `url(${cfg.assets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-x-[12%] top-0 h-full"
          style={{
            backgroundImage: `url(${cfg.assets.road})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            opacity: 0.95,
          }}
        />

        {Array.from({ length: cfg.lanes }).map((_, laneIndex) => (
          <div
            key={`lane-${laneIndex}`}
            className="absolute top-0 h-full border-r border-dashed border-white/25"
            style={{
              left: `${laneWidthPercent * laneIndex}%`,
              width: `${laneWidthPercent}%`,
            }}
          />
        ))}

        {game.items.map((item) => {
          const left = `${item.lane * laneWidthPercent + laneWidthPercent / 2}%`;
          const baseClasses =
            "absolute flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-xl font-extrabold shadow-lg md:h-14 md:w-14";

          if (item.isCorrect && item.asset) {
            return (
              <img
                key={item.id}
                src={item.asset}
                alt={`Harf ${item.value}`}
                className="absolute h-12 w-12 -translate-x-1/2 rounded-full bg-white/80 p-1 shadow-lg md:h-14 md:w-14"
                style={{ left, top: `${item.y}px` }}
                draggable={false}
              />
            );
          }

          return (
            <div
              key={item.id}
              className={`${baseClasses} bg-gradient-to-b from-fuchsia-400 to-pink-600 text-white`}
              style={{ left, top: `${item.y}px` }}
            >
              {item.value}
            </div>
          );
        })}

        <div
          className="absolute z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 md:h-20 md:w-20"
          style={{ left: playerLeftPercent, top: `${PLAYER_Y_PERCENT}%` }}
        >
          <img src={cfg.assets.playerCar} alt="Çocuklu araba" className="h-full w-full object-contain" draggable={false} />
        </div>

        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1">
          <img src={cfg.assets.heart} alt="Can" className="h-6 w-6" />
          <span className="text-sm font-bold text-rose-700">{cfg.maxMistakes - game.mistakes} can</span>
        </div>
        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1">
          <img src={cfg.assets.star} alt="Yıldız" className="h-6 w-6" />
          <span className="text-sm font-bold text-amber-700">{game.score} yıldız puanı</span>
        </div>

        {(game.status === "game-over" || game.status === "completed") && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/70 p-4 text-center">
            <div className="w-full max-w-sm rounded-3xl bg-white p-6">
              <h2 className="text-2xl font-black text-slate-900">
                {game.status === "completed" ? "Bölüm Tamamlandı! 🎉" : "Oyun Bitti!"}
              </h2>
              <p className="mt-2 text-slate-700">
                {game.status === "completed"
                  ? `Mükemmel! ${cfg.targetCorrect} doğru harfe ulaştın.`
                  : "3 hata yaptın, ama tekrar deneyebilirsin!"}
              </p>
              <p className="mt-3 text-lg font-bold text-indigo-700">Toplam Puan: {game.score}</p>
              <button
                onClick={restartGame}
                className="mt-4 w-full rounded-2xl bg-indigo-600 px-4 py-3 text-base font-bold text-white hover:bg-indigo-700"
              >
                Yeniden Başlat
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 rounded-2xl bg-white/80 p-3 text-center text-sm font-semibold text-slate-700 md:text-base">
        {announcement}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <button
          onClick={startGame}
          disabled={game.status === "running"}
          className="rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-black text-white disabled:cursor-not-allowed disabled:bg-emerald-300"
        >
          Başlat
        </button>
        <button
          onClick={pauseGame}
          disabled={game.status !== "running"}
          className="rounded-2xl bg-amber-500 px-5 py-4 text-lg font-black text-white disabled:cursor-not-allowed disabled:bg-amber-300"
        >
          Duraklat
        </button>
        <button
          onClick={restartGame}
          className="rounded-2xl bg-fuchsia-600 px-5 py-4 text-lg font-black text-white hover:bg-fuchsia-700"
        >
          Yeniden Başlat
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onPointerDown={() => moveLane(-1)}
          className="rounded-2xl border-2 border-sky-300 bg-sky-500 px-4 py-4 text-xl font-black text-white active:scale-95"
        >
          ← Sol
        </button>
        <button
          onPointerDown={() => moveLane(1)}
          className="rounded-2xl border-2 border-indigo-300 bg-indigo-500 px-4 py-4 text-xl font-black text-white active:scale-95"
        >
          Sağ →
        </button>
      </div>
    </section>
  );
}

// Entegrasyon notu: Bu component, App Router içinde doğrudan bir page.tsx tarafından render edilerek çalışır.
