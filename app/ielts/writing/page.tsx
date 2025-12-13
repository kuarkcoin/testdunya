'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- ICONS ---
const PenTool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
);
const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);
const Refresh = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
);
const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);

// --- TYPES ---
interface WritingTask {
  id: number;
  type: 'task1' | 'task2';
  title: string;
  question: string;
  min_words: number;
  time: number; // minutes
  sample_answer: string;
}

export default function WritingSimulator() {
  const [tasks, setTasks] = useState<WritingTask[]>([]);
  const [currentTask, setCurrentTask] = useState<WritingTask | null>(null);
  
  // State
  const [userText, setUserText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); // seconds
  const [isActive, setIsActive] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Veriyi Yükle
  useEffect(() => {
    fetch('/data/tests/ielts-writing.json')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Writing data loading error:", err));
  }, []);

  // Timer Mantığı
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  // Kelime Sayar
  useEffect(() => {
    const words = userText.trim().split(/\s+/);
    setWordCount(userText.trim() === '' ? 0 : words.length);
  }, [userText]);

  const startTest = (task: WritingTask) => {
    setCurrentTask(task);
    setUserText('');
    setWordCount(0);
    setTimeLeft(task.time * 60);
    setIsActive(true);
    setShowAnswer(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // --- ANA EKRAN (TEST SEÇİMİ) ---
  if (!currentTask) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
             <Link href="/" className="p-2 bg-white rounded-full border hover:bg-slate-100 transition"><ChevronLeft className="w-5 h-5 text-slate-600" /></Link>
             <h1 className="text-3xl font-black text-slate-800">IELTS Writing Simulator</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <button 
                key={task.id} 
                onClick={() => startTest(task)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-amber-400 hover:shadow-amber-100/50 transition-all text-left"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-200 group-hover:bg-amber-400 rounded-l-2xl transition-colors"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl group-hover:scale-110 transition-transform">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {task.time} Mins
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">{task.title}</h2>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{task.question}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span>Target: {task.min_words}+ Words</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- SINAV EKRANI ---
  return (
    <div className="min-h-screen bg-slate-100 p-4 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentTask(null)} className="text-slate-500 hover:text-amber-600 font-bold flex items-center gap-1 text-sm">
            <ChevronLeft className="w-4 h-4" /> Exit
          </button>
          <div className="h-6 w-px bg-slate-200"></div>
          <div>
            <h2 className="font-bold text-slate-800">{currentTask.title}</h2>
            <p className="text-xs text-slate-500">Academic Writing</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>
            <Clock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
          <button 
            onClick={() => {setUserText(''); setWordCount(0);}} 
            className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition" 
            title="Clear Text"
          >
            <Refresh className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Workspace */}
      <div className="flex-grow grid lg:grid-cols-2 gap-4 h-full">
        
        {/* LEFT: QUESTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 overflow-y-auto flex flex-col h-[calc(100vh-140px)]">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">The Question</h3>
          
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg font-medium text-slate-800 leading-relaxed">{currentTask.question}</p>
          </div>

          {currentTask.type === 'task1' && (
             <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl h-64 flex items-center justify-center mb-6">
               <div className="text-center text-slate-400">
                 <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                 </svg>
                 <span className="text-xs font-bold">Chart Visualization Placeholder</span>
               </div>
             </div>
          )}

          <div className="mt-auto pt-6 border-t border-slate-100">
            <button 
              onClick={() => setShowAnswer(!showAnswer)}
              className="w-full py-3 bg-emerald-50 text-emerald-700 font-bold rounded-xl border border-emerald-100 hover:bg-emerald-100 transition flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              {showAnswer ? 'Hide Sample Answer' : 'Show Band 9 Sample Answer'}
            </button>
            
            {showAnswer && (
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl text-sm leading-relaxed text-slate-700 whitespace-pre-wrap animate-in slide-in-from-top-2 border border-emerald-100">
                <span className="block font-bold text-emerald-800 mb-2">Band 9 Response:</span>
                {currentTask.sample_answer}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: EDITOR */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col h-[calc(100vh-140px)] relative">
          <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-2xl">
            <span className="text-xs font-bold text-slate-500 uppercase">Your Response</span>
            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${wordCount < currentTask.min_words ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
              {wordCount} / {currentTask.min_words} Words
            </div>
          </div>
          <textarea
            className="flex-grow w-full p-6 resize-none focus:outline-none text-slate-700 leading-relaxed font-serif text-lg bg-white rounded-b-2xl"
            placeholder="Start typing your essay here..."
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            spellCheck={false}
          ></textarea>
        </div>

      </div>
    </div>
  );
}
