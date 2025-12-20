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

const Icons = {
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  )
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
      setAiFeedback("Analiz şu an hazırlanamadı ama detaylı çözümler aşağıdadır.");
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
    <main className="min-h-screen bg-slate-900 text-white font-sans pb-20 overflow-x-hidden relative">
      
      {/* Arka plan derinlik gradyanı */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-slate-900 to-slate-900 -z-10" />

      {view === 'result' && resultData.percent >= 80 && width > 0 && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      {/* max-w-7xl: Yanlardaki basıklığı çözer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-10">
        
        {/* Navigasyon */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link href="/" className="text-slate-400 hover:text-white font-bold transition-colors">← Ana Sayfa</Link>
          {view !== 'subject-select' && (
            <button onClick={() => setView('subject-select')} className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl hover:bg-white/10 transition-all font-black text-xs uppercase shadow-lg">Ders Değiştir</button>
          )}
        </div>

        {/* 1. DERS SEÇİMİ */}
        {view === 'subject-select' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <header className="text-center space-y-4">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white">5. Sınıf <span className="text-indigo-500">Test Paneli</span></h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium">Başarıya giden yolda ilk adımı seç!</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSelectedSubject(s.id); setView('term-select'); }} className={`group relative overflow-hidden rounded-[3rem] bg-gradient-to-br ${s.gradient} p-10 text-left transition-all hover:scale-[1.03] shadow-xl`}>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 bg-white/20 w-20 h-20 flex items-center justify-center rounded-3xl border border-white/20">{s.icon}</div>
                    <h2 className="text-4xl font-black text-white">{s.label}</h2>
                    <p className="text-white/90 mt-2 font-bold text-lg">{s.desc}</p>
                    <div className="mt-10 inline-flex items-center gap-3 font-black text-sm bg-black/20 px-5 py-3 rounded-2xl group-hover:bg-black/30 transition-all text-white">Konuları Keşfet ➔</div>
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
            <div className="bg-slate-800 border border-white/5 p-12 rounded-[4rem] text-center shadow-2xl space-y-10">
              <div className="space-y-3">
                <h2 className="text-5xl font-black capitalize text-indigo-400">{selectedSubject}</h2>
                <p className="text-slate-300 text-lg">Hangi dönemin testlerini çözmek istersin?</p>
              </div>
              <div className="grid gap-6">
                <button onClick={() => { setSelectedTerm(1); setView('test-select'); }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-indigo-600 transition-all flex justify-between items-center"><span className="text-3xl font-black text-white">1. Dönem</span><span className="text-4xl">🚀</span></button>
                <button onClick={() => { setSelectedTerm(2); setView('test-select'); }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-fuchsia-600 transition-all flex justify-between items-center"><span className="text-3xl font-black text-white">2. Dönem</span><span className="text-4xl">🔥</span></button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TEST SEÇİMİ */}
        {view === 'test-select' && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-12">
            <header className="text-center">
               <h2 className="text-5xl md:text-6xl font-black tracking-tighter capitalize text-white">{selectedSubject}</h2>
               <p className="text-indigo-400 font-black uppercase tracking-widest text-sm mt-2">{selectedTerm}. Dönem Test Listesi</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => startQuiz(num)}
                  className="group relative bg-slate-800 border border-white/10 p-10 rounded-[2.5rem] hover:border-indigo-500 hover:scale-105 transition-all shadow-xl flex flex-col items-center gap-2 overflow-hidden"
                >
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Test</span>
                  <span className="text-5xl font-black text-white">{num}</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>
            <div className="text-center">
               <button onClick={() => setView('term-select')} className="text-slate-500 hover:text-white font-black uppercase text-xs">← Dönem Seçimine Dön</button>
            </div>
          </div>
        )}

        {/* 4. QUIZ EKRANI - Aydınlık ve Enerjik Tema */}
{view === 'quiz' && quizQuestions.length > 0 && (
  <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
    
    {/* Üst Bilgi Paneli */}
    <div className="space-y-4 px-2">
      <div className="flex justify-between items-end">
        <span className="text-xs font-black uppercase text-indigo-600 tracking-widest">
          {selectedSubject} - Test {selectedTestNo}
        </span>
        <span className="text-xl font-mono font-black text-slate-400">
          {currentIdx + 1} <span className="text-slate-300">/</span> {quizQuestions.length}
        </span>
      </div>
      {/* İlerleme Çubuğu */}
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-700 shadow-lg" 
          style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} 
        />
      </div>
    </div>

    {/* ANA SORU KARTI (Burası artık bembeyaz ve gölgeli) */}
    <div className="bg-white border border-slate-200 p-8 md:p-16 rounded-[3rem] shadow-xl shadow-indigo-100/50 relative overflow-hidden">
      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-800 mb-12">
        {quizQuestions[currentIdx].prompt}
      </h3>
      
      <div className="grid gap-4 md:gap-6">
        {quizQuestions[currentIdx].options.map((opt: string, i: number) => (
          <button 
            key={i} 
            onClick={() => setAnswers(prev => ({ ...prev, [currentIdx]: i }))} 
            className={`p-6 md:p-8 rounded-2xl md:rounded-[2rem] border-2 text-left transition-all flex items-center gap-4 md:gap-6 group ${
              answers[currentIdx] === i 
              ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md' 
              : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:bg-white'
            }`}
          >
            {/* Şık Harfi (A, B, C...) */}
            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border-2 flex items-center justify-center font-black text-lg md:text-xl transition-all ${
              answers[currentIdx] === i 
              ? 'bg-indigo-600 border-indigo-600 text-white' 
              : 'bg-white border-slate-200 text-slate-400 group-hover:border-indigo-400'
            }`}>
              {String.fromCharCode(65 + i)}
            </div>
            <span className="text-lg md:text-xl font-bold">{opt}</span>
          </button>
        ))}
      </div>
    </div>

    {/* Alt Butonlar */}
    <div className="flex justify-between items-center gap-4 px-4 pb-12">
      <button 
        onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} 
        disabled={currentIdx === 0} 
        className="text-slate-400 font-bold hover:text-slate-600 disabled:opacity-0 transition-colors uppercase text-sm"
      >
        ← Önceki Soru
      </button>
      
      {currentIdx === quizQuestions.length - 1 ? (
        <button 
          onClick={() => { setView('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          disabled={answers[currentIdx] === undefined} 
          className="px-16 py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-black text-xl shadow-lg shadow-emerald-200 transition-all hover:scale-105 active:scale-95"
        >
          TESTİ BİTİR
        </button>
      ) : (
        <button 
          onClick={() => { setCurrentIdx(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          disabled={answers[currentIdx] === undefined} 
          className="px-16 py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95"
        >
          SIRADAKİ ➔
        </button>
      )}
    </div>
  </div>
)}
        {/* 5. SONUÇ VE AI ANALİZİ - Genişletilmiş Tasarım */}
{view === 'result' && (
  // max-w-4xl -> max-w-7xl yaparak tüm ekrana yayılmasını sağladık
  <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 animate-in zoom-in-95 duration-700 pb-20 px-2 md:px-0">
    
    {/* Ana Rapor Kartı */}
    <div className="bg-white border border-slate-200 p-5 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-2xl shadow-indigo-100/50 relative space-y-10 md:space-y-16">
      
      <div className="space-y-4">
        <h2 className="text-indigo-600 font-black uppercase tracking-widest text-xs md:text-sm">Test Raporu</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">Sonuçların Hazır!</h3>
      </div>

      {/* Başarı Yüzdesi Çemberi - Mobilde küçültüldü */}
      <div className="inline-flex items-center justify-center p-1.5 md:p-2 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full shadow-2xl">
        <div className="bg-white rounded-full px-12 py-8 md:px-24 md:py-16">
          <span className="text-6xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 leading-none">
            {resultData.percent}%
          </span>
        </div>
      </div>

      {/* AI ANALİZ KUTUSU - Geniş ve Okunaklı */}
      <div className="bg-indigo-50 border border-indigo-100 p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] text-left relative overflow-hidden group">
        <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
          <div className="bg-indigo-600 text-white p-3 md:p-4 rounded-2xl md:rounded-3xl text-2xl md:text-3xl animate-bounce-slow">🤖</div>
          <div>
            <h4 className="font-black text-indigo-600 uppercase text-[10px] md:text-xs tracking-widest">TestDünya AI</h4>
            <span className="text-slate-900 font-black text-xl md:text-2xl tracking-tight">Rehber Öğretmen</span>
          </div>
        </div>
        {loadingAi ? (
          <p className="text-indigo-600 font-black italic flex items-center gap-3">
            <span className="animate-spin text-xl">🌀</span> Yanlışlarını inceliyorum...
          </p>
        ) : (
          <p className="text-slate-700 text-lg md:text-2xl leading-relaxed italic font-medium">"{aiFeedback}"</p>
        )}
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 flex flex-col items-center">
          <p className="text-[10px] md:text-[11px] text-slate-400 font-black uppercase tracking-widest mb-2 md:mb-3">Doğru Sayısı</p>
          <p className="text-4xl md:text-6xl font-black text-emerald-500">{resultData.correct} <span className="text-lg md:text-xl text-slate-300">/ {resultData.total}</span></p>
        </div>
        <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 flex flex-col items-center">
          <p className="text-[10px] md:text-[11px] text-slate-400 font-black uppercase tracking-widest mb-2 md:mb-3">Ders Bilgisi</p>
          <p className="text-2xl md:text-3xl font-black capitalize text-indigo-400 truncate w-full">{selectedSubject} T{selectedTestNo}</p>
        </div>
      </div>

      {/* Aksiyon Butonları */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-6">
        <button onClick={() => setView('subject-select')} className="w-full py-6 md:py-8 bg-slate-900 text-white rounded-2xl md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:bg-slate-800 transition-all shadow-xl">YENİ DERS SEÇ</button>
        <button onClick={() => setView('test-select')} className="w-full py-6 md:py-8 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:bg-slate-50 transition-all shadow-lg">DİĞER TESTLER</button>
      </div>
    </div>
    
    {/* SORU DETAYLARI - Gelişmiş Eğitim Geri Bildirim Paneli */}
<div className="space-y-8 border-t border-slate-200 pt-16 text-left">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4">
        <h4 className="text-3xl md:text-4xl font-black text-slate-800">Soru Detayları</h4>
        
        {/* Silik çıkan T yazısını çok daha net ve belirgin yaptık */}
        <div className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-2xl shadow-lg shadow-indigo-100">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Test Bilgisi:</span>
          <span className="text-sm font-black uppercase">{selectedSubject} - T{selectedTestNo}</span>
        </div>
    </div>

    <div className="grid gap-6">
        {quizQuestions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.correct;
            const isEmpty = userAnswer === undefined;

            // Görsel Durum Belirleme (Doğru, Yanlış, Boş)
            let cardBg = "border-emerald-200 bg-emerald-50/40"; // Doğru
            let statusText = "DOĞRU";
            let statusColor = "bg-emerald-500";

            if (isEmpty) {
                cardBg = "border-amber-300 bg-amber-50/80"; // Boş (Altın Sarısı Tonu)
                statusText = "BOŞ GEÇİLDİ";
                statusColor = "bg-amber-500";
            } else if (!isCorrect) {
                cardBg = "border-rose-200 bg-rose-50/40"; // Yanlış
                statusText = "YANLIŞ";
                statusColor = "bg-rose-500";
            }

            return (
                <div key={q.id} className={`p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 shadow-sm relative overflow-hidden transition-all hover:shadow-md ${cardBg}`}>
                    
                    {/* Sağ Üst Durum Rozeti */}
                    <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-3xl font-black text-white text-[10px] tracking-tighter ${statusColor}`}>
                        {statusText}
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        {/* Soru Numarası */}
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shrink-0 text-white shadow-lg ${statusColor}`}>
                            {i + 1}
                        </div>

                        <div className="space-y-6 w-full pt-2">
                            <p className="font-extrabold text-xl md:text-2xl text-slate-800 leading-tight">
                                {q.prompt}
                            </p>

                            {/* Cevap Analiz Alanı */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Senin Seçeneğin (Sadece yanlışsa ve boş değilse gösterilir) */}
                                {!isEmpty && !isCorrect && (
                                    <div className="p-5 rounded-3xl bg-white/60 border border-rose-100">
                                        <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Senin Seçeneğin</p>
                                        <p className="text-rose-700 font-bold text-lg">{q.options[userAnswer]}</p>
                                    </div>
                                )}

                                {/* Doğru Cevap (Her durumda gösterilir) */}
                                <div className={`p-5 rounded-3xl bg-white/80 border ${isEmpty ? 'border-amber-200' : 'border-emerald-100'} shadow-sm`}>
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isEmpty ? 'text-amber-500' : 'text-emerald-500'}`}>
                                        Doğru Cevap
                                    </p>
                                    <p className={`${isEmpty ? 'text-amber-700' : 'text-emerald-700'} font-bold text-lg`}>
                                        {q.options[q.correct]}
                                    </p>
                                </div>
                            </div>

                            {/* Çözüm ve Açıklama */}
                            <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-inner">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">💡</span>
                                    <span className="font-black text-indigo-600 text-xs uppercase tracking-widest">Çözüm Rehberi</span>
                                </div>
                                <p className="text-slate-500 italic text-base md:text-xl font-medium leading-relaxed">
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
