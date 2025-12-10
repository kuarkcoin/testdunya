'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- ICONS ---
const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);

// --- TYPES ---
interface Choice {
  id: string; 
  text: string;
}

interface Question {
  id: string;
  prompt: string;
  choices: Choice[];
  answer: string;
  explanation?: string;
}

// --- HELPERS ---
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Format Text: HTML (Reading) ve Badge (Grammar) ayrımı
function formatText(text: string) {
  if (!text) return null;

  // 1. Reading HTML İçeriği
  if (text.includes('<div') || text.includes('<p>') || text.includes('custom-scrollbar')) {
     return <div dangerouslySetInnerHTML={{ __html: text }} />;
  }

  // 2. Normal Metin (**bold** badge'leri)
  const parts = String(text).split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          let content = part.slice(2, -2).replace(/^['"]+|['"]+$/g, '');
          return <span key={index} className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded mx-1 border border-indigo-100 text-sm shadow-sm">{content}</span>;
        }
        return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </>
  );
}

// --- MEMOIZED QUESTION CARD (SCROLL SORUNUNU ÇÖZEN KAHRAMAN) ---
// Bu bileşen, sadece kendi props'ları değişirse render olur.
// Üstteki parent state değişse bile burası sabit kalır, böylece scroll resetlenmez.
const QuestionCard = React.memo(({ q, idx, answer, onAnswer, labels }: { 
  q: Question, 
  idx: number, 
  answer: string, 
  onAnswer: (qid: string, val: string) => void,
  labels: any
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
         <span className="bg-slate-100 text-slate-500 text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
           {labels.question} {idx + 1}
         </span>
      </div>

      <div className="text-lg sm:text-xl font-medium text-slate-800 mb-8 leading-relaxed">
         {formatText(q.prompt)}
      </div>

      <div className="grid gap-3">
        {q.choices.map((c) => (
          <label key={c.id} className={`group cursor-pointer flex items-center p-4 rounded-2xl border-2 transition-all duration-200 active:scale-[0.99] ${
              answer === c.id 
              ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-1 ring-indigo-600' 
              : 'border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/10'
          }`}>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors flex-shrink-0 ${
                answer === c.id ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 group-hover:border-indigo-400'
            }`}>
                {answer === c.id && <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />}
            </div>
            
            <input 
              type="radio" 
              name={`question-${q.id}`} 
              className="hidden" 
              checked={answer === c.id} 
              onChange={() => onAnswer(q.id, c.id)} 
            />
            
            <span className={`text-base sm:text-lg select-none ${answer === c.id ? 'text-indigo-900 font-semibold' : 'text-slate-600 font-medium'}`}>
               {c.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
});
QuestionCard.displayName = 'QuestionCard';

// --- MAIN PAGE COMPONENT ---
export default function QuizPage() {
  const params = useParams();
  const testId = params?.testId as string || params?.id as string;

  // --- DIL AYARLARI (LOCALIZATION) ---
  const isGlobal = testId?.includes('ielts') || false;
  
  const LABELS = {
    loading: isGlobal ? "Loading Test..." : "Test Hazırlanıyor...",
    errorTitle: isGlobal ? "Error Occurred" : "Bir Sorun Oluştu",
    homeButton: isGlobal ? "Back to Home" : "Ana Sayfaya Dön",
    finish: isGlobal ? "Finish" : "Bitir",
    completeTest: isGlobal ? "Complete Test" : "Testi Tamamla",
    question: isGlobal ? "QUESTION" : "SORU",
    resultTitle: isGlobal ? "Test Result" : "Test Sonucu",
    correct: isGlobal ? "Correct" : "Doğru",
    total: isGlobal ? "Total" : "Toplam",
    score: isGlobal ? "Score" : "Başarı",
    backList: isGlobal ? "Back to List" : "Listeye Dön",
    seeMistakes: isGlobal ? "See My Mistakes" : "Hatalarımı Gör",
    analysis: isGlobal ? "Detailed Analysis" : "Detaylı Analiz",
    explanation: isGlobal ? "Explanation:" : "Açıklama:",
    yourChoice: isGlobal ? "YOUR CHOICE" : "SEÇİMİN",
    correctBadge: isGlobal ? "CORRECT" : "DOĞRU"
  };

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 1) LOAD DATA & NORMALIZE
  useEffect(() => {
    if (!testId) return;
    setLoading(true);

    const jsonPath = `/data/tests/${testId}.json`;

    fetch(`${jsonPath}?t=${Date.now()}`)
      .then(res => {
        if (!res.ok) throw new Error(isGlobal ? "Test file not found." : "Test dosyası bulunamadı.");
        return res.json();
      })
      .then(rawdata => {
        let normalizedQuestions: Question[] = [];

        // --- SENARYO A: IELTS READING ---
        if (testId.includes('reading') && Array.isArray(rawdata) && rawdata[0].passageId) {
            rawdata.forEach((passage: any) => {
                if (Array.isArray(passage.questions)) {
                    passage.questions.forEach((q: any, idx: number) => {
                        const combinedPrompt = `
                            <div class="mb-6 p-4 bg-white border-l-4 border-sky-500 shadow-sm rounded text-slate-700 text-sm leading-7 h-80 overflow-y-auto font-serif custom-scrollbar" style="overscroll-behavior: contain;">
                              <h4 class="font-bold text-sky-900 mb-2 sticky top-0 bg-white pb-2 border-b border-slate-100 z-10">
                                ${passage.title}
                              </h4>
                              ${passage.text}
                            </div>
                            <div class="font-bold text-slate-900 text-lg mt-4 pt-2">
                               ${q.prompt}
                            </div>
                        `;
                        
                        const choices = ['A', 'B', 'C', 'D'].map((L, i) => {
                            if (!q[L]) return null;
                            return { id: ['A','B','C','D'][i], text: q[L] };
                        }).filter(Boolean) as Choice[];

                        normalizedQuestions.push({
                            id: q.id || `read-${passage.passageId}-${idx}`,
                            prompt: combinedPrompt,
                            choices: choices,
                            answer: q.correct,
                            explanation: q.explanation
                        });
                    });
                }
            });
        } 
        // --- SENARYO B: STANDART TESTLER ---
        else {
            let rawList: any[] = [];
            if (Array.isArray(rawdata)) rawList = rawdata;
            else if (rawdata && rawdata.questions && Array.isArray(rawdata.questions)) rawList = rawdata.questions;

            normalizedQuestions = rawList.map((item, idx) => {
                const anyItem = item as any; 
                let choices: Choice[] = [];
                let rawOptions: string[] = [];

                if (Array.isArray(anyItem.options)) rawOptions = anyItem.options;
                else if (Array.isArray(anyItem.secenekler)) rawOptions = anyItem.secenekler;
                else if (anyItem.A || anyItem.B) { 
                     if(anyItem.A) rawOptions.push(anyItem.A);
                     if(anyItem.B) rawOptions.push(anyItem.B);
                     if(anyItem.C) rawOptions.push(anyItem.C);
                     if(anyItem.D) rawOptions.push(anyItem.D);
                     if(anyItem.E) rawOptions.push(anyItem.E);
                } 
                
                choices = rawOptions.map((optText, optIdx) => ({
                    id: String.fromCharCode(65 + optIdx),
                    text: String(optText)
                }));

                let finalAnswerId = "UNKNOWN";
                let rawAnswer = (anyItem.answer || anyItem.correct || anyItem.cevap || anyItem.Cevap || "").toString().trim();

                if (rawAnswer.length === 1 && rawAnswer.match(/[A-Ea-e]/)) {
                    finalAnswerId = rawAnswer.toUpperCase();
                } else {
                    const matchedOption = choices.find(c => 
                        c.text.replace(/\s+/g, '').toLowerCase() === rawAnswer.replace(/\s+/g, '').toLowerCase()
                    );
                    if (matchedOption) finalAnswerId = matchedOption.id;
                }

                const explanationText = anyItem.explanation || anyItem.Explanation || anyItem.aciklama || anyItem.Açıklama || "";

                return {
                    id: anyItem.id || String(idx),
                    prompt: anyItem.prompt || anyItem.question || anyItem.soru || (isGlobal ? "Question text not found." : "Soru metni bulunamadı."),
                    choices: choices,
                    answer: finalAnswerId,
                    explanation: explanationText
                };
            });
        }

        if (normalizedQuestions.length === 0) {
            setError(isGlobal ? "No questions found in this test." : "Bu testte görüntülenecek soru bulunamadı.");
        } else {
            setQuestions(normalizedQuestions);
            
            // --- TIME LOGIC (SÜRE AYARI) ---
            if (testId.includes('reading')) {
                // Reading testi ise sabit 20 Dakika (1200 sn)
                setTimeLeft(1200);
            } else {
                // Diğerleri soru başı 1 dakika (60 sn)
                setTimeLeft(normalizedQuestions.length * 60);
            }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(`${isGlobal ? "Error" : "Hata"}: ${err.message}`);
        setLoading(false);
      });
  }, [testId, isGlobal]);

  // 2) TIMER
  useEffect(() => {
    if (timeLeft === null || showResult || loading) return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const timerId = setInterval(() => setTimeLeft((p) => (p !== null && p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, showResult, loading]);

  // 3) HANDLER FOR ANSWERS (MEMOIZED TO PREVENT RERENDER)
  const handleAnswerChange = React.useCallback((qId: string, val: string) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  }, []);

  // 4) SUBMIT
  const handleSubmit = () => {
    let correctCount = 0;
    let mistakeList: any[] = [];
    try {
        const stored = localStorage.getItem('my_mistakes');
        if (stored) mistakeList = JSON.parse(stored);
    } catch(e) { mistakeList = []; }

    questions.forEach((q) => {
        const userVal = answers[q.id]; 
        const correctId = q.answer;
        const isCorrect = (userVal === correctId);

        if (isCorrect) {
            correctCount++;
            mistakeList = mistakeList.filter(m => m.uniqueId !== `${testId}-${q.id}`);
        } else if (userVal) {
            const uniqueId = `${testId}-${q.id}`;
            const exists = mistakeList.some(m => m.uniqueId === uniqueId);
            if (!exists) {
                mistakeList.push({
                    uniqueId: uniqueId,
                    testTitle: testId,
                    prompt: q.prompt,
                    choices: q.choices,
                    answer: correctId,
                    myWrongAnswer: userVal,
                    explanation: q.explanation,
                    savedAt: new Date().toISOString()
                });
            }
        }
    });

    localStorage.setItem('my_mistakes', JSON.stringify(mistakeList));
    setScore(correctCount);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  if (loading) return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-500">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
          <p className="font-bold animate-pulse">{LABELS.loading}</p>
      </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-xl text-center max-w-md">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="font-bold text-xl text-slate-800 mb-2">{LABELS.errorTitle}</h2>
            <p className="text-red-500 mb-6">{error}</p>
            <Link href="/" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">
                {LABELS.homeButton}
            </Link>
        </div>
    </div>
  );

  // --- RESULT SCREEN ---
  if (showResult) {
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* SKOR KARTI */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />
            <h1 className="text-3xl font-black text-slate-800 mb-6">{LABELS.resultTitle}</h1>

            <div className="flex justify-center items-center gap-4 sm:gap-12 mb-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-emerald-600">{score}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{LABELS.correct}</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-slate-700">{total}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{LABELS.total}</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className={`text-4xl font-black ${percentage >= 70 ? 'text-emerald-500' : 'text-orange-500'}`}>
                  %{percentage}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{LABELS.score}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/" className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                  {LABELS.backList}
                </Link>
                <Link href="/mistakes" className="px-6 py-3 bg-rose-50 text-rose-600 border border-rose-200 font-bold rounded-xl hover:bg-rose-100 transition-colors flex items-center justify-center gap-2">
                  <span>📕</span> {LABELS.seeMistakes}
                </Link>
            </div>
          </div>

          {/* DETAYLI ANALİZ */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-700 ml-2 border-l-4 border-indigo-500 pl-3">{LABELS.analysis}</h2>

            {questions.map((q, idx) => {
              const userAnswerId = answers[q.id];
              const correctId = q.answer; 
              const isCorrect = userAnswerId === correctId;
              const isUserAnswered = !!userAnswerId;

              let cardBorder = isCorrect ? 'border-emerald-200' : 'border-rose-200';
              let cardBg = isCorrect ? 'bg-emerald-50/30' : 'bg-white';

              return (
                <div key={q.id} className={`p-6 rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm ${
                      isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}>
                      {isCorrect ? '✓' : '✕'}
                    </div>

                    <div className="flex-grow">
                      <div className="text-lg font-medium text-slate-800 mb-5 leading-relaxed">
                         {formatText(q.prompt)}
                      </div>

                      <div className="grid gap-2">
                        {q.choices.map((c) => {
                          const isSelected = userAnswerId === c.id;
                          const isTheCorrectAnswer = c.id === correctId;
                          
                          let style = 'p-3 rounded-xl border flex items-center justify-between transition-all ';
                          if (isTheCorrectAnswer) style += 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold shadow-sm';
                          else if (isSelected) style += 'bg-rose-100 border-rose-300 text-rose-900 font-medium';
                          else style += 'bg-white/60 border-slate-200 text-slate-500 opacity-60';

                          return (
                            <div key={c.id} className={style}>
                              <div className="flex items-center gap-3">
                                <span className="font-bold opacity-50 text-sm">{c.id})</span>
                                <span>{c.text}</span>
                              </div>
                              {isTheCorrectAnswer && <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-bold">{LABELS.correctBadge}</span>}
                              {isSelected && !isTheCorrectAnswer && <span className="text-[10px] bg-rose-200 text-rose-800 px-2 py-0.5 rounded-full font-bold">{LABELS.yourChoice}</span>}
                            </div>
                          );
                        })}
                      </div>

                      {/* AÇIKLAMA ALANI */}
                      {q.explanation && !isCorrect && (
                        <div className="mt-5 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-900 flex gap-3 items-start animate-in fade-in">
                          <span className="text-xl">💡</span>
                          <div>
                            <span className="font-bold block mb-1 text-indigo-700">{LABELS.explanation}</span>
                            <span className="leading-relaxed opacity-90">{formatText(q.explanation)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- QUIZ SOLVING SCREEN ---
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* HEADER */}
      <div className="sticky top-4 z-30 max-w-3xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200/60 transition-all">
            <Link href="/" className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            
            <div className={`flex items-center gap-2 text-lg font-mono font-bold px-4 py-1.5 rounded-xl border-2 transition-colors ${timeLeft !== null && timeLeft < 60 ? 'text-rose-600 bg-rose-50 border-rose-100 animate-pulse' : 'text-indigo-600 bg-indigo-50 border-indigo-100'}`}>
               <Clock className="w-5 h-5" />
               {timeLeft !== null ? formatTime(timeLeft) : '...'}
            </div>

            <button onClick={handleSubmit} className="text-sm font-bold text-white bg-slate-900 px-6 py-2.5 rounded-xl hover:bg-slate-800 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              {LABELS.finish}
            </button>
        </div>
      </div>

      {/* SORULAR (Render with Memoized Component) */}
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        {questions.map((q, idx) => (
           <QuestionCard 
             key={q.id} // Stable ID is crucial
             q={q}
             idx={idx}
             answer={answers[q.id] || ''}
             onAnswer={handleAnswerChange}
             labels={LABELS}
           />
        ))}

        <div className="pt-8 pb-12 flex justify-center">
            <button onClick={handleSubmit} className="w-full max-w-md py-4 rounded-2xl text-white text-xl font-bold shadow-xl transition-all transform active:scale-[0.99] bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-900/30 flex items-center justify-center gap-2">
               <span>{LABELS.completeTest}</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
        </div>
      </div>
    </div>
  );
}
