'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  const quizTopRef = useRef<HTMLDivElement>(null);

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

  const scrollToTop = () => {
    setTimeout(() => {
      quizTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

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
      setAiFeedback("Yapay zeka analizine şu an ulaşılamıyor.");
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
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 overflow-x-hidden relative">
      {view === 'result' && resultData.percent >= 80 && width > 0 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      {/* max-w-7xl: Yanlardaki basıklığı tamamen giderdik */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-10">
        
        {/* Üst Navigasyon */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link href="/" className="text-slate-400 hover:text-indigo-600 font-bold transition-colors">← Ana Sayfa</Link>
          {view !== 'subject-select' && (
            <button onClick={() => setView('subject-select')} className="bg-white border border-slate-200 px-6 py-2.5 rounded-2xl hover:bg-slate-50 transition-all font-black text-xs uppercase shadow-sm">Ders Değiştir</button>
          )}
        </div>

        {/* 1. DERS SEÇİMİ */}
        {view === 'subject-select' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <header className="text-center space-y-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900">5. Sınıf <span className="text-indigo-600">Test Paneli</span></h1>
              <p className="text-slate-500 text-lg md:text-xl font-medium italic">Yapay Zeka Rehber Öğretmen Desteğiyle Başarıyı Yakala!</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[3rem] bg-gradient-to-br ${s.gradient} p-10 text-left transition-all hover:scale-[1.03] shadow-xl`}>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 bg-white/20 w-24 h-24 flex items-center justify-center rounded-3xl border border-white/20">{s.icon}</div>
                    <h2 className="text-5xl font-black text-white">{s.label}</h2>
                    <p className="text-white/90 mt-2 font-bold text-xl">{s.desc}</p>
                    <div className="mt-10 inline-flex items-center gap-3 font-black text-sm bg-black/20 px-6 py-4 rounded-2xl group-hover:bg-black/30 transition-all text-white">Çözmeye Başla ➔</div>
                  </div>
                  <div className="absolute -right-6 -bottom-6 text-[14rem] opacity-10 font-black group-hover:scale-110 transition-transform">{s.icon}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. DÖNEM SEÇİMİ */}
        {view === 'term-select' && (
          <div className="max-w-4xl mx-auto py-12 animate-in zoom-in-95 duration-500">
            <div className="bg-white border border-slate-200 p-8 md:p-16 rounded-[4rem] text-center shadow-2xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-6xl font-black capitalize text-indigo-600">{selectedSubject}</h2>
                <p className="text-slate-500 text-xl font-medium">Hangi dönemin müfredatını çalışmak istersin?</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <button onClick={() => { setSelectedTerm(1); setView('test-select'); }} className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-indigo-600 hover:text-white transition-all flex flex-col items-center gap-4 group shadow-sm hover:shadow-indigo-200">
                  <span className="text-5xl">🚀</span>
                  <span className="text-3xl font-black">1. Dönem</span>
                </button>
                <button onClick={() => { setSelectedTerm(2); setView('test-select'); }} className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-fuchsia-600 hover:text-white transition-all flex flex-col items-center gap-4 group shadow-sm hover:shadow-fuchsia-200">
                  <span className="text-5xl">🔥</span>
                  <span className="text-3xl font-black">2. Dönem</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TEST SEÇİMİ */}
        {view === 'test-select' && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-12">
            <header className="text-center">
               <h2 className="text-6xl md:text-7xl font-black tracking-tighter capitalize text-slate-900">{selectedSubject}</h2>
               <p className="text-indigo-600 font-black uppercase tracking-widest text-sm mt-4">{selectedTerm}. Dönem - Bir Test Seviyesi Seç</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => startQuiz(num)}
                  className="group relative bg-white border border-slate-200 p-12 rounded-[2.5rem] hover:border-indigo-500 hover:scale-105 transition-all shadow-md flex flex-col items-center gap-2 overflow-hidden"
                >
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Seviye</span>
                  <span className="text-6xl font-black text-slate-900">{num}</span>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 4. QUIZ EKRANI */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* KAYDIRMA NOKTASI */}
            <div ref={quizTopRef} className="scroll-mt-24" />

            <div className="space-y-4 px-2">
              <div className="flex justify-between items-end">
                <span className="text-xs font-black uppercase text-indigo-600 tracking-widest">{selectedSubject} - Test {selectedTestNo}</span>
                <span className="text-2xl font-mono font-black text-slate-400">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 transition-all duration-700 ease-out" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 md:p-20 rounded-[3rem] shadow-2xl shadow-indigo-100/30 relative overflow-hidden min-h-[500px] flex flex-col">
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-800 mb-16">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-5 mt-auto">
                {quizQuestions[currentIdx].options.map((opt: string, i: number) => (
                  <button key={i} onClick={() => { setAnswers(prev => ({ ...prev, [currentIdx]: i })); scrollToTop(); }} className={`p-8 md:p-10 rounded-[2rem] border-2 text-left transition-all flex items-center gap-8 group ${answers[currentIdx] === i ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-lg shadow-indigo-100' : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-white'}`}>
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 flex items-center justify-center font-black text-2xl transition-all ${answers[currentIdx] === i ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-400'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-xl md:text-2xl font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 px-4 pb-12 mt-4">
              <button onClick={() => { setCurrentIdx(p => Math.max(0, p - 1)); scrollToTop(); }} disabled={currentIdx === 0} className="text-slate-400 font-bold hover:text-slate-600 disabled:opacity-0 transition-colors uppercase text-sm tracking-widest px-8 py-4">← Geri</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => { setView('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-20 py-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2.5rem] font-black text-2xl shadow-xl transition-all hover:scale-105 active:scale-95">TESTİ BİTİR</button>
              ) : (
                <button onClick={() => { setCurrentIdx(p => p + 1); scrollToTop(); }} disabled={answers[currentIdx] === undefined} className="px-20 py-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2.5rem] font-black text-2xl shadow-xl transition-all hover:scale-105 active:scale-95">SIRADAKİ SORU ➔</button>
              )}
            </div>
          </div>
        )}

        {/* 5. SONUÇ VE AI ANALİZİ */}
        {view === 'result' && (
          <div className="max-w-7xl mx-auto space-y-16 animate-in zoom-in-95 duration-700 pb-20">
            <div className="bg-white border border-slate-200 p-10 md:p-24 rounded-[4rem] text-center shadow-2xl relative space-y-16">
              <div className="space-y-4">
                <h2 className="text-indigo-600 font-black uppercase tracking-widest text-sm">Başarı Analiz Raporu</h2>
                <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900">Harika İş Çıkardın!</h3>
              </div>

              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-2xl">
                <div className="bg-white rounded-full px-20 py-12 md:px-32 md:py-24">
                  <span className="text-8xl md:text-[14rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 leading-none">{resultData.percent}%</span>
                </div>
              </div>

              {/* AI ANALİZ KUTUSU */}
              <div className="bg-indigo-50 border border-indigo-100 p-8 md:p-14 rounded-[3.5rem] text-left relative overflow-hidden group shadow-inner">
                <div className="flex items-center gap-6 mb-10">
                  <div className="bg-indigo-600 text-white p-5 rounded-[2rem] text-4xl shadow-lg">🤖</div>
                  <div>
                    <h4 className="font-black text-indigo-600 uppercase text-xs tracking-widest">TestDünya AI Geri Bildirimi</h4>
                    <span className="text-slate-900 font-black text-3xl tracking-tight leading-none">Rehber Öğretmen Notu</span>
                  </div>
                </div>
                {loadingAi ? (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-indigo-200 rounded-full w-full"></div>
                    <div className="h-4 bg-indigo-200 rounded-full w-5/6"></div>
                    <p className="text-indigo-600 font-black italic flex items-center gap-3 pt-4"><span className="animate-spin text-3xl">🌀</span> Yanlışlarını inceliyorum...</p>
                  </div>
                ) : (
                  <p className="text-slate-700 text-2xl md:text-4xl leading-relaxed italic font-bold">"{aiFeedback}"</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-12">
                <div className="bg-slate-50 p-10 md:p-16 rounded-[3.5rem] border border-slate-100">
                  <p className="text-[12px] text-slate-400 font-black uppercase tracking-widest mb-4">Toplam Doğru</p>
                  <p className="text-6xl md:text-8xl font-black text-emerald-500">{resultData.correct} <span className="text-2xl text-slate-300">/ {resultData.total}</span></p>
                </div>
                <div className="bg-slate-50 p-10 md:p-16 rounded-[3.5rem] border border-slate-100 flex flex-col justify-center">
                  <p className="text-[12px] text-slate-400 font-black uppercase tracking-widest mb-4">Ders & Seviye</p>
                  <p className="text-3xl md:text-5xl font-black capitalize text-indigo-400 truncate">{selectedSubject} Lvl {selectedTestNo}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 pt-8">
                <button onClick={() => setView('subject-select')} className="w-full py-10 bg-slate-900 text-white rounded-[3rem] font-black text-3xl hover:bg-slate-800 transition-all shadow-2xl hover:scale-[1.02]">YENİ BİR DERS SEÇ</button>
                <button onClick={() => setView('test-select')} className="w-full py-10 bg-white border-4 border-slate-100 text-slate-600 rounded-[3rem] font-black text-3xl hover:bg-slate-50 transition-all shadow-xl">BAŞKA SEVİYEYE GEÇ</button>
              </div>
            </div>

            {/* SORU DETAYLARI ANALİZİ */}
            <div className="space-y-12 border-t-2 border-slate-100 pt-20 text-left">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6">
                  <h4 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">Detaylı Soru Analizi</h4>
                  <div className="bg-indigo-600 text-white px-8 py-4 rounded-[1.5rem] shadow-xl font-black uppercase text-sm tracking-widest">
                    {selectedSubject} Seviye {selectedTestNo}
                  </div>
                </div>

                <div className="grid gap-8">
                  {quizQuestions.map((q, i) => {
                    const userAnswer = answers[i];
                    const isCorrect = userAnswer === q.correct;
                    const isEmpty = userAnswer === undefined;

                    let cardBg = "border-emerald-200 bg-emerald-50/30"; 
                    let statusColor = "bg-emerald-500";
                    let statusLabel = "TAM DOĞRU";

                    if (isEmpty) {
                      cardBg = "border-amber-200 bg-amber-50/50";
                      statusColor = "bg-amber-500";
                      statusLabel = "BOŞ BIRAKILDI";
                    } else if (!isCorrect) {
                      cardBg = "border-rose-200 bg-rose-50/30";
                      statusColor = "bg-rose-500";
                      statusLabel = "YANLIŞ CEVAP";
                    }

                    return (
                      <div key={q.id} className={`p-8 md:p-16 rounded-[4rem] border-2 shadow-sm relative overflow-hidden transition-all hover:shadow-lg ${cardBg}`}>
                        <div className={`absolute top-0 right-0 px-10 py-3 rounded-bl-[2rem] font-black text-white text-xs tracking-widest shadow-md ${statusColor}`}>
                          {statusLabel}
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center font-black text-2xl md:text-3xl shrink-0 text-white shadow-xl ${statusColor}`}>{i + 1}</div>
                          <div className="space-y-8 w-full pt-2">
                            <p className="font-black text-2xl md:text-4xl text-slate-800 leading-[1.1] tracking-tight">{q.prompt}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {!isEmpty && !isCorrect && (
                                <div className="p-8 rounded-[2rem] bg-white/60 border border-rose-100 shadow-sm">
                                  <p className="text-xs font-black text-rose-400 uppercase tracking-widest mb-2">Senin Cevabın</p>
                                  <p className="text-rose-800 font-bold text-xl md:text-2xl">{q.options[userAnswer]}</p>
                                </div>
                              )}
                              <div className={`p-8 rounded-[2rem] bg-white/90 border shadow-md ${isEmpty ? 'border-amber-200' : 'border-emerald-100'}`}>
                                <p className={`text-xs font-black uppercase tracking-widest mb-2 ${isEmpty ? 'text-amber-500' : 'text-emerald-500'}`}>Olması Gereken Doğru</p>
                                <p className={`${isEmpty ? 'text-amber-800' : 'text-emerald-800'} font-bold text-xl md:text-2xl`}>{q.options[q.correct]}</p>
                              </div>
                            </div>

                            <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-inner group">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl group-hover:rotate-12 transition-transform">💡</span>
                                <span className="font-black text-indigo-600 text-xs uppercase tracking-[0.2em]">Öğretmen Çözüm Notu</span>
                              </div>
                              <p className="text-slate-600 italic text-xl md:text-2xl font-semibold leading-relaxed">{q.explanation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(-8%); } 50% { transform: translateY(0); } }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        body { overflow-x: hidden; scroll-behavior: smooth; }
      `}</style>
    </main>
  );
}
