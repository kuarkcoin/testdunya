import HomePageClient from './HomePageClient';
import { getStaticPageMetadata } from '../lib/seo-pages';

export const metadata = getStaticPageMetadata('/');

export default function HomePage() {
  return <HomePageClient />;
}
