import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/seo/Breadcrumbs';
import FaqSection from '@/app/components/seo/FaqSection';
import JsonLd from '@/app/components/seo/JsonLd';
import { buildPageMetadata } from '@/lib/metadata';
import { SITE_URL, getAllGrade5Subjects, getAllTestsForSubject, getGrade5GlobalStats } from '@/lib/grade5Seo';
import { buildBreadcrumbSchema, buildFAQSchema, buildItemListSchema } from '@/lib/schema';

export const metadata: Metadata = buildPageMetadata({
  title: '5. Sınıf Testleri (Görselli) – Ücretsiz Online Çöz',
  description:
    '5. sınıf İngilizce, Matematik, Fen Bilgisi ve Türkçe testlerini konu konu çözün. Görselli sorularla pratik yapın, kazanımlarınızı güçlendirin.',
  pathname: '/5-sinif',
  keywords: [
    '5. sınıf ingilizce testleri',
    '5. sınıf matematik testleri',
    '5. sınıf fen bilgisi testleri',
    '5. sınıf türkçe testleri',
    '5. sınıf görselli testler',
  ],
});

const faqs = [
  {
    question: '5. sınıf testleri hangi dersleri kapsıyor?',
    answer:
      'Bu merkezde 5. sınıf İngilizce, Matematik, Fen Bilgisi ve Türkçe dersleri için konu bazlı testler bulunmaktadır.',
  },
  {
    question: 'Görselli soruların avantajı nedir?',
    answer:
      'Görselli sorular öğrencinin yorumlama, dikkat ve bilgiyi bağlama taşıma becerisini geliştirir. Özellikle yeni nesil sorulara hazırlık sağlar.',
  },
  {
    question: 'Testleri online çözmek öğrenciyi nasıl destekler?',
    answer:
      'Online çözüm sayesinde öğrenci hızlı geri bildirim alır, doğru-yanlışlarını görür ve hangi konuda tekrar yapması gerektiğini netleştirir.',
  },
];

export default function Grade5HubPage() {
  const subjects = getAllGrade5Subjects();
  const stats = getGrade5GlobalStats();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', item: `${SITE_URL}/` },
    { name: '5. Sınıf Testleri', item: `${SITE_URL}/5-sinif` },
  ]);

  const subjectListSchema = buildItemListSchema(
    '5. sınıf ders sayfaları',
    subjects.map((subject) => ({
      name: `${subject.title} testleri`,
      url: `${SITE_URL}/5-sinif/${subject.slug}`,
    })),
  );

  const faqSchema = buildFAQSchema(faqs);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <JsonLd id="grade5-hub-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="grade5-hub-itemlist" data={subjectListSchema} />
      <JsonLd id="grade5-hub-faq" data={faqSchema} />

      <Breadcrumbs items={[{ label: 'Ana Sayfa', href: '/' }, { label: '5. Sınıf Testleri' }]} />

      <header>
        <h1 className="text-3xl md:text-5xl font-bold">5. Sınıf Testleri ve Görselli Soru Merkezi</h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Bu sayfa, 5. sınıf öğrencileri için hazırlanmış online testleri tek bir merkezde toplar. Veliler ve öğretmenler, konu tekrarına uygun testleri
          ders bazında seçebilir; öğrenciler ise görselli sorularla hem bilgiyi hem yorumlama becerisini geliştirebilir.
        </p>
      </header>

      <section className="mt-8 grid sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <strong className="text-2xl">{stats.totalTests}</strong>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Toplam test</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <strong className="text-2xl">{stats.totalQuestions}</strong>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Toplam soru</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <strong className="text-2xl">{stats.totalImageQuestions}</strong>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Görselli soru</p>
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-2 gap-4">
        {subjects.map((subject) => {
          const subjectTests = getAllTestsForSubject(subject.slug);

          return (
            <article key={subject.slug} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
              <h2 className="text-2xl font-bold">{subject.title}</h2>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">{subject.description}</p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {subjectTests.length} test • {subjectTests.reduce((sum, test) => sum + test.questionCount, 0)} soru
              </p>
              <Link href={`/5-sinif/${subject.slug}`} className="inline-block mt-4 font-semibold text-indigo-600 hover:underline">
                5. sınıf {subject.shortTitle} testlerine git
              </Link>
            </article>
          );
        })}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">5. sınıf öğrencileri için kısa çalışma planı</h2>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>Her gün bir dersten en az bir test çözerek düzenli tekrar yapın.</li>
          <li>Yanlış yaptığınız soruların açıklamalarını okuyup konu tekrarına dönün.</li>
          <li>Görselli sorularda görseli önce yorumlayıp sonra seçeneklere geçin.</li>
          <li>Dersler arasında dönüşümlü çalışma yaparak dikkat ve motivasyonu koruyun.</li>
        </ul>
      </section>

      <FaqSection items={faqs} />
    </div>
  );
}
