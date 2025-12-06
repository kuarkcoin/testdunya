import Link from 'next/link';

export const metadata = {
  title: 'Gizlilik Politikası - TestDünya',
};

const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
        
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-bold mb-6">
             <ArrowLeft className="w-5 h-5" /> Ana Sayfaya Dön
          </Link>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Gizlilik Politikası ve Kullanım Şartları</h1>
          <p className="text-slate-500 text-sm">Son Güncelleme: 7 Aralık 2025</p>
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">1. Genel Bilgilendirme</h2>
            <p>
              TestDünya ("Platform"), kullanıcılara YKS, KPSS ve TUS sınavlarına hazırlık amacıyla yapay zeka destekli özgün deneme sınavları sunan ücretsiz bir eğitim platformudur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">2. Veri Toplama ve Çerezler</h2>
            <p>
              Platformumuzda **üyelik sistemi bulunmamaktadır.** Bu nedenle adınız, e-posta adresiniz veya şifreniz gibi kişisel verilerinizi sunucularımızda **saklamıyoruz.**
            </p>
            <p className="mt-2">
              Sınav ilerlemeniz, çözdüğünüz testler ve "Hatalarım" listesi, sadece sizin cihazınızda (tarayıcınızın <strong>LocalStorage</strong> alanında) tutulur. Tarayıcı geçmişinizi temizlediğinizde bu veriler silinebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">3. İçerik ve Telif Hakkı</h2>
            <p>
              Sitemizdeki sorular, eğitim amaçlı olarak yapay zeka teknolojileri kullanılarak özgün bir şekilde üretilmiştir. ÖSYM veya diğer kurumların telif haklarına tabi olan birebir çıkmış soruları barındırmamaktayız. İçerikler sadece kişisel çalışma amaçlı kullanılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-2">4. İletişim</h2>
            <p>
              Her türlü öneri, hata bildirimi veya telif hakkı ihlali şüphesi için bizimle <strong>İletişim</strong> sayfamız üzerinden bağlantıya geçebilirsiniz.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
