import type { BilimParagrafQuestion } from './types';

const PARAGRAPH_THEMES_29 = [
  {
    title: 'Bartleby ve Pasif Direniş (Melville)',
    passage: 'Herman Melville’in "Kâtip Bartleby" adlı öyküsünde, Wall Street’te bir avukatlık bürosunda çalışan Bartleby adında bir kâtip vardır. Patronu ondan bir evrakı kopyalamasını, bir mektubu postalamasını veya işten ayrılmasını istediğinde, Bartleby bağırmaz, isyan etmez veya kavga etmez. Sadece sakince şu ürpertici cümleyi kurar: "Yapmamayı tercih ederim" (I would prefer not to). O, modern kapitalizmin, hiyerarşinin ve emrin karşısında kılıç çekmez; sadece "eylemsizliği" seçerek sistemin o tıkır tıkır işleyen dişlisini boşa düşürür. Bartleby’nin bu pasif direnişi; şiddetten çok daha sarsıcı, otoriteyi çıldırtan ve insan iradesinin, makineleşmiş bir dünyada "reddetme" hakkını kullanarak gösterdiği en asil ve en trajikomik feryattır.',
    questionStem: 'Kâtip Bartleby\'nin "Yapmamayı tercih ederim" diyerek sergilediği tutum, yazar tarafından neyin felsefi sembolü olarak yorumlanmaktadır?',
    options: [
      'Modern iş hayatında çalışanların sendikal haklarını şiddet yoluyla araması gerektiğinin',
      'Otoriteye, kapitalizme ve hiyerarşiye karşı doğrudan savaşmak yerine; "pasif kalarak (eylemsizlikle) ve reddetme hakkını kullanarak" sistemin işleyişini boşa çıkaran asil ve sarsıcı bir "pasif direniş" eyleminin',
      'Psikolojik depresyonun insanları her türlü sosyal iletişimden kopardığının',
      '19. yüzyıl Amerika\'sında okuma yazma oranının çok düşük olmasının getirdiği sorunların'
    ],
    correct: 1,
    explanation: 'Bartleby\'nin kılıç çekmek yerine sadece "yapmamayı tercih etmesi"; şiddete başvurmadan, itaati reddederek sistemi çıldırtan (boşa düşüren) efsanevi bir pasif direniş sembolüdür.'
  },
  {
    title: 'İmgelerin İhaneti (Magritte)',
    passage: 'Sürrealist ressam René Magritte, bir tuvale son derece gerçekçi, kusursuz bir pipo resmi çizer. Ancak tablonun tam altına şu efsanevi cümleyi yazar: "Ceci n\'est pas une pipe" (Bu bir pipo değildir). Görenler şoka girer ve "Eğer bu pipo değilse nedir?" diye sorarlar. Magritte gülümser: "Eğer o bir pipo olsaydı, içini tütünle doldurup içebilirdiniz; oysa bu sadece bir piponun \'temsili\', yani bir parça boya ve bezdir!" Sanat tarihindeki bu felsefi tokat (İmgelerin İhaneti), insan algısının ne kadar kolay manipüle edildiğini gösterir. İnsanoğlu, "gerçekliğin kendisi" ile "gerçekliğin resmi (temsili/kelimesi)" arasındaki farkı o kadar sık unutur ki; sembollere, bayraklara, kelimelere veya ekranlara tapınarak asıl hakikati (ve nesnenin kendisini) gözden kaçırır.',
    questionStem: 'Magritte\'in "Bu bir pipo değildir" tablosuyla (İmgelerin İhaneti) anlatmak istediği asıl felsefi yanılgı nedir?',
    options: [
      'Tütün kullanımının insan sağlığına verdiği zararları sanatsal bir yolla protesto etmesi',
      'İnsanların, bir nesnenin "gerçekliği (kendisi)" ile onun sadece bir "temsili (resmi/sembolü)" olduğunu birbirine karıştırarak, sembolleri (imgeleri) gerçeğin ta kendisi sanma yanılgısı',
      'Ressamların çizdikleri eserlerin hiçbir zaman doğadaki gerçeğe benzeyemeyeceği tezi',
      'Sürrealizm akımının tamamen anlamsız kelime oyunları üzerine kurulduğu eleştirisi'
    ],
    correct: 1,
    explanation: 'Piponun kendisi ile resminin (temsilinin) birbirine karıştırılmasını eleştiren bu eser; insanın "sembolleri ve imgeleri" asıl gerçeklik sanma yanılgısını (imgelerin ihanetini) anlatır.'
  },
  {
    title: 'Gösteri Toplumu (Guy Debord)',
    passage: 'Fransız düşünür Guy Debord, 1967\'de yayımladığı "Gösteri Toplumu" kitabında, modern insanın yaşadığı en ağır varoluşsal çöküşü tanımlar. Ona göre geçmişte insanlar hayatı "doğrudan" yaşarlardı; acı, aşk ve isyan gerçektir. Bugün ise "doğrudan yaşanan her şey yerini bir temsile (gösteriye) bırakmıştır." Artık bir konserde müziği dinlemek veya bir manzarayı izlemek yerine, onu kameraya çekip sosyal medyada paylaşmayı (başkalarına izletmeyi) tercih ediyoruz. Olayın "kendisi" değil, onun "görüntüsü (imajı)" değerli hale gelmiştir. Gösteri Toplumu, kapitalizmin insanı sadece bir tüketiciye değil; kendi hayatının bile dışına itilip onu ekranlardan izleyen, hakikatini kaybetmiş "pasif ve sığ bir seyirciye" dönüştürdüğü o korkunç illüzyonun (yabancılaşmanın) adıdır.',
    questionStem: 'Guy Debord\'un "Gösteri Toplumu" kavramı, modern insanın hayatı yaşama biçimindeki hangi trajik bozulmayı (yabancılaşmayı) hedefler?',
    options: [
      'Sinema ve tiyatro biletlerinin çok pahalı olması nedeniyle sanattan uzaklaşılmasını',
      'Hayatı "doğrudan ve gerçek" bir şekilde yaşamak yerine; her anın bir imaja, bir fotoğrafa (temsile) dönüştürülerek, insanın bizzat kendi hayatının bile "pasif bir seyircisi" haline gelmesi (gerçeklikten kopuşu)',
      'İnsanların sadece politik ve siyasi şovları takip ederek günlük hayatı unutmasını',
      'Medyanın eski dönem sanat eserlerini yok ederek sadece yeni teknolojileri övmesini'
    ],
    correct: 1,
    explanation: 'Anı yaşamak yerine onu sadece kameraya çekip "gösteri" haline getirmek; insanın kendi hayatını doğrudan yaşamayıp ona dışarıdan bakan pasif bir "seyirciye" (temsile) dönüştüğünü vurgular.'
  },
  {
    title: 'Memento Mori (Ölümü Hatırla)',
    passage: 'Antik Roma\'da bir general büyük bir savaşı kazanıp şehre döndüğünde, onun için devasa ve ihtişamlı bir "Zafer Geçidi" (Triumph) düzenlenirdi. General, dört beyaz atın çektiği altın bir arabada, halkın alkışları arasında adeta bir tanrı gibi süzülürdü. Ancak bu şatafatın ve kibrin zirvesinde, arabanın içinde generalin hemen arkasında duran bir kölenin tek bir görevi vardı. Köle, generalin kulağına sürekli şu Latince cümleyi fısıldardı: "Respice post te! Hominem te esse memento! Memento mori!" (Arkana bak! Sadece bir insan olduğunu hatırla! Öleceğini hatırla!). Bu ritüel, iktidarın ve başarının o kör edici sarhoşluğuna karşı geliştirilmiş muazzam bir panzehirdi. Ne kadar güçlü, zengin veya yenilmez olursan ol; eninde sonunda toprağa ve hiçe karışacak o fani bir et parçası olduğunu (sınırlarını) unutmamanın felsefi çığlığıdır.',
    questionStem: 'Antik Roma\'daki "Memento Mori" ritüeli (kölenin generale ölümü fısıldaması), hangi insan zaafına karşı üretilmiş bir savunmadır?',
    options: [
      'Askerlerin savaşta gösterdikleri korkaklığı ve disiplinsizliği engellemeye',
      'Başarının ve mutlak gücün getirdiği o "tanrısal kibir ve sarhoşluğa" karşı; insana ölümlü, sıradan ve fani bir varlık olduğunu hatırlatarak narsisizmi (kibri) frenlemeye',
      'Kölelerin toplum içindeki siyasi haklarını genişletmeye ve onları özgürleştirmeye',
      'Ölümden sonraki hayatın sadece krallara ve generallere mahsus olduğu inancına'
    ],
    correct: 1,
    explanation: 'Altın arabada tanrı gibi süzülen generale "öleceğini hatırla" denmesi; mutlak başarı ve gücün getirdiği o kör edici "tanrısal kibri (narsisizmi)" frenlemeye yönelik felsefi bir savunmadır.'
  },
  {
    title: 'Epiküros Paradoksu (Kötülük Problemi)',
    passage: 'Antik Yunan filozofu Epiküros, din ve felsefe tarihinin binlerce yıldır çözemediği o en sarsıcı denklemi (Kötülük Problemi) şöyle formüle eder: "Eğer Tanrı dünyadaki kötülüğü önlemek istiyor da gücü yetmiyorsa, o zaman O mutlak güç sahibi (kadir-i mutlak) değildir. Eğer gücü yetiyor ama önlemek istemiyorsa, o zaman O kötü niyetlidir. Eğer hem gücü yetiyor hem de önlemek istiyorsa, o zaman dünyada neden bunca acı, çocuk ölümleri, savaş ve kötülük var? Eğer ne gücü yetiyor ne de istiyorsa, o halde O\'na neden Tanrı diyoruz?" Epiküros\'un bu acımasız ve kusursuz mantık yürütmesi, ilahiyatçıları yüzyıllar boyunca teodise (kötülüğü açıklama) yazmaya mahkûm etmiştir. Bu paradoks, evrendeki vahşet ile "kusursuz/şefkatli yaratıcı" inancı arasındaki o kanayan felsefi yaranın ta kendisidir.',
    questionStem: 'Epiküros Paradoksu\'nun din felsefesinde yarattığı asıl büyük "çatışma ve sorgulama" nedir?',
    options: [
      'İnsanların kendi işledikleri suçları her zaman doğaüstü varlıklara atma eğilimini',
      'Dünyadaki somut vahşet, acı ve "kötülük" gerçeği ile; sonsuz güçlü, şefkatli ve iyi olan bir "Yaratıcı" inancının (Tanrı kavramının) mantıksal olarak aynı anda nasıl var olabileceği çatışmasını',
      'Antik Yunan tanrılarının insanlar gibi kıskanç ve öfkeli varlıklar olduğu inancını',
      'Evrenin yaratılışının aslında bilimsel bir tesadüf olduğunu ve dinlerin geçersizliğini'
    ],
    correct: 1,
    explanation: 'Tanrı iyiyse ve güçlüyse dünyada neden kötülük var sorusu; "kusursuz/şefkatli Yaratıcı" kavramı ile dünyadaki "kötülük ve acı" gerçeğinin mantıksal çelişkisini (çatışmasını) sorgular.'
  },
  {
    title: 'Kategorik Buyruk (Kant\'ın Ahlak Yasası)',
    passage: 'Yalan söylemek bazen faydalı olabilir mi? Filozof Immanuel Kant buna "Asla!" der. O, ahlakı kişinin duygularına, çıkarlarına veya dinlere bağlamaz; sadece "Saf Akıl" üzerine kurduğu "Kategorik Buyruk" (Kesin Buyruk) ile açıklar. Kuralı dondurucu ve kesindir: "Öyle bir eylemde bulun ki; senin bu eyleminin kuralı, aynı zamanda herkes için geçerli evrensel bir yasa olabilsin!" Yani yalan söylemek üzereyseniz, kendinize şunu sorun: "Dünyadaki herkesin yalan söylemesinin evrensel bir yasa olmasını ister miydim?" Cevap hayırsa (çünkü güven çökerdi), o zaman yalan söylemek ahlaksızcadır. Kant\'ın ahlakı, sonuçlara (faydaya) bakmaz. O; esnemeyen, bahane kabul etmeyen ve insanı kendi vicdanının mutlak kanun koyucusu yapan sarsılmaz bir felsefi kılıçtır.',
    questionStem: 'Immanuel Kant\'ın "Kategorik Buyruk" (Kesin Buyruk) kavramına göre, bir eylemin ahlaki olup olmadığı hangi kritere göre belirlenir?',
    options: [
      'Eylemin kişiye veya topluma anlık olarak ne kadar fayda (kâr) sağladığına',
      'O eylemin kuralının, dünyadaki herkes tarafından yapıldığında bir "evrensel yasa" olarak istenip istenemeyeceği (evrensellik) şartına',
      'Toplumun dini kurallarının ve geleneklerinin o eylemi onaylayıp onaylamadığına',
      'Eylemi yapan kişinin geçmişte ne kadar erdemli veya dürüst olduğuna'
    ],
    correct: 1,
    explanation: 'Kant\'a göre ahlak faydaya değil, "benim bu eylemim herkes için evrensel bir yasa olsa bunu ister miydim?" (evrensellik) kuralına/şartına göre belirlenir.'
  },
  {
    title: 'Bootstrap Paradoksu (Bilginin Hiçliği)',
    passage: 'Bilimkurgunun en zihin yakan kavramı "Bootstrap Paradoksu"dur (Ayakkabı Bağı Paradoksu). Diyelim ki siz Shakespeare\'in büyük bir hayranısınız. Bir zaman makinesi icat ettiniz, geçmişe gidip Hamlet kitabının basılmış son halini genç Shakespeare\'e verdiniz. O da bu kitabı alıp kendi adıyla yayımladı. Yüzyıllar sonra siz o kitabı okudunuz ve tekrar geçmişe götürdünüz. Soru şudur: "Hamlet\'i kim yazdı?" Siz yazmadınız (çünkü kitaptan kopyaladınız), Shakespeare de yazmadı (çünkü sizden aldı). Ortada kusursuz bir eser vardır, ancak o eserin "kaynağı (orijinal üreticisi)" uzay-zaman döngüsünün içinde buharlaşıp hiçliğe karışmıştır. Bu paradoks, bilginin, yaratıcılığın ve evrensel nedenselliğin zaman karşısındaki o en çaresiz ve en döngüsel (imkânsız) kâbusudur.',
    questionStem: 'Bootstrap Paradoksu (Zaman Döngüsü), mantık ve varoluş bağlamında neyin imkânsızlığını (veya çöküşünü) vurgular?',
    options: [
      'Eski dönem yazarlarının aslında gelecekten gelen ziyaretçiler olduğunu',
      'Zaman makinesinin sadece gelecekten geçmişe tek yönlü bir bilet olduğunu',
      'Geçmiş ve gelecek arasında kurulan bir zaman döngüsünde; nesnelerin veya bilginin asıl "yaratıcısının (orijinal kaynağının)" tamamen kaybolarak, nedensellik (sebep-sonuç) ilkesinin çökmesini',
      'Edebiyat eserlerinin zamanla değişime uğrayarak orijinal anlamını yitirmesini'
    ],
    correct: 2,
    explanation: 'Kitabı sizden o, ondan siz alıyorsanız kitabın asıl yazarının (orijinal kaynağın) olmaması; nedenselliğin (sebep-sonuç bağının) ve bilginin kökeninin çöküşünü vurgular.'
  },
  {
    title: 'Olbers Paradoksu (Gece Neden Karanlık?)',
    passage: '19. yüzyıl astronomu Heinrich Olbers, gökyüzüne bakıp o çok masum ama sarsıcı soruyu sordu: "Eğer evren sonsuzsa, durağansa ve içinde sonsuz sayıda yıldız varsa; o zaman gece gökyüzüne baktığımızda her noktanın bir yıldızın ışığıyla kaplı olması, yani gecenin gündüz gibi bembeyaz (ışıl ışıl) olması gerekmez miydi?" Gece neden karanlıktı? Bu "Olbers Paradoksu", Newton\'ın o mutlak ve sonsuz evren inancını çökerten ilk kıvılcım oldu. Gecenin karanlık olmasının sebebi, evrenin sonsuz ve durağan olmamasıdır; evrenin bir başlangıcı (Big Bang) vardır ve uzay hızla genişlemektedir. O uzak yıldızların ışığı bize henüz ulaşamamıştır veya evrenin genişlemesi ışığı büküp (kızılakayma) görünmez yapmıştır. Yani karanlık bir gece, aslında evrenin "doğduğunu, büyüdüğünü ve sınırlı olduğunu" fısıldayan en büyük kozmik kanıttır.',
    questionStem: 'Olbers Paradoksu\'nun sorduğu "Gece neden karanlık?" sorusu, bilim dünyasında hangi eski (ve yanlış) evren modelinin çökmesine neden olmuştur?',
    options: [
      'Dünyanın evrenin merkezinde sabit durduğu inancının (Jeosantrizm)',
      'Güneşin her gece okyanusların altında uykuya daldığı yönündeki mitolojik inancın',
      'Evrenin sonsuz, yaşsız ve durağan (hep aynı kalan) bir yapıya sahip olduğu inancının çökarak; evrenin bir başlangıcı (yaşı) olduğu ve genişlediği (Big Bang) gerçeğinin fark edilmesini',
      'Yıldızların geceleri kendi ışıklarını kasten kapattığı yönündeki animistik düşüncenin'
    ],
    correct: 2,
    explanation: 'Eğer evren sonsuz ve durağan olsaydı her yer ışık olurdu mantığı; evrenin durağan olmadığı, bir yaşı olduğu ve genişlediği (eski inancın çöküşü) gerçeğini kanıtlamıştır.'
  },
  {
    title: 'Monty Hall Problemi (Olasılığın Kibri)',
    passage: 'Bir televizyon yarışmasındasınız. Karşınızda 3 kapı var. Birinin arkasında lüks bir spor araba, diğer ikisinde ise birer keçi var. Siz 1. kapıyı seçiyorsunuz. Sunucu (sunucu arabayı nerede olduğunu bilmektedir) 3. kapıyı açıyor ve içinden keçi çıkıyor. Sonra size soruyor: "Kararını değiştirip 2. kapıyı seçmek ister misin?" İnsanların %90\'ı "Fark etmez, ihtimal %50-50" diyerek ilk kararında inat eder. Oysa matematiksel olarak kararınızı değiştirip 2. kapıya geçmek, kazanma ihtimalinizi anında %33\'ten %66\'ya (iki katına) çıkarır! "Monty Hall Problemi" olarak bilinen bu fenomen, insanın o dâhi sandığı sağduyusunun, istatistik ve olasılık (matematik) karşısında ne kadar aciz, kör ve inatçı olduğunun kanıtıdır. Sezgilerimiz, evrenin matematiğini okumakta berbat birer çevirmendir.',
    questionStem: 'Monty Hall Problemi\'ndeki genel insan tepkisi, insan algısı (ve zihni) hakkında neyi ifşa eder?',
    options: [
      'İnsanların televizyon sunucularına her zaman güvensiz yaklaşma eğilimini',
      'Zihnin ilk verdiği karara duygusal bir bağ kurarak onu asla değiştirmeme sadakatini',
      'İnsanın sağduyusunun (sezgilerinin), "istatistik ve matematiksel olasılıklar" karşısında ne kadar aciz (yanılgıya açık) olduğunu ve rasyonel görünen kararların bile aslında inatçı bir körlük taşıdığını',
      'Keçilerin ve hayvanların insanlar üzerinde stres azaltıcı bir etkisi olduğunu'
    ],
    correct: 2,
    explanation: 'Matematiksel olarak değiştirmek kârlıyken insanın "ihtimal %50" deyip inat etmesi; sezgilerimizin (sağduyunun) olasılık matematiği karşısında ne kadar kör, aciz ve hatalı olduğunu ifşa eder.'
  },
  {
    title: 'Trofik Çağlayan (Yellowstone Kurtları)',
    passage: '1995 yılında, Amerika\'daki Yellowstone Milli Parkı ekolojik bir ölüm yaşıyordu; geyikler o kadar çoğalmıştı ki bitki örtüsü tamamen tükenmiş, nehir kenarları erozyona uğramıştı. Bilim insanları parka sadece 14 kurt bıraktı. Olanlar mucize gibiydi: Kurtlar geyiklerin sayısını azalttı. Geyikler vadilerden kaçınca ağaçlar ve ormanlar yeniden büyüdü. Ağaçlar çoğalınca kuşlar, kunduzlar ve ayılar geri döndü. En şok edici olanı ise; ağaç kökleri toprağı sağlamlaştırdığı için, nehirlerin akış yönü ve yatağı (coğrafya) bile değişti! "Trofik Çağlayan" adı verilen bu olay; doğanın görünmez iplerle örülmüş o kusursuz ağını (senfonisini) fısıldar. Ekosistemin tepesindeki tek bir küçük taşın (kurdun) çekilmesi veya eklenmesi, kelebek etkisiyle dağların ve nehirlerin kaderini bile anında yeniden yazar.',
    questionStem: 'Yellowstone Parkı\'na kurtların bırakılması olayı (Trofik Çağlayan), doğa kanunları hakkında neyi kanıtlamaktadır?',
    options: [
      'Kurtların diğer yırtıcı hayvanlardan çok daha zeki ve stratejik avcılar olduğunu',
      'Geyik nüfusunun artmasının orman yangınlarını tetiklediğini',
      'Doğadaki tüm canlıların (ve nehirler gibi coğrafi yapıların) birbirine görünmez ve devasa bir ağ ile (zincirleme) bağlı olduğunu; ekosisteme yapılan ufak bir müdahalenin bile bütün yapıyı kökünden değiştirebileceğini',
      'Hayvanların doğal yaşam alanlarından koparılmasının psikolojilerini bozduğunu'
    ],
    correct: 2,
    explanation: '14 kurdun gelmesiyle geyiklerin, ağaçların, kuşların ve hatta nehirlerin yönünün bile değişmesi; doğanın her parçasının birbirine görünmez/kusursuz bir zincirleme ağ ile bağlı olduğunu kanıtlar.'
  },
  {
    title: 'Lir Kuşu (Doğanın Kayıt Cihazı)',
    passage: 'Avustralya ormanlarında yaşayan "Lir Kuşu" (Lyrebird), dünyanın en yetenekli ses taklitçisidir. Diğer kuşların şarkılarını kusursuzca taklit ederek dişileri etkilemeye çalışır. Ancak son yıllarda çekilen belgesellerde tüyler ürpertici bir gerçek ortaya çıktı. Lir kuşları artık sadece diğer kuşları taklit etmiyordu; onlar, ormanlarını kesmeye gelen "motorlu testerelerin", "ağaç devrilme seslerinin" ve onları fotoğraflayan "kamera deklanşörlerinin" sesini birebir, korkutucu bir netlikle ötüyorlardı! Lir kuşu, insanın doğaya yaptığı o vahşi tecavüzü sadece izlemekle kalmamış; doğanın o saflığını çalan o mekanik (yıkıcı) gürültüyü bizzat kendi sesine katmıştır. Bu, bir kuşun şarkısı değil; doğanın kendi sonunu (ve katilini), insanoğlunun yüzüne karşı yankılayarak attığı o acımasız ve dilsiz çığlığıdır.',
    questionStem: 'Lir Kuşu\'nun motorlu testere ve kamera seslerini taklit etmesi, yazar tarafından neyin trajik (sembolik) bir yansıması olarak görülmektedir?',
    options: [
      'Kuşların teknolojik aletlere karşı doğuştan gelen (evrimsel) bir merakı olduğuna',
      'Doğanın (ve canlıların), kendi yaşam alanlarını yok eden insanın o vahşi ve mekanik yıkımını (kendi katilinin sesini), bizzat kendi sesiyle insana yankılayarak şikâyet etmesine (trajik uyarısına)',
      'Orman işçilerinin kuşlara bilerek kendi aletlerinin seslerini öğrettiğine',
      'Ses taklidinin kuşların beynindeki işitme merkezini kalıcı olarak bozduğuna'
    ],
    correct: 1,
    explanation: 'Kuşun ormanı kesen testere sesini taklit etmesi; doğanın kendi katilinin (insanın) yıkıcı gürültüsünü insana geri yankıladığı o trajik/sessiz bir çığlık olarak sembolize edilmiştir.'
  },
  {
    title: 'Kırık Cam Safsatası (Frédéric Bastiat)',
    passage: '19. yüzyıl ekonomisti Frédéric Bastiat, "Görünen ve Görünmeyen" kavramını meşhur "Kırık Cam Safsatası" ile anlatır. Yaramaz bir çocuk bir fırının camını kırar. Halk toplanır ve çocuğu savunur: "Üzülme fırıncı, camcı para kazanacak, camcı kazandığı o parayla kunduracıdan ayakkabı alacak ve ekonomi canlanacak!" Yani yıkımın (kırılan camın) ekonomiye fayda sağladığına inanırlar (görünen budur). Oysa Bastiat görünmeyeni vurur: Fırıncı o parayı camcıya vermek "zorunda" kalmasaydı, gidip zaten bir kitap veya ceket alacaktı. Camın kırılması yeni bir zenginlik yaratmamış, sadece var olan paranın yerini değiştirmiş ve neticede fırıncıyı "bir cam" eksiğe (yıkıma) düşürmüştür. Bu safsata, savaşların, depremlerin veya yıkımların ekonomiyi canlandırdığına inanan o ahmakça iyimserliğin; yıkımın sadece ve sadece fakirlik getirdiğini unutan o körlüğün suratına inen ekonomik bir tokattır.',
    questionStem: 'Bastiat\'ın "Kırık Cam Safsatası" argümanı, ekonomi ve toplum üzerine hangi yaygın yanılgıyı çürütmektedir?',
    options: [
      'Esnafın her zaman hırsızlığa ve vandalizme karşı korunmasız olduğu inancını',
      'Yıkımın, savaşların veya tahribatın "yeni iş imkânları ve ekonomik canlılık" yarattığı şeklindeki o ahmakça inancı (görüneni); yıkımın aslında net bir kayıp ve fakirlik (görünmeyen bedel) olduğu gerçeğiyle çürütmesini',
      'Cam yapımının o dönemde Avrupa\'daki en maliyetli ve tekelci sektör olduğu fikrini',
      'Çocuk suçluların toplum tarafından her zaman dışlanıp cezalandırıldığı algısını'
    ],
    correct: 1,
    explanation: '"Cam kırıldı camcı kazandı" şeklindeki yüzeysel (yıkımın ekonomiyi canlandırdığı) inancının, aslında fırıncının cebindeki paranın/malın eksilmesiyle net bir kayıp olduğunu belirterek bu yanılgıyı çürütür.'
  },
  {
    title: 'Lima Sendromu (Zalimin Merhameti)',
    passage: 'Stockholm Sendromu\'nda rehine kendisini esir alan kişiye (celladına) âşık olur; ancak bunun çok daha nadir ve felsefi bir tersi vardır: "Lima Sendromu". 1996 yılında Peru\'nun başkenti Lima\'da bir grup terörist, Japon elçiliğini basarak yüzlerce diplomatı rehin aldı. Öldürmeye yemin etmiş, gözü dönmüş katillerin, zaman geçtikçe rehinelerin insanlığına, korkularına ve çaresizliklerine bakarak içlerindeki o buz tutmuş "şefkat ve empati" uyandı. Teröristler kurbanlarıyla sohbet etmeye, onlara acımaya ve birçoğunu öldürmek yerine serbest bırakmaya başladılar. Lima Sendromu, insanın karanlığına dair o kırılgan umudu kanıtlar: Kötülük ve fanatizm ne kadar katı (ve üniformalı) olursa olsun; mağdurun o çaresiz, çıplak insanlığıyla göz göze geldiğinde, zalimin bile kendi ördüğü o kanlı duvarı yıkıp vicdanına (merhametine) yenik düşebileceği ihtimalidir.',
    questionStem: 'Lima Sendromu\'nun (rehin alanın rehinesine acıması) insan psikolojisi hakkında ortaya koyduğu "umut verici (kırılgan)" mesaj nedir?',
    options: [
      'Rehinelerin her zaman teröristlerden daha iyi silahlanmış ve eğitimli olması',
      'Kötülüğün, fanatizmin ve zalimliğin (katı ideolojilerin bile); kurbanın "insanlığıyla (çaresizliğiyle)" doğrudan göz göze geldiğinde eriyebileceği ve en acımasız zalimin bile vicdana (empatiye) yenik düşebileceği ihtimali',
      'Büyük elçiliklerin güvenlik sistemlerinin terör saldırılarına karşı her zaman çöktüğü',
      'Peru hükümetinin o dönemde teröristlere yüklü miktarda gizli fidye ödediği'
    ],
    correct: 1,
    explanation: 'Öldürmeye gelen teröristlerin kurbanlarına bakıp onlara acıması ve bırakması; fanatizmin (kötülüğün) bile kurbanın insanlığıyla yüzleştiğinde vicdana (empatiye) yenik düşebileceği umudunu taşır.'
  },
  {
    title: 'Alice Harikalar Diyarında Sendromu (Boyut İllüzyonu)',
    passage: 'Bazı insanlar migren krizleri veya ateşli hastalıklar geçirdiklerinde beynin görsel algı merkezi felç olur ve dünyaya "Alice Harikalar Diyarında Sendromu" (Todd Sendromu) penceresinden bakarlar. Bu nörolojik kâbusta, hastalar ellerine baktıklarında parmaklarını kilometrelerce uzunlukta, karşılarındaki dolabı ise bir karınca kadar küçük (veya devasa) görürler. Zaman inanılmaz yavaşlar veya hızlanır; boyut, mesafe ve mekân algısı tamamen çöker. Lewis Carroll\'un o meşhur kitabını (ve Alice\'in büyüyüp küçülmesini) yazarken aslında bu nörolojik hastalığı (migreni) yaşadığı iddia edilir. Bu sendrom; bizim "kesin, fiziksel ve mutlak" sandığımız o üç boyutlu dünyanın (nesnelerin büyüklüğünün), aslında gözlerimizin değil; beynimizin karanlık odasında milimetrik olarak kurgulanan kırılgan ve anlık bir Matrix (hesaplama illüzyonu) olduğunu kanıtlar.',
    questionStem: 'Alice Harikalar Diyarında Sendromu (nesneleri dev veya cüce görme), insan beyni ve "fiziksel dünya algısı" hakkında neyi ispatlamaktadır?',
    options: [
      'Masal kitaplarının çocukların psikolojisi üzerinde kalıcı şizofreni yarattığını',
      'İnsanın boy ve kilo oranının beynin büyüklüğüyle doğrudan bağlantılı olduğunu',
      'Kesin ve değişmez sandığımız üç boyutlu fiziksel dünyanın (büyüklük, şekil, zaman algısının); aslında beynimizin anlık olarak kurguladığı, kırılgan ve kolayca çökebilen bir "illüzyon (hesaplama)" olduğunu',
      'Migren hastalarının görsel zekâlarının diğer insanlardan çok daha üstün olduğunu'
    ],
    correct: 2,
    explanation: 'Hastaların dolabı karınca gibi (veya dev) görmesi; mutlak sandığımız dünyanın (boyutların/gerçekliğin) beynimizin kırılgan ve anlık bir hesaplaması (illüzyonu) olduğunu ispatlar.'
  },
  {
    title: 'Tuz Yürüyüşü (Şiddetsiz Savaş)',
    passage: '1930 yılında İngiliz İmparatorluğu, Hindistan\'daki halkın denizden kendi tuzunu üretmesini yasaklamış ve tuza devasa bir vergi (tekel) koymuştu. Mahatma Gandhi, silaha veya orduya sarılmadı. O, yanına sadece 78 kişiyi alarak okyanusa doğru 390 kilometrelik bir yürüyüşe (Tuz Yürüyüşü) başladı. Hedefi basitti: Denize ulaşmak ve oradan bir avuç çamurlu tuzu yasadışı bir şekilde kendi elleriyle üretmek. Yürüyüş boyunca binlerce insan peşine takıldı. Gandhi denize ulaşıp o tuzu avuçladığında İngiliz yasasını kırmış oldu. Bu eylem; o devasa, tüfekli ve kibirli imparatorluğu, tek bir damla kan dökmeden, sadece topraktan alınan "bir avuç tuz" (sivil itaatsizlik) ile dizleri üzerine çökerten felsefi bir tokat, asimetrik bir başkaldırıdır.',
    questionStem: 'Gandhi\'nin "Tuz Yürüyüşü" eylemi, otoriteye karşı direniş bağlamında neyin en epik örneğidir?',
    options: [
      'Deniz ürünlerinin ekonomik olarak İngilizlerden daha değerli olduğunun kanıtı',
      'Baskıcı bir güce (imparatorluğa) karşı kılıç veya silahla değil; haklı, şiddetsiz ve evrensel bir sembol üzerinden (bir avuç tuzla) uygulanan "asimetrik ve ahlaki sivil itaatsizliğin" yıkıcı gücü',
      'Hindistan ikliminin uzun yürüyüşler için çok elverişli bir coğrafya olması',
      'Vergilerin ödenmemesinin devletlerin hazinesini doğrudan çökerttiği gerçeği'
    ],
    correct: 1,
    explanation: 'Silah kullanmadan sadece denizden tuz çıkararak yasayı delmesi; şiddetsiz, ahlaki ve sembolik (sivil) itaatsizliğin silahlı devasa bir imparatorluğu yenebilen gücünü gösterir.'
  },
  {
    title: 'Döngüsel Yıkıntılar (Rüya İçinde Rüya)',
    passage: 'Jorge Luis Borges’in "Döngüsel Yıkıntılar" adlı öyküsünde, gizemli bir rahip ormanın içindeki yıkık bir tapınağa gelir. Tek bir amacı vardır: Rüyasında adım adım kusursuz bir insan (bir oğul) yaratmak ve onu rüyalar aleminden çıkarıp gerçeğe dönüştürmek (hayata katmak). Yıllarca uyur, o çocuğu hayal eder, kemiklerini ve kalbini rüyasında ilmek ilmek dokur ve sonunda çocuğu "gerçek" hayata (ateşin içinden geçirerek) göndermeyi başarır. Ancak öykünün sonunda tapınakta büyük bir yangın çıkar. Alevler rahibi sarmaya başladığında, ateşin onun etini yakmadığını, alevlerin onu okşayıp geçtiğini fark eder. Rahip, o an beynini paramparça eden o korkunç hakikati idrak eder: "Kendisi de gerçek değildir; o da aslında başka birinin rüyasında hayal edilen bir kurgudan (bir illüzyondan) ibarettir." Kibrimizin (ve yarattığımız dünyanın) sınırları, aslında kendi kurgusal hiçliğimizin duvarlarına çarpar.',
    questionStem: 'Borges’in "Döngüsel Yıkıntılar" öyküsü, varoluşumuz ve gerçeklik algımız üzerine nasıl bir felsefi şok (çıkmaz) sunar?',
    options: [
      'Ormanlardaki tapınakların yangınlara karşı dayanıklı taşlardan yapıldığı gerçeğini',
      'İnsanın bir başkasını (veya bir eseri) yarattığını (Tanrılaştığını) sanırken; aslında bizzat kendisinin (ve tüm gerçekliğinin) bir başkasının rüyası, hayali veya kurgusu olduğu yönündeki o yıkıcı ve sonsuz döngüsel hiçliği',
      'Rüyaların gelecekteki yangınları ve felaketleri önceden haber verebilme (kâhinlik) yeteneğini',
      'Dini ritüellerin insanları acıdan tamamen muaf tutan fiziksel bir kalkan oluşturduğunu'
    ],
    correct: 1,
    explanation: 'Rüyasında adam yarattığını sanan rahibin aslında kendisinin de bir başkasının rüyası (illüzyonu) olduğunu anlaması; varoluşun ve yaratıcılık kibrinin sonsuz, kurgusal bir rüya döngüsü olduğu şokunu yaşatır.'
  },
  {
    title: 'Turin Kefeni (İnanç vs. Karbon-14)',
    passage: 'İtalya\'daki Torino katedralinde saklanan ve üzerinde çarmıha gerilmiş bir adamın kanlı yüz silüeti bulunan keten kumaş (Turin Kefeni), yüzyıllar boyunca Hz. İsa\'nın ölümünden sonra sarıldığı o "kutsal emanet" olarak tapınım gördü. O kumaş, dinin ve mutlak inancın somut, gözle görülür en büyük kanıtıydı. Ancak 1988 yılında bilim insanları kefenin ucundan küçücük bir parça kesip ona "Karbon-14" yaş testi uyguladılar. Çıkan sonuç Vatikan\'ın üzerine soğuk su döktü: Kumaş MS. 1. yüzyıla değil; Orta Çağ\'a (1260-1390 arasına) aitti! Yani o kutsal yüz, muhtemelen zeki bir ressamın (sahtekârın) işiydi. Turin Kefeni, insanlığın somut bir "kutsala" (anlama) duyduğu o çaresiz açlığın; laboratuvarın o acımasız, soğuk ve rakamsal gerçeği (matematiği) karşısında nasıl saniyeler içinde sıradan bir beze (illüzyona) dönüştüğünün en çarpıcı savaşıdır.',
    questionStem: 'Turin Kefeni\'nin Karbon-14 testiyle Orta Çağ\'a ait olduğunun kanıtlanması, hangi iki felsefi alanın o ebedi çatışmasını sembolize eder?',
    options: [
      'Ressamlık sanatının o dönemde kumaşlar üzerinde boya tutma konusunda başarısızlığını',
      'İnsanın kutsala ve mucizelere duyduğu o derin (gözü kapalı) inancın; bilimin (laboratuvarın) sunduğu soğuk, rakamsal ve acımasız somut kanıtlarla (akılla) girdiği o yıkıcı çatışmayı',
      'İtalya\'daki kumaş dokuma sektörünün sahte ürünlerle Avrupa\'yı dolandırma çabasını',
      'Dini liderlerin bilim insanlarını her zaman kendi laboratuvarlarında desteklemesini'
    ],
    correct: 1,
    explanation: 'Kutsal sanılan (mucizevi) bezin, Karbon-14 (bilim) ile Orta Çağ\'a ait sahte bir resim çıkması; kör inanç ile bilimin soğuk gerçeği (akıl) arasındaki o ebedi/yıkıcı çatışmayı sembolize eder.'
  },
  {
    title: 'Nag Hammadi Yazmaları (Gizlenen Hakikat)',
    passage: '1945 yılında Mısır\'ın Nag Hammadi köyünde bir çiftçi, mağarada kırmızı kilden bir küp buldu. İçinden çıkan papirüsler, Kilise\'nin yüzyıllar önce "sapkın" ilan edip yaktırdığı, tarihten sildiği "Gnostik İnciller" (Tomas ve Mecdelli Meryem İncilleri) idi. Bu metinler, Roma İmparatorluğu\'nun onayladığı resmi ve itaatkâr (korku dolu) inançtan çok farklıydı; insanın Tanrı\'yı bulmak için kiliselere veya rahiplere ihtiyacı olmadığını, gerçek ilahiliğin (ışığın) bizzat insanın "kendi içinde (aklında ve ruhunda)" olduğunu savunuyordu. Nag Hammadi\'nin kumların altından çıkışı sadece bir arkeolojik buluş değildir; otoritenin (devletin ve kurumların) kendi gücünü korumak uğruna "alternatif hakikatleri" nasıl kasten sansürleyip çöle gömdüğünün ve bilginin eninde sonunda o küplerden taşıp (sistemi sarsarak) geri döneceğinin ispatıdır.',
    questionStem: 'Nag Hammadi Yazmaları\'nın (Gnostik İncillerin) bulunması, tarihi süreçte "otorite ve bilgi" ilişkisi hakkında neyi ifşa eder?',
    options: [
      'Papirüs kâğıdının çöl kumları altında binlerce yıl asla bozulmadan kalabildiğini',
      'Eski dönem rahiplerinin sadece felsefe değil matematik bilimiyle de ilgilendiğini',
      'Kurumların (otoritenin), kendi gücünü ve tekelini korumak uğruna farklı (özgürlükçü) hakikatleri nasıl sansürleyip (sapkın diyerek) tarihten sildiğini; ancak bilginin (hakikatin) er ya da geç gün yüzüne çıkacağını',
      'Mısırlı çiftçilerin antik metinleri okumada akademisyenlerden daha becerikli olduğunu'
    ],
    correct: 2,
    explanation: 'Kilisenin kendi gücünü (tekelini) korumak için özgürlükçü metinleri sapkın ilan edip yok etmesi (sansürü) ve bu metinlerin küpten çıkması; otoritenin bilgiyi sansürleme çabasını ve bilginin yok edilemeyeceğini ifşa eder.'
  },
  {
    title: 'Rodos Heykeli\'nin Sonu (İhtişamın Çöküşü)',
    passage: 'Antik Dünyanın Yedi Harikası\'ndan biri olan Rodos Heykeli (Helios), adanın liman girişinde yükselen, gemilerin bacakları arasından geçtiği devasa, kibirli ve muazzam bir bronz tanrı heykeliydi. Ancak bu ebedi sanılan şaheser, sadece 54 yıl ayakta kalabildi ve büyük bir depremle dizlerinden kırılarak yere çakıldı. İşin asıl trajikomik (ve felsefi) tarafı yüzyıllar sonra yaşandı. Harabeye dönen ve yerde yatan o "tanrının" tonlarca bronz kalıntısı (hurdası), Araplar adayı fethettiğinde Yahudi bir tüccara satıldı. Tüccar, o devasa tanrıyı parçalara ayırdı ve 900 deveye yükleyerek "kilo işi (hurda olarak)" satmak üzere Suriye\'ye götürdü. Rodos Heykeli; medeniyetlerin inşa ettiği o ulaşılamaz, ebedi ve kutsal (kibirli) gücün, doğanın ve zamanın çarkları arasında eninde sonunda sıradan, ucuz bir "hurda metaline (hiçliğe)" dönüşmeye mahkûm olduğunu gösteren, tarihin en acımasız şakasıdır.',
    questionStem: 'Rodos Heykeli\'nin (Güneş Tanrısı\'nın) depremle yıkılıp yüzyıllar sonra bir tüccara "hurda (kilo işi)" olarak satılması neyin metaforudur?',
    options: [
      'Antik dönem heykeltıraşlarının bronz döküm kalitesinin çok düşük olmasının',
      'Ticaret yollarının denizlerden ziyade deve kervanlarıyla karadan yapılmasının gerekliliğinin',
      'İnsanoğlunun inşa ettiği en ebedi, kutsal ve kibirli (ihtişamlı) anıtların bile; zamanın, doğanın ve ticaretin (tüketimin) karşısında sonunda değersiz, sıradan bir maddeye (hiçliğe/hurdaya) indirgenmesinin',
      'Depremlerin deniz kenarındaki liman kentlerini her zaman daha şiddetli vurmasının'
    ],
    correct: 2,
    explanation: 'Harika sayılan ve bacakları arasından gemiler geçen devasa bir tanrı heykelinin (kibrin), sonunda deve sırtında "kilo işi hurda" olarak satılması; ihtişamın zaman/doğa karşısındaki hiçliğini ve geçiciliğini sembolize eder.'
  },
  {
    title: 'Panurge\'un Koyunları (Sürü İntiharı)',
    passage: 'Fransız yazar François Rabelais\'in "Gargantua ve Pantagruel" adlı eserinde, Panurge adında kurnaz bir adam, bir tüccarla kavga eder. Tüccarın elinde devasa bir koyun sürüsü vardır. Panurge intikam almak için tüccarın elinden en baştaki (lider) koyunu satın alır ve onu aniden denize fırlatır. Lider koyunun denize atladığını gören sürünün geri kalanı, hiçbir tehlike olmamasına, kimse onları zorlamamasına rağmen; sırf "öndeki atladı diye" körü körüne tek tek denize atlar ve hepsi boğularak intihar eder! "Panurge\'un Koyunları" deyimi, kitle psikolojisinin en ahmakça ve en ölümcül karanlığıdır: İnsanlar (kalabalıklar), bireysel akıllarını (şüpheyi) devre dışı bırakıp sadece çoğunluğu veya lideri (sürüyü) takip ettiklerinde; o yolun sonu mutlak bir uçurum (veya deniz) olsa bile, o uçurumdan büyük bir uyum ve neşe içinde atlarlar.',
    questionStem: 'Edebiyattaki "Panurge\'un Koyunları" eylemi, insan (kitle) davranışlarına dair hangi ölümcül zaafı eleştirmektedir?',
    options: [
      'Hayvancılıkla uğraşan tüccarların ticari pazarlıklarda her zaman kandırılmaya yatkın olmasını',
      'Kalabalıkların (kitlelerin), bireysel aklı ve mantığı (sorgulamayı) tamamen terk edip; sadece lideri veya "sürüyü" takip ederek (körü körüne itaatle) kendi yıkımlarına (intiharlarına) neşeyle yürüme zaafını',
      'Koyunların denizden ve yüzmekten korkmadıklarını gösteren biyolojik bir tepkiyi',
      'Savaşlarda lider komutanın ölmesinin orduların moralini yükselterek onlara cesaret vermesini'
    ],
    correct: 1,
    explanation: 'Lider koyun atladı diye diğerlerinin düşünmeden peşinden denize (ölüme) atlaması; kalabalıkların (insanların) aklı devreden çıkarıp sürüyü/lideri takip ederek kendi yıkımlarına (körü körüne) yürümesini eleştirir.'
  }
];

export const karisikParagrafSorulari29: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_29.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_29[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-karisik29-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_30 = [
  {
    title: 'Herakleitos ve Aynı Nehir',
    passage: 'Antik Yunan filozofu Herakleitos, evrenin işleyişini o efsanevi cümlesiyle özetler: "Aynı nehirde iki kez yıkanılmaz." Sen nehre ikinci kez adım attığında, o nehir artık o eski nehir değildir; sular akıp gitmiş, yepyeni damlalar gelmiştir. Dahası, nehre adım atan "sen" de dünkü sen değilsindir; hücrelerin değişmiş, zihnin yeni bir anıyla farklılaşmıştır. Herakleitos\'a göre evrendeki tek değişmez (sabit) kural, "değişimin ta kendisidir" (Panta Rhei). Bizler, isimlerin ve nesnelerin kalıcı olduğuna inanarak kendimizi güvende hissetmek isteriz. Oysa o kalıcılık ve durağanlık hissi, insan zihninin evrenin o korkutucu, durmaksızın akan ve her saniye ölüp yeniden doğan devasa kaosuna (akışına) karşı ördüğü zavallı bir dil (ve algı) illüzyonudur.',
    questionStem: 'Herakleitos\'un "Aynı nehirde iki kez yıkanılmaz" felsefesi, insanın evreni algılama biçimiyle ilgili hangi yanılgısını yüzüne çarpar?',
    options: [
      'Suyun ve doğa elementlerinin insan biyolojisi üzerinde sürekli yenileyici bir etki bıraktığı gerçeğini',
      'İnsanoğlunun, evrenin durmaksızın değişen ve akan (kaotik) yapısını reddederek; her şeyin sabit, kalıcı ve değişmez olduğuna dair kendi yarattığı dilsel ve psikolojik illüzyona (kibre) inanma zaafını',
      'Geçmişte yaşanan hataların asla telafi edilemeyeceği yönündeki kötümser tarih anlayışını',
      'Nehirlerin ve denizlerin okyanuslara karışana kadar her zaman aynı yatağı izlediği yanılgısını'
    ],
    correct: 1,
    explanation: 'Nehrin ve insanın saniye saniye değişmesi; evrende "kalıcılık ve sabitlik" algısının tamamen beynimizin uydurduğu, değişime/akışa direnen bir illüzyon olduğunu gösterir.'
  },
  {
    title: 'Thomas Nagel ve Yarasa Olmak',
    passage: 'Felsefeci Thomas Nagel, bilim dünyasını "Yarasa olmak nasıl bir şeydir?" sorusuyla kilitler. Bir yarasanın anatomisini, sonarı (ekolokasyonu) nasıl kullandığını, nöronlarının karanlıkta böcekleri nasıl tespit ettiğini bilimsel olarak %100, eksiksiz bir şekilde öğrenebiliriz. Ancak tüm bu fiziksel (nesnel) bilgileri ezberlesek bile, bir yarasanın o ekolokasyonu kendi zihninde "nasıl hissettiğini (deneyimlediğini)" asla bilemeyiz. Nagel\'in bu sorusu, bilimin o soğuk ve ölçülebilir kibrini paramparça eder: Fizik ve biyoloji bize evrenin mekanik haritasını verebilir; ancak "Bilinç (Öznel Deneyim/Qualia)", dışarıdan objektif bir formülle asla ölçülemeyecek, kopyalanamayacak ve sadece o bedenin içine hapsolmuş kişinin (veya canlının) tadabileceği aşılmaz bir duvardır.',
    questionStem: 'Thomas Nagel\'in "Yarasa olmak nasıl bir şeydir?" argümanı, bilimin (ve nesnelliğin) hangi konudaki kesin yetersizliğini ispatlar?',
    options: [
      'Hayvanların biyolojik anatomilerinin laboratuvar ortamında yeterince incelenemeyeceğini',
      'Bilimin sadece gözle görülebilen makro düzeydeki olayları ölçebildiğini',
      'Nesnel (fiziksel/bilimsel) bilginin ne kadar kusursuz olursa olsun; bir canlının kendi iç dünyasındaki "öznel bilincini ve hissetme deneyimini (Qualia)" dışarıdan açıklamaya (veya yaşamaya) asla yetmeyeceğini',
      'Yarasaların evrimsel sürecinin diğer tüm memelilerden daha gizemli ve çözülemez olduğunu'
    ],
    correct: 2,
    explanation: 'Yarasanın biyolojisini/fiziğini %100 bilsek bile onun o sesi "nasıl hissettiğini" asla bilemeyecek olmamız; nesnel bilimin, "öznel deneyimi ve bilinci" (Qualia) açıklamada yetersiz olduğunu kanıtlar.'
  },
  {
    title: 'Hiroşima\'nın Nükleer Gölgeleri',
    passage: '6 Ağustos 1945 sabahı, Hiroşima\'ya atılan atom bombası patladığında merkez üssündeki sıcaklık saniyenin binde biri içinde Güneş\'in yüzeyinden bile daha yakıcı bir dereceye ulaştı. Bankta oturan bir adam, ip atlayan bir çocuk veya merdivenleri çıkan bir kadın... O korkunç termal radyasyon dalgası onları vurduğu an, bedenleri (kemikleri dahil) anında buharlaşıp gaza dönüştü. Ancak arkalarındaki taş duvarlar, onların bedenlerinin ışığı engellemesi yüzünden radyasyondan korundu. Bombadan saniyeler sonra geriye ne bir insan ne de bir kül kalmıştı; sadece taşlara kalıcı olarak kazınmış o kapkara, sessiz insan "gölgeleri" (Nuclear Shadows) kalmıştı. Bu gölgeler, insanoğlunun yarattığı bilimsel dehşetin; yaşamı saniyeler içinde silip süpürürken, ölümün o şiddetli ve korkunç anını (bir fotoğraf karesi gibi) taşa kazıyarak ebedileştirdiği tarihin en kanlı anıtlarıdır.',
    questionStem: 'Hiroşima\'daki "Nükleer Gölgeler" olgusu, yazar tarafından neyin trajik ve sanatsal bir metaforu olarak sunulmaktadır?',
    options: [
      'Taş ve beton yapıların nükleer silahlara karşı insan bedeninden çok daha dayanıklı olduğunun',
      'İnsanoğlunun bilimsel kibrinin (ve vahşetinin); yaşamı anında yok ederken, o ölüm anının dehşetini taşa silinmez bir fotoğraf (karanlık bir anıt) gibi kazıyarak ebedileştirmesinin',
      'Nükleer radyasyonun insan psikolojisinde bıraktığı kalıcı ve genetik korkuların',
      'Savaşların aslında sadece askeri binaları değil sivil alanları da hedef aldığının'
    ],
    correct: 1,
    explanation: 'Bedeni anında buharlaştıran o vahşetin, insanın son duruşunu taşa bir gölge (fotoğraf) gibi kazıyarak ölüm anını ebedileştirmesi, bilimsel dehşetin karanlık bir anıtı olarak sunulmuştur.'
  },
  {
    title: 'Caligula ve Denize Savaş Açmak',
    passage: 'Roma İmparatoru Caligula, aklını yitirmiş mutlak bir diktatördü. Bir gün ordusunu Manş Denizi kıyısına dizdi. Askerler büyük bir İngiltere işgali beklerken, Caligula aniden kılıcını çekti ve Deniz Tanrısı Poseidon\'a savaş ilan etti! Askerlerine mızraklarıyla denizi (dalgaları) bıçaklamalarını emretti. Ardından, savaş ganimeti olarak askerlerin miğferlerini denizkabuklarıyla doldurtup ganimet olarak Roma\'ya geri döndü. Bu olay sadece bir delilik komedisi değildir; Caligula\'nın o denizi bıçaklayan askerleri, iktidar ve mutlak güç zehirlenmesinin (narsisizmin) insanı nasıl gerçeklikten tamamen kopardığının; etrafındaki korkak (itaatkâr) kalabalıklar sayesinde bir liderin en absürt, en mantıksız kâbusunu bile kanuna (devlet politikasına) dönüştürebileceğinin en acı kanıtıdır.',
    questionStem: 'Caligula\'nın "Deniz Tanrısı\'na savaş açıp askerlerine dalgaları bıçaklatması" olayı, mutlak otorite (iktidar) hakkında neyi ifşa eder?',
    options: [
      'Roma ordusunun disiplin eksikliği yüzünden deniz aşırı seferlerde hep başarısız olduğunu',
      'Eski Roma dininde deniz tanrılarının imparatorlardan daha güçlü kabul edildiğini',
      'Mutlak gücün ve kibrin lideri gerçeklikten kopardığını; etrafındaki körü körüne itaat eden kitleler (askerler) oldukça, en akıl dışı ve absürt hezeyanların bile resmi bir eyleme (kanuna) dönüşebileceğini',
      'İmparatorların denizcilik biliminden hiç anlamadıkları için doğa olaylarından çok korktuklarını'
    ],
    correct: 2,
    explanation: 'Dalgaları mızraklayan bir ordu, diktatörün deliliğinin (hezeyanının) korku ve itaat sayesinde nasıl devlet gerçeğine/kanununa dönüşebileceğini, mutlak gücün insanı gerçeklikten koparışını ifşa eder.'
  },
  {
    title: 'Planlı Eskitme (The Phoebus Cartel)',
    passage: 'Günümüzde telefonlarımızın veya beyaz eşyalarımızın birkaç yıl içinde "kendi kendine" yavaşlaması veya bozulması bir mühendislik hatası değildir; bu kusursuz ve kasıtlı bir tasarımdır. Bu karanlık strateji, 1924 yılında dünyanın en büyük ampul üreticilerinin kurduğu "Phoebus Karteli" ile başladı. O dönemde ampuller 2500 saat yanabiliyordu. Kartel gizlice toplandı ve kârlarını artırmak için ampullerin ömrünü kasten 1000 saatle sınırlayan (içindeki teli daha çabuk kopacak şekilde tasarlayan) bir anlaşma yaptı. "Planlı Eskitme" (Planned Obsolescence) denen bu icat; kapitalizmin sadece bir şeyler üretmekle yetinmeyip, tüketimin sonsuza dek sürmesi için bizzat ürettiği malların içine kasıtlı bir "ölüm saati (kırılganlık)" kodlayarak insanlığı durmaksızın satın almaya mecbur bırakan o açgözlü virüsüdür.',
    questionStem: 'Phoebus Karteli\'nin ampul ömrünü kasten düşürmesi ("Planlı Eskitme"), modern kapitalizm hakkında nasıl bir ahlaki çöküşü kanıtlar?',
    options: [
      'Üretilen teknolojik aletlerin ham maddesinin zamanla dünyada tükenmeye başladığını',
      'Şirketlerin, sürekli tüketimi ve kârı garanti altına almak uğruna; ürettikleri ürünlerin içine kasten "erken ölüm (bozulma)" kodlayarak insanları bitmek bilmez bir satın alma köleliğine mahkûm ettiğini',
      'Elektrik akımındaki dalgalanmaların ürünlerin ömrünü istemsizce kısalttığını',
      'Eski teknolojilerin yeni teknolojilere göre çok daha tehlikeli ve yangın çıkarıcı olduğunu'
    ],
    correct: 1,
    explanation: 'Ampullerin kasten çabuk patlaması için tasarlanması; şirketlerin kâr/tüketim çarkını döndürmek için eşyalara bilerek "ölüm saati" kodlayıp halkı köleleştirdiğini (ahlaki çöküşü) kanıtlar.'
  },
  {
    title: 'Diktatörün İkilemi (Korkunun Körlüğü)',
    passage: 'Bir diktatör her şeye gücü yeten, devletin tüm kameralarına ve istihbaratına sahip olan her şeyi gören bir "Tanrı" gibi görünür. Oysa Siyaset Bilimindeki "Diktatörün İkilemi" (Dictator\'s Dilemma) kavramı bunun tam tersini söyler. Bir lider halkını ve çevresini ne kadar çok korkutur, ne kadar çok cezalandırırsa; etrafındaki herkes hayatta kalmak için ona sadece "duymak istediği (güzel)" yalanları söylemeye başlar. Ekonomi çökse de danışmanlar "Her şey harika efendim" derler. İtaat ve korkunun zirve yaptığı an, diktatörün gerçeklikten tamamen koptuğu andır. Diktatör her şeye gücü yeten bir tanrı değil; kendi yarattığı korku duvarlarının arasına hapsolmuş, herkesin ona yalan söylediği o zifiri karanlık yankı odasında (illüzyonda) yaşayan, dünyadaki en kör, en sağır ve gerçeğe en uzak kurbandır.',
    questionStem: 'Diktatörün İkilemi kavramına göre, mutlak baskı ve korku rejimleri lider üzerinde nasıl bir "paradoksal (ters tepecek)" etki yaratır?',
    options: [
      'Diktatörün zamanla halkının acılarına empati duyarak demokratik reformlar yapmaya zorlanması',
      'Yarattığı aşırı korku ve cezalandırma ortamının, etrafındaki herkesi ona yalan söylemeye itmesiyle; liderin kendi gücü içinde "gerçeklikten tamamen koparak" en kör ve habersiz insana dönüşmesi',
      'Liderin etrafındaki danışmanların zekâ seviyelerinin zamanla gerilemesi',
      'Halkın korkuyu yenip aniden büyük silahlı devrimler başlatması'
    ],
    correct: 1,
    explanation: 'Aşırı korku yüzünden kimsenin gerçeği söylememesi (sadece dalkavukluk yapması); mutlak gücün lideri kör edip onu gerçeklikten tamamen kopardığı paradoksunu yaratır.'
  },
  {
    title: 'Başkaldıran İnsan (Albert Camus)',
    passage: 'Albert Camus, "Başkaldıran İnsan" adlı felsefi eserinde evrenin o soğuk anlamsızlığına (absürtlüğüne) karşı verilecek tek onurlu cevabı arar. Evrenin hiçbir amacı yoktur, ölüm hepimizi beklemektedir ve çekilen acıların kozmik bir karşılığı yoktur. Peki insan bu saçmalık karşısında intihar mı etmelidir? Camus şiddetle reddeder. İnsanın asıl görevi (varoluş sebebi), hayatın bu anlamsızlığına inat, zalimliğe ve ölüme karşı "başkaldırmak (isyan etmek)"tir. Ancak bu isyan etrafı yakıp yıkmak (terör) değildir; bu isyan, bir kölenin "Hayır!" dediği an başlayan, diğer insanlarla dayanışmayı doğuran, o ortak acıya karşı insan onurunu şaha kaldıran felsefi bir duruştur. Camus o efsanevi cümleyi Descartes\'ı düzelterek kurar: "Düşünüyorum öyleyse varım" değil; "Başkaldırıyorum (İsyan ediyorum), öyleyse VARIZ!"',
    questionStem: 'Albert Camus\'nün "Başkaldıran İnsan" felsefesine göre, evrenin anlamsızlığı (absürtlüğü) karşısında bireyin sergilemesi gereken en yüce erdem nedir?',
    options: [
      'Gerçekliğin anlamsızlığını kabul edip, kendini dinden ve felsefeden tamamen soyutlayarak (pasifleşerek) sadece anlık hazların peşinden koşmak',
      'Ölümün ve acıların kaçınılmaz olduğu bu anlamsız evrene teslim olmak (veya intihar etmek) yerine; dayanışma, adalet ve "insan onuru" uğruna bu saçmalığa (şiddetsizce) başkaldırarak varoluşa anlam katmak',
      'Devletleri ve yasaları tamamen yıkarak kuralsız, anarşist bir kaos ortamı yaratmak',
      'Evrenin anlamsızlığını unutmak için bilim ve teknolojiye körü körüne tapınmak'
    ],
    correct: 1,
    explanation: 'Hayat absürt (anlamsız) olsa da pes etmek veya yıkmak yerine; insan onuru ve dayanışma ("biz") adına bu saçmalığa başkaldırmanın en yüce felsefi eylem/anlam olduğu vurgulanmıştır.'
  },
  {
    title: 'Kozmik Takvim (Carl Sagan\'ın Kibri Yıkışı)',
    passage: 'İnsanoğlu binlerce yıl boyunca dünyanın ve evrenin kendi etrafında, sadece kendi tarihi için yaratıldığına inandı. Astrofizikçi Carl Sagan, bu devasa kibri tek bir görselleştirmeyle ("Kozmik Takvim" ile) un ufak etti. Evrenin 13.8 milyar yıllık yaşını, 1 yıllık (12 aylık) tek bir takvime sığdırdı. Bu takvime göre Büyük Patlama 1 Ocak saniyesinde oldu. Dünyamız ancak 14 Eylül\'de oluşabildi. İlk bitkiler 28 Aralık\'ta karaya çıktı. Peki ya tüm o şanlı insanlık tarihi? Bütün imparatorluklar, peygamberler, savaşlar, piramitler ve icatlarımız... İnsanlık sadece 31 Aralık gecesi, saat 23:59:52\'de, yani kozmik yılın bitmesine sadece "son 8 saniye" kala sahneye çıktı! Sagan\'ın bu takvimi; insanın o evrenin sahibi olduğu kibrinin, milyarlarca yıllık kâinat tiyatrosunun son saniyesinde sahneye fırlamış zavallı ve şanslı bir figüranın attığı çığlıktan farksız olduğunu ispatlar.',
    questionStem: 'Carl Sagan\'ın "Kozmik Takvim" fikri, insanın evrendeki yeri hakkında nasıl bir felsefi (ve istatistiksel) yüzleşme sunar?',
    options: [
      'Dünyanın oluşumunun evrenin diğer tüm gezegenlerinden çok daha hızlı ve mucizevi gerçekleştiği',
      'İnsanoğlunun evrenin en eski ve en bilge türü olduğu için tüm galaksilere hükmetme hakkına sahip olduğu',
      'Tüm insanlık tarihinin (bütün savaşlarımızın ve kibrimizin), evrenin devasa zaman çizelgesinde (sadece son 8 saniyeye sığan) ne kadar anlık, kısa ve istatistiksel olarak sıradan/küçük bir yer tuttuğu',
      'Gelecek yıllarda insanların ömrünün takvimsel olarak uzayıp evrene uyum sağlayacağı'
    ],
    correct: 2,
    explanation: '13.8 milyar yılı bir yıla sığdırdığımızda insanlığın sadece son 8 saniyede var olması; bizim o devasa evren/zaman karşısındaki kibrimizin ne kadar anlık, küçük ve sıradan bir figüranlık olduğunu yüzümüze çarpar.'
  },
  {
    title: 'Prosopagnozi (Yüz Körlüğü)',
    passage: 'Her sabah aynaya baktığınızda karşınızdaki yüzün "size" ait olduğunu anlarsınız. Ancak "Prosopagnozi" (Yüz Körlüğü) adı verilen nörolojik bir hasara uğrayanlar için bu bir kâbustur. Bu hastaların gözleri mükemmel çalışır; karşılarındaki kişinin saçını, gözlüğünü, burnunun şeklini en ince detayına kadar görürler. Ancak beyinleri, o detayları alıp birleştirerek o kişinin "KİM" (kimlik) olduğunu çözen o sihirli köprüyü kuramaz. Kendi annelerine bakarlar, bir kadının yüzünü görürler ama onun "anneleri" olduğunu idrak edemezler. Hatta aynaya baktıklarında kendi yüzlerini bile tanıyamazlar! Prosopagnozi bize şunu fısıldar: Gerçeklik (ve kimlik), dünyadaki nesnelerin fiziksel parçalarından ibaret değildir; bir şeyi tanımak, beynimizin o cansız yapboz parçalarını birleştirerek onlara "bütünsel bir ruh (kimlik)" atadığı o görünmez (ve kırılgan) illüzyonun ta kendisidir.',
    questionStem: 'Prosopagnozi (Yüz Körlüğü) hastalığı, "görme ve tanıma (algı)" arasındaki ilişkiye dair neyi kanıtlar?',
    options: [
      'Göz retinasındaki fiziksel hasarların insan yüzlerini algılamayı tamamen engellediğini',
      'Fiziksel detayları (parçaları) kusursuzca "görmenin", o kişinin "kim olduğunu (bütünsel kimliğini)" tanımak için tek başına yetmediğini; tanımanın beyindeki ayrı bir bütünleştirme/kurgu mekanizması olduğunu',
      'Yüz körlüğü yaşayan insanların sadece hayvanları ve nesneleri tanımakta zorlandığını',
      'Beynin yaşlandıkça sadece eski anıları hatırlayıp yeni yüzleri hafızaya kaydedemediğini'
    ],
    correct: 1,
    explanation: 'Burnu/gözü görmesine rağmen kişinin annesi olduğunu (kimliğini) tanımaması; "görmek" ile "tanımak (bütünsel kimlik/ruh atamak)" işlevlerinin beynimizde tamamen farklı mekanizmalar olduğunu kanıtlar.'
  },
  {
    title: 'Lut\'un Karısı (Geriye Bakmanın Cezası)',
    passage: 'Tevrat ve İslami metinlerde geçen Sodom ve Gomorra efsanesinde, Tanrı yozlaşmış bu iki şehri ateş ve kükürtle yok etmeye karar verir. Melekler, iyi bir insan olan Lut\'a ailesini alıp şehirden kaçmasını söyler ve tek bir kesin kural koyarlar: "Şehri terk ederken asla arkana dönüp bakmayacaksın!" Ancak gökten ateşler yağarken ve şehir çığlık çığlığa yok olurken, Lut\'un karısı o dehşet verici merakına (ve geçmişe duyduğu bağlılığa) yenik düşer; arkasına dönüp yanan şehre bakar ve o an kaskatı bir "Tuz Sütununa" dönüşür. Bu mitolojik ölüm, insanın geçmişle olan o zehirli bağına yazılmış en sarsıcı alegoridir. Yıkılmış, bitmiş ve sizi zehirleyen o karanlık geçmişe (yanan şehre) özlemle veya merakla dönüp bakmak sizi kurtarmaz; sizi o anın (geçmişin) içine hapsederek, geleceğe yürüme yeteneğinizi elinizden alır ve sizi ruhsuz, cansız bir taş (tuz) sütununa çevirip dondurur.',
    questionStem: 'Lut\'un karısının arkasına bakarak "Tuz Sütununa" dönüşmesi efsanesi, psikolojik olarak neyin metaforudur?',
    options: [
      'Kadınların doğal afetlere karşı erkeklerden çok daha zayıf ve hassas refleksler geliştirdiğinin',
      'Zehirli, yıkılmış ve geride bırakılması gereken bir "geçmişe (travmalara)" inatla dönüp bakmanın (kopamamanın); insanı o anın içine hapsederek, geleceğe doğru yürüme/yaşama yetisini dondurup yok ettiğinin (ruhsal felcinin)',
      'Tanrıların her zaman sadece kurallara harfiyen uyan insanları maddi zenginliklerle ödüllendirdiğinin',
      'Tuz madenlerinin antik çağlarda yanardağ patlamalarıyla oluştuğu gerçeğinin'
    ],
    correct: 1,
    explanation: 'Yanan şehre (geçmişe) bakıp tuza dönüşmek (donmak); bitmiş ve toksik bir geçmişten kopamamanın insanı o ana hapsedip geleceğe ilerleme yetisini (yaşamı) dondurması (felç etmesi) metaforudur.'
  },
  {
    title: 'Post-mortem Fotoğrafçılık (Ölümü Dondurmak)',
    passage: '19. yüzyıl Viktorya dönemi İngiltere\'sinde fotoğraf makinesi henüz yeni ve çok pahalı bir icattı. Aileler, fotoğraf stüdyosuna gitme fırsatını genellikle sadece bir çocukları (veya yakınları) öldüğünde bulabiliyordu! "Post-mortem (Ölüm Sonrası)" adı verilen bu tüyler ürpertici gelenekte; ölen çocuğa en güzel kıyafetleri giydiriliyor, gözleri açık görünsün diye göz kapakları boyanıyor veya aparatlarla destekleniyor ve canlıymış gibi oyuncaklarıyla (veya ailesiyle) poz verdirilerek fotoğrafı çekiliyordu. Dışarıdan hastalıklı ve korkunç görünen bu eylem, aslında insanlık tarihinin ölüm karşısındaki en saf, en çaresiz ve hüzünlü isyanıdır. Ölümün o soğuk, geri döndürülemez ve çürütücü gerçeğini kabullenemeyen insan zihni; o bedeni gümüş nitratlı bir kâğıdın üzerinde sonsuza dek "canlı, güzel ve donmuş" bir şekilde tutarak (ölümü hackleyerek) zamanı durdurmaya çalışmıştır.',
    questionStem: 'Viktorya dönemindeki Post-mortem (Ölü) Fotoğrafçılığı geleneği, ölüm ve insan psikolojisi bağlamında neyi ifade eder?',
    options: [
      'O dönemdeki fotoğraf sanatçılarının anatomi ve tıp bilimini geliştirmek için gizli çalışmalar yaptığını',
      'İnsanların, ölümün o geri döndürülemez (çürütücü) hakikatini kabullenemeyerek; sevdikleri kişiyi bir kâğıt üzerinde "sanki yaşıyormuş gibi" ebediyen dondurup (zamanı durdurup) o acıdan kaçma çaresizliğini',
      'İngiliz kraliyet ailesinin sadece soylu ölülerin fotoğraflanmasına izin verdiği sınıf ayrımcılığını',
      'Hastalıklı bedenlerin ölümden sonra çok daha estetik ve güzel bir görüntü sergilediğini'
    ],
    correct: 1,
    explanation: 'Ölüyü canlı gibi boyayıp poz verdirmek; ölümün o çürütücü ve kesin sonunu kabullenemeyen çaresiz insanın, zamanı kâğıt üzerinde dondurarak (ölümü inkâr ederek) sevdiklerini ebedileştirme arzusu/çaresizliğidir.'
  },
  {
    title: 'Duchamp\'ın Çeşmesi (Kavramsal İsyan)',
    passage: '1917 yılında New York\'taki bir sanat sergisine R. Mutt imzasıyla bir eser gönderildi. Bu eser bir yağlıboya tablo veya mermer bir heykel değildi; sıhhi tesisatçıdan alınmış, ters çevrilmiş sıradan, porselen bir "pisuvar"dı ve adı "Çeşme" (Fountain) idi! Sanat komitesi şoka girdi ve bu "iğrenç" şeyi sergilemeyi reddetti. Oysa eseri gönderen efsanevi sanatçı Marcel Duchamp\'ın amacı tam da buydu. O, yüzyıllardır süregelen "Sanat, ustanın el işçiliğinden ve güzellikten ibarettir" yalanını paramparça etmişti. Duchamp\'a göre bir nesneyi "sanat" yapan şey onun fiziksel üretimi değil, sanatçının onu kendi bağlamından (tuvaletten) koparıp galeriye koyarak ona yüklediği "Kavram" ve düşünceydi. O pisuvar; aklın, estetiğe (ve el emeğine) karşı kazandığı kanlı bir zafer, modern sanatın (kavramsal sanatın) fitilini ateşleyen o kibirli bombadır.',
    questionStem: 'Marcel Duchamp\'ın "Çeşme (Pisuvar)" eseri, geleneksel "sanat" algısında nasıl bir köklü devrim (yıkım) yaratmıştır?',
    options: [
      'Sanat eserlerinin sadece seramik ve porselen gibi endüstriyel malzemelerden yapılması gerektiğini kanıtlayarak',
      'Sanatın sadece bir "el işçiliği ve estetik (güzellik)" meselesi olduğu inancını yıkarak; asıl sanatın nesnenin kendisi değil, sanatçının o nesneye yüklediği (ve bağlamını değiştirdiği) "kavram/düşünce" olduğunu ispatlayarak',
      'Müzelerin sadece zenginlere hizmet eden kapalı (elit) kurumlar olduğunu eleştirerek',
      'Günlük ev eşyalarının tabloların içine çizilmesinin estetiği bozduğunu göstererek'
    ],
    correct: 1,
    explanation: 'Bir pisuvarı sergiye koyarak; sanatın güzellik/el işçiliği değil, sanatçının fikri (kavramı) ve seçimi olduğunu (Kavramsal Sanat) kanıtlayıp klasik sanat algısını yerle bir etmiştir.'
  },
  {
    title: 'Machu Picchu (Bulutların Üzerindeki Sessizlik)',
    passage: 'And Dağları\'nın 2400 metre yüksekliğinde, ulaşılması imkânsız gibi görünen sarp bir zirveye İnkalar o kusursuz taş şehri (Machu Picchu) inşa ettiler. Tonlarca ağırlıktaki taşları, aralarında kâğıt bile girmeyecek kadar mükemmel (harçsız) bir mühendislikle dizdiler. Ancak bu medeniyet zirvesi, 16. yüzyılda İspanyollar gelmeden kısa süre önce halkı tarafından aniden ve sessizce terk edildi. Şehir o kadar yüksekte ve bulutların arasındaydı ki; İspanyollar onu asla bulamadı, yıkamadı. Machu Picchu yüzyıllar boyunca orman tarafından yutuldu ve 1911\'de bulunana kadar gökyüzünde bir hayalet gibi unutuldu. O kusursuz taş duvarlar bize şunu fısıldar: İnsanoğlu dağların zirvesine, yeryüzünün en aşılamaz kalesine (kibrine) ulaşsa bile; tarihin ve doğanın o devasa çarkı karşısında, en büyük imparatorluklar bile sonunda sarmaşıklara ve dilsiz bir sessizliğe teslim olmaya (terk edilmeye) mahkûmdur.',
    questionStem: 'Machu Picchu\'nun İspanyollar tarafından bulunamaması ama yine de orman tarafından yutulup terk edilmesi, yazar tarafından neyin trajik metaforu olarak kullanılır?',
    options: [
      'İspanyolların Güney Amerika dağlarında savaşacak kadar cesur olmamasının',
      'Kusursuz mühendislik harikalarının depremlere karşı her zaman daha kırılgan olduğunun',
      'İnsanoğlu dünyanın en ulaşılmaz ve kusursuz (kibirli) kalesini inşa etse (düşmandan saklasa) bile; zamanın ve doğanın o sessiz, yutucu gücü karşısında her medeniyetin eninde sonunda terk edilip hiçliğe (sessizliğe) karışacağı gerçeğinin',
      'Yüksek rakımlarda tarım yapmanın imkânsızlaşmasıyla açlığın kaçınılmaz olduğunun'
    ],
    correct: 2,
    explanation: 'Düşmanın bulamadığı o kusursuz ve ulaşılamaz kalenin bile zamanla ormana (doğaya) yenik düşüp ıssızlaşması; insan başarısının zaman/doğa karşısındaki geçiciliğinin ve hiçliğe mahkûmiyetinin metaforudur.'
  },
  {
    title: 'Yabancı (Meursault ve Toplumun Riyakârlığı)',
    passage: 'Albert Camus\'nün "Yabancı" romanının başkarakteri Meursault, annesinin cenazesinde ağlamaz, ertesi gün denize girip komedi filmi izler ve daha sonra kumsalda (sadece güneş gözünü aldı diye) bir Arap\'ı öldürür. Mahkemeye çıkarıldığında işler tuhaflaşır. Savcı ve jüri, onun işlediği cinayetten çok "annesinin cenazesinde ağlamamasını, kahve içmesini" sorgular ve onu "ruhsuz bir canavar" ilan ederek idama mahkûm ederler. Meursault\'nun asıl suçu adam öldürmesi değildir; o, toplumun herkesin oynamasını beklediği o "sahte duygusal oyunu (riyakârlığı)" oynamayı reddeden, hissetmediği bir hüznü yalan söyleyerek taklit etmeyen (dondurucu derecede dürüst) bir adamdır. Toplum, kendi sahte ahlaki tiyatrosuna katılmayan (gerçekçi) birini, bir katilden çok daha tehlikeli bulur ve asıl bunun için ipe götürür.',
    questionStem: 'Camus\'nün "Yabancı" (Meursault) karakteri üzerinden yaptığı asıl toplumsal (felsefi) eleştiri nedir?',
    options: [
      'Güneş ve sıcak havanın insanlarda cinayet işleme dürtüsünü (psikozunu) tetikleyen en büyük faktör olduğunu',
      'Adalet sisteminin (mahkemelerin) bir kişinin işlediği cinayetten ziyade; o kişinin toplumun beklediği o "sahte duygusal rolleri (yalanları/riyakârlığı)" oynamayı reddeden dürüstlüğünü (aykırılığını) en büyük suç ve tehdit olarak algılayıp onu bunun için cezalandırdığını',
      'Annesini kaybeden insanların mutlaka ağır psikolojik krizler (depresyon) geçirmesi gerektiğine dair bilimsel inancı',
      'Yabancı ülkelerden gelen göçmenlerin her zaman haksız yere idam cezasına çarptırıldığını'
    ],
    correct: 1,
    explanation: 'Meursault\'un cinayetten çok "cenazede ağlamadığı (rol yapmadığı/sahte davranmadığı)" için suçlanması; toplumun kendi sahte tiyatrosuna uymayan bu dürüst/aykırı tavrı asıl tehdit saydığı eleştirisidir.'
  },
  {
    title: 'Yarasa Bombaları (Project X-Ray)',
    passage: 'İkinci Dünya Savaşı sırasında ABD, Japonya\'nın o dönük ahşap ve kâğıttan yapılmış evlerini yakmak için tarihin en deli askeri projesini başlattı: "Project X-Ray" (Yarasa Bombaları). Milyonlarca Meksika serbest kuyruklu yarasası mağaralardan toplandı ve göğüslerine gecikmeli patlayan minicik napalm bombaları dikildi. Plan şuydu: Yarasalar gece uçaklardan bırakılacak, içgüdüsel olarak karanlık çatılara (ahşap evlerin arasına) saklanacak ve sabah olduğunda hepsi aynı anda patlayarak tüm Japon şehirlerini devasa bir cehenneme çevirecekti! Proje o kadar kontrolden çıktı ki, yarasalar yanlışlıkla ABD\'nin kendi askeri üssünü (hangarları) yaktı. Bu proje, insanoğlunun savaş kazanmak uğruna sadece diğer insanları değil; doğanın en masum içgüdülerini (karanlığa saklanan bir hayvanı) bile silahlaştırarak militarist bir cinnete ve ahlaki bir kıyamete dönüştürebildiğinin en akıl dışı kanıtıdır.',
    questionStem: 'Yarasa Bombaları projesi, savaş ve teknoloji bağlamında insanlığın hangi ahlaki çöküşünü sembolize eder?',
    options: [
      'Yarasaların taşıdığı virüslerin nükleer silahlardan daha ölümcül olmasını',
      'ABD ordusunun hayvan anatomisi konusunda o dönemde çok bilgisiz kalmasını',
      'Kazanma hırsı (militarist delilik) uğruna, insanın doğanın en masum canlılarını (ve içgüdülerini) bile acımasızca silahlaştırarak, aklı ve vicdanı tamamen devre dışı bırakan bir cinnete savrulmasını',
      'Ahşap evlerin modern savaşlarda asla savunma sağlayamayacağı gerçeğini'
    ],
    correct: 2,
    explanation: 'Küçücük yarasalara bomba bağlayıp onların karanlığa saklanma içgüdüsünü silah (katil) olarak kullanmak; insanın savaş uğruna doğayı silahlaştıran (ahlaki/militarist) cinnetini ve kibrini sembolize eder.'
  },
  {
    title: 'Çernobil\'in Kızıl Ormanı (Doğanın Dönüşü)',
    passage: '1986 Çernobil nükleer patlamasının ardından yayılan ölümcül radyasyon, santralin hemen yanındaki çam ormanına o kadar şiddetli vurdu ki; ağaçlar saniyeler içinde kan kırmızısına dönüştü ve öldü (Kızıl Orman). İnsanlık o bölgeyi 30 kilometre çapında yasaklı (ölüm) bölgesi ilan edip kaçtı. Yıllar boyunca bilim insanları o bölgenin binlerce yıl cansız bir radyasyon çölü olarak kalacağını sandılar. Ancak inanılmaz bir şey oldu: İnsanların terk ettiği o zehirli topraklara birkaç yıl içinde vahşi yaşam (kurtlar, ayılar, geyikler ve kuşlar) geri döndü! Radyasyon hayvanları kanser yapsa da, onların nüfusu patlayarak devasa bir vahşi yaşam cenneti kuruldu. Çernobil\'in o kan kırmızısı ormanı, evrenin en trajikomik gerçeğini fısıldar: Radyasyon, nükleer serpinti ve ölümcül felaketler bile; bir orman ve doğa için "İnsanoğlu" adı verilen o yegâne yıkıcı varlıktan (bizden) çok daha zararsızdır.',
    questionStem: 'Çernobil\'deki Kızıl Orman\'da vahşi yaşamın yeniden (ve hızla) canlanması, insan ve doğa ilişkisine dair hangi sarsıcı ironiyi ortaya koyar?',
    options: [
      'Kurtların ve ayıların radyasyona karşı genetik olarak bağışıklık kazandığını',
      'Çam ağaçlarının kırmızıya dönmesinin hayvanlar için çekici bir renk illüzyonu yarattığını',
      'Radyasyon ve nükleer ölüm tehlikesine rağmen, o bölgeden "insanların çekilmesi"nin doğaya o kadar iyi geldiğini; doğa için asıl ölümcül olanın nükleer bombalar değil, "insanlığın (medeniyetin) ta kendisi" olduğu ironisini',
      'Sovyet bilim insanlarının ormana gizlice panzehir atarak hayvanları kurtardığını'
    ],
    correct: 2,
    explanation: 'Radyasyonlu bir cehennemde (insan yokken) hayvanların coşarak çoğalması; doğa için asıl tehlikenin radyasyon değil, "insanın varlığı" olduğu yönündeki o sarsıcı ironiyi (kibri) ifşa eder.'
  },
  {
    title: 'Kharon\'un Kayığı (Ölümün Faturası)',
    passage: 'Yunan mitolojisinde, ölen bir kişinin ruhu öte âleme (Hades\'in yeraltı dünyasına) geçebilmek için Styx nehrini aşmak zorundadır. Ancak bu nehri geçen tek bir kayık vardır ve o kayığın kürekçisi Kharon, ruhları karşıya bedavaya geçirmez! Ölülerin yakınları, ruh nehri geçebilsin (kıyıda arafta kalmasın) diye cenazede ölünün dilinin altına veya gözlerine bir altın sikke (Obolos) koyarlar. Bu mitolojik ritüel, antik insanın evrene dair en karanlık itirafıdır: "Ölüm" dediğimiz o mutlak, ilahi ve dünyevi her şeyi sıfırladığı düşünülen adalet noktasında bile; insanın aklı "para, borç, bedel ve ticaret" kavramlarından (ekonomiden) kaçamamıştır. Tanrıların ve ruhların dünyasında bile ücretsiz bir bilet (merhamet) yoktur; o karanlık kayığa binmek için bile gişeye bir para ödemek zorundasınız.',
    questionStem: 'Ölülerin ağzına konan sikke (Kharon\'un Kayığı) ritüeli, insan zihniyetinin hangi dünyevi zaafını mitolojiye taşıdığının bir kanıtıdır?',
    options: [
      'Gemi yapımının ve denizciliğin Yunanlılar için en kutsal meslek sayılmasını',
      'İnsanoğlunun, ölüm gibi dünyevi her şeyi sıfırlayan (ilahi/yüce) bir boyutta bile; "ticaret, para, borç ve rüşvet" (ekonomi) gibi tamamen maddi/insani kurgulardan (çıkar ilişkisinden) kopamayarak onu mitolojiye yansıtmasını',
      'Altın ve gümüşün ruhların çürümesini engelleyen sihirli bir metal olduğuna inanılmasını',
      'Ölüm anında göz kapaklarının açık kalmasının dinde büyük bir günah sayılmasını'
    ],
    correct: 1,
    explanation: 'Ölüm ötesinde (ilahi bir boyutta) bile kayıkçıya "para (sikke)" ödenme zorunluluğu; insanın zihnindeki o dünyevi, ticari (parasal) ve bencil ilişki modelini ölümden sonrasına bile taşıdığını kanıtlar.'
  },
  {
    title: 'Gulliver\'in Gezileri (Yahoos ve Houyhnhnms)',
    passage: 'Jonathan Swift\'in "Gulliver\'in Gezileri" sadece bir çocuk masalı değil, insan doğasına yazılmış en zehirli (ve mizantropik) hakarettir. Gulliver\'in gittiği dördüncü ülkede (Houyhnhnms diyarında) düzen tersine dönmüştür. O ülkenin asil, akılcı, erdemli, dürüst ve medeni yöneticileri "Atlar"dır. Peki ya insanlar? Onlar "Yahoos" adında; pislik içinde debelenen, açgözlü, birbirini parçalayan, iğrenç ve vahşi birer köle (hayvan) sürüsüdür. Atlar, yalan söylemeyi bile bilmezken, insanlar (Yahoos) en küçük bir parlak taş (altın) için birbirlerini gırtlaklarlar. Swift, bu acımasız aynayı insanlığa tutarak şunu kükrer: "Bizler aklı olan ulu varlıklar değiliz; aklımızı sadece daha kurnaz, daha vahşi ve daha iğrenç birer hayvana (Yahoo\'ya) dönüşmek için kullanan kibirli ucubeleriz."',
    questionStem: 'Jonathan Swift\'in Gulliver\'in Gezileri\'nde "insanları vahşi hayvan (Yahoo), atları ise bilge yönetici" olarak kurgulamasının asıl edebi/felsefi amacı nedir?',
    options: [
      'Atların biyolojik olarak insanlardan daha büyük bir beyin hacmine sahip olduğunu kanıtlamak',
      'Çocukların hayvan sevgisini artırmak için onlara eğlenceli bir masal dünyası yaratmak',
      'İnsanoğlunun kendini aklın ve medeniyetin zirvesi (kibri) olarak görmesini paramparça edip; insanın aslında aklını kullanarak çok daha bencil, iğrenç ve vahşi bir yaratığa dönüştüğünü gösteren acımasız bir ayna (hiciv) tutmak',
      'Tarım toplumlarında at arabalarının ekonomide ne kadar önemli olduğunu vurgulamak'
    ],
    correct: 2,
    explanation: 'İnsanların vahşi, iğrenç (Yahoo) ve atların bilge gösterilmesi; insanın o "akıllı ve medeni ulu varlık" kibrini parçalayıp, bizim aslında akılla daha da vahşileşen bencil varlıklar olduğumuzu (hicivle/tokatla) suratımıza çarpmaktır.'
  },
  {
    title: 'Büyük Çöküş ve Büyük Donma (Evrenin İdam Fermanı)',
    passage: 'Trilyonlarca yıl sonra bu koca evrene ne olacak? Kozmologlar bu konuda iki karanlık kıyamet (idam) senaryosu sunar: Ya kütleçekimi genişlemeyi durduracak ve tüm evren geriye sararak tek ve kavurucu bir noktada (Büyük Çöküş / Big Crunch) ezilerek yok olacak. Ya da, evren o kadar hızla genişlemeye devam edecek ki; yıldızlar birbirinden kopacak, gazlar tükenecek ve kâinat mutlak sıfır derecesinde, hiçbir ışığın ve hareketin kalmadığı, ebedi ve dondurucu bir karanlığa (Büyük Donma / Big Freeze) gömülecek. Hangi senaryo kazanırsa kazansın; Shakespeare\'in şiirleri, uzaya gönderdiğimiz o altın plaklar, aşklarımız, savaşlarımız ve kurduğumuz o devasa medeniyet kibri; ya kavurucu bir ateşte ya da dondurucu bir karanlıkta ebediyen silinip hiçe karışacaktır. Kâinatın o devasa tiyatrosunda biz sadece perdenin inmesini (ve ışıkların kapanmasını) bekleyen geçici birer figüranız.',
    questionStem: 'Büyük Çöküş (Big Crunch) ve Büyük Donma (Big Freeze) senaryoları, insanlık tarihi ve eserleri (mirası) bağlamında neyi sembolize eder?',
    options: [
      'Uzay gemilerinin teknolojik olarak sadece sıcak galaksilerde seyahat edebileceğini',
      'İnsanoğlunun yarattığı tüm kültürel, bilimsel ve tarihi mirasına duyduğu o "ölümsüzlük (kalıcılık)" kibrinin; evrenin kaçınılmaz (ölümcül) fiziği karşısında eninde sonunda mutlak bir hiçliğe ve unutuluşa mahkûm olduğunu',
      'Bilim insanlarının evrenin yaşını hesaplarken çok büyük yanılgılara düştüklerini',
      'Küresel ısınmanın dünyayı yok edeceği yönündeki çevresel korkuları'
    ],
    correct: 1,
    explanation: 'Evrenin donarak veya çökererek (kesinlikle) ölecek olması; insanın yarattığı sanat, bilim ve mirasın (ölümsüzlük kibrinin) sonunda mutlak bir hiçliğe/unutuluşa mahkûm olduğunu sembolize eder.'
  },
  {
    title: 'Karun\'un Hazinesi (Kroisos ve Solon)',
    passage: 'Tarihin bilinen en zengin adamı olan Lidya Kralı Kroisos (Karun), altından yapılma sarayında Yunan bilgesi Solon\'u ağırlar. Kral, Solon\'a o kibirli soruyu sorar: "Söyle bakalım, dünyadaki en mutlu insan kimdir?" Solon, altınlara bulanmış kralın adını söylemek yerine, savaşta vatanı için onuruyla ölen fakir bir Yunan köylüsünün adını verir. Karun öfkeden kudurur. Solon ona o efsanevi dersi verir: "Ey Kral, tanrıların kime ne vereceği bilinmez. Sahip olduğun altınlar seni bugün mutlu kılabilir, ancak bir insanın gerçekten mutlu ve başarılı olup olmadığını anlamak için onun sonunu (ölümünü) görmeliyiz. Ölmeden kimseye mutlu deme!" Yıllar sonra Pers Kralı Kiros Lidya\'yı işgal eder, Karun tüm servetini kaybeder ve odun ateşinde canlı canlı yakılmak üzere direğe bağlanır. O alevlerin arasında Karun\'un ağzından tek bir çığlık dökülür: "Ah Solon, Solon! Haklıydın!"',
    questionStem: 'Solon\'un Kral Kroisos\'a söylediği "Ölmeden kimseye mutlu deme!" sözü, hayat ve zenginlik üzerine hangi felsefi gerçeği hatırlatır?',
    options: [
      'Zenginliğin sadece altınla değil, sahip olunan toprakların genişliğiyle ölçülebileceğini',
      'Maddi zenginliğin, kibrin ve gücün son derece geçici ve kırılgan (talih eseri) olduğunu; bir insanın hayatının (ve mutluluğunun) gerçek değerinin ancak hayatının son anına kadar süren (ve onurla biten) o bütünlükle ölçülebileceğini',
      'Köylülerin ve fakirlerin krallardan her zaman daha uzun ve sağlıklı yaşadığını',
      'Lidya ordusunun savaşlarda Pers ordusuna göre çok daha korkak davrandığını'
    ],
    correct: 1,
    explanation: 'Solon\'un "ölmeden kimseye mutlu deme" uyarısı; zenginliğin ve gücün kırılgan/geçici olduğunu, insanın değerinin ancak hayatının "sonuna kadar" (bütün olarak) çizdiği tabloyla anlaşılabileceğini vurgular.'
  }
];

export const felsefeParagrafSorulari30: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_30.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_30[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe30-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_31 = [
  {
    title: 'Arşimet ve Kaba Kuvvetin Zaferi',
    passage: 'MÖ 212 yılında Romalı askerler Sirakuza kentini işgal ettiklerinde, kentin sokaklarında kan gövdeyi götürüyordu. Ancak tarihin en büyük matematikçi ve mühendislerinden olan Arşimet, bu kanlı kaosun ortasında evinin bahçesinde kumlara çizdiği geometri problemleriyle meşguldü. Yanına kılıcını çekmiş, kan ter içindeki bir Roma askeri geldiğinde, Arşimet başını bile kaldırmadan tarihe geçen o umursamaz ve dâhiyane cümleyi kurdu: "Noli turbare circulos meos!" (Çemberlerimi bozma!). Asker hiçbir şey anlamadı ve kılıcını indirip Arşimet\'i oracıkta öldürdü. Arşimet\'in ölümü sadece bir cinayet değildir; saf aklın, bilginin ve derin düşüncenin o ulvi kulesinin; cehaletin, kaba kuvvetin ve silahın (askerin) o sağır edici ve kör karanlığı karşısında saniyeler içinde nasıl acımasızca parçalandığının en trajik felsefi anıtıdır.',
    questionStem: 'Arşimet\'in ölümü (Romalı askere verdiği tepki), tarih ve felsefe bağlamında neyin sembolik bir çarpışmasıdır?',
    options: [
      'Matematik biliminin savaş dönemlerinde tamamen işlevsiz ve gereksiz kaldığının',
      'Antik dönemde bilim insanlarının savaşlardan korkmayacak kadar cesur (savaşçı) bir ruha sahip olduğunun',
      'Saf aklın, düşüncenin ve entelektüel derinliğin; cehalet, kaba kuvvet ve şiddet karşısında ne kadar kırılgan, savunmasız ve anlaşılamaz olduğunun (aklın kaba kuvvete yenilişinin)',
      'Romalıların geometri ve matematikten nefret ettikleri için bilerek bilim insanlarını hedef aldığının'
    ],
    correct: 2,
    explanation: 'Arşimet\'in kumdaki "çemberleriyle" (saf akıl ve bilim) uğraşırken cahil bir askerin kılıcıyla (kaba kuvvetle) öldürülmesi; aklın ve düşüncenin, şiddet ve cehalet karşısındaki trajik kırılganlığını (çarpışmasını) sembolize eder.'
  },
  {
    title: 'Ténéré Ağacı (Kozmik Absürtlük)',
    passage: 'Afrika\'daki devasa ve dondurucu derecede kurak Sahra Çölü\'nün tam kalbinde, "L\'Arbre du Ténéré" (Ténéré Ağacı) adında bir akasya ağacı yaşardı. Etrafındaki 400 kilometre boyunca tek bir ağaç, gölge veya yeşillik yoktu. Köklerini yerin metrelerce altındaki suya ulaştırmayı başaran bu ağaç, hayatta kalmanın ve direncin evrensel bir mucizesiydi; tüm kervanların ve kâşiflerin kutsal bir pusulası haline gelmişti. Ancak 1973 yılında inanılmaz, akılalmaz ve absürt bir şey oldu: Çölde giden sarhoş bir kamyon şoförü, 400 kilometre çapındaki o bomboş arazide çarpa çarpa tam gidip o tek ağaca çarptı ve onu kökünden sökerek öldürdü! Ténéré Ağacı\'nın ölümü, doğanın o milyonlarca yıllık sarsılmaz direncinin; insanoğlunun o anlamsız, kör ve trajikomik aptallığı (absürtlüğü) karşısında saniyeler içinde nasıl un ufak olduğunun en acımasız şakasıdır.',
    questionStem: 'Ténéré Ağacı\'nın ölüm şekli, yazar tarafından insanoğlu ve doğa ilişkisine dair nasıl bir metafor (şaka) olarak sunulmuştur?',
    options: [
      'Gelecekteki ulaşım araçlarının çöl koşullarına tamamen uygun olarak tasarlanması gerektiği',
      'Çöl ekosisteminin dışarıdan gelen bitki türlerini er ya da geç yok ettiği (kabul etmediği) gerçeği',
      'Doğanın o sarsılmaz ve mucizevi hayatta kalma iradesinin; insanoğlunun o kör, anlamsız, rastgele ve trajikomik "absürtlük/aptallık" seviyesi karşısında bile ne kadar çaresiz (ve yok edilebilir) olduğu gerçeği',
      'Kamyon şoförlerinin eski çağlardaki kervanlardan daha dikkatsiz olduğu eleştirisi'
    ],
    correct: 2,
    explanation: '400 km bomboş çölde mucizevi bir şekilde hayatta kalan tek ağaca bir sarhoşun gidip çarpması; doğanın mucizevi direncinin, insan aptallığının (absürtlük ve kaosunun) kör yıkıcılığına kurban gitmesi metaforudur.'
  },
  {
    title: 'Corrupted Blood Salgını (Sanal Dünyada Gerçek Yıkım)',
    passage: '2005 yılında "World of Warcraft" (WoW) adlı devasa çok oyunculu çevrimiçi oyunda, yapımcıların kazara yarattığı bir kod hatası yüzünden "Corrupted Blood" (Bozuk Kan) adında sanal, bulaşıcı ve ölümcül bir hastalık patlak verdi. Karakterler birbirlerine yaklaştıklarında virüs bulaşıyor ve ölüyorlardı. Oyun şirketinin asıl şok olduğu şey kod hatası değil, "oyuncuların tepkisiydi". Salgın başladığında bazı oyuncular kendilerini karantinaya aldı, bazıları iyileştirici (doktor) olup hayatlarını tehlikeye attı. Ancak en korkuncu; bazı oyuncular bilerek hastalığı kapıyor ve "virüsü yaymak (terörizm yapmak) için" kalabalık şehirlere koşarak herkesi kasten öldürüyordu! Gerçek dünyadaki epidemiyologlar (salgın uzmanları) bu sanal kaosu inceleyerek insan davranışının modellemesini çıkardılar. Bu olay; kurgusal bir piksel evreninde (simülasyonda) bile, insan doğasının o karanlık, bencil, yıkıcı ve kaotik gerçeğinin asla gizlenemediğinin dijital ispatıdır.',
    questionStem: 'World of Warcraft\'taki "Corrupted Blood" (sanal salgın) olayı, bilim insanlarına insan doğası hakkında hangi paha biçilmez veriyi sunmuştur?',
    options: [
      'Bilgisayar kodlarının gelecekte insan beynini fiziksel olarak hasta edebileceği tehlikesini',
      'Dijital ve tamamen kurgusal (sanal) bir ortamda bile; insanların fedakârlık, panik ve "kötü niyetli yıkıcılık (terörizm)" gibi en çıplak ve gerçek içgüdülerini (doğalarını) aynen sergilediklerini',
      'Video oyunlarının sadece genç yaştaki çocukların psikolojisini bozduğunu',
      'İnternet bağlantılarının kesilmesinin salgın hastalıkları anında durdurabileceğini'
    ],
    correct: 1,
    explanation: 'Oyuncuların karantinaya girmesi veya bilerek virüs yayması; sanal bir simülasyonda bile insan doğasının o gerçekçi (iyi ve kötü) içgüdülerini birebir sergilediğini ispatlamıştır.'
  },
  {
    title: 'Gombe Şempanze Savaşı (Doğanın Masumiyeti Yalanı)',
    passage: 'Yüzyıllar boyunca filozoflar (özellikle J.J. Rousseau), insanın doğuştan "iyi ve masum" olduğunu, vahşetin ve savaşın sadece "insanlığın kurduğu medeniyetler ve mülkiyet" yüzünden ortaya çıktığını savundu (Soylu Vahşi Miti). Ancak 1974\'te primatolog Jane Goodall, Tanzanya\'nın Gombe ormanlarında kan dondurucu bir gerçeği kameraya aldı. Ormandaki şempanzeler iki gruba bölünmüş ve tam dört yıl sürecek acımasız bir savaşa tutuşmuşlardı. Şempanzeler; sınır devriyeleri atıyor, pusu kuruyor, esir aldıkları rakiplerine işkence yapıyor ve onları yavaş yavaş paramparça ederek öldürüyorlardı! Savaş, medeniyetin bir icadı değil; DNA\'mıza kazınmış evrimsel bir mirastı. Gombe Savaşı, doğanın masumiyetine duyulan o romantik ve felsefi kibri paramparça etmiş; "kötülüğün, şiddetin ve organize cinayetin" hayvanlar âleminde de var olan, ilkel ve biyolojik bir strateji olduğunu (Rousseau\'nun yalanını) yüzümüze çarpmıştır.',
    questionStem: 'Jane Goodall\'ın belgelediği "Gombe Şempanze Savaşı", felsefe ve antropoloji dünyasındaki hangi "romantik algıyı" yerle bir etmiştir?',
    options: [
      'Şempanzelerin meyve ve bitkilerle beslenen tamamen otçul (zararsız) varlıklar olduğu düşüncesini',
      'Ormanların kesilerek şehirlerin kurulmasının vahşi hayvanları göçe zorladığı gerçeğini',
      'Savaşın, şiddetin ve organize cinayetin sadece "insanlığa ve kurulan medeniyete" özgü sonradan öğrenilmiş bir bozulma olduğu; doğanın ve ilkel halin ise saf, masum ve barışçıl ("Soylu Vahşi") olduğu yönündeki romantik inancı',
      'Afrika kıtasındaki hayvanların iklim değişikliklerine karşı dayanıklı olduğu inancını'
    ],
    correct: 2,
    explanation: 'Şempanzelerin 4 yıl pusu kurup işkenceyle savaşması; vahşetin ve savaşın sadece medeni insanın bir buluşu değil, doğanın/evrimin (ilkel halin) kendi içinde var olan karanlık bir strateji olduğunu kanıtlayıp "Soylu Vahşi/Masum Doğa" inancını yıkmıştır.'
  },
  {
    title: 'Ataş Harekâtı (Operation Paperclip)',
    passage: 'İkinci Dünya Savaşı bittiğinde, Nazi Almanyası\'nın V-2 roketlerini tasarlayan, toplama kamplarındaki köle işçileri ölümüne çalıştıran ve binlerce masumun kanı elinde olan Wernher von Braun ve ekibi, savaş suçlusu olarak asılmayı bekliyordu. Ancak ABD hükümeti, Sovyetlerle başlayacak olan Soğuk Savaş\'ta teknolojik üstünlüğü ele geçirmek için ahlakı ve adaleti saniyeler içinde çöpe attı. "Ataş Harekâtı" (Operation Paperclip) adıyla, 1600\'den fazla Nazi bilim insanının geçmiş dosyalarını silerek onları gizlice Amerika\'ya kaçırdılar. Dünün o kanlı savaş suçluları, NASA\'nın en tepe yöneticileri yapıldı ve Apollo programını yöneterek insanları Ay\'a çıkardılar! Bu harekât; devlet aklının ve "bilimsel ilerleme" hırsının, stratejik menfaat söz konusu olduğunda; vicdanı, adaleti ve milyonlarca masumun kanını bir "kâğıt ataşıyla" dosyalayıp nasıl acımasızca (pragmatizmle) aklayabildiğinin tarihteki en iğrenç (ve riyakâr) belgesidir.',
    questionStem: 'Ataş Harekâtı (Operation Paperclip) olayı, devlet politikaları ve "bilimsel ilerleme" hakkında neyin trajik bir eleştirisidir?',
    options: [
      'Roket teknolojisinin sadece savaşlarda kullanılarak sivil havacılığın engellenmesinin',
      'ABD\'nin Avrupa ülkelerinden gelen beyin göçünü yeterince desteklememesinin',
      'Devletlerin ve bilimsel pragmatizmin (ilerleme hırsının), kendi stratejik/teknolojik menfaatleri uğruna; adaleti, ahlakı ve savaş suçlarını (kanlı bir geçmişi) gözünü kırpmadan nasıl örtbas edip (riyakârca) aklayabildiğinin',
      'Nazilerin uzay teknolojisinde aslında Amerikalılardan çok daha geride olduğunun'
    ],
    correct: 2,
    explanation: 'Savaş suçlusu Nazilerin uzay yarışını kazanmak uğruna affedilip NASA\'nın başına getirilmesi; devletlerin menfaat/bilimsel ilerleme hırsı uğruna adaleti ve ahlakı nasıl riyakârca çöpe attığının (aklancılığın) eleştirisidir.'
  },
  {
    title: 'Codex Gigas (Şeytanın İncili)',
    passage: '13. yüzyılda Bohemya\'da bir manastırda, kuralları çiğnediği için duvarın içine canlı canlı örülerek ölüme mahkûm edilen bir keşiş, af dilemek için o güne kadar görülmemiş devasa bir kitap (dünyanın tüm bilgisini içeren bir İncil) yazmaya söz verir. Üstelik bunu "tek bir gecede" yapacaktır! Kitap (Codex Gigas), gerçekten de ertesi sabah hazır bulunur. Devasa sayfaları 160 eşek derisinden yapılmıştır ve ortasında korkunç boyutta bir Şeytan tasviri vardır (Bu yüzden Şeytanın İncili denir). Efsaneye göre keşiş, kitabı bitiremeyeceğini anlayınca gece ruhunu şeytana satmış ve kitabı ona yazdırmıştır. Modern bilim insanları kitabı incelediğinde kan dondurucu bir gerçeği fark ettiler: Kitabın başından sonuna kadar yazı karakteri, mürekkep yoğunluğu ve stili "milim bile değişmeden" tek bir kişinin elinden çıkmıştı. Oysa bir insanın bu devasa eseri yazması aralıksız 30 yılını almalıydı! Codex Gigas; insanın ölüm korkusu, inancı ve iradesi birleştiğinde, mantığın ve zamanın sınırlarını nasıl imkânsız bir fanatizmle aşabileceğinin o karanlık, çözülemez ve şeytani mührüdür.',
    questionStem: 'Codex Gigas (Şeytanın İncili) kitabının modern analizleri sonucunda ulaşılan "bilimsel (şaşırtıcı)" bulgu nedir ve neyi sembolize eder?',
    options: [
      'Kitabın aslında birden fazla yazar tarafından farklı yüzyıllarda yazılıp birleştirildiğini ve efsanenin kurgu olduğunu',
      'Kullanılan mürekkebin o dönemde sadece zehirli bitkilerden elde edildiğini ve yazarları öldürdüğünü',
      'Arasıksız 30 yıl sürmesi gereken bu devasa eserin başından sonuna kadar kusursuzca (milim değişmeden) "tek bir insanın" elinden çıkmış olması; insan iradesinin ve inancının (ölüm korkusuyla) sınırları nasıl imkânsızca zorladığını',
      'Kitabın içindeki yazıların tamamen rastgele ve anlamsız sembollerden oluştuğunu'
    ],
    correct: 2,
    explanation: '30 yıl sürecek devasa eserin başından sonuna milim değişmeden tek bir kişinin elinden çıkması (bilimsel bulgu); ölüm korkusu ve inancın insan iradesini nasıl imkânsız bir fanatizme ulaştırdığını sembolize eder.'
  },
  {
    title: 'Han van Meegeren (Sahtekârın Zaferi)',
    passage: '1945 yılında Hollanda\'da ressam Han van Meegeren, paha biçilmez bir "Vermeer" tablosunu Nazi lideri Hermann Göring\'e satarak ülkesinin kültürel mirasına "ihanet etmekten (vatan hainliğinden)" idama mahkûm edildi. Mahkemede kendini kurtarmak için öyle bir itirafta bulundu ki sanat dünyası felç oldu: "Ben vatan haini değilim! Göring\'e sattığım o tablo orijinal bir Vermeer değildi, onu kendi ellerimle ben çizdim, ben bir sahtekârım!" O güne kadar dünyanın en büyük sanat eleştirmenleri o tablonun "Vermeer\'in en büyük şaheseri" olduğuna yemin etmişlerdi. Mahkeme inanmadı, van Meegeren hücresinde gözetim altında yeni bir sahte Vermeer çizerek yeteneğini kanıtladı ve vatan haini olmaktan kurtulup "Nazileri dolandıran halk kahramanı" ilan edildi! Bu olay, sanat dünyasının ve "uzmanların (eleştirmenlerin)" o içi boş kibrini paramparça eder. Eserin estetik güzelliği değil; altına atılan o sahte "imzanın (markanın)" insan algısını nasıl kör edip kandırdığının tarihteki en komik ve dâhiyane tokatıdır.',
    questionStem: 'Han van Meegeren olayının sanat dünyasındaki "uzmanlara (eleştirmenlere)" yönelttiği asıl felsefi eleştiri nedir?',
    options: [
      'Müzayede evlerinin eserleri koruma konusunda güvenlik zafiyeti yaşadığı',
      'Sanatçıların savaş dönemlerinde sadece para kazanmak için sanat ürettikleri',
      'Sanat otoritelerinin bir eseri değerlendirirken estetik değere ve kaliteye değil; sadece altındaki o sahte "imzaya (marka değerine)" tapınarak körleştikleri ve kendi uzmanlıklarının aslında ne kadar içi boş bir illüzyon (kibir) olduğu',
      'Ressamların eski tabloları restore ederken boyaların orijinal yapısını bozdukları'
    ],
    correct: 2,
    explanation: 'Eleştirmenlerin sahte bir tabloyu "şaheser" ilan etmesi; sanat otoritelerinin esere değil "imzaya/markaya" körü körüne taptığını ve uzmanlık kibrinin içi boş bir illüzyon olduğunu kanıtlar.'
  },
  {
    title: 'Büyük Patlama ve Antimadde Asimetrisi',
    passage: 'Fizik yasalarına göre, 13.8 milyar yıl önce Büyük Patlama (Big Bang) yaşandığında, ortaya eşit miktarda "Madde" ve onun zıttı olan "Antimadde" çıkmalıydı. Madde ve Antimadde karşılaştığı an birbirini yok eder ve geriye sadece saf bir enerji (ışık) kalır. Eğer evren kusursuz çalışsaydı, tüm maddeler ve antimaddeler birbirini yok edecek ve kâinat tamamen boş, ışıktan ibaret ve ruhsuz bir hiçliğe dönecekti! Ancak akılalmaz bir şey oldu: Her bir milyar antimadde parçacığına karşılık, tam bir milyar "artı BİR" madde parçacığı yaratıldı. O birbirini yok eden milyarlarca savaşın ardından geriye sadece o minicik, milyarda birlik "artı madde (kusur/asimetri)" sağ kaldı. Biz, Güneş, yıldızlar, aşık olduğumuz insanlar ve okuduğunuz bu kitap; işte o milyarda birlik kusurun, o eşitsizliğin (asimetrinin) hayatta kalan tortusuyuz. Evrende kusursuzluk (eşitlik) ölüm demektir; hayat ve varoluş, doğanın yaptığı o minicik, o muazzam ve isyankâr "hatanın" (kusurun) ta kendisidir.',
    questionStem: 'Antimadde Asimetrisi olgusu, "varoluş ve kusursuzluk" kavramları hakkında fiziğin bize öğrettiği hangi felsefi paradoksu açıklar?',
    options: [
      'Gezegenlerin sadece Güneş\'ten kopan parçalarla oluştuğunu',
      'Evrendeki tüm maddelerin aslında zamanla antimaddeye dönüşüp yok olacağını',
      'Kusursuzluğun (tam eşitliğin) aslında evrenin yok olması (hiçlik) anlamına geldiğini; yaşamın, gerçekliğin ve varoluşumuzun, doğanın yaptığı o "milyarda birlik küçük bir hataya, kusura (asimetriye)" borçlu olduğumuz paradoksunu',
      'Işık enerjisinin maddeye göre daha üstün ve kalıcı bir form olduğunu'
    ],
    correct: 2,
    explanation: 'Madde-antimadde eşitliğinin birbirini yok edeceği (kusursuzluğun ölüm olduğu); varoluşumuzun o arta kalan minik hataya/asimetriye (kusura) bağlı olduğu paradoksunu açıklar.'
  },
  {
    title: 'Balina Leşinin Düşüşü (Whale Fall)',
    passage: 'Okyanusun binlerce metre altındaki karanlık, basınçlı ve dondurucu derinliklerde hayat neredeyse imkânsızdır; orası devasa bir çöldür. Ancak yukarıda ölen devasa bir balinanın bedeni o karanlık çukura düştüğünde (Whale Fall), evrenin en şiirsel biyolojik mucizesi başlar. O tek bir balina ölüsü, o ıssız karanlıkta bir anda vahalar (şenlik) yaratır. Önce köpekbalıkları eti koparır, ardından kemik solucanları, bakteriler ve yengeçler gelir. Bir balinanın tek bir ölü bedeni, o karanlık cehennemin ortasında tam 50 yıl boyunca aralıksız yaşayacak yepyeni ve devasa bir ekosistemi tek başına besler! Okyanusun dibi bize şu felsefi gerçeği fısıldar: Ölüm, sadece bir bitiş, bir yok oluş veya bir trajedi değildir; doğru (doğal) bağlamda gerçekleştiğinde ölüm, binlerce yeni hayatı (tohumu) besleyen, onları karanlığın kalbinde yeniden var eden doğanın en cömert ve en görkemli "doğum" sahnesidir.',
    questionStem: 'Balina Leşi (Whale Fall) olgusu, "Ölüm" kavramına dair nasıl bir evrensel (ve ekolojik) bakış açısı sunmaktadır?',
    options: [
      'Büyük deniz canlılarının ölümlerinin okyanus sularını zehirleyerek felaketler yarattığı',
      'Ölümün sadece sonlu ve trajik bir yok oluş (bitiş) olmadığı; doğanın döngüsü içinde, karanlıkta ve hiçlikte bile binlerce yeni yaşamı besleyen, yeşerten ve var eden en cömert (en görkemli) "doğum/başlangıç" eylemi olduğu',
      'Okyanus tabanındaki canlıların yüzeye çıkamayacak kadar basınca bağımlı olduğu',
      'Balina avcılığının deniz ekosistemini korumak için aslında gerekli bir eylem olduğu'
    ],
    correct: 1,
    explanation: 'Ölen balinanın okyanus dibinde 50 yıl boyunca yeni bir ekosistemi beslemesi; ölümün sadece bir son değil, doğada binlerce yeni hayatı var eden cömert bir "doğum/başlangıç" eylemi olduğunu anlatır.'
  },
  {
    title: 'Kutup Yıldızı\'nın Kayması (Presesyon)',
    passage: 'Binlerce yıl boyunca denizciler, kâşifler ve çölleri aşan kervanlar yönlerini bulmak için gökyüzündeki o sarsılmaz, yeri asla değişmeyen mutlak rehbere güvendiler: Kutup Yıldızı (Polaris). O, gökyüzünün çivisi, değişmezliğin ve sadakatin evrensel sembolüydü. Oysa modern astronomi, Dünya\'nın kendi ekseni etrafında dönerken tıpkı yavaşlayan bir topaç gibi yalpaladığını (Presesyon) kanıtladı. Bu yalpalanma yüzünden Dünya\'nın kutup ekseni milim milim kaymaktadır. Sonuç mu? 5000 yıl önce Mısırlıların Kutup Yıldızı Polaris değil, "Thuban" yıldızıydı. Ve 12.000 yıl sonra bizim o sarsılmaz rehberimiz yerini "Vega" yıldızına bırakacaktır! Kutup Yıldızı\'nın o yavaş ve dilsiz kayışı; insanoğlunun inandığı, güvendiği ve sığındığı "mutlak, ebedi ve değişmez" hiçbir rehberin (veya inancın) olmadığını; en sarsılmaz sandığımız doğruların bile, evrenin o baş döndürücü ve devasa zaman çarkı içinde eninde sonunda nöbetini (yerini) terk edecek geçici birer illüzyon olduğunu yüzümüze vurur.',
    questionStem: 'Kutup Yıldızı\'nın zamanla değişmesi (Presesyon) olgusu, yazar tarafından hangi felsefi eleştiri (veya farkındalık) için bir metafor olarak kullanılmıştır?',
    options: [
      'Antik dönem denizcilerinin aslında çok yanlış rotalarda seyahat ederek kaybolduklarına',
      'Yıldızların yaydıkları ışığın zamanla azalarak yok olduğu bilimsel gerçeğine',
      'İnsanoğlunun evrende inandığı, güvendiği ve "sabit, mutlak, ebedi" sandığı tüm rehberlerin (doğruların) aslında sadece o anlık zaman dilimine ait geçici ve değişken illüzyonlar (nöbetçiler) olduğuna',
      'Dünya\'nın dönüş hızının yavaşlayarak yerçekimini tamamen zayıflatacağına'
    ],
    correct: 2,
    explanation: 'En sabit sandığımız Kutup Yıldızının bile yer değiştirmesi; insanoğlunun inandığı tüm "mutlak ve ebedi (değişmez) doğruların/rehberlerin" aslında zamanın çarkında geçici ve değişken illüzyonlar olduğu metaforudur.'
  },
  {
    title: 'Karneades\'in Tahtası (Hayatta Kalma Ahlakı)',
    passage: 'MÖ 2. yüzyılda Yunan filozofu Karneades, ahlak felsefesinin kalbini söken şu meşhur düşünce deneyini kurgular: "İki denizci gemi kazası geçirip okyanusun ortasına düşer. İkisi birden, suyun üzerinde yüzen bir tahta parçasına tutunur. Ancak tahta ikisinin ağırlığını kaldıramayacak kadar küçüktür ve batmaya başlar. Denizcilerden biri, hayatta kalmak için (kendi canını kurtarmak adına) diğer denizciyi iter, onu boğulmaya terk eder ve tek başına o tahtaya tutunarak kurtulur." Soru şudur: Suya iten denizci bir katil midir, ahlaksız mıdır? Yoksa doğanın en temel kuralı olan "hayatta kalma içgüdüsünün" haklı (ve yasal) bir uygulayıcısı mıdır? Karneades\'in Tahtası bize o dondurucu gerçeği fısıldar: O sıcak salonlarımızda, tok karnımızla yazdığımız o yüce, dokunulmaz ve erdemli "ahlak yasaları"; okyanusun dondurucu sularında, ölümle burun buruna gelinen o son çaresizlik saniyesinde kelimenin tam anlamıyla sulara gömülüp (geçersiz kalıp) yerini içimizdeki o vahşi, acımasız ve bencil canavara bırakmaya mahkûmdur.',
    questionStem: 'Karneades\'in Tahtası düşünce deneyi, "Ahlak" kavramının sınırları hakkında neyi savunmaktadır?',
    options: [
      'Gemicilik ve denizcilik yasalarının antik çağlardan beri çok yetersiz olduğunu',
      'İnsanların her zaman kendi hayatlarından çok başkalarının hayatını kurtarmaya meyilli olduğunu (diğerkâmlığı)',
      'İnsanın konfor ortamında ürettiği "yüce ahlak kurallarının"; ölüm tehlikesi, çaresizlik ve hayatta kalma içgüdüsü (varoluş savaşı) devreye girdiğinde tamamen geçersiz kalarak çökebileceğini (ahlakın kırılganlığını)',
      'Deniz kazalarında her zaman en fiziksel güce sahip olanın hayatta kalacağı evrimsel kuralını'
    ],
    correct: 2,
    explanation: 'Adamın arkadaşını itip tahtayı alması; salonlarda yazılan o yüce ahlak yasalarının, ölüm/hayatta kalma anında sulara gömülüp geçersiz (kırılgan) kalacağını savunur.'
  },
  {
    title: 'Gattaca ve Kusursuzluk Kâbusu (CRISPR)',
    passage: 'Genetik mühendisliğinin (CRISPR gibi) hızla ilerlediği modern çağımız, 1997 yapımı bilimkurgu şaheseri "Gattaca"yı bir kehanete dönüştürdü. O dünyada, bebekler doğmadan önce laboratuvarlarda tasarlanmaktadır; hastalıklı, zayıf veya kısa boylu genler silinmekte, hepsi birer kusursuz "Yunan heykeli (Valid)" gibi doğmaktadır. Genetiğiyle oynanmamış (aşkla doğan) çocuklar ise "Geçersiz (In-Valid)" ilan edilip toplumdan dışlanmaktadır. Ancak Gattaca bize kusursuzluğun zaferini değil, kâbusunu gösterir. Çünkü o laboratuvar bebekleri hastalıksızdır ama ruhsuzdur, tutkudan yoksundur; her şeyleri önceden belirlendiği için hayal kurma ve isyan etme yetilerini kaybetmişlerdir. İnsanı o görkemli, sınırları yıkan ve sanat üreten "insan" yapan şey onun genetik kusursuzluğu değildir; tam aksine, zaafları, hastalıkları, zayıflıkları ve o zayıflıkları aşmak için kendi içinde yaktığı o umutsuz ama destansı isyan (irade) ateşidir. Kusursuzluk; insanın o kırılgan, kaotik ve şiirsel ruhuna vurulmuş en steril prangadır.',
    questionStem: 'Gattaca evrenindeki genetik mühendislik kurgusu (kusursuzluk arayışı), insan doğası hakkında yazar tarafından nasıl eleştirilmektedir?',
    options: [
      'Tıbbi gelişmelerin sadece zenginlerin tekelinde kalıp sınıfsal bir adaletsizlik yaratması eleştirisiyle',
      'Hastalıklardan arındırılmış bir toplumun ekonomik olarak daha zayıf ve tembel hale geleceği öngörüsüyle',
      'Genetik kusursuzluğun (tasarımın); insanı insan yapan (ve sanat/isyan üreten) o kırılganlıkları, zaafları ve iradeyi yok ederek, bizi ruhsuz, tutkusuz ve steril birer robotik köleye dönüştüren (insani özü çalan) bir kâbus olduğu teziyle',
      'Genleriyle oynanmış çocukların spor müsabakalarında doğal insanlara karşı haksız rekabet yaratmasıyla'
    ],
    correct: 2,
    explanation: 'Kusursuz heykeller gibi doğan çocukların tutkusuz/ruhsuz olması; genetik kusursuzluğun insanın zaaflarını (ve ondan doğan isyanını/ruhunu) yok ederek onu steril bir köleye çevirdiği eleştirisidir.'
  },
  {
    title: 'Aylak Sınıfın Teorisi (Veblen ve Bronzlaşmak)',
    passage: 'Sosyolog Thorstein Veblen, "Aylak Sınıfın Teorisi"nde statü ve zenginlik göstergelerinin zamanla ne kadar absürt şekillerde değiştiğini anlatır. 19. yüzyılın başlarında, Avrupa ve Amerika\'da "soluk ve bembeyaz bir ten" en büyük zenginlik ve soyluluk belirtisiydi. Neden mi? Çünkü sadece tarlada köle gibi çalışan fakir işçilerin derisi güneşten yanar (bronzlaşır); zengin soylular ise şemsiyelerin altında güneşe çıkmadan oturabilirdi. Ancak Sanayi Devrimi ile işçiler kapalı ve karanlık fabrikalarda (güneşsiz) köle gibi çalışmaya başlayınca durum tamamen tersine döndü! Artık soluk tenli olmak fakir fabrika işçisi (hasta) olmak demekti. Zenginler (statü sahipleri) aniden deniz kenarlarına tatile gitmeye ve "bronzlaşmaya" başladılar. Çünkü bronz bir ten, "Benim karanlık fabrikalarda çalışmaya ihtiyacım yok, sahilde aylaklık yapacak (tatil yapacak) boş vaktim ve param var!" demenin yeni ve küstah göstergesiydi. İnsanlığın "güzellik" dediği o sahte maske, aslında dönemin ekonomik kibrinden (sınıf farkından) başka bir şey değildir.',
    questionStem: 'Veblen\'in "Aylak Sınıfın Teorisi"ne göre ten rengi algısının (soluk tenden bronz tene) değişmesi, güzellik algısı hakkında neyi ifşa eder?',
    options: [
      'İnsanların güneş ışığının D vitamini sağladığını tıbben geç keşfettiğini',
      'Toplumların güzellik (ve estetik) algısının aslında doğal bir zevk olmadığını; dönemin çalışma şartlarına göre şekillenen ve sadece "benim çalışmaya ihtiyacım yok (boş vaktim var)" kibrini yansıtan ekonomik bir "statü ve gösteriş" aracı olduğunu',
      'Tarım işçilerinin zamanla fabrikalara göre daha çok para kazandığını',
      'Avrupa ikliminin Sanayi Devrimi ile birlikte çok daha bulutlu ve kapalı bir hale geldiğini'
    ],
    correct: 1,
    explanation: 'Soluk tenin tarlaya, bronz tenin fabrikaya göre statü sembolü olması; güzelliğin/estetiğin aslında doğal değil, dönemin ekonomik şartlarına göre "aylaklık (çalışmamak) ve statü göstergesi" (kibir) olduğunu ifşa eder.'
  },
  {
    title: 'Sokrates ve Yazının İcadına İsyan',
    passage: 'Modern çağda bizler kitapları, ansiklopedileri ve yazıyı "medeniyetin" en büyük hafızası olarak kutsarız. Oysa felsefenin atası Sokrates (ve onu anlatan Platon\'un Phaidros diyalogu) yazının icadına büyük bir nefret ve korkuyla karşı çıkmıştır! Sokrates\'e göre yazı, insanın zihnini geliştiren bir ilaç değil, aksine onu felç eden sinsi bir zehirdir. O şöyle der: "İnsanlar yazıyı kullandıklarında artık bir şeyi akıllarında tutmaya (ezberlemeye) gerek duymayacaklar. Hafızalarını çalıştırmayacaklar; bilgilerini kendi içlerinde (ruhlarında) değil, dışarıdaki ölü ve soğuk kâğıt parçalarının üzerinde taşıyacaklar. Onlar bilgeliğe sahip olduklarını sanacaklar ama aslında sadece kelimelerin sahte ve ruhsuz gölgelerine (bilgi illüzyonuna) sahip olan içi boş birer kaba dönüşecekler." Sokrates\'in bu 2500 yıllık uyarısı; günümüzde beynimizi tamamen akıllı telefonlara ve Google arama çubuklarına (dış hafızaya) teslim edip, hiçbir şeyi kendi zihnimizde tutamadığımız o "dijital bunamamızın ve içi boşalmış bilgelik kibrimizin" en korkutucu kehanetidir.',
    questionStem: 'Sokrates\'in "Yazının İcadına" karşı çıkmasındaki temel felsefi gerekçesi parçada nasıl ifade edilmiştir?',
    options: [
      'Yazılı metinlerin zamanla krallar tarafından sansürlenecek ve yakılacak olması ihtimali',
      'Kelimelerin kâğıda dökülmesinin şiirin ve edebiyatın o müzikal (sözlü) estetiğini tamamen bozması',
      'Yazının, insanların hafızasını tembelleştirerek bilgiyi içselleştirmelerini (ruhlarına katmalarını) engellemesi ve onlara gerçek bilgelik yerine sadece dışarıda duran "sahte bir bilgi kibri (illüzyonu)" vermesi',
      'Papirüs ve kâğıt üretiminin dönemin ekonomik şartlarına göre çok maliyetli bir teknoloji olması'
    ],
    correct: 2,
    explanation: 'Sokrates\'in, yazının insan hafızasını tembelleştirip bilgiyi dışarıdaki "ölü kâğıtlara" yükleterek insanı "içi boş bir kaba (sahte bilgeliğe)" çevireceğini savunması asıl gerekçesidir.'
  },
  {
    title: 'Büyük Şikago Yangını (Felaketin Dikey Evrimi)',
    passage: '1871 yılının sıcak bir Ekim akşamında, Şikago şehrinde küçük bir ahırda başlayan yangın (efsaneye göre bir ineğin feneri devirmesiyle), tamamı ahşaptan inşa edilmiş olan o devasa şehri üç gün boyunca cehennem gibi yaktı. Şehrin üçte biri harabeye döndü, yüz bin kişi evsiz kaldı. Ancak o küllerin arasından, mimari tarihin en büyük devrimi doğdu! Şehir kül olduğu için mühendisler ve mimarlar, şehri yatay olarak ahşapla yeniden kurmak yerine; yepyeni, yanmaz, güçlü bir iskelet sistemi (Çelik Konstrüksiyon) kullanarak binaları gökyüzüne doğru (dikey olarak) inşa etmeye başladılar. Dünyanın "ilk Gökdelenleri" işte o devasa enkazın içinden doğdu. Büyük Şikago Yangını bize evrensel bir gerçeği kanıtlar: Bazen tarihteki o en korkunç, en yıkıcı alevler (felaketler), insanlığı köhne kalıplarından kurtarıp onu gökyüzüne tırmanmaya zorlayan en görkemli (ve zorunlu) evrimsel şok dalgasıdır.',
    questionStem: 'Büyük Şikago Yangını olayından çıkarılabilecek sosyo-tarihsel (ve felsefi) sonuç nedir?',
    options: [
      'Şehir planlamasında hayvanların ve ahırların şehir dışına çıkarılması gerektiği zorunluluğu',
      'Devasa bir felaketin (yıkımın), sadece bir trajedi değil; aynı zamanda eski (köhne) kalıpları yakarak insanlığı zorunlu, yepyeni ve çok daha görkemli bir yaratıcılığa (gökdelenlerin dikey evrimine) zorlayan bir sıçrama (katalizör) olması',
      'Çelik kullanımının ahşaba göre aslında çok daha ucuz ve kolay işlenebilir bir madde olduğunun anlaşılması',
      'Amerika\'nın yangınlardan sonra Avrupalı mimarlardan yardım istemek zorunda kalması'
    ],
    correct: 1,
    explanation: 'Yangının ahşap şehri kül edip, insanları çelik iskeletle gökdelenler inşa etmeye itmesi; felaketlerin eski kalıpları yıkarak yepyeni ve görkemli bir evrimsel sıçramaya (yaratıcılığa) zorlayan bir güç olduğunu gösterir.'
  },
  {
    title: 'Herculaneum Parşömenleri (Geçmişin Dijital Dirilişi)',
    passage: 'MS 79 yılında Vezüv yanardağı patladığında sadece Pompei değil, komşu sahil kasabası Herculaneum da küllerin altında kaldı. O kasabada lüks bir villanın kütüphanesindeki yüzlerce paha biçilmez parşömen rulosu, 500 derecelik ısıyla anında yanıp simsiyah "kömür kütlelerine" dönüştü. Arkeologlar yüzyıllar boyunca bu kömürleşmiş tomarları açmaya çalıştıkça, o narin kâğıtlar ellerinde ufalanıp küle döndü (okunamadı). Ta ki modern teknoloji devreye girene kadar! Bilim insanları o kömür rulolarını fiziksel olarak hiç açmadan, yüksek X-ışınları (parçacık hızlandırıcılar) ve "Yapay Zekâ" kullanarak, kömürün iç kıvrımlarındaki görünmez mürekkep izlerini sanal ortamda harf harf okumayı başardılar. Bu olay; geçmişin o donmuş ve yanmış sessizliğinin, modern aklın ve ışığın teknolojisiyle 2000 yıl sonra yeniden konuşmaya başladığı, tarihin ölümden sanal olarak diriltildiği o en epik (ve sarsılmaz) bilimsel diriliştir.',
    questionStem: 'Herculaneum Parşömenleri\'nin günümüzde okunabilmesi süreci, tarih ve modern teknoloji arasındaki ilişkiyi nasıl tanımlar?',
    options: [
      'Tarihçilerin eski dilleri çevirmede modern bilgisayarlardan hala daha iyi olduklarını',
      'Yanardağ patlamalarının aslında antik eserleri tamamen yok etmeyip sadece koruma altına aldığını',
      'Fiziksel olarak yok olmuş (kömürleşmiş) ve aşılamaz sanılan o suskun tarihsel engelin; dokunmaya gerek kalmadan, ileri teknoloji ve yapay zekâ sayesinde "sanal olarak (mucizevi bir şekilde)" çözülüp (diriltilip) tarihin yeniden konuşturulmasını',
      'Antik Roma edebiyatının Yunan felsefesinden çok daha geride kalmış basit metinlerden oluştuğunu'
    ],
    correct: 2,
    explanation: 'Dokunulduğunda dağılan kömür rulolarının X-ışınları ve yapay zekâyla açılmadan (sanal olarak) okunması; aşılamaz sanılan geçmişin/ölümün, modern teknoloji sayesinde çözülüp diriltildiğini tanımlar.'
  },
  {
    title: 'Sykes-Picot: Çizgilerle Yaratılan Cehennem',
    passage: 'Birinci Dünya Savaşı\'nın ortasında (1916), İngiliz diplomat Mark Sykes ve Fransız diplomat François Georges-Picot, gizlice bir odaya kapandılar. Önlerine Ortadoğu\'nun koca haritasını koydular ve ellerine bir "cetvel" alıp, o binlerce yıllık dağları, nehirleri ve çölleri dümdüz (suni) çizgilerle ikiye böldüler. Çizdikleri o düz çizgiler (sınırlar); bölgede yaşayan Arapların, Kürtlerin, Şiilerin veya Sünnilerin etnik ve kültürel gerçekliklerini (dağılımlarını) zerre kadar umursamıyordu; sadece petrolü ve sömürge menfaatlerini hesaplıyordu. Cetvelle çizilen bu "suni sınırlar", birbirine düşman kabileleri aynı devlete tıktı, aynı aileleri ise tel örgülerle böldü. Bugün Ortadoğu\'da bitmek bilmeyen o kanlı kaos, savaşlar ve bitmeyen gözyaşları; aslında kâğıt üzerinde, rahat koltuklarında oturan iki kibirli Batılı diplomatın, insan hayatını ve coğrafyayı sadece bir "mühendislik oyunu (kalem izi)" sanarak yarattığı o yüzyıllık yapay cehennemin kanayan faturasıdır.',
    questionStem: 'Sykes-Picot Antlaşması (cetvelle çizilen sınırlar), Ortadoğu coğrafyası ve emperyalizm bağlamında neyin en trajik kanıtıdır?',
    options: [
      'İngiliz ve Fransız diplomatların o dönemde haritacılık biliminde çok geri kalmış olduklarının',
      'Bölgedeki halkların kendi aralarında anlaşamayarak dışarıdan bir otoriteye ihtiyaç duyduklarının',
      'Emperyalist (sömürgeci) kibrin; bölgenin kültürel ve tarihi (organik) gerçekliklerini hiçe sayarak masa başında kâğıda çizdiği o "suni (düz) çizgilerin", milyonlarca insanı yüzyıllık kanlı bir kaosa ve yapay bir cehenneme hapsettiğinin',
      'Ortadoğu\'daki petrol kaynaklarının o dönemde henüz tam olarak keşfedilemediğinin'
    ],
    correct: 2,
    explanation: 'Kültürel gerçekliği yok sayıp sadece çıkarlar için cetvelle çizilen o suni haritaların; emperyalist kibrin, insanları nasıl yüzyıllık bir kaosa (yapay bir cehenneme) hapsettiğinin kanıtı olduğu vurgulanır.'
  },
  {
    title: 'Solvay Konferansı (Zekânın Fotoğrafı)',
    passage: '1927 yılında Belçika\'da düzenlenen Solvay Konferansı\'nda çekilen o meşhur fotoğraf, insanlık tarihinin ulaştığı en yoğun ve en ağır "zekâ" toplanmasıdır. Bir merdivende poz veren 29 kişinin içinde Albert Einstein, Marie Curie, Max Planck, Niels Bohr, Erwin Schrödinger ve Werner Heisenberg gibi bilim tarihinin tanrıları bir aradaydı ve bu kişilerin 17\'si Nobel ödüllüydü! Ancak o fotoğraf sadece dâhilerin bir pozu değildi; o fotoğraf, evrene bakışımızın parçalanıp yeniden yazıldığı o en kanlı felsefi savaşın (Kuantum mekaniği tartışmalarının) arenasıydı. Einstein o masada "Tanrı evrenle zar atmaz!" diyerek evrenin belirlenebilir (kesin) kuralları olduğuna isyan ediyor; Niels Bohr ise ona "Tanrı\'ya ne yapacağını söylemeyi bırak!" diye kükrüyordu. O tek bir fotoğraf karesi; evrenin o kusursuz sanılan devasa saat mekanizmasının sökülüp, yerine o tuhaf, öngörülemez ve olasılıklara dayalı Kuantum denizinin (kaosun) getirildiği o tarihi cinayetin (ve devrimin) donmuş belgesidir.',
    questionStem: '1927 Solvay Konferansı fotoğrafının çekildiği o atmosfer, bilim ve felsefe tarihi açısından neyin "arena (çarpışma)" noktasıdır?',
    options: [
      'Avrupa ülkelerinin Birinci Dünya Savaşı sonrasında barış ve kardeşlik mesajı vermek için bir araya gelmesinin',
      'Einstein\'ın (mutlak/belirlenimci evren) görüşleri ile Kuantum fiziğinin (olasılık/kaos) görüşlerinin çarpıştığı; evren algımızın kökünden parçalanıp yeniden yazıldığı (klasik fiziğin tahtının devrildiği) o büyük entelektüel savaşın',
      'Bilim insanlarının sanat ve felsefeyi tamamen reddederek sadece matematiksel verilere tapınmasının',
      'Kadın bilim insanlarının (Marie Curie gibi) akademi dünyasında ilk kez kabul edilmeye başlanmasının'
    ],
    correct: 1,
    explanation: 'Einstein ("Tanrı zar atmaz") ile Bohr ("Tanrıya ne yapacağını söyleme") arasındaki tartışmanın (mutlak evren vs kuantum/olasılık); evren algısının parçalanıp yeniden yazıldığı (klasik fiziğin yıkıldığı) o en büyük entelektüel savaş olduğu vurgulanır.'
  },
  {
    title: 'Mesa Verde (İhtişamı Terk Edebilmek)',
    passage: 'Kuzey Amerika\'da günümüz Colorado sınırlarında yaşayan kadim Anasazi halkı, 12. yüzyılda uçurumların ve devasa kayalıkların içine, ulaşılması imkânsız ama bir o kadar da muazzam çok katlı taş saraylar (Mesa Verde) inşa ettiler. İnanılmaz bir mimari dehayla doğanın sarp bağrına sığınmışlardı. Ancak 1300\'lü yıllarda çok tuhaf bir şey oldu. Büyük ve uzun süreli bir kuraklık baş gösterdiğinde; bu halk o devasa, kan ter içinde inşa ettikleri şaheser kalelerine saplanıp kalmak, orada açlıktan (inatla) ölmek yerine; o muhteşem şehirlerini, eşyalarını ve tapınaklarını arkalarına bile bakmadan "bir gecede" sessizce terk ettiler ve sırra kadem bastılar. Mesa Verde\'nin o boş taş odaları, insanoğluna o en zor (ve en bilgece) felsefeyi fısıldar: Gerçek güç, bir şeyler inşa edip ona mülkiyet kibriyle (ölümüne) sarılmak değildir. Asıl güç ve bilgelik; doğa seni uyardığında, kendi ellerinle yaptığın o en ihtişamlı (ve kibirli) eseri bile hayatta kalmak uğruna "terk edebilme" ve vazgeçebilme erdemidir.',
    questionStem: 'Anasazi halkının Mesa Verde\'deki devasa (ve korunaklı) şehirlerini terk edip gitmesi, insan kibri ve varoluşu hakkında nasıl bir "bilgelik" dersi verir?',
    options: [
      'Dağlık ve kayalık bölgelerin insan sağlığı (oksijen) açısından aslında çok zararlı olduğunu',
      'Mimari yapıların her zaman düşman kabilelerin saldırılarına karşı yetersiz kalacağını',
      'İnsanın inşa ettiği (ve sahip olduğu) o en görkemli, eşsiz ve kibirli mülkiyete inatla (ve ölümüne) sarılmak yerine; doğanın kanunları (kuraklık) karşısında hayatta kalmak için o ihtişamdan "vazgeçebilme (terk edebilme)" erdemine (bilgeliğine) sahip olduğunu',
      'Tarımsal aletlerin gelişmemesinin göçebe yaşamı kalıcı hayattan daha üstün kıldığını'
    ],
    correct: 2,
    explanation: 'Emeği ve ihtişamı (kibri) bir kenara bırakıp sırf hayatta kalmak için şehri terk edebilmeleri; inatla mülkiyete/kibre sarılmak yerine vazgeçebilme erdeminin (bilgeliğin) asıl güç olduğunu anlatır.'
  },
  {
    title: 'Fermat\'nın Son Teoremi (Aklın Sınırları)',
    passage: '1637 yılında Fransız matematikçi Pierre de Fermat, okuduğu bir kitabın kenarına basit gibi görünen bir denklem yazdı (xn + yn = zn, n>2 için tamsayı çözümü yoktur) ve altına şu o efsanevi, kışkırtıcı (ve kibirli) notu düştü: "Bu teoremin gerçekten de harika bir kanıtını buldum, ama kitabın bu kenar boşluğu onu yazmak için çok dar." Bu tek bir cümle, o günden sonra dünyanın en parlak beyinlerini, Euler\'den Gauss\'a kadar tüm dâhileri 358 yıl boyunca çıldırttı! Binlerce matematikçi o "dar kenar boşluğuna sığmayan" ispatı bulmak için ömrünü tüketti, delirip gidenler oldu. Fermat belki gerçekten çözmüştü, belki de büyük bir şaka yapmıştı. Teorem ancak 1995 yılında Andrew Wiles tarafından 130 sayfalık, modern (Fermat\'ın o dönemde bilmesinin imkânsız olduğu) matematiği kullanarak çözülebildi. Fermat\'ın Son Teoremi; basit bir notun (ve küçük bir kibrin), koca bir insanlık aklını asırlar boyunca kendi sınırlarında nasıl çaresizce kırbaçlayıp, uykusuz ve takıntılı bir zindana (labirente) hapsedebildiğinin en şiirsel (ve zalim) kanıtıdır.',
    questionStem: 'Fermat\'nın Son Teoremi\'nin 358 yıl boyunca çözülememesi (ve Fermat\'ın kenar notu), matematik ve insan aklı hakkında neyin trajikomik bir metaforudur?',
    options: [
      'Matematik biliminin diğer bilim dallarına göre (fizik ve kimya) çok daha yavaş ilerleyen sıkıcı bir dal olmasının',
      'Basit gibi görünen kışkırtıcı bir cümlenin (küçük bir kibrin); dünyanın en üstün zekâlarını bile yüzlerce yıl boyunca uykusuz, takıntılı ve içinden çıkılmaz bir akıl labirentine (çaresizliğe) hapsederek onların sınırlarıyla alay edebilmesinin',
      'Eski çağlardaki bilim insanlarının modern bilim insanlarına göre zihinsel (IQ) olarak çok daha üstün kapasitelere sahip olduğunun mutlak ispatı',
      'Matematiksel formüllerin zamanla geçerliliğini yitirerek tamamen anlamsız sayılara dönüştüğünün'
    ],
    correct: 1,
    explanation: 'Fermat\'ın "yerim dar" notunun dâhileri 358 yıl çıldırtması; basit ve kışkırtıcı bir kibrin, insan aklını nasıl takıntılı, çaresiz ve içinden çıkılmaz bir zindana (labirente) hapsedip onunla alay edebildiğinin metaforudur.'
  }
];

export const felsefeParagrafSorulari31: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_31.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_31[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe31-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_32 = [
  {
    title: 'Brandolini Yasası (Saçmalığın Asimetrisi)',
    passage: 'İnternet çağında bir yalanın neden doğrudan (hakikatten) çok daha hızlı yayıldığını merak ettiniz mi? İtalyan yazılımcı Alberto Brandolini bu korkunç gerçeği tek bir formülle, "Saçmalık Asimetrisi Prensibi" ile açıklar: "Bir saçmalığı (yalanı veya iftirayı) çürütmek için harcanması gereken enerji, o saçmalığı üretmek için harcanan enerjiden en az bir büyüklük sırası daha fazladır." Cahil birinin sosyal medyada "Dünya düzdür" diye bir yalan uydurması sadece 5 saniyesini alır. Ancak bir bilim insanının bu saçmalığı çürütmek için sayfalarca makale yazması, deney yapması ve kanıt sunması günlerini alır. Brandolini Yasası, hakikatin neden her zaman yenilmeye mahkûm olduğunu fısıldar: Yalan bedava, hızlı ve sınırsızken; hakikat her zaman yavaş, pahalı ve yorgundur.',
    questionStem: 'Brandolini Yasası\'na göre, dijital çağda yalanların (dezenformasyonun) gerçeklere galip gelmesinin asıl matematiksel (ve psikolojik) nedeni nedir?',
    options: [
      'İnsanların bilimsel makaleleri okuyacak kadar yüksek bir eğitim seviyesine sahip olmaması',
      'Bir yalanı (saçmalığı) üretmenin son derece zahmetsiz ve saniyelik bir iş olmasına karşın; o yalanı çürütüp hakikati kanıtlamanın devasa bir zaman, emek ve enerji gerektirmesi (asimetri)',
      'Hükümetlerin ve medyanın her zaman yalan haberleri (sansasyonları) destekleyen algoritmalar kullanması',
      'Doğru bilginin genellikle karmaşık matematiksel formüllerle yazıldığı için anlaşılamaması'
    ],
    correct: 1,
    explanation: 'Yalan üretmenin 5 saniye, onu çürütmenin (hakikati kanıtlamanın) ise günler sürmesi; yalan ile hakikat arasındaki o yorucu ve adaletsiz enerji farkını (asimetriyi) açıklar.'
  },
  {
    title: 'Korsakoff Sendromu (Uydurulmuş Geçmiş)',
    passage: 'Ağır alkolizmin beyni tahrip etmesiyle ortaya çıkan "Korsakoff Sendromu"ndaki hastalar, yakın geçmişe dair anılarını tamamen kaybederler. Ancak beyinleri bu "karanlık boşluk" gerçeğiyle yüzleşmek (hafıza kaybını kabullenmek) yerine dehşet verici bir savunma mekanizması geliştirir: Konfabulasyon (Masallama). Hastaya "Dün ne yaptın?" diye sorulduğunda, hafızasındaki o boşluğu doldurmak için anında, tamamen kurgusal, absürt ama sarsılmaz bir inançla savunduğu yalanlar (sahte anılar) uydurmaya başlar. "Dün Paris\'te kralla yemek yedim" der ve buna kendisi de %100 inanır! Korsakoff hastaları bize zihnimizin en kırılgan sırrını fısıldar: İnsan beyni, "hiçlikten (bilmemekten)" öylesine ölümcül bir dehşet duyar ki; o karanlık boşluğa düşmektense, kusursuz bir özgüvenle kendi uydurduğu sahte bir yalana (kurguya) tapınmayı tercih eder.',
    questionStem: 'Korsakoff Sendromu\'ndaki "Konfabulasyon (sahte anı uydurma)" refleksi, insan beyninin hangi temel varoluşsal korkusundan beslenir?',
    options: [
      'Alkolün sinir hücrelerinde yarattığı kimyasal bir zehirlenmeyle insanın agresifleşmesi korkusundan',
      'Toplum tarafından dışlanma ve sevilmeme korkusundan',
      'Hafızadaki o karanlık "boşluk (hiçlik/bilmeme)" durumuyla yüzleşmenin getirdiği o devasa dehşetten kaçma; bunun yerine uydurma bir yalanla kendini güvende hissetme ihtiyacından',
      'Geçmişte işlenen suçların ve günahların cezasını çekme korkusundan'
    ],
    correct: 2,
    explanation: 'Beynin anıları unuttuğunu (hiçliği) kabullenmek yerine anında sahte anılar (yalanlar) uydurması; zihnin boşluktan/hiçlikten duyduğu o ölümcül korkuyu ve yalanla kendini güvende hissetme refleksini ifşa eder.'
  },
  {
    title: 'Abilene Paradoksu (Nezaket Tuzağı)',
    passage: 'Teksas\'ta sıcak bir yaz günü, dört kişilik bir aile verandada serinlerken biri "Hadi 50 mil ötedeki Abilene\'e yemeğe gidelim" der. Dört kişi o kavurucu sıcakta tozlu yolları aşar, berbat bir yemek yiyip perişan halde eve dönerler. Evde biri "Çok kötüydü, ben aslında hiç gitmek istememiştim" diye itiraf eder. Diğeri "Ben de sadece siz istiyorsunuz diye kabul ettim" der. Sonunda anlaşılır ki; aslında gruptaki hiç kimse Abilene\'e gitmek istememiştir! Herkes, diğerlerinin gitmek istediğini sanarak "uyum sağlamak (nezaket göstermek)" uğruna kendi isteğini susmuştur. Yönetim bilimindeki "Abilene Paradoksu", kitlelerin veya şirketlerin en trajik zehridir: Bir gruptaki herkesin içinden reddettiği, kimsenin istemediği aptalca bir karar; sırf kimse "oyunbozan" olmak istemediği (sahte bir nezaket sergilediği) için oybirliğiyle alınıp felaketle sonuçlanabilir.',
    questionStem: 'Abilene Paradoksu, grup dinamikleri (ve karar alma süreçleri) hakkında hangi yıkıcı "sosyal yanılgıyı" kanıtlar?',
    options: [
      'Grup liderlerinin her zaman kendi bencil çıkarlarını diğer üyelere zorla dayattığı gerçeğini',
      'İnsanların (uyumsuz görünmeme korkusuyla) birbirlerinin asıl niyetlerini yanlış okuyarak; aslında gruptaki hiç kimsenin istemediği yıkıcı (aptalca) bir kararı sırf "sahte bir nezaket ve uyum" uğruna oybirliğiyle alabilme (kolektif felç) yanılgısını',
      'Sıcak hava ve fiziksel yorgunluğun insanlarda mantıklı karar alma yetisini tamamen bitirdiğini',
      'Aile içindeki yaş hiyerarşisinin her zaman yanlış kararlara yol açtığını'
    ],
    correct: 1,
    explanation: 'Kimsenin istemediği bir yere sırf "diğerleri istiyor sanarak (uyum uğruna)" gidilmesi; sahte nezaket ve uyumsuz olma korkusunun kolektif bir felakete (hiç kimsenin istemediği karara) yol açtığını kanıtlar.'
  },
  {
    title: 'Echo Miti (Yankının Laneti)',
    passage: 'Yunan mitolojisinde orman perisi (Nymph) Echo, gevezeliğiyle tanrıça Hera\'yı o kadar sinirlendirir ki, Hera onu korkunç bir şekilde lanetler: Echo artık asla kendi cümlelerini kuramayacak, sadece başkalarının ona söylediği "son birkaç kelimeyi" tekrarlayabilecektir! (Yankı kelimesi buradan gelir). Echo, âşık olduğu Narkissos\'a aşkını haykırmak ister ama dili mühürlüdür; adam ona ne söylerse sadece onun son kelimelerini çaresizce tekrar eder ve sonunda acıdan eriyerek görünmez bir sese dönüşür. Echo\'nun laneti; modern çağda kendi düşüncesini, kendi eleştirel aklını ve orijinal sesini kaybederek; sadece toplumun, medyanın veya ideolojilerin kendisine sunduğu o hazır kelimeleri (sloganları) tekrarlayan; kendi ruhu olmayan modern insanın (yankı odalarındaki o papağanların) trajik ve dilsiz efsanesidir.',
    questionStem: 'Mitolojideki "Echo\'nun Laneti (Sadece başkalarının son sözünü tekrar etme)", günümüz insanı için neyin felsefi bir metaforudur?',
    options: [
      'İletişim teknolojilerinin (telefonların) ses dalgalarını doğaya zarar vermeden nasıl ilettiğinin',
      'Aşk acısının insanları fiziksel olarak eriterek doğanın bir parçasına (sese) dönüştürdüğünün',
      'Bireyin kendi özgün aklını, düşüncesini ve eleştirel sesini kaybederek; sadece dışarıdan (sistemden/medyadan) duyduğu hazır kalıpları (sloganları) papağan gibi tekrarlayan ruhsuz bir "yankıya" dönüşmesinin',
      'Ormanlarda yüksek sesle konuşmanın doğa ruhlarını her zaman kızdıracağının'
    ],
    correct: 2,
    explanation: 'Echo\'nun kendi cümlesini kuramayıp sadece söylenenin sonunu tekrarlaması; modern insanın kendi özgün düşüncesini (sesini) yitirip sadece medyanın/sistemin sloganlarını tekrarlayan ruhsuz bir "yankı" olmasının metaforudur.'
  },
  {
    title: 'Hitchens\'ın Usturası (Kanıtın Yükü)',
    passage: 'Felsefede tartışmaların kaderini belirleyen kurallar vardır. Ünlü gazeteci ve düşünür Christopher Hitchens, her türlü dogmayı, komplo teorisini ve mistik yalanı tek kılıç darbesiyle kesip atan o sarsılmaz kuralı ("Hitchens\'ın Usturası") şöyle formüle etmiştir: "Kanıtsız olarak ileri sürülen her iddia, yine kanıtsız olarak reddedilebilir." Eğer biri size gelip "Mars\'ın merkezinde çay içen mor elfler var, hadi olmadığını kanıtla!" derse, o elflerin olmadığını kanıtlamak sizin (bilimin) görevi değildir. İddiayı (yükü) ortaya atan kişi kanıt sunmuyorsa, sizin o iddiayı ciddiye alma, çürütmeye çalışma veya ona saygı duyma zorunluluğunuz yoktur. Hitchens\'ın Usturası; zihnimizi rehin almaya çalışan şarlatanlara, kanıtsız dogmalara ve "aksini ispatla" kibrine karşı aklın çektiği en acımasız ve en özgürleştirici resttir.',
    questionStem: 'Hitchens\'ın Usturası ("Kanıtsız iddia kanıtsız reddedilir") kuralı, mantık ve tartışma felsefesinde asıl olarak neyi güvence altına alır?',
    options: [
      'Sadece üniversite mezunlarının bilimsel tartışmalara katılabileceği kuralını',
      'İspat yükünün (kanıtlama zorunluluğunun) iddiayı reddedene değil, iddiayı "ortaya atana" ait olduğunu; böylece aklın, kanıtsız (dogmatik) şarlatanlıklara ve safsatalara karşı korunmasını',
      'Evrendeki her şeyin mutlaka fiziksel bir laboratuvar kanıtı olmak zorunda olduğunu',
      'Eski çağlardan günümüze ulaşan mitolojik hikâyelerin aslında tamamen gerçek olduğunu'
    ],
    correct: 1,
    explanation: 'Bir iddiayı ortaya atanın kanıt sunmak zorunda olduğu (ispat yükü); kanıtsız iddiaların ciddiye alınmadan reddedilebileceği (dogmalara karşı aklın korunması) kuralıdır.'
  },
  {
    title: 'Hiper-Normalleşme (Sahte Düzeni Yaşatmak)',
    passage: '1980\'lerin sonlarında Sovyetler Birliği içeriden tamamen çürümüştü. Ekonomi iflas etmiş, teknoloji durmuş, ideoloji koca bir yalana dönüşmüştü. Ancak antropolog Alexei Yurchak\'ın "Hiper-Normalleşme" (Hypernormalisation) olarak adlandırdığı kan dondurucu bir tiyatro yaşanıyordu: Politikacılar sistemin çöktüğünü biliyordu. Halk da sistemin çöktüğünü biliyordu. Politikacılar, halkın her şeyi bildiğini biliyordu; halk da politikacıların onların bildiğini bildiğini biliyordu! Ancak alternatif bir dünya hayal edemedikleri için, herkes "sistem kusursuz çalışıyormuş gibi" yapmaya (o sahte tiyatroyu oynamaya) devam etti. Yalan o kadar devasa ve kapsayıcıydı ki, yeni bir "normal" (Hiper-Normal) olmuştu. Bu kavram bugün bizim dünyamıza da bir aynadır: Finansal krizlerin, iklim felaketlerinin ve adaletsizliğin ortasında herkes gerçeği bilir; ancak kimse çarkın dışına çıkmaya cesaret edemediği için hepimiz o sahte gösteriyi (yalanı) yaşatmaya devam ederiz.',
    questionStem: 'Hiper-Normalleşme kavramı, çöken bir sistem karşısında toplumun (ve yöneticilerin) sergilediği hangi "patolojik (hastalıklı)" durumu tanımlar?',
    options: [
      'Toplumun çöken sisteme anında büyük silahlı devrimlerle karşılık vermesini',
      'Sistemin (ve yalanın) çöktüğünü herkesin "açıkça" bilmesine rağmen, alternatif (yeni) bir gerçeklik hayal edilemediği için, tüm toplumun sanki her şey yolundaymış gibi o sahte tiyatroyu oynamaya (yalanı normalleştirmeye) devam etmesi kâbusunu',
      'Yöneticilerin ekonomi bozulduğunda hemen istifa edip ülkeyi terk etme eğilimini',
      'Teknolojik gelişmelerin hızlanmasıyla toplumun yalan haberleri saniyeler içinde ayırt edebilmesini'
    ],
    correct: 1,
    explanation: 'Herkesin yalanı bilmesine rağmen alternatif bulamadığı için "sistem çalışıyormuş gibi" yapmaya devam etmesi (yalanın yeni normal olması); Hiper-Normalleşme\'nin asıl patolojik durumudur.'
  },
  {
    title: 'Hedonik Koşu Bandı (Mutluluk İllüzyonu)',
    passage: 'Hepimiz kendimize şu yalanı söyleriz: "Şu terfiyi alırsam, şu arabayı alırsam veya şu kişiyle evlenirsem hayatım boyunca mutlu olacağım." Psikologlar bunu araştırdığında o sarsıcı "Hedonik Koşu Bandı" (Hedonic Treadmill) kuralını buldular. İster piyangoyu kazanıp milyoner olun, ister feci bir kaza geçirip felç kalın; insan beyni birkaç ay süren geçici bir şoktan sonra, o yeni duruma "adapte olur" ve mutluluk seviyeniz kaza geçirmeden (veya piyango çıkmadan) önceki eski, sıradan fabrika ayarlarına (temel seviyesine) geri döner! Tıpkı bir koşu bandında kan ter içinde koşan ama aslında bir milim bile ileri gitmeyen bir sporcu gibi; insanoğlu da yeni eşyalar, yeni aşklar ve yeni statüler uğruna ömrünü tüketerek koşar, ancak günün sonunda hep aynı tatminsizliğin (aynı boşluğun) sıfır noktasına geri döner. Mutluluk ulaşılacak bir zirve değil, sürekli adapte olunan bir illüzyondur.',
    questionStem: 'Hedonik Koşu Bandı (Hedonic Treadmill) teorisi, insanın "mutluluk" arayışı hakkında hangi trajik gerçeği ispatlar?',
    options: [
      'Piyango kazanan insanların her zaman kazadan felç kalan insanlardan daha depresif olduğunu',
      'Fiziksel sporların ve koşmanın beyindeki endorfin seviyesini kalıcı olarak düşürdüğünü',
      'İnsanın hedeflerine ulaştığında (veya felaketler yaşadığında) kalıcı bir hisse sahip olamayacağını; beynin her yeni duruma hızla adapte olarak bizi sürekli aynı (tatminsiz) başlangıç noktasına döndürdüğünü',
      'Mutluluğun sadece çok para kazanmakla doğrudan orantılı ve kalıcı bir his olduğunu'
    ],
    correct: 2,
    explanation: 'Ne olursa olsun (piyango veya felaket) beynin o duruma adapte olup eski başlangıç noktasına (tatminsizliğe) geri dönmesi; mutluluk arayışının kalıcı bir zirve değil, bitmeyen (koşu bandı gibi) bir adaptasyon/illüzyon olduğunu ispatlar.'
  },
  {
    title: 'Maymun Pençesi (Dileklerin Kâbusu)',
    passage: 'W.W. Jacobs\'un efsanevi korku öyküsü "Maymun Pençesi"nde, yaşlı bir çifte üç dilek hakkı veren sihirli, kurumuş bir maymun pençesi hediye edilir. Çift, borçlarını ödemek için masumca "200 sterlin" diler. Ertesi gün kapı çalar; oğullarının çalıştığı fabrikada bir makinenin içine düşerek korkunç bir şekilde parçalanarak öldüğünü söylerler ve şirket tazminat olarak aileye tam "200 sterlin" öder! Edebiyattaki bu "Maymun Pençesi" motifi, insanın hırsına ve doğanın kanunlarını bükme arzusuna verilmiş en karanlık felsefi cevaptır: Evren, sizden esirgediği bir şeyi (haksız bir dileği) size vermek zorunda kalırsa, o isteğinizi (en korkunç ve ironik bedelleri ödeterek) karanlık bir lanete çevirerek verir. Bedeli ödenmemiş (ve hakedilmemiş) hiçbir arzunun sonu aydınlık olamaz.',
    questionStem: 'Maymun Pençesi öyküsündeki "dileğin gerçekleşme şekli", insan arzuları ve evren ilişkisi hakkında neyi sembolize eder?',
    options: [
      'Sihirli eşyaların her zaman zenginlik ve mutluluk getiren doğaüstü lütuflar olduğunu',
      'İnsanın emek vermeden (kısa yoldan ve hırsla) elde etmek istediği dileklerin; doğanın (veya kaderin) kanunları tarafından en acımasız, ironik ve korkunç bedeller ödetilerek bir lanete dönüştürüleceği gerçeğini',
      'Fabrikalardaki iş güvenliği eksikliğinin 19. yüzyılda had safhada olduğunu',
      'Maymunların efsanelerde her zaman insanlara kötülük yapmak için yaratılmış varlıklar olduğunu'
    ],
    correct: 2,
    explanation: 'Borç ödemek için dilenen paranın, oğullarının ölümü (tazminat) olarak korkunç bir bedelle gelmesi; emek verilmeden hırsla istenen dileklerin (doğanın kuralları büküldüğünde) acımasız bir lanete dönüşeceğini sembolize eder.'
  },
  {
    title: 'Gell-Mann Amnezisi (Medya Körlüğü)',
    passage: 'Ünlü yazar Michael Crichton, fizikçi arkadaşı Murray Gell-Mann ile sohbet ederken medyanın o "ikiyüzlü ve felç edici" etkisini şu efsanevi örnekle tanımlar (Gell-Mann Amnezi Etkisi): Gazeteyi açarsınız ve tamamen uzmanı olduğunuz (örneğin nükleer fizik veya kendi mesleğiniz) bir konu hakkında yazılmış bir makale okursunuz. Makale o kadar cehaletle, yanlışlarla ve uydurmalarla doludur ki sinirden çıldırırsınız. "Gazeteciler hiçbir şey bilmiyor!" diye bağırırsınız. Ancak o haberi bitirip, gazetenin sayfasını çevirip "Ortadoğu Politikaları" veya "Ekonomi" sayfasına geldiğinizde, o saniye mucizevi bir "hafıza kaybı (amnezi)" yaşarsınız! Az önce nükleer fizik hakkında zırvalayan (yalancı) o aynı gazetenin, ekonomi veya siyaset hakkında yazdığı her kelimeye bir anda "mutlak hakikat"miş gibi körü körüne inanırsınız. Bu etki, insan zihninin gerçeği aramaktansa; otoriteye (matbaanın mürekkebine) tapınmaya ne kadar gönüllü ve aptalca bir zaafı olduğunu kanıtlar.',
    questionStem: 'Gell-Mann Amnezisi (Medya Körlüğü), insanın okuduğu haberlere karşı sergilediği hangi "trajikomik çelişkiyi" ifşa eder?',
    options: [
      'İnsanların uzun makaleleri okurken dikkat sürelerinin çok kısa olduğu için son kısımları hatırlayamaması',
      'Kendi uzmanlık alanındaki haberin yalan ve cehaletle dolu olduğunu anlayan (eleştiren) kişinin, sayfayı çevirdiği an o eleştirel aklını unutup (amnezi yaşayıp) bilmediği konulardaki haberlere aynı gazete üzerinden körü körüne inanma çelişkisini',
      'Gazetecilerin genellikle fizik ve matematik alanında başarısız ancak siyaset alanında çok bilgili olması',
      'Yaşlı insanların gazetelerdeki küçük puntolu yazıları okurken yaşadıkları fiziksel hafıza kaybı'
    ],
    correct: 1,
    explanation: 'Kendi bildiği konuda yalan yazan medyaya, sayfayı çevirince bilmediği konuda (körü körüne) inanması; insanın otorite (matbaa) karşısında o eleştirel aklını anında kaybetme (amnezi) çelişkisini ifşa eder.'
  },
  {
    title: 'Yıldız Tozu (Kozmik Kimlik)',
    passage: 'İnsanlık binlerce yıl kendini doğadan kopuk, gökten zembille inmiş ayrıcalıklı (tanrısal) bir varlık sandı. Ancak astrofizik bize o ezici ve şairane gerçeği tokat gibi çarptı: Kanımızdaki demir, kemiklerimizdeki kalsiyum, beynimizdeki karbon ve aldığımız her nefesteki oksijen... Bunların hiçbiri Dünya\'da oluşmadı! Bunların hepsi, milyarlarca yıl önce uzayın karanlığında kendi içine çöküp patlayan devasa ve yaşlı yıldızların (Süpernovaların) nükleer fırınlarında pişirildi ve o patlamayla uzaya saçıldı. Bizler bu evrenin dışından gelen yabancılar değiliz; biz, bizzat o milyarlarca yıllık yıldızların patlamış cesetlerinden (küllerinden) doğduk. Astrofizikçi Carl Sagan\'ın o efsanevi sözüyle: "Bizler yıldız tozundan yapıldık; biz, evrenin kendi kendini tanımak (ve hissetmek) için yarattığı o bilinçli parçayız." Bu, insanın egosunu ezen ama onu kâinatla sonsuz bir şiirle birleştiren en büyük bilimsel uyanıştır.',
    questionStem: 'Carl Sagan\'ın "Bizler yıldız tozundan yapıldık" sözü, insanoğlunun evrendeki konumu hakkında nasıl bir felsefi aydınlanma (vizyon) sunar?',
    options: [
      'Güneşin radyasyonunun insan genetiğini bozarak yeni hastalıklara yol açtığını',
      'İnsanın doğadan kopuk (ayrıcalıklı) bir varlık olduğu kibrini yıkarak; bedeniyle ve atomlarıyla bizzat evrenin organik (yıldızlardan doğan) bir parçası olduğu, "evrenin kendini deneyimleyen bilinci" olduğu gerçeğini (bütünleşmeyi)',
      'Uzaydan gelen göktaşlarının dünyada yaşamı yok edeceği korkusunu',
      'Dünyadaki altın ve demir madenlerinin uzaylılar tarafından bilerek dünyamıza bırakıldığını'
    ],
    correct: 1,
    explanation: 'Bedenimizdeki elementlerin yıldız patlamalarından gelmesi; insanın evrenden ayrı/kopuk bir varlık değil, evrenin bizzat kendisinden (yıldızlardan) doğmuş "kâinatın kendini deneyimleyen bilinci" olduğu gerçeğini aydınlatır.'
  },
  {
    title: 'Philae Uzay Aracı (Sonsuz Uyku)',
    passage: '2014 yılında, insanlık tarihinin en çılgın ve romantik uzay operasyonlarından biri gerçekleşti. Dünyadan tam 10 yıl önce fırlatılan ve 500 milyon kilometre yol giden "Rosetta" uzay aracı, saatte 135.000 km hızla giden bir kuyrukluyıldızın (67P) yörüngesine girdi. Ardından minicik bir sonda olan "Philae"yi o karanlık ve buzlu kayanın üzerine fırlattı. Ancak Philae, zıpkınları çalışmadığı için yüzeyde iki kez sekti ve güneş almayan karanlık bir yarığın içine (gölgeye) düştü! Bilim insanları nefeslerini tuttu. Philae o zifiri karanlıkta sadece 60 saat çalışabildi, elindeki tüm bilimsel verileri hızla Dünya\'ya fırlattı ve güneş panelleri şarj olamadığı için bataryaları biterek o sonsuz, dondurucu karanlıkta (milyarlarca yıl sürecek) ebedi uykusuna yattı. Philae; insanoğlunun o sınır tanımaz, cüretkâr merakının ve evrenin ıssızlığında donarak ölen o romantik, metalik hüznünün sembolüdür.',
    questionStem: 'Philae uzay sondasının kuyrukluyıldız üzerindeki (karanlığa düşüp bataryasının bitmesi) macerası, yazar tarafından neyin sembolü olarak tasvir edilmiştir?',
    options: [
      'Güneş enerjisi sistemlerinin uzay araştırmaları için aslında ne kadar işlevsiz ve yetersiz olduğunun',
      'İnsanoğlunun kâinatı çözme yönündeki o cüretkâr, sınır tanımaz merakının; evrenin o dondurucu, karanlık ve ıssız köşelerine kadar uzanan o romantik (ve fedakâr) hüznünün',
      'Avrupa Uzay Ajansı\'nın (ESA) uzay görevlerinde mühendislik hesaplamalarını tamamen yanlış yaptığının',
      'Kuyrukluyıldızların yüzeylerinin aslında devasa okyanuslarla kaplı olduğunun'
    ],
    correct: 1,
    explanation: 'Sondanın 500 milyon km uzakta verileri gönderip karanlıkta ebedi uykuya dalması; insanın cüretkâr merakının ve evrenin ıssızlığındaki o romantik/fedakâr metalik hüznün sembolü olarak betimlenmiştir.'
  },
  {
    title: 'Erotomani (Tek Kişilik Aşk)',
    passage: 'Aşkın her zaman iki kişi arasında yaşandığı sanılır; ancak psikiyatride "De Clérambault Sendromu" (Erotomani) adı verilen öyle korkunç bir delilik vardır ki, aşk tek kişilik, zırhlı bir kâbusa dönüşür. Bu sanrıya yakalanan hasta, genellikle kendisinden çok daha yüksek statüdeki birinin (bir ünlünün, politikacının veya doktorun) "kendisine delicesine âşık olduğuna" %100 inanır! Gerçekte o ünlü kişi hastayı hiç tanımıyordur. Ancak hasta, televizyondaki ünlünün taktığı kravat renginden, sunduğu haberdeki göz kırpışından veya sosyal medyadaki alakasız bir kelimesinden bile "kendisine gizli ve tutkulu aşk mesajları" verildiğini çıkarır. Ünlü kişi onu reddettiğinde bile, hasta bunu "İlişkimizi gizli tutmak için yalan söylüyor, aslında beni seviyor" diye yorumlar. Erotomani; insan zihninin onaylanma ve sevilme açlığının, mantığı ve dış gerçekliği tamamen yok ederek kişiyi kendi inşa ettiği sarsılmaz ve hastalıklı bir hayal dünyasına (tek kişilik bir aşka) nasıl hapsedebildiğinin en ürkütücü kanıtıdır.',
    questionStem: 'Erotomani (De Clérambault Sendromu) hastalarının yaşadığı durum, "insan zihni ve gerçeklik" hakkında bize neyi gösterir?',
    options: [
      'Aşkın her zaman karşı taraftan olumlu bir geri dönüş (ilgi) aldığında büyüyüp güçlendiğini',
      'İnsanların sadece televizyon figürlerine âşık olabildiklerini',
      'Zihnin o aşırı sevilme (onaylanma) açlığıyla; gerçekliği, reddedilmeyi ve mantığı tamamen devre dışı bırakarak her türlü alakasız eylemi kendi "narsisistik kurgusuna (illüzyonuna)" uyacak şekilde bükebilme gücünü (tehlikesini)',
      'Psikiyatri ilaçlarının hastalarda aşk duygusunu tamamen sildiğini'
    ],
    correct: 2,
    explanation: 'Hiç tanımayan birinin kravat renginden bile gizli aşk mesajı çıkarmak ve reddedilmeyi bile aşka yormak; zihnin sevilme açlığıyla gerçekliği büküp kendi narsisistik illüzyonuna hapsedebilme gücünü gösterir.'
  },
  {
    title: 'Kuantum Zeno Etkisi (Gözlemin Gücü)',
    passage: 'Gündelik hayatta "Kaynayan tencereye bakarsan kaynamaz" diye meşhur bir söz vardır. Fizik dünyası, bu batıl inancın kuantum mekaniğinde "Kuantum Zeno Etkisi" (Quantum Zeno Effect) adıyla kelimenin tam anlamıyla gerçek olduğunu kanıtladı! Bir radyoaktif atom normal şartlarda belirli bir süre içinde bozunarak parçalanır. Ancak bilim insanları o atoma sürekli olarak, hiç durmadan "ölçüm yaparlarsa (gözlemlerlerse)", atomun bozunma süreci donup kalır; sistem zamanın içinde felç olur ve atom parçalanamaz! Gözlem (bilinçli bakış), evrenin işleyişine dışarıdan bakan pasif bir kamera değildir; o, bizzat nesnenin fiziksel durumunu değiştiren, zamanı durduran ve kuantum dünyasını "donduran" aktif ve sarsıcı bir müdahaledir. İzlediğimiz evren, biz onu izlediğimiz için öyle davranan bir illüzyondur.',
    questionStem: 'Kuantum Zeno Etkisi ("İzlenen tencere kaynamaz"), gözlem (ve ölçüm) eyleminin fizikteki yeri hakkında hangi devrimsel (sarsıcı) gerçeği ifşa eder?',
    options: [
      'Radyoaktif maddelerin laboratuvar ortamında izlenmesinin bilim insanlarına ölümcül zararlar verebileceğini',
      'Gözlemlemenin (ölçüm yapmanın) evreni pasifçe izleyen bir eylem değil; nesnenin fiziksel durumuna anında müdahale eden, onun doğal değişimini (bozunmasını) donduracak (felç edecek) kadar güçlü ve aktif bir "fiziksel güç" olduğunu',
      'Kuantum dünyasındaki kuralların mutfak aletleri (tencereler) üzerinde de birebir çalıştığını',
      'Gözlerimizin yaydığı radyasyonun atomları parçaladığını'
    ],
    correct: 1,
    explanation: 'Atoma sürekli ölçüm (gözlem) yapıldığında bozunmanın (değişimin) donup kalması; gözlem yapmanın pasif bir izleme değil, evrene anında müdahale eden (donduran) aktif bir fiziksel güç olduğunu kanıtlar.'
  },
  {
    title: 'Kargaların Adli Tıbbı (Evrimsel Yas)',
    passage: 'Bir karga öldüğünde, etraftaki diğer kargaların onun cansız bedeninin etrafında toplandıkları ve "sessizce bekledikleri" görülür. Dışarıdan bakan romantik bir insan için bu, ölümün hüznüyle yapılan duygusal bir "cenaze (yas) törenidir". Oysa hayvan davranış bilimcileri gerçeğin çok daha dondurucu ve mekanik olduğunu kanıtladılar. Kargalar oraya ağlamaya değil; arkadaşları olan o kargayı neyin öldürdüğünü (kedi mi, zehir mi, insan mı?) incelemek için bir tür "olay yeri incelemesi (adli tıp)" yapmaya gelirler! Ölüm nedenini tespit edip, aynı hataya düşmemek için o bölgeyi veya nesneyi kara listeye alırlar. İnsanoğlu, doğanın bu buz gibi (acımasız) ve analitik hayatta kalma stratejisini, kendi duygusal filtrelerinden geçirip "yas ve gözyaşı" olarak yorumlama kibrinden asla vazgeçmez.',
    questionStem: 'Kargaların ölüleri etrafında toplanması örneği (ve gerçek nedeni), insanın doğaya bakış açısındaki hangi yanılgıyı (antropomorfizm) eleştirir?',
    options: [
      'Kuşların cenaze törenlerini antik çağlardan beri insanlardan taklit ettikleri inancını',
      'İnsanın, doğanın o soğuk, analitik ve hayatta kalmaya dayalı evrimsel stratejilerini; kendi insani (romantik ve duygusal) filtrelerinden geçirip onlara "yas, ahlak veya şefkat" atfederek doğayı romantikleştirme (ve kendini kandırma) yanılgısını',
      'Kargaların ölüm kavramını hiçbir zaman idrak edemeyeceği yönündeki bilimsel iddiayı',
      'Hayvanların kendi aralarında iletişim kuramadıklarını ve sadece içgüdüsel sesler çıkardığını'
    ],
    correct: 1,
    explanation: 'Kargaların arkadaşlarına ağlamak için değil, ölüm nedenini araştırmak (adli tıp/hayatta kalma) için toplanması; insanın doğanın soğuk mantığını kendi duygusal/romantik filtreleriyle yorumlama (kendini kandırma) yanılgısını eleştirir.'
  },
  {
    title: 'Wabi-Sabi (Kusurun Yüceltilmesi)',
    passage: 'Antik Yunan\'dan beri Batı dünyası "kusursuzluğa" tapar; kırılmayan mermer heykellere, pürüzsüz yüzeylere, altın orana ve zamanın eskitemeyeceği (ölümsüz) simetrilere... Oysa Japon felsefesi "Wabi-Sabi", bu Batılı kibre derin bir neşter vurur. Wabi-Sabi\'ye göre asıl güzellik kusursuzlukta değil; "eksik, geçici ve kusurlu" olandadır. Yosun tutmuş eski bir taş, kenarı hafifçe çatlamış el yapımı bir çay fincanı veya sonbaharda sararıp dökülen (kırılgan) bir yaprak, fabrikadan yeni çıkmış pürüzsüz bir porselenden bin kat daha değerlidir. Çünkü o kırıklar ve yosunlar, nesnenin "yaşadığının, zamanın acımasız fırtınalarına göğüs gerdiğinin" (yaşanmışlığın) kanıtıdır. Kusursuzluk ölü ve donuktur; oysa kusur (asimetri), hayatın o geçici, yaralı ama sarsılmaz nefesidir.',
    questionStem: 'Wabi-Sabi felsefesi, Batı\'nın "mermer (kusursuz)" güzellik algısına karşı neyi savunmaktadır?',
    options: [
      'Güzelliğin sadece fabrikalarda üretilen modern sanat eserlerinde bulunabileceğini',
      'Estetiğin (ve gerçek değerin); kusursuz, simetrik ve ölümsüz olana değil, aksine nesnenin doğallığını, yaşanmışlığını ve zamanın izlerini (ölümlülüğünü) taşıyan "eksik, kırılgan ve kusurlu" olana ait olduğunu',
      'Eski eşyaların her zaman hastalık taşıdığı için atılıp yenilerinin alınması gerektiğini',
      'Batı sanatının Japon sanatından her zaman daha renkli ve dikkat çekici olduğunu'
    ],
    correct: 1,
    explanation: 'Batı\'nın kusursuz mermerine karşı, Wabi-Sabi\'nin yosunlu taşı veya kırık fincanı yüceltmesi; asıl güzelliğin "yaşanmışlık, eksiklik ve kusurda" (geçicilikte) yattığını savunur.'
  },
  {
    title: 'Şibbolet (Ölümcül Parola)',
    passage: 'Eski Ahit\'te anlatılan tüyler ürpertici bir hikâye vardır. Gileadlılar, savaştan kaçan Efrayimlileri nehir geçişinde yakalamak için bir tuzak kurarlar. Kaçan kişiye "Sen Efrayimli misin?" diye sormazlar; sadece ondan bir kelimeyi söylemesini isterler: "Şibbolet" (Shibboleth). Efrayimlilerin lehçesinde "ş" sesi yoktur, bu yüzden "Sibbolet" derler. Sırf tek bir harfi (ş yerine s) farklı telaffuz eden 42.000 Efrayimli, o saniye kılıçtan geçirilir! Tarihe geçen bu "Şibbolet" kavramı; dilin sadece bir iletişim ve sevgi köprüsü olmadığını, aynı zamanda insanlığın "Bizden olan" ile "Bizden olmayan (Düşman)"ı birbirinden ayırmak için (boğazını kesmek üzere) kullandığı en ilkel, en zalim ve en kanlı "kabile şifresi (sınır duvarı)" olduğunu ispatlar.',
    questionStem: 'Tarihteki "Şibbolet" (Shibboleth) vakası, "Dil (Lisan)" kavramının hangi karanlık (ve sosyolojik) işlevini ortaya koyar?',
    options: [
      'Dilin zamanla gramer kurallarını kaybederek tamamen yozlaştığını',
      'Dilin (ve telaffuzun) sadece bir iletişim aracı değil; insan gruplarının (kabilelerin) kendinden olmayanları (ötekini/düşmanı) tespit edip dışlamak ve yok etmek için kullandığı "ölümcül bir ayrımcılık (şifre/sınır) silahı" olduğunu',
      'Eski çağlarda insanların sadece savaş kelimelerini ezberlediğini',
      'Farklı dillerin birbirine karışmasının her zaman kültürel bir zenginlik yarattığını'
    ],
    correct: 1,
    explanation: 'Sırf "ş" sesini "s" olarak telaffuz ettiği için insanların öldürülmesi; dilin sadece iletişim değil, "bizden olan/olmayan" ayrımını (kabileciliği) belirleyen ölümcül bir silah (sınır) olduğunu ortaya koyar.'
  },
  {
    title: 'Sonder (Başkalarının Evreni)',
    passage: 'Otobüs durağında beklerken yanınızdan yürüyüp geçen yüzlerce insan görürsünüz; sizin için onlar sadece gri, anlamsız birer silüet, arka plan figüranlarıdır. Ta ki o derin ve sarsıcı aydınlanma anı (Sonder) zihninize çarpana kadar. "Sonder" kavramı, şu idraki tanımlar: O an yanınızdan geçen sıradan bir yabancının da; tıpkı sizin gibi âşık olduğu, terk edildiği, geceleri tavana bakıp ağladığı, devasa sırlar taşıdığı ve merkezinde kendisinin olduğu "destansı, karmaşık ve uçsuz bucaksız bir evrene (hayata)" sahip olduğunu aniden fark etmektir! Bizler kendi dünyamızın başrolü olduğumuzu sanan narsisistik bir körlüğe sahibizdir; oysa kâinat, her biri kendi hikâyesinin başrolü olan (ve bizim sadece yanından geçip gittiğimiz) milyarlarca ana karakterin oluşturduğu devasa bir trafik sıkışıklığıdır.',
    questionStem: 'Sonder kavramının insana yaşattığı o felsefi (ve psikolojik) "uyanış", neyin reddedilmesi üzerine kuruludur?',
    options: [
      'İnsanların toplu taşıma araçlarında geçirdikleri sürenin zaman kaybı olduğu düşüncesinin',
      'Herkesin hayatının sıradan, basit ve tekdüze bir kurgudan ibaret olduğu fikrinin',
      'Sadece kendimizin derin, karmaşık ve önemli bir hayata (başrole) sahip olduğumuz yönündeki o narsisistik (bencil) "Ana Karakter Sendromu\'nun"; diğer yabancıların da aynı derinliğe sahip olduğu gerçeğiyle (empatiyle) yıkılmasının',
      'Şehir hayatının insanda derin bir yalnızlık ve yabancılaşma hissi yaratmasının'
    ],
    correct: 2,
    explanation: 'Sıradan bir yabancının da bizim kadar derin ve destansı bir hayata (merkeze) sahip olduğunu fark etmek (Sonder); sadece kendimizin "başrol" olduğu kibrini (Ana Karakter Sendromu\'nu) yıkan bir aydınlanmadır.'
  },
  {
    title: 'Bilinmeyen Bilinmeyenler (Mutlak Körlük)',
    passage: 'Eski ABD Savunma Bakanı Donald Rumsfeld, bilgi ve strateji hakkında tarihe geçen o dil büken (ama kusursuz) felsefeyi yaptı: "Bilinen bilinenler vardır; bildiğimizi bildiğimiz şeyler. Bilinen bilinmeyenler vardır; bilmediğimizi bildiğimiz şeyler (henüz çözemediğimiz konular). Ancak en tehlikelisi Bilinmeyen Bilinmeyenlerdir (Unknown Unknowns); yani \'bilmediğimizi dahi bilmediğimiz\' şeyler." Bir imparatorluğu, şirketi veya insan hayatını çökerten şey, farkında olduğu riskler (ekonomi, savaş vs.) değildir; onu çökerten şey, ufkunda ve hayal dünyasında (radarında) bile olmayan, varlığından bile habersiz olduğu o kör noktadan gelen devasa asteroittir. Evrenin en tehlikeli karanlığı cehalet değildir; ne kadar cahil olduğumuzun bile farkında olamadığımız o "mutlak ve kibirli körlüğümüzdür."',
    questionStem: 'Rumsfeld\'in "Bilinmeyen Bilinmeyenler" (Unknown Unknowns) kavramı, devletlerin veya insanların çöküşünün asıl kaynağını neye bağlar?',
    options: [
      'Çok iyi bilinen ekonomik risklerin zamanında çözülmeyip ertelenmesine',
      'Bilim insanlarının ve istihbaratın bilerek yanlış (sahte) raporlar vermesine',
      'Karşılaşılan sorunların çözümünde (bilinen sorunlarda) her zaman çok geç kalınmasına',
      'İnsanı veya sistemi yıkan asıl felaketin, üzerine çalışılan riskler değil; kişinin (veya sistemin) algı sınırlarının (ve radarının) tamamen dışında kalan, varlığından (ve ihtimalinden) bile haberdar olmadığı o "mutlak kör nokta" olmasına'
    ],
    correct: 3,
    explanation: 'Bildiğimizi veya bilmediğimizi bildiklerimiz (radardakiler) değil; varlığından (tehlikesinden) bile tamamen habersiz olduğumuz (radar dışı/mutlak körlük) şeylerin bizi çökerteceğini vurgular.'
  },
  {
    title: 'Macbeth\'in Hançeri (Kurgusal Suçluluk)',
    passage: 'Shakespeare\'in efsanevi trajedisi Macbeth\'te, Kral Duncan\'ı öldürmek üzere yola çıkan Macbeth\'in gözlerinin önünde, havada süzülen, sapı ona dönük ve üzeri kanlı, "hayali bir hançer" belirir. Macbeth o hançeri tutmaya çalışır ama eli boşlukta kalır; o fiziksel bir silah değil, zihnin bir halüsinasyonudur. "Bu gördüğüm bir hançer mi, yoksa ateşli beynimin bir uydurması mı?" diye feryat eder. Macbeth\'in havada gördüğü o hançer, sadece bir delilik belirtisi değildir. O hançer, insan ruhunun; "cinayeti henüz işlemeden önce bile" hissettiği o korkunç suçluluğun, korkunun ve hırsın (bilinçaltının) fiziksel bir nesneye (maddeye) bürünüp uzaya fırlatılmış halidir. İnsan, kendi karanlık arzusunu (ve cezasını) eyleme dökmeden önce bile onu kendi gözleriyle bir kâbus olarak yaratabilen tek varlıktır.',
    questionStem: 'Macbeth\'in havada süzülen "hayali hançeri" görmesi (halüsinasyonu), yazar tarafından edebi ve psikolojik olarak neyin metaforu olarak sunulmaktadır?',
    options: [
      'Orta Çağ şatolarında kullanılan büyü ve cadı iksirlerinin insanlarda yarattığı kalıcı zehirlenmenin',
      'İnsanın içindeki hırsın ve suçluluk duygusunun o kadar yoğun bir güce sahip olması ki; kişinin cinayeti "henüz fiziksel olarak işlemeden önce bile" kendi karanlık bilinçaltını somut bir nesne (kâbus) olarak gözlerinin önünde yaratabilmesinin',
      'Suikast silahlarının o dönemde büyücüler tarafından havada asılı kalacak şekilde tasarlanmasının',
      'Kral Duncan\'ın hayaletinin Macbeth\'i önceden uyararak onu cinayetten vazgeçirme çabasının'
    ],
    correct: 1,
    explanation: 'Fiziksel olarak var olmayan kanlı hançeri görmesi; insanın içindeki hırsın ve (henüz işlenmemiş cinayetin) suçluluğunun o kadar güçlü olması ki, bilinçaltının bunu somut bir kâbusa (nesneye) dönüştürmesinin metaforudur.'
  },
  {
    title: 'Pollyanna İlkesi (Tehlikeli İyimserlik)',
    passage: 'Çocukluğumuzdan beri bize öğretilen "Polyannacılık" (her şeyin iyi tarafını görmek) saf ve masum bir felsefe gibi görünür. Psikolojide "Pollyanna İlkesi" olarak bilinen bu durum, beynimizin geçmişteki "olumsuz anıları (acıları)" bastırarak, sadece "olumlu ve tatlı" olanları hatırlama eğilimidir. Kulağa bir şifa gibi gelse de, evrimsel psikologlara göre bu korkunç bir tuzaktır! Eğer bir toplum (veya birey) yaşadığı travmaları, ihanetleri ve felaketleri hızla unutup sürekli "Her şey düzelecek, o kadar da kötü değildi" diyerek o kör iyimserliğe (toksik pozitivizme) sığınırsa; geçmişin hatalarından asla ders çıkaramaz! Pollyanna ilkesi, bizi delirmekten kurtaran bir ağrı kesici olduğu kadar; aynı ateşe bin kere elimizi sokmamıza neden olan, tehlikeyi görmezden gelen o sinsi ve ahmakça "körlüğümüzün" de ta kendisidir.',
    questionStem: 'Psikolojideki "Pollyanna İlkesi (Sürekli İyimserlik)", yazar tarafından sadece bir teselli değil, hangi tehlikeli "zaafın" kaynağı olarak eleştirilmektedir?',
    options: [
      'Kötü anıların sürekli hatırlanarak toplumun toplu depresyona girmesi ve üretimin durması zaafının',
      'İyimserliğin insanı yaşlandıran hücresel bir zehir olduğu yönündeki biyolojik iddianın',
      'Beynin olumsuz anıları ve felaketleri hızla bastırıp (unutup) sadece iyiye odaklanmasının; hatalardan ders çıkarılmasını engelleyen, tehlikeyi görmezden gelip bizi aynı felaketleri tekrarlamaya iten o ahmakça "körlük ve uyuşma" tuzaklığının',
      'Sadece çocukların sahip olduğu saf ve masum dünya algısının yetişkinler tarafından da taklit edilmesinin'
    ],
    correct: 2,
    explanation: 'Beynin acıları unutup hep iyiye (iyimserliğe) odaklanması kulağa şifa gibi gelse de; hatalardan ders çıkarmamızı engelleyen, aynı ateşe elimizi sokturan o ahmakça körlüğün (tehlikenin) kaynağı olarak eleştirilmiştir.'
  }
];

// 28. MAKİNE
export const felsefeParagrafSorulari32: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_32.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_32[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe32-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
