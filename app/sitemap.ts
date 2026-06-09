import { MetadataRoute } from 'next';
import { getGrade5Tests, grade5Subjects } from './data/grade5/seo';

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

  const examHubs = ['/8-sinif-lgs', '/yks', '/kpss', '/tus', '/dus', '/hmgs'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const otherRoutes = ['/ielts/speaking', '/speedrun', '/kelime-avcisi', '/edirne-masallari'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...mainRoutes, ...grade5Routes, ...examHubs, ...otherRoutes];
}
