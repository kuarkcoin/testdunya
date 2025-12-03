'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// Sınav Verileri (Senin listene göre renkli butonlar)
const EXAM_BUTTONS = [
  { 
    id: 'yks', 
    title: 'YKS', 
    subtitle: 'Üniversite Sınavı', 
    color: 'bg-blue-600 hover:bg-blue-700',
    shadow: 'shadow-blue-200'
  },
  { 
    id: 'lgs', 
    title: 'LGS', 
    subtitle: 'Liselere Geçiş', 
    color: 'bg-purple-600 hover:bg-purple-700',
    shadow: 'shadow-purple-200'
  },
  { 
    id: 'kpss', 
    title: 'KPSS', 
    subtitle: 'Kamu Personeli', 
    color: 'bg-emerald-600 hover:bg-emerald-700',
    shadow: 'shadow-emerald-200'
  },
  { 
    id: 'ehliyet', 
    title: 'Ehliyet', 
    subtitle: 'Sürücü Belgesi', 
    color: 'bg-orange-500 hover:bg-orange-600',
    shadow: 'shadow-orange-200'
  },
  { 
    id: 'aol', 
    title: 'AÖL', 
    subtitle: 'Açık Lise', 
    color: 'bg-sky-500 hover:bg-sky-600',
    shadow: 'shadow-sky-200'
  },
  { 
    id: 'dgs', 
    title: 'DGS', 
    subtitle: 'Dikey Geçiş', 
    color: 'bg-pink-500 hover:bg-pink-600',
    shadow: 'shadow-pink-200'
  },
  { 
    id: 'ales', 
    title: 'ALES', 
    subtitle: 'Akademik Sınav', 
    color: 'bg-indigo-500 hover:bg-indigo-600',
    shadow: 'shadow-indigo-200'
  },
  { 
    id: 'yokdil', 
    title: 'YÖKDİL', 
    subtitle: 'Yabancı Dil', 
    color: 'bg-teal-500 hover:bg-teal-600',
    shadow: 'shadow-teal-200'
  },
  { 
    id: 'tus', 
    title: 'TUS', 
    subtitle: 'Tıpta Uzmanlık', 
    color: 'bg-rose-500 hover:bg-rose-600',
    shadow: 'shadow-rose-200'
  },
  { 
    id: 'dus', 
    title: 'DUS', 
    subtitle: 'Diş Hekimliği', 
    color: 'bg-cyan-600 hover:bg-cyan-700',
    shadow: 'shadow-cyan-200'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-12">
        
        {/* BAŞLIK */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-800 mb-2">
            Sınavını Seç
          </h1>
          <p className="text-slate-500 font-medium">
            Test çözmek istediğin alanı seç ve hemen başla.
          </p>
        </div>

        {/* --- SINAV BUTONLARI IZGARASI (GRID) --- */}
        {/* Mobilde: 2 yan yana (grid-cols-2)
            Tablette: 3 yan yana (md:grid-cols-3)
            Bilgisayarda: 4 yan yana (lg:grid-cols-4)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {EXAM_BUTTONS.map((exam) => (
            <Link 
              key={exam.id} 
              href={`/test/${exam.id}`}
              className={`
                group flex flex-col items-center justify-center 
                py-8 px-4 rounded-2xl text-white 
                shadow-lg transition-all duration-300 
                hover:scale-105 hover:shadow-xl active:scale-95
                ${exam.color}
              `}
            >
              <span className="text-2xl md:text-3xl font-black mb-1 group-hover:scale-110 transition-transform">
                {exam.title}
              </span>
              <span className="text-xs md:text-sm font-medium opacity-90 text-center">
                {exam.subtitle}
              </span>
            </Link>
          ))}

        </div>

        {/* --- ALTTA GENİŞ BİR BUTON (OPSİYONEL) --- */}
        <div className="mt-12">
             <Link 
                href="/turkiye-geneli" 
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-black text-xl py-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.01]"
             >
                🏁 TÜRKİYE GENELİ SIRALAMA SINAVLARI
             </Link>
        </div>

      </main>
    </div>
  );
}
