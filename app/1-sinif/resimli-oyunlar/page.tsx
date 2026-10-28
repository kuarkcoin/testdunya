import Link from 'next/link';
import PictureIsland from '../../../components/picture-games/PictureIsland';
import { getStaticPageMetadata } from '../../../lib/seo-pages';
import { absoluteUrl, breadcrumbJsonLd, serializeJsonLd } from '../../../lib/seo';

export const metadata = getStaticPageMetadata('/1-sinif/resimli-oyunlar');

export default function PictureGamesPage() {
  return (
    <article className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd([
        breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: '1. Sınıf', path: '/1-sinif' }, { name: 'Resimli Keşif Adası', path: '/1-sinif/resimli-oyunlar' }]),
        {
          '@context': 'https://schema.org', '@type': 'LearningResource',
          name: 'Resimli Keşif Adası', url: absoluteUrl('/1-sinif/resimli-oyunlar'),
          inLanguage: 'tr', educationalLevel: '1. Sınıf', typicalAgeRange: '6-8',
          learningResourceType: 'Eğitici oyun', isFamilyFriendly: true,
          teaches: ['Örüntü tanıma', 'Görsel dikkat', 'Sınıflandırma', 'Görsel hafıza'],
          description: '7 yaş için üç düzeyde resimli örüntü, ipucu ve hafıza oyunları. Çocuğun kendi hızında oynayabildiği, sesli yönergeli alıştırmalar.',
          isAccessibleForFree: true,
        },
      ]) }} />
      <nav aria-label="Sayfa yolu" className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
        <Link href="/" className="underline underline-offset-4">Ana Sayfa</Link><span aria-hidden="true">/</span>
        <Link href="/1-sinif" className="underline underline-offset-4">1. Sınıf</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Resimli oyunlar</span>
      </nav>
      <header className="mb-6">
        <p className="text-sm font-bold tracking-wide text-teal-800 dark:text-teal-200">7 YAŞ İÇİN • OYNAYARAK KEŞFET</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">Resimli Keşif Adası</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-700 dark:text-slate-200">Resimleri incele, ipuçlarını bul, eşleri hatırla. Her küçük keşif yeni bir deneme!</p>
        <a href="#oyun-alani" className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-xl bg-teal-800 px-5 py-3 font-bold text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-teal-700">Oyuna geç <span aria-hidden="true">↓</span></a>
      </header>
      <PictureIsland />
      <p className="mt-6 text-center text-sm font-semibold text-slate-700 dark:text-slate-200">Birlikte okumak da ister misin? <Link className="underline underline-offset-4" href="/1-sinif/okuma">Okuma Bahçesi’ne git →</Link></p>
    </article>
  );
}
