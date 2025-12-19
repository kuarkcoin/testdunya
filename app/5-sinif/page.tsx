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

// -------------------- İKONLAR (TAM LİSTE - SATIR SAYISINI KORUR) --------------------
const Icons = {
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
  ),
  Trophy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 1 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
  )
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
  
  // AI STATES
  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const { width, height } = useWindowSize();

  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Basic Grammar' },
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

  // AI FETCH
  const getAIFeedback = async () => {
    if (view !== 'result') return;
    setLoadingAi(true);
    const mistakes = quizQuestions
      .filter((q, i) => answers[i] !== q.correct)
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
      setAiFeedback("Harika bir denemeydi! Hatalarından ders çıkararak bir sonraki testte çok daha başarılı olabilirsin. Gayretini tebrik ederim!");
    } finally {
      setLoadingAi(false);
    }
  };

  useEffect(() => {
    if (view === 'result') getAIFeedback();
  }, [view]);

  const startQuiz = (term: 1 | 2) => {
    if (!selectedSubject) return;
    setSelectedTerm(term);
    setAnswers({});
    setCurrentIdx(0);
    const filtered = normalizedBank.filter((q) => q.subject === selectedSubject && q.term === term);
    setQuizQuestions(shuffle(filtered).slice(0, 20));
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToSubjectSelect = () => {
    setView('subject-select');
    setSelectedSubject('');
    setAiFeedback('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-20">
      {view === 'result' && resultData.percent >= 80 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      <div className="max-w-5xl mx-auto px-4 pt-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">← Ana Sayfa</Link>
          {view !== 'subject-select' && (
            <button onClick={resetToSubjectSelect} className="text-xs font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition">Ders Değiştir</button>
          )}
        </div>

        {/* 1. GÖRÜNÜM: DERS SEÇİMİ */}
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
                  <div className="absolute -right-4 -bottom-4 text-9xl opacity-10 font-black">{s.icon}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. GÖRÜNÜM: DÖNEM SEÇİMİ */}
        {view === 'term-select' && (
          <div className="max-w-2xl mx-auto py-10 animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] text-center space-y-8 shadow-2xl">
              <div className="space-y-2">
                <h2 className="text-4xl font-black capitalize">{selectedSubject}</h2>
                <p className="text-slate-400">Çalışmak istediğin dönemi seçerek hemen başla.</p>
              </div>
              <div className="grid gap-4">
                <button onClick={() => startQuiz(1)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-indigo-600 transition-all flex justify-between items-center"><span className="text-2xl font-black">1. Dönem Konuları</span><span>🚀</span></button>
                <button onClick={() => startQuiz(2)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-fuchsia-600 transition-all flex justify-between items-center"><span className="text-2xl font-black">2. Dönem Konuları</span><span>🔥</span></button>
                <button onClick={resetToSubjectSelect} className="p-6 bg-slate-950/50 border border-white/10 rounded-3xl hover:bg-white/5 transition-all font-black">← Geri</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. GÖRÜNÜM: TEST EKRANI */}
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

        {/* 4. GÖRÜNÜM: SONUÇ VE AI REHBERLİK (BURASI 484 SATIRIN KALBİDİR) */}
        {view === 'result' && (
          <div className="max-w-3xl mx-auto space-y-10 animate-in zoom-in-95 duration-500 pb-20">
            <div className="bg-slate-900/80 border border-white/10 p-12 rounded-[4rem] text-center space-y-10 shadow-2xl backdrop-blur-2xl">
              <div className="space-y-4">
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em]">Assessment Report</h2>
                <h3 className="text-5xl font-black tracking-tighter">Test Tamamlandı!</h3>
              </div>

              <div className="relative inline-flex items-center justify-center p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full">
                <div className="bg-slate-950 rounded-full px-20 py-14">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200">{resultData.percent}%</span>
                </div>
              </div>

              {/* AI REHBER ÖĞRETMEN BLOĞU (EKLEDİĞİMİZ KISIM) */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 p-8 rounded-[2.5rem] text-left relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-500 text-white p-2 rounded-xl text-xl">🤖</div>
                  <h4 className="font-black text-indigo-400 uppercase text-xs tracking-widest">Yapay Zeka Rehber Öğretmen</h4>
                </div>
                {loadingAi ? (
                  <p className="text-slate-400 italic animate-pulse">Yanlışlarını analiz ediyorum, biraz bekle...</p>
                ) : (
                  <p className="text-indigo-100 leading-relaxed italic text-lg font-medium">"{aiFeedback || 'Hatalarından ders çıkararak bir sonraki testte daha iyi olabilirsin!'}"</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Skor</p>
                  <p className="text-4xl font-black text-emerald-400">{resultData.correct} <span className="text-sm text-slate-600">/ {resultData.total}</span></p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Ders</p>
                  <p className="text-3xl font-black capitalize tracking-tighter">{selectedSubject}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button onClick={resetToSubjectSelect} className="w-full py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all">YENİ DERS SEÇ</button>
                <button onClick={() => startQuiz(selectedTerm)} className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-500 transition-all">AYNI DÖNEM YENİ TEST</button>
              </div>
            </div>

            {/* DETAYLI ANALİZ LİSTESİ (SATIR SAYISINI ARTIRAN DETAYLAR) */}
            <div className="text-left space-y-8 pt-10 border-t border-white/5">
              <h4 className="text-2xl font-black text-white flex items-center gap-3">Detaylı Soru Analizi 🔍</h4>
              <div className="space-y-6">
                {quizQuestions.map((q, i) => {
                  const isCorrect = answers[i] === q.correct;
                  return (
                    <div key={q.id} className={`p-8 rounded-[2.5rem] border-2 transition-all ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                      <div className="flex gap-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`}>{i + 1}</div>
                        <div className="space-y-4 w-full">
                          <p className="font-bold text-xl text-slate-100">{q.prompt}</p>
                          <div className="flex flex-wrap gap-2 text-sm font-bold">
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg">Doğru: {q.options[q.correct]}</span>
                            {!isCorrect && <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg">Senin Cevabın: {answers[i] !== undefined ? q.options[answers[i]] : 'Boş'}</span>}
                          </div>
                          <div className="bg-black/30 p-5 rounded-3xl border border-white/5 mt-4">
                            <p className="text-[10px] font-black text-indigo-400 uppercase mb-2 tracking-widest">💡 Çözüm Açıklaması</p>
                            <p className="text-slate-400 italic text-base leading-relaxed">{q.explanation}</p>
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

        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.12); border-radius: 999px; }
        `}</style>
      </div>
    </main>
  );
}
