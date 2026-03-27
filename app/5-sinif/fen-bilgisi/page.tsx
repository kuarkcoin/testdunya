import type { Metadata } from 'next';
import Grade5SubjectPage from '@/app/components/grade5/Grade5SubjectPage';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: '5. Sınıf Fen Bilgisi Testleri – Ücretsiz Online Testler',
  description:
    '5. sınıf fen bilgisi testleri ile canlılar, kuvvet, Dünya ve evren konularını görselli sorularla pekiştirin. Ücretsiz online çözüm ve açıklamalı yapı.',
  pathname: '/5-sinif/fen-bilgisi',
  keywords: ['5. sınıf fen bilgisi testleri', '5. sınıf fen bilgisi online test', '5. sınıf görselli fen soruları'],
});

const faq = [
  {
    question: 'Fen bilgisi testlerinde hangi konular ağırlıklı?',
    answer: 'Canlılar dünyası, kuvvetin etkileri, Ay ve evreleri, Dünya-Güneş ilişkisi gibi temel 5. sınıf üniteleri ağırlıktadır.',
  },
  {
    question: 'Görsel ağırlıklı fen soruları neden önemli?',
    answer: 'Fen sorularında grafik, model ve deney görseli yorumlama becerisi sınav başarısını doğrudan etkiler.',
  },
  {
    question: 'Fen testlerini çözerken nasıl not tutulmalı?',
    answer: 'Yanlış yapılan soruların ünite adını yazarak küçük bir tekrar listesi oluşturmak öğrenmeyi hızlandırır.',
  },
];

export default function Grade5FenPage() {
  return (
    <Grade5SubjectPage
      subjectSlug="fen-bilgisi"
      intro="5. sınıf fen bilgisi testleri, öğrencinin gözlem yapma ve neden-sonuç ilişkisi kurma becerisini destekler. Bu sayfadaki görselli sorular, özellikle deney düzenekleri ve model okuma becerisini geliştirmek için tasarlanmıştır."
      faq={faq}
      studyTips={[
        'Soru görsellerinde geçen araçları ve kavramları önce isimlendirin.',
        'Deney sorularında bağımlı-bağımsız değişken ayrımına dikkat edin.',
        'Her testten sonra en çok zorlandığınız üniteyi kısa tekrarla güçlendirin.',
      ]}
    />
  );
}
