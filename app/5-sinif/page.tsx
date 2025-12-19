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

// -------------------- İKONLAR --------------------
const Icons = {
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
  ),
  Trophy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 1 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
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
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
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

  // --- ZEKİ AI ANALİZ FONKSİYONU ---
  const getAIFeedback = async () => {
    if (view !== 'result') return;

    // Sadece yanlışları değil, AI'nın yorum yapabileceği açıklamaları da filtreleyip gönderiyoruz
    const mistakes = quizQuestions
      .filter((q, i) => answers[i] !== q.correct)
      .map(q => ({ 
        prompt: q.prompt, 
        explanation: q.explanation 
      }));

    if (mistakes.length === 0) {
      setAiFeedback("Olağanüstü! Hiç hata yapmadın. Bu konunun uzmanı sensin! 🏆");
      return;
    }

    setLoadingAi(true);
    setAiFeedback(null); // Eski sonucu temizle

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
      
      if (data.feedback && !data.feedback.includes("Harika bir denemeydi")) {
        setAiFeedback(data.feedback);
      } else if (data.feedback) {
        // Eğer hala basmakalıp geliyorsa, AI'ya "Detay ver" diye tekrar zorlayabiliriz
        setAiFeedback(data.feedback);
      } else {
        throw new Error("API boş döndü");
      }
    } catch (e) {
      setAiFeedback("Analiz şu an hazırlanamadı. Lütfen internet bağlantını veya API anahtarlarını kontrol et.");
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
    setAiFeedback(null);
    const filtered = normalizedBank.filter((q) => q.subject === selectedSubject && q.term === term);
    setQuizQuestions(shuffle(filtered).slice(0, 20));
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToSubjectSelect = () => {
    setView('subject-select');
    setSelectedSubject('');
    setAiFeedback(null);
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
                <h2 className="text-4xl font-black capitalize text-white">{selectedSubject}</h2>
                <p className="text-slate-400 font-medium">Lütfen çalışmak istediğin dönemi belirle.</p>
              </div>
              <div className="grid gap-4 pt-4">
                <button onClick={() => startQuiz(1)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-indigo-600 transition-all flex justify-between items-center"><span className="text-2xl font-black text-white">1. Dönem Konuları</span><span className="text-3xl">🚀</span></button>
                <button onClick={() => startQuiz(2)} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-fuchsia-600 transition-all flex justify-between items-center"><span className="text-2xl font-black text-white">2. Dönem Konuları</span><span className="text-3xl">🔥</span></button>
                <button onClick={resetToSubjectSelect} className="p-6 bg-slate-950/50 border border-white/10 rounded-3xl hover:bg-white/5 transition-all font-black text-slate-400">← Geri</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. GÖRÜNÜM: TEST EKRANI */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="space-y-3">
              <div className="flex justify-between items-end px-1">
                <span className="text-xs font-black uppercase text-indigo-400 tracking-widest">{selectedSubject} • {selectedTerm}. Dönem</span>
                <span className="text-sm font-mono font-bold text-slate-500">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Icons.Brain /></div>
              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed text-slate-100 z-10 relative">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-4">
                {quizQuestions[currentIdx].options.map((opt, i) => (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} className={`group p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${answers[currentIdx] === i ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-white/5 bg-slate-950/50 text-slate-400 hover:border-white/20'}`}>
                    <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black transition-all ${answers[currentIdx] === i ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg' : 'border-white/10 group-hover:border-white/30'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-lg font-medium">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0} className="text-slate-500 font-bold disabled:opacity-0 hover:text-white transition-colors">← Geri</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => { setView('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-14 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black shadow-xl disabled:opacity-50 transition-all transform hover:scale-105">TESTİ BİTİR</button>
              ) : (
                <button onClick={() => { setCurrentIdx(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="px-14 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black shadow-xl disabled:opacity-50 transition-all transform hover:scale-105">SONRAKİ →</button>
              )}
            </div>
          </div>
        )}

        {/* 4. GÖRÜNÜM: SONUÇ VE GERÇEK AI ANALİZİ */}
        {view === 'result' && (
          <div className="max-w-3xl mx-auto space-y-10 animate-in zoom-in-95 duration-500 pb-20">
            <div className="bg-slate-900/80 border border-white/10 p-12 rounded-[4rem] text-center space-y-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
              
              <div className="space-y-4">
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em]">Değerlendirme Raporu</h2>
                <h3 className="text-5xl font-black tracking-tighter text-white">Test Tamamlandı!</h3>
              </div>

              <div className="relative inline-flex items-center justify-center p-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full shadow-2xl shadow-indigo-500/20">
                <div className="bg-slate-950 rounded-full px-20 py-14">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200">{resultData.percent}%</span>
                </div>
              </div>

              {/* --- YAPAY ZEKA REHBER ÖĞRETMEN ANALİZ KUTUSU --- */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 p-8 rounded-[3rem] text-left relative overflow-hidden shadow-2xl transition-all hover:bg-indigo-500/15">
                <div className="absolute -top-2 -right-2 p-6 opacity-10 rotate-12 text-indigo-400">
                  <Icons.Brain /> 
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-indigo-600 text-white p-3 rounded-2xl shadow-xl shadow-indigo-500/30 text-2xl animate-bounce-slow">
                    🤖
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-black text-indigo-400 uppercase text-xs tracking-[0.3em]">Yapay Zeka</h4>
                    <span className="text-white font-black text-lg">Rehber Öğretmen Analizi</span>
                  </div>
                </div>

                {loadingAi ? (
                  <div className="space-y-4 py-2">
                    <div className="h-3 bg-indigo-500/20 rounded-full animate-pulse w-full"></div>
                    <div className="h-3 bg-indigo-500/20 rounded-full animate-pulse w-5/6"></div>
                    <div className="h-3 bg-indigo-500/20 rounded-full animate-pulse w-4/6"></div>
                    <p className="text-sm text-indigo-400 font-bold italic mt-4 flex items-center gap-2">
                      <span className="inline-block animate-spin">⏳</span> Yanlışlarını tek tek okuyorum, sana özel tavsiyeler hazırlıyorum...
                    </p>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
                    <p className="text-indigo-50 text-xl leading-relaxed italic font-medium">
                      {aiFeedback ? `"${aiFeedback}"` : "Hatalarını analiz ederken bir sorun oldu, ama çözümler sana yol gösterecektir!"}
                    </p>
                    
                    {!aiFeedback && !loadingAi && (
                      <button 
                        onClick={getAIFeedback}
                        className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl text-sm font-black transition-all shadow-lg"
                      >
                        Analizi Yeniden Başlat ➔
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-center transition-colors hover:bg-white/10">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Başarı Skoru</p>
                  <p className="text-4xl font-black text-emerald-400">{resultData.correct} <span className="text-sm text-slate-600">/ {resultData.total}</span></p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-center transition-colors hover:bg-white/10">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Ders Branşı</p>
                  <p className="text-3xl font-black capitalize tracking-tighter text-indigo-200">{selectedSubject}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <button onClick={resetToSubjectSelect} className="w-full py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all shadow-xl transform hover:-translate-y-1">YENİ DERS SEÇİMİ</button>
                <button onClick={() => startQuiz(selectedTerm)} className="w-full py-6 bg-slate-800 text-white rounded-[2rem] font-black text-xl hover:bg-slate-700 transition-all shadow-xl transform hover:-translate-y-1">AYNI DÖNEM YENİ TEST</button>
              </div>
            </div>

            {/* --- DETAYLI ANALİZ LİSTESİ --- */}
            <div className="text-left space-y-8 pt-10 border-t border-white/5">
              <h4 className="text-3xl font-black text-white flex items-center gap-4 px-2">
                <span className="bg-white/10 p-2 rounded-xl text-xl">🔍</span> Detaylı Soru Analizi
              </h4>
              <div className="space-y-6">
                {quizQuestions.map((q, i) => {
                  const isCorrect = answers[i] === q.correct;
                  return (
                    <div key={q.id} className={`p-10 rounded-[3rem] border-2 transition-all ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5 shadow-2xl shadow-red-500/5'}`}>
                      <div className="flex gap-8">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>{i + 1}</div>
                        <div className="space-y-5 w-full">
                          <p className="font-bold text-2xl text-slate-100 leading-snug">{q.prompt}</p>
                          <div className="flex flex-wrap gap-3 text-sm font-bold">
                            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20">Doğru Cevap: {q.options[q.correct]}</span>
                            {!isCorrect && <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl border border-red-500/20">Senin Cevabın: {answers[i] !== undefined ? q.options[answers[i]] : 'Boş Bırakıldı'}</span>}
                          </div>
                          <div className="bg-black/40 p-6 rounded-[2rem] border border-white/5 mt-6 group transition-all hover:border-indigo-500/30">
                            <div className="flex items-center gap-2 mb-3">
                              <Icons.Info />
                              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Eğitmen Notu & Çözüm</p>
                            </div>
                            <p className="text-slate-400 italic text-lg leading-relaxed">{q.explanation}</p>
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
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(0); }
          }
          .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.12); border-radius: 999px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
        `}</style>
      </div>
    </main>
  );
}
