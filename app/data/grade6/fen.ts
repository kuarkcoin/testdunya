import { SubjectData } from "./types";

// 6. sınıf başlangıç paketi: İlk iki ünite; üreme, büyüme, gelişme ve denetleyici sistemler, ışığın yansıması, aynalar, soğurulma ve renklerden seçmeler.
// FB.6.1.1–FB.6.1.4, FB.6.2.1–FB.6.2.3, FB.6.3.1–FB.6.3.4 ve FB.6.3.6–FB.6.3.8 ve FB.6.4.1–FB.6.4.7; tüm yılı kapsamaz.
// Kaynaklar: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/411
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/412
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
        "id": "f6-1-t2-01",
        "subject": "fen",
        "term": 1,
        "prompt": "Şemada bir Ay tutulması sırasında Ay’ın art arda bulunduğu üç konum, Dünya’nın tam gölgesine göre gösterilmiştir. K ve M’de Ay’ın yalnız bir bölümü, L’de tamamı tam gölgenin içindedir.\n\nK → L → M geçişinde Ay tutulmasının görünümü nasıl değişir?",
        "options": [
          "Tam → parçalı → tam",
          "Parçalı → tam → parçalı",
          "Güneş → Ay → Güneş",
          "Parçalı → tutulma yok → parçalı"
        ],
        "correct": 1,
        "explanation": "Ay’ın bir bölümü Dünya’nın tam gölgesindeyken parçalı, tamamı tam gölgedeyken tam Ay tutulması görülür. Bu nedenle sıra parçalı, tam, parçalıdır. Üç konumda da gölgeyi oluşturan cisim Dünya’dır.",
        "imageWidth": 360,
        "imageHeight": 480,
        "imageUrl": "/grade6/fen/test-2/soru-01.svg",
        "imageAlt": "Aynı tutulmanın üç anı: Dünya’nın tam gölgesinin dairesel kesiti ve Ay. K’de Ay sol sınırı kesiyor, L’de tamamen içeride, M’de sağ sınırı kesiyor. Her satır ayrı bir andır."
      },
      {
        "id": "f6-1-t2-02",
        "subject": "fen",
        "term": 1,
        "prompt": "Öğrenci aynı lamba ve opak kürelerle iki Güneş tutulması modeli kuruyor. Işık kaynağı ve Dünya modeli sabit tutuluyor. K’de Ay modeli ortalanmış ve gölgesi Dünya’ya düşüyor. L’de Ay modeli yukarı kaydırıldığı için gölgesi Dünya modelini ıskalıyor.\n\nBu karşılaştırmadan hangi sonuç çıkarılır?",
        "options": [
          "Ay arada olduğu için iki modelde de mutlaka Güneş tutulması oluşur.",
          "Ay’ın yerinin değişmesi L’yi Ay tutulması modeline dönüştürür.",
          "Ay’ın arada bulunmasının yanında uygun hizalanma da gerekir.",
          "K ile L arasındaki fark yalnız Dünya modelinin dönmesinden kaynaklanır."
        ],
        "correct": 2,
        "explanation": "K ile L arasındaki fark Ay modelinin hizasıdır. Ay’ın Güneş ile Dünya arasındaki bölgede bulunması tek başına yeterli değildir; gölgesinin Dünya üzerine düşmesini sağlayan hizalanma gerekir.",
        "imageWidth": 360,
        "imageHeight": 390,
        "imageUrl": "/grade6/fen/test-2/soru-02.svg",
        "imageAlt": "K: lamba, Ay ve Dünya modelleri aynı yatay doğrultuda. L: lamba ve Dünya aynı yerde, Ay yukarı kaymış. Gölgenin Dünya’ya düşüp düşmediği soruda belirtilmiştir. Şema ölçekli değildir."
      },
      {
        "id": "f6-1-t2-03",
        "subject": "fen",
        "term": 1,
        "prompt": "İki gözleme ait kayıtlar kartlarda verilmiştir. K’de gündüz Güneş’in önünü Ay örtüyor. L’de gece Ay, Dünya’nın gölgesine giriyor.\n\nK ve L için ışığı engelleyen cisim ile Ay’ın evresi hangi seçenekte birlikte doğrudur?",
        "options": [
          "K: Dünya / yeni ay; L: Ay / dolunay",
          "K: Ay / dolunay; L: Dünya / yeni ay",
          "K: Ay / yeni ay; L: Ay / dolunay",
          "K: Ay / yeni ay; L: Dünya / dolunay"
        ],
        "correct": 3,
        "explanation": "K bir Güneş tutulmasıdır: Ay, yeni ay evresinde Güneş ile Dünya arasındadır ve ışığı engeller. L bir Ay tutulmasıdır: Dünya, Güneş ışığının Ay’a doğrudan ulaşmasını engeller ve Ay dolunay evresindedir. Yalnız son seçenek iki olayın hem engelleyici cismini hem evresini doğru eşleştirir.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/fen/test-2/soru-03.svg",
        "imageAlt": "K gözlem kartı: gündüz, Ay Güneş’i örtüyor. L kartı: gece, Ay Dünya’nın gölgesinde. İki kayıt ayrı olaylara aittir."
      },
      {
        "id": "f6-1-t2-04",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir tutulma modelinde başlangıç düzeni Güneş → Dünya → Ay olup Ay, Dünya’nın tam gölgesindedir. Üç öğrencinin yorumları görselde verilmiştir.\n\nBu modelden doğru çıkarım yapan öğrenciler hangileridir?",
        "options": [
          "Ece ve Can",
          "Yalnız Deniz",
          "Ece ve Deniz",
          "Can ve Deniz"
        ],
        "correct": 0,
        "explanation": "Dünya’nın gölgesine giren Ay’da Ay tutulması oluşur ve Ay dolunay evresindedir; Ece doğrudur. Ay’a doğrudan ulaşacak Güneş ışığını Dünya engeller; Can da doğrudur. Ancak Ay çoğu dolunayda Dünya’nın gölgesinin üstünden veya altından geçtiği için Deniz’in her dolunayda tutulma olacağı yorumu yanlıştır.",
        "imageWidth": 360,
        "imageHeight": 410,
        "imageUrl": "/grade6/fen/test-2/soru-04.svg",
        "imageAlt": "Ece: Ay dolunay evresindedir. Can: Ay’a giden doğrudan Güneş ışığını Dünya engeller. Deniz: Her dolunayda Ay tutulması olur."
      },
      {
        "id": "f6-1-t2-05",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir cisme aynı yatay doğrultuda görseldeki üç kuvvet uygulanıyor. Başka yatay kuvvet yoktur.\n\nYalnız 7 N’luk kuvvet kaldırılırsa bileşke kuvvetin yönü ve büyüklüğü nasıl değişir?",
        "options": [
          "Doğu yönünde kalır; 7 N artar.",
          "Doğudan batıya döner; büyüklüğü 3 N artar.",
          "Batıdan doğuya döner; büyüklüğü 3 N azalır.",
          "Doğu yönünde kalır; 3 N azalır."
        ],
        "correct": 1,
        "explanation": "Başlangıçta doğuya 7 + 5 = 12 N, batıya 10 N vardır; bileşke doğuya 2 N’dur. 7 N kaldırılınca doğuya 5 N, batıya 10 N kalır; bileşke batıya 5 N olur. Yön tersine döner ve büyüklük 3 N artar.",
        "imageWidth": 360,
        "imageHeight": 350,
        "imageUrl": "/grade6/fen/test-2/soru-05.svg",
        "imageAlt": "Yatay kuvvetler: cisme batıya 10 N, doğuya 7 N ve doğuya 5 N uygulanıyor. Oklar ayrı satırlarda aynı doğrultuyu temsil ediyor."
      },
      {
        "id": "f6-1-t2-06",
        "subject": "fen",
        "term": 1,
        "prompt": "K ve L cisimlerine etki eden yatay kuvvetler tabloda verilmiştir. Başka yatay kuvvet yoktur. Her cisme ayrı ayrı bir dengeleyici kuvvet eklenecektir.\n\nK ve L için gereken dengeleyici kuvvetler hangileridir?",
        "options": [
          "K: doğuya 5 N; L: batıya 5 N",
          "K: batıya 23 N; L: doğuya 23 N",
          "K: batıya 5 N; L: doğuya 5 N",
          "K: doğuya 23 N; L: batıya 23 N"
        ],
        "correct": 2,
        "explanation": "K’de bileşke doğuya 14 − 9 = 5 N olduğundan dengeleyici batıya 5 N’dur. L’de bileşke batıya 14 − 9 = 5 N olduğundan dengeleyici doğuya 5 N’dur. Dengeleyici, bileşkeye eşit büyüklükte ve zıt yöndedir.",
        "imageWidth": 360,
        "imageHeight": 330,
        "imageUrl": "/grade6/fen/test-2/soru-06.svg",
        "imageAlt": "Tabloda K için doğu 14 N, batı 9 N; L için doğu 9 N, batı 14 N yazılı."
      },
      {
        "id": "f6-1-t2-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir cisme aynı yatay doğrultuda batıya 12 N, doğuya 5 N ve doğuya F kuvveti uygulanıyor. Diğer yatay kuvvetler yoktur.\n\nBileşkenin doğuya 3 N olması için F kaç N olmalıdır?",
        "options": [
          "4",
          "7",
          "9",
          "10"
        ],
        "correct": 3,
        "explanation": "Doğuya etki eden toplamın batıya etki eden 12 N’dan 3 N fazla, yani 15 N olması gerekir. 5 + F = 15 olduğundan F = 10 N’dur. F = 7 N seçilseydi bileşke sıfır olurdu.",
        "imageWidth": 360,
        "imageHeight": 360,
        "imageUrl": "/grade6/fen/test-2/soru-07.svg",
        "imageAlt": "Batıya 12 N, doğuya 5 N ve doğuya F uygulanmış. F oku şematik uzunluktadır; bilinmeyen büyüklüğü ok boyundan okunamaz."
      },
      {
        "id": "f6-1-t2-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir Ay tutulması haberini araştıran iki öğrenci aynı anda gözlem yapıyor. Birincinin bulunduğu yerde Ay ufkun altında, ikincinin bulunduğu yerde ise Ay’ın olduğu yön kalın bulutlarla kaplıdır. İkisi de tutulmayı göremiyor.\n\nYalnız bu iki gözleme dayanarak hangi değerlendirme yapılabilir?",
        "options": [
          "İki öğrenci de göremediği için haberin yanlış olduğu kesinleşir.",
          "Görüş engelleri nedeniyle tutulma görülememiş olabilir; gözlemler haberin yanlış olduğunu kanıtlamaz.",
          "Ay ufkun altında olduğundan aynı anda Dünya’nın hiçbir yerinde Ay tutulması olamaz.",
          "Bulutlar Ay’ın Dünya’nın gölgesine girmesini engellediği için tutulma gerçekleşmez."
        ],
        "correct": 1,
        "explanation": "Ay’ın ufkun altında olması ve bulutlar gözlem yapmayı engelleyebilir; tutulmanın gerçekleşmesini engellemez. Bu nedenle iki öğrencinin olayı görememesi haberin yanlış olduğunu kanıtlamaz. Tutulmayı değerlendirmek için uygun yer ve koşullarda gözlem veya güvenilir ek veri gerekir."
      },
      {
        "id": "f6-1-t2-09",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir cisme doğuya 18 N, batıya 11 N ve batıya 4 N kuvvet uygulanıyor. Başka yatay kuvvet yoktur. Kuvvetlerden yalnız biri kaldırılınca bileşke doğuya 7 N oluyor.\n\nHangi kuvvet kaldırılmıştır?",
        "options": [
          "Doğuya 18 N",
          "Batıya 11 N",
          "Batıya 4 N",
          "Hiçbiri; başlangıç bileşkesi zaten 7 N’dur."
        ],
        "correct": 2,
        "explanation": "Başlangıç bileşkesi doğuya 18 − 11 − 4 = 3 N’dur. Batıya 4 N kaldırılınca 18 − 11 = 7 N doğuya kalır. Diğer seçenekler bu sonucu vermez."
      },
      {
        "id": "f6-1-t2-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Sürtünmesiz yatay yolda doğuya doğru hareket eden bir oyuncak arabaya doğuya 8 N ve batıya 8 N kuvvet uygulanıyor. Diğer yatay kuvvetler yoktur ve kuvvetler bu şekilde sürdürülüyor.\n\nArabanın hareketi için hangisi doğrudur?",
        "options": [
          "Doğu yönünde sabit süratle hareketini sürdürür.",
          "Bileşke sıfır olduğu için anında durur.",
          "Batıya doğru hızlanır.",
          "Doğuya doğru sürati sürekli artar."
        ],
        "correct": 0,
        "explanation": "Eşit ve zıt yatay kuvvetlerin bileşkesi sıfırdır. Dengelenmiş kuvvetler hareket hâlindeki cismin hızını değiştirmez. Araba zaten doğuya hareket ettiği için aynı yönde sabit süratle devam eder; bileşkenin sıfır olması mutlaka durmak demek değildir."
      }
    ],
    test3: [
      {
            "id": "f6-1-t3-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Doğuya hareket eden bir arabaya başlangıçta şekildeki yatay kuvvetler uygulanıyor. Diğer yatay kuvvetler yoktur. Sonra yalnız doğuya uygulanan kuvvet 6 N artırılıyor.\n\nBaşlangıçtaki hareket ile değişiklikten hemen sonraki hareket nasıl karşılaştırılır?",
            "options": [
                  "Başlangıçta durur; sonra batıya hareket eder.",
                  "Başlangıçta sabit süratle doğuya gider; sonra doğuya giderken sürati artmaya başlar.",
                  "Her iki durumda da doğuya sabit süratle gider.",
                  "Başlangıçta doğuya hızlanır; sonra anında durur."
            ],
            "correct": 1,
            "explanation": "Başlangıçta 12 N doğu ve 12 N batı birbirini dengeler; hareket eden araba aynı yönde sabit süratle gider. Doğu kuvveti 18 N olduğunda bileşke doğuya 6 N olur. Hareket yönündeki bu bileşke sürati artırır.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-3/soru-01.svg",
            "imageAlt": "Araba doğuya hareket ediyor. Batıya 12 N ve doğuya 12 N kuvvet uygulanıyor. Doğu kuvvetine sonradan 6 N eklenecek."
      },
      {
            "id": "f6-1-t3-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Sürtünmesiz yatay yoldaki K arabası duruyor, L arabası doğuya hareket ediyor. Şekildeki kuvvetler sürekli uygulanıyor; başka yatay kuvvet yoktur.\n\nBir süre sonraki durumları için hangisi doğrudur?",
            "options": [
                  "K doğuya hızlanır; L durur.",
                  "K durur; L doğuya hızlanır.",
                  "K durmaya devam eder; L doğuya aynı süratle gider.",
                  "İkisinin de bileşkesi sıfır olduğundan ikisi de durur."
            ],
            "correct": 2,
            "explanation": "Her iki arabada da eşit ve zıt kuvvetler dengelenir. Bileşke sıfır olduğunda başlangıçtaki hareket durumu korunur: K durur; L doğuya sabit süratle devam eder.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/fen/test-3/soru-02.svg",
            "imageAlt": "K duruyor, batı 8 N doğu 8 N. L doğuya hareket ediyor, batı 5 N doğu 5 N. İki ayrı araba."
      },
      {
            "id": "f6-1-t3-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Öğrenciler, uygulanan çekme kuvvetinin başlangıçta duran bir arabanın hareketine etkisini araştırıyor. Tüm denemelerde aynı araba kullanılıyor; tabloda diğer koşullar verilmiştir.\n\nÇekme kuvvetinin etkisini ayırt etmek için hangi iki deneme karşılaştırılmalıdır?",
            "options": [
                  "I ve III",
                  "II ve III",
                  "III ve IV",
                  "I ve II"
            ],
            "correct": 3,
            "explanation": "I ve II’de araba, zemin ve başlangıç durumu aynıdır; yalnız uygulanan çekme kuvveti farklıdır. III’te zemin, IV’te başlangıç durumu değiştiği için bu denemelerde gözlenen fark yalnız çekme kuvvetine bağlanamaz.",
            "imageWidth": 360,
            "imageHeight": 470,
            "imageUrl": "/grade6/fen/test-3/soru-03.svg",
            "imageAlt": "Denemeler: I pürüzsüz zemin duruyor 2 N doğu; II pürüzsüz zemin duruyor 6 N doğu; III pürüzlü zemin duruyor 6 N doğu; IV pürüzsüz zemin hareketli 6 N doğu. Tablodaki kuvvet doğuya uygulanan çekme kuvvetidir."
      },
      {
            "id": "f6-1-t3-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Öğrenci A’dan B’ye, sonra C’ye ve son olarak A’ya yürüyor. C’ye ilk vardığı andaki kayıt K, yolculuk sonunda A’ya vardığı andaki kayıt L olarak adlandırılıyor. Her kayıtta başlangıç A kabul ediliyor.\n\nK kaydından L kaydına geçildiğinde alınan yol ve yer değiştirme nasıl değişir?",
            "options": [
                  "Alınan yol artar; yer değiştirmenin büyüklüğü sıfır olur.",
                  "Alınan yol azalır; yer değiştirme sıfır olur.",
                  "Alınan yol artar; yer değiştirme de aynı miktarda artar.",
                  "Alınan yol değişmez; yalnız yer değiştirmenin yönü değişir."
            ],
            "correct": 0,
            "explanation": "C’den A’ya yürünmesi toplam alınan yola yeni bir bölüm ekler. C’deyken başlangıç A’dan farklı bir konumdadır; A’ya dönünce başlangıç ve bitiş aynı olur, yer değiştirme sıfırlanır. Geri dönmek alınan yolu azaltmaz.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-3/soru-04.svg",
            "imageAlt": "A, B, C noktalarını birleştiren üçgen rota. Oklar A’dan B’ye, B’den C’ye, C’den A’ya. Başlangıç ve bitiş A."
      },
      {
            "id": "f6-1-t3-05",
            "subject": "fen",
            "term": 1,
            "prompt": "K ve L öğrencileri aynı anda A’dan çıkıp aynı anda B’ye ulaşıyor. K düz yolu, L daha uzun kıvrımlı yolu kullanıyor.\n\nYolculuğun bütünü için hangi karşılaştırma doğrudur?",
            "options": [
                  "K daha fazla yol alır; yer değiştirmeleri farklıdır.",
                  "L daha fazla yol alır; yer değiştirmeleri ve geçen süreleri aynıdır.",
                  "Alınan yollar aynıdır; L’nin yer değiştirmesi daha büyüktür.",
                  "L daha fazla yol aldığı için B’ye daha geç ulaşmış olmalıdır."
            ],
            "correct": 1,
            "explanation": "Güzergâh L için daha uzundur; bu nedenle aldığı yol daha fazladır. İkisinin başlangıç ve bitiş noktaları A ve B olduğundan yer değiştirmeleri aynıdır. Verilen bilgiye göre geçen süreleri de aynıdır; uzun yol mutlaka daha geç varmak demek değildir.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-3/soru-05.svg",
            "imageAlt": "A solda B sağda. K düz rota, L daha uzun kıvrımlı rota. Aynı başlangıç ve bitiş zamanı."
      },
      {
            "id": "f6-1-t3-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir bisikletli dairesel pistte süratini değiştirmeden ok yönünde ilerliyor. K ve L konumlarındaki hareket yönleri şekilde gösterilmiştir.\n\nK’den L’ye giderken sürati ve hızı için hangisi doğrudur?",
            "options": [
                  "İkisi de değişmez.",
                  "Sürati değişir; hızı değişmez.",
                  "Sürati değişmez; hareket yönü değiştiği için hızı değişir.",
                  "K ve L aynı pistte olduğundan ikisinde de hızı sıfırdır."
            ],
            "correct": 2,
            "explanation": "Sürat yön bilgisi içermez ve soruda sabit olduğu verilmiştir. Hız yön de içerir. K ve L’de hareket yönleri farklı olduğundan hız aynı değildir. Sabit sürat, her zaman sabit hız anlamına gelmez.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-3/soru-06.svg",
            "imageAlt": "Dairesel pistte saat yönünde hareket. Üst K noktasında sağa, sağ L noktasında aşağıya teğet yön okları; sürat sabit."
      },
      {
            "id": "f6-1-t3-07",
            "subject": "fen",
            "term": 1,
            "prompt": "Şekildeki üç yatay kuvvetin uygulandığı bir cisme tek bir ek kuvvet uygulanarak denge sağlanacaktır. Başka yatay kuvvet yoktur.\n\nEk kuvvetin büyüklüğü ve yönü hangi seçenekte doğrudur?",
            "options": [
                  "Doğuya 6 N",
                  "Batıya 30 N",
                  "Doğuya 30 N",
                  "Batıya 6 N"
            ],
            "correct": 3,
            "explanation": "Doğu yönündeki kuvvetler 11 + 7 = 18 N, batı yönündeki kuvvet 12 N’dur. Bileşke doğuya 6 N olduğundan dengelemek için batıya 6 N gerekir. Dengeleyici bileşkeye zıt yöndedir.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-3/soru-07.svg",
            "imageAlt": "Batıya 12 N, doğuya 11 N ve doğuya 7 N kuvvetleri. Oklar aynı yatay doğrultuyu ayrı satırlarda gösteriyor."
      },
      {
            "id": "f6-1-t3-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Batıya doğru hareket eden bir arabaya etki eden bütün yatay kuvvetlerin bileşkesi doğuya yönelmiştir. Araba henüz durmamışken kısa bir süre gözleniyor.\n\nBu sürede hangi yorum doğrudur?",
            "options": [
                  "Araba anında doğuya dönmek zorundadır.",
                  "Araba batıya giderken sürati azalır.",
                  "Bileşke doğuya olduğundan araba batıya hızlanır.",
                  "Araba hareket ettiğinden bileşke sıfır olmalıdır."
            ],
            "correct": 1,
            "explanation": "Bileşke kuvvet mevcut hareket yönüne zıttır. Araba henüz durmadan incelendiği için batıya hareket ederken yavaşlar. Kuvvet yönü, cismin o andaki hareket yönünün mutlaka aynı olduğunu göstermez."
      },
      {
            "id": "f6-1-t3-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir kutuya yatay doğrultuda biri doğuya, diğeri batıya iki kuvvet uygulanıyor ve kutu durmaya devam ediyor. Sonra doğuya etki eden kuvvetin yalnız yönü ters çevriliyor; iki kuvvetin büyüklüğü değişmiyor. Başka yatay kuvvet yoktur.\n\nBileşke kuvvet hakkında hangi sonuç kesinlikle doğrudur?",
            "options": [
                  "İlk durumda bileşke doğuyadır; son durumda sıfır olur.",
                  "İki kuvvetin büyüklüğü değişmediği için bileşke hep sıfırdır.",
                  "İlk durumda kuvvetler eşittir; son durumda batıya, bir kuvvetin iki katı büyüklüğünde bileşke oluşur.",
                  "Son durumda bileşke doğuya, kuvvetlerden birine eşit olur."
            ],
            "correct": 2,
            "explanation": "Kutu başlangıçta durmaya devam ettiğinden iki zıt yatay kuvvet dengededir ve büyüklükleri eşittir. Doğu kuvveti de batıya çevrilince eşit iki kuvvet aynı yönde toplanır; bileşke batıya ve bir kuvvetin iki katı olur."
      },
      {
            "id": "f6-1-t3-10",
            "subject": "fen",
            "term": 1,
            "prompt": "K ve L araçları düz bir yolda aynı süratle, K kuzeye ve L güneye hareket ediyor. Daha sonra L bir virajı dönerek kuzeye yöneliyor ve tekrar düz yola çıkıyor. L, bu süreçte süratini değiştirmiyor; K de kuzeye aynı süratle devam ediyor.\n\nBaşlangıçtaki ve L’nin tekrar düz yola çıktığı andaki hızları için hangi yorum doğrudur?",
            "options": [
                  "Başlangıçta hızları farklıdır; sonunda büyüklük ve yönleri aynı olduğundan hızları eşittir.",
                  "Süratleri hep eşit olduğundan hızları baştan sona eşittir.",
                  "Başlangıçta hızları eşittir; sonunda L yön değiştirdiği için farklıdır.",
                  "L daha uzun yol izlediği için sonunda hızı mutlaka K’den büyüktür."
            ],
            "correct": 0,
            "explanation": "Başlangıçta süratler eşit olsa da kuzey ve güney yönleri farklıdır. Sonunda iki araç da aynı süratle kuzeye ilerlediğinden o andaki hızları eşittir. İzlenen yolların uzunluğu tek başına son andaki hızı belirlemez."
      }
],

    test4: [
      {
            "id": "f6-1-t4-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı türden, canlı ve eşit sayıda tohumla hazırlanan dört düzenek görselde verilmiştir. Hava alabilme ve gözlem süresi tümünde aynıdır.\n\nSuyun çimlenmeye etkisini araştırmak için karşılaştırılacak düzenekler ve ölçülecek sonuç hangi seçenekte doğrudur?",
            "options": [
                  "I ve III; ortam sıcaklığı",
                  "I ve II; çimlenen tohum sayısı",
                  "II ve IV; ışık miktarı",
                  "III ve IV; kullanılan tohum sayısı"
            ],
            "correct": 1,
            "explanation": "I ve II’de yalnız su durumu farklıdır; sıcaklık ve ışık koşulları aynıdır. Belirlenen süre sonunda çimlenen tohum sayıları karşılaştırılır. Diğer seçenekler suyun etkisini uygun düzenek ve sonuç ölçümüyle araştırmaz.",
            "imageWidth": 360,
            "imageHeight": 450,
            "imageUrl": "/grade6/fen/test-4/soru-01.svg",
            "imageAlt": "Düzenekler: I nemli 25°C karanlık; II kuru 25°C karanlık; III nemli 10°C karanlık; IV nemli 25°C aydınlık. Hava ve süre aynı."
      },
      {
            "id": "f6-1-t4-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı türden canlı tohumlar iki gruba ayrılmış; su, uygun sıcaklık, hava ve gözlem süresi eşit tutulmuştur. Sonuçlar görselde verilmiştir.\n\nBu sonuçlardan hangisine ulaşılabilir?",
            "options": [
                  "Bütün bitkiler yaşamları boyunca ışıksız büyür.",
                  "Işık olan ortamda hiçbir tohum çimlenemez.",
                  "Deneydeki tohumlar için ışık, çimlenmenin zorunlu koşulu değildir.",
                  "Çimlenmeyen tohumların tamamı kesinlikle ölüdür."
            ],
            "correct": 2,
            "explanation": "Karanlıkta da çimlenme görülmesi, bu deneydeki tohumların çimlenmesi için ışığın zorunlu olmadığını gösterir. Bu sonuç bütün türlere ve bitkinin sonraki yaşamına genellenemez; çimlenmeyenlerin nedeni tek başına bu veriden belirlenemez.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-4/soru-02.svg",
            "imageAlt": "İki grupta onar tohum. Aydınlıkta 8, karanlıkta 8 tohum çimlenmiş. Diğer koşullar aynı."
      },
      {
            "id": "f6-1-t4-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Şemada bir çiçeğin başçığındaki polenlerin, aynı türden başka bir çiçeğin tepeciğine taşınması gösteriliyor.\n\nBu olayın adı ve yalnız bu gözleme dayanarak söylenebilecek ifade hangisidir?",
            "options": [
                  "Çimlenme; yeni bitki oluşmuştur.",
                  "Döllenme; tohumun çimlendiği kesindir.",
                  "Tozlaşma; her polenin mutlaka yeni tohum oluşturduğu kanıtlanmıştır.",
                  "Tozlaşma; henüz yeni bir bitkinin oluştuğu söylenemez."
            ],
            "correct": 3,
            "explanation": "Polenlerin başçıktan tepeciğe taşınması tozlaşmadır. Bu aşamanın görülmesi, sonraki süreçlerin tamamlandığını veya yeni bir bitki oluştuğunu tek başına kanıtlamaz. Tozlaşma, çimlenme ile aynı olay değildir.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-4/soru-03.svg",
            "imageAlt": "Başçıkta polenler; ok başka çiçeğin tepeciğine doğru. Çiçek kısımları şematik gösterilmiş."
      },
      {
            "id": "f6-1-t4-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Çilek bitkisinden çıkan sürünücü gövde, toprağa temas ettiği yerde kökleniyor ve yeni bir bitki oluşturuyor. Bu olayda tohum oluşmuyor.\n\nOlayın üreme sayılmasının nedeni ve üreme biçimi hangisidir?",
            "options": [
                  "Yeni birey oluşmuştur; vejetatif eşeysiz üremedir.",
                  "Ana bitkiyle bağlantısı bulunduğu için yeni birey oluşsa da yalnız büyümedir.",
                  "Toprağa kök saldığı için tohumla eşeyli üremedir.",
                  "Yeni bitkinin yaprakları olduğu için mutlaka tozlaşma gerçekleşmiştir."
            ],
            "correct": 0,
            "explanation": "Belirleyici olan, köklenerek yeni bir bireyin oluşmasıdır. Tohum ve döllenme olmadan bitkinin gövde gibi kısımlarından yeni bitki gelişmesi vejetatif eşeysiz üremedir. Her kök veya dal uzaması tek başına üreme değildir.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-4/soru-04.svg",
            "imageAlt": "Ana çilek bitkisi, sürünücü gövde ve köklenmiş yeni bitki. Yeni bitkinin kök ve yaprakları gösterilmiş."
      },
      {
            "id": "f6-1-t4-05",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir kelebeğin yaşam döngüsü modelinde bir aşama boş bırakılmıştır. Modeldeki oklar zaman sırasını gösteriyor.\n\nBoşluğa hangi aşama gelmeli ve bu yaşam döngüsü nasıl yorumlanmalıdır?",
            "options": [
                  "Pupa; bütün değişimler yalnızca tırtılın büyümesinden ibarettir.",
                  "Pupa; canlı başkalaşım geçirir, değişim yalnız büyüklük artışı değildir.",
                  "Pupa; ergin kelebek oluşunca yeni bir canlı türü ortaya çıkar.",
                  "Ergin kelebek; boşluktan sonraki kelebek bir sonraki kuşaktır."
            ],
            "correct": 1,
            "explanation": "Kelebeğin sırası yumurta, larva (tırtıl), pupa ve ergin kelebektir. Başkalaşımda vücut yapısı ve yaşam biçimi belirgin değişir; yalnızca boyun artması söz konusu değildir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-4/soru-05.svg",
            "imageAlt": "Dikey yaşam döngüsü: yumurta, tırtıl, soru işareti, ergin kelebek. Oklar sırayı gösterir."
      },
      {
            "id": "f6-1-t4-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı civcivin iki farklı zamanda tutulan kayıtları görselde verilmiştir.\n\nKayıtlar birlikte değerlendirildiğinde hangi yorum doğrudur?",
            "options": [
                  "Yalnız büyüme vardır; birey değişmediği için gelişme olamaz.",
                  "Yalnız gelişme vardır; kütle artışı büyümeyi göstermez.",
                  "Kütle artışı büyümeye; tüy yapısındaki değişim gelişmeye örnektir.",
                  "Kütle artışı büyümedir; tüyler değiştiği için üreme de gerçekleşmiştir."
            ],
            "correct": 2,
            "explanation": "Kütlenin artması büyüme göstergesidir. Yavruya özgü tüy yapısının değişmesi gelişme sürecinin bir parçasıdır. Aynı bireydeki bu değişimler yeni birey oluşması anlamına gelmediğinden üreme değildir.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-4/soru-06.svg",
            "imageAlt": "Aynı civciv: ilk kayıtta 45 g, ince hav tüyleri; sonraki kayıtta 160 g, kanat tüyleri belirginleşmiş. Ölçümler örnek gözlem verisidir."
      },
      {
            "id": "f6-1-t4-07",
            "subject": "fen",
            "term": 1,
            "prompt": "İki canlının gözlem kayıtları görselde verilmiştir. K’da kertenkele kaybettiği kuyruğunu yeniliyor; L’de planaryanın bir parçasından bütün bir yeni birey oluşuyor.\n\nHangi yorum doğrudur?",
            "options": [
                  "K ve L’de yenilenme görüldüğü için ikisi de üremedir.",
                  "K’de yeni kuyruk oluştuğu için üreme vardır; L’de yalnız onarım vardır.",
                  "L’de yeni birey oluştuğundan mutlaka eşeyli üreme gerçekleşmiştir.",
                  "K doku yenilenmesidir; L’de yeni birey oluştuğu için rejenerasyonla üreme vardır."
            ],
            "correct": 3,
            "explanation": "Kuyruğun yenilenmesi kertenkele sayısını artırmaz, aynı bireyde onarımdır. Planaryanın parçasından bütün bir yeni birey gelişmesi ise eşeysiz üreme örneğidir. Her yenilenme üreme olarak adlandırılamaz.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-4/soru-07.svg",
            "imageAlt": "K kaydı: kuyruk yenileniyor, yeni kertenkele oluşmuyor. L kaydı: planarya parçası bütün bir yeni bireye dönüşüyor. Gözlem kayıtları, deney önerisi değildir."
      },
      {
            "id": "f6-1-t4-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci “Çimlenmek için su gerektiğine göre tohumu sürekli tamamen su altında bırakmak en iyi yöntemdir.” diyor.\n\nBu düşüncedeki eksikliği en doğru açıklayan ifade hangisidir?",
            "options": [
                  "Su miktarı ne olursa olsun oksijen her zaman yeterlidir.",
                  "Çimlenme için su yanında oksijen ve uygun sıcaklık da gerekir; aşırı su oksijen alımını güçleştirebilir.",
                  "Tohum çimlenirken yalnız ışığa ihtiyaç duyar.",
                  "Tohumun canlı olması çimlenmesini hiçbir şekilde etkilemez."
            ],
            "correct": 1,
            "explanation": "Tohumun çimlenmesi için uygun koşulların birlikte sağlanması gerekir. Sürekli su altında kalmak oksijenin tohuma yeterince ulaşmasını güçleştirebilir. Suyun gerekli olması, miktarının sınırsızca artırılmasının yararlı olduğu anlamına gelmez."
      },
      {
            "id": "f6-1-t4-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı sardunyadan alınan iki gövde çeliği köklendirilerek yeni bitkiler yetiştiriliyor. Sonra biri yeterli ışık ve su alırken diğeri hem az ışık hem az su alıyor; gelişimleri farklı oluyor. Bir öğrenci farkın yalnız ışıktan kaynaklandığını söylüyor.\n\nÜreme biçimi ve öğrencinin yorumu birlikte nasıl değerlendirilmelidir?",
            "options": [
                  "Eşeyli üremedir; farkın yalnız ışıktan kaynaklandığı kanıtlanmıştır.",
                  "Eşeysiz üremedir; aynı bitkiden geldikleri için çevre gelişimlerini etkileyemez.",
                  "Eşeysiz üremedir; su da değiştiğinden fark yalnız ışığa bağlanamaz.",
                  "Eşeyli üremedir; gelişimleri farklı olduğundan farklı türler oluşmuştur."
            ],
            "correct": 2,
            "explanation": "Gövde çeliğinden yeni bitki elde edilmesi vejetatif eşeysiz üremedir. Hem ışık hem su koşulu değiştiği için gelişim farkının yalnız ışıktan kaynaklandığı söylenemez. Işığın etkisini ayırt etmek için su ve diğer koşullar eşit tutulmalıdır."
      },
      {
            "id": "f6-1-t4-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir bitkinin çimlenmesine sıcaklığın etkisi araştırılıyor. Birinci gruptaki tohumlar nemli ortamda 25°C’de, ikinci gruptakiler kuru ortamda 10°C’de tutuluyor. Birinci grupta daha çok çimlenme görülüyor.\n\nSonucun yalnız sıcaklığa bağlanabilmesi için deney nasıl düzeltilmelidir?",
            "options": [
                  "İki grupta su, tohum türü ve sayısı, hava, ışık ve süre aynı tutulup yalnız sıcaklık değiştirilmelidir.",
                  "İkinci grupta hem tohum türü hem su miktarı değiştirilmelidir.",
                  "İlk grubun gözlem süresi artırılmalı, diğer koşullar önemsenmemelidir.",
                  "Birinci grubun sıcaklığı ve ışığı birlikte artırılmalıdır."
            ],
            "correct": 0,
            "explanation": "İlk deneyde hem sıcaklık hem su durumu değişmiştir; farkın hangi etkenden kaynaklandığı ayırt edilemez. Sıcaklığın etkisini incelemek için diğer koşullar eşit tutulmalıdır. Aynı türden canlı tohumlar ve eşit sayıda tekrar kullanılması karşılaştırmayı güçlendirir."
      }
],

    test5: [
      {
            "id": "f6-1-t5-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Sinir sistemi modelinde K, kafatasındaki yapıları; L, omuriliği; M ise kol ve bacaklara uzanan sinirleri gösteriyor.\n\nBu model için hangi sınıflandırma ve görev açıklaması doğrudur?",
            "options": [
                  "K ve M merkezîdir; L, vücut ile merkez arasında iletim yapar.",
                  "K ve L merkezîdir; M, merkez ile vücut arasında bilgi iletimine katılır.",
                  "Yalnız K merkezîdir; L ile M yalnız çevresel sistemdedir.",
                  "K, L ve M merkezîdir; çevresel sistem bu modelde gösterilmemiştir."
            ],
            "correct": 1,
            "explanation": "Beyin ve omurilik merkezî sinir sistemindedir. Kol ve bacaklara uzanan sinirler çevresel sinir sistemine aittir; merkez ile organlar arasındaki iletişime katılır. Hormonların kanla taşınması farklı bir iletişim yoludur.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/fen/test-5/soru-01.svg",
            "imageAlt": "İnsan siluetinde K kafatasındaki sinir sistemi yapıları, L omurilik, M kol ve bacaklara dallanan sinirler. Model sadeleştirilmiştir."
      },
      {
            "id": "f6-1-t5-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Görselde bir elin sıcak bir yüzeyden hızla çekilmesini sağlayan omurilik refleksi basitleştirilmiştir. Oklar bilgi akışını gösteriyor.\n\nP ve R yollarının görevleri hangi seçenekte doğru verilmiştir?",
            "options": [
                  "P kasa cevap götürür; R deriden bilgi getirir.",
                  "P ve R yalnız hormon taşır.",
                  "P deriden omuriliğe bilgi taşır; R omurilikten kasa cevap taşır.",
                  "P doğrudan kası çalıştırır; omuriliğe bilgi ulaşmaz."
            ],
            "correct": 2,
            "explanation": "Refleks yolunda uyarı bilgisi deriden omuriliğe, hareket cevabı omurilikten ilgili kasa iletilir. Bu basitleştirilmiş şema beynin olaydan hiç haberdar olmadığını göstermez; bilgi beyne de ulaşabilir.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-5/soru-02.svg",
            "imageAlt": "Deri solda, omurilik ortada, kas sağda. P oku deriden omuriliğe, R oku omurilikten kasa. Ayrıntısız refleks modeli."
      },
      {
            "id": "f6-1-t5-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Beynin bazı bölümleri yandan görünüş modelinde K, L ve M ile gösterilmiştir. Bir öğrenci K’yi öğrenme ve düşünmeyle, L’yi denge ve hareketlerin uyumuyla eşleştiriyor.\n\nBu iki eşleştirme doğruysa M için hangi görev en uygundur?",
            "options": [
                  "Denge ve hareketlerin uyumuna katkı sağlamak.",
                  "Öğrenme ve bilinçli düşünmeyi gerçekleştirmek.",
                  "Kol ve bacaktaki uyarıları merkeze taşıyan çevresel sinirleri oluşturmak.",
                  "Solunum gibi yaşamsal olayların düzenlenmesine katılmak."
            ],
            "correct": 3,
            "explanation": "K büyük beyin bölgesini, L beyinciği, M omurilik soğanını gösterir. Omurilik soğanı solunum ve kalp atışı gibi yaşamsal olayların düzenlenmesinde görev alır. Bölümler birlikte çalışır; model tüm ayrıntıları göstermez.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/fen/test-5/soru-03.svg",
            "imageAlt": "Yandan şematik beyin: K üstte büyük bölüm, L arka altta beyincik, M omuriliğe bağlanan alt beyin sapı bölümü. Ön solda, arka sağda."
      },
      {
            "id": "f6-1-t5-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir iç salgı bezinden çıkan hormonun hedef organa ulaşması modelde gösteriliyor. X, aradaki taşıma yoludur.\n\nModelin doğru olması için X neyi temsil etmeli ve hangi yorum yapılmalıdır?",
            "options": [
                  "Kan dolaşımını; bez ile hedef organın yan yana olması gerekmez.",
                  "Kan dolaşımını; hormon yalnız bezin hemen yanındaki organa ulaşabilir.",
                  "Sinirleri; bezden çıkan hormon yalnız bu yolla uzaktaki organa taşınır.",
                  "Sinirleri; hormon taşıyan sinirler ancak yan yana organları bağlayabilir."
            ],
            "correct": 0,
            "explanation": "İç salgı bezlerinin hormonları kana verilir ve kanla taşınır. Bu nedenle bir hormonun etki edeceği organ bezden uzakta olabilir. Sinirsel iletim ile hormonların taşınma yolu aynı değildir.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-5/soru-04.svg",
            "imageAlt": "Solda iç salgı bezi, ortada X yazılı damar benzeri taşıma yolu, sağda hedef organ. Hormon noktaları ok yönünde ilerliyor."
      },
      {
            "id": "f6-1-t5-05",
            "subject": "fen",
            "term": 1,
            "prompt": "Pankreasın kan şekerinin düzenlenmesine katkısı iki kolda modellenmiştir. K kolu kan şekerini düşürmeye, L kolu yükseltmeye yardımcı olan hormonu gösteriyor.\n\nK ve L’nin doğru adları ve birlikte çalışmalarının sonucu hangisidir?",
            "options": [
                  "K glukagon, L insülin; ikisi de kan şekerini düşürür.",
                  "K insülin, L glukagon; zıt etkileri düzenlemeye katkı sağlar.",
                  "K adrenalin, L tiroksin; yalnız sinirsel iletim yaparlar.",
                  "K insülin, L glukagon; aynı anda her durumda aynı etkiyi yaparlar."
            ],
            "correct": 1,
            "explanation": "Pankreasın insülin hormonu kan şekerini düşürmeye, glukagon hormonu yükseltmeye yardımcı olur. Zıt etkiler, değişen koşullarda kan şekerinin düzenlenmesine katkı sağlar. Şema kişisel ölçüm veya tanı modeli değildir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-5/soru-05.svg",
            "imageAlt": "Pankreastan iki kol: K kan şekerini azaltma yönünde, L artırma yönünde; ortada düzenlenen kan şekeri. Şematik işlev modeli."
      },
      {
            "id": "f6-1-t5-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Vücut modelinde K boyundaki tiroit bezini, L böbreklerin üzerindeki böbrek üstü bezlerini gösteriyor. Bir öğrenci “K adrenalin, L tiroksin salgılar.” diyor.\n\nÖğrencinin hatası nasıl düzeltilmelidir?",
            "options": [
                  "Bezlerin yerleri değiştirilmelidir; hormon adları doğru kalır.",
                  "İkisi de yalnız büyüme hormonu salgılar şeklinde düzeltilmelidir.",
                  "Hormonlar yer değiştirmelidir: K için tiroksin, L için adrenalin yazılmalıdır.",
                  "K ve L sinir olduğundan hiçbir hormonla ilişkilendirilemez."
            ],
            "correct": 2,
            "explanation": "Boyundaki tiroit bezi tiroksin; böbrek üstü bezleri ise adrenalin salgılar. Yerleri doğru verilmiş, hormon eşleştirmeleri ters yapılmıştır. Modelde böbrekler, üstlerindeki bezlerin konumunu belirtmek için gösterilmiştir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-5/soru-06.svg",
            "imageAlt": "Önden sade insan gövdesi: boyunda kelebek biçimli tiroit K; karın arka bölgesini temsil eden iki böbreğin üstünde böbrek üstü bezleri L. İç yapılar şematik."
      },
      {
            "id": "f6-1-t5-07",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrencinin topu görüp tutması görseldeki işlev zinciriyle modellenmiştir. Model yalnız bilgi ve cevap sırasını gösterir.\n\nZincirde P ve R yerine hangi açıklamalar gelmelidir?",
            "options": [
                  "P: merkezden göze cevap; R: kastan merkeze bilgi iletilmesi.",
                  "P: gözden merkeze bilgi; R: kastan merkeze bilgi iletilmesi.",
                  "P: merkezden göze cevap; R: merkezden kasa hareket cevabı iletilmesi.",
                  "P: sinirlerle merkeze bilgi iletilmesi; R: merkezden kaslara hareket cevabı iletilmesi."
            ],
            "correct": 3,
            "explanation": "Gözden alınan bilgi sinirlerle merkezî sinir sistemine ulaşır. Değerlendirmeden sonra kaslara hareketi sağlayan cevap iletilir. Bu istemli davranışta duyu, merkez ve kaslar birlikte çalışır; model ayrıntılı sinir yollarını göstermez.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-5/soru-07.svg",
            "imageAlt": "Top ışığı göze ulaşıyor. Gözden P yolu ile beyne, beyinden R yolu ile kol kasına oklar. Kol topu yakalıyor; işlev zinciri şematik."
      },
      {
            "id": "f6-1-t5-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci “Elimi istemeden sıcak yüzeyden çekmem de bir sorunun cevabını düşünüp yazmam da aynı tür tepkidir; ikisinde de önce bilinçli karar veririm.” diyor.\n\nBu yorum nasıl değerlendirilmelidir?",
            "options": [
                  "İki olayda da hiçbir sinir sistemi yapısı çalışmaz.",
                  "Yorum yanlıştır; ilk olay koruyucu bir refleks, ikincisi bilinçli düşünme ve istemli hareket içerir.",
                  "Yorum doğrudur; bütün refleksler düşünerek başlatılır.",
                  "Yorum yanlıştır; düşünerek yazmak yalnız hormonlarla gerçekleşir."
            ],
            "correct": 1,
            "explanation": "Elin hızla çekilmesi otomatik koruyucu bir refleks örneğidir. Cevabı düşünüp yazmak ise bilinçli değerlendirme ve istemli hareket gerektirir. Her iki olayda sinir sistemi görev alsa da tepkilerin başlatılma biçimi aynı değildir."
      },
      {
            "id": "f6-1-t5-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir afişte “Beyincik hareketlerin uyumuna yardım eder; büyüme hormonu büyümenin düzenlenmesine katkı sağlar.” yazıyor. Bir öğrenci bunların tek bir organın aynı yoldan verdiği iki cevap olduğunu söylüyor.\n\nHangi açıklama öğrencinin yanılgısını düzeltir?",
            "options": [
                  "İki örnek de sinirsel iletimdir; büyüme hormonu sinirler boyunca taşınır.",
                  "İki örnek de iç salgı sistemidir; beyincik yalnız hormonla dengeyi sağlar.",
                  "İlk örnek sinir sistemiyle, ikincisi iç salgı sistemiyle ilgilidir; sistemler birlikte çalışsa da iletişim yolları aynı değildir.",
                  "Sistemleri farklıdır; bu nedenle hiçbir olayda birbirleriyle uyumlu çalışamazlar."
            ],
            "correct": 2,
            "explanation": "Beyincik sinir sisteminin bir bölümüdür. Hipofizden salgılanan büyüme hormonu ise iç salgı sisteminin bir örneğidir ve kanla taşınır. Sistemlerin uyumlu çalışması, bütün görevleri tek bir organın yaptığı anlamına gelmez."
      },
      {
            "id": "f6-1-t5-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı yaştaki iki arkadaşın ergenliğe ilişkin kayıtlarında boy uzaması, duyguların daha hızlı değişebilmesi ve bazı bedensel değişimlerin farklı zamanlarda başlaması yer alıyor.\n\nBu üç gözlem sırasıyla nasıl değerlendirilmelidir?",
            "options": [
                  "Bedensel değişim; ruhsal değişim; zamanlamada bireysel farklılık.",
                  "Ruhsal değişim; bedensel değişim; zamanlamada bireysel farklılık.",
                  "Bedensel değişim; ruhsal değişim; yalnız bu farkla kesin hastalık tanısı.",
                  "Bedensel değişim; bedensel değişim; herkesin aynı gün değişmesi gereği."
            ],
            "correct": 0,
            "explanation": "Boy uzaması bedensel; duyguların değişmesi ruhsal değişimlerle ilişkilidir. Ergenlikte değişimlerin başlama zamanı kişiden kişiye farklılık gösterebilir. Tek başına arkadaşlar arasındaki zaman farkı hastalık tanısı koydurmaz; bireysel farklılıklara saygı gösterilmelidir."
      }
],

    test6: [
      {
            "id": "f6-1-t6-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci şekilde gelen ışın ile ayna yüzeyi arasındaki 35°’yi gelme açısı olarak yazıyor.\n\nÖğrencinin kaydı nasıl düzeltilmeli ve yansıma açısı kaç derece olmalıdır?",
            "options": [
                  "Gelme açısı 35°, yansıma açısı 55° olmalıdır.",
                  "İki açı da 35° olmalıdır.",
                  "Gelme açısı ve yansıma açısı 55° olmalıdır.",
                  "Gelme açısı 55°, yansıma açısı 35° olmalıdır."
            ],
            "correct": 2,
            "explanation": "Gelme ve yansıma açıları yüzeyden değil, yüzeye dik normalden ölçülür. Yüzeyle 35° yapan gelen ışının normalle açısı 55°’dir. Yansıma açısı da 55° olur.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-6/soru-01.svg",
            "imageAlt": "Yatay aynaya sol üstten gelen ışın yüzeyle 35° yapıyor. Çarpma noktasında dik normal çizili. Yansıyan ışın çizilmemiş."
      },
      {
            "id": "f6-1-t6-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Gelen ışının normalle yaptığı açı şekilde 30°’dir. Öğrenci yansıyan ışın için P ve R yollarını öneriyor.\n\nHangi yol seçilmeli ve gerekçesi ne olmalıdır?",
            "options": [
                  "P; normalle yaptığı açı gelme açısına eşittir.",
                  "R; yüzeye daha yakın olan yol her zaman doğrudur.",
                  "P; yansıyan ışın normal boyunca ilerlemek zorundadır.",
                  "R; yansıma açısı gelme açısından büyük olmalıdır."
            ],
            "correct": 0,
            "explanation": "Yansıyan ışın normalin diğer tarafında ve normalle 30° açı yapmalıdır. P bu koşulu sağlar; R’nin normalle açısı 60°’dir.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/fen/test-6/soru-02.svg",
            "imageAlt": "Yatay ayna ve dik normal. Gelen ışın solda normalle 30°, P sağda 30°, R sağda 60° yapıyor. Oklar aday yansıyan ışınlarda yüzeyden dışarı."
      },
      {
            "id": "f6-1-t6-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Birbirine paralel ışınlar K ve L yüzeylerine gönderiliyor. Yansıyan ışınların yönleri şekilde gösterilmiştir.\n\nHangi yorum doğrudur?",
            "options": [
                  "K’da yansıma vardır; L’de ışık hiç yansımaz.",
                  "K ve L’de yansıma kuralları farklıdır.",
                  "L’de yüzeyin her noktasındaki normal aynı yöndedir.",
                  "K düzgün, L dağınık yansımadır; her noktada yansıma kuralı geçerlidir."
            ],
            "correct": 3,
            "explanation": "Düzgün yüzeyde paralel gelen ışınlar paralel yansır. Pürüzlü yüzeyin farklı noktalarındaki normaller farklı yönlerde olduğundan ışınlar farklı yönlere yansıyabilir. Dağınık yansımada da yerel gelme ve yansıma açıları eşittir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-6/soru-03.svg",
            "imageAlt": "K düz yüzey, L farklı eğimli küçük yüzeylerden oluşur. Paralel gelen ışınlar K’da paralel, L’de farklı yönlere yansır. Çizim şematiktir."
      },
      {
            "id": "f6-1-t6-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir ok düz aynanın önünde önce K, sonra aynaya daha yakın L konumuna getiriliyor. Okun boyu ve duruşu değişmiyor.\n\nGörüntünün boyu ve aynaya göre konumu nasıl değişir?",
            "options": [
                  "Görüntü büyür ve aynadan uzaklaşır.",
                  "Görüntünün boyu değişmez; görüntü aynaya yaklaşır.",
                  "Görüntü küçülür; aynaya uzaklığı değişmez.",
                  "Görüntü ters döner ve aynanın önüne geçer."
            ],
            "correct": 1,
            "explanation": "Düz aynada görüntü cismin boyundadır ve aynanın arkasında oluşur. Cisim aynaya yaklaştırıldığında görüntü de aynaya yaklaşır; boyu ve düz oluşu değişmez.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-6/soru-04.svg",
            "imageAlt": "Dikey düz ayna sağda. Aynı boydaki ok için K solda uzak, L aynaya daha yakın konumda. K’den L’ye hareket oku var."
      },
      {
            "id": "f6-1-t6-05",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı cismin üç aynadaki görüntüleri gözleniyor. K’de görüntü düz ve cisimle aynı boyda; L’de düz ve küçük; M’de ise cisim çok yakındayken düz ve büyük görülüyor.\n\nK, L ve M hangi ayna türleriyle eşleştirilmelidir?",
            "options": [
                  "K düz, L tümsek, M çukur.",
                  "K tümsek, L düz, M çukur.",
                  "K düz, L çukur, M tümsek.",
                  "K çukur, L tümsek, M düz."
            ],
            "correct": 0,
            "explanation": "Düz ayna aynı boyda düz görüntü verir. Tümsek aynada görüntü düz ve küçüktür. Çukur ayna, cisim yeterince yakındayken düz ve büyük görüntü verebilir. M için yakınlık koşulu bu nedenle önemlidir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-6/soru-05.svg",
            "imageAlt": "Her satırda aynı boyda cisim oku ve gözlenen görüntü oku: K aynı boyda düz, L küçük düz, M büyük düz. M’de cisim aynaya çok yakın. Işın çizimi değil gözlem karşılaştırması."
      },
      {
            "id": "f6-1-t6-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci aynı çukur aynada bir cismin görüntüsünü gözlüyor. Cisim çok yakındayken K, daha uzaktaki uygun bir konumdayken L görünümü elde ediliyor.\n\nBu gözlemler hangi çıkarımı destekler?",
            "options": [
                  "Çukur aynalar her uzaklıkta düz görüntü verir.",
                  "Cisim uzaklaştırıldığında görüntü her zaman büyür.",
                  "Çukur aynadaki görüntü özellikleri cismin konumuna bağlıdır.",
                  "Ters görüntünün boyu cismin boyuna her zaman eşittir."
            ],
            "correct": 2,
            "explanation": "Çukur aynada cismin konumuna göre görüntünün yönü ve boyu değişebilir. Yakında düz ve büyük, başka bir uygun konumda ters görüntü gözlenebilir. Aynanın türü cisim uzaklaşınca değişmez.",
            "imageWidth": 360,
            "imageHeight": 370,
            "imageUrl": "/grade6/fen/test-6/soru-06.svg",
            "imageAlt": "İki gözlem: K’de yukarı yönlü cisim oku ve daha büyük yukarı görüntü; L’de yukarı cisim oku ve aşağı yönlü görüntü. Çukur ayna aynı, konum farklı."
      },
      {
            "id": "f6-1-t6-07",
            "subject": "fen",
            "term": 1,
            "prompt": "İki düz aynalı modelde ışık, birinci aynaya soldan gelip aşağıya yansıyor. İkinci ayna birinciye paralel yerleştirilmiştir.\n\nİkinci aynadan sonra ışık P mi R mi yönünde ilerler ve toplam kaç yansıma gerçekleşir?",
            "options": [
                  "P yönünde; bir yansıma.",
                  "R yönünde; bir yansıma.",
                  "P yönünde; iki yansıma.",
                  "R yönünde; iki yansıma."
            ],
            "correct": 3,
            "explanation": "İlk eğik ayna sağa ilerleyen ışığı aşağıya yöneltir. Buna paralel ikinci aynada aşağı gelen ışık sağa, yani R yönüne yansır. Her aynada birer kez olmak üzere toplam iki yansıma gerçekleşir.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/fen/test-6/soru-07.svg",
            "imageAlt": "İki paralel 45° eğimli düz ayna. Üste soldan gelen ışık alt aynaya düşey iner. Alt aynadan sola P, sağa R aday yönleri gösterilir."
      },
      {
            "id": "f6-1-t6-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci “Kitap sayfasında yüzümün net görüntüsü yok; demek ki sayfa ışığı hiç yansıtmıyor.” diyor.\n\nBu çıkarım neden yanlıştır?",
            "options": [
                  "Sayfa yalnız karanlıkta ışık yansıtır.",
                  "Sayfadan yansıyan ışık göze ulaşır; dağınık yansıma nedeniyle net ayna görüntüsü oluşmaz.",
                  "Sayfa kendi ışığını ürettiği için görülür.",
                  "Net görüntü oluşturmayan her yüzey tüm ışığı geçirir."
            ],
            "correct": 1,
            "explanation": "Bir yüzeyin görünmesi için ondan gelen ışığın göze ulaşması gerekir. Kitap sayfası ışığı farklı yönlere yansıtır; net ayna görüntüsü oluşmaması yansımanın yokluğu anlamına gelmez."
      },
      {
            "id": "f6-1-t6-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir mağazada geniş bir alanı gözetlemek, bir bakım aynasında ise yakındaki yüzün ayrıntılarını büyük görmek isteniyor.\n\nİki amaç için sırasıyla hangi aynalar seçilmelidir?",
            "options": [
                  "Düz – tümsek",
                  "Çukur – düz",
                  "Tümsek – düz",
                  "Tümsek – çukur"
            ],
            "correct": 3,
            "explanation": "Tümsek aynalar geniş görüş alanı sağlar ve küçük düz görüntü verir. Çukur aynalar yeterince yakındaki cismi büyük ve düz gösterebildiğinden ayrıntı incelemek için kullanılabilir. Düz ayna görüntüyü büyütmez."
      },
      {
            "id": "f6-1-t6-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci, yüzey pürüzlülüğünün yansımaya etkisini araştırırken düz folyoya güçlü bir ışık kaynağını eğik, buruşturulmuş folyoya zayıf bir ışık kaynağını dik gönderiyor.\n\nDaha güvenilir bir karşılaştırma için hangi düzenleme yapılmalıdır?",
            "options": [
                  "Aynı kaynaktan gelen ışıklar aynı açıyla gönderilmeli; değişen özellik yüzey pürüzlülüğü olmalıdır.",
                  "Kaynak aynı seçilmeli, ışıklar farklı açılarla gönderilmelidir.",
                  "Gelme açıları eşitlenmeli, güçlü ve zayıf kaynaklar korunmalıdır.",
                  "Kaynaklar ve açılar değiştirilmeden iki folyonun yerleri değiştirilmelidir."
            ],
            "correct": 0,
            "explanation": "İlk düzende yüzeyle birlikte kaynak ve gelme açısı da değişmiştir. Pürüzlülüğün etkisini ayırt etmek için bu diğer koşullar aynı tutulmalıdır. Yansıyan ışınların yönleri ve oluşan görüntü özellikleri karşılaştırılabilir."
      }
],

    test7: [
      {
            "id": "f6-1-t7-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Yalnız dış yüzey renkleri farklı olan özdeş kutular aynı ışık altında eşit süre tutuluyor. Başlangıç sıcaklıkları ve diğer koşullar aynıdır. Sonuçlar görselde verilmiştir.\n\nVeriler hangi yorumu destekler?",
            "options": [
                  "Beyaz kutu ışık enerjisinin tamamını soğurmuştur.",
                  "Siyah kutu kendi ışığını ürettiği için ısınmıştır.",
                  "Renk değişince kutuların başlangıç sıcaklığı da değişmiştir.",
                  "Bu koşullarda siyah yüzey daha fazla ışık enerjisi soğurmuş olabilir."
            ],
            "correct": 3,
            "explanation": "Başlangıçları eşitken siyah kutunun sıcaklık artışı 14°C, beyazınki 5°C olmuştur. Diğer koşullar eşit olduğundan fark, yüzeylerin ışığı farklı miktarda soğurmasıyla açıklanabilir. Beyaz yüzey de bir miktar enerji soğurabilir.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/fen/test-7/soru-01.svg",
            "imageAlt": "Aynı ışık altındaki siyah ve beyaz kutular. İkisi önce 20°C; sonra siyah 34°C, beyaz 25°C."
      },
      {
            "id": "f6-1-t7-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı malzemeden yapılmış levhaların rengine bağlı ısınma farkı araştırılıyor. Düzeneklerin ışık kaynağı ve ışık alma açıları aynı; diğer özellikleri görseldedir.\n\nYalnız yüzey renginin etkisini incelemek için hangi ikili seçilmelidir?",
            "options": [
                  "I ve II",
                  "I ve III",
                  "II ve IV",
                  "III ve IV"
            ],
            "correct": 0,
            "explanation": "I ile II yalnız renk bakımından farklıdır; uzaklık ve süre eşittir. Diğer çiftlerde uzaklık ya da süre de değiştiğinden sonuç yalnız renge bağlanamaz.",
            "imageWidth": 360,
            "imageHeight": 440,
            "imageUrl": "/grade6/fen/test-7/soru-02.svg",
            "imageAlt": "I siyah 30 cm 5 dk; II beyaz 30 cm 5 dk; III beyaz 60 cm 5 dk; IV siyah 30 cm 10 dk. Levhalar ve ilk sıcaklıklar aynı."
      },
      {
            "id": "f6-1-t7-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Renkli bir Newton çarkı önce dururken, sonra hızla dönerken, sonra yeniden durdurularak gözleniyor. Görünümler şekilde verilmiştir.\n\nBu üç gözlem birlikte hangi çıkarımı destekler?",
            "options": [
                  "Çark dönerken üzerindeki boyalar kalıcı olarak beyaza dönüşür.",
                  "Çarkın hareketi renkli ışığı tamamen soğurur.",
                  "Farklı renklerden gelen ışık hızlı dönüşte birlikte algılanarak beyaza yakın görünebilir.",
                  "Çark durunca yeniden renklenmesi yeni boya oluştuğunu gösterir."
            ],
            "correct": 2,
            "explanation": "Newton çarkında farklı renklerden gelen ışık hızlı dönüşte birlikte algılanabilir ve çark beyaza yakın görünür. Durduğunda renklerin yeniden seçilmesi, boyaların kalıcı değişmediğini gösterir. Bu gözlem beyaz ışığın farklı ışık renklerinin bileşimiyle ilişkisini destekler.",
            "imageWidth": 360,
            "imageHeight": 440,
            "imageUrl": "/grade6/fen/test-7/soru-03.svg",
            "imageAlt": "Üç gözlem: duran çark renkli dilimlere ayrılmış; hızlı dönen çark beyaza yakın; yeniden duran çarkın aynı renkli dilimleri seçiliyor."
      },
      {
            "id": "f6-1-t7-04",
            "subject": "fen",
            "term": 1,
            "prompt": "İdeal modelde K yüzeyi yalnız kırmızı ışığı, L yüzeyi ise üzerine düşen tüm görünür ışık renklerini yansıtır. İkisine de önce yalnız kırmızı, sonra yalnız mavi ışık gönderiliyor. Başka ışık yoktur.\n\nMavi ışığa geçildiğinde K ve L nasıl görünür?",
            "options": [
                  "K mavi, L siyah",
                  "K siyah, L mavi",
                  "K kırmızı, L beyaz",
                  "K siyah, L beyaz"
            ],
            "correct": 1,
            "explanation": "K yalnız kırmızı ışığı yansıtır; gelen ışıkta kırmızı bulunmayınca modelde siyah görünür. L mavi ışığı yansıtır ve mavi görünür. Beyaz yüzey, her aydınlatmada beyaz görünmek zorunda değildir.",
            "imageWidth": 360,
            "imageHeight": 440,
            "imageUrl": "/grade6/fen/test-7/soru-04.svg",
            "imageAlt": "İki ayrı aydınlatma paneli: kırmızı ve mavi ışık, nötr K ve L yüzey simgelerine geliyor. Altta K kırmızı yüzey, L beyaz yüzey olarak tanımlanıyor; simgeler gözlenen rengi göstermez."
      },
      {
            "id": "f6-1-t7-05",
            "subject": "fen",
            "term": 1,
            "prompt": "İdeal modelde beyaz ışık opak bir yüzeye geliyor. Şemada yeşil ışığın yansıdığı, diğer renklerin ise yüzey içinde soğurulduğu gösteriliyor. Yüzey kendi ışığını üretmiyor.\n\nBu modele göre yüzey yalnız kırmızı ışıkla aydınlatılırsa görünümü ve nedeni ne olur?",
            "options": [
                  "Siyah görünür; kırmızı ışığı soğurur ve yansıtacak yeşil ışık gelmez.",
                  "Yeşil görünür; kırmızı ışığı yeşil ışığa dönüştürür.",
                  "Kırmızı görünür; bütün yüzeyler gelen ışığın rengini mutlaka yansıtır.",
                  "Beyaz görünür; ışık rengi değişince tüm renkleri üretir."
            ],
            "correct": 0,
            "explanation": "Modelde yüzey yalnız yeşil ışığı yansıtır. Yalnız kırmızı ışık geldiğinde bu ışığı soğurur; göze yansıyan yeşil ışık bulunmadığı için ideal modelde siyah görünür.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-7/soru-05.svg",
            "imageAlt": "Beyaz ışık opak yüzeye geliyor; yüzeyden göze yeşil ışık oku gidiyor. Alt yazıda diğer renklerin soğurulduğu belirtiliyor."
      },
      {
            "id": "f6-1-t7-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir güneşle su ısıtma düzeneğinin iki tasarımı karşılaştırılıyor. Borular, su miktarı, başlangıç sıcaklığı, yalıtım ve ışık koşulları aynı. K mat siyah, L ışığı büyük ölçüde geri yansıtan parlak yüzeylidir.\n\nSuyu ısıtma amacı için hangi seçim ve gerekçe uygundur?",
            "options": [
                  "L; soğurulan enerji azaldıkça su daha çok ısınır.",
                  "K; siyah yüzey yalnız karanlıkta enerji soğurur.",
                  "L; yansıyan ışığın tamamı kendiliğinden suya döner.",
                  "K; daha fazla soğurulan ışık enerjisi suyun ısınmasına katkı sağlayabilir."
            ],
            "correct": 3,
            "explanation": "Güneşle su ısıtıcılarında soğurucu yüzey ışık enerjisini alır ve enerji suya aktarılır. Diğer koşullar eşitse daha çok soğuran yüzey bu amaca uygundur. Bu düzenek doğrudan elektrik üretmek için modellenmemiştir.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/fen/test-7/soru-06.svg",
            "imageAlt": "Aynı borulu iki toplayıcıya güneş ışığı geliyor. K mat siyah soğurucu, L parlak yansıtıcı. Su boruları her ikisinde aynı."
      },
      {
            "id": "f6-1-t7-07",
            "subject": "fen",
            "term": 1,
            "prompt": "İdeal modelde beyaz kartın üstünde yalnız kırmızı ışığı yansıtan kırmızı bir şekil vardır. Önce yalnız kırmızı, sonra yalnız mavi ışıkla aydınlatılıyor; başka ışık yoktur.\n\nŞekil ile zemin arasındaki renk farkının daha belirgin olması hangi aydınlatmada beklenir?",
            "options": [
                  "Kırmızı; şekil kırmızı, zemin beyaz kalır.",
                  "Mavi; şekil siyah, zemin mavi görünür.",
                  "Mavi; şekil kırmızı, zemin mavi görünür.",
                  "İkisinde de şekil ve zemin mutlaka aynı görünür."
            ],
            "correct": 1,
            "explanation": "Kırmızı ışıkta hem kırmızı şekil hem beyaz zemin kırmızıyı yansıtır. Mavi ışıkta beyaz zemin mavi görünür; kırmızı şekil modelde maviyi soğurarak siyah görünür. Bu nedenle ikinci durumda renk farkı belirginleşir.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/fen/test-7/soru-07.svg",
            "imageAlt": "Beyaz kart üzerinde kırmızı üçgen. Ayrı iki aydınlatma: yalnız kırmızı ışık ve yalnız mavi ışık. Kartın beyaz ışık altındaki renkleri gösteriliyor."
      },
      {
            "id": "f6-1-t7-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci “Güneşte siyah tişörtüm daha çok ısınıyor; bu nedenle her siyah cisim, her beyaz cisimden her koşulda daha sıcaktır.” diyor.\n\nBu genelleme neden doğru değildir?",
            "options": [
                  "Siyah yüzeyler ışık enerjisi soğuramaz.",
                  "Renk tek başına sıcaklığı kesin belirler; ışık miktarı önemsizdir.",
                  "Sıcaklık malzeme, başlangıç sıcaklığı ve ortam koşullarından da etkilenir; adil karşılaştırma gerekir.",
                  "Beyaz cisimler hiçbir koşulda ısınamaz."
            ],
            "correct": 2,
            "explanation": "Renk soğurmayı etkileyebilir; ancak her koşulda sıcaklığı tek başına belirlemez. Malzeme, ışık miktarı, süre ve başlangıç sıcaklığı gibi etkenler eşitlenmeden kesin bir renk-sıcaklık sıralaması yapılamaz."
      },
      {
            "id": "f6-1-t7-09",
            "subject": "fen",
            "term": 1,
            "prompt": "İdeal modelde dört yüzey vardır: beyaz yüzey gelen tüm görünür renkleri; kırmızı yalnız kırmızıyı; mavi yalnız maviyi yansıtır. Siyah yüzey bu renkleri soğurur. Bilinmeyen yüzey yalnız kırmızı ışıkta siyah, yalnız mavi ışıkta mavi görülüyor.\n\nYüzey hangisidir ve beyaz ışık altında nasıl görünür?",
            "options": [
                  "Beyazdır; beyaz görünür.",
                  "Kırmızıdır; kırmızı görünür.",
                  "Siyahtır; siyah görünür.",
                  "Mavidir; mavi görünür."
            ],
            "correct": 3,
            "explanation": "Kırmızı ışıkta siyah görünmesi beyaz ve kırmızı yüzeyleri eler. Mavi ışıkta mavi görünmesi siyah yüzeyi de eler. Mavi yüzey beyaz ışığın içindeki maviyi yansıtır ve mavi görünür."
      },
      {
            "id": "f6-1-t7-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir okul çatısında iki ihtiyaç için güneş enerjisi kullanılacaktır: I, temizlik için suyu ısıtmak; II, elektrikli bir lambaya enerji sağlamak.\n\nİki ihtiyaca uygun sistem ve enerji dönüşümü hangi seçenekte birlikte doğrudur?",
            "options": [
                  "I: ısıl toplayıcıyla suyu ısıtma; II: fotovoltaik panelle elektrik üretme.",
                  "I: fotovoltaik panelin borularındaki suyu doğrudan ısıtma; II: yalnız su deposuyla elektrik üretme.",
                  "I ve II: yalnız ışığı geri yansıtan bir levha, başka düzenek gerekmez.",
                  "I: ısıl toplayıcı; II: fotovoltaik panel; fakat iki sistem de yalnız ısı üretir."
            ],
            "correct": 0,
            "explanation": "Isıl toplayıcı ışık enerjisinden suyun ısınması için yararlanır. Fotovoltaik panel ise elektrik üretir. Aynı enerji kaynağının kullanılması iki sistemin aynı enerji dönüşümünü yaptığı anlamına gelmez."
      }
],

  },
  term2: {},
};
