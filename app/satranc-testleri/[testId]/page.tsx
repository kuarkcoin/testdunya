import type { Metadata } from 'next';
import type { ChessTestsData } from '../../../lib/chess/types';
import chessTestsData from '../../../public/data/satranc-testleri.json';
import ChessTestClient from './ChessTestClient';

const data = chessTestsData as ChessTestsData;

export function generateStaticParams() {
  return (data.tests ?? []).map((test) => ({ testId: test.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ testId: string }>;
}): Promise<Metadata> {
  const { testId } = await params;
  const test = (data.tests ?? []).find((item) => item.id === testId);

  return {
    title: test ? `${test.title} | En İyi Hamleyi Bul | TestDünya` : 'Satranç Testi Bulunamadı | TestDünya',
    description: test?.description ?? 'İstenen satranç testi bulunamadı.',
    alternates: {
      canonical: test ? `/satranc-testleri/${test.id}` : '/satranc-testleri',
    },
  };
}

export default async function SatrancTestPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  const test = (data.tests ?? []).find((item) => item.id === testId);

  return <ChessTestClient test={test} />;
}
