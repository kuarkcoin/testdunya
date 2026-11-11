import type { ReactNode } from 'react';
import { getStaticPageMetadata } from '../../../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/oyunlar/6-yas/kayip-olani-bul');

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-white px-4 pb-4 pt-8 text-slate-900">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-black sm:text-3xl">6 Yaş Kayıp Olanı Bul Oyunu</h1>
          <p className="mt-3 leading-relaxed text-slate-600">
            Dizideki nesne ve şekilleri incele, boş yere hangi görselin gelmesi gerektiğini bul.
            Seçeneklerden birine dokunarak örüntüyü tamamla; istersen yönergeyi sesli dinle.
          </p>
        </div>
      </header>
      {children}
    </>
  );
}

