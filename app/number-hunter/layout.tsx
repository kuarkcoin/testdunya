import type { ReactNode } from 'react';
import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/number-hunter');

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
