import { SubjectData } from "./types";

// 6. sınıf başlangıç paketi: İlk iki ünite ve bitki/hayvanlarda üreme, büyüme, gelişme.
// FB.6.1.1–FB.6.1.4, FB.6.2.1–FB.6.2.3, FB.6.3.1–FB.6.3.4; tüm yılı kapsamaz.
// Kaynaklar: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
// https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/411
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

  },
  term2: {},
};
