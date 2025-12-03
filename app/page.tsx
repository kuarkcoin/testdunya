// app/page.tsx

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// --- ANA BUTONLAR (ENGLISHMETER TARZI) ---
const MAIN_BUTTONS = [
  { 
    id: 'tyt-genel', 
    title: 'TYT Deneme Sınavı', 
    subtitle: 'Temel Yeterlilik Testi',
    color: 'bg-blue-600 shadow-blue-200 hover:bg-blue-700',
    href: '/test/tyt-genel'
  },
  { 
    id: 'ayt-mat', 
    title: 'AYT Matematik', 
    subtitle: 'Alan Yeterlilik Testi',
    color: 'bg-purple-600 shadow-purple-200 hover:bg-purple-700',
    href: '/test/ayt-mat'
  },
  { 
    id: 'lgs-genel', 
    title: 'LGS Genel Deneme', 
    subtitle: 'Liselere Geçiş Sınavı',
    color: 'bg-orange-500 shadow-orange-200 hover:bg-orange-600',
    href: '/test/lgs-genel'
  },
  { 
    id: 'kpss-lisans', 
    title: 'KPSS Genel Yetenek', 
    subtitle: 'Lisans & Önlisans',
    color: 'bg-rose-500 shadow-rose-200 hover:bg-rose-600',
    href: '/test/kpss-lisans'
  },
  { 
    id: 'ehliyet-2024', 
    title: 'Ehliyet Çıkmış Sorular', 
    subtitle: '2024 E-Sınav Müfredatı',
    color: 'bg-emerald-600 shadow-emerald-200 hover:bg-emerald-700',
    href: '/test/ehliyet-2024'
  },
  { 
    id: 'ales-sayisal', 
    title: 'ALES Sayısal', 
    subtitle: 'Akademik Personel Sınavı',
    color: 'bg-cyan-600 shadow-cyan-200 hover:bg-cyan-700',
    href: '/test/ales-sayisal'
  },
  { 
    id: 'yokdil-fen', 
    title: 'YÖKDİL Fen Bilimleri', 
    subtitle: 'Yabancı Dil Sınavı',
    color: 'bg-indigo-600 shadow-indigo-200 hover:bg-indigo-700',
    href: '/test/yokdil-fen'
  },
  { 
    id: 'dgs-genel', 
    title: 'DGS Deneme', 
    subtitle: 'Dikey Geçiş Sınavı',
    color: 'bg-pink-500 shadow-pink-200 hover:bg-pink-600',
    href: '/test/dgs-genel'
  },
];

// --- ALTTAKİ UZUN BUTON (RACE MODE GİBİ) ---
const SPECIAL_BUTTON = {
  title: '🚀 Türkiye Geneli Sıralama Sınavı',
  href: '/turkiye-geneli',
  color: 'bg-red-600 hover:bg-red-700 shadow-red-200'
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* HERO ALANI (MİNİMAL) */}
      <section className="pt-10 pb-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
          Sınavını Seç, <span className="text-indigo-600">Başla.</span>
        </h1>
        <p className="text-slate-500 font-medium">TestDünya ile seviyeni ücretsiz ölç.</p>
      </section>

      {/* --- ANA BUTONLAR GRID --- */}
      <div className="flex flex-col items-center justify-center px-4 pb-20">
        <div className="w-full max-w-5xl">
          
          {/* BUTON IZGARASI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {MAIN_BUTTONS.map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className={`flex flex-col items-center justify-center py-8 px-4 rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 text-white ${btn.color}`}
              >
                <span className="text-xl md:text-2xl font-bold text-center mb-1">
                  {btn.title}
                </span>
                <span className="text-sm font-medium opacity-90">
                  {btn.subtitle}
                </span>
              </Link>
            ))}
          </div>

          {/* ALTTAKİ ÖZEL GENİŞ BUTON */}
          <Link
            href={SPECIAL_BUTTON.href}
            className={`flex items-center justify-center w-full py-6 rounded-2xl shadow-lg text-white text-xl font-bold transition-transform hover:scale-[1.01] active:scale-95 ${SPECIAL_BUTTON.color}`}
          >
            {SPECIAL_BUTTON.title}
          </Link>

        </div>
      </div>

      {/* --- SEO / FOOTER (SADECE EN ALTTA) --- */}
      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
        <p>© 2024 TestDünya. Tüm hakları saklıdır.</p>
      </footer>

    </div>
  );
}
