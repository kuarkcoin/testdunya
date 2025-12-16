'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- TİPLER ---
type Message = {
  role: 'user' | 'ai';
  text: string;
  feedback?: string;
};

type ScoreResult = {
  band_score: number;
  fluency_feedback: string;
  lexical_feedback: string;
  grammar_feedback: string;
  overall_comment: string;
};

// --- İKONLAR ---
const Icons = {
  Mic: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  Stop: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>,
  Play: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  User: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Bot: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M12 6V3"/><line x1="8" x2="16" y1="2" y2="2"/></svg>,
  Flag: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
};

export default function SpeakingPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! Welcome to the IELTS Speaking simulation. I am your examiner today. Could you please tell me your full name?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, scoreResult]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; 
      utterance.rate = 1; 
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStart = () => {
    setHasStarted(true);
    setTimeout(() => speakText(messages[0].text), 500);
  };

  const handleFinishExam = async () => {
    if (messages.length < 3) return alert("Please answer at least a few questions before finishing.");
    setIsLoading(true);
    try {
      const response = await fetch('/api/speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages,
          mode: 'grade' // Puanlama Modunu Tetikle
        }),
      });
      const data = await response.json();
      setScoreResult(data);
    } catch (error) {
      console.error(error);
      alert("Error calculating score.");
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser not supported. Please use Chrome.");

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    
    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event: any) => {
      setIsRecording(false);
      handleUserResponse(event.results[0][0].transcript);
    };
    recognition.onerror = () => {
      setIsRecording(false);
      alert("Could not hear you. Please try again.");
    };
    recognition.onend = () => setIsRecording(false);
    recognition.start();
  };

  const handleUserResponse = async (text: string) => {
    const newHistory = [...messages, { role: 'user', text } as Message];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const response = await fetch('/api/speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newHistory,
          mode: 'chat'
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const aiMessage: Message = {
        role: 'ai',
        text: data.reply,
        feedback: data.feedback
      };
      
      setMessages(prev => [...prev, aiMessage]);
      speakText(data.reply);

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- EKRAN 1: WELCOME SCREEN ---
  if (!hasStarted) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900 text-white p-4 font-sans">
        <div className="max-w-md w-full text-center space-y-8 animate-fade-in-up">
          <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-indigo-500/50">
            <Icons.Mic />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight">Speaking Simulator</h1>
            <p className="text-slate-400">AI-powered IELTS interview practice.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl text-sm text-slate-300 border border-slate-700 text-left">
            <ul className="space-y-2">
              <li>🎧 Ensure you are in a quiet environment.</li>
              <li>🎤 Allow microphone access when prompted.</li>
              <li>🇬🇧 The examiner will speak in English.</li>
            </ul>
          </div>
          <button onClick={handleStart} className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
            <Icons.Play /> Start Exam
          </button>
          <Link href="/" className="block text-slate-500 text-sm hover:text-white mt-4">← Back to Home</Link>
        </div>
      </div>
    );
  }

  // --- EKRAN 2: SCORE REPORT (SINAV SONUCU) ---
  if (scoreResult) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8 font-sans">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl text-center border border-slate-200 dark:border-slate-700">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Estimated Band Score</div>
            <div className="text-6xl font-black text-indigo-600 dark:text-indigo-400 mb-4">{scoreResult.band_score}</div>
            <p className="text-slate-600 dark:text-slate-300 text-lg">{scoreResult.overall_comment}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Fluency</h3>
              <p className="text-sm text-blue-900 dark:text-blue-100">{scoreResult.fluency_feedback}</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800">
              <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Vocabulary</h3>
              <p className="text-sm text-purple-900 dark:text-purple-100">{scoreResult.lexical_feedback}</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-100 dark:border-pink-800">
              <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">Grammar</h3>
              <p className="text-sm text-pink-900 dark:text-pink-100">{scoreResult.grammar_feedback}</p>
            </div>
          </div>

          <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:opacity-90 transition-all">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // --- EKRAN 3: CHAT EKRANI ---
  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900 font-sans">
      <div className="p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-sm z-10">
        <Link href="/" className="text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white">Exit</Link>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">LIVE EXAM</span>
        </div>
        <button onClick={handleFinishExam} disabled={isLoading} className="text-xs font-bold bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors flex items-center gap-1">
          <Icons.Flag /> Finish
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50 dark:bg-slate-900">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.role === 'ai' ? 'bg-indigo-100 text-indigo-600 mr-2' : 'bg-slate-200 text-slate-600 ml-2 order-2'}`}>
              {msg.role === 'ai' ? <Icons.Bot /> : <Icons.User />}
            </div>
            <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm text-lg ${msg.role === 'user' ? 'bg-slate-800 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'}`}>
              {msg.text}
              {msg.feedback && (
                <div className="mt-3 pt-2 border-t border-slate-100 text-sm">
                  <span className="text-orange-600 font-bold block text-xs uppercase mb-1">Improvement</span>
                  <p className="text-slate-600 italic">{msg.feedback}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && <div className="ml-12 text-sm text-slate-400 animate-pulse">Examiner is thinking...</div>}
        <div ref={chatEndRef} />
      </div>

      <div className="p-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex flex-col items-center gap-4">
        {isRecording ? (
          <div className="relative">
            <div className="absolute -inset-4 bg-red-500/20 rounded-full animate-ping"></div>
            <button onClick={() => setIsRecording(false)} className="relative w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"><Icons.Stop /></button>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-red-500 font-bold text-sm whitespace-nowrap">Listening...</p>
          </div>
        ) : (
          <div className="relative group">
            <button onClick={startListening} disabled={isLoading} className="w-20 h-20 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:-translate-y-1"><Icons.Mic /></button>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Tap to Speak</p>
          </div>
        )}
      </div>
    </div>
  );
}
