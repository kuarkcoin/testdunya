// app/page.tsx  →  %100 çalışır, 0 ek paket gerektirmez
'use client';

export default function Home() {
  const startTest = (slug: string) => {
    const attemptId = `attempt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    if (slug.startsWith('yds-exam-')) {
      const num = slug.replace('yds-exam-', '');
      const active = [1, 2, 3, 4, 5, 6];
      if (!active.includes(Number(num))) {
        alert('Bu test henüz hazır değil, çok yakında eklenecek!');
        return;
      }
      
      sessionStorage.setItem('em_attempt_payload', JSON.stringify({
        attemptId,
        testSlug: slug,
        test: { title: `YDS Gerçek Sınav - Test ${num} (80 Soru)`, duration: 150 },
        questions: [] // buraya sonra gerçek soruları koyacağız
      }));
      window.location.href = `/quiz/${attemptId}`;
      return;
    }

    // diğer testler için placeholder
    sessionStorage.setItem('em_attempt_payload', JSON.stringify({
      attemptId,
      testSlug: slug,
      test: { title: slug.replace(/-/g, ' ').toUpperCase(), duration: 60 },
      questions: []
    }));
    window.location.href = `/quiz/${attemptId}`;
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="bg-white/20 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold">
              Ücretsiz • Reklamsız • Anında Sonuç
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            İngilizce Seviyeni<br />
            <span className="text-yellow-300">Dakikalar İçinde</span> Ölç
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            YDS, YÖKDİL, IELTS hazırlık ve genel seviye tespit testleri. Gerçek sınav formatı, detaylı açıklamalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => startTest('quick-placement')}
              className="bg-white text-blue-600 px-10 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl"
            >
              Hemen Seviye Tespit Testine Başla
            </button>
            <a href="#tests" className="bg-white/20 backdrop-blur px-10 py-6 rounded-2xl font-semibold hover:bg-white/30 transition">
              Tüm Testleri Gör
            </a>
          </div>
        </div>
      </section>

      {/* YDS EXAM PACK */}
      <section id="tests" className="py-20 bg-gradient-to-b from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-pink-600 mb-4">
              YDS GERÇEK SINAV DENEMELERİ
            </h2>
            <p className="text-2xl text-pink-700">80 soru • 150 dakika • %100 gerçek format</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {[1,2,3,4,5,6,7,8].map((n) => {
              const aktif = n <= 6;
              return (
                <button
                  key={n}
                  onClick={() => startTest(`yds-exam-${n}`)}
                  disabled={!aktif}
                  className={`relative rounded-3xl py-10 font-black text-3xl transition-all ${
                    aktif
                      ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-2xl hover:scale-110 ring-4 ring-pink-300'
                      : 'bg-white/60 text-pink-300 border-4 border-pink-200 cursor-not-allowed opacity-50'
                  }`}
                >
                  {n}
                  <div className="text-sm mt-2 font-bold">
                    {aktif ? 'BAŞLA' : 'YAKINDA'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DİĞER TESTLER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16 text-gray-800">Tüm Testler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Quick Placement Test", desc: "25 soru • 15 dakika • CEFR seviye tespiti", color: "from-blue-500 to-cyan-600" },
              { title: "Grammar Mega Test", desc: "100 soru • Tüm gramer konuları", color: "from-purple-500 to-pink-600" },
              { title: "YDS Kelime 1000", desc: "En çok çıkan akademik kelimeler", color: "from-orange-500 to-red-600" },
              { title: "YDS Reading", desc: "40 soru • 10 paragraf • Gerçek YDS tarzı", color: "from-green-500 to-emerald-600" },
              { title: "YDS Grammar 100", desc: "En zor gramer soruları", color: "from-indigo-500 to-blue-600" },
              { title: "Phrasal Verbs 340", desc: "YDS'de mutlaka bilinmeli", color: "from-teal-500 to-cyan-600" },
            ].map((test) => (
              <div
                key={test.title}
                onClick={() => startTest(test.title.toLowerCase().replace(/ /g, '-'))}
                className="group cursor-pointer bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className={`h-40 bg-gradient-to-br ${test.color} flex items-center justify-center`}>
                  <div className="text-white text-6xl font-black opacity-30">?</div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                    {test.title}
                  </h3>
                  <p className="text-gray-600">{test.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href="/race"
              className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white px-16 py-10 rounded-full text-4xl font-black shadow-2xl hover:scale-110 transition-all"
            >
              Global Race Mode
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-black mb-4">EnglishMeter 2025</h3>
          <p className="text-xl text-gray-400">Türkiye'nin en çok kullanılan ücretsiz YDS & seviye tespit platformu</p>
          <p className="mt-8 text-gray-500">© 2025 Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
