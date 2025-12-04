'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// Soru Tipi Tanımlaması
interface Question {
  id?: number;
  question: string;
  shape?: string;
  A: string;
  B: string;
  C: string;
  D: string;
  correct: string;
  Açıklama: string;
  // Dinamik erişim için index imzası (TypeScript hatasını çözer)
  [key: string]: string | number | undefined; 
}

export default function DynamicTestPage() {
  const params = useParams();
  const testId = params.testId as string;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Veriyi Çek
  useEffect(() => {
    if (!testId) return;

    fetch(`/data/tests/${testId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        // Her soruya 1.5 dakika ver (Örn: 90 soru * 90 sn)
        setTimeLeft(data.length * 90);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [testId]);

  // Sayaç Mantığı
  useEffect(() => {
    if (timeLeft > 0 && !showResult && !loading) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0 && !loading && !showResult && questions.length > 0) {
      finishTest();
    }
  }, [timeLeft, showResult, loading, questions.length]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelect = (index: number, option: string) => {
    if (showResult) return;
    setAnswers({ ...answers, [index]: option });
  };

  const finishTest = () => {
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;
    let empty = 0;
    questions.forEach((q, i) => {
      if (!answers[i]) empty++;
      else if (answers[i] === q.correct) correct++;
      else wrong++;
    });
    return { correct, wrong, empty };
  };

  // --- Yükleniyor ve Hata Durumları ---
  if (loading) return <div className="min-h-screen flex items-center justify-center text-xl font-bold text-indigo-600">Sınav Yükleniyor...</div>;

  if (error || questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Test Bulunamadı 😔</h2>
        <p className="text-slate-500 mb-6">"{testId}" kodlu test verisi henüz eklenmemiş.</p>
        <Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-xl">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-slate-100 pb-20">

      {/* --- SABİT ÜST BAR --- */}
      <div className="sticky top-0 z-50 bg-slate-900 text-white p-4 shadow-lg flex justify-between items-center">
        <div className="font-bold text-lg uppercase truncate max-w-[200px]">
          {testId.replace(/-/g, ' ')}
        </div>
        <div className={`font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      {/* --- SONUÇ EKRANI (Test Bitince Görünür) --- */}
      {showResult && (
        <div className="max-w-4xl mx-auto m-4 bg-white rounded-2xl p-6 shadow-xl border-2 border-indigo-100 text-center animate-in fade-in zoom-in duration-300">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Sınav Sonucu</h2>
          <div className="grid grid-cols-3 gap-4 mb-6 text-lg">
            <div className="bg-emerald-50 p-4 rounded-xl text-emerald-700 font-bold border border-emerald-200">
              <div className="text-3xl">{score.correct}</div> Doğru
            </div>
            <div className="bg-rose-50 p-4 rounded-xl text-rose-700 font-bold border border-rose-200">
              <div className="text-3xl">{score.wrong}</div> Yanlış
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-slate-600 font-bold border border-slate-200">
              <div className="text-3xl">{score.empty}</div> Boş
            </div>
          </div>
          <Link href="/" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition">
            Ana Sayfaya Dön
          </Link>
        </div>
      )}

      {/* --- SORULAR LİSTESİ --- */}
      <div className="max-w-4xl mx-auto p-4 space-y-8">
        {questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === q.correct;

          return (
            <div key={index} className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border-2 transition-colors ${
              showResult 
                ? (isCorrect ? 'border-emerald-400 bg-emerald-50/30' : userAnswer ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200') 
                : 'border-slate-200 hover:border-indigo-300'
            }`}>

              {/* Soru Başlığı */}
              <div className="flex gap-4 mb-6">
                <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-lg h-fit text-sm md:text-base shrink-0">
                  Soru {index + 1}
                </span>
                <div className="text-slate-800 font-medium text-lg leading-relaxed">
                  {q.question}
                </div>
              </div>

              {/* Şekil / Grafik Alanı */}
              {q.shape && (
                <div className="mb-6 bg-slate-50 border border-slate-200 p-6 rounded-xl font-mono text-sm overflow-x-auto whitespace-pre-wrap text-slate-700">
                  {q.shape}
                </div>
              )}

              {/* Şıklar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['A', 'B', 'C', 'D'].map((opt) => {
                  const isSelected = userAnswer === opt;
                  let btnClass = "border-slate-200 hover:bg-slate-50 text-slate-600"; 

                  if (showResult) {
                    if (opt === q.correct) btnClass = "bg-emerald-500 border-emerald-600 text-white font-bold ring-2 ring-emerald-200"; 
                    else if (isSelected && opt !== q.correct) btnClass = "bg-rose-500 border-rose-600 text-white font-bold";
                    else btnClass = "border-slate-100 text-slate-400 opacity-50";
                  } else {
                    if (isSelected) btnClass = "bg-indigo-600 border-indigo-700 text-white shadow-md transform scale-[1.01]";
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(index, opt)}
                      disabled={showResult}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center ${btnClass}`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 shrink-0 ${
                        showResult && (opt === q.correct || isSelected) ? 'bg-white/20' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {opt}
                      </span>
                      <span className="text-base font-medium">{q[opt] as string}</span>
                    </button>
                  );
                })}
              </div>

              {/* Çözüm / Açıklama (Sadece sonuçtan sonra görünür) */}
              {showResult && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 text-blue-900 rounded-xl animate-in fade-in slide-in-from-top-2">
                  <strong className="block mb-1 text-blue-700 flex items-center gap-2">
                    <span>💡</span> Çözüm / Açıklama:
                  </strong>
                  {q.Açıklama}
                </div>
              )}
            </div>
          );
        })}

        {/* BİTİR BUTONU */}
        {!showResult && questions.length > 0 && (
          <button 
            onClick={finishTest}
            className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-5 rounded-2xl shadow-xl transform active:scale-[0.99] transition text-xl mb-10"
          >
            Sınavı Bitir ve Sonuçları Göster
          </button>
        )}
      </div>
    </div>
  );
}
