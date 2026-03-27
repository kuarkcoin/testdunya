import { MetadataRoute } from 'next';
import { SITE_URL, getAllGrade5Subjects, getAllTestsForSubject } from '@/lib/grade5Seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const evergreenRoutes = ['/', '/5-sinif', '/iletisim', '/hakkimizda', '/gizlilik', '/cookie', '/mistakes'];

  const subjectRoutes = getAllGrade5Subjects().map((subject) => `/5-sinif/${subject.slug}`);

  const grade5TestRoutes = getAllGrade5Subjects().flatMap((subject) =>
    getAllTestsForSubject(subject.slug).map((test) => test.path),
  );

  const uniqueRoutes = Array.from(new Set([...evergreenRoutes, ...subjectRoutes, ...grade5TestRoutes]));

  return uniqueRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route.includes('/5-sinif/') ? 'weekly' : 'daily',
    priority: route === '/' ? 1 : route.startsWith('/5-sinif') ? 0.9 : 0.7,
  }));
}
