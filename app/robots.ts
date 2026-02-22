import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/hmgs', '/test/hmgs-'],
      disallow: '/private/', // Eğer gizlemek istediğin klasör olursa buraya yazarsın
    },
    sitemap: 'https://testdunya.net/sitemap.xml',
  }
}
