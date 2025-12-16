'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- TİP TANIMLAMALARI ---
type Message = {
  role: 'user' | 'ai';
  text: string;
  feedback?: string;
};

// --- İKONLAR ---
const MicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>;
const StopIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>;
const RobotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M9 14v.01"/><path d="M15 14v.01"/><path d="M21 12c0 2.5-2 4.5-5 5"/><path d="M3 12c0 2.5 2 4.5 5 5"/><path d="M12 6V3"/><line x1="8" x2="16" y1="2" y2="2"/></svg>;

export default function SpeakingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! I'm your IELTS examiner today. Could you please tell me your full name?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Otomatik Kaydırma
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- SESLİ OKUMA (Text to Speech) ---
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Önceki konuşmayı durdur
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // İngiliz aksanı için 'en-GB' deneyebilirsiniz
      utterance.rate = 1; // Hız
      window.speechSynthesis.speak(utterance);
    }
  };

  // --- SESİ YAZIYA ÇEVİRME (Speech to Text) ---
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Tarayıcınız sesli komutu desteklemiyor. Lütfen Chrome kullanın.");
      return;
    }

    // @ts-ignore (TypeScript hatasını yok saymak için)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setIsRecording(false);
      handleUserResponse(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      setIsRecording(false);
    };

    recognition.onend = () => setIsRecording(false);

    recognition.start();
  };

  // --- API İLE KONUŞMA ---
  const handleUserResponse = async (text: string) => {
    // 1. Kullanıcı mesajını ekle
    const newHistory = [...messages, { role: 'user', text } as Message];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      // 2. API'ye gönder
      const response = await fetch('/api/speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newHistory.map(m => ({ role: m.role, text: m.text })) // Sadece metinleri gönder
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      // 3. AI Cevabını ekle
      const aiMessage: Message = {
        role: 'ai',
        text: data.reply,
        feedback: data.feedback
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // 4. AI Konuşsun
      speakText(data.reply);

    } catch (error) {
      console.error(error);
      alert("Hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900 font-sans">
      
      {/* HEADER */}
      <div className="p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-sm z-10">
        <Link href="/" className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
          ← Çıkış
        </Link>
        <h1 className="font-bold text-slate-800 dark:text-white">IELTS Speaking Simulator</h1>
        <div className="w-10"></div> {/* Hizalama için boşluk */}
      </div>

      {/* CHAT ALANI */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-md ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none'
            }`}>
              
              {/* Mesaj Metni */}
              <p className="text-lg leading-relaxed">{msg.text}</p>
              
              {/* AI Geri Bildirimi (Varsa) */}
              {msg.feedback && (
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 text-sm text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-900/10 p-2 rounded-lg">
                  💡 İpucu: {msg.feedback}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 flex gap-2 items-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* KONTROL ALANI (MİKROFON) */}
      <div className="p-6 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex justify-center items-center gap-4">
        
        {isRecording ? (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-pulse text-red-500 font-bold uppercase tracking-widest text-sm">Dinliyor...</div>
            <button 
              onClick={() => setIsRecording(false)} // Manuel durdurma (opsiyonel)
              className="w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center border-4 border-red-500 shadow-xl scale-110 transition-all"
            >
              <StopIcon />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="text-slate-400 text-sm font-medium">Konuşmak için bas</div>
            <button 
              onClick={startListening}
              disabled={isLoading}
              className="w-20 h-20 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-300 dark:shadow-none transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MicIcon />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
