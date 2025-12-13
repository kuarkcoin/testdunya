'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// URL'deki ?test=1 kısmını okumak için bunu ekliyoruz:
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

// --- TYPES ---
interface Topic {
  id: number;
  topic: string;
  bullets: string[];
}

export default function SpeakingSimulator() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [phase, setPhase] = useState<'idle' | 'prep' | 'speaking' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  
  // URL PARAMETRESİNİ OKUMA
  const searchParams = useSearchParams();
  // Eğer URL'de test yoksa varsayılan olarak '1' olsun
  const testId = searchParams.get('test') || '1';
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. DATA YÜKLEME (Dinamik)
  useEffect(() => {
    // ielts-speaking1.json, ielts-speaking2.json dosyasını çeker
    fetch(`/data/tests/ielts-speaking${testId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("Test dosyası bulunamadı");
        return res.json();
      })
      .then(data => {
        setTopics(data);
        // Yeni test yüklendiğinde her şeyi sıfırla
        setPhase('idle');
        setCurrentTopic(null);
        setTimeLeft(0);
      })
      .catch(err => console.error("Konular yüklenemedi", err));
  }, [testId]); // testId her değiştiğinde bu kod tekrar çalışır

  // 2. TİMER MANTIĞI
  useEffect(() => {
    if (phase === 'idle' || phase === 'finished') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handlePhaseComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  const handlePhaseComplete = () => {
    if (phase === 'prep') {
      startSpeaking();
    } else if (phase === 'speaking') {
      setPhase('finished');
    }
  };

  // --- ACTIONS ---

  const generateTopic = () => {
    if (topics.length === 0) return;
    const random = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTopic(random);
    startPrep();
  };

  const startPrep = () => {
    setPhase('prep');
    setTimeLeft(60); // 1 Dakika Hazırlık
  };

  const startSpeaking = () => {
    setPhase('speaking');
    setTimeLeft(120); // 2 Dakika Konuşma
  };

  const reset = () => {
    setPhase('idle');
    setCurrentTopic(null);
    setTimeLeft(0);
  };

  // Format MM:SS
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
          <Link href="/" className="text-slate-500 hover:text-indigo-600 font-bold text-sm flex items-center gap-2">
            ← Dashboard
          </Link>
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600">
                IELTS Speaking Test {testId} {/* Hangi testte olduğunu gösterir */}
            </span>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative min-h-[500px] flex flex-col">
          
          {/* TOP BAR (TIMER) */}
          <div className={`p-6 flex items-center justify-between transition-colors duration-500 ${
            phase === 'prep' ? 'bg-amber-50' : 
            phase === 'speaking' ? 'bg-indigo-50' : 
            'bg-slate-50'
          }`}>
             <div className="flex items-center gap-3">
               <div className={`p-3 rounded-xl ${
                 phase === 'prep' ? 'bg-amber-100 text-amber-600' :
                 phase === 'speaking' ? 'bg-indigo-100 text-indigo-600' :
                 'bg-slate-200 text-slate-400'
               }`}>
                 <Mic className="w-6 h-6" />
               </div>
               <div>
                 <h2 className="font-bold text-slate-800 text-lg">
                   {phase === 'idle' && "Speaking Simulator"}
                   {phase === 'prep' && "Preparation Time"}
                   {phase === 'speaking' && "Speaking Time"}
                   {phase === 'finished' && "Session Completed"}
                 </h2>
                 <p className="text-xs font-bold uppercase tracking-wider opacity-60">
                   {phase === 'idle' ? "Ready to Start" : phase === 'finished' ? "Well Done" : "In Progress"}
                 </p>
               </div>
             </div>

             {/* BIG TIMER */}
             <div className={`text-4xl font-mono font-black tabular-nums transition-colors ${
               phase === 'prep' ? 'text-amber-500' :
               phase === 'speaking' ? 'text-indigo-600' :
               'text-slate-300'
             }`}>
               {formatTime(timeLeft)}
             </div>
          </div>

          {/* CONTENT AREA */}
          <div className="flex-grow p-8 flex flex-col items-center justify-center text-center relative">
            
            {phase === 'idle' && (
              <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                 <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-10 h-10 text-indigo-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800">Part 2: The Long Turn</h3>
                 <p className="text-slate-500 max-w-md mx-auto">
                   Test {testId} seçili. Rastgele bir konu verilecek. Hazırlanmak için <strong>1 dakikan</strong> ve konuşmak için <strong>2 dakikan</strong> var.
                 </p>
                 <button onClick={generateTopic} className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                    <Play className="w-5 h-5 fill-current" />
                    Start Session
                 </button>
              </div>
            )}

            {(phase === 'prep' || phase === 'speaking' || phase === 'finished') && currentTopic && (
              <div className="w-full text-left max-w-lg mx-auto animate-in slide-in-from-bottom-4 duration-500">
                <div className="mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Topic ID: {currentTopic.id}</div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 leading-tight">
                  {currentTopic.topic}
                </h3>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <p className="text-sm font-bold text-slate-500 mb-4">You should say:</p>
                  <ul className="space-y-3">
                    {currentTopic.bullets.map((bull, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                        {bull}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* VISUALIZER FOR SPEAKING PHASE */}
                {phase === 'speaking' && (
                  <div className="flex justify-center items-center gap-1 h-8 mb-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDuration: '0.8s' }}></div>
                      ))}
                       <span className="text-xs font-bold text-indigo-400 ml-2">Recording... (Simulation)</span>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* BOTTOM CONTROLS */}
          {phase !== 'idle' && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
               <button onClick={reset} className="px-4 py-2 text-slate-500 font-bold hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex items-center gap-2">
                 <Stop className="w-4 h-4" /> Quit
               </button>

               {phase === 'prep' && (
                 <button onClick={startSpeaking} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2">
                   Start Speaking Now <ArrowRight className="w-4 h-4" />
                 </button>
               )}

               {phase === 'finished' && (
                 <button onClick={generateTopic} className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-600 transition-all flex items-center gap-2">
                   <Refresh className="w-4 h-4" /> Next Topic
                 </button>
               )}
            </div>
          )}

        </div>
        
        {/* Test Seçici (Hızlı Geçiş Butonları) */}
        <div className="mt-8 flex flex-wrap justify-center gap-4"> 
            <Link href="/speaking?test=1" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '1' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>
                Test 1
            </Link>
            <Link href="/speaking?test=2" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '2' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>
                Test 2 (Hard)
            </Link>
            <Link href="/speaking?test=3" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '3' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>
                Test 3
            </Link>
            <Link href="/speaking?test=4" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '4' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>
                Test 4
            </Link>
            <Link href="/speaking?test=5" className={`px-4 py-2 rounded-lg font-bold border transition ${testId === '5' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:border-indigo-400'}`}>
                Test 5
            </Link>
        </div>

      </div> {/* max-w-2xl mx-auto KAPANIŞI (BU EKSİKTİ) */}
    </div> // min-h-screen KAPANIŞI (BU EKSİKTİ)
  );
}
