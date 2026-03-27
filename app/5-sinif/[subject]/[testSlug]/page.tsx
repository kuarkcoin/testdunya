import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Grade5QuizClient from '@/app/components/grade5/Grade5QuizClient';
import Breadcrumbs from '@/app/components/seo/Breadcrumbs';
import JsonLd from '@/app/components/seo/JsonLd';
import { buildPageMetadata } from '@/lib/metadata';
import {
  SITE_URL,
  getAllGrade5Subjects,
  getAllTestsForSubject,
  getGrade5TestByRoute,
  findSimilarGrade5Tests,
  getGrade5CanonicalUrl,
} from '@/lib/grade5Seo';
import { buildBreadcrumbSchema, buildItemListSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ subject: string; testSlug: string }>;
}

export async function generateStaticParams() {
  return getAllGrade5Subjects().flatMap((subject) =>
    getAllTestsForSubject(subject.slug).map((test) => ({
      subject: subject.slug,
      testSlug: test.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject, testSlug } = await params;
  const test = getGrade5TestByRoute(subject, testSlug);
  if (!test) {
    return buildPageMetadata({
      title: '5. Sınıf Testi Bulunamadı',
      description: 'İstenen test sayfası bulunamadı.',
      pathname: '/5-sinif',
      noindex: true,
    });
  }

  return buildPageMetadata({
    title: `${test.title} – Online Çözüm`,
    description: `${test.title} sayfasında ${test.questionCount} soru ve ${test.imageQuestionCount} görselli soru bulunur. Yaklaşık ${test.estimatedDurationMinutes} dakikada çözebilirsiniz.`,
    pathname: test.path,
    keywords: [`5. sınıf ${test.subjectTitle.toLowerCase()} testi`, '5. sınıf online test çöz', test.title.toLowerCase()],
  });
}

export default async function Grade5TestPage({ params }: PageProps) {
  const { subject, testSlug } = await params;
  const test = getGrade5TestByRoute(subject, testSlug);

  if (!test) {
    notFound();
  }

  const similarTests = findSimilarGrade5Tests(test, 4);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', item: `${SITE_URL}/` },
    { name: '5. Sınıf', item: `${SITE_URL}/5-sinif` },
    { name: `${test.subjectTitle} Testleri`, item: `${SITE_URL}/5-sinif/${test.subjectSlug}` },
    { name: test.title, item: getGrade5CanonicalUrl(test.path) },
  ]);

  const similarListSchema = buildItemListSchema(
    `${test.subjectTitle} benzer testler`,
    similarTests.map((item) => ({ name: item.title, url: `${SITE_URL}${item.path}` })),
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <JsonLd id={`${test.id}-breadcrumb`} data={breadcrumbSchema} />
      <JsonLd id={`${test.id}-similar-list`} data={similarListSchema} />

      <Breadcrumbs
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: '5. Sınıf', href: '/5-sinif' },
          { label: `${test.subjectTitle} Testleri`, href: `/5-sinif/${test.subjectSlug}` },
          { label: test.shortTitle },
        ]}
      />

      <header>
        <h1 className="text-3xl md:text-4xl font-bold">{test.title}</h1>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          Bu test 5. sınıf düzeyine uygundur ve {test.subjectTitle} dersinde temel kazanımları pekiştirmeye yardımcı olur. Testte toplam {test.questionCount}{' '}
          soru ve {test.imageQuestionCount} görselli soru bulunur.
        </p>
      </header>

      <section className="mt-6 grid sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3">
          <p className="text-sm text-zinc-500">Sınıf Düzeyi</p>
          <p className="font-semibold">5. Sınıf</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3">
          <p className="text-sm text-zinc-500">Ders</p>
          <p className="font-semibold">{test.subjectTitle}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3">
          <p className="text-sm text-zinc-500">Soru Sayısı</p>
          <p className="font-semibold">{test.questionCount}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3">
          <p className="text-sm text-zinc-500">Tahmini Süre</p>
          <p className="font-semibold">{test.estimatedDurationMinutes} dakika</p>
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <h2 className="text-xl font-bold">Bu testte neler var?</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Testte konu odaklı sorularla birlikte görselli yorumlama gerektiren maddeler yer alır. Öğrenci hem bilgiyi hem soru çözüm stratejisini birlikte geliştirir.
          </p>
        </article>
        <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <h2 className="text-xl font-bold">Bu test kimler için uygun?</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            5. sınıf öğrencileri, yazılılara hazırlananlar ve konu tekrarını düzenli yapmak isteyen veliler için uygundur.
          </p>
        </article>
        <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <h2 className="text-xl font-bold">Hangi kazanımları destekler?</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Müfredat kazanımlarını soru pratiğiyle pekiştirir, dikkatli okuma ve doğru seçenek eleme becerisini güçlendirir.
          </p>
        </article>
      </section>

      <Grade5QuizClient title={test.title} questions={test.questions} />

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Benzer testler</h2>
        <ul className="mt-3 grid md:grid-cols-2 gap-3">
          {similarTests.map((similar) => (
            <li key={similar.id} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <Link href={similar.path} className="font-semibold hover:underline">
                benzer 5. sınıf {test.subjectTitle} testleri: {similar.shortTitle}
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                {similar.questionCount} soru • {similar.imageQuestionCount} görselli soru
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
        Ders sayfasına dönmek için <Link href={`/5-sinif/${test.subjectSlug}`} className="underline">5. sınıf {test.subjectTitle} testleri</Link> bağlantısını kullanabilirsiniz.
      </p>
    </div>
  );
}
