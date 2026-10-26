import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { getZekaBulmacaBySlug, ZEKA_BULMACA_TESTS } from '../../data/zekaBulmacalari';
import { getTestData } from '../../../lib/test-data';
import { createPageMetadata } from '../../../lib/seo';

type PageProps = { params: Promise<{ testSlug: string }> };

export function generateStaticParams() {
  return ZEKA_BULMACA_TESTS.map((test) => ({ testSlug: test.slug }));
}

async function getRedirectTarget(testSlug: string) {
  const alias = getZekaBulmacaBySlug(testSlug);
  const test = alias ? await getTestData(alias.dataId) : null;
  if (!test) notFound();
  return test;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const test = await getRedirectTarget((await params).testSlug);
  return createPageMetadata({ title: test.title, description: test.description, path: `/test/${test.id}` });
}

export default async function ZekaBulmacaTestPage({ params }: PageProps) {
  const test = await getRedirectTarget((await params).testSlug);
  permanentRedirect(`/test/${test.id}`);
}
