export interface SincityParagrafQuestion {
  id: string;
  subject: 'turkce';
  term: number;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

const PARAGRAPH_THEMES = [
  {
    title: 'Brütüs\'ün İhaneti',
    passage: 'Jül Sezar\'ın M.Ö. 44 yılında Roma Senatosu\'nda suikasta kurban gitmesi, tarihin en dramatik ihanet sahnelerinden biridir. Sezar, etrafını saran yirmi üç suikastçı arasında en güvendiği dostu, evladı gibi sevdiği Brütüs\'ü gördüğünde fiziksel olarak direnmeyi bırakmış ve o meşhur "Sen de mi Brütüs?" sözünü fısıldayarak cübbesini yüzüne çekmiştir. Bu olay, siyasi hırsların ve sözde cumhuriyeti koruma idealinin, en derin sadakat bağlarını bile nasıl koparabildiğini gösterir. İhanetin asıl acısı, bedene saplanan hançerlerden değil, güvenilen bir yüzden gelmesidir.',
    questionStem: 'Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
    options: [
      'Roma Cumhuriyeti\'nin yıkılmasının tek nedeninin senato içindeki çıkar çatışmaları olduğu',
      'İhanetin yarattığı psikolojik yıkımın, fiziksel acıdan çok daha ağır olduğu ve siyasi ihtirasların dostlukları yok edebildiği',
      'Sezar\'ın, halk tarafından sevilmediği için kendi yakın çevresini koruyamadığı',
      'Siyasi suikastların sadece eski çağlarda görülen ilkel bir yöntem olduğu'
    ],
    correct: 1,
    explanation: 'Parçada Sezar\'ın Brütüs\'ü gördüğünde direnmeyi bırakması ve ihanetin acısının hançerden derin olması, ihanetin psikolojik yıkımını ve siyasi hırsların dostluğu yenebileceğini vurgular.'
  },
  {
    title: 'Neron ve Yanan Roma',
    passage: 'MS 64 yılındaki Büyük Roma Yangını altı gün boyunca şehri kasıp kavururken, İmparator Neron\'un tepeden şehri izleyip lir çaldığı efsanesi günümüze kadar ulaşmıştır. Tarihsel kayıtlara göre Neron yangın sırasında Roma\'da bile değildi; ancak yangın sonrası halkın öfkesini dindirmek ve kendi üzerindeki "şehri o yaktı" şüphelerini dağıtmak için o dönemde yeni ve zayıf bir grup olan Hıristiyanları "günah keçisi" ilan etti. Bu olay, yöneticilerin kriz anlarında kitle psikolojisini yönetmek için gerçekleri nasıl saptırdığının çarpıcı bir örneğidir.',
    questionStem: 'Yazar, Büyük Roma Yangını ve Neron üzerinden asıl neyi vurgulamaktadır?',
    options: [
      'Neron\'un sanata olan düşkünlüğünün devlet işlerini aksattığını',
      'Kriz yönetiminde kitleleri sakinleştirmek için gerçeklerin çarpıtılıp hedef saptırma (günah keçisi) taktiğinin kullanıldığını',
      'Roma\'nın büyük oranda ahşap yapılarından oluşmasının yangını hızlandırdığını',
      'Hıristiyanların Roma\'da her zaman el üstünde tutulan bir sınıf olduğunu'
    ],
    correct: 1,
    explanation: 'Neron\'un halkın öfkesini dindirmek için Hıristiyanları suçlaması, kriz anlarında bir günah keçisi yaratarak algı yönetimi yapıldığını gösterir.'
  },
  {
    title: 'Truva Atı: Zekânın Zaferi',
    passage: 'On yıl süren kanlı kuşatmaya rağmen aşılamayan Truva surları, kaba kuvvetle değil, Odysseus\'un kurnazca bir zekâ oyunuyla düşmüştür. Yunanlıların geri çekiliyormuş gibi yapıp sahilde tanrılara bir sunu olarak bıraktıkları devasa tahta at, Truvalılar tarafından büyük bir zafer ganimeti olarak şehrin içine alınmıştır. Kutlamalar bitip gece karanlığı çöktüğünde atın içinden çıkan Yunan askerleri, şehrin kapılarını açarak Truva\'nın sonunu getirmiştir. Truva Atı, fiziksel gücün tıkandığı yerde stratejinin devreye girdiğini kanıtlar.',
    questionStem: 'Truva Atı efsanesinden çıkarılabilecek temel ders aşağıdakilerden hangisidir?',
    options: [
      'Savaşlarda zaferin her zaman en kalabalık ve donanımlı orduya ait olduğu',
      'Düşmandan gelen ani iyiliklerin veya hediyelerin arkasında yıkıcı bir tuzak (kurnazlık) olabileceği',
      'Surların yüksekliğinin ve kalınlığının şehir savunmasında tek başına yeterli olduğu',
      'Askeri başarıların tamamen tesadüflere ve şansa dayandığı'
    ],
    correct: 1,
    explanation: 'Düşmanın bıraktığı bir hediyenin (tahta at) aslında şehrin sonunu getiren bir tuzak olması, düşmandan gelen hediyelere şüpheyle yaklaşılması gerektiğini anlatır.'
  },
  {
    title: 'Donmuş Zaman: Pompei',
    passage: 'MS 79 yılında Vezüv Yanardağı patladığında, dönemin en lüks ve hareketli Roma şehirlerinden biri olan Pompei, saatler içinde metrelerce yüksekliğindeki kızgın kül ve sünger taşı tabakasının altına gömüldü. İnsanlar kaçmaya bile fırsat bulamadan günlük rutinleri içinde taşlaştılar. Fırındaki ekmekler, masadaki şarap kadehleri ve insanların son yüz ifadeleri yüzyıllar boyunca o küllerin altında bozulmadan kaldı. Pompei, insanlığın kurduğu en büyük medeniyetlerin bile doğanın anlık bir öfkesi karşısında ne kadar aciz olduğunun dilsiz bir kanıtıdır.',
    questionStem: 'Bu metne göre Pompei felaketi insanlığa nasıl bir mesaj vermektedir?',
    options: [
      'Volkanik arazilerin tarım için oldukça verimli topraklar sunduğunu',
      'Teknolojik gelişmelerin doğal afetleri önlemede kesin bir çözüm olduğunu',
      'İnsanlığın kurduğu medeniyetlerin ve gücün, doğanın yıkıcı kuvveti karşısında çaresiz ve geçici olduğunu',
      'Eski çağlarda insanların afet planlaması konusunda çok daha bilinçli olduğunu'
    ],
    correct: 2,
    explanation: 'Lüks bir şehrin aniden küller altında kalması ve insanların kaçamaması, insanın doğa karşısındaki acizliğini (çaresizliğini) simgeler.'
  },
  {
    title: 'Titanic: Kibrin Batışı',
    passage: '1912 yılında ilk seferine çıkan Titanic, dönemin mühendislik harikası ve "Tanrı bile batıramaz" denilen bir kibir abidesiydi. Geminin devasa lüksü ve teknolojik donanımı, insanlarda doğaya tamamen boyun eğdirdiklerine dair sahte bir inanç yaratmıştı. Ancak bir nisan gecesi, o "batmaz" denilen çelik dev, bir buzdağına çarparak okyanusun karanlık sularına gömüldü. Yeterli can filikasının bulunmaması, tasarımdaki kibrin insan hayatına ne kadar pahalıya mal olduğunun acı bir göstergesiydi.',
    questionStem: 'Yazar, Titanic felaketini anlatırken asıl neyi eleştirmektedir?',
    options: [
      'Gemi personelinin yeterli denizcilik eğitimine sahip olmamasını',
      'İnsanoğlunun teknolojiye olan aşırı güveninin yarattığı büyüklenmeyi (kibri) ve tedbirsizliği',
      'Okyanus yolculuklarının hava şartları nedeniyle her zaman risk taşıdığını',
      'Gemideki lüks eşyaların geminin ağırlığını artırarak batmasına yol açmasını'
    ],
    correct: 1,
    explanation: '"Tanrı bile batıramaz" düşüncesi ve can filikası eksikliği, teknolojiye duyulan kibrin ve aşırı güvenin faciaya yol açtığını gösterir.'
  },
  {
    title: 'Marie Antoinette ve Pasta',
    passage: 'Fransız Devrimi öncesinde halk açlıktan kırılırken, Kraliçe Marie Antoinette\'in "Ekmek bulamazlarsa pasta yesinler" dediği rivayet edilir. Günümüz tarihçileri Kraliçe\'nin böyle bir söz söylemediğini, bunun devrimciler tarafından üretilmiş bir kara propaganda olduğunu kanıtlamıştır. Ancak halk, sarayın lüksüne o kadar öfkeli ve Kraliçe\'ye o kadar yabancıydı ki, bu söylenti bir alev gibi yayıldı. Gerçeğin ne olduğu değil, kitlelerin o an neye inanmak istediği tarihi değiştirmişti.',
    questionStem: 'Marie Antoinette ile ilgili bu olaydan çıkarılabilecek temel sosyolojik sonuç nedir?',
    options: [
      'Kraliyet ailesinin halkın beslenme alışkanlıklarını değiştirmeye çalıştığı',
      'Tarihsel dönüm noktalarında söylentilerin ve algı yönetiminin, yalana dayalı olsa bile gerçeklerden daha etkili olabildiği',
      'Fransız Devrimi\'nin sadece ekonomik sebeplerle değil, kültürel farklılıklarla başladığı',
      'Halkın yöneticilere olan sevgisinin her koşulda sarsılmaz olduğu'
    ],
    correct: 1,
    explanation: 'Sözün yalan olmasına rağmen devrimi alevlendirmesi, kitle psikolojisinde algının ve söylentilerin gerçeklerden daha güçlü olabildiğini kanıtlar.'
  },
  {
    title: 'İskenderiye Kütüphanesi',
    passage: 'Antik dünyanın en büyük bilgi merkezi olan İskenderiye Kütüphanesi, yüz binlerce el yazması parşömenle insanlığın ortak hafızasıydı. Farklı dönemlerde yaşanan savaşlar, isyanlar ve yangınlar sonucunda bu kütüphane tamamen yok oldu. O alevlerle birlikte sadece kâğıtlar değil; antik çağın astronomi, tıp, matematik ve felsefe birikimi de küle döndü. Bu yıkım, medeniyetin ne kadar kırılgan olduğunu ve bilginin korunmamasının insanlığı yüzyıllarca geriye götürebileceğini gösteren trajik bir kayıptır.',
    questionStem: 'İskenderiye Kütüphanesi\'nin yok olmasının insanlık tarihindeki asıl etkisi nedir?',
    options: [
      'İskenderiye şehrinin ticari önemini yitirmesine neden olması',
      'Bilgi birikiminin ve ortak hafızanın silinerek insanlığın bilimsel gelişiminin büyük bir kesintiye uğraması',
      'Antik dönemdeki savaşların tamamen sona ermesini sağlaması',
      'Papirüs ve parşömen yerine yeni yazı materyallerinin icat edilmesini hızlandırması'
    ],
    correct: 1,
    explanation: 'Yüz binlerce eserin yanmasıyla astronomi, tıp gibi bilimsel birikimlerin küle dönmesi, insanlığın gelişiminin ve ortak hafızasının büyük bir darbe aldığını gösterir.'
  },
  {
    title: 'Rosetta Taşı\'nın Şifresi',
    passage: '1799\'da Napolyon\'un askerleri tarafından Mısır\'da bulunan Rosetta Taşı, üzerinde aynı metnin Antik Mısır hiyeroglifleri, Demotik yazı ve Antik Yunanca olmak üzere üç farklı dilde kazındığı bir granit bloktu. Bilim insanı Champollion, Yunanca metni rehber alarak yüzyıllardır okunamayan gizemli hiyerogliflerin şifresini çözmeyi başardı. Bu sıradan gibi görünen taş, dilsiz kalmış koca bir medeniyetin yeniden konuşmasını sağlayarak Mısırbilim (Ejiptoloji) adında yepyeni bir bilim dalının doğmasına yol açtı.',
    questionStem: 'Bu metne göre Rosetta Taşı\'nın tarihteki önemi aşağıdakilerden hangisidir?',
    options: [
      'Napolyon\'un Mısır seferindeki askeri başarılarını kutlayan bir anıt olması',
      'Antik döneme ait üç farklı dili içermesi sayesinde, unutulmuş Mısır medeniyetinin tarihinin aydınlatılmasına anahtar (şifre çözücü) olması',
      'Dünyadaki en eski ve en değerli granit taşı olarak müzelerde sergilenmesi',
      'Antik Yunan kültürünün Mısır kültüründen daha üstün olduğunu kanıtlaması'
    ],
    correct: 1,
    explanation: 'Taşın üzerindeki bilinen Yunanca sayesinde bilinmeyen hiyerogliflerin çözülmesi, onu sessiz kalmış Mısır medeniyetinin tarihini aydınlatan bir anahtar yapmıştır.'
  },
  {
    title: 'Kelebek Etkisi: Saraybosna Suikastı',
    passage: '28 Haziran 1914\'te Saraybosna\'da, Sırp milliyetçisi Gavrilo Princip\'in silahından çıkan iki kurşun, Avusturya-Macaristan Veliahdı Franz Ferdinand\'ı öldürdü. Görünüşte bölgesel bir suikast olan bu olay, Avrupa\'daki gizli ittifaklar ağını tetikledi. Ülkeler birbiri ardına savaş ilan etti ve sadece birkaç hafta içinde tüm dünya I. Dünya Savaşı\'nın içine sürüklendi. Bu olay, tarihte küçük ve yerel bir kıvılcımın, doğru şartlar altında tüm gezegeni nasıl ateşe verebileceğinin en korkunç örneğidir.',
    questionStem: 'Yazar, Franz Ferdinand suikastını anlatırken tarihsel olayların hangi özelliğine dikkat çekmektedir?',
    options: [
      'Tarihi olayların her zaman ekonomik temellere dayandığına',
      'Yerel ve küçük çaplı gibi görünen bir eylemin, zincirleme reaksiyonla küresel ve yıkıcı sonuçlar doğurabileceğine',
      'Suikastların savaşları önlemede zaman zaman etkili bir diplomatik araç olduğuna',
      'Liderlerin güvenliğinin uluslararası anlaşmalarla tam olarak sağlanabileceğine'
    ],
    correct: 1,
    explanation: 'İki kurşunun tüm dünyayı savaşa sürüklemesi, küçük bir olayın zincirleme etkiyle (kelebek etkisi) küresel felaketlere yol açabileceğini gösterir.'
  },
  {
    title: 'Çernobil: Gizlenen Gerçekler',
    passage: '1986 yılında Çernobil Nükleer Santrali\'nde meydana gelen patlama, insanlık tarihinin en büyük çevre felaketidir. Ancak felaketin boyutunu büyüten şey radyasyonun kendisinden çok, Sovyet yetkililerin durumu dünyadan ve kendi halkından günlerce saklama çabasıydı. İnsanlar ölümcül radyasyon bulutları altında 1 Mayıs kutlamalarına çıkarıldı. Çernobil, teknolojinin tehlikelerinden ziyade, otoriter sistemlerde şeffaflığın olmamasının ve gerçeğin örtbas edilmesinin ne kadar ölümcül olabileceğini acı bir şekilde kanıtladı.',
    questionStem: 'Parçaya göre Çernobil felaketini asıl yıkıcı kılan faktör aşağıdakilerden hangisidir?',
    options: [
      'Nükleer santralin inşasında kullanılan malzemelerin kalitesizliği',
      'Santral çalışanlarının eğitim seviyelerinin yetersiz olması',
      'Yönetimin felaketi saklayarak şeffaf davranmaması ve halkı tehlikeye atması',
      'Radyasyonun çevre ülkelere rüzgâr yoluyla çok hızlı yayılması'
    ],
    correct: 2,
    explanation: 'Metinde felaketin boyutunu büyüten şeyin "radyasyonun kendisinden çok, gerçeğin örtbas edilmesi ve şeffaflığın olmaması" olduğu açıkça vurgulanmıştır.'
  },
  {
    title: 'Hatanın İcadı: Penisilin',
    passage: '1928 yılında İskoç bilim insanı Alexander Fleming, tatile çıkarken laboratuvarındaki petri kaplarını temizlemeyi unuttu. Döndüğünde, kaplardan birinde üreyen yeşil bir küfün etrafındaki tehlikeli bakterileri öldürdüğünü fark etti. Bu dikkatsizlik sonucu ortaya çıkan "Penicillium notatum" adlı küf, modern tıbbın seyrini değiştiren ilk antibiyotik olan penisilinin keşfiydi. Bilim tarihi, sadece sistemli çalışmaların değil, bazen "hata" olarak görülen detayları fark edebilecek keskin bir zekânın da dünyayı kurtarabileceğini gösterir.',
    questionStem: 'Penisilinin keşif hikâyesinden çıkarılabilecek temel düşünce nedir?',
    options: [
      'Bilimsel başarıların tamamen tesadüflere bağlı olduğu ve çok çalışmanın önemsiz olduğu',
      'Dikkatsizlik ve hataların her zaman insanlığa fayda sağlayan sonuçlar doğurduğu',
      'Bilimde rastlantısal (tesadüfi) olayların, onları doğru yorumlayabilen gözlemci bir zekâyla birleştiğinde devrim yaratabileceği',
      'Laboratuvar hijyeninin bilimsel deneylerin sonucunu hiçbir şekilde etkilemediği'
    ],
    correct: 2,
    explanation: 'Fleming\'in unuttuğu bir kaptaki (rastlantı) küfü inceleyip antibiyotiği bulması, tesadüflerin ancak iyi bir gözlemci zekâyla birleştiğinde devrim yaratacağını gösterir.'
  },
  {
    title: 'Spartaküs İsyanı',
    passage: 'M.Ö. 73 yılında, gladyatör Spartaküs liderliğinde bir araya gelen yetmiş köle, Roma İmparatorluğu\'nun yenilmez ordularına karşı başkaldırdı. Yıllarca süren bu isyan, sayıları on binleri bulan bir köle ordusuna dönüştü. Spartaküs ve ordusu sonunda yenilip çarmıha gerilseler de, bu olay tarihe sadece bir askeri çatışma olarak geçmedi. Özgürlük ateşinin, en zincire vurulmuş bedenlerde bile asla söndürülemeyeceğini ve insanın onuru için imkânsıza kafa tutabileceğini gösteren ölümsüz bir sembol oldu.',
    questionStem: 'Spartaküs İsyanı\'nın tarihsel süreçteki asıl değeri aşağıdakilerden hangisidir?',
    options: [
      'Roma İmparatorluğu\'nun askeri taktiklerini değiştirmesine neden olması',
      'Kölelerin de iyi birer asker olabileceğini kanıtlaması',
      'Yenilgiyle sonuçlansa bile, insan onurunun ve özgürlük iradesinin baskıya karşı direniş sembolü haline gelmesi',
      'Antik dönemde köleliğin tamamen kaldırılmasını sağlaması'
    ],
    correct: 2,
    explanation: 'İsyan yenilgiyle sonuçlansa da, özgürlük ateşinin sönmeyeceği ve insanın onuru için imkansıza kafa tutabileceği (direniş sembolü) vurgulanmıştır.'
  },
  {
    title: 'Salem Cadı Mahkemeleri',
    passage: '1692 yılında Amerika\'nın Salem kasabasında birkaç genç kızın tuhaf davranışlar sergilemesiyle başlayan süreç, kasabayı bir histeri krizine sürükledi. Korku ve cehalet, komşuyu komşuya düşman etti; somut hiçbir kanıt olmaksızın, sadece "rüyasında gördüğünü" iddia eden çocukların sözleriyle onlarca masum insan cadılık suçlamasıyla asıldı. Salem, adaletin delillerle değil de toplumun yersiz korkuları ve kitlesel paranoyası ile yönlendirildiğinde nasıl bir cinayet makinesine dönüşebileceğinin en karanlık uyarısıdır.',
    questionStem: 'Salem Cadı Mahkemeleri olayından günümüze yönelik çıkarılabilecek asıl ders nedir?',
    options: [
      'Cadılık ve doğaüstü olayların o dönemde gerçekten var olduğu',
      'Toplumsal korku ve paranoyanın kanıtsız suçlamalarla birleştiğinde adaleti çökertip masumları yok edebileceği',
      'Küçük kasabalarda yargı sisteminin her zaman kusursuz işlediği',
      'Gençlerin söylediklerinin hukukta her zaman mutlak doğru kabul edilmesi gerektiği'
    ],
    correct: 1,
    explanation: 'Somut kanıt olmadan sadece korku ve rüyalarla insanların asılması, kitlesel paranoyanın ve korkunun adaleti nasıl çökerttiğini anlatır.'
  },
  {
    title: 'Kara Ölüm: Yıkımın Getirdiği Değişim',
    passage: '14. yüzyılda Asya\'dan Avrupa\'ya ticaret gemilerindeki pirelerle taşınan veba (Kara Ölüm), Avrupa nüfusunun üçte birini yok etti. Sokaklar cesetlerle doldu, şehirler hayalet kasabalara döndü. Ancak bu devasa trajedinin sosyolojik bir yan etkisi oldu: Nüfusun azalmasıyla iş gücü kıymete bindi. Toprak ağalarına (derebeylerine) bağımlı olan köylüler, daha yüksek ücretler talep etmeye ve haklar kazanmaya başladı. Tarihin en büyük felaketlerinden biri, paradoksal bir şekilde Avrupa\'da feodalizmin çöküşünü hızlandırdı.',
    questionStem: 'Veba salgınının Avrupa üzerindeki etkisini anlatan bu parçada yazarın vurguladığı temel durum nedir?',
    options: [
      'Hastalıkların tıbbi gelişimleri zorunlu hale getirdiği',
      'Büyük çaplı ve yıkıcı bir demografik felaketin, beklenmedik şekilde ekonomik ve sınıfsal (sosyolojik) değişimlere yol açtığı',
      'Ticaret yollarının tamamen kapanmasıyla Avrupa\'nın içine kapandığı',
      'Salgının köylüler arasında dayanışmayı azaltıp iç savaşlar çıkardığı'
    ],
    correct: 1,
    explanation: 'Vebanın nüfusu yok etmesinin (felaket), iş gücünü değerli kılıp feodalizmi çökertmesi (sosyolojik ve ekonomik değişim) anlatılarak felaketin paradoksal sonucu vurgulanmıştır.'
  },
  {
    title: 'Bir Çağın Kapanışı: İstanbul\'un Fethi',
    passage: '1453 yılında Fatih Sultan Mehmet\'in İstanbul\'u fethetmesi, sadece bir şehrin el değiştirmesi değildi. O güne kadar "asılamaz" denilen devasa Bizans surlarının, Şahi adı verilen dev toplarla yıkılabileceği kanıtlandı. Bu teknolojik şok dalgası Avrupa\'da yankılandı; krallar, kendi topraklarındaki asi derebeylerinin şatolarını toplarla yıkarak merkezi krallıklarını güçlendirdiler. İstanbul\'un düşüşü, askeri teknolojinin (topların) feodal sistemi nasıl tarihe gömdüğünün ve Orta Çağ\'ı nasıl kapattığının sembolüdür.',
    questionStem: 'İstanbul\'un Fethi\'nin Avrupa siyasi yapısına (feodalizme) olan asıl etkisi parçada nasıl açıklanmıştır?',
    options: [
      'Bizanslı bilginlerin Avrupa\'ya kaçarak Rönesans\'ı başlatmasıyla',
      'Yeni ticaret yollarının aranmasının Coğrafi Keşiflere yol açmasıyla',
      'Aşılamaz sanılan surların toplarla yıkılabileceğinin görülmesinin, şatolara güvenen derebeylik sisteminin sonunu getirmesiyle',
      'Osmanlı tehlikesine karşı Avrupa ülkelerinin siyasi birleşme kararı almasıyla'
    ],
    correct: 2,
    explanation: 'Parçada fetih sırasında topların surları yıkmasının, Avrupa\'daki kralların şatoları yıkmasına ilham verdiği ve feodalizmi çökerttiği (derebeylik sistemini yıktığı) belirtilmiştir.'
  },
  {
    title: 'Krakatoa: Dünyanın Duyduğu Çığlık',
    passage: '1883 yılında Endonezya\'daki Krakatoa Yanardağı patladığında, ortaya çıkan ses o kadar şiddetliydi ki yaklaşık 5000 kilometre uzaktaki adalardan bile duyuldu. Patlamanın püskürttüğü devasa kül bulutu atmosferi kapladı ve dünyadaki ortalama sıcaklık yıllarca düştü. Avrupa\'da ve Amerika\'da gökyüzü aylarca tuhaf kırmızı ve mor renklere büründü. Krakatoa felaketi, gezegenimizin aslında sınırları olmayan tek bir organizma olduğunu ve dünyanın bir ucundaki olayın diğer ucunu nasıl etkileyebileceğini gösterdi.',
    questionStem: 'Krakatoa patlamasının anlatıldığı bu parçanın ana düşüncesi nedir?',
    options: [
      'Yanardağ patlamalarının her zaman uzun süreli buzul çağlarına neden olduğu',
      'Gezegenimizdeki doğa olaylarının yerel kalmayıp küresel bir ekolojik bağa ve etkiye sahip olduğu',
      'Endonezya coğrafyasının yaşamak için dünyanın en tehlikeli yeri olduğu',
      'Gökyüzündeki renk değişimlerinin sadece volkanik patlamalarla açıklanabileceği'
    ],
    correct: 1,
    explanation: 'Endonezya\'daki patlamanın Avrupa\'daki gökyüzünü değiştirmesi ve sıcaklığı düşürmesi, dünyanın birbirine bağlı (küresel ekolojik bağ) tek bir organizma olduğunu gösterir.'
  },
  {
    title: 'Bir İnancın Gücü: Jan Dark',
    passage: 'Yüzyıl Savaşları sırasında İngiliz işgali altındaki Fransa umutsuzluk içindeyken, 17 yaşında okuma yazma bilmeyen köylü bir kız olan Jan Dark ortaya çıktı. Tanrı\'dan ilahi mesajlar aldığını ve Fransa\'yı kurtaracağını söyleyerek moralsiz orduya liderlik etti ve imkânsız görünen zaferler kazandı. Sonunda ihanete uğrayıp İngilizler tarafından yakılarak öldürülse de, onun tutuşturduğu vatanseverlik ateşi Fransızları birleştirdi. Jan Dark, sarsılmaz bir inancın ve adanmışlığın koca bir milletin kaderini nasıl değiştirebileceğinin en somut örneğidir.',
    questionStem: 'Yazar Jan Dark\'ın hikâyesinde asıl olarak hangi kavramın gücünü ön plana çıkarmaktadır?',
    options: [
      'Savaşlarda kullanılan modern askeri taktiklerin',
      'Kadınların orduda daha fazla yer alması gerektiğinin',
      'Sarsılmaz bir inancın, kararlılığın ve bireysel adanmışlığın toplumları harekete geçiren gücünün',
      'Diplomatik müzakerelerin savaşlardan daha kesin sonuçlar verdiğinin'
    ],
    correct: 2,
    explanation: 'Okuma yazma bilmeyen bir köylü kızının sadece inancıyla moralsiz bir orduya liderlik edip milleti birleştirmesi, bireysel inancın ve adanmışlığın gücünü vurgular.'
  },
  {
    title: 'Macellan\'ın Tamamlanamayan Yolculuğu',
    passage: 'Ferdinand Macellan, 1519 yılında beş gemiyle batıya doğru yelken açarak dünyanın etrafını tam bir tur dolaşmayı hedefledi. O güne kadar haritalanmamış okyanuslarda isyanlar, açlık ve hastalıkla boğuştu. Macellan, Filipinler\'de yerlilerle girdiği bir çatışmada hayatını kaybetti. Ancak yola çıkan beş gemiden sadece biri (Victoria), üç yıl sonra perişan haldeki 18 denizciyle İspanya\'ya dönmeyi başardı. Kaptanı ölmüş olsa da bu yolculuk, dünyanın yuvarlak olduğunu uygulamalı olarak kanıtlayan ilk büyük zaferdi.',
    questionStem: 'Bu metne göre Macellan\'ın yolculuğu ile ilgili aşağıdakilerden hangisi söylenebilir?',
    options: [
      'Yolculuğa katılan tüm gemi ve mürettebatın başarılı bir şekilde ülkeye döndüğü',
      'Sadece ticari amaçlarla yapılan kolay ve sorunsuz bir sefer olduğu',
      'Macellan\'ın yolculuğu bizzat tamamlayamamasına rağmen, insanlık tarihi için çığır açıcı bir keşfe imza atıldığı',
      'Dünyanın yuvarlak olduğunun yerliler tarafından Macellan\'a öğretildiği'
    ],
    correct: 2,
    explanation: 'Macellan\'ın ölmesine rağmen kalan bir geminin turu tamamlayıp dünyanın yuvarlak olduğunu kanıtlaması, lider ölmüş olsa da amacın gerçekleştiğini (çığır açıcı keşif) gösterir.'
  },
  {
    title: 'Wright Kardeşler ve Yerçekimi',
    passage: '1903 yılında Wilbur ve Orville Wright kardeşler ilk motorlu uçağı uçurduklarında, gazeteler bu olayı haber yapmaya bile değer görmedi. Dönemin en saygın bilim insanları havadan ağır bir makinenin uçmasının fiziksel olarak imkânsız olduğunu savunuyordu. Bisiklet tamircisi olan bu iki kardeş, akademik unvanları olmamasına rağmen binlerce deneme-yanılma ve kendi tasarladıkları rüzgâr tüneli sayesinde yerçekimine meydan okudular. Onların hikâyesi, dogmalara ve toplumsal şüphelere karşı tutkunun ve azmin zaferidir.',
    questionStem: 'Wright Kardeşler\'in uçuş deneyiminden yola çıkarak ulaşılabilecek genel yargı nedir?',
    options: [
      'Büyük buluşların her zaman üniversitelerde ve akademik çevrelerde yapıldığı',
      'Medyanın bilimsel gelişmeleri her zaman anında destekleyip kitlelere ulaştırdığı',
      'Bilimsel otoritenin imkânsız dediği şeylerin bile, tutkulu bir çalışma ve inançla (azimli denemelerle) başarılabileceği',
      'Havacılık tarihinin sadece bisiklet tamircileri tarafından şekillendirildiği'
    ],
    correct: 2,
    explanation: 'Bilim insanlarının imkânsız dediği ve basının görmezden geldiği bir şeyi iki bisiklet tamircisinin başarması, azmin ve tutkunun dogmaları (kalıplaşmış inançları) yıkabileceğini gösterir.'
  },
  {
    title: 'Ay\'daki Ayak İzi: Apollo 11',
    passage: '1969 yılında Apollo 11 göreviyle Neil Armstrong Ay yüzeyine adım attığında "Benim için küçük, insanlık için dev bir adım" demişti. Soğuk Savaş\'ın en gergin günlerinde, Amerika ve Sovyetler arasındaki yıkıcı bir silahlanma yarışının parçası olarak başlayan bu uzay rekabeti, o an için dünyadaki tüm sınırları sildi. Televizyon başında nefesini tutan milyonlarca insan ırk, dil veya ideoloji ayrımı gözetmeksizin sadece "insan" olmanın gururunu yaşadı. O ayak izi, rekabetin bile bazen insanlık için evrensel bir ilhama dönüşebileceğinin kanıtıdır.',
    questionStem: 'Yazar, Apollo 11 Ay\'a iniş olayının hangi yönünü ön plana çıkarmaktadır?',
    options: [
      'Uzay teknolojilerinin günlük hayattaki pratik kullanımlarını',
      'Soğuk Savaş dönemindeki siyasi rekabetin ve düşmanlığın asla sona ermediğini',
      'Rekabetçi siyasi bir motivasyonla başlasa da, sonucun tüm insanlığı birleştiren evrensel ve gurur verici bir başarıya dönüştüğünü',
      'Ay yüzeyinde bırakılan ayak izinin coğrafi ve bilimsel araştırmalara yön verdiğini'
    ],
    correct: 2,
    explanation: 'Silahlanma yarışı (rekabet) ile başlayan bu olayın, o an televizyon başındaki herkesi sınırları kaldırarak "insan" olma gururunda birleştirmesi (evrensel ilham) vurgulanmıştır.'
  }
];
// 1. MAKİNE
export const tarihParagrafSorulari: SincityParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-tarih-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
export interface TarihParagrafQuestion {
  id: string;
  subject: 'turkce'; // İstersen 'sosyal' olarak değiştirebilirsin
  term: number;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

const PARAGRAPH_THEMES_2 = [
  {
    title: 'Galileo\'nun Yargılanması',
    passage: 'Galileo Galilei, 1633 yılında Engizisyon mahkemesi karşısına çıkarıldığında, dünyanın Güneş etrafında döndüğünü savunduğu için sapkınlıkla suçlanıyordu. Yaşlı ve hasta olan bilim insanı, işkence tehdidi altında teorisini reddetmek zorunda kaldı. Ancak mahkeme salonundan çıkarken "Yine de dönüyor!" diye mırıldandığı rivayet edilir. Bu olay, dogmatik inançların bilimsel gerçeği bir süreliğine susturabilse de, hakikatin er ya da geç kendi yolunu bulacağını ve baskıyla yok edilemeyeceğini gösteren tarihi bir dönüm noktasıdır.',
    questionStem: 'Bu parçada Galileo\'nun yaşadıkları üzerinden asıl anlatılmak istenen nedir?',
    options: [
      'Bilim insanlarının toplumsal kurallara her zaman uyması gerektiği',
      'Baskıcı ve dogmatik otoritelerin, bilimsel gerçeklerin ortaya çıkmasını sonsuza dek engelleyemeyeceği',
      'Gökbiliminin diğer bilim dallarına göre daha geç geliştiği',
      'Engizisyon mahkemelerinin zamanla bilimsel çalışmaları desteklediği'
    ],
    correct: 1,
    explanation: 'Galileo\'nun baskı altında teorisini reddetse de "Yine de dönüyor" demesi, gerçeğin baskıyla yok edilemeyeceğini ve eninde sonunda ortaya çıkacağını vurgular.'
  },
  {
    title: 'Rosa Parks ve Otobüs Boykotu',
    passage: '1955 yılında ABD\'nin Montgomery şehrinde, siyahi bir kadın olan Rosa Parks, otobüste beyaz bir yolcuya yer vermeyi reddettiği için tutuklandı. Bu sessiz ama kararlı sivil itaatsizlik eylemi, sadece bir otobüs koltuğu meselesi değildi; yıllardır biriken ırk ayrımcılığına karşı bardağı taşıran son damlaydı. Parks\'ın bu hareketi, Martin Luther King önderliğindeki devasa bir boykotu ateşledi ve sivil haklar hareketinin sembolü oldu. Bazen tarihin akışını değiştirmek için devrimci ordulara değil, sadece ayağa kalkmayı reddeden yorgun bir bedenin cesaretine ihtiyaç vardır.',
    questionStem: 'Rosa Parks\'ın eylemiyle ilgili parçada vurgulanan temel düşünce aşağıdakilerden hangisidir?',
    options: [
      'Şehir içi ulaşım kurallarının yeniden düzenlenmesini sağladığı',
      'Büyük toplumsal değişimlerin, şiddet içermeyen, küçük ama kararlı bireysel direnişlerle başlayabileceği',
      'Irkçılığın sadece Amerika kıtasına özgü bir problem olduğu',
      'Toplumsal hareketlerin her zaman karizmatik liderler tarafından başlatıldığı'
    ],
    correct: 1,
    explanation: 'Rosa Parks\'ın sadece yerinden kalkmayı reddetmesiyle devasa bir sivil haklar hareketini başlatması, küçük ama kararlı bir direnişin büyük değişimler yaratabileceğini gösterir.'
  },
  {
    title: 'Büyük İskender ve Gordion Düğümü',
    passage: 'Antik çağ efsanelerine göre, Frigya başkenti Gordion\'da bir arabaya atılmış ve çözülmesi imkânsız olan karmaşık bir düğüm vardı. Kâhinin kehanetine göre bu düğümü çözen kişi tüm Asya\'nın hâkimi olacaktı. Birçok kişi yıllarca düğümü çözmeye çalışıp başarısız oldu. MÖ 333 yılında şehre gelen Büyük İskender, düğümü çözmek için uğraşmak yerine kılıcını çekip onu tek hamlede ortadan ikiye kesti. Bu olay, karmaşık ve içinden çıkılmaz gibi görünen sorunların, bazen kuralları yıkan basit, doğrudan ve cesur bir yaklaşımla çözülebileceğini gösterir.',
    questionStem: 'Büyük İskender\'in Gordion Düğümü\'nü kesmesi, aşağıdakilerden hangisinin bir sembolü olarak değerlendirilebilir?',
    options: [
      'Geleneksel yöntemlere ve kurallara sıkı sıkıya bağlı kalmanın',
      'Sorunlar karşısında sabırlı ve detaycı bir analiz yapmanın',
      'Aşılmaz gibi görünen problemlerde kalıpların dışında, cesur ve kestirme çözümler üretmenin',
      'Askeri gücün her zaman diplomatik zekâdan üstün olduğunun'
    ],
    correct: 2,
    explanation: 'Düğümü geleneksel yollarla çözmek yerine kılıcıyla kesmesi, karmaşık problemlere karşı alışılmışın dışında (pratik ve cesur) çözümler üretmeyi simgeler.'
  },
  {
    title: 'Bağdat\'ın Düşüşü',
    passage: '1258 yılında Hülagü Han komutasındaki Moğol ordusu, o dönemin İslam ve bilim dünyasının kalbi olan Bağdat\'ı işgal etti. Yalnızca şehir yağmalanmadı; yüzyılların birikimini barındıran efsanevi kütüphane Beyt\'ül Hikme de yok edildi. Moğollar o kadar çok kitabı Dicle Nehri\'ne attılar ki, nehrin günlerce mürekkep renginde, simsiyah aktığı söylenir. Bu yıkım, sadece bir imparatorluğun çöküşü değil, aynı zamanda Doğu\'nun bilimsel ve kültürel altın çağının telafisi zor bir şekilde duraklamasıdır. Kültürel hafızanın yok edilmesi, bir medeniyete vurulabilecek en ölümcül darbedir.',
    questionStem: 'Yazar, Bağdat\'ın işgali ve kitapların nehre atılması olayından nasıl bir sonuç çıkarmaktadır?',
    options: [
      'Savaşlarda en az can kaybının siviller arasında yaşandığı',
      'Kültürel ve bilimsel hafızanın tahrip edilmesinin, medeniyetlerin çöküşündeki en ağır darbe olduğu',
      'Moğolların bilimsel eserleri kendi ülkelerine taşıyarak korudukları',
      'Bağdat\'ın sadece askeri bir merkez olduğu için hedef seçildiği'
    ],
    correct: 1,
    explanation: 'Nehrin mürekkep akması ve kitapların yok edilmesinin "telafisi zor bir duraklama" olarak verilmesi, kültürel hafızanın yıkımının en ölümcül darbe olduğunu anlatır.'
  },
  {
    title: 'Alan Turing ve Enigma',
    passage: 'II. Dünya Savaşı sırasında Nazi Almanyası, "Enigma" adını verdikleri bir makine ile tüm askeri iletişimini kırılması imkânsız görünen bir şifreleme sistemiyle yürütüyordu. Ancak İngiliz matematikçi Alan Turing ve ekibi, bu şifreleri çözebilmek için bir başka makine (ilk bilgisayarlardan biri) icat etti. Enigma\'nın şifresinin kırılması, Müttefiklere savaşın gidişatını önceden bilme avantajı sağladı ve tarihçilere göre savaşı en az iki yıl kısaltarak milyonlarca insanın hayatını kurtardı. Savaşın asıl galibi cephedeki tanklar değil, karanlık bir odada çalışan parlak bir zekâydı.',
    questionStem: 'Enigma makinesinin şifresinin kırılması olayının asıl önemi nedir?',
    options: [
      'Almanya\'nın teknolojik olarak İngiltere\'den geri olduğunu göstermesi',
      'Bilgisayar teknolojisinin yalnızca askeri amaçlarla kullanılabileceğini kanıtlaması',
      'Savaşların kaderinin sadece fiziksel güçle değil, teknolojik üstünlük ve zekâ ile belirlenebileceğini göstermesi',
      'Matematik biliminin diğer tüm bilim dallarından daha önemli olduğunu ispatlaması'
    ],
    correct: 2,
    explanation: 'Savaşın galibinin tanklar değil, karanlık bir odadaki parlak bir zekâ olduğu ifadesi, zekânın ve teknolojinin savaşların kaderini belirleyebileceğini gösterir.'
  },
  {
    title: 'Berlin Duvarı\'nın Yıkılışı',
    passage: 'Soğuk Savaş\'ın en somut sembolü olan Berlin Duvarı, 1961\'den 1989\'a kadar bir şehri, aileleri ve bir ulusu ikiye böldü. Betondan ve dikenli tellerden oluşan bu duvar, sadece Doğu ve Batı arasındaki ideolojik uçurumu değil, aynı zamanda insanların özgürlük arayışının nasıl hapsedilmeye çalışıldığını temsil ediyordu. 9 Kasım 1989\'da siyasi bir hata sonucu sınırların açılacağı duyurulduğunda, binlerce insan duvara akın etti ve balyozlarla duvarı kendi elleriyle yıktı. Bu olay, hiçbir fiziksel engelin, özgürleşmeye karar vermiş bir kitlenin iradesine karşı duramayacağının en güçlü kanıtıdır.',
    questionStem: 'Berlin Duvarı\'nın yıkılışıyla ilgili parçada vurgulanan asıl düşünce aşağıdakilerden hangisidir?',
    options: [
      'Siyasi kararların her zaman toplumun faydasına sonuçlandığı',
      'Fiziksel sınırların ve baskıcı yapıların, toplumların özgürlük iradesi karşısında dayanamayacağı',
      'Almanya\'nın ekonomik olarak Avrupa\'nın en güçlü ülkesi haline geldiği',
      'Soğuk Savaş dönemindeki teknolojik rekabetin uzay yarışını hızlandırdığı'
    ],
    correct: 1,
    explanation: 'Binlerce insanın balyozlarla duvarı yıkması, hiçbir fiziksel engelin özgürleşmeye karar vermiş bir halk iradesine karşı duramayacağını vurgular.'
  },
  {
    title: 'Boston Çay Partisi',
    passage: '1773 yılında Amerika\'daki kolonistler, İngiltere\'nin kendilerinden temsil hakkı vermeksizin ağır vergiler almasına isyan etti. Gecenin karanlığında Kızılderili kılığına giren bir grup, Boston Limanı\'na demirlemiş olan İngiliz gemilerine sızarak tonlarca çayı denize döktü. "Temsil yoksa vergi de yok" sloganıyla alevlenen bu eylem, basit bir vandallık değil, Amerikan Bağımsızlık Savaşı\'nı tetikleyen ilk büyük başkaldırıydı. Bu olay, adil olmayan bir ekonomik düzenin, yönetilenlerde nasıl radikal bir uyanış yaratabileceğinin tarihsel bir örneğidir.',
    questionStem: 'Boston Çay Partisi eyleminin temel gerekçesi ve sonucu parçada nasıl açıklanmıştır?',
    options: [
      'Yerli halkın haklarını korumak amacıyla yapılmış sembolik bir protestodur.',
      'Kolonistlerin çay tüketimini azaltmak için başlattığı bir sağlık kampanyasıdır.',
      'Temsil hakkı olmadan dayatılan haksız vergilere karşı çıkılmış ve bu durum bağımsızlık mücadelesini ateşlemiştir.',
      'İngiliz gemilerinin limanları kirletmesine karşı çevreci bir tepki olarak doğmuştur.'
    ],
    correct: 2,
    explanation: '"Temsil yoksa vergi de yok" sloganı eşliğinde yapılan eylemin, bağımsızlık savaşını tetikleyen ilk başkaldırı olduğu belirtilmiştir.'
  },
  {
    title: 'Diyojen ve Büyük İskender',
    passage: 'Antik Yunan\'da bir fıçının içinde yaşayan, dünya nimetlerini reddeden filozof Diyojen\'in şöhretini duyan Büyük İskender onu ziyarete gider. İskender, güneşlenen filozofa hürmetle yaklaşarak "Benden bir dileğin var mı?" diye sorar. Tüm Asya\'nın fatihi olan bu güçlü krala Diyojen\'in cevabı kısa ve sarsıcıdır: "Gölge etme, başka ihsan istemem." Bu tarihi diyalog, gerçek özgürlüğün ve iç huzurun, dış dünyadaki güçten, servetten ve iktidardan bağımsız olduğunu; en büyük otoritenin bile maddi arzulardan arınmış bir zihin karşısında aciz kalabileceğini gösterir.',
    questionStem: 'Diyojen\'in Büyük İskender\'e verdiği cevapla asıl anlatmak istediği nedir?',
    options: [
      'Filozofların devlet yönetimine karışmaktan her zaman kaçındığı',
      'Maddi güç ve iktidarın, dünyevi arzulardan arınmış bir zihin için hiçbir değer taşımadığı',
      'Büyük İskender\'in sandığı kadar güçlü bir hükümdar olmadığı',
      'Güneş ışığının insan sağlığı için her şeyden daha önemli olduğu'
    ],
    correct: 1,
    explanation: 'Asya\'nın fatihine "Gölge etme" diyen Diyojen, gerçek özgürlüğün güce veya servete bağlı olmadığını, bunlardan arınmış bir zihnin her şeyden üstün olduğunu ifade eder.'
  },
  {
    title: 'Magna Carta',
    passage: '1215 yılında İngiltere\'de Kral Yurtsuz John, soyluların baskısına dayanamayarak Magna Carta (Büyük Ferman) belgesini imzalamak zorunda kaldı. O güne kadar kralların yetkisi tanrısal ve sınırsız kabul edilirken, bu belgeyle kralın yetkileri ilk kez yazılı olarak kısıtlandı ve hukukun üstünlüğü ilkesi doğdu. Magna Carta, sadece dönemin İngiliz soylularına haklar veren bir metin değil; keyfi yönetime karşı hukukun, tek adam gücüne karşı anayasal düzenin zaferini müjdeleyen, modern demokrasilerin temel taşıdır.',
    questionStem: 'Magna Carta\'nın insanlık tarihindeki asıl önemi aşağıdakilerden hangisidir?',
    options: [
      'Soyluların halk üzerindeki baskısını tamamen ortadan kaldırması',
      'Mutlak ve sınırsız olan kraliyet gücünün hukukun üstünlüğü ilkesiyle sınırlandırılabileceğini göstermesi',
      'İngiltere\'nin ekonomik olarak kalkınmasını sağlayan ticari haklar içermesi',
      'Dini otoritelerin devlet yönetimindeki etkisini artırması'
    ],
    correct: 1,
    explanation: 'Belgeyle birlikte kralların sınırsız yetkisinin ilk kez yazılı olarak kısıtlanması ve hukukun üstünlüğünün doğması, anayasal düzenin temel taşı olmasını sağlamıştır.'
  },
  {
    title: 'Çiçek Hastalığı ve İnkalar',
    passage: 'İspanyol fatih Francisco Pizarro, 16. yüzyılda küçük bir birlikle İnka İmparatorluğu\'na saldırdığında, bu devasa medeniyetin sadece çelik kılıçlar ve tüfeklerle yıkıldığı sanılır. Oysa İnkaların asıl katili, Avrupalıların yanlarında bilmeden getirdikleri görünmez bir silahtı: Çiçek hastalığı. Bağışıklık sistemleri bu yeni virüse tamamen yabancı olan yerli halk, savaş meydanından çok yataklarında kırıldı. İnkaların çöküşü, insanlık tarihinde biyolojik faktörlerin, en güçlü ordulardan bile daha yıkıcı bir fetih aracı olabildiğini trajik bir şekilde kanıtlar.',
    questionStem: 'İnka İmparatorluğu\'nun çöküşüyle ilgili parçada asıl vurgulanan faktör nedir?',
    options: [
      'İspanyolların kullandığı ateşli silahların teknolojik üstünlüğü',
      'İnka ordusunun savaş taktikleri konusunda yetersiz kalması',
      'Avrupalıların taşıdığı yabancı hastalıkların (biyolojik etkenlerin), askeri güçten çok daha büyük bir yıkıma neden olması',
      'İnkaların kendi iç savaşları yüzünden zayıf düşerek kolayca teslim olmaları'
    ],
    correct: 2,
    explanation: 'İnkaların asıl katilinin çelik kılıçlar değil, bağışıklıklarının olmadığı çiçek hastalığı olması; biyolojik etkenlerin ordulardan daha yıkıcı olduğunu gösterir.'
  },
  {
    title: 'Marco Polo\'nun Seyahatnamesi',
    passage: 'Venedikli tüccar Marco Polo, 13. yüzyılda Asya\'nın derinliklerine, Kubilay Han\'ın sarayına kadar uzanan ve yıllar süren bir yolculuk yaptı. Döndüğünde hapishanede geçirdiği günlerde bu maceralarını yazıya döktü. Eserinde anlattığı kâğıt para, posta teşkilatı ve devasa kömür madenleri, o dönemki Avrupalılara birer peri masalı gibi geldi ve ona yalancı dediler. Ancak bu kitap, yıllar sonra Kristof Kolomb dâhil birçok kâşife ilham kaynağı oldu. Bir dönemin inanılmayan "yalanları", gelecek nesillerin dünyayı keşfetmesini sağlayan en değerli rehberlere dönüşebilir.',
    questionStem: 'Marco Polo\'nun eseri ve yaşadıkları üzerinden ulaşılabilecek temel yargı nedir?',
    options: [
      'Tüccarların asıl amacının farklı kültürleri keşfetmek olduğu',
      'Toplumların, kendi algı sınırlarını aşan yeni bilgilere başlangıçta direnç gösterse de, bu vizyonun geleceği şekillendirebileceği',
      'Asya medeniyetinin teknolojik olarak Avrupa\'dan her zaman üstün olduğu',
      'Seyahatnamelerin sadece abartılı kurgulardan ibaret olduğu'
    ],
    correct: 1,
    explanation: 'Anlattıklarına başlangıçta "yalan" denmesi (direnç gösterilmesi) ancak sonradan Kolomb gibi kâşiflere ilham olması, bu bilgilerin geleceği şekillendirebileceğini gösterir.'
  },
  {
    title: 'Bastille Baskını',
    passage: '14 Temmuz 1789\'da öfkeli Paris halkı, kraliyetin mutlakiyetçi baskısının sembolü olan Bastille Hapishanesi\'ni bastı. İçeride sadece yedi mahkûm bulunmasına rağmen bu olay askeri değil, psikolojik bir zaferdi. Halk, yüzyıllardır korktuğu ve boyun eğdiği monarşinin aşılmaz kalesini yıkarak, egemenliğin asıl sahibinin kendisi olduğunu tüm Avrupa\'ya ilan etti. Bastille baskını, fiziksel bir binanın yıkılışından çok, korku duvarlarının ve feodal ayrıcalıkların insan zihninde yıkılışının sembolüdür.',
    questionStem: 'Bastille baskınının Fransız Devrimi\'ndeki asıl rolü parçada nasıl açıklanmıştır?',
    options: [
      'Hapishanedeki binlerce siyasi suçlunun serbest bırakılmasıyla askeri gücün artması',
      'Monarşinin baskıcı sembolünün yıkılmasıyla halkın kendi gücünü fark edip korku eşiğini aşması',
      'Kraliyet ailesinin hapishaneye saklanmasını engellemek için stratejik bir adım olması',
      'Avrupa\'daki diğer ülkelerden askeri destek alınmasını sağlaması'
    ],
    correct: 1,
    explanation: 'Olayın askeri değil psikolojik bir zafer olduğu, halkın korktuğu kalesini yıkarak korku duvarlarını aştığı ve egemenliği eline aldığı belirtilmiştir.'
  },
  {
    title: 'Sanayi Devrimi ve Çocuk İşçiler',
    passage: '18. yüzyılda İngiltere\'de başlayan Sanayi Devrimi, insanlık için üretimi artırıp modern dünyanın kapılarını araladı. Ancak bu madalyonun karanlık bir yüzü vardı: Çocuk işçiler. Fabrikaların dar makinelerinin arasına girebildikleri ve daha ucuza çalıştırıldıkları için binlerce çocuk, eğitim hakkından mahrum kalarak tehlikeli ve acımasız koşullarda köle gibi çalıştırıldı. Sanayileşmenin göklere yükselen o gri dumanı, aslında bir neslin çalınan çocukluğunun ve vahşi kapitalizmin sömürü üzerine kurulan acımasız temelinin bir göstergesiydi.',
    questionStem: 'Yazar, Sanayi Devrimi\'ni değerlendirirken asıl olarak neyi eleştirmektedir?',
    options: [
      'Makinelerin insan gücünün yerini almasıyla işsizliğin artmasını',
      'Teknolojik ilerleme ve ekonomik büyümenin, çocukların sömürülmesi gibi ağır bir insani bedel (etik dışı) üzerine inşa edilmesini',
      'İngiltere\'nin bu devrimi diğer ülkelerle paylaşmakta gecikmesini',
      'Kırsal kesimden şehirlere göçün hızlanmasıyla çarpık kentleşmenin başlamasını'
    ],
    correct: 1,
    explanation: 'Sanayi devriminin üretimi artırmasına karşın (ekonomik büyüme), bunun çocukların köle gibi çalıştırılması ve eğitim haklarının çalınması (insani bedel) pahasına yapılmasını eleştirir.'
  },
  {
    title: 'İspanyol Gribi Sansürü',
    passage: 'Birinci Dünya Savaşı bitmek üzereyken ortaya çıkan İspanyol Gribi, savaşın kendisinden çok daha fazla can aldı. Savaşan ülkeler, askerlerin moralini bozmamak için basına sansür uyguladı ve salgını gizledi. Sansüre katılmayan tek ülke tarafsız İspanya olduğu için hastalık tarihe "İspanyol Gribi" olarak geçti. Cephelerdeki dar siperler ve kıtalararası asker hareketliliği, virüsün ölümcül bir hızla dünyaya yayılmasına neden oldu. Bu pandemi, savaşın yarattığı kaotik ortamın ve devletlerin gerçeği gizleme politikasının bir felaketi nasıl küresel bir kâbusa çevirdiğinin kanıtıdır.',
    questionStem: 'İspanyol Gribi salgınının yıkıcı boyutlara ulaşmasında parçaya göre hangi faktör etkili olmuştur?',
    options: [
      'Veba hastalığından daha bulaşıcı bir mikrop türü olması',
      'Savaş ortamının getirdiği hareketlilik ve devletlerin uyguladığı sansür (gerçeği gizleme) politikaları',
      'İspanya\'nın hastalığı diğer ülkelere bilerek yayması',
      'Savaş döneminde tıbbi ilaç üretiminin tamamen durdurulmuş olması'
    ],
    correct: 1,
    explanation: 'Parçada devletlerin askerlerin moralini bozmamak için salgını gizlediği (sansür) ve asker hareketliliğinin hastalığı yaydığı vurgulanmıştır.'
  },
  {
    title: 'Sümerler ve Yazının İcadı',
    passage: 'Tarihte yazının icadı, şairlerin duygularını ifade etmesi veya kralların destanlar yazdırması amacıyla olmadı. Sümerler yazıyı, tapınaklara getirilen tahıl çuvallarının, hayvanların ve vergilerin kaydını tutmak için, tamamen ekonomik ve bürokratik bir ihtiyaçtan icat ettiler. Kil tabletler üzerine çizilen o ilk çivi yazısı işaretleri, aslında muhasebe kayıtlarıydı. İnsanlık tarihinin en büyük kültürel devrimi olan yazının kökeninde entelektüel bir arayış değil, karmaşıklaşan toplumsal düzenin yarattığı pragmatik bir zorunluluk yatar.',
    questionStem: 'Yazının icadıyla ilgili parçada vurgulanan asıl düşünce nedir?',
    options: [
      'Edebi eserler yaratmak için bilinçli bir sanatsal çabayla ortaya çıktığı',
      'Medeniyetlerin dini inançlarını gelecek nesillere aktarma isteğinden doğduğu',
      'Gelişen ve karmaşıklaşan ekonomik ve idari hayatın (muhasebe) doğurduğu zorunlu ve pratik bir ihtiyaç sonucu bulunduğu',
      'Sadece kralların ve rahiplerin kullanabildiği gizli bir şifreleme sistemi olduğu'
    ],
    correct: 2,
    explanation: 'Yazının edebi veya entelektüel bir amaçla değil, tahıl çuvallarının kaydını tutmak gibi ekonomik/bürokratik bir zorunlulukla (pragmatik) bulunduğu anlatılır.'
  },
  {
    title: 'Pearl Harbor Baskını',
    passage: '7 Aralık 1941 sabahı Japon İmparatorluğu\'nun Hawaii\'deki Amerikan donanma üssü Pearl Harbor\'a düzenlediği ani hava saldırısı, savaş tarihinin en büyük stratejik kumarıydı. Japonya, Amerikan Pasifik Filosunu felç ederek Asya\'da rahatça yayılmayı hedeflemişti. Baskın kısa vadede başarılı olsa da, o güne kadar savaştan uzak duran ve "uyuyan bir dev" olan Amerika\'yı tam kalbinden öfkelendirerek İkinci Dünya Savaşı\'na aktif olarak girmesine neden oldu. Taktiksel bir zafer gibi görünen bu saldırı, Japonya\'nın kendi sonunu getiren stratejik bir intihardı.',
    questionStem: 'Yazar, Pearl Harbor baskınını genel olarak nasıl değerlendirmektedir?',
    options: [
      'Amerikan istihbaratının tarihi bir başarısızlığı olarak',
      'Kısa vadede askeri bir başarı sağlasa da uzun vadede ülkenin kendi yıkımını hazırlayan ölümcül bir stratejik hata olarak',
      'Savaş uçaklarının gemilere karşı üstünlüğünü kanıtlayan bir teknoloji denemesi olarak',
      'Japonya\'nın ekonomik krizden çıkmak için yaptığı zorunlu bir hamle olarak'
    ],
    correct: 1,
    explanation: 'Baskının başta başarılı olduğu ancak uyuyan devi (Amerika\'yı) savaşa sokarak Japonya\'nın kendi sonunu getirdiği (stratejik intihar) belirtilmiştir.'
  },
  {
    title: 'Çin Seddi',
    passage: 'Dünyanın en büyük savunma projesi olan Çin Seddi, göçebe boyların (özellikle Hunların) saldırılarını engellemek amacıyla yapıldı. Milyonlarca işçinin hayatına mal olan binlerce kilometrelik bu duvar, fiziksel bir engel olmanın ötesinde bir anlam taşıyordu. Çin İmparatorluğu bu duvarla sadece düşmanlarını dışarıda bırakmıyor, aynı zamanda kendi halkını ve medeniyetini "barbar" olarak gördüğü dış dünyadan izole ediyordu. Bir savunma aracı olarak ne kadar işe yaradığı tartışılsa da Çin Seddi, içe kapanma ve değişime direnme psikolojisinin taştan bir anıtıdır.',
    questionStem: 'Parçada Çin Seddi ile ilgili savunulan asıl görüş nedir?',
    options: [
      'Sadece askeri amaçlarla yapılmış kusursuz ve aşılamaz bir güvenlik kalkanı olduğu',
      'Göçebe toplulukların yerleşik hayata geçmesini hızlandırdığı',
      'Askeri bir savunma hattı olmasının yanı sıra, kültürel bir izolasyonun ve içe kapanma zihniyetinin sembolü olduğu',
      'Dünya ticaret yollarının güvenliğini sağlamak için inşa edildiği'
    ],
    correct: 2,
    explanation: 'Duvarın sadece düşmanları değil, dış dünyayı dışarıda bırakarak halkı izole ettiği ve içe kapanma zihniyetinin bir anıtı olduğu vurgulanmıştır.'
  },
  {
    title: 'Giyotin',
    passage: 'Fransız Devrimi sırasında Dr. Joseph Guillotin tarafından "insancıl ve eşitlikçi bir idam aracı" olarak önerilen giyotin, kısa sürede Terör Dönemi\'nin kanlı sembolü oldu. Eskiden idamlar kişinin soylu veya avam olmasına göre farklı ve genellikle acı verici şekillerde yapılırken, giyotin ölümü sınıf farkı gözetmeksizin herkes için standart ve saniyeler süren mekanik bir işleme dönüştürdü. Ancak bu soğuk mekanikleşme, adaleti değil; devletin adam öldürme işini bir fabrika bandı sıradanlığına ve duyarsızlığına indirgeyen dehşet verici bir verimliliği temsil ediyordu.',
    questionStem: 'Yazar, giyotinin Fransız Devrimi\'ndeki rolünü nasıl yorumlamaktadır?',
    options: [
      'İdamları daha acısız hale getirerek insan haklarına katkı sağladığını',
      'Sınıf eşitliği sağlama iddiasıyla ortaya çıkmasına rağmen, insan hayatını ve ölümü değersizleştiren sıradan ve mekanik bir şiddet aracına dönüştüğünü',
      'Sadece soyluları cezalandırmak için kullanılan özel bir araç olduğunu',
      'Devrim mahkemelerinin iş yükünü azaltarak daha adil kararlar verilmesini sağladığını'
    ],
    correct: 1,
    explanation: 'Sınıf farkını kaldırma amacıyla gelse de, ölümü fabrika bandı sıradanlığına (mekanikleşmeye) indirgediği ve insan hayatını değersizleştirdiği savunulmuştur.'
  },
  {
    title: 'Spartalı Leonidas ve Termopylae',
    passage: 'MÖ 480 yılında Kral Leonidas komutasındaki 300 Spartalı asker, devasa Pers ordusunu Termopylae Geçidi\'nde günlerce durdurdu. Sayıca çok az olmalarına rağmen coğrafyanın avantajını ve askeri disiplinlerini kullanarak yenilmez denilen Persleri püskürttüler. İhanet sonucu kuşatılıp hepsi ölene dek savaşsalar da, bu direniş tüm Yunan şehir devletlerine zaman kazandırdı ve cesaret verdi. Termopylae sadece bir savaş değil; teslimiyetin mantıklı göründüğü anlarda bile, onur ve vatan için gösterilen sarsılmaz fedakârlığın tarihteki en epik destanıdır.',
    questionStem: 'Termopylae Muharebesi\'nin tarihe geçen asıl önemi parçada nasıl ifade edilmiştir?',
    options: [
      'Yunanlıların coğrafya bilgisinin Perslerden daha iyi olduğunu göstermesi',
      'Askeri disiplinin silah teknolojisinden daha önemli olduğunu kanıtlaması',
      'Kesin yenilgi anında bile gösterilen cesaretin ve fedakârlığın, bütün bir milletin moralini ve kaderini değiştirebilecek efsanevi bir direniş olması',
      'Savaşlarda casusların ve ihanetlerin belirleyici rol oynadığını ortaya koyması'
    ],
    correct: 2,
    explanation: 'Kuşatılıp ölmelerine rağmen (kesin yenilgi anı) gösterilen sarsılmaz direnişin diğer Yunan şehirlerine zaman ve cesaret kazandırdığı vurgulanmıştır.'
  },
  {
    title: 'Macellan Bulutları',
    passage: 'İlk denizciler yön bulmak için gökyüzüne bakmak zorundaydı. Macellan güney yarımküreye yelken açtığında, Avrupalıların o güne kadar hiç görmediği iki puslu galaksi fark etti. Günümüzde "Macellan Bulutları" olarak bilinen bu cüce galaksiler, aslında denizcilerin yolunu aydınlatmaktan çok daha fazlasını yaptı; insanoğlunun evrenin sınırlarına dair dar algısını yıktı. Bilinmeyen sularda cesaretle ilerleyen denizciler, sadece yeni kıtalar değil, kafalarını kaldırıp gökyüzüne baktıklarında yepyeni evrenler de keşfettiler. Keşif, sadece ileriye değil, aynı zamanda yukarıya bakabilmektir.',
    questionStem: 'Parçada "Macellan Bulutları"nın keşfi üzerinden verilen asıl mesaj nedir?',
    options: [
      'Denizciliğin astronomi biliminden daha hızlı geliştiği',
      'Karanlıkta yön bulmanın tek yolunun yıldızları izlemek olduğu',
      'Cesaretle yapılan keşif yolculuklarının, insanın sadece coğrafi değil, evrensel (vizyoner) algısını da genişlettiği',
      'Güney yarımkürenin astronomik gözlemler için kuzeyden daha elverişli olduğu'
    ],
    correct: 2,
    explanation: 'Denizcilerin yeni galaksiler bularak evrensel sınırları yıktığı, yani keşfin sadece coğrafi (ileri) değil, vizyoner (yukarı/evrensel) bir algıyı da genişlettiği belirtilmiştir.'
  }
];

// 2. MAKİNE
export const tarihParagrafSorulari2: TarihParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES_2.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES_2[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-tarih2-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
const PARAGRAPH_THEMES_3 = [
  {
    title: 'Sokrates\'in Baldıran Zehri',
    passage: 'MÖ 399 yılında Atina mahkemesi, "gençlerin ahlakını bozmak" ve "tanrılara inanmamak" suçlamasıyla filozof Sokrates\'i ölüme mahkûm etti. Öğrencileri ona kaçması için rüşvet ve imkân sunsa da o, "Bedenim kaçabilir ama savunduğum ilkeler Atina\'da kalırsa yaşamanın ne anlamı var?" diyerek bunu reddetti ve baldıran zehrini kendi elleriyle içti. Sokrates\'in ölümü, bir insanın fiziksel varlığını feda etme pahasına kendi doğrusundan ve fikir namusundan taviz vermeyişinin tarihteki en asil ve trajik sembolüdür.',
    questionStem: 'Bu metne göre Sokrates\'in kaçmayı reddetmesinin temel nedeni aşağıdakilerden hangisidir?',
    options: [
      'Atina dışındaki şehirlerde yaşamanın çok daha tehlikeli ve zor olduğuna inanması',
      'Yaşlılığından dolayı kaçış yolculuğunun fiziksel zorluklarına katlanmak istememesi',
      'Hayatta kalmak uğruna inançlarından ve felsefi ilkelerinden vazgeçmeyi onursuzluk olarak görmesi',
      'Mahkemenin verdiği ölüm cezasının son anda halk tarafından affedileceğini umması'
    ],
    correct: 2,
    explanation: 'Sokrates\'in "Bedenim kaçabilir ama ilkelerim kalırsa yaşamanın ne anlamı var?" sözü, inançlarından taviz vermek yerine onurlu bir ölümü seçtiğini açıkça göstermektedir.'
  },
  {
    title: 'Gutenberg ve Matbaa Devrimi',
    passage: '15. yüzyıla kadar Avrupa\'da kitaplar rahipler tarafından elle yazılıyordu ve sadece çok zenginlerin ulaşabildiği nadide lükslerdi. Johannes Gutenberg, hareketli metal harflerle çalışan matbaayı icat ettiğinde sadece bir makine yapmamış, Avrupa\'nın kaderini değiştirmişti. İncil\'in seri üretilip halkın kendi dilinde okumaya başlamasıyla kilisenin bilgi üzerindeki tekelini yıktı. Rönesans, Reform ve Bilimsel Devrim\'in yolu, Gutenberg\'in o gürültülü ve mürekkepli makinesinden çıkan kâğıtlarla döşenmiştir.',
    questionStem: 'Yazar, Gutenberg\'in icadının asıl önemini hangi ifadeyle vurgulamaktadır?',
    options: [
      'Kâğıt üretim teknolojilerini geliştirerek ticari bir canlanma yaratmasıyla',
      'Avrupa dillerinin dilbilgisi kurallarını standart bir hale getirmesiyle',
      'Bilgiyi seçkinlerin tekelinden çıkarıp kitlelere ulaştırarak toplumsal ve zihinsel devrimleri tetiklemesiyle',
      'İşsiz kalan rahiplere kilise dışında yeni istihdam alanları yaratmasıyla'
    ],
    correct: 2,
    explanation: 'Matbaanın kilisenin bilgi tekelini yıktığı ve Rönesans/Reform gibi devrimlerin yolunu açtığı belirtilerek bilginin demokratikleşmesi vurgulanmıştır.'
  },
  {
    title: 'Göbeklitepe: Tarihin Sıfır Noktası',
    passage: 'Şanlıurfa yakınlarındaki Göbeklitepe keşfedilene kadar tarihçiler, insanoğlunun önce tarımı icat edip yerleşik hayata geçtiğini, sonra da ibadet etmek için tapınaklar inşa ettiğini sanıyordu. Ancak 12 bin yıllık bu devasa ve karmaşık tapınak kompleksi, inşa edildiği dönemde insanların hala avcı-toplayıcı olduğunu kanıtladı. T sütunlara kazınmış semboller, insanların yerleşik hayata geçmesinin asıl sebebinin tarım değil, inançları etrafında toplanma ve devasa tapınaklar inşa etme güdüsü olduğunu gösterdi. Göbeklitepe, bildiğimiz tarih kitaplarının ilk sayfasını kökünden değiştirmiştir.',
    questionStem: 'Göbeklitepe\'nin keşfinin tarih bilimi üzerindeki en büyük etkisi nedir?',
    options: [
      'Anadolu\'nun dünyanın en eski tarım merkezi olduğunu kesin olarak ispatlaması',
      'Avcı-toplayıcı insanların mimari yapılar inşa edemeyeceği teorisini güçlendirmesi',
      'İnsanoğlunun yerleşik hayata geçişinde tarımın değil, inanç ve tapınak inşa etme motivasyonunun öncelikli olduğunu kanıtlaması',
      'T sütunların dünyadaki ilk yazılı metinler olduğunu ortaya çıkarması'
    ],
    correct: 2,
    explanation: 'Parçada Göbeklitepe\'nin, insanların önce tarımı bulduğu tezini çürüterek, yerleşik hayatın asıl sebebinin inanç ve tapınak inşası olduğunu gösterdiği ifade edilmiştir.'
  },
  {
    title: 'Marie Curie\'nin Fedakârlığı',
    passage: 'Radyoaktivite üzerine yaptığı çalışmalarla iki farklı alanda Nobel Ödülü kazanan ilk insan olan Marie Curie, bilime olan tutkusunun bedelini en ağır şekilde ödemiştir. Radyum elementini keşfetmek için yıllarca yalıtımsız laboratuvarlarda, önlüksüz bir şekilde radyoaktif maddelerle çalıştı. Not defterleri bugün bile o kadar radyasyon yaymaktadır ki, ancak kurşun kaplı kasalarda saklanabilmekte ve özel giysilerle incelenebilmektedir. Marie Curie\'nin hayatı, bilimsel ilerlemenin bazen kişisel sağlığın ve varlığın sessizce feda edilmesiyle mümkün olduğunun en asil kanıtıdır.',
    questionStem: 'Bu metinden Marie Curie ile ilgili çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?',
    options: [
      'Çalışmalarının tehlikelerini önceden fark edemediği için kazara hastalandığı',
      'İnsanlığın bilgi birikimini ileriye taşımak uğruna kendi sağlığını ve hayatını bilinçli ve adanmış bir şekilde feda ettiği',
      'Nobel ödülünü aldıktan sonra laboratuvar çalışmalarını tamamen bıraktığı',
      'Bilim dünyasında kadınların desteklenmesi için kampanyalar yürüttüğü'
    ],
    correct: 1,
    explanation: 'Kendi not defterlerinin bile hala radyasyon yaydığı ve bilime tutkusu yüzünden sağlığını feda ettiği anlatılarak onun bilimsel adanmışlığı vurgulanmıştır.'
  },
  {
    title: 'Nikola Tesla ve Alternatif Akım',
    passage: 'Günümüzde kullandığımız elektrik şebekelerinin temelini atan Nikola Tesla, zihni yüzyıllar ötesinde yaşayan bir dâhiydi. Ancak onun en büyük zayıflığı, bilimsel vizyonunu ticari bir kâra dönüştürememesiydi. Thomas Edison gibi pratik tüccarların aksine Tesla, elektriği kablosuz olarak tüm dünyaya bedava dağıtmayı hayal ediyordu. Yatırımcılar bu fikirden kâr edemeyeceklerini anladıklarında desteklerini çektiler. Hayatının son yıllarını borç içinde, otel odalarında güvercinleri besleyerek geçiren Tesla\'nın hikâyesi, vahşi kapitalizmin saf dehayla nasıl acımasızca alay ettiğinin özetidir.',
    questionStem: 'Parçada Nikola Tesla\'nın başarısızlığının (veya yalnızlığının) temel nedeni olarak ne gösterilmektedir?',
    options: [
      'Geliştirdiği teknolojilerin dönemine göre çok ilkel ve yetersiz kalması',
      'Diğer bilim insanlarının onun icatlarını kıskanarak ona engel olmaları',
      'Bilimsel ideallerini ve insanlığa fayda sağlama vizyonunu, dönemin ticari ve kapitalist çıkarlarına uyarlayamaması',
      'İletişim becerilerinin zayıf olması nedeniyle destekçilerini ikna edememesi'
    ],
    correct: 2,
    explanation: 'Elektriği bedava dağıtma hayali nedeniyle yatırımcıların desteğini çekmesi ve Tesla\'nın ticari kâr güdememesi (kapitalizme yenilmesi) temel neden olarak verilmiştir.'
  },
  {
    title: 'Kadeş: Tarihin İlk Barışı',
    passage: 'MÖ 1274 yılında Mısır Firavunu II. Ramses ile Hitit Kralı Muvatalli arasında gerçekleşen Kadeş Savaşı, binlerce savaş arabasının çarpıştığı antik çağın en büyük meydan muharebelerinden biriydi. Ancak bu savaşın asıl önemi kanlı çarpışmalarda değil, savaşın ardından gümüş tabletlere kazınan Kadeş Antlaşması\'nda yatar. Tarafların birbirine üstünlük kuramaması sonucu imzalanan bu belge, tarihte bilinen en eski "eşitlik ilkesine dayalı" yazılı barış antlaşmasıdır. Kadeş, savaşların sadece kılıçlarla kazanılmadığını, diplomasinin de en az askerlik kadar hayati bir devlet sanatı olduğunu kanıtlar.',
    questionStem: 'Kadeş Antlaşması\'nın dünya tarihindeki özgünlüğü ve önemi nedir?',
    options: [
      'Mısır İmparatorluğu\'nun Hititler üzerindeki kesin egemenliğini tescillemesi',
      'Kâğıt üzerine yazılmış ilk diplomatik metin olma özelliğini taşıması',
      'Tarafların birbirini yok edemediği bir ortamda diplomasi ve eşitlik ilkesiyle oluşturulan tarihin ilk yazılı barış antlaşması olması',
      'Savaş arabalarının kullanımını uluslararası alanda yasaklayan ilk belge olması'
    ],
    correct: 2,
    explanation: 'Metinde Kadeş\'in asıl öneminin, eşitlik ilkesine dayalı tarihin en eski yazılı barış antlaşması ve diplomasinin gücü olduğu belirtilmiştir.'
  },
  {
    title: 'Hannibal ve Alp Dağları',
    passage: 'MÖ 218 yılında Kartacalı komutan Hannibal, Roma\'ya saldırmak için kimsenin aklına gelmeyecek bir rota seçti: Devasa ordusu ve savaş filleriyle birlikte, aşılmaz denilen karlı Alp Dağları\'nı geçmek. Buzlu uçurumlar, dondurucu soğuklar ve dağ kabilelerinin saldırıları ordusunun yarısını yok etti. Ancak İtalya\'ya inmeyi başardığında, Romalılar karşılarında o karlı zirvelerden inen askerleri ve filleri görünce psikolojik olarak darmadağın oldular. Hannibal\'ın bu hamlesi, stratejide sürpriz unsurunun ve imkânsızı denemenin, düşmanın kılıcından bile daha keskin bir silah olduğunu gösterir.',
    questionStem: 'Hannibal\'ın Alp Dağları\'nı geçme stratejisinin Roma ordusu üzerindeki asıl etkisi nedir?',
    options: [
      'Romalıların dağ savaşları konusunda eksik olduklarını fark etmelerini sağlaması',
      'Savaş filleri sayesinde Roma ordusunun asker sayısını kolayca eşitlemesi',
      'Aşılmaz denilen bir engelin aşılarak gelinmesiyle Roma ordusunda derin bir psikolojik yıkım (sürpriz ve şok etkisi) yaratması',
      'Romalıların kendi topraklarında savaşmanın avantajlarını sonuna kadar kullanmalarını engellemesi'
    ],
    correct: 2,
    explanation: 'Aşılmaz denilen dağları filleriyle aşarak aniden karşılarına çıkmasının, Romalıları psikolojik olarak darmadağın ettiği (sürpriz unsurunun etkisi) vurgulanmıştır.'
  },
  {
    title: 'Rosalind Franklin\'in Çalınan Keşfi',
    passage: 'Bugün DNA\'nın çift sarmallı yapısını keşfedenler olarak James Watson ve Francis Crick bilinir ve bu keşifleriyle Nobel Ödülü almışlardır. Ancak bu keşfin arkasındaki asıl mimar, X-ışını kristalografisi ile DNA\'nın o meşhur "Fotoğraf 51" adlı yapısını görüntüleyen Rosalind Franklin\'dir. Franklin\'in çalışması, onun izni ve haberi olmadan Watson ve Crick\'e gösterilmiş ve teorilerini kurmaları sağlanmıştır. Kansere yenik düşerek genç yaşta ölen Franklin, yaşamı boyunca hakkı olan saygıyı görememiştir. Bu olay, bilim tarihinin bazen kimin bulduğuyla değil, kimin sesi daha gür çıkıp sahiplendiğiyle yazıldığının kanıtıdır.',
    questionStem: 'Parçaya göre Rosalind Franklin ile ilgili vurgulanan adaletsizlik nedir?',
    options: [
      'Yaptığı keşfin önemini kavrayamayıp çalışmalarını yarıda bırakması',
      'Nobel ödülünü sadece kadın olduğu için kasıtlı olarak reddetmesi',
      'DNA yapısını aydınlatan asıl görsel kanıtı bulmasına rağmen, çalışmasının izinsiz kullanılması ve bilimsel başarısının başkalarına mal edilmesi',
      'Çalışmalarında kullandığı X-ışınlarının sağlığını bozması konusunda uyarılmaması'
    ],
    correct: 2,
    explanation: 'Franklin\'in "Fotoğraf 51" ile asıl görsel kanıtı bulmasına rağmen çalışmasının ondan habersiz alınıp ödülün başkalarına (Watson ve Crick) verilmesi adaletsizliğin özüdür.'
  },
  {
    title: 'Kristof Kolomb\'un Yanılgısı',
    passage: '1492 yılında Kristof Kolomb, sürekli batıya giderek zenginliklerle dolu Hindistan\'a ulaşacağını iddia edip yola çıktığında matematiksel olarak büyük bir hata yapmıştı; dünyanın çevresini olduğundan çok daha küçük hesaplamıştı. Eğer Karayipler\'deki adalara çarpmasaydı, mürettebatı erzak yetersizliğinden okyanusun ortasında ölecekti. Ölene kadar yeni bir kıta bulduğunu kabul etmeyen ve orayı Asya sanan Kolomb\'un hikâyesi oldukça ironiktir. Bazen insanlık tarihindeki en büyük keşifler, kusursuz bir planlamanın değil, devasa bir yanılgının ve kör bir şansın eseri olabilir.',
    questionStem: 'Kolomb\'un Amerika kıtasını keşif süreciyle ilgili yazarın asıl anlatmak istediği nedir?',
    options: [
      'Denizcilik tecrübesinin matematiksel hesaplamalardan daha değerli olduğu',
      'Coğrafi keşiflerin her zaman hükümdarların zorlamasıyla gerçekleştiği',
      'Büyük tarihi dönüm noktalarının bazen doğru hesapların değil, tamamen hatalı öngörülerin ve tesadüflerin bir sonucu olarak ortaya çıkabildiği',
      'Yeni kıtalara ulaşmanın tek yolunun sürekli aynı yöne gitmek olduğu'
    ],
    correct: 2,
    explanation: 'Dünyayı küçük hesaplaması (matematiksel hata) ve ölene dek Asya sanması, en büyük keşiflerin bazen kusursuz plan değil, devasa bir yanılgı ve şans eseri olduğunu kanıtlar.'
  },
  {
    title: 'Büyük Londra Yangını (1666)',
    passage: '1666 yılında bir fırıncı dükkânında başlayan küçük bir kıvılcım, ahşap evlerin iç içe geçtiği ve sokakların çöp dolu olduğu Orta Çağ Londra\'sını günlerce kül etti. Şehrin %80\'inden fazlası harabeye döndü, ancak bu devasa felaket aynı zamanda şehrin kurtuluşu oldu. Yangın, şehri yıllardır kırıp geçiren veba salgınını taşıyan fareleri ve pireleri de yok etmişti. Ayrıca yeniden inşa sürecinde tuğla ve taş binalar zorunlu kılındı, sokaklar genişletildi. Büyük Londra Yangını, felaketlerin bazen çürümüş eski yapıları temizlemek ve modern bir gelecek inşa etmek için acımasız ama gerekli bir alev olduğunu gösterir.',
    questionStem: 'Parçaya göre Büyük Londra Yangını\'nın şehir üzerindeki "olumlu" etkileri arasında hangisi yer almaz?',
    options: [
      'Şehrin altyapısının ve mimarisinin daha modern ve güvenli (tuğla/taş) hale getirilmesi',
      'Dar sokakların genişletilerek olası yeni yangınlara karşı tedbir alınması',
      'Yangının, vebaya neden olan canlıları yok ederek salgının bitmesine yardımcı olması',
      'Ahşap bina üretiminde kullanılan ormanların kesilmesinin tamamen yasaklanması'
    ],
    correct: 3,
    explanation: 'Ormanların kesilmesinin yasaklandığına dair metinde hiçbir bilgi yoktur. Diğer şıklar yangının olumlu sonuçları olarak paragrafta geçmektedir.'
  },
  {
    title: 'Mimar Sinan\'ın Bekleyişi',
    passage: 'Kanuni Sultan Süleyman, kendi adına yaptıracağı o muazzam Süleymaniye Camii\'nin inşaatı sırasında Mimar Sinan\'ın temelleri atıp aylarca hiçbir şey yapmadan beklemesine çok sinirlenmiştir. Hatta dedikodular, Sinan\'ın aklını yitirdiğini söylüyordu. Oysa büyük usta, devasa kubbenin ve minarelerin ağırlığını taşıyacak olan temelin oturmasını, zeminin sıkışmasını bekliyordu. Sinan\'ın o sabırlı bekleyişi sayesinde Süleymaniye, İstanbul\'daki sayısız depreme rağmen yüzyıllardır ayakta kalmıştır. Gerçek kalıcılık, hızlı yükselmekte değil; görünmeyen temele ne kadar sabır ve zaman yatırıldığında gizlidir.',
    questionStem: 'Mimar Sinan\'ın Süleymaniye Camii inşasındaki tutumu hangi kavramla en iyi açıklanır?',
    options: [
      'Gelenekçilik ve estetik kaygı',
      'Acelecilik ve hırs',
      'Sabır, öngörü ve sağlamlık (bilimsellik)',
      'İtaat ve tevazu'
    ],
    correct: 2,
    explanation: 'Temelin oturması için Padişahın öfkesine rağmen aylarca beklemesi, onun sabrını, öngörüsünü ve yapının sağlamlığına verdiği bilimsel önemi gösterir.'
  },
  {
    title: 'Leif Erikson ve Unutulan Keşif',
    passage: 'Tarih kitapları Amerika\'yı keşfeden kişi olarak Kristof Kolomb\'u yazar. Oysa Kolomb\'dan tam 500 yıl önce, İzlandalı bir Viking olan Leif Erikson ve mürettebatı Kuzey Amerika (Kanada) kıyılarına ulaşmış ve orada "Vinland" adını verdikleri bir yerleşim kurmuşlardı. Ancak Vikinglerin bu keşfi Avrupa\'nın geri kalanında bir yankı uyandırmadı, yazılı kültüre güçlü bir şekilde aktarılmadı ve ticari bir sömürü ağına dönüşmedi. Bu nedenle unutulup gitti. Tarih her zaman ilk yapanları değil; yaptığı işi dünyaya en gürültülü şekilde duyuranları ve sistemi kendi lehine kullananları hatırlar.',
    questionStem: 'Yazar Leif Erikson örneğinden yola çıkarak tarih bilimiyle ilgili hangi eleştiriyi yapmaktadır?',
    options: [
      'Tarihin her zaman yazılı belgelere değil, efsanelere dayanarak yazıldığını',
      'Bir başarının tarihe mal olması için sadece ilk olmanın yetmediğini, bunun geniş kitlelere duyurulup ticari/siyasi bir etki yaratması gerektiğini',
      'Kuzeyli toplumların denizcilik başarılarının kasıtlı olarak tarih kitaplarından silindiğini',
      'Kolomb\'un keşiflerinin abartıldığı kadar büyük bir etki yaratmadığını'
    ],
    correct: 1,
    explanation: 'Leif Erikson 500 yıl önce keşfetmesine rağmen tarih onu değil Kolomb\'u hatırlar. Çünkü başarının dünyaya duyurulması ve etki (ticari/siyasi) yaratması gerektiği vurgulanmıştır.'
  },
  {
    title: 'Hindenburg Felaketi',
    passage: '1937 yılında Nazi Almanyasının gururu olan devasa zeplin Hindenburg, Amerika\'ya iniş yaparken saniyeler içinde alev topuna döndü. Bu kaza havacılık tarihindeki en ölümcül kaza değildi; ancak felaketi efsanevi kılan şey, olayın kameralar tarafından saniye saniye kaydedilmesi ve radyodan canlı olarak, hıçkırıklar içinde yayınlanmasıydı. Görüntülerin dünyada yarattığı şok o kadar büyüktü ki, bir zamanlar geleceğin seyahat aracı olarak görülen zeplin çağı o gün aniden sona erdi. Hindenburg olayı, medyanın ve görsel şokun, insan algısını ve teknolojik ilerlemeyi tek bir günde nasıl bitirebileceğinin en canlı örneğidir.',
    questionStem: 'Hindenburg zeplininin yanmasını tarihte bu kadar etkili kılan asıl sebep nedir?',
    options: [
      'Kazada çok sayıda sivil yolcunun ve önemli devlet adamının hayatını kaybetmesi',
      'Zeplin teknolojisinin uçak teknolojisinden daha geride olduğunun matematiksel olarak kanıtlanması',
      'Olayın görsel ve işitsel medya (kameralar/radyo) aracılığıyla tüm dünyaya anında ve dramatik bir şekilde aktarılması',
      'Kullanılan yanıcı hidrojen gazının tüm rezervlerinin bu patlamayla tükenmesi'
    ],
    correct: 2,
    explanation: 'Metne göre felaketi efsanevi kılan ve zeplin çağını bitiren asıl şey, olayın kameralar ve radyo aracılığıyla canlı ve dramatik bir şekilde kitlelere aktarılmasıdır.'
  },
  {
    title: 'İbn-i Sina\'nın Kanun\'u',
    passage: '11. yüzyılda yaşamış olan İslam âlimi İbn-i Sina (Avicenna), tıp, felsefe ve matematik alanlarında çağının çok ötesinde eserler verdi. En ünlü eseri "El-Kanun fi\'t-Tıbb" (Tıbbın Kanunu), sadece Doğu\'da kalmamış, Latinceye çevrilerek Avrupa üniversitelerinde tam 500 yıl boyunca temel tıp ders kitabı olarak okutulmuştur. Kendi coğrafyasının dışında bile bilime yön veren bu eser, bilginin dini, dili ve ırkı olmadığının; evrensel bir değer olarak insanlığın ortak karanlığını aydınlatan tek meşale olduğunun en güzel kanıtıdır.',
    questionStem: 'İbn-i Sina\'nın eserinin Avrupa\'da 500 yıl okutulması aşağıdakilerden hangisinin göstergesidir?',
    options: [
      'Orta Çağ Avrupa\'sında tıp biliminin tamamen yasaklanmış olduğunun',
      'İbn-i Sina\'nın hayatının büyük bir kısmını Avrupa üniversitelerinde geçirdiğinin',
      'Bilimsel bilginin kültürel ve coğrafi sınırları aşarak evrensel bir kabul ve geçerlilik gördüğünün',
      'Doğu tıbbının sadece bitkisel tedavi yöntemlerine dayandığının'
    ],
    correct: 2,
    explanation: 'İslam âlimi olan İbn-i Sina\'nın eserinin Avrupa\'da 500 yıl okutulması, bilimin din, dil, ırk ayrımı tanımayan evrensel bir değer olduğunu kanıtlar.'
  },
  {
    title: 'Kopernik ve Yıkılan Ego',
    passage: 'Polonyalı astronom Nikolas Kopernik, ölümünden hemen önce yayınladığı kitabında Dünya\'nın evrenin merkezinde sabit durmadığını, aksine Güneş\'in etrafında döndüğünü iddia etti. O güne kadar insanoğlu, kendini Tanrı\'nın en özel yaratığı olarak evrenin merkezine koymuştu. Kopernik Devrimi, sadece astronomik bir keşif değil, aynı zamanda insanın o devasa egosuna indirilmiş ağır bir darbeydi. Uçsuz bucaksız evrenin merkezinde değil, sıradan bir yıldızın etrafında dolanan sıradan bir kayanın üzerinde olduğumuzu anlamak, insanlık için hem ürkütücü hem de özgürleştirici bir aydınlanmaydı.',
    questionStem: 'Kopernik\'in keşfinin insanlar üzerindeki "psikolojik ve felsefi" etkisi parçada nasıl açıklanmaktadır?',
    options: [
      'Güneş\'in ısı ve ışık kaynağı olduğunu keşfetmenin insanlara güven vermesi',
      'İnsanoğlunun evrenin merkezinde ve en önemli varlık olduğu inancını (egosunu) yıkarak evrendeki asıl sıradan konumunu göstermesi',
      'Dünya dışı yaşamlara olan merakı artırarak uzay yolculuklarının başlamasına zemin hazırlaması',
      'Kiliseye olan inancın artmasına ve dini dogmaların daha çok benimsenmesine neden olması'
    ],
    correct: 1,
    explanation: 'Dünya\'nın evrenin merkezinde olmadığı gerçeğinin, insanın kendini evrenin merkezine koyan devasa egosuna indirilmiş bir darbe olduğu ve konumumuzun sıradanlığını gösterdiği vurgulanmıştır.'
  },
  {
    title: 'Güney Kutbu Yarışı: Amundsen ve Scott',
    passage: '1911 yılında Güney Kutbu\'na ilk ulaşan insan olmak için Norveçli Roald Amundsen ve İngiliz Robert Falcon Scott arasında kıyasıya bir yarış başladı. Scott, teknolojiye ve motorlu kızaklara güveniyordu ancak dondurucu soğukta motorlar bozuldu, atlar öldü. Amundsen ise kutup yerlilerinden (Eskimolardan) köpek kızaklarını ve hayvan kürklerini kullanmayı öğrenmiş, yolculuğu en ince detayına kadar planlamıştı. Amundsen zafere ulaşıp sağ salim dönerken, Scott ve ekibi donarak can verdi. Bu tarihi yarış, doğaya kibirle meydan okumak yerine ona saygı duyarak hazırlanmanın, hayatta kalmanın tek kuralı olduğunu gösterir.',
    questionStem: 'Güney Kutbu yarışında Amundsen\'i başarıya, Scott\'ı ise ölüme götüren asıl fark nedir?',
    options: [
      'Scott\'ın yarışa çok daha geç başlaması nedeniyle kış şartlarına yakalanması',
      'Amundsen\'in kibirden uzak durup yerel (doğaya uyumlu) yöntemleri öğrenerek titiz bir planlama yapması; Scott\'ın ise yeni teknolojiye aşırı ve yersiz güvenmesi',
      'Norveçlilerin genetik olarak soğuğa İngilizlerden daha dayanıklı olması',
      'İngiliz hükümetinin Scott\'a yeterli maddi desteği sağlamaması'
    ],
    correct: 1,
    explanation: 'Amundsen\'in Eskimolardan (doğaya uygun yöntemler) öğrenerek plan yapması, Scott\'ın ise motorlu kızaklara (teknolojik kibir) güvenip hata yapması aralarındaki temel farktır.'
  },
  {
    title: 'Frida Kahlo\'nun Acısı',
    passage: 'Meksikalı ressam Frida Kahlo, henüz genç bir kızken geçirdiği korkunç trafik kazası sonucu hayatı boyunca omurgasında çelik korselerle, yatağa bağımlı ve dinmeyen fiziksel acılar içinde yaşamak zorunda kaldı. Ancak o, kaderine boyun eğip karanlık bir odaya kapanmak yerine, yatağının tavanına astırdığı bir ayna sayesinde kendini çizmeye başladı. "Kendi gerçekliğimi resmediyorum" diyen Frida, parçalanmış bedenini ve fırtınalı aşk acılarını o kadar canlı ve cesur renklere dönüştürdü ki, acıdan bir sanat şaheseri doğurdu. Onun hayatı, yıkımın ortasında bile insanın yaratıcı gücünün nasıl filizlenebileceğinin en renkli kanıtıdır.',
    questionStem: 'Parçaya göre Frida Kahlo\'nun sanatının kaynağı ve özelliği aşağıdakilerden hangisidir?',
    options: [
      'Geleneksel Meksika kültürünün motiflerini tamamen reddederek Batı sanatına yönelmesi',
      'Sağlıklı ve mutlu bir yaşam sürmenin insanı sanattan uzaklaştırdığını savunması',
      'Geçirdiği büyük kaza ve yaşadığı fiziksel/ruhsal acıları, yaratıcı bir enerjiye dönüştürerek kendi gerçekliğini cesurca tuvale aktarması',
      'Sadece rüyalarında gördüğü gerçeküstü (sürrealist) manzaraları resmetmesi'
    ],
    correct: 2,
    explanation: 'Frida\'nın trafik kazası sonucu yaşadığı fiziksel acıları ve ruhsal sancıları yatağındaki ayna sayesinde canlı renklere dönüştürüp kendi gerçekliğini resmettiği anlatılmıştır.'
  },
  {
    title: 'Piri Reis\'in Gizemli Haritası',
    passage: 'Osmanlı denizcisi Piri Reis\'in 1513 yılında ceylan derisi üzerine çizdiği dünya haritası, günümüzde bile bilim insanlarını şaşkına çevirmeye devam etmektedir. O dönemde henüz keşfedilmemiş olan Güney Amerika kıyılarını inanılmaz bir doğrulukla göstermesinin yanı sıra, Antarktika kıtasını da buzullarla kaplanmadan önceki (milyonlarca yıl önceki) haliyle çizdiği iddia edilmektedir. Piri Reis bu haritayı, antik dönemden kalan kayıp haritaları birleştirerek çizdiğini belirtmiştir. Bu gizemli eser, insanoğlunun geçmişinde bizim bugün bildiğimizden çok daha ileri bir coğrafi bilginin var olmuş olabileceğine dair heyecan verici bir fısıltıdır.',
    questionStem: 'Piri Reis haritasını günümüzde bile "gizemli ve şaşırtıcı" kılan temel etken nedir?',
    options: [
      'Haritanın o dönemde çok nadir bulunan ceylan derisi üzerine çizilmiş olması',
      'Osmanlı İmparatorluğu\'nun denizcilikteki üstünlüğünü kanıtlayan ilk belge sayılması',
      'Çizildiği dönemde henüz keşfedilmemiş yerleri ve Antarktika\'nın buzsuz halini son derece isabetli bir şekilde yansıtması',
      'Haritanın bazı parçalarının hala okyanusun dibinde olduğunun düşünülmesi'
    ],
    correct: 2,
    explanation: 'Metinde haritanın asıl gizeminin, 1513 yılında henüz bilinmeyen Güney Amerika kıyılarını ve Antarktika\'nın buzsuz halini inanılmaz doğrulukla göstermesi olduğu belirtilmiştir.'
  },
  {
    title: 'Nelson Mandela ve Affetmek',
    passage: 'Güney Afrika\'daki ırkçı Apartheid rejimine karşı mücadele ettiği için 27 yıl boyunca küçük bir hücrede esir tutulan Nelson Mandela, hapisten çıktığında intikam peşinde koşan öfkeli bir adam değildi. Ülkesinin ilk siyahi devlet başkanı seçildiğinde, kendisini yıllarca hapseden beyaz yöneticilerle barış masasına oturdu ve "Geçmişin acılarına takılıp kalırsak, geleceğin umudunu inşa edemeyiz" dedi. Mandela, bir ulusu kurtarmanın yolunun düşmanı yok etmekten değil, kendi içindeki nefreti yenip affetmekten geçtiğini göstererek adını tarihe altın harflerle yazdırdı.',
    questionStem: 'Nelson Mandela\'nın yönetim felsefesini özetleyen en uygun ifade aşağıdakilerden hangisidir?',
    options: [
      'Güç elde edildiğinde geçmişte yapılan haksızlıkların bedelinin en ağır şekilde ödetilmesi',
      'Toplumsal barışın ve geleceğin inşasının, intikam duygusundan arınarak uzlaşma ve affetme erdemiyle mümkün olması',
      'Irk ayrımcılığının önüne geçmek için ülkedeki tüm farklı kültürlerin tek bir dil altında birleştirilmesi',
      'Hapishanelerin toplumsal birer ıslah merkezine dönüştürülmesi için reformlar yapılması'
    ],
    correct: 1,
    explanation: 'Mandela\'nın 27 yıl hapis yatmasına rağmen intikam yerine barış masasına oturması ve "nefreti yenip affetmenin" önemini vurgulaması, onun uzlaşmacı felsefesini gösterir.'
  },
  {
    title: 'Terracotta Ordusu',
    passage: 'MÖ 210 yılında ölen Çin\'in ilk İmparatoru Qin Shi Huang, ölümden öylesine korkuyordu ki, öteki dünyada kendisini koruması için topraktan, gerçek insan boyutlarında, yüz hatları birbirinden tamamen farklı 8 binden fazla asker, at ve savaş arabası yaptırdı. Yer altına gömülen bu "Terracotta Ordusu", binlerce yıl gizli kaldıktan sonra 1974\'te bir çiftçi tarafından tesadüfen bulundu. Bu devasa yeraltı ordusu, insanoğlunun ne kadar mutlak bir güce ve servete sahip olursa olsun, ölüm gerçeği karşısındaki o derin çaresizliğini ve ölümsüzlük arzusu için girdiği akılalmaz çabayı simgeler.',
    questionStem: 'Yazarın "Terracotta Ordusu" üzerinden insan doğasına dair çıkardığı sonuç nedir?',
    options: [
      'Antik çağlardaki heykel sanatının günümüz teknolojisinden çok daha ileride olduğu',
      'Askeri disiplinin öteki dünyada bile devam edeceğine inanıldığı',
      'Mutlak güce sahip liderlerin bile ölüm korkusu karşısında aciz kaldığı ve ölümsüzlük arzusuyla mantık dışı işlere kalkışabildiği',
      'Tarım işçilerinin (çiftçilerin) tarihi keşiflerde arkeologlardan daha şanslı olduğu'
    ],
    correct: 2,
    explanation: 'İmparatorun öteki dünyada korunmak için binlerce asker yaptırması, ne kadar güçlü olursa olsun insanın ölüm karşısındaki çaresizliğini ve ölümsüzlük arzusunu yansıtır.'
  }
];

// 3. MAKİNE
export const tarihParagrafSorulari3: TarihParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES_3.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES_3[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-tarih3-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
const PARAGRAPH_THEMES_4 = [
  {
    title: 'Rubicon Nehrini Geçmek',
    passage: 'MÖ 49 yılında Jül Sezar, ordusuyla birlikte Galya ile Roma arasındaki sınırı belirleyen incecik Rubicon nehrinin kıyısına geldi. Roma yasalarına göre bir komutanın ordusuyla bu nehri geçmesi devlete savaş açmak, yani vatana ihanet demekti. Sezar uzun bir tereddüdün ardından "Zarlar atıldı" (Alea iacta est) diyerek atını suya sürdü. Bu hamle, Roma Cumhuriyeti\'nin sonunu getirip İmparatorluğun kapılarını açtı. "Rubicon\'u geçmek" deyimi o günden beri, geri dönüşü olmayan o keskin çizgiyi aşmayı ve sonuçlarına katlanarak büyük bir riske girmeyi ifade eder.',
    questionStem: 'Bu metne göre "Rubicon\'u geçmek" ifadesinin sembolize ettiği durum aşağıdakilerden hangisidir?',
    options: [
      'Askeri dehanın ve taktiksel üstünlüğün her zaman galip geleceği',
      'Bir liderin halkı tarafından desteklendiğinde yenilmez olduğu',
      'Geri dönüşü olmayan bir karar alarak tüm sonuçları (riskleri) göze alma anı',
      'Sınır güvenliğinin antik çağlarda bile çok ciddiye alındığı'
    ],
    correct: 2,
    explanation: 'Sezar\'ın nehri geçerek devlete savaş açması ve geri dönüşü olmayan bir adım atması, bu ifadenin "geri dönülemez bir karar alıp riskleri göze almak" anlamını taşıdığını gösterir.'
  },
  {
    title: 'Navajo Şifrecileri',
    passage: 'İkinci Dünya Savaşı sırasında Pasifik cephesinde Japonlar, Amerikalıların tüm telsiz şifrelerini anında kırıyordu. Çaresiz kalan Amerikan ordusu, dilleri daha önce hiç yazılı hale getirilmemiş, aşırı karmaşık bir yapıya sahip olan Navajo yerlilerini askere aldı. Navajolar, savaş alanındaki mesajları kendi dillerinde, doğa terimleriyle kodlayarak ilettiler. Milyonlarca dolarlık makinelerin ve dâhilerin kıramadığı bu canlı şifre sistemi, savaşı Müttefiklere kazandıran en büyük etkenlerden biri oldu. Teknoloji ne kadar ilerlerse ilerlesin, kadim insan kültürünün karmaşıklığı bazen en kusursuz makineyi bile yenebilir.',
    questionStem: 'Navajo şifrecilerinin başarısı üzerinden anlatılmak istenen temel düşünce nedir?',
    options: [
      'Yerli halkların savaşçı ruhlarının modern ordulardan daha güçlü olduğu',
      'Yazılı olmayan dillerin öğrenilmesinin ve gramerinin oluşturulmasının imkânsızlığı',
      'Modern teknolojinin ve makinelerin bile, kadim ve doğal insan kültürünün o karmaşık yapısı karşısında çaresiz kalabileceği',
      'Savaşlarda istihbaratın askeri teçhizattan daha fazla bütçe gerektirdiği'
    ],
    correct: 2,
    explanation: 'Japonların makinelerle kıramadığı şifrenin Navajo yerlilerinin doğal diliyle kurulması, teknolojinin insan kültürünün (kadim dilin) karmaşıklığı karşısında çaresiz kalabileceğini vurgular.'
  },
  {
    title: 'Sputnik\'in Bip Sesi',
    passage: '4 Ekim 1957\'de Sovyetler Birliği, dünyanın ilk yapay uydusu Sputnik 1\'i uzaya fırlattığında, bu metalik kürenin radyolara gönderdiği o basit "bip-bip" sesi tüm Amerika\'da bir panik dalgası yarattı. Sovyetlerin uzaydan başlarına nükleer bomba atabileceği korkusu, Amerikan hükümetini eğitim sistemini baştan aşağı değiştirmeye, NASA\'yı kurmaya ve milyarlarca doları bilime yatırmaya itti. Gökyüzündeki o küçücük uydu, Soğuk Savaş\'ın seyrini değiştirmiş; korkunun, bazen insanoğlunu bilimsel gelişmeye iten en büyük motivasyon kaynağı olduğunu kanıtlamıştır.',
    questionStem: 'Sputnik 1\'in fırlatılmasının Amerikan toplumu ve devleti üzerindeki asıl etkisi ne olmuştur?',
    options: [
      'Amerikan halkının uzaylıların varlığına olan inancını artırması',
      'Yarattığı güvenlik korkusu (panik) sayesinde, Amerika\'nın bilim, eğitim ve uzay araştırmalarında devasa atılımlar yapmasını tetiklemesi',
      'Amerika ile Sovyetler Birliği arasında doğrudan bir nükleer savaşın başlamasına yol açması',
      'Sovyetlerin teknolojik üstünlüğünün tamamen kabul edilip uzay yarışından çekilmelerine neden olması'
    ],
    correct: 1,
    explanation: 'Sputnik\'in gönderdiği "bip" sesinin yarattığı korkunun Amerika\'yı eğitim sistemini değiştirmeye ve NASA\'yı kurmaya (bilimsel atılım) ittiği belirtilmiştir.'
  },
  {
    title: 'Eratosthenes ve Gölgeler',
    passage: 'MÖ 240 yılında İskenderiye Kütüphanesi\'nin müdürü Eratosthenes, Dünya\'nın çevresini hesaplamak gibi imkânsız görünen bir işe girişti. Ne uyduları vardı ne de uçakları. Sadece bir çubuğun iki farklı şehirde, yılın aynı gününde yere düşen gölge açılarını ölçtü. Geometriyi ve bir deveden elde ettiği iki şehir arasındaki mesafe bilgisini kullanarak, Dünya\'nın çevresini bugünkü gerçek değere sadece %1\'lik bir hata payıyla hesaplamayı başardı. Eratosthenes, evrenin sırlarını çözmek için en ileri teknolojiye değil, sadece dikkatli bir gözleme ve keskin bir insan aklına ihtiyaç olduğunu kanıtlayan ilk büyük kâşiftir.',
    questionStem: 'Eratosthenes\'in başarısı bilim tarihi açısından neyi sembolize etmektedir?',
    options: [
      'Güneş ışınlarının dünyanın her yerine aynı açıyla düşmediğini',
      'Develerin o dönemde bir uzunluk ölçü birimi olarak kullanıldığını',
      'İnsanın ileri teknolojiye sahip olmadan da, sadece matematiksel akıl ve gözlemle evrenin büyük sırlarını çözebileceğini',
      'İskenderiye Kütüphanesi\'nin antik dünyanın en zengin teknolojik araçlarına sahip olduğunu'
    ],
    correct: 2,
    explanation: 'Sadece bir çubuk, gölge ve akıl (geometri) kullanarak Dünya\'nın çevresini hesaplaması, aklın ve gözlemin teknolojisiz de büyük sırlar çözebileceğini sembolize eder.'
  },
  {
    title: 'Buz Adam Ötzi',
    passage: '1991 yılında Alpler\'de buzulların erimesiyle bulunan Ötzi, günümüzden tam 5300 yıl önce yaşamış bir insandı. Bilim insanları onu incelediğinde midesindeki son yemeği, kıyafetlerindeki polenleri ve en önemlisi sırtına saplanmış olan ok ucunu buldular. Ötzi bir kazaya kurban gitmemiş, yüksek dağlarda bir düşmanından kaçarken pusuya düşürülerek öldürülmüştü. Bu donmuş beden, tarih kitaplarının sadece büyük imparatorluklardan ve efsanevi savaşlardan ibaret olmadığını; sıradan bir insanın binlerce yıl önce yaşadığı cinayetin ve korkunun bile tarihin en çarpıcı parçası olabileceğini bizlere fısıldar.',
    questionStem: 'Yazar, Ötzi\'nin hikâyesi üzerinden tarih bilimine dair nasıl bir yaklaşım sunmaktadır?',
    options: [
      'Tarih araştırmalarında sadece adli tıp uzmanlarının söz sahibi olması gerektiği',
      'Tarihin sadece kralların ve savaşların değil, sıradan insanların kişisel trajedilerinin (Ötzi\'nin cinayeti gibi) de değerli bir parçası olduğu',
      'Antik çağlarda insanların sanıldığından çok daha huzurlu ve barışçıl yaşadığı',
      'Buzulların erimesinin tarih öncesi döneme ait tüm kalıntıları yok etme tehlikesi taşıdığı'
    ],
    correct: 1,
    explanation: 'Ötzi\'nin öldürülmesinin, tarih kitaplarının sadece krallardan değil, sıradan insanların korku ve cinayetlerinden de (kişisel trajediler) ibaret olabileceğini gösterdiği vurgulanmıştır.'
  },
  {
    title: 'Maginot Hattı Yanılgısı',
    passage: 'Birinci Dünya Savaşı\'nın yıkımından ders aldığını sanan Fransa, sınırlarına yeraltı sığınakları, devasa toplar ve kilometrelerce uzanan tünellerden oluşan "Maginot Hattı"nı inşa etti. Fransızlar bu hattın geçilemez olduğuna inanıyor ve kendilerini tamamen güvende hissediyordu. Ancak 1940 yılında Alman ordusu bu aşılmaz duvara saldırmak yerine, ormanlık alandan dolaşarak hattın arkasına sızdı ve Fransa birkaç hafta içinde düştü. Maginot Hattı, durağan ve değişime kapalı savunma sistemlerinin, hızlı ve yaratıcı (esnek) bir zekâ karşısında ne kadar kolay çöktüğünün tarihsel bir kanıtıdır.',
    questionStem: 'Fransa\'nın Maginot Hattı\'na rağmen yenilmesi hangi stratejik yanılgıyı (hatayı) göstermektedir?',
    options: [
      'Askeri harcamaların ülke ekonomisini çökertip iç karışıklığa yol açtığını',
      'Durağan (sabit) fiziksel engellere ve değişmez planlara körü körüne güvenmenin, düşmanın esnek ve yenilikçi taktikleri karşısında çaresiz kalacağı gerçeğini',
      'Alman ordusunun sahip olduğu silahların beton delme özelliğine sahip olduğunu',
      'Savunma hatlarının sadece düz arazilere inşa edilmesi gerektiğini'
    ],
    correct: 1,
    explanation: 'Fransızların sabit ve durağan bir hatta körü körüne güvenip, Almanların etrafından dolaşması (esnek zekâ) karşısında yenilmeleri; durağanlığın esneklik karşısındaki zayıflığını anlatır.'
  },
  {
    title: 'Medici Ailesi ve Rönesans',
    passage: 'Orta Çağ Avrupa\'sı karanlık ve dogmalar içinde yüzerken, İtalya\'nın Floransa kenti birdenbire sanatın ve bilimin başkenti oldu. Bu mucizenin arkasında bir kral ya da papa değil, zengin bir bankacı aile olan Mediciler vardı. Mediciler, Michelangelo, Leonardo da Vinci ve Galileo gibi dehalara hiçbir karşılık beklemeden sponsor oldular. Onları maddi kaygılardan kurtararak sadece yaratmaya teşvik ettiler. Rönesans dediğimiz aydınlanma, aslında dehanın filizlenebilmesi için gereken suyun, yani maddi himayenin (patronajın) doğru insanların eline verilmesinin bir sonucudur.',
    questionStem: 'Rönesans\'ın Floransa\'da doğuşunda Medici ailesinin asıl rolü nedir?',
    options: [
      'Sanatçıları bankacılık sektöründe çalıştırarak onlara iş imkânı sunmaları',
      'Devlet yönetimini ele geçirerek sanata dair zorunlu kanunlar çıkarmaları',
      'Deha sahibi insanları maddi kaygılardan kurtaracak ekonomik desteği (patronajı) sağlayarak onların özgürce üretmelerine olanak tanımaları',
      'Leonardo da Vinci ve Michelangelo gibi sanatçıları bizzat yetiştirip eğitmeleri'
    ],
    correct: 2,
    explanation: 'Medicilerin sanatçılara sponsor olup onları maddi kaygıdan kurtarması (patronaj/himaye) ve yaratmaya teşvik etmesi, onların Rönesans\'taki asıl rolüdür.'
  },
  {
    title: 'Tunguska Gizemi',
    passage: '30 Haziran 1908 sabahı Sibirya\'nın ıssız Tunguska bölgesinde gökyüzü aniden alev aldı. Hiroşima\'ya atılan atom bombasından 1000 kat daha güçlü bir patlama yaşandı ve 80 milyon ağaç anında devrildi. İlginç olan, ortada hiçbir krater veya göktaşı kalıntısı yoktu. Bilim insanları bunun havada patlayan bir kuyrukluyıldız parçası veya meteor olduğu sonucuna vardılar. Eğer bu patlama dört saat gecikmeyle yaşansaydı, Dünya\'nın dönüşünden dolayı Londra veya Paris gibi bir metropol tamamen haritadan silinecekti. Tunguska, insanoğlunun kibrine karşı, evrenin kör tesadüflerinin ve yıkıcı gücünün ürpertici bir hatırlatıcısıdır.',
    questionStem: 'Tunguska olayı, yazar tarafından hangi felsefi yaklaşımla değerlendirilmektedir?',
    options: [
      'Ormanlık alanların yerleşim yerlerinden uzak olmasının önemini gösteren bir uyarı',
      'İnsanoğlunun evrendeki varlığının, doğanın öngörülemez ve devasa güçleri (ve kör tesadüfler) karşısında son derece kırılgan ve şansa bağlı olduğu',
      'Göktaşlarının değerli madenler içermesi nedeniyle bilimsel olarak daha iyi incelenmesi gerektiği',
      '1900\'lü yılların başındaki bilimsel ekipmanların bu tür olayları tespit edemeyecek kadar ilkel olduğu'
    ],
    correct: 1,
    explanation: 'Eğer 4 saat gecikseydi bir metropolü silecek olan bu patlama, insanoğlunun evrenin kör tesadüfleri ve yıkıcı gücü karşısındaki kırılganlığını/şans eseri yaşamasını anlatır.'
  },
  {
    title: 'Yenilmez Armada',
    passage: '1588 yılında İspanya Kralı, "Yenilmez Armada" adını verdiği o güne kadar görülmüş en büyük donanmayı İngiltere\'yi işgal etmek için yola çıkardı. İngiliz donanması sayıca azdı ama İspanyol kalyonları devasa, ağır ve hantaldı. Asıl yıkım savaşla değil, İngiliz Kanalı\'nda patlayan korkunç bir fırtınayla geldi. İspanyol gemileri kayalıklara çarparak parçalandı ve tarihin en büyük donanması denizin dibini boyladı. İngilizler bu fırtınaya "Protestan Rüzgârı" adını verdiler. Bu tarihi hezimet, en büyük askeri hazırlıkların bile doğanın anlık bir öfkesi karşısında nasıl çaresiz kalabileceğinin destanıdır.',
    questionStem: 'İspanyol Armadası\'nın çöküşündeki belirleyici faktör parçada nasıl açıklanmıştır?',
    options: [
      'İngiliz ordusunun beklenenden çok daha modern silahlara sahip olması',
      'İspanyol askerlerinin isteksizce savaşması ve komutanlarına isyan etmesi',
      'Beklenmedik bir fırtınanın (doğa olayının) devasa ve hantal İspanyol donanmasını yok etmesi',
      'İngiliz gemilerinin devasa boyutlarının İspanyolları korkutması'
    ],
    correct: 2,
    explanation: 'Yenilmez denen donanmanın asıl yıkımının savaşla değil, patlayan fırtına (Protestan Rüzgârı) ve doğanın gücü nedeniyle kayalıklara çarpmasıyla yaşandığı vurgulanmıştır.'
  },
  {
    title: 'Dinozorların Sonu ve Biz',
    passage: '66 milyon yıl önce, günümüz Meksika kıyılarına (Chicxulub) çarpan devasa bir asteroit, yeryüzündeki yaşamın %75\'ini, başta dinozorlar olmak üzere yok etti. Güneş ışığını yıllarca kesen toz bulutları, dev kertenkelelerin sonunu getirirken, yer altında yaşayan ve az yiyecekle yetinebilen küçük, fare benzeri memelilere hayatta kalma şansı verdi. Eğer o asteroit dünyaya çarpmamış olsaydı, o küçük memeliler evrimleşip insan türünü oluşturamayacak, dinozorlar ise gezegenin hakimi kalmaya devam edecekti. Bizim varlığımız, evrenin milyonlarca yıl önce oynadığı kör bir bilardo oyununun tesadüfi bir sonucudur.',
    questionStem: 'Dinozorların yok oluşu ve insanların ortaya çıkış süreciyle ilgili asıl vurgulanan nedir?',
    options: [
      'Büyük canlıların her zaman küçük canlılardan daha zayıf olduğu',
      'İnsanlığın varoluşunun zorunlu ve kusursuz bir planın değil, felaketlerin yol açtığı rastlantısal (tesadüfi) bir kırılmanın sonucu olduğu',
      'Uzaydan gelen tehlikelere karşı memeli hayvanların özel bir altıncı hissi olduğu',
      'İklim değişikliklerinin canlı evrimini hiçbir şekilde etkilemediği'
    ],
    correct: 1,
    explanation: 'İnsan türünün (memelilerin) evrimleşmesinin, o asteroidin çarpması gibi kör ve tesadüfi bir olay olmasaydı gerçekleşmeyeceği (rastlantısallık) anlatılmıştır.'
  },
  {
    title: 'Ölümsüz Hücreler: Henrietta Lacks',
    passage: '1951 yılında Henrietta Lacks adlı siyahi bir kadın, rahim ağzı kanseri tedavisi görürken doktorlar ondan habersiz bir doku örneği aldılar. Henrietta kısa süre sonra acılar içinde öldü; ancak hücreleri (HeLa hücreleri) laboratuvar ortamında ölmeyip çoğalmaya devam eden ilk insan hücreleri oldu. Bugün çocuk felci aşısından kanser araştırmalarına kadar sayısız tıbbi devrim, ondan izinsiz alınan bu "ölümsüz" hücreler sayesinde yapıldı. Bilim dünyası milyarlarca dolar kâr ederken, Henrietta\'nın ailesi yıllarca sağlık sigortası bile olmadan yoksulluk içinde yaşadı. HeLa hücreleri, tıp tarihindeki ilerlemenin bazen ne kadar karanlık ve etik dışı bir sömürü barındırdığının kanıtıdır.',
    questionStem: 'Henrietta Lacks (HeLa) hücreleri olayında yazarın odaklandığı asıl sorun nedir?',
    options: [
      'Kanser araştırmalarının diğer tıbbi alanlardan daha yavaş ilerlemesi',
      'Tıbbi gelişmelerin sağladığı büyük faydanın arkasında, hastanın rızasının alınmaması ve ailesinin yoksul bırakılması gibi etik dışı bir sömürünün yatması',
      'Laboratuvar ortamında hücre çoğaltmanın sadece şans eseri başarılabilen bir yöntem olması',
      'Siyahi Amerikalıların tıp bilimine olan katkılarının genetik nedenlere dayanması'
    ],
    correct: 1,
    explanation: 'Habersiz alınan dokuların tıbbi devrimler yapması ve milyarlar kazandırması ancak ailesinin yoksulluk çekmesi; bilimin arkasındaki etik dışı sömürüyü vurgular.'
  },
  {
    title: 'Voyager Altın Plağı',
    passage: '1977 yılında fırlatılan Voyager uzay araçları, insan yapımı olup dünyadan en uzağa giden nesnelerdir. Üzerlerinde, Amerikalı astronom Carl Sagan\'ın öncülüğünde hazırlanan ve bakırdan yapılmış bir "Altın Plak" bulunur. Bu plakta rüzgârın, kuşların sesi, 55 farklı dilde selamlama, müzikler ve insanın anatomik çizimleri yer alır. Güneş sistemini çoktan terk eden bu araç, bir milyar yıl boyunca uzayın karanlığında bozulmadan kalacaktır. Altın Plak, evrendeki diğer zeki yaşamlara "Biz buradaydık ve güzel şeyler ürettik" deme çabamızın; yok oluşa karşı insanlığın o kırılgan ama son derece naif başkaldırısının sembolüdür.',
    questionStem: 'Voyager Altın Plağı\'nın uzaya gönderilme felsefesi (amacı) yazar tarafından nasıl yorumlanmıştır?',
    options: [
      'Uzaylıların teknolojimizi inceleyip bize teknolojik yardım göndermesini sağlama amacı',
      'Gezegenimizin coğrafi koordinatlarını paylaşarak potansiyel tehlikeleri davet eden bir hata',
      'İnsanlığın evrende bir iz bırakma isteğinin, yok oluşa meydan okuyan iyimser ve naif (sanatsal) bir çabası',
      'Sadece farklı dillerin uzay koşullarındaki dayanıklılığını ölçen bilimsel bir deney'
    ],
    correct: 2,
    explanation: 'Plağın milyar yıl kalacak olması ve "Biz buradaydık" deme çabası olarak betimlenmesi, insanlığın yok oluşa karşı evrende bir iz bırakma (iyimser/naif) arzusu olarak yorumlanmıştır.'
  },
  {
    title: 'Gılgamış Destanı',
    passage: 'Tarihin bilinen ilk yazılı edebi eseri olan Sümerlerin Gılgamış Destanı, yenilmez bir kralın kahramanlıklarından ziyade, insanın en derin korkusunu anlatır: Ölüm. Gılgamış, en yakın dostu Enkidu öldüğünde ilk kez kendi faniliğiyle yüzleşir ve ölümsüzlüğü bulmak için tehlikeli bir yolculuğa çıkar. Sonunda anlar ki, tanrıların sadece kendine sakladığı ölümsüzlük insan için imkânsızdır; insana kalan tek şey, yaşarken adını kalıcı kılacak eserler bırakmaktır. Yaklaşık 4 bin yıl önce kil tabletlere kazınan bu hikâye, insan doğasının ve varoluşsal krizlerimizin binlerce yıldır milim bile değişmediğinin kanıtıdır.',
    questionStem: 'Gılgamış Destanı\'nın ana mesajı ve edebi önemi parçada nasıl özetlenmiştir?',
    options: [
      'Kralların tanrılardan daha güçlü olduğunu anlatan bir siyasi propaganda olması',
      'Sümerlerin ahiret inancının (ölümden sonra yaşamın) temellerini atan dini bir metin olması',
      'İnsanın ölüm korkusu ve ölümsüzlük arayışını işleyerek, insan psikolojisinin (varoluş krizinin) çağlar boyunca değişmediğini göstermesi',
      'Kahramanlık ve savaş hikâyelerinin her dönemde çok okunduğunu kanıtlaması'
    ],
    correct: 2,
    explanation: 'Destanın insanın en derin korkusunu (ölümü) işlemesi ve ölümsüzlük arayışını anlatması, insan doğasının ve varoluşsal krizinin 4 bin yıldır değişmediğini gösterir.'
  },
  {
    title: 'Waterloo ve Kibrin Düşüşü',
    passage: 'Napolyon Bonapart, Avrupa\'yı kasıp kavuran bir askeri dâhiydi; ancak 1815\'teki Waterloo Savaşı\'nda hayatının en ağır yenilgisini aldı. Bu yenilgi sadece birleşik İngiliz ve Prusya ordularının gücünden kaynaklanmadı. Napolyon\'un geçmişteki sayısız zaferinin getirdiği aşırı özgüven, rakiplerini hafife almasına ve savaş sabahı yağan şiddetli yağmura rağmen topçu birliklerini bekletmeyerek taktiksel bir inatlaşmaya girmesine neden oldu. Waterloo, tarihte yeteneğin kibre yenik düştüğü, geçmiş başarıların insanı körleştiren bir tuzağa dönüşebileceğini gösteren en meşhur çöküştür.',
    questionStem: 'Napolyon\'un Waterloo\'da yenilmesinin asıl psikolojik nedeni nedir?',
    options: [
      'Yağan yağmurun askerlerin moralini tamamen bitirmesi',
      'Birleşik Avrupa ordularının sayısının çok fazla olmasından korkması',
      'Sürekli kazandığı zaferlerin onda yarattığı kibrin (aşırı özgüvenin) onu hatalı kararlara ve inatlaşmaya sürüklemesi',
      'Askerlerine yeterli yiyecek sağlayamadığı için ordunun isyan etmesi'
    ],
    correct: 2,
    explanation: 'Yenilginin asıl nedeninin "geçmiş zaferlerin getirdiği aşırı özgüven, rakipleri hafife alma ve kibre yenik düşme" olduğu metinde açıkça belirtilmiştir.'
  },
  {
    title: '1929 Kara Perşembe',
    passage: '1920\'lerin Amerika\'sı, herkesin borsadan zengin olduğuna inandığı ve sonsuz tüketim çılgınlığının yaşandığı "Kükreyen Yirmiler" dönemiydi. Ancak krediyle alınan hisse senetleri üzerine kurulan bu kâğıttan şato, 24 Ekim 1929 "Kara Perşembe" günü çöktü. İnsanlar bir gecede tüm servetlerini kaybetti, bankalar iflas etti, milyonlarca kişi işsiz kalarak sokaklarda çorba kuyruklarına girdi. Bu Büyük Buhran, kontrolsüz açgözlülüğün ve gerçek üretime dayanmayan suni zenginliğin, bir gün mutlaka kendi ağırlığı altında ezilerek çökeceğinin tarihteki en sert ekonomik dersidir.',
    questionStem: '1929 Büyük Buhranı (Kara Perşembe) olayından çıkarılabilecek temel ekonomik ders nedir?',
    options: [
      'Borsaya yatırım yapmanın her zaman kârlı bir gelir kapısı olduğu',
      'Devletin ekonomiye hiçbir şekilde müdahale etmemesi gerektiği',
      'Gerçek üretime (temele) dayanmayan, borç ve kontrolsüz açgözlülükle şişen suni ekonomilerin eninde sonunda yıkılmaya mahkûm olduğu',
      'Sadece zenginlerin para kaybettiği krizlerin toplumu fazla etkilemediği'
    ],
    correct: 2,
    explanation: 'Krediyle alınan hisselere (suni zenginliğe) ve açgözlülüğe dayalı ekonominin kâğıttan şato gibi çöktüğünün belirtilmesi, gerçek üretime dayanmayan ekonomilerin yıkılacağını gösterir.'
  },
  {
    title: 'Silinen Firavun: Hatşepsut',
    passage: 'Antik Mısır\'ın en güçlü kadın firavunlarından biri olan Hatşepsut, ülkesini yıllarca barış ve refah içinde yönetti. Ancak ölümünden yıllar sonra tahta geçen üvey oğlu III. Thutmose, onun adını tüm tapınaklardan, heykellerden ve dikilitaşlardan sildirmeye çalıştı. Amacı, bir kadının firavun olabileceği fikrini tarih sahnesinden tamamen silmekti. Yüzyıllar boyunca başarılı olan bu sansür, modern arkeologların kırık heykelleri birleştirmesiyle bozuldu. Hatşepsut\'un hikâyesi, tarihi yazanların (ve silenlerin) gücü ne kadar ellerinde tutarlarsa tutsunlar, gerçeğin taşların arasından bir gün mutlaka gün yüzüne çıkacağını kanıtlar.',
    questionStem: 'Parçada Hatşepsut\'un heykellerinin ve isminin silinmesi olayı üzerinden ne anlatılmak istenmiştir?',
    options: [
      'Kadın yöneticilerin erkeklere göre barışa daha çok önem verdiği',
      'Gücü elinde tutanların tarihi kendi isteklerine göre silme çabalarının (sansürün), gerçekler karşısında eninde sonunda başarısız olacağı',
      'Antik Mısır\'da dikilitaşların üzerine sadece dini metinlerin yazıldığı',
      'Arkeolojinin, geçmişe dair kanıtları bulmak yerine efsaneler ürettiği'
    ],
    correct: 1,
    explanation: 'İsminin silinerek tarihten koparılmaya çalışılmasına rağmen arkeologlarca bulunması, sansürcülerin gücü ne olursa olsun gerçeğin eninde sonunda gün yüzüne çıkacağını anlatır.'
  },
  {
    title: 'Frankenstein ve Buz Gibi Bir Yaz',
    passage: '1815 yılında Endonezya\'daki Tambora Yanardağı patladığında, külleri tüm dünyayı kapladı ve 1816 yılı Avrupa\'da "Yazsız Yıl" olarak tarihe geçti. Sürekli yağan yağmur ve soğuk yüzünden İsviçre\'de bir evde mahsur kalan 18 yaşındaki Mary Shelley, can sıkıntısını gidermek için arkadaşlarıyla kimin daha korkunç bir hikâye yazacağı konusunda iddiaya girdi. Dışarıdaki o kasvetli ve karanlık havanın etkisiyle, ölü parçalardan canavar yaratan Dr. Frankenstein\'ın hikâyesini kaleme aldı. Doğanın dünyanın bir ucunda yarattığı bir iklim felaketi, diğer ucunda edebiyat tarihinin en büyük bilimkurgu başyapıtlarından birini doğurmuştu.',
    questionStem: 'Mary Shelley\'nin "Frankenstein" romanını yazma süreciyle ilgili asıl anlatılmak istenen nedir?',
    options: [
      'Romanın aslında Mary Shelley\'nin doktor olan arkadaşları tarafından yazıldığı',
      'Bilimkurgu edebiyatının sadece soğuk iklimli ülkelerde gelişebileceği',
      'Dünyanın bir ucundaki coğrafi/iklimsel bir olayın (patlamanın), tesadüfi bir şekilde edebi bir başyapıtın doğuş zeminini hazırlayabildiği',
      'Yanardağ patlamalarının her zaman insanların psikolojisini olumlu etkilediği'
    ],
    correct: 2,
    explanation: 'Endonezya\'daki yanardağ patlamasının Avrupa\'da yazsız yıla sebep olup Mary Shelley\'i eve hapsetmesi ve romanın bu ortamda yazılması, doğa olaylarının edebi eserlere tesadüfi zemin hazırladığını gösterir.'
  },
  {
    title: 'Vikinglerin Güneş Taşı',
    passage: 'Vikingler pusula olmadan, sisli ve tamamen bulutlu Kuzey denizlerinde yollarını nasıl bulup Amerika kıtalarına kadar gidebilmişlerdi? Efsanelerde geçen büyülü "Güneş Taşları"nın bir masal olduğu sanılıyordu. Ancak modern bilim insanları bu taşın "Kalsit" adı verilen ve ışığı polarize etme (kutuplaştırma) yeteneğine sahip bir kristal olduğunu keşfetti. Güneş tamamen bulutların arkasında saklansa bile, bu taşı gökyüzüne tuttuklarında ışığın kırılmasından Güneş\'in tam konumunu tespit edebiliyorlardı. Modern bilimin gizemini yeni çözdüğü bu kristal, antik denizcilerin doğayı gözlemleyerek buldukları kusursuz bir optik mühendislik harikasıydı.',
    questionStem: 'Vikinglerin "Güneş Taşı" kullanımı, tarih ve bilim açısından bize neyi göstermektedir?',
    options: [
      'Vikinglerin savaşçı kimliklerinden çok ticari kimliklerinin geliştiğini',
      'Pusulanın icadının denizcilikte çok da önemli bir devrim olmadığını',
      'Antik dönem efsanelerinin bazen abartı değil, arkasında üstün bir gözlem ve mühendislik (bilimsel gerçeklik) barındıran zekice icatlar olduğunu',
      'Kalsit kristalinin sadece soğuk iklimlerde bulunabilen bir maden olduğunu'
    ],
    correct: 2,
    explanation: 'Efsane sanılan büyülü taşın aslında ışığı polarize eden bilimsel/optik bir araç olduğunun anlaşılması, antik efsanelerin arkasında üstün bir gözlem ve bilimsel gerçeklik yatabileceğini gösterir.'
  },
  {
    title: 'Taç Mahal\'in Gözyaşları',
    passage: 'Hindistan\'da Şah Cihan tarafından, ölen eşi Mümtaz Mahal anısına yaptırılan Taç Mahal, saf beyaz mermerden yapılmış kusursuz bir aşk anıtı olarak bilinir. Ancak bu mimari şaheserin arkasında karanlık bir bedel vardır. 22 yıl süren inşaat boyunca imparatorluğun hazinesi tamamen tükenmiş, halk ağır vergiler altında ezilerek açlık çekmiştir. En acı verici olan ise, Şah Cihan\'ın bu eserin bir kopyasının bir daha asla yapılamaması için mimarların ellerini kestirdiği efsanesidir. Taç Mahal, güzelliğin ve aşkın ölümsüzleştirilmesi için gücün nasıl acımasızca kullanılabileceğinin en ihtişamlı kanıtıdır.',
    questionStem: 'Yazar, Taç Mahal\'i değerlendirirken onun hangi iki zıt yönünü karşılaştırmaktadır?',
    options: [
      'Mimarideki yenilikçi tarzı ile geleneksel Hint motifleri arasındaki farkı',
      'Şah Cihan\'ın eşine duyduğu sevgi ile çocuklarına duyduğu nefreti',
      'Dışarıdan görünen kusursuz estetik güzelliği (aşk anıtı) ile arka planında yatan ekonomik çöküş, sömürü ve acımasızlığı',
      'Beyaz mermerin dayanıklılığı ile zaman içindeki sararmasını'
    ],
    correct: 2,
    explanation: 'Metin, Taç Mahal\'i "kusursuz bir aşk anıtı" olarak överken, aynı zamanda hazinenin tükenmesi, halkın aç kalması ve mimarların ellerinin kesilmesi gibi "acımasız" arka planını karşılaştırır.'
  },
  {
    title: 'Martin Luther\'in Çivisi',
    passage: '1517 yılında Alman bir keşiş olan Martin Luther, Katolik Kilisesi\'nin halka "Cennetten arsa sattığı" (Endüljans) yozlaşmış sisteme isyan ederek 95 maddelik itirazını Wittenberg Kilisesi\'nin kapısına çiviledi. O dönemde matbaanın yeni icat edilmiş olması sayesinde, bu maddeler kopyalanıp haftalar içinde tüm Avrupa\'ya yayıldı. Luther\'in bir tahta kapıya vurduğu o çekiç darbesi, sadece bir kiliseyi ikiye bölmedi; insanların Tanrı ile aralarına hiçbir aracı kurum koymadan doğrudan bağ kurabilecekleri Protestanlık hareketini başlattı. Tarih, bazen devasa ordularla değil, haksızlığa karşı çivilenmiş basit bir kâğıt parçasıyla değişir.',
    questionStem: 'Martin Luther\'in eyleminin başarısında, kişisel cesaretinin yanı sıra parçada vurgulanan diğer asıl etken nedir?',
    options: [
      'Diğer ülkelerin krallarının ona askeri birlikler göndererek koruması',
      'Matbaa teknolojisinin yeni icat edilmiş olmasıyla fikirlerinin hızla kopyalanıp geniş kitlelere yayılabilmesi',
      'Katolik Kilisesi\'nin o dönemde maddi olarak tamamen iflas etmiş olması',
      'Halkın artık kiliselere gitmek istemeyen ateist bir düşünceye sahip olması'
    ],
    correct: 1,
    explanation: 'İtirazların kapıya asılması kadar, matbaa sayesinde kopyalanıp tüm Avrupa\'ya yayılmasının (teknolojinin fikir yaymadaki gücü) hareketin başlamasında etkili olduğu belirtilmiştir.'
  }
];

// 4. MAKİNE
export const tarihParagrafSorulari4: TarihParagrafQuestion[] = Array.from(
  { length: PARAGRAPH_THEMES_4.length }, 
  (_, idx) => {
    const theme = PARAGRAPH_THEMES_4[idx];
    const qNo = idx + 1;
    return {
      id: `turkce-tarih4-p-${qNo}`,
      subject: 'turkce',
      term: 2,
      prompt: `${theme.passage}\n\n${theme.questionStem}`,
      options: [...theme.options],
      correct: theme.correct,
      explanation: `${theme.explanation} (Soru ${qNo})`,
    };
});
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
export interface BilimParagrafQuestion {
  id: string;
  subject: 'turkce'; // İhtiyacına göre değiştirebilirsin
  term: number;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

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
// paragrafTests.ts dosyasının hata vermemesi için iki listeyi birleştirip eski adıyla dışa aktarıyoruz:
export const sincityParagrafQuestions: SincityParagrafQuestion[] = [
  ...tarihParagrafSorulari,
  ...tarihParagrafSorulari2,
  ...tarihParagrafSorulari3,
  ...tarihParagrafSorulari4,
  ...tarihParagrafSorulari5,
  ...tarihParagrafSorulari6,
  ...bilimParagrafSorulari7,
  ...felsefeParagrafSorulari8
];
