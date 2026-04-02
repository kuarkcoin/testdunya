"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TURKCE_GAME_CATEGORIES, TURKCE_GAMES_CONFIG, TurkceDifficulty } from "../../components/turkce-oyunlari/turkce-games-config";

const grades = [5, 6, 7, 8] as const;

export default function TurkceOyunlariHubPage() {
  const [category, setCategory] = useState<string>("Tümü");
  const [grade, setGrade] = useState<number | "all">("all");
  const [difficulty, setDifficulty] = useState<TurkceDifficulty | "all">("all");

  const filtered = useMemo(() => {
    return TURKCE_GAMES_CONFIG.filter((game) => {
      const categoryOk = category === "Tümü" || game.category === category;
      const gradeOk = grade === "all" || game.gradeLevels.includes(grade);
      const difficultyOk = difficulty === "all" || game.difficulty === difficulty;
      return categoryOk && gradeOk && difficultyOk;
    });
  }, [category, difficulty, grade]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-indigo-100 px-3 py-6 md:px-6 md:py-10">
      <section className="mx-auto max-w-6xl rounded-3xl border-4 border-sky-200 bg-white/80 p-4 shadow-xl md:p-6">
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-black text-sky-800 md:text-4xl">Türkçe Oyunları Platformu</h1>
          <p className="mt-2 text-sm text-slate-700 md:text-base">Harfler, heceler, yazım kuralları, anlam bilgisi ve paragrafı oyunla öğren.</p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCategory("Tümü")} className={`rounded-full px-4 py-2 text-sm font-bold ${category === "Tümü" ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"}`}>Tümü</button>
            {TURKCE_GAME_CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${category === c ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"}`}>{c}</button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => setGrade("all")} className={`rounded-full px-4 py-2 text-sm font-bold ${grade === "all" ? "bg-sky-600 text-white" : "bg-sky-100 text-sky-700"}`}>Tüm Sınıflar</button>
            {grades.map((g) => (
              <button key={g} onClick={() => setGrade(g)} className={`rounded-full px-4 py-2 text-sm font-bold ${grade === g ? "bg-sky-600 text-white" : "bg-sky-100 text-sky-700"}`}>{g}. Sınıf Oyunları</button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {(["all", "easy", "medium", "hard"] as const).map((d) => (
              <button key={d} onClick={() => setDifficulty(d)} className={`rounded-full px-4 py-2 text-sm font-bold ${difficulty === d ? "bg-fuchsia-600 text-white" : "bg-fuchsia-100 text-fuchsia-700"}`}>
                {d === "all" ? "Tüm Zorluklar" : d.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((game) => (
            <article key={game.slug} className={`rounded-2xl border p-4 shadow-md ${game.isFeatured ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"}`}>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h2 className="text-lg font-black text-slate-800">{game.iconEmoji} {game.title}</h2>
                {game.isFeatured && <span className="rounded-full bg-amber-200 px-2 py-1 text-xs font-bold text-amber-800">Öne Çıkan</span>}
              </div>

              <p className="text-sm text-slate-600">{game.description}</p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-sky-100 px-2 py-1 text-sky-700">{game.category}</span>
                <span className="rounded-full bg-fuchsia-100 px-2 py-1 text-fuchsia-700">{game.difficulty}</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">{game.gradeLevels.join(", ")}. sınıf</span>
              </div>

              <div className="mt-4">
                <Link href={`/turkce-oyunlari/${game.slug}`} className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white">Oyuna Başla</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

// Entegrasyon notu: Bu sayfa config tabanlı tüm Türkçe oyun ünitelerini filtrelenebilir bir merkezde listeler.
