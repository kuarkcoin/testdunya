import type { ReactNode } from 'react';
import { getStaticPageMetadata } from '../../../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/oyunlar/6-yas/kayip-olani-bul');

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
