import Link from 'next/link';
import { getTestCatalog } from '../../lib/test-data';
import { groupCanonicalTests } from '../../lib/test-navigation';
import { absoluteUrl, breadcrumbJsonLd, serializeJsonLd } from '../../lib/seo';
import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/testler');

const learningHubs = [
  { href: '/1-sinif/okuma', title: '1. Sınıf Okuma Alıştırmaları' },
  { href: '/5-sinif', title: '5. Sınıf Ders Testleri' },
  { href: '/6-sinif', title: '6. Sınıf Ders Testleri' },
  { href: '/chess-tests', title: 'Satranç Testleri' },
  { href: '/edirne-masallari', title: 'Edirne Masalları: Okuma ve Anlama' },
];

export default async function TestCatalogPage() {
  const groups = groupCanonicalTests(await getTestCatalog());
  const tests = groups.flatMap((group) => group.tests);
  const questionCount = groups.reduce((total, group) => total + group.questionCount, 0);
  const schema = [
    breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: 'Test Kataloğu', path: '/testler' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'TestDünya Test Kataloğu',
      description: 'Sınavlara ve konulara göre çevrim içi testler, denemeler ve bulmacalar.',
      url: absoluteUrl('/testler'),
      inLanguage: 'tr',
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: tests.length,
        itemListElement: tests.map((test, index) => ({
          '@type': 'ListItem', position: index + 1, name: test.title, url: absoluteUrl(`/test/${test.canonicalId}`),
        })),
      },
    },
  ];

  return (
    <main className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      <nav aria-label="İçerik yolu" className="text-sm text-slate-600 dark:text-zinc-300">
        <Link href="/" className="underline-offset-4 hover:underline">Ana Sayfa</Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span aria-current="page">Test Kataloğu</span>
      </nav>

      <header className="rounded-3xl bg-gradient-to-br from-indigo-700 to-sky-700 p-6 text-white shadow-lg sm:p-10">
        <p className="text-sm font-semibold text-indigo-100">Sınavlara ve konulara göre çalışma</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Online Test Kataloğu</h1>
        <p className="mt-5 max-w-3xl leading-relaxed text-indigo-50">
          YKS, KPSS, TUS, DUS ve LGS denemelerini; İngilizce, paragraf, mevzuat ve mantık testlerini
          burada bulabilirsiniz. Bir kategori seçin, soru sayısına göre testinizi belirleyin ve çözmeye başlayın.
        </p>
        <p className="mt-5 font-semibold">{groups.length} kategori · {tests.length} test · {questionCount.toLocaleString('tr-TR')} soru</p>
      </header>

      <nav aria-label="Test kategorileri" className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Kategori seçin</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {groups.map(({ category, tests: categoryTests }) => (
            <li key={category.key}>
              <a href={`#${category.anchor}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                {category.title} <span className="text-slate-500 dark:text-zinc-400">({categoryTests.length})</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="ders-testleri" className="rounded-2xl border border-slate-200 p-5 dark:border-zinc-700">
        <h2 id="ders-testleri" className="text-lg font-bold text-slate-900 dark:text-zinc-100">Dersler, okuma ve beceri çalışmaları</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">Ders ve ünite sırasıyla ilerlemek için sınıf bölümlerini ziyaret edin. Okuma alıştırmaları, sesli Edirne masalları ve satranç testleriyle farklı becerileri çalışın.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {learningHubs.map((hub) => (
            <li key={hub.href}>
              <Link href={hub.href} className="block rounded-xl bg-sky-50 px-4 py-3 font-semibold text-sky-800 hover:underline dark:bg-sky-950 dark:text-sky-200">{hub.title} <span aria-hidden="true">→</span></Link>
            </li>
          ))}
        </ul>
      </section>

      {groups.map(({ category, tests: categoryTests, questionCount: categoryQuestionCount }) => (
        <section key={category.key} id={category.anchor} aria-labelledby={`${category.anchor}-heading`} className="scroll-mt-24">
          <div className="mb-5 max-w-3xl">
            <h2 id={`${category.anchor}-heading`} className="text-2xl font-black text-slate-900 dark:text-zinc-100">{category.title}</h2>
            <p className="mt-2 leading-relaxed text-slate-600 dark:text-zinc-300">{category.description}</p>
            <p className="mt-2 text-sm font-semibold text-indigo-700 dark:text-indigo-300">{categoryTests.length} test · {categoryQuestionCount.toLocaleString('tr-TR')} soru</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTests.map((test) => (
              <li key={test.id}>
                <Link href={`/test/${test.canonicalId}`} prefetch={false} className="flex h-full items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-400 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-indigo-500 dark:hover:bg-zinc-800">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-zinc-100">{test.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">{test.questionCount} soru</p>
                  </div>
                  <span aria-hidden="true" className="text-xl text-indigo-600 dark:text-indigo-300">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
