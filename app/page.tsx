'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// Üstteki üç büyük buton (Quick / Grammar / Vocab tarzı)
const TOP_BUTTONS = [
  {
    id: 'yks-fast',
    title: 'YKS Hızlı Seviye Testi',
    subtitle: 'TYT + AYT karışık 40 soru',
    color: 'from-blue-500 to-blue-600',
    href: '/test/yks-fast',
  },
  {
    id: 'tyt-full',
    title: 'TYT Genel Deneme (120Q)',
    subtitle: 'Türkçe, Matematik, Fen, Sosyal',
    color: 'from-purple-500 to-fuchsia-500',
    href: '/test/tyt-full',
  },
  {
    id: 'ayt-pack',
    title: 'AYT Paket (Deneme Seti)',
    subtitle: 'Sayısal · Eşit Ağırlık · Sözel',
    color: 'from-orange-500 to-amber-500',
    href: '/test/ayt-pack',
  },
];

// YKS TEST PACK (ekran görüntüsündeki TR YDS EXAM PACK gibi)
const YKS_TESTS = [
  { id: 1, label: 'Test 1', href: '/test/yks-1', disabled: false },
  { id: 2, label: 'Test 2', href: '/test/yks-2', disabled: false },
  { id: 3, label: 'Test 3', href: '/test/yks-3', disabled: false },
  { id: 4, label: 'Test 4', href: '/test/yks-4', disabled: false },
  { id: 5, label: 'Test 5', href: '/test/yks-5', disabled: false },
  { id: 6, label: 'Test 6', href: '/test/yks-6', disabled: false },
  { id: 7, label: 'Test 7', href: '#', disabled: true },
  { id: 8, label: 'Test 8', href: '#', disabled: true },
];

// Alttaki renkli bloklar (YDS Grammar / Reading / Phrasal vb. stilinde)
const SECONDARY_BUTTONS = [
  {
    id: 'lgs',
    title: 'LGS Genel Deneme (60Q)',
    color: 'bg-indigo-600 hover:bg-indigo-700',
    href: '/test/lgs-genel',
  },
  {
    id: 'kpss',
    title: 'KPSS Genel Yetenek (60Q)',
    color: 'bg-emerald-600 hover:bg-emerald-700',
    href: '/test/kpss-genel',
  },
  {
    id: 'ehliyet',
    title: 'Ehliyet E-Sınav Soruları (50Q)',
    color: 'bg-teal-600 hover:bg-teal-700',
    href: '/test/ehliyet-2024',
  },
  {
    id: 'ales',
    title: 'ALES Sayısal Deneme (50Q)',
    color: 'bg-sky-600 hover:bg-sky-700',
    href: '/test/ales-sayisal',
  },
  {
    id: 'dgs',
    title: 'DGS Sözel+Sayısal Mantık (50Q)',
    color: 'bg-cyan-600 hover:bg-cyan-700',
    href: '/test/dgs-genel',
  },
];

const RACE_BUTTON = {
  title: '🇹🇷 Türkiye Geneli Sıralama Modu',
  href: '/turkiye-geneli',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-20">
          {/* Küçük hero başlık */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Ücretsiz YKS, LGS, KPSS ve daha fazlası.
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              TestDünya ile TYT, AYT, LGS, KPSS, Ehliyet, ALES, DGS ve YÖKDİL için
              gerçek sınav formatına yakın, renkli ve anlaşılır testler çöz.
            </p>
          </header>

          {/* Üstteki 3 büyük buton (Quick / Mega / Vocab görünümü) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {TOP_BUTTONS.map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className={`rounded-3xl px-6 py-6 md:py-8 text-white font-semibold shadow-xl
                bg-gradient-to-r ${btn.color} flex flex-col justify-center items-start
                transform transition-transform hover:scale-[1.02] active:scale-95`}
              >
                <div className="text-sm uppercase tracking-wide opacity-90 mb-1">
                  {btn.subtitle}
                </div>
                <div className="text-xl md:text-2xl font-extrabold leading-tight">
                  {btn.title}
                </div>
              </Link>
            ))}
          </div>

          {/* TR YKS TEST PACK – EnglishMeter'daki TR YDS EXAM PACK gibi */}
          <section className="bg-pink-50 border border-pink-200 rounded-3xl px-4 md:px-8 py-6 md:py-8 mb-10 shadow-md">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-pink-500">
                  TR YKS TEST PACK
                </div>
                <h2 className="text-lg md:text-xl font-bold text-pink-700">
                  TYT + AYT karışık deneme seti
                </h2>
              </div>
              <span className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-600 border border-pink-300">
                Gerçek Sınav Modu (80 Soru)
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {YKS_TESTS.map((test) =>
                test.disabled ? (
                  <div
                    key={test.id}
                    className="flex flex-col items-center justify-center rounded-2xl border border-pink-100 bg-pink-50 text-pink-300 text-sm font-semibold py-5 cursor-not-allowed select-none"
                  >
                    <span className="mb-1">Test {test.id}</span>
                    <span className="text-xs">Yakında</span>
                  </div>
                ) : (
                  <Link
                    key={test.id}
                    href={test.href}
                    className="flex flex-col items-center justify-center rounded-2xl border border-pink-200 bg-pink-500 text-white text-sm font-semibold py-5 shadow-md hover:bg-pink-600 transform hover:scale-[1.02] active:scale-95 transition"
                  >
                    <span className="mb-1">Test {test.id}</span>
                    <span className="text-xs opacity-90">Başla</span>
                  </Link>
                )
              )}
            </div>
          </section>

          {/* Alttaki renkli bloklar (YDS Grammar / Reading / Phrasal tarzı) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {SECONDARY_BUTTONS.map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className={`${btn.color} rounded-3xl px-6 py-5 text-white font-semibold shadow-lg flex items-center justify-center text-center text-sm md:text-base transform hover:scale-[1.02] active:scale-95 transition`}
              >
                {btn.title}
              </Link>
            ))}
          </div>

          {/* En alttaki kırmızı geniş buton (Global Race Mode tarzı) */}
          <Link
            href={RACE_BUTTON.href}
            className="block w-full rounded-3xl bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-bold text-center py-5 shadow-xl transform hover:scale-[1.01] active:scale-95 transition"
          >
            {RACE_BUTTON.title}
          </Link>
        </section>
      </main>

      <footer className="py-6 text-center text-slate-400 text-xs border-t border-slate-200 bg-white">
        © {new Date().getFullYear()} TestDünya. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
