import { SubjectData } from "./types";

// Özgün alıştırmalar; dönemler ayrı tutulur. 2. dönem kaynak ve kapsam notu docs/grade6-term2.md içindedir.
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
    ],
    "test6": [
      {
        "id": "t6-1-t6-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Araştırmamız ilerledikçe başlangıçtaki düşüncemizi yeni bilgiler ışığında yeniden değerlendirdik.” cümlesindeki “ışığında” sözü yerine hangisi getirilebilir?",
        "options": [
          "yardımı olmadan",
          "doğruluğunu tartışmadan",
          "yol göstericiliğinde",
          "sırasını değiştirmeden"
        ],
        "correct": 2,
        "explanation": "Yeni bilgiler, düşünceyi yeniden değerlendirmeye rehberlik eder. Işığında sözü burada yol göstericiliğinde anlamındadır; bilgilerin sorgulanmadan kabul edilmesi anlatılmaz."
      },
      {
        "id": "t6-1-t6-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "İlk metin: “Bir şehrin sokaklarını yürüyerek gezerim. Ayrıntıları fark etmek için acele etmem.”\nİkinci metin: “Bir şehre gitmeden önce haritasını inceler, görmek istediğim yerleri belirlerim. Böylece zamanımı planlarım.”\nBu iki metindeki kişilerin gezme anlayışlarıyla ilgili hangisi doğrudur?",
        "options": [
          "İlki ayrıntıları yerinde incelemeye, ikincisi gezi öncesinde hazırlık yapmaya önem vermektedir.",
          "İlki gezilecek yerleri önceden seçmeye, ikincisi yol boyunca kararlarını değiştirmeye önem vermektedir.",
          "İlki yalnızca belirlediği yerleri görmeye, ikincisi bütün şehri yürüyerek tanımaya önem vermektedir.",
          "İlki zamanını önceden planlamaya, ikincisi harita kullanmadan gözlem yapmaya önem vermektedir."
        ],
        "correct": 0,
        "explanation": "İlk kişi yürürken ayrıntıları fark etmek için yavaş davranır. İkinci kişi gezi öncesinde haritaya bakıp yerleri seçer. A seçeneği bu iki farklı vurguyu doğru eşleştirir; diğer seçenekler özellikleri karıştırır veya metinde verilmeyen sınırlamalar ekler."
      },
      {
        "id": "t6-1-t6-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okul radyosunda bir duyuru okuduk. Dinleyenler etkinliğin nerede yapılacağını anlayamadıklarını söylediler. Metni yeniden inceleyince yer bilgisini yazmadığımızı fark ettik. Yeni duyuruda bu bilgiyi ekledik.\nBu olaydan çıkarılabilecek en uygun sonuç hangisidir?",
        "options": [
          "Bir duyuruda yer bilgisi, diğer ayrıntılardan daha önemlidir.",
          "Dinleyicilerin geri bildirimi, bir metindeki eksikleri görmeye yardımcı olabilir.",
          "Bir duyurunun anlaşılabilmesi için dinleyicilere yazılı olarak da verilmesi gerekir.",
          "Duyurudaki eksik bilgileri tamamlamak için metni daha sık okumak yeterlidir."
        ],
        "correct": 1,
        "explanation": "Dinleyicilerin belirttiği sorun, eksik yer bilgisinin fark edilmesini sağlamıştır. Bu durum geri bildirimin katkısını gösterir. Yer bilgisinin diğer bilgilerden daha önemli olduğu, yazılı duyurunun zorunluluğu veya yalnızca tekrarın eksikleri gidereceği sonucuna ulaşılamaz."
      },
      {
        "id": "t6-1-t6-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Geçen yılki resimlerime baktığımda çizgilerimin ne kadar değiştiğini görüyorum. O gün kusursuz sandığım çalışmalarımda şimdi eksikler bulabiliyorum. Bu durum beni üzmüyor; çünkü _____.”\nBoşluğa hangi ifade getirilirse düşünce uygun biçimde tamamlanır?",
        "options": [
          "eski çalışmalarımı kimseyle paylaşmayı düşünmüyorum",
          "bir resmi beğenmek için başkalarının görüşünü bekliyorum",
          "aynı resmi hiç değiştirmeden yeniden çizmek istiyorum",
          "geliştikçe çalışmalarımı daha bilinçli değerlendirebildiğimi anlıyorum"
        ],
        "correct": 3,
        "explanation": "Anlatıcı, eski resimlerde eksik görmesini ilerlemenin bir işareti olarak değerlendirmektedir. D seçeneği bu olumlu bakışı neden-sonuç ilişkisiyle tamamlar."
      },
      {
        "id": "t6-1-t6-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "İki duyuru karşılaştırıldığında aşağıdaki yargılardan hangisi doğrudur?",
        "options": [
          "Her iki etkinlikte de alınan kitabın bir hafta sonra geri verilmesi gerekir.",
          "Kitap bağışlayan kişinin aynı kitabı geri alması beklenir.",
          "İlk duyuruda geçici kullanım, ikincisinde kalıcı paylaşım söz konusudur.",
          "Her iki etkinlikte de bir kitap alabilmek için kitap getirmek gerekir."
        ],
        "correct": 2,
        "explanation": "Ödünç alınan kitabın yedi gün içinde geri verilmesi gerekir; bağışlanan kitap ise okul kitaplığına eklenir. Bağış, geçici ödünç verme değildir. Ödünç alma duyurusunda kitap getirme şartı belirtilmemiştir; bağış duyurusu ise kitap almayı anlatmaz.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-6/soru-05.svg",
        "imageAlt": "İki duyuru: Kitap ödünç al, yedi gün içinde geri getir. Kitap bağışla, getirdiğin kitap okul kitaplığına eklensin."
      },
      {
        "id": "t6-1-t6-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Görseldeki olayların akışını en iyi anlatan slogan hangisidir?",
        "options": [
          "Temiz tuttuğumuz ortak alanlardan birlikte yararlanırız.",
          "Parkları güzelleştirmenin yolu, eski bankları yenilemektir.",
          "Birlikte vakit geçirmek, çevremizdeki sorunları unutturur.",
          "Temizlikten sonra dinlenmek, çalışmanın tek amacıdır."
        ],
        "correct": 0,
        "explanation": "Önce yerde çöpler vardır; çocuk bunları kutuya atar ve son karede iki kişi temiz bankta oturur. Görsel, ortak alanın temizlenmesinin birlikte kullanıma katkısını anlatır.",
        "imageWidth": 360,
        "imageHeight": 720,
        "imageUrl": "/grade6/turkce/test-6/soru-06.svg",
        "imageAlt": "Üç kare: bankın yanında yerde kâğıt ve şişe; çocuk kâğıdı çöp kutusuna atıyor; temiz bankta iki çocuk birlikte oturuyor."
      },
      {
        "id": "t6-1-t6-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Yazar, uzun açıklamalar yerine kısa konuşmalar kullanmış. Böylece kişilerin duygularını doğrudan kendi sözlerinden öğreniyoruz.”\nBu değerlendirmede yazarın hangi özelliği üzerinde durulmaktadır?",
        "options": [
          "Kitabını yazmaya ne zaman başladığı",
          "Olayların geçtiği yeri neden seçtiği",
          "Kitabında hangi yaş grubuna seslendiği",
          "Anlatımını nasıl kurduğu"
        ],
        "correct": 3,
        "explanation": "Kısa konuşmalarla kişilerin duygularını yansıtmak, anlatımın kuruluşuyla ilgilidir. Yazma zamanı, yer seçiminin nedeni veya hedef yaş grubu verilmemiştir."
      },
      {
        "id": "t6-1-t6-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Proje için hazırladığımız model ilk denemede çalışmadı. Bununla birlikte hangi parçanın sorun çıkardığını görmüş olduk.”\n“Bununla birlikte” ifadesi bu cümleler arasında nasıl bir ilişki kurar?",
        "options": [
          "İlk olayın kesin nedenini açıklar.",
          "Olumsuz görünen sonucun yanında bir kazanım bulunduğunu belirtir.",
          "İlk düşünceyi farklı sözcüklerle aynen tekrarlar.",
          "İkinci olayın gerçekleşmesini bir koşula bağlar."
        ],
        "correct": 1,
        "explanation": "Modelin çalışmaması olumsuz sonuçtur; sorunlu parçanın bulunması ise kazanımdır. İfade, olumsuzluğun yanında olumlu bir yön de bulunduğunu gösterir."
      },
      {
        "id": "t6-1-t6-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde sayıların yazımı doğrudur?",
        "options": [
          "Etkinlikte oniki öğrenci görev aldı.",
          "Gruplara 3’er kitap dağıtıldı.",
          "Yarışmada 2.’inci oldum.",
          "Sergiyi iki yüz kişi ziyaret etti."
        ],
        "correct": 3,
        "explanation": "Birden fazla sözcükten oluşan sayılar ayrı yazılır: iki yüz, on iki. Üleştirme sayıları yazıyla üçer biçiminde yazılır. Sıra sayısında 2. veya 2’nci kullanılabilir; nokta ile sıra eki birlikte kullanılmaz."
      },
      {
        "id": "t6-1-t6-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bugün öğrendiğim bir bilgiyi hemen doğru kabul etmek yerine nereden geldiğini araştırıyorum. Kaynağını bulamadığım bilgileri ise paylaşmıyorum.”\nBu sözleri söyleyen kişi için hangisi söylenemez?",
        "options": [
          "Bir bilgiyi paylaşmadan önce kaynağıyla ilgili araştırma yaptığı",
          "Kaynağını belirleyemediği bilgileri paylaşmadığı",
          "Kaynağı belirli olan her bilgiyi başka inceleme yapmadan doğru kabul ettiği",
          "Bir bilgiyi ilk öğrendiğinde onun doğruluğundan hemen emin olmadığı"
        ],
        "correct": 2,
        "explanation": "Kaynağı belirsiz bilgileri paylaşmamak, kaynağı belirli bütün bilgileri sorgulamadan doğru kabul etmek demek değildir. Metin bu sonucu desteklemez. Diğer seçenekler metindeki araştırma ve paylaşım tutumunu yansıtır."
      }
    ],
    "test7": [
      {
        "id": "t6-1-t7-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bir düşünceyi özümsemek, onu olduğu gibi tekrarlamak değil, anlamını kavrayıp kendi sözlerimizle açıklayabilmektir.” cümlesine göre “özümsemek” ne demektir?",
        "options": [
          "Bir düşüncenin bütün sözcüklerini ezberlemek",
          "Bir düşünceyi anlayarak benimsemek",
          "Bir düşünceyi başkalarından önce dile getirmek",
          "Bir düşüncenin yalnızca sonucunu öğrenmek"
        ],
        "correct": 1,
        "explanation": "Cümle, özümsemeyi anlamı kavramak ve kendi sözleriyle açıklayabilmek üzerinden tanımlar. Ezberlemek, önce söylemek veya yalnızca sonucu bilmek bu anlamı karşılamaz."
      },
      {
        "id": "t6-1-t7-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Mahallemizdeki fırın bu yıl da çocuklar için ekmek yapımı atölyesi düzenledi.” cümlesinden kesin olarak hangisi çıkarılabilir?",
        "options": [
          "Atölyenin her ay düzenlendiği",
          "Atölyeye katılan çocukların ekmek yapmayı önceden bildiği",
          "Bu yılki atölyenin önceki atölyelerden daha kalabalık olduğu",
          "Fırının daha önce de çocuklar için ekmek yapımı atölyesi düzenlediği"
        ],
        "correct": 3,
        "explanation": "Bu yıl da ifadesindeki da, etkinliğin daha önce yapıldığını gösterir. Düzenlenme sıklığı, katılımcıların bilgisi ve sayısı verilmemiştir."
      },
      {
        "id": "t6-1-t7-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Otobüs durağındaki küçük rafın üzerinde “Yağmurda al, işin bitince geri bırak.” yazıyordu. İlk gün rafta iki şemsiye vardı. Bir hafta sonra sayıları beşe çıktı. Mahalledekiler kullanmadıkları şemsiyeleri de rafa bırakmıştı.\nBu metne en uygun başlık hangisidir?",
        "options": [
          "Paylaşımla Büyüyen Bir Çözüm",
          "Yağmurlu Günlerde Düzenli Ulaşım",
          "Şemsiyelerin Doğru Kullanımı",
          "Eşyaları Saklamanın Önemi"
        ],
        "correct": 0,
        "explanation": "Raf, yağmurda şemsiyeye ihtiyaç duyanlara çözüm sunar; başkalarının katkısıyla büyür. Ulaşımın düzenlenmesi, şemsiye kullanım tekniği veya eşya saklama metnin odağı değildir."
      },
      {
        "id": "t6-1-t7-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Müzede önce bütün eserlerin fotoğrafını çekmeye çalıştım. Bir süre sonra, ekrana bakarken eserleri yeterince incelemediğimi fark ettim. Telefonumu çantama koyup ilgimi çeken bir eserin önünde uzun süre durdum.”\nAnlatıcının davranışındaki değişimi en iyi açıklayan yargı hangisidir?",
        "options": [
          "Gezisini daha kısa sürede bitirmeye karar vermiştir.",
          "Fotoğrafını çekmediği eserleri önemsiz bulmuştur.",
          "Görüntü biriktirmek yerine doğrudan gözleme yönelmiştir.",
          "Müzedeki eserler hakkında başkalarının yorumunu beklemiştir."
        ],
        "correct": 2,
        "explanation": "Başlangıçta fotoğraf çekmeye odaklanan anlatıcı, daha sonra eseri doğrudan incelemeyi seçer. Süreyi kısaltma, eserleri önemsiz bulma veya yorum bekleme anlatılmamıştır."
      },
      {
        "id": "t6-1-t7-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Girişten başlayan bir ziyaretçi önce danışmaya, sonra resim sergisine gidecektir. Görseldeki yönlendirmeye uygun olarak hangi yolu izlemelidir?",
        "options": [
          "Önce sağa, sonra sola",
          "Önce sola, sonra sağa",
          "Önce sola, sonra sola",
          "Önce sağa, sonra sağa"
        ],
        "correct": 1,
        "explanation": "Girişteki levha danışma için solu gösterir. Danışma önündeki levha ise resim sergisi için sağı gösterir. İki levha sırayla okunmalıdır.",
        "imageWidth": 360,
        "imageHeight": 660,
        "imageUrl": "/grade6/turkce/test-7/soru-05.svg",
        "imageAlt": "Birinci levha girişte: danışma sola, kafeterya sağa. İkinci levha danışma önünde: resim sergisi sağa, konferans salonu sola."
      },
      {
        "id": "t6-1-t7-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Afişteki bilgi ve öneri birlikte değerlendirildiğinde aşağıdaki davranışlardan hangisi amaca en uygundur?",
        "options": [
          "Bahçenin bütün bölümlerini aynı etkinlik için kullanmak",
          "Hareketli oyunları okuma alanına taşıyarak iki etkinliği birleştirmek",
          "Okuma ve oyun alanlarının yerini her teneffüste değiştirmek",
          "Bahçeyi kullanırken farklı etkinlikler için ayrılan alanlara dikkat etmek"
        ],
        "correct": 3,
        "explanation": "Afiş, sessizce kitap okuyanlar ile hareketli oyun oynayanlar için farklı alanlar gösterir. Ortak bahçede farklı ihtiyaçların gözetilmesini önerir.",
        "imageWidth": 360,
        "imageHeight": 660,
        "imageUrl": "/grade6/turkce/test-7/soru-06.svg",
        "imageAlt": "Okul bahçesi afişinde gölgeli bölüm kitap ve bank simgesiyle okuma alanı, açık bölüm top simgesiyle oyun alanı olarak ayrılmıştır. Altında herkesin ihtiyacına yer var yazısı bulunur."
      },
      {
        "id": "t6-1-t7-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Okul gazetesinin ilk sayısı için bir röportaj hazırladık. Sorularımızı önce kendi aramızda denedik. Bir soruya verilen yanıtların çok kısa kaldığını görünce o soruyu yeniden düzenledik.”\nBu metinde aşağıdaki sorulardan hangisinin cevabı yoktur?",
        "options": [
          "Röportajı kiminle yapacaklar?",
          "Soruları nerede kullanacaklar?",
          "Bir soruyu neden değiştirdiler?",
          "Soruları değiştirmeden önce ne yaptılar?"
        ],
        "correct": 0,
        "explanation": "Röportaj yapılacak kişi belirtilmemiştir. Soruların okul gazetesi için hazırlandığı, grup içinde denendiği ve kısa yanıt alınan sorunun değiştirildiği anlatılmıştır."
      },
      {
        "id": "t6-1-t7-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Yaşlı çınar, rüzgârla sallanan dallarıyla sabah yürüyüşüne çıkanlara selam veriyordu.” cümlesindeki anlatımı farklı kılan özellik hangisidir?",
        "options": [
          "Ağacın başka bir ağaca benzetilmesi",
          "Bir olayın olduğundan büyük gösterilmesi",
          "Ağaca insana özgü bir davranış yüklenmesi",
          "Ağacın özelliklerinin bilimsel bilgilerle açıklanması"
        ],
        "correct": 2,
        "explanation": "Selam vermek insana özgü bir davranıştır. Bu davranışın çınara yüklenmesi kişileştirmedir. Cümlede başka bir ağaca benzetme veya bilimsel açıklama yapılmaz."
      },
      {
        "id": "t6-1-t7-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": [
          "Yarınki toplantıda bu konuyu görüşeceğiz.",
          "Duydum ki okulumuza bir yazar gelecek.",
          "Oysa biz de hazırlıklara katılmak istiyorduk.",
          "Birkaç sorum var, bunlarıda yazara sormalıyım."
        ],
        "correct": 3,
        "explanation": "Bunları da sözündeki da bağlaçtır ve ayrı yazılır. Yarınki sözcüğündeki ek bitişik, duydum ki ifadesindeki bağlaç ayrı yazılır; oysa bitişiktir."
      },
      {
        "id": "t6-1-t7-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Yeni bir oyunun kurallarını okuduktan sonra hemen oynamaya başladık. Bir anlaşmazlık çıkınca kurallara yeniden baktık ve gözden kaçırdığımız bir ayrıntıyı bulduk.”\nBu metnin sonuna hangi cümle getirilirse olaydan çıkarılan ders belirtilmiş olur?",
        "options": [
          "Kuralları uygularken önceden bildiğimiz oyunları örnek almak yeterlidir.",
          "Bir yönergeyi okumak kadar ayrıntılarını doğru uygulamak da önemlidir.",
          "Bir anlaşmazlığı çözmek için oyunu daha hızlı sürdürmek gerekir.",
          "Oyunun kurallarını oyuncuların isteğine göre değiştirmek anlaşmazlıkları önler."
        ],
        "correct": 1,
        "explanation": "B seçeneği, kurallardaki ayrıntının gözden kaçırılmasına dayanan olaydan uygun bir ders çıkarır. Önceki oyunları örnek alma, hızlanma veya kuralları değiştirme metinde çözüm olarak gösterilmez."
      }
    ],
    "test8": [
      {
        "id": "t6-1-t8-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Arkadaşımızın sorduğu farklı bir soru, uzun süredir çözemediğimiz sorunun çözümüne kapı araladı.” cümlesinde “kapı aralamak” sözü neyi anlatır?",
        "options": [
          "Sorunun önemini azaltmayı",
          "Yeni bir çözüm olanağı oluşturmayı",
          "Sonucu kesin olarak belirlemeyi",
          "Çalışmayı bir süre ertelemeyi"
        ],
        "correct": 1,
        "explanation": "Farklı soru, çözüme ulaşmak için yeni bir olanak sağlamıştır. Kapı aralamak, çözümün kesinleştiğini değil, bir başlangıç veya fırsat oluştuğunu belirtir."
      },
      {
        "id": "t6-1-t8-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bu kitap, bir kahramanın başından geçenleri anlatmakla kalmıyor; okuru kendi seçimleri üzerine de düşündürüyor.” cümlesine anlamca en yakın yargı hangisidir?",
        "options": [
          "Kitapta anlatılan seçimler bütün okurlar için aynı sonucu doğurur.",
          "Kitabın kahramanı, karşılaştığı her güçlüğü kendi başına çözer.",
          "Kitap yalnızca okurun yaşamındaki olayları açıklamak için yazılmıştır.",
          "Kitap hem bir kahramanın yaşadıklarını anlatır hem de okurun kendi seçimleri üzerine düşünmesini sağlar."
        ],
        "correct": 3,
        "explanation": "Anlatmakla kalmıyor ifadesi, olayları aktarmanın yanında okuru düşündürme işlevi bulunduğunu gösterir. D seçeneği iki yönü de korur."
      },
      {
        "id": "t6-1-t8-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Sınıfımız için bir sözlük köşesi hazırladık. Başlangıçta sözcükleri yalnızca anlamlarıyla yazıyorduk. Sonra aynı sözcüğün farklı cümlelerde farklı anlamlar kazanabildiğini gördük. Bunun üzerine her sözcüğün yanına kullanıldığı cümleyi de ekledik.\nBu değişikliğin temel nedeni hangisidir?",
        "options": [
          "Sözcüklerin anlamını kullanıldıkları bağlamla birlikte göstermek",
          "Sözlükte mümkün olduğunca çok sözcüğe yer vermek",
          "Sözcüklerin yazımını daha kısa sürede ezberlemek",
          "Sözcükleri alfabetik sıraya koymayı kolaylaştırmak"
        ],
        "correct": 0,
        "explanation": "Cümle örnekleri, sözcüğün hangi anlamda kullanıldığını gösterir. Değişiklik sözcük sayısı, ezber hızı veya alfabetik sıralama için yapılmamıştır."
      },
      {
        "id": "t6-1-t8-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir marangoz, yaptığı sandalyeleri gösterirken “Güzel görünmeleri yetmez; insanların üzerinde rahatça oturabilmesi de gerekir.” dedi.\nBu sözle vurgulanan düşünce hangisidir?",
        "options": [
          "Bir ürünün görünüşü, kullanımından bağımsız değerlendirilmelidir.",
          "Bir ürünün değeri, yapımında harcanan süreyle belirlenmelidir.",
          "Bir ürün hazırlanırken görünüşü ve kullanım amacı birlikte düşünülmelidir.",
          "Bir ürünü kullanışlı yapmak için süslemeden bütünüyle vazgeçilmelidir."
        ],
        "correct": 2,
        "explanation": "Marangoz, görünüşün tek başına yeterli olmadığını; rahat kullanımın da gerekli olduğunu söyler. Görünüşü reddetmez, iki özelliğin birlikte gözetilmesini ister."
      },
      {
        "id": "t6-1-t8-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okul dergisinin çalışma planına göre aşağıdaki yargılardan hangisi doğrudur?",
        "options": [
          "Çizimler tamamlanmadan önce sayfalar düzenlenecektir.",
          "Yazılar ile çizimler aynı kişi tarafından hazırlanacaktır.",
          "Derginin basımından sonra yazılar toplanacaktır.",
          "Sayfalar, yazılar ve çizimler hazır olduktan sonra düzenlenecektir."
        ],
        "correct": 3,
        "explanation": "Yazılar pazartesi toplanır, çizimler salı hazırlanır; sayfa düzeni çarşamba yapılır. Basım perşembedir. Bu nedenle sayfa düzeni iki içerik hazırlandıktan sonra gelir.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-8/soru-05.svg",
        "imageAlt": "Okul dergisi planı: pazartesi Ece yazıları toplar; salı Can çizimleri hazırlar; çarşamba ikisi sayfaları düzenler; perşembe dergi basılır."
      },
      {
        "id": "t6-1-t8-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Görseldeki iki hizmet birlikte düşünüldüğünde kütüphanenin hangi amacı öne çıkmaktadır?",
        "options": [
          "Farklı ihtiyaçları olan kişilerin kitaplara erişimini kolaylaştırmak",
          "Okurların hangi kitap türlerini tercih ettiğini belirlemek",
          "Kitapların daha kısa sürede okunmasını sağlamak",
          "Okurların kitaplar hakkındaki görüşlerini bir araya getirmek"
        ],
        "correct": 0,
        "explanation": "Sesli kitap hizmeti ve eve kitap ulaştırma, farklı erişim ihtiyaçlarına cevap verir. Afiş tercihleri araştırmayı, okuma hızını artırmayı veya okur görüşlerini toplamayı amaçlayan bir hizmet sunmaz.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-8/soru-06.svg",
        "imageAlt": "Herkes için kütüphane afişi: dinlemek isteyenler için sesli kitaplar, kütüphaneye gelemeyenler için eve kitap hizmeti. Kulaklık ve ev-kitap simgeleri vardır."
      },
      {
        "id": "t6-1-t8-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bu nedenle anketimize yalnızca “Hangi sporları yapıyorsunuz?” sorusunu koyduk.\nII. Sonuçta öğrencilerin yaptığı sporları öğrendik, fakat neden bu sporları seçtiklerini öğrenemedik.\nIII. Okulumuzdaki öğrencilerin spor alışkanlıklarını merak ediyorduk.\nIV. İkinci ankete tercih nedenlerini soran bir soru da ekledik.\nBu cümlelerle anlamlı bir paragraf oluşturmak için sıralama nasıl olmalıdır?",
        "options": [
          "III – II – I – IV",
          "I – III – IV – II",
          "III – I – II – IV",
          "II – IV – III – I"
        ],
        "correct": 2,
        "explanation": "Önce merak edilen konu belirtilir (III), ilk anket sorusu verilir (I), sorunun bilgi bakımından eksikliği fark edilir (II), ikinci ankette bu eksik giderilir (IV)."
      },
      {
        "id": "t6-1-t8-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Küçük tekne, durgun suyun üzerinde bir yaprak gibi süzülüyordu.” cümlesindeki benzetmede tekne hangi yönden yaprağa benzetilmiştir?",
        "options": [
          "Rengi bakımından",
          "Suyun üzerindeki hafif hareketi bakımından",
          "İçindeki yolcu sayısı bakımından",
          "Yapıldığı malzeme bakımından"
        ],
        "correct": 1,
        "explanation": "Süzülmek, hafif ve akıcı bir hareketi anlatır. Benzetme teknenin rengi veya malzemesiyle değil, su üzerindeki hareketiyle ilgilidir."
      },
      {
        "id": "t6-1-t8-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde tarihlerin yazımı doğrudur?",
        "options": [
          "Sergimiz 12 kasım 2026 tarihinde açılacak.",
          "Sergimiz 12 Kasım 2026 Tarihinde açılacak.",
          "Sergimiz kasım Ayında açılacak.",
          "Sergimiz 12 Kasım 2026 tarihinde açılacak."
        ],
        "correct": 3,
        "explanation": "Belirli bir tarih bildiren ay adı büyük harfle başlar: 12 Kasım 2026. Tarihinde sözcüğü cümle içinde küçük yazılır. Belirli gün belirtmeyen kasım ayında ifadesinde ise ay adı ve ayında sözcüğü küçük yazılır."
      },
      {
        "id": "t6-1-t8-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bir metni ilk okuyuşumda olaylara odaklanırım. İkinci okuyuşumda ise anlatıcının seçtiği sözcüklere dikkat ederim. Böylece aynı metinde daha önce fark etmediğim ayrıntılar bulurum.”\nBu metinden hangi sonuca ulaşılabilir?",
        "options": [
          "Bir metni yeniden okumaya ancak olayların sırası ilk okumada anlaşılmadığında gerek vardır.",
          "Farklı bir amaçla yeniden okumak, metni daha derin anlamaya yardımcı olabilir.",
          "Sözcük seçimine dikkat etmek, metindeki olayları incelemekten daha önemli bir okuma amacıdır.",
          "İkinci okumada fark edilen ayrıntılar, ilk okumada çıkarılan sonuçların yanlış olduğunu gösterir."
        ],
        "correct": 1,
        "explanation": "Anlatıcı her okumada farklı bir özelliğe odaklanarak yeni ayrıntılar keşfeder. İlk okumanın yanlış veya yetersiz olduğu söylenmez; okuma amaçlarından biri diğerinden üstün tutulmaz. Bu yüzden yalnızca B seçeneğindeki genel sonuca ulaşılabilir."
      }
    ],
    "test9": [
      {
        "id": "t6-1-t9-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Atölyede öğrendiğimiz tekniği farklı malzemelerle denemek, tasarımlarımıza yeni bir boyut kazandırdı.” cümlesinde “yeni bir boyut kazandırmak” ne demektir?",
        "options": [
          "Tasarımların ölçülerini büyütmek",
          "Tasarımları daha kısa sürede tamamlamak",
          "Tasarımlara farklı bir yön katmak",
          "Tasarımların yapımını zorlaştırmak"
        ],
        "correct": 2,
        "explanation": "Farklı malzemelerle denemek, tasarımlara yeni bir özellik ve bakış açısı katar. Burada boyut sözcüğü fiziksel büyüklük anlamında kullanılmamıştır."
      },
      {
        "id": "t6-1-t9-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "İpek: “Bir kitabı seçerken arkadaşlarımın önerilerine bakarım; sonra birkaç sayfasını okuyup karar veririm.”\nEren: “Ben de önerileri dinlerim ama kitabın bana uygun olup olmadığını anlamak için önce içinden bir bölüm okurum.”\nBu iki kişinin ortak tutumu hangisidir?",
        "options": [
          "Önerileri kendi incelemeleriyle birlikte değerlendirmek",
          "Arkadaşlarının en çok beğendiği kitabı seçmek",
          "Yalnızca daha önce tanıdıkları yazarları okumak",
          "Kitabın tamamını okumadan seçim yapmamak"
        ],
        "correct": 0,
        "explanation": "İki kişi de önerileri dinler, fakat son kararı kitaptan bir bölüm inceleyerek verir. Arkadaşlarının seçimini doğrudan uyguladıkları veya kitabın tamamını okudukları söylenmez."
      },
      {
        "id": "t6-1-t9-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okulun duvarına asacağımız büyük resmi çizerken herkes farklı bir şey önerdi. Önerileri hemen oylamak yerine hangi düşüncenin neden önemli bulunduğunu konuştuk. Sonunda birkaç önerinin ortak yönünü birleştiren bir tasarım hazırladık.\nBu metinde hangi düşünce öne çıkar?",
        "options": [
          "Bir grup çalışmasında hızlı karar vermek için önerileri oylamak gerekir.",
          "Ortak bir tasarımda her öneriye aynı ölçüde yer vermek gerekir.",
          "Bir tasarım hazırlarken en fazla beğenilen öneri esas alınmalıdır.",
          "Farklı önerilerin gerekçelerini anlamak, ortak bir çözüm üretmeyi kolaylaştırabilir."
        ],
        "correct": 3,
        "explanation": "Grup, önerilerin gerekçelerini dinleyerek ortak noktaları bulur. Metin oylamayı, her öneriye eşit yer vermeyi veya en beğenileni seçmeyi değil, birbirini anlamaya dayalı ortak çözümü vurgular."
      },
      {
        "id": "t6-1-t9-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Şehirde kuşları gözlemlemeye başladığımda yalnızca büyük parklara gidiyordum.\nII. Bir gün evimin penceresinden baktığımda küçük bir ağacın çevresinde de birçok kuş gördüm.\nIII. Artık yolumun üzerindeki ağaçlara da dikkatle bakıyorum.\nIV. Böylece daha önce fark etmeden geçtiğim pek çok canlıyı tanıdım.\n“Bu karşılaşma, gözlem yapmak için uzaklara gitmem gerekmediğini düşündürdü.” cümlesi hangi cümleden sonra getirilmelidir?",
        "options": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "correct": 1,
        "explanation": "Bu karşılaşma sözü, II. cümledeki pencere önünde kuş görme olayına gönderme yapar. Eklenen cümle, III. cümlede anlatılan davranış değişikliğinin nedenini açıklar."
      },
      {
        "id": "t6-1-t9-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "İlk duyuru ile güncelleme birlikte okunduğunda, etkinliğe katılmak isteyen biri hangi bilgiyi doğru kullanmış olur?",
        "options": [
          "Pazar günü 11.00’de okul bahçesine gider.",
          "Cumartesi günü 11.00’de spor salonuna gider.",
          "Pazar günü 11.00’de spor salonuna gider.",
          "Pazar günü 14.00’te spor salonuna gider."
        ],
        "correct": 2,
        "explanation": "Güncelleme günü pazara, yeri spor salonuna çevirir; başlangıç saati değişmez. İlk duyurudaki 11.00 saati yeni gün ve yerle birlikte kullanılmalıdır.",
        "imageWidth": 360,
        "imageHeight": 660,
        "imageUrl": "/grade6/turkce/test-9/soru-05.svg",
        "imageAlt": "İlk duyuru: uçurtma tasarım atölyesi cumartesi saat 11.00 okul bahçesinde. Güncelleme: etkinlik pazar günü spor salonunda yapılacak, başlangıç saati değişmedi."
      },
      {
        "id": "t6-1-t9-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Deniz kaplumbağalarının karşılaştığı tehlikeleri ve onları korumak için yapılabilecekleri araştıran bir öğrenci, görseldeki kitaptan yararlanırken hangi iki sayfadan başlayan bölümleri öncelikle okumalıdır?",
        "options": [
          "4 ve 10",
          "10 ve 18",
          "4 ve 26",
          "18 ve 26"
        ],
        "correct": 3,
        "explanation": "Tehlikeler bölümü 18, Koruma yolları bölümü 26. sayfada başlar. Bu iki bölüm araştırmanın tehlikeler ve önlemlerle ilgili sorularını doğrudan karşılar.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-9/soru-06.svg",
        "imageAlt": "Deniz kaplumbağaları kitabının içindekiler sayfası: Yaşam alanları sayfa 4, Beslenme sayfa 10, Tehlikeler sayfa 18, Koruma yolları sayfa 26."
      },
      {
        "id": "t6-1-t9-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Zeynep, hazırladığı maketi masanın üzerine bıraktı. Pencereyi açarken kolu makete değdi ve bir parça yere düştü. Eğilip parçayı aldı, yapıştırıcısını aramaya başladı.”\nBu metnin anlatımıyla ilgili hangi yargı doğrudur?",
        "options": [
          "Olaylar, dışarıdan bir anlatıcı tarafından üçüncü kişiyle aktarılmıştır.",
          "Olayı yaşayan kişi, kendi duygularını birinci kişiyle anlatmıştır.",
          "Kişiler karşılıklı konuşarak olayı aktarmıştır.",
          "Anlatıcı, okura bir işi yapmanın kurallarını sıralamıştır."
        ],
        "correct": 0,
        "explanation": "Zeynep’in yaptıkları bıraktı, aldı gibi üçüncü kişi biçimleriyle aktarılır. Ben anlatımı veya karşılıklı konuşma yoktur; metin bir kullanım yönergesi değildir."
      },
      {
        "id": "t6-1-t9-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Yarışmayı kazanacağımızı sanıyorduk; oysa sonuçlar açıklandığında ikinci olduğumuzu öğrendik.” cümlesinde “oysa” sözü hangi ilişkiyi kurar?",
        "options": [
          "Bir davranışın yapılma amacını belirtir.",
          "Beklentinin gerçekleşen sonuçtan farklı olduğunu gösterir.",
          "Sonucun hangi koşulda değişeceğini açıklar.",
          "İkinci yargının ilkini örneklediğini gösterir."
        ],
        "correct": 1,
        "explanation": "Beklenti birinci olmak, gerçekleşen sonuç ikinci olmaktır. Oysa sözü bu farklılığı belirtir; amaç, koşul veya örnek ilişkisi kurmaz."
      },
      {
        "id": "t6-1-t9-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci arkadaşının sözünü değiştirmeden yazısına aktarmak istiyor. Hangi cümlede bunun için gereken noktalama doğru kullanılmıştır?",
        "options": [
          "Arkadaşım: Her gün biraz okumak istiyorum, dedi.",
          "Arkadaşım “Her gün biraz okumak istiyorum, dedi.”",
          "Arkadaşım, Her gün biraz okumak istiyorum. dedi.",
          "Arkadaşım, “Her gün biraz okumak istiyorum.” dedi."
        ],
        "correct": 3,
        "explanation": "Aynen aktarılan söz tırnak içine alınır; bu sözün sonundaki nokta tırnağın içinde kalır. D seçeneğinde aktarılan söz doğru sınırlar içinde gösterilmiştir."
      },
      {
        "id": "t6-1-t9-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bir fotoğraf, çekildiği anı gösterir. Ancak o anın öncesinde ve sonrasında neler olduğunu tek başına anlatmaz. Bu yüzden bir olay hakkında karar verirken yalnızca bir fotoğrafa bakmak yeterli olmayabilir.”\nBu metnin amacı aşağıdakilerden hangisidir?",
        "options": [
          "Olayları fotoğraflarla anlatırken çekim sırasına dikkat etmeyi önermek",
          "Bir görüntüyü değerlendirirken olayın bütünüyle ilgili bilgi aramaya yöneltmek",
          "Fotoğraflardaki küçük ayrıntıları inceleme yöntemlerini açıklamak",
          "Bir olayın öncesini ve sonrasını fotoğraf çekerek kaydetmeye yöneltmek"
        ],
        "correct": 1,
        "explanation": "Metin, tek görüntünün olayın tamamını sunamayabileceğini vurgular. Çekim sırası, ayrıntı inceleme yöntemi veya yeni fotoğraflar çekme hakkında öneri vermez; değerlendirme için olayın bağlamını araştırmaya yöneltir."
      }
    ],
    "test10": [
      {
        "id": "t6-1-t10-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Okul gazetesine göndereceği yazıyı ince eleyip sık dokudu; her cümleyi yeniden okuyup gereksiz sözleri çıkardı.” cümlesindeki deyim, kişinin hangi tutumunu belirtir?",
        "options": [
          "İşini ayrıntılarıyla ve titizlikle değerlendirmesini",
          "Çalışmasını başkalarının kararına bırakmasını",
          "Yazısını olabildiğince uzun tutmaya çalışmasını",
          "Bir işi bitirmeden başka bir işe geçmesini"
        ],
        "correct": 0,
        "explanation": "İnce eleyip sık dokumak, bir işi bütün ayrıntılarıyla dikkatle değerlendirmektir. Cümleleri yeniden inceleme ve gereksiz sözleri çıkarma bu anlamı destekler."
      },
      {
        "id": "t6-1-t10-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Aynı türden iki fideyi aynı büyüklükteki saksılara diktik. Birini pencere önüne, diğerini daha az ışık alan bir köşeye koyduk. İkisine de eşit miktarda su verdik. Bir hafta sonra pencere önündeki fidenin daha uzun olduğunu ölçtük.”\nBu metinde aşağıdaki sorulardan hangisinin cevabı yoktur?",
        "options": [
          "Fideler nerelere yerleştirilmiştir?",
          "Su miktarı iki fide için aynı mıdır?",
          "Fidelerin boyu ne zaman karşılaştırılmıştır?",
          "Fideler kaç santimetre uzamıştır?"
        ],
        "correct": 3,
        "explanation": "Yerler, eşit sulama ve karşılaştırmanın bir hafta sonra yapılması belirtilmiştir. Ancak santimetre cinsinden ölçüm sonuçları verilmemiştir."
      },
      {
        "id": "t6-1-t10-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Ece: “Öykümün sonunu hemen yazamadım. Birkaç gün ara verip yeniden okuyunca olayları başka türlü bağlayabileceğimi gördüm.”\nCan: “Tasarladığım oyunda bir sorun vardı. Bir süre başka bir işle uğraştıktan sonra döndüğümde yeni bir çözüm buldum.”\nİki kişinin yaşadıklarından çıkarılabilecek ortak sonuç hangisidir?",
        "options": [
          "Bir sorunla karşılaşınca çalışmanın konusunu değiştirmek çözümü kolaylaştırır.",
          "Çalışmaya kısa bir ara vermek, konuya farklı açıdan bakmayı kolaylaştırabilir.",
          "Bir işi tamamlamadan önce başkasının görüşüne başvurmak gerekir.",
          "Başarılı olmak için çalışmayı her seferinde baştan yapmak gerekir."
        ],
        "correct": 1,
        "explanation": "İki kişi de ara verdikten sonra aynı çalışmaya dönüp yeni bir çözüm bulur. Konuyu değiştirme, başkasından görüş alma veya işi baştan yapma anlatılmamıştır. Ara vermenin kimi zaman farklı bakış sağlayabileceği ortak sonuçtur."
      },
      {
        "id": "t6-1-t10-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "“_____. Eskiden bir kelimenin anlamını bilmediğimde okumayı bırakırdım. Şimdi önce cümlenin bütününe bakıyor, ardından tahminimi sözlükten kontrol ediyorum. Böylece hem okumayı sürdürüyor hem yeni kelimeler öğreniyorum.”\nParagrafın başına hangi cümle getirilmelidir?",
        "options": [
          "Okunacak kitabın kapağı da içeriği kadar önemlidir",
          "Sözlüklerde sözcükler belli bir düzene göre sıralanır",
          "Okurken karşılaştığım bilinmeyen kelimelerle baş etme yöntemim değişti",
          "Bir kitabı herkes aynı sürede bitiremez"
        ],
        "correct": 2,
        "explanation": "Paragraf, anlatıcının eskiden ve şimdi bilinmeyen kelimeler karşısında nasıl davrandığını karşılaştırır. C seçeneği bu değişimi bütün olarak kapsar."
      },
      {
        "id": "t6-1-t10-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Mina, çömlek atölyesinin tamamına katıldıktan sonra başka bir atölyeye de katılmak istiyor. Görseldeki programa göre hangi atölyeyi seçebilir?",
        "options": [
          "Resim atölyesini",
          "Öykü atölyesini",
          "Hem resim hem öykü atölyesini",
          "Programdaki atölyelerin hiçbirini"
        ],
        "correct": 1,
        "explanation": "Çömlek atölyesi 11.30’da biter. Resim atölyesi 11.00’de başladığından çömlek bitmeden başlamış olur. Öykü atölyesi ise 12.00’de başlar ve belirtilen koşula uygundur.",
        "imageWidth": 360,
        "imageHeight": 650,
        "imageUrl": "/grade6/turkce/test-10/soru-05.svg",
        "imageAlt": "Atölye programı: çömlek 10.00–11.30, resim 11.00–12.00, öykü 12.00–13.00. Her atölyeye başlangıç saatinde katılınır."
      },
      {
        "id": "t6-1-t10-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Afişteki iki sahnenin karşılaştırılmasıyla verilmek istenen mesaj hangisidir?",
        "options": [
          "Tasarruf için aynı odada birden fazla lamba kullanılmamalıdır.",
          "Gündüz perdeyi açarken lambayı da yakmak daha verimli aydınlatma sağlar.",
          "Işığın odaya daha çok girmesi için pencereyi açmak gerekir.",
          "Gün ışığından yararlanarak gereksiz elektrik kullanımını azaltabiliriz."
        ],
        "correct": 3,
        "explanation": "İlk sahnede perde kapalı ve lamba açıktır. İkincisinde perde açılarak gün ışığı kullanılır ve lamba kapatılır. Pencerenin açılması veya lamba sayısının değişmesi gösterilmez; mesaj gereksiz elektrik kullanımını azaltmaktır.",
        "imageWidth": 360,
        "imageHeight": 700,
        "imageUrl": "/grade6/turkce/test-10/soru-06.svg",
        "imageAlt": "İki oda sahnesi: ilkinde güneşli gündüz, kapalı perde ve açık lamba; ikincisinde açık perde, içeri giren gün ışığı ve kapalı lamba."
      },
      {
        "id": "t6-1-t10-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bugün sergide görev alacağım için çok heyecanlıyım. Umarım ziyaretçilere çalışmalarımızı anlaşılır biçimde anlatabilirim.”\nBu cümlelerde sırasıyla hangi durumlar dile getirilmektedir?",
        "options": [
          "Bir duygu ve bir beklenti",
          "Bir eleştiri ve bir karşılaştırma",
          "Bir öneri ve bir pişmanlık",
          "Bir koşul ve gerçekleşmiş bir sonuç"
        ],
        "correct": 0,
        "explanation": "İlk cümlede heyecan duygusu, ikinci cümlede geleceğe yönelik olumlu bir beklenti belirtilir. Ziyaretçilere anlatma işi henüz gerçekleşmiş bir sonuç olarak sunulmamıştır."
      },
      {
        "id": "t6-1-t10-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Yol boyunca uzanan ağaçlar, sonbaharın sarı örtüsüne bürünmüştü. Islak yaprakların kokusu dar sokağı dolduruyordu. Taş duvarların arasından hafif bir rüzgâr geçiyordu.”\nBu metinde anlatımın temel amacı nedir?",
        "options": [
          "Bir olayın nedenlerini kanıtlamak",
          "Bir yerin özelliklerini okurun zihninde canlandırmak",
          "Bir işin yapılma aşamalarını sıralamak",
          "İki mevsimin farklarını karşılaştırmak"
        ],
        "correct": 1,
        "explanation": "Renk, koku ve çevre ayrıntılarıyla sokak betimlenmiştir. Metin olayın nedenini kanıtlamaz, yönerge vermez veya iki mevsimi karşılaştırmaz."
      },
      {
        "id": "t6-1-t10-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerin hangisinde “mı / mi” soru anlamı katmadığı için cümlenin sonuna soru işareti konmamalıdır?",
        "options": [
          "Kütüphanedeki yeni kitapları gördün mü",
          "Yarınki geziye sen de katılacak mısın",
          "Bahar geldi mi bahçemizdeki ağaçlar çiçek açar",
          "Bu resmi arkadaşın mı çizdi"
        ],
        "correct": 2,
        "explanation": "Bahar geldi mi ifadesi, bahar geldiğinde anlamı taşır; burada bilgi isteyen bir soru yoktur. Diğer cümlelerde soru anlamı vardır ve sonlarına soru işareti konur."
      },
      {
        "id": "t6-1-t10-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir haberde “Okul bahçesine yirmi fidan dikildi.” denilmektedir. Haberi okuyan bir öğrenci “Demek ki fidanların hepsi büyüyüp ağaç olacak.” sonucuna varmıştır.\nÖğrencinin bu değerlendirmesindeki eksiklik nedir?",
        "options": [
          "Haberdeki fidan sayısını başka bir sayıyla değiştirmesi",
          "Dikim yerinin okul bahçesi olduğunu dikkate almaması",
          "Haberde belirtilen olayı geçmişte yaşanmış sayması",
          "Dikilmiş olmalarını, hepsinin büyüyeceğinin kesin kanıtı sayması"
        ],
        "correct": 3,
        "explanation": "Haber, fidanların dikildiğini bildirir; gelecekte hepsinin büyüyeceğini garanti etmez. Öğrenci verilen bilgiden kesin olarak çıkarılamayan bir sonuç üretmiştir."
      }
    ],
    "test11": [
      {
        "prompt": "Okul sergisi için hazırladığımız modellerin hepsi ilk denemede çalışmadı. Ece, kendi modelinin neden durduğunu not etmişti; Bora ise yalnızca “Olmadı.” yazmıştı. Öğretmenimiz, “İkinizin de modeli çalışmadı diye bu iki denemeyi aynı kefeye koyamayız.” dedi.\nÖğretmenin sözüyle vurgulamak istediği düşünce hangisidir?",
        "options": [
          "Bir denemenin değeri, ortaya çıkan ürün kadar o süreçte edinilen bilgiye de bağlıdır.",
          "Bir çalışmayı başarılı saymak için alınan notların ayrıntılı olması yeterlidir.",
          "Aynı sonuca ulaşan denemeler, çalışma süresi bakımından karşılaştırılmalıdır.",
          "Çalışmayan bir model hakkında yorum yapmak için önce modeli yeniden kurmak gerekir."
        ],
        "correct": 0,
        "explanation": "Öğretmen, iki çalışmanın sonucunun aynı görünmesine rağmen birinde nedenin araştırılıp kaydedildiğine dikkat çeker. A hem ürünün sonucunu hem öğrenilen bilgiyi kapsar. B, not tutmayı tek başına başarı için yeterli sayar; C ve D metinde verilmeyen ölçütler ekler.",
        "id": "t6-1-t11-01",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "I. Metin: Bir ağacın adını öğrenince onu tanıdığımı sanmıştım. Sonra aynı ağacın ilkbaharda başka, kışın başka göründüğünü fark ettim. Adını bilmek, onu gözlemlemeye başlamamı sağlamıştı; gözlemimin yerini tutmuyordu.\nII. Metin: Bir şehrin haritası, sokakların birbirine nasıl bağlandığını gösterir. Fakat o sokaklarda yürürken duyduğunuz sesleri ve karşılaştığınız insanları anlatamaz. Harita yol buldurur; yolculuğun bütününü yaşatmaz.\nBu iki metnin ortak düşüncesini en iyi ifade eden cümle hangisidir?",
        "options": [
          "Bir varlığı tanımak için önce onun adını ve bulunduğu yeri öğrenmek gerekir.",
          "Gözlem sırasında edinilen bilgiler, önceden öğrenilen bilgilerin yanlış olduğunu gösterir.",
          "Tanımayı kolaylaştıran bir bilgi veya araç, tanınan şeyin bütün özelliklerini tek başına sunmaz.",
          "Bir konuda yeterince deneyim kazanan kişi, o konudaki yardımcı bilgilere ihtiyaç duymaz."
        ],
        "correct": 2,
        "explanation": "İlk metinde ad, ikinci metinde harita yararlı ama sınırlı birer başlangıçtır. İkisi de bu yardımcıların deneyimin bütününün yerini tutmadığını söyler. A zorunlu bir sıra koyar; B bilgilerin yanlış olduğunu, D ise gereksiz hâle geldiğini ileri sürer. Bunlar iki metinde ortak değildir.",
        "id": "t6-1-t11-02",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "Kütüphanedeki öneri kutusuna yalnızca “Daha fazla kitap alınsın.” yazıyorduk. Görevli hangi türleri istediğimizi sorunca birbirimizden farklı kitaplar düşündüğümüzü anladık. Yeni notumuza türleri ve neden istediğimizi ekledik. Bir ay sonra isteklerimizin bir kısmının karşılandığını gördük; bazı kitaplar için ise beklememiz gerektiği açıklandı.\nBu metinden aşağıdaki sonuçların hangisine ulaşılamaz?",
        "options": [
          "Aynı genel isteği dile getiren kişiler farklı ayrıntıları düşünüyor olabilir.",
          "Beklenmesi istenen kitapların henüz alınamamasının nedeni bütçenin yetersizliğidir.",
          "Bir isteğin anlaşılır hâle gelmesi, onun bütünüyle yerine getirileceği anlamına gelmez.",
          "Görevlinin sorusu, öğrencilerin isteklerini daha belirgin biçimde anlatmasına yardımcı olmuştur."
        ],
        "correct": 1,
        "explanation": "Bekleneceği söylenmiş, ancak bunun nedeni açıklanmamıştır. B’de bütçe yetersizliği kesin neden olarak eklenmiştir. A farklı türler düşünülmesine, C isteklerin kısmen karşılanmasına, D sorudan sonra tür ve gerekçelerin eklenmesine dayanır.",
        "id": "t6-1-t11-03",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "I. Okul bahçesinin eski fotoğrafına bakarken duvarın yanındaki boşluğu fark ettik.\nII. Bugün o yerde büyük bir çınar bulunduğunu biliyorduk.\nIII. Sonunda fotoğrafın arkasındaki tarihi okuyup ağacın o tarihten sonra dikilmiş olabileceğini düşündük.\nIV. Kesin bilgi için okulun eski kayıtlarını incelemeye karar verdik.\n“Bu fark, fotoğrafın ağacın dikilmesinden önce çekilip çekilmediğini merak etmemize yol açtı.” cümlesi, anlam bağlantıları korunarak hangi cümleden sonra getirilmelidir?",
        "options": [
          "I",
          "III",
          "IV",
          "II"
        ],
        "correct": 3,
        "explanation": "Bu fark ifadesi, I’deki boş yer ile II’deki bugünkü ağacın karşılaştırılmasını gerektirir. Merakın belirtilmesi, III’te tarihi inceleyerek olasılık üretmelerinden önce gelmelidir. Bu iki koşulu aynı anda yalnız II’den sonrası sağlar.",
        "id": "t6-1-t11-04",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "Öğrenciler, kasabadaki eski bir yapının kullanımını araştırıyor. Görseldeki üç belgeye de bağlı kalan bir tanıtım cümlesi yazmak istiyorlar. Hangisi, belgelerin söylediğinden fazlasını ileri sürmeden hazırlanmıştır?",
        "options": [
          "1920’de kütüphane olarak açılan yapı, 1950’den sonra bütünüyle müzeye dönüştürülmüştür.",
          "1920’de okul olarak kullanılan yapının bir bölümü, 1950’de kütüphane olarak hizmet vermiştir.",
          "Yapı, 1920’de okul olarak kullanılmış; 1950’deki kayıtta kütüphane olarak anılmış ve 2020’de müze olarak açılmıştır.",
          "1920’den 2020’ye kadar aralıksız hizmet veren yapının kullanım amacı iki kez değiştirilmiştir."
        ],
        "correct": 2,
        "explanation": "Üç belge sırasıyla 1920’de okul olarak kullanım, 1950 tarihli kütüphane kaydı ve 2020’de müze olarak açılma bilgisini verir. C yalnız bunları birleştirir. A başlangıç kullanımını değiştirir; B “bir bölümü” bilgisini ekler; D belgesiz dönemlerde aralıksız hizmet verildiğini ve değişim sayısını kesinleştirir.",
        "id": "t6-1-t11-05",
        "subject": "turkce",
        "term": 1,
        "imageWidth": 360,
        "imageHeight": 810,
        "imageUrl": "/grade6/turkce/test-11/soru-05.svg",
        "imageAlt": "1920 tarihli fotoğraf notu yapının okul olarak kullanıldığını, 1950 belediye kaydı kütüphane olarak kullanıldığını, 2020 açılış duyurusu müze olarak açıldığını bildirir."
      },
      {
        "prompt": "Kaynak metin:\n“Okul bahçesine yağmur suyunu biriktiren bir düzenek kurduk. Biriken suyu bitkileri sulamakta kullandık. İlk hafta kabın ağzı açık kaldığı için suya yapraklar düştü. Kabı uygun bir kapakla örttükten sonra suyu daha temiz biriktirebildik.”\n\nX özeti: İlk hafta bir kabın içine yapraklar düştü. Bu tür kaplar her okulda kullanılmalıdır.\nY özeti: Öğrenciler, yağmur suyunu sulamada kullandıkları düzeneği karşılaştıkları soruna göre geliştirdi. Bu düzenekler su toplamanın en ucuz yoludur.\n\nGörseldeki kontroller üstten alta uygulanıp ilk düzeltme gereken yerde durulacaktır. X ve Y için ilk uygulanacak yönergeler sırasıyla hangileridir?",
        "options": [
          "Eksik bilgiyi tamamla / Eklenen kısmı çıkar",
          "Eklenen kısmı çıkar / Eksik bilgiyi tamamla",
          "Eklenen kısmı çıkar / KULLAN",
          "KULLAN / Eksik bilgiyi tamamla"
        ],
        "correct": 0,
        "explanation": "X, metnin asıl düşüncesini değil yalnız yaprak düşmesi ayrıntısını verir; bu yüzden ilk kontrolde durulur ve eksik bilgi tamamlanır. X’in eklediği öneriye ikinci kontrolde bakılabilse de ilk yapılacak işlem bu değildir. Y, düzeneğin kullanımını ve geliştirilmesini koruyarak ilk kontrolü geçer. Ancak en ucuz yol olduğu kaynak metinde yoktur; ikinci kontrolde bu ek yargının çıkarılması gerekir.",
        "id": "t6-1-t11-06",
        "subject": "turkce",
        "term": 1,
        "imageWidth": 360,
        "imageHeight": 925,
        "imageUrl": "/grade6/turkce/test-11/soru-06.svg",
        "imageAlt": "Özet kontrol yolu: Temel düşünce korunmuyorsa eksik bilgiyi tamamla, korunuyorsa ikinci kontrole geç. Metinde olmayan bilgi veya yorum varsa çıkar, yoksa özeti kullan."
      },
      {
        "prompt": "“Yolun sonundaki küçük dükkân yıllardır aynı yerdeydi. Çocukken vitrinindeki tahta oyuncaklara uzaktan bakardım. Dün oraya yeniden gittim. Dükkân sahibi beni tanımadı ama kapının açılırken çıkardığı ses, sanki eski günlerden kalma bir tanıdık gibi karşıladı beni.”\nBu metinle ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?",
        "options": [
          "Geçmişte görülen bir yerin bugünkü fiziksel değişimleri karşılaştırılarak zamanın etkisi gösterilmiştir.",
          "Tanıdık bir sesin çağrıştırdığı anılar, dükkân sahibinin kişiyi hatırlamasını sağlamıştır.",
          "Anlatıcı, çocukluğunda alamadığı oyuncakları yeniden görerek o günkü isteğinin değiştiğini anlatmıştır.",
          "Geçmişle bugünkü bir deneyim ilişkilendirilmiş, bir ses anıları canlandıran unsur olarak kullanılmıştır."
        ],
        "correct": 3,
        "explanation": "Anlatıcı, çocukluk anısı ile bugünkü ziyaretini kapı sesi üzerinden ilişkilendirir. Fiziksel değişimler karşılaştırılmaz (A); dükkân sahibi anlatıcıyı tanımaz (B). Anlatıcı bugünkü oyuncak isteğinin değiştiğini söylemez (C). D hem zamanlar arasındaki bağı hem sesin işlevini doğru belirtir.",
        "id": "t6-1-t11-07",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "I. Bu yüzden önerileri yalnız ilgi çekiciliklerine göre değil, uygulanabilirliklerine göre de değerlendirmeye karar verdik.\nII. Sınıf gezisi için konuşurken çok ilgimizi çeken bazı yerlerin bir günlük yolculuk için uzak kaldığını gördük.\nIII. Bu ikinci listeden, ziyaret saatleri bize uymayan yerleri de çıkardık.\nIV. Önce görmek istediğimiz yerleri yazdık, ardından bunlardan aynı gün gidip dönebileceklerimizi ayrı bir listeye aldık.\nV. Son olarak her iki koşula da uyan yerler arasından seçim yaptık.\n\nGönderme yapan sözlerin anlamı ve olayların sırası birlikte düşünüldüğünde anlamlı paragrafın sıralaması hangisidir?",
        "options": [
          "II – IV – III – V – I",
          "II – I – IV – III – V",
          "II – I – III – IV – V",
          "II – IV – V – I – III"
        ],
        "correct": 1,
        "explanation": "II’de uzaklık sorunu görülür, I’de bu yüzden uygulanabilirliği de değerlendirme kararı verilir. IV iki listeyi oluşturur; III’teki bu ikinci liste bunlardan aynı gün gidilip dönülebilen yerler listesidir. V’deki iki koşul, aynı gün gidip dönebilme ve ziyaret saatlerinin uygunluğudur. B bütün bağları korur. A kararı seçimden sonraya bırakır; C ikinci liste oluşmadan ona gönderme yapar; D saat koşulu denetlenmeden iki koşula göre seçim yapar.",
        "id": "t6-1-t11-08",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "Bir öğrenci panoya şu notu yazmıştır:\n“Yarın ki toplantıya sizde katılacak mısınız? Toplantıda ki önerileri daha sonra paylaşacağız.”\nNotta yalnızca yazım yanlışları düzeltilirse aşağıdakilerden hangisi elde edilir?",
        "options": [
          "Yarınki toplantıya sizde katılacak mısınız? Toplantıdaki önerileri daha sonra paylaşacağız.",
          "Yarın ki toplantıya siz de katılacak mısınız? Toplantıdaki önerileri daha sonra paylaşacağız.",
          "Yarınki toplantıya siz de katılacak mısınız? Toplantıdaki önerileri daha sonra paylaşacağız.",
          "Yarınki toplantıya siz de katılacakmısınız? Toplantıda ki önerileri daha sonra paylaşacağız."
        ],
        "correct": 2,
        "explanation": "Yarınki ve toplantıdaki sözcüklerindeki -ki ektir ve bitişik yazılır. Siz de ifadesindeki de bağlaçtır ve ayrı yazılır. Katılacak mısınız biçiminde soru eki ayrı, ona gelen kişi eki bitişik kalır. Bu koşulların hepsini yalnız C karşılar.",
        "id": "t6-1-t11-09",
        "subject": "turkce",
        "term": 1
      },
      {
        "prompt": "Bir okulda bir hafta boyunca kitaplık köşesini kullanan öğrenci sayısı kaydedildi. Pazartesi 12, cuma 20 öğrenci sayıldı. İki gün arasında kitaplığın yeri değiştirilmiş ve yeni kitaplar eklenmişti. Öğrencilere neden geldikleri sorulmamıştı.\nBu verileri yorumlayan bir öğrenci, gözlenen sonuç ile henüz bilinmeyeni hangi seçenekte doğru ayırmıştır?",
        "options": [
          "Öğrenci sayısı artmıştır; artışta yer değişikliği ile yeni kitapların aynı ölçüde etkili olduğu anlaşılmıştır.",
          "Öğrenci sayısı artmıştır; öğrencilerin yeni kitapları kitaplığın yeni yerinden daha çok beğendiği anlaşılmıştır.",
          "Öğrenci sayısı artmıştır; pazartesi gelen öğrencilerin tamamının cuma günü de geldiği anlaşılmıştır.",
          "Öğrenci sayısı artmıştır; bu bilgilerden iki değişikliğin artış üzerindeki ayrı ayrı etkileri belirlenemez."
        ],
        "correct": 3,
        "explanation": "12’den 20’ye çıkan sayı, iki kayıt arasındaki artışı gösterir. Fakat değişikliklerin katkı payı (A), öğrencilerin tercih nedeni (B) ve iki gün gelenlerin aynı kişiler olup olmadığı (C) verilmemiştir. D, kayıtlarda gözlenen artış ile henüz kanıtlanmamış etkiyi birbirinden ayırır.",
        "id": "t6-1-t11-10",
        "subject": "turkce",
        "term": 1
      }
    ],
    "test12": [
      {
        "id": "t6-1-t12-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Öykünün sonundaki sessizlik boşuna değildi. Kahraman, kendisine uzatılan mektubu açmadan masaya bıraktı. Yazar onun ne düşündüğünü söylemedi; fakat mektuba her bakışında ellerini cebine sakladığını anlattı.”\nBu anlatımda okurdan beklenen aşağıdakilerden hangisidir?",
        "options": [
          "Kahramanın duygusunu, davranış ipuçlarını birlikte değerlendirerek çıkarması",
          "Mektubun içeriğini kahramanın daha önce okuduğunu kabul etmesi",
          "Kahramanın susmasını, olayla ilgilenmediğinin kesin kanıtı sayması",
          "Yazarın söylemediği düşünceleri, metinden bağımsız olarak tamamlaması"
        ],
        "correct": 0,
        "explanation": "Duygu açıkça adlandırılmamış; mektubu açmama ve ellerini saklama gibi davranışlar verilmiştir. A, bu ipuçlarına dayanan çıkarımı ister. B metinde olmayan bir geçmiş ekler, C tek ve kesin bir neden ileri sürer, D ise metnin kanıtlarını göz ardı eder."
      },
      {
        "id": "t6-1-t12-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Metin: Bir ezgiyi ilk dinleyişte yalnızca melodisine dikkat ettim. Aynı ezgiyi farklı bir çalgıyla duyunca ritmin etkisini de fark ettim. İkinci dinleyişim, ilkinde duyduklarımı silmedi; onlara yeni bir yön ekledi.\nII. Metin: Bir masalı arkadaşımın çizdiği resimlerle yeniden okudum. Resimler bazı ayrıntıları öne çıkarınca daha önce önemsemediğim bir davranış üzerinde düşündüm. Masal değişmemişti; ona bakışım genişlemişti.\nİki metnin ortak düşüncesini sınırlarını aşmadan veren yargı hangisidir?",
        "options": [
          "Bir eserin daha sonraki sunumu, ilk sunumundan daha başarılıdır.",
          "Görsel ve işitsel araçlar, bir eserin anlamını kesin olarak belirler.",
          "Bir eser farklı biçimlerde sunulmadıkça yeterince anlaşılamaz.",
          "Farklı bir sunum, önceden tanınan bir eserde yeni yönler fark etmeyi sağlayabilir."
        ],
        "correct": 3,
        "explanation": "İki deneyimde de değişen sunum, önceki anlayışa yeni ayrıntılar eklemiştir. D olasılık bildirerek bu ortak noktayı korur. A üstünlük, B kesinlik, C zorunluluk getirir; bu geniş genellemeler metinlerden çıkarılamaz."
      },
      {
        "id": "t6-1-t12-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okul bahçesindeki oturma yerleri için bir anket yaptık. Bir grup öğrenci ağaçların altına, bir grup da spor alanına yakın banklar istedi. Yalnızca kaç kişinin ne istediğini saymadık; gerekçelerini de dinledik. İlk grup gölgeyi, ikinci grup oynayan arkadaşlarını izlemeyi önemsiyordu. Sonunda spor alanını gören gölgeli bir yer seçtik.\nBu çözümün oluşmasını en iyi açıklayan yargı hangisidir?",
        "options": [
          "Öğrencilerin farklı önerilerinden biri, diğer önerinin de gerekçesi açıklanarak kabul edilmiştir.",
          "Farklı görünen isteklerin altında yatan ihtiyaçları birlikte karşılayan bir seçenek bulunmuştur.",
          "Her gruptan ilk isteğinin bir bölümünden vazgeçmesi istenerek ortak bir karar oluşturulmuştur.",
          "İsteklerin gerekçeleri dinlendikten sonra karar, daha çok öğrencinin yararlanacağı yere göre verilmiştir."
        ],
        "correct": 1,
        "explanation": "Seçilen yer, gölge ve spor alanını görme ihtiyaçlarını aynı anda karşılar. Bir grubun gerekçesinin ötekine kabul ettirilmesi veya her iki grubun birer ihtiyacından vazgeçmesi anlatılmaz. Öğrenci sayısı karara gerekçe yapılmamıştır. B, çözümün hangi ilişkiyle oluşturulduğunu eksiksiz belirtir."
      },
      {
        "id": "t6-1-t12-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Önce mahalledeki eski çeşmelerin yerlerini bir haritada işaretledik.\nII. Bunların bazılarının artık kullanılmadığını görünce araştırmamıza yeni bir soru ekledik.\nIII. Bu soruyu yanıtlamak için mahalle sakinleriyle konuştuk ve eski fotoğraflara baktık.\nIV. Böylece yalnız yerlerini gösteren bir harita değil, zaman içindeki değişimlerini anlatan bir çalışma ortaya çıktı.\n“Çeşmelerin geçmişte nasıl kullanıldığını ve ne zaman kullanım dışı kaldığını öğrenmek istiyorduk.” cümlesi nereye getirilmelidir?",
        "options": [
          "I. cümleden önce",
          "I. cümleden sonra",
          "II. cümleden sonra",
          "III. cümleden sonra"
        ],
        "correct": 2,
        "explanation": "II yeni bir sorudan söz eder; eklenen cümle bu sorunun içeriğini açıklar. III’teki bu soruyu ifadesi de açıklanan soruya bağlanır. Bu iki bağlantıyı birlikte koruyan yer II’den sonrasıdır. III’ten sonra eklemek, araştırma işleminden önce gereken açıklamayı geciktirir."
      },
      {
        "id": "t6-1-t12-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bütün fotoğrafların çekim yeri ve tarihi yazılıdır. Dosyalarla ilgili diğer bilgiler şöyledir:\nK: Öğrenci kendi çektiği boş bahçe fotoğrafını gönderiyor; fotoğrafta insan yok.\nL: Öğrenci arkadaşının çektiği boş bahçe fotoğrafını gönderiyor; arkadaşının adı yazılı, kullanım izni yok.\nM: Öğrenci kendi çektiği fotoğrafı gönderiyor; yüzü tanınan kişinin izni dosyada.\nN: Öğrenci arkadaşının çektiği fotoğrafı gönderiyor; arkadaşının adı ve kullanım izni var, yüzü tanınan kişinin izni yok.\nGörseldeki kurallara göre hangi iki dosya, başka bir izin veya bilgi istenmeden yayımlanabilir?",
        "options": [
          "K ve L",
          "K ve M",
          "L ve N",
          "M ve N"
        ],
        "correct": 1,
        "explanation": "K’de fotoğraf öğrencinin kendisine ait olduğundan kullanım izni gerekmez; tanınan kişi de yoktur. M’de fotoğraf kendisinindir ve tanınan kişinin izni vardır. L’de fotoğrafı çekenin adını yazmak kullanım izninin yerini tutmaz. N’de ise fotoğrafçının izni, görüntüdeki tanınan kişinin izni yerine geçmez. Bütün dosyalarda yer ve tarih ortak koşulu sağlanmıştır.",
        "imageWidth": 360,
        "imageHeight": 930,
        "imageUrl": "/grade6/turkce/test-12/soru-05.svg",
        "imageAlt": "Fotoğraf yayımlama kuralları: tüm fotoğraflarda yer ve tarih yazılır. Başkasının fotoğrafında sahibinin adı ve kullanım izni gerekir. Kendi fotoğrafında kullanım izni aranmaz. Yüzü tanınan kişi varsa kişinin izni de gerekir; yoksa bu izin aranmaz."
      },
      {
        "id": "t6-1-t12-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Görselde aynı sergi için hazırlanmış iki taslak afiş vardır. Düzenleyici, “Ücretsiz katılım bilgisi korunmalı; ziyaretçinin bir gün ve saat seçebilmesi için gerekli bilgiler de eksiksiz olmalı.” diyor. Bu isteği karşılamak için hangi düzenleme yeterlidir?",
        "options": [
          "A taslağına yalnızca ücretsiz katılım bilgisi eklemek",
          "B taslağındaki gün bilgisini kaldırıp A’daki saatleri eklemek",
          "A taslağındaki saatleri kaldırıp B’deki gün bilgisini eklemek",
          "B taslağına A’daki açılış ve kapanış saatlerini eklemek"
        ],
        "correct": 3,
        "explanation": "B taslağında gün aralığı ve ücretsiz katılım vardır; saatler eksiktir. A’da saatler bulunur, günler eksiktir. D, B’deki mevcut bilgileri koruyarak eksik saatleri tamamlar. A gün eksiğini gidermez; B ve C gerekli bir bilgiyi kaldırır.",
        "imageWidth": 360,
        "imageHeight": 800,
        "imageUrl": "/grade6/turkce/test-12/soru-06.svg",
        "imageAlt": "A afişi: El Emeği Sergisi, 10.00–16.00, okul salonu. B afişi: El Emeği Sergisi, cumartesi ve pazar, okul salonu, katılım ücretsiz."
      },
      {
        "id": "t6-1-t12-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Uzun süredir aradığı defteri bulunca kapağını hemen açmadı. Önce üzerindeki tozu eliyle sildi, sonra pencerenin yanına oturdu. İlk sayfadaki yazıyı okuyunca gülümsedi. Dışarıdan gelen seslere aldırmadan sayfaları ağır ağır çevirdi.”\nBu metni özetleyen hangi cümle, verilenlerin dışına çıkmadan temel olayı ve anlatımın sezdirttiği tutumu birlikte korur?",
        "options": [
          "Bir kişi, bulduğu eski defteri özenle ve dikkatini ona vererek inceler.",
          "Bir kişi, defterdeki eski bilgileri yenilemek için çevresinden uzaklaşır.",
          "Bir kişi, bulduğu defteri yavaşça okuyarak yazıların kime ait olduğunu çözmeye çalışır.",
          "Bir kişi, defterin önceki sahibini hatırladığı için okumaya ara verir."
        ],
        "correct": 0,
        "explanation": "Defterin bulunması ve incelenmesi açık olaydır; tozunu silme, ağır okuma ve seslere aldırmama özen ve yoğunlaşmayı destekler. B bilgileri yenileme amacı, C yazarı bulma amacı, D önceki sahibi hatırlama nedeni ekler. Metinde bu amaç veya nedenlerin hiçbiri belirtilmemiştir."
      },
      {
        "id": "t6-1-t12-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Ancak listede aynı olayın farklı kişiler tarafından birkaç kez anlatıldığını fark ettik.\nII. Bu ortak listeden, okulun gelişimini gösteren farklı olayları seçtik.\nIII. Okulumuzun geçmişini anlatan bir pano için öğretmenlerimizden anılar toplayıp bir liste hazırladık.\nIV. Bu nedenle benzer anlatımları karşılaştırıp aynı olaya ait olanları tek başlık altında birleştirdik.\nV. Böylece panoda birbirini tekrar eden anlatımlar yerine farklı dönemlere ait örnekler yer aldı.\nGönderme sözleri ve işlem sırası birlikte düşünüldüğünde doğru sıralama hangisidir?",
        "options": [
          "III – II – I – IV – V",
          "III – I – II – IV – V",
          "III – I – IV – II – V",
          "I – III – IV – V – II"
        ],
        "correct": 2,
        "explanation": "III anıların toplanmasını başlatır, I tekrar sorununu belirtir, IV bu nedenle ifadesiyle sorunu giderip ortak listeyi oluşturur. II bu ortak listeden seçimi anlatır; V sonucu verir. Diğer sıralamalarda ortak liste oluşturulmadan kullanılır veya sonuç seçimden önce verilir."
      },
      {
        "id": "t6-1-t12-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Toplantıda konuşanlar, önerilerimizi hemen uygulayalım demedi; önce küçük bir grupta deneyip sonucuna göre karar vermeyi önerdi.”\nBu cümleyi anlamını değiştirmeden yeniden kuran seçenek hangisidir?",
        "options": [
          "Konuşmacılar, önerilerin genel uygulamasına karar verilmesini ve ardından küçük bir grupta denenmesini önerdi.",
          "Konuşmacılar, genel uygulama kararının küçük gruptaki denemenin sonucu değerlendirildikten sonra verilmesini önerdi.",
          "Konuşmacılar, önerilerin küçük grupta denenmesine karar verilmiş olduğunu ve genel uygulamaya geçileceğini bildirdi.",
          "Konuşmacılar, önerilerin küçük grupta uygulanmasıyla yetinilmesini ve genel uygulamadan vazgeçilmesini önerdi."
        ],
        "correct": 1,
        "explanation": "Kaynak cümle, genel karar verilmeden önce sınırlı bir deneme ve sonuç değerlendirmesi önerildiğini bildirir. B bu sırayı ve öneri niteliğini korur. A karar ile denemenin sırasını ters çevirir; C öneriyi kesinleşmiş karar yapar; D ise denemeyi son aşama sayarak genel uygulamayı dışlar."
      },
      {
        "id": "t6-1-t12-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci hazırladığı haberin başlığını “Bütün Öğrenciler Yeni Okuma Alanını Beğendi” koymuştur. Haberin metninde ise “Yeni alanı kullanan on öğrenciyle görüştük. Sekizi alanı rahat bulduğunu, ikisi daha fazla aydınlatma gerektiğini söyledi.” bilgisi vardır.\nBaşlık ile haber arasındaki sorunu en kapsamlı biçimde belirten yargı hangisidir?",
        "options": [
          "Başlık, görüş bildiren öğrencilerin sayısını belirtmediği için değerlendirmelerin kapsamını belirsiz bırakmıştır.",
          "Haberde farklı görüşler bulunduğu için öğrencilerin alanla ilgili ortak hiçbir düşüncesi olamayacağı gözden kaçırılmıştır.",
          "Başlık, aydınlatmayı yetersiz bulanların görüşünü dışarıda bırakarak görüşülen grubun tamamını aynı düşüncede göstermiştir.",
          "Başlık, sınırlı bir gruptan alınan farklı görüşleri bütün öğrencilere ait tek bir olumlu görüşe dönüştürmüştür."
        ],
        "correct": 3,
        "explanation": "Başlık hem görüşülen on kişiyi bütün öğrencilere geneller hem farklı değerlendirmeleri tek bir beğeni yargısına indirger. D iki sorunu birlikte gösterir. A yalnız kapsamı, C yalnız görüş farklılığını ele aldığı için en kapsamlı değerlendirme değildir. B farklı görüşlerin ortak herhangi bir düşünce bulunmasını engellediğini öne sürer; böyle bir zorunluluk yoktur."
      }
    ],
    "test13": [
      {
        "id": "t6-1-t13-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir tartışmada karşımızdakini sözünü kesmeden dinlemek, onun her söylediğini onaylamak değildir. Bazen itirazımızı sağlam bir zemine oturtmak için önce düşüncesini doğru anlamamız gerekir. Ancak anladığımız bir düşünceyi de sırf bize ait olmadığı için yanlış sayamayız.\nBu metnin önerdiği tutumu eksiksiz yansıtan davranış hangisidir?",
        "options": [
          "Karşı görüşün gerekçelerini öğrenip onları değerlendirdikten sonra itiraz edip etmeyeceğine karar vermek.",
          "Karşı görüşün gerekçelerini doğru anladığından emin olunca, değerlendirmeyi sonraya bırakıp tartışmayı bitirmek.",
          "Karşı görüşü sonuna kadar dinleyip yalnız kendi itirazını güçlendiren gerekçeleri değerlendirmek.",
          "Karşı görüşün gerekçelerini anlamaya çalışırken, düşünceyi savunan kişiyi tanımasını doğruluğu için yeterli görmek."
        ],
        "correct": 0,
        "explanation": "A hem karşı görüşü anlamayı hem gerekçelerini tarafsızca değerlendirmeyi içerir. B anlamayla yetinerek değerlendirmeyi erteler; C gerekçeleri seçerek ele alır. D gerekçelerin yerine kişiyi ölçüt sayar. Metin yalnızca dinlemeyi değil, anladıktan sonra düşüncenin kendisini değerlendirmeyi önerir."
      },
      {
        "id": "t6-1-t13-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bir kilimin desenini aynı ölçülerle kâğıda geçirdim. Fakat dokuyucunun neden o renkleri yan yana getirdiği sorulunca sustum. Deseni yeniden oluşturmuş, seçimlerini henüz anlamamıştım.\nII. Usta oyuncunun hamlesini ezberledim. Benzer sandığım başka bir durumda aynı hamle işe yaramadı. Hamlenin nasıl yapıldığını biliyordum; hangi koşulda neden seçildiğini değil.\nİki metinden birlikte çıkarılabilecek en kapsamlı yargı hangisidir?",
        "options": [
          "Bir örneğin gerekçelerini kavramak, onu aynı biçimde yeniden oluşturabilmek için her zaman zorunludur.",
          "Bir örneği yeniden oluşturabilmek, onu ortaya çıkaran gerekçeleri ve koşulları kavramış olmak anlamına gelmez.",
          "Bir örneği başka bir durumda kullanamamak, onun nasıl oluşturulduğunun da öğrenilmediğini gösterir.",
          "Bir örneğin aynı biçimde yeniden oluşturulması, farklı koşullarda da işe yarayacağını gösterir."
        ],
        "correct": 1,
        "explanation": "İlk metin seçimlerin gerekçesini, ikincisi hamlenin gerekçe ve koşullarını vurgular. İkisinde de uygulamayı taklit etmek, altında yatan düşünceyi kavramaktan ayrılır. B bu ortak noktayı kapsar; diğer seçeneklerde metinlerin desteklemediği kesin sonuçlar vardır."
      },
      {
        "id": "t6-1-t13-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okul dergisine gelen yazıların çoğu aynı mesleği tanıtıyordu. Editör, bunların bir bölümünü sonraki sayılara ayırdı ve bu sayıya başka meslekleri anlatan yazılar ekledi. “Ayırdığım yazılarda bir eksik yok. Ama her yazı tek başına iyi olsa da sayının bütünü okura dar bir pencere sunabilir.” dedi.\nEditörün kararını açıklayan temel ayrım hangisidir?",
        "options": [
          "Bir yazının sonraki sayıda yayımlanması ile o yazının daha zayıf olması arasındaki ayrım.",
          "Farklı mesleklerden söz eden yazıların uzunlukları ile bilgi miktarları arasındaki ayrım.",
          "Yazıların ayrı ayrı yeterli olması ile birlikte sundukları konu çeşitliliğinin yeterli olması arasındaki ayrım.",
          "Bütün mesleklere eşit sayıda yer vermek ile en çok ilgi gören mesleğe öncelik vermek arasındaki ayrım."
        ],
        "correct": 2,
        "explanation": "Editör yazıların tek başına yeterli olduğunu, fakat bir araya geldiklerinde sınırlı konu çeşitliliği sunduğunu belirtir. C iki değerlendirme düzeyini birlikte açıklar. A yanlış bir eşleştirmeyi reddetse de kararın bütününü açıklamaz. B ve D metinde verilmeyen ölçütler ekler."
      },
      {
        "id": "t6-1-t13-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "(I) Büyüklerimizle konuşup eskiden oynanan oyunları derledik. (II) Oyunların adlarını ve kurallarını yazdık. (III) Adları farklı olan bazı oyunların kurallarının çok benzediğini gördük. (IV) Bu yüzden yalnızca adlara göre ayırmanın yanıltıcı olacağını düşündük. (V) Kuralları karşılaştırarak yeni bir liste hazırladık.\nIII ve IV. cümlelerin anlamı değiştirilmeden bu cümlelerin yerine aşağıdakilerden hangisi getirilirse hem II ile bağlantı hem V. cümlenin gerekçesi korunur?",
        "options": [
          "Oyunların kurallarını yazarken büyüklerimizin hangilerini daha çok sevdiğini de öğrenmek istedik.",
          "Farklı adlarla anılan oyunların tamamının aynı kurallarla oynandığını kesin olarak belirledik.",
          "Adlarını yazdığımız oyunların kurallarını öğrenmenin düşündüğümüzden uzun sürdüğünü fark ettik.",
          "Farklı adlar altında benzer kurallar bulunması, adları tek başına sınıflandırma ölçütü saymamamız gerektiğini gösterdi."
        ],
        "correct": 3,
        "explanation": "D, II’de yazılan ad ve kurallardan yola çıkarak gözlemi korur ve V’te kurallara göre yeni liste hazırlanmasını gerekçelendirir. A ilgi alanını değiştirir, B bazı oyunları bütün oyunlara geneller, C ise yeni sınıflandırma için gerekçe sunmaz."
      },
      {
        "id": "t6-1-t13-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir sınıf, kitap değişim köşesi için görseldeki üç duyuruyu hazırlamıştır. Öğretmen, “Bir kitabı alabilmek için mutlaka kitap getirmek gerektiği izlenimi oluşmasın; fakat getirilen kitapların uygunluk koşulları da kaybolmasın.” demiştir.\nDuyuruları birleştiren aşağıdaki açıklamalardan hangisi öğretmenin iki isteğini de karşılar?",
        "options": [
          "Köşeden kitap alabilmek için önce temiz ve eksiksiz bir kitap bırakmalısınız; kitaplar daha sonra okulda kalacaktır.",
          "Kitap getirmeden de köşeden kitap alabilirsiniz. Bırakacağınız kitap temiz ve eksiksiz olmalı; aldığınız kitabı okuyunca köşeye geri getirmelisiniz.",
          "Getireceğiniz kitabın temiz olması yeterlidir. Kitap almayan öğrenciler de getirdikleri kitabı daha sonra geri alabilir.",
          "Her öğrenci kitap getirmeden bir kitap alabilir ve aldığı kitabı kendinde tutabilir; yalnızca bırakılan kitapların eksiksiz olması gerekir."
        ],
        "correct": 1,
        "explanation": "İlk kart kitap getirmenin alma koşulu olmadığını, ikinci kart bırakılan kitabın hem temiz hem eksiksiz olmasını, üçüncü kart alınan kitabın geri getirilmesini belirtir. B üç bilgiyi birlikte korur. A olmayan bir ön koşul ekler; C eksiksizlik koşulunu atlar, D geri getirme kuralını kaldırır.",
        "imageUrl": "/grade6/turkce/test-13/soru-05.svg",
        "imageWidth": 360,
        "imageHeight": 730,
        "imageAlt": "Kitap getirmesen de köşeden bir kitap alabilirsin. Kitabın temiz ve eksiksiz olmalı. Aldığın kitabı köşeye geri getir. Yeni okurlara da sıra gelsin!"
      },
      {
        "id": "t6-1-t13-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrencinin yazısı için dört not alınmıştır:\nK: Sonuç cümlesi metindeki bütün örnekleri kapsıyor.\nL: Olayın geçtiği yer, iki cümlede birbiriyle çelişiyor.\nM: Bir örneğin metnin düşüncesine katkısı yok.\nN: Bir kişi adı küçük harfle başlıyor.\nÖğrenci henüz hiçbir düzeltme yapmamıştır. Görseldeki yönteme göre hangi uygulama doğrudur?",
        "options": [
          "Önce N düzeltilir; ardından L ile M istenen sırayla ele alınır.",
          "K olumlu olduğu için ilk iki aşama atlanıp doğrudan N düzeltilir.",
          "Önce L, sonra N düzeltilir; M ancak yazım yanlışlarından sonra ele alınır.",
          "Önce M, ardından L, son olarak N düzeltilir; K bir sorun belirtmediği için değiştirilmesi gerekmez."
        ],
        "correct": 3,
        "explanation": "M, katkı aşamasında; L, tutarlılık aşamasında; N, yazım aşamasında ele alınır. K bir eksiklik değil, olumlu değerlendirmedir. D hem aşama sırasını hem notların niteliğini doğru yorumlar. Diğer seçenekler sırayı değiştirir ya da olumlu bir nottan bütün aşamaların sorunsuz olduğu sonucunu çıkarır.",
        "imageUrl": "/grade6/turkce/test-13/soru-06.svg",
        "imageWidth": 360,
        "imageHeight": 810,
        "imageAlt": "Her örnek düşünceyi destekliyor mu? Gereksiz olanı çıkar. Bilgiler birbiriyle çelişiyor mu? Çelişkiyi düzelt. Harfleri ve ekleri kontrol et. Yanlışları düzelt. Sırayı izle. Bir aşamadaki sorunlar bitmeden geçme."
      },
      {
        "id": "t6-1-t13-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öyküde kahramanın kararını hemen vermemesine kızmıştım. “Bu kadar düşünmeye ne gerek var?” diye not düşmüştüm. Öykünün sonunda, onun o sırada bildiği bir ayrıntıyı ben yeni öğrendim: Seçeceği yol, yalnız kendisini değil kardeşini de etkileyecekti. İlk notumu silmedim; yanına “O an bildiklerimle yazmışım.” ekledim.\nAnlatıcının son davranışından çıkarılabilecek en kapsamlı yargı hangisidir?",
        "options": [
          "İlk değerlendirmesinin sınırlı bilgiye dayandığını fark etmiş; eski notunu yeni bakış açısıyla birlikte görünür bırakmıştır.",
          "Yeni bilgiyi öğrenince kahramanın bütün kararlarını doğru bulmuş; eski notunu yalnızca ilk izlenimini hatırlamak için korumuştur.",
          "İlk değerlendirmesinden vazgeçmemiş; yeni ayrıntının kahramanın davranışını anlamaya katkısı olmadığını belirtmiştir.",
          "İlk notunun yanlış anlaşılacağını düşünmüş; kahramanın gecikmesini değil, öykünün sonunu eleştirdiğini açıklamıştır."
        ],
        "correct": 0,
        "explanation": "“O an bildiklerimle yazmışım.” notu, ilk yargının bilgiyle sınırlı olduğunun fark edildiğini gösterir. İlk notu silmeyip yanına yeni not eklemesi iki bakışın da görünmesini sağlar. A iki ayrıntıyı birlikte yorumlar. B bütün kararları onaylama sonucunu ekler; C yeni bilginin etkisini reddeder; D eleştirinin hedefini değiştirir."
      },
      {
        "id": "t6-1-t13-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bu ortak noktayı belirledikten sonra, yazarların onu farklı örneklerle nasıl anlattığını not ettim.\nII. İki metinde de aynı sözcüklerin sık geçtiğini görünce önce konularının aynı olduğunu düşündüm.\nIII. Böylece yalnızca sözcük benzerliğine bakmanın yetmediğini, sözcüklerin hangi düşünceye hizmet ettiğini de incelemek gerektiğini anladım.\nIV. Oysa cümleleri bütünüyle okuyunca birinin yardımlaşmayı, diğerinin öğrenmeyi ele aldığını gördüm.\nV. Konuları farklı olsa da ikisinin de insanın başkalarıyla ilişki kurarak gelişmesini vurguladığını fark ettim.\nBu cümlelerle anlamlı bir paragraf oluşturmak için doğru sıralama hangisidir?",
        "options": [
          "II - V - I - IV - III",
          "II - IV - I - V - III",
          "II - IV - V - I - III",
          "IV - II - III - V - I"
        ],
        "correct": 2,
        "explanation": "II ilk izlenimi verir; IV’teki “oysa” bu izlenimi düzeltir. V farklı konuların ortak düşüncesini belirler; I’deki “bu ortak nokta” V’ye bağlanır. III bütün incelemenin sonucudur. A karşıtlığı geciktirir; B ortak nokta açıklanmadan ona gönderme yapar; D karşıtlıkla başlar ve sonucu erken getirir."
      },
      {
        "id": "t6-1-t13-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Sergi hafta içi yalnızca salı günü, hafta sonunda ise her iki gün açıktır. Bu hafta sergiyi açık olduğu bir günde gezdim.”\nBu sözlerden kesin çıkarılabilecek bilgi ile kesin çıkarılamayacak bilgiyi doğru ayıran seçenek hangisidir?",
        "options": [
          "Serginin pazartesi kapalı olduğu kesindir; konuşanın salı mı yoksa hafta sonu mu gittiği kesin değildir.",
          "Konuşanın salı günü gittiği kesindir; serginin cumartesi açık olup olmadığı kesin değildir.",
          "Serginin hafta içinde tek gün açık olduğu kesindir; pazar günü açık olup olmadığı kesin değildir.",
          "Konuşanın hafta sonu gittiği kesindir; hafta içinde hangi gün açık olduğu kesin değildir."
        ],
        "correct": 0,
        "explanation": "“Hafta içi yalnızca salı” pazartesi gününü dışlar; “hafta sonunda her iki gün” cumartesi ve pazarı içerir. Ziyaret günü salı, cumartesi veya pazar olabilir. A bir kesin bilgiyi, kesinleşmeyen ziyaret zamanından ayırır. B ve D olası bir zamanı kesin sayar; C ise açıkça verilen pazar bilgisini belirsiz sayar."
      },
      {
        "id": "t6-1-t13-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci taslağına “Kulübümüzde farklı görüşler vardı, bu yüzden birlikte çalışamadık.” yazmıştır. Olayı yeniden düşününce “Asıl sorun farklı düşünmemiz değildi; birbirimizin gerekçelerini dinlemememizdi.” diye not almıştır.\nTaslak cümlesi, bu nota uygun olarak ve olayın sonucu değiştirilmeden nasıl düzenlenmelidir?",
        "options": [
          "Kulübümüzde farklı görüşler vardı; birbirimizin gerekçelerini dinlemememiz görüş ayrılıklarını ortaya çıkardığı için birlikte çalışamadık.",
          "Kulübümüzde farklı görüşler vardı; hem bu farklılıklar hem birbirimizin gerekçelerini dinlemememiz yüzünden birlikte çalışamadık.",
          "Kulübümüzde farklı görüşler vardı; birbirimizin gerekçelerini dinleseydik bütün görüş ayrılıkları ortadan kalkar ve birlikte çalışabilirdik.",
          "Kulübümüzde farklı görüşler vardı; birbirimizin gerekçelerini dinlemediğimiz için birlikte çalışamadık."
        ],
        "correct": 3,
        "explanation": "Not, görüş farklılığını değil, gerekçelerin dinlenmemesini çalışamamanın nedeni olarak gösterir. D olayı ve sonucu koruyarak yalnız neden ilişkisini düzeltir. A dinlememeyi görüş ayrılıklarının da nedeni sayar. B farklılığı neden olmaktan çıkarmaz. C dinlemenin bütün görüş ayrılıklarını gidereceğini varsayar."
      }
    ],
    "test14": [
      {
        "id": "t6-1-t14-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "Oyunda yolcuyu karşılayacak oyuncu, sahneye getirmesi gereken sandalyeyi unuttu. Yolcu rolündeki Deniz, sandalyenin bulunması gereken yere bakıp “Demek burada konuklar ayakta ağırlanıyor!” dedi. Arkadaşı da “Yol yorgunluğunu unutturacak manzaramız var.” diyerek pencereye yöneldi. Perde kapanınca Deniz, “Sandalyeyi bulamadık ama sahneyi kaybetmedik.” dedi.\nDeniz’in son sözüyle anlatmak istediği aşağıdakilerden hangisidir?",
        "options": [
          "Eksik eşyanın yerini başka bir eşya tutmasa da oyuncular, seyirciye hazırlıkta yapılan yanlışı açıklamayı başarmıştır.",
          "Bir aksaklığı rollerine uygun sözlerle oyunun içine alarak sahnenin sürmesini sağlamışlardır.",
          "Oyuncular, eksikliğin oyunun akışını etkilediğini kabul etmeden önceden hazırlanmış konuşmalarını sürdürmüştür.",
          "Oyuncular, aksaklığı geçici olarak gizlemek için karakterlerinin dışına çıkıp kendi aralarında çözüm aramıştır."
        ],
        "correct": 1,
        "explanation": "Sandalyenin yokluğu gizlenmez; karakterlerin konuşmasına katılır. Oyuncular rollerini sürdürerek aksaklığı sahnenin parçasına dönüştürür. B bunu açıklar. A seyirciye gerçek nedenin açıklandığını, C sözlerin aynen korunduğunu, D karakter dışına çıkılıp çözüm arandığını varsayar."
      },
      {
        "id": "t6-1-t14-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bir doğa gözlemcisi, uzaktan gördüğü kuşu not ederken tür adının yanına soru işareti koydu. Arkadaşı bunu silmesini önerince “Bu işaret kuş hakkında değil, benim bilgimin sınırı hakkında.” dedi.\nII. Bir çevirmen, eski bir mektuptaki silik sözcüğü tahmin ederek yazmak yerine boşluk bıraktı ve nedenini dipnotta belirtti. Okurun akıcı bir cümle yerine eksikliği görmesini tercih etti.\nBu metinlerin ortak düşüncesini en doğru yansıtan yargı hangisidir?",
        "options": [
          "Bilginin güvenilirliği, onu aktaran kişinin çalışma yöntemini ayrıntılarıyla anlatmasına bağlıdır.",
          "Eksik bilgiyi okurun tamamlamasına fırsat vermek, araştırmacının yorum yapmasından daha uygundur.",
          "Bir kayıttaki belirsizliği belirtmek, kaydın geri kalanının doğruluğunu da güvence altına alır.",
          "Bilinenlerle tahmin edilenlerin sınırını göstermek, eksiksiz görünmekten daha değerlidir."
        ],
        "correct": 3,
        "explanation": "İki kişi de eksikliği görünür kılar; bilgi ile tahmin arasındaki sınırı korumayı, tam görünmeye tercih eder. D ortaktır. A yöntemlerin ayrıntılarıyla açıklanmasını şart sayar; oysa metinlerde bilginin sınırı belirtilir. B okurun boşlukları doldurmasının amaçlandığını varsayar. C bir belirsizliğin açıklanmasını, kalan bütün bilginin doğruluk güvencesine dönüştürür."
      },
      {
        "id": "t6-1-t14-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir röportajda koşucuya “Yarışı kazandığınızda ilk kimi düşündünüz?” diye soruldu. Koşucu, “Bitiş çizgisinde adım söylendi ama sabahları beni uyandıran kardeşimin, yağmurda antrenmana gelen arkadaşımın adı söylenmedi.” yanıtını verdi. Muhabir, bu yanıtı “Koşucu, başarısının yalnız kendisine ait sayılmasına karşı çıkıyor.” diye özetledi.\nBu özetin doğruluğunu en güçlü biçimde açıklayan seçenek hangisidir?",
        "options": [
          "Koşucu, kendi adının duyurulmasıyla destek verenlerin adlarının anılmamasını karşılaştırarak başarıdaki görünmeyen payları vurgulamıştır.",
          "Koşucu, kendisine verilen desteği anlatırken yarış sonucunun duyurulma biçimini başarısının başlıca nedeni olarak göstermiştir.",
          "Koşucu, desteği vurgulamak için kendi emeğini dışarıda bırakmış ve yarışı kazanmasında yalnız yakınlarının payı bulunduğunu belirtmiştir.",
          "Koşucu, yakınlarının desteğini anarken yarış sonucundan çok destek verenlerin birbirinden farklı fedakârlıklarını karşılaştırmıştır."
        ],
        "correct": 0,
        "explanation": "A, “adım söylendi ama” karşıtlığının işlevini doğru açıklar: görünen kişisel başarının arkasında başkalarının da desteği vardır. B duyuruyu başarı nedeni sayar. C koşucunun kendi emeğini yok saydığını ekler. D yanıtın odağını kişisel başarı–ortak destek karşıtlığından yakınların fedakârlıklarını karşılaştırmaya kaydırır."
      },
      {
        "id": "t6-1-t14-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir belgeselde aynı nehrin hem köpüklü, hızlı akan bölümü hem de durgun görünen kıyısı gösterildi. Anlatıcı, “Bu iki görüntüden yalnız birini seçseydik nehir hakkında daha kolay, fakat daha eksik bir şey söylemiş olurduk.” dedi.\nAnlatıcının düşüncesine uygun bir değerlendirmede aşağıdakilerden hangisi birlikte bulunmalıdır?",
        "options": [
          "Her görüntünün nehrin bir yönünü yansıtabileceği; bu nedenle iki görüntü arasında ortak bir özellik bulunamayacağı.",
          "İki görüntünün de doğru olabileceği; nehrin genel özelliğinin anlatımda daha uzun gösterilen bölümden çıkarılabileceği.",
          "Her iki görüntünün de nehrin bir yönünü yansıtabileceği; tek yönün nehrin bütününün özelliği gibi sunulmaması gerektiği.",
          "Tek görüntünün nehir hakkında eksik bilgi verebileceği; ikinci görüntü eklendiğinde nehirle ilgili başka bilgiye gerek kalmayacağı."
        ],
        "correct": 2,
        "explanation": "C hem her görüntünün bir yönü gösterebileceğini hem bu yönün bütünün yerine konmaması gerektiğini korur. A farklı yönler arasında ortaklık bulunamayacağını ekler. B gösterim süresini genelleme ölçütü yapar. D iki görüntünün nehir hakkında eksiksiz bilgi vereceğini varsayar. Anlatıcı bunları söylemez."
      },
      {
        "id": "t6-1-t14-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Müzedeki çizim hazırlandıktan sonra aynı kabın sol tarafına ait olduğu belirlenen bir kulp bulunur. Bu parça, çizimde solda önerilen kulpla biçim ve boyut bakımından aynıdır; başka yeni parça bulunmaz.\nÇizimin açıklama anahtarı korunarak yeni bulgu işlenecektir. Bilinenlerle önerilenlerin sınırını koruyan güncelleme hangisidir?",
        "options": [
          "Soldaki kulp ve onunla aynı biçimde çizilen sağdaki kulp düz çizgiye çevrilir; üst gövde kesik kalır.",
          "Soldaki kulp düz çizgiye çevrilir; sağdaki kulp ve üst gövde kesik, alt gövde düz kalır.",
          "Soldaki kulp ile ona bağlanan üst gövde düz çizgiye çevrilir; sağdaki kulp kesik kalır.",
          "Soldaki kulp kesik bırakılır; artık biçimi desteklenen sağdaki kulp düz çizgiye çevrilir."
        ],
        "correct": 1,
        "explanation": "Yeni bulunan parça yalnızca soldaki kulptur. Anahtara göre bunun çizgisi düz olmalıdır; alt gövde zaten buluntudur. Sağ kulp ve üst gövde hâlâ öneridir. B her bölümün bilgi durumunu korur. Benzer görünmeleri sağ kulpun bulunduğunu kanıtlamaz (A ve D); kulpun bulunması üst gövdenin de bulunduğu anlamına gelmez (C).",
        "imageUrl": "/grade6/turkce/test-14/soru-05.svg",
        "imageAlt": "Kabın alt gövdesi düz, üst gövdesi ve iki kulpu kesik çizgilerle gösterilir. Anahtar: Düz çizgi bulunan parça; kesik çizgi önerilen tamamlama.",
        "imageWidth": 360,
        "imageHeight": 540
      },
      {
        "id": "t6-1-t14-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Görselde aynı söyleşinin planlanan ve gerçekleşen akışları verilmiştir.\nBu iki akış karşılaştırıldığında aşağıdaki değerlendirmelerden hangisi kesin olarak yapılabilir?",
        "options": [
          "Sorulara ayrılan süre uzadığı için anlatımın ikinci kısmı kısaltılmıştır.",
          "Sorular üçüncü sırada kaldığından anlatımla ilişkili konumları değişmemiştir.",
          "Soruların sıra numarası değişmemiş, ancak anlatım tamamlanmadan sorulara geçilmiştir.",
          "Gerçekleşen akışta aşama sayısı arttığı için söyleşi planlanandan uzun sürmüştür."
        ],
        "correct": 2,
        "explanation": "Sorular her iki listede de üçüncü sıradadır; ancak planda anlatımdan sonra, gerçekleşen akışta anlatımın iki kısmı arasındadır. C sıra numarası ile anlatıma göre konumu ayırır. B aynı sıra numarasını aynı ilişki sanır. A ve D süre bilgisi gerektirir; görselde süreler verilmemiştir.",
        "imageUrl": "/grade6/turkce/test-14/soru-06.svg",
        "imageAlt": "Plan: Tanışma, Anlatım, Sorular, Kapanış. Gerçekleşen: Tanışma, Anlatım ilk kısım, Sorular, Anlatım devamı, Kapanış.",
        "imageWidth": 360,
        "imageHeight": 850
      },
      {
        "id": "t6-1-t14-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir aşçı, öğrencilerinden aynı yemeği hazırlamalarını istedi. Ece tarifteki süreye uyarak ocağı kapattı; Bora ise sebzelerin henüz yumuşamadığını fark edip biraz daha bekledi. Aşçı, “Bora tarife karşı gelmedi; tarifin ne için verildiğini unutmadı.” dedi.\nAşçının sözünden çıkarılabilecek en kapsamlı yargı hangisidir?",
        "options": [
          "Bir yönergeyi amacını gözeterek uygulamak, değişen koşullarda ayrıntılarını değerlendirmeyi gerektirebilir.",
          "Bir yönergenin uygunluğu, uygulayan kişinin alışkanlıklarına ne kadar uyduğuyla değerlendirilmelidir.",
          "Bir uygulamada iyi sonuç veren değişiklik, aynı yönergenin sonraki uygulamalarında da korunmalıdır.",
          "Bir yönergenin amacını, uygulama sırasında kendiliğinden ortaya çıkan sonuca uygun olacak biçimde değiştirmek gerekir."
        ],
        "correct": 0,
        "explanation": "Bora pişirme amacını korur, süreyi sebzelerin durumuna göre değerlendirir. A bu dengeyi anlatır. B metinde olmayan kişisel alışkanlığı ölçüt yapar. C bir uygulamadaki değişikliği sonraki farklı koşullara geneller. D ise ayrıntıyı amaca göre değerlendirmek yerine amacı ortaya çıkan sonuca göre değiştirir."
      },
      {
        "id": "t6-1-t14-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir gezgin “Bu kasabada kimse acele etmiyor.” diye yazmıştı. Sonradan notuna şu açıklamayı ekledi: “Burada yalnızca bir pazar sabahı bulundum; o da meydanda oturarak geçti.”\nİlk cümleyi bu açıklamanın sınırlarına uygun hâle getiren seçenek hangisidir?",
        "options": [
          "Bu kasabada pazar günleri bütün insanlar işlerini ağırdan alıyor.",
          "Bu kasabanın meydanında oturanlar hiçbir zaman acele etmiyor.",
          "Bir pazar sabahı bu kasabanın her yerinde sakin bir yaşam vardı.",
          "Bu kasabanın meydanında geçirdiğim pazar sabahında çevremdekiler telaşsız görünüyordu."
        ],
        "correct": 3,
        "explanation": "D gözlemi tek bir zaman, belirli bir yer ve gözlenen kişilerle sınırlar; “görünüyordu” gözlem niteliğini korur. A bir sabahı bütün pazarlara ve herkese, B gözlemi her zamana, C meydanı kasabanın her yerine genişletir."
      },
      {
        "id": "t6-1-t14-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Bir deniz fenerinin ışığını anlatan şiiri okurken sözcüklerin neyi gösterdiğini anlayabiliyordum. Yine de dizeler arasında bir uzaklık hissediyordum. Aylar sonra sisli bir kıyıda beklerken karşıdan aralıklarla gelen ışığı gördüm. Şiirdeki sözcükler değişmedi; fakat aralarındaki sessizlik artık bana boş gelmiyordu.”\nBu parçanın son cümlesiyle ilgili hangi yorum, metnin bütününe uygundur?",
        "options": [
          "Anlatıcı, şiirde anlamını bilmediği sözcükleri kıyıda gördüğü nesnelerle eşleştirerek öğrenmiştir.",
          "Anlatıcının yaşadığı deneyim, önceden sözcük düzeyinde anladığı şiirin duygu dünyasına yaklaşmasını sağlamıştır.",
          "Anlatıcı, şairin sessizlik hakkında yeterli açıklama yapmadığını kıyıya gidince fark etmiştir.",
          "Anlatıcı, gördüğü ışıkla şiirin gerçeğe uymadığını anlayınca dizelerdeki boşlukları zihninde düzeltmiştir."
        ],
        "correct": 1,
        "explanation": "Başta sözcüklerin neyi gösterdiği anlaşılır; eksik olan sözlük bilgisi değildir. Yaşantı, şiirde sezilen uzaklığı azaltır. B bu değişimi açıklar. A başlangıç bilgisiyle çelişir; C ve D metinde olmayan kusur ve düzeltme düşünceleri ekler."
      },
      {
        "id": "t6-1-t14-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir seramik ustası, öğrencisinin eğri duran kâsesini gösterip “Bu biçimi neden seçtin?” diye sordu. Öğrenci “Seçmedim, elim kaydı.” dedi. Usta, “Öyleyse şimdi karar ver: Bu eğrilik kâsenin kullanımını engelliyor mu, yoksa ona başka bir özellik mi katıyor?” diye karşılık verdi.\nUstanın yaklaşımını en doğru değerlendiren seçenek hangisidir?",
        "options": [
          "İsteyerek yapılmayan her ayrıntının düzeltilmesini, işin başlangıçtaki tasarıma benzemesini istemektedir.",
          "Öğrencinin elinin kaymasını yeni bir teknik sayarak bütün kâselerin aynı biçimde yapılmasını önermektedir.",
          "Ortaya çıkan ayrıntının kazayla oluşmasına değil, işlevine ve etkisine bakılarak korunmasına ya da değiştirilmesine karar verilmesini istemektedir.",
          "Kâsenin kullanımını etkileyen bir ayrıntının, ilgi çekici görünüyorsa değerlendirilmeden korunmasını önermektedir."
        ],
        "correct": 2,
        "explanation": "Usta kazayla oluşan eğriliği hemen hata veya yenilik olarak adlandırmaz; kullanım ve özellik açısından değerlendirmeye açar. C bu koşullu yaklaşımı korur. A her kazayı düzeltir, B her kazayı yenilik sayar, D işlevi dikkate almadan görünüşü yeterli bulur."
      }
    ],
    "test15": [
      {
        "id": "t6-1-t15-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir masal anlatıcısı, her gösteride aynı masalı anlatırdı. Bir gün bir çocuk, “Sonunu zaten biliyoruz.” dedi. Anlatıcı, “Öyleyse bu kez kahramanın oraya nasıl vardığını dinleyin.” diye karşılık verdi. O gün çocuklar, daha önce fark etmedikleri duraksamalardan ve küçük kararlardan söz ederek ayrıldılar.\n\nÇocukların gösteri sonundaki konuşmaları, anlatıcının karşılığını hangi yönden destekler?",
        "options": [
          "Sonu bilmenin ilgiyi bütünüyle ortadan kaldırmadığını; dikkatin sonuçtan o sonucu hazırlayan seçimlere kayabildiğini gösterir.",
          "Sonu önceden bilmenin, kahramanın küçük kararlarının sonucu nasıl değiştireceğini tahmin etmeyi kolaylaştırdığını gösterir.",
          "Daha önce fark edilmeyen kararları anlamanın, bilinen sona ilişkin beklentiyi değiştirmenin ön koşulu olduğunu gösterir.",
          "Aynı masalı yeniden dinlemenin, farklı yorumları azaltıp sonuca götüren tek doğru açıklamada buluşmayı sağladığını gösterir."
        ],
        "correct": 0,
        "explanation": "Çocuklar aynı sona ulaşan masalda bu kez küçük kararları ve duraksamaları fark etmiştir. İlgi sonuçtan sürece kaymıştır. Sonucun değişeceği, sona ilişkin beklentiyi değiştirmenin gerekeceği veya tek bir yorumda birleşildiği söylenmez."
      },
      {
        "id": "t6-1-t15-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bir ressam, sisli bir limanı çizerken uzaktaki tekneleri birkaç çizgiyle gösterir. “Onları yakındakiler kadar belirgin çizseydim sis görünmezdi.” der.\nII. Bir öykücü, kahramanının vedalaşırken söylemek istediği sözleri yazmaz; yalnızca elinde buruşturduğu mendili anlatır. “Her duygunun adını koyarsam okura ne kalır?” diye sorar.\n\nBu iki sanatçının seçimlerini birlikte açıklayan yargı hangisidir?",
        "options": [
          "Sanatçılar, eksik bıraktıkları ayrıntıların okur ve izleyici tarafından gerçekte oldukları biçimiyle tamamlanmasını amaçlar.",
          "Sanatçılar, asıl anlatmak istediklerini geri plana çekip dikkati açıkça gösterdikleri nesnelere yöneltir.",
          "Bazı ayrıntıları açıkça vermemek, anlatılmak isteneni sezdirmenin bir yolu olabilir.",
          "Sanatçılar, anlatımı farklı yorumlara kapatmak için ayrıntıları azaltıp tek bir ipucunu öne çıkarır."
        ],
        "correct": 2,
        "explanation": "Ressamın belirsiz bıraktığı tekneler sisi, öykücünün yazmadığı sözler duyguyu sezdirir. Eksik ayrıntıları gerçekteki biçimiyle tamamlama hedefi yoktur; amaçlanan etki geri plana atılmaz ve yorum tek bir anlamla sınırlandırılmaz."
      },
      {
        "id": "t6-1-t15-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci, köyde çektiği kısa filmin adını “Yalnız Çınar” koymuştu. Arkadaşı, “Ama ağacın çevresinde sürekli insanlar var.” deyince öğrenci, “Ben insan sayısını değil, konuşmaların hep telefonlardaki kişilerle yapılmasını düşündüm.” dedi.\n\nArkadaşının itirazıyla öğrencinin açıklaması arasındaki ayrımı hangi yorum doğru kurar?",
        "options": [
          "Arkadaşı ağacın çevresindeki insanları, öğrenci ise telefonla konuşulan kişileri sayarak yalnızlığın derecesini karşılaştırmıştır.",
          "Arkadaşı yalnızlığı çevrede insan bulunmamasıyla, öğrenci ise aynı yerdekilerin birbirine ilgi yöneltmemesiyle ilişkilendirmiştir.",
          "Arkadaşı ağacı yalnızlığın nedeni sayarken öğrenci insanların ağaçtan uzaklaşmasını yalnızlığın sonucu saymıştır.",
          "Arkadaşı ağacın yalnızlığını geçici görürken öğrenci telefonla konuşanların her yerde yalnız kalacağını savunmuştur."
        ],
        "correct": 1,
        "explanation": "Arkadaş insan kalabalığını yalnızlıkla bağdaştıramaz; öğrenci ise bedenen bir arada olup ilgiyi uzaktakilere yöneltmeye dikkat çeker. Konuşulan kişileri sayma, ağacı yalnızlığın nedeni görme ya da telefonla konuşanların her yerde yalnız olduğu yargıları yoktur."
      },
      {
        "id": "t6-1-t15-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "Okul radyosunun bir dinleyicisi şöyle diyor: “Programın haftada bir yayımlanmasını sorun etmiyorum. Beni uzaklaştıran, farklı konuklara hep aynı soruların sorulması. Yayın sayısını artırmanıza karşı değilim; ama soru biçimi değişmeden bu artışın programı benim için daha ilgi çekici yapacağını sanmıyorum.”\n\nBu dinleyicinin sözlerini anlam kaybına uğratmadan özetleyen cümle hangisidir?",
        "options": [
          "Dinleyici, sorular yenilenirse yayın sayısının da mutlaka artırılması gerektiğini; aksi hâlde programın ilgi çekmeyeceğini düşünüyor.",
          "Dinleyici, farklı konuklara aynı soruların sorulmasını yayınların seyrekliğine bağlıyor ve daha sık yayınla bu sorunun çözülebileceğini düşünüyor.",
          "Dinleyici, soruların değişmesini istiyor; yayınların artırılmasının ise programın ilgi çekiciliğini her durumda azaltacağını düşünüyor.",
          "Dinleyici, yayınların artırılmasına karşı çıkmıyor; ancak kendisini uzaklaştıran tekrarın giderilmediği bir sıklık artışını yeterli görmüyor."
        ],
        "correct": 3,
        "explanation": "Dinleyici yayın sıklığından yakınmıyor ve artışa karşı da değil; yalnızca aynı sorular sürerken artışı yeterli bulmuyor. A artışı zorunlu kılar, B sorunun nedenini sıklıkla değiştirir, C artışı her koşulda olumsuz sayar; bunlar konuşmacının sözünü aşar."
      },
      {
        "id": "t6-1-t15-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir fotoğrafın geniş görüntüsü ile bundan kesilerek elde edilen paylaşım aşağıda verilmiştir. Paylaşımın altına “Parkımız artık tertemiz!” yazılmıştır.\n\nGörsel ile bu söz arasındaki ilişkiyi en doğru değerlendiren yorum hangisidir?",
        "options": [
          "Geniş görüntüde çöp bulunması, parkın hiçbir bölümünün temiz olmadığını gösterir.",
          "Paylaşım temiz bölümü gösterir; ancak bu bölümün seçilmesi parkın tamamına ilişkin sözü doğrulamaz.",
          "Çöpler kadrajın dışında kaldığı için parkın paylaşım yapılmadan önce temizlendiği anlaşılır.",
          "İki görüntüde aynı bankın yer alması, paylaşımın parkın bütün durumunu yansıttığını kanıtlar."
        ],
        "correct": 1,
        "explanation": "Aynı anda alınmış geniş görüntünün kenarındaki çöpler, daraltılan kadrajda görünmez. Temiz bir bölümün görüntüsü bütün parkın temizlendiğini kanıtlamaz. Ancak parkın hiçbir yeri temiz değildir sonucu da çıkarılamaz.",
        "imageUrl": "/grade6/turkce/test-15/soru-05.svg",
        "imageAlt": "Aynı fotoğrafın geniş ve dar kadrajları. Geniş görüntüde bankın sağında çöpler, bankı çevreleyen kesim çizgisi var. Paylaşımda yalnızca bank ve temiz çevresi görünüyor.",
        "imageWidth": 360,
        "imageHeight": 760
      },
      {
        "id": "t6-1-t15-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bu sahne bir öyküye aktarılırken anlatıcı yalnızca Emre’nin görebildiği ve duyabildiği bilgileri verecektir. Başka kişilerin düşüncelerini aktarmayacak, onların söylediklerini de doğrulanmış bilgi gibi sunmayacaktır.\n\nBu iki koşula da uyan anlatım hangisidir?",
        "options": [
          "Duru, Deniz’e aldığı hediyeyi Emre’den saklamak için kutudakilerin defter olduğunu söyledi; Emre ona masada yer gösterdi.",
          "Duru, defterlerinin bulunduğu kutuyu taşıyordu; Emre kutuyu masaya bırakabileceğini söyledi.",
          "Duru kutuda defter bulunduğunu söyledi; Emre, kutunun Deniz’e alınan hediye olduğunu anlamadan ona masada yer gösterdi.",
          "Duru, içindekilerin defter olduğunu söylediği kapalı kutuyu tutuyordu; Emre kutuyu masaya bırakabileceğini söyledi."
        ],
        "correct": 3,
        "explanation": "Emre kapalı kutuyu görebilir ve Duru’nun sözünü duyabilir; ancak kutunun içini veya Duru’nun düşüncesini bilemez. D seçeneği “defter” bilgisini Duru’nun sözü olarak aktarır. A ve C düşünce balonundaki gizli bilgiyi anlatıma taşır; B ise söyleneni doğrulanmış içerik bilgisi yapar.",
        "imageUrl": "/grade6/turkce/test-15/soru-06.svg",
        "imageAlt": "Duru, kurdeleli kapalı bir kutu tutuyor. Noktalı düşünce balonunda Deniz’e aldığım hediyeyi Emre görmesin diyor. Düz konuşma balonunda İçinde defterlerim var diyor. Emre’nin konuşma balonunda Masaya bırakabilirsin yazıyor.",
        "imageWidth": 360,
        "imageHeight": 760
      },
      {
        "id": "t6-1-t15-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir çevirmen, çocuk kitabındaki espriyi sözcük sözcük başka dile aktardığında kimsenin gülmediğini fark etti. Bunun üzerine, aynı duruma uygun başka bir söz oyunu kullandı. “Sözcükler uzaklaştı ama okurun gülümsemesi yaklaştı.” dedi.\n\nBu çeviriyi “Metne bağlı kalınmamış.” diye eleştiren birine hangi cevap, çevirmenin ölçütünü aşmadan verilebilir?",
        "options": [
          "Gülümsetme sağlandığında olayların ve kahramanların da değiştirilmesi metne bağlılığı bozmaz.",
          "Kaynak dildeki söz oyununun anlaşılmaması, okurların bu dili öğrenmesi gerektiğini gösterir.",
          "Aynı durumu ve gülümsetme amacını koruyan bir değişiklik, sözcükler farklı olsa da metne bağlılıkla bağdaşabilir.",
          "Aynı sözcüklerin korunması yerine çevirmenin kişisel anlatımının öne çıkması bütün çevirilerde esas alınmalıdır."
        ],
        "correct": 2,
        "explanation": "Çevirmen aynı durumu ve gülümsetme amacını koruyarak söz oyununu değiştirmiştir. Bu sınırlı değişiklik C’deki savunmayı destekler; olay ve kahramanların da değiştirilebileceği, okurların dil öğrenmesi gerektiği veya tüm çevirilerde kişisel anlatımın esas olduğu sonuçlarına dayanak vermez."
      },
      {
        "id": "t6-1-t15-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir gezi yazarı, “Bu kasabayı anlatırken önce pazarın kokularını yazdım. Sonra fark ettim ki benim için yeni olan bu kokular, pazarcılar için her sabahın alışılmış parçasıydı. Yazımı onların sabah hazırlıklarıyla sürdürdüm.” diyor.\n\nYazarın bu seçimiyle ilgili hangi değerlendirme yapılabilir?",
        "options": [
          "İlk izlenimini silmeden ona yerel yaşamın bakışını eklemiş; kendi yenilik duygusunu pazarın değişmez özelliği gibi sunmamaya yönelmiştir.",
          "İlk gözleminin yanlış olduğunu anlayıp kokuları çıkarmış; kasabayı yalnızca pazarcıların anlatımıyla tanıtmaya yönelmiştir.",
          "Pazarcıların alıştığı ayrıntıların önemsiz olduğuna karar vermiş; yalnız ziyaretçilerin fark edebileceği özelliklere yönelmiştir.",
          "Bir yerin gerçek niteliğinin ziyaretçilere kapalı olduğunu kabul etmiş; kişisel gözlem yerine yalnızca aktarılan bilgilere yönelmiştir."
        ],
        "correct": 0,
        "explanation": "Yazar kokuların kendisine yeni, pazarcılara alışılmış geldiğini fark eder ve yazısını onların hazırlıklarıyla sürdürür. İlk bölümünü sildiğini söylemez; farklı bakışı ekler. Gözlemini yanlış sayma, yerel ayrıntıları önemsiz görme ve ziyaretçinin bütünüyle anlayamayacağı yargıları metni aşar."
      },
      {
        "id": "t6-1-t15-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıdaki cümlelerle anlamlı bir paragraf oluşturulacaktır.\n\nI. Bu ilk kayıtta hangi sesin hangi mekâna ait olduğunu bulmak zordu.\nII. Sonraki kayıtta ise mikrofonu her seferinde tek bir noktada birkaç dakika tuttular.\nIII. Öğrenciler, okulun ses haritasını hazırlamak için koridorları dolaşarak kayıt yaptılar.\nIV. Böylece mekânların kendine özgü seslerini ayırt edebildiler; ama bu kez seslerin birbirine nasıl karıştığı kayboldu.\nV. Çünkü yürürken aldıkları kayıtta sınıftan, bahçeden ve merdivenden gelen sesler peş peşe değil, iç içe duyuluyordu.\n\nHangi sıralama, hem sorunun gerekçesini hem yeni yöntemin kazancıyla kaybını doğru bağlar?",
        "options": [
          "III – I – II – V – IV",
          "III – I – V – II – IV",
          "III – V – II – I – IV",
          "III – II – IV – I – V"
        ],
        "correct": 1,
        "explanation": "III ilk çalışmayı tanıtır; I “bu ilk kayıt” ile ona bağlanır. V, I’deki ayırt etme güçlüğünün nedenidir. II sonraki yönteme geçer, IV ise bu yöntemin kazancını ve kaybını birlikte açıklar. Diğer sıralamalarda ilk kaydın nedeni ya da “böylece” ile belirtilen sonuç yanlış aşamaya bağlanır."
      },
      {
        "id": "t6-1-t15-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir derginin “Birlikte Yaşamak” sayısı için şu paragraf yazılmıştır:\n“Mahalledeki ortak fırında herkes kendi hamurunu getirir. Ekmeklerin biçimleri de kullanılan unlar da farklıdır. Fırıncı, hepsini tek biçime sokmaya çalışmaz; her birinin pişmesi için gereken yeri ve süreyi gözetir. Ortak bir sıcaklık, farklı ekmekleri aynılaştırmadan pişirir.”\n\nBu paragrafın sayının temasına katkısını en iyi açıklayan yorum hangisidir?",
        "options": [
          "Ortak yaşamda farklılıklara yer verilse de ortak işin yürüyebilmesi için ihtiyaçların zamanla birbirine benzemesi gerektiğini sezdirir.",
          "Ortak bir düzenin, herkese aynı yeri ve aynı süreyi ayırarak farklılıklardan doğan güçlükleri aşabileceğini belirtir.",
          "Farklı ihtiyaçları korumanın en uygun yolunun, ortak alanın kullanımını ayrı alanlarla değiştirmek olduğunu düşündürür.",
          "Ortak yaşamın, herkesi aynılaştırmak yerine farklı ihtiyaçları gözeten bir düzenle kurulabileceğini sezdirir."
        ],
        "correct": 3,
        "explanation": "Ortak fırın ortak yaşamı, farklı ekmeklerin ayrı yer ve süre ihtiyacı farklı ihtiyaçları düşündürür. Birliktelik sürerken farklılıklar gözetilir. İhtiyaçların zamanla benzeşmesi, herkese aynı yer ve sürenin ayrılması ya da ortak alan yerine ayrı alanlara geçilmesi anlatılmaz."
      }
    ],
    "test16": [
      {
        "id": "t6-1-t16-01",
        "subject": "turkce",
        "term": 1,
        "prompt": "Köye yeni yol yapılınca yolculuk kısaldı. Anlatıcı önce buna sevindi; fakat artık eski patikadan geçmedikleri için yol üstündeki çeşmede verilen molalar da sona erdi. “Köye daha çabuk varıyoruz ama yolculuğun bir kısmını geride bıraktık.” diye yazdı.\n\nAnlatıcının son cümlesini, önceki iki tutumunu da koruyarak yorumlayan seçenek hangisidir?",
        "options": [
          "Yeni yolun zaman kazandırmasını olumlu bulsa da bunun eski yolculukların bütün değerini ortadan kaldırdığını düşünüyor.",
          "Eski molaların bitmesini kayıp saydığı için yolculuğun kısalmasını da artık bir yarar olarak görmüyor.",
          "Ulaşımın kolaylaşmasını değerli bulurken yolda yaşanan kimi alışkanlıkların kaybolduğuna da dikkat çekiyor.",
          "Yolun kısalmasını, köye duyduğu ilginin azalmasının ve orada daha az zaman geçirmesinin nedeni sayıyor."
        ],
        "correct": 2,
        "explanation": "İlk sevinç yeni yolun zaman kazandırmasına, son cümledeki kayıp ise çeşme molalarının sona ermesine bağlıdır. C bu iki yönü birlikte korur. A geçmiş yolculukların bütün değerinin yok olduğunu, B kazanımın artık yarar sayılmadığını, D köyde geçirilen zamanın azaldığını ekler; bunlar metinde yoktur."
      },
      {
        "id": "t6-1-t16-02",
        "subject": "turkce",
        "term": 1,
        "prompt": "“Tren uzaklaştı, peron boşaldı.\nEl sallayan eller ceplere döndü.\nBen hâlâ oradaydım;\nGiden yalnız tren değildi.”\n\nBu dizelerin sonuncusu, önceki dizelerin anlamını nasıl etkiler?",
        "options": [
          "Fiziksel bir ayrılışın, anlatıcı için kişisel bir kayıp duygusu da taşıdığını sezdirir.",
          "Önceki dizelerdeki boşalma görüntüsünü, peronda kalan kişinin artık hiçbir bağının bulunmadığı yargısına dönüştürür.",
          "Trenin uzaklaşmasıyla anlatıcının ayrılık duygusunun da uzaklaşıp sona erdiğini düşündürür.",
          "Perondaki insanların ortak davranışını, hepsinin aynı kişisel kaybı yaşadığının kanıtı olarak sunar."
        ],
        "correct": 0,
        "explanation": "Son dize trenin ayrılışına anlatıcı için adı belirtilmeyen kişisel bir kayıp anlamı ekler. B hiçbir bağ kalmadığına, C ayrılık duygusunun sona erdiğine, D bütün insanların aynı kaybı yaşadığına ulaşır. Dizeler bu daha geniş veya ters yorumları desteklemez."
      },
      {
        "id": "t6-1-t16-03",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir öğrenci, hazırladığı doğa dergisinde karıncaların yuvalarını uzun uzun anlatır. Arkadaşı “Okur bunu başka yerden de öğrenebilir.” deyince şöyle cevap verir: “Doğru, ama ben aynı yuvayı üç hafta izledim. Yağmurdan sonraki değişiklikleri ilk günkü çizimimle yan yana koydum.”\n\nÖğrencinin cevabı, arkadaşının eleştirisine karşı hangi ayrımı öne çıkarır?",
        "options": [
          "Bilinen bir konunun, daha çok ayrıntı eklenerek önceki anlatımlardan mutlaka daha güvenilir hâle getirilebileceğini",
          "Bir gözlemin özgün sayılması için daha önce hiçbir kaynakta yer almamış bir canlı türünü konu alması gerektiğini",
          "Aynı yuvayı izleyerek edinilen bilgilerin, bütün karınca yuvalarındaki değişimi açıklamaya yeteceğini",
          "Bilinen bir konunun, belirli bir yerde zaman içinde izlenen değişimler yoluyla özgün biçimde ele alınabileceğini"
        ],
        "correct": 3,
        "explanation": "Öğrenci konunun başka kaynaklarda anlatıldığını reddetmez; katkısı aynı yuvanın değişimini kendi çizimleriyle karşılaştırmaktır. A özgünlük ile güvenilirliği karıştırır, B konunun hiç işlenmemiş olmasını şart koşar, C tek yuvadaki gözlemi bütün yuvalara genişletir."
      },
      {
        "id": "t6-1-t16-04",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bir nesneye sık sık bakmak, onun ayrıntılarını fark ettiğimiz anlamına gelmeyebilir.\nII. Çocuklardan sınıftaki saati çizmelerini istediğimde çoğu, rakamların biçimini hatırlamadı.\nIII. Oysa teneffüsü beklerken hepimiz defalarca o saate bakıyorduk.\nIV. Bu kararımı uygulamak için onlardan saati bir dakika boyunca yalnızca incelemelerini istedim.\nV. Sonraki çizimde akrep ve yelkovanın biçimi gibi ayrıntılar da yer aldı.\n\n“Bunun üzerine, ikinci çizimden önce dikkatlerini saatin verdiği bilgiden görünüşüne çevirmeye karar verdim.” cümlesi hangi cümlenin ardından getirilirse hem kararın gerekçesi hem de IV. cümlenin gönderme yaptığı bilgi yerli yerine oturur?",
        "options": [
          "I. cümlenin",
          "III. cümlenin",
          "IV. cümlenin",
          "V. cümlenin"
        ],
        "correct": 1,
        "explanation": "II ve III, sık bakıldığı hâlde saatin görünüşünün hatırlanmadığını gösterir. Eklenecek cümle bu durum üzerine alınan kararı verir; IV’teki “bu kararımı” da ona bağlanır. I’den sonra henüz gerekçe yoktur; IV veya V’den sonra yerleştirilirse IV’ün gönderme yaptığı karar, uygulanmasından önce verilmemiş olur."
      },
      {
        "id": "t6-1-t16-05",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir okulun etkinlik afişinden alınan aşağıdaki çizimde yazı ile görüntü birlikte kullanılmıştır.\n\nÇizimin eleştirisini en iyi açıklayan yorum hangisidir?",
        "options": [
          "Ödüllerin çokluğu, etkinliğe katılan herkesin başarılı olacağını ve bir ödül kazanacağını gösterir.",
          "Çocuk sahnenin altında olduğu için çağrının yalnızca daha önce ödül kazanmış kişilere yapıldığı anlaşılır.",
          "Çizim, sahneye çıkabilmek için ödüllerin değerini anlamanın yeterli olduğunu savunur.",
          "Katılıma açık olunduğunu söylemekle yetinilmemesi, katılımın önündeki somut engellerin de kaldırılması gerektiğini düşündürür."
        ],
        "correct": 3,
        "explanation": "Afişte herkes sahneye çağrılırken ödül vitrini sahneye çıkan merdiveni kapatır. Sözdeki açıklık, düzenlemedeki engelle çelişir. Görsel herkesin ödül kazanacağını, çağrının yalnız kazananlara yapıldığını veya engelin ödüllerin değerini anlamakla aşılacağını göstermez.",
        "imageUrl": "/grade6/turkce/test-16/soru-05.svg",
        "imageAlt": "Herkes sahneye yazılı afiş. Sahneye çıkan tek merdivenin önüne, kupaların bulunduğu geniş bir ödül vitrini konmuş. Çocuk vitrinin önünde durup merdivene bakıyor. Sahnenin yanında açıkça tek çıkış oku gösteriliyor.",
        "imageWidth": 360,
        "imageHeight": 760
      },
      {
        "id": "t6-1-t16-06",
        "subject": "turkce",
        "term": 1,
        "prompt": "Aşağıda bir öykünün olayları ve yazarın anlatım planı verilmiştir.\n\nBu plana uyan ve olaylara yeni bir neden eklemeyen başlangıç hangisidir?",
        "options": [
          "Leyla, sandığın kapağını kaldırınca eski uçurtmasını gördü. Üç yıl önce onu dedesiyle yaptıkları günü hatırladı. Bir süre sonra sandığın başında gülümsedi ve uçurtmayı eline aldı.",
          "Leyla, dedesiyle uçurtma yaptı; üç yıl sonra onu sandıkta buldu. Uçurtmayı eline alınca o günkü neşesi geri geldi.",
          "Leyla, dedesiyle yeniden uçurtma yapmak için sandığı açtı. İçindeki eski uçurtmayı görünce üç yıl önceki güne döndü; sonra uçurtmayı eline aldı.",
          "Leyla, sandıktaki uçurtmayı eline aldıktan sonra onu nasıl yaptıklarını hatırladı. Anısı bitince sandığın kapağını ilk kez kaldırdı."
        ],
        "correct": 0,
        "explanation": "Plan 2026’da sandığı açmayla başlayıp 2023’teki yapım gününe dönmeyi, ardından 2026’da uçurtmayı ele almayla sürmeyi ister. A bu sırayı izler ve sandığı açmaya yeni bir amaç yüklemez. B olayları tarih sırasıyla anlatır; C belirtilmeyen bir amaç ekler; D başlangıç ile dönüş sırasını bozar.",
        "imageUrl": "/grade6/turkce/test-16/soru-06.svg",
        "imageAlt": "Olay kartları: 2023, Leyla dedesiyle uçurtmayı yaptı. 2026, sandığı açıp uçurtmayı gördü. Aynı gün, uçurtmayı eline aldı. Anlatım planı: Sandık açılır; yapım günü hatırlanır; sandığın başındaki ana dönülür.",
        "imageWidth": 360,
        "imageHeight": 800
      },
      {
        "id": "t6-1-t16-07",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir dergi yazısında şu cümle yer alıyor: “Yazar, ‘Bu öyküyü bitiremedim.’ diyen okurların eleştirisini önemsiyor.” Editör, alıntıyı “Bu öyküyü bitiremedim diyen okurların eleştirisini önemsiyorum.” biçiminde yazıp bütün cümleyi yazara ait bir söz olarak yayımlamak istiyor.\n\nBu değişiklikle ilgili hangi değerlendirme doğrudur?",
        "options": [
          "Yazar eleştiriyi önemsediği için cümlenin tamamının onun ağzından verilmesi kaynakta bulunmayan hiçbir bilgi eklemez.",
          "Yalnızca kişi eki değiştiğinden alıntının kime ait olduğu ve hangi sözlerin aynen aktarıldığı korunur.",
          "Okurların sözünün içeriği aktarılırken, anlatıcının verdiği bilgi de yazarın aynen söylediği bir sözmüş gibi sunulmuş olur.",
          "Öyküyü bitirememe durumu okurlardan yazara aktarılmış ve öyküyü yazmayı bitiremediği söylenmiş olur."
        ],
        "correct": 2,
        "explanation": "İlk cümlede iç tırnakla aktarılan “Bu öyküyü bitiremedim.” sözü okurlarındır; yazarın eleştiriyi önemsediği ise anlatıcının bilgisidir. Editör ikinci bilgiyi de yazarın doğrudan sözü gibi gösterir. Yazarın bunu bu biçimde söylediği kaynakta yoktur. “Diyen okurlar” ifadesi korunduğu için bitiremeyen kişi yine okurlardır."
      },
      {
        "id": "t6-1-t16-08",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir eleştirmen, genç bir şair için “Ustalarının sesini iyi duymuş; şimdi o sesin yankısı olmaktan çıkması gerekiyor.” diyor.\n\nBu sözde övgüyle beklentiyi birlikte koruyan açıklama hangisidir?",
        "options": [
          "Şairin ustalarının söyleyişini başarıyla öğrenmesi övülmekte, özgünleşmek için onlardan edindiği her şeyi bırakması istenmektedir.",
          "Şairin önceki şairlerden beslenmesi değerli bulunmakta, öğrendiklerini kendine özgü bir söyleyişe dönüştürmesi istenmektedir.",
          "Şairin ustalarıyla aynı konuları işlemesi övülmekte, kendine özgü olabilmesi için yalnızca farklı konular seçmesi beklenmektedir.",
          "Şairin ustalarını iyi anlaması övülmekte, özgünleşmesinin onların sesini daha kusursuz yinelemesine bağlı olduğu söylenmektedir."
        ],
        "correct": 1,
        "explanation": "“Sesini iyi duymak” ustalardan yararlanmayı, “yankısı olmaktan çıkmak” onların söyleyişini yinelemekle yetinmemeyi anlatır. B iki yönü korur. A bütün birikimi bırakmayı şart koşar; C söyleyiş sorununu yalnız konu seçimine indirger; D beklenen özgünlüğü daha iyi taklit olarak yorumlar."
      },
      {
        "id": "t6-1-t16-09",
        "subject": "turkce",
        "term": 1,
        "prompt": "Bir romanın sonunda kahraman, yıllardır gitmek istediği şehre gitmez ve kasabada kalır.\nEleştirmen 1: “Bu son, baştaki hedefle çelişiyor; kararının değişmesini hazırlayan bir olay yok.”\nEleştirmen 2: “Son, baştaki hedeften farklı ama kahramanın yaşadıkları bu değişikliği hazırlıyor.”\n\nİki eleştirmen arasındaki asıl anlaşmazlığı çözmek için romanda öncelikle ne araştırılmalıdır?",
        "options": [
          "Kahramanın son kararının, romanın başlangıcındaki hedefinden ne ölçüde uzaklaştığı",
          "Kahramanın kasabada kalmasının, okurların kendi yaşam tercihleriyle ne kadar örtüştüğü",
          "Kahramanın karar değiştirmesinin, gerçek yaşamda mümkün bir davranış olup olmadığı",
          "Kahramanın yaşadığı olaylarla kasabada kalma kararı arasında metnin kurduğu bağlar"
        ],
        "correct": 3,
        "explanation": "İki eleştirmen hedefin değiştiğini zaten kabul eder; ayrılık, bu değişikliğin romanda hazırlanıp hazırlanmadığıdır. Bu nedenle metindeki yaşantı–karar bağları incelenmelidir. Değişimin büyüklüğü, okur tercihi veya gerçek hayatta mümkün olması, romanda gerekçelendirildiğini tek başına göstermez."
      },
      {
        "id": "t6-1-t16-10",
        "subject": "turkce",
        "term": 1,
        "prompt": "I. Bir müzenin sessiz olması, orada anlatılan hiçbir şey bulunmadığı anlamına gelmez.\nII. Aşınmış bir kaşık, onu kullanan insanların gündelik yaşamını düşündürebilir.\nIII. Bir sandığın içindeki yamalı örtü de eşyaların atılmadan onarıldığı günleri akla getirebilir.\nIV. Müzedeki eşyaların yaşını belirlemek için yapıldıkları malzemelerin özellikleri incelenir.\nV. Yeter ki bu izlere, yalnızca eski eşyalara bakar gibi değil, insan yaşamına açılan ipuçları olarak yaklaşalım.\n\nHangi cümle çıkarılmalıdır ve bunun doğru gerekçesi nedir?",
        "options": [
          "IV; eşyaların yaşının nasıl belirlendiğine geçerek bu eşyaların insan yaşamından izler taşıması düşüncesini geliştirmez.",
          "II; tek bir nesneden insanların yaşamına geçtiği için girişteki genel düşünceye örnek oluşturamaz.",
          "III; farklı bir eşya üzerinden aynı düşünceyi örneklediğinden paragrafın bütünlüğünü bozan bir yinelemedir.",
          "V; nesnelerden okurun yaklaşımına geçerek önceki örneklerle kurulabilecek anlam bağını koparır."
        ],
        "correct": 0,
        "explanation": "Paragraf, sessiz müzedeki eşya izlerinin insan yaşamını düşündürmesini işler. II ve III bu düşünceyi örnekler; V “bu izler” diyerek örneklerden sonuç çıkarır. IV de eşyalardan söz etse de onların yaşının nasıl belirlendiğine geçerek düşüncenin gelişimini keser."
      }
    ]
  },
  "term2": {
  "test1": [
    {
      "id": "t6-2-t1-01",
      "subject": "turkce",
      "term": 2,
      "prompt": "Bir köyde, herkesin önünden geçtiği kırık bir taş basamak vardı. Duru, basamağın yanına “Dikkat!” yazılı bir kâğıt bıraktı. Ertesi gün kâğıttaki yazı yağmurda silinmişti. Bu kez basamağın onarılması için komşularıyla konuştu. Usta geldiğinde Duru, yazıyı yenilemek üzere elinde tuttuğu kalemi cebine koydu.\n\nDuru’nun kalemi cebine koyması, olayların bütünü içinde hangi anlamı kazanır?",
      "options": [
        "Tehlikeyi duyurmanın, onu gidermeye yönelik ortak bir girişime dönüşmesi",
        "Komşularının ilgisiyle, yazılı uyarıların sözlü uyarılardan etkili olduğunu anlaması",
        "Basamağı tek başına onaramayacağını görünce sorumluluğu tamamen ustaya bırakması",
        "Uyarının yağmurda silinmesi nedeniyle düşüncelerini yazıyla anlatmaktan vazgeçmesi"
      ],
      "correct": 0,
      "explanation": "Önce geçici bir uyarı koyan Duru, sonra komşularını harekete geçirerek sorunun giderilmesine yönelir. Ustanın gelişiyle kalemin cebe konması bu değişimi tamamlar; genel olarak yazıdan vazgeçtiği ya da sorumluluktan kaçtığı söylenemez."
    },
    {
      "id": "t6-2-t1-02",
      "subject": "turkce",
      "term": 2,
      "prompt": "Kerem, pazar sabahı boş okul bahçesine geldi. Ertesi gün sergilenecek maketi bankın üzerinde açtı; rüzgâr karton çatıyı koparınca çantasındaki ipi aradı. Tam o sırada kapıda beliren arkadaşı Ece, elindeki dosyadan bir ataş çıkardı. İkisi çatıyı sabitledi; Kerem maketi yeniden kutuya koyarken okulun zili çalmadı, yalnızca yakındaki saat kulesi on iki kez vurdu.\n\nBu metnin hikâye unsurlarını ve bunların işlevini birlikte doğru açıklayan seçenek hangisidir?",
      "options": [
        "Olay pazar günü bahçede geçer; sergi asıl sorunu oluşturur, çatının kopması bu sorunu çözer.",
        "Olay pazar günü bahçede geçer; rüzgâr sorunu başlatır, Ece’nin getirdiği araç çözümü sağlar.",
        "Olay pazar günü bahçede geçer; saat kulesinin sesi sorunu başlatır, kutu çözüm aracıdır.",
        "Olay pazar günü bahçede geçer; Ece’nin gelişi sorunu başlatır, ertesi günkü sergi çözümü sağlar."
      ],
      "correct": 1,
      "explanation": "Sergi ertesi güne aittir ancak anlatılan olaylar pazar günü bahçede yaşanır. Kule yalnızca sesin kaynağıdır. Rüzgâr çatıyı kopararak sorunu doğurur, Ece’nin ataşı onarıma yardımcı olur."
    },
    {
      "id": "t6-2-t1-03",
      "subject": "turkce",
      "term": 2,
      "prompt": "Bir bilgilendirme metninin taslağı şöyledir:\n\nSORUN: Okul koridorundaki saksılarda bazı bitkilerin yaprakları sararıyor.\nİNCELEME: Her saksı aynı miktarda sulanıyor; ancak pencere önündeki ve gölgede kalan saksıların toprağı aynı hızda kurumuyor.\nÖNERİ: Sulamadan önce toprağın nemi kontrol edilmeli.\n\nMetnin “İnceleme” bölümünü, diğer bölümlerle ilişkisini koruyarak en iyi özetleyen not hangisidir?",
      "options": [
        "Sararan yaprakların tümü gölgede kaldığı için bitkiler pencere önüne taşınmalıdır.",
        "Aynı sulama düzeni bütün saksılar için uygundur; farklılık yalnızca görünüştedir.",
        "Eşit su verilen saksıların nemi farklılaşabildiğinden tek bir sulama düzeni her saksıya uymayabilir.",
        "Toprak kuruluğu ölçülürse yaprak sararmasının tek nedeninin fazla su olduğu kanıtlanır."
      ],
      "correct": 2,
      "explanation": "İnceleme, eşit sulamaya rağmen farklı kuruma hızlarını gösterir; öneri de bu nedenle nemi ayrı ayrı kontrol etmektir. Metin sararmanın tek nedenini kanıtlamaz ve bütün saksılar için aynı düzeni savunmaz."
    },
    {
      "id": "t6-2-t1-04",
      "subject": "turkce",
      "term": 2,
      "prompt": "“Akşam, evlerin arasına sessizce süzüldü. Sokak lambası, son otobüsü bekleyenlere göz kırptı. Ben de cebimdeki küçük feneri yaktım; ışığı bir avuç yıldız gibi avucuma doldu.”\n\nBir öğrenci bu metnin ikinci ve üçüncü cümlelerindeki sanatlı anlatımı düz anlamla yeniden yazıyor. Hangi seçenekte iki söz sanatı da kaldırılmış, buna karşılık anlatılan temel durum korunmuştur?",
      "options": [
        "Sokak lambası bekleyenlere seslendi. Fenerimin ışığı avucumu aydınlattı.",
        "Sokak lambasının ışığı yanıp söndü. Fenerim avucumda küçücük bir güneş oldu.",
        "Sokak lambası bekleyenlere gülümsedi. Fenerimin ışığı yıldızları andırıyordu.",
        "Sokak lambasının ışığı yanıp söndü. Yaktığım fenerin ışığı avucumu aydınlattı."
      ],
      "correct": 3,
      "explanation": "İkinci cümlede lambaya “göz kırpma” davranışı verilerek kişileştirme, üçüncüde ışık yıldızlara benzetilerek benzetme yapılmıştır. D, ikisini de düz anlamla anlatır. A ve C insana özgü davranışı nesneye vermeyi sürdürür; B’de fener güneşe benzetilir."
    },
    {
      "id": "t6-2-t1-05",
      "subject": "turkce",
      "term": 2,
      "prompt": "Görselde bir okulun öneri panosu ve bu panoya dayanılarak hazırlanan duyuru taslağı verilmiştir.\n\nTaslağın, panodaki bilgileri çarpıtmadan düzeltilmiş biçimi hangisidir?",
      "options": [
        "İki seçeneği işaretleyenlerin çoğu kitap takasını tercih etmiştir; bu yüzden oyun günü gereksizdir.",
        "Ankete katılanların bir bölümü iki etkinliği de seçmiştir; yalnız kitap takasını seçenlerin sayısı, yalnız oyun gününü seçenlerden fazladır.",
        "Öğrencilerin yarısı yalnız kitap takasını seçmiştir; bu nedenle okulun tamamı takas istemektedir.",
        "İki etkinliği de seçenlerle yalnız oyun gününü seçenler eşit olduğundan iki etkinliğe toplam ilgi de eşittir."
      ],
      "correct": 1,
      "explanation": "Panoda yalnız kitap takası 12, iki etkinlik 8, yalnız oyun günü 4 kişidir. Dolayısıyla 12 > 4 ve iki etkinliği de seçenler vardır. Toplam ilgi kitap takasına 20, oyun gününe 12 kişidir. 24 katılımcının yanıtlarından okulun tamamına genelleme yapılamaz.",
      "imageUrl": "/grade6/turkce/term-2/test-1/soru-05.svg",
      "imageAlt": "Öneri panosu: 24 öğrenci iki etkinlikten en az birini seçti. Her daire 2 öğrenciyi gösteriyor. Yalnız kitap takası satırında 6 daire; iki etkinlik de satırında 4 daire; yalnız oyun günü satırında 2 daire var. Duyuru taslağı: Okuldaki herkes yalnız kitap takası istiyor.",
      "imageWidth": 360,
      "imageHeight": 760
    },
    {
      "id": "t6-2-t1-06",
      "subject": "turkce",
      "term": 2,
      "prompt": "Görselde bir gezi bilgilendirme kartı ile velilere gönderilecek kısa mesaj bulunuyor.\n\nKısa mesajın iki önemli koşulu da koruması için hangi cümle kullanılmalıdır?",
      "options": [
        "Yağmur varsa bahçe incelemesi yapılmayacak; müze gezisi ise hava durumundan bağımsız olarak sürecektir.",
        "Hava açık olursa bütün gruplar müzeyi gezecek; yağmur yağarsa bütün gezi iptal edilecektir.",
        "Yağmurda bahçe incelemesi yerine seramik atölyesi yapılacak; müze gezisi için veli izin belgesi gerekecektir.",
        "Veli izin belgesi getirenler yağmurda bahçeye çıkabilecek; getirmeyenler seramik atölyesine katılacaktır."
      ],
      "correct": 2,
      "explanation": "Karttaki iki ayrı koşul birlikte korunmalıdır: yağmur bahçe incelemesini seramik atölyesine dönüştürür; müze için veli izin belgesi gerekir. Yağmur bütün geziyi iptal etmez ve izin belgesi hava koşulunu değiştirmez.",
      "imageUrl": "/grade6/turkce/term-2/test-1/soru-06.svg",
      "imageAlt": "Gezi kartı: Bahçe incelemesi saat 10.00. Yağmur yağarsa bu bölüm yerine seramik atölyesi yapılır. Müze gezisi saat 13.00. Müze için veli izin belgesi zorunludur. Mesaj taslağı: Yağmurda gezi iptal, izin belgesine gerek yok.",
      "imageWidth": 360,
      "imageHeight": 590
    },
    {
      "id": "t6-2-t1-07",
      "subject": "turkce",
      "term": 2,
      "prompt": "Okul gazetesindeki yazı şöyle bitiyor: “Bu ay okulun duyuru sayfasına giriş sayısı geçen aya göre arttı. Demek ki öğrenciler duyurulan kararları artık daha çok destekliyor.” Eylül, sonuç cümlesini eleştirirken artış bilgisini korumak ve kanıtın sınırını göstermek istiyor.\n\nEylül’ün yazacağı hangi cümle bu iki amacı da karşılar?",
      "options": [
        "Sayfaya daha sık girildiği için kararlara desteğin de aynı oranda arttığı kabul edilmelidir.",
        "Sayfaya giriş sayısını bilmek gereksizdir; kararlara destek yalnız öğretmenlere sorulabilir.",
        "Kararlara karşı çıkanlar daha çok bilgi aradığından girişlerdeki artış desteğin azaldığını gösterir.",
        "Sayfaya giriş sayısı artmıştır; ancak bu veri, ziyaretçilerin kararlara katılıp katılmadığını tek başına göstermez."
      ],
      "correct": 3,
      "explanation": "Sayfaya giriş, bilgi arama davranışını gösterir; kararları destekleme ya da reddetme tutumunu doğrudan göstermez. D veriyi koruyup çıkarımın sınırını belirtir. A ve C karşıt yönlerde kanıtsız çıkarımlar yapar; B veriyi gereksiz sayar ve yalnız öğretmenlere başvurmayı önerir."
    },
    {
      "id": "t6-2-t1-08",
      "subject": "turkce",
      "term": 2,
      "prompt": "Sınıfın ortak kitaplığına bağışlanan kitaplar önce adlarına göre sıralanmış, sonra her kitabın içine kimden geldiğini belirten bir not konmuştur. Öğrenciler kitapları ararken yalnızca adlarını değil, konularını da bilmek istediklerini söylemiştir. Kitapların adlara göre raf sırasını değiştirmeden bu sorunu çözmek isteyen bir öğrenci şu öneriyi yazacaktır:\n\nHangi öneri hem belirtilen ihtiyacı karşılar hem de bu raf sırasını korur?",
      "options": [
        "Kitapları ad sırasından çıkarmadan, konu ve ad bilgilerini birlikte içeren bir arama listesi hazırlayalım.",
        "Kitapları konularına göre yeniden sıralayıp her kitabın konu etiketine adını da yazalım.",
        "Ad sırasını koruyup her rafın başına yalnızca o raftaki ilk kitabın konusunu yazalım.",
        "Kitapları ad sırasından çıkarmadan yalnız bağışçı adlarını içeren bir arama listesi hazırlayalım."
      ],
      "correct": 0,
      "explanation": "A, hem mevcut ad sırasını korur hem de bütün kitapları konularıyla aramayı sağlar. B konu erişimi sağlasa da raf sırasını değiştirir. C yalnız ilk kitap hakkında bilgi verir; D ise konu bilgisi içermez."
    },
    {
      "id": "t6-2-t1-09",
      "subject": "turkce",
      "term": 2,
      "prompt": "“Atölye için hazırlanan raporda yalnızca tamamlanmış çalışmalar değerlendirildi; henüz bitmeyen taslakların başarısız sayıldığı ise hiçbir yerde söylenmedi.”\n\nBu cümlenin anlam sınırlarını aşmadan yapılabilecek değerlendirme hangisidir?",
      "options": [
        "Tamamlanmış çalışmaların hepsi başarılı bulunmuş, taslaklar ise yeniden yapılmak üzere ayrılmıştır.",
        "Tamamlanmamış taslaklar değerlendirmenin dışında kalmıştır; bu durum tek başına onların başarısız görüldüğü anlamına gelmez.",
        "Taslaklar başarısız sayılmadığı için raporda tamamlanmış çalışmalarla aynı başarı düzeyinde gösterilmiştir.",
        "Raporda taslakların adı geçmediği için atölyede tamamlanmamış hiçbir çalışma bulunmamaktadır."
      ],
      "correct": 1,
      "explanation": "“Yalnızca tamamlanmış çalışmalar” değerlendirmeye alınan grubun sınırını belirtir. Bir çalışmanın bu grubun dışında kalması, başarısız bulunduğunu göstermez; cümlenin ikinci bölümü de bu ayrımı korur. Tümünün başarılı olduğu, taslakların eşit düzeyde bulunduğu veya hiç taslak olmadığı çıkarılamaz."
    },
    {
      "id": "t6-2-t1-10",
      "subject": "turkce",
      "term": 2,
      "prompt": "Bir öğrenci, sergi yazısını düzeltirken iki amacı birlikte gözetiyor: Açıklamaların kısalığına bakarak anlamanın güç olabileceğini düşünen okuyucuya, gerçekte ziyaretçilerin kolayca anladığını bildirmek ve “de”nin yazımını doğru kullanmak.\n\nHangi cümle bu iki koşulu da sağlar?",
      "options": [
        "Sergideki açıklamalar kısaydı; bu yüzden ziyaretçilerde nesnelerin öyküsünü hemen kavradı.",
        "Sergideki açıklamalar kısaydı; buna rağmen ziyaretçilerde nesnelerin öyküsünü hemen kavradı.",
        "Sergideki açıklamalar kısaydı; buna rağmen ziyaretçiler de nesnelerin öyküsünü hemen kavradı.",
        "Sergideki açıklamalar kısaydı; bu yüzden ziyaretçiler de nesnelerin öyküsünü hemen kavradı."
      ],
      "correct": 2,
      "explanation": "“Buna rağmen” beklenenin tersine gerçekleşen sonucu bildirir; “bu yüzden” ise kısalığı anlamanın nedeni yapar. Buradaki “de” katma anlamındaki bağlaçtır ve “ziyaretçiler”den ayrı yazılır. İki koşulu yalnız C birlikte sağlar."
    }
  ]
}
};
