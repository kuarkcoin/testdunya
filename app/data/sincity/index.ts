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

export const sincityParagrafQuestions: SincityParagrafQuestion[] = Array.from({ length: 50 }, (_, idx) => {
  const theme = PARAGRAPH_THEMES[idx % PARAGRAPH_THEMES.length];
  const qNo = idx + 1;

  return {
    id: `sincity-paragraf-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
