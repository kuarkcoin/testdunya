import Link from 'next/link';
import Breadcrumbs from '@/app/components/seo/Breadcrumbs';
import FaqSection from '@/app/components/seo/FaqSection';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  SITE_URL,
  type Grade5SubjectSlug,
  getAllGrade5Subjects,
  getGroupedTestsByTerm,
  getGrade5SubjectBySlug,
  getGrade5SubjectStats,
  getOtherSubjectLinks,
} from '@/lib/grade5Seo';
import { buildBreadcrumbSchema, buildFAQSchema, buildItemListSchema } from '@/lib/schema';

interface Grade5SubjectPageProps {
  subjectSlug: Grade5SubjectSlug;
  intro: string;
  faq: { question: string; answer: string }[];
  studyTips: string[];
}

export default function Grade5SubjectPage({ subjectSlug, intro, faq, studyTips }: Grade5SubjectPageProps) {
  const subject = getGrade5SubjectBySlug(subjectSlug);
  if (!subject) return null;

  const groupedTests = getGroupedTestsByTerm(subjectSlug);
  const stats = getGrade5SubjectStats(subjectSlug);
  const otherSubjects = getOtherSubjectLinks(subjectSlug);

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: '5. Sınıf', href: '/5-sinif' },
    { label: subject.title },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', item: `${SITE_URL}/` },
    { name: '5. Sınıf', item: `${SITE_URL}/5-sinif` },
    { name: subject.title, item: `${SITE_URL}/5-sinif/${subject.slug}` },
  ]);

  const listSchema = buildItemListSchema(
    `${subject.title} test listesi`,
    [...groupedTests[1], ...groupedTests[2]].map((test) => ({
      name: test.title,
      url: `${SITE_URL}${test.path}`,
    })),
  );

  const faqSchema = buildFAQSchema(faq);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <JsonLd id={`${subject.slug}-breadcrumbs`} data={breadcrumbSchema} />
      <JsonLd id={`${subject.slug}-item-list`} data={listSchema} />
      <JsonLd id={`${subject.slug}-faq`} data={faqSchema} />

      <Breadcrumbs items={breadcrumbItems} />

      <header>
        <h1 className="text-3xl md:text-4xl font-bold">{subject.title} Testleri</h1>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">{intro}</p>
      </header>

      <section className="mt-6 grid sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <strong>{stats.totalTests}</strong>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Toplam test</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <strong>{stats.totalQuestions}</strong>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Toplam soru</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <strong>{stats.totalImageQuestions}</strong>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Görselli soru</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Bu sayfada neler var?</h2>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">{subject.description}</p>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
          {subject.focusTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      {[1, 2].map((term) => (
        <section key={term} className="mt-8">
          <h2 className="text-2xl font-bold">{term}. Dönem Testleri</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3">
            {groupedTests[term as 1 | 2].map((test) => (
              <li key={test.id} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                <Link href={test.path} className="font-semibold hover:underline">
                  {test.title}
                </Link>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                  {test.questionCount} soru • {test.imageQuestionCount} görselli soru • Yaklaşık {test.estimatedDurationMinutes} dakika
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-8">
        <h2 className="text-2xl font-bold">5. sınıf öğrencileri için kısa çalışma önerileri</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
          {studyTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Diğer 5. sınıf dersleri</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {otherSubjects.map((item) => (
            <Link key={item.slug} href={`/5-sinif/${item.slug}`} className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900">
              5. sınıf {item.shortTitle} testleri
            </Link>
          ))}
        </div>
      </section>

      <FaqSection items={faq} />

      <section className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Tüm 5. sınıf derslerini görmek için <Link href="/5-sinif" className="underline">5. sınıf test merkezi</Link> sayfasını ziyaret edebilirsiniz.
        </p>
      </section>
    </div>
  );
}
