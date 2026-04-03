export interface SincityParagrafQuestion {
  id: string;
  subject: 'turkce';
  term: number;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

const PARAGRAPH_THEMES = [
  {
    title: 'Okuma Alışkanlığı',
    passage:
      'Kitap okuma alışkanlığı küçük yaşlarda kazanıldığında, öğrenci yalnızca kelime dağarcığını geliştirmez; aynı zamanda olaylar arasında neden-sonuç ilişkisi kurmayı da öğrenir. Düzenli okuyan öğrenciler, metinlerdeki ana düşünceyi daha hızlı bulur ve sınavlarda zaman yönetiminde avantaj sağlar.',
    questionStem: 'Bu parçadan çıkarılabilecek en uygun yargı aşağıdakilerden hangisidir?',
    options: [
      'Erken yaşta okuma, yalnızca yazım kurallarını öğretir.',
      'Düzenli okuma, anlama ve yorumlama becerisini güçlendirir.',
      'Sınav başarısı sadece çok soru çözmeye bağlıdır.',
      'Ana düşünceyi bulmak için metni ezberlemek gerekir.',
    ],
    correct: 1,
    explanation:
      'Parçada düzenli okumanın ana düşünceyi bulma ve neden-sonuç kurma becerisine katkısı vurgulanmaktadır.',
  },
  {
    title: 'Bilimsel Merak',
    passage:
      'Bilim insanları, bir problemi çözerken önce gözlem yapar, ardından sorular üretir. Doğru sorular kurmak, doğru cevaba ulaşmanın yarısıdır. Merak eden öğrenci denemekten çekinmez; hata yaptığında ise bunu yeni bir öğrenme fırsatı olarak görür.',
    questionStem: 'Bu parçanın ana düşüncesi aşağıdakilerden hangisidir?',
    options: [
      'Hata yapan öğrenciler bilim öğrenemez.',
      'Bilimsel süreçte merak ve doğru soru sorma önemlidir.',
      'Gözlem yapmak, deneyi gereksiz kılar.',
      'Bilimsel çalışmalar yalnızca laboratuvarda yapılır.',
    ],
    correct: 1,
    explanation:
      'Parçada bilimsel süreçte gözlem, soru üretme ve merakın önemi merkeze alınmıştır.',
  },
  {
    title: 'Zaman Planlama',
    passage:
      'Günlük plan yapan öğrenciler, ders ve dinlenme saatlerini dengelediğinde daha verimli çalışır. Plansız çalışanlar ise çoğu zaman hangi dersten başlayacağını bilemediği için vakit kaybeder. Kısa, ulaşılabilir hedefler belirlemek motivasyonu artırır.',
    questionStem: 'Parçaya göre verimli çalışma için aşağıdakilerden hangisi gereklidir?',
    options: [
      'Sadece zor derslere odaklanmak',
      'Ders programını tamamen rastgele belirlemek',
      'Planlı çalışıp küçük hedefler koymak',
      'Dinlenme aralarını kaldırmak',
    ],
    correct: 2,
    explanation:
      'Metin planlı çalışma ve küçük hedeflerin motivasyonu artırdığını belirtir.',
  },
  {
    title: 'Doğa Sevgisi',
    passage:
      'Bir okulun öğrencileri her ay fidan dikme etkinliği düzenliyor. Başta yalnızca çevre kulübü katılırken zamanla tüm sınıflar bu çalışmaya dahil oldu. Öğrenciler, ağaçların büyümesini gözlemledikçe doğayı korumanın tek seferlik değil, sürekli bir sorumluluk olduğunu fark etti.',
    questionStem: 'Bu parçada asıl anlatılmak istenen nedir?',
    options: [
      'Fidan dikmek sadece çevre kulübünün görevidir.',
      'Doğayı koruma bilinci, süreklilik isteyen bir sorumluluktur.',
      'Etkinlikler yalnızca ders saatinde yapılmalıdır.',
      'Ağaçların büyümesi çok kısa sürede tamamlanır.',
    ],
    correct: 1,
    explanation:
      'Parçada doğa sevgisinin süreklilik gerektiren bir sorumluluk olduğuna vurgu yapılmıştır.',
  },
  {
    title: 'Takım Çalışması',
    passage:
      'Bir proje yarışmasında öğrenciler görev paylaşımı yaparak çalıştı. Kimi sunumu hazırladı, kimi deney düzeneklerini kurdu, kimi de sonuçları raporladı. Herkes kendi sorumluluğunu zamanında yerine getirdiği için ekip kısa sürede başarılı bir proje ortaya koydu.',
    questionStem: 'Bu parçadan çıkarılabilecek en doğru sonuç hangisidir?',
    options: [
      'Başarılı projeler tek kişinin çalışmasıyla oluşur.',
      'Görev paylaşımı, takımın verimini artırır.',
      'Projelerde rapor hazırlamak gereksizdir.',
      'Sunum yapmak projenin sonucunu etkilemez.',
    ],
    correct: 1,
    explanation:
      'Metin, görev paylaşımı sayesinde ekip veriminin yükseldiğini göstermektedir.',
  },
] as const;

export const sincityParagrafQuestions: SincityParagrafQuestion[] = Array.from({ length: 1000 }, (_, idx) => {
  const theme = PARAGRAPH_THEMES[idx % PARAGRAPH_THEMES.length];
  const qNo = idx + 1;

  return {
    id: `sincity-paragraf-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
