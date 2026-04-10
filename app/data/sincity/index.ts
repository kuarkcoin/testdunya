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
// İŞTE EKSİK OLAN 1. MAKİNE BURADA:
export const tarihParagrafSorulari: SincityParagrafQuestion[] = Array.from({ length: 50 }, (_, idx) => {
  const theme = PARAGRAPH_THEMES[idx % PARAGRAPH_THEMES.length];
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

export const tarihParagrafSorulari3: TarihParagrafQuestion[] = Array.from({ length: 50 }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_3[idx % PARAGRAPH_THEMES_3.length];
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

// Test 4 (Veya nasıl isimlendirmek istersen) için üretici makine:
export const tarihParagrafSorulari4: TarihParagrafQuestion[] = Array.from({ length: 50 }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_4[idx % PARAGRAPH_THEMES_4.length];
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
// paragrafTests.ts dosyasının hata vermemesi için iki listeyi birleştirip eski adıyla dışa aktarıyoruz:
export const sincityParagrafQuestions: SincityParagrafQuestion[] = [
  ...tarihParagrafSorulari,
  ...tarihParagrafSorulari2,
  ...tarihParagrafSorulari3,
  ...tarihParagrafSorulari4
];
