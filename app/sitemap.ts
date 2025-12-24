import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.net'
  // Statik tarih yerine build zamanını kullanmak iyidir
  const lastMod = new Date()

  // 1. Ana Statik Sayfalar
  const mainRoutes = [
    '',               // Ana Sayfa
    '/mistakes',      // Hata Analiz Merkezi
    '/iletisim',      // İletişim
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Sınav Merkezleri (Yeni Nesil & KaTeX İçerik Vurgusu)
  const examHubs = [
    '/5-sinif', // Matematik Test 9 ve Yeni Nesil Görseller Burada!
    '/8-sinif-lgs',
    '/yks',
    '/kpss',
    '/tus',
    '/dus',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // 3. Dil Modülleri (IELTS & EnglishMeter Entegrasyonu)
  const ieltsRoutes = [
    '/ielts/speaking',
    '/ielts/writing',
    '/ielts/listening',
    '/test/ielts-reading',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. AI Destekli Oyunlar (Engagement Artırıcı içerikler)
  const gameRoutes = [
    '/speedrun',
    '/kelime-avcisi', // Word Hunter
    '/number-hunter', // Matematik Oyunu
    '/flashcards',
    '/iq-test',
    '/wordle',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...mainRoutes, ...examHubs, ...ieltsRoutes, ...gameRoutes]
}
