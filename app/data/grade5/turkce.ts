import { SubjectData } from "./types";

export const turkceData: SubjectData = {
  // ==========================================
  // BİRİNCİ DÖNEM VERİLERİ (Mevcut Tüm Testler)
  // ==========================================
  term1: {
    // 1. DÖNEM 1. TEST (Mevcut 20 Soru)
    test1: [
      {
        id: "t5-1-01",
        subject: "turkce",
        term: 1,
        prompt: "'Kırmak' kelimesi hangi cümlede mecaz anlamda kullanılmıştır?",
        options: [
          "Bardağı kazayla kırdı.",
          "Dalları fırtına kırmış.",
          "Sözleriyle kalbimi kırdı.",
          "Odunları baltayla kırdı."
        ],
        correct: 2,
        explanation: "Gönül/kalp kırmak, üzmek anlamında kullanılan bir mecazdır."
      },
      {
        id: "t5-1-02",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimenin zıt anlamlısı yanlış verilmiştir?",
        options: [
          "Taze - Bayat",
          "Yavaş - Hızlı",
          "Zengin - Fakir",
          "Siyah - Kara"
        ],
        correct: 3,
        explanation: "Siyah ve Kara eş anlamlıdır."
      },
      {
        id: "t5-1-03",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde nesnel bir anlatım vardır?",
        options: [
          "En güzel renk mavidir.",
          "Türkiye'nin başkenti Ankara'dır.",
          "Bu film çok sıkıcı.",
          "Dondurma harika bir yiyecek."
        ],
        correct: 1,
        explanation: "Başkent bilgisi kanıtlanabilir gerçektir."
      },
      {
        id: "t5-1-04",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi yapım eki almıştır?",
        options: ["Evler", "Gözlük", "Masa", "Kalemim"],
        correct: 1,
        explanation: "Göz'den gözlük türemiştir."
      },
      {
        id: "t5-1-05",
        subject: "turkce",
        term: 1,
        prompt: "Hangisi bir deyimdir?",
        options: ["Göz atmak", "Kitap okumak", "Okula gitmek", "Yemek yemek"],
        correct: 0,
        explanation: "Göz atmak kalıplaşmış bir deyimdir."
      },
      {
        id: "t5-1-11",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir 'atasözü' değildir?",
        options: [
          "Damlaya damlaya göl olur.",
          "Sakla samanı gelir zamanı.",
          "Kitap okumak faydalıdır.",
          "Ayağını yorganına göre uzat."
        ],
        correct: 2,
        explanation: "Bu genel bir bilgi cümlesidir."
      },
      {
        id: "t5-1-14",
        subject: "turkce",
        term: 1,
        prompt: "'Yüz' kelimesi hangi cümlede farklı bir anlamda kullanılmıştır?",
        options: [
          "Denizde yüzmeyi çok severim.",
          "Defterine bir yüz çizdi.",
          "Bayramda yüz lira topladı.",
          "Düğünde yüz kişi vardı."
        ],
        correct: 0,
        explanation: "Yüzmek fiildir."
      },
      {
        id: "t5-1-16",
        subject: "turkce",
        term: 1,
        prompt: "'Çocuklar parkta neşeyle oynuyor.' cümlesinde işi yapan (özne) kimdir?",
        options: ["Parkta", "Neşeyle", "Çocuklar", "Oynuyor"],
        correct: 2,
        explanation: "Özne çocuklardır."
      },
      {
        id: "t5-1-18",
        subject: "turkce",
        term: 1,
        prompt: "'Okumak' kelimesine hangi ek gelirse 'okuma işini yapan kişi' anlamı kazanır?",
        options: ["-luk", " -cu", " -an", " -man"],
        correct: 2,
        explanation: "Okuyan anlamı verir."
      },
      {
        id: "t5-zn-11",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi 'soyut' bir anlam taşır?",
        options: ["Hava", "Sevgi", "Gözlük", "Çiçek"],
        correct: 1,
        explanation: "Sevgi soyuttur."
      },
      {
        id: "t5-zn-13",
        subject: "turkce",
        term: 1,
        prompt: "'Sıcak' kelimesi hangi cümlede gerçek anlamı dışında (mecaz) kullanılmıştır?",
        options: [
          "Sıcak çorba içti.",
          "Hava bugün çok sıcak.",
          "Bizi çok sıcak karşıladı.",
          "Sıcak sudan eli yandı."
        ],
        correct: 2,
        explanation: "Sıcak karşılamak mecazdır."
      },
      {
        id: "t5-zn-15",
        subject: "turkce",
        term: 1,
        prompt: "Hangi atasözü 'çalışkanlık' ile ilgilidir?",
        options: [
          "Damlaya damlaya göl olur.",
          "İşleyen demir ışıldar.",
          "Ayağını yorganına göre uzat.",
          "Sakla samanı gelir zamanı."
        ],
        correct: 1,
        explanation: "Çalışkanlığı vurgular."
      },
      {
        id: "t5-zn-17",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir 'nesnel' cümledir?",
        options: [
          "Mavi en güzel renktir.",
          "Dondurma çok lezzetlidir.",
          "Türkiye üç tarafı denizlerle çevrili bir yarımadadır.",
          "Bu film çok sıkıcı."
        ],
        correct: 2,
        explanation: "Nesnel bir gerçektir."
      },
      {
        id: "t5-zn-19",
        subject: "turkce",
        term: 1,
        prompt: "Hangisi bir 'hikaye unsuru' değildir?",
        options: ["Yer", "Zaman", "Kişiler", "Ana fikir"],
        correct: 3,
        explanation: "Ana fikir mesajdır."
      },
      {
        id: "t5-hard-nv-01",
        subject: "turkce",
        term: 1,
        prompt: "'Kuyumcu titizliğiyle çalışmak' sözüyle anlatılmak istenen temel düşünce nedir?",
        options: [
          "Çok zengin olmak",
          "Çok yavaş hareket etmek",
          "İşini büyük bir özen ve dikkatle yapmak",
          "Değerli taşlarla uğraşmak"
        ],
        correct: 2,
        explanation: "Aşırı özen anlamındadır."
      },
      {
        id: "t5-hard-nv-03",
        subject: "turkce",
        term: 1,
        prompt: "'Ağır' kelimesi hangi cümlede 'ciddi, vakarlı' anlamında kullanılmıştır?",
        options: [
          "Bu çanta çok ağır.",
          "Bugün ağır bir yemek yedik.",
          "Onun çok ağır bir kişiliği vardı.",
          "Ağır adımlarla yürüdü."
        ],
        correct: 2,
        explanation: "Vakarlı anlamındadır."
      },
      {
        id: "t5-adv-01",
        subject: "turkce",
        term: 1,
        prompt: "'Bakmak' kelimesi aşağıdaki cümlelerin hangisinde 'incelemek, araştırmak' anlamında kullanılmıştır?",
        options: [
          "Pencereden dışarı bakıyor.",
          "Annem bize çok iyi baktı.",
          "Bu konuya sözlükten bakmalısın.",
          "Eski fotoğraflara bakıp ağladı."
        ],
        correct: 2,
        explanation: "Sözlükten bakmak araştırmaktır."
      },
      {
        id: "t5-adv-03",
        subject: "turkce",
        term: 1,
        prompt: "Hangi seçenekteki deyim 'çok korkmak / telaşlanmak' anlamını karşılar?",
        options: [
          "Gözüne girmek",
          "Kulak asmamak",
          "Etekleri tutuşmak",
          "Ağzı kulaklarına varmak"
        ],
        correct: 2,
        explanation: "Korku og telaş anlamındadır."
      },
      {
        id: "t5-adv-05",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerin hangisi hem 'yapım eki' hem 'çekim eki' almıştır?",
        options: ["Kitapçıdan", "Gözlük", "Masanın", "Kalemler"],
        correct: 0,
        explanation: "Kitap-çı-dan."
      },
      {
        id: "t5-1-20",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde 'kişileştirme' sanatı yapılmıştır?",
        options: [
          "Güneş her sabah erkenden doğar.",
          "Kuşlar ağaçlarda neşeyle ötüyor.",
          "Rüzgar bugün çok sert esiyor.",
          "Güneş, bulutların arkasına saklanmış bize küsmüştü."
        ],
        correct: 3,
        explanation: "Güneşin 'küsmesi' insana ait bir özelliktir. Bu özelliğin doğadaki bir varlığa verilmesine kişileştirme denir."
      }
    ],
    // 1. DÖNEMİN DİĞER ESKİ TESTLERİ (Mevcut test2, test3, test4 vb.)
    test2: [
      {
        id: "t5-1-t2-01",
        subject: "turkce",
        term: 1,
        prompt: "'Dalmak' sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?",
        options: [
          "Çocuk, derin sulara bir balık gibi daldı.",
          "Sıcak havada serinlemek için havuza daldım.",
          "Kitabı okurken öyle bir daldı ki zil sesini duymadı.",
          "Bahçedeki çiçeklerin kokusuna daldı gitti."
        ],
        correct: 2,
        explanation: "C seçeneğinde 'dalmak', bir işle çok meşgul olup çevreyi fark etmemek anlamında kullanılmıştır, yani mecazdır."
      },
      {
        id: "t5-1-t2-02",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki deyimlerden hangisi 'çok önemsememek, aldırış etmemek' anlamındadır?",
        options: [
          "Kulak asmamak",
          "Gözü dönmek",
          "Etekleri zil çalmak",
          "Gönül koymak"
        ],
        correct: 0,
        explanation: "Kulak asmamak deyimi, söylenene önem vermemek ve aldırış etmemek anlamına gelir."
      },
      {
        id: "t5-1-t2-03",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede yazım yanlışı yapılmıştır?",
        options: [
          "Bu akşam ki maça biz de gideceğiz.",
          "Sende benim kitabım kalmış mı?",
          "Herkesin kendine göre bir derdi var.",
          "TBMM 23 Nisan 1920'de açıldı."
        ],
        correct: 0,
        explanation: "'Akşamki' kelimesindeki '-ki' sıfat yapan ektir ve bitişik yazılmalıdır."
      },
      {
        id: "t5-1-t2-04",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması kuralına aykırı bir durum vardır?",
        options: ["Kitabı", "Sepeti", "Uçağı", "Ekmeği"],
        correct: 1,
        explanation: "Sepet kelimesi ünlüyle başlayan ek aldığında 'sepedi' olmaz, sertliğini korur. Bu yumuşama kuralına aykırılıktır."
      },
      {
        id: "t5-1-t2-05",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'amaç-sonuç' ilişkisi vardır?",
        options: [
          "Kar yağdığı için yollar kapandı.",
          "Seni göreyim diye bu kadar yolu geldim.",
          "Çalısılmadığı için zayıf not aldı.",
          "Hava ısınınca herkes dışarı fırladı."
        ],
        correct: 1,
        explanation: "Burada 'seni görmek amacıyla' anlamı vardır, bu yüzden amaç-sonuç cümlesidir."
      },
      {
        id: "t5-1-t2-06",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki atasözlerinden hangisi 'tasarruf' ile ilgilidir?",
        options: [
          "Sakla samanı gelir zamanı.",
          "İyilik yap denize at.",
          "İşleyen demir ışıldar.",
          "Bir elin nesi var iki elin sesi var."
        ],
        correct: 0,
        explanation: "Sakla samanı gelir zamanı atasözü, gereksiz görülen şeylerin saklanması ve tutumlu olunması gerektiğini anlatır."
      },
      {
        id: "t5-1-t2-07",
        subject: "turkce",
        term: 1,
        prompt: "'Gözlemci' kelimesinin kökü aşağıdakilerden hangisidir?",
        options: ["Gözlem", "Gözle", "Göz", "İz"],
        correct: 2,
        explanation: "Gözlemci kelimesinin anlamlı en küçük parçası olan kökü 'Göz' ismidir."
      },
      {
        id: "t5-1-t2-08",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde öznel bir yargı vardır?",
        options: [
          "Türkiye'nin en kalabalık şehri İstanbul'dur.",
          "Bu kitabın kapağı kırmızı renktedir.",
          "Filmin sonu herkesi çok etkiledi.",
          "Güneş doğudan doğar, batıdan batar."
        ],
        correct: 2,
        explanation: "'Etkilemek' kişiden kişiye değişen bir yorumdur, bu yüzden öznel bir yargıdır."
      },
      {
        id: "t5-1-t2-09",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede ünsüz benzeşmesi (sertleşme) vardır?",
        options: ["Çiçekçi", "Ağacı", "Gidiyor", "Kalemlik"],
        correct: 0,
        explanation: "Çiçek-çi kelimesinde 'k' sert sessizinden sonra gelen 'c' sesi 'ç'ye dönüşmüştür (sertleşmiştir)."
      },
      {
        id: "t5-1-t2-10",
        subject: "turkce",
        term: 1,
        prompt: "'Açık' sözcüğü hangisinde 'gizli olmayan, net' anlamında kullanılmıştır?",
        options: [
          "Kapı hala açık kalmış.",
          "Bugün hava çok açık görünüyor.",
          "Bize her şeyi açık bir dille anlattı.",
          "Üstü açık bir araba aldılar."
        ],
        correct: 2,
        explanation: "Açık bir dil, anlaşılır ve gizli yönü olmayan bir anlatım demektir."
      },
      {
        id: "t5-1-t2-11",
        subject: "turkce",
        term: 1,
        prompt: "Bir metinde olayların geçtiği yeri, zamanı ve kişileri anlatan unsurlara ne denir?",
        options: [
          "Ana fikir",
          "Hikaye unsurları",
          "Yardımcı fikirler",
          "Metnin başlığı"
        ],
        correct: 1,
        explanation: "Yer, zaman, kişiler ve olay, hikaye (anlatı) unsurlarını oluşturur."
      },
      {
        id: "t5-1-t2-12",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelime yapım eki almamıştır?",
        options: ["Yolcu", "Kalemler", "Tuzluk", "Simitçi"],
        correct: 1,
        explanation: "Kalemler kelimesindeki '-ler' çoğul ekidir ve bir çekim ekidir, kelimenin anlamını değiştirmez."
      },
      {
        id: "t5-1-t2-13",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisinin zıt anlamlısı yoktur?",
        options: ["Güzel", "Yaşlı", "Masa", "Cömert"],
        correct: 2,
        explanation: "Masa somut bir nesne adıdır og zıt anlamlısı bulunmaz."
      },
      {
        id: "t5-1-t2-14",
        subject: "turkce",
        term: 1,
        prompt: "Hangi atasözü yardımlaşma ile ilgilidir?",
        options: [
          "Ağaç yaşken eğilir.",
          "Bir elin nesi var, iki elin sesi var.",
          "Ayağını yorganına göre uzat.",
          "Gülme komşuna gelir başına."
        ],
        correct: 1,
        explanation: "Bu atasözü, işlerin birlikte ve yardımlaşarak daha iyi yapıldığını anlatır."
      },
      {
        id: "t5-1-t2-15",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerden hangisi 'hayal ürünü' bir öğe içermektedir?",
        options: [
          "Bulutlar gökyüzünde pamuk gibi süzülüyordu.",
          "Küçük kedi ağaca tırmanmaya çalıştı.",
          "Ay dede bu gece bize göz kırpıyordu.",
          "Yağmurun sesiyle uykudan uyandım."
        ],
        correct: 2,
        explanation: "Ay'ın göz kırpması gerçek hayatta mümkün olmayan, hayali bir olaydır."
      },
      {
        id: "t5-1-t2-16",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede ünlü düşmesi vardır?",
        options: ["Gönlüm", "Çiçeğim", "Resmi", "Kitapta"],
        correct: 0,
        explanation: "Gönül-üm birleşince 'ü' harfi düşerek 'Gönlüm' olur."
      },
      {
        id: "t5-1-t2-17",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir 'nesnel' tanım cümlesidir?",
        options: [
          "Şiir, duyguların en güzel anlatım yoludur.",
          "Üçgen, üç kenarı olan bir kapalı şekildir.",
          "Roman okumak insanı başka dünyalara götürür.",
          "En sevdiğim mevsim kış mevsimidir."
        ],
        correct: 1,
        explanation: "Üçgenin tanımı bilimseldir ve kişiden kişiye değişmez."
      },
      {
        id: "t5-1-t2-18",
        subject: "turkce",
        term: 1,
        prompt: "'Bu çocuk çok akıllı ancak biraz tembel.' cümlesindeki 'ancak' kelimesi ne tür bir anlam katmıştır?",
        options: [
          "Neden-sonuç",
          "Düşüncenin akışını değiştirme",
          "Amaç-sonuç",
          "Benzerlik"
        ],
        correct: 1,
        explanation: "'Ancak' kelimesi olumlu bir cümleden olumsuz bir özelliğe geçerken kullanılır, akışı değiştirir."
      },
      {
        id: "t5-1-t2-19",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki noktalama işaretlerinden hangisi tamamlanmamış cümlelerin sonuna konur?",
        options: ["Nokta", "Ünlem", "Üç Nokta", "Soru İşareti"],
        correct: 2,
        explanation: "Henüz bitmemiş veya devamı okuyucuya bırakılmış cümlelerin sonuna üç nokta (...) konur."
      },
      {
        id: "t5-1-t2-20",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelime grubunda eş anlamlı kelimeler bir arada verilmiştir?",
        options: [
          "Siyah - Beyaz",
          "Okul - Mektep",
          "Hızlı - Yavaş",
          "Büyük - Küçük"
        ],
        correct: 1,
        explanation: "Okul ve Mektep aynı anlama gelen eş anlamlı kelimelerdir."
      }
    ],
    test3: [
      {
        id: "t5-1-t3-01",
        subject: "turkce",
        term: 1,
        prompt: "(1) Kitaplar, insan ruhunun en sadık dostlarıdır. (2) Bir sayfa çevirdiğinizde kendinizi bambaşka bir dünyada bulursunuz. (3) Günümüzde kağıt fiyatlarındaki artış yayınevlerini zorlamaktadır. (4) Bu dostluk, size hiçbir karşılık beklemeden bilgi ve huzur sunar. Yukarıdaki metinde anlam akışını bozan cümle hangisidir?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Metin genel olarak kitapların manevi değerinden bahsederken, 3. cümle tamamen ekonomik bir konuya değindiği için akışı bozmaktadır."
      },
      {
        id: "t5-1-t3-02",
        subject: "turkce",
        term: 1,
        prompt: "'Sıcak' sözcüğü aşağıdaki cümlelerin hangisinde 'samimi' anlamında kullanılmıştır?",
        options: [
          "Fırından yeni çıkmış sıcak ekmekleri aldık.",
          "Bizi kapıda çok sıcak bir gülümsemeyle karşıladı.",
          "Yazın bu sıcak günlerinde denize girmek harika.",
          "Sıcak çorbayı içer içmez içim ısındı."
        ],
        correct: 1,
        explanation: "Sıcak bir gülümseme, fiziksel ısıyı değil, davranışlardaki samimiyeti ifade eden mecaz bir kullanımdır."
      },
      {
        id: "t5-1-t3-03",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde bir 'koşul (şart)' anlamı vardır?",
        options: [
          "Ödevlerini bitirirsen dışarı çıkıp oynayabilirsin.",
          "Geç uyandığı için servisi kaçırdı.",
          "Kütüphaneye kitap iade etmek için gitti.",
          "Arkadaşına sürpriz yapmak amacıyla hediye aldı."
        ],
        correct: 0,
        explanation: "Dışarı çıkıp oynama eylemi, ödevlerin bitirilmesi şartına (koşuluna) bağlanmıştır."
      },
      {
        id: "t5-1-t3-04",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünlü daralması' vardır?",
        options: ["Koşuyor", "Gülüyor", "Bekliyor", "Bakıyor"],
        correct: 2,
        explanation: "Bekle- fiili '-yor' eki aldığında sondaki 'e' sesi daralarak 'i'ye dönüşür (Bekliyor)."
      },
      {
        id: "t5-1-t3-05",
        subject: "turkce",
        term: 1,
        prompt: "'Dünya kadar işim var.' cümlesinde kullanılan söz sanatı aşağıdakilerden hangisidir?",
        options: ["Benzetme", "Kişileştirme", "Abartma", "Konuşturma"],
        correct: 2,
        explanation: "İşin çokluğu, dünya ile kıyaslanarak mübalağa edilmiş (abartılmış) bir şekilde anlatılmıştır."
      },
      {
        id: "t5-1-t3-06",
        subject: "turkce",
        term: 1,
        prompt: "Hangi seçenekte 'özelden genele' bir sıralama vardır?",
        options: [
          "Varlık - Canlı - Bitki - Papatya",
          "Papatya - Bitki - Canlı - Varlık",
          "Bitki - Papatya - Varlık - Canlı",
          "Varlık - Papatya - Bitki - Canlı"
        ],
        correct: 1,
        explanation: "En dar kapsamlı olan papatyadan, en geniş kapsamlı olan varlığa doğru bir sıralama yapılmıştır."
      },
      {
        id: "t5-1-t3-07",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki birleşik kelimelerden hangisinin yazımı yanlıştır?",
        options: [
          "Atatürk Barajı",
          "Aslan ağzı (bitki)",
          "Ayşe teyze",
          "Sincap sokak"
        ],
        correct: 1,
        explanation: "Bitki veya hayvan adı olan birleşik kelimeler eğer gerçek anlamını kaybetmişse bitişik yazılır: 'Aslanağzı'."
      },
      {
        id: "t5-1-t3-08",
        subject: "turkce",
        term: 1,
        prompt: "'Boş' kelimesi aşağıdaki cümlelerin hangisinde 'işsiz, boşta olan' anlamında kullanılmıştır?",
        options: [
          "Bu kutu tamamen boş çıktı.",
          "Bugün boş bir vaktim var, görüşebiliriz.",
          "Boş laflarla beni oyalamayın.",
          "Odada sadece boş sandalyeler vardı."
        ],
        correct: 1,
        explanation: "Vaktin boş olması, yapacak bir işin olmadığını ifade eder."
      },
      {
        id: "t5-1-t3-09",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'karşılaştırma' yapılmamıştır?",
        options: [
          "Bu sınıf diğerlerinden daha geniştir.",
          "Ali de senin kadar çalışkandır.",
          "Bugün hava dünkinden daha soğuk.",
          "Meyvelerden sadece elmayı çok severim."
        ],
        correct: 3,
        explanation: "D seçeneğinde bir tercih belirtilmiştir ancak iki varlık veya durum arasında kıyas yapılmamıştır."
      },
      {
        id: "t5-1-t3-10",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi 'soyut' bir kavramı ifade eder?",
        options: ["Işık", "Rüzgar", "Adalet", "Ses"],
        correct: 2,
        explanation: "Işık, rüzgar ve ses duyu organlarımızla algılanabilirken, adalet zihinsel bir kavramdır (soyuttur)."
      },
      {
        id: "t5-1-t3-11",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki atasözlerinden hangisi 'umut' ve 'çaresizlik' ile ilgilidir?",
        options: [
          "Damlaya damlaya göl olur.",
          "Denize düşen yılana sarılır.",
          "Ayağını yorganına göre uzat.",
          "Gülme komşuna gelir başına."
        ],
        correct: 1,
        explanation: "Zor durumda kalan insanın her türlü çareye başvurabileceğini anlatan bir atasözüdür."
      },
      {
        id: "t5-1-t3-12",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede 'ünsüz türemesi' vardır?",
        options: ["Hissetti", "Gitti", "Baktı", "Sattı"],
        correct: 0,
        explanation: "His-etmek birleşirken 's' sesi türer og 'hissetti' olur."
      },
      {
        id: "t5-1-t3-13",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir 'öznel' değerlendirme cümlesidir?",
        options: [
          "Yazar bu kitabında çocukluk anılarını anlatıyor.",
          "Kitabın kapak tasarımındaki renkler çok uyumlu.",
          "Roman toplamda üç yüz elli sayfadan oluşuyor.",
          "Film, İstanbul'un tarihi semtlerinde çekilmiş."
        ],
        correct: 1,
        explanation: "Renklerin 'uyumlu' olması kişisel bir beğenidir ve kanıtlanamaz."
      },
      {
        id: "t5-1-t3-14",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde 'benzetme' sanatı yapılmıştır?",
        options: [
          "Zeytin gibi siyah gözleri vardı.",
          "Dağlar bu sabah bembeyazdı.",
          "Kuşlar gökyüzünde dans ediyordu.",
          "Ağaçlar kışın uykusuna yattı."
        ],
        correct: 0,
        explanation: "Gözlerin rengi, 'gibi' edatı kullanılarak zeytine benzetilmiştir."
      },
      {
        id: "t5-1-t3-15",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelime yapısı bakımından diğerlerinden farklıdır?",
        options: ["Kitaplık", "Gözlük", "Bilgi", "Sıra"],
        correct: 3,
        explanation: "Sıra kelimesi kök halindedir (basittir), diğerleri ise yapım eki almış türemiş kelimelerdir."
      },
      {
        id: "t5-1-t3-16",
        subject: "turkce",
        term: 1,
        prompt: "Bir paragrafın en kapsamlı cümlesine ne denir?",
        options: [
          "Giriş cümlesi",
          "Ana fikir cümlesi",
          "Sonuç cümlesi",
          "Yardımcı fikir cümlesi"
        ],
        correct: 1,
        explanation: "Ana fikir, metnin bütününde anlatılmak istenen temel mesajı verir."
      },
      {
        id: "t5-1-t3-17",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerin hangisinde yazım yanlışı vardır?",
        options: ["Pek çok", "Herşey", "Birkaç", "Hiçbir"],
        correct: 1,
        explanation: "'Şey' kelimesi her zaman ayrı yazılır: 'Her şey'."
      },
      {
        id: "t5-1-t3-18",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede virgül (,) 'eş görevli kelimeleri ayırmak' için kullanılmıştır?",
        options: [
          "Pazardan elma, armut, muz aldım.",
          "Evet, ben de seninle geleceğim.",
          "Akşam eve geldi, hemen uyudu.",
          "Genç, kadının elindeki çantayı aldı."
        ],
        correct: 0,
        explanation: "Elma, armut ve muz kelimeleri aynı görevde (nesne) olan kelimelerdir."
      },
      {
        id: "t5-1-t3-19",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki deyimlerden hangisi 'çok korkmak' anlamındadır?",
        options: [
          "Ağzı açık kalmak",
          "Etekleri zil çalmak",
          "Yüreği ağzına gelmek",
          "Gözüne girmek"
        ],
        correct: 2,
        explanation: "Ani bir korku veya heyecan durumunu anlatan bir deyimdir."
      },
      {
        id: "t5-1-t3-20",
        subject: "turkce",
        term: 1,
        prompt: "'Okul' kelimesinin eş anlamlısı aşağıdakilerden hangisidir?",
        options: ["Öğrenci", "Mektep", "Sınıf", "Muallim"],
        correct: 1,
        explanation: "Okul ve mektep sözcükleri aynı anlamı karşılayan kelimelerdir."
      }
    ]
  },

  // ==========================================
  // İKİNCİ DÖNEM VERİLERİ (Yeni Şekilsiz Paket)
  // ==========================================
  term2: {
    // 2. DÖNEM 1. TEST (20 Soru - Şekilsiz)
    test1: [
      {
        id: "t5-2-t1-01",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'soğuk' sözcüğü mecaz anlamda kullanılmıştır?",
        options: [
          "Kış aylarında buralarda çok soğuk bir hava olur.",
          "Buzdolabından çıkan soğuk suyu bir dikişte bitirdi.",
          "Yeni gelen arkadaşına karşı oldukça soğuk davrandı.",
          "Soğuk havada dışarıda fazla kaldığı için hastalanmış."
        ],
        correct: 2,
        explanation: "Davranışlardaki samimiyetsizliği, ilgisizliği ifade etmek için kullanılan 'soğuk' kelimesi mecaz anlamlıdır."
      },
      {
        id: "t5-2-t1-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki deyimlerden hangisi 'çok sevinmek, mutlu olmak' anlamındadır?",
        options: [
          "Etekleri zil çalmak",
          "Gözünü kırpmamak",
          "Kulak arkası etmek",
          "Burnundan kıl aldırmamak"
        ],
        correct: 0,
        explanation: "Etekleri zil çalmak deyimi, büyük bir sevinç, coşku ve neşe yaşama durumunu anlatır."
      },
      {
        id: "t5-2-t1-03",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır?",
        options: [
          "Sınıftaki öğrenciler de bizimle tiyatroya gelecek.",
          "Dün akşamki belgeseli izlerken uyuya kalmışım.",
          "Türk Dil Kurumu'nun yeni sözlüğünü kütüphaneden aldım.",
          "Herkes kendi sırasına geçip sessizce beklemeye başladı."
        ],
        correct: 1,
        explanation: "Birleşik bir fiil olan 'uyuyakalmak' kelimesi kurallı birleşik fiil olduğu için her zaman bitişik yazılmalıdır."
      },
      {
        id: "t5-2-t1-04",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki sözcüklerin hangisine ünlüyle başlayan bir ek getirildiğinde 'ünsüz yumuşaması' gerçekleşmez?",
        options: ["Kitap", "Ağaç", "Millet", "Çocuk"],
        correct: 2,
        explanation: "Millet kelimesi tek heceli gibi davranan yabancı kökenli bir sözcük olduğu için ünlü eki aldığında 'milledi' olmaz, sertliğini korur."
      },
      {
        id: "t5-2-t1-05",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'amaç-sonuç' ilişkisi vardır?",
        options: [
          "Kar yağışı nedeniyle okullar bir gün tatil edildi.",
          "Sınavda başarılı olmak için planlı ve düzenli çalışıyor.",
          "Geç uyandığı için sabah kahvaltısını yapamadı.",
          "Hava kararınca sokaktaki çocuklar evlerine döndü."
        ],
        correct: 1,
        explanation: "Çalışma eylemi 'sınavda başarılı olmak amacıyla' gerçekleştirildiği için amaç-sonuç cümlesidir."
      },
      {
        id: "t5-2-t1-06",
        subject: "turkce",
        term: 2,
        prompt: "Hangi seçenekteki atasözü 'birlik, beraberlik ve yardımlaşma' düşüncesini savunur?",
        options: [
          "Sakla samanı, gelir zamanı.",
          "İşleyen demir ışıldar.",
          "Bir elin nesi var, iki elin sesi var.",
          "Ayağını yorganına göre uzat."
        ],
        correct: 2,
        explanation: "Bu atasözü, insanların tek başına çözemediği işleri birlik ve yardımlaşma yoluyla kolayca başarabileceğini anlatır."
      },
      {
        id: "t5-2-t1-07",
        subject: "turkce",
        term: 2,
        prompt: "'Simitçi' kelimesinin kökü aşağıdakilerden hangisidir ve kökünün türü nedir?",
        options: [
          "Simit - İsim kökü",
          "Simit - Fiil kökü",
          "Sim - İsim kökü",
          "Simitçi - Ortak kök"
        ],
        correct: 0,
        explanation: "Kelimenin anlamlı en küçük parçası 'simit'tir ve bir nesne adı olduğu için isim köküdür."
      },
      {
        id: "t5-2-t1-08",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'öznel' bir anlatım söz konusudur?",
        options: [
          "Yazarın bu eseri toplamda üç ana bölümden oluşmaktadır.",
          "Kitabın mavi kapak tasarımı gözü yormayan harika bir estetiğe sahip.",
          "Şiir kitabı geçen ay bir yayınevi tarafından basıldı.",
          "Metinde Karadeniz bölgesinin tarihi yerleri anlatılıyor."
        ],
        correct: 1,
        explanation: "Kapak tasarımının 'harika bir estetiğe' sahip olması kişisel bir yorumdur, kanıtlanamaz."
      },
      {
        id: "t5-2-t1-09",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki sözcüklerin hangisinde 'ünsüz benzeşmesi' (sertleşme) kuralı vardır?",
        options: ["Sokakta", "Kalemim", "Gidiyor", "Bebeği"],
        correct: 0,
        explanation: "Sokak-da kelimesi birleşirken 'k' sert sessiz harfi, yanındaki yumuşak 'd' sesini 't'ye dönüştürmüştür."
      },
      {
        id: "t5-2-t1-10",
        subject: "turkce",
        term: 2,
        prompt: "'Tatlı' sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?",
        options: [
          "Yemekten sonra nefis bir şerbetli tatlı yedik.",
          "Pazardan aldığımız elmalar oldukça tatlı çıktı.",
          "Küçük bebeğin tatlı gülüşü herkesin içini ısıttı.",
          "Çayın yanında tatlı bisküviler ikram ettiler."
        ],
        correct: 2,
        explanation: "Gülüşün tatlı olması lezzetle ilgili değil, sevimli ve cana yakın olmasıyla ilgilidir, yani mecazdır."
      },
      {
        id: "t5-2-t1-11",
        subject: "turkce",
        term: 2,
        prompt: "Bir metinde anlatılanların, üzerinde durulan kavramların veya durumların bütününe ne ad verilir?",
        options: ["Ana fikir", "Metnin konusu", "Yardımcı düşünce", "Metnin başlığı"],
        correct: 1,
        explanation: "Metinde 'ne anlatılıyor?' sorusunun cevabı bize o metnin konusunu verir."
      },
      {
        id: "t5-2-t1-12",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisi 'yapım eki' alarak yeni bir anlam kazanmıştır?",
        options: ["Sıralar", "Defterim", "Tuzluk", "Kapıda"],
        correct: 2,
        explanation: "Tuz ismine gelen '-luk' eki, tuz konulan kap anlamında tamamen yeni bir kelime türetmiştir."
      },
      {
        id: "t5-2-t1-13",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelime çiftlerinden hangisi aralarındaki anlam ilişkisi bakımından diğerlerinden farklıdır?",
        options: ["Siyah - Beyaz", "Uzak - Yakın", "Zengin - Fakir", "Fakir - Yoksul"],
        correct: 3,
        explanation: "İlk üç seçenekteki kelimeler zıt anlamlıyken, D seçeneğindeki fakir ve yoksul kelimeleri eş anlamlıdır."
      },
      {
        id: "t5-2-t1-14",
        subject: "turkce",
        term: 2,
        prompt: "Hangi atasözü eğitimin küçük yaşlarda verilmesi gerektiği düşüncesini açıklar?",
        options: [
          "Ağaç yaşken eğilir.",
          "Damlaya damlaya göl olur.",
          "Sakla samanı, gelir zamanı.",
          "İşleyen demir ışıldar."
        ],
        correct: 0,
        explanation: "Ağaç yaşken eğilir atasözü, insanların küçük yaşlarda daha kolay eğitilip şekillendirileceğini anlatır."
      },
      {
        id: "t5-2-t1-15",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'hayal ürünü' bir unsur yer almaktadır?",
        options: [
          "Kuşlar sabahın erken saatlerinde ağaçta ötüyordu.",
          "Gece gökyüzündeki yıldızlar parıl parıl parlıyordu.",
          "Rüzgar, yalnız ağacın kulağına gizlice bir şeyler fısıldadı.",
          "Yağan yağmurun ardından gökyüzünde rengarenk bir gökkuşağı çıktı."
        ],
        correct: 2,
        explanation: "Rüzgarın bir ağacın kulağına fısıldaması gerçek hayatta yaşanması imkansız, tamamen hayali bir kurgudur."
      },
      {
        id: "t5-2-t1-16",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünlü düşmesi' meydana gelmiştir?",
        options: ["Aklım", "Çiçeğe", "Sınıfta", "Kitapçılık"],
        correct: 0,
        explanation: "Akıl-ım kelimeleri birleşirken ikinci hecedeki dar ünlü olan 'ı' harfi düşerek 'aklım' halini almıştır."
      },
      {
        id: "t5-2-t1-17",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdakilerden hangisi tamamen 'nesnel' bir yargı içeren tanımdır?",
        options: [
          "Şiir, duyguların kağıda dökülen en etkileyici sanatıdır.",
          "Kare, dört kenarı ve dört dik açısı olan kapalı bir geometrik şekildir.",
          "Kitap okumak, insanı sıkıcı dünyadan uzaklaştıran en iyi aktivitedir.",
          "Tarih dersi, öğrencilerin en çok ilgisini çeken alandır."
        ],
        correct: 1,
        explanation: "Karenin tanımı bilimsel bir gerçektir, kişisel yorum içermez ve kanıtlanabilir."
      },
      {
        id: "t5-2-t1-18",
        subject: "turkce",
        term: 2,
        prompt: "'Bu projenin çok başarılı olacağını düşünüyordum ____ beklediğim gibi gitmedi.' cümlesindeki boşluğa düşüncenin akışına göre hangisi getirilmelidir?",
        options: ["çünkü", "hatta", "fakat", "bu yüzden"],
        correct: 2,
        explanation: "Olumlu bir düşünceden olumsuz bir duruma geçiş yapıldığı için araya düşüncenin akışını değiştiren 'fakat' bağlacı gelmelidir."
      },
      {
        id: "t5-2-t1-19",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki noktalama işaretlerinden hangisi, tamamlanmamış veya yüklemi yazılmamış cümlelerin sonuna konur?",
        options: ["Nokta", "Soru İşareti", "Üç Nokta", "Ünlem İşareti"],
        correct: 2,
        explanation: "Sonu okuyucunun hayal gücüne bırakılan veya tamamlanmayan eksiltili cümlelerin sonuna üç nokta (...) konur."
      },
      {
        id: "t5-2-t1-20",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelime çiftlerinden hangisi 'eş anlamlı (anlamdaş)' kelimelere örnek gösterilebilir?",
        options: ["Savaş - Barış", "Cevap - Yanıt", "Erken - Geç", "Aşağı - Yukarı"],
        correct: 1,
        explanation: "Cevap ve yanıt kelimeleri yazılışları farklı olsa da tamamen aynı anlamı karşılayan sesteş kelimelerdir."
      }
    ],

    // 2. DÖNEM 2. TEST (20 Soru - Şekilsiz)
    test2: [
      {
        id: "t5-2-t2-01",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'derin' sözcüğü mecaz anlamda kullanılmıştır?",
        options: [
          "Bahçedeki su kuyusu oldukça derindi.",
          "Çocuk, derin sularda yüzmekten korkuyordu.",
          "Onunla çok derin bir dostluğumuz vardı.",
          "Köyün girişinde derin bir çukur kazmışlar."
        ],
        correct: 2,
        explanation: "Dostluğun derin olması fiziksel bir ölçüyü değil, sevgi og samimiyetin boyutunu ifade ettiği için mecazdır."
      },
      {
        id: "t5-2-t2-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki deyimlerden hangisi 'bir şeyi gizlice, çaktırmadan dinlemek' anlamındadır?",
        options: [
          "Kulak kabartmak",
          "Göz yummak",
          "Kulak misafiri olmak",
          "İçi sızlamak"
        ],
        correct: 0,
        explanation: "Kulak kabartmak, belli etmemeye çalışarak dikkatle dinlemek anlamına gelen bir deyimdir."
      },
      {
        id: "t5-2-t2-03",
        subject: "turkce",
        term: 2,
        prompt: "Hangi cümledeki 'de' bağlacının yazımı ile ilgili bir hata yapılmıştır?",
        options: [
          "Sen de bizimle sinemaya gelecek misin?",
          "Çantamda kalemim de defterim de duruyor.",
          "Sınavı kazandığını da dün akşam öğrendim.",
          "Bize geleceğinide hiç söylememişti."
        ],
        correct: 3,
        explanation: "Cümledeki 'da/de' bağlaçtır ve kelimeden her zaman ayrı yazılmalıdır: 'geleceğini de' şeklinde olmalıdır."
      },
      {
        id: "t5-2-t2-04",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünlü daralması' kuralı görülmektedir?",
        options: ["Bakıyor", "Gülüyor", "Özlüyor", "Seviyor"],
        correct: 2,
        explanation: "Özle- fiili '-yor' ekini aldığında sondaki geniş ünlü olan 'e' sesi daralarak 'ü' sesine dönüşmüştür (Özlüyor)."
      },
      {
        id: "t5-2-t2-05",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'neden-sonuç' ilişkisi vardır?",
        options: [
          "Kitap okumak için kütüphaneye gitti.",
          "Sıcak hava yüzünden dondurmalar eridi.",
          "Daha iyi görmek amacıyla gözlük taktı.",
          "Sınavı geçmek üzere odasında çalışıyor."
        ],
        correct: 1,
        explanation: "Dondurmaların erimesinin nedeni havanın sıcak olmasıdır. Bu yüzden neden-sonuç cümlesidir."
      },
      {
        id: "t5-2-t2-06",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki atasözlerinden hangisi 'tutumlu olmak ve birikim yapmak' ile ilgilidir?",
        options: [
          "Damlaya damlaya göl olur.",
          "Ağaç yaşken eğilir.",
          "İşleyen demir ışıldar.",
          "Bir elin nesi var iki elin sesi var."
        ],
        correct: 0,
        explanation: "Damlaya damlaya göl olur atasözü, küçük birikimlerin zamanla büyük değerlere dönüşeceğini anlatır."
      },
      {
        id: "t5-2-t2-07",
        subject: "turkce",
        term: 2,
        prompt: "'Yolculuk' kelimesinin aldığı ek aşağıdakilerden hangisidir ve bu ekin türü nedir?",
        options: [
          "-culuk (Çekim eki)",
          "-cu / -luk (Yapım ekleri)",
          "-luk (Çekim eki)",
          "Ek almamıştır, kök halindedir."
        ],
        correct: 1,
        explanation: "Yol sözcüğü önce '-cu' sonra '-luk' yapım eklerini alarak iki kez türemiştir. İkisi de yapım ekidir."
      },
      {
        id: "t5-2-t2-08",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'nesnel' bir yargı söz konusudur?",
        options: [
          "En lezzetli ve harika meyve muzdur.",
          "Kırmızı renkli arabalar herkese çok çekici gelir.",
          "Türkiye'nin coğrafi olarak yedi bölgesi vardır.",
          "Yazarın dili son kitabında çok sıkıcıydı."
        ],
        correct: 2,
        explanation: "Yedi coğrafi bölgenin bulunması kanıtlanabilir bilimsel ve coğrafi bir gerçektir, nesneldir."
      },
      {
        id: "t5-2-t2-09",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünlü düşmesi' vardır?",
        options: ["Kitapta", "Çocuğun", "Karnı", "Çiçekçi"],
        correct: 2,
        explanation: "Karın kelimesine ünlüyle başlayan ek geldiğinde ortadaki 'ı' sesi düşerek 'karnı' olmuştur."
      },
      {
        id: "t5-2-t2-10",
        subject: "turkce",
        term: 2,
        prompt: "'Yumuşak' sözcüğü hangisinde mecaz anlamda kullanılmıştır?",
        options: [
          "Koltuklar o kadar yumuşaktı ki hemen uyuyakaldı.",
          "Taze ekmeğin yumuşak dokusu çok güzeldi.",
          "Bize karşı çok yumuşak bir dille ricada bulundu.",
          "Yumuşak yastığı kafasının altına koydu."
        ],
        correct: 2,
        explanation: "Dilin veya anlatımın yumuşak olması fiziksel bir yumuşaklığı değil, kibar ve kırıcı olmayan bir üslubu ifade eder."
      },
      {
        id: "t5-2-t2-11",
        subject: "turkce",
        term: 2,
        prompt: "Bir metnin bütününe yayılmış olan, okuyucuya asıl iletilmek istenen temel mesaj ve ders aşağıdakilerden hangisidir?",
        options: ["Metnin konusu", "Metnin başlığı", "Ana fikir", "Yardımcı düşünceler"],
        correct: 2,
        explanation: "Yazarın metni yazma amacı olan ve okuyucuya vermek istediği temel öğüt/mesaj ana fikirdir."
      },
      {
        id: "t5-2-t2-12",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisi sadece 'çekim eki' almıştır (yani basit yapılıdır)?",
        options: ["Masanın", "Yolcu", "Sözlük", "Kalemlik"],
        correct: 0,
        explanation: "Masanın kelimesindeki ek ilgi/tamlayan ekidir. Çekim eki olduğu için kelimenin anlamı değişmemiştir."
      },
      {
        id: "t5-2-t2-13",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisinin 'eş anlamlısı' yoktur?",
        options: ["Sene", "Öğretmen", "Kalem", "Mektep"],
        correct: 2,
        explanation: "Sene (yıl), öğretmen (muallim), mektep (okul) kelimelerinin eş anlamlısı varken kalem sözcüğünün yoktur."
      },
      {
        id: "t5-2-t2-14",
        subject: "turkce",
        term: 2,
        prompt: "Hangi atasözü 'çalışkan olmanın ve üretmenin' önemini vurgular?",
        options: [
          "Sakla samanı, gelir zamanı.",
          "İşleyen demir ışıldar.",
          "Damlaya damlaya göl olur.",
          "Ağaç yaşken eğilir."
        ],
        correct: 1,
        explanation: "İşleyen demir ışıldar atasözü, çalışan ve üreten insanların her zaman canlı, sağlıklı ve başarılı kalacağını anlatır."
      },
      {
        id: "t5-2-t2-15",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'benzetme' sanatı yapılmıştır?",
        options: [
          "Güneş bulutların arkasından bize el sallıyordu.",
          "Aslan gibi kuvvetli bir child kapıyı tek hamlede açtı.",
          "Kuşlar neşeyle ağacın dallarında şarkı söylüyordu.",
          "Rüzgar bugün ovada çok sert bir şekilde esiyordu."
        ],
        correct: 1,
        explanation: "Çocuğun gücü, 'gibi' edatı kullanılarak bir aslanın kuvvetine benzetilmiştir."
      },
      {
        id: "t5-2-t2-16",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki sözcüklerin hangisinde 'ünsüz türemesi' meydana gelmiştir?",
        options: ["Hissetti", "Gitti", "Baktı", "Ağaçta"],
        correct: 0,
        explanation: "His ve etmek kelimeleri birleşirken araya fazladan bir 's' ünsüz harfi girmiştir (türemiştir)."
      },
      {
        id: "t5-2-t2-17",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'abartma' (mübalağa) sanatı yapılmıştır?",
        options: [
          "Odanın içi buz gibi soğuk olmuştu.",
          "Ağlamaktan gözlerinin pınarları kurudu, gözyaşları sel oldu.",
          "Küçük kedi yavaşça koltuğun altına saklandı.",
          "Güneş doğunca her yer bir anda aydınlandı."
        ],
        correct: 1,
        explanation: "Gözyaşlarının sel olması gerçekte yaşanması imkansız olan aşırı bir abartma örneğidir."
      },
      {
        id: "t5-2-t2-18",
        subject: "turkce",
        term: 2,
        prompt: "Konuşma çizgisinden önceki ifadenin sonuna veya bir açıklama yapılmadan önce hangi noktalama işareti konur?",
        options: ["Noktalı Virgül", "İki Nokta", "Virgül", "Üç Nokta"],
        correct: 1,
        explanation: "Açıklama yapılacak, örnek verilecek veya konuşma cümlesi başlayacak yerlerden önce iki nokta (:) konur."
      },
      {
        id: "t5-2-t2-19",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisi 'somut' anlamlı bir kavramı ifade eder?",
        options: ["Hava", "Sevgi", "Korku", "Rüya"],
        correct: 0,
        explanation: "Hava gözle görülmese de tenimizle (dokunma duyusuyla) hissedilebildiği için somut bir maddedir."
      },
      {
        id: "t5-2-t2-20",
        subject: "turkce",
        term: 2,
        prompt: "Hangi cümledeki soru eki olan '-mi'nin yazımı DOĞRUDUR?",
        options: [
          "Bu akşam bize gelebilirmiisin?",
          "Kalemimi sen mi aldın?",
          "Ödevlerini bitirdinmi söyle?",
          "Yarın okul varmı acaba?"
        ],
        correct: 1,
        explanation: "B seçeneğindeki 'mi' eki kelimeden ayrı yazılarak yazım kurallarına tam uygun şekilde gösterilmiştir."
      }
    ],

    // 2. DÖNEM 3. TEST (20 Soru - Şekilsiz)
    test3: [
      {
        id: "t5-2-t3-01",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'hafif' sözcüğü mecaz anlamda kullanılmıştır?",
        options: [
          "Elindeki çanta oldukça hafif görünüyordu.",
          "Hafif bir rüzgar yüzümüzü tatlıca yaladı.",
          "Onun bu hafif sözleri herkesi derinden üzdü.",
          "Tartıdaki kutunun ağırlığı çok hafifti."
        ],
        correct: 2,
        explanation: "Sözün hafif olması ağırlığıyla ilgili değil, ciddiyetsiz ve kırıcı olmasıyla ilgilidir, yani mecazdır."
      },
      {
        id: "t5-2-t3-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki deyimlerden hangisi 'birinin gözündeki değerini kaybetmek' anlamındadır?",
        options: [
          "Gözden düşmek",
          "Göz atmak",
          "Göz kulak olmak",
          "Gözü dönmek"
        ],
        correct: 0,
        explanation: "Gözden düşmek deyimi, yapılan hatalar sonucunda birinin sevgisini ve güvenini kaybetmek demektir."
      },
      {
        id: "t5-2-t3-03",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde yazım yanlışı vardır?",
        options: ["Pek çok", "Birkaç", "Her şey", "Bir çok"],
        correct: 3,
        explanation: "'Birçok' kelimesi her zaman bitişik yazılması gereken kalıplaşmış bir birleşik sözcüktür."
      },
      {
        id: "t5-2-t3-04",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünsüz yumuşaması' kuralına uyan bir değişim vardır?",
        options: ["Kitapçı", "Uçağı", "Sütçü", "Simitçi"],
        correct: 1,
        explanation: "Uçak kelimesi ünlüyle başlayan ek aldığında sonundaki 'k' harfi yumuşayarak 'ğ' sesine dönüşmüştür (Uçağı)."
      },
      {
        id: "t5-2-t3-05",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'amaç-sonuç' ilişkisi söz konusudur?",
        options: [
          "Sınavı kazandığı için herkes çok sevindi.",
          "Hava soğuyunca paltosunu dolaptan çıkardı.",
          "Yabancı dil öğrenmek amacıyla kursa kaydoldu.",
          "Yorulduğu için koltukta uyuya kalmış."
        ],
        correct: 2,
        explanation: "Kursa kaydolma eylemi 'yabancı dil öğrenmek amacıyla' yapıldığı için amaç-sonuç ilişkisi taşır."
      },
      {
        id: "t5-2-t3-06",
        subject: "turkce",
        term: 2,
        prompt: "Hangi atasözü 'küçük birikimlerin önemini ve tutumluluğu' anlatır?",
        options: [
          "Sakla samanı, gelir zamanı.",
          "Ağaç yaşken eğilir.",
          "İşleyen demir ışıldar.",
          "Bir elin nesi var iki elin sesi var."
        ],
        correct: 0,
        explanation: "Sakla samanı gelir zamanı atasözü, değersiz görülen şeylerin bile biriktirilerek tutumlu olunması gerektiğini öğütler."
      },
      {
        id: "t5-2-t3-07",
        subject: "turkce",
        term: 2,
        prompt: "'Gözlükçülük' kelimesinin kökü aşağıdakilerden hangisidir?",
        options: ["Gözlük", "Gözlükçü", "Göz", "Gözle"],
        correct: 2,
        explanation: "Kelimenin anlam ilişkisini kaybetmemiş en küçük ve anlamlı parçası (kökü) 'Göz' sözcüğüdür."
      },
      {
        id: "t5-2-t3-08",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'öznel' bir yargı vardır?",
        options: [
          "Türkiye'nin başkenti Ankara şehridir.",
          "Yazarın son hikaye kitabı çok sıkıcı ve uzun.",
          "Haftanın ilk iş günü pazartesidir.",
          "Dünya, Güneş sisteminde yer alan bir gezegendir."
        ],
        correct: 1,
        explanation: "Bir kitabın sıkıcı olması tamamen kişisel bir değerlendirmedir ve doğruluğu kanıtlanamaz."
      },
      {
        id: "t5-2-t3-09",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünsüz benzeşmesi' (sertleşme) kuralı vardır?",
        options: ["Dolapta", "Ağacı", "Gidiyor", "Bebeğin"],
        correct: 0,
        explanation: "Dolap (p sert harf) sözcüğüne gelen '-da' eki sertleşerek '-ta' ekine dönüşmüştür (Dolapta)."
      },
      {
        id: "t5-2-t3-10",
        subject: "turkce",
        term: 2,
        prompt: "'Sıcak' sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?",
        options: [
          "Sıcak çorbayı içerken dili yandı.",
          "Bugün hava her günden daha sıcak.",
          "Misafirleri çok sıcak bir şekilde karşıladılar.",
          "Yazın sıcak günlerinde gölgede oturduk."
        ],
        correct: 2,
        explanation: "Misafirleri sıcak karşılamak fiziksel bir ısıyı değil, gösterilen samimiyeti ve cana yakınlığı ifade eder."
      },
      {
        id: "t5-2-t3-11",
        subject: "turkce",
        term: 2,
        prompt: "Bir metinde işlenen ana fikri destekleyen, onu daha anlaşılır kılan detay cümlelerine ne denir?",
        options: ["Metnin konusu", "Metnin başlığı", "Yardımcı fikirler", "Ana düşünce"],
        correct: 2,
        explanation: "Ana fikrin ispatlanmasını, açıklanmasını ve sınırlandırılmasını sağlayan diğer yan fikirlere yardımcı fikir denir."
      },
      {
        id: "t5-2-t3-12",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisi 'yapım eki' almıştır (türemiş yapılıdır)?",
        options: ["Evler", "Kitaplık", "Sıradan", "Kelimem"],
        correct: 1,
        explanation: "Kitap ismine gelen '-lik' eki, kitap konulan eşya anlamında yeni bir sözcük türetmiştir."
      },
      {
        id: "t5-2-t3-13",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelime çiftlerinden hangisi 'zıt anlamlı' kelimelere örnek gösterilemez?",
        options: ["Büyük - Küçük", "Hızlı - Yavaş", "Siyah - Kara", "Uzak - Yakın"],
        correct: 2,
        explanation: "Siyah ve kara kelimeleri zıt anlamlı değil, aynı anlamı taşıyan eş anlamlı sözcüklerdir."
      },
      {
        id: "t5-2-t3-14",
        subject: "turkce",
        term: 2,
        prompt: "Hangi atasözü 'birlikten kuvvet doğacağı ve işlerin ortaklaşa kolaylaşacağı' fikrini anlatır?",
        options: [
          "Sakla samanı, gelir zamanı.",
          "Bir elin nesi var, iki elin sesi var.",
          "İşleyen demir ışıldar.",
          "Ağaç yaşken eğilir."
        ],
        correct: 1,
        explanation: "Bu atasözü, insanların bir araya gelerek yardımlaştıklarında çok daha güçlü ve başarılı olacaklarını savunur."
      },
      {
        id: "t5-2-t3-15",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'kişileştirme' sanatı yapılmıştır?",
        options: [
          "Gününeş, sabah erkenden gökyüzünde parıldadı.",
          "Kuşlar gökyüzünde neşeyle uçuyordu.",
          "Dertli bulutlar, dağların arkasında sessizce ağlıyordu.",
          "Yağmur damlaları camlara vuruyordu."
        ],
        correct: 2,
        explanation: "Bulutların 'dertli' olması ve 'ağlaması' insana ait özelliklerin doğaya aktarılmasıdır (kişileştirme)."
      },
      {
        id: "t5-2-t3-16",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünlü düşmesi' kuralı vardır?",
        options: ["Oğlu", "Çiçeği", "Kitapta", "Sütçü"],
        correct: 0,
        explanation: "Oğul kelimesi ünlü harfle başlayan bir ek aldığında ikinci hecedeki 'u' sesi düşerek 'oğlu' olmuştur."
      },
      {
        id: "t5-2-t3-17",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'abartma' sanatı yapılmıştır?",
        options: [
          "Korkudan yüreği ağzına geldi, ödüm patladı dedi.",
          "Bir feryat kopardı ki sesi tüm dünyadan duyuldu.",
          "Küçük çocuk hızla merdivenlerden aşağı indi.",
          "Hava o kadar soğuktu ki elleri üşümüştü."
        ],
        correct: 1,
        explanation: "Bir sesin veya çığlığın tüm dünyadan duyulması fiziksel olarak imkansız, aşırı bir abartma (mübalağa) örneğidir."
      },
      {
        id: "t5-2-t3-18",
        subject: "turkce",
        term: 2,
        prompt: "Eş görevli kelimeleri ayırmak veya sıralı cümlelerin arasına koymak için hangi noktalama işareti kullanılır?",
        options: ["Nokta", "İki Nokta", "Virgül", "Noktalı Virgül"],
        correct: 2,
        explanation: "Pazardan elma, armut aldım cümlesinde olduğu gibi eş görevli kelimelerin arasına virgül (,) konur."
      },
      {
        id: "t5-2-t3-19",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisi duyu organlarımızla algılanamayan 'soyut' bir kavramı ifade eder?",
        options: ["Rüzgar", "Işık", "Sevgi", "Ses"],
        correct: 2,
        explanation: "Sevgi, duyu organlarıyla algılanamayan, tamamen kalbi ve zihinsel bir duygu durumu olduğu için soyuttur."
      },
      {
        id: "t5-2-t3-20",
        subject: "turkce",
        term: 2,
        prompt: "Hangi noktalama işareti, soru anlamı taşıyan ve cevap bekleyen cümlelerin sonuna konur?",
        options: ["Nokta", "Ünlem İşareti", "Soru İşareti", "Üç Nokta"],
        correct: 2,
        explanation: "Soru bildiren ve bir yanıt bekleyen tüm cümlelerin sonuna evrensel olarak soru işareti (?) konur."
      }
    ],
    term2: {
    // ==========================================
    // 2. DÖNEM 4. TEST (15 Soru - Zorlaştırılmış / Şekilsiz)
    // ==========================================
    test4: [
      {
        id: "t5-2-t4-01",
        subject: "turkce",
        term: 2,
        prompt: "'Çiğ' sözcüğü aşağıdaki cümlelerin hangisinde 'yansız, olgunlaşmamış veya alışılmamış' anlam dallarının dışında, tamamen mecaz bir anlamda kullanılmıştır?",
        options: [
          "Fırından yeni çıkan ekmeğin içi henüz çiğ kalmıştı.",
          "Toplantıda sarf ettiği o çiğ sözler herkesin tepkisini çekti.",
          "Sabahın erken saatlerinde yaprakların üzerinde çiğ taneleri vardı.",
          "Boyacı, odanın duvarını çok çiğ bir yeşile boyamış."
        ],
        correct: 1,
        explanation: "B seçeneğindeki 'çiğ söz', kırıcı, yersiz ve olgunlaşmamış davranış anlamında kullanılmış katı bir mecaz anlam örneğidir."
      },
      {
        id: "t5-2-t4-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde yer alan deyim, 'bir durum karşısında ne yapacağını bilemeyip aşırı telaşlanmak ve çaresiz kalmak' anlamını karşılamaz?",
        options: [
          "Haberi alınca iki ayağı bir pabuca girdi, ne yapacağını şaşırdı.",
          "Aniden karşısına çıkan engeli görünce etekleri tutuştu.",
          "Projenin iptal edildiğini duyunca küplere bindi, odadan çıktı.",
          "Sınav salonuna geç kalacağını anlayınca eli ayağı birbirine dolandı."
        ],
        correct: 2,
        explanation: "Küplere binmek deyimi telaş ve çaresizlik değil, aşırı öfke ve kızgınlık durumunu ifade eder."
      },
      {
        id: "t5-2-t4-03",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde hem yazım yanlışı yapılmıştır hem de bu yanlış 'ki' bağlacının veya ekinin yazımıyla ilgilidir?",
        options: [
          "Mademki gelmeyecektin, neden bize daha önceden haber vermedin?",
          "Sokaktaki gürültü o kadar fazlaydıki ders çalışmak imkansızlaştı.",
          "Duydum ki unuttun gözlerimin rengini, şarkısını mırıldanıyordu.",
          "Sizinki yine erkenden gelmiş, salondaki masaya kurulmuş."
        ],
        correct: 1,
        explanation: "'Fazlaydı ki' cümlesindeki 'ki' bağlaçtır ve ayrı yazılmalıdır. 'Mademki' ise kalıplaşmış olduğu için bitişik yazımı doğrudur."
      },
      {
        id: "t5-2-t4-04",
        subject: "turkce",
        term: 2,
        prompt: "Ünsüz yumuşaması kuralına göre sonu 'p, ç, t, k' ile biten kelimeler ünlüyle başlayan ek aldığında yumuşar. Hangisinde bu kurala 'aykırılık' gösteren yabancı veya tek heceli bir sözcük kullanılmamıştır?",
        options: [
          "Devletin aldığı yeni ekonomik kararlar dün akşam açıklandı.",
          "Hukukun üstünlüğünü korumak her vatandaşın temel görevidir.",
          "Evrakı çantasına koyup aceleyle binadan dışarı çıktı.",
          "Çocuğun bacağı tahtaya çarpınca canı çok yanmış."
        ],
        correct: 3,
        explanation: "D seçeneğinde 'bacak-ı -> bacağı' ve 'çocuk-un -> çocuğun' kelimelerinde kurallı yumuşama vardır, aykırılık yoktur. Devlet, hukuk ve evrak kelimeleri ise kurala aykırıdır."
      },
      {
        id: "t5-2-t4-05",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde eylemin gerçekleştirilme gerekçesi, bir amaca değil de tamamen gerçekleşmiş bir 'nedene' bağlıdır?",
        options: [
          "Uluslararası turnuvada şampiyon olmak için her gün çift antrenman yapıyor.",
          "Yoğun kar yağışı yüzünden köy yolları iki gün boyunca ulaşıma kapandı.",
          "Beni daha net anlayasın diye tüm detayları tek tek kağıda yazdım.",
          "Ailesine yük olmamak üzere yaz tatilinde bir kütüphanede çalışacak."
        ],
        correct: 1,
        explanation: "Köy yollarının kapanması eylemi 'kar yağması' gibi bitmiş, gerçekleşmiş bir nedene bağlıdır. Diğer şıklar amaç-sonuç ilişkisidir."
      },
      {
        id: "t5-2-t4-06",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde kullanılan atasözü, 'kişinin harcamalarını mutlaka gelirine uygun olarak dengelemesi gerektiği' öğüdünü içermez?",
        options: [
          "İşleyen demir ışıldar, duran kalas çürür.",
          "Ayağını yorganına göre uzatmayan açıkta kalır.",
          "Gereksiz harcama yapma, ak akçe kara gün içindir.",
          "Ummadığın taş baş yarar, tedbiri elden bırakma."
        ],
        correct: 0,
        explanation: "'İşleyen demir ışıldar' atasözü tutumluluk veya bütçe ile ilgili değil, çalışkanlığın ve üretkenliğin önemi ile ilgilidir."
      },
      {
        id: "t5-2-t4-07",
        subject: "turkce",
        term: 2,
        prompt: "'Yorucuydu' kelimesinin kökü, kökünün türü ve aldığı ilk ek aşağıdakilerin hangisinde dil bilgisi kurallarına tam uygun olarak verilmiştir?",
        options: [
          "Yorucu - İsim kökü - Çekim eki",
          "Yor- - Fiil kökü - Yapım eki",
          "Yol - İsim kökü - Yapım eki",
          "Yorgun - Fiil kökü - Çekim eki"
        ],
        correct: 1,
        explanation: "Kelimenin anlamlı en küçük parçası 'yor-' fiil köküdür. Üzerine gelen '-ucu' eki ise fiilden isim türeten bir yapım ekidir."
      },
      {
        id: "t5-2-t4-08",
        subject: "turkce",
        term: 2,
        prompt: "Nesnel yargılar kanıtlanabilir gerçeği aktarırken, öznel yargılar kişisel yorum barındırır. Buna göre hangi seçenekte tamamen 'nesnel' bir yargı verilmiştir?",
        options: [
          "Yazarın son romanı okuyucuyu içine çeken büyüleyici bir atmosfere sahip.",
          "Eserde, Cumhuriyet dönemi Anadolu köylerindeki eğitim seferberliği anlatılıyor.",
          "Kitabın kapak tasarımındaki yeşil tonlar harika bir uyum yakalamış.",
          "Şair, bu şiirinde yalnızlık temasını oldukça başarılı ve akıcı işlemiş."
        ],
        correct: 1,
        explanation: "B seçeneğindeki eserin konusu kanıtlanabilir, kişiye göre değişmeyen nesnel bir gerçektir. Diğer şıklarda 'büyüleyici, harika, başarılı' gibi öznel yorumlar vardır."
      },
      {
        id: "t5-2-t4-09",
        subject: "turkce",
        term: 2,
        prompt: "Sert ünsüzle biten kelimelere yumuşak ünsüzle başlayan ek geldiğinde ek sertleşir (ünsüz benzeşmesi). Hangi cümlede bu kurala uyulmamasından doğan bir 'yazım yanlışı' vardır?",
        options: [
          "Sınav saati tam olarak 14.30'da başlayacak.",
          "Otobüs durakda bekleyen yolcuları almadan hızla geçti.",
          "Sınıfça hafta sonu kütüphanedeki etkinliğe katılacağız.",
          "Aşçı, çorbanın tuzunu bu sefer tam kıvamında ayarlamış."
        ],
        correct: 1,
        explanation: "Durak kelimesi 'k' (sert) ile biter. Yanına gelen ek '-da' değil, sertleşerek '-ta' olmalıdır (durakta). Uyulmaması yazım hatasıdır."
      },
      {
        id: "t5-2-t4-10",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük, soyut anlamlı bir kavramı ifade ederken cümle içinde kazandığı yeni anlamla 'somutlaşmıştır'?",
        options: [
          "Bu soğuk davranışlarınla herkesi kendinden uzaklaştırıyorsun.",
          "Hayallerini gerçekleştirmek için gece gündüz demeden çalıştı.",
          "Korku, insanın mantıklı düşünmesini engelleyen sinsi bir duygudur.",
          "Gecenin bu vaktinde sokaktan gelen ses hepimizi ürküttü."
        ],
        correct: 0,
        explanation: "'Soğuk' aslında somuttur ama mecazlaşmıştır. Soru bizden soyutken somutlaşan arıyor. (İpuçları: Bu sorunun çeldiricisi yüksektir, net somut nesne arandığında net yapı incelenir)."
      },
      {
        id: "t5-2-t4-11",
        subject: "turkce",
        term: 2,
        prompt: "Bir paragraf analiz edilirken yazarın savunduğu ana düşünceyi destekleyen yan unsurlara yardımcı fikir denir. Yardımcı fikirlerle ilgili hangisi 'yanlıştır'?",
        options: [
          "Ana fikrin sınırlarını çizer ve onun ispatlanmasını sağlarlar.",
          "Bir metinde sadece tek bir yardımcı fikir bulunmak zorundadır.",
          "Ana düşünceyi daha anlaşılır kılmak için örnekler sunabilirler.",
          "Paragraftan çıkarılamayacak yargılar sorularında seçenekleri oluştururlar."
        ],
        correct: 1,
        explanation: "Metinlerde ana fikir tek bir tanedir ancak onu destekleyen yardımcı fikirlerin sayısı birden fazla olabilir."
      },
      {
        id: "t5-2-t4-12",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde yer alan sözcük hem yapım eki hem de çekim ekini bir arada 'almamıştır'?",
        options: [
          "Korkusuzca fikrini beyan etmesi herkesi çok şaşırttı.",
          "Kitapçılardan yeni çıkan romanları tek tek inceledi.",
          "Evdeki masanın ayağı kırılınca babam tamir etti.",
          "Gözlüklerini masanın üzerine bırakıp odadan dışarı çıktı."
        ],
        correct: 2,
        explanation: "C seçeneğindeki 'masanın' kelimesi sadece çekim eki (tamlayan/ilgi eki) almıştır. Diğer kelimeler (kitap-çı-lar-dan, göz-lük-ler-i) iki eki de almıştır."
      },
      {
        id: "t5-2-t4-13",
        subject: "turkce",
        term: 2,
        prompt: "Sözcükler arası anlam ilişkilerinde sesteş (eş sesli) kelimeler yazılışları aynı, anlamları farklı kelimelerdir. Hangisinde sesteşlik özelliği olan bir kelime kullanılmamıştır?",
        options: [
          "Yaz aylarında buraların havası oldukça bunaltıcı olur.",
          "Çay kenarında oturup kuşların sesini dinlemek huzur veriyor.",
          "Gül dikeni eline batınca canı acıyla yandı.",
          "Defterine güzel bir kare çizip içini boyadı."
        ],
        correct: 3,
        explanation: "Yaz (mevsim/fiil), çay (akarsu/içecek), gül (çiçek/fiil) sesteşken, 'kare' kelimesinin sesteşlik özelliği yoktur."
      },
      {
        id: "t5-2-t4-14",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde gerçek hayatta yaşanması kesinlikle imkansız olan, tamamen 'hayal ürünü' bir eylem kurgulanmıştır?",
        options: [
          "Bulutlar gökyüzünde adeta beyaz pamuk tarlaları gibi görünüyordu.",
          "Derdini kimseye anlatamayan küçük çınar ağacı, gece boyu göğe bakıp iç çekti.",
          "Fırtınanın şiddetiyle balkondaki tüm saksılar yere devrilmişti.",
          "Kuşlar göç mevsimi geldiği için sürü halinde güneye doğru uçuyordu."
        ],
        correct: 1,
        explanation: "Ağacın derdinin olması ve 'iç çekmesi' insani özelliklerin doğaya verildiği hayali bir kurgudur (Kişileştirme sanatı)."
      },
      {
        id: "t5-2-t4-15",
        subject: "turkce",
        term: 2,
        prompt: "İki heceli bazı kelimeler ünlüyle başlayan ek aldıklarında ikinci hecedeki dar ünlü düşer. Hangisinde bu kurala uygun bir 'ünlü düşmesi' olayı gerçekleşmiştir?",
        options: [
          "Kitabın kapağını dikkatlice kapatıp rafa kaldırdı.",
          "Sokağın başındaki simitçi erkenden tezgahını açmıştı.",
          "Göğsünde hissettiği ani sızı nedeniyle derin bir nefes aldı.",
          "Çiçeğin yaprakları susuzluktan aşağı doğru sarkmıştı."
        ],
        correct: 2,
        explanation: "Göğüs-ünde kelimesi birleşirken ikinci hecedeki 'ü' harfi düşerek 'göğsünde' halini almıştır."
      }
    ],

    // ==========================================
    // 2. DÖNEM 5. TEST (15 Soru - Zorlaştırılmış / Şekilsiz)
    // ==========================================
    test5: [
      {
        id: "t5-2-t5-01",
        subject: "turkce",
        term: 2,
        prompt: "Sözcüklerin bir bilim, sanat, spor ya da meslek dalına ait özel kavramları karşılamasına terim anlam denir. Hangisinde 'perde' sözcüğü terim anlamıyla kullanılmıştır?",
        options: [
          "Gözlerine hırs perdesi inmiş, gerçekleri bir türlü göremiyor.",
          "Oyunun üçüncü perdesinde sahne ışıkları aniden kesildi.",
          "Güneş ışığını engellemek için pencerelere kalın perdeler astık.",
          "Olayların üzerindeki sır perdesi nihayet dün aralandı."
        ],
        correct: 1,
        explanation: "B seçeneğindeki perde, tiyatro sanatına ait teknik bir kavram (bölüm) olarak kullanıldığı için net bir terim anlamdır."
      },
      {
        id: "t5-2-t5-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'koşul-sonuç (şart)' ilişkisi kurulmuştur?",
        options: [
          "Kar yağışı yoğunlaştığı için Ankara otoyolu trafiğe kapatıldı.",
          "Sınavda hedeflediğin yüksek puanı alırsan istediğin okula kayıt yaptırabilirsin.",
          "Yeni bir dil öğrenmek üzere kurs merkezine gidip form doldurdu.",
          "Kitap okumayı alışkanlık haline getirdiğinden kelime hazinesi çok zengin."
        ],
        correct: 1,
        explanation: "İstenen okula kayıt yaptırabilme eylemi, 'sınavdan yüksek puan alma' şartına/koşuluna bağlanmıştır."
      },
      {
        id: "t5-2-t5-03",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde aralarında benzetme ilgisi kurulan varlıklardan 'kendisine benzetilen' (güçlü olan unsur) açıkça kullanılmıştır?",
        options: [
          "Korkusuz asker, bir aslan gibi düşmanın üzerine doğru atıldı.",
          "Odanın içi bugün adeta buz gibi soğuk olmuştu.",
          "Çocuğun inciyi andıran beyaz ve temiz dişleri vardı.",
          "Tüm bu seçeneklerde benzetme sanatı ve güçlü unsurlar yer almaktadır."
        ],
        correct: 3,
        explanation: "Verilen tüm şıklarda (aslan, buz, inci) kendisine benzetilen güçlü unsurlar tam olarak yer almaktadır."
      },
      {
        id: "t5-2-t5-04",
        subject: "turkce",
        term: 2,
        prompt: "Kısaltmalara getirilen ekler kısaltmanın son harfinin okunuşuna göre gelir ve araya kesme işareti konur. Hangisinde ek getirilmesinde 'yazım yanlışı' yapılmıştır?",
        options: [
          "TDK'nin resmi web sitesindeki güncellemeleri takip etmelisiniz.",
          "Ağabeyim bu yıl MEB'na öğretmen olarak atandı.",
          "THY'de çalışan pilotların eğitim süreçleri oldukça zorludur.",
          "TRT'den yapılan canlı yayını tüm aile neşeyle izledik."
        ],
        correct: 1,
        explanation: "Büyük harfli kısaltmalarda ek son harfe göre gelir: 'MEB'e' şeklinde olmalıdır, açılımına göre (Milli Eğitim Bakanlığı'na) ek getirilmesi yanlıştır."
      },
      {
        id: "t5-2-t5-05",
        subject: "turkce",
        term: 2,
        prompt: "Kişisel düşünce barındırmayan, doğruluğu ya da yanlışlığı kanıtlanabilen cümlelere nesnel denir. Hangisi tamamen 'öznel' bir değerlendirme cümlesidir?",
        options: [
          "Türkiye'nin coğrafi olarak en geniş yüz ölçümüne sahip bölgesi İç Anadolu'dur.",
          "Yazar, bu sürükleyici yapıtında okuyucuyu adeta büyülüyor ve eşsiz bir dil sunuyor.",
          "Su, deniz seviyesinde ve normal şartlar altında 100 derecede kaynamaya başlar.",
          "Roman, yazarın çocukluk yıllarında başından geçen gerçek olayları kronolojik aktarıyor."
        ],
        correct: 1,
        explanation: "Bir kitabın 'sürükleyici, büyülüyücü, eşsiz' olması kişisel yorumdur ve öznel yargı kalıbına girer."
      },
      {
        id: "t5-2-t5-06",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde kullanılan deyim, 'bir durum veya söz karşısında aşırı şaşkınlık yaşayıp konuşamaz hale gelmek' anlamındadır?",
        options: [
          "Öğretmenin sorusunu duyunca dili tutuldu, tek kelime edemedi.",
          "Güzel haberi alınca ağzı kulaklarına vardı, yerinde duramadı.",
          "Hatalı olduğunu anlayınca küplere bindi, etrafı kırdı.",
          "Sınav kağıdını görünce gözü korktu, derin bir iç çekti."
        ],
        correct: 0,
        explanation: "Dili tutulmak deyimi, büyük bir şaşkınlık, korku veya heyecan anında konuşamaz duruma gelmeyi ifade eder."
      },
      {
        id: "t5-2-t5-07",
        subject: "turkce",
        term: 2,
        prompt: "Sıralı cümleleri (içinde birden fazla yüklem olan ve virgülle ayrılan cümleleri) veya kendi içinde virgül bulunan grupları ayırmak için hangi noktalama işareti konur?",
        options: ["İki nokta", "Noktalı virgül", "Üç nokta", "Soru işareti"],
        correct: 1,
        explanation: "Ögeleri arasında virgül bulunan sıralı cümleleri veya takımları birbirinden ayırmak için noktalı virgül (;) kullanılır."
      },
      {
        id: "t5-2-t5-08",
        subject: "turkce",
        term: 2,
        prompt: "'Tutmak' sözcüğü aşağıdaki cümlelerin hangisinde 'hissesine düşmek, kaplamak veya desteklemek' anlamlarının dışında tamamen mecaz bir anlamda kullanılmıştır?",
        options: [
          "Barajın suları koca vadiyi tamamen tutmuştu.",
          "Av sonrasında paylaşılan mirastan bana bu küçük arsa tuttu.",
          "U ustanın tavsiyeleri ve öğütleri yolumu tuttu, beni başarılı kıldı.",
          "Düşen çocuğu son anda kolundan tutup havaya kaldırdı."
        ],
        correct: 2,
        explanation: "C seçeneğinde 'yolunu tutmak', rehberlik etmek, fikirsel destek sağlamak anlamında soyut ve mecaz bir kullanımdır."
      },
      {
        id: "t5-2-t5-09",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde bir durumun gerçekleşmesi, başka bir eylemin yapılması 'şartına' bağlanmamıştır?",
        options: [
          "Kitabı haftaya iade etmek üzere kütüphaneden ödünç alabilirsin.",
          "Hava kararınca sokaktaki tüm çocuklar evlerine döndü.",
          "Düzenli ve planlı çalışırsan hedeflediğin LGS puanına ulaşırsın.",
          "Gürültü yapmamak şartıyla salonda resim yapmanıza izin veririm."
        ],
        correct: 1,
        explanation: "B seçeneği 'hava karardığı zaman' anlamında bir zaman/neden ilişkisidir, eylemin şartı yoktur."
      },
      {
        id: "t5-2-t5-10",
        subject: "turkce",
        term: 2,
        prompt: "Kelimelerin köklerine gelerek onlardan tamamen yeni anlamlı kelimeler türeten eklere yapım eki denir. Hangisi yapısı bakımından 'türemiş' bir kelimedir?",
        options: ["Evlerimizden", "Sıraların", "Bilgili", "Kalemler"],
        correct: 2,
        explanation: "Bil- fiil kökünden önce 'bilgi' ismi, ardından '-li' eki gelerek 'bilgili' türemiş sözcüğü oluşmuştur. Diğerleri sadece çekim eki almıştır."
      },
      {
        id: "t5-2-t5-11",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde bir şeyi olduğundan çok daha büyük veya çok daha küçük göstererek 'abartma' sanatı yapılmamıştır?",
        options: [
          "O kadar zayıflamıştı ki üflesem kuğu gibi uçup gidecekti.",
          "Ağlamaktan gözlerinin yaşları sele döndü, sokaklar su doldu.",
          "Karadeniz'in hırçın dalgaları sahildeki dev kayaları aşındırmıştı.",
          "Bir of çeksem karşıki koca dağlar ortadan ikiye ayrılır."
        ],
        correct: 2,
        explanation: "C seçeneğinde dalgaların kayaları aşındırması tamamen gerçekçi ve bilimsel bir doğa olayıdır, abartma yoktur."
      },
      {
        id: "t5-2-t5-12",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde soru eki olan '-mi / -mı' kelimesinin yazımıyla ilgili bir 'yazım yanlışı' yapılmıştır?",
        options: [
          "Yarın akşamki maça siz de bizimle geliyor musunuz?",
          "Bu güzel ödevi tek başına mı hazırladın?",
          "Bana verdiğin sözleri ne çabuk unuttunmu sanki?",
          "Söylediklerimi net bir şekilde duyabiliyor musun?"
        ],
        correct: 2,
        explanation: "C seçeneğindeki 'unuttun mu' ifadesindeki 'mu' soru ekidir ve kelimeden tamamen ayrı yazılmalıdır."
      },
      {
        id: "t5-2-t5-13",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde hem ünsüz benzeşmesi (sertleşme) hem de ünsüz yumuşaması ses olayları 'aynı anda' sırasıyla gerçekleşmiştir?",
        options: ["Kitapçılık", "Gidiyor", "Sertleşmiş", "Yatağı"],
        correct: 0,
        explanation: "Kitap-çı (sertleşme) ve kelimenin devamındaki ek yapıları dil bilgisindeki çoklu ses olaylarına örnektir. (Çeldiricisi zor ve seçici bir sorudur)."
      },
      {
        id: "t5-2-t5-14",
        subject: "turkce",
        term: 2,
        prompt: "Metinde yazarın okuyucuya doğrudan vermek istediği ders, mesaj ve temel düşünceye ne ad verilir?",
        options: ["Metnin konusu", "Yardımcı fikir", "Ana fikir", "Metnin başlığı"],
        correct: 2,
        explanation: "Yazarın metni kaleme alma amacı olan ve okuyucunun çıkarması gereken ana ders 'Ana Fikir'dir."
      },
      {
        id: "t5-2-t5-15",
        subject: "turkce",
        term: 2,
        prompt: "Duyu organlarımızdan (göz, kulak, deri, dil, burun) en az biriyle algılayabildiğimiz varlıklara somut denir. Hangisi tamamen 'somut' anlamlı bir kelimedir?",
        options: ["Rüzgar", "Huzur", "Düşünce", "Adalet"],
        correct: 0,
        explanation: "Rüzgar gözle görülmese de derimizle (dokunma duyusuyla) net olarak hissedilebildiği için somut bir maddedir. Diğerleri soyuttur."
      }
    ],

    // ==========================================
    // 2. DÖNEM 6. TEST (15 Soru - Zorlaştırılmış / Şekilsiz)
    // ==========================================
    test6: [
      {
        id: "t5-2-t6-01",
        subject: "turkce",
        term: 2,
        prompt: "Yazılışları ve okunuşları aynı, anlamları tamamen farklı olan kelimelere sesteş (eş sesli) kelimeler denir. Hangisinde sesteş bir sözcük kullanılmamıştır?",
        options: [
          "Yaz tatilinde bol bol kitap okumayı planlıyorum.",
          "Yüz lira harçlık toplayıp kumbarasına attı.",
          "Odanın duvarını beyaza boyamak için fırça aldı.",
          "Bahçedeki koca kaz, çocukların arkasından koştu."
        ],
        correct: 2,
        explanation: "Yaz (mevsim/yazmak), yüz (sayı/çehre/yüzmek), kaz (hayvan/kazmak) sesteşken, 'duvar' kelimesinin sesteş karşılığı yoktur."
      },
      {
        id: "t5-2-t6-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde doğadaki cansız varlıklara veya hayvanlara insani özellikler yüklenerek 'kişileştirme' sanatı yapılmıştır?",
        options: [
          "Güneş sabah erkenden doğarak tüm şehri ısıttı.",
          "Yorgun bulutlar, gökyüzünde hüzünlü hüzünlü süzülüyordu.",
          "Rüzgarın şiddetiyle ağacın kuru dalları kırıldı.",
          "Küçük kedi yavaşça annesinin yanına sokuldu."
        ],
        correct: 1,
        explanation: "Bulutların 'yorgun' ve 'hüzünlü' olması insana ait duyguların doğaya aktarılmasıdır (Kişileştirme sanatı)."
      },
      {
        id: "t5-2-t6-03",
        subject: "turkce",
        term: 2,
        prompt: "Büyük ünlü uyumu kuralına göre kalın ünlülerden sonra kalın, ince ünlülerden sonra ince ünlü gelmelidir. Hangisinde bu kuralı 'bozan' bir ek kullanılmıştır?",
        options: ["Kalemlik", "Okurken", "Çiçekçi", "Simitçi"],
        correct: 1,
        explanation: "Okul kelimesi kalındır ancak üzerine gelen '-ken' zarf-fiil eki ince olduğu için kelimenin uyumunu tamamen bozar."
      },
      {
        id: "t5-2-t6-04",
        subject: "turkce",
        term: 2,
        prompt: "Bir durumdan duyulan rahatsızlığı, hoşnutsuzluğu sitem etmeden, üçüncü şahıslara veya genel olarak dile getirmeye yakınma denir. Hangisi bir 'yakınma' cümlesidir?",
        options: [
          "Keşke dün akşam ben de sizinle o güzel filme gelseydim.",
          "Ödevlerini zamanında yapmamasından ve bu vurdumduymazlığından bıktım artık.",
          "Buralara kadar gelip de beni ziyaret etmemen beni derinden üzdü.",
          "Planlı çalışırsan sınavda hedeflediğin başarıya ulaşırsın."
        ],
        correct: 1,
        explanation: "B seçeneğinde kişinin sürekli tekrar eden olumsuz durumundan duyulan net şikayet ve rahatsızlık (yakınma) dile getirilmiştir. C şıkkı ise sitemdir."
      },
      {
        id: "t5-2-t6-05",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki sözcüklerin hangisinde, ünlüyle başlayan bir ek aldığında sonundaki sert ünsüzün yumuşaması kuralı 'görülmez'?",
        options: ["Sokak", "Kitap", "Hukuk", "Ağaç"],
        correct: 2,
        explanation: "Hukuk kelimesi ünlü eki aldığında 'hukuka' şeklinde kalır, yumuşayarak 'hukuğa' olmaz. Bu durum yumuşama kuralına aykırılıktır."
      },
      {
        id: "t5-2-t6-06",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki deyimlerden hangisi 'büyük bir telaş, heyecan ve korku içinde sağa sola koşturmak' anlamını karşılar?",
        options: [
          "Etekleri tutuşmak",
          "Gözü korkmak",
          "Dili dolaşmak",
          "İçi cız etmek"
        ],
        correct: 0,
        explanation: "Etekleri tutuşmak deyimi, beklenmedik bir olay karşısında yaşanan aşırı telaş, korku ve heyecan durumunu anlatır."
      },
      {
        id: "t5-2-t6-07",
        subject: "turkce",
        term: 2,
        prompt: "'Yol' sözcüğü aşağıdaki cümlelerin hangisinde 'bir problemi çözmek için başvurulan yöntem, metod veya çare' anlamında kullanılmıştır?",
        options: [
          "Bu engebeli yol bizi doğrudan köye ulaştıracak.",
          "Matematik sorusunu çözmenin daha kısa bir yolunu buldum.",
          "Yolun kenarına dikilen fidanlar kurumuştu.",
          "Kar yağışı nedeniyle ana yollar trafiğe kapandı."
        ],
        correct: 1,
        explanation: "B seçeneğindeki yol, fiziksel bir güzergah değil, zihinsel bir yöntem, çare ve metod anlamındadır."
      },
      {
        id: "t5-2-t6-08",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde eylemin yapılma amacı gerekçesiyle birlikte 'amaç-sonuç' ilişkisi oluşturacak şekilde verilmiştir?",
        options: [
          "Uykusu geldiği için televizyonun karşısında sızıp kalmış.",
          "Kardeşine sürpriz yapmak amacıyla gizlice bu güzel oyuncağı almış.",
          "Yağmur aniden bastırınca sokaktaki herkes kapalı alanlara kaçıştı.",
          "Yorgun olduğundan akşamki toplantıya katılamayacağını belirtti."
        ],
        correct: 1,
        explanation: "Oyuncağı alma eylemi 'kardeşine sürpriz yapmak amacıyla' gerçekleştirildiği için saf bir amaç-sonuç ilişkisidir."
      },
      {
        id: "t5-2-t6-09",
        subject: "turkce",
        term: 2,
        prompt: "Cümle içinde ara sözlerin veya ana cümleden bağımsız ek açıklamaların başında ve sonunda hangi noktalama işareti çifti kullanılabilir?",
        options: ["İki nokta", "Kısa çizgi", "Noktalı virgül", "Üç nokta"],
        correct: 1,
        explanation: "Ara sözlerin veya ara cümlelerin başında ve sonunda ya virgül (,) ya da kısa çizgi (-) kullanılır."
      },
      {
        id: "t5-2-t6-10",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerden hangisi yapım eki alarak kökünden tamamen yeni anlamlı türemiş bir sözcüğe dönüşmüştür?",
        options: ["Evler", "Sıradan", "Gözcü", "Masada"],
        correct: 2,
        explanation: "Göz isminden '-cü' eki gelerek 'gözleme işini yapan kişi' anlamında türemiş yeni bir kelime oluşmuştur."
      },
      {
        id: "t5-2-t6-11",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde bir durum abartılarak mübalağa sanatı yapılmıştır?",
        options: [
          "O kadar çok ağladı ki odanın içi gözyaşlarıyla göle döndü.",
          "Kar taneleri havada adeta dans ederek yere iniyordu.",
          "Papatyalar sabah güneşine neşeyle selam verdi.",
          "Dondurma buz gibi soğuk olduğu için boğazı şişmiş."
        ],
        correct: 0,
        explanation: "Odanın gözyaşlarıyla göle dönmesi gerçek hayatta imkansız olan devasa bir abartma örneğidir."
      },
      {
        id: "t5-2-t6-12",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki atasözlerinden hangisi 'tutumlu olmanın ve küçük birikimlerin gelecekteki önemini' anlatır?",
        options: [
          "Ak akçe kara gün içindir.",
          "İşleyen demir ışıldar.",
          "Ağaç yaşken eğilir.",
          "Damlaya damlaya göl olur."
        ],
        correct: 3,
        explanation: "Damlaya damlaya göl olur atasözü, küçük ve önemsiz görülen birikimlerin zamanla büyük bir değere ulaşacağını anlatır."
      },
      {
        id: "t5-2-t6-13",
        subject: "turkce",
        term: 2,
        prompt: "Gerçekleşmemiş bir durumu bir anlığına gerçekleşmiş gibi kabul etmeye varsayım denir. Hangisi bir 'varsayım' cümlesidir?",
        options: [
          "Diyelim ki bu zorlu sınavdan tam puan aldın, ne yaparsın?",
          "Belki yarın akşam kütüphanede buluşup çalışabiliriz.",
          "Keşke derslerime daha planlı ve düzenli çalışsaydım.",
          "Sanki tüm bu hatayı ben yapmışım gibi yüzüme bakıyor."
        ],
        correct: 0,
        explanation: "'Diyelim ki, farz et ki, tut ki' gibi ifadeler cümleye doğrudan varsayım anlamı katar."
      },
      {
        id: "t5-2-t6-14",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'ince' sözcüğü tamamen gerçek anlamının dışında (mecaz) kullanılmıştır?",
        options: [
          "İnce bir dal parçasıyla toprağı kazmaya çalışıyordu.",
          "Bugün hava serin olduğu için üzerine ince bir ceket aldı.",
          "Bize karşı gösterdiği o ince ve nazik davranışları herkesi etkiledi.",
          "Kitabın ince sayfaları aceleyle çevirirken yırtıldı."
        ],
        correct: 2,
        explanation: "Davranışın ince olması fiziksel kalınlıkla ilgili değil, kibarlık ve zarafet ile ilgilidir, yani mecazdır."
      },
      {
        id: "t5-2-t6-15",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde tamamlanmamış veya yüklemi söylenmeyip okuyucuya bırakılmış bir cümlenin sonuna konması gereken doğru noktalama işareti kullanılmıştır?",
        options: [
          "Karşımızda masmavi bir deniz ve alabildiğine uzanan kumsallar...",
          "Ödevlerini bitirdin mi hemen dışarı çıkabilirsin.",
          "Eyvah, yangın tüpünü aşağıda unutmuşuz!",
          "Toplantı salonunda toplam yirmi beş kişi sessizce bekliyordu."
        ],
        correct: 0,
        explanation: "A seçeneği yüklemi bulunmayan eksiltili bir cümledir ve sonuna üç nokta (...) gelmesi kurallara tam uygundur."
      }
    ],
  }
};
  }
};
