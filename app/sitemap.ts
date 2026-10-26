import type { MetadataRoute } from 'next';
import { getGrade5Tests, grade5Subjects } from './data/grade5/seo';
import { getGrade6Tests, grade6Subjects } from './data/grade6/seo';
import type { ChessTestsData } from '../lib/chess/types';
import chessTestsData from '../public/data/satranc-testleri.json';
import { TURKCE_GAMES_CONFIG } from '../components/turkce-oyunlari/turkce-games-config';
import { STATIC_SEO_PAGES } from '../lib/seo-pages';
import { absoluteUrl } from '../lib/seo';
import { getTestCatalog } from '../lib/test-data';
import { getGorevdeSubjects } from './gorevde-yukselme/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [catalog, gorevdeSubjects] = await Promise.all([getTestCatalog(), getGorevdeSubjects()]);
  const paths = new Set<string>(STATIC_SEO_PAGES.filter((page) => page.index !== false).map((page) => page.path));

  for (const subject of grade5Subjects) {
    paths.add(`/5-sinif/${subject.id}`);
    for (const test of getGrade5Tests(subject.id)) paths.add(`/5-sinif/${subject.id}/${test.slug}`);
  }
  for (const subject of grade6Subjects) {
    paths.add(`/6-sinif/${subject.id}`);
    for (const test of getGrade6Tests(subject.id)) paths.add(`/6-sinif/${subject.id}/${test.slug}`);
  }
  for (const test of (chessTestsData as ChessTestsData).tests) {
    if (test.questions?.length) paths.add(`/chess-tests/${test.id}`);
  }
  for (const game of TURKCE_GAMES_CONFIG) paths.add(`/turkce-oyunlari/${game.slug}`);
  for (const test of catalog) {
    if (test.id === test.canonicalId) paths.add(`/test/${test.id}`);
  }
  for (const subject of gorevdeSubjects) {
    if (subject.tests.length) paths.add(`/gorevde-yukselme/${subject.slug}`);
  }

  // Publish canonical content routes only; a rebuild is not a content modification.
  return [...paths].sort().map((path) => ({ url: absoluteUrl(path) }));
}
