'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { questions5 } from '../data/questions5';

// -------------------- TİPLER --------------------
type ViewState = 'subject-select' | 'term-select' | 'quiz' | 'result';
type SubjectId = 'matematik' | 'turkce' | 'ingilizce' | 'fen';

interface Subject {
  id: SubjectId;
  label: string;
  icon: string;
  gradient: string;
  desc: string;
}

type Q5 = {
  id: string;
  subject: SubjectId;
  term: 1 | 2;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
};

// -------------------- CİHAZ BOYUTU --------------------
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

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Grade5Page() {
  const [view, setView] = useState<ViewState>('subject-select');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | ''>('');
  const [selectedTerm, setSelectedTerm] = useState<1 | 2>(1);
  const [quizQuestions, setQuizQuestions] = useState<Q5[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  // --- AI FEEDBACK STATES ---
  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const { width, height } = useWindowSize();

  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'Ingilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Basic Grammar' },
    { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Dünya, Güneş ve Canlılar' },
  ];

  const normalizedBank: Q5[] = useMemo(() => {
    return (questions5 as any[]).map((q) => ({
      id: String(q.id),
      subject: q.subject as SubjectId,
      term: q.term as 1 | 2,
      prompt: String(q.prompt),
      options: Array.isArray(q.options) ? q.options : (q.optionsText || []),
      correct: Number(q.correct),
      explanation: String(q.explanation || ''),
    }));
  }, []);

  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    const total = quizQuestions.length;
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percent };
  }, [answers, quizQuestions]);

  // --- AI ANALYZE FUNCTION ---
  const getAIFeedback = async (questions: Q5[], userAnswers: Record<number, number>) => {
    setLoadingAi(true);
    const mistakes = questions
      .filter((q, i) => userAnswers[i] !== q.correct)
      .map(q => ({ prompt: q.prompt, explanation: q.explanation }));

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
      setAiFeedback(data.feedback);
    } catch (e) {
      setAiFeedback("Harika bir gayret! Hatalarını inceleyerek eksiklerini kapatabilirsin. Başarılar dilerim!");
    } finally {
      setLoadingAi(false);
    }
  };

  const startQuiz = (term: 1 | 2) => {
    if (!selectedSubject) return;
    setSelectedTerm(term);
    setAnswers({});
    setCurrentIdx(0);
    setAiFeedback('');
    const filtered = normalizedBank.filter((q) => q.subject === selectedSubject && q.term === term);
    const picked = shuffle(filtered).slice(0, 20);
    setQuizQuestions(picked);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToSubjectSelect = () => {
    setView('subject-select');
    setSelectedSubject('');
    setAiFeedback('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Test bittiğinde AI yorumunu tetikle
  useEffect(() => {
    if (view === 'result' && quizQuestions.length > 0) {
      getAIFeedback(quizQuestions, answers);
    }
  }, [view]);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-20">
      {view === 'result' && resultData.percent >= 80 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      <div className="max-w-5xl mx-auto px-4 pt-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">← Ana Sayfa</Link>
          {view !== 'subject-select' && (
            <button onClick={resetToSubjectSelect} className="text-xs font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors">Ders Değiştir</button>
          )}
        </div>

        {/* 1. DERS SEÇİMİ */}
        {view === 'subject-select' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="text-center space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter">5. Sınıf <span className="text-indigo-500">Ders Paneli</span></h1>
              <p className="text-slate-400 text-lg">Hangi dersi çalışmak istersin?</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.gradient} p-8 text-left transition-all hover:scale-[1.02] hover:shadow-2xl shadow-indigo-500/10`}>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-5xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-2xl backdrop-blur-md">{s.icon}</div>
                      <h2 className="text-3xl font-black tracking-tight">{s.label}</h2>
                      <p className="text-white/80 mt-1 font-medium">{s.desc}</p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 font-bold text-sm bg-black/20 w-fit px-4 py-2 rounded-full">Testleri Çöz ➔</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. DÖNEM SEÇİMİ */}
        {view === 'term-select' && (
          <div className="max-w-2xl mx-auto py-10 animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] text-center space-y-8 shadow-2xl">
              <h2 className="text-4xl font-black capitalize">{selectedSubject}</h2>
              <div className="grid gap-4">
                <button onClick={() => startQuiz(1)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-indigo-600 transition-all flex justify-between items-center"><span className="text-2xl font-black">1. Dönem</span><span>🚀</span></button>
                <button onClick={() => startQuiz(2)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-fuchsia-600 transition-all flex justify-between items-center"><span className="text-2xl font-black">2. Dönem</span><span>🔥</span></button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TEST EKRANI */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="space-y-3">
              <div className="flex justify-between items-end px-1">
                <span className="text-xs font-black uppercase text-indigo-400">{selectedSubject} • {selectedTerm}. Dönem</span>
                <span className="text-sm font-mono">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-10">
              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-4">
                {quizQuestions[currentIdx].options.map((opt, i) => (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} className={`group p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${answers[currentIdx] === i ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-white/5 bg-slate-950/50 text-slate-400'}`}>
                    <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black ${answers[currentIdx] === i ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-white/10'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-lg font-medium">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0} className="text-slate-500 font-bold disabled:opacity-0">← Geri</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => setView('result')} disabled={answers[currentIdx] === undefined} className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black shadow-xl disabled:opacity-50">BİTİR</button>
              ) : (
                <button onClick={() => { setCurrentIdx(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl disabled:opacity-50">SONRAKİ →</button>
              )}
            </div>
          </div>
        )}

        {/* 4. SONUÇ VE AI REHBERLİK */}
        {view === 'result' && (
          <div className="max-w-3xl mx-auto space-y-10 animate-in zoom-in-95 duration-500 pb-20">
            <div className="bg-slate-900/80 border border-white/10 p-10 rounded-[3rem] text-center shadow-2xl backdrop-blur-xl">
              <h2 className="text-4xl font-black mb-6">Test Tamamlandı!</h2>
              <div className="relative inline-flex items-center justify-center p-1 mb-8 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full">
                <div className="bg-slate-950 rounded-full px-16 py-10">
                  <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200">{resultData.percent}%</span>
                </div>
              </div>

              {/* --- AI TEACHER SECTION --- */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 p-6 rounded-[2rem] mb-8 text-left relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500 text-white p-2 rounded-lg text-lg">🤖</div>
                  <h4 className="font-black text-indigo-400 uppercase text-xs tracking-widest">AI Rehber Öğretmen</h4>
                </div>
                {loadingAi ? (
                  <p className="text-slate-400 italic animate-pulse">Yanlışlarını analiz ediyorum...</p>
                ) : (
                  <p className="text-indigo-100 italic text-lg leading-relaxed">"{aiFeedback || 'Hatalarını inceleyerek daha iyi olabilirsin!'}"</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Doğru</p>
                  <p className="text-3xl font-black text-emerald-400">{resultData.correct} / {resultData.total}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Ders</p>
                  <p className="text-2xl font-black capitalize">{selectedSubject}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={resetToSubjectSelect} className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200">YENİ DERS</button>
                <button onClick={() => { setAnswers({}); setCurrentIdx(0); setView('quiz'); setAiFeedback(''); }} className="w-full py-5 bg-slate-800 text-white rounded-2xl font-black text-lg">TEKRAR ÇÖZ</button>
              </div>
            </div>

            {/* SORU ANALİZ LİSTESİ */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black px-2">Soru Detayları</h3>
              {quizQuestions.map((q, i) => {
                const isCorrect = answers[i] === q.correct;
                return (
                  <div key={q.id} className={`p-6 rounded-[2rem] border-2 ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                    <div className="flex gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0 ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`}>{i + 1}</div>
                      <div className="space-y-3 w-full">
                        <p className="font-bold text-lg">{q.prompt}</p>
                        <div className="flex flex-wrap gap-2 text-sm font-bold">
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg">Doğru: {q.options[q.correct]}</span>
                          {!isCorrect && <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg">Senin Cevabın: {answers[i] !== undefined ? q.options[answers[i]] : 'Boş'}</span>}
                        </div>
                        <div className="bg-black/30 p-4 rounded-2xl border border-white/5 mt-2">
                          <p className="text-[10px] font-black text-indigo-400 uppercase mb-1 tracking-widest">💡 Çözüm</p>
                          <p className="text-slate-400 italic text-sm leading-relaxed">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
