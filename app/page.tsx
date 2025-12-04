'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// Sınav listesi
const EXAMS = [
  { id: 'yks', name: 'YKS', subtitle: 'TYT + AYT', colors: 'from-emerald-400 to-emerald-600' },
  { id: 'kpss', name: 'KPSS', subtitle: 'GY + GK', colors: 'from-amber-400 to-orange-500' },
  { id: 'lgs', name: 'LGS', subtitle: '8. Sınıf', colors: 'from-violet-500 to-fuchsia-600' },
  { id: 'ehliyet', name: 'Ehliyet', subtitle: 'E-Sınav', colors: 'from-cyan-400 to-teal-500' },
  { id: 'ales', name: 'ALES', subtitle: 'Sayısal', colors: 'from-pink-400 to-rose-600' },
  { id: 'tus', name: 'TUS', subtitle: 'Tıpta Uzmanlık', colors: 'from-sky-500 to-blue-700' },
  { id: 'dgs', name: 'DGS', subtitle: 'Dikey Geçiş', colors: 'from-indigo-400 to-purple-600' },
];

const TESTS = [1, 2, 3, 4, 5];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-10 pb-16">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Hangi sınav için test çözmek istiyorsun?
          </h1>
          <p className="mt-2 text-slate-500 text-sm md:text-base">
            Aşağıdaki sınav kartlarından seçimini yap, Test 1–5 denemelerine hemen başla.
          </p>
        </div>

        {/* Sınav Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {EXAMS.map((exam) => (
            <div
              key={exam.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col gap-4"
            >
              {/* Ana Renkli Sınav Başlığı Butonu */}
              <Link
                href={`/exam/${exam.id}`}
                className={`block w-full rounded-2xl bg-gradient-to-r ${exam.colors}
                  text-white text-center py-4 px-4
                  text-lg font-bold shadow-md hover:shadow-lg
                  transform hover:scale-[1.02] active:scale-95 transition`}
              >
                <div className="text-xs uppercase tracking-wide opacity-90">
                  {exam.subtitle}
                </div>
                <div className="text-2xl mt-1">{exam.name}</div>
              </Link>

              {/* Altındaki Test 1–5 Butonları */}
              <div className="grid grid-cols-3 gap-2 mt-1">
                {TESTS.map((n) => {
                  
                  // Varsayılan Link
                  let href = `/test/${exam.id}-test-${n}`;
                  let isActive = false;

                  // LGS İÇİN ÖZEL AYARLAR
                  if (exam.id === 'lgs') {
                    if (n === 1) {
                      href = '/test/lgs-full';   // 1. Test -> İlk hazırladığın sayfa
                      isActive = true;
                    } else if (n === 2) {
                      href = '/test/lgs-test-2'; // 2. Test -> Yeni hazırladığın sayfa
                      isActive = true;
                    }
                  }

                  return (
                    <Link
                      key={n}
                      href={href}
                      className={`
                        rounded-xl border text-[11px] font-semibold text-center py-2 px-2 transition
                        ${
                          isActive
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-800 hover:bg-emerald-200 shadow-sm' // Aktif (Yeşil)
                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 active:scale-95'   // Pasif (Gri)
                        }
                      `}
                    >
                      Test {n}
                      {isActive && <span className="ml-1 text-emerald-600">✓</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dipnot */}
        <div className="text-center mt-12 text-slate-400 text-xs">
           <p className="mb-2">Diğer testler çok yakında eklenecektir.</p>
           <p className="td-hero-footnote">
             YDS bu projede yok; YDS tarafını <strong>EnglishMeter</strong> üzerinde detaylı şekilde geliştirmeye devam edeceğiz.
           </p>
        </div>
      </main>
    </div>
  );
}
