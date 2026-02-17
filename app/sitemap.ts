import { MetadataRoute } from 'next'

// Bu fonksiyonu gerçek bir veritabanından veri çekiyormuşsun gibi düşün.
// İleride sınavları veya blog yazılarını buradan dinamik olarak çekmelisin.
async function getDynamicExamRoutes() {
  // Örn: const exams = await db.exams.findMany()
  // Şimdilik yapısal örneği aşağıya ekliyorum.
  return [
    { id: 'matematik-test-9', path: '/5-sinif/matematik-test-9' },
    // Diğer dinamik testlerini buraya mapleyebilirsin.
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://testdunya.net'
  const lastMod = new Date()

  // 1. ANA STATİK YOLLAR (Maksimum Öncelik)
  const mainRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/mistakes', priority: 0.9, changeFrequency: 'daily' },
    { url: '/iletisim', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/hakkimizda', priority: 0.5, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: lastMod,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }))

  // 2. SINAV MERKEZLERİ (Dikey Otorite)
  const examHubs = [
    '/5-sinif',
    '/8-sinif-lgs',
    '/yks',
    '/kpss',
    '/tus',
    '/dus',
    '/yökdil', // Yeni nesil eklemeler
    '/ales',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // 3. İNGİLİZCE & IELTS MODÜLLERİ (EnglishMeter Otoritesi)
  const englishRoutes = [
    '/ielts/speaking',
    '/ielts/writing',
    '/ielts/listening',
    '/ielts/reading',
    '/grammar',
    '/vocabulary-builder',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. EĞİTİMCİ OYUNLAR VE ARAÇLAR (Kullanıcı Tutma - Engagement)
  const toolRoutes = [
    '/speedrun',
    '/kelime-avcisi',
    '/number-hunter',
    '/flashcards',
    '/iq-test',
    '/wordle',
    '/pomodoro', // Yeni eklenen bir araç örneği
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 5. DİNAMİK TEST SAYFALARI (Veritabanından gelenler)
  const dynamicTests = await getDynamicExamRoutes()
  const dynamicRoutes = dynamicTests.map((test) => ({
    url: `${baseUrl}${test.path}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...mainRoutes,
    ...examHubs,
    ...englishRoutes,
    ...toolRoutes,
    ...dynamicRoutes,
  ]
}
