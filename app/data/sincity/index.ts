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

// ÜRETİCİ MAKİNENİN İSMİNİ DE 2 OLARAK GÜNCELLEDİK:
export const tarihParagrafSorulari2: TarihParagrafQuestion[] = Array.from({ length: 50 }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_2[idx % PARAGRAPH_THEMES_2.length];
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
// paragrafTests.ts dosyasının hata vermemesi için iki listeyi birleştirip eski adıyla dışa aktarıyoruz:
export const sincityParagrafQuestions: SincityParagrafQuestion[] = [
  ...tarihParagrafSorulari,
  ...tarihParagrafSorulari2
];
