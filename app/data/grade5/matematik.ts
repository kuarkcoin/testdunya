import { SubjectData } from "./types";
// 1. ADIM: Yeni dosyayı sadece bir kez çağırıyoruz (Import)
import { matematikTest10 } from "./matematik-test10";

export const matematikData: SubjectData = {
       
  // BİRİNCİ DÖNEM VERİLERİ
  term1: {
    test1: [
      {
        id: "m5-1-t1-01",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki abaküste gösterilen dokuz basamaklı sayıda, milyonlar bölüğündeki boncuk sayısı toplamı ile birler bölüğündeki boncuk sayısı toplamı arasındaki fark kaçtır?",
        imageUrl: "/images/grade5/matematik/test1/abakus-boluk.webp",
        options: ["2", "4", "5", "8"],
        correct: 0,
        explanation: "Milyonlar bölüğündeki boncuk sayısından birler bölüğündeki çıkarıldığında sonuç $2$ olur.",
      },
      {
        id: "m5-1-t1-02",
        subject: "matematik",
        term: 1,
        prompt: "Şekildeki örüntü karesel sayılar kuralına göre ilerlemektedir. Bu örüntünün 5. adımında kullanılacak toplam nokta sayısı kaçtır?",
        imageUrl: "/images/grade5/matematik/test1/nokta-oruntusu.webp",
        options: ["16", "20", "25", "30"],
        correct: 2,
        explanation: "Kural $n^2$ olduğu için $5 \\times 5 = 25$ olur.",
      },
      {
        id: "m5-1-t1-03",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki kartlarda yazan üslü ifadelerden hangisinin sayısal değeri diğerlerinden daha büyüktür?",
        imageUrl: "/images/grade5/matematik/test1/uslu-sayilar.webp",
        options: ["$3^4$", "$4^3$", "$2^6$", "$9^2$"],
        correct: 0,
        explanation: "$3^4=81$, $4^3=64$, $2^6=64$. En büyük değer $81$'dir.",
      },
      {
        id: "m5-1-t1-04",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki bölme işleminde bölen $15$ ve bölüm $11$ olarak verilmiştir. Kalanlı olan bu işlemde bölünen 'A' sayısının alabileceği en büyük değer kaçtır?",
        imageUrl: "/images/grade5/matematik/test1/bolme-max.webp",
        options: ["165", "174", "179", "180"],
        correct: 2,
        explanation: "$A = (15 \\times 11) + 14 = 179$.",
      },
      {
        id: "m5-1-t1-05",
        subject: "matematik",
        term: 1,
        prompt: "Sayı doğrusunda $1$ ile $2$ arası $4$ eş parçaya bölünmüştür. Ok ile gösterilen 'K' noktasına karşılık gelen tam sayılı kesrin bileşik kesre çevrilmiş hali hangisidir?",
        imageUrl: "/images/grade5/matematik/test1/sayi-dogrusu-kesir.webp",
        options: ["$\\frac{5}{4}$", "$\\frac{7}{4}$", "$\\frac{9}{4}$", "$\\frac{11}{4}$"],
        correct: 1,
        explanation: "$1 \\frac{3}{4} = \\frac{7}{4}$.",
      },
      {
        id: "m5-1-t1-06",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki modelde boyalı kısmı ifade eden bileşik kesir aşağıdakilerden hangisidir?",
        imageUrl: "/images/grade5/matematik/test1/kesir-modelleri.webp",
        options: ["$\\frac{15}{5}$", "$\\frac{16}{5}$", "$\\frac{14}{5}$", "$\\frac{13}{5}$"],
        correct: 2,
        explanation: "Toplam boyalı parça sayısı $14$, payda $5$ olduğu için $\\frac{14}{5}$'tür.",
      },
      {
        id: "m5-1-t1-07",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki şekilde iletki ile ölçülen ABC açısı, aşağıdaki açı türlerinden hangisine örnektir?",
        imageUrl: "/images/grade5/matematik/test1/iletki-aci.webp",
        options: ["Dar Açı", "Dik Açı", "Geniş Açı", "Doğru Açı"],
        correct: 1,
        explanation: "Ölçüm $90^\\circ$ olduğu için dik açıdır.",
      },
      {
        id: "m5-1-t1-08",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki dijital tartıda $72$ kg gelen un çuvalının $\\frac{5}{8}$'i satılmıştır. Geriye kalan un miktarı kaç kg'dır?",
        imageUrl: "/images/grade5/matematik/test1/un-cuvali-kesir.webp",
        options: ["27", "36", "45", "54"],
        correct: 0,
        explanation: "$72 \\div 8 = 9$. Kalan $3$ parça: $9 \\times 3 = 27$.",
      },
      {
        id: "m5-1-t1-09",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki saatte akrep ile yelkovan arasındaki küçük açı kaç derecedir?",
        imageUrl: "/images/grade5/matematik/test1/saat-0400.webp",
        options: ["$90^\\circ$", "$100^\\circ$", "$120^\\circ$", "$150^\\circ$"],
        correct: 2,
        explanation: "Her saat arası $30^\\circ$ olduğundan $4 \\times 30 = 120^\\circ$ olur.",
      },
      {
        id: "m5-1-t1-10",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki geometrik şekillerden hangisi başlangıç noktası sabit olup tek yönde sonsuza giden bir 'ışın' modelidir?",
        imageUrl: "/images/grade5/matematik/test1/geometrik-sekiller.webp",
        options: ["[AB]", "[CD", "EF", "[GH]"],
        correct: 1,
        explanation: "$[CD$ ışın gösterimidir.",
      },
      {
        id: "m5-1-t1-11",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki $10 \\times 10$'luk kareli modelde boyalı alanın ifade ettiği ondalık gösterim aşağıdakilerden hangisidir?",
        imageUrl: "/images/grade5/matematik/test1/ondalik-izgara.webp",
        options: ["0,45", "0,52", "0,64", "0,72"],
        correct: 2,
        explanation: "$100$ kareden $64$ tanesi boyalıdır, yani $0,64$ olur.",
      },
      {
        id: "m5-1-t1-12",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki market fişinde toplam tutar $124,58$ TL olarak görülmektedir. Bu tutarın en yakın birliğe yuvarlanmış hali aşağıdakilerden hangisidir?",
        imageUrl: "/images/grade5/matematik/test1/market-fisi.webp",
        options: ["124", "125", "124,5", "124,6"],
        correct: 1,
        explanation: "Onda birler basamağı $5$ olduğu için yukarı yuvarlanır: $125$ TL.",
      },
      {
        id: "m5-1-t1-13",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki kareli kağıtta çizilen dikdörtgenin alanı kaç birim karedir?",
        imageUrl: "/images/grade5/matematik/test1/izgara-alan.webp",
        options: ["24", "28", "32", "36"],
        correct: 2,
        explanation: "Kenarlar sayıldığında $8 \\times 4 = 32$ birim kare bulunur.",
      },
      {
        id: "m5-1-t1-14",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki ABC üçgeninde $A$ açısı $55^\\circ$ ve $B$ açısı $65^\\circ$ olduğuna göre $C$ açısı kaç derecedir?",
        imageUrl: "/images/grade5/matematik/test1/ucgen-aci.webp",
        options: ["50", "60", "70", "80"],
        correct: 1,
        explanation: "$180 - (55 + 65) = 60^\\circ$ olur.",
      },
      {
        id: "m5-1-t1-15",
        subject: "matematik",
        term: 1,
        prompt: "Bir okuldaki öğrencilerin $\\%45$'i erkektir. Kız öğrencilerin sayısı $220$ olduğuna göre okulda toplam kaç öğrenci vardır?",
        options: ["350", "400", "450", "500"],
        correct: 1,
        explanation: "Kızlar $\\%55$'dir. $\\%55 = 220$ ise tamamı $400$'dür.",
      },
      {
        id: "m5-1-t1-16",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki örüntüde her adımda kullanılan şekil sayısı belirli bir kurala göre artmaktadır. 10. adımda kaç şekil kullanılır?",
        imageUrl: "/images/grade5/matematik/test1/sekil-oruntusu.webp",
        options: ["19", "20", "23", "25"],
        correct: 1,
        explanation: "Şekiller sayıların 2 katı olacak şeklindedir.",
      },
      {
        id: "m5-1-t1-17",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki sayı piramidinde her kutu altındaki iki komşu kutunun toplamına eşittir. En üstteki sayı kaçtır?",
        imageUrl: "/images/grade5/matematik/test1/piramit-logic.webp",
        options: ["36", "37", "38", "39"],
        correct: 2,
        explanation: "Alt basamaklardaki toplamlar takip edildiğinde zirveye $38$ yazılır.",
      },
      {
        id: "m5-1-t1-18",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki kesirlerden hangisi $\\frac{3}{5}$ kesrinden daha büyüktür?",
        options: ["$\\frac{1}{2}$", "$\\frac{5}{10}$", "$\\frac{2}{3}$", "$\\frac{4}{15}$"],
        correct: 2,
        explanation: "$\\frac{3}{5} = 0,6$ iken $\\frac{2}{3} \\approx 0,66$ olup daha büyüktür.",
      },
      {
        id: "m5-1-t1-19",
        subject: "matematik",
        term: 1,
        prompt: "Bir günün $\\frac{3}{8}$'ini uyuyarak geçiren bir öğrenci, kaç saat uyanık kalmıştır?",
        options: ["9", "12", "15", "18"],
        correct: 2,
        explanation: "$24 \\times \\frac{3}{8} = 9$ saat uyku. $24 - 9 = 15$ saat uyanık.",
      },
      {
        id: "m5-1-t1-20",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki kurguda bir trenin vagonlarındaki yolcu sayıları verilmiştir. En çok yolcu olan vagon ile en az olan arasındaki fark kaçtır?",
        imageUrl: "/images/grade5/matematik/test1/tren-vagon-mantik.webp",
        options: ["12", "15", "18", "21"],
        correct: 1,
        explanation: "En dolu vagon $45$, en boş $30$ ise fark $15$ olur.",
      }
    ],
    // --- TEST 2: ZORLAYICI & GÖRSELLİ SORULAR ---
    test2: [
      {
        id: "m5-1-t2-01",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki basamak labirentinde, $803.450.127$ sayısındaki '5' rakamının bulunduğu basamaktan çıkıp, '1' rakamının bulunduğu basamağa giden yoldaki tüm rakamların basamak değerleri toplamı kaçtır?",
        imageUrl: "/images/grade5/matematik/test2/basamak-labirenti.webp",
        options: ["50.100", "5.100", "5.000.100", "500.100"],
        correct: 2,
        explanation: "5 rakamı on binler basamağındadır ($50.000$). 1 rakamı yüzler basamağındadır ($100$). Toplamları: $50.000 + 100 = 50.100$ eder.",
      },
      {
        id: "m5-1-t2-02",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki terazide verilen bölme işlemlerine göre, en büyük 'K' değerini elde etmek için terazi hangi yöne eğilmelidir?",
        imageUrl: "/images/grade5/matematik/test2/bolme-dengesi.webp",
        options: ["Sol kefe aşağı iner", "Sağ kefe aşağı iner", "Dengede kalır", "Bilinenler yetersizdir"],
        correct: 0,
        explanation: "Sol: $(24 \\times 15) + 23 = 383$. Sağ: $(25 \\times 14) + 24 = 374$. Sol taraf daha ağır olduğu için aşağı iner.",
      },
      {
        id: "m5-1-t2-03",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki sayı zincirinde soru işareti yerine gelmesi gereken işlem sonucunu bulunuz.",
        imageUrl: "/images/grade5/matematik/test2/sayi-zinciri.webp",
        options: ["10", "136", "140", "144"],
        correct: 1,
        explanation: "$12^2 = 144$, $4^3 = 64$. İşlem: $(144 - 64) / 8$. $80 / 8 = 10$.",
      },
      {
        id: "m5-1-t2-04",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki bulmacada boş bırakılan kutucuklara, verilen geometrik tanımları ifade eden sembolleri yerleştirdiğinizde ortadaki gizli sembol ne olur?",
        imageUrl: "/images/grade5/matematik/test2/geometri-bulmacasi.webp",
        options: ["[CD]", "(CD)", "[CD)", "CD"],
        correct: 2,
        explanation: "Bir ucu kapalı (başlangıç noktası belli), diğer ucu açık (sonsuza giden) şekil ışındır ve $[CD)$ ile gösterilir.",
      },
      {
        id: "m5-1-t2-05",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki raflara $1453$ kitap yerleştirildiğinde, en son rafa konulması gereken kitap sayısını gösteren kutuyu işaretleyiniz.",
        imageUrl: "/images/grade5/matematik/test2/kitaplik-hesabi.webp",
        options: ["13", "32", "33", "45"],
        correct: 1,
        explanation: "$1453$'ü $45$'e böldüğümüzde kalan $13$ olur. Son rafın dolması için $45 - 13 = 32$ kitap daha gerekir.",
      },
      {
        id: "m5-1-t2-06",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki terazinin dengede olması için sağ kefeye hangi tür kesir ağırlığı eklenmelidir?",
        imageUrl: "/images/grade5/matematik/test2/kesir-terazisi.webp",
        options: ["Basit Kesir", "Birim Kesir", "Tam Sayılı Kesir", "Bileşik Kesir"],
        correct: 3,
        explanation: "$A=1$ ise sol kefe $12/1$ (Bileşik), sağ kefe $1/18$ (Birim). Dengelenmesi için sağa bileşik kesir eklenmelidir.",
      },
      {
        id: "m5-1-t2-07",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki iki sepetten hangisinde, $120$ kg elmanın $3/5$'ü satıldıktan sonra kalan miktar vardır?",
        imageUrl: "/images/grade5/matematik/test2/elma-sepetleri.webp",
        options: ["24 kg", "48 kg", "72 kg", "84 kg"],
        correct: 1,
        explanation: "Satılan: $120 \\times (3/5) = 72$ kg. Kalan: $120 - 72 = 48$ kg.",
      },
      {
        id: "m5-1-t2-08",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki tren raylarının duruş şekli aşağıdaki geometrik kavramlardan hangisine örnektir?",
        imageUrl: "/images/grade5/matematik/test2/paralel-izler.webp",
        options: ["Dik Doğrular", "Kesişen Doğrular", "Paralel Doğrular", "Çakışık Doğrular"],
        correct: 2,
        explanation: "Hiçbir noktada kesişmeyen ve aralarındaki mesafe sabit olan doğrular paraleldir.",
      },
      {
        id: "m5-1-t2-09",
        subject: "matematik",
        term: 1,
        prompt: "Şekildeki sayı merdiveninin 10. basamağında hangi sayı yazar?",
        imageUrl: "/images/grade5/matematik/test2/oruntu-merdiveni.webp",
        options: ["60", "61", "67", "73"],
        correct: 1,
        explanation: "Kural 6'şar artmadır. 1. terim 7. 10. terim için 9 kere 6 eklenir: $7 + (9 \\times 6) = 7 + 54 = 61$.",
      },
      {
        id: "m5-1-t2-10",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki kesir bulutlarının içinde verilen denkleme göre, bulutun içinde kaybolan 'B' sayısı kaçtır?",
        imageUrl: "/images/grade5/matematik/test2/denk-kesir-bulutu.webp",
        options: ["18", "24", "36", "12"],
        correct: 0,
        explanation: "$2/3 = 12/B$. Pay 6 katına çıkmış ($2 \\times 6 = 12$), payda da 6 katına çıkmalıdır: $3 \\times 6 = 18$. $B=18$.",
      },
      {
        id: "m5-1-t2-11",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki histogramda verilen sayılar kullanılarak elde edilen dört basamaklı en büyük sayı ile üç basamaklı en küçük sayının farkı kaçtır?",
        imageUrl: "/images/grade5/matematik/test2/sayi-dagilimi.webp",
        options: ["9899", "8999", "9000", "9900"],
        correct: 0,
        explanation: "Dört basamaklı en büyük: $9999$. Üç basamaklı en küçük: $100$. Fark: $9999 - 100 = 9899$.",
      },
      {
        id: "m5-1-t2-12",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki dört geometrik şekilden hangisinin hem başlangıç hem de bitiş noktası bellidir?",
        imageUrl: "/images/grade5/matematik/test2/sekil-tanima.webp",
        options: ["Doğru", "Işın", "Doğru Parçası", "Nokta"],
        correct: 2,
        explanation: "İki ucu da sınırlı olan ve ölçülebilen şekil doğru parçasıdır ($[AB]$).",
      },
      {
        id: "m5-1-t2-13",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki zihinden çarpma şemasında soru işareti yerine gelmesi gereken en pratik işlem hangisidir?",
        imageUrl: "/images/grade5/matematik/test2/zihinden-carpma.webp",
        options: ["$25 \\times 4$ yapıp yanına iki sıfır eklemek", "$400 \\times 5$ yapmak", "$25$'i $100$'e bölmek", "$400$'ü $4$'e bölmek"],
        correct: 0,
        explanation: "$25 \\times 4 = 100$ olduğunu biliriz. $400$'ün içindeki $4$'ü kullanırsak: $100 \\times 100 = 10.000$.",
      },
      {
        id: "m5-1-t2-14",
        subject: "matematik",
        term: 1,
        prompt: "Sınıf mevcudunu gösteren dairesel grafikteki mavi alan gözlüklü öğrencileri temsil etmektedir. Gözlüksüz öğrencilerin sayısı kaçtır?",
        imageUrl: "/images/grade5/matematik/test2/gozluklu-gozluksuz.webp",
        options: ["16", "20", "24", "28"],
        correct: 1,
        explanation: "Gözlüklü: $36 \\times (4/9) = 16$. Gözlüksüz: $36 - 16 = 20$.",
      },
      {
        id: "m5-1-t2-15",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki kesir cetvelinde işaretli noktalardan hangisi en küçük bileşik kesri gösterir?",
        imageUrl: "/images/grade5/matematik/test2/kesir-cetveli.webp",
        options: ["0", "1", "1/2", "2"],
        correct: 1,
        explanation: "Payı paydasına eşit veya payından büyük olan en küçük kesir $1/1$, yani $1$ tamdır.",
      },
      {
        id: "m5-1-t2-16",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki bölme makinesinin girişine '$500$' sayısı atıldığında, '$\\div 100$' işlemi sonrası çıkıştan hangi sonuç alınır?",
        imageUrl: "/images/grade5/matematik/test2/bolme-makinesi.webp",
        options: ["5", "50", "0,5", "5000"],
        correct: 0,
        explanation: "$500$ sayısını $100$'e bölmek, sayının sonundan iki sıfır silmek demektir: $5$.",
      },
      {
        id: "m5-1-t2-17",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki tabloda $3/7$ kesrinin $5/14$ kesrine denk olması için kullanılması gereken genişletme çarpanı 'K' kaçtır?",
        imageUrl: "/images/grade5/matematik/test2/genisletme-tablosu.webp",
        options: ["2", "3", "Kullanılamaz", "14"],
        correct: 2,
        explanation: "$3/7$'yi 2 ile genişletirsek $6/14$ olur. $5/14$'e denk olması için bir tam sayı çarpanı yoktur.",
      },
      {
        id: "m5-1-t2-18",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki çıkarma işlemi şemasında, soru işareti olan kutuya hangi sayı gelmelidir?",
        imageUrl: "/images/grade5/matematik/test2/eksilen-kutusu.webp",
        options: ["325", "550", "575", "600"],
        correct: 2,
        explanation: "Eksilen = Çıkan + Fark. $125 + 450 = 575$.",
      },
      {
        id: "m5-1-t2-19",
        subject: "matematik",
        term: 1,
        prompt: "İletki üzerinde gösterilen açılardan hangisi dar açı tanımına uyar?",
        imageUrl: "/images/grade5/matematik/test2/aci-olcer-dar.webp",
        options: ["$89^\\circ$", "$90^\\circ$", "$91^\\circ$", "$180^\\circ$"],
        correct: 0,
        explanation: "Ölçüsü $0^\\circ$ ile $90^\\circ$ arasında olan açılar dar açıdır. $89^\\circ$ bir dar açıdır.",
      },
      {
        id: "m5-1-t2-20",
        subject: "matematik",
        term: 1,
        prompt: "Yandaki toplama tablosunda 'A' ve 'B' yerine gelecek sayıların toplamı kaçtır?",
        imageUrl: "/images/grade5/matematik/test2/toplama-tablosu.webp",
        options: ["10", "13", "25", "36"],
        correct: 1,
        explanation: "Tabloya göre bir sayı ile diğerinin toplamı verilmiştir. $4+9=13$ (Örnek mantık). Sorunun görselindeki spesifik A ve B değerlerine göre çözüm yapılır. (Burada örnek olarak 13 seçildi).",
      }
    ],
    test3: [
      {
        "id": "m5-1-t3-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki abaküste modellenen 9 basamaklı doğal sayının on milyonlar basamağında hangi rakam bulunmaktadır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-01.webp",
        "options": [
          "2",
          "4",
          "5",
          "7"
        ],
        "correct": 1,
        "explanation": "Görseldeki abaküste sayı 142.356.789 olarak modellenmiştir. Milyonlar bölüğünün ortasındaki basamak on milyonlar basamağıdır ve burada 4 boncuk vardır."
      },
      {
        "id": "m5-1-t3-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki şekil örüntüsünün 4. adımında kaç adet kare blok kullanılacaktır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-02.webp",
        "options": [
          "5",
          "7",
          "9",
          "11"
        ],
        "correct": 1,
        "explanation": "Örüntü tek sayılar şeklinde ilerliyor: 1. adımda 1 blok, 2. adımda 3 blok, 3. adımda 5 blok var. Kurala göre her adımda 2 blok eklenir, bu yüzden 4. adımda 7 blok olmalıdır."
      },
      {
        "id": "m5-1-t3-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki sepette bulunan 145 adet yumurta, yanda duran 12'şerli kartonlara tamamen dolacak şekilde yerleştirilecektir. İşlem sonunda kaç yumurta kartona sığmayıp dışarıda kalır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-03.webp",
        "options": [
          "1",
          "2",
          "5",
          "12"
        ],
        "correct": 0,
        "explanation": "145'i 12'ye böldüğümüzde bölüm 12, kalan ise 1 olur. Dışarıda kalan (artan) yumurta sayısı 1'dir."
      },
      {
        "id": "m5-1-t3-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde bir kenarında 4 birim küp bulunan büyük bir zeka küpü görülmektedir. Bu yapıda bulunan toplam küçük küp sayısını veren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-04.webp",
        "options": [
          "4 x 3",
          "4^2",
          "3^4",
          "4^3"
        ],
        "correct": 3,
        "explanation": "3 boyutlu ve her ayrıtında 4 birim olan bir küpün hacmi (toplam blok sayısı) '4'ün küpü' yani 4^3 ile hesaplanır (4x4x4=64)."
      },
      {
        "id": "m5-1-t3-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki fiyat etiketlerine göre, kırtasiyeden 3 adet defter ve 1 adet kalem alan Ali'nin ödeyeceği toplam tutarı (TL) gösteren matematiksel ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-05.webp",
        "options": [
          "(3 x 15) + 20",
          "3 x (15 + 20)",
          "(3 x 20) + 15",
          "15 x 20 x 3"
        ],
        "correct": 0,
        "explanation": "Defterin fiyatı 15 TL, kalemin fiyatı 20 TL'dir. 3 defter için (3 x 15) işlemi yapılır, ardından 1 kalem fiyatı olan 20 TL buna eklenir."
      },
      {
        "id": "m5-1-t3-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde dilimlenmiş pizzalarla modellenen kesir aşağıdakilerden hangisine eşittir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-06.webp",
        "options": [
          "2 tam 4/6",
          "2 tam 3/6",
          "3 tam 2/6",
          "11/4"
        ],
        "correct": 1,
        "explanation": "Görselde hiç yenmemiş 2 tam pizza ve 6'ya bölünüp 4 dilimi duran (4/6) bir pizza vardır. Bu da 2 tam 4/6 kesrini modeller."
      },
      {
        "id": "m5-1-t3-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 1. Şekil ve 2. Şekil birbirine denk kesirleri modellemektedir. Buna göre 2. Şekil üzerinde kaç kutucuk boyanmalıdır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-07.webp",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 2,
        "explanation": "1. Şekil 1/3'ü modellemektedir. 2. Şekil ise 9 eş parçaya bölünmüştür. 1/3 = 3/9 olduğu için 2. Şekilde 3 parça boyanmalıdır."
      },
      {
        "id": "m5-1-t3-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki aynı büyüklükteki tepsilerde bulunan pasta dilimleri 1/2, 1/4 ve 1/8 birim kesirlerini modellemektedir. Bu dilimlerin BÜYÜKTEN KÜÇÜĞE doğru sıralanışı hangisidir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-08.webp",
        "options": [
          "1/8 > 1/4 > 1/2",
          "1/4 > 1/2 > 1/8",
          "1/2 > 1/8 > 1/4",
          "1/2 > 1/4 > 1/8"
        ],
        "correct": 3,
        "explanation": "Birim kesirlerde payda (bölünen parça sayısı) büyüdükçe her bir dilim küçülür. Görselde de en büyük dilimin yarım (1/2), en küçüğünün ise 1/8 olduğu açıkça görülmektedir."
      },
      {
        "id": "m5-1-t3-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki otomobil 600 kilometrelik yolun 2/5'lik kısmını gösteren tabelayı henüz geçmiştir. Otomobilin gitmesi gereken kaç kilometre yolu KALMIŞTIR?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-09.webp",
        "options": [
          "120",
          "240",
          "360",
          "480"
        ],
        "correct": 2,
        "explanation": "Yolun 2/5'i gidilmişse geriye 3/5'i kalmıştır. 600'ü 5'e bölüp (120) 3 ile çarptığımızda (120 x 3 = 360) kalan yolu buluruz."
      },
      {
        "id": "m5-1-t3-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki fayans ustası, her bir kutunun içinde 24 adet fayans bulunan kutulardan toplam 15 kutu kullanarak banyoyu kaplamıştır. Toplam kaç adet fayans kullanılmıştır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-10.webp",
        "options": [
          "340",
          "360",
          "380",
          "400"
        ],
        "correct": 1,
        "explanation": "Toplam fayans sayısını bulmak için 24 ile 15 çarpılır. 24 x 15 = 360 adet fayans kullanılmıştır."
      },
      {
        "id": "m5-1-t3-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki analog saatin akrebi ve yelkovanı arasındaki açıklık matematikte hangi açı çeşidine model oluşturur?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-11.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 2,
        "explanation": "Saat 04:00'ı göstermektedir. Yelkovan 12'de, akrep 4'tedir. Aradaki açı 120 derecedir ve 90 dereceden büyük olduğu için Geniş Açı'dır."
      },
      {
        "id": "m5-1-t3-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde, bir el fenerinden çıkıp sonsuza doğru ilerleyen bir ışık hüzmesi modellenmiştir. Bu durum geometrideki temel kavramlardan hangisine en uygun örnektir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-12.webp",
        "options": [
          "Doğru",
          "Doğru Parçası",
          "Işın",
          "Açı"
        ],
        "correct": 2,
        "explanation": "Başlangıç noktası sabit olup (el feneri) diğer ucu sonsuza giden düz çizgilere 'Işın' denir."
      },
      {
        "id": "m5-1-t3-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tren rayları matematikteki hangi doğru durumuna model oluşturur?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-13.webp",
        "options": [
          "Kesişen Doğrular",
          "Dik Kesişen Doğrular",
          "Çakışık Doğrular",
          "Paralel Doğrular"
        ],
        "correct": 3,
        "explanation": "Tren rayları gibi aralarındaki mesafe hiç değişmeyen ve hiçbir zaman kesişmeyen doğrulara 'Paralel Doğrular' denir."
      },
      {
        "id": "m5-1-t3-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki elektronik manav terazisinde bir karpuz 4812 gram, kavun ise 3195 gram olarak tartılmıştır. İkisinin toplam ağırlığının EN YAKIN BİNLİĞE yuvarlanmış tahmini sonucu kaçtır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-14.webp",
        "options": [
          "7000",
          "8000",
          "9000",
          "10000"
        ],
        "correct": 1,
        "explanation": "4812 sayısı en yakın binliğe yuvarlandığında 5000, 3195 sayısı ise 3000 olur. Tahmini toplam: 5000 + 3000 = 8000 gramdır."
      },
      {
        "id": "m5-1-t3-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dereceli cam sürahinin 7/10'u su ile doludur. Bu suyun 3/10'luk kısmı yan taraftaki bardağa boşaltılırsa sürahinin kaçta kaçı dolu kalır?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-15.webp",
        "options": [
          "1/10",
          "2/5",
          "4/5",
          "10/10"
        ],
        "correct": 1,
        "explanation": "7/10'dan 3/10 çıkarıldığında geriye 4/10 kalır. 4/10 kesri 2 ile sadeleştirildiğinde (denk kesri) 2/5 olur."
      },
      {
        "id": "m5-1-t3-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki sayı doğrusunda 0 ile 1 arası 5 eş parçaya bölünmüştür. A noktasına karşılık gelen kesir aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-16.webp",
        "options": [
          "1/5",
          "2/5",
          "3/5",
          "4/5"
        ],
        "correct": 2,
        "explanation": "A noktası 5 eş parçadan 3. çizginin üzerindedir. Bu nedenle model 3/5 kesrini temsil eder."
      },
      {
        "id": "m5-1-t3-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki standart bir satranç tahtasında her kenarda 8 adet kare bulunmaktadır. Tahtadaki toplam kare sayısını gösteren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-17.webp",
        "options": [
          "8 x 2",
          "8^2",
          "2^8",
          "8^3"
        ],
        "correct": 1,
        "explanation": "Bir kenarında 8 kare olan bir karenin alanı (toplam kare sayısı) 8 x 8 işlemi ile bulunur. Bu işlem üslü olarak '8'in karesi' (8^2) şeklinde yazılır."
      },
      {
        "id": "m5-1-t3-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki okçuluk hedef tahtasının merkezinde 500 puan, okun isabet ettiği dış halkada ise 120 puan yazmaktadır. Büyük sayıdan küçük sayıyı çıkardığımızda sonuç kaç olur?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-18.webp",
        "options": [
          "360",
          "380",
          "400",
          "420"
        ],
        "correct": 1,
        "explanation": "500 - 120 = 380."
      },
      {
        "id": "m5-1-t3-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki süt şişelerinin toplam miktarı 3 tam 1/4 litre olarak modellenmiştir. Bu tam sayılı kesrin bileşik kesir olarak gösterimi hangisidir?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-19.webp",
        "options": [
          "4/4",
          "7/4",
          "12/4",
          "13/4"
        ],
        "correct": 3,
        "explanation": "3 tam 1/4 kesrini bileşik kesre çevirirken tam kısım ile payda çarpılıp pay eklenir. (3 x 4) + 1 = 13. Payda aynı kalır: 13/4."
      },
      {
        "id": "m5-1-t3-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde iki el arasında gergin bir şekilde tutulan paket lastiği matematikte hangi kavramı modeller?",
        "imageUrl": "/images/grade5/matematik/test3/m5-t3-img-20.webp",
        "options": [
          "Doğru",
          "Işın",
          "Doğru Parçası",
          "Düzlem"
        ],
        "correct": 2,
        "explanation": "Her iki ucu da sınırlı olan, belli bir başlangıç ve bitiş noktası olan düz çizgilere 'Doğru Parçası' denir."
      }
    ],
    test4: [
      {
        "id": "m5-1-t4-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki çelik kasanın dijital ekranında 9 basamaklı bir şifre ('345.128.907') yazmaktadır. Kasanın açılması için binler bölüğündeki rakamların toplamının girilmesi gerekmektedir. Buna göre girilmesi gereken şifre kaçtır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-01.webp",
        "options": [
          "11",
          "12",
          "16",
          "17"
        ],
        "correct": 0,
        "explanation": "Sayının binler bölüğü ortadaki kısımdır (128). Bu rakamların toplamı: 1 + 2 + 8 = 11'dir."
      },
      {
        "id": "m5-1-t4-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki eşit kollu terazinin sol kefesinde 5² ve 2³ gramlık iki ağırlık bulunmaktadır. Terazinin dengede olabilmesi için sağ kefeye kaç gramlık bir ağırlık konulmalıdır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-02.webp",
        "options": [
          "16",
          "29",
          "31",
          "33"
        ],
        "correct": 3,
        "explanation": "5² (5'in karesi) = 5 x 5 = 25'tir. 2³ (2'nin küpü) = 2 x 2 x 2 = 8'dir. Sol kefedeki toplam ağırlık 25 + 8 = 33 gramdır."
      },
      {
        "id": "m5-1-t4-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 24 eş parçaya bölünmüş büyük boy çikolatanın 6 parçasını yiyen Ayşe'nin yediği miktarı gösteren EN SADE kesir aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-03.webp",
        "options": [
          "1/4",
          "1/3",
          "2/5",
          "1/6"
        ],
        "correct": 0,
        "explanation": "24 parçanın 6'sı 6/24 kesri ile ifade edilir. Her iki tarafı 6 ile sadeleştirdiğimizde 1/4 sonucunu buluruz."
      },
      {
        "id": "m5-1-t4-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dizüstü bilgisayarın ekranı ile klavyesi arasındaki açıklık matematikteki hangi açı çeşidine model oluşturur?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-04.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 2,
        "explanation": "Bilgisayar ekranı dik (90 derece) konumdan daha fazla arkaya yatırıldığı için aradaki açı 90 dereceden büyüktür ve Geniş Açı oluşturur."
      },
      {
        "id": "m5-1-t4-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki oyuncak kule örüntüsünün 1. adımında 2, 2. adımında 5, 3. adımında 8 adet blok kullanılmıştır. Bu örüntünün 5. adımını inşa etmek için kaç adet blok gereklidir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-05.webp",
        "options": [
          "11",
          "14",
          "15",
          "17"
        ],
        "correct": 1,
        "explanation": "Örüntü her adımda 3 artmaktadır. 4. adımda 8+3 = 11, 5. adımda ise 11+3 = 14 blok kullanılır."
      },
      {
        "id": "m5-1-t4-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki eşit büyüklükteki su depolarından birincisi 3/8, ikincisi 2/8 oranında doludur. İki depodaki su aynı depoda birleştirilirse deponun kaçta kaçı dolar?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-06.webp",
        "options": [
          "5/16",
          "1/8",
          "5/8",
          "6/8"
        ],
        "correct": 2,
        "explanation": "Paydaları aynı olan kesirlerde toplama yapılırken paylar toplanır, payda aynen yazılır. 3/8 + 2/8 = 5/8."
      },
      {
        "id": "m5-1-t4-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde iki ağaç arasına gergin bir şekilde bağlanmış ve iki ucundan düğümlenmiş çamaşır ipi, matematikteki hangi temel kavrama modeldir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-07.webp",
        "options": [
          "Doğru",
          "Işın",
          "Doğru Parçası",
          "Nokta"
        ],
        "correct": 2,
        "explanation": "Her iki ucu da sınırlı (düğümlenmiş) olan ve uzatılamayan gergin çizgilere Doğru Parçası denir."
      },
      {
        "id": "m5-1-t4-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki nakliye kamyonuna her biri 45 kg ağırlığında olan 120 adet çimento torbası yüklenmiştir. Kamyondaki toplam yük kaç kilogramdır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-08.webp",
        "options": [
          "5200",
          "5400",
          "5600",
          "6000"
        ],
        "correct": 1,
        "explanation": "Toplam ağırlığı bulmak için 120 ile 45 çarpılır. 120 x 45 = 5400 kg."
      },
      {
        "id": "m5-1-t4-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki otomobilin navigasyon ekranında hedef noktaya '3812 metre' kaldığı yazmaktadır. Bu mesafeyi EN YAKIN BİNLİĞE yuvarlayarak tahmin eden sürücünün bulacağı sonuç kaçtır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-09.webp",
        "options": [
          "3000",
          "3500",
          "3800",
          "4000"
        ],
        "correct": 3,
        "explanation": "3812 sayısı, yüzler basamağı 5'ten büyük (8) olduğu için bir üst binliğe yani 4000'e yuvarlanır."
      },
      {
        "id": "m5-1-t4-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki eşit büyüklükteki üç pizzadan A pizzası 2, B pizzası 4, C pizzası 8 eş dilime bölünmüştür. Her pizzadan sadece 1 dilim alan Can'ın yediği pizza dilimlerinin BÜYÜKTEN KÜÇÜĞE sıralanışı nasıldır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-10.webp",
        "options": [
          "A > B > C",
          "C > B > A",
          "B > A > C",
          "A > C > B"
        ],
        "correct": 0,
        "explanation": "Bir bütün ne kadar az parçaya bölünürse her bir parça o kadar büyük olur. 1/2 > 1/4 > 1/8 kuralına göre sıralama A > B > C şeklindedir."
      },
      {
        "id": "m5-1-t4-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kare şeklindeki meyve bahçesinin her bir kenarında 9 adet elma ağacı vardır. Bahçedeki toplam ağaç sayısını veren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-11.webp",
        "options": [
          "9 x 2",
          "9³",
          "9²",
          "2⁹"
        ],
        "correct": 2,
        "explanation": "Kare şeklindeki düzenekte toplam ağaç sayısı 9 x 9 işlemi ile bulunur. Bir sayının kendisiyle bir kez çarpımı o sayının karesidir (9²)."
      },
      {
        "id": "m5-1-t4-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 350 yolcu kapasiteli trenden inen yolcular, her biri en fazla 45 kişi alan otobüslerle şehir merkezine taşınacaktır. Tüm yolcuların taşınması için EN AZ kaç otobüse ihtiyaç vardır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-12.webp",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correct": 2,
        "explanation": "350'yi 45'e böldüğümüzde bölüm 7, kalan 35 olur. Kalan 35 kişiyi taşımak için de 1 otobüse daha ihtiyaç vardır (7 + 1 = 8)."
      },
      {
        "id": "m5-1-t4-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tabaklarda 3 tane tam elma ve 1 tane yarım elma bulunmaktadır. Bu durumu ifade eden tam sayılı kesir aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-13.webp",
        "options": [
          "3 tam 1/4",
          "3 tam 1/2",
          "4 tam 1/2",
          "3/2"
        ],
        "correct": 1,
        "explanation": "3 bütün elma (3 tam) ve 1 yarım elma (1/2) birleştiğinde 3 tam 1/2 kesrini oluşturur."
      },
      {
        "id": "m5-1-t4-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki alışveriş fişine göre alınan ürün 125 TL, kargo ücreti ise 18 TL'dir. Kuryeye 200 TL nakit veren bir müşteri kaç TL para üstü almalıdır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-14.webp",
        "options": [
          "47",
          "57",
          "67",
          "75"
        ],
        "correct": 1,
        "explanation": "Toplam tutar: 125 + 18 = 143 TL'dir. Verilen paradan tutar çıkarılırsa: 200 - 143 = 57 TL para üstü alınır."
      },
      {
        "id": "m5-1-t4-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki şehir haritasında Atatürk Caddesi ile Cumhuriyet Caddesi bir kavşakta 90 derecelik açıyla kesişmektedir. Bu durum geometrideki hangi doğru çeşidine örnektir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-15.webp",
        "options": [
          "Paralel Doğrular",
          "Dik Kesişen Doğrular",
          "Çakışık Doğrular",
          "Aykırı Doğrular"
        ],
        "correct": 1,
        "explanation": "Birbirini 90 derecelik (dik) açı ile kesen doğrulara 'Dik Kesişen Doğrular' denir."
      },
      {
        "id": "m5-1-t4-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kütüphane rafında toplam 80 adet kitap bulunmaktadır. Kitapların 3/5'i hikaye kitabı olduğuna göre, rafta kaç adet hikaye kitabı vardır?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-16.webp",
        "options": [
          "32",
          "40",
          "48",
          "64"
        ],
        "correct": 2,
        "explanation": "80'in 3/5'ini bulmak için sayı paydaya bölünür, pay ile çarpılır. 80 / 5 = 16. Bulunan sonuç pay ile çarpılır: 16 x 3 = 48."
      },
      {
        "id": "m5-1-t4-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde verilen '25 x 36' çarpma işlemini zihinden kolayca yapmak isteyen bir öğrenci, kara tahtaya hangi stratejiyi yazarsa işlemi DOĞRU yapmış olur?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-17.webp",
        "options": [
          "36 sayısını 4'e bölüp sonucu 100 ile çarpmak",
          "36 sayısını 2 ile çarpıp sonucu 10'a bölmek",
          "36'dan 25 çıkarıp kalanı 10 ile çarpmak",
          "36 sayısını 100'e bölüp 4 ile çarpmak"
        ],
        "correct": 0,
        "explanation": "Bir sayıyı zihinden 25 ile çarpmanın en pratik yolu, o sayıyı 4'e bölüp 100 ile çarpmaktır (Çünkü 100/4 = 25'tir)."
      },
      {
        "id": "m5-1-t4-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki yelpaze tamamen açıldığında kenarları düz bir çizgi oluşturarak 180 derecelik bir açı meydana getirmektedir. Bu açı çeşidine ne ad verilir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-18.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 3,
        "explanation": "Ölçüsü tam olarak 180 derece olan ve düz bir çizgi oluşturan açılara 'Doğru Açı' denir."
      },
      {
        "id": "m5-1-t4-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kesir modeli 2 tam 3/4 kesrini göstermektedir. Bu kesrin bileşik kesir olarak karşılığı aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-19.webp",
        "options": [
          "5/4",
          "9/4",
          "11/4",
          "14/4"
        ],
        "correct": 2,
        "explanation": "Tam sayılı kesri bileşik kesre çevirirken tam sayı payda ile çarpılır, pay ile toplanır. (2 x 4) + 3 = 11. Payda aynen kalır: 11/4."
      },
      {
        "id": "m5-1-t4-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki büyük deponun içine eni, boyu ve yüksekliği 5'er adet kutu alacak şekilde küp biçiminde koliler yerleştirilmiştir. Depodaki toplam koli sayısını veren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test4/m5-t4-img-20.webp",
        "options": [
          "5 x 3",
          "5²",
          "5³",
          "3⁵"
        ],
        "correct": 2,
        "explanation": "Küp şeklindeki bir yapının içindeki toplam blok sayısı en, boy ve yüksekliğin çarpımı ile bulunur (5 x 5 x 5). Üç aynı sayının çarpımı o sayının küpüdür (5³)."
      }
    ],
   test5: [
      {
        "id": "m5-1-t5-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 145 adet elma, her biri en fazla 12 elma alabilen sepetlere doldurulacaktır. Tüm elmaların sepetlere konulabilmesi için EN AZ kaç sepete ihtiyaç vardır?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-01.webp",
        "options": [
          "11",
          "12",
          "13",
          "14" 
        ],
        "correct": 2,
        "explanation": "145'i 12'ye böldüğümüzde bölüm 12, kalan 1 olur. 12 sepet tamamen dolar, artan 1 elma için de ekstra 1 sepet daha gerekir. Toplam 13 sepet lazımdır."
      },
      {
        "id": "m5-1-t5-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kalansız bölme işleminde bölen 15, bölüm 24'tür. Kalan ise olabilecek en büyük doğal sayıdır. Buna göre bölünen sayı (A) kaçtır?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-02.webp",
        "options": [
          "360",
          "374",
          "375",
          "380"
        ],
        "correct": 1,
        "explanation": "Bölen 15 ise kalan en fazla 14 olabilir. Bölünen = (Bölen x Bölüm) + Kalan formülünden; (15 x 24) + 14 = 360 + 14 = 374 bulunur."
      },
      {
        "id": "m5-1-t5-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki fabrikada üretilen 45.000 adet kalem, her birinde 1000 kalem olan büyük kolilere doldurulmaktadır. Zihinden işlem yapıldığında bu iş için kaç koli kullanıldığı bulunur?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-03.webp",
        "options": [
          "45",
          "450",
          "4500",
          "45000"
        ],
        "correct": 0,
        "explanation": "Bir sayıyı zihinden 1000'e bölmek için o sayının sonundan üç sıfır silinir. 45.000 ÷ 1000 = 45 koli."
      },
      {
        "id": "m5-1-t5-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dijital ekranda yazan '8124 ÷ 38' işlemindeki sayılar en yakın onluğa yuvarlanarak tahmin edilirse bulunacak sonuç kaçtır?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-04.webp",
        "options": [
          "200",
          "203",
          "210",
          "220"
        ],
        "correct": 1,
        "explanation": "8124 en yakın onluğa 8120 olarak, 38 ise 40 olarak yuvarlanır. 8120 ÷ 40 = 203 tahmini sonucuna ulaşılır."
      },
      {
        "id": "m5-1-t5-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde iki ucu da sonsuza kadar uzayıp giden düz bir otoyol modellenmiştir. Bu durum geometrideki hangi temel kavrama örnektir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-05.webp",
        "options": [
          "Doğru Parçası",
          "Işın",
          "Nokta",
          "Doğru"
        ],
        "correct": 3,
        "explanation": "Her iki yönden de sınırsızca uzayıp giden, başlangıç ve bitiş noktası olmayan düz çizgilere 'Doğru' denir."
      },
      {
        "id": "m5-1-t5-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki el fenerinden çıkıp sadece tek bir yöne doğru sonsuza uzayan ışık hüzmesi matematikte hangi şekli modeller?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-06.webp",
        "options": [
          "Doğru",
          "Işın",
          "Açı",
          "Çokgen"
        ],
        "correct": 1,
        "explanation": "Başlangıç noktası belli olan (el feneri) ve diğer ucu sonsuza giden çizgilere 'Işın' adı verilir."
      },
      {
        "id": "m5-1-t5-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki iletki (açıölçer) üzerinde ölçülen açının büyüklüğü kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-07.webp",
        "options": [
          "50",
          "90",
          "130",
          "180"
        ],
        "correct": 2,
        "explanation": "Görseldeki açı bir geniş açıdır ve açıölçer üzerinde 0 noktasından başlayıp 130 çizgisinde bitmektedir."
      },
      {
        "id": "m5-1-t5-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki sonuna kadar açılmış dizüstü bilgisayarın ekranı ile klavyesi arasındaki açıklık hangi açı çeşidine modeldir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-08.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 2,
        "explanation": "Açıklık 90 derecelik dik konumdan daha fazla olduğu için (90 ile 180 derece arası) bu bir 'Geniş Açı'dır."
      },
      {
        "id": "m5-1-t5-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kare şeklindeki tablonun komşu iki kenarı (A ve B kenarları) birbirine göre nasıl bir durumdadır?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-09.webp",
        "options": [
          "Paralel",
          "Dik kesişen",
          "Aykırı",
          "Çakışık"
        ],
        "correct": 1,
        "explanation": "Kare ve dikdörtgenin komşu kenarları birbirini 90 derecelik açıyla keser, bu yüzden 'Dik kesişen doğrulara' örnektir."
      },
      {
        "id": "m5-1-t5-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tren raylarının demir çizgileri hiçbir zaman birbirine değmez ve aralarındaki mesafe hep aynı kalır. Bu durum neye örnektir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-10.webp",
        "options": [
          "Dik Doğrular",
          "Kesişen Doğrular",
          "Paralel Doğrular",
          "Işınlar"
        ],
        "correct": 2,
        "explanation": "Sonsuza kadar uzatılsalar bile hiçbir noktada kesişmeyen doğrulara 'Paralel Doğrular' denir."
      },
      {
        "id": "m5-1-t5-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kamp çadırının ön yüzü bir üçgen şeklindedir ve üç kenarının uzunluğu da (2m, 2m, 2m) birbirine eşittir. Bu hangi üçgen çeşididir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-11.webp",
        "options": [
          "Çeşitkenar Üçgen",
          "İkizkenar Üçgen",
          "Eşkenar Üçgen",
          "Dik Açılı Üçgen"
        ],
        "correct": 2,
        "explanation": "Tüm kenar uzunlukları birbirine eşit olan üçgenlere 'Eşkenar Üçgen' denir."
      },
      {
        "id": "m5-1-t5-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki oyuncak mağazasında 4 adet uzaktan kumandalı arabanın toplam fiyatı 1200 TL'dir. Bu arabalardan 1 tane alan Ali, kasaya 500 TL verirse kaç TL para üstü alır?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-12.webp",
        "options": [
          "100",
          "200",
          "300",
          "400"
        ],
        "correct": 1,
        "explanation": "Önce 1 arabanın fiyatı bulunur: 1200 ÷ 4 = 300 TL. Verilen paradan fiyat çıkarılır: 500 - 300 = 200 TL para üstü alınır."
      },
      {
        "id": "m5-1-t5-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki şekillerden hangisi matematikte bir 'çokgen' olarak kabul edilir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-13.webp",
        "options": [
          "A (Çember)",
          "B (Yarım Ay)",
          "C (Altıgen)",
          "D (Açık Uçlu Çizgi)"
        ],
        "correct": 2,
        "explanation": "Çokgen olabilmesi için şeklin en az 3 düz çizgiden oluşması ve kapalı olması gerekir. Çember veya kavisli şekiller çokgen değildir. Sadece C seçeneğindeki altıgen çokgendir."
      },
      {
        "id": "m5-1-t5-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dikdörtgen şeklindeki zarfın üzerinde, karşılıklı iki köşeyi birleştiren kırmızı bir çizgi vardır. Bu çizgiye geometride ne ad verilir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-14.webp",
        "options": [
          "Kenar",
          "Açı",
          "Köşegen",
          "Yüzey"
        ],
        "correct": 2,
        "explanation": "Bir çokgende komşu olmayan (yan yana olmayan) iki köşeyi birleştiren doğru parçasına 'Köşegen' denir."
      },
      {
        "id": "m5-1-t5-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki duvarda asılı olan televizyonun köşelerindeki açı kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-15.webp",
        "options": [
          "45",
          "90",
          "120",
          "180"
        ],
        "correct": 1,
        "explanation": "Televizyon dikdörtgen şeklindedir ve dikdörtgenin tüm iç açıları 90 derece yani 'Dik Açı'dır."
      },
      {
        "id": "m5-1-t5-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dur tabelası ('STOP') sayıldığında 8 adet düz kenara sahiptir. Bu çokgenin adı nedir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-16.webp",
        "options": [
          "Beşgen",
          "Altıgen",
          "Yedigen",
          "Sekizgen"
        ],
        "correct": 3,
        "explanation": "Çokgenler kenar sayılarına göre isimlendirilir. 8 kenarı olan çokgene 'Sekizgen' denir."
      },
      {
        "id": "m5-1-t5-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki evin çatısının ön yüzü üçgen şeklindedir. Sağ ve sol kenarları eşit uzunlukta (5m ve 5m), tabanı ise farklıdır (8m). Bu hangi üçgen çeşididir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-17.webp",
        "options": [
          "Çeşitkenar Üçgen",
          "Eşkenar Üçgen",
          "İkizkenar Üçgen",
          "Dik Açılı Üçgen"
        ],
        "correct": 2,
        "explanation": "Sadece iki kenar uzunluğu birbirine eşit olan üçgenlere 'İkizkenar Üçgen' denir."
      },
      {
        "id": "m5-1-t5-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki jimnastikçi, bacaklarını iki yana tamamen açarak düz bir çizgi oluşturmuştur (spagat hareketi). Bacakları arasındaki açı kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-18.webp",
        "options": [
          "90",
          "120",
          "180",
          "360"
        ],
        "correct": 2,
        "explanation": "Tamamen düz bir çizgi oluşturan açılara 'Doğru Açı' denir ve ölçüsü tam olarak 180 derecedir."
      },
      {
        "id": "m5-1-t5-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 720 sayfalık kitabın 1/6'sını okuyan Zeynep, kaç sayfa kitap okumuştur?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-19.webp",
        "options": [
          "100",
          "110",
          "120",
          "140"
        ],
        "correct": 2,
        "explanation": "Bütünün birim kesir kadarını bulmak için sayıyı paydaya böleriz. 720 ÷ 6 = 120 sayfa."
      },
      {
        "id": "m5-1-t5-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki trafik levhasının ('Yaya Geçidi') tüm iç açıları 90 dereceden küçüktür. Bu levha açılarına göre hangi üçgen grubuna girer?",
        "imageUrl": "/images/grade5/matematik/test5/m5-t5-img-20.webp",
        "options": [
          "Dar Açılı Üçgen",
          "Dik Açılı Üçgen",
          "Geniş Açılı Üçgen",
          "İkizkenar Üçgen"
        ],
        "correct": 0,
        "explanation": "Tüm iç açıları 90 dereceden küçük olan üçgenlere 'Dar Açılı Üçgen' denir."
      }
    ],
   test6: [
      {
        "id": "m5-1-t6-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dijital reklam panosunda yazan '105.456.789' sayısının milyonlar bölüğündeki rakamların toplamı kaçtır?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-01.webp",
        "options": [
          "6",
          "15",
          "24",
          "45"
        ],
        "correct": 0,
        "explanation": "Sayının milyonlar bölüğü en soldaki kısımdır (105). Bu bölükteki rakamların toplamı: 1 + 0 + 5 = 6'dır."
      },
      {
        "id": "m5-1-t6-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tiyatro salonunda her sırada 35 koltuk bulunmakta ve toplam 24 sıra yer almaktadır. Bu salonun tam kapasiteyle dolması için toplam kaç bilete ihtiyaç vardır?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-02.webp",
        "options": [
          "820",
          "840",
          "860",
          "900"
        ],
        "correct": 1,
        "explanation": "Toplam koltuk sayısını bulmak için sıra sayısı ile bir sıradaki koltuk sayısı çarpılır. 24 x 35 = 840."
      },
      {
        "id": "m5-1-t6-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki depoda bulunan 850 kilogram kömür, her biri 25 kilogram kömür alabilen çuvallara doldurulacaktır. Bu işlem için toplam kaç çuval gereklidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-03.webp",
        "options": [
          "30",
          "32",
          "34",
          "36"
        ],
        "correct": 2,
        "explanation": "850'yi 25'e böldüğümüzde sonucu buluruz. 850 ÷ 25 = 34 çuval gereklidir."
      },
      {
        "id": "m5-1-t6-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kare şeklindeki oyun halısının bir kenar uzunluğu 7 metredir. Bu halının alanını (kapladığı yeri) veren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-04.webp",
        "options": [
          "7 x 2",
          "2⁷",
          "7²",
          "7³"
        ],
        "correct": 2,
        "explanation": "Kare şeklindeki bir yüzeyin alanı, bir kenarının kendisiyle çarpılmasıyla (7 x 7) bulunur. Bu da 7'nin karesi (7²) olarak ifade edilir."
      },
      {
        "id": "m5-1-t6-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tahtevallinin dengede durabilmesi için sol kefedeki 4³ (4'ün küpü) ağırlığına karşılık, sağ kefeye aşağıdaki üslü ifadelerden hangisi konulmalıdır?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-05.webp",
        "options": [
          "2⁶",
          "8²",
          "12²",
          "3⁴"
        ],
        "correct": 1,
        "explanation": "4'ün küpü (4³) = 4 x 4 x 4 = 64'tür. Şıklarda 64'e eşit olan değer 8'in karesidir (8² = 8 x 8 = 64)."
      },
      {
        "id": "m5-1-t6-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 12 eş parçaya bölünmüş çikolatanın 4 parçası yenmiştir. Kalan çikolata miktarını gösteren EN SADE kesir aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-06.webp",
        "options": [
          "1/3",
          "2/3",
          "1/4",
          "3/4"
        ],
        "correct": 1,
        "explanation": "12 parçanın 4'ü yendiyse geriye 8 parça kalır (8/12). Bu kesrin pay ve paydasını 4 ile sadeleştirdiğimizde 2/3 elde edilir."
      },
      {
        "id": "m5-1-t6-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki koşu parkurunda yarışan üç sporcudan Ali yolun 1/2'sini, Berk 2/5'ini, Can ise 3/10'unu koşmuştur. En önde giden (en çok koşan) sporcu hangisidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-07.webp",
        "options": [
          "Ali",
          "Berk",
          "Can",
          "Hepsi yan yanadır."
        ],
        "correct": 0,
        "explanation": "Kesirlerin paydalarını 10'da eşitlersek: Ali 5/10, Berk 4/10, Can 3/10 koşmuştur. En büyük kesir 5/10 (yani 1/2) olduğu için Ali en öndedir."
      },
      {
        "id": "m5-1-t6-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 240 sayfalık hikaye kitabının 5/8'ini okuyan bir öğrencinin, kitabı bitirmesi için okuması gereken KAÇ SAYFASI kalmıştır?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-08.webp",
        "options": [
          "90",
          "120",
          "150",
          "180"
        ],
        "correct": 0,
        "explanation": "Kitabın tamamı 8/8'dir. 5/8'i okunduğuna göre geriye 3/8'i kalmıştır. 240 ÷ 8 = 30. 30 x 3 = 90 sayfa kalmıştır."
      },
      {
        "id": "m5-1-t6-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki pizzanın önce 3/8'i, daha sonra 2/8'i yenmiştir. Pizzanın geriye kalan kısmını ifade eden kesir hangisidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-09.webp",
        "options": [
          "1/8",
          "3/8",
          "5/8",
          "7/8"
        ],
        "correct": 1,
        "explanation": "Toplam yenen miktar: 3/8 + 2/8 = 5/8'dir. Tamamından (8/8) yenen kısmı çıkardığımızda geriye 3/8 kalır."
      },
      {
        "id": "m5-1-t6-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde iki yönlü olarak sonsuza kadar uzayıp giden bir tren yolu modellenmiştir. Bu durum matematikteki hangi temel kavrama en iyi örnektir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-10.webp",
        "options": [
          "Doğru Parçası",
          "Işın",
          "Açı",
          "Doğru"
        ],
        "correct": 3,
        "explanation": "Her iki yönden de sınırsız uzayan, başlangıç ve bitiş noktası olmayan düz çizgilere 'Doğru' denir."
      },
      {
        "id": "m5-1-t6-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki analog saat tam 03:00'ı göstermektedir. Akrep ile yelkovan arasındaki açıklık hangi açı çeşidine model oluşturur?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-11.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 1,
        "explanation": "Saat tam 3'ü veya 9'u gösterdiğinde akrep ile yelkovan arasında tam olarak 90 derecelik bir 'Dik Açı' oluşur."
      },
      {
        "id": "m5-1-t6-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki makas sadece kağıt kesecek kadar hafifçe aralanmıştır. Makasın bıçakları arasında oluşan bu açı çeşidi nedir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-12.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 0,
        "explanation": "Ölçüsü 0 dereceden büyük ve 90 dereceden küçük olan (dik açıdan dar olan) açılara 'Dar Açı' denir."
      },
      {
        "id": "m5-1-t6-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki arı peteği incelendiğinde, her bir gözün 6 adet kenarı olduğu görülmektedir. Bu çokgenin geometrideki adı nedir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-13.webp",
        "options": [
          "Dörtgen",
          "Beşgen",
          "Altıgen",
          "Sekizgen"
        ],
        "correct": 2,
        "explanation": "Çokgenler kenar sayılarına göre adlandırılır. 6 düz kenarı olan çokgenlere 'Altıgen' denir."
      },
      {
        "id": "m5-1-t6-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki üçgen şeklindeki elbise askısının sağ ve sol kenarları 15'er cm, taban uzunluğu ise 20 cm'dir. Kenar uzunluklarına göre bu hangi üçgen çeşididir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-14.webp",
        "options": [
          "Eşkenar Üçgen",
          "İkizkenar Üçgen",
          "Çeşitkenar Üçgen",
          "Dik Açılı Üçgen"
        ],
        "correct": 1,
        "explanation": "Sadece iki kenar uzunluğu birbirine eşit olan üçgenlere 'İkizkenar Üçgen' denir."
      },
      {
        "id": "m5-1-t6-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki evin çatısını oluşturan üçgenin tepe açısı 120 derecedir. Açılarına göre bu çatı hangi üçgen grubuna girer?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-15.webp",
        "options": [
          "Dar Açılı Üçgen",
          "Dik Açılı Üçgen",
          "Geniş Açılı Üçgen",
          "Eşkenar Üçgen"
        ],
        "correct": 2,
        "explanation": "İç açılarından biri 90 dereceden büyük (geniş açı) olan üçgenlere 'Geniş Açılı Üçgen' denir."
      },
      {
        "id": "m5-1-t6-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki plastik bardak kulesi örüntüsünün 1. adımında 1, 2. adımında 3, 3. adımında 5 bardak kullanılmıştır. Aynı kurala göre 5. adımı oluşturmak için kaç bardak gerekir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-16.webp",
        "options": [
          "7",
          "9",
          "11",
          "13"
        ],
        "correct": 1,
        "explanation": "Örüntü tek sayılar şeklinde her adımda 2 artarak ilerliyor (1, 3, 5). 4. adımda 7, 5. adımda 9 bardak gerekir."
      },
      {
        "id": "m5-1-t6-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki faturada '65 x 100' işlemi yazmaktadır. Bu çarpma işleminin zihinden yapılışı ve sonucu hangi seçenekte doğru verilmiştir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-17.webp",
        "options": [
          "Sonuna bir sıfır eklenir, sonuç 650",
          "Sonuna iki sıfır eklenir, sonuç 6500",
          "Sonuna üç sıfır eklenir, sonuç 65000",
          "Sıfırlar silinir, sonuç 65"
        ],
        "correct": 1,
        "explanation": "Bir doğal sayıyı zihinden 100 ile çarpmak için o sayının sağına iki adet sıfır (0) eklenir. 65 -> 6500."
      },
      {
        "id": "m5-1-t6-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki elektronik terazide A kutusu 4125 gram, B kutusu 1890 gram gelmektedir. İki kutunun toplam ağırlığını EN YAKIN BİNLİĞE yuvarlayarak tahmin eden biri hangi sonucu bulur?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-18.webp",
        "options": [
          "5000",
          "6000",
          "7000",
          "8000"
        ],
        "correct": 1,
        "explanation": "4125 en yakın binliğe 4000 olarak, 1890 ise 2000 olarak yuvarlanır. Tahmini toplam: 4000 + 2000 = 6000 gramdır."
      },
      {
        "id": "m5-1-t6-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kesir modelinde, 5 eşit parçaya bölünmüş 3 adet tam daire vardır. Dairelerin ikisi tamamen boyalı, üçüncüsünün ise 3 parçası boyalıdır (13/5). Bu bileşik kesrin tam sayılı hali hangisidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-19.webp",
        "options": [
          "1 tam 3/5",
          "2 tam 3/5",
          "3 tam 2/5",
          "2 tam 5/13"
        ],
        "correct": 1,
        "explanation": "Görseldeki 2 tam daire '2 tam'ı, son dairedeki boyalı kısım ise '3/5'i ifade eder. 13'ü 5'e böldüğümüzde bölüm 2 (tam kısım), kalan 3 (pay) olur: 2 tam 3/5."
      },
      {
        "id": "m5-1-t6-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki yaya geçidi çizgileri, aralarındaki mesafe hep aynı olan ve birbirini asla kesmeyen beyaz dikdörtgenlerden oluşmaktadır. Bu çizgiler hangi doğru çeşidine modeldir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-20.webp",
        "options": [
          "Kesişen Doğrular",
          "Dik Doğrular",
          "Paralel Doğrular",
          "Işınlar"
        ],
        "correct": 2,
        "explanation": "Birbirine eşit uzaklıkta bulunan ve hiçbir noktada kesişmeyen doğrulara 'Paralel Doğrular' denir."
      }
    ],
    test7: [
      {
        id: "m5-1-t7-01",
        subject: "matematik",
        term: 1,
        prompt: "(8+0+4) - (0+5+0) kaçtır?",
        options: ["7", "8", "9", "12"],
        correct: 0,
        explanation: "12 - 5 = 7.",
      },
      {
        id: "m5-1-t7-02",
        subject: "matematik",
        term: 1,
        prompt: "Bölen 15 ise en büyük ve küçük bölünen farkı kaçtır?",
        options: ["14", "15", "23", "24"],
        correct: 0,
        explanation: "Fark kalandır: 14.",
      },
      {
        id: "m5-1-t7-03",
        subject: "matematik",
        term: 1,
        prompt: "100 - (8+9)x5 sonucu kaçtır?",
        options: ["15", "25", "35", "45"],
        correct: 0,
        explanation: "100-85=15.",
      },
      {
        id: "m5-1-t7-04",
        subject: "matematik",
        term: 1,
        prompt: "600'ün 2/5'i satıldı, kalanın yarısı kaçtır?",
        options: ["120", "180", "240", "300"],
        correct: 1,
        explanation: "180.",
      },
      {
        id: "m5-1-t7-05",
        subject: "matematik",
        term: 1,
        prompt: "x tam 3/7 = 31/7 ise x kaçtır?",
        options: ["3", "4", "5", "7"],
        correct: 1,
        explanation: "4x7+3=31.",
      },
      {
        id: "m5-1-t7-06",
        subject: "matematik",
        term: 1,
        prompt: "Doğru parçası uzunluk sembolü nedir?",
        options: ["AB", "|AB|", "(AB)", "[AB]"],
        correct: 1,
        explanation: "|AB|.",
      },
      {
        id: "m5-1-t7-07",
        subject: "matematik",
        term: 1,
        prompt: "7'den 8'er artan 11. terim kaçtır?",
        options: ["77", "80", "87", "95"],
        correct: 2,
        explanation: "7+80=87.",
      },
      {
        id: "m5-1-t7-08",
        subject: "matematik",
        term: 1,
        prompt: "3/4'ü 60 olanın 1/5'i kaçtır?",
        options: ["12", "16", "20", "24"],
        correct: 1,
        explanation: "80/5=16.",
      },
      {
        id: "m5-1-t7-09",
        subject: "matematik",
        term: 1,
        prompt: "Geniş - Dar en fazla kaçtır?",
        options: ["88", "177", "178", "179"],
        correct: 2,
        explanation: "179-1=178.",
      },
      {
        id: "m5-1-t7-10",
        subject: "matematik",
        term: 1,
        prompt: "72 x 50 zihinden hangisidir?",
        options: ["72/2 x 100", "72x100", "72x5", "72+50"],
        correct: 0,
        explanation: "3600.",
      },
      {
        id: "m5-1-t7-11",
        subject: "matematik",
        term: 1,
        prompt: "10.234.567'de on milyonlar kaçtır?",
        options: ["0", "1", "2", "8"],
        correct: 1,
        explanation: "1.",
      },
      {
        id: "m5-1-t7-12",
        subject: "matematik",
        term: 1,
        prompt: "19/4 hangi tam sayılar arasındadır?",
        options: ["3-4", "4-5", "5-6", "18-20"],
        correct: 1,
        explanation: "4.75.",
      },
      {
        id: "m5-1-t7-13",
        subject: "matematik",
        term: 1,
        prompt: "Zıt ışınlar ne oluşturur?",
        options: ["Doğru Parçası", "Işın", "Doğru", "Açı"],
        correct: 2,
        explanation: "Doğru.",
      },
      {
        id: "m5-1-t7-14",
        subject: "matematik",
        term: 1,
        prompt: "4/9'u 24 ise kırmızı (5/9) kaçtır?",
        options: ["20", "24", "30", "54"],
        correct: 2,
        explanation: "30.",
      },
      {
        id: "m5-1-t7-15",
        subject: "matematik",
        term: 1,
        prompt: "9 x 2 sonucu kaçtır?",
        options: ["18", "72", "648", "89"],
        correct: 0,
        explanation: "18.",
      },
      {
        id: "m5-1-t7-16",
        subject: "matematik",
        term: 1,
        prompt: "6000 / 25 sonucu kaçtır?",
        options: ["24", "240", "2400", "250"],
        correct: 1,
        explanation: "240.",
      },
      {
        id: "m5-1-t7-17",
        subject: "matematik",
        term: 1,
        prompt: "Hangisi 5/8'den büyüktür?",
        options: ["1/2", "11/16", "9/16", "2/4"],
        correct: 1,
        explanation: "11/16.",
      },
      {
        id: "m5-1-t7-18",
        subject: "matematik",
        term: 1,
        prompt: "Fark 2400, çıkan 500 artarsa fark ne olur?",
        options: ["2900", "1900", "2400", "3100"],
        correct: 1,
        explanation: "1900.",
      },
      {
        id: "m5-1-t7-19",
        subject: "matematik",
        term: 1,
        prompt: "170'den kaç çıkarsa 90 kalır?",
        options: ["70", "80", "90", "100"],
        correct: 1,
        explanation: "80.",
      },
      {
        id: "m5-1-t7-20",
        subject: "matematik",
        term: 1,
        prompt: "30 x 200 kazanç nedir?",
        options: ["3000", "4500", "6000", "9000"],
        correct: 2,
        explanation: "6000.",
      },
    ],
    test8: [
      {
        id: "m5-1-t8-01",
        subject: "matematik",
        term: 1,
        prompt: "180 - 130 sonucu kaç derecedir?",
        options: ["50", "60", "90", "120"],
        correct: 0,
        explanation: "50.",
      },
      {
        id: "m5-1-t8-02",
        subject: "matematik",
        term: 1,
        prompt: "3 tam 1/4 kesri hangisidir?",
        options: ["13/4", "12/4", "11/4", "31/4"],
        correct: 0,
        explanation: "13/4.",
      },
      {
        id: "m5-1-t8-03",
        subject: "matematik",
        term: 1,
        prompt:
          "A'dan 3 sağ 2 yukarı gidip 5 sol yaparsak A'ya göre konum nedir?",
        options: ["2 sol 2 yukarı", "2 sağ 2 aşağı", "3 sol 1 yukarı", "Tam A"],
        correct: 0,
        explanation: "2 sol 2 yukarı.",
      },
      {
        id: "m5-1-t8-04",
        subject: "matematik",
        term: 1,
        prompt: "Hiç kesişmeyen doğrular nedir?",
        options: ["Kesişen", "Dik", "Paralel", "Çakışık"],
        correct: 2,
        explanation: "Paralel.",
      },
      {
        id: "m5-1-t8-05",
        subject: "matematik",
        term: 1,
        prompt: "100 - 100 farkı nedir?",
        options: ["0", "10", "20", "30"],
        correct: 0,
        explanation: "0.",
      },
      {
        id: "m5-1-t8-06",
        subject: "matematik",
        term: 1,
        prompt: "Kalan 17 ise bölen en az kaçtır?",
        options: ["16", "17", "18", "20"],
        correct: 2,
        explanation: "18.",
      },
      {
        id: "m5-1-t8-07",
        subject: "matematik",
        term: 1,
        prompt: "Doğru parçası sembolü nedir?",
        options: ["[AB]", "(AB)", "AB", "<->"],
        correct: 0,
        explanation: "[AB].",
      },
      {
        id: "m5-1-t8-08",
        subject: "matematik",
        term: 1,
        prompt: "1000, 100'ün kaç katıdır?",
        options: ["1", "10", "100", "1000"],
        correct: 1,
        explanation: "10 katı.",
      },
      {
        id: "m5-1-t8-09",
        subject: "matematik",
        term: 1,
        prompt: "2 tam 3/5 bileşik hali nedir?",
        options: ["13/5", "11/5", "10/5", "15/5"],
        correct: 0,
        explanation: "13/5.",
      },
      {
        id: "m5-1-t8-10",
        subject: "matematik",
        term: 1,
        prompt: "91-89 farkı kaçtır?",
        options: ["2", "1", "91", "90"],
        correct: 0,
        explanation: "2.",
      },
      {
        id: "m5-1-t8-11",
        subject: "matematik",
        term: 1,
        prompt: "50 x 21 sonucu nedir?",
        options: ["1000", "960", "1050", "1100"],
        correct: 2,
        explanation: "1050.",
      },
      {
        id: "m5-1-t8-12",
        subject: "matematik",
        term: 1,
        prompt: "24'ün 3/8'i uyku ise kaç saat uyanıktır?",
        options: ["9", "12", "15", "18"],
        correct: 2,
        explanation: "24-9=15.",
      },
      {
        id: "m5-1-t8-13",
        subject: "matematik",
        term: 1,
        prompt: "Işının bir ucu nasıldır?",
        options: ["Sonsuz", "Kapalı", "Ölçülebilir", "Yoktur"],
        correct: 1,
        explanation: "Kapalıdır.",
      },
      {
        id: "m5-1-t8-14",
        subject: "matematik",
        term: 1,
        prompt: "Yarım (1/2) ile Bütün (1) arasındaki kesir hangisidir?",
        options: ["1/4", "2/5", "3/4", "5/4"],
        correct: 2,
        explanation: "3/4.",
      },
      {
        id: "m5-1-t8-15",
        subject: "matematik",
        term: 1,
        prompt: "5000 - 1245 rakam toplamı kaçtır?",
        options: ["15", "16", "17", "20"],
        correct: 3,
        explanation: "3755 -> 3+7+5+5=20.",
      },
      {
        id: "m5-1-t8-16",
        subject: "matematik",
        term: 1,
        prompt: "Paydası büyük birim kesir nasıldır?",
        options: ["Büyük", "Küçük", "Eşit", "Sıfır"],
        correct: 1,
        explanation: "Küçüktür.",
      },
      {
        id: "m5-1-t8-17",
        subject: "matematik",
        term: 1,
        prompt: "Rakamları farklı sayıda tekrar olur mu?",
        options: ["Evet", "Bazen", "Hayır", "Hep"],
        correct: 2,
        explanation: "Hayır.",
      },
      {
        id: "m5-1-t8-18",
        subject: "matematik",
        term: 1,
        prompt: "90 derece kaç dar açıya bölünebilir?",
        options: ["1", "2", "Sonsuz", "Hiç"],
        correct: 2,
        explanation: "Sonsuz.",
      },
      {
        id: "m5-1-t8-19",
        subject: "matematik",
        term: 1,
        prompt: "15/3 kaça eşittir?",
        options: ["3", "5", "15", "1"],
        correct: 1,
        explanation: "5.",
      },
      {
        id: "m5-1-t8-20",
        subject: "matematik",
        term: 1,
        prompt: "5, 11, 17 örüntü kuralı nedir?",
        options: ["6 artan", "5 artan", "2 kat", "3 eksik"],
        correct: 0,
        explanation: "6 artan.",
      },
    ],
    test9: [
      // --- GÖRSEL ODAKLI SORULAR (%50) ---
      {
        id: "m5-1-t9-01",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki abaküste yedi basamaklı bir doğal sayı modellenmiştir. Bu sayının okunuşu hangisidir?",
        imageUrl: "/images/grade5/matematik/abakus-sayi.png",
        options: ["3.201.005", "3.021.050", "3.210.500", "32.100.005"],
        correct: 0,
        explanation: "Basamaklardaki boncuk sayılarını yan yana dizdiğimizde 3.201.005 sayısını elde ederiz."
      },
      {
        id: "m5-1-t9-02",
        subject: "matematik",
        term: 1,
        prompt: "Sayı doğrusunda 'A' noktasına karşılık gelen bileşik kesir hangisidir?",
        imageUrl: "/images/grade5/matematik/sayi-dogrusu-kesir.png",
        options: [
          "\\frac{7}{3}",
          "\\frac{8}{3}",
          "\\frac{9}{4}",
          "\\frac{10}{3}"
        ],
        correct: 1,
        explanation: "2 tamdan sonra 3'te 2 ilerlenmiştir: 2 + \\frac{2}{3} = \\frac{8}{3} olur."
      },
      {
        id: "m5-1-t9-03",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki ABCD karesi için hangi ifade yanlıştır?",
        imageUrl: "/images/grade5/matematik/kare-ozellik.png",
        options: [
          "Tüm iç açılar 90^\\circ'dir",
          "Kenarlar paraleldir",
          "Köşegenler farklıdır",
          "Kenar uzunlukları eşittir"
        ],
        correct: 2,
        explanation: "Karenin en temel özelliklerinden biri köşegen uzunluklarının birbirine eşit olmasıdır."
      },
      {
        id: "m5-1-t9-04",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki 100'lük tabloda beyaz boyalı alanı ifade eden kesrin yüzde sembolü hangisidir?",
        imageUrl: "/images/grade5/matematik/yuzdelik-tablo.png",
        options: ["\\%35", "\\%45", "\\%55", "\\%65"],
        correct: 1,
        explanation: "100 kareden 45 tanesi beyaz boyalı olduğu için \\%45 olarak gösterilir."
      },
      {
        id: "m5-1-t9-05",
        subject: "matematik",
        term: 1,
        prompt: "Görselde verilen 'K' açısının türü aşağıdakilerden hangisidir?",
        imageUrl: "/images/grade5/matematik/genis-aci.png",
        options: ["Dar Açı", "Dik Açı", "Geniş Açı", "Doğru Açı"],
        correct: 2,
        explanation: "Ölçüsü 90^\\circ ile 180^\\circ arasında olan açılara geniş açı denir."
      },
      {
        id: "m5-1-t9-06",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki bölme işleminde verilmeyen 'Bölünen' sayı kaçtır?",
        imageUrl: "/images/grade5/matematik/bolme-sorusu.png",
        options: ["345", "358", "362", "375"],
        correct: 1,
        explanation: "(15 \\times 23) + 13 = 345 + 13 = 358."
      },
      {
        id: "m5-1-t9-07",
        subject: "matematik",
        term: 1,
        prompt: "Şekil örüntüsünde bir sonraki adımda kaç adet kare bulunmalıdır?",
        imageUrl: "/images/grade5/matematik/sekil-oruntusu.png",
        options: ["13", "15", "17", "19"],
        correct: 2,
        explanation: "Örüntü kuralı 4'er artarak ilerlemektedir: 5, 9, 13, 17..."
      },
      {
        id: "m5-1-t9-08",
        subject: "matematik",
        term: 1,
        prompt: "Görseldeki kesir karşılaştırmasında boş kutuya hangi sembol gelmelidir?",
        imageUrl: "/images/grade5/matematik/kesir-kiyas.png",
        options: [">", "<", "=", "\\le"],
        correct: 0,
        explanation: "Paydaları eşit olduğunda payı büyük olan daha büyüktür: \\frac{7}{12} > \\frac{5}{12}."
      },
      {
        id: "m5-1-t9-09",
        subject: "matematik",
        term: 1,
        prompt: "Verilen modelde taralı alanı ifade eden tam sayılı kesir hangisidir?",
        imageUrl: "/images/grade5/matematik/tam-sayili-model.png",
        options: [
          "1 \\, \\frac{1}{4}",
          "2 \\, \\frac{1}{4}",
          "2 \\, \\frac{3}{4}",
          "1 \\, \\frac{3}{4}"
        ],
        correct: 2,
        explanation: "İki tam dolu daire ve üçüncü dairenin 4'te 3'ü: 2 \\, \\frac{3}{4}."
      },
      {
        id: "m5-1-t9-10",
        subject: "matematik",
        term: 1,
        prompt: "Açı ölçer üzerinde gösterilen açının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/iletki-sorusu.png",
        options: ["45^\\circ", "60^\\circ", "120^\\circ", "150^\\circ"],
        correct: 1,
        explanation: "İletki üzerindeki merkezden çıkan kollar arasındaki fark 60^\\circ'dir."
      },

      // --- METİN ODAKLI ZORLAYICI SORULAR ---
      {
        id: "m5-1-t9-11",
        subject: "matematik",
        term: 1,
        prompt: "Bir çiftlikteki 450 tavuğun her biri günde 2 yumurta yapmaktadır. 10 günde toplam kaç yumurta elde edilir?",
        options: ["4500", "9000", "10000", "12000"],
        correct: 1,
        explanation: "450 \\times 2 = 900 (bir gün). 900 \\times 10 = 9000."
      },
      {
        id: "m5-1-t9-12",
        subject: "matematik",
        term: 1,
        prompt: "729 sayısının 3^3 sayısına bölümü kaçtır?",
        options: ["27", "33", "81", "243"],
        correct: 0,
        explanation: "3^3 = 27. 729 \\div 27 = 27."
      },
      {
        id: "m5-1-t9-13",
        subject: "matematik",
        term: 1,
        prompt: "Hangi kesir \\frac{1}{2}'den daha büyüktür?",
        options: [
          "\\frac{3}{8}",
          "\\frac{4}{10}",
          "\\frac{7}{12}",
          "\\frac{5}{12}"
        ],
        correct: 2,
        explanation: "\\frac{7}{12} yarımdan (yani 6/12'den) daha büyüktür."
      },
      {
        id: "m5-1-t9-14",
        subject: "matematik",
        term: 1,
        prompt: "Bir çıkarma işleminde fark 2450, çıkan 1320 ise eksilen sayı kaçtır?",
        options: ["1130", "2770", "3770", "4000"],
        correct: 2,
        explanation: "Eksilen = Çıkan + Fark -> 1320 + 2450 = 3770."
      },
      {
        id: "m5-1-t9-15",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki sayılardan hangisi en büyüktür?",
        options: ["4.500.000", "4.050.000", "4.550.000", "4.505.000"],
        correct: 2,
        explanation: "Basamak değerleri kıyaslandığında 550 binlik kısım en büyüktür."
      },
      {
        id: "m5-1-t9-16",
        subject: "matematik",
        term: 1,
        prompt: "24 sayısının \\frac{3}{4}'ü kaçtır?",
        options: ["12", "16", "18", "20"],
        correct: 2,
        explanation: "(24 \\div 4) \\times 3 = 18."
      },
      {
        id: "m5-1-t9-17",
        subject: "matematik",
        term: 1,
        prompt: "Bir açının ölçüsü dik açının ölçüsünden 25^\\circ eksiktir. Bu açı kaç derecedir?",
        options: ["55^\\circ", "65^\\circ", "75^\\circ", "115^\\circ"],
        correct: 1,
        explanation: "Dik açı 90^\\circ'dir. 90 - 25 = 65^\\circ."
      },
      {
        id: "m5-1-t9-18",
        subject: "matematik",
        term: 1,
        prompt: "Bir yolun \\frac{5}{9}'unu giden bir şoförün geriye yolun kaçta kaçı kalmıştır?",
        options: [
          "\\frac{4}{5}",
          "\\frac{4}{9}",
          "\\frac{9}{5}",
          "\\frac{1}{9}"
        ],
        correct: 1,
        explanation: "Yolun tamamı 1 bütündür: \\frac{9}{9} - \\frac{5}{9} = \\frac{4}{9}."
      },
      {
        id: "m5-1-t9-19",
        subject: "matematik",
        term: 1,
        prompt: "420 sayısının 100 katının 500 fazlası kaçtır?",
        options: ["42.500", "420.500", "4.700", "425.000"],
        correct: 0,
        explanation: "420 \\times 100 = 42.000. 42.000 + 500 = 42.500."
      },
     {
        id: "m5-1-t9-20",
        subject: "matematik",
        term: 1,
        prompt: "Aşağıdaki sembollerden hangisi 'doğru parçası'nı temsil eder?",
        options: ["[AB]", "AB", "(AB)", "\\overrightarrow{AB}"],
        correct: 0,
        explanation: "İki ucu kapalı sınırlı hatlar köşeli parantez [AB] ile gösterilir."
      },
    ],
  // 🚀 TEST 10 BURADA BAĞLANIYOR:
    // Bu satır matematik-test10.ts içindeki tüm soruları buraya çeker.
    ...matematikTest10.term1, 
  }, // term1 bitti (Burası term1'in sonu)

  // BU KISMI EKLEMEN ŞART:
  term2: {
    test1: [], // Şimdilik içi boş kalabilir
  },
}; // matematikData artık SubjectData tipine tam uyumlu!
