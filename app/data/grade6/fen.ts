import { SubjectData } from "./types";

// 6. sınıf başlangıç paketi: İlk iki ünite; üreme, büyüme, gelişme ve denetleyici sistemler, ışığın yansıması, aynalar, soğurulma, renkler, genleşme, hâl değişim noktaları ve yoğunluk ile elektrik iletimi ve dirençten seçmeler.
// FB.6.1.1–FB.6.1.4, FB.6.2.1–FB.6.2.3, FB.6.3.1–FB.6.3.4 ve FB.6.3.6–FB.6.3.8 ve FB.6.4.1–FB.6.4.7 ve FB.6.5.1–FB.6.5.5 ve FB.6.6.1–FB.6.6.3; tüm yılı kapsamaz.
// Kaynaklar: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/411
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/412
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/413
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/414
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

    test8: [
      {
            "id": "f6-1-t8-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Metal küre başlangıçta halkadan geçiyor. Yalnız küre ısıtıldığında geçmiyor; küre ilk sıcaklığına soğutulunca yeniden geçiyor. Halka değişmeden kalıyor, maddeden parça kopmuyor.\n\nBuna göre kürenin ısıtılmış durumdaki hacmi ve kütlesi, ilk durumuyla nasıl karşılaştırılır?",
            "options": [
                  "Hacmi ve kütlesi artmıştır.",
                  "Hacmi artmış, kütlesi değişmemiştir.",
                  "Hacmi değişmemiş, kütlesi artmıştır.",
                  "Hacmi azalmış, kütlesi değişmemiştir."
            ],
            "correct": 1,
            "explanation": "Isınan kürenin genleşmesi hacmini artırır ve geçişi engelleyebilir. Madde eklenmediği veya kaybolmadığı için kütlesi değişmez. Soğuyunca yeniden geçebilmesi büzülmeyle uyumludur.",
            "imageWidth": 360,
            "imageHeight": 450,
            "imageUrl": "/grade6/fen/test-8/soru-01.svg",
            "imageAlt": "Üç aşama: başlangıçta küçük küre halkadan geçer; ısıtılan küre büyür ve geçmez; soğutulan küre yeniden geçer. Boyut değişimi abartılmıştır."
      },
      {
            "id": "f6-1-t8-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı metal rayların uçları arasında şekildeki gibi boşluk bırakılmıştır. Hava ısındığında rayların sıcaklığı artıyor; raylar erimiyor.\n\nBoşluğun değişimi ve bırakılma amacı hangisidir?",
            "options": [
                  "Boşluk büyür; rayların genleşmesine pay bırakır.",
                  "Boşluk küçülür; metallerin genleşmesini tamamen durdurur.",
                  "Boşluk küçülür; rayların genleşmesi için pay sağlar.",
                  "Boşluk değişmez; rayın her bölümü aynı oranda uzar."
            ],
            "correct": 2,
            "explanation": "Isınan raylar uzayarak uçlar arasındaki boşluğu daraltabilir. Boşluk genleşmeye pay bırakarak zorlanma ve şekil bozulması riskini azaltır. Bu durum bir hâl değişimi değildir.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-8/soru-02.svg",
            "imageAlt": "İki metal rayın uçları arasında boşluk; soğuk ve daha sıcak durumlar karşılaştırılmış. Sıcak durumda boşluk daha dar; şema ölçekli değildir."
      },
      {
            "id": "f6-1-t8-03",
            "subject": "fen",
            "term": 1,
            "prompt": "İki farklı saf metal çubuğun genleşme miktarı karşılaştırılacak. Başlangıç sıcaklıkları ve uzunlukları eşit; ikisi de aynı son sıcaklığa getiriliyor. Son uzunluklar görselde verilmiştir.\n\nBu deney için hangi çıkarım doğrudur?",
            "options": [
                  "K daha çok uzamıştır; yalnız bu ölçüm K’nin eridiğini kanıtlar.",
                  "L daha çok uzamıştır; K hiç genleşmemiştir.",
                  "İkisi de aynı miktarda uzamıştır; ilk boyları eşittir.",
                  "K daha çok uzamıştır; eşit sıcaklık değişimi her maddede eşit uzama oluşturmayabilir."
            ],
            "correct": 3,
            "explanation": "Başlangıçları 1000 mm iken K 1003, L 1001 mm olmuştur. Uzamalar 3 ve 1 mm’dir. Aynı sıcaklık değişiminde farklı maddelerin genleşme miktarları farklı olabilir; erime sonucu çıkarılamaz.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-8/soru-03.svg",
            "imageAlt": "K ve L başlangıçta 1000 mm. Eşit sıcaklık artışından sonra K 1003 mm, L 1001 mm. Uzama farkı şemada büyütülmüş."
      },
      {
            "id": "f6-1-t8-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Başlangıçta tamamen katı olan saf bir madde sabit basınçta ısıtılıyor. Grafikte B–C boyunca erimenin sürdüğü, C’de tamamlandığı gözlenmiştir. Isı verme bu aralıkta kesilmiyor.\n\nB–C aralığı için hangi yorum doğrudur?",
            "options": [
                  "Erime sürerken sıcaklık sabittir; madde ısı alır ve katı ile sıvı birlikte bulunur.",
                  "Sıcaklık sabit olduğundan madde hiç ısı almamıştır.",
                  "Madde B’de tamamen gaz olmuş, C’de katılaşmıştır.",
                  "Isı verildiği için her anda sıcaklık artmak zorundadır."
            ],
            "correct": 0,
            "explanation": "Saf madde sabit basınçta erirken aldığı enerji hâl değişimine gider; sıcaklığı sabit kalabilir. Erime sürerken katı ve sıvı birlikte bulunur. C noktasında erime tamamlanır.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-8/soru-04.svg",
            "imageAlt": "Sıcaklık-zaman grafiği A 20°C’den B 40°C’ye yükselir, B–C 40°C’de yatay, C’den D 60°C’ye yükselir. Isıtma sürüyor."
      },
      {
            "id": "f6-1-t8-05",
            "subject": "fen",
            "term": 1,
            "prompt": "Saf X maddesi sıvı hâlden başlayarak sabit basınçta soğutuluyor. Grafikte K–L aralığında donduğu gözlenmiştir. Aynı X katısı aynı basınçta yeniden ısıtılacaktır.\n\nX’in erime noktası ve K–L boyunca çevreyle enerji alışverişi nasıl olmalıdır?",
            "options": [
                  "Erime noktası 80°C; donarken çevreden ısı alır.",
                  "Erime noktası 60°C; donarken çevreye ısı verir.",
                  "Erime noktası 40°C; donarken enerji alışverişi olmaz.",
                  "Erime noktası 60°C; donarken çevreden ısı alır."
            ],
            "correct": 1,
            "explanation": "Aynı saf maddenin aynı basınçta erime ve donma noktaları eşittir. Donma grafikte 60°C’de gerçekleşir. Donarken madde çevreye ısı verir; sıcaklığın sabit kalması enerji alışverişinin durduğu anlamına gelmez.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-8/soru-05.svg",
            "imageAlt": "Soğutma grafiği 80°C’den K 60°C’ye iner, K–L 60°C’de yatay, ardından 40°C’ye iner. K–L’de donma gözleniyor."
      },
      {
            "id": "f6-1-t8-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı saf sıvının farklı miktarları, aynı basınç altında özdeş açık kaplarda ısıtılmıştır. Kaplarda sıvı kaldığı sürece kaynama sıcaklıkları ölçülmüştür.\n\nVeriler hangi sonucu destekler?",
            "options": [
                  "Madde miktarı artınca kaynama noktası zorunlu olarak yükselir.",
                  "İki kap aynı sıcaklığa ulaştığı için sıvı miktarları gerçekte eşittir.",
                  "Madde miktarı tek başına kaynama noktasını değiştirmez; kaynamaya ulaşma süresi aynı olmak zorunda değildir.",
                  "Kaynama sırasında sıvılar ısı alamaz."
            ],
            "correct": 2,
            "explanation": "Aynı saf sıvı aynı basınçta aynı kaynama noktasına sahiptir. Miktar farklılığı ısıtma süresini etkileyebilir; kaynama noktası ile kaynamaya ulaşma süresi farklı kavramlardır.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-8/soru-06.svg",
            "imageAlt": "K kabı 100 g, L kabı 200 g aynı saf sıvı. İkisi kaynarken termometre 80°C. Basınç aynı; örnek veri."
      },
      {
            "id": "f6-1-t8-07",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı basınçta ölçülmüş saf K, L, M maddelerinin erime ve kaynama noktaları tabloda verilmiştir. Katı X örneğinin erime noktası 30°C, kaynama noktası 120°C ölçülüyor.\n\nX, yalnız bu üç aday arasından seçilecekse hangi maddeyle eşleşir ve neden?",
            "options": [
                  "K; yalnız erime noktasının eşit olması her zaman yeterlidir.",
                  "L; yalnız kaynama noktası eşleşmektedir.",
                  "M; erime noktası farklı olsa da kaynama noktası yeterlidir.",
                  "L; iki ölçülen özellik de L ile eşleşmektedir."
            ],
            "correct": 3,
            "explanation": "X’in erime noktası K ve L ile aynıdır, fakat kaynama noktası K’den farklıdır. Her iki veri L ile eşleşir. Bu çıkarım yalnız verilen üç aday ve aynı basınç koşulu için yapılmıştır.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-8/soru-07.svg",
            "imageAlt": "Tablo sütunları: madde, erime, kaynama. K: 30°C, 90°C; L: 30°C, 120°C; M: 50°C, 120°C. Ölçümler aynı basınçta."
      },
      {
            "id": "f6-1-t8-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci farklı miktarlarda iki saf maddeyi farklı güçlü ısıtıcılarla ısıtıyor. Daha önce kaynayanın kaynama noktasının daha düşük olduğunu söylüyor.\n\nBu sonuca neden yalnız kaynama süresinden ulaşılamaz?",
            "options": [
                  "Miktar ve ısıtıcı gücü süreyi etkiler; kaynama noktası için sıcaklık ölçülmelidir.",
                  "Daha güçlü ısıtıcı saf maddenin kaynama noktasını her zaman yükseltir.",
                  "Farklı miktarlar aynı kaynama noktasına sahip olamaz.",
                  "İlk kaynayanın sıcaklığı ölçülmeden de daha düşük kaynama noktalı olduğu kesindir."
            ],
            "correct": 0,
            "explanation": "Kaynamaya ulaşma süresi miktar, başlangıç sıcaklığı ve aktarılan enerji gibi etkenlere bağlıdır. Kaynama noktalarını karşılaştırmak için aynı basınçta kaynama sıcaklıkları ölçülmelidir."
      },
      {
            "id": "f6-1-t8-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Saf bir katının erime sıcaklığı ölçülürken termometrenin ucu ısıtılan kabın tabanına değdiriliyor. Öğrenci görülen en yüksek değeri erime noktası olarak kaydediyor.\n\nDaha güvenilir ölçüm için ne yapılmalıdır?",
            "options": [
                  "Daha güçlü ısıtıcı kullanılıp yine en yüksek değer yazılmalıdır.",
                  "Termometre çıkarılmalı, yalnız katının miktarı tartılmalıdır.",
                  "Termometre kaba değmeden maddeyle uygun temas etmeli; erime sürerken kararlı sıcaklık izlenmelidir.",
                  "Erime bitip sıvı kaynayana kadar beklenmeli, kaynama sıcaklığı yazılmalıdır."
            ],
            "correct": 2,
            "explanation": "Kabın tabanına temas ölçümün madde yerine daha sıcak tabandan etkilenmesine yol açabilir. Termometre uygun yerleştirilerek saf maddenin sabit basınçta erime sürecindeki sıcaklığı izlenir. En yüksek sıcaklık otomatik olarak erime noktası değildir."
      },
      {
            "id": "f6-1-t8-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Isıtılan bir katı metal çubuğun yalnız boyu uzuyor; başka bir kapta saf katı maddenin bir kısmı sıvıya dönüşüyor. İki olayda da madde eklenmiyor veya kaybolmuyor.\n\nOlayların türü ve kütleyle ilgili hangi değerlendirme doğrudur?",
            "options": [
                  "İkisi de erimedir; ikisinin kütlesi artar.",
                  "İlki genleşme, ikincisi erimedir; yalnız eriyenin kütlesi azalır.",
                  "İlki erime, ikincisi genleşmedir; kütleler değişmez.",
                  "İlki genleşme, ikincisi erimedir; kütleler değişmez."
            ],
            "correct": 3,
            "explanation": "Boyutun hâl değişmeden artması genleşme, katıdan sıvıya geçiş erimedir. Hiçbirinde madde eklenmediği veya kaybolmadığı için kütle değişmez. Hâl değişimi tek başına kütle kaybı değildir."
      }
],

    test9: [
      {
            "id": "f6-1-t9-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Kütlesi 54 g olan içi dolu bir taş, su dolu dereceli silindire tamamen batırılıyor. Taş çözünmüyor, su taşmıyor ve hava kabarcığı kalmıyor. Seviyeler görselde verilmiştir.\n\nTaşın yoğunluğu kaç g/cm³ olur?",
            "options": [
                  "0,83",
                  "1,2",
                  "2",
                  "2,7"
            ],
            "correct": 3,
            "explanation": "Taşın hacmi son ve ilk seviye farkıdır: 65 − 45 = 20 cm³. Yoğunluk 54 ÷ 20 = 2,7 g/cm³ olur. Son seviyenin tamamı taşın hacmi değildir.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-9/soru-01.svg",
            "imageAlt": "Dereceli silindirde önce 45 cm³ su, taş tamamen batınca 65 cm³ toplam seviye. Taşın kütlesi 54 g. Çizim ölçekli değildir."
      },
      {
            "id": "f6-1-t9-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Boş kabın ve içine 40 cm³ sıvı konmuş aynı kabın terazi okumaları görseldedir. Dökülme olmamıştır.\n\nSıvının yoğunluğu kaç g/cm³’tür?",
            "options": [
                  "2,75",
                  "2",
                  "0,75",
                  "3,5"
            ],
            "correct": 1,
            "explanation": "Sıvının kütlesi dolu kabın kütlesinden boş kabınki çıkarılarak bulunur: 110 − 30 = 80 g. Yoğunluk 80 ÷ 40 = 2 g/cm³’tür.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/fen/test-9/soru-02.svg",
            "imageAlt": "Boş kap terazi okuması 30 g; aynı kap ve 40 cm³ sıvı birlikte 110 g."
      },
      {
            "id": "f6-1-t9-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı sıcaklıkta ölçülen, içi dolu ve homojen K, L, M örneklerinin kütle ve hacimleri tabloda verilmiştir.\n\nYoğunlukların karşılaştırılması hangisidir?",
            "options": [
                  "K = M > L",
                  "L > K = M",
                  "K > L > M",
                  "K = L = M"
            ],
            "correct": 0,
            "explanation": "K için 30 ÷ 10 = 3, L için 80 ÷ 40 = 2, M için 60 ÷ 20 = 3 g/cm³ bulunur. En büyük kütleli örneğin en yoğun olması gerekmez.",
            "imageWidth": 360,
            "imageHeight": 340,
            "imageUrl": "/grade6/fen/test-9/soru-03.svg",
            "imageAlt": "Tablo: K 30 g ve 10 cm³; L 80 g ve 40 cm³; M 60 g ve 20 cm³."
      },
      {
            "id": "f6-1-t9-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Birbirine karışmayan ve tepkime vermeyen üç sıvı aynı kaba konup bekletiliyor. Kapların dara kütlesi çıkarılmış ölçümleri görselde verilmiştir. Sıcaklık aynıdır.\n\nDengeye geldiklerinde sıvıların üstten alta sıralaması nasıl olur?",
            "options": [
                  "B – C – A",
                  "A – B – C",
                  "A – C – B",
                  "C – A – B"
            ],
            "correct": 2,
            "explanation": "Yoğunluklar A: 40 ÷ 50 = 0,8; B: 60 ÷ 50 = 1,2; C: 50 ÷ 50 = 1 g/cm³’tür. Karışmayan sıvılarda daha az yoğun olan üstte bulunur. Sıra A, C, B olur.",
            "imageWidth": 360,
            "imageHeight": 370,
            "imageUrl": "/grade6/fen/test-9/soru-04.svg",
            "imageAlt": "Üç ayrı sıvı örneği: A 50 cm³ ve 40 g, B 50 cm³ ve 60 g, C 50 cm³ ve 50 g. Kap kütleleri dahil değil."
      },
      {
            "id": "f6-1-t9-05",
            "subject": "fen",
            "term": 1,
            "prompt": "Homojen ve içi dolu K cismi su yüzeyinde kısmen batmış olarak yüzüyor; L cismi ise suyun dibine batıyor. Cisimler suyla tepkime vermiyor, çözünmüyor ve üzerlerinde hava kabarcığı yoktur. K’den küçük bir parça koparılıp aynı suya bırakılıyor.\n\nParçanın durumu ve yoğunluk sıralaması hangisidir?",
            "options": [
                  "Parça batar; K > su > L.",
                  "Parça yüzer; L > su > K.",
                  "Parça askıda kalır; K = su < L.",
                  "Parça yüzer; su > L > K."
            ],
            "correct": 1,
            "explanation": "Aynı homojen maddeden kopan parçada kütle ve hacim birlikte azalır, yoğunluk değişmez. K sudan az yoğun olduğundan parçası da yüzer. L sudan daha yoğundur.",
            "imageWidth": 360,
            "imageHeight": 410,
            "imageUrl": "/grade6/fen/test-9/soru-05.svg",
            "imageAlt": "Su kabında K yüzeyde kısmen batmış, L dipte. K’den alınan küçük parça ayrı gösterilmiş; şekiller şematiktir."
      },
      {
            "id": "f6-1-t9-06",
            "subject": "fen",
            "term": 1,
            "prompt": "İçi dolu, homojen bir blok aynı sıcaklıkta kesiliyor. Başlangıç kütlesi 120 g, hacmi 40 cm³’tür. Kesilen parçanın kütlesi 30 g’dır; kesme sırasında madde kaybı yoktur.\n\nKalan bloğun hacmi ve yoğunluğu hangisidir?",
            "options": [
                  "10 cm³; 3 g/cm³",
                  "30 cm³; 4 g/cm³",
                  "40 cm³; 2,25 g/cm³",
                  "30 cm³; 3 g/cm³"
            ],
            "correct": 3,
            "explanation": "İlk yoğunluk 120 ÷ 40 = 3 g/cm³’tür. Kesilen 30 g parçanın hacmi 30 ÷ 3 = 10 cm³ olur. Kalan hacim 30 cm³, kütle 90 g; yoğunluk yine 3 g/cm³’tür.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-9/soru-06.svg",
            "imageAlt": "Başlangıç bloğu 120 g, 40 cm³. Bir parça ayrılmış ve 30 g olarak etiketlenmiş. Şema ölçekli değildir."
      },
      {
            "id": "f6-1-t9-07",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı su örneği, madde kaybı olmadan tamamen donduruluyor. Yaklaşık örnek değerler görselde verilmiştir.\n\nVerilerin desteklediği yoğunluk değişimi ve doğadaki sonucu hangisidir?",
            "options": [
                  "Yoğunluk artar; buz suyun dibine çöker.",
                  "Yoğunluk değişmez; hacim artışı etkisizdir.",
                  "Yoğunluk azalır; buzun yüzeyde kalması alttaki suyun sıvı kalmasına katkı sağlar.",
                  "Yoğunluk azalır; göldeki bütün suyun kesinlikle aynı anda donmasını sağlar."
            ],
            "correct": 2,
            "explanation": "Kütle 90 g kalırken hacim 90 cm³’ten 100 cm³’e çıkar. Yoğunluk 1’den 0,9 g/cm³’e düşer. Buzun sıvı sudan daha az yoğun olması yüzeyde kalmasını sağlar; yüzeydeki buz tabakası alttaki suyun ısı kaybını yavaşlatabilir.",
            "imageWidth": 360,
            "imageHeight": 410,
            "imageUrl": "/grade6/fen/test-9/soru-07.svg",
            "imageAlt": "Aynı örnek: sıvı su 90 g, 90 cm³; buz 90 g, 100 cm³. Sayılar yaklaşık örnek değerlerdir, şekiller ölçekli değildir."
      },
      {
            "id": "f6-1-t9-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci 60 g’lık katıyı suya tamamen batırıyor. Su seviyesi 50 cm³’ten 70 cm³’e yükseliyor. Öğrenci yoğunluğu 60 ÷ 70 işlemiyle hesaplıyor. Katı suda çözünmüyor, su taşmıyor ve hava kabarcığı kalmıyor.\n\nHatanın sonucu ve doğru yoğunluk hangisidir?",
            "options": [
                  "Yoğunluğu olduğundan küçük bulur; doğru değer 3 g/cm³’tür.",
                  "Yoğunluğu olduğundan büyük bulur; doğru değer 3 g/cm³’tür.",
                  "İşlemi doğrudur; doğru değer yaklaşık 0,86 g/cm³’tür.",
                  "Yoğunluğu küçük bulur; doğru değer 1,2 g/cm³’tür."
            ],
            "correct": 0,
            "explanation": "Katının hacmi 70 − 50 = 20 cm³’tür. Doğru yoğunluk 60 ÷ 20 = 3 g/cm³’tür. Hacim yerine daha büyük olan 70 sayısını kullanmak yoğunluğu olduğundan küçük gösterir."
      },
      {
            "id": "f6-1-t9-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı sıcaklıktaki iki homojen, içi dolu cismin kütlesi 40’ar gramdır. K’nin hacmi 20 cm³, L’nin hacmi 50 cm³’tür. İkisi yoğunluğu 1 g/cm³ olan suya bırakılıyor. Çözünme, tepkime veya hava kabarcığı yoktur.\n\nBeklenen durum hangisidir?",
            "options": [
                  "K ve L eşit kütleli olduklarından ikisi de yüzer.",
                  "K yüzer, L batar.",
                  "İkisi de askıda kalır.",
                  "K batar, L yüzer."
            ],
            "correct": 3,
            "explanation": "K’nin yoğunluğu 40 ÷ 20 = 2 g/cm³ olup sudan büyüktür; K batar. L’nin yoğunluğu 40 ÷ 50 = 0,8 g/cm³ olup sudan küçüktür; L yüzer. Eşit kütle, eşit yoğunluk demek değildir."
      },
      {
            "id": "f6-1-t9-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı saf sıvıdan, aynı sıcaklıkta iki örnek alınıyor. Birinci örneğin kütlesi 60 g ve hacmi 50 cm³’tür. İkinci örneğin hacmi 150 cm³’tür.\n\nİkinci örneğin beklenen kütlesi ve yoğunluğu hangisidir?",
            "options": [
                  "60 g; 0,4 g/cm³",
                  "180 g; 1,2 g/cm³",
                  "180 g; 3,6 g/cm³",
                  "120 g; 0,8 g/cm³"
            ],
            "correct": 1,
            "explanation": "Aynı saf sıvının aynı sıcaklıktaki yoğunluğu miktarla değişmez: 60 ÷ 50 = 1,2 g/cm³. Hacim üç katına çıktığından kütle de üç katına çıkar: 180 g."
      }
],

    test10: [
      {
            "id": "f6-1-t10-01",
            "subject": "fen",
            "term": 1,
            "prompt": "Pille çalışan sağlam test devresinin X aralığına maddeler sırayla yerleştiriliyor. Temaslar uygun, diğer koşullar aynı. Bakır tel takılınca ampul yanıyor; kuru plastik takılınca yanmıyor.\n\nBu gözlemlere göre hangi sonuç ve kontrol doğrudur?",
            "options": [
                  "Bakır yalıtkandır; plastik denemesinde pil çıkarılmalıdır.",
                  "Plastik de kesin iletkendir; ampulün yanmaması önemli değildir.",
                  "Bakır bu devrede iletkendir; bakırla yanması devrenin çalıştığını da gösterir.",
                  "Ampul yanmadığında bunun tek olası nedeni her zaman maddenin yalıtkanlığıdır."
            ],
            "correct": 2,
            "explanation": "Bakır tel devreyi iletken bir yolla tamamlar. Bilinen iletkenle ampulün yanması pil, ampul ve bağlantıların çalıştığına ilişkin kontrol sağlar. Temas ve devre kontrol edilmeden her yanmama sonucuna kesin yalıtkanlık denemez.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/fen/test-10/soru-01.svg",
            "imageAlt": "Kapalı çevrimli pil ve ampul devresinde üst kolda X test aralığı. Bakır ve kuru plastik sırayla bu aralığa bağlanır."
      },
      {
            "id": "f6-1-t10-02",
            "subject": "fen",
            "term": 1,
            "prompt": "Tablodaki teller, aynı pil ve ampulün bulunduğu devrede sırayla deneniyor. Sıcaklık ve bağlantılar aynı tutuluyor.\n\nTel uzunluğunun parlaklığa etkisini araştırmak için hangi iki tel seçilmeli ve hangi ampul daha parlak yanmalıdır?",
            "options": [
                  "I ve II; I ile kurulan devredeki.",
                  "I ve III; III ile kurulan devredeki.",
                  "II ve IV; II ile kurulan devredeki.",
                  "I ve II; II ile kurulan devredeki."
            ],
            "correct": 0,
            "explanation": "I ve II yalnız uzunluk bakımından farklıdır. Aynı cins ve kesitli kısa telin direnci daha azdır; diğer koşullar aynıyken I ile ampul daha parlak yanar.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-10/soru-02.svg",
            "imageAlt": "Tablo: I bakır 20 cm ince; II bakır 40 cm ince; III bakır 20 cm kalın; IV demir 40 cm ince."
      },
      {
            "id": "f6-1-t10-03",
            "subject": "fen",
            "term": 1,
            "prompt": "Aynı maddeden yapılmış K, L ve M telleri aynı sıcaklıkta, aynı pil ve ampulle ayrı ayrı deneniyor. Tellerin özellikleri görseldedir. Diğer bağlantılar değişmiyor.\n\nAmpul parlaklığının büyükten küçüğe sırası hangisidir?",
            "options": [
                  "K > M > L",
                  "L > K > M",
                  "L > M > K",
                  "M > L > K"
            ],
            "correct": 3,
            "explanation": "L, K ile aynı uzunlukta fakat daha kalındır; bu nedenle daha az dirençlidir. M, L ile aynı kalınlıkta fakat daha kısadır ve direnci daha azdır. Parlaklık sırası M, L, K olmalıdır.",
            "imageWidth": 360,
            "imageHeight": 370,
            "imageUrl": "/grade6/fen/test-10/soru-03.svg",
            "imageAlt": "K uzun ve ince; L aynı uzunlukta kalın; M L ile aynı kalınlıkta fakat daha kısa tel. Tüm teller aynı maddeden."
      },
      {
            "id": "f6-1-t10-04",
            "subject": "fen",
            "term": 1,
            "prompt": "Şemadaki reostanın yalnız A ucu ve sürgüsü devreye bağlıdır; B ucu bağlı değildir. Sürgü P’den Q’ya getiriliyor. Pil, ampul ve diğer koşullar değişmiyor.\n\nDevreye katılan tel uzunluğu ve ampul parlaklığı nasıl değişir?",
            "options": [
                  "Tel uzar; ampul daha parlak yanar.",
                  "Tel kısalır; ampul daha parlak yanar.",
                  "Tel kısalır; ampul daha sönük yanar.",
                  "Tel değişmez; parlaklık değişmez."
            ],
            "correct": 1,
            "explanation": "Akım yolu A ile sürgü arasındaki bölümü kullanır. Q, A’ya P’den daha yakındır; devreye katılan tel kısalır ve direnç azalır. Ampul daha parlak yanar.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/fen/test-10/soru-04.svg",
            "imageAlt": "Reosta teli A solda B sağda. Q A’ya yakın, P daha uzakta. A ile sürgü pil ve ampullü devreye bağlı; B bağlantısız."
      },
      {
            "id": "f6-1-t10-05",
            "subject": "fen",
            "term": 1,
            "prompt": "Eşit uzunluk ve kesitteki K ve L telleri aynı sıcaklıkta, aynı pil ve ampulle deneniyor. Tek fark telin cinsidir. K ile ampul daha parlak, L ile daha sönük yanıyor.\n\nHangi sonuç deneyle desteklenir?",
            "options": [
                  "K’nin direnci L’den küçüktür; telin cinsi parlaklığı etkileyebilir.",
                  "K’nin direnci daha büyüktür; parlaklık direnç arttıkça artar.",
                  "L kesinlikle yalıtkandır; çünkü ampul daha sönüktür.",
                  "K ve L’nin dirençleri eşittir; pil aynı olduğu için fark olamaz."
            ],
            "correct": 0,
            "explanation": "Aynı koşullarda daha parlak yanan devrede telin direnci daha küçüktür. L ile ampulün yanması L’nin de ilettiğini gösterir; sönük yanmak yalıtkan olmakla aynı değildir.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-10/soru-05.svg",
            "imageAlt": "Aynı pil ve ampul kullanılıyor. K teliyle parlak, L teliyle sönük ışık. Tel uzunluk ve kesitleri eşit; cinsleri farklı."
      },
      {
            "id": "f6-1-t10-06",
            "subject": "fen",
            "term": 1,
            "prompt": "Görseldeki kabloda K metal iç kısım, L plastik dış kaplamadır. Başka bir kabloda aynı metalden daha uzun fakat aynı kesitte bir K kullanılıyor; plastik kaplamanın yapısı değişmiyor. Sıcaklık aynıdır.\n\nYeni kablo için hangi iki yorum birlikte doğrudur?",
            "options": [
                  "Metal daha uzun olduğu için direnci azalır; plastik iletken olur.",
                  "Metalin direnci değişmez; yalıtımı metal sağlar.",
                  "Metalin direnci artar; plastik kaplamanın yalıtım görevi sürer.",
                  "Metalin direnci artar; bu nedenle plastik mutlaka iletken olur."
            ],
            "correct": 2,
            "explanation": "Aynı cins ve kesitte metal tel uzadığında direnci artar. Dıştaki plastik yalıtım amacıyla kullanılır; metalin uzaması plastiği iletken yapmaz. Gerçek elektrik tesisatında hasarlı kaplamaya dokunulmamalıdır.",
            "imageWidth": 360,
            "imageHeight": 350,
            "imageUrl": "/grade6/fen/test-10/soru-06.svg",
            "imageAlt": "Kablo kesiti: ortadaki metal bölüm K; onu saran plastik kaplama L."
      },
      {
            "id": "f6-1-t10-07",
            "subject": "fen",
            "term": 1,
            "prompt": "Dört tel aynı sıcaklıkta, aynı pil ve ampulle sırayla deneniyor. Şekilde telin uzunluğu ve kalınlığı değiştiriliyor; hepsi aynı maddeden.\n\nK telinin yerine hangisi takılırsa ampulün daha parlak yanacağı kesin olarak söylenebilir?",
            "options": [
                  "L; daha uzun ve daha incedir.",
                  "M; daha uzun ve daha kalındır.",
                  "L ve M; ikisi de uzundur.",
                  "N; daha kısa ve daha kalındır."
            ],
            "correct": 3,
            "explanation": "N’de hem kısalma hem kalınlaşma direnci azaltma yönünde etki eder. L’de iki değişim de direnci artırır. M’de uzama ve kalınlaşma zıt etkili olduğundan yalnız nitel bilgilerle kesin karşılaştırma yapılamaz.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/fen/test-10/soru-07.svg",
            "imageAlt": "K orta uzunluk ve kalınlıkta; L daha uzun ince; M daha uzun kalın; N daha kısa kalın. Şema nitel karşılaştırmadır."
      },
      {
            "id": "f6-1-t10-08",
            "subject": "fen",
            "term": 1,
            "prompt": "Bir öğrenci bakır telin yerine demir tel takınca ampulün sönükleştiğini gözlüyor. Ancak demir tel hem daha uzun hem daha incedir.\n\nFarkı yalnız telin cinsine bağlamak için deney nasıl düzenlenmelidir?",
            "options": [
                  "Yalnız uzunluk eşitlenmeli; kesitlerin farklı olması önemli değildir.",
                  "Tellerin uzunluğu ve kesiti eşitlenmeli; diğer devre koşulları ve sıcaklık aynı tutulmalıdır.",
                  "Yalnız kesit eşitlenmeli; farklı tel uzunlukları korunmalıdır.",
                  "Bakır telin kullanıldığı devreye daha fazla pil eklenerek parlaklıklar eşitlenmelidir."
            ],
            "correct": 1,
            "explanation": "İlk deneyde cins, uzunluk ve kesit birlikte değişmiştir. Cinsin etkisini ayırt etmek için diğer özellikler sabit tutulmalıdır. Parlaklık farkı tek değişkene bağlanabilmelidir."
      },
      {
            "id": "f6-1-t10-09",
            "subject": "fen",
            "term": 1,
            "prompt": "Pilli bir devrede ampul yanmıyor. Denenen maddeyi çıkarmadan önce öğrenciler pilin bitmiş olduğunu fark ediyor.\n\nBu denemeden maddenin iletkenliği hakkında hangi değerlendirme yapılmalıdır?",
            "options": [
                  "Madde kesin yalıtkandır; pilin durumu sonucu etkilemez.",
                  "Madde kesin iletkendir; bitmiş pil bunu kanıtlar.",
                  "Madde kesin sınıflandırılamaz; çalışan devre kontrol edildikten sonra yeniden denenmelidir.",
                  "Ampul yanmıyorsa bütün maddeler yalıtkan kabul edilmelidir."
            ],
            "correct": 2,
            "explanation": "Çalışmayan pil, iletken bir madde kullanılsa bile ampulün yanmasını engelleyebilir. Bu nedenle önce sağlam devre bilinen iletkenle kontrol edilir, sonra örnek aynı koşullarda denenir."
      },
      {
            "id": "f6-1-t10-10",
            "subject": "fen",
            "term": 1,
            "prompt": "Pilli bir devrede reostanın devreye katılan tel uzunluğu önce artırılıyor, sonra başlangıçtaki değerine getiriliyor. Pil ve ampul değişmiyor, sıcaklık aynı tutuluyor; temaslar sağlamdır.\n\nAmpulün parlaklığı ve reostanın direnci için hangi yorum doğrudur?",
            "options": [
                  "Önce direnç artıp parlaklık azalır; başlangıca dönülünce ilk parlaklık yeniden elde edilir.",
                  "Önce direnç azalıp parlaklık artar; başlangıca dönülünce ampul yanmaz.",
                  "Tel uzayınca iletken yalıtkana dönüşür; geri dönüş bunu değiştirmez.",
                  "Direnç artar ama devre tamamlandığı sürece parlaklık değişmez."
            ],
            "correct": 0,
            "explanation": "Devreye katılan tel uzayınca direnç artar ve ampul sönükleşir. Tel uzunluğu ve diğer koşullar ilk değerlerine döndüğünde direnç ve parlaklık da ilk durumuna döner. Reosta kullanımı, telin yalıtkana dönüşmesi değildir."
      }
],
    test11: [
      {
        "id": "f6-1-t11-01",
        "subject": "fen",
        "term": 1,
        "prompt": "Şekilde Ay, Dünya'nın tam gölgesinin içindedir. P, Dünya'nın gece tarafındaki bir gözlemci; R, Ay'ın Dünya'ya bakan yüzeyindeki bir kameradır. P'de Ay ufkun üzerindedir ve hava açıktır. R kamerası Dünya'nın bulunduğu yöne çevrilmiştir.\n\nBu anda P'nin gözlemi ve R'nin kaydı için hangisi doğrudur?",
        "options": [
          "P: Ay tutulması. R: Güneş, Dünya tarafından örtülmez.",
          "P: Ay tutulması. R: Güneş, Dünya tarafından örtülür.",
          "P: Güneş tutulması. R: Güneş, Dünya tarafından örtülmez.",
          "P: Güneş tutulması. R: Güneş, Dünya tarafından örtülür."
        ],
        "correct": 1,
        "explanation": "Dünya, Güneş ile Ay arasındadır ve Ay, Dünya'nın tam gölgesindedir. Dünya'daki P gözlemcisi bu olayı Ay tutulması olarak gözler. Ay yüzeyindeki R kamerası ise Güneş yönüne baktığında arada Dünya'yı görür; Güneş, Dünya tarafından örtülür. İki kayıt aynı gök cisimleri dizilişinin farklı yerlerden görünümüdür. Ay tutulmasında Ay'ın tamamen görünmez olması gerekmez.",
        "imageUrl": "/grade6/fen/test-11/soru-01.svg",
        "imageWidth": 360,
        "imageHeight": 560,
        "imageAlt": "Ölçekli olmayan tutulma şemasında yukarıdan aşağıya Güneş, Dünya ve Ay aynı doğrultudadır. Dünya'nın Güneş'e dönük üst tarafı aydınlık, Ay'a dönük alt tarafı gecedir. Dünya'nın arkasına uzanan tam gölge bölgesi Ay'ın tamamını içine alır. P, Dünya'nın Ay'a bakan gece yüzünde işaretlenmiştir. R, Ay'ın Dünya'ya bakan yüzeyindeki kameradır; kameranın bakış oku Dünya'ya doğrudur. Gök cisimleri, P, R ve tam gölge etiketlenmiştir."
      },
      {
        "id": "f6-1-t11-02",
        "subject": "fen",
        "term": 1,
        "prompt": "K ve L düzeneklerinde arabalara etki eden yatay kuvvetlerin tamamı gösterilmiştir; sürtünme yoktur. K'deki araba, kuvvetler uygulanırken durmaya devam ediyor. F kuvveti, L'de büyüklüğü değiştirilmeden batıya uygulanıyor. L'deki araba o anda doğuya hareket etmektedir.\n\nL'deki bileşke kuvvet ve araba henüz durmamışken kısa bir süre içindeki hareket değişimi hangisidir?",
        "options": [
          "Doğuya 6 N; araba hızlanır.",
          "Batıya 16 N; araba yavaşlar.",
          "Batıya 6 N; araba hızlanır.",
          "Batıya 6 N; araba yavaşlar."
        ],
        "correct": 3,
        "explanation": "K'de araba durmaya devam ettiğine ve başka yatay kuvvet bulunmadığına göre yatay kuvvetler dengededir. Batıya uygulanan toplam kuvvet 4 + 7 = 11 N olduğundan doğuya uygulanan F de 11 N'dur. L'de batıya 11 N, doğuya 5 N vardır; bileşke 11 − 5 = 6 N batıya yönelir. Araba doğuya hareket ederken bileşke ters yönde olduğu için henüz durmadan önceki sürede yavaşlar.",
        "imageUrl": "/grade6/fen/test-11/soru-02.svg",
        "imageWidth": 360,
        "imageHeight": 590,
        "imageAlt": "İki ayrı yatay kuvvet düzeneği vardır. Üstte K arabasına batıya 4 N ve 7 N, doğuya F kuvvetleri uygulanır; K için durmaya devam ediyor yazılıdır. Altta L arabasına batıya F, doğuya 5 N kuvvetleri uygulanır. L'nin üzerinde kuvvet oklarından farklı kesik bir ok, doğuya hareket yönünü gösterir. Batı solda, doğu sağdadır. Kuvvet oklarının boyları ölçekli değildir."
      },
      {
        "id": "f6-1-t11-03",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı türden onar tohum K ve L gruplarına ayrılıyor. İlk aşamada hiçbiri çimlenmiyor. Aynı tohumlarla sürdürülen ikinci aşamada yalnız K'nin sıcaklığı 25°C'ye çıkarılıyor, L'nin ortamı ise nemlendiriliyor. Her iki aşamada da tohumlar karanlıkta ve hava alabilen ortamdadır; aşamaların gözlem süreleri eşittir. Sonuçlar görseldedir.\n\nBu kayıtlardan hangi çıkarım yapılabilir?",
        "options": [
          "İlk aşamada çimlenme görülmemesi, tohumların tümünün ölü olduğunu kanıtlamaz.",
          "İlk aşamada iki gruptaki çimlenmeyi de yalnız düşük sıcaklık engellemiştir.",
          "İkinci aşamada K'nin su koşulu, L'nin sıcaklığı değiştirilmiştir.",
          "İkinci aşamadaki çimlenme, ışığın çimlenme için zorunlu olduğunu kanıtlar."
        ],
        "correct": 0,
        "explanation": "İkinci aşamada aynı gruplardaki tohumların sekizer tanesi çimlenmiştir. Bu tohumlar ilk aşamada da canlı oldukları hâlde çimlenmemiştir; ilk aşamadaki sonuç tek başına bütün tohumların ölü olduğunu göstermez. Çimlenme için su, uygun sıcaklık ve hava gibi koşullar gerekir. K'de sıcaklık, L'de su koşulu değiştirilmiştir. L ilk aşamada da 25°C'dedir ve deney boyunca ışık verilmemiştir; bu nedenle diğer seçenekler kayıtlarla uyuşmaz.",
        "imageUrl": "/grade6/fen/test-11/soru-03.svg",
        "imageWidth": 360,
        "imageHeight": 580,
        "imageAlt": "İki aşamalı tohum gözlem tablosu. K grubunda birinci aşama: nemli, 5°C, 10 tohumdan 0'ı çimlenmiş; ikinci aşama: nemli, 25°C, 10 tohumdan 8'i çimlenmiş. L grubunda birinci aşama: kuru, 25°C, 10 tohumdan 0'ı çimlenmiş; ikinci aşama: nemli, 25°C, 10 tohumdan 8'i çimlenmiş. İlk aşamadaki kaplarda tohum, ikinci aşamadaki kaplarda filiz simgeleri vardır. Sonuçların çimlenen tohum sayısını gösterdiği belirtilmiştir."
      },
      {
        "id": "f6-1-t11-04",
        "subject": "fen",
        "term": 1,
        "prompt": "Şekilde A'dan gönderilen ışık O noktasındaki düz aynadan yansıyarak B'ye ulaşıyor. Daha sonra ışık kaynağı B'ye taşınıyor ve ışık, B'den O'ya aynı yol boyunca gönderiliyor. Ayna ve normalin konumu değişmiyor.\n\nBu ikinci durumda ışık O'dan hangi yöne yansır ve normalle yaptığı yansıma açısı kaç derece olur?",
        "options": [
          "A yönüne; 50°.",
          "B yönüne; 40°.",
          "A yönüne; 40°.",
          "Normal boyunca yukarıya; 0°."
        ],
        "correct": 2,
        "explanation": "İlk durumda gelme açısı 40° olduğundan yansıma açısı da 40°'dir; OB yolu normalle 40° yapar. Kaynak B'ye taşınıp ışık BO boyunca gönderildiğinde yeni gelme açısı yine 40° olur. Yansıyan ışık normalin diğer yanında 40° yaparak OA yolu boyunca A'ya gider. 50°, ışın ile ayna yüzeyi arasındaki açıdır; yansıma açısı normalden ölçülür.",
        "imageUrl": "/grade6/fen/test-11/soru-04.svg",
        "imageWidth": 360,
        "imageHeight": 460,
        "imageAlt": "İlk durumun ışık yolu gösterilmiştir. Altta yatay düz ayna, aynanın üzerindeki O noktasında yukarı uzanan kesik normal vardır. A sol üstte, B sağ üsttedir. Işık oku A'dan O'ya gelir ve O'dan B'ye gider. AO ışını ile normal arasındaki açı 40° olarak etiketlidir. Normalin aynaya dik olduğu küçük dik açı işaretiyle gösterilir. İkinci durum çizilmemiştir."
      },
      {
        "id": "f6-1-t11-05",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı basınçtaki K ve L kaplarında aynı saf X maddesi vardır. Başlangıçta ikisi de 40°C'dir; K'de katı ve sıvı birlikte, L'de yalnız sıvı bulunur. İki örneğe de ısı veriliyor. İncelenen kısa süre boyunca K'de bir miktar katı kalıyor, L ise kaynama sıcaklığına ulaşmıyor. Bu modelde buharlaşma ve çevreye ısı kaybı ihmal ediliyor.\n\nBu sürede K ve L'nin sıcaklıkları nasıl değişir?",
        "options": [
          "İkisinin de sıcaklığı artar.",
          "K'nin sıcaklığı değişmez, L'nin sıcaklığı artar.",
          "K'nin sıcaklığı artar, L'nin sıcaklığı değişmez.",
          "İkisinin de sıcaklığı değişmez."
        ],
        "correct": 1,
        "explanation": "Saf X'in erime sıcaklığı 40°C'dir. K'de katı ve sıvı birlikte bulunurken erime sürer; verilen ısı hâl değişiminde kullanılır ve katı tamamen bitene kadar sıcaklık 40°C'de kalır. L'de madde zaten tamamen sıvıdır. Modelde buharlaşma ihmal edilir ve kaynama sıcaklığı olan 90°C'ye henüz ulaşılmadığı için kaynama başlamamıştır. L'deki sıvının aldığı ısıyla sıcaklığı artar. Başlangıç sıcaklıklarının eşit olması, maddelerin aynı hâlde bulunduğu veya ısıtılınca aynı sıcaklık değişimini göstereceği anlamına gelmez.",
        "imageUrl": "/grade6/fen/test-11/soru-05.svg",
        "imageWidth": 360,
        "imageHeight": 540,
        "imageAlt": "Saf X maddesinin özellik kartında erime sıcaklığı 40°C, kaynama sıcaklığı 90°C yazılıdır. Başlangıç durumunda yan yana K ve L kapları gösterilir. K'de katı parçalar ve sıvı birlikte, L'de yalnız sıvı vardır. Her kabın termometresi 40°C'yi gösterir. K'nin altında katı + sıvı, L'nin altında sıvı yazılıdır. Sonraki ısıtma durumları çizilmemiştir."
      },
      {
        "id": "f6-1-t11-06",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı dereceli kaptaki suya önce K cismi, ardından K çıkarılmadan L cismi tamamen batırılıyor. Su eklenmiyor; taşma, çözünme, tepkime veya hava kabarcığı oluşmuyor. Cisimlerin su dışında ölçülen kütleleri ve kaptaki seviyeler görselde verilmiştir.\n\nL cisminin yoğunluğu kaç g/cm³'tür?",
        "options": [
          "1",
          "1,2",
          "3",
          "4"
        ],
        "correct": 2,
        "explanation": "K ile L'nin toplam kütlesi 120 g, yalnız K'nin kütlesi 30 g olduğundan L'nin kütlesi 120 − 30 = 90 g'dır. K kapta kalırken L eklendiği için 100 − 70 = 30 cm³'lük seviye artışı yalnız L'nin hacmidir. L'nin yoğunluğu 90 ÷ 30 = 3 g/cm³ olur. 100 cm³, L'nin tek başına hacmi değildir.",
        "imageUrl": "/grade6/fen/test-11/soru-06.svg",
        "imageAlt": "Aynı dereceli kabın iki durumu alt alta gösteriliyor. İlk durumda suda tamamen batmış K cismi varken seviye 70 cm³. İkinci durumda K çıkarılmadan L de tamamen batırılmış ve seviye 100 cm³. Su dışında ölçülen kütleler: K 30 g, K ve L birlikte 120 g. İki çizimde de cisimler tamamen suyun içinde.",
        "imageWidth": 360,
        "imageHeight": 580
      },
      {
        "id": "f6-1-t11-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Pille çalışan sağlam bir devrede kullanılan 30 cm'lik tel, düz hâlden görseldeki kıvrımlı hâle getiriliyor. Tel gerilmiyor veya incelmiyor; telin tamamı her iki durumda da devreye katılıyor. Kıvrılan bölümler birbirine değmiyor. Pil, ampul, bağlantılar ve sıcaklık aynı kalıyor.\n\nTelin uçları birbirine yaklaştığına göre direnç ve ampul parlaklığı için hangi yorum doğrudur?",
        "options": [
          "Uçlar arası uzaklık azaldığından telin direnci azalır, ampul daha parlak yanar.",
          "Tel kıvrıldığı için direnci artar, ampul daha sönük yanar.",
          "Telin toplam uzunluğu aynı kaldığından direnci değişmez, ampul daha parlak yanar.",
          "Devreye katılan telin uzunluğu ve kalınlığı değişmediğinden direnç ve ampul parlaklığı değişmez."
        ],
        "correct": 3,
        "explanation": "Direnci değerlendirirken telin iki ucu arasındaki düz uzaklık değil, devreye katılan telin kendi uzunluğu dikkate alınır. Telin tamamı yine 30 cm'dir; cinsi, kalınlığı ve sıcaklığı da değişmemiştir. Tel bölümleri birbirine değmediği için daha kısa bir iletim yolu oluşmaz. Bu koşullarda telin direnci ve aynı devredeki ampulün parlaklığı değişmez.",
        "imageUrl": "/grade6/fen/test-11/soru-07.svg",
        "imageAlt": "Pilli test devresinde bir ampul ve X ile işaretli tel bölümü gösteriliyor. X bölümünde kullanılan aynı telin iki biçimi altta verilmiş: I durumunda düz telin toplam uzunluğu 30 cm; II durumunda uçları birbirine yaklaşmış, U biçiminde kıvrılmış telin toplam uzunluğu yine 30 cm. Kıvrımlı telin farklı bölümleri birbirine değmiyor. Ampulün parlaklığına ilişkin bir gösterge bulunmuyor.",
        "imageWidth": 360,
        "imageHeight": 580
      },
      {
        "id": "f6-1-t11-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir modelde H hormonu bir iç salgı bezinden kana veriliyor. P, R ve S organlarına ulaşan kanda H hormonu bulunuyor. Ancak hormonun incelenen etkisi yalnız R organında gözleniyor.\n\nBu kayıtlar hangi yorumu destekler?",
        "options": [
          "Bir hormon kanla farklı organlara ulaşsa da bu organların hepsinde aynı etkiyi oluşturmak zorunda değildir.",
          "Bir organda etki gözlenmemesi, o organa hiç hormon taşınmadığını kanıtlar.",
          "Bir hormon yalnızca salgılandığı bezde etkili olabilir.",
          "R organında etki görülmesi, hormonun buraya kan yerine yalnız sinirlerle taşındığını gösterir."
        ],
        "correct": 0,
        "explanation": "H hormonu P, R ve S'ye ulaşan kanda bulunduğu hâlde incelenen etki yalnız R'de gözlenmiştir. Bu model, hormonun kanla taşınması ile ulaştığı organda belirli bir etki oluşturmasının farklı şeyler olduğunu gösterir. Hormonun ulaştığı her organın aynı yanıtı vermesi gerekmez. Bu gözlemden P ve S'nin hiçbir koşulda hiçbir hormona yanıt vermeyeceği sonucu çıkarılamaz."
      },
      {
        "id": "f6-1-t11-09",
        "subject": "fen",
        "term": 1,
        "prompt": "İdeal bir modelde opak yeşil levha, üzerine gelen yeşil ışığın tamamını yansıtıyor; diğer görünür ışık renklerini soğuruyor. Levha birinci denemede beyaz ışıkla, ikinci denemede yalnız yeşil ışıkla aydınlatılıyor. Her denemede levhaya gönderilen toplam ışık enerjisi eşittir ve başka ışık yoktur.\n\nLevhada görülen renk ve soğurulan ışık enerjisi için hangisi doğrudur?",
        "options": [
          "İkisinde de yeşil görünür; iki denemede eşit ışık enerjisi soğurur.",
          "Beyaz ışıkta beyaz, yeşil ışıkta yeşil görünür; iki denemede de ışık enerjisi soğurmaz.",
          "İkisinde de yeşil görünür; beyaz ışıkla aydınlatıldığında daha fazla ışık enerjisi soğurur.",
          "İkisinde de yeşil görünür; yalnız yeşil ışıkla aydınlatıldığında daha fazla ışık enerjisi soğurur."
        ],
        "correct": 2,
        "explanation": "Beyaz ışık farklı görünür renkleri içerir. Levha bunun yeşil bölümünü yansıtır, diğer renklerini soğurur; bu yüzden yeşil görünür ve ışık enerjisinin bir bölümünü soğurur. Yalnız yeşil ışık gönderildiğinde ise ideal model gereği gelen ışığın tamamını yansıtır, yine yeşil görünür fakat bu ışığı soğurmaz. Aynı renkte görünmesi, iki denemede aynı miktarda enerji soğurduğu anlamına gelmez."
      },
      {
        "id": "f6-1-t11-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı türden canlı tohumlar, her birinde 20 tohum bulunan iki gruba ayrılıyor. Bir grup 20°C'de, diğeri 25°C'de tutuluyor. Yeterli nem, hava alabilme ve diğer koşullar eşit tutuluyor. O güne kadar çimlenmiş tohumların toplam sayıları şöyle kaydediliyor:\n• 3. gün: 20°C'de 5, 25°C'de 14 tohum.\n• 10. gün: her iki grupta da 18 tohum.\n\nYalnız bu kayıtlara dayanarak hangi sonuca ulaşılabilir?",
        "options": [
          "25°C'deki grupta 10. günün sonunda daha fazla tohum çimlenmiştir.",
          "25°C'deki grupta 3. güne kadar daha çok tohum çimlenmiş olsa da 10. gündeki toplam çimlenmiş tohum sayıları eşittir.",
          "Çimlenen bütün tohumlar, iki sıcaklıkta da aynı gün çimlenmiştir.",
          "Bütün bitki türlerinde sıcaklık arttıkça çimlenen toplam tohum sayısı mutlaka artar."
        ],
        "correct": 1,
        "explanation": "Üçüncü güne kadar 25°C'de çimlenmiş tohum sayısı 14, 20°C'de 5'tir. Ancak onuncu gün her iki gruptaki toplam 18'e ulaşmıştır. Bu deneyde erken kayıttaki fark, son kayıtta daha fazla tohumun çimlenmiş olduğu anlamına gelmez. İki kayıt her bir tohumun hangi gün çimlendiğini göstermez; tek bir türle ve iki sıcaklıkla elde edilen sonuçlar bütün türlere ve tüm sıcaklıklara genellenemez."
      }
    ],
    test12: [
      {
        "id": "f6-1-t12-01",
        "subject": "fen",
        "term": 1,
        "prompt": "Görsel, uzaydan gelen bir kayaç parçasının zaman sıralı kaydını gösteriyor. K'de kayaç atmosferden geçerken parlak bir iz oluşuyor. L, aynı kayaçtan yeryüzüne ulaşan katı parçadır. Bir öğrenci bu kaydı 'Bir yıldız Dünya'ya düştü.' diye yorumluyor.\n\nÖğrencinin yorumunu düzelten doğru açıklama hangisidir?",
        "options": [
          "K'deki parlaklık gerçek bir yıldızın atmosfere girdiğini, L ise yıldızdan kalan parçayı gösterir.",
          "K'deki ışık olayına meteorit, L'deki katı parçaya meteor olayı denir.",
          "K'de meteor olayı görülür; L, yere ulaşan meteorit yani gök taşıdır. Düşen bir yıldız değildir.",
          "K'de meteor olayı görülür; bu nedenle kayaç tamamen yok olmuş ve L'ye hiçbir parçası ulaşmamıştır."
        ],
        "correct": 2,
        "explanation": "Uzaydan gelen bir kayaç atmosferle etkileşirken meteor adı verilen ışık olayı görülebilir. Kayaçtan yeryüzüne ulaşan parça meteorit, yani gök taşı olarak adlandırılır. Görselde L'nin bulunması, bu kayaç parçasının tamamının atmosferde yok olmadığını gösterir. Halk arasında kullanılan 'yıldız kayması' sözü, gerçek bir yıldızın yerinden kopup Dünya'ya düşmesi anlamına gelmez.",
        "imageUrl": "/grade6/fen/test-12/soru-01.svg",
        "imageWidth": 360,
        "imageHeight": 550,
        "imageAlt": "Yukarıdan aşağıya zaman sıralı kayıt: önce uzayda küçük bir kayaç; ardından atmosfer bölgesinde K ile işaretli, kayaç çevresinde oluşan parlak iz; en altta yeryüzüne ulaşmış L katı parçası. İnce yön okları kayacın izlediği yolu gösterir. Uzay, Atmosfer ve Yeryüzü bölgeleri yazıyla etiketlenmiştir. K'deki kayaç ile L'deki parça aynı kayaca aittir; çizim ölçekli değildir."
      },
      {
        "id": "f6-1-t12-02",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir cisme aynı yatay doğrultuda görseldeki dört kuvvet uygulanıyor. Başka yatay kuvvet yoktur. Yalnız bir kuvvetin yönü ters çevrilecek; kuvvetlerin büyüklükleri değişmeyecektir.\n\nBileşkenin batıya 7 N olması için hangi kuvvetin yönü ters çevrilmelidir?",
        "options": [
          "Doğuya uygulanan 5 N'luk kuvvetin.",
          "Doğuya uygulanan 4 N'luk kuvvetin.",
          "Doğuya uygulanan 3 N'luk kuvvetin.",
          "Batıya uygulanan 9 N'luk kuvvetin."
        ],
        "correct": 0,
        "explanation": "5 N'luk kuvvet batıya çevrilirse doğuya uygulanan toplam kuvvet 4 + 3 = 7 N, batıya uygulanan toplam kuvvet 9 + 5 = 14 N olur. Bileşke 14 − 7 = 7 N batıyadır. Yalnız 4 N ters çevrilirse bileşke batıya 5 N, yalnız 3 N ters çevrilirse batıya 3 N, yalnız 9 N ters çevrilirse doğuya 21 N olur. İstenen sonucu yalnız 5 N'luk kuvvetin yönünü değiştirmek sağlar.",
        "imageUrl": "/grade6/fen/test-12/soru-02.svg",
        "imageWidth": 360,
        "imageHeight": 500,
        "imageAlt": "Bir cisme etki eden dört yatay kuvvet gösterilmiştir. Doğuya, yani sağa doğru üç ayrı ok 4 N, 5 N ve 3 N olarak etiketlidir. Batıya, yani sola doğru bir ok 9 N olarak etiketlidir. Batı solda, Doğu sağda yazılıdır. Oklar aynı yatay doğrultuyu farklı yüksekliklerde temsil eder ve uzunlukları ölçekli değildir."
      },
      {
        "id": "f6-1-t12-03",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı türden benzer çiçekler K ve L gruplarına ayrılıyor. İki gruba da böceklerin ulaşması engelleniyor. Her iki grupta da tepeciğe başka yollardan polen ulaşması önleniyor; su, ışık, sıcaklık ve gözlem süresi aynı tutuluyor. K'nin tepeciğine aynı tür başka bir çiçekten polen taşıyan fırça, L'nin tepeciğine ise temiz bir fırça dokunduruluyor. Daha sonra K'de tohum oluşumu gözlenirken L'de gözlenmiyor.\n\nBu deneyin desteklediği sonuç hangisidir?",
        "options": [
          "Fırçanın çiçeğe dokunması, polen taşımasa da tohum oluşması için tek başına yeterlidir.",
          "K'deki tohumlar, fırçadaki polenlerin doğrudan büyüyerek birer tohuma dönüşmesiyle oluşmuştur.",
          "Tohum oluşabilmesi için çiçeğe mutlaka bir böceğin dokunması gerekir.",
          "Tozlaşma fırçayla sağlanabilir; böcek olmadan da tohum oluşumu görülebilir."
        ],
        "correct": 3,
        "explanation": "Polenlerin tepeciğe taşınması tozlaşmadır; K'de bu taşıma fırçayla yapılmıştır. Ardından tohum oluşmasının gözlenmesi, bu örnekte böcek teması olmadan da tozlaşmanın ve tohum oluşumuna giden süreçlerin gerçekleşebildiğini gösterir. L'ye de fırça dokundurulduğu hâlde tohum oluşmaması, yalnız mekanik temasın yeterli olmadığını destekler. Polen doğrudan büyüyüp tohuma dönüşmez; tozlaşma ile döllenme aynı olay değildir.",
        "imageUrl": "/grade6/fen/test-12/soru-03.svg",
        "imageWidth": 360,
        "imageHeight": 580,
        "imageAlt": "Üst üste iki gözlem paneli vardır. K panelinde polen noktaları taşıyan bir fırçanın çiçeğin tepeciğine dokunduğu gösterilir; Polenli fırça etiketi ve daha sonraki gözlem için Tohum var kaydı bulunur. L panelinde polen bulunmayan temiz bir fırça tepeciğe dokunur; Temiz fırça etiketi ve daha sonraki gözlem için Tohum yok kaydı vardır. Her iki panelde de zaman oku işlemden gözlem sonucuna doğrudur. Başka polen girişi yok notu iki grup için ortaktır."
      },
      {
        "id": "f6-1-t12-04",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir ışık kaynağının yeri değiştirilerek aynı düz aynanın aynı noktasına iki farklı yönden ışık gönderiliyor. Ayna ve normalin konumu değişmiyor. Gelme açısı birinci durumda 20°, ikinci durumda 50° oluyor. Yansıyan ışınlar görselde çizilmemiştir.\n\nBirinci durumdan ikinci duruma geçildiğinde yansıyan ışının yönü normale göre nasıl değişir?",
        "options": [
          "Normale 30° yaklaşır.",
          "Normalden 30° uzaklaşır.",
          "Normalden 70° uzaklaşır.",
          "Yönü değişmez."
        ],
        "correct": 1,
        "explanation": "Yansıma açısı her durumda gelme açısına eşittir ve normalden ölçülür. Bu nedenle yansıma açısı birinci durumda 20°, ikinci durumda 50° olur. Açı 50 − 20 = 30° arttığından yansıyan ışın normalden 30° uzaklaşır. İki açıyı toplamak değişimi vermez; aynanın yerinde kalması, gelen ışığın yönü değiştiğinde yansıyan ışığın yönünün de sabit kalacağı anlamına gelmez.",
        "imageUrl": "/grade6/fen/test-12/soru-04.svg",
        "imageWidth": 360,
        "imageHeight": 560,
        "imageAlt": "Aynı düz aynanın iki ayrı durumunu gösteren üst üste iki şema vardır. Her şemada yatay ayna, çarpma noktasından yukarı uzanan dik kesik normal ve sol üstten çarpma noktasına gelen bir ışık oku bulunur. Birinci durumda gelen ışın normalle 20°, ikinci durumda normalle 50° yapar. İkinci gelen ışın normale daha uzaktır. Aynalar ve normaller aynı yönlüdür; hiçbir yansıyan ışın çizilmemiştir."
      },
      {
        "id": "f6-1-t12-05",
        "subject": "fen",
        "term": 1,
        "prompt": "K'de açık kap ve içindekiler, L'de ise hava geçirmeyen kap, kapak ve içindekilerin tamamı başlangıçta ve bir süre sonra tartılıyor. İki kapta da su vardır; kaynama, sıçrama veya sızıntı olmuyor. L'nin başlangıçta kuru olan kapağının iç yüzünde sonradan su damlaları görülüyor; kapak, içindeki sudan daha serindir. L, iki ölçüm arasında açılmıyor.\n\nÖlçümler ve damlalar birlikte değerlendirildiğinde hangi açıklama doğrudur?",
        "options": [
          "K'de su buharlaşmıştır; L'nin toplam kütlesi değişmediği için L'de hâl değişimi gerçekleşemez.",
          "K'de su maddesi yok olmuştur; L'deki damlalar ise kapalı kapta yeni su üretildiğini gösterir.",
          "K'den su buharı çevreye geçmiştir; L'de buhar yoğuşarak damla oluştururken toplam kütle korunmuştur.",
          "K'nin kütlesi azalmaz, ölçüm yanlıştır; L'de damla oluştukça toplam kütle artmalıdır."
        ],
        "correct": 2,
        "explanation": "K'nin toplam kütlesi 100 g'dan 96 g'a düşmüştür. Kaynama olmasa da su buharlaşabilir; açık kaptan çevreye geçen su buharı artık terazideki sistemin içinde değildir. L'de ise su buharı daha serin kapağın iç yüzünde yoğuşup sıvı damlalar oluşturur. Kap, kapak ve içindekilerin tamamı birlikte tartıldığı ve dışarı madde çıkmadığı için toplam kütle 120 g olarak kalır. Toplam kütlenin değişmemesi, hâl değişiminin gerçekleşmediği anlamına gelmez.",
        "imageUrl": "/grade6/fen/test-12/soru-05.svg",
        "imageWidth": 360,
        "imageHeight": 590,
        "imageAlt": "Başlangıç ve sonra sütunlarından oluşan iki satırlı tartım kaydı. K satırında her iki anda açık su kabı vardır; kap ve içindekilerin toplam kütlesi başlangıçta 100 g, sonra 96 g'dır. L satırında her iki anda kapaklı su kabı vardır; kap, kapak ve tüm içindekilerin toplam kütlesi başlangıçta 120 g, sonra yine 120 g'dır. L'nin başlangıç kapağı kuru, sonraki kapağının iç yüzü damlalıdır. Kapağın daha serin olduğu kısa bir etiketle belirtilmiştir. Tüm okumalar g birimindedir."
      },
      {
        "id": "f6-1-t12-06",
        "subject": "fen",
        "term": 1,
        "prompt": "İçi dolu ve homojen K ile L cisimleri aynı X sıvısına bırakılıyor. K, yüzeyde kısmen batmış olarak yüzerken L dibe batıyor. Cisimler sıvıda çözünmüyor, tepkimeye girmiyor ve üzerlerinde hava kabarcığı bulunmuyor. Bütün ölçümler aynı sıcaklıkta yapılıyor.\n\nBu X sıvısından alınan 40 cm³'lük bir örneğin kütlesi aşağıdakilerden hangisi olabilir?",
        "options": [
          "40 g",
          "28 g",
          "52 g",
          "64 g"
        ],
        "correct": 0,
        "explanation": "K'nin yoğunluğu 24 ÷ 30 = 0,8 g/cm³, L'nin yoğunluğu 36 ÷ 30 = 1,2 g/cm³'tür. K kısmen batmış olarak yüzdüğünden X'in yoğunluğu 0,8'den büyük; L dibe battığından 1,2'den küçük olmalıdır. 40 cm³ sıvının kütlesi bu nedenle 32 g'dan büyük, 48 g'dan küçük olmalıdır. Seçeneklerden yalnız 40 g bu aralıktadır. Bu örnekte 40 ÷ 40 = 1 g/cm³ değeri her iki gözlemle de uyumludur.",
        "imageUrl": "/grade6/fen/test-12/soru-06.svg",
        "imageAlt": "K ve L cisimlerinin ölçümleri üstte iki kartta verilmiş: K'nin kütlesi 24 g, hacmi 30 cm³; L'nin kütlesi 36 g, hacmi 30 cm³. Alttaki tek kapta X sıvısı bulunuyor. K cismi sıvı yüzeyinin üstüne küçük bir bölümü çıkacak biçimde kısmen batmış olarak yüzüyor; L cismi kabın dibinde. Cisimler aynı büyüklükte küplerle gösterilmiş.",
        "imageWidth": 360,
        "imageHeight": 560
      },
      {
        "id": "f6-1-t12-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Pille çalışan devrede reostanın A ve B sabit uçları bağlı, S sürgüsünün ise dış devreye bağlantısı yoktur. S hareket ettirilince ampulün parlaklığı değişmiyor. Pil ve ampul sağlam; bağlantı temasları uygundur.\n\nA ucunun bağlantısı korunarak parlaklığın sürgüyle ayarlanması isteniyor. Hangi değişiklik yapılmalı ve bu değişiklikten SONRA S, A'dan uzaklaştırılırken parlaklık nasıl değişmelidir? Diğer koşullar ve sıcaklık sabittir.",
        "options": [
          "A ve B bağlantıları korunmalı; sürgü A'dan uzaklaştırılırken parlaklık artar.",
          "A ve B bağlantıları korunmalı; sürgü A'dan uzaklaştırılırken parlaklık azalır.",
          "B'deki kablo B'den çıkarılıp S'ye bağlanmalı; sürgü A'dan uzaklaştırılırken parlaklık artar.",
          "B'deki kablo B'den çıkarılıp S'ye bağlanmalı; sürgü A'dan uzaklaştırılırken parlaklık azalır."
        ],
        "correct": 3,
        "explanation": "Başlangıçta devreye A ile B arasındaki telin tamamı katılır. Dış devreye bağlı olmayan S'nin yerini değiştirmek bu uzunluğu değiştirmez. B'deki kablo B'den çıkarılıp S'ye bağlanınca devreye yalnız A ile S arasındaki tel katılır. Bu yeni bağlantıda S, A'dan uzaklaştıkça devreye katılan tel uzar; direnç artar ve ampul daha sönük yanar. Parlaklıktaki bu değişim, bağlantı düzeltildikten sonraki sürgü hareketine aittir.",
        "imageUrl": "/grade6/fen/test-12/soru-07.svg",
        "imageAlt": "Bir pil, bir ampul ve bir reostadan oluşan kapalı devre gösteriliyor. Reosta telinin sol sabit ucu A, sağ sabit ucu B olarak etiketli. A ve B'nin her biri devrenin bağlantı kablolarından birine bağlı. Telin orta bölümüne temas eden S sürgüsü üstte gösterilmiş; S'den dış devreye uzanan bir bağlantı kablosu yok. S'nin A ile B arasında hareket edebileceği çift yönlü okla belirtilmiş. Ampulün parlaklığını gösteren bir karşılaştırma bulunmuyor.",
        "imageWidth": 360,
        "imageHeight": 540
      },
      {
        "id": "f6-1-t12-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Basitleştirilmiş bir omurilik refleksi modeli iki aşamayla anlatılıyor:\n1. El, sıcak yüzeyden hızla çekiliyor.\n2. Kişi daha sonra acıyı bilinçli olarak fark ediyor.\nBir öğrenci, “İlk tepkiyi omurilik yönettiğine göre bu olayla ilgili bilgi beyne hiçbir zaman ulaşmaz.” diyor.\n\nHangi değerlendirme modeldeki iki aşamayla uyumludur?",
        "options": [
          "Öğrenci haklıdır; omurilikte işlenen bilgi beyne hiçbir şekilde iletilemez.",
          "İlk tepki için bilinçli karar gerekmemesi, olayla ilgili bilginin beyne de iletilmesini engellemez.",
          "İkinci aşama gerçekleşiyorsa ilk el çekme hareketi mutlaka önceden verilmiş bilinçli bir karardır.",
          "İlk tepki omurilikle gerçekleştiğine göre kasların hareketine sinirlerin katkısı yoktur."
        ],
        "correct": 1,
        "explanation": "Bu omurilik refleksi modelinde hızlı çekme tepkisi, önce bilinçli karar verilmesini gerektirmeden oluşur. İkinci aşamada acının bilinçli olarak fark edilmesi, olayla ilgili bilginin beyne de ulaştığını gösterir. Dolayısıyla ilk tepkinin omurilik tarafından yönetilmesi, beynin olaydan hiç haberdar olmayacağı anlamına gelmez. Bu açıklama verilen omurilik refleksine aittir; bütün reflekslerin aynı merkezde yönetildiği ileri sürülmez."
      },
      {
        "id": "f6-1-t12-09",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir öğrenci aynı biçimdeki kırmızı, mavi ve beyaz üç etiketi, yalnız görünen renklerine bakarak birbirinden ayırmak istiyor. İdeal modelde kırmızı etiket yalnız kırmızı ışığı, mavi etiket yalnız mavi ışığı, beyaz etiket ise bütün görünür ışık renklerini yansıtıyor. Etiketler yansıtmadıkları renkleri soğuruyor; ortamda seçilen kaynak dışında ışık bulunmuyor.\n\nAşağıdaki aydınlatmalardan hangisi üç etiketin de birbirinden farklı renkte görünmesini sağlar?",
        "options": [
          "Yalnız kırmızı ışık",
          "Yalnız mavi ışık",
          "Beyaz ışık",
          "Yalnız yeşil ışık"
        ],
        "correct": 2,
        "explanation": "Beyaz ışık altında etiketler sırasıyla kırmızı, mavi ve beyaz görünür; üçü renklerine göre ayırt edilebilir. Yalnız kırmızı ışıkta kırmızı ve beyaz etiket kırmızı; yalnız mavi ışıkta mavi ve beyaz etiket mavi görünür. Yalnız yeşil ışıkta ise kırmızı ve mavi etiket, bu ışığı yansıtmadıkları için siyah görünür. Bu yüzden verilen seçenekler arasında üç etiketi de ayıran aydınlatma beyaz ışıktır."
      },
      {
        "id": "f6-1-t12-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı tür tohumlarla yapılan iki çalışmada eşit gözlem süresi sonunda şu kayıtlar alınıyor:\n• A grubunda başlangıçtaki 20 tohumun 16'sı çimlenmiş.\n• B grubunda başlangıçtaki 50 tohumun 30'u çimlenmiş.\nBir öğrenci, “B'de daha çok tohum çimlendi; öyleyse B'nin çimlenme oranı daha yüksektir.” diyor.\n\nBu yorum nasıl değerlendirilmelidir?",
        "options": [
          "A'nın çimlenme oranı daha yüksektir; 16/20, 30/50'den büyüktür.",
          "B'nin çimlenme oranı daha yüksektir; 30, 16'dan büyüktür.",
          "Başlangıçtaki tohum sayıları farklı olduğu için çimlenme oranları hesaplanamaz.",
          "Aynı tür tohum kullanıldığı için iki grubun çimlenme oranları mutlaka eşittir."
        ],
        "correct": 0,
        "explanation": "Çimlenme oranı karşılaştırılırken çimlenen sayı, başlangıçtaki toplam tohum sayısıyla birlikte değerlendirilir. A'da 16/20 = 4/5 = %80, B'de 30/50 = 3/5 = %60'tır. B'de çimlenenlerin sayısı daha çok olsa da oran A'da daha yüksektir. Bu sonuç, belirtilen gözlem süresinin sonundaki bu iki gruba aittir; tek başına farkın nedenini veya bütün türlerde gelecekte alınacak sonuçları göstermez."
      }
    ],

    test13: [
      {
        "id": "f6-1-t13-01",
        "subject": "fen",
        "term": 1,
        "prompt": "Görselde üç farklı tarihte Güneş, Dünya ve Ay’ın konumları ve gölgelerin ulaştığı yerler kaydedilmiştir.\n\nBu kayıtların birlikte desteklediği yorum hangisidir?",
        "options": [
          "K ve L’de Ay arada olduğundan ikisinde de Güneş tutulması gerçekleşir; M’de Ay tutulması gerçekleşmez.",
          "K’de Güneş, M’de Ay tutulması gerçekleşebilir; L, Ay’ın arada olmasının tek başına tutulma için yeterli olmadığını gösterir.",
          "K’de Ay, M’de Güneş tutulması gerçekleşebilir; L’de iki tutulma da aynı anda gerçekleşir.",
          "K ile M’de tutulma gerçekleşebilir; bu iki olay da Dünya’nın gündüz tarafındaki her yerden gözlenir."
        ],
        "correct": 1,
        "explanation": "K’de Ay, Güneş ile Dünya arasındadır ve gölgesi Dünya’ya ulaşır; gölgenin ulaştığı uygun bölgelerden Güneş tutulması gözlenebilir. M’de Dünya aradadır ve Ay onun gölgesine girer; Ay tutulması gerçekleşir. L’de Ay arada olsa da gölgesi Dünya’yı tamamen ıskalar. Dolayısıyla yalnız cisimlerin sırası tutulma için yeterli değildir. Güneş tutulması gündüz tarafındaki her yerden, Ay tutulması ise gündüz tarafının tamamından gözlenmez.",
        "imageUrl": "/grade6/fen/test-13/soru-01.svg",
        "imageAlt": "K: Ay arada; Ay’ın gölgesi Dünya’ya ulaşıyor. L: Ay arada; Ay’ın gölgesi Dünya’yı tamamen ıskalıyor. M: Dünya arada; Ay, Dünya’nın gölgesine giriyor.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "f6-1-t13-02",
        "subject": "fen",
        "term": 1,
        "prompt": "Şekildeki cisme yatay doğrultuda yalnız gösterilen üç kuvvet etki ediyor. K ve L’nin yönleri değişmiyor; büyüklükleri bilinmiyor. İlk durumda bileşke doğuya 4 N’dir. İkinci durum ilk durumdan bağımsız olarak yeniden kuruluyor: İlk üç kuvvetten yalnız 6 N’luk kuvvet kaldırılıyor; başka kuvvet eklenmiyor.\n\nİlk durumdaki cismi dengelemek için gereken ek kuvvet ile ikinci durumdaki bileşke hangi seçenekte birlikte doğrudur?",
        "options": [
          "Ek kuvvet doğuya 4 N; ikinci bileşke batıya 2 N.",
          "Ek kuvvet batıya 4 N; ikinci bileşke doğuya 10 N.",
          "Ek kuvvet batıya 4 N; ikinci bileşke batıya 2 N.",
          "Ek kuvvet batıya 4 N; ikinci bileşke doğuya 2 N."
        ],
        "correct": 2,
        "explanation": "İlk bileşke doğuya 4 N olduğundan dengeleyici kuvvet batıya 4 N olmalıdır. İlk durumda doğuya K + 6, batıya L vardır; K + 6, L’den 4 N fazladır. Bu nedenle L, K’den 2 N büyüktür. 6 N doğu kuvveti kaldırılınca kalan K ve L’nin bileşkesi batıya 2 N olur.",
        "imageUrl": "/grade6/fen/test-13/soru-02.svg",
        "imageAlt": "Cisme K ve 6 N doğuya, L batıya uygulanıyor. İlk bileşke doğuya 4 N. İkinci durumda yalnız 6 N doğu kuvveti kaldırılıyor.",
        "imageWidth": 360,
        "imageHeight": 600
      },
      {
        "id": "f6-1-t13-03",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı türden, benzer özellikte canlı tohumlar eşit sayılı dört gruba rastgele ayrılıyor. Sıcaklık ve pamuk durumu görselde verilmiştir. Hava alabilme, ışık ve gözlem süresi aynıdır.\n\n“Nemli ortamda sıcaklığın etkisi” ile “25°C’de nemin etkisi” ayrı ayrı araştırılmak isteniyor. Hangi karşılaştırmalar bu iki amacı sırasıyla karşılar?",
        "options": [
          "K–M ve L–M",
          "K–L ve K–M",
          "L–N ve M–N",
          "K–L ve L–N"
        ],
        "correct": 0,
        "explanation": "K ve M’de pamuk nemlidir; yalnız sıcaklık 15°C ile 25°C olarak değişir. Bu çift, nemli ortamda sıcaklığı karşılaştırır. L ve M ise aynı 25°C sıcaklıktadır; yalnız kuru/nemli pamuk koşulu değişir. K–L’de iki değişken birlikte değişir. K–M ikinci amaç için kullanılamaz; sıcaklıkları farklıdır. L–N’de her iki grup da kurudur.",
        "imageUrl": "/grade6/fen/test-13/soru-03.svg",
        "imageAlt": "K: 15°C, nemli pamuk. L: 25°C, kuru pamuk. M: 25°C, nemli pamuk. N: 15°C, kuru pamuk.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "f6-1-t13-04",
        "subject": "fen",
        "term": 1,
        "prompt": "Üç ayrı düz ayna deneyinde ölçülen açılar görselde verilmiştir. Gelen ve yansıyan ışınlar normalin farklı tarafındadır. Ayna yüzeyi ile normal arasındaki açı 90°’dir.\n\nÖlçümlerin yansıma kanununa uygunluğu hangi seçenekte doğru değerlendirilmiştir?",
        "options": [
          "Yalnız K uygundur; L ve M’de verilen iki açı eşit değildir.",
          "K ve M uygundur; L’de yansıma açısı 60° olmalıydı.",
          "Üçü de uygundur; her deneyde verilen iki açı toplamı 90°’dir.",
          "K ve L uygundur; M’de yansıyan ışının normalle açısı 55° olmalıydı."
        ],
        "correct": 3,
        "explanation": "K’de gelen ışının ayna yüzeyiyle 30° yapması, normalle 60° yaptığı anlamına gelir; yansıma açısı 60° olduğundan uygundur. L’de gelme açısı 30°; yansıyan ışının yüzeyle 60° yapması da normalle 30° yapması demektir. M’de gelme açısı 90 − 35 = 55° olmalıdır; normalden ölçülen yansıma açısı 35° verilerek hata yapılmıştır.",
        "imageUrl": "/grade6/fen/test-13/soru-04.svg",
        "imageAlt": "K: gelen ışın–yüzey 30°, yansıyan ışın–normal 60°. L: gelen ışın–normal 30°, yansıyan ışın–yüzey 60°. M: gelen ışın–yüzey 35°, yansıyan ışın–normal 35°.",
        "imageWidth": 360,
        "imageHeight": 1160
      },
      {
        "id": "f6-1-t13-05",
        "subject": "fen",
        "term": 1,
        "prompt": "İçi dolu, homojen ve suda çözünmeyen K cismi suya tamamen batırıldığında ölçülen seviyeler görseldedir. Taşma ve hava kabarcığı yoktur. K, daha sonra eşit kütleli üç parçaya ayrılıyor. Parçalar şekil değişimi dışında özelliklerini koruyor; tüm işlemler aynı sıcaklıkta yapılıyor.\n\nBir parçanın kütlesi, hacmi ve yoğunluğu sırasıyla hangisidir?",
        "options": [
          "30 g; 15 cm³; 2 g/cm³",
          "30 g; 45 cm³; 2/3 g/cm³",
          "30 g; 15 cm³; 2/3 g/cm³",
          "90 g; 15 cm³; 6 g/cm³"
        ],
        "correct": 0,
        "explanation": "K’nin hacmi seviye artışı olan 85 − 40 = 45 cm³’tür. Yoğunluğu 90 ÷ 45 = 2 g/cm³ olur. Homojen cisim eşit kütleli üç parçaya ayrılınca her parça 30 g ve 15 cm³ olur. Kütle ile hacim aynı oranda azaldığından yoğunluk değişmez.",
        "imageUrl": "/grade6/fen/test-13/soru-05.svg",
        "imageAlt": "K’nin kütlesi 90 g. Başlangıçtaki su seviyesi 40 cm³, K tamamen batınca seviye 85 cm³. K üç eşit kütleli parçaya ayrılıyor.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "f6-1-t13-06",
        "subject": "fen",
        "term": 1,
        "prompt": "Başlangıçta tamamen sıvı olan saf X maddesinden farklı miktarlarda iki örnek, aynı sabit basınçta soğutuluyor. Görselde sıcaklığın sabit kaldığı donma aralıkları verilmiştir. İki örnek de aralığın sonunda tamamen katı oluyor.\n\nBir öğrenci, “L daha uzun sürede donduğuna göre L’nin donma noktası daha yüksektir.” diyor. Hangi değerlendirme doğrudur?",
        "options": [
          "Doğrudur; donma süresi arttıkça aynı saf maddenin donma sıcaklığı da artar.",
          "Yanlıştır; sıcaklık sabitken ısı verilmediğinden bu aralıklarda donma gerçekleşmiş olamaz.",
          "Yanlıştır; ikisi de 40°C’de donar. Sürelerinin farklı olması, donma noktalarının farklı olduğunu göstermez.",
          "Doğrudur; daha uzun süre sabit sıcaklıkta kalan örnek, sonunda mutlaka daha sıcak bir katı olur."
        ],
        "correct": 2,
        "explanation": "Donma noktası donma süresinden değil, saf maddenin donarken sabit kaldığı sıcaklıktan belirlenir. K ve L’nin bu sıcaklığı 40°C’dir. Madde miktarı ve ısının çevreye aktarılma koşulları donma süresini etkileyebilir; daha uzun süre, daha yüksek donma noktası demek değildir. Donarken sıcaklığın sabit kalması çevreye ısı verilmediği anlamına gelmez.",
        "imageUrl": "/grade6/fen/test-13/soru-06.svg",
        "imageAlt": "K örneği 2–4. dakikalar boyunca 40°C’de donuyor. L örneği 2–6. dakikalar boyunca 40°C’de donuyor. Aralıkların sonunda ikisi de tamamen katı.",
        "imageWidth": 360,
        "imageHeight": 800
      },
      {
        "id": "f6-1-t13-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Pille çalışan iletkenlik deneyinde, aynı iki bağlantı ucu arasına sırayla görseldeki parçalar yerleştiriliyor. Bakır telin iletken olduğu biliniyor. Öğrenci ikinci denemeden sonra “X kesinlikle yalıtkandır.” diyor; üçüncü denemede ise kayıt değişiyor.\n\nSon kayıt da dikkate alındığında en uygun değerlendirme ve sonraki işlem hangisidir?",
        "options": [
          "X kesinlikle yalıtkandır; çünkü ikinci denemede ampul yanmamıştır. Diğer kayıtları incelemek gerekmez.",
          "Son bakır denemesinde de ışık alınamaması, düzeneğin işleyişiyle ilgili sorun olabileceğini gösterir; devrenin çalıştığı doğrulanarak X yeniden sınanmalıdır.",
          "X kesinlikle iletkendir; çünkü üçüncü denemede bakır tel de ampulü yakamamıştır.",
          "X’in eklenmesi bakırın iletkenliğini kalıcı olarak değiştirmiştir; bakır yerine başka bir metal seçmek yeterlidir."
        ],
        "correct": 1,
        "explanation": "İletken olduğu bilinen bakır tel ilk denemede ampulü yakarken son denemede yakamamıştır. Pil, ampul veya bağlantı gibi düzenekle ilgili bir sorun bulunabilir; kayıtlardan sorunun tam olarak ne olduğu belirlenemez. Bu yüzden X denemesindeki ışık yokluğunu yalnız X’in yalıtkanlığına bağlamak kesin değildir. Önce çalışan düzenek ve uygun temas doğrulanmalı, X tekrar denenmelidir. Bu kayıtlar X’in kesin iletken olduğunu da göstermez.",
        "imageUrl": "/grade6/fen/test-13/soru-07.svg",
        "imageAlt": "Sıralı denemeler: 1. Bakır tel takılı, ampul yanıyor. 2. X takılı, ampul yanmıyor. 3. Aynı bakır tel yeniden takılı, ampul yanmıyor.",
        "imageWidth": 360,
        "imageHeight": 650
      },
      {
        "id": "f6-1-t13-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir öğrenci aynı tür bitkilerde iki kayıt tutuyor:\n• K çiçeğinde polenlerin tepeciğe ulaştığını gözlüyor; henüz daha sonraki aşamalara ait kayıt yok.\n• L çiçeğinde erkek ve dişi üreme hücrelerinin birleştiği mikroskobik kayıtla doğrulanıyor.\n\n“Her iki çiçekte de döllenme kesinleşmiştir; K’de ayrıca tozlaşmanın gerçekleştiği bilinmektedir.” yorumu nasıl düzeltilmelidir?",
        "options": [
          "K’de döllenme kesinleşmiştir; L’de ise yalnız tozlaşma gözlenmiştir.",
          "Her iki çiçekte de yalnız tozlaşma kesinleşmiştir; hücrelerin birleşmesi döllenme sayılmaz.",
          "K’de sonraki aşama bilinmediği için polenlerin tepeciğe ulaşması da tozlaşma olarak adlandırılamaz.",
          "K’de tozlaşma doğrulanmıştır fakat bu kayıt tek başına döllenmeyi kanıtlamaz; L’de döllenme doğrulanmıştır."
        ],
        "correct": 3,
        "explanation": "Tozlaşma, polenlerin tepeciğe ulaşmasıdır; K’de doğrudan bu olay kaydedilmiştir. Döllenme ise erkek ve dişi üreme hücrelerinin birleşmesidir; L’de bu aşama doğrulanmıştır. Tozlaşma ile döllenme aynı olay değildir. K’nin sonraki aşamalarının henüz kaydedilmemiş olması, döllenmenin kesin gerçekleştiğini veya kesin gerçekleşmediğini söylemeye yetmez."
      },
      {
        "id": "f6-1-t13-09",
        "subject": "fen",
        "term": 1,
        "prompt": "İdeal modelde kırmızı kart yalnız kırmızı ışığı, yeşil kart yalnız yeşil ışığı, beyaz kart bütün görünür renkleri yansıtır; yansıtmadığı renkleri soğurur. Bu üç kartın hangisi olduğu bilinmeyen P, R ve S, iki kez aydınlatılıyor. Ortamda seçilen kaynak dışında ışık yoktur.\n• Yalnız kırmızı ışıkta P ve R kırmızı, S siyah görünüyor.\n• Yalnız yeşil ışıkta P siyah, R ve S yeşil görünüyor.\n\nP, R ve S kartlarının beyaz ışık altındaki renkleri sırasıyla hangisidir?",
        "options": [
          "Kırmızı – beyaz – yeşil",
          "Beyaz – kırmızı – yeşil",
          "Kırmızı – yeşil – beyaz",
          "Yeşil – beyaz – kırmızı"
        ],
        "correct": 0,
        "explanation": "R hem kırmızı hem yeşil ışığı yansıtır; verilen üç kart arasında bunu beyaz kart yapar. P kırmızıyı yansıtır, yeşili yansıtmaz; kırmızı karttır. S yeşili yansıtır, kırmızıyı yansıtmaz; yeşil karttır. Yalnız ilk gözlem P ile R’yi ayırmaya yetmez; ikinci gözlemle birlikte kimlikler belirlenir."
      },
      {
        "id": "f6-1-t13-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir deneyde başlangıç boyutları aynı olan iki metal şerit aynı başlangıç sıcaklığındadır. Şeritler ısıtılıyor; erime veya mekanik çekme olmuyor. K ve L şeritlerinin farklı miktarlarda uzadığı görülüyor. Bir öğrenci, “K daha çok uzadı; öyleyse K ve L farklı metallerden yapılmıştır.” diyor. Ancak deneyde şeritlerin son sıcaklıkları kaydedilmemiştir.\n\nÖğrencinin sonucundaki eksikliği en iyi açıklayan değerlendirme hangisidir?",
        "options": [
          "Uzama ölçülmesi yeterlidir; son sıcaklık bilinmese de metal cinsi kesin belirlenir.",
          "İlk uzunluklar eşitse aynı metalden yapılan şeritler, ulaştıkları sıcaklık ne olursa olsun eşit uzar.",
          "Aynı metalden olsalar bile farklı sıcaklık artışları farklı uzamalara yol açabilir; cins etkisini karşılaştırırken sıcaklık artışı da eşitlenmelidir.",
          "Son sıcaklıkların kaydedilmesi yeterlidir; başlangıç sıcaklığı ve ilk uzunluklar genleşme karşılaştırmasını etkilemez."
        ],
        "correct": 2,
        "explanation": "Genleşme karşılaştırmasında yalnız ilk boyutların değil, sıcaklık değişiminin de kontrol edilmesi gerekir. Başlangıç sıcaklıkları aynı olsa da son sıcaklıklar farklıysa sıcaklık artışları farklıdır. Aynı metal bu nedenle farklı miktarlarda uzayabilir. Gözlenen farkı yalnız metal cinsine bağlamak için verilen bilgi yetersizdir."
      }
    ],

    test14: [
      {
        "id": "f6-1-t14-01",
        "subject": "fen",
        "term": 1,
        "prompt": "Şekildeki arabaya ilk durumda yatay doğrultuda yalnız üç kuvvet etki ediyor; bileşke doğuya 2 N’dir. F’nin büyüklüğü değiştirilmeden yalnız yönü ters çevriliyor. Diğer kuvvetler aynı kalıyor. Araba, değişikliğin yapıldığı anda doğuya hareket etmektedir.\n\nDeğişiklikten sonraki bileşke ile araba henüz durmadan önceki kısa sürede hareketinin değişimi hangisidir?",
        "options": [
          "Batıya 14 N; sürati azalır.",
          "Batıya 6 N; sürati azalır.",
          "Batıya 14 N; hemen batıya hareket etmeye başlar.",
          "Doğuya 2 N; sürati artar."
        ],
        "correct": 0,
        "explanation": "İlk durumda F + 4 − 10 = 2 olduğundan F = 8 N’dir. F batıya çevrilince batıya 8 + 10 = 18 N, doğuya 4 N kalır; bileşke batıya 14 N olur. Araba henüz doğuya giderken ters yönlü bileşke süratini azaltır. Kuvvet yönü değişince hareket yönünün anında değişmesi gerekmez.",
        "imageUrl": "/grade6/fen/test-14/soru-01.svg",
        "imageAlt": "İlk durumda F ve 4 N doğuya, 10 N batıya. Bileşke doğuya 2 N. Arabanın hareket oku doğuya. Sonra yalnız F ters çevriliyor.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "f6-1-t14-02",
        "subject": "fen",
        "term": 1,
        "prompt": "Işık, şekildeki iki düz aynalı düzenekte birinci aynaya soldan geliyor ve aşağıya yansıyor. İkinci aynanın konumu görselde verilmiştir. Aynalar arasındaki ışık yolunda başka engel yoktur. Kesikli doğrular, çarpma noktalarındaki normallerdir.\n\nİkinci aynadan çıkan ışının yönü ve bu aynadaki yansıma açısı hangisidir?",
        "options": [
          "Sağa; 45°",
          "Sola; 90°",
          "Sola; 45°",
          "Aşağıya; 0°"
        ],
        "correct": 2,
        "explanation": "İkinci aynaya ışık yukarıdan düşey olarak gelir. Işın ile bu aynanın normali arasındaki açı 45°’dir. Yansıyan ışın normalin öteki tarafında yine 45° yaparak sola gider. İki yansıma sonunda çıkan ışın, başlangıçtaki sağa yönelmiş ışına ters yöndedir.",
        "imageUrl": "/grade6/fen/test-14/soru-02.svg",
        "imageAlt": "Birinci ayna sağa aşağı eğimli çizgi; soldan sağa ışını aşağı yansıtır. İkinci ayna sağa yukarı eğimli çizgi; gelen düşey ışın ve iki olası yatay çıkış oku. Normaller kesikli, her aynaya 45° geliş.",
        "imageWidth": 360,
        "imageHeight": 760
      },
      {
        "id": "f6-1-t14-03",
        "subject": "fen",
        "term": 1,
        "prompt": "K ve L, içi dolu ve homojen katılardır. K suya tamamen batırılarak hacmi ölçülüyor; L’nin hacmi doğrudan verilmiştir. X sıvısının kütlesi ise kaplı tartımdan bulunacaktır. Tüm ölçümler aynı sıcaklıkta, taşma, çözünme, tepkime ve hava kabarcığı olmadan yapılmıştır.\n\nK ve L, X sıvısına ayrı ayrı bırakılırsa hangi sonuç beklenir?",
        "options": [
          "K yüzer, L batar.",
          "İkisi de yüzer.",
          "K batar, L yüzer.",
          "İkisi de batar."
        ],
        "correct": 3,
        "explanation": "K’nin hacmi 55 − 30 = 25 cm³, yoğunluğu 75 ÷ 25 = 3 g/cm³’tür. L’nin yoğunluğu 54 ÷ 30 = 1,8 g/cm³’tür. X’in kütlesi 120 − 40 = 80 g, yoğunluğu 80 ÷ 50 = 1,6 g/cm³’tür. Her iki katı X’ten yoğun olduğu için batar. Kabın kütlesi sıvıya, ilk su seviyesi de katının hacmine katılmaz.",
        "imageUrl": "/grade6/fen/test-14/soru-03.svg",
        "imageAlt": "K: 75 g; ilk su seviyesi 30 cm³, K batınca 55 cm³. L: 54 g, 30 cm³. X: boş kap 40 g; 50 cm³ X bulunan kap 120 g.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "f6-1-t14-04",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı maddeden yapılmış, her yerinde aynı kalınlıkta 40 cm’lik tel sağlam bir pilli devrede kullanılıyor. Sonra tel eşit iki parçaya kesiliyor. K denemesinde yalnız bir parça bağlanıyor. L denemesinde iki parça uç uca bağlanarak ikisi de devreye katılıyor. Ek bağlantı direnci ihmal ediliyor; pil, ampul, sıcaklık ve temas koşulları aynı tutuluyor.\n\nBaşlangıçtaki 40 cm’lik tele göre ampul parlaklığı nasıl değişir?",
        "options": [
          "K’de ve L’de artar.",
          "K’de artar, L’de değişmez.",
          "K’de değişmez, L’de azalır.",
          "K’de azalır, L’de artar."
        ],
        "correct": 1,
        "explanation": "K’de devreye katılan tel 20 cm’ye iner; cins ve kalınlık aynı olduğundan direnç azalır, ampul daha parlak yanar. L’de uç uca bağlı parçaların toplam tel uzunluğu 40 cm’dir. Bağlantı etkisi ihmal edildiğinden direnç ve parlaklık başlangıçtaki gibi olur. Parça sayısı tek başına direnci belirlemez.",
        "imageUrl": "/grade6/fen/test-14/soru-04.svg",
        "imageAlt": "Başlangıçta 40 cm tek tel. K’de 20 cm tek parça. L’de iki 20 cm parça uç uca, toplam 40 cm. Pil, ampul ve diğer koşullar aynı.",
        "imageWidth": 360,
        "imageHeight": 760
      },
      {
        "id": "f6-1-t14-05",
        "subject": "fen",
        "term": 1,
        "prompt": "Üç saf maddenin aynı basınçta ölçülmüş erime ve kaynama noktaları görseldedir. Maddeler ortak bir T sıcaklığında dengeye getiriliyor. K katı, L sıvı, M gaz hâlindedir. T, hiçbir maddenin hâl değiştirme noktasına eşit değildir.\n\nT aşağıdaki değerlerden hangisi olabilir?",
        "options": [
          "15°C",
          "25°C",
          "35°C",
          "45°C"
        ],
        "correct": 2,
        "explanation": "K’nin katı kalması için T, 40°C’den düşük olmalıdır. L’nin sıvı olması için 10°C ile 60°C arasında; M’nin gaz olması için 30°C’den yüksek olmalıdır. Üç koşulun ortak aralığı 30°C < T < 40°C’dir. Seçeneklerden yalnız 35°C bu aralıktadır.",
        "imageUrl": "/grade6/fen/test-14/soru-05.svg",
        "imageAlt": "K: erime 40°C, kaynama 100°C. L: erime 10°C, kaynama 60°C. M: erime −10°C, kaynama 30°C. Ortak T sıcaklığında K katı, L sıvı, M gaz. Hâl şeritleri ölçeksizdir.",
        "imageWidth": 360,
        "imageHeight": 820
      },
      {
        "id": "f6-1-t14-06",
        "subject": "fen",
        "term": 1,
        "prompt": "Bir düz aynanın önündeki ok sabit duruyor. Ayna, yüzeyi oka paralel kalacak biçimde oka doğru kaydırılıyor; oka değmiyor ve ok yerinden oynamıyor.\n\nYeni durumda okun kendisi ile görüntüsü arasındaki uzaklık ve görüntünün boyu nasıl değişir?",
        "options": [
          "Uzaklık azalır; görüntünün boyu artar.",
          "Uzaklık azalır; görüntünün boyu değişmez.",
          "Uzaklık artar; görüntünün boyu değişmez.",
          "Uzaklık değişmez; görüntünün boyu azalır."
        ],
        "correct": 1,
        "explanation": "Ayna oka yaklaşınca ok ile ayna arasındaki uzaklık azalır. Düz aynada görüntü aynanın arkasında, cismin aynaya uzaklığı kadar ötede oluşur; dolayısıyla ok ile görüntü arasındaki uzaklık da azalır. Düz aynadaki görüntü boyu cismin boyuna eşit kalır. Aynaya yaklaşmak, düz aynada büyütme oluşturmaz.",
        "imageUrl": "/grade6/fen/test-14/soru-06.svg",
        "imageAlt": "Sabit okun sağındaki düz ayna, kesikli eski konumundan oka daha yakın mavi yeni konumuna kaydırılıyor. Yüzeylerin yönleri aynı; hareket oku sola.",
        "imageWidth": 360,
        "imageHeight": 700
      },
      {
        "id": "f6-1-t14-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı kelebeğin yaşamı boyunca alınan örnek kayıtlarda, her aşamadaki kütle ve gözlenen özellikler görselde verilmiştir. Ölçümler doğru kabul ediliyor.\n\nBu kayıtların desteklediği en uygun yorum hangisidir?",
        "options": [
          "Larvadan pupaya geçişte kütle azaldığı için bu iki kayıt, kütle bakımından büyüme gerçekleştiğini gösterir.",
          "Pupa aşamasında uçuş görülmemesi, bu aşamada yapısal gelişimin durduğunu gösterir.",
          "Kütlesi daha büyük olan aşama daha gelişmiştir; bu nedenle larva, erginden daha gelişmiştir.",
          "Kanatların işlev kazanması gelişmeyi gösterir; bu kayıtlarda kütlenin sürekli artmasıyla birlikte gerçekleşmemiştir."
        ],
        "correct": 3,
        "explanation": "Larva, pupa ve ergin aşamaları aynı bireyin başkalaşma sürecidir. Kanatların kullanılması gibi yeni özellikler gelişmeyi gösterir. Verilen kütlelerin azalması bu yapısal gelişimi ortadan kaldırmaz; gelişme, her kayıtta kütle artışıyla aynı şey değildir. Kütle büyüklüğü, yaşam döngüsündeki aşamaların sırasını tek başına belirlemez.",
        "imageUrl": "/grade6/fen/test-14/soru-07.svg",
        "imageAlt": "Aynı bireyin larva 2,4 g → pupa 1,8 g → ergin 1,2 g aşamaları. Larva sürünür; pupa dönüşüm aşamasıdır; ergin kanatlarıyla uçar.",
        "imageWidth": 360,
        "imageHeight": 780
      },
      {
        "id": "f6-1-t14-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Basitleştirilmiş bir modelde uyarı duyu yolu → merkez → hareket yolu → kas sırasını izliyor. Modelde yalnız bir iletim yolu çalışmıyor; merkez ve kas sağlamdır.\n• İlk denemede duyu yolunun başlangıcına verilen uyarı merkezde kaydedilmiyor ve kas tepki vermiyor.\n• İkinci denemede merkezde doğrudan bir cevap oluşturulduğunda kas beklenen tepkiyi veriyor.\n\nİki deneme birlikte hangi değerlendirmeyi destekler?",
        "options": [
          "Sorun duyu yolundadır; ikinci deneme, merkezden kasa uzanan cevap yolunun çalışabildiğini gösterir.",
          "Sorun hareket yolundadır; ilk denemede kasın tepki vermemesi bunu tek başına kanıtlar.",
          "İki yol da bozuktur; ilk denemede hem merkezde hem kasta sonuç alınamamıştır.",
          "Duyu yolu çalışmaktadır; ikinci denemede kasın tepki vermesi ilk uyarının merkeze ulaştığını da kanıtlar."
        ],
        "correct": 0,
        "explanation": "İlk denemede uyarı merkeze ulaşmamıştır. İkinci denemede merkezde oluşturulan cevap kasa ulaştığına göre hareket yolu çalışabilmektedir. Merkez ve kas sağlam, yalnız bir yol bozuk olduğundan sorun duyu yolundadır. İkinci deneme duyu yolunu kullanmadığı için o yolun sağlam olduğunu göstermez."
      },
      {
        "id": "f6-1-t14-09",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı sıcaklıkta iki saf sıvının yoğunlukları eşit ölçülüyor. Bir öğrenci “Yoğunluklar eşitse kesinlikle aynı maddedir.” diyor. Daha sonra aynı basınçta kaynama noktaları ölçülüyor; K sıvısının kaynama noktası 80°C, L’ninki 110°C bulunuyor. Ölçümlerin doğru olduğu kabul ediliyor.\n\nKayıtlar birlikte nasıl değerlendirilmelidir?",
        "options": [
          "Yoğunluk eşitliği, kaynama noktalarının da eşit sayılmasını gerektirir.",
          "Kaynama noktası yüksek olanın yoğunluğu da mutlaka yüksek olmalıdır; ilk ölçüm yok sayılmalıdır.",
          "Tek bir özelliğin eşit olması kesin kimlik kanıtı değildir; farklı kaynama noktaları bu iki saf sıvının aynı madde olmadığını gösterir.",
          "Sıvı miktarları farklı olabileceği için kaynama noktalarının farkı kimlikle ilgili bilgi vermez."
        ],
        "correct": 2,
        "explanation": "Aynı koşullarda ayırt edici özelliklerden yararlanılır; ancak yalnız yoğunluk eşitliğinden kesin kimlik sonucu çıkarmak yeterli değildir. Aynı basınçta saf maddelerin farklı kaynama noktaları, K ve L’nin aynı saf madde olmadığını gösterir. Madde miktarı, aynı basınçta saf sıvının kaynama noktasını belirlemez; yoğunlukla kaynama noktası arasında burada zorunlu bir büyüklük sırası da yoktur."
      },
      {
        "id": "f6-1-t14-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı kalınlıkta iki tel, aynı sıcaklıkta ve aynı sağlam pil–ampul düzeneğinde ayrı ayrı deneniyor. K teli X maddesinden ve 50 cm, L teli Y maddesinden ve 25 cm uzunluğundadır. K kullanıldığında ampul L’dekinden daha parlak yanıyor. Diğer koşullar aynıdır. Daha sonra Y maddesinden, L ile aynı kalınlıkta 50 cm’lik bir tel hazırlanıyor.\n\nK ile bu yeni Y teli karşılaştırıldığında hangi sonuç beklenir?",
        "options": [
          "Y telinin uzunluğu K’ye eşitlendiği için iki telin direnci de mutlaka eşit olur.",
          "Yeni Y telinin direnci K’den büyük olur; Y telini uzatmak, zaten K’den büyük olan direncini daha da artırır.",
          "Y telini uzatmak direncini azaltır; yeni Y telinde ampul K’dekinden daha parlak yanar.",
          "İlk deneyde uzunluklar farklı olduğundan, verilen gözlem ve uzunluğun etkisi birlikte kullanılsa da hiçbir sıralama yapılamaz."
        ],
        "correct": 1,
        "explanation": "İlk denemede K ile ampul daha parlak olduğundan K’nin direnci, 25 cm’lik Y telinin direncinden küçüktür. Y telinin cinsi ve kalınlığı korunup uzunluğu 50 cm’ye çıkarılınca direnci artar. Bu yüzden yeni Y telinin direnci K’den yine büyüktür; ampul daha sönük yanar. Uzunlukları eşitlemek, cinsleri farklı tellerin dirençlerini zorunlu olarak eşitlemez."
      }
    ],

    test15: [
      {
        "id": "f6-1-t15-01",
        "subject": "fen",
        "term": 1,
        "prompt": "K, L ve M araçları A’dan aynı anda çıkıyor ve gösterilen yollarını aynı anda tamamlıyor. K ve L’nin aldıkları toplam yollar eşittir; M’nin A–D–B yolu daha uzundur. B ile C farklı konumlardır.\n\nYolculukların tamamında ortalama süratleri eşit olan çift ile ortalama hızları eşit olan çift sırasıyla hangisidir?",
        "options": [
          "K–M ve K–L",
          "K–L ve K–M",
          "L–M ve K–M",
          "K–L ve L–M"
        ],
        "correct": 1,
        "explanation": "K ile L eşit toplam yolu eşit sürede aldığı için ortalama süratleri eşittir. K ve M’nin başlangıcı A, bitişi B ve süreleri aynıdır; yer değiştirmeleri, dolayısıyla ortalama hızları eşittir. M’nin daha uzun yol izlemesi süratini etkiler ama aynı başlangıç ve bitiş konumları arasındaki yer değiştirmeyi değiştirmez. L ise C’de bittiğinden K ile aynı ortalama hıza sahip değildir.",
        "imageUrl": "/grade6/fen/test-15/soru-01.svg",
        "imageAlt": "K, A’dan B’ye düz yol; L, A’dan C’ye aynı uzunlukta düz yol; M, A’dan D’ye ve B’ye daha uzun kırık yol. K ve L toplam yolları eşit, bütün süreler eşit.",
        "imageWidth": 360,
        "imageHeight": 740
      },
      {
        "id": "f6-1-t15-02",
        "subject": "fen",
        "term": 1,
        "prompt": "Cisme aynı doğrultuda yalnız şekildeki dört kuvvet uygulanıyor. İlk bileşke doğuya 3 N’dir; F’nin büyüklüğü bilinmiyor. Kuvvetlerden tam ikisi tamamen kaldırılacak, diğer ikisinin yönü ve büyüklüğü değişmeyecektir.\n\nBileşkenin sıfır olması için hangi ikisi kaldırılmalıdır?",
        "options": [
          "K ve M",
          "K ve N",
          "L ve M",
          "L ve N"
        ],
        "correct": 3,
        "explanation": "Doğuya F + 7, batıya 12 + 4 = 16 N etki eder. Bileşke doğuya 3 N olduğundan doğu toplamı 19 N, F ise 12 N’dir. Kalan iki kuvvetin eşit büyüklükte ve zıt yönlü olması gerekir. L ve N kaldırılınca K ile M, doğuya ve batıya 12’şer N uygular ve denge sağlanır.",
        "imageUrl": "/grade6/fen/test-15/soru-02.svg",
        "imageAlt": "K kuvveti doğuya F, L doğuya 7 N, M batıya 12 N, N batıya 4 N. İlk bileşke doğuya 3 N; F bilinmiyor.",
        "imageWidth": 360,
        "imageHeight": 740
      },
      {
        "id": "f6-1-t15-03",
        "subject": "fen",
        "term": 1,
        "prompt": "K, dış yüzeyi kapalı bir metal cisimdir. Metal kısmının tamamının aynı saf metalden yapıldığı, varsa iç boşluğunun su almadığı bilinmektedir. Aynı sıcaklıkta bu metalin içi dolu bir örneğinin 20 cm³’ü 60 g geliyor. K’nin kütlesi ve suya tamamen batırıldığındaki seviyeler görseldedir. Taşma, çözünme ve hava kabarcığı yoktur; boşluktaki gazın kütlesi ihmal edilir.\n\nK’nin iç boşluğunun hacmi kaç santimetreküptür?",
        "options": [
          "10",
          "20",
          "30",
          "40"
        ],
        "correct": 0,
        "explanation": "İçi dolu metalin yoğunluğu 60 ÷ 20 = 3 g/cm³’tür. K’deki 120 g metalin hacmi 120 ÷ 3 = 40 cm³ olur. K’nin dış sınırları içinde kalan toplam hacim su seviyesindeki artıştan 80 − 30 = 50 cm³ bulunur. Su almayan boşluk da bu toplam hacme dâhildir. Boşluk 50 − 40 = 10 cm³’tür.",
        "imageUrl": "/grade6/fen/test-15/soru-03.svg",
        "imageAlt": "K: 120 g. Su başlangıçta 30 cm³, K tamamen batınca 80 cm³. Aynı metalin içi dolu 20 cm³ örneği 60 g.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "f6-1-t15-04",
        "subject": "fen",
        "term": 1,
        "prompt": "İdeal modelde opak, mat kırmızı levha yalnız kırmızı ışığı yansıtır, diğer görünür renkleri soğurur. Opak beyaz levha kendisine ulaşan bütün görünür renkleri yansıtır. Kırmızı levhadan yansıyan ışığın bir bölümü beyaz levhaya ulaşıyor. Beyaz levhaya doğrudan kaynaktan veya başka yerden ışık gelmiyor.\n\nKaynak önce beyaz, sonra yalnız mavi ışık verdiğinde beyaz levhanın görünümü sırasıyla nasıl olur?",
        "options": [
          "Beyaz; mavi",
          "Kırmızı; mavi",
          "Kırmızı; karanlık",
          "Beyaz; karanlık"
        ],
        "correct": 2,
        "explanation": "Beyaz ışığın kırmızı bileşeni ilk levhadan yansıyıp ikinciye ulaşır. Beyaz levha gelen kırmızı ışığı yansıttığı için kırmızı görünür. Kaynak yalnız mavi olduğunda ilk levha bu ışığı soğurur; ikinci levhaya ışık ulaşmaz ve karanlık görünür. Beyaz yüzey, kendisine ulaşmayan renkleri üretmez.",
        "imageUrl": "/grade6/fen/test-15/soru-04.svg",
        "imageAlt": "Kaynak → kırmızı levha → beyaz levha ışık yolu. Beyaz levhaya doğrudan ışık gitmiyor. Denemelerde önce beyaz, sonra mavi kaynak kullanılıyor.",
        "imageWidth": 360,
        "imageHeight": 780
      },
      {
        "id": "f6-1-t15-05",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı türden canlı tohumlar, yeterli nem ve hava sağlanan özdeş kaplarda tutuluyor. Sıcaklık, tohum sayısı ve diğer koşullar aynı; yalnız ışık koşulu farklıdır. Beşinci gün çimlenen fideler her grubun kendi ışık koşulu korunarak onuncu güne kadar izleniyor. Gözlem sonuçları görseldedir.\n\nBu çalışmadan çıkarılabilecek en uygun sonuç hangisidir?",
        "options": [
          "Karanlıktaki fideler daha uzun olduğundan her yönden daha sağlıklı gelişmiştir.",
          "Bu türün tohumları karanlıkta da çimlenmiştir; fide boyu tek başına sonraki gelişimin sağlıklı olduğunu göstermeye yetmez.",
          "Işık, bu tohumların çimlenmesi için zorunludur; karanlıkta görülenler çimlenme sayılmaz.",
          "Çimlenme sayıları eşit olduğundan ışığın fidelerin sonraki görünümüne etkisi olmadığı kanıtlanmıştır."
        ],
        "correct": 1,
        "explanation": "İki koşulda da 10 tohum çimlenmiştir; bu çalışma bu türün karanlıkta da çimlenebildiğini gösterir. Karanlıkta daha uzun fakat soluk ve zayıf fideler görülmesi, yalnız uzunluğu sağlıklı gelişme ölçütü saymanın yetersizliğini ortaya koyar. Sonuç bütün bitki türleri için zorunlu bir kural olarak genişletilemez.",
        "imageUrl": "/grade6/fen/test-15/soru-05.svg",
        "imageAlt": "Işıkta 5. gün 10 çimlenme; 10. gün 4 cm, yeşil ve dik fideler. Karanlıkta 5. gün 10 çimlenme; 10. gün 7 cm, soluk ve zayıf fideler.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "f6-1-t15-06",
        "subject": "fen",
        "term": 1,
        "prompt": "İki metal levhanın birer uçları sabitlenmiştir. Serbest uçlar arasında başlangıçta 5 mm boşluk vardır. Isıtma sonucunda serbest uçların yer değiştirme yönleri ve miktarları görselde verilmiştir. Levhalar birbirine temas etmeden duruyor.\n\nYeni boşluk ve bu sonuca ilişkin yorum hangisidir?",
        "options": [
          "9 mm; iki levhanın da boyu uzadığı için boşluk büyür.",
          "4 mm; yalnız yer değiştirmeler arasındaki fark çıkarılır.",
          "0 mm; her genleşme iki levhayı mutlaka temas ettirir.",
          "1 mm; iki serbest uç birbirine yaklaştığı için yaklaşma miktarları toplanır."
        ],
        "correct": 3,
        "explanation": "Sol uç boşluğa doğru 1,5 mm, sağ uç boşluğa doğru 2,5 mm ilerler. Toplam yaklaşma 4 mm’dir; yeni boşluk 5 − 4 = 1 mm olur. Boşluğun değişimi yalnız levhaların uzamasına değil, hangi uçların sabit olduğuna ve serbest uçların hareket yönlerine göre yorumlanmalıdır.",
        "imageUrl": "/grade6/fen/test-15/soru-06.svg",
        "imageAlt": "Dış uçları sabitlenmiş iki levha arasında 5 mm boşluk. Sol levhanın serbest ucu sağa 1,5 mm; sağ levhanın serbest ucu sola 2,5 mm ilerler.",
        "imageWidth": 360,
        "imageHeight": 740
      },
      {
        "id": "f6-1-t15-07",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı saf X maddesinin K ve L örneklerinde başlangıçta katı ve sıvı birlikte bulunuyor. Basınçlar aynı ve sabittir. K’ye ısı veriliyor, L’den ise ısı alınıyor. İncelenen süre boyunca iki kapta da katı ve sıvı birlikte bulunmaya devam ediyor.\n\nBu sürede sıcaklıklar ve katı madde miktarları nasıl değişir?",
        "options": [
          "K’nin sıcaklığı artar, L’ninki azalır; ikisinin katı miktarı da değişmez.",
          "İki sıcaklık sabit kalır; K’de katı miktarı artar, L’de azalır.",
          "İki sıcaklık sabit kalır; K’de katı miktarı azalır, L’de artar.",
          "K’nin sıcaklığı artar, L’ninki azalır; K’de katı miktarı azalır, L’de artar."
        ],
        "correct": 2,
        "explanation": "Saf madde aynı basınçta erirken de donarken de katı ve sıvı birlikte kaldığı sürece hâl değişim sıcaklığını korur. K’ye verilen ısı katının bir bölümünün erimesine yol açar; katı miktarı azalır. L’den ısı alınması sıvının bir bölümünü dondurur; katı miktarı artar. Bu aralıkta ısı alışverişi olması sıcaklığın mutlaka değişmesi demek değildir.",
        "imageUrl": "/grade6/fen/test-15/soru-07.svg",
        "imageAlt": "K ve L kaplarında aynı saf X maddesinin katı ve sıvı hâlleri birlikte. K’ye yönelen ısı oku, L’den dışarı çıkan ısı oku. İki kapta da iki hâl süre boyunca devam ediyor.",
        "imageWidth": 360,
        "imageHeight": 780
      },
      {
        "id": "f6-1-t15-08",
        "subject": "fen",
        "term": 1,
        "prompt": "Aynı türden bir hayvanın iki grubunda bütün yumurtalar ve yavrular izleniyor; gruplara dışarıdan katılım veya gruptan ayrılma yoktur. Eşit gözlem süresi sonunda kayıtlar şöyledir:\n• K: başlangıçta 50 yumurta, yumurtadan çıkan 30 yavru, gözlem sonunda yaşayan 18 yavru.\n• L: başlangıçta 40 yumurta, yumurtadan çıkan 32 yavru, gözlem sonunda yaşayan 24 yavru.\n\nKayıtlardan hangi sonuç çıkarılabilir?",
        "options": [
          "K’de yumurtadan çıktıktan sonra yaşamını yitiren 12, L’de 8 yavru vardır; daha fazla yumurta, gözlem sonunda daha fazla yaşayan yavru anlamına gelmemiştir.",
          "K’de 32, L’de 16 yavru yumurtadan çıktıktan sonra yaşamını yitirmiştir; başlangıç yumurta sayısı ile son yavru sayısının farkı bunu verir.",
          "K’de daha çok yumurta bulunduğundan yumurtadan çıkan yavru sayısı da L’den fazladır.",
          "İki grubun son yavru sayıları farklı olduğundan bu farkın yalnız beslenmeden kaynaklandığı kesinleşir."
        ],
        "correct": 0,
        "explanation": "Yumurtadan çıktıktan sonraki kayıp, çıkan yavru sayısından son yaşayan yavru sayısı çıkarılarak bulunur: K’de 30 − 18 = 12, L’de 32 − 24 = 8. Başlangıç yumurta sayısından son yavru sayısını çıkarmak, hiç çıkmamış yumurtaları da bu kayba katar. K’de daha çok yumurta olmasına rağmen L’de daha çok yavru yaşamıştır. Kayıtlarda farkın nedenini yalnız beslenmeye bağlayacak kontrollü koşul bilgisi yoktur."
      },
      {
        "id": "f6-1-t15-09",
        "subject": "fen",
        "term": 1,
        "prompt": "Sağlam pilli bir devrede denenen K ve L tellerinin cinsi, sıcaklığı ve uzunluğu aynıdır. K bağlanınca ampul L’dekinden daha parlak yanıyor. Bağlantı etkileri ihmal ediliyor. Sonra K’nin uzunluğu artırılıyor; kalınlığı değişmiyor. Pil, ampul, sıcaklık ve temas koşulları değiştirilmeden yeni K ile L karşılaştırıldığında parlaklıkların eşit olduğu görülüyor.\n\nBu iki deneme birlikte hangi yorumu destekler?",
        "options": [
          "K başlangıçta daha inceydi; uzatılınca direnci azalıp L’ye eşitlendi.",
          "K başlangıçta daha kalındı; uzatılması direncini artırarak L’nin direncine ulaşmasını sağlamış olabilir.",
          "K başlangıçta daha kalındı; uzunluk değişimi direnci etkilemediği için ikinci gözlem mümkün değildir.",
          "İlk parlaklık farkı yalnız telin cinsinden kaynaklanmıştır; ikinci denemede cinsler eşitlenmiştir."
        ],
        "correct": 1,
        "explanation": "İlk deneyde cins ve uzunluk eşittir. K ile ampul daha parlak olduğundan K’nin direnci daha küçüktür; bu koşullarda K daha kalındır. Aynı kalınlıktaki K’yi uzatmak direncini artırır. Böylece başlangıçtaki kalınlık üstünlüğü, daha fazla uzunluğun etkisiyle dengelenebilir. Sayısal bir direnç formülü kullanmak gerekmez."
      },
      {
        "id": "f6-1-t15-10",
        "subject": "fen",
        "term": 1,
        "prompt": "Basitleştirilmiş bir modelde bir bezin salgıladığı H hormonu bir taşıma yoluyla hedef organa ulaşıyor. Bezden normal miktarda H çıktığı ölçülüyor; ancak hedefe giden yolda H saptanmıyor ve hedefte beklenen cevap oluşmuyor. İkinci denemede H, uygun miktarda doğrudan hedefe ulaştırılınca cevap oluşuyor.\n\nYalnız bu model ve kayıtlar birlikte düşünüldüğünde hangi değerlendirme en güçlü biçimde desteklenir?",
        "options": [
          "H’nin üretilmesi tek başına yeterli değildir; kayıtlar, hedefin cevap verebildiğini ve hormonun hedefe taşınmasında sorun olabileceğini gösterir.",
          "Hedefte ilk denemede cevap olmadığı için bezin hormon üretmediği kesinleşir.",
          "İkinci denemede cevap oluşması, ilk denemede de H’nin hedefe ulaştığını kanıtlar.",
          "Bezden normal miktarda H çıktığı için hedefe giden taşıma yolunun çalıştığı ayrıca incelenemez."
        ],
        "correct": 0,
        "explanation": "Bezden H çıktığı ölçülmüştür; üretim yokluğu iddiası bu kayıtla uyuşmaz. Doğrudan H verilince hedef cevap verebildiği için hedefin tümüyle cevap veremediği söylenemez. İlk denemede H’nin hedef yolunda saptanmamasıyla birlikte değerlendirildiğinde taşınmadaki aksama olasılığı desteklenir. Kayıt, sorunun tam fiziksel nedenini belirlemez."
      }
    ],

  },
  term2: {
    test1: [
      {
            "id": "f6-2-t1-01",
            "subject": "fen",
            "term": 2,
            "prompt": "K ve L kartları karanlık ortamda ayrı ayrı yalnız kırmızı, sonra yalnız yeşil ışıkla aydınlatılıyor. Şekilde görülen renkler kaydediliyor. Kartlar ışık üretmiyor. Bir öğrenci “K kesinlikle beyaz, L kesinlikle kırmızıdır.” diyor.\n\nBu iddiayı değerlendiren ve henüz denenmeyen bir ışıkla iki kartın yansıttığı renkler hakkında yeni kanıt toplayan en uygun işlem hangisidir?",
            "options": [
                  "İddia kanıtlanmıştır; iki kartı yeniden kırmızı ışıkta incelemek yeterlidir.",
                  "İddia henüz kanıtlanmamıştır; yalnız mavi ışık altında iki kartın görünümünü kaydetmek gerekir.",
                  "İddia yanlıştır; yeşil ışıkta siyah görünen L bütün ışıkları yansıtır.",
                  "İddia kanıtlanmıştır; ışıkları kapatıp iki kartın karanlıkta görünmediğini doğrulamak gerekir."
            ],
            "correct": 1,
            "explanation": "K’nin kırmızı ve yeşil ışığı yansıttığı, L’nin kırmızıyı yansıtıp yeşili yansıtmadığı görülür. Ancak mavi ışık denenmemiştir; kartların tüm renkleri yansıtıp yansıtmadığı bilinmez. Mavi ışıkla yapılacak gözlem yeni kanıt sağlar. Aynı kırmızı ışığı tekrarlamak veya ortamı karartmak bu eksikliği gidermez.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-01.svg",
            "imageAlt": "Kırmızı ışıkta K ve L kırmızı; yeşil ışıkta K yeşil, L siyah görünür.",
            "imageWidth": 360,
            "imageHeight": 400
      },
      {
            "id": "f6-2-t1-02",
            "subject": "fen",
            "term": 2,
            "prompt": "Eşit başlangıç hacmindeki K ve L sıvıları aynı boyuttaki kaplara konuyor. Her ikisi de 20 °C’den 60 °C’ye ısıtılıyor. K’nin bağlı olduğu borunun içi daha dar, L’ninki daha geniştir. K’nin seviyesi 8 cm, L’ninki 5 cm yükseliyor. Taşma ve buharlaşma yoktur; kap ve boruların genleşmesi ihmal ediliyor.\n\n“K daha fazla hacimce genleşmiştir.” iddiasını değerlendirmek ve sıvı cinsinin etkisini sınamak için hangi yol en uygundur?",
            "options": [
                  "Yükselme tek başına yeterli değildir; eşit iç kesitli borularla, aynı başlangıç hacimleri ve sıcaklık değişimleri korunarak deney tekrarlanmalıdır.",
                  "K daha fazla genleşmiştir; daha dar boruda yükselmenin fazla olması, hacim artışının da mutlaka fazla olduğunu gösterir.",
                  "Sonuç belirsizdir; borular aynı bırakılıp yalnız K’nin başlangıç hacmi azaltılmalıdır.",
                  "Sonuç belirsizdir; eşit borular kullanılmalı fakat K 60 °C’ye, L 80 °C’ye kadar ısıtılmalıdır."
            ],
            "correct": 0,
            "explanation": "Seviye yüksekliği yalnız hacim artışına değil, borunun iç kesitine de bağlıdır: aynı hacim dar boruda daha fazla yükseklik kaplar. Bu nedenle 8 cm ile 5 cm tek başına sıvıların hacimce genleşmesini karşılaştırmaz. Sıvı cinsinin etkisi için boru kesitleri eşitlenmeli; başlangıç hacmi ve sıcaklık değişimi aynı tutulmalıdır. Diğer öneriler yeni bir değişkeni de farklılaştırır.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-02.svg",
            "imageAlt": "Eşit kaplarda K ve L sıvıları; K dar boruda 8 cm, L geniş boruda 5 cm yükseliyor. İkisi de 20 °C’den 60 °C’ye ısıtılmıştır.",
            "imageWidth": 360,
            "imageHeight": 490
      },
      {
            "id": "f6-2-t1-03",
            "subject": "fen",
            "term": 2,
            "prompt": "Başlangıçta tamamen katı olan saf P maddesi, sabit basınçta ve sabit güçte ısıtılıyor. Sıcaklık-zaman grafiği şekildeki gibidir. Isı kaybı ihmal ediliyor. Aynı düzenekte P’nin iki kat kütlesi aynı başlangıç sıcaklığından ısıtıldığında erime bölgesinin daha uzun sürdüğü gözleniyor.\n\nİlk grafikte 5. dakikadaki hâl ile ikinci deneyin erime sıcaklığı için hangi eşleştirme doğrudur?",
            "options": [
                  "Yalnız sıvı; 80 °C",
                  "Katı ve sıvı; 80 °C",
                  "Yalnız sıvı; 40 °C",
                  "Katı ve sıvı; 40 °C"
            ],
            "correct": 3,
            "explanation": "İlk grafikte 4–6. dakikalar arasında sıcaklık 40 °C’de sabittir ve başlangıçta katı olan P erimektedir. 5. dakikada katı ve sıvı birlikte bulunur. Aynı saf madde aynı basınçta olduğundan kütleyi iki katına çıkarmak erime sıcaklığını değiştirmez; daha fazla madde eridiği için süre uzar.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-03.svg",
            "imageAlt": "P sıcaklığı 0. dakikada 20, 4. dakikada 40, 6. dakikada 40, 10. dakikada 90, 12. dakikada 90 °C.",
            "imageWidth": 360,
            "imageHeight": 460
      },
      {
            "id": "f6-2-t1-04",
            "subject": "fen",
            "term": 2,
            "prompt": "İçi boş, su geçirmeyen bir cisim 72 g’dır. Yapıldığı katı maddenin yoğunluğu 3 g/cm³ olarak biliniyor. Cisim, ince bir telle tamamen suya batırılınca şeklin sağındaki seviye okunuyor; telin hacmi ihmal ediliyor. Sonra cisim yoğunluğu 2,4 g/cm³ olan bir sıvıya serbest bırakılıyor. İçindeki gazın kütlesi ihmal ediliyor. Ölçümler aynı sıcaklıkta yapılıyor; cisme hava kabarcığı tutunmuyor. Cisim sıvıyı içine almıyor, çözünmüyor ve şekli değişmiyor.\n\nİç boşluğun hacmi ve cismin bu sıvıdaki durumu hangi seçenekte doğru verilmiştir?",
            "options": [
                  "8 cm³; batar.",
                  "24 cm³; yüzer.",
                  "8 cm³; yüzer.",
                  "32 cm³; askıda kalır."
            ],
            "correct": 2,
            "explanation": "Tam batırılan cismin dış hacmi 82 − 50 = 32 cm³’tür. Katı malzemenin hacmi 72 ÷ 3 = 24 cm³, iç boşluk 32 − 24 = 8 cm³ olur. Cismin boşluk dâhil ortalama yoğunluğu 72 ÷ 32 = 2,25 g/cm³’tür. Bu değer sıvının 2,4 g/cm³ yoğunluğundan küçük olduğundan cisim yüzer.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-04.svg",
            "imageAlt": "Dereceli kapta su önce 50 cm³; içi boş cisim tamamen batırılınca 82 cm³. Cisim 72 g.",
            "imageWidth": 360,
            "imageHeight": 460
      },
      {
            "id": "f6-2-t1-05",
            "subject": "fen",
            "term": 2,
            "prompt": "Şekilde aynı 99 g su örneğinin sıvı ve tamamen donmuş hâlde ölçülen hacimleri ile bir gölün kış kesiti verilmiştir. Buharlaşma veya madde kaybı yoktur.\n\nBu iki gözlem birlikte değerlendirildiğinde hangi açıklama doğrudur?",
            "options": [
                  "Buzun yoğunluğu 1,1 g/cm³’tür; bu nedenle gölün dibinde birikir.",
                  "Donunca hacim arttığı için yoğunluk azalır; yüzeydeki buz ısı kaybını yavaşlatarak altta sıvı su kalmasına katkı sağlar.",
                  "Buzun kütlesi azaldığı için yüzmesi beklenir; alttaki su her koşulda donmaz.",
                  "Sıvı suyun yoğunluğu 0,9 g/cm³’tür; buz tabakası göldeki canlıların tümünün yaşayacağını kanıtlar."
            ],
            "correct": 1,
            "explanation": "Sıvı suyun yoğunluğu 99 ÷ 99 = 1 g/cm³, buzunki 99 ÷ 110 = 0,9 g/cm³’tür. Kütle aynı kalırken hacim artmış, yoğunluk azalmıştır. Daha az yoğun buz yüzeyde kalır. Buz tabakası ısı kaybını yavaşlatır ve altta sıvı su bulunmasına katkı sağlar; bu, tüm göllerin asla tamamen donmayacağı veya tüm canlıların yaşayacağı anlamına gelmez.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-05.svg",
            "imageAlt": "99 g sıvı su: 99 cm³. 99 g buz: 110 cm³. Göl kesitinde yüzeyde buz, altında sıvı su ve balık.",
            "imageWidth": 360,
            "imageHeight": 510
      },
      {
            "id": "f6-2-t1-06",
            "subject": "fen",
            "term": 2,
            "prompt": "Reostanın eşit kalınlıktaki telinin A–B arası 6, B–C arası 2 eşit uzunluk birimidir. Kaydırıcı önce B’dedir. Devrede yalnız sabit uç ile kaydırıcı arasında kalan tel direnç oluşturur; kullanılmayan tel devreye etki etmez. Tel aynı maddeden yapılmıştır; sıcaklık ve temas koşulları sabit tutulur. Pil ve ampul değiştirilmez.\n\nÖnce sabit bağlantı A’da kalırken kaydırıcı B’den C’ye götürülüyor. Sonra kaydırıcı B’ye geri alınıp sabit bağlantı A’dan C’ye taşınıyor. Ampulün parlaklığı, ilk B konumundaki parlaklığa göre bu iki durumda sırasıyla nasıl değişir?",
            "options": [
                  "Artar; azalır.",
                  "Azalır; değişmez.",
                  "Değişmez; artar.",
                  "Azalır; artar."
            ],
            "correct": 3,
            "explanation": "Başlangıçta etkin tel A–B, yani 6 birimdir. İlk işlemde A–C, yani 8 birim tel kullanılır; direnç artar, parlaklık azalır. İkinci işlemde etkin tel C–B, yani 2 birimdir; başlangıçtaki 6 birime göre direnç azalır, parlaklık artar. Karşılaştırmalar her iki durumda da ilk B konumuna göredir.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-06.svg",
            "imageAlt": "Pil ve ampulün seri bağlı olduğu reosta; sabit bağlantı A’da, kaydırıcı B’de. A–B 6 birim, B–C 2 birim.",
            "imageWidth": 360,
            "imageHeight": 470
      },
      {
            "id": "f6-2-t1-07",
            "subject": "fen",
            "term": 2,
            "prompt": "Şemadaki oklar belirtilen etkiyi gösteriyor. Bu alanda kelebek türleri hem çiçekli bitkinin tozlaşmasına katkı sağlıyor hem de kuşlara besin oluyor. Bir uygulamadan sonra kelebeklerin tür sayısı 4’ten 1’e, kalan türün birey sayısı ise 200’den 500’e çıkıyor. Diğer üç türün her birinde önceden 100 birey vardı.\n\nBuna göre hangi değerlendirme, sayısal verileri ve şemadaki ilişkileri birlikte doğru kullanır?",
            "options": [
                  "Toplam kelebek sayısı değişmese de tür çeşitliliği azalmıştır; tek kalan türün aynı işlevleri yeterince sürdürüp sürdürmediği ayrıca incelenmelidir.",
                  "Toplam kelebek sayısı arttığı için tozlaşmanın ve kuş beslenmesinin kesinlikle arttığı söylenebilir.",
                  "Kuş ve bitki türleri sayılmadığı için kelebeklerin tür çeşitliliğinde değişim olduğu söylenemez.",
                  "Tür sayısı azalsa da toplam sayı aynı kaldığından bütün ekolojik ilişkilerin değişmeden sürdüğü kanıtlanır."
            ],
            "correct": 0,
            "explanation": "Başlangıçtaki toplam 200 + 3 × 100 = 500 bireydir; son durumda da 500 birey vardır. Buna rağmen kelebek tür sayısı 4’ten 1’e düşmüştür. Toplam birey sayısı tür çeşitliliğinin yerini tutmaz. Şema, kelebeklerin birden çok ilişkide rol aldığını gösterir; kalan türün kaybolan türlerin işlevlerini aynı ölçüde sürdürdüğü verilerden çıkarılamaz.",
            "imageUrl": "/grade6/fen/term-2/test-1/soru-07.svg",
            "imageAlt": "Kelebeklerden çiçekli bitkiye tozlaşma katkısı; kelebeklerden kuşa besin bağlantısı. Önce 4 tür, sonra 1 tür.",
            "imageWidth": 360,
            "imageHeight": 470
      },
      {
            "id": "f6-2-t1-08",
            "subject": "fen",
            "term": 2,
            "prompt": "Aynı makaranın eşit uzunluktaki pamuk ipleri, çalışan bir devrenin test aralığına aynı biçimde bağlanıyor. Kuru ipte ampul yanmıyor. Eşit miktarda saf suyla ıslatılan ipte de gözle görülür ışık oluşmuyor. Aynı miktarda tuzlu suyla ıslatılan ipte ampul yanıyor. Pil, ampul, ip kalınlığı ve bağlantı uzaklığı değişmiyor. Denemeler tekrarlanınca aynı sonuçlar alınıyor.\n\nBu deneyin sınadığı değişkeni ve sonucun sınırını birlikte doğru açıklayan seçenek hangisidir?",
            "options": [
                  "Yalnız ıslaklığın etkisi sınanmıştır; her ıslak ip mutlaka aynı parlaklıkta ışık verir.",
                  "İpin uzunluğunun etkisi sınanmıştır; saf suyla ıslatılan ipte akımın kesinlikle sıfır olduğu kanıtlanmıştır.",
                  "Islatmada kullanılan sıvının etkisi karşılaştırılmıştır; tuzlu suyla ıslatılan ip bu düzende ampulü yakacak iletimi sağlamıştır, yanmama tek başına hiç akım geçmediğini kanıtlamaz.",
                  "Sıvı miktarının etkisi karşılaştırılmıştır; tuzlu suyla ıslatılan ipte daha fazla sıvı bulunduğu için ampul yanmıştır."
            ],
            "correct": 2,
            "explanation": "Saf su ve tuzlu su kullanılan denemelerde ip, sıvı miktarı ve devre aynı; sıvının içeriği farklıdır. Tuzlu suyla ıslatılan ip ampulü yakacak kadar iletim sağlamıştır. Ampulün gözle görülür ışık vermemesi, devrede kesinlikle hiç akım bulunmadığını tek başına göstermez. Sonuç bütün ıslak maddelere genellenemez; eşit tutulan uzunluk ve sıvı miktarı deneyin değiştirilen değişkeni değildir."
      },
      {
            "id": "f6-2-t1-09",
            "subject": "fen",
            "term": 2,
            "prompt": "Bir araştırmada benzer büyüklükte iki gölde aynı yöntemle ölçüm yapılıyor. Gübreli tarladan su alan P gölünde iki yıl içinde alg miktarı artarken balık tür sayısı 8’den 3’e düşüyor. Böyle bir akış almayan R gölünde alg miktarı ve 8 olan balık tür sayısı büyük ölçüde değişmiyor. P’de avlanma miktarı da aynı dönemde artmış.\n\nVerilerin desteklediği değerlendirme ve sonraki araştırma önerisi hangisidir?",
            "options": [
                  "Gübreli su akışı tek neden olarak kanıtlanmıştır; avlanma verileri araştırmadan çıkarılmalıdır.",
                  "P’deki değişim biyoçeşitlilik kaybına işaret eder; gübreli akış ve avlanmanın etkilerini ayırmak için bu etkenlerin ayrı ayrı değiştiği benzer göller de karşılaştırılmalıdır.",
                  "R’de değişim olmadığı için gübreli suyun hiçbir gölde etkisi olamayacağı kanıtlanmıştır; yalnız R izlenmelidir.",
                  "P’de alg miktarı arttığı için toplam biyoçeşitlilik kesin artmıştır; balık türleri yeniden sayılmamalıdır."
            ],
            "correct": 1,
            "explanation": "P’de balık tür sayısının azalması bu gruptaki çeşitlilik kaybını gösterir. Ancak gübreli akışla birlikte avlanma da değişmiştir; yalnız bu kayıtlarla tek neden kesinleştirilemez. Bu iki etkenin ayrı ayrı değiştiği benzer göllerin aynı yöntemle izlenmesi etkileri ayırmaya yardım eder. Alg miktarı tek başına toplam tür çeşitliliğini göstermez."
      },
      {
            "id": "f6-2-t1-10",
            "subject": "fen",
            "term": 2,
            "prompt": "Aynı basınçta yapılan kontrolde X termometresi, gerçek sıcaklığı 0 °C olan eriyen saf buzu 5 °C; gerçek sıcaklığı 100 °C olan kaynayan saf suyu 105 °C gösteriyor. Y termometresi aynı durumları −3 °C ve 97 °C gösteriyor. Her termometrenin bu aralıkta her sıcaklığı aynı miktarda hatalı gösterdiği belirleniyor. Saf K’nin erimesi X ile 45 °C, saf L’nin erimesi Y ile 37 °C ölçülüyor.\n\nBu ölçümlerin düzeltilmesi ve madde kimliği hakkında hangi sonuç doğrudur?",
            "options": [
                  "K ve L’nin erime sıcaklıkları 40 °C’dir; aynı madde olduklarını söylemek için başka ayırt edici özellikler de karşılaştırılmalıdır.",
                  "K 50 °C’de, L 34 °C’de erir; bu nedenle maddeler kesinlikle farklıdır.",
                  "K 40 °C’de, L 34 °C’de erir; termometrelerin ikisinden de hata miktarı çıkarılmalıdır.",
                  "K ve L 40 °C’de erir; bu tek ölçüm iki maddenin aynı madde olduğunu kesinleştirir."
            ],
            "correct": 0,
            "explanation": "X her değeri 5 °C yüksek gösterir; K için 45 − 5 = 40 °C bulunur. Y her değeri 3 °C düşük gösterir; L için 37 + 3 = 40 °C bulunur. Hata düzeltmesinin yönü iki termometrede farklıdır. Erime noktalarının eşit olması tek başına madde kimliğini kesinleştirmez; aynı basınçta kaynama noktası gibi başka ayırt edici özellikler de incelenmelidir."
      }
],
    test2: [
  {
    "id": "f6-2-t2-01",
    "subject": "fen",
    "term": 2,
    "prompt": "K, L ve M metal şeritlerinin 20 °C’deki boyları 100’er mm’dir. Ayrı ayrı 80 °C’ye getirildiklerinde ölçülen boyları şekilde verilmiştir. İki şerit boyları boyunca birleştirilince birlikte bükülebiliyor; daha çok uzayan katman, kıvrımın dış tarafında kalıyor.\n\n20 °C’de hazırlanan birinci düzende üstte K, altta L vardır. İkinci düzende yalnız üst katman M ile değiştirilmiştir. Sol uçlar sabit, sağ uçlar serbesttir. İki düzenek de 80 °C’ye getirildiğinde serbest uçlar sırasıyla hangi yönde bükülür? Katmanlar ayrılmıyor; erime olmuyor.",
    "options": [
      "I; I",
      "II; I",
      "I; II",
      "II; II"
    ],
    "correct": 2,
    "explanation": "İlk düzende L, K’den daha fazla uzar: 100,12 mm > 100,06 mm. Alt katman L kıvrımın dış tarafında kalacağından serbest uç yukarıya, I yönüne bükülür. İkinci düzende üstteki M, alttaki L’den daha fazla uzar: 100,18 mm > 100,12 mm. Bu kez üst katman dışta kalır; serbest uç aşağıya, II yönüne bükülür. Katmanların yalnız ısınması değil, birbirlerine göre ne kadar uzadıkları önemlidir.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-01.svg",
    "imageAlt": "20 °C’de her şerit 100 mm. 80 °C’de K 100,06 mm, L 100,12 mm, M 100,18 mm. İlk birleşik şeritte üstte K, altta L; sol uç sabit. Serbest uç için I yukarı, II aşağı yönü gösteriyor.",
    "imageWidth": 360,
    "imageHeight": 570
  },
  {
    "id": "f6-2-t2-02",
    "subject": "fen",
    "term": 2,
    "prompt": "İçi dolu, su almayan ve suda çözünmeyen 54 g’lık bir cisim suya tamamen batırılıyor. İlk okumada cismin dışına bir hava kabarcığı tutunmuş olduğu fark ediliyor. Cisim su içinde tutulurken kabarcık uzaklaştırılıyor ve yeniden okuma yapılıyor. Su eklenmiyor, taşma veya madde kaybı olmuyor; bütün ölçümler aynı sıcaklıktadır. Kabarcığın kütlesi ihmal ediliyor.\n\nKabarcıklı ölçümle hesaplanan yoğunluk ile düzeltilmiş yoğunluk karşılaştırıldığında hangi sonuç doğrudur? Cisim, kabarcık uzaklaştırıldıktan sonra yoğunluğu 2,1 g/cm³ olan başka bir sıvıya bırakılıyor; bu sıvıda da değişime uğramıyor.",
    "options": [
      "İlk hesap yoğunluğu küçük gösterir; doğru yoğunluk 2,25 g/cm³ olduğundan cisim ikinci sıvıda batar.",
      "İlk hesap yoğunluğu küçük gösterir; doğru yoğunluk 1,8 g/cm³ olduğundan cisim ikinci sıvıda yüzer.",
      "İlk hesap yoğunluğu büyük gösterir; doğru yoğunluk 2,25 g/cm³ olduğundan cisim ikinci sıvıda batar.",
      "İlk hesap yoğunluğu küçük gösterir; doğru yoğunluk 0,675 g/cm³ olduğundan cisim ikinci sıvıda yüzer."
    ],
    "correct": 0,
    "explanation": "Kabarcıklı ölçümde yer değiştiren su hacmi 80 − 50 = 30 cm³, hesaplanan yoğunluk 54 ÷ 30 = 1,8 g/cm³ olur. Kabarcık uzaklaştırılınca cismin gerçek hacmi 74 − 50 = 24 cm³ bulunur. Doğru yoğunluk 54 ÷ 24 = 2,25 g/cm³’tür. Kabarcık hacmi fazla, yoğunluğu küçük göstermiştir. Kabarcıksız cismin yoğunluğu 2,1 g/cm³’ten büyük olduğundan ikinci sıvıda batar.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-02.svg",
    "imageAlt": "Aynı dereceli kapta üç okuma: cisim yokken 50 cm³, tamamen batmış cisim ve dışına tutunmuş kabarcıkla 80 cm³, aynı cisim kabarcıksızken 74 cm³. Cismin kütlesi 54 g.",
    "imageWidth": 360,
    "imageHeight": 590
  },
  {
    "id": "f6-2-t2-03",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekildeki kutuların hacimleri üzerlerinde yazılıdır. Her simge, kendi açıklamasındaki kütleyi temsil eder; simgeler gerçek tanecik değildir. Modelde örneklerin toplam kütlesi, kutularındaki simgelerin temsil ettiği kütlelerin toplamıdır.\n\nÖnce P, Q ve R’nin yoğunlukları karşılaştırılıyor. Sonra Q ile aynı hacimde, fakat P ile aynı yoğunlukta yeni bir örnek yalnız turuncu karelerle modellenecektir. Doğru yoğunluk sıralaması ve yeni kutuda bulunması gereken toplam turuncu kare sayısı hangisidir?",
    "options": [
      "Q > P > R; 6 kare",
      "P = R > Q; 6 kare",
      "P > Q = R; 8 kare",
      "P = R > Q; 12 kare"
    ],
    "correct": 3,
    "explanation": "P’nin kütlesi 4 × 3 = 12 g ve yoğunluğu 12 ÷ 10 = 1,2 g/cm³’tür. Q’nun kütlesi 6 × 2 = 12 g, yoğunluğu 12 ÷ 20 = 0,6 g/cm³’tür. R’nin kütlesi 3 × 4 = 12 g ve yoğunluğu 12 ÷ 10 = 1,2 g/cm³’tür. Bu nedenle P = R > Q olur. Yeni 20 cm³ örneğin kütlesi 1,2 × 20 = 24 g olmalıdır. Her turuncu kare 2 g temsil ettiğinden toplam 24 ÷ 2 = 12 kare gerekir; simgeleri yalnız saymak yeterli değildir.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-03.svg",
    "imageAlt": "P: 10 cm³ hacimde dört mavi daire, her daire 3 g. Q: 20 cm³ hacimde altı turuncu kare, her kare 2 g. R: 10 cm³ hacimde üç mor üçgen, her üçgen 4 g.",
    "imageWidth": 360,
    "imageHeight": 570
  },
  {
    "id": "f6-2-t2-04",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekildeki ayarlanabilir direnç telinin her aralığı eşit uzunlukta, cinsi ve kalınlığı her yerde aynıdır. Devreye yalnız hareketli A ve B temasları arasında kalan tel katılır; dışta kalan kısımlar etki etmez. Temaslar birbirini geçmez. Pil, ampul, sıcaklık ve bağlantı koşulları değişmiyor.\n\nBirinci işlemde A, 4 numaralı çizgiye; B, 9 numaralı çizgiye getiriliyor. İkinci işlemde A yeni yerinde tutulurken yalnız B, 6 numaralı çizgiye getiriliyor. Her işlemin sonundaki ampul parlaklığı başlangıçtaki parlaklıkla karşılaştırılırsa sırasıyla nasıl değişir?",
    "options": [
      "Azalır; artar.",
      "Değişmez; artar.",
      "Artar; değişmez.",
      "Değişmez; azalır."
    ],
    "correct": 1,
    "explanation": "Başlangıçta A 2’de, B 7’dedir; etkin tel 7 − 2 = 5 aralıktır. Birinci işlemde A 4’e, B 9’a gelir. Aralarındaki tel yine 9 − 4 = 5 aralık olduğundan direnç ve parlaklık değişmez. Sonra B 6’ya gelir, A 4’te kalır; etkin tel 6 − 4 = 2 aralığa iner. Aynı telin kullanılan uzunluğu azaldığı için direnç azalır ve ampul başlangıca göre daha parlak yanar.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-04.svg",
    "imageAlt": "Pil ve ampullü devrenin iki hareketli teması, 0’dan 10’a eşit aralıklı direnç teli üzerindedir. A teması 2’de, B teması 7’dedir. Yalnız A ile B arasındaki tel devrededir.",
    "imageWidth": 360,
    "imageHeight": 420
  },
  {
    "id": "f6-2-t2-05",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir bölgede aynı yöntem ve yeterli gözlem süresiyle taranan P, Q ve R yaşam alanlarında kaydedilen türler tabloda işaretlidir. Her harf farklı bir türü gösterir. Koruma bütçesi, bu üç alandan tam ikisinin korunmasına yeterlidir. Amaç, tabloda kaydedilen türlerin olabildiğince çoğunun yaşam alanını koruma kapsamına almaktır.\n\nHangi seçim ve gerekçe bu amaca uygundur? Yalnız tabloda verilen tür kayıtları değerlendirilecektir.",
    "options": [
      "P ve Q; iki sütundaki işaretlerin toplamı 9 olduğu için 9 farklı tür korunur.",
      "P ve R; P’deki tür sayısı en yüksek olduğundan P’yi içeren her ikili en iyi sonucu verir.",
      "Q ve R; ortak türleri olmadığı için birlikte 7 farklı türü kapsar ve tablodaki tüm türlere alan sağlar.",
      "Yalnız P; 5 tür içerdiği için ikinci bir alanı korumak hiçbir yeni tür ekleyemez."
    ],
    "correct": 2,
    "explanation": "P’de A, B, C, D, E; Q’da A, B, C, F; R’de D, E, G türleri kayıtlıdır. P ve Q birlikte 6 farklı türü, P ve R de 6 farklı türü kapsar. Q ve R birlikte A’dan G’ye 7 farklı türün tamamını kapsar. Ortak türleri tekrar tekrar saymak çeşitliliği olduğundan fazla gösterir. Bu seçim, yalnız verilen kayıtlar ve amaç bakımından uygundur; koruma başarısı ayrıca izlenmelidir.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-05.svg",
    "imageAlt": "Türlerin yaşam alanlarına göre varlık tablosu. P: A, B, C, D, E. Q: A, B, C, F. R: D, E, G. Dolu daire türün o alanda kaydedildiğini gösterir.",
    "imageWidth": 360,
    "imageHeight": 530
  },
  {
    "id": "f6-2-t2-06",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir öğrenci, aynı basınçta saf K ve L maddelerinin erime ve kaynama noktalarını ölçerek onları ayırt etmek istiyor. Başvuru değerleri K için 42 °C ve 92 °C; L için 44 °C ve 96 °C’dir. Ölçümlerde tek bir termometre kullanılacak ve ara değer tahmini yapılmadan dört sıcaklığın da ölçek çizgilerinden doğrudan okunabilmesi istenecektir.\n\nŞekilde uç değerleri ve en küçük bölmeleri verilen termometrelerden hangisi bu iki koşulu birlikte karşılar? Ölçekler düzenli aralıklıdır; termometrelerin ölçüm hatası yoktur.",
    "options": [
      "P",
      "Q",
      "R",
      "S"
    ],
    "correct": 3,
    "explanation": "Ölçme aralığı ile bölme büyüklüğü birlikte değerlendirilmelidir. P dört sıcaklığı kapsasa da 10 °C aralıklı çizgiler 42, 44, 92 ve 96 °C’yi doğrudan göstermez. Q’nun üst sınırı kaynama noktalarına, R’nin alt sınırı erime noktalarına uygun değildir. S’de 30’dan 110’a ikişer derece ilerleyen çizgiler arasında 42, 44, 92 ve 96 °C bulunur; S iki koşulu da karşılar.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-06.svg",
    "imageAlt": "P termometresi 0–110 °C, en küçük bölme 10 °C. Q 30–90 °C, bölme 2 °C. R 50–110 °C, bölme 1 °C. S 30–110 °C, bölme 2 °C.",
    "imageWidth": 360,
    "imageHeight": 610
  },
  {
    "id": "f6-2-t2-07",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekilde her kart konumuna giden kırmızı ve mavi ışık yolları gösterilmiştir. Siyah çubuklar opak perdedir; perdenin kestiği ışık karta ulaşmaz. Kartlara başka yoldan ışık gelmiyor.\n\nBaşlangıçta P’ye yalnız kırmızı ışığı yansıtan kırmızı kart, Q’ya yalnız mavi ışığı yansıtan mavi kart konuyor. Kartlar diğer rengi soğuruyor ve kendileri ışık üretmiyor. Sonra perdeler ve kaynaklar değiştirilmeden iki kartın yeri değiştiriliyor. İlk ve son görünümler hangi seçenekte doğru verilmiştir?",
    "options": [
      "İlk: P ve Q siyah. Son: P mavi, Q kırmızı.",
      "İlk: P kırmızı, Q mavi. Son: P ve Q siyah.",
      "İlk: P ve Q siyah. Son: P kırmızı, Q mavi.",
      "İlk: P mavi, Q kırmızı. Son: P ve Q siyah."
    ],
    "correct": 0,
    "explanation": "P’ye giden kırmızı ışık perdeyle kesilir; P’ye yalnız mavi ışık ulaşır. Q’ya giden mavi ışık kesilir; Q’ya yalnız kırmızı ışık ulaşır. Başlangıçta her kart kendisine gelen rengi soğurur ve ikisi de siyah görünür. Kartların yeri değişince P’deki mavi kart mavi ışığı, Q’daki kırmızı kart kırmızı ışığı yansıtır. Kartın görünümünü belirlerken hem yüzeyin yansıttığı hem de yüzeye gerçekten ulaşan renk dikkate alınmalıdır.",
    "imageUrl": "/grade6/fen/term-2/test-2/soru-07.svg",
    "imageAlt": "P konumunda kırmızı kaynaktan karta giden yol opak perdeyle kesilmiş, mavi yol açıktır. Q konumunda kırmızı yol açık, mavi yol opak perdeyle kesilmiştir.",
    "imageWidth": 360,
    "imageHeight": 620
  },
  {
    "id": "f6-2-t2-08",
    "subject": "fen",
    "term": 2,
    "prompt": "Kesintisiz bir metal telin dışı ince bir kaplamayla örtülüdür. Tel, sağlam bir pil–ampul devresinin iki bağlantı ucu arasına yerleştiriliyor.\n• İki bağlantı da kaplamaya değince ampulde gözle görülür ışık oluşmuyor.\n• Yalnız bir bağlantı yerindeki kaplama kazınıp metal açığa çıkarılınca yine ışık oluşmuyor.\n• İkinci bağlantı yeri de kazınıp iki uç doğrudan metale değdirilince ampul yanıyor.\nKazıma sırasında metal tel kesilmiyor veya incelmiyor; diğer koşullar aynı tutuluyor.\n\nÜç denemeyi birlikte açıklayan en uygun değerlendirme hangisidir?",
    "options": [
      "Kazıma, metalin cinsini değiştirdiği için ilk iki denemede yalıtkan olan metal son denemede iletken olmuştur.",
      "Son deneme metal üzerinden iletim sağlanabildiğini gösterir; yalnız bir temas yerini açmak bu düzende yeterli olmamıştır.",
      "İlk iki deneme, telin metal kısmının kesinlikle yalıtkan olduğunu kanıtlar; son deneme bu bilgiyle ilgili değildir.",
      "Kaplama her durumda metalden daha iyi iletkendir; iki yerden kazınınca telin uzunluğu arttığı için ampul yanmıştır."
    ],
    "correct": 1,
    "explanation": "Metal telin cinsi ve boyutları değişmediği hâlde iki bağlantı doğrudan metale temas edince ampul yanmıştır. Sonuç, metal üzerinden ampulü yakacak iletimin sağlanabildiğini gösterir. İlk iki denemede kaplamalı temaslardan en az biri bu iletimi engellemiştir; yalnız bir temasın açılması yeterli olmamıştır. Işık görülmemesi tek başına metal çekirdeğin yalıtkan olduğunu veya devrede kesinlikle hiç akım bulunmadığını kanıtlamaz."
  },
  {
    "id": "f6-2-t2-09",
    "subject": "fen",
    "term": 2,
    "prompt": "Boş kütlesi bilinmeyen aynı kap, aynı saf sıvıyla iki kez tartılıyor. İlkinde kapta 30 cm³ sıvı varken toplam kütle 82 g; ikincisinde 70 cm³ sıvı varken toplam kütle 130 g ölçülüyor. Sıcaklık aynı, kabın dış yüzeyi kuru, kabın kütlesi değişmemiştir; tartıya kap ile sıvı dışında bir şey konmuyor.\n\nSıvının yoğunluğu ve aynı kapta 100 cm³ sıvı bulunduğunda ölçülecek toplam kütle sırasıyla hangisidir?",
    "options": [
      "1,2 g/cm³; 120 g",
      "1,6 g/cm³; 210 g",
      "2,4 g/cm³; 286 g",
      "1,2 g/cm³; 166 g"
    ],
    "correct": 3,
    "explanation": "İki tartımın farkında kabın kütlesi birbirini götürür: 70 − 30 = 40 cm³ ek sıvının kütlesi 130 − 82 = 48 g’dır. Yoğunluk 48 ÷ 40 = 1,2 g/cm³ olur. İlk tartımdaki sıvı 30 × 1,2 = 36 g olduğuna göre boş kap 82 − 36 = 46 g’dır. 100 cm³ sıvı 120 g gelir; kapla birlikte toplam 120 + 46 = 166 g ölçülür. Toplam tartımı doğrudan sıvı hacmine bölmek, kabın kütlesini de sıvıya katma hatası doğurur."
  },
  {
    "id": "f6-2-t2-10",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir yolun iki tarafındaki orman parçalarında aynı 10 yerli hayvan türü iki yılda da kaydediliyor. Eşit gözlem süresi ve aynı yöntemle ilk yıl yolun karşısına geçmeye yönelik 80 girişim, bu girişimler sırasında 20 ölüm; ikinci yıl 8 girişim ve bu girişimler sırasında 2 ölüm kaydediliyor. İkinci yıl yol kenarlarına kesintisiz çitler eklenmiş. Bir öğrenci, “Ölümler azaldı; yolun iki tarafı arasındaki bağlantı kesinlikle iyileşti.” diyor.\n\nVerilerin desteklediği değerlendirme ve uygun sonraki çalışma hangisidir?",
    "options": [
      "Ölüm sayısı azaldığından bağlantı iyileşmiştir; geçiş girişimlerini yeniden izlemek gereksizdir.",
      "Girişim başına ölüm oranı ikinci yıl artmıştır; bunun tek nedeninin yerli tür sayısının artması olduğu söylenebilir.",
      "Girişim başına ölüm oranı değişmemiş, girişimler azalmıştır; çitlerin alanlar arası geçişi sınırlayıp sınırlamadığı ve türe uygun güvenli geçitler araştırılmalıdır.",
      "İki yılda da 10 tür bulunduğundan bütün türlerin birey sayılarının ve alanlar arası hareketlerinin aynı kaldığı kanıtlanmıştır."
    ],
    "correct": 2,
    "explanation": "İlk yıl girişimlerin 20/80 = 1/4’ü, ikinci yıl 2/8 = 1/4’ü ölümle sonuçlanmıştır. Toplam ölüm azalsa da girişim başına kayıtlı ölüm oranı düşmemiştir; girişim sayısı da 80’den 8’e inmiştir. Bu kayıtlar bağlantının iyileştiğini kanıtlamaz. Çitler güvenliği etkileyebildiği gibi yaşam alanları arasındaki hareketi de sınırlayabilir. Etkileri ve uygun güvenli geçitler araştırılmalıdır. Aynı tür sayısı, her türün birey sayısının veya hareketinin aynı olduğunu göstermez."
  }
],
    test3: [
  {
    "id": "f6-2-t3-01",
    "subject": "fen",
    "term": 2,
    "prompt": "İdeal modelde opak kırmızı yüzey yalnız kırmızı ışığı, opak mavi yüzey yalnız mavi ışığı tamamen yansıtıyor; diğer rengi tamamen soğuruyor. İki yüzeye de her denemede şekildeki ışık paketinin aynısı gönderiliyor. Çubuklardaki her eşit bölme, eşit miktarda ışık enerjisini temsil ediyor. Başka ışık yoktur.\n\nI. denemeden II. denemeye geçildiğinde daha çok enerji soğuran yüzey ve yüzeylerin görünen renkleri için hangisi doğrudur?",
    "options": [
      "I’de kırmızı, II’de mavi daha çok soğurur; iki yüzey de kendi renginde görünür.",
      "İki denemede de eşit enerji soğururlar; toplam gelen enerji her iki pakette de aynıdır.",
      "I’de mavi, II’de kırmızı daha çok soğurur; iki denemede de yüzeyler kendi renginde görünür.",
      "I’de mavi, II’de kırmızı daha çok soğurur; daha çok soğuran yüzey siyah görünür."
    ],
    "correct": 2,
    "explanation": "I. pakette 3 birim kırmızı ve 1 birim mavi ışık enerjisi vardır. Kırmızı yüzey 1 birim maviyi, mavi yüzey 3 birim kırmızıyı soğurur. II. pakette değerler tersine döndüğünden kırmızı yüzey 3, mavi yüzey 1 birim soğurur. İki pakette de her iki renk bulunduğu için yüzeyler yansıttıkları kendi renklerinde görünür. Daha çok enerji soğurmak, görünür ışığın tamamını soğurmak demek değildir.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-01.svg",
    "imageAlt": "I. ışık paketi: üç eşit kırmızı enerji bölmesi ve bir mavi bölme. II. paket: bir kırmızı bölme ve üç eşit mavi bölme. Her paket ayrı ayrı iki yüzeyin her birine gönderilir.",
    "imageWidth": 360,
    "imageHeight": 430
  },
  {
    "id": "f6-2-t3-02",
    "subject": "fen",
    "term": 2,
    "prompt": "K ve L metal cetvellerinin ölçekleri 20 °C’de doğru ölçüyor. Sıcaklığı sürekli 20 °C’de tutulan aynı çubuğun boyu değişmiyor. Cetveller sırayla ve çubuğa ısı aktarmadan kullanılıyor; her okumada sıfır çizgisi çubuğun sol ucuna hizalanıyor. Cetveller eşit sıcaklık artışıyla 80 °C’ye getirildiğinde şekildeki yaklaşık okumalar alınıyor. Cetveller her yerinde düzgün genleşiyor; eğilme, üretimden kaynaklanan ölçek hatası veya kalıcı biçim değişimi yoktur. Genleşme ve büzülme tersinirdir.\n\nOkumaların nedenini ve cetveller tekrar 20 °C’ye soğutulduğundaki durumu birlikte doğru açıklayan seçenek hangisidir?",
    "options": [
      "L’nin ölçek aralıkları daha çok genişlemiştir; iki cetvel de soğutulunca çubuğu yeniden 100,0 cm gösterir.",
      "Çubuk L ile ölçülürken daha çok büzülmüştür; cetveller soğutulunca da iki farklı boy ölçülür.",
      "K’nin ölçek aralıkları daha çok genişlemiştir; K’nin sıcak okuması daha büyük olduğu için genleşmesi fazladır.",
      "İki cetvelin genleşmesi eşittir; eşit sıcaklık artışı bütün metallerde aynı genleşmeyi sağlar."
    ],
    "correct": 0,
    "explanation": "Çubuğun gerçek boyu değişmediğine göre azalan okuma çubuğun büzülmesinden kaynaklanamaz. Cetvel genleşince iki ölçek çizgisi arasındaki gerçek uzaklık artar; aynı çubuğun boyuna daha az ölçek aralığı sığar. L’nin okuması daha küçük olduğundan L’deki aralıklar daha fazla genişlemiştir. Kalıcı değişim olmadığı için cetveller başlangıç sıcaklığına döndüğünde ölçek aralıkları da ilk durumuna döner ve ikisi de 100,0 cm okur.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-02.svg",
    "imageAlt": "Değişmeyen çubuk, her okumada cetvelin sıfırına hizalıdır. 20 °C’de K ve L: 100,0 cm. 80 °C’de K: yaklaşık 99,9 cm, L: yaklaşık 99,8 cm. Şemadaki genleşme görünür olması için büyütülmüştür.",
    "imageWidth": 360,
    "imageHeight": 540
  },
  {
    "id": "f6-2-t3-03",
    "subject": "fen",
    "term": 2,
    "prompt": "X, Y ve Z cisimlerinin her biri içi dolu, homojen ve 10 cm³ hacmindedir. İkişer cisimle yapılan tartımların sonuçları şekilde verilmiştir; teraziye başka bir şey konmamıştır. Cisimler daha sonra yoğunluğu 2,4 g/cm³ olan bir sıvıda ayrı ayrı deneniyor. Çözünme, sıvı alma, tepkime ve hava kabarcığı yoktur; sıcaklık değişmez.\n\nY’nin yoğunluğu ile Z’nin sıvıya serbest bırakıldığındaki durumu hangi seçenekte birlikte doğrudur?",
    "options": [
      "2,4 g/cm³; batar.",
      "2,1 g/cm³; yüzer.",
      "1,8 g/cm³; yüzer.",
      "2,1 g/cm³; batar."
    ],
    "correct": 3,
    "explanation": "Üç tartım toplanınca her cisim iki kez sayılır: 36 + 48 + 42 = 126 g. X, Y ve Z’nin birer tanesinin toplamı 126 ÷ 2 = 63 g’dır. X ile Z birlikte 42 g olduğundan Y = 63 − 42 = 21 g; yoğunluğu 21 ÷ 10 = 2,1 g/cm³’tür. X ile Y birlikte 36 g olduğundan Z = 63 − 36 = 27 g; yoğunluğu 2,7 g/cm³’tür. Z’nin yoğunluğu sıvının 2,4 g/cm³ değerinden büyük olduğu için Z batar.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-03.svg",
    "imageAlt": "Her cismin hacmi 10 cm³. Birinci tartımda X ve Y toplam 36 g; ikinci tartımda Y ve Z toplam 48 g; üçüncü tartımda X ve Z toplam 42 g.",
    "imageWidth": 360,
    "imageHeight": 510
  },
  {
    "id": "f6-2-t3-04",
    "subject": "fen",
    "term": 2,
    "prompt": "Pille çalışan iletkenlik deneyinde bilinmeyen K parçası, şekildeki iki temas noktası arasına yerleştiriliyor ve ampul yanıyor. K çıkarılıp aynı aralığa kuru plastik konunca da ampul yanmaya devam ediyor. Temaslar sağlam; pil, ampul ve diğer bağlantılar değişmiyor. Şekilde görülen bakır köprü her iki denemede de yerindedir.\n\nK’nin elektriği iletme durumunu araştırmak için hangi değerlendirme ve sonraki deneme en uygundur?",
    "options": [
      "K iletkendir; aynı düzende daha büyük bir K parçası denemek bunu kesinleştirir.",
      "Bakır köprü K’den bağımsız bir yol oluşturur; köprü çıkarılıp çalışan devrede K yeniden denenmelidir.",
      "K ve kuru plastik kesinlikle aynı iletkenliğe sahiptir; ampulün yanması ikisinin dirençlerini eşit gösterir.",
      "Bakır köprü çıkarılmamalıdır; yalnız pil ters çevrilirse K’nin iletkenliği diğer yoldan ayrılabilir."
    ],
    "correct": 1,
    "explanation": "İki temas noktası bakır köprüyle zaten bağlanmıştır. K veya plastik üzerinden yeterli iletim olmasa bile bakır yol devreyi tamamlayabilir. Bu yüzden bu iki yanma gözlemi K’nin iletkenliğini ayırt etmez. Köprü kaldırıldıktan sonra test aralığında bilinen bir iletkenle devrenin çalıştığı doğrulanmalı, ardından aynı koşullarda K denenmelidir. Bir ampulün yanması, aradaki her parçanın iletken olduğunu veya dirençlerinin eşit olduğunu göstermez.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-04.svg",
    "imageAlt": "Pil ve ampul, soldaki ve sağdaki temas noktalarına bağlıdır. Bu noktaların arasında K parçası vardır. Aynı iki noktayı K’ye uğramadan bağlayan ikinci yol, üstteki kesintisiz bakır köprüdür.",
    "imageWidth": 360,
    "imageHeight": 430
  },
  {
    "id": "f6-2-t3-05",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekildeki devrede ek tel ile reosta teli aynı maddeden ve aynı kalınlıktadır. Reostanın yalnız A ucu ile sürgü arasındaki bölümü devreye katılır. Diğer bağlantıların direnci ihmal edilir; pil, ampul, sıcaklık ve temas koşulları değişmez. Aynı toplam tel uzunluğu aynı parlaklığı sağlar. Başlangıç düzeni görseldedir.\n\nBaşlangıçtan bağımsız olarak iki yeni düzen kuruluyor: I’de ek tel 40 cm’lik, II’de 10 cm’lik aynı tür telle değiştiriliyor. Her iki düzende de başlangıçtaki parlaklığı korumak için sürgü sırasıyla hangi noktalara getirilmelidir?",
    "options": [
      "B; C",
      "D; E",
      "B; E",
      "E; B"
    ],
    "correct": 2,
    "explanation": "Başlangıçta ek tel 20 cm, sürgü D’de olduğundan reostanın kullanılan A–D bölümü 30 cm’dir; toplam 50 cm tel devrededir. I’de ek tel 40 cm olunca reostadan 10 cm kullanılmalıdır: sürgü B’ye gelir. II’de ek tel 10 cm olunca reostadan 40 cm kullanılmalıdır: sürgü E’ye gelir. Her iki durumda da toplam uzunluk 50 cm olduğundan aynı cins ve kalınlıktaki tellerin toplam direnci, dolayısıyla ampul parlaklığı korunur.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-05.svg",
    "imageAlt": "Başlangıç devresi: 20 cm ek tel ve sürgüsü D’de olan reosta. Reosta üzerinde A: 0 cm, B: 10 cm, C: 20 cm, D: 30 cm, E: 40 cm; uzaklıklar A’dan ölçülür. A ve sürgü devreye bağlıdır.",
    "imageWidth": 360,
    "imageHeight": 470
  },
  {
    "id": "f6-2-t3-06",
    "subject": "fen",
    "term": 2,
    "prompt": "Başlangıçta tamamen katı olan saf X maddesi sabit basınçta ısıtılıyor. Çevreye ısı kaybı ihmal edilen modelde ısıtıcı yalnız grafiğin altındaki işaretli zaman aralığında kapatılıyor. Bu aralık boyunca kapta yalnız sıvı bulunduğu gözleniyor. Diğer bütün zamanlarda ısıtıcı çalışıyor; deney sonunda bir miktar sıvı hâlâ vardır.\n\nGrafik ve gözlem birlikte kullanıldığında erime ve kaynama noktaları ile 80 °C’deki yatay bölüm hangi seçenekte doğru yorumlanmıştır?",
    "options": [
      "Erime 50 °C, kaynama 80 °C’dir; her yatay bölüm bir hâl değişimini gösterir.",
      "Erime 80 °C, kaynama 90 °C’dir; ilk yatay bölümde madde henüz ısı almamıştır.",
      "Erime 50 °C, kaynama 90 °C’dir; 80 °C’deki bölüm de ikinci bir erime noktasıdır.",
      "Erime 50 °C, kaynama 90 °C’dir; 80 °C’de sıcaklığın sabitliği tek başına hâl değişimi kanıtı değildir."
    ],
    "correct": 3,
    "explanation": "50 °C’de ısıtıcı çalışmasına rağmen sıcaklık sabit kalır; başlangıçtaki saf katı burada erir. Sonraki sıvı 90 °C’ye ulaşınca ısı almaya devam ederken kaynar; kapta sıvı kaldığı için sıcaklık sabit kalır. 6–8. dakikalardaki 80 °C bölümü farklıdır: ısıtıcı kapalıdır, ısı kaybı ihmal edilir ve yalnız sıvı gözlenir. Enerji aktarımı olmadan da sıcaklık sabit kalabileceğinden her yatay bölüm otomatik olarak hâl değişimi sayılmaz.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-06.svg",
    "imageAlt": "Sıcaklık-zaman grafiği: 0. dakika 20 °C; 2–4. dakikalar 50 °C; 6–8. dakikalar 80 °C; 10–12. dakikalar 90 °C. Aradaki yükselişler doğrusaldır. Isıtıcı yalnız 6–8. dakikalarda kapalıdır.",
    "imageWidth": 360,
    "imageHeight": 480
  },
  {
    "id": "f6-2-t3-07",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir sulak alanda iki yıl aynı yöntem, mevsim ve yeterli gözlem süresiyle yapılan taramanın kayıtları şekilde verilmiştir. A, B, C ve D bölgenin yerli türleridir. E ve F, iki tarama arasında insan eliyle bu alana getirilen türlerdir. Öğrenci, “Tür sayısı değişmedi; bu nedenle yerli biyoçeşitliliği koruma bakımından bir uyarı yoktur.” diyor.\n\nKayıtların desteklediği en uygun değerlendirme hangisidir?",
    "options": [
      "Toplam kayıtlı tür sayısı aynı olsa da iki yerli tür artık kaydedilmemiştir; kaybın nedenleri araştırılmalı, E ve F’nin gelişi tek başına nedenin kanıtı sayılmamalıdır.",
      "E ve F kaydedildiği için yerli tür sayısı artmıştır; yerli türleri yeniden taramak gereksizdir.",
      "Toplam tür sayısı aynı olduğundan türlerin kimliği ve yerli olup olmaması koruma değerlendirmesini değiştirmez.",
      "C ve D ikinci yıl kaydedilmediği için bu türlerin dünyanın her yerinde yok olduğu ve tek nedenin E ile F olduğu kanıtlanmıştır."
    ],
    "correct": 0,
    "explanation": "İlk taramada A, B, C ve D olmak üzere dört yerli tür; son taramada A, B, E ve F olmak üzere yine dört tür kayıtlıdır. Ancak kayıtlı yerli tür sayısı dörtten ikiye düşmüştür. Toplam sayının aynı kalması, tür bileşiminin ve yerli çeşitliliğin korunduğunu göstermez. C ve D’nin alandaki durumu ile olası tehditler araştırılmalıdır. Veriler, dünya çapında yok oluşu veya kaybın yalnız getirilen türlerden kaynaklandığını kanıtlamaz.",
    "imageUrl": "/grade6/fen/term-2/test-3/soru-07.svg",
    "imageAlt": "Tür kayıt tablosu. İlk tarama: A, B, C, D var; E, F yok. Son tarama: A, B, E, F var; C, D yok. A–D yerli, E–F sonradan getirilen türlerdir. Dolu daire kayıt var, kısa çizgi kayıt yok anlamındadır.",
    "imageWidth": 360,
    "imageHeight": 530
  },
  {
    "id": "f6-2-t3-08",
    "subject": "fen",
    "term": 2,
    "prompt": "İçi dolu, homojen bir cismin ölçüm araçlarındaki belirsizlikler dikkate alındığında gerçek kütlesinin 18–22 g, gerçek hacminin 9–11 cm³ arasında olduğu biliniyor. Bu aralıklardaki bütün kütle–hacim eşleşmeleri mümkün kabul ediliyor; uç değerler de buna dâhildir. Cisim yoğunluğu 2 g/cm³ olan bir sıvıya bırakılacaktır. Çözünme, sıvı alma, tepkime veya hava kabarcığı olmayacak; sıcaklık değişmeyecektir.\n\nBu verilerle cismin batması ya da yüzmesi hakkında hangi değerlendirme yapılabilir?",
    "options": [
      "Kesinlikle batar; kütlenin en büyük değerini hacmin en küçük değerine bölmek tek geçerli hesaplamadır.",
      "Kesin karar verilemez; mümkün ölçüm çiftlerinin bazıları sıvıdan küçük, bazıları büyük yoğunluk verir.",
      "Kesinlikle yüzer; 18 g ile 11 cm³ kullanıldığında yoğunluğu sıvının yoğunluğundan küçüktür.",
      "Kesinlikle sıvı içinde askıda kalır; aralıkların orta değerleri olan 20 g ve 10 cm³ gerçek değerler olmak zorundadır."
    ],
    "correct": 1,
    "explanation": "Ölçüm aralıkları gerçek değerleri tek bir çifte indirmez. Örneğin 18 g ve 11 cm³ mümkünse yoğunluk 2 g/cm³’ten küçüktür; çünkü 18, 2 × 11 = 22’den küçüktür. 22 g ve 9 cm³ de mümkünse yoğunluk 2 g/cm³’ten büyüktür; çünkü 22, 2 × 9 = 18’den büyüktür. Bu iki olasılık farklı sonuçlar doğurur. Orta değerler zorunlu değildir; daha dar belirsizlikli ölçümler olmadan kesin batma veya yüzme kararı verilemez."
  },
  {
    "id": "f6-2-t3-09",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir bölgede yaprak artıklarını parçalayan K ve L ayrıştırıcı türleri vardır. Kontrollü denemelerde başlangıçta eşit miktarda yaprak, eşit canlı sayısı ve eşit süre kullanılıyor; diğer koşullar aynı tutuluyor.\n• 15 °C’de K ile yaprakların 8/10’u, L ile 2/10’u parçalanıyor.\n• 25 °C’de K ile yaprakların 2/10’u, L ile 8/10’u parçalanıyor.\nBir yönetici yalnız 15 °C’deki sonuca bakıp “L’yi korumaya gerek yok; K her koşulda aynı işi daha iyi yapar.” diyor.\n\nBu önerinin veriye dayalı eleştirisi hangisidir?",
    "options": [
      "Öneri doğrudur; 15 °C’deki üstünlük bütün sıcaklıklarda aynen korunur.",
      "K ve L’nin iki sıcaklıktaki kesirleri toplandığında eşit sonuç çıktığı için iki tür her sıcaklıkta aynı hızda çalışır.",
      "L yalnız 25 °C’de daha başarılı olduğundan K’nin korunmasına gerek olmadığı kesinleşir.",
      "Üstünlük sıcaklığa göre değişmektedir; iki türü de korumak, değişen koşullarda ayrıştırma işlevinin sürmesine katkı sağlayabilir."
    ],
    "correct": 3,
    "explanation": "15 °C’de K, 25 °C’de ise L aynı süre içinde daha çok yaprak parçalamıştır. Bu nedenle tek sıcaklıktaki performansı bütün koşullara genellemek doğru değildir. Farklı koşullarda etkili olan türlerin birlikte korunması, doğal yaşamın ayrıştırma gibi işlevlerinin sürmesine katkı sağlayabilir. Ayrı deneylerin sonuçlarını toplamak, her sıcaklıkta eşit performans bulunduğunu göstermez; veriler bütün sıcaklıklarda veya her ortamda kesin başarı da vaat etmez."
  },
  {
    "id": "f6-2-t3-10",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir kap 20 °C’de ağzına kadar 1000 cm³ sıvıyla dolduruluyor. Kap ve sıvı 80 °C’ye ısıtılınca kabın iç hacmi 1005 cm³ oluyor ve bir miktar sıvı taşıyor. Taşan sıvının tamamı da 80 °C’de tutulup bu sıcaklıkta ölçülüyor: 15 cm³. Buharlaşma, sıçrama veya başka madde kaybı yoktur; sıvı hâl değiştirmez.\n\nTaşma olmasaydı başlangıçtaki sıvının tamamının hacmi kaç cm³ artmış olurdu? Ardından taşan sıvı geri konmadan kap ve içindeki sıvı 20 °C’ye soğutulursa ne beklenir? Genleşme ve büzülme tersinir kabul ediliyor.",
    "options": [
      "15 cm³; kap yeniden ağzına kadar dolu olur.",
      "20 cm³; kap yeniden ağzına kadar dolu olur.",
      "20 cm³; sıvı seviyesi kabın ağzının altında kalır.",
      "5 cm³; sıvı seviyesi kabın ağzının altında kalır."
    ],
    "correct": 2,
    "explanation": "80 °C’de başlangıçtaki sıvının tamamı, kapta kalan 1005 cm³ ile taşan 15 cm³’ün toplamıdır: 1020 cm³. Hacim artışı 1020 − 1000 = 20 cm³’tür. Yalnız taşan 15 cm³’ü genleşme saymak, kabın iç hacmindeki 5 cm³ artışı yok sayar. Soğutulunca kap yine 1000 cm³ olur; fakat sıvının bir bölümü taşarak ayrıldığı ve geri konmadığı için aynı başlangıç sıcaklığında kapta 1000 cm³’ten az sıvı kalır. Bu yüzden kap ağzına kadar dolmaz."
  }
],
    test4: [
  {
    "id": "f6-2-t4-01",
    "subject": "fen",
    "term": 2,
    "prompt": "Metal halka ile kürenin 20 °C’deki ölçüleri ve ayrı ayrı 80 °C’ye getirildiklerindeki değişimleri görseldedir. Halka her yönde düzgün genleşir; ısıtılınca deliğinin çapı da büyür. Küre, ancak çapı deliğin çapından küçükse halkadan geçebilir. Şekiller ölçekli değildir; cisimler zorlanmaz ve erimez.\n\nÜç deneme birbirinden bağımsızdır:\nI. Yalnız halka 80 °C’ye getirilir; küre 20 °C’de tutulur.\nII. İkisi de 80 °C’ye getirilir.\nIII. Yalnız küre 80 °C’ye getirilir; halka 20 °C’de tutulur.\nGeçiş denemesinde belirtilen sıcaklıklar korunursa küre hangi durumlarda halkadan geçer?",
    "options": [
      "Yalnız I",
      "I ve II",
      "II ve III",
      "I ve III"
    ],
    "correct": 0,
    "explanation": "20 °C’de delik 30,00 mm, küre 30,02 mm’dir; başlangıçta geçiş olmaz. Isıtılan deliğin çapı 30,00 + 0,06 = 30,06 mm, ısıtılan küreninki 30,02 + 0,09 = 30,11 mm olur. I’de 30,02 < 30,06 olduğundan geçer. II’de 30,11 > 30,06; III’te 30,11 > 30,00 olduğundan geçmez. İki cismin birden genleşmesi, aralarındaki açıklığın mutlaka artacağı anlamına gelmez.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-01.svg",
    "imageAlt": "Halkanın 20 °C’deki delik çapı 30,00 mm; kürenin çapı 30,02 mm. 20 °C’den 80 °C’ye ısıtılınca delik çapı 0,06 mm, küre çapı 0,09 mm artar.",
    "imageWidth": 360,
    "imageHeight": 460
  },
  {
    "id": "f6-2-t4-02",
    "subject": "fen",
    "term": 2,
    "prompt": "Suda yüzen, 24 g kütleli bir K cisminin hacmini ölçmek için onu su içinde tutan bir ağırlık kullanılıyor. Görselde önce yalnız su, sonra tamamen batmış ağırlık, son olarak ağırlığa ince iple bağlanarak tamamen batırılmış K ile ağırlık birlikte gösteriliyor. İp hacmi ve kütlesi ihmal ediliyor. Su eklenmiyor; taşma, çözünme, su alma ve hava kabarcığı yoktur. Sıcaklık aynıdır.\n\nK’nin yoğunluğu kaç g/cm³’tür? K, ipten ayrılıp yoğunluğu 0,75 g/cm³ olan başka bir sıvıya bırakıldığında ne olur? K bu sıvıda da değişime uğramaz.",
    "options": [
      "0,48; yüzer.",
      "0,80; yüzer.",
      "0,80; batar.",
      "1,20; batar."
    ],
    "correct": 2,
    "explanation": "Ağırlığın hacmi 70 − 50 = 20 cm³’tür. K eklendiğindeki ilave yükselme 100 − 70 = 30 cm³ olduğundan K’nin hacmi 30 cm³’tür. Yoğunluğu 24 ÷ 30 = 0,80 g/cm³ olur. 50 cm³’lük toplam yükselmeyi K’nin hacmi saymak, ağırlığı da hesaba katmak olur. K suda yüzse de yoğunluğu 0,75 g/cm³ olan sıvıdan daha yoğundur; ikinci sıvıda batar.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-02.svg",
    "imageAlt": "Üç dereceli kapta seviye okumaları: yalnız su 50 cm³; tamamen batmış ağırlıkla 70 cm³; ağırlık ve ona bağlı, tamamen su içinde tutulan K ile 100 cm³. K’nin kütlesi 24 g.",
    "imageWidth": 360,
    "imageHeight": 640
  },
  {
    "id": "f6-2-t4-03",
    "subject": "fen",
    "term": 2,
    "prompt": "Basitleştirilmiş bir ölçüm modelinde 90 g suyun sıvı hâlde hacmi 90 cm³, tamamen donduğunda hacmi 100 cm³ alınıyor; madde kaybı olmuyor. Öğrenci, donmuş örneği görseldeki P, Q veya R modeliyle gösterecek. Her kare 10 cm³ hacmi, her nokta 10 g kütleyi temsil ediyor; noktalar gerçek tanecik değildir.\n\nÖlçümlere uygun model ve aynı koşullarda alınacak 90 cm³ buzun kütlesi hangi seçenekte doğru verilmiştir?",
    "options": [
      "Q; 90 g",
      "P; 81 g",
      "R; 90 g",
      "P; 100 g"
    ],
    "correct": 1,
    "explanation": "P’de 10 kare ve 9 nokta vardır: 100 cm³ hacim ve 90 g kütleyi gösterir. Q, hacim artışını; R ise kütlenin korunmasını karşılamaz. Buzun yoğunluğu 90 ÷ 100 = 0,9 g/cm³ olduğundan 90 cm³ buzun kütlesi 0,9 × 90 = 81 g’dır. Aynı hacimdeki sıvı su 90 g gelir. Buzun sıvı sudan daha az yoğun olması, su yüzeyinde kalıp alttaki suyun ısı kaybını yavaşlatan bir örtü oluşturmasına ve canlıların sıvı suya erişiminin sürmesine katkı sağlar.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-03.svg",
    "imageAlt": "Kare-nokta modelleri: P’de 10 eş kare ve 9 nokta; Q’da 9 eş kare ve 9 nokta; R’de 10 eş kare ve 10 nokta. Her kare 10 cm³, her nokta 10 g temsil eder.",
    "imageWidth": 360,
    "imageHeight": 550
  },
  {
    "id": "f6-2-t4-04",
    "subject": "fen",
    "term": 2,
    "prompt": "Pille çalışan test devresinde iki ayrı boşluk vardır. Şekildeki her denemede bu boşluklara iki parça takılıyor. Bu basitleştirilmiş modelde parçalar ya iyi iletken ya da yalıtkandır: Ampulün yanması için iki parçanın da iletken olması gerekir. Pil, ampul ve diğer bağlantılar sağlam; temaslar uygundur. Parçalar değişime uğramaz.\n\nÜç denemeyi birlikte açıklayan sınıflandırma ve yeni bir denemenin sonucu hangisidir?",
    "options": [
      "A iletkendir; B ve C yalıtkandır. A ile C yeniden takılırsa yanmaz.",
      "A ve B iletkendir; C yalıtkandır. A ile B yeniden takılırsa yanar.",
      "Yalnız C iletkendir. A yerine bakır, B yerine C takılırsa yanmaz.",
      "A ve C iletkendir; B yalıtkandır. B yerine bakır takılan B–C denemesinde yanar."
    ],
    "correct": 3,
    "explanation": "A–C denemesinde ampul yanması, modelin kuralına göre hem A’nın hem C’nin iletken olduğunu gösterir. A iletkense A–B denemesindeki yanmama B’den kaynaklanır; B–C sonucu da bunu doğrular. B–C düzeninde B’nin yerine bakır konduğunda iki parça da iletken olur ve ampul yanar. A–B’nin tek başına yanmaması, her iki parçanın da yalıtkan olduğunu göstermez. Sonuç, soruda tanımlanan ideal model içindir.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-04.svg",
    "imageAlt": "İki boşluğu art arda içeren devre şeması. Deneme tablosunda A–B için ampul sönük, A–C için yanıyor, B–C için sönük gösterilmiştir.",
    "imageWidth": 360,
    "imageHeight": 520
  },
  {
    "id": "f6-2-t4-05",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekildeki reostanın A–B bölümü kalın, B–C bölümü incedir; telin cinsi aynıdır. Her bölümde işaretler arasındaki uzunluklar eşittir. Yapılan ölçümde her kalın aralığın direnci 1 birim, her ince aralığın direnci 2 birim bulunmuştur. Devreye katılan aralıkların dirençleri toplanır. Yalnız A ucu ile S sürgüsü arasındaki tel devreye katılır. Pil, ampul, sıcaklık ve temas koşulları sabittir.\n\nS önce P’den B’ye, sonra B’den Q’ya götürülüyor. Bu iki işlemde reosta direncindeki artışlar sırasıyla kaç birimdir? İlk P konumuyla son Q konumu karşılaştırıldığında ampulün parlaklığı nasıl değişir?",
    "options": [
      "2 ve 2; azalır.",
      "2 ve 4; azalır.",
      "4 ve 2; artar.",
      "2 ve 4; değişmez."
    ],
    "correct": 1,
    "explanation": "P ile B arasında iki kalın aralık vardır; ilk artış 2 × 1 = 2 birimdir. B ile Q arasında iki ince aralık vardır; ikinci artış 2 × 2 = 4 birimdir. Eşit uzunlukta ilerleme, farklı kalınlıktaki bölümlerde eşit direnç artışı oluşturmaz. A–P’nin direnci 2 birim, A–Q’nunki 4 + 4 = 8 birimdir. Toplam direnç arttığı için aynı pil ve ampulle Q’da ampul daha sönük yanar. Bu verilerden parlaklığın belirli bir oranda azaldığı sonucu çıkarılmaz.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-05.svg",
    "imageAlt": "A’dan C’ye sekiz eşit uzunluk aralığı vardır. A–B dört kalın aralık, B–C dört ince aralıktır. P, A’dan iki aralık; B dört aralık; Q altı aralık; C sekiz aralık uzaklıktadır. A sabit uca, S sürgüsü başlangıçta P’ye bağlıdır. Kalın aralık 1, ince aralık 2 direnç birimidir.",
    "imageWidth": 360,
    "imageHeight": 490
  },
  {
    "id": "f6-2-t4-06",
    "subject": "fen",
    "term": 2,
    "prompt": "Başlangıçta tamamen katı olan saf X, sabit basınçta ısıtılıyor. Grafiğin yatay bölümünde eridiği gözleniyor; erime bitince sıcaklığı yeniden artıyor. Bu deneyde erime sürerken eşit sürelerde eşit kütlede katı eridiği belirlenmiştir. Isıtma kesilmiyor; madde kaybı yoktur.\n\n5. dakikanın sonunda 24 g X’in eridiği ölçülüyor. Grafiğe göre 7. dakikanın sonunda kaç gram katı kalmıştır ve X’in erime noktası kaç °C’dir?",
    "options": [
      "8 g; 50 °C",
      "24 g; 50 °C",
      "8 g; 70 °C",
      "40 g; 20 °C"
    ],
    "correct": 0,
    "explanation": "Erime 2. dakikada başlayıp 8. dakikada biter; toplam 6 dakika sürer. 5. dakikaya kadar erime için geçen süre 5 − 2 = 3 dakikadır. 24 ÷ 3 = 8 g katı her dakikada erir; toplam kütle 6 × 8 = 48 g’dır. 7. dakikada erime için 5 dakika geçmiş, 40 g erimiş ve 8 g katı kalmıştır. Erime noktası yatay bölümün sıcaklığı olan 50 °C’dir; grafiğin ulaştığı en yüksek sıcaklık değildir.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-06.svg",
    "imageAlt": "Sıcaklık-zaman grafiği: 0. dakikada 20 °C; 2. dakikada 50 °C; 2–8. dakikalar arasında 50 °C sabit; 10. dakikada 70 °C. Yatay bölüm erime aralığıdır.",
    "imageWidth": 360,
    "imageHeight": 440
  },
  {
    "id": "f6-2-t4-07",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekilde bir alandaki sınırlı bir beslenme ilişkisi modeli verilmiştir. Ok, besin olan canlıdan onu tüketen canlıya gider. Başlangıçta baykuş sayısını azaltan bir etki oluşuyor; diğer dış koşulların aynı kaldığı ve çizilmeyen beslenme ilişkilerinin olmadığı kabul ediliyor. Baykuşun azalmasıyla farelerin üzerindeki avlanma baskısı azalıyor.\n\nModeldeki bağlantılar birlikte izlendiğinde hangi değişim zinciri beklenebilir?",
    "options": [
      "Fareler azalır; bitkilere tüketim baskısı azalır; tırtılların besini artabilir.",
      "Fareler artar; bitkilere tüketim baskısı azalır; tırtılların besini artabilir.",
      "Fareler artar; bitkilere tüketim baskısı artar; tırtılların ve dolaylı olarak serçelerin besini azalabilir.",
      "Fareler artar; bitkilere tüketim baskısı artar; ancak başka hiçbir canlı bu değişimden etkilenemez."
    ],
    "correct": 2,
    "explanation": "Baykuşlar fareleri tüketir. Baykuş azalınca fare sayısının artması ve farelerin bitkiler üzerindeki tüketim baskısının yükselmesi beklenebilir. Aynı bitkileri tırtıllar da tükettiğinden bitkilerin azalması tırtılların besinini sınırlayabilir; tırtılla beslenen serçeler de dolaylı etkilenebilir. Biyoçeşitlilikteki değişimler yalnız doğrudan bağlı iki türle sınırlı kalmayabilir. Bu sonuç, verilen sınırlı modelin kısa süreli beklentisidir; gerçek doğadaki kesin sayıları veya bütün etkenleri açıklamaz.",
    "imageUrl": "/grade6/fen/term-2/test-4/soru-07.svg",
    "imageAlt": "Beslenme ağı. Bitkilerden fareye, fareden baykuşa; aynı bitkilerden tırtıla, tırtıldan serçeye yönelen oklar vardır. Oklar besinden tüketiciye yönelir.",
    "imageWidth": 360,
    "imageHeight": 560
  },
  {
    "id": "f6-2-t4-08",
    "subject": "fen",
    "term": 2,
    "prompt": "Karanlık bir odada yalnız kırmızı, yeşil ve mavi ışık verebilen üç ayrı lamba vardır; her biri açık veya kapalıdır. İdeal modelde opak kırmızı kart yalnız kırmızı, opak yeşil kart yalnız yeşil, opak mavi kart yalnız mavi ışığı yansıtır; diğer renkleri soğurur. Kartlar ışık üretmez. Her açık lambanın ışığı bütün kartlara ulaşır.\n\nKırmızı kart kırmızı, mavi kart siyah görülüyor; yeşil karta henüz bakılmamıştır. Daha sonra lambaların durumu değiştirilmeden beyaz bir kart da odaya getiriliyor. Beyaz kart bütün görünür renkleri yansıtır.\nHangi değerlendirme kesinlikle doğrudur?",
    "options": [
      "Yalnız kırmızı lamba açıktır; beyaz kartın yansıttığı ışıkta başka renk bulunamaz.",
      "Mavi lamba açıktır; mavi kartın siyah görünmesi bunu kanıtlar.",
      "Yeşil lamba kapalıdır; kırmızı kart yeşil ışık altında kırmızı görünemez.",
      "Kırmızı lamba açık, mavi kapalıdır; yeşil lambanın durumu bilinmediğinden beyaz kartın yeşil ışık da yansıtıp yansıtmadığı kesinleşmez."
    ],
    "correct": 3,
    "explanation": "Kırmızı kartın kırmızı görünmesi, karta kırmızı ışık ulaştığını ve kırmızı lambanın açık olduğunu gösterir. Mavi kart mavi ışığı yansıtacağı hâlde siyah görüldüğüne göre bu ideal modelde mavi lamba kapalıdır. Kırmızı ve mavi kartlar yeşil ışığı soğurduğundan onların görünümü yeşil lambanın açık mı kapalı mı olduğunu belirlemez. Beyaz kart kırmızıyı yansıtır; yeşili de yansıtıp yansıtmadığı için ek gözlem gerekir. Kartların rengi ile ışık kaynağının içeriği birbirine karıştırılmamalıdır."
  },
  {
    "id": "f6-2-t4-09",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir sulak alanın ilk yılki tür listesi, aynı mevsimde yapılan dört ayrı gözlem gezisindeki kayıtlar birleştirilerek oluşturulmuş ve 12 tür bulunmuştur. Bu gezilerin her birinde tek başına 6–8 tür kaydedilmiştir. İkinci yıl aynı mevsimde yalnız bir gezi yapılmış ve 7 tür kaydedilmiştir. Gezilerin tek tek süreleri, alanları ve kayıt yöntemleri aynıdır. Bir öğrenci “Beş tür kesinlikle alandan yok oldu; neden çevredeki yeni yol olmalıdır.” diyor.\n\nBu iddiayı değerlendirmek için en uygun bilimsel yaklaşım hangisidir?",
    "options": [
      "7 sayısı 12’den küçük olduğundan beş türün kaybı ve yolun buna neden olduğu kesinleşmiştir.",
      "Tek geziyle dört gezinin birleşik listesini doğrudan karşılaştırmak yeterli değildir; gözlem çabası eşitlenip olası tehditlere ilişkin ayrı kanıt toplanmalıdır.",
      "İkinci yılın 7 türü önceki tek-gezi aralığında olduğundan hiçbir tür kaybı yaşanmadığı kesinleşmiştir.",
      "İkinci yılda dört gezi yapılsaydı 7 × 4 = 28 farklı tür bulunacağı kesindir; yol çeşitliliği artırmıştır."
    ],
    "correct": 1,
    "explanation": "Dört gezinin birleşik listesinde, tek bir gezide görülmeyen türler de yer alabilir; aynı tür farklı gezilerde tekrar görülebilir. Bu yüzden 7’yi 12’den çıkarmak kesin tür kaybı sayısı vermez; 7’yi dörtle çarpmak da farklı tür sayısını vermez. İkinci yılın tek-gezi kaydı önceki 6–8 aralığına uysa da bu, hiç kayıp olmadığını kanıtlamaz. Önce benzer sayıda ve düzende gözlemle karşılaştırma yapılmalı; yolun olası etkisi için ayrıca araştırma yürütülmelidir."
  },
  {
    "id": "f6-2-t4-10",
    "subject": "fen",
    "term": 2,
    "prompt": "İçi dolu ve homojen K ile L katıları birbirine birleştiriliyor. K’nin kütlesi 40 g, hacmi 20 cm³; L’nin kütlesi 40 g, hacmi 10 cm³’tür. Birleşik cisimde boşluk yoktur; kütle ve hacimler toplanabilir, birleştiricinin etkisi ihmal edilir. Bu cisim yoğunluğu 2,8 g/cm³ olan sıvıda deneniyor.\n\nSonra yalnız K’nin tam yarısı kesilip uzaklaştırılıyor; kalan K ile L birbirine bağlı kalıyor. Cisimler sıvı almıyor, çözünmüyor, tepkimeye girmiyor ve hava kabarcığı taşımıyor; sıcaklık aynı kalıyor. Başlangıçtaki birleşik cismin ve parça çıkarıldıktan sonraki cismin sıvıdaki durumları hangi seçenekte doğrudur?",
    "options": [
      "Önce yüzer, sonra batar; daha az yoğun olan bölümden parça çıkarmak ortalama yoğunluğu artırabilir.",
      "Önce batar, sonra yüzer; toplam kütlenin azalması her zaman yüzmeyi sağlar.",
      "İki durumda da yüzer; bir cisimden parça çıkarmak yoğunluğu hiçbir zaman değiştirmez.",
      "İki durumda da batar; L’nin yoğunluğunun sıvıdan büyük olması tek başına yeterlidir."
    ],
    "correct": 0,
    "explanation": "Başlangıçta toplam kütle 80 g, hacim 30 cm³’tür. Aynı hacimdeki sıvının kütlesi 2,8 × 30 = 84 g olduğundan cisim sıvıdan daha az yoğundur ve yüzer. K homojen olduğu için yarısı 20 g ve 10 cm³’tür. Bu parça çıkarılınca 60 g kütle ve 20 cm³ hacim kalır; yoğunluk 60 ÷ 20 = 3 g/cm³ olur ve cisim batar. K’nin yoğunluğu 2, L’ninki 4 g/cm³’tür. Daha az yoğun olan K’nin payını azaltmak, toplam kütle azalsa da birleşik cismin ortalama yoğunluğunu artırır."
  }
],
    test5: [
      {
            "id": "f6-2-t5-01",
            "subject": "fen",
            "term": 2,
            "prompt": "Görseldeki panonun dokuz eş karesi, karanlık ortamda önce yalnız kırmızı, sonra yalnız mavi ışıkla aydınlatılacaktır. İdeal modelde kırmızı kare yalnız kırmızıyı, mavi kare yalnız maviyi, beyaz kare her iki rengi yansıtır; siyah kare ikisini de soğurur. Diğer renkleri soğuran kareler siyah görünür.\n\nPanoda yalnız bir kare yeniden boyanacak; beyaz ve siyah karelere dokunulmayacaktır. İki aydınlatmada da siyah görünmeyen kare sayısını eşitleyen işlem hangisidir?",
            "options": [
                  "A2 karesini kırmızıya boyamak.",
                  "B1 karesini maviye boyamak.",
                  "C2 karesini beyaza boyamak.",
                  "B3 karesini siyaha boyamak."
            ],
            "correct": 1,
            "explanation": "Panoda dört kırmızı, iki mavi, bir beyaz ve iki siyah kare vardır. Başlangıçta kırmızı ışıkta 4 + 1 = 5, mavi ışıkta 2 + 1 = 3 kare siyah görünmez. B1 kırmızıdan maviye boyanınca kırmızı kare sayısı üçe iner, mavi kare sayısı üçe çıkar; beyaz kareyle birlikte iki durumda da dört kare görünür. A2’yi kırmızı yapmak farkı artırır. C2’yi beyaza veya B3’ü siyaha boyamak sayıları eşitlemez.",
            "imageWidth": 360,
            "imageHeight": 510,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-01.svg",
            "imageAlt": "3×3 pano. Satırlar A, B, C; sütunlar 1, 2, 3. A1 beyaz, A2 mavi, A3 kırmızı; B1 kırmızı, B2 siyah, B3 kırmızı; C1 siyah, C2 kırmızı, C3 mavi. Kare içlerindeki kısaltmalar: Kr kırmızı, Mv mavi, By beyaz, Si siyah."
      },
      {
            "id": "f6-2-t5-02",
            "subject": "fen",
            "term": 2,
            "prompt": "İçinde sabit miktarda hava bulunan sızdırmaz bir şırınganın pistonu sürtünmesiz hareket edebiliyor. Dış basınç değişmiyor. Görselde bu hava örneğinin ölçümlerinden oluşturulan yaklaşık model verilmiştir. Modelde 20–80 °C arasında her 10 °C sıcaklık artışında hacim 2 cm³ artar; soğuma aynı değişimi tersine çevirir. Şırınganın kendi genleşmesi ihmal edilir.\n\nHava önce 80 °C’ye getiriliyor, ardından sıcaklığı 45 °C azaltılıyor. Son hacim ve içerideki havanın kütlesi, ilk 20 °C durumuna göre nasıl olur?",
            "options": [
                  "54 cm³; kütlesi değişmez.",
                  "63 cm³; kütlesi azalır.",
                  "31,5 cm³; kütlesi değişmez.",
                  "63 cm³; kütlesi değişmez."
            ],
            "correct": 3,
            "explanation": "Son sıcaklık 80 − 45 = 35 °C’dir; 45 °C değildir. Hava, ilk 20 °C’ye göre 15 °C daha sıcaktır. Verilen modelde 10 °C için 2 cm³ olan artış, 15 °C için 3 cm³’tür: 60 + 3 = 63 cm³. Şırınga sızdırmaz olduğu için genleşme veya büzülme sırasında hava eklenmez ya da kaybolmaz; kütle değişmez. Hacmi Celsius sıcaklıklarının oranıyla çarpmak bu modelin kuralı değildir. Sonuç, yalnız verilen sıcaklık aralığındaki yaklaşık modele aittir.",
            "imageWidth": 360,
            "imageHeight": 500,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-02.svg",
            "imageAlt": "Hareketli pistonlu kapalı hava şırıngası ve ölçüm tablosu. 20 °C: 60 cm³; 40 °C: 64 cm³; 60 °C: 68 cm³; 80 °C: 72 cm³. Pistona dışarıdan madde eklenmiyor."
      },
      {
            "id": "f6-2-t5-03",
            "subject": "fen",
            "term": 2,
            "prompt": "Şekilde aynı yüzer ölçüm aracı üç sıvıda ayrı ayrı deneniyor. Aracın kütlesi ve biçimi değişmiyor; bütün denemelerde dik ve serbestçe yüzüyor. Bu araç için kural şudur: Sıvının yoğunluğu azaldıkça aracın ince gövdesinin sıvı içinde kalan uzunluğu artar. Görsel yalnız batma sırasını gösterir; çizimden uzunluk ölçülmez. Sıcaklık aynıdır; sıvılar araca yapışmıyor veya onu değiştirmiyor.\n\nİçi dolu ve homojen K cisminin kütlesi 27 g, hacmi 30 cm³’tür. K, Q sıvısında çözünmez, sıvı almaz ve hava kabarcığı taşımaz. Görselden Q’nun yoğunluğu ve K’nin Q’daki durumu hakkında hangi sonuca ulaşılır?",
            "options": [
                  "Q’nun yoğunluğu 0,8 ile 1,2 g/cm³ arasındadır; K’nin batacağı veya yüzeceği kesinleşmez.",
                  "Q’nun yoğunluğu tam 1 g/cm³’tür; K kesinlikle yüzer.",
                  "Q’nun yoğunluğu 1,2 g/cm³’ten büyüktür; K kesinlikle yüzer.",
                  "Q’nun yoğunluğu 0,8 ile 1,2 g/cm³ arasındadır; K kesinlikle batar."
            ],
            "correct": 0,
            "explanation": "Q’da gövdenin sıvı içindeki uzunluğu P’den fazla, R’den azdır. Verilen ters yönlü ilişkiye göre Q’nun yoğunluğu P’nin 1,2 değerinden küçük, R’nin 0,8 değerinden büyüktür. K’nin yoğunluğu 27 ÷ 30 = 0,9 g/cm³’tür. Q için bulunan aralık 0,9’un hem altındaki hem üstündeki değerleri içerir; K’nin batması veya yüzmesi kesinleşmez. Şema yalnız batma sırasını verir; Q’nun yoğunluğunu uç değerlerin ortalaması kabul etmek için veri yoktur.",
            "imageWidth": 360,
            "imageHeight": 490,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-03.svg",
            "imageAlt": "Aynı yüzer araç P, Q ve R sıvılarında gösterilmiştir. İnce gövdenin sıvı içinde kalan kısmı P’de en kısa, Q’da arada, R’de en uzundur. P yoğunluğu 1,2 g/cm³, R yoğunluğu 0,8 g/cm³; Q bilinmiyor. Çizim yalnız bu sırayı gösterir; ölçekli değildir, uzunluk değeri vermez."
      },
      {
            "id": "f6-2-t5-04",
            "subject": "fen",
            "term": 2,
            "prompt": "Görseldeki levha, birbirine temas eden bakır ve kuru plastik katmanlardan yapılmıştır. Her katman kesintisizdir; aralarında başka iletken bağlantı yoktur. Bu basitleştirilmiş modelde bakır iyi iletken, plastik yalıtkandır. Sağlam bir pil–ampul devresinin iki test ucu önce A ile B’ye, sonra C ile D’ye bağlanacaktır. Uçlar yalnız işaretli noktalara dokunur; levhanın kenarını dolanan bir kablo yoktur.\n\nİki denemenin sonucu ve bunun açıklaması hangi seçenekte doğrudur?",
            "options": [
                  "İkisinde de yanar; levhada bakır bulunması her yönde iletim için yeterlidir.",
                  "İkisinde de yanmaz; levhada plastik bulunması bütün bakır yolları keser.",
                  "A–B’de yanar, C–D’de yanmaz; iki nokta arasında kesintisiz iletken yol bulunması belirleyicidir.",
                  "A–B’de yanmaz, C–D’de yanar; akım yalnız farklı bakır katmanlar arasında geçer."
            ],
            "correct": 2,
            "explanation": "A ve B aynı kesintisiz bakır katmanın iki ucundadır; aralarında iletken yol vardır ve devre tamamlanır. C üstteki, D alttaki bakır katmandadır; bu katmanlar arasındaki plastikler iletken yolu keser. Dolayısıyla C–D’de ampul yanmaz. Bir nesnenin içinde iletken madde bulunması, seçilen her iki noktası arasında iletim olacağı anlamına gelmez; katmanların yerleşimi ve temas noktaları birlikte incelenmelidir.",
            "imageWidth": 360,
            "imageHeight": 440,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-04.svg",
            "imageAlt": "Beş yatay katman üstten alta bakır, plastik, bakır, plastik, bakır olarak sıralıdır. A ve B orta bakır katmanın sol ve sağ kenarındadır. C üst bakır katmanın üst ortasında, D alt bakır katmanın alt ortasındadır. Katmanlar levhanın tamamı boyunca uzanır."
      },
      {
            "id": "f6-2-t5-05",
            "subject": "fen",
            "term": 2,
            "prompt": "Şekildeki reostanın yalnız A ucu ile S sürgüsü devreye bağlıdır. Tel aynı cins ve kalınlıktadır; üzerinde P, Q, R ve T işaretleri vardır. İşaretlerin arasındaki aralıklardan tam birinde kopukluk vardır; kopukluk hiçbir işaretin üzerinde değildir. Pil, ampul, diğer kablolar ve bütün sürgü temasları sağlamdır. Sıcaklık ve pilin durumu denemeler boyunca değişmez. Devrede kullanılan tel kesintisizse ampul mutlaka görünür ışık verir.\n\nS sırayla P, Q, R ve T’ye getirilerek görseldeki sonuçlar alınıyor. Kopukluk hangi aralıktadır? S yeniden Q’ya getirildikten sonra P’ye kaydırılırsa ampulün parlaklığı Q’dakine göre nasıl değişir?",
            "options": [
                  "P–Q; artar.",
                  "Q–R; artar.",
                  "Q–R; azalır.",
                  "R–T; değişmez."
            ],
            "correct": 1,
            "explanation": "Q’da ampul yandığına göre A’dan Q’ya kadar iletken yol kesintisizdir. R’de yanmadığı ve tek kopukluk bulunduğu için kopukluk Q ile R arasındadır; T’de yanmama da bununla uyumludur. Q’dan P’ye dönerken kullanılan A–S teli kısalır ve kopuk bölge yine kullanılmaz. Direnç azalır, ampul daha parlak yanar. R’deki sönme, telin yalnız daha uzun olmasından değil iletken yolun kesilmesindendir.",
            "imageWidth": 360,
            "imageHeight": 550,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-05.svg",
            "imageAlt": "Reosta teli soldan sağa A, P, Q, R, T işaretlerini taşır. A sabit uç, S hareketli uçtur; kopukluğun yeri gösterilmez. S konumu ve gözlem tablosu: P yanıyor, Q yanıyor, R sönük, T sönük."
      },
      {
            "id": "f6-2-t5-06",
            "subject": "fen",
            "term": 2,
            "prompt": "Saf X katısı, sabit basınçta kesintisiz ısıtılıyor. Öğrenci sıcaklığı yalnız iki dakikada bir ölçüyor; kayıtlar görseldedir. 2. dakikadan sonra katının sıcaklığı bir süre daha yükselmiş, ardından erime başlamıştır. 4. dakikada ise erime tamamlanmış ve oluşan sıvının sıcaklığı erime sıcaklığının üstüne çıkmıştır. Madde kaybı ve ölçüm hatası yoktur.\n\nBir öğrenci, “Kayıtlarda eşit sıcaklık yok; X sabit sıcaklıkta erimemiştir. Erime noktası da erimeden önceki son ölçüm ile erimeden sonraki ilk ölçümün ortalamasıdır.” diyor. Bu iddiayı değerlendirmek ve ölçümü geliştirmek için hangi seçenek uygundur?",
            "options": [
                  "Erime noktası 40 ile 80 °C arasındadır; tam değeri için 2–4. dakikalar arasında sıcaklık ve hâl daha sık izlenmelidir.",
                  "Erime noktası kesinlikle 60 °C’dir; aynı kayıtların ortalamasını almak yeterlidir.",
                  "Erime noktası kesinlikle 80 °C’dir; yalnız sıvı hâlin ilk ölçümü kullanılmalıdır.",
                  "Eşit sıcaklık kaydı olmadığı için X’in saf olmadığı kesindir; daha sık ölçüm gereksizdir."
            ],
            "correct": 0,
            "explanation": "2. dakikada 40 °C’de erime başlamamış, 4. dakikada 80 °C’de erime bitmiş ve sıvı ısınmaya başlamıştır. Bu yüzden erime noktası 40 °C’den büyük, 80 °C’den küçüktür. İki ölçüm arasındaki kısa sabit sıcaklık bölgesi kayda geçmemiş olabilir. Aralığın ortası olan 60 °C’yi seçmek gerçek erime sıcaklığını kanıtlamaz. Deney, özellikle 2–4. dakikalar arasında daha kısa aralıklarla sıcaklık ve hâl gözlenerek tekrarlanmalıdır.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-06.svg",
            "imageAlt": "Seyrek ölçüm tablosu: 0. dakika 20 °C katı; 2. dakika 40 °C katı; 4. dakika 80 °C sıvı; 6. dakika 100 °C sıvı. 2 ile 4. dakikalar arasındaki sıcaklık kayıtları yoktur."
      },
      {
            "id": "f6-2-t5-07",
            "subject": "fen",
            "term": 2,
            "prompt": "Haritadaki A, B, C, D ve E orman parçalarında yaşayan küçük hayvanlar yalnız kesintisiz bitkili yollar boyunca hareket edebiliyor. Mevcut A–B ve D–E koridorları kullanılabiliyor; eski B–C koridoru kapanmış. Noktalı çizgiler yeni koridor önerileridir. I numaralı öneri aşılmaz yerleşim alanından geçtiği için uygulanamaz; diğer öneriler uygulanabilir.\n\nBütçe tam iki yeni koridora yeterlidir. Amaç beş orman parçasının tamamını, hayvanların birinden diğerine ulaşabileceği tek bir bağlantı ağına katmaktır. Hangi iki öneri seçilmeli ve bu amaç biyoçeşitlilik açısından nasıl yorumlanmalıdır?",
            "options": [
                  "I ve III; çizgi çizilen her yer güvenli geçişe dönüşür.",
                  "II ve IV; aynı iki ormanı iki yolla bağlamak, C’yi de ağa katar.",
                  "I ve II; D’ye iki bağlantı kurulması bütün parçaları bağlar.",
                  "II ve III; yaşam alanları arasındaki hareketi destekler, ancak her türün korunacağını tek başına garanti etmez."
            ],
            "correct": 3,
            "explanation": "Başlangıçta A–B bir grup, D–E ikinci grup, C ise tek başınadır. II, B ile D’yi bağlayarak ilk iki grubu birleştirir. III, C ile E’yi bağlayıp C’yi de ağa katar. IV yalnız zaten bağlantılı A ve B arasındadır; C’ye erişim sağlamaz. I uygulanamaz. Uygun koridorlar yaşam alanı parçalanmasının etkisini azaltmaya yardım edebilir; ancak kirlilik, avlanma ve türlerin farklı ihtiyaçları gibi başka etkenler de bulunduğundan bütün türlerin korunması garanti edilemez.",
            "imageWidth": 360,
            "imageHeight": 670,
            "imageUrl": "/grade6/fen/term-2/test-5/soru-07.svg",
            "imageAlt": "Orman bağlantı haritası: A sol üst, B sağ üst, C sağ orta, D sol alt, E sağ alt. Kullanılabilir mevcut koridorlar A–B ve D–E. B–C eski koridoru kapalıdır. Öneri I A–D arasında ve aşılmaz yerleşim alanından geçer; II B–D arasında; III C–E arasında; IV A–B arasında ikinci bir yoldur."
      },
      {
            "id": "f6-2-t5-08",
            "subject": "fen",
            "term": 2,
            "prompt": "İki göl modeli yalnız buzun yoğunluğu bakımından farklıdır. Gerçek suyu temsil eden K’de buzun yoğunluğu 0,9 g/cm³, sıvı suyunki 1 g/cm³’tür. Varsayımsal L’de buzun yoğunluğu 1,1 g/cm³, sıvı suyunki yine 1 g/cm³ kabul ediliyor. İki modelde de su yüzeyden soğuyor; oluşan buz serbestçe hareket edebiliyor. Yüzeyde kalabilen buz örtüsünün alttaki suyun ısı kaybını yavaşlattığı bilgisi veriliyor.\n\nBu modellerin karşılaştırılmasından hangi sonuç çıkarılabilir?",
            "options": [
                  "K’de buz yüzer, L’de batar; fakat yüzey örtüsü alttaki suyun ısı kaybını hızlandırır.",
                  "K’de buz yüzer, L’de batar; bu yüzden L’nin tamamı her koşulda kesinlikle donar.",
                  "K’de yüzey örtüsü oluşması desteklenir; L’de buz batar, fakat yalnız bu farktan gölün tamamının kesin donacağı çıkarılamaz.",
                  "K’de buz yüzer, L’de batar; iki modelde de yüzeyde aynı yüzen buz örtüsü oluşur."
            ],
            "correct": 2,
            "explanation": "K’de buz sıvı sudan daha az yoğundur ve yüzeyde kalabilir. Bu örtü, alttaki suyun ısı kaybını yavaşlatarak sıvı su bulunan yaşam alanlarının sürmesine katkı sağlar. L’de varsayımsal buz sıvı sudan daha yoğundur ve batar; aynı yüzen örtü mekanizması oluşmaz. Ancak gölün derinliği, soğumanın süresi ve diğer koşullar verilmediğinden L’nin mutlaka tamamen donacağı söylenemez. K’deki örtü de her canlı için kesin yaşam güvencesi değildir."
      },
      {
            "id": "f6-2-t5-09",
            "subject": "fen",
            "term": 2,
            "prompt": "K, L, M ve N telleri aynı sağlam pil–ampul devresinde ikişer ikişer karşılaştırılıyor. Her telin cinsi, uzunluğu ve kalınlığı bütün denemelerde korunuyor; teller birbirinden farklı olabilir. Sıcaklık ve temas koşulları değişmiyor. Daha parlak yanan ampul, o denemede kullanılan telin daha küçük dirençli olduğunu gösteriyor.\n\nDört kayıt kartından tam birinde karşılaştırmanın yönü ters yazılmıştır:\nI. K ile ampul, L’dekinden daha parlak.\nII. L ile ampul, M’dekinden daha parlak.\nIII. M ile ampul, N’dekinden daha parlak.\nIV. N ile ampul, K’dekinden daha parlak.\nAyrı kontrollerde K’nin M’den, L’nin N’den daha parlak yaktığı kesin olarak doğrulanmıştır.\n\nHangi kart düzeltilmelidir ve en büyük dirençli tel hangisidir?",
            "options": [
                  "I. kart; K teli.",
                  "IV. kart; N teli.",
                  "II. kart; M teli.",
                  "III. kart; L teli."
            ],
            "correct": 1,
            "explanation": "Kesin kontrol K’nin M’den parlak olduğunu söyler. III ve IV birlikte doğru olsaydı M, N’den; N de K’den parlak olurdu ve bu kontrolle çelişirdi. Bu yüzden hata III veya IV’tedir. Diğer kesin kontrol L’nin N’den parlak olduğunu söyler. IV ve I birlikte doğru olsaydı N, K’den; K de L’den parlak olurdu ve bu kontrolle çelişirdi. Hata I veya IV’te olmalıdır. Her iki koşulu tek hatayla sağlayan kart IV’tür. IV düzeltilince parlaklık K > L > M > N, direnç sırası ise tersidir; en büyük direnç N’dedir."
      },
      {
            "id": "f6-2-t5-10",
            "subject": "fen",
            "term": 2,
            "prompt": "Bir araştırmada benzer özellikteki yaşam alanları dört gruba ayrılıyor. Başlangıçta her alanda aynı 5 yerli tür kayıtlıdır; alanlar hem kirli su akışından hem bitki örtüsü kaybından etkilenmiştir. Gözlem yöntemi, süre ve diğer koşullar eşit tutuluyor. Her grupta birden çok alan inceleniyor ve benzer sonuçlar elde ediliyor. Sonunda kaydedilen yerli tür sayıları şöyledir:\n• İşlem yapılmayan alanlarda 5 tür.\n• Yalnız kirli su akışı durdurulanlarda 6 tür.\n• Yalnız bitki örtüsü onarılanlarda 6 tür.\n• İki işlem birlikte yapılanlarda 10 tür kaydediliyor.\n\nAraştırmanın desteklediği koruma yaklaşımı hangisidir?",
            "options": [
                  "Bu alanlarda iki tehdidi birlikte azaltmak daha çok yerli türün kaydedilmesiyle ilişkilidir; tek bir önlemin aynı sonucu sağlayacağı varsayılmamalıdır.",
                  "Tür sayısındaki bütün artış yalnız suyun temizlenmesiyle açıklanır; bitki örtüsünün rolü olamaz.",
                  "Tek başına yapılan işlemlerde birer tür arttığı için iki işlem birlikte en fazla 7 tür sağlayabilir; 10 kaydı mutlaka yanlıştır.",
                  "10 tür kaydedilmesi, bu alanlarda gelecekte hiçbir türün tehdit altında olmayacağını kanıtlar."
            ],
            "correct": 0,
            "explanation": "İşlem yapılmayan alanlarda 5, tek önlem alınanlarda 6, iki önlemin birlikte uygulandığı alanlarda 10 tür kaydedilmiştir. Bu karşılaştırma, incelenen koşullarda hem kirli akışı durdurmanın hem yaşam alanını onarmanın birlikte ele alınmasını destekler. Tek tek uygulamalardaki artışları toplamak, iki işlemin birlikte etkisini zorunlu olarak vermez: bazı türler her iki koşulun da iyileşmesine ihtiyaç duyabilir. Kayıtlar gelecekte bütün tehditlerin biteceğini veya aynı sayısal sonucun her yerde oluşacağını göstermez."
      }
],
    test6: [
  {
    "id": "f6-2-t6-01",
    "subject": "fen",
    "term": 2,
    "prompt": "Görselde dört kuru nesne verilmiştir. Nesnelerin yüzeyinde başka bir maddeyle kaplama yoktur.\n\nHangisi elektrik iletkenidir?",
    "options": [
      "P",
      "R",
      "S",
      "T"
    ],
    "correct": 1,
    "explanation": "R, çelikten yapılmış metal ataştır ve elektriği iletir. Cam çubuk, kuru tahta çubuk ve plastik çubuk ise bu sınıflandırmada yalıtkandır.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-01.svg",
    "imageAlt": "P cam çubuk, R çelik ataş, S kuru tahta çubuk, T plastik çubuk. Her nesnenin yanında harfi gösterilmiştir.",
    "imageWidth": 360,
    "imageHeight": 480
  },
  {
    "id": "f6-2-t6-02",
    "subject": "fen",
    "term": 2,
    "prompt": "Şemada bir göl ve çevresindeki dört yer gösterilmiştir. Ok, arıtılmamış kirli suyun izlediği yolu gösteriyor.\n\nKirli suyu göle ulaşmadan arıtacak bir düzenek hangi yere kurulmalıdır?",
    "options": [
      "P",
      "R",
      "S",
      "T"
    ],
    "correct": 3,
    "explanation": "T, kirli suyun göle taşındığı borunun üzerindedir. Burada suyun arıtılması, kirliliğin göle ulaşmasını azaltarak canlıların yaşam ortamını korumaya yardımcı olur. Diğer işaretler ağaçlık, sazlık ve kuşların bulunduğu yerleri gösterir; kirli suyun giriş yolu değildir.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-02.svg",
    "imageAlt": "Göl çevresinde P ağaçlık alanı, R sazlığı, S kuş yuvasını gösteriyor. T, atık su kaynağından göle giden borunun üzerinde; ok kirli suyun borudan göle aktığını gösteriyor.",
    "imageWidth": 360,
    "imageHeight": 530
  },
  {
    "id": "f6-2-t6-03",
    "subject": "fen",
    "term": 2,
    "prompt": "Ağzı bağlı esnek bir balonun içindeki hava, görseldeki gibi ısıtılıyor. Balondan hava çıkmıyor, balona hava girmiyor; balon patlamıyor. Dış basınç değişmiyor.\n\nHavanın bu değişimi hangi seçenekte doğru açıklanmıştır?",
    "options": [
      "Hava genleşmiştir; hacmi artarken kütlesi değişmemiştir.",
      "Hava genleşmiştir; hacmi ve kütlesi birlikte artmıştır.",
      "Hava büzülmüştür; hacmi azalmıştır.",
      "Hava erimiştir; gaz hâlden sıvı hâle geçmiştir."
    ],
    "correct": 0,
    "explanation": "Isıtılan hava, esnek balonun içinde daha büyük hacim kaplamıştır; bu olay genleşmedir. Balona madde girip çıkmadığı için içerideki havanın kütlesi değişmez. Genleşme, erime gibi bir hâl değişimi değildir.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-03.svg",
    "imageAlt": "Aynı ağzı bağlı balon önce 20 °C’de daha küçük, sonra 40 °C’de daha büyük hacimde gösteriliyor. İçindeki hava miktarı değişmiyor; görsel hacimleri sayısal olarak ölçmek için ölçekli değildir.",
    "imageWidth": 360,
    "imageHeight": 460
  },
  {
    "id": "f6-2-t6-04",
    "subject": "fen",
    "term": 2,
    "prompt": "Aynı hacimde alınan buz ve sıvı su örneklerinin kütleleri görseldedir. Kapların kütleleri terazi okumalarından çıkarılmıştır.\n\nBu verilere göre buzun yoğunluğu suyun yoğunluğuna göre nasıldır ve buz suya bırakıldığında neden yüzer?",
    "options": [
      "Daha büyüktür; daha yoğun olan madde yüzeyde kalır.",
      "Eşittir; eşit hacimler her zaman eşit yoğunluk verir.",
      "Daha küçüktür; buz aynı hacimdeki sudan daha az kütleye sahiptir.",
      "Daha küçüktür; buzun hiç kütlesi yoktur."
    ],
    "correct": 2,
    "explanation": "İki örneğin hacmi de 100 cm³’tür. Buz 90 g, su 100 g olduğundan aynı hacimdeki buzun kütlesi daha azdır; dolayısıyla buz daha az yoğundur. Buzun suda yüzmesini bu yoğunluk farkı açıklar. Eşit hacimli olmak, yoğunlukların eşit olmasını gerektirmez.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-04.svg",
    "imageAlt": "Eşit hacimli iki örnek: 100 cm³ buzun kütlesi 90 g; 100 cm³ sıvı suyun kütlesi 100 g. Teraziler yalnız örneklerin kütlelerini gösterir.",
    "imageWidth": 360,
    "imageHeight": 470
  },
  {
    "id": "f6-2-t6-05",
    "subject": "fen",
    "term": 2,
    "prompt": "Saf P ve R maddelerinin aynı basınçtaki erime ve kaynama noktaları ile iki bölmenin sıcaklıkları görseldedir. Maddeler bulundukları bölmenin sıcaklığına ulaşıyor; basınç değişmiyor.\n\nP’nin sıvı, R’nin katı hâlde tutulabileceği bölme hangisidir? Bu bölmedeki P, II. bölmeye götürülüp 80 °C’ye ulaştığında hangi hâlde olur?",
    "options": [
      "I. bölme; gaz.",
      "I. bölme; katı.",
      "II. bölme; sıvı.",
      "II. bölme; katı."
    ],
    "correct": 0,
    "explanation": "I. bölme 15 °C’dir. Bu sıcaklık P’nin 10 °C’lik erime noktası ile 70 °C’lik kaynama noktası arasındadır; P sıvıdır. 15 °C, R’nin 30 °C’lik erime noktasından küçük olduğundan R katıdır. P, II. bölmede 80 °C’ye ulaştığında kendi kaynama noktası olan 70 °C’nin üstündedir ve gaz hâlindedir.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-05.svg",
    "imageAlt": "Aynı basınçta P’nin erime noktası 10 °C, kaynama noktası 70 °C; R’nin erime noktası 30 °C, kaynama noktası 90 °C. I. bölme 15 °C, II. bölme 80 °C.",
    "imageWidth": 360,
    "imageHeight": 510
  },
  {
    "id": "f6-2-t6-06",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir yöredeki arılar marttan haziranın sonuna kadar çiçeklerden besleniyor. Yerli K bitkisi yalnız mart–nisanda, yerli L bitkisi yalnız mayıs–haziranda çiçek açıyor. Parkta iki bitki de bulunuyor. Bir görevli, “K daha çok sayıda; L’leri de K ile değiştirirsek arılar için aynı işlevi koruruz.” diyor.\n\nVerilen bilgilere göre en uygun değerlendirme hangisidir?",
    "options": [
      "Öneri uygundur; bitki sayısı artınca her bitkinin çiçeklenme süresi kendiliğinden uzar.",
      "L korunmamalıdır; bir türün az sayıda bulunması hiçbir işlevinin olmadığını gösterir.",
      "K ve L birlikte korunmalıdır; farklı çiçeklenme dönemleri bu dört ay boyunca çiçek bulunmasına katkı sağlar.",
      "L çoğaltılırken K tamamen kaldırılmalıdır; yalnız L bu dört ayın tamamında çiçek açar."
    ],
    "correct": 2,
    "explanation": "K mart–nisanda, L mayıs–haziranda çiçek açar. İki yerli türün birlikte korunması, birbirini izleyen dönemlerde arıların yararlanabileceği çiçeklerin bulunmasına katkı sağlar. L’nin yerine yalnız K dikmek mayıs–hazirandaki bu kaynağı korumaz. Bu, biyoçeşitliliğin önemine bir örnektir; tek başına bütün arıların yaşamasını garanti etmez."
  },
  {
    "id": "f6-2-t6-07",
    "subject": "fen",
    "term": 2,
    "prompt": "Görseldeki K, L ve M telleriyle iki araştırma yapılacak:\nI. K ile L karşılaştırılarak yalnız telin cinsinin ampul parlaklığına etkisi incelenecek.\nII. L ile M karşılaştırılarak yalnız telin kalınlığının etkisi incelenecek.\nK değiştirilmeden, gerekirse L ve M’nin uçlarından parça kesilip uzaklaştırılacak. Kesme kalınlığı değiştirmiyor. Bütün kesmeler iki araştırmadan da önce yapılacak; aynı kalan teller iki araştırmada da kullanılacak. Pil, ampul, sıcaklık ve temas koşulları sabit.\n\nHangi düzenleme iki araştırmayı da uygun hâle getirir ve II. araştırmada hangi tel ampulü daha parlak yakar?",
    "options": [
      "L’den 10 cm kesilir, M kesilmez; M daha parlak yakar.",
      "L ve M’den 10’ar cm kesilir; L daha parlak yakar.",
      "L kesilmez, M’den 10 cm kesilir; M daha parlak yakar.",
      "L ve M’den 10’ar cm kesilir; M daha parlak yakar."
    ],
    "correct": 3,
    "explanation": "I’de yalnız cins değişmelidir: K ve L’nin kalınlıkları zaten aynıdır, L de K gibi 20 cm yapılmalıdır. II’de yalnız kalınlık değişmelidir: L ile M demirdir, fakat L artık 20 cm olduğundan M de 20 cm yapılmalıdır. Bu nedenle iki telden de 10’ar cm kesilir. Aynı cins ve uzunlukta M daha kalın olduğu için direnci daha küçüktür; aynı pil ve ampulle daha parlak ışık verir.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-07.svg",
    "imageAlt": "K: bakır, 20 cm, ince. L: demir, 30 cm, ince. M: demir, 30 cm, kalın. K ve L aynı kalınlıkta; M daha kalındır. Çizilen tel uzunlukları 20’ye 30 oranını korur.",
    "imageWidth": 360,
    "imageHeight": 490
  },
  {
    "id": "f6-2-t6-08",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir araştırmada eşit büyüklükteki alanların her birinde başlangıçta aynı 12 yerli çiçek türü vardır. Süre, su, toprak ve gözlem yöntemi aynıdır. Yalnız ışık ve toprağı örten dökülmüş yapraklar değiştirilmiştir. Son kayıtlar şöyledir:\n• P: Gölgesiz, yaprak örtüsü yok → 12 tür.\n• R: Gölgeli, yaprak örtüsü yok → 8 tür.\n• S: Gölgeli, yaprak örtüsü var → 4 tür.\nAraştırmacı, yaprak örtüsünün etkisinin gölgeli ve gölgesiz koşullarda aynı olup olmadığını incelemek istiyor.\n\nEksik olan dördüncü deney hangi koşullarda yapılmalıdır? Bu yeni deneyde 10 tür kaydedilirse hangi yorum desteklenir?",
    "options": [
      "Gölgesiz ve yaprak örtüsüz; yaprak örtüsü her iki ışık koşulunda da tür sayısını 2 azaltmıştır.",
      "Gölgesiz ve yaprak örtülü; yaprak örtüsüyle ilişkili azalma gölgesizde 2, gölgelide 4 türdür.",
      "Gölgesiz ve yaprak örtülü; yaprak örtüsüyle ilişkili azalma iki ışık koşulunda da 4 türdür.",
      "Gölgeli ve yaprak örtüsüz; yeni kaydın P’den farkı yalnız yaprak örtüsünün etkisini gösterir."
    ],
    "correct": 1,
    "explanation": "Eksik koşul gölgesiz ve yaprak örtülü alandır. Yeni deneyde 10 tür kaydedilirse, ışık koşulu aynı olan P ile karşılaştırılır: 12 − 10 = 2 türlük azalma yaprak örtüsüyle ilişkilidir. Gölgeli koşuldaki uygun karşılaştırma R ile S’dir: 8 − 4 = 4 tür. Böylece bu araştırmada yaprak örtüsüyle ilişkili azalma ışık koşuluna göre farklıdır. Yeni deneyi R ile karşılaştırmak hem ışığı hem yaprak örtüsünü değiştireceğinden tek etkenin etkisini ayıramaz. Sonuç bütün yaşam alanlarına aynı sayılarla genellenmez."
  },
  {
    "id": "f6-2-t6-09",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekildeki taşırma kabının içinde başlangıçta 90 cm³ su vardır; su taşma ağzına kadar geldiğinde kapta 100 cm³ su bulunur. Öğrenci, kütlesi 45 g olan içi dolu katıyı tamamen suya batırıp taşan suyun tamamını toplama kabında biriktiriyor. Toplama kabının iki tartımı görseldedir.\n\nSuyun yoğunluğu 1 g/cm³’tür. Katı su almıyor, çözünmüyor ve hava kabarcığı taşımıyor; sıçrama ve başka su kaybı yok. Katının yoğunluğu kaç g/cm³’tür? Aynı katı, değişime uğramadığı 1,6 g/cm³ yoğunluklu bir sıvıya bırakılırsa ne olur?",
    "options": [
      "1,5 g/cm³; yüzer.",
      "2,25 g/cm³; batar.",
      "1,5 g/cm³; batar.",
      "1,125 g/cm³; yüzer."
    ],
    "correct": 0,
    "explanation": "Toplanan suyun kütlesi 32 − 12 = 20 g, hacmi de 20 cm³’tür. Ancak başlangıçta su taşma ağzından 100 − 90 = 10 cm³ eksiktir. Katı batırılırken yer değiştirdiği suyun önce 10 cm³’ü bu boşluğu doldurur, sonra 20 cm³’ü taşar. Katının hacmi 10 + 20 = 30 cm³, yoğunluğu 45 ÷ 30 = 1,5 g/cm³’tür. Bu değer 1,6 g/cm³’ten küçük olduğu için diğer sıvıda yüzer. Yalnız taşan suyu katı hacmi saymak başlangıçtaki boşluğu; 32 g’ı doğrudan kullanmak ise kabın darasını gözden kaçırır.",
    "imageUrl": "/grade6/fen/term-2/test-6/soru-09.svg",
    "imageAlt": "Başlangıçtaki taşırma kabı: su 90 cm³ çizgisinde, taşma ağzı 100 cm³ çizgisinde. Katı tamamen batırıldığında taşan su ayrı bir kapta toplanıyor. Toplama kabı boşken 12 g; taşan suyla birlikte 32 g. Katının kütlesi 45 g. Şema ölçekli değildir.",
    "imageWidth": 360,
    "imageHeight": 680
  },
  {
    "id": "f6-2-t6-10",
    "subject": "fen",
    "term": 2,
    "prompt": "Basitleştirilmiş bir buz–su modelinde 9 g buz 10 cm³, 9 g sıvı su ise 9 cm³ hacim kaplıyor. Örnek, her biri 9 g olan 10 eşit kütleli paydan oluşuyor; her pay ya tamamen buz ya tamamen sıvı su hâlinde.\n\nBaşlangıçta buzun TAM hacmi ile sıvı suyun hacmi ayrı ayrı bulunup toplanıyor ve 96 cm³ elde ediliyor. Bu toplam, kaptaki su seviyesinden okunan hacim değildir. Sonra başlangıçtaki buzun 18 g’ı eriyor. Madde kaybı yok; modeldeki hacim değerleri geçerli kalıyor.\n\nBaşlangıçta kaç gram buz vardır? 18 g buz eridikten sonra buz ve sıvı su hacimlerinin toplamı kaç cm³ olur?",
    "options": [
      "36 g; 94 cm³.",
      "54 g; 96 cm³.",
      "54 g; 94 cm³.",
      "54 g; 98 cm³."
    ],
    "correct": 2,
    "explanation": "On payın tamamı sıvı olsaydı toplam hacim 10 × 9 = 90 cm³ olurdu. Bir pay sıvı yerine buz olduğunda hacim 10 − 9 = 1 cm³ artar. Başlangıç hacmi 96 cm³ olduğuna göre 96 − 90 = 6 pay buzdur: 6 × 9 = 54 g buz vardır. Eriyen 18 g, iki paydır. Her pay erirken hacim 1 cm³ azaldığından toplam hacim 96 − 2 = 94 cm³ olur. Kütle korunur; buzun suya dönüşmesi bu modelde hacmi azaltır."
  }
],
    test7: [
  {
    "id": "f6-2-t7-01",
    "subject": "fen",
    "term": 2,
    "prompt": "Sahne kostümü görselde beyaz ışık altında gösterilmiştir. Kostüm kendi ışığını üretmiyor.\n\nKostümün görülen rengi, hangi renkteki ışığı gözümüze yansıtmasıyla açıklanır?",
    "options": [
      "Kırmızı",
      "Yeşil",
      "Mavi",
      "Sarı"
    ],
    "correct": 2,
    "explanation": "Beyaz ışık altında mavi görülen kostüm, mavi ışığı gözümüze yansıtır. Kostüm kendi ışığını üretmez; üzerine gelen ışığın bazı renklerini soğurur, mavi rengi yansıtır.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-01.svg",
    "imageAlt": "Beyaz ışıkla aydınlatılan bir sahne kostümü mavi renkte görünüyor. Kostümün rengi görselde gösteriliyor.",
    "imageWidth": 360,
    "imageHeight": 380
  },
  {
    "id": "f6-2-t7-02",
    "subject": "fen",
    "term": 2,
    "prompt": "Doğada yaşayan bazı bitkiler, ilaç yapımında kullanılan maddeler için kaynak oluşturur.\n\nBu durum biyoçeşitliliğin hangi önemine örnektir?",
    "options": [
      "İnsanların yararlanabileceği doğal kaynaklar sunmasına.",
      "Bütün canlıların aynı ortamda yaşamasını sağlamasına.",
      "Her bitkinin bütün hastalıkları iyileştirmesine.",
      "Doğadaki tür sayısını azaltmasına."
    ],
    "correct": 0,
    "explanation": "Farklı canlı türleri, ilaç yapımında araştırılan veya kullanılan maddeler gibi doğal kaynaklar sunabilir. Bu, biyoçeşitliliğin insan yaşamı açısından önemine örnektir. Her bitkinin bütün hastalıkları iyileştirdiği ya da tüm canlıların aynı ortamda yaşayabildiği anlamına gelmez."
  },
  {
    "id": "f6-2-t7-03",
    "subject": "fen",
    "term": 2,
    "prompt": "Aynı metal telin soğuk ve sıcak havadaki görünümü şekilde verilmiştir. Direkler arasındaki uzaklık değişmiyor; tel kopmuyor ve kalıcı biçim değişimine uğramıyor.\n\nSıcak havadaki farkı açıklayan olay hangisidir?",
    "options": [
      "Telin eriyerek sıvılaşması.",
      "Tele dışarıdan metal eklenmesi.",
      "Isınan telin büzülerek kısalması.",
      "Isınan telin genleşerek uzaması."
    ],
    "correct": 3,
    "explanation": "Sıcaklığı artan metal tel genleşir ve boyu uzar. Direklerin arası aynı kaldığı için daha uzun tel daha fazla sarkar. Genleşme, tele madde eklenmesi veya telin erimesi değildir.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-03.svg",
    "imageAlt": "Aynı uzaklıktaki iki direk arasında soğuk havada az sarkan, sıcak havada daha çok sarkan aynı tel gösteriliyor.",
    "imageWidth": 360,
    "imageHeight": 460
  },
  {
    "id": "f6-2-t7-04",
    "subject": "fen",
    "term": 2,
    "prompt": "Saf X maddesinin gazı, sabit basınçta soğutulurken görseldeki sıcaklıkta sıvıya dönüşüyor. Gaz ve sıvı birlikte bulunduğu sürece bu sıcaklık değişmiyor. Aynı saf maddenin aynı basınçtaki yoğuşma ve kaynama sıcaklıkları birbirine eşittir.\n\nX sıvısından iki katı miktar alınıp aynı basınçta ısıtılırsa kaynama noktası kaç °C olur?",
    "options": [
      "38",
      "76",
      "100",
      "152"
    ],
    "correct": 1,
    "explanation": "Görselde X’in yoğuşma sıcaklığı 76 °C’dir. Verilen bilgiye göre aynı basınçta kaynama sıcaklığı da 76 °C olur. Saf maddenin miktarını iki katına çıkarmak kaynama noktasını iki katına çıkarmaz.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-04.svg",
    "imageAlt": "Saf X gazı soğutulurken 76 °C’de sıvıya dönüşüyor; kapta gaz ve sıvı birlikte bulunuyor. Termometre 76 °C gösteriyor.",
    "imageWidth": 360,
    "imageHeight": 410
  },
  {
    "id": "f6-2-t7-05",
    "subject": "fen",
    "term": 2,
    "prompt": "Tablodaki üç örnek, aynı sıcaklıkta aynı homojen ve içi dolu maddeden alınmıştır. Hacimler doğru ölçülmüştür; kütle kayıtlarından yalnız biri yanlış yazılmıştır.\n\nHangi örneğin kütle kaydı düzeltilmeli ve doğru değer ne olmalıdır?",
    "options": [
      "P; 30 g.",
      "R; 72 g.",
      "S; 75 g.",
      "S; 90 g."
    ],
    "correct": 2,
    "explanation": "P için 36 ÷ 12 = 3 g/cm³, R için 60 ÷ 20 = 3 g/cm³ bulunur. Aynı madde ve sıcaklıkta yoğunluk aynı olmalıdır. S’nin yazılan değeri 90 ÷ 25 = 3,6 g/cm³ verdiği için yanlış kayıt S’dedir. S’nin doğru kütlesi 25 × 3 = 75 g’dır.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-05.svg",
    "imageAlt": "Ölçüm tablosu: P örneği 12 cm³ ve 36 g; R örneği 20 cm³ ve 60 g; S örneği 25 cm³ ve 90 g. Hacimler güvenilir; üç kütle kaydından biri yanlış.",
    "imageWidth": 360,
    "imageHeight": 400
  },
  {
    "id": "f6-2-t7-06",
    "subject": "fen",
    "term": 2,
    "prompt": "18 g kütleli bir mum parçası, içinde 50 cm³ su bulunan dereceli kaba bırakılıyor. Mum kısmen su dışında kalarak yüzüyor ve seviye 68 cm³ oluyor. Öğrenci, “Hacim 18 cm³, yoğunluk 1 g/cm³.” diyor.\n\nMum, hacmi ihmal edilen ince bir çubukla tamamen suya batırıldığında seviye 70 cm³ oluyor. Su eklenmiyor; taşma, çözünme ve hava kabarcığı yok.\n\nÖğrencinin hatası ve mumun doğru yoğunluğu hangisidir?",
    "options": [
      "İlk ölçümde yalnız su içinde kalan bölümün hacmini kullanmıştır; doğru yoğunluk 0,9 g/cm³’tür.",
      "İlk ölçümde mumun bütün hacmini kullanmıştır; doğru yoğunluk 1 g/cm³’tür.",
      "İkinci okumada 70 cm³’ün tamamı mumun hacmidir; doğru yoğunluk 18/70 g/cm³’tür.",
      "Mumun kütlesi tamamen batırılınca artmıştır; doğru yoğunluk 1,1 g/cm³’tür."
    ],
    "correct": 0,
    "explanation": "Yüzen mumun bir bölümü su dışındadır; 68 − 50 = 18 cm³ yalnız su içinde kalan bölümün hacmidir. Tamamen batırılınca bütün mumun hacmi 70 − 50 = 20 cm³ olarak bulunur. Yoğunluk 18 ÷ 20 = 0,9 g/cm³’tür. Parçayı suya bastırmak, belirtilen koşullarda onun kütlesini artırmaz."
  },
  {
    "id": "f6-2-t7-07",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir koruma modelinde K, L ve M türlerinin her biri için hem bir üreme alanının hem de bir beslenme alanının korunması gerekiyor. Görselde mevcut koruma ve üç onarım seçeneği verilmiştir. Türler bu alanlar arasında güvenle geçebiliyor; başka uygun alan yok.\n\nI numaralı onarım yapılırsa M’nin mevcut beslenme alanı kullanılamaz hâle geliyor. Diğer onarımlar mevcut alanlara zarar vermiyor.\n\nBütçe en fazla iki onarıma yeterlidir. Üç türün de iki ihtiyacını karşılamak için hangileri seçilmelidir?",
    "options": [
      "I ve III.",
      "II ve III.",
      "Yalnız III.",
      "I ve II."
    ],
    "correct": 3,
    "explanation": "Başlangıçta K ve L’nin üreme, M’nin beslenme alanı korunmaktadır. K’nin beslenmesi, L’nin beslenmesi ve M’nin üremesi eksiktir. M’nin üreme alanını yalnız I sağlayabildiğinden I gereklidir. Ancak I, M’nin mevcut beslenme alanını kullanılmaz yapar. II hem L’nin beslenme ihtiyacını hem M’nin kaybettiği beslenme alanını karşılar; böylece I ve II birlikte bütün ihtiyaçları tamamlar. I ile III seçilirse M’nin beslenme alanı eksik kalır. II ile III seçilirse M’nin üreme alanı yoktur. Bu sonuç yalnız verilen modelin ihtiyaçları içindir; bütün gerçek yaşam tehditlerinin ortadan kalktığını göstermez.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-07.svg",
    "imageAlt": "Mevcut koruma: K üreme, L üreme, M beslenme. Onarım I: K beslenme ve M üreme; mevcut M beslenme alanı kaybolur. Onarım II: L beslenme ve M beslenme. Onarım III: K beslenme ve L beslenme.",
    "imageWidth": 360,
    "imageHeight": 720
  },
  {
    "id": "f6-2-t7-08",
    "subject": "fen",
    "term": 2,
    "prompt": "K ve L telleri aynı ampulle karşılaştırılıyor. Tellerin uzunluğu, kalınlığı ve sıcaklığı değişmiyor; bütün temaslar sağlam. Her seri yeni ve özdeş bir pille başlıyor, teller aynı süre deneniyor:\n• 1. seri: önce K ile parlak, sonra L ile sönük ışık görülüyor.\n• 2. seri: önce L ile parlak, sonra K ile sönük ışık görülüyor.\nHer serinin başında ve sonunda aynı kontrol teli de deneniyor: başta parlak, sonda sönük ışık veriyor. Serinin sonunda yalnız pil yenilenince kontrol telinin ilk parlaklığı geri geliyor.\n\nBu kayıtlar birlikte değerlendirildiğinde hangi sonuç ve sonraki işlem uygundur?",
    "options": [
      "İlk seri K’nin direncinin küçük olduğunu kanıtlar; ikinci seri dikkate alınmamalıdır.",
      "Pil koşulları denemeler boyunca sabit kalmamıştır; K ve L, pil etkisi sabit tutularak yeniden karşılaştırılmalıdır.",
      "İki tel de bir kez parlak yaktığı için dirençlerinin kesinlikle eşit olduğu anlaşılır; yeni deneme gerekmez.",
      "Kontrol telinin kalınlığı kendiliğinden değişmiştir; yalnız kontrol telini uzatmak sorunu çözer."
    ],
    "correct": 1,
    "explanation": "Sıra ters çevrildiğinde yine ikinci denenen tel daha sönük yakmaktadır. Üstelik özellikleri değişmeyen kontrol teli de serinin sonunda sönükleşir; yalnız pil yenilenince ilk parlaklığına döner. Bu, pil koşullarının sabit tutulmadığını gösterir. K ile L arasındaki farkı yalnız tellerin direncine bağlamak veya dirençlerini eşit ilan etmek uygun değildir. Pilin etkisi sabit tutularak, aynı ampul ve sağlam temaslarla karşılaştırma tekrarlanmalıdır."
  },
  {
    "id": "f6-2-t7-09",
    "subject": "fen",
    "term": 2,
    "prompt": "Eşit aralıklı fakat hacim sayıları silinmiş bir ölçü kabı kullanılıyor. Görseldeki ilk deneyde kaba 12 g su ekleniyor. Suyun yoğunluğu 1 g/cm³’tür.\n\nİkinci deney aynı kapta ayrı olarak yapılıyor: kütlesi 48 g olan içi dolu katı tamamen suya batırılıyor. Katı su almıyor, çözünmüyor ve hava kabarcığı taşımıyor; taşma veya su kaybı yok.\n\nKatının yoğunluğu kaç g/cm³’tür? Değişime uğramadığı 1,8 g/cm³ yoğunluklu başka bir sıvıda serbest bırakılırsa ne olur?",
    "options": [
      "2 g/cm³; batar.",
      "8 g/cm³; batar.",
      "2 g/cm³; yüzer.",
      "4 g/cm³; batar."
    ],
    "correct": 0,
    "explanation": "İlk deneyde eklenen 12 g suyun hacmi 12 cm³’tür. Seviye 2. çizgiden 5. çizgiye, yani 3 eşit aralık yükselmiştir; bir aralık 12 ÷ 3 = 4 cm³’tür. İkinci deneyde seviye 3. çizgiden 9. çizgiye, yani 6 aralık yükselir. Katının hacmi 6 × 4 = 24 cm³, yoğunluğu 48 ÷ 24 = 2 g/cm³’tür. Bu değer 1,8 g/cm³’ten büyük olduğundan katı diğer sıvıda batar. Çizgi numaraları doğrudan cm³ değildir.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-09.svg",
    "imageAlt": "Aynı eşit bölmeli ölçü kabıyla iki deney: I’de 12 g su eklenince seviye 2. çizgiden 5. çizgiye çıkar. II’de 48 g katı tamamen batırılınca seviye 3. çizgiden 9. çizgiye çıkar. Şekilde bütün çizgiler eşit aralıklı; numaralar hacim birimi değildir.",
    "imageWidth": 360,
    "imageHeight": 700
  },
  {
    "id": "f6-2-t7-10",
    "subject": "fen",
    "term": 2,
    "prompt": "X, Y, Z ve T örnekleri, tabloda verilen saf K, L, M ve N maddelerinden birer tanesidir. Her madde yalnız bir örnekte bulunur. Bütün bilgiler aynı sabit basınç için geçerlidir; örnekler belirtilen sıcaklığa tamamen ulaşmıştır.\n\nGözlemler:\n• X, 40 °C’de sıvıdır.\n• Y, 80 °C’de gazdır.\n• Z, 65 °C’de sıvıdır.\n• T, 100 °C’de sıvıdır.\n\nX örneği 100 °C’ye, T örneği 60 °C’ye ulaştırıldığında sırasıyla hangi hâllerde olurlar?",
    "options": [
      "Sıvı; katı.",
      "Gaz; sıvı.",
      "Gaz; katı.",
      "Sıvı; sıvı."
    ],
    "correct": 2,
    "explanation": "80 °C’de yalnız K kendi kaynama noktasının üstündedir; Y = K’dir. 40 °C’de sıvı olabilenler K ve L’dir. K zaten kullanıldığı için X = L olur. 65 °C’de sıvı olabilenler L ve M’dir. L de kullanıldığı için Z = M olur. Geriye T = N kalır; T’nin 100 °C’de sıvı olması bununla uyumludur. X yani L, 100 °C’de 90 °C’lik kaynama noktasının üstünde olduğundan gazdır. T yani N, 60 °C’de 70 °C’lik erime noktasının altında olduğundan katıdır. Dört gözlem, her maddenin yalnız bir kez kullanıldığı koşulla birlikte değerlendirilmelidir.",
    "imageUrl": "/grade6/fen/term-2/test-7/soru-10.svg",
    "imageAlt": "Aynı basınçta saf maddelerin erime ve kaynama noktaları: K için 10 ve 60 °C; L için 30 ve 90 °C; M için 50 ve 120 °C; N için 70 ve 150 °C.",
    "imageWidth": 360,
    "imageHeight": 500
  }
],
    test8: [
  {
    "id": "f6-2-t8-01",
    "subject": "fen",
    "term": 2,
    "prompt": "Görseldeki pilli devrenin test aralığına kuru bir grafit çubuk yerleştirilmiştir. Grafit, kurşun kalemlerin yazan kısmında bulunan bir maddedir. Pil, ampul ve temaslar sağlamdır; test aralığında başka bağlantı yoktur.\n\nAmpulde görülen durum, grafitin hangi özelliğini gösterir?",
    "options": [
      "Işık üretmesini.",
      "Elektriği iletebilmesini.",
      "Elektriğin geçişini tamamen engellemesini.",
      "Isınınca erimesini."
    ],
    "correct": 1,
    "explanation": "Görselde ampul yanmaktadır. Devre, test aralığındaki grafit üzerinden tamamlandığına göre grafit elektriği iletebilir. Bir maddenin iletken olması için mutlaka metal olması gerekmez. Bu deney grafitin erime özelliğini sınamaz.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-01.svg",
    "imageAlt": "Pilli devrenin test aralığında gri bir grafit çubuk bulunuyor. Ampul sarı ışık ve çevresindeki ışınlarla yanar durumda gösteriliyor. Grafiti atlayan başka bağlantı yok.",
    "imageWidth": 360,
    "imageHeight": 430
  },
  {
    "id": "f6-2-t8-02",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir kumsalda deniz kaplumbağası yavruları, kıyıdaki güçlü yapay ışıklara yönelerek denizden uzaklaşıyor. Bu durum yavruların kaybına yol açabiliyor.\n\nBelirtilen tehdidi doğrudan azaltacak önlem hangisidir?",
    "options": [
      "Kumsala daha çok ışıklı reklam panosu yerleştirmek.",
      "Yavruların çıktığı alandaki kumları betonla kaplamak.",
      "Kıyı ışıklarını yavruların çıkış döneminde azaltıp kumsala yöneltmemek.",
      "Kumsalı aydınlatan lambaların sayısını artırmak."
    ],
    "correct": 2,
    "explanation": "Verilen tehdit yapay ışıkların yavruları yanlış yöne çekmesidir. Kıyı aydınlatmasını azaltmak ve ışığı kumsala yöneltmemek bu etkeni doğrudan azaltır. Bu önlem, türün karşılaştığı bütün tehditlerin ortadan kalktığı anlamına gelmez."
  },
  {
    "id": "f6-2-t8-03",
    "subject": "fen",
    "term": 2,
    "prompt": "Şekildeki ince borulu düzeneğin içindeki sıvı soğutuluyor. Düzeneğe madde girip çıkmıyor; buharlaşma, yoğuşma veya donma olmuyor. Kap ve borunun boyut değişimi ihmal ediliyor.\n\nGözlenen seviye değişimi ve sıvının kütlesi nasıl açıklanır?",
    "options": [
      "Sıvı büzülmüştür; kütlesi değişmemiştir.",
      "Sıvı genleşmiştir; kütlesi artmıştır.",
      "Sıvı donmuştur; kütlesi değişmemiştir.",
      "Sıvının bir bölümü yok olmuştur; kütlesi azalmıştır."
    ],
    "correct": 0,
    "explanation": "Görselde soğutulan sıvının borudaki seviyesi düşmüştür. Kabın boyutları değişmiyorsa bu, sıvının hacminin küçüldüğünü yani büzüldüğünü gösterir. Madde girip çıkmadığı için sıvının kütlesi değişmez; soruda donma olmadığı da belirtilmiştir.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-03.svg",
    "imageAlt": "Aynı ince borulu kapta 60 °C’de sıvı seviyesi yüksek, 20 °C’ye soğutulduğunda daha alçaktır. İki kaptaki boyutlar aynıdır; seviyeler kesikli çizgilerle belirtilmiştir.",
    "imageWidth": 360,
    "imageHeight": 450
  },
  {
    "id": "f6-2-t8-04",
    "subject": "fen",
    "term": 2,
    "prompt": "Pille çalışan bir devrede metal telin üzerindeki plastik kılıf, daha kalın bir plastik kılıfla değiştiriliyor. Metal kısmın cinsi, uzunluğu ve kalınlığı değişmiyor. Kablonun iki ucunda metal, devreye aynı biçimde doğrudan temas ediyor; plastik akım yoluna girmiyor. Pil, ampul ve sıcaklık aynı.\n\nAmpulün parlaklığı için ne beklenir?",
    "options": [
      "Dış kılıf kalınlaştığı için mutlaka artar.",
      "Plastik kalınlaştığı için ampul kesinlikle söner.",
      "Metal telin uzunluğu değişmiş gibi azalır.",
      "İletken metal kısmın özellikleri değişmediği için aynı kalır."
    ],
    "correct": 3,
    "explanation": "Direnç bakımından burada önemli olan, devreye katılan iletken metal kısmın özellikleridir. Yalnız yalıtıcı plastik kılıf kalınlaşmıştır; metalin uzunluğu, kalınlığı, cinsi ve bağlantıları aynı kalmıştır. Bu koşullarda parlaklığın değişmesi beklenmez. Kablonun dıştan daha kalın görünmesi, iletken metalin de kalınlaştığı anlamına gelmez."
  },
  {
    "id": "f6-2-t8-05",
    "subject": "fen",
    "term": 2,
    "prompt": "Malzemesi ve boyutları aynı, yüzey renkleri farklı iki levha kullanılıyor. Levhalar aynı ışık kaynağına eşit uzaklıkta, aynı açıyla ve eşit süre tutuluyor. Başlangıç ve son sıcaklıklar görseldedir.\n\nHangi levhanın sıcaklık artışı daha büyüktür? Rengin etkisini daha uygun koşullarda yeniden araştırmak için ne düzeltilmelidir?",
    "options": [
      "L; levhaların ışığa uzaklıkları farklı yapılmalıdır.",
      "K; başlangıç sıcaklıkları eşitlenmelidir.",
      "K; yalnız siyah levhanın ışıkta kalma süresi uzatılmalıdır.",
      "L; beyaz levhanın başlangıç sıcaklığı daha da artırılmalıdır."
    ],
    "correct": 1,
    "explanation": "K’nin sıcaklığı 22 − 10 = 12 °C, L’ninki 26 − 20 = 6 °C artmıştır. Son sıcaklığı daha yüksek olan L olsa da sıcaklık artışı K’de büyüktür. Başlangıç sıcaklıkları farklı olduğundan bu deney renk etkisi için tam kontrollü değildir; tekrarında başlangıçlar da eşitlenmelidir. Verilen iki artış, ısı kayıpları gibi etkiler incelenmeden soğurulan toplam enerji miktarlarının kesin oranını vermez.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-05.svg",
    "imageAlt": "Sıcaklık kayıtları: siyah K levhası başlangıçta 10 °C, sonunda 22 °C; beyaz L levhası başlangıçta 20 °C, sonunda 26 °C. Aynı ışık, uzaklık ve süre kullanılmıştır.",
    "imageWidth": 360,
    "imageHeight": 470
  },
  {
    "id": "f6-2-t8-06",
    "subject": "fen",
    "term": 2,
    "prompt": "Aynı homojen katıdan alınmış 24’er gramlık iki özdeş örnekle ayrı hacim ölçümleri yapılıyor. Sıvı seviyeleri ve gözlemler şekilde verilmiştir. İki örnek de tamamen sıvı içindedir; taşma, sıçrama ve hava kabarcığı yoktur. Yağ katının içine girmiyor ve katıyla tepkime vermiyor.\n\nKatının yoğunluğu için hangi ölçüm ve sonuç kullanılmalıdır?",
    "options": [
      "Su ölçümü; 2,4 g/cm³.",
      "Yağ ölçümü; 24/52 g/cm³.",
      "Yağ ölçümü; 2 g/cm³.",
      "Su ölçümü; 0,48 g/cm³."
    ],
    "correct": 2,
    "explanation": "Su deneyinde katı kısmen çözündüğü için seviye farkı, başlangıçtaki katının hacmi olarak güvenle kullanılamaz. Yağda ise katı çözünmeden tamamen batmıştır. Katının hacmi 52 − 40 = 12 cm³, yoğunluğu 24 ÷ 12 = 2 g/cm³’tür. Son seviyenin tamamını katı hacmi saymak da doğru değildir.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-06.svg",
    "imageAlt": "İki ayrı deneyin kayıtları: su başlangıçta 40 cm³, örnek eklendikten sonra 50 cm³; katı kısmen çözünüyor. Yağ başlangıçta 40 cm³, örnek eklendikten sonra 52 cm³; katı çözünmüyor. Her örnek 24 g.",
    "imageWidth": 360,
    "imageHeight": 630
  },
  {
    "id": "f6-2-t8-07",
    "subject": "fen",
    "term": 2,
    "prompt": "P ve R reostaları ayrı pilli devrelerde kullanılıyor. Her birinde sürgü ile sabit uçlardan yalnız biri bağlıdır; bağlı sabit uç gizlidir. Teller aynı cins ve kalınlıktadır, her işaret arası eşit uzunluktadır. Yalnız bağlı sabit uç ile sürgü arasındaki tel devreye katılır.\n\nHer iki sürgü de 2’den 4’e götürüldüğünde görseldeki parlaklık değişimleri gözleniyor. Her devrenin pili, ampulü, sıcaklığı ve temasları kendi denemeleri boyunca sabittir.\n\nSonra her reostada devreye tam 3 aralıklık tel katılması isteniyor. Sabit uç bağlantılarını değiştirmeden P ve R sürgüleri sırasıyla hangi numaralara getirilmelidir?",
    "options": [
      "5 ve 3.",
      "3 ve 5.",
      "3 ve 3.",
      "5 ve 5."
    ],
    "correct": 0,
    "explanation": "P’de sürgü 2’den 4’e sağa giderken ampul daha parlak olmuştur; kullanılan tel kısalmış, yani bağlı sabit uç sağdaki B olmalıdır. B, 8’de olduğundan üç aralık için P sürgüsü 5’e getirilir: 8 − 5 = 3. R’de aynı hareket ampulü sönükleştirmiştir; tel uzadığına göre bağlı uç soldaki C’dir. C, 0’da olduğundan R sürgüsü 3’e getirilir. Farklı devrelerin parlaklıkları birbirleriyle değil, her devrenin kendi ilk ve son durumuyla karşılaştırılır.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-07.svg",
    "imageAlt": "P reostası: A ucu 0, B ucu 8; sürgü 2’den 4’e giderken ampul daha parlak oluyor. R reostası: C ucu 0, D ucu 8; aynı 2’den 4’e hareket ampulü daha sönük yapıyor. İki tel de 0’dan 8’e eşit aralıklarla işaretli.",
    "imageWidth": 360,
    "imageHeight": 570
  },
  {
    "id": "f6-2-t8-08",
    "subject": "fen",
    "term": 2,
    "prompt": "Bir koruma çalışmasında iki uygulama, ayrı bölge çiftlerinde deneniyor. Her çiftte uygulama yapılan alanın yanında benzer, işlem yapılmayan bir kontrol alanı bulunuyor. Aynı yöntem ve sürede kaydedilen yerli tür sayıları şöyle:\n• Kıyı ışıkları azaltılan alan: 8 → 11; kontrolü: 6 → 8.\n• Yaşam alanı onarılan alan: 10 → 12; kontrolü: 7 → 6.\n\nBu sınırlı modelde, bir çiftin iki alanını etkileyen ortak koşul değişiminin tür sayısını aynı miktarda etkilediği kabul ediliyor. Uygulamanın katkısını karşılaştırmak için, uygulama alanındaki değişimden kendi kontrolündeki değişim çıkarılacak.\n\nBu ölçüte göre hangi değerlendirme doğrudur?",
    "options": [
      "Işık azaltma 3, onarım 2 türlük katkı gösterir; kontroller hesaba katılmaz.",
      "İki uygulama da 1 türlük katkı gösterir; son sayılar arasındaki fark yeterlidir.",
      "Işık azaltma 5, onarım 1 türlük katkı gösterir; iki alandaki değişimler toplanır.",
      "Işık azaltma 1, onarım 3 türlük katkı gösterir; bu sonuç yalnız verilen çalışma koşulları için yorumlanır."
    ],
    "correct": 3,
    "explanation": "Işık azaltılan alandaki artış 11 − 8 = 3, kontrolündeki artış 8 − 6 = 2’dir; ölçüte göre katkı 3 − 2 = 1 olur. Onarılan alanda artış 12 − 10 = 2’dir. Kontrolünde 7’den 6’ya bir azalma vardır; ortak koşulların 1 türlük kayıp yönündeki etkisi de telafi edilerek 2 türlük artış sağlandığı için onarımın katkısı 2 + 1 = 3 olur. Böylece onarım bu ölçüte göre daha büyük olumlu işaret verir. Başlangıçlar farklı olduğundan yalnız son sayıları veya yalnız uygulama alanlarındaki artışları karşılaştırmak yeterli değildir. Bu sınırlı model bütün bölgelerde aynı sonucu garanti etmez."
  },
  {
    "id": "f6-2-t8-09",
    "subject": "fen",
    "term": 2,
    "prompt": "Aynı maddeden yapılmış, içi dolu ve gözeneksiz boncuklar bir ölçü kabına konuyor. Kuru boncuk yığını, aralardaki hava boşluklarıyla birlikte 100 cm³ çizgisine kadar yer kaplıyor. Tartımlar görseldedir.\n\nAyrı bir kaptan su dökülerek boncuklar arasındaki bütün boşluklar dolduruluyor; su seviyesi tam 100 cm³ çizgisine geliyor. Boncuklar bu seviyenin altında kalıyor. Dökülen suyun bir kısmı ölçü kabına değil, ayrı bir toplama kabına düşüyor. Ayrılan miktar görselde verilmiştir. Verici kaptan eksilen suyun tamamı bu iki kaptadır.\n\nSuyun yoğunluğu 1 g/cm³’tür. Çizim ölçekli değildir. Hava boşluğu kalmıyor; boncuklar çözünmüyor, su almıyor veya yer değiştirmiyor. Başka su kaybı yok. Boncukların yapıldığı katı maddenin yoğunluğu kaç g/cm³’tür?",
    "options": [
      "1,1",
      "2,2",
      "2",
      "Yaklaşık 2,45"
    ],
    "correct": 2,
    "explanation": "Boncukların kütlesi 135 − 25 = 110 g’dır. Verici kaptan eksilen su 180 − 130 = 50 g, yani 50 cm³’tür. Bunun 5 cm³’ü ayrı kaba düştüğünden boncukların arasına giren su 45 cm³’tür. Son toplam 100 cm³’ün 45 cm³’ünü su, kalan 100 − 45 = 55 cm³’ünü katı boncuk maddesi kaplar. Yoğunluk 110 ÷ 55 = 2 g/cm³ olur. Kuru yığının 100 cm³’ü yalnız katı hacmi değildir; ayrı kaba düşen su da boşlukları doldurmamıştır.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-09.svg",
    "imageAlt": "Ölçü kabı boşken 25 g; aynı kap kuru boncuklarla 135 g. Boncuk yığını hava aralıklarıyla birlikte 100 cm³ çizgisine kadar. Verici su kabı dökmeden önce 180 g, sonra 130 g. Ölçü kabına girmeyip ayrı toplanan su 5 cm³. Son su seviyesi 100 cm³.",
    "imageWidth": 360,
    "imageHeight": 770
  },
  {
    "id": "f6-2-t8-10",
    "subject": "fen",
    "term": 2,
    "prompt": "Bilinmeyen bir örnek, tabloda verilen saf K, L, M ve N maddelerinden biridir. Aynı sabit basınçta her gözlemde örneğin seçilen sıcaklığa tamamen ulaşması bekleniyor; sonra yalnız katı mı, sıvı mı olduğu kaydediliyor. Gerekirse örnek soğutulabiliyor. Tablodaki bütün maddeler denenen sıcaklıklarda ya tamamen katı ya tamamen sıvı oluyor.\n\nEn fazla iki gözlemle, örnek hangi aday olursa olsun kimliğini kesin belirlemek isteniyor. İkinci gözlemin sıcaklığı ilk sonuca göre seçilebilir.\n\nHangi plan bu amacı bütün adaylar için sağlar?",
    "options": [
      "Önce 40 °C; sıvıysa 20 °C, katıysa 60 °C’de gözlem.",
      "Önce 20 °C; sıvıysa 40 °C, katıysa 60 °C’de gözlem.",
      "Önce 60 °C; sıvıysa 40 °C, katıysa 20 °C’de gözlem.",
      "Önce 40 °C; sıvıysa 60 °C, katıysa 20 °C’de gözlem."
    ],
    "correct": 0,
    "explanation": "40 °C’de K ve L sıvı, M ve N katıdır; ilk gözlem adayları ikişerli iki gruba ayırır. Sıvı görülürse 20 °C’de K sıvı, L katı olur ve ayrılır. Katı görülürse 60 °C’de M sıvı, N katı olur ve ayrılır. B planında ilk gözlem katıysa L, M, N kalır; 60 °C’de L ile M ayırt edilemez. C planında ilk gözlem sıvıysa K, L, M kalır; 40 °C’de K ile L ayırt edilemez. D’de ise ikinci sıcaklıklar yanlış dallara seçilmiştir: K ile L, 60 °C’de birlikte sıvı; M ile N, 20 °C’de birlikte katıdır. Yalnız A, iki olası ilk sonucun da ardından tek adaya ulaştırır.",
    "imageUrl": "/grade6/fen/term-2/test-8/soru-10.svg",
    "imageAlt": "Aynı sabit basınçta saf maddelerin erime ve kaynama noktaları: K 10 ve 100 °C; L 30 ve 100 °C; M 50 ve 100 °C; N 70 ve 100 °C.",
    "imageWidth": 360,
    "imageHeight": 490
  }
]
  },
};
