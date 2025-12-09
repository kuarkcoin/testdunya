import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TestDünya - Online Sınav Merkezi',
    short_name: 'TestDünya',
    description: 'YKS, KPSS, TUS ve DUS Deneme Sınavları',
    start_url: '/',
    display: 'standalone', // Tarayıcı çubuğunu gizler, app gibi görünür
    background_color: '#f8fafc',
    theme_color: '#4f46e5', // İndigo rengi (Site ana rengi)
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
