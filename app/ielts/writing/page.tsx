'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- ICONS ---
const Icons = {
  Back: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 3-3-7 7-3-3z"/><path d="M19 12H5"/></svg>,
  Time: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Brain: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 22v-4"/><path d="M12 2v2"/></svg>,
  Chart: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>,
  Pen: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>,
  Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Refresh: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>,
  Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
};

// --- TYPES ---
type Question = {
  id: number;
  type: 'Task 1' | 'Task 2';
  title: string;
  question: string;
  image?: string;
  contextData: string;
  minWords: number;
  time: number;
};

type AnalysisResult = {
  score: number;
  feedback: string;
  corrections: string[];
};

// --- QUESTION BANK ---
const QUESTION_BANK: Question[] = [
  {
    id: 1,
    type: 'Task 1',
    title: 'Global Water Use',
    question: 'The chart below shows global water use by sector from 1900 to 2000. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    image: 'https://placehold.co/600x350/e2e8f0/1e293b?text=Chart:+Global+Water+Usage',
    contextData: 'Chart shows Agriculture is dominant user. Industrial use rose, Domestic is lowest. Overall upward trend.',
    minWords: 150,
    time: 20 * 60
  },
  {
    id: 2,
    type: 'Task 2',
    title: 'Technology & Education',
    question: 'Some people believe that technology has made learning easier, while others argue that it has made students lazy. Discuss both views and give your own opinion.',
    contextData: 'Essay discussing pros (access to info) and cons (distraction, less critical thinking) of tech in schools.',
    minWords: 250,
    time: 40 * 60
  },
  {
    id: 3,
    type: 'Task 2',
    title: 'Government Spending',
    question: 'Some argue that the government should spend money on public services and facilities rather than on the arts. To what extent do you agree or disagree?',
    contextData: 'Argumentative essay about budget allocation: Arts vs Public Services (Health, Education).',
    minWords: 250,
    time: 40 * 60
  },
  {
    id: 4,
    type: 'Task 1',
    title: 'Process: Making Brick',
    question: 'The diagram illustrates the process of making bricks for the building industry. Summarize the information.',
    image: 'https://placehold.co/600x350/e2e8f0/1e293b?text=Diagram:+Brick+Making+Process',
    contextData: 'Process diagram: Digging clay -> Sifting -> Moulding -> Drying -> Kiln Firing -> Cooling -> Delivery.',
    minWords: 150,
    time: 20 * 60
  }
];

export default function WritingPage() {
  const [selectedQId, setSelectedQId] = useState<number>(1);
  const [essay, setEssay] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'question' | 'result'>('question');

  const currentQ = QUESTION_BANK.find(q => q.id === selectedQId) || QUESTION_BANK[0];

  useEffect(() => {
    setEssay('');
    setResult(null);
    setTimeLeft(currentQ.time);
    setIsTimerActive(false);
    setActiveTab('question');
    setIsSidebarOpen(false);
  }, [selectedQId]);

  useEffect(() => {
    const count = essay.trim().split(/\s+/).filter(w => w.length > 0).length;
    setWordCount(count);
  }, [essay]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEssay(e.target.value);
    if (!isTimerActive && !result && e.target.value.length > 5) {
      setIsTimerActive(true);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnalyze = async () => {
  if (essay.length < 50) return alert("Please write at least 50 characters.");

  setIsAnalyzing(true);
  setIsTimerActive(false);

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        essay,
        taskType: currentQ.type,
        contextData: currentQ.contextData,
      }),
    });

    // JSON parse güvenli (bazen boş/invalid dönebiliyor)
    const data = await response.json().catch(() => ({} as any));

    if (!response.ok) {
      // burada gerçek sebebi göreceksin: 401/403/429/500 vs.
      console.error("API ERROR:", {
        status: response.status,
        statusText: response.statusText,
        data,
      });

      const msg =
        data?.error ||
        data?.message ||
        `Analysis failed. Status: ${response.status} ${response.statusText}`;

      alert(msg);
      return;
    }

    setResult(data);
    setActiveTab('result');

  } catch (error: any) {
    console.error("FETCH ERROR:", error);
    alert(error?.message || 'Network error. Please try again.');
  } finally {
    setIsAnalyzing(false);
  }
};

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden font-sans transition-colors duration-300">
      
      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative
      `}>
        <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400">
            <Icons.Back /> <span className="hidden md:inline">TestDunya</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 text-slate-500">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Question Bank</h3>
          {QUESTION_BANK.map((q) => (
            <button
              key={q.id}
              onClick={() => setSelectedQId(q.id)}
              className={`w-full text-left p-3 rounded-xl text-sm transition-all flex items-start gap-3
                ${selectedQId === q.id 
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800' 
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}
            >
              <div className={`mt-0.5 p-1.5 rounded-md ${q.type === 'Task 1' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                {q.type === 'Task 1' ? <Icons.Chart /> : <Icons.Pen />}
              </div>
              <div>
                <div className="font-bold">{q.title}</div>
                <div className="text-xs opacity-70 mt-0.5">{q.type} • {q.minWords} words</div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-full relative">
        
        {/* HEADER */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 bg-slate-100 rounded-md">
              <Icons.Menu />
            </button>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg">{currentQ.type}: {currentQ.title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 120 ? 'text-red-500 animate-pulse' : 'text-slate-700 dark:text-slate-300'}`}>
              <Icons.Time />
              {formatTime(timeLeft)}
            </div>
            <button 
              onClick={handleAnalyze} 
              disabled={isAnalyzing || essay.length < 50}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-lg font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center gap-2"
            >
              {isAnalyzing ? 'Analyzing...' : (
                <>
                  <Icons.Brain /> <span className="hidden sm:inline">Evaluate</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="flex-1 overflow-hidden grid lg:grid-cols-2 gap-0 relative">
          
          {/* --- LEFT PANEL: QUESTION & RESULT --- */}
          <div className="overflow-y-auto border-r border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-4 md:p-8">
            
            {/* TABS */}
            <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-700">
              <button 
                onClick={() => setActiveTab('question')}
                className={`pb-2 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'question' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-400'}`}
              >
                Question & Chart
              </button>
              {result && (
                <button 
                  onClick={() => setActiveTab('result')}
                  className={`pb-2 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'result' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-400'}`}
                >
                  Analysis Report
                </button>
              )}
            </div>

            {/* CONTENT 1: QUESTION */}
            {activeTab === 'question' && (
              <div className="animate-fade-in space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{currentQ.title}</h2>
                  <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{currentQ.question}</p>
                </div>

                {currentQ.image && (
                  <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white p-2">
                    <img src={currentQ.image} alt="Task Image" className="w-full h-auto object-contain max-h-[400px]" />
                  </div>
                )}

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl text-sm text-blue-800 dark:text-blue-200">
                  <span className="font-bold block mb-1">💡 Tip:</span>
                  You should write at least {currentQ.minWords} words for this task. Recommended time is {currentQ.time / 60} minutes.
                </div>
              </div>
            )}

            {/* CONTENT 2: RESULT */}
            {activeTab === 'result' && result && (
              <div className="animate-fade-in space-y-6">
                <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div>
                    <div className="text-sm text-slate-500 uppercase font-bold">IELTS Band Score</div>
                    <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400">{result.score}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 font-bold">Words</div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">{wordCount}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-2">
                      <Icons.Check /> General Feedback
                    </h4>
                    <p className="text-emerald-900 dark:text-emerald-100 leading-relaxed text-sm">
                      {result.feedback}
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800">
                    <h4 className="font-bold text-red-800 dark:text-red-400 mb-3">Corrections & Improvements</h4>
                    <ul className="space-y-2">
                      {result.corrections.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 p-2 bg-white dark:bg-slate-800 rounded border border-red-100 dark:border-red-900/30">
                          <span className="text-red-500 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setEssay('');
                    setResult(null);
                    setActiveTab('question');
                    setIsTimerActive(false);
                    setTimeLeft(currentQ.time);
                  }}
                  className="w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 text-slate-500 hover:border-indigo-500 hover:text-indigo-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Icons.Refresh /> Try Again
                </button>
              </div>
            )}
          </div>

          {/* --- RIGHT PANEL: EDITOR --- */}
          <div className="flex flex-col h-full bg-white dark:bg-slate-800">
            <textarea
              className="flex-1 w-full p-6 md:p-8 text-lg leading-relaxed resize-none focus:outline-none bg-transparent text-slate-800 dark:text-slate-200 placeholder-slate-300 dark:placeholder-slate-600 font-serif"
              placeholder="Start typing your essay here. The timer will start automatically..."
              value={essay}
              onChange={handleTextChange}
              spellCheck={false}
              disabled={isAnalyzing}
            />
            
            {/* FOOTER BAR */}
            <div className="h-12 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between px-6 text-sm text-slate-400 bg-slate-50 dark:bg-slate-900/50">
              <div className={`${wordCount < currentQ.minWords ? 'text-orange-500' : 'text-emerald-500'} font-bold transition-colors`}>
                {wordCount} / {currentQ.minWords} Words
              </div>
              <div className="flex gap-4">
                <span>{essay.length} Chars</span>
                <span className="hidden sm:inline opacity-50">Auto-save: Local</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
