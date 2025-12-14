// app/cookie/page.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası | TestDünya',
  description: 'TestDünya çerez kullanım politikası, gizlilik ve veri güvenliği hakkında bilgiler.',
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 mb-6">
            {/* Cookie İkonu (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12v.01" />
              <path d="M11 17v.01" />
              <path d="M7 14v.01" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Çerez Politikası
          </h1>
          <p className="text-lg text-gray-600">
            Son güncelleme: <span className="font-semibold">Aralık 2025</span>
          </p>
        </div>

        {/* İçerik Kartı */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8 sm:p-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-xl text-gray-800 mb-8">
              Bu Çerez Politikası, <strong>Testdunya.net</strong> web sitesini ziyaret ettiğinizde çerezlerin (cookie) nasıl kullanıldığını, verilerinizin nasıl işlendiğini ve gizliliğinizin nasıl korunduğunu açıklar.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
              1. Çerez (Cookie) Nedir?
            </h3>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, sitenin sizi hatırlamasını, oturumunuzun açık kalmasını ve site tercihlerinizin (örneğin dil ayarları) saklanmasını sağlar.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Hangi Tür Çerezleri Kullanıyoruz?</h3>
            <div className="grid gap-6 md:grid-cols-2 mt-4">
              
              {/* Kart 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                   <strong className="block text-slate-900 text-lg">Zorunlu Çerezler</strong>
                </div>
                <p className="text-sm text-slate-600">Sitenin düzgün çalışması için gereklidir. Örneğin test çözerken ilerlemenizin kaybolmaması veya sisteme giriş yapabilmeniz için bu çerezlere ihtiyaç vardır.</p>
              </div>

              {/* Kart 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                   <strong className="block text-slate-900 text-lg">Analitik Çerezler</strong>
                </div>
                <p className="text-sm text-slate-600">Google Analytics gibi araçlar kullanarak ziyaretçi sayısını, hangi sayfaların popüler olduğunu ölçmemize yarar. Bu veriler tamamen anonimdir.</p>
              </div>

              {/* Kart 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                   <strong className="block text-slate-900 text-lg">Reklam Çerezleri</strong>
                </div>
                <p className="text-sm text-slate-600">Size ilgi alanlarınıza uygun reklamlar göstermek için (Google AdSense vb.) kullanılır. Bu çerezler tarayıcı alışkanlıklarınıza göre kişiselleştirilmiş içerik sunar.</p>
              </div>

            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Çerezleri Nasıl Yönetebilirsiniz?</h3>
            <p>
              Tarayıcı ayarlarınızı değiştirerek çerezleri dilediğiniz zaman engelleyebilir veya silebilirsiniz. Ancak zorunlu çerezleri devre dışı bırakmak, TestDünya üzerindeki bazı özelliklerin (örneğin test sonuçlarını görüntüleme) çalışmamasına neden olabilir.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
                <li>Google Chrome: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
                <li>Mozilla Firefox: Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
                <li>Safari: Tercihler &gt; Gizlilik</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. İletişim</h3>
            <p>
              Çerez politikamız veya kişisel verilerinizle ilgili her türlü sorunuz için bizimle iletişime geçebilirsiniz.
            </p>
            
            <div className="mt-6 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                    <p className="text-sm text-indigo-900 font-bold">E-posta Adresimiz</p>
                    <a href="mailto:iletisim@testdunya.net" className="text-indigo-700 hover:underline font-medium">iletisim@testdunya.net</a>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
