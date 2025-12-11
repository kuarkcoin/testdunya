'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- ICONS ---
const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const Headphones = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M2 19v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M17 14h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/></svg>
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

// --- STATIC LABELS ---
const getLabels = (isGlobal: boolean) => ({
  loading: isGlobal ? "Loading Test..." : "Test Hazırlanıyor...",
  errorTitle: isGlobal ? "Error Occurred" : "Bir Sorun Oluştu",
  homeButton: isGlobal ? "Back to Home" : "Ana Sayfaya Dön",
  finish: isGlobal ? "Finish Test" : "Bitir",
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
});

// --- HELPERS ---
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function formatText(text: string) {
  if (!text) return null;
  if (text.includes('<div') || text.includes('<p>') || text.includes('custom-reading-content')) {
     return <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: text }} />;
  }
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

// --- MEMOIZED QUESTION CARD ---
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

  const isGlobal = testId?.includes('ielts') || false;
  const labels = getLabels(isGlobal);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [testTitle, setTestTitle] = useState('');
  
  // NEW: Audio State
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  // 1) LOAD DATA
  useEffect(() => {
    if (!testId) return;
    setLoading(true);

    let jsonUrl = '';
    // Otomatik dosya bulucu
    if (testId.includes('ielts-reading')) jsonUrl = '/data/tests/ielts-reading.json';
    else if (testId.includes('ielts-writing')) jsonUrl = '/data/tests/ielts-writing.json';
    else if (testId.includes('ielts-vocab')) jsonUrl = '/data/tests/ielts-vocab.json';
    else if (testId.includes('ielts-grammar')) jsonUrl = '/data/tests/ielts-grammar.json';
    else if (testId.includes('ielts-listening')) jsonUrl = '/data/tests/ielts-listening.json';
    else jsonUrl = `/data/tests/${testId}.json`; // Fallback for YKS/KPSS

    fetch(`${jsonUrl}?t=${Date.now()}`)
      .then(res => {
        if (!res.ok) throw new Error(isGlobal ? "Test file not found." : "Test dosyası bulunamadı.");
        return res.json();
      })
      .then(rawdata => {
        let normalizedQuestions: Question[] = [];
        let fetchedTitle = testId.replace(/-/g, ' ').toUpperCase();
        setTestTitle(fetchedTitle);

        // --- SENARYO A: IELTS READING/LISTENING (İç içe yapı) ---
        if ((testId.includes('reading') || testId.includes('listening')) && Array.isArray(rawdata) && rawdata[0].passageId) {
            
            // LISTENING ÖZEL: Audio varsa al
            if (testId.includes('listening') && rawdata[0].audio) {
                setAudioSrc(rawdata[0].audio);
            }

            rawdata.forEach((passage: any) => {
                if (Array.isArray(passage.questions)) {
                    passage.questions.forEach((q: any, idx: number) => {
                        let combinedPrompt = q.prompt;

                        // SADECE READING İÇİN METNİ GÖSTER (Listening için metin göstermeyiz, dinlenir)
                        if (testId.includes('reading')) {
                             combinedPrompt = `
                                <div class="mb-8 p-6 bg-white border-l-4 border-sky-500 shadow-sm rounded-r-xl text-slate-700 text-base leading-relaxed font-serif custom-reading-content">
                                  <h3 class="font-bold text-sky-900 text-xl mb-4 border-b border-sky-100 pb-2">
                                    ${passage.title}
                                  </h3>
                                  ${passage.text}
                                </div>
                                <div class="font-bold text-slate-900 text-lg mt-6 pt-4 border-t border-slate-100">
                                   ${q.prompt}
                                </div>
                            `;
                        }

                        const choices = ['A', 'B', 'C', 'D'].map((L, i) => {
                            if (!q[L]) return null;
                            return { id: ['A','B','C','D'][i], text: q[L] };
                        }).filter(Boolean) as Choice[];

                        normalizedQuestions.push({
                            id: q.id || `q-${passage.passageId}-${idx}`,
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
            else if (rawdata && rawdata.questions) rawList = rawdata.questions;

            normalizedQuestions = rawList.map((item, idx) => {
                const anyItem = item as any; 
                let choices: Choice[] = [];
                let rawOptions: string[] = [];

                if (Array.isArray(anyItem.options)) rawOptions = anyItem.options;
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

                let finalAnswerId = (anyItem.answer || anyItem.correct || "").toString().trim();
                if (finalAnswerId.length === 1) finalAnswerId = finalAnswerId.toUpperCase();
                else {
                    const found = choices.find(c => c.text === finalAnswerId);
                    if (found) finalAnswerId = found.id;
                }

                return {
                    id: anyItem.id || String(idx),
                    prompt: anyItem.prompt || anyItem.question || anyItem.soru || "...",
                    choices: choices,
                    answer: finalAnswerId,
                    explanation: anyItem.explanation || ""
                };
            });
        }

        if (normalizedQuestions.length === 0) {
            setError(isGlobal ? "No questions found." : "Soru bulunamadı.");
        } else {
            setQuestions(normalizedQuestions);
            // SÜRE AYARI
            if (testId.includes('reading')) setTimeLeft(1200); // 20dk
            else if (testId.includes('listening')) setTimeLeft(1800); // 30dk (Listening uzun sürer)
            else {
                const calc = normalizedQuestions.length * 60;
                setTimeLeft(calc < 600 ? 600 : calc);
            }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Error loading test.");
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

  // 3) HANDLER
  const handleAnswerChange = useCallback((qId: string, val: string) => {
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
        const isCorrect = (userVal === q.answer);
        if (isCorrect) {
            correctCount++;
            mistakeList = mistakeList.filter(m => m.uniqueId !== `${testId}-${q.id}`);
        } else if (userVal) {
            const uniqueId = `${testId}-${q.id}`;
            if (!mistakeList.some(m => m.uniqueId === uniqueId)) {
                mistakeList.push({
                    uniqueId, testTitle: testId, prompt: q.prompt, choices: q.choices,
                    answer: q.answer, myWrongAnswer: userVal, explanation: q.explanation,
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

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">{labels.loading}</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500 font-bold">{error}</div>;

  // --- RESULT SCREEN ---
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
            <h1 className="text-3xl font-black text-slate-800 mb-6">{labels.resultTitle}</h1>
            <div className="text-6xl font-black text-indigo-600 mb-4">%{percentage}</div>
            <div className="text-slate-500 font-bold">{score} / {questions.length}</div>
            <div className="flex justify-center gap-4 mt-8">
               <Link href="/" className="px-6 py-2 bg-slate-100 rounded-lg font-bold">{labels.homeButton}</Link>
               <Link href="/mistakes" className="px-6 py-2 bg-rose-100 text-rose-600 rounded-lg font-bold">{labels.seeMistakes}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- QUIZ SCREEN ---
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* STICKY HEADER WITH AUDIO PLAYER */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 transition-all">
        <div className="max-w-3xl mx-auto px-4 py-3">
            
            {/* Top Row: Back & Timer */}
            <div className="flex items-center justify-between mb-3">
                <Link href="/" className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition">
                  <ArrowLeft className="w-6 h-6" />
                </Link>
                <div className={`flex items-center gap-2 text-lg font-mono font-bold px-4 py-1.5 rounded-xl border-2 ${timeLeft! < 60 ? 'text-rose-600 bg-rose-50 border-rose-100 animate-pulse' : 'text-indigo-600 bg-indigo-50 border-indigo-100'}`}>
                   <Clock className="w-5 h-5" />
                   {formatTime(timeLeft || 0)}
                </div>
                <button onClick={handleSubmit} className="text-sm font-bold text-white bg-slate-900 px-6 py-2.5 rounded-xl hover:bg-slate-800 shadow-md">
                  {labels.finish}
                </button>
            </div>

            {/* AUDIO PLAYER (Sadece Listening Testi ise ve Audio Kaynağı Varsa) */}
            {audioSrc && (
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 flex items-center gap-3 animate-in slide-in-from-top-2">
                    <div className="bg-sky-200 text-sky-700 p-2 rounded-full">
                        <Headphones className="w-5 h-5" />
                    </div>
                    <audio controls className="w-full h-8 outline-none" controlsList="nodownload">
                        <source src={audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
      </div>

      {/* QUESTIONS */}
      <div className="max-w-3xl mx-auto px-4 space-y-8 mt-8">
        {questions.map((q, idx) => (
           <QuestionCard key={q.id} q={q} idx={idx} answer={answers[q.id] || ''} onAnswer={handleAnswerChange} labels={labels} />
        ))}
        <div className="pt-8 pb-12 flex justify-center">
            <button onClick={handleSubmit} className="w-full max-w-md py-4 rounded-2xl text-white text-xl font-bold shadow-xl bg-indigo-600 hover:bg-indigo-700">
               {labels.completeTest}
            </button>
        </div>
      </div>
    </div>
  );
}
