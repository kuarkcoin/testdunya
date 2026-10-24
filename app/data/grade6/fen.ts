import { SubjectData } from "./types";

// 6. sınıf başlangıç paketi: Güneş Sistemi ve Tutulmalar; Kuvvetin Etkisinde Hareket.
// FB.6.1.1–FB.6.1.4 ve FB.6.2.1–FB.6.2.3; tüm dönemi veya yılı kapsamaz.
// Kaynaklar: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
// Kesin uydu sayıları, sürat-hız hesabı/grafikleri ve birim dönüşümleri kapsam dışıdır.
export const fenData: SubjectData = {
  term1: {
    test1: [
      {
        "id": "f6-1-t1-01",
        "subject": "fen",
        "term": 1,
        "prompt": "Kartlar, gezegenlerin Güneş’ten uzaklık sırasını göstermek için yukarıdan aşağıya dizilmiştir. Yalnız iki kartın yeri yanlıştır.\n\nSıralamayı düzeltmek için yer değiştirmesi gereken kartlar ve bu iki gezegenin ortak özelliği hangi seçenekte birlikte doğru verilmiştir?",
        "options": [
          "2 ve 3; ikisinin de doğal uydusu yoktur.",
          "3 ve 4; ikisi de doğal uydusu olan karasal gezegendir.",
          "4 ve 5; ikisi de karasal gezegendir.",
          "6 ve 7; ikisi de doğal uydusu olmayan gezegendir."
        ],
        "correct": 1,
        "explanation": "Doğru sırada Dünya üçüncü, Mars dördüncüdür; 3 ve 4 numaralı kartlar yer değiştirmelidir. Dünya da Mars da karasal gezegendir ve doğal uydusu vardır. Diğer kart değişimleri doğru sıralamayı oluşturmaz.",
        "imageWidth": 360,
        "imageHeight": 470,
        "imageUrl": "/grade6/fen/test-1/soru-01.svg",
        "imageAlt": "Yukarıdan aşağıya sıralı kartlar: 1 Merkür, 2 Venüs, 3 Mars, 4 Dünya, 5 Jüpiter, 6 Satürn, 7 Uranüs, 8 Neptün. Güneş’e uzaklık aşağı doğru artıyor."
      },
      {
        "id": "f6-1-t1-02",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir öğrenci gezegenleri hem yapısına hem doğal uydusunun bulunmasına göre tabloya yerleştiriyor. K, L ve M bölümleri görselde gösterilmiştir.\n\nSırasıyla K, L ve M bölümlerine yazılabilecek doğru örnekler hangileridir?",
        "options": [
          "Dünya – Venüs – Jüpiter",
          "Merkür – Jüpiter – Mars",
          "Venüs – Mars – Satürn",
          "Mars – Dünya – Merkür"
        ],
        "correct": 2,
        "explanation": "K, doğal uydusu olmayan karasal gezegenleri içerir: Merkür veya Venüs. L, doğal uydusu olan karasal gezegenleri içerir: Dünya veya Mars. M, karasal olmayan ve doğal uydusu bulunan gezegenleri içerir; Satürn buna örnektir.",
        "imageWidth": 360,
        "imageHeight": 360,
        "imageUrl": "/grade6/fen/test-1/soru-02.svg",
        "imageAlt": "Sınıflama tablosu: sütunlar doğal uydu yok ve doğal uydu var. Karasal satırında K ve L; karasal değil satırında boş ve M."
      },
      {
        "id": "f6-1-t1-03",
        "subject": "fen",
        "term": 1,
        "prompt": "Dört gezegen için hazırlanmış çap karşılaştırmasında sayılar, yaklaşık çapların Dünya’nın çapına oranıdır. Grafik yalnız Merkür, Dünya, Satürn ve Jüpiter’i içeriyor.\n\nK ile gösterilen gezegenin adı ve Güneş’e uzaklık sırası hangi seçenekte doğrudur?",
        "options": [
          "Satürn – 6.",
          "Dünya – 3.",
          "Merkür – 1.",
          "Jüpiter – 5."
        ],
        "correct": 3,
        "explanation": "Dünya’ya göre çapı yaklaşık 11 olan gezegen Jüpiter’dir. Satürn yaklaşık 9, Dünya 1, Merkür yaklaşık 0,4 değerine sahiptir. Jüpiter Güneş’e uzaklık sıralamasında beşincidir.",
        "imageWidth": 360,
        "imageHeight": 360,
        "imageUrl": "/grade6/fen/test-1/soru-03.svg",
        "imageAlt": "Yatay çap karşılaştırması: K 11, L 9, M 1, N 0,4. Birim Dünya çapıdır; çubuklar aynı ölçeği kullanır."
      },
      {
        "id": "f6-1-t1-04",
        "subject": "fen",
        "term": 1,
        "prompt": "Şema, Güneş’e uzaklık sırasındaki gezegen bölgelerini gösteriyor. P ve R, ana asteroit kuşağının iki yanında kuşağa komşu olan gezegenlerdir.\n\nP ve R ile ilgili hangi yorum doğrudur?",
        "options": [
          "P karasaldır; R, Güneş sisteminin en büyük gezegenidir.",
          "P’nin doğal uydusu yoktur; R karasaldır.",
          "P Satürn’dür; R Uranüs’tür.",
          "P, R’den Güneş’e daha uzaktır."
        ],
        "correct": 0,
        "explanation": "Ana asteroit kuşağı Mars ile Jüpiter’in yörüngeleri arasındadır. Güneş’e yakın taraftaki P Mars, uzaktaki R Jüpiter’dir. Mars karasal, Jüpiter ise sistemin en büyük gezegenidir.",
        "imageWidth": 360,
        "imageHeight": 360,
        "imageUrl": "/grade6/fen/test-1/soru-04.svg",
        "imageAlt": "Güneş’e uzaklık aşağı doğru artıyor. P gezegeninin bölgesi, ana asteroit kuşağı ve R gezegeninin bölgesi sıralanmış. Şema ölçekli değildir."
      },
      {
        "id": "f6-1-t1-05",
        "subject": "fen",
        "term": 1,
        "prompt": "K ve L modellerinde gök cisimlerinin merkezleri aynı doğrultudadır. Gölge koşullarının tutulmaya uygun olduğu kabul ediliyor.\n\nK’dan L’ye geçilirken ortada bulunan gök cismi ve gölgenin düştüğü gök cismi nasıl değişir?",
        "options": [
          "Ortadaki Dünya’dan Ay’a; gölge alan Ay’dan Dünya’ya değişir.",
          "Ortadaki Ay’dan Dünya’ya; gölge alan Dünya’dan Ay’a değişir.",
          "Ortadaki Ay’dan Güneş’e; gölge alan Dünya’dan Ay’a değişir.",
          "Ortadaki değişmez; gölge alan yalnız Güneş olur."
        ],
        "correct": 1,
        "explanation": "K’da Ay aradadır ve Ay’ın gölgesi Dünya’ya düşerek Güneş tutulmasını oluşturabilir. L’de Dünya aradadır ve Dünya’nın gölgesi Ay’a düşerek Ay tutulmasını oluşturabilir. Dolayısıyla hem aradaki cisim hem de gölge alan cisim değişir.",
        "imageWidth": 360,
        "imageHeight": 380,
        "imageUrl": "/grade6/fen/test-1/soru-05.svg",
        "imageAlt": "K sırası Güneş, Ay, Dünya; L sırası Güneş, Dünya, Ay. Her sıra yatay ve aynı doğrultuda. Boyut ve uzaklıklar ölçekli değildir."
      },
      {
        "id": "f6-1-t1-06",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir Güneş tutulmasında Dünya’nın gündüz tarafındaki iki gözlem noktasından P, Ay’ın tam gölgesinin içinde; R ise Ay’ın tam ve yarı gölgelerinin dışındadır. Hava açıktır.\n\nAynı anda bu iki noktada ne gözlenir?",
        "options": [
          "Her iki noktada tam Güneş tutulması.",
          "P’de Ay tutulması, R’de Güneş tutulması.",
          "P’de tam Güneş tutulması; R’de Güneş tutulması görülmez.",
          "P’de tutulma görülmez; R’de tam Güneş tutulması."
        ],
        "correct": 2,
        "explanation": "P’den bakıldığında Ay, Güneş’in parlak yüzünün tamamını örter. R, Ay’ın gölge bölgeleri dışında kaldığı için orada Güneş tutulması görülmez. Bu nedenle Güneş tutulması Dünya’nın her yerinden aynı anda izlenmez. Güneş’e uygun koruyucu filtre olmadan bakılmaz.",
        "imageWidth": 360,
        "imageHeight": 400,
        "imageUrl": "/grade6/fen/test-1/soru-06.svg",
        "imageAlt": "Dünya’nın gündüz yüzünün şematik görünümü. Ortada tam gölge ve çevresinde yarı gölge bölgesi; P tam gölgenin içinde, R her iki bölgenin dışında. Ölçekli değildir."
      },
      {
        "id": "f6-1-t1-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Şema, bir dolunay sırasında Ay’ın Dünya’nın tam ve yarı gölge bölgelerinin dışından geçtiğini gösteriyor.\n\nBu durum hangi açıklamayı destekler?",
        "options": [
          "Dolunayda Ay kendi ışığını üretir.",
          "Her dolunayda Dünya’nın her yerinde Ay tutulması olur.",
          "Ay tutulması için Ay’ın Güneş ile Dünya arasında olması yeterlidir.",
          "Dolunay tek başına yeterli değildir; Ay, Dünya’nın gölgesine de girmelidir."
        ],
        "correct": 3,
        "explanation": "Ay tutulması dolunay evresinde gerçekleşebilir; ancak her dolunayda tutulma olmaz. Ay’ın yörünge düzlemi Dünya’nın Güneş çevresindeki yörünge düzlemine eğik olduğundan Ay çoğu dolunayda gölge bölgesinin üstünden veya altından geçer.",
        "imageWidth": 360,
        "imageHeight": 370,
        "imageUrl": "/grade6/fen/test-1/soru-07.svg",
        "imageAlt": "Güneş solda, Dünya ortada; sağda Dünya’nın gölge bölgesi kesik sınırlarla gösterilmiş. Ay, sağ tarafta fakat gölge bölgesinin üstünde. Şema ölçekli değildir."
      },
      {
        "id": "f6-1-t1-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir gezegen için “Karasal yapıdadır, doğal uydusu vardır ve Güneş’e Dünya’dan daha uzaktır.” bilgileri veriliyor.\n\nBu üç bilgiyi birlikte sağlayan gezegen hangisidir?",
        "options": [
          "Venüs",
          "Mars",
          "Jüpiter",
          "Merkür"
        ],
        "correct": 1,
        "explanation": "Doğal uydusu olan karasal gezegenler Dünya ve Mars’tır. Güneş’e Dünya’dan daha uzak olma koşulu Mars’ı belirler. Jüpiter’in uyduları vardır ama karasal gezegen değildir."
      },
      {
        "id": "f6-1-t1-09",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir öğrenci, sekiz gezegeni Güneş’e uzaklık sırasına göre aynı aralıklarla yerleştiriyor. Bütün gezegenler için eşit büyüklükte toplar kullanıyor ve modelin yalnız sıralamayı gösterdiğini belirtiyor.\n\nBu model hakkında hangi değerlendirme doğrudur?",
        "options": [
          "Gezegenlerin gerçek çapları eşit olduğu için boyutlar da doğrudur.",
          "Eşit aralıklar gerçek uzaklıkları doğru gösterir.",
          "Sıralama doğru olabilir; gerçek boyut ve uzaklık oranları bu modelden çıkarılamaz.",
          "Toplar eşit olduğundan gezegenlerin sırası mutlaka yanlıştır."
        ],
        "correct": 2,
        "explanation": "Bir model belirli bir özelliği göstermek için sadeleştirilebilir. Gezegenlerin doğru sırası eşit toplarla gösterilebilir; ancak gerçek gezegenlerin çapları ve aralarındaki uzaklıklar eşit değildir. Bu model bu oranları temsil etmez."
      },
      {
        "id": "f6-1-t1-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir öğrenci, bir ışık kaynağı ve iki opak küreyle tutulma modeli kuruyor. Işık kaynağı Güneş’i, büyük küre Dünya’yı, küçük küre Ay’ı temsil ediyor. Başlangıçta kaynak – büyük küre – küçük küre sırası var ve küçük küre büyük kürenin gölgesinde kalıyor.\n\nÖğrenci Güneş tutulmasını modellemek için hangi değişikliği yapmalıdır?",
        "options": [
          "Küçük küreyi kaynak ile büyük küre arasına alıp gölgesini büyük küre üzerine düşürmelidir.",
          "Büyük küreyi arada tutup ışık kaynağını kapatmalıdır.",
          "Küçük küreyi büyük kürenin arkasında tutup kendi ışığını üretmesini sağlamalıdır.",
          "Cisimlerin sırasını değiştirmeden yalnızca modele Güneş tutulması adını vermelidir."
        ],
        "correct": 0,
        "explanation": "Başlangıç düzeni Ay tutulmasını temsil eder: Dünya aradadır ve Ay onun gölgesindedir. Güneş tutulması modelinde ise Ay, Güneş ile Dünya arasına geçmeli ve gölgesi Dünya modeline düşmelidir. Kaynağı kapatmak tutulma değildir; Ay da kendi ışığını üretmez."
      }
    ],
    test2: [
      {
        id: "f6-1-t2-01",
        subject: "fen",
        term: 1,
        prompt: "Güneş tutulması sırasında tutulmayı oluşturan üç gök cismi, Güneş'ten başlanarak hangi sırada bulunur?",
        options: ["Güneş – Ay – Dünya", "Güneş – Dünya – Ay", "Ay – Güneş – Dünya", "Dünya – Güneş – Ay"],
        correct: 0,
        explanation: "Güneş tutulmasında Ay, Güneş ile Dünya arasına girer. Ay'ın gölgesi Dünya'nın bir bölümüne düştüğünde bu bölgeden Güneş tutulması gözlenebilir.",
      },
      {
        id: "f6-1-t2-02",
        subject: "fen",
        term: 1,
        prompt: "Ay tutulması sırasında Ay'ın kararmasına yol açan temel olay hangisidir?",
        options: ["Ay'ın kendi ışığını kapatması", "Güneş'in ışık vermeyi bırakması", "Ay'ın Dünya ile Güneş arasına girmesi", "Dünya'nın gölgesinin Ay üzerine düşmesi"],
        correct: 3,
        explanation: "Ay tutulmasında Dünya, Güneş ile Ay arasında bulunur. Dünya, Güneş ışığının Ay'a ulaşmasını engeller ve gölgesi Ay üzerine düşer. Ay zaten kendi ışığını üretmez.",
      },
      {
        id: "f6-1-t2-03",
        subject: "fen",
        term: 1,
        prompt: "Ay, her yeni ay evresinde Güneş ile Dünya arasında bulunmasına rağmen neden her yeni ayda Güneş tutulması yaşanmaz?",
        options: ["Güneş yeni ay evresinde ışık vermez.", "Ay'ın yörünge düzlemi eğik olduğundan üç gök cismi her seferinde tutulmayı oluşturacak biçimde hizalanmaz.", "Ay'ın büyüklüğü her ay değişir.", "Dünya yeni ay evresinde dolanmayı durdurur."],
        correct: 1,
        explanation: "Ay'ın Dünya çevresindeki yörünge düzlemi, Dünya'nın Güneş çevresindeki yörünge düzlemine göre eğiktir. Bu nedenle çoğu yeni ayda Ay'ın gölgesi Dünya'nın üzerinden veya altından geçer; tutulma gerçekleşmez.",
      },
      {
        id: "f6-1-t2-04",
        subject: "fen",
        term: 1,
        prompt: "Bir etkinlikte lamba Güneş'i, büyük top Dünya'yı, küçük top Ay'ı temsil ediyor. Ay tutulmasını modellemek için hangi düzenek kurulmalıdır?",
        options: ["Küçük top, lamba ile büyük top arasına yerleştirilmelidir.", "Lamba iki topun arasına yerleştirilmelidir.", "Büyük top iki cismin arasında olmalı ve gölgesi küçük topun üzerine düşmelidir.", "İki top lambanın aynı tarafında, birbirlerinin gölgesinden uzakta tutulmalıdır."],
        correct: 2,
        explanation: "Ay tutulmasının dizilişi Güneş – Dünya – Ay'dır. Bu nedenle büyük top, lamba ile küçük top arasında bulunmalı; küçük top büyük topun oluşturduğu gölgede kalmalıdır.",
      },
      {
        id: "f6-1-t2-05",
        subject: "fen",
        term: 1,
        prompt: "Güneş ve Ay tutulmalarını karşılaştıran hangi ifade doğrudur?",
        options: ["Her iki tutulmada da Güneş, Dünya ile Ay'ın arasındadır.", "Güneş tutulmasında Ay'ın, Ay tutulmasında Dünya'nın gölgesi etkilidir.", "Her iki tutulma da Ay'ın yeni ay evresinde gerçekleşir.", "Her iki tutulmada da Ay ışık üretmeye başlar."],
        correct: 1,
        explanation: "Güneş tutulmasında Ay'ın gölgesi Dünya'ya, Ay tutulmasında Dünya'nın gölgesi Ay'a düşer. Güneş tutulması yeni ay, Ay tutulması ise dolunay evresinde uygun hizalanma olduğunda gerçekleşir.",
      },
      {
        id: "f6-1-t2-06",
        subject: "fen",
        term: 1,
        prompt: "Bir arabaya yatay doğrultuda doğuya doğru 5 N ve yine doğuya doğru 3 N kuvvet uygulanıyor. Bu iki kuvvetin bileşkesi hangisidir?",
        options: ["Batıya doğru 2 N", "Doğuya doğru 2 N", "Doğuya doğru 8 N", "Batıya doğru 8 N"],
        correct: 2,
        explanation: "Aynı doğrultu ve aynı yöndeki kuvvetlerin büyüklükleri toplanır: 5 + 3 = 8 N. İki kuvvet de doğuya yöneldiğinden bileşke de doğuya doğrudur.",
      },
      {
        id: "f6-1-t2-07",
        subject: "fen",
        term: 1,
        prompt: "Bir kutuya yatay doğrultuda doğuya doğru 12 N ve batıya doğru 7 N kuvvet uygulanıyor. Bu iki kuvvetin bileşkesi nedir?",
        options: ["Doğuya doğru 5 N", "Batıya doğru 5 N", "Doğuya doğru 19 N", "Batıya doğru 19 N"],
        correct: 0,
        explanation: "Zıt yöndeki kuvvetlerin büyüklükleri çıkarılır: 12 − 7 = 5 N. Büyük kuvvet doğuya doğru olduğundan bileşkenin yönü doğudur.",
      },
      {
        id: "f6-1-t2-08",
        subject: "fen",
        term: 1,
        prompt: "Bir cisme aynı doğrultuda kuzeye doğru 6 N ve güneye doğru 6 N kuvvet uygulanıyor. Bu iki kuvvetin bileşkesinin büyüklüğü kaç N'dur?",
        options: ["3 N", "6 N", "12 N", "0 N"],
        correct: 3,
        explanation: "Eşit büyüklükte ve zıt yönlü kuvvetler birbirini dengeler. Bileşkenin büyüklüğü 6 − 6 = 0 N olur. Sıfır büyüklüğündeki bileşkeye bir yön verilmez.",
      },
      {
        id: "f6-1-t2-09",
        subject: "fen",
        term: 1,
        prompt: "Doğuya doğru uygulanan bir kuvvet ile batıya doğru uygulanan bir kuvvetin yön ve doğrultuları nasıl karşılaştırılır?",
        options: ["Yönleri ve doğrultuları aynıdır.", "Doğrultuları aynı, yönleri zıttır.", "Yönleri aynı, doğrultuları farklıdır.", "Doğrultuları birbirine diktir."],
        correct: 1,
        explanation: "Doğu ve batı, doğu-batı doğrultusu üzerindeki iki karşıt yöndür. Doğrultu, kuvvetin üzerinde bulunduğu çizgiyi; yön ise bu çizgi üzerinde hangi tarafa etkidiğini belirtir.",
      },
      {
        id: "f6-1-t2-10",
        subject: "fen",
        term: 1,
        prompt: "Bir cisme etki eden kuvvetlerin bileşkesi doğuya doğru 9 N'dur. Bileşkeyi sıfırlamak için hangi ek kuvvet uygulanmalıdır?",
        options: ["Doğuya doğru 9 N", "Batıya doğru 3 N", "Batıya doğru 9 N", "Kuzeye doğru 9 N"],
        correct: 2,
        explanation: "Dengeleyici kuvvet, bileşkeyle aynı büyüklükte ve zıt yönde olmalıdır. Batıya doğru 9 N eklenirse doğuya doğru 9 N ile birbirini dengeler ve toplam bileşke sıfır olur.",
      },
    ],
    test3: [
      {
        id: "f6-1-t3-01",
        subject: "fen",
        term: 1,
        prompt: "Başlangıçta durmakta olan bir oyuncak arabaya etki eden kuvvetlerin bileşkesi sıfırdır. Bu durum devam ettiği sürece araba nasıl davranır?",
        options: ["Durmaya devam eder.", "Giderek hızlanır.", "Kendiliğinden yön değiştirir.", "Önce hızlanır, sonra mutlaka durur."],
        correct: 0,
        explanation: "Bileşke kuvvet sıfır olduğunda kuvvetler dengelenmiştir ve cismin hareket durumu değişmez. Araba başlangıçta durduğu için durmaya devam eder.",
      },
      {
        id: "f6-1-t3-02",
        subject: "fen",
        term: 1,
        prompt: "Düz bir yolda hareket eden bir araca etki eden bütün kuvvetlerin bileşkesi sıfır oluyor ve sıfır kalıyor. Araç için hangi sonuç doğrudur?",
        options: ["Anında durur.", "Giderek hızlanır.", "Aynı yönde, aynı süratle hareketini sürdürür.", "Sürekli yön değiştirir."],
        correct: 2,
        explanation: "Dengelenmiş kuvvetler cismin hareket durumunu değiştirmez. Hareket eden araç, bileşke sıfır kaldığı sürece aynı sürat ve yönde ilerler; sıfır bileşke her zaman durmak anlamına gelmez.",
      },
      {
        id: "f6-1-t3-03",
        subject: "fen",
        term: 1,
        prompt: "Düz yolda ilerleyen bir bisikletin sürati fren yapıldığı sırada azalıyor. Bu süreçte bisiklete etki eden kuvvetler için hangisi söylenebilir?",
        options: ["Bileşke kuvvet kesinlikle sıfırdır.", "Kuvvetler dengelenmiştir.", "Bisiklete hiçbir kuvvet etki etmez.", "Kuvvetler dengelenmemiştir."],
        correct: 3,
        explanation: "Bisikletin süratinin azalması, hareket durumunun değiştiğini gösterir. Bu değişim sırasında bileşke kuvvet sıfır değildir; dolayısıyla kuvvetler dengelenmemiştir.",
      },
      {
        id: "f6-1-t3-04",
        subject: "fen",
        term: 1,
        prompt: "Bir cisme aynı yatay doğrultuda doğuya doğru 4 N, doğuya doğru 6 N ve batıya doğru 3 N kuvvet uygulanıyor. Bu üç kuvvetin bileşkesi hangisidir?",
        options: ["Batıya doğru 7 N", "Doğuya doğru 7 N", "Doğuya doğru 13 N", "Batıya doğru 13 N"],
        correct: 1,
        explanation: "Önce aynı yönlü kuvvetler toplanır: doğuya doğru 4 + 6 = 10 N. Batıya doğru 3 N çıkarılınca 10 − 3 = 7 N kalır. Bileşke doğuya doğrudur.",
      },
      {
        id: "f6-1-t3-05",
        subject: "fen",
        term: 1,
        prompt: "Öğrenciler, bileşke kuvvetin başlangıçta duran bir arabanın hareketine etkisini karşılaştıracak. Daha güvenilir bir deney için hangi planı seçmelidirler?",
        options: ["Her denemede hem arabayı hem zemini hem de kuvveti değiştirmek", "Aynı araba ve aynı zeminde, diğer koşulları aynı tutup bileşke kuvveti değiştirmek", "Bir denemede gözlem yapıp diğer denemede yalnızca tahmin yazmak", "Farklı arabaları farklı zeminlerde kullanıp hepsine farklı kuvvet uygulamak"],
        correct: 1,
        explanation: "Bileşke kuvvetin etkisini ayırt edebilmek için araba, zemin ve başlangıç durumu gibi diğer koşullar aynı tutulmalıdır. Birden fazla koşulu birlikte değiştirmek, gözlenen farkın nedenini belirsizleştirir.",
      },
      {
        id: "f6-1-t3-06",
        subject: "fen",
        term: 1,
        prompt: "Fen bilimlerinde kullanılan sürat ve hız kavramları arasındaki farkı hangi ifade doğru açıklar?",
        options: ["Hız yön bilgisi içerir; sürat yön bilgisi içermez.", "Sürat yön bilgisi içerir; hız yön bilgisi içermez.", "Sürat ve hızın ikisi de yalnızca kuvvetin büyüklüğüdür.", "Hız yalnızca duran cisimler için kullanılır."],
        correct: 0,
        explanation: "Sürat, alınan yolla; hız ise yer değiştirmeyle ilişkilidir. Yer değiştirme yön içerdiği için hız belirtilirken yön de önemlidir. Sürat belirtilirken yön kullanılmaz.",
      },
      {
        id: "f6-1-t3-07",
        subject: "fen",
        term: 1,
        prompt: "Selin evinden çıkıp parka gidiyor ve aynı yolu izleyerek evine dönüyor. Yolculuğun tamamı için hangi ifade doğrudur?",
        options: ["Aldığı yol sıfır, yer değiştirmesi sıfırdan farklıdır.", "Aldığı yol ve yer değiştirmesi mutlaka eşittir.", "Hem aldığı yol hem de yer değiştirmesi sıfırdır.", "Aldığı yol sıfırdan büyük, yer değiştirmesi sıfırdır."],
        correct: 3,
        explanation: "Alınan yol, gidiş ve dönüşte izlenen yolun tamamını içerir; bu yüzden sıfırdan büyüktür. Başlangıç ve bitiş noktası aynı olduğundan yer değiştirme sıfırdır.",
      },
      {
        id: "f6-1-t3-08",
        subject: "fen",
        term: 1,
        prompt: "İki bisikletli düz bir yolda aynı süratle ilerliyor; biri doğuya, diğeri batıya gidiyor. Fen bilimlerindeki anlamlarıyla süratleri ve hızları nasıl karşılaştırılır?",
        options: ["Süratleri de hızları da aynıdır.", "Süratleri farklı, hızları aynıdır.", "Süratleri aynı, hızları yönleri nedeniyle farklıdır.", "İkisinin de hızı sıfırdır."],
        correct: 2,
        explanation: "Sürat yön bilgisi içermediği için iki bisikletlinin sürati aynı olabilir. Hız ise yön de içerir; doğu ve batı zıt yönler olduğundan hızları aynı değildir.",
      },
      {
        id: "f6-1-t3-09",
        subject: "fen",
        term: 1,
        prompt: "Bir koşucu dairesel pistte süratini hiç değiştirmeden koşuyor. Bu koşucunun hızı için hangi yorum doğrudur?",
        options: ["Hareket yönü değiştiği için hızı değişir.", "Sürati sabit olduğundan hızı da mutlaka sabittir.", "Dairesel yolda hareket ettiği için sürati sıfırdır.", "Yalnızca pistin başlangıç noktasında hareket eder."],
        correct: 0,
        explanation: "Hızın sabit kalması için hem büyüklüğü hem de yönü değişmemelidir. Dairesel pistte koşucunun hareket yönü sürekli değişir. Bu yüzden sürati sabit olsa da hızı sabit değildir.",
      },
      {
        id: "f6-1-t3-10",
        subject: "fen",
        term: 1,
        prompt: "İki öğrenci aynı A noktasından B noktasına gidiyor. Biri düz ve kısa yolu, diğeri daha uzun ve dolambaçlı bir yolu kullanıyor. Yolculukları için hangi karşılaştırma doğrudur?",
        options: ["Alınan yolları aynı, yer değiştirmeleri farklıdır.", "Hem alınan yolları hem yer değiştirmeleri sıfırdır.", "Uzun yolu kullananın yer değiştirmesi daha büyüktür.", "Alınan yolları farklı, yer değiştirmeleri aynıdır."],
        correct: 3,
        explanation: "Alınan yol izlenen güzergâhın uzunluğuna bağlıdır; dolambaçlı yolda daha fazladır. Yer değiştirme yalnızca başlangıç ve bitiş konumlarına bağlıdır. İkisi de A'dan B'ye gittiği için yer değiştirmeleri aynıdır.",
      },
    ],
  },
  term2: {},
};
