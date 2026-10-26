import { getStaticPageMetadata } from '../../lib/seo-pages';
import { breadcrumbJsonLd, serializeJsonLd } from '../../lib/seo';
import Link from 'next/link';
import { PARAGRAF_TESTS } from '../data/paragrafTests';

export const metadata = getStaticPageMetadata('/paragraf');

export default function ParagrafHubPage() {
  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Paragraf Testleri', path: '/paragraf' },
  ]);

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbLd) }} />

      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-700 p-6 text-white shadow-2xl md:p-10">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Türkçe • Okuduğunu Anlama
          </span>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">Paragraf Testleri</h1>
          <p className="mt-3 max-w-3xl text-sm text-rose-100 md:text-lg">
            5. sınıf düzeyindeki {PARAGRAF_TESTS.length} paragraf testinden birini seç. Her testin soru sayısını aşağıdaki kartlarda inceleyebilirsin.
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
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{test.questionCount} Soru</span>
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

