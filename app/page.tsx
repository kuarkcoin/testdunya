// app/page.tsx → Kopyala-yapıştır, çalıştır → BİTTİ!
'use client';

export default function Home() {
  const startTest = (slug: string) => {
    const attemptId = `a${Date.now()}`;
    const num = slug.match(/\d+/)?.[0];

    // YDS Exam Pack
    if (slug.startsWith('yds-exam-')) {
      if (![1,2,3,4,5,6].includes(Number(num))) {
        alert('Bu deneme çok yakında aktif olacak!');
        return;
      }
      sessionStorage.setItem('em_attempt_payload', JSON.stringify({
        attemptId,
        testSlug: slug,
        test: { title: `YDS Gerçek Deneme - Test ${num}`, duration: 150 },
        questions: []
      }));
      window.location.href = `/quiz/${attemptId}`;
      return;
    }

    // Diğer testler (şimdilik hepsi aynı yere yönlendiriyor, sonra ayırırız)
    sessionStorage.setItem('em_attempt_payload', JSON.stringify({
      attemptId,
      testSlug: slug,
      test: { title: slug.replace(/-/g,' ').toUpperCase(), duration: 60 },
      questions: []
    }));
    window.location.href = `/quiz/${attemptId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-pink-50">

      {/* HERO */}
      <div className="pt-16 pb-12 text-center px-6">
        <div className="mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
            ÜCRETSİZ & REKLAMSIZ
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-6">
          İngilizce Seviyeni<br/>Ölç!
        </h1>
        <button
          onClick={() => startTest('quick-placement')}
          className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-2xl font-bold px-12 py-8 rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          HEMEN BAŞLA
        </button>
      </div>

      {/* YDS EXAM PACK - BÜYÜK RENKLİ BUTONLAR */}
      <div className="px-6 pb-16">
        <h2 className="text-center text-4xl font-black text-pink-600 mb-10">
          YDS GERÇEK DENEMELER
        </h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[1,2,3,4,5,6,7,8].map(n => {
            const aktif = n <= 6;
            return (
              <button
                key={n}
                onClick={() => startTest(`yds-exam-${n}`)}
                disabled={!aktif}
                className={`relative h-40 rounded-3xl font-black text-5xl shadow-2xl transition-all active:scale-95
                  ${aktif 
                    ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 ring-8 ring-pink-300 ring-opacity-50' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div>{n}</div>
                  <div className="text-lg mt-2">{aktif ? 'BAŞLA' : 'YAKINDA'}</div>
                </div>
                {aktif && <div className="absolute inset-0 bg-white opacity-10 rounded-3xl"></div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* DİĞER TESTLER - RENKLİ UYGULAMA BUTONLARI */}
      <div className="px-6 pb-32 space-y-8">
        {[
          {title: "Quick Placement Test", color: "from-blue-500 to-cyan-600", icon: "Target"},
          {title: "Grammar Mega Test 100Q", color: "from-purple-500 to-pink-600", icon: "Brain"},
          {title: "YDS Kelime 1000", color: "from-orange-500 to-red-600", icon: "Book"},
          {title: "YDS Reading 40Q", color: "from-green-500 to-emerald-600", icon: "Passage"},
          {title: "YDS Grammar 100Q", color: "from-indigo-500 to-blue-700", icon: "Grammar"},
          {title: "Phrasal Verbs 340", color: "from-teal-500 to-cyan-700", icon: "Phrasal"},
          {title: "IELTS Grammar 50Q", color: "from-sky-500 to-blue-600", icon: "IELTS"},
        ].map((test, i) => (
          <button
            key={i}
            onClick={() => startTest(test.title.toLowerCase().replace(/ /g, '-'))}
            className={`w-full h-32 rounded-3xl bg-gradient-to-r ${test.color} text-white font-black text-3xl shadow-2xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-6`}
          >
            <span className="text-6xl">{test.icon}</span>
            <span>{test.title}</span>
          </button>
        ))}

        {/* RACE MODE - KIRMIZI BÜYÜK BUTON */}
        <a
          href="/race"
          className="block w-full mt-16"
        >
          <div className="h-40 bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl shadow-2xl flex items-center justify-center gap-8 hover:scale-105 active:scale-95 transition-all">
            <span className="text-8xl">Trophy</span>
            <div className="text-left">
              <div className="text-4xl font-black">Global Race Mode</div>
              <div className="text-xl opacity-90">Dünya ile yarış!</div>
            </div>
          </div>
        </a>
      </div>

      {/* SABİT ALT BAR (gerçek mobil app gibi) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-indigo-600 shadow-2xl">
        <div className="flex justify-around items-center h-20">
          <button className="text-indigo-600 font-bold text-xl">Ana Sayfa</button>
          <button className="text-gray-500 font-bold text-xl">Sonuçlar</button>
          <button className="text-gray-500 font-bold text-xl">Profil</button>
        </div>
      </div>
    </div>
  );
}
