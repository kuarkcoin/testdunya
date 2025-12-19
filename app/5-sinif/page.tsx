'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { questions5 } from '../data/questions5';

// -------------------- TİPLER VE İKONLAR --------------------
type ViewState = 'subject-select' | 'term-select' | 'quiz' | 'result';
type SubjectId = 'matematik' | 'turkce' | 'ingilizce' | 'fen';

const Icons = {
  Brain: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
};

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
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | ''>('');
  const [selectedTerm, setSelectedTerm] = useState<1 | 2>(1);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const { width, height } = useWindowSize();

  const subjects = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Basic Grammar' },
    { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Dünya, Güneş ve Canlılar' },
  ];

  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => { if (answers[i] === q.correct) correct++; });
    const total = quizQuestions.length;
    return { correct, total, percent: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [answers, quizQuestions]);

  // --- ZEKİ ANALİZ TETİKLEYİCİ ---
  const handleAIFeedback = async () => {
    const mistakes = quizQuestions
      .filter((q, i) => answers[i] !== q.correct)
      .map(q => ({ prompt: q.prompt, explanation: q.explanation }));

    if (mistakes.length === 0) {
      setAiFeedback("Mükemmel! Hiç hata yapmadın. Bu konuyu tamamen kavramış görünüyorsun. 🚀");
      return;
    }

    setLoadingAi(true);
    try {
      const response = await fetch('/api/analyze-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: selectedSubject,
          score: resultData.correct,
          total: resultData.total,
          mistakes: mistakes
        }),
      });
      const data = await response.json();
      setAiFeedback(data.feedback);
    } catch (e) {
      setAiFeedback("Hatalarını analiz ederken bir sorun oldu ama gayretin müthiş!");
    } finally {
      setLoadingAi(false);
    }
  };

  useEffect(() => {
    if (view === 'result') handleAIFeedback();
  }, [view]);

  const startQuiz = (term: 1 | 2) => {
    const filtered = questions5.filter((q: any) => q.subject === selectedSubject && q.term === term);
    setQuizQuestions(filtered.sort(() => 0.5 - Math.random()).slice(0, 20));
    setAnswers({});
    setCurrentIdx(0);
    setView('quiz');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-20">
      {view === 'result' && resultData.percent >= 80 && <ReactConfetti width={width} height={height} />}

      <div className="max-w-5xl mx-auto px-4 pt-10">
        {/* --- HEADER --- */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">← Ana Sayfa</Link>
          {view !== 'subject-select' && <button onClick={() => setView('subject-select')} className="text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-xl">Ders Değiştir</button>}
        </div>

        {/* --- DERS SEÇİMİ --- */}
        {view === 'subject-select' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {subjects.map(s => (
               <button key={s.id} onClick={() => { setSelectedSubject(s.id as SubjectId); setView('term-select'); }} className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.gradient} p-8 text-left transition-all hover:scale-105`}>
                 <div className="text-5xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-2xl">{s.icon}</div>
                 <h2 className="text-3xl font-black">{s.label}</h2>
                 <p className="text-white/80 mt-1">{s.desc}</p>
                 <div className="absolute -right-4 -bottom-4 text-9xl opacity-10 font-black">{s.icon}</div>
               </button>
             ))}
          </div>
        )}

        {/* --- DÖNEM SEÇİMİ --- */}
        {view === 'term-select' && (
          <div className="max-w-xl mx-auto py-10">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] text-center space-y-6">
              <h2 className="text-4xl font-black capitalize">{selectedSubject}</h2>
              <div className="grid gap-4">
                <button onClick={() => startQuiz(1)} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 transition-all font-bold">1. Dönem Konuları 🚀</button>
                <button onClick={() => startQuiz(2)} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-fuchsia-600 transition-all font-bold">2. Dönem Konuları 🔥</button>
              </div>
            </div>
          </div>
        )}

        {/* --- TEST EKRANI --- */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-10">
              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-4">
                {quizQuestions[currentIdx].options.map((opt: string, i: number) => (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} className={`p-6 rounded-2xl border-2 text-left transition-all ${answers[currentIdx] === i ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/5 bg-slate-950/50'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} className="text-slate-500">← Geri</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => setView('result')} disabled={answers[currentIdx] === undefined} className="px-10 py-4 bg-emerald-600 rounded-2xl font-black">TESTİ BİTİR</button>
              ) : (
                <button onClick={() => setCurrentIdx(p => p + 1)} disabled={answers[currentIdx] === undefined} className="px-10 py-4 bg-indigo-600 rounded-2xl font-black">SONRAKİ →</button>
              )}
            </div>
          </div>
        )}

        {/* --- SONUÇ EKRANI --- */}
        {view === 'result' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <div className="bg-slate-900 border border-white/10 p-12 rounded-[4rem] text-center space-y-8 shadow-2xl">
              <div className="text-8xl font-black text-indigo-500">{resultData.percent}%</div>
              
              {/* --- YAPAY ZEKA ANALİZ KUTUSU --- */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 p-8 rounded-[2.5rem] text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Icons.Brain /></div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-500 p-2 rounded-lg text-lg">🤖</span>
                  <span className="font-black text-indigo-400 uppercase text-xs tracking-widest">Rehber Öğretmen Analizi</span>
                </div>
                {loadingAi ? (
                  <p className="animate-pulse text-slate-400">Yanlışlarını okuyorum, sana özel bir rapor hazırlıyorum...</p>
                ) : (
                  <p className="text-indigo-100 leading-relaxed italic text-lg leading-relaxed">"{aiFeedback}"</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-6 rounded-3xl"><b>{resultData.correct}/{resultData.total}</b><br/><span className="text-xs text-slate-500">Puan</span></div>
                 <div className="bg-white/5 p-6 rounded-3xl capitalize"><b>{selectedSubject}</b><br/><span className="text-xs text-slate-500">Ders</span></div>
              </div>

              <button onClick={() => setView('subject-select')} className="w-full py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl transition-transform hover:scale-105">BAŞKA DERSE GEÇ</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
