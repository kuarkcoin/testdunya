import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: '5. Sınıf Testleri Merkezi – Görselli ve Ücretsiz Online Çözüm',
  description:
    '5. sınıf İngilizce, Matematik, Fen Bilgisi ve Türkçe testlerine tek merkezden ulaşın. Görselli sorular, konu bazlı testler ve ücretsiz online çözüm imkanı.',
  pathname: '/5-sinif',
  keywords: ['5. sınıf testleri', '5. sınıf online test çöz', '5. sınıf görselli testler'],
});

export default function Grade5Layout({ children }: { children: React.ReactNode }) {
  return <section className="min-h-screen">{children}</section>;
}
