import { Metadata } from 'next';
import { Navbar } from '../components/Navbar';

export const metadata: Metadata = {
  title: 'İletişim - TestDünya',
  description: 'Bizimle iletişime geçin. Öneri, şikayet ve reklam görüşmeleri.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Sol Taraf: Bilgiler */}
            <div className="bg-slate-900 text-white p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-black mb-6">İletişime Geç</h1>
                <p className="text-slate-300 text-lg mb-8">
                  Bir hata mı buldun? Yeni bir test mi istiyorsun? Veya sadece merhaba demek mi istiyorsun? Bize yaz!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">📧</div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold">E-Posta</div>
                      <div className="font-medium">iletisim@testdunya.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">📍</div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold">Konum</div>
                      <div className="font-medium">Edirne, Türkiye</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 text-xs text-slate-400">
                EnglishMeter projemiz için de aynı kanalları kullanabilirsiniz.
              </div>
            </div>

            {/* Sağ Taraf: Basit Görünüm (Form backend olmadan çalışmaz, şimdilik mail yönlendirmesi yapalım) */}
            <div className="p-10 flex items-center justify-center text-center">
              <div>
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  👋
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Bize E-Posta Gönder</h2>
                <p className="text-slate-500 mb-8">
                  Şu an için en hızlı iletişim yolumuz e-postadır.
                </p>
                <a 
                  href="mailto:iletisim@testdunya.com" 
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-200"
                >
                  Mail Uygulamasını Aç
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
