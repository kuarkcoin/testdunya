'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { questions5 } from '../data/questions5';

// -------------------- TİPLER --------------------
type ViewState = 'subject-select' | 'term-select' | 'quiz' | 'result';

interface Subject {
  id: string;
  label: string;
  icon: string;
  gradient: string;
  desc: string;
}

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Grade5Page() {
  const [view, setView] = useState<ViewState>('subject-select');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTerm, setSelectedTerm] = useState<number>(1);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  const { width, height } = useWindowSize();

  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Basic Grammar' },
    { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Dünya, Güneş ve Canlılar' },
  ];

  // ✅ SORU SEÇİMİ: Sadece test başladığında 20 soru seçer ve sabitler
  const quizQuestions = useMemo(() => {
    if (view === 'subject-select' || view === 'term-select') return [];
    
    const filtered = questions5.filter(q => q.subject === selectedSubject && q.term === selectedTerm);
    return [...filtered].sort(() => Math.random() - 0.5).slice(0, 20);
  }, [selectedSubject, selectedTerm, view === 'quiz']);

  const startQuiz = (term: number) => {
    setSelectedTerm(term);
    setAnswers({});
    setCurrentIdx(0);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    const total = quizQuestions.length;
    return { correct, total, percent: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [answers, quizQuestions]);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-20 selection:bg-indigo-500/30">
      {view === 'result' && resultData.percent >= 80 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      <div className="max-w-5xl mx-auto px-4 pt-10">
        
        {/* NAVİGASYON */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-sm font-black text-slate-500 hover:text-white transition-all tracking-widest">← EXIT</Link>
          {view !== 'subject-select' && (
            <button onClick={() => setView('subject-select')} className="text-[10px] font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl uppercase tracking-tighter hover:bg-white/10 transition-all">Change Subject</button>
          )}
        </div>

        {/* 1. DERS SEÇİMİ */}
        {view === 'subject-select' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">5. Sınıf Paneli</h1>
              <p className="text-slate-400 text-lg uppercase tracking-[0.2em] font-medium">Lütfen bir ders seçiniz</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map(s => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${s.gradient} p-10 text-left transition-all hover:scale-[1.02] shadow-2xl`}>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-5xl mb-6 bg-white/20 w-20 h-20 flex items-center justify-center rounded-3xl backdrop-blur-xl shadow-inner">{s.icon}</div>
                      <h2 className="text-4xl font-black tracking-tight">{s.label}</h2>
                      <p className="text-white/80 mt-2 font-medium">{s.desc}</p>
                    </div>
                  </div>
                  <div className="absolute -right-8 -bottom-8 text-[12rem] opacity-10 font-black grayscale">{s.icon}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. DÖNEM SEÇİMİ */}
        {view === 'term-select' && (
          <div className="max-w-2xl mx-auto py-10 animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900/50 border border-white/10 p-12 rounded-[3.5rem] text-center space-y-10 shadow-2xl backdrop-blur-md">
              <h2 className="text-5xl font-black capitalize tracking-tighter">{selectedSubject}</h2>
              <div className="grid gap-4">
                <button onClick={() => startQuiz(1)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-indigo-600 transition-all flex items-center justify-between text-2xl font-black">1. Dönem Konuları 🚀</button>
                <button onClick={() => startQuiz(2)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-fuchsia-600 transition-all flex items-center justify-between text-2xl font-black">2. Dönem Konuları 🔥</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TEST EKRANI */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <div className="flex justify-between items-end px-1"><span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400">{selectedSubject}</span><span className="text-sm font-mono font-bold">{currentIdx + 1} / {quizQuestions.length}</span></div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-700" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} /></div>
            </div>
            <div className="bg-slate-900/40 border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl space-y-12 backdrop-blur-sm">
              <h3 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-white">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-4">
                {quizQuestions[currentIdx].options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(i)} className={`group p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-6 ${answers[currentIdx] === i ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-white/5 bg-slate-950/40 hover:border-white/20 text-slate-400'}`}>
                    <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center font-black transition-all ${answers[currentIdx] === i ? 'bg-indigo-500 border-indigo-400 text-white rotate-12' : 'border-white/10 text-slate-600'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-xl font-medium tracking-tight">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center px-4">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0} className="text-slate-500 font-bold hover:text-white disabled:opacity-0 transition-all text-xs tracking-widest uppercase">Previous</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => setView('result')} disabled={answers[currentIdx] === undefined} className="px-14 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl shadow-emerald-900/20 active:scale-95 disabled:opacity-50">FINISH TEST</button>
              ) : (
                <button onClick={() => setCurrentIdx(p => p + 1)} disabled={answers[currentIdx] === undefined} className="px-14 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl shadow-indigo-900/20 active:scale-95 disabled:opacity-50">NEXT QUESTION →</button>
              )}
            </div>
          </div>
        )}

        {/* 4. SONUÇ VE ANALİZ EKRANI (EN BÜYÜK BÖLÜM) */}
        {view === 'result' && (
          <div className="max-w-3xl mx-auto space-y-10 animate-in zoom-in-95 duration-500 pb-20">
            <div className="bg-slate-900/80 border border-white/10 p-12 rounded-[4rem] text-center space-y-10 shadow-2xl backdrop-blur-2xl">
              <div className="space-y-4">
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em]">Assessment Report</h2>
                <h3 className="text-5xl font-black tracking-tighter">Test Completed!</h3>
              </div>

              <div className="relative inline-flex items-center justify-center p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full">
                <div className="bg-slate-950 rounded-full px-20 py-14">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200">{resultData.percent}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Score</p>
                  <p className="text-4xl font-black text-emerald-400">{resultData.correct} <span className="text-sm text-slate-600">/ {resultData.total}</span></p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Subject</p>
                  <p className="text-3xl font-black capitalize tracking-tighter">{selectedSubject}</p>
                </div>
              </div>

              {/* --- DETAYLI SORU ANALİZİ (REVIEW) --- */}
              <div className="text-left space-y-8 pt-10 border-t border-white/5">
                <h4 className="text-2xl font-black text-white flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center">🔍</span>
                  Detailed Analysis
                </h4>
                
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {quizQuestions.map((q, i) => {
                    const isCorrect = answers[i] === q.correct;
                    return (
                      <div key={q.id} className={`p-6 md:p-8 rounded-[2.5rem] border-2 transition-all ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                        <div className="flex gap-6">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 shadow-lg ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>{i + 1}</div>
                          <div className="space-y-5 w-full">
                            <p className="font-bold text-xl md:text-2xl text-slate-100 leading-snug">{q.prompt}</p>
                            <div className="flex flex-wrap gap-3">
                              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-xl text-sm font-bold border border-emerald-500/20">✓ Correct: {q.options[q.correct]}</span>
                              {!isCorrect && <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl text-sm font-bold border border-red-500/20">✗ Your Answer: {answers[i] !== undefined ? q.options[answers[i]] : 'Skipped'}</span>}
                            </div>
                            <div className="bg-black/40 p-6 rounded-3xl border border-white/5 space-y-2">
                              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1">💡 Solution & Explanation</p>
                              <p className="text-slate-400 italic leading-relaxed text-base md:text-lg">{q.explanation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-8">
                <button onClick={() => setView('subject-select')} className="w-full py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all shadow-2xl active:scale-95">START NEW SUBJECT</button>
                <button onClick={() => { setView('quiz'); setAnswers({}); setCurrentIdx(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-full py-6 bg-slate-800 text-white rounded-[2rem] font-black text-xl hover:bg-slate-700 transition-all">RETAKE THIS TEST</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
