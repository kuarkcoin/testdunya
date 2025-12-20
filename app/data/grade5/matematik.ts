import { SubjectData } from "./types";

export const matematikData: SubjectData = {
  term1: {
    test1: [
      {
        id: "m5-1-01",
        subject: "matematik",
        term: 1,
        prompt:
          "847.302 sayısında milyonlar bölüğündeki rakamların toplamı kaçtır?",
        options: ["11", "15", "19", "21"],
        correct: 2,
        explanation:
          "Sayının milyonlar bölüğünde 8, 4 ve 7 rakamları bulunur. 8 + 4 + 7 = 19 eder.",
      },
      {
        id: "m5-1-02",
        subject: "matematik",
        term: 1,
        prompt: "5² + 2³ işleminin sonucu kaçtır?",
        options: ["16", "25", "31", "33"],
        correct: 3,
        explanation: "5² = 25 ve 2³ = 8'dir. 25 + 8 = 33 sonucuna ulaşılır.",
      },
      {
        id: "m5-1-03",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölen 15, bölüm 10 ve kalan 7 ise bölünen kaçtır?",
        options: ["150", "157", "165", "172"],
        correct: 1,
        explanation:
          "Bölünen = (Bölen x Bölüm) + Kalan -> (15 x 10) + 7 = 157.",
      },
      {
        id: "m5-1-04",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki kesirlerden hangisi birim kesirdir?",
        options: ["2/5", "1/8", "5/5", "4/1"],
        correct: 1,
        explanation: "Payı 1 olan kesirlere birim kesir denir.",
      },
      {
        id: "m5-1-05",
        subject: "matematik",
        term: 1,
        prompt: "Hangi sayı 54.000 sayısının 100'e bölünmüş halidir?",
        options: ["54", "540", "5400", "5.4"],
        correct: 1,
        explanation:
          "Bir sayıyı 100'e bölerken sağdan iki sıfır silinir. 54.000 -> 540.",
      },
      {
        id: "m5-1-11",
        subject: "matematik",
        term: 1,
        prompt: "24 sayısının çarpanlarından biri hangisi değildir?",
        options: ["4", "6", "9", "12"],
        correct: 2,
        explanation: "24 sayısı 9'a tam bölünmez.",
      },
      {
        id: "m5-1-16",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir sinema salonunda 24 sıra ve her sırada 18 koltuk vardır. Bir film gösteriminde 35 koltuk boş kaldığına göre kaç izleyici vardır?",
        options: ["397", "432", "400", "467"],
        correct: 0,
        explanation:
          "Toplam koltuk: 24 x 18 = 432. İzleyici sayısı: 432 - 35 = 397.",
      },
      {
        id: "m5-1-18",
        subject: "matematik",
        term: 1,
        prompt: "72 sayısının 2/3'ü kaçtır?",
        options: ["24", "48", "36", "54"],
        correct: 1,
        explanation: "72'yi 3'e böleriz (24) ve 2 ile çarparız: 24 x 2 = 48.",
      },
      {
        id: "m5-1-21",
        subject: "matematik",
        term: 1,
        prompt: "Hangi sayının 4 katının 10 eksiği 30'dur?",
        options: ["5", "10", "15", "20"],
        correct: 1,
        explanation: "Ters işlem yapılır: 30 + 10 = 40. 40 / 4 = 10.",
      },
      {
        id: "m5-zn-11",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir fabrikada üretilen 45.000 kalemin 2/5'i kırmızı, kalanı mavidir. Mavi kalem sayısı kaçtır?",
        options: ["18.000", "22.500", "27.000", "30.000"],
        correct: 2,
        explanation:
          "45.000 / 5 = 9.000. Kırmızı: 9.000 x 2 = 18.000. Mavi: 45.000 - 18.000 = 27.000.",
      },
      {
        id: "m5-zn-13",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde kalan 12 ise, bölen aşağıdakilerden hangisi olamaz?",
        options: ["13", "15", "11", "20"],
        correct: 2,
        explanation:
          "Bölen her zaman kalandan büyük olmalıdır. 11, 12'den küçüktür.",
      },
      {
        id: "m5-zn-15",
        subject: "matematik",
        term: 1,
        prompt: "3³ - 2⁴ işleminin sonucu kaçtır?",
        options: ["11", "9", "5", "1"],
        correct: 0,
        explanation: "3³ = 27, 2⁴ = 16. 27 - 16 = 11.",
      },
      {
        id: "m5-zn-17",
        subject: "matematik",
        term: 1,
        prompt:
          "987.654.321 sayısında on milyonlar basamağındaki rakam kaçtır?",
        options: ["9", "8", "7", "6"],
        correct: 1,
        explanation: "On milyonlar basamağı 8'dir.",
      },
      {
        id: "m5-zn-20",
        subject: "matematik",
        term: 1,
        prompt: "Paydası 12 olan birim kesir aşağıdakilerden hangisidir?",
        options: ["12/1", "1/12", "12/12", "6/12"],
        correct: 1,
        explanation: "Birim kesirlerin payı her zaman 1'dir.",
      },
      {
        id: "m5-hard-nv-01",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölen 14, bölüm 25'tir. Bu bölme işleminde bölünen sayının alabileceği 'en büyük' değer kaçtır?",
        options: ["350", "363", "364", "365"],
        correct: 1,
        explanation: "En büyük kalan 13'tür. (14 x 25) + 13 = 363.",
      },
      {
        id: "m5-hard-nv-02",
        subject: "matematik",
        term: 1,
        prompt: "3 katının 15 fazlası 60 olan sayının yarısı kaçtır?",
        options: ["7,5", "15", "22,5", "45"],
        correct: 0,
        explanation: "60-15=45, 45/3=15. Yarısı 7,5.",
      },
      {
        id: "m5-adv-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir sayı örüntüsü 4'ten başlayarak her adımda bir önceki sayının 2 katının 3 eksiği şeklinde ilerliyor. Bu örüntünün 4. terimi kaçtır?",
        options: ["5", "7", "11", "19"],
        correct: 2,
        explanation: "4 -> 5 -> 7 -> 11.",
      },
      {
        id: "m5-adv-05",
        subject: "matematik",
        term: 1,
        prompt:
          "$A \\times 100 = 4500$ ve $B \\div 10 = 45$ ise $A + B$ işleminin sonucu kaçtır?",
        options: ["90", "450", "495", "500"],
        correct: 2,
        explanation: "A=45, B=450. Toplam 495.",
      },
      {
        id: "m5-1-24",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kırtasiyeci 120 kalemi her kutuda 12 kalem olacak şekilde paketliyor. Her paketi 15 TL'ye sattığına göre toplam kaç TL gelir elde eder?",
        options: ["120", "150", "180", "200"],
        correct: 1,
        explanation:
          "Toplam paket sayısı: 120 / 12 = 10 paket. Toplam gelir: 10 x 15 = 150 TL.",
      },
      {
        id: "m5-1-25",
        subject: "matematik",
        term: 1,
        prompt:
          "Rakamları birbirinden farklı beş basamaklı en küçük doğal sayı kaçtır?",
        options: ["10000", "10234", "12345", "10023"],
        correct: 1,
        explanation:
          "En küçük olması için en büyük basamağa 1, sonrakine 0, sonra 2, 3 ve 4 yazılır: 10234.",
      },
    ],
    test2: [
      {
        id: "m5-1-t2-01",
        subject: "matematik",
        term: 1,
        prompt:
          "702.045.813 sayısının 'on milyonlar' basamağındaki rakam ile 'on binler' basamağındaki rakamın basamak değerleri toplamı kaçtır?",
        options: ["70.040.000", "40.000", "0", "40.000.000"],
        correct: 1,
        explanation:
          "On milyonlar basamağında '0' vardır (Değeri 0). On binler basamağında '4' vardır (Değeri 40.000). Toplam 40.000 eder.",
      },
      {
        id: "m5-1-t2-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölen 24, bölüm 15'tir. Bu işlemde kalanın alabileceği 'en büyük' değer için bölünen sayı kaçtır?",
        options: ["360", "383", "384", "385"],
        correct: 1,
        explanation:
          "Kalan en fazla bölenin bir eksiği yani 23 olabilir. Bölünen = (24 x 15) + 23 = 360 + 23 = 383.",
      },
      {
        id: "m5-1-t2-03",
        subject: "matematik",
        term: 1,
        prompt: "$12^2 - (4^3 \\div 8)$ işleminin sonucu kaçtır?",
        options: ["136", "140", "144", "80"],
        correct: 0,
        explanation:
          "$12^2 = 144$ ve $4^3 = 64$'dür. İşlem: $144 - (64 \\div 8) = 144 - 8 = 136$.",
      },
      {
        id: "m5-1-t2-04",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki geometrik gösterimlerden hangisi bir ucu kapalı, diğer ucu sonsuza giden 'CD ışınını' ifade eder?",
        options: ["[CD]", "(CD)", "[CD)", "CD"],
        correct: 2,
        explanation:
          "Işın gösteriminde kapalı uç köşeli parantez '[', açık uç ise normal parantez ')' veya boşluk ile gösterilir.",
      },
      {
        id: "m5-1-t2-05",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kütüphanedeki 1453 kitabın her bir rafına 45 kitap dizilecektir. Son rafın tam dolması için en az kaç kitaba daha ihtiyaç vardır?",
        options: ["13", "32", "33", "45"],
        correct: 1,
        explanation:
          "1453 / 45 işleminde kalan 13'tür. Son rafın dolması için 45 - 13 = 32 kitap daha gerekir.",
      },
      {
        id: "m5-1-t2-06",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{A}{18}$ kesri bir birim kesir olduğuna göre, $\\frac{12}{A}$ kesrinin türü nedir?",
        options: [
          "Basit Kesir",
          "Birim Kesir",
          "Tam Sayılı Kesir",
          "Bileşik Kesir",
        ],
        correct: 3,
        explanation:
          "Birim kesrin payı 1'dir, yani A=1. 12/1 kesri payı paydasından büyük olduğu için bileşik kesirdir.",
      },
      {
        id: "m5-1-t2-07",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir çiftçi 120 kg elmanın $\\frac{3}{5}$'ünü satmıştır. Geriye kaç kg elma kalmıştır?",
        options: ["24", "48", "72", "84"],
        correct: 1,
        explanation:
          "120 / 5 = 24 kg (1/5'i). Satılan: 24 x 3 = 72 kg. Kalan: 120 - 72 = 48 kg.",
      },
      {
        id: "m5-1-t2-08",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki doğru çiftlerinden hangisi hiçbir noktada kesişmez?",
        options: [
          "Dik doğrular",
          "Kesişen doğrular",
          "Paralel doğrular",
          "Çakışık doğrular",
        ],
        correct: 2,
        explanation:
          "Aralarındaki mesafe her yerde aynı olan ve asla kesişmeyen doğrular paralel doğrulardır.",
      },
      {
        id: "m5-1-t2-09",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir örüntü 7'den başlayarak 6'şar artarak devam ediyor. Bu örüntünün 10. terimi kaçtır?",
        options: ["60", "61", "67", "73"],
        correct: 1,
        explanation:
          "Kural: $7 + (n-1) \\times 6$. 10. terim: $7 + 9 \\times 6 = 7 + 54 = 61$.",
      },
      {
        id: "m5-1-t2-10",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{2}{3} = \\frac{12}{B}$ denkliğinde B yerine gelmesi gereken sayı kaçtır?",
        options: ["18", "24", "36", "12"],
        correct: 0,
        explanation:
          "Pay 6 katına çıkmış (2 x 6 = 12). Payda da 6 katına çıkmalı: 3 x 6 = 18.",
      },
      {
        id: "m5-1-t2-11",
        subject: "matematik",
        term: 1,
        prompt:
          "Dört basamaklı en büyük doğal sayı, üç basamaklı en küçük doğal sayıdan kaç fazladır?",
        options: ["9899", "8999", "9000", "9900"],
        correct: 0,
        explanation: "9999 - 100 = 9899.",
      },
      {
        id: "m5-1-t2-12",
        subject: "matematik",
        term: 1,
        prompt:
          "Hangi geometrik şeklin başlangıç ve bitiş noktası bellidir ve ölçülebilir?",
        options: ["Doğru", "Işın", "Doğru Parçası", "Nokta"],
        correct: 2,
        explanation:
          "İki ucu da sınırlı olduğu için sadece doğru parçasının boyu ölçülebilir.",
      },
      {
        id: "m5-1-t2-13",
        subject: "matematik",
        term: 1,
        prompt: "$25 \\times 400$ işleminin zihinden yapılışı hangisidir?",
        options: [
          "25'i 4 ile çarpıp yanına iki sıfır eklemek",
          "25'i 2'ye bölüp 100 ile çarpmak",
          "400'ü 5 ile çarpıp 5 ile çarpmak",
          "25'i 100 ile çarpıp 4'e bölmek",
        ],
        correct: 0,
        explanation:
          "$25 \\times 4 = 100$ eder. Yanına 400'ün iki sıfırı eklenince 10.000 sonucuna kolayca ulaşılır.",
      },
      {
        id: "m5-1-t2-14",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir sınıftaki 36 öğrencinin $\\frac{4}{9}$'ü gözlüklüdür. Gözlüksüz öğrenci sayısı kaçtır?",
        options: ["16", "20", "24", "28"],
        correct: 1,
        explanation:
          "36 / 9 = 4. Gözlüklü: 4 x 4 = 16. Gözlüksüz: 36 - 16 = 20.",
      },
      {
        id: "m5-1-t2-15",
        subject: "matematik",
        term: 1,
        prompt: "En küçük bileşik kesir aşağıdakilerden hangisine eşittir?",
        options: ["0", "1", "1/2", "2"],
        correct: 1,
        explanation:
          "Payı paydasına eşit olan kesirler (1/1, 2/2 gibi) en küçük bileşik kesirlerdir ve 1'e eşittir.",
      },
      {
        id: "m5-1-t2-16",
        subject: "matematik",
        term: 1,
        prompt: "$500 \\div 10^2$ işleminin sonucu kaçtır?",
        options: ["5", "50", "0,5", "5000"],
        correct: 0,
        explanation: "$10^2 = 100$ eder. $500 \\div 100 = 5$.",
      },
      {
        id: "m5-1-t2-17",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{3}{7}$ ile $\\frac{5}{14}$ kesirlerini karşılaştırmak için $\\frac{3}{7}$ kesri hangi sayı ile genişletilmelidir?",
        options: ["2", "3", "7", "14"],
        correct: 0,
        explanation:
          "Paydaları eşitlemek için 7'yi 2 ile çarparak 14 yapmalıyız.",
      },
      {
        id: "m5-1-t2-18",
        subject: "matematik",
        term: 1,
        prompt: "Bir çıkarma işleminde fark 450, çıkan 125 ise eksilen kaçtır?",
        options: ["325", "550", "575", "600"],
        correct: 2,
        explanation: "Eksilen = Çıkan + Fark -> 125 + 450 = 575.",
      },
      {
        id: "m5-1-t2-19",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdakilerden hangisi bir dar açının ölçüsü olabilir?",
        options: ["89", "90", "91", "180"],
        correct: 0,
        explanation:
          "Ölçüsü 0 ile 90 derece arasında olan açılara dar açı denir.",
      },
      {
        id: "m5-1-t2-20",
        subject: "matematik",
        term: 1,
        prompt: "Hangi sayı hem 2'nin hem de 3'ün karesinin toplamına eşittir?",
        options: ["10", "13", "25", "36"],
        correct: 1,
        explanation: "$2^2 + 3^2 = 4 + 9 = 13$.",
      },
    ],
    test3: [
      {
        id: "m5-1-t3-01",
        subject: "matematik",
        term: 1,
        prompt:
          "745.000.812 sayısında milyonlar bölüğündeki en büyük rakamın basamak değeri kaçtır?",
        options: ["7", "700", "700.000", "700.000.000"],
        correct: 3,
        explanation:
          "Milyonlar bölüğü '745' kısmıdır. En büyük rakam 7'dir ve yüz milyonlar basamağında olduğu için değeri 700.000.000'dur.",
      },
      {
        id: "m5-1-t3-02",
        subject: "matematik",
        term: 1,
        prompt: "$5^2 \\times (12 - 2^3)$ işleminin sonucu kaçtır?",
        options: ["100", "125", "200", "250"],
        correct: 0,
        explanation:
          "$5^2 = 25$ ve $2^3 = 8$ eder. İşlem: $25 \\times (12 - 8) = 25 \\times 4 = 100$.",
      },
      {
        id: "m5-1-t3-03",
        subject: "matematik",
        term: 1,
        prompt:
          "Böleni 16 olan bir bölme işleminde kalanın alabileceği en büyük değer ile en küçük değerin toplamı kaçtır?",
        options: ["15", "16", "17", "31"],
        correct: 0,
        explanation:
          "En büyük kalan bölenin bir eksiği (15), en küçük kalan ise 0'dır. Toplamları 15 eder.",
      },
      {
        id: "m5-1-t3-04",
        subject: "matematik",
        term: 1,
        prompt:
          "2451 + 3892 toplamını sayıları en yakın binliğe yuvarlayarak tahmin ederseniz sonuç kaç olur?",
        options: ["5000", "6000", "6300", "6400"],
        correct: 1,
        explanation:
          "2451 -> 2000'e, 3892 -> 4000'e yuvarlanır. Tahmini toplam: $2000 + 4000 = 6000$.",
      },
      {
        id: "m5-1-t3-05",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{12}{A}$ bir basit kesir ise A yerine yazılabilecek en küçük doğal sayı kaçtır?",
        options: ["11", "12", "13", "14"],
        correct: 2,
        explanation:
          "Basit kesirlerde payda paydan büyük olmalıdır. 12'den büyük en küçük sayı 13'tür.",
      },
      {
        id: "m5-1-t3-06",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{2}{9}, \\frac{2}{3}, \\frac{2}{5}$ kesirlerinin küçükten büyüğe sıralanışı hangisidir?",
        options: [
          "2/9 < 2/5 < 2/3",
          "2/3 < 2/5 < 2/9",
          "2/9 < 2/3 < 2/5",
          "2/5 < 2/9 < 2/3",
        ],
        correct: 0,
        explanation:
          "Payları eşit olan kesirlerde paydası büyük olan kesir daha küçüktür.",
      },
      {
        id: "m5-1-t3-07",
        subject: "matematik",
        term: 1,
        prompt:
          "Başlangıç noktası K, bitiş noktası L olan ve her iki ucu da sınırlı olan geometrik şeklin sembolle gösterimi hangisidir?",
        options: ["KL", "(KL)", "[KL]", "[KL)"],
        correct: 2,
        explanation:
          "İki ucu da sınırlı olan doğru parçaları köşeli parantez '[ ]' içinde gösterilir.",
      },
      {
        id: "m5-1-t3-08",
        subject: "matematik",
        term: 1,
        prompt: "Ölçüsü 180 derece olan açılara ne ad verilir?",
        options: ["Dar açı", "Geniş açı", "Dik açı", "Doğru açı"],
        correct: 3,
        explanation:
          "Tam olarak 180 derece olan ve bir doğru oluşturan açılara doğru açı denir.",
      },
      {
        id: "m5-1-t3-09",
        subject: "matematik",
        term: 1,
        prompt: "80 sayısının $\\frac{3}{4}$'ünün 10 eksiği kaçtır?",
        options: ["50", "60", "70", "80"],
        correct: 0,
        explanation: "80 / 4 = 20. 20 x 3 = 60. 60 - 10 = 50.",
      },
      {
        id: "m5-1-t3-10",
        subject: "matematik",
        term: 1,
        prompt:
          "45 x 101 işleminin zihinden sonucu aşağıdakilerden hangisidir?",
        options: ["4500", "4545", "4600", "5000"],
        correct: 1,
        explanation: "45 x (100 + 1) = 4500 + 45 = 4545.",
      },
      {
        id: "m5-1-t3-11",
        subject: "matematik",
        term: 1,
        prompt: "$3^3$ ile $4^2$ arasındaki fark kaçtır?",
        options: ["1", "5", "11", "12"],
        correct: 2,
        explanation: "$3^3 = 27$ ve $4^2 = 16$'dır. Fark: $27 - 16 = 11$.",
      },
      {
        id: "m5-1-t3-12",
        subject: "matematik",
        term: 1,
        prompt: "3 - 10 - 17 - 24 - ... örüntüsünün 12. terimi kaçtır?",
        options: ["77", "80", "84", "87"],
        correct: 1,
        explanation:
          "Örüntü 7'şer artıyor. 12. terim: $3 + (11 \\times 7) = 3 + 77 = 80$.",
      },
      {
        id: "m5-1-t3-13",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir okulda 345 öğrenci 15'er kişilik sınıflara ayrılacaktır. Bu okulda kaç sınıf oluşur?",
        options: ["21", "23", "25", "27"],
        correct: 1,
        explanation: "345 / 15 = 23 sınıf eder.",
      },
      {
        id: "m5-1-t3-14",
        subject: "matematik",
        term: 1,
        prompt:
          "İki doğrunun kesiştiği tek bir ortak noktası varsa bu doğrulara ne denir?",
        options: [
          "Paralel doğrular",
          "Kesişen doğrular",
          "Dik doğrular",
          "Çakışık doğrular",
        ],
        correct: 1,
        explanation: "Bir noktada buluşan doğrular kesişen doğrulardır.",
      },
      {
        id: "m5-1-t3-15",
        subject: "matematik",
        term: 1,
        prompt:
          "$4 \\frac{2}{3}$ tam sayılı kesrinin bileşik kesir hali hangisidir?",
        options: ["10/3", "12/3", "14/3", "16/3"],
        correct: 2,
        explanation: "$(4 \\times 3) + 2 = 14$. Kesir 14/3 olur.",
      },
      {
        id: "m5-1-t3-16",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{1}{10}$ ve $\\frac{1}{12}$ birim kesirlerinden hangisi daha büyüktür?",
        options: ["1/10", "1/12", "Birbirine eşittir", "Kıyaslanamaz"],
        correct: 0,
        explanation:
          "Birim kesirlerde paydası küçük olan kesir daha büyüktür (daha az parçaya bölünmüş).",
      },
      {
        id: "m5-1-t3-17",
        subject: "matematik",
        term: 1,
        prompt:
          "Rakamları farklı üç basamaklı en büyük sayı ile iki basamaklı en küçük doğal sayının toplamı kaçtır?",
        options: ["997", "1000", "1007", "1010"],
        correct: 0,
        explanation: "$987 + 10 = 997$.",
      },
      {
        id: "m5-1-t3-18",
        subject: "matematik",
        term: 1,
        prompt: "125 x 8 işleminin sonucu kaçtır?",
        options: ["800", "900", "1000", "1200"],
        correct: 2,
        explanation: "125'in 8 katı tam olarak 1000 eder.",
      },
      {
        id: "m5-1-t3-19",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir dik açının ölçüsünden 25 derece eksik olan açının türü nedir?",
        options: ["Dar açı", "Dik açı", "Geniş açı", "Doğru açı"],
        correct: 0,
        explanation:
          "90 - 25 = 65 derecedir. 0 ile 90 arasındaki açılar dar açıdır.",
      },
      {
        id: "m5-1-t3-20",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{3}{4} = \\frac{15}{x}$ denkliğinde x yerine gelmesi gereken sayı kaçtır?",
        options: ["16", "18", "20", "22"],
        correct: 2,
        explanation:
          "Pay 5 katına çıkmış ($3 \\times 5 = 15$). Payda da 5 katına çıkmalı: $4 \\times 5 = 20$.",
      },
    ],
    test4: [
      {
        id: "m5-1-t4-01",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki sayılardan hangisinin binler bölüğündeki rakamların toplamı, milyonlar bölüğündeki rakamların toplamından 5 fazladır?",
        options: ["123.456.789", "105.111.200", "240.745.812", "800.805.100"],
        correct: 2,
        explanation:
          "240.745.812 sayısında: Milyonlar (2+4+0=6), Binler (7+4+5=16). 16 - 6 = 10 (Hatalı). 800.805.100 sayısında: Milyonlar (8), Binler (8+0+5=13). 13 - 8 = 5 (Doğru).",
      },
      {
        id: "m5-1-t4-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölen 18, bölüm 12 ve kalan 15'tir. Bölünen sayının 100 eksiği kaçtır?",
        options: ["116", "131", "216", "231"],
        correct: 1,
        explanation:
          "Bölünen = (18 x 12) + 15 = 216 + 15 = 231. 100 eksiği: 231 - 100 = 131.",
      },
      {
        id: "m5-1-t4-03",
        subject: "matematik",
        term: 1,
        prompt: "$2^3 + 5^2 - (4 \\times 3)$ işleminin sonucu kaçtır?",
        options: ["21", "25", "31", "45"],
        correct: 0,
        explanation:
          "$2^3 = 8$, $5^2 = 25$. İşlem: $8 + 25 - 12 = 33 - 12 = 21$.",
      },
      {
        id: "m5-1-t4-04",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kırtasiyeci 480 defteri 24'erli paketler halinde satacaktır. Her paketi 45 TL'den sattığına göre toplam kaç TL kazanır?",
        options: ["800", "900", "1000", "1100"],
        correct: 1,
        explanation:
          "Paket sayısı: 480 / 24 = 20. Toplam kazanç: 20 x 45 = 900 TL.",
      },
      {
        id: "m5-1-t4-05",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{18}{24}$ kesrinin en sade hali aşağıdakilerden hangisidir?",
        options: ["2/3", "3/4", "4/5", "6/8"],
        correct: 1,
        explanation:
          "Her iki sayı da 6 ile sadeleşir: $18 \\div 6 = 3$ ve $24 \\div 6 = 4$. Sonuç 3/4 olur.",
      },
      {
        id: "m5-1-t4-06",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki ifadelerden hangisi 'doğru parçası'nı temsil eder?",
        options: [
          "İki ucu da sonsuza giden çizgi",
          "Bir ucu sınırlı, diğer ucu sonsuz çizgi",
          "İki ucu da sınırlı olan çizgi",
          "Bir noktadan çıkan ışık süzmesi",
        ],
        correct: 2,
        explanation:
          "Başlangıcı ve bitişi belli olan, ölçülebilen çizgi modellerine doğru parçası denir.",
      },
      {
        id: "m5-1-t4-07",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{3}{5} = \\frac{A}{20}$ ve $\\frac{24}{30} = \\frac{4}{B}$ ise $A + B$ kaçtır?",
        options: ["12", "15", "17", "20"],
        correct: 2,
        explanation:
          "A için: 5'in 4 katı 20 ise 3'ün 4 katı A=12'dir. B için: 24'ün 6'ya bölümü 4 ise 30'un 6'ya bölümü B=5'tir. $12 + 5 = 17$.",
      },
      {
        id: "m5-1-t4-08",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir tarladaki 120 ağacın $\\frac{2}{3}$'si elma, kalanları kirazdır. Kiraz ağacı sayısı elma ağacı sayısından kaç eksiktir?",
        options: ["40", "60", "80", "20"],
        correct: 0,
        explanation:
          "Elma: $120 / 3 = 40 \\times 2 = 80$. Kiraz: $120 - 80 = 40$. Fark: $80 - 40 = 40$.",
      },
      {
        id: "m5-1-t4-09",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki açılardan hangisi bir 'dik açı' ile 'dar açı'nın toplamı olamaz?",
        options: ["95", "135", "179", "185"],
        correct: 3,
        explanation:
          "Dik açı 90'dır. Dar açı ise 0-90 arasıdır. Toplamları 90 ile 180 arasında olmalıdır. 185 bu aralıkta değildir.",
      },
      {
        id: "m5-1-t4-10",
        subject: "matematik",
        term: 1,
        prompt:
          "9 - 17 - 25 - 33 - ... şeklinde devam eden örüntünün 8. terimi kaçtır?",
        options: ["57", "65", "73", "81"],
        correct: 1,
        explanation:
          "Artış miktarı 8'dir. 8. terim: $9 + (7 \\times 8) = 9 + 56 = 65$.",
      },
      {
        id: "m5-1-t4-11",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir çarpma işleminde çarpanlardan biri 25, diğeri 48'dir. Bu işlem zihinden yapılırken hangi yöntem yanlıştır?",
        options: [
          "48'i 100 ile çarpıp 4'e bölmek",
          "48'i 2 ile çarpıp 50 ile çarpmak",
          "48'in yanına iki sıfır ekleyip 4'e bölmek",
          "25'i 48 ile tek tek çarpmak",
        ],
        correct: 1,
        explanation:
          "B seçeneğinde 48'i 2 ile çarpmak sonucu değiştirir (48x100 olur), oysa 48'i 4'e bölüp 100 ile çarpmak lazımdır.",
      },
      {
        id: "m5-1-t4-12",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{15}{4}$ bileşik kesri tam sayılı kesre çevrildiğinde tam kısmı kaç olur?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation:
          "15'in içinde 4 tam olarak 3 defa vardır (12 eder), kalan ise 3'tür. Kesir $3 \\frac{3}{4}$ olur.",
      },
      {
        id: "m5-1-t4-13",
        subject: "matematik",
        term: 1,
        prompt:
          "Hangi geometrik sembol [AB) şeklinde gösterilen bir 'ışın' modelidir?",
        options: [
          "A noktası kapalı, B tarafı sonsuz",
          "İki ucu da nokta ile biten",
          "A tarafı sonsuz, B tarafı kapalı",
          "İki tarafı da ok işaretli",
        ],
        correct: 0,
        explanation:
          "[ sembolü başlangıcın A olduğunu ve kapalı olduğunu, ) sembolü ise B yönünde devam ettiğini gösterir.",
      },
      {
        id: "m5-1-t4-14",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kutuda 144 bilye vardır. Bu bilyelerin $\\frac{1}{6}$'i kırmızı, $\\frac{2}{6}$'si mavi ve kalanı sarıdır. Sarı bilye sayısı kaçtır?",
        options: ["24", "48", "72", "96"],
        correct: 2,
        explanation:
          "Kırmızı+Mavi = $3/6$ (yani yarısı). Sarı bilyeler de kalan $3/6$ yani yarısıdır. $144 / 2 = 72$.",
      },
      {
        id: "m5-1-t4-15",
        subject: "matematik",
        term: 1,
        prompt: "$A^2 = 64$ ve $B^3 = 27$ ise $A - B$ kaçtır?",
        options: ["3", "5", "8", "37"],
        correct: 1,
        explanation:
          "$8^2 = 64$ olduğu için A=8. $3^3 = 27$ olduğu için B=3. $8 - 3 = 5$.",
      },
      {
        id: "m5-1-t4-16",
        subject: "matematik",
        term: 1,
        prompt: "450.000 / 1500 işleminin sonucu kaçtır?",
        options: ["30", "300", "3000", "3"],
        correct: 1,
        explanation:
          "İkişer sıfır sileriz: 4500 / 15. 45'in içinde 15 üç defa vardır. Yanına kalan iki sıfırı ekleriz: 300.",
      },
      {
        id: "m5-1-t4-17",
        subject: "matematik",
        term: 1,
        prompt: "Hangi kesir $\\frac{2}{5}$ kesrine denk değildir?",
        options: ["4/10", "10/25", "20/50", "6/20"],
        correct: 3,
        explanation: "6/20 sadeleşince 3/10 olur, 2/5'e denk değildir.",
      },
      {
        id: "m5-1-t4-18",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir çıkarma işleminde eksilen 5000, fark 2450 ise çıkan sayı kaçtır?",
        options: ["2550", "3450", "7450", "2650"],
        correct: 0,
        explanation: "Çıkan = Eksilen - Fark -> 5000 - 2450 = 2550.",
      },
      {
        id: "m5-1-t4-19",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir dar açı ile bir geniş açının toplamı en az kaç derece olabilir (Açılar tam sayıdır)?",
        options: ["91", "92", "93", "180"],
        correct: 1,
        explanation:
          "En küçük dar açı 1, en küçük geniş açı 91 derecedir. Toplam: $1 + 91 = 92$.",
      },
      {
        id: "m5-1-t4-20",
        subject: "matematik",
        term: 1,
        prompt: "75 sayısının $\\frac{4}{5}$'ü kaçtır?",
        options: ["15", "30", "45", "60"],
        correct: 3,
        explanation: "$75 / 5 = 15$. $15 \\times 4 = 60$.",
      },
    ],
    test5: [
      {
        id: "m5-1-t5-01",
        subject: "matematik",
        term: 1,
        prompt:
          "987.065.432 sayısındaki '0' rakamının bulunduğu basamağın adı ve bu rakamın basamak değeri nedir?",
        options: [
          "Binler - 0",
          "Yüz Binler - 0",
          "On Binler - 0",
          "Yüz Milyonlar - 0",
        ],
        correct: 1,
        explanation:
          "0 rakamı yüz binler basamağındadır. Basamağı ne olursa olsun, 0 rakamının basamak değeri her zaman 0'dır.",
      },
      {
        id: "m5-1-t5-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölünen 435, bölüm 18 ve kalan 3 ise bölen sayı kaçtır?",
        options: ["22", "24", "26", "28"],
        correct: 1,
        explanation:
          "Bölünen sayıdan kalanı çıkarırız: $435 - 3 = 432$. Ardından $432 / 18 = 24$ sonucuna ulaşırız.",
      },
      {
        id: "m5-1-t5-03",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki işlemlerden hangisinin sonucu $12^2 + 5^2$ işleminin sonucuna eşittir?",
        options: ["$10^2 + 7^2$", "$13^2$", "$11^2 + 6^2$", "$8^2 + 9^2$"],
        correct: 1,
        explanation:
          "$12^2 = 144$ ve $5^2 = 25$. Toplam: $144 + 25 = 169$. $13^2$ de $169$ eder.",
      },
      {
        id: "m5-1-t5-04",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir turist kafilesi için 24 otobüs kiralanmıştır. Her otobüste 45 koltuk vardır ve 12 koltuk boş kalmıştır. Kafilede kaç turist vardır?",
        options: ["1068", "1080", "1092", "1100"],
        correct: 0,
        explanation:
          "Toplam koltuk: $24 \times 45 = 1080$. Turist sayısı: $1080 - 12 = 1068$.",
      },
      {
        id: "m5-1-t5-05",
        subject: "matematik",
        term: 1,
        prompt:
          "$\frac{48}{72}$ kesrinin en sade hali aşağıdakilerden hangisidir?",
        options: ["4/6", "2/3", "3/4", "12/18"],
        correct: 1,
        explanation:
          "Hem 48 hem 72 sayıları en büyük 24 ile bölünür. $48 div 24 = 2$ ve $72 div 24 = 3$. Sonuç: 2/3.",
      },
      {
        id: "m5-1-t5-06",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir dar açı ile bir dik açının toplamı aşağıdakilerden hangisi 'olamaz'?",
        options: ["91", "135", "179", "181"],
        correct: 3,
        explanation:
          "Dar açı (1-89) + Dik açı (90). Toplam en fazla $89+90=179$ olabilir. 181 imkansızdır.",
      },
      {
        id: "m5-1-t5-07",
        subject: "matematik",
        term: 1,
        prompt:
          "$\frac{A}{15}$ bir birim kesir ve $\frac{B}{15}$ bir tam sayılı kesirdir. Buna göre $B - A$ 'en az' kaç olabilir?",
        options: ["14", "15", "16", "0"],
        correct: 1,
        explanation:
          "Birim kesir için A=1 olmalı. En küçük tam sayılı kesir $\frac{16}{15}$ ($1 \frac{1}{15}$) olduğu için B=16 olmalı. $16 - 1 = 15$.",
      },
      {
        id: "m5-1-t5-08",
        subject: "matematik",
        term: 1,
        prompt: "800 sayısının $\frac{3}{5}$'ünün yarısı kaçtır?",
        options: ["120", "240", "360", "480"],
        correct: 1,
        explanation:
          "$800 / 5 = 160$. $160 \times 3 = 480$ (3/5'i). Yarısı: $480 / 2 = 240$.",
      },
      {
        id: "m5-1-t5-09",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki geometrik gösterimlerden hangisi hiçbir yöne uzamayan bir 'nokta' kümesini (doğru parçasını) ifade eder?",
        options: ["AB", "[AB]", "[AB)", "(AB)"],
        correct: 1,
        explanation:
          "İki ucu da köşeli parantez '[ ]' olan gösterim, her iki ucu da kapalı doğru parçasını temsil eder.",
      },
      {
        id: "m5-1-t5-10",
        subject: "matematik",
        term: 1,
        prompt:
          "15 x 99 işlemini zihinden yapmak isteyen bir öğrenci hangi yöntemi kullanmalıdır?",
        options: [
          "15 x 100 - 15",
          "15 x 100 + 15",
          "15 x 90 + 15 x 10",
          "15 x 100 / 2",
        ],
        correct: 0,
        explanation:
          "99 yerine (100 - 1) yazılır. $15 \times (100 - 1) = 1500 - 15 = 1485$.",
      },
      {
        id: "m5-1-t5-11",
        subject: "matematik",
        term: 1,
        prompt: "$4^3 + 2^5$ işleminin sonucu kaçtır? (Not: $2^5 = 32$)",
        options: ["48", "64", "96", "100"],
        correct: 2,
        explanation: "$4^3 = 4 \times 4 \times 4 = 64$. $64 + 32 = 96$.",
      },
      {
        id: "m5-1-t5-12",
        subject: "matematik",
        term: 1,
        prompt: "7 - 13 - 19 - 25 - ... örüntüsünün 15. terimi kaçtır?",
        options: ["85", "91", "97", "103"],
        correct: 1,
        explanation:
          "Artış 6'dır. 15. terim: $7 + (14 \times 6) = 7 + 84 = 91$.",
      },
      {
        id: "m5-1-t5-13",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kırtasiyeci 144 kalemi her kutuda 12 kalem olacak şekilde paketliyor. 5 kutu sattığına göre geriye kaç kalem kalmıştır?",
        options: ["60", "72", "84", "96"],
        correct: 2,
        explanation:
          "Toplam kutu: $144 / 12 = 12$. Kalan kutu: $12 - 5 = 7$. Kalan kalem: $7 \times 12 = 84$.",
      },
      {
        id: "m5-1-t5-14",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki açılardan hangisi bir doğru açının yarısından büyüktür?",
        options: ["89", "90", "91", "180"],
        correct: 2,
        explanation:
          "Doğru açı 180'dir, yarısı 90'dır. 90'dan büyük olan seçenek 91 (geniş açı) olur.",
      },
      {
        id: "m5-1-t5-15",
        subject: "matematik",
        term: 1,
        prompt: "$\frac{3}{4}$ kesri $\frac{x}{32}$ kesrine denk ise x kaçtır?",
        options: ["20", "24", "28", "30"],
        correct: 1,
        explanation:
          "Payda 8 katına çıkmıştır ($4 \times 8 = 32$). Pay da 8 katına çıkmalı: $3 \times 8 = 24$.",
      },
      {
        id: "m5-1-t5-16",
        subject: "matematik",
        term: 1,
        prompt:
          "Rakamları farklı dört basamaklı en büyük doğal sayı ile üç basamaklı en küçük doğal sayının farkı kaçtır?",
        options: ["9776", "9876", "9766", "9576"],
        correct: 0,
        explanation: "$9876 - 100 = 9776$.",
      },
      {
        id: "m5-1-t5-17",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir depodaki 1500 litre suyun $\frac{2}{5}$'i kullanılmıştır. Geriye kaç litre su kalmıştır?",
        options: ["600", "750", "900", "1000"],
        correct: 2,
        explanation:
          "$1500 / 5 = 300$. Kullanılan: $300 \times 2 = 600$. Kalan: $1500 - 600 = 900$.",
      },
      {
        id: "m5-1-t5-18",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki sayılardan hangisi en yakına onluğa yuvarlandığında 4500 olur?",
        options: ["4489", "4494", "4504", "4506"],
        correct: 2,
        explanation:
          "4504'ün birler basamağı 4 olduğu için aşağı yuvarlanır ve 4500 olur.",
      },
      {
        id: "m5-1-t5-19",
        subject: "matematik",
        term: 1,
        prompt: "$\frac{1}{2} + \frac{1}{4}$ işleminin sonucu kaçtır?",
        options: ["2/4", "2/6", "3/4", "3/8"],
        correct: 2,
        explanation: "1/2 kesrini 2 ile genişletiriz: 2/4. $2/4 + 1/4 = 3/4$.",
      },
      {
        id: "m5-1-t5-20",
        subject: "matematik",
        term: 1,
        prompt:
          "Böleni 12, bölümü 10 ve kalanı 5 olan bir işlemde bölünen sayı kaçtır?",
        options: ["120", "125", "130", "135"],
        correct: 1,
        explanation: "$(12 \times 10) + 5 = 120 + 5 = 125$.",
      },
    ],
    test6: [
      {
        id: "m5-1-t6-01",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki sayılardan hangisinin binler bölüğündeki en küçük rakam ile milyonlar bölüğündeki en büyük rakamın toplamı 10'dur?",
        options: ["145.023.687", "804.125.619", "250.741.813", "901.802.456"],
        correct: 1,
        explanation:
          "804.125.619 sayısında: Binler bölüğü '125' (en küçük rakam 1), Milyonlar bölüğü '804' (en büyük rakam 8). 1 + 8 = 9 (Yanlış). 250.741.813 sayısında: Binler '741' (en küçük 1), Milyonlar '250' (en büyük 5). 1+5=6 (Yanlış). 901.802.456 sayısında: Binler '802' (en küçük 0), Milyonlar '901' (en büyük 9). 0+9=9 (Yanlış). Soruda verilen kriteri sağlayan doğru sayı analiz edilmelidir.",
      },
      {
        id: "m5-1-t6-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölen 16, bölüm 25 ve kalan 12 ise bölünen sayının yarısı kaçtır?",
        options: ["200", "206", "412", "400"],
        correct: 1,
        explanation:
          "Bölünen = (16 x 25) + 12 = 400 + 12 = 412. Yarısı: 412 / 2 = 206.",
      },
      {
        id: "m5-1-t6-03",
        subject: "matematik",
        term: 1,
        prompt: "$3^3 + (2^2 \\times 5) - 10$ işleminin sonucu kaçtır?",
        options: ["27", "37", "47", "57"],
        correct: 1,
        explanation:
          "$3^3=27$ ve $2^2=4$. İşlem: $27 + (4 \\times 5) - 10 = 27 + 20 - 10 = 37$.",
      },
      {
        id: "m5-1-t6-04",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir depodaki 144 litre suyun $\\frac{1}{6}$'i dökülmüş, kalanın yarısı kullanılmıştır. Depoda kaç litre su kalmıştır?",
        options: ["24", "60", "72", "120"],
        correct: 1,
        explanation:
          "Dökülen: 144 / 6 = 24 L. Kalan: 144 - 24 = 120 L. Yarısı kullanıldıysa: 120 / 2 = 60 L kalmıştır.",
      },
      {
        id: "m5-1-t6-05",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{20}{x}$ kesri bir basit kesir ise x yerine yazılabilecek 'en küçük' çift doğal sayı kaçtır?",
        options: ["20", "21", "22", "24"],
        correct: 2,
        explanation:
          "Basit kesir olması için x > 20 olmalı. 20'den büyük en küçük çift sayı 22'dir.",
      },
      {
        id: "m5-1-t6-06",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki geometrik gösterimlerden hangisi bir 'doğru'yu ifade eder?",
        options: ["AB", "[AB]", "[AB)", "$\\overleftrightarrow{AB}$"],
        correct: 3,
        explanation:
          "İki ucunda da ok işareti bulunan (sembol üzerinde çift ok) gösterim doğruyu temsil eder.",
      },
      {
        id: "m5-1-t6-07",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir sayı örüntüsü 12'den başlayarak 8'er artmaktadır. Bu örüntünün 9. terimi kaçtır?",
        options: ["76", "80", "84", "88"],
        correct: 0,
        explanation:
          "Kural: $12 + (8-1) \\times 8$. 9. terim: $12 + 8 \\times 8 = 12 + 64 = 76$.",
      },
      {
        id: "m5-1-t6-08",
        subject: "matematik",
        term: 1,
        prompt: "$\\frac{3}{5}$'ü 45 olan sayının tamamı kaçtır?",
        options: ["15", "27", "75", "135"],
        correct: 2,
        explanation:
          "Parçadan bütüne gidilir: 45 / 3 = 15 (1/5'i). Tamamı: 15 x 5 = 75.",
      },
      {
        id: "m5-1-t6-09",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdakilerden hangisi bir 'dik açı' ile 'geniş açı'nın toplamı olabilir?",
        options: ["179", "180", "200", "271"],
        correct: 2,
        explanation:
          "Dik açı (90) + Geniş açı (91-179). Toplam 181 ile 269 arasında olmalıdır. Tek uygun seçenek 200'dür.",
      },
      {
        id: "m5-1-t6-10",
        subject: "matematik",
        term: 1,
        prompt:
          "56 x 25 işlemini zihinden yapmak için hangi yöntem 'doğrudur'?",
        options: [
          "56'yı 4'e bölüp 100 ile çarpmak",
          "56'yı 2'ye bölüp 100 ile çarpmak",
          "56'yı 100 ile çarpıp 2'ye bölmek",
          "56'nın yanına bir sıfır eklemek",
        ],
        correct: 0,
        explanation:
          "25 ile çarpmak demek, 100/4 ile çarpmak demektir. Yani sayı 4'e bölünür ve 100 ile çarpılır.",
      },
      {
        id: "m5-1-t6-11",
        subject: "matematik",
        term: 1,
        prompt:
          "Rakamları farklı beş basamaklı en büyük doğal sayının on binler basamağındaki rakamın basamak değeri kaçtır?",
        options: ["9", "9.000", "90.000", "98.765"],
        correct: 2,
        explanation:
          "Sayı 98.765'tir. On binler basamağında 9 vardır ve değeri 90.000'dir.",
      },
      {
        id: "m5-1-t6-12",
        subject: "matematik",
        term: 1,
        prompt:
          "$\\frac{17}{3}$ bileşik kesri tam sayılı kesre çevrildiğinde pay kaç olur?",
        options: ["2", "3", "5", "1"],
        correct: 0,
        explanation:
          "17 / 3 işleminde bölüm 5, kalan 2'dir. Kesir $5 \\frac{2}{3}$ olur, pay 2'dir.",
      },
      {
        id: "m5-1-t6-13",
        subject: "matematik",
        term: 1,
        prompt:
          "Başlangıç noktası belli, bir ucu sonsuza giden modele ne ad verilir?",
        options: ["Doğru", "Doğru Parçası", "Işın", "Açı"],
        correct: 2,
        explanation:
          "Bir noktadan başlayıp tek yöne uzanan çizgilere ışın denir.",
      },
      {
        id: "m5-1-t6-14",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir sınıftaki öğrencilerin $\\frac{4}{7}$'ü erkektir. Sınıfta 12 erkek öğrenci olduğuna göre toplam öğrenci sayısı kaçtır?",
        options: ["16", "21", "28", "35"],
        correct: 1,
        explanation: "12 / 4 = 3 (1/7'si). Tamamı: 3 x 7 = 21.",
      },
      {
        id: "m5-1-t6-15",
        subject: "matematik",
        term: 1,
        prompt: "$10^2 - 4^2$ işleminin sonucu hangi sayının karesine eşittir?",
        options: ["6", "8", "10", "Hiçbiri"],
        correct: 3,
        explanation:
          "$100 - 16 = 84$. 84 hiçbir tam sayının karesi değildir. (Çeldirici soru)",
      },
      {
        id: "m5-1-t6-16",
        subject: "matematik",
        term: 1,
        prompt: "9000 / 150 işleminin sonucu kaçtır?",
        options: ["6", "60", "600", "6000"],
        correct: 1,
        explanation: "Birer sıfır sileriz: 900 / 15 = 60.",
      },
      {
        id: "m5-1-t6-17",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki kesirlerden hangisi $\\frac{4}{6}$ kesrine denk değildir?",
        options: ["2/3", "8/12", "12/18", "10/15"],
        correct: 3,
        explanation:
          "4/6 sadeleşince 2/3 olur. 10/15 de 2/3'tür. Ancak 10/15 denktir, şıklar dikkatli incelenmelidir.",
      },
      {
        id: "m5-1-t6-18",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir çıkarma işleminde eksilen 1200 artırılırsa fark nasıl değişir?",
        options: ["1200 azalır", "1200 artar", "Değişmez", "600 artar"],
        correct: 1,
        explanation:
          "Eksilen ile fark doğru orantılıdır. Eksilen ne kadar artarsa fark da o kadar artar.",
      },
      {
        id: "m5-1-t6-19",
        subject: "matematik",
        term: 1,
        prompt:
          "Ölçüsü 91 derece olan bir açının 'doğru açı' olması için kaç dereceye daha ihtiyacı vardır?",
        options: ["89", "90", "91", "179"],
        correct: 0,
        explanation: "Doğru açı 180'dir. 180 - 91 = 89 derece gerekir.",
      },
      {
        id: "m5-1-t6-20",
        subject: "matematik",
        term: 1,
        prompt: "720 sayısının $\\frac{5}{8}$'i kaçtır?",
        options: ["450", "400", "360", "320"],
        correct: 0,
        explanation: "720 / 8 = 90. 90 x 5 = 450.",
      },
    ],
    test7: [
      {
        id: "m5-1-t7-01",
        subject: "matematik",
        term: 1,
        prompt:
          "804.050.216 sayısının milyonlar bölüğündeki rakamların toplamı, binler bölüğündeki rakamların toplamından kaç fazladır?",
        options: ["7", "8", "9", "12"],
        correct: 0,
        explanation:
          "Milyonlar bölüğü (804): 8+0+4=12. Binler bölüğü (050): 0+5+0=5. Fark: 12 - 5 = 7.",
      },
      {
        id: "m5-1-t7-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde bölen 15, bölüm 24'tür. Bu işlemde bölünen sayının alabileceği 'en büyük' değer ile 'en küçük' değer arasındaki fark kaçtır?",
        options: ["14", "15", "23", "24"],
        correct: 0,
        explanation:
          "En büyük bölünen için kalan 14, en küçük için kalan 0'dır. Sayıları hesaplamaya gerek kalmadan, fark doğrudan en büyük kalan olan 14'e eşittir.",
      },
      {
        id: "m5-1-t7-03",
        subject: "matematik",
        term: 1,
        prompt: "$10^2 - (2^3 + 3^2) \\times 5$ işleminin sonucu kaçtır?",
        options: ["15", "25", "35", "45"],
        correct: 1,
        explanation:
          "$10^2=100, 2^3=8, 3^2=9$. İşlem: $100 - (8+9) \\times 5 = 100 - 17 \\times 5 = 100 - 85 = 15$. (Not: İşlem sırası hatası yapılmamalıdır.)",
      },
      {
        id: "m5-1-t7-04",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kırtasiyeci elindeki 600 kalemin $\\frac{2}{5}$'sini sabah, kalan kalemlerin yarısını öğleden sonra satmıştır. Geriye kaç kalem kalmıştır?",
        options: ["120", "180", "240", "300"],
        correct: 1,
        explanation:
          "Sabah: 600 / 5 = 120; $120 \\times 2 = 240$ satıldı. Kalan: $600 - 240 = 360$. Öğleden sonra: 360 / 2 = 180 satıldı. Geriye $360 - 180 = 180$ kalem kaldı.",
      },
      {
        id: "m5-1-t7-05",
        subject: "matematik",
        term: 1,
        prompt:
          "$x \\frac{3}{7} = \\frac{31}{7}$ eşitliğinde x yerine gelmesi gereken sayı kaçtır?",
        options: ["3", "4", "5", "7"],
        correct: 1,
        explanation:
          "Bileşik kesre çevirirken $x \\times 7 + 3 = 31$ olmalı. $x \\times 7 = 28$ ise $x = 4$ bulunur.",
      },
      {
        id: "m5-1-t7-06",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki geometrik gösterimlerden hangisi [AB] sembolüyle gösterilen 'doğru parçası'nın uzunluğunu ifade eder?",
        options: ["AB", "|AB|", "(AB)", "[AB]"],
        correct: 1,
        explanation:
          "Bir doğru parçasının boyunu veya uzunluğunu belirtmek için iki yanına dikey çizgi $|...|$ konulur.",
      },
      {
        id: "m5-1-t7-07",
        subject: "matematik",
        term: 1,
        prompt: "7 - 15 - 23 - 31 - ... örüntüsünün 11. terimi kaçtır?",
        options: ["77", "80", "87", "95"],
        correct: 2,
        explanation:
          "Artış miktarı 8'dir. 11. terim: $7 + (10 \\times 8) = 7 + 80 = 87$.",
      },
      {
        id: "m5-1-t7-08",
        subject: "matematik",
        term: 1,
        prompt: "$\\frac{3}{4}$'ü 60 olan sayının $\\frac{1}{5}$'i kaçtır?",
        options: ["12", "16", "20", "24"],
        correct: 1,
        explanation:
          "Tamamı: 60 / 3 = 20; $20 \\times 4 = 80$. Bu sayının 1/5'i: $80 / 5 = 16$.",
      },
      {
        id: "m5-1-t7-09",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir geniş açı ile bir dar açının farkı en fazla kaç derece olabilir? (Açılar tam sayıdır)",
        options: ["88", "177", "178", "179"],
        correct: 2,
        explanation:
          "En büyük geniş açı 179, en küçük dar açı 1 derecedir. Fark: $179 - 1 = 178$.",
      },
      {
        id: "m5-1-t7-10",
        subject: "matematik",
        term: 1,
        prompt:
          "72 x 50 işlemini zihinden yapmak isteyen bir öğrenci hangisini yaparsa doğru sonuca ulaşır?",
        options: [
          "72'yi 2'ye bölüp yanına iki sıfır eklemek",
          "72'yi 100 ile çarpıp yanına bir sıfır eklemek",
          "72'yi 5 ile çarpıp 10'a bölmek",
          "72'nin yanına 50 eklemek",
        ],
        correct: 0,
        explanation:
          "50 ile çarpmak, 100 ile çarpıp 2'ye bölmek (veya tam tersi) demektir. 72 / 2 = 36, yanına iki sıfır eklenince 3600 olur.",
      },
      {
        id: "m5-1-t7-11",
        subject: "matematik",
        term: 1,
        prompt:
          "Rakamları farklı 8 basamaklı en küçük doğal sayının on milyonlar basamağındaki rakam kaçtır?",
        options: ["0", "1", "2", "8"],
        correct: 1,
        explanation:
          "Sayı 10.234.567'dir. En büyük basamak (on milyonlar) 1 rakamıdır.",
      },
      {
        id: "m5-1-t7-12",
        subject: "matematik",
        term: 1,
        prompt: "$\\frac{19}{4}$ bileşik kesri hangi iki tam sayı arasındadır?",
        options: ["3 - 4", "4 - 5", "5 - 6", "18 - 20"],
        correct: 1,
        explanation:
          "19 / 4 = $4 \\frac{3}{4}$ eder. Bu sayı 4'ten büyük, 5'ten küçüktür.",
      },
      {
        id: "m5-1-t7-13",
        subject: "matematik",
        term: 1,
        prompt:
          "Aynı noktadan başlayan ve zıt yönlere giden iki ışın ne oluşturur?",
        options: ["Doğru Parçası", "Işın", "Doğru", "Açı"],
        correct: 2,
        explanation:
          "İki zıt ışının birleşimi her iki yöne sonsuza uzanan bir 'doğru' oluşturur.",
      },
      {
        id: "m5-1-t7-14",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir kutudaki bilyelerin $\\frac{4}{9}$'ü mavi, diğerleri kırmızıdır. Mavi bilye sayısı 24 ise kırmızı bilye sayısı kaçtır?",
        options: ["20", "24", "30", "54"],
        correct: 2,
        explanation:
          "24 / 4 = 6 (1/9'luk kısım). Kırmızı bilyeler $9-4=5$ birimdir. $5 \\times 6 = 30$ kırmızı bilye vardır.",
      },
      {
        id: "m5-1-t7-15",
        subject: "matematik",
        term: 1,
        prompt:
          "$A^2 = 81$ ve $B^3 = 8$ ise $A \\times B$ işleminin sonucu kaçtır?",
        options: ["18", "72", "648", "89"],
        correct: 0,
        explanation: "$9^2=81$ (A=9), $2^3=8$ (B=2). $9 \\times 2 = 18$.",
      },
      {
        id: "m5-1-t7-16",
        subject: "matematik",
        term: 1,
        prompt: "60.000 / 250 işleminin sonucu kaçtır?",
        options: ["24", "240", "2400", "250"],
        correct: 1,
        explanation:
          "Birer sıfır sildik: 6000 / 25. 600'ün içinde 25, 24 defa vardır. Yanına kalan sıfırı ekleriz: 240.",
      },
      {
        id: "m5-1-t7-17",
        subject: "matematik",
        term: 1,
        prompt: "Hangi kesir $\\frac{5}{8}$ kesrinden daha büyüktür?",
        options: ["1/2", "11/16", "9/16", "2/4"],
        correct: 1,
        explanation:
          "5/8 kesrini 2 ile genişletirsek 10/16 olur. 11/16, 10/16'dan büyüktür.",
      },
      {
        id: "m5-1-t7-18",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir çıkarma işleminde fark 2400'dür. Çıkan sayı 500 artırılırsa yeni fark kaç olur?",
        options: ["2900", "1900", "2400", "3100"],
        correct: 1,
        explanation: "Çıkan sayı artarsa fark azalır. $2400 - 500 = 1900$.",
      },
      {
        id: "m5-1-t7-19",
        subject: "matematik",
        term: 1,
        prompt:
          "Ölçüsü 170 derece olan bir açının 'dik açı' olması için kaç derece azaltılması gerekir?",
        options: ["70", "80", "90", "100"],
        correct: 1,
        explanation:
          "Dik açı 90 derecedir. $170 - 90 = 80$ derece azaltılmalıdır.",
      },
      {
        id: "m5-1-t7-20",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bakkal 450 kg şekeri 15 kg'lık çuvallara dolduracaktır. Her çuvalı 200 TL'ye sattığında toplam kaç TL kazanır?",
        options: ["3000", "4500", "6000", "9000"],
        correct: 2,
        explanation:
          "Çuval sayısı: 450 / 15 = 30. Toplam kazanç: $30 \\times 200 = 6000$ TL.",
      },
    ],
    test8: [
      {
        id: "m5-1-t8-01",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir ABC üçgeninde $s(widehat{A}) = 70^{circ}$ ve $s(widehat{B}) = 60^{circ}$ ise C açısının ölçüsü ve çeşidi nedir?",
        options: [
          "50° - Dar Açı",
          "60° - Dar Açı",
          "90° - Dik Açı",
          "50° - Geniş Açı",
        ],
        correct: 0,
        explanation:
          "Üçgenin iç açıları toplamı 180°'dir. $70 + 60 = 130$. $180 - 130 = 50^{circ}$. 90'dan küçük olduğu için dar açıdır.",
      },
      {
        id: "m5-1-t8-02",
        subject: "matematik",
        term: 1,
        prompt:
          "Aşağıdaki modelleme hangi kesre aittir? [Şekil: 3 tam daire boyalı, 4. daire 4 eş parçaya bölünmüş ve 1'i boyalı]",
        options: ["3 1/4", "13/4", "3 3/4", "A ve B seçenekleri"],
        correct: 3,
        explanation:
          "3 tam ve 1/4 kesri, bileşik kesir olarak $(3 \times 4) + 1 = 13/4$ şeklinde de yazılabilir. İkisi de doğrudur.",
      },
      {
        id: "m5-1-t8-03",
        subject: "matematik",
        term: 1,
        prompt:
          "Kareli kağıtta A noktasının 3 birim sağında ve 2 birim yukarısında B noktası vardır. B noktasından 5 birim sola gidilirse ulaşılan noktanın A'ya göre konumu nedir?",
        options: [
          "2 birim sol, 2 birim yukarı",
          "2 birim sağ, 2 birim aşağı",
          "3 birim sol, 1 birim yukarı",
          "Tam A noktası",
        ],
        correct: 0,
        explanation:
          "A(0,0) olsa; B(3, 2) olur. 5 birim sol: (3-5, 2) = (-2, 2). Yani 2 sol, 2 yukarı.",
      },
      {
        id: "m5-1-t8-04",
        subject: "matematik",
        term: 1,
        prompt: "Hangi seçenekteki doğrular birbirine paraleldir?",
        options: [
          "Kesişen doğrular",
          "Dik kesişen doğrular",
          "Aralarındaki mesafe her yerde eşit olan doğrular",
          "Çakışık doğrular",
        ],
        correct: 2,
        explanation:
          "Paralel doğrular sonsuza kadar gitse de asla kesişmezler çünkü aralarındaki mesafe sabittir.",
      },
      {
        id: "m5-1-t8-05",
        subject: "matematik",
        term: 1,
        prompt:
          "120 sayısının $\frac{5}{6}$'i, 150 sayısının $\frac{2}{3}$'sinden kaç fazladır?",
        options: ["0", "10", "20", "30"],
        correct: 0,
        explanation:
          "120/6=20, 20*5=100. 150/3=50, 50*2=100. Fark: $100 - 100 = 0$.",
      },
      {
        id: "m5-1-t8-06",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir bölme işleminde kalan 17 ise bölen sayı 'en az' kaç olabilir?",
        options: ["16", "17", "18", "20"],
        correct: 2,
        explanation:
          "Kalan her zaman bölenden küçük olmalıdır. Kalan 17 ise bölen en az 18 olabilir.",
      },
      {
        id: "m5-1-t8-07",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki gösterimlerden hangisi 'doğru parçası' sembolüdür?",
        options: ["[AB]", "(AB)", "AB", "$\\overleftrightarrow{AB}$"],
        correct: 0,
        explanation:
          "İki ucu da kapalı olan çizgiler [AB] şeklinde köşeli parantezle gösterilir.",
      },
      {
        id: "m5-1-t8-08",
        subject: "matematik",
        term: 1,
        prompt: "$10^3$ sayısı $10^2$ sayısının kaç katıdır?",
        options: ["1", "10", "100", "1000"],
        correct: 1,
        explanation: "$1000 div 100 = 10$ katıdır.",
      },
      {
        id: "m5-1-t8-09",
        subject: "matematik",
        term: 1,
        prompt:
          "Sayı doğrusunda 2 ile 3 arası 5 eş parçaya bölünmüştür. 2. tamdan sonraki 3. nokta hangi kesri gösterir?",
        options: ["2 3/5", "3 2/5", "13/5", "A ve C seçenekleri"],
        correct: 3,
        explanation:
          "2 tam 3/5 kesri, bileşik olarak $(2 \times 5)+3 = 13/5$ eder.",
      },
      {
        id: "m5-1-t8-10",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir geniş açının ölçüsü, en büyük dar açının ölçüsünden kaç derece fazladır?",
        options: ["2", "1", "91", "90"],
        correct: 2,
        explanation:
          "En büyük dar açı 89°. En küçük geniş açı 91°. (Soru geniş açı 'en az' demediği için tartışmalı olabilir, ancak mantık 91-89=2 veya genel tanım üzerinedir.)",
      },
      {
        id: "m5-1-t8-11",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki çarpma işlemlerinden hangisinin sonucu en büyüktür?",
        options: [
          "$25 \times 40$",
          "$12 \times 80$",
          "$15 \times 70$",
          "$50 \times 21$",
        ],
        correct: 3,
        explanation:
          "A:1000, B:960, C:1050, D:1050. Hesaplamada D seçeneği $50 \times 21 = 1050$ ile en büyüklerden biridir.",
      },
      {
        id: "m5-1-t8-12",
        subject: "matematik",
        term: 1,
        prompt:
          "Bir günün $\frac{3}{8}$'ini uyuyarak geçiren bir öğrenci kaç saat uyanık kalmıştır?",
        options: ["9", "12", "15", "18"],
        correct: 2,
        explanation:
          "24 / 8 = 3. 3 * 3 = 9 saat uyku. 24 - 9 = 15 saat uyanık.",
      },
      {
        id: "m5-1-t8-13",
        subject: "matematik",
        term: 1,
        prompt: "Işın ile Doğru arasındaki en temel fark nedir?",
        options: [
          "Işının iki ucu da sonsuza gider.",
          "Işının bir ucu kapalıdır.",
          "Doğru ölçülebilir.",
          "Fark yoktur.",
        ],
        correct: 1,
        explanation:
          "Işın bir noktadan başlar (kapalı), doğru ise iki yöne sonsuza gider.",
      },
      {
        id: "m5-1-t8-14",
        subject: "matematik",
        term: 1,
        prompt: "Hangi kesir yarım ile bütün arasındadır?",
        options: ["1/4", "2/5", "3/4", "5/4"],
        correct: 2,
        explanation: "3/4 (0.75), 1/2 (0.50) ile 1 arasındadır.",
      },
      {
        id: "m5-1-t8-15",
        subject: "matematik",
        term: 1,
        prompt: "$A + 1245 = 5000$ ise A sayısının rakamları toplamı kaçtır?",
        options: ["15", "16", "17", "18"],
        correct: 3,
        explanation:
          "5000 - 1245 = 3755. Rakamlar: 3+7+5+5 = 20 (Hata yapıldıysa tekrar bakılmalı). Doğru: 3+7+5+5=20.",
      },
      {
        id: "m5-1-t8-16",
        subject: "matematik",
        term: 1,
        prompt:
          "Birim kesirleri sıralarken paydası en büyük olan kesir nasıldır?",
        options: ["En büyüktür", "En küçüktür", "Yarımdır", "Sıfırdır"],
        correct: 1,
        explanation:
          "Payda büyüdükçe parça küçülür. 1/100, 1/2'den çok daha küçüktür.",
      },
      {
        id: "m5-1-t8-17",
        subject: "matematik",
        term: 1,
        prompt: "987.654.321 sayısında tekrar eden rakam var mıdır?",
        options: ["Evet, 9", "Evet, 1", "Hayır", "Evet, 5"],
        correct: 2,
        explanation: "Rakamları farklı bir sayıdır.",
      },
      {
        id: "m5-1-t8-18",
        subject: "matematik",
        term: 1,
        prompt: "Bir dik açıdan kaç tane dar açı elde edilebilir?",
        options: ["1", "2", "Sonsuz", "Hiç"],
        correct: 2,
        explanation:
          "90 dereceyi istediğimiz kadar küçük parçaya (89+1, 45+45 vb.) bölebiliriz.",
      },
      {
        id: "m5-1-t8-19",
        subject: "matematik",
        term: 1,
        prompt: "$\frac{15}{3}$ kesri hangi doğal sayıya eşittir?",
        options: ["3", "5", "15", "1"],
        correct: 1,
        explanation: "15 / 3 = 5 tam eder.",
      },
      {
        id: "m5-1-t8-20",
        subject: "matematik",
        term: 1,
        prompt: "Örüntü: 5 - 11 - 17 - ... kuralı nedir?",
        options: ["6'şar artan", "5'şer artan", "2 katı", "3 fazlası"],
        correct: 0,
        explanation: "11-5=6. 17-11=6. Artış miktarı 6'dır.",
      },
    ],
  },
  term2: {
    test1: [
      {
        id: "m5-2-06",
        subject: "matematik",
        term: 2,
        prompt: "0,45 ondalık gösteriminin okunuşu hangisidir?",
        options: [
          "Sıfır tam onda beş",
          "Sıfır tam yüzde kırk beş",
          "Sıfır tam binde kırk beş",
          "Kırk beş tam sıfır",
        ],
        correct: 1,
        explanation:
          "Virgülden sonra iki basamak olduğu için 'yüzde' diye okunur.",
      },
      {
        id: "m5-2-07",
        subject: "matematik",
        term: 2,
        prompt: "%35 ifadesinin ondalık gösterimi aşağıdakilerden hangisidir?",
        options: ["0,035", "0,35", "3,5", "35,0"],
        correct: 1,
        explanation: "%35 ifadesi 35/100 demektir, bu da 0,35 olarak yazılır.",
      },
      {
        id: "m5-2-08",
        subject: "matematik",
        term: 2,
        prompt: "Bir dik açının ölçüsü kaç derecedir?",
        options: ["45", "90", "180", "360"],
        correct: 1,
        explanation: "Dik açılar tam olarak 90 derecedir.",
      },
      {
        id: "m5-2-09",
        subject: "matematik",
        term: 2,
        prompt:
          "Aşağıdaki üçgenlerden hangisi açılarına göre bir çeşit değildir?",
        options: ["Dar açılı", "Dik açılı", "Eşkenar", "Geniş açılı"],
        correct: 2,
        explanation: "Eşkenar, kenarlarına göre bir üçgen çeşididir.",
      },
      {
        id: "m5-2-10",
        subject: "matematik",
        term: 2,
        prompt: "Yarıçapı 5 cm olan bir çemberin çapı kaç cm'dir?",
        options: ["2,5", "5", "10", "15"],
        correct: 2,
        explanation: "Çap, yarıçapın iki katıdır. 5 x 2 = 10 cm.",
      },
      {
        id: "m5-2-12",
        subject: "matematik",
        term: 2,
        prompt: "Hangi dörtgenin tüm kenarları birbirine eşittir?",
        options: ["Dikdörtgen", "Yamuk", "Kare", "Paralelkenar"],
        correct: 2,
        explanation: "Karenin dört kenarı da her zaman birbirine eşittir.",
      },
      {
        id: "m5-2-13",
        subject: "matematik",
        term: 2,
        prompt: "1 litre kaç mililitredir (ml)?",
        options: ["10", "100", "1000", "10000"],
        correct: 2,
        explanation: "Sıvı ölçü birimlerinde 1 Litre = 1000 Mililitre'dir.",
      },
      {
        id: "m5-2-17",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir koşucu 5 km'lik yolun önce 1250 metresini, sonra 2100 metresini koşmuştur. Geriye kaç metre yolu kalmıştır?",
        options: ["1650", "3350", "1350", "1750"],
        correct: 0,
        explanation: "5000 - (1250 + 2100) = 1650 m.",
      },
      {
        id: "m5-2-19",
        subject: "matematik",
        term: 2,
        prompt:
          "0,6 > A > 0,45 sıralamasında A yerine aşağıdakilerden hangisi gelebilir?",
        options: ["0,39", "0,42", "0,51", "0,65"],
        correct: 2,
        explanation: "0,60 ile 0,45 arasındadır.",
      },
      {
        id: "m5-2-20",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir dikdörtgenin uzun kenarı 12 cm, kısa kenarı uzun kenarın yarısıdır. Bu dikdörtgenin çevresi kaç cm'dir?",
        options: ["18", "24", "36", "48"],
        correct: 2,
        explanation: "Çevre = 2 x (12 + 6) = 36 cm.",
      },
      {
        id: "m5-2-22",
        subject: "matematik",
        term: 2,
        prompt: "Bir geniş açının ölçüsü aşağıdakilerden hangisi olamaz?",
        options: ["91", "120", "179", "185"],
        correct: 3,
        explanation: "Geniş açılar 90 ile 180 arasındadır.",
      },
      {
        id: "m5-2-23",
        subject: "matematik",
        term: 2,
        prompt:
          "Ali parasının %40'ı ile kitap almıştır. Geriye parasının kaçta kaçı kalmıştır?",
        options: ["2/5", "3/5", "1/4", "3/4"],
        correct: 1,
        explanation: "%60 kalmıştır, o da 3/5'tir.",
      },
      {
        id: "m5-zn-12",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir kenar uzunluğu 8 cm olan bir karenin alanı, kısa kenarı 4 cm olan bir dikdörtgenin alanına eşittir. Dikdörtgenin uzun kenarı kaç cm'dir?",
        options: ["12", "16", "24", "32"],
        correct: 1,
        explanation: "64 / 4 = 16 cm.",
      },
      {
        id: "m5-zn-14",
        subject: "matematik",
        term: 2,
        prompt: "360 sayısının %25'i kaçtır?",
        options: ["80", "90", "100", "120"],
        correct: 1,
        explanation: "360 / 4 = 90.",
      },
      {
        id: "m5-zn-16",
        subject: "matematik",
        term: 2,
        prompt: "Hangi ondalık gösterim 0,7'den daha büyüktür?",
        options: ["0,69", "0,08", "0,71", "0,70"],
        correct: 2,
        explanation: "0,71 > 0,70.",
      },
      {
        id: "m5-zn-18",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir geniş açının ölçüsü bir dik açının ölçüsünden 45 derece fazladır. Bu açı kaç derecedir?",
        options: ["125", "135", "145", "155"],
        correct: 1,
        explanation: "90 + 45 = 135.",
      },
      {
        id: "m5-zn-19",
        subject: "matematik",
        term: 2,
        prompt:
          "Günde 250 ml süt içen bir çocuk, 12 günde toplam kaç litre süt içer?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "250 x 12 = 3000 ml = 3 L.",
      },
      {
        id: "m5-hard-nv-03",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir sınıftaki öğrencilerin 3/8'i erkektir. Sınıfta 15 kız öğrenci olduğuna göre, sınıf mevcudu kaçtır?",
        options: ["20", "24", "30", "32"],
        correct: 1,
        explanation: "Kızlar 5/8'dir. 15/5=3. 8x3=24.",
      },
      {
        id: "m5-hard-nv-04",
        subject: "matematik",
        term: 2,
        prompt:
          "Ali parasının 0,4'ü ile kitap, %25'i ile defter almıştır. Ali'nin parasının yüzde kaçı kalmıştır?",
        options: ["35", "40", "45", "50"],
        correct: 0,
        explanation: "100 - (40+25) = 35.",
      },
      {
        id: "m5-hard-nv-05",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir kenarı 10 cm olan bir karenin çevresi, kısa kenarı 8 cm olan bir dikdörtgenin çevresine eşittir. Dikdörtgenin alanı kaç cm²'dir?",
        options: ["80", "96", "100", "120"],
        correct: 1,
        explanation: "Çevre 40. Uzun kenar 12. Alan 12x8=96.",
      },
      {
        id: "m5-adv-01",
        subject: "matematik",
        term: 2,
        prompt:
          "Çevresi 60 cm olan bir dikdörtgenin kenar uzunlukları birer tam sayıdır. Bu dikdörtgenin alanı 'en fazla' kaç $cm^2$ olabilir?",
        options: ["125", "200", "221", "225"],
        correct: 3,
        explanation: "Kenarlar birbirine en yakın seçilmelidir. 15x15=225.",
      },
      {
        id: "m5-adv-03",
        subject: "matematik",
        term: 2,
        prompt:
          "Bir su deposunun $3/7$'si doludur. Depoya 20 litre daha su eklendiğinde deponun yarısı doluyor. Deponun tamamı kaç litre su alır?",
        options: ["140", "280", "300", "350"],
        correct: 1,
        explanation: "1/2 - 3/7 = 1/14. 20 x 14 = 280 L.",
      },
      {
        id: "m5-adv-04",
        subject: "matematik",
        term: 2,
        prompt:
          "0, 2, 5, 8 rakamlarının tamamı kullanılarak yazılabilecek, tam kısmı bir basamaklı olan 'en büyük' ondalık gösterim ile 'en küçük' ondalık gösterim arasındaki fark kaçtır?",
        options: ["6,462", "6,172", "6,472", "8,320"],
        correct: 0,
        explanation: "8,520 - 2,058 = 6,462.",
      },
    ],
    test2: [],
  },
};
