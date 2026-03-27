import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import QuizClient from './QuizClient';
import { buildPageMetadata } from '@/lib/metadata';
import { getAllGrade5Subjects, getAllTestsForSubject } from '@/lib/grade5Seo';

interface PageProps {
  params: Promise<{ testId: string }>;
}

function resolveGrade5RedirectPath(testId: string): string | null {
  for (const subject of getAllGrade5Subjects()) {
    const match = testId.match(new RegExp(`^${subject.id}-term([12])-test(\\d+)$`));
    if (!match) continue;

    const term = Number(match[1]);
    const testNo = Number(match[2]);
    const target = getAllTestsForSubject(subject.slug).find((item) => item.term === term && item.testNo === testNo);
    if (target) return target.path;
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { testId } = await params;

  return buildPageMetadata({
    title: `${testId} testi – Online Çöz`,
    description: 'TestDünya test çözüm ekranı. Bu sayfada testi çevrim içi çözebilir ve sonuçlarınızı görebilirsiniz.',
    pathname: `/test/${testId}`,
  });
}

export default async function LegacyTestPage({ params }: PageProps) {
  const { testId } = await params;
  const redirectPath = resolveGrade5RedirectPath(testId);

  if (redirectPath) {
    redirect(redirectPath);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Online Test Çözüm Sayfası</h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Bu sayfa testi çözmeniz için etkileşimli alan sunar. 5. sınıf içerikleri için SEO odaklı yeni yapıya geçildi. İlgili ders merkezine aşağıdan ulaşabilirsiniz.
        </p>
        <p className="mt-2 text-sm">
          <Link href="/5-sinif" className="underline">
            5. sınıf test merkezi
          </Link>
        </p>
      </header>

      <QuizClient />
    </div>
  );
}
