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
  options: string[]; // UI'da tek isim kullanalım (options)
  correct: number;
  explanation: string;
};

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

// -------------------- HELPERS --------------------
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Grade5Page() {
  // State Yönetimi
  const [view, setView] = useState<ViewState>('subject-select');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | ''>('');
  const [selectedTerm, setSelectedTerm] = useState<1 | 2>(1);

  // ✅ Quiz soruları stabilize: startQuiz anında set edilir, sonra değişmez
  const [quizQuestions, setQuizQuestions] = useState<Q5[]>([]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const { width, height } = useWindowSize();

  // Ders Tanımlamaları
  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler ve Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-red-600 to-orange-500', desc: 'Okuma, Anlama ve Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Basic Grammar' },
    { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Dünya, Güneş ve Canlılar' },
  ];

  // ✅ questions5 -> tek tip (options) normalize
  const normalizedBank: Q5[] = useMemo(() => {
    return (questions5 as any[]).map((q) => ({
      id: String(q.id),
      subject: q.subject as SubjectId,
      term: q.term as 1 | 2,
      prompt: String(q.prompt),
      // bazı datalarda optionsText olabilir -> ikisini de destekle
      options: Array.isArray(q.options) ? q.options : (q.optionsText || []),
      correct: Number(q.correct),
      explanation: String(q.explanation || ''),
    }));
  }, []);

  // ---- RESET HELPERS ----
  const resetToSubjectSelect = () => {
    setView('subject-select');
    setSelectedSubject('');
    setSelectedTerm(1);
    setQuizQuestions([]);
    setAnswers({});
    setCurrentIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToTermSelect = () => {
    setView('term-select');
    setQuizQuestions([]);
    setAnswers({});
    setCurrentIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigasyon Fonksiyonları
  const handleSubjectClick = (id: SubjectId) => {
    setSelectedSubject(id);
    setView('term-select');
  };

  const startQuiz = (term: 1 | 2) => {
    if (!selectedSubject) return;

    setSelectedTerm(term);
    setAnswers({});
    setCurrentIdx(0);

    const filtered = normalizedBank.filter((q) => q.subject === selectedSubject && q.term === term);

    const picked = shuffle(filtered).slice(0, 20);
    setQuizQuestions(picked);

    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (optIdx: number) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const nextQuestion = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((p) => p + 1);
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

  // ✅ Guard: quiz ekranında soru yoksa term-select'e dön
  useEffect(() => {
    if (view === 'quiz' && quizQuestions.length === 0) {
      // seçilen subject/term yoksa zaten back
      setView(selectedSubject ? 'term-select' : 'subject-select');
    }
  }, [view, quizQuestions.length, selectedSubject]);

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
              onClick={resetToSubjectSelect}
              className="text-xs font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              Ders Değiştir
            </button>
          )}
        </div>

        {/* --- 1. GÖRÜNÜM: DERS SEÇİMİ --- */}
        {view === 'subject-select' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="text-center space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                5. Sınıf <span className="text-indigo-500">Ders Paneli</span>
              </h1>
              <p className="text-slate-400 text-lg">Hangi dersi çalışmak istersin?</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSubjectClick(s.id)}
                  className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.gradient} p-8 text-left transition-all hover:scale-[1.02] hover:shadow-2xl shadow-indigo-500/10`}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-5xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-2xl backdrop-blur-md">
                        {s.icon}
                      </div>
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
                <h2 className="text-4xl font-black capitalize text-white">{selectedSubject || ''}</h2>
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

                <button
                  onClick={resetToSubjectSelect}
                  className="p-6 bg-slate-950/50 border border-white/10 rounded-3xl hover:bg-white/5 transition-all font-black"
                >
                  ← Geri (Ders Seçimi)
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
                <span className="text-xs font-black uppercase tracking-widest text-indigo-400">
                  {selectedSubject} • {selectedTerm}. Dönem
                </span>
                <span className="text-sm font-mono">
                  {currentIdx + 1} / {quizQuestions.length}
                </span>
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
                    <div
                      className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black transition-all ${
                        answers[currentIdx] === i
                          ? 'bg-indigo-500 border-indigo-400 text-white'
                          : 'border-white/10 text-slate-600 group-hover:border-white/20'
                      }`}
                    >
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
                onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
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

            <div className="flex justify-center">
              <button
                onClick={resetToTermSelect}
                className="mt-2 text-xs font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                Dönem Seçimine Dön
              </button>
            </div>
          </div>
        )}

        {/* --- 4. SONUÇ VE ANALİZ EKRANI --- */}
        {view === 'result' && (
          <div className="max-w-3xl mx-auto space-y-10 animate-in zoom-in-95 duration-500 pb-20">
            <div className="bg-slate-900/80 border border-white/10 p-12 rounded-[4rem] text-center space-y-10 shadow-2xl backdrop-blur-2xl">
              <div className="space-y-4">
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em]">Assessment Report</h2>
                <h3 className="text-5xl font-black tracking-tighter">Test Completed!</h3>
              </div>

              <div className="relative inline-flex items-center justify-center p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full">
                <div className="bg-slate-950 rounded-full px-20 py-14">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-fuchsia-200">
                    {resultData.percent}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Score</p>
                  <p className="text-4xl font-black text-emerald-400">
                    {resultData.correct} <span className="text-sm text-slate-600">/ {resultData.total}</span>
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Subject</p>
                  <p className="text-3xl font-black capitalize tracking-tighter">{selectedSubject}</p>
                </div>
              </div>

              {/* ANALİZ PANELİ */}
              <div className="text-left space-y-8 pt-10 border-t border-white/5">
                <h4 className="text-2xl font-black text-white flex items-center gap-3">Detaylı Soru Analizi 🔍</h4>

                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {quizQuestions.map((q, i) => {
                    const isCorrect = answers[i] === q.correct;
                    const yourIdx = answers[i];
                    return (
                      <div
                        key={q.id}
                        className={`p-6 md:p-8 rounded-[2.5rem] border-2 transition-all ${
                          isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'
                        }`}
                      >
                        <div className="flex gap-6">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 ${
                              isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                          >
                            {i + 1}
                          </div>

                          <div className="space-y-4 w-full">
                            <p className="font-bold text-xl text-slate-100">{q.prompt}</p>

                            <div className="flex flex-wrap gap-2 text-sm font-bold">
                              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg">
                                Doğru: {q.options[q.correct]}
                              </span>
                              {!isCorrect && (
                                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg">
                                  Senin Cevabın: {yourIdx !== undefined ? q.options[yourIdx] : 'Skipped'}
                                </span>
                              )}
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

              <div className="flex flex-col gap-4 pt-8">
                <button
                  onClick={resetToSubjectSelect}
                  className="w-full py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all"
                >
                  START NEW SUBJECT
                </button>

                <button
                  onClick={() => {
                    // ✅ aynı sorularla tekrar
                    setAnswers({});
                    setCurrentIdx(0);
                    setView('quiz');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-6 bg-slate-800 text-white rounded-[2rem] font-black text-xl hover:bg-slate-700 transition-all"
                >
                  RETAKE TEST
                </button>

                <button
                  onClick={() => startQuiz(selectedTerm)}
                  className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-500 transition-all"
                >
                  NEW RANDOM TEST
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scrollbar style */}
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.12);
            border-radius: 999px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </div>
    </main>
  );
}
