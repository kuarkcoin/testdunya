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
]
  },
};
