'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
// Veri dosyanızın yolu doğru olmalı
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

// -------------------- İKONLAR --------------------
const Icons = {
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  )
};

// -------------------- CİHAZ BOYUTU HOOK --------------------
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    // Tarayıcı ortamında çalıştığından emin ol
    if (typeof window === 'undefined') return;
    
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// -------------------- YARDIMCI FONKSİYONLAR --------------------
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
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
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

  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => { if (answers[i] === q.correct) correct++; });
    const total = quizQuestions.length;
    return { correct, total, percent: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [answers, quizQuestions]);

  // --- ZEKİ AI ANALİZ FONKSİYONU (Hatasız Sürüm) ---
  const handleAIFeedback = async () => {
    if (view !== 'result') return;

    // Sadece yanlışları değil, AI'nın yorum yapabileceği açıklamaları da filtreleyip gönderiyoruz
    const mistakes = quizQuestions
      .filter((q, i) => answers[i] !== q.correct)
      .map(q => ({ 
        prompt: q.prompt, 
        explanation: q.explanation // Kritik nokta: Çözümü gönderiyoruz
      }));
    
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
      
      if (data.feedback) {
        setAiFeedback(data.feedback);
      } else {
        throw new Error("API boş yanıt döndürdü");
      }
    } catch (e) {
      console.error("Frontend AI Hatası:", e);
      setAiFeedback("Analiz şu an hazırlanamadı ama aşağıdaki detaylı çözümler sana yol gösterecektir.");
    } finally {
      setLoadingAi(false);
    }
  };

  useEffect(() => {
    if (view === 'result') handleAIFeedback();
  }, [view]);

  const startQuiz = (term: 1 | 2) => {
    const filtered = (questions5 as any[]).filter((q) => q.subject === selectedSubject && q.term === term);
    // Soruları karıştır ve ilk 20 tanesini al
    setQuizQuestions(shuffle(filtered).slice(0, 20));
    setAnswers({});
    setCurrentIdx(0);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // overflow-x-hidden eklendi: Yatay taşmayı engeller
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-20 overflow-x-hidden">
      {view === 'result' && resultData.percent >= 80 && width > 0 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      <div className="max-w-5xl mx-auto px-4 pt-6 md:pt-10">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors text-sm md:text-base">← Ana Sayfa</Link>
          {view !== 'subject-select' && (
            <button onClick={() => setView('subject-select')} className="text-xs md:text-sm font-black bg-white/5 border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-2xl hover:bg-white/10 transition-all">Ders Değiştir</button>
          )}
        </div>

        {/* --- 1. DERS SEÇİMİ --- */}
        {view === 'subject-select' && (
          <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <header className="text-center space-y-4">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter">5. Sınıf <span className="text-indigo-500">Test Paneli</span></h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium">Başarıya giden yolda ilk adımı seç!</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br ${s.gradient} p-8 md:p-10 text-left transition-all hover:scale-[1.03] shadow-xl`}>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl mb-6 bg-white/20 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-3xl border border-white/20">{s.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-black">{s.label}</h2>
                    <p className="text-white/90 mt-2 font-bold text-base md:text-lg">{s.desc}</p>
                    <div className="mt-8 md:mt-10 inline-flex items-center gap-3 font-black text-xs md:text-sm bg-black/20 px-5 py-3 rounded-2xl group-hover:bg-black/30 transition-all">Testlere Başla ➔</div>
                  </div>
                  <div className="absolute -right-6 -bottom-6 text-[10rem] md:text-[12rem] opacity-10 font-black group-hover:scale-110 transition-transform">{s.icon}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. DÖNEM SEÇİMİ --- */}
        {view === 'term-select' && (
          <div className="max-w-2xl mx-auto py-8 md:py-12 animate-in zoom-in-95 duration-500">
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] text-center space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-black capitalize text-indigo-400">{selectedSubject}</h2>
                <p className="text-slate-400 text-base md:text-lg">Hangi dönemin konularını çalışmak istersin?</p>
              </div>
              <div className="grid gap-5 md:gap-6">
                <button onClick={() => startQuiz(1)} className="group p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-indigo-600 transition-all flex justify-between items-center transform hover:-translate-y-1 shadow-lg"><span className="text-2xl md:text-3xl font-black">1. Dönem Konuları</span><span className="text-3xl md:text-4xl">🚀</span></button>
                <button onClick={() => startQuiz(2)} className="group p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-fuchsia-600 transition-all flex justify-between items-center transform hover:-translate-y-1 shadow-lg"><span className="text-2xl md:text-3xl font-black">2. Dönem Konuları</span><span className="text-3xl md:text-4xl">🔥</span></button>
                <button onClick={() => setView('subject-select')} className="p-5 md:p-6 bg-slate-950/50 border border-white/10 rounded-[2rem] hover:bg-white/5 transition-all font-black text-slate-500 uppercase tracking-widest text-[10px] md:text-xs">← Başka Bir Ders Seç</button>
              </div>
            </div>
          </div>
        )}

        {/* --- 3. TEST EKRANI --- */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4 px-2">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                   <span className="text-[10px] md:text-xs font-black uppercase text-indigo-400 tracking-[0.3em]">{selectedSubject}</span>
                   <span className="text-slate-300 font-bold text-xs md:text-sm">{selectedTerm}. Dönem Testi</span>
                </div>
                <span className="text-base md:text-lg font-mono font-black text-indigo-500">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-2 md:h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-700 ease-out" style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>
            
            <div className="bg-slate-900 border border-white/10 p-8 md:p-16 rounded-[3rem] md:rounded-[3.5rem] shadow-2xl space-y-8 md:space-y-12 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-20 opacity-5 group-hover:rotate-12 transition-transform duration-1000"><Icons.Brain /></div>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight text-white relative z-10">{quizQuestions[currentIdx].prompt}</h3>
              <div className="grid gap-4 md:gap-5 relative z-10">
                {quizQuestions[currentIdx].options.map((opt: string, i: number) => (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} className={`group p-6 md:p-8 rounded-[2rem] border-2 text-left transition-all flex items-center gap-4 md:gap-6 ${answers[currentIdx] === i ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-xl shadow-indigo-500/5' : 'border-white/5 bg-slate-950/50 text-slate-400 hover:border-white/20'}`}>
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 flex items-center justify-center font-black transition-all text-lg md:text-xl shrink-0 ${answers[currentIdx] === i ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg' : 'border-white/10 group-hover:border-white/30'}`}>{String.fromCharCode(65 + i)}</div>
                    <span className="text-lg md:text-xl font-semibold leading-snug">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-2 md:px-4 pb-8">
              <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0} className="text-slate-500 font-black hover:text-white disabled:opacity-0 transition-colors uppercase tracking-widest text-xs md:text-sm order-2 md:order-1">← Önceki Soru</button>
              {currentIdx === quizQuestions.length - 1 ? (
                <button onClick={() => { setView('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="w-full md:w-auto px-12 md:px-16 py-5 md:py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-lg md:text-xl shadow-2xl disabled:opacity-50 transition-all transform hover:scale-105 active:scale-95 order-1 md:order-2">TESTİ BİTİR</button>
              ) : (
                <button onClick={() => { setCurrentIdx(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={answers[currentIdx] === undefined} className="w-full md:w-auto px-12 md:px-16 py-5 md:py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] font-black text-lg md:text-xl shadow-2xl disabled:opacity-50 transition-all transform hover:scale-105 active:scale-95 order-1 md:order-2">SONRAKİ SORU ➔</button>
              )}
            </div>
          </div>
        )}

        {/* --- 4. SONUÇ VE GERÇEK AI ANALİZİ (Mobil Uyumlu) --- */}
        {view === 'result' && (
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 animate-in zoom-in-95 duration-700 pb-20">
            <div className="bg-slate-900/80 border border-white/10 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] text-center space-y-8 md:space-y-12 shadow-2xl backdrop-blur-3xl relative overflow-hidden">
              
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-[10px] md:text-xs font-black text-indigo-400 uppercase tracking-[0.3em]">Başarı Analiz Raporu</h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Test Tamamlandı!</h3>
              </div>

              <div className="relative inline-flex items-center justify-center p-1.5 md:p-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full shadow-2xl shadow-indigo-500/30 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-slate-950 rounded-full px-16 py-10 md:px-24 md:py-16">
                  {/* Mobilde font küçültüldü */}
                  <span className="text-7xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200 leading-none">{resultData.percent}%</span>
                </div>
              </div>

              {/* --- ZEKİ YAPAY ZEKA KUTUSU (Mobil Uyumlu) --- */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] text-left relative overflow-hidden shadow-2xl group transition-all hover:bg-indigo-500/15">
                <div className="absolute -top-4 -right-4 p-10 md:p-12 opacity-10 rotate-12 text-indigo-400 group-hover:scale-110 transition-transform duration-1000"><Icons.Brain /></div>
                
                <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                  <div className="bg-indigo-600 text-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl shadow-indigo-500/40 text-2xl md:text-3xl animate-bounce-slow">🤖</div>
                  <div className="flex flex-col">
                    <h4 className="font-black text-indigo-400 uppercase text-[10px] md:text-xs tracking-[0.3em]">TestDünya AI</h4>
                    <span className="text-white font-black text-xl md:text-2xl tracking-tight">Rehber Öğretmen</span>
                  </div>
                </div>

                {loadingAi ? (
                  <div className="space-y-4 py-2">
                    <div className="h-3 md:h-4 bg-indigo-500/20 rounded-full animate-pulse w-full"></div>
                    <div className="h-3 md:h-4 bg-indigo-500/20 rounded-full animate-pulse w-11/12"></div>
                    <div className="h-3 md:h-4 bg-indigo-500/20 rounded-full animate-pulse w-10/12"></div>
                    <p className="text-indigo-400 font-black italic mt-4 md:mt-6 flex items-center gap-3 text-xs md:text-base">
                      <span className="inline-block animate-spin text-xl md:text-2xl">🌀</span> Yanlışlarını inceliyorum, rapor hazırlanıyor...
                    </p>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
                    <p className="text-indigo-50 text-lg md:text-2xl leading-relaxed italic font-semibold">
                      "{aiFeedback || "Analiz hazırlanıyor, lütfen bekleyin..."}"
                    </p>
                    {!aiFeedback && !loadingAi && (
                       <button onClick={handleAIFeedback} className="mt-6 md:mt-8 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 md:px-10 md:py-4 rounded-2xl font-black text-xs md:text-sm transition-all shadow-lg active:scale-95">ANALİZİ TEKRARLAT ➔</button>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="bg-white/5 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 text-center transition-all hover:bg-white/10 group min-h-[120px] flex flex-col justify-center">
                  <p className="text-[9px] md:text-[11px] text-slate-500 font-black uppercase tracking-widest mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors">Toplam Doğru</p>
                  <p className="text-4xl md:text-6xl font-black text-emerald-400">{resultData.correct} <span className="text-base md:text-xl text-slate-600 font-bold">/ {resultData.total}</span></p>
                </div>
                <div className="bg-white/5 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 text-center transition-all hover:bg-white/10 group min-h-[120px] flex flex-col justify-center">
                  <p className="text-[9px] md:text-[11px] text-slate-500 font-black uppercase tracking-widest mb-2 md:mb-3 group-hover:text-indigo-400 transition-colors">Ders Branşı</p>
                  {/* Mobilde taşmayı önlemek için truncate eklendi */}
                  <p className="text-2xl md:text-4xl font-black capitalize tracking-tighter text-indigo-200 truncate">{selectedSubject}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-6">
                <button onClick={() => setView('subject-select')} className="w-full py-6 md:py-8 bg-white text-slate-950 rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:bg-slate-200 transition-all shadow-2xl transform hover:-translate-y-1 active:scale-95">YENİ BİR DERS SEÇ</button>
                <button onClick={() => startQuiz(selectedTerm)} className="w-full py-6 md:py-8 bg-slate-800 text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:bg-slate-700 transition-all shadow-2xl transform hover:-translate-y-1 active:scale-95">BU DÖNEMİ TEKRAR ÇÖZ</button>
              </div>
            </div>

            {/* --- 5. DETAYLI SORU ANALİZ LİSTESİ (Mobil Uyumlu) --- */}
            <div className="text-left space-y-8 md:space-y-12 pt-12 md:pt-16 border-t border-white/10">
              <header className="flex flex-col gap-2 px-2 md:px-4">
                 <h4 className="text-2xl md:text-4xl font-black text-white flex items-center gap-4">
                   <span className="bg-white/10 p-3 md:p-4 rounded-2xl md:rounded-3xl text-2xl md:text-3xl shadow-lg">🔍</span> Detaylı Soru Analizi
                 </h4>
                 <p className="text-slate-500 font-bold text-base md:text-lg px-2">Yanlışlarını öğrenerek her adımda daha güçlü ol.</p>
              </header>

              <div className="space-y-6 md:space-y-8">
                {quizQuestions.map((q, i) => {
                  const isCorrect = answers[i] === q.correct;
                  return (
                    <div key={q.id} className={`p-8 md:p-14 rounded-[3rem] md:rounded-[3.5rem] border-2 transition-all duration-500 ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5 shadow-lg' : 'border-red-500/20 bg-red-500/5 shadow-2xl shadow-red-500/5'}`}>
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center font-black shrink-0 text-xl md:text-2xl shadow-xl ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>{i + 1}</div>
                        <div className="space-y-6 md:space-y-8 w-full">
                          <p className="font-bold text-xl md:text-3xl text-slate-100 leading-snug">{q.prompt}</p>
                          <div className="flex flex-wrap gap-3 md:gap-4">
                            <div className="px-5 py-3 bg-emerald-500/15 text-emerald-400 rounded-2xl border border-emerald-500/20 font-bold text-base md:text-lg">Doğru: {q.options[q.correct]}</div>
                            {!isCorrect && (
                              <div className="px-5 py-3 bg-red-500/15 text-red-400 rounded-2xl border border-red-500/20 font-bold text-base md:text-lg">Senin Cevabın: {answers[i] !== undefined ? q.options[answers[i]] : 'Boş'}</div>
                            )}
                          </div>
                          
                          <div className="bg-black/40 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 mt-6 md:mt-8 group transition-all hover:border-indigo-500/30 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-4">
                              <Icons.Info />
                              <p className="text-[10px] md:text-[11px] font-black text-indigo-400 uppercase tracking-[0.3em]">Eğitmen Notu & Çözüm</p>
                            </div>
                            <p className="text-slate-400 italic text-lg md:text-xl leading-relaxed relative z-10">{q.explanation}</p>
                            <div className="absolute top-0 right-0 p-10 opacity-[0.02] -rotate-12 scale-150"><Icons.Brain /></div>
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
            0%, 100% { transform: translateY(-8%); }
            50% { transform: translateY(0); }
          }
          .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
          /* Mobilde yatay taşmayı engelle */
          body { overflow-x: hidden; }
        `}</style>
      </div>
    </main>
  );
}
