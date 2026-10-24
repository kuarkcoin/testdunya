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
