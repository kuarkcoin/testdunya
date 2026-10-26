import TurkceGameEngine from '../../../components/turkce-oyunlari/TurkceGameEngine';
import { TURKCE_GAMES_CONFIG } from '../../../components/turkce-oyunlari/turkce-games-config';
import { serializeJsonLd } from '../../../lib/seo';
import { getGamePageData } from '../seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TURKCE_GAMES_CONFIG.filter((game) => game.slug !== 'sert-unsuz-yolu').map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props) {
  return getGamePageData((await params).slug).metadata;
}

export default async function TurkceGameDetailPage({ params }: Props) {
  const { game, schema, breadcrumbs } = getGamePageData((await params).slug);
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-indigo-100 px-3 py-6 md:px-6 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <div className="mx-auto mb-4 flex max-w-4xl flex-wrap items-center gap-2 text-xs font-bold md:text-sm">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">Kategori: {game.category}</span>
        <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-fuchsia-700">Zorluk: {game.difficulty}</span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Sınıf: {game.gradeLevels.join(', ')}</span>
      </div>
      <TurkceGameEngine unit={game} />
    </main>
  );
}
