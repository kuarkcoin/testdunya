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
    ]
  }
};
