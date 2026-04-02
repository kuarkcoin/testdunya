"use client";

import Link from "next/link";
import { useMemo, useRef, useEffect } from "react";
import { useSertUnsuzGame } from "./useSertUnsuzGame";

const badgeToneMap: Record<string, string> = {
  flawless_finish: "bg-emerald-100 text-emerald-800",
  score_100: "bg-amber-100 text-amber-800",
  streak_10: "bg-violet-100 text-violet-800",
  master: "bg-sky-100 text-sky-800",
};

export default function SertUnsuzYoluGame() {
  const {
    cfg,
    screen,
    level,
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
    moveLane,
    startNewGame,
    continueLevel,
    pauseOrResume,
    playAgain,
    setScreen,
  } = useSertUnsuzGame();

  const roadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!roadRef.current) return;
    const update = () => roadRef.current && setRoadHeight(roadRef.current.clientHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(roadRef.current);
    return () => observer.disconnect();
  }, [setRoadHeight]);

  const playerLeftPercent = `${playerLane * laneWidthPercent + laneWidthPercent / 2}%`;
  const levelProgress = Math.min(100, (collectedInLevel / level.targetCorrect) * 100);

  const earnedBadges = useMemo(() => {
    const active = lastRunBadges.length ? lastRunBadges : progress.badges;
    return cfg.badges.filter((badge) => active.includes(badge.key));
  }, [cfg.badges, lastRunBadges, progress.badges]);

  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border-4 border-sky-200 bg-gradient-to-b from-cyan-100 via-sky-100 to-indigo-100 p-4 shadow-xl md:p-6">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-black text-sky-800 md:text-4xl">{cfg.title}</h1>
        <p className="mt-2 inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800 md:text-base">{cfg.taskText}</p>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-6 md:text-base">
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-sky-900">Seviye: {level.id}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-indigo-700">Puan: {score}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-rose-700">Hata: {mistakes}/{cfg.maxMistakes}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-emerald-700">Doğru: {collectedInLevel}/{level.targetCorrect}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-fuchsia-700">Combo: {comboStreak}</div>
        <div className="rounded-2xl bg-white/80 p-3 font-bold text-amber-700">High Score: {progress.highScore}</div>
      </div>

      <div className="mb-3 h-3 overflow-hidden rounded-full bg-white/70">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all" style={{ width: `${levelProgress}%` }} />
      </div>

      <div
        ref={roadRef}
        className="relative h-[56vh] min-h-[430px] max-h-[660px] overflow-hidden rounded-3xl border-4 border-white/70"
        style={{ backgroundImage: `url(${cfg.assets.background})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-x-[12%] top-0 h-full" style={{ backgroundImage: `url(${cfg.assets.road})`, backgroundSize: "100% 100%", opacity: 0.96 }} />

        {Array.from({ length: cfg.lanes }).map((_, index) => (
          <div key={index} className="absolute top-0 h-full border-r border-dashed border-white/30" style={{ left: `${laneWidthPercent * index}%`, width: `${laneWidthPercent}%` }} />
        ))}

        {items.map((item) => {
          const left = `${item.lane * laneWidthPercent + laneWidthPercent / 2}%`;
          if (item.isCorrect && item.asset) {
            return <img key={item.id} src={item.asset} alt={`Harf ${item.value}`} className="absolute h-12 w-12 -translate-x-1/2 rounded-full bg-white/80 p-1 shadow-lg md:h-14 md:w-14" style={{ left, top: `${item.y}px` }} draggable={false} />;
          }

          return (
            <div key={item.id} className="absolute flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-b from-fuchsia-400 to-pink-600 text-xl font-extrabold text-white shadow-lg md:h-14 md:w-14" style={{ left, top: `${item.y}px` }}>
              {item.value}
            </div>
          );
        })}

        <div className="absolute z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 md:h-20 md:w-20" style={{ left: playerLeftPercent, top: "76%" }}>
          <img src={cfg.assets.playerCar} alt="Çocuklu araba" className="h-full w-full object-contain" draggable={false} />
        </div>

        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1">
          <img src={cfg.assets.heart} alt="Can" className="h-6 w-6" />
          <span className="text-sm font-bold text-rose-700">{cfg.maxMistakes - mistakes} can</span>
        </div>

        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1">
          <img src={cfg.assets.star} alt="Yıldız" className="h-6 w-6" />
          <span className="text-sm font-bold text-amber-700">x{currentMultiplier} combo</span>
        </div>

        {feedback && (
          <div className={`absolute left-1/2 top-16 z-20 -translate-x-1/2 rounded-2xl px-4 py-2 text-sm font-black shadow-lg ${feedback.tone === "success" ? "bg-emerald-100 text-emerald-800" : feedback.tone === "error" ? "bg-rose-100 text-rose-800" : "bg-sky-100 text-sky-800"}`}>
            {feedback.message}
          </div>
        )}

        {screen === "start" && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/70 p-4">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 text-center">
              <h2 className="text-2xl font-black text-slate-900">Hazır mısın?</h2>
              <p className="mt-2 text-slate-600">Seviyeleri geç, combo yap ve rozetleri topla.</p>
              <div className="mt-4 rounded-2xl bg-sky-50 p-4 text-left">
                <h3 className="font-black text-sky-800">Nasıl Oynanır</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {cfg.howToPlay.map((rule) => <li key={rule}>{rule}</li>)}
                </ul>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button onClick={startNewGame} className="rounded-2xl bg-emerald-600 px-4 py-3 font-black text-white">Başlat</button>
                <Link href="/" className="rounded-2xl bg-slate-200 px-4 py-3 text-center font-black text-slate-700">Ana Sayfaya Dön</Link>
              </div>
            </div>
          </div>
        )}

        {screen === "level-cleared" && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/70 p-4 text-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-6">
              <h2 className="text-2xl font-black text-emerald-700">Seviye Tamamlandı 🎉</h2>
              <p className="mt-2 text-slate-700">Sıradaki seviyeye geçmeye hazır mısın?</p>
              <button onClick={continueLevel} className="mt-4 w-full rounded-2xl bg-indigo-600 px-4 py-3 font-black text-white">Sonraki Seviye</button>
            </div>
          </div>
        )}

        {screen === "game-over" && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/70 p-4 text-center">
            <div className="w-full max-w-xl rounded-3xl bg-white p-6">
              <h2 className="text-2xl font-black text-slate-900">{completedAllLevels ? "Sert Ünsüz Ustası Oldun!" : "Oyun Bitti"}</h2>
              <p className="mt-2 text-slate-700">Skor: <strong>{score}</strong> • Son skor kaydedildi: {progress.lastScore}</p>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-left">
                <h3 className="font-black text-slate-800">Kazanılan Rozetler</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {earnedBadges.length ? earnedBadges.map((badge) => (
                    <span key={badge.key} className={`rounded-full px-3 py-1 text-xs font-bold ${badgeToneMap[badge.key] || "bg-slate-100 text-slate-800"}`}>{badge.label}</span>
                  )) : <span className="text-sm text-slate-500">Henüz rozet yok, bir kez daha dene!</span>}
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <button onClick={playAgain} className="rounded-2xl bg-fuchsia-600 px-4 py-3 font-black text-white">Tekrar Oyna</button>
                <button onClick={() => setScreen("start")} className="rounded-2xl bg-sky-600 px-4 py-3 font-black text-white">Başlangıç Ekranı</button>
                <Link href="/" className="rounded-2xl bg-slate-200 px-4 py-3 text-center font-black text-slate-700">Ana Sayfa</Link>
              </div>
            </div>
          </div>
        )}

        {screen === "paused" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/50">
            <p className="rounded-full bg-white px-6 py-3 text-xl font-black text-slate-800">Duraklatıldı</p>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <button onClick={startNewGame} className="rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-black text-white">Yeni Oyun</button>
        <button onClick={pauseOrResume} disabled={screen !== "playing" && screen !== "paused"} className="rounded-2xl bg-amber-500 px-5 py-4 text-lg font-black text-white disabled:cursor-not-allowed disabled:bg-amber-300">{screen === "paused" ? "Devam Et" : "Duraklat"}</button>
        <Link href="/" className="rounded-2xl bg-indigo-600 px-5 py-4 text-center text-lg font-black text-white">Ana Sayfaya Dön</Link>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onPointerDown={() => moveLane(-1)} disabled={screen !== "playing"} className="rounded-2xl border-2 border-sky-300 bg-sky-500 px-4 py-4 text-xl font-black text-white active:scale-95 disabled:bg-sky-300">← Sol</button>
        <button onPointerDown={() => moveLane(1)} disabled={screen !== "playing"} className="rounded-2xl border-2 border-indigo-300 bg-indigo-500 px-4 py-4 text-xl font-black text-white active:scale-95 disabled:bg-indigo-300">Sağ →</button>
      </div>

      <div className="mt-4 rounded-2xl bg-white/80 p-3 text-sm font-semibold text-slate-700">
        Kayıtlar: En Yüksek Skor <strong>{progress.highScore}</strong> • Açık Seviye <strong>{progress.unlockedLevel}</strong> • Son Skor <strong>{progress.lastScore}</strong>
      </div>
    </section>
  );
}

// Entegrasyon notu: Oyun durumu ve kayıt yönetimi useSertUnsuzGame hook'u ile modüler olarak ayrılmıştır.
