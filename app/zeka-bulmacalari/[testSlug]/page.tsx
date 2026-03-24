import { notFound, redirect } from 'next/navigation';
import { getZekaBulmacaBySlug, ZEKA_BULMACA_TESTS } from '../../data/zekaBulmacalari';

export function generateStaticParams() {
  return ZEKA_BULMACA_TESTS.map((test) => ({ testSlug: test.slug }));
}

export default async function ZekaBulmacaTestPage({
  params,
}: {
  params: Promise<{ testSlug: string }>;
}) {
  const { testSlug } = await params;
  const test = getZekaBulmacaBySlug(testSlug);

  if (!test) {
    notFound();
  }

  redirect(`/test/${test.dataId}`);
}
