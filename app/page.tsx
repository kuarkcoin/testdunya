import HomePageClient from './HomePageClient';
import { getStaticPageMetadata } from '../lib/seo-pages';
import { SITE_NAME } from '../lib/seo';

const homeMetadata = getStaticPageMetadata('/');
export const metadata = {
  ...homeMetadata,
  // A layout's title template applies to child segments, not its own page.
  title: { absolute: `${homeMetadata.title} | ${SITE_NAME}` },
};

export default function HomePage() {
  return <HomePageClient />;
}
