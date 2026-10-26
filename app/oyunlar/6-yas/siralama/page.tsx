import { getStaticPageMetadata } from '../../../../lib/seo-pages';
import { Suspense } from "react";
import SiralamaClient from "./SiralamaClient";

export const metadata = getStaticPageMetadata('/oyunlar/6-yas/siralama');

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Yükleniyor…</div>}>
      <SiralamaClient />
    </Suspense>
  );
}
