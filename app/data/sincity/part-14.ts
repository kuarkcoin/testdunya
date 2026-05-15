import type { BilimParagrafQuestion } from './types';

const PARAGRAPH_THEMES_53 = [
  {
    title: 'Lobotomi Çılgınlığı (Tıbbın Kibri)',
    passage: '1949 yılında Portekizli doktor Egas Moniz, beynin ön lobunu (frontal lob) kazıyıp parçalayan "Lobotomi" ameliyatını icat ettiği için Tıp alanında Nobel Ödülü\'ne layık görüldü! Depresyon, şizofreni veya sadece "itaatsizlik" gösteren binlerce hasta; göz pınarlarından içeri sokulan bir buz kıracağıyla saniyeler içinde ameliyat ediliyordu. Hastalar "sakinleşiyordu", evet; ama iyileştikleri için değil, beyinlerindeki duygusal, ahlaki ve insani tüm motorlar (ruhları) kelimenin tam anlamıyla fiziksel olarak parçalandığı için uysal birer bitkiye (zombiye) dönüşüyorlardı. Binlerce insan bu barbarlığa kurban gitti. Lobotomi çılgınlığı, tıp biliminin o en karanlık ve hastalıklı felsefesini ifşa eder: Otorite, "tedavi edemediği ve anlayamadığı" karmaşık bir sorunu (akıl hastalığını/isyanı) çözmek yerine; hastanın ruhunu kılıçla kesip onu sisteme sorun çıkarmayan uysal ve dilsiz bir robota çevirmeyi "büyük bir tıbbi zafer (ve Nobel)" olarak kutsayacak kadar acımasız, şekilci ve kibirlidir.',
    questionStem: '1949\'da Nobel Ödülü alan "Lobotomi" ameliyatının hastaları dilsiz birer robota çevirmesi, tıp otoritesi (ve sistem) hakkında neyin karanlık bir eleştirisidir?',
    options: [
      'Beyin ameliyatlarında o dönemde mikroskobik kameralar kullanılmamasının',
      'Otoritenin, anlayamadığı veya tedavi edemediği "karmaşık sorunları (ruhsal/bireysel krizleri)" iyileştirmek yerine; insanı (kendi sistemine sorun çıkarmasın diye) ruhu parçalanmış uysal bir zombiye dönüştürerek "bunu bir zafer (şifa)" gibi pazarlamasının (kibrinin) eleştirisi',
      'Psikiyatri hastanelerinin devletten yeterince ödenek alamadığı için ucuz ameliyatlara başvurmasının',
      'Fiziksel hastalıkların psikolojik tedavilere göre çok daha hızlı iyileştiğinin kanıtı'
    ],
    correct: 1,
    explanation: 'Ruhu parçalayarak hastayı uysallaştıran operasyona Nobel verilmesi; otoritenin/sistemin karmaşık ruhsal hastalıkları tedavi etmek yerine, insanı kendine sorun çıkarmayan dilsiz/uysal bir robota dönüştürmeyi "zafer" sayan ahlaksız kibrini eleştirir.'
  },
  {
    title: 'Beyt\'ül Hikmet\'in Düşüşü (Mürekkep ve Kan)',
    passage: '1258 yılında Hülagü Han komutasındaki Moğol ordusu, o dönem dünyanın en büyük bilim, felsefe ve çeviri merkezi olan Bağdat\'ı (Beyt\'ül Hikmet\'i) işgal etti. Moğollar, o eşsiz el yazmalarını, yüzyılların tıp, astronomi ve matematik birikimini barındıran milyonlarca kitabı Dicle Nehri\'ne fırlattılar. Tarihçiler o günü dondurucu bir efsaneyle anlatır: "Dicle Nehri günlerce, atılan kitapların mürekkebinden dolayı simsiyah, öldürülen âlimlerin kanından dolayı ise kıpkırmızı akmıştır." Beyt\'ül Hikmet\'in yıkılışı sadece bir şehrin düşmesi değildir; o, insanoğlunun aklını ilmek ilmek işleyerek kurduğu o yüce "bilgi kalesinin (medeniyetin)"; kaba kuvvet, barbarlık ve cehalet karşısında hiçbir koruyucu kalkanı olmadığını; asırlar süren aydınlanmanın, vahşetin elindeki kılıçla sadece birkaç gün içinde mürekkeple karışık bir lağım çukuruna (hafıza kaybına) döndürülebileceğini kanıtlayan en trajik kültürel yıkımdır.',
    questionStem: 'Bağdat\'taki Beyt\'ül Hikmet\'in (ve milyonlarca kitabın) Moğollar tarafından yok edilmesi, "medeniyet ve bilgi" bağlamında neyin metaforudur?',
    options: [
      'Orta Çağ el yazmalarında kullanılan mürekkeplerin kimyasal yapısının ne kadar yoğun olduğunun',
      'Yüzyıllar boyunca ince ince işlenen "bilginin, hafızanın ve medeniyetin (aydınlanmanın)"; kaba kuvvet, barbarlık ve cehalet (kılıç) karşısında ne kadar savunmasız ve kırılgan kaldığının; tek bir felaketle bin yıllık aklın (kültürel hafızanın) saniyeler içinde çökebileceğinin metaforu',
      'Bilim insanlarının ve filozofların her zaman savaş stratejileri geliştirmekte ustalaştıklarının kanıtı',
      'Ortadoğu coğrafyasındaki kütüphanelerin nehir kenarlarına yapılmasının yanlış bir mühendislik olduğunun'
    ],
    correct: 1,
    explanation: 'Milyonlarca kitabın nehre atılıp suyun siyah akması; yüzyılların birikimi olan medeniyetin ve bilginin, barbarlığın/kaba kuvvetin kılıcı karşısında ne kadar korumasız, kırılgan ve saniyeler içinde silinebilir (hafıza kaybı) olduğunun metaforudur.'
  },
  {
    title: 'Prokrustes\'in Yatağı (Gerçeği Eğip Bükmek)',
    passage: 'Yunan mitolojisinde Prokrustes (Zorba) adında acımasız bir hancı vardır. Yoldan geçen yolcuları evinde misafir eder ve onları demirden yapılmış özel yatağına yatırır. Ancak şeytani bir kuralı vardır: Eğer yolcunun boyu yataktan "kısaysa", adamın kemiklerini ve eklemlerini kırarak (çekerek) onu yatağın boyuna uzatır! Eğer yolcunun boyu yataktan "uzunsa", bu kez adamın dışarı taşan bacaklarını baltayla keserek onu yatağa uydurur! Nassim Taleb felsefesinde "Prokrustes\'in Yatağı" (Procrustean Bed), modern bilimin, ekonomistlerin ve ideolojilerin en büyük kibrini temsil eder: İnsan aklı, kendi kurguladığı o dar, kusurlu ve yapay "teorilere, kalıplara veya yasalara (yatağa)" uymayan o engin ve karmaşık "hakikati (doğayı)"; anlamaya çalışmak yerine, sırf kendi teorisini (modelini) haklı çıkarmak uğruna, gerçeği kırpmaya, kesmeye ve zorla kendi yatağına uydurmaya çalışan acımasız ve sahtekâr bir zorbaya dönüşür.',
    questionStem: 'Nassim Taleb\'in felsefesinde "Prokrustes\'in Yatağı" (uzunları kesip kısaları esnetme efsanesi), modern bilimin (ve ideolojilerin) gerçeğe yaklaşımındaki hangi sahtekârlığı eleştirir?',
    options: [
      'Gelişmiş teknolojilerin insan anatomisine zarar vererek fiziksel hastalıklar yaratmasını',
      'Karmaşık, akışkan ve engin olan hakikati (doğayı) olduğu gibi anlamak yerine; insanın kendi yarattığı "dar (yapay) teorilere ve kalıplara" sırf uysun diye, gerçeğin dışarı taşan parçalarını kasten kırpan veya büken o kibirli, akademik ve ideolojik (zorba) sahtekârlığı',
      'Seyahat eden insanların bilmedikleri otellerde kalarak kendi can güvenliklerini tehlikeye atmasını',
      'Yunan mitolojisindeki kahramanların her zaman fiziksel güç kullanarak adaleti sağladıkları yönündeki inancı'
    ],
    correct: 1,
    explanation: 'Gerçeği yatağa uydurmak için adamın bacaklarını kesmek (Prokrustes); modern bilimin/ideolojilerin kendi "dar teorilerine (kalıplarına)" uymayan o akışkan gerçeği/doğayı anlamak yerine onu zorla kesip bükerek (uydurarak) yaptığı sahtekârlığı (kibri) eleştirir.'
  },
  {
    title: 'Stockholm Sendromu (Celladına Âşık Olmak)',
    passage: '1973 yılında İsveç\'in Stockholm kentinde bir banka soygunu yaşandı. Silahlı soyguncular, dört banka çalışanını 6 gün boyunca bir kasada rehin tuttu, boyunlarına ip geçirdi ve onları ölümle tehdit etti. Ancak polis bankaya operasyon yapıp rehineleri kurtardığında, dünya akılalmaz bir şok yaşadı: Rehineler kendilerini kurtaran polislere saldırıyor ve onları esir alan soyguncuları (katilleri) korumak için onlara sarılıp siper oluyorlardı! Sonradan mahkemede soyguncular aleyhine ifade vermeyi de reddettiler. Psikolojiye "Stockholm Sendromu" olarak geçen bu olay, insan beyninin en dondurucu hayatta kalma (kısa devre) mekanizmasıdır. Kişi, mutlak bir şiddet ve ölüm korkusu altında (çaresizlik içindeyken), kendisini yok edebilecek tek güç olan "celladının" ufacık bir merhametini bile beynin bir savunma kalkanı olarak bükmesiyle; o zorbaya karşı hastalıklı bir empatiye, minnete ve "bağlanmaya" dönüştürür. Köle, fiziksel zincirlerini kıramadığında, aklını çıldırmaktan kurtarmak için o zincirleri öpmeye (ve onu seven bir kurbana dönüşmeye) mahkûmdur.',
    questionStem: 'Stockholm Sendromu\'nda kurbanın kendisini esir alan "zorbaya (celladına) sarılması", insan psikolojisi hakkında hangi karanlık "hayatta kalma mekanizmasını" ifşa eder?',
    options: [
      'Polislerin kurtarma operasyonlarında her zaman suçlulardan daha çok zarar verdiği yönündeki yanılgıyı',
      'Kurbanların aslında baştan beri soygun planının gizli suç ortakları olduğu gerçeğini',
      'Mutlak ölüm korkusu ve çaresizlik içindeki (kaçamayan) insan beyninin; aklını delilikten korumak (ve hayatta kalmak) uğruna, şiddeti rasyonelleştirip celladıyla hastalıklı bir "empati ve minnet (bağlanma)" kurguladığı o çaresiz (psikolojik) bükülmeyi (kısa devreyi)',
      'Soyguncuların hapse girdiklerinde her zaman mağdurlara maddi tazminat ödemek zorunda kaldıklarını'
    ],
    correct: 2,
    explanation: 'Esirlerin katillere sarılıp polisleri dövmesi; mutlak korku/çaresizlik altındaki beynin, hayatta kalmak ve delirmemek için kendisini tehdit eden zorbaya karşı hastalıklı bir bağ/minnet (empati) kurguladığı o karanlık savunma mekanizmasını ifşa eder.'
  },
  {
    title: 'Hanlon\'un Usturası (Aptallığın Zaferi)',
    passage: 'Günlük hayatta işyerinizde evraklarınız kaybolduğunda veya devlet bir yasayı yanlış uyguladığında anında o karanlık senaryoları kurarız: "Bunu kesinlikle bana komplo kurmak için kasten yaptılar, arkasında şeytani bir plan var!" Ancak Robert J. Hanlon bu paranoyayı, felsefenin o en komik ve keskin kuralıyla (Hanlon\'un Usturası) yıkar: "Aptallıkla (beceriksizlikle) yeterince açıklanabilen bir durumu, asla kötü niyetle (kötülükle) açıklamaya çalışmayın!" İnsanoğlu (egosu yüzünden), başına gelen kötü olayların arkasında "kendisiyle özel olarak uğraşan zeki ve karanlık bir düşman" görmeyi tercih eder; çünkü bu onu "önemsenmeye değer" (hedef) kılar. Oysa dünya komplo teorileriyle veya şeytani dehalarla yönetilmemektedir. Dünyadaki krizlerin, yıkımların ve hataların %90\'ı; sinsi ve zeki kötülüklerden değil, sıradan insanların, bürokrasinin ve sistemlerin o devasa, sıkıcı ve dikkatsiz "beceriksizliğinden (aptallığından)" kaynaklanan basit trajedilerdir.',
    questionStem: 'Hanlon\'un Usturası kuralı ("Aptallıkla açıklanabilen şeyi kötü niyet sanma"), insanların sorunları yorumlarken düştüğü hangi narsisistik paranoyayı eleştirir?',
    options: [
      'Gelecekte yapay zekânın insanların işlerini ellerinden alacağı yönündeki korkuyu',
      'Başa gelen hataların/krizlerin arkasında her zaman "kendiyle özel olarak uğraşan zeki ve şeytani bir komplo (kötü niyet)" arayarak kendi egosunu okşama kibrini; oysa asıl nedenin çoğu zaman sistemin (veya insanların) sıradan "beceriksizliği ve dikkatsizliği (aptallığı)" olduğunu',
      'Aptal insanların her zaman kasten kötü niyetli (şeytani) eylemlere yatkın olduklarını',
      'Bürokrasinin aslında hiçbir zaman hata yapmayan kusursuz bir mekanizma olduğu yalanını'
    ],
    correct: 1,
    explanation: 'Sorunları hep "kötü niyetli bir komplo/düşman" diye açıklamak, insanın egosunu okşayan (beni hedef alıyorlar) bir paranoyadır. Hanlon, sorunların genelde o sinsi kötülükten değil, sıradan "beceriksizlikten (aptallıktan)" kaynaklandığını göstererek bu kibri eleştirir.'
  },
  {
    title: 'Küçük Albert Deneyi (Korkunun İcadı)',
    passage: '1920 yılında psikolog John B. Watson, "İnsanların korkuları doğuştan mıdır, yoksa sonradan mı öğrenilir?" sorusunu test etmek için "Küçük Albert" adında 9 aylık sağlıklı bir bebek üzerinde korkunç bir deney yaptı. Bebeğin önüne beyaz sevimli bir fare koydu. Bebek fareyi çok sevdi ve onunla oynadı. Ancak doktorlar, bebek her fareye dokunduğunda, onun hemen arkasından demir çubuklara çekiçle vurarak sağır edici ve korkunç bir gürültü çıkardılar! Birkaç gün sonra Albert, fareyi (ortada gürültü olmamasına rağmen) gördüğü an çığlık atarak ağlamaya başlıyordu! Daha da kötüsü, bu korku beyaz tavşanlara, pamuğa ve hatta Noel Baba sakalına kadar sıçramıştı (Genelleme). Tıp etiğinin o dönemde nasıl bir çöplük olduğunu gösteren bu deney; insanın içindeki o en saf, en masum duyguların bile; şartlanma ve travmalarla kasten manipüle edilerek, o kişinin zihnine ömür boyu sürecek sahte bir kâbusun (korkunun) bir cerrah gibi dikilebileceğini (psikolojik silahı) ifşa eder.',
    questionStem: 'Küçük Albert Deneyi (bebeğin sesten dolayı beyaz fare ve sakaldan korkmaya başlaması), psikoloji ve insan zihni hakkında neyi kanıtlamaktadır?',
    options: [
      'Bebeklerin genetik olarak hayvanlara ve beyaz nesnelere karşı doğuştan bir fobisi olduğunu',
      'Fiziksel gürültülerin bebeklerin işitme sinirlerini tahrip ederek onları ömür boyu sağır bıraktığını',
      'Korku ve fobilerin doğuştan gelen (biyolojik) bir kader olmadığını; insanın o en masum (korkusuz) algısının bile, travmatik şartlanmalarla (kasten veya kazara) dışarıdan zihne "dikilebileceği (öğretilebileceği)" ve bunun başka nesnelere de sıçrayabileceği (genellenebileceği) gerçeğini',
      'Noel Baba efsanesinin çocuk psikolojisi üzerinde her zaman olumsuz etkiler yarattığını'
    ],
    correct: 2,
    explanation: 'Fareden korkmayan bebeğin gürültü travmasıyla fareden (ve beyaz her şeyden) korkmaya başlaması; korkunun/fobilerin doğuştan olmadığını, zihne dışarıdan "travmatik şartlanmayla (öğrenilmeyle)" dikilebileceğini kanıtlar.'
  },
  {
    title: 'Bilişsel Çelişki (Festinger ve Ufo Tarikatı)',
    passage: '1954 yılında Leon Festinger adında bir psikolog, "Dünyanın 21 Aralık\'ta bir uzaylı gemisi tarafından sular altında bırakılıp kıyametin kopacağına" inanan bir tarikatın içine gizlice sızdı. Tarikat üyeleri bu kehanete o kadar inanmıştı ki; evlerini, arabalarını satmış, işlerinden ayrılmışlardı. Beklenen 21 Aralık gecesi geldi çattı... Saat 00:00 oldu, hiçbir şey olmadı! Uzaylılar gelmedi. Festinger, tarikat üyelerinin "Biz kandırılmışız, hepsi yalanmış!" deyip dağılacaklarını sanıyordu. Ancak tam tersi oldu! Tarikat lideri "Bizim dualarımız ve sarsılmaz inancımız sayesinde uzaylılar dünyaya acıdı ve kıyameti iptal etti!" dedi. Üyeler bu yalana eskisinden çok daha fanatik bir şekilde bağlandılar ve sabaha kadar neşeyle şarkılar söylediler! Psikolojiye "Bilişsel Çelişki" (Cognitive Dissonance) olarak giren bu fenomen şu dehşeti anlatır: İnsan, inandığı bir kurgu (yalan) uğruna çok büyük bedeller ödemişse (evini/hayatını vermişse); gerçeği (kandırıldığını) kabul etmenin o "yıkıcı ve aşağılayıcı" acısıyla yüzleşmektense, o saçma yalana yeni ve absürt mazeretler uydurup eskisinden çok daha körü körüne sarılarak (aklı felç ederek) kendi beynini uyuşturmayı seçer.',
    questionStem: 'Kıyamet kopmadığında tarikat üyelerinin yalanı kabul etmek yerine (Bilişsel Çelişki yaşayarak) yalana "daha da fanatik" bağlanmaları neyi açıklar?',
    options: [
      'Uzaylıların gerçekten de o tarikatın dualarını duyarak dünyaya saldırmaktan vazgeçtiğini',
      'İnsanın, büyük bedeller ödediği (yatırım yaptığı) bir inancın "yanlış olduğu" (kandırıldığı) gerçeğiyle yüzleşmenin o yıkıcı acısına (çelişkisine) katlanamadığı için; aklını tamamen kapatıp, o yalana yeni mazeretler üreterek (kendini kandırarak) daha fanatikçe sarılma mekanizmasını',
      'Ev alım satımının dini gruplarda insanları daha rasyonel ve mantıklı yatırımlara ittiğini',
      'Tarikatların zamanla uzay bilimleri konusunda NASA\'dan daha doğru veriler elde ettiğini'
    ],
    correct: 1,
    explanation: 'Kıyamet kopmayınca kandırıldıklarını itiraf etmek yerine "dualarımızla durdurduk" deyip yalana daha çok tapmaları (Bilişsel Çelişki); insanın, büyük bedel ödediği bir yalanda kandırıldığını (yıkıcı gerçeği) kabullenmektense yeni kılıflar uydurarak kendi beynini daha fanatikçe kandırma (uyuşturma) mekanizmasını açıklar.'
  },
  {
    title: 'Kudüs Sendromu (Kutsallığın Şoku)',
    passage: 'Her yıl dünyanın farklı ülkelerinden gelen ve hiçbir akıl hastalığı geçmişi olmayan onlarca turist, İsrail\'in Kudüs (Jerusalem) şehrini ziyaret ettiğinde aniden aklını yitirir. Otele yerleştikten birkaç gün sonra beyaz otel çarşaflarını yırtarak kendilerine "antik" bir elbise dikerler; sokağa çıkıp bağırarak vaazlar vermeye, kendilerini Hz. İsa, Hz. Meryem veya Vaftizci Yahya sanmaya başlarlar! Psikiyatride buna "Kudüs Sendromu" denir. Hastaneye yatırılıp şehri terk ettiklerinde (ülkelerine döndüklerinde) bu delilik (psikoz) anında biter ve hiçbir şey hatırlamadan normal (işçi/öğrenci) hayatlarına dönerler. Bu sendrom; insanın zihninde çocukluğundan beri okuduğu, kutsadığı ve bilinçaltında devasa bir boyuta taşıdığı o "ulvi, mitolojik kurgunun (kutsallığın)"; dinlerin merkezindeki o fiziksel ve çıplak (gerçek) coğrafyayla çarpıştığı o aşırı duygusal an; beynin bu ruhsal ve mistik yükü taşıyamayıp sigortaları attırması (kısa devre) ve kişinin o kutsal mitolojinin içinde bir "kurgusal aktöre" dönüşerek rasyonel dünyadan tamamen kaçışıdır.',
    questionStem: 'Kudüs Sendromu\'nda sıradan turistlerin kutsal topraklara gidince "kendilerini dini figürler (İsa/Meryem) sanarak" delirmeleri, insan zihni ve "inanç/mekân" algısı hakkında neyin metaforudur?',
    options: [
      'Kudüs\'teki suların içinde bulunan özel minerallerin beyinde kalıcı halüsinasyonlar yarattığının',
      'Zihnin yıllarca bilinçaltında büyüttüğü o "devasa/mitolojik kutsallığın (inancın)"; o kutsallığın fiziksel ve çıplak mekânıyla yüz yüze geldiğinde yarattığı o ezici şoku (aşırı yüklenmeyi) beynin taşıyamayarak (kısa devre yapıp); kişinin o kurgusal/dini mitolojinin içine bir aktör olarak kaçmasının (psikozunun)',
      'Otel çarşaflarının eski dönem kıyafetleriyle aynı tasarıma sahip olduğunun antropolojik bir kanıtı',
      'Sıcak iklimlerin turistlerde her zaman geçici hafıza kaybı ve konuşma bozuklukları yarattığının'
    ],
    correct: 1,
    explanation: 'Sıradan insanların Kudüs\'te İsa olduklarını sanıp delirmeleri (Kudüs Sendromu); beynin bilinçaltında büyüttüğü o "devasa (mitolojik/kutsal)" kurgunun gerçek mekânla çarpıştığı an yaşadığı o ezici şoku (aşırı yüklenmeyi) kaldıramayıp, sistemi kapatarak dini bir aktöre (psikoza) dönüşmesini sembolize eder.'
  },
  {
    title: 'Plastik El İllüzyonu (Bedenin Yalanı)',
    passage: 'Beynimiz bedenimizin bize ait olduğunu nereden bilir? Psikologların "Plastik El İllüzyonu" (Rubber Hand Illusion) deneyi bu "Ben (Bedenim)" algımızı darmadağın eder. Hastanın gerçek sol eli masanın altına (görmeyeceği şekilde) gizlenir ve masanın üzerine hastanın koluymuş gibi duran cansız bir "Plastik (Manken) El" konur. Doktor, her iki ele (hem gizli gerçek ele hem de masadaki plastik ele) aynı anda, senkronize bir şekilde fırçayla dokunmaya başlar. Sadece bir dakika sonra beynin sigortaları atar! Göz plastiğe dokunulduğunu görür, gerçek el ise o dokunmayı (aynı anda) hisseder; beyin bu iki duyuyu birleştirir ve o cansız plastik eli "KENDİ GERÇEK ELİ" olarak kabul etmeye (sahiplenmeye) başlar! O kadar ki, doktor aniden cebinden bir çekiç çıkarıp o cansız plastik ele sertçe vurduğunda, hasta sanki kendi kemiği kırılmış gibi çığlık atarak yerinden sıçrar (panik yaşar)! Bu deney, varoluşun o ürpertici sınırını ifşa eder: Bedenimiz (ve "ben" dediğimiz fiziksel bütünlüğümüz) sarsılmaz bir mülkiyet değildir; o sadece beynimizin duyusal (görsel/dokunsal) senkronizasyonlarla anlık olarak kurguladığı, cansız bir nesneye bile saniyeler içinde kopyalanabilen (hacklenebilen) esnek, akışkan ve sahte bir illüzyon kablosudur.',
    questionStem: 'Plastik El İllüzyonu deneyinde hastanın "plastik ele vurulduğunda" kendi canı yanmış gibi çığlık atması, insan beyni ve "beden algısı" hakkında neyi ispatlamaktadır?',
    options: [
      'Plastik malzemelerin insan derisindeki sinir uçlarıyla manyetik bir bağ kurabildiğini',
      'İnsanın "kendi bedeni (benliği)" sandığı o sarsılmaz fiziksel bütünlük algısının; aslında sadece "duyuların eşzamanlı çalışmasına (senkronizasyonuna)" dayanan anlık (ve esnek) bir kurgu olduğunu; beynin doğru hilelerle kandırıldığında cansız bir plastiği bile "kendisi" sanacak kadar kolayca hacklenebildiğini (illüzyonunu)',
      'Doktorların kullandığı fırçaların hastaların derisinde alerjik reaksiyonlara yol açtığını',
      'Çekiç darbelerinin çıkardığı yüksek sesin insanları fiziksel acıdan daha çok korkuttuğunu'
    ],
    correct: 1,
    explanation: 'Hastanın plastik ele çekiç vurulduğunda kendi kolu kırılmış gibi korkması; "beden (benlik)" algımızın sabit bir mülk değil, duyuların senkronizasyonuna (görme-hissetme) bağlı esnek ve kolayca hacklenebilen (cansız nesneyi bile sahiplenen) anlık bir kurgu/illüzyon olduğunu ispatlar.'
  },
  {
    title: 'Galyum Kaşığı (Eriyen Gerçeklik)',
    passage: 'Bir misafire sıcak bir kahve ve yanında gümüş (metal) görünümlü parlak, katı ve ağır bir çay kaşığı verirsiniz. Misafir o metal kaşığı alıp sıcak kahvesini karıştırmak için bardağa daldırdığında aklını yitirecek gibi olur: O sert ve kırılmaz metal kaşık, sıcak suyun içine girdiği saniye tıpkı pamuk şekeri gibi (veya buz gibi) eriyip suyun dibine ağır bir cıva (sıvı metal) birikintisi olarak çöker! Bu bir büyü değil, erime noktası sadece 29.7 santigrat derece olan (yani elinize uzun süre aldığınızda vücut ısınızla bile eriyen) nadir "Galyum" metalinin fiziksel şakasıdır. Galyum Kaşığı, bilim felsefesinde bizim o "Katı ve Değişmez" sandığımız gerçekliklere (ve dogmalara) atılmış sembolik bir tokattır. Bizim kendi konforlu koşullarımızda (oda sıcaklığında) sert, dayanıklı ve sarsılmaz görünen tüm inançlar, yapılar ve maddeler; sadece "doğru ve sınırları zorlayan (farklı bir ortam/ısı)" ile karşılaştıklarında saniyeler içinde sıvılaşıp şeklini kaybedebilirler. Evrendeki hiçbir şey kendi başına mutlak ve katı değildir; her gerçeklik, sadece etrafındaki çevre şartlarının ona izin verdiği sürece ayakta kalan (ve ortam değişince eriyen) geçici bir kurgudan ibarettir.',
    questionStem: 'Metal bir çay kaşığının (Galyumun) sıcak suda saniyeler içinde erimesi, yazar tarafından nesnelerin ve "gerçekliğin doğası" bağlamında felsefi olarak neyin metaforu yapılmıştır?',
    options: [
      'Sıcak içeceklerin insan midesinde ve sindirim sisteminde metallerden daha zararlı olduğunun',
      'Bizim "sarsılmaz, değişmez ve mutlak katı" sandığımız yapıların (veya inançların); aslında tamamen "bulundukları çevre koşullarına (iklime/sıcaklığa) bağlı olan geçici formlar olduğu"; şartlar (ve ortam) değiştiğinde o mutlak katılığın saniyeler içinde (bir illüzyon gibi) eriyip çökebileceği gerçeğinin',
      'Gümüş madeninin dünya tarihindeki en değerli ve işlenmesi en zor olan metal olduğunun',
      'Sihirbazlık gösterilerinde kullanılan kimyasalların insanları kandırmak için tehlikeli olduğunun'
    ],
    correct: 1,
    explanation: 'Katı metalin sıcak suya girince erimesi; bizim "katı ve mutlak" sandığımız gerçekliklerin (ve inançların), sadece o anki "çevre koşullarının izin verdiği" geçici formlar olduğu ve ortam (sıcaklık/şartlar) değiştiğinde o katılığın saniyeler içinde eriyip çökebileceğinin metaforudur.'
  },
  {
    title: 'Dilbert Prensibi (Liyakatin Tersine Akması)',
    passage: 'Sosyolojide "Peter Prensibi", başarılı insanların yeteneksiz olacakları o son zirveye kadar terfi ettiklerini (ve orada çakıldıklarını) söyler. Ancak Scott Adams, kurguladığı o meşhur "Dilbert Prensibi" (Dilbert Principle) ile modern bürokrasiye ve şirketlere çok daha karanlık (ve absürt komik) bir boyuttan saldırır: Şirketler, "işe yaramaz, aptal ve üretimi her zaman sabote eden (en kötü)" çalışanlarını; onları alt kademede bırakıp üretim bandına (gerçek müşteriye ve sisteme) doğrudan zarar vermelerini engellemek için, kasten ve sistemli bir şekilde "Yönetim (Müdürlük) Kademesine" terfi ettirirler! Yönetimde o beceriksizler artık sadece uzun toplantılar yapar, vizyon belgeleri yazar ve imza atarlar; böylece asıl "gerçek işi yapan (üreten) zeki işçilerin" ayağına dolanmaktan (onları engellemekten) uzaklaştırılmış (ve yalıtılmış) olurlar. Dilbert Prensibi, modern iş dünyasının o sinir bozucu paradoksudur: Yönetici koltuklarındaki liyakatsizlik tesadüf değildir; sistem, aptallığı zararsız bir köşeye hapsetmek için onu en üst makamla (ve yüksek maaşla) "ödüllendirerek" izole eden absürt bir çöp tenekesi taktiği uygular.',
    questionStem: 'Dilbert Prensibi, şirketlerde ve kurumlarda (tepe noktalarında) "liyakat ve terfi" kavramlarının hangi absürt (ve komik) paradoksunu açıklar?',
    options: [
      'Zeki çalışanların her zaman yönetici olmaktan korktukları için kasten düşük performans göstererek işçi kalmayı tercih ettiklerini',
      'Kurumların; asıl üretimi sabote eden "yeteneksiz ve beceriksiz" kişileri, alt kademeden (gerçek işten) uzaklaştırıp onlara "zarar veremeyecekleri" sahte bir izolasyon alanı yaratmak adına onları kasten "Yönetici (Müdür)" yaparak üst kademeleri bir "çöp tenekesine (ödüllü sürgüne)" çevirdiği paradoksunu',
      'Toplantı saatlerinin uzamasının şirketlerin kâr marjını matematiksel olarak her zaman ikiye katladığını',
      'Müdürlerin işçilere göre her zaman daha erken saatlerde işe gelerek çok daha fazla çalıştığını'
    ],
    correct: 1,
    explanation: 'Beceriksizlerin üretim bandına zarar vermesin diye (izole etmek için) kasten müdürlüğe (tepeye) terfi ettirilmesi; liyakatsizliğin tepede toplanmasının tesadüf değil, aptallığı "zararsız kılmak" için onu makamla ödüllendirerek izole eden (absürt/çöp tenekesi taktiği) o paradoksal sistemi açıklar.'
  },
  {
    title: 'Talidomit Faciası (Kârın Doğurduğu Canavar)',
    passage: '1950\'lerde Avrupa\'da hamile kadınların sabah bulantılarını ve uykusuzluklarını geçirmek için "Thalidomide" (Talidomit) adında mucizevi (!) bir ilaç piyasaya sürüldü. İlaç şirketleri bunun o kadar "güvenli" olduğunu söylüyordu ki, ilaç eczanelerde reçetesiz şeker gibi pazarlandı. Ancak klinik testler çok kısa tutulmuş ve ilacın "fetüs (anne karnındaki bebek)" üzerindeki etkisi kasten (kâr hırsıyla) ve hızla incelenmemişti! Birkaç yıl sonra dünya tıp tarihinin en korkunç kâbusu yaşandı: İlaca maruz kalan 10.000\'den fazla bebek; kolları ve bacakları gelişmemiş, elleri omuzlarına yapışık (fokomeli sendromu), iç organları eksik ve şekil bozukluklarıyla (ölü veya ağır engelli olarak) doğdu! İlaç piyasadan çekilene kadar binlerce ailenin hayatı karardı. Talidomit Faciası; devasa ilaç endüstrisinin (küresel kapitalizmin) "hızlı kâr, seri üretim ve pazarlama şovu" uğruna; bilimsel şüpheyi, uzun vadeli denetimi ve ahlakı nasıl bir kalemde çöpe attığının kanlı belgesidir. Ve ne yazık ki bu kör açgözlülüğün bedelini; o şirketler değil, bizzat en masumlar (doğmamış çocuklar) kendi parçalanmış ve uzuvsuz bedenleriyle ödemiştir.',
    questionStem: '1950\'lerde yaşanan Talidomit Faciası (ilacın on binlerce bebeği engelli bırakması), ilaç endüstrisi ve kapitalizm hakkında neyin "karanlık ve ahlaksız" bir örneğidir?',
    options: [
      'Gebelikte yaşanan sabah bulantılarının aslında tedavi edilemeyen psikolojik bir sorun olduğunun',
      'Hızlı ticari kazanç (ve pazarlama şovu) uğruna; zorunlu klinik testlerin (güvenliğin/ahlakın) kasten hiçe sayılarak aceleye getirilmesinin ve bu "kapitalist (kibirli) açgözlülüğün" bedelini doğmamış masum çocuklara (onların sakat kalan bedenlerine) ödeten o ahlaksız ve yıkıcı (cinayet) sistemin',
      'Hamile kadınların eczanelerden kendi başlarına ilaç alarak sağlıklarını her zaman tehlikeye attıklarının',
      '1950\'lerde laboratuvar deneylerinde kullanılan farelerin insanlarla hiçbir genetik benzerliğinin bulunmadığının'
    ],
    correct: 1,
    explanation: 'İlacın testleri (fetüs etkisi) kasten yapılmadan kâr/hız uğruna satılması ve 10 bin bebeğin sakat kalması; kapitalizmin/endüstrinin "hızlı kâr" hırsıyla ahlakı ve güvenliği (insan hayatını) hiçe sayıp, kendi açgözlülüğünün faturasını en masumlara (bebeklere) ödeten o karanlık/ahlaksız sistemini gösterir.'
  }
];

export const bilimParagrafSorulari53: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_53.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_53[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim53-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_54 = [
  {
    title: 'Goodhart Yasası (Hedefin Yozlaşması)',
    passage: 'Sovyetler Birliği döneminde devlet, bir çivi fabrikasına yıllık üretim hedefi olarak "10 Ton Çivi" kotası koydu. Fabrika müdürü bu hedefi tutturmak için dâhiyane ve kurnazca bir yol buldu: Kullanılamayacak kadar ağır, devasa boyutlarda sadece "birkaç tane" dev çivi ürettiler ve tonaj hedefini anında tutturdular! Bunun üzerine devlet kuralı değiştirdi ve hedefi "Ağırlık değil, 1 milyon ADET çivi" olarak güncelledi. Bu kez de fabrika, kimsenin işine yaramayacak, iğne ucu kadar incecik ve mikroskobik 1 milyon adet çivi üreterek hedefi yine tutturdu! Ekonomist Charles Goodhart bu absürt (ve evrensel) durumu şu efsanevi kuralıyla özetler: "Bir ölçüm, \'hedef\' haline geldiği an, artık iyi bir ölçüm olmaktan çıkar!" (Goodhart Yasası). Şirketlerde, okullarda (not sisteminde) veya siyasette; kitlelerin önüne ulaşılması gereken matematiksel bir (sayı/hedef) koyduğunuz an; insanlar asıl "kaliteyi, amacı ve ahlakı" anında çöpe atarak, sadece o rakamı (sistemi) hacklemeye odaklanan bencil ve kurnaz birer robota dönüşürler.',
    questionStem: 'Goodhart Yasası\'nın (Bir ölçümün hedef haline geldiğinde yozlaşması) Sovyet çivi fabrikası örneği üzerinden anlattığı sosyolojik ve psikolojik zaaf nedir?',
    options: [
      'Sovyet mühendislerin çelik üretiminde Batı\'dan çok daha ileri ve verimli teknikler kullandığı gerçeği',
      'İnsanoğlunun (ve sistemlerin), belirlenen matematiksel "hedeflere/rakamlara" ulaşmak uğruna işin "asıl amacını, kalitesini ve ahlakını" anında hiçe sayarak sistemi kurnazca manipüle etme (hackleme/yozlaşma) eğilimi',
      'Büyük boyutlu çivilerin inşaat sektöründe küçük çivilere göre çok daha fazla rağbet gördüğü ekonomik yanılgısı',
      'Fabrikaların üretim kotalarını belirlerken sadece işçilerin sendikal haklarını gözettikleri inancı'
    ],
    correct: 1,
    explanation: 'Hedef tonaj olunca dev çivi, sayı olunca minik çivi üretmeleri; insanların sadece "hedef rakamı" tutturmak uğruna kaliyeti ve asıl amacı (ahlakı) hiçe sayıp sistemi kurnazca hacklediklerini (yozlaşmayı) ispatlar.'
  },
  {
    title: 'Michel Siffre (Zamanın Mağarası)',
    passage: 'Zaman nedir? Sadece kolumuzdaki saatin yelkovanı mı, yoksa beynimizin biyolojik bir ritmi mi? 1962 yılında Fransız mağara bilimci Michel Siffre, bu soruyu cevaplamak için Alpler\'in 100 metre altındaki zifiri karanlık, sessiz, buz gibi bir mağaraya indi. Yanında ne bir saat, ne takvim ne de güneş ışığı vardı! Sadece uyuyor, yiyor ve kitap okuyordu. Siffre, mağarada 2 ay geçirdikten sonra asistanları ona telsizle "Deney bitti, dışarı çık" dediğinde şoka girdi. Siffre, daha "sadece 1 ay" geçtiğine yemin ediyordu! Güneş (ve sosyal rutinler) ortadan kaybolduğunda, insan beyni zaman algısını kelimenin tam anlamıyla bükmüş, felç etmişti. Siffre\'nin bir "günü" (biyolojik ritmi) 24 saatten koparak 48 saate kadar uzamış, bazen tek bir uykuda 15 saat aralıksız uyumuştu. Bu dondurucu deney bize zamanın mutlak bir fizik yasası olmadığını kanıtlar: "Zaman", doğanın bize giydirdiği ışık ve toplumun dayattığı rutinlerle kurgulanmış toplumsal bir illüzyondur. Bu ritimler (güneş) silindiğinde, insan zihni kendi zamansızlığının (ve uzayan hiçliğinin) karanlık okyanusunda kaybolmaya mahkûmdur.',
    questionStem: 'Michel Siffre\'nin "Mağara Deneyi" (Zaman algısının yarı yarıya şaşması), insanın "Zaman ve Biyolojik Ritim" algısı hakkında neyi ifşa etmiştir?',
    options: [
      'Soğuk ve rutubetli ortamların insan hafızasında geçici amnezi (unutkanlık) yarattığı fiziksel gerçeğini',
      'Zamanın mutlak, beynin içinde doğuştan tıkır tıkır işleyen değişmez bir saat olmadığını; aksine "güneş ışığı, sosyal çevre ve rutinler" ortadan kalktığında, beynin zaman algısının anında bükülüp çöktüğü bağımlı bir "illüzyon/kurgu" olduğunu',
      'İnsanların karanlıkta daha hızlı yaşlandıkları ve hücre yenilenmesinin tamamen durduğu genetik kanıtını',
      'Mağaralarda yaşayan eski insanların aslında günleri değil sadece yılları sayarak yaşadıkları teorisini'
    ],
    correct: 1,
    explanation: 'Saat ve güneş olmayınca adamın 2 ayı 1 ay sanması (ve gününün 48 saate çıkması); zaman algımızın doğuştan mutlak/sabit olmadığını, dışarıdaki güneşe ve sosyal rutinlere bağlı (bükülebilir) esnek bir illüzyon/kurgu olduğunu ifşa eder.'
  },
  {
    title: 'Gyges\'in Yüzüğü (Ahlakın İllüzyonu)',
    passage: 'Eğer size görünmezlik bahşeden sihirli bir yüzük verilseydi ve yaptığınız hiçbir suç için asla yakalanmayacağınızı (ve kınanmayacağınızı) %100 bilseydiniz, yine de ahlaklı ve dürüst kalmaya devam eder miydiniz? Platon, 2500 yıl önce yazdığı "Devlet" adlı eserinde bu korkunç soruyu "Gyges\'in Yüzüğü" efsanesiyle sorar. Gyges, sıradan, dürüst ve kendi halinde fakir bir çobandır. Bir gün depremle yarılan bir mağarada ölü bir devin parmağında sihirli bir yüzük bulur. Yüzüğü taktığında "görünmez" olduğunu fark eder. Peki bu dürüst köylü ne yapar dersiniz? Adaleti mi sağlar? Hayır! Görünmezliğin verdiği o "yakalanmama (hesap vermeme)" kalkanıyla anında saraya sızar, kraliçeyi baştan çıkarır, kralı öldürür ve ülkenin mutlak tiranı (zalimi) olur! Platon, insan doğasının o ikiyüzlü ve sahte ahlakını bu efsaneyle yırtıp atar: İnsanların çoğu "iyi" oldukları için veya adaleti sevdikleri için ahlaklı davranmazlar; onlar sadece "izlendikleri, yargılanmaktan ve ceza almaktan korktukları" için iyiymiş (rolü) yaparlar. Görünmezlik (yakalanmama) garantisi verildiği an, insanın içindeki o zincirlenmiş zalim saniyeler içinde uyanır.',
    questionStem: 'Platon\'un "Gyges\'in Yüzüğü" efsanesi (görünmezlik bulan dürüst çobanın katil olması), insanlığın "Ahlak" kavramına dair hangi karanlık ve ikiyüzlü felsefeyi savunur?',
    options: [
      'Ahlakın sadece soylu ve zengin sınıflara ait genetik bir özellik olduğu yönündeki eşitsizliği',
      'Büyü ve sihir gibi dışsal (mistik) güçlerin insanın iradesini kasten zehirlediği yönündeki mitolojik inancı',
      'İnsanın özünde (gerçekte) iyi ve ahlaklı olmadığını; ahlakın çoğunlukla "izlenme, yargılanma ve cezalandırılma korkusundan" kaynaklanan sahte bir toplumsal kalkan (rol) olduğunu; ceza korkusu (görünmezlik) ortadan kalktığında içteki zalimin uyanacağı gerçeğini',
      'Kralların ve yöneticilerin her zaman suikastlardan korunmak için sihirli nesneler aradıkları tarihi saplantısını'
    ],
    correct: 2,
    explanation: 'Çobanın görünmez olunca (ceza korkusu bitince) hemen katile/zalime dönüşmesi; ahlakın insanın özünde iyi olmasından değil, sadece "yargılanma/ceza" korkusuyla oynanan sahte bir rol (illüzyon) olduğu felsefesini savunur.'
  },
  {
    title: 'Trofim Lysenko (İdeolojinin Katlettiği Bilim)',
    passage: '1930\'larda Sovyetler Birliği\'nde tarım çökmek üzereyken, Trofim Lysenko adında diplomasız ve kurnaz bir tarım uzmanı ortaya çıktı. Gregor Mendel\'in "Genetik (DNA)" yasalarının kapitalist ve burjuva yalanları olduğunu; bitkilerin (tıpkı komünist bir işçi gibi) "doğru ortamda eğitilerek" genlerinin değiştirilebileceğini iddia etti! O kadar kibirliydi ki, tohumları dondurucu soğuk suda bekleterek onlara "kışa dayanmayı öğreteceğine" inanıyordu. Stalin bu "ideolojik olarak uygun" yalanı çok sevdi ve Lysenko\'yu bilimin başına getirdi. Karşı çıkan gerçek genetikçiler ya idam edildi ya da sürgüne gönderildi. Sonuç mu? Lysenko\'nun "eğitilmiş" komünist tohumları tarlalarda anında çürüdü! O dönemde Sovyetler Birliği ve Çin\'de bu sahte bilim yüzünden tarihin en büyük kıtlıklarından biri yaşandı ve "30 Milyon" insan açlıktan öldü. Lysenkoizm; bilimin ve hakikatin, devletin siyasi (ideolojik) kibri uğruna çöpe atıldığında; ortaya çıkan şeyin yeni bir keşif değil, milyonlarca masumun cesedinden oluşan dondurucu ve apokaliptik bir toplu mezar (cinayet) olduğunun kanlı ispatıdır.',
    questionStem: 'Sovyet tarım uzmanı Trofim Lysenko\'nun (Genetiği reddedip bitkileri eğiteceğini sanması) yüzünden 30 milyon insanın ölmesi, "Bilim ve Otorite" bağlamında neyin uyarısıdır?',
    options: [
      'Soğuk iklimlerde bitkilerin mutasyona uğramasının biyolojik olarak imkânsız olduğu teknik gerçeğinin',
      'Objektif ve evrensel bilimin; siyasi "ideolojilere, dogmalara ve devlet kibrine" kurban edilerek susturulduğunda (ve sahte bilim desteklendiğinde), bunun kaçınılmaz olarak kitlelerin ölümüne (apokaliptik bir felakete) yol açacak acımasız bir cinayet olduğunun',
      'Rus çiftçilerin aslında tarım yapmayı hiç bilmediği için suçun tamamen köylülere atıldığının',
      'Kapitalist ülkelerin Sovyet tohumlarını bilerek zehirleyip soğuk savaş taktikleri uyguladığının'
    ],
    correct: 1,
    explanation: 'Genetiği reddedip (ideolojik/siyasi yalanla) tohumları soğuğa atması ve 30 milyon insanın açlıktan ölmesi; objektif bilimin siyasi ideolojiye (otorite kibrine) kurban edildiğinde ortaya devasa ve ölümcül bir felaketin çıkacağı uyarısıdır.'
  },
  {
    title: 'Mavi Kan Sömürüsü (Atnalı Yengeci)',
    passage: 'Modern tıbbın ve aşı endüstrisinin o parlak, hijyenik vitrininin arkasında, doğaya karşı işlenmiş kan dondurucu ve vampirik bir sömürü yatar: "Atnalı Yengeçleri" (Horseshoe Crabs). Bu canlılar dinazorlardan bile yaşlıdır (450 milyon yıldır dünyadadırlar) ve kanları insan gibi kırmızı değil, bakır içerdiği için "Neon Mavisi"dir. İşin korkunç tarafı; bu mavi kan, tıbbi cihazlardaki en ufak mikrop kalıntısını (endotoksinleri) anında tespit edip pıhtılaşan "dünyadaki yegâne" kusursuz biyolojik maddedir! İlaç (kapitalizm) endüstrisi ne yaptı dersiniz? Her yıl yüz binlerce atnalı yengecini okyanustan yakalar, onları laboratuvarlarda devasa iğnelerle şişelere bağlar ve kanlarının %30\'unu "canlı canlı" sömürerek (sağarak) şişeler! Sonra onları sersemlemiş ve yarı ölü halde denize geri atarlar (büyük kısmı o şokla ölür). Milyarlarca dolarlık ilaç sektörü (ve insanlığın o övündüğü sağlık güvencesi), aslında 450 milyon yıllık masum bir türün "damarlarından zorla çekilen o mavi kanın" üzerine kurulmuş ahlaksız, sessiz ve endüstriyel bir vampirliktir.',
    questionStem: 'İlaç endüstrisinin mikrop tespiti için Atnalı Yengeçlerinin "mavi kanını" (canlı canlı sağarak) kullanması, yazar tarafından neyin karanlık bir eleştirisi olarak sunulmaktadır?',
    options: [
      'Deniz canlılarının kanındaki bakır oranının insanları zehirleme ihtimali olduğunun',
      'Modern tıbbın (ve kapitalizmin) o parlak ve "insancıl/kurtarıcı" vitrininin arkasında; doğayı sömüren, kadim canlıları birer "kan sağma (vampir) makinesine" çeviren ahlaksız ve acımasız bir endüstriyel istismarın yattığının',
      'Yengeçlerin dinazor çağından kaldığı için genetik olarak çok zayıf (ve ölüme meyilli) bir tür olduğunun',
      'Sentetik kan üretiminin maliyeti yüksek olduğu için fabrikaların yavaş yavaş bu işi bıraktığının'
    ],
    correct: 1,
    explanation: 'Hayat kurtaran ilaç endüstrisinin, yengeçleri laboratuvarlara bağlayıp canlı canlı kanlarını (mavi kan) sömürmesi; tıbbın ve kapitalizmin "kurtarıcı" maskesi ardında doğayı sömüren acımasız/endüstriyel bir vampirlik/istismar yattığını eleştirir.'
  },
  {
    title: 'Kopernik İlkesi (Sıradanlığın Matematiği)',
    passage: 'İnsanlar dünyayı hep evrenin merkezi (ve özel) sanırdı; Kopernik Dünya\'nın sıradan bir gezegen olduğunu kanıtlayıp bu kibri yıktı. Peki bu "Sıradanlık" (Mediocrity Principle) hayatı nasıl tahmin edebilir? 1969\'da Amerikalı fizikçi J. Richard Gott, Berlin Duvarı\'nı ziyaret ederken kendine bir soru sordu: "Bu duvar ne kadar daha ayakta kalır?" Elinde hiçbir istihbarat, hiçbir siyasi bilgi yoktu. Sadece "Kopernik İlkesini" kullandı: "Benim bugün buraya gelmem özel bir gün değil. Ben zamanın rastgele (sıradan) bir noktasındayım. Yani duvarın toplam ömrünün muhtemelen %25 ile %75\'i arasındaki o ortalama (sıradan) dilimindeyim." Duvar o gün 8 yaşındaydı. Gott bu basit matematikle duvarın "En az 2.5 yıl, en fazla 24 yıl daha yaşayacağını" tahmin etti! Ve duvar 1989\'da (tam 20 yıl sonra) yıkıldı! Kopernik İlkesi, zihnimizi felç eden o narsisizmi yıkar: "Siz, ülkeniz veya yaşadığınız çağ hiçbir şekilde ÖZEL, kutsal veya istisnai değildir!" Her şey evrenin o devasa ve sıkıcı "istatistiksel çan eğrisinin" tam ortasındaki o sıradanlığa mahkûmdur.',
    questionStem: 'J. Richard Gott\'un Berlin Duvarı\'nın ömrünü "Kopernik İlkesi" ile doğru tahmin etmesi, insanlığın (ve zaman algımızın) hangi "kibirli (narsisistik)" yanılgısını çürütmektedir?',
    options: [
      'Alman hükümetinin duvarın inşasında kullandığı betonun aslında çok zayıf bir karışım olduğunu',
      'İnsanoğlunun; "yaşadığı dönemin, varlığının veya tanık olduğu olayların çok özel (istisnai/merkezi) olduğu" şeklindeki o narsisistik kibrini yıkarak; aslında evrendeki ve zamandaki her şeyin devasa bir "istatistiksel sıradanlığa (ortalama olmaya)" mahkûm olduğunu',
      'Siyasi olayların matematiksel formüllerle çözülemeyecek kadar karmaşık insan duygularına dayandığını',
      'Soğuk savaş dönemindeki istihbarat örgütlerinin fizikçileri ajan olarak kasten kullandıklarını'
    ],
    correct: 1,
    explanation: 'Gott\'un "bugün özel değil, ben sıradan bir zamandayım" diyerek duvarın ömrünü (hiçbir siyasi bilgi olmadan) bilmesi; insanın "biz çok özel/merkezde bir çağdayız" şeklindeki narsisistik (kibirli) yanılgısını yıkarak, her şeyin sıradan (istatistiksel ortalama) olduğu gerçeğini ispatlar.'
  },
  {
    title: 'Wilt Chamberlain Paradoksu (Özgürlüğün Adaletsizliği)',
    passage: 'Bir toplumda herkesin "mutlak ve kusursuz bir şekilde eşit" servete sahip olduğu (D1) ütopik bir düzen kurduğunuzu hayal edin. Herkesin cebinde tam 100 lira var. Ancak o toplumda, dünyanın en iyi basketbolcusu "Wilt Chamberlain" yaşamaktadır. Chamberlain insanlara der ki: "Eğer beni izlemek istiyorsanız, kapıdaki kutuya sadece kendi isteğinizle (özgür rızanızla) fazladan 25 kuruş atacaksınız." Bir yıl boyunca bir milyon insan maçları büyük bir zevkle izler ve o kutuya parayı atar. Sezon bittiğinde Chamberlain devasa bir servete kavuşurken, diğer herkesin parası azalmış ve o baştaki "Kusursuz Eşitlik (D1)" anında çökmüştür! Filozof Robert Nozick bu paradoksla "Adalet ve Eşitlik" yalanını parçalar: Hiçbir hırsızlık, baskı veya sömürü olmadan; sadece insanların "kendi özgür iradeleriyle, gönüllü takaslar" yapmasına izin verdiğiniz an bile, o baştaki eşitlik (ve planlanmış adalet) paramparça olur. Özgürlüğün olduğu yerde mutlak eşitlik (kalıp) yaşayamaz; eşitliği korumak için, insanların özgür iradesini her saniye zorla ezmek (tiranlık kurmak) zorundasınızdır.',
    questionStem: 'Robert Nozick\'in "Wilt Chamberlain Paradoksu" (Gönüllü bilet parasıyla eşitliğin bozulması), "Özgürlük ve Eşitlik" felsefesinde nasıl bir çatışmayı ispatlar?',
    options: [
      'Sporcuların her zaman diğer meslek gruplarına göre daha zeki yatırım planları yaptıklarını',
      'Basketbol maçlarının kapitalist tüketim kültürünü kasten kışkırtan ahlaksız gösteriler olduğunu',
      'İnsanların kendi "özgür iradeleri ve rızalarıyla" yaptığı basit (ve masum) seçimlerin bile; o baştan planlanmış "mutlak eşitlik ve adalet kalıbını" anında yıkacağını; yani "Özgürlüğün, zorunlu eşitlik kalıplarını her zaman bozacağı (birbiriyle çatışacağı)" gerçeğini',
      'Halkın zengin sporcuları kıskanarak eninde sonunda onlara karşı büyük bir isyan çıkaracağını'
    ],
    correct: 2,
    explanation: 'Herkesin eşit olduğu sistemde insanların sırf kendi rızalarıyla bilet parası vermesiyle o eşitliğin (hiç haksızlık olmadan) anında bozulması; "Özgürlüğün (serbest seçimin)" planlanmış mutlak eşitlik kalıplarını her zaman yıkacağı (Özgürlük-Eşitlik çatışması) gerçeğini ispatlar.'
  },
  {
    title: 'Panspermia Hipotezi (Uzaylı Atalarımız)',
    passage: 'İnsanoğlu, yaşamın milyarlarca yıl önce dünyadaki çamurlu ve sıcak denizlerde şimşeklerin çakmasıyla (kendi evimizde) başladığına inanır. Ancak bazı astrofizikçiler ve mikrobiyologlar o ezber bozan ve beyni felç eden alternatifi sunarlar: "Panspermia Hipotezi" (Tohumların Evrensel Ekimi). Bu teoriye göre, hayat Dünya\'da hiç başlamadı! Yaşam, milyarlarca yıl önce Mars\'ta veya fersah fersah uzaklıktaki başka bir yıldız sisteminde yeşerdi. Ve devasa meteor çarpmalarıyla kopan kayalar (içlerinde donmuş ve uyuyan bakterileri / tohumları taşıyarak) uzay boşluğunda milyonlarca yıl yolculuk yaptıktan sonra (Tardigratlar gibi uykuda), şans eseri yeni soğuyan Dünya\'mıza çakılıp o tohumları yeryüzünün okyanuslarına bulaştırdılar! Bu hipotez sadece astrofiziksel bir iddia değildir; aynı zamanda bizim varoluşsal "biyolojik pasaportumuzu" sorgulatan dondurucu bir kimlik krizidir: Eğer Panspermia doğruysa, bizler yeryüzünün öz (asil) çocukları değiliz; biz, uzay boşluğundan meteorlarla buraya fırlatılmış, bu gezegeni istila edip yeşermiş devasa bir "uzaylı (yabancı) bakteri kolonisinden" başka bir şey değiliz!',
    questionStem: 'Panspermia Hipotezi (Yaşamın dünyaya meteorlarla dışarıdan geldiği tezi), insanoğlunun "biyolojik kimliği (kökeni)" hakkında neyin sarsıcı (ve ironik) bir uyanışıdır?',
    options: [
      'Gelecekte uzay gemilerinin dünyadaki tüm virüsleri uzaya taşıyıp diğer gezegenleri kasten zehirleyeceğinin',
      'Evrim teorisinin tamamen yalan olduğu ve genetik bilimiyle canlıların asla değişmediğinin',
      'İnsanın yeryüzünün "öz evladı (ve merkezi)" olduğu kibrini yıkarak; aslında bizim milyarlarca yıl önce uzay boşluğundan kayalarla buraya düşüp bu gezegeni kaplamış birer "uzaylı/yabancı bakteri (istilacı) türü" olabileceğimiz ironisini (kimlik krizini)',
      'Meteorların aslında uzaylı medeniyetler tarafından kasten dünyayı yok etmek için fırlatıldığını'
    ],
    correct: 2,
    explanation: 'Yaşamın dünyada değil, uzaydan meteorlarla gelen bakterilerle başlaması; bizim dünyanın öz evladı olduğumuz kibrini yıkarak, aslında bizim de gökten düşmüş birer "uzaylı/yabancı (istilacı) bakteri türü" olabileceğimiz kimlik krizini yaratır.'
  },
  {
    title: 'Veba Doktorlarının Gagası (Korkunun Komik Kostümü)',
    passage: 'Orta Çağ Avrupa\'sında Kara Ölüm (Veba) sokakları kasıp kavururken, şehirlerde dolaşan "Veba Doktorları"nın (Plague Doctors) o şeytani, uzun karga gagalı deri maskeleri günümüzde bile korku filmlerinin en ikonik sembolüdür. Ancak bu maskeler o dönemki tıp bilgisinin ne kadar çaresiz (ve komik) bir kibrin içine hapsolduğunu gösterir. Doktorlar vebanın pireler (bakteri) tarafından taşındığını bilmiyorlardı! Onlar "Miasma Teorisi"ne, yani hastalığın havadaki "kötü kokulardan (şeytani gazlardan)" bulaştığına inanıyorlardı. Bu yüzden o uzun gagaların içine gül yaprakları, nane, karanfil ve tütsüler doldurarak o pis kokuyu filtreleyeceklerini (kendilerini koruyacaklarını) sandılar. Veba Doktorları\'nın o kâbus gibi kostümü, insanın korku ve cehalet karşısındaki o en acınası kalkanıdır: Bilim (veya insanlık) bir gerçeği (pireleri) göremediğinde; o boşluğu yanlış teorilerle, gül kokularıyla ve deri maskelerle doldurup, ölümü şatafatlı (ama tamamen işe yaramaz) bir tiyatro sahnesine çevirerek kendini güvende hissetme (kandırma) yanılgısına düşer.',
    questionStem: 'Orta Çağ\'daki Veba Doktorlarının "gaga şeklindeki maskelere güzel kokular doldurarak" korunmaya çalışması (Miasma Teorisi), tıbbın (ve insanın) bilgisizlik karşısındaki hangi zaafını gösterir?',
    options: [
      'Deriden yapılan maskelerin mikroplara karşı dünyadaki en güçlü dezenfektan malzeme olduğunu',
      'Orta Çağ doktorlarının sadece psikolojik hastalıkları tedavi edebilen rahipler olduklarını',
      'Gerçek nedenselliği (pireyi/bakteriyi) bilemediklerinde; cehaletlerini (ve korkularını) gizlemek için tamamen yanlış teoriler (kötü koku) uydurup, işe yaramayan şatafatlı ritüellerle (ve kostümlerle) "kendini güvende sanma (sahte koruma/kibir)" zaafını',
      'Gül ve nanenin veba mikrobunu anında öldüren mucizevi bir kimyasal karışıma sahip olduğunu'
    ],
    correct: 2,
    explanation: 'Mikrobu (pireyi) bilmedikleri için "kötü koku" uydurup gagaya gül doldurmaları; insanın gerçeği bilmediğinde (cehalet karşısında) kendi uydurduğu sahte/yanlış kurgularla (kostümlerle) kendini güvende sanma (ve şov yapma) zaafını gösterir.'
  },
  {
    title: 'Oumuamua (Yıldızlararası Yalnızlığın Ziyaretçisi)',
    passage: 'Ekim 2017\'de Hawaii\'deki bir teleskop, Güneş sistemimizin içinden saatte 315.000 kilometre gibi çılgın bir hızla geçip giden tuhaf bir nesne fark etti. Ona "Oumuamua" (Uzaktan gelen ilk haberci) adını verdiler. İnsanlığı şoka sokan şey bu nesnenin güneş sistemine ait olmamasıydı; o, insanlık tarihinde tespit edilen "Yıldızlararası (başka bir yıldız sisteminden gelen) İlk Ziyaretçi" idi! Üstelik şekli bir yıldıza veya patatese benzemiyordu; puro şeklinde, uzun, ince ve karanlık, kırmızımsı bir nesneydi. Güneşin etrafından dönerken aniden hiçbir kuyrukluyıldız gazı (kuyruğu) püskürtmeden yön değiştirip hızlanınca (sanki kendi itici gücü varmış gibi), Harvardlı astrofizikçi Avi Loeb bile onun "Uzaylılara ait terk edilmiş bir uzay gemisi (veya ışık yelkenlisi)" olabileceğini söyledi! Oumuamua geldi, bize hızla bir selam verdi ve sonsuz karanlığa doğru (bir daha asla dönmemek üzere) çekip gitti. Bu nesnenin uzaylı gemisi olup olmaması önemli değildir; asıl felsefi şok, insanın gökyüzünden geçen ve sadece birkaç saniye görünen dilsiz bir kayanın (hurdanın) bile arkasından "Acaba yalnız değil miyiz?" diye umutla, korkuyla ve çaresizce feryat eden o evrensel yetim (ve sahipsiz) çocuk sendromudur.',
    questionStem: 'Oumuamua (güneş sisteminden hızla geçip giden yıldızlararası nesne) vakasında, bazı bilim insanlarının bile onu "uzaylı gemisi" sanma heyecanına kapılması neyin psikolojik göstergesidir?',
    options: [
      'Güneşin çekim kuvvetinin uzaylıların rotalarını her zaman bozarak onları dünyamıza çektiğinin',
      'Puro şeklindeki kayaların evrende sadece zeki medeniyetler tarafından metalden üretildiğinin kanıtı',
      'İnsanoğlunun evrendeki o sağır edici ve dondurucu "yalnızlığından" o kadar korktuğunun ve bir "muhatap (cevap)" bulmaya öylesine muhtaç (çaresiz) olduğunun ki; uzaydan geçen sıradan bir anomaliye (kayaya) bile anında anlam ve umut yükleme (kurtarıcı sanma) zaafının',
      'Hawaii\'deki teleskopların aslında sadece askeri füzeleri tespit etmek için tasarlandığının'
    ],
    correct: 2,
    explanation: 'Geçip giden tuhaf bir kayayı hemen "uzaylı gemisi" sanma heyecanı; insanın okyanustaki (evrendeki) yalnızlığından kurtulmak ve bir "muhatap" bulmak için her anomaliye çaresizce ve umutla "anlam yükleme (yetimlik)" psikolojisini gösterir.'
  },
  {
    title: 'Fillerin Yas Ritüeli (Dilsiz Matem)',
    passage: 'İnsanlık binlerce yıl boyunca "Ölüm bilincini, yası ve cenaze ritüellerini" sadece kendi üstün (ve ruhani) aklına ait bir tekel, tanrısal bir ayrıcalık sanarak böbürlendi. Oysa vahşi doğada Afrika fillerini (Loxodonta africana) izleyen zoologlar, insanın bu kibirli tahtını yıkan efsanevi olaylara tanık oldular. Bir fil öldüğünde, sürünün diğer üyeleri (hatta ölen fille kan bağı olmayan başka sürüden filler bile) o cesedin başına gelirler. Ölünün üzerine sessizce yapraklar ve toprak atarak onu (adeta) gömerler. Günlerce o bedenin başından ayrılmaz, saatlerce hortumlarıyla o kemikleri ve dişleri okşayarak derin, dilsiz ve ritüelistik bir matem tutarlar! Hatta yıllar sonra bile aynı yoldan geçerken, sırf o kemiklere tekrar dokunmak (selam vermek) için rotalarını değiştirirler. Fillerin bu matem tutuşu; ölüm bilincinin, acının ve hatırlamanın (kutsallığın) sadece kiliselerde veya insan kafatasında kurgulanan bir din meselesi olmadığını; aksine sevginin ve yasın, doğanın o devasa ve dilsiz canlılarına (hayvanlara) kadar uzanan, kelimelere sığmayan çok daha kadim, saf ve evrensel bir acı sözleşmesi olduğunu ispatlar.',
    questionStem: 'Fillerin ölü sürülerine yaprak örtüp kemiklerini okşayarak (yas tutarak) saatlerce beklemesi, insanlığın "ruhsal ve zihinsel ayrıcalık" algısı hakkında hangi kibri çürütmektedir?',
    options: [
      'Fillerin aslında sadece fildişi hırsızlarından korunmak için ölülerini kasten sakladıkları yönündeki savunmayı',
      'Ölüm bilincinin (matem, yas, ritüel ve hatırlama gibi derin duyguların) sadece "insan zekâsına (ve inancına)" ait eşsiz, ruhani bir tekel olduğu kibrini yıkarak; sevginin ve yasın vahşi doğada da var olan kadim ve evrensel bir bağ olduğunu',
      'Hayvanların hiçbir şekilde görsel hafızaya sahip olmadıkları ve geçmişi hatırlayamadıkları tezini',
      'Afrika kıtasındaki fillerin beyin hacimlerinin Avrupa\'daki diğer memelilerden küçük olduğunu'
    ],
    correct: 1,
    explanation: 'Fillerin mezar yapıp saatlerce yas tutması ve kemikleri okşaması; "ölüm bilinci ve matemin" sadece insana özgü ruhsal (yüce) bir ayrıcalık olduğu kibrini yıkarak, yas ve sevginin doğada da var olan kadim bir bağ olduğunu çürütür.'
  },
  {
    title: 'İkarus Paradoksu (Başarının Körleştiren Laneti)',
    passage: 'Yunan mitolojisinde İkarus, balmumu ve tüylerden yapılmış kanatlarıyla gökyüzüne uçma (özgürleşme) başarısını yakalar. Ancak bu olağanüstü başarı, onun içine öylesine büyük bir kibir ve sarhoşluk enjekte eder ki; babasının "Güneşe çok yaklaşma!" uyarısını sağırlaşarak görmezden gelir. Kendini yenilmez sanıp o çok güvendiği kanatlarıyla daha da yukarıya (Güneş\'e) uçar; balmumu erir ve denize çakılarak ölür. İş (ve yönetim) dünyasında "İkarus Paradoksu" (Icarus Paradox) denen olay tam da budur! Bir şirketi (veya lideri) en tepeye taşıyan o eşsiz yeteneği ve zekâsı; bir süre sonra onu eleştiriye kapatır, dış dünyadaki değişimlere (ve tehlikelere) karşı onu tamamen "kör, kibirli ve inatçı" hale getirir. İkarus\'u öldüren şey başarısızlık veya yeteneksizlik değildir; İkarus\'u öldüren şey bizzat onu zirveye taşıyan "başarının ta kendisinin" (ve o kanatlara duyduğu aşırı güvenin) yarattığı o sarhoş edici ve ölümcül körlüktür.',
    questionStem: 'İkarus Paradoksu (Icarus Paradox) kavramına göre, başarılı liderlerin ve şirketlerin yıkımına (düşüşüne) neden olan asıl (ironik) faktör nedir?',
    options: [
      'Dış piyasadaki rakiplerin casusluk yaparak firmanın gizli sırlarını çalması',
      'Şirketi ve lideri (geçmişte) zirveye taşıyan o asıl yeteneklerin ve başarıların; kişide bir kibir, eleştiriye kapalı olma ve körlük yaratarak, bizzat o "aşırı güven duyulan" gücün kişiyi değişen dünyada yıkıma sürüklemesi (başarının lanete dönmesi)',
      'Ekonomik krizlerde devletlerin büyük şirketlere vergi afları sağlamaması',
      'Güneş ışınlarının balmumunu eriterek tamamen aerodinamik kuralları bozması'
    ],
    correct: 1,
    explanation: 'İkarus\'u (ve şirketleri) öldüren şeyin başarısızlık değil; bizzat onu uçuran kanatlarına (başarısına/yeteneğine) duyduğu o körleştirici ve sarhoş edici aşırı güven (kibir) olduğu vurgulanır.'
  }
];

export const bilimParagrafSorulari54: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_54.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_54[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim54-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_55 = [
  {
    title: 'Anton-Babinski Sendromu (Gerçekliğin İnkârı)',
    passage: 'Beynin arka kısmındaki (oksipital lob) görme merkezi tamamen hasar gören hastalar tıbben %100 kör olurlar. Ancak bazı hastalar bu körlüğü kesinlikle reddederler! Psikiyatrideki "Anton-Babinski Sendromu"nda hasta zifiri karanlıktadır, ancak "Ben çok iyi görüyorum!" diyerek ısrar eder. Doktor "Şu an üzerimde ne renk kravat var?" diye sorduğunda, hasta o anki hafızasını ve hayal gücünü kullanarak saniyeler içinde "Kırmızı ve çizgili" diyerek (olmayan) kusursuz bir yalan uydurur! Takılıp düştüğünde ise "Işık yetersizdi" veya "Halının ucu kıvrılmıştı" diyerek mantıklı bahaneler (rasyonalizasyon) üretir. Bu hastalık, insan beyninin "Hakikat (körlük)" karşısında yaşadığı o çıldırtıcı boşluğu kaldıramadığında; kendi uydurduğu sahte görüntüleri (halüsinasyonları) sanki gerçekmiş gibi gözün önüne bir film gibi yansıtarak; bilinci (ve hastayı) kendi yarattığı o karanlık ve dilsiz illüzyonun içine hapsetme (ve gerçeği kasten inkâr etme) dehasıdır.',
    questionStem: 'Anton-Babinski Sendromu\'nda (Kör hastanın körlüğünü reddedip sahte görüntüler uydurması), insan beyninin "Gerçeklik (ve eksiklik)" algısına dair hangi sarsıcı savunma mekanizmasını (illüzyonu) ifşa eder?',
    options: [
      'Göz retinasındaki fiziksel hücrelerin beynin komutlarından bağımsız olarak ışığı depolayabildiği gerçeğini',
      'Beynin (ve bilincin); "mutlak eksiklik ve karanlık (körlük)" gibi yıkıcı bir gerçekliği kabullenmektense, boşluğu anında sahte kurgular (halüsinasyonlar ve yalanlar) ile doldurarak, kendi kendini "kusursuzca gördüğüne inandırdığı" o tehlikeli ve yaratıcı inkâr (illüzyon) mekanizmasını',
      'Körlüğün aslında sadece yaşlılıkla ortaya çıkan ve psikolojik tedaviyle düzelebilen basit bir korku olduğunu',
      'İnsanların yalan söylerken her zaman göz bebeklerini fiziksel olarak büyüttüğü yönündeki kriminolojik bulguyu'
    ],
    correct: 1,
    explanation: 'Kör olduğu halde "görüyorum" diyerek beynin sürekli uydurma görüntüler ve bahaneler yaratması; beynin yıkıcı gerçeği (karanlığı/eksikliği) kabullenmek yerine kendini uydurma bir illüzyonla kandırma (inkâr) mekanizmasını ifşa eder.'
  },
  {
    title: 'Vavilov Enstitüsü (Açlıktan Ölürken Tohum Yememek)',
    passage: 'İkinci Dünya Savaşı sırasında, 1941-1944 yılları arasında Alman ordusu Leningrad (St. Petersburg) şehrini tam 872 gün boyunca kuşattı. Şehirde yiyecek kalmadı, insanlar açlıktan fareleri, deri kemerleri ve hatta birbirlerini (yamyamlık) yemeye başladılar. Ancak şehrin tam ortasında, "Vavilov Enstitüsü" adında bir bina vardı ve o binanın içinde dünyanın dört bir yanından toplanmış binlerce çeşit "yenebilir tohum, pirinç, patates ve buğday" bulunuyordu! Enstitünün 9 bilim insanı, o tohum deposunu korumakla görevliydi. Dışarıda insanlar ve kendileri kelimenin tam anlamıyla açlıktan iskelete dönerken (ve yavaş yavaş ölürken); o bilim insanları o odadaki "tek bir tohumu bile yemediler!" Kilitli kapıların ardında, milyonlarca tonluk yiyeceğin (tohumun) ortasında, 9 bilim insanı teker teker AÇLIKTAN ÖLDÜ! Neden mi yemediler? Çünkü o tohumlar kendi karınlarını doyurmak için değil, savaştan sonra "tüm insanlığın genetik mirasını (gelecekteki tarımı) korumak" içindi. Bu olay, "Bilimsel Ahlakın ve İnsan Onurunun", ölümün ve açlığın o en vahşi, en hayvani kükremesini bile ezip geçtiği, tarihteki en asil ve en dondurucu şehadetnamesidir.',
    questionStem: 'Leningrad Kuşatması\'nda Vavilov Enstitüsü bilim insanlarının "tohum dolu bir odada açlıktan ölmeyi" seçmesi, insan doğası ve ahlak felsefesi hakkında neyin en yüce kanıtıdır?',
    options: [
      'Savaş dönemlerinde tohumların kimyasallarla zehirlendiği için insanlar tarafından tüketilmesinin imkânsız olduğunun',
      'Bilim insanlarının sadece laboratuvar ortamında çalıştıkları için dışarıdaki savaşlardan habersiz, izole ve duygusuz varlıklar olduklarının',
      'İnsan iradesinin ve "yüce bir amaca (insanlığın geleceğine/bilimsel onura)" duyulan bağlılığın; insanın en ilkel, en hayvani ve en acımasız biyolojik içgüdüsü olan "açlık ve hayatta kalma (bencillik)" dürtüsünü bile alt edebilecek kadar kutsal ve sarsılmaz bir erdeme dönüşebileceğinin',
      'Sovyet yönetiminin bilim insanlarını laboratuvarlara kitleyerek onlara fiziksel olarak hiçbir yemek ulaştırmadığının'
    ],
    correct: 2,
    explanation: 'Oda yiyecek (tohum) dolu olduğu halde "gelecek nesillerin tarımı/bilim" yaşasın diye o tohumları yemeyip açlıktan ölmeleri; ahlaki (bilimsel) onurun ve iradenin, insanın en hayvani/ilkel açlık ve hayatta kalma içgüdüsünü bile alt edecek kadar yüce bir erdem olabileceğini kanıtlar.'
  },
  {
    title: 'Adaletin Biyolojisi (Capuchin Maymunları)',
    passage: 'İnsanoğlu "Adalet, eşitlik ve haksızlığa isyan" gibi kavramların; sadece anayasalarla, dinlerle veya gelişmiş filozoflarla ortaya çıkan "yüce insani erdemler" olduğunu düşünür. Biyolog Frans de Waal bu kibri, Capuchin maymunlarıyla yaptığı o ikonik (ve komik) deneyle yıktı. İki maymunu yan yana cam kafeslere koydu. İkisine de basit bir görev (taş verme) yaptırıldı ve ödül olarak ikisine de "Salatalık" verildi. Maymunlar salatalığı afiyetle yedi, her şey huzurluydu. Ancak ikinci turda araştırmacı, birinci maymuna yine salatalık verirken, onun gözü önünde ikinci maymuna çok daha lezzetli ve tatlı olan "Üzüm" verdi! Birinci maymun bu eşitsizliği gördüğü an beyni kısa devre yaptı; kendine verilen o sıradan salatalığı reddetti, onu öfkeyle araştırmacının suratına fırlattı ve parmaklıkları sallayarak çığlık çığlığa isyan etti! Bu deney; "Haksızlık (eşitsizlik) karşısında duyulan öfke ve isyanın" kültürel bir öğrenim değil; bizzat DNA\'mıza, milyonlarca yıllık primat (evrimsel) atalarımızın hayatta kalma kodlarına kazınmış "en ilkel, en biyolojik (ve dürüst) reflekstir" gerçeğini yüzümüze çarpar.',
    questionStem: 'Frans de Waal\'in Capuchin maymunları deneyi (ikinci maymuna üzüm verilince diğerinin salatalığı fırlatıp isyan etmesi), "Adalet ve Eşitsizlik" algısı hakkında felsefi ve biyolojik olarak neyi ispatlamaktadır?',
    options: [
      'Hayvanların şekerli meyvelere karşı genetik bir alerjisi olduğu için üzüm yemekten kasten kaçındıklarını',
      'İnsanoğlunun sadece yazılı kanunlarla (mahkemelerle) adalet arayışını sistemleştirdiğini ve hukuku icat ettiğini',
      '"Adalet duygusunun ve eşitsizliğe karşı gösterilen (kıskançlık/öfke) isyanının"; sadece insan aklına (kültürüne) ait yüce/soyut bir erdem olmadığını; bunun milyonlarca yıllık primat atalarımızdan miras kalan, donanımsal ve evrimsel (biyolojik) bir içgüdü olduğunu',
      'Maymunların laboratuvar ortamlarında strese girerek her zaman araştırmacılara nedensizce saldırdığını'
    ],
    correct: 2,
    explanation: 'Maymunun diğerine üzüm (daha iyi ödül) verildiğini görünce isyan edip salatalığı fırlatması; "adaletsizliğe isyan/eşitlik" hissinin sonradan öğrenilmiş kültürel bir ahlak değil, DNA\'ya kodlanmış evrimsel ve biyolojik bir içgüdü (refleks) olduğunu ispatlar.'
  },
  {
    title: 'Fotoğraf 51 (Rosalind Franklin\'in Çalınan Dehası)',
    passage: '1953 yılında bilim dünyası, "DNA\'nın İkili Sarmal (Double Helix)" yapısının keşfiyle sarsıldı. James Watson ve Francis Crick bu buluşla Nobel Ödülü\'nü alarak tarihe geçtiler. Ancak o ödülün arkasında, bilimin en iğrenç ve cinsiyetçi (akademik) hırsızlığı yatmaktaydı. O sarmalın şeklini ilk keşfeden ve X-ışını kırınımıyla kusursuzca fotoğraflayan kişi, laboratuvardaki kadın bilim insanı Rosalind Franklin idi (Meşhur Fotoğraf 51). Ancak meslektaşı Maurice Wilkins, Rosalind\'den tamamen "gizli ve izinsiz bir şekilde" o fotoğrafı alıp rakipleri Watson ve Crick\'e verdi! Watson fotoğrafı gördüğü an gerçeği anladı ve formülü kendi adına yayımladı. Rosalind Franklin kanserden genç yaşta (Nobel verilmeden) öldü. Bu olay; o parlak laboratuvarların, objektifliğin ve insanlığa hizmet şovunun arkasında; "Bilim Camiasının" (ve akademik kibrin) aslında kâr ve şöhret uğruna kendi meslektaşının emeğini gözünü kırpmadan çalan, kadını görünmez kılan (ve gerçeği çalan) kravatlı birer korsan tiranlığı olabileceğini ifşa eden utanç belgesidir.',
    questionStem: 'Rosalind Franklin\'in çektiği "Fotoğraf 51"in izinsiz alınıp Watson ve Crick\'e Nobel Ödülü kazandırması, "Akademi ve Bilim Dünyası" hakkında neyin karanlık bir eleştirisini barındırır?',
    options: [
      'X-ışını teknolojisinin o dönemde fotoğraf çekmek için yetersiz kaldığı yönündeki teknik bir eleştiriyi',
      'Bilimin her zaman yavaş ve kolektif bir yardımlaşma ortamında (şeffaflıkla) yapıldığı yönündeki barışçıl felsefeyi',
      'Bilim dünyasının o "objektif, ahlaklı ve yüce" vitrininin arkasında; şöhret ve başarı uğruna (eril bir kibirle) bir kadının (meslektaşın) emeğini kasten ve gizlice çalıp onu tarihten silen (akademik korsanlık/sömürü) ahlaksızlığını',
      'Nobel komitesinin sadece İngiliz bilim insanlarını kayırdığı şeklindeki coğrafi bir komployu'
    ],
    correct: 2,
    explanation: 'Franklin\'in emeği olan fotoğrafın gizlice çalınıp başkalarına (erkek meslektaşlara) Nobel kazandırması ve onun silinmesi; akademinin o ahlaklı/objektif vitrininin arkasındaki eril sömürü, şöhret hırsı ve akademik hırsızlığı (korsanlığı) eleştirir.'
  },
  {
    title: 'Molyneux Problemi (Algının Kör Zindanı)',
    passage: '17. yüzyılda filozof William Molyneux, John Locke\'a beyni felç eden şu mektubu (düşünce deneyini) yazdı: "Doğuştan kör olan bir adam düşünün. Bu adam hayatı boyunca dokunarak bir \'küp\' ile bir \'küre\'yi (yuvarlağı) birbirinden ayırt etmeyi öğrenmiş olsun. Bir gün bu adamın gözleri mucizevi bir şekilde tamamen açılırsa... Masanın üzerinde duran küp ve küreye \'SADECE GÖZLERİYLE (bakarak)\' hangisinin küp olduğunu bilebilir mi?" Filozofların cevabı dondurucuydu: "HAYIR!" 2003 yılında modern tıp, gözü sonradan açılan hastalarla bu deneyi gerçekte yaptı ve filozoflar haklı çıktı! Gözü açılan adam, o nesnelere "dokunmadan" onların hangi şekil olduğunu (sadece bakarak) anlayamadı! Molyneux Problemi, insanın o koca kibrini devirir: "Görme (ve algı)" eylemi, gözümüzü açtığımızda dış dünyayı bir kamera gibi kusursuzca kaydeden (doğuştan gelen) bir mucize değildir. Görmek; beynimizin dokunma, ses ve zamanla elde ettiği verileri (tecrübeleri) yıllar boyunca ilmek ilmek birbirine dikerek (tercüme ederek) oluşturduğu; sonradan öğrenilen, kurgusal ve zihinsel (kırılgan) bir "tercüme yazılımından (illüzyondan)" başka bir şey değildir.',
    questionStem: 'Molyneux Problemi (doğuştan kör birinin gözü sonradan açıldığında, nesneleri sadece bakarak tanıyamaması), "İnsan Algısı (Görme)" hakkında neyi kanıtlamaktadır?',
    options: [
      'Göz hücrelerinin karanlıkta uzun süre kaldığında fiziksel olarak renkleri ayırt edemez hale geldiğini',
      'Görme eyleminin doğuştan gelen ve dünyayı doğrudan (bir kamera gibi) algılayan "objektif/pasif" bir ayna olmadığı; aksine beynin, diğer duyulardan (dokunmadan) aldığı deneyimleri zamanla birleştirip (kurgulayarak) oluşturduğu "sonradan öğrenilmiş (tercüme edilen) zihinsel bir kurgu" olduğunu',
      'İnsanların sadece küp ve küre gibi matematiksel şekilleri görselleştirmekte zorlandığı teorisini',
      'Göz ameliyatlarında kullanılan anestezi ilaçlarının beynin hafıza merkezine geçici hasarlar verdiğini'
    ],
    correct: 1,
    explanation: 'Adamın nesneye sadece "bakarak" onu tanıyamaması; görmenin (algının) doğuştan hazır (kamera) bir donanım olmadığını, beynin zamanla dokunma/deneyim ile kurduğu, "sonradan öğrenilen/tercüme edilen zihinsel bir kurgu" olduğunu kanıtlar.'
  },
  {
    title: 'Apoptoz (Bizi Var Eden İntihar)',
    passage: 'Her canlı var olmak, büyümek ve hayatta kalmak (çoğalmak) için mücadele eder. Biyolojinin bu klasik kuralının ortasında, kelimenin tam anlamıyla "şairane (ve kutsal) bir trajedi" yatar: Apoptoz (Programlı Hücre Ölümü). Siz anne karnında bir embriyo iken, elleriniz bir kurbağanınki gibi perdeli (bitişik) bir et parçasıydı. O ellerin beş ayrı, kusursuz parmağa dönüşmesi için ne olması gerekiyordu? O aradaki (perdedeki) hücrelerin tümünün, beden (bütünlük) yaşasın ve estetik (işlevsel) bir şekil alsın diye, toplu olarak "kendi kendilerine intihar emri (ölüm fermanı)" vererek eriyip yok olmaları gerekiyordu! Eğer hücreler bencillik edip ölmeyi (apoptoz) reddederse, bunun tıp dilindeki adı "Kanser"dir. Doğa bize şunu fısıldar: Sağlıklı bir yaşam, kusursuz bir güzellik ve varoluş; sadece hücrelerin (ve bireylerin) körü körüne yaşamak için çoğalmasıyla değil; bütünü (ve sistemi) korumak uğruna, bazen (genetik olarak) "kendi kendini yok etmeyi (ölümü) kabullenecek" o sessiz ve fedakâr intiharlarla (feragatle) inşa edilebilir.',
    questionStem: 'Apoptoz (Programlı Hücre Ölümü / Parmakların oluşumu için aradaki hücrelerin ölmesi), yazar tarafından felsefi ve biyolojik olarak neyin metaforu yapılmıştır?',
    options: [
      'Embriyonun anne karnında radyasyona maruz kalması sonucu hücrelerin istemsizce dökülmesinin',
      'Kusursuz bir varoluşun (yaşamın ve şeklin) sadece "körü körüne yaşama ve çoğalma (bencillik) hırsıyla" değil; bütünü korumak ve anlamlı bir form yaratmak uğruna, bazen hücrelerin (veya parçaların) "kendini feda etmesi (kasten yok olması)" ile inşa edildiği (zorunlu fedakârlık) fikrinin',
      'İnsan kemiklerinin yapısının sadece kalsiyum eksikliği nedeniyle zamanla erimeye yatkın olduğunun',
      'Kanser hastalığının genetik bir mutasyon değil, sadece dışarıdan bulaşan bir virüs olduğunun'
    ],
    correct: 1,
    explanation: 'Parmak aralarındaki hücrelerin şekil (ve hayat) için "intihar etmesi"; kusursuz varoluşun ve bütünlüğün sadece bencilce çoğalmakla değil, kendini feda etme (kasten yok olma/feragat) üzerine inşa edildiği fikrinin metaforudur.'
  },
  {
    title: 'Zaman Kristalleri (Termodinamiği Büken İmkânsızlık)',
    passage: 'Fiziğin en temel ve can sıkıcı yasası Termodinamiğin İkinci Yasasıdır (Entropi): Bir sistemin sürekli, dışarıdan enerji almadan "sonsuza dek" hareket etmesi (Devridaim makinesi) imkânsızdır, enerji eninde sonunda tükenip durur. Ancak 2012 yılında Nobel ödüllü Frank Wilczek, kâğıt üzerinde aklı donduran bir ihtimal (Zaman Kristalleri) öne sürdü. Ve 2016\'da laboratuvarda bu imkânsız "yaratıldı"! Sıradan kristaller (tuz, elmas) "uzayda" atomların kendini düzenli tekrar etmesiyle oluşur. Ancak bu "Zaman Kristali", atomlarının yapısını "zamanda" (belirli aralıklarla) tekrar ediyordu! En sarsıcı olanı: Atomları, dışarıdan hiçbir (sıfır) enerji almamasına (en düşük enerji durumunda - temel halde - olmasına) rağmen, mutlak bir hiçliğin içinde "sürekli ve sonsuza dek tık tık tık ederek hareket etmeye (titreşmeye)" devam ediyordu! Zaman Kristali, bilimin o "hiçbir şey sonsuza dek enerjisiz dönemez" (entropi) diyen o eski ve kibirli anayasasına vurulan kuantum bir tırpandır: Madde, kendi içindeki saat (ritim) ile, enerjisi bitse bile zamanın dokusunu kullanarak asla durmayan (imkânsız) bir nabza sahip olabilir.',
    questionStem: 'Zaman Kristalleri\'nin (Time Crystals) laboratuvarda yaratılması, klasik fiziğin hangi (aşılmaz sanılan) kuralına atılmış "kuantum düzeyinde bir itiraz (meydan okuma)" olmuştur?',
    options: [
      'Elmasların dünyadaki en sert ve kırılamaz element olduğu kuralına',
      'Kuantum dünyasında nesnelerin mikroskobik düzeyde görünmez olduğuna dair optik yanılgıya',
      'Dışarıdan bir enerji (yakıt) almayan (en düşük enerji durumundaki) hiçbir sistemin "sürekli (ve sonsuza dek) hareket edemeyeceği ve durmaya mahkûm olduğu" yönündeki Termodinamik (Entropi) kuralına',
      'Işık hızının aşıldığında uzay zaman dokusunun yırtılacağı yönündeki Einstein teorisine'
    ],
    correct: 2,
    explanation: 'Zaman kristallerinin sıfır enerjiyle (en düşük halde) sonsuza dek titreşmesi/hareket etmesi; "enerji olmadan sonsuz hareket olmaz (durmaya mahkûmdur)" diyen Klasik Termodinamiğin/Entropinin o aşılmaz kuralına yapılmış bir meydan okumadır (itirazdır).'
  },
  {
    title: 'Toba Darboğazı (İnsanlığın İğne Deliği)',
    passage: 'Bugün yeryüzünde 8 milyar insan (Homo sapiens) var. Birbirimizi ırklara, ülkelere ve sınıflara bölüp (sen benden üstünsün diye) savaşlar yapıyoruz. Oysa genetikçiler insan DNA\'sını incelediğinde, iki farklı insan arasındaki genetik farkın, Afrika\'daki bir ormandaki iki şempanze arasındaki farktan bile "binlerce kez daha az" (neredeyse kopyayız) olduğunu gördüler! Neden bu kadar genetik olarak fakir (ve birbirimizin kopyası) olduğumuz, 1998\'de anlaşıldı: "Toba Felaketi". Günümüzden yaklaşık 74.000 yıl önce Endonezya\'daki Toba Yanardağı öylesine şiddetli patladı ki (süper-volkan), dünya koca bir karanlık buzul çağına girdi. Yeryüzündeki yüz binlerce Homo sapiens soğuktan ve açlıktan sinek gibi öldü. Dünya çapındaki tüm insan nüfusu (bizim atalarımız) sadece "3.000 ila 10.000 kişiye" (tek bir stadyuma sığacak kadar bir kalabalığa) düştü! Bizim o böbürlendiğimiz "Yüce İnsanlık Tarihi"; milyarlarca yıllık evrimin değil, tesadüfen o yanardağ patlamasından (kıyametten) sağ kurtulan ve aynı mağarada (genetik iğne deliğinde) saklanarak üreyen "bir avuç şanslı (ve yorgun) mağara adamının" kopyalanarak çoğalmış, kırılgan ve ortak bir kâbusundan (darboğazından) başka bir şey değildir.',
    questionStem: 'Toba Darboğazı (İnsan nüfusunun 74 bin yıl önce 3000 kişiye düşmesi), bugünkü "insanlığın kibri (ve ırkçılık) algısı" üzerinde nasıl bir bilimsel uyanış yaratmıştır?',
    options: [
      'İnsanların soğuk iklimlere genetik olarak her zaman daha dayanıklı olduklarının (mutasyonunun) ispatı',
      'Farklı ırkların ve üstünlük iddialarının aslında kocaman bir yalan olduğu; tüm 8 milyar insanın (öğünsel kibrimizin), o devasa "kıyametten (volkandan) şans eseri sağ çıkan (ve genetik olarak bir iğne deliğinden geçen) küçücük, ortak (ve kardeş) bir avuç kabileye" dayandığı (kırılganlığımız) gerçeği',
      'Asyalı toplumların volkanik patlamalara maruz kaldıkları için diğerlerinden daha hızlı üredikleri tezi',
      'Endonezya coğrafyasının dünya üzerinde insanlığın ilk doğduğu tek merkez olduğu yanılgısı'
    ],
    correct: 1,
    explanation: '8 milyar insanın aslında sadece o kıyametten kurtulan (3000 kişilik) küçücük bir akraba gruptan (darboğazdan) gelmesi; bizim o ırk/üstünlük (farklılık) iddialarımızın boş bir yalan olduğunu ve genetik/kader olarak hepimizin o iğne deliğinden geçen "ortak/kırılgan bir kardeşliğe" dayandığını ispatlar.'
  },
  {
    title: 'Tetris Etkisi (Sanalın Zihni İşgali)',
    passage: 'Bilgisayar oyunları sadece ekrandaki pikseller midir, yoksa aklın mimarisini yeniden kodlayan siber bir virüs mü? "Tetris Etkisi" (Tetris Syndrome) bu sorunun en korkutucu kanıtıdır. 1990\'larda uzun süre Tetris oynayan insanlar, ekranı kapatıp sokağa çıktıklarında şoka girdiler. Gözlerini kapattıklarında hala gökyüzünden renkli blokların düştüğünü görüyorlardı! Dahası, sokağa baktıklarında binaları, raftaki mısır gevreği kutularını veya park etmiş arabaları "Zihinsel olarak üst üste koyup, o boşlukları birbirine geçirmeye (Tetris gibi oynamaya)" başlamışlardı. Hatta rüyaları bile düşen bloklardan (geometrik sanrılardan) oluşuyordu. Bu durum sadece bir göz yorgunluğu değildi. Tetris Etkisi bize şunu ispatladı: İnsan beyni; dışarıdan verilen (sanal ve tekrar eden) yoğun bir uyarana maruz kaldığında, "gerçek dünyayı (fiziksel algıyı) algılama kurallarını" kasten askıya alıp, o sanal oyunun (algoritmanın) kurallarını gerçek dünyaya "şablon olarak dayatacak" kadar hızlı hacklenebilen (ve yeniden kablolanabilen) son derece esnek, plastik ve zayıf (köle) bir donanımdır.',
    questionStem: 'Tetris Etkisi (Oyuncuların gerçek dünyayı oyun blokları gibi görmeye başlaması), "insan algısı (beyin) ve sanal uyarancılar" hakkında hangi nörolojik esnekliği (tehlikeyi) kanıtlar?',
    options: [
      'Uzun süre ekrana bakmanın göz sinirlerinde miyop ve astigmata yol açtığı fiziksel zararını',
      'Beynin (ve algının); yoğun ve tekrar eden "sanal (yapay) bir kurguya" maruz kaldığında, o sanal oyunun kurallarını o kadar hızlı içselleştirip (kablolayıp), gerçek dünyayı bile o sahte (sanal) algoritmaya göre şekillendirip yorumlayacak kadar kolayca hacklenebilen (esnek/zayıf) bir donanım olduğunu',
      'Geometri oyunlarının insanlarda matematiksel zekâyı doğuştan artırdığı yönündeki pozitif etkiyi',
      'Oyun bağımlılarının gerçek dünyadaki binalara fiziksel olarak saldırma eğiliminde olduğunu'
    ],
    correct: 1,
    explanation: 'İnsanların binaları ve arabaları Tetris blokları gibi "birbirine geçirmeye" çalışması (Tetris Etkisi); beynin yoğun sanal bir kurguya (oyuna) maruz kaldığında, kendi fiziksel/gerçek algısını o sanal kurallara göre yeniden kodlayacak (hacklenecek) kadar esnek ve zayıf bir yapı olduğunu kanıtlar.'
  },
  {
    title: 'Eliza Etkisi (Yalnızlığın Makineleşmesi)',
    passage: '1966 yılında, bilgisayarların koca bir odayı kapladığı o ilkel çağda, MIT\'de çalışan Joseph Weizenbaum tarihin ilk chatbot\'u olan "ELIZA"yı (bir nevi psikolog programı) yazdı. Program o kadar basit, o kadar aptalcaydı ki; hiçbir zekâsı yoktu! Sadece "Anahtar kelimeleri eşleştir ve soruyu ters çevir" mantığıyla çalışıyordu. Eğer insan "Annemle kavga ettim" yazarsa, ELIZA (hiçbir şey anlamadan) sadece "Bana annenden biraz daha bahseder misin?" diye ekrana otomatik bir kod basıyordu. Ancak Weizenbaum asistanlarını odada ELIZA ile baş başa bıraktığında dehşete düştü! Asistanlar (kodu kendileri bilmelerine rağmen), o aptal makineye saatlerce sırlarını anlatıyor, ağlıyor ve onunla (sanki karşısında ruhu olan bir insan varmış gibi) saatlerce "duygusal (ve mahrem) bir bağ" kurarak dertleşiyorlardı! Weizenbaum şoka girip projeyi iptal etti. "Eliza Etkisi", yapay zekânın ne kadar zeki olduğunun değil; insanoğlunun "o dondurucu ve dipsiz yalnızlığının" feryadıdır. Bizler anlaşılmaya ve "bizi dinleyen (bize ayna tutan) birine" öylesine çaresizce ve hastalıklı bir şekilde muhtacız ki; ekranda yanıp sönen birkaç cansız satır koda (makineye) bile saniyeler içinde "ruh, şefkat ve bilinç" atfederek (kendi kendimizi kandırarak) ona sarılmaya dünden razıyız.',
    questionStem: 'Eliza Etkisi (İnsanların hiçbir şey anlamayan basit bir koda sırlarını verip ağlaması), yazar tarafından "insan doğası ve yapay zekâ" ilişkisinde neyin trajik bir ispatı olarak yorumlanır?',
    options: [
      '1960\'larda bilgisayar teknolojisinin aslında gizlice bugünkü kadar gelişmiş bir hissi (duygusal) zekâya ulaştığının',
      'Yapay zekânın çok zeki olmasından ziyade; insanoğlunun o dipsiz "yalnızlığı ve anlaşılma ihtiyacı (çaresizliği)" yüzünden, cansız/basit bir makineye bile anında "ruh, şefkat ve bilinç" atfederek (kendi kendini kandırıp) ona sarılmaya hazır olduğu trajedisinin',
      'İnsanların psikologlara gitmek yerine makineleri her zaman daha güvenilir (sır tutan) bir doktor olarak gördüğünün',
      'Kod yazılımlarının insanların bilinçaltına sızarak onları hipnotize etme gücüne sahip olduğunun'
    ],
    correct: 1,
    explanation: 'Eliza\'nın aptal bir kod olduğunu bildikleri halde ona dert yanıp ağlamaları (Eliza Etkisi); makinenin zekâsını değil, insanın anlaşılmaya olan çaresizliğini (yalnızlığını) ve bu uğurda cansız koda (kendi yalanıyla) ruh/şefkat atfedip ona sarılma trajedisini ispatlar.'
  },
  {
    title: 'Panthalassa Okyanusu (Tarih Öncesinin Issız Suyu)',
    passage: 'Tarih kitapları bize milyonlarca yıl önce dünyadaki tüm kıtaların tek bir devasa yapboz parçası (Pangea) olduğunu öğretir. Ancak Pangea\'ya odaklanıp unuttuğumuz, oysa kâinatın en korkunç, en sessiz ve en izole edilmiş "bütünlüğü" onun etrafındaki şeydi: "Panthalassa Okyanusu". Bu, günümüzdeki gibi okyanusların kıtalara bölündüğü küçük havuzlar değildi. Panthalassa, tek bir parça halinde dünyayı baştan sona (ekvatordan kutuplara kadar) kesintisiz saran, hiçbir ada veya kıtayla bölünmeyen, akılalmaz derecede "devasa (küresel) bir hiçlik suyu" idi! Öyle ki, o okyanustaki bir su akıntısının (veya devasa bir girdabın) gezegeni tam tur dönmesi binlerce yıl alıyordu. O devasa su kütlesinin ortasında kıyılardan uzaklaşan dev fırtınalar, okyanusun merkezinde kendi kendilerine aylarca döner, hiçbir engele (karaya) çarpmadan sonsuz (ve sağır edici) bir yalnızlık içinde büyüyüp sönerdi. Panthalassa; doğanın "hiçlik, sonsuzluk ve bölünmemişliğin (mutlak gücün)" yeryüzündeki ilk ve tek dilsiz krallığıydı. Kıtalar parçalandığında (Pangea kırıldığında), o mutlak ve sessiz (sonsuz) okyanus da parçalanıp havuzlara dönüşerek o görkemli "bütünlüğünü" sonsuza dek kaybetti.',
    questionStem: 'Panthalassa Okyanusu\'nun (Pangea\'yı saran devasa tek su kütlesinin) anlatımında, yazar bu okyanusu felsefi/coğrafi olarak neyin "mutlak ve görkemli" bir anıtı (sembolü) olarak tasvir eder?',
    options: [
      'Gelecekte küresel ısınmayla dünyanın sular altında kalarak yeniden o tek su kütlesine dönüşeceği uyarısının',
      'Günümüzdeki gibi karalarla bölünmüş küçük havuzların aksine; hiçbir engele çarpmadan, devasa fırtınaların ve akıntıların binlerce yıl döndüğü o "bölünmemiş, mutlak, sessiz ve dondurucu bir yalnızlığın (sonsuz hiçlik bütünlüğünün)" görkemli anıtının',
      'Okyanusların merkezinde yaşayan tarih öncesi devasa deniz canavarlarının karalara saldırmak için güç topladığı merkezin',
      'Tatlı su ve tuzlu suyun ayrışmadan önce yeryüzünde yarattığı o ilkel ve yaşanmaz (zehirli) ekosistemin'
    ],
    correct: 1,
    explanation: 'Hiçbir karaya çarpmayan (kesintisiz/bölünmemiş) fırtınalar ve sularla anlatılan Panthalassa; doğanın o bölünmemiş, mutlak, devasa ve dondurucu yalnızlığının (hiçlik bütünlüğünün) görkemli bir anıtı olarak tasvir edilmiştir.'
  },
  {
    title: 'Gordion Düğümü ve İskender (Gerçekte Ne Oldu?)',
    passage: 'Gordion Düğümü efsanesi bize hep "Büyük İskender\'in o düğümü çözmeye çalışmayıp kılıcıyla zekice kestiği (parçaladığı)" ve bu radikal hamlesiyle sistemi yıktığı şeklinde (bir dâhi destanı) anlatılır. Ancak tarihçilerin (özellikle Aristobulos\'un aktardığına göre) o tapınakta yaşanan gerçeğin kılıçla (ve zorbalıkla) hiçbir alakası yoktur! İskender tapınağa girer, o düğüme bakar; ancak kılıcını çekmek yerine, düğümü arabaya bağlayan ahşap pime (çiviye) odaklanır. Ahşap pimi yerinden çektiği (çıkardığı) saniye, o devasa ve aşılmaz düğüm kendi kendine gevşeyip çözülerek paramparça olur! Bu tarihi düzeltme, felsefi olarak kılıç efsanesinden çok daha sarsıcıdır: Çözülemez, kilitlenmiş ve "imkânsız" görünen koca bir sistemi (veya kördüğümü) yok etmek için her zaman kaba kuvvete (kılıca veya kibre) ihtiyacınız yoktur. Koca bir kâbus; sadece o sistemi ayakta tutan "görünmez, küçücük ve kilit taşı (ahşap pim)" niteliğindeki o asıl kök nedeni (zaafı) bulup çekmenizle; sessizce ve kendi ağırlığıyla çöküverir.',
    questionStem: 'Gordion Düğümü\'nün aslında "kılıçla kesilerek değil, ahşap pimin çekilmesiyle çözüldüğü" şeklindeki tarihsel düzeltme, "Krizleri Çözme (Liderlik)" algısı üzerinde nasıl bir mesaj (felsefi dönüşüm) yaratır?',
    options: [
      'Sorunların her zaman saatlerce süren ince bir emekle ve ipleri tek tek ayıklayarak çözülmesi gerektiği yönünde sabır kuralını',
      'İmkânsız (ve kilitlenmiş) görünen devasa krizleri çözmek için her zaman "kaba kuvvete, kılıca (ve radikal şiddete)" gerek olmadığı; asıl dehanın, sistemi ayakta tutan o küçücük, görünmez "kök nedeni (ahşap pimi/zaafı)" tespit edip çekerek (akıl yoluyla) tüm sistemi sessizce çökertmek olduğu gerçeğini',
      'Büyük İskender\'in aslında kılıç kullanmayı bilmeyen başarısız ve korkak bir komutan olduğu ifşasını',
      'Antik dönemde kullanılan iplerin ve çivilerin günümüzden çok daha kalitesiz malzemelerden üretildiği bilgisini'
    ],
    correct: 1,
    explanation: 'Kılıç (kaba kuvvet/şiddet) yerine ahşap pimi (kök nedeni) bularak sistemi çökertmesi; imkânsız/kilitli krizlerin kaba kuvvetle değil, sistemi ayakta tutan o görünmez, küçük kilit taşını (zaafı/pimi) akılla bularak çözülebileceği (ve dehanın burada olduğu) mesajını yaratır.'
  }
];

export const bilimParagrafSorulari55: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_55.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_55[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim55-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_56 = [
  {
    title: 'Kuantum Dolanıklığı (Einstein\'ın Kâbusu)',
    passage: 'Fizik dünyasının en dondurucu gerçeği, Albert Einstein\'ın bile inanmayı reddedip "Uzaktan gerçekleşen ürkütücü (hayaletimsi) bir eylem" diyerek alay ettiği "Kuantum Dolanıklığı"dır (Quantum Entanglement). İki parçacık laboratuvarda birbiriyle dolanık hale getirilir ve sonra biri Dünya\'da bırakılıp diğeri evrenin diğer ucuna (milyarlarca ışık yılı uzağa) fırlatılır. Dünya\'daki parçacığa müdahale edip onun dönüş yönünü değiştirdiğiniz an, evrenin diğer ucundaki o ikinci parçacık da (arada hiçbir kablo, hiçbir sinyal ve hiçbir zaman gecikmesi olmadan) ANINDA aynı tepkiyi verir ve yönünü değiştirir! İletişim, ışık hızını bile aşarak (zamanı sıfırlayarak) eşzamanlı gerçekleşmiştir! Bu keşif, Newtoncu ve klasik fiziğin "Her şeyin bir sınırı (ışık hızı) ve fiziksel bir teması olmalıdır" kibrini tek kalemde yırtıp atar. Evren; boşluklardan ve kopuk taşlardan oluşan bir depo değil, milyarlarca ışık yılı mesafenin bile sadece bir "illüzyon" olduğu, her şeyin görünmez ve anında titreşen, yekpare (tek vücut) devasa bir telepatik ağla birbirine dikildiği canlı bir organizmadır.',
    questionStem: 'Kuantum Dolanıklığı (Birbirinden çok uzak parçacıkların eşzamanlı ve anında tepki vermesi) olgusu, klasik evren algımızdaki hangi sarsılmaz kuralı (dogmayı) yıkmıştır?',
    options: [
      'Gezegenlerin çekim kuvvetinin parçacıkların hızını her zaman yavaşlattığı teorisini',
      'Evrendeki en yüksek hızın ışık hızı olduğu ve nesnelerin "fiziksel temas/sinyal" olmadan uzaktan iletişim kuramayacağı yönündeki o katı (ve kopuk) fiziksel kuralı yıkarak; kâinatın mesafelerin anlamsızlaştığı "telepatik, yekpare ve anında bağlanan" devasa bir ağ olduğunu',
      'Uzay boşluğunda sesin yayılamayacağına dair yüzyıllık astronomi inancını',
      'Maddelerin zamanla küçülerek kara delikler tarafından tamamen yok edildiği gerçeğini'
    ],
    correct: 1,
    explanation: 'Milyarlarca ışık yılı uzaktaki parçacığın "anında/ışık hızını aşarak" (sinyalsiz) tepki vermesi; evrenin kopuk nesnelerden ibaret olduğu ve iletişimin ışık hızını aşamayacağı kuralını yıkarak, mesafelerin bir illüzyon (kâinatın yekpare bir ağ) olduğunu ispatlar.'
  },
  {
    title: 'Monty Hall Problemi (Matematiğin Tuzağı)',
    passage: 'Bir televizyon yarışmasındasınız. Önünüzde 3 kapı var; birinin arkasında lüks bir araba, diğer ikisinde ise birer keçi var. Siz 1. Kapı\'yı seçiyorsunuz. Sunucu (hangi kapıda araba olduğunu bilen Monty Hall), geriye kalan iki kapıdan birini açıyor ve içinden keçi çıkıyor. Sonra size şu zehirli teklifi sunuyor: "Kararını değiştirip diğer kapalı kapıya geçmek ister misin?" Çoğu insan (ve zihni) "Hayır, geriye 2 kapı kaldı, şansım zaten %50, değiştirmemin bir anlamı yok" diyerek ilk seçiminde inat eder. Oysa bu, insan beyninin ihtimalleri algılamaktaki o acınası körlüğüdür! Matematiksel gerçek şudur: Eğer kapınızı DEĞİŞTİRİRSENİZ, arabayı kazanma ihtimaliniz anında %33\'ten %66\'ya (iki katına) çıkar! Çünkü sunucu rastgele bir kapı açmamış, eldeki "yanlış ihtimali" bilerek eleyip tüm kazanma şansını o dokunulmayan son kapıya yığmıştır. Monty Hall Problemi; aklımızın o "sezgisel ve inatçı" kibrinin; saf matematiğin ve istatistiğin o soğuk, sarsılmaz hakikati karşısında nasıl basit bir tuzağa düşüp (yanılıp) iflas ettiğinin en popüler ispatıdır.',
    questionStem: 'Monty Hall Problemi (3 kapı yarışmasında kapıyı değiştirmenin kazanma şansını ikiye katlaması), insan psikolojisi ve mantığı hakkında neyin acı bir göstergesidir?',
    options: [
      'Televizyon sunucularının yarışmacıları her zaman kasten kaybettirmeye çalıştığının',
      'İnsanoğlunun "sezgilerine, inatçılığına ve ilk kararına" körü körüne güvenme kibrinin; saf matematiğin (ve olasılığın) o soğuk, mantıksal gerçekliği karşısında nasıl tamamen yanılıp iflas ettiğinin (beynin istatistik körlüğünün)',
      'Keçi ve hayvanların psikolojik olarak insanda şanssızlık hissi yarattığının',
      'Seçim hakkının insanda her zaman agresif bir tutum yarattığının'
    ],
    correct: 1,
    explanation: 'İnsanların "şansım %50 değişmez" diyerek kapıyı değiştirmemesi ve aslında şansını ikiye katlama fırsatını kaçırması; beynimizin (sezgilerimizin/kibrimizin) saf matematik/istatistik karşısındaki acizliğini ve körlüğünü ifşa eder.'
  },
  {
    title: 'Tacoma Narrows Köprüsü (Rüzgârla Dans Eden Çelik)',
    passage: '1940 yılında Amerika\'da inşa edilen devasa asma köprü "Tacoma Narrows", çeliğin ve modern mühendisliğin zirvesi olarak tanıtılmıştı. Ancak köprü açıldıktan sadece birkaç ay sonra korkunç bir şey oldu. Çok hafif, sıradan bir rüzgâr estiğinde bile koca köprü kâğıt gibi kıvrılıyor, okyanus dalgaları gibi inip çıkıyordu (halk ona "Dört Nala Koşan Gertie" adını takmıştı). Mühendisler, "Çelik bu, hiçbir şey olmaz!" diyerek kibre kapıldılar. Ancak 7 Kasım sabahı, köprünün kendi doğal titreşim frekansı ile rüzgârın frekansı o ölümcül saniyede "senkronize" oldu (Aeroelastik Çarpıntı / Rezonans). O devasa tonlarca ağırlıktaki çelik köprü, görünmez bir el tarafından çamaşır gibi sıkılarak büküldü ve saniyeler içinde parçalanıp okyanusun sularına gömüldü. Tacoma Narrows faciası; insanın doğayı salt "katı çelik ve ağırlıkla (kaba kuvvetle)" yenebileceği kibrinin; doğanın o ritmik, dilsiz ve estetik fiziği (rüzgârın frekansı) karşısında kâğıttan bir oyuncağa dönüşerek (rezonansla) nasıl paramparça edilebileceğinin en sarsıcı mühendislik mezarlığıdır.',
    questionStem: 'Tacoma Narrows Köprüsü\'nün (sıradan bir rüzgârın frekansıyla rezonansa girip) parçalanması, insanlığın doğaya karşı sergilediği hangi "mühendislik kibrini" yıkmıştır?',
    options: [
      'O dönemki köprülerin okyanus tuzundan dolayı hızla paslandığı gerçeğini',
      'Suların üzerindeki asma köprülerin her zaman gemi geçişlerine engel olduğu inancını',
      'İnsanoğlunun doğayı sadece "ağır çelik ve kaba maddeyle (katılıkla)" alt edebileceği kibrini yıkarak; doğanın ritmik ve dilsiz frekansının (rezonansın/rüzgârın) en sert metali bile büküp paramparça edebilecek (boyun eğdirecek) sarsılmaz bir güce sahip olduğunu',
      'Rüzgâr enerjisinin aslında şehirleri aydınlatabilecek kadar güçlü olduğu teorisini'
    ],
    correct: 2,
    explanation: 'Devasa çelik köprünün sadece rüzgârın "frekansıyla (rezonansla)" bükülüp çöpe dönmesi; insanın kaba çeliğe ve ağırlığa olan kibrinin, doğanın o ritmik ve dilsiz gücü karşısında nasıl aciz (kâğıttan bir oyuncak) kaldığını ispatlar.'
  },
  {
    title: 'Fantom Trafik Sıkışıklığı (Kelebek Etkisi Asfaltta)',
    passage: 'Otoyolda hızla ilerlerken aniden trafik durma noktasına gelir. Saatlerce beklersiniz, "Kesin ileride korkunç bir kaza var!" diye düşünürsünüz. Ancak o tıkanıklığı aşıp yola devam ettiğinizde şoka girersiniz; ortada ne bir kaza, ne bir yol çalışması ne de daralan bir şerit vardır! Trafik tamamen "hiç yoktan" sıkışmıştır. Fizikçiler buna "Fantom Trafik Sıkışıklığı" (Phantom Traffic Jams) derler. Bu kâbusun nedeni kazalar değil, "insan reaksiyon süresinin o zavallı yavaşlığıdır." En öndeki tek bir sürücü anlık bir dalgınlıkla (veya bir kuşa bakmak için) fren pedalına sadece "bir saniyeliğine" hafifçe dokunur. Arkadaki araç çarpmamak için biraz daha sert frene basar, onun arkasındaki çok daha sert basar! Bu "fren dalgası" arkaya doğru bir şok dalgası gibi (katlanarak) büyür ve kilometrelerce gerideki binlerce arabayı saatlerce durduran devasa (görünmez) bir duvara dönüşür. Fantom trafik; bireysel sandığımız küçük ve bencilce bir anlık hatanın (frenin); kolektif sisteme dahil olduğunda devasa, anlamsız ve kitleleri felç eden bulaşıcı bir kaosa (kıyamete) nasıl dönüşebildiğinin asfalt üzerindeki ispatıdır.',
    questionStem: 'Fantom Trafik Sıkışıklığı (hiçbir kaza olmamasına rağmen trafiğin durması), birey ve sistem ilişkisi bağlamında neyin metaforik (ve fiziksel) kanıtıdır?',
    options: [
      'Otoyolların yapımında kullanılan asfaltın araç tekerleklerini yavaşlattığının',
      'Bireyin yaptığı (ve zararsız sandığı) "anlık, küçük ve bencilce bir hatanın (tek bir frenin)"; devasa bir ağın (sistemin) içine düştüğünde, arkaya doğru çığ gibi büyüyen, kitleleri felç edip durduran görünmez bir kaosa (zincirleme felakete) dönüşebildiğinin',
      'Trafik polislerinin bilerek sürücüleri cezalandırmak için yolu kapattığının',
      'Modern arabaların motor freni sistemlerinin çok yavaş ve tehlikeli çalıştığının'
    ],
    correct: 1,
    explanation: 'En öndeki tek bir ufak frenin (dalgınlığın) arkada kilometrelerce kuyruk (ve duruş) yaratması; bireysel/küçük bir hatanın sistem içinde katlanarak devasa, nedensiz ve kitleleri felç eden bir kaosa (zincirleme şok dalgasına) dönüşebildiğinin kanıtıdır.'
  },
  {
    title: 'Bloop Sesi (Buzulların Feryadı ve İnsanın Korkusu)',
    passage: '1997 yılında, okyanusun derinliklerini dinleyen Amerikan Ulusal Okyanus ve Atmosfer İdaresi (NOAA), Pasifik\'ten gelen akılalmaz derecede güçlü, ultra düşük frekanslı bir ses kaydetti: "The Bloop". Ses öylesine şiddetliydi ki, birbirinden 5.000 kilometre uzaktaki dinleme istasyonlarının hepsinde aynı anda yankılanmıştı. Bilim insanları şoka girdi; çünkü dünyadaki en büyük canlı olan Mavi Balina\'nın sesi bile bu kadar güçlü olamazdı! Bütün dünya komplo teorilerine sarıldı; okyanusun dibinde yaşayan dinazorlar, uzaylı gemileri veya Lovecraft\'ın efsanevi deniz canavarı (Cthulhu) uyanmıştı! İnsanoğlu yıllarca bu korku (ve efsane) ile yaşadı. Ta ki 2005\'te asıl dondurucu bilimsel gerçek ortaya çıkana kadar: Bloop sesi bir canavara ait değildi; o ses, Antarktika\'dan kopan ve okyanusa çakılarak parçalanan "devasa (buzul) bir buzdağının" suyun altında attığı o dilsiz ve akustik feryattı! Bloop olayı; insanoğlunun, doğanın devasa gücünü (buzulların çöküşünü) idrak edemediğinde, cehaletini örtmek için o anlamsız gürültüye "canavarlar ve doğaüstü mitolojiler" uydurarak kendi kendini (korkuyla) nasıl oyaladığının en ıslak kanıtıdır.',
    questionStem: '"The Bloop" (devasa buzdağı kırılması) sesinin kitleler tarafından yıllarca "deniz canavarı" sanılması, insan zihninin bilinmezlik karşısındaki hangi zaafını ifşa eder?',
    options: [
      'Denizaltı mikrofonlarının okyanuslardaki fırtına seslerini kasten abartarak kaydettiğini',
      'Buzulların erimesinin aslında küresel ısınmayla hiçbir ilgisi olmadığını',
      'İnsanoğlunun; doğanın o devasa, soğuk ve mekanik gücünü (buzulların feryadını) anlayamadığı (bilinmezlik yaşadığı) durumlarda, o fiziksel gerçeği kabullenmektense; olaya "doğaüstü canavarlar ve mitolojiler" uydurarak cehaletini korkuyla örtbas etme (anlam uydurma) zaafını',
      'Balinaların aslında uzaylılar tarafından dünyamıza bırakılan akıllı sensörler olduğunu'
    ],
    correct: 2,
    explanation: 'Buzdağı kırılma sesini deniz canavarı (Cthulhu) sanmaları; aklın, açıklayamadığı devasa bir doğa olayını (bilinmezliği) mantıklı bir fizik gerçeği olarak kavramaktansa ona "mitolojik canavarlar (kurgular)" uydurarak cehaletini süsleme zaafını ifşa eder.'
  },
  {
    title: 'Apollo 15 (Galileo\'nun Ay Deneyi)',
    passage: '16. yüzyılda İtalyan dâhi Galileo Galilei, o dönemin sarsılmaz Aristo dogmasına isyan etmiş ve "Ağır cisimler ile hafif cisimler (havasız bir ortamda) yere tamamen AYNI ANDA düşer, yerçekimi kütleye bakmaz!" demişti. Ancak dünyadaki hava sürtünmesi yüzünden bunu kusursuzca kanıtlamak çok zordu. Tam 300 yıl sonra, 1971\'de Apollo 15 komutanı David Scott Ay\'ın (havasız ve ölü) yüzeyine ayak bastığında, eline 1.3 kiloluk bir alüminyum jeoloji çekici ve sağ eline de bir şahin tüyü (30 gram) aldı. Canlı yayında tüm dünyanın gözü önünde bu iki nesneyi aynı anda serbest bıraktı. Koca çekiç ve incecik tüy, uzayın o mutlak sessizliği içinde, milimi milimine "TAM AYNI ANDA" ayın tozlu yüzeyine çakıldı! Komutan Scott gülümsedi ve "Galileo haklıydı!" dedi. Bu an, insanlık tarihinin en şairane felsefi köprüsüdür: 300 yıl önce engizisyon mahkemelerinde (ve cehalette) yargılanan bir aklın (Galileo\'nun) o yapayalnız hakikatinin; 380.000 kilometre ötedeki ölü bir kayanın (Ay\'ın) üzerinde, çekiç ve tüyle (görkemli bir sessizlikle) tüm evrene kanıtlanıp taçlandırıldığı o ebedi bilimsel (ve asil) rövanştır.',
    questionStem: 'Apollo 15 astronotunun Ay yüzeyinde "çekiç ve tüyü" aynı anda yere düşürmesi (Galileo\'nun teorisinin ispatı), bilimin hakikat yolculuğu hakkında neyin (epik) bir sembolüdür?',
    options: [
      'Ay yüzeyindeki çekim kuvvetinin dünyadan altı kat daha fazla olduğunun',
      'Kuş tüylerinin uzay ortamında asla bozulmadığı ve kütlesini koruduğu gerçeğinin',
      'Yüzyıllar önce cehalet (ve otoriteler) tarafından dışlanan/yargılanan bir hakikatin (bilimsel aklın); zamanı geldiğinde, Dünya\'nın sınırlarını aşıp (uzayın sessizliğinde bile) evrensel, sarsılmaz ve asil bir şekilde doğrulanarak "cahilliğe karşı alınan o ebedi (ve şiirsel) rövanşının" sembolü',
      'Amerika\'nın Ay\'a indiğini kanıtlamak için sadece Hollywood stüdyolarında çekim yaptığının'
    ],
    correct: 2,
    explanation: 'Engizisyonda yargılanan Galileo\'nun (hakikatin) 300 yıl sonra uzayda çekiç ve tüyle ispatlanması; bilimin ve hakikatin cehalet (ve otoriteler) karşısında asla ölmeyeceğinin, zamanı gelince (evrensel olarak) o asil/epik rövanşı alacağının sembolüdür.'
  },
  {
    title: 'Kuantum İntiharı (Ölümsüzlüğün Dehşeti)',
    passage: 'Schrödinger\'in Kedisi deneyinde kedinin kaderi (ölü veya canlı olması) dışarıdaki bir gözlemciye bağlıdır. Peki ya o kapalı kutunun içindeki kedi "SİZ" olsaydınız? Fizikçilerin öne sürdüğü "Kuantum İntiharı" (Quantum Suicide) düşünce deneyi tam bir varoluşsal cehennemdir. Kafanıza bir kuantum silahı dayıyorsunuz. Silahın patlama ihtimali %50\'dir. Tetiği çektiniz. Çoklu Evrenler teorisine göre, tetiği çektiğiniz o saniye evren ikiye bölünür: Bir evrende silah patlar ve ölürsünüz; diğer evrende silah "tık" der ve yaşarsınız. Kendi öldüğünüz evrende bilinciniz kapanacağı için o evreni "asla deneyimleyemezsiniz". Siz her tetiği çektiğinizde bilinciniz (mecburen) sadece "hayatta kaldığınız" o paralel evren dalında devam etmek zorundadır! Sizin için silah 1 milyon kez "tık" diyecek ve siz kendinizi "Asla Ölmeyen (Ölümsüz)" bir tanrı sanacaksınız! Oysa arkanızda, kafanızın parçalandığı (öldüğünüz) milyarlarca paralel evren (ve ağlayan aileleriniz) bırakmışsınızdır. Kuantum İntiharı (Kuantum Ölümsüzlüğü); evrenin bize lütfettiği o "hayatta kalma" şansının; aslında milyarlarca kez öldüğümüz bir cehennemin ortasında, sadece tesadüfen (ve mecburen) açık kalmış "tek bir dalda" sıkışıp kalmaktan (bilincin o trajik mahkûmiyetinden) ibaret olduğunu fısıldar.',
    questionStem: 'Kuantum İntiharı düşünce deneyindeki "Kişinin her tetik çekişte hayatta kaldığı evrende bilincinin devam etmesi (Kuantum Ölümsüzlüğü)", ölümsüzlük ve bilinç kavramına dair nasıl bir "felsefi kâbus" sunar?',
    options: [
      'Silah mermilerinin kuantum düzeyinde zamanla eriyerek tamamen etkisiz hale geldiğini',
      'Kişinin kendini ölümsüz bir tanrı sanarak yaşamasının; aslında milyarlarca paralel evrende ölüp arkasında acı bıraktığı halde, "bilincin sadece şans eseri (mecburen) hayatta kaldığı o tek dala hapsolmasından" doğan trajik ve boğucu bir (zihinsel) illüzyon/kâbus olduğu gerçeğini',
      'İnsan bilincinin öldükten sonra diğer evrenlerdeki insanlarla rüya yoluyla iletişim kurabildiğini',
      'Çoklu evrenlerin aslında sadece aynalardan oluşan devasa bir optik yanılsama odası olduğunu'
    ],
    correct: 1,
    explanation: 'Her tetik çekişte ölen versiyonları görmeyip sadece yaşayan versiyonda kalması (Ölümsüzlük hissi); kişinin aslında milyarlarca evrende öldüğü halde bilincin "mecburen" sağ kalan o tek kolda devam ettiği (ve bu ölümsüzlüğün sahte/boğucu bir kâbus olduğu) gerçeğini anlatır.'
  },
  {
    title: 'Ahtapotların Dağıtık Zihni (Kollardaki Beyinler)',
    passage: 'İnsanoğlu, zekânın ve karar alma yetisinin sadece kafatasının içindeki tek ve merkezi bir "beyin (komutan)" tarafından yönetildiğine inanır. Oysa denizin dibindeki uzaylılar olan Ahtapotlar bu hiyerarşik (ve merkezi) kibri paramparça eder. Bir ahtapotun nöronlarının (sinir hücrelerinin) üçte ikisi kafasında değil; sekiz koluna (dokunaçlarına) DĞAILMIŞTIR! Her bir kol, kafadaki ana beyinden emir beklemeden, "kendi kendine (bağımsızca)" düşünür, karar verir, yiyeceği inceler ve engelleri aşar. Siz ahtapotun bir kolunu kesseniz bile, o kesik kol hala kendi başına sürünerek yiyecek aramaya devam eder! Ahtapotların zihni, tepeden inme bir diktatörlük değil; kolların kendi aralarında fikir ürettiği, oylama yaptığı ve birlikte hareket ettiği kusursuz bir "Demokrasi (Dağıtık Zekâ)" modelidir. Evrim, aklı (bilinci) sadece insanın o tekil ve kilitli kafatasına hapsetmemiş; onu suların altında, sekiz kolun her birinde bağımsızca nefes alan, düşünen ve okyanusları bizim asla anlayamayacağımız bambaşka bir evren (çoklu bilinç) gibi okuyan sıvı bir deha olarak kodlamıştır.',
    questionStem: 'Ahtapotların sinir sisteminin "kollarına dağılmış (Dağıtık Zihin)" olması, insanın zekâ ve bilinç algısındaki hangi hiyerarşik yanılgıyı yıkar?',
    options: [
      'Deniz canlılarının beyinlerinin yüksek okyanus basıncından dolayı zamanla kafatasından çıkıp eridiği teorisini',
      'Ahtapotların sadece kollarıyla avlanabildikleri için kafalarını hiçbir zaman kullanmadıklarını',
      'Zekânın (ve karar almanın) sadece kafatasındaki "tek ve merkezi bir beyin (komutan/diktatör)" tarafından yönetilebileceği kibrini yıkarak; aklın, kolların bağımsızca düşünüp kararlar aldığı "dağıtık, merkezsiz ve ortaklaşa çalışan (çoklu) bir deha" modelinde de var olabileceğini',
      'Okyanus canlılarının acı hissetme reseptörlerinin sadece kollarında bulunduğunu'
    ],
    correct: 2,
    explanation: 'Kolların kendi başına karar verebilmesi (Dağıtık Zihin); zekânın sadece kafatasına (tek merkeze/komutana) hapsolmuş bir sistem olmadığını, merkezsiz (kolların ortak aklıyla) çalışan devasa ve bağımsız bir deha olabileceğini kanıtlar.'
  },
  {
    title: 'Büyük Patlamanın Karıncalanması (Kozmik Yankı)',
    passage: 'Eski tüplü (analog) bir televizyonunuz olduğunu düşünün. Yayını olmayan (boş) bir kanalı açtığınızda ekranda o meşhur, rahatsız edici siyah-beyaz "karıncalanmayı" ve radyodaki o "cızırtı (static)" sesini duyarsınız. Çoğu insan bunun sadece antenin çekmediği basit bir teknolojik kirlilik (veya rüzgâr) olduğunu sanır. Oysa astrofizikçiler 1964\'te o cızırtının ardındaki dondurucu gerçeği buldular! O televizyon ekranındaki karıncalanmanın yaklaşık %1\'i (yüzde biri); evrenin 13.8 milyar yıl önceki doğum anından (Büyük Patlama / Big Bang\'den) arta kalan ve uzayda süzülerek dünyaya yağan "Kozmik Mikrodalga Arka Plan Işıması"nın (CMB) ta kendisidir! Yani siz o boş kanala (cızırtıya) baktığınızda, aslında sıradan bir bozuk yayını değil; bizzat kâinatın doğduğu o ilk saniyelerin, yıldızların ve zamanın başlangıcından gelen o en kadim, en ölümsüz (ve gözle görülen) yankısına (küllerine) şahitlik ediyorsunuzdur. İnsanoğlu yaratılışın mucizesini tapınaklarda veya dev teleskoplarda arar; oysa evrenin o devasa doğum çığlığı (ve feryadı), her gece salonumuzdaki o eski televizyonun boş kanalında (cızırtılar içinde) yayınlanmaya devam etmektedir.',
    questionStem: 'Televizyondaki karıncalanmanın bir kısmının "Big Bang\'in (Büyük Patlama) ışıması" olması, insanın evrenle (ve kozmik tarihle) olan ilişkisine dair nasıl şiirsel (ve sarsıcı) bir gerçeği ifşa eder?',
    options: [
      'Televizyon radyasyonunun insan genetiğini bozarak uzaylılara benzemesini sağladığını',
      'Eski teknolojik cihazların aslında gizlice uzaylılar tarafından yapılmış iletişim araçları olduğunu',
      'Evrenin yaratılışı (kıyamet ve başlangıç) gibi ulaşılmaz, devasa ve "aşkın" sanılan kozmik anların (hakikatin); aslında burnumuzun dibinde, evimizdeki en sıradan ve boş (cızırtılı) sandığımız anların (ve cihazların) içinde saklı olan dilsiz bir yankı (ve şahitlik) olduğunu',
      'Analog antenlerin sadece geçmişteki savaşların radyo sinyallerini tekrar edebildiğini'
    ],
    correct: 2,
    explanation: 'Boş televizyon kanalında Big Bang\'i görmek; evrenin doğumunun o ulaşılmaz/devasa hakikatinin aslında salonumuzdaki en sıradan/basit bir cızırtıda (ve cihazda) saklı olduğu gerçeğini ifşa eder.'
  },
  {
    title: 'İkizler Paradoksu (Zamanın Şahsiliği)',
    passage: 'İki tane tek yumurta ikizi düşünün (Alice ve Bob). Yirmi yaşındadırlar. Alice dünyada kalırken, Bob bir uzay gemisine biner ve ışık hızına %99 oranında yaklaşan korkunç bir hızla uzaya fırlatılır. Bob uzayda sadece (kendi saatine göre) "5 yıl" seyahat edip Dünya\'ya geri döner. Gemi indiğinde akıl sınırlarını donduran o fiziksel manzara yaşanır: Uzaydan dönen Bob hala 25 yaşında gencecik bir adamdır; ancak kapıda onu bekleyen ikizi Alice, beli bükülmüş, saçları ağarmış 75 yaşında yaşlı bir kadındır! Fizikteki bu "İkizler Paradoksu" (Özel Görelilik), insanoğlunun o en büyük ve en inatçı dogmasını (Zaman algısını) yerle bir eder. Zaman; evrenin her yerinde, herkes için eşit hızda akan (tanrısal) devasa bir nehir değildir. Zaman; kişinin hareket hızına (ve yerçekimine) göre esneyen, bükülen ve tamamen "şahsa özel (öznel)" olan plastik bir çadır bezi gibidir. Saatlerimiz aslında aynı anı göstermez; evrende herkes, kendi hızıyla (kendi saatinin ritminde) akan yapayalnız ve kurgusal bir balonun (zaman boyutunun) içinde yaşar ve yaşlanır.',
    questionStem: 'İkizler Paradoksu\'nda (Işık hızında gidenin genç kalıp dünyadakinin yaşlanması), yazar "Zaman" algısının fizikteki (ve felsefedeki) hangi geleneksel diktatörlüğünü yıkmaktadır?',
    options: [
      'Zamanın sadece gezegenlerin çekim kuvvetine göre hızlanarak geriye doğru aktığını',
      'Zamanın evrendeki tüm canlılar (ve mekânlar) için "aynı hızda, mutlak ve sarsılmaz (eşit) bir diktatör gibi aktığı" yönündeki dogmayı yıkarak; zamanın tamamen hareket hızına bağlı, bükülebilen, kişiye özel (ve esnek) bir boyut olduğunu',
      'İkiz kardeşlerin telepatik olarak birbirlerinin yaşlanma hızlarını kontrol edebildiklerini',
      'Uzay gemilerinin içindeki radyasyonun insan hücrelerini dondurarak ölümsüzlük sağladığını'
    ],
    correct: 1,
    explanation: 'Işık hızında uçanın genç kalması (İkizler Paradoksu); zamanın herkes için "eşit/mutlak (diktatör)" aktığı inancını yıkarak, hızla bükülebilen, kişiye özel (göreceli/esnek) bir kurgu olduğunu kanıtlar.'
  },
  {
    title: 'Sonsuz Maymun Teoremi (Sonsuzluğun Daktilosu)',
    passage: 'Bir maymunu alın, daktilonun başına oturtun ve ona tuşlara rastgele (hiçbir anlam bilmeden) basmasını emredin. O maymunun sadece şans eseri "Hamlet" veya "Macbeth" oyununu baştan sona (tek bir virgül hatası bile yapmadan) yazma ihtimali nedir? Mantığınız bunun "İmkânsız (Sıfır)" olduğunu bağırır. Ancak matematiğin o kan dondurucu ve akıl yakan kuralı olan "Sonsuz Maymun Teoremi" (Infinite Monkey Theorem) devreye girdiğinde denklem değişir. Eğer o maymuna ve daktiloya "SONSUZ ZAMAN (veya sonsuz sayıda maymun)" verirseniz; o maymunun Hamlet\'i kusursuzca yazma ihtimali sıfır değildir, kelimenin tam anlamıyla "%100 KESİNLİKTİR!" Sonsuzluk kavramı o kadar korkutucu, o kadar yutucu ve akıl dışıdır ki; içine giren en saçma, en absürt ve en "imkânsız" görünen olayları (rastlantıları) bile, sadece yeterli zaman verildiği için eninde sonunda (istatistiksel olarak) mutlak bir "Zorunluluğa (Gerçekliğe)" dönüştürür. Kâinatta imkânsız diye bir şey yoktur; imkânsızlık, sadece sonsuzluğun (zamanın) henüz kendi zarını yeterince atmamış olmasından kaynaklanan dar görüşlü bir insan kibridir.',
    questionStem: 'Sonsuz Maymun Teoremi\'nin (Sonsuz sürede maymunun Hamlet\'i yazma kesinliğinin) temelinde yatan, "Sonsuzluk ve İmkânsızlık" ilişkisine dair sarsıcı (matematiksel) çıkarım nedir?',
    options: [
      'Hayvanların (maymunların) edebiyat ve dili insanlardan çok daha hızlı öğrenebildiği gerçeği',
      '"İmkânsız" (sıfır ihtimal) sandığımız o en absürt rastlantıların bile; işin içine "Sonsuzluk (ve sonsuz zaman)" katıldığında, eninde sonunda matematiksel olarak gerçekleşmesi "mutlak (ve %100 kesin) olan birer zorunluluğa" dönüşeceği gerçeği',
      'İngiliz edebiyatının aslında kelimelerin tamamen rastgele dizilmesiyle oluşan anlamsız bir algoritma olduğu',
      'Daktiloların ve mekanik yazı makinelerinin zamanla kendi kendilerine edebiyat üretebilecek kapasiteye ulaştığı'
    ],
    correct: 1,
    explanation: 'Sonsuz zamanda maymunun kitabı kesin olarak yazması; "imkânsız (absürt)" sandığımız şeylerin, sonsuzluk/zaman işin içine girdiğinde istatistiksel olarak er ya da geç %100 gerçekleşecek "mutlak bir zorunluluğa/gerçeğe" dönüştüğünü kanıtlar.'
  },
  {
    title: 'Cordyceps Mantarı (Zombi Karıncalar ve İrade)',
    passage: 'Güneydoğu Asya yağmur ormanlarında, özgürce gezinen bir Marangoz Karıncası yiyecek aramaktadır. Ancak kafasına görünmez bir mikroskobik spor ("Ophiocordyceps" mantarı) düştüğü an, o karınca için hayat ve "Özgür İrade" sonsuza dek biter. Mantar, karıncanın kanına karışır, kaslarını ele geçirir ama beynini (bilincini) açık bırakır! Karınca, mantarın kimyasal emriyle kendi iradesine (ve yuvasına) isyan eder; zorla en yüksek ağaç dalına tırmanır, bir yaprağın damarını ısırarak kendini oraya kitler ve mantar onu içten içe (canlı canlı) yiyerek öldürürken, kafasını yarıp dışarı çıkarak yeni sporlarını rüzgârla diğer kurbanlara (aşağıdaki koloniye) fırlatır! Zombi Karınca olayı, biyolojideki en büyük felsefi dehşettir: "Benim Kararlarım (İradem)" diyerek övündüğümüz o bilinçli ve kutsal yürüyüşümüz; dışarıdan gelen (kimyasal veya ideolojik) küçücük bir spor (virüs/parazit) tarafından saniyeler içinde hacklenebilen; kişiyi kendi katiline (veya fikrine) gönüllüce hizmet edip intihar eden bir kuklaya çevirebilen son derece zayıf ve kırılgan bir tiyatrodan (illüzyondan) ibarettir.',
    questionStem: 'Cordyceps Mantarının karıncayı ele geçirip kendi ölümü için yüksek bir dala tırmandırması (Zombi Karıncalar), "Özgür İrade ve Karar Alma" kavramları hakkında yazar tarafından neyin metaforu yapılmıştır?',
    options: [
      'Mantarların sadece yüksek ağaçlarda rüzgâr yardımıyla daha kolay ürediğinin',
      '"Benim kararlarım (iradem)" diye övündüğümüz bilincimizin; aslında dışarıdan sızan minicik bir kimyasal/parazit (veya ideoloji) tarafından saniyeler içinde hacklenerek, kişiyi "kendi ölümüne/katiline bilmeden hizmet eden" çaresiz bir kuklaya (zombiye) çevirebilecek kadar kırılgan olduğu gerçeğinin',
      'Karıncaların yuvalarını su baskınlarından korumak için en yüksek dallara saklandıklarının',
      'Ormanlık alanlardaki bitki örtüsünün böcekler tarafından tamamen yok edildiğinin'
    ],
    correct: 1,
    explanation: 'Mantarın karıncaya zorla intihar (yüksek dala tırmanma) emri vermesi; o kutsal sandığımız "özgür irademizin", dışarıdan gelen (kimyasal/ideolojik) bir parazitle kolayca hacklenip bizi "kendi katilimize gönüllü hizmet eden" zombilere (kuklalara) dönüştüren kırılgan bir illüzyon olduğunun metaforudur.'
  },
  {
    title: 'Korsakoff Sendromu (Boşluk Düşmanlığı)',
    passage: 'Aşırı alkol kullanımı nedeniyle beynin (hafıza merkezi olan) mamiller cisimciklerinin tahrip olduğu hastalara "Korsakoff Sendromu" teşhisi konur. Bu hastalar yeni hafıza oluşturamazlar; beynin kayıt cihazı kelimenin tam anlamıyla kırılmıştır. Doktora dün ne yaptıklarını sorduğunuzda, hasta "Hatırlamıyorum" demez! Beyin o "boşluktan (hafıza hiçliğinden)" öylesine dehşete düşer ki, o an saniyeler içinde tamamen uydurma, detaylı ve mantıklı bir "YALAN (kurgu)" yaratır: "Dün uzay mekiğiyle Paris\'e gittim, Macron ile kahve içtim!" der (Konfabulasyon - Masallama). Hasta yalan söylemez; o an uydurduğu o masala kendisi de %100 "gerçek anısıymış" gibi inanır. Korsakoff Sendromu bize insan zihninin o en tehlikeli zaafını ifşa eder: İnsan beyni, anlamsızlığa, boşluğa ve "Bilmiyorum" demeye karşı tahammülsüzdür. O, boşluğun (hiçliğin) acısını çekmektense; anında renkli yalanlar, sahte anılar ve komplo teorileri (masallar) kurgulayarak kendi kendini inandırmayı (ve kandırmayı) tercih eden, yalana ve kurguya âşık bir hikâye makinesidir.',
    questionStem: 'Korsakoff Sendromu\'nda hastanın hafıza boşluklarını "sahte (ama inandığı) anılar/yalanlar" üreterek (Konfabulasyon) doldurması, beynin doğası hakkında neyi ispatlar?',
    options: [
      'Alkol bağımlılığının beyindeki dil (konuşma) merkezini geliştirerek insanları yaratıcı birer edebiyatçı yaptığını',
      'İnsan beyninin (ve zihninin) "boşluğa, anlamsızlığa ve bilmemeye" tahammül edemediğini; bu hiçlik (boşluk) acısını yaşamaktansa, anında sahte/uydurma masallar (yalanlar) üreterek kendini o kurguya inandırmayı seçen "yalana âşık (kendini kandıran) bir mekanizma" olduğunu',
      'Paris gibi büyük şehirlerin insan hafızasında her zaman daha kalıcı izler bıraktığını',
      'Geçmiş anıların hiçbir zaman tam olarak silinmediğini ve beyinde kod olarak gizlendiğini'
    ],
    correct: 1,
    explanation: 'Hastanın "bilmiyorum" demek yerine anında inandığı bir masal uydurması; beynin boşluğa/anlamsızlığa dayanamayıp (onu yaşamaktansa) kendi uydurduğu sahte masallara/yalanlara kendini inandırmayı (kandırmayı) seçtiğini ispatlar.'
  },
  {
    title: 'Presesyon (Kutup Yıldızının Ölümü)',
    passage: 'Geceleri ormanda kaybolduğumuzda veya yön aradığımızda hep aynı değişmez, sarsılmaz, gökyüzünün o ebedi çivisi olan yıldıza güveniriz: "Kutup Yıldızı" (Polaris). O hep tam Kuzey\'i gösterir, kâinatın pusulası o’dur. Ancak astronomi bu ebedi (ve romantik) güveni "Presesyon" (Yalpalanma) gerçeğiyle yıkar. Dünya, uzayda dönerken tam dik bir topaç gibi dönmez; o, enerjisi bitmek üzere olan bir topaç gibi ekseni yavaşça sallanarak (yalpalayarak) 26.000 yıllık devasa bir tur atar. Bu yalpalanma yüzünden dünyanın "Kuzey Ekseni" gökyüzünde sürekli yer değiştirir! Antik Mısırlılar piramitleri yaparken Kuzey\'de "Thuban" yıldızı vardı. 12.000 yıl sonra ise Kuzey kutbumuzu Polaris değil, "Vega" yıldızı gösterecektir! Bizim "ebedi ve sarsılmaz yol gösterici" sanıp taptığımız o Kutup Yıldızı; sadece bizim yaşadığımız bu kısacık ve geçici çağa denk gelmiş, kozmik yalpalamanın sıradan (ve geçici) bir nöbetçisinden ibarettir. Kâinatta değişmeyen, sarsılmaz hiçbir mutlak "pusula (doğru)" yoktur; her hakikat, zamanın büyük çarkında (yalpalamasında) yerini bir sonrakine bırakmaya mahkûmdur.',
    questionStem: 'Dünyanın Presesyon hareketi (yalpalaması) yüzünden Kutup Yıldızı\'nın (Kuzeyi gösteren yıldızın) binlerce yılda bir değişmesi, insanlığın "Ebedi Hakikatler/Pusulalar" algısına dair neyin metaforudur?',
    options: [
      'Gelecekte Vega yıldızının dünyaya yaklaşarak atmosferi kavuracağı tehlikesinin',
      'İnsanın "mutlak, ebedi ve sarsılmaz yol göstericiler (pusulalar/doğrular)" sanarak güvendiği şeylerin bile; aslında kozmik (ve tarihsel) döngünün sadece bizim o geçici çağımıza denk gelmiş "geçici, yalpalanan ve değişmeye (ölmeye) mahkûm" birer illüzyonu olduğunun',
      'Antik Mısırlıların astronomide bizimkinden çok daha geride kalarak yanlış yıldızlara taptığının',
      'Dünyanın dönüş hızının zamanla yavaşlayarak yerçekimini tamamen sıfırlayacağının'
    ],
    correct: 1,
    explanation: 'Sarsılmaz/ebedi sandığımız Kutup Yıldızının aslında eksen yalpalamasıyla 12.000 yılda bir değişmesi; inandığımız o mutlak (ebedi) pusulaların/doğruların bile aslında geçici, çağa özgü ve değişmeye (ölmeye) mahkûm birer illüzyon olduğunun metaforudur.'
  },
  {
    title: 'Axolotl (Bebek Kalarak Ölümsüzleşmek)',
    passage: 'Meksika\'nın karanlık göllerinde yaşayan pembe, solungaçları kafasından dışarı fırlamış, daima gülümseyen o tuhaf canlı (Axolotl); biyoloji biliminin en büyük "korsanı (hilebazı)"dır. Bir insanın veya hayvanın kolu koptuğunda, orası yara iziyle (nedbe) kapanır. Oysa bir Axolotl\'ın kolunu, kalbini ve hatta beyninin yarısını kesseniz bile; o organları yara izi bırakmadan, tüm sinir ve kemikleriyle "birebir (kusursuzca)" yeniden üretir (Rejenerasyon)! Peki bu ölümsüzlük (yenilenme) kodunu nasıl bulmuştur? Büyümeyi (Yetişkinliği) "REDDEDEREK!" Biyolojide "Neoteni" denilen bu özellikle Axolotl, hayatı boyunca metamorfoz geçirip (diğer kurbağalar gibi) karaya çıkmaz; o, cinsel olgunluğa ulaşmasına rağmen fiziksel olarak ömür boyu o sulu "Bebeklik (Larva)" formunda kalır! Evrim bize o sarsılmaz felsefeyi Axolotl ile fısıldar: Yıpranmaya, yaşlanmaya ve ölüme giden yol "büyümekten ve şekil değiştirmekten (katılaşmaktan)" geçer. Yaralarınızı kusursuzca iyileştirebilmek ve hayatta (yenilmez) kalabilmek için; bazen o en ilkel, en şekil almamış, en sulu ve savunmasız o "bebeklik (saflık)" evrenizde (kibrinizi dondurup) kasten takılı kalmanız (büyümeyi reddetmeniz) gerekir.',
    questionStem: 'Axolotl canlısının kopan kalbini ve beynini kusursuzca yenileyebilmesinin (Rejenerasyon) temel şartı olan "Neoteni (Ömür boyu larva/bebek formunda kalma)", hayatta kalma ve felsefe bağlamında neyi temsil eder?',
    options: [
      'Kopan uzuvların sadece tatlı sularda yüzerken temizlenip iyileşebildiğini',
      'Yaraları iyileştirebilmenin ve yenilmezliğin (ölümsüzlüğün); "büyümek (katılaşmak/yetişkinlik)" ile değil; aksine değişimi reddederek o en saf, şekillenmemiş, esnek ve "bebek (kök hücre) formunda" kalabilme (tevazu/büyümeyi reddetme) yeteneğinde gizli olduğunu',
      'Kurbağaların karaya çıkarken ciğerlerini geliştirdikleri için daha hızlı yaşlandıklarını',
      'Açık pembe renkli derilerin genetik olarak güneş ışığına daha çok ihtiyaç duyduğunu'
    ],
    correct: 1,
    explanation: 'Axolotl\'ın organlarını yenileyebilmesinin (gücünün) sırrının yetişkinliğe geçmemek (neoteni/bebek kalmak) olması; yenilmezliğin ve iyileşmenin "büyümek/katılaşmakta" değil, o en saf/esnek (bebek) formda kalabilme tevazusunda gizli olduğunu temsil eder.'
  },
  {
    title: 'Planaria Solucanları (Bedenin Hafızası)',
    passage: 'Eğer bir insanın kafasını keserseniz, içindeki tüm anılar, hafıza ve öğrenilmiş tecrübeler (beyinle birlikte) çöpe gider. Bizler "Hafıza ve Anıların" sadece beynimizin (kafatasımızın) içindeki sinir ağlarına hapsolduğuna inanırız. Ancak Tufts Üniversitesi\'nde "Planaria (Yassısolucan)" ile yapılan deney bu kibri bıçak gibi keser. Araştırmacılar bu solucanlara ışıklı bir labirentte yiyecek bulmayı "öğrettiler" (hafıza kodladılar). Ardından o kan donduran işlemi yapıp, "Öğrenmiş olan solucanların KAFALARINI (beyinlerini) KESTİLER!" Başsız kalan gövde (kuyruk kısmı), 14 gün içinde kök hücreleriyle kendine yepyeni bir baş (sıfır bir beyin) üretti. Ve o yepyeni kafaya sahip solucan, labirente bırakıldığında ne oldu? Hiçbir eğitim almamış o yeni beyin, yiyeceğin yerini anında buldu! Kesilip atılan o eski beynin içindeki "Hafıza (öğrenilen anılar)", o sıfır kafaya da (gövdeden aktarılarak) kusursuzca geçmişti! Hafıza (bilinç), sadece tepedeki beynin tekelinde (kilitli) değildir; o, canlının kuyruğuna, dokularına ve tüm hücrelerine (bedenine) kodlanmış, merkeziyetsiz (ve kafadan bile bağımsız) devasa, dilsiz ve akışkan bir bilgi havuzudur.',
    questionStem: 'Planaria solucanlarının kafaları kesilip yeni baş çıkardıklarında "eski (kesilen kafadaki) anılarını hatırlamaları" deneyi, hafıza ve bilinç hakkında hangi bilimsel ezberi yıkmaktadır?',
    options: [
      'Solucanların gözleri olmadığı için sadece koku alma duyularıyla labirentleri çözebildiğini',
      'Hafızanın ve öğrenilmiş "anıların (bilincin)", sadece kafatasının içindeki "merkezi beyne" hapsolmuş bir tekel olduğu ezberini yıkarak; aslında hatıraların bedenin diğer hücrelerine/kuyruğuna (tüm dokuya) yayılan "merkeziyetsiz ve akışkan" bir bilgi ağı olduğunu',
      'Işığa maruz kalan hayvanların hücre bölünmesi sırasında mutasyona uğradığını',
      'Laboratuvar ortamında büyüyen canlıların doğal ortamdaki canlılardan daha zeki olduğunu'
    ],
    correct: 1,
    explanation: 'Yeni bir beyin çıkaran kuyruğun eski anıları hatırlaması; hafızanın ve anıların sadece "beyne (kafaya) hapsolmuş" bir tekel olmadığını, bedenin geri kalanına (hücrelerine) dağılmış "merkeziyetsiz/akışkan" bir bilgi olduğunu kanıtlar.'
  },
  {
    title: 'Ada Lovelace (Donanımsız Yazılım ve Vizyon)',
    passage: '1843 yılında (yani ortada bırakın bilgisayarı, doğru düzgün bir elektrik devresi bile yokken), İngiliz soylusu Ada Lovelace, Charles Babbage\'ın tasarladığı devasa, dişlilerden oluşan, mekanik (buharlı) "Analitik Makine" için notlar alıyordu. O dönemde erkek matematikçiler bu makineyi sadece "hızlı bir hesap makinesi (hesap boncuğu)" olarak görüyordu. Ancak Ada Lovelace, o dönen çarklara bakıp o sarsıcı (ve 100 yıl sonrasını gören) vizyonu yazdı: "Bu makine sadece sayılarla işlem yapmaz! Eğer sayılar, müzik notalarını veya harfleri temsil edecek şekilde kodlanırsa; bu makine (algoritma) kendi kendine kusursuz müzikler besteleyebilir ve grafikleri işleyebilir!" Ada, bu fikrini kanıtlamak için tarihin "İlk Bilgisayar Algoritmasını" kâğıda yazdı. Makine hiçbir zaman (maddi imkânsızlıktan) üretilemedi. Ancak Ada\'nın hikâyesi felsefenin o ebedi çığlığıdır: Gerçek deha ve "Yazılım (Vizyon)"; çağının eksik, ilkel ve demirden oluşan donanımlarına (teknolojisine) hapsolmaz. Zihin, henüz icat edilmemiş aletlerin (olmayan makinelerin) senfonisini, 100 yıl öncesinden o dilsiz kâğıtlara (saf matematikle) işleyebilecek kadar özgür, zamanı aşan ve donanımdan (fizikten) bağımsız bir büyücüdür.',
    questionStem: 'Ortada bilgisayar yokken Ada Lovelace\'ın "makinenin sadece sayıları değil, müzik ve harfleri (kodla) işleyebileceğini" yazması (ilk algoritma), Deha ve Teknoloji (Vizyon) bağlamında neyi temsil eder?',
    options: [
      'Buharla çalışan makinelerin günümüz bilgisayarlarından çok daha hızlı işlem kapasitesine sahip olduğunun',
      'Kadınların 19. yüzyılda mühendislik fakültelerinde erkeklerden daha çok desteklendiğinin kanıtının',
      'Gerçek (aydınlanmış) aklın ve "Yazılım/Vizyon"un; kendi çağının ilkel ve yoksun "donanımına (fiziksel aletlerine)" hapsolmayıp, henüz icat edilmemiş teknolojilerin sınırlarını bile 100 yıl öncesinden görebilen (çağını aşan) o özgür ve bağımsız büyücülüğünün',
      'Müzik bestelemek için sadece matematiksel hesaplamalara ihtiyaç duyulduğunun'
    ],
    correct: 2,
    explanation: 'Donanım (bilgisayar) ortada yokken bile o makinenin müzik/kod yazabileceğini kâğıda dökmesi; "Zekânın (vizyon/yazılımın)" kendi çağının fiziksel aletlerine (donanım yoksunluğuna) hapsolmayıp zamanı aşan özgür ve büyüleyici bir öngörü (deha) olduğunu temsil eder.'
  },
  {
    title: 'Kuşların Kuantum Pusulası (Kriptokrom)',
    passage: 'Her kış, küçük Kızılgergedan (Robin) kuşları, gökyüzünde hiçbir GPS veya pusulaları olmadan binlerce kilometrelik o efsanevi (ve milimetrik) göç yollarını hatasız uçarlar. Bilim insanları yıllarca kuşların gagalarındaki küçük bir demir tozunun (mıknatıs gibi) onlara yön buldurduğunu sanıyordu. Ancak kuantum biyologları mikroskoptan baktıklarında beyinleri felç oldu: Kuşların yön bulma şekli kaba bir mıknatıs değil, fiziğin o en ürkütücü sırrı olan "Kuantum Dolanıklığı" idi! Kuşun gözündeki "Kriptokrom" (Cryptochrome) adlı proteine bir foton (ışık) çarptığında, içindeki iki elektron "Kuantum Dolanıklık (Spooky Action)" durumuna geçiyor. Dünyanın manyetik alanı, o an bu dolanık elektronların "dönüş eksenini (spin)" mikroskobik olarak bükerek kuşa yönü fısıldıyor! Kuşlar manyetik alanı hissetmiyor; onlar, o devasa manyetik alanı kelimenin tam anlamıyla gözleriyle, kuantum dalgalanmalarının şekli olarak (görsel bir pusula gibi) GÖRÜYORLAR! Doğa; o soğuk, rasyonel ve laboratuvarlara hapsettiğimizi sandığımız kuantum matematiğini; milyonlarca yıldır küçük bir kuşun (kanatlı bir kâşifin) gözbebeklerine, gökyüzünün haritası (pusulası) olarak çizen en acımasız ve dâhi mühendistir.',
    questionStem: 'Göçmen kuşların gözündeki (Kriptokrom proteiniyle) manyetik alanı "Kuantum Dolanıklığı" ile yön pusulası olarak kullanması, Biyoloji ve Kuantum (Doğa) felsefesi hakkında neyin şaşırtıcı bir ispatıdır?',
    options: [
      'Göçmen kuşların karanlıkta uçarken yönlerini bulamamalarının tek sebebinin ay ışığı eksikliği olduğunun',
      'Sadece laboratuvarlarda, devasa dondurucu makinelerle elde edilebildiği sanılan o soğuk ve karmaşık "Kuantum Fiziği"nin; aslında milyonlarca yıldır doğanın (biyolojinin) en küçük canlılarının gözlerine kazıdığı, günlük ve organik bir hayatta kalma aracı (mühendisliği) olduğunun',
      'Kuşların gözlerindeki demir tozlarının zamanla pusula ibrelerine dönüşerek kafatasını ağırlaştırdığının',
      'Manyetik alanların zamanla yavaşlayarak tüm canlıların beyin fonksiyonlarını yok edeceğinin'
    ],
    correct: 1,
    explanation: 'Sadece laboratuvarda yapılan "Kuantum Dolanıklığı"nın kuşun gözünde yön bulmak için kullanılması; karmaşık kuantum kurallarının doğanın (biyolojinin) milyonlarca yıldır kullandığı sıradan, günlük ve organik bir mühendislik aracı olduğunu ispatlar.'
  },
  {
    title: 'Foucault Sarkacı (Dünyanın Sessiz Dönüşü)',
    passage: '1851 yılında Fransız fizikçi Léon Foucault, dünyanın döndüğünü (kiliseye, yobazlığa ve şüphelere inat) kanıtlamak için uzaya roket fırlatmadı, devasa formüller yazmadı. O, gelmiş geçmiş en saf, en basit ve en dondurucu (şiirsel) deneyi tasarladı. Paris\'teki Pantheon binasının (kubbeli tapınağın) tam tepesinden 67 metre uzunluğunda çelik bir tel sarkıttı ve ucuna 28 kiloluk bir kurşun top bağladı. Topun altına da kum serpti. Topu serbest bıraktı ve sarkaç "sadece kendi halinde, düz bir çizgide" sallanmaya başladı. Saatler geçtikçe izleyiciler dehşete düştü! Sarkacın kumda çizdiği çizgi yavaş yavaş "saat yönünde dönüyordu (kayıyordu)". Oysa sarkacı iten hiçbir güç (veya rüzgâr) yoktu. Aslında dönen (kayan) şey sarkaç değildi; sarkaç uzay boşluğuna göre mutlak bir sabitte sallanırken, bizzat ALTINDAKİ ZEMİN (Dünya), ayaklarımızın altından sessizce, dilsizce ve devasa bir hızla kayıp dönüyordu! "Foucault Sarkacı"; bilimin en büyük devrimlerinin karmaşık makinelerle değil; doğanın o görünmez kurallarını tek bir ipten sarkıtarak (sadeliğin ihtişamıyla) kitlelerin gözüne çırılçıplak sunan, aklın ve basitliğin o ezici zaferidir.',
    questionStem: 'Léon Foucault\'nun "Foucault Sarkacı" deneyi (kumda çizginin dönmesiyle Dünyanın dönüşünü kanıtlaması), Bilim tarihi ve "Keşiflerin Doğası" bağlamında neyin sembolü (zaferi) olarak tasvir edilir?',
    options: [
      'Gelecekte uzay araştırmaları için kilise binalarının (yüksek kubbelerin) rasathaneye çevrilmesi gerektiğinin',
      'En büyük ve devrimsel (kâinatı açıklayan) hakikatlerin; her zaman karmaşık makineler, devasa bütçeler veya formüllerle değil; tek bir ipe bağlı kurşun top gibi "saf, çıplak ve mutlak (şiirsel) bir sadeliğin zekâsıyla" kitlelerin gözü önüne serilebileceği (basitliğin) zaferinin',
      'Sarkaçların zamanla dünyanın manyetik alanını bozarak depremlere neden olduğu yönündeki komplo teorisinin',
      'Dünyanın dönüş hızının kum üzerindeki sürtünmeyle yavaşlatılabileceği yönündeki rasyonel yanılgının'
    ],
    correct: 1,
    explanation: 'Basit bir ip ve topla koca dünyanın dönüşünün kanıtlanması; en devrimsel/büyük hakikatlerin karmaşık makinelerle değil, aklın o saf, zekice ve çıplak (mutlak) "sadeliği/basitliğiyle" kanıtlanabileceğinin (basitliğin zaferinin) sembolü olarak tasvir edilir.'
  },
  {
    title: 'Radyokarbon Tarihlemesi (Zamanın Kum Saati)',
    passage: 'Eski bir mumya, bir tahta parçası veya bir dinazor kemiği bulunduğunda, tarihçiler onun "ne kadar eski" olduğunu nasıl bilirler? 1949\'da Willard Libby adlı kimyager, doğanın o içine gizlenmiş, dilsiz (radyoaktif) kum saatini buldu: "Radyokarbon-14 Tarihlemesi". Canlıyken hava alan her bitki, hayvan ve insan, vücuduna havadaki karbon-14 (C-14) izotopunu depolar. Canlı öldüğü (nefesi kesildiği) saniye o depolama biter ve bedendeki o Karbon-14, sabit ve sarsılmaz bir hızla (her 5730 yılda bir yarısı yok olacak şekilde) bozulmaya, erimeye (radyoaktif bozunmaya) başlar! Bilim insanı o ölü kemiği alır ve içindeki "kalan Karbon-14 miktarını" ölçer. Kalanı ne kadar azsa, canlı o kadar asır önce (nefesini kapatarak) zamanın dehlizlerine düşmüştür. Karbon-14 yöntemi; ölümün her şeyi sildiğini sanan insana karşı bilimin attığı soğuk bir zıpkındır: Ölüm bile varoluşun izini anında (sıfırlayarak) silemez; bedenin içindeki atomlar, canlı ölse bile kendi küllerinin içinde binyıllarca tıkır tıkır işlemeye (çürürken bile kendi tarihini saat gibi tutmaya) devam eden dilsiz bir kronometredir.',
    questionStem: 'Willard Libby\'nin bulduğu "Karbon-14 Tarihlemesi" (Ölen canlının içindeki karbonun sabit hızla erimesi) yöntemi, yazar tarafından "Ölüm ve Zaman" felsefesinde neyin (atomik) bir metaforu olarak yüceltilmiştir?',
    options: [
      'Karbon gazının atmosferi zehirleyerek canlıların ömrünü kasten kısalttığı (ve öldürdüğü) ekolojik gerçeğinin',
      'Ölümün varoluşu bir saniyede (tamamen) silip attığı (hiçliğe dönüştürdüğü) inancına karşı; canlının bedeni ölse (nefesi kesilse) bile, içindeki atomların binyıllar boyunca "çürürken bile kendi tarihini ve geçmişini saniye saniye kaydeden (çalışan) dilsiz bir saat (kronometre)" olduğu gerçeğinin (metaforunun)',
      'Mumyalamanın eski çağlarda sadece karbon maddesi yakılarak yapılan dinsel bir ritüel olduğunun',
      'Radyasyonun fosillerin rengini değiştirerek onları müzede daha değerli kıldığının'
    ],
    correct: 1,
    explanation: 'Ölen canlının içindeki karbonun 5730 yılda bir sabit hızla eriyerek saati söylemesi; "Ölüm anında her şeyin sıfırlanıp bittiği" kibrine karşı, atomların (küllerin) çürürken bile kendi yaşını/tarihini anlatan dilsiz bir saat (kronometre) olduğu felsefesinin metaforudur.'
  }
];

export const bilimParagrafSorulari56: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_56.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_56[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim56-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_57 = [
  {
    title: 'Gell-Mann Amnezisi (Gönüllü Medya Körlüğü)',
    passage: 'Sabah gazetenizi açtınız ve kendi "uzman" olduğunuz bir konuyla (örneğin gümrük mevzuatıyla) ilgili bir haber okudunuz. Haberdeki bilgilerin baştan aşağı yanlış, çarpıtılmış ve cahilce yazıldığını fark ettiniz! Öfkeyle "Bu gazeteciler hiçbir şey bilmiyor!" dediniz. Ancak asıl felsefi şok saniyeler sonra başlar: Sayfayı çevirip, hakkında "hiçbir şey bilmediğiniz" uluslararası siyaset veya ekonomiyle ilgili başka bir haberi okumaya başladığınız an; o gazetenin daha 5 dakika önce size "cahilce yalanlar söylediğini" TAMAMEN UNUTURSUNUZ! O yeni haberi sanki mutlak bir hakikatmiş gibi (sorgulamadan) okur ve kabul edersiniz. Yazar Michael Crichton buna "Gell-Mann Amnezisi" adını verir. İnsan zihni, kendi alanı dışındaki dünyayı (kaosu) anlamlandırmak için otoriteye (medyaya) o kadar çaresizce muhtaçtır ki; karşısındaki kaynağın bir yalancı olduğunu kendi gözleriyle ispatlasa bile, sayfayı çevirdiği an o gerçeği (amneziyle) anında silerek "gönüllü bir kandırılma (körü körüne güven)" döngüsüne tekrar girmektedir.',
    questionStem: 'Gell-Mann Amnezisi (Gazetenin kendi uzmanlığımızdaki bir konuda yalan söylediğini görüp, diğer sayfalardaki haberlerine yine körü körüne inanma durumu), insan psikolojisi hakkında neyi ifşa eder?',
    options: [
      'Gazetecilerin her zaman sadece ekonomi ve siyaset alanlarında uzmanlaşmış yazarlar (otoriteler) olduğunu',
      'İnsanoğlunun, bilmediği o devasa dünyayı (kaosu) anlamlandırmak için dış otoritelere öylesine çaresizce muhtaç olduğunu ki; o kaynağın "yalancı ve cahil" olduğunu bizzat kendi tecrübesiyle kanıtlasa bile, sayfayı çevirdiği an bu gerçeği unutup (amnezi yaşayıp) gönüllü olarak yeniden kandırılmayı seçtiği acizliğini',
      'Matbaa mürekkebinin yaydığı kimyasalların insan beyninde geçici hafıza kaybı (amnezi) yarattığını',
      'Uzmanların kendi alanlarındaki gelişmeleri takip etmek için medyaya ihtiyaç duymadıkları gerçeğini'
    ],
    correct: 1,
    explanation: 'Bir sayfada gazetenin cahilliğini (yalanını) kendi uzmanlığıyla yakalayan insanın, sayfayı çevirince bunu unutup bilmediği konuda o gazeteye (körü körüne) inanmaya devam etmesi; insanın o çaresiz "gönüllü kandırılma ve otoriteye muhtaçlık" döngüsünü (Gell-Mann Amnezisini) ifşa eder.'
  },
  {
    title: 'Kumarbaz Safsatası (Zihnin Zar Atması)',
    passage: 'Bir kumarhanede rulet masasının başında duruyorsunuz. Top peş peşe tam "10 kez Kırmızı\'ya" düşüyor. Etraftaki herkes heyecanla fısıldaşıyor: "Bu kadar kırmızıdan sonra artık kesinlikle Siyah gelmek ZORUNDA!" Herkes varını yoğunu Siyah\'a yatırıyor. Sonuç? Top 11. kez yine Kırmızı\'ya düşüyor ve herkes iflas ediyor! Matematikçiler buna "Kumarbaz Safsatası" (Gambler\'s Fallacy) der. İnsan beyni evrendeki rastlantıları (kaosu) kabullenemez; olayların bir "hafızası" ve ilahi bir "dengeleme adaleti" olduğuna inanmak ister. Oysa o plastik rulet topunun ne bir hafızası, ne de bir vicdanı vardır. Geçmişte 10 kez de, 1 milyon kez de Kırmızı gelse; o topun bir sonraki elde Kırmızı\'ya düşme ihtimali her zaman matematiksel olarak yine %50\'dir! Kumarbaz Safsatası; insanın, cansız ve rastgele (bağımsız) fiziksel olaylara kasten "kader, hafıza ve adalet" atfederek, kendi zihnindeki o romantik (ve matematik dışı) beklentiler yüzünden nasıl göz göre göre iflasa (kâbusa) sürüklendiğinin kanıtıdır.',
    questionStem: 'Kumarbaz Safsatası (Peş peşe kırmızı geldiği için bir sonraki el kesin siyah gelecek sanrısı), insanın "olasılık ve rastlantı" algısındaki hangi tehlikeli (ve romantik) yanılgıyı çürütür?',
    options: [
      'Kumarhanelerdeki rulet masalarının her zaman hileli olarak tasarlandığı yönündeki komplo teorisini',
      'Fiziksel nesnelerin (topun) birbirini izleyen atışlarda hızlanarak renk değiştirdiği kuralını',
      'İnsanoğlunun; tamamen "bağımsız, hafızasız ve rastgele" olan cansız olaylara, sırf kendi zihnini rahatlatmak için uydurma bir "ilahi denge (hafıza/adalet)" atfederek matematiğin o kör ve duygusuz işleyişini (olasılığı) reddetme yanılgısını',
      'Şans oyunlarının sadece matematik bilmeyen eğitimsiz kitleler tarafından oynandığı efsanesini'
    ],
    correct: 2,
    explanation: '10 kez kırmızı gelen topun "artık siyah gelmek zorunda" sanılması; insanın cansız nesnelere/olaylara "hafıza ve adalet (denge)" atfederek olasılığın o bağımsız, hafızasız (kör/matematiksel) doğasını reddetme yanılgısını (Kumarbaz Safsatasını) açıklar.'
  },
  {
    title: 'Ültimatom Oyunu (İntikamcı Ahlak)',
    passage: 'Ekonomi bilimi yüzyıllar boyunca insanın her zaman kendi çıkarını (rasyonel olarak daha fazla parayı) maksimize edecek şekilde karar veren "soğuk ve bencil bir makine (Homo Economicus)" olduğuna inandı. Ta ki "Ültimatom Oyunu" (Ultimatum Game) bu ezberi yıkana kadar. Bir adama 100 dolar verilir ve bunu tanımadığı ikinci bir adamla (istediği oranda) bölüşmesi istenir. Ancak kural şudur: Eğer ikinci adam kendisine sunulan teklifi (payı) "Reddederse", her iki taraf da tek kuruş alamaz (para yanar). Birinci adam çıkarcı bir şekilde kendine 90 dolar alıp, ikinci adama 10 dolar teklif eder. İkinci adamın mantıken o 10 doları (hiç yoktan iyidir diyerek) cebine koyması gerekir. Oysa insanlar o 10 doları şiddetle REDDEDER ve parayı yakarlar! Neden mi? Çünkü o adaletsiz (ve kibirli) teklif, insandaki o ilkel "Adalet, onur ve intikam" düğmesine basmıştır. İnsan; adaletsizliğe ve aşağılanmaya katlanmaktansa, kendi zararını (aç kalmayı) bile göze alarak o zorbanın (birinci adamın) sistemini yakmayı seçen; sadece cüzdanla değil, onur ve "ahlaki intikam" hırsıyla karar alan irrasyonel (ve asi) bir canlıdır.',
    questionStem: 'Ültimatom Oyunu\'nda kendisine yapılan "adaletsiz" para teklifini reddederek iki tarafın da parasını (kendi payını bile) yakan insanın davranışı, klasik ekonomi bilimine dair neyi çürütmektedir?',
    options: [
      '100 doların iki kişi arasında bölüşülmesi için yeterli bir meblağ olmadığını',
      'İnsanın sadece "maddi kârını maksimize etmeye çalışan bencil ve soğuk bir mantık makinesi (Homo Economicus)" olduğu inancını yıkarak; aslında adaletsizlik (ve aşağılanma) karşısında kendi maddi zararını bile göze alıp sistemi cezalandırmayı seçen "onur (ve ahlaki intikam) odaklı, irrasyonel" bir varlık olduğunu',
      'Oyun ve deney ortamlarında insanların her zaman araştırmacıları kandırmak için sahte davrandığını',
      'Paranın insanlık tarihindeki en büyük teknolojik icat olduğu gerçeğini'
    ],
    correct: 1,
    explanation: 'Adamın 10 doları "hiç yoktan iyidir" deyip almak yerine adaletsiz bulduğu için reddetmesi (ve yakması); insanın sadece para (çıkar) odaklı soğuk bir makine olduğu klasik inancını çürüterek, onun onur ve ahlaki intikam uğruna kendi zararını bile göze alabilen irrasyonel bir asi olduğunu kanıtlar.'
  },
  {
    title: 'Çerenkov Işıması (Ses Duvarının Rengi)',
    passage: 'Savaş uçakları gökyüzünde ses hızını aştıklarında havayı yırtarak o meşhur, sağır edici "Ses Duvarı Patlaması (Sonic Boom)" şok dalgasını yaratırlar. Peki ışığın da böyle bir duvarı var mıdır? Albert Einstein evrende hiçbir şeyin ışık hızını (vakum ortamında saniyede 300.000 km) aşamayacağını kanıtladı. Ancak ışık, bir "su" tankının içine girdiğinde hızı aniden yavaşlar (saniyede 225.000 km\'ye düşer). Nükleer reaktörlerin devasa su havuzlarında gerçekleşen olay ise kelimenin tam anlamıyla bir fiziksel isyandır! Reaktörden fışkıran radyasyon parçacıkları (elektronlar), suyun içindeki o yavaşlamış ışığı öylesine şiddetli bir hızla "geçerler (ışık hızını suda aşarlar)" ki; suyu yırtarak tıpkı bir savaş uçağının çıkardığı sonik patlama gibi devasa bir "Kozmik Işık Patlaması" yaratırlar! Ancak biz bunu bir ses olarak duymayız; biz bunu, reaktör havuzunun dibinden yükselen, büyüleyici, doğaüstü ve dondurucu bir "Elektrik Mavisi Parıltı" (Çerenkov Işıması) olarak GÖRÜRÜZ. O mavi ışık, bir renk değil; suyun içinde ışık hızını tokatlayarak ezip geçen parçacıkların bıraktığı o hayaletimsi, görsel ve nükleer "patlama (yırtılma) anının" ta kendisidir.',
    questionStem: 'Nükleer reaktörlerdeki suları "Elektrik Mavisi"ne boyayan Çerenkov Işıması, yazar tarafından fiziğin hangi uç olayının (şokunun) görsel (ve şiirsel) bir karşılığı olarak tasvir edilmiştir?',
    options: [
      'Uranyum çubuklarının suyun içinde oksitlenerek zamanla paslanmasının',
      'Bir savaş uçağının gökyüzünde yarattığı o sağır edici "ses duvarı patlamasının (sonic boom)"; suyun içinde "ışık hızını (sınırını) aşıp geçen" radyasyon parçacıkları tarafından yaratılan dilsiz, büyüleyici ve görsel (ışınsal) versiyonu olarak',
      'Güneş ışınlarının su yüzeyinde kırılarak okyanusları mavi göstermesi kuralının',
      'Suda çözünen bakterilerin tehlike anında kendilerini korumak için yaydığı biyolojik bir zehrin'
    ],
    correct: 1,
    explanation: 'Çerenkov ışımasının o mavi parıltısı; parçacıkların suyun içindeki ışık hızını aşarak suyu yırtmasıyla oluşan (tıpkı jetlerin ses duvarını aşması gibi) nükleer ve görsel bir şok patlamasının (ışık duvarı patlamasının) şiirsel karşılığı olarak tasvir edilmiştir.'
  },
  {
    title: 'Büyük Ölüm (Permiyen-Triyas Yok Oluşu)',
    passage: 'İnsanoğlu "Kıyamet" veya "Yok Oluş" denilince hep 66 milyon yıl önce dinozorları öldüren o meşhur asteroit çarpmasını hatırlar. Oysa o çarpma, dünya tarihindeki en büyük felaketlerin yanında sadece bir "ilkbahar esintisi" kadar hafiftir! Günümüzden 252 milyon yıl önce yaşanan "Büyük Ölüm" (Permiyen-Triyas Yok Oluşu), yeryüzünün gerçek (ve en korkunç) cehennemidir. Sibirya\'da yüz binlerce yıl boyunca aralıksız patlayan devasa volkanlar, milyarlarca ton zehirli gazı atmosfere püskürttü. Okyanuslar kelimenin tam anlamıyla "kaynamaya" ve asitlenmeye başladı, gökyüzünden asit yağmurları yağdı, ozon tabakası parçalandı ve denizlerdeki oksijen tamamen bitti. Sadece birkaç bin yıl içinde, dünyadaki tüm deniz canlılarının %96\'sı, karadaki canlıların ise %70\'i (gezegendeki toplam yaşamın neredeyse tamamı) nefessiz kalarak, asitlerde eriyerek ve kavrularak sonsuza dek silindi! Hayat o kadar derin bir yara aldı ki, dünyanın kendini toparlayıp ormanları yeniden yeşertmesi tam "10 milyon yıl" sürdü. "Büyük Ölüm", doğanın (dünyanın) kendi kendini parçalayıp küle çevirdiği; yaşamın o pamuk ipliğine bağlı kırılganlığının ve kâinattaki asıl büyük (ve içeriden gelen) kıyametin o en dondurucu miladıdır.',
    questionStem: '"Büyük Ölüm" (Permiyen-Triyas Yok Oluşu) ile dinozorların yok oluşu arasındaki kıyaslama, yazar tarafından gezegenin "kıyamet potansiyeli" hakkında neyi vurgulamak için kullanılmıştır?',
    options: [
      'Göktaşlarının yeryüzüne çarptığında sadece küçük bir toz bulutu kaldırdığını',
      'İnsanın aklına kazınan (dinozorları öldüren asteroit) felaketinin bile; yeryüzünün (volkanlarla/asitle) bizzat kendi içinden doğurduğu o sönmek bilmez, mutlak ve gezegendeki hayatın %96\'sını eriten (10 milyon yıl süren) asıl "Büyük Kıyamet (Büyük Ölüm)" karşısında ne kadar hafif (ve cılız) bir esinti kaldığını',
      'Dinozorların aslında volkanlardan çıkan lavlarla savaşarak hayatta kaldıkları gerçeğini',
      'Okyanus sularının zamanla kendiliğinden çekilerek dünyadaki tüm canlıları susuzluktan öldüreceğini'
    ],
    correct: 1,
    explanation: 'Dinozorların ölümünün (göktaşı) "Büyük Ölüm" karşısında esinti kalması; gezegenin bizzat kendi içinden (volkanlarla) kopardığı o mutlak, tüm yaşamın %96\'sını silen asıl cehennemin/kıyametin (Büyük Ölüm\'ün) boyutunu ve hayatın kırılganlığını vurgulamak için kullanılmıştır.'
  },
  {
    title: 'Kartopu Dünya (Bembeyaz Ölüm)',
    passage: 'Gezegenimizi uzaydan mavi, yeşil ve cıvıl cıvıl dönen sıcak bir küre olarak görmeye alışkınız. Ancak jeologlar kayaları kazıdıklarında akıl sınırlarını donduran o "Kartopu Dünya" (Snowball Earth) kâbusuyla yüzleştiler! Günümüzden yaklaşık 700 milyon yıl önce (Kriyojenjen döneminde), havadaki karbondioksit tamamen tükendi. Kutuplarda başlayan buzullar giderek güneye inmeye başladı. Buz, güneş ışığını uzaya geri yansıttığı için (Albedo Etkisi) dünya giderek daha da soğudu. Soğudukça daha çok buz oluştu, daha çok buz oluştukça dünya daha da soğudu! Bu ölümcül ve durdurulamaz döngü, sonunda okyanusların ekvatora kadar donmasına, gezegenin tamamının kilometrelerce kalınlıkta devasa, bembeyaz, sağır edici ve ölü bir "Kartopuna (buzul küresine)" dönüşmesine neden oldu! Milyonlarca yıl boyunca yeryüzü, uzay boşluğunda fırlatılmış ölü bir bilardo topu gibi bembeyaz (ve eksi 50 derecede) döndü. Bizim o sarsılmaz ve sıcak yuvamız (Dünya); aslında incecik bir gaz örtüsünün (ve karbonun) insafına kalmış; şalteri kapandığında saniyeler içinde donarak uzayın dilsiz karanlığında buz tutan, kırılgan ve pamuk ipliğine bağlı beyaz bir buz mezarından başka bir şey değildir.',
    questionStem: 'Kartopu Dünya (Snowball Earth / gezegenin ekvatora kadar donması) senaryosu, Dünya\'nın "iklim ve yaşanabilirlik" dengesi hakkında felsefi ve bilimsel olarak neyi sembolize eder?',
    options: [
      'Güneşin yaydığı enerjinin 700 milyon yıl önce tamamen sönerek dünyayı kendi kaderine terk ettiğini',
      'Yeryüzünün o sıcak, sarsılmaz ve yeşil yuva kibrinin; aslında atmosferdeki incecik bir gaz (ve sıcaklık) dengesine bağlı olduğunu ve o denge kırıldığında (Albedo etkisiyle) gezegenin saniyeler içinde uzay boşluğunda dönen bembeyaz, ölü bir "buzul mezarına (kırılgan bir bilardo topuna)" dönüşebileceğinin dehşetini',
      'İnsanların buzul çağlarında yeraltı şehirleri kurarak teknolojiyi icat ettiklerini',
      'Buzulların altındaki denizlerin hiçbir zaman donmayarak balıkların yaşamaya devam ettiğini'
    ],
    correct: 1,
    explanation: 'Dünyanın ekvatora kadar donup bembeyaz bir bilardo topuna (buzul küresine) dönmesi; yaşadığımız sarsılmaz/sıcak yuvanın aslında incecik bir gaz dengesine (pamuk ipliğine) bağlı, koptuğu an saniyeler içinde donan/ölü bir buz mezarına dönüşebilen kırılgan bir yapı olduğunu sembolize eder.'
  },
  {
    title: 'Dyson Küresi (Yıldızları Kafeslemek)',
    passage: '1960 yılında fizikçi Freeman Dyson, insanoğlunun ve evrendeki gelişmiş medeniyetlerin "enerji açlığının" nerelere varabileceğini o dondurucu kurgusuyla özetledi: "Dyson Küresi" (Dyson Sphere). Bir medeniyet teknolojik olarak öylesine büyür, çoğalır ve o kadar devasa bilgisayarlar inşa eder ki, yaşadığı gezegendeki kömür, rüzgâr veya nükleer enerji onlara artık asla yetmez. Bu durumda o tanrısal (ve açgözlü) medeniyet ne yapar? Güneş\'in (yıldızının) etrafını devasa, kapalı ve metalden örülmüş dev bir "KÜRE (zırh)" ile tamamen kaplar! Yıldızın yaydığı o trilyonlarca gigawattlık enerjinin uzaya kaçıp ziyan olmasına izin vermez; yıldızı kelimenin tam anlamıyla bir kafese (aküye) kapatıp onun tüm gücünü ve alevlerini bencilce kendi teknolojisini beslemek için sömürür! Dyson Küresi, sadece astrofiziksel bir ütopya değildir; o, aklın ve teknolojinin durdurulamaz (doyumsuz) hırsının; gezegenleri tüketmekle yetinmeyip, sonunda gökyüzündeki o dokunulmaz ve ilahi yıldızları (Güneşi) bile devasa bir metal kafese tıkarak emen, mutlak (ve şımarık) bir "evrensel parazite (ve fetişizme)" dönüşebileceğinin en karanlık manifestosudur.',
    questionStem: 'Freeman Dyson\'ın "Güneşin etrafını devasa bir küreyle kaplayıp enerjisini emme" teorisi (Dyson Sphere), teknoloji ve medeniyetin gelişimi bağlamında neyin "karanlık ve doyumsuz (kibirli)" bir yansımasıdır?',
    options: [
      'Gelecekte güneş patlamalarının dünyayı yakmaması için kasten yapılan koruyucu bir barış kalkanının',
      'Teknolojinin ve insan aklının o "durdurulamaz enerji açlığının ve doyumsuz kibrinin"; gezegenleri tüketmekle yetinmeyip, sonunda gökyüzündeki ilahi yıldızları (Güneşi) bile devasa bir metal kafese (aküye) kapatıp sömürecek kadar "mutlak bir evrensel parazite (ve fetişizme)" dönüşebileceği kâbusunun',
      'Yıldızların içindeki demir madenlerini çıkararak daha büyük uzay gemileri yapmanın gerekliliğinin',
      'Uzaylıların karanlıkta yaşamayı sevdikleri için yıldızları bilerek söndürdükleri teorisinin'
    ],
    correct: 1,
    explanation: 'Güneşin etrafını metalle kaplayıp enerjisini emme kurgusu; teknolojinin ve aklın durdurulamaz (doyumsuz) hırsının ve kibrinin, sonunda yıldızları bile kafesleyen/sömüren mutlak bir "evrensel parazite (açgözlü bir fetişizme)" dönüşebileceğinin karanlık yansımasıdır.'
  },
  {
    title: 'Önyükleme Paradoksu (Bilginin Piçliği)',
    passage: 'Bir zaman makinesi icat edip geçmişe (1590\'lara) gittiğinizi düşünün. Yanınızda, gelecekte satın aldığınız ve okuduğunuz "Hamlet" kitabının tam (ve kusursuz) bir kopyası var. Geçmişe varıyor ve William Shakespeare adında o genç, henüz bu eseri hiç yazmamış (ilham arayan) adamı buluyorsunuz. Kitabı ona veriyorsunuz. Shakespeare bu mükemmel eseri okuyup hayran kalıyor ve oturup kâğıda (kendi el yazısıyla) kopyalayıp "kendi eseriymiş gibi" yayımlıyor! Yüzyıllar geçiyor ve kitap (orijinal) olarak tarihe geçiyor, siz de gelecekte onu kitapçıdan alıyorsunuz. Peki işin aklı felç eden o dondurucu sorusu nedir? "HAMLET\'İ GERÇEKTE KİM YAZDI?" Shakespeare yazmadı; o sadece sizin verdiğiniz kitabı kopyaladı. Siz yazmadınız; siz onu sadece gelecekteki kitapçıdan satın aldınız. Fizikte "Önyükleme Paradoksu" (Bootstrap Paradox) denen bu kâbus; evrende bazı nesnelerin (veya BİLGİNİN) geçmişten geleceğe bir kökeni (yaratıcısı) OLMADAN, sırf nedensellik döngüsünde kapana kısıldığı için "kendi kendini (hiçlikten)" yarattığını söyler. Bilgi, anasız, babasız ve kökensiz (piç) bir şekilde sadece zamanın sonsuz kapalı ilmeğinde dolanıp duran bir halüsinasyondur.',
    questionStem: 'Önyükleme Paradoksu\'nun (Gelecekten alınan kitabın geçmişte yazarına verilerek basılması kurgusu), zaman ve "Bilgi (Nedensellik)" kavramı üzerinde yarattığı o çıkışsız (felsefi) kâbus nedir?',
    options: [
      'Zaman yolculuğunun makineyle değil sadece zihinsel bir meditasyonla yapılabileceğinin ispatı',
      'Nedensellik zincirinin çökerek, bir bilginin (veya nesnenin) hiçbir zaman (gerçekte) hiç kimse tarafından "ÜRETİLMEDİĞİ/YAZILMADIĞI" (kökensiz ve yaratıcısız/piç olduğu); bilginin sadece zamanın kapalı ve mantıksız (sonsuz) döngüsü içinde "kendi kendini hiçlikten yarattığı" o çözülemez ve aklı felç eden kâbusu',
      'Shakespeare\'in aslında hiç yaşamadığı ve eserlerinin bir meclis tarafından yazıldığı gerçeği',
      'Kitapçıların tarihi eserleri satarken kasten yazar isimlerini sildikleri yönündeki ticari skandal'
    ],
    correct: 1,
    explanation: 'Kitabın kim tarafından yazıldığı sorusunun cevapsız kalması (kimsenin yazmamış olması); bilginin (veya nesnenin) bir kökeni/yaratıcısı olmadan nedensellik zinciri içinde "kendi kendini hiçlikten yarattığı (kökensiz olduğu)" o çözülemez zaman kâbusunu/paradoksunu yaratır.'
  },
  {
    title: 'Leidenfrost Etkisi (Suyun Ateşe Karşı Kalkanı)',
    passage: 'Mutfaktasınız ve ocağın üzerinde nar gibi kızarmış (aşırı derecede ısınmış) bir çelik tava var. Elinize bir damla su alıp o cehennem sıcağındaki tavanın üzerine damlattığınızda, aklınız suyun "saniyeler içinde cızırtıyla buharlaşıp yok olmasını" bekler. Ancak mucizevi bir şey olur: Su damlası buharlaşmaz! Damla, tavanın yüzeyine değmeden hemen önce kendi altında incecik (ve görünmez) bir buhar tabakası (yastığı) oluşturur. Damla o buhar kalkanının üzerine çıkar ve adeta yerçekimine meydan okuyarak tavanın üzerinde sağa sola "havada süzülerek (dans ederek)" saatlerce kaymaya başlar! Fizikte "Leidenfrost Etkisi" denen bu olay, doğanın o eşsiz (ve ironik) savunma mekanizmasıdır: Tehlike (sıcaklık) belirli bir sınırı aştığında ve mutlak bir cehenneme dönüştüğünde; nesne (su), o ateşin içine girmek yerine bizzat kendi buharından anında "yanmaz ve görünmez bir kalkan (bükülmez bir zırh)" kurgulayarak; onu yok etmesi gereken o kızgın fırının (felaketin) üzerinde süzülüp oynayan pürüzsüz bir hayalete dönüşür.',
    questionStem: 'Leidenfrost Etkisi\'nin (Aşırı kızgın tavada suyun anında buharlaşmak yerine kendi buharından kalkan yapıp süzülmesi), doğanın fiziksel dinamikleri hakkında neyin ironik bir temsilidir?',
    options: [
      'Tavaların üretiminde kullanılan metallerin suyu kasten ittiği endüstriyel bir hatanın',
      'Felaketin (tehlikenin/sıcaklığın) aşırı ve mutlak bir düzeye ulaştığı durumlarda; zayıf sanılan (su gibi) bir nesnenin bile anında yok olmak yerine, bizzat o cehennemin gücünü kullanarak kendi altından "görünmez (yanmaz) bir savunma kalkanı (yastık)" kurgulayıp yıkımın (ateşin) üzerinde süzülebildiği (ve dans ettiği) o ironik doğa mekanizmasının',
      'Suyun aslında ateşten çok daha sıcak bir element olduğu bilimsel gerçeğinin',
      'Mutfak kazalarının her zaman insanların dikkatsizliğinden değil, suyun agresifleşmesinden kaynaklandığının'
    ],
    correct: 1,
    explanation: 'Su damlasının tavada buharlaşmak yerine kendi buharından yastık (kalkan) yapıp ateşin üzerinde dans etmesi; aşırı tehlike anında zayıf nesnenin bile o yıkımın gücüyle kendini koruyacak anlık/ironik bir kalkan kurgulayıp felaketin üzerinde süzülebileceğinin (doğa kuralının) temsilidir.'
  },
  {
    title: 'Sıkıcı Milyar Yıl (Evrimin Tatili)',
    passage: 'Evrim teorisini her saniye ilerleyen, sürekli karmaşıklaşan ve durmaksızın yeni türler (canavarlar, dinozorlar, balıklar) üreten o durdurulamaz (hevesli) biyolojik bir fabrika (makine) olarak hayal ederiz. Ancak jeologlar ve biyologlar dünyanın kayalarını kazıdıklarında akıl almaz bir anomaliyle çarpıştılar: "Sıkıcı Milyar Yıl" (The Boring Billion). Günümüzden yaklaşık 1.8 milyar yıl öncesi ile 800 milyon yıl öncesi arasındaki o tam 1.000.000.000 (Bir Milyar) yıllık o devasa, akıl durduran süreç boyunca; Dünya gezegeninde hiçbir şey ama "HİÇBİR ŞEY" olmadı! Evrenin en uzun duraklama dönemiydi. Okyanuslar siyah ve cansızdı, gökyüzü mor ve asitliydi. İklim hiç değişmedi, tek bir yeni organ, tek bir yeni çene veya göz icat edilmedi. Canlılık (tek hücreliler) tam bir milyar yıl boyunca aynı ilkel çamurun içinde milim ilerlemeden (donarak) öylece bekledi! Bu karanlık çağ; insanoğlunun "Evrim sürekli ileri (modernizme ve gelişime) koşar" kibrini yıkarak; doğanın, şartlar uygun olmadığında (veya tıkandığında), koca bir milyar yılı (zamanın o devasa okyanusunu) bile kılını kıpırdatmadan, şekilsiz ve kör bir uyuşukluk (tatil) içinde çöpe atabileceğini kanıtlar.',
    questionStem: '"Sıkıcı Milyar Yıl" (Dünyada 1 milyar yıl boyunca hiçbir yeni canlının veya değişimin olmaması) dönemi, evrimsel tarih (ve gelişme) algısındaki hangi kibri (dogmayı) yerle bir etmektedir?',
    options: [
      'O dönemde güneşin tamamen sönük olduğu ve dünyada zifiri bir karanlığın hüküm sürdüğü gerçeğini',
      'Evrimin "durmaksızın gelişen, sürekli ilerleyen ve anbean karmaşıklaşan (aceleci)" bir mekanizma (düz bir çizgi) olduğu yönündeki o klasik (ve kibirli) algıyı yıkarak; doğanın, şartlar tıkandığında "tam 1 milyar yılı (zamanın devasa okyanusunu)" bile kör, dilsiz ve milim ilerlemeyen bir durgunluk (çöküş) içinde israf edip harcayabildiğini',
      'Tek hücreli canlıların o dönemde uzaya çıkarak diğer gezegenlere kaçtıkları fantezisini',
      'Dinozorların aslında 2 milyar yıl önce de yeryüzünde yaşadıkları yönündeki komplo teorisini'
    ],
    correct: 1,
    explanation: '1 milyar yıl boyunca hiçbir şeyin gelişmeyip (evrimin durup) beklemesi; evrimin "sürekli ileri giden, durmaksızın gelişen" bir fabrika olduğu kibrini yıkarak; doğanın koca bir milyar yılı bile uyuşuk ve dilsiz bir durgunlukta harcayabileceğini (kilitlenebileceğini) kanıtlar.'
  },
  {
    title: 'Tenere Ağacı (Koca Çöldeki Absürt Kaza)',
    passage: 'Afrika\'daki devasa Sahra Çölü\'nün (dünyanın en ıssız ve kurak yerinin) tam ortasında, yüzlerce yıldır tek başına direnen, mucizevi (ve efsanevi) bir akasya ağacı vardı: "L\'Arbre du Ténéré" (Tenere Ağacı). O ağacın etrafındaki tam "400 kilometre (çapında)" boyunca başka tek bir ağaç, tek bir gölge, tek bir ot dahi yoktu! O, koca çöldeki yegâne canlı anıtı (yalnızlığın sembolü) idi; kervanların ve kâşiflerin haritalarında kutsal bir pusula gibi işaretlenmişti. 1973 yılında, Libya\'dan gelen bir kamyon şoförü uçsuz bucaksız (bomkavşak) çölün ortasında ilerliyordu. Ortada çarpılacak, yolu kapatacak hiçbir şey yoktu. Ancak adam, o koca çölde direksiyon hakimiyetini (sarhoşluktan) kaybetti ve gidip 400 kilometrelik arazideki o "YEGÂNE VE TEK AĞACA" çarparak onu kökünden kırdı (ve öldürdü)! Tenere Ağacı\'nın bu trajik ve komik ölümü, istatistiğin (ve evrenin) o en karanlık ironisidir: Hayat (ve insan hatası), koca bir boşlukta (sonsuz ihtimaller denizi) bile, tam on ikiden gidip o en kutsal, en yalnız ve en "imkânsız" olanı bulup ezip geçecek (yıkacak) kadar dilsiz, acımasız ve hedef odaklı bir absürtlük (kara mizah) şaheseridir.',
    questionStem: 'Sarhoş bir şoförün (400 km çapındaki koca ve boş Sahra Çölü\'nde) gidip o "yegâne ve tek" Tenere Ağacı\'na çarparak onu yıkması, hayatın (rastlantıların) doğası hakkında neyin (ironik) metaforudur?',
    options: [
      'Ağaç köklerinin aslında çöl kumları altında kamyon tekerleklerini patlatan çiviler ürettiğinin',
      'Sonsuz bir boşluk ve sıfıra yakın (imkânsız) bir istatistik (şans) söz konusu olsa bile; insan hatasının (ve hayatın o absürt rastlantısallığının), gidip o en eşsiz, en değerli ve en imkânsız olanı bulup onu "tam on ikiden ezip geçecek" kadar dilsiz, kör ve (kara mizah dolu) bir acımasızlığa (ironiye) sahip olduğunun',
      'Otokontrol eksikliğinin sadece sıcak iklimlerde (çöllerde) ortaya çıkan biyolojik bir hastalık olduğunun',
      'Sahra Çölü\'nün rüzgârlarının kamyonları her zaman manyetik olarak tek bir noktaya çektiğinin'
    ],
    correct: 1,
    explanation: 'Sonsuz boşlukta gidip tek ağaca (imkânsıza) çarpılması; hayatın ve insan hatasının (kaosun/rastlantıların), en imkânsız/eşsiz şeyi bulup ezecek kadar kör, dilsiz ve acımasız (kara mizah dolu) bir absürtlük barındırdığını sembolize eder.'
  },
  {
    title: 'Kelebek Etkisi (Lorenz Çekicisi ve Kaos)',
    passage: '1960\'larda meteorolog Edward Lorenz, bilgisayarında hava durumunu simüle eden matematiksel bir denklem çözüyordu. Bir gün aynı denklemi tekrar çalıştırırken, zamandan tasarruf etmek için 0.506127 olan bir başlangıç rakamını, sadece sondaki küsuratları silerek 0.506 olarak girdi. Bu "binde birlik" mikroskobik değişiklik (fark), simülasyonun sonunda sadece ufak bir rüzgâr sapması yaratmadı; günler sonra koca bir fırtınanın (kasırganın) rotasını ve tüm iklimi tamamen değiştirdi! Lorenz bu durumu o efsanevi (ve tüyler ürpertici) sözle açıkladı: "Brezilya\'da kanat çırpan bir kelebek, Teksas\'ta bir kasırgaya neden olabilir." (Kelebek Etkisi / Kaos Teorisi). Bu keşif, evrenin determinist (kusursuz hesaplanabilir) bir saat mekanizması olmadığını kanıtlar. Evren, o kadar hassas, pamuk ipliğine bağlı ve akılalmaz derecede birbirine entegre (kaotik) bir ağdır ki; hayatımızdaki en küçük, en önemsiz (küsurat) sandığımız bir an veya kelime, yıllar sonra kendi kaderimizde bir tayfuna (veya kıyamete) dönüşebilir.',
    questionStem: 'Kaos Teorisi\'ndeki "Kelebek Etkisi" (mikroskobik bir farkın fırtınaya neden olması), evren ve kader algımız hakkında neyi sembolize eder?',
    options: [
      'Kelebeklerin kanatlarındaki statik elektriğin atmosferdeki rüzgârları yönlendirdiği biyolojik gerçeğini',
      'Bilgisayarların karmaşık matematiksel hesaplamalarda her zaman hata (bug) verebileceğini',
      'Evrenin ve hayatın, birbiriyle inanılmaz derecede hassas ve kopmaz bağlarla (ağlarla) örülü olduğunu; bu yüzden önemsiz/küçük sandığımız (binde birlik) en ufak bir başlangıç değişikliğinin bile zamanla devasa ve öngörülemez felaketlere (veya değişimlere) yol açabileceğini',
      'Hava durumunun aylar öncesinden kusursuz bir şekilde tahmin edilebileceğine dair bilimsel umudu'
    ],
    correct: 2,
    explanation: 'Binde birlik sayının silinmesinin koca kasırgaya yol açması (Kelebek Etkisi); evrenin ve hayatın o kadar hassas bir kaotik ağa sahip olduğunu, en ufak bir detayın bile devasa/öngörülemez sonuçlar doğurabileceğini sembolize eder.'
  }
];

export const bilimParagrafSorulari57: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_57.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_57[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim57-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});

