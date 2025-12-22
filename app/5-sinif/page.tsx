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

// Sayfanın en üstündeki TİPLER bölümünü böyle güncelle:
type Question5 = {
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  // EKSİK OLAN SATIR BURASIYDI:
  imageUrl?: string; 
};

type SubjectPack = {
  term1: Record<string, Question5[]>;
  term2: Record<string, Question5[]>;
};

interface Subject {
  id: SubjectId;
  label: string;
  icon: string;
  gradient: string;
  desc: string;
}

// -------------------- VERİ --------------------
const allQuestions5: Record<SubjectId, SubjectPack> = {
  matematik: matematikData as SubjectPack,
  turkce: turkceData as SubjectPack,
  fen: fenData as SubjectPack,
  ingilizce: ingilizceData as SubjectPack,
};

// -------------------- WINDOW SIZE (CONFETTI) --------------------
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
  // ✅ TEK MOD: 5. SINIF ÇOCUK MODU
  const ui = {
    container: 'max-w-5xl',
    pagePad: 'px-3 md:px-6 pt-4 md:pt-6',

    h1: 'text-3xl md:text-5xl',
    subtitle: 'text-sm md:text-base',

    subjectCardPad: 'p-6 md:p-8',
    subjectTitle: 'text-2xl md:text-3xl',
    subjectDesc: 'text-sm md:text-base',
    subjectIcon: 'text-4xl md:text-5xl',

    termCardPad: 'p-6 md:p-10',
    termTitle: 'text-2xl md:text-3xl',

    testTitle: 'text-3xl md:text-4xl',
    testGrid: 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4',

    quizWrap: 'max-w-3xl',
    cardRound: 'rounded-[1.75rem]',
    cardPad: 'p-5 md:p-8',
    qTitle: 'text-xl md:text-2xl',
    optionPad: 'p-4 md:p-5',
    optionText: 'text-base md:text-lg',
    optionBadge: 'w-10 h-10 md:w-12 md:h-12 rounded-xl text-lg',
    bigBtn: 'px-10 py-5 text-lg rounded-[1.5rem]',

    resultWrap: 'max-w-4xl',
    resultPad: 'p-6 md:p-10',
    resultTitle: 'text-3xl md:text-5xl',
    percent: 'text-5xl md:text-7xl',
    detailTitle: 'text-2xl md:text-3xl',
  };

  const [view, setView] = useState<ViewState>('subject-select');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('matematik');
  const [selectedTerm, setSelectedTerm] = useState<1 | 2>(1);
  const [selectedTestNo, setSelectedTestNo] = useState<number>(1);

  const [quizQuestions, setQuizQuestions] = useState<Question5[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const { width, height } = useWindowSize();
  const quizTopRef = useRef<HTMLDivElement>(null);

  const subjects: Subject[] = [
    { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-500', desc: 'Sayılar, İşlemler, Geometri' },
    { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-rose-600 to-orange-500', desc: 'Okuma, Anlama, Dil Bilgisi' },
    { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-500', desc: 'Vocabulary & Grammar' },
    { id: 'fen', label: 'Fen', icon: '🧪', gradient: 'from-emerald-600 to-teal-500', desc: 'Doğa, Dünya, Canlılar' },
  ];

  const resultData = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    const total = quizQuestions.length;
    return { correct, total, percent: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [answers, quizQuestions]);

  const scrollToTop = () => {
    setTimeout(() => {
      quizTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const startQuiz = (testNo: number) => {
    const termKey = selectedTerm === 1 ? 'term1' : 'term2';
    const testKey = `test${testNo}`;

    const data = allQuestions5[selectedSubject]?.[termKey]?.[testKey];

    if (data && data.length > 0) {
      setQuizQuestions(data);
      setSelectedTestNo(testNo);
      setAnswers({});
      setCurrentIdx(0);
      setAiFeedback(null);
      setView('quiz');
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Bu test henüz hazırlanıyor!');
    }
  };

  const handleAIFeedback = async () => {
    if (view !== 'result') return;

    const mistakes = quizQuestions
      .filter((q, i) => answers[i] !== q.correct)
      .map((q) => ({ prompt: q.prompt, explanation: q.explanation }));

    setLoadingAi(true);
    try {
      const res = await fetch('/api/analyze-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: selectedSubject,
          score: resultData.correct,
          total: resultData.total,
          mistakes,
        }),
      });

      const data = await res.json().catch(() => ({}));
      setAiFeedback(data.feedback || 'Analiz tamamlandı.');
    } catch {
      setAiFeedback('Yapay zeka analizine şu an ulaşılamıyor.');
    } finally {
      setLoadingAi(false);
    }
  };

  useEffect(() => {
    if (view === 'result') handleAIFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const subjectLabel = subjects.find((s) => s.id === selectedSubject)?.label ?? selectedSubject;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16 overflow-x-hidden relative">
      {view === 'result' && resultData.percent >= 85 && width > 0 && (
        <ReactConfetti width={width} height={height} numberOfPieces={180} recycle={false} />
      )}

      <div className={`${ui.container} mx-auto ${ui.pagePad}`}>
        {/* Üst Navigasyon */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-slate-400 hover:text-indigo-600 font-bold transition-colors text-sm">
            ← Ana Sayfa
          </Link>

          {view !== 'subject-select' && (
            <button
              onClick={() => setView('subject-select')}
              className="bg-white border border-slate-200 px-4 py-2 rounded-2xl hover:bg-slate-50 transition-all font-black text-[11px] uppercase shadow-sm"
            >
              Ders Değiştir
            </button>
          )}
        </div>

        {/* 1) DERS SEÇİMİ */}
        {view === 'subject-select' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
            <header className="text-center space-y-2">
              <h1 className={`${ui.h1} font-black tracking-tighter text-slate-900`}>
                5. Sınıf <span className="text-indigo-600">Test Paneli</span>
              </h1>
              <p className={`text-slate-500 ${ui.subtitle} font-medium italic`}>
                Hadi başlayalım! ⭐ Her testte biraz daha güçleniyorsun.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelectedSubject(s.id);
                    setView('term-select');
                  }}
                  className={`group relative overflow-hidden ${ui.cardRound} bg-gradient-to-br ${s.gradient} ${ui.subjectCardPad} text-left transition-all hover:scale-[1.02] shadow-lg`}
                >
                  <div className="relative z-10">
                    <div
                      className={`mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/20 ${ui.subjectIcon}`}
                    >
                      {s.icon}
                    </div>

                    <h2 className={`${ui.subjectTitle} font-black text-white`}>{s.label}</h2>
                    <p className={`text-white/90 mt-1 font-bold ${ui.subjectDesc}`}>{s.desc}</p>

                    <div className="mt-5 inline-flex items-center gap-2 font-black text-[11px] bg-black/20 px-4 py-3 rounded-2xl group-hover:bg-black/30 transition-all text-white">
                      Çözmeye Başla ➔
                    </div>
                  </div>

                  <div className="absolute -right-6 -bottom-8 text-[8rem] opacity-10 font-black group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2) DÖNEM SEÇİMİ */}
        {view === 'term-select' && (
          <div className="max-w-2xl mx-auto py-6 animate-in zoom-in-95 duration-400">
            <div className={`bg-white border border-slate-200 ${ui.termCardPad} rounded-[2rem] text-center shadow-xl space-y-6`}>
              <div className="space-y-2">
                <h2 className="text-indigo-600 font-black text-2xl md:text-3xl">{subjectLabel}</h2>
                <p className="text-slate-500 text-sm md:text-base font-medium">Hangi dönemi çalışmak istersin?</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setSelectedTerm(1);
                    setView('test-select');
                  }}
                  className="p-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] hover:bg-indigo-600 hover:text-white transition-all flex flex-col items-center gap-2 shadow-sm"
                >
                  <span className="text-3xl">🚀</span>
                  <span className={`${ui.termTitle} font-black`}>1. Dönem</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedTerm(2);
                    setView('test-select');
                  }}
                  className="p-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] hover:bg-fuchsia-600 hover:text-white transition-all flex flex-col items-center gap-2 shadow-sm"
                >
                  <span className="text-3xl">🔥</span>
                  <span className={`${ui.termTitle} font-black`}>2. Dönem</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 font-bold">İpucu: Önce kolay testlerden başla, sonra yüksel! 🧠</p>
            </div>
          </div>
        )}

        {/* 3) TEST SEÇİMİ */}
        {view === 'test-select' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-6">
            <header className="text-center">
              <h2 className={`${ui.testTitle} font-black tracking-tighter text-slate-900`}>{subjectLabel}</h2>
              <p className="text-indigo-600 font-black uppercase tracking-widest text-[11px] mt-2">
                {selectedTerm}. Dönem • Test Seç
              </p>
            </header>

            <div className={ui.testGrid}>
              {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => startQuiz(num)}
                  className="group relative bg-white border border-slate-200 py-4 rounded-[1.5rem] hover:border-indigo-400 hover:scale-[1.02] transition-all shadow-sm flex flex-col items-center gap-1 overflow-hidden"
                >
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Test</span>
                  <span className="text-2xl md:text-3xl font-black text-slate-900">{num}</span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => setView('term-select')}
                className="text-slate-500 hover:text-slate-700 font-black text-[11px] uppercase tracking-widest"
              >
                ← Dönem Değiştir
              </button>
            </div>
          </div>
        )}

        {/* 4) QUIZ */}
{view === 'quiz' && quizQuestions.length > 0 && (
  <div className={`${ui.quizWrap} mx-auto space-y-5 animate-in fade-in duration-400`}>
    {/* Kaydırma Noktası: Yeni soruya geçince buraya odaklanır */}
    <div ref={quizTopRef} className="scroll-mt-24" />

    {/* Üst bar: İlerleme ve Bilgi */}
    <div className="space-y-2 px-1">
      <div className="flex justify-between items-end">
        <span className="text-[11px] font-black uppercase text-indigo-600 tracking-widest">
          {subjectLabel} • Test {selectedTestNo}
        </span>
        <span className="text-base font-mono font-black text-slate-400">
          {currentIdx + 1} / {quizQuestions.length}
        </span>
      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>
      <p className="text-[11px] text-slate-400 font-bold italic">Başarıya giden yolda harika ilerliyorsun! ⭐</p>
    </div>

    {/* Soru Kartı: Geniş ve Ferah Yapı */}
    <div className={`bg-white border border-slate-200 ${ui.cardPad} ${ui.cardRound} shadow-xl relative overflow-hidden min-h-[450px] flex flex-col`}>
      
      {/* 1. Soru Metni */}
      <h3 className={`${ui.qTitle} font-extrabold leading-snug text-slate-800 mb-6`}>
        {quizQuestions[currentIdx].prompt}
      </h3>

      {/* 2. GÖRSEL ALANI: %30 oranında büyütülmüş hali */}
{quizQuestions[currentIdx].imageUrl && (
  <div className="mb-8 flex flex-col items-center justify-center">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl blur opacity-10"></div>
      <img 
        src={quizQuestions[currentIdx].imageUrl} 
        alt="Soru Görseli" 
        /* max-h-64: Mobilde ~256px (Önceki 192px idi, tam %33 artış)
           md:max-h-80: Masaüstünde ~320px (Önceki 256px idi, tam %25 artış)
        */
        className="relative max-h-64 md:max-h-80 max-w-full w-auto rounded-xl shadow-sm border border-slate-50 object-contain bg-white p-2.5"
      />
    </div>
    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-2">Görseli İnceleyiniz</p>
  </div>
)}

      {/* 3. Seçenekler: Şık seçildiğinde scrollToTop çalışmaz, zıplama yapmaz */}
      <div className="grid gap-3 mt-auto">
        {quizQuestions[currentIdx].options.map((opt: string, i: number) => {
          const selected = answers[currentIdx] === i;
          return (
            <button
              key={i}
              onClick={() => setAnswers((prev) => ({ ...prev, [currentIdx]: i }))}
              className={`${ui.optionPad} rounded-[1.25rem] border-2 text-left transition-all flex items-center gap-4 group ${
                selected
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md'
                  : 'border-slate-100 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-white'
              }`}
            >
              <div
                className={`${ui.optionBadge} border-2 flex items-center justify-center font-black transition-all ${
                  selected ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-400'
                }`}
              >
                {String.fromCharCode(65 + i)}
              </div>
              <span className={`${ui.optionText} font-bold`}>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Alt Butonlar: Navigasyon ve Kaydırma Kontrolü */}
    <div className="flex justify-between items-center gap-3 px-2 pb-8">
      <button
        onClick={() => {
          setCurrentIdx((p) => Math.max(0, p - 1));
          scrollToTop(); // Geri gidince soru başına kaydır
        }}
        disabled={currentIdx === 0}
        className="text-slate-400 font-black hover:text-slate-600 disabled:opacity-30 transition-colors uppercase text-[11px] tracking-widest px-4 py-3"
      >
        ← Geri
      </button>

      {currentIdx === quizQuestions.length - 1 ? (
        <button
          onClick={() => {
            setView('result');
            if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={answers[currentIdx] === undefined}
          className={`${ui.bigBtn} bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50`}
        >
          Testi Bitir ✅
        </button>
      ) : (
        <button
          onClick={() => {
            setCurrentIdx((p) => p + 1);
            scrollToTop(); // Sonraki soruya geçince soru başına kaydır
          }}
          disabled={answers[currentIdx] === undefined}
          className={`${ui.bigBtn} bg-indigo-600 hover:bg-indigo-700 text-white font-black shadow-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50`}
        >
          Sonraki ➔
        </button>
      )}
    </div>
  </div>
)}

        {/* 5) SONUÇ */}
        {view === 'result' && (
          <div className={`${ui.resultWrap} mx-auto space-y-10 animate-in zoom-in-95 duration-500 pb-10`}>
            <div className={`bg-white border border-slate-200 ${ui.resultPad} rounded-[2rem] text-center shadow-xl relative space-y-8`}>
              <div className="space-y-2">
                <h2 className="text-indigo-600 font-black uppercase tracking-widest text-[11px]">Başarı Raporu</h2>
                <h3 className={`${ui.resultTitle} font-black tracking-tighter text-slate-900`}>
                  {resultData.percent >= 80 ? 'Süpersin! 🌟' : resultData.percent >= 60 ? 'Güzel! 👍' : 'Devam! 💪'}
                </h3>
              </div>

              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-xl">
                <div className="bg-white rounded-full px-10 py-8 md:px-14 md:py-10">
                  <span className={`${ui.percent} font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 leading-none`}>
                    {resultData.percent}%
                  </span>
                </div>
              </div>

              {/* AI */}
              <div className="bg-indigo-50 border border-indigo-100 p-5 md:p-6 rounded-[1.75rem] text-left shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-2xl text-2xl shadow-md">🤖</div>
                  <div>
                    <h4 className="font-black text-indigo-600 uppercase text-[11px] tracking-widest">AI Öğretmen Notu</h4>
                    <span className="text-slate-900 font-black text-lg md:text-xl tracking-tight leading-none">Geri Bildirim</span>
                  </div>
                </div>

                {loadingAi ? (
                  <p className="text-indigo-600 font-black italic flex items-center gap-2 pt-2">
                    <span className="animate-spin text-2xl">🌀</span> Yanlışlarını inceliyorum...
                  </p>
                ) : (
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed italic font-bold">
                    “{aiFeedback ?? 'Analiz hazırlanıyor…'}”
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-5 rounded-[1.75rem] border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Doğru</p>
                  <p className="text-3xl md:text-4xl font-black text-emerald-500">
                    {resultData.correct} <span className="text-base md:text-lg text-slate-300">/ {resultData.total}</span>
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-[1.75rem] border border-slate-100 flex flex-col justify-center">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Ders & Test</p>
                  <p className="text-base md:text-lg font-black text-indigo-500 truncate">
                    {subjectLabel} • T{selectedTestNo}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setView('subject-select')}
                  className="w-full py-4 bg-slate-900 text-white rounded-[1.75rem] font-black text-lg hover:bg-slate-800 transition-all shadow-lg"
                >
                  Yeni Ders Seç
                </button>
                <button
                  onClick={() => setView('test-select')}
                  className="w-full py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-[1.75rem] font-black text-lg hover:bg-slate-50 transition-all shadow-sm"
                >
                  Başka Test
                </button>
              </div>
            </div>

            {/* DETAYLI SORU LİSTESİ */}
            <div className="space-y-6 border-t-2 border-slate-100 pt-8 text-left">
              <h4 className={`${ui.detailTitle} font-black text-slate-800 tracking-tighter px-1`}>Detaylı Analiz</h4>

              <div className="grid gap-4">
                {quizQuestions.map((q, i) => {
                  const userAnswer = answers[i];
                  const isCorrect = userAnswer === q.correct;
                  const isEmpty = userAnswer === undefined;

                  const cardBg = isCorrect
                    ? 'border-emerald-200 bg-emerald-50/30'
                    : isEmpty
                    ? 'border-amber-200 bg-amber-50/40'
                    : 'border-rose-200 bg-rose-50/30';

                  const statusColor = isCorrect ? 'bg-emerald-500' : isEmpty ? 'bg-amber-500' : 'bg-rose-500';
                  const statusLabel = isCorrect ? 'DOĞRU ✅' : isEmpty ? 'BOŞ ⚠️' : 'YANLIŞ ❌';

                  return (
                    <div key={q.id ?? `${i}`} className={`p-5 md:p-6 rounded-[2rem] border-2 shadow-sm relative overflow-hidden ${cardBg}`}>
                      <div className={`absolute top-0 right-0 px-5 py-2 rounded-bl-[1.25rem] font-black text-white text-[10px] tracking-widest ${statusColor}`}>
                        {statusLabel}
                      </div>

                      <div className="flex gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-black text-base text-white shadow-md ${statusColor}`}>
                          {i + 1}
                        </div>

                        <div className="space-y-4 w-full">
                          <p className="font-black text-base md:text-lg text-slate-800 leading-snug">{q.prompt}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {!isEmpty && !isCorrect && (
                              <div className="p-4 rounded-[1.25rem] bg-white/70 border border-rose-100 shadow-sm">
                                <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Senin Cevabın</p>
                                <p className="text-rose-800 font-bold text-base">{q.options[userAnswer]}</p>
                              </div>
                            )}

                            <div
                              className={`p-4 rounded-[1.25rem] bg-white/90 border shadow-sm ${
                                isEmpty ? 'border-amber-200' : 'border-emerald-100'
                              }`}
                            >
                              <p
                                className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                                  isEmpty ? 'text-amber-500' : 'text-emerald-500'
                                }`}
                              >
                                Doğru Cevap
                              </p>
                              <p className={`${isEmpty ? 'text-amber-800' : 'text-emerald-800'} font-bold text-base`}>
                                {q.options[q.correct]}
                              </p>
                            </div>
                          </div>

                          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-[1.25rem] border border-slate-100 shadow-inner">
                            <p className="font-black text-indigo-600 text-[10px] uppercase tracking-widest mb-2">💡 Çözüm Notu</p>
                            <p className="text-slate-700 italic text-sm md:text-base font-semibold leading-relaxed">
                              {q.explanation}
                            </p>
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
        body {
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
