import type { Metadata } from 'next';
import Link from 'next/link';
import { PARAGRAF_TESTS, PARAGRAF_QUESTIONS_PER_TEST } from '../data/paragrafTests';

export const metadata: Metadata = {
  title: 'Paragraf Testleri | Testdunya',
  description:
    '5. sınıf düzeyine uygun 50 adet paragraf testi çözün. Her test 20 soru içerir ve okuduğunu anlama becerisini geliştirir.',
  openGraph: {
    title: 'Paragraf Testleri',
    description:
      'Paragraf testleri hub sayfası: 50 test, her testte 20 soru.',
    type: 'website',
    url: 'https://www.testdunya.com/paragraf',
  },
};

export default function ParagrafHubPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.testdunya.com/' },
      { '@type': 'ListItem', position: 2, name: 'Paragraf Testleri', item: 'https://www.testdunya.com/paragraf' },
    ],
  };

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-700 p-6 text-white shadow-2xl md:p-10">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Türkçe • Okuduğunu Anlama
          </span>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">Paragraf Testleri</h1>
          <p className="mt-3 max-w-3xl text-sm text-rose-100 md:text-lg">
            5. sınıf konu testi mimarisiyle uyumlu şekilde hazırlanmış 50 paragraf testi. Her testte {PARAGRAF_QUESTIONS_PER_TEST} soru bulunur.
          </p>
        </section>

        <nav className="text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">Ana Sayfa</Link> / <span>Paragraf Testleri</span>
        </nav>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PARAGRAF_TESTS.map((test) => (
            <Link
              key={test.id}
              href={`/paragraf/${test.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-fuchsia-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100 text-lg">📖</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">20 Soru</span>
              </div>

              <h2 className="mt-4 text-xl font-black text-slate-800">Test {test.id}</h2>
              <p className="mt-1 text-sm font-medium text-slate-600">Konu: Paragraf • Seviye: 5. Sınıf</p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-600">
                Teste Başla <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
