import type { ReactNode } from 'react';
import { getStaticPageMetadata } from '../../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/games/logic-lock');

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
