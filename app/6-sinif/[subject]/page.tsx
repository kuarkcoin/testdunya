import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGrade6Subject, getGrade6SubjectParams, getGrade6Tests } from '../../data/grade6/seo';
import { breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../../lib/seo';

type PageProps = { params: Promise<{ subject: string }> };
export const generateStaticParams = getGrade6SubjectParams;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const subject = getGrade6Subject((await params).subject);
  if (!subject) notFound();
  return createPageMetadata({
    title: `6. Sınıf ${subject.label} Testleri`,
    description: `6. sınıf ${subject.label} için dönemlere göre düzenlenen açıklamalı konu ve karma tekrar testleri. Soruları ücretsiz çöz, sonuçlarını incele ve çözüm notlarıyla tekrar çalış.`,
    path: `/6-sinif/${subject.id}`,
  });
}

export default async function Grade6SubjectPage({ params }: PageProps) {
  const subject = getGrade6Subject((await params).subject);
  if (!subject) notFound();
  const tests = getGrade6Tests(subject.id);
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: '6. Sınıf', path: '/6-sinif' },
    { name: subject.label, path: `/6-sinif/${subject.id}` },
  ]);

  return (
    <article className="space-y-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-xl md:p-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <nav aria-label="Sayfa yolu" className="flex flex-wrap gap-2 text-sm font-bold text-slate-600">
        <Link href="/" className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">Ana Sayfa</Link><span aria-hidden="true">›</span>
        <Link href="/6-sinif" className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">6. Sınıf</Link><span aria-hidden="true">›</span><span aria-current="page">{subject.label}</span>
      </nav>
      <header className={`space-y-4 rounded-[1.75rem] bg-gradient-to-br ${subject.gradient} p-6 text-white shadow-lg md:p-10`}>
        <span aria-hidden="true" className="text-5xl">{subject.icon}</span>
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">6. Sınıf {subject.label} Testleri</h1>
        <p className="font-semibold text-white/95">{subject.description}</p>
        <p className="font-bold">Konu ve karma tekrar • {tests.length} test</p>
      </header>
      <nav aria-label="Dönem seçimi" className="flex flex-wrap gap-3">
        {([1, 2] as const).map((term) => (
          <a key={term} href={`#term-${term}`} className="rounded-full border border-indigo-200 bg-white px-5 py-3 font-bold text-indigo-700 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">
            {term}. Dönem • {tests.filter((test) => test.term === term).length} test
          </a>
        ))}
      </nav>
      {([1, 2] as const).map((term) => {
        const termTests = tests.filter((test) => test.term === term);
        return (
          <section key={term} aria-labelledby={`term-${term}`} className="space-y-4">
            <h2 id={`term-${term}`} className="scroll-mt-6 text-2xl font-black">{term}. Dönem</h2>
            {term === 2 && subject.id === 'turkce' && (
              <p className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 font-semibold leading-relaxed text-slate-700">Bu bölümdeki testler, MEB Yayınları 6. sınıf Türkçe 2. dönem 2. ortak yazılı konu-soru dağılım tablosundaki okuma ve dil kullanımı becerilerine yönelik zor düzeyde alıştırmalardır. Resmî sınav değildir; açık uçlu yazma görevlerinin yerine geçmez ve ikinci dönemin tüm konularını kapsadığı iddiası taşımaz.</p>
            )}
            {term === 2 && subject.id === 'matematik' && (
              <p className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 font-semibold leading-relaxed text-slate-700">Bu bölümdeki testler, sağlanan 6. sınıf matematik 2. dönem 2. yazılı konu-soru dağılım tablosundaki cebirsel düşünme, örüntü, algoritma, uzunluk ve alan ölçme becerilerine yönelik zor düzeyde alıştırmalardır. Resmî sınav değildir; açık uçlu sınav biçiminin yerine geçmez ve ikinci dönemin tüm konularını kapsamaz.</p>
            )}
            {term === 2 && subject.id === 'ingilizce' && (
              <p className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 font-semibold leading-relaxed text-slate-700">Bu bölümdeki Test 1, sağlanan 6. sınıf İngilizce 2. dönem 1. ve 2. yazılı konu-soru dağılım tablolarındaki Occupations, Holidays, Bookworms, Saving the Planet ve Democracy ünitelerine yönelik zor düzeyde bir alıştırmadır. Resmî sınav değildir; açık uçlu sınav ve bağımsız yazma çalışmalarının yerine geçmez, ikinci dönemin tüm kazanımlarını ölçmez.</p>
            )}
            {term === 2 && subject.id === 'fen' && (
              <p className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 font-semibold leading-relaxed text-slate-700">Bu bölümdeki testler, sağlanan 6. sınıf fen bilimleri 2. dönem 1. ve 2. yazılı konu-soru dağılım tablolarındaki renkler, madde, elektrik ve biyoçeşitlilik konularına yönelik zor düzeyde alıştırmalardır. Her testte 7 şekilli ve 3 metin sorusu bulunur. Resmî sınav değildir; açık uçlu sınav biçiminin yerine geçmez ve ikinci dönemin tüm konularını kapsamaz.</p>
            )}
            {termTests.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 font-semibold text-slate-600">Bu dönem için henüz test eklenmedi. Listelenen diğer testlerle çalışabilirsin.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {termTests.map((test) => (
                  <Link key={test.slug} href={`/6-sinif/${subject.id}/${test.slug}`} className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:border-indigo-300 hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">
                    <h3 className="text-xl font-black">Test {test.testNo}</h3>
                    <p className="font-bold text-slate-800">{test.topic}</p>
                    <p className="font-semibold text-slate-600">{test.questions.length} soru • Açıklamalı cevaplar</p>
                    <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">Testi çöz →</span>
                  </Link>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </article>
  );
}

