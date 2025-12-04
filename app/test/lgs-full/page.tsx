'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

// TypeScript için soru tipi tanımı (Hata almamak için gerekli)
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

export default function LgsFullTestPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  // JSON'dan veri çekme
  useEffect(() => {
    // DİKKAT: JSON dosyasının adı 'lgs-full.json' olmalı
    fetch("/data/tests/lgs-full.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Veri yüklenemedi");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
        <div className="text-xl font-semibold text-slate-500 animate-pulse">
          Sorular Yükleniyor...
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-500 mb-2">Hata!</h2>
          <p className="text-slate-600">Sorular bulunamadı. Lütfen '/public/data/tests/lgs-full.json' dosyasını kontrol et.</p>
        </div>
      </div>
    );
  }

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

        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-slate-800">
            LGS – Tam Deneme
            </h1>
            <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {index + 1} / {questions.length}
            </span>
        </div>

        {/* Soru Metni */}
        <p className="text-lg font-semibold text-slate-900 mb-6 leading-relaxed">
            {q.question}
        </p>

        {/* Şekil alanı varsa göster */}
        {q.shape && q.shape.trim() !== "" && (
          <pre className="bg-slate-50 border border-slate-200 p-4 rounded-xl overflow-x-auto mb-6 whitespace-pre-wrap font-mono text-sm text-slate-700">
            {q.shape}
          </pre>
        )}

        {/* Şıklar */}
        <div className="space-y-3">
            {["A", "B", "C", "D"].map((opt) => {
            // TypeScript hatasını önlemek için key erişimi
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
            <p className="font-bold flex items-center gap-2">
                💡 Doğru cevap: {q.correct}
            </p>
            <p className="text-sm mt-2 leading-relaxed opacity-90">
                {q.Açıklama}
            </p>
          </div>
        )}

        {/* İleri butonu */}
        {showResult && index < questions.length - 1 && (
          <button
            onClick={next}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold transition shadow-lg shadow-indigo-200"
          >
            Sonraki Soru →
          </button>
        )}

        {/* Test bitti */}
        {index === questions.length - 1 && showResult && (
          <div className="text-center mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-xl font-bold text-slate-800">Testi Tamamladın!</p>
            <Link
              href="/"
              className="inline-block mt-4 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-medium transition"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
