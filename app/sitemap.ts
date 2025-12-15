import { MetadataRoute } from 'next';

// Canlı domain adresi
const BASE_URL = 'https://testdunya.net';

export default function sitemap(): MetadataRoute.Sitemap {

  // 1. Statik Sayfalar
  const staticRoutes = [
    '',
    '/mistakes',
    '/iletisim',
    '/gizlilik',
    '/ielts/calculator',         // Hesaplama Aracı
    '/ielts/speaking',           // Speaking Simülatörü
    '/ielts/listening',          // YENİ: Listening Menü Sayfası
    '/ielts/writing-templates',  // Writing Şablonları
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. IELTS Modül Sayfaları (Test Çözme Ekranları)
  const ieltsTests = [
    // Reading
    'ielts-reading',
    // Listening Serisi (YENİLER EKLENDİ)
    'ielts-listening',   // Test 1
    'ielts-listening-2', // Test 2 (Gym)
    'ielts-listening-3', // Test 3 (Museum)
    'ielts-listening-4', // Test 4 (Zoo)
    'ielts-listening-5',
    'ielts-listening-7',
    // Diğerleri
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
        priority: 0.7, 
      });
    }
  });

  // Hepsini birleştir ve döndür
  return [...staticRoutes, ...ieltsTests, ...otherTestRoutes];
}
