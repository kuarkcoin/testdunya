'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// --- ICONS ---
const Mic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
);
const Refresh = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
);
const Play = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="6 3 20 12 6 21 6 3"/></svg>
);
const Stop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="4" width="16" height="16" rx="2" /></svg>
);
const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
);
const BookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

// --- TYPES (GÜNCELLENDİ: Örnek Cevaplar İçin) ---
interface Part3ItemObj {
  question: string;
  answer: string;
}

interface FullTest {
  id: number;
  part1: string[];
  part2: {
    topic: string;
    bullets: string[];
    sample_answer?: string; // Opsiyonel (Eski dosyalarda yoksa hata vermez)
  };
  // Part 3 hem düz yazı (string) hem de cevaplı (obje) olabilir
  part3: (string | Part3ItemObj)[]; 
}

// --- İÇ BİLEŞEN ---
function SimulatorContent() {
  const [topics, setTopics] = useState<FullTest[]>([]);
  const [currentTest, setCurrentTest] = useState<FullTest | null>(null);
  
  const [phase, setPhase] = useState<'idle' | 'part1' | 'part2-prep' | 'part2-speaking' | 'part3' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);

  // Yeni State'ler: Cevapları Göster/Gizle
  const [showPart2Answer, setShowPart2Answer] = useState(false);
  const [expandedPart3Answers, setExpandedPart3Answers] = useState<number[]>([]);
  
  const searchParams = useSearchParams();
  const testId = searchParams.get('test') || '1';
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch(`/data/tests/ielts-speaking${testId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then(data => {
        setTopics(data);
        reset();
      })
      .catch(err => console.error("Hata:", err));
  }, [testId]);

  useEffect(() => {
    if (phase !== 'part2-prep' && phase !== 'part2-speaking') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimerComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  const handleTimerComplete = () => {
    if (phase === 'part2-prep') startPart2Speaking();
    else if (phase === 'part2-speaking') startPart3();
  };

  // --- ACTIONS ---
  const startSession = () => {
    if (topics.length === 0) return;
    const random = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTest(random);
    setPhase('part1');
    setShowPart2Answer(false); // Yeni testte cevapları gizle
    setExpandedPart3Answers([]);
  };

  const startPart2Prep = () => { setPhase('part2-prep'); setTimeLeft(60); };
  const startPart2Speaking = () => { setPhase('part2-speaking'); setTimeLeft(120); };
  const startPart3 = () => { setPhase('part3'); };
  const finishTest = () => { setPhase('finished'); };

  const reset = () => {
    setPhase('idle');
    setCurrentTest(null);
    setTimeLeft(0);
    setShowPart2Answer(false);
    setExpandedPart3Answers([]);
  };

  const togglePart3Answer = (index: number) => {
    setExpandedPart3Answers(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const formatTime = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-slate-500 hover:text-indigo-600 font-bold text-sm flex items-center gap-2">← Dashboard</Link>
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
             <span className={`w-2 h-2 rounded-full animate-pulse ${phase === 'idle' ? 'bg-slate-300' : 'bg-green-500'}`}></span>
             <span className="text-xs font-bold text-slate-600">Full Exam Mode - Test {testId}</span>
          </div>
        </div>

        {/* PROGRESS BAR */}
        {phase !== 'idle' && phase !== 'finished' && (
           <div className="flex gap-2 mb-6">
              <div className={`h-2 flex-1 rounded-full transition-all ${phase === 'part1' ? 'bg-indigo-500' : 'bg-indigo-200'}`}></div>
              <div className={`h-2 flex-1 rounded-full transition-all ${(phase === 'part2-prep' || phase === 'part2-speaking') ? 'bg-indigo-500' : 'bg-indigo-200'}`}></div>
              <div className={`h-2 flex-1 rounded-full transition-all ${phase === 'part3' ? 'bg-indigo-500' : 'bg-indigo-200'}`}></div>
           </div>
        )}

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative min-h-[500px] flex flex-col">
          
          <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
             <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
               {phase === 'idle' && "IELTS Speaking Simulator"}
               {phase === 'part1' && "Part 1: Interview"}
               {phase === 'part2-prep' && "Part 2: Preparation"}
               {phase === 'part2-speaking' && "Part 2: Speaking"}
               {phase === 'part3' && "Part 3: Discussion"}
               {phase === 'finished' && "Test Completed"}
             </h2>
             {(phase === 'part2-prep' || phase === 'part2-speaking') && (
                <div className={`text-2xl font-mono font-black ${phase === 'part2-prep' ? 'text-amber-500' : 'text-indigo-600'}`}>
                   {formatTime(timeLeft)}
                </div>
             )}
          </div>

          <div className="flex-grow p-8 flex flex-col items-center justify-center text-center relative overflow-y-auto max-h-[65vh]">
            
            {phase === 'idle' && (
              <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                 <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4"><Mic className="w-10 h-10 text-indigo-400" /></div>
                 <h3 className="text-2xl font-bold text-slate-800">Full Speaking Test</h3>
                 <div className="text-slate-500 max-w-md mx-auto text-sm space-y-2 text-left bg-slate-50 p-4 rounded-xl">
                    <p><strong>Part 1:</strong> Interview</p>
                    <p><strong>Part 2:</strong> Cue Card (Sample Answers Included!)</p>
                    <p><strong>Part 3:</strong> Discussion</p>
                 </div>
                 <button onClick={startSession} className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                    <Play className="w-5 h-5 fill-current" /> Start Test
                 </button>
              </div>
            )}

            {currentTest && (
                <>
                  {phase === 'part1' && (
                    <div className="w-full text-left space-y-6 animate-in slide-in-from-right duration-300">
                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-indigo-800 text-sm mb-4">Answer these questions briefly (2-3 sentences each).</div>
                        <ul className="space-y-4">
                            {currentTest.part1.map((q, i) => (
                                <li key={i} className="flex gap-3 text-lg font-medium text-slate-700">
                                    <span className="text-indigo-400 font-bold">{i+1}.</span> {q}
                                </li>
                            ))}
                        </ul>
                    </div>
                  )}

                  {(phase === 'part2-prep' || phase === 'part2-speaking') && (
                     <div className="w-full text-left max-w-lg mx-auto animate-in slide-in-from-right duration-300 pb-10">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 leading-tight">{currentTest.part2.topic}</h3>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                          <p className="text-sm font-bold text-slate-500 mb-4">You should say:</p>
                          <ul className="space-y-3">
                            {currentTest.part2.bullets.map((bull, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span> {bull}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {phase === 'part2-speaking' && <div className="flex justify-center items-center gap-1 h-8 animate-pulse text-indigo-500 font-bold mb-4">● Recording...</div>}
                        
                        {/* SAMPLE ANSWER BUTTON (PART 2) */}
                        {currentTest.part2.sample_answer && (
                          <div className="mt-8">
                             <button onClick={() => setShowPart2Answer(!showPart2Answer)} className="w-full flex items-center justify-between p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 font-bold hover:bg-emerald-100 transition">
                                <span className="flex items-center gap-2"><BookOpen className="w-5 h-5"/> See Band 9 Sample Answer</span>
                                <ChevronDown className={`w-5 h-5 transition-transform ${showPart2Answer ? 'rotate-180' : ''}`} />
                             </button>
                             {showPart2Answer && (
                               <div className="mt-2 p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-slate-700 leading-relaxed text-sm animate-in slide-in-from-top-2 whitespace-pre-wrap">
                                  {currentTest.part2.sample_answer}
                               </div>
                             )}
                          </div>
                        )}
                     </div>
                  )}

                  {phase === 'part3' && (
                    <div className="w-full text-left space-y-6 animate-in slide-in-from-right duration-300 pb-10">
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-800 text-sm mb-4">Give detailed answers (explain reasons, give examples).</div>
                        <ul className="space-y-4">
                            {currentTest.part3.map((item, i) => {
                                // Hem string (eski) hem obje (yeni) formatını destekle
                                const question = typeof item === 'string' ? item : item.question;
                                const answer = typeof item === 'object' ? item.answer : null;

                                return (
                                  <li key={i} className="flex flex-col gap-2">
                                      <div className="flex gap-3 text-lg font-medium text-slate-700">
                                          <span className="text-amber-500 font-bold">{i+1}.</span> {question}
                                      </div>
                                      
                                      {/* SAMPLE ANSWER TOGGLE (PART 3) */}
                                      {answer && (
                                        <div className="ml-8">
                                           <button onClick={() => togglePart3Answer(i)} className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1 mb-2">
                                              {expandedPart3Answers.includes(i) ? 'Hide Answer' : 'Show Band 9 Answer'}
                                           </button>
                                           {expandedPart3Answers.includes(i) && (
                                             <div className="p-3 bg-amber-50 rounded-lg text-slate-600 text-sm border border-amber-100 italic">
                                                {answer}
                                             </div>
                                           )}
                                        </div>
                                      )}
                                  </li>
                                );
                            })}
                        </ul>
                    </div>
                  )}

                  {phase === 'finished' && (
                     <div className="text-center animate-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-10 h-10" /></div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Test Completed!</h3>
                        <p className="text-slate-500">You have completed all 3 parts of the speaking test.</p>
                     </div>
                  )}
                </>
            )}
          </div>

          {/* BOTTOM CONTROLS */}
          {phase !== 'idle' && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
               <button onClick={reset} className="px-4 py-2 text-slate-500 font-bold hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex items-center gap-2"><Stop className="w-4 h-4" /> Quit</button>
               {phase === 'part1' && <button onClick={startPart2Prep} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2">Start Part 2 <ArrowRight className="w-4 h-4" /></button>}
               {phase === 'part2-prep' && <button onClick={startPart2Speaking} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2">Start Speaking <ArrowRight className="w-4 h-4" /></button>}
               {phase === 'part2-speaking' && <button onClick={startPart3} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2">Finish & Go to Part 3 <ArrowRight className="w-4 h-4" /></button>}
               {phase === 'part3' && <button onClick={finishTest} className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-600 transition-all flex items-center gap-2">Finish Test <Check className="w-4 h-4" /></button>}
               {phase === 'finished' && <button onClick={startSession} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"><Refresh className="w-4 h-4" /> Start New Test</button>}
            </div>
          )}
        </div>
        
        {/* Test Seçici */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ielts/speaking?test=1" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '1' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>Test 1</Link>
            <Link href="/ielts/speaking?test=2" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '2' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>Test 2</Link>
            <Link href="/ielts/speaking?test=3" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '3' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>Test 3</Link>
            <Link href="/ielts/speaking?test=4" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '4' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>Test 4</Link>
            <Link href="/ielts/speaking?test=5" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '5' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>Test 5</Link>
        </div>
      </div>
    </div>
  );
}

export default function SpeakingSimulator() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-indigo-600 font-bold">Loading Speaking Test...</div>}>
      <SimulatorContent />
    </Suspense>
  );
}
