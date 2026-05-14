import type { BilimParagrafQuestion, SincityParagrafQuestion, TarihParagrafQuestion } from './types';

const PARAGRAPH_THEMES_49 = [
  {
    title: 'Biyosfer 2 (Kibrin Cam Fanusu)',
    passage: '1991 yılında, Dünya\'nın ekosistemini kopyalayarak Mars\'ta koloniler kurmak amacıyla 200 milyon dolarlık devasa ve tamamen kapalı bir cam fanus inşa edildi: "Biyosfer 2". İçine okyanuslar, ormanlar, çöller ve 8 bilim insanı yerleştirildi. İnsanoğlu, doğanın milyarlarca yıllık kusursuz döngüsünü teknolojiyle taklit edebileceğine (Tanrılaşabileceğine) emindi. Ancak deney sadece birkaç ay içinde tam bir cehenneme (kâbusa) dönüştü! Topraktaki mikroplar beklenenden fazla üreyip oksijeni tüketti; beton duvarlar gizlice oksijeni emdi ve içerideki insanlar nefes darlığından çıldırma noktasına geldi. Kuşlar ve arılar öldü, fanusu hamamböcekleri ve çılgın karıncalar istila etti. Psikolojileri çöken 8 bilim insanı birbirine düşman oldu ve deney başarısızlıkla iptal edildi. Biyosfer 2 bize o dondurucu gerçeği fısıldar: İnsanoğlunun o devasa teknolojik kibri; doğanın milyarlarca yıllık kaotik, dilsiz ve görünmez dengesi (Biyosfer 1 / Dünya) karşısında saniyeler içinde çökmeye mahkûm, kırılgan ve acınası bir cam oyuncaktan ibarettir.',
    questionStem: 'Biyosfer 2 deneyinin (kapalı ekosistemin) hızla çökerek başarısız olması, "insan teknolojisi ve doğa" ilişkisi hakkında neyi kanıtlamaktadır?',
    options: [
      'Cam ve çelik malzemelerin doğadaki bitkiler için zehirli gazlar yaydığı yönündeki kimyasal gerçeği',
      'İnsanoğlunun, teknoloji ve bütçeyle "doğanın milyarlarca yıllık o kusursuz ve görünmez dengesini (evrimini)" kopyalayabileceği yönündeki tanrısal kibrinin; doğanın karmaşıklığı karşısında ne kadar aciz, yetersiz ve kırılgan bir illüzyon olduğunu',
      'Uzay araştırmalarına ayrılan bütçelerin dünya üzerindeki çevre sorunlarını çözmekte kullanılması gerektiği felsefesini',
      'Bilim insanlarının izole ortamlarda her zaman daha hızlı ve verimli icatlar yapabildiği teorisini'
    ],
    correct: 1,
    explanation: '200 milyon dolarlık kapalı fanusun (ekosistemin) oksijenin tükenmesi ve karıncaların basmasıyla çökmesi; insanın teknolojiyle "doğayı kopyalayabileceği" kibrinin, doğanın o devasa dengesi karşısında aciz kaldığını kanıtlar.'
  },
  {
    title: 'Lale Çılgınlığı (Ekonomik Halüsinasyon)',
    passage: '1637 yılında Hollanda, tarihin ilk ve en korkunç finansal krizini yaşadı: "Lale Çılgınlığı" (Tulip Mania). O dönemde lale soğanları, zenginliğin ve statünün en büyük sembolü haline geldi. İnsanlar aklını öylesine yitirdi ki, tek bir "Semper Augustus" cinsi lale soğanı alabilmek için koca malikânelerini, at arabalarını ve hayat boyu biriktirdikleri altınları veriyorlardı! Bir çiçek soğanı, dünyanın en pahalı nesnesine dönüşmüştü. Ancak şubat ayında bir sabah, alıcılar aniden laleleri satın almayı bıraktı. O sihirli güven (talep) saniyeler içinde buharlaştı ve lale fiyatları tepetaklak çakıldı; binlerce zengin soylu saniyeler içinde sokak dilencisine dönüştü. Lale Çılgınlığı, modern ekonominin (ve paranın) yüzüne tutulmuş en alaycı aynadır: "Değer" dediğimiz şey nesnenin kendi içinde (özünde) yatan fiziksel bir gerçeklik değil; kitlelerin hırsla, kopyalamayla ve "sürü psikolojisiyle" yarattığı (ve inanç bittiğinde saniyeler içinde hiçliğe dönen) devasa, kolektif bir halüsinasyondan (illüzyondan) ibarettir.',
    questionStem: '1637 Hollanda Lale Çılgınlığı krizi, ekonomi biliminde "Değer ve Fiyat" algısı hakkında hangi tehlikeli yanılgıyı (gerçeği) ifşa eder?',
    options: [
      'Lalelerin o dönemde tıbbi ilaç yapımında kullanıldığı için gerçekten de paha biçilmez bir hammadde olduğunu',
      'Eski çağlarda insanların sadece tarım ürünlerine yatırım yaparak zenginleştiğini',
      'Bir nesnenin değerinin onun "özündeki (fiziksel)" faydasından değil; tamamen kitlelerin hırsı, sürü psikolojisi ve inancıyla şişirilen (ve o inanç bittiğinde anında sıfırlanan) kurgusal bir "halüsinasyon (illüzyon)" olduğu gerçeğini',
      'Çiçek yetiştiriciliğinin kapitalizmi başlatan ilk sanayi devrimi olduğunu'
    ],
    correct: 2,
    explanation: 'Bir evin fiyatına satılan lalenin inanç bitince değersiz bir ota dönmesi; paranın ve değerin nesnenin özünde değil, kitlelerin hırsıyla kurgulanmış "kolektif bir halüsinasyonda (sürü psikolojisinde)" yattığını ispatlar.'
  },
  {
    title: 'Dört Haşere Kampanyası (Doğanın İntikamı)',
    passage: '1958 yılında Çin lideri Mao Zedong, ülkenin tarım verimini artırmak için tarihin en felaket ekolojik emrini verdi: "Dört Haşere Kampanyası". Sıtma ve veba yayan sivrisinekleri, fareleri ve sinekleri öldürmek mantıklı görünüyordu; ancak listeye "tarladaki tahılları yedikleri için" Serçeler de eklenmişti! Çin halkı tencerelere vurarak, tüfeklerle ateş ederek ülkedeki tüm serçeleri gökyüzünden yorgunluktan düşene kadar kovaladı ve milyonlarca kuşu katletti. Otorite "zafer" ilan etti; ancak doğanın o dilsiz faturası ertesi yıl kesildi. Serçeler yok olunca, onların yediği "çekirgeler ve böcekler" (doğal düşmanları kalmadığı için) milyarlarca kat çoğaldı ve bir kıyamet gibi tüm Çin\'in tarlalarını (tahıllarını) yiyip bitirdi. Bu ekolojik körlük yüzünden başlayan "Büyük Çin Kıtlığı"nda 15 ila 45 milyon insan açlıktan ölerek can verdi! Mao\'nun serçeleri, insanoğlunun en kibirli yanılgısıdır: Doğanın o hassas dengesinden çekip kopardığınız tek bir "basit (ve düşman sandığınız)" taş bile, tüm ekosistemi saniyeler içinde çökertip kendi mezarınızı kazan bir kıyamet makinesine dönüşür.',
    questionStem: 'Mao\'nun serçeleri katletmesiyle sonuçlanan "Dört Haşere Kampanyası", insanlığın doğaya müdahalesi hakkında neyin (trajik) bir kanıtıdır?',
    options: [
      'Serçelerin aslında tarıma faydadan çok zarar veren istilacı bir tür olduğunun kanıtı',
      'Siyasi otoritelerin ekosistemin o "görünmez ve zincirleme (karmaşık) bağlarını" hiçe sayarak doğaya (kibirle) kaba bir müdahalede bulunmasının; çözmek istediği sorunun milyonlarca katı büyüklüğünde bir kıyametle (doğanın intikamıyla) sonuçlanacağının',
      'Kuş sürülerinin gürültüden ve tencere seslerinden psikolojik olarak etkilenerek göç ettiklerinin',
      'Tarım toplumlarında böcek ilaçlarının kuşlardan daha etkili bir çözüm olduğunun'
    ],
    correct: 1,
    explanation: 'Tahıl yiyor diye serçeleri öldüren Mao\'nun, çekirge istilası yüzünden 40 milyon insanını açlıktan kaybetmesi; doğanın o hassas/zincirleme dengesini hiçe sayan kaba kibrin, kendi kıyametini doğurduğunu (doğanın intikamını) kanıtlar.'
  },
  {
    title: 'Ayna Nöronlar (Empatinin Biyolojisi)',
    passage: 'Yüzyıllar boyunca filozoflar, bir başkasının acısını hissetme (Empati) yeteneğimizin dinler tarafından öğretilen, kültürel ve yüce bir "ahlaki erdem" olduğunu savundular. Ancak 1990\'larda İtalyan bilim insanları Makak maymunlarının beyinlerini incelerken bu kibri biyolojik bir tokatla yıktılar. Bir maymun fıstık yediğinde beynindeki bazı nöronlar ateşleniyordu. Buraya kadar normaldi; ancak o maymun sadece "başka birinin (araştırmacının)" fıstık yediğini İZLEDİĞİNDE de beynindeki o aynı nöronlar (sanki fıstığı kendi yiyormuş gibi) birebir aynı şekilde ateşleniyordu! "Ayna Nöronlar" adı verilen bu keşif, evrimsel psikolojinin zirvesidir: Bizler bir başkası ağladığında veya acı çektiğinde, bunu sadece "kültürel olarak iyi bir insan olduğumuz için" hissetmeyiz. Beynimiz, karşımızdakinin eylemini kendi içinde donanımsal (fiziksel) olarak taklit (ayna) eder. Empati, sonradan öğrenilmiş felsefi bir lüks değil; bizi doğuştan birbirimize bağlayan, kaçınılmaz ve donanımsal bir biyolojik reflekstir.',
    questionStem: 'Ayna Nöronların (bir başkasını izlerken de aynı nöronların ateşlenmesinin) keşfi, "Empati ve Ahlak" kavramları hakkındaki hangi felsefi dogmayı çürütmüştür?',
    options: [
      'Maymunların sadece kendi türlerinden olan canlıların hareketlerini taklit edebildiğini',
      'Empatinin (başkasının acısını hissetmenin) sadece dinlerle, kültürle veya eğitimle kazanılan sonradan öğrenilmiş "yüce/soyut bir erdem" olduğu dogmasını yıkarak; bunun beynimizin kablolarına kazınmış sarsılmaz bir "biyolojik ve evrimsel refleks" olduğunu ispatlayarak',
      'İnsan beyninin başkalarının yediği yiyecekleri gördüğünde geçici bir hafıza kaybı yaşadığını',
      'Ahlakın sadece dil becerisine sahip olan gelişmiş canlılara özgü olduğunu'
    ],
    correct: 1,
    explanation: 'Başkası yaparken de aynı nöronun ateşlenmesi (Ayna Nöronlar); empatinin "sonradan öğrenilmiş (kültürel/yüce) bir erdem" olduğu felsefesini yıkarak, bunun beynimize kazınmış biyolojik (donanımsal) bir refleks olduğunu ispatlar.'
  },
  {
    title: 'Vasa Gemisi (Otoritenin Kibri Sular Altında)',
    passage: '1628 yılında İsveç Kralı Gustavus Adolphus, tüm Avrupa\'ya gücünü göstermek için dünyanın en korkutucu savaş gemisi olan "Vasa"nın yapılmasını emretti. Gemi yapım aşamasındayken Kral, kibrine yenik düşerek mühendislere bağırdı: "Daha fazla top ekleyin! Gemiyi daha da yüksek ve daha ağır yapın!" Mühendisler ve gemi ustaları, bu kadar ağır topların (ve yüksek ağırlık merkezinin) geminin dengesini bozacağını, fiziksel olarak batacağını biliyorlardı. Ancak kimse "Kral\'a" itiraz etmeye (doğruyu söylemeye) cesaret edemedi. Asa suya indirildiğinde, limanda on binlerce insan alkışlarken hafif bir rüzgâr esti. Vasa, o devasa ağır toplarının dengesizliği yüzünden daha limandan çıkamadan (ilk 20 dakikasında) yan yattı ve seyircilerin gözü önünde sulara gömülerek tarihin en pahalı fiyaskosu oldu. "Vasa Sendromu", liderlerin ve yöneticilerin şu uyarısıdır: Otoritenin, bilgisizce (ve sadece güç gösterisi uğruna) uzmanların mühendisliğini (fiziği) ezip geçmesi; o projeyi yenilmez bir silaha değil, daha limandan çıkmadan batmaya mahkûm, süslü bir demir tabuta dönüştürür.',
    questionStem: 'İsveç savaş gemisi Vasa\'nın (Kralın emriyle fazladan top konduğu için) ilk seferinde batması, yönetim bilimi ve mühendislikte neyin trajik metaforudur?',
    options: [
      'Gemi yapımında kullanılan ahşabın İsveç ikliminde çok çabuk çürüdüğünün',
      'Bilgisiz otoritenin (Kralın), sırf şov ve kibir uğruna uzmanların/mühendislerin (fiziğin) sesini bastırmasının (itiraz edilememesinin); en ihtişamlı projeleri bile daha ilk adımda kendi ağırlığıyla batıran kaçınılmaz bir fiyaskoya dönüştürdüğünün',
      'Düşman casusların limanlarda gizlice gemi gövdelerine delikler açtığının',
      'Deniz rüzgârlarının o dönemde henüz meteorolojik olarak tahmin edilemediğinin'
    ],
    correct: 1,
    explanation: 'Kralın kibriyle gemiye fazla top konması ve mühendislerin susması yüzünden geminin hemen batması; bilgisiz otoritenin uzmanlığı (fiziği) susturmasının yarattığı o kaçınılmaz, ihtişamlı ama ahmakça çöküşün (fiyaskonun) metaforudur.'
  },
  {
    title: 'Ölümcül Ailesel Uykusuzluk (Uykunun Zindanı)',
    passage: 'İnsanoğlu uyumayı bazen vakit kaybı, bazen de yenilmesi gereken bir zayıflık olarak görür. Ancak genetik bir mutasyon olan "Ölümcül Ailesel Uykusuzluk" (Fatal Familial Insomnia - FFI) hastalığı, uykunun bedendeki o merhametsiz ve ilahi tiranlığını yüzümüze çarpar. Bu hastalığa yakalanan kişilerde beynin talamus bölgesi prionlar (zombi proteinler) tarafından yavaşça tahrip edilir. Hasta, bir daha asla ama "ASLA" uykuya dalamaz. Uyumak ister, gözlerini kapatır ancak beyin o karanlık dinlenme (kapanma) moduna geçemez. Aylar boyunca uykusuz kalan hastanın zihni yavaş yavaş erir, halüsinasyonlar başlar, panik ataklar bedeni esir alır, konuşma ve yürüme yetisi tamamen kaybolur ve hasta 18 ay içinde korkunç bir cinnet (tükeniş) yaşayarak ölür. FFI hastalığı; uykunun sıradan bir dinlenme molası (lüks) olmadığını, aklın çıldırmadan ayakta kalabilmesi ve yaşamın devam edebilmesi için beynimizin her gece mecbur olduğu "biyolojik (zorunlu) bir sıfırlama düğmesi (kurtuluş)" olduğunu ispatlayan en dondurucu tıbbi kâbustur.',
    questionStem: 'Ölümcül Ailesel Uykusuzluk (FFI) hastalığının hastaları cinnetle ölüme sürüklemesi, tıp ve insan fizyolojisi hakkında neyi kanıtlamaktadır?',
    options: [
      'Prion proteinlerinin sadece yaşlı insanlarda genetik mutasyona yol açtığı inancını',
      'Uykunun sadece "vakit kaybı veya basit bir dinlenme" olduğu yanılgısını yıkarak; aklın çıldırmadan (bedenin tükenmeden) hayatta kalabilmesi için beynin her gün muhtaç olduğu mutlak, zorunlu ve "biyolojik bir sıfırlama (yaşam) şartı" olduğu gerçeğini',
      'Uykusuzluğun insanlara sadece dikkat dağınıklığı ve geçici hafıza kaybı yaşattığı yönündeki hafifletilmiş teoriyi',
      'İnsanların aslında gün ışığında uyumaya evrimsel olarak daha uygun olduğu tezini'
    ],
    correct: 1,
    explanation: 'Asla uyuyamayan adamın çıldırarak ölmesi; uykunun bir lüks (vakit kaybı) değil, beynin çıldırmadan/ölmeden hayatta kalmak için muhtaç olduğu o mutlak "biyolojik sıfırlama (şalteri/kurtuluş)" olduğunu kanıtlar.'
  },
  {
    title: 'Proje Azorian (Soğuk Savaş Tiyatrosu)',
    passage: '1968 yılında Sovyet nükleer denizaltısı (K-129) Pasifik Okyanusu\'nun 5 kilometre derinliğinde battı. Sovyetler onu bulamadı ve vazgeçti. Ancak Amerikan CIA\'i denizaltının yerini tam olarak tespit etmişti. Kripto odasını ve nükleer sırları çalmak için onu çıkarmak istediler. Ancak bunu dünyadan (ve Ruslardan) nasıl gizleyeceklerdi? CIA, çılgın milyarder Howard Hughes ile anlaştı. Hughes, basına "Deniz dibinden manganez modülleri (maden) çıkarmak için devasa bir sivil araştırma gemisi (Glomar Explorer) yaptırıyorum" diyerek tüm dünyayı kandırdı. Gemi yapıldı, denizin dibine inildi ve devasa kıskaçlarla o Sovyet denizaltısı okyanusun dibinden gizlice yukarı çekildi! Dünyadaki gazeteler "Bilim insanları maden çıkarıyor" diye manşet atarken; koca gemi aslında bir hırsızlık makinesiydi. "Proje Azorian", devletlerin kendi casusluklarını (ve nükleer hırslarını) aklamak uğruna, devasa teknolojik yatırımları ve sivil "bilimsel araştırmaları (ticareti)" nasıl kusursuz, milyonlarca dolarlık devasa bir "sahte tiyatro (maske)" olarak kullanabileceğinin efsanevi anıtıdır.',
    questionStem: 'CIA\'in Sovyet denizaltısını çıkarmak için (maden gemisi bahanesiyle) uyguladığı "Proje Azorian", uluslararası siyaset ve teknoloji hakkında neyi ifşa eder?',
    options: [
      'Okyanus tabanındaki manganez madenlerinin nükleer silahlardan çok daha değerli olduğunu',
      'Sovyet denizaltılarının aslında Amerikalılar tarafından kasten batırıldığını',
      'Devletlerin stratejik istihbarat ve casusluk sırlarını korumak uğruna; devasa teknolojik yatırımları, basını ve sivil "bilimsel (ticari) araştırmaları" tüm dünyayı kör eden (kandıran) kusursuz ve pahalı bir "tiyatro maskesi" olarak nasıl kullanabildiklerini',
      'Okyanusların derinliklerinde basınç nedeniyle gemilerin parçalandığı fiziksel kuralını'
    ],
    correct: 2,
    explanation: 'Denizaltı çalmak için "maden çıkarıyoruz" diyerek koca bir sivil/bilimsel gemi kurgusu yaratmaları; devletlerin casusluk için sivil/bilimsel projeleri nasıl milyon dolarlık kusursuz bir tiyatro maskesi (yalan) olarak kullandığını ifşa eder.'
  },
  {
    title: 'Phantosmia (Hayalet Koku ve Gerçeklik İllüzyonu)',
    passage: 'Tamamen temiz ve boş bir odada oturuyorsunuz. Aniden burnunuza yanık lastik, çürümüş et veya ağır bir kimyasal kokusu geliyor. Etrafı arıyorsunuz, pencereleri açıyorsunuz ama koku geçmiyor. Eşiniz veya arkadaşınız odaya geliyor ve "Burada hiçbir koku yok" diyor. Deliriyor musunuz? Nörolojide buna "Phantosmia" (Hayalet Koku) denir. Ortada koku yayan fiziksel bir nesne yoktur; burnunuzdaki veya beyninizdeki koku merkezindeki (olfaktör ampul) nöronlar hatalı (kısa devre) bir ateşleme yaparak, beyninize "olmayan bir gerçekliği" fiziksel bir şok gibi dayatmaktadır. Sizin için o koku, masanın üzerindeki elma kadar "gerçektir". Phantosmia bize insan algısının o en ürkütücü sınırını (zindanını) gösterir: Yaşadığımız ve %100 "Gerçek (Fiziksel)" olduğuna yemin ettiğimiz o dış dünya; aslında sadece beynimizin karanlık kafatasının içinde bize saniye saniye kurgulayıp sunduğu (ve bazen bozulup bizi kandıran) kapalı devre bir simülasyon (yayın) ekranından başka bir şey değildir.',
    questionStem: 'Phantosmia (olmayan kötü kokuları duyma/Hayalet Koku) sendromu, insan algısı ve "gerçeklik (dış dünya)" kavramı hakkında hangi felsefi kâbusu kanıtlar?',
    options: [
      'Geceleri koku alma duyusunun karanlıkta tamamen felç olduğu yönündeki tezi',
      'Mutlak (ve kesin) sandığımız fiziksel dış gerçekliğin aslında sadece beynimizin kafatasının içinde kurguladığı kapalı bir "simülasyondan (yayından)" ibaret olduğu; beynin hata yaptığında bize "olmayan bir dünyayı (gerçekmiş gibi)" yaşatabileceği (kâbusunu)',
      'Havadaki kimyasal zehirlerin sadece belli yaş grupları tarafından algılanabildiğini',
      'Geçmişte yaşanan kötü anıların kokusunun insan elbiselerine kalıcı olarak sindiğini'
    ],
    correct: 1,
    explanation: 'Ortada nesne yokken beynin o yanık kokusunu gerçekten hissettirmesi; bizim "dış dünya" sandığımız şeyin aslında sadece beynin kafatasının içinde anlık kurguladığı kapalı devre bir simülasyon (yanılsama) olduğu felsefi kâbusunu kanıtlar.'
  },
  {
    title: 'Cottingley Perileri (İnanmak İstemenin Körü)',
    passage: '1917 yılında İngiltere\'de iki genç kız (Elsie ve Frances), bahçede dans eden perilerle çekilmiş beş adet fotoğraf yayımladılar (Cottingley Fairies). Resimlerdeki periler açıkça dergilerden kesilmiş karton kâğıtlar ve saç tokalarıyla tutturulmuş iki boyutlu çizimlerdi! Her normal göz bunun sahte olduğunu görebilirdi. Ancak o dönemde dünyaca ünlü ve tarihin en rasyonel, en mantıklı dedektifi "Sherlock Holmes"un yaratıcısı olan yazar Sir Arthur Conan Doyle, bu fotoğrafları inceledi ve "Periler kesinlikle gerçek!" diyerek bu sahtekârlığı tüm dünyaya savundu. O büyük mantık dehası neden iki çocuğun kâğıt oyununa inandı? Çünkü Doyle yakın zamanda oğlunu kaybetmişti ve ölümden (maddeden) öte, doğaüstü ve mistik bir dünyanın var olduğuna inanmaya "korkunç derecede, çaresizce" muhtaçtı! Cottingley Perileri; insanın (aklı ne kadar üstün olursa olsun), duygusal bir travma veya "derin bir inanma ihtiyacı" içine düştüğünde; gözünün önündeki o en ucuz ve en çocuksu yalana (kâğıt parçasına) bile sarılıp kendini seve seve körleştirebileceğinin (aklı kapatabileceğinin) trajik kanıtıdır.',
    questionStem: 'Sir Arthur Conan Doyle\'un (en zeki yazarın) kartondan yapılmış sahte "Cottingley Perileri"ne inanması, insan psikolojisi ve mantığı hakkında neyi ispatlar?',
    options: [
      'Fotoğraf hilelerinin 1910\'larda henüz hiç bilinmediği için bilim insanlarını bile şaşırttığını',
      'Üstün bir aklın ve mantığın bile; kişi derin bir travma yaşadığında veya "doğaüstü bir şeye inanmaya (kurtuluşa) korkunç derecede muhtaç olduğunda", şüpheyi tamamen kapatarak en çocuksu, en ucuz ve apaçık yalanlara körü körüne inanma (teslim olma) çaresizliğini',
      'İngiliz ormanlarında gerçekten de periler gibi açıklanamayan küçük canlıların yaşadığını',
      'Yazarların sadece kendi yazdıkları hikâyelere inandıkları için dış dünyayı reddettiklerini'
    ],
    correct: 1,
    explanation: 'Sherlock Holmes\'un yazarının (mantık dehasının) oğlunu kaybetmenin acısıyla karton perilere inanması; insanın "inanmaya (teselliye) muhtaç olduğunda" mantığını tamamen kapatıp en ucuz yalana bile körü körüne sarılma çaresizliğini ispatlar.'
  },
  {
    title: 'Luddite İsyanı (Makineye Değil, Sömürüye Öfke)',
    passage: 'Tarih kitaplarında "Luddite (Luddcular)" kelimesi hep teknoloji düşmanı, makinelerden korkan ve yeniliğe direnen yobaz cahilleri tanımlamak için kullanılır. 19. yüzyılda İngiltere\'deki dokuma işçileri fabrikalara girip balyozlarla yeni icat edilen buhar makinelerini parçalamışlardı. Oysa gerçek tarih bu anlatılan şatafatlı yalanın tam tersidir! Luddite\'ler teknolojiden nefret eden aptallar değildi; onlar çok yetenekli tekstil ustalarıydı. Makineleri kırmalarının sebebi "teknolojinin kendisi" değil; fabrika sahiplerinin o yeni makineleri, işçilerin "maaşlarını düşürmek, çocukları köle gibi çalıştırmak ve işçi haklarını gasp etmek (sömürmek)" için silah olarak kullanmasıydı! Onlar bilime değil, kapitalizmin o yeni makineleri kullanarak yarattığı insafsız yoksulluğa ve vahşi sömürüye isyan etmişlerdi. "Luddite" efsanesi, tarihi her zaman galiplerin ve sermayenin yazdığını; hak arayan bir işçi sınıfının isyanının, gelecekteki kitlelere nasıl kasten "teknoloji karşıtı cahiller (yobazlar)" olarak kodlanıp yalanla karalandığının kanıtıdır.',
    questionStem: 'Luddite İsyanı\'nın tarihsel arka planındaki (çarpıtılan) asıl gerçek, yazar tarafından nasıl (felsefi/sosyolojik olarak) açıklanmaktadır?',
    options: [
      '19. yüzyıl buhar makinelerinin insan sağlığına çok zararlı dumanlar yaydığı için işçiler tarafından haklı olarak kırıldığı',
      'Luddite\'lerin "teknolojiden/yenilikten korkan cahiller" olduğu kurgusunun (yalanının); işçilerin aslında makinelerin ardındaki "kapitalist sömürüye (haklarının gasp edilmesine)" karşı başlattıkları o onurlu isyanı karalamak ve değersizleştirmek için uydurulduğu',
      'Dokuma işçilerinin sadece ahşap tezgâhları kullanmayı sevdikleri için demir makinelere estetik olarak karşı çıktıkları',
      'İsyanın sadece kraliyet ordusunu zayıflatmak için kurgulanan siyasi bir komplo olduğu'
    ],
    correct: 1,
    explanation: 'Luddite\'lerin teknoloji cahili gibi yansıtılması yalanını çürüterek; asıl isyanın makineye değil, patronların makineyi kullanarak maaşları düşürmesine (sömürüye/kapitalizme) karşı yapılan bir isyan olduğu gerçeğini açıklar.'
  },
  {
    title: 'Kolyma Otoyolu (Kemik Yolu)',
    passage: 'Rusya\'nın dondurucu ve uçsuz bucaksız Sibirya bölgesinde, Yakutsk ile Magadan arasında 2.000 kilometrelik devasa bir otoyol uzanır: "Kolyma Otoyolu". Ancak bu yolu haritadaki diğer yollardan ayıran korkunç bir özellik vardır; bu yolun diğer adı "Kemikler Yolu"dur (Road of Bones). Stalin döneminde (1930\'larda) bu otoyol, Gulag adı verilen Sovyet çalışma kamplarındaki yüz binlerce siyasi mahkûm (muhalif) tarafından inşa edildi. Eksi 50 derece soğukta çalışan mahkûmlar yorgunluktan veya donarak öldüklerinde, permafrost (buzul) tabakası çok sert olduğu için onları toprağa gömmek imkânsızdı. Çözüm neydi? Sovyet yönetimi ölen mahkûmların bedenlerini (kemiklerini) doğrudan otoyolun "beton ve çamur harcının" içine gömdü ve yolu onların üzerinde yükseltti! Kolyma Otoyolu; otokratik ve tiranlık rejimlerinin "kalkınma ve altyapı" adı altında inşa ettikleri o devasa ve övündükleri medeniyet projelerinin; bizzat o rejimin katlettiği insanların kanı, kemiği ve sessiz feryatları üzerine inşa edilmiş "asfalttan birer toplu mezar" olduğunun en iğrenç (ve somut) kanıtıdır.',
    questionStem: 'Kolyma Otoyolu\'nun (Kemik Yolu\'nun) inşası, tiranlık rejimleri ve onların övündükleri "büyük kalkınma/altyapı projeleri" hakkında neyin karanlık bir metaforudur?',
    options: [
      'Soğuk iklimlerde inşaat teknolojisinin ne kadar başarılı ve dayanıklı köprüler yarattığının',
      'Eski çağlardan kalan dinozor kemiklerinin Rusya\'da asfalt malzemesi olarak kullanılmasının',
      'Otoriter rejimlerin (diktatörlerin) devasa ve övünülesi "medeniyet/altyapı (yol)" projelerinin; aslında o sistemi inşa eden ezilmiş, katledilmiş insanların (muhaliflerin) kanı ve kemikleri üzerine kurulmuş "asfalta dökülmüş birer vahşet anıtı (toplu mezar)" olduğunun',
      'Siyasi mahkûmların her zaman yol yapımından ziyade madencilik sektöründe kullanılması gerektiğinin'
    ],
    correct: 2,
    explanation: 'Ölen mahkûmların kemiklerinin asfaltın (harcın) içine gömülmesi; diktatörlerin o büyük ve şatafatlı "kalkınma (yol)" projelerinin aslında ezilen/katledilen insanların kanı/kemikleri üzerine inşa edilmiş vahşi birer toplu mezar olduğunu sembolize eder.'
  },
  {
    title: 'Halifax Patlaması (İletişimsizliğin Kıyameti)',
    passage: '1917 yılında Kanada\'nın Halifax limanına iki gemi yanaşıyordu. Biri, içi ağzına kadar (tam 3.000 ton) TNT, pikrik asit ve uçak yakıtı dolu Fransız cephane gemisi "Mont-Blanc" idi; diğeri ise Norveç yardım gemisi "Imo". Kaptanlar limanın dar girişinde birbirlerini gördüler. Mont-Blanc, "Benim içim ağzına kadar patlayıcı dolu, yol verin!" anlamında düdükler çalıyor ve uyarı bayrakları (kırmızı) çekiyordu. Ancak Imo\'nun kaptanı kuralları yanlış anladı, geri vitese taktı derken iki gemi limanın ortasında (çok yavaşça) çarpıştı. Sadece küçük bir kıvılcım çıktı. 20 dakika sonra patlayan Mont-Blanc, insanoğlunun o güne kadar icat ettiği nükleer olmayan "en büyük insan yapımı (yapay) patlamayı" yarattı! Tüm Halifax şehri haritadan silindi, saniyeler içinde 2.000 kişi buharlaştı, devasa bir tsunami kenti yıktı geçti. Halifax felaketi; büyük fırtınaların veya düşman ordularının değil; sadece iki insanın "yanlış anlama, iletişim kopukluğu ve inatlaşması" gibi en sıradan insani hataların bile, nasıl okyanusları buharlaştıran devasa bir kıyamete ve şehri yakan bir silaha dönüşebileceğinin tarihi şamarıdır.',
    questionStem: '1917 Halifax Patlaması (iki geminin çarpışması), insanlık ve felaketler bağlamında yazar tarafından neyin trajik (ve ironik) sonucu olarak sunulmuştur?',
    options: [
      'Gemilerin radyo sistemlerinin okyanus ortasında her zaman bozulduğunun ve iletişimi kestiğinin',
      'Nükleer bombaların henüz icat edilmeden önce bile okyanuslarda devasa sarsıntılar yaratıldığının',
      'Koca bir şehri (ve binlerce insanı) yok eden kıyametlerin sadece düşman ordularından veya doğa olaylarından değil; kibrin, yanlış anlamanın ve "sıradan bir iletişim kopukluğunun (insani hatanın)" büyümesiyle saniyeler içinde ortaya çıkabileceği gerçeğinin',
      'Kanada hükümetinin gemi trafiğini yönetmek için kullandığı haritaların tamamen yanlış olduğunun'
    ],
    correct: 2,
    explanation: 'Düşman ordusu veya fırtına yokken, sadece iki kaptanın bayrakları/düdükleri yanlış anlaması (iletişim hatası/inat) yüzünden dünyanın en büyük patlamasının (kıyametin) yaşanması; basit insani iletişimsizliğin ve hatanın nasıl şehri yakan bir kâbusa (ironiye) dönüştüğünü sunar.'
  },
  {
    title: 'Karanlık Madde (Cehaletin Okyanusu)',
    passage: 'Geceleri gökyüzüne bakıp yıldızları, galaksileri ve o muazzam ışıltılı evreni gördüğümüzde her şeyi bildiğimizi (evreni fethettiğimizi) sanırız. Ancak astrofizikçiler evrenin kütlesini ölçtüklerinde, o meşhur ve kibir yıkan "Karanlık Madde" (Dark Matter) kâbusuyla yüzleştiler. Görebildiğimiz, dokunabildiğimiz, ışık yayan ve teleskoplarımıza yansıyan o tüm galaksiler, bulutsular ve gezegenler (bütün o şatafatlı evren), kâinatın toplam kütlesinin sadece %15\'ini oluşturur! Geriye kalan %85\'lik o devasa ve korkunç kısım ise; ışık yaymayan, üzerine ışık düşmeyen, ne olduğunu, neden yapıldığını ve nerede durduğunu asla "bilmediğimiz" o gizemli ve devasa "Karanlık Madde" okyanusudur. Bilim dünyasının bu keşfi; insan aklının aslında o devasa ve karanlık bir okyanusun üzerinde sadece küçücük, parlak bir köpük parçasına (yıldızlara) bakarak okyanusu çözdüğünü sanan çaresiz ve kör bir kâşif (cehalet) olduğunun astronomik itirafıdır.',
    questionStem: '"Karanlık Madde"nin evrenin %85\'ini oluşturduğunun (ve görünmez olduğunun) keşfi, insanlık ve bilim algısı hakkında neyi ifşa eder?',
    options: [
      'Gelecekte teleskopların merceklerinin geliştirilmesiyle evrendeki her şeyin net bir şekilde görülebileceğini',
      'İnsanoğlunun evreni tamamen anladığını (fethettiğini) sandığı kibrini yıkarak; aslında bizim sadece %15\'lik küçücük bir köpüğe bakarak o %85\'lik devasa, gizemli ve tamamen "bilinmez (karanlık)" olan cehalet okyanusumuzu (küçüklüğümüzü) gözden kaçırdığımızı',
      'Güneş ışığının uzayın karanlık bölgelerinde yavaş yavaş soğuyarak maddeye dönüştüğünü',
      'Uzay boşluğunun oksijen yetersizliği nedeniyle her zaman karanlık görünmek zorunda olduğunu'
    ],
    correct: 1,
    explanation: 'Gördüğümüz yıldızların sadece %15 olması ve geri kalan %85\'in (Karanlık Maddenin) ne olduğunun asla bilinmemesi; insanın evreni anladığı kibrini yıkarak, aslında devasa bir "bilinmezlik (cehalet) okyanusunun" içinde sadece küçücük bir köpüğe bakan (kör) bir varlık olduğunu ifşa eder.'
  },
  {
    title: 'Taiping İsyanı (Kırık Zihnin Kıyameti)',
    passage: '19. yüzyılda Çin\'de yaşayan Hong Xiuquan adlı genç, devlet memurluğu sınavlarına defalarca girip başarısız oldu. Girdiği ağır depresyon (ve ateşli hastalık) sonrasında şiddetli bir halüsinasyon gördü: Rüyasında "Kendisinin İsa Mesih\'in küçük kardeşi olduğunu ve Çin\'i şeytanlardan (Qing Hanedanı\'ndan) temizlemekle görevlendirildiğini" iddia etti. Normalde tımarhaneye kapatılması gereken bu başarısız öğrencinin hezeyanlarına, o dönemki fakir, ezilmiş ve çaresiz Çin köylüleri (umut aradıkları için) ölümüne inandılar! Hong, etrafına topladığı o devasa fanatik köylü ordusuyla devlete savaş açtı ve tarihin gördüğü en kanlı iç savaşlarından biri olan "Taiping İsyanı" patlak verdi. Savaşın sonunda (1864\'te) tam 20 MİLYON İNSAN hayatını kaybetti! Taiping İsyanı; kitlelerin (toplumun) sefalet ve umutsuzluk içinde kıvrandığında; başarısız, hasta ve delüzyonlar (halüsinasyonlar) gören tek bir adamın kırık zihnini bile "kutsal bir kurtarıcı" sanarak (ve kılıç çekerek) o tek kişilik deliliği nasıl 20 milyon ölümlük (apokaliptik) devasa bir kıyamete çevirebildiğinin tarihi kâbusudur.',
    questionStem: 'Hong Xiuquan\'ın halüsinasyonlarından doğan Taiping İsyanı (ve 20 milyon ölüm), toplum ve lider ilişkisi hakkında neyin trajik (ve korkutucu) bir örneğidir?',
    options: [
      'Devlet memurluğu sınavlarının zorluğunun eğitimli gençleri her zaman başarılı askerlere dönüştürdüğünün',
      'Eski çağlarda bulaşıcı hastalıkların ordular üzerinde yarattığı biyolojik zayıflamanın ve hezimetin',
      'Toplumun aşırı sefalet ve çaresizlik içinde (kurtarıcıya muhtaç) olduğu dönemlerde; zihinsel olarak hasta (ve delüzyonlar gören) tek bir adamın (hevesinin) bile, körü körüne inanarak peşinden gidildiğinde devasa, apokaliptik bir kitle imhasına (cinnete) dönüşebileceğinin',
      'Çin kültürünün Batılı dini figürlere (İsa\'ya) her zaman bilimsel bir açıdan yaklaşarak felsefe ürettiğinin'
    ],
    correct: 2,
    explanation: 'Sınavı kazanamayan (halüsinasyon gören) adamın "İsa\'nın kardeşiyim" yalanına ezilmiş köylülerin (çaresizlikten) inanıp peşinden giderek 20 milyon ölmesi; toplumun çaresizlik/sefalet anında, hasta bir zihnin deliliğini bile kurtarıcı sanarak devasa bir kıyamete dönüştürebileceğinin kanıtıdır.'
  },
  {
    title: 'Paskalya Adası Çöküşü (Tanrılar İçin İntihar)',
    passage: 'Pasifik Okyanusu\'nun tam ortasında, medeniyetten binlerce kilometre uzaktaki Paskalya Adası\'nda (Rapa Nui) yaşayan yerliler, adanın kıyılarına o devasa, ikonik taş heykelleri (Moai) diktiler. O taşlar o kadar ağırdı ki, onları taşımak için adadaki tüm palmiye ağaçlarını kesip kütük (kızak) olarak kullandılar. Kabileler, Tanrılara yaranmak ve daha büyük heykeller (statü) dikmek uğruna birbirleriyle yarıştıkça kestikleri ağaçların sayısı arttı. Sonunda adada tek bir ağaç bile kalmadı! Ağaç olmayınca kano yapamadılar (balık tutamadılar), ev yapamadılar, toprak erozyona uğradı ve kuşlar gitti. Adada sıkışıp kalan o "inançlı ve kibirli" halk, açlıktan çıldırarak sonunda birbirlerini yedi (yamyamlık) ve yok oldu! Paskalya Adası (Ekosid); insanoğlunun o kendi yarattığı sahte "inançlarına, heykellerine (ideolojilerine ve tanrılarına)" tapınmak (onları yüceltmek) uğruna; bizzat kendi hayatını (ve üzerinde yaşadığı ekosistemi) gözünü kırpmadan nasıl körü körüne kesip (kendi sonunu getirip) ekolojik bir intihara sürüklediğinin kapalı kutudaki en net laboratuvar (ve uyarı) deneyidir.',
    questionStem: 'Paskalya Adası yerlilerinin heykelleri (Moai) taşımak için tüm ağaçları kesip sonunda yok olmaları (Ekosid), insan doğasına dair hangi evrensel (ve yıkıcı) eğilimi sembolize eder?',
    options: [
      'Volkanik patlamaların adadaki bitki örtüsünü ve oksijeni tamamen yok ederek yaşamı bitirmesini',
      'İnsanların, kendi yarattıkları o sahte (ve kibirli) ideolojilerini/statülerini (heykelleri/tanrıları) yüceltmek uğruna; bizzat üzerinde yaşadıkları (ve hayatlarını borçlu oldukları) doğal kaynakları ve ekosistemi göz göre göre yok ederek "kolektif ve ekolojik bir intihara" yürüme körlüğünü',
      'Ada ikliminin insan psikolojisini bozarak kabile savaşlarını kasten kışkırtmasını',
      'Ağaçların kesilmesinin aslında tarım arazisi açmak için yapılmış zorunlu bir ekonomik hamle olduğunu'
    ],
    correct: 1,
    explanation: 'Heykel (tanrı/statü) taşımak uğruna adadaki tüm ağaçları kesip açlıktan birbirlerini yemeleri; insanın kendi kurguladığı ideolojiler (kibir) uğruna, aslında kendi hayat kaynağını (doğayı/ekosistemi) bilerek yok ettiği (ekolojik intihar/ekosid) körlüğünü sembolize eder.'
  },
  {
    title: 'Boston Pekmez Felaketi (Açgözlülüğün Tsunami\'si)',
    passage: 'Tarihteki felaketler genellikle suyla, ateşle veya depremle gelir. Ancak 15 Ocak 1919\'da Amerika\'nın Boston şehrini vuran felaket, "Endüstriyel Açgözlülüğün" ne kadar trajikomik ve ölümcül olabileceğini gösterdi. Şehrin ortasında, alkol ve silah yapımında kullanılan (2.3 milyon galonluk) devasa bir "Pekmez" (Molasses) tankı vardı. Şirket, kârını artırmak için tankı kapasitesinin üzerinde doldurmuş ve ince (ucuz) bir çelik kullanmıştı. Hava aniden ısındığında o devasa çelik tank patladı! 8 metre yüksekliğinde, saatte 56 kilometre hızla ilerleyen kahverengi ve yapışkan bir "Pekmez Tsunami\'si" sokaklara daldı. İnsanlar, atlar ve evler o yapışkan, tatlı ve kaynar dalganın altında ezilerek (veya havasızlıktan boğularak) can verdi (21 ölü). İtfaiyeciler enkazı haftalarca deniz suyuyla yıkamak zorunda kaldı. Boston Pekmez Felaketi; kâr hırsıyla kuralları esneten (malzemeden çalan) kapitalist şirketlerin; en masum, tatlı ve zararsız sanılan bir maddeyi (pekmezi) bile saniyeler içinde bütün bir şehri ezen karanlık, yapışkan ve ölümcül bir kıyamet (tsunami) makinesine çevirebildiğinin absürt anıtıdır.',
    questionStem: 'Boston Pekmez Felaketi (tankın patlayıp şehri pekmez tsunamisinin vurması), endüstri ve kapitalizm hakkında neyin (absürt) bir kanıtıdır?',
    options: [
      'Pekmezin içine karışan kimyasalların havayla temas edince nükleer bir bomba etkisi yarattığının',
      'Sadece su ve rüzgârın değil, tatlı yiyeceklerin de doğada kendi kendine fırtına yaratabileceğinin',
      'Kuralları hiçe sayan, ucuz malzeme kullanan (şirketlerin kâr hırsının/açgözlülüğünün); en masum ve absürt sanılan bir maddeyi (pekmezi) bile saniyeler içinde şehri ezip geçen ölümcül ve yapışkan bir kıyamet silahına (tsunamiye) çevirebileceğinin',
      'Boston şehrinin altyapısının her türlü sıvı akıntısına karşı tamamen korumasız (açık) olduğunun'
    ],
    correct: 2,
    explanation: 'Şirketin ucuza kaçıp tankı fazla doldurması yüzünden patlayan pekmezin şehri ezmesi; kâr hırsı (kapitalizm) ve ihmallerin en absürt/masum nesneyi bile şehri yutan ölümcül bir tsunamiye/kıyamete çevirebildiğini (endüstriyel açgözlülüğün sonucunu) kanıtlar.'
  },
  {
    title: 'Şarbon (Gruinard) Adası (Bilimin Vebası)',
    passage: 'İkinci Dünya Savaşı sırasında İngiliz ordusu, Nazileri yenmek için bombalar yerine biyolojik silah kullanmaya (Vejetaryen Harekâtı) karar verdi. Kötü şöhretli Anthrax (Şarbon) bakterisini kasten keten tohumu keklerine yerleştirip Almanya\'nın hayvanlarına ve tarlalarına atmayı (halkı açlıktan ve vebadan öldürmeyi) planladılar. Bu cehennem silahını test etmek için İskoçya açıklarındaki "Gruinard Adası"na koyunlar bağladılar ve şarbon bombalarını patlattılar. Koyunlar günler içinde kan kusarak öldü. Ancak işin korkunç tarafı şu oldu: Şarbon sporu (bakteri) adanın toprağına öylesine işledi ve öylesine dirençliydi ki, o küçücük Gruinard Adası tam "50 YIL" boyunca insanlığa tamamen yasaklı, ölümcül bir karantina (kıyamet) bölgesine dönüştü (Ancak 1990\'larda kimyasallarla zorla temizlenebildi). Gruinard Adası; devletlerin savaş (zafer) hırsıyla bilimi nasıl bir şeytana çevirdiğinin ve doğanın toprağına, kontrol edemeyeceği ve yarım asır sürecek (kendi kendini zehirleyen) görünmez bir ölümü (şarbonu) kendi elleriyle ektiğinin dondurucu belgesidir.',
    questionStem: 'İngilizlerin şarbon (Anthrax) deneyi yaptığı Gruinard Adası\'nın "50 yıl boyunca ölümcül ve yasaklı kalması", askeri hırslar ve "biyolojik savaş" hakkında neyin metaforudur?',
    options: [
      'Hayvanların biyolojik hastalıklara karşı insanlardan çok daha dayanıklı olduğunun',
      'İngilizlerin okyanus sularını temizlemek için adayı kasten izole etmek istediğinin',
      'Devletlerin "savaş ve zafer hırsıyla" doğaya (ve toprağa) attığı o karanlık (biyolojik) silahların (virüslerin/bakterilerin); kontrol edilemeyen, geri döndürülemeyen ve on yıllarca (kendi yaratanı bile zehirleyen) kalıcı bir kıyamet/karantina yarattığı gerçeğinin',
      'Şarbon bakterisinin aslında uzaydan düşen göktaşlarıyla dünyaya geldiğinin ispatı'
    ],
    correct: 2,
    explanation: 'Şarbon deneyi yapılan adanın 50 yıl ölümcül (ve yasaklı) kalması; devletlerin savaş (zafer) hırsıyla bilimi kullanarak doğaya attıkları o kontrol edilemez (biyolojik) silahların, toprağı on yıllarca zehirleyen ve kendi yaratanını bile vuran kalıcı bir kıyamet/karantina (lanet) olduğunun metaforudur.'
  },
  {
    title: 'Goldilocks Kuşağı (Kozmik Bıçak Sırtı)',
    passage: 'Gezegenimizin neden yaşama ev sahipliği yaptığını düşünürken oksijene veya suya odaklanırız. Oysa astronomide asıl kural, o dondurucu ve incecik "Goldilocks Kuşağı"dır (Yaşanabilir Bölge). Masaldaki ayının çorbasının "ne çok sıcak ne de çok soğuk, tam kararında" olmasına atıfta bulunan bu kavram, Dünya\'nın Güneş\'e olan o milimetrik mesafesidir. Eğer Dünya Güneş\'e sadece %5 oranında daha "yakın" olsaydı, okyanuslarımız anında buharlaşacak ve Venüs gibi sülfür yağan, 400 derecelik kavurucu bir cehenneme dönecektik. Sadece %5 daha "uzak" olsaydı, okyanuslar donacak ve Mars gibi buzdan, sessiz ve ölü bir kayaya dönüşecektik. Dünyadaki tüm aşklarımız, nefretlerimiz, savaşlarımız, sanatımız ve internetimiz; uçsuz bucaksız ve ölümcül uzay boşluğunda, o donmak ile yanmak arasında sıkışmış; evrenin bize lütfettiği o tek, incecik ve kırılgan (kozmik bıçak sırtı) yörüngenin üzerinde sallanan (tesadüfi) bir cambazlıktan başka bir şey değildir.',
    questionStem: 'Astronomideki "Goldilocks Kuşağı" (Dünya\'nın Güneş\'e olan mesafesinin tam kararında olması), insanlığın evrendeki konumu hakkında neyin (felsefi/fiziksel) sembolüdür?',
    options: [
      'Güneşin yaydığı enerjinin diğer galaksilerde her zaman yaşam yaratacak güce sahip olduğunun',
      'Tüm varoluşumuzun (ve medeniyetimizin); uzayın o acımasız karanlığında, donmak (Mars) ile yanmak (Venüs) arasındaki o "milimetrik, sarsılmaz ve son derece kırılgan/incecik (bıçak sırtı) dengeye" borçlu olduğumuz kozmik bir tesadüfün (cambazlığın) sembolü',
      'Dünya atmosferinin sadece kalın bulutlar sayesinde sıcaklığı hapsedebildiği gerçeği',
      'Kutuplardaki buzulların erimesinin gezegenin yörüngesini güneşe doğru yaklaştırdığı endişesi'
    ],
    correct: 1,
    explanation: 'Dünyanın güneşe %5 yakın olsa yanacağı, uzak olsa donacağı gerçeği (Goldilocks Kuşağı); tüm varoluşumuzun ve hayatımızın evrendeki o kırılgan, incecik ve milimetrik "kozmik bıçak sırtı (denge)" üzerinde sağlandığı (cambazlık) sembolüdür.'
  },
  {
    title: 'Ölü İnternet ve Phantosmia (Zihnin Çift Taraflı İllüzyonu)',
    passage: 'Ölü İnternet Teorisi, gördüğümüz o milyonlarca yorumun ve tartışmanın aslında sadece botların (Yapay Zekânın) kendi kendisiyle konuştuğu sahte bir "tiyatro/yankı odası" olduğunu iddia eder. İşin ilginç tarafı, insan beyninde bunun tamamen nörolojik bir karşılığı vardır: Phantosmia (Hayalet Koku). Bir odada hiç koku yokken, beyin kendi kendine (kısa devre yaparak) yanık plastik veya çürümüş et kokusu ürettiğinde; o koku, kişi için dışarıdaki gerçek bir elma kadar "fiziksel ve inandırıcıdır". Her ikisi de aynı felsefi kâbustur: Biri dışarıdaki bilgisayarların (algoritmaların), diğeri ise kafatasımızın içindeki o gri et parçasının (beynimizin) bize oynadığı bir oyundur. Hem dijital dünyada (ekranlarda) hem de nörolojik dünyada (kafatasımızda), "Gerçeklik (Dış Dünya)" dediğimiz şeyin aslında dışarıda somut ve kesin bir şekilde var olması gerekmez. Sadece doğru sensörlerin (veya algoritmaların) uyarılması, o hiçliği "milyonlarca insan" veya "keskin bir koku" olarak beynimizde (sahte bir simülasyon olarak) canlandırmaya fazlasıyla yeterlidir.',
    questionStem: 'Yazar, Ölü İnternet Teorisi ile Phantosmia (Hayalet Koku) hastalığını felsefi olarak hangi "ortak (karanlık)" paydada birleştirmektedir?',
    options: [
      'İkisinin de sadece gece uykusuz kaldığımızda ortaya çıkan geçici yorgunluk belirtileri olması',
      'Hem dijital ekrandaki "sahte kalabalığın (botların)" hem de beynin yarattığı "olmayan kokunun (kısa devrenin)", insana "dışarıda aslen (somut olarak) var olmayan bir hiçliği"; tamamen gerçekmiş gibi inandırıcı (ve sarsılmaz) bir simülasyon olarak kurgulatıp yaşatabilmesi (illüzyon gücü)',
      'Yapay zekânın gelecekte insan beynine çiplerle bağlanarak koku alma duyusunu tamamen silmesi',
      'İnternet kullanımının insan burnundaki hücreleri kurutarak kokuları algılamayı engellemesi'
    ],
    correct: 1,
    explanation: 'İnternetteki sahte bot yorumlarını ve beyindeki sahte (olmayan) koku algısını (Phantosmia); ikisinin de aslında "dışarıda var olmayan bir hiçliği/yalanı" insana tamamen gerçek (somut) bir simülasyon olarak yaşatabilme (algıyı kandırma/illüzyon) ortak paydasında birleştirir.'
  },
  {
    title: 'Çifte Yarık Deneyi (Gözlemcinin Yarattığı Evren)',
    passage: 'Fiziğin sadece aklımızı değil, gerçeklik algımızı da felç ettiği o deneyin adı "Çifte Yarık Deneyi"dir (Double-Slit Experiment). Bir tabancadan tek bir ışık parçacığını (fotonu) içinde iki ince yarık bulunan bir duvara fırlatırsınız. Eğer o fotonu kamerayla (veya dedektörle) "izlemezseniz", foton tıpkı bir su dalgası gibi davranır, aynı anda o "iki yarıktan birden" geçerek arka duvarda dalgalı (girişim) bir desen oluşturur. Yani foton aynı anda iki yerdedir! Ancak "Hangi yarıktan geçiyor bir bakalım" diyerek yarığın önüne bir "kamera (ölçüm cihazı/gözlemci)" yerleştirirseniz kâbus başlar. Foton o kameranın (bilincin) ona baktığını o saniye "fark eder" ve dalga olmaktan vazgeçip; tıpkı sıradan, katı ve uslu bir taş (parçacık) gibi o iki yarıktan sadece birinden geçerek arkada dümdüz iki çizgi bırakır! Bu olay (Gözlemci Etkisi), bize evrenin o dondurucu sırrını açar: Kâinattaki madde, biz arkamızı döndüğümüzde sabit, katı ve yerli yerinde duran bir kaya değildir. Biz ona bakmadığımızda evren "ihtimallerin (dalgaların) kaynadığı uçsuz bucaksız bir çorbadır." O çorbanın içinden o "tek, katı ve kesin" gerçekliği çekip çıkaran (çökerten) ve var eden tek şey, bizzat onu izleyen o "Bilinçli Gözün (Gözlemcinin)" ta kendisidir.',
    questionStem: 'Çifte Yarık Deneyi\'ndeki (fotonun izlendiğinde parçacık, izlenmediğinde dalga olması) "Gözlemci Etkisi", fiziksel gerçeklik hakkında hangi klasik (Newtoncu) dogmayı yıkar?',
    options: [
      'Gözlem kameralarının lenslerinin fotonların ışığını soğurarak kararttığı gerçeğini',
      'Işığın aslında sadece düz bir çizgide hareket eden katı bir ok olduğu şeklindeki eski yanılgıyı',
      'Evrenin (ve maddenin) "biz ona baksak da bakmasak da kendi başına sabit, katı ve değişmez bir gerçeklik olduğu (nesnellik)" inancını yıkarak; gerçekliğin (maddenin şeklinin), bizzat onu "ölçen ve izleyen o Bilincin/Gözlemcinin" müdahalesiyle şekil aldığı (çöktüğü) sarsıntısını',
      'Fotonların insan beyninden daha zeki varlıklar olup bizimle oyun oynadıkları paranoyasını'
    ],
    correct: 2,
    explanation: 'Fotonun izlendiği an dalgadan (ihtimallerden) çıkıp katı bir parçacığa (tek gerçeğe) dönüşmesi; gerçekliğin "bizden bağımsız, sabit ve katı" (Newtoncu nesnellik) olduğu inancını yıkarak, maddenin şeklini (gerçekliği) "Bilinçli Gözlemcinin" var ettiğini/çökerttiğini ispatlar.'
  }
];

export const bilimParagrafSorulari49: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_49.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_49[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim49-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_50 = [
  {
    title: 'Vulcan Gezegeni (Bilimin Uydurduğu Hayalet)',
    passage: '19. yüzyılda astronomlar büyük bir kriz yaşıyordu: Merkür gezegeninin yörüngesi, Isaac Newton\'ın o sarsılmaz (kutsal) fizik yasalarına uymuyor, hafifçe sapıyordu! O dönemin bilim insanları "Newton yanılmış olabilir mi?" demek yerine, akılalmaz bir kibre kapıldılar. Newton\'ın dogmasını kurtarmak için, Güneş ile Merkür arasında saklanan, görünmez ve kütleli "Vulcan" adında tamamen hayali bir gezegen uydurdular! Yıllarca teleskoplarla bu hayaleti aradılar, hatta bazıları "Gördüm!" diye yemin bile etti. Ta ki 1915\'te Albert Einstein gelip, "Görelilik Teorisi" ile uzay-zamanın büküldüğünü kanıtlayana ve Newton\'ın o bölgede gerçekten de çuvalladığını ispatlayana kadar. Vulcan gezegeni; "bilimsel aklın" bile, kendi mevcut inançlarını (ve otoritelerini) yıkmamak uğruna, gökyüzünde olmayan hayaletler (yalanlar) uydurmaya ne kadar yatkın ve kör bir muhafazakâr olabileceğinin astronomik anıtıdır.',
    questionStem: 'Astronomların Merkür\'ün yörüngesindeki sapmayı açıklamak için hayali "Vulcan Gezegeni"ni uydurmaları, bilim tarihi hakkında hangi tehlikeli (dogmatik) zaafı ispatlar?',
    options: [
      'O dönemki teleskopların merceklerinin güneş ışığı nedeniyle eriyerek yanlış görüntüler verdiğini',
      'Bilim insanlarının, güvendikleri eski ve kutsal kuralların (Newton yasalarının) çökebileceğini kabullenmektense; o dogmayı korumak uğruna hiç var olmayan sahte kurgulara (hayaletlere) inanacak kadar kör ve muhafazakâr (dogmatik) bir kibre düşebileceğini',
      'Uzaydaki gezegenlerin zamanla güneşin sıcaklığına dayanamayarak buharlaşıp yok olduklarını',
      'Einstein\'ın tüm uzay araştırmalarını sadece kâğıt üzerinde yaparak pratik bilimi reddettiğini'
    ],
    correct: 1,
    explanation: 'Newton\'un yasasının yanlış olabileceğini kabullenmek yerine hayali bir gezegen uydurmaları; bilim insanlarının bile mevcut inançlarını (dogmalarını) korumak uğruna gerçeği büküp hayaletlere (sahte kurgulara) inanma zaafını ispatlar.'
  },
  {
    title: 'Deneyim Makinesi (Nozick ve Sahte Cennet)',
    passage: 'Amerikalı filozof Robert Nozick, beyninizi felç edecek o düşünce deneyini sorar: "Sizi, beyninize bağlanan devasa bir \'Deneyim Makinesi\'ne soksak... Bu makine size hayatınız boyunca sadece mutluluk, zafer, mükemmel bir aşk ve acısız bir cennet simülasyonu yaşatsa. Üstelik makinede olduğunuzu tamamen unutsanız. O makineye bağlanmayı (gerçek hayatı tamamen terk etmeyi) kabul eder miydiniz?" Çoğu insan bu kusursuz ve acısız cenneti şiddetle reddeder! Neden mi? Çünkü insanoğlunun en derin arzusu "sadece mutlu olmak (haz almak)" değildir. Bizim için "gerçekliğin" ta kendisi, yaşanılan o otantik, acı verici ve kendi irademizle başardığımız zorlu hayat; beynimize şırınga edilen o en kusursuz, uyuşturucu ve sahte mutluluk simülasyonundan çok daha değerli ve onurludur. İnsan, içi boş bir cennettense, kanayan ama "gerçek" olan bir cehennemi tercih eden yegâne (ve trajik) varlıktır.',
    questionStem: 'Robert Nozick\'in "Deneyim Makinesi" düşünce deneyi, insan doğasının (ve amaçlarının) sadece "haz ve mutluluk" arayışına dayandığı fikrine karşı neyi savunur?',
    options: [
      'İnsanların teknolojik cihazlardan (elektrik çarpmalarından) içgüdüsel olarak korktuğunu',
      'İnsanın asıl (yüce) amacının sadece "haz almak (mutlu olmak)" olmadığını; gerçekliğin (hakikatin), kendi irademizle yaşanan acıların ve sahiciliğin, dışarıdan verilen kusursuz ama sahte bir mutluluktan (simülasyondan) çok daha değerli (onurlu) olduğunu',
      'Mutluluğun sadece çok para kazanarak fiziksel dünyada elde edilebilecek ticari bir kavram olduğunu',
      'Sanal gerçeklik gözlüklerinin insan beyninde kalıcı görme kayıpları yarattığını'
    ],
    correct: 1,
    explanation: 'İnsanların sahte/kusursuz bir cennet makinesini reddetmesi; insanın sadece haz peşinde koşan bir canlı olmadığını, "hakikatin, sahiciliğin ve kendi iradesiyle yaşanan acının" sahte bir mutluluktan daha değerli olduğunu kanıtlar.'
  },
  {
    title: 'Aşil ve Kaplumbağa (Zeno\'nun Mantık Kâbusu)',
    passage: 'Antik Yunan filozofu Elealı Zeno, hareketin ve hızın aslında mantıksal olarak imkânsız (bir illüzyon) olduğunu kanıtlamak için o meşhur paradoksu kurdu: Truva savaşının efsanevi, en hızlı kahramanı Aşil ile bir kaplumbağa yarışa başlar. Kaplumbağaya 100 metre avans verilir. Aşil 100 metre koşup kaplumbağanın ilk başladığı yere geldiğinde, kaplumbağa az da olsa (örneğin 10 metre) ilerlemiş olacaktır. Aşil o 10 metreyi koştuğunda, kaplumbağa yine 1 metre ilerlemiş olacaktır. Aşil o 1 metreyi koştuğunda, kaplumbağa 1 santim ilerleyecektir! Mesafeler sonsuz kere küçülecek (bölünecek) ama Aşil mantıksal olarak kaplumbağaya ASLA yetişemeyecektir! Fiziksel dünyada Aşil kaplumbağayı saniyeler içinde ezip geçer; ancak "Zeno Paradoksu", insan zihninin o kusursuz, sivri ve soğuk "Matematiğinin (Mantığının)"; fiziksel dünyanın o akan, kaba (ve pratik) gerçekliğiyle ne kadar korkunç bir çatışma (ve felç) içinde olduğunun ebedi bir kâbusudur.',
    questionStem: 'Zeno\'nun "Aşil ve Kaplumbağa" paradoksu, felsefi olarak "mantık (matematik) ile fiziksel gerçeklik" arasında nasıl bir çıkmazı (çatışmayı) sergiler?',
    options: [
      'Kaplumbağaların eski çağlarda efsanevi hızlara sahip mutant hayvanlar olduğunu',
      'Kusursuz işleyen soyut insan "mantığının ve matematiğinin (sonsuz bölünmenin)"; fiziksel dünyanın o basit, pratik ve akıp giden gerçekliğine (harekete) uyarlandığında, akıl sınırlarını donduran çıkışsız bir kâbusa (illüzyona/felce) yol açtığını',
      'Antik Yunan sporcularının yarışlarda strateji bilmediği için hep geride kaldığını',
      'Zamanın sadece ileriye aktığı için mesafelerin ölçülemeyecek kadar esnediğini'
    ],
    correct: 1,
    explanation: 'Mantıken Aşil\'in kaplumbağayı hiç geçememesi ama fiziken anında geçmesi; soyut insan mantığının (matematiğin) fiziksel gerçekliğe uyarlandığında aklı felç eden bir kâbus (çatışma) yarattığını gösterir.'
  },
  {
    title: 'Rosetta Taşı (Dilsiz Tarihin Anahtarı)',
    passage: '1799 yılında Mısır\'ı işgal eden Napolyon\'un askerleri, kumların arasında siyah bir bazalt taşı buldular. Üzerinde aynı metin üç farklı dilde yazılmıştı: Antik Mısır Hiyeroglifleri, Demotik (halk Mısır dili) ve Antik Yunanca! O güne kadar Mısır piramitlerindeki ve tapınaklarındaki o kuş, yılan, göz resimlerinden oluşan "hiyerogliflerin" sadece estetik birer büyü (veya anlamsız resimler) olduğu sanılıyor, binlerce yıllık Mısır tarihi "sağır ve dilsiz" bir karanlıkta uyuyordu. Fransız dâhi Jean-François Champollion, Yunanca metin üzerinden yola çıkarak 1822\'de o resimlerin (hiyerogliflerin) aslında "sesleri" temsil eden birer alfabe olduğunu çözdü! "Rosetta Taşı", arkeolojik bir kayadan çok daha fazlasıdır: O; insanlığın silinmiş, ölmüş ve karanlıkta boğulmuş olan binlerce yıllık koskoca bir hafızasını (geçmişini), tek bir kilit taşı (tercüme) ile sonsuz bir sessizlikten kurtarıp yeniden "konuşturan" aydınlanmanın ve dillerin evrensel zaferidir.',
    questionStem: 'Rosetta Taşı\'nın bulunması ve şifresinin çözülmesi, insanlık tarihi ve medeniyet mirası açısından neyin felsefi bir sembolüdür?',
    options: [
      'Taş oymacılığının Fransızlar tarafından icat edildiği ve Mısır\'a sonradan götürüldüğü gerçeğinin',
      'Unutulmuş, ölmüş ve tamamen sessizliğe (anlamsızlığa) gömülmüş devasa bir geçmişin (medeniyet hafızasının); "dilin ve tercümenin (anahtarın)" gücü sayesinde aydınlatılarak o karanlık dilsizlikten kurtarılmasının (yeniden konuşturulmasının) zaferini',
      'Eski Yunancanın aslında Mısır alfabesinden türeyerek Avrupa\'ya yayıldığı bilgisinin',
      'Napolyon\'un askerlerinin Mısır\'daki tüm antik eserleri çalarak kendi ülkelerine götürdüğü gerçeğinin'
    ],
    correct: 1,
    explanation: 'Taşın bulunmasıyla hiyerogliflerin çözülmesi; ölmüş/dilsiz kalmış binlerce yıllık bir medeniyet hafızasının, dilin (anahtarın) gücüyle sessizlikten kurtarılıp yeniden aydınlatılmasının (konuşturulmasının) sembolüdür.'
  },
  {
    title: 'Cehalet Peçesi (John Rawls ve Kör Adalet)',
    passage: 'Siyasi bir mecliste yeni ve "tamamen adil" bir toplum anayasası yazacağınızı düşünün. Siyaset filozofu John Rawls, insanların bunu yaparken hep bencil olacaklarını (zenginlerin fakirleri ezeceğini) bildiği için o efsanevi "Cehalet Peçesi" (Veil of Ignorance) kavramını kurguladı. Rawls der ki: "Adil bir sistemi ancak şu şartla kurabilirsiniz; odaya gireceksiniz ve kimliğinize dair her şeyi (zengin mi fakir mi, beyaz mı siyah mı, sağlıklı mı felçli mi, kadın mı erkek mi olduğunuzu) tamamen UNUTACAKSINIZ! Dışarı çıktığınızda bu kimliklerden hangisine sahip olacağınızı bilmeden bir sistem kurun." Bu dondurucu bilinmezlik karşısında (ya felçli ve fakir biri olarak dışarı çıkarsam korkusuyla), o anki en bencil insan bile, toplumun "en zayıf, en fakir ve en dezavantajlı" kesimini koruyacak kurallar (sosyal devlet) yazmak zorunda kalacaktır! Gerçek adalet, insanların ahlaklı ve merhametli olmasından değil; tam aksine, kendi konumlarını bilmedikleri o "korkutucu ve mutlak bir körlükten (cehalet peçesinden)" doğar.',
    questionStem: 'John Rawls\'un "Cehalet Peçesi" düşünce deneyi, toplumda "gerçek adaletin" sağlanabilmesi için bireylerin (veya yasa yapıcıların) hangi duruma sokulması gerektiğini savunur?',
    options: [
      'Toplumu yönetecek kişilerin en zengin ve en asil ailelerin çocukları arasından seçilmesini',
      'İnsanların yasa yaparken, toplumdaki kendi "cinsiyet, zenginlik, sağlık ve ırk (kimlik)" durumlarını tamamen unuttukları mutlak bir körlük (bilinmezlik) içine sokularak; en dezavantajlı olma korkusuyla herkesi eşit koruyan yasalar yapmaya mecbur bırakılmasını',
      'Hakimlerin ve savcıların yasa yaparken gözlerine siyah ve fiziksel bir bant takmasını',
      'Hapishanelerdeki suçluların hafızalarının tamamen silinerek yeniden topluma kazandırılmasını'
    ],
    correct: 1,
    explanation: 'Kişinin kendi kimliğini (fakir mi zengin mi olacağını) unuttuğu o "Cehalet Peçesi" arkasında yasa yapması; en zayıf konumda olma korkusuyla (bencillikle bile olsa) toplumu eşit ve adil koruyacak yasalar yazmaya mecbur kalacağını savunur.'
  },
  {
    title: 'Lady Macbeth Etkisi (Ahlakın Sabunu)',
    passage: 'Shakespeare\'in ölümsüz karakteri Lady Macbeth, kocasını cinayete azmettirdikten sonra ağır bir vicdan azabı krizine girer ve ellerinde aslında var olmayan (hayali) kan lekelerini temizlemek için saatlerce çığlık atarak ellerini yıkamaya çalışır. Modern psikologlar bu olayın sadece edebi bir kurgu olmadığını laboratuvarda kanıtladılar! Deneklere yalan söyletildiğinde, dedikodu yaptırıldığında veya ahlak dışı bir eylem hayal ettirildiğinde; bu kişilerin deney çıkışında "sabun, mendil veya el dezenfektanlarına" diğer insanlardan çok daha fazla (ve şiddetle) yöneldikleri görüldü. "Lady Macbeth Etkisi" adı verilen bu biyolojik refleks, insanoğlunun o acınası çaresizliğini ifşa eder: Beynimiz, işlediğimiz "soyut, ruhsal ve ahlaki (görünmez)" kirliliği, fiziksel bir çamur (mikrop) gibi algılamaktadır! İnsan, kirlenen vicdanını ve çürüyen ruhunu, sıcak bir su ve köpüren bir sabunla yıkayarak temizleyebileceğine inanan o evrimsel ve trajikomik bir illüzyonun esiridir.',
    questionStem: 'Psikolojideki "Lady Macbeth Etkisi" (Ahlaki suç işleyenlerin sabuna ve suya yönelmesi), insan zihninin "vicdan ve suçluluk" karşısındaki hangi fiziksel (illüzyon) tepkisini kanıtlar?',
    options: [
      'Cinayet işleyen suçluların olay yerinde mutlaka DNA (ter veya kan) bırakma eğiliminde olduğunu',
      'Ağır kokulu kimyasalların insan beyninde yalan söyleme dürtüsünü doğrudan tetiklediğini',
      'Beynimizin; yalan ve kötülük gibi "soyut/ahlaki kirlilikleri" tamamen "fiziksel bir kirlenme (mikrop)" gibi algılayarak; o soyut vicdan azabını su ve sabunla (fiziksel bir temizlikle) yıkayıp arındırabileceğini sanma illüzyonunu (refleksini)',
      'Soğuk suyla el yıkamanın insan beynindeki hafıza merkezini dondurarak geçmiş anıları sildiğini'
    ],
    correct: 2,
    explanation: 'Ahlaki suç (yalan) işleyenlerin sabuna saldırması; beynin "soyut/ahlaki kirlenmeyi" bedensel/fiziksel bir mikrop gibi algılayıp onu suyla (fiziksel yolla) yıkayarak arındırabileceğini sanması refleksidir.'
  },
  {
    title: 'Alfred Wegener (Dışlanan Hakikat)',
    passage: '1912 yılında Alman meteorolog Alfred Wegener, dünya haritasına bakarken Güney Amerika\'nın doğu kıyısı ile Afrika\'nın batı kıyısının "kırılmış bir yapbozun iki parçası gibi" birbirine kusursuzca oturduğunu fark etti. Fosilleri inceledi ve o dondurucu gerçeği (Kıta Kayması Teorisini) haykırdı: "Kıtalar sabit birer kaya değildir; milyonlarca yıl önce Pangea adında tek bir süper kıtaydı, sonra parçalanıp (okyanusların üzerinde sallar gibi) birbirlerinden yavaşça uzaklaştılar!" Peki bilim dünyası ne yaptı? Dönemin o kibirli, elit ve otoriter jeologları Wegener\'le alay ettiler, ona "meteorolog olduğu için kendi işine bakmasını" söylediler ve hayatı boyunca onu akademik dünyadan dışladılar. Wegener, Grönland buzullarında gerçeği ararken donarak yalnız başına öldü. Ölümünden tam 40 yıl sonra (Levha Tektoniği bulununcaya kadar) hakkı teslim edilmedi. Wegener\'in trajedisi, bilimin (ve akademinin) sarsılmaz sanılan o muhafazakâr kibrinin; unvanlara uymayan (ezber bozan) bir hakikati, o gerçeğin bizzat sahibini dondurup öldürene dek nasıl acımasızca reddettiğinin en kara lekesidir.',
    questionStem: 'Alfred Wegener\'in Kıtaların Kayması teorisinin (haklı olmasına rağmen) ölümüne kadar reddedilmesi, akademik ve bilimsel camiaya dair neyin eleştirisidir?',
    options: [
      'Jeoloji biliminin sadece taşları ve mineralleri inceleyen çok dar ve sıkıcı bir alan olduğunun',
      'Akademik otoritenin ve muhafazakâr kibrin; ezber bozan devrimsel bir hakikati, sırf onu söyleyen kişi "farklı bir meslekten (meteorolog)" olduğu ve eski kalıpları yıktığı için acımasızca reddedip (alay ederek) sahibini dışlaması (bağnazlığı) eleştirisidir',
      'Güney Amerika ve Afrika kıtalarının aslında okyanus suları çekildikten sonra ortaya çıktığı teorisinin',
      'Hava durumunu tahmin eden bilim insanlarının her zaman hayalperest teoriler ürettiğinin'
    ],
    correct: 1,
    explanation: 'Wegener\'in haklı olmasına rağmen "sen meteorologsun" diye dışlanıp alay edilmesi; akademik otoritenin ve kibrin, ezber bozan bir gerçeği sırf unvan/kalıp uymuyor diye reddeden bağnazlığını (muhafazakâr körlüğünü) eleştirir.'
  },
  {
    title: 'Bhopal Felaketi (Kapitalizmin Gaz Odası)',
    passage: '2-3 Aralık 1984 gecesi, Hindistan\'ın Bhopal şehrindeki yoksul gecekondu mahallesi, tarihin en acımasız endüstriyel kıyametine uykusunda yakalandı. Amerikan şirketi "Union Carbide"a ait böcek ilacı fabrikasından havaya (kırık ve bakımsız borulardan) 40 tonluk ölümcül Metil İzosiyanat gazı sızdı. Gaz havadan ağır olduğu için gökyüzüne uçmadı; sessiz, beyaz bir bulut gibi sokakların, uyuyan yoksulların ve çocukların üzerine çöktü. İnsanların ciğerleri kelimenin tam anlamıyla saniyeler içinde kendi sıvılarıyla dolarak yandı; o gece 8.000 kişi boğularak (kendi ciğerlerinde can çekişerek) öldü! Facianın asıl katili doğa veya gaz değildi. Şirket, kâr oranını artırmak için güvenlik alarmlarını kapatmış, boruları tamir etmemiş ve soğutma sistemlerini (tasarruf için) bilerek fişten çekmişti. Bhopal felaketi; küresel sermayenin ve kâr hırsının (kapitalizmin), yoksul ülkelerdeki insan hayatını sadece "ucuzlatılabilir bir üretim maliyeti" olarak gördüğünde; gece vakti koskoca bir şehri nasıl kusursuz, sessiz ve yasal bir gaz odasına (toplu mezara) dönüştürebildiğinin en kanlı faturasıdır.',
    questionStem: 'Bhopal Felaketi\'nin (binlerce insanın zehirli gazla ölmesinin) temelindeki asıl (sosyolojik ve ekonomik) neden yazar tarafından nasıl açıklanmaktadır?',
    options: [
      'Hindistan\'daki yerel halkın kimyasal maddelere genetik olarak aşırı duyarlı ve zayıf olması',
      'Böcek ilaçlarının tarımda kullanılmasının o dönemde tüm dünyada tamamen yasaklanmış olması',
      'Küresel şirketlerin "kâr marjını artırmak ve tasarruf yapmak" uğruna temel güvenlik önlemlerini (alarmları) bilerek kapatması; yani kapitalizmin (açgözlülüğün) yoksul insan hayatını sadece ucuz bir maliyet kalemi olarak görüp koca şehri bir gaz odasına (katliama) çevirmesi',
      'Metil İzosiyanat gazının aslında uzaydan düşen meteorların içinden elde edilen tehlikeli bir maden olması'
    ],
    correct: 2,
    explanation: 'Şirketin tasarruf/kâr için güvenlik fişlerini çekip alarmları kapatması; facianın doğadan değil, küresel sermayenin/kapitalizmin kâr hırsı uğruna yoksul hayatları hiçe sayan (şehri gaz odasına çeviren) açgözlülüğünden kaynaklandığını açıklar.'
  },
  {
    title: 'Mary Anning ve Çalınan Keşif',
    passage: '19. yüzyılda İngiltere\'nin Lyme Regis kıyılarında yaşayan Mary Anning, fırtınalı havalarda uçurumlardan sarkarak deniz kabukları ve ilginç taşlar toplayıp turistlere satan, fakir ve eğitimsiz bir genç kızdı. Ancak 12 yaşındayken o "tuhaf taşların" arasında, tarihin gidişatını değiştirecek o devasa canavarı, dünyanın ilk "İhtiyozor" (deniz sürüngeni/dinozor) iskeletini tamamen sağlam olarak bulup çıkardı! Ardından Plesiyozor ve Pterodaktil fosillerini de buldu. O dönemde "hayvanların soyunun tükenebileceği" fikri Kilise tarafından küfür sayılıyordu. Mary\'nin bulduğu fosiller paleontoloji bilimini (ve evrimi) başlattı. Ancak dönemin o kibirli, elit ve tamamen erkeklerden oluşan Jeoloji Cemiyeti ne yaptı dersiniz? Mary\'nin bulduğu fosilleri ondan üç kuruşa satın aldılar, üzerine kendi (asil) isimlerini yazıp müzelerde sergilediler ve onu bir kadın (ve fakir) olduğu için hiçbir bilimsel konferansa almadılar! Mary Anning\'in trajedisi, bilimin o aydınlık maskesinin arkasına saklanan sınıfsal (ve eril) kibrin; asıl gerçeği keşfeden o çamurlu elleri nasıl utanmazca sömürüp, tarihi sadece "kravatlı hırsızların" zaferiymiş gibi yazabildiğinin utanç verici belgesidir.',
    questionStem: 'Mary Anning\'in (ilk dinozor fosillerini bulmasına rağmen) bilim dünyası tarafından dışlanıp adının silinmesi, akademinin (otoritenin) hangi karanlık yüzünü ifşa eder?',
    options: [
      'Kadınların okyanus kenarındaki fosil kazı çalışmalarında fiziksel olarak başarısız oldukları tezini',
      'Fosillerin sadece müzelerde satılmak üzere üretilen sahte taşlardan ibaret olduğu gerçeğini',
      'Eğitimli, eril ve elitist (kibirli) bilim camiasının; "fakir bir kadın (ve alt sınıf)" tarafından yapılan o devrimsel keşfi kabul etmeyi kibrine yediremeyip, onun emeğini kasten çalarak (ve dışlayarak) bilimi sadece kendi sınıfsal ve cinsiyetçi tekeline alma ahlaksızlığını',
      'İngiliz kraliyetinin kazı alanlarını tamamen sivillere yasakladığı tarihi fermanı'
    ],
    correct: 2,
    explanation: 'Fakir bir kadının bulduğu fosilleri elit erkek bilim insanlarının çalıp kendi adını yazması ve kadını dışlaması; akademinin aydınlık maskesi altındaki o eril, sınıfsal, kibirli ve hırsız (sömürücü) yüzünü ifşa eder.'
  },
  {
    title: 'Texas Keskin Nişancısı Safsatası (Hedefi Sonradan Çizmek)',
    passage: 'Bir kovboy, elinde tabancasıyla ahırın devasa, boş tahta duvarına gözü kapalı onlarca kez rastgele ateş eder. Kurşunlar duvarın her yerine darmadağınık saçılır. Sonra bu kovboy eline kırmızı bir boya fırçası alır, tesadüfen "üç kurşunun birbirine yakın düştüğü" o küçük bölgenin tam ortasına kırmızı bir "hedef tahtası" çizer ve köylülere dönüp bağırır: "Gördünüz mü? Tam hedefi vurdum, ben bir keskin nişancıyım!" Psikolojide ve istatistikte buna "Texas Keskin Nişancısı Safsatası" (Texas Sharpshooter Fallacy) denir. İnsan zihni, dünyadaki o devasa, rastgele ve anlamsız veri yığınlarına (kaosa) bakarken; sadece kendi inancını (veya teorisini) doğrulayan o üç küçük "tesadüfe" odaklanır, etrafındaki binlerce tutarsızlığı (karavana giden kurşunları) çöpe atar ve sonradan o tesadüfe sahte bir "anlam (hedef)" uydurur. Mucizeler, burçlar ve komplo teorileri hep bu safsatadan doğar: Hedefi, kurşunu sıktıktan SONRA çizen insanın o kurnaz ve bencil kendini kandırma sanatı.',
    questionStem: 'Texas Keskin Nişancısı Safsatası (rastgele kurşunların etrafına sonradan hedef çizilmesi), insan beyninin olayları yorumlarken düştüğü hangi "anlam bulma (istatistiksel)" yanılgısını anlatır?',
    options: [
      'Silah ve tabanca kullanımının insanlarda agresif bir kişilik ve zihinsel körlük yarattığını',
      'Zihnin, devasa ve rastgele veriler (kaos) içindeki binlerce tutarsızlığı kasten görmezden gelip; sadece işine yarayan (kendi fikrini doğrulayan) birkaç rastlantıyı cımbızla seçerek, onlara sonradan "sahte bir amaç (veya mucize/hedef)" uydurma kurnazlığını (kendini kandırma zaafını)',
      'Hedef tahtalarının her zaman kırmızıya boyanmasının dikkat dağınıklığına yol açtığını',
      'Amerikalıların istatistik ve matematikte Avrupalılara göre daha başarısız olduğunu'
    ],
    correct: 1,
    explanation: 'Rastgele deliklerin etrafına sonradan hedef çizilmesi; beynin kaos içindeki verileri görmezden gelip, sadece işine yarayan rastlantıları seçerek onlara sonradan kurnazca "sahte bir anlam (mucize)" uydurduğu (kendini kandırma) safsatasını açıklar.'
  },
  {
    title: 'Aral Gölü (Pamuk İçin Çölleşen Deniz)',
    passage: '1960\'lara kadar Aral Gölü, devasa limanları, koca balıkçı filoları ve tatil köyleriyle dünyanın en büyük dördüncü gölüydü. Ancak Sovyet mühendisler (ve bürokrasi), Özbekistan ve Kazakistan\'daki kurak çöllerin ortasında "Pamuk" (Beyaz Altın) yetiştirmek gibi kârlı ve kibirli bir karar aldılar. Aral Gölü\'nü besleyen o iki devasa nehri (Ceyhun ve Seyhun) kâğıt üzerinde yeniden çizdiler ve sularını pamuk tarlalarına yönlendirdiler. Sonuç, insanlık tarihinin en büyük "antropojenik (insan eliyle yaratılmış) çevre felaketi" oldu. Aral Gölü kurudu, buharlaştı. Suyu çekilen gölün dibinde, tuzdan ve zehirli tarım ilaçlarından oluşan koca bir çöl kaldı. Rüzgâr bu zehirli kumları köylerin üzerine savurarak on binlerce insanı kanser ve solunum yolları hastalıklarıyla öldürdü. Kuruyan kumların üzerinde bugün paslanmış devasa balıkçı gemileri (kâbus gibi) birer iskelet olarak yatmaktadır. Aral\'ın çöküşü; devlet planlamasının, ekonomik büyüme (ve pamuk) uğruna doğanın milyarlarca yıllık anatomisini nasıl bir kalem darbesiyle "paslı bir gemi mezarlığına" ve zehirli bir çöle (cinayete) çevirebildiğinin en büyük suç mahallidir.',
    questionStem: 'Aral Gölü\'nün (suların pamuk tarlalarına yönlendirilmesiyle) kuruması felaketi, ekonomik hırs ve çevre (doğa) ilişkisi hakkında neyin trajik sonucudur?',
    options: [
      'Göl kenarında yaşayan balıkçıların çok fazla balık avlayarak ekosistemi tüketmelerinin',
      'Kurak çöllerin zamanla sıcaklıktan dolayı göl sularını tamamen yeraltına çekmesinin',
      'Ekonomik kâr (pamuk/büyüme) ve devletin kibirli planlaması (mühendisliği) uğruna; doğanın devasa su kaynaklarının (ekosisteminin) hiçe sayılarak, koca bir yaşam alanının göz göre göre zehirli bir çöle ve paslı bir mezarlığa (antropojenik bir yıkıma) dönüştürülmesinin',
      'Pamuk bitkisinin sadece deniz suyuyla sulanabildiği için nehirlerin tuzlanmasının'
    ],
    correct: 2,
    explanation: 'Pamuk (ekonomik kâr/planlama) uğruna koca denizi besleyen nehirlerin yönünün değiştirilip denizin çöle ve zehirli gemi mezarlığına dönmesi; insan hırsının ve kibrinin doğayı nasıl göz göre göre yok ettiğinin (antropojenik yıkımın) sonucudur.'
  },
  {
    title: 'Svalbard Küresel Tohum Deposu (Kıyamet Kasası)',
    passage: 'Norveç\'in en kuzeyinde, Kuzey Kutbuna sadece 1300 kilometre uzaklıkta, buzulların ve donmuş dağların (permafrost) tam 120 metre derinliğine inşa edilmiş devasa, çelik kapılı bir yeraltı sığınağı vardır: "Svalbard Küresel Tohum Deposu". Nükleer patlamalara, asteroit çarpmalarına ve küresel ısınmaya karşı dayanıklı olan bu "Kıyamet Kasası"nın içinde altın veya para değil; dünyanın dört bir yanından getirilmiş milyonlarca "bitki (tarım) tohumu" eksi 18 derecede dondurularak saklanmaktadır. İnsanoğlu bu kasayı, uzaylılar veya doğa olayları için yapmamıştır. İnsanoğlu bu kasayı, "BİZZAT KENDİ KENDİSİNE" karşı inşa etmiştir! Svalbard Deposu, insanlığın o en dondurucu ve şizofrenik itirafıdır: Kendi hırsımızla, nükleer silahlarımızla ve çevre kirliliğimizle bu gezegeni eninde sonunda yok edeceğimize (kıyameti koparacağımıza) o kadar eminiz ki; o yangın dindiğinde geriye kalan bir avuç insan (belki) yeniden ekin ekebilsin diye, kendi katliamımıza karşı yeraltına dilsiz bir "yedekleme (umut) dosyası" gömüyoruz.',
    questionStem: 'Svalbard "Kıyamet Kasası"nın (Tohum deposunun) inşa edilme amacı, insanlığın geleceği ve varoluşu hakkında nasıl bir (paradoksal/şizofrenik) felsefi itiraftır?',
    options: [
      'Gelecekteki uzay seyahatleri için bitkilerin soğuk hava koşullarında (buzullarda) test edilmesi gerekliliği',
      'İnsanoğlunun; kendi kibirli hırsı, silahları ve hatalarıyla dünyayı (doğayı) kesinlikle yok edeceğine (kıyameti kendi elleriyle koparacağına) dair hissettiği o kesin inançla, kendi yaratacağı o felakete karşı yine kendi eliyle yeraltına bir "yedek (kurtuluş) dosyası" saklama (ve kendi yıkıcılığını itiraf etme) paradoksu',
      'Norveç hükümetinin tarım ürünlerini monopolleştirerek dünyadaki tüm gıda satışını kontrol etme hırsı',
      'Kutuplardaki ayıları ve penguenleri doyurmak için bir gıda rezervi yaratılması'
    ],
    correct: 1,
    explanation: 'İnsanın bizzat "kendi elleriyle yaratacağı kıyametten (nükleer savaş/iklim)" korktuğu için tohumları buzula gömmesi; kendi türünün o kaçınılmaz yıkıcılığını itiraf ettiği ve buna karşı çaresiz bir yedek (kurtuluş) dosyası sakladığı felsefi paradokstur.'
  },
  {
    title: 'Centralia Yangını (Sönmeyen Yeraltı Cehennemi)',
    passage: 'Amerika\'nın Pensilvanya eyaletindeki Centralia kasabası, 1962 yılına kadar kömür madenciliğiyle geçinen mutlu bir şehirdi. Mayıs ayında, belediye işçileri kasabanın çöplüğünü temizlemek (ve yer açmak) için çöpleri "küçük bir ateş yakarak" yaktılar. Ateş söndürüldü sanıldı. Ancak o minicik kıvılcım, çöplüğün hemen altındaki terk edilmiş, devasa labirentler halindeki zengin (antrasit) kömür madeni damarlarına sıçramıştı! Yerin yüzlerce metre altındaki koca bir şehir (kömür okyanusu) alev aldı. İtfaiye, mühendisler ve sular hiçbir işe yaramadı. Zehirli karbonmonoksit gazı evlerin zeminlerinden (çatlaklardan) fışkırmaya, asfalt yollar eriyip yarılmaya ve ağaçlar yanmaya başladı. Kasaba tamamen boşaltıldı ve haritadan silindi ("Silent Hill" kâbusuna dönüştü). İşin sarsıcı tarafı şudur: O minicik kıvılcımla başlayan yeraltı cehennemi 60 yıldır aralıksız yanmaktadır ve bilim insanlarına göre yerin altındaki o kömür tamamen bitene kadar, en az "250 YIL DAHA" yanmaya devam edecektir. Centralia; insanın doğaya fırlattığı en ufak ve en dikkatsiz bir kıvılcımın; doğanın o devasa ve dilsiz depolarıyla buluştuğunda, insanı kendi evinden kovan ve yüzyıllarca söndürülemeyen ebedi bir felakete (kıyamete) dönüşebildiğinin yanık kokulu kanıtıdır.',
    questionStem: 'Centralia kasabasının yeraltındaki kömür yangını yüzünden terk edilmesi, küçük bir hatanın doğa ile birleştiğinde neye dönüşebileceğini sembolize eder?',
    options: [
      'Belediye işçilerinin her zaman kasabaları yok etmek için gizli komplolar kurduklarını',
      'Kömür madenlerinin aslında çok verimli olduğu için devlete büyük kârlar getirdiğini',
      'İnsanın yaptığı en ufak ve dikkatsiz bir hatanın (küçük bir kıvılcımın); doğanın devasa depoları (kömür/yeraltı) ile birleştiğinde, insan aklının ve teknolojisinin durduramayacağı, yüzyıllarca sönmeyen (ve kendi evini yutan) apokaliptik bir kâbusa (yıkıma) dönüşebileceğini',
      'Yangınların sadece ormanlık alanlarda değil betonarme binalarda da tehlikeli olduğunu'
    ],
    correct: 2,
    explanation: 'Çöplükteki küçük bir ateşin yeraltı kömürüyle birleşip 250 yıl sürecek ve şehri yutacak durdurulamaz bir cehenneme dönmesi; küçük bir hatanın doğanın gücüyle birleşince insan aklını aşan sönmez bir kıyamete dönüştüğünü sembolize eder.'
  },
  {
    title: 'Paris Sendromu (Hayalin Gerçeğe Çarpması)',
    passage: 'Her yıl binlerce Japon turist, kafalarındaki o "Aşkın, romantizmin, modanın ve kusursuz güzelliğin başkenti" olarak kurguladıkları rüya şehir Paris\'i ziyaret etmek için uçaklara biner. Ancak uçaktan inip Paris sokaklarına adım attıklarında; o hırçın garsonlarla, sokaklardaki çöp yığınlarıyla, lağım kokan metro istasyonlarıyla ve yankesicilerle yüz yüze gelirler. O kusursuz rüya (ve beklenti) öylesine sert ve kaba bir gerçekliğe çarpar ki; bazı Japon turistlerin beyni bu çelişkiyi (şoku) kaldıramaz ve kelimenin tam anlamıyla "kısa devre" yapar! Titreme, halüsinasyon, baş dönmesi, kusma ve akut bir delilik hali geçirerek acile kaldırılırlar! Psikiyatride buna "Paris Sendromu" (Paris Syndrome) denir. Japon büyükelçiliği bu hastaları ülkelerine geri göndermek için 7/24 çalışan özel bir yardım hattı kurmuştur. Bu sendrom turistik bir şımarıklık değildir; insan beyninin, uzun süre beslediği ve tapındığı o "idealleştirilmiş ve kusursuz kurgunun (hayalin)"; o kaba, pis ve sıradan (çirkin) gerçeklikle ilk çarpıştığı o saniyede yaşanan o felç edici ve dondurucu "psikolojik çöküşün" ta kendisidir.',
    questionStem: 'Japon turistlerin yaşadığı "Paris Sendromu" (şehri görünce psikolojik kriz geçirmeleri), insan zihni ve beklentiler hakkında neyi ifşa etmektedir?',
    options: [
      'Fransız yemeklerinin Asyalı turistlerin midesinde ağır kimyasal zehirlenmelere (kramplara) yol açtığını',
      'Japon turistlerin uzun uçak yolculukları (Jet Lag) yüzünden geçici olarak akıl sağlıklarını yitirdiklerini',
      'Zihnin yarattığı ve yıllarca beslediği "kusursuz, romantik ve idealleştirilmiş beklentinin (hayalin)"; o kaba, kirli ve sıradan (gerçeklikle) yüz yüze geldiğinde (ve o balon patladığında) beynin bu çelişkiyi kaldıramayarak fiziksel ve ruhsal bir çöküş (kısa devre) yaşadığını',
      'Fransa\'nın bilerek turistleri korkutmak için sokaklara sahte aktörler yerleştirdiğini'
    ],
    correct: 2,
    explanation: 'Mükemmel romantizm hayalinin pislik ve kaba gerçeklikle çarpıştığı an beynin felç geçirmesi (Paris Sendromu); "aşırı idealleştirilmiş kurgu" ile "çirkin gerçekliğin" çarpışmasının yarattığı o travmatik ruhsal çöküşü (hayal kırıklığı şokunu) ifşa eder.'
  },
  {
    title: 'Stendhal Sendromu (Güzelliğin Darbesi)',
    passage: 'Florence (Floransa) şehrinde, Santa Croce Bazilikası\'nı veya Michelangelo\'nun heykellerini izleyen bazı turistler aniden nefes darlığı çeker, kalpleri delicesine çarpar, ağlamaya başlar ve bayılarak taş zemine yığılırlar! Hatta bazıları kısa süreli halüsinasyonlar görüp hafıza kaybı yaşar. 19. yüzyılda bu durumu bizzat yaşayarak anlatan Fransız yazar Stendhal\'in adıyla anılan bu nörolojik kriz: "Stendhal Sendromu"dur (Floransa Sendromu). İnsan beyni, tek bir anın (veya mekânın) içine sıkıştırılmış o devasa tarihi mirasa, üstün sanatsal estetiğe ve o "kavranılamaz, yüce ve ezici Güzelliğe" maruz kaldığında; algı kapasitesi bu muazzam veri akışını işleyemez (sistem aşırı yüklenir). Stendhal Sendromu bize insan ruhunun en zarif zaafını gösterir: Güzellik (ve sanat) sadece pasif, dekoratif veya hoş bir süs eşyası değildir. Kusursuz estetik, insan bilincini köşeye sıkıştıran, aklı ezen ve zihni kelimenin tam anlamıyla şoka sokarak bayıltabilen (fiziksel) ve saldırgan bir güçtür.',
    questionStem: 'Stendhal Sendromu (sanat eserleri karşısında kalp krizi geçirip bayılma), "Güzellik ve Sanat" kavramlarının insan üzerindeki etkisi hakkında neyi kanıtlar?',
    options: [
      'Eski müzelerdeki tozların ve havasızlığın insanlarda astım ve nefes darlığı krizleri yarattığını',
      'Heykeltıraşların eserlerini yaparken aslında izleyicileri kasten korkutacak gizli şeytani semboller kullandığını',
      'Sanatın ve estetiğin sadece hoş (pasif) bir zevk olmadığını; yoğun ve kusursuz "güzelliğin", insanın algı sınırlarını aşarak zihne ve bedene fiziksel bir şok (aşırı yüklenme) yaşatan sarsıcı ve ezici bir güç olabileceğini',
      'İtalyan sanatının sadece zeki ve eğitimli beyinler tarafından anlaşılabileceğini ve diğerlerini dışladığını'
    ],
    correct: 2,
    explanation: 'Muazzam sanat eserleri karşısında insanların bayılması (Stendhal Sendromu); estetiğin/güzelliğin pasif bir süs değil, insan aklına (algısına) aşırı yükleme yapıp onu fiziksel olarak felç edebilecek kadar ezici/sarsıcı bir güç olduğunu kanıtlar.'
  },
  {
    title: 'Çin Odası (Sahte Anlayış)',
    passage: 'Yapay zekâ (bilgisayar) gerçekten düşünebilir mi, yoksa sadece taklit mi eder? Filozof John Searle, bu soruyu "Çince Odası" (Chinese Room) argümanıyla yıkar. Kapalı bir odaya, Çince tek bir kelime dahi bilmeyen (İngilizce konuşan) bir adamı koyun. Adama, dışarıdan kâğıda yazılı Çince sorular verilsin. Adamın elinde, "Eğer şu şekil gelirse, yanına şu şekli çiz ve dışarı ver" yazan devasa bir kural kitabı (algoritma) olsun. Adam sadece o kitaptaki şekilleri eşleştirerek dışarıya kusursuz Çince cevaplar gönderir. Dışarıdaki Çinliler içeridekini "Çince bilen (düşünen) bir dâhi" sanırlar! Oysa adam içeride sadece şekilleri (sembolleri) oynatmış, hiçbirinin "anlamını (manasını)" zerre kadar anlamamıştır (İdrak sıfırdır). Bu düşünce deneyi, ChatGPT gibi günümüz yapay zekâlarına tutulan en korkutucu aynadır: Makineler ne kadar kusursuz şiir yazarsa yazsın veya satranç oynarsa oynasın; onlar sadece sembolleri eşleştiren (Çince odasındaki) karanlık ve kör birer sözlük bekçisidir. Onlarda işlem gücü (sentaks) vardır ama "Bilinç ve Anlam (Semantik)" asla yoktur.',
    questionStem: 'John Searle\'ün "Çince Odası" argümanı, Yapay Zekânın (bilgisayarların) ulaştığı yetenekler bağlamında felsefi olarak neyi savunmaktadır?',
    options: [
      'Gelecekte bilgisayarların sadece Çince çeviriler yapabileceğini, diğer dillerde başarısız olacağını',
      'Makinelerin dışarıya ne kadar zekice ve kusursuz (doğru) tepkiler verirse versin; aslında "kelimelerin veya duyguların asıl anlamını (semantiğini/bilincini)" asla idrak etmediklerini, sadece kurallara göre şekil (sembol) dizen "sahte bir bilinç (körlük)" olduklarını',
      'Çince gibi karmaşık harflere sahip dillerin bilgisayar kodlarına çevrilmesinin matematiksel olarak imkânsız olduğunu',
      'Yapay zekânın insanları köleleştirecek kadar duygusal (hissi) bir yapıya ulaştığı kâbusunu'
    ],
    correct: 1,
    explanation: 'Adamın Çince anlamadan sadece şekilleri doğru eşleştirmesi; yapay zekânın da çok zekice cevaplar verse bile aslında hiçbir şeyin "anlamını/bilincini" idrak etmediği (sahte anlayış/sadece sentaks) gerçeğini savunur.'
  },
  {
    title: 'Korkunun Kokusu (Biyolojik İhanet)',
    passage: 'İnsanoğlu korktuğunda veya yalan söylediğinde sakin görünerek karşısındakini kandırabildiğine inanır. Ancak biyologlar, köpeklerin (veya bazı insanların) o "korkuyu" nasıl kusursuzca tespit edebildiğini araştırdıklarında beynimizin o sinsi ihanetini buldular. Biz korktuğumuzda (veya şiddetli bir stres yaşadığımızda), bedenimiz terlerken sadece su ve tuz atmaz. O an "Apokrin Ter Bezleri", özel ve kimyasal bir kokusu olan farklı bir ter türü salgılar. Bu terin içinde, o anki duygu durumumuzu (paniğimizi) haykıran "kemozinyaller" (koku molekülleri) vardır. Karşımızdaki köpek (veya deneydeki gözü kapalı diğer insanlar), sizin yüzünüze bakmasına gerek kalmadan, sadece burnuyla o kimyasal kokuyu aldığında sizin "korku" içinde olduğunuzu bilinçaltında anında hisseder! Bedenimiz yalan söyleyemez; dilimiz ne kadar cesur ve sakin kelimeler seçerse seçsin, cildimiz o anki dehşetimizi (korkumuzu) havaya moleküler ve dilsiz bir çığlık gibi (kokutarak) sızdıran acımasız ve dürüst bir ihanetçidir.',
    questionStem: 'Apokrin ter bezlerinin korku anında salgıladığı "Kemozinyaller" (Korkunun Kokusu), insanın dışarıya verdiği mesajlar (ve gizlenme çabası) hakkında neyi ispatlar?',
    options: [
      'Köpeklerin insan dilini ve yüz mimiklerini evrimsel süreçte mükemmel bir şekilde okuyabildiklerini',
      'Korkunun sadece psikolojik bir his olduğu ve bedensel bir tepkiye yol açmadığı teorisini',
      'İnsanın zihniyle (ve diliyle) sakinmiş gibi davranıp "korkusunu/yalanını gizlemeye" çalışmasının işe yaramadığını; bedenin, korku hissini saniyeler içinde "kimyasal bir koku (ter)" olarak havaya sızdırarak kişiyi ele veren dürüst (ve biyolojik) bir isyancı olduğunu',
      'İnsanların parfüm kullanarak hayvan saldırılarından her zaman korunabildikleri gerçeğini'
    ],
    correct: 2,
    explanation: 'Korku anında özel bir kokunun (kemozinyal) salgılanması; dilimiz yalan söylese de bedenimizin (terin) o anki paniği kimyasal olarak dışarı sızdırıp bizi ele veren dürüst/biyolojik bir yapı olduğunu ispatlar.'
  },
  {
    title: 'Aşırı Meşrulaştırma Etkisi (Ödülün Zehri)',
    passage: 'Çocuğunuz kitap okumayı (veya piyano çalmayı) kendi içinden geldiği için, sevdiği için yapıyor diyelim (İçsel Motivasyon). Siz "Aferin, her kitap okuduğunda sana 10 dolar vereceğim" diyerek onu "Ödüllendirmeye" karar verdiniz. Kitap okuma oranı ilk başta aniden fırlar! Ancak bir ay sonra "Artık sana para vermeyeceğim" derseniz ne olur? Çocuk eskisi gibi bedavaya okumaya devam eder mi? Psikologlar buna "Aşırı Meşrulaştırma Etkisi" (Overjustification Effect) der. Çocuk kitabı anında çöpe atar ve okumayı sonsuza dek bırakır! Neden mi? Çünkü o dışarıdan verdiğiniz para (ödül), çocuğun beynindeki o saf, masum ve içsel "Ben bunu sevdiğim için yapıyorum" inancını kelimenin tam anlamıyla zehirlemiş, o eylemi sadece "para için (zorla) yapılan sıkıcı bir işe (köleliğe)" dönüştürmüştür! Toplumun o çok taptığı "dışsal ödüller (para, not, madalya)"; aslında insanın kendi ruhuyla ürettiği o saf tutkuyu ve sevgiyi anında satın alıp boğan (ve onu kiralık bir eyleme çeviren) en sinsi katildir.',
    questionStem: 'Aşırı Meşrulaştırma Etkisi (Kişinin sevdiği bir şeye para/ödül verildikten sonra o ödül kesilince eylemi bırakması), "Ödül ve Motivasyon" ilişkisi hakkında hangi sarsıcı mekanizmayı ortaya koyar?',
    options: [
      'Çocukların kitap okumaktan her zaman sıkıldıkları için sadece oyun oynamaya meyilli olduklarını',
      'Dışarıdan verilen maddi "ödüllerin" (paranın vb.); kişinin o eyleme karşı duyduğu o saf, "içsel tutkuyu ve sevgiyi" zehirleyerek yok ettiğini; eylemi zevk olmaktan çıkarıp sadece ödüle (maddiyata) bağımlı, sıkıcı bir köleliğe/işe dönüştürdüğünü',
      'Paranın ve notların eğitim sistemindeki tek (ve en kusursuz) başarı garantörü olduğunu',
      'Müzik aleti çalmanın (piyanonun) zihinsel gelişimi kitap okumaktan daha çok yavaşlattığını'
    ],
    correct: 1,
    explanation: 'Zaten sevdiği bir şeye para ödülü verildiğinde ve para kesildiğinde kişinin işi bırakması; dışsal ödüllerin (paranın) insanın içindeki saf "tutkuyu/sevgiyi" zehirleyerek o eylemi sadece maddiyata bağlı sıkıcı bir işe (Aşırı Meşrulaştırma Etkisine) dönüştürdüğünü ortaya koyar.'
  },
  {
    title: 'Kelebek Kanadındaki Mavi (Pigmentin İllüzyonu)',
    passage: 'Güney Amerika yağmur ormanlarında uçan o efsanevi, göz alıcı neon mavisi renge sahip "Morpho Kelebeği"ni (Morpho Menelaus) mikroskop altına koyduğunuzda, doğanın en büyük sihirbazlık numarasıyla karşılaşırsınız. O kelebeğin kanatlarında "mavi" rengi veren tek bir damla bile mavi boya (pigment) YOKTUR! Kelebeğin kanatları aslında tamamen renksiz (kahverengi/şeffaf) bir zemin üzerine kuruludur. Peki o büyüleyici mavi renk nasıl oluşur? Kanadın yüzeyindeki pullar; ışığı öylesine kusursuz, mikroskobik ve geometrik bir prizma (nano-yapı) şeklinde büker (yansıtır) ki; ışığın diğer renklerini emip sadece "mavi" dalga boyunu (yapısal renk) gözümüze fırlatır! Gördüğümüz şey boya değil, ışığın kırılarak (geometriyle) yarattığı fiziksel bir yansıma illüzyonudur. Doğadaki o en parlak ve muazzam güzellik (mavi); aslında fiziksel olarak orada "hiç var olmayan", sadece yapıların (ve ışığın) boşlukta oynadığı dilsiz ve kusursuz bir kurgudan (illüzyondan) ibarettir.',
    questionStem: 'Morpho Kelebeğinin kanatlarında "mavi boya (pigment) olmamasına rağmen mavi görünmesi" olgusu, "Doğa ve Güzellik (Algı)" hakkında neyi ispatlamaktadır?',
    options: [
      'Kelebeklerin aslında uçarken havaya zehirli gazlar yaydıkları gerçeğini',
      'Gördüğümüz o en büyüleyici ve parlak "güzelliğin (rengin)", nesnenin kendi özünde (kimyasal bir boya olarak) var olmak zorunda olmadığını; doğanın, ışığı büken nano-yapılar (geometri) kullanarak muazzam (yapısal) bir "fiziksel illüzyon/gösteri" yaratabildiğini',
      'Mavi rengin sadece su altında yaşayan okyanus canlılarına özgü bir genetik mutasyon olduğunu',
      'Hayvanların güneş ışığına maruz kaldıkça zamanla görme yetilerini kaybettiklerini'
    ],
    correct: 1,
    explanation: 'Kelebeğin kanadında mavi boya olmamasına rağmen ışığı kırarak (nano-yapıyla) mavi görünmesi; doğanın, nesnenin özünde (boya) olmayan bir şeyi sadece ışık oyunu/geometri ile yaratarak büyüleyici bir "yapısal (fiziksel) illüzyon" sunabildiğini ispatlar.'
  },
  {
    title: 'Veblen Malları (Fiyatın Şehveti)',
    passage: 'Ekonomi biliminin en temel kuralı şudur: "Bir ürünün fiyatı artarsa, ona olan talep (istek) azalır." Ancak Rolex saatler, Gucci çantalar veya pırlantalar söz konusu olduğunda bu rasyonel yasa anında çöker ve yerini o karanlık "Veblen Etkisi"ne (Veblen Goods) bırakır! 100 dolara satılan bir lüks çantanın fiyatını kasten 5000 dolara çıkarırsanız, o çanta düne göre "çok daha fazla" satmaya başlar! Neden mi? Çünkü o çantayı alan kitle, çantanın derisi veya kalitesi için o parayı ödemiyordur. Onlar; çevrelerindeki fakirlere ve diğer insanlara "Bakın, ben bu kadar saçma sapan ve aşırı (pahalı) bir parayı gözümü kırpmadan çöpe atabilecek kadar ZENGİN VE ÜSTÜNÜM" diyebilmek (gösteriş yapmak) için o parayı öderler. Veblen malları, mantığın iflasıdır; fiyatın kendisinin (ne kadar ulaşılamazsa o kadar iyi olmasının) bizzat ürünün kalitesine dönüştüğü, insanın o hastalıklı (ve akıl dışı) "statü/kibir" şovunun en pahalı ve boş tiyatrosudur.',
    questionStem: 'Veblen Malları\'nın (Fiyatı arttıkça daha çok satılması) ekonomik kuralları çökertmesi, modern insanın (tüketicinin) hangi hastalıklı motivasyonunu (kibrini) ifşa eder?',
    options: [
      'Tüketicilerin her zaman en dayanıklı ve kullanışlı malzemeyi aradıkları yönündeki inancı',
      'İnsanın lüks malları satın alırken "ihtiyaç veya kaliteye" değil; sadece o aşırı (ve mantıksız) fiyat etiketini kullanarak çevresine "Ben zenginim, gücüm var" mesajı verme (gösterişçi tüketim ve statü) hastalığına/kibrine tapındığını',
      'Düşük fiyatlı ürünlerin aslında her zaman zararlı kimyasallar içerdiği gerçeğini',
      'Ekonomik kriz anlarında insanların altın ve gümüş biriktirme (tasarruf) refleksini'
    ],
    correct: 1,
    explanation: 'Fiyat artınca çantanın daha çok satması; insanların kaliteyi değil, o yüksek faturayı ödeyebilme gücünü (gösterişçi tüketimi/statü kibrini) satın alarak etrafına üstünlük şovu yapma (Veblen) zaafını ifşa eder.'
  }
];

export const bilimParagrafSorulari50: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_50.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_50[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim50-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_51 = [
  {
    title: 'Rashomon Etkisi (Parçalanan Hakikat)',
    passage: 'Japon yönetmen Akira Kurosawa\'nın efsanevi "Rashomon" filminde, ormanda bir samuray öldürülür. Mahkemeye dört farklı tanık (oduncu, haydut, tecavüze uğrayan eş ve ölen samurayın ruhu) çağrılır. İşin kan donduran felsefi şoku şudur: Dört tanık da aynı cinayeti tamamen "farklı, birbiriyle çelişen ve kendi egosunu (onurunu) koruyacak şekilde" anlatır! Üstelik hiçbiri kasten yalan söylemiyordur; hepsi anlattığı kurguya %100 inanmaktadır. Sinema ve psikoloji tarihine "Rashomon Etkisi" olarak kazınan bu olay, "Objektif (Mutlak) Gerçeklik" dogmasını tek kılıç darbesiyle kesip atar. İnsan hafızası, olayları bir kamera gibi kaydetmez; beynimiz, yaşananları kendi travmalarımız, egomuz ve çıkarlarımız üzerinden (bükerek) anında yeniden yazar. Dünyada tek bir "hakikat" yoktur; sadece o hakikati kendi penceresinden kurgulayan milyarlarca bencil ve yapayalnız anlatıcı vardır.',
    questionStem: 'Psikolojide ve sanatta "Rashomon Etkisi" (Aynı olayın farklı kişilerce tamamen çelişkili anlatılması), insan hafızası ve "Gerçeklik" hakkında neyi ifşa eder?',
    options: [
      'İnsanların mahkemelerde cezadan kurtulmak için her zaman bilinçli ve profesyonelce yalan söylediğini',
      'Ormanlık ve ıssız alanların insan beyninde halüsinasyonlara ve optik illüzyonlara neden olduğunu',
      'İnsanın olayları bir kamera gibi "objektif" kaydetmediğini; gerçeğin, kişinin kendi egosu, travmaları ve çıkarları tarafından anında bükülerek (yeniden kurgulanarak) anlatılan "öznel (subjektif) bir illüzyon" olduğunu',
      'Sadece antik çağlardaki insanların hafızalarının günümüz insanlarına göre daha zayıf çalıştığını'
    ],
    correct: 2,
    explanation: 'Dört kişinin de aynı olayı kendi egosunu koruyacak şekilde farklı anlatıp buna inanması; "objektif gerçeğin" olmadığını, hafızanın egomuz tarafından anında bükülen öznel bir kurgu (illüzyon) olduğunu ifşa eder.'
  },
  {
    title: 'Altı Derece Ayrılık (Kozmik Ağ)',
    passage: 'Dünyadaki 8 milyar insanın birbirine ne kadar uzak olduğunu düşünüyorsunuz? 1967\'de sosyolog Stanley Milgram bu soruyu "Küçük Dünya Deneyi" ile test etti. Amerika\'nın bir ucundaki (Omaha) rastgele kişilere mektuplar verdi ve bunu Boston\'daki (hiç tanımadıkları) belirli bir borsacıya ulaştırmalarını istedi. Kural şuydu: Mektubu sadece "ilk adıyla tanıdıkları" tanıdıklarına elden vereceklerdi. Mektuplar hedefe ulaştığında dünya şoka girdi: İki rastgele insan arasındaki iletişim zinciri ortalama sadece "5.5 kişi" sürmüştü! "Altı Derece Ayrılık" (Six Degrees of Separation) teorisi kâinatın o dilsiz matematiğini fısıldar: Ne kadar izole, yalnız veya önemsiz hissettiğimizin bir önemi yoktur. Fakir bir köylüden, dünyanın en güçlü diktatörüne kadar herkes, görünmez ve mikroskobik bir ağın içinde sadece altı tokalaşma mesafesi kadar birbirine bağlıdır. Yalnızlık, evrenin değil; sadece aklımızın uydurduğu optik bir yanılsamadır.',
    questionStem: 'Stanley Milgram\'ın "Altı Derece Ayrılık" deneyi (Mektupların 6 kişide hedefe ulaşması), insan toplumlarının yapısı hakkında neyin kanıtıdır?',
    options: [
      'Posta servislerinin ve mektupların 1960\'larda çok daha hızlı ve güvenilir çalıştığının',
      'Dünyadaki milyarlarca insanın kopuk ve izole adalar olmadığı; aksine, birbirine "sadece altı adım (tanıdık) mesafesinde" bağlı, hiper-iletişimsel ve devasa bir organik ağ (küçük dünya) oluşturduğunun',
      'Sadece aynı ülkede yaşayan insanların birbirleriyle iletişim kurabileceğinin',
      'İnsanların tanımadıkları kişilere yardım etme konusunda her zaman bencil davrandığının'
    ],
    correct: 1,
    explanation: 'Rastgele iki insanın birbirine sadece 6 tanıdık mesafesinde olması; milyarlarca insanın birbirinden kopuk/yalnız olmadığını, hiper-bağlantılı devasa bir ağın (küçük dünyanın) parçası olduğunu kanıtlar.'
  },
  {
    title: 'Kırık Camlar Teorisi (Vandalizmin Bulaşıcılığı)',
    passage: 'Bir binanın sadece "tek bir camı" kırılır ve o cam haftalarca tamir edilmezse ne olur? Kriminologlar James Wilson ve George Kelling\'in efsanevi "Kırık Camlar Teorisi"ne göre; o tek kırık cam, o mahalleye sessizce şu zehirli mesajı yayınlar: "Burada hiçbir kural yok, kimse burayı umursamıyor!" Bu mesajı alan insanlar, kısa süre sonra binanın diğer camlarını da kırarlar. Sokağa çöp atılır, grafitiler başlar, uyuşturucu satıcıları sokağı işgal eder ve sonunda o güvenli mahalle koca bir cehenneme (suç batağına) dönüşür. Bir medeniyeti yıkan şey devasa ordular veya büyük ekonomik çöküşler değildir. Uygarlığı çökerten şey; önemsenmeyen, cezalandırılmayan ve "küçük bir şey" denilerek göz yumulan o ilk kural ihlallerinin (küçük bir kırık camın) toplumun psikolojisine ektiği o geri dönülemez, bulaşıcı "anarşi (ve sahipsizlik)" tohumudur.',
    questionStem: 'Kırık Camlar Teorisi (Broken Windows Theory), suç oranlarının artışı ve toplumsal çöküş hakkında hangi felsefi/sosyolojik kuralı açıklar?',
    options: [
      'Suç oranlarının artmasının sadece polis sayısının azlığıyla doğrudan orantılı olduğunu',
      'Cam ve ahşap yapıların betonarme binalara göre hırsızlığa daha çok davetiye çıkardığını',
      'Toplumsal çöküşün büyük felaketlerle değil; cezalandırılmayan, önemsenmeyen ve tamir edilmeyen "küçük kural ihlallerinin (kırık camların)" yaydığı o sahipsizlik (anarşi) hissinin bulaşıcı bir felakete dönüşmesiyle başladığını',
      'Zengin mahallelerde suç oranlarının her zaman sıfır olduğu yönündeki ütopik yanılgıyı'
    ],
    correct: 2,
    explanation: 'Küçük bir kırık camın tüm sokağı suç batağına sürüklemesi; küçük kural ihlallerine ve bakımsızlığa göz yumulmasının, topluma "kuralsızlık/sahipsizlik" hissi vererek bulaşıcı bir anarşiye ve çöküşe (kelebek etkisine) yol açtığını açıklar.'
  },
  {
    title: 'Pareto İlkesi (Evrenin Adaletsiz Matematiği)',
    passage: '1896 yılında İtalyan ekonomist Vilfredo Pareto, bahçesindeki bezelyeleri incelerken rahatsız edici bir anomali fark etti: Mahsulün %80\'i, ekilen tohumların sadece %20\'sinden geliyordu! Bu garip oranın sadece bahçede değil, tüm dünyada geçerli olduğunu bulduğunda ise bilim dünyası sarsıldı. İtalya\'daki toprakların %80\'i, nüfusun sadece %20\'sine aitti. Şirketlerdeki satışların %80\'ini, müşterilerin %20\'si yapıyordu. Dünya ekonomisinden suç oranlarına, yazılımlardaki hatalardan kullandığımız kelimelere kadar her şey bu acımasız ve dondurucu "80/20 Kuralı"na (Pareto İlkesi) boyun eğiyordu. İnsanoğlu dünyada mutlak bir eşitlik, adil bir dağılım ve pürüzsüz bir denge (demokrasi) olduğuna inanmak ister. Oysa Pareto İlkesi evrenin o soğuk ve eşitsiz matematiğini yüzümüze çarpar: Doğanın doğasında eşitlik yoktur; evren, enerjinin ve gücün daima minicik bir azınlığın (kaymağın) elinde toplandığı o mutlak, acımasız ve dengesiz hiyerarşiden (asimetriden) ibarettir.',
    questionStem: 'Pareto İlkesi (80/20 Kuralı), insanlığın "adalet ve eşitlik" beklentisi karşısında doğanın (ve evrenin) hangi sarsıcı gerçeğini ispatlamaktadır?',
    options: [
      'İnsanların çalışma hayatında 8 saat uyuyup 2 saat dinlenmesi gerektiği biyolojik ritmini',
      'Dünyadaki servetin ve sonuçların adil (eşit) bir şekilde dağıtıldığı inancını yıkarak; evrenin ve tüm sistemlerin temelinde gücün, üretimin ve enerjinin "küçük bir azınlığın (%20) tekelinde" toplandığı doğal bir asimetri (eşitsizlik) yattığını',
      'Tarımsal üretimde sadece genetiğiyle oynanmış tohumların %80 verim verebileceğini',
      'İtalya topraklarının Avrupa\'daki en verimsiz tarım arazilerine sahip olduğunu'
    ],
    correct: 1,
    explanation: 'Her şeyin %80\'inin %20\'lik azınlıktan gelmesi; insanın o romantik "eşitlik/adalet" inancına karşı, doğanın ve evrenin asimetrik, eşitsiz ve gücün minik bir azınlıkta toplandığı acımasız bir matematik olduğunu ispatlar.'
  },
  {
    title: 'Maxwell\'in Şeytanı (Entropiye İsyan)',
    passage: 'Fiziğin en karanlık (ve depresif) kuralı Termodinamiğin İkinci Yasası\'dır: Evrendeki her şey yavaş yavaş düzensizliğe, kaosa ve çürümeye (Entropiye) gitmeye mahkûmdur. Ancak 1867\'de dâhi James Clerk Maxwell, bu ölümcül kurala kafa tutan o efsanevi "Düşünce Deneyini" kurguladı: "Maxwell\'in Şeytanı". Ortadan ikiye bölünmüş, içi gaz dolu kapalı bir oda düşünün. Kapının tam ortasında minicik, zeki bir "Şeytan (Demon)" vardır. Şeytan, hızlı (sıcak) atomlar geldiğinde kapıyı açıp onları sağ tarafa, yavaş (soğuk) atomlar geldiğinde kapıyı açıp onları sol tarafa geçirir. Hiçbir enerji harcamadan (sadece "bilgiyi" kullanarak) odanın bir tarafını sıcak, diğer tarafını buz gibi soğuk yaparak "düzen (anti-entropi)" yaratır! Maxwell\'in Şeytanı; evrenin o yavaşça ölüme (kaosa) giden sarsılmaz kuralını, sadece "zekâ, gözlem ve BİLGİ" kullanılarak nasıl tersine çevrilebileceğinin (ölüme nasıl isyan edilebileceğinin) en cüretkâr, en büyüleyici fiziksel fantezisidir.',
    questionStem: 'Maxwell\'in Şeytanı düşünce deneyi, evrenin "Entropi (Kaosa ve çürümeye gitme)" kuralına karşı neyin (hangi soyut gücün) bir isyanı olarak kurgulanmıştır?',
    options: [
      'Güneşten gelen radyasyon enerjisinin dünyadaki buzulları eriterek düzeni bozmasının',
      'Maddesel bir enerji (yakıt) harcamaksızın, sadece "Zekâ, gözlem ve BİLGİ" (information) kullanılarak evrenin o mutlak "çürüme ve kaosa (entropiye) gitme" kuralının tersine çevrilip (düzen yaratılıp) yenilebileceği fantezisinin',
      'Şeytani varlıkların fizik dünyasında gerçekten var olduğuna dair dini bir ispatın',
      'Gaz moleküllerinin kapalı odalarda her zaman aynı hızda hareket ettiğinin'
    ],
    correct: 1,
    explanation: 'Şeytanın (zekânın) enerji harcamadan atomları seçip düzen yaratması; evrenin kaçınılmaz çürüme kuralına (entropiye) karşı "Bilgi (Zekâ/Gözlem)" ile isyan edilerek düzenin sağlanabileceği fantezisini kurgular.'
  },
  {
    title: 'Von Neumann Sondaları (Kozmik Kanser)',
    passage: 'Eğer bir uzaylı medeniyeti koca galaksiyi ele geçirmek isteseydi, bunu binlerce savaş gemisi inşa ederek mi yapardı? Dâhi matematikçi John von Neumann bu sığ kibri, kan dondurucu bir tasarımla yıktı: "Kendini Kopyalayan Uzay Sondaları" (Von Neumann Probes). Çok zeki bir medeniyet uzaya sadece "bir adet" zeki, otonom bir robot (sonda) fırlatır. Bu robot komşu bir yıldız sistemine gider, oradaki asteroitlerdeki metalleri (kaynakları) kullanarak kendisinin "birebir kopyası olan iki yeni robot" üretir. Sonra o ikisi dörde, dört tanesi sekize katlanarak uzaya yayılır! Bu geometrik katlanma (virüs) o kadar hızlı ve korkunçtur ki; sadece tek bir robot, Samanyolu Galaksisindeki milyarlarca yıldızı sadece birkaç milyon yıl içinde (evrensel ölçekte saniyeler içinde) çekirgeler gibi istila eder. Von Neumann Sondaları; evrendeki en büyük tehlikenin ışın kılıçlı uzaylılar değil, matematiğin (ve yapay zekânın) o durdurulamaz, ahlak yoksunu ve virüs gibi kendi kendini kopyalayan (soğuk) geometrik kanseri olduğunu ispatlar.',
    questionStem: 'Von Neumann Sondaları teorisi, galaktik istila (ve yapay zekâ) tehlikesini nasıl bir felsefi/matematiksel kabûsa indirgemiştir?',
    options: [
      'Uzay gemilerinin yakıtlarının zamanla tükeneceği için istilaların her zaman yarım kalacağına',
      'Galaktik bir istilanın büyük ordularla değil; "kendi kendini kopyalayarak katlanan, kaynakları sömüren ve ahlaktan/duygudan yoksun otonom bir yapay zekâ virüsünün" (geometrik matematiğin) elinde saniyeler içinde gerçekleşebileceği kâbusuna',
      'Uzaylıların dünyaya gelmeden önce nükleer bombalar atarak gezegeni tamamen yok edeceğine',
      'İnsanlığın da başka gezegenleri işgal etmek için tahtadan kopyalar ürettiği ilkel korkusuna'
    ],
    correct: 1,
    explanation: 'Bir robotun kendi kopyalarını yaparak (virüs gibi) tüm galaksiyi sarması; uzay istilasının ordularla değil, kendini kopyalayan (duygusuz) bir AI virüsünün o durdurulmaz geometrik matematiğiyle gerçekleşebileceği kâbusunu açıklar.'
  },
  {
    title: 'Derinkuyu Yeraltı Şehri (Klostrofobik Medeniyet)',
    passage: 'Kapadokya bölgesindeki Derinkuyu, dünyadaki hiçbir mimari esere benzemez. Orası göğe yükselen bir şato veya piramit değil, tam aksine yerin metrelerce altına (18 kat derine) inşa edilmiş, aynı anda 20.000 insanın hayvanlarıyla birlikte aylarca yaşayabildiği devasa ve karanlık bir "Tersine Medeniyet"tir! İçinde okullar, kiliseler, şaraphaneler ve devasa havalandırma şaftları vardır. İnsanoğlu normalde güneşe ve gökyüzüne tapar. Peki bu binlerce insanı güneşten koparıp, fareler gibi yerin karanlık, soğuk ve klostrofobik bağırsaklarına (18 kat aşağıya) inmeye (ve bu devasa cehennemi tırnaklarıyla kazımaya) iten o korkunç güç neydi? Derinkuyu, insanlığın savaşlar, istilalar ve ölüm korkusu karşısında hissettiği o devasa paranoyanın (ve çaresizliğin) yeraltına kazınmış en görkemli, oksijensiz ve kapkaranlık manifestosudur. Bazen yaşamak için (ölümden kaçmak için) gökyüzünü terk edip kendi mezarınızı (zindanınızı) bir cennet gibi inşa etmek zorunda kalırsınız.',
    questionStem: 'Derinkuyu Yeraltı Şehri\'nin varlığı (insanların 18 kat yeraltında devasa bir şehir kurması), insan psikolojisi ve medeniyet tarihi hakkında neyin dondurucu bir kanıtıdır?',
    options: [
      'İç Anadolu bölgesindeki taşların sadece yeraltında işlenebilir yumuşaklıkta olduğunun',
      'İnsanoğlunun; savaş, istila ve ölüm korkusu (paranoyası) karşısında, en temel ihtiyacı olan güneşi ve gökyüzünü bile terk edip; kendi elleriyle devasa, klostrofobik ve karanlık bir yeraltı zindanını (hayatta kalma içgüdüsüyle) bir medeniyete çevirebildiğinin',
      'İnsanların doğuştan gelen madencilik yeteneklerinin sadece Türk coğrafyasında görüldüğünün',
      'Kış aylarında ısınmak için yeraltına girmenin o dönemki tek teknolojik çözüm olduğunun'
    ],
    correct: 1,
    explanation: '20 bin kişinin güneşi bırakıp 18 kat yeraltına devasa bir şehir (zindan) kurması; insanın hayatta kalma/ölüm korkusu karşısında güneşi bile terk edip karanlık bir yeraltı kâbusunu medeniyete (kurtuluşa) çevirebildiğinin kanıtıdır.'
  },
  {
    title: 'Hindenburg Felaketi (Zeplin Kibri ve Medya)',
    passage: '1937 yılında, Nazi Almanyası\'nın gökyüzündeki kibri olan devasa yolcu zeplini "Hindenburg", Amerika\'ya iniş yaparken sadece "yarım dakika" içinde alev topuna dönüşerek kül oldu (36 ölü). Hindenburg sıradan bir hava aracı değildi; o, okyanusları lüks yemek salonlarıyla ve piyanolarla aşan, gökyüzünün Titanic\'iydi! Alman mühendisler, sırf Amerika onlara güvenli Helyum gazını satmadığı için, o devasa zeplini aşırı derecede yanıcı (ve ölümcül) "Hidrojen" gazıyla doldurma cüretini göstermişlerdi. Ancak o kazayı tarih kitaplarına kazıyan asıl şey ateş değil, "Medya" idi. Olay, radyodan Herbert Morrison\'ın canlı yayında hıçkırıklara boğularak ("Aman Tanrım, insanlık yanıyor!") anlattığı ve filme alındığı için tüm dünyayı şoka soktu. Hindenburg Felaketi; teknolojik kibrin, siyasi inat (hidrojen) uğruna yüzlerce masumun canıyla havada oynadığı o canlı yayınlanmış rulettir. O tek bir kıvılcım (ve canlı yayın), koca bir zeplin çağını saniyeler içinde sonsuza dek çöpe atmıştır.',
    questionStem: 'Hindenburg Felaketi\'nin (zeplinin yanmasının) havacılık tarihini tek saniyede bitirmesi, "kibir ve iletişim (medya)" bağlamında neyin sembolüdür?',
    options: [
      'Helyum gazının hidrojen gazından daha hafif ve daha ucuz bir madde olduğunun',
      'Siyasi inat (kibir) uğruna ölümcül bir gazın kullanıldığı o teknolojik şovun; medyanın (radyonun) canlı yayındaki dehşet aktarımıyla birleştiğinde koca bir endüstriyi (Zeplin çağını) saniyeler içinde geri dönülemez şekilde çöpe atıp bitiren bir kıyamet/utanç anıtı olduğunun',
      'Alman mühendislerin Amerika iklimine uygun olmayan kumaşlar kullanarak zeplini zayıflattığının',
      'İnsanların uçak korkusu yüzünden sadece gemilerle seyahat etmeyi tercih etmelerinin'
    ],
    correct: 1,
    explanation: 'Helyum verilmediği için inatla yanıcı hidrojen kullanılması (kibir) ve bunun canlı yayında (medya dehşetiyle) izlenmesi; teknolojik şovun kibrinin, medyanın aktarımıyla koca bir zeplin endüstrisini sonsuza dek bitirdiğinin sembolüdür.'
  },
  {
    title: 'Theranos Skandalı (Silikon Vadisi\'nin İllüzyonu)',
    passage: '2000\'li yılların başında Elizabeth Holmes adında siyah balıkçı yaka giyen, Steve Jobs taklitçisi genç bir kadın, "Sadece parmaktan alınacak tek bir damla kanla yüzlerce hastalığı test edebilen" mucizevi bir cihaz (Edison) icat ettiğini duyurdu. Dünyanın en büyük generalleri, milyarderleri ve medya patronları bu "dâhiye" inandı; Theranos şirketine milyarlarca dolar yatırım yapıldı. Oysa cihaz aslında "çalışmıyordu!" Hiçbir bilimsel temeli yoktu; testler eski, kaba yöntemlerle (gizlice) başka cihazlarda yapılıyor ve hastalara sahte (yanlış) kanser teşhisleri gönderiliyordu. Holmes bir bilim insanı değil, Silikon Vadisi\'nin o "Fake it till you make it" (Başarana kadar yalan söyle/taklit et) felsefesinin zehirli bir ürünüydü. Theranos Skandalı bize insanlığın en karanlık kibrini fısıldar: İnsanoğlu (hatta en zeki sandığımız milyarderler bile), bilimsel gerçeğe veya matematiğe değil; karizmatik bir hikâyeye, iddialı bir sese ve kendilerine sunulan o "kurtarıcı dâhi (mesih)" tiyatrosuna inanmaya o kadar açtır ki; milyarlarca doları saniyeler içinde içi boş bir yalana gözü kapalı yatırabilir.',
    questionStem: 'Theranos Skandalı (Elizabeth Holmes\'un sahte kan testi cihazıyla dünyayı kandırması), modern toplumun ve Silikon Vadisi\'nin hangi "tehlikeli (illüzyon) zaafını" ifşa eder?',
    options: [
      'Kan tahlillerinin laboratuvar ortamı dışında yapılmasının teknolojik olarak imkânsız olduğunu',
      'Milyarderlerin ve güya "zeki/elit" yatırımcıların; bilimsel gerçeklere (veriye) bakmak yerine, "karizmatik bir kurtarıcı (dâhi) kurgusuna ve hikâyesine" inanmaya olan o körü körüne açlıklarını (ve yalanla kurulan vitrine tapınma zaafını)',
      'Siyah giysilerin iş dünyasında insanları her zaman daha zeki ve güvenilir gösterdiği şeklindeki moda algısını',
      'Kadın girişimcilerin teknoloji dünyasında erkeklerden daha çok desteklendiği yanılgısını'
    ],
    correct: 1,
    explanation: 'Cihaz çalışmamasına rağmen milyarderlerin ona inanması; elitlerin/toplumun bilimsel gerçek yerine "karizmatik hikâyelere, şova ve sahte bir kurtarıcı/dâhi kurgusuna" inanmaya olan kör ve tehlikeli zaafını (illüzyonunu) ifşa eder.'
  },
  {
    title: 'Project Plowshare (Nükleer Barış Kibri)',
    passage: 'İkinci Dünya Savaşı bittikten sonra Amerikan hükümeti "Nükleer enerjiyi sadece öldürmek için değil, insanlık yararına (!) inşaat projelerinde kullanabiliriz" diyerek akıllara durgunluk veren bir kibre soyundu: "Project Plowshare" (Saban Demiri Projesi). Fikir şuydu: Neden dağları aylarca dinamitle kazalım ki? Bir nükleer bomba atarız, saniyeler içinde devasa bir liman, yeni bir Panama Kanalı veya dev yeraltı su depoları açarız! Hatta 1962\'de Sedan Kraterini açmak için gerçekten de devasa bir nükleer bomba patlattılar. Ancak doğa bu şımarık kibre anında cezasını kesti. Açılan o "kullanışlı" kraterler o kadar zehirli, o kadar radyoaktifti ki, yanına tek bir işçi bile yaklaşamadı. Bulutlar radyasyonu kilometrelerce öteye, süt içen bebeklerin kemiklerine kadar taşıdı. Plowshare Projesi; insan aklının, yıkım (ölüm) makinesine "barışçıl bir iş makinesi" maskesi giydirerek doğayı (ve ekosistemi) kestirme yoldan, zorla (ve kibre kapılarak) kendi kalıbına sokabileceğini sanan o en ahmakça ve ölümcül mühendislik trajedisidir.',
    questionStem: 'Project Plowshare (Dağları ve kanalları açmak için nükleer bomba patlatma fikri), bilim ve mühendislik kibri hakkında neyi sembolize etmektedir?',
    options: [
      'Nükleer silahların aslında radyoaktif olmadığına dair hükümet yalanını',
      'Gelecekte inşaat sektörünün nükleer enerjiyi güvenli bir şekilde kullanabileceğinin kanıtını',
      'İnsanın, elindeki o mutlak "yıkım/ölüm" makinesine (nükleer bombaya) "faydalı bir araç (barış)" kılıfı uydurarak; doğayı kestirme yoldan ve şiddetle (kibirle) şekillendirebileceğini sanmasının getirdiği o ahmakça ve zehirleyici felaketi (trajediyi)',
      'Dağların ve kayaların atom bombalarına bile dayanıklı olan fiziksel sertliğini'
    ],
    correct: 2,
    explanation: 'Nükleer bombayı "kanal açmak" için faydalı bir alet (saban) gibi kullanıp etrafı zehirlemeleri; ölüm silahına barış maskesi takarak doğayı şiddetle/kibirle şekillendirebileceğini sanan o ahmakça (kibirli) mühendislik trajedisini sembolize eder.'
  },
  {
    title: 'Maunder Minimum (Güneşin Uykusu ve Buzul)',
    passage: 'Hepimiz iklimin sadece dünyadaki volkanlar veya insan etkinlikleriyle değiştiğini sanırız. Oysa 1645 ile 1715 yılları arasında Avrupa kıtası, kelimenin tam anlamıyla bir "Mini Buzul Çağı"na girdi. O yıllarda okyanuslar dondu, İngiltere\'deki Thames Nehri o kadar kalın bir buzla kaplandı ki insanlar üzerinde haftalarca süren panayırlar (Buz Fuarları) kurdular. Ekinler öldü, milyonlarca insan açlıktan donarak can verdi. Bilim insanları yıllar sonra bu ölümcül kışın sebebini uzayda buldu: "Maunder Minimum". Güneş\'in yüzeyindeki o enerjik patlamalar ve kara lekeler (Sunspots), o 70 yıl boyunca tamamen ortadan kaybolmuştu! Güneş adeta ocağın altını kısmış, kozmik bir uykuya (huzura) dalmıştı. Ve güneşin o kısacık dinlenmesi (uykusu), dünyadaki insanları dondurarak öldürmeye yetmişti. Bizim dünyadaki tüm tarımımız, sıcaklığımız ve şımarık medeniyet kibrimiz; aslında o devasa ve alevli kozmik nükleer fırının (Güneş\'in) milimetrik kalp atışlarına pamuk ipliğiyle bağlı, zavallı ve donmaya hazır bir seradan ibarettir.',
    questionStem: 'Maunder Minimum (Güneş lekelerinin kaybolmasıyla Avrupa\'nın donması), insanlık ve Dünya\'nın evrendeki konumu hakkında neyin (ürpertici) bir ispatıdır?',
    options: [
      'İnsanoğlunun kömür ve odun kullanarak dünyayı donmaktan her zaman kurtarabileceğinin',
      'Dünya üzerindeki tüm yaşamın, medeniyetin ve iklimin (kibrimizin); kendi bağımsız gücümüze değil, aslında Güneş\'in o devasa, milimetrik ve dengesiz (kozmik) kalp atışlarına "pamuk ipliğiyle (ve çaresizce)" bağlı olduğu gerçeğinin',
      'Thames Nehrinin suyunun diğer nehirlerden çok daha hızlı donan tatlı bir su olduğunun',
      'Uzay araştırmaları için soğuk yılların her zaman daha verimli atmosfere sahip olduğunun'
    ],
    correct: 1,
    explanation: 'Güneşin lekeleri (aktivitesi) durduğu an dünyada buzul çağı yaşanması; bizim övündüğümüz medeniyet ve yaşamın, tamamen Güneşin o devasa/dengesiz kalp atışlarına pamuk ipliğiyle bağlı (çaresiz) bir sera olduğunu ispatlar.'
  },
  {
    title: 'Ölü Deniz Yazmaları (Kumların Sakladığı Sır)',
    passage: '1947 yılında bir Bedevi çoban, Lut Gölü (Ölü Deniz) yakınlarındaki Qumran mağaralarında kaybolan keçisini ararken bir taş fırlatır. İçeriden kırılan bir çömlek sesi gelir. Çoban içeri girdiğinde, kil küplerin içine gizlenmiş, 2000 yıldır karanlıkta bekleyen deri parşömenler (Ölü Deniz Yazmaları) bulur! Bu yazmalar, Eski Ahit\'in bilinen en eski (orijinal) kopyalarıydı ve o dönemde Kilise\'nin veya devletlerin sansüründen, otonomisinden tamamen uzak yaşayan münzevi "Esseniler" tarikatı tarafından çöle gizlenmişti. Bu keşif sadece teolojiyi değil, felsefeyi de sarstı. Çünkü biz tarihi, her zaman devasa kralların saraylarında yazılan altın yaldızlı kitaplardan öğreniriz. Oysa Qumran mağarası; asıl hakikatin (ve saf bilginin), iktidarın gürültülü ve sansürcü merkezlerinde değil; onu yok olmaktan korumak uğruna çöle (ve karanlık mağaralara) kaçıran, dışlanmış ve yalnız münzevilerin sessiz küplerinde (hafızasında) saklı olduğunu evrene haykıran, kâğıttan yapılmış bir zaman makinesidir.',
    questionStem: 'Ölü Deniz Yazmaları\'nın (Qumran Mağaraları\'nda) çölün ortasında bir çoban tarafından bulunması, tarih ve hakikat (bilgi) aktarımı bağlamında neyi sembolize eder?',
    options: [
      'Dinlerin aslında Orta Doğu coğrafyası dışına hiçbir zaman çıkamayacağının',
      'Çobanların ve köylülerin arkeoloji bilimine profesörlerden daha yatkın olduğunun',
      'Asıl saf ve sansürsüz bilginin (hakikatin/tarihin); iktidarın (sarayların) o gürültülü merkezlerinde değil, onu korumak uğruna çölün (ve karanlık mağaraların) sessizliğine kaçıran o dışlanmış, münzevi (ve koruyucu) hafızalarda saklı kaldığını',
      'Deri parşömenlerin kağıttan çok daha ucuz bir malzeme olduğu için bolca bulunduğunu'
    ],
    correct: 2,
    explanation: 'Bilginin saraylarda değil çölde (Esseni münzevilerince) saklanıp korunması; saf hakikatin (ve tarihin), sansürcü iktidarlardan uzakta, çölün o yalnız ve dışlanmış/koruyucu sessizliğinde saklı olduğu gerçeğini sembolize eder.'
  },
  {
    title: 'Fukuşima Tsunami Taşları (Ataların Feryadı)',
    passage: '2011 yılında Japonya\'da yaşanan o korkunç 9.0 şiddetindeki deprem ve ardından gelen devasa tsunami, kıyı şehirlerini ve Fukuşima Nükleer Santralini yerle bir etti. Ancak sular çekildikten sonra, modern mühendisliğin (ve kibrin) suratına bin yıllık sarsılmaz bir tokat indi. Japon kıyılarının yüksek tepelerinde, yüzlerce yıl önce yosun tutmuş kayalara kazınmış "Tsunami Taşları" (Tsunami Stones) keşfedildi. Ataları, tam da suların ulaştığı o sınır çizgilerine şu dondurucu ve net uyarıyı kazımıştı: "Asla bu taşın aşağısına (deniz seviyesine) ev yapmayın! Sular buraya kadar gelir!" Ancak yüksek teknolojiye, beton duvarlara ve uyarılara kulak asmayan modern kibirli Japonya (ve inşaat sektörü), o taşları görmezden gelmiş ve tam da o yasak (ve ölümcül) çizginin altına nükleer santralleri ve şehirleri kurmuştu. Tsunami Taşları; bilgisayar modellerine ve beton bariyerlere güvenen modern aklın; doğayı kanıyla ve canıyla tecrübe etmiş o kadim (eski) atalarının dilsiz ve haklı bilgeliği (uyarısı) karşısında saniyeler içinde nasıl sulara gömüldüğünün en ıslak (ve acı) kanıtıdır.',
    questionStem: 'Japonya\'daki "Tsunami Taşları"nın (ataların "bu çizginin altına ev yapmayın" uyarısının) modern binalar tarafından görmezden gelinmesi ve sulara gömülmesi, neyin trajik bir eleştirisidir?',
    options: [
      'Eski dönemlerde insanların deprem tahminlerini yıldızlara bakarak daha doğru yaptığının',
      'Yüksek teknolojiye (ve betonlara) körü körüne güvenen "modern mühendislik kibrinin"; doğayı acı bedellerle tecrübe etmiş o kadim (eski) nesillerin dilsiz ve haklı bilgeliğini (uyarılarını) hiçe sayarak kendi felaketini kendi elleriyle çağırmasının',
      'Japon alfabesinin taşa kazınmasının zamanla okunaksız hale gelip yanlış anlaşıldığının',
      'Tsunamilerin sadece nükleer santrallerin bulunduğu bölgeleri kasten hedef aldığının'
    ],
    correct: 1,
    explanation: 'Ataların "buradan aşağı yapmayın" yazısını modern mühendislerin (betona güvenip) hiçe sayarak oraya santral kurması ve batması; teknolojik kibrin, kadim tecrübeyi (ve doğanın yasasını) görmezden gelerek felakete sürüklendiğinin trajik eleştirisidir.'
  },
  {
    title: 'Büyük Londra Smogu (Sessiz Kıyamet)',
    passage: 'Aralık 1952\'de Londra, tarihinin en dondurucu soğuklarından birini yaşadı. İnsanlar evlerini ısıtmak için ocaklarına kalitesiz, bol sülfürlü kömürleri doldurdu. Ancak gökyüzünde rüzgâr yoktu; bir "sıcaklık terselmesi" (inversion) şehrin üzerini görünmez bir kapak gibi kapattı. Milyonlarca bacadan çıkan o zehirli, sarı-siyah kömür dumanı gökyüzüne çıkamadı ve doğrudan sokaklara çöktü. Görüş mesafesi sıfıra indi, insanlar yolda yürürken önlerini bile göremiyordu. "Büyük Smog" o kadar sinsi ve sessiz bir katildi ki, insanlar durumun ciddiyetini cenaze evlerinde tabut kalmayınca anladılar! Sadece 5 gün içinde, o zehirli sisi soluyan 12.000 Londralı nefes darlığından ve kalp krizinden (kendi ciğerlerinde boğularak) can verdi. Büyük Smog; insanoğlunun ilerleme ve sanayi kibriyle (bacalarla) doğaya kustuğu o zehirli nefesin; rüzgâr (doğa) ondan yardımını kestiği o tek bir günde, bizzat onu üretenleri sokaklarda kendi zehirleriyle boğduğu, dilsiz ve intikamcı bir ekolojik şamardır.',
    questionStem: '1952 yılındaki "Büyük Londra Smogu" (binlerce insanın zehirli sisten ölmesi), sanayi devrimi ve insan doğa ilişkisine dair hangi sarsıcı gerçeği (ironiyi) yüzümüze çarpar?',
    options: [
      'Londra\'daki nehir sularının buharlaşarak zehirli bir gaza dönüştüğünü',
      'İlerlemek (ve ısınmak) adına doğaya fütursuzca salınan sanayi zehirlerinin; doğa olayları (rüzgârsızlık) yardımı kestiğinde, bizzat o zehri üreten (kibirli) insanlığı sokağa çıkamaz hale getirip kendi nefeslerinde boğan sinsi ve ölümcül bir intikama (bumeranga) dönüştüğünü',
      'Kaliteli kömürlerin her zaman sadece zenginler tarafından satın alınabildiği sınıfsal gerçeğini',
      'Kış aylarında ortaya çıkan sislerin her zaman insan psikolojisini bozarak intihara sürüklediğini'
    ],
    correct: 1,
    explanation: 'Sanayinin (insanın) gökyüzüne saldığı zehrin, rüzgâr durunca (kapak kapanınca) bizzat şehre çöküp insanları boğması; doğaya kusulan zehrin dönüp kendi yaratıcısını öldürdüğü (ekolojik bumerang/intikam) ironisini gösterir.'
  },
  {
    title: 'Vampir Yarasalar (Kan Kardeşliği ve Biyolojik Ahlak)',
    passage: 'İnsanoğlu ahlakı, paylaşmayı ve yardımlaşmayı sadece dinlerin veya gelişmiş felsefenin öğrettiği "insani" bir erdem sanır. Biyoloji dünyasında "Vampir Yarasalar" (Desmodus rotundus) bu kibri tek bir kan damlasıyla yıkar! Bu yarasalar hayatta kalmak için her gece kan emmek zorundadır. Ancak bir gece kan bulamayan aç bir yarasa mağaraya döndüğünde (iki gün içinde ölecektir), tok olan ve kan emmiş başka bir yarasa (aralarında hiçbir kan bağı olmamasına rağmen!) yanına gelir ve midesindeki kanın bir kısmını aç olan o yabancı yarasaya "kusarak" onun hayatını kurtarır! Biyolojide buna "Karşılıklı Özgecilik" (Reciprocal Altruism) denir. O yarasa bunu cennete gitmek için yapmaz; o yarasa bunu, yarın öbür gün kendisi aç kaldığında sürünün de onu kurtaracağı o görünmez "sosyal güven (ve dayanışma)" sistemini ayakta tutmak için yapar. Ahlak ve merhamet gökten zembille inmemiştir; o, vahşi doğanın en kanlı ve acımasız mağaralarında bile hayatta kalabilmek için evrimin bizzat DNA\'ya kodladığı o en eski, en ilkel ve en zorunlu (kanlı) kardeşlik sözleşmesidir.',
    questionStem: 'Vampir yarasaların aç kalan (ve akrabası olmayan) diğer yarasalara kan kusarak onları kurtarması, "Ahlak ve Yardımlaşma" kavramlarına dair hangi biyolojik gerçeği kanıtlar?',
    options: [
      'Hayvanların midelerindeki fazla yiyecekleri sindiremedikleri için kusmak zorunda kaldığı fizyolojik gerçeğini',
      'Yardımlaşma, paylaşma ve "ahlaki (özgeci)" davranışların sadece insana (ve kültüre) ait yüce erdemler olduğu inancını yıkarak; bunların aslında evrimin "hayatta kalmak (karşılıklı güven/sosyal sigorta)" için en ilkel canlıların (yarasaların) DNA\'sına bile kodladığı biyolojik bir zorunluluk (strateji) olduğunu',
      'Yarasaların mağaralarda yaşarken sadece aynı aileden olanlara yardım ettiğini',
      'Vampir efsanelerinin sadece hastalık saçan yarasalardan ilham alınarak kurgulandığını'
    ],
    correct: 1,
    explanation: 'Yarasaların kan bağı olmayanlara kan paylaşması (Karşılıklı Özgecilik); ahlakın ve yardımlaşmanın (sadece insani/yüce bir erdem değil) vahşi doğada hayatta kalmak için DNA\'ya kodlanmış "evrimsel/biyolojik bir zorunluluk" olduğunu kanıtlar.'
  },
  {
    title: 'Halo Etkisi (Güzelliğin İllüzyonu)',
    passage: 'Bir mahkemede jüri üyesi olduğunuzu düşünün. Karşınızda aynı suçu işlemiş iki sanık var: Biri son derece yakışıklı, bakımlı ve çekici bir adam; diğeri ise asimetrik yüzlü, bakımsız ve çirkin biri. Mantığınız her ikisine de aynı cezayı vereceğinizi söyler. Oysa psikolog Edward Thorndike\'ın bulduğu "Halo Etkisi" (Hale Etkisi) beynimizin bu rasyonel adaletini saniyeler içinde çöpe atar. İnsan zihni, fiziksel olarak "güzel/yakışıklı" birini gördüğünde, anında onun kafasının üzerine görünmez ve melek (Halo) halesi yerleştirir. Beynimiz; "Güzel olan aynı zamanda zekidir, ahlaklıdır, güvenilirdir ve masumdur" şeklinde tamamen mantık dışı, kestirme bir biyolojik virüse kapılır. Çekici insanlar mülakatlarda daha kolay işe alınır, mahkemelerde daha az ceza alır ve okullarda öğretmenler tarafından daha zeki kabul edilirler! Halo Etkisi; insanın o "bilge, rasyonel ve adil" karar verdiğini sanan kibrinin; aslında sadece birkaç santimlik (genetik) yüz simetrisine ve estetik kılıfa aldanarak hakikati (ve adaleti) körü körüne çöpe atan sığ (ve estetik fetişisti) bir illüzyon makinesi olduğunun en acı kanıtıdır.',
    questionStem: 'Psikolojideki "Halo Etkisi" (Fiziksel güzelliğin ahlak ve zekâ ile eşleştirilmesi), insan aklının "karar alma ve adalet" mekanizmasına dair hangi sığ (ve tehlikeli) zaafını ifşa eder?',
    options: [
      'Toplumların güzellik yarışmalarına gereksiz yere büyük paralar harcadığını',
      'Göz sağlığının insan psikolojisini bozarak odaklanma problemlerine yol açtığını',
      'Rasyonel ve adil (objektif) karar verdiğimizi sanmamıza rağmen; beynimizin sadece "fiziksel (estetik) güzelliğe" aldanarak, o kişiye "zekâ, ahlak ve masumiyet" gibi alakasız yüce özellikleri anında (körü körüne) atfeden sığ, kestirme ve adaletsiz bir illüzyona (önyargıya) sahip olmasını',
      'Güzel insanların genetik olarak her zaman daha az suç işlemeye yatkın olduğu yönündeki bilimsel tezi'
    ],
    correct: 2,
    explanation: 'Güzel insanlara anında "iyi, zeki, masum" etiketi yapıştırılması (Halo Etkisi); insanın objektif ve adil karar aldığı kibrini yıkarak, sadece yüz simetrisine (estetiğe) aldanıp hakikati (ve adaleti) çöpe atan sığ ve önyargılı bir zaafı (illüzyonu) ifşa eder.'
  },
  {
    title: 'Darvaza Gaz Krateri (Sönmeyen Cehennem Kapısı)',
    passage: '1971 yılında Sovyet jeologlar Türkmenistan\'ın ıssız Karakum Çölü\'nde doğalgaz ararken yanlışlıkla büyük bir yeraltı mağarasını deldiler. Toprak çöktü, 70 metre çapında devasa bir krater oluştu ve zehirli metan gazı havaya yayılmaya başladı. Mühendisler, yakındaki köyler zehirlenmesin diye "Hadi bu gazı yakalım, nasıl olsa birkaç güne kendi kendine tükenip söner" diyerek deliğin içine yanan bir meşale fırlattılar. O kibritin atıldığı günden bugüne tam 50 YIL GEÇTİ! O "birkaç güne sönecek" denilen gaz, meğerse devasa bir yeraltı rezervine bağlıymış. Bugün "Cehennem Kapısı" (Darvaza) olarak bilinen bu devasa krater, gece gündüz demeden çölde harlı alevlerle, fokurdayarak yanmaya ve tüm gökyüzünü kırmızıya boyamaya devam ediyor. Bu sönmeyen ateş; doğanın (ve yeraltının) kapasitesini "basit bir hesap tablosuyla" ölçeceğini ve onu bir kibritle hizaya sokacağını sanan o cüretkâr "mühendislik (insan) kibrinin"; kendi elleriyle nasıl sonsuza dek yanan bir cehennem (ve israf) kapısı açabileceğinin yeryüzündeki en sıcak, en absürt anıtıdır.',
    questionStem: 'Darvaza Gaz Krateri\'nin ("Cehennem Kapısı"nın) sadece birkaç gün yanması beklenirken 50 yıldır sönmemesi, bilimsel ve teknolojik kibir hakkında neyin sembolüdür?',
    options: [
      'Sovyetlerin çöl ortasında bilerek turistik bir tesis kurma amacıyla bu ateşi yaktığının',
      'İnsan aklının ve mühendisliğinin; doğanın o devasa, gizli ve görünmez kapasitesini (yeraltındaki gücünü) küçümseyerek (bir kibritle geçiştireceğini sanarak) giriştiği o kibirli (ve dikkatsiz) müdahalenin, nasıl kendi elleriyle sonsuza dek yanan (kontrol edilemez) bir felakete dönüştüğünün',
      'Karakum Çölündeki kumların ateşi besleyen çok özel kimyasal minerallere sahip olduğunun',
      'Depremlerin doğalgaz borularını kırarak şehirlere zarar verdiği gerçeğinin'
    ],
    correct: 1,
    explanation: 'Birkaç güne söner diye atılan kibritin 50 yıldır koca bir cehennem olarak yanması; insanın doğayı küçümseyen o "kibirli (kısa görüşlü) müdahalesinin", nasıl sonsuz ve kontrol edilemez bir felakete (kâbusa) dönüştüğünü sembolize eder.'
  },
  {
    title: 'Bermuda Şeytan Üçgeni (Medyanın Uydurduğu Kâbus)',
    passage: 'Gemi ve uçakların açıklanamayan bir şekilde kaybolduğu, uzaylıların, manyetik girdapların ve deniz canavarlarının cirit attığı o meşhur "Bermuda Şeytan Üçgeni" efsanesini hepimiz biliriz. Peki bilim dünyası ve sigorta şirketleri (Lloyd\'s of London) bu bölgeyi nasıl tanımlar? Dünyanın en sıradan okyanuslarından biri olarak! İstatistiklere göre, Bermuda Üçgeni\'nde batan gemi sayısı, dünyanın diğer benzer yoğunluktaki deniz trafiğine (örneğin Japonya açıkları veya Manş denizi) kıyasla ne bir eksik ne de bir fazladır (tamamen aynı orandadır). Sadece okyanusun o bölgesi şiddetli fırtınalara (Gulf Stream akıntısına) ve çok yoğun bir trafiğe sahiptir, batan da batar. O zaman bu devasa kâbus nasıl doğdu? 1960\'larda çok satan kitap yazarları ve dergiler, sıradan deniz kazalarını alıp (raporları çarpıtarak) üzerine "gizemli müzikler ve uzaylılar" ekleyip popüler bir şov (reyting makinesi) yarattılar. Bermuda efsanesi; insanlığın doğaüstü masallara (ve gizemlere) duyduğu o hastalıklı açlığın; sıkıcı, istatistiksel ve rasyonel (sıradan) gerçeği nasıl ezip geçerek (medyanın eliyle) dünya çapında sahte bir felsefi mitoloji yaratabileceğinin en büyük (ve ticari) illüzyonudur.',
    questionStem: 'Bermuda Şeytan Üçgeni efsanesinin istatistiksel olarak tamamen "sıradan" bir okyanus çıkması, popüler kültür ve "gizem (mit) inşası" hakkında neyi ispatlar?',
    options: [
      'Gemi kaptanlarının pusula kullanmayı bilmedikleri için genellikle okyanusta kaybolduklarını',
      'İnsanoğlunun (ve medyanın); sıradan, istatistiksel ve sıkıcı (rasyonel) gerçekler yerine; doğaüstü masallara (gizemlere/uzaylılara) inanmaya olan o kâr odaklı ve ticari açlığı yüzünden, koca bir okyanusu bile "sahte bir korku mitolojisine (illüzyona)" çevirebildiğini',
      'Deniz altındaki aktif volkanların yaydığı gazların gemileri kasten batırmak için programlandığını',
      'Sigorta şirketlerinin zarar etmemek için kasten gemi kaza oranlarını düşük gösterdiğini'
    ],
    correct: 1,
    explanation: 'Bölgenin sıradan bir deniz olmasına rağmen uzaylıların/gizemlerin uydurulması; insanın ve medyanın sıkıcı (gerçek) istatistikler yerine, korku ve doğaüstü masallara inanmaya/satmaya (illüzyon/mitoloji yaratmaya) olan o hastalıklı açlığını ispatlar.'
  },
  {
    title: '52 Hertz Balinası (Okyanustaki Mutlak Yalnızlık)',
    passage: '1989 yılında, okyanusun derinliklerini dinleyen Amerikan denizaltı mikrofonları (SOSUS), bir balinaya ait olduğu kesin olan ama dünya tarihindeki hiçbir balinanınkine benzemeyen tuhaf bir şarkı (ses) kaydettiler. Normal mavi balinalar 15 ila 25 Hertz frekansında birbirleriyle iletişim kurarken; bu balina "52 Hertz" frekansında, yani diğer tüm balinaların "ASLA DUYAMAYACAĞI", çok daha tiz bir perdede şarkı söylüyordu. Bilim insanları bu balinayı onyıllar boyunca takip ettiler. O, yıllarca Pasifik Okyanusu\'nda eş bulmak, iletişim kurmak için durmaksızın çığlık atarak (şarkı söyleyerek) yüzdü, ancak sesi diğer balinaların frekansını aşmadığı için o devasa okyanusta hiçbir zaman tek bir cevap bile alamadı. Ona "Dünyanın En Yalnız Balinası" dediler. 52 Hertz Balinası, biyolojik bir anomaliden çok daha fazlasıdır; o, koca bir kalabalığın içinde yaşayıp da, kendi frekansını (dilini ve acısını) anlayacak tek bir ruh bulamadan, boşluğa doğru durmaksızın bağıran ve yankısız kalan o evrensel (ve trajik) "İnsan Yalnızlığının" okyanustaki devasa ve dilsiz yankısıdır.',
    questionStem: '52 Hertz frekansında şarkı söyleyen balinanın diğer balinalar tarafından duyulamaması, yazar tarafından psikolojik ve felsefi olarak neyin metaforu yapılmıştır?',
    options: [
      'Okyanusların kirlilik yüzünden ses dalgalarını yavaş yavaş iletemez hale geldiğinin',
      'Balinaların aslında diğer deniz canlılarıyla hiçbir zaman iletişim kurmak istemediğinin',
      'Kalabalıkların (veya bir türün) içinde olunsa bile; kişinin kendi frekansını, acısını ve dilini (ruhunu) anlayacak bir "muhatap (cevap)" bulamadığında, koca bir evrende sessizce yankılanan o dondurucu ve trajik "mutlak yalnızlık (anlaşılamama)" hissinin',
      'Yüksek frekanslı seslerin avcı köpekbalıklarını kaçırmak için evrimsel bir savunma olduğunun'
    ],
    correct: 2,
    explanation: 'Balinanın şarkı söylemesine rağmen frekansı farklı olduğu için kimsenin onu duymaması; kalabalığın içinde bile "anlaşılamamanın, kendi dilini konuşacak kimseyi bulamamanın" yarattığı o trajik ve evrensel (insani) mutlak yalnızlığın metaforudur.'
  },
  {
    title: 'Fermi Problemi ve Chicago\'daki Piyano Akortçuları',
    passage: 'Eğer birisi size "Chicago şehrinde tam olarak kaç tane piyano akortçusu vardır?" diye sorsa, elinizde internet veya telefon rehberi yoksa ne yaparsınız? İnsan beyni bu devasa bilgisizlik karşısında donar ve "Bunu bilmem imkânsız!" diyerek pes eder. Ancak Nobel ödüllü fizikçi Enrico Fermi (Fermi Tahminleri), aklın o pasif kibrini efsanevi bir tümdengelim sanatıyla yıkar. Fermi, cevabı bilmese de mantığı çalıştırır: "Chicago\'da 3 milyon kişi yaşar. Ortalama bir aile 4 kişidir (750.000 aile). Ailelerin %10\'unun piyanosu olsa (75.000 piyano). Her piyano yılda 1 kez akort edilse... Bir akortçu günde 2 piyano yapsa, yılda 500 piyano eder. 75.000 piyano bölü 500 = Tam 150 akortçu vardır!" İnternete veya kayıtlara bakıldığında çıkan gerçek sayı tam da 150 civarındadır! Fermi Problemi, bilgi çağının o "her şeyi Google\'a sorma" tembelliğine atılmış bir aydınlanma kılıcıdır: İnsan beyni, "veriye (ezbere)" sahip olmasa bile; elindeki küçücük, basit mantıksal varsayımları (parçaları) doğru kurarak, evrenin en bilinmez sandığı devasa şifrelerini bile oturduğu yerden (saf akılla) çözebilecek o korkutucu "tümdengelim" tanrısallığına sahiptir.',
    questionStem: 'Enrico Fermi\'nin (interneti olmadan sadece mantıkla) Chicago\'daki piyano akortçusu sayısını doğru tahmin etmesi, "insan aklı ve bilgi" hakkında hangi üstün (felsefi) yeteneği kanıtlar?',
    options: [
      'Gelecekteki yapay zekâların insanlardan çok daha hızlı tahmin yürüteceğini',
      'Piyano ve müzik sanatının Amerika ekonomisindeki asıl gizli itici güç olduğunu',
      'İnsanın (ve beynin), kesin verilere (ezbere/internete) sahip olmasa bile; basit parçaları ve rasyonel (mantıksal) varsayımları doğru birleştirerek (tümdengelimle), en devasa (imkânsız sanılan) bilinmezlikleri bile "saf akıl yürütme" yoluyla çözebilme (aydınlanma) dehasını',
      'Fizikçilerin genellikle müzik enstrümanlarına diğer bilim dallarından daha çok ilgi duyduğunu'
    ],
    correct: 2,
    explanation: 'İnternet veya kayıt olmadan sadece basit mantıksal adımlarla (75.000/500 gibi) doğru sayıya ulaşması; insan aklının ezber/veri olmadan da, rasyonel parçaları birleştirerek (tümdengelimle) en büyük bilinmezlikleri "saf mantıkla" çözebileceğini (dehasını) kanıtlar.'
  }
];

export const bilimParagrafSorulari51: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_51.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_51[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim51-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_52 = [
  {
    title: 'Noel Ateşkesi (1914 - İnsanlığın İsyanı)',
    passage: 'Birinci Dünya Savaşı\'nın o en kanlı, en çamurlu ve en acımasız ilk kışında, 1914 Noel gecesi Batı Cephesi\'nde mucizevi bir olay yaşandı. Siperlerde birbirini öldürmek için bekleyen Alman ve İngiliz askerleri, komutanlarının emirlerini hiçe sayarak aniden silahlarını bıraktılar. Alman tarafında mumlar yandı, İngiliz tarafında şarkılar söylendi. Askerler "insansız bölgeye" çıktılar, birbirlerine sarıldılar, çikolata ve sigara takas ettiler ve hatta çamurların içinde futbol maçı yaptılar! Noel Ateşkesi; savaşın ve ideolojilerin yarattığı o suni (yapay) nefret duvarlarının; insanın içindeki o en saf, en evrensel ve en barışçıl "kardeşlik" içgüdüsü karşısında bir geceliğine de olsa nasıl kâğıttan bir kule gibi yıkılabileceğinin tarihteki en hüzünlü kanıtıdır.',
    questionStem: '1914 Noel Ateşkesi olayı, savaş ve insan psikolojisi bağlamında neyin sembolü (kanıtı) olarak kabul edilmektedir?',
    options: [
      'Alman ordusunun savaş stratejisi olarak psikolojik bir pusu kurduğunun',
      'Askerlerin savaş meydanlarında her zaman profesyonel sporcular arasından seçildiğinin',
      'Siyasi ideolojilerin ve savaş emirlerinin yarattığı "sahte nefretin"; insanın temelindeki o evrensel "insanlık onuru ve kardeşlik" bağı karşısında ne kadar kırılgan ve geçici olabildiğinin',
      'Siper savaşlarının sadece kış aylarında yapılması gereken teknik bir zorunluluk olduğunun'
    ],
    correct: 2,
    explanation: 'Düşman askerlerin emirleri çiğneyip sarılması; savaşın yarattığı nefretin suni, insanın içindeki kardeşlik bağının ise evrensel ve yıkılmaz olduğunun sembolüdür.'
  },
  {
    title: 'Stanislav Petrov (Dünyayı Kurtaran Sezgi)',
    passage: '26 Eylül 1983 gecesi, Soğuk Savaş\'ın zirvesinde, Sovyet erken uyarı sistemleri bir alarm verdi: Amerika Birleşik Devletleri beş adet nükleer füze fırlatmıştı! Kural basitti: Petrov düğmeye basmalı ve karşı nükleer saldırıyı başlatmalıydı. Bu, III. Dünya Savaşı ve insanlığın sonu demekti. Ancak Yarbay Stanislav Petrov, sistemin "Hata" yapıyor olabileceğini düşündü. "Eğer Amerika saldıracak olsaydı, beş füzeyle değil, binlercesiyle gelirdi" diyerek üstlerine "Yanlış Alarm" raporu verdi. Gerçekten de sistem, güneş ışığının bulutlardaki yansımasını "füze" sanmıştı! Petrov o gece düğmeye basmayarak milyarlarca insanın hayatını kurtardı. Onun bu kararı; teknolojinin ve o kusursuz sandığımız algoritmaların (bilgisayarların) en kritik anlarda nasıl çökebileceğini ve insan "vicdanı ile rasyonel sezgisinin" o soğuk makinelerden her zaman daha üstün bir koruyucu olduğunu kanıtlar.',
    questionStem: 'Stanislav Petrov\'un nükleer alarm sırasında düğmeye basmaması, "İnsan ve Teknoloji" ilişkisi hakkında hangi sarsıcı gerçeği ispatlamıştır?',
    options: [
      'Nükleer silahların aslında sanıldığından çok daha az zarar verdiğini',
      'Bilgisayar sistemlerinin ve algoritmaların asla hata yapmayacak kadar kusursuz olduğu inancını yıkarak; en kritik (ölümcül) anlarda insan "sezgisinin, vicdanının ve akıl yürütmesinin" teknolojiden çok daha hayati ve kurtarıcı olduğunu',
      'Sovyetler Birliği\'nin nükleer teknoloji konusunda Amerika\'dan çok daha geride olduğunu',
      'Güneş ışığının uzaydaki uyduların merceklerini tamamen erittiğini'
    ],
    correct: 1,
    explanation: 'Petrov\'un sezgisiyle nükleer savaşı durdurması; teknolojinin hata yapabileceğini, ancak insan vicdanı ve rasyonel aklının her zaman makinelerden üstün (kurtarıcı) olduğunu ispatlar.'
  },
  {
    title: 'Mary Celeste (Sessizliğin Sırrı)',
    passage: '1872 yılında Atlantik Okyanusu\'nda sürüklenen "Mary Celeste" gemisi bulunduğunda denizcilik tarihinin en büyük gizemi doğdu. Gemi sapasağlamdı, filikası yerindeydi, içindeki yiyecekler ve altınlar duruyordu; ancak kaptan, eşi ve mürettebattan oluşan 10 kişi sanki "buhar olup uçmuştu!" Tek bir kan izi veya kavga belirtisi yoktu. Sadece geminin bir odasından biraz su girmişti. Bilim insanları yıllar sonra bu toplu yok oluşu şöyle açıkladı: Gemideki alkol fıçıları sızmış ve ambarlarda görünmez, "soğuk bir patlama (parlama)" riski oluşmuştu. Kaptan, geminin her an havaya uçacağını sanarak herkesi iplerle gemiye bağlı olan küçük bir filikaya bindirmiş, ancak çıkan rüzgâr o ipi koparınca gemi yoluna devam ederken 10 kişi okyanusun ortasında çaresizce kalmıştı. Mary Celeste; insanın en sağlam (güvenli) sığınaklarını bile, saniyelik bir "korku ve panik" kararıyla terk edip, aslında çok daha büyük bir felaketin kucağına (hiçliğe) nasıl koşabileceğinin dilsiz bir anıtıdır.',
    questionStem: 'Mary Celeste gemisindeki insanların (hiçbir saldırı yokken) gemiyi terk edip yok olmaları, insan psikolojisindeki hangi "zaafı" sembolize eder?',
    options: [
      'Denizcilerin okyanusun ortasında her zaman doğaüstü varlıklardan korktuğu inancını',
      'İnsanoğlunun "panik ve korku" anında, elindeki en güvenli sığınağı (gerçeği) bile terk ederek; kontrolsüzce daha büyük bir tehlikeye (veya ölüme) doğru adım atma (akıl tutulması) refleksini',
      'Gemilerdeki alkol tüketiminin mürettebat arasında şiddetli kavgalara yol açtığını',
      'Atlantik Okyanusu\'ndaki su akıntılarının gemilerin yönünü kasten değiştirdiğini'
    ],
    correct: 1,
    explanation: 'Gemi sağlamken panikle kaçıp ölmek; insanın korku anında rasyonel aklını yitirip en güvenli sığınağını (gemiyi) bile terk ederek felakete (filikaya) koşma zaafını sembolize eder.'
  },
  {
    title: 'Dünyalar Savaşı Radyosu (Panik Sanatı)',
    passage: '30 Ekim 1938 gecesi, Orson Welles radyoda H.G. Wells\'in "Dünyalar Savaşı" romanını canlı bir tiyatro olarak seslendirdi. Welles, programı "gerçek bir haber bülteni" gibi kurgulamıştı; yayını kesip "Marslılar New Jersey\'e indi, zehirli gaz yayıyorlar!" diye anonslar yaptırıyordu. Radyolarının başındaki milyonlarca Amerikalı bunun bir kurgu olduğunu anlamadı ve tarihin en büyük "kitlesel histerisi" patlak verdi! İnsanlar ıslak bezlerle evlerine kapandı, sokaklara dökülüp kaçmaya çalıştılar, intihar edenler oldu. Oysa her şey sadece bir kurguydu! Bu olay; medyanın ve teknolojinin (sesin), insan aklının o en rasyonel savunma duvarlarını bile "gerçeklik sosuyla" nasıl yerle bir edebileceğinin; kitlelerin ise otorite kabul ettikleri bir ses karşısında eleştirel düşünceyi saniyeler içinde nasıl çöpe atabileceğinin sarsıcı ispatıdır.',
    questionStem: '1938\'deki "Dünyalar Savaşı" radyo yayınıyla yaşanan kitlesel panik, "Medya ve Toplum" ilişkisi hakkında hangi tehlikeyi ifşa etmektedir?',
    options: [
      'Radyo dalgalarının insan beyninde fiziksel bir uyuşma (hipnoz) yarattığı gerçeğini',
      'Uzaylı istilalarına karşı dünya ordularının o dönemde hiçbir hazırlığının olmadığını',
      'Medyanın, bir kurguyu (yalanı) "gerçeklik ve otorite" maskesiyle sunduğunda; kitlelerin eleştirel düşünceyi tamamen terk ederek en saçma iddialara bile körü körüne inanma ve "toplu cinnete (paniğe)" sürüklenme savunmasızlığını',
      'Amerikan halkının edebiyat ve tiyatro sanatına diğer toplumlardan daha çok değer verdiğini'
    ],
    correct: 2,
    explanation: 'Radyo oyununu gerçek sanıp sokağa dökülmeleri; medyanın (otoritenin) sesiyle sunulan kurguların, kitlelerin eleştirel aklını felç ederek toplu cinnete yol açma tehlikesini ifşa eder.'
  },
  {
    title: 'Kamikaze (İlahi Rüzgârın İronisi)',
    passage: '1281 yılında Moğol imparatoru Kubilay Han, tarihin en büyük donanmasıyla Japonya\'yı işgal etmek için yola çıktı. Japonya\'nın bu devasa orduya karşı koyacak hiçbir askeri gücü yoktu; ülke yok olmak üzereydi. Ancak tam o saniyede, denizde devasa bir fırtına (tayfun) koptu ve Moğol donanmasını saniyeler içinde okyanusun dibine gömdü. Japonlar bu fırtınaya "Kamikaze" (İlahi Rüzgâr) adını verdiler ve kendilerinin "tanrılar tarafından korunan kutsal bir millet" olduklarına dair sarsılmaz (ve tehlikeli) bir kibre kapıldılar. Bu olaydan tam 660 yıl sonra, II. Dünya Savaşı\'nda yenilmek üzere olan Japonlar, yine o "İlahi Rüzgâr"ın (mucizenin) geleceğine inanarak genç intihar pilotlarını (Kamikazeleri) ölüme gönderdiler. Kamikaze efsanesi bize şunu öğretir: Tarihteki rastgele bir doğa olayı (şans), bir toplumun zihninde "kutsal bir dokunulmazlık" kibrine dönüşürse; o toplum, rasyonel dünyadan kopup kendi sonunu getiren o en karanlık fanatizme hapsolabilir.',
    questionStem: 'Tarihteki "Kamikaze (İlahi Rüzgâr)" efsanesinin Japon toplumu üzerindeki felsefi (ve trajik) etkisi ne olmuştur?',
    options: [
      'Denizcilik teknolojisinin Japonya\'da dünyadan çok daha hızlı gelişmesini sağlaması',
      'Bir doğa olayının (şansın) yarattığı kurtuluşun; toplumda rasyonel olmayan bir "kutsal dokunulmazlık ve kibir" inancına dönüşerek, onları yıllar sonra kendi sonlarını getirecek bir fanatizme (ve intihara) sürüklemesi',
      'Moğolların Japonya ile yaptığı ticaretin Asya ekonomisini güçlendirmesi',
      'Fırtınaların sadece ada ülkelerinde görülen birer meteorolojik hata olarak kabul edilmesi'
    ],
    correct: 1,
    explanation: 'Fırtınanın yardımıyla kurtulmalarının "kutsalız" kibrine dönüşmesi ve bu inançla Pilotları intihara (ölüme) yollamaları; rastgele olaylara kutsallık yüklemenin yarattığı rasyonel olmayan (ve yıkıcı) kibirdir.'
  },
  {
    title: 'Büyük Londra Kokusu (Hijyenin Doğuşu)',
    passage: '1858 yazında Londra o kadar sıcaktı ki, Thames Nehri\'ne boşaltılan binlerce ton lağım ve insan atığı kelimenin tam anlamıyla "kaynamaya" başladı. Şehri öylesine iğrenç, öylesine dayanılmaz bir koku ("The Great Stink") sardı ki, Parlamento binasında pencereler bile açılamıyordu. O güne kadar halk ve yönetim, kanalizasyonun ve hijyenin gereksiz bir masraf olduğuna inanıyordu. Ancak o koku, elitlerin ve yöneticilerin burunlarını o kadar fena vurdu ki; sadece birkaç hafta içinde, dünyanın en gelişmiş ve devasa kanalizasyon sistemi olan "Joseph Bazalgette" projesine onay verdiler. Büyük Londra Kokusu bize o acı kuralı öğretir: İnsanoğlu (ve devlet); bir felaket kapısına dayanıp kendi konforunu ve canını doğrudan (fiziksel olarak) tehdit etmedikçe; toplumsal sorunları ve halkın sağlığını (kibriyle) görmezden gelmeye devam eden, ancak o "pislik" burnuna değince uyanan bir varlıktır.',
    questionStem: '1858 "Büyük Londra Kokusu" olayı, devlet yönetimi ve toplumsal değişim hakkında hangi "pragmatik" gerçeği temsil eder?',
    options: [
      'Londra\'daki nehir sularının sadece asiller için ayrılmış kutsal sular olduğunun ispatı',
      'Sıcak havaların insan zihninde her zaman daha yaratıcı projeler doğurduğu teorisi',
      'Yöneticilerin ve otoritenin; toplumsal bir sorunu (hijyen/altyapı) çözmek için, o sorunun ancak kendi "konforlarını ve hayatlarını" doğrudan (ve fiziksel olarak) tehdit edecek kadar büyümesine (burunlarına vurmasına) ihtiyaç duyması gerçeği',
      'Halkın her zaman yöneticilerinden daha temiz ve düzenli bir yaşam sürdüğünün kanıtı'
    ],
    correct: 2,
    explanation: 'Koku burnuna gelene kadar kanalizasyonu yapmayan yönetim; otoritenin ancak kendi konforu/canı tehlikeye girince toplumsal sorunlara (kibri bırakıp) çözüm bulduğu gerçeğini temsil eder.'
  },
  {
    title: 'Ataş Operasyonu (Paperclip ve Ahlakın İflası)',
    passage: 'İkinci Dünya Savaşı bittiğinde, Nazi Almanyası\'nın en üst düzey "bilim insanları" (roketçiler ve kimyagerler) aslında savaş suçlusu olarak yargılanmalıydı. Ancak Amerika, Sovyetlerden önce o zekâları ele geçirmek için gizli bir plan yaptı: "Operation Paperclip" (Ataş Operasyonu). Hitler\'in en sadık mühendisleri (Wernher von Braun gibi), dosyalarına birer "ataş" iliştirilerek geçmişleri silindi ve gizlice Amerika\'ya götürülüp NASA\'nın başına getirildiler! Bugün Ay\'a inen o meşhur Apollo roketlerini yapan eller; düne kadar köle işçileri çalıştıran ve V-2 füzeleriyle Londra\'yı vuran ellerin ta kendisidir. Paperclip Operasyonu; devletlerin "stratejik çıkar ve teknolojik üstünlük" uğruna; ahlakı, vicdanı ve adaleti saniyeler içinde nasıl çöpe atıp, dünün cellatlarını bugünün "bilim kahramanlarına" çevirebildiğinin en buz gibi (ve pragmatik) belgesidir.',
    questionStem: 'CIA\'in "Operation Paperclip" (Ataş Operasyonu) ile Nazi bilim insanlarını Amerika\'ya kaçırması, devletlerin "Ahlak ve Çıkar" dengesine dair neyi kanıtlar?',
    options: [
      'Alman bilim insanlarının Amerika\'ya zorla ve tehditle götürüldüğü gerçeğini',
      'Nükleer araştırmaların her zaman askeri sırlar olarak kalması gerektiği ilkesini',
      'Devletlerin "teknolojik güç ve ulusal çıkar" uğruna; ahlaki değerleri ve adalet duygusunu hiçe sayarak, en büyük savaş suçlularını bile (kendi amaçlarına hizmet ettikleri sürece) aklayıp "kahraman" ilan edebilecekleri o soğuk (pragmatik) ikiyüzlülüğü',
      'Nazi Almanyası\'nın aslında tıp dünyasına hiçbir katkı sağlamadığı yalanını'
    ],
    correct: 2,
    explanation: 'Nazi roketçilerin aklanıp NASA\'ya konması; devletlerin stratejik güç/çıkar için ahlakı ve adaleti nasıl saniyeler içinde çöpe atıp, suçluları bile kahraman yapabildiğinin (ikiyüzlülüğün) kanıtıdır.'
  },
  {
    title: 'Piri Reis Haritası (Gelecekten Gelen Geçmiş)',
    passage: '1513 yılında Osmanlı amirali Piri Reis tarafından çizilen harita, bilim dünyasının en büyük "anokronizm" düğümlerinden biridir. Ceylan derisi üzerine çizilen bu haritada, Amerika kıtasının doğu kıyıları ve daha da şok edici olanı "Antarktika" kıtası (buzlar altındaki kara sınırıyla birlikte) kusursuzca yer almaktadır! Ancak Antarktika resmi olarak 1820 yılında keşfedilmiştir ve buzulların altındaki o kara parçasının haritası ancak modern radarlar ve uydularla (1950\'lerde) çıkarılabilmiştir. Piri Reis haritası, tarihin o doğrusal ilerleme kibrini yerle bir eder: Ya geçmişte sandığımızdan çok daha üstün (ve unutulmuş) bir teknoloji vardı ya da dünya tarihi, bizim ders kitaplarında okuduğumuz o "basit keşifler zincirinden" çok daha karmaşık, gizli ve muazzam (bilinmeyen) birer kaynağa sahipti. Piri Reis haritası, modern bilimin "Biz her şeyi ilk kez bulduk" kibrine karşı açılmış dilsiz bir isyan bayrağıdır.',
    questionStem: 'Piri Reis haritasının (Antarktika\'nın buz altı sınırlarını 300 yıl önceden çizmesi), tarih bilimi hakkında hangi sarsıcı "şüpheyi" doğurmaktadır?',
    options: [
      'Denizcilerin okyanuslarda her zaman hayali haritalar çizerek kralları kandırdığı şüphesini',
      'Tarihin "ilkelden gelişmişe doğru düz bir çizgi" olduğu inancını sarsarak; geçmişte aslında bizim bilmediğimiz, "unutulmuş, üstün veya çok daha kadim" bir bilgi ve haritacılık kaynağının (kayıp bir medeniyetin) var olabileceği gerçeğini',
      'Ceylan derisinin güneş ışığı altında şekil değiştirerek farklı kıtalara benzediği teorisini',
      'Osmanlı donanmasının aslında 1500\'lerde uzaya çıkarak uydular kullandığı fantezisini'
    ],
    correct: 1,
    explanation: 'Resmi keşiflerden 300 yıl önce doğru harita çizilmesi; tarihin hep ileri giden düz bir yol olduğu kibrini sarsarak, geçmişte bugün bilmediğimiz üstün/kadim bir bilgi kaynağının olduğunu gösterir.'
  },
  {
    title: '1904 Olimpiyat Maratonu (Absürtlüğün Zirvesi)',
    passage: 'Modern Olimpiyat tarihinin en rezil ve en absürt olayı, 1904 Saint Louis maratonudur. Yarışı birinci bitiren Fred Lorz, yolun bir kısmını "arabayla" gitmişti! İkinci gelen Thomas Hicks\'e ise antrenörleri güç versin diye yol boyunca "fare zehiri (strychnine)" ve konyak içirmişlerdi (Hicks bitiş çizgisinde can çekişiyordu). Yarışmacılardan biri arkasından koşan vahşi köpeklerden kaçmak için rotadan sapıp tarlalara dalmış, diğeri ise yol kenarında bulduğu "çürük elmaları" yiyip midesi bozulunca çimlerde uyuyakalmıştı! Bu maraton, insanoğlunun o "bilimsel, disiplinli ve kusursuz sporcu" kibrinin; hayatın o en çiğ, en kaotik ve en "yabani" (absürt) haliyle çarpıştığında nasıl bir sirk gösterisine (komediye) dönüşebileceğinin tarihi kanıtıdır. Mükemmellik, sadece kağıt üzerinde ve laboratuvarlarda vardır; sahaya inildiğinde her şey sadece bir hayatta kalma (ve saçmalık) mücadelesinden ibarettir.',
    questionStem: '1904 Olimpiyat Maratonu\'ndaki absürt olaylar (fare zehiri, araba, köpek saldırısı), modern spor ve disiplin algısı hakkında neyi ifşa eder?',
    options: [
      'Maraton yarışlarının sadece kış aylarında yapılması gereken tehlikeli bir spor olduğunu',
      'İnsanlığın o "disiplinli, kusursuz ve rasyonel sporcu" kurgusunun; gerçek hayatın (doğanın) o "öngörülemez, kaotik ve yabani (absürt)" gerçekliği karşısında nasıl saniyeler içinde darmadağın olup bir saçmalıklar zincirine (trajikomediye) dönüşebileceği gerçeğini',
      'Fare zehirinin o dönemde doping olarak kabul edilmeyen tek sağlıklı madde olduğunu',
      'Antrenörlerin her zaman atletlerin canını kurtarmak için arabalarla yardım ettiklerini'
    ],
    correct: 1,
    explanation: 'Disiplinli spor hayalinin yerini fare zehiri ve köpek kaçışının alması; insanın rasyonel kurgularının gerçek hayatın (kaosun) yanında ne kadar saçma/absürt (ve kırılgan) kalabildiğini ifşa eder.'
  },
  {
    title: 'Viski Savaşı (Danimarka-Kanada Diplomasi Oyunu)',
    passage: 'Dünya tarihindeki en kibar ve en "mizahi" savaş, 1984 ile 2022 yılları arasında Danimarka ile Kanada arasında, buzullarla kaplı ıssız "Hans Adası" için yaşandı. İki ülke de ada üzerinde hak iddia ediyordu. Ancak onlar nükleer füzeler veya tanklar kullanmadılar. Danimarkalı askerler adaya çıkıp kendi bayraklarını dikiyor ve yanına bir şişe "Danimarka Rakısı (Akvavit)" bırakıp gidiyorlardı. Birkaç ay sonra Kanadalı askerler geliyor, Danimarka bayrağını söküp kendi bayraklarını dikiyor ve yanına bir şişe "Kanada Viskisi" bırakıyorlardı! Bu "içkili diplomasi" tam 38 yıl sürdü! "Viski Savaşı", insanoğlunun binlerce yıllık kanlı savaş (vahşet) kibrine atılmış en zarif felsefi tokattır: Sınırlar ve topraklar, uğruna milyonlarca insanın ölmesi gereken kutsal tabular değildir; zekâ, mizah ve (bir şişe viski kadar) basit bir saygı ile çözülebilecek, aslında insanın kendi zihninde uydurduğu (esnek) bürokratik birer oyundan ibarettir.',
    questionStem: 'Danimarka ve Kanada arasındaki "Viski Savaşı" (Hans Adası mücadelesi), devletlerin sınır ve toprak kavgaları hakkında nasıl bir "alternatif (veya eleştirel)" bakış açısı sunar?',
    options: [
      'Soğuk iklimlerde askerlerin alkol kullanmadan nöbet tutamadıkları biyolojik gerçeğini',
      'Adaların sadece maden rezervleri için işgal edilmesi gereken stratejik hedefler olduğunu',
      'Toprak ve sınır kavgalarının; mutlaka kan dökülerek çözülmesi gereken kutsal birer "onur" meselesi değil; aslında "zeka, mizah ve barışçıl bir nezaket (diplomasi)" ile de yönetilebilecek kurgusal ve esnek oyunlar (anlaşmazlıklar) olabileceği gerçeğini',
      'Bayrak direklerinin sert rüzgârlarda her zaman yıkılarak devletlerin onurunu zedelediğini'
    ],
    correct: 2,
    explanation: 'Kan dökmek yerine içki bırakarak savaşmaları; sınırların/toprağın kutsal bir vahşet nedeni değil, zeka ve nezaketle çözülebilecek kurgusal birer "diplomatik oyun" (seçenek) olduğunu kanıtlar.'
  },
  {
    title: 'Domuz Savaşı (1859 - Kibrin Tetikçisi)',
    passage: '1859 yılında İngiltere ve Amerika Birleşik Devletleri, bir domuz yüzünden neredeyse koca bir savaşı başlatıyorlardı! San Juan adasında Amerikalı bir çiftçi, kendi bahçesine girip patateslerini yiyen İngiliz bir komşusuna ait "domuzu" tüfeğiyle vurup öldürdü. Olay basit bir komşu kavgasıyken; iki ülke de "Benim vatandaşımın (veya domuzumun) onuruna dokunuldu!" diyerek adaya savaş gemileri, toplar ve yüzlerce asker yığdı. Haftalarca birbirlerine ateş etmek için beklediler. Neyse ki bir komutan "Sırf bir domuz için büyük bir savaşa girmemiz saçmalık değil mi?" diyerek aklıselimi sağladı. "Domuz Savaşı", milliyetçiliğin ve devlet kibrinin o en tehlikeli, en ahmakça "tırmanma (eskalasyon)" mekanizmasını ifşa eder: İnsanoğlu, en saçma ve en önemsiz (bir domuzun ölümü gibi) rastlantısal bir kıvılcımı bile; kibrini ve "ulusal gururunu" tatmin etmek uğruna, milyonlarca insanın öleceği devasa bir yangına çevirmeye her zaman dünden hazırdır.',
    questionStem: '1859 "Domuz Savaşı" (bir domuzun ölümüyle orduların karşı karşıya gelmesi), milliyetçilik ve devlet psikolojisi hakkında neyi eleştirmektedir?',
    options: [
      'Hayvan haklarının korunması için orduların her zaman müdahale etmesi gerektiğini',
      'Devletlerin ve milliyetçi duyguların; en önemsiz ve absürt (saçma) olayları bile, sırf "gurur ve güç gösterisi" uğruna devasa, kanlı ve yıkıcı savaşlara (felaketlere) dönüştürmeye ne kadar yatkın olduğu o "kör ve tehlikeli tırmanma" kibrini',
      'Patates tarlalarının güvenliği için çiftçilere silah verilmesinin önemini',
      'İngiliz ve Amerikan askerlerinin aslında domuz eti yemek için kasten kriz çıkardıkları teorisini'
    ],
    correct: 1,
    explanation: 'Bir domuz için orduların toplanması; devlet kibrinin ve milliyetçiliğin en saçma/önemsiz olayı bile gurur meselesi yapıp devasa bir yıkıma (savaşa) dönüştürme "tırmanma (kibir)" potansiyelini eleştirir.'
  },
  {
    title: 'Behistun Yazıtı (Üç Dilin Kalesi)',
    passage: 'İran\'daki sarp kayalıkların 100 metre yukarısına kazınmış devasa "Behistun Yazıtı" (MÖ 520), sadece bir kralın (Darius) zafer anıtı değildir; o, insanlık tarihinin silinen hafızasının "yedek dosyasıdır". Yazıtta aynı metin üç farklı dilde (Elamca, Babilce ve Eski Farsça) yazılmıştı. Yüzyıllar sonra, bu dillerin tamamı ölüp unutulduğunda ve o garip "çivi yazıları" sadece taşlarda anlamsız çizgiler olarak kaldığında; 1835\'te Henry Rawlinson hayatını riske atarak o uçuruma tırmandı ve Rosetta Taşı mantığıyla bir dili diğerinden çözerek koca bir medeniyetin kapısını açtı. Behistun Yazıtı; iktidarın (kralların) kendi kibrini ölümsüzleştirmek için taşa vurduğu o "gurur" mührünün; ironik bir şekilde, binlerce yıl sonra insanoğlunun o sönmüş (ölmüş) geçmişini yeniden aydınlatan tek "ışık" ve "hafıza köprüsü" haline gelebildiğinin en taşlaşmış kanıtıdır.',
    questionStem: 'Behistun Yazıtı\'nın (çivi yazısının çözülmesindeki rolü), "İktidar ve Bilgi" ilişkisi hakkında hangi ironik gerçeği ortaya koyar?',
    options: [
      'Sarp kayalıklara yazı yazmanın o dönemki en ucuz reklam yöntemi olduğu gerçeğini',
      'Hükümdarların her zaman kendi tarihlerini yalanlarla dolu birer masal gibi yazdıkları yanılgısını',
      'Bir hükümdarın sadece kendi "gücünü ve kibrini" sergilemek (statü kurmak) amacıyla yaptırdığı anıtsal bir eserin; zamanla o niyetinden sıyrılıp, insanlık için unutulmuş bir geçmişin (ölü dillerin) anahtarı ve en hayati "bilgi köprüsü" haline dönüşmesi ironisini',
      'Taş işçiliğinin İran kültüründe tarımdan çok daha fazla kazanç sağladığının ispatını'
    ],
    correct: 2,
    explanation: 'Kralın kendini övmek (kibir) için yaptırdığı yazıtın, binlerce yıl sonra dilsiz kalan geçmişi kurtaran "anahtar" olması; kibrin niyetini aşıp insanlık için devasa bir "bilgi/hafıza" mirasına dönüşmesi ironisidir.'
  },
  {
    title: 'Büyük Londra Yangını (Küllerden Doğan Şehir)',
    passage: '1666 Eylülünde basit bir fırında başlayan küçük bir kıvılcım, rüzgârla büyüyerek koca Londra\'yı (13.000 evi ve 87 kiliseyi) bir cehenneme çevirdi. Londra halkı her şeylerini kaybetti. Ancak bu devasa yıkımın ardında dondurucu bir aydınlanma gizliydi. O dönemin Londra\'sı; ahşap, rutubetli, kanalizasyonun sokaklarda aktığı ve "Veba" yayan farelerin cirit attığı bir lağım çukuruydu. Yangın tüm o pisliği, vebalı evleri ve tahta yığınlarını küle çevirerek şehri kelimenin tam anlamıyla "dezenfekte" etti! Yangından sonra Christopher Wren gibi mimarlar, şehri taş binalar, geniş caddeler ve modern bir hijyen planıyla (modern Londra olarak) baştan inşa ettiler. Büyük Londra Yangını; insanlık tarihindeki en korkunç trajedilerin ve "mutlak yıkımların" bile; aslında köhnemiş, hastalıklı ve çürümüş olan "eskinin" sökülüp atılmasına ve çok daha parlak, sağlıklı (ve modern) bir "yeni"nin doğuşuna zemin hazırlayan acımasız birer "doğal temizlik (yenilenme)" operasyonu olabileceğini kanıtlar.',
    questionStem: '1666 Büyük Londra Yangını\'nın sonuçları, "Yıkım ve Gelişim" kavramları hakkında hangi felsefi (tarihsel) bakış açısını doğrular?',
    options: [
      'Fırıncıların dikkatsizliğinin toplumun güvenliğini her zaman en büyük tehdit olduğu gerçeğini',
      'Geniş caddelerin aslında şehirdeki rüzgâr fırtınalarını artırarak iklimi bozduğu uyarısını',
      'Görünürdeki o mutlak ve korkunç "yıkımların (felaketlerin)" bile; aslında çürümüş, hastalıklı ve miadını doldurmuş "eski sistemi" tamamen silerek, daha sağlıklı, modern ve dirençli bir "yeni yapının (medeniyetin)" kurulmasına imkân sağlayan sarsıcı birer "yenilenme/temizlik" katalizörü olabileceği gerçeğini',
      'Su kovalarının yangın söndürmede yetersiz kalmasının bilimsel ilerlemeyi durdurduğu yanılgısını'
    ],
    correct: 2,
    explanation: 'Pis ve vebalı şehrin yanıp yerine modern Londra\'nın kurulması; büyük yıkımların (felaketlerin) aslında çürümüş eskiden kurtulup modern yeninin kurulmasını sağlayan "yenilenme katalizörü" olduğunu ispatlar.'
  },
  {
    title: 'Kazan Savaşı (The Kettle War)',
    passage: '1784 yılında Kutsal Roma İmparatorluğu (Avusturya) ile Hollanda arasında yaşanan o en komik "savaş" tarihe "Kazan Savaşı" (The Kettle War) olarak geçti. Aylardır süren gerilimden sonra Avusturya gemisi, Hollanda limanını abluka altına almak için topunu ateşledi. Peki neyi vurdu? Sadece Hollanda gemisinin güvertesinde duran bakır bir "Çorba Kazanını!" (Su ısıtıcısını). Kazan delindi ve çorbalar yere saçıldı. Bu "tek atış" (ve delinen kazan) sonrasında Avusturya gemisi, Hollandalıların savunma gücünden korkup (ironik olarak) anında teslim oldu ve koca savaş oracıkta bitti! Kazan Savaşı, insanlık tarihinin o en büyük "savaş kibrini" ve "askerî ciddiyetini" yerle bir eden absürt bir tokattır: Uğruna marşlar yazılan, binlerce asker toplanan o koca imparatorluk hırsları; bazen bir tencere (kazan) çorbanın dökülmesi kadar sıradan, saçma ve trajikomik bir "rastlantı" ile saniyeler içinde sönüp buharlaşabilir.',
    questionStem: 'Kazan Savaşı\'nın (bir çorba tenceresinin vurulmasıyla savaşın bitmesi), "Askerî Güç ve Tarih" bağlamındaki asıl ironik mesajı nedir?',
    options: [
      'Orduların her zaman en dayanıklı çelik tencereleri kullanmak zorunda olduğunun kanıtı',
      'Bakır madeninin ses dalgalarını ileterek düşmanı korkutmakta en etkili araç olduğu gerçeği',
      'İnsanoğlunun o devasa, gururlu ve "yenilmez" sandığı askerî kibrinin ve savaş hırslarının; aslında hayatın o en basit, en saçma ve en "absürt" rastlantıları (bir kazan çorbanın dökülmesi) karşısında ne kadar komik, kırılgan ve anlamsız kalabileceğinin ironisi',
      'Savaşların her zaman yemek yetersizliği (açlık) yüzünden sona erdiği şeklindeki ekonomik teori'
    ],
    correct: 2,
    explanation: 'Koca ordunun bir çorba kazanı delindi diye teslim olması; askerî kibrin ve savaş hırslarının, hayatın absürt rastlantıları karşısında ne kadar komik ve "kırılgan" (anlamsız) kaldığının ironik bir ispatıdır.'
  },
  {
    title: '1968 Meksika Olimpiyatları (Sessiz Çığlık)',
    passage: '1968 Meksika Olimpiyatları\'nda 200 metre yarışını kazanan Amerikalı atletler Tommie Smith ve John Carlos, madalya kürsüsüne çıktıklarında tüm dünyanın gözü önünde o efsanevi eylemi yaptılar: Başlarını öne eğdiler ve siyah eldivenli yumruklarını havaya kaldırdılar. Tek bir kelime bile etmediler. Bu sessizlik, o an stadyumdaki binlerce seyircinin yuhalamalarından ve koca devletlerin gürültüsünden daha "yüksek" bir sesti! Bu eylem, ırkçılığa ve adaletsizliğe karşı atılmış en büyük yumruktu. Sporun o "siyaset dışı, eğlence ve gösteriş" kibrine atılmış bu sessiz tokat; kelimelerin bittiği yerde, bir sembolün ve onurlu bir duruşun, koca bir imparatorluğun ve toplumun vicdanını nasıl saniyeler içinde (tek bir kareyle) sarsabileceğini ispatlamıştır. Bazen en yüksek feryat, ağzın sıkıca kapatıldığı o "sessiz eylemde" gizlidir.',
    questionStem: '1968 Olimpiyatlarındaki "Siyah Eldiven" (Black Power) selamı, iletişim ve direniş bağlamında neyin felsefi bir örneğidir?',
    options: [
      'Eldiven kullanımının sporcuların el kaslarını madalya törenlerinde sıcak tuttuğu gerçeğinin',
      'Sessizliğin ve "sembolik bir eylemin (duruşun)"; koca bir sistemin, medyanın ve orduların gürültüsünden daha sarsıcı, daha kalıcı ve daha "yüksek sesli" bir hakikat (direniş) mesajı taşıyabileceğinin örneği',
      'Olimpiyat komitesinin sporculara her zaman aynı renk üniforma zorunluluğu getirdiğinin ispatı',
      'Sporun sadece fiziksel bir güç gösterisi olup toplumsal olayları hiçbir zaman etkileyemediği yanılgısının'
    ],
    correct: 1,
    explanation: 'Kelime etmeden havaya kalkan yumruğun dünyayı sarsması; sessiz ve sembolik bir eylemin, sistemin tüm gürültüsünden daha etkili ve sarsıcı (yüksek sesli) bir direniş mesajı olabileceğini gösterir.'
  },
  {
    title: 'Elmas Gerdanlık Olayı (Yalanın Devrimi)',
    passage: '1785 yılında Fransa\'da bir sahtekâr kadın (Kontes Jeanne), Kraliçe Marie Antoinette\'in imzasını taklit ederek, saraydan gizli çok pahalı bir elmas gerdanlık "satın alındığı" yalanını uydurdu. Kraliçenin bu olaydan ruhu bile duymamıştı. Ancak bu dedikodu, o dönem açlıktan kırılan Paris halkı arasında bir virüs gibi yayıldı. Halk, kraliçenin halk açken milyonlarca franklık takı peşinde koştuğuna (bu yalan kurguya) o kadar derinden inandı ki; kraliçenin masumiyetine dair tüm belgeler birer çöp oldu. Bu skandal, 1789 Fransız Devrimi\'ne giden o en büyük nefreti ve kıvılcımı ateşledi. Elmas Gerdanlık Olayı; tarihin seyrini belirleyen şeyin "gerçekler (hakikat)" değil; kitlelerin o an inanmaya hazır olduğu o en kirli, en "inandırıcı kurgular (yalanlar)" olduğunu kanıtlar. Bazen bir krallığı yıkan şey düşman orduları değil, sarayın kapısından sızan tek bir "sahte elmasın" (veya dedikodunun) yarattığı o yıkıcı öfke dalgasıdır.',
    questionStem: '"Elmas Gerdanlık Olayı" (kraliçenin adının karıştığı sahte skandal), tarih ve toplum psikolojisi hakkında hangi karanlık gerçeği ifşa eder?',
    options: [
      'Elmas madeninin o dönemde Fransız ekonomisinin tek dayanağı olduğu gerçeğini',
      'Tarihin akışını ve büyük toplumsal devrimleri (isyanları) her zaman nesnel "hakikatlerin" değil; kitlelerin o anki öfkesiyle birleşen "inandırıcı kurguların (yalanların/dedikoduların)" çok daha hızlı ve yıkıcı bir şekilde tetikleyebileceği gerçeğini',
      'Fransız asillerinin takı ve mücevher tasarımı konusunda tüm dünyaya liderlik ettiğini',
      'Kraliçelerin her zaman sahte imzalar kullanarak devlet hazinesini boşaltma kibrini'
    ],
    correct: 1,
    explanation: 'Kraliçe almadığı halde gerdanlık aldı dedikodusunun devrimi başlatması; tarihi belirleyen şeyin gerçekler değil, kitlelerin inandığı o "yıkıcı kurgular/yalanlar" (dedikodu) olduğunu ifşa eder.'
  },
  {
    title: 'Rahibe Isırma Salgını (Kapalı Kutudaki Cinnet)',
    passage: '15. yüzyılda Almanya\'daki bir manastırda bir rahibe aniden yanındaki rahibeyi "ısırmaya" başladı. Bu tuhaf davranış bir hafta içinde tüm manastıra yayıldı; tüm rahibeler birbirini ısırıyor, kedi gibi miyavlıyordu! Salgın, diğer ülkelerdeki manastırlara bile sıçradı. Bilim insanları bunu bir virüs değil, "Kitlesel Psikojenik Hastalık" olarak tanımladı. Dış dünyadan izole, aşırı baskıcı, sessiz ve monoton bir hayatın içine hapsedilen insan zihni; o dayanılmaz "can sıkıntısı, stres ve bastırılmışlık" duygusunu kaldıramadığında; bedeni esir alan, en saçma ve en "vahşi" eylemleri (ısırmak gibi) bir kurtuluş ve ifade biçimi olarak seçebilir. Rahibe Isırma Salgını; insanoğlunun mutlak sessizlik ve aşırı baskı (hapishane) ortamında; kendi deliliğini (cinnetini) bile nasıl "sosyal ve bulaşıcı" bir sığınağa dönüştürebildiğinin en dişli kanıtıdır.',
    questionStem: 'Manastırlardaki "Isırma Salgını" (toplu cinnet), insan psikolojisi ve "çevre şartları" hakkında neyi ispatlamaktadır?',
    options: [
      'Et yemenin insan beynindeki saldırganlık merkezlerini doğrudan aktif hale getirdiğini',
      'Rahibelerin o dönemde tıbbi bilgi yetersizliği yüzünden kuduz hastalığına yakalandıklarını',
      'İnsan zihninin; aşırı izolasyon, monotonluk ve "baskı (sessizlik)" altında kaldığında; bu ezici stresi dışa vurmak için en mantık dışı, en yabani ve "bulaşıcı (toplu)" delilik (cinnet) biçimlerini birer kaçış yolu olarak üretebileceği gerçeğini',
      'Almanya\'daki manastırların mimari yapısının insanların ruh halini iyileştiren bir huzur kaynağı olduğunu'
    ],
    correct: 2,
    explanation: 'İzole ve baskı altındaki kadınların birbirini ısırması; aşırı monotonluk ve stresin, zihni kırarak onu "toplu ve bulaşıcı bir delilik" (cinnet) biçimine sokabileceğini ispatlar.'
  },
  {
    title: 'Quipu (İnka İpleri ve Dilsiz Kod)',
    passage: 'Güney Amerika\'daki devasa İnka İmparatorluğu, yazıyı (alfabeyi) asla icat etmedi! Ancak onlar koca bir devleti alfabe olmadan, sadece "farklı renklerdeki düğümlü iplerle" (Quipu) yönettiler. Bu ipler basit bir hesap makinesi değildi; düğümlerin yerleşimi, ipin rengi ve dönüş yönüyle, İnka tarihi, kanunlar ve nüfus sayımları o iplere "ikili sistemle (binary code gibi)" kodlanmıştı. İspanyollar geldiğinde bu ipleri "şeytan işi" diyerek yaktılar ve koca bir medeniyetin kütüphanesi (hafızası) saniyeler içinde kül oldu. Quipu sistemi, insan aklının o "bilgi ancak kâğıda ve harflere dökülürse medeniyettir" şeklindeki kibrini yerle bir eder: Hakikat ve veri, bir bilgisayarın 0-1 kodları gibi, bazen sadece bir ipin üzerindeki bir "düğümde" bile saklanabilecek kadar soyut, dâhiyane ve esnek bir kurgudur.',
    questionStem: 'İnkaların "Quipu" (düğümlü ipler) sistemi, "Medeniyet ve Bilgi" kavramları hakkında hangi alışılmışın dışında (felsefi) bakış açısını sunar?',
    options: [
      'İplerin ve dokumacılığın bir ülkenin tek geçim kaynağı olması gerektiği teorisini',
      'Bilginin ve karmaşık verilerin (tarihin/kanunların) sadece "yazılı bir alfabe (harf)" ile korunabileceği kibrini yıkarak; aklın, bilgiyi iplerdeki düğümler gibi tamamen "soyut ve matematiksel (kodlanmış)" birer simgeyle de sonsuza dek saklayabileceği gerçeğini',
      'İspanyolların kütüphanelere olan düşmanlığının aslında teknolojik bir kıskançlıktan doğduğu iddiasını',
      'Güney Amerika ikliminde kâğıt üretiminin biyolojik olarak imkânsız olduğunu'
    ],
    correct: 1,
    explanation: 'Harf olmadan düğümlerle devlet yönetilmesi; bilginin sadece "yazı/harf" ile saklanabileceği kibrini yıkarak, aklın bilgiyi düğüm gibi "kodlanmış" soyut simgelerle de saklayabileceğini kanıtlar.'
  },
  {
    title: 'Codex Gigas (Şeytanın İncili ve İnsanın Sabrı)',
    passage: 'Orta Çağ\'dan kalan, tam 75 kilo ağırlığındaki devasa "Codex Gigas" kitabı; efsaneye göre ölüme mahkûm edilen bir keşişin, "hayatını kurtarmak için tüm dünyadaki bilgiyi tek bir gecede yazacağına" dair verdiği sözden doğmuştur. Keşişin tek başına bitiremeyeceğini anlayınca "Şeytan\'dan" yardım istediğine ve kitabın içine devasa bir Şeytan resmi çizildiğine inanılır. Bilim insanları kitabı incelediklerinde sarsıcı bir gerçekle karşılaştılar: El yazısı o kadar kusursuz, o kadar tutarlı ve o kadar hatasızdı ki; bir insanın bu kitabı (tek başına) o kaliteyle yazması tam "30 YIL" sürmeliydi! Codex Gigas bir "sihir" eseri değildir. O; insanın o en korkunç, o en dondurucu "Ölüm Korkusu" veya "Kutsal Adanmışlık" ile donandığında; tek bir kalemi ve mürekkebi kullanarak doğanın (ve zamanın) sınırlarını zorlayan, 30 yıllık ömrünü tek bir sayfaya sığdıran o insanüstü (ve çıldırtıcı) "sabır ve konsantrasyon" gücünün anıtıdır.',
    questionStem: 'Codex Gigas\'ın (Devasa kitap) kusursuz el yazısı ve içeriği, yazar tarafından neyin "fiziksel (veya ruhsal) anıtı" olarak nitelendirilmektedir?',
    options: [
      'Orta Çağ\'da üretilen kâğıtların ve mürekkeplerin kalitesinin günümüzden daha üstün olduğunun',
      'İnsanoğlunun; ölüm korkusu veya yüce bir adanmışlık (inanç) gibi en uç duygularla birleştiğinde; zamanın sınırlarını aşan, bir ömrü (30 yılı) tek bir amaca sığdıran o akılalmaz "sabır ve odaklanma" kapasitesinin',
      'Şeytani güçlerin kitap basım teknolojisini insanlara gizlice öğrettiği efsanesinin',
      'Ağır kitapların kütüphane güvenliğinde hırsızlara karşı en etkili engel olduğu gerçeğinin'
    ],
    correct: 1,
    explanation: '30 yıl sürecek bir yazının kusursuz olması; insanın "ölüm korkusu veya adanmışlık" ile zamanın sınırlarını zorlayan o insanüstü "sabır/konsantrasyon" gücünün anıtı olarak tanımlanır.'
  },
  {
    title: 'Kara Ölüm ve Rönesans (Yıkımın Hediyesi)',
    passage: '1347 yılında Avrupa\'yı vuran "Kara Ölüm" (Veba), nüfusun üçte birini (yaklaşık 25 milyon kişiyi) saniyeler içinde yok etti. Şehirler hayalet kasabaya döndü. Ancak bu mutlak kıyametin ardından, felsefeyi ve tarihi sarsan bir "altın çağ" doğdu: Rönesans! Neden mi? Çünkü o kadar çok insan ölmüştü ki, hayatta kalan işçiler (köylüler) artık "değerli" hale gelmişti; maaşlar fırladı, feodalizm (derebeylik) çöktü ve toprak sahipleri zenginliklerini paylaşmak zorunda kaldı. Dahası; "Dua etmemize rağmen Kilise bizi kurtaramadı" diyen insanlar, inancı (dogmayı) sorgulayıp bilime, sanata ve "Dünya\'ya" odaklandılar. Kara Ölüm; insanlığın en korkunç, en acımasız "yıkımlarının" bile; aslında köhneleşmiş sistemleri (feodalizmi ve dogmayı) kökünden sarsarak, tarihin o sönmüş motorunu yeniden ateşleyen ve aydınlanmayı (Rönesans\'ı) doğuran o "kanlı ama zorunlu" ebe (katalizör) olabileceğini fısıldar.',
    questionStem: 'Veba salgınının (Kara Ölüm) hemen ardından Rönesans ve aydınlanma döneminin başlaması, tarih felsefesinde hangi "paradoksu (çelişkiyi)" kanıtlar?',
    options: [
      'Hastalıkların her zaman ilaç üretimini ve hastane inşaatlarını artırdığı gerçeğini',
      'En büyük toplumsal "yıkımların ve felaketlerin" (ölümlerin); ironik bir şekilde köhne sistemleri (dogmaları) yıkarak, hayatta kalanlar için daha özgür, daha zengin ve aklın/sanatın öncelendiği yepyeni bir "aydınlanma ve gelişim" dönemine (katalizöre) kapı aralayabileceği paradoksunu',
      'Farelerin temizlenmesinin Avrupa mimarisinde altın ve gümüş kullanımını artırdığı inancını',
      'Veba salgını sırasında insanların sadece kitap okuyarak vakit geçirdiklerini'
    ],
    correct: 1,
    explanation: 'Milyonların ölmesinden sonra zenginliğin ve sanatın (Rönesans) artması; devasa yıkımların köhne sistemleri silip "aydınlanmayı/gelişimi" başlatan bir katalizör (paradoks) olabileceğini kanıtlar.'
  }
];

export const bilimParagrafSorulari52: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_52.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_52[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim52-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
