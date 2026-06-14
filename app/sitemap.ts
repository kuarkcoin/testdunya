import { MetadataRoute } from 'next';
import { getGrade5Tests, grade5Subjects } from './data/grade5/seo';
import type { ChessTestsData } from '../lib/chess/types';
import chessTestsData from '../public/data/satranc-testleri.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.net';
  const lastMod = new Date();

  const mainRoutes = ['', '/mistakes', '/iletisim'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const grade5Routes = [
    {
      url: `${baseUrl}/5-sinif`,
      lastModified: lastMod,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    ...grade5Subjects.flatMap((subject) => [
      {
        url: `${baseUrl}/5-sinif/${subject.id}`,
        lastModified: lastMod,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      },
      ...getGrade5Tests(subject.id).map((test) => ({
        url: `${baseUrl}/5-sinif/${subject.id}/${test.slug}`,
        lastModified: lastMod,
        changeFrequency: 'weekly' as const,
        priority: 0.75,
      })),
    ]),
  ];

  const examHubs = ['/8-sinif-lgs', '/lgs', '/lgs/sozel', '/lgs/sayisal', '/yks', '/kpss', '/tus', '/dus', '/hmgs'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const otherRoutes = ['/ielts/speaking', '/speedrun', '/kelime-avcisi', '/edirne-masallari', '/test/lgs-sozel-test-1', '/test/lgs-sozel-test-2', '/test/lgs-sozel-test-3', '/test/lgs-sozel-test-4', '/test/lgs-sayisal-test-1', '/test/lgs-sayisal-test-2', '/test/lgs-sayisal-test-3', '/test/lgs-sayisal-test-4'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const chessData = chessTestsData as ChessTestsData;
  const chessRoutes = [
    {
      url: `${baseUrl}/chess-tests`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    ...(chessData.tests ?? []).map((test) => ({
      url: `${baseUrl}/chess-tests/${test.id}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    })),
  ];

  return [...mainRoutes, ...grade5Routes, ...examHubs, ...otherRoutes, ...chessRoutes];
}
