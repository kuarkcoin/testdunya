import { SubjectData } from "./types";

export const turkceData: SubjectData = {
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
          "Odunları baltayla kırdı.",
        ],
        correct: 2,
        explanation:
          "Gönül/kalp kırmak, üzmek anlamında kullanılan bir mecazdır.",
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
          "Siyah - Kara",
        ],
        correct: 3,
        explanation: "Siyah ve Kara eş anlamlıdır.",
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
          "Dondurma harika bir yiyecek.",
        ],
        correct: 1,
        explanation: "Başkent bilgisi kanıtlanabilir gerçektir.",
      },
      {
        id: "t5-1-04",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi yapım eki almıştır?",
        options: ["Evler", "Gözlük", "Masa", "Kalemim"],
        correct: 1,
        explanation: "Göz'den gözlük türemiştir.",
      },
      {
        id: "t5-1-05",
        subject: "turkce",
        term: 1,
        prompt: "Hangisi bir deyimdir?",
        options: ["Göz atmak", "Kitap okumak", "Okula gitmek", "Yemek yemek"],
        correct: 0,
        explanation: "Göz atmak kalıplaşmış bir deyimdir.",
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
          "Ayağını yorganına göre uzat.",
        ],
        correct: 2,
        explanation: "Bu genel bir bilgi cümlesidir.",
      },
      {
        id: "t5-1-14",
        subject: "turkce",
        term: 1,
        prompt:
          "'Yüz' kelimesi hangi cümlede farklı bir anlamda kullanılmıştır?",
        options: [
          "Denizde yüzmeyi çok severim.",
          "Defterine bir yüz çizdi.",
          "Bayramda yüz lira topladı.",
          "Düğünde yüz kişi vardı.",
        ],
        correct: 0,
        explanation: "Yüzmek fiildir.",
      },
      {
        id: "t5-1-16",
        subject: "turkce",
        term: 1,
        prompt:
          "'Çocuklar parkta neşeyle oynuyor.' cümlesinde işi yapan (özne) kimdir?",
        options: ["Parkta", "Neşeyle", "Çocuklar", "Oynuyor"],
        correct: 2,
        explanation: "Özne çocuklardır.",
      },
      {
        id: "t5-1-18",
        subject: "turkce",
        term: 1,
        prompt:
          "'Okumak' kelimesine hangi ek gelirse 'okuma işini yapan kişi' anlamı kazanır?",
        options: ["-luk", " -cu", " -an", " -man"],
        correct: 2,
        explanation: "Okuyan anlamı verir.",
      },
      {
        id: "t5-zn-11",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi 'soyut' bir anlam taşır?",
        options: ["Hava", "Sevgi", "Gözlük", "Çiçek"],
        correct: 1,
        explanation: "Sevgi soyuttur.",
      },
      {
        id: "t5-zn-13",
        subject: "turkce",
        term: 1,
        prompt:
          "'Sıcak' kelimesi hangi cümlede gerçek anlamı dışında (mecaz) kullanılmıştır?",
        options: [
          "Sıcak çorba içti.",
          "Hava bugün çok sıcak.",
          "Bizi çok sıcak karşıladı.",
          "Sıcak sudan eli yandı.",
        ],
        correct: 2,
        explanation: "Sıcak karşılamak mecazdır.",
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
          "Sakla samanı gelir zamanı.",
        ],
        correct: 1,
        explanation: "Çalışkanlığı vurgular.",
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
          "Bu film çok sıkıcı.",
        ],
        correct: 2,
        explanation: "Nesnel bir gerçektir.",
      },
      {
        id: "t5-zn-19",
        subject: "turkce",
        term: 1,
        prompt: "Hangisi bir 'hikaye unsuru' değildir?",
        options: ["Yer", "Zaman", "Kişiler", "Ana fikir"],
        correct: 3,
        explanation: "Ana fikir mesajdır.",
      },
      {
        id: "t5-hard-nv-01",
        subject: "turkce",
        term: 1,
        prompt:
          "'Kuyumcu titizliğiyle çalışmak' sözüyle anlatılmak istenen temel düşünce nedir?",
        options: [
          "Çok zengin olmak",
          "Çok yavaş hareket etmek",
          "İşini büyük bir özen ve dikkatle yapmak",
          "Değerli taşlarla uğraşmak",
        ],
        correct: 2,
        explanation: "Aşırı özen anlamındadır.",
      },
      {
        id: "t5-hard-nv-03",
        subject: "turkce",
        term: 1,
        prompt:
          "'Ağır' kelimesi hangi cümlede 'ciddi, vakarlı' anlamında kullanılmıştır?",
        options: [
          "Bu çanta çok ağır.",
          "Bugün ağır bir yemek yedik.",
          "Onun çok ağır bir kişiliği vardı.",
          "Ağır adımlarla yürüdü.",
        ],
        correct: 2,
        explanation: "Vakarlı anlamındadır.",
      },
      {
        id: "t5-adv-01",
        subject: "turkce",
        term: 1,
        prompt:
          "'Bakmak' kelimesi aşağıdaki cümlelerin hangisinde 'incelemek, araştırmak' anlamında kullanılmıştır?",
        options: [
          "Pencereden dışarı bakıyor.",
          "Annem bize çok iyi baktı.",
          "Bu konuya sözlükten bakmalısın.",
          "Eski fotoğraflara bakıp ağladı.",
        ],
        correct: 2,
        explanation: "Sözlükten bakmak araştırmaktır.",
      },
      {
        id: "t5-adv-03",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi seçenekteki deyim 'çok korkmak / telaşlanmak' anlamını karşılar?",
        options: [
          "Gözüne girmek",
          "Kulak asmamak",
          "Etekleri tutuşmak",
          "Ağzı kulaklarına varmak",
        ],
        correct: 2,
        explanation: "Korku ve telaş anlamındadır.",
      },
      {
        id: "t5-adv-05",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerin hangisi hem 'yapım eki' hem 'çekim eki' almıştır?",
        options: ["Kitapçıdan", "Gözlük", "Masanın", "Kalemler"],
        correct: 0,
        explanation: "Kitap-çı-dan.",
      },
      {
        id: "t5-1-20",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'kişileştirme' sanatı yapılmıştır?",
        options: [
          "Güneş her sabah erkenden doğar.",
          "Kuşlar ağaçlarda neşeyle ötüyor.",
          "Rüzgar bugün çok sert esiyor.",
          "Güneş, bulutların arkasına saklanmış bize küsmüştü.",
        ],
        correct: 3,
        explanation:
          "Güneşin 'küsmesi' insana ait bir özelliktir. Bu özelliğin doğadaki bir varlığa verilmesine kişileştirme denir.",
      },
    ],

    // 1. DÖNEM 2. TEST (Yeni Hazırladığımız 20 Soru)
    test2: [
      {
        id: "t5-1-t2-01",
        subject: "turkce",
        term: 1,
        prompt:
          "'Dalmak' sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?",
        options: [
          "Çocuk, derin sulara bir balık gibi daldı.",
          "Sıcak havada serinlemek için havuza daldım.",
          "Kitabı okurken öyle bir daldı ki zil sesini duymadı.",
          "Bahçedeki çiçeklerin kokusuna daldı gitti.",
        ],
        correct: 2,
        explanation:
          "C seçeneğinde 'dalmak', bir işle çok meşgul olup çevreyi fark etmemek anlamında kullanılmıştır, yani mecazdır.",
      },
      {
        id: "t5-1-t2-02",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki deyimlerden hangisi 'çok önemsememek, aldırış etmemek' anlamındadır?",
        options: [
          "Kulak asmamak",
          "Gözü dönmek",
          "Etekleri zil çalmak",
          "Gönül koymak",
        ],
        correct: 0,
        explanation:
          "Kulak asmamak deyimi, söylenene önem vermemek ve aldırış etmemek anlamına gelir.",
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
          "TBMM 23 Nisan 1920'de açıldı.",
        ],
        correct: 0,
        explanation:
          "'Akşamki' kelimesindeki '-ki' sıfat yapan ektir ve bitişik yazılmalıdır.",
      },
      {
        id: "t5-1-t2-04",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması kuralına aykırı bir durum vardır?",
        options: ["Kitabı", "Sepeti", "Uçağı", "Ekmeği"],
        correct: 1,
        explanation:
          "Sepet kelimesi ünlüyle başlayan ek aldığında 'sepedi' olmaz, sertliğini korur. Bu yumuşama kuralına aykırılıktır.",
      },
      {
        id: "t5-1-t2-05",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'amaç-sonuç' ilişkisi vardır?",
        options: [
          "Kar yağdığı için yollar kapandı.",
          "Seni göreyim diye bu kadar yolu geldim.",
          "Çalışmadığı için zayıf not aldı.",
          "Hava ısınınca herkes dışarı fırladı.",
        ],
        correct: 1,
        explanation:
          "Burada 'seni görmek amacıyla' anlamı vardır, bu yüzden amaç-sonuç cümlesidir.",
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
          "Bir elin nesi var iki elin sesi var.",
        ],
        correct: 0,
        explanation:
          "Sakla samanı gelir zamanı atasözü, gereksiz görülen şeylerin saklanması ve tutumlu olunması gerektiğini anlatır.",
      },
      {
        id: "t5-1-t2-07",
        subject: "turkce",
        term: 1,
        prompt: "'Gözlemci' kelimesinin kökü aşağıdakilerden hangisidir?",
        options: ["Gözlem", "Gözle", "Göz", "İz"],
        correct: 2,
        explanation:
          "Gözlemci kelimesinin anlamlı en küçük parçası olan kökü 'Göz' ismidir.",
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
          "Güneş doğudan doğar, batıdan batar.",
        ],
        correct: 2,
        explanation:
          "'Etkilemek' kişiden kişiye değişen bir yorumdur, bu yüzden öznel bir yargıdır.",
      },
      {
        id: "t5-1-t2-09",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede ünsüz benzeşmesi (sertleşme) vardır?",
        options: ["Çiçekçi", "Ağacı", "Gidiyor", "Kalemlik"],
        correct: 0,
        explanation:
          "Çiçek-çi kelimesinde 'k' sert sessizinden sonra gelen 'c' sesi 'ç'ye dönüşmüştür (sertleşmiştir).",
      },
      {
        id: "t5-1-t2-10",
        subject: "turkce",
        term: 1,
        prompt:
          "'Açık' sözcüğü hangisinde 'gizli olmayan, net' anlamında kullanılmıştır?",
        options: [
          "Kapı hala açık kalmış.",
          "Bugün hava çok açık görünüyor.",
          "Bize her şeyi açık bir dille anlattı.",
          "Üstü açık bir araba aldılar.",
        ],
        correct: 2,
        explanation:
          "Açık bir dil, anlaşılır ve gizli yönü olmayan bir anlatım demektir.",
      },
      {
        id: "t5-1-t2-11",
        subject: "turkce",
        term: 1,
        prompt:
          "Bir metinde olayların geçtiği yeri, zamanı ve kişileri anlatan unsurlara ne denir?",
        options: [
          "Ana fikir",
          "Hikaye unsurları",
          "Yardımcı fikirler",
          "Metnin başlığı",
        ],
        correct: 1,
        explanation:
          "Yer, zaman, kişiler ve olay, hikaye (anlatı) unsurlarını oluşturur.",
      },
      {
        id: "t5-1-t2-12",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelime yapım eki almamıştır?",
        options: ["Yolcu", "Kalemler", "Tuzluk", "Simitçi"],
        correct: 1,
        explanation:
          "Kalemler kelimesindeki '-ler' çoğul ekidir ve bir çekim ekidir, kelimenin anlamını değiştirmez.",
      },
      {
        id: "t5-1-t2-13",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisinin zıt anlamlısı yoktur?",
        options: ["Güzel", "Yaşlı", "Masa", "Cömert"],
        correct: 2,
        explanation: "Masa somut bir nesne adıdır ve zıt anlamlısı bulunmaz.",
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
          "Gülme komşuna gelir başına.",
        ],
        correct: 1,
        explanation:
          "Bu atasözü, işlerin birlikte ve yardımlaşarak daha iyi yapıldığını anlatır.",
      },
      {
        id: "t5-1-t2-15",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerden hangisi 'hayal ürünü' bir öğe içermektedir?",
        options: [
          "Bulutlar gökyüzünde pamuk gibi süzülüyordu.",
          "Küçük kedi ağaca tırmanmaya çalıştı.",
          "Ay dede bu gece bize göz kırpıyordu.",
          "Yağmurun sesiyle uykudan uyandım.",
        ],
        correct: 2,
        explanation:
          "Ay'ın göz kırpması gerçek hayatta mümkün olmayan, hayali bir olaydır.",
      },
      {
        id: "t5-1-t2-16",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede ünlü düşmesi vardır?",
        options: ["Gönlüm", "Çiçeğim", "Resmi", "Kitapta"],
        correct: 0,
        explanation: "Gönül-üm birleşince 'ü' harfi düşerek 'Gönlüm' olur.",
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
          "En sevdiğim mevsim kış mevsimidir.",
        ],
        correct: 1,
        explanation: "Üçgenin tanımı bilimseldir ve kişiden kişiye değişmez.",
      },
      {
        id: "t5-1-t2-18",
        subject: "turkce",
        term: 1,
        prompt:
          "'Bu çocuk çok akıllı ancak biraz tembel.' cümlesindeki 'ancak' kelimesi ne tür bir anlam katmıştır?",
        options: [
          "Neden-sonuç",
          "Düşüncenin akışını değiştirme",
          "Amaç-sonuç",
          "Benzerlik",
        ],
        correct: 1,
        explanation:
          "'Ancak' kelimesi olumlu bir cümleden olumsuz bir özelliğe geçerken kullanılır, akışı değiştirir.",
      },
      {
        id: "t5-1-t2-19",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki noktalama işaretlerinden hangisi tamamlanmamış cümlelerin sonuna konur?",
        options: ["Nokta", "Ünlem", "Üç Nokta", "Soru İşareti"],
        correct: 2,
        explanation:
          "Henüz bitmemiş veya devamı okuyucuya bırakılmış cümlelerin sonuna üç nokta (...) konur.",
      },
      {
        id: "t5-1-t2-20",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi kelime grubunda eş anlamlı kelimeler bir arada verilmiştir?",
        options: [
          "Siyah - Beyaz",
          "Okul - Mektep",
          "Hızlı - Yavaş",
          "Büyük - Küçük",
        ],
        correct: 1,
        explanation:
          "Okul ve Mektep aynı anlama gelen eş anlamlı kelimelerdir.",
      },
    ],
    // turkceData.term1 içinde test2'den sonra eklenecek
    test3: [
      {
        id: "t5-1-t3-01",
        subject: "turkce",
        term: 1,
        prompt:
          "(1) Kitaplar, insan ruhunun en sadık dostlarıdır. (2) Bir sayfa çevirdiğinizde kendinizi bambaşka bir dünyada bulursunuz. (3) Günümüzde kağıt fiyatlarındaki artış yayınevlerini zorlamaktadır. (4) Bu dostluk, size hiçbir karşılık beklemeden bilgi ve huzur sunar. Yukarıdaki metinde anlam akışını bozan cümle hangisidir?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation:
          "Metin genel olarak kitapların manevi değerinden bahsederken, 3. cümle tamamen ekonomik bir konuya değindiği için akışı bozmaktadır.",
      },
      {
        id: "t5-1-t3-02",
        subject: "turkce",
        term: 1,
        prompt:
          "'Sıcak' sözcüğü aşağıdaki cümlelerin hangisinde 'samimi' anlamında kullanılmıştır?",
        options: [
          "Fırından yeni çıkmış sıcak ekmekleri aldık.",
          "Bizi kapıda çok sıcak bir gülümsemeyle karşıladı.",
          "Yazın bu sıcak günlerinde denize girmek harika.",
          "Sıcak çorbayı içer içmez içim ısındı.",
        ],
        correct: 1,
        explanation:
          "Sıcak bir gülümseme, fiziksel ısıyı değil, davranışlardaki samimiyeti ifade eden mecaz bir kullanımdır.",
      },
      {
        id: "t5-1-t3-03",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde bir 'koşul (şart)' anlamı vardır?",
        options: [
          "Ödevlerini bitirirsen dışarı çıkıp oynayabilirsin.",
          "Geç uyandığı için servisi kaçırdı.",
          "Kütüphaneye kitap iade etmek için gitti.",
          "Arkadaşına sürpriz yapmak amacıyla hediye aldı.",
        ],
        correct: 0,
        explanation:
          "Dışarı çıkıp oynama eylemi, ödevlerin bitirilmesi şartına (koşuluna) bağlanmıştır.",
      },
      {
        id: "t5-1-t3-04",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünlü daralması' vardır?",
        options: ["Koşuyor", "Gülüyor", "Bekliyor", "Bakıyor"],
        correct: 2,
        explanation:
          "Bekle- fiili '-yor' eki aldığında sondaki 'e' sesi daralarak 'i'ye dönüşür (Bekliyor).",
      },
      {
        id: "t5-1-t3-05",
        subject: "turkce",
        term: 1,
        prompt:
          "'Dünya kadar işim var.' cümlesinde kullanılan söz sanatı aşağıdakilerden hangisidir?",
        options: ["Benzetme", "Kişileştirme", "Abartma", "Konuşturma"],
        correct: 2,
        explanation:
          "İşin çokluğu, dünya ile kıyaslanarak mübalağa edilmiş (abartılmış) bir şekilde anlatılmıştır.",
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
          "Varlık - Papatya - Bitki - Canlı",
        ],
        correct: 1,
        explanation:
          "En dar kapsamlı olan papatyadan, en geniş kapsamlı olan varlığa doğru bir sıralama yapılmıştır.",
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
          "Sincap sokak",
        ],
        correct: 1,
        explanation:
          "Bitki veya hayvan adı olan birleşik kelimeler eğer gerçek anlamını kaybetmişse bitişik yazılır: 'Aslanağzı'.",
      },
      {
        id: "t5-1-t3-08",
        subject: "turkce",
        term: 1,
        prompt:
          "'Boş' kelimesi aşağıdaki cümlelerin hangisinde 'işsiz, boşta olan' anlamında kullanılmıştır?",
        options: [
          "Bu kutu tamamen boş çıktı.",
          "Bugün boş bir vaktim var, görüşebiliriz.",
          "Boş laflarla beni oyalamayın.",
          "Odada sadece boş sandalyeler vardı.",
        ],
        correct: 1,
        explanation:
          "Vaktin boş olması, yapacak bir işin olmadığını ifade eder.",
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
          "Meyvelerden sadece elmayı çok severim.",
        ],
        correct: 3,
        explanation:
          "D seçeneğinde bir tercih belirtilmiştir ancak iki varlık veya durum arasında kıyas yapılmamıştır.",
      },
      {
        id: "t5-1-t3-10",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerden hangisi 'soyut' bir kavramı ifade eder?",
        options: ["Işık", "Rüzgar", "Adalet", "Ses"],
        correct: 2,
        explanation:
          "Işık, rüzgar ve ses duyu organlarımızla algılanabilirken, adalet zihinsel bir kavramdır (soyuttur).",
      },
      {
        id: "t5-1-t3-11",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki atasözlerinden hangisi 'umut' ve 'çaresizlik' ile ilgilidir?",
        options: [
          "Damlaya damlaya göl olur.",
          "Denize düşen yılana sarılır.",
          "Ayağını yorganına göre uzat.",
          "Gülme komşuna gelir başına.",
        ],
        correct: 1,
        explanation:
          "Zor durumda kalan insanın her türlü çareye başvurabileceğini anlatan bir atasözüdür.",
      },
      {
        id: "t5-1-t3-12",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede 'ünsüz türemesi' vardır?",
        options: ["Hissetti", "Gitti", "Baktı", "Sattı"],
        correct: 0,
        explanation: "His-etmek birleşirken 's' sesi türer ve 'hissetti' olur.",
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
          "Film, İstanbul'un tarihi semtlerinde çekilmiş.",
        ],
        correct: 1,
        explanation:
          "Renklerin 'uyumlu' olması kişisel bir beğenidir ve kanıtlanamaz.",
      },
      {
        id: "t5-1-t3-14",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'benzetme' sanatı yapılmıştır?",
        options: [
          "Zeytin gibi siyah gözleri vardı.",
          "Dağlar bu sabah bembeyazdı.",
          "Kuşlar gökyüzünde dans ediyordu.",
          "Ağaçlar kışın uykusuna yattı.",
        ],
        correct: 0,
        explanation:
          "Gözlerin rengi, 'gibi' edatı kullanılarak zeytine benzetilmiştir.",
      },
      {
        id: "t5-1-t3-15",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelime yapısı bakımından diğerlerinden farklıdır?",
        options: ["Kitaplık", "Gözlük", "Bilgi", "Sıra"],
        correct: 3,
        explanation:
          "Sıra kelimesi kök halindedir (basittir), diğerleri ise yapım eki almış türemiş kelimelerdir.",
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
          "Yardımcı fikir cümlesi",
        ],
        correct: 1,
        explanation:
          "Ana fikir, metnin bütününde anlatılmak istenen temel mesajı verir.",
      },
      {
        id: "t5-1-t3-17",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerin hangisinde yazım yanlışı vardır?",
        options: ["Pek çok", "Herşey", "Birkaç", "Hiçbir"],
        correct: 1,
        explanation: "'Şey' kelimesi her zaman ayrı yazılır: 'Her şey'.",
      },
      {
        id: "t5-1-t3-18",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi cümlede virgül (,) 'eş görevli kelimeleri ayırmak' için kullanılmıştır?",
        options: [
          "Pazardan elma, armut, muz aldım.",
          "Evet, ben de seninle geleceğim.",
          "Akşam eve geldi, hemen uyudu.",
          "Genç, kadının elindeki çantayı aldı.",
        ],
        correct: 0,
        explanation:
          "Elma, armut ve muz kelimeleri aynı görevde (nesne) olan kelimelerdir.",
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
          "Gözüne girmek",
        ],
        correct: 2,
        explanation:
          "Ani bir korku veya heyecan durumunu anlatan bir deyimdir.",
      },
      {
        id: "t5-1-t3-20",
        subject: "turkce",
        term: 1,
        prompt: "'Okul' kelimesinin eş anlamlısı aşağıdakilerden hangisidir?",
        options: ["Öğrenci", "Mektep", "Sınıf", "Muallim"],
        correct: 1,
        explanation:
          "Okul ve mektep sözcükleri aynı anlamı karşılayan kelimelerdir.",
      },
    ],
    test4: [
      {
        id: "t5-1-t4-01",
        subject: "turkce",
        term: 1,
        prompt:
          "'Ağız' sözcüğü aşağıdaki cümlelerin hangisinde 'bir yerin giriş kısmı' anlamında kullanılmıştır?",
        options: [
          "Doktor, çocuğun ağzına bakıp ilaç yazdı.",
          "Kavanozun ağzı sıkıca kapatılmadığı için bal dökülmüş.",
          "Bu ağızla konuşursan kimse seni dinlemez.",
          "Onun ağzı çok kalabalıktır, her şeyi anlatır.",
        ],
        correct: 1,
        explanation:
          "Kavanozun ağzı, o nesnenin giriş/açıklık kısmıdır. Bu, sözcüğün yan anlamıdır.",
      },
      {
        id: "t5-1-t4-02",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'kanıtlanabilirlik' açısından diğerlerinden farklı bir yargı vardır?",
        options: [
          "Yazarın son kitabı toplam 12 hikayeden oluşuyor.",
          "Okulumuzun bahçesinde on tane çınar ağacı var.",
          "Mavi renkli elbiseler sana çok yakışıyor.",
          "Türkiye'nin en uzun nehri Kızılırmak'tır.",
        ],
        correct: 2,
        explanation:
          "C seçeneği kişisel bir beğenidir (öznel), diğerleri ise herkesçe kabul edilen gerçeklerdir (nesnel).",
      },
      {
        id: "t5-1-t4-03",
        subject: "turkce",
        term: 1,
        prompt: "Hangi seçenekteki deyim 'çok yorulmak' anlamını taşır?",
        options: [
          "Canı çıkmak",
          "Gözden düşmek",
          "Kulak kabartmak",
          "Burnundan solumak",
        ],
        correct: 0,
        explanation:
          "'Canı çıkmak' deyimi aşırı yorgunluğu ve bitkinliği ifade etmek için kullanılır.",
      },
      {
        id: "t5-1-t4-04",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerden hangisi 'türetilirken' ünlü kaybına uğramıştır?",
        options: ["Boynu", "Aklı", "Kıvrak", "Şehri"],
        correct: 2,
        explanation:
          "Kıvır-ak kelimesi birleşirken 'ı' sesi düşer ve 'kıvrak' olur. Bu, türeme sırasında olan bir ünlü düşmesidir.",
      },
      {
        id: "t5-1-t4-05",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'doğrudan anlatım' yapılmıştır?",
        options: [
          "Annem, ödevlerimi bitirmemi söyledi.",
          "Öğretmenimiz, dürüstlük en büyük hazinedir, dedi.",
          "Arkadaşım yarın bize gelemeyeceğini belirtti.",
          "Babam akşam eve geç kalacağını haber verdi.",
        ],
        correct: 1,
        explanation:
          "Başkasının sözü hiçbir değişikliğe uğratılmadan, tırnak içinde veya olduğu gibi verildiği için doğrudan anlatımdır.",
      },
      {
        id: "t5-1-t4-06",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki altı çizili sözcüklerden hangisi somut anlamlıyken mecazlaşarak soyut bir anlam kazanmıştır?",
        options: [
          "Bu yolda çok emek harcadık.",
          "Odanın havası çok basıktı.",
          "Bize karşı çok soğuk davrandı.",
          "Kutunun içinde sert bir cisim var.",
        ],
        correct: 2,
        explanation:
          "'Soğuk' aslında dokunma duyusuyla algılanan somut bir kavramdır, ancak 'davranış' için kullanıldığında 'ilgisiz/samimiyetsiz' anlamında soyutlaşmıştır.",
      },
      {
        id: "t5-1-t4-07",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'ünsüz benzeşmesi' kuralına uyulmamasından kaynaklanan bir yazım yanlışı vardır?",
        options: [
          "Saat üçde buluşalım.",
          "Kitapçıdan yeni bir kalem aldım.",
          "Sınıfça pikniğe gittik.",
          "Ağaçtan elma topladık.",
        ],
        correct: 0,
        explanation:
          "Üç kelimesi 'ç' (sert) ile biter, yanına gelen ek 't' olmalıdır. 'Üçte' şeklinde yazılmalıdır.",
      },
      {
        id: "t5-1-t4-08",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki atasözlerinden hangisi 'tecrübe ve öğüt' anlamı taşımaz?",
        options: [
          "Sütten ağzı yanan yoğurdu üfleyerek yer.",
          "Bin bilsen de bir bilene danış.",
          "Damlaya damlaya göl olur.",
          "Armut piş ağzıma düş.",
        ],
        correct: 3,
        explanation:
          "'Armut piş ağzıma düş', çaba harcamadan her şeyin hazır gelmesini bekleyen tembel kişiler için kullanılan eleştirel bir sözdür.",
      },
      {
        id: "t5-1-t4-09",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi cümlede virgül (,) kaldırılırsa cümlenin anlamı değişir?",
        options: [
          "Genç, adamın arkasından seslendi.",
          "Elmalar, armutlar sepete dolduruldu.",
          "Yarın, hepimiz kütüphanede olacağız.",
          "Koştu, yoruldu ama pes etmedi.",
        ],
        correct: 0,
        explanation:
          "Virgül kalkarsa 'genç adam' sıfat tamlaması olur ve seslenen kişi belirsizleşir.",
      },
      {
        id: "t5-1-t4-10",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisinin kökü 'fiil'dir?",
        options: ["Sevgi", "Gözlük", "Sulu", "Kitapçı"],
        correct: 0,
        explanation:
          "Sevgi kelimesinin kökü 'sev-' fiilidir. Diğerleri isim köküdür.",
      },
      {
        id: "t5-1-t4-11",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'neden-sonuç' ilişkisi vardır?",
        options: [
          "Okula gitmek üzere evden çıktı.",
          "Başarmak için düzenli çalışmalısın.",
          "Kar yağınca köy yolları ulaşıma kapandı.",
          "Seni görmek amacıyla buraya geldim.",
        ],
        correct: 2,
        explanation: "Köy yollarının kapanmasının nedeni kar yağmasıdır.",
      },
      {
        id: "t5-1-t4-12",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki birleşik kelimelerin hangisinde yazım yanlışı vardır?",
        options: ["Hanımeli", "Kuşburnu", "Gök yüzü", "Buzdolabı"],
        correct: 2,
        explanation:
          "'Gökyüzü' anlam kaybı ve kalıplaşma nedeniyle bitişik yazılmalıdır.",
      },
      {
        id: "t5-1-t4-13",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir 'öz eleştiri' cümlesidir?",
        options: [
          "Arkadaşım planlı çalışmadığı için başarısız oldu.",
          "Zamanımı verimli kullanmadığım için işlerimi yetiştiremedim.",
          "Bu yazarın dili oldukça ağır ve anlaşılmaz.",
          "Dersin bu kadar sıkıcı olacağını tahmin etmemiştim.",
        ],
        correct: 1,
        explanation:
          "Kişinin kendi davranışlarını veya hatalarını eleştirmesine öz eleştiri denir.",
      },
      {
        id: "t5-1-t4-14",
        subject: "turkce",
        term: 1,
        prompt:
          "'Kuru' kelimesi hangisinde 'zayıf, cılız' anlamında kullanılmıştır?",
        options: [
          "Kuru odunlar çabuk yandı.",
          "Çamaşırlar balkonda kurumuş.",
          "Kuru bir çocuk kapıyı açtı.",
          "Burası çok kuru bir iklime sahip.",
        ],
        correct: 2,
        explanation:
          "Kuru çocuk, zayıf ve çelimsiz çocuk anlamında kullanılmıştır.",
      },
      {
        id: "t5-1-t4-15",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'konuşturma (intak)' sanatı yapılmıştır?",
        options: [
          "Güneş, dağların ardından bize gülümsedi.",
          "Deniz, hırçın dalgalarıyla sahili dövüyordu.",
          "Küçük papatya: 'Suya ihtiyacım var' dedi.",
          "Bulutlar pamuk şekerler gibi süzülüyordu.",
        ],
        correct: 2,
        explanation:
          "Papatya konuşturulduğu için konuşturma sanatı yapılmıştır.",
      },
      {
        id: "t5-1-t4-16",
        subject: "turkce",
        term: 1,
        prompt: "Bir metnin yardımcı fikirleri ile ilgili hangisi yanlıştır?",
        options: [
          "Ana fikri desteklerler.",
          "Paragrafta sayıları birden fazla olabilir.",
          "Metnin en genel yargısıdır.",
          "Ana fikrin daha iyi anlaşılmasını sağlarlar.",
        ],
        correct: 2,
        explanation:
          "Metnin en genel yargısı ana fikirdir, yardımcı fikirler ise detaylardır.",
      },
      {
        id: "t5-1-t4-17",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi seçenekte 'ünsüz yumuşaması'na uğrayan bir kelime yoktur?",
        options: ["Yüreğim", "Ağacı", "Kağıdı", "Sütçü"],
        correct: 3,
        explanation:
          "Sütçü kelimesinde benzeşme (sertleşme) vardır, yumuşama yoktur.",
      },
      {
        id: "t5-1-t4-18",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki deyimlerden hangisi 'çok sevinmek' anlamındadır?",
        options: [
          "Etekleri zil çalmak",
          "Burnunun dikine gitmek",
          "Göz yummak",
          "Kulak misafiri olmak.",
        ],
        correct: 0,
        explanation: "Büyük bir sevinç ve neşe durumunu anlatan deyimdir.",
      },
      {
        id: "t5-1-t4-19",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdakilerden hangisi bir 'anlamdaş (eş anlamlı)' kelime çifti değildir?",
        options: ["Cevap - Yanıt", "Yıl - Sene", "Beyaz - Ak", "Sert - Katı"],
        correct: 3,
        explanation:
          "Sert ve katı yakın anlamlı olabilir ama tam eş anlamlı değillerdir.",
      },
      {
        id: "t5-1-t4-20",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi noktalama işareti kendisinden sonra örnek verilecek cümlenin sonuna konur?",
        options: ["Noktalı Virgül", "İki Nokta", "Üç Nokta", "Virgül"],
        correct: 1,
        explanation:
          "Örnek verilecek veya açıklama yapılacak cümlelerin sonuna iki nokta (:) konur.",
      },
    ],
    test5: [
      {
        id: "t5-1-t5-01",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'perde' sözcüğü 'terim anlamıyla' kullanılmıştır?",
        options: [
          "Annem salonun perdelerini yeni yıkadı.",
          "Olayların arkasındaki sis perdesi henüz aralanmadı.",
          "Oyunun ikinci perdesinde dekor tamamen değişti.",
          "Gözlerine hırs perdesi inmiş, kimseyi görmüyor.",
        ],
        correct: 2,
        explanation:
          "Tiyatro ile ilgili bir kavram olarak kullanıldığı için 'perde' burada terim anlamlıdır.",
      },
      {
        id: "t5-1-t5-02",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki atasözlerinden hangisi 'dayanışma ve birliktelik' ile ilgili değildir?",
        options: [
          "Bir elin nesi var, iki elin sesi var.",
          "Yalnız taş duvar olmaz.",
          "Komşu komşunun külüne muhtaçtır.",
          "Ayağını yorganına göre uzat.",
        ],
        correct: 3,
        explanation:
          "D seçeneği tutumluluk ile ilgilidir, diğerleri ise toplumsal dayanışmayı vurgular.",
      },
      {
        id: "t5-1-t5-03",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'benzetme' sanatı yapılmıştır?",
        options: [
          "Kükremiş sel gibiyim, bendimi çiğner aşarım.",
          "Rüzgar bugün çok hırçın esiyor.",
          "Çiçekler susuzluktan boyunlarını büktü.",
          "Kitaplar en dürüst öğretmenlerdir.",
        ],
        correct: 0,
        explanation:
          "'Gibi' edatı kullanılarak kişi, gücü ve coşkusu yönünden kükremiş bir sele benzetilmiştir.",
      },
      {
        id: "t5-1-t5-04",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi kelimede 'ünlü düşmesi' kuralına aykırı bir durum vardır?",
        options: ["Beyni", "Karnı", "Hukuku", "Oğlu"],
        correct: 2,
        explanation:
          "Hukuk kelimesi yabancı kökenli olduğu için ünlüyle başlayan ek aldığında ortadaki 'u' düşmez.",
      },
      {
        id: "t5-1-t5-05",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'öznel' bir yargı söz konusudur?",
        options: [
          "Türkiye'nin başkenti Ankara'dır.",
          "Yazarın son romanı sürükleyici ve harika.",
          "Sıvılar konuldukları kabın şeklini alırlar.",
          "Haftada yedi gün vardır.",
        ],
        correct: 1,
        explanation:
          "Bir kitabın sürükleyici veya harika olması kişisel bir yorumdur, kanıtlanamaz.",
      },
      {
        id: "t5-1-t5-06",
        subject: "turkce",
        term: 1,
        prompt: "Hangi seçenekteki deyim 'çok şaşırmak' anlamını verir?",
        options: [
          "Ağzı kulaklarına varmak",
          "Küplere binmek",
          "Dili tutulmak",
          "Gözü yükseklerde olmak",
        ],
        correct: 2,
        explanation:
          "Dili tutulmak, aşırı şaşkınlık veya korku anında konuşamaz hale gelmektir.",
      },
      {
        id: "t5-1-t5-07",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kısaltmaların hangisine getirilen ek yanlıştır?",
        options: ["TDK'den", "THY'ye", "MEB'na", "TRT'de"],
        correct: 2,
        explanation:
          "Kısaltmalara gelen ekler son harfin okunuşuna göre gelir. 'MEB'e' şeklinde olmalıdır.",
      },
      {
        id: "t5-1-t5-08",
        subject: "turkce",
        term: 1,
        prompt:
          "'Düşmek' sözcüğü hangisinde 'bir yerde hissesine ayrılmak' anlamında kullanılmıştır?",
        options: [
          "Ağaçtan bir elma düştü.",
          "Miras paylaşımında bana bu ev düştü.",
          "Bugünlerde ateşimiz düştü.",
          "Onun gözünden çoktan düştü.",
        ],
        correct: 1,
        explanation:
          "Paylaşım sonucunda birine ayrılan payı ifade etmek için kullanılır.",
      },
      {
        id: "t5-1-t5-09",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'amaç-sonuç' ilişkisi vardır?",
        options: [
          "Yağmur yağınca piknik iptal oldu.",
          "Zayıflamak için her gün yürüyüş yapıyor.",
          "Geç kaldığı için babası ona kızdı.",
          "Yorgun olduğu için erkenden uyudu.",
        ],
        correct: 1,
        explanation:
          "Yürüyüş yapma eylemi 'zayıflama amacıyla' gerçekleştirilmektedir.",
      },
      {
        id: "t5-1-t5-10",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerden hangisi hem 'yapım eki' hem 'çekim eki' almıştır?",
        options: ["Kitaplar", "Gözlükçü", "Sorgusuz", "Öğrenciye"],
        correct: 3,
        explanation:
          "Öğren- (fiil kökü), -ci (yapım eki), -y-e (yönelme durum eki/çekim eki).",
      },
      {
        id: "t5-1-t5-11",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde 'abartma' sanatı yapılmıştır?",
        options: [
          "Bir of çeksem karşıki dağlar yıkılır.",
          "Güneş neşeyle bize gülümsüyordu.",
          "Deniz kıyısında küçük taşlar topladık.",
          "Ay, bulutların arkasına saklanmış.",
        ],
        correct: 0,
        explanation:
          "Bir iç çekişle dağların yıkılması fiziksel olarak imkansız, aşırı bir abartmadır.",
      },
      {
        id: "t5-1-t5-12",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi noktalama işareti sıralı cümleleri birbirinden ayırmak için kullanılır?",
        options: ["İki nokta", "Noktalı virgül", "Üç nokta", "Soru işareti"],
        correct: 1,
        explanation:
          "Virgülle ayrılmış grupları veya anlamca bağlı sıralı cümleleri ayırmak için noktalı virgül kullanılır.",
      },
      {
        id: "t5-1-t5-13",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir 'koşul' (şart) cümlesidir?",
        options: [
          "Kar yağdığı için yollar kapandı.",
          "Seni görmek için buralara kadar geldim.",
          "Güneş doğunca her yer aydınlandı.",
          "Düzenli çalışırsan sınavı kazanırsın.",
        ],
        correct: 3,
        explanation:
          "Sınavı kazanma eylemi 'düzenli çalışma' şartına bağlanmıştır.",
      },
      {
        id: "t5-1-t5-14",
        subject: "turkce",
        term: 1,
        prompt:
          "'Kafa' sözcüğü hangisinde 'zihin, anlayış' anlamında kullanılmıştır?",
        options: [
          "Duvara kafasını çarptı.",
          "Bu kafa ile hiçbir işi bitiremezsin.",
          "Kafasına şapkasını takıp çıktı.",
          "Yere düşen kafasını elleri arasına aldı.",
        ],
        correct: 1,
        explanation:
          "Burada 'kafa', fiziksel organ değil, düşünme tarzı ve anlayış kapasitesidir.",
      },
      {
        id: "t5-1-t5-15",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimenin yazımı yanlıştır?",
        options: ["Birçok", "Pekçok", "Birkaç", "Herhangi"],
        correct: 1,
        explanation: "'Pek çok' kelimesi her zaman ayrı yazılır.",
      },
      {
        id: "t5-1-t5-16",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerden hangisinde 'ünsüz benzeşmesi' (sertleşme) vardır?",
        options: [
          "Dolabı kilitlemeyi unuttum.",
          "Kitapçıdan yeni bir roman aldım.",
          "Ağaca tırmanmak çok zordur.",
          "Sokağın başında bekliyorum.",
        ],
        correct: 1,
        explanation:
          "Kitap-cı birleşirken 'c' sesi 'ç'ye dönüşmüştür (Kitapçı).",
      },
      {
        id: "t5-1-t5-17",
        subject: "turkce",
        term: 1,
        prompt: "Hangi seçenekte 'eş anlamlı' kelimeler bir arada verilmiştir?",
        options: [
          "Sert - Yumuşak",
          "Yüzyıl - Asır",
          "Uzak - Yakın",
          "Derin - Sığ",
        ],
        correct: 1,
        explanation:
          "Yüzyıl ve asır aynı zaman dilimini ifade eden eş anlamlı kelimelerdir.",
      },
      {
        id: "t5-1-t5-18",
        subject: "turkce",
        term: 1,
        prompt:
          "Bir metinde anlatılanların temel dayanağı olan, okuyucuya verilmek istenen ders hangisidir?",
        options: ["Konu", "Yardımcı Fikir", "Ana Fikir", "Başlık"],
        correct: 2,
        explanation:
          "Okuyucuya verilmek istenen mesaj ve temel ders ana fikirdir.",
      },
      {
        id: "t5-1-t5-19",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi 'somut' anlamlıdır?",
        options: ["Düşünce", "Hayal", "Rüzgar", "Huzur"],
        correct: 2,
        explanation:
          "Rüzgar, dokunma duyusuyla hissedilebildiği için somut bir kavramdır.",
      },
      {
        id: "t5-1-t5-20",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'soru eki olan -mi' yanlış yazılmıştır?",
        options: [
          "Seninle gelebilirmiyim?",
          "Okula gittin mi?",
          "Haberin var mı?",
          "Bunu bana söyler misin?",
        ],
        correct: 0,
        explanation:
          "Soru eki olan '-mi' kendinden önceki kelimeden her zaman ayrı yazılır. 'Gelebilir miyim?' olmalıydı.",
      },
    ],
    test6: [
      {
        id: "t5-1-t6-01",
        subject: "turkce",
        term: 1,
        prompt:
          "'Gül' sözcüğü aşağıdaki cümlelerin hangisinde diğerlerinden farklı bir anlamda kullanılmıştır?",
        options: [
          "Bahçedeki kırmızı güller mis gibi kokuyor.",
          "Onun bu haline sadece gülüp geçtim.",
          "En sevdiği çiçek her zaman beyaz güldür.",
          "Vazodaki güller susuzluktan kurumuş.",
        ],
        correct: 1,
        explanation:
          "A, C ve D seçeneklerinde 'gül' çiçek anlamındayken (isim), B seçeneğinde gülmek eylemi (fiil) olarak kullanılmıştır. Sesteş bir sözcüktür.",
      },
      {
        id: "t5-1-t6-02",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'kişileştirme' sanatı yapılmamıştır?",
        options: [
          "Küçük dere, dağların arasından şarkı söyleyerek akıyordu.",
          "Yorgun akşam, şehrin üzerine yavaşça çöktü.",
          "Deniz, kıyıya vuran dalgalarıyla bize masal anlatıyordu.",
          "Güneşin kavurucu sıcağı toprakları çatlatmıştı.",
        ],
        correct: 3,
        explanation:
          "D seçeneğinde güneşin sıcağının toprağı çatlatması gerçek bir doğa olayıdır; insani bir özellik yüklenmemiştir.",
      },
      {
        id: "t5-1-t6-03",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi kelime büyük ünlü uyumu kuralına 'uyduğu' halde ek aldığında bu kuralı bozar?",
        options: ["Kalemlik", "Okurken", "Çiçekçi", "Simitçi"],
        correct: 1,
        explanation:
          "Okul kelimesi uyumludur ancak '-ken' eki (zarf-fiil eki) kalın sıradan devam eden kelimeye ince geldiği için uyumu bozar.",
      },
      {
        id: "t5-1-t6-04",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'yakınma' (şikayet) anlamı vardır?",
        options: [
          "Keşke ben de sizinle o geziye gelebilseydim.",
          "Onun bu vurdumduymaz tavırlarından bıktım artık.",
          "Yarınki sınavın çok zor olacağını düşünüyorum.",
          "Derslerine düzenli çalışırsan başarılı olursun.",
        ],
        correct: 1,
        explanation:
          "Bir durumdan duyulan rahatsızlığın dile getirilmesine yakınma denir.",
      },
      {
        id: "t5-1-t6-05",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerin hangisinde 'ünsüz yumuşaması' yoktur?",
        options: ["Sokağı", "Kapağı", "Hukuku", "Çocuğu"],
        correct: 2,
        explanation:
          "Hukuk kelimesi tek heceli gibi davranan yabancı kökenli bir sözcük olduğu için yumuşama kuralına uymaz.",
      },
      {
        id: "t5-1-t6-06",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi seçenekteki deyim 'çok heyecanlanmak veya telaşlanmak' anlamındadır?",
        options: [
          "Gözü korkmak",
          "Etekleri tutuşmak",
          "Dili dolaşmak",
          "İçi cız etmek",
        ],
        correct: 1,
        explanation:
          "'Etekleri tutuşmak' deyimi, bir olay karşısında büyük bir telaş ve heyecan yaşamayı anlatır.",
      },
      {
        id: "t5-1-t6-07",
        subject: "turkce",
        term: 1,
        prompt:
          "'Yol' sözcüğü hangisinde 'yöntem, metod' anlamında kullanılmıştır?",
        options: [
          "Bu yol bizi doğrudan köye ulaştırır.",
          "Bu sorunu çözmenin bir yolunu bulmalıyız.",
          "Yolun kenarındaki ağaçlar çiçek açmış.",
          "Kar nedeniyle ana yollar ulaşıma kapandı.",
        ],
        correct: 1,
        explanation:
          "Sorunu çözmek için kullanılan yöntem veya çare anlamında kullanılmıştır.",
      },
      {
        id: "t5-1-t6-08",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde 'amaç-sonuç' ilişkisi vardır?",
        options: [
          "Uykusu geldiği için erkenden yattı.",
          "Kardeşini sevdiği için ona oyuncak aldı.",
          "Başarılı olmak için gece gündüz demeden çalışıyor.",
          "Yağmur yağınca her yer mis gibi toprak koktu.",
        ],
        correct: 2,
        explanation: "Çalışma eylemi 'başarılı olmak amacıyla' yapılmaktadır.",
      },
      {
        id: "t5-1-t6-09",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi noktalama işareti, bir cümlede ara sözlerin veya ara cümlelerin başında ve sonunda kullanılır?",
        options: ["İki nokta", "Kısa çizgi", "Noktalı virgül", "Soru işareti"],
        correct: 1,
        explanation:
          "Cümle içinde ek bilgi veren ara sözlerin başında ve sonunda ya virgül ya da kısa çizgi (-) kullanılır.",
      },
      {
        id: "t5-1-t6-10",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerden hangisi 'yapım eki' alarak yeni bir anlam kazanmıştır?",
        options: ["Evler", "Sıradan", "Gözcü", "Masada"],
        correct: 2,
        explanation:
          "Göz ismine gelen '-cü' eki, gözleyen kişi anlamında yeni bir kelime türetmiştir.",
      },
      {
        id: "t5-1-t6-11",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'abartma' (mübalağa) vardır?",
        options: [
          "O kadar çok ağladı ki gözyaşları sel oldu.",
          "Kar taneleri havada dans ederek yere iniyordu.",
          "Papatyalar sabah güneşine 'Merhaba' dedi.",
          "Dondurma buz gibi soğuktu.",
        ],
        correct: 0,
        explanation:
          "Gözyaşlarının sel olması, gerçekte mümkün olmayan bir aşırılık, yani abartmadır.",
      },
      {
        id: "t5-1-t6-12",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki atasözlerinden hangisi 'tutumlu olmak' ile ilgilidir?",
        options: [
          "Ak akçe kara gün içindir.",
          "İşleyen demir ışıldar.",
          "Ağaç yaşken eğilir.",
          "Damlaya damlaya göl olur.",
        ],
        correct: 0,
        explanation:
          "Biriktirilen paranın zor zamanlarda işe yarayacağını anlatan, tutumluluğu teşvik eden bir sözdür.",
      },
      {
        id: "t5-1-t6-13",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde bir 'varsayım' (olmamış bir şeyi olmuş gibi kabul etme) anlamı vardır?",
        options: [
          "Diyelim ki bu sınavdan yüz aldın, ne yaparsın?",
          "Belki yarın akşam size gelebiliriz.",
          "Keşke daha çok kitap okusaydım.",
          "Sanki her şeyi o yapmış gibi davranıyor.",
        ],
        correct: 0,
        explanation:
          "'Diyelim ki', 'tut ki', 'farz et ki' gibi ifadeler cümleye varsayım anlamı katar.",
      },
      {
        id: "t5-1-t6-14",
        subject: "turkce",
        term: 1,
        prompt:
          "'İnce' sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?",
        options: [
          "İnce bir dal parçasıyla toprağı kazdı.",
          "Bugün üzerinde ince bir ceket vardı.",
          "Bize karşı çok ince ve nazik davrandı.",
          "Kitabın ince sayfaları hemen yırtıldı.",
        ],
        correct: 2,
        explanation:
          "Burada 'ince', fiziksel kalınlık değil, davranışlardaki kibarlık ve hassasiyet anlamındadır.",
      },
      {
        id: "t5-1-t6-15",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki birleşik kelimelerin hangisinde yazım yanlışı vardır?",
        options: [
          "Gökkuşağı",
          "Birtakım (insanlar)",
          "Hoş geldiniz",
          "Karamurat",
        ],
        correct: 2,
        explanation: "'Hoş geldiniz' ayrı yazılması gereken bir ifadedir.",
      },
      {
        id: "t5-1-t6-16",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede 'ünlü düşmesi' vardır?",
        options: ["Boynum", "Kedilere", "Sıralar", "Kapıda"],
        correct: 0,
        explanation: "Boyun-um birleşirken ikinci hecedeki 'u' harfi düşer.",
      },
      {
        id: "t5-1-t6-17",
        subject: "turkce",
        term: 1,
        prompt:
          "Bir paragrafta anlatılan konunun sınırlandırılmış, en dar haline ne denir?",
        options: ["Ana fikir", "Yardımcı düşünce", "Konu", "Metnin başlığı"],
        correct: 2,
        explanation:
          "Metinde üzerinde durulan olay, durum veya kavram metnin konusudur.",
      },
      {
        id: "t5-1-t6-18",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi 'somut' bir anlam taşır?",
        options: ["Koku", "Mutluluk", "Akıl", "Cesaret"],
        correct: 0,
        explanation:
          "Koku, koklama duyusuyla algılanabildiği için somut bir kavramdır.",
      },
      {
        id: "t5-1-t6-19",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi seçenekte zıt (karşıt) anlamlı kelimeler bir arada kullanılmamıştır?",
        options: [
          "Gece gündüz demeden çalıştı.",
          "Acı tatlı günlerimiz geçti.",
          "Aşağı yukarı on saattir yoldayız.",
          "Sağlıklı ve sıhhatli bir ömür dilerim.",
        ],
        correct: 3,
        explanation:
          "Sağlıklı ve sıhhatli kelimeleri eş anlamlıdır, zıt anlamlı değillerdir.",
      },
      {
        id: "t5-1-t6-20",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki noktalama işaretlerinden hangisi, tamamlanmamış cümlelerin sonunda kullanılır?",
        options: ["Ünlem", "Üç nokta", "Soru işareti", "Nokta"],
        correct: 1,
        explanation:
          "Yüklemi olmayan, sonu okuyucunun hayal gücüne bırakılan eksiltili cümlelerin sonuna üç nokta (...) konur.",
      },
    ],
    test7: [
      {
        id: "t5-1-t7-01",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'yol' sözcüğü 'bir amaca ulaşmak için başvurulan çare' anlamında kullanılmıştır?",
        options: [
          "Köy yolu kışın ulaşıma kapanır.",
          "Bu sorunu çözmek için her yolu denedik.",
          "Yolun kenarındaki çiçekler kurumuş.",
          "Ankara yolunda mola verdik.",
        ],
        correct: 1,
        explanation:
          "Burada 'yol', fiziksel bir güzergah değil, bir problemi çözmek için kullanılan yöntem ve çare anlamındadır.",
      },
      {
        id: "t5-1-t7-02",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi seçenekte 'kişileştirme' ve 'benzetme' sanatları bir arada kullanılmıştır?",
        options: [
          "Kükremiş sel gibi bendimi çiğner aşarım.",
          "Güneş altın bir portakal gibi gülümsüyordu.",
          "Deniz, hırçın dalgalarıyla sahili dövüyordu.",
          "Ağaçlar kışın gelmesiyle hüzne boğuldu.",
        ],
        correct: 1,
        explanation:
          "Güneşin portakala benzetilmesi 'benzetme', gülümsemesi ise 'kişileştirme' sanatıdır.",
      },
      {
        id: "t5-1-t7-03",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki kelimelerin hangisinde 'ünsüz yumuşaması' kuralına aykırılık vardır?",
        options: ["Kitabı", "Ağacı", "Evrakı", "Kapağı"],
        correct: 2,
        explanation:
          "Evrak kelimesi yabancı kökenli olduğu için ünlüyle başlayan ek aldığında 'evrağı' olmaz, sertliğini korur.",
      },
      {
        id: "t5-1-t7-04",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'sitem' (kırgınlık belirtme) anlamı vardır?",
        options: [
          "Keşke daha çok çalışsaydım.",
          "Buralara kadar gelip de bana uğramaman beni üzdü.",
          "Yarın yağmur yağabilir.",
          "Seni gördüğüme çok sevindim.",
        ],
        correct: 1,
        explanation:
          "Bir kişinin yaptığı bir davranıştan dolayı duyulan kırgınlığın doğrudan kendisine söylenmesine sitem denir.",
      },
      {
        id: "t5-1-t7-05",
        subject: "turkce",
        term: 1,
        prompt:
          "Hangi kelime yapısı bakımından 'türemiş' (yapım eki almış) bir kelime değildir?",
        options: ["Bilgi", "Sorgu", "Kitaplar", "Gözlük"],
        correct: 2,
        explanation:
          "Kitaplar kelimesi sadece çekim eki (çoğul eki) almıştır, yeni bir anlam kazanmamıştır; basittir.",
      },
      {
        id: "t5-1-t7-06",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki deyimlerden hangisi 'çok telaşlanmak' anlamındadır?",
        options: [
          "Ağzı açık kalmak",
          "Etekleri zil çalmak",
          "Etekleri tutuşmak",
          "Kulak misafiri olmak",
        ],
        correct: 2,
        explanation:
          "Etekleri tutuşmak deyimi, beklenmedik bir durum karşısında büyük bir korku ve telaş yaşamayı ifade eder.",
      },
      {
        id: "t5-1-t7-07",
        subject: "turkce",
        term: 1,
        prompt:
          "'Açık' sözcüğü aşağıdaki cümlelerin hangisinde 'anlaşılır, net' anlamında kullanılmıştır?",
        options: [
          "Pencereyi açık bırakma.",
          "Açık renkli kıyafetleri severim.",
          "Bize her şeyi açık açık anlattı.",
          "Mağaza bugün açık değil.",
        ],
        correct: 2,
        explanation:
          "Anlatımın gizli yönünün kalmaması ve net olması durumunu ifade eder.",
      },
      {
        id: "t5-1-t7-08",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'neden-sonuç' ilişkisi vardır?",
        options: [
          "Yemek yapmak için mutfağa gitti.",
          "Okula gitmek üzere yola çıktı.",
          "Uykusuz kaldığı için gözleri kanlanmış.",
          "Daha iyi okumak için gözlük aldı.",
        ],
        correct: 2,
        explanation:
          "Gözlerin kanlanmasının nedeni uykusuz kalmaktır. Diğerleri amaç-sonuçtur.",
      },
      {
        id: "t5-1-t7-09",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki noktalama işaretlerinden hangisi, kendisinden sonra açıklama yapılacak cümlenin sonuna konur?",
        options: ["Noktalı virgül", "İki nokta", "Üç nokta", "Virgül"],
        correct: 1,
        explanation:
          "Örnek verilecek veya açıklama yapılacak kısımlardan önce iki nokta (:) kullanılır.",
      },
      {
        id: "t5-1-t7-10",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede 'ünlü daralması' vardır?",
        options: ["Bakıyor", "Seviyor", "Söylüyor", "Görüyor"],
        correct: 2,
        explanation:
          "Söyle- fiili '-yor' eki aldığında sondaki geniş 'e' sesi daralarak 'ü'ye dönüşür.",
      },
      {
        id: "t5-1-t7-11",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki cümlelerin hangisinde 'nesnel' bir yargı yoktur?",
        options: [
          "Ankara, Türkiye'nin başkentidir.",
          "Güneş, sistemimizdeki ısı kaynağıdır.",
          "En sürükleyici kitaplar macera kitaplarıdır.",
          "Su, 100 derecede kaynar.",
        ],
        correct: 2,
        explanation:
          "Hangi tür kitabın sürükleyici olduğu kişisel bir beğenidir (öznel), kanıtlanamaz.",
      },
      {
        id: "t5-1-t7-12",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki atasözlerinden hangisi 'emek vermeden başarı olmaz' anlamındadır?",
        options: [
          "Damlaya damlaya göl olur.",
          "Emek olmadan yemek olmaz.",
          "Sakla samanı gelir zamanı.",
          "Ak akçe kara gün içindir.",
        ],
        correct: 1,
        explanation:
          "Bir sonuç elde etmek için mutlaka çaba ve çalışma gerektiğini vurgular.",
      },
      {
        id: "t5-1-t7-13",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimenin yazımı yanlıştır?",
        options: ["Pek çok", "Birkaç", "Herşey", "Herhangi"],
        correct: 2,
        explanation: "'Şey' sözcüğü her zaman ayrı yazılır: 'Her şey'.",
      },
      {
        id: "t5-1-t7-14",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki cümlelerin hangisinde 'abartma' (mübalağa) sanatı yapılmıştır?",
        options: [
          "Dünya kadar ödevim var.",
          "Kuşlar dallarda cıvıldıyor.",
          "Deniz kıyısında yürüdük.",
          "Hava bugün çok soğuk.",
        ],
        correct: 0,
        explanation:
          "Ödevin miktarının dünya ile kıyaslanması aşırı bir abartmadır.",
      },
      {
        id: "t5-1-t7-15",
        subject: "turkce",
        term: 1,
        prompt: "Hangi kelimede 'ünsüz türemesi' vardır?",
        options: ["Gitti", "Baktı", "Affetti", "Sattı"],
        correct: 2,
        explanation: "Af-etmek birleşirken 'f' sesi türer ve 'affetti' olur.",
      },
      {
        id: "t5-1-t7-16",
        subject: "turkce",
        term: 1,
        prompt:
          "Bir metnin 'yardımcı düşünceleri' ile ilgili hangisi doğrudur?",
        options: [
          "Metnin temel mesajıdır.",
          "Genellikle tek bir cümledir.",
          "Ana düşünceyi destekler ve açıklar.",
          "Metnin başlığı ile aynıdır.",
        ],
        correct: 2,
        explanation:
          "Yardımcı düşünceler, ana fikrin daha iyi anlaşılmasını sağlayan detaylardır.",
      },
      {
        id: "t5-1-t7-17",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelimelerden hangisi 'somut' bir anlam taşır?",
        options: ["Rüya", "Hayal", "Ses", "Korku"],
        correct: 2,
        explanation:
          "Ses, kulak yoluyla (işitme duyusu) algılanabildiği için somut bir kavramdır.",
      },
      {
        id: "t5-1-t7-18",
        subject: "turkce",
        term: 1,
        prompt: "Hangi cümlede 'soru eki olan -mi' yanlış yazılmıştır?",
        options: [
          "Geliyor musun?",
          "Ödevini yaptınmı?",
          "Beni anlıyor musun?",
          "Sende mi geleceksin?",
        ],
        correct: 1,
        explanation:
          "Soru eki olan '-mi' her zaman kelimeden ayrı yazılmalıdır: 'yaptın mı?'",
      },
      {
        id: "t5-1-t7-19",
        subject: "turkce",
        term: 1,
        prompt: "Aşağıdaki kelime çiftlerinden hangisi 'eş anlamlı' değildir?",
        options: ["Beyaz - Ak", "Siyah - Kara", "Büyük - İri", "Hızlı - Yavaş"],
        correct: 3,
        explanation: "Hızlı ve yavaş kelimeleri zıt anlamlıdır.",
      },
      {
        id: "t5-1-t7-20",
        subject: "turkce",
        term: 1,
        prompt:
          "Aşağıdaki noktalama işaretlerinden hangisi, tamamlanmış cümlelerin sonuna konur?",
        options: ["Üç nokta", "Nokta", "Soru işareti", "Ünlem"],
        correct: 1,
        explanation:
          "Tamamlanmış ve yargısı bitmiş cümlelerin sonuna nokta (.) konur.",
      },
    ],
  },
  term2: {
    test1: [
      {
        id: "t5-2-06",
        subject: "turkce",
        term: 2,
        prompt: "Hangi cümlede noktalama hatası vardır?",
        options: [
          "Elma, armut aldım.",
          "Sende geldin mi?",
          "Eyvah, yangın var!",
          "Dün İzmir'e gittim.",
        ],
        correct: 1,
        explanation: "Sen de geldin mi olmalı.",
      },
      {
        id: "t5-2-07",
        subject: "turkce",
        term: 2,
        prompt: "Metnin ana fikri nedir?",
        options: [
          "Konusu",
          "Yardımcı fikirleri",
          "Verilmek istenen ders",
          "Başlığı",
        ],
        correct: 2,
        explanation: "Verilmek istenen mesajdır.",
      },
      {
        id: "t5-2-08",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması vardır?",
        options: ["Kitapçı", "Ağacı", "Simitçi", "Sütçü"],
        correct: 1,
        explanation: "Ağaç -> ağacı.",
      },
      {
        id: "t5-2-09",
        subject: "turkce",
        term: 2,
        prompt: "Hangi cümle bir soru cümlesidir?",
        options: [
          "Bize geleceğini söyledi.",
          "Neden gelmediğini bilmiyorum.",
          "Okula ne zaman gideceksin?",
          "Gidince haber ver.",
        ],
        correct: 2,
        explanation: "Soru sorar.",
      },
      {
        id: "t5-2-10",
        subject: "turkce",
        term: 2,
        prompt: "'Pırıl pırıl' ikilemesi cümleye hangi anlamı katmıştır?",
        options: ["Hızlı", "Yavaş", "Temiz/Parlak", "Gürültülü"],
        correct: 2,
        explanation: "Temiz ve parlak.",
      },
      {
        id: "t5-2-12",
        subject: "turkce",
        term: 2,
        prompt: "Hangisi büyük ünlü uyumuna uyar?",
        options: ["Kitap", "Kalem", "Okul", "Tiyatro"],
        correct: 2,
        explanation: "Okul uyar.",
      },
      {
        id: "t5-2-13",
        subject: "turkce",
        term: 2,
        prompt: "Hikayenin unsurlarından hangisi 'olay'ı kapsar?",
        options: ["Zaman", "Yer", "Kişiler", "Olay örgüsü"],
        correct: 3,
        explanation: "Olayların bütünüdür.",
      },
      {
        id: "t5-2-15",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdakilerden hangisi bir 'öznel' yargıdır?",
        options: [
          "Kitap 200 sayfadan oluşuyor.",
          "Yazarın son kitabı çok etkileyici.",
          "Film İstanbul'da çekilmiş.",
          "Hafta yedi gündür.",
        ],
        correct: 1,
        explanation: "Kişisel görüştür.",
      },
      {
        id: "t5-2-17",
        subject: "turkce",
        term: 2,
        prompt: "Hangi kelime grubunda yazım yanlışı vardır?",
        options: [
          "Türk Dil Kurumu",
          "Ayşe teyze",
          "Ankara kalesi",
          "Güneş sistemi",
        ],
        correct: 2,
        explanation: "Kalesi büyük olmalı.",
      },
      {
        id: "t5-zn-12",
        subject: "turkce",
        term: 2,
        prompt: "Hangisi bir 'özne-yüklem' uyumsuzluğu içermez?",
        options: [
          "Kuşlar uçuyorlar.",
          "Ben ve o gittik.",
          "Herkes sustular.",
          "Çiçekler soldu.",
        ],
        correct: 3,
        explanation:
          "İnsan dışı çoğul varlık özne olduğunda yüklem tekil olur.",
      },
      {
        id: "t5-zn-14",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'ki'nin yazımı yanlıştır?",
        options: [
          "Seninki gelmiş.",
          "Evdeki hesap çarşıya uymaz.",
          "Öyle bir çocukki anlatamam.",
          "Bahçedeki çiçekler kurumuş.",
        ],
        correct: 2,
        explanation: "Çocuk ki olmalı.",
      },
      {
        id: "t5-zn-16",
        subject: "turkce",
        term: 2,
        prompt: "'Kitapçı' kelimesinin kökü ve aldığı ek türü nedir?",
        options: [
          "Kitap-çı (Çekim eki)",
          "Kitap-çı (Yapım eki)",
          "Kita-pçı (Yapım eki)",
          "Kitapçı (Kök)",
        ],
        correct: 1,
        explanation: "Kitap kök, -çı yapım eki.",
      },
      {
        id: "t5-zn-18",
        subject: "turkce",
        term: 2,
        prompt:
          "Aşağıdaki kelimelerin hangisinde ünsüz benzeşmesi (sertleşme) vardır?",
        options: ["Dolapta", "Kitabı", "Sütçü", "Ağaca"],
        correct: 0,
        explanation: "Dolap-ta (d->t).",
      },
      {
        id: "t5-zn-20",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki deyimlerden hangisi 'çok sevinmek' anlamındadır?",
        options: [
          "Göz atmak",
          "Etekleri zil çalmak",
          "Kulak misafiri olmak",
          "Burnu havada olmak",
        ],
        correct: 1,
        explanation: "Sevinci ifade eder.",
      },
      {
        id: "t5-hard-nv-02",
        subject: "turkce",
        term: 2,
        prompt:
          "(1) Kitap okumak hayal dünyasını zenginleştirir. (2) Yeni yerler görmemizi sağlar. (3) Türkiye'de kağıt fiyatları her yıl artmaktadır. (4) Bu yüzden her gün okumalıyız. Akışı bozan cümle hangisidir?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Konu dışı bilgi.",
      },
      {
        id: "t5-hard-nv-04",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde neden-sonuç ilişkisi vardır?",
        options: [
          "Seni görmek için geldim.",
          "Yağmur yağdığı için maç iptal oldu.",
          "Düzenli çalışırsan kazanırsın.",
          "Okula gitmek üzere çıktı.",
        ],
        correct: 1,
        explanation: "Yağmur nedeniyle iptal.",
      },
      {
        id: "t5-hard-nv-05",
        subject: "turkce",
        term: 2,
        prompt:
          "Hangi atasözü emek vermeden başarıya ulaşılamayacağını anlatır?",
        options: [
          "Damlaya damlaya göl olur.",
          "Sakla samanı gelir zamanı.",
          "Emek olmadan yemek olmaz.",
          "Ak akçe kara gün içindir.",
        ],
        correct: 2,
        explanation: "Emek vurgusu.",
      },
      {
        id: "t5-adv-02",
        subject: "turkce",
        term: 2,
        prompt: "Aşağıdaki cümlelerin hangisinde 'karşılaştırma' yapılmıştır?",
        options: [
          "Bugün hava çok güzel.",
          "Onun kadar çalışkan birini görmedim.",
          "Ders çalışmak için odasına gitti.",
          "Kitap okumayı çok seviyor.",
        ],
        correct: 1,
        explanation: "Kadar edatıyla kıyas.",
      },
      {
        id: "t5-adv-04",
        subject: "turkce",
        term: 2,
        prompt:
          "'Yazarın dili çok akıcı olduğu için kitap bir solukta bitti.' cümlesinden hangi yargı kesin olarak çıkarılır?",
        options: [
          "Kitap çok sürükleyicidir.",
          "Yazarın en iyi kitabıdır.",
          "Kitap çok kalındır.",
          "Yazar sadece macera yazar.",
        ],
        correct: 0,
        explanation: "Sürükleyicilik anlamı verir.",
      },
    ],
    test2: [],
  },
};
