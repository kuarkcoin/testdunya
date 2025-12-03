import Link from 'next/link';
import { EXAMS, CATEGORIES } from './data/exams';
import { Navbar } from './components/Navbar'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* --- HERO SECTION (ENGLISHMETER STYLE) --- */}
      <section className="w-full max-w-6xl mx-auto px-4 pt-10 pb-8 sm:pt-16 sm:pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Sol: Metin Alanı */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
              TestDünya · TÜRKİYE'NİN TEST MERKEZİ
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 leading-tight">
              Sınavlara hazırlıkta <br />
              <span className="text-indigo-600">seviyeni keşfet.</span>
            </h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed max-w-md">
              YKS, LGS, KPSS, ALES ve Ehliyet sınavları için online deneme çöz, 
              sıralamanı gör, eksiklerini anında kapat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/sinav/yks" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-base shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition transform active:scale-95"
              >
                Hemen YKS Çöz
              </Link>
              <Link 
                href="#all-exams" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-base bg-white hover:bg-slate-50 transition"
              >
                Tüm Sınavlar
              </Link>
            </div>
          </div>

          {/* Sağ: Görsel Alanı (Örnek Sonuç Kartı) */}
          <div className="hidden md:block relative">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
             <div className="relative mx-auto max-w-sm transform rotate-2 hover:rotate-0 transition duration-500">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 shadow-2xl text-white">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="text-sm font-semibold opacity-80 mb-1">Örnek Sonuç</div>
                        <div className="text-3xl font-black">TYT PROVA</div>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg text-2xl">
                        🏆
                    </div>
                </div>
                
                <div className="space-y-5">
                    <div>
                        <div className="flex justify-between text-sm opacity-90 mb-1">
                            <span>Türkçe</span>
                            <span className="font-bold">35/40</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-indigo-400/40 overflow-hidden">
                          <div className="h-full w-[87%] bg-white rounded-full" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm opacity-90 mb-1">
                            <span>Matematik</span>
                            <span className="font-bold">30/40</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-indigo-400/40 overflow-hidden">
                          <div className="h-full w-[75%] bg-white rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs opacity-75 flex justify-between">
                  <span>Türkiye Geneli: <strong>#452</strong></span>
                  <span>Katılım: <strong>12.500+</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <div id="all-exams" className="flex flex-col items-center justify-center px-4 pb-16 pt-8">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* 1. BÖLÜM: BÜYÜK RENKLİ SINAV KARTLARI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {EXAMS.map((exam) => (
              <Link 
                key={exam.key} 
                href={`/sinav/${exam.key}`}
                className={`group relative flex flex-col items-center justify-center px-6 py-10 rounded-2xl text-white text-xl font-bold shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl ${exam.color}`}
              >
                <span className="text-3xl mb-2">{exam.name}</span>
                <span className="text-sm font-medium opacity-90 bg-black/10 px-3 py-1 rounded-full">
                    {exam.label}
                </span>
                <span className="absolute bottom-4 text-[10px] font-normal opacity-0 group-hover:opacity-80 transition-opacity">
                    {exam.highlight}
                </span>
              </Link>
            ))}
          </div>

          {/* 2. BÖLÜM: BRANŞ TESTLERİ (KART TASARIMI) */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-10">
              <span className="bg-white px-8 py-3 rounded-full text-slate-500 font-bold text-sm border border-slate-200 uppercase tracking-wider shadow-sm">
                Branş Denemeleri & Konu Taramaları
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => (
                <div 
                  key={cat.slug} 
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200"
                >
                  {/* Kart Başlığı */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-50">
                    <span className="flex items-center justify-center w-10 h-10 text-xl bg-slate-50 rounded-lg">
                        {cat.icon}
                    </span>
                    <h3 className="font-bold text-slate-800 text-lg">{cat.title}</h3>
                  </div>

                  {/* Test Butonları Listesi */}
                  <div className="space-y-2.5">
                    {cat.tests.map((test) => (
                      <Link
                        key={test.id}
                        href={`/test/${test.id}`} 
                        className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg bg-slate-50 text-slate-600 text-sm font-semibold border border-transparent hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-100 transition-all group"
                      >
                        <span className="truncate pr-2">{test.label}</span>
                        <span className="text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          ▶
                        </span>
                      </Link>
                    ))}
                    
                    <Link 
                      href={`/ders/${cat.slug}`} 
                      className="block text-center text-xs font-medium text-slate-400 mt-3 pt-2 hover:text-indigo-600 transition-colors"
                    >
                      Tümünü Gör ({cat.tests.length + 5})
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. BÖLÜM: SEO & FOOTER ALANI */}
          <section className="text-left w-full border-t border-slate-200 pt-16 mt-12 bg-slate-50/50 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3 text-sm">🎓</span>
                  YKS & LGS Hazırlık
                </h2>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Türkiye'nin en kapsamlı online test platformu <strong>TestDünya</strong> ile sınava hazırlanın. 
                  <strong>TYT</strong>, <strong>AYT</strong> ve <strong>LGS</strong> deneme sınavları, ÖSYM formatına uygun yeni nesil sorulardan oluşur.
                </p>
                <ul className="list-disc pl-4 text-sm text-slate-500 space-y-1">
                  <li><strong>Yeni Nesil Sorular:</strong> Mantık ve muhakeme odaklı içerik.</li>
                  <li><strong>Çıkmış Sorular:</strong> Son 10 yılın arşivine erişim.</li>
                  <li><strong>Sıralama Analizi:</strong> Türkiye geneli yerini gör.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3 text-sm">🚀</span>
                  KPSS, ALES ve Ehliyet
                </h2>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Memuriyet hayali kuranlar için <strong>KPSS Lisans</strong>, Önlisans ve Ortaöğretim denemeleri; 
                  Akademik kariyer için <strong>ALES</strong> ve <strong>YÖKDİL</strong> testleri tamamen ücretsiz.
                  Ayrıca ehliyet sınavı için güncel animasyonlu soruları çözebilirsiniz.
                </p>
                <p className="text-sm text-slate-500 mt-4 italic">
                    "Başarı, her gün tekrarlanan küçük gayretlerin toplamıdır."
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; 2024 TestDünya. Tüm hakları saklıdır.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-indigo-600">Gizlilik</a>
                        <a href="#" className="hover:text-indigo-600">İletişim</a>
                    </div>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
