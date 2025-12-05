import Link from 'next/link';
import { Navbar } from './components/Navbar';
import { Metadata } from 'next';

// --- SEO AYARLARI (Görünmez Kısım - Google için Kimlik Kartı) ---
export const metadata: Metadata = {
  title: 'Test Çöz - YKS Sözel, KPSS ve LGS Ücretsiz Deneme Sınavları',
  description: '2025 YKS Sözel, KPSS ve LGS sınavlarına hazırlık için online test çöz. Anında sonuç öğren, süre tut ve kendini dene. Ücretsiz online deneme platformu.',
  keywords: ['test çöz', 'yks sözel deneme', 'kpss test çöz', 'lgs deneme', 'online sınav', 'ücretsiz test', 'tyt ayt sözel'],
  authors: [{ name: 'TestDünya' }],
  openGraph: {
    title: 'Ücretsiz Online Deneme Sınavları - YKS, KPSS, LGS',
    description: 'YKS Sözel, KPSS ve LGS için hazırlanmış yüzlerce yeni nesil soruyu hemen çöz.',
    url: 'https://testdunya.com', // Burayı siteyi yayınlayınca güncellersin
    siteName: 'TestDünya',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Sınav Listesi
const EXAMS = [
  { 
    id: 'yks-sozel', 
    name: 'YKS Sözel', 
    subtitle: 'TYT + AYT Sözel', 
    colors: 'from-emerald-400 to-emerald-600',
    count: 30, // 30 Adet deneme
    slugPrefix: 'yks-sozel-deneme'
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
  
  // Google için Yapısal Veri (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TestDünya - Online Test Çöz',
    description: 'YKS, KPSS ve LGS öğrencileri için ücretsiz online deneme sınavları.',
    url: 'https://testdunya.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://testdunya.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Schema Scripti */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              <div className={`grid gap-2 mt-1 ${exam.count > 10 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                {Array.from({ length: exam.count }, (_, i) => i + 1).map((n) => {
                  const testSlug = `${exam.slugPrefix}-${n}`;
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

        {/* --- SEO İÇERİK ALANI (Sayfa Altı Bilgilendirme) --- */}
        <div className="mt-20 border-t border-slate-200 pt-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-slate-600">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Online Test Çözerek Başarınızı Artırın</h2>
              <p className="mb-4">
                2025 eğitim yılına hazırlanan öğrenciler için geliştirdiğimiz <strong>TestDünya</strong>, sınav stresini azaltmak ve pratik yapmayı kolaylaştırmak için tasarlandı. İster evde, ister okulda, ister yolda olun; mobil uyumlu arayüzümüz sayesinde dilediğiniz zaman <strong>ücretsiz test çöz</strong>ebilirsiniz.
              </p>
              <p>
                Sitemizdeki tüm sorular, MEB müfredatına ve ÖSYM'nin yeni nesil soru tarzlarına uygun olarak seçilmektedir. Zaman karşı yarışarak gerçek sınav provası yapabilir, eksik olduğunuz konuları anında tespit edebilirsiniz.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">YKS Sözel, KPSS ve LGS Denemeleri</h3>
              <ul className="space-y-2 list-disc list-inside marker:text-indigo-500">
                <li>
                  <strong>YKS Sözel Testleri:</strong> Edebiyat, Tarih, Coğrafya ve Felsefe alanlarında 30'dan fazla deneme ile TYT ve AYT netlerinizi yükseltin.
                </li>
                <li>
                  <strong>LGS Deneme Sınavları:</strong> 8. sınıf öğrencileri için mantık ve muhakeme odaklı, görsel destekli yeni nesil sorular.
                </li>
                <li>
                  <strong>KPSS Genel Kültür:</strong> Memurluk sınavına hazırlananlar için tarih, coğrafya ve vatandaşlık testleri.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dipnot Güncellemesi */}
        <div className="text-center mt-8 text-slate-400 text-xs border-t border-slate-100 pt-6 pb-6 flex flex-col items-center gap-2">
           <p>© 2025 TestDünya - Tüm Hakları Saklıdır.</p>
           <div className="flex gap-4">
             <Link href="/gizlilik" className="hover:text-slate-600 underline decoration-slate-200">Gizlilik Politikası</Link>
             <Link href="/iletisim" className="hover:text-slate-600 underline decoration-slate-200">İletişim</Link>
           </div>
           <p className="td-hero-footnote mt-2">
             YDS çalışmaları <strong>EnglishMeter</strong> platformumuzda devam etmektedir.
           </p>
        </div>
