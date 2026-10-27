import { SubjectData } from "./types";

// 6. sınıf başlangıç paketi: 1. tema, Sayılar ve Nicelikler (1).
// Kapsam: MAT.6.1.1–MAT.6.1.4; tüm dönemi veya yılı kapsamaz.
// Kaynak: https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/456
export const matematikData: SubjectData = {
  term1: {
    test1: [
      {
        "id": "m6-1-t1-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Şekildeki anahtarların hepsi başlangıçta kapalıdır. İlk turda numarası 3’ün katı olan, ikinci turda numarası 4’ün katı olan anahtarlar birer kez çevriliyor. Her çevirme, kapalı anahtarı açar; açık anahtarı kapatır.\n\nİki turun sonunda açık olan anahtarların numaraları toplamı kaçtır?",
        "options": [
          "71",
          "95",
          "119",
          "131"
        ],
        "correct": 1,
        "explanation": "12 ve 24, hem 3’ün hem 4’ün katıdır; iki kez çevrilip yeniden kapanır. 18, 27 ve 30 yalnız ilk turda; 20 yalnız ikinci turda açılır. Açık anahtarların toplamı 18 + 20 + 27 + 30 = 95’tir.",
        "imageUrl": "/grade6/matematik/test-1/soru-01.svg",
        "imageAlt": "Başlangıçta hepsi kapalı altı anahtar. Üst sırada soldan sağa 12, 18, 20; alt sırada soldan sağa 24, 27, 30 yazıyor. Birinci turda 3’ün katı olan numaraların, ikinci turda 4’ün katı olan numaraların anahtarları birer kez çevriliyor.",
        "imageWidth": 360,
        "imageHeight": 388
      },
      {
        "id": "m6-1-t1-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Yan yana duran beş rakam kartından yalnız biri çıkarılıyor. Kalan dört kartın sırası değiştirilmeden dört basamaklı bir sayı okunuyor.\n\nBu sayı hem 3’e hem 4’e kalansız bölündüğüne göre hangi rakamın kartı çıkarılmıştır?",
        "options": [
          "2",
          "4",
          "5",
          "6"
        ],
        "correct": 2,
        "explanation": "Beş rakamın toplamı 17’dir. Kalan toplamın 3’ün katı olması için 2 veya 5 çıkarılmalıdır. 2 çıkarılırsa 6450 oluşur; son iki basamağı 50 olduğundan 4’e bölünmez. 5 çıkarılırsa 6240 oluşur; rakamları toplamı 12 ve son iki basamağı 40 olduğundan iki koşul da sağlanır.",
        "imageUrl": "/grade6/matematik/test-1/soru-02.svg",
        "imageAlt": "Yan yana beş rakam kartında soldan sağa 6, 2, 4, 5, 0 yazıyor. Altında, kalan dört kartın sırası değiştirilmeden oluşturulacak dört basamaklı sayı için dört boş kutu var. Bu sayı hem 3’e hem 4’e kalansız bölünmelidir.",
        "imageWidth": 360,
        "imageHeight": 334
      },
      {
        "id": "m6-1-t1-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Üçgenin köşelerindeki P, Q ve R, birbirinden farklı asal sayılardır. Her kenarın yanındaki sayı, o kenarın iki ucundaki sayıların çarpımıdır.\n\nSoru işareti yerine hangi sayı yazılmalıdır?",
        "options": [
          "35",
          "70",
          "385",
          "55"
        ],
        "correct": 3,
        "explanation": "P × Q = 35 ve Q × R = 77’dir. 35 = 5 × 7, 77 = 7 × 11 olduğundan ortak köşedeki Q = 7’dir. Böylece P = 5, R = 11 olur. Soru işareti P × R = 5 × 11 = 55’tir.",
        "imageUrl": "/grade6/matematik/test-1/soru-03.svg",
        "imageAlt": "Bir üçgenin üst köşesinde P, sol alt köşesinde Q, sağ alt köşesinde R var. P ile Q arasındaki kenarda 35, Q ile R arasındaki kenarda 77, P ile R arasındaki kenarda soru işareti yazıyor. P, Q ve R birbirinden farklı asal sayılardır; her kenardaki sayı, o kenarın uçlarındaki sayıların çarpımıdır.",
        "imageWidth": 360,
        "imageHeight": 334
      },
      {
        "id": "m6-1-t1-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Şemadaki her ok, başladığı kutudaki sayının ulaştığı kutudaki sayının bir çarpanı olduğunu gösterir. A ve B pozitif doğal sayılardır; A < 50 ve B < 250’dir.\n\nB − A kaçtır?",
        "options": [
          "180",
          "150",
          "210",
          "240"
        ],
        "correct": 0,
        "explanation": "A, hem 6’nın hem 10’un katıdır. 50’den küçük tek pozitif ortak kat 30’dur. B ise hem 30’un hem 14’ün katı olmalıdır. 250’den küçük ortak katları aradığımızda yalnız 210 bulunur: 210 = 30 × 7 = 14 × 15. Bu yüzden B − A = 210 − 30 = 180’dir.",
        "imageUrl": "/grade6/matematik/test-1/soru-04.svg",
        "imageAlt": "6 ve 10’dan A’ya, A ve 14’ten B’ye oklar çizilmiş. Okun çıktığı sayı, okun gösterdiği sayının çarpanıdır. A ve B pozitif tam sayılardır. A, 50’den; B, 250’den küçüktür.",
        "imageWidth": 360,
        "imageHeight": 380
      },
      {
        "id": "m6-1-t1-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kartın puanı, üzerinde yazan sayının farklı asal çarpanlarının toplamıdır. Aynı asal çarpan, kaç kez kullanılırsa kullanılsın toplamda bir kez sayılır.\n\nHangi iki kartın puanı birbirine eşittir?",
        "options": [
          "K ve L",
          "K ve M",
          "L ve N",
          "M ve N"
        ],
        "correct": 1,
        "explanation": "60’ın farklı asal çarpanları 2, 3, 5; puanı 10’dur. 84’ün farklı asal çarpanları 2, 3, 7; puanı 12’dir. 63’ün farklı asal çarpanları 3, 7; puanı 10’dur. 70’in farklı asal çarpanları 2, 5, 7; puanı 14’tür. Puanları eşit olan kartlar K ve M’dir.",
        "imageUrl": "/grade6/matematik/test-1/soru-05.svg",
        "imageAlt": "Aynı biçimde dört kart. Üst sırada K kartında 60, L kartında 84; alt sırada M kartında 63, N kartında 70 yazıyor. Her kartın puanı, üzerindeki sayının farklı asal çarpanlarının toplamıdır.",
        "imageWidth": 360,
        "imageHeight": 296
      },
      {
        "id": "m6-1-t1-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Kutulardaki A, B ve C sayıları asaldır. Her ok üzerindeki sayı, soldaki kutunun değerine eklenerek sağdaki kutunun değeri bulunur. C, 30’dan küçüktür.\n\nA + B + C en fazla kaç olabilir?",
        "options": [
          "35",
          "41",
          "59",
          "65"
        ],
        "correct": 2,
        "explanation": "B = A + 2 ve C = A + 6’dır. Üçünün de asal olduğu ve C < 30 koşulunu sağlayan üçlüler (5, 7, 11), (11, 13, 17) ve (17, 19, 23)’tür. Toplamları 23, 41 ve 59’dur. En büyük toplam 59 olur.",
        "imageUrl": "/grade6/matematik/test-1/soru-06.svg",
        "imageAlt": "Soldan sağa A, B ve C kutuları var. A’dan B’ye giden okun üstünde artı 2, B’den C’ye giden okun üstünde artı 4 yazıyor. A, B ve C asal sayılardır; C, 30’dan küçüktür.",
        "imageWidth": 360,
        "imageHeight": 202
      },
      {
        "id": "m6-1-t1-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Sayı kartları, 36, 48 ve 60 etiketli kutulara yerleştirilmiştir. İki farklı kutudan birer kart seçilip bu iki kartın yerleri değiştiriliyor. Bu değişiklikten sonra her karttaki sayı, bulunduğu kutunun etiketindeki sayının bir çarpanı oluyor.\n\nYerleri değiştirilen iki karttaki sayının çarpımı kaçtır?",
        "options": [
          "72",
          "48",
          "60",
          "96"
        ],
        "correct": 0,
        "explanation": "36 kutusundaki 8, 36’nın çarpanı değildir. 48 kutusundaki 9 da 48’in çarpanı değildir. 8 ve 9 yer değiştirirse 36 kutusunda 6 ve 9, 48 kutusunda 8 ve 12 bulunur; hepsi etiket sayısını kalansız böler. 60 kutusundaki 10 ve 15 zaten uygundur. Değişen kartların çarpımı 8 × 9 = 72’dir.",
        "imageUrl": "/grade6/matematik/test-1/soru-07.svg",
        "imageAlt": "Alt alta üç kutu bulunuyor. 36 yazılı kutuda 6 ve 8 kartları, 48 yazılı kutuda 9 ve 12 kartları, 60 yazılı kutuda 10 ve 15 kartları var. Bütün kartlar aynı biçimdedir; herhangi bir kart işaretlenmemiştir.",
        "imageWidth": 360,
        "imageHeight": 360
      },
      {
        "id": "m6-1-t1-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki şerit aynı sayı ölçeğiyle alt alta yerleştirilmiştir. K şeridinde 0’dan başlayarak 6’şar birim, L şeridinde 2’den başlayarak 8’er birim aralıklarla işaret konulmaktadır. Şekilde her şeridin ilk iki işareti gösterilmiştir; düzen sağa doğru sürmektedir.\n\nİki şeritte de işaretli olan en küçük sayı kaçtır?",
        "options": [
          "12",
          "14",
          "16",
          "18"
        ],
        "correct": 3,
        "explanation": "K şeridindeki sayılar 0, 6, 12, 18, 24, ...; L şeridindeki sayılar 2, 10, 18, 26, ... biçimindedir. Her iki listede de bulunan ilk sayı 18’dir. Şeritler aynı noktadan başlamadığı için yalnız 6 ve 8’in ortak katlarını aramak doğru olmaz.",
        "imageUrl": "/grade6/matematik/test-1/soru-08.svg",
        "imageAlt": "Aynı konum ölçeğini kullanan iki yatay şerit var. K şeridinde ilk iki işaret 0 ve 6 konumlarında; araları 6 birim. L şeridinde ilk iki işaret 2 ve 10 konumlarında; araları 8 birim. Şeritler sağa doğru bu eşit aralıklarla devam ediyor; sonraki işaretler çizilmemiş.",
        "imageWidth": 360,
        "imageHeight": 336
      },
      {
        "id": "m6-1-t1-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Tablodaki K, L ve M harfleri; 2, 3 ve 5 bölenlerini bilinmeyen bir sırayla temsil etmektedir. Her bölen yalnız bir harfle gösterilmiştir. ✓ işareti satırdaki sayının o sütunun bölenine kalansız bölündüğünü, × işareti ise bölünmediğini belirtir.\n\nTabloya göre N sayısı aşağıdakilerden hangisi olabilir?",
        "options": [
          "114",
          "125",
          "153",
          "180"
        ],
        "correct": 0,
        "explanation": "126, 2 ve 3’e bölünür; 5’e bölünmez. Bu yüzden M = 5’tir. 135, 2’ye bölünmez; 3 ve 5’e bölünür. Buradan K = 2, L = 3 bulunur. N, 2 ve 3’e bölünmeli; 5’e bölünmemelidir. 114 çifttir, rakamları toplamı 6’dır ve son rakamı 0 veya 5 değildir. Yalnız 114 uygundur.",
        "imageUrl": "/grade6/matematik/test-1/soru-09.svg",
        "imageAlt": "Tablonun sütunları Sayı, K, L ve M. 126 satırı: K evet, L evet, M hayır. 135 satırı: K hayır, L evet, M evet. 140 satırı: K evet, L hayır, M evet. N satırı: K evet, L evet, M hayır. Evet işareti kalansız bölünmeyi, hayır işareti kalansız bölünmemeyi gösterir. K, L ve M farklı sıralarda 2, 3 ve 5 bölenlerini temsil eder.",
        "imageWidth": 360,
        "imageHeight": 404
      },
      {
        "id": "m6-1-t1-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki boncukların tamamı kullanılarak birbirinin aynı paketler hazırlanacaktır. Her pakette aynı sayıda kırmızı ve aynı sayıda mavi boncuk bulunacaktır. Bir paketteki toplam boncuk sayısı en fazla 15 olacaktır.\n\nBuna göre bir pakette toplam kaç boncuk bulunur?",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correct": 2,
        "explanation": "Paket sayısı hem 30’u hem 42’yi kalansız bölmelidir; olasılıklar 1, 2, 3 ve 6’dır. Toplam 72 boncuk olduğundan bu durumlarda bir pakette sırasıyla 72, 36, 24 veya 12 boncuk bulunur. En fazla 15 koşulunu yalnız 12 sağlar. 6 paketin her birinde 5 kırmızı ve 7 mavi boncuk olur.",
        "imageUrl": "/grade6/matematik/test-1/soru-10.svg",
        "imageAlt": "İki stok kutusunda 30 kırmızı boncuk ve 42 mavi boncuk bulunuyor. Altlarındaki ok aynı bileşimde hazırlanacak paketleri gösteriyor. Her pakette en çok 15 boncuk bulunabilir.",
        "imageWidth": 360,
        "imageHeight": 406
      }
    ],
    test2: [
      {
        id: "m6-1-t2-01",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki dört basamaklı sayılardan hangisi 4 ile tam bölünür?",
        options: ["2314", "2316", "2318", "2322"],
        correct: 1,
        explanation: "Bir sayının son iki basamağının oluşturduğu sayı 4 ile bölünüyorsa sayının tamamı da bölünür. 14, 16, 18 ve 22 arasında yalnızca 16, 4'ün katıdır.",
      },
      {
        id: "m6-1-t2-02",
        subject: "matematik",
        term: 1,
        prompt: "48A üç basamaklı sayısı 9 ile tam bölünmektedir. A bir rakam olduğuna göre kaçtır?",
        options: ["0", "3", "6", "9"],
        correct: 2,
        explanation: "Rakamlar toplamı 4 + 8 + A = 12 + A'dır. Bu toplamın 9'un katı olması için 18 olması gerekir. 12 + 6 = 18 olduğundan A = 6'dır.",
      },
      {
        id: "m6-1-t2-03",
        subject: "matematik",
        term: 1,
        prompt: "Bir kulüp, bütün öğrencilerini altışarlı gruplara ayırdığında kimse artmıyor. Kulüpteki öğrenci sayısı aşağıdakilerden hangisi olabilir?",
        options: ["234", "235", "236", "237"],
        correct: 0,
        explanation: "6 ile bölünebilen bir sayı hem 2 hem 3 ile bölünür. 234 çifttir ve rakamları toplamı 9'dur. 236'nın rakamları toplamı 11'dir; 235 ve 237 ise tek sayıdır.",
      },
      {
        id: "m6-1-t2-04",
        subject: "matematik",
        term: 1,
        prompt: "57A üç basamaklı sayısının 10 ile tam bölünmesi için A yerine hangi rakam yazılmalıdır?",
        options: ["2", "5", "8", "0"],
        correct: 3,
        explanation: "10 ile tam bölünen doğal sayıların birler basamağı 0'dır. Bu nedenle A = 0 yazılır ve 570 elde edilir.",
      },
      {
        id: "m6-1-t2-05",
        subject: "matematik",
        term: 1,
        prompt: "65 çıkartmanın tamamı, her pakette eşit sayıda çıkartma olacak şekilde paketlenecektir. Beşerli ve onarlı paketler için hangi yorum doğrudur?",
        options: ["Yalnızca onarlı paketleme artansız yapılabilir.", "Her iki paketleme de artansız yapılabilir.", "Yalnızca beşerli paketleme artansız yapılabilir.", "İki paketlemede de mutlaka çıkartma artar."],
        correct: 2,
        explanation: "65'in son rakamı 5 olduğu için sayı 5 ile tam bölünür; 13 paket hazırlanır. Son rakamı 0 olmadığından 10 ile tam bölünmez; onarlı paketlemede 5 çıkartma artar.",
      },
      {
        id: "m6-1-t2-06",
        subject: "matematik",
        term: 1,
        prompt: "Alanı 48 metrekare olan dikdörtgen bir bahçenin kenar uzunlukları metre cinsinden pozitif tam sayıdır. Bir kenarın uzunluğu aşağıdakilerden hangisi olabilir?",
        options: ["5 metre", "7 metre", "9 metre", "12 metre"],
        correct: 3,
        explanation: "Dikdörtgenin alanı iki kenar uzunluğunun çarpımıdır. 48 = 12 × 4 olduğundan bir kenar 12 metre olabilir. 5, 7 ve 9 sayıları 48'in çarpanı değildir.",
      },
      {
        id: "m6-1-t2-07",
        subject: "matematik",
        term: 1,
        prompt: "72 sayısının kaç farklı asal çarpanı vardır?",
        options: ["1", "2", "3", "5"],
        correct: 1,
        explanation: "72 = 2 × 2 × 2 × 3 × 3'tür. Çarpımda 2 ve 3 tekrar etse de farklı asal çarpanlar yalnızca 2 ve 3'tür. Bu nedenle cevap 2'dir.",
      },
      {
        id: "m6-1-t2-08",
        subject: "matematik",
        term: 1,
        prompt: "Hangi sayının tam olarak iki pozitif böleni vardır?",
        options: ["17", "1", "9", "15"],
        correct: 0,
        explanation: "17'nin bölenleri 1 ve 17'dir. 1'in yalnızca bir pozitif böleni vardır. 9'un bölenleri 1, 3, 9; 15'in bölenleri ise 1, 3, 5, 15'tir.",
      },
      {
        id: "m6-1-t2-09",
        subject: "matematik",
        term: 1,
        prompt: "3A iki basamaklı sayısı hem 2 hem de 3 ile tam bölünmektedir. A'nın alabileceği rakamların tamamı hangi seçenektedir?",
        options: ["0 ve 3", "2 ve 8", "0 ve 6", "3 ve 9"],
        correct: 2,
        explanation: "2 ile bölünebilmesi için A çift olmalıdır. 3 + A toplamı da 3'ün katı olmalıdır. Çift rakamlar içinde bu koşulu 0 ve 6 sağlar; oluşan sayılar 30 ve 36'dır.",
      },
      {
        id: "m6-1-t2-10",
        subject: "matematik",
        term: 1,
        prompt: "20 kırmızı ve 30 mavi boncuğun tamamıyla birbirinin aynı hediye paketleri hazırlanacaktır. Her pakette aynı sayıda kırmızı ve aynı sayıda mavi boncuk bulunacaktır. Paket sayısı aşağıdakilerden hangisi olabilir?",
        options: ["4", "5", "6", "8"],
        correct: 1,
        explanation: "Paket sayısı hem 20'nin hem 30'un böleni olmalıdır. 5 paket hazırlanırsa her pakete 4 kırmızı ve 6 mavi boncuk düşer. Diğer seçenekler iki sayıyı birden kalansız bölmez.",
      },
    ],
    test3: [
      {
        id: "m6-1-t3-01",
        subject: "matematik",
        term: 1,
        prompt: "5A2 üç basamaklı sayısı hem 3 hem de 4 ile tam bölünmektedir. A hangi rakamdır?",
        options: ["1", "3", "5", "7"],
        correct: 2,
        explanation: "4 ile bölünebilmesi için A2 sayısı 4'ün katı olmalıdır; A tek rakam olmalıdır. Rakamlar toplamı 7 + A'nın da 3'ün katı olması gerekir. Tek rakamlar içinde bunu yalnızca 5 sağlar: 552'nin son iki basamağı 52, rakamları toplamı 12'dir.",
      },
      {
        id: "m6-1-t3-02",
        subject: "matematik",
        term: 1,
        prompt: "4A5 üç basamaklı sayısı 3 ile tam bölünmektedir. A yerine kaç farklı rakam yazılabilir?",
        options: ["1", "2", "3", "4"],
        correct: 3,
        explanation: "Rakamlar toplamı 4 + A + 5 = 9 + A'dır. Bunun 3'ün katı olması için A; 0, 3, 6 veya 9 olabilir. Toplam dört farklı rakam vardır.",
      },
      {
        id: "m6-1-t3-03",
        subject: "matematik",
        term: 1,
        prompt: "40'tan büyük ve 50'den küçük kaç asal sayı vardır?",
        options: ["3", "4", "5", "6"],
        correct: 0,
        explanation: "Bu aralıktaki asal sayılar 41, 43 ve 47'dir. Çift sayılar 2'ye, 45 sayısı 3'e ve 5'e, 49 sayısı ise 7'ye bölündüğü için asal değildir.",
      },
      {
        id: "m6-1-t3-04",
        subject: "matematik",
        term: 1,
        prompt: "40'tan büyük, 80'den küçük olan ve hem 6'nın hem 8'in katı olan kaç doğal sayı vardır?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Bu aralıktaki 8'in katları 48, 56, 64 ve 72'dir. Bunlardan 48 ve 72, 6'ya da kalansız bölünür. Dolayısıyla iki sayı koşulları sağlar.",
      },
      {
        id: "m6-1-t3-05",
        subject: "matematik",
        term: 1,
        prompt: "15 ve 25 sayılarının ortak bölenlerinden hangisi asal sayıdır?",
        options: ["1", "3", "5", "15"],
        correct: 2,
        explanation: "15'in bölenleri 1, 3, 5, 15; 25'in bölenleri 1, 5, 25'tir. Ortak bölenleri 1 ve 5'tir. 1 asal olmadığından aranan sayı 5'tir.",
      },
      {
        id: "m6-1-t3-06",
        subject: "matematik",
        term: 1,
        prompt: "Deniz, '2'den büyük bütün tek sayılar asaldır.' diyor. Hangi sayı bu düşüncenin yanlış olduğunu gösterir?",
        options: ["29", "31", "35", "37"],
        correct: 2,
        explanation: "35 tek sayı olmasına rağmen 35 = 5 × 7 olduğundan asal değildir. Böyle bir karşı örnek, Deniz'in bütün tek sayılar için kurduğu ifadenin yanlış olduğunu gösterir.",
      },
      {
        id: "m6-1-t3-07",
        subject: "matematik",
        term: 1,
        prompt: "Bir marketteki şişelerin tamamı ister altışarlı ister onarlı kutulara yerleştirildiğinde hiç şişe artmıyor. Şişe sayısı aşağıdakilerden hangisi olabilir?",
        options: ["36", "40", "50", "60"],
        correct: 3,
        explanation: "Şişe sayısı 6 ve 10'un ortak katı olmalıdır. 60 ÷ 6 = 10 ve 60 ÷ 10 = 6'dır. Diğer seçenekler her iki sayıya birden tam bölünmez.",
      },
      {
        id: "m6-1-t3-08",
        subject: "matematik",
        term: 1,
        prompt: "24 özdeş birim kare, boşluk kalmadan dikdörtgen biçiminde dizilecektir. Döndürülmüş hâller aynı kabul edilirse kaç farklı kenar uzunluğu çifti elde edilir?",
        options: ["4", "5", "6", "8"],
        correct: 0,
        explanation: "24'ün çarpan çiftleri (1, 24), (2, 12), (3, 8) ve (4, 6)'dır. Örneğin (6, 4), (4, 6)'nın döndürülmüş hâli olduğundan yeniden sayılmaz. Dört farklı çift vardır.",
      },
      {
        id: "m6-1-t3-09",
        subject: "matematik",
        term: 1,
        prompt: "60 = 2 × 2 × 3 × A eşitliğinde A bir asal sayıdır. A kaçtır?",
        options: ["3", "5", "7", "11"],
        correct: 1,
        explanation: "Bilinen çarpanların çarpımı 2 × 2 × 3 = 12'dir. 60 ÷ 12 = 5 olduğundan eksik çarpan 5'tir. 5 aynı zamanda asal sayıdır.",
      },
      {
        id: "m6-1-t3-10",
        subject: "matematik",
        term: 1,
        prompt: "'9 ile tam bölünen her doğal sayı 3 ile de tam bölünür.' ifadesini hangi gerekçe doğru açıklar?",
        options: ["9'un her katı, 9 = 3 × 3 olduğu için 3'ün de katıdır.", "9 ile bölünen her sayı çift olduğu için 3 ile bölünür.", "9 ile bölünen her sayının birler basamağı 9'dur.", "3 ile bölünen her sayı 9 ile de bölünür."],
        correct: 0,
        explanation: "9'un bir katı 9 × k = 3 × (3 × k) biçiminde yazılabilir; dolayısıyla 3'ün de katıdır. Tersi her zaman doğru değildir: Örneğin 12, 3 ile bölünür ama 9 ile bölünmez.",
      },
    ],
    test4: [
      {
        "id": "m6-1-t4-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Dikdörtgen biçimindeki bahçenin çevresine eşit aralıklarla direk dikilecektir. Her köşede bir direk bulunacak ve iki komşu direk arasındaki uzaklık mümkün olduğunca büyük olacaktır.\n\nBuna göre toplam kaç direk gerekir?",
        "options": [
          "12",
          "14",
          "16",
          "18"
        ],
        "correct": 1,
        "explanation": "Aralık uzunluğu hem 72'yi hem 54'ü tam bölmelidir. Ortak bölenler 1, 2, 3, 6, 9 ve 18'dir; en geniş aralık 18 m olur. Çevre 2 × (72 + 54) = 252 m olduğundan 252 ÷ 18 = 14 direk gerekir. Kapalı bir çevrede direk sayısı aralık sayısına eşittir; köşeler iki kez sayılmaz.",
        "imageUrl": "/grade6/matematik/test-4/soru-01.svg",
        "imageAlt": "72 m uzunluğunda ve 54 m genişliğinde dikdörtgen bahçe. Dört köşe işaretli; ara direkler gösterilmiyor.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "A ve B, sıfırdan farklı ve birbirinden farklı rakamlardır. Dört basamaklı A6B4 sayısı, şemadaki iki koşulu da sağlamaktadır.\n\nBu koşullara uyan en büyük A6B4 sayısı hangisidir?",
        "options": [
          "6624",
          "8644",
          "9664",
          "9684"
        ],
        "correct": 3,
        "explanation": "4'e bölünebilmek için B4 sayısı 4'ün katı olmalı; bu nedenle B, 2, 4, 6 veya 8 olabilir. En büyük sayı için önce A = 9 denenir. Rakamlar toplamı 19 + B'dir; 9'un katı olması için B = 8 gerekir. 9684 sayısında A ve B sıfırdan farklı ve birbirinden farklıdır; iki bölünebilme koşulu da sağlanır. A zaten en büyük rakam olduğundan daha büyük uygun bir sayı yoktur.",
        "imageUrl": "/grade6/matematik/test-4/soru-02.svg",
        "imageAlt": "A6B4 sayısından iki koşula oklar uzanıyor: 4'e kalansız bölünür ve 9'a kalansız bölünür. İki koşul da sağlanıyor.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Çarpan ağacında kendisinden iki dal çıkan her kutudaki sayı, bu iki dalın ucundaki sayıların çarpımına eşittir.\n\nAşağıdakilerden hangisi N sayısının bir çarpanı değildir?",
        "options": [
          "24",
          "45",
          "80",
          "90"
        ],
        "correct": 2,
        "explanation": "N = 2 × 2 × 2 × 3 × 3 × 5 = 360'tır. 360 ÷ 24 = 15, 360 ÷ 45 = 8 ve 360 ÷ 90 = 4'tür. Ancak 360, 80'e kalansız bölünmez; bu yüzden 80 bir çarpanı değildir.",
        "imageUrl": "/grade6/matematik/test-4/soru-03.svg",
        "imageAlt": "Çarpan ağacında N, iki bilinmeyene ayrılıyor. Sol bilinmeyenin dalları 2 ve bir bilinmeyen; bu bilinmeyenin dalları 2 ve 2. Sağ bilinmeyenin dalları 5 ve bir bilinmeyen; bu bilinmeyenin dalları 3 ve 3.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki uyarı lambası, şemada gösterilen düzeni aynı aralıklarla sürdürüyor. Her yanmada hemen sönüyor.\n\n08.00'den sonra 09.30'a kadar (09.30 dâhil) yalnızca bir lambanın yandığı kaç farklı an vardır?",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correct": 0,
        "explanation": "90 dakikada K lambası 7, M lambası 5 kez yanar; başlangıç sayılmaz. Birlikte yanmaları 12 ile 18'in ortak katları olan 36. ve 72. dakikalardadır. Yalnız bir lambanın yandığı an sayısı (7 − 2) + (5 − 2) = 8'dir.",
        "imageUrl": "/grade6/matematik/test-4/soru-04.svg",
        "imageAlt": "K lambasının ilk yanma saatleri 08.00, 08.12 ve 08.24; aralık 12 dakika. M lambasının ilk yanma saatleri 08.00, 08.18 ve 08.36; aralık 18 dakika. İki düzen 09.30'a kadar sürüyor.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Robot, 2 yazılı kareden 19 yazılı kareye gidecektir. Yalnız asal sayıların yazılı olduğu karelere basabilir; sağa, sola, yukarı veya aşağı bir kare ilerleyebilir. Bir kareye ikinci kez basamaz.\n\nRobotun geçtiği karelerdeki sayıların toplamı kaçtır? (Başlangıç ve bitiş dâhildir.)",
        "options": [
          "59",
          "66",
          "68",
          "70"
        ],
        "correct": 3,
        "explanation": "Geçilebilen tek yol 2 → 3 → 5 → 11 → 13 → 17 → 19'dur. Diğer karelerde asal olmayan sayılar vardır. Toplam 2 + 3 + 5 + 11 + 13 + 17 + 19 = 70'tir.",
        "imageUrl": "/grade6/matematik/test-4/soru-05.svg",
        "imageAlt": "4 satır ve 4 sütunlu sayı parkuru. Satırlar soldan sağa: 2, 9, 25, 49; 3, 5, 11, 27; 15, 21, 13, 17; 35, 22, 39, 19. Başlangıç sol üstteki 2, bitiş sağ alttaki 19.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Şekildeki 60 eş kare; aralarında boşluk kalmadan, üst üste gelmeden ve hepsi kullanılarak yeni bir dikdörtgen oluşturacak biçimde yeniden dizilecektir. Yeni dikdörtgenin kısa kenarı en az 4 kareden oluşacaktır.\n\nYeni dikdörtgenin çevresi en fazla kaç santimetre olabilir?",
        "options": [
          "64",
          "68",
          "76",
          "92"
        ],
        "correct": 2,
        "explanation": "60'ın kısa kenarı en az 4 kare olan çarpan çiftleri 4 × 15, 5 × 12 ve 6 × 10'dur. Kare kenarı 2 cm olduğundan çevreler sırasıyla 76, 68 ve 64 cm'dir. En büyük çevre 76 cm olur; 3 × 20 düzeni kısa kenar koşulunu sağlamaz.",
        "imageUrl": "/grade6/matematik/test-4/soru-06.svg",
        "imageAlt": "Başlangıç düzeni 5 satır ve 12 sütunda toplam 60 eş kareden oluşuyor. Ayrı gösterilen bir karenin kenarı 2 cm.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "A ve B, 100'den küçük pozitif doğal sayılardır. Şemada A'nın ve B'nin tüm asal çarpanları gösterilmiştir. Ortak bölgede bulunan 3, iki sayının da asal çarpanıdır.\n\nBuna göre A + B en fazla kaç olabilir?",
        "options": [
          "153",
          "127",
          "147",
          "174"
        ],
        "correct": 0,
        "explanation": "A'nın asal çarpanları yalnız 2, 3 ve 5 olduğundan A, 30'un bir katıdır. 100'den küçük uygun en büyük değer 90'dır. B'nin asal çarpanları yalnız 3 ve 7'dir; uygun değerler 21 ve 63'tür. 42 ve 84'te ayrıca 2 asal çarpanı bulunduğundan alınamaz. En büyük toplam 90 + 63 = 153'tür.",
        "imageUrl": "/grade6/matematik/test-4/soru-07.svg",
        "imageAlt": "A ve B'nin tüm asal çarpanlarını gösteren kesişen iki oval. Yalnız A bölgesinde 2 ve 5, ortak bölgede 3, yalnız B bölgesinde 7 var.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Dört kutuya pozitif doğal sayılar yazılacaktır. Her satırın sağındaki sayı, o satırdaki iki sayının çarpımıdır. Her sütunun altındaki sayı da o sütundaki iki sayının çarpımıdır.\n\nDört kutuya yazılacak sayıların toplamı kaçtır?",
        "options": [
          "24",
          "26",
          "28",
          "30"
        ],
        "correct": 1,
        "explanation": "Sol alttaki sayı hem 35'in hem 14'ün çarpanı olduğundan 1 veya 7 olabilir. 1 olsaydı sol üst 14 olurdu; 14 ise 24'ün çarpanı değildir. Bu yüzden sol alt 7, sol üst 2, sağ alt 5 ve sağ üst 12'dir. Toplam 2 + 12 + 7 + 5 = 26'dır; sağ sütun da 12 × 5 = 60 koşulunu sağlar.",
        "imageUrl": "/grade6/matematik/test-4/soru-08.svg",
        "imageAlt": "İki satır ve iki sütunda dört bilinmeyen kutu. Üst satırın çarpımı 24, alt satırın çarpımı 35. Sol sütunun çarpımı 14, sağ sütunun çarpımı 60.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kavanozdaki boncuk sayısı 150'den fazla, 200'den azdır. Aynı boncukların tamamı, her denemede tabloda belirtilen sayıda boncuk alan kutulara dolduruluyor. Son kutuyu doldurmaya yetmeyen boncuklar artıyor.\n\nKavanozda kaç boncuk vardır?",
        "options": [
          "162",
          "170",
          "182",
          "194"
        ],
        "correct": 1,
        "explanation": "Boncuk sayısından 2 çıkarılınca kalan sayı hem 6'nın hem 8'in katı olmalıdır. Bu ortak katlar 24'ün katlarıdır. 150 ile 200 arasındaki sayı için olasılıklar 170 ve 194'tür. Son satıra göre boncuk sayısı 5'e de kalansız bölünmelidir; yalnız 170 uygundur.",
        "imageUrl": "/grade6/matematik/test-4/soru-09.svg",
        "imageAlt": "Tablo sütunları: Bir kutunun aldığı boncuk ve artan boncuk. Satırlar sırasıyla: 6 ve 2; 8 ve 2; 5 ve 0.",
        "imageWidth": 460,
        "imageHeight": 145
      },
      {
        "id": "m6-1-t4-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Başlangıçtan bitişe giderken K, L, M veya N noktalarından yalnız birinden geçilecektir. Seçilen yolun toplam uzunluğu hem 3'e hem 4'e kalansız bölünmeli, fakat 5'e kalansız bölünmemelidir.\n\nHangi noktadan geçen yol seçilmelidir?",
        "options": [
          "K",
          "L",
          "M",
          "N"
        ],
        "correct": 0,
        "explanation": "Toplam uzunluklar K için 18 + 30 = 48, L için 24 + 36 = 60, M için 20 + 34 = 54 ve N için 26 + 38 = 64 km'dir. 48 hem 3'e hem 4'e bölünür, 5'e bölünmez. 60, 5'e de bölünür; 54, 4'e ve 64, 3'e bölünmez. Yalnız K yolu uygundur.",
        "imageUrl": "/grade6/matematik/test-4/soru-10.svg",
        "imageAlt": "Başlangıçtan bitişe dört yol. K üzerinden iki bölüm 18 km ve 30 km; L üzerinden 24 km ve 36 km; M üzerinden 20 km ve 34 km; N üzerinden 26 km ve 38 km. Ara noktalar birbirine bağlı değil.",
        "imageWidth": 460,
        "imageHeight": 145
      }
    ],
    test5: [
      {
        "id": "m6-1-t5-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir doğal sayının bütün pozitif çarpanları kartlara yazılmıştır. Kartlar, ok yönünde küçükten büyüğe sıralanmıştır.\n\nBuna göre A + B + C kaçtır?",
        "options": [
          "43",
          "38",
          "45",
          "48"
        ],
        "correct": 0,
        "explanation": "Sıralamadaki ilk ve son, ikinci ve sondan ikinci çarpanların çarpımı aynı sayıyı verir. 2 × 15 = 30 olduğundan sayı 30'dur. Çarpanları 1, 2, 3, 5, 6, 10, 15 ve 30'dur. A = 3, B = 10, C = 30; toplam 43'tür.",
        "imageWidth": 360,
        "imageHeight": 244,
        "imageUrl": "/grade6/matematik/test-5/soru-01.svg",
        "imageAlt": "Bir sayının bütün pozitif çarpanlarını gösteren sekiz kart. Oklar üst satırda soldan sağa 1, 2, A, 5 kartlarını izliyor; ardından alt satırın başına dönerek soldan sağa 6, B, 15, C kartlarını izliyor."
      },
      {
        "id": "m6-1-t5-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Gösterilen beş rakam kartından üçü seçilerek üç basamaklı bir sayı oluşturulacaktır. Her kart en fazla bir kez kullanılabilir.\n\nOluşturulan sayı hem 4'e hem 5'e kalansız bölünecekse kaç farklı sayı yazılabilir?",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "correct": 2,
        "explanation": "5'e bölünebilmesi için son rakam 0 veya 5 olmalıdır. 4'e bölünen sayı çift olduğundan son rakam 0'dır. Son iki basamak yalnız 20 veya 80 olabilir. 20 ile biten sayılar 320, 520, 820; 80 ile bitenler 280, 380, 580'dir. Toplam 6 farklı sayı vardır.",
        "imageWidth": 360,
        "imageHeight": 328,
        "imageUrl": "/grade6/matematik/test-5/soru-02.svg",
        "imageAlt": "Rakam kartlarında 0, 2, 3, 5 ve 8 yazıyor. Altlarında üç basamak için üç boş kutu var. Oluşturulan sayının 4’e ve 5’e kalansız bölünmesi gerekiyor."
      },
      {
        "id": "m6-1-t5-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir oyuncu, üzerinde asal sayı yazan iki farklı hedefi vuracaktır. Vurulan iki sayının toplamı 5'in katı olmalıdır. Oyuncunun puanı, vurduğu iki sayının çarpımıdır.\n\nOyuncunun alabileceği en yüksek puan kaçtır?",
        "options": [
          "91",
          "187",
          "209",
          "221"
        ],
        "correct": 3,
        "explanation": "9 asal değildir. Kalan hedeflerde toplamı 5'in katı olan çiftler 7 ve 13, 11 ve 19, 13 ve 17'dir. Bu çiftlerin puanları sırasıyla 91, 209 ve 221'dir. En yüksek puan 221 olur.",
        "imageWidth": 360,
        "imageHeight": 250,
        "imageUrl": "/grade6/matematik/test-5/soru-03.svg",
        "imageAlt": "Aynı görünümde altı dairesel hedef. Üst sırada soldan sağa 7, 9, 11; alt sırada soldan sağa 13, 17, 19 yazıyor."
      },
      {
        "id": "m6-1-t5-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Birbirine bağlı iki dişli çarkın 18 ve 30 dişi vardır. Çarklar dönerken birindeki her dişlik ilerlemeye, diğerindeki bir dişlik ilerleme karşılık gelir. Başlangıçta işaretli iki diş birbirine temas etmektedir.\n\nİşaretli dişler ilk kez yeniden birbirine temas ettiğinde iki çark toplam kaç tam tur atmış olur?",
        "options": [
          "5",
          "8",
          "10",
          "12"
        ],
        "correct": 1,
        "explanation": "Aynı işaretli dişlerin yeniden buluşması için ilerlenen diş sayısı hem 18'in hem 30'un katı olmalıdır. İlk ortak kat 90'dır. Küçük çark 90 ÷ 18 = 5, büyük çark 90 ÷ 30 = 3 tam tur atar. Toplam 5 + 3 = 8 turdur.",
        "imageWidth": 360,
        "imageHeight": 324,
        "imageUrl": "/grade6/matematik/test-5/soru-04.svg",
        "imageAlt": "Birbirine temas eden iki dişli çark. Küçük K çarkında 18 diş, büyük L çarkında 30 diş var. Başlangıçta iki çarkın işaretli dişleri temas noktasında karşı karşıya."
      },
      {
        "id": "m6-1-t5-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "K kulesi yalnız 6 cm, L kulesi yalnız 10 cm yüksekliğindeki bloklar üst üste konularak yapılacaktır. Bloklar kesilmeyecek, iki kulenin yüksekliği eşit olacaktır. Ortak yükseklik 100 cm'den fazla, 160 cm'den az olacaktır.\n\nİki kulede kullanılacak toplam blok sayısı en az kaçtır?",
        "options": [
          "32",
          "28",
          "30",
          "40"
        ],
        "correct": 0,
        "explanation": "İki yükseklik eşit olacağı için ortak yükseklik hem 6'nın hem 10'un katıdır. Verilen aralıkta ortak katlar 120 ve 150'dir. Daha az blok için 120 cm seçilir. K'de 120 ÷ 6 = 20, L'de 120 ÷ 10 = 12 blok kullanılır; toplam 32 bloktur.",
        "imageWidth": 360,
        "imageHeight": 292,
        "imageUrl": "/grade6/matematik/test-5/soru-05.svg",
        "imageAlt": "Üstte K kulesinde kullanılacak bir örnek blok; düşey yüksekliği 6 cm. Altta L kulesinde kullanılacak bir örnek blok; düşey yüksekliği 10 cm. Tamamlanmış kuleler gösterilmiyor."
      },
      {
        "id": "m6-1-t5-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Her kolyedeki boncuk sayısı, o kolyenin sayı kartındaki doğal sayının pozitif çarpan sayısına eşittir. 1 ve sayının kendisi de çarpanlara dâhildir.\n\nK ve L kolyelerinin sayı kartları sırasıyla hangileri olabilir?",
        "options": [
          "16 ve 18",
          "27 ve 20",
          "21 ve 24",
          "32 ve 49"
        ],
        "correct": 1,
        "explanation": "K'de 4, L'de 6 boncuk vardır. 27'nin çarpanları 1, 3, 9, 27; 20'nin çarpanları 1, 2, 4, 5, 10, 20'dir. B seçeneği uygundur. Diğer seçeneklerin çarpan sayıları sırasıyla (5, 6), (4, 8) ve (6, 3) olduğundan iki kolyeye birden uymaz.",
        "imageWidth": 360,
        "imageHeight": 290,
        "imageUrl": "/grade6/matematik/test-5/soru-06.svg",
        "imageAlt": "K ve L adında iki kolye. K kolyesinin kapalı ip halkasında dört, L kolyesinin kapalı ip halkasında altı boncuk bulunuyor. Her kolyenin altında, boncuklardan ayrı, üzerinde soru işareti olan köşeli bir sayı kartı var."
      },
      {
        "id": "m6-1-t5-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Makineye N doğal sayısı giriliyor. İki işlem de kalansız bölmeyle sonuçlanıyor. Çıkan P ve Q sayılarının ikisi de asaldır.\n\nN sayısının kaç pozitif çarpanı vardır?",
        "options": [
          "4",
          "6",
          "8",
          "10"
        ],
        "correct": 2,
        "explanation": "N hem 6'nın hem 14'ün katı olduğundan 42, 84, 126, ... olabilir. Bunlar 6'ya bölündüğünde 7, 14, 21, ... elde edilir. Sonuç asal olacağı için yalnız 7 uygundur; N = 42'dir. Diğer sonuç 42 ÷ 14 = 3 de asaldır. 42'nin çarpanları 1, 2, 3, 6, 7, 14, 21, 42 olmak üzere 8 tanedir.",
        "imageWidth": 360,
        "imageHeight": 356,
        "imageUrl": "/grade6/matematik/test-5/soru-07.svg",
        "imageAlt": "N girişinden iki dal ayrılıyor. Sol dalda 6’ya bölme işleminden P, sağ dalda 14’e bölme işleminden Q çıkıyor. P ve Q asal sayılar."
      },
      {
        "id": "m6-1-t5-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Terazi dengededir. P yazan kütlelerin her biri P gram, Q yazanların her biri Q gramdır. P ve Q, 20'den küçük iki farklı asal sayıdır.\n\nP + Q en fazla kaç olabilir?",
        "options": [
          "20",
          "24",
          "28",
          "30"
        ],
        "correct": 3,
        "explanation": "Teraziden 3 × P + 5 = 2 × Q elde edilir. 20'den küçük asal sayılar denenince uygun (P, Q) çiftleri (3, 7), (7, 13) ve (11, 19) olur. P = 2 tam sayı Q vermez; P en az 13 olduğunda Q, 20'yi geçer. En büyük toplam 11 + 19 = 30'dur.",
        "imageWidth": 360,
        "imageHeight": 338,
        "imageUrl": "/grade6/matematik/test-5/soru-08.svg",
        "imageAlt": "Yatay ve dengede bir terazi. Sol kefede üç ayrı P bloğu ve üzerinde 5 g yazan ayrı bir ağırlık; sağ kefede iki ayrı Q bloğu bulunuyor."
      },
      {
        "id": "m6-1-t5-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir piyon 17 noktasından başlıyor. Her hamlede sayı doğrusunda 5 birim sağa ilerliyor. Şekilde ilk iki hamlesi gösterilmiştir.\n\nPiyon, numarası hem 3'e hem 4'e kalansız bölünen bir noktaya ilk kez kaçıncı hamlede ulaşır?",
        "options": [
          "11",
          "5",
          "7",
          "9"
        ],
        "correct": 0,
        "explanation": "17'den sonra hem 3'e hem 4'e bölünen sayılar 24, 36, 48, 60, 72, ... şeklindedir. Piyonun ulaştığı sayıların son rakamı yalnız 2 veya 7 olabilir. İlk uygun ortak kat 72'dir. 72 − 17 = 55 ve 55 ÷ 5 = 11 olduğundan bu noktaya 11. hamlede ulaşır.",
        "imageWidth": 360,
        "imageHeight": 220,
        "imageUrl": "/grade6/matematik/test-5/soru-09.svg",
        "imageAlt": "Sayı doğrusunda eşit aralıklarla 17, 22 ve 27 işaretli. Piyon 17 noktasında. Üstte 17’den 22’ye ve 22’den 27’ye uzanan iki yay okun her birinde +5 yazıyor. Sayı doğrusu sağa doğru kesikli okla devam ediyor."
      },
      {
        "id": "m6-1-t5-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "P bir asal sayı, N ise pozitif bir doğal sayıdır. Kartlardaki sayıların çarpımı ve aralarındaki farkla ilgili bilgiler görselde verilmiştir.\n\nBuna göre P + N kaçtır?",
        "options": [
          "17",
          "19",
          "20",
          "25"
        ],
        "correct": 1,
        "explanation": "Çarpımı 84 olan ve en az bir sayısı asal olan pozitif sayı çiftleri (2, 42), (3, 28) ve (7, 12)'dir. Farkları sırasıyla 40, 25 ve 5'tir. Farkı 10'dan küçük olan tek çift 7 ve 12 olduğundan P + N = 19'dur.",
        "imageWidth": 360,
        "imageHeight": 264,
        "imageUrl": "/grade6/matematik/test-5/soru-10.svg",
        "imageAlt": "P ve N yazan iki kart. P asal, N doğal sayı olarak belirtilmiş. Altlarındaki bilgiler: Çarpımları 84; farkları 10’dan az."
      }
    ],
    test6: [
      {
        "id": "m6-1-t6-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir resim küpüyle yapılan atışların bütün sonuçları tabloda gösterilmiştir. Yıldız gelmesinin göreli sıklığı 3/10 olarak hesaplanmıştır.\n\nBu verilere göre ay gelmesinin deneysel olasılığı kaçtır?",
        "options": [
          "1/5",
          "1/4",
          "3/10",
          "1/3"
        ],
        "correct": 1,
        "explanation": "18 yıldız, bütün atışların 3/10’unu oluşturur. Toplam atış sayısı 18 ÷ 3 × 10 = 60’tır. Ay sayısı 60 − (18 + 15 + 12) = 15 olur. Ayın deneysel olasılığı 15/60 = 1/4’tür.",
        "imageWidth": 360,
        "imageHeight": 352,
        "imageUrl": "/grade6/matematik/test-6/soru-01.svg",
        "imageAlt": "Sıklık tablosu: Yıldız 18, ay soru işareti, yaprak 15, çiçek 12 kez gelmiş. Yıldızın göreli sıklığı 3/10 olarak verilmiş. Küpün yüzleri veya toplam atış sayısı gösterilmiyor."
      },
      {
        "id": "m6-1-t6-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Dört grup, aynı kurallarla hedefe halka atma deneyi yapıyor. Her atışta bir halka kullanılıyor. Deneme ve isabet sayıları tabloda verilmiştir.\n\nHangi grubun verileri, bir atışın isabetli olmasına ilişkin en yüksek deneysel olasılığı verir?",
        "options": [
          "K",
          "L",
          "M",
          "N"
        ],
        "correct": 3,
        "explanation": "Her grupta isabet sayısı deneme sayısına bölünür. K: 18/45 = 2/5; L: 15/30 = 1/2; M: 28/70 = 2/5; N: 24/40 = 3/5. En yüksek değer N grubundadır. Yalnız isabet sayılarını karşılaştırmak doğru değildir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-6/soru-02.svg",
        "imageAlt": "Dört satırlı tablo. K: 45 deneme, 18 isabet. L: 30 deneme, 15 isabet. M: 70 deneme, 28 isabet. N: 40 deneme, 24 isabet."
      },
      {
        "id": "m6-1-t6-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir öğrenci aynı topu, aynı uzaklıktan bir kutuya atıyor. Koşulları değiştirmeden yaptığı iki turdaki atışların sonuçları görselde verilmiştir.\n\nİki turun tüm atışları birlikte değerlendirildiğinde, topun kutuya girmesinin deneysel olasılığı kaçtır?",
        "options": [
          "21/40",
          "1/2",
          "3/5",
          "21/25"
        ],
        "correct": 0,
        "explanation": "Toplam atış sayısı 30 + 50 = 80, kutuya giren top sayısı 12 + 30 = 42’dir. Deneysel olasılık 42/80 = 21/40 olur. Tur sayıları farklı olduğundan iki turun olasılıklarını doğrudan toplayıp ikiye bölmek doğru sonuç vermez.",
        "imageWidth": 360,
        "imageHeight": 288,
        "imageUrl": "/grade6/matematik/test-6/soru-03.svg",
        "imageAlt": "Yan yana iki tur paneli. Birinci turda 30 atış, 12 kez kutuya girme; ikinci turda 50 atış, 30 kez kutuya girme kaydı var. Her paneldeki bir top ve kutu simgesi sayım amacı taşımıyor."
      },
      {
        "id": "m6-1-t6-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir torbadan her seferinde bir pul çekilip rengi kaydediliyor; pul geri konularak torba karıştırılıyor. İlk 80 denemede 24 kez mavi geliyor. Sonra aynı şekilde 20 deneme daha yapılıyor. Bütün denemeler sonunda mavinin göreli sıklığı 2/5 oluyor.\n\nSon 20 denemenin kaçında mavi gelmiştir?",
        "options": [
          "8",
          "12",
          "16",
          "40"
        ],
        "correct": 2,
        "explanation": "Toplam deneme sayısı 80 + 20 = 100’dür. 100 denemenin 2/5’i, yani 40’ı mavi olmalıdır. İlk bölümde 24 mavi olduğuna göre son bölümde 40 − 24 = 16 mavi gelmiştir.",
        "imageWidth": 360,
        "imageHeight": 356,
        "imageUrl": "/grade6/matematik/test-6/soru-04.svg",
        "imageAlt": "Yukarıdan aşağıya oklarla bağlanan üç bilgi kutusu. İlk 80 denemede mavi 24 kez. Ek 20 denemede mavi sayısı soru işareti. Bütün denemeler sonunda mavinin göreli sıklığı 2/5."
      },
      {
        "id": "m6-1-t6-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir renk çarkı 30 kez çevrilip her seferinde gelen renk kaydediliyor. Elde edilen sonuçlar görselde verilmiştir.\n\nYalnız bu deney verilerine dayanılarak yapılan yorumlardan hangisi doğrudur?",
        "options": [
          "Kırmızı gelmesi imkânsızdır.",
          "Kırmızının göreli sıklığı 0’dır; bu, bir sonraki sonucu kesinleştirmez.",
          "Sonraki 30 çevirmede kırmızı mutlaka gelir.",
          "Bir sonraki çevirmede mavi gelmesi kesindir."
        ],
        "correct": 1,
        "explanation": "Bu deneyde kırmızı 0 kez gözlendiğinden göreli sıklığı 0/30 = 0’dır. Ancak bir rengin 30 denemede görülmemesi, ileride görülmesinin imkânsız olduğunu kanıtlamaz. Veriler sonraki sonucun mavi olacağını veya sonraki 30 denemede kırmızının mutlaka geleceğini de garanti etmez.",
        "imageWidth": 360,
        "imageHeight": 320,
        "imageUrl": "/grade6/matematik/test-6/soru-05.svg",
        "imageAlt": "30 çevirmenin sonuçları, dört eşit büyüklükte kartta gösterilmiş: Mavi 14, yeşil 9, sarı 7, kırmızı 0 kez. Çarkın kendisi veya dilim büyüklükleri gösterilmiyor."
      },
      {
        "id": "m6-1-t6-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir bilye aynı rampadan bırakılıyor ve düştüğü A, B veya C bölmesi kaydediliyor. Nokta grafiği ilk 20 denemenin sonuçlarını gösteriyor. Aynı koşullarda 10 deneme daha yapılacaktır.\n\nB bölmesine düşmenin göreli sıklığının değişmemesi için ek 10 denemenin kaçında B sonucu alınmalıdır?",
        "options": [
          "4",
          "5",
          "8",
          "12"
        ],
        "correct": 0,
        "explanation": "Grafikte B için 8 nokta vardır. İlk göreli sıklık 8/20 = 2/5’tir. 30 denemede bu değerin korunması için toplam B sayısı 30 × 2/5 = 12 olmalıdır. Ek denemelerde 12 − 8 = 4 kez B gelmelidir.",
        "imageWidth": 360,
        "imageHeight": 358,
        "imageUrl": "/grade6/matematik/test-6/soru-06.svg",
        "imageAlt": "İlk 20 denemenin nokta grafiği. A sütununda 5, B sütununda 8, C sütununda 7 nokta var. Her nokta bir denemeyi gösteriyor. Noktalar eşit büyüklükte ve ortak satır aralıklarıyla dizilmiş."
      },
      {
        "id": "m6-1-t6-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir uygulama her çalıştırıldığında tek bir sembol gösteriyor. Görseldeki her kart, deneyin başlangıcından o ana kadar yapılan toplam deneme sayısını ve toplam yaprak sayısını veriyor.\n\nYalnız son 50 deneme dikkate alınırsa yaprak görülmesinin göreli sıklığı kaçtır?",
        "options": [
          "23/50",
          "11/25",
          "2/5",
          "12/25"
        ],
        "correct": 3,
        "explanation": "50. denemeye kadar 22, 100. denemeye kadar 46 yaprak görülmüştür. Son 50 denemedeki yaprak sayısı 46 − 22 = 24’tür. İstenen göreli sıklık 24/50 = 12/25 olur. 46/100 ise son 50 denemenin değil, bütün deneyin göreli sıklığıdır.",
        "imageWidth": 360,
        "imageHeight": 354,
        "imageUrl": "/grade6/matematik/test-6/soru-07.svg",
        "imageAlt": "Başlık: Biriken kayıtlar; her kart toplamı gösterir. Düşey bir ilerleme çizgisindeki kartlarda sırasıyla 20. denemede toplam 10 yaprak, 50. denemede toplam 22 yaprak, 100. denemede toplam 46 yaprak yazıyor."
      },
      {
        "id": "m6-1-t6-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir madeni para art arda atılıyor. Toplam atış sayısı 40’tan fazla, 60’tan azdır. Yazı gelmesinin göreli sıklığı tam olarak 5/12 hesaplanmıştır.\n\nBu deneyde kaç kez yazı gelmiştir?",
        "options": [
          "16",
          "18",
          "20",
          "24"
        ],
        "correct": 2,
        "explanation": "5/12 sadeleşmiş bir kesirdir. Bu nedenle toplam atış sayısı 12’nin katı olmalıdır. 40 ile 60 arasındaki tek 12 katı 48’dir. Yazı sayısı 48 ÷ 12 × 5 = 20’dir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-6/soru-08.svg",
        "imageAlt": "Deney defterinde iki bilgi grubu var: Atış sayısı 40’tan fazla ve 60’tan az. Yazı gelmesinin göreli sıklığı 5/12. Toplam atış ve yazı sayısı gösterilmiyor."
      },
      {
        "id": "m6-1-t6-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir plastik kapak aynı yükseklikten 60 kez bırakılıyor; 21 kez açık yüzü yukarıda kalıyor. Öğrenci aynı koşullarda 100 yeni deneme yapmayı planlıyor.\n\nÖnceki verilere dayalı olarak, 100 yeni denemede açık yüzün yukarıda kalma sayısı için hangi yorum uygundur?",
        "options": [
          "Kesinlikle 21 kez olur.",
          "Yaklaşık 35 kez olması beklenir; bu sayı garanti değildir.",
          "Kesinlikle 35 kez olur.",
          "Yaklaşık 60 kez olması beklenir."
        ],
        "correct": 1,
        "explanation": "Gözlenen göreli sıklık 21/60 = 7/20 = 35/100’dür. Bu veriye dayanan tahmin, 100 yeni denemede yaklaşık 35 kez açık yüzün yukarıda kalmasıdır. Yeni deneyin sonucu değişebilir; 35 sayısı kesin bir sonuç değildir.",
        "imageWidth": 360,
        "imageHeight": 336,
        "imageUrl": "/grade6/matematik/test-6/soru-09.svg",
        "imageAlt": "Üstte gözlenen sonuçlar kartı: 60 deneme, 21 kez açık yüz yukarıda. Aşağıya doğru, yanında Tahmin yazan bir ok var. Altta planlanan deney kartı: 100 deneme, açık yüzün yukarıda kalma sayısı soru işareti."
      },
      {
        "id": "m6-1-t6-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir bilye, iki çıkışlı bir rampadan her seferinde aynı noktadan bırakılıyor. Sonuçlar kaydedilirken 10 deneme yanlışlıkla iki kez yazılmıştır. Hatalı tablodaki kayıt sayıları ile iki kez yazılan denemelerin sonuçları görselde verilmiştir.\n\nTekrarlanan kayıtlar düzeltildiğinde, bilyenin K çıkışına ulaşmasının deneysel olasılığı kaçtır?",
        "options": [
          "21/50",
          "9/20",
          "7/20",
          "27/50"
        ],
        "correct": 0,
        "explanation": "Hatalı tabloda 27 + 33 = 60 kayıt vardır. İki kez yazılan 10 denemenin fazla olan kopyaları çıkarılınca gerçek deneme sayısı 50 olur. K için 6 fazla kayıt olduğundan gerçek K sayısı 27 − 6 = 21’dir. Düzeltilmiş deneysel olasılık 21/50’dir.",
        "imageWidth": 360,
        "imageHeight": 330,
        "imageUrl": "/grade6/matematik/test-6/soru-10.svg",
        "imageAlt": "Alt alta iki kayıt panosu, aynı hizada K ve L sütunları. Hatalı kayıt panosunda K 27, L 33 yazıyor. İki kez yazılan denemeler panosunda K 6, L 4 yazıyor. Düzeltilmiş toplamlar gösterilmiyor."
      }
    ],
    test7: [
      {
        "id": "m6-1-t7-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Sayı doğrusunda 3,4 ile 3,5 arası 10 eş parçaya ayrılmıştır. P ve Q işaretli noktalardır.\n\nP ile Q’nun tam ortasındaki sayının yüzde birler basamağına yuvarlanmış değeri kaçtır?",
        "options": [
          "3,45",
          "3,46",
          "3,50",
          "3,55"
        ],
        "correct": 1,
        "explanation": "Her aralık 0,01’dir. P = 3,43 ve Q = 3,48 olur. Ortadaki sayı (3,43 + 3,48) ÷ 2 = 3,455’tir. Binde birler basamağı 5 olduğundan yüzde birlere yuvarlanan değer 3,46’dır.",
        "imageWidth": 360,
        "imageHeight": 230,
        "imageUrl": "/grade6/matematik/test-7/soru-01.svg",
        "imageAlt": "3,4 ile 3,5 arasındaki sayı doğrusu 10 eş aralığa bölünmüş. P, 3,4’ten sonraki üçüncü; Q ise sekizinci işarette. Ortadaki sayının değeri gösterilmiyor."
      },
      {
        "id": "m6-1-t7-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Tabloda bir ondalık sayının rakamları gösterilmiştir. Yalnız onda birler ve yüzde birler basamaklarındaki rakamların yerleri değiştiriliyor.\n\nYeni sayı, ilk sayıdan ne kadar büyüktür?",
        "options": [
          "0,027",
          "0,30",
          "0,27",
          "2,7"
        ],
        "correct": 2,
        "explanation": "İlk sayı 2,475, yeni sayı 2,745’tir. Artış 2,745 − 2,475 = 0,270 = 0,27 olur. Rakamların yer değiştirmesiyle 0,3 kazanılırken 0,03 kaybedilir.",
        "imageWidth": 360,
        "imageHeight": 330,
        "imageUrl": "/grade6/matematik/test-7/soru-02.svg",
        "imageAlt": "Basamak tablosu: Birler 2, onda birler 4, yüzde birler 7, binde birler 5. Onda birler ve yüzde birler satırları oklarla birbirine bağlanmış."
      },
      {
        "id": "m6-1-t7-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki şerit görseldeki gibi 15 cm’lik bölümleri üst üste gelecek şekilde birleştiriliyor. Şeritlerin uzunlukları 7/8 m ve 0,65 m’dir.\n\nBirleşen şeridin toplam uzunluğu metre cinsinden yüzde birler basamağına yuvarlanırsa kaç olur?",
        "options": [
          "1,37",
          "1,53",
          "1,23",
          "1,38"
        ],
        "correct": 3,
        "explanation": "7/8 m = 0,875 m ve 15 cm = 0,15 m’dir. Üst üste gelen kısım bir kez çıkarılır: 0,875 + 0,65 − 0,15 = 1,375 m. Yüzde birlere yuvarlandığında 1,38 m olur.",
        "imageWidth": 360,
        "imageHeight": 300,
        "imageUrl": "/grade6/matematik/test-7/soru-03.svg",
        "imageAlt": "İlk şerit 7/8 m, ikinci şerit 0,65 m. İki şerit 15 cm boyunca üst üste bindirilmiş; bu bölge kesikli sınırlarla belirtilmiş. Çizim ölçekli değildir."
      },
      {
        "id": "m6-1-t7-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "2,4 m uzunluğundaki bir çıtadan, her birinin son uzunluğu 0,45 m olan 4 parça kesiliyor. Her kesimde 0,5 cm uzunluğundaki bölüm talaş oluyor. Parçaları ayırmak için 4 kesim yapılıyor.\n\nGeriye kalan tek parçanın uzunluğu kaç santimetredir?",
        "options": [
          "58",
          "60",
          "38",
          "59,5"
        ],
        "correct": 0,
        "explanation": "Çıtanın uzunluğu 240 cm, dört parçanın toplamı 4 × 45 = 180 cm’dir. Dört kesimde 4 × 0,5 = 2 cm talaş olur. Geriye 240 − 180 − 2 = 58 cm kalır.",
        "imageWidth": 360,
        "imageHeight": 330,
        "imageUrl": "/grade6/matematik/test-7/soru-04.svg",
        "imageAlt": "Çıta şeması: 0,45 m’lik dört parça, aralarında dört dar kesim bölgesi ve en sağda kalan parça. Toplam 2,4 m. Her kesim 0,5 cm. Çizim ölçekli değildir."
      },
      {
        "id": "m6-1-t7-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "A ve B birer rakamdır. 4,A7B sayısı iki ayrı işlemde, doğrudan ilk hâli üzerinden yuvarlanıyor. Elde edilen sonuçlar görselde verilmiştir.\n\nBuna göre A + B toplamının alabileceği en küçük değer kaçtır?",
        "options": [
          "7",
          "8",
          "9",
          "12"
        ],
        "correct": 1,
        "explanation": "Onda birlere yuvarlama sonucu 4,4 olduğundan ve yüzde birler basamağı 7 olduğundan A = 3’tür. 4,37B sayısının yüzde birlere yuvarlanmış hâli 4,38 ise B en az 5 olmalıdır. En küçük toplam 3 + 5 = 8’dir.",
        "imageWidth": 360,
        "imageHeight": 340,
        "imageUrl": "/grade6/matematik/test-7/soru-05.svg",
        "imageAlt": "Başlangıç sayısı 4,A7B. Bir dalda yüzde birlere yuvarlanınca 4,38, diğer dalda onda birlere yuvarlanınca 4,4 elde ediliyor. Her iki ok doğrudan başlangıç sayısından çıkıyor."
      },
      {
        "id": "m6-1-t7-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "7,5 m uzunluğundaki bir kurdele, hiç kayıp olmadan 6 eş parçaya ayrılıyor. Bu parçalardan yalnız birinin ucundan 0,18 m kesiliyor.\n\nKısaltılan parçanın son uzunluğu kaç santimetredir?",
        "options": [
          "12,3",
          "125",
          "107",
          "123"
        ],
        "correct": 2,
        "explanation": "Bir eş parçanın uzunluğu 7,5 ÷ 6 = 1,25 m’dir. Kısaltılan parça 1,25 − 0,18 = 1,07 m olur. 1,07 m = 107 cm’dir. Diğer beş parçadan kesim yapılmamıştır.",
        "imageWidth": 360,
        "imageHeight": 300,
        "imageUrl": "/grade6/matematik/test-7/soru-06.svg",
        "imageAlt": "Üstte toplam 7,5 m olan kurdele altı eş bölmeye ayrılmış. Bir parça altta büyütülmüş ve ucundaki 0,18 m’lik bölüm kesik çizgiyle ayrılmış; kalan bölüm soru işaretiyle gösterilmiş."
      },
      {
        "id": "m6-1-t7-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir yürüyüş parkurunda A → B → C → D → A turunun toplam uzunluğu 1,25 km’dir. Üç bölümün uzunlukları krokide verilmiştir.\n\nD ile A arasındaki parkur bölümü kaç metredir?",
        "options": [
          "145",
          "175",
          "455",
          "1.145"
        ],
        "correct": 0,
        "explanation": "Toplam uzunluk 1,25 km = 1250 m’dir. Bilinen bölümler 0,48 km = 480 m, 350 m ve 0,275 km = 275 m’dir. D–A bölümü 1250 − (480 + 350 + 275) = 145 m olur.",
        "imageWidth": 360,
        "imageHeight": 360,
        "imageUrl": "/grade6/matematik/test-7/soru-07.svg",
        "imageAlt": "Dört köşeli parkur krokisi: A–B 0,48 km, B–C 350 m, C–D 0,275 km ve D–A soru işareti. Bir turun toplamı 1,25 km. Kroki ölçekli değildir."
      },
      {
        "id": "m6-1-t7-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "0, 3, 5 ve 8 rakamlarının her biri birer kez kullanılarak birler basamağı ve virgülden sonra üç basamağı olan sayılar yazılıyor.\n\nBu sayılardan 5,4’ten küçük olanların en büyüğü ile 3,5’ten büyük olanların en küçüğü arasındaki fark kaçtır?",
        "options": [
          "1,030",
          "1,850",
          "1,880",
          "1,872"
        ],
        "correct": 3,
        "explanation": "5,4’ten küçük en büyük uygun sayı 5,380’dir. 3,5’ten büyük en küçük uygun sayı 3,508’dir. Aralarındaki fark 5,380 − 3,508 = 1,872 olur."
      },
      {
        "id": "m6-1-t7-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir şeridin metre cinsinden uzunluğu virgülden sonra tam üç basamakla yazılıyor. Bu sayı yüzde birler basamağına yuvarlandığında 2,75 oluyor.\n\nŞeridin alabileceği en büyük ve en küçük uzunluk arasındaki fark kaç milimetredir?",
        "options": [
          "1",
          "9",
          "10",
          "5"
        ],
        "correct": 1,
        "explanation": "Yüzde birlere yuvarlandığında 2,75 olan üç ondalık basamaklı değerlerin en küçüğü 2,745 m, en büyüğü 2,754 m’dir. Fark 0,009 m = 9 mm’dir. 2,755 m ise 2,76’ya yuvarlanır."
      },
      {
        "id": "m6-1-t7-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir öğrenci 3 m ipi hiç kayıp olmadan 8 eş parçaya ayırıyor. Her parçanın gerçek uzunluğu yerine, metre cinsinden yüzde birler basamağına yuvarlanmış uzunluğunu kullanarak 4 parçanın toplamını hesaplıyor.\n\nÖğrencinin bulduğu toplam, bu 4 parçanın gerçek toplam uzunluğundan kaç santimetre fazladır?",
        "options": [
          "0,5",
          "1",
          "2",
          "4"
        ],
        "correct": 2,
        "explanation": "Bir parçanın gerçek uzunluğu 3 ÷ 8 = 0,375 m, yuvarlanmış uzunluğu 0,38 m’dir. Dört parça için hesaplanan toplam 4 × 0,38 = 1,52 m, gerçek toplam 4 × 0,375 = 1,50 m’dir. Fark 0,02 m = 2 cm’dir."
      }
    ],
    test8: [
      {
        "id": "m6-1-t8-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Nokta grafiği, 10 öğrencinin geçen ay okuduğu kitap sayısını gösteriyor. Her nokta bir öğrenciyi temsil ediyor.\n\nBu veri grubunun aritmetik ortalaması, ortancasından ne kadar fazladır?",
        "options": [
          "0",
          "0,2",
          "1",
          "2,2"
        ],
        "correct": 1,
        "explanation": "Kitap sayıları 0, 1, 1, 2, 2, 2, 3, 3, 4, 4’tür. Toplam 22, ortalama 22 ÷ 10 = 2,2’dir. Ortadaki iki değer de 2 olduğundan ortanca 2’dir. Fark 0,2 olur.",
        "imageWidth": 360,
        "imageHeight": 300,
        "imageUrl": "/grade6/matematik/test-8/soru-01.svg",
        "imageAlt": "Nokta grafiğinde kitap sayısı 0 için bir, 1 için iki, 2 için üç, 3 için iki, 4 için iki nokta var. Her nokta bir öğrencidir."
      },
      {
        "id": "m6-1-t8-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Yedi öğrencinin bir haftada çözdüğü bulmaca sayıları kök-yaprak gösteriminde verilmiştir.\n\nVeri grubunun ortancası ile açıklığı arasındaki fark kaçtır?",
        "options": [
          "4",
          "5",
          "6",
          "12"
        ],
        "correct": 2,
        "explanation": "Gösterimdeki sayılar 12, 14, 14, 18, 20, 22 ve 24’tür. Ortanca dördüncü değer olan 18, açıklık 24 − 12 = 12’dir. İstenen fark 18 − 12 = 6’dır.",
        "imageWidth": 360,
        "imageHeight": 290,
        "imageUrl": "/grade6/matematik/test-8/soru-02.svg",
        "imageAlt": "Kök-yaprak gösterimi: kök 1, yapraklar 2 4 4 8; kök 2, yapraklar 0 2 4. Anahtar: 1 | 2, 12 bulmaca demektir."
      },
      {
        "id": "m6-1-t8-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Tabloda 10 öğrencinin bir ayda kütüphaneden aldığı kitap sayıları verilmiştir. Bir sıklık değeri silinmiştir.\n\nBu veri grubunun ortancası ile tepe değerinin toplamı kaçtır?",
        "options": [
          "2,5",
          "3",
          "4",
          "3,5"
        ],
        "correct": 3,
        "explanation": "Eksik sıklık 10 − (2 + 3 + 1) = 4’tür. Sıralı veriler 0, 0, 1, 1, 1, 2, 2, 2, 2, 3 olur. Ortanca (1 + 2) ÷ 2 = 1,5; en sık görülen değer 2’dir. Toplam 3,5’tir.",
        "imageWidth": 360,
        "imageHeight": 365,
        "imageUrl": "/grade6/matematik/test-8/soru-03.svg",
        "imageAlt": "Sıklık tablosunda kitap sayısı 0, 1, 2, 3; öğrenci sayısı sırasıyla 2, 3, soru işareti, 1. Toplam 10 öğrenci."
      },
      {
        "id": "m6-1-t8-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki gruptaki öğrencilerin aynı gün çözdüğü bulmaca sayıları kartlarda verilmiştir.\n\nBu iki veri grubu için aşağıdaki yorumlardan hangisi doğrudur?",
        "options": [
          "Ortalamaları eşittir; B’nin ortancası daha büyük, açıklığı daha küçüktür.",
          "B’nin ortalaması daha büyüktür; açıklıkları eşittir.",
          "Ortancaları eşittir; A’nın açıklığı daha küçüktür.",
          "A’nın ortalaması ve ortancası B’ninkinden büyüktür."
        ],
        "correct": 0,
        "explanation": "A’nın toplamı da B’nin toplamı da 25 olduğundan ortalamaları 5’tir. A’nın ortancası 4, açıklığı 9 − 2 = 7; B’nin ortancası 5, açıklığı 7 − 3 = 4’tür. Bu yüzden yalnız ilk yorum doğrudur.",
        "imageWidth": 360,
        "imageHeight": 280,
        "imageUrl": "/grade6/matematik/test-8/soru-04.svg",
        "imageAlt": "A grubu: 2, 4, 4, 6, 9. B grubu: 3, 4, 5, 6, 7. Her grupta beş öğrenci bulunuyor."
      },
      {
        "id": "m6-1-t8-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "30 öğrencinin seçtiği etkinlikler grafikte verilmiştir. Her öğrenci yalnız bir etkinlik seçmiştir. Yalnız satrancı seçen bazı öğrenciler tercihlerini resim olarak değiştiriyor.\n\nResmin, tek başına en çok seçilen etkinlik olması için en az kaç öğrenci tercih değiştirmelidir?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 1,
        "explanation": "Başlangıçta satranç 12, resim 8, spor 10 kişidir. İki kişi değiştirirse üç etkinlik de 10 olur; resim tek başına öne geçmez. Üç kişi değiştirirse sayılar 9, 11, 10 olur. En az 3 kişi gereklidir.",
        "imageWidth": 360,
        "imageHeight": 345,
        "imageUrl": "/grade6/matematik/test-8/soru-05.svg",
        "imageAlt": "Yatay sütun grafiğinde satranç 12, resim 8, spor 10 öğrenci. Sütunlar sıfırdan başlıyor ve ortak ölçek kullanıyor."
      },
      {
        "id": "m6-1-t8-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Grafikte iki sınıfın topladığı atık pil sayısı gösteriliyor. Düşey eksen 0 yerine 18’den başlatılmıştır. Bir öğrenci, görünen B sütunu A’nın üç katı yükseklikte olduğu için “B sınıfı, A sınıfının topladığı pil sayısının üç katı kadar pil toplamıştır.” diyor.\n\nHangi değerlendirme doğrudur?",
        "options": [
          "Yorum doğrudur; sütunların görünen boyları yeterlidir.",
          "A sınıfı B’den 4 pil fazla toplamıştır.",
          "B sınıfı 4 pil fazla toplamıştır; kesilmiş eksen farkı abartır.",
          "B sınıfı 60 pil toplamıştır; grafikte sayı yanlış yazılmıştır."
        ],
        "correct": 2,
        "explanation": "Gerçek değerler A için 20, B için 24’tür. Fark 4’tür ve 24, 20’nin üç katı değildir. Görünen sütun boyları 18’den başladığı için 2 ile 6 olarak karşılaştırılmıştır. Sıfırdan başlamayan eksen, farkın olduğundan büyük algılanmasına yol açabilir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-8/soru-06.svg",
        "imageAlt": "Pil sayısı ekseni 18, 20, 22, 24 olarak işaretli. A sütunu 20’ye, B sütunu 24’e ulaşıyor. Eksenin 18’den başladığı açıkça belirtiliyor."
      },
      {
        "id": "m6-1-t8-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Okuldaki 80 altıncı sınıf öğrencisinin geçen ay okuduğu kitap sayısı araştırılıyor. Ancak yalnız kitap kulübündeki 12 öğrenciye soru soruluyor. Kayıtlar görseldeki gibidir.\n\nBu araştırmayla ilgili hangi sonuç savunulabilir?",
        "options": [
          "Okuldaki 80 öğrencinin 10’u dışında hiçbiri üç kitap okumamıştır.",
          "Kitap kulübü öğrencileri kesinlikle diğerlerinden daha çok okumuştur.",
          "12 kişilik grubun sonucu, diğer 68 öğrenciye sormadan aynen genellenebilir.",
          "Ankete katılan 12 öğrencinin 10’u en az üç kitap okumuştur; yalnız kitap kulübünden seçilen bu grup, 80 öğrencinin tümünü temsil etmeyebilir."
        ],
        "correct": 3,
        "explanation": "Doğrudan bilinen sonuç, ankete katılan 12 kişinin 10’unun en az üç kitap okuduğudur. Yalnız kitap kulübünden seçilen grup, okuldaki 80 altıncı sınıf öğrencisini temsil etmeyebilir. Sorun sadece grubun büyüklüğü değil, kitap okumaya ilgi duyan öğrencilerden seçilmesinin yanlılığa yol açabilmesidir.",
        "imageWidth": 360,
        "imageHeight": 460,
        "imageUrl": "/grade6/matematik/test-8/soru-07.svg",
        "imageAlt": "Okuldaki altıncı sınıflar: 80 öğrenci. Sorulan grup: kitap kulübündeki 12 öğrenci. Bu grupta en az üç kitap okuyan 10, daha az okuyan 2. Diğer 68 kişiye sorulmamış."
      },
      {
        "id": "m6-1-t8-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "6/A ve 6/B sınıflarının kitap okuma durumunu nicel (kesikli) verilerle karşılaştırmak isteyen bir öğrenci, her iki sınıftaki herkese aynı soruyu soracaktır.\n\nHangi anket sorusu hem amaca uygundur hem de karşılaştırma için ortak bir zaman aralığı belirler?",
        "options": [
          "Kitap okumak çok yararlıdır; siz de katılıyor musunuz?",
          "1–30 Eylül arasında baştan sona kaç kitap bitirdiniz?",
          "En sevdiğiniz kitap türü nedir?",
          "Hayatınızda güzel kitaplar okudunuz mu?"
        ],
        "correct": 1,
        "explanation": "Belirli ve aynı tarih aralığında bitirilen kitap sayısı, her öğrenciden sayılabilir nicel veri elde edilmesini sağlar. İki sınıf bu ortak ölçüte göre karşılaştırılabilir. Diğer sorular sayı vermez veya yönlendiricidir."
      },
      {
        "id": "m6-1-t8-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Beş öğrencinin bir ayda bitirdiği kitap sayıları 2, 4, 5, 7 ve 7’dir. Gruba bir öğrenci daha eklenince aritmetik ortalama değişmiyor.\n\nAltı kişilik yeni veri grubunun tepe değerleri hangileridir?",
        "options": [
          "Yalnız 5",
          "Yalnız 7",
          "5 ve 7",
          "4 ve 5"
        ],
        "correct": 2,
        "explanation": "İlk toplam 25, ortalama 5’tir. Altı kişinin ortalaması da 5 ise yeni toplam 30, eklenen değer 5 olur. Yeni veriler 2, 4, 5, 5, 7, 7’dir. 5 ve 7 ikişer kez görüldüğü için iki tepe değer vardır."
      },
      {
        "id": "m6-1-t8-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Beş gün boyunca her gün çözülen bulmaca sayıları yanlışlıkla 4, 6, 8, 9, 18 olarak kaydedilmiştir. Son kaydın 18 değil 8 olması gerektiği fark edilip düzeltiliyor.\n\nDüzeltme sonucunda aritmetik ortalama ve ortanca nasıl değişir?",
        "options": [
          "Ortalama 2 azalır, ortanca değişmez.",
          "Ortalama 10 azalır, ortanca değişmez.",
          "Ortalama 2 azalır, ortanca 1 azalır.",
          "Ortalama değişmez, ortanca 2 azalır."
        ],
        "correct": 0,
        "explanation": "Yanlış toplam 45, ortalama 9’dur. Doğru sıralı veri 4, 6, 8, 8, 9; toplam 35 ve ortalama 7’dir. Ortalama 2 azalır. Her iki sıralı grubun üçüncü değeri 8 olduğundan ortanca değişmez."
      }
    ],
    test9: [
      {
        "id": "m6-1-t9-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Şekilde d ve e doğruları paraleldir. Bu doğruları kesen k doğrusu ile oluşan açılardan biri 128°, işaretli dar açı ise x’tir.\n\nx açısının tümleri kaç derecedir?",
        "options": [
          "38°",
          "52°",
          "62°",
          "128°"
        ],
        "correct": 0,
        "explanation": "128° ile aynı kesişimdeki komşu dar açı 180° − 128° = 52° olur. Paralellikten x = 52°’dir. x’in tümleri 90° − 52° = 38° olur.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-9/soru-01.svg",
        "imageAlt": "İki yatay paralel doğruyu sağa doğru yükselen k doğrusu kesiyor. Üst kesişimin sol üst açısı 128°, alt kesişimin sağ üst dar açısı x. d paralel e."
      },
      {
        "id": "m6-1-t9-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABC üçgeninde C köşesindeki dış açı, BC kenarının C yönünde uzatılmasıyla oluşturulmuştur. Şekilde A açısı 47°, bu dış açı 124°’dir.\n\nB iç açısı kaç derecedir?",
        "options": [
          "56°",
          "67°",
          "77°",
          "101°"
        ],
        "correct": 2,
        "explanation": "C iç açısı 180° − 124° = 56°’dir. Üçgenin iç açıları toplamından B = 180° − 47° − 56° = 77° bulunur. Dış açı bağıntısıyla 124° − 47° de aynı sonucu verir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-9/soru-02.svg",
        "imageAlt": "ABC üçgeninde A üstte, B solda ve C sağda. BC doğrusu C’den D’ye uzatılmış. A iç açısı 47°, ACD dış açısı 124°."
      },
      {
        "id": "m6-1-t9-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABC ikizkenar üçgeninde AB = AC’dir. CB kenarı B yönünde D noktasına kadar uzatılmış ve ABD dış açısı 112° olarak ölçülmüştür.\n\nBAC tepe açısı kaç derecedir?",
        "options": [
          "34°",
          "44°",
          "56°",
          "68°"
        ],
        "correct": 1,
        "explanation": "B iç açısı 180° − 112° = 68°’dir. AB = AC olduğundan B ve C taban açıları eşittir. A = 180° − 68° − 68° = 44° bulunur.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-9/soru-03.svg",
        "imageAlt": "AB ve AC eşit işaretli ikizkenar üçgen. A üstte, B sol altta, C sağ altta. CB doğrusu B’den sola D’ye uzatılmış. ABD dış açısı 112°."
      },
      {
        "id": "m6-1-t9-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABCD yamuğunda AB ∥ DC’dir. A ve B iç açıları şekilde verilmiştir.\n\nC iç açısı, D iç açısından kaç derece büyüktür?",
        "options": [
          "15°",
          "27°",
          "35°",
          "37°"
        ],
        "correct": 3,
        "explanation": "AD keseni üzerinde A + D = 180° olduğundan D = 64°’dir. BC keseni üzerinde B + C = 180° olduğundan C = 101°’dir. Fark 101° − 64° = 37° olur.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-9/soru-04.svg",
        "imageAlt": "ABCD yamuğunda A sol üst, B sağ üst, C sağ alt, D sol alt. AB ve DC paralel. A iç açısı 116°, B iç açısı 79°."
      },
      {
        "id": "m6-1-t9-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABCD paralelkenarının AC köşegeni çizilmiştir. Köşegen A iç açısını şekildeki gibi 38° ve 27° olarak ayırıyor.\n\nABC iç açısı kaç derecedir?",
        "options": [
          "65°",
          "103°",
          "115°",
          "142°"
        ],
        "correct": 2,
        "explanation": "A iç açısı 38° + 27° = 65°’dir. Paralelkenarın komşu iç açıları bütünlerdir. B = 180° − 65° = 115° olur. Köşegen açılardan birini tek başına A açısı yapmaz.",
        "imageWidth": 360,
        "imageHeight": 370,
        "imageUrl": "/grade6/matematik/test-9/soru-05.svg",
        "imageAlt": "A sol alt, B sağ alt, C sağ üst, D sol üst olan paralelkenar. AC köşegeni çizili. DAC açısı 38°, CAB açısı 27°."
      },
      {
        "id": "m6-1-t9-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABCD dikdörtgeninin köşegenleri O noktasında kesişiyor. OAB açısı 32°’dir.\n\nAOB açısı kaç derecedir?",
        "options": [
          "64°",
          "90°",
          "148°",
          "116°"
        ],
        "correct": 3,
        "explanation": "Dikdörtgenin köşegenleri eşittir ve birbirini ortalar. Bu nedenle OA = OB olur. AOB üçgeni ikizkenardır; OAB ve OBA açıları 32°’dir. AOB = 180° − 32° − 32° = 116° bulunur.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-9/soru-06.svg",
        "imageAlt": "ABCD dikdörtgeninde A sol alt, B sağ alt, C sağ üst, D sol üst. Köşegenler O’da kesişir. OAB açısı 32°, AOB açısı x ile gösterilmiştir."
      },
      {
        "id": "m6-1-t9-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "AB ve CD doğruları paraleldir. AD ve BC doğruları O noktasında kesişiyor. Üstteki AOB üçgeninde A açısı 48°, B açısı 62°’dir.\n\nŞekilde x ile gösterilen BOD açısı ile y ile gösterilen OCD açısının toplamı kaç derecedir?",
        "options": [
          "132°",
          "172°",
          "158°",
          "180°"
        ],
        "correct": 1,
        "explanation": "AOB üçgeninde O açısı 180° − 48° − 62° = 70°’dir. A, O, D doğrusal olduğundan x = 180° − 70° = 110° olur. AB ∥ CD olduğundan ABC ile BCD iç ters açıları eşittir; y = 62°’dir. Toplam x + y = 110° + 62° = 172° bulunur.",
        "imageWidth": 360,
        "imageHeight": 430,
        "imageUrl": "/grade6/matematik/test-9/soru-07.svg",
        "imageAlt": "Üstte A solda B sağda, altta C solda D sağda olan iki paralel doğru. AD ve BC, O’da kesişir. Üst üçgenin A açısı 48°, B açısı 62°. O’nun sağında OB ve OD arasındaki açı x; C’de CO ve CD arasındaki açı y."
      },
      {
        "id": "m6-1-t9-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir üçgende en küçük iç açıdan diğer iki iç açı sırasıyla 20° ve 40° büyüktür.\n\nBu üçgenin en büyük iç açısına komşu dış açı kaç derecedir?",
        "options": [
          "80°",
          "100°",
          "120°",
          "140°"
        ],
        "correct": 1,
        "explanation": "Üç açıdan fazlalıklar çıkarılırsa toplam 180° − 20° − 40° = 120° kalır. En küçük açı 120° ÷ 3 = 40°, en büyük açı 80°’dir. Ona komşu dış açı 180° − 80° = 100° olur."
      },
      {
        "id": "m6-1-t9-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir dışbükey dörtgenin A ve B iç açıları sırasıyla 85° ve 110°’dir. D iç açısı, C iç açısından 25° küçüktür.\n\nC iç açısı kaç derecedir?",
        "options": [
          "70°",
          "85°",
          "95°",
          "120°"
        ],
        "correct": 2,
        "explanation": "Dörtgenin iç açıları toplamı 360°’dir. C ve D toplamı 360° − 85° − 110° = 165° olur. Aralarındaki 25° fark çıkarılınca iki küçük açı toplamı 140°, D = 70° bulunur. C = 70° + 25° = 95°’dir."
      },
      {
        "id": "m6-1-t9-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir dışbükey dörtgenin köşegenleri birbirini ortalıyor ve birbirine dik kesişiyor. Köşegenlerin uzunlukları birbirinden farklıdır.\n\nBu dörtgen için hangisi kesinlikle doğrudur?",
        "options": [
          "Dört kenarının uzunluğu eşittir; kare değildir.",
          "Dört iç açısının her biri 90°’dir.",
          "Karşılıklı kenarlarından yalnız bir çifti paraleldir.",
          "Birbirine komşu iki kenarının uzunluğu farklıdır."
        ],
        "correct": 0,
        "explanation": "Birbirini ortalayan köşegenler dörtgenin paralelkenar olduğunu gösterir. Bu köşegenlerin dik kesişmesi, dört kenarı eşit olan eşkenar dörtgeni verir. Köşegenler eşit uzunlukta olmadığı için şekil kare değildir. Diğer ifadeler bu koşullarla uyuşmaz."
      }
    ],
    test10: [
      {
        "id": "m6-1-t10-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Çubuklarla yan yana kareler oluşturuluyor. Her yeni adımda sağa bir kare ekleniyor ve komşu kareler bir kenarı ortak kullanıyor.\n\n10. adımdaki çubuk sayısı, 4. adımdakinden kaç fazladır?",
        "options": [
          "16",
          "18",
          "20",
          "24"
        ],
        "correct": 1,
        "explanation": "İlk kare 4 çubuk gerektirir; her yeni kare 3 çubuk ekler. n. adımda 3n + 1 çubuk vardır. 10. adım 31, 4. adım 13 çubuktur; fark 18’dir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-10/soru-01.svg",
        "imageAlt": "İlk üç adımda sırasıyla bir, iki, üç bitişik kare var. Sayıları 4, 7, 10 çubuk. Ortak kenarlar yalnız bir kez kullanılır."
      },
      {
        "id": "m6-1-t10-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Dengede duran terazinin iki kefesindeki kutuların her biri aynı kütlededir. Küçük ağırlıkların kütleleri görselde verilmiştir.\n\nBu kutulardan iki tanesi ile 5 kg’lık bir ağırlığın toplam kütlesi kaç kilogramdır?",
        "options": [
          "26",
          "29",
          "31",
          "44"
        ],
        "correct": 2,
        "explanation": "Dengenin iki tarafından ikişer kutu çıkarılınca bir kutu ile 6 kg, 19 kg’a eşittir. Bir kutu 13 kg’dır. İki kutu ile 5 kg toplam 2 × 13 + 5 = 31 kg olur.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-10/soru-02.svg",
        "imageAlt": "Sol kefede üç özdeş kutu ve 6 kg, sağ kefede iki özdeş kutu ve 19 kg var. Terazi dengede. Kutular K harfiyle belirtilmiş."
      },
      {
        "id": "m6-1-t10-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir sayı işlem makinesine giriyor ve ok yönündeki işlemler sırayla uygulanıyor. Sonuç 40 oluyor.\n\nMakineye giren sayı kaçtır?",
        "options": [
          "9",
          "10",
          "12",
          "11"
        ],
        "correct": 3,
        "explanation": "İşlemler sondan geri alınır: 40’a 5 eklenir, 45 elde edilir. 3’e bölünce 15, 4 çıkarınca 11 bulunur. Kontrol: (11 + 4) × 3 − 5 = 40.",
        "imageWidth": 360,
        "imageHeight": 420,
        "imageUrl": "/grade6/matematik/test-10/soru-03.svg",
        "imageAlt": "Dikey işlem zinciri: sayı, 4 ekle, 3 ile çarp, 5 çıkar, sonuç 40."
      },
      {
        "id": "m6-1-t10-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "A ve B atölyelerindeki ücret kuralları görselde verilmiştir. Önce iki atölyede toplam ücreti eşit yapan ders sayısı bulunuyor. Bir öğrenci bu sayıdan 2 fazla ders almayı planlıyor.\n\nBu öğrencinin A atölyesindeki toplam ücreti, B atölyesininkinden kaç TL fazladır?",
        "options": [
          "4",
          "8",
          "12",
          "16"
        ],
        "correct": 0,
        "explanation": "A’nın üyelik bedeli 12 TL daha düşük, ders başına ücreti 2 TL daha yüksektir. 12 ÷ 2 = 6 derste toplam ücretler eşitlenir. Öğrenci 8 ders alır: A için 8 + 6 × 8 = 56 TL, B için 20 + 4 × 8 = 52 TL. Fark 4 TL’dir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-10/soru-04.svg",
        "imageAlt": "A atölyesi: bir kez 8 TL üyelik, her ders 6 TL. B atölyesi: bir kez 20 TL üyelik, her ders 4 TL."
      },
      {
        "id": "m6-1-t10-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Kare masalar bir sıra hâlinde birleştiriliyor. Dışarıda kalan her kenara bir sandalye konuyor; ortak kenarlara sandalye konmuyor.\n\n12 masa bu şekilde birleştirildiğinde, eldeki 30 sandalyenin kaç tanesi kullanılmaz?",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "correct": 1,
        "explanation": "İlk masaya 4 sandalye yerleşir. Her yeni masa toplam sandalye sayısını 2 artırır; n masa için 2n + 2 sandalye gerekir. 12 masa için 26 sandalye kullanılır; 30 − 26 = 4 sandalye kalır.",
        "imageWidth": 360,
        "imageHeight": 390,
        "imageUrl": "/grade6/matematik/test-10/soru-05.svg",
        "imageAlt": "Yan yana bir, iki ve üç kare masa için sırasıyla 4, 6, 8 sandalye gösterilmiş. Sandalyeler dış kenarlarda; ortak kenarlarda yok."
      },
      {
        "id": "m6-1-t10-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki algoritmada başlangıç sayısına “2 ile çarp, sonra 1 ekle” işlem çifti tam 3 kez uygulanıyor.\n\nBaşlangıç sayısı 2 yerine 3 seçilirse son sonuç kaç artar?",
        "options": [
          "3",
          "6",
          "8",
          "9"
        ],
        "correct": 2,
        "explanation": "2 ile başlanırsa sonuçlar 5, 11, 23’tür. 3 ile başlanırsa 7, 15, 31 olur. Son sonuçtaki artış 31 − 23 = 8’dir. İlk sayıdaki 1 birimlik fark her turda iki katına çıkar.",
        "imageWidth": 360,
        "imageHeight": 370,
        "imageUrl": "/grade6/matematik/test-10/soru-06.svg",
        "imageAlt": "Başlangıç sayısından sonra bir işlem kutusu: 2 ile çarp, 1 ekle. Bu işlem çifti üç kez tekrarlanır, sonra sonuç yazılır."
      },
      {
        "id": "m6-1-t10-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Dikdörtgen bir kartın kenarları görseldeki cebirsel ifadelerle verilmiştir. n = 5 olduğunda kartın çevresine şeridin uçlarında fazladan pay bırakmadan iki tam tur şerit sarılıyor.\n\nGerekli şeridin uzunluğu kaç santimetredir?",
        "options": [
          "26",
          "40",
          "48",
          "52"
        ],
        "correct": 3,
        "explanation": "Kısa kenar 5 cm, uzun kenar 5 + 3 = 8 cm olur. Bir tur 2 × (5 + 8) = 26 cm’dir. İki tur için 52 cm şerit gerekir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/matematik/test-10/soru-07.svg",
        "imageAlt": "Dikdörtgenin kısa kenarı n cm, uzun kenarı (n + 3) cm. İki tam tur şerit sarılacağı belirtilmiş. Çizim ölçekli değil."
      },
      {
        "id": "m6-1-t10-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Her birinde x + 3 kalem bulunan 4 kutu hazırlanıyor. Kutulardaki kalemlerin toplamından 2x tanesi dağıtılıyor.\n\nx = 7 olduğunda geriye kaç kalem kalır?",
        "options": [
          "20",
          "24",
          "26",
          "28"
        ],
        "correct": 2,
        "explanation": "Dört kutuda toplam 4 × (7 + 3) = 40 kalem vardır. 2 × 7 = 14 kalem dağıtılır. Geriye 40 − 14 = 26 kalem kalır. Kalan miktarı 4(x + 3) − 2x ifadesi gösterir."
      },
      {
        "id": "m6-1-t10-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir sayı örüntüsünün ilk terimi 7’dir. Her yeni terim, bir önceki terime 5 eklenerek bulunuyor.\n\n60’tan büyük olan ilk terim kaçıncı terimdir?",
        "options": [
          "11.",
          "12.",
          "13.",
          "14."
        ],
        "correct": 1,
        "explanation": "n. terim 7 + 5(n − 1) ile bulunur. 11. terim 57, 12. terim 62’dir. Artışlar pozitif olduğundan 60’ı ilk aşan terim 12. terimdir."
      },
      {
        "id": "m6-1-t10-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir algoritma her turda eldeki sayı çiftse sayıyı 2’ye bölüyor, tekse sayıya 3 ekliyor. Her turda yalnız bir işlem uygulanıyor; sonuç sonraki turun başlangıcı oluyor.\n\nİlk iki turda bölme, üçüncü turda toplama yapılmış ve son sonuç 10 olmuştur. Başlangıç sayısı kaçtır?",
        "options": [
          "28",
          "14",
          "20",
          "40"
        ],
        "correct": 0,
        "explanation": "Üçüncü turda 3 eklenerek 10 bulunduğundan bu tura 7 ile girilmiştir. Önceki iki turda sayı ikiye bölündüğünden başlangıç 7 × 2 × 2 = 28’dir. Kontrol: 28 → 14 → 7 → 10; belirtilen işlem sırası sağlanır."
      }
    ],
    test11: [
      {
        "prompt": "180 cm ve 252 cm uzunluğundaki iki çıta, hiç parça artmayacak biçimde eşit uzunlukta parçalara ayrılacaktır. Bütün parçaların uzunluğu aynı olacak ve hiçbir parça 30 cm'den uzun olmayacaktır. Parçalar mümkün olduğunca uzun seçiliyor.\n\nHer kesimde yalnız bir çıta ya da çıta parçası kesildiğine ve kesim kaybı olmadığına göre toplam kaç kesim yapılır?",
        "options": [
          "10",
          "12",
          "22",
          "24"
        ],
        "correct": 2,
        "explanation": "Parça uzunluğu hem 180'i hem 252'yi kalansız bölmelidir. Ortak pozitif bölenler 1, 2, 3, 4, 6, 9, 12, 18 ve 36'dır. 36 cm sınırı aştığından en büyük uygun uzunluk 18 cm'dir. Birinci çıtadan 180 ÷ 18 = 10, ikinciden 252 ÷ 18 = 14 parça çıkar. Bir çıtayı n parçaya ayırmak n − 1 kesim gerektirir. Toplam (10 − 1) + (14 − 1) = 22 kesim yapılır.",
        "imageHeight": 420,
        "imageAlt": "İki ayrı çıta: K çıtasının uzunluğu 180 cm, L çıtasının uzunluğu 252 cm. Parçaların tamamı eşit uzunlukta olacak, her parça en fazla 30 cm olacak ve hiç parça artmayacak. Şekil ölçekli değildir.",
        "id": "m6-1-t11-01",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-01.svg",
        "imageWidth": 360
      },
      {
        "prompt": "Bir torbadan her seferinde bir pul çekilip rengi kaydediliyor; pul geri konularak torba karıştırılıyor. Kartlar, deneyin başlangıcından belirtilen ana kadar biriken kayıtları gösteriyor.\n\nİlk 40 denemenin kayıtları ayrılıyor. Geriye kalan kayıtlara, aynı koşullarda yapılmış yeni bir deneme bölümünün kayıtları ekleniyor. Yeni bölümde bütün sonuçların mavi olduğu ve birleştirilen kayıtlarda mavinin göreli sıklığının tam 3/5 olduğu biliniyor. Yeni bölümde kaç deneme yapılmıştır?",
        "options": [
          "6",
          "10",
          "12",
          "15"
        ],
        "correct": 3,
        "explanation": "İlk 40 kayıt ayrıldığında 100 − 40 = 60 deneme ve 44 − 14 = 30 mavi sonuç kalır. Bu 60 denemede mavi olmayan sonuç sayısı da 30'dur. Eklenen sonuçların tümü mavi olduğu için mavi olmayanların sayısı değişmez. Son göreli sıklık mavi için 3/5 ise mavi olmayanlar için 2/5'tir. 30, son toplamın 2/5'i olduğundan toplam 30 ÷ 2 × 5 = 75 olur. Eklenen deneme sayısı 75 − 60 = 15'tir. Kontrol: (30 + 15)/(60 + 15) = 45/75 = 3/5. Bu, verilen kayıtların hesabıdır; gelecek denemelerin kesin sonucunu bildirmez.",
        "imageHeight": 440,
        "imageAlt": "Biriken deney kayıtlarını gösteren iki kart. 40. denemenin sonunda toplam 40 deneme ve 14 mavi sonuç; 100. denemenin sonunda toplam 100 deneme ve 44 mavi sonuç var. İkinci kart ilk 40 denemeyi de içeriyor.",
        "id": "m6-1-t11-02",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-02.svg",
        "imageWidth": 360
      },
      {
        "prompt": "Her biri 1,25 m uzunluğundaki dört şerit, bir sıra hâlinde birleştiriliyor. Komşu iki şeridin uçları 8 cm üst üste geliyor; başka örtüşme yoktur.\n\nBirleşen şeritten mümkün olan en çok sayıda 39 cm uzunluğunda parça kesiliyor. Her parçayı ayırmak için bir kesim yapılıyor ve her kesimde 1 mm uzunluk kayboluyor. En sonda kalan tek parçanın uzunluğu kaç santimetredir?",
        "options": [
          "6,8",
          "6,9",
          "8",
          "14,8"
        ],
        "correct": 0,
        "explanation": "Dört şerit arasında üç birleşme vardır. Birleşen uzunluk 4 × 125 − 3 × 8 = 476 cm'dir. Her 39 cm'lik parçayı ayırmak 1 mm = 0,1 cm kesim kaybı oluşturur; bir parça için toplam 39,1 cm gerekir. 12 parça için 12 × 39,1 = 469,2 cm yeterlidir; 13 parça için gereken 508,3 cm eldeki uzunluğu aşar. Bu nedenle 12 parça kesilir ve 476 − 469,2 = 6,8 cm kalır.",
        "imageHeight": 460,
        "imageAlt": "Bir sıra oluşturmak için kullanılacak dört şerit; her birinin uzunluğu 1,25 m. Birleşme örneğinde iki komşu şeridin uçları 8 cm üst üste geliyor. Şekil ölçekli değildir.",
        "id": "m6-1-t11-03",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-03.svg",
        "imageWidth": 360
      },
      {
        "prompt": "Tablo, 12 öğrencinin bir günde kitap okumaya ayırdığı süreleri gösteriyor. Bu sürelerin aritmetik ortalaması 27,5 dakikadır; a ve b silinmiş öğrenci sayılarıdır.\n\nErtesi gün yalnız 30 dakika okuyan öğrencilerden bazıları 20 dakika okuyor; diğerlerinin süreleri değişmiyor. Yeni veri grubunun ortancasının 20 dakika olması için en az kaç öğrenci süresini azaltmalıdır?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 1,
        "explanation": "Öğrenci sayısından a + b = 12 − 2 − 3 = 7 bulunur. Toplam okuma süresi 12 × 27,5 = 330 dakikadır. 10 ve 40 dakika okuyanlar 2 × 10 + 3 × 40 = 140 dakika okur; kalan 7 öğrenci toplam 190 dakika okumuştur. Bu 7 öğrencinin hepsi 20 dakika okusaydı 140 dakika olurdu. Aradaki 50 dakika, her biri 10 dakika fazladan okuyan 5 öğrenciden gelir; b = 5 ve a = 2'dir. Başta 20 dakika veya daha az okuyan 4 öğrenci vardır. 12 verinin ortancası 6. ve 7. değerlerin ortalamasıdır. İki öğrenci 30'dan 20'ye geçerse bu iki değer 20 ve 30 olur; ortanca 25'tir. Üç öğrenci geçerse iki değer de 20 olur. Gereken en az sayı 3'tür.",
        "imageHeight": 460,
        "imageAlt": "Okuma süresi ve öğrenci sayısı tablosu: 10 dakika için 2 öğrenci, 20 dakika için a öğrenci, 30 dakika için b öğrenci, 40 dakika için 3 öğrenci. Toplam 12 öğrenci; aritmetik ortalama 27,5 dakika.",
        "id": "m6-1-t11-04",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-04.svg",
        "imageWidth": 360
      },
      {
        "prompt": "ABC üçgeninde AB = AC'dir. CB kenarı B yönünde F noktasına kadar uzatılmış ve ABF dış açısı 124° olarak verilmiştir. AD, A açısını; CE, C açısını iki eş açıya ayırır. D, BC üzerinde; E, AB üzerindedir. AD ile CE, I noktasında kesişir.\n\nAIC açısı kaç derecedir?",
        "options": [
          "56°",
          "62°",
          "112°",
          "118°"
        ],
        "correct": 3,
        "explanation": "B iç açısı dış açıyla bütünlerdir: 180° − 124° = 56°. AB = AC olduğundan C iç açısı da 56° olur. A açısı 180° − 56° − 56° = 68°'dir. AD bu açıyı ikiye böldüğünden IAC = 34°; CE, C açısını ikiye böldüğünden ACI = 28° olur. AIC üçgeninin iç açıları toplamından AIC = 180° − 34° − 28° = 118° bulunur.",
        "imageHeight": 460,
        "imageAlt": "ABC ikizkenar üçgeninde AB ve AC eşit. F, B, D, C aynı doğru üzerinde bu sırayla; ABF dış açısı 124 derece. AD, BAC açısını iki eş açıya; CE, ACB açısını iki eş açıya ayırıyor. E, AB üzerinde. AD ile CE'nin kesişimi I. AIC açısı soruluyor; şekilden ölçüm yapılmaz.",
        "id": "m6-1-t11-05",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-05.svg",
        "imageWidth": 360
      },
      {
        "prompt": "Örüntüde her adımda sağ tarafa, üst üste iki eş kareden oluşan bir sütun ekleniyor. Her bir küçük kare kenarı bir çubuktur; komşu karelerin ortak kenarında tek çubuk kullanılıyor.\n\nEce, bu örüntünün iki farklı adımındaki şekilleri ayrı ayrı kuruyor. Büyük şeklin adım numarası, küçüğünün adım numarasından 4 fazladır. İki şekilde toplam 104 çubuk kullanıldığına göre büyük şekil kaçıncı adımdır?",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correct": 2,
        "explanation": "İlk adımda 7 çubuk vardır. Her yeni sütun üç yatay ve iki düşey yeni çubuk ekler; artış 5'tir. Büyük şekil dört adım ileride olduğundan 4 × 5 = 20 fazla çubuk içerir. İki şeklin toplamı 104 olduğuna göre küçükte (104 − 20) ÷ 2 = 42, büyükte 62 çubuk vardır. İlk adımdaki 7 çubuktan 62'ye ulaşmak için (62 − 7) ÷ 5 = 11 artış gerekir. İlk adım da sayıldığında büyük şekil 12. adımdır.",
        "imageHeight": 560,
        "imageAlt": "Çubuk örüntüsünün ilk üç adımı. Birinci adımda üst üste iki kareden oluşan bir sütun, ikinci adımda iki satır ve iki sütun kare, üçüncü adımda iki satır ve üç sütun kare var. Bütün küçük kareler eşit; her ortak kenar tek çubukla gösterilmiş.",
        "id": "m6-1-t11-06",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-06.svg",
        "imageWidth": 360
      },
      {
        "prompt": "Başlangıç sayısı, 10 ile 50 arasında (10 ve 50 dâhil) bir çift doğal sayıdır. Görseldeki kural tam 3 tur uygulanıyor. Her turda eldeki sayı 3'e kalansız bölünüyorsa 3'e bölünüyor; bölünmüyorsa sayıya 5 ekleniyor. Bir turda yalnız bir işlem yapılıyor ve çıkan sayı sonraki tura aktarılıyor.\n\nÜçüncü turun sonunda 7 elde edildiğine göre, koşullara uyan bütün başlangıç sayılarının toplamı kaçtır?",
        "options": [
          "48",
          "66",
          "77",
          "96"
        ],
        "correct": 1,
        "explanation": "Son turda 7 elde etmek için bu tura 21 ile girilip 3'e bölünmüş ya da 2 ile girilip 5 eklenmiş olmalıdır. Bir önceki turdan önceki olası sayılar 63, 16 ve 6'dır. Bunlara ulaşan pozitif başlangıç sayıları sırasıyla (189, 58), (48, 11) ve (18, 1) olur; her biri ilgili bölünebilme koşulunu sağlar. 10–50 aralığında çift olanlar yalnız 18 ve 48'dir. Kontrol: 18 → 6 → 2 → 7 ve 48 → 16 → 21 → 7. Toplam 18 + 48 = 66'dır.",
        "imageHeight": 600,
        "imageAlt": "Üç tur uygulanacak kural: Elde bulunan sayı 3'e kalansız bölünüyor mu? Evet ise sayıyı 3'e böl. Hayır ise sayıya 5 ekle. Her turda yalnız bir dal uygulanıyor. Sonuç sonraki tura geçiyor; üçüncü turun son sonucu 7.",
        "id": "m6-1-t11-07",
        "subject": "matematik",
        "term": 1,
        "imageUrl": "/grade6/matematik/test-11/soru-07.svg",
        "imageWidth": 360
      },
      {
        "prompt": "Rakamları birbirinden farklı olan dört basamaklı 2AB6 sayısı, hem 4'e hem 9'a kalansız bölünebilmektedir. A ve B birer rakamdır.\n\nKoşullara uyan en büyük sayı ile en küçük sayı arasındaki fark kaçtır?",
        "options": [
          "900",
          "720",
          "738",
          "756"
        ],
        "correct": 0,
        "explanation": "4'e bölünebilmek için son iki basamak olan B6, 4'ün katı olmalıdır; bu nedenle B = 1, 3, 5, 7 veya 9 olabilir. 9'a bölünebilmek için rakamlar toplamı 2 + A + B + 6 = A + B + 8, 9'un katı olmalıdır. Rakamlar farklı olduğundan A ve B, 2 veya 6 olamaz. Olası toplamlar 9 ve 18'dir: A + B = 1 veya 10. A + B = 1 için (A, B) = (0, 1) uygundur ve 2016 elde edilir. A + B = 10 için uygun çiftler (9, 1), (7, 3), (3, 7), (1, 9)'dur. Böylece en büyük sayı 2916, en küçük sayı 2016 olur; fark 900'dür.",
        "id": "m6-1-t11-08",
        "subject": "matematik",
        "term": 1
      },
      {
        "prompt": "İki uyarı lambası başlangıçta aynı anda birer kez yanıp sönüyor. Bundan sonra birinci lamba her 18 saniyede, ikinci lamba her 24 saniyede bir anlık olarak yanıp sönmeye devam ediyor.\n\nBaşlangıç anı sayılmadan, sonraki 5 dakika boyunca yalnız bir lambanın yanıp söndüğü kaç farklı an vardır? Beşinci dakikanın sonu bu süreye dâhildir.",
        "options": [
          "8",
          "12",
          "16",
          "20"
        ],
        "correct": 3,
        "explanation": "5 dakika 300 saniyedir. Birinci lamba 18, 36, …, 288 saniyelerinde toplam 16; ikinci lamba 24, 48, …, 288 saniyelerinde toplam 12 kez yanar. İkisi 18 ve 24'ün ortak katlarında birlikte yanar; 300 saniye içindeki ortak anlar 72, 144, 216 ve 288'dir. Toplam 16 + 12 sayımında bu dört anın her biri iki kez yer alır. Yalnız bir lambanın yandığı anları bulmak için ikişer sayımı da çıkarmak gerekir: 16 + 12 − 2 × 4 = 20. 300. saniyede iki lamba da yanmaz.",
        "id": "m6-1-t11-09",
        "subject": "matematik",
        "term": 1
      },
      {
        "prompt": "Bir öğretmen elindeki kartlardan sınıftaki her öğrenciye 3 kart verirse 8 kart artıyor. Her öğrenciye 4 kart vermek isterse 7 kart eksik kalıyor.\n\nÖğretmen sonunda bazı öğrencilere 5'er, diğerlerine 3'er kart vererek elindeki kartların tamamını dağıtıyor. Buna göre 3 kart alan öğrenci sayısı, 5 kart alan öğrenci sayısından kaç fazladır?",
        "options": [
          "7",
          "4",
          "8",
          "11"
        ],
        "correct": 0,
        "explanation": "Her öğrenciye birer kart daha verebilmek için artan 8 karta ek olarak 7 kart gerekir. Bu nedenle öğrenci sayısı 8 + 7 = 15'tir. Kart sayısı 15 × 3 + 8 = 53 olur. Herkese önce 3'er kart verilirse 8 kart kalır. 5 kart alacak her öğrenciye 2 ek kart gerektiğinden 8 ÷ 2 = 4 öğrenci 5 kart alır. Diğer 15 − 4 = 11 öğrenci 3 kart alır. İstenen fark 11 − 4 = 7'dir. Kontrol: 4 × 5 + 11 × 3 = 53.",
        "id": "m6-1-t11-10",
        "subject": "matematik",
        "term": 1
      }
    ],
    test12: [
      {
        "id": "m6-1-t12-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kilidin N kodu, görseldeki koşulların tamamını sağlayan pozitif bir doğal sayıdır. N'nin farklı asal çarpanları tam olarak 2 ve 3'tür; N, 200'den küçüktür. N sayısı 2'ye bölündüğünde tek sayı, 3'e bölündüğünde asal olmayan bir sayı elde ediliyor.\n\nBu kilit için kullanılabilecek bütün farklı N kodlarının toplamı kaçtır?",
        "options": [
          "216",
          "234",
          "240",
          "252"
        ],
        "correct": 1,
        "explanation": "Farklı asal çarpanlar tam olarak 2 ve 3 olduğundan N, yalnız bu iki asalın çarpımlarından oluşmalı ve ikisini de içermelidir. N/2 tek olduğuna göre N'nin çarpanlarında yalnız bir tane 2 bulunur; gerisi 3'lerin çarpımıdır. 200'den küçük adaylar 2 × 3 = 6, 2 × 3 × 3 = 18, 2 × 3 × 3 × 3 = 54 ve 2 × 3 × 3 × 3 × 3 = 162'dir. Sonraki aday 486 olduğu için sınırı aşar. 6/3 = 2 asal olduğundan 6 elenir. Diğer adaylar 3'e bölününce 6, 18 ve 54 verir; bunların hiçbiri asal değildir. İstenen toplam 18 + 54 + 162 = 234'tür.",
        "imageUrl": "/grade6/matematik/test-12/soru-01.svg",
        "imageWidth": 360,
        "imageHeight": 520,
        "imageAlt": "N kodunun koşulları: N pozitif ve 200'den küçük. Farklı asal çarpanları tam olarak 2 ve 3. N/2 tek sayı. N/3 asal sayı değil."
      },
      {
        "id": "m6-1-t12-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki grup, aynı uzaklıktan aynı hedefe halka atma deneyi yapıyor. A grubunun 60 denemesinin 36'sı isabetlidir. B grubunun kendi kayıtlarında isabetin göreli sıklığı tam 3/10'dur.\n\nİki grubun bütün denemeleri birlikte değerlendirildiğinde isabetin göreli sıklığı tam 2/5 oluyor. Buna göre B grubunun isabetsiz deneme sayısı kaçtır?",
        "options": [
          "42",
          "60",
          "72",
          "84"
        ],
        "correct": 3,
        "explanation": "Birleşik göreli sıklık 2/5 = 4/10'dur. A grubunun 60 denemesinde bu oranı sağlayacak isabet sayısı 60 × 2/5 = 24 olurdu; A'nın gerçek isabet sayısı bundan 36 − 24 = 12 fazladır. B'nin isabet oranı 3/10 olduğundan, 4/10 oranına göre eksiği toplam deneme sayısının 1/10'u kadardır. İki grubun kayıtları birleştirildiğinde A'daki 12 fazlalık, B'deki eksiği karşılamalıdır. Bu yüzden B'de 120 deneme yapılmıştır. B'nin isabetli denemesi 120 × 3/10 = 36, isabetsiz denemesi 120 − 36 = 84'tür. Kontrol: toplam 72 isabet / 180 deneme = 2/5. Grupların deneme sayıları farklı olduğundan iki göreli sıklık doğrudan ortalanamaz.",
        "imageUrl": "/grade6/matematik/test-12/soru-02.svg",
        "imageWidth": 360,
        "imageHeight": 520,
        "imageAlt": "A grubu kartında 60 deneme ve 36 isabet yazıyor. B grubu kartında deneme sayısı soru işareti ve isabetin göreli sıklığı 3/10 yazıyor. İki grubun bütün kayıtları birleştirildiğinde isabetin göreli sıklığı 2/5."
      },
      {
        "id": "m6-1-t12-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir etkinlikte 30 bardağın her birine 170 mL limonata konulacaktır. Limonata, görseldeki A veya B ürününden yalnız biri seçilerek alınacaktır. Şişeler tam olarak satın alınır; açık şişe satılmaz ve artan limonata iade edilmez.\n\n150 TL bütçesi olan Ece, gereken limonatayı en az toplam ücretle alırsa kaç TL'si kalır?",
        "options": [
          "19,80 TL",
          "3,00 TL",
          "23,52 TL",
          "25,05 TL"
        ],
        "correct": 0,
        "explanation": "Gereken limonata 30 × 170 = 5100 mL'dir. A şişesi 750 mL olduğundan 6 şişe 4500 mL ile yetmez; en az 7 şişe gerekir. Ücreti 7 × 18,60 = 130,20 TL'dir. B şişesi 1,2 L = 1200 mL'dir; 4 şişe 4800 mL ile yetmez, en az 5 şişe gerekir. Ücreti 5 × 29,40 = 147,00 TL'dir. Bu alışverişte A'nın 7 şişesi daha az toplam ücret tutar. Ece'nin kalan parası 150 − 130,20 = 19,80 TL olur. Litre başına fiyatı karşılaştırmak tek başına yeterli değildir; şişeler bütün olarak alınmaktadır.",
        "imageUrl": "/grade6/matematik/test-12/soru-03.svg",
        "imageWidth": 360,
        "imageHeight": 540,
        "imageAlt": "Etkinlik için 30 bardak, her bardakta 170 mL limonata. A ürününün bir şişesi 750 mL ve 18,60 TL; B ürününün bir şişesi 1,2 L ve 29,40 TL. Bütçe 150 TL."
      },
      {
        "id": "m6-1-t12-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Sekiz öğrencinin bir haftada çözdüğü bulmaca sayıları kaydedilirken bir öğrencinin değeri yanlışlıkla iki kez yazılmış ve görseldeki dokuz kayıt oluşmuştur. Bunun dışında hata yoktur. Sekiz öğrencinin gerçek aritmetik ortalaması 9,5'tir.\n\nFazladan yazılan kayıt çıkarıldığında oluşan veri grubunun tepe değerlerinin toplamı, ortancasından kaç fazladır?",
        "options": [
          "3",
          "6",
          "7",
          "9"
        ],
        "correct": 2,
        "explanation": "Dokuz kaydın toplamı 4 + 6 + 6 + 8 + 10 + 10 + 12 + 12 + 20 = 88'dir. Gerçek sekiz verinin toplamı 8 × 9,5 = 76 olmalıdır. Fazladan yazılan değer 88 − 76 = 12'dir; 12 kayıtlarından yalnız biri çıkarılır. Doğru sıralı veri grubu 4, 6, 6, 8, 10, 10, 12, 20 olur. En sık görülen 6 ve 10, ikişer kez geçtiği için iki tepe değerdir; toplamları 16'dır. Sekiz verinin ortancası 4. ve 5. değerlerin ortalaması, yani (8 + 10) ÷ 2 = 9'dur. İstenen fark 16 − 9 = 7'dir.",
        "imageUrl": "/grade6/matematik/test-12/soru-04.svg",
        "imageWidth": 360,
        "imageHeight": 500,
        "imageAlt": "Dokuz kayıt, soldan sağa satırlar hâlinde: üst sıra 4, 6, 6; orta sıra 8, 10, 10; alt sıra 12, 12, 20. Gerçekte 8 öğrenci var ve gerçek aritmetik ortalama 9,5. Her kart aynı biçimde gösteriliyor."
      },
      {
        "id": "m6-1-t12-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "d ve e doğruları paraleldir. P ve A, d üzerinde soldan sağa; D ve Q, e üzerinde soldan sağa sıralanmıştır. A, B, C ve D noktaları görseldeki kırık çizgiyle birleştirilmiştir. AB ile BC birbirine diktir. PAB açısı 148°, CDQ açısı 132°'dir.\n\nB ile D'nin C'ye göre sağ tarafta kaldığı şekilde, BCD açısı x kaç derecedir?",
        "options": [
          "74°",
          "106°",
          "116°",
          "122°"
        ],
        "correct": 1,
        "explanation": "A'daki 148° açıyla komşu olan, AB'nin sağa yönelen yatay doğruyla yaptığı dar açı 180° − 148° = 32°'dir. AB ile BC dik olduğundan, CB'nin C'den sağa çizilen yatay ışınla yaptığı üstteki dar açı 90° − 32° = 58° olur. D'deki 132° açının bütünleri 180° − 132° = 48°'dir. Paralellikten CD'nin C'den sağa çizilen yatay ışınla yaptığı alttaki dar açı da 48° olur. CB ile CD bu yatay ışının iki yanında olduğundan x = 58° + 48° = 106° bulunur.",
        "imageUrl": "/grade6/matematik/test-12/soru-05.svg",
        "imageWidth": 360,
        "imageHeight": 580,
        "imageAlt": "Üstte yatay d, altta yatay e doğrusu var; d ile e paralel. d üzerinde P, A'nın solunda; e üzerinde Q, D'nin sağında. Kırık çizgi A'dan sağa aşağı B'ye, B'den sola aşağı C'ye, C'den sağa aşağı D'ye gidiyor. AB ile BC arasında B'de dik açı işareti var. PAB açısı 148 derece, CDQ açısı 132 derece. C'de CB ve CD arasındaki sağa açılan açı x. Şekilden ölçüm yapılmaz."
      },
      {
        "id": "m6-1-t12-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Çevresi 100 cm olan bir dikdörtgen, kısa kenarına paralel iki kesimle şekildeki üç dikdörtgene ayrılıyor. Parçaların çevreleri soldan sağa 44 cm, 48 cm ve 52 cm'dir. Kesimlerde malzeme kaybı olmuyor.\n\nÇevresi en büyük olan parçanın alanı kaç santimetrekaredir?",
        "options": [
          "143",
          "156",
          "165",
          "286"
        ],
        "correct": 2,
        "explanation": "Parçaların çevreleri toplamı 44 + 48 + 52 = 144 cm'dir. Bu toplamda dış sınır bir kez, iki kesim çizgisinin her biri iki kez sayılır. Dış çevreyi çıkarınca 144 − 100 = 44 cm kalır. İki kesimin uzunluğu da başlangıçtaki kısa kenara eşit olduğundan bu kenar 44 ÷ 4 = 11 cm'dir. Çevresi 52 cm olan parçanın diğer kenarı 52 ÷ 2 − 11 = 15 cm olur. Alanı 11 × 15 = 165 cm²'dir. Kontrol için diğer parçaların genişlikleri 11 ve 13 cm'dir; büyük dikdörtgenin çevresi 2 × (11 + 11 + 13 + 15) = 100 cm olur.",
        "imageUrl": "/grade6/matematik/test-12/soru-06.svg",
        "imageAlt": "Dış çevresi 100 cm olan bir dikdörtgen, kısa kenarına paralel iki kesimle yan yana üç dikdörtgene ayrılmış. Parçaların çevreleri soldan sağa 44 cm, 48 cm ve 52 cm. Kesim kaybı yok. Şekil ölçekli değildir.",
        "imageWidth": 360,
        "imageHeight": 460
      },
      {
        "id": "m6-1-t12-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kargo robotu görseldeki paketleri, verilen sırayı değiştirmeden aynı kapasitedeki kolilere yerleştiriyor. Sıradaki paket mevcut kolinin kapasitesini aşmıyorsa bu koliye konuyor. Aşıyorsa mevcut koli kapatılıp yeni bir koli açılıyor ve paket yeni koliye konuyor. Kapatılan koliye geri dönülmüyor; hiçbir paket bölünmüyor. Koli ağırlıkları hesaba katılmıyor.\n\nBütün paketlerin tam iki koliye yerleşmesi için her kolinin kapasitesi en az kaç kilogram olmalıdır?",
        "options": [
          "20",
          "22",
          "23",
          "24"
        ],
        "correct": 3,
        "explanation": "Paketler sırayla 8, 7, 9, 4, 6 ve 5 kg'dır. İlk üç paketin toplamı 8 + 7 + 9 = 24 kg'dır. Kapasite 24 kg'dan küçükse ilk koli bu üç paketi birlikte alamaz; en fazla ilk iki paketi, yani 15 kg'ı alabilir. Geriye kalan paketlerin toplamı en az 9 + 4 + 6 + 5 = 24 kg olur ve tek koliye sığmaz. Bu yüzden 24 kg'dan küçük bir kapasite yeterli değildir. Kapasite 24 kg olduğunda ilk koli 8 + 7 + 9 = 24 kg, ikinci koli 4 + 6 + 5 = 15 kg alır. Böylece en küçük kapasite 24 kg'dır.",
        "imageUrl": "/grade6/matematik/test-12/soru-07.svg",
        "imageAlt": "Paket sırası: 8 kg, 7 kg, 9 kg, 4 kg, 6 kg, 5 kg. Yerleştirme kuralı: Sıradaki paket eklenirse mevcut kolinin kapasitesi aşılır mı? Evet ise mevcut koli kapatılıp yeni koli açılır. Her iki durumda da sıradaki paket açık koliye konur ve sonraki pakete geçilir. Paket sırası korunur; kapatılan koliye geri dönülmez.",
        "imageWidth": 360,
        "imageHeight": 600
      },
      {
        "id": "m6-1-t12-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir bağıştaki kitapların sayısı 100'den fazla, 400'den azdır. Kitaplar altışarlı paketlenirse 4 kitap, sekizerli paketlenirse 6 kitap artıyor. Onarlı paketlenirse hiç kitap artmıyor.\n\nKitap sayısının alabileceği farklı değerlerin toplamı kaçtır?",
        "options": [
          "500",
          "380",
          "430",
          "620"
        ],
        "correct": 0,
        "explanation": "Kitap sayısına 2 eklenirse hem 6'ya hem 8'e kalansız bölünen bir sayı elde edilir. Bu nedenle 2 eklenmiş sayı, 6 ve 8'in ortak katı olan 24'ün katlarından biridir. Kitap sayısı 10'un katı olduğundan 2 eklenmiş sayının birler basamağı 2 olmalıdır. Verilen aralığa uyan, birler basamağı 2 olan 24 katları 192 ve 312'dir. Kitap sayısı 190 veya 310 olabilir. Kontrol: Bu iki sayı 6'ya bölününce 4, 8'e bölününce 6 kalanını verir ve 10'a tam bölünür. Farklı değerlerin toplamı 190 + 310 = 500'dür."
      },
      {
        "id": "m6-1-t12-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Tam dolu bir kaptaki suyun önce 1/4'ü, sonra kalan suyun 2/5'i kullanılıyor. Kaba 2,1 litre su eklenince kabın 3/4'ü dolu oluyor.\n\nİki kullanımda toplam kaç litre su kullanılmıştır?",
        "options": [
          "3,15",
          "3,5",
          "3,85",
          "4,2"
        ],
        "correct": 2,
        "explanation": "Başlangıçtaki suyu 20 eş pay olarak düşünelim. İlk kullanımda 5 pay gider, 15 pay kalır. İkinci kullanımda kalan 15 payın 2/5'i, yani 6 pay kullanılır; 9 pay kalır. Kap 3/4 dolu olduğunda 15 pay su içerir. Eklenen 2,1 litre, 15 − 9 = 6 paya karşılık gelir; bir pay 2,1 ÷ 6 = 0,35 litredir. Toplam 5 + 6 = 11 pay su kullanılmıştır. Bu miktar 11 × 0,35 = 3,85 litredir. Kontrol: Kabın kapasitesi 7 litredir; 7 − 3,85 + 2,1 = 5,25 litre de 7 litrenin 3/4'üdür."
      },
      {
        "id": "m6-1-t12-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kargo firması her gönderi için sabit bir kabul ücreti ve gönderinin kütlesine göre ek ücret alıyor. Kütle, 2 kg'lık dilimler hâlinde ücretlendiriliyor; bir dilim tam dolmasa da o dilimin ücreti tam alınıyor. Her dilimin ücreti aynıdır. 3,2 kg'lık bir gönderi 64 TL, 9,1 kg'lık bir gönderi 118 TL tutuyor.\n\nDeniz, kütleleri 4,1 kg ve 5,9 kg olan iki kutuyu ayrı ayrı göndermek yerine, ek ağırlık oluşturmadan tek gönderide birleştirirse kaç TL daha az öder?",
        "options": [
          "28",
          "46",
          "54",
          "64"
        ],
        "correct": 1,
        "explanation": "3,2 kg için 2 dilim, 9,1 kg için 5 dilim ücret ödenir. Aradaki 118 − 64 = 54 TL, 3 dilimden kaynaklanır; bir dilim 54 ÷ 3 = 18 TL'dir. Sabit kabul ücreti 64 − 2 × 18 = 28 TL olur. 4,1 kg ve 5,9 kg ayrı gönderildiğinde her biri 3 dilim sayılır; toplam 2 × (28 + 3 × 18) = 164 TL ödenir. Birleşmiş gönderi tam 10 kg'dır ve 5 dilim sayılır; ücreti 28 + 5 × 18 = 118 TL'dir. Tasarruf 164 − 118 = 46 TL olur."
      }
    ],
    test13: [
      {
        "id": "m6-1-t13-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABCD dikdörtgeninde E, AB üzerinde; F, BC üzerindedir. Şekilde verilen uzunlukların tümü santimetredir.\n\nBoyalı DEF üçgeninin alanı kaç santimetrekaredir?",
        "options": [
          "84",
          "96",
          "108",
          "120"
        ],
        "correct": 1,
        "explanation": "Dikdörtgenin alanı 18 × 12 = 216 cm²’dir. AE = 6 olduğundan EB = 12; BF = 8 olduğundan FC = 4 olur. Boyasız ADE, EBF ve DCF üçgenlerinin alanları sırasıyla 6 × 12 ÷ 2 = 36, 12 × 8 ÷ 2 = 48 ve 18 × 4 ÷ 2 = 36 cm²’dir. Boyalı alan 216 − 36 − 48 − 36 = 96 cm² olur.",
        "imageUrl": "/grade6/matematik/test-13/soru-01.svg",
        "imageAlt": "ABCD dikdörtgeni: AB 18 cm, AD 12 cm. E, AB üzerinde ve AE 6 cm. F, BC üzerinde ve BF 8 cm. D, E, F birleştirilmiş; DEF üçgeni boyalıdır.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-1-t13-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "O merkezli çemberin çapı 28 cm’dir. Şekildeki 120°’lik merkez açının gördüğü küçük AB yayı ile OA ve OB yarıçapları boyunca tek parça tel yerleştiriliyor. Telin uçları yalnızca birleşiyor; ek pay ve kayıp yoktur.\n\nBu tel düzleştirilip tamamıyla bir kare yapılırsa karenin alanı kaç santimetrekare olur? (π = 3 alınız.)",
        "options": [
          "49",
          "144",
          "169",
          "196"
        ],
        "correct": 3,
        "explanation": "Çemberin çevresi 3 × 28 = 84 cm’dir. 120°, tam açının üçte biri olduğundan küçük AB yayı 84 ÷ 3 = 28 cm’dir. İki yarıçapın toplamı çapa, yani 28 cm’ye eşittir. Tel 28 + 28 = 56 cm olur. Karenin bir kenarı 56 ÷ 4 = 14 cm, alanı 14 × 14 = 196 cm²’dir.",
        "imageUrl": "/grade6/matematik/test-13/soru-02.svg",
        "imageAlt": "Çapı 28 cm olan O merkezli çember. OA ve OB arasındaki küçük merkez açı 120°. Küçük AB yayı ve iki yarıçap kalın turuncu çizgiyle tel olarak gösterilir.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-1-t13-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Paralelkenar biçimindeki zemin, şekildeki üçgen bölüm boş bırakılarak kaplanacaktır. Ölçüler görseldedir. Kaplama parçalarının her biri 0,09 m² alan kaplar; kesilen parçalar da kayıpsız kullanılabilir. Her pakette 6 parça vardır ve yalnız tam paket satılır.\n\nGerekli en az sayıda paket alındığında, kullanılmadan kalan kaplama malzemesinin toplam alanı kaç metrekaredir?",
        "options": [
          "0,18",
          "0,27",
          "0,36",
          "0,54"
        ],
        "correct": 2,
        "explanation": "Paralelkenarın tabanı 1,8 m, yüksekliği 120 cm = 1,2 m’dir; alanı 2,16 m² olur. Boş üçgenin tabanı 60 cm = 0,6 m ve yüksekliği yine 1,2 m olduğundan alanı 0,36 m²’dir. Kaplanacak alan 1,8 m², gereken parça sayısı 1,8 ÷ 0,09 = 20’dir. En az 4 paketle 24 parça alınır; kalan 4 parçanın toplam alanı 4 × 0,09 = 0,36 m²’dir.",
        "imageUrl": "/grade6/matematik/test-13/soru-03.svg",
        "imageAlt": "Paralelkenarın tabanı 1,8 m, dik yüksekliği 120 cm. Alt tabanın 60 cm uzunluğundaki parçasını taban alan ve üst kenarda tepe noktası bulunan beyaz üçgen boş bırakılır. Kalan bölge mavi.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t13-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Grafikte iki grubun öğrenci sayıları ve bir etkinlikte aldıkları puanların aritmetik ortalamaları verilmiştir. B grubundan bir öğrenci, puanı değişmeden A grubuna geçiyor. Bundan sonra iki grubun puan ortalamaları birbirine eşit oluyor.\n\nYer değiştiren öğrencinin puanı kaçtır?",
        "options": [
          "30",
          "24",
          "20",
          "18"
        ],
        "correct": 0,
        "explanation": "Başlangıçtaki toplam puan A’da 4 × 15 = 60, B’de 6 × 20 = 120’dir. Genel toplam 180 ve toplam öğrenci sayısı 10 değişmez. Grupların yeni ortalamaları eşit olduğundan her biri 180 ÷ 10 = 18’dir. Geçişten sonra A’da 5 öğrenci ve 5 × 18 = 90 puan vardır. Gelen öğrencinin puanı 90 − 60 = 30’dur.",
        "imageUrl": "/grade6/matematik/test-13/soru-04.svg",
        "imageAlt": "A grubu 4 öğrenci ve 15 puan ortalama, B grubu 6 öğrenci ve 20 puan ortalama. Öğrenci sayısını gösteren sütun grafiği ve her grubun ortalaması altında yazılıdır.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-1-t13-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Sayı çifti makinesinde soldaki ve sağdaki sayı, her turda aynı anda aşağıdaki kurala göre yenileniyor. Yeni sol sayı eski sağ sayı; yeni sağ sayı ise iki eski sayının toplamı oluyor. Görselde üçüncü turun sonundaki çift verilmiştir.\n\nBaşlangıçtaki sağ sayı, başlangıçtaki sol sayıdan kaç fazladır?",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "correct": 1,
        "explanation": "Her turu geri alırken eski sağ sayı, yeni sol sayıya eşittir; eski sol sayı ise yeni sağdan yeni sol çıkarılarak bulunur. Son çift (13,21) olduğuna göre önceki çiftler sırasıyla (8,13), (5,8) ve başlangıç için (3,5)’tir. İstenen fark 5 − 3 = 2’dir.",
        "imageUrl": "/grade6/matematik/test-13/soru-05.svg",
        "imageAlt": "İki giriş kutusu sol ve sağ. Oklar yeni solun eski sağ, yeni sağın eski sol artı eski sağ olduğunu gösteriyor. Üç tur sonra sol 13, sağ 21. Her tur iki değer aynı anda yenilenir.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t13-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABC üçgeninde D, BC kenarının üzerindedir. AB = AD = DC ve CAD açısı 24°’dir.\n\nBAC açısı kaç derecedir?",
        "options": [
          "84°",
          "96°",
          "108°",
          "132°"
        ],
        "correct": 2,
        "explanation": "AD = DC olduğundan ADC üçgeninde DAC ve ACD açıları 24°’dir. ADC açısı 180 − 48 = 132° olur. B,D,C doğrusal olduğundan ADB açısı 48°’dir. AB = AD olduğundan ABD üçgeninin B ve D açıları 48°; BAD açısı 84° olur. BAC = BAD + DAC = 84 + 24 = 108°’dir.",
        "imageUrl": "/grade6/matematik/test-13/soru-06.svg",
        "imageAlt": "ABC üçgeninde D, B ile C arasında. AB, AD ve DC eşitlik çizgileriyle işaretli. CAD 24°; BAC soruluyor.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-1-t13-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Eş karelerden oluşan bir kare panoda, yalnız en dış sıradaki kareler mavidir; içeride kalan bütün kareler beyazdır. Şekilde bu kuralla yapılmış iki küçük örnek verilmiştir. Başka bir panonun beyaz kare sayısı 36’dır.\n\nBu panonun çevresine, hiçbir boşluk bırakmadan bir sıra daha kare eklenip daha büyük bir kare pano elde edilirse kaç yeni kare eklenmiş olur?",
        "options": [
          "28",
          "32",
          "36",
          "40"
        ],
        "correct": 2,
        "explanation": "İçteki beyaz bölüm kare biçimindedir. 36 = 6 × 6 olduğundan içte 6 sıra ve 6 sütun vardır. Mavi dış sıra ile başlangıç panosu 8 × 8 = 64 kare olur. Dışına bir sıra daha eklenince her kenardaki kare sayısı 2 artar ve 10 × 10 = 100 kare olur. Eklenen kare sayısı 100 − 64 = 36’dır.",
        "imageUrl": "/grade6/matematik/test-13/soru-07.svg",
        "imageAlt": "3 × 3 ve 4 × 4 örnek kare panoların yalnız en dış sırası mavi, içi beyaz. Daha büyük panoda beyaz kare sayısı 36; dışına bir sıra eklenmesi gösteriliyor.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t13-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki pozitif doğal sayının çarpımı 540’tır. Bu iki sayının ortak pozitif bölenleri yalnızca 1, 2, 3 ve 6’dır.\n\nBu sayıların toplamının alabileceği en küçük değer kaçtır?",
        "options": [
          "42",
          "48",
          "54",
          "96"
        ],
        "correct": 1,
        "explanation": "İki sayı da 6’nın katıdır. Her ikisi de 6’ya bölündüğünde elde edilen sayıların çarpımı 540 ÷ (6 × 6) = 15 olur. 15’in pozitif çarpan çiftleri 1–15 ve 3–5’tir; her çiftin kendi arasında 1’den büyük ortak böleni yoktur. Bu çiftlerdeki sayılar yeniden 6 ile çarpılınca 6–90 ve 18–30 elde edilir. Bu iki çift de verilen ortak bölen koşulunu sağlar. Toplamlar 96 ve 48 olduğundan en küçük değer 48’dir."
      },
      {
        "id": "m6-1-t13-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Aynı kuruyemişten önce 3/5 kg, sonra 0,75 kg alan bir müşteri toplam 216 TL ödüyor. İndirim öncesindeki kilogram fiyatı üç alışverişte de aynıdır. Müşteri aynı üründen 625 g daha alıyor; yalnız bu son alışverişin hesaplanan tutarının 3/10’u kadar indirim uygulanıyor.\n\nMüşteri son alışverişinde indirimden sonra kaç TL öder?",
        "options": [
          "48",
          "64",
          "100",
          "70"
        ],
        "correct": 3,
        "explanation": "İlk iki alışverişte toplam 0,6 + 0,75 = 1,35 kg alınmıştır. Kilogram fiyatı 216 ÷ 1,35 = 160 TL’dir. 625 g = 0,625 kg olduğundan indirimsiz son ücret 0,625 × 160 = 100 TL olur. Bunun 3/10’u olan 30 TL indirilince 100 − 30 = 70 TL ödenir."
      },
      {
        "id": "m6-1-t13-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir sınıfta 24 öğrenci vardır. Her öğrenci bir anket sorusuna yalnız “evet” veya “hayır” cevabı vermiştir. Sonuçlar bir tabloya aktarılırken “evet” sayısı doğru yazılmış, “hayır” sayısı ise yanlışlıkla 6 eksik yazılmıştır. Hatalı tablodaki kayıtlarda “evet” cevabının göreli sıklığı 2/3’tür.\n\nGerçek kayıtlara göre “hayır” cevabının göreli sıklığı kaçtır?",
        "options": [
          "1/2",
          "1/3",
          "1/4",
          "2/3"
        ],
        "correct": 0,
        "explanation": "Hatalı tabloda 24 − 6 = 18 cevap görünür. Evet sayısı doğru yazılmıştır ve 18’in 2/3’ü 12’dir. Gerçek hayır sayısı 24 − 12 = 12 olur. Gerçek kayıtlarda hayır göreli sıklığı 12/24 = 1/2’dir."
      }
    ],

    test14: [
      {
        "id": "m6-1-t14-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Kenar uzunlukları 8 cm ve 6 cm olan iki kare, şekildeki gibi üst üste yerleştiriliyor. Ortak bölge 3 cm × 4 cm boyutlarında bir dikdörtgendir.\n\nOluşan birleşik şeklin alanı ve yalnız dış sınırının uzunluğu sırasıyla hangisidir?",
        "options": [
          "88 cm² ve 56 cm",
          "100 cm² ve 42 cm",
          "88 cm² ve 42 cm",
          "76 cm² ve 28 cm"
        ],
        "correct": 2,
        "explanation": "Alanlar toplanınca ortak bölge iki kez sayılır; bir kez çıkarılır: 64 + 36 − 12 = 88 cm². İki karenin çevreleri toplamı 32 + 24 = 56 cm’dir. Birleşimin içinde kalan sınır parçaları toplam 2 × (3 + 4) = 14 cm olduğundan dış sınır 56 − 14 = 42 cm’dir.",
        "imageUrl": "/grade6/matematik/test-14/soru-01.svg",
        "imageAlt": "Bir büyük 8 cm kare ile sağ altına kaydırılmış 6 cm kare. Ortak dikdörtgenin yatay uzunluğu 3 cm, düşey uzunluğu 4 cm. Dış sınır turuncu, iç çizgiler kesikli.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t14-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Çapı 50 cm olan bir tekerlek, düz bir yolda kaymadan 25,8 m ilerliyor. Başlangıçta çember üzerindeki P işareti yere değmektedir.\n\nTam turlar çıkarıldığında, kalan son tur bölümünde tekerleğin merkezi etrafında döndüğü açı kaç derecedir? (π = 3 alınız.)",
        "options": [
          "72°",
          "108°",
          "120°",
          "288°"
        ],
        "correct": 0,
        "explanation": "Bir turda alınan yol 3 × 50 = 150 cm’dir. Toplam yol 2580 cm olur. 17 tam turda 2550 cm alınır; 30 cm kalır. Kalan yol bir çevrenin 30/150 = 1/5’i olduğundan açı 360 ÷ 5 = 72°’dir.",
        "imageUrl": "/grade6/matematik/test-14/soru-02.svg",
        "imageAlt": "Yol üzerinde 50 cm çaplı tekerlek; başlangıçta P en altta, sağa ilerleme oku ve 25,8 m toplam yol etiketi.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-1-t14-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Altı sayılık veri grubu, küçükten büyüğe sıralanmış olarak görselde verilmiştir. Aritmetik ortalama 10, ortanca 9’dur.\n\nY − X kaçtır?",
        "options": [
          "6",
          "7",
          "9",
          "8"
        ],
        "correct": 3,
        "explanation": "Altı verinin ortancası üçüncü ve dördüncü sayıların ortalamasıdır. (X + 11) ÷ 2 = 9 olduğundan X = 7’dir. Tüm sayıların toplamı 6 × 10 = 60’tır. Bilinen dört sayının toplamı 3 + 6 + 11 + 18 = 38 olduğundan X + Y = 22, Y = 15 olur. Y − X = 15 − 7 = 8’dir.",
        "imageUrl": "/grade6/matematik/test-14/soru-03.svg",
        "imageAlt": "Küçükten büyüğe sıralı altı kart: 3, 6, X, 11, Y, 18. Ortanca üçüncü ve dördüncü kayıtların arasındaki konumda işaretlenir. Ortalama 10, ortanca 9.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-1-t14-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABCD yamuğunda AB ∥ DC ve AD = DC’dir. DAB açısı 70°, ABC açısı 80° olarak verilmiştir. AC köşegeni çiziliyor.\n\nACB açısı kaç derecedir?",
        "options": [
          "55°",
          "65°",
          "70°",
          "75°"
        ],
        "correct": 1,
        "explanation": "Paralel tabanlar nedeniyle ADC = 180 − 70 = 110°’dir. AD = DC olduğundan ADC üçgeninin A ve C taban açıları (180 − 110) ÷ 2 = 35° olur. DAB açısının AC ile kalan kısmı CAB = 70 − 35 = 35°’dir. ABC üçgeninde ACB = 180 − 80 − 35 = 65° bulunur.",
        "imageUrl": "/grade6/matematik/test-14/soru-04.svg",
        "imageAlt": "AB alt, DC üst paralel tabanlı yamuk; AD ve DC eşit çizgileri, A70°, B80°. AC köşegeni. C köşesinde AC ile CB arasındaki açı soruluyor.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t14-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "İki terazi de dengededir. Aynı renk ve biçimdeki kapalı kutuların kütleleri birbirine, topların kütleleri de birbirine eşittir.\n\nÜç kutunun toplam kütlesi, bir topun kütlesinden kaç kilogram fazladır?",
        "options": [
          "11",
          "12",
          "13",
          "18"
        ],
        "correct": 2,
        "explanation": "İlk denge 2 kutu + 3 top = 27 kg; ikinci denge 1 kutu + 2 top = 16 kg verir. İkinci dengenin iki katından ilk denge çıkarılınca 1 top = 32 − 27 = 5 kg bulunur. Bir kutu 16 − 10 = 6 kg’dır. İstenen fark 3 × 6 − 5 = 13 kg’dır.",
        "imageUrl": "/grade6/matematik/test-14/soru-05.svg",
        "imageAlt": "Birinci dengeli terazide iki kutu ve üç top 27 kg ile dengede. İkinci terazide bir kutu ve iki top 16 kg ile dengede.",
        "imageWidth": 360,
        "imageHeight": 740
      },
      {
        "id": "m6-1-t14-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Şekildeki L biçimli duvara iki kat boya yapılacaktır. Boyanın 1 litresi bir katta 7 m² alanı boyar. Elde 1,2 litre boya vardır. Eksik boya, her biri 0,75 litre olan şişelerden en az sayıda alınarak tamamlanıyor. Boya kaybı yoktur.\n\nİki kat boyama tamamlandığında toplam kaç litre boya artar?",
        "options": [
          "0,30",
          "0,40",
          "0,45",
          "0,75"
        ],
        "correct": 2,
        "explanation": "Duvarın alanı 6 × 4 − 2 × 1,5 = 21 m²’dir. İki kat için 42 m² boyama yapılır; 42 ÷ 7 = 6 litre boya gerekir. Eldeki 1,2 litre çıkarılınca 4,8 litre alınmalıdır. 6 şişe 4,5 litre ile yetmez; 7 şişe 5,25 litre olduğundan yeterlidir. Artan boya 1,2 + 5,25 − 6 = 0,45 litredir.",
        "imageUrl": "/grade6/matematik/test-14/soru-06.svg",
        "imageAlt": "6 m genişliğinde, 4 m yüksekliğinde dikdörtgenin sağ üstünden 2 m genişliğinde ve 1,5 m yüksekliğinde dikdörtgen çıkarılmış L biçimli duvar. 0,75 L şişe ve iki kat bilgisi. Başlangıçta elde 1,2 L boya vardır.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t14-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Nokta örüntüsünde her adımda alta, bir önceki sıradan bir fazla nokta içeren yeni bir sıra ekleniyor. İlk üç adım görseldedir.\n\nArdışık iki adımdaki şekiller ayrı ayrı çizildiğinde toplam 81 nokta kullanılıyor. Bu iki şekilden büyük olanında kaç nokta vardır?",
        "options": [
          "36",
          "45",
          "54",
          "72"
        ],
        "correct": 1,
        "explanation": "Ardışık iki adımın nokta toplamları sırasıyla 1 + 2 + … + n ve 1 + 2 + … + (n + 1) biçimindedir. 8. adımda 1 + … + 8 = 36, 9. adımda 1 + … + 9 = 45 nokta vardır ve toplam 81’dir. Nokta sayısı her adımda arttığından başka ardışık çift bu toplamı vermez. Büyük şekil 45 noktalıdır.",
        "imageUrl": "/grade6/matematik/test-14/soru-07.svg",
        "imageAlt": "İlk adım bir nokta. İkinci adım üstte bir altta iki, toplam üç nokta. Üçüncü adım bir, iki ve üç noktalı sıralar, toplam altı nokta. Ardışık iki büyük şeklin toplamı 81.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t14-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Birbirinden farklı üç asal sayının toplamı 42’dir. Bu sayıların büyük olan ikisi arasındaki fark 6’dır.\n\nEn büyük asal sayı kaçtır?",
        "options": [
          "19",
          "23",
          "29",
          "31"
        ],
        "correct": 1,
        "explanation": "Üç tek sayının toplamı tek olur; toplam 42 çift olduğundan asal sayılardan biri 2 olmalıdır. Diğer iki asalın toplamı 40, farkı 6’dır. Küçük olanı bulmak için (40 − 6) ÷ 2 = 17 hesaplanır; büyüğü 23’tür. 2, 17 ve 23 farklı asallardır ve toplamları 42’dir."
      },
      {
        "id": "m6-1-t14-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Aylin’in başlangıçtaki parası, Bora’nın başlangıçtaki parasının 3/4’üdür. Aylin, Bora’ya 18 TL verince Bora’nın parası Aylin’in kalan parasının iki katı oluyor. Başka para alışverişi yapılmıyor.\n\nAylin’in başlangıçta kaç TL’si vardır?",
        "options": [
          "54",
          "72",
          "90",
          "81"
        ],
        "correct": 3,
        "explanation": "Başlangıçtaki paraları Aylin için 3, Bora için 4 eş payla düşünelim. Aylin’in son parasının iki katı, 6 paydan 36 TL eksiktir; Bora’nın son parası ise 4 paydan 18 TL fazladır. Eşitlik için 2 pay = 54 TL, yani 1 pay = 27 TL olmalıdır. Aylin başlangıçta 3 × 27 = 81 TL’ye sahiptir. Kontrol: Aylin 63, Bora 126 TL kalır."
      },
      {
        "id": "m6-1-t14-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir fotokopicinin her sipariş için tarifesi şöyledir: İlk 40 sayfanın her biri 0,75 TL, 40’tan sonraki her sayfa 0,60 TL’dir. Başka ücret alınmıyor. Bir müşteri bütün sayfaları tek siparişte bastırınca 57 TL ödüyor.\n\nAynı sayfaları biri 40 sayfalık, diğeri kalan sayfalardan oluşan iki ayrı siparişle bastırsaydı kaç TL daha fazla öderdi?",
        "options": [
          "6",
          "9",
          "12",
          "15"
        ],
        "correct": 0,
        "explanation": "İlk 40 sayfa 30 TL tutar. Kalan 27 TL, 27 ÷ 0,60 = 45 sayfaya karşılık gelir; toplam 85 sayfa vardır. Siparişler ayrılırsa 40 sayfalık sipariş 30 TL, 45 sayfalık sipariş 40 × 0,75 + 5 × 0,60 = 33 TL tutar. Toplam 63 TL, tek siparişten 63 − 57 = 6 TL fazladır."
      }
    ],
    test15: [
      {
        "id": "m6-1-t15-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "20 m × 12 m boyutlarındaki dikdörtgen bahçede, biri yatay diğeri düşey iki düz yol şekildeki gibi tüm bahçe boyunca uzanıyor. Yolların genişlikleri 3 m ve 2 m’dir. Yollar dışındaki alanın 1/3’üne çiçek, kalanına çim ekiliyor.\n\nÇim ekilen alan kaç metrekaredir?",
        "options": [
          "108",
          "102",
          "120",
          "162"
        ],
        "correct": 0,
        "explanation": "Bahçe 240 m²’dir. Yolların alanlarını toplarken kesişimdeki 2 × 3 = 6 m² iki kez sayılır. Yol alanı 20 × 3 + 12 × 2 − 6 = 78 m²’dir. Kalan 162 m²’nin 1/3’ü çiçek, 2/3’ü çim olur: 162 × 2/3 = 108 m².",
        "imageUrl": "/grade6/matematik/test-15/soru-01.svg",
        "imageAlt": "20 m genişliğinde ve 12 m yüksekliğinde dikdörtgen. Bahçeyi boydan boya geçen yatay yolun genişliği 3 m, düşey yolun genişliği 2 m. Yollar kesişiyor.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t15-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "AB = 24 cm, AC = 8 cm ve CB = 16 cm’dir. Şeklin sınırı; AB çaplı büyük yarım çember yayı ile AC ve CB çaplı iki küçük yarım çember yayından oluşur. Doğru parçaları sınıra dâhil değildir.\n\n2 m uzunluğundaki telden bu sınırın iki tam kopyası, kayıp olmadan yapılıyor. Kaç santimetre tel artar? (π = 3 alınız.)",
        "options": [
          "48",
          "52",
          "56",
          "64"
        ],
        "correct": 2,
        "explanation": "Bir yarım çemberin yay uzunluğu, çevresinin yarısıdır. Üç yayın toplamı (3 × 24 + 3 × 8 + 3 × 16) ÷ 2 = 72 cm olur. İki kopya 144 cm tel gerektirir. 2 m = 200 cm olduğundan 200 − 144 = 56 cm tel artar.",
        "imageUrl": "/grade6/matematik/test-15/soru-02.svg",
        "imageAlt": "A,C,B doğrusal, AC 8 cm ve CB 16 cm. AB çaplı büyük yarım çember üstte; aynı taraftaki iki küçük yarım çember yayları ile arasında boyalı bölge. Üç yay turuncu sınırdır.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t15-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Grafik bir grubun etkinlik puanlarının sıklığını gösteriyor. 5 puan alanların sayısı X ile gizlenmiştir. Bu grubun aritmetik ortalaması 4’tür. Daha sonra gruba, birbirleriyle aynı puanı alan iki kişi katılınca ortalama 5 oluyor.\n\nSonradan katılan kişilerin her birinin puanı kaçtır?",
        "options": [
          "6",
          "7",
          "9",
          "8"
        ],
        "correct": 3,
        "explanation": "İlk grupta 2 puan alan 3, 8 puan alan 1 kişi vardır. Bu dört kişinin toplamı 14’tür; ortalama 4 olsaydı 16 olmalıydı. Her 5 puanlık kişi ortalamanın 1 fazlasını getirir, bu nedenle X = 2’dir. İlk grup 6 kişi ve toplam 24 puandır. İki kişi eklenince 8 kişinin toplamı 8 × 5 = 40 olur. İki yeni kişi 16 puanı eşit paylaşır: her biri 8 puandır.",
        "imageUrl": "/grade6/matematik/test-15/soru-03.svg",
        "imageAlt": "Puan sıklıkları: 2 puan için 3 nokta, 5 puan için X kişi kutusu, 8 puan için 1 nokta. Her nokta bir kişidir. X bölümü nokta sayısı görünmeyecek biçimde gizlidir.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t15-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "ABC üçgeninde BA kenarı A yönünde E noktasına uzatılmıştır. EAC dış açısı 132°’dir. ABC açısı, ACB açısından 24° büyüktür. BD, ABC açısını iki eş açıya ayırır ve D, AC kenarı üzerindedir.\n\nBDC açısı kaç derecedir?",
        "options": [
          "78°",
          "87°",
          "93°",
          "102°"
        ],
        "correct": 1,
        "explanation": "A iç açısı 180 − 132 = 48°’dir. B ve C açıları toplamı 132°, farkı 24° olduğundan C = (132 − 24) ÷ 2 = 54°, B = 78° olur. BD açıortay olduğundan DBC = 39°’dir. BDC üçgeninde istenen açı 180 − 54 − 39 = 87°’dir.",
        "imageUrl": "/grade6/matematik/test-15/soru-04.svg",
        "imageAlt": "ABC üçgeni; BA, A’dan E’ye uzatılmış. EAC 132°. B açısı C açısından 24° büyük. B’den AC üzerindeki D’ye açıortay, B’de eş yaylar. D’de BDC soruluyor.",
        "imageWidth": 360,
        "imageHeight": 760
      },
      {
        "id": "m6-1-t15-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kampanyanın şişe değişim kuralı görselde verilmiştir. Alınan içecek içildiğinde onun boş şişesi de sonraki değişimlerde kullanılabiliyor. Başka şişe alınmıyor ve ödünç şişe kullanılmıyor.\n\nBu yolla toplam 7 dolu şişe alabilmek için başlangıçta en az kaç boş şişe gerekir?",
        "options": [
          "28",
          "30",
          "29",
          "35"
        ],
        "correct": 2,
        "explanation": "Her değişimde 5 boş şişe verilir; yeni içecek içilince 1 boş geri kazanılır. Böylece eldeki boş şişe sayısı her defasında 4 azalır. Yedinci değişimden önce en az 5 boş gerekir. Altı değişimde 24 boş eksildiğinden başlangıçta en az 24 + 5 = 29 boş olmalıdır. 29 ile boş sayıları sırasıyla 25, 21, 17, 13, 9, 5, 1 olur; 7 dolu şişe alınır.",
        "imageUrl": "/grade6/matematik/test-15/soru-05.svg",
        "imageAlt": "Beş boş şişe bir dolu şişeyle değiştiriliyor. Dolu şişe içilince bir boş şişe geri dönüyor. Geri dönüş oku boş şişe havuzuna yöneliyor.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t15-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Şekildeki iki üçgenin taban uzunlukları eşittir. Tabanlarına ait dik yüksekliklerden biri diğerinden 8 cm fazladır. İki üçgenin alanları toplamı 216 cm²’dir.\n\nKüçük üçgenin alanı kaç santimetrekaredir?",
        "options": [
          "64",
          "72",
          "80",
          "96"
        ],
        "correct": 1,
        "explanation": "Ortak taban 18 cm’dir. Yükseklik farkı 8 cm olduğundan alan farkı 18 × 8 ÷ 2 = 72 cm²’dir. Büyük alanı küçüğe indirmek için toplamdan 72 çıkarılır: 216 − 72 = 144. Bu, iki küçük alanın toplamıdır; küçük alan 144 ÷ 2 = 72 cm²’dir.",
        "imageUrl": "/grade6/matematik/test-15/soru-06.svg",
        "imageAlt": "İki ayrı üçgenin tabanı 18 cm. Dik yükseklikler kesikli çizgilerle gösterilir. Alttaki yükseklik üsttekinden 8 cm fazladır. Toplam alan 216 cm².",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t15-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "A ve B gruplarının halka atış sonuçları görselde verilmiştir. İki grubun kayıtları birleştirildikten sonra 40 yeni atış daha yapılıyor. Son durumda bütün atışlardaki isabetin göreli sıklığının en az 1/2, en çok 3/5 olması isteniyor.\n\nYeni 40 atıştaki isabet sayısı kaç farklı doğal sayı değeri alabilir?",
        "options": [
          "9",
          "10",
          "12",
          "11"
        ],
        "correct": 3,
        "explanation": "İlk iki grupta toplam 60 atışın 24 + 5 = 29’u isabetlidir. Yeni atışlarla toplam 100 olur. İstenen göreli sıklık için toplam isabet sayısı 50 ile 60 arasında, uçlar dâhil olmalıdır. Bu nedenle yeni isabet sayısı 50 − 29 = 21 ile 60 − 29 = 31 arasındadır. 21, 22, …, 31 olmak üzere 11 farklı değer vardır; hepsi 40 yeni atış içinde mümkündür.",
        "imageUrl": "/grade6/matematik/test-15/soru-07.svg",
        "imageAlt": "A grubu: 40 atış, 24 isabet ve 16 isabetsiz. B grubu: 20 atış, 5 isabet ve 15 isabetsiz. Ortak ölçekli yatay yığılmış çubuklar başarıları ve başarısızlıkları gösterir.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "m6-1-t15-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Virgülden sonra tam üç basamağı bulunan bir sayı, doğrudan onda birler basamağına yuvarlandığında 2,7 oluyor. Aynı sayı önce yüzde birler basamağına, ardından elde edilen sonuç onda birler basamağına yuvarlanınca 2,8 oluyor.\n\nBu koşulları sağlayan kaç farklı sayı vardır?",
        "options": [
          "5",
          "4",
          "9",
          "10"
        ],
        "correct": 0,
        "explanation": "İki aşamalı işlemde 2,8’e çıkıp doğrudan işlemde 2,7’de kalması için ilk sayı 2,75’ten küçük olmalı, fakat yüzde birlere yuvarlanınca 2,75 olmalıdır. Üç basamaklı olası sayılar 2,745; 2,746; 2,747; 2,748 ve 2,749’dur. Toplam 5 sayı vardır."
      },
      {
        "id": "m6-1-t15-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir kırtasiyede aynı kalemler yalnız 18’li veya 24’lü paketlerle satılıyor. 18’li paket 45 TL, 24’lü paket 64 TL’dir. Paketler açılarak satılmıyor.\n\nTam olarak 150 kalem almak isteyen biri en az kaç TL öder?",
        "options": [
          "375",
          "391",
          "379",
          "400"
        ],
        "correct": 2,
        "explanation": "24’lü paket sayısı en fazla 6 olabilir. 150’den 24’ün katları çıkarıldığında kalanın 18’e tam bölündüğü iki seçenek vardır: 1 tane 24’lü ve 7 tane 18’li; 4 tane 24’lü ve 3 tane 18’li. Ücretler 64 + 7 × 45 = 379 TL ve 4 × 64 + 3 × 45 = 391 TL’dir. Daha az paket almak burada daha az ödeme anlamına gelmez; en düşük ücret 379 TL’dir."
      },
      {
        "id": "m6-1-t15-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Bir etkinlik için toplam 25 defter alınıyor. Çizgili defter 3,60 TL, kareli defter 4,80 TL’dir. Toplam ödeme 100,80 TL’dir.\n\nAlınan kareli defter sayısı kadar çizgili defter daha alınsaydı, bu ek alışveriş için kaç TL ödenirdi?",
        "options": [
          "28,80",
          "32,40",
          "43,20",
          "57,60"
        ],
        "correct": 1,
        "explanation": "Bütün defterler çizgili olsaydı 25 × 3,60 = 90 TL tutardı. Gerçek ücret 10,80 TL fazladır. Her kareli defter 1,20 TL fark oluşturur; kareli sayısı 10,80 ÷ 1,20 = 9’dur. 9 çizgili defterin ücreti 9 × 3,60 = 32,40 TL olur."
      }
    ],

  },
  term2: {
    test1: [
      {
        "id": "m6-2-t1-01",
        "subject": "matematik",
        "term": 2,
        "prompt": "Şekildeki dikdörtgen bahçenin kenar uzunlukları metre cinsinden verilmiştir. Bahçenin çevresine, 5 m genişliğindeki kapı dışında, toplam 51 m çit çekiliyor.\n\nBuna göre bahçenin alanı kaç metrekaredir?",
        "options": [
          "154",
          "170",
          "187",
          "209"
        ],
        "correct": 2,
        "explanation": "Kapı da çevreye dâhil olduğundan çevre 51 + 5 = 56 m’dir. İki komşu kenarın toplamı 28 m olur. (2n + 3) + (n + 4) = 3n + 7 olduğundan 3n = 21 ve n = 7’dir. Kenarlar 17 m ve 11 m; alan 17 × 11 = 187 m² olur.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-01.svg",
        "imageAlt": "Dikdörtgen bahçenin yatay kenarı (2n + 3) m, düşey kenarı (n + 4) m. Alt kenarda 5 m genişliğinde kapı boşluğu bulunuyor.",
        "imageWidth": 360,
        "imageHeight": 380
      },
      {
        "id": "m6-2-t1-02",
        "subject": "matematik",
        "term": 2,
        "prompt": "İlk üç adımı gösterilen iki örüntüde her yeni adımda kırmızı pul sayısı 3, mavi pul sayısı 5 artıyor.\n\nAynı adımdaki mavi pulların sayısı kırmızı pulların sayısından 18 fazla olduğunda, iki renkte toplam kaç pul vardır?",
        "options": [
          "94",
          "88",
          "76",
          "106"
        ],
        "correct": 0,
        "explanation": "Birinci adımda kırmızı pullar 4 fazladır. Her adımda mavi ile kırmızı arasındaki fark 5 − 3 = 2 artar. Mavinin 18 fazla olması için fark 22 artmalı, yani 11 adım ilerlenmelidir. 12. adımda kırmızı 5 + 11 × 3 = 38, mavi 1 + 11 × 5 = 56 pul olur. Toplam 94’tür.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-02.svg",
        "imageAlt": "Birinci adımda 5 kırmızı ve 1 mavi, ikinci adımda 8 kırmızı ve 6 mavi, üçüncü adımda 11 kırmızı ve 11 mavi pul var. Kırmızı pullar her adımda 3, mavi pullar 5 artıyor.",
        "imageWidth": 360,
        "imageHeight": 600
      },
      {
        "id": "m6-2-t1-03",
        "subject": "matematik",
        "term": 2,
        "prompt": "Akış şemasına pozitif bir tam sayı giriliyor. Karar kutusunda elde edilen sonuç 50’den büyükse işlem bitiyor; değilse şemadaki döngü sürüyor.\n\nİşlemin ilk iki kontrolde bitmeyip tam üçüncü kontrolde bitmesini sağlayan kaç farklı başlangıç sayısı vardır?",
        "options": [
          "4",
          "5",
          "7",
          "6"
        ],
        "correct": 3,
        "explanation": "Başlangıç x ise kontrol edilen sonuçlar sırasıyla 2x + 5, 4x + 9 ve 8x + 17 olur. İkinci sonuç en fazla 50 olmalıdır: pozitif tam sayı x en fazla 10’dur. Üçüncü sonuç 50’den büyük olmalıdır: x en az 5’tir. 5, 6, 7, 8, 9 ve 10 için ilk sonuç da 50’yi aşmaz. Böylece 6 başlangıç sayısı vardır.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-03.svg",
        "imageAlt": "Başlangıç sayısından sonra sayıyı 2 ile çarp, 5 ekle, sonuç 50’den büyük mü diye kontrol et. Evetse bitir. Hayırsa sonuçtan 3 çıkar ve bu yeni sayıyla 2 ile çarp adımına dön.",
        "imageWidth": 360,
        "imageHeight": 720
      },
      {
        "id": "m6-2-t1-04",
        "subject": "matematik",
        "term": 2,
        "prompt": "ABCD paralelkenarında E, AB üzerinde; F, DC üzerindedir. Dik yükseklik 12 cm’dir. Şekilde taralı EBCF bölgesinin alanı kaç santimetrekaredir?",
        "options": [
          "144",
          "156",
          "168",
          "192"
        ],
        "correct": 1,
        "explanation": "AB = 2 dm = 20 cm ve AE = 60 mm = 6 cm’dir. Paralelkenarın alanı 20 × 12 = 240 cm² olur. Taralı olmayan ADF üçgeninin alanı 8 × 12 ÷ 2 = 48 cm², AEF üçgeninin alanı 6 × 12 ÷ 2 = 36 cm²’dir. Taralı alan 240 − 48 − 36 = 156 cm²’dir.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-04.svg",
        "imageAlt": "ABCD paralelkenarında AB 2 dm, dik yükseklik 12 cm. E, AB üzerinde ve AE 60 mm. F, DC üzerinde ve DF 8 cm. EBCF dörtgeni taralı; ADF ve AEF üçgenleri taralı değil.",
        "imageWidth": 360,
        "imageHeight": 460
      },
      {
        "id": "m6-2-t1-05",
        "subject": "matematik",
        "term": 2,
        "prompt": "Dikdörtgen parkın iki yeşil üçgensel bölgesi dışındaki 420 m²’lik alanı taşla kaplanıyor. Üçgenlerin tabanları x m ve (x + 4) m; bu tabanlara ait dik yükseklikleri sırasıyla 10 m ve 15 m’dir.\n\nİki yeşil üçgenin taban uzunlukları toplamı kaç metredir?",
        "options": [
          "24",
          "26",
          "28",
          "32"
        ],
        "correct": 2,
        "explanation": "Parkın alanı 30 × 20 = 600 m², yeşil alanların toplamı 600 − 420 = 180 m²’dir. Üçgen alanlarının iki katı toplamı 360 olur. İkinci tabandaki fazladan 4 m’nin bu toplama katkısı 4 × 15 = 60’tır. Kalan 300, iki tabanın ortak x uzunluğu ile yükseklikler toplamı 10 + 15 = 25’in çarpımıdır. x = 300 ÷ 25 = 12 m bulunur. Tabanların toplamı 12 + 16 = 28 m’dir.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-05.svg",
        "imageAlt": "30 m eninde ve 20 m boyunda dikdörtgen park. Sol alttaki yeşil üçgenin tabanı x m, dik yüksekliği 10 m. Sağ üstteki ayrık yeşil üçgenin tabanı (x + 4) m, dik yüksekliği 15 m. Geriye kalan taş kaplı alan 420 m².",
        "imageWidth": 360,
        "imageHeight": 480
      },
      {
        "id": "m6-2-t1-06",
        "subject": "matematik",
        "term": 2,
        "prompt": "Şekildeki levhanın ortasındaki kare boşluk çıkarılmıştır. Levhanın hem dış sınırına hem boşluğun sınırına koruyucu şerit takılıyor. Şeridin metre fiyatı 25 TL’dir. Levhanın yalnız bir yüzündeki dolu alanın her 1 dm²’si 1 TL’ye boyanıyor.\n\nŞerit ve boya için toplam kaç TL ödenir?",
        "options": [
          "348",
          "220",
          "268",
          "412"
        ],
        "correct": 0,
        "explanation": "Dış sınır 2 × (160 + 120) = 560 cm, boşluğun sınırı 4 × 80 = 320 cm’dir. Toplam şerit 880 cm = 8,8 m; ücreti 8,8 × 25 = 220 TL olur. Dolu alan 160 × 120 − 80 × 80 = 12 800 cm² = 128 dm²’dir. Boya 128 TL, toplam 220 + 128 = 348 TL’dir.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-06.svg",
        "imageAlt": "Dış kenarları 160 cm ve 120 cm olan dikdörtgen levhanın içinde bir kenarı 0,8 m olan kare boşluk var. Boşluk dış kenarlara değmiyor; renkli kısım levhanın dolu alanı.",
        "imageWidth": 360,
        "imageHeight": 430
      },
      {
        "id": "m6-2-t1-07",
        "subject": "matematik",
        "term": 2,
        "prompt": "Aynı A köşesini paylaşan ABD, ADE ve AEC üçgenlerinin tabanları aynı doğru üzerindedir. ABD’nin alanı 20 cm², ADE’nin alanı 30 cm²’dir. Taban uzunlukları şekilde santimetre cinsinden verilmiştir.\n\nAEC üçgeninin alanı kaç santimetrekaredir?",
        "options": [
          "24",
          "26",
          "28",
          "32"
        ],
        "correct": 1,
        "explanation": "Üç üçgenin yüksekliği aynıdır. İlk tabanın iki katı ile ikinci tabanın farkı 2(n + 2) − (2n − 1) = 5 cm’dir. Buna karşılık alan farkı 2 × 20 − 30 = 10 cm² olur. Demek ki tabandaki her 1 cm, alanda 2 cm²’ye karşılık gelir. İlk taban 20 ÷ 2 = 10 cm; n = 8’dir. Son taban n + 5 = 13 cm, son üçgenin alanı 13 × 2 = 26 cm²’dir.",
        "imageUrl": "/grade6/matematik/term-2/test-1/soru-07.svg",
        "imageAlt": "ABC üçgeninin BC tabanı, sırasıyla B, D, E, C noktalarıyla üç parçaya ayrılmıştır. BD n + 2 cm, DE 2n − 1 cm, EC n + 5 cm. ABD alanı 20 cm², ADE alanı 30 cm²; AEC alanı soruluyor.",
        "imageWidth": 360,
        "imageHeight": 440
      },
      {
        "id": "m6-2-t1-08",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir annenin yaşı, 5 yıl önce kızının yaşının 4 katıydı. 7 yıl sonra annenin yaşı, kızının yaşının 2 katı olacak.\n\nBuna göre anne ile kızının bugünkü yaşları toplamı kaçtır?",
        "options": [
          "34",
          "36",
          "38",
          "40"
        ],
        "correct": 3,
        "explanation": "Beş yıl öncesinden yedi yıl sonrasına 12 yıl geçer. Beş yıl önce kızın yaşı bir parça kabul edilirse anneninki 4 parçadır. On iki yıl sonra kızın yaşının iki katı, 2 parça + 24; annenin yaşı ise 4 parça + 12 olur. Eşit olmaları için 2 parça 12 yıl, bir parça 6 yıl olmalıdır. Beş yıl önceki yaşlar 6 ve 24; bugünkü yaşlar 11 ve 29’dur. Toplamları 40’tır. Kontrol: 7 yıl sonra yaşlar 18 ve 36 olur."
      },
      {
        "id": "m6-2-t1-09",
        "subject": "matematik",
        "term": 2,
        "prompt": "Ece ve Arda aynı pozitif tam sayıyla başlıyor. Ece önce 4 çıkarıp sonucu 3 ile çarpıyor. Arda önce 2 ile çarpıp sonuca 9 ekliyor. Ece’nin sonucu, Arda’nın sonucundan 5 fazladır.\n\nEce başlangıç sayısını değiştirmeden bu kez önce 3 ile çarpıp sonra 4 çıkarsaydı, yeni sonucu ile Arda’nın değişmeyen sonucunun toplamı kaç olurdu?",
        "options": [
          "119",
          "127",
          "135",
          "143"
        ],
        "correct": 2,
        "explanation": "Ece’nin ilk sonucu başlangıç sayısının 3 katından 12 eksik; Arda’nın sonucu aynı sayının 2 katından 9 fazladır. Bu nedenle Ece ile Arda’nın sonuçları arasındaki fark, başlangıç sayısından 21 eksiktir. Fark 5 olduğuna göre başlangıç sayısı 5 + 21 = 26’dır. Ece işlem sırasını değiştirince 26 × 3 − 4 = 74 bulur. Arda’nın sonucu 26 × 2 + 9 = 61’dir. İstenen toplam 74 + 61 = 135’tir."
      },
      {
        "id": "m6-2-t1-10",
        "subject": "matematik",
        "term": 2,
        "prompt": "Dikdörtgen bir panonun uzun kenarı 1,2 m’dir. Bu kenar 30 cm uzatılıp diğer kenar 20 cm kısaltıldığında panonun alanı değişmiyor.\n\nPanonun değişiklik yapılmadan önceki çevresi kaç metredir?",
        "options": [
          "4,4",
          "4,0",
          "3,4",
          "5,0"
        ],
        "correct": 0,
        "explanation": "İlk uzun kenar 120 cm’dir. Diğer kenar 20 cm kısaltıldığında alan 120 × 20 = 2400 cm² azalır. Alanı eski değerine getiren ek şeridin genişliği 30 cm olduğundan yeni kısa kenar 2400 ÷ 30 = 80 cm’dir. Eski kısa kenar 80 + 20 = 100 cm olur. Eski çevre 2 × (120 + 100) = 440 cm = 4,4 m’dir."
      }
    ],
    test2: [
      {
        "id": "m6-2-t2-01",
        "subject": "matematik",
        "term": 2,
        "prompt": "Özdeş şeritler, komşu iki şeridin uçları aynı uzunlukta üst üste gelecek biçimde birleştiriliyor. Üç şeritle ve beş şeritle yapılan iki düzenin toplam uzunlukları görseldedir. Komşu olmayan şeritler örtüşmüyor; şeritler kesilmiyor.\n\nBu şeritlerden beşi, hiç üst üste gelmeden uç uca dizilse toplam uzunluk kaç santimetre olur?",
        "options": [
          "114",
          "117",
          "120",
          "126"
        ],
        "correct": 2,
        "explanation": "Üç şeritli düzene iki şerit daha eklenince uzunluk 108 − 66 = 42 cm artar. Demek ki eklenen her şerit, örtüşme dışında 21 cm uzunluk kazandırır. Üçlü düzende ilk şerit tam uzunluğuyla, sonraki ikisi 21’er cm ile katkı yapar. Bir şerit 66 − 2 × 21 = 24 cm’dir. Örtüşme 24 − 21 = 3 cm olur; kontrol: 5 × 24 − 4 × 3 = 108 cm. Beş şerit örtüşmeden dizilirse 5 × 24 = 120 cm olur.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-01.svg",
        "imageAlt": "Üstte üç özdeş şeridin oluşturduğu toplam uzunluk 66 cm, altta beş özdeş şeridin oluşturduğu toplam uzunluk 108 cm. Her birleşmede eşit uzunlukta örtüşme koyu renkle gösteriliyor. İlk düzende iki, ikinci düzende dört birleşme var.",
        "imageWidth": 360,
        "imageHeight": 520
      },
      {
        "id": "m6-2-t2-02",
        "subject": "matematik",
        "term": 2,
        "prompt": "Eş karelerle oluşturulan örüntünün ilk üç adımı gösterilmiştir. Her yeni adımda alta bir satır ve sağa bir sütun ekleniyor; sağ alt köşedeki ortak yeni kare yalnız bir kez sayılıyor. Küçük karelerin bir kenarı 2 cm’dir.\n\nBir adımdan sonraki adıma geçerken tam 25 yeni kare eklendiğine göre, oluşan büyük dikdörtgenin çevresi kaç santimetredir?",
        "options": [
          "104",
          "100",
          "108",
          "112"
        ],
        "correct": 0,
        "explanation": "n. adımda n satır ve n + 2 sütun vardır. Sonraki adıma geçerken eski dikdörtgenin altına n + 2 kare, sağına ise yeni alt sırayı da içeren n + 1 kare eklenir. Eklenen kare sayısı 2n + 3 = 25 olduğundan n = 11’dir. Büyük şekil 12 satır ve 14 sütundan oluşur. Kenarları 24 cm ve 28 cm; çevresi 2 × (24 + 28) = 104 cm’dir. Kontrol: 12 × 14 − 11 × 13 = 25 yeni kare.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-02.svg",
        "imageAlt": "Birinci adım 1 satır ve 3 sütun, ikinci adım 2 satır ve 4 sütun, üçüncü adım 3 satır ve 5 sütun eş kareden oluşuyor. İkinci ve üçüncü adımlarda yeni alt satır ve yeni sağ sütun turuncu. Bir küçük karenin kenarı 2 cm.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "m6-2-t2-03",
        "subject": "matematik",
        "term": 2,
        "prompt": "ABCD paralelkenarında kesikli çizgiler, AB ve AD kenarlarına ait dik yükseklikleri gösteriyor. AD kenarı taban kabul edilerek, paralelkenarla aynı tabana ve aynı yüksekliğe sahip bir dikdörtgen çiziliyor.\n\nBu dikdörtgenin çevresi kaç santimetredir?",
        "options": [
          "54",
          "64",
          "80",
          "70"
        ],
        "correct": 3,
        "explanation": "AB tabanı 25 cm ve bu tabana ait yükseklik 12 cm olduğundan paralelkenarın alanı 25 × 12 = 300 cm²’dir. Aynı alan, AD tabanı 15 cm kullanıldığında 15 × h olur; h = 300 ÷ 15 = 20 cm’dir. Çizilen dikdörtgenin kenarları 15 cm ve 20 cm olur. Çevresi 2 × (15 + 20) = 70 cm’dir. 12 cm, AD’ye değil AB’ye ait yüksekliktir.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-03.svg",
        "imageAlt": "ABCD paralelkenarında AB 25 cm, AD 15 cm. D’den AB’ye indirilen dikme 12 cm. BD, AD’ye diktir ve uzunluğu h ile gösterilmiştir. Dik açı işaretleri iki tabana ait yükseklikleri ayırıyor.",
        "imageWidth": 360,
        "imageHeight": 470
      },
      {
        "id": "m6-2-t2-04",
        "subject": "matematik",
        "term": 2,
        "prompt": "Dikdörtgen pano, 3 satır ve 4 sütun eş kareye ayrılmıştır. Görseldeki üç kısmi boyalı karede köşegen, kareyi iki eş üçgene ayırıyor. Boyalı bölgenin toplam alanı 0,675 m²’dir.\n\nPanonun dış çevresi kaç desimetredir?",
        "options": [
          "40",
          "42",
          "44",
          "48"
        ],
        "correct": 1,
        "explanation": "Görselde 6 tam kare ile 3 yarım kare boyalıdır; boyalı alan 7,5 kareye eşittir. 0,675 m² = 6750 cm² olduğundan bir karenin alanı 6750 ÷ 7,5 = 900 cm²’dir. 30 × 30 = 900 olduğu için küçük karenin kenarı 30 cm’dir. Panonun kenarları 90 cm ve 120 cm olur. Dış çevresi 2 × (90 + 120) = 420 cm = 42 dm’dir.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-04.svg",
        "imageAlt": "Üç satır, dört sütun eş kareden oluşan pano. Üst sırada ilk üç kare tamamen, son kare yarım boyalı. Orta sırada ilk iki kare tamamen, üçüncü kare yarım boyalı, son kare boş. Alt sırada ilk kare tamamen, ikinci kare yarım boyalı, son iki kare boş. Yarım boyalı kareler bir köşegenle ayrılıyor.",
        "imageWidth": 360,
        "imageHeight": 430
      },
      {
        "id": "m6-2-t2-05",
        "subject": "matematik",
        "term": 2,
        "prompt": "ABC dik üçgeninin içindeki P noktasından üç kenara dikmeler çizilmiştir. Kenar uzunlukları ve P’nin iki kenara dik uzaklığı görseldedir.\n\nP’nin AC kenarına dik uzaklığı olan x kaç santimetredir?",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correct": 2,
        "explanation": "ABC’nin alanı 18 × 24 ÷ 2 = 216 cm²’dir. P, köşelerle birleştirilirse büyük üçgen üç küçük üçgene ayrılır. PAB’nin alanı 18 × 4 ÷ 2 = 36 cm²; PBC’nin alanı 24 × 5 ÷ 2 = 60 cm² olur. PAC’nin alanı 216 − 36 − 60 = 120 cm²’dir. AC tabanı 30 cm olduğundan 30 × x ÷ 2 = 120, yani x = 8 cm bulunur.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-05.svg",
        "imageAlt": "B köşesi dik olan ABC üçgeninde AB 18 cm, BC 24 cm, AC 30 cm. İçteki P noktasının AB’ye dik uzaklığı 4 cm, BC’ye dik uzaklığı 5 cm, AC’ye dik uzaklığı x. Her uzaklık kesikli dikme ve dik açı işaretiyle gösteriliyor.",
        "imageWidth": 360,
        "imageHeight": 480
      },
      {
        "id": "m6-2-t2-06",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir dikdörtgen, kenarlarına paralel iki doğruyla dört küçük dikdörtgene ayrılmıştır. Üç parçanın alanı görseldedir.\n\nDört parçanın oluşturduğu büyük dikdörtgenin alanı kaç metrekaredir?",
        "options": [
          "0,16",
          "0,152",
          "0,136",
          "0,104"
        ],
        "correct": 0,
        "explanation": "Önce alanları aynı birime çevirelim: 2,4 dm² = 240 cm² ve 4 dm² = 400 cm². Sol alttaki alan, sol üsttekinin 360 ÷ 240 = 1,5 katıdır. Bu iki parçanın genişlikleri aynı olduğundan alt sıranın yüksekliği, üst sıranın 1,5 katıdır. Sağdaki parçaların da genişlikleri aynı olduğu için sağ alt alan 400 × 1,5 = 600 cm² olur. Toplam alan 240 + 400 + 360 + 600 = 1600 cm² = 0,16 m²’dir. Alan farkını iki sütuna aynı miktarda eklemek doğru değildir.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-06.svg",
        "imageAlt": "Bir yatay ve bir düşey doğruyla dört dikdörtgene ayrılmış büyük dikdörtgen. Sol üst alan 2,4 dm², sağ üst alan 4 dm², sol alt alan 360 cm², sağ alt alan soru işareti. Ayırıcı doğrular karşılıklı kenarlara kadar kesintisiz uzanıyor.",
        "imageWidth": 360,
        "imageHeight": 470
      },
      {
        "id": "m6-2-t2-07",
        "subject": "matematik",
        "term": 2,
        "prompt": "Üçgen kartonun tabanı ve bu tabana ait dik yüksekliği, sıfır çizgileri görünmeyen iki cetvelle ölçülüyor. Uçlara denk gelen cetvel okumaları görselde verilmiştir.\n\nAlanı 0,6 m² olan bir kartondan, şekildeki üçgene eş iki parça kesilip çıkarılmıştır. Kesim kaybı olmadığına göre kalan kartonun alanı kaç metrekaredir?",
        "options": [
          "0,08",
          "0,12",
          "0,24",
          "0,36"
        ],
        "correct": 1,
        "explanation": "Cetvel okumaları uzunluğun kendisi değildir; uçlardaki okumaların farkı alınır. Taban 78 − 18 = 60 cm’dir. Dik yükseklik 10 − 2 = 8 dm = 80 cm’dir. Bir üçgenin alanı 60 × 80 ÷ 2 = 2400 cm² = 0,24 m² olur. İki üçgen toplam 0,48 m² kaplar. Kalan alan 0,6 − 0,48 = 0,12 m²’dir.",
        "imageUrl": "/grade6/matematik/term-2/test-2/soru-07.svg",
        "imageAlt": "Üçgenin yatay tabanının sol ucu, santimetre cetvelinin 18 çizgisine; sağ ucu 78 çizgisine denk geliyor. Tepe ve taban doğrusu, düşey desimetre cetvelinde sırasıyla 10 ve 2 çizgilerine denk geliyor. Tepeden tabana dik yükseklik kesikli çizilmiş.",
        "imageWidth": 360,
        "imageHeight": 550
      },
      {
        "id": "m6-2-t2-08",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir öğrenci grubu sabit bir servis ücretini eşit paylaşmayı planlıyor; başlangıçta kişi başına 36 TL düşüyor. Beş öğrenci vazgeçince aynı ücret kalan öğrenciler arasında paylaşılıyor ve kişi başına 48 TL düşüyor. Daha sonra bir öğretmen toplam ücretin 120 TL’sini karşılıyor.\n\nKalan öğrencilerin her biri son durumda kaç TL öder?",
        "options": [
          "36",
          "38",
          "42",
          "40"
        ],
        "correct": 3,
        "explanation": "Vazgeçen 5 kişinin başlangıçta ödeyeceği toplam 5 × 36 = 180 TL, kalan öğrencilerce karşılanmıştır. Kişi başına artış 48 − 36 = 12 TL olduğundan kalan öğrenci sayısı 180 ÷ 12 = 15’tir. Servis ücreti 15 × 48 = 720 TL’dir. Öğretmenin katkısından sonra 720 − 120 = 600 TL kalır. Her öğrenci 600 ÷ 15 = 40 TL öder. Başlangıçta 20 öğrenci olduğu ve 20 × 36 = 720 eşitliği de sonucu doğrular."
      },
      {
        "id": "m6-2-t2-09",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir algoritma 4 sayısıyla başlıyor. “3 ekle” işlemi tam iki kez, “2 ile çarp” işlemi de tam iki kez uygulanıyor. Bu dört işlemin sırası bilinmiyor; her sonuç bir sonraki işlemin girdisi oluyor. Son sonuç 31’dir.\n\nİkinci işlem tamamlandığında elde edilen sayı kaçtır?",
        "options": [
          "14",
          "16",
          "19",
          "22"
        ],
        "correct": 0,
        "explanation": "Son sonuç 31 tek olduğu için son işlem 2 ile çarpma olamaz; son işlem 3 eklemedir. Ondan hemen önce 28 vardır. İlk üç işlemde bir kez 3 ekleme ve iki kez 2 ile çarpma yapılmıştır. Ekleme ilk sıradaysa (4 + 3) × 2 × 2 = 28; ortadaysa (4 × 2 + 3) × 2 = 22; sondaysa 4 × 2 × 2 + 3 = 19 olur. Yalnız ilk sıra uygundur. Bütün akış 4 → 7 → 14 → 28 → 31’dir; ikinci işlem sonunda 14 elde edilir."
      },
      {
        "id": "m6-2-t2-10",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir sayı örüntüsünde her yeni terim, önceki terime aynı pozitif sayı eklenerek bulunuyor. Üçüncü ve dokuzuncu terimlerin toplamı 94’tür. On birinci terim, altıncı terimden 35 fazladır.\n\nBu örüntünün dördüncü terimi kaçtır?",
        "options": [
          "26",
          "40",
          "33",
          "47"
        ],
        "correct": 2,
        "explanation": "Altıncı terimden on birinci terime 5 eşit artış vardır. Bir artış 35 ÷ 5 = 7’dir. Üçüncü ve dokuzuncu terimler, altıncı terimin iki yanında üçer artış uzaklıktadır; toplamları altıncı terimin iki katıdır. Bu nedenle altıncı terim 94 ÷ 2 = 47 olur. Dördüncü terim iki artış geridedir: 47 − 2 × 7 = 33. Kontrol: üçüncü terim 26, dokuzuncu terim 68 ve toplamları 94’tür."
      }
    ]
  },
};
