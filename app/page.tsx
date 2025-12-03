// app/page.tsx

import Link from 'next/link';

// --- SINAV VE TEST VERİLERİ (EnglishMeter Tarzı Yapı) ---
const YKS_TESTS = [
  { id: 'tyt-deneme-1', name: 'TYT Deneme 1', isNew: true },
  { id: 'tyt-deneme-2', name: 'TYT Deneme 2' },
  { id: 'ayt-mat-1', name: 'AYT Matematik' },
  { id: 'ayt-fen-1', name: 'AYT Fen Bilimleri' },
  { id: 'ayt-edb-1', name: 'AYT Edebiyat-Sos' },
  { id: 'ydt-ing-1', name: 'YDT İngilizce' },
];

const LGS_TESTS = [
  { id: 'lgs-genel-1', name: 'LGS Genel Deneme 1', isNew: true },
  { id: 'lgs-mat-1', name: 'LGS Matematik' },
  { id: 'lgs-fen-1', name: 'LGS Fen Bilimleri' },
  { id: 'lgs-turkce-1', name: 'LGS Türkçe' },
];

const KPSS_TESTS = [
  { id: 'kpss-gy-gk-1', name: 'KPSS GY-GK Deneme', isNew: true },
  { id: 'kpss-egitim-1', name: 'Eğitim Bilimleri' },
  { id: 'kpss-tarih', name: 'Tarih Taraması' },
  { id: 'kpss-cografya', name: 'Coğrafya Taraması' },
];

const EHLIYET_TESTS = [
  { id: 'ehliyet-deneme-1', name: 'Çıkmış Sorular 2024', isNew: true },
  { id: 'ehliyet-motor', name: 'Motor & Araç Tekniği' },
  { id: 'ehliyet-ilkyardim', name: 'İlk Yardım Bilgisi' },
  { id: 'ehliyet-trafik', name: "Trafik & Çevre" },
];

const AKADEMIK_TESTS = [
  { id: 'ales-sayisal', name: 'ALES Sayısal' },
  { id: 'ales-sozel', name: 'ALES Sözel' },
  { id: 'yokdil-fen', name: 'YÖKDİL Fen' },
  { id: 'yokdil-sosyal', name: "YÖKDİL Sosyal" },
];


// --- RENK TEMALARI (EnglishMeter Gibi Canlı Renkler) ---
const theme = {
  blue: {
    bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-800',
    btn: 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600'
  },
  orange: {
    bg: 'bg-orange-50', border: 'border-orange-200', title: 'text-orange-800',
    btn: 'bg-white text-orange-600 border-orange-100 hover:bg-orange-600 hover:text-white hover:border-orange-600'
  },
  rose: {
    bg: 'bg-rose-50', border: 'border-rose-200', title: 'text-rose-800',
    btn: 'bg-white text-rose-600 border-rose-100 hover:bg-rose-600 hover:text-white hover:border-rose-600'
  },
  emerald: {
    bg: 'bg-emerald-50', border: 'border-emerald-200', title: 'text-emerald-800',
    btn: 'bg-white text-emerald-600 border-emerald-100 hover:bg-emerald-600 hover:text-white hover:border-emerald-600'
  },
  violet: {
    bg: 'bg-violet-50', border: 'border-violet-200', title: 'text-violet-800',
    btn: 'bg-white text-violet-600 border-violet-100 hover:bg-violet-600 hover:text-white hover:border-violet-600'
  }
};


// --- ANA SAYFA ---
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO: SADE VE NET --- */}
      <section className="py-12 px-4 text-center max-w-4xl mx-auto">
         <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            Sınavını Seç, <span className="text-indigo-600">Hemen Başla.</span>
         </h1>
         <p className="text-lg text-slate-500 font-medium">
            Türkiye'nin pratik test platformu. Üyelik yok, bekleme yok.
         </p>
      </section>

      {/* --- TEST KARTLARI (ENGLISHMETER TARZI GRID) --- */}
      <div className="px-4 pb-20 max-w-6xl mx-auto space-y-8">

        {/* YKS KARTI (Mavi Tema) */}
        <ExamCard 
          title="🇹🇷 YKS & Üniversite" 
          label="TYT - AYT - YDT" 
          theme={theme.blue} 
          tests={YKS_TESTS} 
          allLink="/sinav/yks"
        />

        {/* LGS KARTI (Turuncu Tema) */}
        <ExamCard 
          title="🎓 LGS Hazırlık" 
          label="8. Sınıf Sınavları" 
          theme={theme.orange} 
          tests={LGS_TESTS} 
          allLink="/sinav/lgs"
        />

        {/* KPSS KARTI (Gül Rengi Tema) */}
        <ExamCard 
          title="🏛️ KPSS & Memuriyet" 
          label="Lisans - Önlisans" 
          theme={theme.rose} 
          tests={KPSS_TESTS} 
          allLink="/sinav/kpss"
        />

        {/* EHLİYET KARTI (Zümrüt Yeşili Tema) */}
        <ExamCard 
          title="🚗 Ehliyet Sınavı" 
          label="E-Sınav Müfredatı" 
          theme={theme.emerald} 
          tests={EHLIYET_TESTS} 
          allLink="/sinav/ehliyet"
        />

        {/* AKADEMİK KARTI (Mor Tema) */}
        <ExamCard 
          title="📚 Akademik (ALES-YÖKDİL)" 
          label="Yüksek Lisans" 
          theme={theme.violet} 
          tests={AKADEMIK_TESTS} 
          allLink="/sinav/akademik"
        />

      </div>

      {/* --- FOOTER: GÖZ YORMAYAN BİLGİ ALANI --- */}
      <section className="bg-white border-t border-slate-200 py-12 px-4">
        <div className="max-w-5xl mx-auto text-slate-500 text-sm leading-relaxed text-center">
            <p className="mb-4 font-semibold text-slate-700">TestDünya - Türkiye'nin Online Test Platformu</p>
            <p>
                YKS (TYT-AYT), LGS, KPSS, ALES, DGS ve Ehliyet sınavlarına hazırlanan öğrenciler için 
                geliştirilmiş ücretsiz bir online test çözme platformudur. 
                Tüm deneme sınavları, ÖSYM ve MEB müfredatına %100 uyumlu yeni nesil sorulardan oluşmaktadır.
            </p>
            <p className="text-xs pt-6 mt-6 border-t border-slate-100">
                © 2024 TestDünya. Bu sitedeki içerikler eğitim amaçlıdır.
            </p>
        </div>
      </section>

    </div>
  );
}


// --- YARDIMCI BİLEŞEN: SINAV KARTI ---
function ExamCard({ title, label, theme, tests, allLink }: any) {
  return (
    <div className={`rounded-3xl border-2 p-6 shadow-sm hover:shadow-md transition-shadow ${theme.bg} ${theme.border}`}>
      
      {/* Kart Başlığı */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
        <div>
          <h2 className={`text-2xl font-black ${theme.title}`}>{title}</h2>
          <span className="text-sm font-semibold opacity-70">{label}</span>
        </div>
        <div className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-xl bg-white/50 backdrop-blur-sm shadow-sm">
          🎯
        </div>
      </div>

      {/* Test Butonları Grid'i */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {tests.map((test: any) => (
          <Link
            key={test.id}
            href={`/test/${test.id}`}
            className={`relative group flex items-center justify-center py-4 px-3 rounded-xl border-2 font-bold text-sm text-center transition-all duration-200 active:scale-95 shadow-sm ${theme.btn}`}
          >
            {test.name}
            {test.isNew && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                YENİ
              </span>
            )}
          </Link>
        ))}
      </div>
      
      {/* Tümünü Gör Linki */}
      <Link 
        href={allLink} 
        className={`block text-center mt-5 text-xs font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity ${theme.title}`}
      >
        Tüm Testleri Gör →
      </Link>
    </div>
  );
}
