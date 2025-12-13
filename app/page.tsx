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
const Lock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const Tooth = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C7 2 7 7 7 9c0 4 2 6 5 6s5-2 5-6c0-2 0-7-5-7z" />
    <path d="M7 9s0 4 2 6" />
    <path d="M17 9s0 4-2 6" />
    <path d="M9 22c0-2 1-4 3-4s3 2 3 4" />
  </svg>
);
const Stethoscope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 2v2" /><path d="M5 2v2" /><path d="M5 5a2 2 0 0 0 4 0V4a2 2 0 0 0-4 0" /><path d="M8 9a3 3 0 0 0 6 0v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h0a6 6 0 0 1 6 6v3" /><circle cx="20" cy="19" r="3" />
  </svg>
);
const Globe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const Mic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
);
const Calculator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
);

// --- SINAV AYARLARI ---
const examConfig = [
  {
    id: 'yks',
    prefix: 'yks-sozel-deneme',
    title: 'YKS Sözel',
    count: 30,
    activeLimit: 10,
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
    activeLimit: 10,
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
    count: 35,
    activeLimit: 35,
    desc: 'TUS için Temel ve Klinik Bilimler vaka soruları.',
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    gradient: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-100',
    slug: 'tus-tip'
  },
  {
    id: 'dus',
    prefix: 'dus-deneme',
    title: 'DUS Denemeleri',
    count: 17,
    activeLimit: 17,
    desc: 'Diş Hekimliği Uzmanlık Sınavı için klinik ve temel sorular.',
    icon: <Tooth className="w-6 h-6 text-white" />,
    gradient: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-100',
    slug: 'dus-dis-hekimligi'
  }
];

// --- IELTS MODÜLLERİ (active/locked eklendi) ---
const ieltsModules = [
  {
    id: 'ielts-reading',
    title: 'Reading',
    desc: 'Academic Passages',
    icon: <Book className="w-6 h-6" />,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    active: true
  },
  {
    id: 'ielts-listening',
    title: 'Listening',
    desc: 'Audio Conversations',
    icon: <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">🎧</div>,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    active: true
  },
  {
    id: 'ielts-writing',
    title: 'Writing',
    desc: 'Logic & Templates',
    icon: <PenTool className="w-6 h-6" />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    active: true
  },
  {
    id: 'ielts-speaking',
    title: 'Speaking',
    desc: 'Cue Card Simulator',
    icon: <Mic className="w-6 h-6" />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    active: true
  },
  {
    id: 'ielts-vocab',
    title: 'Vocabulary',
    desc: 'Band 7+ Words',
    icon: <Zap className="w-6 h-6" />,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    active: true
  },
  {
    id: 'ielts-grammar',
    title: 'Grammar',
    desc: 'Adv. Structures',
    icon: <Brain className="w-6 h-6" />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    active: true
  },
  {
    id: 'ielts-calculator',
    title: 'Score Calculator',
    desc: 'Calculate Band Score',
    icon: <Calculator className="w-6 h-6" />,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    active: true
  }
] as const;

export default function HomePage() {
  const [completed, setCompleted] = useState<{ [key: string]: number[] }>({});

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('examTrackerData');
      if (savedData) setCompleted(JSON.parse(savedData));
    } catch {
      setCompleted({});
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* --- HERO SECTION --- */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white pb-24 pt-10 px-4 mb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="space-y-4 md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-indigo-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              TestDünya v3.2 • IELTS Modülleri Güncellendi
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              TestDünya <span className="text-indigo-400">Sınav Platformu</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              YKS, KPSS, TUS, DUS ve şimdi <strong>IELTS Academic</strong> sınavlarına yapay zeka destekli özgün sorularla hazırlanın.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/mistakes" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all flex items-center gap-2">
                <span>📕</span> Hatalarım
              </Link>
              <button
                onClick={() => document.getElementById('exams')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-900/50"
              >
                Tüm Testler
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

      {/* --- MAIN CONTENT AREA --- */}
      <div id="exams" className="max-w-6xl mx-auto px-4 -mt-20 space-y-10 pb-20 relative z-10">

        {/* --- IELTS GLOBAL SECTION --- */}
        <section className="bg-white rounded-2xl shadow-xl shadow-sky-200/40 overflow-hidden border-2 border-sky-100 relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-400 to-blue-600"></div>

          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">IELTS ACADEMIC</h2>
                <p className="text-slate-500 text-sm">Global English Preparation • Band 7.0+</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="px-4 py-1.5 bg-sky-50 text-sky-700 text-xs font-bold rounded-full border border-sky-100 uppercase tracking-wider">
                New Module
              </span>
            </div>
          </div>

          {/* IELTS Modules Grid */}
          <div className="p-6 bg-slate-50/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {ieltsModules.map((module) => {
              // Link Mantığı
              let linkHref = `/test/${module.id}`;
              if (module.id === 'ielts-speaking') linkHref = '/ielts/speaking';
              if (module.id === 'ielts-calculator') linkHref = '/ielts/calculator';
              if (module.id === 'ielts-listening') linkHref = '/ielts/listening';
              if (module.id === 'ielts-writing') linkHref = '/ielts/writing';

              // Locked
              if (!module.active) {
                return (
                  <div
                    key={module.id}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 ${module.bg} ${module.border} text-slate-400 cursor-not-allowed`}
                    title="Yakında eklenecek"
                  >
                    <div className="mb-3 p-3 rounded-full bg-white/60 shadow-sm ring-1 ring-black/5">
                      <Lock className="w-6 h-6 opacity-70" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-slate-700 text-center">{module.title}</h3>
                    <p className="text-[10px] font-bold opacity-60 uppercase tracking-wide mt-1 text-center">Coming Soon</p>
                  </div>
                );
              }

              // Active
              return (
                <Link
                  key={module.id}
                  href={linkHref}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${module.bg} ${module.border} ${module.color} h-full`}
                >
                  <div className="mb-3 p-3 rounded-full bg-white shadow-sm ring-1 ring-black/5">
                    {module.icon}
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-slate-900 text-center">{module.title}</h3>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-wide mt-1 text-center">{module.desc}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* --- ULUSAL SINAVLAR --- */}
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
                  const isActive = num <= exam.activeLimit;

                  if (isActive) {
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
                  }

                  return (
                    <div
                      key={num}
                      className="relative flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed overflow-hidden"
                      title="Bu test yakında eklenecektir."
                    >
                      <div className="mb-1.5 opacity-40">
                        <Lock className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="text-xs font-bold opacity-40">
                        {num}. Deneme
                      </span>
                    </div>
                  );
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
              YKS, KPSS, TUS, DUS ve şimdi <strong>IELTS</strong> ile dünya standartlarında ölçme ve değerlendirme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Hızlı ve Modern Arayüz</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dikkat dağıtıcı reklamlardan arındırılmış, sadece başarı odaklı tasarım.
              </p>
            </div>

            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Akıllı Analiz</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yanlış yaptığınız sorular "Hatalarım" bölümünde birikir, tekrar etmeniz için saklanır.
              </p>
            </div>

            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Global Standartlar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Türkiye'nin ulusal sınavlarının yanında artık global geçerliliği olan IELTS sınavlarına da hazırlanın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm mb-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-500" /> TestDünya
            </h4>
            <p className="leading-relaxed mb-4 max-w-sm">
              Türkiye'nin en kapsamlı ücretsiz online sınav hazırlık platformu.
              TYT, AYT, KPSS, TUS, DUS ve <strong>IELTS</strong> sınavlarına hazırlanan öğrenciler için
              özenle hazırlanmış özgün deneme sınavları.
            </p>
            <p className="text-xs opacity-50">&copy; 2025 TestDünya. Tüm hakları saklıdır.</p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Sınavlar</h5>
            <ul className="space-y-2">
              <li><Link href="#exams" className="hover:text-white transition-colors">IELTS Academic</Link></li>
              <li><Link href="#exams" className="hover:text-white transition-colors">YKS (TYT-AYT)</Link></li>
              <li><Link href="#exams" className="hover:text-white transition-colors">TUS Denemeleri</Link></li>
              <li><Link href="#exams" className="hover:text-white transition-colors">DUS Denemeleri</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Hızlı Bağlantılar</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/mistakes" className="hover:text-white transition-colors">Hata Analizi</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="flex justify-center border-t border-slate-800 pt-8 mt-8">
          <Link
            href="/iletisim"
            className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-indigo-900/50 font-bold text-lg"
          >
            <span className="text-2xl">💬</span>
            <span>Bizimle İletişime Geçin</span>
          </Link>
        </div>
      </footer>

      {/* --- YUKARI ÇIK --- */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-[999] bg-indigo-600 text-white p-3 rounded-full shadow-xl hover:bg-indigo-700 transition-all border-2 border-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

    </main>
  );
}