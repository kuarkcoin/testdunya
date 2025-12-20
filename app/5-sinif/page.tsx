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
    // bg-slate-50: Artık daha ferah bir arka plan
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
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900">5. Sınıf <span className="text-indigo-600">Test Paneli</span></h1>
              <p className="text-slate-500 text-lg md:text-xl font-medium">Öğrenmeyi eğlenceli hale getiren AI destekli testler!</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[3rem] bg-gradient-to-br ${s.gradient} p-10 text-left transition-all hover:scale-[1.03] shadow-xl`}>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 bg-white/20 w-20 h-20 flex items-center justify-center rounded-3xl border border-white/20">{s.icon}</div>
                    <h2 className="text-4xl font-black text-white">{s.label}</h2>
                    <p className="text-white/90 mt-2 font-bold text-lg">{s.desc}</p>
                    <div className="mt-10 inline-flex items-center gap-3 font-black text-sm bg-black/20 px-5 py-3 rounded-2xl group-hover:bg-black/30 transition-all text-white">Keşfet ➔</div>
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
            <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] text-center shadow-2xl space-y-10">
              <div className="space-y-3">
                <h2 className="text-5xl font-black capitalize text-indigo-600">{selectedSubject}</h2>
                <p className="text-slate-500 text-lg">Hangi dönemin testlerini çözmek istersin?</p>
              </div>
              <div className="grid gap-6">
                <button onClick={() => { setSelectedTerm(1); setView('test-select'); }} className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-indigo-600 hover:text-white transition-all flex justify-between items-center group"><span className="text-3xl font-black">1. Dönem</span><span className="text-4xl transition-transform group-hover:scale-125">🚀</span></button>
                <button onClick={() => { setSelectedTerm(2); setView('test-select'); }} className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-fuchsia-600 hover:text-white transition-all flex justify-between items-center group"><span className="text-3xl font-black">2. Dönem</span><span className="text-4xl transition-transform group-hover:scale-125">🔥</span></button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TEST SEÇİMİ */}
        {view === 'test-select' && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-12">
            <header className="text-center">
               <h2 className="text-5xl md:text-6xl font-black tracking-tighter capitalize text-slate-900">{selectedSubject}</h2>
               <p className="text-indigo-600 font-black uppercase tracking-widest text-sm mt-2">{selectedTerm}. Dönem Test Listesi</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => startQuiz(num)}
                  className="group relative bg-white border border-slate-200 p-10 rounded-[2.5rem] hover:border-indigo-500 hover:scale-105 transition-all shadow-md flex flex-col items-center gap-2 overflow-hidden"
                >
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Test</span>
                  <span className="text-5xl font-black text-slate-900">{num}</span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 4. QUIZ EKRANI */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4 px-2">
              <div className="flex justify-between items-end">
                <span className="text-xs font-black uppercase text-indigo-600 tracking-widest">{selectedSubject} - Test {selectedTestNo}</span>
                <span className="text-xl font-mono font-black text-slate-400">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-700" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 md:p-16 rounded-[3rem] shadow-xl shadow-indigo-100/50 relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-800 mb-12">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-4">
                {quizQuestions[currentIdx].options.map((opt: string, i: number) => (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} className={`p-6 md:p-8 rounded-2xl md:rounded-[2rem] border-2 text-left transition-all flex items-center gap-6 group ${answers[currentIdx] === i ? 'border-indigo-600 bg-indigo-50 text-indigo-900' : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-white'}`}>
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border-2 flex items-center justify-center font-black text-xl transition-all ${answers[currentIdx] === i ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-400'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-lg md:text-xl font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 px-4 pb-12">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0} className="text-slate-400 font-bold hover:text-slate-600 disabled:opacity-0 transition-colors uppercase text-sm">← Geri</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => { setView('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-16 py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-black text-xl shadow-lg transition-all hover:scale-105">BİTİR</button>
              ) : (
                <button onClick={() => { setCurrentIdx(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-16 py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-xl shadow-lg transition-all hover:scale-105">SIRADAKİ ➔</button>
              )}
            </div>
          </div>
        )}

        {/* 5. SONUÇ VE AI ANALİZİ */}
        {view === 'result' && (
          <div className="max-w-7xl mx-auto space-y-12 animate-in zoom-in-95 duration-700 pb-20">
            <div className="bg-white border border-slate-200 p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] text-center shadow-2xl relative space-y-12">
              <div className="space-y-4">
                <h2 className="text-indigo-600 font-black uppercase tracking-widest text-xs">Test Raporu</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">Sonuçların Hazır!</h3>
              </div>

              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-2xl">
                <div className="bg-white rounded-full px-16 py-10 md:px-24 md:py-16">
                  <span className="text-7xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 leading-none">{resultData.percent}%</span>
                </div>
              </div>

              {/* AI KUTUSU */}
              <div className="bg-indigo-50 border border-indigo-100 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] text-left relative overflow-hidden group">
                <div className="flex items-center gap-4 md:gap-5 mb-8">
                  <div className="bg-indigo-600 text-white p-4 rounded-3xl text-3xl">🤖</div>
                  <div>
                    <h4 className="font-black text-indigo-600 uppercase text-xs tracking-widest">TestDünya AI Analizi</h4>
                    <span className="text-slate-900 font-black text-2xl tracking-tight">Kişisel Gelişim Notu</span>
                  </div>
                </div>
                {loadingAi ? (
                  <p className="text-indigo-600 font-black italic flex items-center gap-3"><span className="animate-spin text-2xl">🌀</span> Yanlışlarını inceliyorum...</p>
                ) : (
                  <p className="text-slate-700 text-xl md:text-2xl leading-relaxed italic font-medium">"{aiFeedback}"</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100">
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest mb-3">Doğru Sayısı</p>
                  <p className="text-5xl md:text-6xl font-black text-emerald-500">{resultData.correct} <span className="text-xl text-slate-300">/ {resultData.total}</span></p>
                </div>
                <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 flex flex-col justify-center">
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest mb-3">Ders Bilgisi</p>
                  <p className="text-2xl md:text-3xl font-black capitalize text-indigo-400 truncate">{selectedSubject} T{selectedTestNo}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 pt-6">
                <button onClick={() => setView('subject-select')} className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-2xl hover:bg-slate-800 transition-all shadow-xl">YENİ DERS SEÇ</button>
                <button onClick={() => setView('test-select')} className="w-full py-8 bg-white border-2 border-slate-200 text-slate-600 rounded-[2.5rem] font-black text-2xl hover:bg-slate-50 transition-all">DİĞER TESTLER</button>
              </div>
            </div>
            
            {/* SORU DETAYLARI - Yenilenmiş Görsel Geri Bildirim */}
            <div className="space-y-8 border-t border-slate-200 pt-16 text-left">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4">
                  <h4 className="text-3xl md:text-4xl font-black text-slate-800">Soru Detayları</h4>
                  <div className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-2xl shadow-lg">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Test Bilgisi:</span>
                    <span className="text-sm font-black uppercase">{selectedSubject} - T{selectedTestNo}</span>
                  </div>
                </div>

                <div className="grid gap-6">
                  {quizQuestions.map((q, i) => {
                    const userAnswer = answers[i];
                    const isCorrect = userAnswer === q.correct;
                    const isEmpty = userAnswer === undefined;

                    let cardBg = "border-emerald-200 bg-emerald-50/40"; // Doğru
                    let statusText = "DOĞRU";
                    let statusColor = "bg-emerald-500";

                    if (isEmpty) {
                      cardBg = "border-amber-300 bg-amber-50/80"; // Boş (Altın Sarısı)
                      statusText = "BOŞ GEÇİLDİ";
                      statusColor = "bg-amber-500";
                    } else if (!isCorrect) {
                      cardBg = "border-rose-200 bg-rose-50/40"; // Yanlış
                      statusText = "YANLIŞ";
                      statusColor = "bg-rose-500";
                    }

                    return (
                      <div key={q.id} className={`p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 shadow-sm relative overflow-hidden ${cardBg}`}>
                        <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-3xl font-black text-white text-[10px] tracking-tighter ${statusColor}`}>
                          {statusText}
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                          <div className={`w-12 md:w-16 h-12 md:h-16 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shrink-0 text-white shadow-lg ${statusColor}`}>{i + 1}</div>
                          <div className="space-y-6 w-full pt-2">
                            <p className="font-extrabold text-xl md:text-2xl text-slate-800 leading-tight">{q.prompt}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {!isEmpty && !isCorrect && (
                                <div className="p-5 rounded-3xl bg-white/60 border border-rose-100">
                                  <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Senin Seçeneğin</p>
                                  <p className="text-rose-700 font-bold text-lg">{q.options[userAnswer]}</p>
                                </div>
                              )}
                              <div className={`p-5 rounded-3xl bg-white/80 border ${isEmpty ? 'border-amber-200' : 'border-emerald-100'} shadow-sm`}>
                                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isEmpty ? 'text-amber-500' : 'text-emerald-500'}`}>Doğru Cevap</p>
                                <p className={`${isEmpty ? 'text-amber-700' : 'text-emerald-700'} font-bold text-lg`}>{q.options[q.correct]}</p>
                              </div>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-inner">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">💡</span>
                                <span className="font-black text-indigo-600 text-xs uppercase tracking-widest">Çözüm Rehberi</span>
                              </div>
                              <p className="text-slate-500 italic text-base md:text-xl font-medium leading-relaxed">{q.explanation}</p>
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
        body { overflow-x: hidden; }
      `}</style>
    </main>
  );
}
