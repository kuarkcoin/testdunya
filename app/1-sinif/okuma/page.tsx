import Link from 'next/link';
import ReadingGarden from '../../../components/reading/ReadingGarden';
import { getStaticPageMetadata } from '../../../lib/seo-pages';
import { absoluteUrl, breadcrumbJsonLd, serializeJsonLd } from '../../../lib/seo';

export const metadata = getStaticPageMetadata('/1-sinif/okuma');

export default function ReadingPage() {
  return (
    <article className="mx-auto max-w-6xl px-3 py-6 text-slate-900 sm:px-6 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd([
        breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: '1. Sınıf', path: '/1-sinif' }, { name: 'Okuma Bahçesi', path: '/1-sinif/okuma' }]),
        {
          '@context': 'https://schema.org', '@type': 'LearningResource',
          name: 'Okuma Bahçesi — 1. Sınıf Okuma Alıştırmaları',
          url: absoluteUrl('/1-sinif/okuma'), inLanguage: 'tr',
          educationalLevel: '1. Sınıf', learningResourceType: 'İnteraktif okuma alıştırması',
          description: 'Harf tanıma, hece birleştirme, kelime kurma ve kısa metin okuma çalışmaları. Sesli örnekler ve isteğe bağlı oku, kaydet, dinle etkinliği.',
          isFamilyFriendly: true,
        },
      ]) }} />
      <nav aria-label="Sayfa yolu" className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
        <Link href="/" className="underline underline-offset-4">Ana Sayfa</Link><span aria-hidden="true">/</span>
        <Link href="/1-sinif" className="underline underline-offset-4">1. Sınıf</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Okuma Bahçesi</span>
      </nav>
      <header className="mb-6 rounded-[2rem] border border-emerald-200 bg-[#f5fbef] p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">1. Sınıf • Adım adım okuma</p>
        <h1 className="mt-2 text-3xl font-black sm:text-5xl">Okuma Bahçesi <span aria-hidden="true">🌱</span></h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">Harfleri tanı. Heceleri birleştir. Kelimeleri ve küçük öyküleri oku. Hazırsan başlayalım!</p>
      </header>
      <div id="okuma-alani">
        <ReadingGarden />
      </div>
    </article>
  );
}
