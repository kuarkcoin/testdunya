import type { Metadata } from 'next';
import Grade5SubjectPage from '@/app/components/grade5/Grade5SubjectPage';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: '5. Sınıf İngilizce Testleri (Görselli) – Ücretsiz Online Çöz',
  description:
    '5. sınıf İngilizce testleri ile kelime bilgisi, günlük konuşma ve görsel yorumlama becerilerinizi geliştirin. Ücretsiz online test çözüm sayfası.',
  pathname: '/5-sinif/ingilizce',
  keywords: ['5. sınıf ingilizce testleri', '5. sınıf ingilizce görselli test', '5. sınıf online test çöz'],
});

const faq = [
  {
    question: 'İngilizce testlerinde hangi konular var?',
    answer: 'Kelime bilgisi, günlük diyaloglar, yön tarifleri, saatler, hobiler ve sınıf içi iletişim kalıpları ağırlıklıdır.',
  },
  {
    question: 'Görselli İngilizce sorular nasıl çalışılmalı?',
    answer: 'Önce görseli inceleyip ana fikri belirleyin, ardından soru cümlesindeki kritik kelimelere odaklanarak seçenekleri değerlendirin.',
  },
  {
    question: 'Bu testler okul yazılısına yardımcı olur mu?',
    answer: 'Evet, düzenli tekrar yapıldığında hem kelime dağarcığını güçlendirir hem de yazılılarda çıkan temel konu başlıklarını pekiştirir.',
  },
];

export default function Grade5IngilizcePage() {
  return (
    <Grade5SubjectPage
      subjectSlug="ingilizce"
      intro="5. sınıf İngilizce testleri sayfasında öğrenciler, görselli sorularla kelime öğrenmeyi daha kalıcı hale getirir. Sayfadaki testler okul müfredatıyla uyumlu biçimde ilerler ve öğrencinin okuduğunu-anladığını yabancı dilde yorumlama becerisini geliştirir."
      faq={faq}
      studyTips={[
        'Her testten sonra bilmediğiniz 5 kelimeyi not edip cümle içinde kullanın.',
        'Soru köklerinde geçen zaman ifadelerine (every day, now, at 8 o’clock) dikkat edin.',
        'Görselli sorularda önce görseldeki nesneleri İngilizce isimlendirmeyi deneyin.',
      ]}
    />
  );
}
