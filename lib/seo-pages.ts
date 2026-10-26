import { createPageMetadata } from './seo';
import { PARAGRAF_TESTS } from '../app/data/paragrafTests';

type StaticSeoPage = {
  path: string;
  title: string;
  description: string;
  index?: boolean;
  locale?: 'tr_TR' | 'en_US';
};

// Only routes with a real static page belong here. Dynamic content is listed
// separately in the sitemap using its content registry.
export const STATIC_SEO_PAGES: StaticSeoPage[] = [
  {
    path: '/',
    title: 'Online Test Çöz ve Eğitici Oyunlar',
    description: '5. ve 6. sınıf testleri, LGS denemeleri, paragraf soruları ve eğitici oyunlarla çalışın. Ücretsiz testleri çözün, cevapları ve açıklamaları inceleyin.',
  },
  {
    path: '/5-sinif',
    title: '5. Sınıf Testleri',
    description: '5. sınıf Matematik, Türkçe, Fen Bilimleri ve İngilizce testlerini çözün. Dersinizi seçin, soruları yanıtlayın ve açıklamalı cevaplarla tekrar yapın.',
  },
  {
    path: '/6-sinif',
    title: '6. Sınıf Testleri',
    description: '6. sınıf Matematik, Türkçe, Fen Bilimleri ve İngilizce testleriyle çalışın. Soruları çözün, doğru cevapları ve çözüm notlarını inceleyin.',
  },
  {
    path: '/lgs',
    title: 'LGS Deneme Sınavları',
    description: 'LGS için sözel ve sayısal deneme sınavları çözün. Türkçe, Matematik, Fen Bilimleri ve diğer derslerdeki sorularla sınav pratiği yapın.',
  },
  {
    path: '/lgs/sozel',
    title: 'LGS Sözel Bölüm Denemeleri',
    description: 'LGS sözel denemelerini ve her testin soru sayısını inceleyin. Türkçe, T.C. İnkılap Tarihi, Din Kültürü ve İngilizce sorularıyla pratik yapın.',
  },
  {
    path: '/lgs/sayisal',
    title: 'LGS Sayısal Bölüm Denemeleri',
    description: 'LGS sayısal denemelerini ve her testin soru sayısını inceleyin. Matematik ve Fen Bilimleri sorularıyla problem çözme pratiği yapın.',
  },
  {
    path: '/paragraf',
    title: '5. Sınıf Paragraf Testleri',
    description: `5. sınıf düzeyine uygun ${PARAGRAF_TESTS.length} paragraf testinden birini seçin. Okuduğunu anlama, ana fikir ve çıkarım becerilerini sorularla çalışın.`,
  },
  {
    path: '/zeka-bulmacalari',
    title: 'Zeka Bulmacaları ve Görsel Mantık Testleri',
    description: 'Görsel ipuçları ve dedektiflik soruları içeren 50 zeka testini keşfedin. Her testte 10 soruyla dikkat, çıkarım ve mantık becerilerinizi çalıştırın.',
  },
  {
    path: '/chess-tests',
    locale: 'en_US',
    title: 'Chess Tests: Best Moves, Checkmates and Tactics',
    description: 'Practice chess tactics with online tests covering best moves, checkmates, forks, pins, skewers and defense. Choose a test and solve the positions.',
  },
  {
    path: '/turkce-oyunlari',
    title: 'Türkçe Oyunları: Dil Bilgisi ve Kelime Pratiği',
    description: 'Harfler, heceler, yazım kuralları, anlam bilgisi ve paragrafı Türkçe oyunlarıyla çalışın. Sınıfınıza ve zorluk düzeyine uygun oyunu seçin.',
  },
  {
    path: '/turkce-oyunlari/sert-unsuz-yolu',
    title: 'Sert Ünsüz Yolu Oyunu',
    description: 'Sert Ünsüz Yolu oyunuyla Türkçe sert ünsüzleri tanıyın. Harfleri seçerek ilerleyin ve ses bilgisi konusunu etkileşimli alıştırmalarla pekiştirin.',
  },
  {
    path: '/gorevde-yukselme',
    title: 'Görevde Yükselme Sınavı Testleri',
    description: 'Görevde yükselme için yayımlanan mevzuat testlerini ve gerçek soru sayılarını inceleyin. Konu seçerek çalışın veya karma deneme oluşturun.',
  },
  {
    path: '/gorevde-yukselme/karma',
    title: 'Görevde Yükselme Karma Testi',
    description: 'Görevde yükselme konularından karma sorularla tekrar yapın. Farklı mevzuat başlıklarını birlikte çalışarak sınav pratiğinizi sürdürün.',
    index: false,
  },
  {
    path: '/dashboard',
    title: 'Neural Lab: Dikkat, Hafıza ve Matematik Oyunları',
    description: 'Color Logic, Chrono Link ve Number Hunter oyunlarını keşfedin. Renkleri ayırt edin, sıraları hatırlayın ve süre dolmadan hedef sayıya ulaşın.',
  },
  {
    path: '/color-logic',
    locale: 'en_US',
    title: 'Color Logic: Color and Word Challenge',
    description: 'Follow the prompt to choose the ink color or the word meaning. Play Color Logic against the clock, build combos and progress through harder levels.',
  },
  {
    path: '/chrono-link',
    locale: 'en_US',
    title: 'Chrono Link: Visual Memory Game',
    description: 'Memorize the order of the highlighted nodes, then connect them in the right sequence. Play Chrono Link and challenge your visual memory.',
  },
  {
    path: '/number-hunter',
    locale: 'en_US',
    title: 'Number Hunter: Target Number Math Game',
    description: 'Use the available numbers and arithmetic operations to reach the target value. Play Number Hunter against the clock and improve your score.',
  },
  {
    path: '/games/logic-lock',
    locale: 'en_US',
    title: 'Logic Lock: Number Code Puzzle',
    description: 'Crack a hidden number code using feedback from your guesses. Choose daily or classic mode and practice deduction in Logic Lock.',
  },
  {
    path: '/games/word-meaning',
    locale: 'en_US',
    title: 'Word Meaning Pop: English Vocabulary Game',
    description: 'Tap the balloon with the correct meaning in this English vocabulary game. Practice A1, A2 and B1 words while trying to improve your score.',
  },
  {
    path: '/wordmatch',
    locale: 'en_US',
    title: 'Word Match: English Word and Meaning Game',
    description: 'Match English words with their meanings in an interactive vocabulary game. Complete matching rounds and practice recognizing definitions.',
  },
  {
    path: '/flashcards',
    locale: 'en_US',
    title: 'English Vocabulary Flashcards',
    description: 'Study English vocabulary with interactive flashcards. Turn each card to check its meaning and review words at your own pace.',
  },
  {
    path: '/speedrun',
    locale: 'en_US',
    title: 'English Vocabulary SpeedRun',
    description: 'Race against the clock in a 60-second English vocabulary challenge. Answer questions, build your score and try another round to improve.',
  },
  {
    path: '/grade5-speedrun',
    title: '5. Sınıf SpeedRun Bilgi Oyunu',
    description: '5. sınıf sorularını süre dolmadan yanıtlayın. Doğru cevaplarla süre ve puan kazanın, farklı konularda hızlı tekrar yapın.',
  },
  {
    path: '/wordle',
    locale: 'en_US',
    title: 'IELTS Wordle: English Word Guessing Game',
    description: 'Guess the hidden English word using letter feedback. Choose a word length and practice spelling and vocabulary in IELTS Wordle.',
  },
  {
    path: '/kelime-avcisi',
    locale: 'en_US',
    title: 'Word Hunter: Guess the English Word',
    description: 'Read an AI-generated English definition and guess the word. Use the clues to practice vocabulary and reading comprehension in Word Hunter.',
  },
  {
    path: '/iq-test',
    locale: 'en_US',
    title: 'Visual Logic and Reasoning Quiz',
    description: 'Practice visual patterns, logic, math and attention in a 30-minute quiz. Answer the questions and review your results after completing the challenge.',
  },
  {
    path: '/verbal-test',
    locale: 'en_US',
    title: 'English Verbal Reasoning Test',
    description: 'Practice English analogies, vocabulary and deductive reasoning with 20 questions in 20 minutes. Complete the test and review your results.',
  },
  {
    path: '/ielts/calculator',
    locale: 'en_US',
    title: 'IELTS Band Score Calculator',
    description: 'Calculate your overall IELTS band score from Listening, Reading, Writing and Speaking results. Check how your four section scores combine.',
  },
  {
    path: '/ielts/listening',
    locale: 'en_US',
    title: 'IELTS Listening Practice Library',
    description: 'Browse IELTS Listening practice tests by topic, part and difficulty. Choose an available test and work through its listening questions.',
  },
  {
    path: '/ielts/writing',
    locale: 'en_US',
    title: 'IELTS Writing Practice and AI Feedback',
    description: 'Practice IELTS Writing Task 1 and Task 2 with timed prompts. Write your response and request AI feedback on your writing.',
  },
  {
    path: '/ielts/speaking',
    locale: 'en_US',
    title: 'IELTS Speaking Simulator',
    description: 'Practice IELTS Speaking with an AI conversation simulator. Respond to interview questions and review feedback on vocabulary, grammar and fluency.',
  },
  {
    path: '/oyunlar/6-yas/kayip-olani-bul',
    title: '6 Yaş Kayıp Olanı Bul Oyunu',
    description: 'Dizide eksik olan nesneyi veya şekli bulun. 6 yaş için hazırlanan Kayıp Olanı Bul oyunuyla örüntü, dikkat ve gözlem pratiği yapın.',
  },
  {
    path: '/oyunlar/6-yas/siralama',
    title: '6 Yaş Sıralama Oyunu',
    description: 'Nesneleri verilen yönergeye göre doğru sıraya koyun. 6 yaş için hazırlanan sıralama oyunlarıyla karşılaştırma ve sıralama becerilerini çalışın.',
  },
  {
    path: '/edirne-masallari',
    title: 'Edirne Masalları: Kültürel Miras ve Çocuk Masalları',
    description: 'Edirne’nin tarihî, kültürel ve doğal değerlerini çocuklara masal diliyle tanıtan dijital masal kitabı ve TÜBİTAK tasarım projesi.',
  },
  {
    path: '/hakkimizda',
    title: 'Hakkımızda',
    description: 'TestDünya hakkında bilgi edinin. Online testlerimizin amacını, soruların hazırlanma yaklaşımını ve çalışma araçlarını tanıyın.',
  },
  {
    path: '/iletisim',
    title: 'İletişim',
    description: 'TestDünya ile iletişime geçin. Testler, sorular ve eğitici oyunlar hakkındaki önerilerinizi, hata bildirimlerinizi ve görüşlerinizi paylaşın.',
  },
  {
    path: '/cookie',
    title: 'Çerez Politikası',
    description: 'TestDünya çerez politikasını inceleyin. Kullanılan çerez türleri, kullanım amaçları ve tarayıcı ayarlarından çerezleri yönetme yolları hakkında bilgi alın.',
  },
  {
    path: '/gizlilik',
    title: 'Gizlilik Politikası',
    description: 'TestDünya gizlilik politikasını okuyun. Veri kullanımı, çerezler ve kişisel verilerinizle ilgili açıklamaları inceleyin.',
  },
  {
    path: '/mistakes',
    title: 'Hata Analiz Merkezi',
    description: 'Bu tarayıcıda kaydettiğiniz yanlış cevapları inceleyin. Önceki testlerde zorlandığınız soruları yeniden çözerek tekrar yapın.',
    index: false,
  },
];

export function getStaticPageMetadata(path: string) {
  const page = STATIC_SEO_PAGES.find((entry) => entry.path === path);
  if (!page) throw new Error(`Missing static SEO page: ${path}`);
  return createPageMetadata(page);
}
