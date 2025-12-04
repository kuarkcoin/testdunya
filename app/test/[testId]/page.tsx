'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Parametreyi okumak için
import Link from "next/link";

// Soru Tipi
interface Question {
  question: string;
  shape?: string;
  A: string;
  B: string;
  C: string;
  D: string;
  correct: string;
  Açıklama: string;
}

export default function DynamicTestPage() {
  const params = useParams(); // URL'deki [testId] kısmını okur
  const testId = params.testId as string; // Örneğin: "lgs-test-1"

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!testId) return;

    // DİNAMİK FETCH: URL'den gelen isme göre dosya arar
    // Örnek: /test/lgs-deneme-5 -> /data/tests/lgs-deneme-5.json dosyasını çeker
    fetch(`/data/tests/${testId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [testId]);

  // --- Yükleniyor Ekranı ---
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-xl font-bold text-indigo-600 animate-pulse">Test Yükleniyor...</div>
      </div>
    );
  }

  // --- Hata Ekranı ---
  if (error || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Test Bulunamadı 😔</h2>
        <p className="text-slate-500 mb-6">
          "{testId}.json" isimli test dosyası henüz eklenmemiş.
        </p>
        <Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-xl">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  // --- Test Ekranı (Değişmedi) ---
  const q = questions[index];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setShowResult(true);
  };

  const next = () => {
    setSelected(null);
    setShowResult(false);
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 pb-20">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-lg">
        
        {/* Üst Bilgi */}
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-slate-800 uppercase">
              {testId.replace(/-/g, ' ')} {/* lgs-test-1 -> LGS TEST 1 yapar */}
            </h1>
            <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {index + 1} / {questions.length}
            </span>
        </div>

        {/* Soru */}
        <p className="text-lg font-semibold text-slate-900 mb-6 leading-relaxed">
            {q.question}
        </p>

        {/* Şekil */}
        {q.shape && q.shape.trim() !== "" && (
          <pre className="bg-slate-50 border border-slate-200 p-4 rounded-xl overflow-x-auto mb-6 whitespace-pre-wrap font-mono text-sm text-slate-700">
            {q.shape}
          </pre>
        )}

        {/* Şıklar */}
        <div className="space-y-3">
            {["A", "B", "C", "D"].map((opt) => {
            const optionText = q[opt as keyof Question]; 
            const isSelected = selected === opt;
            const isCorrect = showResult && opt === q.correct;
            const isWrong = showResult && isSelected && opt !== q.correct;

            return (
                <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={showResult}
                className={`
                    w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3
                    ${!showResult && 'hover:bg-slate-50 hover:border-slate-300'}
                    ${isSelected && !showResult ? "bg-indigo-50 border-indigo-400 text-indigo-900" : "bg-white border-slate-200"}
                    ${isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-900" : ""}
                    ${isWrong ? "border-rose-400 bg-rose-50 text-rose-900" : ""}
                `}
                >
                <span className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-100 text-slate-500'}
                `}>
                    {opt}
                </span>
                <span className="font-medium">{optionText}</span>
                </button>
            )})}
        </div>

        {/* Açıklama */}
        {showResult && (
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
            <p className="font-bold flex items-center gap-2">💡 Açıklama:</p>
            <p className="text-sm mt-2 opacity-90">{q.Açıklama}</p>
          </div>
        )}

        {/* Butonlar */}
        {showResult && index < questions.length - 1 ? (
          <button onClick={next} className="w-full mt-6 bg-indigo-600 text-white py-3.5 rounded-xl font-bold">
            Sonraki Soru →
          </button>
        ) : showResult && index === questions.length - 1 ? (
           <div className="mt-8 text-center">
             <div className="text-4xl mb-2">🎉</div>
             <div className="font-bold text-xl mb-4">Test Bitti!</div>
             <Link href="/" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-xl">Ana Sayfa</Link>
           </div>
        ) : null}

      </div>
    </div>
  );
}
