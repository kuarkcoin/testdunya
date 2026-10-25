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
        "prompt": "“Ezberlediğim bilgileri kısa sürede unutuyordum. Öğrendiklerimi günlük yaşamda kullanınca bilgiler daha kalıcı oldu.” cümlelerinde “kalıcı” sözcüğü hangi anlamda kullanılmıştır?",
        "options": [
          "Uzun süre etkisini sürdüren",
          "Kolayca elde edilen",
          "Herkes tarafından bilinen",
          "Ayrıntıları azaltılmış"
        ],
        "correct": 0,
        "explanation": "Bilgilerin kısa sürede unutulmasının karşısına kalıcılık konmuştur. Burada kalıcı, zihinde uzun süre kalan anlamındadır."
      },
      {
        "id": "t6-1-t3-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Dedemin anlattığı çocukluk anıları, geçmişle bugün arasında bir köprü kuruyor.” cümlesinde “köprü kurmak” sözü neyi anlatır?",
        "options": [
          "Geçmişteki olayların sırasını değiştirmeyi",
          "Anıları yalnızca yazılı kaynaklardan öğrenmeyi",
          "Eski yaşam biçimlerini bugünkülerden üstün tutmayı",
          "Farklı zamanlar arasında bağ oluşturmayı"
        ],
        "correct": 3,
        "explanation": "Anılar, geçmişte yaşananların bugün anlaşılmasını sağlar. Köprü sözcüğü gerçek bir yapı değil, iki dönem arasındaki bağlantıyı anlatır."
      },
      {
        "id": "t6-1-t3-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir yapbozu tamamlarken ilk denememde birçok parçayı yanlış yere koydum. Yanlışları gizlemek yerine hangi renk ve biçimlerin beni yanılttığını not ettim. Yeniden denediğimde bu notlar sayesinde daha dikkatli seçim yaptım.\nBu metinde asıl vurgulanan düşünce hangisidir?",
        "options": [
          "Bir işe başlamadan önce ayrıntılı bir plan hazırlamak başarıyı kolaylaştırır.",
          "Yanlışlarımızı incelemek, sonraki denemelerimizde ilerlememize yardımcı olur.",
          "Çalışırken yaşanan güçlükleri başkalarıyla paylaşmak çözüm bulmayı hızlandırır.",
          "Bir çalışmada aynı yöntemi değiştirmeden tekrarlamak başarıya ulaştırır."
        ],
        "correct": 1,
        "explanation": "Anlatıcı, yanlışlarının nedenlerini inceleyip sonraki denemesinde bunlardan yararlanır. Önceden plan hazırlama veya başkasından yardım alma anlatılmaz; aynı yöntemi değiştirmeden sürdürme değil, hatalardan öğrenme vurgulanır."
      },
      {
        "id": "t6-1-t3-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bir öykü okurken kişilerin kararlarını anlamaya çalışırım.\nII. Onların yerinde olsam ne yapacağımı düşünürüm.\nIII. Kitabın sayfa sayısını son sayfasına bakarak öğrenirim.\nIV. Böylece kendi düşüncelerimden farklı bakış açılarını da fark ederim.\nBu paragrafta düşüncenin akışını bozan cümle hangisidir?",
        "options": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "correct": 2,
        "explanation": "I, II ve IV. cümleler öykü kişilerini anlayıp farklı bakış açılarını tanımayla ilgilidir. III. cümle ise sayfa sayısını öğrenmeyi anlatarak konudan uzaklaşır."
      },
      {
        "id": "t6-1-t3-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Grafik, bir sınıfta öğrencilerin en çok okumak istediği kitap türlerini göstermektedir. Her öğrenci yalnızca bir tür seçmiştir. Grafikten aşağıdaki sonuçlardan hangisine ulaşılamaz?",
        "options": [
          "Şiir, öyküden daha az öğrenci tarafından seçilmiştir.",
          "Gezi yazısı ile bilim kitabını seçen öğrenci sayıları eşittir.",
          "Öykü, en çok tercih edilen türdür.",
          "Öyküyü seçen öğrenciler diğer türleri okumayı sevmemektedir."
        ],
        "correct": 3,
        "explanation": "Grafik yalnızca öğrencilerin en çok okumak istediği türü gösterir. Bir türü tercih etmek, diğer türleri sevmedikleri anlamına gelmez. Öykü 8, bilim ve gezi 5’er, şiir 2 öğrenci tarafından seçilmiştir.",
        "imageWidth": 360,
        "imageHeight": 590,
        "imageUrl": "/grade6/turkce/test-3/soru-05.svg",
        "imageAlt": "Kitap tercihi grafiği: öykü 8, bilim 5, gezi 5, şiir 2 öğrenci; her öğrenci tek tür seçmiştir."
      },
      {
        "id": "t6-1-t3-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Afişteki iki davranış birlikte düşünüldüğünde verilmek istenen mesaj hangisidir?",
        "options": [
          "Ortak kullanım alanlarında başkalarının çalışma hakkını gözetmeliyiz.",
          "Kütüphanede yalnızca kendi kitaplarımızı okumalıyız.",
          "Okurken daha hızlı ilerlemek için teknolojiden yararlanmalıyız.",
          "Arkadaşlarımızla görüşmek için sadece kütüphaneyi seçmeliyiz."
        ],
        "correct": 0,
        "explanation": "Telefonu sessize almak ve konuşmak için dışarı çıkmak, içeride okuyanların dikkatinin dağılmasını önler. İki davranışın ortak amacı başkalarının çalışma ortamına saygı göstermektir.",
        "imageWidth": 360,
        "imageHeight": 640,
        "imageUrl": "/grade6/turkce/test-3/soru-06.svg",
        "imageAlt": "Birlikte okuyoruz başlıklı kütüphane afişi: sessiz telefon simgesi ve telefonu sessize al; kapıdan çıkan kişi simgesi ve konuşmak için dışarı çık önerileri."
      },
      {
        "id": "t6-1-t3-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Kıyıdaki küçük kasabaya sabah ulaştık. Limandan çarşıya uzanan dar sokaklarda yürüdük. Evlerin renkli kapıları ve pencerelerindeki çiçekler dikkatimizi çekti. Yöreye özgü yemekleri tattıktan sonra eski deniz fenerini gezdik.”\nBu metin aşağıdaki türlerden hangisine örnektir?",
        "options": [
          "Masal",
          "Haber yazısı",
          "Gezi yazısı",
          "Fabl"
        ],
        "correct": 2,
        "explanation": "Gezilip görülen bir yerin sokakları, yapıları ve yöresel özellikleri kişisel gözlemlerle anlatılır. Bu özellikler gezi yazısına uygundur."
      },
      {
        "id": "t6-1-t3-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Okuma grubumuzda herkes aynı kitabı okudu. _____ aynı olayın farklı kişilerde farklı duygular uyandırabildiğini gördük.”\nBoş bırakılan yere düşünceyi en uygun biçimde tamamlayan ifade hangisidir?",
        "options": [
          "Kitaptaki olayları oluş sırasına göre defterimize yazınca",
          "Kitap hakkındaki düşüncelerimizi birbirimizle paylaşınca",
          "Yazarın hayatıyla ilgili kaynakları okuyunca",
          "Kitabın bölüm başlıklarını sırayla inceleyince"
        ],
        "correct": 1,
        "explanation": "Olayın insanlarda uyandırdığı farklı duyguları öğrenmek için onların düşüncelerini dinlemek gerekir. Diğer etkinlikler kişisel yorumları ortaya çıkarmaz."
      },
      {
        "id": "t6-1-t3-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımı doğrudur?",
        "options": [
          "Bu yaz ankara’ya gidip Anıtkabir’i ziyaret edeceğiz.",
          "Bu yaz Ankara’ya gidip anıtkabir’i ziyaret edeceğiz.",
          "Bu Yaz Ankara’ya gidip Anıtkabir’i ziyaret edeceğiz.",
          "Bu yaz Ankara’ya gidip Anıtkabir’i ziyaret edeceğiz."
        ],
        "correct": 3,
        "explanation": "Şehir adı Ankara ve özel bir yapının adı olan Anıtkabir büyük harfle başlar. Cümle içinde mevsim adı olarak kullanılan yaz ise küçük harfle yazılır."
      },
      {
        "id": "t6-1-t3-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci metninin sonuna “Kısacası, farklı görüşleri dinlemek düşüncelerimizi geliştirebilir.” cümlesini eklemiştir.\n“Kısacası” sözü bu cümleye hangi işlevi kazandırır?",
        "options": [
          "Önceki düşünceleri özetleyerek sonuca bağlama",
          "Önceki düşüncenin tersini savunma",
          "Bir olayın gerçekleşmesini koşula bağlama",
          "Anlatılan düşünceye ayrıntılı bir örnek verme"
        ],
        "correct": 0,
        "explanation": "Kısacası sözü, önce anlatılanların özünü verip değerlendirmeyi sonuca bağlar; karşıtlık, koşul veya ayrıntılı örnek bildirmez."
      }
    ],
    "test4": [
      {
        "id": "t6-1-t4-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bir konuyu anlatırken gereksiz ayrıntılara dalmak, asıl düşüncenin gölgede kalmasına yol açabilir.” cümlesinde “gölgede kalmak” sözü hangi anlamda kullanılmıştır?",
        "options": [
          "Başka bir düşünceyle çelişmek",
          "Yeterince fark edilmemek",
          "Zamanla yanlışlığı anlaşılmak",
          "Daha sonra açıklanmak üzere ertelenmek"
        ],
        "correct": 1,
        "explanation": "Gereksiz ayrıntılar asıl düşüncenin dikkat çekmesini engeller. Gölgede kalmak, burada yeterince fark edilmemek anlamındadır; düşüncenin yanlışlığı veya ertelenmesi anlatılmaz."
      },
      {
        "id": "t6-1-t4-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir fotoğraf yarışmasına hazırlanan Arda, ilk gün gördüğü her şeyi çekti. Sonra fotoğraflarını incelerken ne anlatmak istediğini kendisinin bile anlayamadığını fark etti. Ertesi gün “Mahallemde yardımlaşma” konusunu seçti ve bu konuyu yansıtan anları fotoğrafladı.\nBu metinden çıkarılabilecek en kapsamlı yargı hangisidir?",
        "options": [
          "İyi bir fotoğraf çekmek için gelişmiş bir makine gerekir.",
          "Bir çalışmada çok sayıda ürün ortaya koymak başarıyı artırır.",
          "Yakın çevremizdeki olaylar, uzak yerlerdekilerden daha değerlidir.",
          "Bir çalışmanın amacını belirlemek, seçimlerimize yön verir."
        ],
        "correct": 3,
        "explanation": "Arda, ne anlatacağına karar verince çekeceği anları bilinçli seçer. Metnin bütünü, amaç belirlemenin çalışmaya yön vermesini destekler; araç kalitesi, ürün sayısı veya yakın-uzak karşılaştırması üzerinde durulmaz."
      },
      {
        "id": "t6-1-t4-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Deniz, okul panosu için hazırladığı yazıyı arkadaşına okuttu. Arkadaşının anlamakta zorlandığı yerleri yeniden yazdı; ancak önerilen başlığı, yazısının içeriğine uymadığı için kullanmadı.”\nDeniz’in bu davranışı aşağıdakilerden hangisini gösterir?",
        "options": [
          "Önerileri değerlendirerek uygun bulduklarından yararlandığını",
          "Yazılarını hazırlarken son kararı arkadaşına bıraktığını",
          "Eleştirileri yalnızca yazım yanlışlarıyla ilgili olduğunda kabul ettiğini",
          "Yazısının konusunu arkadaşının önerisine göre değiştirdiğini"
        ],
        "correct": 0,
        "explanation": "Deniz bazı önerilerle anlatımını düzeltir, uygun olmayan başlığı ise kullanmaz. Bu, önerileri olduğu gibi uygulamak değil, değerlendirerek yararlanmaktır."
      },
      {
        "id": "t6-1-t4-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir müzik grubunda herkes kendi sesinin daha çok duyulmasını istiyordu. Bu yüzden prova boyunca birbirlerini dinleyemediler. Sonra sırayla çalıp diğerlerini dinlemeye başladılar. _____.\nMetnin düşüncesine uygun olarak boşluğa hangi cümle getirilmelidir?",
        "options": [
          "Böylece en yüksek sesle çalan kişiyi grubun başına seçtiler",
          "Bundan sonra her üyenin tek başına çalışmasına karar verdiler",
          "Birbirlerine uyum sağladıkça ortaya daha dengeli bir müzik çıktı",
          "Çaldıkları bütün parçaların aynı uzunlukta olmasını sağladılar"
        ],
        "correct": 2,
        "explanation": "Sorun, üyelerin birbirlerini dinlememesidir. Sırayla çalıp dinlemek, karşılıklı uyum ve dengeli müzik sonucuna bağlanır. Diğer sonuçlar metindeki değişimi açıklamaz."
      },
      {
        "id": "t6-1-t4-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Ece, yalnızca cuma günü gelebilecek ve bir yetişkinle birlikte etkinliğe katılacaktır. Duyurudaki bilgilere göre hangi etkinliği seçebilir?",
        "options": [
          "Kukla yapımı",
          "Masal çemberi",
          "Ritim atölyesi",
          "Üç etkinlikten herhangi biri"
        ],
        "correct": 1,
        "explanation": "Cuma günü yapılan iki etkinlik vardır. Ritim atölyesi yalnız öğrenciler içindir; masal çemberi öğrenci ve bir yetişkinin birlikte katılımına açıktır. Kukla yapımı perşembedir.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-4/soru-05.svg",
        "imageAlt": "Etkinlik takvimi: kukla yapımı perşembe, öğrenci ve bir yetişkin; masal çemberi cuma, öğrenci ve bir yetişkin; ritim atölyesi cuma, yalnız öğrenciler."
      },
      {
        "id": "t6-1-t4-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Görseldeki üç adımı uygulayan bir öğrenciden öncelikle hangi davranış beklenir?",
        "options": [
          "İlgisini çeken her bilgiyi arkadaşlarıyla hemen paylaşması",
          "Bir bilginin doğruluğunu paylaşılma sayısına göre değerlendirmesi",
          "Yeni tarihli bir bilgiyi başka kaynaklara bakmadan doğru kabul etmesi",
          "Bir bilgiyi paylaşmadan önce güvenilirliğini farklı yönlerden sorgulaması"
        ],
        "correct": 3,
        "explanation": "Kaynak, tarih ve başka kaynaklarla karşılaştırma adımları, bilginin güvenilirliğini sorgulamaya yöneliktir. Çok paylaşılmış ya da yeni tarihli olmak, tek başına doğruluk kanıtı değildir.",
        "imageWidth": 360,
        "imageHeight": 680,
        "imageUrl": "/grade6/turkce/test-4/soru-06.svg",
        "imageAlt": "Paylaşmadan önce başlıklı görsel: kaynağı incele, tarihi kontrol et, başka kaynaklarla karşılaştır; kaynak sayfası, takvim ve iki belge simgeleri."
      },
      {
        "id": "t6-1-t4-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Fidanların büyümesini izleyebilmek için her hafta boylarını ölçtük.\nII. Fidanlar yeterince ışık alamadığı için saksıları pencere önüne taşıdık.\nBu iki cümledeki anlam ilişkileri sırasıyla hangileridir?",
        "options": [
          "Neden-sonuç / amaç-sonuç",
          "Koşul-sonuç / neden-sonuç",
          "Amaç-sonuç / neden-sonuç",
          "Amaç-sonuç / koşul-sonuç"
        ],
        "correct": 2,
        "explanation": "İlk cümlede ölçmenin amacı büyümeyi izlemektir. İkinci cümlede saksıların taşınmasının gerçekleşmiş nedeni yeterli ışık alınamamasıdır. İki cümlede de için geçse de anlam ilişkileri farklıdır."
      },
      {
        "id": "t6-1-t4-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrencinin yazdığı iki cümle şöyledir:\nI. “Keşke gezi sırasında gördüğüm bitkilerin adlarını not etseydim.”\nII. “Bir sonraki gezide küçük bir gözlem defteri tutacağım.”\nBu cümlelerde sırasıyla hangi anlamlar vardır?",
        "options": [
          "Yapılmamış bir işten duyulan üzüntü / geleceğe yönelik plan",
          "Özlem / gerçekleşmiş sonuç",
          "Beğeni / öneri",
          "Kararsızlık / karşılaştırma"
        ],
        "correct": 0,
        "explanation": "İlk cümlede geçmişte yapılmamış bir davranıştan duyulan üzüntü vardır. İkinci cümlede öğrenci gelecekte yapmayı düşündüğü işi belirtir; başkasına öneride bulunmaz."
      },
      {
        "id": "t6-1-t4-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": [
          "Bu konuyla ilgili birkaç örnek daha buldum.",
          "Kitapta her şey ayrıntılı biçimde anlatılmış.",
          "Hiçbir öğrenci çalışmasını yarım bırakmadı.",
          "Anlatılanları birşey söylemeden dinledi."
        ],
        "correct": 3,
        "explanation": "Bir şey ayrı yazılmalıdır. Birkaç ve hiçbir bitişik, her şey ise ayrı yazılır. Diğer seçeneklerde bu sözlerin yazımı doğrudur."
      },
      {
        "id": "t6-1-t4-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci, izlediği oyunu arkadaşına şöyle anlatır: “Sahnede üç oyuncu vardı. Dekorda iki kapı kullanılmıştı. Oyunun sonunda seyirciler ayağa kalktı.”\nÖğrenci anlatımına kendi değerlendirmesini de katmak isterse hangi cümleyi eklemelidir?",
        "options": [
          "Oyun saat on dörtte başladı.",
          "Oyuncuların doğal konuşmaları oyunu daha etkileyici kılmıştı.",
          "Oyun iki bölümden oluşuyordu.",
          "Sahnenin sağında küçük bir masa bulunuyordu."
        ],
        "correct": 1,
        "explanation": "Etkileyici bulma ve konuşmaları doğal olarak değerlendirme, kişinin yorumudur. Diğer seçenekler zaman, bölüm sayısı ve dekor gibi gözlenebilir bilgiler verir."
      }
    ],
    "test5": [
      {
        "id": "t6-1-t5-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Sunum için topladığımız bilgiler dağınıktı. Hepsini birbiriyle ilişkilendirince konu zihnimizde berraklaştı.” cümlelerinde “berraklaşmak” sözcüğünün anlamı aşağıdakilerden hangisidir?",
        "options": [
          "Daha ayrıntılı hâle gelmek",
          "Önemini yitirmek",
          "Açık ve anlaşılır duruma gelmek",
          "Önceki biçimine dönmek"
        ],
        "correct": 2,
        "explanation": "Bilgiler arasında ilişki kurulunca konu daha iyi anlaşılmıştır. Berraklaşmak burada suyun temizlenmesini değil, düşüncenin açıklık kazanmasını anlatır."
      },
      {
        "id": "t6-1-t5-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci, konuşmasında “Komşularımız el ele verince boş arsa kısa sürede bir oyun alanına dönüştü.” demiştir.\n“el ele vermek” sözünün anlamını koruyan ifade hangisidir?",
        "options": [
          "Birlikte çalışmak",
          "Sırayla dinlenmek",
          "Aynı yerde buluşmak",
          "Birbirini örnek almak"
        ],
        "correct": 0,
        "explanation": "El ele vermek, bir işi gerçekleştirmek için güçlerini birleştirip birlikte çalışmak anlamındadır. Yalnızca aynı yerde bulunmak veya birini örnek almak bu iş birliğini karşılamaz."
      },
      {
        "id": "t6-1-t5-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Köyümüzdeki eski değirmeni tanıtan bir yazı hazırladım. Yapının ölçülerini ve yapıldığı yılı yazmıştım. Yazıyı okuyan ninem, orada un öğüttükleri günleri anlattı. Bu anıları da ekleyince değirmen, yalnızca taş bir yapı olmaktan çıktı; insanların yaşamındaki yeri de görünür oldu.\nBu metne göre anıların yazıya katkısı nedir?",
        "options": [
          "Yapının ölçülerini daha kesin biçimde belirlemesi",
          "Yapının tarihini diğer yapılardan daha eski göstermesi",
          "Yapının nasıl onarılacağını açıklaması",
          "Yapıyı insanların yaşantılarıyla birlikte tanıtması"
        ],
        "correct": 3,
        "explanation": "Ninenin anıları değirmenin insanların yaşamındaki yerini gösterir. Ölçü, tarih karşılaştırması veya onarım bilgisi eklenmemiştir."
      },
      {
        "id": "t6-1-t5-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bir öyküyü yalnızca sonunu öğrenmek için okumam. Kişilerin küçük davranışlarına, seçtikleri sözcüklere de dikkat ederim. Çünkü bazen söylenmeyen bir duygu, kısa bir hareketle anlatılır.”\nBu sözleri söyleyen kişiyle ilgili hangisi söylenebilir?",
        "options": [
          "Öykülerde olayların hızlı ilerlemesini önemsediği",
          "Metindeki ayrıntılardan anlam çıkarmaya çalıştığı",
          "Öyküleri bitirmeden önce son sayfalarını okuduğu",
          "Kişilerin duygularını yalnızca konuşmalarından öğrendiği"
        ],
        "correct": 1,
        "explanation": "Küçük davranış ve sözcüklere dikkat etmek, açıkça söylenmeyen duyguları ayrıntılardan çıkarmaya yöneliktir. Son sayfayı önce okuma veya yalnızca konuşmaya bakma belirtilmez."
      },
      {
        "id": "t6-1-t5-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Gezi çantasını görseldeki listeye göre hazırlayan öğrencilerden hangisi zorunlu eşyaların tamamını almış, isteğe bağlı eşyayı almamıştır?",
        "options": [
          "Defter, kalem ve fotoğraf makinesi alan Elif",
          "Su, kalem ve fotoğraf makinesi alan Ege",
          "Su, defter ve kalem alan Ada",
          "Yalnız su ve defter alan Mert"
        ],
        "correct": 2,
        "explanation": "Su, defter ve kalem zorunludur. Fotoğraf makinesi isteğe bağlıdır. Ada zorunlu üç eşyayı almış, isteğe bağlı eşyayı almamıştır.",
        "imageWidth": 360,
        "imageHeight": 620,
        "imageUrl": "/grade6/turkce/test-5/soru-05.svg",
        "imageAlt": "Gezi çantası listesi: su, defter ve kalem zorunlu; fotoğraf makinesi isteğe bağlı."
      },
      {
        "id": "t6-1-t5-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Duyurudaki kurallara uygun davranan bir öğrenci hangisini yapar?",
        "options": [
          "Bulduğu eşyayı görevliye teslim edip sahibini kendisi belirler.",
          "Eşyanın yerini arkadaşlarına duyurup onu bulduğu yerde bırakır.",
          "Kaybettiği eşya için görevliye başvurur ancak eşyanın özelliklerini anlatmaz.",
          "Bulduğu eşyayı görevliye verir; kendi eşyası kaybolduğunda özelliklerini görevliye anlatır."
        ],
        "correct": 3,
        "explanation": "Duyuruda bulunan eşyanın görevliye verilmesi, kayıp eşya için görevliye başvurulması ve özelliklerinin anlatılması istenir. Eşleşmeyi kontrol ederek teslim eden görevli olduğundan öğrencinin sahibini kendisinin belirlemesi uygun değildir.",
        "imageWidth": 360,
        "imageHeight": 700,
        "imageUrl": "/grade6/turkce/test-5/soru-06.svg",
        "imageAlt": "Kayıp eşya duyurusu: bulan kişi görevliye verir; eşyasını arayan görevliye başvurup özelliklerini anlatır; görevli eşleşmeyi kontrol edip teslim eder."
      },
      {
        "id": "t6-1-t5-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bu yüzden açıklamalarımıza herkesin anlayabileceği örnekler ekledik.\nII. Bilim kulübündeki çalışmamızı küçük sınıflara anlatacaktık.\nIII. Sunumdan sonra sordukları sorular, örneklerin konuyu anlamalarını kolaylaştırdığını gösterdi.\nIV. Ancak hazırladığımız ilk metindeki bazı sözcüklerin onlar için yabancı olduğunu fark ettik.\nAnlamlı bir paragraf oluşturmak için cümleler nasıl sıralanmalıdır?",
        "options": [
          "II – IV – I – III",
          "IV – II – III – I",
          "II – I – IV – III",
          "I – III – II – IV"
        ],
        "correct": 0,
        "explanation": "Önce sunumun amacı belirtilir (II), ilk metindeki sorun fark edilir (IV), bu soruna çözüm bulunur (I), uygulamanın sonucu verilir (III)."
      },
      {
        "id": "t6-1-t5-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bu yöntem ötekinden daha az zaman alıyor; ne var ki daha fazla malzeme gerektiriyor.” cümlesindeki “ne var ki” ifadesinin işlevi nedir?",
        "options": [
          "İlk yargının nedenini açıklamak",
          "Bir düşünceyi örneklerle desteklemek",
          "Olumlu yönün ardından sınırlayıcı bir yönü belirtmek",
          "İki yargının aynı anlama geldiğini göstermek"
        ],
        "correct": 2,
        "explanation": "İlk yargı yöntemin zaman kazandırdığını, ikinci yargı daha çok malzeme gerektirdiğini belirtir. Ne var ki, olumlu yönün karşısına bir sınırlılık getirir; neden veya örnek bildirmez."
      },
      {
        "id": "t6-1-t5-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde kesme işareti doğru kullanılmıştır?",
        "options": [
          "Türkçe’nin ses özelliklerini araştırdık.",
          "Ankara’lı arkadaşım bize katıldı.",
          "Okul’umuzda yeni bir sergi açıldı.",
          "Edirne’ye ilk kez geçen yıl gittim."
        ],
        "correct": 3,
        "explanation": "Özel ada gelen yönelme eki kesmeyle ayrılır: Edirne’ye. Özel adlara gelen yapım ekleri ve bunlardan sonra gelen ekler kesmeyle ayrılmaz: Ankaralı, Türkçenin. Okul sözcüğü de burada özel ad değildir."
      },
      {
        "id": "t6-1-t5-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci iki bilgi vermiştir:\n• Kütüphane, sınav haftasında normal kapanış saatinden iki saat sonra kapanacaktır.\n• Bu değişiklik yalnızca sınav haftası için geçerlidir.\nBu iki bilgiyi anlamını değiştirmeden birleştiren cümle hangisidir?",
        "options": [
          "Kütüphane sınav haftasından sonra da iki saat daha geç kapanacaktır.",
          "Kütüphane, yalnızca sınav haftasında normalden iki saat daha geç kapanacaktır.",
          "Kütüphane sınav haftasında her gün yalnızca iki saat açık kalacaktır.",
          "Kütüphane, sınav haftasında normal saatinden iki saat önce kapanacaktır."
        ],
        "correct": 1,
        "explanation": "B seçeneği hem kapanışın iki saat geciktiğini hem de uygulamanın yalnızca sınav haftasıyla sınırlı olduğunu korur. Diğer seçenekler süreyi, zamanı veya değişikliğin yönünü değiştirir."
      }
    ]
  },
  "term2": {}
};
