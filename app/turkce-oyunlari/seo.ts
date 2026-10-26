import { notFound } from 'next/navigation';
import { getTurkceGameBySlug } from '../../components/turkce-oyunlari/turkce-games-config';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata } from '../../lib/seo';

export function getGamePageData(slug: string) {
  const game = getTurkceGameBySlug(slug);
  if (!game) notFound();
  const path = `/turkce-oyunlari/${game.slug}`;
  const description = `${game.description} ${game.gradeLevels.join(' ve ')}. sınıf öğrencileri için ${game.category.toLocaleLowerCase('tr-TR')} oyunu. ${game.instruction}`;
  return {
    game,
    metadata: createPageMetadata({ title: `${game.title} — Türkçe Oyunu`, description, path }),
    schema: {
      '@context': 'https://schema.org', '@type': 'LearningResource',
      name: game.title, description: game.description, inLanguage: 'tr',
      learningResourceType: 'Eğitici oyun', educationalLevel: game.gradeLevels.map((grade) => `${grade}. sınıf`),
      isAccessibleForFree: true, url: absoluteUrl(path),
    },
    breadcrumbs: breadcrumbJsonLd([
      { name: 'Ana Sayfa', path: '/' },
      { name: 'Türkçe Oyunları', path: '/turkce-oyunlari' },
      { name: game.title, path },
    ]),
  };
}
