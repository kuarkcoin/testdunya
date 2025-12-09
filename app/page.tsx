'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- İKONLAR ---
const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 1 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);
const Book = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
);
const Brain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
);
const Activity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);
const PenTool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
);
const Zap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const Target = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
// Yeni Kilit İkonu
const Lock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

// --- SINAV AYARLARI ---
// Burada "count" değerlerini yüksek tutuyoruz ki kullanıcılar gelecekte daha fazla test olacağını görsün.
const examConfig = [
  { 
    id: 'yks', 
    prefix: 'yks-sozel-deneme', 
    title: 'YKS Sözel', 
    count: 30, 
    desc: 'TYT ve AYT odaklı kapsamlı, yeni nesil deneme setleri.',
    icon: <Book className="w-6 h-6 text-white" />,
    gradient: 'from-blue-600 to-indigo-600',
    border: 'border-blue-100',
    slug: 'yks-sozel'
  },
  { 
    id: 'kpss', 
    prefix: 'kpss-sozel', 
    title: 'KPSS Genel Kültür', 
    count: 21, 
    desc: 'Tarih, Coğrafya ve Vatandaşlık için özgün sorular.',
    icon: <Brain className="w-6 h-6 text-white" />,
    gradient: 'from-orange-500 to-red-500',
    border: 'border-orange-100',
    slug: 'kpss-genel-kultur'
  },
  { 
    id: 'tus', 
    prefix: 'tus-deneme', 
    title: 'TUS Denemeleri', 
    count: 22, 
    desc: 'TUS için Temel ve Klinik Bilimler vaka soruları.',
    icon: <Activity className="w-6 h-6 text-white" />,
    gradient: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-100',
    slug: 'tus-tip'
  }
];

// Aktif edilecek test sayısı
const ACTIVE_TEST_LIMIT = 10;

export default function HomePage() {
  const [completed, setCompleted] = useState<{ [key: string]: number[] }>({});

  useEffect(() => {
    const savedData = localStorage.getItem('examTrackerData');
    if (savedData) {
      setCompleted(JSON.parse(savedData));
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white pb-20 pt-10 px-4 mb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-indigo-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Online Sınav Merkezi v2.0
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              TestDünya <span className="text-indigo-400">Sınav Platformu</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              YKS, KPSS ve TUS sınavlarına <strong>yapay zeka destekli özgün sorularla</strong>, ücretsiz ve üyeliksiz hazırlanın. 
              Hatalarınızı analiz edin, netlerinizi artırın.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
               <Link href="/mistakes" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all flex items-center gap-2">
                 <span>📕</span> Hatalarım
               </Link>
               <button onClick={() => document.getElementById('exams')?.scrollIntoView({behavior: 'smooth'})} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-900/50">
                 Testleri İncele
               </button>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center md:justify-end">
             <div className="relative w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl rotate-6 shadow-2xl flex items-center justify-center border-4 border-white/10 backdrop-blur-md">
                <Trophy className="w-20 h-20 md:w-28 md:h-28 text-white drop-shadow-md" />
             </div>
          </div>

        </div>
      </div>

      {/* --- SINAV LİSTESİ --- */}
      <div id="exams" className="max-w-6xl mx-auto px-4 -mt-16 space-y-8 pb-20 relative z-10">
        {examConfig.map((exam) => (
          <section 
            key={exam.id} 
            className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-indigo-100/50"
          >
            {/* Header */}
            <div className={`p-5 bg-gradient-to-r ${exam.gradient} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl shadow-inner">
                  {exam.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-wide">{exam.title}</h2>
                  <p className="text-white/80 text-xs font-medium">{exam.desc}</p>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                 <span className="block text-2xl font-black">{exam.count}</span>
                 <span className="text-[10px] uppercase opacity-80 font-bold tracking-wider">Deneme</span>
              </div>
            </div>

            {/* Grid */}
            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
                {Array.from({ length: exam.count }, (_, i) => i + 1).map((num) => {
                  const testLinkId = `${exam.prefix}-${num}`;
                  const isDone = (completed[exam.id] || []).includes(num);
                  
                  // Mantık: Numara 10'dan büyükse pasif yap
                  const isActive = num <= ACTIVE_TEST_LIMIT;

                  if (isActive) {
                    // AKTİF TESTLER (LİNK)
                    return (
                      <Link 
                        key={num}
                        href={`/test/${testLinkId}`}
                        title={`${exam.title} ${num}. Özgün Deneme`}
                        className={`
                          group relative flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition-all duration-200
                          ${isDone 
                            ? 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100' 
                            : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5'
                          }
                        `}
                      >
                        <div className="mb-1.5">
                          {isDone ? (
                             <div className="text-emerald-500"><CheckCircle className="w-5 h-5" /></div>
                          ) : (
                             <div className="text-slate-300 group-hover:text-indigo-500 transition-colors">
                               <PenTool className="w-5 h-5" />
                             </div>
                          )}
                        </div>
                        <span className={`text-xs font-bold ${isDone ? 'text-emerald-700' : 'text-slate-600 group-hover:text-indigo-900'}`}>
                          {num}. Deneme
                        </span>
                      </Link>
                    );
                  } else {
                    // PASİF TESTLER (DİV - Tıklanamaz)
                    return (
                      <div 
                        key={num}
                        className="relative flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed overflow-hidden"
                        title="Bu test yakında eklenecektir."
                      >
                        {/* Kilit İkonu */}
                        <div className="mb-1.5 opacity-40">
                             <Lock className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-xs font-bold opacity-40">
                          {num}. Deneme
                        </span>
                        
                        {/* Opsiyonel: Yakında etiketi */}
                        <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded-full shadow-sm border border-slate-200">Yakında</span>
                        </div>
                      </div>
                    );
                  }

                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* --- SEO & FEATURES SECTION --- */}
      <section className="bg-white border-t border-slate-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-4">Neden TestDünya?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Sınavlara hazırlanırken ihtiyacınız olan her şey tek bir platformda.
              Ücretsiz YKS, KPSS ve TUS denemeleri ile başarıya bir adım daha yaklaşın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Hızlı ve Modern Arayüz</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kullanıcı dostu arayüzümüz ile dikkatiniz dağılmadan sadece sorulara odaklanın.
              </p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Hata Analizi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yanlış yaptığınız sorular otomatik olarak "Hatalarım" bölümüne kaydedilir.
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Geniş Soru Havuzu</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ÖSYM müfredatına uygun YKS, KPSS ve TUS için hazırlanmış <strong>özgün denemeler ve yeni nesil sorular.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-500" /> TestDünya
            </h4>
            <p className="leading-relaxed mb-4 max-w-sm">
              Türkiye'nin en kapsamlı ücretsiz online sınav hazırlık platformu. 
              TYT, AYT, KPSS Lisans, Önlisans ve TUS sınavlarına hazırlanan öğrenciler için 
              özenle hazırlanmış <strong>özgün deneme sınavları.</strong>
            </p>
            <p className="text-xs opacity-50">&copy; 2025 TestDünya. Tüm hakları saklıdır. <span className="mx-2">•</span> <Link href="/gizlilik" className="hover:text-white hover:underline">Gizlilik</Link></p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4">Sınavlar</h5>
            <ul className="space-y-2">
              <li><Link href="#exams" className="hover:text-white transition-colors">YKS (TYT-AYT) Denemeleri</Link></li>
              <li><Link href="#exams" className="hover:text-white transition-colors">KPSS Genel Kültür Denemeleri</Link></li>
              <li><Link href="#exams" className="hover:text-white transition-colors">TUS Klinik ve Temel Sorular</Link></li>
              <li><Link href="/mistakes" className="hover:text-white transition-colors">Hata Analizi</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Popüler Aramalar</h5>
            <ul className="space-y-2 text-xs">
              <li>Online Deneme Çöz</li>
              <li>Ücretsiz YKS Testleri</li>
              <li>KPSS Tarih Denemeleri</li>
              <li>Tıpta Uzmanlık Sınavı</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* --- SABİT İLETİŞİM BUTONU --- */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <Link 
          href="/iletisim" 
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-indigo-500/50 font-bold border-2 border-white/20 backdrop-blur-md"
        >
          <span className="text-xl">💬</span>
          <span className="hidden sm:inline">İletişim</span>
        </Link>
      </div>

    </main>
  );
}
