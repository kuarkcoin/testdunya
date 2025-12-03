'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// ANA SINAV KARTLARI
const EXAMS = [
  {
    id: 'yks',
    title: 'YKS',
    subtitle: 'TYT + AYT',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 'tyt',
    title: 'TYT',
    subtitle: 'Temel Yeterlilik',
    gradient: 'from-sky-400 to-sky-600',
  },
  {
    id: 'lgs',
    title: 'LGS',
    subtitle: '8. Sınıf',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    id: 'kpss',
    title: 'KPSS',
    subtitle: 'GY + GK',
    gradient: 'from-orange-400 to-amber-600',
  },
  {
    id: 'ehliyet',
    title: 'Ehliyet',
    subtitle: 'E-Sınav',
    gradient: 'from-cyan-400 to-teal-600',
  },
  {
    id: 'ales',
    title: 'ALES',
    subtitle: 'Sayısal',
    gradient: 'from-pink-400 to-rose-600',
  },
];

const TEST_LIST = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-8 pb-20">

        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Tüm Sınavlar Bir Arada
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            YKS, TYT, LGS, KPSS, Ehliyet ve daha fazlası
          </p>
        </div>

        {/* Ana sınav kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {EXAMS.map((exam) => (
            <div
              key={exam.id}
              className="rounded-3xl bg-white shadow-xl border border-slate-200 p-6 hover:shadow-2xl transition-all"
            >
              {/* Büyük renkli sınav butonu */}
              <Link
                href={`/exam/${exam.id}`}
                className={`block rounded-2xl bg-gradient-to-r ${exam.gradient} 
                text-white text-center py-5 text-xl font-bold shadow-md active:scale-95 transition`}
              >
                {exam.title}
              </Link>

              {/* Test 1–5 */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {TEST_LIST.map((n) => (
                  <Link
                    key={n}
                    href={`/test/${exam.id}-test-${n}`}
                    className="rounded-xl bg-slate-100 border border-slate-200 
                    py-2 text-center text-xs font-semibold text-slate-700
                    hover:bg-slate-200 active:scale-95 transition"
                  >
                    Test {n}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Türkiye Geneli */}
        <Link
          href="/turkiye-geneli"
          className="block w-full rounded-3xl bg-gradient-to-r from-red-600 to-red-700 
          shadow-xl py-6 text-center text-xl text-white font-black 
          hover:shadow-2xl active:scale-95 transition"
        >
          🇹🇷 Türkiye Geneli Sıralama Sınavı
        </Link>

      </main>
    </div>
  );
}
