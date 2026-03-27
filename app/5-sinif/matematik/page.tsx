import type { Metadata } from 'next';
import Grade5SubjectPage from '@/app/components/grade5/Grade5SubjectPage';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: '5. Sınıf Matematik Testleri – Konu Konu ve Yeni Nesil Sorular',
  description:
    '5. sınıf matematik testleri ile doğal sayılar, kesirler, geometri ve problem çözme konularını pekiştirin. Ücretsiz online ve görsel destekli sorular.',
  pathname: '/5-sinif/matematik',
  keywords: ['5. sınıf matematik testleri', '5. sınıf matematik yeni nesil sorular', '5. sınıf online test'],
});

const faq = [
  {
    question: 'Matematik testleri hangi becerileri ölçer?',
    answer: 'İşlem becerisi, akıl yürütme, görsel yorumlama, problem çözme ve matematiksel muhakeme becerilerini birlikte ölçer.',
  },
  {
    question: 'Yeni nesil sorularda başarı için ne yapmalıyım?',
    answer: 'Soru metnini iki kez okuyup verilenleri ve isteneni ayrı ayrı not etmek, işlem hatalarını ciddi biçimde azaltır.',
  },
  {
    question: 'Konu tekrarından sonra mı test çözülmeli?',
    answer: 'Evet, kısa bir konu özeti sonrası 10-20 soruluk test çözmek kalıcı öğrenme açısından en verimli yöntemlerden biridir.',
  },
];

export default function Grade5MatematikPage() {
  return (
    <Grade5SubjectPage
      subjectSlug="matematik"
      intro="Bu sayfada 5. sınıf matematik konularını adım adım pekiştirebileceğiniz testler yer alır. Görselli ve yeni nesil sorular sayesinde öğrenci yalnızca işlem sonucu değil, soruyu doğru yorumlama alışkanlığı da kazanır."
      faq={faq}
      studyTips={[
        'Soru kökünde isteneni altını çizerek belirgin hale getirin.',
        'Çözüm sonrası yanlış soruları konu başlığına göre ayırıp tekrar edin.',
        'Zaman tutarak çözüm yapmak, sınav anındaki hız ve dikkat dengesini güçlendirir.',
      ]}
    />
  );
}
