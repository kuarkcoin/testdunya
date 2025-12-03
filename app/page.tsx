'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

const EXAMS = [
  {
    id: 'yks',
    name: 'YKS',
    colors: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 'tyt',
    name: 'TYT',
    colors: 'from-sky-400 to-sky-600',
  },
  {
    id: 'lgs',
    name: 'LGS',
    colors: 'from-violet-400 to-fuchsia-600',
  },
  {
    id: 'kpss',
    name: 'KPSS',
    colors: 'from-amber-400 to-orange-600',
  },
  {
    id: 'ehliyet',
    name: 'Ehliyet',
    colors: 'from-cyan-400 to-teal-600',
  },
  {
    id: 'ales',
    name: 'ALES',
    colors: 'from-pink-400 to-rose-600',
  },
];

const TEST_NUMBERS = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="flex justify-center px-4 pb-10">
        {/* Telefon gibi orta kart */}
        <div className="mt-6 w-full max-w-sm rounded-[32px] bg-slate-900 border border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.8)] px-4 pt-4 pb-5">
          {/* Küçük başlık (çok sade) */}
          <div className="mb-4 flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-semibold">TestDünya</span>
            <span>📱</span>
          </div>

          {/* Sadece sınav butonları */}
          <div className="space-y-4">
            {EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="rounded-3xl bg-slate-900/70 border border-slate-800 p-3"
              >
                {/* Büyük renkli sınav butonu */}
                <Link
                  href={`/exam/${exam.id}`}
                  className={`
                    block w-full rounded-2xl bg-gradient-to-r ${exam.colors}
                    py-4 px-4 text-center text-lg font-semibold
                    shadow-lg shadow-black/40
                    active:scale-95 transition-transform
                  `}
                >
                  {exam.name}
                </Link>

                {/* Altında Test 1–5 küçük butonlar */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {TEST_NUMBERS.map((num) => (
                    <Link
                      key={num}
                      href={`/test/${exam.id}-test-${num}`}
                      className="flex-1 min-w-[68px] text-center text-[11px] font-medium
                                 rounded-full bg-slate-800 text-slate-200
                                 py-1.5 px-2 active:scale-95 transition-transform"
                    >
                      Test {num}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* En altta tek özel buton */}
          <Link
            href="/turkiye-geneli"
            className="mt-5 block w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-700
                       py-3 text-sm font-semibold text-center shadow-lg shadow-red-900
                       active:scale-95 transition-transform"
          >
            🇹🇷 Türkiye Geneli Sınav
          </Link>
        </div>
      </main>
    </div>
  );
}
