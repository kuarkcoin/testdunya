'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// TEST BUTONLARI
const TEST_BUTTONS = [
  { id: 1, label: 'Test 1', color: 'bg-gradient-to-br from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/40' },
  { id: 2, label: 'Test 2', color: 'bg-gradient-to-br from-purple-500 to-pink-500', shadow: 'shadow-purple-500/40' },
  { id: 3, label: 'Test 3', color: 'bg-gradient-to-br from-green-500 to-emerald-500', shadow: 'shadow-green-500/40' },
  { id: 4, label: 'Test 4', color: 'bg-gradient-to-br from-orange-500 to-red-500', shadow: 'shadow-orange-500/40' },
  { id: 5, label: 'Test 5', color: 'bg-gradient-to-br from-violet-500 to-indigo-500', shadow: 'shadow-violet-500/40' },
  { id: 6, label: 'Test 6', color: 'bg-gradient-to-br from-rose-500 to-pink-500', shadow: 'shadow-rose-500/40' },
  { id: 7, label: 'Test 7', color: 'bg-gradient-to-br from-amber-500 to-yellow-500', shadow: 'shadow-amber-500/40' },
  { id: 8, label: 'Test 8', color: 'bg-gradient-to-br from-lime-500 to-green-500', shadow: 'shadow-lime-500/40' },
  { id: 9, label: 'Test 9', color: 'bg-gradient-to-br from-sky-500 to-blue-500', shadow: 'shadow-sky-500/40' },
  { id: 10, label: 'Test 10', color: 'bg-gradient-to-br from-fuchsia-500 to-purple-500', shadow: 'shadow-fuchsia-500/40' },
];

// SINA VLAR
const EXAMS = [
  { label: 'TYT', color: 'bg-gradient-to-br from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/40' },
  { label: 'AYT', color: 'bg-gradient-to-br from-purple-500 to-indigo-600', shadow: 'shadow-purple-500/40' },
  { label: 'YDT', color: 'bg-gradient-to-br from-green-500 to-emerald-600', shadow: 'shadow-green-500/40' },
  { label: 'LGS', color: 'bg-gradient-to-br from-orange-500 to-amber-600', shadow: 'shadow-orange-500/40' },
  { label: 'KPSS', color: 'bg-gradient-to-br from-rose-500 to-pink-600', shadow: 'shadow-rose-500/40' },
  { label: 'DGS', color: 'bg-gradient-to-br from-violet-500 to-purple-600', shadow: 'shadow-violet-500/40' },
  { label: 'ALES', color: 'bg-gradient-to-br from-red-500 to-orange-600', shadow: 'shadow-red-500/40' },
  { label: 'YÖKDİL', color: 'bg-gradient-to-br from-indigo-500 to-blue-600', shadow: 'shadow-indigo-500/40' },
  { label: 'Ehliyet', color: 'bg-gradient-to-br from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/40' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 font-sans pb-10">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-8">
        
        {/* BAŞLIK - SADE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-2">
            TestDünya
          </h1>
          <p className="text-slate-600 font-medium">Hemen test çözmeye başla</p>
        </div>

        {/* TEST BUTONLARI - APPLE TARZI */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Testler</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TEST_BUTTONS.map((test) => (
              <Link
                key={test.id}
                href={`/test/${test.id}`}
                className={`group relative aspect-square rounded-2xl ${test.color} ${test.shadow} shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl border border-white/20`}
              >
                <div className="text-5xl font-black mb-2 group-hover:scale-110 transition-transform">
                  {test.id}
                </div>
                <div className="text-lg font-bold">{test.label}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* SINAV BUTONLARI - DAHA BÜYÜK */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Sınavlar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {EXAMS.map((exam) => (
              <Link
                key={exam.label}
                href={`/exam/${exam.label.toLowerCase()}`}
                className={`relative h-32 rounded-3xl ${exam.color} ${exam.shadow} shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-2xl border border-white/20`}
              >
                <div className="text-center">
                  <div className="text-3xl font-black mb-1">{exam.label}</div>
                  <div className="text-sm opacity-90">Test Çöz</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* HIZLI TEST BUTONU */}
        <Link 
          href="/hizli-test"
          className="block w-full max-w-md mx-auto bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center rounded-2xl py-5 shadow-2xl shadow-slate-900/30 transition-all hover:scale-[1.02] active:scale-95"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <div className="text-xl font-black">Hızlı Test</div>
              <div className="text-sm opacity-80">Rastgele 20 soru</div>
            </div>
          </div>
        </Link>

      </main>
    </div>
  );
}
