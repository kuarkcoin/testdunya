import type { BilimParagrafQuestion } from './types';

const PARAGRAPH_THEMES_13 = [
  {
    title: 'Radyum Kızları',
    passage: '1920\'lerde Amerika\'da saat kadranlarına karanlıkta parlayan radyum boyası süren genç kadınlar, fırçaların ucunu sivriltmek için onları dudaklarının arasına alıyorlardı. Şirket yöneticileri radyumun zararsız olduğunu söylüyordu; oysa kendileri laboratuvarlarda kurşun önlüklerle çalışıyordu. Yıllar sonra bu kadınların çeneleri erimeye, kemikleri un ufak olmaya ve karanlıkta parlayarak ölmeye başladıklarında bile şirketler gerçeği inkâr etti. "Radyum Kızları", kapitalizmin kâr hırsı uğruna insan hayatını nasıl pervasızca, kelimenin tam anlamıyla "içten içe çürüterek" harcayabildiğinin ve gerçeği örtbas etme çabasının tarihteki en fosforlu ve korkunç kanıtıdır.',
    questionStem: 'Radyum Kızları\'nın yaşadığı trajedi, dönemin sanayi anlayışı hakkında neyi göz önüne sermektedir?',
    options: [
      'Kadın işçilerin sanayi sektöründe erkeklere göre daha dikkatsiz ve eğitimsiz olduğunu',
      'Bilimsel araştırmaların o dönemde radyumun zararlarını tespit edebilecek seviyede olmadığını',
      'Şirketlerin (kapitalist kâr hırsının), tehlikeyi bilmelerine rağmen işçi sağlığını hiçe sayarak gerçeği örtbas etme (sömürü) ahlaksızlığını',
      'Karanlıkta parlayan saatlerin o dönemde sanıldığından çok daha az talep gördüğünü'
    ],
    correct: 2,
    explanation: 'Yöneticilerin tehlikeyi bilip kurşun önlük giymesine rağmen işçilere "zararsız" demesi, kâr hırsı uğruna insan hayatının hiçe sayıldığı ahlaksız bir sömürüyü kanıtlar.'
  },
  {
    title: 'Oppenheimer ve Bhagavad Gita',
    passage: '16 Temmuz 1945\'te, New Mexico çöllerinde dünyanın ilk atom bombası "Trinity" patlatıldığında, gökyüzünü binlerce güneşten daha parlak, kör edici bir ışık kapladı. Projenin mimarı fizikçi J. Robert Oppenheimer, yarattığı o devasa ölüm mantarının göğe yükselişini izlerken zafer çığlıkları atmadı. Aksine, dudaklarından Hint destanı Bhagavad Gita\'dan şu kan dondurucu ve hüzünlü dize döküldü: "Şimdi ben ölüm oldum, dünyaların yok edicisi." Oppenheimer o saniye anlamıştı; insanlık artık kendi kendini tek bir tuşla yok edebilecek o nihai ve tanrısal güce ulaşmıştı. Bu an, bilimin o masum keşif arzusunun, insanlığın elinde nasıl apokaliptik bir kâbusa dönüştüğünün felsefi kırılma noktasıdır.',
    questionStem: 'Oppenheimer\'ın atom bombasının patlaması karşısında hissettiği duygu durumu parçada nasıl ifade edilmiştir?',
    options: [
      'Yıllarca süren emeğinin sonucunu almanın verdiği derin bir bilimsel gurur ve tatmin',
      'Bilimsel bir buluşun, insanoğluna kendi türünü yok etme (apokaliptik) gücü vermesinden doğan felsefi bir dehşet ve vicdani bir sarsıntı',
      'Bombanın yeterince güçlü olmadığını düşünerek yaşadığı büyük bir teknik hayal kırıklığı',
      'Sovyetler Birliği\'ni mağlup edeceğine dair duyduğu kesin ve kibirli bir güven'
    ],
    correct: 1,
    explanation: '"Dünyaların yok edicisi oldum" sözü ve zafer çığlığı atmaması, buluşunun insanlığa getireceği yıkımı fark etmesinden doğan dehşeti ve vicdani sarsıntıyı gösterir.'
  },
  {
    title: 'Kobra Etkisi (Cobra Effect)',
    passage: 'Hindistan İngiliz sömürgesi altındayken, Delhi sokaklarındaki kobra yılanlarının sayısından rahatsız olan İngiliz hükümeti dâhice (!) bir plan yaptı: Getirilen her ölü kobra için halka para ödülü verilecekti. Başlangıçta işe yaradı, yılan sayısı azaldı. Ancak kısa süre sonra Hintliler, sadece ödül parasını almak için evlerinde gizlice kobra üretmeye başladılar! Hükümet durumu fark edip ödül sistemini iptal edince, halk ellerinde kalan değersiz binlerce kobrayı sokaklara saldı. Sonuç, eskisinden çok daha büyük bir kobra istilası oldu. "Kobra Etkisi", karmaşık bir sorunu sadece yüzeysel teşviklerle (parayla) çözmeye çalışmanın, sorunu çözmek bir yana, nasıl kendi ellerinizle daha da ölümcül hale getirebileceğinin efsanevi bir örneğidir.',
    questionStem: 'Kobra Etkisi kavramı, yönetim ve kriz çözme politikaları hakkında hangi önemli dersi vermektedir?',
    options: [
      'Halkın hayvan sevgisinin ekonomik çıkarlardan her zaman daha üstün olduğunu',
      'Karmaşık sorunlara yönelik yüzeysel ve sadece maddi teşvike dayalı eksik çözümlerin, beklenmedik yan etkiler doğurarak sorunu eskisinden çok daha felaket bir boyuta taşıyabileceğini',
      'Yabancı yöneticilerin yerel halkın dini inançlarına asla saygı duymadığını',
      'Hindistan ikliminin zehirli yılanların üremesi için dünyadaki en elverişli yer olduğunu'
    ],
    correct: 1,
    explanation: 'Ödül sisteminin (yüzeysel çözüm) insanları yılan üretmeye itip, ödül bitince sokakların yılan dolması; eksik çözümlerin sorunu daha da büyütebileceğini kanıtlar.'
  },
  {
    title: 'Diderot Etkisi',
    passage: '18. yüzyıl Fransız filozofu Denis Diderot, hayatı boyunca yoksul yaşamıştı. Bir gün Rus Çariçesi ona yüklü bir para ve hediye olarak kusursuz, kırmızı, ipek bir sabahlık gönderdi. Diderot o muhteşem sabahlığı giydiğinde kendini çok şık hissetti; ancak birden çalışma masasının o sabahlığa hiç uymadığını (eski kaldığını) fark edip yeni bir masa aldı. Sonra sandalyeyi, halıyı, perdeleri ve tabloları değiştirdi. Bir tek sabahlığa uydurmak için evdeki her şeyi yenileyen Diderot, sonunda devasa bir borç batağına sürüklenip eskisinden daha yoksul ve mutsuz oldu. "Diderot Etkisi", insanın sahip olduğu bir lüksün, ona yetmek yerine, kendisini tamamlayacak yeni lüksler talep ederek kişiyi nasıl dipsiz bir tüketim ve borç sarmalına çektiğini anlatan kusursuz bir sosyolojik tespittir.',
    questionStem: 'Diderot Etkisi\'nin temelinde yatan insan davranış modeli aşağıdakilerden hangisidir?',
    options: [
      'İnsanların sadece hediye edilen eşyaları uzun süre kullanma eğiliminde olması',
      'Yeni ve gösterişli (lüks) bir eşya edinmenin, kişinin mevcut standartlarını yetersiz bulmasına yol açarak onu durdurulamaz bir tüketim (alma) zincirine sürüklemesi',
      'Filozofların genellikle maddi dünyadan tamamen kopuk ve tutumlu bir hayat sürmesi',
      'İnsanın yoksulluktan kurtulur kurtulmaz eski dostlarını unutma eğiliminde olması'
    ],
    correct: 1,
    explanation: 'Kırmızı bir sabahlık yüzünden evdeki her şeyin eski görünmesi ve hepsinin yenilenmesi; yeni bir lüksün zincirleme bir tüketim (alma) histerisi yarattığını gösterir.'
  },
  {
    title: 'Zhuangzi ve Kelebek Rüyası',
    passage: 'Antik Çin filozofu Zhuangzi, bir gece rüyasında kendini özgürce uçan, neşeli bir kelebek olarak gördü. Kelebek, Zhuangzi adında bir adam olduğunu tamamen unutmuştu. Filozof aniden uyandığında, yatağında yine o bildiği insan bedeniyle duruyordu. Ancak zihnine şu ürpertici felsefi şüphe düştü: "Acaba ben rüyasında kelebek olduğunu gören bir insan mıyım; yoksa şu an rüyasında Zhuangzi adında bir insan olduğunu gören bir kelebek miyim?" Bu kısacık anekdot, insanlık tarihinin en büyük varoluşsal çıkmazlarından biridir. Duyu organlarımıza ve algımıza duyduğumuz o sarsılmaz güvenin, aslında sadece uzun süreli bir rüyanın ikna edici illüzyonu olabileceği ihtimali, gerçeklik algımızı paramparça eder.',
    questionStem: 'Zhuangzi\'nin Kelebek Rüyası hikâyesi, felsefede öncelikli olarak hangi kavramı tartışmaya açmaktadır?',
    options: [
      'Hayvanların da insanlar gibi karmaşık ve derin rüyalar görebilme yetisine sahip olduğunu',
      'İnsan beyninin uyku sırasında fiziksel acıları hissetmeme mekanizmasını',
      'Duyu organlarımızın bize sunduğu "mutlak gerçeklik" algısının doğruluğunu ve uyanık olduğumuz hayatın aslında ikna edici bir rüya (illüzyon) olma ihtimalini',
      'İnsanın yaşlandıkça çocukluk anılarını giderek daha net hatırlamaya başlamasını'
    ],
    correct: 2,
    explanation: '"Rüyasında insan olduğunu gören bir kelebek miyim?" sorusu, yaşadığımız mutlak gerçekliğin aslında bir rüya (illüzyon) olup olmadığını, yani gerçeklik algımızı sorgular.'
  },
  {
    title: 'Diego de Landa ve Kültürel Soykırım',
    passage: '1562 yılında, İspanyol rahip Diego de Landa, Amerika kıtasındaki Maya halkını "şeytani inançlardan kurtarıp Hristiyanlaştırmak" amacıyla tarihin en büyük kültürel soykırımlarından birine imza attı. Rahiplerin topladığı, Mayaların binlerce yıllık astronomi, tıp, tarih ve edebiyat bilgisini barındıran tüm "Kodeks"leri (hiyeroglif kitapları) tek bir gecede devasa bir ateşte yaktı. Gözleri önünde binlerce yıllık hafızaları küle dönen Mayalar acı içinde feryat ediyordu. Landa günlüğüne "İçinde şeytanın yalanlarından başka bir şey yoktu, hepsini yaktık" yazdı. Bu olay, "kurtuluş ve medeniyet" maskesi takmış dogmatik bir cehaletin, kendisinden farklı olan bir kültürü nasıl bir gecede tarihten (hafızadan) silebileceğinin kan donduran kanıtıdır.',
    questionStem: 'Diego de Landa\'nın Maya kitaplarını yakması eylemi, yazar tarafından nasıl değerlendirilmektedir?',
    options: [
      'Hristiyanlık dininin o coğrafyada hızla yayılmasını sağlayan stratejik ve haklı bir başarı olarak',
      'Maya dilinin öğrenilmesinin çok zor olmasından dolayı yapılmış pratik (zorunlu) bir temizlik işlemi olarak',
      'Sözde bir kurtuluş ve dini arınma bahanesi (maskesi) altında, koca bir medeniyetin binlerce yıllık bilgi birikimini ve hafızasını yok eden dogmatik bir kültürel soykırım olarak',
      'Kağıt yapımında kullanılan malzemelerin bulaşıcı hastalık yaydığı için mecburen ateşe verilmesi olarak'
    ],
    correct: 2,
    explanation: 'Yazar, bu eylemi "kurtuluş ve medeniyet maskesi takmış dogmatik bir cehaletin" yarattığı bir "kültürel soykırım" (hafıza silme) olarak değerlendirmektedir.'
  },
  {
    title: 'John Snow ve Geniş Sokak Pompası',
    passage: '1854 yılında Londra\'da korkunç bir Kolera salgını baş gösterdi. Dönemin tıp otoriteleri, hastalığın havadan (Miasma-kötü hava) yayıldığına inanıyordu. Doktor John Snow ise bu dogmaya karşı çıktı. Kapı kapı dolaşıp ölenlerin adreslerini bir haritaya işaretlediğinde, ölümlerin "Broad Street" (Geniş Sokak) üzerindeki tek bir su pompasının etrafında kümelendiğini fark etti. Hastalık havadan değil, lağım karışmış bu sudan geliyordu. Yetkililer ona inanmak istemese de Snow, kendi başına gidip pompanın kolunu söktü ve salgın bıçak gibi kesildi. John Snow\'un bu hareketi, asırlık köhne inançların ve unvanlı otoritelerin kibrinin, basit bir veri analizi (haritalama) ve cesur bir akıl karşısında nasıl çöktüğünün efsanevi başlangıcıdır.',
    questionStem: 'John Snow\'un kolera salgınını durdurma süreci, bilim tarihi açısından neyin zaferi olarak kabul edilebilir?',
    options: [
      'Salgın hastalıklarda en iyi yöntemin insanları karantinaya almak olduğunun',
      'Tıp fakültesindeki uzun eğitimlerin pratik hayatta her zaman işe yaradığının',
      'Geleneksel inançlara ve otoritelerin kibrine (dogmalara) karşı; somut verilere, gözleme ve analitik aklın (bilimin) ortaya koyduğu mutlak zaferin',
      'Su pompalarının her zaman salgın hastalık ürettiği gerçeğinin'
    ],
    correct: 2,
    explanation: 'Otoritelerin "kötü hava" (dogma) inancına karşı Snow\'un haritalama (veri/gözlem) yaparak pompanın kolunu sökmesi, analitik aklın dogmalara karşı zaferini simgeler.'
  },
  {
    title: 'Kafka\'nın Dönüşümü ve İşe Yaramazlık',
    passage: 'Franz Kafka\'nın "Dönüşüm" adlı romanında, Gregor Samsa bir sabah yatağında kendini devasa ve iğrenç bir böceğe dönüşmüş olarak bulur. Ancak hikâyenin asıl sarsıcı yanı Gregor\'un böceğe dönüşmesi değil, etrafındakilerin buna verdiği tepkidir. Evin tüm geçimini sağlayan Gregor böcek olunca, ailesi önce şok yaşar, sonra ondan iğrenir ve en sonunda ona tamamen kayıtsız kalıp ölmesini beklerler. Gregor artık para kazanamadığı (işe yaramadığı) an, ailesi için bir yüke, bir çöpe dönüşmüştür. Kafka\'nın bu şaheseri, kapitalist ve çıkarcı modern toplumda, insanın değerinin sadece "ne kadar ürettiğiyle" (işe yaramasıyla) ölçüldüğünü; çarkın dışına çıktığınız an en sevdikleriniz tarafından bile nasıl böcek gibi ezilip dışlanacağınızı yüzümüze çarpar.',
    questionStem: 'Kafka\'nın "Dönüşüm" eserinde Gregor Samsa\'nın böceğe dönüşmesi üzerinden yapılan asıl sosyolojik eleştiri nedir?',
    options: [
      'İnsanların doğaya ve hayvanlara karşı duyduğu yersiz tiksinti',
      'Çalışma saatlerinin uzunluğunun insanı bedensel olarak tüketip deforme etmesi',
      'Modern toplumda bireyin değerinin sadece "ekonomik faydasına (üretimine)" indirgenmesi ve faydası biten insanın kendi ailesi tarafından bile ötekileştirilip dışlanması',
      'Böcek fobisinin (entomofobi) toplumda sanıldığından çok daha yaygın olması'
    ],
    correct: 2,
    explanation: 'Gregor para kazanamadığı an ailesinin ondan iğrenip ölmesini beklemesi, modern toplumda insanın değerinin sadece "ürettiği fayda" ile ölçüldüğünü (dışlanmayı) eleştirir.'
  },
  {
    title: 'Bobo Bebeği Deneyi (Bandura)',
    passage: '1961 yılında Albert Bandura, şiddetin insanın içinde doğuştan var olan bir dürtü mü, yoksa görerek öğrenilen bir davranış mı olduğunu test etti. Bir grup çocuğu, içi hava dolu hacıyatmaz benzeri bir oyuncakla (Bobo Bebeği) dolu odaya aldı. Ancak çocukları odaya sokmadan önce onlara bir video izletti: Videoda bir yetişkin, Bobo bebeğine acımasızca çekiçle vuruyor, tekmeliyor ve küfrediyordu. Videoyu izleyen çocuklar odaya girdiklerinde, yetişkinleri birebir taklit ederek bebeği dövmeye başladılar; hatta videoda olmayan yeni işkence yöntemleri (oyuncak silahla vurmak gibi) icat ettiler. Şiddet içeren video izlemeyen çocuklar ise bebekle sadece barışçıl oyunlar oynadı. Bu deney, kötülüğün genetik bir kader değil, toplumdan (yetişkinlerden) kopyalanan bulaşıcı bir virüs (sosyal öğrenme) olduğunu ispatladı.',
    questionStem: 'Bandura\'nın Bobo Bebeği Deneyi\'nin sonuçlarına göre şiddet eğilimi nasıl açıklanmaktadır?',
    options: [
      'Erkek çocukların kız çocuklara göre doğuştan daha agresif olmasıyla',
      'Şiddetin genetik veya doğuştan gelen (içgüdüsel) bir dürtü değil, çevreyi (yetişkinleri) gözlemleme yoluyla kopyalanan ve öğrenilen bir davranış olmasıyla',
      'Oda sıcaklığının ve fiziksel koşulların çocukların stres seviyesini artırmasıyla',
      'Oyuncakların şeklinin (hacıyatmaz) insan psikolojisinde şiddeti tetiklemesiyle'
    ],
    correct: 1,
    explanation: 'Şiddet izleyen çocukların oyuncağı dövmesi, izlemeyenlerin barışçıl oynaması; şiddetin genetik değil (gözlem/taklit yoluyla) sosyal olarak öğrenilen bir virüs olduğunu kanıtlar.'
  },
  {
    title: 'Tifolu Mary: Özgürlük mü, Toplum mu?',
    passage: '1900\'lerin başında New York\'ta zengin ailelerin yanında aşçılık yapan Mary Mallon, gittiği her eve ölümcül Tifo hastalığını bulaştırıyordu. İlginç olan, Mary\'nin kendisinin turp gibi sağlıklı olmasıydı (tarihteki bilinen ilk asemptomatik taşıyıcı). Yetkililer ona aşçılığı bırakmasını söylediğinde Mary buna öfkeyle karşı çıktı, hastalığı kendisinin yaydığına asla inanmadı ve sahte isimlerle aşçılık yapmaya, insanları zehirlemeye devam etti. Sonunda devlet onu yakalayıp ıssız bir adada, ölene kadar 26 yıl boyunca zorunlu karantinaya kapattı. "Tifolu Mary" vakası, tıbbi bir olaydan çok öte; "Bireyin özgürlüğü nerede biter, toplumun sağlığını korumak adına devlet bir insanı suçu olmadan ömür boyu hapsedebilir mi?" şeklindeki o devasa ahlaki ve hukuki ikilemin tam merkezidir.',
    questionStem: 'Tifolu Mary vakasının odaklandığı temel ahlaki ve hukuki çatışma (ikilem) nedir?',
    options: [
      'Zengin ailelerin aşçılara ve hizmetlilere uyguladığı haksız sömürü',
      'Tıp biliminin o dönemde bulaşıcı hastalıkların teşhisinde çok yetersiz kalması',
      'Hastalığı bilerek yaymayan (kendi hasta olmayan) bir bireyin "kişisel özgürlüğü" ile, halk sağlığını (kitleyi) korumak için devletin uyguladığı "zorunlu kısıtlama/karantina" arasındaki sınır tartışması',
      'Gıda sektöründe kadınların çalışmasının engellenmesi için üretilen siyasi bahaneler'
    ],
    correct: 2,
    explanation: 'Mary\'nin aşçılık yapma (kişisel özgürlük) isteği ile devletin halkı korumak için onu 26 yıl hapsetmesi; bireysel özgürlük ile toplum sağlığı arasındaki ahlaki/hukuki sınır çatışmasını ifade eder.'
  },
  {
    title: 'Kemik Savaşları: Toksik Rekabet',
    passage: '19. yüzyılın sonlarında Amerika\'da, paleontoloji tarihinin en büyük buluşları aynı zamanda en utanç verici ahlaksızlıklarına sahne oldu. Othniel Marsh ve Edward Cope adlı iki bilim insanı, yeni dinozor fosilleri bulmak için öyle hastalıklı bir rekabete (Kemik Savaşları) giriştiler ki, bilim tamamen rafa kalktı. Birbirlerinin kazı alanlarına casuslar yolladılar, fosilleri çaldılar ve en iğrenci; "Ben çıkaramıyorsam o da bulamasın" diyerek, içinde paha biçilmez milyonlarca yıllık dinozor iskeletlerinin bulunduğu mağaraları dinamitle havaya uçurdular. Bilimi ileri taşımak için başlayan bu serüven, insan egosunun ve şöhret hırsının, uğrunda savaştığı o "hakikati" bile gözünü kırpmadan yok edebilecek kadar toksik bir canavara dönüşebileceğini gösterdi.',
    questionStem: 'Kemik Savaşları olayında eleştirilen "bilim dışı ve toksik" insan davranışı aşağıdakilerden hangisidir?',
    options: [
      'Paleontoloji biliminin jeolojiye göre daha az popüler olması',
      'Dinozor fosillerinin devlet tarafından izinsiz olarak satılması',
      'Bilimsel aydınlanma ve gerçeği bulma amacının yerini; kişisel ego, şöhret hırsı ve rakibini yok etmek uğruna bizzat o değerli gerçeği (fosilleri) tahrip etmeye bırakması',
      'Kazı çalışmalarında dinamit gibi çevreye zararlı patlayıcıların kullanılması'
    ],
    correct: 2,
    explanation: 'İki bilim insanının ego ve hırs yüzünden, bulmak için uğraştıkları fosilleri (hakikati) dinamitle yok etmeleri; bilimin şöhret hırsına kurban edilmesini eleştirir.'
  },
  {
    title: 'Canavar Deneyi (The Monster Study)',
    passage: '1939 yılında Wendell Johnson, kekemeliğin genetik değil psikolojik olduğunu kanıtlamak için 22 yetim çocuk üzerinde "Canavar Deneyi" adını alacak korkunç bir çalışma yaptı. Tamamen akıcı ve düzgün konuşan sağlıklı çocukların yarısına haftalarca "Çok kötü konuşuyorsun, kekemeliğin başlıyor, konuşmadan önce iyice düşün, yoksa sus" diyerek sürekli psikolojik baskı (negatif telkin) uyguladı. Sonuç yıkıcıydı. Tamamen sağlıklı olan o çocuklar içine kapandı, anksiyete krizleri geçirdi ve hayatları boyunca kalıcı konuşma bozuklukları yaşadılar. Bu zalim deney, otorite figürlerinin kelimelerinin ve "olumsuz etiketlemelerin", sağlıklı bir insan zihnini nasıl ömür boyu sakat bırakabilen (ve gerçeğe dönüşen) ölümcül bir silaha dönüştüğünü ispatlar.',
    questionStem: 'Canavar Deneyi\'nin sonuçlarına göre insan psikolojisine zarar veren asıl yıkıcı etken nedir?',
    options: [
      'Yetimhanelerin fiziksel olarak çocukların gelişimine uygun olmayan kötü koşulları',
      'Kekemeliğin sadece biyolojik (genetik) bir sorun değil, bulaşıcı bir hastalık olması',
      'Otorite figürlerinin uyguladığı sürekli negatif telkinlerin (olumsuz etiketlemenin), tamamen sağlıklı bireylerin bile zihnini sakat bırakıp o kusuru gerçeğe dönüştürmesi',
      'Çocukların kendilerinden daha büyük çocuklarla iletişim kurmaktan kaçınması'
    ],
    correct: 2,
    explanation: 'Sağlıklı çocuklara "kekeliyorsun" denmesiyle gerçekten kekeme olmaları; otoritenin negatif telkininin/etiketlemesinin zihni sakatlayıp o kusuru gerçeğe dönüştürdüğünü (kendini gerçekleştiren kehanet) kanıtlar.'
  },
  {
    title: 'Werther Etkisi ve Bulaşıcı İntihar',
    passage: '1774 yılında Alman yazar Goethe, "Genç Werther\'in Acıları" adlı romanını yayımladığında Avrupa\'yı sarsan bir moda başladı. Romandaki ana karakter Werther, imkânsız bir aşk yüzünden mavi frakını, sarı yeleğini giyerek intihar ediyordu. Romanın yayımlanmasından sonra Avrupa\'da yüzlerce genç erkek, tıpkı Werther gibi mavi frak ve sarı yelek giyerek aynı yöntemle hayatına son vermeye başladı. Durum o kadar kontrolden çıktı ki kitap birçok ülkede yasaklandı. Psikolojide "Werther Etkisi" (Kopyacı İntihar) olarak bilinen bu fenomen; insanın çaresizlik ve bunalım anlarında medya, sanat veya popüler figürler aracılığıyla sunulan o romantikleştirilmiş ölüm fikrinden ne kadar kolay etkilenip (bulaşıcı bir hastalık gibi) taklit edebildiğini gösterir.',
    questionStem: 'Werther Etkisi, sosyoloji ve kitle psikolojisi açısından hangi tehlikeyi ortaya koymaktadır?',
    options: [
      'Romantik edebiyatın gençleri her zaman okumaya daha fazla teşvik ettiğini',
      'Medyanın, edebiyatın veya popüler kurguların; intihar gibi uç (trajik) eylemleri romantikleştirerek, psikolojik buhrandaki kitleler üzerinde bulaşıcı (taklitçi) bir etki yaratabileceğini',
      'Mavi ve sarı gibi canlı renklerin insan psikolojisinde depresyonu tetiklediğini',
      'Kitap yasaklamalarının halkı o kitaba daha fazla yönelttiğini (Ters Psikoloji)'
    ],
    correct: 1,
    explanation: 'Roman karakterinin intiharının gençler tarafından kıyafetine kadar taklit edilmesi; medyanın/sanatın trajik eylemleri romantikleştirerek kitlelerde bulaşıcı (taklit) bir eylem yaratabileceğini kanıtlar.'
  },
  {
    title: 'Uzun Kaşıklar Alegorisi',
    passage: 'Doğu felsefesinde Cennet ve Cehennemin farkını anlatan meşhur bir alegori vardır. Bir adam Cehennemi ziyarete gider; ortada devasa bir kazan nefis çorba kaynamaktadır. Etrafındaki insanlar ise açlıktan bir deri bir kemik kalmıştır. Kollarından daha uzun olan kaşıklarla çorbayı alabilmekte, ancak kaşık çok uzun olduğu için ağızlarına götürememektedirler. Adam Cennete geçer; ortada yine aynı çorba, aynı uzun kaşıklar vardır. Ancak buradaki insanlar çok sağlıklı ve mutludur. Çünkü Cennetteki insanlar uzun kaşıklarla çorbayı alıp kendi ağızlarına götürmeye çalışmak yerine, kaşığı karşısındaki arkadaşına uzatıp onu beslemektedir. Cennet ve Cehennem dışarıdan inşa edilen farklı iki mekân değildir; insanın bencilliği (kendini doyurma hırsı) ile diğerkâmlığı (dayanışması) arasındaki o felsefi seçimin ta kendisidir.',
    questionStem: 'Uzun Kaşıklar Alegorisi\'ne göre, "Cennet ve Cehennem" arasındaki asıl fark neyle açıklanmaktadır?',
    options: [
      'Fiziksel imkânların, yiyeceklerin ve mekân tasarımlarının kalitesiyle',
      'İnsanların o mekâna gelmeden önce dünyada işledikleri günahların ağırlığıyla',
      'Mekânların aynı olmasına rağmen, bireylerin olaylara bencilce (sadece kendi çıkarı) yaklaşması ile dayanışma ve yardımlaşma (diğerkâmlık) ile yaklaşması arasındaki ahlaki tercihle',
      'Kaşıkların uzunluk ölçülerinin kişilerin zekâsına göre farklılık göstermesiyle'
    ],
    correct: 2,
    explanation: 'Her iki yerde de şartlar (uzun kaşık ve çorba) aynıyken cehennemin aç, cennetin tok olması; farkın dışsal koşullar değil, bencillik ve dayanışma (ahlaki tercih) olduğunu gösterir.'
  },
  {
    title: 'Henrietta Swan Leavitt: Unutulan Deha',
    passage: '1900\'lerin başında Harvard Gözlemevi\'nde, "bilgisayar" (hesaplayıcı) olarak adlandırılan bir grup kadın, teleskop camlarındaki yıldız noktalarını saymak gibi sıkıcı işler için asgari ücretle çalıştırılıyordu. Bu kadınlardan biri olan işitme engelli Henrietta Swan Leavitt, binlerce yıldızın parlaklık değişimlerini inceleyerek astronomi tarihini sarsacak bir kural (Sefeid Değişkenleri formülünü) buldu. Bu formül, yıldızların ve galaksilerin bizden ne kadar uzakta olduğunu ölçmenin "ilk cetveli" oldu. Eğer onun bulduğu bu evrensel cetvel olmasaydı, Edwin Hubble evrenin genişlediğini asla kanıtlayamayacaktı. Leavitt hak ettiği övgüyü yaşarken asla alamadı. Bilim tarihi, isimleri altın harflerle yazılan erkek dehaların yanı sıra, o dehaların omuzlarına basarak yükseldiği isimsiz ve unutulmuş kadınların sessiz emeğiyle doludur.',
    questionStem: 'Henrietta Swan Leavitt\'in hikâyesi, bilim tarihindeki hangi adaletsizliğe dikkat çekmektedir?',
    options: [
      'Teleskop teknolojilerinin sadece zengin ülkeler tarafından üretilebilmesine',
      'Engelli bireylerin akademi dünyasında her zaman ayrıcalıklı bir konumda tutulmasına',
      'Tarihi değiştiren en kritik (temel) buluşların bile arkasında duran kadınların ve alt kademe çalışanların emeğinin, dönemin cinsiyetçi (veya hiyerarşik) yapısı yüzünden görünmez kılınmasına',
      'Astronomi biliminin matematik ve fizik kadar saygı görmemesine'
    ],
    correct: 2,
    explanation: 'Leavitt\'in bulduğu formül olmadan Hubble\'ın başarılı olamayacağı ancak övgüyü alamaması; kadınların/alt kademe çalışanların temel emeklerinin cinsiyetçi veya hiyerarşik sistemde görünmez kalmasını (adaletsizliği) anlatır.'
  },
  {
    title: 'Halifax Patlaması (1917)',
    passage: 'Birinci Dünya Savaşı sırasında Kanada\'nın Halifax limanında, savaş bölgesine gitmek üzere ağzına kadar patlayıcı ve cephane dolu Fransız gemisi Mont-Blanc, bir Norveç gemisiyle çarpıştı. Mont-Blanc alev aldı. Tehlikenin farkında olmayan binlerce sivil, kıyıya ve evlerinin pencerelerine koşarak bu ilginç "gemi yangınını" adeta bir sinema filmi izler gibi seyretmeye başladı. Yirmi dakika sonra gemi, atom bombası icat edilene kadar insanlık tarihinin gördüğü en büyük suni patlamayla infilak etti. 2 bin kişi anında öldü, pencerelerden izleyen binlerce insan ise patlayan cam kırıkları yüzünden kör oldu. Halifax felaketi, tehlikeyi eğlenceli bir seyirlik sanan o saf insan merakının, gerçeğin ölümcül şiddetiyle çarpıştığında nasıl karanlık bir kâbusa dönüştüğünün en trajik özetidir.',
    questionStem: 'Halifax Patlaması\'nın sivil kayıpları artırmasındaki asıl trajik (ve psikolojik) faktör nedir?',
    options: [
      'Gemilerdeki patlayıcıların o dönemde tamamen yasadışı olarak taşınması',
      'Kanada hükümetinin halka önceden hiçbir tahliye uyarısı yapmaması',
      'Tehlikeyi idrak edemeyen halkın, felaketi (yangını) ilginç bir görsel şov (seyirlik) sanarak cam kenarlarına doluşması ve saf merakın bedelini ölümle/körlükle ödemesi',
      'Liman kentlerindeki evlerin tahtadan yapılmış ve patlamaya dayanıksız olması'
    ],
    correct: 2,
    explanation: 'Binlerce insanın tehlikeyi anlamayıp yangını sinema izler gibi izlemesi ve camların patlamasıyla kör/ölü olması; saf insan merakının tehlikeyle birleştiği o trajik anı (seyirlik algısını) ifade eder.'
  },
  {
    title: 'Stockholm Sendromu',
    passage: '1973 yılında İsveç\'in başkenti Stockholm\'de bir bankayı basan soyguncular, dört banka çalışanını altı gün boyunca rehin aldı. Polis, rehineleri kurtarmak için operasyon yaptığında şok edici bir manzarayla karşılaştı: Rehineler kendilerini kurtarmaya gelen polislere saldırıyor, soygunculara (kendilerini ölümle tehdit eden esir edicilerine) siper oluyorlardı. Dava sürecinde rehineler soyguncuların avukat masraflarını bile ödediler. Psikolojide "Stockholm Sendromu" olarak bilinen bu akılalmaz durum, kurbanın maruz kaldığı yoğun korku, çaresizlik ve hayatta kalma içgüdüsüyle; kendisini esir alan, ezen ve şiddet uygulayan kişiye karşı minnet (aşk/sadakat) duyarak onunla bağ kurmasıdır. İnsan zihni, en çaresiz anında hayatta kalabilmek için kendi katiline bile âşık olacak kadar şekil değiştirebilir.',
    questionStem: 'Stockholm Sendromu, insan zihninin şiddet ve tehlike altındayken gösterdiği hangi psikolojik savunmayı tanımlar?',
    options: [
      'Tehlike anında hafızanın tamamen silinerek olayın unutulması (amnezi) refleksi',
      'Kurbanın yoğun korku ve çaresizlik karşısında hayatta kalabilmek (kendini güvende hissetmek) için, kendisine zulmeden (esir alan) otoriteyle mantık dışı bir sadakat veya sevgi bağı kurmasını',
      'Rehinelerin, soyguncuların ideolojik fikirlerine anında inanıp onları haklı bulması',
      'Korkunun insanlarda aşırı saldırganlık (agresyon) yaratarak çevrelerindeki herkese zarar verme isteği'
    ],
    correct: 1,
    explanation: 'Rehinelerin kurtarıcılara saldırıp soygunculara (katillerine) minnet duyması, çaresizlik anında hayatta kalmak için ezen kişiyle bağ kurma (savunma) refleksini tanımlar.'
  },
  {
    title: 'Sfenks\'in Bilmecesi',
    passage: 'Yunan mitolojisinde Thebai kentinin kapısında bekleyen aslan gövdeli, insan başlı canavar Sfenks, şehre girenlere şu bilmeceyi sorar: "Sabahları dört ayaklı, öğlenleri iki ayaklı, akşamları ise üç ayaklı olan yaratık nedir?" Bilemeyenleri anında parçalayarak yutar. Kahraman Oidipus (Oedipus) korkusuzca canavarın karşısına geçer ve cevap verir: "İnsandır! Bebekken (sabah) emekler, büyüdüğünde (öğlen) iki ayağı üzerinde dikilir, yaşlandığında (akşam) ise bir bastona dayanarak üç ayakla yürür." Sfenks yenilgiyi kabul edip kendini uçurumdan atar. Bu mitolojik bulmaca aslında evrenin en büyük sırrını ifşa eder: Doğadaki canavarların veya felaketlerin ötesinde, en büyük, en değişken ve en çözülemez bilmece bizzat insanın kendi kısa, kırılgan ve trajik hayat döngüsüdür.',
    questionStem: 'Oidipus\'un çözdüğü Sfenks\'in bilmecesi, mecazi (felsefi) olarak neyi vurgulamaktadır?',
    options: [
      'Günün farklı saatlerinde insan psikolojisinin değişkenlik gösterdiğini',
      'Canavarları alt etmenin tek yolunun kılıç değil, yüksek bir zekâ olduğunu',
      'Evrendeki en büyük ve trajik bilmecenin (gerçeğin), insanın kendi varoluşu, yaşlanması ve kırılgan hayat (zaman) döngüsü olduğunu',
      'Antik dönemde insanların fizyolojik olarak günümüzden farklı evrimleştiğini'
    ],
    correct: 2,
    explanation: 'Bilmecenin cevabının (emekleyen bebek, dik yürüyen adam, bastonlu yaşlı) İnsan olması; mitin asıl vurgusunun insanın kendi kısa ve trajik varoluş/zaman döngüsü olduğunu gösterir.'
  },
  {
    title: 'Büyük İrlanda Kıtlığı (Patates Yanıklığı)',
    passage: '1845 yılında İrlanda\'da tarım arazilerini "Patates Yanıklığı" adı verilen bir mantar hastalığı vurduğunda, tek bir ürün çeşidine (monokültür) bağlı olan adanın tüm gıda kaynağı bir gecede çürüdü. Ancak İrlanda nüfusunun %25\'ini (yaklaşık bir milyon kişiyi) yok eden şey sadece bu mantar değildi. O dönem İrlanda\'yı yöneten İngiliz İmparatorluğu, "serbest piyasa ekonomisi" (laissez-faire) kuralları gereği, adadaki diğer tüm kaliteli gıdaları, tahılları ve etleri silahlı askerlerin koruması altında gemilerle İngiltere\'ye ihraç etmeye devam etti. İnsanlar sokaklarda çimen yiyerek açlıktan can verirken limanlardan gıda dolusu gemiler kalkıyordu. Bu olay, kıtlığın sadece doğanın değil; siyasi kibrin, sömürgeci kayıtsızlığın ve acımasız bir ekonomik ideolojinin insan eliyle yarattığı kitlesel bir cinayet olduğunun kanıtıdır.',
    questionStem: 'Büyük İrlanda Kıtlığı felaketini "kitlesel bir cinayete" dönüştüren asıl faktör parçada nasıl açıklanmıştır?',
    options: [
      'İrlanda halkının tarım konusunda İngilizlerden çok daha eğitimsiz olması',
      'Sadece doğanın getirdiği patates hastalığı değil; İngiliz yönetiminin ekonomik ideoloji (kâr ve serbest piyasa) uğruna adadaki diğer gıdaları sömürgeci bir acımasızlıkla ihraç etmeye devam etmesi',
      'Avrupa\'daki diğer ülkelerin İrlanda\'ya yardım gemileri göndermeyi reddetmesi',
      'Patatesin insan beslenmesi için aslında hiç uygun ve besleyici bir bitki olmaması'
    ],
    correct: 1,
    explanation: 'Açlıktan insanlar ölürken İngilizlerin serbest piyasa bahanesiyle kaliteli gıdayı ihraç etmeye (sömürüye) devam etmesi, olayın doğa felaketinden öte siyasi/ekonomik bir cinayet olduğunu açıklar.'
  },
  {
    title: 'Pandora\'nın Kutusu ve Umut',
    passage: 'Yunan mitolojisinde ilk kadın olan Pandora\'ya tanrılar tarafından asla açmaması söylenen kilitli bir kutu (pithos) hediye edilir. Ancak merakına yenik düşen Pandora kutunun kapağını araladığında; savaşlar, hastalıklar, keder ve ölüm gibi dünyayı mahvedecek tüm kötülükler bir anda gökyüzüne yayılır. Pandora dehşet içinde kapağı kapattığında, kutunun en dibinde sadece tek bir şey kalmıştır: "Umut". Binlerce yıldır bu hikâye, kötülüklerin içinde umudun bir teselli (hediye) olarak kaldığı şeklinde yorumlanır. Ancak filozof Nietzsche buna şiddetle karşı çıkar: "Umut kötülüklerin en kötüsüdür, çünkü insanın çektiği işkenceyi (acıyı) uzatır." Kutunun dibinde kalan şey bir kurtarıcı mıdır, yoksa acı çeken insana boş bir vaat sunarak pes etmesini engelleyen o en sinsi ve acımasız ceza mıdır?',
    questionStem: 'Parçada yer alan Nietzsche\'nin "Umut" kavramına yaklaşımı nasıldır?',
    options: [
      'Umudun, zor zamanlarda insanların psikolojik olarak hayatta kalmasını sağlayan en güçlü ilaç olduğu',
      'Kutudan çıkan diğer tüm kötülüklerin aslında insanın kendi hatalarının bir sonucu olduğu',
      'Umudun bir teselli veya hediye değil; boş vaatler sunarak insanın çektiği acıyı (işkenceyi) gereksiz yere uzatan en sinsi kötülük (ceza) olduğu',
      'Tanrıların insanlara acıdığı için kutunun dibine bilerek olumlu bir güç bıraktığı'
    ],
    correct: 2,
    explanation: 'Nietzsche\'nin "Umut kötülüklerin en kötüsüdür, çünkü işkenceyi uzatır" sözü, umudun bir teselli değil, boş vaatlerle acıyı uzatan sinsi bir ceza olduğu yaklaşımını netleştirir.'
  }
];

// Test 13 Üretici Makine
export const sosyolojiParagrafSorulari13: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_13.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_13[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-sosyoloji13-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_14 = [
  {
    title: 'Goya\'nın Karanlık Zihni: Satürn',
    passage: 'İspanyol ressam Francisco Goya, hayatının son demlerinde sağırlık ve derin bir depresyonla boğuşurken evinin duvarlarına o meşhur "Kara Tablolar" serisini çizdi. Bunların en dehşet vericisi, kendi çocuklarını parçalayarak yiyen mitolojik tanrı Satürn\'ün (Kronos) resmidir. Goya bu tabloyu satmak veya sergilemek için yapmadı; bu doğrudan kendi karanlığıyla, ölüm korkusuyla ve zamanın (Satürn\'ün) her canlıyı yutup yok eden o acımasız iştahıyla yüzleşmesiydi. Tablodaki Satürn\'ün gözlerindeki o vahşi ama bir o kadar da korkmuş ifade, gücün ve cinnetin iç içe geçtiği bir kâbustur. Sanat, bazen dünyaya sunulan bir hediye değil, sanatçının kendi şeytanlarını hapsettiği bir tımarhane duvarıdır.',
    questionStem: 'Yazar, Goya\'nın "Çocuklarını Yiyen Satürn" tablosunu hangi felsefi temelle açıklamaktadır?',
    options: [
      'Goya\'nın Yunan mitolojisine duyduğu hayranlığın ve estetik kaygının bir dışavurumu olarak',
      'Sanatın sadece ticari amaçlarla (sergilemek için) değil, bazen ressamın kendi içsel korkularını (zamanın yok ediciliğini) ve cinnetini tuvale hapsederek sağalma çabası olarak',
      'İspanya iç savaşının halk üzerinde yarattığı ekonomik buhranın bir sembolü olarak',
      'Çocuklara karşı duyulan bastırılmış bir öfkenin psikanalitik yansıması olarak'
    ],
    correct: 1,
    explanation: 'Tabloyu sergilemek için değil evinin duvarına çizmesi ve zamanın acımasız iştahıyla yüzleşmesi; sanatın bazen şeytanları hapsetme/sağalma çabası olduğunu gösterir.'
  },
  {
    title: 'Karanlık Orman Teorisi (Dark Forest)',
    passage: 'Eğer evrende milyarlarca gezegen varsa neden hiçbir uzaylı bizimle iletişime geçmiyor? Çinli bilimkurgu yazarı Liu Cixin, Fermi Paradoksu\'na "Karanlık Orman Teorisi" ile kan dondurucu bir cevap verir. Evren, her medeniyetin elinde tüfeğiyle sessizce gezindiği karanlık bir ormandır. Hayatta kalmanın ilk kuralı sessiz olmaktır. Çünkü karanlıkta bir ateş yakıp "Ben buradayım!" diye bağırdığınız an (Arecibo mesajı gibi), ormandaki diğer daha güçlü, paranoyak ve yok edici avcılar konumunuzu tespit edip sizi anında yok edecektir. Bu teoriye göre; uzayın o derin sessizliği, orada kimsenin olmamasından değil, oradaki herkesin hayatta kalmak için nefesini tutup saklanmasından (korkudan) kaynaklanmaktadır.',
    questionStem: 'Karanlık Orman Teorisi, evrendeki "büyük sessizliği" hangi psikolojik ve stratejik gerekçeyle açıklamaktadır?',
    options: [
      'Uzaylıların radyo dalgaları yerine bizim bilmediğimiz telepati yöntemlerini kullanmasıyla',
      'Gelişmiş medeniyetlerin insanlık gibi ilkel bir türle muhatap olmak istememesi kibriyle',
      'Evrenin tehlikeli bir avlanma sahası olduğu varsayımıyla, her medeniyetin yok edilme (av olma) korkusuyla bilinçli ve stratejik bir şekilde sessiz kalıp saklanmasıyla',
      'Uzaydaki mesafelerin çok uzun olması nedeniyle sinyallerin yolda kaybolmasıyla'
    ],
    correct: 2,
    explanation: 'Ormandaki diğer avcılardan korunmak için ateş yakmamak (sessiz kalmak); evrendeki sessizliğin korkuya dayalı bilinçli bir hayatta kalma (gizlenme) stratejisi olduğunu anlatır.'
  },
  {
    title: 'Mona Lisa\'nın Şöhreti',
    passage: 'Leonardo da Vinci\'nin "Mona Lisa" tablosu günümüzde Louvre Müzesi\'nde kurşungeçirmez camların ardında dünyanın en ünlü eseri olarak korunmaktadır. Oysa 1911 yılına kadar müzenin sıradan bir duvarında asılı duran, çok az kişinin umursadığı küçük bir portreydi. O yıl, Vincenzo Peruggia adlı bir hırsız tabloyu çaldı. Günlerce gazetelerde kayıp tablonun fotoğrafları basıldı, müzenin önünde izdihamlar yaşandı; insanlar eserin kendisini değil, "duvardaki boşluğunu" izlemek için sıraya girdiler. İki yıl sonra tablo bulunduğunda artık küresel bir fenomene dönüşmüştü. Mona Lisa\'nın efsanesi, da Vinci\'nin fırça darbelerinden çok, o çalınma hikâyesinin medyada yarattığı devasa gizem ve "ulaşılamazlık" algısına borçludur.',
    questionStem: 'Mona Lisa tablosunun günümüzdeki şöhretinin asıl kaynağı parçada nasıl açıklanmıştır?',
    options: [
      'Leonardo da Vinci\'nin kullandığı eşsiz "sfumato" tekniğinin sanat eleştirmenlerince sonradan fark edilmesi',
      'Eserin sanatsal veya estetik üstünlüğünden ziyade, çalınmasıyla birlikte medyanın yarattığı gizem ve ulaşılamazlık algısının (psikolojik merakın) onu bir fenomene dönüştürmesi',
      'Fransız hükümetinin tabloyu çalındıktan sonra dünya turuna çıkarması',
      'Portredeki kadının gülüşündeki sırrın bilim insanları tarafından kanıtlanması'
    ],
    correct: 1,
    explanation: 'Çalınana kadar umursanmayan tablonun, çalındıktan sonra medyadaki haberler ve "duvardaki boşluğu" sayesinde fenomene dönüşmesi, şöhretin medya ve gizem algısına dayandığını gösterir.'
  },
  {
    title: 'Svalbard: Kıyamet Kasası',
    passage: 'Kuzey Kutbu\'na çok yakın buzullarla kaplı ıssız bir Norveç adasında, dağın derinliklerine oyulmuş "Svalbard Küresel Tohum Deposu" bulunur. Bu depo bir nükleer savaşa, asteroit çarpmasına veya küresel bir iklim felaketine karşı dayanıklı inşa edilmiştir. Amacı altını, parayı veya sanat eserlerini korumak değil; dünyadaki tüm bitki ve tarım ürünlerinin tohumlarını dondurarak muhafaza etmektir. Kıyamet günü geldiğinde insanlığı yeniden başlatacak olan şey ne bilgisayarlar ne de silahlardır; sadece cebinize sığacak kadar küçük olan bir avuç buğday ve mısır tohumudur. Svalbard, modern insanın teknolojik kibrine rağmen, hayatta kalmak için hala o ilkel toprağa ve tohumun mucizesine ne kadar muhtaç olduğunun dondurucu bir itirafıdır.',
    questionStem: 'Svalbard Küresel Tohum Deposu\'nun inşası, insanlık ve teknoloji hakkında hangi felsefi (ironik) gerçeği göz önüne sermektedir?',
    options: [
      'İskandinav ülkelerinin küresel ısınmadan en az etkilenecek coğrafya olması',
      'Ne kadar ileri teknolojiye ve silahlara sahip olursak olalım, insanlığın varoluşunu sürdürmesinin (kıyamet sonrasının) eninde sonunda ilkel bir tohuma ve doğaya (toprağa) muhtaç olduğu gerçeği',
      'Modern bilimin bitkilerin genetiğini değiştirerek onları ölümsüzleştirmeyi başarması',
      'Savaşlardan kaçan insanların sığınmak için yeraltı şehirleri inşa etme zorunluluğu'
    ],
    correct: 1,
    explanation: 'Kıyamet gününde insanlığı silahların veya teknolojinin değil, sadece bir tohumun kurtaracak olması; teknolojik kibre rağmen doğaya olan o ilkel ve vazgeçilmez muhtaçlığımızı (ironiyi) vurgular.'
  },
  {
    title: 'Dr. Jekyll ve Mr. Hyde',
    passage: 'Robert Louis Stevenson\'ın ölümsüz eseri "Dr. Jekyll ve Mr. Hyde", sadece bir korku romanı değil, insan ruhunun derinliklerindeki o ürkütücü ikiliğin (şizofreninin) manifestosudur. Saygın, ahlaklı ve yardımsever Doktor Jekyll, içindeki karanlık ve vahşi dürtüleri bastırmak yerine, ürettiği bir iksirle onlara fiziksel bir beden (Mr. Hyde) verir. Başlangıçta bu kötücül alter egosunu kontrol edebileceğini sanır, ancak Hyde güçlenir ve yavaş yavaş asıl bedeni ele geçirir. Bu hikâye, medeniyetin ve ahlakın insan doğasına giydirdiği o incecik takım elbisenin altında her zaman vahşi ve dizginlenemez bir ilkel canavarın pusuya yattığını; onunla oynayanın eninde sonunda ona dönüşeceğini fısıldar.',
    questionStem: 'Dr. Jekyll ve Mr. Hyde romanının insan doğasına dair sunduğu temel psikolojik eleştiri nedir?',
    options: [
      'Tıbbi deneylerin ve kimyasal ilaçların insan beyninde kalıcı şizofreniye yol açtığı',
      'İnsanın sadece iyi veya sadece kötü olmadığı; uygar ve ahlaklı maskenin (bastırılmışlığın) altında, kontrol edilmediğinde kişiyi yutacak kadar güçlü ve ilkel bir karanlık (ikilik) barındırdığı',
      'Toplumdaki saygın insanların her zaman gizli suç örgütleriyle bağlantılı olduğu',
      'Fiziksel görünümün (çirkinliğin) toplumda her zaman kötülükle özdeşleştirilmesi'
    ],
    correct: 1,
    explanation: 'Saygın doktorun içindeki vahşi dürtülerin bedene kavuşup onu ele geçirmesi; uygar maskenin altındaki ilkel karanlığı (ikiliği) ve bastırılanın yıkıcılığını simgeler.'
  },
  {
    title: 'Medusa\'nın Gözyaşları',
    passage: 'Yunan mitolojisinde Medusa, yılan saçlı, bakışlarıyla insanı taşa çeviren korkunç bir canavar olarak bilinir ve kahraman Perseus tarafından başı kesilerek öldürülür. Ancak hikâyenin kökeni çok daha trajiktir. Medusa aslında Athena\'nın tapınağında güzelliğiyle herkesi büyüleyen masum bir rahibedir. Deniz tanrısı Poseidon ona tapınakta zorla sahip olur. Ancak tanrıça Athena, kendi tapınağını kirlettiği için suçlu olan Poseidon\'u cezalandıramaz; öfkesini kurbanın (masum Medusa\'nın) kendisinden çıkarır ve onu o çirkin canavara dönüştürür. Medusa\'nın efsanesi, bir canavar masalı değil; gücün (otoritenin) kendi suçlarını örtbas etmek için asıl kurbanı nasıl şeytanlaştırdığının ve onu bir canavara dönüştürdüğünün binlerce yıllık adaletsiz feryadıdır.',
    questionStem: 'Yazar, Medusa efsanesinin kökenini inceleyerek mitoloji ve güç ilişkisi üzerine nasıl bir sonuca varmaktadır?',
    options: [
      'Antik dönemde kadınların denizcilikle ilgilenmesinin kesinlikle yasaklandığına',
      'Otoritenin (tanrıların), asıl suçluyu cezalandırmak yerine haksızlığa uğrayan mağduru (kurbanı) şeytanlaştırıp suçlayarak kendi düzenini koruduğu adaletsizliğine',
      'Fiziksel güzelliğin her zaman kibir ve felaket getirdiğine',
      'Mitolojik kahramanların (Perseus) sadece çirkin yaratıklarla savaştığına'
    ],
    correct: 1,
    explanation: 'Poseidon yerine masum Medusa\'nın (kurbanın) canavara dönüştürülüp cezalandırılması; gücün/otoritenin kendi suçunu örtmek için kurbanı suçlayıp şeytanlaştırdığını anlatır.'
  },
  {
    title: 'Zeno\'nun Paradoksu: Aşil ve Kaplumbağa',
    passage: 'Antik Yunan filozofu Zeno, hareketin ve zamanın sadece bir illüzyon olduğunu kanıtlamak için meşhur "Aşil ve Kaplumbağa" paradoksunu ortaya atar. Efsanevi hızlı koşucu Aşil, kendinden 100 metre ileride başlayan bir kaplumbağa ile yarışır. Zeno\'ya göre Aşil asla kaplumbağayı geçemez! Çünkü Aşil kaplumbağanın ilk başladığı 100. metreye geldiğinde, kaplumbağa az da olsa (diyelim 1 metre) ileri gitmiş olacaktır. Aşil o 1 metreyi koştuğunda, kaplumbağa yine minik bir adım atacaktır. Aradaki mesafe sonsuz kez bölünebileceği için Aşil teorik olarak rakibini asla yakalayamaz. Günlük hayatta Aşil onu saniyeler içinde geçse de, bu mantık bulmacası insan aklının; matematiğin o "sonsuz bölünebilirlik" kavramı karşısında nasıl kilitlenip aciz kaldığının kusursuz bir örneğidir.',
    questionStem: 'Zeno\'nun Aşil ve Kaplumbağa paradoksu, felsefi ve matematiksel olarak neyi sorgulamaktadır?',
    options: [
      'Hayvanların doğuştan gelen hayatta kalma (kaçış) reflekslerinin çok hızlı olduğunu',
      'Gündelik hayatta (fiziksel gerçeklikte) çok basit ve çözülebilir olan bir hareketin, teorik ve matematiksel (sonsuzluk) mantıkla analiz edildiğinde nasıl içinden çıkılmaz bir illüzyona (imkânsızlığa) dönüştüğünü',
      'Antik Yunan sporcularının antrenman eksikliklerini ve hatalarını',
      'Zamanın her insan için farklı hızlarda aktığını (göreceliliği)'
    ],
    correct: 1,
    explanation: 'Gerçekte Aşil\'in hemen geçmesine rağmen matematikte mesafenin sonsuz kez bölünmesiyle olayın imkânsızlaşması; fiziksel gerçekliğin teorik/matematiksel mantık karşısında nasıl kilitlendiğini (illüzyonu) gösterir.'
  },
  {
    title: 'İvan İlyiç\'in Ölümü (Tolstoy)',
    passage: 'Tolstoy\'un "İvan İlyiç\'in Ölümü" adlı başyapıtında, kahramanımız İvan sıradan, saygın ve tamamen toplumun ondan beklediği gibi bir hayat yaşayan yüksek rütbeli bir yargıçtır. Ancak bir gün ölümcül ve ağrılı bir hastalığa yakalanır. Ölüm döşeğinde kıvranırken asıl acı veren şey hastalığı değil, etrafındaki doktorların, eşinin ve arkadaşlarının ona "iyileşeceksin" diye yalan söyleyerek onun ölüm gerçeğini görmezden gelmeleridir. İvan o yatakta hayatının tamamen sahte, başkalarına yaranmak üzerine kurulmuş boş bir kurgu olduğunu fark eder. Tolstoy bize şu sert gerçeği vurur: Ölümün o buz gibi dürüstlüğü kapıyı çaldığında, toplumun bize giydirdiği tüm o "başarı ve statü" maskeleri erir; geriye sadece yaşanmamış, yalan bir hayatın dayanılmaz pişmanlığı kalır.',
    questionStem: 'Tolstoy\'un eseri üzerinden İvan İlyiç\'in ölüm döşeğindeki "asıl felsefi trajedisi" nedir?',
    options: [
      'Tıbbi imkânların yetersizliği nedeniyle çok fazla fiziksel acı çekmesi',
      'Ailesine bırakacak yeterli bir mirasının olmamasından duyduğu endişe',
      'Ölüm gerçeğiyle yüzleştiğinde, toplumun onayına (statüye) göre şekillendirdiği hayatının aslında tamamen sahte ve yaşanmamış (boş) bir yalan olduğunu fark etmesi',
      'İş yerindeki rakiplerinin onun hastalığına sevinmesi'
    ],
    correct: 2,
    explanation: 'İvan\'ın asıl acısının hastalık değil, "hayatının sahte ve başkalarına yaranmak üzerine kurulmuş olduğunu fark etmesi" olduğu vurgulanmıştır.'
  },
  {
    title: 'Veblen Etkisi (Gösterişçi Tüketim)',
    passage: 'Klasik ekonomi kurallarına göre bir ürünün fiyatı artarsa ona olan talep düşer. Ancak sosyolog Thorstein Veblen, lüks ürünlerde bu kuralın tam tersine çalıştığını kanıtladı. "Veblen Etkisi" olarak bilinen bu teoriye göre; lüks bir çantanın, spor arabanın veya saatin fiyatı ne kadar yüksekse, zenginler o ürünü o kadar çok satın almak ister. Çünkü o eşyanın asıl amacı işlevselliği değil, etraftaki insanlara "Ben bunu alabilecek kadar güçlüyüm" mesajını veren bir statü sembolü (gösteriş) olmasıdır. Modern insan, üşüdüğü için değil, diğerlerini kıskandırmak için ceket giyer hale gelmiştir. Tüketim, bir ihtiyaç giderme aracı olmaktan çıkmış; başkalarının gözündeki değerimizi satın aldığımız devasa ve kaba bir tiyatroya dönüşmüştür.',
    questionStem: 'Veblen Etkisi (Gösterişçi Tüketim) kavramı modern tüketicinin hangi psikolojik yönünü eleştirmektedir?',
    options: [
      'İnsanların ucuz ve kalitesiz ürünleri alarak ülke ekonomisine zarar vermesini',
      'Ürünlerin sadece temel fiziksel (işlevsel) ihtiyaçları karşılamak için değil, toplumdaki diğer insanlara üstünlük ve statü mesajı vermek (kibir ve gösteriş) amacıyla satın alınmasını',
      'Markaların reklam bütçelerini ürün kalitesinden daha yüksek tutmasını',
      'Temel gıda maddelerindeki fiyat artışlarının yoksullaşmayı hızlandırmasını'
    ],
    correct: 1,
    explanation: 'Ürünün fiyatı arttıkça daha çok alınması; eşyanın işlevinden ziyade başkalarına "güçlüyüm" mesajı (statü/gösteriş) vermek için alındığını kanıtlar.'
  },
  {
    title: 'Tantalos\'un İşkencesi',
    passage: 'Yunan mitolojisinde Tantalos, tanrılara kafa tuttuğu için Tartaros\'ta (yeraltı dünyasında) eşi benzeri görülmemiş bir cezaya çarptırılır. O, boynuna kadar berrak ve serin bir suyun içinde durmaktadır ve hemen başının üzerinde en lezzetli meyvelerle dolu ağaç dalları sarkmaktadır. Ancak Tantalos susuzluktan kavrulup su içmek için eğildiğinde sular çekilip kurur; açlıktan meyveye uzandığında ise rüzgâr dalları ulaşılamaz bir yüksekliğe savurur. Arzu ettiği şey tam gözünün önündedir ama ona asla dokunamaz. "Tantalos İşkencesi", modern insanın tüketim çağındaki doymak bilmezliğini simgeler: Her şeye sahip olma arzusuyla yanıp tutuşan zihnimiz, hedefe tam ulaştığını sandığı an haz uzaklaşır ve bizler tatmin edilemez bir eksiklik (açlık) hissiyle sonsuz bir döngüde kıvranırız.',
    questionStem: 'Tantalos\'un İşkencesi miti, modern insanın hangi psikolojik çıkmazını alegorik olarak anlatmaktadır?',
    options: [
      'Su ve gıda kaynaklarının küresel ısınmayla birlikte tükenme noktasına gelmesini',
      'İnsan doğasındaki doymak bilmez (tatmin edilemez) arzu döngüsünü; hedeflenen şeye ulaşıldığı sanıldığı an, hazzın uzaklaşıp yerini ebedi bir açlığa (eksikliğe) bırakmasını',
      'Tanrılara karşı gelmenin ve kibrin (hibris) fiziksel hastalıklarla cezalandırılmasını',
      'Tarım yapmayı bilmeyen toplumların açlıkla terbiye edilmesini'
    ],
    correct: 1,
    explanation: 'Suya ve meyveye uzandıkça onların kaçması; modern insanın doymak bilmezliğini, ulaşıldı sanılan hedefin/hazzın hep uzaklaşmasını ve ebedi eksiklik/açlık hissini sembolize eder.'
  },
  {
    title: 'Russell\'ın Çaydanlığı',
    passage: 'Filozof Bertrand Russell, kanıtlanamayan iddiaların tehlikesini anlatmak için absürt bir zihinsel deney kurguladı: "Eğer ben Dünya ile Mars arasında, güneşin etrafında eliptik bir yörüngede dönen porselen bir çaydanlık olduğunu iddia edersem ve bu çaydanlığın teleskoplarla görülemeyecek kadar küçük olduğunu söylersem, kimse benim yanıldığımı ispatlayamaz." Ancak bu durum, uzayda uçan bir çaydanlık olduğu fikrini rasyonel ve saygıdeğer kılmaz. Russell\'ın Çaydanlığı, bilimde ve felsefede "ispat yükü"nün kimde olduğunu gösteren keskin bir kılıçtır: İnanılması imkânsız (absürt) bir iddiayı ortaya atan kişi, karşı tarafın o iddiayı "çürütememesine" sığınarak haklı çıkamaz. İddia sahibinin, o çaydanlığın (veya inancın) orada olduğunu kanıtlaması gerekir.',
    questionStem: 'Russell\'ın Çaydanlığı argümanının temel felsefi mesajı aşağıdakilerden hangisidir?',
    options: [
      'Güneş sistemindeki gezegenlerin yörüngelerinde çok sayıda uzay çöpü bulunduğu',
      'Teleskop teknolojisinin gelişmesinin felsefi tartışmaları tamamen bitireceği',
      'Mantık ve bilimde bir iddiayı kanıtlama sorumluluğunun (ispat yükünün) iddiayı ortaya atana ait olduğu; bir şeyin yokluğunun (çürütülememesinin) onun varlığına kanıt sayılamayacağı',
      'Astronomi biliminin sıradan nesnelerle (çaydanlık gibi) açıklanmasının bilime saygısızlık olduğu'
    ],
    correct: 2,
    explanation: 'Küçücük bir çaydanlığın var olduğunu iddia edip "hadi olmadığını kanıtla" demenin absürtlük olduğu; ispat yükünün iddiayı atana ait olduğunu ve çürütülememenin kanıt olmadığını açıklar.'
  },
  {
    title: 'Ada Lovelace ve Şiirsel Bilim',
    passage: '19. yüzyılın ortalarında, devasa dişliler ve çarklarla çalışan ilk mekanik bilgisayar olan "Analitik Makine" tasarlandığında, mucidi Charles Babbage bile bu aletin sadece gelişmiş bir hesap makinesi olduğunu sanıyordu. Ancak ünlü şair Lord Byron\'ın kızı olan matematikçi Ada Lovelace, bu metal yığınına baktığında sadece rakamları değil, olasılıkları gördü. O, makinenin doğru kodlandığında harfleri, müzik notalarını ve algoritmaları da işleyebileceğini yazdı (tarihin ilk bilgisayar programcısı oldu). Babasından miras aldığı hayal gücünü (şiiri) matematiksel mantıkla birleştiren Ada, "Şiirsel Bilim" adını verdiği vizyonuyla, soğuk metallerin bir gün sanat üretebileceğini modern bilgisayarlardan tam bir asır önce öngörmüştü. İnovasyon, aklın ve hayal gücünün sınırları reddeden o eşsiz evliliğinden doğar.',
    questionStem: 'Ada Lovelace\'i tarihin ilk bilgisayar programcısı ve vizyoneri yapan asıl yeteneği parçada nasıl vurgulanmıştır?',
    options: [
      'Babasının bıraktığı büyük servet sayesinde dönemin en iyi üniversitelerinde eğitim görmesi',
      'Sadece matematiksel ve analitik mantıkla değil, şiirsel (sanatsal) hayal gücünü kullanarak makinenin sadece rakamları değil, müziği ve dili de işleyebilecek potansiyelini öngörebilmesi',
      'Charles Babbage\'ın eksik bıraktığı makineyi bizzat atölyede kendi elleriyle inşa etmesi',
      'İngiliz kraliyet ailesini bu makinenin üretimi için ikna eden üstün diplomatik becerisi'
    ],
    correct: 1,
    explanation: 'Sadece rakamları görenlerin aksine, "şiirsel bilim" ve hayal gücüyle makinenin notaları ve algoritmaları işleyebileceğini öngörmesi onu tarihin ilk programcısı/vizyoneri yapmıştır.'
  },
  {
    title: 'Derinkuyu Yeraltı Şehri',
    passage: 'Kapadokya\'nın altında, tesadüfen bir evin bodrum duvarının yıkılmasıyla keşfedilen Derinkuyu, 85 metre derinliğe inen ve aynı anda 20 bin kişinin yaşayabileceği devasa bir yeraltı şehridir. Havalandırma bacaları, şaraphaneleri, okulları ve hayvan ahırlarıyla kusursuz bir mimariye sahiptir. Antik çağlarda insanların o devasa kayaları sadece el aletleriyle oyup güneşsiz karanlığa sığınmalarının tek bir nedeni vardı: İstila ve ölüm korkusu. Derinkuyu bir mimari şaheser olmaktan ziyade, insanoğlunun dışarıdaki vahşi dünyadan (ve düşmandan) kaçmak için gökyüzünü ve güneşi bile feda ederek toprağın rahmine saklandığı o devasa, klostrofobik korkunun ve hayatta kalma iradesinin taştan anıtıdır.',
    questionStem: 'Yazar, Derinkuyu yeraltı şehrinin inşasını hangi temel insani güdüyle açıklamaktadır?',
    options: [
      'Yer altı sularına daha kolay ulaşarak tarımsal üretimi artırma çabası',
      'Kışın dondurucu soğuklardan korunmak için alternatif bir yaşam alanı arayışı',
      'Mimari yetenekleri test edip gelecek nesillere gösterişli eserler bırakma isteği',
      'İstila ve ölüm korkusu karşısında, güneşi ve gökyüzünü bile feda etmeyi göze alacak kadar güçlü olan hayatta kalma (korunma) içgüdüsü'
    ],
    correct: 3,
    explanation: 'İnsanların güneşsiz karanlığa sığınmasının tek nedeninin "istila ve ölüm korkusu" olduğu, hayatta kalma iradesiyle güneşi feda ettikleri vurgulanmıştır.'
  },
  {
    title: 'Macbeth\'in Kehaneti',
    passage: 'Shakespeare\'in ölümsüz tragedyası Macbeth\'te, başarılı bir komutan olan Macbeth, üç cadıyla karşılaşır. Cadılar ona "Bir gün Kral olacaksın" kehanetinde bulunurlar. Bu sözü duyan Macbeth\'in içindeki o gizli ve karanlık hırs uyanır. Oysa cadılar ona kral olması için cinayet işlemesini söylememiştir; ancak kehanetin gerçekleşmesini hızlandırmak isteyen Macbeth, mevcut kralı uykusunda hançerler, arkadaşlarını öldürür ve bir kan gölüne batarak paranoyak bir tiran haline gelir. Sonunda kendi halkı tarafından yok edilir. Macbeth\'in çöküşü, kehanetlerin (geleceğin) değiştirilemez bir kader olmadığını; asıl felaketin, insanın o duyduğu kehanete körü körüne inanarak (ve hırsına yenilerek) o felaketi kendi elleriyle inşa etmesi (Kendini Gerçekleştiren Kehanet) olduğunu gösterir.',
    questionStem: 'Macbeth\'in tragedyası, "gelecek ve insan iradesi" arasındaki ilişki üzerine nasıl bir mesaj vermektedir?',
    options: [
      'Cadıların ve doğaüstü varlıkların insan aklını her zaman kontrol edebildiğini',
      'İnsanların güç elde ettiğinde çevrelerindekilere karşı daha merhametli davrandığını',
      'Kehanetin (kaderin) sihirli bir güçten ziyade, insanın kendi içindeki hırsı tetikleyerek kişinin o sonu kendi elleriyle ve iradesiyle hazırlamasına (kendini gerçekleştiren kehanet) neden olduğunu',
      'Kralların her zaman en yakın komutanları tarafından ihanete uğradığını'
    ],
    correct: 2,
    explanation: 'Cadılar sadece kral olacağını söylemiş, ancak Macbeth hırsına yenilip cinayet işleyerek o kehaneti kendi elleriyle (kendini gerçekleştiren kehanet olarak) inşa etmiştir.'
  },
  {
    title: 'Louis Pasteur ve Kuduz Aşısı',
    passage: '1885 yılında Fransız kimyager Louis Pasteur, geliştirdiği ve henüz hayvanlar dışında hiç test etmediği kuduz aşısını büyük bir ahlaki ikilem karşısında denemek zorunda kaldı. Kuduz bir köpek tarafından 14 yerinden ısırılan 9 yaşındaki Joseph Meister ona getirildiğinde çocuk kesin olarak ölecekti. Pasteur bir doktor olmadığı için çocuğa müdahale etmesi yasadışıydı; aşı işe yaramazsa veya çocuğu öldürürse katil ilan edilebilirdi. Ancak risk aldı ve o deneysel aşıyı haftalarca çocuğa enjekte etti. Çocuk tamamen iyileşti. Pasteur\'ün bu cesareti, bilimin sadece laboratuvar masalarındaki güvenli formüllerden ibaret olmadığını; asıl ilerlemenin, inisiyatif alıp kariyerini (ve ahlaki yargılanmayı) riske atarak insan hayatı uğruna karanlığa adım atan cesur dehalar sayesinde yaşandığını kanıtlar.',
    questionStem: 'Pasteur\'ün kuduz aşısını 9 yaşındaki çocuğa uygulaması olayındaki asıl "ahlaki ve mesleki" kırılma (cesaret) noktası nedir?',
    options: [
      'Kuduz hastalığının o dönemde Avrupa\'da en yaygın ölüm sebebi olması',
      'Doktor olmadığı için yasal olarak suç işleme (katil ilan edilme) riskini göze alarak, kesin ölümcül bir vaka karşısında inisiyatif ve sorumluluk üstlenmesi',
      'Aşının formülünü diğer doktorlardan gizleyerek patentini tek başına almak istemesi',
      'Hayvanlar üzerinde yaptığı deneylerin tamamen başarısız olmasına rağmen insanlarda denemesi'
    ],
    correct: 1,
    explanation: 'Doktor olmadığı için yasadışı bir işlem yapıp katil ilan edilme riskini (kariyer/ahlaki yargılanma) göze alarak inisiyatif alması, asıl mesleki cesaret (kırılma) noktasıdır.'
  },
  {
    title: 'Kognitif Rahatlık (Cognitive Fluency)',
    passage: 'Bir iddia kulağa kafiyeli, basit veya görsel olarak kalın (bold) harflerle yazılmışsa beynimiz ona daha çabuk inanır. Psikolojide buna "Kognitif Rahatlık" (Bilişsel Akıcılık) denir. Beyin, enerji harcamaktan nefret eden tembel bir organdır. Karmaşık, uzun cümlelerle anlatılan bilimsel bir gerçektense; basit, ritmik ve kolay sindirilen bir yalana anında inanmayı (onu "doğru" kabul etmeyi) tercih eder. "İşleyen demir ışıldar" gibi atasözlerinin tartışılmaz doğrular gibi kabul edilmesinin sırrı anlamında değil, beynin bu akıcılığa duyduğu zaafta yatar. Sosyal medyada dolaşan dezenformasyonun (sahte haberlerin) bu kadar hızlı yayılmasının asıl nedeni insanların aptal olması değil, beynimizin "kolay olanı doğru sanma" gibi ölümcül ve tembel bir algı hatasına sahip olmasıdır.',
    questionStem: 'Kognitif Rahatlık (Bilişsel Akıcılık) kavramına göre yalan (sahte) haberlerin hızla kabul görmesinin nedeni nedir?',
    options: [
      'İnsanların bilimsel makalelere ulaşacak yeterli teknolojik altyapıya sahip olmaması',
      'İnsan beyninin enerjisini korumak (tembellik) amacıyla; karmaşık ve zor anlaşılan gerçekler yerine, basit, kafiyeli ve akıcı (sindirmesi kolay) ifadeleri otomatik olarak "doğru" kabul etme zaafı',
      'Sosyal medya şirketlerinin kasıtlı olarak doğru haberleri gizleyen algoritmalar kullanması',
      'Görsel olarak kalın (bold) harflerle yazılan metinlerin göz retinasını daha fazla uyarması'
    ],
    correct: 1,
    explanation: 'Beynin tembel bir organ olup enerji harcamamak için basit, ritmik ve kolay anlaşılan iddiaları (kognitif rahatlık) otomatik olarak "doğru" sanması yanılgısını açıklar.'
  },
  {
    title: 'Antroposen Çağı: İnsanın Kayası',
    passage: 'Dünya milyarlarca yıllık tarihinde Buzul Çağı, Jura Dönemi gibi jeolojik ve doğal değişimlere şahit oldu. Ancak bilim insanları artık yeni bir jeolojik çağa girdiğimizi savunuyor: "Antroposen" (İnsan Çağı). Çünkü milyonlarca yıl sonra gelecekteki arkeologlar (veya uzaylılar) dünyamızın tortul tabakalarını kazdıklarında dinozor fosilleri değil; radyasyon izleri, mikroplastikler, devasa alüminyum kutu dağları ve betona gömülü tavuk kemikleri bulacaklar. İnsanoğlu sadece şehirler inşa eden biyolojik bir tür olmaktan çıkmış; iklimi, okyanusları ve yerkabuğunu (tıpkı bir göktaşı veya volkan gibi) kökünden ve kalıcı olarak değiştiren tektonik (jeolojik) bir yıkım gücüne dönüşmüştür.',
    questionStem: 'Yazar, yaşadığımız çağı "Antroposen (İnsan Çağı)" olarak tanımlarken asıl olarak neyi vurgulamaktadır?',
    options: [
      'İnsanoğlunun mimari yapılar inşa etme konusunda geçmiş medeniyetlerden daha zayıf olduğunu',
      'Doğal afetlerin günümüzde geçmiş yüzyıllara oranla çok daha sık yaşanmasını',
      'İnsanın sadece çevreyi kirleten bir varlık değil, yerkürenin jeolojik yapısını (tortul tabakalarını, iklimini) kalıcı olarak değiştiren devasa ve yıkıcı bir doğa gücü (meteor gibi) haline geldiğini',
      'Plastik kullanımının gelecekteki enerji krizlerine çözüm olabileceğini'
    ],
    correct: 2,
    explanation: 'İnsanın sadece biyolojik bir tür değil; iklimi, okyanusları ve tortul tabakaları (plastik/radyasyonla) kalıcı olarak değiştiren "jeolojik ve tektonik bir yıkım gücü"ne dönüştüğü vurgulanmıştır.'
  },
  {
    title: 'Küçük Prens ve Sayıların Hükmü',
    passage: 'Antoine de Saint-Exupéry\'nin "Küçük Prens" kitabında şöyle bir bölüm geçer: "Büyüklere yeni bir arkadaşınızdan bahsettiğinizde, size hiçbir zaman onun ses tonunun nasıl olduğunu, hangi oyunları sevdiğini veya kelebek koleksiyonu olup olmadığını sormazlar. Onun yerine \'Kaç yaşında? Kaç kardeşi var? Babası ne kadar kazanıyor?\' diye sorarlar. Ancak bu sayıları öğrendiklerinde onu tanıdıklarını sanırlar." Exupéry\'nin bu naif ama sarsıcı gözlemi, yetişkinlerin (modern toplumun) dünyayı algılama biçimindeki o ruhsuz mekanikleşmeyi eleştirir. Büyümek dediğimiz şey bilgeliğe ulaşmak değil; bir şeyin özünü (ruhunu ve duygusunu) görme yeteneğini kaybedip, hayatı sadece ölçülebilen sayılara, banknotlara ve istatistiklere indirgeyen o sığ ve yozlaşmış körlüğe teslim olmaktır.',
    questionStem: 'Küçük Prens\'teki bu alıntı üzerinden "yetişkin (modern) topluma" yöneltilen asıl eleştiri nedir?',
    options: [
      'Yetişkinlerin çocuklarla oyun oynamak yerine sürekli çalıştıkları için onlara yeterince vakit ayıramaması',
      'Büyüme (yetişkinleşme) sürecinde insanların empati ve hayal gücünü (özü görme yetisini) yitirerek, hayatı ve insanları sadece rakamlar, statüler ve maddi istatistikler üzerinden değerlendiren sığ bir körlüğe düşmesi',
      'Matematik eğitiminin çocuk yaşlarda verilmesinin yaratıcılığı öldürmesi',
      'Arkadaşlık ilişkilerinde yaş ve kardeş sayısı gibi faktörlerin aslında çok önemli olması'
    ],
    correct: 1,
    explanation: 'Yetişkinlerin sevilen oyunlar yerine yaşı ve maaşı (sayıları) sorması; büyüdükçe ruhun/özün kaybedilip hayatın sadece rakamlara/statüye indirgendiği o sığ körlüğü eleştirir.'
  },
  {
    title: 'Karbon-14 Tarihlemesi: Zamanın Saati',
    passage: 'Bir arkeolog çöldeki bir kemik parçasına veya bir mağara duvarındaki kömür izine bakıp onun "3200 yıl önceye ait" olduğunu nasıl bu kadar kesin söyleyebilir? Bunun sırrı "Karbon-14" atomunda gizlidir. Atmosferde oluşan bu radyoaktif atom, nefes alan her canlı bitki ve hayvana geçer. Ancak canlı öldüğü an (nefes almayı kestiğinde) yeni karbon alımı durur ve içindeki Karbon-14 atomları bir saat gibi tıkır tıkır, sabit bir hızla (yarılanma ömrüyle) eksilmeye başlar. Ölü bir kemikteki karbon miktarına bakmak, o canlının "kum saatinin" ne kadar aktığını görmektir. Karbon-14 yöntemi; ölümün bıraktığı o donuk kalıntıların aslında tamamen sessiz olmadığını, içlerinde zamanı milim milim geriye sayan gizli ve atomik bir kronometre taşıdıklarını gösteren muazzam bir bilimsel zaferdir.',
    questionStem: 'Karbon-14 yönteminin çalışma mantığını özetleyen ana fikir parçada nasıl ifade edilmiştir?',
    options: [
      'Toprak altında kalan kemiklerin diğer minerallerle birleşerek taşlaşması',
      'Canlılar yaşadığı sürece radyoaktif maddelerin onlara hiçbir zarar vermemesi',
      'Ölüm anında dışarıdan karbon alımının durmasıyla, bedende kalan Karbon-14 atomlarının sabit bir hızla eksilmesinin (yarılanmasının) geçmişe dönük atomik bir zaman ölçer (kum saati) işlevi görmesi',
      'Mağara duvarlarındaki resimlerin yapımında kullanılan boyaların yaşlandıkça renk değiştirmesi'
    ],
    correct: 2,
    explanation: 'Ölüm anında karbon alımının durup, içerideki Karbon-14\'ün sabit hızla eksilmesi; bu eksilme miktarının canlının ölüm zamanını ölçen bir kum saati (kronometre) işlevi gördüğünü açıklar.'
  },
  {
    title: 'Bermuda Şeytan Üçgeni İllüzyonu',
    passage: 'On yıllar boyunca kitaplara, filmlere ve efsanelere konu olan Bermuda Şeytan Üçgeni\'nde uçakların uzaylılar tarafından kaçırıldığı, gemilerin boyutlar arası portallara yutulduğu iddia edildi. Oysa modern havacılık ve sigorta (Lloyd\'s) şirketlerinin istatistik verileri incelendiğinde şok edici bir gerçek ortaya çıktı: Bermuda üçgenindeki kaza oranı, okyanusun diğer yoğun trafikli bölgelerinden (örneğin İngiliz Kanalı\'ndan) bir milim bile fazla değildi! Ancak medya, bu bölgedeki sıradan bir fırtına kazasını "gizemli bir kayboluş" manşetiyle sunarak algıyı yönetti. Bermuda efsanesi, tehlikeli suların değil; medyanın abartmasının, algıda seçiciliğin ve insanın sıkıcı istatistiklere bakmaktansa fantastik canavar masallarına (komplolara) inanmayı tercih etmesinin ürettiği küresel bir illüzyondur.',
    questionStem: 'Bermuda Şeytan Üçgeni efsanesinin oluşumundaki asıl neden parçada neye bağlanmıştır?',
    options: [
      'Bölgedeki okyanus akıntılarının diğer denizlerden çok daha tehlikeli ve girdaplı olmasına',
      'İstatistiksel olarak bölgedeki kaza oranlarının diğer bölgelerle aynı olmasına (sıradanlığına) rağmen; medyanın olayları abartması ve insanların gizem/komplo teorilerine inanma zaafının yarattığı bir algı yanılsamasına',
      'Uçakların yön bulma sistemlerinin (pusulaların) sadece bu bölgede manyetik alana kapılıp bozulmasına',
      'Sigorta şirketlerinin o bölgedeki kazalara kasıtlı olarak daha yüksek tazminat ödemesine'
    ],
    correct: 1,
    explanation: 'İstatistiklerin kaza oranının normal olduğunu göstermesi, efsanenin asıl sebebinin; medyanın abartısı, algı yönetimi ve insanın fantastik yalanlara inanma zaafı olduğunu ortaya koyar.'
  }
];

export const felsefeParagrafSorulari14: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_14.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_14[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe14-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_15 = [
  {
    title: '52 Hertz Balinası: Kozmik Yalnızlık',
    passage: 'Okyanusun derinliklerinde, bilim insanlarının 1989\'dan beri takip ettiği bir balina yaşamaktadır. Ancak bu balina sürüsünden tamamen kopmuştur ve yapayalnızdır. Sebebi ise fiziksel bir engel değil, iletişimdeki trajik bir uyumsuzluktur. Normal balinalar 10 ila 39 hertz arasında ses çıkarıp haberleşirken, bu balina şarkılarını 52 hertz frekansında söylemektedir. Şarkısı o kadar incedir ki, devasa okyanusta ona cevap verebilecek, onu duyabilecek tek bir türdeşi bile yoktur. "Dünyanın en yalnız balinası" olarak bilinen bu canlı, kalabalıklar içinde çığlık çığlığa konuşup da kimse tarafından duyulmayan (anlaşılmayan) modern insanın o sağır edici ve trajik yalnızlığının en kusursuz felsefi karşılığıdır.',
    questionStem: '52 Hertz Balinası\'nın durumu, insan psikolojisindeki hangi çıkmazı sembolize etmektedir?',
    options: [
      'Toplumdan dışlanmamak için insanların kendi fikirlerinden (seslerinden) vazgeçmesini',
      'Fiziksel olarak kalabalıkların (türdeşlerin) içinde olunmasına rağmen, frekans uyumsuzluğu (anlaşılamamak) nedeniyle çekilen o derin ve aşılmaz yalnızlık hissini',
      'Deniz altı kirliliğinin canlıların iletişim yollarını tamamen bozmasını',
      'Farklı dilleri konuşan insanların birbirleriyle asla ortak bir kültür kuramayacağı gerçeğini'
    ],
    correct: 1,
    explanation: 'Balinanın sesinin (şarkısının) diğerleri tarafından duyulmaması nedeniyle yapayalnız kalması; insanın kalabalıklar içinde "anlaşılamama" yüzünden çektiği derin yalnızlığı sembolize eder.'
  },
  {
    title: 'Phalaris\'in Boğası: Kötülüğün İronisi',
    passage: 'Antik Yunan\'da Akragas tiranı Phalaris, düşmanlarına acı çektirmek için Perilaus adlı bir heykeltıraşa korkunç bir işkence aleti yaptırır. Bu alet, içi boş ve tamamen pirinçten yapılmış devasa bir boğa heykelidir. Kurban içine atılır, altından ateş yakılır ve kurbanın çığlıkları boğanın burnundaki özel borulardan geçerek korkunç bir "boğa böğürmesi" (müzik) gibi duyulur. İcat tamamlandığında Tiran Phalaris, aletin nasıl çalıştığını test etmek için içine ilk olarak mucidin ta kendisini, yani Perilaus\'u attırır ve onu diri diri kızartır. "Phalaris\'in Boğası", kötülüğü ve şiddeti kendi elleriyle (zekâsıyla) tasarlayanların, eninde sonunda kendi icat ettikleri cehennemin ilk kurbanı olacaklarını gösteren kusursuz bir tarihi adalettir.',
    questionStem: 'Phalaris\'in Boğası hikâyesindeki asıl "ironi (kaderin cilvesi)" nedir?',
    options: [
      'Boğanın içine atılan kurbanların çığlıklarının bir müzik aleti gibi duyulması',
      'Tiranın kendi gücünü kanıtlamak için sanatı ve heykeltıraşlığı kötüye kullanması',
      'Başkalarına en acımasız işkenceyi çektirmek için kusursuz bir kötülük aracı tasarlayan mucidin (heykeltıraşın), bizzat kendi tasarladığı şiddetin ilk kurbanı olması',
      'Pirinç madeninin ısıyı çok çabuk iletmesinin bir işkence yöntemine dönüşmesi'
    ],
    correct: 2,
    explanation: 'Kötülük aletini tasarlayan adamın o aletin içinde ilk öldürülen kişi olması, kötülüğü inşa edenin kendi icadına kurban gitmesi şeklindeki ironiyi oluşturur.'
  },
  {
    title: 'Ağaçların Gizli Ağı (Wood Wide Web)',
    passage: 'Doğanın sadece acımasız bir rekabet, güçlü ağacın güneş ışığını kaparak zayıfı öldürdüğü bencil bir orman olduğu sanılırdı. Ancak bilim insanları orman tabanının altında devasa bir "Mikoriza (Mantar) Ağı" keşfettiler. Ağaçlar bu mantar kökleri sayesinde tıpkı bir internet ağı gibi birbirine bağlıdır. Eğer ormanın bir köşesindeki genç bir fidan güneş alamıyor ve ölmek üzereyse, yaşlı (anne) ağaçlar bu yeraltı ağını kullanarak ona kendi besinlerini, karbonu ve suyu transfer ederler. Hastalanan bir ağaç, ölmeden önce tüm savunma enzimlerini diğer ağaçlara aktararak onları uyarır. Bu "Gizli Ağ", doğanın merkezinde vahşi bir bencilliğin değil; kusursuz bir dayanışmanın, fedakârlığın ve ortak yaşamın yattığını kanıtlayan devrimsel bir buluştur.',
    questionStem: 'Ağaçların "Mikoriza Ağı" üzerinden haberleşmesi, doğa kanunları hakkındaki hangi klasik algıyı yerle bir etmiştir?',
    options: [
      'Mantarların orman ekosistemi için zararlı ve parazit canlılar olduğu inancını',
      'Doğanın (evrimin) sadece güçlülerin ayakta kaldığı (zayıfın ezildiği) bencil ve acımasız bir rekabet arenası olduğu algısını yıkarak; temelinde fedakârlık ve kusursuz bir dayanışma olduğunu',
      'Ağaçların besinlerini sadece yaprakları aracılığıyla güneşten sentezlediği teorisini',
      'Genç fidanların yaşlı ağaçların gölgesinde asla büyüyemeyeceği algısını'
    ],
    correct: 1,
    explanation: 'Yaşlı ağaçların hastalanan veya güneş alamayan ağaçlara besin göndermesi; doğanın acımasız bir rekabet (zayıfın ezildiği bir yer) değil, bir dayanışma ve fedakârlık ağı olduğunu gösterir.'
  },
  {
    title: 'Hypatia\'nın Ölümü ve Aklın Düşüşü',
    passage: 'MS 415 yılında, İskenderiye Kütüphanesi\'nin son büyük bilimi insanı, filozof ve astronom Hypatia, sokak ortasında dogmatik ve fanatik bir çete tarafından paramparça edilerek öldürüldü. Suçu; felsefe yapmak, kadın olmasına rağmen erkeklere astronomi öğretmek ve sorgulamaktı. Gözü dönmüş kalabalık, onun bedenini midye kabuklarıyla derisini yüzerek yaktı. Hypatia\'nın o sokakta can verişi sadece bir cinayet değildir; antik çağın o aydınlık, hoşgörülü ve sorgulayıcı (klasik) zihninin, yerini Orta Çağ\'ın karanlık, tahammülsüz ve kanlı fanatizmine bıraktığı o ebedi çöküşün (akıl tutulmasının) miladıdır.',
    questionStem: 'Yazar, Hypatia\'nın öldürülmesini tarihsel süreçte neyin sembolü olarak değerlendirmektedir?',
    options: [
      'Kadınların antik çağlarda eğitim almasının yasalara aykırı olduğunun',
      'İskenderiye şehrinin siyasi başkent olma özelliğini tamamen yitirmesinin',
      'Bilimin, aklın ve hoşgörünün (aydınlanmanın); dogmatik, tahammülsüz ve vahşi bir fanatizm karşısında yenilerek Orta Çağ karanlığının başlamasının (aklın düşüşünün)',
      'Astronominin felsefeden ayrılarak bağımsız bir bilim dalı haline gelmesinin'
    ],
    correct: 2,
    explanation: 'Hypatia\'nın fanatikler tarafından öldürülmesi; aklın, felsefenin ve hoşgörünün Orta Çağ karanlığına (fanatizme) yenik düşmesinin miladı olarak sembolize edilmiştir.'
  },
  {
    title: 'Kuzey Sentinel Adası: İzolasyonun Kalesi',
    passage: 'Hindistan açıklarındaki Kuzey Sentinel Adası\'nda yaşayan yerli halk, 60 bin yıldır dış dünyayla hiçbir iletişim kurmamış, ateşi nasıl yakacaklarını bile bilmeyen bir kabiledir. Adalarına yaklaşan helikopterlere, balıkçılara ve hatta misyonerlere anında zehirli oklarla saldırıp onları öldürürler. Hindistan hükümeti bile adaya gitmeyi yasaklamıştır. Modern insan onları "ilkel ve vahşi" olarak görür. Oysa Sentinelliler, aslında modern dünyanın getireceği o ölümcül virüsleri, sömürüyü, asimilasyonu ve betonlaşmayı sezgisel olarak reddeden; kendi saflıklarını ve özgürlüklerini "uygarlığın o zehirli hediyelerine" karşı kanlarıyla koruyan, dünyadaki son onurlu ve sarsılmaz izolasyon kalesidir.',
    questionStem: 'Parçaya göre Sentinel kabilesinin dış dünyaya karşı gösterdiği vahşi ve saldırgan tutumun asıl (felsefi) sebebi nedir?',
    options: [
      'Adada bulunan değerli altın madenlerini dış güçlerden saklama çabası',
      'Sadece avcılık ve toplayıcılıkla geçindikleri için misafirperverlik duygularının gelişmemiş olması',
      'Modern dünyanın getireceği hastalık, sömürü ve kültürel yok oluşa karşı, kendi doğal saflıklarını (özgürlüklerini ve izolasyonlarını) koruma amaçlı bilinçli bir savunma kalkanı',
      'Uçan araçları (helikopterleri) kendi dini inançlarındaki şeytani figürler sanmaları'
    ],
    correct: 2,
    explanation: 'Dış dünyaya saldırmaları ilkellik değil; sömürüye, asimilasyona ve modern uygarlığın zehrine karşı kendi saflıklarını ve özgürlüklerini (izolasyonu) koruma çabası olarak yorumlanmıştır.'
  },
  {
    title: 'Kola Süper Derin Sondajı',
    passage: 'Soğuk Savaş döneminde Sovyetler Birliği ile Amerika sadece uzayda değil, yerin dibinde de yarışıyordu. 1970\'lerde Sovyet bilim insanları, Kola Yarımadası\'nda yerkabuğunu delerek dünyanın merkezine inmek için bir sondaj başlattılar. Tam 24 yıl boyunca kazdılar ve 12 kilometre derinliğe (insanlığın ulaştığı en derin nokta) indiler. Ancak sondajı durdurmak zorunda kaldılar; çünkü kayalar o derinlikte 180 derece sıcaklığa ulaşmış, matkap uçları plastiğe dönüp erimeye başlamıştı. İnsanoğlu galaksilerin milyarlarca ışık yılı ötesindeki kara delikleri fotoğraflayabilmiş, sınırları aşmıştır; ancak kendi üzerinde yaşadığı gezegenin derisinin birkaç kilometre altına inmeye kalktığında cehennem sıcağına çarpıp aciz kalmıştır. Ayaklarımızın altındaki dünya, başımızın üstündeki gökyüzünden daha büyük bir bilinmezdir.',
    questionStem: 'Kola Sondajı deneyimi, bilimsel araştırmalar bağlamında hangi ironik (şaşırtıcı) gerçeği göz önüne sermektedir?',
    options: [
      'Sovyet teknolojisinin madencilik alanında Amerika\'dan çok daha geride olduğunu',
      'İnsanoğlunun evrenin en uzak köşelerini keşfedecek teknolojiye sahipken, bizzat kendi ayaklarının altındaki gezegenin derinliklerine (sıcaklığa) nüfuz etmekte aciz ve çaresiz kalmasını',
      'Yeraltı kaynaklarının (petrolün) sanıldığından çok daha derinlerde bulunduğunu',
      'Matkap uçlarının uzay teknolojisine göre çok daha yavaş geliştiğini'
    ],
    correct: 1,
    explanation: 'Galaksileri fotoğraflarken yerin 12 km altına inince sıcaktan matkapların eriyip kazının durması; insanın uzak evrene hükmederken kendi gezegeninin derinlikleri karşısında aciz kalmasıdır (ironidir).'
  },
  {
    title: 'Tardigradlar (Su Ayıları) ve Ölümsüzlük',
    passage: 'Gözle zor görülen, sekiz bacaklı mikroskobik canlılar olan Tardigradlar (Su Ayıları), doğanın en büyük anomalisidir. Bir tardigradı alın; 150 derece kaynar suya atın, eksi 272 dereceyle (mutlak sıfır) dondurun, okyanusun en derin çukurundaki devasa basıncın içine sokun veya nükleer bir patlamanın ortasına bırakın. Hatta onları uzay boşluğuna atın. Hiçbirinde ölmezler. Vücutlarındaki suyu dışarı atarak "kriptobiyoz" adı verilen derin bir uykuya geçerler ve yıllar sonra bir damla suyla tekrar hayata dönerler. İnsanoğlu küçücük bir virüsle veya iklim değişikliğiyle yok olma paniği yaşarken; bu minicik su ayıları, dayanıklılığın boyutla değil, esneklikle (biyolojik uyumla) ölçüldüğünü göstererek bizim o devasa ve kırılgan kibrimizle alay ederler.',
    questionStem: 'Tardigradların olağanüstü dayanıklılığı, insanoğlunun varoluşuna dair hangi gerçeği (eleştiriyi) ortaya koyar?',
    options: [
      'Uzay araştırmalarında hayvan deneklerin kullanımının etik (ahlaki) sorunlar taşıdığını',
      'Tüm canlıların aslında aynı hücresel kökenden geldiğini',
      'İnsanoğlunun zekâsına ve devasa boyutuna duyduğu kibrin, en zorlu felaketlere bile (kriptobiyoz ile) esneyerek uyum sağlayan bu mikroskobik canlının dayanıklılığı (varoluşu) karşısında son derece kırılgan ve aciz kaldığını',
      'Aşırı soğuk ortamların hücre yenilenmesini durdurarak ölümsüzlük sağladığını'
    ],
    correct: 2,
    explanation: 'Tardigradın uzayda veya kaynar suda bile ölmemesi, boyut ve teknolojiyle övünen (kibirli) insanın kırılganlığıyla alay ettiğini ve dayanıklılığın esneklik/uyum olduğunu gösterir.'
  },
  {
    title: 'Uzay Kalemi (Space Pen) Efsanesi',
    passage: 'Yıllarca dilden dile dolaşan meşhur bir hikâye vardır: Uzay yarışında NASA, yerçekimsiz ortamda tükenmez kalemlerin yazmadığını fark eder. Çözüm bulmak için milyonlarca dolar harcayıp basınçla çalışan bir "Uzay Kalemi" icat ederler. Sovyet kozmonotlar ise çok daha zekice bir şey yaparlar: Sadece kurşunkalem kullanırlar! Bu hikâye o kadar popülerdir ki, bürokratik israfın ve Batı kibrinin sembolü haline gelmiştir. Ancak bu hikâye koca bir yalandır. Aslında kurşunkalemden kırılan grafit tozları havada süzülerek uzay aracının elektronik sistemlerine girip ölümcül kısa devrelere ve yangınlara yol açmaktadır. Yani Ruslar da daha sonra o pahalı tükenmez kalemden satın almışlardır. Bu efsane; insanların sıkıcı gerçeklere değil, basit, kıvrak ve otoriteyi (NASA\'yı) aptal gösteren "komik kurgulara" inanmaya her zaman daha teşne olduğunu ispatlar.',
    questionStem: 'Uzay Kalemi efsanesinin yıllarca popüler kalıp doğru sanılmasının asıl sosyolojik nedeni parçada neye bağlanmıştır?',
    options: [
      'Sovyetler Birliği\'nin medya ve propaganda konusunda çok başarılı olmasına',
      'Tükenmez kalem şirketlerinin bu hikâyeyi kendi reklamları için gizlice yaymasına',
      'İnsan zihninin, karmaşık/sıkıcı bilimsel gerçekler yerine; elit otoriteyi (NASA\'yı) beceriksiz ve aptal gösteren basit, kıvrak ve ironik kurgulara (yalanlara) inanmaya olan zaafına',
      'Kurşun kalemlerin gerçekten de uzay koşullarında tükenmez kalemden daha güvenli olmasına'
    ],
    correct: 2,
    explanation: 'Grafit tozunun ölümcül olması gerçeğinin (sıkıcı bilim) göz ardı edilip, NASA\'yı aptal gösteren o ironik ve basit kurguya inanmanın insan zihninin zaafı olduğu vurgulanmıştır.'
  },
  {
    title: 'Cotard Sendromu (Yürüyen Ceset Yanılgısı)',
    passage: 'Psikiyatride bilinen en ürkütücü ve felsefi hastalıklardan biri "Cotard Sendromu"dur. Bu nörolojik rahatsızlığa yakalanan hastalar, kesin bir inançla "ölü olduklarını", organlarının çürüdüğünü veya kanlarının kalmadığını savunurlar. Yemek yemeyi bırakırlar çünkü bir cesedin yemeğe ihtiyacı yoktur. Beynin duygu (amigdala) ve yüz tanıma (fusiform gyrus) bölümleri arasındaki bağ koptuğu için, kişi kendi yüzüne aynada baktığında hiçbir duygusal aidiyet hissetmez. Mantık onu hayatta olduğuna ikna edemez. Bu korkunç hastalık bize varoluşumuzun o kırılgan sınırını gösterir: "Yaşıyorum" demek sadece nefes almak veya kalbin atması değil; beynimizin bize yaşadığımıza dair anbean o duygusal hikâyeyi (illüzyonu) fısıldamasıdır. O fısıltı kesilirse, atan bir kalple bile yaşayan bir cesede dönüşürüz.',
    questionStem: 'Cotard Sendromu\'nun insan varoluşu hakkında öğrettiği asıl felsefi/biyolojik ders nedir?',
    options: [
      'Ölüm korkusunun bazı insanlarda yeme bozukluklarına (anoreksiya) yol açması',
      'Ayna karşısında geçirilen uzun saatlerin nörolojik hastalıklara davetiye çıkarması',
      'Hayatta olma (yaşama) hissinin sadece kalbin atmasıyla (fiziksel canlılıkla) ilgili olmadığı; bunun, beynin bize sürekli sunduğu "duygusal bağ ve aidiyet (illüzyon)" ağının bir ürünü olduğu',
      'Sinir sistemi hasarlarının eninde sonunda bütün iç organları çürüterek iflas ettirdiği'
    ],
    correct: 2,
    explanation: 'Kalp atmasına rağmen beynin duygu bağı koptuğu için kişinin kendini ölü sanması; "yaşıyorum" hissinin sadece biyoloji değil, beynin kurduğu bir duygusal aidiyet/hikâye olduğunu kanıtlar.'
  },
  {
    title: 'Mary Anning: Kayaların Gizli Annesi',
    passage: '19. yüzyılın başlarında, İngiltere sahillerinde fırtınalardan sonra kayaları kazan genç bir kadın, bilim dünyasını kökünden sarsacak bir şey buldu: Dünyanın ilk İhtiyozor (deniz dinozoru) fosili. Mary Anning adındaki bu yoksul kadın, tek bir üniversite eğitimi almamış olmasına rağmen, yıllarca uçurumlarda asılı kalarak Pterozor ve Plesiyozor iskeletlerini gün yüzüne çıkardı. Ancak o dönemki kibirli Londra Jeoloji Topluluğu, bir "kadının" ve bir "alt sınıf mensubunun" makale yayınlamasına izin vermedi. Onun bulduğu fosilleri satın alan erkek bilim insanları, o kemiklere kendi isimlerini verdiler ve şöhret oldular. Mary Anning, bilimin köklerinin sadece laboratuvarlarda değil, isimleri (cinsiyetleri yüzünden) tarihten kasıtlı olarak silinmiş o yoksul ve tutkulu insanların nasırlı ellerinde yattığını gösteren hüzünlü bir efsanedir.',
    questionStem: 'Mary Anning\'in hikâyesi, 19. yüzyıl bilim dünyasının hangi karanlık yönünü (zaafını) eleştirmektedir?',
    options: [
      'Fosil kazılarının gerekli güvenlik önlemleri alınmadan uçurumlarda yapılması',
      'Bilimsel keşiflerin sadece laboratuvar ortamında yapıldığı yalanını',
      'Bilimsel şöhretin ve akademik onay mekanizmasının; liyakate (gerçek emeğe) değil, cinsiyetçi kibre ve sınıfsal (elit) ayrımcılığa (eril tahakküme) dayanmasını',
      'Jeoloji biliminin astronomi bilimi kadar değer görmemesini'
    ],
    correct: 2,
    explanation: 'Fosilleri Mary\'nin bulmasına rağmen, cinsiyeti ve yoksulluğu yüzünden dışlanıp emeğinin elit erkekler tarafından çalınması, dönemin cinsiyetçi ve sınıfsal kibrini eleştirir.'
  },
  {
    title: 'Zombi Karıncalar (Ophiocordyceps)',
    passage: 'Yağmur ormanlarında yaşayan bir karınca, bir gün aniden sürüsünden ayrılır. Kendi isteği dışında ağaçların yüksek dallarına tırmanır, bir yaprağın damarına dişlerini kilitler ve orada felç geçirerek ölür. Sebebi intihar değil, beynini ele geçiren "Ophiocordyceps" adlı bir mantardır. Mantar, karıncanın zihnine kimyasal sinyaller göndererek onu bir kukla gibi yönetmiş; kendi sporlarını (tohumlarını) rüzgârla en uzak mesafeye yayabilmek için karıncayı yüksek bir noktaya çıkarıp orada öldürmüştür. Bu mikroskobik dehşet, "Özgür irade nedir?" sorusunu suratımıza çarpar. Bir canlının kendi bedeni üzerindeki kontrolünün, zihnine dışarıdan sızan ufacık bir kimyasal (veya bir fikir) tarafından nasıl saniyeler içinde gasp edilip sahibini ölüme götürebileceğini gösterir.',
    questionStem: 'Zombi Karınca ve Mantar (Cordyceps) ilişkisi, yazar tarafından hangi felsefi kavramı tartışmak için bir metafor olarak kullanılmıştır?',
    options: [
      'Yağmur ormanlarının giderek yok olmasının tehlikelerini',
      'İklim krizinin karınca sürüleri üzerindeki yön bulma etkisini',
      'Bir canlının "özgür irade" ve "beden kontrolü" dediği şeyin, dışarıdan sızan parazit bir gücün (kimyasalın/fikrin) kontrolüne girerek nasıl kolayca yok edilebileceğini (iradenin kırılganlığını)',
      'Mantarların orman ekosistemindeki en yararlı temizleyici (çürütücü) organizma olduğunu'
    ],
    correct: 2,
    explanation: 'Mantarın karıncanın zihnini ele geçirip onu intihara (yükseğe çıkıp ölmeye) sürüklemesi; özgür iradenin dışarıdan sızan bir güçle nasıl gasp edilebileceğinin metaforudur.'
  },
  {
    title: 'Stradivarius Kemanları ve Küçük Buz Çağı',
    passage: 'Antonio Stradivari\'nin 17. yüzyılda ürettiği o efsanevi kemanların sesi, bugün milyonlarca dolarlık teknolojilerle ve lazer analizleriyle bile hala kopyalanamamaktadır. Kimisi onun gizli bir vernik kullandığını, kimisi de tahtayı özel kimyasallara batırdığını iddia etti. Oysa gerçek sır, doğanın o dönemde dünyayı mahveden bir felaketinde saklıydı. Stradivari\'nin yaşadığı dönem, Avrupa\'da "Küçük Buz Çağı"nın en sert yıllarıydı. Bu dondurucu soğuklar yüzünden ağaçlar çok yavaş büyümüş, odunları eşi benzeri görülmemiş bir sıklığa ve yoğunluğa ulaşmıştı. O mucizevi akustik (ses), aydınlık ve sıcak günlerin değil, kemanı oluşturan o ağacın dondurucu soğukta ve acımasız kış şartlarında yıllarca verdiği hayatta kalma mücadelesinin sonucuydu. Kusursuzluk, konforun değil; felaketin dirence dönüşmesinin ürünüdür.',
    questionStem: 'Stradivarius kemanlarının eşsiz sesinin "Küçük Buz Çağı"na bağlanması, sanat ve kusursuzluk hakkında neyi sembolize etmektedir?',
    options: [
      'Müzik aleti yapımında gizli kimyasalların ve verniklerin kullanılmasının etik dışı olduğunu',
      'Mükemmelliğin (o eşsiz kalitenin), rahat ve sıcak koşullarda değil; ancak dondurucu bir felaketin (acı ve zorluğun) içinde verilen dirençli bir mücadeleyle ortaya çıkabileceğini',
      'Stradivari\'nin kemanlarını üretirken akustik hesaplamalarda çok başarısız olduğunu',
      'Küresel ısınma nedeniyle günümüzde bir daha asla müzik aleti üretilemeyeceğini'
    ],
    correct: 1,
    explanation: 'Ağacın dondurucu soğukta yavaş ve yoğun büyümesinin o eşsiz sesi vermesi; kusursuzluğun konfordan değil, felaket/zorluk içindeki dirençten doğduğunu sembolize eder.'
  },
  {
    title: 'Gladyatör Terinin Satılması',
    passage: 'Antik Roma\'da Kolezyum\'un arenasında savaşan gladyatörler, ölüm makinesi köleler olarak görülse de aslında dönemin "popstarlarıydı". Ancak işin asıl ilginç yanı arenadaki vahşet değil, tribünlerin ardında dönen iğrenç (ama tanıdık) bir sektördü. Arenadan sağ çıkan şampiyon gladyatörlerin derilerinden özel aletlerle (strigil) kazınan kir, kan ve ter karışımı sular küçük şişelere dolduruluyor; zengin Romalı kadınlara ve aristokratlara cilt bakımı (krem) veya aşk iksiri (afrodizyak) olarak fahiş fiyatlara satılıyordu! İnsanoğlunun ünlü olanın (şöhretin) her zerresini metalaştırma, acıyı ve teri bile bir "statü ve cazibe" aracı olarak ambalajlayıp satma (tüketim) histerisi, modern kapitalizmin icadı değil, binlerce yıllık değişmez bir insanlık virüsüdür.',
    questionStem: 'Gladyatör terinin zenginlere fahiş fiyatlara satılması olayı, yazar tarafından hangi modern kavrama benzetilerek eleştirilmektedir?',
    options: [
      'Kadınların antik çağlardan beri kozmetik ürünlere çok fazla para harcamasına',
      'Modern tıbbın ve ilaç endüstrisinin (eczacılığın) kökenlerinin aslında çok hijyenik olmadığına',
      'Şöhretin (popülerliğin) ve insan bedeninin/acısının bile bir statü nesnesi olarak pazarlanıp paraya çevrildiği o hastalıklı tüketim (metalaştırma) kültürüne',
      'Gladyatörlerin kazandıkları paraları bağışlayarak özgürlüklerini satın aldığına'
    ],
    correct: 2,
    explanation: 'Kan ve terin "popstar" algısıyla zenginlere güzellik iksiri olarak satılması; şöhretin ve acının metalaştırılarak pazarlanmasının (modern kapitalizmin/tüketimin) bin yıllık bir histeri olduğunu gösterir.'
  },
  {
    title: 'Kuru Hastalığı (Gülümseyen Ölüm)',
    passage: 'Papua Yeni Gine\'deki Fore kabilesinde 1950\'lerde korkunç ve gizemli bir hastalık baş gösterdi. "Kuru" (Titreme) adı verilen bu hastalıkta insanlar dengelerini kaybediyor ve en sonunda yüzlerinde korkunç, histerik bir gülümsemeyle (gülme krizleriyle) kasılarak ölüyorlardı. Bilim insanları uzun araştırmalar sonucu bu "Gülümseyen Ölüm"ün sebebini bulduklarında kanları dondu. Bu bir virüs veya genetik hastalık değildi; kabile üyeleri, ölen yakınlarına duydukları derin saygı ve yas ritüelinin bir parçası olarak onların beyinlerini yiyorlardı. Beyindeki bir "prion" (katlanmış protein) ölüden diriye geçerek bu dehşeti yaratıyordu. Kuru hastalığı, kültürel dogmaların (ve kutsal sayılan ritüellerin) biyolojik gerçeklikle (doğayla) çarpıştığında, iyi niyetin bile nasıl kendi kendini yok eden gülen bir intihara dönüşebileceğinin acı kanıtıdır.',
    questionStem: 'Fore kabilesinde görülen Kuru hastalığının sebebi dikkate alındığında, bu olaydan çıkarılabilecek sosyo-felsefi sonuç nedir?',
    options: [
      'Gülümsemenin ve kahkaha atmanın bazı toplumlarda üzüntüyü gizlemek için kullanılan bir maske olduğu',
      'Tropikal bölgelerdeki virüslerin soğuk iklimlere göre çok daha hızlı mutasyona uğradığı',
      'Geleneksel, iyi niyetli veya kutsal sayılan kültürel (dini) ritüellerin, doğanın katı biyolojik gerçekliğiyle uyuşmadığında (çarpıştığında) toplumu ölümcül bir yıkıma (intihara) sürükleyebileceği',
      'Yamyamlık yapan kabilelerin askerî açıdan diğer kabilelere her zaman üstünlük kurduğu'
    ],
    correct: 2,
    explanation: 'Ölüye saygı ritüeli (kutsal dogma) olarak beyin yemenin biyolojik olarak ölüm saçması; dogmaların doğa kanunlarıyla uyuşmadığında ölümcül/yıkıcı olduğunu kanıtlar.'
  },
  {
    title: 'Fantom Uzuv (Hayalet Ağrı)',
    passage: 'Bir savaş gazisinin veya kazazedenin kolu kesildikten (ampute edildikten) sonra yaşadığı şey, sadece uzvun eksikliği değildir. O olmayan kolda kaşıntı, uyuşma ve hatta çıldırtıcı bir acı (Fantom Ağrısı) hissedebilir. Kol fiziksel olarak yoktur, toprağa gömülmüştür; ancak beynin içindeki kortikal haritada (zihinde) kolun temsil edildiği nöronlar hala hayattadır ve o boşluktan çığlık çığlığa sinyaller göndermektedir. Hastalar olmayan ellerinin yumruk şeklinde sıkışıp kaldığını hissederek acıdan kıvranırlar. Fantom Uzuv sendromu bize gerçekliğin aslında nerede olduğunu fısıldar: Hissettiğimiz acılar, dokunuşlar ve hatta dünya; bedenimizin dışındaki fiziksel nesnelerde değil, tamamen kafatasımızın içindeki o karanlık odada (beynimizde) üretilen kusursuz bir simülasyondur.',
    questionStem: 'Fantom Uzuv (Hayalet Ağrı) sendromu, gerçeklik ve algı (bilinç) bağlamında hangi felsefi savı destekler niteliktedir?',
    options: [
      'Kesilen organların yerine takılan protezlerin sinir sistemiyle asla uyum sağlayamayacağını',
      'Hissettiğimiz acının veya varlığın (algının), dış dünyadaki fiziksel bedene değil; tamamen beynin kendi içinde oluşturduğu nörolojik bir haritaya (simülasyona/kurguya) dayandığını',
      'Amputasyon ameliyatlarında anestezi kullanımının o dönemlerde yetersiz olduğunu',
      'İnsanların kaybettikleri eşyalara veya kişilere karşı aşırı duygusal bağlılık geliştirdiğini'
    ],
    correct: 1,
    explanation: 'Olmayan kolda acı hissedilmesi; algıladığımız gerçekliğin ve acının dış dünyadaki bedende değil, beyindeki o nörolojik haritada (simülasyonda) üretildiğini kanıtlar.'
  },
  {
    title: 'Babil\'in Asma Bahçeleri: Aşkın Çölü',
    passage: 'Antik Dünyanın Yedi Harikası\'ndan biri olan Babil\'in Asma Bahçeleri, hikâyeye göre Kral Nebukadnezar tarafından, dağlık ve yeşil memleketini özleyip çölün ortasında depresyona giren eşi Amytis için yaptırılmıştır. Çatılardan şelaleler akan, egzotik ağaçlarla dolu bu devasa teraslı vaha, bir mühendislik mucizesidir. Ancak ilginç olan şudur: Arkeologlar Babil kalıntılarında böyle bir bahçeye ait tek bir iz, tek bir çivi bile bulamamışlardır! Diğer tüm harikaların kanıtı varken, o koca bahçe bir hayalet gibidir. Belki de Babil\'in Asma Bahçeleri hiçbir zaman var olmadı. O, tarihin en güzel yalanı, insanın sevdiği birini mutlu etmek (onun acısını dindirmek) uğruna çölün ortasında bile cenneti var edebileceğine (gerçekliği bükeceğine) dair uydurulmuş o görkemli ve romantik bir metafordur.',
    questionStem: 'Yazar, arkeolojik kanıtı bulunmayan Babil\'in Asma Bahçeleri\'ni felsefi (edebi) olarak nasıl yorumlamaktadır?',
    options: [
      'Antik Babil mimarisinin kullanılan taşların kalitesizliği nedeniyle tamamen çürüyüp toza karıştığı',
      'Kralların devlet hazinesini eşlerinin şımarık istekleri uğruna boş yere tükettiği',
      'Gerçekte var olmasa bile; insanın sevdiği kişinin acısını dindirmek (aşk) uğruna imkânsızı başarabileceğine, çölü bile cennete çevirebileceğine dair üretilmiş romantik (şiirsel) bir metafor (yalan) olduğu',
      'Eski çağ tarihçilerinin diğer medeniyetleri abartarak anlatan yeteneksiz yalancılar olduğu'
    ],
    correct: 2,
    explanation: 'Kanıt bulunamamasına rağmen bu hikâyenin, "sevgi uğruna çölün ortasında cenneti yaratma çabasına dair görkemli ve romantik bir yalan (metafor)" olarak yorumlanmasıdır.'
  },
  {
    title: 'Kevlar\'ın İcadı (Stephanie Kwolek)',
    passage: '1965 yılında kimyager Stephanie Kwolek, otomobil lastiklerini daha hafif hale getirecek, benzin tasarrufu sağlayacak sert bir plastik üretmeye çalışıyordu. Karışımlarını hazırlarken asistanı o bulanık ve sulu sıvıyı "Bu işe yaramaz, iptal edelim" diyerek dökmek istedi. Kwolek ısrar etti ve karışımı makinede eğirdiğinde, çelikten beş kat daha güçlü ama iplik kadar hafif bir lif elde etti! Otomobil lastiği için çıkılan yolda, yanlışlıkla kurşungeçirmez yeleklerin hammaddesi olan "Kevlar" icat edilmişti. O günden beri Kevlar, savaş alanlarında ve polis teşkilatlarında milyonlarca insanın hayatını kurtardı. Bilim, genellikle sizin haritaya çizdiğiniz o düz yolda ilerlemez; asıl mucizeler, "işe yaramaz" denilip çöpe atılmak üzere olan o bulanık sapaklarda gizlidir.',
    questionStem: 'Kevlar\'ın icat süreci, bilimsel araştırmaların doğası hakkında hangi gerçeği ortaya koymaktadır?',
    options: [
      'Bilim insanlarının sadece otomotiv sektörüne hizmet ettiğinde başarılı icatlar yapabildiğini',
      'Kimyasal deneylerde güvenlik önlemi alınmazsa ölümcül patlamaların kaçınılmaz olduğunu',
      'Büyük ve hayat kurtarıcı bilimsel keşiflerin her zaman planlı bir hedefin değil; ısrar, tesadüf ve "işe yaramaz" sanılan hatalı rotaların (esnekliğin) bir sonucu olabileceğini',
      'Kadın kimyagerlerin laboratuvarlarda her zaman asistanlardan daha fazla çalıştığını'
    ],
    correct: 2,
    explanation: 'Lastik yapmak isterken "çöpe atılacak" bulanık bir sıvıdan çelikten sağlam Kevlar (kurşungeçirmez yelek) çıkması; mucizelerin planlı hedefte değil, hatalı/tesadüfi sapaklarda gizli olduğunu kanıtlar.'
  },
  {
    title: 'Kan Alma (Flobotomi) Çılgınlığı',
    passage: '1799 yılının soğuk bir Aralık gününde, ABD\'nin ilk başkanı George Washington boğaz enfeksiyonu geçirip hastalandı. Dönemin tıp dünyasına egemen olan "Dört Sıvı" teorisine göre, hastalığın sebebi bedendeki "kötü kan" idi. Gelen saygın doktorlar, Washington\'ı iyileştirmek için sülükler ve neşterlerle onun bedeninden litrelerce kan boşalttılar. Boğazındaki iltihap geçmediği gibi, kan kaybından şoka giren başkan saatler içinde hayatını kaybetti. Modern bilimin kurucuları onu bir bakterinin değil, kendi elleriyle uyguladıkları bir cehaletin kurbanı yaptılar. Washington\'ın ölümü; bir bilginin (veya inancın) sadece o dönemde otoriteler tarafından "mutlak doğru" (dogma) kabul ediliyor olmasının, onu cehaletin elindeki en keskin ve yasal bir cinayet silahı olmaktan kurtaramadığını gösterir.',
    questionStem: 'George Washington\'ın ölümüne sebep olan "kan alma" tedavisi, bilim ve otorite hakkında neyi eleştirmektedir?',
    options: [
      'Geleneksel bitkisel tedavi yöntemlerinin kimyasal ilaçlardan daha faydalı olduğunu',
      'O dönemin doktorlarının başkanlık kurumuna (siyasete) gizli bir düşmanlık beslediğini',
      'Sorgulanmayan, otorite tarafından "mutlak bilimsel doğru" olarak kabul edilen yaygın inançların (dogmaların), aslında insanı yasal yollarla öldürebilen korkunç bir cehalet olabileceğini',
      'ABD\'nin ilk yıllarında hastane altyapılarının yetersizliğini'
    ],
    correct: 2,
    explanation: 'Saygın doktorların "kötü kanı boşaltma" dogmasıyla başkanı kan kaybından öldürmesi; sorgulanmayan otoritelerin ve sözde mutlak bilimsel doğruların (dogmaların) yasal bir cinayet aracı/cehalet olabileceğini eleştirir.'
  },
  {
    title: 'Oumuamua: Yıldızlararası Misafir',
    passage: '2017 yılında Hawaii\'deki teleskoplar, Güneş sistemimize dışarıdan giren ilk yıldızlararası nesneyi tespit etti ve ona "Oumuamua" (Uzaktan Gelen İlk Haberci) adını verdi. Puro şeklindeki bu tuhaf kırmızı kaya, bizim sistemimizdeki hiçbir yıldıza veya asteroide benzemiyordu. İnanılmaz bir hızla Güneş\'in etrafından sapan bu nesne, hiçbir şekilde yavaşlamadan veya bize bir mesaj bırakmadan karanlık uzay boşluğuna doğru yoluna devam etti. Kimi astronomlar onun uzaylılara ait terk edilmiş bir yelkenli olabileceğini bile düşündü. Oumuamua\'nın o sessiz geçip gidişi; koca evrenin bizim varlığımızı veya dünyamızı zerre kadar umursamadığını, bizim o devasa ve kibirli kozmik sahnede, sadece hızla geçip gidilen, camından dışarı bile bakılmayan sıradan bir dinlenme tesisi olduğumuzu yüzümüze çarpan soğuk bir gerçektir.',
    questionStem: 'Yazar, Oumuamua asteroidinin Güneş sistemimizden geçip gitmesini insanlık açısından nasıl (felsefi olarak) yorumlamaktadır?',
    options: [
      'Güneş sisteminin dış uzaydan gelecek asteroit çarpışmalarına karşı tamamen savunmasız olduğu',
      'Dünya dışı akıllı yaşam formlarının teknolojik olarak bizden çok daha ilkel olduğu',
      'Bu sessiz (ilgisiz) geçişin, insanın evrendeki merkezi ve önemli konumuna dair kibrini yıktığı; evrenin bize karşı tamamen kayıtsız (umursamaz) olduğunu gösterdiği',
      'Gelecekte yıldızlararası seyahat yapmak için puro şeklindeki uzay gemileri üretmemiz gerektiği'
    ],
    correct: 2,
    explanation: 'Nesnenin hiç yavaşlamadan ve umursamadan geçip gitmesi; evrenin bizim varlığımızı umursamadığına, insanın o "önemli" ve "merkezde" olduğu kibrinin anlamsızlığına (kayıtsızlığa) vurgu yapar.'
  },
  {
    title: 'Jing Ke ve İmparatora Suikast',
    passage: 'MÖ 227\'de, Çin\'i acımasızca işgal eden acımasız Kral Zheng\'i (geleceğin İlk İmparatoru) durdurmak için Jing Ke adlı bir suikastçı gönüllü oldu. Plan kusursuzdu; barış elçisi kılığına girip sunacağı haritanın içine zehirli bir hançer sakladı. Kral haritayı açarken hançeri kaptı ama kral kaçmayı başardı. Kanlı bir kovalamacanın ardından muhafızlar Jing Ke\'yi kılıçtan geçirdi. Jing Ke, başarısız olduğunu ve öleceğini bildiği o son saniyede, sarayın sütununa yaslanıp kralın yüzüne bakarak kahkahalarla gülmeye başladı ve ona hakaret etti. Suikast başarısız olmuştu ama Jing Ke\'nin o son kahkahası tarihe geçti. O kahkaha; mutlak gücün (imparatorluğun) karşısında ezilse bile, ona boyun eğmeyi reddeden, ölümü kucaklayarak zorbalıkla alay eden o yenilmez insan onurunun ebedi yankısıdır.',
    questionStem: 'Jing Ke\'nin suikastı başaramayıp ölmeden önce "kahkahalarla gülmesi", yazar tarafından neyin sembolü olarak görülmektedir?',
    options: [
      'Suikastçının aldığı eğitimler yüzünden akıl sağlığını ve mantığını kaybetmesinin',
      'Kral Zheng\'in aslında halk tarafından ne kadar çok sevilen komik bir lider olduğunun',
      'Başarısızlık ve kesin ölüm karşısında bile; mutlak güce (zorbalığa) boyun eğmeyi reddeden, korkuyu aşmış yenilmez insan onurunun (direnişin)',
      'Gizli hançer üzerine sürülen zehrin insan beyninde halüsinasyon ve histeri krizleri yaratmasının'
    ],
    correct: 2,
    explanation: 'Başarısızlığa ve ölüme rağmen sütuna yaslanıp imparatorla alay etmesi/gülmesi; mutlak güce boyun eğmeyen, korkuyu yenmiş insan onurunu ve direnişini sembolize eder.'
  }
];

export const felsefeParagrafSorulari15: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_15.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_15[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe15-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_16 = [
  {
    title: 'Hayatta Kalanma Önyargısı (Survivorship Bias)',
    passage: 'İkinci Dünya Savaşı sırasında Amerikan ordusu, üsse delik deşik dönen bombardıman uçaklarını inceleyerek, uçakların en çok kurşun alan (kanat ve gövde) kısımlarını zırhla kaplamaya karar verdi. Ancak matematikçi Abraham Wald bu karara şiddetle karşı çıktı. "Zırhı, kurşun izi olan yerlere değil, hiç kurşun izi olmayan (motor ve kokpit) yerlere koymalısınız" dedi. Çünkü o delik deşik uçaklar, kanatlarından vurulmalarına rağmen "hayatta kalıp" dönebilenlerdi. Motordan vurulanlar ise asla geri dönememişti. İnsanoğlunun en büyük mantık hatalarından biri olan "Hayatta Kalanma Önyargısı", sadece başarı hikâyelerine (dönen uçaklara) odaklanıp, başarısızlığın asıl ve ölümcül nedenlerini (dönemeyenleri) körü körüne gözden kaçırmamıza neden olur.',
    questionStem: 'Hayatta Kalanma Önyargısı kavramı, karar verme süreçlerimizdeki hangi mantık hatasını tanımlar?',
    options: [
      'Askeri stratejilerde mühendislik hesaplamalarından çok istatistiksel verilerin kullanılması zorunluluğunu',
      'Sadece başarılı olan örneklere (hayatta kalanlara) odaklanıp, asıl gerçeği ve ölümcül zayıflıkları barındıran başarısız örnekleri (yok olanları) göz ardı etme körlüğünü',
      'Uçakların hayatta kalma şansının zırh kalınlığından ziyade pilotun yeteneğine bağlı olduğunu',
      'Geçmişteki savaşlardan alınan derslerin günümüz savaş teknolojisinde hiçbir işe yaramadığını'
    ],
    correct: 1,
    explanation: 'Sadece geri dönen (hayatta kalan) uçaklara bakıp asıl ölümcül hasarı alan (dönemeyen) uçakları hesaba katmamak, başarıya odaklanıp asıl zayıflığı görmeme körlüğünü ifade eder.'
  },
  {
    title: 'Benjamin Libet Deneyi ve Özgür İrade',
    passage: '1980\'lerde nörolog Benjamin Libet, insanlık tarihinin en felsefi deneylerinden birini yaptı. Katılımcılardan bir düğmeye basmalarını ve düğmeye basmaya "karar verdikleri o anı" saatte işaretlemelerini istedi. Bu sırada beyin aktiviteleri (EEG) ölçülüyordu. Sonuçlar dehşet vericiydi: Katılımcıların beyni, kişi düğmeye basmaya bilinçli olarak "karar vermeden" tam yarım saniye önce harekete geçme emrini zaten vermişti! Yani biz bir şeyi seçtiğimizi sandığımızda, beynimiz o kararı çoktan karanlıkta almış; bilinçli zihnimiz ise bu kararı sadece sonradan kendisine aitmiş gibi sahiplenmişti. Libet deneyi, "özgür irade" dediğimiz o kutsal tacın, aslında beynimizin biyolojik kimyasının bize sunduğu gecikmeli bir illüzyon olabileceğini fısıldar.',
    questionStem: 'Benjamin Libet\'in deneyi, insan varoluşundaki hangi temel inancı sarsmaktadır?',
    options: [
      'İnsanların dikkat sürelerinin zamanla teknolojinin etkisiyle kısaldığını',
      'Fiziksel reflekslerimizin zihinsel düşüncelerimizden çok daha yavaş çalıştığını',
      'Kararlarımızı kendi "özgür irademizle" ve bilinçli olarak aldığımız (kontrolün bizde olduğu) inancını yıkarak, bilincin sadece beynin önceden aldığı bir kararın izleyicisi (illüzyonu) olabileceğini',
      'EEG cihazlarının insan beynindeki duygusal tepkileri ölçmede yetersiz kaldığını'
    ],
    correct: 2,
    explanation: 'Beynin biz bilinçli karar vermeden yarım saniye önce harekete geçmesi; özgür iradenin ve bilinçli seçim kontrolünün sadece gecikmeli bir illüzyon olabileceği gerçeğini ortaya koyar.'
  },
  {
    title: 'Üçüncü Dalga Deneyi (Faşizmin Doğuşu)',
    passage: '1967 yılında lise öğretmeni Ron Jones, öğrencilerine faşizmin Alman toplumunda nasıl bu kadar kolay yayıldığını göstermek için bir deney yaptı. Sınıfta disiplin, aidiyet ve üstünlük temeline dayalı "Üçüncü Dalga" adında bir hareket kurdu. Sadece birkaç gün içinde o sıradan, özgürlükçü gençler; diğer öğrencileri dışlayan, kendi aralarında gizli selamlaşmalar yapan ve harekete karşı çıkanları fişleyip cezalandıran acımasız birer faşist askere dönüştüler. Deney dördüncü günde dehşet içinde sonlandırıldı. Üçüncü Dalga deneyi, zorbalığın ve faşizmin tarihte kalmış bir kaza olmadığını; insanın o ilkel "güçlü bir gruba ait olma ve itaat etme" arzusunda pusuya yatan, saniyeler içinde uyanabilecek bulaşıcı bir psikolojik hastalık olduğunu kanıtlar.',
    questionStem: 'Ron Jones\'un "Üçüncü Dalga" deneyi, otoriter ve faşist eğilimlerin kökenini neye bağlamaktadır?',
    options: [
      'Öğrencilerin evde ailelerinden gördükleri şiddet ve baskı ortamına',
      'Alman genetiğinin nesilden nesile aktarılan tarihsel bir mirasına',
      'İnsan psikolojisinde her zaman pusuda bekleyen "güçlü bir gruba aidiyet, disiplin ve itaat etme" arzusunun yarattığı o karanlık ve bulaşıcı cazibeye',
      'Lise müfredatlarında siyaset biliminin yeterince detaylı işlenmemesine'
    ],
    correct: 2,
    explanation: 'Sıradan gençlerin birkaç günde faşiste dönüşmesi; faşizmin tarihte kalmadığını, insanın içindeki "gruba aidiyet ve itaat" arzusundan beslenen bulaşıcı bir cazibe olduğunu gösterir.'
  },
  {
    title: 'Ego Tükenmesi (Ego Depletion)',
    passage: 'Psikolog Roy Baumeister, bir grup aç öğrenciyi fırından yeni çıkmış, taze çikolatalı kurabiyelerle dolu bir odaya soktu. Öğrencilerin yarısına kurabiyelerden yemeleri izni verildi; diğer yarısına ise kurabiyelere dokunmamaları ve sadece önlerindeki çiğ turpları yemeleri söylendi. Turp yiyenler nefis kokuya rağmen kendilerini zorlukla tuttular. Daha sonra tüm öğrencilere çözülmesi imkânsız bir geometri sorusu verildi. Kurabiye yiyenler soruyu çözmek için ortalama 19 dakika çabalarken, nefsine hâkim olup turp yiyenler sadece 8 dakika sonra pes ettiler! "Ego Tükenmesi" olarak bilinen bu keşif, iradenin sınırsız bir karakter özelliği değil; tıpkı bir kas gibi kullanıldıkça yorulan, tükenebilen ve dinlenmeye muhtaç biyolojik (zihinsel) bir enerji kaynağı olduğunu kanıtlar.',
    questionStem: 'Ego Tükenmesi deneyi, "irade (nefsine hâkim olma)" kavramı hakkında hangi geleneksel inancı çürütmüştür?',
    options: [
      'İradenin beslenme alışkanlıklarıyla hiçbir ilgisi olmadığı inancını',
      'İradenin doğuştan gelen, sarsılmaz ve sınırsız bir ahlaki karakter özelliği olduğu inancını yıkarak; onun kullanıldıkça yorulan ve tükenen bir "kas (enerji)" olduğunu göstermiştir',
      'Zeki öğrencilerin iradeli öğrencilere göre daha çabuk pes ettiği yönündeki ön yargıyı',
      'İradenin sadece çocukluk döneminde geliştirilebileceği fikrini'
    ],
    correct: 1,
    explanation: 'Kurabiye yememek için iradesini (enerjisini) harcayanların soruda çabuk pes etmesi, iradenin sınırsız bir ahlak özelliği değil, tıpkı bir kas gibi yorulup tükenen bir enerji olduğunu kanıtlar.'
  },
  {
    title: 'Capgras Sendromu: Yabancılaşan Sevdiklerimiz',
    passage: 'Nörolojik bir kâbus olan Capgras Sendromu\'na yakalanan hastalar, anne, baba veya eşlerinin aslında uzaylılar veya robotlar tarafından değiştirilmiş "birebir kopyalar (sahtekârlar)" olduğuna kesin olarak inanırlar. Beynin görsel tanıma merkezi kusursuz çalışır; hasta karşısındaki kişinin annesine benzediğini görür. Ancak yüzü gördüğümüzde kalbimizi ısıtan ve sevgi hissettiren duygu merkezine (amigdalaya) giden kablolar (sinirler) kopmuştur. Görsel vardır ama "duygu" yoktur. Beyin bu mantıksız boşluğu doldurmak için korkunç bir yalan uydurur: "Ona benziyor ama ona karşı hiçbir şey hissetmiyorum, demek ki bu bir sahtekâr!" Capgras Sendromu, birini tanımanın sadece onu gözle görmek değil, o görünüşe ruhumuzdaki duygusal imzanın (hislerin) eşlik etmesi zorunluluğu olduğunu kanıtlar.',
    questionStem: 'Capgras Sendromu, insan beynindeki "tanıma (kimlik teşhisi)" süreciyle ilgili hangi gerçeği ortaya koyar?',
    options: [
      'Görme yetisinin yaşlandıkça insan yüzlerini hatırlamakta zorlandığını',
      'Robotların ve yapay zekânın insanları kusursuzca taklit etme yeteneğine ulaştığını',
      'Birini gerçekten tanımanın sadece "görsel eşleşme" ile bitmediğini; görselliğin mutlaka beynin içindeki "duygusal tepki (his)" ile birleşmesi gerektiğini',
      'İnsanların travma anlarında sevdikleri kişileri tamamen unuttuklarını'
    ],
    correct: 2,
    explanation: 'Görsel olarak tanımasına rağmen duygu bağı (siniri) koptuğu için kişiyi "sahtekâr" sanması; tanımanın sadece görsellik değil, mutlaka duygusal bir tepki (his) barındırması gerektiğini gösterir.'
  },
  {
    title: 'Lady Macbeth Etkisi: Ruhun Yıkanması',
    passage: 'Shakespeare\'in ünlü karakteri Lady Macbeth, işlediği cinayetin ardından ellerindeki o görünmez kanı çıkarmak için hastalıklı bir şekilde sürekli ellerini yıkar. Bilim insanları bu edebi metaforun gerçekliğini test etmek için katılımcılardan geçmişte yaptıkları etik dışı, ahlaksız bir eylemi hatırlamalarını istediler. Ardından onlara bir hediye seçme hakkı verildi: Katılımcıların ezici çoğunluğu kalem veya çikolata yerine "ıslak mendil ve sabun" seçti! "Lady Macbeth Etkisi" adı verilen bu durum; suçluluk hissinin sadece soyut bir vicdan azabı olmadığını, beynin ahlaki kirlenmeyi "fiziksel bir kirlenme" gibi algılayarak, bedeni (elleri) temizleyip ruhu arındırma yönünde kelimenin tam anlamıyla somut ve biyolojik bir refleks geliştirdiğini kanıtlar.',
    questionStem: 'Lady Macbeth Etkisi deneyinin sonuçlarına göre "suçluluk ve ahlaki kirlenme" hissi insan beyninde nasıl işlenmektedir?',
    options: [
      'İnsanların suçluluk duygusunu bastırmak için tatlı gıdalara (çikolataya) yönelmesiyle',
      'Ahlaki suçların zamanla unutularak beynin kendini koruma altına almasıyla',
      'Ahlaki (soyut) kirlenmenin beyin tarafından fiziksel bir kirlenme gibi algılanıp, kişinin temizlik malzemelerine (sabuna/yıkanmaya) yönelerek somut bir arınma refleksi geliştirmesiyle',
      'Kötü anıların beynin konuşma merkezine zarar vererek kişinin iletişimini bozmasıyla'
    ],
    correct: 2,
    explanation: 'Ahlaksız eylemi hatırlayanların hediye olarak sabun/ıslak mendil seçmesi; beynin soyut ahlaki kiri fiziksel bir kirlenme gibi algılayıp bedensel arınma refleksi geliştirdiğini ispatlar.'
  },
  {
    title: 'Skinner\'ın Batıl İnançlı Güvercinleri',
    passage: 'Psikolog B.F. Skinner, aç güvercinleri bir kutuya koydu ve kutudaki mekanizmayı, güvercinler ne yaparsa yapsın "tamamen rastgele" olarak 15 saniyede bir yem düşürecek şekilde ayarladı. Bir süre sonra kutuya baktığında şoke edici bir manzara gördü: Bir güvercin sürekli kendi etrafında dönüyor, diğeri kafasını köşeye vuruyor, bir diğeri tek ayak üstünde sekiyordu. Güvercinler, yem düştüğü o saniyede tesadüfen hangi hareketi yapıyorlarsa, "Yemi getiren şey benim bu hareketim" diye düşünmüş ve o anlamsız ritüeli kutsal bir büyü gibi tekrarlamaya başlamışlardı! Bu deney, stadyumda aynı çorabı giyerek takımının kazanacağına inanan taraftardan, yağmur duasına çıkan ilkel kabilelere kadar, insanoğlunun nedensellik kurma (batıl inanç ve ritüel yaratma) konusundaki o çaresiz ve trajikomik algı hatasının aynasıdır.',
    questionStem: 'Skinner\'ın güvercin deneyi, toplumdaki "batıl inançların ve ritüellerin" doğuşu hakkında hangi psikolojik mekanizmayı açıklamaktadır?',
    options: [
      'Kuşların ve insanların açlık anında zekâ seviyelerinin tamamen eşitlendiğini',
      'Birbiriyle hiçbir alakası olmayan rastgele ödüller (olaylar) ile o anki rastgele eylemler arasında, zihnin sahte bir "neden-sonuç" ilişkisi (kontrol yanılsaması) kurarak bu davranışları kutsallaştırmasını',
      'Genetik mirasımızda büyücülük ve şamanizmin doğuştan var olan kodlar olduğunu',
      'Hayvanların belirli ödüller karşısında sirk eğitimine yatkınlıklarını'
    ],
    correct: 1,
    explanation: 'Yemin rastgele düşmesine rağmen güvercinin "ben döndüğüm için yem geldi" sanması; rastgele olaylar arasında sahte bir neden-sonuç (batıl inanç) ilişkisi kurma zaafını açıklar.'
  },
  {
    title: 'Grup Düşüncesi (Groupthink) ve Felaketler',
    passage: '1961\'de ABD Başkanı Kennedy ve hepsi birbirinden zeki, Harvard mezunu danışman ordusu, Küba\'daki Domuzlar Körfezi Çıkarması\'nı planladı. Askeri bir intihar olan bu planın faciayla sonuçlanacağı çok açıktı, ama kimse itiraz etmedi ve operasyon hezimetle bitti. Psikolog Irving Janis buna "Grup Düşüncesi" dedi. İnsanlar zeki olsalar bile, güçlü ve karizmatik bir liderin olduğu, uyumun (konsensüsün) her şeyden üstün tutulduğu bir gruba girdiklerinde eleştirel düşünmeyi kapatırlar. Grubun ahengini bozmamak ve "uyumsuz" damgası yememek için herkes içindeki şüpheyi susturur. En parlak zihinlerden oluşan bir oda dolusu dâhi, sırf kalabalığa ayak uydurmak (sürüye uymak) uğruna, tek bir aptalın bile yapmayacağı ölümcül kararlara imza atabilir.',
    questionStem: 'Grup Düşüncesi (Groupthink) kavramına göre, çok zeki insanlardan oluşan ekiplerin felaket getiren kararlar almasının asıl nedeni nedir?',
    options: [
      'Gruptaki bireylerin rekabet yüzünden birbirlerinden bilgi saklaması',
      'Grubun uyumunu (ahengini) bozmamak ve dışlanmamak (lideri onaylamak) adına, bireylerin kendi eleştirel akıllarını ve şüphelerini kasıtlı olarak susturmaları',
      'Eğitim seviyesi yüksek insanların sokak hayatının gerçeklerinden tamamen kopuk olması',
      'Zaman baskısı nedeniyle detaylı araştırma yapmaya fırsat bulamamaları'
    ],
    correct: 1,
    explanation: 'Zeki insanların itiraz etmemesi; dışlanmamak ve grubun uyumunu bozmamak adına eleştirel aklı devre dışı bırakıp içlerindeki şüpheyi susturmalarıyla (Grup Düşüncesi) açıklanır.'
  },
  {
    title: 'Plastik El İllüzyonu (Rubber Hand)',
    passage: 'Bir laboratuvarda katılımcının sol eli bir masanın üzerine konur ve bir paravanla görüşünden gizlenir. Katılımcının görebileceği yere ise gerçeğe birebir benzeyen plastik bir el konulur. Araştırmacı, hem gizli olan gerçek ele hem de plastik ele aynı anda, senkronize bir şekilde fırçayla dokunur. Birkaç dakika sonra katılımcının beyni şok edici bir algı kayması yaşar: Gerçek elini tamamen unutup, o plastik eli "kendi bedeni" olarak benimser! Araştırmacı aniden plastik ele bir çekiçle vurduğunda, katılımcı dehşet içinde irkilir ve terlemeye başlar. "Plastik El İllüzyonu", benlik (beden algısı) dediğimiz o sarsılmaz aidiyetin; göz ve dokunma duyusunun senkronizasyonuyla beynin içinde saniyeler içinde kurgulanabilen (ve hacklenebilen) esnek bir yazılımdan ibaret olduğunu kanıtlar.',
    questionStem: 'Plastik El İllüzyonu deneyinin insan beyni ve bedeni hakkındaki en sarsıcı bulgusu nedir?',
    options: [
      'İnsan beyninin plastik maddelere karşı doğuştan gelen alerjik bir korku (fobi) barındırması',
      'Vücudumuza ve uzuvlarımıza duyduğumuz aidiyetin (beden algısının) değişmez fiziksel bir gerçeklik değil, beynin duyuları birleştirerek anlık kurguladığı, kolayca kandırılabilir (hacklenebilir) bir illüzyon olması',
      'Görme engelli insanların bu tür illüzyonlara asla kapılmadığının ispatlanması',
      'Fırça darbelerinin insan derisinde uyuşukluk yaratarak acı hissini tamamen ortadan kaldırması'
    ],
    correct: 1,
    explanation: 'Plastik ele vurulduğunda kişinin irkilmesi; bedenimizin sınırlarına dair algımızın değişmez bir gerçek değil, beynin kurguladığı ve kolayca hacklenebilen esnek bir yazılım (illüzyon) olduğunu kanıtlar.'
  },
  {
    title: 'Ganzfeld Etkisi ve Deliliğin Sınırı',
    passage: 'Beynimiz dış dünyadan sürekli veri almak üzere tasarlanmıştır. Peki ya tüm veriyi keserseniz ne olur? "Ganzfeld Etkisi" deneyinde katılımcının gözlerine ışığı süzen yarım pinpon topları kapatılır, kulaklarına ise radyodaki cızırtı (beyaz gürültü) verilir. Dış dünyadan tamamen izole olan beyin, sadece 15 dakika içinde paniğe kapılır. Karanlıkta kalan bir sinema projektörü gibi kendi filmini oynatmaya başlar. Katılımcılar etrafta uçan atlar, konuşan ölüler görür ve inanılmaz derecede gerçekçi halüsinasyonlar yaşarlar. Bu deney; gerçeklik dediğimiz şeyin aslında dışarıdaki dünya değil, beynimizin o dış verileri yorumlama biçimi olduğunu; eğer dışarıdan veri gelmezse aklın anında kendi cehennemini (deliliğini) yarattığını ispatlar.',
    questionStem: 'Ganzfeld Etkisi deneyine göre halüsinasyonların (sanrıların) ortaya çıkmasının asıl mekanizması nedir?',
    options: [
      'Beyaz gürültünün kulak zarına verdiği kalıcı fiziksel hasar',
      'Pinpon toplarının içindeki kimyasalların göz retinasını zehirlemesi',
      'Dış dünyadan gelen duyusal verilerin (ışık/ses) tamamen kesilmesiyle veri açlığı çeken beynin paniğe kapılıp kendi gerçekliğini (kurgularını) üretmeye başlaması',
      'Katılımcıların uzun süre uyumadıkları için uyanıkken rüya görmeye başlaması'
    ],
    correct: 2,
    explanation: 'Gözün ve kulağın izole edilmesiyle verisiz (aç) kalan beynin paniğe kapılıp boşluğu kendi yarattığı halüsinasyonlarla doldurması, Ganzfeld Etkisi\'nin temel mekanizmasıdır.'
  },
  {
    title: 'Çıpalama Etkisi (Anchoring Bias)',
    passage: 'Mahatma Gandhi\'nin kaç yaşında öldüğünü tahmin etmeniz istenseydi muhtemelen bir mantık yürütürdünüz. Ancak psikologlar, soruyu sormadan önce bir gruba "Sizce Gandhi 114 yaşına kadar yaşadı mı?", diğer gruba ise "Sizce 35 yaşından sonra mı öldü?" diye sordular. 114 sayısını duyan grup ortalama 73 tahmininde bulunurken; 35 sayısını duyan grup ortalama 50 tahmininde bulundu. Sayıların Gandhi\'nin ölümüyle hiçbir ilgisi veya mantığı yoktu! "Çıpalama Etkisi" denen bu zaaf, insan beyninin pazarlık yaparken veya tahminde bulunurken duyduğu ilk bilgiye (çıpaya) körü körüne takılıp kalarak bütün mantığını o sayının etrafında şekillendirdiğini kanıtlar. Bağımsız irademiz ve objektif mantığımız, duyduğumuz ilk alakasız fısıltıyla kolayca rehin alınabilir.',
    questionStem: 'Çıpalama Etkisi (Anchoring Bias) kavramı, insan zihninin karar verme sürecindeki hangi zaafını ortaya koyar?',
    options: [
      'İnsanların tarihi karakterlerin yaşamlarına yeterince ilgi duymadığını',
      'Bir tahminde veya pazarlıkta bulunurken, objektif bir değerlendirme yapmak yerine, zihnin duyduğu "ilk bilgiye veya sayıya" (alakasız olsa bile) takılıp kalarak kararlarını o sınıra göre şekillendirmesi zaafını',
      'Soruların soruluş tarzının stres yaratarak zihinsel hesaplama yeteneğini düşürdüğünü',
      'Yaşlılık ve ölüm kavramlarının insanlarda mantıklı düşünmeyi engelleyen bir fobi olduğunu'
    ],
    correct: 1,
    explanation: 'Alakasız olsa bile 114 veya 35 sayılarının tahminleri doğrudan etkilemesi; zihnin duyduğu "ilk bilgiye (çıpaya)" takılıp objektif değerlendirme yapamama zaafını açıklar.'
  },
  {
    title: 'Plasebo Butonları: Kontrol İllüzyonu',
    passage: 'Büyük şehirlerdeki yaya geçidi butonlarına veya asansörlerdeki "kapı kapatma" düğmelerine hırsla ve defalarca bastığımız anlar vardır. Oysa New York gibi metropollerdeki asansör butonlarının %80\'i sistemden tamamen koparılmıştır ve hiçbir işe yaramazlar. Işıklar ve asansörler tamamen otomatik bir zamanlayıcıya bağlıdır. Ancak yetkililer bu butonları bilerek orada bırakırlar. Çünkü insanoğlu beklemeye, çaresizliğe ve "kontrolün kendisinde olmadığı" bir akışa tahammül edemez. O sahte düğmeye basmak, dış dünyayı yönettiğimize dair bize psikolojik bir rahatlama (terapi) sağlar. "Plasebo Butonları", modern hayatın o devasa ve ruhsuz makinesinde çırpınan insana sunulan en zararsız, en sahte ama en gerekli kontrol illüzyonudur.',
    questionStem: 'Asansörlerdeki "Plasebo Butonları"nın çalışmamasına rağmen sistemde bırakılmasının temel psikolojik işlevi nedir?',
    options: [
      'Elektrik devrelerinin bozulma ihtimaline karşı yedek bir güvenlik mekanizması olarak bekletilmeleri',
      'Şehir mimarisinin klasik alışkanlıklardan (tasarımlardan) kolayca vazgeçememesi',
      'İnsanın bekleme anındaki çaresizliğini yatıştırmak ve ona "sürecin kontrolünün kendi elinde olduğu" şeklinde sahte ama rahatlatıcı bir psikolojik illüzyon sunmak',
      'Çocukların makinelerle oynamasını sağlayarak onların dikkatini başka yöne çekmek'
    ],
    correct: 2,
    explanation: 'Butonların işe yaramamasına rağmen orada bırakılması, çaresizce bekleyen insana "kontrol bende" hissi (sahte bir psikolojik illüzyon ve rahatlama) sunmak içindir.'
  },
  {
    title: 'Kokteyl Partisi Etkisi (Algıda Seçicilik)',
    passage: 'Devasa ve son derece gürültülü bir partide (kokteylde) olduğunuzu düşünün. Etrafta yüksek sesli bir müzik, çınlayan kadehler ve aynı anda konuşan onlarca insan vardır. Zihniniz bu uğultunun çoğunu anlamsız bir arka plan gürültüsü olarak çöpe atar. Ta ki... Odanın en uzak köşesindeki biri sizin adınızı fısıldayana kadar! O saniye tüm gürültü kesilir ve kulaklarınız o sesi bir lazer gibi yakalar. "Kokteyl Partisi Etkisi" denen bu olay, beynimizin aslında odadaki her kelimeyi bilinçaltında kaydettiğini, ancak şalteri sadece "kendi adımız (egomuz)" söz konusu olduğunda açarak onu bilince taşıdığını gösterir. Dünyanın en gelişmiş ve en bencil filtresi, bizzat insan beynidir.',
    questionStem: 'Kokteyl Partisi Etkisi, insan beyninin bilgi işleme kapasitesi hakkında neyi ispatlamaktadır?',
    options: [
      'Gürültülü ortamlarda işitme duyusunun kendini korumak için geçici olarak kapandığını',
      'Beynin arka plandaki tüm gürültüyü kaydetmesine rağmen, sadece kişisel ve egosantrik önemi olan (adımız gibi) verileri ayrıştırarak bilince taşıyan seçici bir filtreleme yeteneğini',
      'İnsanların kalabalık ortamlarda her zaman dedikodu yapmaya daha eğilimli olduğunu',
      'Yüksek sesli müziğin insan beynindeki dil merkezini kısa süreliğine felç ettiğini'
    ],
    correct: 1,
    explanation: 'Odadaki o kadar gürültü içinde sadece kendi adımızı duymamız, beynimizin bilinçaltında her şeyi kaydetse de sadece "bize (egomuza) ait" olan veriyi seçip bilince taşıdığını (seçici filtreyi) kanıtlar.'
  },
  {
    title: 'Stendhal Sendromu (Güzellik Şoku)',
    passage: '1817 yılında Fransız yazar Stendhal, Floransa\'daki Santa Croce Bazilikası\'nı gezerken Michelangelo, Machiavelli ve Galileo\'nun mezarlarının ve devasa Rönesans fresklerinin karşısında durur. O kadar yoğun bir tarihi ve sanatsal mükemmelliğe maruz kalır ki; kalbi hızla çarpmaya başlar, başı döner, midesi bulanır ve sonunda halüsinasyonlar görerek bayılır. Yıllar içinde Floransa\'yı ziyaret eden yüzlerce turist aynı baygınlık ve panik atağı yaşayınca psikiyatri buna "Stendhal Sendromu" adını verdi. Bu sendrom; estetiğin, güzelliğin ve sanatın sadece göze hitap eden zararsız bir zevk olmadığını; insan sinir sistemini kelimenin tam anlamıyla çökertebilecek ve aklı yerinden edebilecek kadar vahşi (yıkıcı) bir güç barındırdığını kanıtlar.',
    questionStem: 'Stendhal Sendromu\'nun ortaya çıkardığı durum, sanatın ve estetiğin gücü hakkında nasıl bir gerçeği vurgular?',
    options: [
      'Eski dönem ressamlarının tablolarında kullandığı kurşun bazlı boyaların insanları zehirlediğini',
      'Sanatın ve yoğun (kusursuz) estetik güzelliğin, sadece sakinleştirici bir zevk değil; sinir sistemini felç edip insanı fiziksel ve psikolojik bir şoka (yıkıma) sokabilecek kadar muazzam bir güç olduğunu',
      'Kiliselerin ve müzelerin kapalı atmosferinin insanlarda oksijen yetersizliği yarattığını',
      'Tarihi eserleri görmenin yaşlı insanlarda geçmişe dair pişmanlıkları tetiklediğini'
    ],
    correct: 1,
    explanation: 'Kusursuz sanat eserleri karşısında insanların kalp çarpıntısı yaşayıp bayılması (Stendhal Sendromu); güzelliğin ve sanatın insan sinir sistemini çökertebilecek kadar sarsıcı/yıkıcı bir güç olduğunu vurgular.'
  },
  {
    title: 'Sahtekâr Sendromu (Imposter Syndrome)',
    passage: 'Albert Einstein ölmeden bir ay önce dostuna şöyle bir itirafta bulunur: "Hayatım boyunca yaptığım çalışmaların bu kadar abartılması bana kendimi bir dolandırıcı (sahtekâr) gibi hissettiriyor." Tüm dünyayı değiştiren bir dâhi neden kendini sahtekâr hissetsin? Psikolojide "Sahtekâr Sendromu" denilen bu durum; son derece yetenekli, başarılı ve zeki insanların, başarılarının kendi yeteneklerinden değil, sadece "şans eseri" olduğuna inanmaları ve bir gün çevrelerindeki herkesin onların aslında "cahil birer dolandırıcı" olduğunu fark edeceği korkusuyla (anksiyetesiyle) yaşamalarıdır. Cahiller yeteneklerinden en ufak bir şüphe duymazken (Dunning-Kruger), aklın ve bilginin zirvesine ulaşanların yetersizlik hissiyle (sahtekâr korkusuyla) kıvranması evrenin en acımasız ironisidir.',
    questionStem: 'Sahtekâr Sendromu\'nun (Imposter Syndrome) merkezinde yatan psikolojik yanılgı nedir?',
    options: [
      'Başarısız insanların kendi hatalarını kabul etmeyip her şeyi çevrelerindeki insanlara bağlaması',
      'Dolandırıcıların suçluluk duygusuyla eninde sonunda polise teslim olma içgüdüsü',
      'Gerçekten yetenekli ve başarılı olan bireylerin, kendi başarılarını zekâlarına değil şansa bağlayarak, "aslında yetersiz olduklarının bir gün ortaya çıkacağı" yönünde yaşadıkları temelsiz (ve ironik) anksiyete',
      'Bilim insanlarının yaşlandıkça eski teorilerinin yanlış çıkmasından duyduğu korku'
    ],
    correct: 2,
    explanation: 'Einstein gibi dâhilerin bile başarılarını şansa bağlayıp "sahtekâr olduğum anlaşılacak" korkusu yaşaması; yetenekli insanların yaşadığı o temelsiz yetersizlik (sahtekâr) hezeyanını tanımlar.'
  },
  {
    title: 'Deindividuation (Kimliksizleşme) ve Kötülük',
    passage: 'Cadılar Bayramı\'nda çocukların bir masadan "sadece birer tane şeker almaları" tembihlenir. Araştırmalar, çocukların yüzlerinde maske yokken (kimlikleri belliyken) kurallara harfiyen uyduğunu gösterir. Ancak yüzlerinde anonim kalmalarını sağlayan kostüm maskeleri varken, çocukların ezici bir çoğunluğu kuralları çiğneyip avuç dolusu şeker çalar. Psikolojide "Kimliksizleşme" (Deindividuation) olarak adlandırılan bu olgu, kalabalıkların ve anonimliğin karanlık yüzüdür. Sosyal medyadaki sahte profillerin arkasına sığınanların sergilediği o korkunç linç ve linç kültürü de aynı refleksten doğar. İnsandan kimliğini, yüzünü ve ismini (bireyselliğini) aldığınız an, ahlak ve medeniyetin o ince örtüsü yırtılır; geriye sadece cezalandırılma korkusu olmayan acımasız bir canavar kalır.',
    questionStem: 'Kimliksizleşme (Deindividuation) kavramı, ahlaki davranışların temelinde neyin yattığını savunmaktadır?',
    options: [
      'Tatlı yiyeceklerin çocukların otokontrol mekanizmasını biyolojik olarak bozduğunu',
      'Ahlakın ve kurallara uymanın içsel bir erdemden ziyade; "kimliğin (yüzün) bilinmesi" ve bunun getirdiği cezalandırılma (dışlanma) korkusuna bağlı olduğunu, anonimliğin (maskenin) bu sınırı kaldırdığını',
      'Toplu kutlamaların ve bayramların insanların kurallara saygısını artırdığını',
      'Kötülüğün tamamen genetik bir miras olup çevresel faktörlerden etkilenmediğini'
    ],
    correct: 1,
    explanation: 'Maskeli çocukların (veya sahte profillerin) kuralları çiğnemesi; ahlakın aslında içsel erdem değil, kimliğin bilinmesi (hesap verebilirlik/korku) olduğunu, anonimliğin bu sınırı yıktığını gösterir.'
  },
  {
    title: 'Kör Görme (Blindsight) Paradoksu',
    passage: 'Beyninin "birincil görsel korteks" kısmı felç veya hasar görmüş olan bazı hastalar tıbben tamamen kördürler; gözlerinin önünde ne olduğunu hiçbir şekilde bilinçli olarak "göremezler". Ancak doktorlar bu hastalardan, karanlık odada aniden yanan bir ışığın yerini işaret etmelerini veya kendilerine fırlatılan bir topu yakalamalarını istediklerinde şok edici bir şey olur. Hastalar "Hiçbir şey görmüyorum, sadece atıp tutuyorum" demelerine rağmen, ışığın yerini kusursuzca gösterir ve topu havada yakalarlar! "Kör Görme" adı verilen bu durum; gözlerin hâlâ veriyi alıp beynin en ilkel alt katmanlarına (hayatta kalma merkezine) ilettiğini, sadece bizim o üst düzey "bilincimizin" (vizyonumuzun) bu veriden habersiz olduğunu kanıtlar. Yani beynimiz dünyayı bilir, ama "bizim" bundan haberimiz yoktur.',
    questionStem: 'Kör Görme (Blindsight) vakası, insan bilinci ve algısı hakkında hangi sıra dışı gerçeği ispatlamaktadır?',
    options: [
      'Körlüğün gözlerden değil her zaman beyin sarsıntılarından kaynaklandığını',
      'Gözleri görmeyen insanların işitme ve dokunma duyularının çok daha fazla geliştiğini',
      'Algılama (veriyi işleme ve tepki verme) eyleminin bilinçten tamamen bağımsız çalışabildiğini; beynin çevreyi kusursuzca işlediği halde bilincimizin (kendi farkındalığımızın) bundan habersiz kalabileceğini',
      'Tıbbi cihazların beyin hasarlarını tespit etmede her zaman hata yaptığını'
    ],
    correct: 2,
    explanation: 'Kör olduğunu söyleyen hastanın atılan topu yakalaması; verinin beyin tarafından (ilkel düzeyde) işlendiğini ancak bilincin bundan habersiz kaldığını, yani algının bilinçten bağımsız da çalışabileceğini kanıtlar.'
  },
  {
    title: 'Munchausen Sendromu by Proxy (Vekâleten Hastalık)',
    passage: 'Tıp tarihindeki en karanlık psikolojik bozukluklardan biri, annelerin (veya bakıcıların) tamamen sağlıklı olan çocuklarını kasten hasta etmesi, hatta zehirlemesidir. Amaç çocuğu öldürmek değil; hastanelere koşarak, doktorların ve çevrenin "Ne kadar fedakâr ve zavallı bir anne" diyerek ona acımasını, ilgi göstermesini (kahraman ilan edilmesini) sağlamaktır. "Munchausen by Proxy" adı verilen bu korkunç sendrom, anne şefkati ve koruma içgüdüsü dediğimiz o en kutsal insani duygunun, kişinin kendi narsisistik açlığını ve ilgi (şefkat) görme krizini doyurmak için bizzat evladını acımasızca bir enstrümana (kurbana) dönüştürmesidir. Şeytan bazen boynuzlu bir canavar değil, elinde ilaç şişesiyle ağlayan bir kurtarıcıdır.',
    questionStem: 'Munchausen by Proxy sendromunun merkezinde yatan asıl psikolojik (ve karanlık) motivasyon nedir?',
    options: [
      'Annelerin çocukluklarında doktor olma hayallerini gerçekleştirememiş olmaları',
      'Kişinin kendi narsisistik ilgi, övgü ve kahramanlık (şefkat görme) açlığını doyurmak uğruna, en kutsal bağ olan evladını bile kasten zehirleyip onu bir kurban aracı olarak kullanması',
      'Maddi destek ve ilaç yardımı almak için devleti dolandırma isteği',
      'Bozuk genetiğe sahip çocukların daha çabuk hastalanmaya yatkın olması'
    ],
    correct: 1,
    explanation: 'Annenin ilgi ve övgü görmek ("fedakâr anne" denilmesi) için sağlıklı çocuğunu kasten hasta etmesi, narsisistik bir açlığı ve en kutsal bağın kurbana dönüştürülmesini açıklar.'
  },
  {
    title: 'Paylaşılmış Psikoz (Folie à Deux)',
    passage: 'Delilik genellikle bireyin kendi beyninin içindeki biyolojik bir çöküş olarak görülür. Ancak "Folie à Deux" (İki Kişilik Delilik) vakalarında durum dehşet vericidir. Tamamen izole yaşayan iki kişiden biri ağır bir psikoz (şizofreni) krizine girer ve evde uzaylıların olduğunu veya devletin onları dinlediğini sanır. Normalde sağlıklı olan diğer kişi (eşi veya kardeşi), bu yoğun izolasyon ve duygusal bağımlılık nedeniyle hastayı iyileştirmek yerine; onun sanrılarına ikna olur ve aynı kâbusu (olmayan uzaylıları) o da kusursuz bir inançla görmeye başlar. Delilik bazen organik bir beyin hasarı değil; duygusal yakınlık, sevgi ve aşırı izolasyon yoluyla tıpkı bir virüs gibi zihinden zihne atlayan, gerçeği bükebilen bulaşıcı bir felakettir.',
    questionStem: 'Paylaşılmış Psikoz (Folie à Deux) kavramı, delilik (psikoz) olgusu hakkında neyi kanıtlamaktadır?',
    options: [
      'Aynı evde yaşayan insanların genetik olarak birbirlerine benzemeye başladığını',
      'Uzaylılara ve komplo teorilerine inananların genellikle izole ortamlarda yaşadığını',
      'Psikotik hezeyanların (deliliğin) sadece bireysel biyolojik bir hastalık olmadığını; yoğun duygusal bağ ve izolasyon ortamında, tamamen sağlıklı bir zihne bile (bir virüs gibi) bulaşabilen sosyal ve psikolojik bir aktarım olduğunu',
      'Psikiyatri doktorlarının hastalarla çok fazla vakit geçirmesinin tehlikeli olduğunu'
    ],
    correct: 2,
    explanation: 'Sağlıklı birinin, izole ortamda hastanın sanrılarına (uzaylılara vb.) inanıp onu görmeye başlaması; deliliğin sadece biyolojik değil, duygusal bağ ve izolasyonla bulaşan (aktarılan) bir fenomen olduğunu gösterir.'
  },
  {
    title: 'Sokrates ve Mutlu Domuz İkilemi (J.S. Mill)',
    passage: '19. yüzyıl filozofu John Stuart Mill, "Zevk ve Haz" kavramlarını tartışırken o meşhur ve sarsıcı ikilemi ortaya atar: "Halinden memnun (mutlu) bir domuz olmak mı daha iyidir, yoksa acı çeken (mutsuz) bir Sokrates olmak mı?" Sığ bir akıl için cevap mutluluktur. Ancak Mill\'e göre, cehaletin o güvenli çamurunda hiçbir dert tasa bilmeden yatan domuzun hazzı, kalitesiz ve aşağılıktır. İnsanı insan yapan şey, sadece acı çekme ve mutsuz olma pahasına bile olsa evrenin derinliklerini, gerçeğin yükünü ve varoluşun trajedisini kavrama cesaretidir. Gerçek aydınlanma, aptalların o sorunsuz tebessümünde değil; hakikati taşıyan zihnin o asil ve yorgun gözyaşlarında gizlidir.',
    questionStem: 'John Stuart Mill\'in "Mutlu domuz mu, acı çeken Sokrates mi?" ikilemiyle savunduğu asıl felsefi düşünce nedir?',
    options: [
      'İnsanların her ne pahasına olursa olsun mutluluğu ve fiziksel konforu seçmesi gerektiği',
      'Hayvanların dünyayı algılama biçiminin insanlardan çok daha saf ve dürüst olduğu',
      'Cehaletin getirdiği sığ ve kalitesiz bir mutluluk (haz) yerine; farkındalığın, aydınlanmanın ve gerçeği kavrama yetisinin getirdiği asil acıyı (mutsuzluğu) seçmenin insanın en yüce erdemi olduğu',
      'Sokrates\'in felsefe yaparken genellikle hayvan metaforları kullandığı'
    ],
    correct: 2,
    explanation: 'Mill\'in, domuzun sığ mutluluğundansa, evrenin trajedisini kavrayan Sokrates\'in asil acısını yüceltmesi; cehaletin mutluluğu yerine aydınlanmanın (gerçeğin) yükünü/acısını seçmenin erdem olduğunu savunur.'
  }
];

export const psikolojiParagrafSorulari16: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_16.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_16[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-psikoloji16-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
