import type { Metadata } from 'next';
import Grade5SubjectPage from '@/app/components/grade5/Grade5SubjectPage';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: '5. Sınıf Türkçe Testleri – Kazanım Odaklı Sorular',
  description:
    '5. sınıf Türkçe testleri ile sözcükte anlam, paragraf, dil bilgisi ve metin yorumlama becerilerini geliştirin. Ücretsiz online test çözüm sayfası.',
  pathname: '/5-sinif/turkce',
  keywords: ['5. sınıf türkçe testleri', '5. sınıf türkçe konu testleri', '5. sınıf paragraf soruları'],
});

const faq = [
  {
    question: 'Türkçe testleri hangi kazanımları destekler?',
    answer: 'Okuduğunu anlama, anlam ilişkileri, dil bilgisi kuralları ve paragraf yorumlama kazanımlarını destekler.',
  },
  {
    question: 'Paragraf sorularında hız nasıl artırılır?',
    answer: 'Önce soru kökünü okuyup ne aradığınızı belirlemek, paragrafı daha odaklı okumanıza yardımcı olur.',
  },
  {
    question: 'Türkçe testlerini günlük rutine nasıl ekleyebilirim?',
    answer: 'Her gün 15-20 soruluk kısa setlerle çalışmak, özellikle kelime ve paragraf sorularında istikrarlı gelişim sağlar.',
  },
];

export default function Grade5TurkcePage() {
  return (
    <Grade5SubjectPage
      subjectSlug="turkce"
      intro="5. sınıf Türkçe testleri sayfası, öğrencinin metin anlama ve dil becerilerini düzenli olarak geliştirmesi için hazırlanmıştır. Konu bazlı testler sayesinde eksik kazanımlar kolayca tespit edilebilir ve hedefli tekrar yapılabilir."
      faq={faq}
      studyTips={[
        'Paragraf sorularında önce anahtar kelimeleri işaretleyin.',
        'Yanlış sorularda hangi çeldiriciye takıldığınızı not edin.',
        'Kısa ama düzenli test çözümü, yazılı ve bursluluk sınavlarında önemli avantaj sağlar.',
      ]}
    />
  );
}
