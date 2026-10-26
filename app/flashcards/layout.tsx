import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/flashcards');

export default function FlashcardsLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-50">{children}</div>;
}

