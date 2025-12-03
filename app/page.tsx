'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// 1. ÜSTTEKİ "APP GİBİ" KARTLAR
const HERO_WIDGETS = [
  {
    id: 'tyt-hizli',
    title: 'Hızlı Başla',
    desc: 'TYT Karışık 20 Soru',
    icon: '⚡',
    color: 'bg-blue-600',
    shadow: 'shadow-blue-600/40',
    gradient: 'from-blue-500 to-blue-600',
    href: '/test/tyt-hizli'
  },
  {
    id: 'yks-full',
    title: 'YKS Prova',
    desc: 'Gerçek Sınav Modu',
    icon: '🎓',
    color: 'bg-violet-600',
    shadow: 'shadow-violet-600/40',
    gradient: 'from-violet-500 to-fuchsia-600',
    href: '/test/yks-full'
  },
  {
    id: 'kelime-avi',
    title: 'YDT Kelime',
    desc: 'Vocabulary Test',
    icon: '🎯',
    color: 'bg-orange-500',
    shadow: 'shadow-orange-500/40',
    gradient: 'from-orange-400 to-red-500',
    href: '/test/ydt-vocab'
  }
];

// 2. ORTADAKİ PEMBE "PAKET" BUTONLARI
const EXAM_PACK = [
  { id: 1, label: 'TYT 1', status: 'open' },
  { id: 2, label: 'TYT 2', status: 'open' },
  { id: 3, label: 'AYT Mat', status: 'open' },
  { id: 4, label: 'AYT Fen', status: 'open' },
  { id: 5, label: 'Test 5', status: 'locked' },
  { id: 6, label: 'Test 6', status: 'locked' },
  { id: 7, label: 'Test 7', status: 'locked' },
  { id: 8, label: 'Test 8', status: 'locked' },
];

// 3. ALTTAKİ "HAP" (PILL) BUTONLAR
const QUICK_LINKS = [
  { title: 'LGS Deneme', bg: 'bg-emerald-500', shadow: 'shadow-emerald-500', href: '/test/lgs' },
  { title: 'KPSS Lisans', bg: 'bg-rose-500', shadow: 'shadow-rose-500', href: '/test/kpss' },
  { title: 'Ehliyet 2025', bg: 'bg-sky-500', shadow: 'shadow-sky-500', href: '/test/ehliyet' },
  { title: 'ALES Sayısal', bg: 'bg-amber-500', shadow: 'shadow-amber-500', href: '/test/ales' },
  { title: 'DGS Mantık', bg: 'bg-cyan-500', shadow: 'shadow-cyan-500', href: '/test/dgs' },
  { title: 'YÖKDİL Fen', bg: 'bg-indigo-500', shadow: 'shadow-indigo-500', href: '/test/yokdil' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans pb-20">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-8">
        
        {/* BAŞLIK ALANI */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-2">
            Hangi Sınava Hazırlanıyorsun?
          </h1>
          <p className="text-slate-500 font-medium">TestDünya ile seviyeni ücretsiz ölç.</p>
        </div>

        {/* --- 1. BÖLÜM: HERO WIDGETS (3D KARTLAR) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {HERO_WIDGETS.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className={`group relative overflow-hidden rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95 active:translate-y-0
                bg-gradient-to-br ${item.gradient} ${item.shadow} shadow-lg ring-1 ring-white/20`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="text-white/80 font-medium text-sm mt-1">{item.desc}</p>
                </div>
                <span className="text-4xl bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>
              <div className="mt-8 flex items-center text-sm font-bold bg-black/20 w-fit px-4 py-2 rounded-full backdrop-blur-md">
                Başla <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* --- 2. BÖLÜM: YKS EXAM PACK (MODERN KONTROL PANELİ GİBİ) --- */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200 border border-slate-100 mb-12 relative overflow-hidden">
          {/* Süsleme: Üst Çizgi */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
             <div>
                <span className="text-pink-600 font-black tracking-wider text-xs uppercase bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                  Özel Seri
                </span>
                <h2 className="text-3xl font-black text-slate-800 mt-2">
                  YKS Sınav Paketi
                </h2>
             </div>
             <div className="hidden md:block text-right">
                <p className="text-slate-400 text-sm font-bold">80 Soru / 120 Dakika</p>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {EXAM_PACK.map((btn) => (
              <Link
                key={btn.id}
                href={btn.status === 'open' ? '#' : '#'}
                className={`flex flex-col items-center justify-center py-5 rounded-2xl border-b-4 transition-all active:border-b-0 active:translate-y-1 active:shadow-none
                  ${btn.status === 'open' 
                    ? 'bg-pink-500 border-pink-700 text-white shadow-lg shadow-pink-200 cursor-pointer hover:bg-pink-600' 
                    : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
              >
                <span className="text-lg font-bold">{btn.label}</span>
                <span className="text-[10px] uppercase font-bold mt-1 opacity-80">
                  {btn.status === 'open' ? 'Çöz' : 'Kilitli'}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* --- 3. BÖLÜM: HAP (PILL) BUTONLAR --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`flex items-center justify-between px-6 py-5 rounded-2xl text-white font-bold text-lg shadow-lg border-b-4 border-black/20 transition-all hover:-translate-y-1 hover:brightness-110 active:border-b-0 active:translate-y-1 active:shadow-none
                ${link.bg} ${link.shadow}`}
            >
              <span>{link.title}</span>
              <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                ▶
              </span>
            </Link>
          ))}
        </div>

        {/* --- 4. BÖLÜM: DEV KIRMIZI BUTON --- */}
        <Link 
          href="/turkiye-geneli"
          className="block w-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-center rounded-3xl py-6 border-b-8 border-red-800 shadow-2xl shadow-red-500/40 transition-all hover:-translate-y-1 hover:shadow-red-500/60 active:border-b-0 active:translate-y-2 active:shadow-none"
        >
          <div className="flex flex-col items-center justify-center">
             <span className="text-2xl mb-1">🇹🇷</span>
             <h3 className="text-2xl font-black uppercase">Türkiye Geneli Sıralama Sınavı</h3>
             <p className="text-white/80 font-medium text-sm mt-1">Katılmak için tıkla</p>
          </div>
        </Link>

      </main>
    </div>
  );
}
