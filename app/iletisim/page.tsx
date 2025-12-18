import { Metadata } from 'next';
import Link from 'next/link';

// 👇 GÜNCELLENEN MAİL ADRESİN
const MY_EMAIL = "muratot79@gmail.com"; 

export const metadata: Metadata = {
  title: 'İletişim - TestDünya',
  description: 'Bizimle iletişime geçin. Öneri, şikayet ve görüşleriniz.',
};

// Basit bir Geri Dön İkonu
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Navbar Yerine Basit Header */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-bold">
           <ArrowLeft className="w-5 h-5" /> Ana Sayfaya Dön
        </Link>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            
            {/* Sol Taraf: Koyu Renkli Bilgi Alanı */}
            <div className="bg-slate-900 text-white p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-black mb-6 tracking-tight">İletişime Geç</h1>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Bir hata mı buldun? Yeni bir test önerin mi var? Veya sadece "Eline sağlık" demek mi istiyorsun?
                </p>
                
                <div className="space-y-8">
                  {/* Mail Bilgisi */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl shrink-0">
                      📧
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold mb-1">E-Posta Adresi</div>
                      <div className="font-medium text-lg text-emerald-400 select-all break-all">
                        {MY_EMAIL}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        (Kopyalamak için üzerine çift tıkla)
                      </div>
                    </div>
                  </div>
                  
                  {/* Konum Bilgisi */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold mb-1">Konum</div>
                      <div className="font-medium">İstanbul, Türkiye</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-500">
                <p>TestDünya - Yapay Zeka Destekli Sınav Platformu</p>
              </div>
            </div>

            {/* Sağ Taraf: Aksiyon Butonu */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col items-center justify-center text-center bg-slate-50/50">
              <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                ✉️
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Bize Yazın</h2>
              <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                Butona tıkladığınızda cihazınızdaki mail uygulaması otomatik olarak açılacaktır.
              </p>
              
              <a 
                href={`mailto:${MY_EMAIL}`} 
                className="group relative inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-1"
              >
                <span>Mail Gönder</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

        </div>
      </main>
    </div>
  );
}
