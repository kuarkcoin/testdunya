'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- İkonlar ---
const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);
const XCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const AlertCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
);

export default function TestExamPage() {
  const params = useParams();
  const testId = params?.testId as string;

  // --- State Yönetimi ---
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Sınav Durumları
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // Başlangıçta 0, veri gelince güncellenecek
  const [score, setScore] = useState({ correct: 0, incorrect: 0, empty: 0, net: 0 });

  // --- 1. Veri Çekme ve Süre Ayarlama ---
  useEffect(() => {
    if (!testId) return;
    setLoading(true);

    fetch(`/data/tests/${testId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then(data => {
        // Veri formatını kontrol et ve ayarla
        let qList = [];
        if (Array.isArray(data)) qList = data;
        else if (data.questions && Array.isArray(data.questions)) qList = data.questions;
        else qList = [];
        
        setQuestions(qList);

        // --- DİNAMİK SÜRE AYARI ---
        // Soru başına 1.5 dakika (90 saniye) verelim
        const calculatedTime = qList.length * 90; 
        setTimeLeft(calculatedTime);
        
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [testId]);

  // --- 2. Sayaç (Timer) Mantığı ---
  useEffect(() => {
    if (loading || isExamFinished || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          finishExam(); // Süre bitince otomatik bitir
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, isExamFinished, timeLeft]);

  // Süreyi formatla (Saat:Dakika:Saniye veya Dakika:Saniye)
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- 3. Şık İşaretleme ---
  const handleOptionSelect = (questionIndex: number, optionText: string) => {
    if (isExamFinished) return; 
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: optionText
    }));
  };

  // --- 4. Sınavı Bitirme ve Hesaplama ---
  const finishExam = () => {
    setIsExamFinished(true);
    
    let correct = 0;
    let incorrect = 0;
    
    questions.forEach((q, idx) => {
      const userAnswer = userAnswers[idx];
      const correctAnswer = q.answer || q.cevap;
      
      if (userAnswer) {
        if (userAnswer.trim() === correctAnswer.trim()) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    const empty = questions.length - (correct + incorrect);
    const net = correct - (incorrect * 0.25); 

    setScore({ correct, incorrect, empty, net });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- UI Durumları ---
  if (loading) return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-slate-500">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
      <p>Sınav yükleniyor...</p>
    </div>
  );

  if (error || questions.length === 0) return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-slate-900 mb-2">Veri Bulunamadı</h2>
        <p className="text-slate-500 mb-6">Test içeriği boş veya yüklenemedi.</p>
        <Link href="/" className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">Ana Sayfaya Dön</Link>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
      
      {/* --- Sticky Header --- */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm px-4 py-3 transition-all">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="p-2 rounded-full hover:bg-slate-100 transition-colors" title="Çıkış">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </Link>

          <div className="flex flex-col items-center">
             <div className={`flex items-center gap-2 font-mono text-xl font-bold px-4 py-1 rounded-lg ${timeLeft < 300 && !isExamFinished ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-indigo-50 text-indigo-600'}`}>
              <Clock className="w-5 h-5" />
              {isExamFinished ? "Süre Bitti" : formatTime(timeLeft)}
            </div>
          </div>

          {!isExamFinished && (
            <button 
              onClick={finishExam}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all active:scale-95"
            >
              Bitir
            </button>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8 space-y-8">
        
        {/* --- Sonuç Kartı --- */}
        {isExamFinished && (
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-indigo-100 animate-in slide-in-from-top-4">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">Sınav Sonucu</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <div className="text-sm text-slate-500 font-semibold uppercase">Toplam Soru</div>
                <div className="text-2xl font-bold text-slate-900">{questions.length}</div>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="text-sm text-emerald-600 font-semibold uppercase">Doğru</div>
                <div className="text-2xl font-bold text-emerald-700">{score.correct}</div>
              </div>
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="text-sm text-red-600 font-semibold uppercase">Yanlış</div>
                <div className="text-2xl font-bold text-red-700">{score.incorrect}</div>
              </div>
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="text-sm text-indigo-600 font-semibold uppercase">Net</div>
                <div className="text-2xl font-bold text-indigo-700">{score.net.toFixed(2)}</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
               <button 
                 onClick={() => window.location.reload()} 
                 className="text-indigo-600 hover:text-indigo-800 font-medium underline"
               >
                 Sınavı Tekrarla
               </button>
            </div>
          </div>
        )}

        {/* --- Sorular Listesi --- */}
        {questions.map((q, qIndex) => {
          const userAnswer = userAnswers[qIndex];
          const correctAnswer = q.answer || q.cevap;
          
          const getOptionStatus = (optionText: string) => {
            if (!isExamFinished) {
              return userAnswer === optionText ? 'selected' : 'default';
            }
            if (optionText === correctAnswer) return 'correct';
            if (userAnswer === optionText && userAnswer !== correctAnswer) return 'wrong';
            return 'default';
          };

          return (
            <div key={qIndex} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-700 font-bold rounded-xl">
                  {qIndex + 1}
                </div>
                <div className="flex-1 pt-1">
                   <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
                    {q.question || q.soru}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pl-0 md:pl-14">
                {(q.options || q.secenekler || []).map((opt: string, optIndex: number) => {
                  const status = getOptionStatus(opt);
                  
                  let styleClass = "border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600";
                  
                  if (status === 'selected') {
                    styleClass = "border-indigo-500 bg-indigo-50 text-indigo-700 font-medium ring-1 ring-indigo-500";
                  } else if (status === 'correct') {
                    styleClass = "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold ring-1 ring-emerald-500";
                  } else if (status === 'wrong') {
                    styleClass = "border-red-500 bg-red-50 text-red-700 opacity-60";
                  }

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleOptionSelect(qIndex, opt)}
                      disabled={isExamFinished}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 group relative ${styleClass}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors flex-shrink-0
                        ${status === 'selected' ? 'bg-indigo-600 text-white border-indigo-600' : 
                          status === 'correct' ? 'bg-emerald-500 text-white border-emerald-500' :
                          status === 'wrong' ? 'bg-red-500 text-white border-red-500' :
                          'bg-white text-slate-400 border-slate-200 group-hover:border-slate-400'
                        }
                      `}>
                        {String.fromCharCode(65 + optIndex)}
                      </div>
                      
                      <span className="flex-1">{opt}</span>

                      {status === 'correct' && <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />}
                      {status === 'wrong' && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        
        {!isExamFinished && questions.length > 0 && (
          <div className="flex justify-center py-8">
            <button
              onClick={finishExam}
              className="w-full md:w-auto px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Sınavı Tamamla
            </button>
          </div>
        )}
        
      </div>
    </main>
  );
}
