import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.net'
  const currentDate = new Date()

  // 1. Ana Statik Sayfalar
  const mainRoutes = [
    '',               // Ana Sayfa
    '/mistakes',      // Hata Analiz Merkezi
    '/iletisim',      // İletişim
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Sınav Merkezleri (Öncelik 0.9'a çıkarıldı - Yeni Nesil İçerik Vurgusu)
  const examHubs = [
    '/5-sinif', // Burada senin yeni nesil grafikli soruların var!
    '/8-sinif-lgs',
    '/yks',
    '/kpss',
    '/tus',
    '/dus',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate, // Her build'de güncellenir
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // 3. IELTS ve Dil Modülleri
  const ieltsRoutes = [
    '/ielts/speaking',
    '/ielts/writing',
    '/ielts/listening',
    '/test/ielts-reading',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. Yeni Nesil Oyunlar (Number Hunter ve Kelime Avcısı dahil)
  const gameRoutes = [
    '/speedrun',
    '/kelime-avcisi', // Word Hunter
    '/number-hunter', // Yeni eklediğin matematik oyunu
    '/flashcards',
    '/iq-test',
    '/wordle',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...mainRoutes, ...examHubs, ...ieltsRoutes, ...gameRoutes]
}
