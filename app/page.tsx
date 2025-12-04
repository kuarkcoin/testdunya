'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// Ana sınav butonları
const EXAMS = [
  { id: 'yks', label: 'YKS', colors: 'from-emerald-400 to-emerald-600' },
  { id: 'tyt', label: 'TYT', colors: 'from-sky-400 to-sky-600' },
  { id: 'lgs', label: 'LGS', colors: 'from-violet-500 to-fuchsia-600' },
  { id: 'kpss', label: 'KPSS', colors: 'from-amber-400 to-orange-500' },
  { id: 'ehliyet', label: 'Ehliyet', colors: 'from-cyan-400 to-teal-500' },
  { id: 'ales', label: 'ALES', colors: 'from-pink-400 to-rose-600' },
];

const TESTS = [1, 2, 3, 4, 5];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center">
      {/* Üstte kendi Navbar'ın */}
      <Navbar />

      {/* Ortada telefon ekranı gibi kart */}
      <div className="mt-4 mb-6 w-full max-w-sm rounded-[32px] bg-slate-900 border border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
        {/* Status bar hissi */}
        <div className="h-6 flex items-center justify-between px-4 pt-2 text-[10px] text-slate-500">
          <span className="font-semibold">Ana Sayfa</span>
          <span>🔋 100%</span>
        </div>

        {/* İçerik */}
        <main className="flex-1 px-4 pb-4 pt-2 space-y-4 no-scrollbar overflow-y-auto">
          {/* Küçük başlık */}
          <section className="mb-2">
            <h1 className="text-lg font-bold text-slate-50">
              Hangi sınav için test çözeceksin?
            </h1>
            <p className="text-[11px] text-slate-400 mt-1">
              Bir sınav seç, altındaki testlerden istediğine dokun.
            </p>
          </section>

          {/* Sınav kartları */}
          <section className="space-y-3">
            {EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 p-3"
              >
                {/* Büyük gradient buton */}
                <Link
                  href={`/exam/${exam.id}`}
                  className={`block w-full rounded-2xl bg-gradient-to-r ${exam.colors}
                    py-3 px-4 text-center text-base font-semibold shadow-md active:scale-95 transition-transform`}
                >
                  {exam.label}
                </Link>

                {/* Altında Test 1–5 küçük butonlar */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {TESTS.map((n) => (
                    <Link
                      key={n}
                      href={`/test/${exam.id}-test-${n}`}
                      className="flex-1 min-w-[70px] rounded-full bg-slate-800 text-[11px] text-slate-200 text-center py-1.5 px-2 active:scale-95 transition-transform"
                    >
                      Test {n}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Türkiye geneli geniş buton */}
          <section className="pt-1">
            <Link
              href="/turkiye-geneli"
              className="block w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-700
                py-3 text-sm font-semibold text-center shadow-lg shadow-red-900 active:scale-95 transition-transform"
            >
              🇹🇷 Türkiye Geneli Sıralama
            </Link>
          </section>
        </main>

        {/* Alt tab bar */}
        <nav className="h-11 border-t border-slate-800 bg-slate-950/90 flex items-center justify-around text-[10px] text-slate-500">
          <button className="flex flex-col items-center gap-0.5 text-emerald-400">
            <span>🏠</span>
            <span className="font-semibold">Ana Sayfa</span>
          </button>
          <button className="flex flex-col items-center gap-0.5">
            <span>📚</span>
            <span>Testler</span>
          </button>
          <button className="flex flex-col items-center gap-0.5">
            <span>📊</span>
            <span>İlerleme</span>
          </button>
          <button className="flex flex-col items-center gap-0.5">
            <span>⚙️</span>
            <span>Ayarlar</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
