import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 1. Genel Arama Motorları (Google, Yandex, Bing vb.)
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/', 
          '/api/',   
        ],
      },
      {
        // 2. Google Görsel Botu (Görselli soruların için SEO canavarı)
        userAgent: 'Googlebot-Image',
        allow: '/images/', // Görsellerinin tam bu dizinde olduğundan emin ol
      },
      {
        // 3. Yapay Zeka ve Kazıyıcı Botlar (Emeğini koruma kalkanı)
        userAgent: [
          'GPTBot',          // OpenAI (ChatGPT)
          'ChatGPT-User',    // OpenAI Pluginleri
          'ClaudeBot',       // Anthropic (Claude)
          'Claude-Web',      // Anthropic Web
          'Google-Extended', // Google Gemini Eğitim Botu
          'CCBot',           // Common Crawl (Çoğu AI modelinin veri kaynağı)
          'anthropic-ai',    // Eski/Alternatif Anthropic botu
        ],
        disallow: ['/'], 
      }
    ],
    sitemap: 'https://testdunya.net/sitemap.xml',
  }
}
