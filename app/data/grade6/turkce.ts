import { SubjectData } from "./types";

// Özgün sorular; 1. dönem başlangıç konularıyla sınırlıdır.
// Müfredat kapsamı: https://tymm.meb.gov.tr/ortaokul-turkce-dersi/unite/104
export const turkceData: SubjectData = {
  "term1": {
    "test1": [
      {
        "id": "t6-1-t1-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Sınıf gazetesindeki yazıları eledik; konuya uygun olmayanları sonraki sayılar için ayırdık.” cümlesinde “elemek” sözcüğü hangi anlamda kullanılmıştır?",
        "options": [
          "Bir maddeyi elekten geçirmek",
          "Seçerek bir bölümünü ayırmak",
          "Bir işi aceleye getirmek",
          "Yazıları baştan sona ezberlemek"
        ],
        "correct": 1,
        "explanation": "Yazıların konuya uygunluğuna bakılarak bir bölümü ayrılmıştır. Bu bağlamda elemek, seçme ve ayırma anlamındadır."
      },
      {
        "id": "t6-1-t1-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“İlk denemesinde maketi devrilen Eren, pes etmek yerine yeniden işe koyuldu. Öğretmeni onun bu davranışını ‘Yılmadan çalışan, sonunda yol alır.’ sözüyle değerlendirdi.”\nBu sözle vurgulanmak istenen nedir?",
        "options": [
          "Başarı için başkalarıyla yarışmak gerekir.",
          "Bir işe yalnızca kolay olduğunda başlanmalıdır.",
          "Hızlı çalışmak her zaman iyi sonuç verir.",
          "Güçlükler karşısında çabayı sürdürmek ilerlemeyi sağlar."
        ],
        "correct": 3,
        "explanation": "Eren, başarısız denemesinden sonra çalışmayı bırakmaz. Söz, vazgeçmeden sürdürülen çabanın kişiyi ilerleteceğini vurgular."
      },
      {
        "id": "t6-1-t1-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okul bahçesine kuşlar için bir suluk yerleştirdik. İlk gün herkes bu işin bittiğini düşündü. Ancak birkaç gün sonra suyun kirlenip azaldığını gördük. Bunun üzerine suyu her gün kontrol edecek bir görev çizelgesi hazırladık.\nBu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        "options": [
          "Yararlı bir iş yapmak kadar o işi düzenli olarak sürdürmek de önemlidir.",
          "Kuşların temiz suya ulaşabileceği alanlar oluşturulmalıdır.",
          "Grup çalışmalarında görevler önceden planlanmalıdır.",
          "Okul bahçeleri, öğrencilerin doğayı tanıması için kullanılmalıdır."
        ],
        "correct": 0,
        "explanation": "Suluğu yerleştirmek tek başına yeterli olmamış, düzenli bakım gerekmiştir. Temiz su ve görev çizelgesi bu ana düşünceyi destekleyen ayrıntılardır. Metnin asıl vurgusu, yararlı bir girişimin devamlılığını sağlamaktır."
      },
      {
        "id": "t6-1-t1-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "Selin, dedesinin kendisine verdiği eski radyoyu bir süre rafında sakladı. Radyonun çalışmadığını öğrenince onu çöpe atmadı; bir tamirciye götürdü. Onarılan radyoyu her pazar dedesiyle dinlemeye başladı.\nBu metinden Selin ile ilgili aşağıdakilerden hangisi çıkarılabilir?",
        "options": [
          "Eski elektronik araçları biriktirmeye ilgi duyduğu",
          "Dedesiyle her pazar farklı bir radyo programı dinlediği",
          "Kendisi için manevi değeri olan bir eşyayı koruduğu",
          "Eski radyoları yeni cihazlardan daha kullanışlı bulduğu"
        ],
        "correct": 2,
        "explanation": "Dedesinin verdiği radyoyu saklaması, onartması ve dedesiyle dinlemesi, ona manevi değer verdiğini gösterir. Koleksiyon ilgisi, dinlenen programların çeşitliliği veya eski ve yeni cihazları karşılaştırdığı hakkında bilgi verilmez."
      },
      {
        "id": "t6-1-t1-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Afişteki bilgilere göre aşağıdaki öğrencilerden hangisi etkinliğe belirtilen koşullara uygun biçimde katılabilir?",
        "options": [
          "Okunabilir durumdaki kitabını 10.30’da okul bahçesine getiren Duru",
          "Kitap yerine oyuncağını 11.00’de okul bahçesine getiren Can",
          "Yırtık kitabını 10.00’da okul bahçesine getiren Efe",
          "Kitabını 12.30’da okul bahçesine getiren İpek"
        ],
        "correct": 0,
        "explanation": "Duru’nun kitabı okunabilir durumdadır ve 10.30, etkinliğin 10.00–12.00 saatleri içindedir. Oyuncak kabul edilmez, yırtık kitap uygun değildir; 12.30 ise etkinlik saatleri dışındadır.",
        "imageWidth": 360,
        "imageHeight": 680,
        "imageUrl": "/grade6/turkce/test-1/soru-05.svg",
        "imageAlt": "Kitap değişim günü afişi: cumartesi 10.00–12.00, okul bahçesi; okunabilir bir kitap getir, başka bir kitap seç; yırtık kitap ve oyuncak kabul edilmez."
      },
      {
        "id": "t6-1-t1-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Tabloda verilen günlerde kitap okuma süresi düzenli olarak artan ve cuma günü en uzun süre kitap okuyan öğrenci kimdir?",
        "options": [
          "Ada",
          "Bora",
          "Deniz",
          "Üçü de"
        ],
        "correct": 2,
        "explanation": "Deniz’in süreleri 15, 25 ve 35 dakikadır: verilen günlerde artar ve cuma günkü 35 dakika tablodaki en yüksek süredir. Ada’nın süresi bir gün azalır; Bora’nın süreleri artsa da cuma günü 30 dakikadır.",
        "imageWidth": 360,
        "imageHeight": 570,
        "imageUrl": "/grade6/turkce/test-1/soru-06.svg",
        "imageAlt": "Pazartesi, çarşamba ve cuma günleri kitap okuma süreleri: Ada 20, 15, 25 dakika; Bora 10, 20, 30 dakika; Deniz 15, 25, 35 dakika."
      },
      {
        "id": "t6-1-t1-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“25 Ekim\nBugün okuldan dönerken eski arkadaşım Aslı’yla karşılaştım. Birlikte yürüyüp geçen yılki sınıf gezimizi konuştuk. Eve geldiğimde bu karşılaşmanın sevincini hâlâ hissediyordum.”\nBu metnin türü aşağıdakilerden hangisidir?",
        "options": [
          "Haber yazısı",
          "Günlük",
          "Kullanım kılavuzu",
          "Dilekçe"
        ],
        "correct": 1,
        "explanation": "Tarih belirtilmiş; kişinin o gün yaşadığı olay ve duyguları birinci kişi ağzıyla anlatılmıştır. Bunlar günlük türünün özellikleridir."
      },
      {
        "id": "t6-1-t1-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Kütüphaneden aldığım kitabı bitirdim, _____ son bölümünü daha iyi anlamak için yeniden okudum.”\nCümlede boş bırakılan yere düşüncenin yönünü değiştiren hangi söz getirilmelidir?",
        "options": [
          "çünkü",
          "bu yüzden",
          "üstelik",
          "ancak"
        ],
        "correct": 3,
        "explanation": "Ancak, kitabın bitirilmiş olmasıyla son bölümün yeniden okunması arasında karşıtlık kurar. Çünkü neden, bu yüzden sonuç, üstelik ekleme bildirir."
      },
      {
        "id": "t6-1-t1-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde “de” ve “ki”nin yazımı doğrudur?",
        "options": [
          "Ben de bahçedeki fideleri suladım.",
          "Bende bahçedeki fideleri suladım.",
          "Ben de bahçede ki fideleri suladım.",
          "Bende bahçede ki fideleri suladım."
        ],
        "correct": 0,
        "explanation": "Ben de sözündeki de, “ben de ayrıca” anlamındaki bağlaçtır ve ayrı yazılır. Bahçedeki sözcüğündeki -ki ektir ve bitişik yazılır."
      },
      {
        "id": "t6-1-t1-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Atölyeye gelirken üç şey getirin( ) makas, kâğıt ve yapıştırıcı( )”\nBu cümlede parantezlerle gösterilen yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?",
        "options": [
          "Virgül – soru işareti",
          "Nokta – virgül",
          "İki nokta – nokta",
          "Noktalı virgül – iki nokta"
        ],
        "correct": 2,
        "explanation": "Getirilmesi istenen üç şey açıklanacağı için ilk boşluğa iki nokta konur. Tamamlanmış cümlenin sonuna nokta konur."
      }
    ],
    "test2": [
      {
        "id": "t6-1-t2-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Öğretmen, tartışma uzayınca konuyu toparladı ve herkesin üzerinde anlaştığı düşünceleri sıraladı.” cümlesinde “toparlamak” hangi anlamda kullanılmıştır?",
        "options": [
          "Dağılmış eşyaları bir araya getirmek",
          "Bir konuyu ayrıntılarıyla genişletmek",
          "Söylenenleri düzenleyip özlü hâle getirmek",
          "Bir düşünceyi baştan sona değiştirmek"
        ],
        "correct": 2,
        "explanation": "Öğretmen, konuşulan düşünceleri düzenleyip ortak noktaları sıralar. Sözcük burada fiziksel bir toplama değil, konuyu derleyip özetleme anlamındadır."
      },
      {
        "id": "t6-1-t2-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Berk, arkadaşının önerisini hemen reddetmedi. ‘Önce bir de onun gözünden bakalım.’ diyerek önerinin gerekçelerini dinledi.”\n“onun gözünden bakmak” ifadesiyle anlatılmak istenen nedir?",
        "options": [
          "Karşısındakinin bakış açısını anlamaya çalışmak",
          "Karşısındakinin söylediklerini olduğu gibi tekrarlamak",
          "Kendi düşüncesini daha güçlü savunmak",
          "Bir karar vermeyi başkasına bırakmak"
        ],
        "correct": 0,
        "explanation": "Berk, öneriyi değerlendirmeden önce arkadaşının gerekçelerini anlamaya çalışır. Bu ifade, kişinin kendini karşısındakinin yerine koyarak düşünmesini anlatır."
      },
      {
        "id": "t6-1-t2-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir okul dergisi hazırlarken ilk işimiz kapağı tasarlamak oldu. Fakat yazılar gelince kapakta duyurduğumuz konuların bazılarına hiç yer verilmediğini fark ettik. Sonunda önce yazıları düzenledik, sonra onları doğru biçimde yansıtan yeni bir kapak hazırladık.\nBu metne en uygun başlık hangisidir?",
        "options": [
          "Okul Dergilerinde Renk Seçimi",
          "Yazı Yazmanın Zorlukları",
          "Dergi İçin Görev Dağılımı",
          "İçeriğe Uygun Bir Kapak"
        ],
        "correct": 3,
        "explanation": "Metnin temelinde kapağın, derginin içeriğini doğru yansıtması gereği vardır. Renk seçimi veya görev dağılımı anlatılmamış; yazma güçlüğü üzerinde durulmamıştır."
      },
      {
        "id": "t6-1-t2-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bu notları karşılaştırınca aynı türdeki bitkilerin farklı yerlerde farklı zamanlarda çiçek açtığını gördük.\nII. Bahçemizdeki bitkilerin ne zaman çiçek açtığını merak ediyorduk.\nIII. Bu yüzden bir ay boyunca her gün gözlem yapıp gördüklerimizi not ettik.\nIV. Böylece yalnızca tahmin yürütmek yerine gözlemlerimize dayanarak konuşabildik.\nNumaralanmış cümlelerle anlamlı bir paragraf oluşturmak için sıralama nasıl olmalıdır?",
        "options": [
          "II – I – III – IV",
          "II – III – I – IV",
          "III – II – IV – I",
          "I – IV – II – III"
        ],
        "correct": 1,
        "explanation": "Önce merak edilen konu belirtilir (II), bunun üzerine yapılan gözlem anlatılır (III), notlardan çıkarılan sonuç verilir (I), genel değerlendirmeyle bitirilir (IV)."
      },
      {
        "id": "t6-1-t2-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Duyuruya göre bir öğrencinin hem atölyeye katılması hem de sergiyi gezmesi için hangi plan uygundur?",
        "options": [
          "Kayıt yaptırmadan 10.00’da atölyeye, ardından sergiye gitmek",
          "Kayıt yaptırıp 11.30’da atölyeye, ardından sergiye gitmek",
          "Önceden kayıt yaptırıp 10.00’da atölyeye, bitince sergiye gitmek",
          "Önceden kayıt yaptırıp yalnızca 12.30’da sergiye gitmek"
        ],
        "correct": 2,
        "explanation": "Atölye 10.00–11.00 arasındadır ve önceden kayıt gerektirir. Sergi 11.00–13.00 arasında gezilebilir. C seçeneği iki etkinliğin de koşullarına uyar.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-2/soru-05.svg",
        "imageAlt": "Bilim merkezi duyurusu: gölge atölyesi 10.00–11.00, önceden kayıt gerekli; ışık sergisi 11.00–13.00, kayıt gerekmiyor; tüm etkinlikler ücretsiz."
      },
      {
        "id": "t6-1-t2-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Görselde verilen önerilerin ortak amacı aşağıdakilerden hangisidir?",
        "options": [
          "Kullanılabilir eşyaların ömrünü uzatarak atığı azaltmak",
          "Yeni eşyaların daha hızlı üretilmesini sağlamak",
          "Evdeki bütün eşyaları bir arada saklamak",
          "Kullanılan her eşyayı hemen geri dönüşüme göndermek"
        ],
        "correct": 0,
        "explanation": "Onarmak, yeniden kullanmak ve paylaşmak, işe yarayabilecek eşyaları çöpe atmadan değerlendirmeyi sağlar. Öneriler üretim hızını veya depolamayı değil, atığı azaltmayı amaçlar.",
        "imageWidth": 360,
        "imageHeight": 655,
        "imageUrl": "/grade6/turkce/test-2/soru-06.svg",
        "imageAlt": "Üç öneri: sökülen çantayı onar, boş kavanozu kalemlik olarak yeniden kullan, kullanmadığın sağlam oyuncağı paylaş."
      },
      {
        "id": "t6-1-t2-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde bir işin gerçekleşmesi bir koşula bağlanmıştır?",
        "options": [
          "Proje tamamlandığı için sınıfta küçük bir kutlama yaptık.",
          "Projeyi tamamlamak amacıyla öğle arasında da çalıştık.",
          "Proje tamamlanınca sonuçları sınıf panosuna astık.",
          "Projeyi zamanında tamamlarsak bilim şenliğine katılabileceğiz."
        ],
        "correct": 3,
        "explanation": "-sa ekiyle kurulan tamamlarsak ifadesi, şenliğe katılmayı projeyi zamanında tamamlama koşuluna bağlar. Diğer cümlelerde neden, amaç ve zaman ilişkileri vardır."
      },
      {
        "id": "t6-1-t2-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Kent müzesinde üç salon bulunuyor. İkinci salonda eski ulaşım araçları sergileniyor. Bence bu salon, müzenin en ilgi çekici bölümü. Müze pazartesi günleri kapalı.”\nBu metindeki hangi bilgi kişisel görüş içerir?",
        "options": [
          "Müzede üç salon bulunması",
          "İkinci salonun en ilgi çekici bölüm olması",
          "Eski ulaşım araçlarının ikinci salonda sergilenmesi",
          "Müzenin pazartesi günleri kapalı olması"
        ],
        "correct": 1,
        "explanation": "En ilgi çekici değerlendirmesi kişiden kişiye değişir; bence sözcüğü de görüşün öznel olduğunu gösterir. Diğer bilgiler gözlem veya kayıtla doğrulanabilir."
      },
      {
        "id": "t6-1-t2-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde soru eki ve ardından gelen ek doğru yazılmıştır?",
        "options": [
          "Geziye sen de katılacak mısın?",
          "Geziye sen de katılacakmısın?",
          "Geziye sen de katılacak mı sın?",
          "Geziye sen de katılacakmı sın?"
        ],
        "correct": 0,
        "explanation": "Soru eki mı, önceki sözcükten ayrı yazılır; kendisinden sonra gelen kişi eki ona bitişir: katılacak mısın."
      },
      {
        "id": "t6-1-t2-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Genç, adamı dikkatle dinledi.” cümlesinde virgülün kullanılmasının temel nedeni nedir?",
        "options": [
          "Sıralanan varlıkları birbirinden ayırmak",
          "Bir açıklamadan önce duraklama sağlamak",
          "Genç sözcüğünün adamı nitelemesini önleyerek anlamı belirginleştirmek",
          "Aktarılan konuşmanın sona erdiğini göstermek"
        ],
        "correct": 2,
        "explanation": "Virgül, genç sözcüğünün dinleme işini yapan kişiyi belirttiğini açıklaştırır. Böylece sözcüğün genç adam tamlamasındaki gibi adamı nitelediği biçiminde okunmasını önler."
      }
    ],
    "test3": [
      {
        "id": "t6-1-t3-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Ada, eski masal kitabının yıpranmaması için sayfalarını özenle çevirdi.' cümlesinde 'özenle' yerine hangisi getirilebilir?",
        "options": [
          "Acele ederek",
          "Dikkat ederek",
          "Düşünmeden",
          "Gürültüyle"
        ],
        "correct": 1,
        "explanation": "Ada, kitabın zarar görmemesine dikkat etmektedir. Bu nedenle 'özenle' sözcüğü yerine 'dikkat ederek' sözü getirilebilir."
      },
      {
        "id": "t6-1-t3-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Mert, sınıfta arkadaşlarına yeni öğrendiği deyimi açıkladı.' cümlesinde aşağıdaki sorulardan hangisinin cevabı yoktur?",
        "options": [
          "Neyi açıkladı?",
          "Kim açıkladı?",
          "Nerede açıkladı?",
          "Ne zaman açıkladı?"
        ],
        "correct": 3,
        "explanation": "Cümlede kişi Mert, yer sınıf, açıklanan şey yeni öğrenilen deyimdir. Açıklamanın zamanı belirtilmemiştir."
      },
      {
        "id": "t6-1-t3-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Ninniler, annelerin ve babaların çocuklarına söylediği ezgili sözlerdir. Bu sözler, dilimizin sevgi dolu anlatımlarını kuşaktan kuşağa taşır.' metni için hangi anahtar sözcükler uygundur?",
        "options": [
          "Ulaşım - taşıt",
          "Ninni - dil - sevgi",
          "Sayı - işlem",
          "Bitki - toprak"
        ],
        "correct": 1,
        "explanation": "Metin, ninnilerin sevgi dolu sözlerini ve dilimizdeki yerini anlatır. 'Ninni, dil, sevgi' metnin konusuyla doğrudan ilgilidir."
      },
      {
        "id": "t6-1-t3-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "Hangi durum 'ağzı kulaklarına varmak' deyimiyle anlatılabilir?",
        "options": [
          "Efe'nin ödevini unuttuğu için üzülmesi",
          "Efe'nin gürültüden rahatsız olması",
          "Efe'nin aradığı kitabı hediye alınca çok sevinmesi",
          "Efe'nin uzun yürüyüşte yorulması"
        ],
        "correct": 2,
        "explanation": "'Ağzı kulaklarına varmak', çok sevinmek ve bu sevinci yüzünden belli etmek demektir. Hediye kitaba sevinen Efe bu deyime uygundur."
      },
      {
        "id": "t6-1-t3-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Okurken bilmediğim sözcükleri not ediyorum. Sonra sözlükten anlamlarını buluyor, örnek cümlelerini inceliyorum. Sözlük, okuduklarımı daha iyi anlamama yardım ediyor.' metnine en uygun başlık hangisidir?",
        "options": [
          "Okul Bahçesindeki Oyunlar",
          "Kitapların Renkli Kapakları",
          "Bir Yolculuk Anısı",
          "Sözlüğün Rehberliğinde"
        ],
        "correct": 3,
        "explanation": "Metin, sözlük kullanarak sözcüklerin anlamını öğrenmeyi anlatır. 'Sözlüğün Rehberliğinde' başlığı bu içeriği karşılar."
      },
      {
        "id": "t6-1-t3-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Elif, şiiri sözcükleri açıkça söyleyerek ve uygun yerlerde duraklayarak okudu.' cümlesindeki 'sözcükleri açıkça söyleyerek ve uygun yerlerde duraklayarak' bölümü hangi soruya cevap verir?",
        "options": [
          "Ne zaman okudu?",
          "Nerede okudu?",
          "Nasıl okudu?",
          "Kime okudu?"
        ],
        "correct": 2,
        "explanation": "Verilen bölüm, Elif'in şiiri okuma biçimini açıklar. Bir işin yapılış biçimini öğrenmek için 'Nasıl?' sorusu sorulur."
      },
      {
        "id": "t6-1-t3-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Ben de bu kitabı okumak istiyorum.' cümlesindeki 'de' ile aynı görevde kullanılan sözcük hangi seçenektedir?",
        "options": [
          "O da şiir okumayı seviyor.",
          "Okulda kitap fuarı açıldı.",
          "Çantamda bir sözlük var.",
          "Kitap masada duruyor."
        ],
        "correct": 0,
        "explanation": "'Ben de' ve 'O da' ifadelerinde ekleme anlamı veren bağlaç vardır; bu bağlaç ayrı yazılır. Diğer seçeneklerdeki '-da' yer bildiren bir ektir."
      },
      {
        "id": "t6-1-t3-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "Hangi cümlede 'ki' ayrı yazılan bir bağlaçtır?",
        "options": [
          "Bahçedeki çiçekleri suladım.",
          "Gördüm ki kitaplık yeniden düzenlenmiş.",
          "Dünkü şiiri yeniden okudum.",
          "Defterdeki notları inceledim."
        ],
        "correct": 1,
        "explanation": "'Gördüm ki' ifadesinde 'ki' bağlaçtır ve ayrı yazılır. Diğer seçeneklerde '-ki' sözcüğe eklenmiştir."
      },
      {
        "id": "t6-1-t3-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Hangi cümlede virgül, bir kişiye seslenildikten sonra kullanılmıştır?",
        "options": [
          "Bora, bu sözcüğün anlamını biliyor musun?",
          "Kapı açıldı, öğrenciler içeri girdi.",
          "Sözlük, defter ve kalem aldım.",
          "Çantasında kitaplar, dergiler vardı."
        ],
        "correct": 0,
        "explanation": "'Bora, bu sözcüğün anlamını biliyor musun?' cümlesinde doğrudan Bora'ya sesleniliyor. Virgül, hitap olarak kullanılan 'Bora' sözünden sonra gelmiştir."
      },
      {
        "id": "t6-1-t3-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "'Dedem aynı duyguyu anlatan farklı sözcükler biliyor. Onu dinledikçe ben de yeni sözcükler öğreniyorum. Öğrendiğim bu sözcükler, kendimi daha açık anlatmamı sağlıyor.' metninden hangi sonuca ulaşılır?",
        "options": [
          "İnsan ancak kendi yaşıtlarından sözcük öğrenebilir.",
          "Yeni sözcükler öğrenmek anlatmayı zorlaştırır.",
          "Kendimizi anlatmak için yalnızca bir sözcük yeterlidir.",
          "Söz varlığımızın gelişmesi anlatımımızı güçlendirir."
        ],
        "correct": 3,
        "explanation": "Metindeki kişi, yeni sözcükler öğrendikçe kendini daha açık anlattığını söylüyor. Bu, söz varlığının anlatımı güçlendirdiğini gösterir."
      }
    ]
  },
  "term2": {}
};
