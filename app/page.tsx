'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

// Sınav Listesi ve Ayarları
const EXAMS = [
  { 
    id: 'yks-sozel', 
    name: 'YKS Sözel', 
    subtitle: 'TYT + AYT Sözel', 
    colors: 'from-emerald-400 to-emerald-600',
    count: 30, // 30 Adet deneme
    slugPrefix: 'yks-sozel-deneme' // JSON dosya adının ön eki
  },
  { 
    id: 'kpss-sozel', 
    name: 'KPSS Sözel', 
    subtitle: 'Genel Kültür', 
    colors: 'from-amber-400 to-orange-500',
    count: 5, 
    slugPrefix: 'kpss-sozel-test'
  },
  { 
    id: 'lgs', 
    name: 'LGS', 
    subtitle: '8. Sınıf', 
    colors: 'from-violet-500 to-fuchsia-600',
    count: 5,
    slugPrefix: 'lgs-test'
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-10 pb-16">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Hangi sınav için test çözmek istiyorsun?
          </h1>
          <p className="mt-2 text-slate-500 text-sm md:text-base">
            Aşağıdaki sınav kartlarından seçimini yap, denemelere hemen başla.
          </p>
        </div>

        {/* Sınav Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {EXAMS.map((exam) => (
            <div
              key={exam.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col gap-4"
            >
              {/* Ana Renkli Sınav Başlığı Butonu */}
              <div
                className={`block w-full rounded-2xl bg-gradient-to-r ${exam.colors}
                  text-white text-center py-4 px-4
                  text-lg font-bold shadow-md select-none`}
              >
                <div className="text-xs uppercase tracking-wide opacity-90">
                  {exam.subtitle}
                </div>
                <div className="text-2xl mt-1">{exam.name}</div>
              </div>

              {/* Altındaki Test Butonları */}
              {/* YKS Sözel için 30 tane olduğu için grid yapısını biraz sıklaştırıyoruz */}
              <div className={`grid gap-2 mt-1 ${exam.count > 10 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                {Array.from({ length: exam.count }, (_, i) => i + 1).map((n) => {
                  
                  // Dosya adı (slug) oluşturma: örn: yks-sozel-deneme-1
                  const testSlug = `${exam.slugPrefix}-${n}`;
                  
                  // Şimdilik listelenen tüm testleri aktif (yeşil) varsayıyoruz
                  // Çünkü dosyaları yüklediğini belirttin.
                  const isActive = true;

                  return (
                    <Link
                      key={n}
                      href={`/test/${testSlug}`} 
                      className={`
                        rounded-xl border text-[11px] font-semibold text-center py-2 px-1 transition flex items-center justify-center flex-col
                        ${
                          isActive
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100 shadow-sm' 
                            : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200 active:scale-95'
                        }
                      `}
                    >
                      <span>Test {n}</span>
                      {isActive && <span className="text-[9px] text-emerald-600 leading-none">✓</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dipnot */}
        <div className="text-center mt-12 text-slate-400 text-xs">
           <p className="mb-2">Yeni denemeler düzenli olarak eklenecektir.</p>
           <p className="td-hero-footnote">
             YDS çalışmaları <strong>EnglishMeter</strong> üzerinde devam etmektedir.
           </p>
        </div>
      </main>
    </div>
  );
}
