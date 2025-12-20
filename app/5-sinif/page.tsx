'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';

// VERİ IMPORTLARI
import { matematikData } from '../data/grade5/matematik';
import { turkceData } from '../data/grade5/turkce';
import { fenData } from '../data/grade5/fen';
import { ingilizceData } from '../data/grade5/ingilizce';

// -------------------- TİPLER --------------------
type ViewState = 'subject-select' | 'term-select' | 'test-select' | 'quiz' | 'result';
type SubjectId = 'matematik' | 'turkce' | 'ingilizce' | 'fen';

interface Subject {
  id: SubjectId;
  label: string;
  icon: string;
  gradient: string;
  desc: string;
}

const allQuestions5 = {
  matematik: matematikData,
  turkce: turkceData,
  fen: fenData,
  ingilizce: ingilizceData
};

const Icons = {
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  )
};

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Grade5Page() {
  const [view, setView] = useState<ViewState>('subject-select');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | ''>('');
  const [selectedTerm, setSelectedTerm] = useState<1 | 2>(1);
  const [selectedTestNo, setSelectedTestNo] = useState<number>(1);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const { width, height } = useWindowSize();

  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Grammar' },
    { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Dünya, Güneş ve Canlılar' },
  ];

  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => { if (answers[i] === q.correct) correct++; });
    const total = quizQuestions.length;
    return { correct, total, percent: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [answers, quizQuestions]);

  const handleAIFeedback = async () => {
    if (view !== 'result') return;
    const mistakes = quizQuestions
      .filter((q, i) => answers[i] !== q.correct)
      .map(q => ({ prompt: q.prompt, explanation: q.explanation }));

    setLoadingAi(true);
    try {
      const res = await fetch('/api/analyze-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: selectedSubject,
          score: resultData.correct,
          total: resultData.total,
          mistakes: mistakes
        })
      });
      const data = await res.json();
      setAiFeedback(data.feedback || "Analiz tamamlandı.");
    } catch (e) {
      setAiFeedback("Analiz şu an hazırlanamadı ama detaylı çözümler aşağıdadır.");
    } finally {
      setLoadingAi(false);
    }
  };

  useEffect(() => {
    if (view === 'result') handleAIFeedback();
  }, [view]);

  const startQuiz = (testNo: number) => {
    const termKey = `term${selectedTerm}` as 'term1' | 'term2';
    const testKey = `test${testNo}`;
    // @ts-ignore
    const data = allQuestions5[selectedSubject][termKey][testKey];

    if (data && data.length > 0) {
      setQuizQuestions(data);
      setSelectedTestNo(testNo);
      setAnswers({});
      setCurrentIdx(0);
      setView('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert("Bu test henüz hazırlanıyor!");
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans pb-20 overflow-x-hidden relative">
      
      {/* Arka plan derinlik gradyanı */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-slate-900 to-slate-900 -z-10" />

      {view === 'result' && resultData.percent >= 80 && width > 0 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      {/* max-w-7xl: Yanlardaki basıklığı çözer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-10">
        
        {/* Navigasyon */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">← Ana Sayfa</Link>
          {view !== 'subject-select' && (
            <button onClick={() => setView('subject-select')} className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl hover:bg-white/10 transition-all font-black text-xs uppercase shadow-lg">Ders Değiştir</button>
          )}
        </div>

        {/* 1. DERS SEÇİMİ */}
        {view === 'subject-select' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <header className="text-center space-y-4">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white">5. Sınıf <span className="text-indigo-500">Test Paneli</span></h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium">Başarıya giden yolda ilk adımı seç!</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[3rem] bg-gradient-to-br ${s.gradient} p-10 text-left transition-all hover:scale-[1.03] shadow-xl`}>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 bg-white/20 w-20 h-20 flex items-center justify-center rounded-3xl border border-white/20">{s.icon}</div>
                    <h2 className="text-4xl font-black text-white">{s.label}</h2>
                    <p className="text-white/90 mt-2 font-bold text-lg">{s.desc}</p>
                    <div className="mt-10 inline-flex items-center gap-3 font-black text-sm bg-black/20 px-5 py-3 rounded-2xl group-hover:bg-black/30 transition-all text-white">Konuları Keşfet ➔</div>
                  </div>
                  <div className="absolute -right-6 -bottom-6 text-[12rem] opacity-10 font-black group-hover:scale-110 transition-transform">{s.icon}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. DÖNEM SEÇİMİ */}
        {view === 'term-select' && (
          <div className="max-w-4xl mx-auto py-12 animate-in zoom-in-95 duration-500">
            <div className="bg-slate-800 border border-white/5 p-12 rounded-[4rem] text-center shadow-2xl space-y-10">
              <div className="space-y-3">
                <h2 className="text-5xl font-black capitalize text-indigo-400">{selectedSubject}</h2>
                <p className="text-slate-300 text-lg">Hangi dönemin testlerini çözmek istersin?</p>
              </div>
              <div className="grid gap-6">
                <button onClick={() => { setSelectedTerm(1); setView('test-select'); }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-indigo-600 transition-all flex justify-between items-center"><span className="text-3xl font-black text-white">1. Dönem</span><span className="text-4xl">🚀</span></button>
                <button onClick={() => { setSelectedTerm(2); setView('test-select'); }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-fuchsia-600 transition-all flex justify-between items-center"><span className="text-3xl font-black text-white">2. Dönem</span><span className="text-4xl">🔥</span></button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TEST SEÇİMİ */}
        {view === 'test-select' && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-12">
            <header className="text-center">
               <h2 className="text-5xl md:text-6xl font-black tracking-tighter capitalize text-white">{selectedSubject}</h2>
               <p className="text-indigo-400 font-black uppercase tracking-widest text-sm mt-2">{selectedTerm}. Dönem Test Listesi</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => startQuiz(num)}
                  className="group relative bg-slate-800 border border-white/10 p-10 rounded-[2.5rem] hover:border-indigo-500 hover:scale-105 transition-all shadow-xl flex flex-col items-center gap-2 overflow-hidden"
                >
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Test</span>
                  <span className="text-5xl font-black text-white">{num}</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>
            <div className="text-center">
               <button onClick={() => setView('term-select')} className="text-slate-500 hover:text-white font-black uppercase text-xs">← Dönem Seçimine Dön</button>
            </div>
          </div>
        )}

        {/* 4. QUIZ EKRANI */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <div className="flex justify-between items-end px-2">
                <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">{selectedSubject} - Test {selectedTestNo}</span>
                <span className="text-lg font-mono font-black text-indigo-500">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-700" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>

            <div className="bg-slate-800 border border-white/10 p-12 md:p-16 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-12">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-5">
                {quizQuestions[currentIdx].options.map((opt: string, i: number) => (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} className={`p-8 rounded-[2rem] border-2 text-left transition-all flex items-center gap-6 ${answers[currentIdx] === i ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-white/5 bg-slate-900/50 text-slate-400 hover:border-white/20'}`}>
                    <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center font-black text-xl ${answers[currentIdx] === i ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-white/10'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-xl font-semibold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 px-4 pb-8">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0} className="text-slate-500 font-black hover:text-white disabled:opacity-0 transition-colors uppercase text-sm">← Geri</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => { setView('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-16 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">BİTİR</button>
              ) : (
                <button onClick={() => { setCurrentIdx(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-16 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">SIRADAKİ ➔</button>
              )}
            </div>
          </div>
        )}

        {/* 5. SONUÇ VE AI ANALİZİ */}
        {view === 'result' && (
          <div className="max-w-6xl mx-auto space-y-12 animate-in zoom-in-95 duration-700 pb-20">
            <div className="bg-slate-800 border border-white/10 p-12 md:p-20 rounded-[4rem] text-center shadow-2xl relative space-y-12">
              <div className="space-y-4">
                <h2 className="text-indigo-400 font-black uppercase tracking-widest text-xs">Test Raporu</h2>
                <h3 className="text-6xl font-black tracking-tighter text-white">Sonuçların Hazır!</h3>
              </div>

              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-2xl">
                <div className="bg-slate-950 rounded-full px-24 py-16">
                  <span className="text-7xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200 leading-none">{resultData.percent}%</span>
                </div>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 p-10 rounded-[3.5rem] text-left relative overflow-hidden group">
                <div className="flex items-center gap-5 mb-8">
                  <div className="bg-indigo-600 text-white p-4 rounded-3xl text-3xl animate-bounce-slow">🤖</div>
                  <div>
                    <h4 className="font-black text-indigo-400 uppercase text-xs tracking-widest">TestDünya AI</h4>
                    <span className="text-white font-black text-2xl tracking-tight">Rehber Öğretmen</span>
                  </div>
                </div>
                {loadingAi ? (
                  <p className="text-indigo-400 font-black italic flex items-center gap-3"><span className="animate-spin text-2xl">🌀</span> Yanlışlarını inceliyorum...</p>
                ) : (
                  <p className="text-indigo-50 text-2xl leading-relaxed italic font-semibold">"{aiFeedback}"</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5">
                  <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest mb-3">Doğru</p>
                  <p className="text-6xl font-black text-emerald-400">{resultData.correct} <span className="text-xl text-slate-600">/ {resultData.total}</span></p>
                </div>
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5">
                  <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest mb-3">Test Bilgisi</p>
                  <p className="text-3xl font-black capitalize text-indigo-200 truncate">{selectedSubject} T{selectedTestNo}</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-6">
                <button onClick={() => setView('subject-select')} className="py-8 bg-white text-slate-950 rounded-[2.5rem] font-black text-2xl hover:bg-slate-200 transition-all shadow-2xl">YENİ DERS SEÇ</button>
                <button onClick={() => setView('test-select')} className="py-8 bg-slate-700 text-white rounded-[2.5rem] font-black text-2xl hover:bg-slate-600 transition-all shadow-2xl">DİĞER TESTLER</button>
              </div>
            </div>
            
            <div className="space-y-8 border-t border-white/10 pt-16 text-left">
                <h4 className="text-4xl font-black text-white px-4">Soru Detayları</h4>
                {quizQuestions.map((q, i) => (
                  <div key={q.id} className={`p-10 md:p-14 rounded-[3.5rem] border-2 ${answers[i] === q.correct ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                    <div className="flex gap-10">
                        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center font-black text-2xl shrink-0 ${answers[i] === q.correct ? 'bg-emerald-500' : 'bg-red-500'}`}>{i + 1}</div>
                        <div className="space-y-6 w-full">
                          <p className="font-bold text-3xl text-slate-100">{q.prompt}</p>
                          <p className="text-emerald-400 font-bold">Doğru Cevap: {q.options[q.correct]}</p>
                          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5">
                            <p className="text-slate-400 italic text-xl">💡 {q.explanation}</p>
                          </div>
                        </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(-8%); } 50% { transform: translateY(0); } }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        body { overflow-x: hidden; }
      `}</style>
    </main>
  );
}
