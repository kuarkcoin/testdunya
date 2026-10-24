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
  },
  term2: {},
};
