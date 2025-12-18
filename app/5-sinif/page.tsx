'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { questions5, Question5 } from '../data/questions5';

// -------------------- TİPLER --------------------
type ViewState = 'subject-select' | 'term-select' | 'quiz' | 'result';

interface Subject {
  id: string;
  label: string;
  icon: string;
  gradient: string;
  desc: string;
}

// -------------------- CİHAZ BOYUTU (KONFETİ İÇİN) --------------------
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
  // State Yönetimi
  const [view, setView] = useState<ViewState>('subject-select');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTerm, setSelectedTerm] = useState<number>(1);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  const { width, height } = useWindowSize();
  const quizRef = useRef<HTMLDivElement>(null);

  // Ders Tanımlamaları
  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Basic Grammar' },
    { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Dünya, Güneş ve Canlılar' },
  ];

  // ✅ SORU SEÇİM MANTIĞI: Seçilen ders ve döneme göre rastgele 20 soru seçer
  const quizQuestions = useMemo(() => {
    if (view !== 'quiz' && view !== 'result') return [];
    
    const filtered = questions5.filter(
      q => q.subject === selectedSubject && q.term === selectedTerm
    );

    // Soruları karıştır ve ilk 20 tanesini al (Eğer 20'den azsa hepsini al)
    return [...filtered]
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);
  }, [selectedSubject, selectedTerm, view === 'quiz']); // Sadece quiz başladığında tetiklenir

  // Navigasyon Fonksiyonları
  const handleSubjectClick = (id: string) => {
    setSelectedSubject(id);
    setView('term-select');
  };

  const startQuiz = (term: number) => {
    setSelectedTerm(term);
    setAnswers({});
    setCurrentIdx(0);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (optIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const nextQuestion = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(p => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Skor Hesaplama
  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    const total = quizQuestions.length;
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percent };
  }, [answers, quizQuestions]);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-20">
      {/* Konfeti (Başarı %80 üzeriyse) */}
      {view === 'result' && resultData.percent >= 80 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      <div className="max-w-5xl mx-auto px-4 pt-10">
        
        {/* ÜST NAVİGASYON */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">
            ← Ana Sayfaya Dön
          </Link>
          {view !== 'subject-select' && (
            <button 
              onClick={() => setView('subject-select')}
              className="text-xs font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
            >
              Ders Değiştir
            </button>
          )}
        </div>

        {/* --- 1. GÖRÜNÜM: DERS SEÇİMİ --- */}
        {view === 'subject-select' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="text-center space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter">5. Sınıf <span className="text-indigo-500">Ders Paneli</span></h1>
              <p className="text-slate-400 text-lg">Hangi dersi çalışmak istersin?</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map(s => (
                <button
                  key={s.id}
                  onClick={() => handleSubjectClick(s.id)}
                  className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.gradient} p-8 text-left transition-all hover:scale-[1.02] hover:shadow-2xl shadow-indigo-500/10`}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-5xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-2xl backdrop-blur-md">{s.icon}</div>
                      <h2 className="text-3xl font-black tracking-tight">{s.label}</h2>
                      <p className="text-white/80 mt-1 font-medium">{s.desc}</p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 font-bold text-sm bg-black/20 w-fit px-4 py-2 rounded-full">
                      Testleri Çöz ➔
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 text-9xl opacity-10 font-black">{s.icon}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. GÖRÜNÜM: DÖNEM SEÇİMİ --- */}
        {view === 'term-select' && (
          <div className="max-w-2xl mx-auto py-10 animate-in zoom-in-95 duration-300">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] text-center space-y-8 shadow-2xl">
              <div className="space-y-2">
                <h2 className="text-4xl font-black capitalize text-white">{selectedSubject}</h2>
                <p className="text-slate-400">Çalışmak istediğin dönemi seçerek hemen başla.</p>
              </div>
              
              <div className="grid gap-4">
                <button 
                  onClick={() => startQuiz(1)} 
                  className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-indigo-600 hover:border-indigo-400 transition-all flex items-center justify-between"
                >
                  <span className="text-2xl font-black">1. Dönem Konuları</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🚀</span>
                </button>
                <button 
                  onClick={() => startQuiz(2)} 
                  className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-fuchsia-600 hover:border-fuchsia-400 transition-all flex items-center justify-between"
                >
                  <span className="text-2xl font-black">2. Dönem Konuları</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🔥</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- 3. GÖRÜNÜM: TEST EKRANI --- */}
        {view === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-end px-1">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-400">{selectedSubject} • {selectedTerm}. Dönem</span>
                <span className="text-sm font-mono">{currentIdx + 1} / {quizQuestions.length}</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-500" 
                  style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-10">
              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">
                {quizQuestions[currentIdx].prompt}
              </h3>

              <div className="grid gap-4">
                {quizQuestions[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`group p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${
                      answers[currentIdx] === i 
                      ? 'border-indigo-500 bg-indigo-500/10 text-white' 
                      : 'border-white/5 bg-slate-950/50 hover:border-white/20 text-slate-400'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black transition-all ${
                      answers[currentIdx] === i ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-white/10 text-slate-600 group-hover:border-white/20'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-lg font-medium">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Navigation */}
            <div className="flex justify-between items-center px-2">
              <button 
                onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
                disabled={currentIdx === 0}
                className="text-slate-500 font-bold hover:text-white disabled:opacity-0 transition-colors"
              >
                ← Geri
              </button>
              
              {currentIdx === quizQuestions.length - 1 ? (
                <button 
                  onClick={() => setView('result')}
                  disabled={answers[currentIdx] === undefined}
                  className="px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl disabled:opacity-50"
                >
                  TESTİ BİTİR
                </button>
              ) : (
                <button 
                  onClick={nextQuestion}
                  disabled={answers[currentIdx] === undefined}
                  className="px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black tracking-widest transition-all shadow-xl disabled:opacity-50"
                >
                  SONRAKİ SORU →
                </button>
              )}
            </div>
          </div>
        )}

        {/* --- 4. GÖRÜNÜM: SONUÇ EKRANI --- */}
        {view === 'result' && (
          <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
            <div className="bg-slate-900 border border-white/10 p-12 rounded-[3.5rem] text-center space-y-10 shadow-2xl">
              <div className="space-y-2">
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">Başarı Raporu</h2>
                <h3 className="text-4xl font-black">Test Tamamlandı!</h3>
              </div>

              <div className="relative inline-flex items-center justify-center p-1 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                <div className="bg-slate-950 rounded-full px-16 py-12">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200">
                    {resultData.percent}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Doğru Sayısı</p>
                  <p className="text-3xl font-black text-emerald-400">{resultData.correct} / {resultData.total}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Ders</p>
                  <p className="text-2xl font-black capitalize">{selectedSubject}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6">
                <button 
                  onClick={() => setView('subject-select')}
                  className="py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-colors"
                >
                  Yeni Derse Başla
                </button>
                <button 
                  onClick={() => { setView('quiz'); setAnswers({}); setCurrentIdx(0); }}
                  className="py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-700 transition-colors"
                >
                  Tekrar Çöz
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
