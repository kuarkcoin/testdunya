import { MetadataRoute } from 'next';

// Canlı domain adresi
const BASE_URL = 'https://testdunya.net';

export default function sitemap(): MetadataRoute.Sitemap {

  // 1. Statik Sayfalar (IELTS Speaking ve Writing Templates eklendi)
  const staticRoutes = [
    '',
    '/mistakes',
    '/iletisim',
    '/gizlilik',
    '/ielts/calculator',
    '/ielts/speaking',           // Speaking Simülatörü
    '/ielts/writing-templates',  // Writing Şablonları
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. IELTS Modül Sayfaları (Reading, Listening, Writing, Grammar, Vocab)
  // Bu testlerin ID'leri bellidir
  const ieltsTests = [
    'ielts-reading',
    'ielts-listening',
    'ielts-writing',
    'ielts-vocab',
    'ielts-grammar'
  ].map((id) => ({
    url: `${BASE_URL}/test/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Diğer Dinamik Test Sayfaları (YKS, KPSS, TUS, DUS)
  const examConfig = [
    { prefix: 'yks-sozel-deneme', count: 30 },
    { prefix: 'kpss-sozel', count: 21 },
    { prefix: 'tus-deneme', count: 35 },
    { prefix: 'dus-deneme', count: 10 },
  ];

  let otherTestRoutes: MetadataRoute.Sitemap = [];

  examConfig.forEach((exam) => {
    for (let i = 1; i <= exam.count; i++) {
      otherTestRoutes.push({
        url: `${BASE_URL}/test/${exam.prefix}-${i}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7, // IELTS kadar öncelikli olmasa da önemli
      });
    }
  });

  // Hepsini birleştir ve döndür
  return [...staticRoutes, ...ieltsTests, ...otherTestRoutes];
}
