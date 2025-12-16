'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- TYPES ---
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

// --- ICONS ---
const Icons = {
  Mic: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  Stop: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>,
  Play: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Flag: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
};

export default function SpeakingPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! I am your IELTS examiner. Could you please tell me your full name?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  
  // Error state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, scoreResult, errorMessage]);

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
    if (messages.length < 2) return alert("Please answer at least a few questions before finishing.");
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages,
          mode: 'grade'
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.reply || data.error || "An error occurred during grading.");
      }

      if (data.band_score !== undefined) {
         setScoreResult(data);
      } else {
         throw new Error("Could not retrieve score data.");
      }

    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "An unknown error occurred.");
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
      const transcript = event.results[0][0].transcript;
      if (transcript) {
        handleUserResponse(transcript);
      }
    };
    recognition.onerror = (e: any) => {
      setIsRecording(false);
      console.error("Mic Error:", e);
      alert("Microphone error: " + e.error);
    };
    recognition.onend = () => setIsRecording(false);
    recognition.start();
  };

  const handleUserResponse = async (text: string) => {
    const newHistory = [...messages, { role: 'user', text } as Message];
    setMessages(newHistory);
    setIsLoading(true);
    setErrorMessage(null);

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
      
      if (response.status === 429) {
        // RATE LIMIT ERROR (ENGLISH)
        throw new Error("⚠️ " + (data.reply || "You are going too fast. Please wait a moment."));
      }
      
      if (!response.ok) {
        throw new Error(data.reply || data.error || "Server error.");
      }

      const aiMessage: Message = {
        role: 'ai',
        text: data.reply,
        feedback: data.feedback
      };

      setMessages(prev => [...prev, aiMessage]);
      speakText(data.reply);

    } catch (error: any) {
      console.error("Chat Error:", error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- SCREEN 1: WELCOME ---
  if (!hasStarted) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900 text-white p-4 font-sans">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <Icons.Mic />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black">Speaking Simulator</h1>
            <p className="text-slate-400">Practice IELTS Speaking with AI.</p>
          </div>
          <button onClick={handleStart} className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
            <Icons.Play /> Start Exam
          </button>
        </div>
      </div>
    );
  }

  // --- SCREEN 2: RESULT ---
  if (scoreResult) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 font-sans">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl text-center border border-slate-200 dark:border-slate-700">
            <div className="text-sm font-bold text-slate-500 uppercase mb-2">IELTS Band Score</div>
            <div className="text-6xl font-black text-indigo-600">{scoreResult.band_score}</div>
            <p className="text-slate-600 dark:text-slate-300 mt-4 text-lg">{scoreResult.overall_comment}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
             <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <b className="text-blue-800 block mb-2">Fluency</b>
                <p className="text-sm text-blue-900">{scoreResult.fluency_feedback}</p>
             </div>
             <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                <b className="text-purple-800 block mb-2">Vocabulary</b>
                <p className="text-sm text-purple-900">{scoreResult.lexical_feedback}</p>
             </div>
             <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                <b className="text-pink-800 block mb-2">Grammar</b>
                <p className="text-sm text-pink-900">{scoreResult.grammar_feedback}</p>
             </div>
          </div>

          <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // --- SCREEN 3: CHAT ---
  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900 font-sans">
      <div className="p-4 bg-white dark:bg-slate-800 border-b flex justify-between items-center shadow-sm z-10">
        <Link href="/" className="text-sm font-bold text-slate-500">Exit</Link>
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
           <span className="font-bold text-slate-700 dark:text-slate-200">LIVE EXAM</span>
        </div>
        <button onClick={handleFinishExam} disabled={isLoading} className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded hover:bg-red-100 hover:text-red-600 transition-colors flex gap-1">
           <Icons.Flag /> Finish
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm text-lg ${msg.role === 'user' ? 'bg-slate-800 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'}`}>
              {msg.text}
              {msg.feedback && (
                <div className="mt-2 pt-2 border-t border-slate-100 text-sm text-orange-600 bg-orange-50 p-2 rounded">
                  <b>Correction:</b> {msg.feedback}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* --- ERROR MESSAGE BOX (ENGLISH) --- */}
        {errorMessage && (
           <div className="mx-auto max-w-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-bounce" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{errorMessage}</span>
           </div>
        )}

        {isLoading && <div className="text-center text-slate-400 text-sm animate-pulse">Examiner is thinking...</div>}
        <div ref={chatEndRef} />
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 border-t flex flex-col items-center gap-4">
        {isRecording ? (
          <div className="relative">
             <div className="absolute -inset-4 bg-red-500/20 rounded-full animate-ping"></div>
             <button onClick={() => setIsRecording(false)} className="relative w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl"><Icons.Stop /></button>
          </div>
        ) : (
          <button onClick={startListening} disabled={isLoading} className="w-20 h-20 bg-indigo-600 disabled:bg-slate-300 text-white rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-transform">
             <Icons.Mic />
          </button>
        )}
        <p className="text-xs text-slate-400">{isRecording ? "Listening..." : "Tap to Speak"}</p>
      </div>
    </div>
  );
}
