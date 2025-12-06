'use client';

import React, { useState, useEffect } from 'react';
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
  answer: string; // Normalize edilmiş cevap (A, B, C...)
  explanation?: string;
  originalAnswer?: string; // Debug için
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Metin formatlama (Kalın yazı vb.)
function formatText(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      let content = part.slice(2, -2).replace(/^['"]+|['"]+$/g, '');
      return <span key={index} className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded mx-1 border border-indigo-100">{content}</span>;
    }
    return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
  });
}

export default function QuizPage() {
  const params = useParams();
  const testId = params?.testId as string;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 1) VERİ YÜKLEME VE NORMALİZASYON
  useEffect(() => {
    if (!testId) return;
    setLoading(true);

    fetch(`/data/tests/${testId}.json?t=${Date.now()}`)
      .then(res => {
        if (!res.ok) throw new Error("Test dosyası bulunamadı.");
        return res.json();
      })
      .then(rawdata => {
        let rawList: any[] = [];
        // Veri yapısını güvenli şekilde al
        if (Array.isArray(rawdata)) rawList = rawdata;
        else if (rawdata && rawdata.questions && Array.isArray(rawdata.questions)) rawList = rawdata.questions;

        const formattedQuestions: Question[] = rawList.map((item, idx) => {
            // Şık İşlemleri
            let rawOptions: string[] = [];
            if (Array.isArray(item.options)) rawOptions = item.options;
            else if (Array.isArray(item.secenekler)) rawOptions = item.secenekler;
            else if (item.A || item.B) {
                 if(item.A) rawOptions.push(item.A);
                 if(item.B) rawOptions.push(item.B);
                 if(item.C) rawOptions.push(item.C);
                 if(item.D) rawOptions.push(item.D);
                 if(item.E) rawOptions.push(item.E);
            } else if (typeof item.options === 'object' && item.options) {
                rawOptions = Object.values(item.options);
            }

            // Şıkları A, B, C formatına çevir
            const choices = rawOptions.map((optText, optIdx) => ({
                id: String.fromCharCode(65 + optIdx), // 0->A, 1->B
                text: String(optText)
            }));

            // --- CEVAP DÜZELTME (AKILLI) ---
            let rawAnswer = (item.answer || item.cevap || "").toString().trim();
            let normalizedAnswer = rawAnswer.toUpperCase(); // "b" -> "B"

            // Eğer cevap rakamsa (0, 1...) harfe çevir
            if (/^\d+$/.test(rawAnswer)) {
                normalizedAnswer = String.fromCharCode(65 + parseInt(rawAnswer));
            }
            // Eğer cevap "Cevap A" gibiyse sadece harfi al
            if (normalizedAnswer.length > 1 && normalizedAnswer.includes(" ")) {
                 // Basitçe son kelimeyi veya ilk harfi almaya çalışabiliriz ama şimdilik metin eşleşmesine bırakalım
            }

            // --- AÇIKLAMA DÜZELTME ---
            const explanationText = 
              item.explanation || 
              item.solution || 
              item.cozum || 
              item.aciklama || 
              item.cevap_aciklamasi ||
              item.description ||
              "";

            return {
                id: String(idx),
                prompt: item.question || item.soru || "Soru metni yüklenemedi",
                choices: choices,
                answer: normalizedAnswer,
                originalAnswer: rawAnswer, // Debug için
                explanation: explanationText
            };
        });

        setQuestions(formattedQuestions);
        if (formattedQuestions.length > 0) setTimeLeft(formattedQuestions.length * 90);
        else setError("Bu testte soru bulunamadı veya JSON formatı hatalı.");
        setLoading(false);
      })
      .catch(err => {
        console.error("Yükleme Hatası:", err);
        setError("Veri yüklenirken hata oluştu. (Dosya adı veya formatı bozuk olabilir)");
        setLoading(false);
      });
  }, [testId]);

  // 2) ZAMANLAYICI
  useEffect(() => {
    if (timeLeft === null || showResult || loading) return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const timerId = setInterval(() => setTimeLeft((p) => (p !== null && p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, showResult, loading]);

  // 3) TEST BİTİRME & HATALARI KAYDETME
  const handleSubmit = () => {
    let correctCount = 0;
    
    // Hata geçmişini güvenli çek
    let mistakeList: any[] = [];
    try {
        const stored = localStorage.getItem('my_mistakes');
        if (stored) mistakeList = JSON.parse(stored);
    } catch(e) { console.error(e); }

    questions.forEach((q) => {
        const userVal = answers[q.id]; // Örn: "A"
        
        // --- DOĞRU CEVABI BULMA MANTIĞI ---
        // 1. ID Eşleşmesi (A === A)
        let correctId = q.answer; 
        
        // 2. Eğer q.answer metin ise (örn: "Ankara"), şıklarda bu metni bul ve onun ID'sini al (A)
        const matchByText = q.choices.find(c => 
            c.text.replace(/\s+/g, '').toLowerCase() === q.answer.replace(/\s+/g, '').toLowerCase()
        );
        if (matchByText) {
            correctId = matchByText.id;
        }

        const isCorrect = (userVal === correctId);

        if (isCorrect) {
            correctCount++;
            // Doğru bilineni hata listesinden sil
            mistakeList = mistakeList.filter(m => m.uniqueId !== `${testId}-${q.id}`);
        } else if (userVal) {
            // Yanlış ise listeye ekle
            const uniqueId = `${testId}-${q.id}`;
            const exists = mistakeList.find(m => m.uniqueId === uniqueId);
            
            if (!exists) {
                mistakeList.push({
                    uniqueId: uniqueId,
                    testTitle: testId,
                    prompt: q.prompt,
                    choices: q.choices,
                    answer: correctId, // Düzeltilmiş doğru cevap ID'si
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
          <p>Test Hazırlanıyor...</p>
      </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-200 text-center max-w-md">
            <h2 className="font-bold text-lg mb-2">Bir Hata Oluştu</h2>
            <p>{error}</p>
            <Link href="/" className="inline-block mt-4 text-sm font-bold underline">Ana Sayfaya Dön</Link>
        </div>
    </div>
  );

  // --- SONUÇ EKRANI ---
  if (showResult) {
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* SKOR KARTI */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />
            <h1 className="text-3xl font-black text-slate-800 mb-6">Test Sonucu</h1>
            
            <div className="flex justify-center items-center gap-4 sm:gap-12 mb-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-emerald-600">{score}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Doğru</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-slate-700">{total}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Toplam</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className={`text-4xl font-black ${percentage >= 70 ? 'text-emerald-500' : 'text-orange-500'}`}>
                  %{percentage}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Başarı</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/" className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                  Listeye Dön
                </a>
                <Link href="/mistakes" className="px-6 py-3 bg-red-100 text-red-700 font-bold rounded-xl hover:bg-red-200 transition-colors flex items-center justify-center gap-2">
                  <span>📕</span> Hatalarımı Gör
                </Link>
                <button onClick={() => window.location.reload()} className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                  Tekrar Çöz
                </button>
            </div>
          </div>

          {/* DETAYLI ANALİZ */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-700 ml-2 border-l-4 border-indigo-500 pl-3">Detaylı Analiz</h2>
            
            {questions.map((q, idx) => {
              const userAnswerId = answers[q.id];
              
              // --- DOĞRU CEVABI TEKRAR HESAPLA (Görüntüleme İçin) ---
              let correctId = q.answer;
              const matchByText = q.choices.find(c => 
                 c.text.replace(/\s+/g, '').toLowerCase() === q.answer.replace(/\s+/g, '').toLowerCase()
              );
              if (matchByText) correctId = matchByText.id;

              const isUserAnswered = !!userAnswerId;
              const isCorrect = userAnswerId === correctId;

              let cardBorder = isCorrect ? 'border-emerald-200' : isUserAnswered ? 'border-red-200' : 'border-amber-200';
              let cardBg = isCorrect ? 'bg-emerald-50/40' : isUserAnswered ? 'bg-red-50/40' : 'bg-amber-50/40';

              return (
                <div key={q.id} className={`p-6 rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm ${
                      isCorrect ? 'bg-emerald-500' : !isUserAnswered ? 'bg-amber-400' : 'bg-red-500'
                    }`}>
                      {isCorrect ? '✓' : !isUserAnswered ? '−' : '✕'}
                    </div>

                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-slate-400 font-bold uppercase tracking-wide">Soru {idx + 1}</span>
                      </div>
                      <div className="text-lg font-medium text-slate-800 mb-5 leading-relaxed">
                         {formatText(q.prompt)}
                      </div>

                      <div className="grid gap-2">
                        {q.choices.map((c) => {
                          const isSelected = userAnswerId === c.id;
                          const isTheCorrectAnswer = c.id === correctId;

                          let optionClass = 'p-3 rounded-lg border flex items-center justify-between ';
                          
                          if (isTheCorrectAnswer) {
                            // DOĞRU CEVAP -> YEŞİL (Seçilmese bile göster)
                            optionClass += 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold shadow-sm ring-1 ring-emerald-300';
                          } else if (isSelected) {
                            // YANLIŞ SEÇİM -> KIRMIZI
                            optionClass += 'bg-red-100 border-red-300 text-red-900 font-medium';
                          } else {
                            optionClass += 'bg-white/60 border-slate-200 text-slate-500 opacity-70';
                          }

                          return (
                            <div key={c.id} className={optionClass}>
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs flex-shrink-0 ${
                                  isTheCorrectAnswer ? 'border-emerald-500 bg-emerald-500 text-white' : 
                                  isSelected ? 'border-red-500 bg-red-500 text-white' : 'border-slate-300'
                                }`}>{c.id}</div>
                                <span>{c.text}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* AÇIKLAMA ALANI */}
                      {q.explanation && (
                        <div className="mt-5 p-4 bg-white/80 rounded-xl border border-indigo-200 text-sm text-indigo-900 flex gap-3 items-start animate-in fade-in shadow-sm">
                          <span className="text-xl">💡</span>
                          <div>
                            <span className="font-bold block mb-1 text-indigo-700">Çözüm / Açıklama:</span>
                            <span className="leading-relaxed opacity-90">{q.explanation}</span>
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

  // --- TEST ÇÖZME EKRANI ---
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm border border-slate-200 sticky top-4 z-20">
            <Link href="/" className="p-2 rounded-full hover:bg-slate-100 text-slate-500"><ArrowLeft className="w-5 h-5" /></Link>
            <div className={`text-lg font-mono font-bold px-4 py-2 rounded-lg border transition-colors ${timeLeft !== null && timeLeft < 60 ? 'text-red-600 bg-red-50 border-red-200 animate-pulse' : 'text-indigo-600 bg-indigo-50 border-indigo-200'}`}>{timeLeft !== null ? formatTime(timeLeft) : 'Loading...'}</div>
            <button onClick={handleSubmit} className="text-sm font-bold text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">Bitir</button>
        </div>
        <div className="space-y-8">
          {questions.map((q, idx) => (
            <div key={q.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-sm text-slate-400 font-bold mb-4 uppercase tracking-wide flex items-center gap-2"><span className="bg-slate-100 px-2 py-1 rounded text-slate-500">SORU {idx + 1}</span></div>
              <div className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">{formatText(q.prompt)}</div>
              <div className="grid gap-3">
                {q.choices.map((c) => (
                  <label key={c.id} className={`group cursor-pointer flex items-center p-4 rounded-xl border-2 transition-all duration-200 active:scale-[0.99] ${answers[q.id] === c.id ? 'border-indigo-600 bg-indigo-50 shadow-md ring-1 ring-indigo-200' : 'border-slate-100 hover:border-indigo-300 hover:bg-slate-50'}`}>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors flex-shrink-0 ${answers[q.id] === c.id ? 'border-indigo-600' : 'border-slate-300 group-hover:border-indigo-400'}`}>{answers[q.id] === c.id && <div className="w-3 h-3 rounded-full bg-indigo-600" />}</div>
                    <input type="radio" name={`question-${q.id}`} className="hidden" checked={answers[q.id] === c.id} onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: c.id }))} />
                    <span className={`text-lg ${answers[q.id] === c.id ? 'text-indigo-900 font-medium' : 'text-slate-600'}`}><span className="font-bold mr-2 text-slate-400 group-hover:text-indigo-400">{c.id})</span> {c.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 pb-12"><button onClick={handleSubmit} className="w-full py-4 rounded-xl text-white text-xl font-bold shadow-lg transition-all transform active:scale-[0.99] bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200">Testi Tamamla</button></div>
      </div>
    </div>
  );
}
