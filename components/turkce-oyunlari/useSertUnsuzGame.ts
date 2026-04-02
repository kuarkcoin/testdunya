"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BadgeKey, SERT_UNSUZ_YOLU_CONFIG } from "./sert-unsuz-config";

type ScreenState = "start" | "playing" | "paused" | "level-cleared" | "game-over";

type FallingItem = {
  id: number;
  lane: number;
  y: number;
  value: string;
  isCorrect: boolean;
  asset?: string;
};

type ProgressStore = {
  highScore: number;
  unlockedLevel: number;
  lastScore: number;
  badges: BadgeKey[];
};

type FeedbackTone = "success" | "error" | "info";

type Feedback = {
  message: string;
  tone: FeedbackTone;
};

const cfg = SERT_UNSUZ_YOLU_CONFIG;
const defaultProgress: ProgressStore = { highScore: 0, unlockedLevel: 1, lastScore: 0, badges: [] };

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function safeReadStorage(): ProgressStore {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(cfg.storageKey);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressStore>;
    return {
      highScore: Number(parsed.highScore ?? 0),
      unlockedLevel: Math.max(1, Math.min(cfg.levels.length, Number(parsed.unlockedLevel ?? 1))),
      lastScore: Number(parsed.lastScore ?? 0),
      badges: Array.isArray(parsed.badges) ? (parsed.badges.filter(Boolean) as BadgeKey[]) : [],
    };
  } catch {
    return defaultProgress;
  }
}

export function useSertUnsuzGame() {
  const [screen, setScreen] = useState<ScreenState>("start");
  const [levelIndex, setLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [collectedInLevel, setCollectedInLevel] = useState(0);
  const [comboStreak, setComboStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [playerLane, setPlayerLane] = useState(1);
  const [items, setItems] = useState<FallingItem[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [progress, setProgress] = useState<ProgressStore>(defaultProgress);
  const [lastRunBadges, setLastRunBadges] = useState<BadgeKey[]>([]);
  const [completedAllLevels, setCompletedAllLevels] = useState(false);
  const [roadHeight, setRoadHeight] = useState(460);

  const rafRef = useRef<number | null>(null);
  const spawnRef = useRef<number | null>(null);
  const feedbackTimeoutRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);
  const itemIdRef = useRef(0);

  const level = cfg.levels[levelIndex];
  const currentMultiplier = comboStreak >= cfg.combo.superComboThreshold ? cfg.combo.superComboMultiplier : comboStreak >= cfg.combo.combo2Threshold ? cfg.combo.combo2Multiplier : 1;

  const clearTimers = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (spawnRef.current) window.clearInterval(spawnRef.current);
    if (feedbackTimeoutRef.current) window.clearTimeout(feedbackTimeoutRef.current);
    rafRef.current = null;
    spawnRef.current = null;
    feedbackTimeoutRef.current = null;
  }, []);

  const showFeedback = useCallback((message: string, tone: FeedbackTone) => {
    setFeedback({ message, tone });
    if (feedbackTimeoutRef.current) window.clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = window.setTimeout(() => setFeedback(null), cfg.feedbackDurationMs);
  }, []);

  const persistProgress = useCallback((next: ProgressStore) => {
    setProgress(next);
    if (typeof window !== "undefined") localStorage.setItem(cfg.storageKey, JSON.stringify(next));
  }, []);

  const evaluateBadges = useCallback(
    (params: { finalScore: number; finalMistakes: number; runBestStreak: number; mastered: boolean }): BadgeKey[] => {
      const badges = new Set(progress.badges);
      if (params.finalMistakes === 0) badges.add("flawless_finish");
      if (params.finalScore > 100) badges.add("score_100");
      if (params.runBestStreak >= 10) badges.add("streak_10");
      if (params.mastered) badges.add("master");
      return Array.from(badges);
    },
    [progress.badges]
  );

  const endRun = useCallback(
    (mastered: boolean) => {
      const badgeList = evaluateBadges({ finalScore: score, finalMistakes: mistakes, runBestStreak: bestStreak, mastered });
      setLastRunBadges(badgeList);
      const unlockedLevel = Math.max(progress.unlockedLevel, Math.min(cfg.levels.length, levelIndex + 1 + (mastered ? 1 : 0)));
      persistProgress({
        highScore: Math.max(progress.highScore, score),
        unlockedLevel,
        lastScore: score,
        badges: badgeList,
      });
      setCompletedAllLevels(mastered);
      setScreen("game-over");
    },
    [bestStreak, evaluateBadges, levelIndex, mistakes, persistProgress, progress.highScore, progress.unlockedLevel, score]
  );

  const resetRunState = useCallback((startLevel = 0) => {
    clearTimers();
    itemIdRef.current = 0;
    setLevelIndex(startLevel);
    setScore(0);
    setMistakes(0);
    setCollectedInLevel(0);
    setComboStreak(0);
    setBestStreak(0);
    setPlayerLane(1);
    setItems([]);
    setFeedback(null);
    setLastRunBadges([]);
    setCompletedAllLevels(false);
  }, [clearTimers]);

  const spawnItem = useCallback(() => {
    setItems((prev) => {
      const lane = Math.floor(Math.random() * cfg.lanes);
      const isCorrect = Math.random() < level.correctLetterChance;
      const item: FallingItem = isCorrect
        ? (() => {
            const letter = pickRandom(cfg.correctLetters);
            return { id: itemIdRef.current++, lane, y: -56, value: letter.char, isCorrect: true, asset: letter.asset };
          })()
        : { id: itemIdRef.current++, lane, y: -56, value: pickRandom(cfg.wrongLetters), isCorrect: false };
      return [...prev, item];
    });
  }, [level.correctLetterChance]);

  const runLoop = useCallback(() => {
    clearTimers();
    lastTsRef.current = performance.now();

    const tick = (ts: number) => {
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setItems((prevItems) => {
        if (screen !== "playing") return prevItems;
        const playerY = roadHeight * 0.76;
        const moved = prevItems.map((item) => ({ ...item, y: item.y + level.speed * dt }));
        const survivors: FallingItem[] = [];

        for (const item of moved) {
          const hit = item.lane === playerLane && Math.abs(item.y - playerY) <= cfg.collisionWindowPx;
          if (hit) {
            if (item.isCorrect) {
              setComboStreak((prev) => {
                const next = prev + 1;
                setBestStreak((best) => Math.max(best, next));
                return next;
              });

              setCollectedInLevel((prev) => prev + 1);
              setScore((prev) => {
                const liveCombo = comboStreak + 1;
                const multiplier = liveCombo >= cfg.combo.superComboThreshold ? cfg.combo.superComboMultiplier : liveCombo >= cfg.combo.combo2Threshold ? cfg.combo.combo2Multiplier : 1;
                const bonus = cfg.pointsPerCorrect * (multiplier - 1);
                return prev + cfg.pointsPerCorrect + bonus;
              });
              showFeedback(`Aferin! '${item.value}' sert ünsüzdür.`, "success");
            } else {
              setMistakes((prev) => prev + 1);
              setComboStreak(0);
              setScore((prev) => prev + cfg.pointsPerWrong);
              showFeedback("Bu harf sert ünsüz değil.", "error");
            }
            continue;
          }

          if (item.y > roadHeight + cfg.fallDespawnOffset) continue;
          survivors.push(item);
        }

        return survivors;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    spawnRef.current = window.setInterval(spawnItem, level.spawnIntervalMs);
  }, [clearTimers, comboStreak, level.spawnIntervalMs, level.speed, playerLane, roadHeight, screen, showFeedback, spawnItem]);

  useEffect(() => {
    setProgress(safeReadStorage());
  }, []);

  useEffect(() => {
    if (screen === "playing") runLoop();
    else clearTimers();
    return clearTimers;
  }, [clearTimers, runLoop, screen]);

  useEffect(() => {
    if (mistakes >= cfg.maxMistakes && screen === "playing") {
      endRun(false);
    }
  }, [endRun, mistakes, screen]);

  useEffect(() => {
    if (screen !== "playing") return;
    if (collectedInLevel < level.targetCorrect) return;

    clearTimers();
    if (levelIndex < cfg.levels.length - 1) {
      const unlockedLevel = Math.max(progress.unlockedLevel, levelIndex + 2);
      persistProgress({ ...progress, unlockedLevel, highScore: Math.max(progress.highScore, score), lastScore: score });
      setScreen("level-cleared");
      setItems([]);
      setCollectedInLevel(0);
      setComboStreak(0);
      showFeedback(`${level.name} tamamlandı!`, "info");
    } else {
      endRun(true);
    }
  }, [clearTimers, collectedInLevel, endRun, level.name, level.targetCorrect, levelIndex, persistProgress, progress, score, screen, showFeedback]);

  useEffect(() => {
    return clearTimers;
  }, [clearTimers]);

  const moveLane = useCallback((dir: -1 | 1) => {
    setPlayerLane((prev) => Math.max(0, Math.min(cfg.lanes - 1, prev + dir)));
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (screen !== "playing") return;
      const key = event.key.toLowerCase();
      if (event.key === "ArrowLeft" || key === "a") moveLane(-1);
      if (event.key === "ArrowRight" || key === "d") moveLane(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [moveLane, screen]);

  const startNewGame = useCallback(() => {
    resetRunState(0);
    setScreen("playing");
  }, [resetRunState]);

  const continueLevel = useCallback(() => {
    setLevelIndex((prev) => Math.min(cfg.levels.length - 1, prev + 1));
    setItems([]);
    setCollectedInLevel(0);
    setComboStreak(0);
    setScreen("playing");
  }, []);

  const pauseOrResume = useCallback(() => {
    setScreen((prev) => (prev === "playing" ? "paused" : prev === "paused" ? "playing" : prev));
  }, []);

  const playAgain = useCallback(() => {
    startNewGame();
  }, [startNewGame]);

  const laneWidthPercent = useMemo(() => 100 / cfg.lanes, []);

  return {
    cfg,
    screen,
    level,
    levelIndex,
    score,
    mistakes,
    comboStreak,
    currentMultiplier,
    collectedInLevel,
    playerLane,
    items,
    feedback,
    progress,
    completedAllLevels,
    lastRunBadges,
    laneWidthPercent,
    setRoadHeight,
    setItems,
    moveLane,
    startNewGame,
    continueLevel,
    pauseOrResume,
    playAgain,
    setScreen,
  };
}
