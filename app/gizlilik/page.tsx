import { Navbar } from '../components/Navbar';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası ve Kullanım Şartları</h1>
        
        <div className="prose prose-slate bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3>1. Giriş</h3>
          <p>TestDünya ("Biz"), kullanıcılarının gizliliğine önem verir. Bu platform tamamen eğitim amaçlı olup, ücretsiz hizmet vermektedir.</p>
          
          <h3>2. Çerezler (Cookies)</h3>
          <p>Sitemiz, kullanıcı deneyimini geliştirmek amacıyla basit çerezler kullanabilir. Bu çerezler kişisel verilerinizi toplamaz, sadece site tercihlerini hatırlar.</p>
          
          <h3>3. Veri Toplama</h3>
          <p>Kullanıcılardan isim, soyisim veya telefon numarası gibi kişisel veriler talep etmemekteyiz. Sınav sonuçlarınız tarayıcınızda geçici olarak işlenir.</p>
          
          <h3>4. Telif Hakları</h3>
          <p>Sitemizdeki soruların bir kısmı ÖSYM çıkmış soruları veya özgün içeriklerdir. Eğitim amaçlı kullanım içindir.</p>
          
          <div className="mt-8 pt-4 border-t text-sm text-slate-400">
            Son Güncelleme: 05 Aralık 2025
          </div>
        </div>
      </main>
    </div>
  );
}
