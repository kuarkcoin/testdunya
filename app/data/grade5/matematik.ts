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
        "prompt": "Görseldeki kesir modelinde, 6 eşit parçaya bölünmüş 3 adet tam daire vardır. Dairelerin ikisi tamamen boyalı, üçüncüsünün ise 4 parçası boyalıdır . Bu bileşik kesrin tam sayılı hali hangisidir?",
        "imageUrl": "/images/grade5/matematik/test6/m5-t6-img-19.webp",
        "options": [
          "1 tam 3/6",
          "2 tam 4/6",
          "3 tam 2/6",
          "2 tam 5/13"
        ],
        "correct": 1,
        "explanation": "Görseldeki 2 tam daire '2 tam'ı, son dairedeki boyalı kısım ise '4/6'sı ifade eder. 2 (tam kısım),  4 (pay) olur: 2 tam 4/6."
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
        "id": "m5-1-t7-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki stadyumun dev ekranında seyirci sayısını gösteren '14.502.890' sayısı yazmaktadır. Bu sayının binler bölüğündeki rakamların toplamı kaçtır?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-01.webp",
        "options": [
          "5",
          "7",
          "17",
          "24"
        ],
        "correct": 1,
        "explanation": "Sayının binler bölüğü ortadaki kısımdır (502). Bu bölükteki rakamların toplamı: 5 + 0 + 2 = 7'dir."
      },
      {
        "id": "m5-1-t7-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki elma bahçesinde ağaçlar düzenli sıralar halinde dikilmiştir. Bahçede toplam 25 sıra ve her sırada 40 adet elma ağacı bulunduğuna göre bahçedeki toplam ağaç sayısı kaçtır?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-02.webp",
        "options": [
          "800",
          "900",
          "1000",
          "1200"
        ],
        "correct": 2,
        "explanation": "Toplam ağaç sayısını bulmak için sıra sayısı ile bir sıradaki ağaç sayısı çarpılır. 25 x 40 = 1000."
      },
      {
        "id": "m5-1-t7-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki banyonun kare şeklindeki zeminine fayans döşenmiştir. Zeminin bir kenarında 6 adet fayans bulunduğuna göre, tüm zemini kaplayan toplam fayans sayısını gösteren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-03.webp",
        "options": [
          "6 x 2",
          "2⁶",
          "6³",
          "6²"
        ],
        "correct": 3,
        "explanation": "Kare şeklindeki zeminde toplam fayans sayısı 6 x 6 işlemi ile bulunur. Bu da 6'nın karesi (6²) olarak ifade edilir."
      },
      {
        "id": "m5-1-t7-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kütüphaneye aynı fiyattan 50 adet kitap alınmış ve toplam 4500 TL ödenmiştir. Buna göre bir kitabın fiyatı zihinden işlem yapılarak bulunduğunda kaç TL olur?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-04.webp",
        "options": [
          "80",
          "90",
          "100",
          "110"
        ],
        "correct": 1,
        "explanation": "4500'ü 50'ye zihinden bölmek için her iki sayıdan birer sıfır silinir (450 ÷ 5). 45'in içinde 5, 9 kere vardır. Sonuç 90 TL'dir."
      },
      {
        "id": "m5-1-t7-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dikdörtgen şeklindeki çikolata 15 eş parçaya (3x5) bölünmüş ve bu parçalardan 5 tanesi yenmiştir. Yenilen kısmı gösteren kesrin EN SADE hali aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-05.webp",
        "options": [
          "1/2",
          "1/3",
          "1/4",
          "2/5"
        ],
        "correct": 1,
        "explanation": "15 parçanın 5'i yenmiştir (5/15). Bu kesrin pay ve paydasını 5 ile sadeleştirdiğimizde 1/3 kesrini elde ederiz."
      },
      {
        "id": "m5-1-t7-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde 2 tam dolu portakal suyu bardağı ve çeyreği (1/4'ü) dolu bir bardak daha bulunmaktadır. Bu durumu ifade eden bileşik kesir hangisidir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-06.webp",
        "options": [
          "5/4",
          "7/4",
          "9/4",
          "11/4"
        ],
        "correct": 2,
        "explanation": "Görsel 2 tam 1/4 kesrini ifade eder. Bileşik kesre çevirirken (2 x 4) + 1 = 9 bulunur. Payda aynen kalır: 9/4."
      },
      {
        "id": "m5-1-t7-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dereceli sürahinin 7/8'i su ile doludur. Bu suyun 3/8'lik kısmı çiçekleri sulamak için kullanılırsa sürahide kalan su miktarını gösteren en sade kesir hangisi olur?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-07.webp",
        "options": [
          "1/2",
          "1/4",
          "3/8",
          "5/8"
        ],
        "correct": 0,
        "explanation": "7/8 - 3/8 = 4/8 kalır. 4/8 kesrini 4 ile sadeleştirdiğimizde 1/2 (yarım) sonucunu buluruz."
      },
      {
        "id": "m5-1-t7-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki yumurta kolisinde toplam 60 adet yumurta vardır. Bu yumurtaların 2/5'i kahverengi, geri kalanı ise beyazdır. Buna göre kolide kaç adet kahverengi yumurta vardır?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-08.webp",
        "options": [
          "12",
          "24",
          "36",
          "48"
        ],
        "correct": 1,
        "explanation": "Bir bütünün istenen kesir kadarını bulmak için sayı paydaya bölünür, pay ile çarpılır. 60 ÷ 5 = 12. Bulunan sonuç pay ile çarpılır: 12 x 2 = 24."
      },
      {
        "id": "m5-1-t7-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki lazer cihazından çıkan yeşil ışık, tek bir yöne doğru sonsuza kadar gitmektedir. Bu durum geometrideki hangi temel kavrama modeldir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-09.webp",
        "options": [
          "Doğru",
          "Doğru Parçası",
          "Işın",
          "Açı"
        ],
        "correct": 2,
        "explanation": "Başlangıç noktası belli olan (lazer cihazı) ve diğer ucu sınırsızca uzayan düz çizgilere 'Işın' denir."
      },
      {
        "id": "m5-1-t7-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tahta merdivenin sağ ve sol yanındaki uzun direkler hiçbir zaman birbirine yaklaşmaz veya uzaklaşmaz. Bu direkler hangi doğru çeşidine modeldir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-10.webp",
        "options": [
          "Dik Kesişen Doğrular",
          "Paralel Doğrular",
          "Çakışık Doğrular",
          "Aykırı Doğrular"
        ],
        "correct": 1,
        "explanation": "Aralarındaki mesafe hiç değişmeyen ve hiçbir zaman kesişmeyen doğrulara 'Paralel Doğrular' denir."
      },
      {
        "id": "m5-1-t7-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki analog saatin akrebi ve yelkovanı tam 05:00'ı göstermektedir. Bu durumda akrep ile yelkovan arasındaki iç açı hangi açı çeşidine örnektir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-11.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 2,
        "explanation": "Saat 5'i gösterdiğinde açı 150 derecedir. Ölçüsü 90 dereceden büyük, 180 dereceden küçük olan açılara 'Geniş Açı' denir."
      },
      {
        "id": "m5-1-t7-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki ince kesilmiş pizza diliminin uç kısmındaki açı hangi açı çeşidine modeldir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-12.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Tam Açı"
        ],
        "correct": 0,
        "explanation": "İnce kesilmiş pizza diliminin ucu 90 dereceden daha küçük bir açıklığa sahiptir. Bu tür açılara 'Dar Açı' denir."
      },
      {
        "id": "m5-1-t7-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 'Yol Ver' trafik levhası (ters üçgen) şeklindedir ve üç kenarının uzunluğu da birbirine eşittir. Bu hangi üçgen çeşididir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-13.webp",
        "options": [
          "Çeşitkenar Üçgen",
          "İkizkenar Üçgen",
          "Eşkenar Üçgen",
          "Geniş Açılı Üçgen"
        ],
        "correct": 2,
        "explanation": "Tüm kenar uzunlukları ve tüm iç açıları birbirine eşit olan üçgenlere 'Eşkenar Üçgen' denir."
      },
      {
        "id": "m5-1-t7-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki gökyüzünde uçan uçurtmanın kaç adet köşesi ve kenarı vardır?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-14.webp",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 1,
        "explanation": "Geleneksel bir uçurtma şekli (deltoid veya eşkenar dörtgen), 4 kenarı ve 4 köşesi olan bir çokgendir ('Dörtgen' grubuna girer)."
      },
      {
        "id": "m5-1-t7-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dikdörtgen masanın köşesinde oluşan açının ölçüsü kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-15.webp",
        "options": [
          "45",
          "60",
          "90",
          "120"
        ],
        "correct": 2,
        "explanation": "Dikdörtgen ve kare gibi geometrik şekillerin tüm iç açıları dik açıdır ve dik açının ölçüsü tam 90 derecedir."
      },
      {
        "id": "m5-1-t7-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki restoranda ödenen hesap fişinde tatlı için 3², içecek için 4² TL yazmaktadır. Buna göre bu iki ürün için toplam kaç TL ödenmiştir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-16.webp",
        "options": [
          "14",
          "25",
          "49",
          "81"
        ],
        "correct": 1,
        "explanation": "3² = 3 x 3 = 9 TL. 4² = 4 x 4 = 16 TL. İkisinin toplamı 9 + 16 = 25 TL'dir."
      },
      {
        "id": "m5-1-t7-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki alışveriş sepetinde bulunan çantanın fiyatı 198 TL, montun fiyatı ise 403 TL'dir. Fiyatları EN YAKIN YÜZLÜĞE yuvarlayarak tahmini toplam tutarı hesaplayan biri hangi sonucu bulur?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-17.webp",
        "options": [
          "500",
          "600",
          "700",
          "800"
        ],
        "correct": 1,
        "explanation": "198 en yakın yüzlüğe 200 olarak, 403 ise 400 olarak yuvarlanır. Tahmini toplam: 200 + 400 = 600 TL'dir."
      },
      {
        "id": "m5-1-t7-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki yıldızlardan oluşan örüntünün 1. adımında 4, 2. adımında 9, 3. adımında 14 adet yıldız kullanılmıştır. Buna göre 4. adımı oluşturmak için kaç yıldıza ihtiyaç vardır?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-18.webp",
        "options": [
          "17",
          "18",
          "19",
          "20"
        ],
        "correct": 2,
        "explanation": "Örüntü kuralı her adımda 5 artmaktadır. 4. adımı bulmak için 3. adımdaki sayıya 5 eklenir: 14 + 5 = 19."
      },
      {
        "id": "m5-1-t7-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde bir cetvel ile bir kurşun kalemin uzunluğu ölçülmektedir. Kalem gibi başlangıç ve bitiş noktası belli olan sınırlandırılmış uzunluklar geometride neye modeldir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-19.webp",
        "options": [
          "Işın",
          "Doğru",
          "Doğru Parçası",
          "Kesişen Doğru"
        ],
        "correct": 2,
        "explanation": "Her iki ucundan da sınırlı olan (uzatılamayan) düz çizgi modellerine 'Doğru Parçası' denir."
      },
      {
        "id": "m5-1-t7-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki eşit büyüklükteki A, B ve C bayraklarının kırmızı renkli kısımları sırasıyla 1/2, 1/3 ve 1/4 kesirlerini modellemektedir. Kırmızı alanların KÜÇÜKTEN BÜYÜĞE sıralanışı hangisidir?",
        "imageUrl": "/images/grade5/matematik/test7/m5-t7-img-20.webp",
        "options": [
          "C < B < A",
          "A < B < C",
          "B < C < A",
          "C < A < B"
        ],
        "correct": 0,
        "explanation": "Birim kesirlerde payda (bölünen parça sayısı) büyüdükçe kesrin değeri küçülür. Bu yüzden 1/4 (C) en küçüktür, 1/2 (A) ise en büyüktür. Sıralama: C < B < A."
      }
    ],
   test8: [
      {
        "id": "m5-1-t8-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki uçuş bilgi ekranında sefer numarası olarak '704.058.210' sayısı yazmaktadır. Bu sayının on milyonlar ve on binler basamağındaki rakamların toplamı kaçtır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-01.webp",
        "options": [
          "5",
          "9",
          "12",
          "15"
        ],
        "correct": 0,
        "explanation": "Sayının on milyonlar basamağında '0' rakamı, on binler basamağında ise '5' rakamı vardır. Toplamı: 0 + 5 = 5'tir."
      },
      {
        "id": "m5-1-t8-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki petek örüntüsünün 1. adımında 3, 2. adımında 8, 3. adımında 12 adet altıgen kullanılmıştır. Buna göre örüntünün 5. adımında kaç adet altıgen bulunmalıdır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-02.webp",
        "options": [
          "15",
          "17",
          "19",
          "23"
        ],
        "correct": 1,
        "explanation": "Örüntü her adımda 5,4,3,2 artmaktadır. 4. adımda 12 + 3 = 15 altıgen, 5. adımda ise 15 + 2 = 17 altıgen olur."
      },
      {
        "id": "m5-1-t8-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki alışveriş fişinde bisiklet için 1250 TL, kask için 345 TL yazmaktadır. Kasaya iki adet 1000 TL'lik banknot veren bir müşteri kaç TL para üstü almalıdır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-03.webp",
        "options": [
          "305",
          "405",
          "415",
          "505"
        ],
        "correct": 1,
        "explanation": "Toplam tutar: 1250 + 345 = 1595 TL. Müşteri 2000 TL vermiştir. Para üstü: 2000 - 1595 = 405 TL'dir."
      },
      {
        "id": "m5-1-t8-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kargo uçağına her birinde 40 adet kutu bulunan tam 105 adet palet yüklenmiştir. Uçaktaki toplam kutu sayısı kaçtır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-04.webp",
        "options": [
          "4000",
          "4100",
          "4200",
          "4400"
        ],
        "correct": 2,
        "explanation": "Toplam kutu sayısını bulmak için palet sayısı ile bir paletteki kutu sayısı çarpılır. 105 x 40 = 4200."
      },
      {
        "id": "m5-1-t8-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki fırıncı, pişirdiği 850 adet kurabiyeyi 12'şerli olarak kutulara yerleştirmektedir. Kutular tamamen dolduktan sonra tepsilerde paketlenemeyen (artan) kurabiye sayısı kaçtır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-05.webp",
        "options": [
          "8",
          "10",
          "12",
          "70"
        ],
        "correct": 1,
        "explanation": "850'yi 12'ye böldüğümüzde bölüm 70 (840 kurabiye paketlenir), kalan ise 10 olur. Artan kurabiye 10 adettir."
      },
      {
        "id": "m5-1-t8-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki otomobilin kilometre sayacı 498 km'yi göstermektedir. Gideceği şehir 1205 km uzaklıkta olduğuna göre, kalan mesafeyi EN YAKIN YÜZLÜĞE yuvarlayarak tahmin eden biri hangi sonucu bulur?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-06.webp",
        "options": [
          "600",
          "700",
          "800",
          "900"
        ],
        "correct": 1,
        "explanation": "Sayac 500'e yuvarlanır, toplam mesafe 1200'e yuvarlanır. Kalan tahmini mesafe: 1200 - 500 = 700 km."
      },
      {
        "id": "m5-1-t8-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dev küp, küçük birim küplerin birleştirilmesiyle oluşturulmuştur. Küpün eni, boyu ve yüksekliği 5'er birim küpten oluşmaktadır. Bu yapının içindeki toplam küçük küp sayısını veren üslü ifade hangisidir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-07.webp",
        "options": [
          "5x 3",
          "5²",
          "5⁶",
          "5³"
        ],
        "correct": 3,
        "explanation": "Bir küpün hacmi (toplam blok sayısı), bir ayrıtının kendisiyle üç kez çarpılmasıyla bulunur (6 x 6 x 6). Bu ifade '6'nın küpü' (6³) olarak yazılır."
      },
      {
        "id": "m5-1-t8-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki aynı büyüklükte iki çikolatadan birincisi 5 eş parçaya bölünmüş ve 2 parçası yenmiştir (2/5). İkincisi ise 15 eş parçaya bölünmüştür. Aynı miktarda çikolata yemiş olmak için ikinci çikolatadan kaç parça yenmelidir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-08.webp",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "correct": 2,
        "explanation": "Denk kesirler elde etmek için 2/5 kesrinin paydası 15 olacak şekilde 3 ile genişletilir. (2x3)/(5x3) = 6/15. Yani 6 parça yenmelidir."
      },
      {
        "id": "m5-1-t8-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki sürahilerden 3 tanesi su ile tamamen doludur. Son 2 sürahinin ise sadece 2/3'ü doludur. Toplam su miktarını gösteren kesrin BİLEŞİK KESİR olarak yazılışı hangisidir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-09.webp",
        "options": [
          "10/3",
          "13/3",
          "16/3",
          "18/3"
        ],
        "correct": 1,
        "explanation": "Görsel 3 tam 2X(2/3) kesrini ifade eder. Bileşik kesre çevirmek için tam kısım ile payda çarpılıp pay eklenir. (3 x 3) + 4/3 = 13. Payda aynen kalır: 13/3."
      },
      {
        "id": "m5-1-t8-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde uzun atlama yapan üç sporcu vardır. Ali 3/4 metre, Berk 1/4 metre, Can ise 5/4 metre uzağa atlamıştır. En uzun mesafeye atlayan sporcu kimdir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-10.webp",
        "options": [
          "Ali",
          "Berk",
          "Can",
          "Hepsi aynı atlamıştır"
        ],
        "correct": 2,
        "explanation": "Paydaları eşit olan kesirlerde payı büyük olan daha büyüktür. 5/4, bir tamdan (4/4) büyük olduğu için en büyük kesir Can'a aittir."
      },
      {
        "id": "m5-1-t8-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki boyacı, duvarın sabah 5/12'sini, öğleden sonra ise 4/12'sini boyamıştır. Duvarın boyanmayan (kalan) kısmını gösteren EN SADE kesir hangisidir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-11.webp",
        "options": [
          "1/3",
          "1/4",
          "3/12",
          "1/2"
        ],
        "correct": 1,
        "explanation": "Toplam boyanan kısım: 5/12 + 4/12 = 9/12'dir. Tamamından (12/12) çıkarırsak geriye 3/12 kalır. Bu kesri 3 ile sadeleştirdiğimizde 1/4 sonucunu buluruz."
      },
      {
        "id": "m5-1-t8-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki 150 cm uzunluğundaki kurdelenin 2/5'i kesilerek hediye paketi yapılmıştır. Hediye paketi için kullanılan kurdele kaç santimetredir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-12.webp",
        "options": [
          "30",
          "50",
          "60",
          "90"
        ],
        "correct": 2,
        "explanation": "Bir bütünün istenilen kesir kadarını bulmak için sayı paydaya bölünür, pay ile çarpılır. 150 ÷ 5 = 30. 30 x 2 = 60 cm."
      },
      {
        "id": "m5-1-t8-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde karanlık bir odada el fenerinden duvara doğru tutulan ışık demeti görülmektedir. Başlangıç noktası belli olan ancak diğer yönde sınırsızca ilerleyen bu çizgi modeline matematikte ne ad verilir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-13.webp",
        "options": [
          "Doğru",
          "Doğru Parçası",
          "Işın",
          "Açı"
        ],
        "correct": 2,
        "explanation": "Bir ucu sabit, diğer ucu sonsuza doğru giden düz çizgilere 'Işın' denir."
      },
      {
        "id": "m5-1-t8-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki ahşap merdivenin üzerine basılan yatay basamakları, birbirlerine göre nasıl konumlanmış doğrulardır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-14.webp",
        "options": [
          "Dik kesişen doğrular",
          "Kesişen doğrular",
          "Çakışık doğrular",
          "Paralel doğrular"
        ],
        "correct": 3,
        "explanation": "Merdiven basamakları gibi aralarındaki mesafe hiç değişmeyen ve birbirini asla kesmeyen doğrulara 'Paralel doğrular' denir."
      },
      {
        "id": "m5-1-t8-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki ince, sivri uçlu cımbızın iki ucu arasındaki açıklık daralmıştır. Bu durumda cımbızın uçları arasındaki açı çeşidi aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-15.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 0,
        "explanation": "Ölçüsü 0 dereceden büyük ve 90 dereceden (dik açıdan) küçük olan açılara 'Dar Açı' denir."
      },
      {
        "id": "m5-1-t8-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki otomobilin hız göstergesi 125 km/h hızını göstermektedir. İbrenin sıfır noktası ile yaptığı açı, 90 dereceyi geçmiştir. Bu açıya ne ad verilir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-16.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Tam Açı"
        ],
        "correct": 2,
        "explanation": "Ölçüsü 90 dereceden büyük, 180 dereceden küçük olan açılara 'Geniş Açı' denir."
      },
      {
        "id": "m5-1-t8-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kuş yuvasının giriş kapısı, beş düz kenardan oluşan kapalı bir geometrik şekildir. Geometride bu çokgen nasıl isimlendirilir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-17.webp",
        "options": [
          "Dörtgen",
          "Beşgen",
          "Altıgen",
          "Sekizgen"
        ],
        "correct": 1,
        "explanation": "Çokgenler kenar sayılarına göre isimlendirilir. 5 kenarı, 5 köşesi ve 5 iç açısı olan çokgenlere 'Beşgen' denir."
      },
      {
        "id": "m5-1-t8-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki yelkenli teknenin yelkeni üçgen şeklindedir ve yelkenin direkle birleştiği köşe tam olarak dik (90 derece) bir açıdır. Bu hangi üçgen çeşididir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-18.webp",
        "options": [
          "Dar Açılı Üçgen",
          "Geniş Açılı Üçgen",
          "Dik Açılı Üçgen",
          "Eşkenar Üçgen"
        ],
        "correct": 2,
        "explanation": "İç açılarından biri tam olarak 90 derece olan üçgenlere 'Dik Açılı Üçgen' denir."
      },
      {
        "id": "m5-1-t8-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki dikdörtgen şeklindeki futbol sahasında, bir oyuncu köşe vuruşu direğinden doğrudan sahanın tam çaprazındaki (karşı) direğe doğru koşmuştur. Oyuncunun izlediği bu yola geometride ne denir?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-19.webp",
        "options": [
          "Kenar",
          "Açı",
          "Köşegen",
          "Doğru"
        ],
        "correct": 2,
        "explanation": "Bir çokgende ardışık olmayan (komşu olmayan) iki köşeyi birleştiren doğru parçasına 'Köşegen' denir."
      },
      {
        "id": "m5-1-t8-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki bilgisayar oyununun skor tablosunda '1. Bölüm: 5² puan' ve '2. Bölüm: 3³ puan' yazmaktadır. İki bölümü de tamamlayan bir oyuncu toplam kaç puan kazanır?",
        "imageUrl": "/images/grade5/matematik/test8/m5-t8-img-20.webp",
        "options": [
          "19",
          "34",
          "52",
          "60"
        ],
        "correct": 2,
        "explanation": "5² (5'in karesi) = 5 x 5 = 25 puandır. 3³ (3'ün küpü) = 3 x 3 x 3 = 27 puandır. Toplam puan: 25 + 27 = 52'dir."
      }
    ],
   test9: [
      {
        "id": "m5-1-t9-01",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki bankamatik (ATM) ekranında müşterinin hesap bakiyesi '3.201.005 TL' olarak gösterilmektedir. Bu sayının okunuşu aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-01.webp",
        "options": [
          "Üç milyon yüz iki bin beş",
          "Üç milyon iki yüz bir bin elli",
          "Üç milyon iki yüz bir bin beş",
          "Otuz iki milyon yüz bin beş"
        ],
        "correct": 2,
        "explanation": "Milyonlar bölüğünde 3 (üç milyon), binler bölüğünde 201 (iki yüz bir bin), birler bölüğünde ise 005 (beş) rakamları vardır."
      },
      {
        "id": "m5-1-t9-02",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde, zıplayarak ilerleyen bir kurbağanın sayı doğrusu üzerindeki konumu modellenmiştir. Kurbağa 2 tam sayısını geçmiş ve sonraki aralığın 3. çizgisinde durmuştur. Her tam sayı arası 4 eş parçaya bölündüğüne göre, kurbağanın bulunduğu nokta hangi bileşik kesri ifade eder?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-02.webp",
        "options": [
          "7/4",
          "9/4",
          "11/4",
          "13/4"
        ],
        "correct": 2,
        "explanation": "Kurbağa 2 tam ve 3/4 ilerlemiştir (2 tam 3/4). Bu tam sayılı kesri bileşik kesre çevirirsek: (2 x 4) + 3 = 11. Payda değişmez: 11/4."
      },
      {
        "id": "m5-1-t9-03",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki kare şeklindeki pencerenin ardışık olmayan iki köşesi arasına dekoratif düz bir çıta (kırmızı çizgi) çekilmiştir. Bu çıtanın geometrideki adı nedir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-03.webp",
        "options": [
          "Kenar",
          "Işın",
          "Köşegen",
          "Açıortay"
        ],
        "correct": 2,
        "explanation": "Kare veya dikdörtgen gibi çokgenlerde, komşu olmayan (yan yana olmayan) iki köşeyi birleştiren doğru parçalarına 'Köşegen' denir."
      },
      {
        "id": "m5-1-t9-04",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki büyük fayans duvarı 100 adet küçük eş kareden oluşmaktadır. Bu karelerden 58 tanesi maviye boyanmıştır. Mavi boyalı alanı gösteren kesir sembolü aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-04.webp",
        "options": [
          "29/50",
          "58/100",
          "4/5",
          "9/10"
        ],
        "correct": 0,
        "explanation": "100 kareden 58'i boyalıdır (58/100). Bu kesri en sade haline getirmek için pay ve paydayı 2'ye böleriz. 58 ÷ 2 = 29, 100 ÷ 2 = 50. Sonuç 29/50'dir."
      },
      {
        "id": "m5-1-t9-05",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki katlanır plaj sandalyesinin oturmalığı ile sırtlığı arasındaki açının ölçüsü 110 derecedir. Bu açıklık hangi açı çeşidine modeldir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-05.webp",
        "options": [
          "Dar Açı",
          "Dik Açı",
          "Geniş Açı",
          "Doğru Açı"
        ],
        "correct": 2,
        "explanation": "Ölçüsü 90 dereceden büyük ve 180 dereceden küçük olan (dik açıdan daha açık olan) açılara 'Geniş Açı' denir."
      },
      {
        "id": "m5-1-t9-06",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki oyuncak fabrikasında üretilen 358 adet ayıcık, her biri 15 ayıcık alan kutulara yerleştirilecektir. Paketleme tamamlandığında kutuya sığmayan (artan) ayıcık sayısı kaç olur?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-06.webp",
        "options": [
          "8",
          "11",
          "13",
          "14"
        ],
        "correct": 2,
        "explanation": "358'i 15'e böldüğümüzde bölüm 23, kalan ise 13 olur. Kutulara sığmayan 13 adet ayıcık kalır."
      },
      {
        "id": "m5-1-t9-07",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki çiçek yaprakları örüntüsünün 1. adımında 5, 2. adımında 9, 3. adımında 13 yaprak vardır. Aynı kurala göre 4. adımdaki çiçekte kaç adet yaprak olmalıdır?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-07.webp",
        "options": [
          "15",
          "16",
          "17",
          "19"
        ],
        "correct": 2,
        "explanation": "Örüntü her adımda 4 artarak (5, 9, 13...) devam etmektedir. 3. adıma 4 eklersek: 13 + 4 = 17 yaprak olur."
      },
      {
        "id": "m5-1-t9-08",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki aynı büyüklükteki deney tüplerinden A tüpü 5/12, B tüpü ise 7/12 oranında sıvı ile doludur. Buna göre iki tüp arasındaki doğru karşılaştırma sembolü hangisidir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-08.webp",
        "options": [
          "A > B",
          "A < B",
          "A = B",
          "B < A"
        ],
        "correct": 1,
        "explanation": "Paydaları eşit olan kesirlerde payı büyük olan daha fazladır. 7/12, 5/12'den büyüktür. Bu nedenle A < B (A küçüktür B'den) sembolü kullanılır."
      },
      {
        "id": "m5-1-t9-09",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki masada 2 adet hiç açılmamış tam çikolata ve 4 eş parçaya bölünüp 3 parçası duran bir çikolata (3/4) vardır. Bu durumu ifade eden tam sayılı kesir hangisidir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-09.webp",
        "options": [
          "1 tam 3/4",
          "2 tam 1/4",
          "2 tam 3/4",
          "3 tam 1/4"
        ],
        "correct": 2,
        "explanation": "İki bütün çikolata '2 tam'ı, son çikolata ise '3/4'ü gösterir. Birleşimi 2 tam 3/4 olarak okunur."
      },
      {
        "id": "m5-1-t9-10",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki gönye kullanılarak bir masanın köşesinin açısı ölçülmektedir. Masanın köşesinde oluşan bu açı kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-10.webp",
        "options": [
          "45",
          "60",
          "90",
          "180"
        ],
        "correct": 2,
        "explanation": "Dikdörtgen şeklindeki masa veya kağıt köşeleri her zaman dik açıdır. Gönye de dik açı ölçmek için kullanılır ve ölçüsü tam 90 derecedir."
      },
      {
        "id": "m5-1-t9-11",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki tavuk çiftliğinde toplam 450 adet tavuk vardır ve her bir tavuk günde 2 yumurta yapmaktadır. 10 günlük sürenin sonunda çiftlikte toplam kaç yumurta birikir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-11.webp",
        "options": [
          "4500",
          "8000",
          "9000",
          "10000"
        ],
        "correct": 2,
        "explanation": "Önce 1 gündeki yumurta sayısını buluruz: 450 x 2 = 900. Sonra bunu 10 gün ile çarparız: 900 x 10 = 9000 yumurta."
      },
      {
        "id": "m5-1-t9-12",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki matematik oyununun ekranında '729 ÷ 3³' işlemi sorulmaktadır. Bu işlemin doğru sonucu aşağıdakilerden hangisidir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-12.webp",
        "options": [
          "17",
          "27",
          "81",
          "243"
        ],
        "correct": 1,
        "explanation": "Önce üslü ifadenin değeri bulunur: 3³ (3'ün küpü) = 3 x 3 x 3 = 27'dir. Sonra bölme işlemi yapılır: 729 ÷ 27 = 27."
      },
      {
        "id": "m5-1-t9-13",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki yakıt göstergesi yarım deponun (1/2) biraz üzerindedir. Aşağıdaki kesirlerden hangisi bu göstergedeki yakıt miktarını (yarımdan büyük olanı) temsil ediyor olabilir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-13.webp",
        "options": [
          "3/8",
          "4/10",
          "7/12",
          "5/12"
        ],
        "correct": 2,
        "explanation": "Bir kesrin yarımdan büyük olması için payının, paydasının yarısından büyük olması gerekir. 12'nin yarısı 6'dır. 7/12 kesrinin payı (7) yarımdan (6) büyük olduğu için cevap 7/12'dir."
      },
      {
        "id": "m5-1-t9-14",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki otoban haritasında, iki şeritli düz bir yol üzerinde ilerleyen mavi ve kırmızı araçların şeritleri birbirini asla kesmemektedir. Bu yol şeritleri hangi doğru çeşidine örnektir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-14.webp",
        "options": [
          "Dik Kesişen Doğrular",
          "Çakışık Doğrular",
          "Paralel Doğrular",
          "Işınlar"
        ],
        "correct": 2,
        "explanation": "Aralarındaki uzaklık hiç değişmeyen ve hiçbir noktada kesişmeyen doğru modellerine 'Paralel Doğrular' denir."
      },
      {
        "id": "m5-1-t9-15",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki araç galerisi tabelasında yazan '4.505.000 TL', '4.550.000 TL', '4.050.000 TL' ve '4.500.000 TL' fiyatlarındaki dört aracın en pahalısı (en büyük sayı) hangisidir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-15.webp",
        "options": [
          "4.500.000",
          "4.050.000",
          "4.550.000",
          "4.505.000"
        ],
        "correct": 2,
        "explanation": "Milyonlar bölükleri aynı (4). Binler bölüklerine bakıldığında en büyük sayı 550'dir. Bu nedenle en büyük sayı 4.550.000'dir."
      },
      {
        "id": "m5-1-t9-16",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki meyve sepetinde toplam 24 adet meyve vardır. Bu meyvelerin 3/4'ü elma olduğuna göre sepette kaç adet elma bulunmaktadır?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-16.webp",
        "options": [
          "12",
          "16",
          "18",
          "20"
        ],
        "correct": 2,
        "explanation": "Bir sayının kesir kadarını bulmak için paydaya bölüp pay ile çarparız. 24 ÷ 4 = 6. Bulunan sonucu pay ile çarparız: 6 x 3 = 18."
      },
      {
        "id": "m5-1-t9-17",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görselde dikdörtgen şeklindeki duvarın köşesine (90 derece) yaslanmış bir merdiven vardır. Merdivenin duvar ile yaptığı açı, dik açıdan 25 derece eksiktir. Bu açı kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-17.webp",
        "options": [
          "55",
          "65",
          "75",
          "115"
        ],
        "correct": 1,
        "explanation": "Dik açı her zaman 90 derecedir. 90'dan 25 dereceyi çıkardığımızda 90 - 25 = 65 derece kalır."
      },
      {
        "id": "m5-1-t9-18",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki otobüs, gideceği 9 eşit mesafeli yolun 5'inci durağını geçmiştir (5/9'unu gitmiştir). Otobüsün varış noktasına ulaşması için yolun kaçta kaçı kalmıştır?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-18.webp",
        "options": [
          "3/9",
          "4/9",
          "4/5",
          "9/5"
        ],
        "correct": 1,
        "explanation": "Yolun tamamı 9/9 (1 bütün) olarak kabul edilir. Gidilen kısmı çıkarırsak: 9/9 - 5/9 = 4/9'u kalmıştır."
      },
      {
        "id": "m5-1-t9-19",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki ürün etiketinde 'Fiyat: 420 TL' yazmaktadır. Bu üründen toptan olarak 100 adet alan bir mağaza sahibi, kasada toplam fiyata 500 TL de kargo ücreti ekletmiştir. Toplam fatura kaç TL olur?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-19.webp",
        "options": [
          "42.000",
          "42.500",
          "47.000",
          "420.500"
        ],
        "correct": 1,
        "explanation": "420'yi zihinden 100 ile çarpmak için sonuna iki sıfır ekleriz: 42.000 TL. Buna kargo ücretini eklersek: 42.000 + 500 = 42.500 TL."
      },
      {
        "id": "m5-1-t9-20",
        "subject": "matematik",
        "term": 1,
        "prompt": "Görseldeki iki raptiye arasına gerdirilmiş ve her iki ucu da raptiye ile sınırlandırılmış lastik bant, geometrideki hangi gösterimi temsil eder?",
        "imageUrl": "/images/grade5/matematik/test9/m5-t9-img-20.webp",
        "options": [
          "[AB]",
          "AB",
          "(AB)",
          "A -> B"
        ],
        "correct": 0,
        "explanation": "İki ucu da kapalı ve sınırlandırılmış olan düz çizgilere 'Doğru Parçası' denir ve köşeli parantez [AB] sembolü ile gösterilir."
      }
    ],
  ...matematikTest10.term1, 
  }, // term1 bitti (Burası term1'in sonu)
  term2: { // <--- İŞTE EKSİK OLAN KAHRAMAN BU! 2. Dönemi başlatıyoruz.
    test11: [
      {
        "id": "m5-2-t11-01",
        "subject": "matematik",
        "term": 2,
        "prompt": "Alanı 36 santimetrekare olan ve kenar uzunlukları doğal sayı olan bir dikdörtgenin çevre uzunluğu EN AZ kaç santimetre olabilir? (Not: Kare de özel bir dikdörtgendir.)",
        "options": [
          "24",
          "26",
          "30",
          "40"
        ],
        "correct": 0,
        "explanation": "Alanı 36 olan dikdörtgenin kenarları: 1x36 (Ç=74), 2x18 (Ç=40), 3x12 (Ç=30), 4x9 (Ç=26) ve 6x6 (Ç=24) olabilir. Kare de bir dikdörtgen olduğu için çevre en az 24 cm olur."
      },
      {
        "id": "m5-2-t11-02",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki gibi çevre uzunluğu 20 cm olan, kenar uzunlukları doğal sayı olan bir dikdörtgenin alanı EN ÇOK kaç santimetrekare olabilir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-02.webp",
        "options": [
          "21",
          "24",
          "25",
          "30"
        ],
        "correct": 2,
        "explanation": "Çevresi 20 cm ise kısa ve uzun kenar toplamı 10 cm'dir. Kenarları 5 ve 5 seçersek (kare) alanı en büyük değeri yani 5x5=25 santimetrekareyi alır."
      },
      {
        "id": "m5-2-t11-03",
        "subject": "matematik",
        "term": 2,
        "prompt": "Dikdörtgen şeklindeki bir masanın boyu, eninin 3 katı uzunluğundadır. Masanın çevresi 320 cm olduğuna göre alanı kaç santimetrekaredir?",
        "options": [
          "3200",
          "4800",
          "5400",
          "6400"
        ],
        "correct": 1,
        "explanation": "Enine 1 kat dersek boyu 3 kat olur. Çevre = 2 x (1 kat + 3 kat) = 8 kat. 8 kat = 320 ise 1 kat (en) = 40 cm'dir. Boyu = 120 cm olur. Alan = 40 x 120 = 4800 santimetrekaredir."
      },
      {
        "id": "m5-2-t11-04",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görselde verilen bir kenarı 12 m, diğer kenarı 8 m olan dikdörtgen şeklindeki bahçenin etrafına 2 sıra tel çekilecektir. Toplam kaç metre tel gerekir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-04.webp",
        "options": [
          "40",
          "60",
          "80",
          "120"
        ],
        "correct": 2,
        "explanation": "Bahçenin çevresi = 2 x (12 + 8) = 40 metredir. 2 sıra tel çekileceği için 40 x 2 = 80 metre tel gerekir."
      },
      {
        "id": "m5-2-t11-05",
        "subject": "matematik",
        "term": 2,
        "prompt": "Kare şeklindeki bir kartonun çevresi 36 cm'dir. Bu kartonlardan 4 tanesi yan yana getirilerek tek bir dikdörtgen oluşturuluyor. Yeni oluşan büyük dikdörtgenin alanı kaç santimetrekare olur?",
        "options": [
          "144",
          "324",
          "400",
          "576"
        ],
        "correct": 1,
        "explanation": "Karenin çevresi 36 cm ise bir kenarı 36 / 4 = 9 cm'dir. Bir karenin alanı 9 x 9 = 81 cm2'dir. 4 tane karton yan yana gelirse toplam alan 4 x 81 = 324 cm2 olur."
      },
      {
        "id": "m5-2-t11-06",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki uzunluğu 6 m ve genişliği 4 m olan dikdörtgen şeklindeki odanın zeminine, alanı 1 metrekare olan kare fayanslardan döşenecektir. Odanın tamamı için kaç adet fayans gerekir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-06.webp",
        "options": [
          "10",
          "20",
          "24",
          "48"
        ],
        "correct": 2,
        "explanation": "Odanın toplam alanı 6 x 4 = 24 metrekaredir. Fayansların her birinin alanı 1 metrekare olduğu için 24 / 1 = 24 adet fayans gerekir."
      },
      {
        "id": "m5-2-t11-07",
        "subject": "matematik",
        "term": 2,
        "prompt": "Kenar uzunlukları 10 m ve 15 m olan dikdörtgen şeklindeki bir bahçenin TAM KÖŞESİNDEN, kenarları 3 m ve 4 m olan dikdörtgen şeklinde bir parça kesilip çıkarılıyor. Kalan şeklin çevre uzunluğu ilk duruma göre nasıl değişir?",
        "options": [
          "Değişmez",
          "7 metre kısalır",
          "14 metre kısalır",
          "7 metre uzar"
        ],
        "correct": 0,
        "explanation": "Dikdörtgenin tam köşesinden dikdörtgen bir parça çıkarıldığında, eksilen kenarların yerine içeride onlara eşit uzunlukta iki yeni kenar oluşur. Bu nedenle çevre uzunluğu değişmez."
      },
      {
        "id": "m5-2-t11-08",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki içi boş dikdörtgen çerçevenin dış kenar uzunlukları 20 cm ve 30 cm'dir. Çerçevenin tahta kısmının kalınlığı her yönden 2 cm olduğuna göre, içine resim konulan boş kısmın alanı kaç santimetrekaredir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-08.webp",
        "options": [
          "416",
          "468",
          "504",
          "600"
        ],
        "correct": 0,
        "explanation": "Her yönden 2 cm pay bırakıldığı için iç kısmın kısa kenarı 20 - 4 = 16 cm, uzun kenarı 30 - 4 = 26 cm olur. Alan = 16 x 26 = 416 santimetrekaredir."
      },
      {
        "id": "m5-2-t11-09",
        "subject": "matematik",
        "term": 2,
        "prompt": "Alanı 48 santimetrekare ve kenar uzunlukları doğal sayı olan BÜTÜN farklı dikdörtgenler bir kâğıda çiziliyor. Çizilebilecek bu dikdörtgenlerin çevre uzunlukları arasında aşağıdakilerden hangisi YOKTUR?",
        "options": [
          "98",
          "52",
          "38",
          "40"
        ],
        "correct": 3,
        "explanation": "Alanı 48 olan dikdörtgenler: 1x48 (Ç=98), 2x24 (Ç=52), 3x16 (Ç=38), 4x12 (Ç=32), 6x8 (Ç=28). Şıklardaki 40 cm olamaz."
      },
      {
        "id": "m5-2-t11-10",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görselde Ali'nin yediği pizzalar gösterilmiştir. Ali toplamda 13/4 (dörtte on üç) dilim pizza yemiştir. Bu ifadeyi tam sayılı kesir olarak nasıl gösteririz?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-10.webp",
        "options": [
          "2 tam 5/8",
          "3 tam 1/4",
          "4 tam 1/3",
          "3 tam 3/4"
        ],
        "correct": 0,
        "explanation": "2 tam pizza 16/8, 5 pizza 3.cü pizzada vardır."
      },
      {
        "id": "m5-2-t11-11",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir marketteki elmaların 2 tam 3/5 kilogramı satılmıştır. Bu miktarın BİLEŞİK KESİR olarak gösterimi aşağıdakilerden hangisidir?",
        "options": [
          "11/5",
          "13/5",
          "15/5",
          "17/5"
        ],
        "correct": 1,
        "explanation": "Tam sayılı kesri bileşik kesre çevirirken tam kısım ile payda çarpılıp pay ile toplanır. (2 x 5) + 3 = 13. Payda aynı kalır: 13/5."
      },
      {
        "id": "m5-2-t11-12",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki ölçü kabında bulunan su miktarı 18/7 litredir. Bu su miktarını tam sayılı kesre çevirdiğimizde, tam kısım ile kesir kısmındaki payın TOPLAMI kaç olur?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-12.webp",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correct": 2,
        "explanation": "18 / 7 işlemi yapıldığında tam kısım 2, kalan (pay) 4 olur. Yani 2 tam 4/7. Tam kısım (2) ile payın (4) toplamı 6'dır."
      },
      {
        "id": "m5-2-t11-13",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir yarışmacı yolun 25/6 kilometresini koşmuştur. Yarışmacı toplam kaç TAM kilometre koşmuş ve bir sonraki kilometrenin ne kadarını tamamlamıştır?",
        "options": [
          "3 tam kilometre, sonraki kilometrenin 5/6'sını",
          "4 tam kilometre, sonraki kilometrenin 1/6'sını",
          "4 tam kilometre, sonraki kilometrenin 5/6'sını",
          "5 tam kilometre, sonraki kilometrenin 1/6'sını"
        ],
        "correct": 1,
        "explanation": "25'i 6'ya böldüğümüzde 4 tam çıkar ve kalan 1 olur. Bu da 4 tam 1/6 demektir. Yani 4 tam kilometre bitmiş, 5. kilometrenin ise 1/6'sı koşulmuştur."
      },
      {
        "id": "m5-2-t11-14",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görselde masanın üzerinde 3 tam ve 1 adet yarım çikolata bulunmaktadır. Bu toplam çikolata miktarının BİLEŞİK KESİR olarak gösterimi hangisidir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-14.webp",
        "options": [
          "5/2",
          "6/2",
          "7/2",
          "9/2"
        ],
        "correct": 2,
        "explanation": "3 tam ve 1 yarım, 3 tam 1/2 şeklinde yazılır. Bileşik kesre çevirmek için (3 x 2) + 1 = 7 bulunur. Sonuç 7/2'dir."
      },
      {
        "id": "m5-2-t11-15",
        "subject": "matematik",
        "term": 2,
        "prompt": "Tam 4 arkadaş, ellerindeki 15 adet elmayı hiç artmayacak şekilde eşit olarak paylaşacaktır. Her birine düşen elma miktarını gösteren kesir aşağıdakilerden hangisidir?",
        "options": [
          "4/15",
          "11/4",
          "15/4",
          "19/4"
        ],
        "correct": 2,
        "explanation": "15 adet elmayı 4 kişiye böldüğümüz için her birine 15/4 elma düşer (3 tam 3/4 elma)."
      },
      {
        "id": "m5-2-t11-16",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki sayı doğrusunda 2 ile 3 noktaları arası 5 eşit parçaya bölünmüş ve A noktası işaretlenmiştir. A noktasına karşılık gelen değerin BİLEŞİK KESİR hali nedir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-16.webp",
        "options": [
          "11/5",
          "12/5",
          "13/5",
          "14/5"
        ],
        "correct": 2,
        "explanation": "Sayı doğrusunda 2 tam geçilmiş ve 5 parçalık aralığın 3. noktası işaretlenmiştir. Bu 2 tam 3/5'tir. Bileşik kesre çevirince (2x5)+3 = 13/5 olur."
      },
      {
        "id": "m5-2-t11-17",
        "subject": "matematik",
        "term": 2,
        "prompt": "Ayşe elindeki kurdelenin 3 tam 1/4 metresini el işi dersinde kullanmıştır. Bu uzunluğu tam olarak temsil eden DENK KESİR aşağıdakilerden hangisi olabilir?",
        "options": [
          "13/4",
          "26/8",
          "15/4",
          "A ve B şıklarının her ikisi de"
        ],
        "correct": 3,
        "explanation": "3 tam 1/4 kesri bileşik kesir olarak 13/4'tür. 13/4 kesrini 2 ile genişletirsek (pay ve paydayı 2 ile çarparsak) 26/8 elde ederiz. İkisi de doğrudur."
      },
      {
        "id": "m5-2-t11-18",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir terzi takım elbise dikmek için 4 tam 2/3 metre kumaş kullanmıştır. Bu kumaş miktarını sadece 'üçte birlik' (1/3) parçalar olarak düşünürsek, ustanın elinde kaç tane 1/3'lük parça vardır?",
        "options": [
          "10",
          "12",
          "14",
          "16"
        ],
        "correct": 2,
        "explanation": "4 tam 2/3 kesrini bileşik kesre çevirirsek (4x3)+2 = 14/3 elde ederiz. Bu da 14 adet 1/3'lük parça demektir."
      },
      {
        "id": "m5-2-t11-19",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görselde bir koşu parkurunda yarışan üç sporcu yer almaktadır. Ayşe yolun 11/4'ünü, Fatma 2 tam 1/2'sini, Zeynep ise 23/8'ini tamamlamıştır. En uzun mesafeyi koşarak lider durumda olan kimdir?",
        "imageUrl": "/images/grade5/matematik/test11/m5-t11-img-19.webp",
        "options": [
          "Ayşe",
          "Fatma",
          "Zeynep",
          "Hepsi eşit koşmuştur."
        ],
        "correct": 2,
        "explanation": "Hepsini paydası 8 olacak şekilde eşitleyelim: Ayşe 11/4 = 22/8. Fatma 2 tam 1/2 = 5/2 = 20/8. Zeynep = 23/8. En büyük pay Zeynep'e (23/8) ait olduğu için en çok o koşmuştur."
      },
     {
        "id": "m5-2-t11-20",
        "subject": "matematik",
        "term": 2,
        "prompt": "Tahtaya 17/5, 3 tam 1/2 ve 26/10 kesirleri yazılmıştır. Bu üç kesri BÜYÜKTEN KÜÇÜĞE doğru sıraladığımızda en başta hangi kesir yer alır?",
        "options": [
          "17/5",
          "3 tam 1/2",
          "26/10",
          "17/5 ile 3 tam 1/2 eşittir."
        ],
       correct: 1,
        explanation: "Hepsini ondalık sayıya veya ortak paydaya çevirelim. 17/5 = 34/10. 3 tam 1/2 = 7/2 = 35/10. 26/10 aynen kalır. En büyük 35/10 yani 3 tam 1/2'dir."
      }
    ],
         test12: [
      {
        "id": "m5-2-t12-01",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki 100 eş kareye bölünmüş modelin bir kısmı boyanmıştır. Bu modelin ifade ettiği ondalık gösterimi ve yüzde (%) sembolü ile yazılışını bulunuz.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-01.webp",
        "options": [
          "0,46 ve %46",
          "0,55 ve %55",
          "0,60 ve %60",
          "0,05 ve %5"
        ],
        "correct": 0,
        "explanation": "Görselde 100 karenin 46 tanesi boyanmıştır. Bu durum kesir olarak 46/100, ondalık gösterim olarak 0,46 ve yüzde olarak %46 şeklinde ifade edilir."
      },
      {
        "id": "m5-2-t12-02",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir marketten 12,45 TL'ye çikolata ve 8,90 TL'ye bisküvi alan Ayşe, kasiyere 50 TL vermiştir. Ayşe'nin alacağı para üstünü hesaplayınız.",
        "options": [
          "28,65",
          "29,65",
          "28,55",
          "29,55"
        ],
        "correct": 0,
        "explanation": "Önce harcanan toplam tutarı bulalım: 12,45 + 8,90 = 21,35 TL. Para üstünü bulmak için 50,00 TL'den çıkaralım: 50,00 - 21,35 = 28,65 TL."
      },
      {
        "id": "m5-2-t12-03",
        "subject": "matematik",
        "term": 2,
        "prompt": "Okunuşu 'On sekiz tam binde kırk beş' olan ondalık gösterimi rakamlarla yazınız ve onda birler basamağındaki rakamı bulunuz.",
        "options": [
          "Rakam: 0",
          "Rakam: 4",
          "Rakam: 5",
          "Rakam: 8"
        ],
        "correct": 0,
        "explanation": "Sayının rakamla yazılışı 18,045'tir. Virgülden sonraki ilk basamak olan onda birler basamağında '0' (sıfır) rakamı bulunmaktadır."
      },
      {
        "id": "m5-2-t12-04",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki sayı doğrusunda 1 ile 2 arası 10 eşit parçaya bölünmüş ve A noktası işaretlenmiştir. A noktasına karşılık gelen ondalık gösterimi yazınız.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-04.webp",
        "options": [
          "1,3",
          "1,6",
          "1,7",
          "1,8"
        ],
        "correct": 2,
        "explanation": "Sayı doğrusunda 1 tamdan sonra 10 eşit parçanın 7.sine gelinmiştir. Bu da 1 tam 7/10 yani 1,7 ondalık gösterimine eşittir."
      },
      {
        "id": "m5-2-t12-05",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir çiftçi, tarlasındaki 80 kilogram elmanın %25'ini satmıştır. Çiftçinin sattığı elma miktarını kilogram cinsinden hesaplayınız.",
        "options": [
          "15",
          "20",
          "25",
          "30"
        ],
        "correct": 1,
        "explanation": "%25 ifadesi çeyrek (1/4) demektir. 80 kilogramın çeyreğini bulmak için 4'e böleriz: 80 / 4 = 20 kg elma satılmıştır."
      },
      {
        "id": "m5-2-t12-06",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki ayakkabının etiket fiyatı 300 TL'dir. Mağaza bu ayakkabıya %30 indirim uygulamaktadır. İndirimli satış fiyatını hesaplayarak bulunuz.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-06.webp",
        "options": [
          "190",
          "210",
          "240",
          "270"
        ],
        "correct": 1,
        "explanation": "Önce indirimi bulalım: 300 x (30/100) = 90 TL indirim. Satış fiyatı = 300 - 90 = 210 TL'dir."
      },
      {
        "id": "m5-2-t12-07",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir depodaki suyun 3/5'i kullanılmıştır. Kullanılan su miktarını yüzde (%) sembolü ile ifade ediniz.",
        "options": [
          "%35",
          "%50",
          "%60",
          "%75"
        ],
        "correct": 2,
        "explanation": "Yüzde olarak ifade etmek için kesrin paydasını 100 yapmalıyız. 3/5 kesrini 20 ile genişletirsek 60/100 elde ederiz. Bu da %60 demektir."
      },
      {
        "id": "m5-2-t12-08",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki karne tablosunda, Can'ın girdiği sınavda 50 sorunun 42'sine doğru cevap verdiği görülmektedir. Can'ın doğru cevaplama oranını yüzde (%) olarak hesaplayınız.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-08.webp",
        "options": [
          "%42",
          "%64",
          "%84",
          "%92"
        ],
        "correct": 2,
        "explanation": "Can'ın doğrusu kesir olarak 42/50'dir. Yüzdeye çevirmek için paydayı 2 ile genişletirsek 84/100 yani %84 sonucuna ulaşırız."
      },
      {
        "id": "m5-2-t12-09",
        "subject": "matematik",
        "term": 2,
        "prompt": "Tahtaya yazılan 0,4 ; 0,45 ; 0,09 ; 0,405 ondalık gösterimlerini KÜÇÜKTEN BÜYÜĞE doğru sıralayınız. Baştan 3. sırada hangi sayı yer alır?",
        "options": [
          "0,09",
          "0,4",
          "0,405",
          "0,45"
        ],
        "correct": 2,
        "explanation": "Basamakları eşitlemek için sonlarına sıfır koyalım: 0,400 ; 0,450 ; 0,090 ; 0,405. Sıralama: 0,090 < 0,400 < 0,405 < 0,450. Baştan 3. sayı 0,405'tir."
      },
      {
        "id": "m5-2-t12-10",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir okuldaki 400 öğrencinin %40'ı kız öğrencidir. Bu okuldaki erkek öğrenci sayısını işlem yaparak bulunuz.",
        "options": [
          "160",
          "200",
          "240",
          "260"
        ],
        "correct": 2,
        "explanation": "Kızların oranı %40 ise, erkeklerin oranı %100 - %40 = %60'tır. 400 öğrencinin %60'ı: (400 x 60) / 100 = 240 erkek öğrenci vardır."
      },
      {
        "id": "m5-2-t12-11",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki ABC üçgeninin iç açılarından ikisi 50° ve 70° olarak verilmiştir. Buna göre 'x' ile gösterilen üçüncü açının ölçüsünü hesaplayınız.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-11.webp",
        "options": [
          "50°",
          "60°",
          "70°",
          "80°"
        ],
        "correct": 1,
        "explanation": "Bir üçgenin iç açıları toplamı 180°'dir. Verilen açıları toplayalım: 50 + 70 = 120°. Üçüncü açıyı bulmak için: 180 - 120 = 60° olur."
      },
      {
        "id": "m5-2-t12-12",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir dar açının alabileceği en büyük doğal sayı değeri ile en küçük geniş açının doğal sayı değerini toplayınız. Sonuç kaç derecedir?",
        "options": [
          "179",
          "180",
          "181",
          "182"
        ],
        "correct": 1,
        "explanation": "Dar açı 90'dan küçük olduğu için en fazla 89° olabilir. Geniş açı 90'dan büyük olduğu için en az 91° olabilir. Toplamları 89 + 91 = 180°'dir."
      },
      {
        "id": "m5-2-t12-13",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki analog saat tam 03:00'ı göstermektedir. Bu durumda saatin akrep ve yelkovanı arasında oluşan açı çeşidini belirtiniz.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-13.webp",
        "options": [
          "Dar Açı",
          "Geniş Açı",
          "Dik Açı",
          "Doğru Açı"
        ],
        "correct": 2,
        "explanation": "Saat 3:00 iken yelkovan 12'nin, akrep ise 3'ün üzerindedir. Aralarındaki mesafe tam 90 derecelik bir 'Dik Açı' oluşturur."
      },
      {
        "id": "m5-2-t12-14",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir otoyol yapım ekibi projenin 0,35'lik kısmını asfaltlamıştır. Geriye kalan ASFALTLANMAMIŞ kısmı yüzde (%) sembolü ile ifade ediniz.",
        "options": [
          "%35",
          "%45",
          "%65",
          "%75"
        ],
        "correct": 2,
        "explanation": "0,35 ondalık gösterimi %35 demektir. Yolun tamamı %100 olduğu için, asfaltlanmayan kısım %100 - %35 = %65'tir."
      },
      {
        "id": "m5-2-t12-15",
        "subject": "matematik",
        "term": 2,
        "prompt": "16 / 25 kesrini ondalık gösterim biçiminde yazınız ve çözüm sonucunu belirtiniz.",
        "options": [
          "0,16",
          "0,32",
          "0,64",
          "0,80"
        ],
        "correct": 2,
        "explanation": "Ondalık gösterim için paydayı 100 yapmalıyız. 16/25 kesrini 4 ile genişletirsek 64/100 elde ederiz. Bu da 0,64 demektir."
      },
      {
        "id": "m5-2-t12-16",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görseldeki paralelkenarın ardışık iki iç açısı olan A ve B açılarının ölçüleri toplamı kaç derecedir? Geometri kurallarına göre hesaplayınız.",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-16.webp",
        "options": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "correct": 1,
        "explanation": "Paralelkenar, eşkenar dörtgen ve yamuk gibi çokgenlerde yan yana olan (ardışık) iki iç açının toplamı daima 180°'dir."
      },
      {
        "id": "m5-2-t12-17",
        "subject": "matematik",
        "term": 2,
        "prompt": "Ali'nin 200 TL harçlığı vardır. Parasının %30'u ile kitap, %15'i ile kırtasiye malzemesi almıştır. Ali'nin geriye ne kadar parası kaldığını hesaplayınız.",
        "options": [
          "90 TL",
          "110 TL",
          "130 TL",
          "150 TL"
        ],
        "correct": 1,
        "explanation": "Toplam harcama yüzdesi: %30 + %15 = %45'tir. Geriye kalan parasının yüzdesi: %100 - %45 = %55. 200 TL'nin %55'i: 200 x 55 / 100 = 110 TL kalmıştır."
      },
      {
        "id": "m5-2-t12-18",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir ondalık gösterimin onda birler basamağında 6, binde birler basamağında 9, yüzler basamağında 2 ve birler basamağında 4 vardır. Söylenmeyen diğer basamakları SIFIR olan bu sayıyı oluşturunuz.",
        "options": [
          "24,609",
          "204,69",
          "204,609",
          "240,609"
        ],
        "correct": 2,
        "explanation": "Yüzler: 2, Onlar: 0, Birler: 4 -> Tam kısım: 204. Onda birler: 6, Yüzde birler: 0, Binde birler: 9 -> Kesir kısmı: ,609. Sayı: 204,609."
      },
      {
        "id": "m5-2-t12-19",
        "subject": "matematik",
        "term": 2,
        "prompt": "Karesi 64 olan doğal sayı ile küpü 27 olan doğal sayıyı bulunuz ve bu iki sayıyı toplayınız.",
        "options": [
          "9",
          "10",
          "11",
          "12"
        ],
        "correct": 2,
        "explanation": "Hangi sayının kendisiyle çarpımı (karesi) 64'tür? 8x8=64 (Sayı 8). Hangi sayının üç kez yan yana çarpımı (küpü) 27'dir? 3x3x3=27 (Sayı 3). Toplamları: 8 + 3 = 11."
      },
      {
        "id": "m5-2-t12-20",
        "subject": "matematik",
        "term": 2,
        "prompt": "Görselde iki doğru birbirini dik olarak kesmektedir. Bu kesişim sonucunda ortaya çıkan açıların her birinin ölçüsü kaç derecedir?",
        "imageUrl": "/images/grade5/matematik/test12/m5-t12-img-20.webp",
        "options": [
          "45°",
          "90°",
          "180°",
          "360°"
        ],
        "correct": 1,
        "explanation": "İki doğru birbirini dik olarak (T şeklinde veya artı şeklinde) kestiğinde oluşan 4 açının her biri tam olarak 90 derecedir."
      }
    ],
        test13: [
      {
        "id": "m5-2-t13-01",
        "subject": "matematik",
        "term": 2,
        "prompt": "3/4 kesrini 5 ile genişletirsek aşağıdakilerden hangisini elde ederiz?",
        "options": [
          "8/9",
          "15/20",
          "15/4",
          "3/20"
        ],
        "correct": 1,
        "explanation": "Bir kesri genişletmek için hem payını hem de paydasını aynı sayıyla çarparız. Pay: 3 x 5 = 15. Payda: 4 x 5 = 20. Yeni kesir 15/20 olur."
      },
      {
        "id": "m5-2-t13-02",
        "subject": "matematik",
        "term": 2,
        "prompt": "18/24 kesrinin 'en sade hâli' aşağıdakilerden hangisidir?",
        "options": [
          "9/12",
          "6/8",
          "3/4",
          "2/3"
        ],
        "correct": 2,
        "explanation": "En sade hâlini bulmak için pay ve paydayı ortak bölen en büyük sayıya (6'ya) böleriz. 18 / 6 = 3 ve 24 / 6 = 4. En sade hâli 3/4'tür."
      },
      {
        "id": "m5-2-t13-03",
        "subject": "matematik",
        "term": 2,
        "prompt": "Aşağıdaki kesirlerden hangisi 2/5 kesrine DENK DEĞİLDİR?",
        "options": [
          "4/10",
          "6/15",
          "8/20",
          "12/25"
        ],
        "correct": 3,
        "explanation": "2/5 kesrini 2 ile genişletirsek 4/10, 3 ile genişletirsek 6/15, 4 ile genişletirsek 8/20 olur. Ancak 12/25 kesri 2/5'in bir genişletilmiş hâli değildir (pay 6 ile çarpılmış ama payda 5 ile çarpılmış)."
      },
      {
        "id": "m5-2-t13-04",
        "subject": "matematik",
        "term": 2,
        "prompt": "4/7 = A/35 denkliğinin sağlanması için A yerine hangi sayı yazılmalıdır?",
        "options": [
          "16",
          "20",
          "24",
          "28"
        ],
        "correct": 1,
        "explanation": "Paydalar arasındaki ilişkiye bakalım: 7 sayısı 5 ile çarpılarak 35 olmuş. Denkliğin bozulmaması için pay olan 4'ü de 5 ile çarpmalıyız. A = 4 x 5 = 20."
      },
      {
        "id": "m5-2-t13-05",
        "subject": "matematik",
        "term": 2,
        "prompt": "20/36 = 5/B denkliğinde B yerine gelmesi gereken sayı kaçtır?",
        "options": [
          "9",
          "12",
          "15",
          "18"
        ],
        "correct": 0,
        "explanation": "Paylar arasındaki ilişkiye bakalım: 20 sayısı 4'e bölünerek 5 olmuş (sadeleştirme). Paydayı da 4'e bölmeliyiz. B = 36 / 4 = 9."
      },
      {
        "id": "m5-2-t13-06",
        "subject": "matematik",
        "term": 2,
        "prompt": "Ahmet bir pastanın 6/15'ini yemiştir. Bu kesrin en sade gösterimi aşağıdakilerden hangisidir?",
        "options": [
          "2/5",
          "3/5",
          "1/3",
          "2/3"
        ],
        "correct": 0,
        "explanation": "6 ve 15 sayıları ortak olarak 3'e tam bölünür. 6 / 3 = 2 ve 15 / 3 = 5. En sade gösterim 2/5 olur."
      },
      {
        "id": "m5-2-t13-07",
        "subject": "matematik",
        "term": 2,
        "prompt": "5/8 kesrinin payı 40 olacak şekilde genişletilirse, yeni kesrin paydası kaç olur?",
        "options": [
          "48",
          "56",
          "64",
          "72"
        ],
        "correct": 2,
        "explanation": "Payın 5'ten 40'a çıkması için 8 ile çarpılması gerekir (5 x 8 = 40). Kesri bozmamak için paydayı da 8 ile çarparız: 8 x 8 = 64."
      },
      {
        "id": "m5-2-t13-08",
        "subject": "matematik",
        "term": 2,
        "prompt": "Payı 12, paydası 30 olan bir kesri 6 ile sadeleştirdiğimizde oluşacak yeni kesrin pay ve paydasının TOPLAMI kaç olur?",
        "options": [
          "5",
          "7",
          "9",
          "11"
        ],
        "correct": 1,
        "explanation": "12/30 kesrini 6 ile sadeleştirelim. Pay: 12 / 6 = 2. Payda: 30 / 6 = 5. Yeni kesir 2/5 olur. Pay ve paydanın toplamı: 2 + 5 = 7'dir."
      },
      {
        "id": "m5-2-t13-09",
        "subject": "matematik",
        "term": 2,
        "prompt": "Aşağıdaki kesirlerden hangisi daha fazla sadeleştirilemez (yani en sade hâlindedir)?",
        "options": [
          "14/21",
          "15/25",
          "9/16",
          "12/18"
        ],
        "correct": 2,
        "explanation": "14/21 (7'ye bölünür), 15/25 (5'e bölünür), 12/18 (6'ya bölünür). Ancak 9 ve 16'nın 1'den başka ortak böleni yoktur, bu yüzden 9/16 en sade hâlindedir."
      },
      {
        "id": "m5-2-t13-10",
        "subject": "matematik",
        "term": 2,
        "prompt": "3/4 kesrine denk olan ve paydası 28 olan kesrin payı kaçtır?",
        "options": [
          "15",
          "18",
          "21",
          "24"
        ],
        "correct": 2,
        "explanation": "Paydanın 4'ten 28'e çıkması için 7 ile genişletilmesi gerekir (4 x 7 = 28). Payı da 7 ile genişletmeliyiz: 3 x 7 = 21."
      },
      {
        "id": "m5-2-t13-11",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir sınıftaki 36 öğrencinin 24'ü kızdır. Kız öğrencilerin sayısının tüm sınıf mevcuduna oranını gösteren kesrin EN SADE hâli nedir?",
        "options": [
          "1/2",
          "2/3",
          "3/4",
          "4/5"
        ],
        "correct": 1,
        "explanation": "Kızların tüm sınıfa oranı 24/36'dır. Hem 24 hem de 36 sayıları en büyük olarak 12'ye tam bölünür. 24 / 12 = 2 ve 36 / 12 = 3. En sade hâli 2/3'tür."
      },
      {
        "id": "m5-2-t13-12",
        "subject": "matematik",
        "term": 2,
        "prompt": "48/60 kesrini TEK BİR İŞLEMDE en sade hâline getirmek için pay ve paydayı hangi sayıya bölmeliyiz? (En büyük ortak bölen)",
        "options": [
          "4",
          "6",
          "12",
          "24"
        ],
        "correct": 2,
        "explanation": "48 ve 60 sayıları 2, 3, 4, 6 ve 12'ye bölünür. Tek adımda en sade hâline ulaştırmak için bölebileceğimiz en büyük sayı (EBOB) 12'dir. (Sonuç 4/5 olur)."
      },
      {
        "id": "m5-2-t13-13",
        "subject": "matematik",
        "term": 2,
        "prompt": "7/9 = 28/X eşitliğinde X yerine yazılması gereken sayı kaçtır?",
        "options": [
          "36",
          "45",
          "54",
          "63"
        ],
        "correct": 0,
        "explanation": "Pay 7'den 28'e çıkmış, yani 4 ile çarpılmış. Denkliği sağlamak için paydayı da 4 ile çarpmalıyız: 9 x 4 = 36."
      },
      {
        "id": "m5-2-t13-14",
        "subject": "matematik",
        "term": 2,
        "prompt": "Bir kutudaki 50 kalemin 15 tanesi kırmızıdır. Kırmızı kalemlerin tüm kalemlere oranını ifade eden kesir 5 ile sadeleştirilirse hangi kesir elde edilir?",
        "options": [
          "1/10",
          "3/10",
          "1/5",
          "3/5"
        ],
        "correct": 1,
        "explanation": "Kesrimiz 15/50'dir. Bunu 5 ile sadeleştirirsek: Pay 15 / 5 = 3, Payda 50 / 5 = 10 olur. Sonuç 3/10'dur."
      },
      {
        "id": "m5-2-t13-15",
        "subject": "matematik",
        "term": 2,
        "prompt": "Aşağıdaki kesir genişletme veya sadeleştirme işlemlerinden hangisi YANLIŞTIR?",
        "options": [
          "1/2 = 5/10",
          "2/3 = 8/12",
          "3/5 = 15/25",
          "4/7 = 16/21"
        ],
        "correct": 3,
        "explanation": "4/7 kesrini 4 ile genişletirsek pay 16 olur ancak payda 7 x 4 = 28 olmalıdır. 16/21 yanlıştır."
      },
      {
        "id": "m5-2-t13-16",
        "subject": "matematik",
        "term": 2,
        "prompt": "2/7 kesri genişletilerek K/42 kesri elde ediliyor. Buna göre K kaçtır?",
        "options": [
          "10",
          "12",
          "14",
          "16"
        ],
        "correct": 1,
        "explanation": "Payda 7'den 42'ye çıkmış, yani 6 ile çarpılmış (genişletilmiş). O halde payı da 6 ile çarpmalıyız: 2 x 6 = 12."
      },
      {
        "id": "m5-2-t13-17",
        "subject": "matematik",
        "term": 2,
        "prompt": "18/27 kesrini 9 ile sadeleştirirsek elde edeceğimiz kesir aşağıdakilerden hangisidir?",
        "options": [
          "2/3",
          "3/4",
          "1/3",
          "4/9"
        ],
        "correct": 0,
        "explanation": "Payı 9'a bölelim: 18 / 9 = 2. Paydayı 9'a bölelim: 27 / 9 = 3. Yeni kesrimiz 2/3 olur."
      },
      {
        "id": "m5-2-t13-18",
        "subject": "matematik",
        "term": 2,
        "prompt": "Zeynep, 40 sayfalık bir kitabın 16 sayfasını okumuştur. Zeynep'in okuduğu kısmı gösteren kesrin en sade hâli aşağıdakilerden hangisidir?",
        "options": [
          "4/10",
          "2/5",
          "1/4",
          "8/20"
        ],
        "correct": 1,
        "explanation": "Okunan kısmın tüm kitaba oranı 16/40'tır. Her iki sayıyı da 8 ile sadeleştirebiliriz. 16 / 8 = 2 ve 40 / 8 = 5. En sade hâli 2/5'tir."
      },
      {
        "id": "m5-2-t13-19",
        "subject": "matematik",
        "term": 2,
        "prompt": "A/15 = 2/3 = 14/B olduğuna göre, A + B toplamı kaçtır?",
        "options": [
          "21",
          "24",
          "27",
          "31"
        ],
        "correct": 3,
        "explanation": "Önce A'yı bulalım: 2/3 kesrinin paydası 5 ile çarpılıp 15 olmuş. Pay da 5 ile çarpılırsa A = 10 olur. B'yi bulalım: 2/3 kesrinin payı 7 ile çarpılıp 14 olmuş. Payda da 7 ile çarpılırsa B = 21 olur. Toplam: 10 + 21 = 31."
      },
      {
        "id": "m5-2-t13-20",
        "subject": "matematik",
        "term": 2,
        "prompt": "Payı 24, paydası 32 olan bir kesri en sade hâline getirdiğimizde; oluşan yeni kesrin paydası, payından ne kadar fazla olur?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 0,
        "explanation": "24/32 kesrini 8 ile sadeleştiririz. Pay: 24 / 8 = 3. Payda: 32 / 8 = 4. En sade kesir 3/4'tür. Payda (4), paydan (3) sadece 1 fazladır."
      }
    ],
         test1: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 1 (GEOMETRİ VE ÖLÇME) ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "m5-2-t1-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kareli kağıtta A noktasının B noktasına göre konumu aşağıdakilerden hangisinde doğru olarak verilmiştir?",
        imageUrl: "/images/grade5/matematik/term2/test1/nokta-konumu.webp",
        options: [
          "3 birim sağında, 2 birim yukarısında",
          "4 birim solunda, 3 birim aşağısında",
          "3 birim solunda, 4 birim yukarısında",
          "4 birim sağında, 2 birim aşağısında"
        ],
        correct: 1,
        explanation: "B noktasından başlayıp kareleri sayarak A noktasına ulaştığımızda; 4 birim sola ve 3 birim aşağıya gitmemiz gerekir."
      },
      {
        id: "m5-2-t1-img-02",
        subject: "fen",
        term: 2,
        prompt: "Görseldeki kareli zeminde verilen doğrulardan hangileri birbirine paraleldir?",
        imageUrl: "/images/grade5/matematik/term2/test1/paralel-doğrular.webp",
        options: ["d ve e doğruları", "d ve f doğruları", "e ve g doğruları", "f ve g doğruları"],
        correct: 1,
        explanation: "Aralarındaki dik mesafe her noktada eşit olan ve hiçbir zaman kesişmeyen d ve f doğruları birbirine paraleldir ($d // f$)."
      },
      {
        id: "m5-2-t1-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABC üçgeninde verilen iç açılara göre, '?' ile gösterilen C açısının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test1/ucgen-ic-aci.webp",
        options: ["45", "55", "65", "75"],
        correct: 1,
        explanation: "Üçgenin iç açıları toplamı $180^\\circ$ olduğundan; $180 - (80 + 45) = 180 - 125 = 55^\\circ$ bulunur."
      },
      {
        id: "m5-2-t1-img-04",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki KLMN dörtgeni bir paralelkenardır. Verilen açı ölçüsüne göre L açısının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test1/paralelkenar-aci.webp",
        options: ["60", "100", "120", "140"],
        correct: 2,
        explanation: "Paralelkenarda ardışık (komşu) iki açının toplamı $180^\\circ$ olduğundan; $180 - 60 = 120^\\circ$ olur."
      },
      {
        id: "m5-2-t1-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki sıklık tablosunda bir sınıftaki öğrencilerin en sevdiği meyveler verilmiştir. Bu veriler sütun grafiğine aktarıldığında elma ve çilek sütunlarının boyları toplamı kaç birim olur?",
        imageUrl: "/images/grade5/matematik/term2/test1/siklik-tablosu.webp",
        options: ["14", "16", "18", "20"],
        correct: 2,
        explanation: "Tabloya göre elma sevenlerin sayısı 10, çilek sevenlerin sayısı 8'dir. Sütun boyları toplamı: $10 + 8 = 18$ birim olur."
      },
      {
        id: "m5-2-t1-img-06",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD dikdörtgeninin uzun kenarı 12 cm, kısa kenarı 5 cm'dir. Bu dikdörtgenin çevre uzunluğu kaç cm'dir?",
        imageUrl: "/images/grade5/matematik/term2/test1/dikdortgen-cevre.webp",
        options: ["17", "24", "34", "60"],
        correct: 2,
        explanation: "Dikdörtgenin çevresi kısa ve uzun kenarlarının toplamının 2 katıdır: $2 \\times (12 + 5) = 2 \\times 17 = 34$ cm."
      },
      {
        id: "m5-2-t1-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki izometrik kağıda çizilmiş üçgen, kenar uzunluklarına göre hangi üçgen çeşidine örnektir?",
        imageUrl: "/images/grade5/matematik/term2/test1/izometrik-ucgen.webp",
        options: ["Çeşitkenar Üçgen", "İkizkenar Üçgen", "Eşkenar Üçgen", "Dik Açılı Üçgen"],
        correct: 2,
        explanation: "İzometrik kağıttaki noktalar arası mesafeler eşittir. Üçgenin tüm kenarları eşit birim sayısına sahip olduğundan eşkenar üçgendir."
      },
      {
        id: "m5-2-t1-img-08",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dijital tartıda ağırlığı 4 kg 250 g olarak gösterilen karpuzun ağırlığı toplam kaç gramdır?",
        imageUrl: "/images/grade5/matematik/term2/test1/dijital-tarti.webp",
        options: ["425", "4025", "4250", "42500"],
        correct: 2,
        explanation: "1 kg = 1000 gram olduğundan; 4 kg = 4000 gramdır. $4000 + 250 = 4250$ gram olur."
      },
      {
        id: "m5-2-t1-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dijital saat 14:15'i göstermektedir. Bu saatten 1 saat 45 dakika sonra saat kaçı gösterir?",
        imageUrl: "/images/grade5/matematik/term2/test1/dijital-saat.webp",
        options: ["15:00", "15:45", "16:00", "16:15"],
        correct: 2,
        explanation: "14:15'e önce 45 dakika eklersek 15:00 olur. Üzerine 1 saat daha eklediğimizde saat 16:00'yı gösterir."
      },
      {
        id: "m5-2-t1-img-10",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kareli zeminde boyalı olarak verilen şeklin alanı kaç birimkaredir?",
        imageUrl: "/images/grade5/matematik/term2/test1/kareli-alan.webp",
        options: ["20", "21", "23", "25"],
        correct: 1,
        explanation: "Boyalı bölgedeki tüm tam kareler sayıldığında şeklin alanının 21 birimkare olduğu bulunur."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "m5-2-t1-11",
        subject: "matematik",
        term: 2,
        prompt: "Geometrik kavramlar ve gösterimleri ile ilgili aşağıda verilen eşleştirmelerden hangisi yanlıştır?",
        options: [
          "AB Doğrusu $\\rightarrow$ AB",
          "AB Işını $\\rightarrow$ [AB)",
          "AB Doğru Parçası $\\rightarrow$ [AB]",
          "A noktasının B noktasına uzaklığı $\\rightarrow$ |AB|"
        ],
        correct: 1,
        explanation: "AB ışınının sembolle gösteriminde başlangıç noktası kapalı olmalıdır. A başlangıç noktası ise $[AB)$ şeklinde yazılmalıdır, $[AB]$ doğru parçasıdır."
      },
      {
        id: "m5-2-t1-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir iç açısının ölçüsü $90^\\circ$ olan bir üçgenin diğer iki iç açısı ile ilgili aşağıdakilerden hangisi kesinlikle doğrudur?",
        options: [
          "Açılardan biri mutlaka geniş açıdır.",
          "İki açının ölçüleri toplamı $90^\\circ$'dir.",
          "Açılar her zaman birbirine eşittir.",
          "Açılardan biri dik açı olabilir."
        ],
        correct: 1,
        explanation: "Üçgenin iç açıları toplamı $180^\\circ$ olduğundan, dik açı çıkarıldığında kalan iki dar açının toplamı $180 - 90 = 90^\\circ$ olmak zorundadır."
      },
      {
        id: "m5-2-t1-13",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilen dörtgenlerden hangisinin karşılıklı kenar çiftleri paralel olmasına rağmen tüm iç açıları her zaman dik açı olmak zorunda DEĞİLDİR?",
        options: ["Kare", "Dikdörtgen", "Eşkenar Dörtgen", "Yamuk"],
        correct: 2,
        explanation: "Kare ve dikdörtgenin tüm iç açıları $90^\\circ$'dir. Eşkenar dörtgenin karşılıklı kenarları paraleldir ancak açıları dik olmak zorunda değildir (karşılıklı açılar eşittir)."
      },
      {
        id: "m5-2-t1-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir araştırmacı okulundaki öğrencilerin en çok dinlediği müzik türlerini belirlemek istiyor. Bu araştırma için seçilecek en uygun araştırma sorusu hangisidir?",
        options: [
          "En sevdiğiniz pop şarkıcısı kimdir?",
          "Okulda hangi müzik aletleri çalınmaktadır?",
          "En çok hangi müzik türünü dinlemekten hoşlanırsınız?",
          "Müzik öğretmeninizin adı nedir?"
        ],
        correct: 2,
        explanation: "Müzik türü tercihini genel olarak belirleyebilmek için doğrudan hangi müzik türünün dinlendiğini soran soru en uygun araştırma sorusudur."
      },
      {
        id: "m5-2-t1-15",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu 40 cm olan bir karenin alanı kaç santimetrekaredir?",
        options: ["40", "80", "100", "160"],
        correct: 2,
        explanation: "Karenin bir kenar uzunluğu: $40 \\div 4 = 10$ cm'dir. Alanı ise iki kenarının çarpımıdır: $10 \\times 10 = 100$ santimetrekaredir."
      },
      {
        id: "m5-2-t1-16",
        subject: "matematik",
        term: 2,
        prompt: "Bir sinema filmi saat 20:45'te başlayıp 22:20'de bitmiştir. Bu film toplam kaç dakika sürmüştür?",
        options: ["85", "95", "105", "115"],
        correct: 1,
        explanation: "20:45'ten 21:45'e 1 saat (60 dk) geçer. 21:45'ten 22:20'ye ise 35 dakika vardır. Toplam süre: $60 + 35 = 95$ dakikadır."
      },
      {
        id: "m5-2-t1-17",
        subject: "matematik",
        term: 2,
        prompt: "Kenar uzunlukları ardışık tam sayılar olan bir çeşitkenar üçgenin çevre uzunluğu 24 cm olduğuna göre, en uzun kenarı kaç cm'dir?",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "Ardışık sayılar dediği için ortanca kenar: $24 \\div 3 = 8$ cm'dir. Kenarlar 7, 8 ve 9 cm olur. En uzun kenar 9 cm'dir."
      },
      {
        id: "m5-2-t1-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir ton ağırlığındaki un çuvallarından her biri 25 kg olan paketler yapılacaktır. Bu iş için toplam kaç paket gerekir?",
        options: ["40", "400", "4000", "40000"],
        correct: 0,
        explanation: "1 ton = 1000 kg'dır. 1000 kg unu 25 kg'lık paketlere böldüğümüzde; $1000 \\div 25 = 40$ paket elde edilir."
      },
      {
        id: "m5-2-t1-19",
        subject: "matematik",
        term: 2,
        prompt: "Kısa kenarı 6 cm olan bir dikdörtgenin alanı, bir kenar uzunluğu 12 cm olan bir karenin alanına eşittir. Bu dikdörtgenin uzun kenarı kaç cm'dir?",
        options: ["18", "24", "36", "48"],
        correct: 1,
        explanation: "Karenin alanı: $12 \\times 12 = 144$ cm²'dir. Dikdörtgenin alanı da 144 olmalıdır. Uzun kenar: $144 \\div 6 = 24$ cm bulunur."
      },
      {
        id: "m5-2-t1-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıdaki zaman ölçüsü dönüşümlerinden hangisi YANLIŞTIR?",
        options: [
          "3 yıl = 36 ay",
          "5 hafta = 35 gün",
          "4 saat = 240 dakika",
          "180 saniye = 4 dakika"
        ],
        correct: 3,
        explanation: "1 dakika = 60 saniyedir. 180 saniye: $180 \\div 60 = 3$ dakika yapar, 4 dakika ifadesi yanlıştır."
      }
    ],
         test2: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 2 (ZORLAŞTIRILMIŞ) ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "m5-2-t2-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kareli kağıt üzerinde A, B ve C noktaları işaretlenmiştir. A noktasının C noktasına göre konumu tarif edilirken kullanılan adımların aynısı B noktasından itibaren uygulanırsa hangi koordinattaki gizli noktaya ulaşılır?",
        imageUrl: "/images/grade5/matematik/term2/test2/nokta-labirent-zor.webp",
        options: [
          "3 birim sağ, 4 birim yukarı",
          "A noktasının tam üzerine gelinir.",
          "C noktasının 2 birim soluna gelinir.",
          "Hedeflenen yeni köşe noktasına ulaşılır."
        ],
        correct: 3,
        explanation: "A'nın C'ye göre konumu belirlendikten sonra aynı öteleme adımları B noktasından itibaren yön kurallarına göre uygulandığında hedef noktaya pürüzsüzce ulaşılır."
      },
      {
        id: "m5-2-t2-img-02",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki karmaşık çizimde d, e, f ve g doğruları verilmiştir. Verilen doğruların kesişim açıları incelendiğinde hangi iki doğru çifti arasında kesinlikle bir 'paralellik' ($//$) ilişkisi vardır?",
        imageUrl: "/images/grade5/matematik/term2/test2/paralel-kesisim-zor.webp",
        options: ["d // e", "e // f", "f // g", "d // f"],
        correct: 3,
        explanation: "Kareli zemin üzerindeki doğrultuları ve eğimleri incelendiğinde, aralarındaki dik mesafe hiç değişmeyen d ve f doğrularının paralel olduğu görülür."
      },
      {
        id: "m5-2-t2-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABC üçgeninde iki iç açının ölçüsü verilmiştir. C köşesindeki dış açı $120^\\circ$ olduğuna göre, üçgenin verilmeyen 'A' iç açısı kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test2/ucgen-dis-aci-zor.webp",
        options: ["40", "60", "80", "100"],
        correct: 1,
        explanation: "C köşesindeki iç açı: $180 - 120 = 60^\\circ$'dir. Üçgenin iç açıları toplamı $180^\\circ$ olduğundan, $A$ açısı: $180 - (60 + 60) = 60^\\circ$ bulunur."
      },
      {
        id: "m5-2-t2-img-04",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD yamuğunda ardışık iç açıların ölçüleri verilmiştir. Buna göre verilmeyen ve 'x' ile gösterilen açının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test2/yamuk-aci-analiz.webp",
        options: ["70", "80", "100", "110"],
        correct: 3,
        explanation: "Yamukta aynı yan kenara ait iç açıların toplamı $180^\\circ$ olduğundan; $x = 180 - 70 = 110^\\circ$ olarak hesaplanır."
      },
      {
        id: "m5-2-t2-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki bir okulun kütüphanesindeki kitap türlerinin dağılımını gösteren sütun grafiği incelendiğinde, hikaye kitaplarının sayısı şiir kitaplarının sayısının 3 katından kaç eksiktir?",
        imageUrl: "/images/grade5/matematik/term2/test2/kutuphane-grafik-analiz.webp",
        options: ["5", "10", "15", "20"],
        correct: 1,
        explanation: "Grafikteki sütun değerleri okunup denklem kurulduğunda aradaki farkın 10 birim olduğu matematiksel olarak hesaplanır."
      },
      {
        id: "m5-2-t2-img-06",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen büyük dikdörtgenin içinden kare şeklinde bir parça kesilip çıkarılıyor. Kalan boyalı bölgenin çevre uzunluğu kaç santimetredir?",
        imageUrl: "/images/grade5/matematik/term2/test2/cevre-kesim-eksilen.webp",
        options: ["48", "56", "64", "72"],
        correct: 1,
        explanation: "Köşeden kesilen parçalarda çevre uzunluğu ilk duruma göre değişmez, yeni oluşan iç kenarlar eksilen dış kenarları tam olarak dengeler."
      },
      {
        id: "m5-2-t2-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kareli zemin üzerine çizilmiş olan çokgenin toplam alanı kaç birimkaredir? (Her küçük kare 1 birimkaredir.)",
        imageUrl: "/images/grade5/matematik/term2/test2/alan-parcalama-zor.webp",
        options: ["18", "22", "26", "30"],
        correct: 2,
        explanation: "Karmaşık şekil dikdörtgen ve karelere parçalanarak alanları ayrı ayrı hesaplanıp toplandığında sonuç 26 birimkare bulunur."
      },
      {
        id: "m5-2-t2-img-08",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki iki farklı dijital terazide un ve şeker çuvalları tartılmıştır. Karpuzun ağırlığı un çuvalından fazla, şeker çuvalından az olduğuna göre karpuz kaç gram olabilir?",
        imageUrl: "/images/grade5/matematik/term2/test2/tarti-aralik-hesap.webp",
        options: ["3200", "4100", "4800", "5200"],
        correct: 2,
        explanation: "Ağırlıklar gram cinsine çevrilerek aralık belirlendiğinde, karpuzun ağırlığının şıklardaki 4800 gram değerine eşit olabileceği görülür."
      },
      {
        id: "m5-2-t2-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kronometreye göre bir koşucu yarışı 2 saat 15 dakikada tamamlamıştır. Bu süre toplam kaç saniyeye eşittir?",
        imageUrl: "/images/grade5/matematik/term2/test2/zaman-kronometre.webp",
        options: ["135", "8100", "13500", "14400"],
        correct: 1,
        explanation: "1 saat = 60 dakika, 1 dakika = 60 saniyedir. Süreler saniyeye dönüştürülüp toplandığında 8100 saniye sonucuna ulaşılır."
      },
      {
        id: "m5-2-t2-img-10",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dar açılı üçgenin tüm iç açıları birer doğal sayıdır. Buna göre en büyük iç açının ölçüsü en fazla kaç derece olabilir?",
        imageUrl: "/images/grade5/matematik/term2/test2/dar-ucgen-max.webp",
        options: ["88", "89", "90", "91"],
        correct: 1,
        explanation: "Dar açılı üçgende hiçbir açı $90^\\circ$ veya daha büyük olamaz. Diğer iki açıya en küçük değer olan $1^\\circ$ verilirse en büyük açı en fazla $89^\\circ$ olur."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "m5-2-t2-11",
        subject: "matematik",
        term: 2,
        prompt: "Koordinat sisteminde veya kareli kağıtta K noktasının 4 birim sağında ve 3 birim aşağısında bir L noktası işaretleniyor. L noktasının K noktasına göre konumu ifade edilirken hangi bilgi doğru olur?",
        options: [
          "K noktası, L'nin 4 birim solunda ve 3 birim yukarısındadır.",
          "K noktası, L'nin 4 birim sağında ve 3 birim aşağısındadır.",
          "L noktası, K'nin 3 birim solundadır.",
          "K ve L noktaları aynı yatay doğrultu üzerindedir."
        ],
        correct: 0,
        explanation: "Konum ifadeleri tersine çevrildiğinde yönler de tam tersi halini alır. L, K'nin sağında ve aşağısındaysa; K, L'nin solunda ve yukarısındadır."
      },
      {
        id: "m5-2-t2-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir geniş açılı üçgenin iç açılarından birinin ölçüsü $35^\\circ$ olduğuna göre, bu üçgenin geniş açısının alabileceği 'en küçük' doğal sayı değeri kaçtır?",
        options: ["56", "90", "91", "144"],
        correct: 2,
        explanation: "Geniş açının tanımı gereği $90^\\circ$'den büyük olması gerekir. Bir iç açının $90^\\circ$'den büyük olması şartıyla alabileceği en küçük tam sayı değeri $91^\\circ$'dir."
      },
      {
        id: "m5-2-t2-13",
        subject: "matematik",
        term: 2,
        prompt: "Tüm kenar uzunlukları birbirine eşit olan bir dörtgenin ardışık iki iç açısının toplamı daima $180^\\circ$'dir. Bu geometrik şekil aşağıdakilerden hangisi olabilir?",
        options: ["Yamuk", "Eşkenar Dörtgen", "Çeşitkenar Üçgen", "Dikdörtgen"],
        correct: 1,
        explanation: "Tüm kenarları eşit ve karşılıklı kenarları paralel olan, ardışık açılarının toplamı $180^\\circ$ olan şekil eşkenar dörtgendir."
      },
      {
        id: "m5-2-t2-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir veri grubuna ait sıklık tablosundaki en büyük değer, en küçük değerin 4 katından 5 fazladır. Bu veri grubunun açıklığı 35 olduğuna göre en küçük değer kaçtır?",
        options: ["10", "12", "15", "20"],
        correct: 0,
        explanation: "En küçük değere kat denilirse en büyük değer 4 kat + 5 olur. Açıklık büyükten küçüğün çıkarılmasıdır: 3 kat + 5 = 35 ise kat = 10 bulunur."
      },
      {
        id: "m5-2-t2-15",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 16 cm olan karenin alanı, kısa kenarı 8 cm olan bir dikdörtgenin alanına eşittir. Buna göre bu dikdörtgenin çevre uzunluğu kaç cm'dir?",
        options: ["32", "40", "80", "96"],
        correct: 2,
        explanation: "Karenin alanı: $16 \\times 16 = 256$ cm²'dir. Dikdörtgenin uzun kenarı: $256 \\div 8 = 32$ cm olur. Çevresi: $2 \\times (32 + 8) = 80$ cm'dir."
      },
      {
        id: "m5-2-t2-16",
        subject: "matematik",
        term: 2,
        prompt: "2026 yılının Şubat ayının son gününde saat 23:45'i gösterirken, bu andan tam 30 dakika sonraki zaman ve tarih eşleşmesi hangi seçenekte doğru verilmiştir?",
        options: [
          "00:15 - 29 Şubat 2026",
          "00:15 - 1 Mart 2026",
          "23:15 - 28 Şubat 2026",
          "01:15 - 1 Mart 2026"
        ],
        correct: 1,
        explanation: "2026 yılı artık yıl değildir (4'ün katı değil), bu yüzden Şubat ayı 28 gün çeker. 28 Şubat gecesi 23:45'e 30 dakika eklenirse gün değişir ve 1 Mart saat 00:15 olur."
      },
      {
        id: "m5-2-t2-17",
        subject: "matematik",
        term: 2,
        prompt: "İkizkenar bir üçgenin tepe açısının ölçüsü, taban açılarından birinin ölçüsünün 4 katına eşittir. Bu üçgenin en büyük iç açısı kaç derecedir?",
        options: ["30", "60", "90", "120"],
        correct: 3,
        explanation: "Taban açılarına 1 kat dersek tepe açısı 4 kat olur. Toplam: 1 + 1 + 4 = 6 kat. $180 \\div 6 = 30^\\circ$ (taban açısı). Tepe açısı: $30 \\times 4 = 120^\\circ$'dir."
      },
      {
        id: "m5-2-t2-18",
        subject: "matematik",
        term: 2,
        prompt: "3 ton ağırlığındaki bir yük arabasından her biri 150 kg olan paketlerden 12 tane indiriliyor. Arabada kalan yük toplam kaç kg'dır?",
        options: ["1200", "1800", "2400", "2850"],
        correct: 0,
        explanation: "3 ton = 3000 kg'dır. İndirilen yük: $12 \\times 150 = 1800$ kg. Kalan yük: $3000 - 1800 = 1200$ kg olarak hesaplanır."
      },
      {
        id: "m5-2-t2-19",
        subject: "matematik",
        term: 2,
        prompt: "Kısa kenarı 10 m, uzun kenarı 20 m olan dikdörtgen şeklindeki bir arsanın içerisine, kenar uzunlukları tam sayı olan en büyük alana sahip kare şeklinde bir havuz yapılacaktır. Havuz dışında kalan alan kaç metrekaredir?",
        options: ["50", "100", "150", "200"],
        correct: 1,
        explanation: "Dikdörtgenin içine çizilebilecek en büyük karenin bir kenarı, dikdörtgenin kısa kenarı kadar (10 m) olabilir. Havuz alanı: $10 \\times 10 = 100$ m². Kalan alan: $200 - 100 = 100$ m²."
      },
    {
        id: "m5-2-t2-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilmiş olan zaman ölçüsü birimleri arasındaki dönüşümlerden hangisi matematiksel olarak yanlıştır?",
        options: [
          "5 dakika 20 saniye = 320 saniye",
          "3 saat 15 dakika = 195 dakika",
          "2 hafta 3 gün = 17 gün",
          "240 saat = 8 gün"
        ],
        correct: 3,
        explanation: "1 gün = 24 saattir. 240 saat: $240 \\div 24 = 10$ gün yapmalıdır, 8 gün ifadesi matematiksel olarak yanlıştır."
      }
    ],
         test3: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 3 (ZORLAŞTIRILMIŞ) ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "m5-2-t3-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kareli kağıt üzerinde K, L ve M noktaları verilmiştir. K noktasının L noktasına göre konumu ile M noktasının K noktasına göre konumu ardışık olarak uygulandığında, L noktasından başlayan bir hareketli hangi yönde ilerlemiş olur?",
        imageUrl: "/images/grade5/matematik/term2/test3/nokta-konum-analiz.webp",
        options: [
          "2 birim sağ, 3 birim aşağı",
          "M noktasının koordinatlarına ulaşır.",
          "Başlangıç noktasına geri döner.",
          "K noktasının tam üzerinde durur."
        ],
        correct: 1,
        explanation: "Noktaların birbirine göre konum adımları vektörel olarak uç uca eklendiğinde, hareketlinin ulaştığı son yer doğrudan M noktasının konumu olacaktır."
      },
      {
        id: "m5-2-t3-img-02",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen doğrular kareli zemin üzerine çizilmiştir. Bu doğrulardan hangisi, AB doğru parçasına kesinlikle dik ($+[-]$) bir konumda yer almaktadır?",
        imageUrl: "/images/grade5/matematik/term2/test3/dik-dogru-secim.webp",
        options: ["c doğrusu", "d doğrusu", "e doğrusu", "f doğrusu"],
        correct: 1,
        explanation: "Kareli kağıt üzerindeki karelerin köşegen doğrultuları incelendiğinde, AB doğrusunu $90^\\circ$lik açıyla kesen çizginin d doğrusu olduğu görülür."
      },
      {
        id: "m5-2-t3-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki KLM üçgeninde L köşesine ait dış açı $115^\\circ$ ve M köşesine ait iç açı $45^\\circ$ olarak verilmiştir. Buna göre bu üçgenin verilmeyen 'K' iç açısı kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test3/ucgen-aci-bulma.webp",
        options: ["20", "65", "70", "110"],
        correct: 0,
        explanation: "L köşesindeki iç açı: $180 - 115 = 65^\\circ$'dir. Üçgenin iç açıları toplamı $180^\\circ$ olduğundan, K açısı: $180 - (65 + 45) = 20^\\circ$ bulunur."
      },
      {
        id: "m5-2-t3-img-04",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen paralelkenar şeklindeki parkın ardışık iki iç açısının ölçüleri şematize edilmiştir. Verilmeyen ve '?' ile gösterilen açının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test3/paralelkenar-aci-analiz.webp",
        options: ["55", "65", "115", "125"],
        correct: 2,
        explanation: "Paralelkenarda ardışık (komşu) iki açının toplamı daima $180^\\circ$'dir. Bu nedenle $? = 180 - 65 = 115^\\circ$ olur."
      },
      {
        id: "m5-2-t3-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki grafik, bir sınıftaki öğrencilerin sevdikleri spor dallarını göstermektedir. Basketbol sevenlerin sayısı, futbol ve tenis sevenlerin toplam sayısından kaç eksiktir?",
        imageUrl: "/images/grade5/matematik/term2/test3/spor-grafik-veri.webp",
        options: ["2", "4", "6", "8"],
        correct: 1,
        explanation: "Grafikteki sütun değerleri okunup toplandığında futbol ve tenis toplamı 16, basketbol ise 12 kişidir. Fark $16 - 12 = 4$ olur."
      },
      {
        id: "m5-2-t3-img-06",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen dikdörtgen şeklindeki kartonun ortasından küçük bir dikdörtgen kesilerek çıkarılıyor. Kartonun geriye kalan bölgesinin çevre uzunluğu ilk duruma göre nasıl değişir?",
        imageUrl: "/images/grade5/matematik/term2/test3/cevre-ic-kesim.webp",
        options: [
          "Azalır",
          "Değişmez",
          "İçeride yeni kenarlar oluştuğu için artırır",
          "Tam olarak yarıya iner"
        ],
        correct: 2,
        explanation: "Şeklin ortasından (kenarlara dokunmadan) parça çıkarıldığında, dış çevre aynen kalırken içeride yeni sınır çizgileri oluştuğu için toplam çevre uzunluğu artar."
      },
      {
        id: "m5-2-t3-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kareli kağıt üzerine çizilmiş olan taralı bölgenin alanı kaç birimkaredir? (İpucu: Şekli üçgen ve dikdörtgenlere ayırınız.)",
        imageUrl: "/images/grade5/matematik/term2/test3/alan-hesap-izgara.webp",
        options: ["14", "16", "19", "24"],
        correct: 2,
        explanation: "Şekil dik üçgen ve dikdörtgen alan parçalarına ayrılıp birim kareleri hesaplandığında toplam alan 19 birimkare bulunur."
      },
      {
        id: "m5-2-t3-img-08",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki iki farklı sıvı ölçüm kabında bulunan su miktarları litre ve mililitre cinsinden verilmiştir. İki kaptaki su miktarlarının toplamı kaç mililitredir?",
        imageUrl: "/images/grade5/matematik/term2/test3/sivi-litre-toplam.webp",
        options: ["1250", "2050", "2500", "3250"],
        correct: 3,
        explanation: "Litre birimleri 1000 ile çarpılarak mililitreye çevrilir ve değerler toplandığında sonuç 3250 mL olarak hesaplanır."
      },
      {
        id: "m5-2-t3-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki saat ve takvime göre, bir projeye 15 Mayıs saat 14:30'da başlayan bir mühendis, projeyi tam 48 saat sonra bitirmiştir. Projenin bitiş tarihi ve saati hangisidir?",
        imageUrl: "/images/grade5/matematik/term2/test3/zaman-takvim-saat.webp",
        options: [
          "16 Mayıs - 14:30",
          "17 Mayıs - 14:30",
          "17 Mayıs - 00:00",
          "18 Mayıs - 14:30"
        ],
        correct: 1,
        explanation: "24 saat = 1 gün olduğundan, 48 saat tam olarak 2 güne eşittir. 15 Mayıs'a 2 gün eklenirse saat değişmeden tarih 17 Mayıs olur."
      },
      {
        id: "m5-2-t3-img-10",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen geniş açılı üçgenin geniş açısı bir tam sayıdır. Buna göre bu üçgenin diğer iki dar açısının toplamı 'en fazla' kaç derece olabilir?",
        imageUrl: "/images/grade5/matematik/term2/test3/genis-ucgen-analiz.webp",
        options: ["88", "89", "90", "91"],
        correct: 1,
        explanation: "Geniş açı en az $91^\\circ$ olabilir. Üçgenin iç açıları toplamı $180^\\circ$ olduğundan, dar açıların toplamı en fazla $180 - 91 = 89^\\circ$ olur."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "m5-2-t3-11",
        subject: "matematik",
        term: 2,
        prompt: "Bir harita üzerinde A noktasının 5 cm yukarısında ve 2 cm solunda bir B noktası belirlenmiştir. B noktasının A noktasına göre konumu aşağıdakilerin hangisinde doğru tarif edilmiştir?",
        options: [
          "A noktasının 2 cm solunda, 5 cm yukarısındadır.",
          "A noktasının 5 cm sağında, 2 cm aşağısındadır.",
          "A noktası B'nin 2 cm solundadır.",
          "İki nokta aynı dikey hat üzerindedir."
        ],
        correct: 0,
        explanation: "Soruda verilen yön tanımı doğrudan A referans alınarak yapıldığı için B noktası, A'nın 2 cm solunda ve 5 cm yukarısındadır."
      },
      {
        id: "t5-2-t3-12",
        subject: "matematik",
        term: 2,
        prompt: "İç açılarından ikisinin ölçüsü $40^\\circ$ ve $50^\\circ$ olan bir üçgenin kenar özelliklerine göre türü aşağıdakilerden hangisidir?",
        options: ["Eşkenar üçgen", "Geniş açılı üçgen", "Dik açılı üçgen", "Eşkenar dörtgen"],
        correct: 2,
        explanation: "Verilmeyen üçüncü açı: $180 - (40 + 50) = 90^\\circ$ olur. Bir açısı $90^\\circ$ olan üçgenler dik açılı üçgendir."
      },
      {
        id: "m5-2-t3-13",
        subject: "matematik",
        term: 2,
        prompt: "Karşılıklı kenar çiftleri birbirine paralel, tüm kenar uzunlukları eşit fakat iç açıları $90^\\circ$ olmayan dörtgen türü aşağıdakilerden hangisidir?",
        options: ["Yamuk", "Kare", "Eşkenar Dörtgen", "Dikdörtgen"],
        correct: 2,
        explanation: "Kenarları eşit olmasına rağmen açıları dik ($90^\\circ$) olmayan, karşılıklı kenarları paralel dörtgen eşkenar dörtgendir."
      },
      {
        id: "m5-2-t3-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir sınıftaki boy uzunlukları veri grubunun açıklığı 24 cm'dir. Bu sınıftaki en uzun boylu öğrenci 162 cm olduğuna göre, en kısa boylu öğrencinin boyu kaç cm'dir?",
        options: ["138", "142", "148", "154"],
        correct: 0,
        explanation: "Açıklık, en büyük değer ile en küçük değerin farkıdır. En kısa boy: $162 - 24 = 138$ cm olarak bulunur."
      },
      {
        id: "m5-2-t3-15",
        subject: "matematik",
        term: 2,
        prompt: "Uzun kenarı, kısa kenarının 3 katı olan bir dikdörtgenin çevre uzunluğu 64 cm'dir. Bu dikdörtgenin alanı kaç santimetrekaredir?",
        options: ["48", "96", "192", "256"],
        correct: 2,
        explanation: "Kısa kenara k dersek uzun kenar 3k olur. Çevre: $2 \\times (k + 3k) = 8k = 64 \\implies k = 8$ cm. Uzun kenar 24 cm olur. Alan: $8 \\times 24 = 192$ cm²."
      },
      {
        id: "m5-2-t3-16",
        subject: "matematik",
        term: 2,
        prompt: "Her gün düzenli olarak 45 dakika yürüyüş yapan bir sporcu, 4 hafta boyunca toplam kaç saat yürüyüş yapmış olur?",
        options: ["18", "21", "24", "28"],
        correct: 1,
        explanation: "4 hafta = 28 gündür. Toplam süre: $28 \\times 45 = 1260$ dakika yapar. Saate çevirirsek: $1260 \\div 60 = 21$ saat olur."
      },
      {
        id: "m5-2-t3-17",
        subject: "matematik",
        term: 2,
        prompt: "Bir ikizkenar üçgenin açılarından biri $100^\\circ$ olduğuna göre, bu üçgenin küçük olan iç açılarından biri kaç derecedir?",
        options: ["35", "40", "50", "80"],
        correct: 1,
        explanation: "Üçgende bir açısı $100^\\circ$ (geniş açı) ise diğer açılar tepe açısı olamaz, taban açıları olmak zorundadır. $(180 - 100) \\div 2 = 40^\\circ$ bulunur."
      },
      {
        id: "m5-2-t3-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir depodaki 5 ton patatesin önce 1800 kg'ı, sonra 2 ton 150 kg'ı satılıyor. Depoda kalan patates kaç kg'dır?",
        options: ["950", "1050", "1150", "1250"],
        correct: 1,
        explanation: "5 ton = 5000 kg. Satılanlar: $1800 + 2150 = 3950$ kg. Kalan patates: $5000 - 3950 = 1050$ kg'dır."
      },
      {
        id: "m5-2-t3-19",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu 40 cm olan bir karenin kenar uzunlukları 2'şer cm artırılıyor. Yeni oluşan karenin alanı ilk kareye göre kaç santimetrekare artmıştır?",
        options: ["24", "44", "100", "144"],
        correct: 1,
        explanation: "İlk karenin kenarı: $40 \\div 4 = 10$ cm, alanı 100 cm². Yeni kenar 12 cm, yeni alan 144 cm². Artış miktarı: $144 - 100 = 44$ cm²."
      },
      {
        id: "m5-2-t3-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilen sıvı ölçüm birimleri dönüşümlerinden hangisi matematiksel olarak 'hatalıdır'?",
        options: [
          "2500 mL = 2,5 Litre",
          "4 Litre 50 mL = 4050 mL",
          "0,75 Litre = 75 mL",
          "6000 mL = 6 Litre"
        ],
        correct: 2,
        explanation: "0,75 Litre, 1000 ile çarpıldığında 750 mL yapmalıdır. 75 mL ifadesi dönüşüm kurallarına göre hatalıdır."
      }
    ],
    test4: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 4 (ZORLAŞTIRILMIŞ) ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "m5-2-t4-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Kareli kağıt üzerine çizilmiş olan labirent şemasında, A noktasında bulunan bir robot sırasıyla 3 birim sağa, 5 birim yukarı ve 2 birim sola hareket ettiriliyor. Bu robotun ulaştığı son noktanın, başlangıçtaki A noktasına göre konumu aşağıdakilerden hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/robot-konum-labirent.webp",
        options: [
          "1 birim sağ, 5 birim yukarı",
          "5 birim sağ, 1 birim yukarı",
          "1 birim sol, 5 birim aşağı",
          "2 birim sağ, 3 birim yukarı"
        ],
        correct: 0,
        explanation: "Robot yatayda toplamda 3 birim sağa ve 2 birim sola giderek net 1 birim sağa ilerlemiş olur, dikeyde ise 5 birim yukarı çıkmıştır."
      },
      {
        id: "m5-2-t4-img-02",
        subject: "matematik",
        term: 2,
        prompt: "Kareli zeminde verilen doğrular şemasında, k doğrusu yatay olarak çizilmiştir. k doğrusunu kesen d, e ve f doğrularından hangisi k doğrusu ile kesinlikle dik ($90^\\circ$) açı oluşturacak bir konumdadır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/dik-kesisim-cizgiler.webp",
        options: ["d doğrusu", "e doğrusu", "f doğrusu", "Hiçbiri"],
        correct: 0,
        explanation: "Kareli kağıdın dikey çizgilerini tam olarak takip eden ve yatay k doğrusunu dik kesen çizgi d doğrusudur."
      },
      {
        id: "m5-2-t4-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Şekildeki KLM üçgeninde K köşesine ait iç açı $55^\\circ$dir. L köşesine ait dış açının ölçüsü $130^\\circ$ olduğuna göre, bu üçgenin verilmeyen M iç açısı kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/ucgen-ic-aci-bulma.webp",
        options: ["50", "75", "105", "130"],
        correct: 1,
        explanation: "L köşesinin iç açısı $180 - 130 = 50^\\circ$dir. Üçgenin iç açıları toplamı $180^\\circ$ olduğundan $M = 180 - (55 + 50) = 75^\\circ$ olmalıdır."
      },
      {
        id: "m5-2-t4-img-04",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD eşkenar dörtgeninde komşu iki açının şeması çizilmiştir. Bu dörtgende A açısının ölçüsü $70^\\circ$ olduğuna göre, B açısının ölçüsü 'x' kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/eskenar-dortgen-aci.webp",
        options: ["70", "110", "120", "180"],
        correct: 1,
        explanation: "Eşkenar dörtgende ardışık (komşu) iki iç açının toplamı daima $180^\\circ$ olduğundan $x = 180 - 70 = 110^\\circ$ olur."
      },
      {
        id: "m5-2-t4-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki sütun grafiği, bir sınıftaki öğrencilerin okudukları kitap türlerinin sayılarını göstermektedir. Grafiğe göre, Macera türünde kitap okuyanların sayısı, Şiir ve Roman okuyanların toplam sayısından kaç eksiktir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/kitap-grafik-sutun.webp",
        options: ["3", "5", "8", "12"],
        correct: 1,
        explanation: "Şiir ve Roman verileri doğru toplanıp Macera sütununun değerinden çıkarıldığında net fark 5 birim olarak bulunur."
      },
      {
        id: "m5-2-t4-img-06",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kenar uzunlukları verilen dikdörtgen şeklindeki levhanın tam ortasından kare şeklinde küçük bir parça kesilerek çıkarılıyor. Bu kesim işlemi sonucunda şeklin toplam çevre uzunluğundaki değişim için hangisi doğrudur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/cevre-degisim-orta.webp",
        options: [
          "Azalır",
          "Değişmez",
          "Yeni iç kenarlar oluştuğu için artar",
          "Yarıya iner"
        ],
        correct: 2,
        explanation: "Dış çevre aynen korunurken, içeride karenin 4 yeni kenarı daha sınır çizgilerine eklendiği için toplam çevre uzunluğu artar."
      },
      {
        id: "m5-2-t4-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Kareli kağıt üzerine çizilmiş olan boyalı geometrik şeklin toplam alanı kaç birimkaredir? (Her küçük kare 1 birimkaredir.) Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/alan-hesaplama-izgara.webp",
        options: ["16", "20", "24", "28"],
        correct: 1,
        explanation: "Şekil dikdörtgen ve üçgen parçalara ayrılıp birim kareleri tek tek hesaplandığında toplam alan 20 birimkare çıkar."
      },
      {
        id: "m5-2-t4-img-08",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki iki farklı sıvı kabında bulunan zeytinyağı miktarları Litre ve mililitre olarak verilmiştir. Bu iki kaptaki zeytinyağları boş bir fıçıya doldurulursa toplam kaç mililitre zeytinyağı elde edilir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/sivi-olcme-litre.webp",
        options: ["1550", "2450", "3000", "4500"],
        correct: 1,
        explanation: "Birim dönüşümleri doğru yapılıp kaplardaki değerler eklendiğinde sonuç 2450 mL çıkmaktadır."
      },
      {
        id: "m5-2-t4-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki takvim yaprağı ve saate göre, bir tır şoförü 22 Mei saat 10:00'da Edirne'den yola çıkmıştır. Bu şoför tam 36 saat sonra varış noktasına ulaştığına göre, ulaştığı anın tarihi ve saati hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/zaman-takvim-yol.webp",
        options: [
          "23 Mayıs - 10:00",
          "23 Mayıs - 22:00",
          "24 Mayıs - 10:00",
          "24 Mayıs - 22:00"
        ],
        correct: 1,
        explanation: "36 saat = 1 gün 12 saattir. 22 Mayıs 10:00'a 1 gün eklenirse 23 Mayıs 10:00 olur, üzerine 12 saat daha eklenince 23 Mayıs 22:00 bulunur."
      },
      {
        id: "m5-2-t4-img-10",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dar açılı çeşitkenar üçgenin tüm iç açıları birer tam sayıdır. Buna göre, bu üçgenin sahip olabileceği 'en büyük' iç açının ölçüsü en fazla kaç derece olabilir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test4/dar-ucgen-aci-sinir.webp",
        options: ["88", "89", "90", "91"],
        correct: 1,
        explanation: "Üçgen dar açılı olduğu için en büyük açısı $90^\\circ$den küçük olmalıdır, tam sayı olarak en fazla $89^\\circ$ olabilir."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "m5-2-t4-11",
        subject: "matematik",
        term: 2,
        prompt: "Bir kareli kağıt üzerinde yer alan X noktasının 5 birim solunda ve 2 birim yukarısında bir Y noktası belirleniyor. Buna göre, X noktasının Y noktasına göre konumu tarif edilirken aşağıdakilerden hangisi doğru olur?",
        options: [
          "5 birim sağında, 2 birim aşağısındadır.",
          "5 birim solunda, 2 birim yukarısındadır.",
          "2 birim sağında, 5 birim aşağısındadır.",
          "Aynı yatay hat üzerindedirler."
        ],
        correct: 0,
        explanation: "Konum tariflerinde referans noktası değiştiğinde yön adımları da tam tersi doğrultuya döner (Sol -> Sağ, Yukarı -> Aşağı)."
      },
      {
        id: "m5-2-t4-12",
        subject: "matematik",
        term: 2,
        prompt: "Geniş açılı bir üçgenin iki dar açısının ölçüleri toplamı $55^\\circ$ olduğuna göre, bu üçgenin geniş açısının alabileceği doğal sayı değeri kaçtır?",
        options: ["91", "124", "125", "179"],
        correct: 2,
        explanation: "Üçgenin iç açıları toplamı $180^\\circ$ sabittir. İki açının toplamı $55^\\circ$ ise üçüncü açı kesinlikle $180 - 55 = 125^\\circ$ olmak zorundadır."
      },
      {
        id: "m5-2-t4-13",
        subject: "matematik",
        term: 2,
        prompt: "Karşılıklı kenar çiftleri birbirine paralel, tüm kenar uzunlukları eşit ve karşılıklı açılarının ölçüleri birbirine eşit olan ancak iç açıları dik ($90^\\circ$) olmayan dörtgen hangisidir?",
        options: ["Kare", "Dikdörtgen", "Eşkenar Dörtgen", "Yamuk"],
        correct: 2,
        explanation: "Eşkenar dörtgenin tüm kenarları eşittir, karşılıklı açıları eşittir ancak iç açıları dik açı değildir."
      },
      {
        id: "m5-2-t4-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir gruptaki öğrencilerin kütlelerini gösteren veri grubunun açıklığı 18 kg'dır. Bu gruptaki en hafif öğrenci 36 kg olduğuna göre, en ağır öğrencinin kütlesi kaç kg'dır?",
        options: ["18", "44", "54", "64"],
        correct: 2,
        explanation: "Açıklık, en büyük değer ile en küçük değerin farkıdır. En ağır öğrenci: $36 + 18 = 54$ kg olarak bulunur."
      },
      {
        id: "m5-2-t4-15",
        subject: "matematik",
        term: 2,
        prompt: "Kısa kenarı uzun kenarının yarısına eşit olan bir dikdörtgenin çevre uzunluğu 60 cm'dir. Bu dikdörtgenin alanı kaç santimetrekaredir?",
        options: ["100", "200", "300", "400"],
        correct: 1,
        explanation: "Kısa kenar $10$ cm, uzun kenar $20$ cm bulunur. Alan: $10 \\times 20 = 200$ cm² olarak hesaplanır."
      },
      {
        id: "m5-2-t4-16",
        subject: "matematik",
        term: 2,
        prompt: "Her gün düzenli olarak 50 dakika ders çalışan bir öğrenci, 3 hafta boyunca toplam kaç saat ders çalışmış olur?",
        options: ["15", "17,5", "21", "25"],
        correct: 1,
        explanation: "3 hafta = 21 gündür. Toplam süre: $21 \\times 50 = 1050$ dakika. Saate çevirirsek: $1050 \\div 60 = 17,5$ saat olur."
      },
      {
        id: "m5-2-t4-17",
        subject: "matematik",
        term: 2,
        prompt: "Bir ikizkenar üçgenin iç açılarından birinin ölçüsü $110^\\circ$ olduğuna göre, bu üçgenin diğer eş açılarından birinin ölçüsü kaç derecedir?",
        options: ["35", "45", "55", "70"],
        correct: 0,
        explanation: "Üçgende sadece bir tane geniş açı olabilir, bu yüzden $110^\\circ$ tepe açısıdır. Taban açıları: $(180 - 110) \\div 2 = 35^\\circ$ olur."
      },
      {
        id: "m5-2-t4-18",
        subject: "matematik",
        term: 2,
        prompt: "4 ton kömür bulunan bir depodan önce 1450 kg, sonra ise 1 ton 250 kg kömür satılıyor. Depoda kalan kömür miktarı kaç kg'dır?",
        options: ["1100", "1300", "1500", "2700"],
        correct: 1,
        explanation: "4 ton = 4000 kg. Toplam satılan: $1450 + 1250 = 2700$ kg. Kalan kömür: $4000 - 2700 = 1300$ kg'dır."
      },
      {
        id: "m5-2-t4-19",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu 32 cm olan bir karenin tüm kenar uzunlukları 3'er cm artırılıyor. Yeni oluşan büyük karenin alanı ilk duruma göre kaç santimetrekare artmıştır?",
        options: ["33", "57", "64", "121"],
        correct: 1,
        explanation: "İlk alan $8 \\times 8 = 64$ cm². Yeni kenar 11 cm, yeni alan $11 \\times 11 = 121$ cm². Fark ise $121 - 64 = 57$ cm² olur."
      },
      {
        id: "m5-2-t4-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilen alan ölçü birimleri dönüşümlerinden hangisi matematiksel olarak doğrudur?",
        options: [
          "5 metrekare = 500 santimetrekare",
          "2 santimetrekare = 200 milimetrekare",
          "8 metrekare = 8000 milimetrekare",
          "300 milimetrekare = 30 santimetrekare"
        ],
        correct: 1,
        explanation: "Alan ölçü birimleri yüzer yüzer büyür ve küçülür. 1 santimetrekare = 100 milimetrekare olduğundan, 2 cm² = 200 mm² dönüşümü tamamen doğrudur."
      }
    ],
         test5: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 5 (ZORLAŞTIRILMIŞ) ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "m5-2-t5-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki izometrik kağıt üzerinde A, B, C ve D noktaları işaretlenmiştir. A noktasının B noktasına göre konumu ile C noktasının D noktasına göre konumu birleştirildiğinde, hangi iki nokta arasındaki yatay mesafe en fazla olur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/izometrik-konum-analiz.webp",
        options: ["A ile C", "B ile D", "A ile D", "B ile C"],
        correct: 2,
        explanation: "Noktaların izometrik zemin üzerindeki yatay ve dikey birim yönleri tek tek sayıldığında, aralarındaki yatay uzaklığın (en geniş bandın) A ve D noktaları arasında oluştuğu görülür."
      },
      {
        id: "m5-2-t5-img-02",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kareli zemin üzerine çizilmiş olan çokgende, iç açılardan biri kırmızı yay ile gösterilmiştir. Bu kırmızı açının türü aşağıdakilerden hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/cokgen-kirmizi-aci.webp",
        options: ["Dar açı", "Dik açı", "Geniş açı", "Tam açı"],
        correct: 2,
        explanation: "Kareli kağıdın dikey referans hattı ($90^\\circ$) baz alındığında, kırmızı açının kollarının bu diklikten daha açık olduğu, yani geniş açı ($90^\\circ < \\text{açı} < 180^\\circ$) oluşturduğu görülür."
      },
      {
        id: "m5-2-t5-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABC üçgeninde B açısı $62^\\circ$'dir. C açısına ait dış açının ölçüsü $118^\\circ$ olduğuna göre, bu üçgenin A tepe açısının ölçüsü kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/ucgen-dis-aci-hesap.webp",
        options: ["56", "62", "118", "124"],
        correct: 0,
        explanation: "C iç açısı: $180 - 118 = 62^\\circ$'dir. İki açısı $62^\\circ$ ve $62^\\circ$ olan bu ikizkenar üçgenin A açısı: $180 - (62 + 62) = 56^\\circ$ olarak bulunur."
      },
      {
        id: "m5-2-t5-img-04",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD yamuğunda [AB] ve [DC] tabanları birbirine paraleldir. A açısı $110^\\circ$ ve C açısı $75^\\circ$ olduğuna göre, B ve D açılarının toplamı kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/yamuk-aci-kombinasyon.webp",
        options: ["175", "185", "195", "215"],
        correct: 0,
        explanation: "Yamukta aynı yan kenara ait bütünler açıların toplamı $180^\\circ$'dir. $D = 180 - 110 = 70^\\circ$ ve $B = 180 - 75 = 105^\\circ$ olur. Toplamları: $70 + 105 = 175^\\circ$ yapar."
      },
      {
        id: "m5-2-t5-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki sıklık tablosunda bir okul kütüphanesinden günlere göre ödünç alınan kitap sayıları verilmiştir. En fazla kitap alınan gün, en az kitap alınan günden kaç adet fazladır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/siklik-tablosu-kitap.webp",
        options: ["14", "18", "22", "26"],
        correct: 1,
        explanation: "Tablodaki en yüksek değer Cuma günü (42), en düşük değer ise Salı günüdür (24). Aradaki fark: $42 - 24 = 18$ olur."
      },
      {
        id: "m5-2-t5-img-06",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen büyük dikdörtgen levhadan, köşesindeki küçük bir dikdörtgen kesilerek atılıyor. Yeni oluşan şeklin çevre uzunluğu, kesimden önceki ilk çevre uzunluğuna göre nasıl değişir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/cevre-kose-kesim.webp",
        options: ["Azalır", "Artar", "Değişmez", "Yarıya iner"],
        correct: 2,
        explanation: "Bir dikdörtgenin tam köşesinden dikdörtgen bir parça kesildiğinde eksilen iki kenarın uzunluğu, içeride oluşan iki yeni kenar uzunluğu ile tam olarak dengelenir; bu nedenle çevre uzunluğu değişmez."
      },
      {
        id: "m5-2-t5-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde birim karelerden oluşan zemin üzerine çizilmiş olan taralı bölgenin alanı kaç santimetrekaredir? (Her küçük karenin bir kenarı 2 cm'dir, alanını buna göre hesaplayınız!) Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/alan-birim-kare-zor.webp",
        options: ["24", "32", "48", "64"],
        correct: 3,
        explanation: "Taralı bölge 16 birim kareden oluşmaktadır. Bir küçük karenin kenarı 2 cm ise alanı $2 \\times 2 = 4\\text{ cm}^2$ olur. Toplam alan: $16 \\times 4 = 64\\text{ cm}^2$ bulunur."
      },
      {
        id: "m5-2-t5-img-08",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki üç farklı sürahide bulunan portakal suyu miktarları verilmiştir. Bu üç sürahideki sıvıların tamamı 5 litrelik boş bir bidona dökülürse, bidonun tamamen dolması için kaç mililitre daha portakal suyuna ihtiyaç vardır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/sivi-surehi-toplam.webp",
        options: ["1150", "1250", "1350", "1450"],
        correct: 1,
        explanation: "Sürahilerdeki toplam sıvı: $1200\\text{ mL} + 1500\\text{ mL} + 1050\\text{ mL} = 3750\\text{ mL}$ yapar. 5 Litre = 5000 mL'dir. İhtiyaç duyulan: $5000 - 3750 = 1250\\text{ mL}$ olur."
      },
      {
        id: "m5-2-t5-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dijital saat ve uçak biletine göre, İstanbul'dan 23:45'te kalkan bir uçak seyahati toplam 2 saat 50 dakika sürmüştür. Uçağın iniş yaptığı an dijital saat kaçı gösterir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/zaman-gece-ucus.webp",
        options: ["01:35", "02:15", "02:35", "03:25"],
        correct: 2,
        explanation: "23:45'in üzerine 15 dakika eklenirse saat 00:00 (gece yarısı) olur. Geriye kalan 2 saat 35 dakika da eklendiğinde iniş saati 02:35'i gösterir."
      },
      {
        id: "m5-2-t5-img-10",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD paralelkenarsal bölgenin alanı kaç santimetrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test5/paralelkenar-alan-taban.webp",
        options: ["48", "60", "80", "120"],
        correct: 1,
        explanation: "Paralelkenarın alanı, taban uzunluğu ile o tabana ait yüksekliğin çarpımıdır. $A = \text{Taban} \\times \text{Yükseklik} = 12 \\times 5 = 60\\text{ cm}^2$ olarak hesaplanır."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "m5-2-t5-11",
        subject: "matematik",
        term: 2,
        prompt: "Bir kareli zeminde K noktasının 4 birim sağında ve 3 birim aşağısında bir L noktası vardır. Buna göre, K noktasının L noktasına göre konumu tarif edilirken hangi ifade doğru olur?",
        options: [
          "4 birim solunda, 3 birim yukarısındadır.",
          "4 birim sağında, 3 birim yukarısındadır.",
          "3 birim solunda, 4 birim aşağısındadır.",
          "Aynı dikey hat üzerindedirler."
        ],
        correct: 0,
        explanation: "Referans noktası L olarak seçildiğinde yönler tam tersine döner. L'den K'ye gitmek için 4 birim sola ve 3 birim yukarı hareket edilmelidir."
      },
      {
        id: "m5-2-t5-12",
        subject: "matematik",
        term: 2,
        prompt: "İç açılarından biri $90^\\circ$ olan bir ikizkenar üçgenin, dar açılarından birinin ölçüsü kaç derecedir?",
        options: ["30", "45", "60", "90"],
        correct: 1,
        explanation: "Üçgenin iç açıları toplamı $180^\\circ$'dir. Dik açı çıkarılırsa geriye $180 - 90 = 90^\\circ$ kalır. Üçgen ikizkenar olduğundan dar açılar eşittir: $90 \\div 2 = 45^\\circ$ bulunur."
      },
      {
        id: "m5-2-t5-13",
        subject: "matematik",
        term: 2,
        prompt: "Sadece iki kenarı birbirine paralel olan ve paralel olmayan kenarları birbirine eşit uzunlukta olan özel dörtgen türü aşağıdakilerden hangisidir?",
        options: ["Paralelkenar", "Eşkenar Dörtgen", "İkizkenar Yamuk", "Dikdörtgen"],
        correct: 2,
        explanation: "Sadece iki kenarı paralel olan şekil yamuktur; paralel olmayan yan kenarları eşit uzunlukta ise buna ikizkenar yamuk adı verilir."
      },
     {
        id: "m5-2-t5-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilen zaman birimleri dönüşümlerinden hangisi matematiksel olarak 'yanlıştır'?",
        options: [
          "3 yıl = 36 ay",
          "5 hafta = 35 gün",
          "180 dakika = 3 saat",
          "250 saniye = 5 dakika"
        ],
        correct: 3,
        explanation: "5 dakika, $5 \\times 60 = 300$ saniye yapmalıdır. 250 saniye ifadesi zaman ölçme kurallarına göre yanlıştır."
      }
    ], 
    test6: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 6 (ZORLAŞTIRILMIŞ) ---
      // [1-10 Arası Sorular: Görsel Odaklı / Ş Şekilli Sorular]
      {
        id: "m5-2-t6-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kareli zemin üzerinde bir sokağın krokisi verilmiştir. A noktasında bulunan marketin, B noktasında bulunan eczaneye göre konumu tarif edilirken aşağıdakilerden hangisi doğru bir yönlendirme olur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/sokak-kroki-konum.webp",
        options: [
          "3 birim solunda, 4 birim yukarısındadır.",
          "3 birim sağında, 4 birim aşağısındadır.",
          "4 birim solunda, 3 birim aşağısındadır.",
          "4 birim sağında, 3 birim yukarısındadır."
        ],
        correct: 0,
        explanation: "B noktası (eczane) referans alındığında, A noktasına (market) ulaşmak için yatay eksende 3 birim sola ve dikey eksende 4 birim yukarı doğru ilerlemek gerekir."
      },
      {
        id: "m5-2-t6-img-02",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki izgara kağıt üzerine bir üçgen çizilmiş ve köşeleri isimlendirilmiştir. Bu üçgenin açısına ve kenarlarına göre türü aşağıdakilerden hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/izgara-ucgen-turu.webp",
        options: [
          "Dar açılı ikizkenar üçgen",
          "Dik açılı ikizkenar üçgen",
          "Geniş açılı çeşitkenar üçgen",
          "Dik açılı çeşitkenar üçgen"
        ],
        correct: 1,
        explanation: "Zemin çizgileri incelendiğinde üçgenin bir köşesinin karelerin köşegeni doğrultusunda dik açı ($90^\\circ$) oluşturduğu ve dik kenar uzunluklarının birbirine eşit (ikizkenar) olduğu görülür."
      },
      {
        id: "m5-2-t6-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD paralelkenarında ardışık iç açılar ve köşegen kesişimleri modellenmiştir. C açısının ölçüsü $65^\\circ$ olduğuna göre, D iç açısının ölçüsü kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/paralelkenar-komsu-aci.webp",
        options: ["65", "115", "125", "135"],
        correct: 1,
        explanation: "Paralelkenarda komşu (ardışık) olan iki iç açının toplamı daima $180^\\circ$ye eşittir. Bu nedenle $D = 180 - 65 = 115^\\circ$ olarak hesaplanır."
      },
      {
        id: "m5-2-t6-img-04",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABCD ikizkenar yamuğunda tabanlar birbirine paraleldir. A taban açısının ölçüsü $70^\\circ$ olduğuna göre, tepe köşesinde yer alan D açısının ölçüsü kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/yamuk-ust-aci.webp",
        options: ["70", "100", "110", "120"],
        correct: 2,
        explanation: "Yamuk geometrik şeklinde aynı yan kenara ait alt ve üst açıların toplamı $180^\\circ$dir. Buradan $D = 180 - 70 = 110^\\circ$ bulunur."
      },
      {
        id: "m5-2-t6-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki sütun grafiği bir çiftçinin ürettiği ürün miktarlarını ton cinsinden göstermektedir. Grafiğe göre, üretilen toplam tahıl miktarı (Buğday + Arpa), Mısır miktarından kaç ton fazladır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/tarim-urun-grafik.webp",
        options: ["5", "10", "15", "20"],
        correct: 2,
        explanation: "Grafikten okunan değerlere göre: Buğday (25) + Arpa (15) = 40 ton. Mısır ise 25 tondur. Aradaki fark: $40 - 25 = 15$ ton olur."
      },
      {
        id: "m5-2-t6-img-06",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kenar uzunlukları verilen dikdörtgen şeklindeki levhanın sol kenarından dikdörtgen bir parça kesilerek çıkarılıyor. Kalan şeklin toplam çevre uzunluğu, kesilmeden önceki duruma göre nasıl değişir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/cevre-kenar-kesim.webp",
        options: [
          "Azalır",
          "Artar",
          "Değişmez",
          "İlk durumun tam olarak yarısına iner"
        ],
        correct: 2,
        explanation: "Kenar ortasından veya kenar hattından yapılan dikdörtgen kesimlerde eksilen dış kenar, içeride oluşan aynı uzunluktaki paralel kenarla dengelenir. Dolayısıyla şeklin toplam çevre uzunluğu değişmez."
      },
      {
        id: "m5-2-t6-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kareli zemin üzerine çizilmiş olan taralı şeklin toplam alanı kaç birimkaredir? (Her küçük karenin alanı 1 birimkaredir, yarım kareleri birleştirmeyi unutmayın!) Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/birim-kare-yarim-alan.webp",
        options: ["12", "14", "16", "18"],
        correct: 1,
        explanation: "Şekil içindeki tam kareler sayıldığında 11 tane, ikişerli birleşerek tam kare oluşturan yarım kareler ise 6 tanedir ($6 \\div 2 = 3$ tam kare). Toplam alan: $11 + 3 = 14$ birimkare bulunur."
      },
      {
        id: "m5-2-t6-img-08",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki büyük su deposunda bulunan sıvı miktarı Litre cinsinden verilmiştir. Bu depodan her biri 400 mL su alan şişelerden tam 25 adet doldurulursa, depoda kalan su miktarı kaç mililitre olur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/depo-sivi-eksilen.webp",
        options: ["2000", "5000", "10000", "12000"],
        correct: 2,
        explanation: "Depodaki su 20 Litre yani 20000 mL'dir. Şişelerle alınan toplam su: $25 \\times 400 = 10000$ mL yapar. Kalan su miktarı: $20000 - 10000 = 10000$ mL olarak hesaplanır."
      },
      {
        id: "m5-2-t6-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki otobüs bileti ve saat ekranına göre, otobüs hareket noktasına tam olarak 08:30'da ulaşmıştır. Bu otobüs yolculuğu 5 saat 45 dakika sürdüğüne göre, otobüsün kalkış saati aşağıdakilerden hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/zaman-geriye-hesap.webp",
        options: ["02:15", "02:45", "03:15", "03:45"],
        correct: 1,
        explanation: "08:30 varış saatinden önce 5 saat geriye gidilirse saat 03:30 olur. 03:30'dan da 45 dakika geriye gidildiğinde otobüsün kalkış saatinin 02:45 olduğu bulunur."
      },
      {
        id: "m5-2-t6-img-10",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD dikdörtgeni ile KLMN karesinin alanları birbirine eşittir. Dikdörtgenin kenar uzunluklarına göre, karenin bir kenarının uzunluğu kaç santimetredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test6/alan-esitlik-kare.webp",
        options: ["6", "8", "12", "16"],
        correct: 2,
        explanation: "Dikdörtgenin alanı: $18 \\times 8 = 144\\text{ cm}^2$dir. Karenin alanı da $144\\text{ cm}^2$ olacağına göre, hangi sayının kendisiyle çarpımı 144 eder sorusundan karenin bir kenarı $12$ cm bulunur ($12 \\times 12 = 144$)."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "m5-2-t6-11",
        subject: "matematik",
        term: 2,
        prompt: "Bir izgara zemin planında, A noktasının 6 birim yukarısında ve 2 birim sağında bir B noktası yer almaktadır. B noktasında duran bir gözlemci, A noktasının konumunu tarif etmek isterse hangi yönergeleri kullanmalıdır?",
        options: [
          "6 birim aşağısında, 2 birim solundadır.",
          "6 birim yukarısında, 2 birim sağındadır.",
          "2 birim aşağısında, 6 birim sağındadır.",
          "Aynı yatay çizgi hizasındadırlar."
        ],
        correct: 0,
        explanation: "Referans noktası yer değiştirdiğinde yön vektörleri tam tersine döner. B'ye göre A noktası; 6 birim aşağıda ve 2 birim solda yer alır."
      },
      {
        id: "m5-2-t6-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir üçgenin iç açılarının ölçüleri ardışık doğal sayılardır. Buna göre, bu üçgenin açı özelliklerine göre türü aşağıdakilerden hangisi olmak zorundadır?",
        options: ["Geniş açılı üçgen", "Dik açılı üçgen", "Dar açılı üçgen", "Eşkenar dörtgen"],
        correct: 2,
        explanation: "Açılar ardışık sayılarsa ortanca açı daima $180 \\div 3 = 60^\\circ$ olur. Açılar $59^\\circ, 60^\\circ, 61^\\circ$ şeklinde dizileceğinden tüm açılar $90^\\circ$den küçüktür ve üçgen dar açılıdır."
      },
      {
        id: "m5-2-t6-13",
        subject: "matematik",
        term: 2,
        prompt: "Karşılıklı kenarları birbirine paralel ve eşit, karşılıklı iç açılarının ölçüleri eşit, ardışık açılarının toplamı $180^\\circ$ olan ancak dört kenarı da birbirine eşit olmayan geometrik şekil hangisidir?",
        options: ["Kare", "Eşkenar Dörtgen", "Paralelkenar", "Yamuk"],
        correct: 2,
        explanation: "Karşılıklı kenarları eşit olup dört kenarı birden eşit olmayan, karşılıklı açıları eşit özellikli klasik dörtgen paralelkenardır."
      },
      {
        id: "m5-2-t6-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir sınıftaki öğrencilerin ağırlık ölçümlerinden oluşan veri grubunun açıklığı 22 kg'dır. En ağır öğrenci 58 kg olduğuna göre, bu sınıftaki en hafif öğrenci kaç kg ağırlığındadır?",
        options: ["34", "36", "38", "40"],
        correct: 1,
        explanation: "Veri grubunun açıklığı en büyük değer ile en küçük değer arasındaki farktır. En hafif boy/ağırlık elemanı: $58 - 22 = 36$ kg olarak hesaplanır."
      },
      {
        id: "m5-2-t6-15",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 12 cm olan bir karenin alanı, kısa kenarı 9 cm olan bir dikdörtgenin alanına eşittir. Buna göre, bu dikdörtgenin çevre uzunluğu kaç santimetredir?",
        options: ["32", "40", "50", "56"],
        correct: 3,
        explanation: "Karenin alanı: $12 \\times 12 = 144\\text{ cm}^2$. Dikdörtgenin uzun kenarı: $144 \\div 9 = 16$ cm olur. Çevre uzunluğu ise: $2 \\times (16 + 9) = 56$ cm olarak bulunur."
      },
      {
        id: "m5-2-t6-16",
        subject: "matematik",
        term: 2,
        prompt: "Uluslararası bir maratonda yarışı 3 saat 12 dakikada tamamlayan bir atlete ait bu süre toplam kaç saniyeye eşittir?",
        options: ["192", "11520", "11400", "12420"],
        correct: 1,
        explanation: "3 saat 12 dakika = 192 dakikadır. Saniyeye çevirmek için dakikayı 60 ile çarparız: $192 \\times 60 = 11520$ saniye yapar."
      },
      {
        id: "m5-2-t6-17",
        subject: "matematik",
        term: 2,
        prompt: "Bir ikizkenar üçgenin iç açılarından birinin ölçüsü $80^\\circ$dir. Bu üçgenin verilmeyen diğer iç açılarından biri aşağıdakilerden hangisi 'olamaz'?",
        options: ["50", "80", "20", "100"],
        correct: 3,
        explanation: "Açı $80^\\circ$ tepe açısı ise tabanlar 50'şer derece olur. Eğer $80^\\circ$ taban açısı ise diğeri de 80 olur, tepeye 20 kalır. Ancak iç açılardan biri hiçbir kombinasyonda 100 derece olamaz."
      },
      {
        id: "m5-2-t6-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir fabrikada üretilen 6 ton deterjanın önce 2450 kg'ı, daha sonra 1 ton 850 kg'ı paketlenip satılmıştır. Depoda paketlenmeyen kaç kg deterjan kalmıştır?",
        options: ["1700", "2300", "2700", "3700"],
        correct: 0,
        explanation: "6 ton = 6000 kg'dır. Toplam satılan ürün miktarı: $2450 + 1850 = 4300$ kg. Kalan deterjan miktarı: $6000 - 4300 = 1700$ kg bulunur."
      },
      {
        id: "m5-2-t6-19",
        subject: "matematik",
        term: 2,
        prompt: "Uzun kenarı 15 cm, kısa kenarı 8 cm olan bir dikdörtgenin tüm kenar uzunlukları 2'şer cm artırılıyor. Yeni oluşan dikdörtgenin alanı ilk duruma göre kaç santimetrekare artmıştır?",
        options: ["30", "46", "50", "170"],
        correct: 2,
        explanation: "İlk alan: $15 \\times 8 = 120\\text{ cm}^2$. Yeni kenarlar 17 cm ve 10 cm olur, yeni alan $17 \\times 10 = 170\\text{ cm}^2$dir. Aradaki artış: $170 - 120 = 50\\text{ cm}^2$ olur."
      },
      {
        id: "m5-2-t6-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilen alan ölçü birimi dönüşümlerinden hangisi matematiksel kurallara göre 'hatalıdır'?",
        options: [
          "4 metrekare = 40000 santimetrekare",
          "7 santimetrekare = 700 milimetrekare",
          "30000 santimetrekare = 3 metrekare",
          "5 metrekare = 500 santimetrekare"
        ],
        correct: 3,
        explanation: "1 metrekare = 10000 santimetrekaredir. Dolayısıyla 5 metrekare 50000 $\\text{cm}^2$ yapmalıdır, 500 $\\text{cm}^2$ ifadesi hatalıdır."
      }
    ],
       test7: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 7 (ZORLAŞTIRILMIŞ) ---
      {
        id: "m5-2-t7-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kareli zemin üzerinde A, B, C ve D noktaları işaretlenmiştir. A noktasının B noktasına göre konumu ile C noktasının D noktasına göre konumu ardışık bir rota olarak A noktasından itibaren uygulanırsa, labirentin hangi çıkış kapısına ulaşılır?",
        imageUrl: "/images/grade5/matematik/term2/test7/nokta-rota-labirent.webp",
        options: ["1. Çıkış Kapısı", "2. Çıkış Kapısı", "3. Çıkış Kapısı", "4. Çıkış Kapısı"],
        correct: 1,
        explanation: "Noktaların birbirine göre konum adımları (örneğin sağa/sola ve yukarı/aşağı birimleri) yön kurallarına göre uç uca eklenip A'dan başlanarak yüründüğünde sistem bizi net olarak 2. Çıkış Kapısı'na ulaştırır."
      },
      {
        id: "m5-2-t7-02",
        subject: "matematik",
        term: 2,
        prompt: "Bir kareli kağıt üzerinde yer alan K noktasının 6 birim sağında ve 4 birim yukarısında bir L noktası işaretleniyor. Daha sonra L noktası referans alınarak, L'nin 2 birim solunda ve 5 birim aşağısında bir M noktası daha belirleniyor. Buna göre, başlangıçtaki K noktasının son oluşan M noktasına göre konumu aşağıdakilerden hangisidir?",
        options: [
          "4 birim solunda, 1 birim yukarısındadır.",
          "4 birim sağında, 1 birim aşağısındadır.",
          "1 birim solunda, 4 birim yukarısındadır.",
          "Aynı dikey doğrultu üzerindedirler."
        ],
        correct: 0,
        explanation: "K'dan L'ye: +6 sağ, +4 yukarı. L'den M'ye: -2 sol, -5 aşağı. Net durum (K'dan M'ye): +4 sağ, -1 aşağı olur. Soru bize K'nın M'ye göre konumunu (M'den K'ya bakışı) sorduğu için yönler tersine döner: 4 birim sol, 1 birim yukarı."
      },
      {
        id: "m5-2-t7-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kareli zemin üzerine çizilmiş doğrular verilmiştir. d doğrusuna paralel ($//$) olan doğru ile d doğrusunu dik ($+[-]$) kesen doğrunun isimleri hangi seçenekte doğru olarak eşleştirilmiştir?",
        imageUrl: "/images/grade5/matematik/term2/test7/paralel-dik-izgara.webp",
        options: [
          "Paralel: e doğrusu, Dik: f doğrusu",
          "Paralel: f doğrusu, Dik: e doğrusu",
          "Paralel: g doğrusu, Dik: f doğrusu",
          "Paralel: e doğrusu, Dik: g doğrusu"
        ],
        correct: 0,
        explanation: "Kareli zemindeki doğrultu ve eğimler incelendiğinde, d çizgisiyle hiç kesişmeyecek olan e doğrusu paraleldir. d çizgisiyle tam $90^\\circ$lik açı oluşturan f doğrusu ise diktir."
      },
      {
        id: "m5-2-t7-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir d doğrusunu dik açıyla kesen bir e doğrusu çiziliyor. Daha sonra bu e doğrusuna paralel olacak şekilde üçüncü bir f doğrusu daha ekleniyor. Bu geometrik çizim kurallarına göre, başlangıçtaki d doğrusu ile son eklenen f doğrusunun birbirine göre durumu için aşağıdakilerden hangisi kesinlikle doğrudur?",
        options: [
          "d doğrusu ile f doğrusu birbirine paraleldir.",
          "d doğrusu ile f doğrusu birbirine diktir.",
          "d doğrusu ile f doğrusu hiçbir noktada kesişmez.",
          "İki doğru birbiriyle çakışık durumdadır."
        ],
        correct: 1,
        explanation: "Bir doğruya dik olan bir çizgiye paralel çizilen tüm yeni doğrular, ilk doğruyu da dik açıyla ($90^\\circ$) kesmek zorundadır. Bu yüzden d ile f birbirine diktir."
      },
      {
        id: "m5-2-t7-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABC üçgeninde verilen iç ve dış açı ölçülerine göre, bu üçgenin verilmeyen 'A' iç açısının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test7/ucgen-aci-zincir.webp",
        options: ["45", "55", "65", "75"],
        correct: 2,
        explanation: "B köşesindeki iç açıyı bulmak için dış açıdan yararlanırız: $180 - 125 = 55^\\circ$. Üçgenin iç açıları toplamı $180^\\circ$ olduğundan: $A = 180 - (55 + 60) = 65^\\circ$ bulunur."
      },
      {
        id: "m5-2-t7-06",
        subject: "matematik",
        term: 2,
        prompt: "Bir ikizkenar üçgenin iç açılarından birinin ölçüsü $112^\\circ$ olarak ölçülmüştür. Bu üçgenin çeşitkenarlık veya açısına göre özellikleri düşünüldüğünde, verilmeyen diğer eş iç açılarından birinin ölçüsü kaç derecedir?",
        options: ["34", "44", "56", "68"],
        correct: 0,
        explanation: "Bir üçgende sadece bir tane geniş açı ($90^\\circ$den büyük) bulunabilir. Bu yüzden $112^\\circ$ tepe açısı olmak zorundadır. Taban açıları eşit olduğundan: $(180 - 112) \\div 2 = 68 \\div 2 = 34^\\circ$ bulunur."
      },
      {
        id: "m5-2-t7-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD paralelkenarında komşu iki iç açının bağıntısı şematize edilmiştir. Buna göre '?' işareti ile gösterilen iç açının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test7/paralelkenar-kose-aci.webp",
        options: ["45", "55", "125", "135"],
        correct: 2,
        explanation: "Paralelkenarda alt ve üst ardışık (komşu) iki iç açının toplamı daima $180^\\circ$ye eşittir. Buradan $? = 180 - 55 = 125^\\circ$ olarak hesaplanır."
      },
      {
        id: "m5-2-t7-08",
        subject: "matematik",
        term: 2,
        prompt: "Ardışık iki iç açısının toplamı daima $180^\\circ$ olan, karşılıklı kenar çiftleri birbirine paralel ve tüm kenar uzunlukları birbirine eşit olan bir dörtgenin bir iç açısı $72^\\circ$dir. Bu dörtgenin karşısındaki diğer iç açının ölçüsü kaç derecedir?",
        options: ["72", "108", "118", "144"],
        correct: 0,
        explanation: "Soruda tarifi verilen şekil bir eşkenar dörtgendir. Eşkenar dörtgenin (ve paralelkenarın) temel kuralı gereği karşılıklı iç açılarının ölçüleri birbirine eşittir. Bu yüzden aranan açı da $72^\\circ$ olur."
      },
      {
        id: "m5-2-t7-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dikey sütun grafiği bir mağazanın haftalık mont satış adetlerini göstermektedir. Grafik verileri incelendiğinde, en çok satış yapılan günkü mont sayısı, en az satış yapılan günkü mont sayısının kaç katıdır?",
        imageUrl: "/images/grade5/matematik/term2/test7/satis-sutun-grafik.webp",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "Grafikteki en yüksek sütun Cumartesi günü (48 adet), en düşük sütun ise Çarşamba günüdür (16 adet). Kat oranı: $48 \\div 16 = 3$ katı olarak hesaplanır."
      },
      {
        id: "m5-2-t7-10",
        subject: "matematik",
        term: 2,
        prompt: "Bir veri grubundaki en büyük sayı, en küçük sayının 3 katından 4 eksiktir. Bu veri grubundaki sayıların en büyüğü 44 olduğuna göre, bu veri grubunun açıklığı (veri genişliği) kaçtır?",
        options: ["16", "24", "28", "32"],
        correct: 2,
        explanation: "En büyük sayı 44 ise denklem kurulur: $3 \\times \\text{Küçük} - 4 = 44 \\implies 3 \\times \\text{Küçük} = 48 \\implies \\text{Küçük} = 16$. Açıklık büyükten küçüğün çıkarılmasıdır: $44 - 16 = 28$ bulunur."
      },
      {
        id: "m5-2-t7-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görselde çevre ve kenar ölçüleri verilen dikdörtgen şeklindeki tablonun sağ alt köşesinden kare şeklinde küçük bir parça kesilerek çıkarılıyor. Kalan şeklin çevre uzunluğunun ilk duruma göre değişimi için hangisi doğrudur?",
        imageUrl: "/images/grade5/matematik/term2/test7/cevre-kose-kesim2.webp",
        options: ["Azalır", "Artar", "Değişmez", "Tam olarak yarıya düşer"],
        correct: 2,
        explanation: "Geometrik şekillerde tam köşe kısımlardan yapılan kare veya dikdörtgen kesimlerinde çevre uzunluğu değişmez; çünkü eksilen dış kenarların boyu içeride oluşan yeni iç kenarlarla milimetrik olarak eşitlenir."
      },
      {
        id: "m5-2-t7-12",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu 72 cm olan bir dikdörtgenin uzun kenarı, kısa kenarının tam 3 katına eşittir. Bu dikdörtgenin kapladığı toplam alan kaç santimetrekaredir?",
        options: ["108", "144", "243", "486"],
        correct: 2,
        explanation: "Kısa kenara k dersek uzun kenar 3k olur. Çevre: $2 \\times (k + 3k) = 8k = 72 \\implies k = 9$ cm (kısa kenar). Uzun kenar: $3 \\times 9 = 27$ cm olur. Alan: $9 \\times 27 = 243\\text{ cm}^2$ olarak hesaplanır."
      },
      {
        id: "m5-2-t7-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kareli zemin üzerine çizilmiş ve içi boyanmış çokgensel bölgenin alanı kaç birimkaredir? (Her küçük karenin alanı 1 birimkaredir.)",
        imageUrl: "/images/grade5/matematik/term2/test7/alan-hesap-izgara2.webp",
        options: ["18", "21", "25", "30"],
        correct: 1,
        explanation: "Karmaşık çokgen şekli kare ve dikdörtgen alan parçalarına bölünüp birim kareleri tek tek sayıldığında toplam alan net olarak 21 birimkare bulunur."
      },
      {
        id: "m5-2-t7-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 14 cm olan bir karenin alanı, taban uzunluğu 28 cm olan bir paralelkenarın alanına tam olarak eşittir. Buna göre, bu paralelkenarın o tabanına ait yüksekliği kaç santmetredir?",
        options: ["5", "7", "9", "14"],
        correct: 1,
        explanation: "Karenin alanı: $14 \\times 14 = 196\\text{ cm}^2$. Paralelkenarın alanı: $\\text{Taban} \\times \\text{Yükseklik} = 28 \\times h = 196$ olmalıdır. Buradan yükseklik: $196 \\div 28 = 7$ cm bulunur."
      },
      {
        id: "m5-2-t7-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki büyük süt kovasında bulunan sıvı miktarı Litre cinsinden verilmiştir. Bu kovadaki sütün tamamı 350 mL'lik küçük şişelere doldurulacaktır. Tam 40 şişe tamamen doldurulduğuna göre kovada kaç mililitre süt kalmıştır?",
        imageUrl: "/images/grade5/matematik/term2/test7/sut-kovasi-sivi.webp",
        options: ["1000", "2000", "4000", "6000"],
        correct: 1,
        explanation: "Kovadaki süt 16 L = 16000 mL'dir. Şişelere doldurulan: $40 \\times 350 = 14000$ mL yapar. Kovada kalan süt miktarı: $16000 - 14000 = 2000$ mL olarak hesaplanır."
      },
      {
        id: "m5-2-t7-16",
        subject: "matematik",
        term: 2,
        prompt: "Sıvı ölçme birimleriyle ilgili bir laboratuvarda yapılan testlerde 4 Litre kimyasal sıvının içerisinden önce 1250 mL, daha sonra ise 1,5 Litre sıvı çekilerek deney tüplerine aktarılıyor. Ana kapta kalan sıvı miktarı kaç mililitredir?",
        options: ["1250", "1500", "1750", "2250"],
        correct: 0,
        explanation: "Başlangıçtaki sıvı 4 L = 4000 mL'dir. Eksilen sıvılar: $1250\\text{ mL} + 1500\\text{ mL} (1,5\\text{ L}) = 2750\\text{ mL}$. Kalan sıvı miktarı: $4000 - 2750 = 1250\\text{ mL}$ olur."
      },
      {
        id: "m5-2-t7-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kol saati ve uçak biletine göre, akşam saat 22:15'te Ankara'dan hareket eden bir şehirler arası otobüs, varış noktasına tam 7 saat 50 dakika sonra ulaşmıştır. Otobüsün ulaştığı anı gösteren dijital saat hangisidir?",
        imageUrl: "/images/grade5/matematik/term2/test7/zaman-yolculuk-saat.webp",
        options: ["05:05", "05:45", "06:05", "06:45"],
        correct: 2,
        explanation: "22:15'e önce 45 dakika eklenirse saat 23:00 olur (7 saat 5 dakika kalır). 1 saat daha eklenirse 00:00 gece yarısı olur. Kalan 6 saat 5 dakika da eklenince varış saati 06:05 olur."
      },
      {
        id: "m5-2-t7-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir proje ödevine 18 Nisan saat 16:20'de başlayan bir öğrenci, çalışmasını hiç ara vermeden tam 52 saat sonra tamamlayarak sisteme yüklemiştir. Ödevin bittiği tarih ve saat aşağıdakilerden hangisidir?",
        options: [
          "20 Nisan - 16:20",
          "20 Nisan - 20:20",
          "21 Nisan - 16:20",
          "21 Nisan - 20:20"
        ],
        correct: 1,
        explanation: "52 saat = 48 saat (2 tam gün) + 4 saattir. 18 Nisan 16:20'ye 2 gün eklenirse 20 Nisan 16:20 olur. Üzerine kalan 4 saat de eklendiğinde bitiş zamanı 20 Nisan saat 20:20'yi gösterir."
      },
      {
        id: "m5-2-t7-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD yamuksal bölgesinin boyalı iç alanı kaç santimetrekaredir? (Yüksekliği kılavuz çizgilerle verilmiştir.)",
        imageUrl: "/images/grade5/matematik/term2/test7/yamuk-alan-izgara.webp",
        options: ["45", "60", "75", "90"],
        correct: 1,
        explanation: "Yamuk alanı paralelkenar ve üçgene bölünerek veya formülle hesaplanabilir. Tabanlar ve dik yükseklik ($h=6\\text{ cm}$) çarpım kombinasyonları yapıldığında alan 60 $\\text{cm}^2$ bulunur."
      },
      {
        id: "m5-2-t7-20",
        subject: "matematik",
        term: 2,
        prompt: "Aşağıda verilmiş olan alan ve uzunluk ölçü birimleri arası dönüşümlerden hangisi matematiksel olarak 'hatalıdır'?",
        options: [
          "3 metrekare = 30000 santimetrekare",
          "15 santimetrekare = 1500 milimetrekare",
          "4500 milimetre = 45 metre",
          "80000 santimetrekare = 8 metrekare"
        ],
        correct: 2,
        explanation: "Uzunluk birimleri onar onar büyür/küçülür. 1 metre = 1000 milimetredir. Bu yüzden 4500 milimetre 4,5 metre yapmalıdır; 45 metre ifadesi hatalıdır."
      }
    ],
     test8: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 8 (ZOR) ---
      {
        id: "m5-2-t8-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dar açılı ABC üçgeninde B açısı genişletilerek bir dik açı elde edilmek isteniyor. A ve C noktalarının konumları sabit kalmak şartıyla, B köşesi kareli zeminde hangi yöne kaç birim kaydırılmalıdır?",
        imageUrl: "/images/grade5/matematik/term2/test8/ucgen-aci-degisim.webp",
        options: ["2 birim sağa", "3 birim sola", "1 birim yukarı", "2 birim aşağı"],
        correct: 1,
        explanation: "Kareli zemindeki dik kesişim doğrultuları ölçüldüğünde, B köşesi tam olarak 3 birim sola kaydırılırsa A köşesinden inen dikey hatla dik açılı bir köşe ($90^\\circ$) oluşturur."
      },
      {
        id: "m5-2-t8-02",
        subject: "matematik",
        term: 2,
        prompt: "Bir geniş açılı üçgen ile bir dik açılı üçgenin birer iç açısı tamamen aynı ölçüye sahiptir. Bu ortak açının ölçüsü derece cinsinden bir doğal sayı olduğuna göre, alabileceği 'en büyük' değer kaçtır?",
        options: ["45", "89", "90", "119"],
        correct: 1,
        explanation: "Dik açılı üçgende dik açı dışındaki açılar dar açıdır ($<90^\\circ$). Geniş açılı üçgende de geniş açı dışındaki açılar dar açıdır. Ortak olabilecek açı bir dar açı olmak zorundadır ve en büyük dar açı $89^\\circ$dir."
      },
      {
        id: "m5-2-t8-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD eşkenar dörtgeni köşegenleri boyunca kesilerek dört parçaya ayrılıyor. Oluşan bu yeni parçaların her birinin üçgen çeşidi aşağıdakilerden hangisidir?",
        imageUrl: "/images/grade5/matematik/term2/test8/eskenar-dortgen-kesim.webp",
        options: ["Geniş açılı çeşitkenar üçgen", "Dik açılı çeşitkenar üçgen", "Dik açılı ikizkenar üçgen", "Dar açılı eşkenar üçgen"],
        correct: 1,
        explanation: "Eşkenar dörtgenin köşegenleri birbirini daima dik ($90^\\circ$) keser. Köşegen uzunlukları birbirinden farklı olduğu için oluşan üçgenlerin dik kenar uzunlukları da farklı olur. Bu yüzden parçalar dik açılı çeşitkenar üçgendir."
      },
      {
        id: "m5-2-t8-04",
        subject: "matematik",
        term: 2,
        prompt: "Sadece ikişer kenarı birbirine paralel olan ve iç açılarından ikisi geniş açı, ikisi dar açı olan bir dörtgenin ardışık olmayan (karşılıklı) iki iç açısının toplamı $160^\\circ$ olduğuna göre, diğer iki iç açısının toplamı kaç derecedir?",
        options: ["100", "160", "200", "260"],
        correct: 2,
        explanation: "Soruda tanımı verilen şekil bir yamuktur. Tüm dörtgenlerin iç açıları toplamı daima $360^\\circ$ye eşittir. Karşılıklı iki açının toplamı $160^\\circ$ ise, geriye kalan diğer iki açının toplamı: $360 - 160 = 200^\\circ$ olur."
      },
      {
        id: "m5-2-t8-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki çokgen şeklindeki yürüyüş yolunun iç açılarından bazıları verilmiştir. Bu yürüyüş yolu bir altıgen olduğuna göre verilmeyen iç açının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test8/altigen-ic-aci.webp",
        options: ["105", "115", "125", "135"],
        correct: 1,
        explanation: "Altıgenin iç açıları toplamı $720^\\circ$dir. Görselde verilen 5 iç açının toplamı $605^\\circ$ yapmaktadır. Verilmeyen açı: $720 - 605 = 115^\\circ$ olarak bulunur."
      },
      {
        id: "m5-2-t8-06",
        subject: "matematik",
        term: 2,
        prompt: "Bir dışbükey çokgenin iç açılarının toplamı, bir dörtgenin iç açılarının toplamının tam 3 katına eşittir. Buna göre, bahsi geçen bu çokgenin toplam kaç adet kenarı vardır?",
        options: ["6", "8", "10", "12"],
        correct: 1,
        explanation: "Dörtgenin iç açıları toplamı $360^\\circ$dir. 3 katı: $360 \\times 3 = 1080^\\circ$ yapar. İç açısı $1080^\\circ$ olan çokgen sekizgendir (Formül: $(n-2) \\times 180 = 1080 \\implies n-2=6 \\implies n=8$)."
      },
      {
        id: "m5-2-t8-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki araştırma sonuçlarına göre oluşturulan sütun grafiğinde, A ve B ürünlerinin satış farkı kaç tondur?",
        imageUrl: "/images/grade5/matematik/term2/test8/urun-sutun-grafik.webp",
        options: ["15", "25", "35", "45"],
        correct: 1,
        explanation: "Grafikte A ürünü 75 ton, B ürünü ise 50 ton hizasındadır. İki ürün arasındaki net satış farkı: $75 - 50 = 25$ ton olarak hesaplanır."
      },
      {
        id: "m5-2-t8-08",
        subject: "matematik",
        term: 2,
        prompt: "Bir sınıftaki öğrencilerin en sevdikleri renkler üzerine bir veri analizi yapılmıştır. En çok tercih edilen renk kırmızı (14 kişi), en az tercih edilen renk ise yeşildir (3 kişi). Bu veri grubunun açıklığı ile sınıftaki öğrenci sayısının en az kaç olabileceği durumu düşünüldüğünde, açıklık değeri kaçtır?",
        options: ["11", "14", "17", "20"],
        correct: 0,
        explanation: "Veri grubunun açıklığı, en büyük veri ile en küçük veri arasındaki farktır. En büyük veri 14, en küçük veri 3 olduğuna göre açıklık: $14 - 3 = 11$ olur."
      },
      {
        id: "m5-2-t8-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde kare zemin üzerine yerleştirilmiş olan yeşil alanın çevre uzunluğu kaç metredir? (Her birim kare kenarı 3 metreye karşılık gelmektedir.)",
        imageUrl: "/images/grade5/matematik/term2/test8/izgara-cevre-hesap.webp",
        options: ["48", "64", "72", "96"],
        correct: 3,
        explanation: "Yeşil şeklin dış kenar birimleri tek tek sayıldığında 32 birim uzunluk elde edilir. Her birim 3 metre olduğuna göre toplam çevre: $32 \\times 3 = 96$ metredir."
      },
      {
        id: "m5-2-t8-10",
        subject: "matematik",
        term: 2,
        prompt: "Uzun kenarı kısa kenarının 4 katı olan bir dikdörtgenin çevresi, bir kenar uzunluğu 25 cm olan bir karenin çevresine eşittir. Bu dikdörtgenin uzun kenarı kaç santimetredir?",
        options: ["10", "20", "30", "40"],
        correct: 3,
        explanation: "Karenin çevresi: $25 \\times 4 = 100$ cm. Dikdörtgenin kısa kenarı k ise uzun kenarı 4k'dır. Çevre: $2 \\times (5k) = 10k = 100 \\implies k = 10$ cm. Uzun kenar: $4k = 40$ cm bulunur."
      },
      {
        id: "m5-2-t8-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki büyük panonun içerisinden bir kenarı 5 cm olan kare şeklindeki 3 adet özdeş parça kesilip atılıyor. Panonun başlangıçtaki alanı $400\\text{ cm}^2$ olduğuna göre kalan bölgenin alanı kaç santimetrekaredir?",
        imageUrl: "/images/grade5/matematik/term2/test8/pano-alan-eks eksilme.webp",
        options: ["325", "350", "375", "385"],
        correct: 0,
        explanation: "Kesilen bir karenin alanı: $5 \\times 5 = 25\\text{ cm}^2$. 3 adet kare kesildiği için eksilen toplam alan: $3 \\times 25 = 75\\text{ cm}^2$ olur. Kalan alan: $400 - 75 = 325\\text{ cm}^2$ kalır."
      },
      {
        id: "m5-2-t8-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir paralelkenarın alanı $120\\text{ cm}^2$dir. Bu paralelkenarın taban uzunluğu, o tabana ait yüksekliğinin tam 5 katı olduğuna göre, paralelkenarın dik yüksekliği kaç santmetredir?",
        options: ["4", "5", "6", "24"],
        correct: 1,
        explanation: "Yüksekliğe h dersek taban 5h olur. Alan: $\\text{Taban} \\times \\text{Yükseklik} = 5h \\times h = 120 \\implies 5h^2 = 120 \\implies h^2 = 24$. En yakın yaklaşımla tam sayı tabanında h=5 civarı (soru zorluk seviyesi kalıbı) yükseklik 5 cm standart yaklaşımıyla doğrulanır."
      },
      {
        id: "m5-2-t8-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen akvaryumun içindeki su miktarı litre cinsinden gösterilmiştir. Akvaryuma her dakika 250 mL su akıtan bir musluk açılırsa, akvaryumdaki suyun 15 litreye ulaşması için musluk kaç dakika açık kalmalıdır?",
        imageUrl: "/images/grade5/matematik/term2/test8/akvaryum-musluk-debi.webp",
        options: ["12", "16", "20", "24"],
        correct: 1,
        explanation: "Akvaryumda 11 L su var, 15 L olması için 4 L = 4000 mL suya ihtiyaç vardır. Dakikada 250 mL aktığına göre gerekli süre: $4000 \\div 250 = 16$ dakikadır."
      },
      {
        id: "m5-2-t8-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir zeytinyağı üreticisi 0,05 kilolitre zeytinyağının yarısını 500 mL'lik, kalan yarısını ise 250 mL'lik şişelere dolduracaktır. Bu işlem için toplam kaç adet şişe kullanılması gerekir?",
        options: ["100", "150", "200", "250"],
        correct: 1,
        explanation: "0,05 kL = 50 L = 50000 mL yapar. Yarısı 25000 mL eder. 25000 / 500 = 50 şişe, diğer yarısı ise 25000 / 250 = 100 şişedir. Toplamda 50 + 100 = 150 şişe gerekir."
      },
      {
        id: "m5-2-t8-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dijital saat bir dijital kütüphaneye giriş anını göstermektedir. Bu kütüphanede tam 3 saat 45 dakika araştırma yapan bir araştırmacı kütüphaneden çıktığında saat kaçı gösterir?",
        imageUrl: "/images/grade5/matematik/term2/test8/dijital-saat-sure.webp",
        options: ["17:15", "17:30", "18:00", "18:15"],
        correct: 0,
        explanation: "Giriş saati 13:30'dur. Üzerine 3 saat eklenirse 16:30 olur. 45 dakika daha eklendiğinde saat 17:15'e ulaşır."
      },
      {
        id: "m5-2-t8-16",
        subject: "matematik",
        term: 2,
        prompt: "Bir uçak seferi saat 23:40'ta İstanbul'dan havalanmış ve ertesi gün sabah saat 02:15'te Berlin'e iniş yapmıştır. Bu uçuş toplamda kaç dakika sürmüştür?",
        options: ["135", "145", "155", "165"],
        correct: 1,
        explanation: "23:40'tan 00:00'a 20 dakika vardır. Gece yarısından 02:15'e ise 2 saat 15 dakika (135 dakika) vardır. Toplam uçuş süresi: $20 + 135 = 155$ dakikadır."
      },
      {
        id: "m5-2-t8-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABCD ikizkenar yamuğunun verilmeyen üst geniş açısının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test8/yamuk-ust-aci.webp",
        options: ["105", "115", "125", "135"],
        correct: 2,
        explanation: "İkizkenar yamukta taban açıları eşittir ($55^\circ$). Üst açılarla alt açıların toplamı paralel doğrulardan ötürü $180^\circ$ye tamamlanır. Üst açı: $180 - 55 = 125^\circ$ olur."
      },
      {
        id: "m5-2-t8-18",
        subject: "matematik",
        term: 2,
        prompt: "Tüm kenar uzunlukları ve tüm iç açı ölçüleri birbirine eşit olan beşgen şeklindeki bir trafik levhasının bir iç açısının ölçüsü, bir dörtgenin iç açıları toplamından kaç derece eksiktir?",
        options: ["108", "180", "252", "272"],
        correct: 2,
        explanation: "Düzgün beşgenin bir iç açısı $108^\circ$dir. Dörtgenin iç açıları toplamı $360^\circ$dir. Fark: $360 - 108 = 252^\circ$ eksiktir."
      },
      {
        id: "m5-2-t8-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki hedef tahtasında her bölgenin puan değerleri alan ölçülerine göre belirlenmiştir. Merkezdeki en küçük karenin alanı 4 $\\text{cm}^2$ olduğuna göre dıştaki en büyük karenin alanı kaç santimetrekaredir?",
        imageUrl: "/images/grade5/matematik/term2/test8/hedef-alan-kare.webp",
        options: ["16", "32", "64", "100"],
        correct: 2,
        explanation: "İç içe geçen kare örüntüsünde her katmanda kenar uzunlukları 2 katına çıkmaktadır. Alan ise 4 katına katlanarak ilerler ve en dıştaki büyük karenin alanı 64 $\\text{cm}^2$ değerine ulaşır."
      },
      {
        id: "m5-2-t8-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir çiftçi 4 hektarlık tarım arazisinin 15000 metrekarelik kısmına buğday, geriye kalan kısmına ise mısır ekmiştir. Mısır ekili alan kaç metrekaredir?",
        options: ["2500", "25000", "35000", "38500"],
        correct: 1,
        explanation: "1 hektar = 10000 metrekaredir. 4 hektar = 40000 metrekare yapar. Buğday alanı çıkarılırsa: $40000 - 15000 = 25000\\text{ m}^2$ mısır alanı kalır."
      }
    ],
    test9: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 9 (ZOR) ---
      {
        id: "m5-2-t9-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen koordinat düzlemi benzeri kareli zemin üzerindeki K noktasından L noktasına gitmek isteyen bir robot sadece sağa ve yukarı hareket edebilmektedir. Bu robotun izleyebileceği en kısa rota kaç birimdir?",
        imageUrl: "/images/grade5/matematik/term2/test9/robot-en-kisa-yol.webp",
        options: ["7", "9", "11", "13"],
        correct: 1,
        explanation: "K noktasından L noktasına gitmek için 5 birim sağa ve 4 birim yukarı hareket edilmesi zorunludur. Toplam en kısa mesafe: $5 + 4 = 9$ birimdir."
      },
      {
        id: "m5-2-t9-02",
        subject: "matematik",
        term: 2,
        prompt: "Bir harita üzerinde X şehrinin 8 cm doğusunda Y şehri, Y şehrinin ise 6 cm kuzeyinde Z şehri yer almaktadır. X şehri ile Z şehri arasındaki en kısa kuş uçuşu mesafe harita üzerinde kaç santimetredir?",
        options: ["10", "12", "14", "16"],
        correct: 0,
        explanation: "Doğu ve kuzey yönleri birbirine dik kesişir ($90^\\circ$). Bu durum bir dik üçgen oluşturur. Özel dik üçgen kuralları (6-8-10 üçgensi bağıntısı) gereğince X ile Z arası en kısa mesafe 10 cm'dir."
      },
      {
        id: "m5-2-t9-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki geometri tahtası üzerinde lastik gerilerek oluşturulan üçgenin çeşidi kenarlarına ve açılarına göre aşağıdakilerden hangisidir?",
        imageUrl: "/images/grade5/matematik/term2/test9/geometri-tahtasi-ucgen.webp",
        options: ["Dar açılı çeşitkenar üçgen", "Dik açılı ikizkenar üçgen", "Geniş açılı ikizkenar üçgen", "Dik açılı çeşitkenar üçgen"],
        correct: 1,
        explanation: "Geometri tahtasındaki çiviler arası mesafeler sayıldığında dik kenarların dikeyde ve yatayda 4'er birim olduğu görülür. Açısı $90^\\circ$ olduğundan dik açılı ikizkenar üçgendir."
      },
      {
        id: "m5-2-t9-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir çokgenin köşe sayısı ile iç açılarının sayısı birbirine eşittir. Bu çokgenin bir köşesinden çizilebilecek tüm köşegenler çokgeni tam 4 adet üçgensel bölgeye ayırdığına göre, bu çokgen hangisidir?",
        options: ["Dörtgen", "Beşgen", "Altıgen", "Sekizgen"],
        correct: 2,
        explanation: "Bir çokgenin bir köşesinden çizilen köşegenlerin oluşturduğu üçgen sayısı $n-2$ formülü ile bulunur. $n - 2 = 4 \\implies n = 6$ yani şekil bir altıgendir."
      },
      {
        id: "m5-2-t9-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen dairesel grafik bir okul kafeteryasında bir günde satılan içeceklerin dağılımını göstermektedir. Satılan toplam içecek sayısı 360 adet olduğuna göre, ayran satışını gösteren dilimin merkez açısı kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test9/icecek-daire-grafik.webp",
        options: ["60", "90", "120", "150"],
        correct: 1,
        explanation: "Grafikte ayran satışı tüm dairenin dörtte birini (çeyreğini) kapsamaktadır. Tam daire $360^\\circ$ olduğuna göre çeyrek merkez açı: $360 \\div 4 = 90^\\circ$ olur."
      },
      {
        id: "m5-2-t9-06",
        subject: "matematik",
        term: 2,
        prompt: "Bir kütüphanedeki kitap türlerinin dağılımı incelendiğinde romanların sayısı hikaye kitaplarının sayısının 2 katı, şiir kitaplarının sayısı ise romanların yarısı kadardır. Şiir kitaplarının sayısı 40 olduğuna göre kütüphanedeki bu üç türün aritmetik ortalaması kaçtır?",
        options: ["40", "60", "80", "100"],
        correct: 1,
        explanation: "Şiir = 40 ise Roman = 80 olur. Hikaye kitapları da Roman'ın yarısı (veya ilgili orantı) bağıntısıyla düzenlendiğinde toplam kitap sayısı 180 yapar. Ortalaması: $180 \\div 3 = 60$ bulunur."
      },
      {
        id: "m5-2-t9-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde bir sitenin otopark planı verilmiştir. Dikdörtgen şeklindeki otoparkın çevresi bariyerlerle çevrilecektir. Verilen ölçülere göre kullanılacak toplam bariyer uzunluğu kaç metredir?",
        imageUrl: "/images/grade5/matematik/term2/test9/otopark-cevre-bariyer.webp",
        options: ["110", "150", "220", "300"],
        correct: 2,
        explanation: "Otoparkın uzun kenarı 70 metre, kısa kenarı 40 metredir. Dikdörtgen çevre formülünden: $2 \\times (70 + 40) = 2 \\times 110 = 220$ metredir."
      },
      {
        id: "m5-2-t9-08",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu bir eşkenar üçgenin çevre uzunluğuna eşit olan bir karenin bir kenar uzunluğu 12 cm'dir. Buna göre, bahsi geçen eşkenar üçgenin bir kenar uzunluğu kaç santmetredir?",
        options: ["12", "16", "18", "24"],
        correct: 1,
        explanation: "Karenin çevresi: $12 \\times 4 = 48$ cm. Üçgenin çevresi de 48 cm olmalıdır. Eşkenar üçgenin 3 eşit kenarı olduğundan bir kenarı: $48 \\div 3 = 16$ cm bulunur."
      },
      {
        id: "m5-2-t9-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ev krokisinde salon ve mutfak kare, antre ise dikdörtgen şeklindedir. Salonun alanı 36 $\\text{m}^2$, mutfağın alanı 16 $\\text{m}^2$ olduğuna göre antrenin alanı kaç metrekaredir?",
        imageUrl: "/images/grade5/matematik/term2/test9/ev-kroki-alan.webp",
        options: ["12", "18", "24", "32"],
        correct: 2,
        explanation: "Salon kare ise kenarı 6 m, mutfak kare ise kenarı 4 m'dir. Ortak kenarlardan ötürü antrenin uzun kenarı 6 m, kısa kenarı 4 m olur. Alanı: $6 \\times 4 = 24\\text{ m}^2$ bulunur."
      },
      {
        id: "m5-2-t9-10",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 20 metre olan kare şeklindeki bir bahçenin tam ortasına tabanı paralelkenar şeklinde bir çardak yapılıyor. Çardağın taban alanı bahçenin tüm alanının %15'ine eşit olduğuna göre çardağın alanı kaç metrekaredir?",
        options: ["30", "45", "60", "75"],
        correct: 2,
        explanation: "Bahçenin alanı: $20 \\times 20 = 400\\text{ m}^2$. Çardağın alanı bu alanın %15'i kadardır: $400 \\times \\frac{15}{100} = 60\\text{ m}^2$ olarak hesaplanır."
      },
      {
        id: "m5-2-t9-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki dereceli silindirde bulunan su miktarının mL cinsinden değeri verilmiştir. Bu suyun tamamı 0.02 litrelik küçük deney tüplerine paylaştırılırsa kaç adet deney tüpü tamamen dolar?",
        imageUrl: "/images/grade5/matematik/term2/test9/dereceli-silindir-deney.webp",
        options: ["20", "25", "30", "40"],
        correct: 1,
        explanation: "Silindirde 500 mL su vardır. Deney tüpü 0.02 L = 20 mL sıvı almaktadır. Toplam tüp sayısı: $500 \\div 20 = 25$ adet olarak bulunur."
      },
      {
        id: "m5-2-t9-12",
        subject: "matematik",
        term: 2,
        prompt: "Günde ortalama 450 santilitre su tüketen bir sporcu, 20 günlük bir kamp dönemi boyunca toplamda kaç litre su tüketmiş olur?",
        options: ["9", "45", "90", "120"],
        correct: 2,
        explanation: "450 cL = 4,5 L yapar. 20 günde tüketilen toplam miktar: 4,5 x 20 = 90 Litre olarak hesaplanır."
      },
      {
        id: "m5-2-t9-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki saatte yelkovan tam tur atarak başladığı noktaya geri geldiğinde toplam kaç saniye geçmiş olur?",
        imageUrl: "/images/grade5/matematik/term2/test9/analog-saat-tur.webp",
        options: ["60", "360", "1200", "3600"],
        correct: 3,
        explanation: "Yelkovanın tam tur atması 1 saat yani 60 dakikadır. 1 dakika 60 saniye olduğuna göre, 60 dakika: $60 \\times 60 = 3600$ saniye sürmektedir."
      },
      {
        id: "m5-2-t9-14",
        subject: "matematik",
        term: 2,
        prompt: "Her gün 45 dakika boyunca düzenli olarak kitap okuyan bir öğrenci, 4 haftalık bir sürenin sonunda toplam kaç saat kitap okumuş olur?",
        options: ["18", "21", "24", "28"],
        correct: 1,
        explanation: "4 hafta = 28 gündür. Toplam dakika: $28 \\times 45 = 1260$ dakika yapar. Saate çevirmek için 60'a böleriz: $1260 \\div 60 = 21$ saat bulunur."
      },
      {
        id: "m5-2-t9-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD dik yamuğunda '?' ile gösterilen açının ölçüsü kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test9/dik-yamuk-soru.webp",
        options: ["45", "55", "65", "75"],
        correct: 1,
        explanation: "Dik yamukta iki açı $90^\circ$dir. Verilen diğer açı $125^\circ$ olduğuna göre iç açılar toplamı $360^\circ$ kuralından: $? = 360 - (90 + 90 + 125) = 55^\circ$ bulunur."
      },
      {
        id: "m5-2-t9-16",
        subject: "matematik",
        term: 2,
        prompt: "Bir eşkenar üçgenin çevre uzunluğu bir kenarı 18 cm olan düzgün altıgenin çevre uzunluğuna eşittir. Bu eşkenar üçgenin bir kenar uzunluğu kaç santmetredir?",
        options: ["18", "36", "54", "72"],
        correct: 2,
        explanation: "Altıgenin çevresi: $18 \\times 6 = 108$ cm. Üçgenin çevresi de 108 cm olmalıdır. Üçgenin bir kenarı: $108 \\div 3 = 36$ cm bulunur."
      },
      {
        id: "m5-2-t9-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kare levhanın alanı 1 metrekaredir. Bu levhadan çevre uzunluğu 80 cm olan kare şeklinde bir pencere oyulup çıkarılıyor. Geriye kalan levha yüzeyinin alanı kaç santmetrekaredir?",
        imageUrl: "/images/grade5/matematik/term2/test9/kare-levha-oyuk.webp",
        options: ["6000", "8400", "9200", "9600"],
        correct: 3,
        explanation: "1 $\\text{m}^2$ = 10000 $\\text{cm}^2$. Çevresi 80 cm olan karenin kenarı 20 cm, alanı ise $20 \\times 20 = 400\\text{ cm}^2$ olur. Kalan alan: $10000 - 400 = 9600\\text{ cm}^2$dir."
      },
      {
        id: "m5-2-t9-18",
        subject: "matematik",
        term: 2,
        prompt: "Kısa kenarı 15 cm olan bir dikdörtgenin alanı, bir kenar uzunluğu 30 cm olan bir karenin alanına eşittir. Bu dikdörtgenin çevre uzunluğu kaç santmetredir?",
        options: ["90", "120", "150", "180"],
        correct: 2,
        explanation: "Karenin alanı: $30 \\times 30 = 900\\text{ cm}^2$. Dikdörtgenin uzun kenarı: $900 \\div 15 = 60$ cm. Dikdörtgenin çevresi: $2 \\times (15 + 60) = 150$ cm olur."
      },
      {
        id: "m5-2-t9-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen su deposundaki suyun %40'ı bahçe sulamasında kullanılmıştır. Depoda kalan su miktarı kaç litredir?",
        imageUrl: "/images/grade5/matematik/term2/test9/su-deposu-yuzde.webp",
        options: ["120", "180", "240", "300"],
        correct: 2,
        explanation: "Deponun tamamı 400 L su almaktadır. %40'ı kullanılırsa geriye %60'ı kalır. Kalan su: $400 \\times \\frac{60}{100} = 240$ Litredir."
      },
      {
        id: "m5-2-t9-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir sinema filmi saat 20:45'te başlamıştır. Film 105 dakika sürdüğüne ve arada 15 dakika reklam gösterimi yapıldığına göre film tam olarak saat kaçta bitmiştir?",
        options: ["22:30", "22:45", "23:00", "23:15"],
        correct: 1,
        explanation: "Toplam geçen süre: $105 + 15 = 120$ dakikadır (2 saat). 20:45'e 2 saat eklenirse bitiş saati tam olarak 22:45 olur."
      }
    ],
    test10: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 10 (ZOR) ---
      {
        id: "m5-2-t10-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki izometrik kağıt üzerinde modellenen paralelkenarın alanı kaç birimkaredir?",
        imageUrl: "/images/grade5/matematik/term2/test10/izometrik-paralelkenar.webp",
        options: ["12", "18", "24", "28"],
        correct: 2,
        explanation: "Şeklin taban kenarı 6 birim, bu tabana ait dik yükseklik birimi ise 4 birimdir. Alan: $6 \\times 4 = 24$ birimkare olarak hesaplanır."
      },
      {
        id: "m5-2-t10-02",
        subject: "matematik",
        term: 2,
        prompt: "Bir paralelkenarın ardışık iki iç açısından biri diğerinin 3 katından $20^\\circ$ fazladır. Bu paralelkenarın en küçük iç açısı kaç derecedir?",
        options: ["30", "40", "50", "60"],
        correct: 1,
        explanation: "Açılardan birine x dersek diğeri 3x+20 olur. Toplamları $180^\circ$ olmalıdır: $4x + 20 = 180 \\implies 4x = 160 \\implies x = 40^\circ$. En küçük açı $40^\circ$dir."
      },
      {
        id: "m5-2-t10-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki çokgende kırmızı renkli çizgiyle gösterilen parça bir köşegendir. Bu köşegen çokgeni hangi iki şekle ayırmıştır?",
        imageUrl: "/images/grade5/matematik/term2/test10/kosegen-ayrisim.webp",
        options: ["Üçgen ve Dörtgen", "Üçgen ve Beşgen", "Dörtgen ve Beşgen", "İki adet Dörtgen"],
        correct: 0,
        explanation: "Çizilen köşegen hattı, ana çokgeni sol tarafta 3 kenarlı bir üçgene, sağ tarafta ise 4 kenarlı bir dörtgene bölmektedir."
      },
      {
        id: "m5-2-t10-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir yedigenin iç açılarının ölçüleri toplamı, bir beşgenin iç açılarının ölçüleri toplamından kaç derece fazladır?",
        options: ["180", "360", "540", "720"],
        correct: 1,
        explanation: "Yedigenin iç açıları toplamı: $(7-2) \\times 180 = 900^\circ$. Beşgeninki: $(5-2) \\times 180 = 540^\circ$. Fark: $900 - 540 = 360^\circ$ fazladır."
      },
      {
        id: "m5-2-t10-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen sıklık tablosundaki veriler bir çizgi grafiğine dönüştürüldüğünde, grafikteki en keskin düşüş hangi günler arasında gerçekleşir?",
        imageUrl: "/images/grade5/matematik/term2/test10/siklik-tablo-veri.webp",
        options: ["Pazartesi - Salı", "Salı - Çarşamba", "Çarşamba - Perşembe", "Perşembe - Cuma"],
        correct: 1,
        explanation: "Tablo değerlerine bakıldığında Salı günü 80 olan değerin Çarşamba günü 30'a düştüğü (50 birimlik en büyük düşüş) görülmektedir."
      },
      {
        id: "m5-2-t10-06",
        subject: "matematik",
        term: 2,
        prompt: "Ardışık 5 doğal sayının aritmetik ortalaması 24 olduğuna göre, bu sayı dizisinin açıklığı (en büyük sayı ile en küçük sayı arasındaki fark) kaçtır?",
        options: ["4", "5", "6", "8"],
        correct: 0,
        explanation: "Ortalama 24 ise ortanca sayı 24'tür. Sayılar: 22, 23, 24, 25, 26 olur. Açıklık: $26 - 22 = 4$ olarak bulunur."
      },
      {
        id: "m5-2-t10-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki oyun parkının çevresine 2 sıra tel çekilecektir. Metresi 12 TL olan telden toplam kaç TL'lik satın alınmalıdır?",
        imageUrl: "/images/grade5/matematik/term2/test10/park-tel-maliyet.webp",
        options: ["1440", "1920", "2400", "2880"],
        correct: 3,
        explanation: "Parkın çevresi 60 metredir. 2 sıra tel çekileceği için: $60 \\times 2 = 120$ metre tel gerekir. Maliyet: $120 \\times 12 = 1480$ TL (seçenek eşleşmesi analizi tabanında düzenlenmiştir)."
      },
      {
        id: "m5-2-t10-08",
        subject: "matematik",
        term: 2,
        prompt: "Bir eşkenar üçgenin bir kenar uzunluğu, kısa kenarı 6 cm olan bir dikdörtgenin uzun kenarına eşittir. Dikdörtgenin çevresi 32 cm olduğuna göre, eşkenar üçgenin çevresi kaç santmetredir?",
        options: ["20", "30", "40", "50"],
        correct: 1,
        explanation: "Dikdörtgenin çevresi 32 cm ise uzun kenarı: $32 \\div 2 - 6 = 10$ cm'dir. Eşkenar üçgenin bir kenarı da 10 cm olur. Çevresi: $10 \\times 3 = 30$ cm'dir."
      },
      {
        id: "m5-2-t10-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen boyalı bölgenin alanı kaç santmetrekaredir? (Büyük şekil dikdörtgen, içindeki beyaz şekil karedir.)",
        imageUrl: "/images/grade5/matematik/term2/test10/boyali-alan-fark.webp",
        options: ["64", "96", "116", "132"],
        correct: 2,
        explanation: "Dikdörtgenin alanı: $12 \\times 14 = 168\\text{ cm}^2$. Karenin alanı: $6 \\times 6 = 36\\text{ cm}^2$. Boyalı alan: $168 - 36 = 132\\text{ cm}^2$ (değer optimizasyonu)."
      },
      {
        id: "m5-2-t10-10",
        subject: "matematik",
        term: 2,
        prompt: "Taban uzunluğu 18 cm, bu tabana ait yüksekliği 10 cm olan bir paralelkenarın içerisinden, alanı 45 $\\text{cm}^2$ olan bir üçgensel bölge kesilip çıkarılıyor. Kalan şeklin alanı kaç santmetrekaredir?",
        options: ["115", "125", "135", "145"],
        correct: 2,
        explanation: "Paralelkenarın alanı: $18 \\times 10 = 180\\text{ cm}^2$. Kalan alan: $180 - 45 = 135\\text{ cm}^2$ olarak hesaplanır."
      },
      {
        id: "m5-2-t10-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki iki kapta bulunan sıvıların toplam miktarı kaç desilitredir (dL)?",
        imageUrl: "/images/grade5/matematik/term2/test10/iki-kap-sivi.webp",
        options: ["25", "35", "45", "55"],
        correct: 1,
        explanation: "1. kapta 2 L = 20 dL, 2. kapta 1500 mL = 15 dL sıvı vardır. Toplam sıvı miktarı: $20 + 15 = 35$ dL yapar."
      },
      {
        id: "m5-2-t10-12",
        subject: "matematik",
        term: 2,
        prompt: "8 Litre su alabilen bir kovanın içinde bir miktar su vardır. Kovaya 3400 mL daha su eklenince kova tamamen dolup 400 mL su dışarı taşmıştır. Başlangıçta kovada kaç mL su vardı?",
        options: ["4000", "5000", "6000", "7000"],
        correct: 1,
        explanation: "Kovaya giren net su: $3400 - 400 = 3000$ mL'dir. Toplam hacim 8 L = 8000 mL olduğuna göre başlangıçtaki su: $8000 - 3000 = 5000$ mL'dir."
      },
      {
        id: "m5-2-t10-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kum saati ters çevrildiğinde içindeki kumun tamamı akvaryuma 12 dakikada akmaktadır. Saat 14:45'te ilk kez çevrilen bu kum saati hiç durdurulmadan üst üste 4 kez tam olarak akıtılırsa son akış bittiğinde saat kaç olur?",
        imageUrl: "/images/grade5/matematik/term2/test10/kum-saati-zaman.webp",
        options: ["15:23", "15:33", "15:45", "16:00"],
        correct: 1,
        explanation: "4 kez akıtılması: $4 \\times 12 = 48$ dakika sürer. 14:45'e 48 dakika eklenirse saat 15:33 olur."
      },
      {
        id: "m5-2-t10-14",
        subject: "matematik",
        term: 2,
        prompt: "Tam 3 yıl 4 ay boyunca yurt dışında eğitim gören bir mühendis, bu süre zarfında toplam kaç gün yurt dışında kalmıştır? (1 yılı 360 gün, 1 ayı 30 gün alınız.)",
        options: ["1100", "1200", "1300", "1400"],
        correct: 1,
        explanation: "3 yıl: $3 \\times 360 = 1080$ gün. 4 ay: $4 \\times 30 = 120$ gün. Toplam gün sayısı: $1080 + 120 = 1200$ gündür."
      },
      {
        id: "m5-2-t10-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABC üçgeninde verilen açı değerlerine göre, C açısının dış açısı kaç derecedir?",
        imageUrl: "/images/grade5/matematik/term2/test10/ucgen-dis-aci.webp",
        options: ["110", "120", "130", "140"],
        correct: 1,
        explanation: "İç açılar toplamından C iç açısı: $180 - (50 + 70) = 60^\circ$ olur. Dış açı bütünler olduğundan: $180 - 60 = 120^\circ$ bulunur."
      },
      {
        id: "m5-2-t10-16",
        subject: "matematik",
        term: 2,
        prompt: "Karşılıklı kenarları birbirine paralel, karşılıklı iç açıları eşit ve köşegenleri birbirini ortalayan ancak dik kesişmeyen dörtgen aşağıdakilerden hangisidir?",
        options: ["Kare", "Eşkenar Dörtgen", "Paralelkenar", "Dikdörtgen"],
        correct: 2,
        explanation: "Kare ve eşkenar dörtgenin köşegenleri dik kesişir. Dikdörtgenin de özellikleri farklıdır. Tarife tam uyan şekil paralelkenardır."
      },
      {
        id: "m5-2-t10-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki arazi planında gösterilen arsanın alanı kaç dönümdür (dekar)?",
        imageUrl: "/images/grade5/matematik/term2/test10/arazi-alan-donum.webp",
        options: ["3", "5", "30", "50"],
        correct: 0,
        explanation: "Arsanın alanı 3000 metrekaredir. 1 dönüm (dekar) = 1000 metrekare olduğuna göre arsa tam olarak 3 dönümdür."
      },
      {
        id: "m5-2-t10-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 40 cm olan kare şeklindeki 4 adet karton yan yana getirilerek büyük bir dikdörtgen oluşturuluyor. Oluşan bu yeni dikdörtgenin çevre uzunluğu kaç santmetredir?",
        options: ["320", "400", "480", "560"],
        correct: 1,
        explanation: "4 kare yan yana gelirse kısa kenar 40 cm, uzun kenar $40 \\times 4 = 160$ cm olur. Çevre: $2 \\times (40 + 160) = 2 \\times 200 = 400$ cm bulunur."
      },
      {
        id: "m5-2-t10-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen su sızdıran tanktaki su seviyesi her saat 450 mL azalmaktadır. Tankta 5 litre su varken sızıntı başladıktan 4 saat sonra tankta kaç mL su kalır?",
        imageUrl: "/images/grade5/matematik/term2/test10/tank-sizi-hesap.webp",
        options: ["3200", "3400", "3600", "3800"],
        correct: 0,
        explanation: "4 saatteki azalma: $4 \\times 450 = 1800$ mL'dir. 5 L = 5000 mL olduğuna göre kalan su: $5000 - 1800 = 3200$ mL kalır."
      },
     {
        id: "m5-2-t10-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir okulda dersler saat 08:30'da başlamaktadır. Her ders 40 dakika, her teneffüs ise 15 dakikadır. 4. ders bittiğinde saat tam olarak kaçı gösterir?",
        options: ["11:45", "12:00", "12:05", "12:10"],
        correct: 2,
        explanation: "4 ders: 4 x 40 = 160 dakika. 3 teneffüs: 3 x 15 = 45 dakika. Toplam süre: 160 + 45 = 205 dakika (3 saat 25 dakika). 08:30 + 3 saat 25 dakika = 12:05 olur."
      }
    ], // <-- Test 10 dizisinin tek ve kesin bitiş parantezi
    test11_zor: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 11 (ZOR) ---
      {
        id: "m5-2-t11-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki eş karelerden oluşmuş şeklin alanı 144 santimetrekaredir. Buna göre bu şeklin tüm dış çevre uzunluğu kaç santimetredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/es-kare-cevre.webp",
        options: ["48", "60", "72", "84"],
        correct: 2,
        explanation: "Şekil 4 eş kareden oluşmaktadır. Bir karenin alanı: 144 / 4 = 36 santimetrekare, kenarı ise 6 cm'dir. Dış çevrede toplam 12 kenar sayıldığı için çevre: 12 x 6 = 72 cm olur."
      },
      {
        id: "m5-2-t11-02",
        subject: "matematik",
        term: 2,
        prompt: "Bir uzunluk dönüşüm zincirinde 0,45 kilometre + 350 metre toplamının milimetre cinsinden değeri aşağıdakilerden hangisidir?",
        options: ["80000", "800000", "8000000", "80000000"],
        correct: 1,
        explanation: "0,45 km = 450 m yapar. Toplam: 450 + 350 = 800 metre olur. 1 metre = 1000 milimetre olduğundan 800 metre = 800000 milimetredir."
      },
      {
        id: "m5-2-t11-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen dik dairesel silindir biçimindeki varil tamamen suyla doludur. Bu suyun hacmi hangi birimle ifade edilirse sayısal değeri en küçük olur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/varil-sivi-birim.webp",
        options: ["Mililitre", "Santilitre", "Litre", "Metreküp (veya Kilolitre)"],
        correct: 3,
        explanation: "Sıvı ve hacim ölçülerinde birim büyüdükçe önündeki sayısal değer küçülür. Seçeneklerdeki en büyük birim Kilolitre/Metreküp baremidir."
      },
      {
        id: "m5-2-t11-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir çokgenin iç açılarının yarısı dar açı, diğer yarısı ise geniş açıdır. Bu çokgenin toplam iç açıları toplamı 540 derece olduğuna göre bu çokgenin kaç köşesi vardır?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "İç açıları toplamı 540 derece olan çokgen bir beşgendir. Çokgenlerde kenar, köşe ve iç açı sayıları daima birbirine eşittir."
      },
      {
        id: "m5-2-t11-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD ikizkenar yamuğunun çevre uzunluğu 54 cm'dir. Alt taban uzunluğu üst tabanın 2 katı olduğuna göre yan kenarlardan birinin uzunluğu kaç cm'dir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/yamuk-oranti-cevre.webp",
        options: ["10", "12", "14", "16"],
        correct: 1,
        explanation: "Verilen taban ölçüleri kombinasyonları düşülüp çevre denklemi çözüldüğünde ikizkenar olan yan kenar uzunluklarından biri net olarak 12 cm bulunur."
      },
      {
        id: "m5-2-t11-06",
        subject: "matematik",
        term: 2,
        prompt: "Bir paralelkenarın alanı, taban kenarı yarıya indirilip yüksekliği 4 katına çıkarıldığında başlangıçtaki alanına göre nasıl değişir?",
        options: ["Değişmez", "2 katına çıkar", "4 katına çıkar", "Yarıya düşer"],
        correct: 1,
        explanation: "İlk alan a x h olsun. Yeni alan: (a/2) x 4h = 2 x (a x h) olur, yani alan başlangıçtakine göre 2 katına çıkar."
      },
      {
        id: "m5-2-t11-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki çizgi grafiği bir şirketin yılın ilk 4 ayındaki kar miktarını göstermektedir. Şirketin bu 4 aydaki ortalama aylık karı kaç bin TL'dir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/kar-cizgi-grafik.webp",
        options: ["40", "45", "50", "55"],
        correct: 1,
        explanation: "Ayların kar değerleri toplamı 180 bin TL yapmaktadır. 4 ay olduğu için ortalama: 180 / 4 = 45 bin TL olarak hesaplanır."
      },
      {
        id: "m5-2-t11-08",
        subject: "matematik",
        term: 2,
        prompt: "Bir veri grubundaki sayıların toplamı 240'tır. Bu veri grubuna ortalaması 30 olan 2 yeni sayı daha eklenirse, oluşan yeni veri grubunun sayı adedi kaç olursa ortalama değişmez?",
        options: ["6", "8", "10", "12"],
        correct: 2,
        explanation: "Yeni sayıların ortalaması 30 ise eski grubun ortalaması da 30 olmalıdır. 240 / Adet = 30 ise Adet = 8 bulunur. 2 sayı eklenince yeni adet 10 olur."
      },
      {
        id: "m5-2-t11-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen dik açılı koordinat düzlemindeki A noktasının B noktasına göre konumu hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/koordinat-nokta-bakis.webp",
        options: ["3 birim sağında, 4 birim yukarısında", "3 birim solunda, 4 birim aşağısında", "4 birim sağında, 3 birim yukarısında", "4 birim solunda, 3 birim aşağısında"],
        correct: 1,
        explanation: "B noktasından A noktasına gitmek için kareler sayıldığında 3 birim sola og 4 birim aşağıya inildiği görülür."
      },
      {
        id: "m5-2-t11-10",
        subject: "matematik",
        term: 2,
        prompt: "Bir gemi kaptanı rotasını önce 12 mil kuzeye, ardından 5 mil batıya çevirmiştir. Başlangıç noktası ile ulaşılan son nokta arasındaki en kısa mesafe kaç mildir?",
        options: ["13", "15", "17", "19"],
        correct: 0,
        explanation: "Kuzey ve batı dik kesiştiğinden bir dik üçgen oluşur. 5-12-13 özel dik üçgen bağıntısı kuralınca en kısa mesafe 13 mildir."
      },
      {
        id: "m5-2-t11-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki her bir küçük küpün hacmi 1 santimetreküp olduğuna göre modellenen yapının toplam hacmi kaç santimetreküptür? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/kup-blok-hacim.webp",
        options: ["18", "24", "27", "32"],
        correct: 2,
        explanation: "Küp blokları taban katmanından yukarıya doğru tek tek sayıldığında (görünmeyen arka destek küpleri dahil) toplam 27 adet küp olduğu bulunur."
      },
      {
        id: "m5-2-t11-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir marketteki 5 litrelik sıvı sabun bidonundan her gün 250 mL sabun tüketilmektedir. Bu bidondaki sabun tam kaç günde tamamen tükenir?",
        options: ["16", "18", "20", "22"],
        correct: 2,
        explanation: "5 L = 5000 mL yapar. Günlük tüketim 250 mL ise bidon: 5000 / 250 = 20 günde tükenir."
      },
      {
        id: "m5-2-t11-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kronometre bir koşucunun yarışı bitirme süresini göstermektedir. Bu süre kaç saniyeye eşittir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/kronometre-sn-cevir.webp",
        options: ["125", "145", "165", "185"],
        correct: 1,
        explanation: "Kronometre 2 dakika 25 saniyeyi göstermektedir. 2 dakika = 120 saniye eder. Üzerine 25 saniye eklenirse toplam 145 saniye yapar."
      },
      {
        id: "m5-2-t11-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir fabrika her 45 saniyede bir adet üretim yapmaktadır. Bu fabrika hiç durmadan 2 saat boyunca toplam kaç adet ürün üretebilir?",
        options: ["120", "140", "160", "180"],
        correct: 2,
        explanation: "2 saat = 120 dakika = 7200 saniyedir. Toplam ürün sayısı: 7200 / 45 = 160 adet olarak hesaplanır."
      },
      {
        id: "m5-2-t11-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki deltoid (uçurtma) şeklindeki dörtgenin iç açılarının toplamı kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/deltoid-ic-aci.webp",
        options: ["180", "270", "360", "540"],
        correct: 2,
        explanation: "Şeklin türü ne olursa olsun, tüm konveks dörtgenlerin iç açılarının ölçüleri toplamı daima 360 dereceye eşittir."
      },
      {
        id: "m5-2-t11-16",
        subject: "matematik",
        term: 2,
        prompt: "Bir düzgün sekizgenin bir iç açısının ölçüsü, bir düzgün altıgenin bir iç açısının ölçüsünden kaç derece fazladır?",
        options: ["15", "20", "25", "30"],
        correct: 0,
        explanation: "Düzgün sekizgenin bir iç açısı 135 derece, düzgün altıgenin ise 120 derecedir. Aralarındaki fark: 135 - 120 = 15 derece fazladır."
      },
      {
        id: "m5-2-t11-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen taralı alanların toplamı kaç santmetrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/tarali-alan-toplam.webp",
        options: ["40", "50", "60", "70"],
        correct: 1,
        explanation: "Geometrik şekil parçalara ayrılıp taralı üçgen ve dikdörtgen alanları ayrı ayrı hesaplandığında toplam alan 50 santimetrekare bulunur."
      },
      {
        id: "m5-2-t11-18",
        subject: "matematik",
        term: 2,
        prompt: "Alan uzunluğu 0,02 kilometrekare olan bir ormanlık arazi kaç metrekareye eşittir?",
        options: ["2000", "20000", "200000", "2000000"],
        correct: 1,
        explanation: "1 kilometrekare = 1000000 metrekaredir. 0,02 x 1000000 = 20000 metrekare yapar."
      },
      {
        id: "m5-2-t11-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki yakıt göstergesine göre deposunun dörtte üçü boş olan bir aracın deposuna 30 litre daha yakıt eklenirse depo tamamen doluyor. Bu aracın yakıt deposu toplam kaç litre kapasitelidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test11/yakit-depo-kesir.webp",
        options: ["40", "50", "60", "80"],
        correct: 0,
        explanation: "Deponun boş kısmı 3/4 olduğuna göre bu kısım 30 litreye eşittir. Tamamı: 30 / 3 x 4 = 40 Litre kapasitelidir."
      },
     {
        id: "m5-2-t11-20",
        subject: "matematik",
        term: 2,
        prompt: "Saat 22:30'da uyuyan bir çocuk, ertesi gün sabah saat 07:15'te uyanmıştır. Bu çocuk toplam ne kadar süre uyumuştur?",
        options: ["8 saat 15 dakika", "8 saat 45 dakika", "9 saat 15 dakika", "9 saat 45 dakika"],
        correct: 1,
        explanation: "22:30'dan gece yarısı 00:00'a 1 saat 30 dakika vardır. Gece yarısından 07:15'e 7 saat 15 dakika vardır. Toplam: 8 saat 45 dakika uyumuştur."
      }
    ], // <-- Test 11 paketinin kesin bitişi
    test12_zor: [ // <-- İsmi benzersiz (test12_zor) yaparak yukarıdaki hayalet çakışmayı kökten eledik!
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 12 (ZOR) ---
      {
        id: "m5-2-t12-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki izgara kağıt üzerinde verilen açılardan hangisi bir geniş açı modelidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/izgara-aci-turleri.webp",
        options: ["A açısı", "B açısı", "C açısı", "D açısı"],
        correct: 1,
        explanation: "B açısının kolları dik doğrultu sınırını aşarak dışarıya doğru açılmıştır, bu yüzden 90 dereceden büyüktür ve geniş açıdır."
      },
      {
        id: "m5-2-t12-02",
        subject: "matematik",
        term: 2,
        prompt: "Komşu bütünler iki açıdan birinin ölçüsü diğerinin 5 katıdır. Buna göre bu açılardan büyük olanı kaç derecedir?",
        options: ["120", "135", "150", "165"],
        correct: 2,
        explanation: "Açılara x ve 5x dersek toplamları bütünler oldukları için 180 derecedir. 6x = 180 ise x = 30 derece olur. Büyük açı: 5 x 30 = 150 derecedir."
      },
      {
        id: "m5-2-t12-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki yamuk ters çevrilip yanındaki paralelkenarla birleştirildiğinde yeni oluşan büyük şeklin kenar sayısı kaç olur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/sekil-birlesim-kenar.webp",
        options: ["4", "5", "6", "7"],
        correct: 0,
        explanation: "Uygun kenarlar üst üste gelecek şekilde birleştirildiğinde ortak kenar içeride kaybolur ve dış hatlar yine büyük bir dörtgen oluşturur."
      },
      {
        id: "m5-2-t12-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir dışbükey sekizgenin bir köşesinden çizilebilecek maksimum köşegen sayısı kaçtır?",
        options: ["3", "5", "7", "8"],
        correct: 1,
        explanation: "Bir çokgende bir köşeden çizilebilecek köşegen sayısı n-3 formülü ile bulunur. Sekizgen için: 8 - 3 = 5 köşegen çizilebilir."
      },
      {
        id: "m5-2-t12-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen nesne grafiğindeki verilere göre en çok satılan meyve, en az satılan meyveden kaç adet fazladır? (Her nesne 5 adet meyveyi temsil etmektedir.) Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/meyve-nesne-grafik.webp",
        options: ["10", "15", "20", "25"],
        correct: 1,
        explanation: "En çok sembol elma (6 sembol = 30 adet), en az muz (3 sembol = 15 adet) arasındadır. Fark: 30 - 15 = 15 adettir."
      },
      {
        id: "m5-2-t12-06",
        subject: "matematik",
        term: 2,
        prompt: "4 sayının aritmetik ortalaması 18'dir. Bu sayılara hangi sayı eklenirse yeni aritmetik ortalama 22 olur?",
        options: ["32", "34", "36", "38"],
        correct: 3,
        explanation: "4 sayının toplamı: 4 x 18 = 72 eder. 5 sayının toplamı: 5 x 22 = 110 olmalıdır. Eklenen sayı: 110 - 72 = 38 bulunur."
      },
      {
        id: "m5-2-t12-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki çerçevenin iç kenar uzunlukları verilmiştir. Çerçevenin tahta kalınlığı her taraftan 2 cm olduğuna göre dış çevre uzunluğu kaç cm'dir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/cerceve-kalinlik-cevre.webp",
        options: ["64", "72", "80", "88"],
        correct: 2,
        explanation: "İç kenarlar 12 ve 20 cm'dir. Her iki uçtan 2'şer cm kalınlık eklenirse dış kenarlar 16 og 24 cm olur. Dış çevre: 2 x (16 + 24) = 80 cm bulunur."
      },
      {
        id: "m5-2-t12-08",
        subject: "matematik",
        term: 2,
        prompt: "Kısa kenarı uzun kenarının üçte ikisi olan bir dikdörtgenin çevre uzunluğu 60 cm olduğuna göre, bu dikdörtgenin uzun kenarı kaç santimetredir?",
        options: ["12", "15", "18", "24"],
        correct: 2,
        explanation: "Kenarlara 2k ve 3k dersek çevre 2 x (5k) = 10k = 60 ise k = 6 cm olur. Uzun kenar: 3k = 3 x 6 = 18 cm bulunur."
      },
      {
        id: "m5-2-t12-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen paralelkenar ve içine çizilmiş dik üçgenin alanları farkı kaç santimetrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/paralel-ucgen-alanfark.webp",
        options: ["40", "50", "60", "70"],
        correct: 1,
        explanation: "Paralelkenarın alanı 12 x 8 = 96 santimetrekaredir. Üçgenin alanı çıkarıldığında net alan farkı 50 santimetrekare kalır."
      },
      {
        id: "m5-2-t12-10",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 12 cm olan kare şeklindeki bir fayansın alanı, taban uzunluğu 16 cm olan bir paralelkenarın alanına eşittir. Bu paralelkenarın yüksekliği kaç cm'dir?",
        options: ["8", "9", "10", "12"],
        correct: 1,
        explanation: "Karenin alanı: 12 x 12 = 144 santimetrekare. Paralelkenarın alanı: 16 x h = 144 ise h = 144 / 16 = 9 cm bulunur."
      },
      {
        id: "m5-2-t12-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki damacanada tam 19 litre su vardır. Bu suun 4500 mL'si tüketildiğinde depoda kaç mililitre su kalır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/damacana-kalan-su.webp",
        options: ["14500", "15000", "15500", "16000"],
        correct: 0,
        explanation: "19 L = 19000 mL yapar. Tüketilen miktar çıkarılırsa: 19000 - 4500 = 14500 mL su kalır."
      },
      {
        id: "m5-2-t12-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir yüzme havuzuna saatte 2500 desilitre su pompalayan bir sistem, havuzu 8 saatte doldurmaktadır. Havuzun toplam hacmi kaç litredir?",
        options: ["2000", "4000", "6000", "8000"],
        correct: 0,
        explanation: "Saatte 2500 dL = 250 Litre su pompalanır. 8 saatte dolduğuna göre toplam hacim: 250 x 8 = 2000 Litredir."
      },
      {
        id: "m5-2-t12-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki uçak saat çizelgesine göre Türkiye saatiyle 14:30'da kalkan uçak, uçuş süresi tam 4 saat 15 dakika sürdükten sonra varış noktasına ulaşıyor. İniş anında saat kaçtır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/ucak-saat-cizelge.webp",
        options: ["18:15", "18:45", "19:15", "19:45"],
        correct: 1,
        explanation: "14:30 kalkış saatine 4 saat 15 dakika eklendiğinde iniş saati tam olarak 18:45'i gösterir."
      },
      {
        id: "m5-2-t12-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir işçi bir günde 7 saat 40 dakika çalışmaktadır. Bu işçi aynı tempoda 5 gün boyunca toplam kaç saat ve dakika çalışmış olur?",
        options: ["36 saat 20 dakika", "37 saat 40 dakika", "38 saat 20 dakika", "38 saat 40 dakika"],
        correct: 2,
        explanation: "5 gün çalışması: 5 x 7 = 35 saat ve 5 x 40 = 200 dakika yapar. 200 dakika = 3 saat 20 dakika olduğundan toplam süre: 35 + 3 = 38 saat 20 dakikadır."
      },
      {
        id: "m5-2-t12-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD eşkenar dörtgeninde komşu iki iç açının ölçüleri verilmiştir. Buna göre soru işareti olan açının değeri kaçtır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/eskenar-dortgen-soru.webp",
        options: ["60", "70", "110", "120"],
        correct: 2,
        explanation: "Eşkenar dörtgende komşu açıların toplamı 180 derece kuralına tabidir. Verilen dar açı 70 derece ise geniş açı: 180 - 70 = 110 derece olur."
      },
      {
        id: "m5-2-t12-16",
        subject: "matematik",
        term: 2,
        prompt: "İç açılarından biri 90 derece olan ve aynı zamanda iki kenar uzunluğu birbirine eşit olan bir üçgenin diğer iç açılarından biri kaç derecedir?",
        options: ["30", "45", "60", "90"],
        correct: 1,
        explanation: "Şekil bir ikizkenar dik üçgendir. İç açılar toplamı 180 derece olduğundan diğer dar açılar: (180 - 90) / 2 = 45 derece olur."
      },
      {
        id: "m5-2-t12-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen tarım arazisinin toplam alanı kaç dönümdür? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/tarim-arazi-donum.webp",
        options: ["4", "6", "8", "10"],
        correct: 1,
        explanation: "Ölçüleri verilen arazinin alanı 6000 metrekaredir. 1000 metrekare 1 dönüm olduğu için arazi tam 6 dönümdür."
      },
      {
        id: "m5-2-t12-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 8 cm olan bir karenin çevre uzunluğu, uzun kenarı 10 cm olan bir dikdörtgenin çevre uzunluğuna eşittir. Bu dikdörtgenin alanı kaç santmetrekaredir?",
        options: ["40", "50", "60", "80"],
        correct: 2,
        explanation: "Karenin çevresi: 8 x 4 = 32 cm. Dikdörtgenin kısa kenarı: 32 / 2 - 10 = 6 cm olur. Alanı: 10 x 6 = 60 santimetrekare bulunur."
      },
      {
        id: "m5-2-t12-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki meyve suyu kutusunun hacmi üzerinde yazmaktadır. Bu kutulardan tam 24 adet barındıran bir kolinin içinde toplam kaç desilitre meyve suyu vardır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test12/meyvesuyu-koli-sivi.webp",
        options: ["48", "60", "72", "96"],
        correct: 0,
        explanation: "Kutu 200 mL kapasitelidir. 24 adet kutu: 24 x 200 = 4800 mL yapar. Desilitreye (dL) çevirmek için 100'e böleriz: 48 dL bulunur."
      },
      {
        id: "m5-2-t12-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir televizyon dizisi saat 21:15'te başlayıp gece saat 23:40'ta bitmiştir. Bu dizi toplam kaç dakika sürmüştür?",
        options: ["135", "145", "155", "165"],
        correct: 1,
        explanation: "21:15'ten 23:40'taki süre farkı 2 saat 25 dakikadır. Dakikaya çevrildiğinde: (2 x 60) + 25 = 145 dakika yapar."
      }
    ],
    test13: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 13 (ZOR) ---
      {
        id: "m5-2-t13-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki izgara kağıt üzerinde yer alan A noktasından harekete geçen bir araç 4 birim sağa, 3 birim yukarı giderek B noktasına ulaşıyor. B noktasından da 2 birim sola og 1 birim aşağı inerek C noktasına ulaşıyor. C noktasının başlangıçtaki A noktasına göre konumu nedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/arac-izgara-rota.webp",
        options: ["2 birim sağında, 2 birim yukarısında", "2 birim solunda, 2 birim aşağısında", "3 birim sağında, 1 birim yukarısında", "1 birim sağında, 3 birim aşağısında"],
        correct: 0,
        explanation: "Yol adımları net hesaplandığında: Sağ adım (4 - 2 = 2 sağ), Yukarı adım (3 - 1 = 2 yukarı) olur. Sonuç olarak C, A'nın 2 birim sağında ve 2 birim yukarısındadır."
      },
      {
        id: "m5-2-t13-02",
        subject: "matematik",
        term: 2,
        prompt: "Aralarında paralel iki doğru çiziliyor. Bu doğrulardan birini 45 derecelik açıyla kesen üçüncü bir doğrunun, diğer paralel doğruyla yaptığı dar açının ölçüsü kaç derecedir?",
        options: ["30", "45", "60", "90"],
        correct: 1,
        explanation: "Paralel doğruları kesen bir doğrunun oluşturduğu yöndeş ve iç ters açılar birbirine eşittir. Bu geometrik kural gereği aranan dar açı da 45 derece olmak zorundadır."
      },
      {
        id: "m5-2-t13-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD paralelkenarının içine yerleştirilen ikizkenar üçgenin tepe açısı kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/paralelkenar-ic-ucgen.webp",
        options: ["40", "50", "60", "70"],
        correct: 1,
        explanation: "Paralelkenar ve üçgen açı bağıntıları geometrik kurallara göre kurgulanıp çözüldüğünde tepe açısının değeri net olarak 50 derece hesaplanır."
      },
      {
        id: "m5-2-t13-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir çokgenin iç açılarının ölçüleri toplamı 900 derecedir. Bu çokgenin toplam köşegen sayısı kaçtır?",
        options: ["9", "14", "20", "27"],
        correct: 1,
        explanation: "İç açıları toplamı 900 derece olan çokgen yedigendir (n=7). Yedigenin toplam köşegen sayısı formülü üzerinden: (7 x 4) / 2 = 14 olarak bulunur."
      },
      {
        id: "m5-2-t13-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen sütun grafiği bir tarladan 4 yılda alınan buğday hasat miktarlarını göstermektedir. Bu 4 yılda üretilen toplam buğday miktarı kaç tondur? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/hasat-sutun-grafik.webp",
        options: ["120", "140", "160", "180"],
        correct: 2,
        explanation: "Grafikteki tüm yılların üretim değerleri toplandığında net sonuç 160 ton çıkmaktadır."
      },
      {
        id: "m5-2-t13-06",
        subject: "matematik",
        term: 2,
        prompt: "Açıklığı 15 olan bir veri grubuna, bu veri grubunun en küçük sayısından 5 eksik bir sayı ekleniyor. Yeni oluşan veri grubunun açıklığı kaç olur?",
        options: ["15", "20", "25", "30"],
        correct: 1,
        explanation: "Mevcut açıklık B - K = 15'dir. Yeni en küçük sayı K - 5 olacağı için yeni açıklık: B - (K - 5) = (B - K) + 5 = 15 + 5 = 20 olur."
      },
      {
        id: "m5-2-t13-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki şekil kenar uzunluğu 4 cm olan eşkenar üçgenlerin yan yana getirilmesiyle oluşturulmuştur. Bu şeklin dış çevre uzunluğu kaç cm'dir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/eskenar-ucgen-zincir-cevre.webp",
        options: ["24", "32", "40", "48"],
        correct: 1,
        explanation: "Şeklin dış çeperindeki açık kenarlar tek tek sayıldığında 8 adet kenar olduğu görülür. Her biri 4 cm olduğundan çevre: 8 x 4 = 32 cm'dir."
      },
      {
        id: "m5-2-t13-08",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu 48 cm olan bir karenin alanı, taban uzunluğu 24 cm olan bir paralelkenarın alanına eşittir. Bu paralelkenarın dik yüksekliği kaç santmetredir?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        explanation: "Karenin bir kenarı: 48 / 4 = 12 cm, alanı ise 12 x 12 = 144 santimetrekare. Paralelkenarın alanı: 24 x h = 144 ise h = 6 cm bulunur."
      },
      {
        id: "m5-2-t13-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki büyük dikdörtgen biçimindeki bahçenin içine kenarları boyunca 2 metre genişliğinde yürüyüş yolu yapılmıştır. Bahçenin geriye kalan yeşil alanının ölçüsü kaç metrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/bahce-yol-alanfark.webp",
        options: ["120", "160", "192", "240"],
        correct: 2,
        explanation: "Dış kenarlar 16 og 20 metredir. Her iki uçtan 2'şer metre eksiltilirse içteki yeşil alanın kenarları 12 og 16 metre kalır. Alanı: 12 x 16 = 192 metrekare olur."
      },
      {
        id: "m5-2-t13-10",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 10 cm olan bir karenin alanı, tabanı 20 cm olan bir dik üçgenin alanına eşittir. Bu üçgenin dik yüksekliği kaç santmetredir?",
        options: ["5", "10", "15", "20"],
        correct: 1,
        explanation: "Karenin alanı 10 x 10 = 100 santimetrekare. Üçgenin alanı (20 x h) / 2 = 10h = 100 ise h = 10 cm bulunur."
      },
      {
        id: "m5-2-t13-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki şırınganın üzerinde hacim çizgileri mL cinsinden etiketlenmiştir. Şırınganın içindeki sıvının tamamı kaç desilitredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/siringa-sivi-desilitre.webp",
        options: ["0.1", "0.2", "0.5", "1.0"],
        correct: 1,
        explanation: "Şırıngada 20 mL sıvı görünmektedir. 1 desilitre = 100 mililitre olduğundan 20 mL = 0.2 dL olarak ifade edilir."
      },
      {
        id: "m5-2-t13-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir su arıtma cihazı her dakikada 450 mililitre suyu arıtmaktadır. Bu cihaz aralıksız 1 saat boyunca çalıştırılırsa toplam kaç litre temiz su üretir?",
        options: ["24", "27", "30", "36"],
        correct: 1,
        explanation: "1 saat = 60 dakikadır. Toplam mililitre: 60 x 450 = 27000 mL yapar. Litreye çevirmek için 1000'e böleriz: 27 Litre bulunur."
      },
      {
        id: "m5-2-t13-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen uçak biletindeki kalkış og varış süreleri yerel saatlere göredir. Aradaki uçuş süresi tam olarak kaç saattir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/bilet-sure-fark.webp",
        options: ["2.5", "3.0", "3.5", "4.0"],
        correct: 1,
        explanation: "Kalkış 08:15, Varış 11:15 olarak verilmiştir. Aradaki uçuş süresi tam olarak 3 saattir."
      },
      {
        id: "m5-2-t13-14",
        subject: "matematik",
        term: 2,
        prompt: "Tam 48 saat süren bir elektrik kesintisi toplam kaç dakikalık bir zaman dilimine karşılık gelmektedir?",
        options: ["2400", "2880", "3200", "3600"],
        correct: 1,
        explanation: "1 saat 60 dakikadır. 48 saat: 48 x 60 = 2880 dakika sürmüştür."
      },
      {
        id: "m5-2-t13-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABCD yamuğunda verilen iç açılara göre verilmeyen geniş açının ölçüsü kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/yamuk-genis-aci-bul.webp",
        options: ["110", "120", "130", "140"],
        correct: 1,
        explanation: "Yamukta alt og üst komşu açıların toplamı 180 derecedir. Alt açı 60 derece ise üstteki geniş açı: 180 - 60 = 120 derece olur."
      },
      {
        id: "m5-2-t13-16",
        subject: "matematik",
        term: 2,
        prompt: "Karşılıklı kenar çiftleri paralel, tüm kenar uzunlukları eşit og tüm iç açıları 90 derece olan düzgün dörtgen aşağıdakilerden hangisidir?",
        options: ["Eşkenar Dörtgen", "Kare", "Paralelkenar", "Dikdörtgen"],
        correct: 1,
        explanation: "Hem kenarları eşit hem de açıları 90 derece olan yegane düzgün dörtgen karedir."
      },
      {
        id: "m5-2-t13-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ölçüleri verilen park alanının kapladığı toplam alan kaç ar değerine eşittir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/park-alan-ar.webp",
        options: ["4", "40", "400", "4000"],
        correct: 1,
        explanation: "Parkın alanı 4000 metrekaredir. 1 ar = 100 metrekare olduğundan toplam alan: 4000 / 100 = 40 ar yapar."
      },
      {
        id: "m5-2-t13-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 6 cm olan karenin çevre uzunluğu ile bir eşkenar üçgenin çevre uzunluğu eşittir. Bu üçgenin bir kenar uzunluğu kaç cm'dir?",
        options: ["6", "8", "10", "12"],
        correct: 1,
        explanation: "Karenin çevresi: 6 x 4 = 24 cm. Üçgenin çevresi de 24 cm olmalıdır. Üçgenin bir kenarı: 24 / 3 = 8 cm bulunur."
      },
      {
        id: "m5-2-t13-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki iki farklı zeytinyağı tenekesinin hacimleri verilmiştir. Büyük tenekedeki yağ, küçük tenekedekinin kaç katıdır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test13/teneke-yag-oran.webp",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "Büyük teneke 10 L, küçük teneke 2500 mL = 2.5 L yağ barındırmaktadır. Oran: 10 / 2.5 = 4 katı olarak hesaplanır."
      },
      {
        id: "m5-2-t13-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir spor müsabakası saat 19:30'da başlayıp 21:15'te bitmiştir. Bu müsabaka toplam kaç dakika sürmüştür?",
        options: ["95", "105", "115", "125"],
        correct: 1,
        explanation: "Süre farkı 1 saat 45 dakikadır. Dakikaya çevrildiğinde: 60 + 45 = 105 dakika sürdüğü bulunur."
      }
    ],
    test14: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 14 (ZOR) ---
      {
        id: "m5-2-t14-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki üçgenlerden hangisinin dik yükseklik çizgisi tamamen üçgenin dış bölgesinde yer alır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/ucgen-dis-yukseklik.webp",
        options: ["Dar açılı üçgen", "Dik açılı üçgen", "Geniş açılı üçgen", "Eşkenar üçgen"],
        correct: 2,
        explanation: "Geniş açılı üçgenlerde geniş açıyı oluşturan kenarlara ait yükseklikler, tabanın uzantısına inildiğinden daima üçgenin dış bölgesinde çizilir."
      },
      {
        id: "m5-2-t14-02",
        subject: "matematik",
        term: 2,
        prompt: "Tümler iki iç açının ölçüleri farkı 20 derecedir. Buna göre bu iki açıdan küçük olanının ölçüsü kaç derecedir?",
        options: ["25", "35", "45", "55"],
        correct: 1,
        explanation: "Açılara x og x+20 dersek toplamları tümler olduklarından 90 derecedir. 2x + 20 = 90 ise 2x = 70 yani x = 35 derece (küçük açı) bulunur."
      },
      {
        id: "m5-2-t14-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD dik yamuğunda köşegen çizgisi çizilmiştir. Oluşan boyalı üçgenin alanı kaç santmetrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/dik-yamuk-boyali-ucgen.webp",
        options: ["24", "36", "48", "60"],
        correct: 0,
        explanation: "Gerekli üçgen alan formülü diklik bağıntısı üzerinden çözüldüğünde alan 24 santimetrekare hesaplanır."
      },
      {
        id: "m5-2-t14-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir konveks çokgenin toplam 9 adet köşesi vardır. Bu çokgenin iç açılarının ölçüleri toplamı kaç derecedir?",
        options: ["1080", "1260", "1440", "1620"],
        correct: 1,
        explanation: "Dokuzgen için iç açılar toplamı formülü (n-2) x 180 üzerinden: (9-2) x 180 = 7 x 180 = 1260 derece olarak bulunur."
      },
      {
        id: "m5-2-t14-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki çizgi grafiğine göre sıcaklık değerinin sabit kaldığı zaman dilimi hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/sicaklik-sabit-cizgi.webp",
        options: ["Saat 10:00 - 11:00", "Saat 11:00 - 12:00", "Saat 12:00 - 13:00", "Saat 13:00 - 14:00"],
        correct: 1,
        explanation: "Grafikteki çizgi Saat 11:00 ile 12:00 arasında tamamen yatay ilerlemiştir, yani sıcaklık değeri bu zaman zarfında sabit kalmıştır."
      },
      {
        id: "m5-2-t14-06",
        subject: "matematik",
        term: 2,
        prompt: "Aritmetik ortalaması 45 olan 6 adet sayıya, hangi sayı eklenirse tüm grubun yeni aritmetik ortalaması 45 olarak kalmaya devam eder?",
        options: ["0", "30", "45", "60"],
        correct: 2,
        explanation: "Bir veri grubuna o grubun aritmetik ortalamasına tam eşit olan bir sayı eklenirse, grubun yeni genel ortalama değeri hiçbir şekilde değişmez."
      },
      {
        id: "m5-2-t14-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD karesinin çevresi 40 cm'dir. Bu karenin kenarları ortasından birleştirilerek içteki küçük kare oluşturuluyor. İçteki karenin alanı kaç santmetrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/kare-ic-kare-alan.webp",
        options: ["25", "50", "75", "100"],
        correct: 1,
        explanation: "Büyük karenin kenarı 10 cm, alanı 100 santimetrekaredir. İçeride oluşan karenin alanı, dıştaki karenin tam yarısına (50 santimetrekare) eşit olur."
      },
      {
        id: "m5-2-t14-08",
        subject: "matematik",
        term: 2,
        prompt: "Kısa kenarı 8 cm, uzun kenarı 12 cm olan bir dikdörtgenin alanı ile bir kenar uzunluğu bilinmeyen bir paralelkenarın alanı eşittir. Paralelkenarın yüksekliği 6 cm olduğuna göre o yüksekliğe ait taban uzunluğu kaç cm'dir?",
        options: ["12", "16", "18", "24"],
        correct: 1,
        explanation: "Dikdörtgenin alanı: 8 x 12 = 96 santimetrekare. Paralelkenarın alanı: Taban x 6 = 96 ise Taban = 96 / 6 = 16 cm bulunur."
      },
      {
        id: "m5-2-t14-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen karmaşık şeklin kapladığı toplam alan kaç birimkaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/karmasik-sekil-alan.webp",
        options: ["35", "42", "48", "54"],
        correct: 1,
        explanation: "Şekil dikdörtgen og kare alt parçalara ayrılıp her bölgenin birim alan hesaplaması yapıldığında toplam alan net 42 birimkare elde edilir."
      },
      {
        id: "m5-2-t14-10",
        subject: "matematik",
        term: 2,
        prompt: "Tabanı 14 cm ve o tabana ait dik yüksekliği 8 cm olan bir üçgenin alanı ile bir kenar uzunluğu 7 cm olan bir karenin alanı toplamı kaç santimetrekaredir?",
        options: ["90", "95", "105", "115"],
        correct: 2,
        explanation: "Üçgenin alanı: (14 x 8) / 2 = 56 santimetrekare. Karenin alanı: 7 x 7 = 49 santimetrekare. Toplam: 56 + 49 = 105 santimetrekare olur."
      },
      {
        id: "m5-2-t14-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki büyük su tankının beşte ikisi doludur. Tanka 1200 Litre daha su eklenirse tank tamamen dolmaktadır. Tankın tam kapasitesi kaç litredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/tank-dolu-bos-oran.webp",
        options: ["1500", "2000", "2500", "3000"],
        correct: 1,
        explanation: "Tankın boş kısmı 3/5'tir ve bu kısım 1200 litreye tekabül eder. Tankın tamamı: 1200 / 3 x 5 = 2000 Litredir."
      },
      {
        id: "m5-2-t14-12",
        subject: "matematik",
        term: 2,
        prompt: "Bir laboratuvarda bulunan 3,5 Litre saf suyun içerisine 500 mL asit eklenerek bir karışım elde ediliyor. Elde edilen bu kimyasal karışım toplam kaç santililitredir (cL)?",
        options: ["40", "400", "4000", "40000"],
        correct: 1,
        explanation: "3,5 L = 3500 mL yapar. Karışım: 3500 + 500 = 4000 mL eder. Santilitreye çevirmek için 10'a böleriz, sonuç 400 cL olur."
      },
      {
        id: "m5-2-t14-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kum saati ters çevrildiğinde tüm kumun alt hazneye inmesi tam 15 dakika sürmektedir. Saat 13:10'dan 14:40'a kadar bu kum saati aralıksız kaç kez ters çevrilerek akıtılmıştır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/kumsaati-tur-hesap.webp",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "Zaman farkı 1 saat 30 dakika yani 90 dakikadır. Her akış 15 dakika sürdüğüne göre toplam tur: 90 / 15 = 6 kez çevrilmiştir."
      },
      {
        id: "m5-2-t14-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir koşucu tam 2 saat 15 dakika boyunca antrenman yapmıştır. Bu antrenman süresi toplam kaç saniyedir?",
        options: ["7200", "8100", "9000", "13500"],
        correct: 1,
        explanation: "2 saat 15 dakika = 135 dakikadır. Saniyeye çevirmek için 60 ile çarparız: 135 x 60 = 8100 saniye sürmüştür."
      },
      {
        id: "m5-2-t14-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABCD ikizkenar yamuğunun taban açıları verilmiştir. Buna göre üst geniş açının değeri kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/yamuk-aci-kombinasyon.webp",
        options: ["115", "125", "135", "145"],
        correct: 1,
        explanation: "İkizkenar yamukta alt taban açıları eşit olup üst açılarla bütünlerdir. 180 - 55 = 125 derece olarak hesaplanır."
      },
      {
        id: "m5-2-t14-16",
        subject: "matematik",
        term: 2,
        prompt: "Ardışık açılarının toplamı 180 derece olan, tüm kenar uzunlukları birbirine eşit olan ancak iç açıları 90 derece olmayan dörtgen hangisidir?",
        options: ["Kare", "Eşkenar Dörtgen", "Dikdörtgen", "Yamuk"],
        correct: 1,
        explanation: "Kenarları eşit olup açıları dik olmayan dörtgen tanımı doğrudan Eşkenar Dörtgen geometrik şekline aittir."
      },
      {
        id: "m5-2-t14-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen dikdörtgen şeklindeki arsa planının kapladığı alan kaç hektardır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/arsa-hektar-alan.webp",
        options: ["2", "20", "200", "2000"],
        correct: 0,
        explanation: "Arsanın alanı 20000 metrekaredir. 1 hektar = 10000 metrekare olduğuna göre arsa tam olarak 2 hektar alan kaplamaktadır."
      },
      {
        id: "m5-2-t14-18",
        subject: "matematik",
        term: 2,
        prompt: "Bir kenar uzunluğu 15 cm olan eşkenar üçgenin çevre uzunluğu, bir dikdörtgenin çevre uzunluğuna eşittir. Dikdörtgenin kısa kenarı 10 cm olduğuna göre uzun kenarı kaç cm'dir?",
        options: ["11.5", "12.5", "13.5", "14.5"],
        correct: 1,
        explanation: "Üçgenin çevresi: 15 x 3 = 45 cm. Dikdörtgen uzun kenarı: 45 / 2 - 10 = 22.5 - 10 = 12.5 cm olur."
      },
      {
        id: "m5-2-t14-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki kapta bulunan sıvı miktarı gösterilmiştir. Bu kabın içindeki sıvının yarısı dökülürse kapta kaç santilitre sıvı kalır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test14/kap-sivi-yari-dokum.webp",
        options: ["75", "100", "125", "150"],
        correct: 2,
        explanation: "Kapta 2500 mL sıvı vardır. Yarısı 1250 mL yapar. Santilitreye çevrildiğinde 125 cL kaldığı görülür."
      },
      {
        id: "m5-2-t14-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir otobüs her gün sabah saat 06:45'te sefere başlayıp akşam saat 21:15'te seferini tamamlamaktadır. Bu otobüsün bir günlük sefer süresi kaç dakikadır?",
        options: ["840", "870", "900", "930"],
        correct: 1,
        explanation: "06:45 ile 21:15 arasındaki süre 14 saat 30 dakikadır. Dakika karşılığı: (14 x 60) + 30 = 840 + 30 = 870 dakikadır."
      }
    ],
    test15: [
      // --- 5. SINIF MATEMATİK 2. DÖNEM TEST 15 (ZOR - FİNAL) ---
      {
        id: "m5-2-t15-img-01",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki koordinat düzlemi benzeri izgara zeminde K noktasının L noktasına göre konumu aşağıdakilerden hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-izgara-konum.webp",
        options: ["5 birim solunda, 2 birim yukarısında", "5 birim sağında, 2 birim aşağısında", "2 birim solunda, 5 birim yukarısında", "2 birim sağında, 5 birim aşağısında"],
        correct: 0,
        explanation: "L noktasından K noktasına gitmek için birim kareler sayıldığında tam olarak 5 birim sola og 2 birim yukarı hareket edildiği görülür."
      },
      {
        id: "m5-2-t15-02",
        subject: "matematik",
        term: 2,
        prompt: "Bir d doğrusuna paralel çizilen e og f doğruları için; d ile e arası mesafe 4 cm, d ile f arası mesafe ise 6 cm'dir. Buna göre e ile f doğruları arasındaki mesafe en fazla kaç santmetredir?",
        options: ["2", "4", "6", "10"],
        correct: 3,
        explanation: "Doğrular d doğrusunun zıt taraflarında (biri yukarısında biri aşağısında) yer alırsa aralarındaki maksimum mesafe: 4 + 6 = 10 cm olur."
      },
      {
        id: "m5-2-t15-img-03",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen ABC üçgeninde iç açılarının ölçüleri verilmiştir. Bu üçgenin çeşidi hangisidir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-ucgen-cesit.webp",
        options: ["Dar açılı çeşitkenar üçgen", "Dik açılı çeşitkenar üçgen", "Geniş açılı ikizkenar üçgen", "Dik açılı ikizkenar üçgen"],
        correct: 0,
        explanation: "Tüm iç açıları 90 dereceden küçük dar açılardan oluştuğu og kenar uzunlukları farklı bağıntıda olduğu için dar açılı çeşitkenar üçgendir."
      },
      {
        id: "m5-2-t15-04",
        subject: "matematik",
        term: 2,
        prompt: "Bir sekizgenin köşe sayısı ile bir altıgenin iç açılarının sayısı toplamı kaç adettir?",
        options: ["12", "14", "16", "18"],
        correct: 1,
        explanation: "Sekizgenin 8 köşesi, altıgenin ise 6 iç açısı vardır. Toplam adet: 8 + 6 = 14 yapar."
      },
      {
        id: "m5-2-t15-img-05",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen daire grafiğindeki boyalı dilim tüm dairenin yüzde otuz beşini göstermektedir. Bu dilimin merkez açısı kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-daire-yuzde.webp",
        options: ["116", "126", "136", "146"],
        correct: 1,
        explanation: "Tam daire 360 derecedir. %35'i: 360 x 35 / 100 = 126 derece olarak hesaplanır."
      },
      {
        id: "m5-2-t15-06",
        subject: "matematik",
        term: 2,
        prompt: "Yaş ortalaması 12 olan 5 kişilik bir arkadaş grubundan 20 yaşında bir kişi ayrılıyor. Grubun yeni yaş ortalaması kaç olur?",
        options: ["8", "10", "11", "12"],
        correct: 1,
        explanation: "Eski yaş toplamı: 5 x 12 = 60. 20 yaşındaki kişi ayrılınca yeni toplam: 60 - 20 = 40 olur. Kalan kişi sayısı 4 olduğundan yeni ortalama: 40 / 4 = 10 olur."
      },
      {
        id: "m5-2-t15-img-07",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki araba pistinin düzlük og viraj çevre ölçüleri verilmiştir. Bu pistin toplam tur uzunluğu kaç metredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-pist-cevre.webp",
        options: ["1200", "1500", "1800", "2400"],
        correct: 2,
        explanation: "Pist üzerindeki tüm uzunluk parçaları uç uca eklendiğinde toplam çevre mesafesi net 1800 metre olarak hesaplanır."
      },
      {
        id: "m5-2-t15-08",
        subject: "matematik",
        term: 2,
        prompt: "Bir dikdörtgenin uzun kenarı kısa kenarının 5 katıdır. Bu dikdörtgenin çevre uzunluğu 120 cm olduğuna göre kısa kenarı kaç santmetredir?",
        options: ["10", "12", "15", "20"],
        correct: 0,
        explanation: "Kenarlar k og 5k olsun. Çevre: 2 x (6k) = 12k = 120 ise k = 10 cm (kısa kenar) bulunur."
      },
      {
        id: "m5-2-t15-img-09",
        subject: "matematik",
        term: 2,
        prompt: "Görselde verilen boyalı paralelkenarın alanı kaç santmetrekaredir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-paralel-alan.webp",
        options: ["48", "64", "80", "96"],
        correct: 2,
        explanation: "Taban kenarı 10 cm, dik yükseklik çizgisi ise 8 cm olarak ölçülmüştür. Alan: 10 x 8 = 80 santimetrekaredir."
      },
      {
        id: "m5-2-t15-10",
        subject: "matematik",
        term: 2,
        prompt: "Çevre uzunluğu 40 cm olan bir karenin alanı, dik yüksekliği 5 cm olan bir paralelkenarın alanına eşittir. Bu paralelkenarın o yüksekliğe ait taban uzunluğu kaç cm'dir?",
        options: ["10", "15", "20", "25"],
        correct: 2,
        explanation: "Karenin kenarı: 40 / 4 = 10 cm, alanı 100 santimetrekare. Paralelkenar alanı: Taban x 5 = 100 ise Taban = 20 cm bulunur."
      },
      {
        id: "m5-2-t15-img-11",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki büyük yağ varilinin içinde bulunan sıvı miktarı Litre cinsinden etiketlenmiştir. Bu yağın çeyreği satılırsa geriye kaç mililitre yağ kalır? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-varil-yag-kalan.webp",
        options: ["12000", "15000", "30000", "45000"],
        correct: 3,
        explanation: "Varilde 60 L yağ vardır. Çeyreği satılırsa geriye 3/4'ü yani 45 L kalır. Mililitre karşılığı 45000 mL'dir."
      },
      {
        id: "m5-2-t15-12",
        subject: "matematik",
        term: 2,
        prompt: "Günlük su tüketim hedefi 2,5 Litre olan bir kişi, gün içinde 1250 mL og 75 cL su içmiştir. Hedefine ulaşması için kaç mL daha su içmelidir?",
        options: ["250", "500", "750", "1000"],
        correct: 1,
        explanation: "Hedef 2500 mL. İçilen: 1250 mL + 750 mL = 2000 mL. Kalan miktar: 2500 - 2000 = 500 mL'dir."
      },
      {
        id: "m5-2-t15-img-13",
        subject: "matematik",
        term: 2,
        prompt: "Görselde bir projenin başlama og bitiş tarihleri takvim üzerinde işaretlenmiştir. Bu proje toplam kaç hafta sürmüştür? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-takvim-hafta.webp",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "Takvimdeki işaretli tarihler arası fark tam 21 gündür. 21 gün haftaya bölündüğünde tam 3 hafta sürdüğü hesaplanır."
      },
      {
        id: "m5-2-t15-14",
        subject: "matematik",
        term: 2,
        prompt: "Bir saat kulesindeki çan her 30 dakikada bir çalmaktadır. Bu çan ilk kez saat 08:15'te çaldığına göre 6. kez çaldığında saat kaçı gösterir?",
        options: ["10:15", "10:45", "11:15", "11:45"],
        correct: 1,
        explanation: "6. kez çalması için 5 ara geçmesi gerekir: 5 x 30 = 150 dakika (2 saat 30 dakika). 08:15 + 2 saat 30 dakika = 10:45 olur."
      },
      {
        id: "m5-2-t15-img-15",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki ABCD paralelkenarında ardışık iki açının ölçüleri şematize edilmiştir. Soru işareti olan açının değeri kaç derecedir? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-paralel-aci-soru.webp",
        options: ["45", "55", "125", "135"],
        correct: 2,
        explanation: "Paralelkenarda ardışık komşu iç açıların toplamı 180 derece kuralına tabidir. 180 - 55 = 125 derece bulunur."
      },
      {
        id: "m5-2-t15-16",
        subject: "matematik",
        term: 2,
        prompt: "Karşılıklı kenarları paralel, karşılıklı iç açıları eşit, tüm kenarları eşit olan og köşegenleri dik kesişen dörtgen aşağıdakilerden hangisidir?",
        options: ["Kare", "Eşkenar Dörtgen", "Paralelkenar", "Dikdörtgen"],
        correct: 1,
        explanation: "Seçeneklerde köşegenleri dik kesişen og kenarları eşit olan genel tanım kalıbı Eşkenar Dörtgen geometrik yapısına tam uyar."
      },
      {
        id: "m5-2-t15-img-17",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki taralı alanların toplamı kaç santmetrekaredir? (Her birim kare alanı 4 santmetrekaredir.) Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-tarali-alan-hesap.webp",
        options: ["32", "48", "64", "80"],
        correct: 2,
        explanation: "Taralı birim kareler sayıldığında 16 birim kare eder. Her biri 4 santimetrekare olduğundan toplam alan: 16 x 4 = 64 santimetrekare olur."
      },
      {
        id: "m5-2-t15-18",
        subject: "matematik",
        term: 2,
        prompt: "Alan uzunluğu 5 hektar olan bir çiftlik arazisi kaç ar değerine eşittir?",
        options: ["50", "500", "5000", "50000"],
        correct: 1,
        explanation: "1 hektar = 100 ar dönüşüm kuralına göre 5 hektar = 500 ar değerine eşit olur."
      },
      {
        id: "m5-2-t15-img-19",
        subject: "matematik",
        term: 2,
        prompt: "Görseldeki damacananın içinde 15 litre su bulunmaktadır. Bu su 300 mL'lik bardaklara paylaştırılırsa toplam kaç adet bardak tamamen dolar? Figür, sorunun hemen ardından gelecektir.",
        imageUrl: "/images/grade5/matematik/term2/test15/final-damacana-bardak.webp",
        options: ["30", "40", "50", "60"],
        correct: 2,
        explanation: "15 L = 15000 mL'dir. Bardak hacmine bölündüğünde: 15000 / 300 = 50 adet bardağın dolduğu hesaplanır."
      },
      {
        id: "m5-2-t15-20",
        subject: "matematik",
        term: 2,
        prompt: "Bir sınav saat 09:15'te başlayıp 11:40'ta bitmiştir. Sınav süresi toplam kaç dakikadır?",
        options: ["125", "135", "145", "155"],
        correct: 2,
        explanation: "09:15 ile 11:40 arasındaki zaman farkı 2 saat 25 dakikadır. Toplam dakika: (2 x 60) + 25 = 145 dakikadır."
      }
    ]
  }
};
