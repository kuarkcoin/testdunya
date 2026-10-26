import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/wordmatch');

export default function WordMatchLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-violet-950">{children}</div>;
}

