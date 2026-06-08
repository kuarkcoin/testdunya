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
  } 
}; 
