import type { BilimParagrafQuestion, SincityParagrafQuestion, TarihParagrafQuestion } from './types';

const PARAGRAPH_THEMES_33 = [
  {
    title: 'Vladimir Komarov (Uzaydan Düşen Adam)',
    passage: '1967 yılında Sovyet kozmonot Vladimir Komarov, "Soyuz 1" aracıyla uzaya çıkmadan önce geminin 203 yapısal hatası olduğunu biliyordu. Uçuşun bir intihar olduğunu herkes görüyordu. Ancak görevi reddederse, yedeği olan en yakın arkadaşı (ve ulusal kahraman) Yuri Gagarin ölüme gönderilecekti. Komarov bunu göze almadı ve bile bile o tabuta bindi. Uzayda sistemler çöktü, atmosfere girerken paraşütler açılmadı. Komarov, Dünya\'ya bir alev topu gibi çakılırken son saniyelerde radyodan onu bu ölüme yollayan komutanlara (ve devlete) çığlık çığlığa küfürler ediyordu. Geriye sadece kömürleşmiş, erimiş ve bir avuç kalmış bir et parçası kaldı. Komarov\'un düşüşü; devletlerin siyasi kibri (uzay yarışı) uğruna, insanın o en saf, en vefalı ve en yüce fedakârlığının göz göre göre nasıl yakılıp küle çevrildiğinin tarihteki en acımasız ve dondurucu feryadıdır.',
    questionStem: 'Vladimir Komarov\'un bile bile arızalı uzay aracına (Soyuz 1) binerek ölüme gitmesi, yazar tarafından neyin trajik bir eleştirisi olarak sunulmaktadır?',
    options: [
      'Sovyet mühendislerin o dönemde paraşüt sistemlerini yeterince test edememesinin',
      'Devletlerin siyasi kibri ve "uzay yarışı/propaganda" hırsı uğruna; bir insanın dostunu kurtarmak için yaptığı o en yüce fedakârlığın göz göre göre nasıl ölüme (küle) kurban edildiğinin',
      'Kozmonotların uzaya çıkmadan önce psikolojik testlerden geçirilmemesinin getirdiği intihar eğiliminin',
      'Uzaydaki basınç değişimlerinin insan beyninde halüsinasyon ve öfke nöbetlerine yol açmasının'
    ],
    correct: 1,
    explanation: 'Komarov\'un Gagarin ölmesin diye bile bile hatalı gemiye binmesi ve devlete küfrederek ölmesi; siyasi kibrin ve propagandanın insan hayatını (ve yüce fedakârlığı) nasıl acımasızca harcadığının eleştirisidir.'
  },
  {
    title: 'Pascal\'ın Kumarı (İnancın Matematiği)',
    passage: '17. yüzyılda dâhi matematikçi Blaise Pascal, Tanrı\'nın var olup olmadığını mantıkla kanıtlamanın imkânsız olduğunu gördüğünde felsefe tarihinin en kurnaz oyununu (Pascal\'ın Kumarı) kurdu. Şöyle dedi: "Tanrı ya vardır ya da yoktur. Eğer inanırsan ve O varsa, sonsuz cenneti kazanırsın. Eğer inanırsan ve O yoksa, hiçbir şey kaybetmezsin. Ancak inanmazsan ve O varsa, sonsuz bir cehennemde yanarsın!" Pascal\'a göre inanç, kalpten gelen rasyonel bir aydınlanma değil; insanın sonsuz kazanç ile sonsuz kayıp arasında oynamak zorunda olduğu "matematiksel bir risk analizi (bir kumar)" idi. Bu argüman, dini inancı o ilahi, saf ve ruhani tahtından indirerek; onu tamamen çıkarcı, bencil ve korkuya dayalı bir sigorta poliçesine dönüştürdüğü için yüzyıllarca eleştirilmiştir.',
    questionStem: 'Pascal\'ın Kumarı argümanının felsefi olarak en çok eleştirilen "zaafı (veya dönüştürdüğü durum)" parçada nasıl ifade edilmiştir?',
    options: [
      'Tanrı\'nın varlığını sadece fiziksel laboratuvar kanıtlarıyla (ampirik olarak) araması',
      'Dini inancı (ve Tanrı ilişkisini) saf, içsel ve ruhani bir bağ olmaktan çıkarıp; cehennem korkusu ve cennet kârı üzerine kurulan bencil, matematiksel ve çıkarcı bir "kumar/sigorta" mantığına indirgemesi',
      'İnsanları zorla kiliselere gitmeye ve para bağışlamaya mecbur bırakması',
      'Kumar ve bahis oynamanın dinler tarafından tamamen yasaklanmış olmasını görmezden gelmesi'
    ],
    correct: 1,
    explanation: '"İnanırsam kazanırım, inanmazsam yanarım" mantığı; inancı saf bir sevgi/ruhani bağ olmaktan çıkarıp korku ve çıkara dayalı (bencil) bir matematiksel kumara indirgediği için eleştirilir.'
  },
  {
    title: 'Asterion\'un Evi (Borges ve Minotaur)',
    passage: 'Yunan mitolojisindeki yarı insan yarı boğa olan canavar Minotaur, bildiğimiz kadarıyla Girit labirentinde hapsedilmiş vahşi bir katildir. Ancak usta yazar Jorge Luis Borges, "Asterion\'un Evi" adlı öyküsünde bu efsaneyi tersyüz eder. Öyküyü canavarın (Asterion\'un) ağzından dinleriz. Asterion bir canavar değil, o devasa ve ıssız labirentin içinde tek başına yaşayan, dışarı çıkmaktan korkan, çok yalnız ve hüzünlü bir ruhtur. Labirenti bir hapishane değil, "tüm evren" sanmaktadır. Gelen kurbanları öldürmez, onlarla oyun oynamak ister ama onlar korkudan ölürler. Asterion, bir gün kendisini bu sonsuz yalnızlıktan (labirentten) kurtaracak bir "kurtarıcıyı" bekler durur. Theseus gelip kılıcını ona sapladığında, Asterion karşı koymaz; ölümü, o çaresiz yalnızlığın nihai kurtuluşu olarak sevinçle (bir hediye gibi) kucaklar. Kâinatın en korkunç canavarı, aslında evrendeki en yalnız ve en acınası kurbandır.',
    questionStem: 'Borges\'in "Asterion\'un Evi" öyküsü, mitolojik Minotaur figürüne (ve canavar algısına) nasıl bir felsefi boyut kazandırmıştır?',
    options: [
      'Minotaur\'un aslında uzaylı bir ırkın dünyadaki son temsilcisi olduğunu iddia ederek',
      'Klasik mitolojideki "vahşi canavar" algısını yıkarak; onu kendi zihinsel labirentine (yalnızlığına) hapsolmuş, ölümü bile bir kurtuluş sayacak kadar çaresiz, hüzünlü ve "insani" bir kurbana dönüştürmesiyle',
      'Labirentin mimari yapısının aslında antik Yunan matematiğini yansıttığını göstererek',
      'Theseus\'un kahramanlığını yüceltip adaletin her zaman yerini bulduğunu ispatlayarak'
    ],
    correct: 1,
    explanation: 'Canavarı vahşi bir katil değil, labirentinde (yalnızlığında) hapsolmuş, ölümü bile kurtarıcı olarak bekleyen hüzünlü ve çaresiz bir kurban olarak resmetmesi; canavar algısını yıkıp felsefi/insani bir boyut kazandırır.'
  },
  {
    title: 'Üç Cisim Problemi (Mutlak Kaos)',
    passage: 'Isaac Newton\'ın fizik yasaları bize iki gezegenin (örneğin Dünya ve Güneş) birbirinin etrafında nasıl döneceğini kusursuz bir saat gibi hesaplama imkânı verdi. Ancak bu sisteme sadece bir gezegen daha eklendiğinde ve "üç büyük kütle" birbirini çekmeye başladığında fizik çöker! "Üç Cisim Problemi" denen bu olayda, cisimlerin hareketleri matematiksel olarak asla kesin bir şekilde (uzun vadeli) öngörülemez. Ufak bir sapma, gezegenlerden birini aniden uzayın derinliklerine fırlatabilir veya diğerine çarpmasına neden olabilir. Bu problem evrenin o dondurucu sırrını açığa çıkarır: Evren, her saniyesi hesaplanabilen, determinist (kaderi belli) ve kusursuz bir makine değildir. Sadece üç taşın bile bir araya geldiği yerde, matematiğin bittiği, öngörülemezliğin ve kaosun (anarşinin) başladığı o mutlak belirsizlik krallığı başlar.',
    questionStem: 'Üç Cisim Problemi\'nin fizikte kanıtladığı "felsefi sarsıntı (gerçeklik)" nedir?',
    options: [
      'Gezegenlerin sadece ikişerli gruplar halinde var olabileceğini, üçüncü bir gezegenin fiziksel olarak yok olacağını',
      'Evrenin her anı önceden hesaplanabilen kusursuz (determinist/kaderi belli) bir saat mekanizması olduğu inancını yıkarak; sistemin temelinde çözülemez bir öngörülemezliğin, belirsizliğin ve "mutlak kaosun" yattığını',
      'Yerçekimi kuvvetinin uzay boşluğunda hiçbir etkisinin olmadığını',
      'Bilgisayarların kuantum denklemlerini çözerken sürekli hata verdiğini'
    ],
    correct: 1,
    explanation: 'İki cisim hesaplanabilirken üçüncü cismin eklenmesiyle her şeyin öngörülemez hale gelmesi; evrenin hesaplanabilir kusursuz bir makine (kader) değil, temelinde "mutlak kaos" ve belirsizlik yattığını kanıtlar.'
  },
  {
    title: 'Broca Alanı ve "Tan" Vakası (Dilsiz Düşünce)',
    passage: '1861 yılında Fransız doktor Paul Broca, 21 yıl boyunca hastanede yatan tuhaf bir hastayı (Mösyö Leborgne) inceledi. Bu adamın zekâsı, anlama yetisi ve duyguları tamamen yerindeydi; ancak ağzından çıkabilen tek bir hece vardı: "Tan". Neye öfkelenirse veya ne söylemek isterse istesin sadece "Tan, tan, tan!" diyebiliyordu. Öldükten sonra beyni incelendiğinde sol frontal lobunda hasar bulundu (bugün oraya Broca Alanı diyoruz). Bu vaka sadece tıbbı değil, felsefeyi de kökünden sarstı. Yüzyıllarca "İnsan ancak kelimelerle (dille) düşünebilir, dil yoksa düşünce de yoktur" sanılırdı. Ancak "Tan" vakası gösterdi ki; insan zihni sessiz bir kodesin içine hapsolup tüm kelimelerini (dilini) kaybetse bile, içeride hala acı çeken, düşünen, öfkelenen ve var olan koca bir ruh (bilinç) yaşamaya devam eder. Düşünce, dilin kölesi değildir.',
    questionStem: 'Mösyö Leborgne (Tan) vakası, felsefe ve psikoloji dünyasındaki hangi "geleneksel kabulü (inancı)" yerle bir etmiştir?',
    options: [
      'Konuşamayan insanların işitme duyularının da tamamen felç olduğu inancını',
      'Beyin ameliyatlarının 19. yüzyılda yapılamayacağı yönündeki tarihi yanılgıyı',
      'İnsanın zekâsının ve "düşünme yetisinin" sadece kelimelere (dile) bağlı olduğu; "dil yoksa düşünce de yoktur" inancını yıkarak, bilincin dilden bağımsız olarak da var olabileceğini',
      'İnsan beyninin sadece sağ yarımküresinin duyguları kontrol ettiği tezini'
    ],
    correct: 2,
    explanation: 'Sadece "Tan" diyebilmesine rağmen zekâsının ve duygularının tam olması; düşüncenin (bilincin) kelimelere/dile muhtaç olduğu yönündeki o klasik felsefi inancı çürütmüştür.'
  },
  {
    title: 'Kozmik Sansürcülük Hipotezi (Doğanın Mahremiyeti)',
    passage: 'Fizikçiler, bir yıldızın kendi içine çöküp karadeliğe dönüştüğü o merkez noktaya "Tekillik" (Singularity) derler. Tekillikte zaman durur, uzay yırtılır ve bildiğimiz tüm fizik yasaları (matematik) tamamen çöker. Bu mutlak bir anarşi anıdır! Ancak evrenin kusursuz bir "sansür" mekanizması vardır: Fizikçi Roger Penrose buna "Kozmik Sansürcülük Hipotezi" der. Evren, bu kuralsız ve kaotik tekilliklerin çıplak bir şekilde uzayda görünmesine asla izin vermez; etrafına ışığın bile kaçamadığı siyah bir perde, yani "Olay Ufku" (Event Horizon) çeker. Biz dışarıdan baktığımızda sadece siyah bir küre görürüz, içerideki o mantıksız kıyameti asla göremeyiz. Doğa, tıpkı utanılacak bir yarasını veya kendi kurallarının çöktüğü o mantıksız çıplaklığını, kapkaranlık bir çarşafla (olay ufkuyla) örterek bizden (ve tüm bilimden) sonsuza dek saklar.',
    questionStem: 'Kozmik Sansürcülük Hipotezi\'ne göre, "Olay Ufku"nun (Event Horizon) evrendeki felsefi/fiziksel işlevi nedir?',
    options: [
      'Karadeliklerin etrafındaki yıldızları besleyerek yeni galaksiler yaratmasını sağlamak',
      'Fizik yasalarının tamamen çöktüğü, kuralsız ve kaotik "tekilliği (çıplaklığı)"; siyah bir perde (ufuk) gibi örterek o mantıksızlığı evrenin geri kalanından ve gözlemcilerden sonsuza dek gizlemek (sansürlemek)',
      'Uzay gemilerinin karadeliklerin içine güvenle girip çıkabilmesi için koruyucu bir tünel (solucandeliği) açmak',
      'Işık parçacıklarının evrendeki hız sınırını (c) aşmasını engellemek için bir bariyer görevi görmek'
    ],
    correct: 1,
    explanation: 'Tekillikteki o mantıksız/fizik ötesi durumu (çöküşü), etrafına siyah bir kalkan çekerek bizden ve evrenden saklaması, doğanın kendi kuralsızlığını gizlemesi (sansürlemesi) olarak ifade edilir.'
  },
  {
    title: 'Franklin Keşif Gezisi (Buzdaki Kibir)',
    passage: '1845 yılında Sir John Franklin komutasındaki İngiliz donanmasının en gelişmiş iki gemisi (Erebus ve Terror), Kuzeybatı Geçidi\'ni bulmak için Kuzey Kutbu\'na yelken açtı. Gemilerde 3 yıllık konserve erzak, kütüphaneler, gümüş çatallar ve hatta piyano bile vardı! Dünyanın en yenilmez imparatorluğu, teknolojisine o kadar güveniyordu ki, doğayı ciddiye bile almamıştı. Ancak gemiler buzullara sıkıştı. İngiliz subayları, yerel Eskimolardan (Inuitlerden) buzda avlanmayı ve köpek kızağı kullanmayı öğrenmeyi kibrine yediremedi; bunun yerine buzun ortasında gümüş çatallarıyla konserve yemeye devam ettiler. Konservelerdeki kurşun sızıntısı hepsini delirtti; sonunda hayatta kalmak için birbirlerini (yamyamlık) yemeye başladılar ve 129 adamın tamamı o bembeyaz cehennemde donarak öldü. Franklin seferi, insan aklının ve çelik teknolojisinin (emperyalist kibrin), doğanın uyum sağlamayı reddeden o buz gibi kanunları karşısında nasıl çürüyüp yamyamlaştığının donmuş bir anıtıdır.',
    questionStem: 'Franklin Keşif Gezisi\'nin (Erebus ve Terror gemilerinin) buzullarda yok olması, insanlık ve teknoloji bağlamında neyin çöküşünü sembolize eder?',
    options: [
      'Pusula ve harita teknolojisinin kutup bölgelerinde tamamen bozulduğu bilimsel gerçeğini',
      'En ileri teknolojinin ve emperyalist kibrin (gümüş çatalların); doğanın acımasız şartlarına uyum sağlamayı (yerellerden öğrenmeyi) reddettiğinde, bizzat o kibrin insanı cinnete ve kendi kendini yok etmeye (yamyamlığa) sürüklediğini',
      'Konserve gıdaların uzun deniz yolculuklarında insan sağlığına çok faydalı olduğunu',
      'İngiliz kraliyetinin denizcilere yeterince maaş ödemediği için isyan çıktığını'
    ],
    correct: 2,
    explanation: 'Buzun ortasında Eskimolardan öğrenmek yerine gümüş çatalla konserve yiyip kurşundan delirmeleri; teknolojik kibrin ve doğaya uyum sağlamamanın insanı yamyamlığa/cinnete ve ölüme sürüklediğini sembolize eder.'
  },
  {
    title: 'Rongorongo Yazıtları (Dilsiz Kalan Medeniyet)',
    passage: 'Paskalya Adası\'nda (Rapa Nui), devasa heykellerin yanı sıra ahşap tabletlere kazınmış, dünyanın başka hiçbir yerinde bulunmayan "Rongorongo" adında gizemli bir hiyeroglif yazısı vardır. 1860\'larda Avrupalı misyonerler adaya geldiğinde, bu yazıyı okuyabilen son bilge yerliler de çoktan köle ticareti ve hastalıklar yüzünden ölmüştü. Bugün o tabletler müzelerde sergileniyor ancak dünyanın en iyi bilgisayarları ve şifre kırıcıları bile tek bir kelimesini okuyamıyor. Rongorongo bize, bir medeniyetin asıl ölümünün binalarının yıkılmasıyla değil; o topluma ait kelimelerin, hafızanın ve "dilin" sonsuza dek susmasıyla gerçekleştiğini kanıtlar. Bir zamanlar felsefe, aşk ve tarih barındıran o tahta tabletler, anahtarı okyanusun dibine atılmış, ebediyen kilitli kalmış sağır edici bir sessizlik kutusudur.',
    questionStem: 'Rongorongo yazıtlarının günümüzde okunamıyor olması, bir medeniyetin yok oluşu hakkında neyi ifade etmektedir?',
    options: [
      'Ahşap tabletlerin zamanla çürüyerek üzerindeki çizgilerin silinmiş olduğunu',
      'Paskalya adası yerlilerinin aslında hiçbir zaman zeki bir toplum olamadığını',
      'Bir kültürün (medeniyetin) asıl (ve en trajik) yok oluşunun fiziksel yapılardan ziyade; o kültürün "dilinin, hafızasının ve anlam dünyasının" okunamaz hale gelerek (sonsuz bir sessizliğe) gömülmesi olduğunu',
      'Avrupalıların adaya gelmesinin yerel dili daha da zenginleştirdiğini'
    ],
    correct: 2,
    explanation: 'Tabletlerin şifresinin çözülememesi; medeniyetin asıl ölümünün binaların yıkılması değil, dilin/hafızanın ebediyen susması (okunamaz hale gelmesi) olduğunu ifade eder.'
  },
  {
    title: 'Aphantasia (Zihinsel Körlük)',
    passage: 'Gözlerinizi kapatın ve bir elma hayal edin. Çoğu insan o elmanın kırmızı rengini, yuvarlak şeklini zihninin ekranında net bir şekilde "görür". Ancak "Aphantasia" (Zihinsel Körlük) adı verilen bir nörolojik duruma sahip olan insanlar için gözlerini kapattıklarında sadece zifiri bir karanlık (hiçlik) vardır. Onlar zihinlerinde hiçbir görsel imge, yüz veya manzara yaratamazlar; bir elmayı sadece "kavramsal ve kelimesel" olarak bilirler ama asla "göremezler". Aphantasia, insan bilincinin ne kadar eşsiz ve yalnız bir ada olduğunu kanıtlar. Hepimiz aynı dünyada yaşadığımızı, aynı gökyüzüne baktığımızı ve beynimizin aynı şekilde çalıştığını sanırız; oysa gözlerimizi kapattığımızda hepimizin hapsolduğu o içsel kozmos (hayal dünyası veya karanlık), yanımızdaki en yakınımızdan bile evrenler kadar farklı ve kopuktur.',
    questionStem: 'Aphantasia (Zihinsel Körlük) durumu, insan zihni ve "gerçeklik algısı" hakkında hangi sarsıcı gerçeği göz önüne sermektedir?',
    options: [
      'Zihinsel canlandırma yapamayan insanların doğuştan tamamen kör ve sağır olduklarını',
      'Hepimizin aynı şekilde hissettiğini ve düşündüğünü sandığımız dünyada; aslında insanların "içsel gerçekliklerinin ve zihinsel deneyimlerinin" (hayal güçlerinin) birbirinden tamamen farklı, kopuk ve eşsiz yapılar olduğunu',
      'Elma gibi basit meyvelerin insan beyni tarafından görsel olarak reddedilen nesneler olduğunu',
      'Gözleri kapatmanın beyindeki oksijen miktarını azaltarak hücreleri öldürdüğünü'
    ],
    correct: 1,
    explanation: 'Kiminin net resimler görüp kiminin sadece zifiri karanlık (Aphantasia) yaşaması; hepimizin aynı dünyada yaşasak da zihinsel (içsel) deneyimlerimizin ve algılarımızın birbirinden tamamen kopuk ve eşsiz olduğunu kanıtlar.'
  },
  {
    title: 'Raskolnikov\'un Baltası (Üstün İnsan Yanılgısı)',
    passage: 'Dostoyevski\'nin "Suç ve Ceza" romanında, zeki ama yoksul bir üniversite öğrencisi olan Raskolnikov, toplumun kanını emen tefeci ve yaşlı bir kadını baltayla öldürür. Cinayeti para için değil, çok daha tehlikeli (felsefi) bir kibir uğruna işler: "Napolyon veya Sezar gibi sıradan ahlak kurallarının üstünde olan (olağanüstü) bir insan mıyım, yoksa kurallara uyan sıradan bir böcek miyim?" Raskolnikov, yüce bir amaç (insanlığa fayda) uğruna kuralları çiğnemeye ve kan dökmeye hakkı olduğuna inanır. Ancak baltayı vurduğu andan itibaren, o çok güvendiği üstün aklı ve kibri, kendi vicdanının o ezici, yakıcı ve amansız ağırlığı altında paramparça olur. Cinayet onu bir tanrı yapmamış, korku içinde titreyen, ateşler içinde yanan zavallı bir hastaya çevirmiştir. Hiçbir ideoloji veya felsefi mazeret, insan ruhunu bölen o kadim vicdan (suçluluk) yasasının üstüne çıkamaz.',
    questionStem: 'Raskolnikov\'un cinayet sonrası yaşadığı psikolojik çöküş, onun inandığı hangi felsefi kibri yerle bir etmiştir?',
    options: [
      'Yoksulluğun insanları mecburen cinayete sürüklediği yönündeki ekonomik teoriyi',
      'Yaşlı ve kötü insanların toplumdan temizlenmesinin her zaman huzur getireceği inancını',
      'Kendini "olağanüstü (kuralların üstünde) bir insan" sanarak, yüce bir amaç uğruna vicdanı ve ahlakı aşabileceği yönündeki o kibirli (ve hastalıklı) yanılgıyı',
      'Cinayet aleti olarak balta kullanmanın kılıç kullanmaktan daha az acı verdiği tezini'
    ],
    correct: 2,
    explanation: 'Cinayetten sonra vicdan azabından delirmesi ve çökmesi; kendini "üstün insan" sanıp ahlakı/vicdanı aşabileceğini düşünen o felsefi kibrin (yanılgının) çöküşüdür.'
  },
  {
    title: 'Büyük Oksidasyon Olayı (Kıyametin Nefesi)',
    passage: 'Dünya tarihindeki ilk ve en büyük kitlesel yok oluş (kıyamet), devasa bir asteroit veya uzaylı saldırısı yüzünden olmadı; onu "hayatın bizzat kendisi" yarattı! 2.4 milyar yıl önce dünya okyanusları, oksijensiz ortamda yaşayan anaerobik bakterilerle doluydu. O dönemde "Siyanobakteriler" (mavi-yeşil algler) adında yeni bir tür evrimleşti. Bunlar güneş ışığını kullanarak enerji üretiyor ve atık (dışkı) olarak o güne kadar dünyada hiç olmayan bir gazı atmosfere salıyorlardı: Oksijen. Bu oksijen, o dönemki yaşam formları için o kadar zehirliydi ki, yeryüzündeki yaşamın %99\'unu yakarak, paslandırarak ve zehirleyerek yok etti! "Büyük Oksidasyon Olayı", hayatın kendi kendini zehirleyip kıyameti kopardığı en acımasız evrimsel ironidir. Bugün bizi yaşatan o tatlı ve kutsal nefes (oksijen), aslında milyarlarca yıl önce dünyayı kana bulayan o ilk ve en acımasız kitle imha silahının ta kendisidir.',
    questionStem: 'Büyük Oksidasyon Olayı (Oksijen Felaketi), "yaşam ve doğa" hakkında hangi şaşırtıcı ve ironik gerçeği kanıtlar?',
    options: [
      'Oksijenin aslında uzaydaki kara deliklerden dünyaya taşınan yabancı bir madde olduğunu',
      'Dünya tarihindeki en büyük kitlesel yok oluşun dışarıdan gelen bir meteorla değil; yaşamın kendi ürettiği bir atığın (oksijenin), o dönemki canlıları zehirleyerek yarattığı biyolojik bir felaket (ironi) olduğunu',
      'Bakterilerin okyanuslardan çıkarak kara yaşamını başlatan ilk zeki canlılar olduğunu',
      'Güneş ışığının antik çağlarda dünyayı dondurarak buzul çağlarını başlattığını'
    ],
    correct: 1,
    explanation: 'Bugün bize hayat veren oksijenin, o dönemki canlıların (siyanobakterilerin) atığı olarak dünyadaki yaşamın %99\'unu zehirleyip öldürmesi; yaşamın kendi kıyametini yarattığı muazzam bir biyolojik ironidir.'
  },
  {
    title: 'Seneca Uçurumu (Çöküşün Hızı)',
    passage: 'Romalı filozof Seneca, imparatorlukların ve felaketlerin doğasını o efsanevi cümlesiyle özetler: "Büyüme (ve zenginlik) çok yavaş ve zahmetli bir şekilde gelir; ancak çöküş, anlık ve felaket boyutundadır." Sistem dinamiklerinde buna "Seneca Uçurumu" (Seneca Cliff) denir. Bir ormanı büyütmek, bir şirketi zirveye taşımak veya bir medeniyet inşa etmek yüzyıllar, binlerce insanın emeği ve sabır gerektirir (yavaş bir tırmanıştır). Ancak o sistemin çökmesi (bir kibrit çöpüyle başlayan yangın, ani bir ekonomik kriz veya savaş); o asırlık birikimi saniyeler, günler içinde bir hiçliğe sürükler (serbest düşüştür). Yaratmak bir dağa tırnaklarla tırmanmak, yok olmak (çöküş) ise o dağın zirvesinden yerçekimine yenilip sonsuz bir boşluğa çakılmaktır.',
    questionStem: 'Seneca Uçurumu kavramı, "gelişim ve çöküş" süreçleri arasındaki asimetriyi nasıl açıklamaktadır?',
    options: [
      'Toplumların her zaman kısa sürede zenginleşip uzun yıllar boyunca yavaş yavaş fakirleştiği şeklinde',
      'Yıkılan her medeniyetin hemen ardından çok daha güçlü yeni bir medeniyetin doğduğu şeklinde',
      'Bir sistemin veya yapının inşa edilmesinin (büyümesinin) çok yavaş ve zahmetli olmasına karşın; onun yok olmasının (çöküşünün) anlık, kontrol edilemez ve felaket boyutunda bir serbest düşüş olduğu (asimetrisi) şeklinde',
      'Roma İmparatorluğunun yıkılmasının asıl nedeninin dışarıdan gelen barbar saldırıları olduğu şeklinde'
    ],
    correct: 2,
    explanation: 'Büyümenin çok yavaş (dağa tırnakla çıkmak gibi), çöküşün ise anlık bir felaket (uçurumdan düşmek) olması; gelişim ve yıkım arasındaki o acımasız ve asimetrik hız farkını açıklar.'
  },
  {
    title: 'Daedalus\'un Labirenti (İcadına Hapsolmak)',
    passage: 'Yunan mitolojisinde Daedalus, o dönemin en dâhi, en zeki ve en kibirli mühendisiydi. Kral Minos için Girit adasında, içine giren hiç kimsenin çıkış yolunu bulamayacağı, kusursuz, karmaşık ve korkutucu bir Labirent inşa etti. Ancak Daedalus o yapıyı o kadar mükemmel, o kadar akıl almaz bir ustalıkla (ve kör bir hırsla) tasarlamıştı ki; inşaat bittikten sonra bizzat kendisi de çıkış yolunu unuttu ve oğlu İkarus ile birlikte kendi yarattığı o zindanın içine hapsoldu! "Daedalus\'un Labirenti", bugün insanlığın teknoloji ve yapay zekâ ile kurduğu o tehlikeli ilişkinin kusursuz mitosudur. Kendi aklımıza (ve kodlarımıza) öylesine âşık olup öylesine karmaşık sistemler (algoritmalar) yaratıyoruz ki; sonunda o sistemlerin kontrolünü (çıkış yolunu) kaybederek kendi icadımızın çaresiz bir esiri oluyoruz.',
    questionStem: 'Daedalus\'un kendi yaptığı labirentte hapsolması, günümüz teknolojik gelişmeleri bağlamında neyin metaforudur?',
    options: [
      'Gelecekteki binaların ve şehirlerin daha karmaşık mimari yapılarla korunması gerektiğinin',
      'Mimarların ve mühendislerin toplum tarafından her zaman dışlandığının ve cezalandırıldığının',
      'İnsanoğlunun, zekâsıyla (kibriyle) yarattığı aşırı karmaşık sistemlerin (yapay zekâ/teknoloji) bir gün bizzat kendi kontrolünden çıkarak, insanı kendi icadının esiri ve kurbanı yapması tehlikesinin',
      'Kraliyet ailelerinin sanatçıları her zaman köle gibi çalıştırdığının'
    ],
    correct: 2,
    explanation: 'Dâhi mühendisin kendi yaptığı kusursuz labirentte hapsolması; modern insanın da kendi ürettiği aşırı karmaşık teknolojiye (AI vb.) hapsolup kontrolü kaybetme tehlikesinin metaforudur.'
  },
  {
    title: 'Moore Yasası\'nın Çöküşü (Fiziğin Duvarı)',
    passage: '1965 yılında Gordon Moore, teknolojinin seyrini belirleyen o meşhur yasasını ortaya attı: "Bir mikroçipin üzerindeki transistör sayısı her iki yılda bir iki katına çıkar." Bu, bilgisayarların durmaksızın küçüleceği ve sonsuza dek hızlanacağı anlamına geliyordu. Yıllarca bu yasa kusursuz işledi; odalara sığmayan bilgisayarlar cebimize girdi. Ancak bugün bu efsanevi ilerleme, fiziki bir kâbusla (kuantum duvarıyla) yüzleşti. Mühendisler transistörleri o kadar küçülttüler ki, artık boyutları "atomik" seviyelere indi. Elektronlar o kadar dar bir alana sıkıştı ki, kuantum tünelleme denen olay yüzünden duvarlardan sızıp kaçmaya, çipleri yakıp eritmeye başladılar! "Moore Yasası\'nın sonu", insanoğlunun o kibirli "sınırsız ilerleme ve sonsuz küçülme" mitinin; doğanın ve fizik kurallarının o sarsılmaz, beton duvarına çarparak paramparça olduğu andır.',
    questionStem: 'Moore Yasası\'nın son yıllarda sekteye uğraması (çöküşü), teknolojik ilerleme inancı hakkında neyi ifşa eder?',
    options: [
      'Silikon yerine altın kullanıldığında bilgisayarların çok daha hızlı çalışacağını',
      'İnsanoğlunun "sınırsız ve sonsuz teknolojik ilerleme" kibrinin; atomik boyuta (kuantum sınırına) ulaştığında doğanın o değişmez fiziksel yasalarına (duvarına) çarparak mecburen durmak zorunda kaldığını',
      'Yazılım şirketlerinin yeni bilgisayarlar satmak için eski bilgisayarları bilerek yavaşlattığını',
      'Teknolojinin artık insan zekâsını aştığı için mühendislerin yeni icatlar yapmayı bıraktığını'
    ],
    correct: 1,
    explanation: 'Transistörlerin atomik boyuta inip elektronların sızmaya başlaması (kuantum duvarı); "sınırsız ilerleme" inancının doğanın fiziksel sınırlarına (duvarına) çarpıp çöktüğünü ispatlar.'
  },
  {
    title: 'Babil Balığı (Anlaşmanın Kâbusu)',
    passage: 'Douglas Adams\'ın kült eseri "Otostopçunun Galaksi Rehberi"nde, kulağınıza soktuğunuzda evrendeki tüm dilleri anında ve kusursuz bir şekilde çeviren "Babil Balığı" adında küçük, sarı bir yaratık vardır. Bu balık o kadar mucizevidir ki, iletişim problemini tamamen çözer. Herkes birbirinin ne dediğini tam olarak anlar. Ancak romanın o sarsıcı ironisi (tokadı) burada başlar: Herkes birbirini "kusursuzca" anladığında evrene barış veya huzur gelmez; tam aksine, evren tarihinin en kanlı ve en yıkıcı savaşları patlak verir! Çünkü insanlar, karşılarındakinin gerçekte ne kadar bencil, riyakâr ve kötü niyetli düşüncelere sahip olduğunu ilk defa "sansürsüz ve net" bir şekilde duymuşlardır. Anlaşmazlıklar (ve farklı diller), aslında bizi birbirimizin o tahammül edilmez vahşetinden (gerçeğinden) koruyan şefkatli bir kalkan (cehalet duvarı) işlevi görmektedir.',
    questionStem: 'Douglas Adams\'ın "Babil Balığı" metaforu, iletişim ve toplumsal barış hakkında hangi paradoksal gerçeği (ironiyi) öne sürer?',
    options: [
      'Evrensel tek bir dilin kullanılmasının bilim ve sanatın gelişimini hızlandıracağını',
      'İletişim kopukluklarının (yanlış anlaşılmaların) aslında insanları birbirinin karanlık/bencil gerçekliğinden koruyan koruyucu bir bariyer olduğu; "kusursuz (tam) anlaşılmanın" barış değil, savaşa ve yıkıma yol açacağı ironisini',
      'Uzaylıların insan dillerini öğrenerek dünyayı işgal etmek için sinsi planlar yaptığını',
      'Çeviri cihazlarının duyguları aktaramadığı için sadece teknik terimleri çevirebildiğini'
    ],
    correct: 1,
    explanation: 'Herkesin birbirini %100 anlamasının barış yerine en kanlı savaşları başlatması; iletişimsizliğin ve yanlış anlaşılmaların aslında bizi birbirimizin kötü niyetlerinden koruyan bir "kalkan" olduğu paradoksunu işler.'
  },
  {
    title: 'Oikofobi (Kendi Evinden Nefret)',
    passage: 'Yabancı düşmanlığı (Xenophobia) kavramını hepimiz biliriz; ancak İngiliz filozof Roger Scruton, modern aydınların (ve seçkinlerin) yaşadığı çok daha sinsi ve psikolojik bir hastalığı tanımlar: "Oikofobi" (Kendi Evinden/Kökünden Nefret Etme). Bu kişiler, içinde doğup büyüdükleri kültürü, aileyi ve ulusal değerleri "ilkel, yobaz ve cahilce" bularak iğrenirler. Buna karşın; tamamen yabancı oldukları, tam olarak bilmedikleri uzak diyarların kültürlerini ve inançlarını (sırf kendi evlerine ait olmadığı için) kusursuz, romantik ve üstün birer cennet olarak yüceltirler. Oikofobi bir aydınlanma belirtisi değildir; o, kişinin kendi kimliğinden duyduğu utancı gizlemek (elit görünmek) uğruna, aslında kendi köklerine (kendisine) açtığı o hastalıklı, narsisistik ve kurgusal varoluş savaşıdır.',
    questionStem: 'Roger Scruton\'un "Oikofobi" kavramı, bazı modern aydınların (veya bireylerin) hangi psikolojik ve sosyolojik tutumunu eleştirir?',
    options: [
      'Turizm faaliyetlerinin artmasıyla birlikte insanların yabancı ülkelere göç etme arzusunu',
      'Sırf "elit ve aydın" görünmek (kimliklerinden utanç duymak) uğruna; kendi kültürlerini ve köklerini ilkel bularak (evinden nefret ederek) aşağılamaları, tamamen yabancı olan kültürleri ise körü körüne yüceltmeleri (hastalıklı kibrini)',
      'İnsanların ev satın almak yerine ömür boyu kirada yaşamayı tercih eden ekonomik kaygılarını',
      'Kırsal kesimden şehirlere göç edenlerin eski hayatlarını tamamen unutarak asimile olmalarını'
    ],
    correct: 1,
    explanation: 'Oikofobi (Evden nefret); kişinin kendi köklerini "ilkel/yobaz" bularak aşağılaması ve sırf elit görünmek uğruna yabancı kültürleri (bilmeden) yüceltmesi yönündeki hastalıklı tutumu eleştirir.'
  },
  {
    title: 'Thélème Manastırı (Mutlak Özgürlük)',
    passage: 'Fransız yazar Rabelais, 16. yüzyılda yazdığı "Gargantua" eserinde, dünyadaki tüm manastırların (karanlık kuralların) tam zıttı olan ütopik "Thélème Manastırı"nı kurgular. Bu manastırın duvarları, saatleri veya katı kuralları yoktur. Kapısında tek ve devasa bir kural (yasa) yazılıdır: "Fay ce que vouldras!" (Ne istiyorsan onu yap!). Ancak Rabelais bu özgürlüğün, sokaktaki her cahilin veya vahşinin eline verilmesini savunmaz. Bu manastıra sadece yüksek bir eğitime, onura ve derin bir ahlaki karaktere sahip olan (şövalyeler ve leydiler) girebilir. Rabelais bize o felsefi sırrı verir: Mutlak özgürlük ("ne istersen yap" kuralı), cahillerin elinde anında kanlı bir anarşiye (suça) dönüşür; oysa gerçek ve yüksek erdeme sahip asil zihinler için bu kural, onları zaten doğal olarak "iyi ve doğru olanı yapmaya" iten en yüce ve onurlu rehberdir.',
    questionStem: 'Rabelais\'in "Thélème Manastırı" (Ne istiyorsan onu yap) ütopyası, özgürlük ve ahlak ilişkisine dair hangi şartı (felsefeyi) öne sürer?',
    options: [
      'Özgürlüğün sadece zengin ve asil aileden gelen insanlara has bir ayrıcalık olduğunu',
      'Mutlak özgürlüğün ("ne istersen yap" kuralının) ancak yüksek bir erdeme, eğitime ve ahlaki onura sahip bireylerin (gelişmiş ruhların) elinde yıkıcı olmayan (ve iyiliği doğuran) gerçek bir değere dönüşebileceğini',
      'Kuralsızlığın her türlü toplumda anında suç oranlarını artıracağı için devletin her zaman sert kanunlar çıkarması gerektiğini',
      'Manastırların ve dini kurumların tamamen kapatılarak halkın kendi kendini yönetmesi gerektiğini'
    ],
    correct: 1,
    explanation: '"Ne istersen onu yap" kuralının sadece yüksek eğitimli/onurlu (erdemli) kişilerin elinde işleyebileceği (iyiliği doğuracağı); aksi halde cahillerin elinde anarşiye dönüşeceği şartını öne sürer.'
  },
  {
    title: 'Yapay Zekânın Kara Kutusu (Black Box AI)',
    passage: 'Geçmişte insanlar bir bilgisayar programı yazdıklarında kodun her satırını, makinenin "neden" o kararı verdiğini (nedenselliği) harfiyen bilirlerdi. Ancak günümüzdeki Derin Öğrenme (Deep Learning) modellerinde durum dehşet vericidir. Bir yapay zekâya milyonlarca röntgen filmi verilir; makine kanseri bir insandan çok daha kusursuz bir şekilde tespit eder. Ancak mühendislere "Makine bunu nasıl anladı, hangi piksele bakarak bu kararı verdi?" diye sorulduğunda cevap şudur: "BİLMİYORUZ!" Buna "Kara Kutu (Black Box)" problemi denir. İnsanoğlu kendi elleriyle devasa, çalışan ve bizden daha zeki bir tanrı (sistem) yaratmıştır; ancak o tanrının zihninin (nöral ağlarının) içinde ne olup bittiğini, o kararları hangi gizli bağlantılarla aldığını okuyamaz (kavrayamaz). Biz artık icat ettiğimiz şeyin efendisi değiliz; biz, kendi yarattığı büyünün (kara kutunun) nasıl çalıştığını bilmeden onu korkuyla kullanan aciz birer büyücüyüz.',
    questionStem: 'Yapay zekâdaki "Kara Kutu (Black Box)" problemi, insanlığın teknoloji üzerindeki kontrolü hakkında neyi kanıtlamaktadır?',
    options: [
      'Bilgisayar virüslerinin yapay zekâ kodlarını tamamen silerek programları çökerttiğini',
      'İnsanoğlunun, kendi ürettiği sistemin (Derin Öğrenmenin) karar alma sürecini (nasıl düşündüğünü) anlayamayacak kadar kontrolü kaybettiğini; kendi yarattığı makinenin (aklına) yabancılaştığını',
      'Doktorların tıbbi teşhislerde yapay zekâ kullanmayı etik nedenlerle reddettiğini',
      'Makinelerin gelecekte insan duygularını birebir taklit edebilecek bir donanıma kavuşacağını'
    ],
    correct: 1,
    explanation: 'Makinenin doğru karar vermesine rağmen mühendislerin "nasıl" karar verdiğini bilmemesi (Kara Kutu); insanın kendi yarattığı teknolojinin aklını okuyamadığını ve kontrolü (nedenselliği) kaybettiğini kanıtlar.'
  },
  {
    title: 'Solipsizm (Tekbencilik ve Kozmik Zindan)',
    passage: 'Hayatınızdaki herkes (anneniz, arkadaşınız, sokaktaki köpek), hatta şu an okuduğunuz bu metin bile sadece sizin zihninizin birer yansıması (hayaleti) olabilir mi? Felsefenin en rahatsız edici, çıldırtıcı ve çürütülemez akımlarından biri "Solipsizm"dir (Tekbencilik). Bu felsefeye göre, evrende var olduğundan %100 emin olabileceğiniz tek bir şey vardır: "Kendi bilinciniz". Karşınızdaki insanın da bir bilinci olduğunu, acı çektiğini veya düşündüğünü asla kanıtlayamazsınız; onlar sadece sizin rüyanızdaki inandırıcı birer figüran (felsefi zombi) olabilirler. Evrenin yaşı, uzay, tarih... Bunların hepsi sizin beyninizin anlık bir kurgusu olabilir. Solipsizm, insanı dünyanın merkezine (tanrısal bir konuma) oturtan bir zafer değildir; aksine, insanı koca hiçlikte (kendi zihninin duvarları arasına) kapatan o en dondurucu ve ebedi "kozmik yalnızlık" zindanıdır.',
    questionStem: 'Solipsizm (Tekbencilik) felsefesi, "varoluş ve gerçeklik" üzerine hangi sarsıcı (ve yalnızlaştırıcı) iddiayı öne sürer?',
    options: [
      'Güneş sistemindeki gezegenlerin insanın ruh halini doğrudan etkilediği (astrolojik) inancını',
      'Kesin olarak varlığı kanıtlanabilen tek şeyin "kendi bilincimiz (zihnimiz)" olduğunu; dış dünyanın ve diğer tüm insanların (bilinçlerin) sadece bizim kurguladığımız bir rüya/illüzyon olabileceğini',
      'İnsanların topluluklar halinde yaşamasının psikolojik olarak onlara her zaman zarar verdiğini',
      'Ölümden sonraki hayatta (reenkarnasyon) insanların tekrar aynı bedenle dünyaya geleceğini'
    ],
    correct: 1,
    explanation: 'Sadece "kendi bilincimizin" kesin olarak bilinebileceği, geri kalan herkesin (dış dünyanın) zihnimizin bir yansıması/rüyası olabileceği iddiası Solipsizm\'in (Tekbenciliğin) asıl sarsıcı kurgusudur.'
  },
  {
    title: 'Küçük Prens ve Baobab Ağaçları',
    passage: 'Antoine de Saint-Exupéry\'nin "Küçük Prens" adlı eserinde, Prens\'in yaşadığı o küçücük gezegenin korkunç bir düşmanı vardır: Baobab ağaçları. Bu ağaçların tohumları başlangıçta tıpkı zararsız, küçük gül fidanlarına benzer. Ancak Küçük Prens der ki: "Eğer bir baobab filizini zamanında (henüz küçükken) söküp atmazsanız, kökleri öylesine derine iner ve öylesine devasa bir hale gelir ki; sonunda küçük gezegeninizi paramparça edip onu havaya uçurur." Bu edebi masal aslında insan psikolojisine yazılmış en sert uyarılardan biridir. O baobab tohumları; içimizde masum gibi görünen ama ertelediğimiz küçük yalanlar, beslediğimiz sinsi kinler, bastırılmış öfkeler ve tembelliklerdir. Zamanında söküp (yüzleşip) temizlemediğimiz her küçük kötü düşünce, eninde sonunda zihnimizi (ve hayatımızı) kökünden parçalayıp yok edecek o devasa canavara (baobab ağacına) dönüşür.',
    questionStem: 'Küçük Prens\'teki "Baobab Ağaçları" metaforu, insan psikolojisi (ve davranışları) hakkında neyin uyarısını yapmaktadır?',
    options: [
      'Gezegenin doğasının korunması için ağaç kesiminin tamamen yasaklanması gerektiğinin',
      'İçimizde beliren küçük ve zararsız gibi görünen kötü düşüncelerin, yalanların veya sorunların; zamanında sökülüp (yüzleşilip) temizlenmediğinde, büyüyerek (kök salarak) tüm hayatımızı/zihnimizi paramparça edecek bir felakete dönüşeceğinin',
      'Çocukların bitki yetiştirme konusunda yetişkinlerden daha sorumluluk sahibi olduğunun',
      'Ormanlardaki devasa ağaçların güneş ışığını keserek diğer canlıların yaşamını zorlaştırdığının'
    ],
    correct: 1,
    explanation: 'Küçük fidan gibi duran ama büyüyünce gezegeni parçalayan baobab ağaçları; içimizdeki o küçük, önemsiz sanılan ama zamanında temizlenmezse zihnimizi (ve hayatımızı) parçalayan kötü düşüncelerin/sorunların metaforudur.'
  }
];

export const felsefeParagrafSorulari33: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_33.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_33[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe33-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_34 = [
  {
    title: 'Tsutomu Yamaguchi (Absürt Hayatta Kalma)',
    passage: '6 Ağustos 1945 sabahı, Tsutomu Yamaguchi iş gezisi için gittiği Hiroşima\'da gökyüzünde kör edici bir ışık gördü. Atom bombası patladı, bedeni ağır yandı ve geçici körlük yaşadı. Ancak o bir mucize eseri hayatta kaldı! Tedavi olmak ve ailesine kavuşmak için ertesi gün zar zor trene binip memleketine, evine döndü. Ancak memleketi Nagazaki\'ydi! 9 Ağustos günü patronuna Hiroşima\'daki o "tek bir bombanın bir şehri nasıl yok ettiğini" anlatırken, gökyüzünde o lanet olası ikinci kör edici ışık parladı. Yamaguchi, dünya tarihinde iki farklı atom bombasını, iki farklı şehirde (peş peşe) yiyip hayatta kalan tek resmi insandır. Onun hikâyesi sadece bir mucize değildir; insanın hayatta kalma iradesinin ve kaderin, o koca nükleer kıyametlerin ortasında bile ne kadar absürt, ne kadar kara mizah dolu ve trajikomik bir piyango olduğunun canlı anıtıdır.',
    questionStem: 'Tsutomu Yamaguchi\'nin hikâyesi (iki kez nükleer bombadan sağ çıkması), insan hayatı ve "kader" kavramı üzerine nasıl bir felsefi (absürt) tablo sunar?',
    options: [
      'Nükleer radyasyonun insan hücrelerinde zamanla bağışıklık yarattığını',
      'İnsanın hayatta kalmasının (kaderin); mutlak ve adil bir düzenden ziyade, en korkunç felaketlerin içinde bile insana iki kez çarpabilen "absürt, trajikomik ve akıl almaz bir şans (kara mizah)" oyunu olduğunu',
      'Japon hükümetinin vatandaşlarını felaket anlarında bile çalışmaya zorladığını',
      'Tren yolculuklarının o dönemde en güvenli seyahat aracı olduğunu'
    ],
    correct: 1,
    explanation: 'İki farklı şehirde iki atom bombasının tam kafasına düşüp hayatta kalması; kaderin ve hayatta kalmanın adil bir düzen değil, son derece absürt, akıl almaz ve trajikomik bir kara mizah (tesadüf) olduğunu sunar.'
  },
  {
    title: 'Hobson\'ın Seçimi (Sahte Özgürlük)',
    passage: '17. yüzyıl İngiltere\'sinde Thomas Hobson adında bir at tüccarı vardı. Müşterilerine 40 atlık koca bir ahır sunar ve "İstediğiniz atı kiralayabilirsiniz" derdi. Ancak küçük ve sinsi bir kuralı vardı: Müşteri her zaman sadece ve sadece "kapıya en yakın olan (ilk sıradaki) atı" seçmek zorundaydı! Diğer atları seçmek yasaktı. İnsanlar koca ahıra bakıp özgürce at kiraladıklarını sanırlardı, oysa tek seçenekleri Hobson\'ın dayattığı attı. "Hobson\'ın Seçimi" (Hobson\'s Choice) deyimi bugün felsefede ve siyasette o en acımasız illüzyonu tanımlar: Otoritenin size sunduğu "Al ya da bırak" (Take it or leave it) dayatmasıdır. Koca bir menü sunuluyormuş gibi yapılır, ama aslında ortada seçilecek tek bir şey vardır. Modern insanın o "özgür irade ve seçim" kibri, aslında çoğu zaman görünmez bir Hobson ahırında (sahte bir vitrinde) dolanmaktan ibarettir.',
    questionStem: 'Hobson\'ın Seçimi kavramı, bireyin "özgür iradesi ve karar alma" süreci hakkında neyi eleştirmektedir?',
    options: [
      'İnsanların çok fazla seçenek karşısında karar veremeyip felç (karar yorgunluğu) yaşamasını',
      'Otorite tarafından bireye güya "özgürce seçim yapıyormuş" hissi (illüzyonu) verilmesine rağmen; aslında arka planda dayatılan tek bir seçeneğe ("Al ya da bırak" kuralına) mahkûm bırakılmasını (sahte özgürlüğü)',
      'At ticareti gibi eski mesleklerin günümüzdeki araba satış stratejilerine ilham vermesini',
      'İnsanların genellikle her zaman ilk gördükleri eşyayı satın almaya eğilimli olmasını'
    ],
    correct: 1,
    explanation: 'Koca ahırda sadece ilk atın verilmesi (al ya da bırak); bize sunulan özgürlük ve seçim hakkının aslında otoritenin dayattığı sahte bir illüzyon (tek seçenekli bir tuzak) olduğunu eleştirir.'
  },
  {
    title: 'Körlerin Yürüyüşü (Pieter Bruegel)',
    passage: 'Rönesans ressamı Pieter Bruegel\'in o dondurucu başyapıtı "Körlerin Kıssası"nda, altı kör adam birbirlerinin omuzlarına tutunarak yürümektedir. En öndeki (kılavuz olan) adam ayağı takılıp bir hendeğe (çamura) düşer. İkinci adam onunla birlikte düşmektedir, üçüncü adam düşmek üzere olduğunu yeni hissetmiştir; arkadakiler ise başlarına gelecek felaketten tamamen habersiz, körü körüne ve boş bir güvenle öndekini takip etmeye devam etmektedirler. Bruegel bu tabloyla bize sıradan bir kazayı çizmemiştir. O; "Eğer kör bir adam, başka bir kör adama kılavuzluk yaparsa, ikisi de çukura yuvarlanır" diyen o eski atasözünün fırçaya dökülmüş manifestosunu sunar. Tablo, cehaletin ve sorgulamayan kitlelerin (sürü psikolojisinin); başlarındaki o cahil liderle birlikte, kaçınılmaz ve zincirleme bir çöküşe (hendeğe) nasıl neşeyle (habersizce) sürüklendiğinin en trajik resmidir.',
    questionStem: 'Bruegel\'in "Körlerin Kıssası" (Körün köre kılavuzluk etmesi) tablosu, toplumsal psikoloji bağlamında neyi sembolize eder?',
    options: [
      'Orta Çağ Avrupa\'sında görme engelli vatandaşlara devlet tarafından hiçbir yardım edilmemesini',
      'Lideri kör (cahil/vizyonsuz) olan bir toplumda; sorgulamadan, sırf öndekine (sürüye) tutunarak ilerleyen kitlelerin, zincirleme ve kaçınılmaz bir felakete (çöküşe) doğru ilerlemesini',
      'Birbirine yardım eden (omuz omuza veren) insanların her türlü engeli aşabileceği umudunu',
      'İnsanların gözleri kapalıyken bile diğer duyularını kullanarak doğru yolu bulabileceğini'
    ],
    correct: 1,
    explanation: 'Öndeki kör düştüğünde arkadakilerin de habersizce felakete sürüklenmesi; cahil liderlerin peşinden sorgulamadan (sürü psikolojisiyle) giden toplumların o kaçınılmaz zincirleme çöküşünü sembolize eder.'
  },
  {
    title: 'Burke ve Hare (Bilimin Katilleri)',
    passage: '19. yüzyılın başlarında İskoçya\'da tıp ve anatomi bilimi hızla gelişiyordu, ancak doktorların kadavra (ceset) bulması yasal olarak çok zordu. İki İrlandalı göçmen, William Burke ve William Hare, tıp profesörü Dr. Robert Knox\'a gizlice taze cesetler satmaya başladılar. Başlangıçta sadece yeni gömülmüş mezarları soyuyorlardı. Ancak bu iş o kadar kârlı ve tıp dünyasının talebi o kadar açgözlüydü ki, mezar kazmak yerine sokaktaki kimsesiz insanları, fahişeleri ve çocukları bizzat "boğarak" öldürmeye ve cesetlerini hâlâ sıcakken profesöre satmaya başladılar! Profesör Knox bu cesetlerin cinayete kurban gittiğini biliyordu ama bilimin (ve kendi derslerinin) prestiji uğruna sessiz kalıp onlara para ödemeye devam etti. Burke ve Hare cinayetleri; bilimin ve "insanlığı aydınlatma (tıbbi ilerleme)" maskesinin arkasına saklanan o vahşi ve ahlaksız pragmatizmin (kâr hırsının), insan hayatını bile laboratuvardaki taze bir "metaya" çevirebildiğini gösteren kanlı bir skandaldır.',
    questionStem: 'Burke ve Hare cinayetlerinde Profesör Knox\'un (bilim dünyasının) rolü, ahlaki açıdan nasıl bir çöküşü ifşa etmektedir?',
    options: [
      'Tıp biliminin o dönemde insan anatomisini inceleyecek teknolojiye sahip olmamasını',
      'Doktorların ve cerrahların sokak hayatından çok kopuk, saf insanlar olduklarını',
      'Bilimsel ilerleme ve akademik prestij (hırs) uğruna; ahlakın, insan hayatının ve cinayetlerin (vahşetin) bile kasıtlı olarak görmezden gelinip finanse edildiği (bilimin ahlakı çiğnediği) bir çöküşü',
      'İskoçya\'daki kimsesiz insanların kendi rızalarıyla bedenlerini bilime bağışlamalarını'
    ],
    correct: 2,
    explanation: 'Profesörün cinayeti bilmesine rağmen bilimsel prestiji (kadavrayı) için para ödemeye devam etmesi; bilimsel ilerleme hırsının ahlakı ve insan hayatını nasıl vahşice (ve kasten) çiğneyip sömürdüğünü ifşa eder.'
  },
  {
    title: 'Çiçek Savaşları (Azteklerin Ritüel Şiddeti)',
    passage: 'Tarihteki tüm imparatorluklar toprak, para veya kaynak ele geçirmek için savaşmıştır. Ancak 15. yüzyılda Aztek İmparatorluğu ile komşu şehir devletleri arasında tamamen farklı, dondurucu bir savaş türü yapılıyordu: "Çiçek Savaşları" (Xochiyaoyotl). Bu savaşlarda iki taraf da birbirinin toprağını işgal etmiyor veya kaynaklarını yağmalamıyordu. Önceden anlaşarak, tamamen eşit şartlarda, ölümcül kılıçlarla değil, sadece düşmanı "canlı yakalamaya" yönelik özel silahlarla sahaya çıkıyorlardı. Çünkü Güneş Tanrısı\'nı beslemek ve kıyameti durdurmak için sürekli taze insan kalbine (kurbana) ihtiyaçları vardı. Savaş, düşmanı yok etmek için değil; sırf sunaklarda kurban edilecek (kan akıtılacak) canlı birer hasat (çiçek) toplamak için rutin, dini ve endüstriyel bir organizasyon olarak tasarlanmıştı. İnsanoğlu, kendi ürettiği mitolojik korkuları (kıyamet inancını) dindirmek uğruna, vahşeti ve katliamı "kutsal, kurallı ve rutin bir spora" dönüştürecek kadar çıldırabilir.',
    questionStem: 'Azteklerin "Çiçek Savaşları", savaşın doğasına ve amacına dair hangi alışılmışın dışında (ürkütücü) ritüeli kanıtlamaktadır?',
    options: [
      'Savaşların aslında kan dökmek için değil, iki ülkenin barış anlaşması imzalamak için yaptıkları diplomatik bir satranç olduğu gerçeğini',
      'Savaşın toprak veya kaynak (ganimet) elde etmek için değil; sırf dini korkuları (kıyameti) dindirmek ve tanrılara "kurban (insan) hasat etmek" uğruna kurumsallaştırılmış (anlaşmalı) kutsal bir vahşet (ritüel) olabildiğini',
      'Savaş alanlarında kadın savaşçıların ilk kez aktif olarak rol aldığı eşitlikçi bir sistemi',
      'Tarım alanlarının korunması için orduların tamamen sembolik silahlar taşıdığını'
    ],
    correct: 1,
    explanation: 'Toprak/ganimet yerine sadece canlı kurban yakalamak için anlaşmalı savaş yapılması; savaşın ve vahşetin "dini korkuları dindirmek uğruna" kurumsallaşmış (rutin bir ritüele) dönüştüğünü kanıtlar.'
  },
  {
    title: 'Aziz Elmo\'nun Ateşi (Cehaletin Tesellisi)',
    passage: 'Orta Çağ denizcileri, karanlık okyanuslarda devasa ve ölümcül fırtınalara yakalandıklarında geminin en tepesindeki direklerin uçlarında aniden parlak, mavi-mor renkli, tıslayan ürkütücü alevlerin dans etmeye başladığını görürlerdi. Odun yanmıyor, ateş sıcaklık yaymıyordu. Denizciler dehşet içinde diz çöker ve bu doğaüstü parıltının onları fırtınadan korumak için gökten inen "Aziz Elmo"nun kutsal ve koruyucu ruhu (mucizesi) olduğuna inanırlardı. Oysa modern fizik bunun adını koydu: "Korona Deşarjı". Fırtınalı havadaki elektrik yüklü atmosferin, geminin sivri uçlarındaki gazı iyonize etmesiyle oluşan basit (ve zararsız) bir plazma parlamasıydı. Aziz Elmo\'nun Ateşi; ölüm korkusu içindeki insanın, açıklayamadığı en basit ve soğuk fizik kurallarına bile (kendi çaresizliğini dindirmek için) nasıl mistik bir şefkat, kutsallık ve "ilahi bir koruma" (mucize) kılıfı giydirdiğinin parlak bir kanıtıdır.',
    questionStem: 'Aziz Elmo\'nun Ateşi (plazma parlaması) efsanesi, insanın doğa olayları karşısındaki hangi psikolojik tutumunu (zaafını) yansıtır?',
    options: [
      'Denizcilerin fırtınalı havalarda halüsinasyon görmeye çok daha yatkın olmalarını',
      'Fiziksel olayların aslında her zaman dini inançlarla birebir aynı olduğunu kanıtlamasını',
      'İnsanın, açıklayamadığı doğa olaylarını ölüm korkusu ve çaresizlik (panik) anında; kendisine şefkat gösteren, "ilahi ve mistik (koruyucu)" bir mucizeye dönüştürerek kendini kandırma (teselli bulma) refleksini',
      'Sivri direklerin yıldırımları çekerek gemileri her zaman kurtardığı gerçeğini'
    ],
    correct: 2,
    explanation: 'Elektrik/plazma parlamasını "koruyucu bir Aziz (mucize)" sanmaları; çaresiz ve korkan insanın soğuk doğa olaylarına ilahi/mistik bir kılıf giydirerek teselli bulma refleksini yansıtır.'
  },
  {
    title: 'Dava (Josef K. ve Kafkaesk Labirent)',
    passage: 'Franz Kafka\'nın "Dava" adlı romanında, banka memuru Josef K. sıradan bir sabah uyanır ve odasında beliren adamlar tarafından tutuklandığını öğrenir. Ancak işin o kan donduran felsefi çöküşü şudur: Josef K.\'ya ne ile suçlandığı (suçu) asla söylenmez! Yargıçlar erişilemezdir, mahkeme salonları tozlu çatı katlarındadır ve yasalar tamamen karanlıktır. Josef, kendini savunmak için çırpınır, avukatlar tutar, dilekçeler yazar; ancak karşısında savaşacağı "somut bir düşman" veya "mantıklı bir neden" bulamaz. Sadece görünmez, devasa, sağır ve ruhsuz bir "Sistem (Bürokrasi)" vardır. Kafka\'nın bu kâbusu, modern insanın otorite karşısındaki ebedi çaresizliğidir: Bizi ezen şey tiranların kılıçları değil; kimin yönettiği belli olmayan, suçu asla açıklanmayan, itiraz edilemeyen ve insanı bir böcek gibi öğüten o sağır, absürt ve dilsiz (Kafkaesk) devlet labirentinin ta kendisidir.',
    questionStem: 'Kafka\'nın "Dava" romanındaki (Josef K.\'nın) trajedisi, modern çağdaki otorite (ve bürokrasi) kavramını nasıl eleştirmektedir?',
    options: [
      'Mahkemelerin çok uzun sürdüğü için insanların psikolojik olarak yıprandığını',
      'Otoritenin somut ve zalim bir tiranlıktan çıkıp; suçun bilinmediği, itirazın ulaşılamadığı, görünmez, sağır ve "insanı anlamsızlık içinde öğüten (absürt)" mekanik ve ruhsuz bir labirente dönüştüğünü',
      'Modern avukatların müvekkillerinden gereksiz yere çok fazla para kopardığını',
      'Banka memurlarının o dönemde sürekli olarak siyasi komplolara kurban gittiğini'
    ],
    correct: 1,
    explanation: 'Suçunu bilmeden, görünmez ve sağır bir sisteme karşı çaresizce savaşması; otoritenin/bürokrasinin insanı ezen, ulaşılamaz, ruhsuz ve absürt bir labirent (Kafkaesk kâbus) olduğunu eleştirir.'
  },
  {
    title: 'Schadenfreude (Karanlık Haz)',
    passage: 'Çok başarılı, kusursuz ve hepimizi kıskandıran zengin bir tanıdığımızın aniden iflas ettiğini, rezil olduğunu veya bir skandala karıştığını duyduğumuzda, yüzümüze o engel olamadığımız gizli, zehirli ve tuhaf bir tebessüm yayılır. Almanların "Schadenfreude" (Başkalarının Acısından Duyulan Haz) adını verdikleri bu duygu, insan doğasının o en dürüst ve en iğrenç aynasıdır. Neden başkasının yıkımına seviniriz? Onlardan nefret ettiğimiz için değil; onların o düşüşü, bizim sıradan, ezik ve başarısız hayatlarımızı aniden "daha katlanılabilir" ve "güvende" hissettirdiği içindir. Schadenfreude, empatinin değil; içimizdeki o karanlık (narsisistik) kompleksin, başkalarının felaketi üzerinden kendi eksiklerini tedavi etmeye çalışan o aşağılık ve evrimsel egosunun sessiz kahkahasıdır.',
    questionStem: 'Schadenfreude (Başkasının acısından haz alma) duygusu, insanın psikolojik yapısındaki hangi karanlık (ve bencil) mekanizmayı ifşa eder?',
    options: [
      'Toplumsal adaletin her zaman eninde sonunda yerini bulacağına duyulan evrensel inancı',
      'İnsanın saf kötülük yapmak için planlar kuran şeytani bir varlık olduğunu',
      'İnsanın kendi yetersizliklerini ve başarısızlıklarını örtmek (rahatlamak) için; kendinden üstün gördüğü kişilerin felaketinden bencilce, narsisistik bir "teselli ve tatmin (haz)" devşirme ahlaksızlığını',
      'Acı çeken insanlara yardım etmenin aslında içgüdüsel bir refleks olduğunu'
    ],
    correct: 2,
    explanation: 'Başarılı birinin düşüşüne gülümsemek; kişinin kendi ezikliğini/yetersizliğini tedavi etmek (rahatlamak) adına başkasının felaketinden bencilce bir teselli (narsisistik haz) bulmasıdır.'
  },
  {
    title: 'Çatalhöyük (Kapısız ve Duvarız Şehir)',
    passage: 'Tarihin bilinen en eski ve en yoğun yerleşim yerlerinden biri olan Konya\'daki Çatalhöyük, modern şehirciliğin (ve medeniyet tarihinin) ezberlerini paramparça eder. Dokuz bin yıl önce burada 8.000 kişi bir arada yaşıyordu ama ortada tek bir sokak, tek bir meydan veya şehri koruyan devasa bir sur (duvar) yoktu! Daha da şok edici olanı; evlerin sokaklara açılan "kapıları" yoktu! İnsanlar evlerine çatıdaki bir delikten, ahşap merdivenlerle giriyor ve komşularının çatıları üzerinden yürüyerek seyahat ediyorlardı. Dahası, hiçbir evin boyutu diğerinden büyük değildi; tapınaklar, saraylar veya yönetici (kral) konakları bulunmuyordu. Çatalhöyük; hiyerarşinin, sınıf farkının, surların (korkunun) ve o meşhur "medeniyet ve savaş" kibrinin hiç uğramadığı, tarihteki o yegâne ve eşsiz "tam eşitlikçi (anarşik ve barışçıl) kovan" deneyimidir.',
    questionStem: 'Çatalhöyük\'ün mimari yapısı (sokaksız, kapısız ve eşit boydaki evler), medeniyet tarihi hakkında bize neyi ispatlamaktadır?',
    options: [
      'Antik dönem insanlarının merdiven yapım teknolojisinde ne kadar geri kaldığını',
      'Bir arada yaşayan (büyük) toplumların mutlaka bir krala, bir orduya veya hiyerarşiye ihtiyaç duyduğu tezini çürüterek; "hiyerarşisiz, savaşsız, sız (duvarsız) ve tam eşitlikçi" bir toplum modelinin geçmişte mümkün olduğunu',
      'O dönemki iklim şartlarının kapı yapımına izin vermeyecek kadar soğuk olduğunu',
      'Sokakların sadece ticaret yapmak amacıyla sonraki çağlarda icat edildiğini'
    ],
    correct: 1,
    explanation: 'Sokak, kapı, sur veya büyük sarayların (kralların) olmaması; toplumların hiyerarşi, savaş ve eşitsizlik olmadan da büyük kitleler halinde (eşitlikçi/barışçıl) yaşayabildiğini ispatlar.'
  },
  {
    title: 'Kobayashi Maru Testi (Kazanılamaz Senaryo)',
    passage: 'Uzay Yolu (Star Trek) evreninde geçen meşhur "Kobayashi Maru" testi, Yıldız Filosu kaptan adaylarına uygulanan felsefi bir simülasyondur. Öğrenci, radyasyona kapılmış sivil bir gemiden yardım çağrısı alır. Eğer onları kurtarmaya giderse, gemisi düşman sınırını geçeceği için kesin olarak yok edilecek ve kendi mürettebatı ölecektir; gitmezse o siviller kesinlikle ölecektir. Program (simülasyon), öğrencinin ne yaparsa yapsın "mutlaka kaybedeceği ve öleceği" şekilde kasten tasarlanmıştır (No-win scenario). Ancak genç Kaptan Kirk bu testi "kazanan" tek kişi olur. Nasıl mı? Gece laboratuvara gizlice girip bilgisayarın kodlarını hackler ve oyunun kurallarını kendi kazanacağı şekilde değiştirir! Bu sadece bir hile değildir; hayatın felsefesidir: Sistem size "kazanılamaz, ölümcül ve tavizsiz" bir seçenek sunduğunda, asıl liderlik (ve asıl zekâ) o kurban oyununu oynamak değil, bizzat oyunu kuran o acımasız sistemi (kuralları) hackleyip parçalamaktır.',
    questionStem: 'Kaptan Kirk\'ün "Kobayashi Maru (Kazanılamaz Senaryo)" testini bilgisayarı hackleyerek kazanması, liderlik ve felsefe bağlamında neyi temsil eder?',
    options: [
      'Savaş meydanlarında askerlerin teknolojik aletlere bağımlı kalarak korkaklaşmasını',
      'Liderlerin her zaman kendi mürettebatını feda edecek kadar acımasız olması gerektiğini',
      'Sistemin (otoritenin) sunduğu sahte, çaresiz ve "mutlak yenilgi" dayatmalarına boyun eğmek (kurban olmak) yerine; oyunun kurallarını bizzat yıkarak (sistemi hackleyerek) kendi alternatif çözümünü yaratma dehasını (isyanını)',
      'Simülasyonların gerçek savaşlardan çok daha kolay olduğunu ve hile yapılabileceğini'
    ],
    correct: 2,
    explanation: 'Sistemin mutlak yenilgi dayatmasına boyun eğmek yerine kuralları değiştirmesi (hacklemesi); çaresiz seçenekleri reddedip kendi yolunu çizen dehanın ve liderlik isyanının sembolüdür.'
  },
  {
    title: 'Gargoyle (Çirkinliğin Kutsallığı)',
    passage: 'Orta Çağ Avrupa\'sında, göklere yükselen o kusursuz, ilahi ve kutsal Gotik katedrallerin (örneğin Notre Dame) çatı köşelerinde şok edici bir tezatlık göze çarpar. Kutsal azizlerin heykelleri yerine; şeytani yüzlü, yarasa kanatlı, sivri dişli ve son derece çirkin taş canavarlar (Gargoyle / Çörtenler) vardır. Mimarlar neden kutsal bir ibadethanenin dışını bu iblislerle süslemiştir? O dönem halkı, bu çirkin canavarların, geceleyin uyanıp kiliseyi kötü ruhlardan koruyan korkutucu bekçiler olduğuna inanırdı. Ancak işin mimari (ve felsefi) gerçeği bambaşkaydı: O canavarların açık ağızları, yağmur sularını binanın duvarlarından uzağa fırlatan sıradan birer "su oluğu" işlevi görüyordu. İnsanoğlu, kendi elleriyle yarattığı o en kutsal ve kusursuz yapıyı (Tanrı\'nın evini) yağmurdan (çürümekten) korumak için bile; şeytani, karanlık ve "çirkin" olanın o korkutucu (kaba) işlevselliğine muhtaç kalmıştır.',
    questionStem: 'Gotik katedrallerdeki şeytani görünümlü Gargoyle (Çörten) heykelleri, sanat ve din (kutsallık) ilişkisinde neyin ironik bir metaforudur?',
    options: [
      'Orta Çağ mimarlarının gizlice şeytana taptığının ve kiliseye isyan ettiğinin',
      'Yağmur sularının asidik olduğu için katedrallerin mermerlerini eritmesinin',
      'En saf, yüce ve "kutsal" olan yapının ayakta (temiz) kalabilmesi için bile; dışarıdaki o şeytani, kaba ve "çirkin (karanlık)" olanın gücüne ve işlevselliğine (su oluğuna) muhtaç olması ironisini',
      'Taş oymacılığı sanatında çirkin heykeller yapmanın güzel heykellerden daha zor olduğunun'
    ],
    correct: 2,
    explanation: 'Kutsal ve kusursuz kiliseyi yağmurdan korumak için şeytani/çirkin heykellerin su oluğu olarak kullanılması; kutsalın (güzelliğin) ayakta kalmak için bile o karanlık ve çirkin işlevselliğe muhtaç olması ironisidir.'
  },
  {
    title: 'Kepler\'in Süpernovası (Göğün Çatlaması)',
    passage: 'Yüzlerce yıl boyunca Kilise ve Aristo felsefesi tek bir mutlak dogmaya inandı: "Dünya (yeryüzü) çürüyen, kirli ve değişen bir yerdir; ancak gökyüzü (yıldızlar ve küreler) Tanrı\'ya aittir ve onlar asla değişmez, doğmaz, ölmez ve kusursuzdur." Ancak 1604 yılının sonbaharında, gece gökyüzünde (Yılancı takımyıldızında) aniden Jüpiter\'den bile parlak yepyeni bir yıldız patladı! Astronom Johannes Kepler bu yıldızı (Süpernovayı) haftalarca gözlemledi. "Değişmez, ölümsüz ve kusursuz" sanılan o ilahi gökyüzü, kelimenin tam anlamıyla ortasından çatlamış, yeni bir yıldız doğmuş ve sonra yavaşça sönüp ölmüştü. Kepler\'in Süpernovası, göklerin bir Tanrı tiyatrosu olmadığını; tıpkı yeryüzündeki ağaçlar ve hayvanlar gibi yıldızların da doğduğu, yandığı ve öldüğü (değiştiği) o vahşi, kaotik ve kanlı kozmik fizik laboratuvarı (evrim) olduğunu kanıtlayan ilk dondurucu isyandır.',
    questionStem: '1604 yılında patlayan Kepler\'in Süpernovası, dönemin evren (ve inanç) algısında nasıl bir "felsefi (dogmatik) çöküş" yaratmıştır?',
    options: [
      'Gezegenlerin güneşin etrafında eliptik yörüngeler çizdiğini kanıtlamasıyla',
      'Gökyüzünün ilahi, değişmez, kusursuz ve ölümsüz olduğu yönündeki o bin yıllık Kilise ve Aristo dogmasını yıkarak; evrenin de (tıpkı dünya gibi) doğan, değişen ve ölen kaotik/fiziksel bir süreç (yıkım) olduğunu ispatlamasıyla',
      'Yıldızların aslında çok uzaktaki birer dev ayna olduklarını göstermesiyle',
      'Yeni doğan yıldızların dünyada salgın hastalıklara yol açtığı inancını başlatmasıyla'
    ],
    correct: 1,
    explanation: 'Yeni bir yıldızın aniden doğup ölmesi; gökyüzünün "ölümsüz/değişmez ve kusursuz" olduğu dogmasını yıkıp, evrenin de doğup/ölen (değişen) fiziki bir alan olduğunu ispatlamıştır.'
  },
  {
    title: 'Veba (Camus) ve Ortak Direniş',
    passage: 'Albert Camus\'nün "Veba" (La Peste) adlı romanında, Oran kenti aniden ortaya çıkan ölümcül bir veba salgınıyla dış dünyaya kapatılır ve karantinaya alınır. Hastalık rastgele zengin, fakir, yaşlı veya çocuk demeden insanları katletmektedir. Bu anlamsız (absürt) felaket karşısında insanlar üç farklı tepki verir: Kimi şehirden kaçmaya (bencilliğe) çalışır; Rahip Paneloux çıkıp "Bu bizim günahlarımız için Tanrı\'nın bir cezasıdır" diyerek (dine/kaderciliğe) sığınır. Ancak kitabın kahramanı Dr. Rieux, bu saçmalığa ne dini bir kılıf uydurur ne de kaçar. O, yorgunluktan tükenene kadar her gün hastaneye gider ve sadece insanları tedavi etmeye çalışır. Ona neden bu kadar boşuna çabaladığı sorulduğunda der ki: "Burada kahramanlık yok, sadece dürüstlük var. Dürüstlük benim için işimi yapmaktır." Camus; evrenin o dilsiz, adaletsiz ve anlamsız felaketleri (vebası) karşısında; insana düşen tek onurlu eylemin şatafatlı yalanlara (kaderciliğe) sığınmak değil, acı çeken diğer insanlarla omuz omuza verip o karanlık hastalığa karşı son nefesine kadar sessizce "direnmek (görevini yapmak)" olduğunu haykırır.',
    questionStem: 'Camus\'nün "Veba" romanındaki Dr. Rieux karakteri, absürt (anlamsız) felaketler karşısında sergilenmesi gereken hangi "felsefi duruşu" temsil eder?',
    options: [
      'Felaketlerin ilahi bir ceza olduğuna inanarak bol bol dua etme (kadercilik) duruşunu',
      'Bulaşıcı hastalıklardan kaçıp kendi hayatını (bireyselliği) kurtarma güdüsünü',
      'Felaketin anlamsızlığına büyük kahramanlık veya dini anlamlar yüklemeden; sadece dürüstlük, insanlık onuru ve dayanışma uğruna, sessiz ve inatçı bir şekilde kendi görevini yaparak o kötülüğe (absürtlüğe) direnmeyi',
      'Bilimin bir gün tüm hastalıkları kökünden sileceğine dair o aşırı (ütopik) bilimsel iyimserliği'
    ],
    correct: 2,
    explanation: 'Dr. Rieux\'nün kaderciliğe veya kahramanlığa sığınmadan sadece "dürüstlük işimi yapmaktır" diyerek hastaları iyileştirmesi; absürtlüğe karşı sessiz, dayanışmacı ve onurlu direnişi (görev bilincini) temsil eder.'
  },
  {
    title: 'Pan Gu Mitolojisi (Kozmik Ceset)',
    passage: 'Farklı medeniyetler evrenin yaratılışını çok görkemli ve ilahi bir dille anlatır; Tanrıların "Ol!" demesiyle veya ışığın patlamasıyla. Ancak Antik Çin mitolojisindeki "Pan Gu" efsanesi, evrenin ve insanın yaratılışını öylesine dondurucu ve iğrenç bir realizmle açıklar ki, felsefeyi sarsar. Efsaneye göre dev Pan Gu, kaosu kırıp gökyüzünü ayırdıktan sonra yorgunluktan ölür. O devasa cesedi çürümeye başladığında; sol gözü güneşe, sağ gözü aya, kanı filtrelenip nehirlere, kasları tarlalara ve kemikleri dağlara dönüşür. Peki ya insanoğlu nasıl yaratılmıştır? İnsanoğlu, o ölü devin kıllarının arasında yaşayan, cesedin üzerinde gezinen "bitlerin ve pirelerin" (rüzgârla değişime uğramış) ta kendisidir! İnsan kibrine indirilmiş en büyük mitolojik balyoz budur. Bizler, tanrıların altın çamurundan yontulmuş kutsal heykeller değil; evrenin o devasa, çürüyen (ve dönüşen) organik cesedi üzerinde gezinen, şımarık ve geçici parazitlerden başka bir şey değiliz.',
    questionStem: 'Çin mitolojisindeki Pan Gu efsanesi (insanların devin cesedindeki bitlerden oluşması), insanlığın evrendeki yeri hakkında neyi sembolize eder (ve hangi algıyı yıkar)?',
    options: [
      'Güneşin ve Ay\'ın aslında dünyadaki denizlerden beslenerek parladığını',
      'İnsanoğlunun evrenin merkezinde (özenle yaratılmış kutsal bir varlık) olduğu kibrini iğrenç ve sarsıcı bir realizmle yıkarak; bizim devasa ve çürüyen bir doğanın üzerinde yaşayan sıradan (ve asalak) organik formlar (bitler) olduğumuzu',
      'Eski Çin medeniyetinin temizlik ve hijyen kurallarına çok dikkat ettiğini',
      'İnsanların devasa boyutlardan zamanla küçülerek bugünkü formuna ulaştığını'
    ],
    correct: 1,
    explanation: 'İnsanın ulu bir çamurdan değil, çürüyen devin üzerindeki "bit/pirelerden" oluşması; insanın evrenin sahibi/kutsal heykeli olduğu kibrini yerle bir edip, evrenin üzerindeki asalak/organik bir yapı olduğunu sembolize eder.'
  },
  {
    title: 'Phaethon\'un Düşüşü (Kapasiteyi Aşan Güç)',
    passage: 'Yunan mitolojisinde Güneş Tanrısı Helios\'un genç ve kibirli oğlu Phaethon, babasından "Güneş Arabası"nı bir günlüğüne kullanmak için izin ister. Babası onu uyarır: "O atlar vahşidir, yörünge tehlikelidir, bu güç seni aşar." Ancak Phaethon inat eder ve dizginleri eline alır. Atlar, arkalarındaki sürücünün (tecrübesiz) bir çocuk olduğunu hissettikleri an kontrolden çıkarlar. Phaethon arabayı önce çok yükseğe uçurur ve dünyayı dondurur, sonra çok alçağa indirir ve ormanları, şehirleri alev alev yakar (Sahra Çölü\'nün böyle oluştuğu söylenir). Dünyanın yok olmasını engellemek için Zeus, bir yıldırımla Phaethon\'u vurur ve onu gökyüzünden bir alev topu gibi nehre düşürür. Phaethon efsanesi; liyakatsiz, yetersiz ve toy bir aklın eline; sırf hırsı ve kibri uğruna (kaldıramayacağı kadar) devasa bir güç (veya iktidar/teknoloji) verildiğinde, bu dengesizliğin sadece o ahmak sürücüyü değil, tüm dünyayı nasıl bir cehenneme sürüklediğinin ölümsüz manifestosudur.',
    questionStem: 'Phaethon\'un Güneş Arabası\'nı sürüp dünyayı yakması miti, güç ve iktidar bağlamında neyin metaforu olarak sunulmaktadır?',
    options: [
      'Güneşin hareketlerinin mevsimleri oluşturduğunun ilkel bir açıklaması',
      'Atların ve hayvanların insanlardan çok daha akıllı sezgilere sahip olmasının',
      'Kişinin kapasitesini (liyakati) aşan, devasa ve kontrol edilemez bir gücün (iktidarın/teknolojinin), tecrübesiz ve kibirli bir zihnin eline verildiğinde tüm dünyayı nasıl yakıp yok edeceğinin (felaketinin)',
      'Tanrıların her zaman insanları kıskanarak onların başarılarını engellediğinin'
    ],
    correct: 2,
    explanation: 'Tecrübesiz çocuğun devasa gücü (güneş arabasını) alıp dünyayı yakması; liyakatı aşan gücün (ve kibrin) o kişinin elinde tüm dünyayı yok eden bir felakete dönüşeceğini sembolize eder.'
  },
  {
    title: 'Macera Perisi (Serendipity)',
    passage: 'İngiliz yazar Horace Walpole, "Serendib\'in Üç Prensi" (Sri Lanka prensleri) adında eski bir masal okur. Bu prensler, yollarda dolaşırken hiçbir zaman asıl aradıkları şeyi bulamazlar; ancak "tesadüfler ve keskin gözlemleri" sayesinde, hiç aramadıkları halde çok daha muazzam, fantastik ve hayati ipuçları keşfederler. Walpole bu masaldan "Serendipity" (Şanslı Keşif / Macera Perisi) kelimesini türetir. Bilim tarihinin en büyük sıçramaları (kavramları) da böyledir. Alexander Fleming mikrop ararken kazara bakterileri öldüren küfü (Penisilini) bulur; Percy Spencer radar parçası denerken cebindeki çikolata erir ve Mikrodalga fırını icat eder! Bilim, her zaman düz bir cetvelle çizilen, sıkıcı ve rasyonel bir patika değildir; o, yanlış soruların peşinden koşarken, aklın ve gözün hazır olduğu o muazzam (tesadüfi) hatalara çarpıp uyanan şiirsel bir "Macera Perisi"dir.',
    questionStem: 'Serendipity (Şanslı Keşif) kavramının bilim tarihindeki rolü, "keşif ve buluş" süreci hakkında neyi kanıtlamaktadır?',
    options: [
      'Bilim insanlarının genellikle çok dikkatsiz ve laboratuvar kurallarına uymayan kişiler olduğunu',
      'Tüm büyük icatların sadece uzun, planlı ve matematiksel araştırmalar sonucunda ortaya çıktığını',
      'Bilimsel devrimlerin her zaman doğrudan, planlı bir rotanın sonucu olmadığını; aksine, başka bir şey aranırken "keskin bir zekânın (hazır bir zihnin) rastlantısal hataları fark etmesiyle" doğan şiirsel (tesadüfi) bir sıçrama olduğunu',
      'Edebiyatçıların bilimsel formülleri anlamakta her zaman yetersiz kaldığını'
    ],
    correct: 2,
    explanation: 'Penisilin ve mikrodalga örneğinde olduğu gibi; büyük keşiflerin planlı bir rottan değil, başka bir şey aranırken (tesadüfi hataların) hazır bir zihin tarafından fark edilmesiyle (Serendipity) doğduğu kanıtlanır.'
  },
  {
    title: 'Oubaitori (Kıyaslamanın Cehaleti)',
    passage: 'Japonların "Oubaitori" adını verdikleri, doğanın akışına yazılmış muazzam bir felsefi kavram vardır. Bu kelime, dört farklı ağacın kanjilerinden (Erik, Kiraz, Şeftali ve Kayısı) türetilmiştir. Bahar geldiğinde bu ağaçların hepsi çiçek açar. Ancak hiçbiri diğerinin ne zaman açtığına, renginin ne kadar canlı olduğuna veya meyvesinin büyüklüğüne bakarak kendini hırpalamaz. Erik ağacı ocakta, kiraz nisanda açar. Biri diğerinden daha üstün veya geç kalmış değildir; sadece her birinin topraktan aldığı zehir, köklerinin uzunluğu ve kendi "zaman çizelgesi" farklıdır. Oubaitori; insanoğlunun sosyal medyada veya hayatta kendi başarısını (veya yaşını) başkalarının hayatıyla "kıyaslama" şeklindeki o hastalıklı, modern ve zehirli cehaletine karşı doğanın sunduğu en asil (ve sakinleştirici) manifestodur. Kendi toprağında açan bir çiçeğin, başka bir bahçeyle (başkasının takvimiyle) yarışı olmaz.',
    questionStem: 'Japon felsefesi "Oubaitori" (Farklı ağaçların çiçek açması), insan psikolojisindeki hangi modern (ve yıkıcı) zaafa karşı bir panzehir sunar?',
    options: [
      'Çevrenin kirletilmesine ve ağaçların kesilmesine karşı duyulan ilgisizliğe',
      'Bireyin kendi yaşam (zaman) çizgisini, zorluklarını ve gelişimini hiçe sayarak; kendi başarısını veya mutluluğunu sürekli "başkalarının hayatlarıyla (takvimleriyle) kıyaslama" şeklindeki o zehirli ve narsisistik yarış zaafına',
      'Bahar aylarında insanların hissettiği nedensiz depresyon ve yorgunluk hissine',
      'Farklı kültürlerin birbirine karışmasının toplumun özgünlüğünü bozduğu inancına'
    ],
    correct: 1,
    explanation: 'Ağaçların farklı zamanlarda çiçek açıp birbiriyle yarışmaması (Oubaitori); insanın kendi yaşamını başkalarının başarılarıyla (zaman çizelgesiyle) "kıyaslama" hastalığına karşı bir panzehir (manifesto) sunar.'
  },
  {
    title: 'Naumachia (Kolezyum\'un Suya Gömülmesi)',
    passage: 'Roma İmparatorluğu\'nda halkın gladyatör vahşetine olan açlığı öylesine korkunç bir noktaya ulaştı ki, arenada aslanların adam parçalaması bile onlara sıkıcı gelmeye başladı. Otorite (imparatorlar) bu iğrenç kitleyi eğlendirmek için "Naumachia" adı verilen o en akılalmaz ve şeytani şovu icat etti. Devasa Kolezyum\'un (veya diğer arenaların) içi günler öncesinden nehir sularıyla dolduruluyor, içine gerçek savaş gemileri yüzdürülüyor ve on binlerce savaş esiri (köle) sırf tribündekiler eğlensin diye o suyun içinde birbirini doğrayarak (gerçek bir deniz savaşı) kan gölünde boğuluyordu! Bir şehrin ortasında sahte bir deniz yaratıp içinde binlerce insanı öldürmek, Roma\'nın "medeniyet" yalanının maskesini düşüren en büyük suredir. Naumachia; güç, servet ve can sıkıntısı birleştiğinde (tüketim histerisinde); insanın sırf "biraz daha fazla eğlenmek (gösteriş)" uğruna vahşeti ve ölümü nasıl devasa, pahalı ve sapkın bir tiyatroya çevirebileceğinin (israfın) kan donduran kanıtıdır.',
    questionStem: 'Roma\'daki "Naumachia" (Kolezyum\'da gerçek deniz savaşları) gösterileri, imparatorluğun ve o dönemin toplumsal yapısı hakkında neyi ifşa eder?',
    options: [
      'Romalı mühendislerin su taşıma (su kemeri) sistemlerindeki o muazzam ve kusursuz dehasını',
      'Kölelerin denizde savaşma yeteneklerinin arenadaki kılıç dövüşlerinden daha üstün olduğunu',
      'Medeniyet kılıfı altındaki kitlelerin ve otoritenin; sırf "can sıkıntısını gidermek ve gösteriş yapmak" uğruna, ölümü ve vahşeti akıl almaz derecede devasa, sapkın ve israfla dolu bir "eğlence tiyatrosuna" dönüştürdüğü o ahlaki çöküşü',
      'Roma ordusunun deniz savaşlarına hazırlık yapmak için kapalı alanlarda tatbikat (provalar) yaptığını'
    ],
    correct: 2,
    explanation: 'Kolezyumu suyla doldurup binlerce kişiyi sırf eğlence için öldürtmek; medeniyetin, can sıkıntısı ve gösteriş uğruna ölümü devasa ve ahlaksız (sapkın) bir tiyatroya çevirdiği ahlaki çöküşü ifşa eder.'
  },
  {
    title: 'Epiktetos ve Köleliğin Sınırı',
    passage: 'Roma döneminde Epiktetos adında bir filozof yaşardı. Ancak o bir senatör veya zengin değildi; o, Efendisi Epaphroditos\'un (Neron\'un zalim sekreterinin) malı olan sıradan bir köleydi. Bir gün efendisi, sırf zevk için Epiktetos\'un bacağını bir işkence aletiyle yavaş yavaş bükmeye (kırmaya) başladı. Epiktetos çığlık atmadı, ağlamadı; sadece soğukkanlılıkla efendisine baktı ve şöyle dedi: "Çevirmeye devam edersen bacağımı kıracaksın." Efendi daha da hırslanıp bacağı tamamen kırdığında, Epiktetos yüzünü bile buruşturmadan şöyle fısıldadı: "Sana kıracağını söylemiştim." O günden sonra ömür boyu topal kaldı. Ancak Epiktetos bu eylemiyle felsefede (Stoacılıkta) bir devrim yaratmıştır: "Bir tiran benim bedenimi zincirleyebilir, kemiklerimi kırabilir, malımı alabilir. Ancak zihnim, iradem ve ruhum o tiranın (veya evrenin) hiçbir zaman ulaşamayacağı, kıramayacağı ve köle edemeyeceği kadar ulaşılmaz, sarsılmaz bir kaledir." Zincirler bedeni bağlar, özgürlük ise sadece zihnin onayına tabidir.',
    questionStem: 'Köle Filozof Epiktetos\'un bacağı kırılırken gösterdiği o soğukkanlı (Stoacı) tepki, "Özgürlük" kavramına nasıl bir boyut kazandırmıştır?',
    options: [
      'Özgürlüğün sadece efendilere isyan ederek ve onlarla fiziksel olarak savaşarak kazanılabileceği fikrini',
      'Fiziksel acının (ve bedenin) insan iradesi üzerinde her zaman mutlak bir kontrol sağladığını',
      'Dış dünyanın (tiranların) bedene ve eşyalara zarar verebileceğini; ancak insanın asıl "özgürlüğünün", dış dünyanın (ve acının) asla kıramayacağı, hükmedemeyeceği o içsel (zihinsel/ruhani) kalenin (iradenin) sarsılmazlığında yattığını',
      'Kölelerin acıya karşı fiziksel olarak hiçbir duyarlılığa (sinir sistemine) sahip olmadığını'
    ],
    correct: 2,
    explanation: 'Bacağının kırılmasına rağmen çığlık atmayıp iradesini koruması (Stoacılık); bedenin zincirlenebileceğini ancak asıl özgürlüğün tiranların kıramayacağı o sarsılmaz zihinsel kalede (iradede) olduğunu kanıtlar.'
  },
  {
    title: 'Kowloon Surlarla Çevrili Şehri (Anarşinin Düzeni)',
    passage: 'Hong Kong\'un göbeğinde, 1990\'larda yıkılana kadar varlığını sürdüren "Kowloon Walled City" (Surlarla Çevrili Şehir) adında bir yer vardı. Çin ve İngiltere arasındaki siyasi bir boşluktan (kanunsuzluktan) faydalanarak kurulan bu yer; sadece birkaç futbol sahası büyüklüğünde olmasına rağmen 50.000 insanın üst üste yığıldığı, gökyüzünün görülmediği, polisin, devletin ve yasaların asla girmediği koca bir beton canavarıydı. İnsanlar kaçak su çekiyor, yasadışı dişçiler çalışıyor ve labirent gibi tünellerde mafya kol geziyordu. Ancak dışarıdan bakanları asıl şoka sokan şey şuydu: Bu "mutlak anarşi" cehenneminde, insanlar birbirini öldürmek yerine, kendi aralarında yazısız, organik ve şaşırtıcı derecede tıkır tıkır işleyen "kendiliğinden bir düzen" (birlik) kurmuşlardı! Postacılar o karanlık labirentlerde posta dağıtıyor, esnaflar birbirine güveniyor, fabrikalar çalışıyordu. Kowloon; "Devlet ve kanunlar olmazsa insanlık vahşete düşer (Hobbes)" inancına karşı atılmış, karanlık ama organik (kendi düzenini bulan) devasa bir beton tokattır.',
    questionStem: 'Kowloon Şehri\'nin (Kanunsuz Şehir) varlığı, "Devlet, Düzen ve Anarşi" kavramları hakkındaki hangi klasik algıyı (korkuyu) sarsmıştır?',
    options: [
      'Büyük şehirlerin her zaman temiz suya ve modern altyapıya ihtiyaç duyduğunu',
      'Hükümet (devlet ve kanun) otoritesi tamamen ortadan kalktığında (anarşide), insanların mutlaka birbirini yok eden vahşi bir kaosa sürükleneceği inancını yıkarak; toplumun kendi içinde organik (yazısız) ve işleyen bir düzen kurabileceğini ispatlamasını',
      'Gökdelen mimarisinin sadece Batılı ülkelerde başarıyla uygulanabileceği teorisini',
      'Mafyanın olduğu yerlerde ticaretin ve ekonominin anında çökeceği yanılgısını'
    ],
    correct: 1,
    explanation: 'Polisin/devletin olmadığı o "mutlak anarşi" ortamında insanların birbirini öldürmek yerine organik ve işleyen bir düzen kurması; devlet/kanun yoksa kaos çıkar (Hobbes) inancını sarsmıştır.'
  }
];

export const felsefeParagrafSorulari34: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_34.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_34[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe34-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_35 = [
  {
    title: 'Epigenetik Travma (Kiraz Çiçeği Deneyi)',
    passage: 'Bilim insanları yıllarca genetiğin sadece göz rengi veya boy uzunluğu gibi fiziksel özellikleri aktardığına inandı. Ancak Emory Üniversitesi\'nde yapılan "Kiraz Çiçeği Deneyi" bu ezberi paramparça etti. Araştırmacılar, laboratuvar farelerine her kiraz çiçeği kokusu verdiklerinde hafif bir elektrik şoku uyguladılar. Fareler kısa sürede bu kokudan ölümüne korkmayı öğrendi. Asıl sarsıcı olan ise şuydu: Bu farelerin yavruları ve hatta "torunları", hayatlarında hiçbir zaman elektrik şoku yememelerine ve kiraz çiçeği kokusuyla hiç karşılaşmamalarına rağmen; o kokuyu ilk duydukları an dehşete kapılıp titremeye başladılar! "Epigenetik" adı verilen bu bilimsel devrim, korkularımızın, travmalarımızın ve acılarımızın sadece psikolojik anılar olmadığını; bizzat DNA\'mıza kazınarak nesiller ötesine (torunlarımıza) fısıldanan biyolojik bir kâbus (miras) olduğunu kanıtlar.',
    questionStem: 'Kiraz Çiçeği Deneyi (Epigenetik), genetik miras kavramı hakkında hangi sarsıcı gerçeği ispatlamıştır?',
    options: [
      'Hayvanların koku alma duyularının nesilden nesile giderek daha da zayıfladığını',
      'Sadece fiziksel özelliklerin değil; yaşanan ağır travmaların ve korkuların da hücresel düzeyde DNA\'ya kazınarak (biyolojik olarak) gelecek nesillere aktarılabileceğini',
      'Elektrik şokunun farelerin beyinlerinde kalıcı bir hafıza silinmesine neden olduğunu',
      'Kiraz çiçeği kokusunun kemirgenler için doğada her zaman zehirli bir sinyal olduğunu'
    ],
    correct: 1,
    explanation: 'Hiç şok yemeyen torunların bile kokudan korkması; travmaların ve korkuların sadece psikolojik değil, DNA üzerinden hücresel/biyolojik bir miras olarak aktarıldığını (Epigenetik) ispatlar.'
  },
  {
    title: 'Yorumlayıcı Modül (Sağ ve Sol Beyin Yalanları)',
    passage: 'Nörobilimci Michael Gazzaniga, beyninin sağ ve sol yarımküresi (korpus kallozum köprüsü) cerrahi olarak ayrılmış hastalar üzerinde tarihin en tuhaf deneyini yaptı. Hastanın sağ beynine "Yürü" yazılı bir komut gösterildi. Sağ beyin dili bilmediği için hasta neden yürüdüğünü "sözlü" olarak açıklayamaz, ama komuta uyup ayağa kalkıp yürümeye başlar. Araştırmacı hastaya "Neden ayağa kalktın?" diye sorduğunda, dili ve mantığı yöneten sol beyin, o komutu hiç görmediği halde "Bilmiyorum" demez! Anında kusursuz ve mantıklı bir yalan uydurarak, "Gidip kendime bir kola alacaktım" der. Sol beynimizde yatan bu "Yorumlayıcı (Interpreter) Modül", insanın en büyük zaafını ifşa eder: Beynimiz, bilmediği ve kontrol etmediği eylemlerin bile sebebini (hiçlikten) anında kurgulayarak; kendimizi her zaman "mantıklı, kararlı ve irade sahibi" sanmamızı sağlayan o kusursuz yalan makinesidir.',
    questionStem: 'Gazzaniga\'nın "Yorumlayıcı Modül" deneyi, insan iradesi ve mantığı hakkında neyi kanıtlamaktadır?',
    options: [
      'Sağ beynin motor becerilerde sol beyinden çok daha zayıf olduğunu',
      'İnsanların yalan söylerken fiziksel olarak gözlerini kaçırma eğiliminde olduğunu',
      'Zihnimizin (sol beynin), gerçek sebebini bilmediği dürtüsel eylemlere bile anında mantıklı kılıflar (bahaneler/yalanlar) uydurarak, bize sahte bir "bilinçli kontrol ve irade" illüzyonu yaşattığını',
      'Beyin köprüsü kesilen hastaların zamanla tamamen konuşma yetisini kaybettiğini'
    ],
    correct: 2,
    explanation: 'Sol beynin hiç görmediği komuta rağmen anında "kola alacaktım" yalanını uydurması; zihnimizin bilmediği eylemlere mantıklı kılıflar uydurarak bize sahte bir irade/kontrol illüzyonu yaşattığını kanıtlar.'
  },
  {
    title: 'Otel Temizlikçileri Deneyi (Fiziksel Plasebo)',
    passage: 'Psikolog Alia Crum ve Ellen Langer, otellerde günde 15 oda temizleyen, kan ter içinde kalan ama yine de kilo veremeyen ve sağlık sorunları yaşayan temizlik işçileri üzerinde bir araştırma yaptı. İşçilere "Yaptığınız bu fiziksel iş, aslında doktorların tavsiye ettiği günlük egzersiz miktarını fazlasıyla karşılıyor" diyen bilimsel bir sunum yapıldı ve onlara yaptıkları hareketlerin kaç kalori yaktığı anlatıldı. İşçilerin çalışma saatleri, diyetleri veya hareketleri bir milim bile değişmedi. Sadece 4 hafta sonra, bu sunumu dinleyen işçilerin kiloları düştü, kan basınçları azaldı ve vücut yağ oranları sağlıklı bir seviyeye indi! "Zihin-Beden Bağlantısı"nı ispatlayan bu deney; bir eylemin fiziksel sonucunun (zayıflamanın) sadece kasların çalışmasına değil, beynin o eylemin "ne işe yaradığına" dair duyduğu inanca (algıya) muhtaç olduğunu gösteren muazzam bir biyolojik mucizedir.',
    questionStem: 'Otel Temizlikçileri Deneyi\'nin sonuçları, "zihin ve beden" ilişkisine dair hangi sarsıcı gerçeği ortaya koyar?',
    options: [
      'Temizlik ürünlerinde bulunan kimyasalların insan metabolizmasını zamanla yavaşlattığını',
      'Sadece fiziksel hareketin değil, kişinin yaptığı o hareketin "kendisine faydalı (egzersiz) olduğuna dair" zihinsel inancının ve algısının, bedenin fizyolojik tepkilerini (kilo vermeyi) doğrudan değiştirebildiğini',
      'İnsanların diyet yapmadan sadece çalışarak hiçbir zaman kilo veremeyeceğini',
      'Otel işçilerinin psikolojik strese karşı masa başı çalışanlardan daha dayanıklı olduğunu'
    ],
    correct: 1,
    explanation: 'İşçilerin diyeti veya hareketi değişmediği halde, sırf "yaptığım iş egzersizmiş" inancıyla kilo vermeleri; zihinsel algının/inancın bedenin fizyolojik tepkilerini değiştirebildiğini (Plasebo) ispatlar.'
  },
  {
    title: 'Radyologların Görünmez Gorili (Uzmanlık Körlüğü)',
    passage: '"Görünmez Goril" deneyini (basketbol pasları sayılırken sahneye giren gorili görmeme durumu) hepimiz sıradan insanların bir zaafı sanırız. Ancak Harvard araştırmacıları, bu testi dünyanın en keskin gözlerine sahip "Uzman Radyologlara" uyguladılar. Onlara içinde küçük kanser nodülleri (nodül) bulmaları gereken akciğer röntgenleri verdiler. Ancak röntgenlerden birinin tam ortasına, bir nodülden 48 kat daha büyük olan ve açıkça görülen "bir goril silüeti" yerleştirdiler! Radyologların %83\'ü, gözlerini o gorilin tam üzerinden defalarca geçirmelerine rağmen (göz takip cihazlarıyla kanıtlandı) o devasa gorili göremediler. "Uzmanlık Körlüğü" adı verilen bu durum, eğitimin ve tecrübenin algımızı genişletmediğini; tam aksine bizi sadece "aradığımız şeye (kanser nodülüne)" odaklayarak, beklenmedik (ve devasa) hakikatlere karşı sıradan insanlardan çok daha ölümcül bir körlüğe mahkûm ettiğini ispatlar.',
    questionStem: 'Radyologlara uygulanan Görünmez Goril deneyi, "uzmanlık ve tecrübe" kavramları hakkında hangi ironik gerçeği ifşa eder?',
    options: [
      'Doktorların röntgen filmlerini genellikle aşırı yorgun ve uykusuzken incelediklerini',
      'Uzmanlığın ve yüksek tecrübenin, insan algısını geliştirmek yerine onu sadece "beklenen hedefe" (dar bir tünele) kilitleyerek, gözünün önündeki devasa ve aykırı gerçeklere karşı sarsıcı bir körlük yarattığını',
      'Akciğer filmlerinde siyah ve beyaz renklerin birbirine karışarak göz yanılmasına neden olduğunu',
      'Radyologların kanser teşhisi koyarken aslında tamamen bilgisayar yazılımlarına güvendiklerini'
    ],
    correct: 1,
    explanation: 'Gözü gorilin üzerinden geçen uzmanların onu görmemesi; uzmanlığın algıyı açmadığını, aksine sadece aranan hedefe odaklanarak diğer devasa gerçeklere karşı (tünel vizyonu) bir körlük yarattığını ifşa eder.'
  },
  {
    title: 'Glifatik Sistem (Beynin Gece Yıkaması)',
    passage: 'İnsan ömrünün üçte biri uykuda geçer. Evrimsel açıdan bakıldığında, vahşi doğada saatlerce bilinçsizce yatmak yenmeye (av olmaya) davetiye çıkaran korkunç bir dezavantajdır. Peki doğa neden "uykuya" bu kadar muhtaçtır? Bilim insanları 2013 yılında beynin "Glifatik Sistem"ini keşfettiğinde bu sır çözüldü. Biz uyanıkken nöronlarımız sürekli çalışır ve etraflarında "amiloid beta" adı verilen zehirli (Alzheimer\'a yol açan) atık proteinler birikir. Biz uykuya daldığımızda mucizevi bir şey olur: Beyin hücrelerimiz kelimenin tam anlamıyla %60 oranında "küçülür (büzüşür)". Bu küçülme sayesinde hücreler arasında devasa boşluklar açılır ve beyin omurilik sıvısı bu kanallardan sel gibi akarak o zehirli atıkları yıkayıp (süpürüp) beyni temizler! Uyku bir dinlenme molası değildir; uyku, zihnimizin kendi çöpünde boğulup ölmemek için her gece girdiği, evrensel ve hayati bir bulaşık makinesi (arınma) döngüsüdür.',
    questionStem: 'Glifatik Sistemin keşfi, "Uyku" eyleminin biyolojik (ve evrimsel) işlevini nasıl yeniden tanımlamıştır?',
    options: [
      'Uykunun sadece kasların ve kemiklerin fiziksel olarak büyümesine yardımcı olan pasif bir dinlenme süreci olarak',
      'Uykunun, beynin uyanıkken ürettiği ölümcül ve zehirli atıkları (proteinleri) temizlemek için hücrelerin büzüşerek beyin sıvısına yol açtığı "aktif, hayati ve mekanik bir yıkama (arınma)" işlemi olarak',
      'Rüyaların insan psikolojisini iyileştirmek için üretilen rastgele elektrik sinyalleri olarak',
      'Vahşi doğada hayvanların avcılardan saklanmak için geliştirdiği bir kamuflaj yöntemi olarak'
    ],
    correct: 1,
    explanation: 'Hücrelerin büzüşerek sıvının zehirli atıkları yıkaması; uykunun pasif bir dinlenme değil, beyni zehirlerden arındıran aktif, hayati ve mekanik bir yıkama döngüsü olduğunu gösterir.'
  },
  {
    title: 'Roseto Etkisi (Toplumsal Bağların Ömrü)',
    passage: '1960\'larda Amerika\'nın Roseto kasabasında doktorları şoka sokan bir anomali yaşanıyordu. Kasaba halkı domuz yağıyla besleniyor, sürekli sigara içiyor, obezite sınırlarında dolaşıyor ve ağır işlerde çalışıyordu. Ancak 65 yaş altı hiç kimse kalp krizi geçirmiyordu ve ölüm oranları tüm Amerika ortalamasının yarısı kadardı! Bilim insanları suları, genetiği ve diyeti inceledi ama sırrı bulamadı. Cevap laboratuvarda değil, sosyolojide gizliydi. İtalyan göçmenlerin kurduğu bu kasabada üç kuşak aynı evde yaşıyor, akşamları tüm kasaba büyük sofralarda birlikte yemek yiyor, yaşlılara sonsuz saygı duyuluyor ve kimse yalnız bırakılmıyordu (Stres ve yalnızlık sıfırdı). "Roseto Etkisi" tıp dünyasına şu felsefi tokatı attı: En sağlıklı diyetler veya egzersizler bile; sevginin, güçlü toplumsal bağların ve "aidiyet (yalnız olmama) hissinin" damarlara zerk ettiği o görünmez, mucizevi kalp kalkanı kadar hayat kurtarıcı değildir.',
    questionStem: 'Roseto Etkisi, modern tıbbın (ve insanların) sağlık algısı üzerine nasıl bir sarsıcı gerçeği ispatlamıştır?',
    options: [
      'Domuz yağının ve kolesterolün sanıldığından çok daha sağlıklı besinler olduğunu',
      'Küçük kasabalardaki hava kirliliği oranının büyük metropollere göre çok daha düşük olduğunu',
      'Fiziksel sağlığın ve uzun ömrün sadece diyet ve genetikle değil; güçlü toplumsal bağların, dayanışmanın ve aidiyet hissinin (psikolojik güvenliğin) yarattığı o muazzam zihinsel kalkanla korunduğunu',
      'Genetik mirasın her zaman beslenme alışkanlıklarına galip gelerek hastalıkları önlediğini'
    ],
    correct: 2,
    explanation: 'Kötü beslenmeye rağmen kalp krizi olmaması; sağlığın ve uzun ömrün sadece diyet değil, sevgi, dayanışma ve toplumsal aidiyetin (psikolojik kalkanın) bir sonucu olduğunu ispatlar.'
  },
  {
    title: 'Akasya Ağaçlarının Görünmez Savaşı',
    passage: 'Afrika savanalarında zürafalar, muazzam dikenlerine rağmen Akasya ağaçlarının yapraklarını afiyetle yerler. Ancak zürafalar bir ağaçtan sadece birkaç dakika beslendikten sonra o ağacı bırakıp, yanındaki ağaca geçmek yerine, rüzgârın tersi yönünde en az 100 metre ilerideki başka bir ağaca yürürler. Neden mi? Çünkü saldırıya uğrayan Akasya ağacı saniyeler içinde havaya "Etilen gazı" salgılar. Bu gaz, rüzgârla uçarak çevredeki diğer ağaçlara "Tehlike var, yeniliyoruz!" mesajı taşır. Sinyali alan diğer ağaçlar, yapraklarına derhal "tannin" adlı acı ve ölümcül bir zehir pompalar! Zürafa bunu bildiği için, rüzgârın sinyal taşıyamadığı (ters yöndeki) habersiz ağaçları bulmaya gider. Bu bilimsel keşif; doğanın sessiz, cansız ve çaresiz bitkilerden ibaret olmadığını; görünmez gazlarla çığlık atıp organize bir şekilde savaşabilen devasa, zeki ve entegre bir savunma ordusu olduğunu kanıtlar.',
    questionStem: 'Akasya ağaçları ve zürafalar arasındaki etkileşim, "bitki krallığı (doğa)" hakkında hangi efsanevi (ve bilimsel) gerçeği ifşa eder?',
    options: [
      'Zürafaların tat alma duyularının yaşlandıkça tamamen köreldiğini ve zehri hissetmediklerini',
      'Bitkilerin çevrelerinden tamamen habersiz, izole ve çaresiz (cansız) varlıklar olduğu inancını yıkarak; havaya saldıkları kimyasal sinyallerle iletişim kurabilen, organize ve zeki bir savunma ağına sahip olduklarını',
      'Etilen gazının atmosferdeki sera etkisini artıran en tehlikeli karbon türevi olduğunu',
      'Ağaçların sadece kökleri vasıtasıyla topraktan besin ve su alışverişi yapabildiğini'
    ],
    correct: 1,
    explanation: 'Ağacın havaya etilen gazı salıp diğer ağaçların yapraklarına zehir pompalaması; bitkilerin dilsiz/çaresiz değil, kimyasallarla çığlık atıp haberleşen zeki ve organize bir savunma ağı (ordusu) olduğunu ifşa eder.'
  },
  {
    title: 'Karanlık Akış (Dark Flow)',
    passage: 'Evrenin Büyük Patlama\'dan sonra her yöne eşit ve homojen (rastgele) bir şekilde genişlemesi gerektiği bilimsel bir dogmadır. Ancak 2008 yılında NASA astronomları kozmik mikrodalga arka plan ışımalarını incelerken fizikte soğuk duş etkisi yaratan bir "anomali" buldular. Yüzlerce devasa galaksi kümesi, saniyede yüzlerce kilometre hızla rastgele genişlemek yerine; hepsi birden evrenin tek bir noktasına (Centaurus ve Vela takımyıldızları arasına) doğru devasa bir nehir gibi akıp gidiyordu! "Karanlık Akış" (Dark Flow) adı verilen bu fenomen, bizim evrenimizin sınırlarının ötesinde; o milyarlarca galaksiyi bile kendi üzerine çekecek kadar devasa, korkunç ve kütleli (belki de paralel bir evrenin kütleçekimine ait) bir "Hiçlik Çekicisinin" varlığına işaret eder. Görebildiğimiz bu sonsuz evren, belki de sadece daha büyük bir okyanusa akan minicik bir dereden ibarettir.',
    questionStem: 'Karanlık Akış (Dark Flow) fenomeninin astronomi dünyasında yarattığı asıl felsefi/bilimsel sarsıntı (gizem) nedir?',
    options: [
      'Galaksilerin birbirlerine çarpıp yok olma ihtimalinin matematiksel olarak sıfırlandığı gerçeği',
      'Evrenin her yöne eşit genişlediği inancını yıkarak; milyarlarca galaksiyi evrenimizin ötesine doğru (belki de başka bir evrenin çekimine) sürükleyen o "bilinmeyen ve devasa çekim gücünün" varlığı',
      'Karanlık maddenin evrenin genişleme hızını yavaşlatarak tüm gezegenleri dondurması',
      'Yıldızların sadece sıcak bölgelerde yoğunlaşıp soğuk alanlardan kaçması'
    ],
    correct: 1,
    explanation: 'Galaksilerin rastgele değil tek bir yöne akması; evrenimizin sınırlarının (görebildiğimiz ufkun) ötesinde, bu galaksileri kendine çeken devasa ve bilinmeyen bir gücün (veya paralel evrenin) olduğu şokunu yaratmıştır.'
  },
  {
    title: 'Fetal Mikrokimerizm (Annede Kalan İzi)',
    passage: 'Bir kadın hamile kaldığında, annenin bedeni ile fetüs (bebek) plasenta aracılığıyla besin ve oksijen alışverişi yapar. Ancak son yıllarda yapılan genetik araştırmalar, bu bağın sadece gıdayla sınırlı olmadığını, hücresel düzeyde ölümsüz bir değiş tokuş olduğunu kanıtladı. "Fetal Mikrokimerizm" adı verilen bu süreçte, bebeğin kök hücreleri plasentayı aşarak annenin kanına karışır; kalbine, beynine ve ciğerlerine yerleşerek orada yaşamaya devam eder. Yıllar sonra bebek doğup büyüse bile, hatta o bebek anne karnında ölse veya düşse bile; o fetüse ait (DNA\'sı farklı olan) o hücreler, annenin beyninde ve kalbinde on yıllarca yaşamaya (ve anneyi onarmaya) devam eder. Bir annenin "Evladım benim bir parçamdır" sözü şiirsel bir metafor veya edebi bir abartı değildir; o, mikroskobik, genetik ve tam anlamıyla kusursuz (ve biyolojik) bir gerçektir.',
    questionStem: 'Fetal Mikrokimerizm araştırmaları, anne ile çocuk arasındaki bağı hangi bilimsel düzleme taşıyarak kanıtlamıştır?',
    options: [
      'Hamilelik sırasında annenin aldığı besinlerin bebeğin göz rengini kalıcı olarak belirlediğine',
      'Bebeklik çağındaki psikolojik travmaların yetişkinlikteki genetik hastalıkları tetiklediğine',
      'Anne ve bebek arasındaki bağın sadece doğumla biten fiziksel (süreli) bir süreç değil; bebeğin hücrelerinin yıllarca annenin organlarında (beyninde/kalbinde) yaşamaya devam ettiği kalıcı, hücresel ve biyolojik bir gerçek (mikrokimerizm) olduğuna',
      'Erkek çocukların kız çocuklarına göre anneye genetik olarak daha fazla zarar verdiğine'
    ],
    correct: 2,
    explanation: 'Bebeğin kök hücrelerinin annenin beyninde/kalbinde yıllarca kalması; "çocuğum benim parçamdır" lafının sadece duygusal değil, hücresel ve biyolojik olarak kalıcı (fiziksel) bir gerçek olduğunu kanıtlar.'
  },
  {
    title: 'Oksitosin Paradoksu (Aşkın ve Irkçılığın Hormonu)',
    passage: 'Beynimizin salgıladığı "Oksitosin" hormonu yıllarca popüler bilimde "Sarılma, Aşk ve Bağlanma Hormonu" olarak pazarlandı. Annelerin bebeklerini sevmesi, âşıkların birbirine bağlanması bu sihirli molekül sayesindeydi. Ancak Amsterdam Üniversitesi\'nde yapılan son deneyler, aşkın (ve bu hormonun) o karanlık ve ırkçı arka yüzünü ifşa etti. Oksitosin verilen denekler kendi gruplarından (kendi ırkından veya takımından) olan kişilere karşı inanılmaz bir sevgi ve fedakârlık gösterirken; kendi gruplarından "olmayan" yabancılara karşı eskisinden çok daha şüpheci, öfkeli, dışlayıcı ve (ırkçı) saldırgan davranışlar sergilemeye başladılar! Oksitosin bir "evrensel barış" iksiri değildi. Bu hormon, kabileciliğin yakıtıydı: İnsanoğlu "kendi kabilesini (bizden olanı)" daha çok sevmek ve korumak için, dışarıdakilerden (ötekilerden) daha çok nefret etmek (ve savaşmak) zorundaydı. Sevginin biyolojisi, nefreti doğuran o aynı kimyasal denklemin ta kendisidir.',
    questionStem: 'Oksitosin hormonuyla ilgili yeni araştırmalar, "sevgi ve bağlanma" kavramının hangi karanlık (çelişkili) evrimsel yanını ortaya çıkarmıştır?',
    options: [
      'Oksitosinin zamanla beynin hafıza merkezini uyuşturarak insanları unutkan yaptığı',
      'Sevginin (oksitosinin) herkesi kucaklayan evrensel bir barış hormonu değil; aksine "kendi grubunu (bizden olanı)" sevdikçe "ötekine (yabancıya)" karşı dışlayıcılığı ve saldırganlığı (kabileciliği/ırkçılığı) artıran çelişkili (karanlık) bir evrimsel silah olduğu',
      'Aşk hormonunun sadece çocukluk döneminde salgılandığı ve yetişkinlikte tamamen bittiği',
      'Hayvanların oksitosin hormonunu insanlardan çok daha fazla üreterek barışçıl yaşadığı'
    ],
    correct: 1,
    explanation: 'Oksitosin alanların "kendi grubuna" sevgisi artarken "yabancılara" karşı şüphe ve saldırganlık (ırkçılık/kabilecilik) geliştirmesi; sevginin biyolojisinin ötekileştirme ve nefreti besleyen çelişkili (karanlık) yönünü ortaya çıkarır.'
  }
];

export const felsefeParagrafSorulari35: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_35.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_35[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe35-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});

const PARAGRAPH_THEMES_36 = [
  {
    title: 'Grigoriy Perelman ve Sıfır İhtirası',
    passage: '2006 yılında Rus matematikçi Grigoriy Perelman, yüzyıldır kimsenin çözemediği evrenin şeklini açıklayan o meşhur "Poincaré Sanısı"nı çözerek matematiğin zirvesine oturdu. Bilim dünyası ona 1 milyon dolarlık Milenyum Ödülü\'nü ve matematiğin Nobel\'i sayılan Fields Madalyası\'nı vermek için kapısına dayandı. Ancak Perelman, ödüllerin hepsini elinin tersiyle iterek; "Eğer kanıtım doğruysa, başka bir onaya veya ödüle ihtiyacım yoktur" dedi ve annesiyle paylaştığı, böceklerin gezindiği eski bir apartman dairesinde yoksulluk (ve sessizlik) içinde yaşamaya devam etti. Perelman\'ın bu eylemi basit bir delilik veya kibrin değil; hakikatin (bilginin), o kirli şöhrete, medyaya ve kâğıt banknotlara (kapitalizme) tahvil edilmesini (metalaştırılmasını) reddeden; akademik ve modern kibrin suratına atılmış, tarihteki en onurlu felsefi tokattır.',
    questionStem: 'Grigoriy Perelman\'ın 1 milyon dolarlık ödülü reddetmesi, bilim ve hakikat bağlamında neyin sembolik bir itirazıdır?',
    options: [
      'Rus bilim insanlarının uluslararası ödülleri siyasi nedenlerle boykot etme geleneğinin',
      'Matematik formüllerinin maddi dünyada hiçbir pratik (ve ekonomik) karşılığının olmadığının',
      'Bulunan "hakikatin (bilginin)" kendi başına zaten mutlak ve yeterli olduğu; bunun şöhret, para ve akademik onay mekanizmaları (kapitalizm) tarafından metalaştırılıp kirletilmesine karşı gösterilen onurlu bir isyanın',
      'Dâhilerin genellikle para yönetimi konusunda son derece beceriksiz ve cahil olmalarının'
    ],
    correct: 2,
    explanation: 'Hakikatin kendi kendine yettiğini söyleyip milyon doları itmesi; bilginin/hakikatin kapitalizm, şöhret ve otoriteler tarafından metalaştırılmasına (kirletilmesine) karşı asil ve felsefi bir isyandır.'
  },
  {
    title: 'Hiroo Onoda (29 Yıllık Yalan)',
    passage: 'İkinci Dünya Savaşı\'nın bittiği 1945 yılında, Filipinler\'in ıssız Lubang adasındaki Japon istihbarat subayı Hiroo Onoda\'ya savaşın sona erdiği haberi bir türlü ulaşmadı. Onoda, ormanın derinliklerinde tam 29 yıl boyunca "savaşın devam ettiğine" inanarak gerilla gibi saklandı ve savaştı. Yıllarca gökyüzünden atılan Japonya\'nın teslim belgelerini, ailesinden gelen mektupları ve hoparlörden yapılan çağrıları "düşman propagandası ve kurnazca bir yalan" sanarak reddetti. Onoda ancak 1974\'te, eski komutanı bizzat adaya gidip ona "silah bırakma emri" verdiğinde gerçeği kabullenebildi. Onoda\'nın hikâyesi bir kahramanlık veya vatanseverlik destanı değildir. O; bir ideolojiye, bir kurguya (inanca) saplanıp kalan insan zihninin; gözünün önünde apaçık duran somut gerçekliğe karşı kendi ördüğü o zihinsel hapishanede, mantığı ve dünyayı on yıllarca nasıl inatla (körü körüne) reddedebileceğinin en trajik ve acımasız kanıtıdır.',
    questionStem: 'Hiroo Onoda\'nın ormanda 29 yıl boyunca savaşması, "insan psikolojisi ve inanç" hakkında neyi ifşa etmektedir?',
    options: [
      'Japon askerlerinin fiziksel olarak doğa şartlarına inanılmaz derecede uyum sağlayabildiğini',
      'Bir kurguya (ideolojiye) derinden saplanmış olan insan zihninin; kendi inancını (haklılığını) korumak uğruna, apaçık ve somut gerçekleri bile yıllarca (körü körüne) reddederek kendi yarattığı bir illüzyon hapishanesinde yaşayabilme çaresizliğini',
      'İkinci Dünya Savaşı döneminde kullanılan iletişim araçlarının (radyoların) çok yetersiz olduğunu',
      'Ormanlarda yalnız yaşamanın insanlarda hafıza kaybına ve Alzheimer hastalığına neden olduğunu'
    ],
    correct: 1,
    explanation: 'Atılan gazeteleri/mektupları bile "düşman yalanı" sanarak 29 yıl inanmaması; zihnin kendi inancını (kurgusunu) korumak için somut gerçeğe bile yıllarca kör kalabilme (illüzyon hapishanesi) trajedisini ifşa eder.'
  },
  {
    title: 'Stalker ve Dilek Odası (Tarkovski)',
    passage: 'Andrey Tarkovski\'nin "Stalker" (İz Sürücü) adlı başyapıtında, fizik kurallarının çöktüğü gizemli bir Bölge\'nin (Zone) kalbinde bir "Oda" vardır. Efsaneye göre bu Oda, içine giren kişinin "en gizli, en içten" dileğini anında gerçekleştirmektedir. Bir karakter, ölümcül hasta olan kardeşini iyileştirmek için Odaya girer. Ancak dışarı çıktığında kardeşi iyileşmez, adamın banka hesabı aniden milyonlarca dolarla dolar! Ve adam eve dönüp intihar eder. Çünkü Oda; insanın ağzından dökülen o süslü, ahlaki ve fedakârca dilekleri değil; insanın bile yüzleşmekten korktuğu, bilinçaltındaki o en bencil, en karanlık ve "asıl (bastırılmış) gerçek arzusunu" yerine getirmiştir. Stalker\'ın Odası bize şu dondurucu felsefi aynayı tutar: İnsanoğlu kendi içindeki o çürümüş ve bencil karanlık (gerçek doğası) ile yüzleşmeye asla hazır değildir; en büyük kâbusumuz, kendi gizli arzularımızın gerçekleşmesidir.',
    questionStem: 'Stalker filmindeki "Dilek Odası"nın çalışma mantığı, insan doğası ve ahlak üzerine nasıl bir psikolojik şok (kâbus) sunar?',
    options: [
      'Bilimkurgu filmlerindeki uzaylı teknolojilerinin aslında insan beynini okuyamayacağı gerçeğini',
      'Zenginliğin ve paranın insanlara her zaman mutsuzluk (ve intihar) getireceği yönündeki ekonomik kuralı',
      'İnsanın kendine biçtiği o yüce/ahlaki maskenin bir yalan olduğunu; bilinçaltında yatan ve kişinin bile yüzleşmekten korktuğu o asıl "bencil ve karanlık" arzularla (gerçek doğasıyla) yüzleşmesinin getirdiği o yıkıcı/trajik dehşeti',
      'Kardeşler arasındaki bağların zor zamanlarda her zaman koptuğu şeklindeki sosyolojik teoriyi'
    ],
    correct: 2,
    explanation: 'Odanın adamın ahlaki/süslü duasını değil, bilinçaltındaki bencil ve karanlık arzusunu (parayı) gerçekleştirmesi; insanın kendi gizli/kötü doğasıyla (maskesiz haliyle) yüzleşmesinin yarattığı o yıkıcı dehşeti sunar.'
  },
  {
    title: 'Kierkegaard ve Uçurumun Kenarı (Angst)',
    passage: 'Yüksek bir dağın zirvesine veya uçurumun tam kenarına geldiğinizde içinizi tuhaf, ürpertici ve baş döndürücü bir korku sarar. Danimarkalı filozof Søren Kierkegaard\'a göre bu hissettiğiniz şey basit bir "aşağı düşme (kaza) korkusu" değildir! Sizi asıl dehşete düşüren şey, tam o saniyede "kendi özgür iradenizle, isterseniz kendinizi bir adım atıp aşağı atabilme gücüne (potansiyeline)" sahip olmanızdır! Kierkegaard buna "Angst" (Kaygı / Varoluşsal Bunalım) adını verir. Bu kaygı, özgürlüğün getirdiği o devasa baş dönmesidir. İnsan, kendi hayatını tamamen yok edebilecek veya kökünden değiştirebilecek o korkutucu gücü (özgür iradeyi) kendi ellerinde hissettiği an, o sınırsızlık karşısında panikler. Özgürlük, bir cennet bahçesi değil; insanın kendi sınırlarını aşabilme ihtimalinin yarattığı o karanlık ve dondurucu uçurumdur.',
    questionStem: 'Kierkegaard\'ın "Angst (Kaygı)" kavramına göre, uçurumun kenarında hissedilen baş dönmesinin asıl felsefi nedeni nedir?',
    options: [
      'Yüksek rakımlarda oksijen eksikliği nedeniyle beynin denge merkezinin geçici olarak felç olması',
      'Yüksek rüzgârların veya kaygan zeminlerin kazaya davetiye çıkarması korkusu',
      'Kişinin, kendi iradesiyle "kendisini o boşluğa atabilme (yok etme) özgürlüğüne ve potansiyeline" sahip olduğunu anladığı o an hissettiği, özgürlüğün getirdiği o korkutucu, sınırsız ve devasa sorumluluk (baş dönmesi)',
      'Dağlık bölgelerde yaşayan insanların doğaüstü güçlere olan inancının zayıflaması'
    ],
    correct: 2,
    explanation: 'Düşme korkusu değil, "istersem kendimi atabilirim" şeklindeki o korkunç irade/potansiyel farkındalığı; özgürlüğün (ve kendi kendini yok etme gücünün) getirdiği o derin varoluşsal kaygıyı (Angst) açıklar.'
  },
  {
    title: 'Michelangelo ve Eksiltme Sanatı',
    passage: 'Rönesans\'ın efsanevi heykeltıraşı Michelangelo, dünyanın en kusursuz ve en estetik heykellerinden biri olan o devasa "Davut" heykelini bitirdiğinde, kendisine bu mükemmel eseri (şekli) o sert mermerden nasıl var ettiği sorulur. Michelangelo\'nun verdiği o dâhiyane cevap, sadece sanata değil insan felsefesine de bir formüldür: "Davut zaten en başından beri o mermer bloğunun içindeydi; ben sadece ona ait olmayan fazlalıkları yonttum ve onu özgür bıraktım." Bizler hayatı ve başarıyı hep dışarıdan üzerimize yeni bir şeyler "eklemek, yığmak ve biriktirmek" olarak algılarız. Oysa Michelangelo\'nun felsefesi tam tersini haykırır: Gerçek bilgeliğe ve kusursuzluğa; dışarıdan sahte zenginlikler (maskeler) ekleyerek değil; içimizdeki hırsı, kibri, yalanları ve bizi biz yapmayan o gereksiz "fazlalıkları söküp (eksiltip) atarak" kendi özümüze ulaşmakla varılır.',
    questionStem: 'Michelangelo\'nun "Davut heykelini yaratırken sadece fazlalıkları yonttum" sözü, hayat felsefesi (bilgelik) bağlamında neyi sembolize eder?',
    options: [
      'Güzelliğin sadece doğada bulunan sert ve beyaz taşlardan (mermerden) elde edilebileceğini',
      'Mükemmelliğin ve bilgeliğin; dışarıdan sürekli yeni şeyler (maskeler/zenginlik) eklemekle değil, insanı kendi özünden uzaklaştıran o gereksiz fazlalıkların, hırsların ve kibrin (eksiltme yoluyla) sökülüp atılmasıyla (içsel bir arınmayla) ortaya çıkacağını',
      'Heykel sanatının resim sanatından çok daha zor ve uzun süren bir meslek olduğunu',
      'Eski ustaların kullandığı aletlerin günümüz aletlerinden çok daha hassas ve kaliteli olduğunu'
    ],
    correct: 1,
    explanation: 'Davut\'un içerde olup fazlalıkların atılması; bilgeliğin ve mükemmelliğin "dışarıdan eklemekle" değil, gereksiz hırs/kibir fazlalıklarını "eksiltmekle/arınmakla" (özü ortaya çıkarmakla) elde edildiğini sembolize eder.'
  },
  {
    title: 'Feynman\'ın Kasa Hırsızlığı (Güvenlik İllüzyonu)',
    passage: 'İkinci Dünya Savaşı sırasında, Amerika\'nın en gizli (ve en ölümcül) nükleer sırlarının (Manhattan Projesi) tutulduğu Los Alamos laboratuvarlarında çalışan dâhi fizikçi Richard Feynman, boş vakitlerinde eğlenceli ve korkunç bir hobi edindi: "Kasa kırmak". Dünyanın en önemli nükleer şifrelerinin korunduğu o devasa çelik kasaları saniyeler içinde açıyor ve içine "Sıradan bir acemi tarafından açıldı" yazılı küçük kâğıtlar bırakıyordu. Yöneticiler dehşete düştü. Oysa Feynman üstün bir maymuncuk ustası değildi; o sadece insan doğasını (zaafları) hacklemişti. İnsanlar, dünyanın en gizli şifresini belirlerken bile o "tembel ve romantik" akıllarına yenik düşüp eşlerinin doğum tarihini, çocuklarının adını veya "1234" gibi ezberlemesi kolay sayıları koyuyorlardı! Feynman\'ın bu şakası, teknolojinin o devasa güvenlik çeliklerinin (ve şifrelerinin); "insanın o tembel, bencil ve öngörülebilir aptallığı (zaafı)" devreye girdiği an nasıl sıradan bir kâğıttan ev gibi çöktüğünün (güvenliğin bir illüzyon olduğunun) kanıtıdır.',
    questionStem: 'Feynman\'ın nükleer laboratuvardaki çelik kasaları kolayca açabilmesi, güvenlik ve sistemler hakkında hangi "insani (psikolojik) zaafı" ifşa eder?',
    options: [
      'O dönemde üretilen çelik kasaların mekanik şifreleme sistemlerinin fabrikasyon hatalarla dolu olmasını',
      'Dâhi fizikçilerin aynı zamanda doğuştan gelen inanılmaz birer el becerisine (hırsızlık yeteneğine) sahip olduklarını',
      'Ne kadar ileri teknoloji ve devasa çelik şifreler (güvenlik sistemleri) üretilirse üretilsin; işin içine insanın "tembel, öngörülebilir ve romantik" doğası (basit şifre koyma zaafı) girdiğinde o sistemin saniyeler içinde çökebilen bir illüzyona dönüştüğünü',
      'Savaş dönemlerinde laboratuvarlarda yeterince askeri personelin ve güvenlik kamerasının bulunmamasını'
    ],
    correct: 2,
    explanation: 'Çelik kasaların değil, "eşinin doğum tarihini şifre yapan insanın" tembelliğinin hacklenmesi; en güçlü güvenliğin bile insanın o basit, tembel ve öngörülebilir zaafıyla bir illüzyona dönüştüğünü ifşa eder.'
  },
  {
    title: 'Turing\'in Bisiklet Zinciri (Dâhinin Hapishanesi)',
    passage: 'Bilgisayar biliminin kurucusu, Enigma\'yı kıran o devasa beyin Alan Turing\'in gündelik hayatta kullandığı eski bir bisikleti vardı. Bu bisikletin zinciri sürekli atıyordu. Sıradan bir insan o bisikleti tamirciye götürür ve zinciri düzelttirirdi. Ancak Turing bunu reddetti. O, bisiklete binip denemeler yaparak, zincirin "tam olarak kaçıncı devirde ve pedalda" attığını matematiksel olarak hesapladı! Artık bisiklete biniyor, pedal turlarını içinden sayıyor ve tam zincirin atacağı o kritik saniyede pedal çevirmeyi bırakarak zincirin atmasını engelliyordu. Bu trajikomik hikâye, dâhilerin o hastalıklı ve dar zindanını özetler: Bazen çok zeki olmak bir lütuf değil, lanettir. Kusursuz bir mantık (ve deha), insanı en basit ve pratik (tamirciye gitmek gibi) çözümlerden kopararak; hayatın en sıradan problemlerini bile çözülmesi gereken devasa ve yorucu bir matematiksel cehenneme (hapishaneye) çevirir.',
    questionStem: 'Alan Turing\'in bisikletinin zincirini tamirciye vermek yerine pedal sayılarını matematiksel olarak hesaplaması, "deha (yüksek zekâ)" hakkında neyin metaforudur?',
    options: [
      'Matematikçilerin fiziksel güç ve kas koordinasyonu gerektiren konularda her zaman yeteneksiz olduklarının',
      'Dâhiliğin (yüksek zekânın) insanı her zaman mutlu ve zengin eden sihirli bir özellik olduğunun',
      'Aşırı analitik ve kusursuz bir mantığın (dehanın), kişiyi gündelik/pratik çözümlerden (sıradanlıktan) kopararak; basit hayat problemlerini bile sürekli hesaplama yapılan yorucu ve takıntılı bir zihin hapishanesine çevirmesinin (lanetinin)',
      'O dönemde bisiklet tamircisi bulmanın ekonomik olarak imkânsız olmasının'
    ],
    correct: 2,
    explanation: 'Zinciri düzeltmek yerine pedal sayarak (karmaşık hesaplarla) sürmesi; yüksek zekânın/dehanın basit/pratik çözümleri atlayarak insanı kendi mantığının o yorucu ve takıntılı zindanına hapsetmesinin metaforudur.'
  },
  {
    title: 'Kan Şelalesi (Mistiğin Çöküşü)',
    passage: 'Antarktika\'nın o bembeyaz, dondurucu ve ölü buzullarının arasında bulunan "Taylor Buzulu"ndan aşağı, kıpkırmızı ve kan revan içinde akan dehşet verici bir şelale (Blood Falls) dökülür. İlk kâşifler ve denizciler bunu gördüklerinde dehşete düştüler; bu, doğaüstü bir lanet, şeytani bir kan gölü veya dünyanın sonunu haber veren kıyamet gibi görünüyordu. Ancak modern bilim bu mitolojiyi tek bir neşterle kesti: O kan değildi. Buzulun binlerce metre altında, 1.5 milyon yıldır havayla hiç temas etmemiş, aşırı tuzlu ve "demir" zengini yeraltı sularında yaşayan bakteriler vardı. O su, buzulun çatlağından sızıp ilk kez oksijenle (havayla) temas ettiğinde "demir anında paslandı" (oksitlendi) ve kırmızıya döndü! "Kan Şelalesi", doğanın en korkunç ve şeytani sanılan gizemlerinin bile; aslında bilimin o soğuk, moleküler ve oksitlenen laboratuvarı karşısında nasıl sıradanlaşıp efsanesini yitirdiğinin (aydınlandığının) kanıtıdır.',
    questionStem: 'Antarktika\'daki "Kan Şelalesi"nin bilimsel olarak açıklanması, insanlığın olayları algılayışı hakkında nasıl bir felsefi zaferi (veya uyanışı) temsil eder?',
    options: [
      'Buzulların altındaki deniz canlılarının aslında sanıldığından daha büyük boyutta olduğunun anlaşılmasını',
      'İnsanoğlunun korkudan doğaüstü (kıyamet/lanet) anlamlar yükleyerek efsaneleştirdiği (ve kutsallaştırdığı) o korkutucu doğa olaylarının; bilimin, oksijenin ve aklın o rasyonel (soğuk) analizi karşısında aydınlanarak o mistik/karanlık maskesini düşürmesini',
      'Demir madeninin sadece sıcak iklimlerde paslandığı yönündeki eski inancın doğrulanmasını',
      'Antarktika\'nın hiçbir zaman yaşanabilir bir kıta olamayacağının kesin kanıtını'
    ],
    correct: 1,
    explanation: 'Kan/lanet sanılan şeyin aslında paslanan demir olduğunun (bilimle) çözülmesi; insanın bilinmeyene yüklediği mistik/korkutucu efsanelerin, aklın ve bilimin rasyonel analizi karşısında çökmesini (aydınlanmayı) temsil eder.'
  },
  {
    title: 'Olympe de Gouges ve Devrimin İkiyüzlülüğü',
    passage: '1789 Fransız Devrimi, tüm dünyaya "Özgürlük, Eşitlik ve Kardeşlik" sloganını altın harflerle duyurdu ve "İnsan ve Yurttaş Hakları Bildirgesi"ni yayınladı. Ancak Olympe de Gouges adlı cesur bir aydın, bu parıltılı metni okuduğunda o iğrenç (ve eril) ikiyüzlülüğü fark etti: Bildirgedeki "İnsan (Homme)" kelimesi sadece ve sadece "Erkekleri" kapsıyor, kadınları yine köle ve vatandaşlıktan yoksun bırakıyordu! Olympe hemen kalemi eline aldı ve "Kadın ve Yurttaş Hakları Bildirgesi"ni yazdı. Bildirgesinde o meşhur ve sarsıcı maddeyi ekledi: "Kadının darağacına çıkma hakkı varsa, kürsüye de çıkma (siyaset yapma) hakkı olmalıdır!" Devrimciler ne yaptı dersiniz? Eşitlik diye bağıran o aydınlar, sırf kadınlar için de gerçek eşitlik istediği için Olympe de Gouges\'u giyotine (darağacına) gönderdiler! Bu olay, tarihteki devrimlerin ve "evrensel insan hakları" çığlıklarının; kendi çıkarlarına (ve eril kibrine) dokunulduğunda nasıl anında bencil, kör ve kanlı birer tiranlığa (ikiyüzlülüğe) dönüştüğünün en utanç verici anıtıdır.',
    questionStem: 'Olympe de Gouges\'un yazdığı bildirge yüzünden (Fransız Devrimcileri tarafından) idam edilmesi, "devrim ve eşitlik" kavramları hakkında hangi karanlık gerçeği ifşa eder?',
    options: [
      'Kadınların o dönemde siyasi konularda konuşabilecek eğitime sahip olmadığını',
      'Giyotin kullanımının Fransız Devrimi sırasında kontrolden çıkarak tüm aydınları hedef aldığını',
      'Evrensel "eşitlik ve özgürlük" iddiasıyla yola çıkan devrimlerin bile, kendi içindeki bağnazlıkları (eril kibri) aşamadığını ve sadece belirli bir zümrenin çıkarına dokunulduğunda o "devrimcilerin" anında acımasız ve ikiyüzlü birer zorba tiran (katil) haline geldiğini',
      'O dönemki bildirgelerin el yazısıyla yazıldığı için yanlış anlaşılmalara yol açtığını'
    ],
    correct: 2,
    explanation: 'Eşitlik için devrim yapanların, eşitlik isteyen kadını (kendi iktidarlarına/erilliğine dokunduğu için) idam etmesi; devrimlerin ve yüce ideallerin aslında nasıl bencil, bağnaz ve ikiyüzlü (tiranlık) olabildiğini ifşa eder.'
  },
  {
    title: 'John Harvey Kellogg ve Ahlakın Diyetisyeni',
    passage: 'Bugün marketlerde satılan o masum Mısır Gevreklerinin (Corn Flakes) icat edilme hikâyesi, aslında din, bilim ve baskının o tuhaf ve karanlık sentezidir. 19. yüzyılda fanatik ve dindar bir doktor olan John Harvey Kellogg, toplumdaki suçların, günahların ve hastalıkların (özellikle cinsel dürtülerin) baharatlı, etli ve lezzetli yemeklerden kaynaklandığına inanıyordu. Ona göre insanın ruhu ve ahlakı mideden yönetiliyordu. İnsanların içindeki o vahşi "günah (haz) ateşini" söndürmek, dürtülerini köreltmek ve onları "ahlaklı (uysal)" hale getirmek için; dünyadaki en tatsız, en lezzetsiz, tuzsuz ve sıkıcı yiyeceği icat etti: Haşlanıp preslenmiş mısır ezmesi (Mısır Gevreği). Kellogg\'un bu trajikomik icadı; otoritenin (veya inancın) insanın içindeki o kaotik, tutkulu ve ateşli doğayı (insani özü) ehlileştirmek ve kontrol etmek uğruna onu nasıl tatsız, lezzetsiz ve mekanik bir diyete (kalıba) hapsetmeye çalıştığının en çıtırdayan kanıtıdır.',
    questionStem: 'John Harvey Kellogg\'un Mısır Gevreği\'ni icat edişindeki asıl felsefi (psikolojik) motivasyon (veya yanılgı) neye dayanmaktadır?',
    options: [
      'Mısırın etten ve baharattan çok daha ucuz bir hammadde olması sebebiyle ekonomik bir tekelleşme hırsına',
      'İnsanın içindeki o karmaşık ve tutkulu (haz odaklı) doğayı ve cinsel dürtüleri (günahları); onu tamamen lezzetsiz, tatsız ve sıkıcı bir diyete mahkûm ederek (fiziksel baskıyla) köreltip "ahlaklı ve uysal" bir robot yaratma inancına',
      'O dönemde Avrupa\'da yaşanan büyük et ve protein kıtlığına karşı toplumu doyurma çabasına',
      'Gevrek yemenin insan ömrünü laboratuvar verilerine göre en az 20 yıl uzattığı şeklindeki bilimsel gerçeğe'
    ],
    correct: 1,
    explanation: 'Kellogg\'un amacı beslenme değil, tatsız tuzsuz bir yiyecekle insanın tutkularını (cinsel dürtüleri/hazzı) köreltmek ve onu ahlaklı/uysal yapmaktı; yani insanın doğasını fiziksel bir diyetle ehlileştirme kibridir.'
  }
];

export const bilimParagrafSorulari36: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_36.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_36[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim36-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
