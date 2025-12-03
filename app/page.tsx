import Link from 'next/link';
import { EXAMS } from './data/exams';
import { Navbar } from './components/Navbar';

// Renk tanımlarını dinamik yapmak için harita
const colorMap: Record<string, any> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700', btn: 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800', btn: 'bg-white text-orange-600 border-orange-100 hover:bg-orange-600 hover:text-white hover:border-orange-600' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-800', btn: 'bg-white text-rose-600 border-rose-100 hover:bg-rose-600 hover:text-white hover:border-rose-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800', btn: 'bg-white text-emerald-600 border-emerald-100 hover:bg-emerald-600 hover:text-white hover:border-emerald-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-800', btn: 'bg-white text-violet-600 border-violet-100 hover:bg-violet-600 hover:text-white hover:border-violet-600' },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* --- BASİT HERO (ÇOK YAZI YOK) --- */}
      <section className="pt-12 pb-8 px-4 text-center max-w-4xl mx-auto">
         <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900">
            Sınavını Seç, <span className="text-indigo-600">Hemen Başla.</span>
         </h1>
         <p className="text-lg text-slate-500 font-medium">
            Türkiye'nin en pratik test platformu. Üyelik yok, bekleme yok.
         </p>
      </section>

      {/* --- SINAV PAKETLERİ (MAIN GRID) --- */}
      <div className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {EXAMS.map((exam) => {
            const theme = colorMap[exam.colorTheme] || colorMap.blue;

            return (
              <div 
                key={exam.key} 
                className={`rounded-3xl border-2 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow ${theme.bg} ${theme.border}`}
              >
                {/* Kart Başlığı */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className={`text-2xl font-black ${theme.text}`}>{exam.name}</h2>
                    <span className="text-sm font-semibold opacity-70">{exam.label}</span>
                  </div>
                  {/* Süsleme İkonu */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl bg-white/50 backdrop-blur-sm`}>
                    🎯
                  </div>
                </div>

                {/* Test Butonları Grid'i */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {exam.tests.map((test) => (
                    <Link
                      key={test.id}
                      href={`/test/${test.id}`}
                      className={`relative group flex items-center justify-center py-4 px-2 rounded-xl border-2 font-bold text-sm text-center transition-all duration-200 active:scale-95 ${theme.btn}`}
                    >
                      {test.name}
                      {test.isNew && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                          YENİ
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
                
                {/* Tümünü Gör Linki */}
                <Link 
                  href={`/sinav/${exam.key}`} 
                  className={`block text-center mt-4 text-xs font-bold uppercase tracking-wider opacity-60 hover:opacity-100 ${theme.text}`}
                >
                  Tüm Testleri Gör →
                </Link>
              </div>
            );
          })}

        </div>
      </div>

      {/* --- SEO FOOTER (GÖZ YORMAYAN ALAN) --- */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-slate-500 text-sm leading-relaxed space-y-6">
            <h3 className="text-slate-900 font-bold text-lg">TestDünya Hakkında</h3>
            <p>
                TestDünya, YKS (TYT-AYT), LGS, KPSS, ALES, DGS ve Ehliyet sınavlarına hazırlanan öğrenciler için geliştirilmiş ücretsiz bir online test çözme platformudur. 
                Sitemizdeki tüm deneme sınavları, ÖSYM ve MEB müfredatına %100 uyumlu yeni nesil sorulardan oluşmaktadır.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
                <div>
                    <h4 className="text-slate-900 font-bold mb-2">YKS Hazırlık</h4>
                    <p>Üniversite sınavına hazırlananlar için TYT Türkçe, Matematik, Fen ve Sosyal denemeleri ile AYT alan testleri.</p>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold mb-2">LGS Denemeleri</h4>
                    <p>8. sınıf öğrencileri için liselere geçiş sınavı simülasyonları ve konu tarama testleri.</p>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold mb-2">Memuriyet & Ehliyet</h4>
                    <p>KPSS lisans, önlisans genel yetenek genel kültür testleri ve animasyonlu ehliyet soruları.</p>
                </div>
            </div>
            <p className="text-xs pt-8 border-t border-slate-200 text-center">
                © 2024 TestDünya. Bu sitedeki içerikler eğitim amaçlıdır.
            </p>
        </div>
      </section>

    </div>
  );
}
