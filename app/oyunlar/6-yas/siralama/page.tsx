import { getStaticPageMetadata } from '../../../../lib/seo-pages';
import { Suspense } from "react";
import SiralamaClient from "./SiralamaClient";

export const metadata = getStaticPageMetadata('/oyunlar/6-yas/siralama');

export default function Page() {
  return (
    <>
      <header className="bg-white px-4 pb-4 pt-8 text-slate-900">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-black sm:text-3xl">6 Yaş Sıralama Oyunu</h1>
          <p className="mt-3 leading-relaxed text-slate-600">
            Yönergeyi okuyup nesneleri doğru sıraya yerleştir. Seçeneklere sırayla dokun,
            sıralamanı kontrol et ve yeni alıştırmalarla devam et. Yönergeleri sesli de dinleyebilirsin.
          </p>
        </div>
      </header>
      <Suspense fallback={<div className="p-6">Yükleniyor…</div>}>
        <SiralamaClient />
      </Suspense>
    </>
  );
}

