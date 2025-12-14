// app/hakkimizda/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link'; // <--- BU EKSİKTİ, O YÜZDEN HATA VERİYORDU

export const metadata: Metadata = {
  title: 'Hakkımızda | TestDünya',
  description: 'TestDünya; YKS, KPSS, TUS ve DUS sınavlarına hazırlananlar için ücretsiz online deneme sınavı platformudur.',
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* Başlık */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Hakkımızda
          </h1>
          <p className="text-slate-500 text-sm md:text-base">
            TestDünya, Türkiye’deki öğrencilerin{" "}
            <strong>YKS, KPSS, TUS ve DUS</strong> gibi zorlu sınavlara
            hazırlanırken özgün denemelerle pratik yapabilmesi için
            tasarlanmış modern bir online sınav platformudur.
          </p>
        </div>

        {/* Kart 1 – Misyon */}
        <section className="mb-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-7">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            TestDünya’nın Amacı
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Amacımız, sınava hazırlık sürecini daha{" "}
            <strong>erişilebilir, ölçülebilir ve düzenli</strong> hale
            getirmek. Bunu yaparken:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm md:text-base">
            <li>Gerçek sınav formatına yakın özgün deneme sınavları sunuyoruz.</li>
            <li>Yanlış yaptığınız soruları <strong>“Hatalarım”</strong> alanında saklayarak tekrar çalışmanıza imkân veriyoruz.</li>
            <li>Üyelik zorunluluğu olmadan, hızlı ve sade bir deneyim sağlamaya çalışıyoruz.</li>
          </ul>
        </section>

        {/* Kart 2 – Sorular ve Yapay Zeka */}
        <section className="mb-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-7">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Sorular Nasıl Hazırlanıyor?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Platformdaki sorular, <strong>ÖSYM tarzı ve müfredata uygun</strong>{" "}
            olacak şekilde; insan gözetimi ve yapay zeka desteğiyle
            oluşturulmaktadır.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm md:text-base mb-3">
            <li>
              Sorular, özgün olacak şekilde hazırlanır;{" "}
              <strong>ÖSYM’nin telifli sorularının birebir kopyası değildir.</strong>
            </li>
            <li>
              Tıp ve diş hekimliği alanındaki sorular (TUS / DUS),{" "}
              <strong>öğrenme ve tekrar amaçlı klinik / temel bilim</strong>{" "}
              senaryolarına dayalıdır.
            </li>
            <li>
              Sorular, zaman içinde geri bildirimlere göre güncellenip
              iyileştirilebilir.
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            Not: Yapay zeka destekli içeriklerde olası hataları en aza indirmek
            için düzenli kontrol ve güncellemeler yapılmaktadır; yine de nihai
            çalışma kaynağınız olarak sadece bu siteye güvenmemeniz, farklı
            kaynaklarla karşılaştırma yapmanız önerilir.
          </p>
        </section>

        {/* Kart 3 – Resmiyet / ÖSYM Uyarısı */}
        <section className="mb-8 bg-white rounded-2xl shadow-sm border border-amber-200 p-6 md:p-7">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Resmî Kurumlardan Bağımsızdır
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            TestDünya; <strong>ÖSYM, MEB veya herhangi bir resmî kurumla</strong>{" "}
            bağlantılı, ortak, sponsorlu veya onaylı bir platform değildir.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm md:text-base mb-3">
            <li>
              Sitedeki tüm sınavlar{" "}
              <strong>“deneme / çalışma amaçlı”</strong> hazırlanmıştır.
            </li>
            <li>
              Gerçek sınavlarda çıkacak sorulara dair herhangi bir{" "}
              <strong>garanti veya öngörü iddiası</strong> yoktur.
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            Bu siteyi kullanmanız, resmî sınav kurumlarıyla herhangi bir
            hukuki/kurumsal ilişki doğurmaz. Sorumluluk, yalnızca sağlanan
            deneme ve pratik imkânıyla sınırlıdır.
          </p>
        </section>

        {/* Kart 4 – Kullanım, Ücret ve İletişim */}
        <section className="mb-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-7">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Kullanım, Ücretlendirme ve İletişim
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            TestDünya şu an için{" "}
            <strong>ücretsiz ve üyeliksiz</strong> olarak kullanılabilen bir
            platformdur. Gelecekte ek özellikler, istatistikler veya üyelik
            sistemleri eklenebilir; bu tür değişiklikler{" "}
            <strong>Gizlilik ve Kullanım Koşulları</strong> sayfalarında
            güncellenecektir.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Görüş, öneri ve hata bildirimleriniz; platformun gelişmesi için
            çok değerli. Bizimle iletişime geçmek için:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-semibold hover:bg-indigo-100 hover:border-indigo-300 transition-colors"
            >
              💬 İletişim Formu
            </Link>
            <Link
              href="/cookie"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-xs font-semibold hover:bg-slate-100 hover:border-slate-300 transition-colors"
            >
              🔒 Çerez Politikası
            </Link>
          </div>
        </section>

        {/* Küçük dipnot */}
        <p className="text-[11px] text-slate-400 text-center">
          TestDünya – Öğrencilerin sınava hazırlık sürecini kolaylaştırmak için
          tasarlanmış bağımsız bir online deneme platformudur.
        </p>
      </div>
    </main>
  );
}
