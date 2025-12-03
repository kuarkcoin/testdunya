// app/page.tsx
'use client';

import React from 'react';
import { ArrowRight, Trophy, Brain, BookOpen, Target, Zap } from 'lucide-react';

// YDS Exam veri haritası (sonradan kolayca genişlet)
const YDS_EXAMS = {
  1: 'Test 1',
  2: 'Test 2',
  3: 'Test 3',
  4: 'Test 4',
  5: 'Test 5',
  6: 'Test 6',
  7: 'Test 7 (Yakında)',
  8: 'Test 8 (Yakında)',
} as const;

const availableExamNumbers = [1, 2, 3, 4, 5, 6]; // buraya ekleyerek test aç

export default function Home() {
  const startTest = (slug: string) => {
    const attemptId = `attempt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    if (slug.startsWith('yds-exam-')) {
      const num = slug.replace('yds-exam-', '');
      if (!availableExamNumbers.includes(Number(num))) {
        alert('Bu test henüz hazır değil. Yakında geliyor!');
        return;
      }
      sessionStorage.setItem('em_attempt_payload', JSON.stringify({
        attemptId,
        testSlug: slug,
        test: { title: `YDS Gerçek Sınav - Test ${num} (80 Soru)`, duration: 150 },
        // buraya sonra gerçek soruları ekleyeceğiz
        questions: []
      }));
      window.location.href = `/quiz/${attemptId}`;
      return;
    }

    // diğer testler sonra eklenecek
    alert('Bu test geliştirme aşamasında');
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Ücretsiz · Reklamsız · Anında Sonuç
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            İngilizce Seviyeni
            <span className="block text-yellow-300">Dakikalar İçinde</span>
            Ölç
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            YDS, YÖKDİL, IELTS hazırlık ve genel seviye tespit testleri. Gerçek sınav deneyimi, detaylı açıklamalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => startTest('quick-placement')}
              className="group bg-white text-blue-600 px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
            >
              Hemen Başla <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <a href="#all-tests" className="bg-white/20 backdrop-blur px-8 py-5 rounded-2xl font-semibold hover:bg-white/30 transition">
              Tüm Testler
            </a>
          </div>
        </div>
      </section>

      {/* YDS EXAM PACK - Öne Çıkan */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-rose-50" id="all-tests">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-pink-600 mb-4 flex items-center justify-center gap-3">
              YDS Exam Pack (Gerçek Sınav Denemeleri)
            </h2>
            <p className="text-pink-700 text-lg">80 soru · 150 dakika · Tamamen gerçek sınav formatı</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {Object.entries(YDS_EXAMS).map(([num, title]) => {
              const isActive = availableExamNumbers.includes(Number(num));
              return (
                <button
                  key={num}
                  onClick={() => startTest(`yds-exam-${num}`)}
                  disabled={!isActive}
                  className={`relative overflow-hidden rounded-2xl p-6 text-center font-bold text-lg transition-all transform hover:scale-105 active:scale-95
                    ${isActive
                      ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-2xl ring-4 ring-pink-300 ring-offset-2'
                      : 'bg-white/70 text-pink-300 border-2 border-pink-200 cursor-not-allowed opacity-60'
                    }`}
                >
                  <div className="text-3xl mb-2">{num}</div>
                  <div className="text-sm">{isActive ? 'Başla' : 'Yakında'}</div>
                  {isActive && <div className="absolute inset-0 bg-white/10 -z-10 animate-pulse"></div>}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DİĞER TESTLER GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">Tüm Testler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quick Placement Test', desc: '25 soru · 15 dk', color: 'from-blue-500 to-cyan-500', icon: Target },
              { title: 'Grammar Mega Test', desc: '100 soru · Tüm konular', color: 'from-purple-500 to-pink-500', icon: Brain },
              { title: 'YDS Kelime 1000', desc: 'En çok çıkan kelimeler', color: 'from-orange-500 to-red-500', icon: BookOpen },
              { title: 'YDS Reading', desc: '40 soru · 10 paragraf', color: 'from-green-500 to-emerald-600', icon: BookOpen },
              { title: 'YDS Grammar 100', desc: 'En zor gramer soruları', color: 'from-indigo-500 to-blue-600', icon: Brain },
              { title: 'Phrasal Verbs 340', desc: 'YDS için şart', color: 'from-teal-500 to-cyan-600', icon: Zap },
            ].map((test, i) => (
              <div
                key={i}
                onClick={() => startTest(test.title.toLowerCase().replace(/ /g, '-'))}
                className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-br ${test.color} p-8 flex items-center justify-center`}>
                  <test.icon className="w-16 h-16 text-white/90" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                    {test.title}
                  </h3>
                  <p className="text-gray-600">{test.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="/race"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-rose-600 text-white px-12 py-8 rounded-full text-3xl font-black shadow-2xl hover:scale-105 transition-all"
            >
              Global Race Mode <Trophy className="w-12 h-12" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-black mb-4">EnglishMeter 2025</h3>
          <p className="text-gray-400 text-lg">Türkiye'nin en çok kullanılan ücretsiz YDS & seviye tespit platformu</p>
          <p className="mt-8 text-sm text-gray-500">Tüm hakları saklıdır © 2025</p>
        </div>
      </footer>
    </>
  );
}
