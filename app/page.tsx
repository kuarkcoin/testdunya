import HomePageClient from './HomePageClient';
import { getStaticPageMetadata } from '../lib/seo-pages';
import { SITE_NAME } from '../lib/seo';
import { getTestCatalog } from '../lib/test-data';

const homeMetadata = getStaticPageMetadata('/');
export const metadata = {
  ...homeMetadata,
  // A layout's title template applies to child segments, not its own page.
  title: { absolute: `${homeMetadata.title} | ${SITE_NAME}` },
};

export default async function HomePage() {
  const catalog = await getTestCatalog();
  const availableTests = catalog
    .filter((test) => test.id === test.canonicalId && /^(ielts-level-test|yks-sozel-deneme|kpss-testleri|kpss-sozel|tus-deneme|dus-deneme)-\d+$/.test(test.id))
    .sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }))
    .map(({ id, questionCount }) => ({ id, questionCount }));
  const paragraphs = catalog.filter((test) => test.id.startsWith('paragraf-test-'));
  const paragraphStats = {
    testCount: paragraphs.length,
    questionCount: paragraphs.reduce((total, test) => total + test.questionCount, 0),
  };
  return <HomePageClient availableTests={availableTests} paragraphStats={paragraphStats} />;
}

