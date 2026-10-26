import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/speedrun');

export default function SpeedRunLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-indigo-950">{children}</div>;
}

