'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// Üstteki 3 Büyük Kart (Premium Hissi İçin)
const HERO_CARDS = [
  {
    id: 'yks-hizli',
    title: 'Hızlı Seviye Testi',
    subtitle: 'TYT & AYT Karışık (40 Soru)',
    gradient: 'from-blue-600 to-indigo-600',
    shadow: 'shadow-indigo-500/30',
    icon: '⚡',
    href: '/test/yks-hizli',
  },
  {
    id: 'tyt-full',
    title: 'TYT Genel Prova',
    subtitle: 'Gerçek Sınav Modu (120 Soru)',
    gradient: 'from-violet-600 to-fuchsia-600',
    shadow: 'shadow-fuchsia-500/30',
    icon: '💎',
    href: '/test/tyt-full',
  },
  {
    id: 'ayt-paket',
    title: 'AYT Branş Denemeleri',
    subtitle: 'Sayısal · Eşit Ağırlık · Sözel',
    gradient: 'from-orange-500 to-amber-500',
    shadow: 'shadow-orange-500/30',
    icon: '📚',
    href: '/test/ayt-paket',
  },
];

// Pembe Alan Testleri
const PACK_TESTS = [
  { id: 1, status: 'active' }, { id: 2, status: 'active' }, 
  { id: 3, status: 'active' }, { id: 4, status: 'active' },
  { id: 5, status: 'locked' }, { id: 6, status: 'locked' }, 
  { id: 7, status: 'locked' }, { id: 8, status: 'locked' }
];

// Alt Renkli Butonlar
const CATEGORY_BTNS = [
  { title: 'LGS Genel Deneme', count: '90dk', color: 'bg-emerald-500', shadow: 'shadow-emerald-500/30', href: '/test/lgs' },
  { title: 'KPSS Lisans', count: '120dk', color: 'bg-rose-500', shadow: 'shadow-rose-500/30', href: '/test/kpss' },
  { title: 'Ehliyet 2024', count: '50 Soru', color: 'bg-sky-500', shadow: 'shadow-sky-500/30', href: '/test/ehliyet' },
  { title: 'ALES Sayısal', count: '50 Soru', color: 'bg-teal-500', shadow: 'shadow-teal-500/30', href: '/test/ales' },
  { title: 'DGS Mantık', count: '60 Soru', color: 'bg-cyan-600', shadow: 'shadow-cyan-500/30', href: '/test/dgs' },
  { title: 'YÖKDİL Fen', count: '80 Soru', color: 'bg-indigo-500', shadow: 'shadow-indigo-500/30', href: '/test/yokdil' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />

      {/* Arka Plan Süslemesi (Modernlik katan detay) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-50"></div>

      <main className="max-w-6xl mx-auto px-4 pt-12 pb-24">
        
        {/* HERO BAŞLIK */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-2">
            Beta Sürüm Yayında 🚀
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Sınavlara Hazırlık <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Artık Daha Akıllı.
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            TestDünya ile binlerce güncel soruya ücretsiz ulaş. 
            Üyelik şartı yok, reklam karmaşası yok.
          </p>
        </div>

        {/* 1. BÖLÜM: 3 BÜYÜK KART (Gradient) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {HERO_CARDS.map((card) => (
            <Link 
              key={card.id} 
              href={card.href}
              className={`group relative overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] bg-gradient-to-br ${card.gradient} ${card.shadow}`}
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all group-hover:scale-150"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                <div>
                  <div className="text-sm font-medium opacity-90 mb-1 tracking-wide uppercase">
                    {card.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {card.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold bg-white/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <span>Başla</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 2. BÖLÜM: YKS EXAM PACK (Pembe Alan) */}
        <div className="relative rounded-[2.5rem] bg-white p-2 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 mb-16">
          {/* Süsleme Çizgisi */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-pink-400 to-rose-500 rounded-b-xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 mt-6 md:mt-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 text-pink-600 text-xl">🇹🇷</span>
                YKS EXAM PACK
              </h2>
              <p className="text-slate-500 mt-1 font-medium">Gerçek sınav simülasyonu (TYT-AYT Karışık)</p>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-2 bg-pink-50 text-pink-600 rounded-xl text-sm font-bold border border-pink-100">
              🔥 12.500+ Kişi Çözdü
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PACK_TESTS.map((test) => (
              <Link 
                key={test.id}
                href={test.status === 'active' ? `/test/yks-${test.id}` : '#'}
                className={`relative flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-200
                  ${test.status === 'active' 
                    ? 'bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/25 hover:bg-pink-600 hover:-translate-y-1 hover:shadow-xl' 
                    : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
              >
                <span className="text-lg font-bold">Test {test.id}</span>
                <span className={`text-xs mt-1 font-medium ${test.status === 'active' ? 'opacity-90' : 'text-slate-400'}`}>
                  {test.status === 'active' ? 'Hemen Başla' : 'Yakında'}
                </span>
                {test.status === 'active' && (
                   <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* 3. BÖLÜM: DİĞER KATEGORİLER (Renkli Haplar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {CATEGORY_BTNS.map((btn, index) => (
            <Link 
              key={index}
              href={btn.href}
              className={`group flex items-center justify-between p-5 rounded-2xl text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${btn.color} ${btn.shadow}`}
            >
              <div className="flex flex-col">
                <span className="font-bold text-lg">{btn.title}</span>
                <span className="text-xs opacity-80 font-medium bg-black/10 w-fit px-2 py-0.5 rounded-md mt-1">
                  {btn.count}
                </span>
              </div>
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform group-hover:rotate-45">
                ↗
              </div>
            </Link>
          ))}
        </div>

        {/* 4. BÖLÜM: TÜRKİYE GENELİ (Kırmızı Dev Buton) */}
        <Link href="/turkiye-geneli" className="group relative block w-full overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-600 to-rose-600 p-1 shadow-2xl shadow-red-600/30 transition-transform hover:scale-[1.01] active:scale-95">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative flex items-center justify-center rounded-[1.8rem] bg-transparent py-6 md:py-8 px-4 text-center">
             <span className="mr-3 text-3xl animate-bounce">🏁</span>
             <div>
                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
                  Türkiye Geneli Sıralama Sınavı
                </h3>
                <p className="text-red-100 text-sm md:text-base font-medium mt-1">
                  Binlerce rakibinin arasındaki yerini gör • Ücretsiz Katılım
                </p>
             </div>
          </div>
        </Link>

      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-slate-200 bg-white text-slate-400 text-sm font-medium">
        <p>© 2024 TestDünya. Modern Sınav Platformu.</p>
      </footer>
    </div>
  );
}
