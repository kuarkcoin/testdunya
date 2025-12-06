'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- Dahili SVG İkon Bileşenleri (Paket bağımlılığı kaldırıldı) ---

const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const BookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Brain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M12 22v-4" />
    <path d="M12 2v2" />
  </svg>
);

const Stethoscope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 3v9a5 5 0 0 0 10 0V3" />
    <path d="M6 3h3" />
    <path d="M13 3h3" />
    <path d="M11 12v7" />
    <circle cx="11" cy="21" r="2" />
  </svg>
);

const PlayCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

// --- Konfigürasyon ve Ana Bileşen ---

const examConfig = [
  { 
    id: 'yks', 
    prefix: 'yks',
    title: 'YKS Sözel', 
    count: 30, 
    desc: '30 Fasikül/Deneme',
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-300'
  },
  { 
    id: 'kpss', 
    prefix: 'kpss',
    title: 'KPSS Sözel', 
    count: 21, 
    desc: '21 Fasikül/Deneme',
    icon: <Brain className="w-8 h-8 text-orange-500" />,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    hoverBorder: 'hover:border-orange-300'
  },
  { 
    id: 'tus', 
    prefix: 'tus',
    title: 'TUS', 
    count: 22, 
    desc: '22 Fasikül/Deneme',
    icon: <Stethoscope className="w-8 h-8 text-emerald-500" />,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-300'
  }
];

export default function HomePage() {
  const [completed, setCompleted] = useState<{ [key: string]: number[] }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedData = localStorage.getItem('examTrackerData');
      if (savedData) {
        setCompleted(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Veri okuma hatası:", error);
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" aria-hidden="true" />
              Sınav Merkezi
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Çözmek istediğin YKS, KPSS veya TUS deneme setini seç ve hemen başla.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {examConfig.map((exam) => (
            <section 
              key={exam.id} 
              aria-labelledby={`title-${exam.id}`}
              className={`bg-white rounded-3xl shadow-sm border ${exam.borderColor} overflow-hidden hover:shadow-md transition-all duration-300`}
            >
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${exam.lightColor}`}>
                  {exam.icon}
                </div>
                <div>
                  <h2 id={`title-${exam.id}`} className="text-xl font-bold text-slate-900">
                    {exam.title}
                  </h2>
                  <span className="text-slate-500 text-sm">{exam.desc}</span>
                </div>
              </div>

              <div className="p-6">
                <nav className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3" aria-label={`${exam.title} Deneme Listesi`}>
                  {Array.from({ length: exam.count }, (_, i) => i + 1).map((num) => {
                    const testLinkId = `${exam.prefix}-${num}`;
                    const isDone = mounted && (completed[exam.id] || []).includes(num);
                    const linkLabel = `${exam.title} ${num}. Deneme`;

                    return (
                      <Link 
                        key={num}
                        href={`/test/${testLinkId}`}
                        title={linkLabel}
                        aria-label={isDone ? `${linkLabel} - Tamamlandı` : `${linkLabel} - Başla`}
                        className={`
                          group relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200
                          ${isDone 
                            ? 'bg-emerald-50 border-emerald-200 hover:border-emerald-300' 
                            : 'bg-white border-slate-100 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1'
                          }
                        `}
                      >
                        <span className={`text-sm font-bold mb-1 ${isDone ? 'text-emerald-700' : 'text-slate-600'}`}>
                          #{num}
                        </span>
                        {isDone ? (
                           <CheckCircle className="w-6 h-6 text-emerald-500" aria-hidden="true" />
                        ) : (
                           <PlayCircle className={`w-6 h-6 ${exam.textColor} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`} aria-hidden="true" />
                        )}
                        <span className="text-[10px] text-slate-400 mt-1 font-medium group-hover:text-indigo-500">
                          {isDone ? 'Çözüldü' : 'Başla'}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
