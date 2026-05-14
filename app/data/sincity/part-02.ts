import type { BilimParagrafQuestion, SincityParagrafQuestion, TarihParagrafQuestion } from './types';

const PARAGRAPH_THEMES_5 = [
  {
    title: 'Lale Çılgınlığı',
    passage: '1630\'larda Hollanda\'da sıradan bir lale soğanı, lüks bir malikâneyle aynı fiyata satılmaya başlanmıştı. "Lale Çılgınlığı" olarak bilinen bu dönemde insanlar, tarlalarını ve evlerini satıp hiç görmedikleri lale soğanlarına yatırım yapıyorlardı. Ancak 1637\'de piyasa aniden çöktüğünde, ellerindeki soğanların aslında değersiz birer bitki kökü olduğunu fark ettiler. Bu olay, tarihteki ilk büyük ekonomik balon olarak kayıtlara geçmiştir. Lale Çılgınlığı, insanın rasyonel düşünmeyi bırakıp sürü psikolojisiyle hareket ettiğinde, kâğıt üzerindeki suni değerlerin nasıl yıkıcı bir felakete dönüşebileceğinin en renkli örneğidir.',
    questionStem: 'Bu parçada Lale Çılgınlığı olayı üzerinden asıl anlatılmak istenen nedir?',
    options: [
      'Hollanda\'nın tarım politikalarının Avrupa ekonomisini derinden etkilediği',
      'Sürü psikolojisiyle ve gerçek bir üretime dayanmadan yaratılan suni ekonomik değerlerin (balonların) eninde sonunda çökmeye mahkûm olduğu',
      'Lalenin o dönemde sadece zenginlerin ulaşabileceği nadide bir sanat eseri olarak görüldüğü',
      'İnsanların doğaya yatırım yapmasının her zaman kârlı bir sonuç doğurduğu'
    ],
    correct: 1,
    explanation: 'Gerçek bir değere dayanmadan tamamen sürü psikolojisiyle şişirilen piyasaların eninde sonunda çöküp yıkıma uğrayacağı vurgulanmıştır.'
  },
  {
    title: 'Antikythera Düzeneği',
    passage: '1901 yılında Yunanistan açıklarında batan antik bir Roma gemisinde tuhaf, bronz bir cihaz bulundu. "Antikythera Düzeneği" adı verilen bu paslı dişli çarklar bütünü, aslında Güneş\'in, Ay\'ın ve gezegenlerin hareketlerini milimetrik bir hesapla tahmin edebilen, 2000 yıllık analog bir bilgisayardı. O güne kadar tarihçiler, böylesine karmaşık bir çark sisteminin ancak 14. yüzyılda Avrupa\'da icat edildiğine inanıyordu. Bu olağanüstü cihaz, antik çağlardaki insanların sadece felsefe ve sanatla uğraşmadığını; aynı zamanda modern mühendisliğe meydan okuyan, unutulmuş ileri bir teknolojik zekâya sahip olduklarını kanıtlamaktadır.',
    questionStem: 'Antikythera Düzeneği\'nin keşfinin tarih bilimi üzerindeki asıl etkisi ne olmuştur?',
    options: [
      'Romalı denizcilerin yön bulmak için yıldızları değil, mekanik pusulaları kullandığını göstermesi',
      'Antik çağ toplumlarının teknolojik ve mühendislik bilgisinin, sanılandan çok daha ileri bir seviyede olduğunu ispatlaması',
      'Bronz madeninin ilk olarak Yunanlılar tarafından işlendiğini kesinleştirmesi',
      'Dünyanın ilk bilgisayarının bir zaman makinesi olarak tasarlandığını ortaya koyması'
    ],
    correct: 1,
    explanation: 'Cihazın karmaşıklığı, antik çağ insanlarının sadece felsefe değil, sanılandan çok daha ileri bir mühendislik ve teknolojik zekâya sahip olduğunu ispatlar.'
  },
  {
    title: '1914 Noel Ateşkesi',
    passage: 'Birinci Dünya Savaşı\'nın en kanlı günlerinde, 1914\'ün Noel gecesinde Batı Cephesi\'nde inanılmaz bir olay yaşandı. Hiçbir komutanın emri olmadan, siperlerdeki İngiliz ve Alman askerleri silahlarını bırakıp "Sessiz Gece" ilahisini söylemeye başladılar. Taraflar "Tarafsız Bölge"de buluştu, birbirlerine sigara ve çikolata ikram edip futbol oynadılar. Birkaç saatliğine de olsa düşmanlık yerini insanlığa bıraktı. Ertesi gün komutanların tehditleriyle askerler yeniden birbirlerini öldürmeye zorlansalar da, bu "Noel Ateşkesi", insanın içindeki şefkat ve barış arzusunun, savaşın o karanlık ve mekanik nefretinden bile daha güçlü olduğunu gösteren ölümsüz bir andır.',
    questionStem: '1914 Noel Ateşkesi olayından çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
    options: [
      'Savaşlarda dini günlerin çatışmaları durdurmak için resmi olarak ateşkes ilan edilen dönemler olduğu',
      'Askerlerin komutanlarına isyan ederek savaşı tamamen bitirmeye çalıştığı',
      'Savaşın yarattığı yıkıcı nefret ortamında bile, insanların içindeki barış ve empati duygusunun (insani özün) anlık da olsa galip gelebileceği',
      'İngiliz ve Alman askerlerinin kültürel olarak birbirlerine çok benzediği'
    ],
    correct: 2,
    explanation: 'Askerlerin emir olmadan siperden çıkıp dostça vakit geçirmesi, insanın içindeki barış ve şefkat duygusunun savaşın nefretinden daha güçlü olduğunu kanıtlar.'
  },
  {
    title: 'Mansa Musa\'nın Haccı',
    passage: '14. yüzyılda Mali İmparatoru Mansa Musa, Mekke\'ye hacca giderken yanına o kadar çok altın almıştı ki, geçtiği şehirlere sadaka olarak tonlarca altın dağıttı. Kahire\'de yaptığı harcamalar ve dağıttığı altınlar yüzünden bölgedeki altının değeri on yıl boyunca dibe vurdu ve Mısır ekonomisi büyük bir enflasyon krizi yaşadı. Zenginliğin bir toplumu ihya edeceği düşünülürken, kontrolsüzce piyasaya sürülen devasa bir servet, aslında o servetin kendi değerini yok etmişti. Mansa Musa\'nın bu efsanevi yolculuğu, zenginliğin miktarından ziyade, ekonomik dengenin ve piyasa dinamiklerinin ne kadar kırılgan olduğunu gösteren tarihi bir derstir.',
    questionStem: 'Mansa Musa\'nın hac yolculuğunun anlatıldığı bu parçadan ekonomiyle ilgili hangi sonuç çıkarılabilir?',
    options: [
      'Altın madeninin miktarının artmasının bir ülkenin siyasi gücünü doğrudan artırdığı',
      'Piyasaya aniden ve kontrolsüzce giren büyük miktardaki zenginliğin, paranın (altının) değerini düşürerek ekonomik krizlere (enflasyona) yol açabileceği',
      'Ticaret yollarının güvenliğinin sadece ekonomik zenginlikle sağlanabileceği',
      'Hükümdarların kişisel harcamalarının halk tarafından her zaman desteklendiği'
    ],
    correct: 1,
    explanation: 'Altının bolca dağıtılmasıyla değerinin dibe vurması, piyasaya kontrolsüz giren servetin kendi değerini yok ederek krize (enflasyona) yol açtığını gösterir.'
  },
  {
    title: '1518 Dans Salgını',
    passage: '1518 yazında Strasbourg sokaklarında Frau Troffea adında bir kadın aniden dans etmeye başladı. Günlerce durmaksızın süren bu dansa kısa sürede yüzlerce kişi katıldı. İnsanlar ayakları kanayana, kalp krizi geçirip yorgunluktan ölene kadar günlerce dans ettiler. Tıp ve tarih uzmanları, bu "Dans Salgını"nın bulaşıcı bir hastalıktan ziyade; açlık, hastalık ve ağır çalışma koşullarının yarattığı aşırı stresin tetiklediği kitlesel bir psikolojik histeri krizi (psikojenik hastalık) olduğu konusunda hemfikirdir. Bu tuhaf olay, insan zihninin ağır travmalar ve çaresizlik karşısında bedeni nasıl mantık dışı bir tepkiyle iflasa sürükleyebileceğinin en karanlık örneklerinden biridir.',
    questionStem: 'Parçaya göre 1518 Dans Salgını\'nın asıl ortaya çıkış nedeni nedir?',
    options: [
      'Strasbourg halkının geleneksel bir festivali abartarak kutlaması',
      'Bozuk gıdalardan kaynaklanan nörolojik bir zehirlenme vakası',
      'Ağır yaşam koşullarının, çaresizliğin ve aşırı stresin toplumu sürüklediği kitlesel bir psikolojik çöküş (histeri) hali',
      'Dönemin yöneticilerini protesto etmek amacıyla başlatılan sivil bir itaatsizlik eylemi'
    ],
    correct: 2,
    explanation: 'Metinde olayın bulaşıcı bir hastalıktan ziyade, çaresizlik ve stresin tetiklediği "kitlesel bir psikolojik histeri krizi" olduğu açıkça ifade edilmiştir.'
  },
  {
    title: 'Voynich El Yazması',
    passage: '15. yüzyıla tarihlendirilen Voynich El Yazması, bilinen hiçbir dile benzemeyen garip bir alfabeyle yazılmış ve dünyada var olmayan egzotik bitki, tuhaf astronomik harita çizimleriyle dolu gizemli bir kitaptır. Yüzlerce yıldır dünyanın en ünlü kriptologları, dilbilimcileri ve yapay zekâ programları bu kitabın şifresini çözmeye çalışmış ancak tek bir kelimesini bile çevirememişlerdir. Bazıları bunun bir orta çağ doktorunun gizli defteri olduğunu, bazıları ise zenginleri dolandırmak için uydurulmuş zekice bir şarlatanlık (sahte kitap) olduğunu savunur. Voynich El Yazması, bilgiye her an ulaşabildiğimizi sandığımız bu modern çağda bile, geçmişin bize ne kadar kapalı ve çözülemez olabileceğini yüzümüze çarpan sessiz bir bilmecedir.',
    questionStem: 'Voynich El Yazması ile ilgili asıl vurgulanmak istenen aşağıdakilerden hangisidir?',
    options: [
      'Orta Çağ tıp biliminin modern tıptan çok daha ileri seviyede sırlar barındırdığı',
      'Modern teknolojinin ve şifre biliminin tüm çabalarına rağmen çözülemeyen bu eserin, geçmişin aşılamaz gizemini temsil ettiği',
      'Kitabın kesin olarak uzaylılar tarafından dünyada bırakılmış bir mesaj olduğu',
      'İçindeki bitki çizimlerinin günümüz biyoloji bilimine büyük katkılar sağladığı'
    ],
    correct: 1,
    explanation: 'Yapay zekâ ve şifrecilerin bile çözemediği bu kitabın, bilgi çağına rağmen geçmişin kapalı ve çözülemez (aşılamaz bir bilmece) yapısını temsil ettiği vurgulanmıştır.'
  },
  {
    title: 'Kayıp Roanoke Kolonisi',
    passage: '1587\'de İngiltere, Kuzey Amerika\'ya 115 kişilik bir yerleşimci grubu gönderdi ve Roanoke Kolonisi\'ni kurdu. Vali John White, erzak getirmek için İngiltere\'ye döndü ancak savaş nedeniyle üç yıl gecikti. Geri döndüğünde koloni tamamen yok olmuştu. Ne bir ceset, ne bir savaş izi ne de bir mektup vardı. Sadece bir ağaca kazınmış "CROATOAN" kelimesi kalmıştı. Kolonistlerin yerli kabilelere mi karıştığı, açlıktan mı öldüğü yoksa İspanyollar tarafından mı kaçırıldığı hiçbir zaman çözülemedi. Roanoke, yeni ufuklar keşfetme arzusuyla yola çıkan insanoğlunun, vahşi doğanın sessizliği içinde nasıl iz bırakmadan yutulabileceğinin en ürkütücü hikâyesidir.',
    questionStem: 'Roanoke Kolonisi\'nin hikâyesinden yola çıkarak ulaşılabilecek temel sonuç nedir?',
    options: [
      'İngilizlerin Amerika kıtasındaki ilk yerleşim girişimlerinin askeri saldırılar nedeniyle başarısız olduğu',
      'Yeni bir kıta keşfetme ve yerleşme çabasının, doğanın bilinmezliği karşısında insanın iz bırakmadan yok olmasına (yutulmasına) yol açabileceği',
      'Kolonistlerin İngiltere\'ye dönmek için kendi gemilerini inşa ettikleri',
      'Ağaca kazınan kelimenin İngilizce\'de "kurtuluş" anlamına geldiği'
    ],
    correct: 1,
    explanation: 'Hiçbir iz bulunamadan 115 kişinin yok olması, yeni ufuklar keşfetme arzusunun vahşi doğada iz bırakmadan yutulmakla sonuçlanabileceğini gösterir.'
  },
  {
    title: 'Apollo 13: Başarılı Başarısızlık',
    passage: '1970 yılında Ay\'a iniş yapmak üzere fırlatılan Apollo 13 uzay aracında, dünyadan yüz binlerce kilometre uzaktayken oksijen tankı patladı. Ay\'a inmek bir yana, üç astronotun hayatta kalması mucizelere bağlıydı. Houston\'daki mühendisler ve uzaydaki ekip, koli bandı, plastik torbalar ve çorapları kullanarak derme çatma bir hava filtresi yaptılar ve modülü bir cankurtaran sandalına çevirdiler. Görev asli amacına ulaşamamış olsa da, astronotların sağ salim dünyaya dönmesi nedeniyle tarihe "Başarılı Başarısızlık" olarak geçti. Apollo 13, kriz anlarında soğukkanlılığın ve yaratıcı takım çalışmasının, kusursuz teknolojiden bile daha hayati olduğunu kanıtlamıştır.',
    questionStem: 'Apollo 13 görevinin "Başarılı Başarısızlık" olarak adlandırılmasının asıl nedeni nedir?',
    options: [
      'Ay\'a inilememesine rağmen (başarısızlık), kriz anında yaratıcı zekâ ve takım çalışmasıyla astronotların hayatının kurtarılması (başarı)',
      'Uzay aracının tamamen parçalanmasına rağmen Ay yüzeyine ait fotoğrafların dünyaya gönderilebilmesi',
      'Oksijen tankı patlamasının aslında planlanmış bilimsel bir deney olması',
      'Mühendislerin yeni uzay araçları tasarlamak için hükümetten daha fazla bütçe almayı başarması'
    ],
    correct: 0,
    explanation: 'Görev asıl amacı olan Ay\'a inme konusunda başarısız olsa da, koli bandı ve çorapla yaratıcı çözümler üretilerek can kaybının önlenmesi onu bir "başarı" kılmıştır.'
  },
  {
    title: 'Sıfırın İcadı',
    passage: 'Günümüzde matematiğin ve dijital dünyanın kalbi olan "sıfır" (0) rakamı, aslında uzun süre insan zihninin kabul etmekte zorlandığı bir felsefi sorundu. Antik Yunanlılar ve Romalılar "hiçliği" temsil eden bir sayı olamayacağına inanıyor, matematikte sadece var olan şeyleri sayıyorlardı. Sıfır kavramı, ilk kez Hindistan\'da hem bir "yokluk" felsefesi hem de bir basamak tutucu olarak geliştirildi, ardından İslam âlimleri tarafından Avrupa\'ya taşındı. Sıfırın matematiğe dâhil olması, karmaşık hesaplamaları, cebiri ve modern bilgisayar algoritmalarını mümkün kıldı. Hiçliği ifade eden bu küçük çember, aslında dünyadaki her şeyin hesaplanabilmesinin anahtarı olmuştur.',
    questionStem: 'Sıfırın (0) icadıyla ilgili parçada vurgulanan asıl düşünce aşağıdakilerden hangisidir?',
    options: [
      'Antik Romalıların matematiksel hesaplamalarda Hintlilerden daha pratik yöntemler kullandığı',
      'Hiçliği (yokluğu) temsil eden ve başlarda kabul görmeyen bu soyut kavramın, cebirin ve modern dijital teknolojilerin (hesaplanabilir dünyanın) temelini oluşturduğu',
      'Sıfır rakamının sadece astronomik mesafeleri ölçmek için icat edildiği',
      'İslam âlimlerinin matematikten ziyade felsefe ile ilgilendiği'
    ],
    correct: 1,
    explanation: 'Başlangıçta kabul görmeyen bir hiçlik sembolünün (sıfırın), karmaşık cebirin ve bugünkü bilgisayar dünyasının (hesaplanabilmenin) temeli olduğu vurgulanmıştır.'
  },
  {
    title: 'İbn Battuta\'nın Seyahatleri',
    passage: '14. yüzyılda Fas\'tan yola çıkan İbn Battuta, dönemin en büyük kâşifi olan Marco Polo\'nun seyahatlerinden üç kat daha fazla mesafe (yaklaşık 120 bin kilometre) kat etmiştir. Çin\'den Afrika\'nın derinliklerine, Anadolu\'dan Hindistan\'a kadar uzanan 30 yıllık yolculuğunda sadece bir tüccar veya gözlemci gibi davranmadı; gittiği yerlerde kadılık (hâkimlik) yaptı, evlendi ve o kültürlerin bizzat bir parçası oldu. Marco Polo dışarıdan bakan yabancı bir elçiyken, İbn Battuta İslam coğrafyasının evrensel bağları sayesinde nereye giderse gitsin kendini evinde hisseden içsel bir gezgindi. Onun seyahatnamesi, sınırların sadece haritalarda olduğunu, aynı inanç ve kültürel değerlerin kıtaları nasıl tek bir ev haline getirdiğini gösterir.',
    questionStem: 'Yazar, İbn Battuta ile Marco Polo\'yu karşılaştırırken İbn Battuta\'nın hangi özelliğini öne çıkarmaktadır?',
    options: [
      'Çok daha tehlikeli savaş bölgelerinden geçerek cesaretini kanıtlamasını',
      'Gittiği coğrafyalara yabancı bir gözlemci olarak değil, kültürel bağları sayesinde o toplumun bir parçası (içsel bir gezgin) olarak dâhil olmasını',
      'Seyahatlerini sadece ekonomik kazanç (ticaret) amacıyla planlamış olmasını',
      'Deniz yolculuklarından ziyade kara yolculuklarına ağırlık vermesini'
    ],
    correct: 1,
    explanation: 'Polo "yabancı bir elçi" iken, İbn Battuta\'nın evlenip, hâkimlik yapıp gittiği kültürlerin bir parçası (içsel bir gezgin) olması onu ayıran en önemli özelliktir.'
  },
  {
    title: 'Hammurabi Kanunları',
    passage: 'MÖ 1750 civarında Babil Kralı Hammurabi, dünyanın ilk kapsamlı ve sistemli yazılı yasa metni olan Hammurabi Kanunları\'nı devasa bir diorit taşa kazıttı. "Göze göz, dişe diş" (kısas) prensibine dayanan bu 282 maddelik kanun, günümüz insan hakları standartlarına göre son derece acımasız ve sınıfsal (köle ile özgür insana farklı cezalar veren) görünse de, tarihte bir devrimdi. Çünkü o güne kadar cezalar, yöneticilerin anlık keyfine ve öfkesine göre veriliyordu. Hammurabi, kanunları taşa kazıyarak adaleti kişilerin tekelinden çıkarıp kurallara bağladı. Bu taş, ne kadar sert olursa olsun, yazılı hukukun keyfi otoriteden daha üstün olduğunun ilk resmi ilanıdır.',
    questionStem: 'Hammurabi Kanunları\'nın acımasız görünmesine rağmen tarihsel açıdan bir "devrim" olarak kabul edilmesinin nedeni nedir?',
    options: [
      'Toplumdaki tüm sınıfları (köle ve özgür insan) tamamen eşit haklara kavuşturması',
      'Suç oranlarını Babil imparatorluğunda sıfıra indirmeyi başarması',
      'Cezaları yöneticilerin keyfi kararlarından çıkarıp, herkesin önceden bildiği sabit ve yazılı (objektif) bir hukuk sistemine bağlaması',
      'Sadece dini inançlara dayanan kuralları içerdiği için rahiplerin yetkisini artırması'
    ],
    correct: 2,
    explanation: 'Adaletin padişahın/yöneticinin anlık öfkesine değil, taşa yazılmış sabit ve yazılı kurallara (hukukun üstünlüğüne) bağlanması onu bir devrim yapmıştır.'
  },
  {
    title: 'Alesia Kuşatması',
    passage: 'MÖ 52 yılında Jül Sezar, Alesia kentinde Galyalı lider Vercingetorix\'i kuşattı. Şehri çembere almak için devasa bir sur inşa ettiren Sezar, Galyalıların dışarıdan devasa bir destek ordusu çağırdığını öğrenince tarihte eşi görülmemiş bir taktik uyguladı: Kendi kuşatma surunun arkasına, dışarıdan gelecek orduya karşı savunma yapmak için ikinci bir sur daha inşa etti. Böylece Roma ordusu, iki sur arasında hem kuşatan hem de kuşatılan konumunda savaştı. Sezar\'ın bu çifte duvar stratejisiyle savaşı kazanması, askeri dehanın sadece kılıç sallamak değil, kriz anında coğrafyayı ve mühendisliği zekice kendi lehine çevirmek olduğunu kanıtlar.',
    questionStem: 'Alesia Kuşatması\'ndaki çifte duvar stratejisi, Jül Sezar\'ın hangi yönünü vurgulamaktadır?',
    options: [
      'Düşmanla doğrudan yüzleşmekten korkan savunmacı yapısını',
      'Kriz anlarında mühendislik ve zekâyı kullanarak savaşın şartlarını (coğrafyayı) lehine çevirebilen taktiksel dehasını',
      'Ordusundaki asker sayısının Galyalılardan çok daha fazla olmasına güvenmesini',
      'Savaşta her zaman barışçıl diplomasi yollarını denemeyi tercih etmesini'
    ],
    correct: 1,
    explanation: 'İki sur arasına sıkışmasına rağmen çifte duvar (mühendislik ve zekâ) stratejisiyle krizi kendi lehine çevirmesi onun taktiksel dehasını gösterir.'
  },
  {
    title: 'Rasputin\'in Suikastı',
    passage: '1916 yılında Rus Çarlığı çöküşün eşiğindeyken, sarayda büyük bir etkiye sahip olan mistik şifacı Rasputin\'i öldürmek için soylular bir suikast planladı. Efsaneye göre Rasputin\'e önce siyanürlü pastalar yedirildi, zehir etki etmeyince defalarca kurşunlandı. Yine ölmeyip kaçmaya çalışınca sopalarla dövüldü ve en sonunda donmuş Neva Nehri\'ne atılarak boğuldu. Rasputin\'in bu abartılı ve mistik ölüm hikâyesi, muhtemelen suikastçıların kendi beceriksizliklerini örtmek için uydurdukları bir efsaneydi. Ancak bu karanlık figürün ölümü, çürümüş ve halktan kopmuş Rus Çarlığı\'nın yaklaşan kanlı devrimden (Bolşevik Devrimi) kaçamayacağının ilk işaret fişeğiydi.',
    questionStem: 'Yazar, Rasputin\'in abartılı ölüm efsanesinin asıl arka planını nasıl yorumlamaktadır?',
    options: [
      'Rasputin\'in gerçekten de doğaüstü güçlere sahip bir şifacı (büyücü) olduğuna inanması',
      'Suikastı düzenleyen soyluların kendi yetersizliklerini ve beceriksizliklerini gizlemek için bu miti uydurduklarını düşünmesi',
      'Rus halkının Rasputin\'i çok sevdiği için onun ölümünü kahramanca bir destana çevirmesi',
      'Zehirin o dönemde yeterince etkili bir ölüm aracı olmadığının kanıtlanması'
    ],
    correct: 1,
    explanation: 'Metinde açıkça "bu abartılı hikâye muhtemelen suikastçıların kendi beceriksizliklerini örtmek için uydurdukları bir efsaneydi" tespiti yapılmıştır.'
  },
  {
    title: 'Stanford Hapishane Deneyi',
    passage: '1971 yılında psikolog Philip Zimbardo, sıradan ve sağlıklı üniversite öğrencilerini sahte bir hapishaneye yerleştirip onlara rastgele "gardiyan" ve "mahkûm" rolleri verdi. Sadece iki hafta sürmesi planlanan deney, gardiyan rolündeki öğrencilerin mahkûmlara acımasızca psikolojik işkence yapmaya başlaması üzerine altıncı günde dehşet içinde sonlandırıldı. İnsanların kendilerine verilen gücü ve üniformayı sorgulamadan benimsemesi kan dondurucuydu. Bu deney, kötülüğün doğuştan gelen bir karakter bozukluğu değil; gücün, kontrolsüz otoritenin ve bulunulan ortamın (sistemin) sıradan bir insanı bile nasıl bir sadiste dönüştürebileceğinin en sarsıcı ispatıdır.',
    questionStem: 'Stanford Hapishane Deneyi\'nin ortaya koyduğu en temel psikolojik gerçek nedir?',
    options: [
      'Hapishanelerdeki fiziksel koşulların iyileştirilmesinin mahkûmları daha itaatkâr yaptığı',
      'Kötülüğün (veya sadist davranışların) kişinin doğuştan gelen karakteriyle değil, eline geçen güç ve içinde bulunduğu ortamla (sistemle) şekillenebileceği',
      'Üniversite öğrencilerin strese dayanma kapasitelerinin çok düşük olduğu',
      'Sadece daha önce suç işlemiş kişilerin başkalarına zarar verebileceği'
    ],
    correct: 1,
    explanation: 'Deney; gücün ve verilen rolün (ortamın), tamamen sıradan ve sağlıklı insanları bile zalim birer karaktere dönüştürebileceğini ispatlamıştır.'
  },
  {
    title: 'Büyük Emu Savaşı',
    passage: '1932 yılında Avustralya hükümeti, tarlaları tahrip eden devasa uçamayan kuş sürülerine (Emu\'lara) karşı orduyu göreve çağırdı. I. Dünya Savaşı gazisi askerler, makineli tüfeklerle binlerce kuşa savaş açtılar. Ancak Emular o kadar hızlı koşuyor ve dağınık gruplar halinde hareket ediyorlardı ki, askeri taktikler tamamen işlevsiz kaldı. Binlerce mermi harcanmasına rağmen sadece birkaç düzine kuş vurulabildi ve ordu "yenilgiyi" kabul edip geri çekildi. Büyük Emu Savaşı komik bir tarihi anekdot gibi görünse de, insanoğlunun teknolojik kibrinin ve ağır silahlarının, doğanın milyonlarca yıllık adaptasyon yeteneği karşısında ne kadar komik ve çaresiz kalabileceğinin bir kanıtıdır.',
    questionStem: 'Büyük Emu Savaşı hikâyesinden çıkarılabilecek asıl mesaj aşağıdakilerden hangisidir?',
    options: [
      'Avustralya ordusunun o dönemde yeterli cephane ve mühimmata sahip olmadığı',
      'Tarım zararlılarıyla mücadelenin tek yolunun kimyasal ilaçlar kullanmak olduğu',
      'İnsanoğlunun silah teknolojisine ve kibrine rağmen, doğanın kendi kuralları ve adaptasyon yeteneği karşısında yenilgiye uğrayabileceği',
      'Kuşların zekâ seviyesinin insanlardan çok daha üstün olduğu'
    ],
    correct: 2,
    explanation: 'Ordunun ve makineli tüfeklerin (teknolojik kibir), hızlı koşan ve dağınık hareket eden kuşlar (doğanın adaptasyonu) karşısında çaresiz kalması vurgulanmıştır.'
  },
  {
    title: 'Kleopatra\'nın Ölümü',
    passage: 'Mısır\'ın son kraliçesi Kleopatra, Romalı komutan Octavian\'a yenilip esir düştüğünde, Roma sokaklarında zincirlenmiş bir ganimet olarak sergileneceğini biliyordu. Bu aşağılanmayı reddeden kraliçe, efsaneye göre kendini zehirli bir engereğe sokturarak intihar etti. Kleopatra hayatı boyunca güzelliğiyle değil, politik zekâsı, dil yeteneği ve Roma\'nın en güçlü adamlarını (Sezar ve Antonius) manipüle edebilmesiyle ülkesini ayakta tutmuştu. Kendi ölümünü bile bir yenilgi olarak değil, düşmanına boyun eğmeyen, ilahi ve dokunulmaz bir efsanenin doğuşu olarak kurguladı. O, tarih sahnesinden silinirken bile kendi hikâyesinin kontrolünü elden bırakmayan eşsiz bir imaj yöneticisiydi.',
    questionStem: 'Yazar, Kleopatra\'nın intiharını hangi açıdan değerlendirmektedir?',
    options: [
      'Savaş kaybetmenin verdiği derin bir depresyon ve psikolojik zayıflık',
      'Roma kültürüne uyum sağlayamayacağını anlamasının getirdiği çaresizlik',
      'Düşmanına esir düşüp aşağılanmayı reddeden, kendi imajını ve efsanesini korumak için tasarlanmış son bir irade (kontrol) gösterisi',
      'Mısır dini inançlarında intiharın kutsal bir eylem olarak kabul edilmesi'
    ],
    correct: 2,
    explanation: 'İntihar etmesi bir yenilgi değil; Roma\'da ganimet gibi sergilenmeyi reddetmesi, hikâyesinin kontrolünü bırakmaması ve bir efsane yaratması (imaj yönetimi) olarak değerlendirilmiştir.'
  },
  {
    title: 'Büyük Melas Seli',
    passage: '1919 yılının Ocak ayında ABD\'nin Boston kentinde, akılalmaz bir sanayi felaketi yaşandı. Devasa bir tankın patlaması sonucu, 8 milyon litreden fazla sıcak ve yapışkan melas (pekmez) şurubu 50 km hızla sokaklara döküldü. Bu yapışkan tsunami, binaları ezdi ve 21 kişinin boğularak ölmesine neden oldu. Kazanın sebebi, şirketin tankı inşa ederken ucuza kaçması, mühendislik testlerini görmezden gelmesi ve sızıntıları gizlemek için tankı kahverengiye boyamasıydı. Boston Melas Seli, kâr hırsının ve sanayideki denetimsizliğin, en masum görünen maddeleri bile nasıl ölümcül bir kitle imha silahına dönüştürebileceğinin en yapışkan ve acı örneğidir.',
    questionStem: 'Boston Melas Seli felaketinin asıl sorumlusu olarak parçada ne gösterilmiştir?',
    options: [
      'Boston şehrinin altyapısının böyle bir sele uygun olmaması',
      'Havanın aniden ısınmasıyla melasın kimyasal bir reaksiyona girmesi',
      'Şirketin maliyetleri kısmak (kâr hırsı) uğruna mühendislik ve güvenlik kurallarını ihmal etmesi',
      'Sokaktaki insanların bu kadar hızlı akan bir sıvıya karşı hazırlıksız yakalanması'
    ],
    correct: 2,
    explanation: 'Olayın sebebinin tankın ucuza inşa edilmesi, testlerin görmezden gelinmesi ve sızıntının gizlenmesi (denetimsizlik ve kâr hırsı) olduğu parçada açıkça verilmiştir.'
  },
  {
    title: 'Posta Güvercini Cher Ami',
    passage: 'Birinci Dünya Savaşı sırasında, Amerikan ordusuna bağlı bir tabur (Kayıp Tabur) düşman hattının arkasında sıkışıp kalmıştı. Kendi topçuları tarafından yanlışlıkla vuruluyorlardı ve tüm iletişim hatları kesilmişti. Binbaşı, son çare olarak "Cher Ami" adlı bir posta güvercinini gökyüzüne saldı. Güvercin uçarken Almanlar tarafından vuruldu; göğsünden yaralandı, bir gözünü kaybetti ve bir bacağı koptu. Ancak pes etmedi. Kanlar içinde uçmaya devam edip 40 kilometre ötedeki karargâha ulaştı ve bacağına bağlı o hayat kurtaran mesajı iletti. 194 askerin hayatı, teknolojinin tıkandığı yerde, bir avuçluk yaralı bir kuşun inatçı kanat çırpışlarına borçludur.',
    questionStem: 'Cher Ami\'nin hikâyesinden çıkarılabilecek temel vurgu aşağıdakilerden hangisidir?',
    options: [
      'Hayvanların savaşlarda kullanılmasının etik dışı olduğu',
      'İletişim teknolojilerinin I. Dünya Savaşı\'nda tamamen işlevsiz kaldığı',
      'Modern savaşın karmaşasında ve teknolojinin çöktüğü anlarda bile, bir hayvanın fedakârlığının (inadının) yüzlerce hayatı kurtarabileceği',
      'Kuşların yön bulma yeteneklerinin radyo dalgalarıyla karıştığı'
    ],
    correct: 2,
    explanation: 'İletişimin çöktüğü, kendi topçularının onları vurduğu bir kriz anında, tek gözünü ve bacağını kaybeden bir güvercinin inatla uçarak 194 askeri kurtarması vurgulanmaktadır.'
  },
  {
    title: 'Asurbanipal Kütüphanesi',
    passage: 'Tarihte bilinen ilk sistemli kütüphane, MÖ 7. yüzyılda Yeni Asur İmparatoru Asurbanipal tarafından Ninova\'da kuruldu. O dönemin kralları genellikle kestikleri başlarla ve yaktıkları şehirlerle övünürken, Asurbanipal okuma yazma bilmesiyle ve ele geçirdiği ülkelerdeki kil tabletleri toplayarak oluşturduğu devasa arşiviyle gurur duyuyordu. İmparatorluk yıkılıp Ninova şehri alevlere teslim olduğunda, ateşte pişen kil tabletler yok olmak yerine daha da sertleşerek günümüze kadar ulaştı. Ünlü Gılgamış Destanı da bu tabletlerin arasından çıkmıştır. Asurbanipal\'in bilgiye duyduğu bu saplantı, kılıçla kurulan imparatorlukların yıkılsa bile, kil tabletlere kazınan bilginin yangınlardan bile sağ çıkabileceğini kanıtladı.',
    questionStem: 'Asurbanipal Kütüphanesi\'nin günümüze ulaşmasında parçada bahsedilen "ironik (şaşırtıcı)" durum nedir?',
    options: [
      'Tabletlerin tamamen altından yapılmış olması nedeniyle erimemeleri',
      'Şehri yok eden büyük yangının (ateşin), normalde her şeyi küle çevirirken kil tabletleri pişirip sertleştirerek binlerce yıl korunmalarını sağlaması',
      'Asurbanipal\'in tabletleri düşmanlardan korumak için yerin çok derinlerine gömmesi',
      'Kütüphanenin sadece tıp bilimiyle ilgili metinler içerdiği için düşmanlar tarafından saygı görmesi'
    ],
    correct: 1,
    explanation: 'Her şeyi yok etmesi beklenen yangının, kil tabletleri tam aksine pişirip sertleştirerek yok olmaktan kurtarması (zıt ve şaşırtıcı durum) parçanın ironisidir.'
  },
  {
    title: 'Özgürlük Heykeli\'nin Orijinal Rengi',
    passage: 'New York limanında yükselen ve tüm dünyaya umut ile özgürlüğü simgeleyen ünlü Özgürlük Heykeli, 1886\'da Fransa tarafından ABD\'ye hediye edildiğinde günümüzdeki o meşhur turkuaz-yeşil renginde değildi. Dışı tamamen ince bir bakır tabakasıyla kaplıydı ve tıpkı yeni basılmış bir bozuk para gibi parlak, kızıl-kahverengi bir renge sahipti. Yıllar içinde oksitlenme (patina) süreciyle bakır, o ikonik yeşil zırhına büründü. Başlangıçta halk heykeli temizlemek istese de, bu yeşil tabakanın altındaki metali çürümekten koruduğu anlaşıldı. Bazen değişen ve yaşlanan bir dış görünüş, bir anıtı yıkımdan koruyan en sağlam kalkan ve o anıtı eşsiz kılan asıl karakter olabilir.',
    questionStem: 'Özgürlük Heykeli\'nin renk değişimi üzerinden yazar nasıl bir çıkarım yapmaktadır?',
    options: [
      'Fransa\'nın hediye ettiği metalin aslında çok kalitesiz olduğu',
      'New York\'un hava kirliliğinin heykeli hızla yaşlandırdığı',
      'Zamanın getirdiği değişimin (oksitlenmenin) her zaman bir bozulma değil, eseri koruyan ve ona asıl kimliğini (karakterini) kazandıran faydalı bir kalkan olabileceği',
      'Anıtların düzenli olarak boyanıp temizlenmesi gerektiği'
    ],
    correct: 2,
    explanation: 'Heykelin yaşlanıp yeşile dönmesinin (oksitlenmenin) altındaki metali koruduğu ve ona ikonik karakterini verdiği belirtilerek değişimin faydalı/koruyucu olabileceği ifade edilmiştir.'
  }
];

// 5. MAKİNE
export const tarihParagrafSorulari5: TarihParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES_5.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES_5[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-tarih5-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
const PARAGRAPH_THEMES_6 = [
  {
    title: 'Phineas Gage ve Beynin Sırrı',
    passage: '1848 yılında bir demiryolu işçisi olan Phineas Gage, bir patlama sonucu kafatasını delip geçen metrelerce uzunluktaki demir bir çubukla yaralandı. Herkes onun ölmesini beklerken, o mucizevi bir şekilde iyileşti ve ayağa kalktı. Ancak fiziksel olarak sağlığına kavuşan Gage\'in kişiliği tamamen değişmişti. Eskiden kibar, çalışkan ve saygılı bir adamken; kazadan sonra küfürbaz, dürtüsel ve güvenilmez birine dönüştü. Gage\'in bu trajik hikâyesi, insan ruhunun ve karakterinin (ahlakın) kalpte veya soyut bir ruhta değil, beynin fiziksel kıvrımlarında (frontal lobda) gizli olduğunu kanıtlayan tıptaki en büyük dönüm noktalarından biridir.',
    questionStem: 'Phineas Gage olayının tıp ve psikoloji tarihindeki asıl önemi nedir?',
    options: [
      'İnsanların demir ve metal zehirlenmelerine karşı sanılandan daha dirençli olduğunu göstermesi',
      'Kişilik, ahlak ve karar verme gibi soyut kavramların beynin fiziksel yapısıyla (biyolojiyle) doğrudan bağlantılı olduğunu kanıtlaması',
      'İş kazalarının önlenmesi için modern iş güvenliği yasalarının çıkarılmasını sağlaması',
      'Tıbbi müdahale olmadan da ağır beyin hasarlarının zamanla kendiliğinden iyileşebileceğini ortaya koyması'
    ],
    correct: 1,
    explanation: 'Çubuk beynini deldikten sonra Gage\'in kişiliğinin (ahlakının) tamamen değişmesi, insan karakterinin soyut bir ruh değil, beynin fiziksel bir ürünü olduğunu kanıtlamıştır.'
  },
  {
    title: 'Vespasian ve İdrar Vergisi',
    passage: 'Roma İmparatoru Vespasian, devletin tükenen hazinesini doldurmak için tarihin en ilginç vergilerinden birini koydu: Şehirdeki umumi tuvaletlerden toplanan idrardan alınan vergi (idrar o dönemde amonyak içerdiği için çamaşır yıkamakta ve dericilikte kullanılıyordu). Oğlu Titus bu durumu iğrenç bulup babasını eleştirdiğinde, Vespasian idrar vergisinden elde edilen bir altını oğlunun burnuna tutup o meşhur sözü söyledi: "Pecunia non olet" (Paranın kokusu yoktur). Bu tarihi anekdot, devletlerin ve kapitalist aklın gelir elde etmek söz konusu olduğunda ahlaki veya estetik değerleri nasıl kolayca bir kenara itebildiğinin en net (ve en kötü kokulu) simgesidir.',
    questionStem: 'İmparator Vespasian\'ın "Paranın kokusu yoktur" sözüyle asıl vurgulamak istediği düşünce nedir?',
    options: [
      'Temizlik ve hijyenin Roma kültüründe paradan daha değersiz olduğu',
      'Vergi adaletsizliğinin halk arasında her zaman büyük isyanlara neden olduğu',
      'Ekonomik çıkar ve devletin gelir elde etmesi söz konusu olduğunda, o paranın kaynağının ahlaki veya estetik açıdan iğrenç olmasının önemsenmediği',
      'Antik dönemde altının sahte olup olmadığını anlamak için koklama yönteminin kullanıldığı'
    ],
    correct: 2,
    explanation: 'İdrardan alınan vergiye iğrenen oğluna "Paranın kokusu yoktur" demesi, paranın kaynağının (isterse iğrenç olsun) ekonomik çıkar karşısında önemsizleştiğini gösterir.'
  },
  {
    title: 'Pergamon (Bergama) ve Parşömen',
    passage: 'Antik çağda yazılı eserler, Mısır\'da üretilen papirüs kâğıtlarına yazılıyordu. İskenderiye Kütüphanesi ile rekabet halinde olan Anadolu\'daki Pergamon (Bergama) Kütüphanesi, Mısır kralını öylesine korkuttu ki, Mısır aniden Bergama\'ya papirüs ihracatını yasakladı (ambargo uyguladı). Bergamalılar bu kriz karşısında pes etmek yerine, koyun ve keçi derilerini özel bir işlemden geçirerek papirüsten çok daha dayanıklı, iki yüzüne de yazılabilen yeni bir kâğıt icat ettiler: "Pergamin" yani günümüzdeki adıyla Parşömen. Bu olay, tarihteki ambargo ve engellemelerin, yok oluşa değil; zekâyı tetikleyerek çok daha üstün yeniliklere (inovasyona) yol açabileceğinin efsanevi bir kanıtıdır.',
    questionStem: 'Bergamalıların parşömeni icat etme süreci üzerinden ulaşılabilecek temel yargı aşağıdakilerden hangisidir?',
    options: [
      'Hayvansal ürünlerin her zaman bitkisel ürünlerden daha dayanıklı olduğu',
      'Karşılaşılan dış baskıların, ambargoların ve krizlerin, insan zekâsını zorlayarak daha üstün ve kalıcı yenilikler (inovasyon) doğurabileceği',
      'Mısır medeniyetinin kültürel olarak Anadolu medeniyetlerinden daha geri planda kaldığı',
      'Antik dönemdeki kütüphanelerin sadece krallar tarafından kullanılabildiği'
    ],
    correct: 1,
    explanation: 'Papirüs ambargosu (kriz/engel) yüzünden Bergamalıların pes etmeyip daha üstün olan parşömeni icat etmeleri, krizlerin inovasyonu tetiklediğini gösterir.'
  },
  {
    title: 'Hasan Sabbah ve Fedaileri',
    passage: '11. yüzyılda Sarp Elburz Dağları\'ndaki Alamut Kalesi\'ne yerleşen Hasan Sabbah, tarihin ilk ve en korkutucu suikast örgütü olan Haşhaşileri (Suikastçılar/Assassins) kurdu. Sabbah\'ın gücü devasa ordulardan değil, zihinlerini tamamen yıkadığı ve kendisine körü körüne itaat eden az sayıdaki fedailerinden geliyordu. Sahte bir cennet vaadiyle ölüm korkusunu sıfırladığı bu gençler, dönemin en güçlü sultanlarını ve vezirlerini (Nizamülmülk gibi) korumalarının ortasında hançerleyerek öldürdüler. Alamut efsanesi, ikna edilmiş ve ölüm korkusunu yenmiş bir avuç fanatiğin, kılıçla kuşanan devasa imparatorlukları psikolojik olarak nasıl felç edebileceğinin ürpertici bir ispatıdır.',
    questionStem: 'Hasan Sabbah\'ın Alamut Kalesi\'nde kurduğu düzen, tarihi süreçte gücün hangi boyutunu temsil etmektedir?',
    options: [
      'Orduların teknolojik silahlarla donatıldığında yenilmez olmasını',
      'İnancın ve psikolojik manipülasyonun (zihin kontrolünün), sayısal ve askeri üstünlükten çok daha asimetrik ve korkutucu bir güce dönüşebilmesini',
      'Dağlık coğrafyaların her zaman savunma için en ideal alanlar olmasını',
      'Ortadoğu\'daki suikastların sadece ekonomik nedenlerle işlendiğini'
    ],
    correct: 1,
    explanation: 'Küçük bir fedai grubunun sahte cennet vaadiyle (zihin kontrolü) devasa imparatorlukları felç etmesi, psikolojik manipülasyonun asimetrik gücünü temsil eder.'
  },
  {
    title: 'Tordesillas: Dünyayı İkiye Bölen Çizgi',
    passage: '1494 yılında, dönemin en büyük iki deniz gücü olan İspanya ve Portekiz, yeni keşfedilen kıtaları paylaşmak için sürekli çatışıyordu. Papa\'nın onayıyla Tordesillas Antlaşması imzalandı. Harita üzerinde Atlas Okyanusu\'nun ortasından dikey bir çizgi çekildi; çizginin batısında kalan henüz keşfedilmemiş tüm topraklar İspanya\'ya, doğusunda kalanlar ise Portekiz\'e verildi (Brezilya\'nın Portekizce konuşmasının sebebi budur). Bu antlaşma, orada yaşayan milyonlarca yerli halkın varlığını ve kültürünü hiçe sayarak, Avrupalı imparatorlukların bir masada cetvelle tüm dünyayı kendi mülkleri gibi paylaştıkları tarihteki en büyük ve en küstah sömürgecilik (kibir) eylemidir.',
    questionStem: 'Tordesillas Antlaşması\'nın anlatıldığı bu parçada, yazarın eleştirdiği asıl tutum nedir?',
    options: [
      'Papa\'nın sadece iki ülkenin çıkarlarını koruyan taraflı bir karar vermesi',
      'Harita çizim tekniklerinin o dönemde çok ilkel olması nedeniyle yanlış hesaplamalar yapılması',
      'Avrupalı güçlerin (imparatorlukların), diğer halkların varlığını yok sayarak koca bir gezegeni masa başında mülkleri gibi bölüştükleri sömürgeci kibri',
      'İspanya\'nın denizcilikte Portekiz\'den daha güçlü olmasına rağmen az toprak alması'
    ],
    correct: 2,
    explanation: 'Milyonlarca yerli halkın yok sayılarak dünyanın masada cetvelle ikiye bölünmesi, sömürgeci kibrin ve diğer halkları hiçe saymanın bir eleştirisidir.'
  },
  {
    title: 'Orson Welles ve Dünyalar Savaşı',
    passage: '1938 yılının Cadılar Bayramı gecesinde, Amerikalı tiyatrocu Orson Welles radyoda H.G. Wells\'in "Dünyalar Savaşı" adlı romanını canlı bir haber bülteni formatında sahneledi. Spiker, uzaylıların dünyaya saldırdığını, zehirli gazlar ve ısı ışınlarıyla şehirleri yıktığını panik içinde anlatıyordu. Oyunun başında bunun bir kurgu olduğu anons edilmesine rağmen, yayını sonradan açan binlerce Amerikalı gerçekten Marslıların saldırdığını sanarak yollara döküldü, karakollara sığındı ve bir kitlesel histeri yaşandı. Bu radyo tiyatrosu, kitle iletişim araçlarının (medyanın) insan algısını nasıl kolayca manipüle edebileceğinin ve kalabalıkların paniğe ne kadar yatkın olduğunun korkutucu bir provasıydı.',
    questionStem: 'Dünyalar Savaşı radyo yayını olayının ortaya koyduğu en çarpıcı toplumsal gerçek nedir?',
    options: [
      'İnsanların uzaylıların varlığına dair bilimsel kanıtlar araması',
      'Kitle iletişim araçlarının (medyanın), gerçek ile kurguyu birbirine karıştırarak büyük toplulukları kolayca paniğe (histeriye) sürükleme gücü',
      'Radyo tiyatrosunun televizyondan daha etkili bir sanat dalı olduğu',
      'Hükümetlerin acil durumlara karşı hiçbir kriz planının bulunmadığı'
    ],
    correct: 1,
    explanation: 'Bir kurgunun haber bülteni gibi sunulmasıyla binlerce kişinin paniğe kapılması, medyanın manipülasyon gücünü ve kitlelerin histeriye yatkınlığını gösterir.'
  },
  {
    title: 'Semmelweis: Deliren Kâhin',
    passage: '19. yüzyılın ortalarında Viyana\'daki doğumevlerinde her üç anneden biri "loğusa humması"ndan ölüyordu. Doktor Ignaz Semmelweis, ölümlerin sebebinin morgdan çıkıp ellerini yıkamadan doğuma giren doktorlar olduğunu fark etti. Çözüm çok basitti: "Ellerinizi klorlu suyla yıkayın." Bu basit kural ölümleri bıçak gibi kesti. Ancak o dönemin "elleri kirli" kibirli tıp otoriteleri, bir doktorun elinin ölüm taşıyamayacağını iddia ederek Semmelweis\'i dışladılar. İşinden kovulan ve meslektaşları tarafından alaya alınan Semmelweis, sonunda bir tımarhaneye kapatıldı ve orada gardiyanlar tarafından dövülerek öldürüldü. Tarih, statükonun (kibirli otoritelerin) yeni bir doğruyu kabul etmektense, gerçeği söyleyeni delirtmeyi tercih ettiğinin kanıtlarıyla doludur.',
    questionStem: 'Dr. Semmelweis\'in hikâyesi üzerinden çıkarılabilecek ana düşünce aşağıdakilerden hangisidir?',
    options: [
      'Tıp biliminde hijyenin öneminin ilk kez 20. yüzyılda anlaşıldığı',
      'Kurumlaşmış otoritelerin ve kibrin, çok basit ve hayat kurtarıcı bilimsel doğrulara bile yenilik korkusuyla düşmanca direnebileceği',
      'Avrupa\'daki hastanelerin altyapılarının salgın hastalıkları önlemeye yetmediği',
      'Sadece tıp fakültesinden mezun olanların yeni keşifler yapabileceği'
    ],
    correct: 1,
    explanation: 'Ellerini yıkamayan kibirli doktorların (statükonun) doğruyu söyleyen Semmelweis\'i dışlayıp tımarhaneye atması, otoritenin bilimsel doğrulara bile kibri yüzünden direnebileceğini gösterir.'
  },
  {
    title: 'Milgram Deneyi ve Otorite',
    passage: '1961 yılında psikolog Stanley Milgram, sıradan insanların otorite karşısında ne kadar ileri gidebileceğini ölçmek için bir deney tasarladı. Deneklere, yan odadaki bir öğrenciye (aslında çığlık atan bir oyuncu) kelimeleri yanlış bildikçe elektrik şoku vermeleri söylendi. Şok seviyesi "ölümcül" düzeye gelmesine ve yan odadan acı dolu yalvarışlar gelmesine rağmen, beyaz önlüklü araştırmacı "Devam etmeniz gerekiyor" dediği için deneklerin %65\'i şok vermeye sonuna kadar devam etti. Milgram deneyi, tarihteki büyük katliamların psikopatlar tarafından değil; sadece "bana verilen emri yerine getiriyordum" diyen itaatkâr, sıradan insanlar tarafından gerçekleştirildiğini dondurucu bir şekilde kanıtladı.',
    questionStem: 'Milgram Deneyi\'nin insan doğası hakkında ortaya çıkardığı asıl acı gerçek nedir?',
    options: [
      'İnsanların genetik olarak şiddete ve başkalarına fiziksel acı çektirmeye eğilimli olduğu',
      'Sıradan insanların, kendi vicdanlarına ters düşse bile otorite (emir) karşısında başkalarına ölümcül zararlar verebileceği',
      'Laboratuvar ortamındaki stresin insanların zihinsel sağlığını kalıcı olarak bozduğu',
      'Sadece iyi eğitim almamış insanların emirleri sorgulamadan uyguladığı'
    ],
    correct: 1,
    explanation: 'Deneklerin vicdanen rahatsız olsalar bile sırf beyaz önlüklü kişi emrettiği için (otorite) ölümcül şok vermeye devam etmeleri, sıradan insanın otoriteye körü körüne itaatini kanıtlar.'
  },
  {
    title: 'Çocuk Haçlı Seferi',
    passage: '1212 yılında Avrupa\'da, yetişkin şövalyelerin başaramadığını masumiyetleriyle başaracaklarına inanan on binlerce çocuk ve genç bir araya geldi. "Çocuk Haçlı Seferi" olarak bilinen bu trajik yürüyüşte, Akdeniz\'in sularının önlerinde ikiye ayrılacağına ve Kudüs\'ü kan dökmeden alacaklarına inandırılmışlardı. Ancak ne deniz ikiye yarıldı ne de kutsal topraklara ulaştılar. Çoğu yolda açlıktan ve hastalıktan öldü, geri kalanlar ise fırsatçı tüccarlar tarafından gemilere doldurulup Kuzey Afrika\'da köle olarak satıldı. Bu karanlık olay, saf inancın ve masumiyetin, fanatik düşünceler ve acımasız çıkar odakları tarafından nasıl korkunç bir felakete sürüklenebileceğinin ağıtıdır.',
    questionStem: 'Çocuk Haçlı Seferi\'nin anlatıldığı bu metinde vurgulanan asıl eleştiri nedir?',
    options: [
      'Avrupalı kralların askeri stratejilerde yetersiz kalması',
      'Masumiyetin ve saf inancın (dini fanatizmin), mantık dışı idealler uğruna sömürülerek korkunç trajedilere yol açması',
      'Orta Çağ\'da çocukların denizcilik eğitimi almadan gemilere bindirilmesi',
      'Akdeniz ticaretinin sadece köle tüccarlarının elinde olması'
    ],
    correct: 1,
    explanation: 'Denizin yarılacağına inandırılan masum çocukların ölüme veya köleliğe terk edilmesi, saf inancın fanatizm ve çıkar odakları tarafından sömürülmesini eleştirir.'
  },
  {
    title: 'Martha: Son Yolcu Güvercini',
    passage: '19. yüzyılın başlarında Kuzey Amerika semalarında uçan Yolcu Güvercinlerinin sayısının 3 ila 5 milyar arasında olduğu tahmin ediliyordu. Sürüler geçmeye başladığında gökyüzü saatlerce kararıyor, adeta bir güneş tutulması yaşanıyordu. İnsanlar, bu devasa bolluğun asla tükenmeyeceğine inanarak kuşları ağlarla, dinamitlerle, hatta zehirli gazlarla endüstriyel boyutta avladılar. O devasa türden geriye kalan tek kuş olan "Martha", 1914 yılında Cincinnati Hayvanat Bahçesi\'ndeki kafesinde yapayalnız öldüğünde, bir tür tamamen yok oldu. Martha\'nın sessiz ölümü, doğanın sonsuz olduğuna dair insan kibrinin ve kontrolsüz açgözlülüğün ne kadar yıkıcı olduğunun en acı kanıtıdır.',
    questionStem: 'Yolcu Güvercinlerinin tükeniş öyküsünden çıkarılması gereken en önemli ders nedir?',
    options: [
      'Hayvanat bahçelerinin vahşi hayvanların ömrünü kısalttığı',
      'Kuş türlerinin göç yollarının sanayileşme yüzünden bozulduğu',
      'Doğadaki hiçbir kaynağın sonsuz olmadığı, insan açgözlülüğünün en bol (tükenmez sanılan) varlıkları bile hızla yok edebileceği',
      'Teknolojik silahların sadece savaşlarda kullanılması gerektiği'
    ],
    correct: 2,
    explanation: 'Sayıları milyarları bulan (tükenmez sanılan) bir türün bile açgözlü avlanma sonucu sıfıra inmesi, doğanın sonsuz olmadığını ve insanın yıkıcılığını gösterir.'
  },
  {
    title: 'Panoptikon ve Görünmez İktidar',
    passage: '18. yüzyılda filozof Jeremy Bentham, "Panoptikon" adında kusursuz bir hapishane tasarladı. Bu tasarımda hücreler dairesel bir şekilde dizilmişti ve ortada karanlık bir gözetleme kulesi vardı. Işık oyunları sayesinde mahkûmlar kuleyi göremiyor, gardiyanın kendilerine bakıp bakmadığını asla bilemiyordu. İzlenmedikleri anlarda bile "Ya izleniyorsam?" korkusuyla kendi kendilerini disipline ediyor, kurallara uyuyorlardı. Filozof Michel Foucault\'ya göre modern toplumlar da devasa birer Panoptikon\'dur. Kameralar, sosyal medya ve devlet denetimi sayesinde; güce ihtiyaç duymadan, bireylerin kendi kendilerinin gardiyanı olduğu görünmez bir iktidar yaratılmıştır.',
    questionStem: 'Panoptikon hapishane tasarımı, modern toplumlara uyarlandığında asıl olarak neyi sembolize etmektedir?',
    options: [
      'Hapishane koşullarının eskiye göre çok daha insani hale geldiğini',
      'Bireylerin, sürekli izlenme ihtimali (gözetim duygusu) üzerinden kendi kendilerini denetlediği (içselleştirdiği) görünmez bir otoriteyi',
      'Mimari yapıların psikoloji üzerindeki etkisinin geçici olduğunu',
      'Devletlerin güvenlik güçlerine (gardiyanlara) olan ihtiyacının tamamen bittiğini'
    ],
    correct: 1,
    explanation: 'Mahkûmların izlenip izlenmediğini bilmeden kendi kendilerini disipline etmesi, modern toplumdaki "sürekli gözetim altında olma korkusuyla insanın kendi kendisinin gardiyanı olması"nı sembolize eder.'
  },
  {
    title: 'Feynman ve Soğuk O-Ring',
    passage: '1986 yılında Challenger uzay mekiği fırlatıldıktan 73 saniye sonra parçalanarak infilak etti. Kazayı araştıran komisyonda dâhi fizikçi Richard Feynman da vardı. NASA yöneticileri suçu karmaşık teknik detaylara atmaya çalışırken, Feynman kameraların önünde buzlu bir bardak suyun içine kauçuk bir conta (O-ring) attı. Soğuk suda donan contanın esnekliğini kaybettiğini basitçe gösterdi. Kazanın asıl sebebi, yöneticilerin fırlatma tarihlerini tutturmak için (halkla ilişkiler baskısıyla) mühendislerin "hava çok soğuk, bu contalar patlar" uyarısını görmezden gelmesiydi. Feynman\'ın şu meşhur sözü tarihe geçti: "Halkla ilişkiler adına doğayı kandıramazsınız, çünkü doğa asla aldanmaz."',
    questionStem: 'Challenger kazasının anlatıldığı bu parçaya göre, felaketin asıl arka planında yatan faktör nedir?',
    options: [
      'Uzay teknolojisinin henüz insanlı uçuşlar için yeterince gelişmemiş olması',
      'Richard Feynman\'ın NASA yöneticileriyle olan kişisel husumeti',
      'Kurumsal imaj (halkla ilişkiler) ve baskıların, mühendislerin bilimsel ve güvenlik uyarılarının önüne geçmesi',
      'Hava sıcaklıklarının uzay mekiklerinin fırlatılmasında hiçbir etkiye sahip olmaması'
    ],
    correct: 2,
    explanation: 'Feynman\'ın deneyiyle kazanın, yöneticilerin fırlatma tarihlerini tutturmak uğruna mühendislerin "hava çok soğuk" uyarısını (bilimi) görmezden gelmesi yüzünden yaşandığı kanıtlanmıştır.'
  },
  {
    title: 'Hawthorne Etkisi',
    passage: '1920\'lerde Chicago\'daki Hawthorne fabrikasında işçilerin verimliliğini artırmak için bir deney yapıldı. Aydınlatma artırıldığında işçilerin üretimi yükseldi. Ancak bilim insanlarını şaşırtan şey, aydınlatma tekrar azaltılıp eski loş haline getirildiğinde de verimliliğin artmaya devam etmesiydi! Uzun araştırmalar sonucu gerçek anlaşıldı: İşçiler ışık değiştiği için veya mola süreleri uzadığı için değil; sadece birileri onları izlediği, önemsendiği ve deneye dâhil edildikleri için daha iyi çalışıyorlardı. "Hawthorne Etkisi" adı verilen bu durum, insanın sadece mekanik bir dişli olmadığını, izlendiğini ve değer gördüğünü hissetmesinin en güçlü motivasyon kaynağı olduğunu kanıtladı.',
    questionStem: 'Hawthorne Etkisi\'nin psikoloji ve yönetim bilimine katkısı aşağıdakilerden hangisidir?',
    options: [
      'Fabrikalardaki ışıklandırmanın çalışan sağlığı üzerindeki etkisini matematiksel olarak kanıtlaması',
      'Fiziksel çalışma koşullarından ziyade, bireylerin gözlemlenme ve önemsenme (psikolojik ilgi) duygusunun performansı artırdığını ortaya koyması',
      'Mola sürelerinin uzun tutulmasının işçileri tembelliğe ittiğini göstermesi',
      'Çalışanların sadece yüksek maaş beklentisiyle daha fazla ürettiğini ispatlaması'
    ],
    correct: 1,
    explanation: 'Işık azaltıldığında bile üretimin artması, işçilerin fiziksel koşullardan (ışık) ziyade "izlendiklerini ve önemsendiklerini" hissettikleri için daha iyi çalıştığını gösterir.'
  },
  {
    title: 'Platon\'un Mağara Alegorisi',
    passage: 'Platon meşhur mağara alegorisinde, doğduklarından beri karanlık bir mağarada zincirlenmiş insanları anlatır. Bu insanlar sadece arkalarındaki ateşin, karşılarındaki duvara yansıttığı gölgeleri izler ve o gölgeleri "gerçek" sanırlar. Bir gün zincirlerinden kurtulan bir mahkûm mağaradan dışarı çıkar ve güneşi, gerçek dünyayı görür. Gözleri başlangıçta kamaşsa da hakikati anlar. Ancak heyecanla mağaraya dönüp diğerlerine gölgelerin sahte olduğunu söylediğinde, kimse ona inanmaz; hatta düzenlerini ve rahat yalanlarını bozduğu için onu öldürmek isterler. Bu hikâye, insanların yanılsamalar (cehalet) içindeki konfor alanlarını, hakikatin o acı verici ve sarsıcı ışığına her zaman tercih ettiklerinin en büyük felsefi kanıtıdır.',
    questionStem: 'Platon\'un Mağara Alegorisi\'ne göre, insanların zincirlerinden kurtulan mahkûma (hakikati getirene) düşmanca davranmasının asıl nedeni nedir?',
    options: [
      'Güneş ışığının mağaradaki herkesin gözünü kör etmesinden korkmaları',
      'Mahkûmun onlardan para talep ederek çıkarlarına dokunması',
      'Hakikatin acı verici olmasından dolayı, alıştıkları sahte konfor alanlarını (cehaletlerini) kaybetmek istememeleri',
      'Gölgelerin ardındaki ateşin aniden sönerek onları karanlıkta bırakması'
    ],
    correct: 2,
    explanation: 'Alegoride insanların gölgeleri gerçek sanması ve doğruyu anlatanı öldürmek istemeleri, cehaletin ve yalanın verdiği rahatlıktan vazgeçmek (hakikatin acısıyla yüzleşmek) istememelerinden kaynaklanır.'
  },
  {
    title: 'Demirbaş Şarl ve Osmanlı',
    passage: 'İsveç Kralı XII. Karl, 1709 yılında Rus Çarı Deli Petro\'ya karşı Poltava\'da ağır bir yenilgi aldıktan sonra yaralı bir halde Osmanlı İmparatorluğu\'na sığındı. Misafirliği birkaç ay sürecek sanılırken, Kral tam beş yıl boyunca Osmanlı topraklarında (Bender\'de) kaldı. Sürekli Osmanlı hazinesinden para harcayarak devleti Rusya\'ya karşı yeni bir savaşa kışkırtmaya çalıştı. Ülkesine dönmesi için verilen onca çabaya rağmen gitmemekte direnince, Türk halkı ona "Demirbaş" (devlete zimmetli, yerinden oynamayan eşya) lakabını taktı. "Demirbaş Şarl"ın hikâyesi, kişisel hırsları yüzünden ülkesini felakete sürükleyen bir liderin, gurur ve inat uğruna düştüğü o trajikomik çaresizliğin simgesidir.',
    questionStem: 'İsveç Kralı\'na Osmanlı halkı tarafından "Demirbaş" lakabının verilmesinin temel nedeni nedir?',
    options: [
      'Savaşlarda gösterdiği çelik (demir) gibi bükülmez iradesi',
      'Rusya\'ya karşı Osmanlı ordusunu modernize ederek demir döküm fabrikaları kurdurması',
      'Osmanlı topraklarına sığınıp, her türlü çabaya rağmen yıllarca gitmeyerek adeta devlete ait sabit bir eşya (demirbaş) gibi orada kalması',
      'Deli Petro\'nun ordularını durdurabilen tek Avrupalı lider olması'
    ],
    correct: 2,
    explanation: 'Misafirliğinin 5 yıl sürmesi ve gitmemek için diretmesi nedeniyle ona "yerinden oynamayan, devlete zimmetli eşya" anlamına gelen Demirbaş lakabı takılmıştır.'
  },
  {
    title: 'İnkaların Khipu (Düğüm) Yazısı',
    passage: 'Amerika kıtasının en büyük medeniyetlerinden biri olan İnkalar, devasa taş tapınaklar yapmış, binlerce kilometrelik yollar döşemiş ve karmaşık bir vergi sistemi kurmuşlardı. İşin garibi, bütün bunları harflerden oluşan bir "yazı sistemi" olmadan başardılar. Bunun yerine "Khipu" adı verilen, farklı renkteki iplerin üzerine atılan binlerce düğümden oluşan şifreli bir sistem kullanıyorlardı. Her ipin rengi, düğümün şekli ve yeri, nüfus sayımından vergi kayıtlarına, hatta tarihi destanlara kadar devasa verileri depolayabiliyordu. Khipu, "uygarlık" dediğimiz şeyin tek bir standart yoldan (harflerden) ilerlemediğini; insan zekâsının verileri depolamak için ne kadar farklı ve muazzam sistemler (dokunsal yazılar) icat edebileceğini gösterir.',
    questionStem: 'Khipu sisteminin varlığı, uygarlık tarihi açısından neyi kanıtlamaktadır?',
    options: [
      'İnkaların Avrupalılar gelene kadar matematikten tamamen habersiz olduklarını',
      'Gelişmiş bir medeniyet kurmak ve karmaşık verileri kaydetmek için klasik (harflere dayalı) yazı sisteminin tek seçenek olmadığını',
      'İplerden yapılan düğümlerin kâğıttan çok daha uzun ömürlü olduğunu',
      'Sadece tekstil ticareti yapan toplumların düğüm sistemine ihtiyaç duyduğunu'
    ],
    correct: 1,
    explanation: 'İnkaların harf olmadan devasa bir medeniyet kurup verileri düğümlerle (Khipu) kaydetmesi, insan zekâsının gelişmek için klasik yazıya muhtaç olmadığını, alternatif yollar üretebildiğini gösterir.'
  },
  {
    title: 'Dunning-Kruger Etkisi',
    passage: '1995 yılında McArthur Wheeler adında bir adam, yüzüne limon suyu sürerek banka soymaya kalktı. Limon suyunun gizli mürekkep yapımında kullanıldığını bildiği için, yüzüne sürdüğünde güvenlik kameralarına karşı "görünmez" olacağına yürekten inanıyordu. Yakalandığında şaşkınlık içindeydi. Bu tuhaf ve komik olay, psikologlar David Dunning ve Justin Kruger\'e ilham oldu. Yaptıkları araştırmalar şu efsanevi gerçeği ortaya çıkardı: Bir konuda çok az bilgisi olan insanlar, ne kadar cahil olduklarını görecek kapasiteye sahip olmadıkları için kendilerini o konunun uzmanı sanırlar. "Dunning-Kruger Etkisi", cahilliğin insana bilgiden çok daha büyük ve tehlikeli bir özgüven verdiğinin bilimsel adıdır.',
    questionStem: 'Dunning-Kruger Etkisi\'nin temel psikolojik tanımı parçaya göre aşağıdakilerden hangisidir?',
    options: [
      'Zeki insanların her zaman kendilerinden şüphe ederek hata yapma korkusu yaşaması',
      'Limon suyu gibi kimyasalların insan beyni üzerinde halüsinasyonlara yol açması',
      'Bilgi ve beceri düzeyi düşük olan insanların, eksikliklerini fark edememeleri nedeniyle kendilerinde sahte ve tehlikeli bir özgüven (üstünlük) hissetmeleri',
      'Hırsızlık eğilimi olan bireylerin güvenlik güçlerini hafife alma psikolojisi'
    ],
    correct: 2,
    explanation: 'Çok az bilgisi olanların ne kadar cahil olduklarını görecek kapasitede olmamaları ve cahilliğin bilgiden daha büyük bir özgüven vermesi durumu tanımlanmaktadır.'
  },
  {
    title: 'Kumran (Ölü Deniz) Yazmaları',
    passage: '1947 yılında Bedevi bir çoban çocuk, kaybolan keçisini ararken Ölü Deniz yakınlarındaki Kumran mağaralarına rastgele bir taş attı. İçeriden gelen çömlek kırılma sesi, sadece bir vazonun değil; 2000 yıldır gizli kalan bir tarihin de kapağını kırmıştı. Mağaralarda, parşömen ve papirüslere yazılmış, Eski Ahit\'in bilinen en eski kopyalarını barındıran yüzlerce parça (Ölü Deniz Yazmaları) bulundu. Dinler tarihini derinden sarsan ve kutsal metinlerin kökenine ışık tutan bu devasa arkeolojik keşif; yıllarca süren planlı kazılarla veya ileri teknoloji uydularla değil, sadece keçisini arayan bir çocuğun elinden çıkan rastgele bir taşla başlamıştır.',
    questionStem: 'Ölü Deniz Yazmaları\'nın keşfediliş hikâyesi, tarihi süreçlerle ilgili hangi düşünceyi destekler niteliktedir?',
    options: [
      'Büyük tarihi ve arkeolojik keşiflerin bazen devasa bütçelere değil, tamamen sıradan ve tesadüfi (rastlantısal) küçük olaylara bağlı olabileceğini',
      'Dinler tarihine ait belgelerin mağaralarda saklanmasının metinlerin tamamen çürümesine neden olduğunu',
      'Çobanların antik çağ dillerini akademisyenlerden daha iyi okuyup anladığını',
      'Geçmiş medeniyetlerin kendi izlerini bilerek ve isteyerek yok etmeye çalıştığını'
    ],
    correct: 0,
    explanation: 'Dinler tarihini sarsan 2000 yıllık bir keşfin bir çocuğun rastgele attığı taşla başlaması, büyük olayların tesadüfi (rastlantısal) anlara bağlı olabileceğini gösterir.'
  },
  {
    title: 'Sisifos Söyleni',
    passage: 'Antik Yunan mitolojisinde Sisifos, tanrıları kandırdığı için korkunç bir cezaya çarptırılır. Sonsuza dek büyük bir kayayı dik bir tepenin zirvesine çıkarmak zorundadır. Ancak kaya tam zirveye ulaştığında her defasında elinden kayıp aşağı yuvarlanır ve Sisifos her şeye yeniden başlamak zorundadır. Filozof Albert Camus, bu efsaneyi modern insanın varoluşsal anlamsızlığına benzetir. Her sabah kalkıp aynı işe gitmek, aynı faturaları ödemek de Sisifos\'un kayası gibi anlamsız bir döngüdür. Ancak Camus ekler: "Tepelere doğru didinmek, bir insan yüreğini doldurmaya yeter. Sisifos\'u mutlu hayal etmeliyiz." Anlam, zirveye ulaşmakta değil; kayayı itme eyleminin, yani direnişin ta kendisindedir.',
    questionStem: 'Albert Camus\'nün "Sisifos Söyleni" üzerinden modern insana verdiği asıl felsefi mesaj nedir?',
    options: [
      'İnsanın doğaüstü güçlere (tanrılara) karşı gelmesinin her zaman büyük acılarla sonuçlanacağı',
      'Modern çalışma hayatının anlamsızlığı karşısında insanın her şeyi bırakıp tamamen izole bir yaşam sürmesi gerektiği',
      'Hayatın ve döngünün kendisi anlamsız (absürt) görünse bile, insanın bu mücadeleyi benimseyerek (direnerek) eylemin kendisinde mutluluk ve anlam bulabileceği',
      'Fiziksel olarak yorucu işlerin insanın psikolojisini düzelttiği'
    ],
    correct: 2,
    explanation: 'Döngü anlamsız olsa da "tepelere doğru didinmek insan yüreğini doldurur" sözü, mutluluğun ve anlamın zirvede değil mücadele ve direnişte (eylemin kendisinde) olduğunu anlatır.'
  },
  {
    title: 'Çin\'in Serçe Katliamı',
    passage: '1958 yılında Çin lideri Mao Zedong, tarımsal verimi artırmak için tarlalardaki tohumları yediğini düşündüğü serçelere karşı ülke çapında bir "yok etme" kampanyası başlattı. Halk, tencerelere vurarak kuşları uçmaya zorluyor ve yorgunluktan düşen milyonlarca serçeyi öldürüyordu. Kampanya ilk başta başarılı sayıldı, ancak doğa intikamını almakta gecikmedi. Serçeler yok olunca, ekinlere saldıran çekirgeleri ve böcekleri yiyecek kimse kalmamıştı. Ortaya çıkan devasa böcek istilası, Çin tarihindeki en büyük kıtlığa (Büyük Çin Kıtlığı) neden oldu ve milyonlarca insan açlıktan öldü. Bu olay, ekosistemin görünmez zincirlerinden tek bir halkanın bile kibirle koparılmasının, insanlık için nasıl ölümcül bir faturaya dönüşebileceğinin kanıtıdır.',
    questionStem: 'Çin\'deki serçe katliamının yıkıcı sonuçları, aşağıdakilerden hangisinin önemini vurgulamaktadır?',
    options: [
      'Tarımsal üretimde kimyasal böcek ilaçlarının kullanımının zorunlu olduğunu',
      'Devlet liderlerinin halkın beslenme alışkanlıklarına müdahale etmemesi gerektiğini',
      'Doğadaki hiçbir canlının gereksiz olmadığını ve ekosistemin denge zincirine yapılan bilinçsiz müdahalelerin felaket getireceğini',
      'Kuş türlerinin diğer tüm hayvan türlerinden daha hızlı ürediğini'
    ],
    correct: 2,
    explanation: 'Serçelerin yok edilmesinin ardından çekirge istilası yaşanması ve kıtlığın çıkması, ekosistemin dengesine (zincirin halkalarına) yapılan kibirli müdahalenin ölümcül felaket getirdiğini gösterir.'
  }
];

// 6. MAKİNE
export const tarihParagrafSorulari6: TarihParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES_6.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES_6[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-tarih6-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
const PARAGRAPH_THEMES_7 = [
  {
    title: 'Çift Yarık Deneyi ve Gözlemcinin Gücü',
    passage: 'Kuantum fiziğinin en sarsıcı deneyi olan Çift Yarık Deneyi\'nde, ışık parçacıkları (fotonlar) iki yarıklı bir levhadan geçirilir. Eğer bu parçacıkları izleyen bir ölçüm cihazı yoksa, fotonlar bir dalga gibi davranıp ekranda karmaşık bir girişim deseni oluşturur. Ancak deneye bir "gözlemci" dâhil edildiğinde, parçacıklar izlendiklerini biliyormuş gibi aniden dalga olmayı bırakıp sıradan birer mermi (parçacık) gibi iki düz çizgi oluştururlar. Evren, biz ona bakmadığımızda bir olasılıklar deniziyken, sırf biz ona bakıyoruz diye belirli bir gerçekliğe çökmektedir. Bu deney, gerçekliğin bizden bağımsız var olan somut bir sahne değil, bizim bilincimizle şekillenen interaktif bir illüzyon olduğunu fısıldar.',
    questionStem: 'Çift Yarık Deneyi\'nin sonuçları üzerinden yazarın gerçeklik algısıyla ilgili ulaştığı felsefi yargı nedir?',
    options: [
      'Gerçekliğin insan algısından bağımsız, sabit ve değişmez fiziksel yasalara dayandığı',
      'Işık parçacıklarının hızının, kullanılan ölçüm cihazlarının kalitesine göre değişiklik gösterdiği',
      'Fiziksel gerçekliğin aslında sabit olmadığı, bilincin ve "gözlem" eyleminin evrenin şekillenmesinde doğrudan rol oynadığı',
      'Kuantum fiziğinin henüz klasik fizik kurallarını çürütecek kadar yeterli veriye ulaşamadığı'
    ],
    correct: 2,
    explanation: 'Parçacıkların izlendiklerinde davranış değiştirmesi, gerçekliğin bizden bağımsız olmadığını ve gözlem (bilinç) ile şekillenen interaktif bir illüzyon olduğunu kanıtlar.'
  },
  {
    title: 'Schrödinger\'in Kedisi',
    passage: 'Fizikçi Erwin Schrödinger, kuantum dünyasının o absürt doğasını kanıtlamak için zihinsel bir deney tasarladı: Kapalı bir çelik kutunun içine bir kedi, zehirli bir gaz şişesi ve bozunma ihtimali %50 olan radyoaktif bir madde koydu. Kuantum kurallarına göre, biz o kutuyu açıp içine bakana kadar zehirli gaz hem salınmış hem de salınmamıştır; dolayısıyla kedi de aynı anda hem ölü hem de diridir! Makro dünyada delilik gibi görünen bu "süperpozisyon" durumu, kuantum dünyasının temelidir. Gerçeklik ancak kutunun kapağını açtığımızda, yani bir gözlem yaptığımızda "ölü" veya "diri" tek bir ihtimale çökerek netleşir. Kutu kapalıyken evren, sonsuz ihtimallerin aynı anda yaşandığı hayalet bir tiyatrodur.',
    questionStem: 'Schrödinger\'in zihinsel deneyinde vurgulanan "süperpozisyon" kavramı neyi ifade etmektedir?',
    options: [
      'Gözlem yapılana kadar birbirine zıt tüm olasılıkların (kedinin hem ölü hem diri olması) aynı anda var olmaya devam etmesini',
      'Radyoaktif maddelerin hayvanlar üzerindeki ölümcül etkisinin kesin olarak tahmin edilememesini',
      'Deney kutularının dış dünyadan tamamen izole edilmesinin bilimsel olarak imkânsızlığını',
      'Fizikçilerin zihinsel deneyler yerine laboratuvar deneylerine ağırlık vermesi gerektiğini'
    ],
    correct: 0,
    explanation: 'Süperpozisyon; kutu açılana kadar (gözlem yapılana dek) kedinin aynı anda hem ölü hem de diri olması, yani tüm ihtimallerin eşzamanlı varlığını sürdürmesidir.'
  },
  {
    title: 'Fare Parkı ve Bağımlılığın Kökeni',
    passage: '1970\'lerde psikolog Bruce Alexander, uyuşturucu bağımlılığının sadece kimyasal bir süreç olmadığını kanıtlamak için "Fare Parkı" deneyini tasarladı. Geleneksel deneylerde, dar ve karanlık bir kafese yalnız başına kapatılan fareler kendilerine sunulan uyuşturuculu suyu içerek hızla bağımlı oluyor ve ölüyordu. Ancak Alexander, içine oyuncaklar, lezzetli yiyecekler ve sosyalleşebilecekleri diğer farelerin bulunduğu devasa, mutlu bir "Fare Parkı" kurdu. Bu parktaki farelerin hiçbiri uyuşturuculu suyu içmedi, hatta önceden bağımlı olanlar bile yavaşça bu alışkanlığı bıraktı. Bağımlılık, kimyasal bir kancadan ziyade, izolasyonun, anlamsızlığın ve içinde bulunduğumuz karanlık kafesin yarattığı psikolojik bir kaçış refleksidir.',
    questionStem: 'Fare Parkı deneyi, uyuşturucu bağımlılığı konusunda hangi yerleşik inancı yıkmıştır?',
    options: [
      'Bağımlılığın tamamen genetik yatkınlıktan kaynaklanan bir hastalık olduğu inancını',
      'Bağımlılığın sadece maddenin kimyasal yapısıyla ilgili (biyolojik) bir sorun olduğu inancını yıkarak, asıl sorunun çevresel izolasyon ve mutsuzluk olduğunu göstermiştir',
      'Laboratuvar hayvanlarının uyuşturucu maddelere karşı insanlardan daha dirençli olduğu tezini',
      'Sosyalleşmenin ve kalabalık ortamların stres seviyesini artırarak bağımlılığı tetiklediği inancını'
    ],
    correct: 1,
    explanation: 'Yalnız ve mutsuz fareler bağımlı olurken, oyuncaklı ve sosyal parktaki farelerin maddeyi reddetmesi, bağımlılığın kimyasal değil çevresel ve psikolojik bir sorun olduğunu kanıtlamıştır.'
  },
  {
    title: 'Clara Immerwahr\'ın İntiharı',
    passage: 'Birinci Dünya Savaşı sırasında Alman kimyager Fritz Haber, havadan azotu sabitleyerek suni gübreyi bulmuş ve milyarlarca insanı açlıktan kurtarmış bir kahramandı. Ancak savaş patlak verince dehasını ölümcül klor gazı (kimyasal silah) üretmek için kullandı. Kendisi gibi başarılı bir kimyager olan eşi Clara Immerwahr, bilimin insanları öldürmek için kullanılmasını "barbarlığın en aşağılık hali" olarak nitelendirdi. Eşini durduramayan Clara, klor gazının siperlerde binlerce insanı boğarak öldürdüğü gecenin sabahında, kocasının beylik tabancasıyla bahçede canına kıydı. Clara\'nın o sessiz intiharı, bilimin ahlaktan (etikten) koptuğunda nasıl korkunç bir canavara dönüşebileceğinin tarihteki en trajik çığlığıdır.',
    questionStem: 'Clara Immerwahr\'ın intihar eylemi, metne göre neyin sembolik bir itirazıdır?',
    options: [
      'Kadın bilim insanlarının dönemin akademi dünyasında hak ettikleri değeri görememesinin',
      'Almanya\'nın Birinci Dünya Savaşı\'nda yenileceğini önceden fark etmesinin getirdiği umutsuzluğun',
      'Bilimsel zekânın ve icatların, insanlığın yararı (etik) yerine kitlesel ölümler ve savaş silahı olarak kullanılmasına duyulan ahlaki isyanın',
      'Karı-koca arasındaki mesleki rekabetin yıkıcı boyutlara ulaşmasının'
    ],
    correct: 2,
    explanation: 'Kocasının bilimi kimyasal silah olarak kullanmasına "barbarlık" demesi ve intihar etmesi, bilimin ahlaktan koparak ölüm aracı yapılmasına yönelik etik bir isyandır.'
  },
  {
    title: 'Soluk Mavi Nokta',
    passage: '1990 yılında Güneş sisteminin sınırlarına ulaşan Voyager 1 uzay aracı, Carl Sagan\'ın ricası üzerine kameralarını son bir kez geldiği yöne, Dünya\'ya çevirdi ve o efsanevi fotoğrafı çekti. 6 milyar kilometre uzaktan bakıldığında Dünya, Güneş ışınları arasında asılı duran, piksellerden bile küçük soluk mavi bir noktadan ibaretti. Sagan\'ın dediği gibi; uğruna kan dökülen tüm o imparatorluklar, kurulan bütün dinler, nefretler ve sevdalar, evrenin o dondurucu ve uçsuz bucaksız karanlığında süzülen bir toz zerresinin üzerinde yaşanmıştı. O fotoğraf, insanoğlunun devasa kibrine evrenin verdiği en sessiz ve en sarsıcı yanıttır.',
    questionStem: 'Yazar, "Soluk Mavi Nokta" fotoğrafının insanoğlu üzerindeki asıl etkisini nasıl yorumlamaktadır?',
    options: [
      'Güneş sistemindeki diğer gezegenlerin yaşama elverişsiz olduğunu bilimsel olarak ispatlamıştır.',
      'Uzay teknolojisinin ne kadar geliştiğini göstererek insanlığa büyük bir gurur vermiştir.',
      'İnsanoğlunun evrendeki konumunun ne kadar küçük ve önemsiz olduğunu (kibrin anlamsızlığını) felsefi bir yüzleşmeyle ortaya koymuştur.',
      'Dünya\'daki su kaynaklarının uzaydan mavi görünmesini sağlayan atmosfer yapısını açıklamıştır.'
    ],
    correct: 2,
    explanation: 'Uğruna savaşılan her şeyin küçük bir toz zerresinde (soluk mavi nokta) yaşanmış olması, insanın kibrine verilen sarsıcı bir yanıt (evrendeki önemsizliğimizle yüzleşme) olarak yorumlanmıştır.'
  },
  {
    title: 'Öğrenilmiş Çaresizlik',
    passage: 'Psikolog Martin Seligman 1960\'larda bir grup köpeğe, kaçamayacakları bir kafeste hafif elektrik şokları verdi. Köpekler başlangıçta çırpınıp kaçmaya çalıştı, ancak ne yaparlarsa yapsınlar şoktan kurtulamadıklarını görünce sonunda pes edip yere yattılar. Deneyin ikinci aşamasında kafesin kapısı açıldı, köpeklerin şoktan kurtulmak için sadece küçük bir engelin üzerinden atlamaları yeterliydi. Ancak kapı açık olmasına rağmen köpekler kaçmayı denemedi; sadece yattıkları yerde şoku kabullendiler. Seligman buna "Öğrenilmiş Çaresizlik" dedi. Zincirler bedenden çıkarılsa bile, zihne vurulan "ne yaparsam yapayım değişmeyecek" prangası, insanı veya hayvanı ebedi bir tutsağa dönüştürür.',
    questionStem: 'Öğrenilmiş Çaresizlik deneyinin sonuçlarına göre, canlıları eylemsizliğe (pes etmeye) iten asıl faktör nedir?',
    options: [
      'Uygulanan fiziksel acının canlıların kas sistemini felç etmesi',
      'Geçmişteki başarısız denemelerin zihinde yarattığı "çabaların sonucu değiştirmeyeceği" inancı ve umutsuzluk durumu',
      'Kapalı alan korkusunun (klostrofobi) mantıklı karar vermeyi engellemesi',
      'Laboratuvar ortamındaki stresin canlının zekâ seviyesini kalıcı olarak düşürmesi'
    ],
    correct: 1,
    explanation: 'Kapı açık olmasına rağmen kaçmamaları, geçmişteki başarısızlıkların zihne vurduğu "ne yaparsam yapayım değişmeyecek" prangası (umutsuzluk) yüzündendir.'
  },
  {
    title: 'Seyirci Etkisi (Bystander Effect)',
    passage: '1964 yılında New York\'ta Kitty Genovese adlı genç bir kadın, apartmanının önünde yarım saat boyunca bıçaklanarak öldürüldü. Çığlıklarına rağmen pencerelerinden olayı izleyen 38 komşusundan hiçbiri aşağı inip yardım etmedi, hatta birçoğu polisi bile aramadı. Bu korkunç tepkisizliği inceleyen psikologlar, olayın insanların kalpsizliğinden değil, "Sorumluluğun Dağılması" adlı psikolojik bir refleksten kaynaklandığını buldular. Ortamda ne kadar çok insan varsa, birey "Nasıl olsa bir başkası yardım eder, polis arar" diyerek kendi sorumluluğunu kalabalığa devreder. Seyirci etkisi, kalabalıkların içindeki bireyin, yalnızken olacağından çok daha pasif ve duyarsız bir yaratığa dönüştüğünü kanıtlar.',
    questionStem: 'Seyirci Etkisi\'nin temel psikolojik mekanizması parçada nasıl açıklanmaktadır?',
    options: [
      'Şiddet olaylarına tanık olmanın insanlarda anlık bir felç (donup kalma) etkisi yaratması',
      'İnsanların kendilerini tehlikeye atmamak için bencilce davranarak sadece kendi can güvenliklerini düşünmesi',
      'Kalabalık ortamlarda bireyin, müdahale etme yükümlülüğünü "başkası yapar" düşüncesiyle diğer insanlara devretmesi (sorumluluğun dağılması)',
      'Şehirleşmenin ve metropol hayatının insanları doğuştan duyarsız ve ahlaksız yapması'
    ],
    correct: 2,
    explanation: 'Olayı izleyen 38 kişinin yardım etmemesi "nasıl olsa bir başkası yardım eder" düşüncesiyle sorumluluğun kalabalığa devredilmesine (sorumluluk dağılımı) bağlanmıştır.'
  },
  {
    title: 'Hubble Derin Uzay Alanı',
    passage: '1995 yılında astronomlar çok riskli bir karar aldılar. Dünyanın en gelişmiş uzay teleskobu olan Hubble\'ı, gökyüzünde yıldızların hiç olmadığı, tamamen kapkaranlık ve "boş" görünen küçük bir noktaya çevirip tam 10 gün boyunca pozlama yaptılar. Çoğu bilim insanı bu zaman kaybına itiraz etti, çünkü orada "hiçbir şey yoktu". Ancak görüntüler dünyaya ulaştığında insanlık şoka uğradı. O karanlık iğne deliği büyüklüğündeki hiçliğin içinde, her biri milyarlarca yıldıza ev sahipliği yapan tam 3 bin farklı galaksi parlıyordu. Hubble Derin Alan fotoğrafı, evrenin sınırlarının algımızın çok ötesinde olduğunu ve "hiçbir şey yok" sandığımız karanlıkların, aslında sabırla bakmayı bilenler için sonsuz ışıklarla dolu olduğunu kanıtladı.',
    questionStem: 'Hubble teleskobunun "boşluk" sandığımız yere yönlendirilmesi ve sonucunda elde edilen veriler neyi sembolize eder?',
    options: [
      'Hubble teleskobunun lenslerinin zamanla bozulup sahte görüntüler ürettiğini',
      'Bilimsel kurulların aldığı riskli kararların genellikle başarısızlıkla sonuçlandığını',
      'Karanlık ve "hiçlik" olarak nitelendirdiğimiz şeylerin aslında sadece vizyon (ve teknoloji) eksikliğimizden kaynaklandığını; evrenin sandığımızdan çok daha zengin olduğunu',
      'Evrendeki tüm galaksilerin birbiriyle aynı yaşta ve yapıda olduğunu'
    ],
    correct: 2,
    explanation: 'Boş sanılan o karanlık noktada 3 bin galaksi bulunması, karanlık sandığımız yerlerin sabırla/doğru teknolojiyle bakıldığında aslında ne kadar zengin olduğunu gösterir.'
  },
  {
    title: 'Ayrık Beyin (Split-Brain) Deneyleri',
    passage: 'Epilepsi nöbetlerini durdurmak için bazı hastaların beyninin sağ ve sol yarımküresini birbirine bağlayan köprü (korpus kallozum) ameliyatla kesilir. Nörolog Roger Sperry, bu "ayrık beyinli" hastaları incelediğinde şok edici bir gerçekle karşılaştı. İletişimi kopan sol beyin ile sağ beyin, artık aynı bedende yaşayan farklı bilinçlere sahip iki ayrı "kişi" gibi davranıyordu. Mesela sağ beyin bir resmi görüp hastanın sol eliyle resmi çizerken; konuşma merkezi sol beyinde olduğu için, hasta ağzıyla o resmi neden çizdiğini bilmediğini, elinin kendi kendine hareket ettiğini söylüyordu. Bu deney, sarsılmaz ve tek bir "ben" (ruh) inancımızı paramparça etmiş; benliğimizin aslında beyindeki nöronların ortaklaşa kurduğu karmaşık bir meclis olduğunu kanıtlamıştır.',
    questionStem: 'Ayrık Beyin deneylerinin nöroloji ve felsefe dünyasında yarattığı asıl büyük sarsıntı nedir?',
    options: [
      'Epilepsi hastalığının tedavisinde cerrahi müdahalenin işe yaramadığını göstermesi',
      'İnsanın solak veya sağlak olmasının tamamen genetik olduğunu ispatlaması',
      'Tek ve bölünmez bir "benlik/ruh" inancını yıkarak, bilincin beynin biyolojik ve mekanik bir ürünü (parçalanabilir bir yapı) olduğunu ortaya koyması',
      'Sağ beynin konuşma konusunda sol beyinden daha yetenekli olduğunu kanıtlaması'
    ],
    correct: 2,
    explanation: 'Beynin iki yarısı ayrıldığında bedende iki farklı bilinç gibi davranılması, sarsılmaz "tek bir benlik/ruh" inancını yıkıp bilincin biyolojik bir ortaklık olduğunu göstermiştir.'
  },
  {
    title: 'Kelebek Etkisi ve Kaos Teorisi',
    passage: '1961 yılında meteorolog Edward Lorenz, hava durumunu tahmin etmek için bilgisayarına verileri giriyordu. Bir gün, bilgisayarın uzun süren işlemine baştan başlamak yerine, daha önce kaydettiği bir sonucu orta yerden sisteme girdi. Ancak kâğıttaki veriyi yazarken binde birlik çok küçük bir küsuratı (0.506127 yerine 0.506) yuvarlayarak eksik yazdı. Bu önemsiz görünen küsurat eksikliği, bilgisayarın aylar sonrası için tahmin ettiği hava durumunu günlük güneşlik bir havadan devasa bir kasırgaya çevirdi. "Kaos Teorisi" olarak bilinen bu fenomen, Brezilya\'da kanat çırpan bir kelebeğin, Teksas\'ta bir kasırgaya yol açabileceği gerçeğidir. Evren o kadar karmaşık bir ağdır ki, hiçbir şey önemsiz değildir ve doğrusal bir kesinlik imkânsızdır.',
    questionStem: 'Kelebek Etkisi kavramı, olayların gelişimiyle ilgili hangi klasik düşünceyi reddetmektedir?',
    options: [
      'Doğa olaylarının birbirini etkilediğini savunan ekolojik yaklaşımı',
      'Geleceğin her zaman kesin, öngörülebilir ve kontrol altında tutulabilir matematiksel bir düzene (determinizme) sahip olduğu inancını',
      'Hava durumu tahminlerinin teknoloji geliştikçe kusursuzlaşacağı düşüncesini',
      'Hayvanların doğa olaylarını insanlardan daha önce hissedebileceği inancını'
    ],
    correct: 1,
    explanation: 'Binde birlik ufacık bir yuvarlamanın kasırgaya yol açması, evrende doğrusal bir kesinliğin imkânsız olduğunu, yani her şeyin kesin/öngörülebilir olduğu fikrini çürütür.'
  },
  {
    title: 'Karanlık Madde\'nin Hayaleti',
    passage: '1970\'lerde astronom Vera Rubin, sarmal galaksilerin dönüş hızlarını ölçerken fizikte büyük bir krize neden olan bir anomali fark etti. Galaksilerin kenarlarındaki yıldızlar o kadar hızlı dönüyordu ki, merkezdeki görünür kütlenin (yıldızların ve gazın) çekim gücü onları bir arada tutmaya yetmemeli, galaksi tıpkı hızla dönen bir atlıkarınca gibi yıldızları uzaya fırlatıp parçalanmalıydı. Ama parçalanmıyorlardı. Onları bir arada tutan, ışığı yansıtmayan, dokunulamayan ama devasa bir çekim gücüne sahip "Karanlık Madde" adını verdiğimiz görünmez bir iskeletti. Evrendeki maddenin %85\'i bu karanlık hayaletten oluşur. Gördüğümüz, dokunduğumuz ve bildiğimiz her şey, asıl gerçekliğin omuzlarında gezinen küçük bir köpükten ibarettir.',
    questionStem: 'Vera Rubin\'in Karanlık Madde\'ye dair bulguları evren algımızla ilgili neyi kanıtlamaktadır?',
    options: [
      'Güneş sistemimizin galaksinin merkezinden sanıldığından daha uzakta olduğunu',
      'Evrende gözlemleyebildiğimiz (ışık saçan) maddi dünyanın, aslında evreni ayakta tutan o görünmez ve devasa gerçekliğin çok küçük bir parçası olduğunu',
      'Yıldızların kendi enerjilerini tükettiklerinde birer karadeliğe dönüşeceğini',
      'Teleskopların uzaydaki gaz ve toz bulutlarını görüntülemede yetersiz kaldığını'
    ],
    correct: 1,
    explanation: 'Galaksileri bir arada tutan gücün %85\'lik görünmez bir madde (karanlık madde) olması, gözlemlediğimiz ışıklı evrenin asıl gerçekliğin çok küçük bir parçası olduğunu kanıtlar.'
  },
  {
    title: 'Asch Uyma (Konformite) Deneyi',
    passage: '1951\'de Solomon Asch, insanların toplumsal baskı altında kendi doğrularından ne kadar vazgeçebileceğini ölçen o meşhur deneyi yaptı. Denek, laboratuvara girdiğinde içeride diğer "katılımcılar" (aslında Asch\'in asistanları) vardı. Ekranda çok net bir şekilde biri kısa, biri uzun iki çizgi gösteriliyor ve "Hangisi daha uzun?" diye soruluyordu. Asistanların hepsi bilerek yanlış cevap verip odayı büyük bir kendinden eminlikle doldurunca, sırası gelen deneklerin %75\'i kendi gözleriyle gördükleri gerçeği inkâr ederek gruba uydu ve "kısa olan uzun" dedi. Asch deneyi, hakikatin zayıf bir fidan olduğunu; kalabalıkların ikna edici cehaleti (sürü psikolojisi) karşısında bireyin kendi gerçekliğini bile nasıl kolayca eğip bükebildiğini acımasızca yüzümüze çarpar.',
    questionStem: 'Asch Uyma Deneyi, birey ve toplum ilişkisi hakkında hangi psikolojik gerçeği ispatlamıştır?',
    options: [
      'İnsanların uzunluk algısının laboratuvar stresinde yanılgıya açık olduğunu',
      'Bireyin, dışlanma korkusu veya gruba ait olma güdüsüyle, kendi gözüyle gördüğü mutlak doğruları bile inkâr edebileceğini (sürü psikolojisini)',
      'Lider vasıflı kişilerin deney ortamlarında daha doğru kararlar verdiğini',
      'Fiziksel farklılıkların (çizgi boylarının) insanlar tarafından genellikle önemsenmediğini'
    ],
    correct: 1,
    explanation: 'Deneklerin kısa olanı "uzun" diyen gruba uyup kendi gözüyle gördüğünü inkar etmesi, dışlanma korkusuyla hakikatten vazgeçme (sürü psikolojisi) eğilimini kanıtlar.'
  },
  {
    title: 'Hasta H.M. ve Şimdiki Zaman Hapishanesi',
    passage: 'Tıp tarihinin en ünlü vakalarından biri olan Henry Molaison (Hasta H.M.), şiddetli epilepsi nöbetlerini durdurmak için 1953 yılında beynindeki hipokampüs bölgesinin alındığı bir ameliyat geçirdi. Nöbetleri durmuştu ama korkunç bir bedel ödedi: Artık yeni hiçbir anı oluşturamıyordu. Onunla tanıştıktan beş dakika sonra odadan çıkıp geri dönseniz, sizi hayatında ilk defa görüyormuş gibi selamlıyordu. Onlarca yıl yaşadı ama zihni hep 1953 yılında donup kaldı. H.M.\'nin trajedisi, bilincin ve "benlik" hissinin aslında sadece bir anılar toplamı olduğunu gösterir. Hafızamız yoksa bir geçmişimiz de yoktur; ve geçmişi olmayanın, inşa edeceği bir geleceği veya bir kişiliği de olamaz.',
    questionStem: 'Hasta H.M.\'nin durumu üzerinden hafıza ve insan doğası hakkında ulaşılan asıl sonuç nedir?',
    options: [
      'Epilepsi hastalığının beynin tüm motor becerilerini yok eden ölümcül bir rahatsızlık olduğu',
      'İnsanın yeni bilgiler öğrenmese bile geçmiş tecrübeleriyle geleceği kusursuzca kurgulayabileceği',
      'Kimliğimizi, benliğimizi ve zaman algımızı oluşturan asıl unsurun, sürekli yeni anılar oluşturabilme yeteneğimiz (hafızamız) olduğu',
      'Beyin ameliyatlarının psikolojik hastalıkların tedavisinde kesin çözüm sağlamadığı'
    ],
    correct: 2,
    explanation: 'H.M.\'nin yeni anı oluşturamaması yüzünden hep 1953\'te takılı kalması, benliğin ve kimliğin aslında "anılar toplamı (hafıza)" olduğunu ve hafıza olmadan kişiliğin olamayacağını gösterir.'
  },
  {
    title: 'Fermi Paradoksu: Neredeler?',
    passage: '1950\'lerde fizikçi Enrico Fermi, evrenin devasa boyutlarını ve yaşını hesaplarken çok basit ama ürpertici bir soru sordu: "Eğer evrende milyarlarca Dünya benzeri gezegen varsa ve bu gezegenlerin birçoğu bizden milyonlarca yıl daha yaşlıysa, çoktan bütün galaksiyi sarmış bir uzaylı medeniyeti görmemiz gerekmez miydi? Peki ama herkes nerede?" Fermi Paradoksu olarak bilinen bu büyük çelişki, bilim dünyasını iki korkunç ihtimalle baş başa bırakır: Ya uçsuz bucaksız uzay okyanusunda milyarlarca galaksi içinde tamamen yapayalnızız; ya da zeki medeniyetler evrensel bir "Büyük Filtre"ye takılıp, yıldızlararası aşamaya (belki de nükleer silahlarla kendi kendilerini yok ettikleri için) geçemeden yok oluyorlar.',
    questionStem: 'Fermi Paradoksu\'nun temel çıkış noktası ve yarattığı felsefi çelişki aşağıdakilerden hangisidir?',
    options: [
      'Uzaylıların dünyayı ziyaret edip aramızda gizlice yaşadıklarına dair spekülasyonların bilimsel olmaması',
      'Evrenin istatistiksel devasa büyüklüğüne ve yaşına rağmen, evrende zeki yaşamın (uzaylıların) varlığına dair en ufak bir iz bile bulunamaması',
      'Güneş sisteminin dışına çıkmanın insanlık için fiziksel olarak hiçbir zaman mümkün olmayacağı teorisi',
      'Uzay araştırmalarına harcanan bütçenin dünyadaki yoksulluğu bitirmek yerine israf edilmesi'
    ],
    correct: 1,
    explanation: 'Milyarlarca Dünya benzeri gezegen varken (istatistiksel büyüklük) hiç kimsenin (uzaylıların) ortada görünmemesi, Fermi Paradoksu\'nun temel çelişkisidir.'
  },
  {
    title: 'Plasebo Etkisi: İnancın Kimyası',
    passage: 'İkinci Dünya Savaşı sırasında cephede morfin kalmadığında, anestezi uzmanı Henry Beecher yaralı askerlere morfin yerine sadece tuzlu su enjekte etmiş ama onlara bunun güçlü bir ağrı kesici olduğunu söylemişti. Mucizevi bir şekilde, tuzlu su yiyen askerlerin ağrıları şok edici bir oranda azaldı ve şoka girmeleri engellendi. "Plasebo Etkisi" denen bu fenomen, iyileşeceğine inanan bir zihnin, bedenin kendi eczanesini (endorfin) tetikleyerek fiziksel acıyı yenebildiğini kanıtlar. İlaç sadece bir ulaçtır; asıl şifacı, içtiği ilacın kendisini iyileştireceğine sarsılmaz bir inançla bağlanan o karanlık ve güçlü insan zihnidir.',
    questionStem: 'Plasebo Etkisi\'nin mekanizması hakkında parçada vurgulanan asıl düşünce nedir?',
    options: [
      'Tuzlu suyun yaralar üzerinde enfeksiyonu önleyici güçlü bir antiseptik etkisi olduğu',
      'Savaş koşullarındaki stresin, askerlerin sinir sistemlerini uyuşturarak acıyı hissetmemelerini sağladığı',
      'Bir maddenin iyileştirici gücüne duyulan sarsılmaz inancın, bedenin kendi kimyasını değiştirerek fiziksel iyileşme (ağrı kesici etki) yaratabileceği',
      'Modern tıpta ilaç kullanımının tamamen gereksiz ve zararlı bir yöntem olduğu'
    ],
    correct: 2,
    explanation: 'İçi boş tuzlu suyun, sadece "inanç" sayesinde endorfin tetiklemesi ve ağrıyı kesmesi, inancın bedenin kimyasını değiştiren asıl şifacı olduğunu kanıtlar.'
  },
  {
    title: 'Miller-Urey Deneyi: Yaşamın Çorbası',
    passage: '1952 yılında Stanley Miller ve Harold Urey, yaşamın Dünya\'da nasıl başladığını anlamak için bir deney tüpünün içine su (okyanuslar), metan, amonyak ve hidrojen (ilkel atmosfer) koydular. Ardından bu karışıma antik dünyadaki yıldırımları taklit eden elektrik kıvılcımları verdiler. Birkaç gün sonra o cansız ve zehirli çorbanın içinde, yaşamın temel yapı taşları olan "aminoasitler"in kendiliğinden oluştuğu görüldü. Bu deney, canlının ortaya çıkması için doğaüstü ve mistik bir dokunuşa değil; sadece doğru kimyasallara, biraz suya ve elektriksel bir kaosa (kıvılcıma) ihtiyaç duyulduğunu, yani hayatın kökeninin organik bir kimya problemi olduğunu kanıtlamıştır.',
    questionStem: 'Miller-Urey deneyinin bilim dünyasına kazandırdığı en önemli bakış açısı nedir?',
    options: [
      'Dünya dışı gezegenlerdeki yaşamın oksijen yerine metan gazına dayalı olarak gelişebileceği',
      'Elektrik enerjisinin insan bedeni üzerindeki genetik mutasyonları tetikleyebileceği',
      'Yaşamın kökeninin mistik veya doğaüstü bir süreç değil, cansız maddelerin uygun ortamda tepkimeye girdiği tamamen kimyasal ve doğal bir süreç olduğu',
      'İlkel dönem atmosferinin bugünkünden çok daha fazla oksijen barındırdığı'
    ],
    correct: 2,
    explanation: 'Cansız kimyasallara elektrik verilmesiyle aminoasit (yaşam taşı) oluşması, hayatın doğaüstü/mistik değil kimyasal ve organik bir süreç olduğunu kanıtlar.'
  },
  {
    title: 'Ayna Nöronlar ve Empati',
    passage: 'İtalyan nörolog Giacomo Rizzolatti, maymunların beynini incelerken beklenmedik bir şey buldu. Bir maymun bir fıstığı eline aldığında yanan beyin hücreleri, o maymun fıstığı almayıp sadece fıstığı alan başka birini "izlediğinde" de aynı şekilde yanıyordu. Araştırmalar insan beyninde de bu "ayna nöronların" var olduğunu gösterdi. Karşımızdaki biri acı çekip ağladığında, bizim de kalbimizin sızlaması şairane bir abartı değil; beynimizin o acıyı kelimenin tam anlamıyla kendi içinde simüle etmesidir (aynalamasıdır). Ayna nöronlar, empatinin ve ahlakın sonradan öğrenilen felsefi bir tercih değil; evrimin bize bahşettiği nörolojik ve biyolojik bir zorunluluk olduğunu fısıldar.',
    questionStem: 'Ayna nöronların keşfinin, empati ve ahlak kavramlarına getirdiği yeni boyut aşağıdakilerden hangisidir?',
    options: [
      'Empatinin sadece kendi türümüzden olan canlılara karşı geliştirilebileceği',
      'Ahlakın ve empatinin sadece dini ve felsefi eğitimle kazanılan soyut (kültürel) kavramlar değil, insan beyninin donanımında var olan biyolojik (nörolojik) bir refleks olduğu',
      'Maymunların zekâ seviyesinin insan zekâsına çok daha yakın olduğunun ispatlanması',
      'Acı çeken insanları izlemenin, izleyen kişinin sağlığını kalıcı olarak bozduğu'
    ],
    correct: 1,
    explanation: 'Başkası acı çekerken kendi beynimizin de aynı şekilde yanması, empatinin sadece felsefi bir tercih değil, doğuştan gelen nörolojik ve biyolojik bir zorunluluk olduğunu gösterir.'
  },
  {
    title: 'Higgs Bozonu: Tanrı Parçacığı',
    passage: 'Evrendeki tüm parçacıklar, Büyük Patlama\'dan sonra kütlesiz birer ışık hızı mermisiydi. Peki neden bazıları kütle kazanıp yıldızları, gezegenleri ve bizi oluştururken, ışık parçacıkları kütlesiz kaldı? Fizikçi Peter Higgs, evreni kaplayan görünmez bir pekmez tarlası (Higgs Alanı) olduğunu öne sürdü. Bu alanla etkileşime giren (sürtünen) parçacıklar yavaşlayıp "kütle" kazanırken, etkileşime girmeyenler (fotonlar) hızla akıp geçiyordu. Kütleyi var eden bu "Higgs Bozonu", 2012 yılında CERN\'deki devasa çarpıştırıcıda kanıtlandı. "Tanrı Parçacığı" da denilen bu buluş, fiziksel gerçekliğimizin asıl mimarının, etrafımızı saran ama gözle göremediğimiz bir etkileşim alanı olduğunu gösterdi.',
    questionStem: 'Higgs Bozonu\'nun fizikte "Tanrı Parçacığı" olarak anılmasının ve evrenin varoluşundaki asıl önemi nedir?',
    options: [
      'Güneşin yaydığı radyasyonun gezegenlere ulaşmasını engelleyen bir koruma kalkanı olması',
      'Işık hızının aşılmasının teorik olarak mümkün olduğunu kanıtlayan ilk matematiksel formül olması',
      'Evrendeki atom altı parçacıklara "kütle" kazandırarak onların maddeye, gezegenlere ve yaşama dönüşmesini sağlayan o temel etkileşimi kurması',
      'Dünya dışı yaşam formlarının iletişimde kullandığı görünmez bir sinyal dalgası olması'
    ],
    correct: 2,
    explanation: 'Higgs Alanı\'na sürtünen parçacıkların kütle kazanarak gezegenleri ve bizi (maddeyi) oluşturması, bu parçacığın maddeye kütle kazandıran temel yapıtaşı olduğunu gösterir.'
  },
  {
    title: 'Karadelikler ve Olay Ufku',
    passage: 'Ömrünü tüketen devasa yıldızlar kendi içine çöktüğünde, evrenin en doymak bilmez canavarlarına, yani Karadeliklere dönüşürler. Bu karanlık çukurların yerçekimi o kadar şiddetlidir ki, evrendeki en hızlı şey olan ışık bile onlardan kaçamaz. Karadeliğin sınırına "Olay Ufku" (Event Horizon) denir. Eğer bu ufuk çizgisini geçerseniz, dışarıdaki evren için artık yoksunuzdur. Sınırı geçtiğiniz an, devasa kütleçekimi yüzünden zaman sizin için o kadar yavaşlar ki, teorik olarak evrenin sonunu bir sinema filmi gibi ileri sarılmış halde izleyebilirsiniz. Karadelikler, fizik kurallarının çöktüğü, uzay ve zamanın anlamını yitirdiği o korkunç hiçliğin krallığıdır.',
    questionStem: 'Parçada "Olay Ufku" (Event Horizon) ile ilgili olarak vurgulanan en çarpıcı fiziksel özellik nedir?',
    options: [
      'Karadeliklerin etrafında dönen yeni yıldızların doğduğu parlak ve sıcak bir kuluçka merkezi olması',
      'Işığın bile kaçamayacağı, geçildiği anda uzay ve zamanın klasik fizik yasalarını tamamen büküp anlamsızlaştıran (zamanı yavaşlatan) o geri dönüşü olmayan kesin sınır olması',
      'Karadeliğin içindeki enerjiyi dışarı püskürterek yeni galaksiler yaratan bir çıkış kapısı olması',
      'İçeri düşen her maddenin kütlesini kaybederek anında enerjiye dönüşmesi'
    ],
    correct: 1,
    explanation: 'Olay ufkunun geçildiği an ışığın bile kaçamadığı, uzay ve zamanın büküldüğü (zamanın durma noktasına geldiği) o geri dönüşü olmayan son sınır olduğu metinde açıkça belirtilmiştir.'
  },
  {
    title: 'Tuskegee Frengi Deneyi',
    passage: '1932 yılında ABD Halk Sağlığı Servisi, siyahilere yönelik ölümcül frengi (sifiliz) hastalığının gelişimini gözlemlemek için "Tuskegee Deneyi"ni başlattı. Hastalara sadece "kötü kan" tedavisi gördükleri söylendi. 1940\'larda hastalığın kesin tedavisi olan penisilin bulunmasına rağmen, doktorlar bu ilacı siyahi hastalardan kasten sakladılar. Sırf hastalığın insan bedenini nasıl yavaş yavaş çürüttüğünü izlemek uğruna yüzlerce insanın kör olmasına, delirmesine ve ölmesine seyirci kalındı. 1972\'de basına sızana kadar devam eden bu olay, bilim kisvesi altında ırkçılığın ve ahlaki (etik) çöküşün nasıl kurumsallaşabileceğinin en karanlık tıp skandalıdır.',
    questionStem: 'Tuskegee Deneyi\'nin tıp tarihinde kara bir leke (skandal) olarak anılmasının temel nedeni nedir?',
    options: [
      'Deneyin yapıldığı hastanenin hijyen kurallarına uymaması nedeniyle enfeksiyonların artması',
      'Penisilinin frengi hastalığını iyileştiremediğinin yanlış bir şekilde kanıtlanmış olması',
      'Kesin tedavi bulunmasına rağmen, sadece hastalığın seyrini (insan bedeni üzerindeki tahribatını) bilimsel olarak izleyebilmek adına ilacın siyahi hastalardan kasten saklanıp ölüme terk edilmeleri (etik ihlal)',
      'Hastaların zorla laboratuvar ortamında tutulup aileleriyle görüştürülmemesi'
    ],
    correct: 2,
    explanation: 'Tedavi (penisilin) bulunmasına rağmen sırf hastalığın çürütme evresini izlemek için ilacın hastalardan saklanıp ölümlerine seyirci kalınması (bilimsel deney uğruna etik ihlal) skandalın temelidir.'
  }
];

// 7. MAKİNE (Bilim)
export const bilimParagrafSorulari7: BilimParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES_7.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES_7[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-bilim7-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
const PARAGRAPH_THEMES_8 = [
  {
    title: 'Van Gogh ve Yıldızlı Gece',
    passage: 'Vincent van Gogh, sanat tarihinin en meşhur eseri olan "Yıldızlı Gece"yi boyadığında, lüks bir atölyede değil, kendi isteğiyle yattığı bir akıl hastanesinin demir parmaklıklı penceresinin ardındaydı. Ağır halüsinasyonlar ve derin bir yalnızlık çekiyordu. O tablodaki gökyüzü sakin ve huzurlu değildir; girdaplar halinde dönen, patlayan ve izleyeni içine çeken şiddetli bir kozmik kaostur. Van Gogh, kendi zihnindeki o karanlık ve korkutucu fırtınayı fırça darbeleriyle tuvale kusarak onu ehlileştirmişti. Sanat, kusursuz aklın bir ürünü değil; bazen parçalanmış bir ruhun hayatta kalmak için attığı son ve en görkemli çığlıktır.',
    questionStem: 'Yazar, Van Gogh\'un "Yıldızlı Gece" eseri üzerinden sanatın doğasına dair nasıl bir çıkarım yapmaktadır?',
    options: [
      'Sanatın sadece maddi refah ve huzur (konfor alanı) içindeyken üretilebileceği',
      'Ruhsal hastalıkların sanatsal yeteneği tamamen yok ettiği ve eserleri anlaşılmaz kıldığı',
      'Sanatın, kusursuz bir aklın değil, parçalanmış bir ruhun acılarını (zihinsel kaosunu) sağaltma ve hayatta kalma çabası olduğu',
      'Gerçeküstü doğa manzaralarının sanatseverler tarafından her zaman daha çok ilgi gördüğü'
    ],
    correct: 2,
    explanation: 'Van Gogh\'un zihnindeki karanlık fırtınayı tuvale kusarak ehlileştirmesi, sanatın kusursuz bir aklın değil, parçalanmış bir ruhun hayatta kalma çığlığı olduğunu gösterir.'
  },
  {
    title: 'Beethoven\'ın Sessiz Zirvesi',
    passage: 'Müzik tarihinin en büyük dehalarından Ludwig van Beethoven, 9. Senfoni\'yi bestelediğinde ve eserin prömiyerini bizzat yönettiğinde artık tamamen sağırdı. Orkestra muazzam bir coşkuyla eseri bitirdiğinde, Beethoven arkası dönük olduğu için salonda kopan alkış tufanını ne duydu ne de gördü. Bir müzisyen onu nazikçe omuzlarından tutup kalabalığa döndürene kadar, yarattığı mucizenin yankısından habersizdi. Beethoven\'ın bu durumu, yaratıcılığın ve dehanın fiziksel duyulardan bağımsız, tamamen zihnin ve ruhun içinde yankılanan, dış dünyayı aşan ilahi bir irade olduğunu kanıtlar.',
    questionStem: 'Beethoven\'ın 9. Senfoni\'yi sağırken bestelemesi ve yönetmesi, yaratıcılık bağlamında neyin sembolüdür?',
    options: [
      'Müzikteki başarının tamamen matematiksel notasyonlara bağlı olduğunun',
      'Yaratıcılığın ve dehanın fiziksel engelleri (duyuları) aşan, tamamen zihinsel ve içsel (ruhsal) bir irade olduğunun',
      'Sanatçıların eserlerini üretirken seyircinin tepkisini asla umursamadığının',
      'Klasik müziğin sadece işitme engelliler tarafından tam anlamıyla anlaşılabileceğinin'
    ],
    correct: 1,
    explanation: 'Tamamen sağır olmasına rağmen müziğin zirvesine ulaşması, yaratıcılığın fiziksel duyulara değil, içsel (ruhsal ve zihinsel) iradeye dayandığını gösterir.'
  },
  {
    title: 'Theseus\'un Gemisi',
    passage: 'Antik Yunan filozofu Plutarkhos efsanevi bir düşünce deneyi sunar: Kahraman Theseus\'un gemisi, yıllar içinde çürüyen her bir tahtası sökülüp yenisiyle değiştirilerek limanda korunur. Sonunda geminin orijinal hiçbir parçası kalmaz. Soru şudur: Bu gemi hala Theseus\'un gemisi midir? Eğer öyleyse, sökülen eski tahtalarla ikinci bir gemi inşa etseydik, hangisi gerçek Theseus\'un gemisi olurdu? Bu paradoks, kimlik kavramını sarsar. Bizler de hücrelerimiz yıllar içinde tamamen yenilendiğinde, anılarımız ve inançlarımız değiştiğinde, on yıl önceki "biz" ile hala aynı kişi miyizdir? Kimlik, parçaların kendisi mi yoksa o parçaları bir arada tutan görünmez bütünlük müdür?',
    questionStem: 'Theseus\'un Gemisi paradoksunun insan doğasına (kimliğe) uyarlanmış halindeki asıl felsefi sorgulama nedir?',
    options: [
      'İnsan hücrelerinin kendini yenileme hızının yaşlanmayı nasıl etkilediği',
      'Zaman içinde fiziksel ve zihinsel olarak tamamen değişen bir insanın, kendi "öz kimliğini" (benliğini) nasıl muhafaza ettiği veya hala aynı kişi olup olmadığı',
      'Anıların silinmesinin insanın kişiliğini tamamen yok edip etmediği',
      'Geçmişteki hatalarından ders çıkaran insanların daha erdemli bir karaktere büründüğü'
    ],
    correct: 1,
    explanation: 'Geminin tüm parçaları değiştiğinde aynı gemi olup olmadığı sorusu insana uyarlandığında; hücreleri ve zihni değişen insanın hala aynı "benlik" olup olmadığı sorgulanır.'
  },
  {
    title: 'Dostoyevski\'nin İdam Mangası',
    passage: '1849 yılında 28 yaşındaki yazar Fyodor Dostoyevski, siyasi suçlamalarla idama mahkûm edildi. Gözleri bağlandı, idam mangasının karşısına dizildi ve tüfeklerin horoz seslerini duydu. Tam tetiğe basılacakken, Çar\'ın affı okundu ve cezası Sibirya\'da küreğe çevrildi. Ölümün o soğuk nefesini ensesinde hisseden Dostoyevski için zaman bükülmüştü. Hayatta kaldığına inanamıyordu. Bu sahte idam, onun ruhunu parçalayıp yeniden inşa etti. Sibirya dönüşü yazdığı "Suç ve Ceza", "Karamazov Kardeşler" gibi şaheserler, ölümle o birkaç saniyelik yüzleşmenin ürünüdür. Hayatın gerçek anlamı ve değeri, ancak onun elinizden zorla alındığını hissettiğiniz o kör edici uçurumun kenarında kavranabilir.',
    questionStem: 'İdamdan son anda kurtulma olayının Dostoyevski\'nin yaşamı ve sanatı üzerindeki asıl etkisi nedir?',
    options: [
      'Siyasi olaylardan tamamen uzaklaşarak sadece romantik eserler yazmaya başlaması',
      'Ölümle burun buruna gelmesinin (yüzleşmesinin) ruhunda yarattığı sarsıntının, hayatın anlamını kavramasını sağlayarak onu edebi bir dehaya dönüştürmesi',
      'Yaşadığı travma yüzünden uzun yıllar boyunca hiçbir edebi eser üretememesi',
      'Hapishane koşullarını protesto etmek için eserlerinde devlet yöneticilerini sertçe eleştirmesi'
    ],
    correct: 1,
    explanation: 'Ölümün kıyısından dönmesinin ruhunu yeniden inşa edip onu o şaheserleri yazmaya itmesi, ölümle yüzleşmenin hayata anlam kattığını ve dehasını ateşlediğini gösterir.'
  },
  {
    title: 'Kintsugi: Kusurların Güzelliği',
    passage: 'Japonların "Kintsugi" adı verilen kadim bir tamir sanatı vardır. Bir çay kâsesi veya vazo kırıldığında, onu çöpe atmaz veya kırık izlerini saklayacak renksiz bir yapıştırıcıyla birleştirmezler. Aksine, kırılan parçaları altın tozu karıştırılmış özel bir reçineyle birleştirirler. Vazo eskisinden çok daha değerli, altın damarlarıyla parlayan eşsiz bir esere dönüşür. Bu sanatın altındaki felsefe muazzamdır: Kırılmak (yara almak) utanılacak veya saklanacak bir kusur değildir; aksine o nesnenin (veya insanın) yaşanmışlığının, hayatta kalma direncinin bir kanıtıdır. İnsan da tıpkı o vazo gibi, gizlediği kusurları ve iyileşen yaralarıyla çok daha değerlidir.',
    questionStem: 'Kintsugi felsefesinin "insan hayatına" uyarlanmış temel mesajı aşağıdakilerden hangisidir?',
    options: [
      'Geçmişte yaşanan kötü olayların tamamen unutulup zihinden silinmesi gerektiği',
      'İnsanların hatalarını ve zayıflıklarını diğer insanlardan gizlemesinin en güvenli yol olduğu',
      'Fiziksel güzelliğin ruhsal güzellikten her zaman daha çok itibar gördüğü',
      'Yaşanan acıların, travmaların ve kusurların (kırıkların) insanı değersizleştirmediği, aksine bu onarılmış yaraların insanı daha güçlü, olgun ve değerli kıldığı'
    ],
    correct: 3,
    explanation: 'Kırıkların altınla birleştirilerek değer kazanması; insanın da yara almasının utanılacak bir şey olmadığını, iyileşen yaraların insanı daha değerli ve eşsiz kıldığını sembolize eder.'
  },
  {
    title: 'Turing Testi: Makinedeki Hayalet',
    passage: '1950 yılında Alan Turing, "Makineler düşünebilir mi?" sorusunu felsefi bir tartışma olmaktan çıkarıp pratik bir deneye dönüştürdü. Turing Testi şudur: Bir insan (hakem), iki farklı odayla yazılı olarak iletişim kurar. Odaların birinde bir insan, diğerinde ise bir bilgisayar programı vardır. Eğer hakem, sorduğu karmaşık sorulara aldığı cevaplardan hangisinin insan, hangisinin makine olduğunu ayırt edemezse, makine testi geçmiş (düşünebiliyor) kabul edilir. Ancak bu test asıl korkutucu soruyu arkasında bırakır: Eğer bir makine insanı kusursuzca taklit edebiliyorsa, bizim "bilinç" ve "ruh" dediğimiz o kutsal kavramlar da sadece karmaşık birer algoritmadan mı ibarettir?',
    questionStem: 'Turing Testi\'nin arkasında yatan asıl "korkutucu (felsefi)" sorgulama parçaya göre nedir?',
    options: [
      'Bilgisayarların insanları işsiz bırakarak küresel bir ekonomik krize neden olması',
      'Makinelerin insanları kusursuzca taklit edebilmesi durumunda, "bilinç" ve "ruh" gibi insana özgü sayılan yüce kavramların da aslında biyolojik birer algoritmaya indirgenme ihtimali',
      'Yazılı iletişimin yüz yüze iletişimden daha aldatıcı ve yetersiz olduğunun kanıtlanması',
      'İnsan zekâsının makineler karşısında giderek gerilediğinin kabul edilmesi'
    ],
    correct: 1,
    explanation: 'Makinenin insanı taklit etmesi durumunda, kutsal saydığımız bilinç ve ruhun da sadece karmaşık bir algoritmadan ibaret olup olmadığı ihtimali, metindeki asıl felsefi sorgulamadır.'
  },
  {
    title: 'Ozymandias ve Çöldeki Heykel',
    passage: 'İngiliz şair Percy Bysshe Shelley, "Ozymandias" adlı ünlü şiirinde uçsuz bucaksız, ıssız bir çölün ortasında bulunmuş kırık dökük devasa bir heykelden bahseder. Heykelin kaidesinde şu kibirli sözler kazılıdır: "Benim adım Ozymandias, kralların kralı! Ey Güçlüler, eserlerime bakın ve çaresizliğe kapılın!" Oysa o yazının etrafında bakılacak hiçbir eser kalmamıştır; sadece yalnızlık, çürümüş taşlar ve sonsuz bir kum denizi vardır. Shelley bu şiirle, ne kadar kudretli olurlarsa olsunlar, kralların, diktatörlerin ve insan kibrinin zamanın (doğanın) o sessiz ve acımasız silgisi karşısında eninde sonunda bir kum tanesine dönüşeceğini tokat gibi yüzümüze çarpar.',
    questionStem: 'Shelley\'nin "Ozymandias" şiirindeki yıkık heykel ve kaidedeki yazı arasındaki tezatlık (kontrast) neyi sembolize eder?',
    options: [
      'Mimaride taş kullanımının dayanıklılık açısından yanlış bir tercih olduğunu',
      'Sanat eserlerinin devlet adamlarının isimlerini sonsuza dek yaşatabileceğini',
      'Zamanın ve doğanın yok edici gücü karşısında, dünyevi iktidarın (kibrin) ve "ölümsüzlük" iddiasının trajikomik bir hiçliğe mahkûm olduğunu',
      'Çöl ikliminin antik kalıntıları korumada diğer iklimlerden daha başarısız olduğunu'
    ],
    correct: 2,
    explanation: 'Kaidedeki "eserlerime bakın" yazısının etrafında sadece kum ve hiçlik olması; dünyevi gücün ve kibrin zaman karşısında bir hiçliğe mahkûm olduğunu (tezatlık) sembolize eder.'
  },
  {
    title: 'Genel Bakış Etkisi (Overview Effect)',
    passage: 'Uzaya giden astronotların çoğu dünyaya döndüklerinde derin bir psikolojik ve felsefi dönüşüm yaşarlar. Buna "Genel Bakış Etkisi" denir. Uzayın o zifiri karanlığında, sınır çizgilerinin, tel örgülerin ve haritaların olmadığı; sadece incecik bir atmosferle korunan o kırılgan, mavi topu gördüklerinde insanlığın tüm savaşları, milliyetçilikleri ve siyasi kavgaları onlara inanılmaz derecede aptalca gelir. Üzerinde yaşadığımız gezegen, fethedilecek parçalara ayrılmış bir savaş alanı değil; uzayın dondurucu boşluğunda hep birlikte seyahat ettiğimiz ortak bir cankurtaran sandalıdır. Uzaydan bakıldığında ayrı gayrı yoktur; sadece tek bir insanlık ailesi vardır.',
    questionStem: 'Astronotların yaşadığı "Genel Bakış Etkisi", insanlığın hangi yerleşik algısını kökünden sarsmaktadır?',
    options: [
      'Teknolojinin doğaya verdiği zararların boyutunu',
      'Dünyanın uzaydaki diğer gezegenlerden çok daha küçük olduğu gerçeğini',
      'Ülkeler, sınırlar ve milliyetçilik gibi dünyevi ayrımların (yapay bölünmelerin) yüceltilen ve savaşılan değerler olması yanılgısını',
      'Uzaylıların dünyayı dışarıdan gizlice izlediği komplo teorilerini'
    ],
    correct: 2,
    explanation: 'Uzaydan sınır çizgilerinin görünmemesi ve savaşların aptalca gelmesi, dünyadaki siyasi/milliyetçi ayrımların (yapay bölünmelerin) anlamsızlığını göstererek bu algıyı sarsar.'
  },
  {
    title: 'Mandela Etkisi',
    passage: 'Binlerce insan, Monopoly oyununun maskotunun gözlük taktığına veya Volkswagen logosunda bir çizgi olmadığına yemin edebilir; oysa bunlar hiçbir zaman öyle olmamıştır. Buna "Mandela Etkisi" denir (çünkü pek çok insan Nelson Mandela\'nın 1980\'lerde hapiste öldüğünü hatırlıyordu, oysa 2013\'te özgürken ölmüştü). Bu fenomen, insan hafızasının bir video kamera gibi gerçekleri birebir kaydetmediğini, aksine anıları sürekli yeniden yazan, dış etkenlerden etkilenen kurgusal bir hikâye anlatıcısı olduğunu kanıtlar. Çok emin olduğumuz, "kendi gözlerimle gördüm" dediğimiz gerçeklikler bile, bazen beynimizin uydurduğu ve kalabalıkların birbirine bulaştırdığı toplu bir halüsinasyondan ibarettir.',
    questionStem: 'Mandela Etkisi\'nin varlığı, "insan hafızası" ile ilgili hangi gerçeği ortaya koymaktadır?',
    options: [
      'Hafızanın yaşlandıkça tamamen silindiği ve yerine yenilerinin yazılamadığı',
      'Hafızanın objektif (tarafsız) bir kayıt cihazı olmadığı; dış etkenlerle değişebilen, kurgusal ve yanıltıcı bir yapıya sahip olduğu',
      'İnsanların sadece travmatik olayları hatırlamaya eğilimli olduğu',
      'Medyanın insanların zihnine mikroçiplerle sahte anılar yerleştirdiği'
    ],
    correct: 1,
    explanation: 'Metinde hafızanın bir video kamera olmadığı, anıları sürekli yeniden yazan kurgusal bir hikâye anlatıcısı olduğu (objektif olmadığı, yanıltıcı olduğu) vurgulanmıştır.'
  },
  {
    title: 'Marshmallow Deneyi ve İrade',
    passage: '1960\'larda Stanford Üniversitesi\'nde küçük çocuklara bir deney yapıldı: Önlerine bir adet lokum (marshmallow) kondu ve "Eğer ben odadan çıkıp gelene kadar (15 dakika) bunu yemezsen, sana ikinci bir lokum daha vereceğim" dendi. Kimi çocuklar kapı kapanır kapanmaz lokumu yuttu, kimileri ise kendilerini zor tutarak direndi ve ödülü aldı. Bilim insanları bu çocukları onlarca yıl takip ettiğinde sarsıcı bir sonuçla karşılaştılar: 15 dakika bekleyebilen (hazzı erteleyebilen) çocuklar, akademik hayatta, kariyerlerinde ve sağlıklarında diğerlerinden çok daha başarılı olmuşlardı. Zekâ veya yetenekten ziyade; anlık dürtülere gem vurabilmek, yani irade (hazzı erteleme), insan hayatındaki asıl başarının anahtarıydı.',
    questionStem: 'Marshmallow Deneyi\'nin uzun vadeli sonuçlarına göre, yaşam boyu başarının asıl belirleyicisi nedir?',
    options: [
      'Çocukluk döneminde alınan yüksek zekâ (IQ) puanları',
      'Anlık heves ve arzulara karşı koyabilme, daha büyük ödüller için sabredebilme (hazzı erteleme) iradesi',
      'Ailenin çocuğa sunduğu sosyo-ekonomik ve kültürel imkânlar',
      'Çocukların okul hayatlarında gördükleri katı disiplin eğitimi'
    ],
    correct: 1,
    explanation: '15 dakika bekleyebilenlerin hayatta çok daha başarılı olması; zekâdan ziyade anlık dürtülere gem vurabilmenin (hazzı erteleme iradesinin) başarının anahtarı olduğunu gösterir.'
  },
  {
    title: 'Pygmalion Etkisi: Kehanetin Gerçekleşmesi',
    passage: 'Yunan mitolojisinde heykeltıraş Pygmalion, fildişinden yaptığı bir kadın heykeline öylesine âşık olur ve onun gerçek olacağına öylesine inanır ki, Tanrılar bu inancı ödüllendirerek heykeli canlandırır. Psikolojide "Pygmalion Etkisi" (Kendini Gerçekleştiren Kehanet) olarak bilinen bu fenomen, okullarda deneylerle kanıtlanmıştır. Öğretmenlere, aslında tamamen sıradan olan bazı öğrencilerin "üstün zekâlı" olduğu yalanı söylendiğinde; öğretmenler yıl boyunca farkında olmadan o çocuklara daha fazla ilgi göstermiş, daha çok cesaretlendirmiştir. Yılsonunda o "sıradan" çocukların başarıları gerçekten de tavan yapmıştır. İnsanlar, etraflarındaki (özellikle güvendikleri) otorite figürlerinin onlara biçtiği beklenti kalıplarına uyacak şekilde kendi sınırlarını yeniden çizerler.',
    questionStem: 'Pygmalion Etkisi\'nin eğitim ve yönetim alanındaki asıl karşılığı (anlamı) aşağıdakilerden hangisidir?',
    options: [
      'Öğrencilere zor görevler vermenin onların özgüvenini kırarak başarısızlığa ittiği',
      'Başkalarının bizim hakkımızdaki yüksek veya düşük beklentilerinin, davranışlarımızı ve nihai performansımızı (başarımızı) doğrudan şekillendirmesi',
      'Sadece zeki çocukların özel ilgiyle desteklenmesi gerektiği',
      'Mitolojik hikâyelerin günümüz eğitim sisteminde materyal olarak kullanılmasının faydaları'
    ],
    correct: 1,
    explanation: 'Öğretmenlerin "üstün zekâlı" sanıp beklentiyi yüksek tuttukları sıradan çocukların gerçekten de başarılarının tavan yapması, beklentilerin performansı şekillendirdiğini gösterir.'
  },
  {
    title: 'Kırık Camlar Teorisi',
    passage: 'Eğer terk edilmiş bir binanın tek bir camı kırılır ve hemen tamir edilmezse, yoldan geçenler "burası sahipsiz, kimsenin umurunda değil" diye düşünür. Kısa süre sonra diğer camlar da kırılır, duvarlara yazılar yazılır ve o bina suçluların sığınağına dönüşür. Buna kriminolojide "Kırık Camlar Teorisi" denir. Toplumdaki düzensizlik, küçük tavizlerle başlar. Yere atılan tek bir çöpün temizlenmemesi, o sokağın çöplüğe dönmesinin ilk adımıdır. Kötülük veya suç, doğrudan büyük bir karanlıkla değil; küçük, tolere edilmiş (göz yumulmuş) ihmallerin yarattığı psikolojik boşluktan (sahipsizlik hissinden) beslenerek bir salgın gibi yayılır.',
    questionStem: 'Kırık Camlar Teorisi\'ne göre suçun veya toplumsal düzensizliğin yayılmasındaki asıl tetikleyici nedir?',
    options: [
      'Ekonomik krizlerin insanları mecburen hırsızlığa ve suça itmesi',
      'Polis sayısının yetersiz olması nedeniyle suçluların yakalanamaması',
      'Küçük ihlallere (kırık cam, çöp vb.) göz yumulmasının, ortamda "sahipsizlik ve otorite eksikliği" hissi yaratarak daha büyük suçlara cesaret vermesi',
      'Kötü niyetli insanların özellikle eski ve terk edilmiş binaları hedef alması'
    ],
    correct: 2,
    explanation: 'Tek bir kırık camın tamir edilmemesinin (küçük bir ihmal) insanlara "burası sahipsiz" mesajı vererek diğer suçları tetiklediği açıkça belirtilmiştir.'
  },
  {
    title: 'Amor Fati: Kaderini Sev',
    passage: 'Alman filozof Friedrich Nietzsche, hayatın acımasızlığı karşısında ezilmemek için Stoacı felsefeden beslenen "Amor Fati" (Kaderini Sev) kavramını yüceltir. Amor Fati, başımıza gelen hastalıkları, ihanetleri veya felaketleri sadece pasif bir şekilde "kabullenmek" değildir. Ondan çok daha fazlasıdır: O acıları hayatın mükemmel yapbozunun ayrılmaz, estetik ve gerekli birer parçası olarak kucaklamaktır. Ateşin içinden geçmeden çeliğin dövülemeyeceği gibi, o acılar yaşanmasaydı şu an olduğumuz kişiye dönüşemezdik. Hayatı gerçekten sevmek, sadece güneşli günleri değil, bizi yere seren o karanlık fırtınaları da coşkuyla bağrımıza basmaktır.',
    questionStem: 'Nietzsche\'nin "Amor Fati" (Kaderini Sev) felsefesi ile insanın acılara karşı takınması gereken tavır nedir?',
    options: [
      'Acı veren olayları hızla unutup zihinden silerek sürekli mutlu olmaya çalışmak',
      'Kaderin değiştirilemez olduğunu düşünüp hiçbir eylemde bulunmadan pasif bir umutsuzluğa kapılmak',
      'Yaşanan felaketleri ve acıları, kişiliği şekillendiren ve olgunlaştıran zorunlu/değerli birer parça olarak görüp coşkuyla kabullenmek',
      'Acı çekmemek için insanlardan uzaklaşarak tamamen izole (yalnız) bir yaşam sürmek'
    ],
    correct: 2,
    explanation: 'Amor Fati\'nin felaketleri pasif kabullenmek değil, onları "yapbozun gerekli bir parçası" olarak görüp bizi şu anki kişiye dönüştürdüğü için coşkuyla kucaklamak olduğu vurgulanmıştır.'
  },
  {
    title: 'Ockham\'ın Usturası',
    passage: '14. yüzyıl filozofu William of Ockham, bilim ve mantık dünyasında devrim yaratan bir prensip öne sürdü: "Varlıklar gereksiz yere çoğaltılmamalıdır." Bugün "Ockham\'ın Usturası" olarak bilinen bu kural, bir olayı açıklayan birden fazla teori varsa, en az varsayıma dayanan (en basit) açıklamanın genellikle doğru olduğunu söyler. Eğer gece bahçenizden tıkırtılar geliyorsa, bunun uzaylıların iniş yapması veya gizli ajanların operasyon yapması ihtimali de vardır; ancak bir kedinin çöp kutusunu karıştırıyor olması çok daha az varsayım gerektirdiği için en olası gerçektir. Bu ustura, insan aklının komplo teorilerine ve karmaşık fantezilere olan zaafını kesip atan keskin bir mantık kılıcıdır.',
    questionStem: 'Ockham\'ın Usturası prensibinin temel mantığı aşağıdakilerden hangisidir?',
    options: [
      'Bir sorunun çözümü için her zaman en yeni ve en karmaşık teknolojilerin kullanılması gerektiği',
      'Olayları açıklarken, karmaşık senaryolar (komplolar) yerine, en az varsayıma dayanan en basit ve sade açıklamanın tercih edilmesi',
      'Geçmişte yaşanan olayların günümüz mantığıyla açıklanamayacağı',
      'Filozofların her zaman bilim insanlarından daha doğru tahminler yaptığı'
    ],
    correct: 1,
    explanation: 'Prensibin, bir olayı açıklayan teoriler arasında "en az varsayıma dayanan (en basit) açıklamanın genellikle doğru olduğu" kuralı olduğu belirtilmiştir.'
  },
  {
    title: 'Ortak Malların Trajedisi',
    passage: 'Ekonomist Garrett Hardin, "Ortak Malların Trajedisi" kavramıyla bireysel bencilliğin toplumsal yıkımını anlatır. Herkese açık bir mera düşünün. Her çoban, kendi kârını artırmak için o meraya bir koyun daha getirir. Bir koyunun eklenmesinin çobana faydası %100\'dür, ancak otların tükenmesinin zararı tüm köye paylaştırılır. Her çoban bu mantıkla bencilce davranıp koyun eklemeye devam ettiğinde, mera tamamen kurur ve köydeki tüm koyunlar ölür. Bireysel düzeyde son derece rasyonel ve mantıklı görünen kısa vadeli kâr hırsı, toplumsal ve ekolojik düzeyde hepimizin bindiği dalı kesmesiyle sonuçlanır. İklim krizinden okyanusların kirlenmesine kadar tüm felaketlerimizin altında bu trajedi yatar.',
    questionStem: 'Ortak Malların Trajedisi kavramının merkezinde yatan asıl çatışma nedir?',
    options: [
      'Köylülerin tarım yöntemleri konusunda yeterince bilgi sahibi olmaması',
      'Devletin ortak arazilere yüksek vergiler koyarak üretimi engellemesi',
      'Bireyin kısa vadeli kendi çıkarını maksimize etme (bencillik) güdüsünün, uzun vadede ortak kaynakları tüketerek tüm toplumu yıkıma sürüklemesi',
      'Hayvancılığın tarımsal faaliyetlere göre çok daha maliyetli olması'
    ],
    correct: 2,
    explanation: 'Her çobanın kendi çıkarı (bencillik) için meraya koyun eklemesinin sonunda merayı kurutması, bireysel çıkarın ortak kaynağı tüketerek herkesi yıkıma götürmesini (çatışmayı) anlatır.'
  },
  {
    title: 'Tekinsiz Vadi (Uncanny Valley)',
    passage: 'Robotik alanında yapılan araştırmalar ilginç bir psikolojik reaksiyonu ortaya koydu. Bir robot veya animasyon karakteri insana hiç benzemediğinde (örn: WALL-E) ona sempati duyarız. İnsana benzemeye başladıkça empatimiz artar. Ancak bu benzerlik %90\'lara ulaştığında; yani insan gibi görünen ama gözlerinde ruh olmayan, hafif sarsak hareket eden bir android gördüğümüzde aniden derin bir iğrenme ve korku hissederiz. Bu düşüş noktasına "Tekinsiz Vadi" denir. Evrimsel psikologlara göre bu ürperti, beynimizin o robotu "hasta, zombi veya ceset" olarak algılayıp hastalıktan korunmak için verdiği ilkel bir alarm refleksidir. Kusursuz olmayan taklit, zihnimizde yaşamı değil, ölümü çağrıştırır.',
    questionStem: 'İnsanların robotlara veya animasyonlara karşı hissettiği "Tekinsiz Vadi" ürpertisinin evrimsel nedeni parçada nasıl açıklanmıştır?',
    options: [
      'İnsanoğlunun makinelerin dünyayı ele geçireceğine dair fütüristik korkuları',
      'Robotların tamamen insana benzemeye (kusursuza) çok yaklaştığı anlardaki o küçük mekanik hataların, beynimizde "hastalık, zombi veya ceset" algısı yaratarak evrimsel bir kaçış (korunma) refleksi tetiklemesi',
      'Robotların yapımında kullanılan soğuk metallerin insan tenine benzememesi',
      'Sosyolojik olarak insanların sadece kendi ırkından olanlara empati duyabilmesi'
    ],
    correct: 1,
    explanation: 'İnsana çok benzeyip tam benzeyemeyen (ruhsuz/sarsak) androidlerin beynimizde "hasta, ceset" algısı yaratıp ilkel bir alarm/korunma refleksi tetiklediği belirtilmiştir.'
  },
  {
    title: 'Overton Penceresi',
    passage: 'Siyasette ve medyada "Overton Penceresi" adı verilen bir kavram vardır. Bu pencere, toplumun o dönemde kabul edip tartışabileceği "normal ve makul" fikirlerin çerçevesidir. Ancak bu pencere sabit değildir. Marjinal, radikal veya uçuk bir fikri doğrudan kabul ettiremezsiniz. Bunun yerine, medya o konuyu sürekli tartışmaya açar, önce "düşünülemez" olan fikir "radikal" olur, sonra "kabul edilebilir" aşamasına gelir ve en sonunda "popüler" bir devlet politikasına dönüşür. Pencere sinsice kaydırılmıştır. Toplumlar, dün duyduklarında dehşete düşecekleri uygulamaları, yavaş yavaş ısıtılan sudaki bir kurbağa gibi bugün kendi istekleriyle alkışlayarak kabul edebilirler.',
    questionStem: 'Overton Penceresi kavramı, toplumların manipülasyonu ile ilgili hangi gerçeği ifade eder?',
    options: [
      'Toplumların her zaman muhafazakâr kalıp yeniliklere direndiğini',
      'Kabul edilemez (radikal) görünen fikirlerin, medya ve siyaset aracılığıyla sürekli gündemde tutularak aşamalı bir şekilde normalleştirilebileceğini (pencerenin kaydırılması)',
      'Medyanın toplumu yönlendirme gücünün internetin icadıyla birlikte tamamen bittiğini',
      'Halkın siyasilerin fikirlerini her koşulda sorgulamadan reddettiğini'
    ],
    correct: 1,
    explanation: 'Düşünülemez bir fikrin yavaş yavaş ısıtılarak önce radikal, sonra kabul edilebilir ve popüler hale gelmesi (pencerenin kaydırılması), aşamalı normalleştirmeyi ifade eder.'
  },
  {
    title: 'Logoterapi ve Anlam Arayışı',
    passage: 'Psikiyatrist Viktor Frankl, İkinci Dünya Savaşı\'nda Auschwitz toplama kampına gönderildiğinde, etrafındaki insanların gaz odalarından önce umutsuzluktan öldüğüne şahit oldu. Hayatta kalmayı başaranlar, fiziksel olarak en güçlü olanlar değil; kampın dışında kavuşmak istedikleri bir sevdalısı, yazmak istedikleri bir kitabı veya yaşamaya devam etmek için bir "anlamı" olanlardı. Frankl buradan yola çıkarak "Logoterapi"yi kurdu. Ona göre insanın temel güdüsü Freud\'un dediği gibi haz veya Adler\'in dediği gibi güç değil, "anlam" arayışıdır. Nietzsche\'nin sözüyle bunu özetler: "Yaşamak için bir nedeni (neden) olan kişi, her türlü nasıla katlanabilir."',
    questionStem: 'Viktor Frankl\'ın toplama kampı gözlemlerine dayanarak kurduğu "Logoterapi"nin merkezindeki temel felsefe nedir?',
    options: [
      'İnsan psikolojisinde cinselliğin ve bilinçaltı dürtülerin her şeyden üstün olduğu',
      'Fiziksel gücün ve kas kütlesinin hayatta kalmanın tek garantisi olduğu',
      'İnsanı hayatta tutan ve en ağır acılara katlanmasını sağlayan asıl gücün "haz" veya "güç" değil, hayata tutunacak bireysel bir "anlam" bulmak olduğu',
      'Büyük travmalar yaşayan insanların bir daha asla normal bir psikolojiye dönemeyeceği'
    ],
    correct: 2,
    explanation: 'Frankl\'a göre temel güdünün haz veya güç değil "anlam arayışı" olduğu; bir anlamı (nedeni) olanın her şeye katlanabileceği belirtilmiştir.'
  },
  {
    title: 'Zeigarnik Etkisi',
    passage: '1920\'lerde psikolog Bluma Zeigarnik, bir restoranda otururken garsonların onca kalabalık siparişi hiçbir yere yazmadan nasıl eksiksiz hatırladıklarını inceledi. Gözlemi şuydu: Garsonlar, siparişleri sadece yemekler masaya gidene (işlem tamamlanana) kadar hatırlıyor, hesap ödendikten saniyeler sonra o masanın ne yediğini tamamen unutuyorlardı. Bu duruma "Zeigarnik Etkisi" denir. İnsan beyni, bitirilmemiş, yarım kalmış veya kesintiye uğramış işleri sürekli canlı tutarak zihni meşgul ederken; tamamlanan işleri hafızadan hızla siler. Ayrılıkların acısının veya yarım kalan aşkların yıllarca unutulmamasının sebebi "çok sevmek" değil, beynimizin o yarım kalmış dosyayı bir türlü kapatamamasıdır.',
    questionStem: 'Zeigarnik Etkisi\'nin tanımına göre, zihnimizin anıları saklama (hatırlama) biçimi hangi kritere bağlıdır?',
    options: [
      'Olayların ne kadar travmatik veya sevindirici (duygusal şiddetli) olduğuna',
      'Deneyimlenen sürecin tamamlanıp tamamlanmadığına (yarım kalanların hatırlanıp, bitenlerin unutulmasına)',
      'Olayı yaşarken yanımızda başka insanların (sosyal desteğin) olup olmadığına',
      'Görsel hafızamızın işitsel hafızamızdan daha güçlü çalışmasına'
    ],
    correct: 1,
    explanation: 'Garsonların bitmemiş siparişi hatırlayıp hesap ödenince (tamamlanınca) unutması; beynin tamamlanmayan/yarım kalan işleri hatırlayıp bitenleri sildiği kuralına (Zeigarnik) dayanır.'
  },
  {
    title: 'Buğday Tanesi ve Satranç',
    passage: 'Satrancı icat eden Hintli bilge, oyununu krala sunduğunda kral çok etkilenir ve "Dile benden ne dilersen!" der. Bilge, mütevazı bir gülümsemeyle "Tahtanın ilk karesine bir buğday tanesi koyun. İkinci kareye iki, üçüncüye dört, dördüncüye sekiz... Her karede iki katına çıkararak 64 kareyi doldurun" der. Kral bu ucuz isteğe güler. Ancak hesaplamalar başladığında saray matematiğe çarpar: Tahtanın sonlarına gelindiğinde gereken buğday miktarı, sadece kralın depolarını değil, tüm dünyada binlerce yıl üretilecek buğdaydan daha fazladır (yaklaşık 18 kentilyon tane). Bu efsane, insan beyninin "üstel (geometrik) büyümeyi" sezgisel olarak kavramaktaki yetersizliğini ve matematiğin o sessiz, sarsıcı gücünü gösterir.',
    questionStem: 'Satranç tahtası efsanesinin anlatıldığı bu parçadan çıkarılabilecek temel sonuç nedir?',
    options: [
      'Satranç oyununun aslında tarımsal bir strateji üzerine kurulduğu',
      'Hint medeniyetinin o dönemde buğday üretimi konusunda kıtlık yaşadığı',
      'İnsan zihninin "üstel (katlanarak) büyümeyi" tahmin etmede yetersiz kaldığı ve matematiğin (geometrik artışın) göründüğünden çok daha devasa (sarsıcı) bir güce sahip olduğu',
      'Kralların, halkın basit isteklerini bile karşılamayacak kadar kibirli olduğu'
    ],
    correct: 2,
    explanation: 'Kralın ucuz sandığı bu isteğin dünyadaki tüm buğdaydan fazla çıkması, insan beyninin üstel (katlanarak) büyümeyi kavramaktaki yetersizliğini ve matematiğin sarsıcı gücünü kanıtlar.'
  }
];

export const felsefeParagrafSorulari8: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_8.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_8[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe8-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
