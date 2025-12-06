'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- Modern SVG İkonlar ---

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

// --- Sınav Yapılandırması (Dosya isimlerine göre güncellendi) ---
const examConfig = [
  { 
    id: 'yks', 
    prefix: 'yks-sozel-deneme', // DİKKAT: Dosya isminizle aynı olmalı
    title: 'YKS Sözel', 
    count: 30, 
    desc: 'TYT ve AYT odaklı kapsamlı deneme setleri.',
    icon: <Book className="w-8 h-8 text-white" />,
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-200'
  },
  { 
    id: 'kpss', 
    prefix: 'kpss-sozel', // Dosya isminizle aynı olmalı
    title: 'KPSS Genel Kültür', 
    count: 21, 
    desc: 'Memurluk sınavı için tarih, coğrafya ve vatandaşlık.',
    icon: <Brain className="w-8 h-8 text-white" />,
    gradient: 'from-orange-400 to-red-500',
    shadow: 'shadow-orange-200'
  },
  { 
    id: 'tus', 
    prefix: 'tus-deneme', // Dosya isminizle aynı olmalı
    title: 'TUS Denemeleri', 
    count: 22, 
    desc: 'Tıpta Uzmanlık Sınavı için klinik senaryolar.',
    icon: <Activity className="w-8 h-8 text-white" />,
    gradient: 'from-emerald-400 to-teal-600',
    shadow: 'shadow-emerald-200'
  }
];

export default function HomePage() {
  const [completed, setCompleted] = useState<{ [key: string]: number[] }>({});

  useEffect(() => {
    const savedData = localStorage.getItem('examTrackerData');
    if (savedData) {
      setCompleted(JSON.parse(savedData));
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* --- SEO & Hero Alanı --- */}
      <div className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-600 text-white pt-20 pb-24 px-4 rounded-b-[3rem] shadow-xl mb-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-4 border border-white/20">
             <Trophy className="w-8 h-8 text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            TestDünya Sınav Platformu
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
            YKS, KPSS ve TUS sınavlarına en modern arayüzle hazırlanın. 
            İlerlemenizi takip edin, notlar alın ve başarıya ulaşın.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 space-y-10">
        {/* Sınav Listesi */}
        {examConfig.map((exam) => (
          <section 
            key={exam.id} 
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100"
          >
            {/* Kart Başlığı */}
            <div className={`p-6 bg-gradient-to-r ${exam.gradient} text-white flex items-center gap-5`}>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-inner">
                {exam.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{exam.title}</h2>
                <p className="text-white/80 text-sm mt-1">{exam.desc}</p>
              </div>
            </div>

            {/* Test Linkleri Grid */}
            <div className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {Array.from({ length: exam.count }, (_, i) => i + 1).map((num) => {
                  const testLinkId = `${exam.prefix}-${num}`;
                  const isDone = (completed[exam.id] || []).includes(num);

                  return (
                    <Link 
                      key={num}
                      href={`/test/${testLinkId}`}
                      className={`
                        group relative flex flex-col items-center justify-center py-4 px-2 rounded-2xl border transition-all duration-300
                        ${isDone 
                          ? 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100' 
                          : 'bg-slate-50 border-slate-100 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:-translate-y-1'
                        }
                      `}
                    >
                      <div className="mb-2">
                        {isDone ? (
                           <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                             <CheckCircle className="w-5 h-5" />
                           </div>
                        ) : (
                           <div className="p-2 bg-white rounded-full text-slate-400 group-hover:text-indigo-500 shadow-sm group-hover:shadow-md transition-all">
                             <PenTool className="w-5 h-5" />
                           </div>
                        )}
                      </div>
                      
                      <span className={`text-sm font-bold ${isDone ? 'text-emerald-700' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {num}. Deneme
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
