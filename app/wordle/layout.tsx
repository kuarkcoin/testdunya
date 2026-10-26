import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/wordle');

export default function WordleLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-900">{children}</div>;
}

