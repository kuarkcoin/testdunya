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
const PARAGRAPH_THEMES_9 = [
  {
    title: 'Rosenhan Deneyi: Tımarhanedeki Sağlamlar',
    passage: '1973 yılında psikolog David Rosenhan, psikiyatri hastanelerinin "deli" ile "akıllı"yı gerçekten ayırt edip edemeyeceğini test etmek için korkunç bir oyun oynadı. Kendisi dâhil sekiz tamamen sağlıklı insanı, sadece "sesler duyuyorum" yalanıyla farklı hastanelere yatırdı. İçeri girdikleri andan itibaren tamamen normal davrandılar. Ancak doktorlar ve hemşireler onların normal olduğunu asla fark etmedi; not tutmalarını bile "yazma kompülsiyonu" (psikolojik bir kriz) olarak fişlediler. İşin ürpertici yanı, sahte hastaların sağlıklı olduğunu doktorlar değil, içerideki gerçek şizofreni hastaları anladı. Rosenhan deneyi, bir insana "deli" etiketini (damgasını) yapıştırdığınızda, onun en normal davranışlarının bile o etiketin karanlık filtresinden geçerek nasıl bir hastalığa yorulduğunu acımasızca yüzümüze çarpar.',
    questionStem: 'Rosenhan Deneyi\'nin psikiyatri dünyasında yarattığı asıl sarsıntı aşağıdakilerden hangisidir?',
    options: [
      'Şizofreni hastalarının diğer insanlardan çok daha zeki ve gözlemci olduğunun kanıtlanması',
      'Bir kez yapıştırılan "hastalık" veya "delilik" etiketinin (önyargının), otoritenin o kişiyle ilgili tüm objektif algısını kör etmesi',
      'Akıl hastanelerindeki doktorların bilerek ve isteyerek sağlıklı insanları esir tutması',
      'Sesler duymanın aslında psikolojik bir hastalık değil, fizyolojik bir sorun olduğunun anlaşılması'
    ],
    correct: 1,
    explanation: 'Doktorların, etiketlenen kişilerin en normal hareketlerini bile hastalık sanması, bir etiketin otoritenin objektif algısını (gerçekliği) nasıl kör ettiğini ispatlar.'
  },
  {
    title: 'Harlow\'un Maymunları',
    passage: '1950\'lerde psikolog Harry Harlow, sevginin sadece "karın doyurmaktan" ibaret olup olmadığını anlamak için yavru maymunları annelerinden ayırdı. Onları iki cansız maket annenin olduğu bir kafese koydu: Biri göğsünde süt biberonu olan soğuk tellerden yapılmış bir anne, diğeri ise süt vermeyen ama yumuşacık havluya sarılmış sıcak bir anneydi. Bilim dünyası, yavruların süt veren tel anneye bağlanacağını sanıyordu. Ancak yavrular sadece acıktıklarında tel anneye gidip süt içiyor, günün geri kalan 22 saatini o süt vermeyen yumuşak havlu anneye sıkıca sarılarak geçiriyorlardı. Harlow bu acımasız deneyle, sevginin ve bağlanmanın sadece biyolojik bir beslenme takası olmadığını; şefkatin, dokunmanın ve sıcaklığın en az yemek kadar hayati bir ihtiyaç olduğunu kanıtladı.',
    questionStem: 'Harlow\'un Maymun Deneyi, anne-bebek bağı (sevgi) konusunda hangi geleneksel inanışı çürütmüştür?',
    options: [
      'Bağlanmanın ve sevginin temelinde sadece beslenme (süt) ve fiziksel ihtiyaçların karşılanmasının yattığı inancını',
      'Yavru maymunların maketlerle asla duygusal bağ kuramayacağı düşüncesini',
      'Anne sütünün yavruların zihinsel gelişimi için tek şart olduğu tezini',
      'Korku anında hayvanların her zaman en çok yiyecek veren kişiye koştuğu inancını'
    ],
    correct: 0,
    explanation: 'Süt vermemesine rağmen yumuşak anneye sarılmaları, sevginin sadece "karın doyurma/beslenme" takası olduğu yönündeki o dönemin geleneksel biyolojik inancını çürütmüştür.'
  },
  {
    title: 'Küçük Albert Deneyi',
    passage: '1920 yılında psikolog John B. Watson, dokuz aylık "Küçük Albert" adlı bir bebeği laboratuvarına getirdi. Bebek beyaz bir fareden hiç korkmuyor, onunla oyun oynuyordu. Ancak Watson, Albert fareye her dokunduğunda arkadan devasa bir demir çubuğa çekiçle vurarak korkunç bir ses çıkardı. Bebek günlerce bu sesten dehşete düştü. Sonunda ortada hiçbir ses olmasa bile, beyaz fareyi gördüğü an histerik bir şekilde ağlamaya başladı. Hatta korkusu beyaz tavşanlara ve beyaz sakallı maskelere bile sıçradı. Bilim tarihinin en ahlaksız deneylerinden biri olan Küçük Albert, fobilerimizin ve korkularımızın doğuştan gelmediğini; dış dünya tarafından zihnimize zorla kodlanan (öğrenilmiş) psikolojik birer virüs olduğunu kanıtlamıştır.',
    questionStem: 'Küçük Albert Deneyi, insan psikolojisindeki fobilerle ilgili neyi ispatlamaktadır?',
    options: [
      'Bebeklerin hayvanlara karşı doğuştan gelen gizli bir nefrete sahip olduğunu',
      'Yüksek sesin bebeklerin işitme duyusuna kalıcı zararlar verdiğini',
      'Korku ve fobilerin genetik (doğuştan) değil, çevresel faktörler ve travmatik eşleştirmelerle sonradan inşa edilen (öğrenilen) tepkiler olduğunu',
      'Beyaz rengin insan psikolojisinde her zaman korkuyu tetikleyen evrimsel bir şifre olduğunu'
    ],
    correct: 2,
    explanation: 'Albert\'in baştan korkmadığı fareye, yüksek sesle eşleştirildikten sonra korkmaya başlaması, fobilerin doğuştan gelmediğini, çevresel olarak öğrenildiğini kanıtlar.'
  },
  {
    title: 'İyi Samiriyeli Deneyi ve Zaman',
    passage: '1973\'te psikologlar, ilahiyat fakültesi öğrencileriyle ahlak üzerine bir deney yaptı. Öğrencilerden, İncil\'deki yardımlaşmayı anlatan "İyi Samiriyeli" hikâyesi üzerine bir konuşma yapmak için yan binaya gitmeleri istendi. Yolun ortasında acı içinde inleyen, hasta bir aktör yerleştirildi. Öğrencilerin bazılarına "Geç kaldınız, acele edin", bazılarına ise "Vaktiniz bol, yavaş gidebilirsiniz" dendi. Sonuç sarsıcıydı: İyilik üzerine vaaz vermeye giden ve "geç kaldığı" söylenen öğrencilerin %90\'ı yerdeki adamın üstünden atlayıp onu görmezden geldi! Vakti olanların ise çoğu yardım etti. Bu deney, insanoğlunun ahlaki değerlerinin ve vicdanının ne kadar yüce olursa olsun, "zaman baskısı" ve aciliyet karşısında nasıl saniyeler içinde buharlaşıp çöktüğünün acı bir göstergesidir.',
    questionStem: 'İyi Samiriyeli Deneyi\'nin sonuçlarına göre, insanın ahlaki bir eylemde (yardım etmede) bulunmasını engelleyen asıl dış faktör nedir?',
    options: [
      'Kişinin aldığı dini veya ahlaki eğitimin yetersiz olması',
      'Toplumsal statüsünü kaybetme korkusu yaşaması',
      'İçinde bulunduğu durumsal aciliyetin (zaman baskısının), sahip olduğu ahlaki değerleri askıya almasına neden olması',
      'Yerde yatan kişinin tehlikeli bir suçlu olabileceğine dair duyulan paranoya'
    ],
    correct: 2,
    explanation: 'İyilik vaazı vermeye giden öğrencilerin sırf "geç kaldıkları" için adamı ezip geçmesi, ahlaki değerlerin zaman baskısı ve aciliyet karşısında çöktüğünü gösterir.'
  },
  {
    title: 'Görünmez Goril Deneyi',
    passage: 'Psikologlar Christopher Chabris ve Daniel Simons, insan algısının körlüğünü kanıtlamak için basit bir video hazırladı. İnsanlardan, ekrandaki beyaz tişörtlü oyuncuların kendi aralarında kaç kez paslaştığını saymaları istendi. Görev bittiğinde katılımcılara şu soruldu: "Peki, videonun ortasında sahneye girip göğsünü yumruklayan devasa gorili gördünüz mü?" Katılımcıların yarısı şok içindeydi; ortada bir goril olmadığına yemin ettiler. Videoyu tekrar izlediklerinde ise gözlerine inanamadılar. "Dikkat Körlüğü" denen bu fenomen, gözlerimizin bir kamera gibi etrafı kaydetmediğini; zihnimizin sadece odaklandığı şeye inanıp, geri kalan devasa gerçekliği tamamen sildiğini (körü körüne yoksaydığını) ispatlar.',
    questionStem: 'Görünmez Goril Deneyi, insan algısı hakkında hangi rahatsız edici gerçeği ortaya koymaktadır?',
    options: [
      'Göz hastalıklarının sanıldığından çok daha yaygın ve sinsi bir şekilde ilerlediğini',
      'İnsan zihninin aynı anda iki farklı matematiksel işlemi (pas saymayı) yapamayacak kadar kapasitesiz olduğunu',
      'Belirli bir göreve aşırı odaklanıldığında, gözümüzün önünde duran çok belirgin ve büyük gerçeklikleri bile tamamen körleşerek kaçırabileceğimizi',
      'Siyah ve koyu renklerin insan beyni tarafından beyaz renklere göre daha zor algılandığını'
    ],
    correct: 2,
    explanation: 'Pas saymaya odaklanan insanların kocaman bir gorili görmemesi, yoğun odaklanma anlarında (dikkat körlüğü) apaçık gerçekleri bile kaçırabildiğimizi ispatlar.'
  },
  {
    title: 'Bilişsel Çelişki: 1 Doların Yalanı',
    passage: 'Psikolog Leon Festinger, 1959\'da katılımcılara saatlerce tahta mandalları çevirdikleri inanılmaz sıkıcı bir görev verdi. Görev bittiğinde, katılımcıların bir kısmına dışarıdaki bekleyen kişiye "Bu görev çok eğlenceliydi" yalanını söylemeleri için 1 dolar, diğerlerine ise 20 dolar ödendi. Sonrasında onlara görevi gerçekten sevip sevmedikleri soruldu. 20 dolar alanlar görevin çok sıkıcı olduğunu itiraf etti; çünkü yalan söylemek için "20 dolar aldım" gibi mantıklı bir bahaneleri vardı. Ancak sadece 1 dolar alanlar, bu kadar ucuz bir paraya yalan söylemiş olmanın verdiği "Bilişsel Çelişki" (içsel huzursuzluk) yüzünden kendi kendilerini kandırdılar ve "Aslında görev fena değildi, eğlendim" demeye başladılar. İnsanoğlu, kendi ikiyüzlülüğüyle yüzleşmemek için, inançlarını davranışlarına uyduracak şekilde gerçekliği yeniden yazar.',
    questionStem: 'Bilişsel Çelişki (Cognitive Dissonance) deneyine göre, 1 dolar alanların görevi "eğlenceli" bulmasının asıl psikolojik nedeni nedir?',
    options: [
      'Küçük bir ödüle yalan söylemiş olma duygusunun (çelişkinin) yarattığı rahatsızlığı gidermek için kendi kendilerini kandırıp inançlarını değiştirmeleri',
      '1 doların o dönemin şartlarında 20 dolardan çok daha değerli bir para birimi olması',
      'Tahta mandalları çevirmenin zamanla meditatif ve dinlendirici bir etki yaratması',
      'Az para aldıkları için araştırmacılara acıyıp onları mutlu etmeye çalışmaları'
    ],
    correct: 0,
    explanation: '1 doların yetersiz bir bahane olması sebebiyle yaşanan içsel çelişkiyi/rahatsızlığı gidermek için gerçeği büküp "aslında eğlendim" diyerek kendilerini kandırmalarıdır.'
  },
  {
    title: 'Hırsızlar Mağarası Deneyi',
    passage: '1954 yılında Muzafer Sherif, tamamen normal 22 erkek çocuğunu bir yaz kampına götürdü ve onları birbirinden habersiz iki gruba ayırdı (Kartallar ve Çıngıraklı Yılanlar). Gruplar birbirini keşfettiğinde, araştırmacılar aralarında ödüllü yarışmalar düzenleyerek rekabeti körükledi. Sadece birkaç gün içinde bu masum çocuklar birbirlerinin bayraklarını yakan, birbirine bıçak çeken vahşi düşmanlara dönüştüler. Ancak Sherif, bu nefreti bitirmek için psikolojik bir hamle yaptı: Kampa gelen su borusunu bozdu. Susuz kalan iki düşman grup, hayatta kalmak için o boruyu omuz omuza verip onarmak zorunda kaldı. Su aktığında, düşmanlık bitmişti. Önyargı ve nefret çok kolay inşa edilir; ancak bunu yok etmenin tek yolu, her iki tarafı da tehdit eden daha büyük bir "ortak hedef" yaratmaktır.',
    questionStem: 'Hırsızlar Mağarası Deneyi\'ne göre, toplumsal gruplar arasındaki köklü düşmanlıkların (çatışmaların) çözülmesindeki en etkili yöntem nedir?',
    options: [
      'Gruplar arasında düzenli olarak kültürel ve sanatsal yarışmalar düzenlemek',
      'Liderleri bir araya getirerek barış antlaşmaları imzalatmaya zorlamak',
      'Her iki grubun da tek başına çözemeyeceği, birleşmek zorunda oldukları üst düzey ve hayati bir "ortak hedef" (veya tehlike) yaratmak',
      'Grupları birbirinden tamamen izole ederek birbirlerini görmelerini engellemek'
    ],
    correct: 2,
    explanation: 'Düşman olan çocukların su borusunu tamir etmek için birleşip barışması, çatışmaların ancak herkesi ilgilendiren üst düzey bir ortak hedefle (su krizi) aşılabileceğini gösterir.'
  },
  {
    title: 'Sahte Anı Sendromu',
    passage: 'Hafızamızın, geçmişi tıpkı bir kamera gibi eksiksiz kaydettiğini sanırız. Oysa psikolog Elizabeth Loftus bunun devasa bir yanılsama olduğunu kanıtladı. Loftus, "Kayıp Alışveriş Merkezi" deneyinde, katılımcıların aileleriyle anlaştı ve onlara çocukken yaşamadıkları sahte bir anıyı anlattı: "Beş yaşındayken bir alışveriş merkezinde kaybolmuştun, ağlıyordun ve yaşlı bir kadın seni bulmuştu." Katılımcıların %25\'i bu yalanı sadece kabul etmekle kalmadı; üzerine detaylar eklemeye, o yaşlı kadının kıyafetini ve hissettikleri korkuyu tasvir etmeye başladılar! Hafıza güvenilir bir arşivci değil; diğer insanların telkinleriyle geçmişi durmaksızın yeniden yazan yetenekli ve tehlikeli bir bilimkurgu yazarıdır.',
    questionStem: 'Elizabeth Loftus\'un "Sahte Anı" deneyleri, insan belleği hakkında hangi rahatsız edici durumu kanıtlar niteliktedir?',
    options: [
      'Çocukluk anılarının yaş ilerledikçe tamamen silindiğini ve beynin kapasitesinin küçüldüğünü',
      'İnsan beyninin, dışarıdan gelen telkinler ve yönlendirmelerle hiç yaşanmamış olayları bile kusursuzca (ve inançla) kurgulayabilecek kadar manipülasyona açık olduğunu',
      'Alışveriş merkezi gibi kalabalık yerlerin çocuklarda kalıcı travmalar yarattığını',
      'İnsanların yalan söyleme becerilerinin zekâ seviyeleriyle doğru orantılı olarak arttığını'
    ],
    correct: 1,
    explanation: 'İnsanların hiç yaşamadıkları kaybolma olayına inandıkları gibi üzerine detay da eklemeleri, hafızanın dış telkinlerle sahte anılar üretebilecek kadar manipülasyona açık olduğunu kanıtlar.'
  },
  {
    title: 'Capilano Asma Köprüsü: Yanlış Atfedilen Aşk',
    passage: 'Psikologlar Arthur Aron ve Donald Dutton, duygularımızın bizi nasıl kandırdığını göstermek için muazzam bir deney yaptı. Çekici bir kadın araştırmacı, bir grup erkeğin yanına sağlam ve alçak bir köprüde; diğer grubun yanına ise rüzgârda sallanan, metrelerce yüksekteki korkutucu Capilano Asma Köprüsü\'nün tam ortasında yaklaştı. Kadın her iki gruba da anket yapıp telefon numarasını verdi. Korkutucu köprüdeki erkeklerin neredeyse tamamı kadını arayıp çıkma teklif etti; çünkü sallanan köprünün yarattığı adrenalin, kalp çarpıntısı ve terlemeyi beyinleri yanlış yorumlamış, bu fiziksel korku belirtilerini "kadına karşı duyulan cinsel çekim (aşk)" sanmışlardı. Zihnimiz, bedenimizin verdiği tepkileri okurken çoğu zaman berbat bir çevirmendir.',
    questionStem: 'Capilano Asma Köprüsü deneyi, insan duygularının oluşumuyla ilgili hangi psikolojik hatayı (fenomeni) ispatlamaktadır?',
    options: [
      'Erkeklerin doğa sporları ve macera anlarında romantik ilişkilerden kaçındığını',
      'Yükseklik korkusunun insanlarda kalıcı bir kalp ritmi bozukluğuna yol açtığını',
      'İnsan beyninin, tehlike veya korkunun yarattığı fiziksel uyarılmayı (çarpıntıyı) yanlış yorumlayarak bunu romantik bir çekim veya aşk sanması (duygunun yanlış atfedilmesi)',
      'Kadın araştırmacıların deneylerde erkek katılımcıları her zaman manipüle ettiğini'
    ],
    correct: 2,
    explanation: 'Köprünün korkusuyla artan kalp atışını beynin "kadına duyulan aşk" olarak yanlış yorumlaması, fiziksel uyarılmanın duygulara yanlış atfedildiğini kanıtlar.'
  },
  {
    title: 'Mavi Gözlülerin Tiranlığı',
    passage: '1968\'de Martin Luther King suikasta kurban gittiğinde, ilkokul öğretmeni Jane Elliott, 8 yaşındaki beyaz öğrencilerine ayrımcılığın ne kadar iğrenç olduğunu öğretmek için bir deney yaptı. Sınıfa girdi ve "Mavi gözlü çocuklar daha zeki, daha üstün ve daha temizdir" dedi. Kahverengi gözlülere yakalar takıldı ve onlara dışlanmış (aşağı) bir sınıf gibi davranıldı. Sadece 15 dakika içinde o masum çocukların içinden birer canavar çıktı. Mavi gözlüler, kahverengi gözlü arkadaşlarına hakaret etmeye, onları ezmeye ve dışlamaya başladı. Irkçılık ve ayrımcılık insan doğasının genetik bir kaderi değil; otorite tarafından zihinlere enjekte edilen ve saniyeler içinde masumiyeti kibre çeviren suni bir yalandır.',
    questionStem: 'Jane Elliott\'ın Mavi/Kahverengi göz deneyi, ırkçılık ve ayrımcılık hakkında topluma nasıl bir mesaj vermektedir?',
    options: [
      'Çocukların göz rengine göre akademik başarılarının gerçekten de değişiklik gösterdiğini',
      'Ayrımcılığın doğuştan gelen genetik bir refleks olduğunu ve değiştirilemeyeceğini',
      'Irkçılığın ve sınıfsal üstünlük inancının (ötekileştirmenin), dışarıdan/otorite tarafından öğretilen ve çok hızlı yayılan tehlikeli ve suni bir kurgu olduğunu',
      'İlkokul öğrencilerinin soyut ahlaki kavramları algılayacak zekâ seviyesine sahip olmadığını'
    ],
    correct: 2,
    explanation: 'Sırf öğretmen "mavi gözlüler üstündür" dedi diye çocukların saniyeler içinde zalimleşmesi, ırkçılığın ve ayrımcılığın otorite tarafından öğretilen suni bir yalan (kurgu) olduğunu gösterir.'
  },
  {
    title: 'Barnum Etkisi: Falcıların Sırrı',
    passage: 'Psikolog Bertram Forer, öğrencilerine bir kişilik testi yaptı ve sonuçların haftaya açıklanacağını söyledi. Ertesi hafta her öğrenciye ismine özel hazırlanmış (!) bir sonuç zarfı verdi. Öğrenciler sonuçları okuyup 5 üzerinden 4.26 gibi devasa bir puanla testin karakterlerini "kusursuzca" özetlediğini söylediler. Oysa Forer herkese kelimesi kelimesine aynı metni vermişti: "Bazen dışa dönüksün, bazen içe kapanık. Kendini eleştirme eğilimin var ama kullanılmayan büyük bir potansiyel taşıyorsun..." "Barnum Etkisi" denen bu psikolojik zaaf, astrolojinin ve falcıların en büyük silahıdır. İnsan egosu öylesine aç ve özel hissetmeye öylesine muhtaçtır ki; herkese uyan sıradan, genel geçer ve ucu açık yalanları sanki sadece kendisine söylenmiş evrensel bir sır gibi sahiplenir.',
    questionStem: 'Barnum (Forer) Etkisi, insanların burç yorumlarına ve fallara inanmasını hangi psikolojik zaafla açıklamaktadır?',
    options: [
      'Geleceği önceden bilme isteğinin yarattığı aşırı kaygı ve stres durumuyla',
      'İnsanın kendini özel ve benzersiz hissetme (ego) arzusu yüzünden, aslında herkese uyabilen genel geçer ifadeleri kendine has mutlak doğrular olarak kabullenmesiyle',
      'Astrolojinin binlerce yıllık bilimsel bir geçmişe dayanmasının yarattığı güvenle',
      'Gençlerin yaşlılara göre soyut kavramlara daha fazla ilgi duymasıyla'
    ],
    correct: 1,
    explanation: 'Herkese verilen aynı genel geçer metni öğrencilerin kendi karakterleri sanıp yüksek puan vermesi, egonun özel hissetme arzusuyla sıradan sözleri sahiplendiğini kanıtlar.'
  },
  {
    title: 'Çerçeveleme (Framing) Etkisi',
    passage: 'Nobel ödüllü psikolog Daniel Kahneman, insanların kararlarında ne kadar rasyonel olduğunu test etti. İki farklı doktor grubuna aynı riskli ameliyatı sundu. Bir gruba "Bu ameliyatın bir ay yaşama şansı %90\'dır" dedi. Diğer gruba ise "Bu ameliyatta ilk bir ay içinde ölüm oranı %10\'dur" dedi. Matematiksel olarak iki oran da tamamen aynı ihtimali gösteriyordu. Ancak %90 yaşama şansı duyan doktorların ezici çoğunluğu ameliyatı onaylarken, %10 ölüm riskini duyan doktorlar ameliyatı reddetti. "Çerçeveleme Etkisi", kararlarımızın mantığa veya matematiğe göre değil; bilginin bize nasıl bir kelime oyunuyla (çerçeveyle) sunulduğuna ve zihnimizin kayıplardan ne kadar korktuğuna bağlı olduğunu ispatlar.',
    questionStem: 'Çerçeveleme Etkisi\'nin karar alma mekanizmamız üzerindeki sarsıcı etkisi nedir?',
    options: [
      'İnsanların matematiksel hesaplamalarda genellikle teknolojik araçlara ihtiyaç duyması',
      'Aynı bilginin olumlu veya olumsuz kelimelerle (farklı bir çerçeveyle) sunulmasının, insan mantığını devre dışı bırakarak tamamen farklı kararlar verdirebilmesi',
      'Doktorların cerrahi müdahalelerde her zaman en yüksek riski göze alması',
      'Ölüm korkusunun insanları daha fazla kitap okumaya ve araştırmaya yöneltmesi'
    ],
    correct: 1,
    explanation: 'Matematiksel olarak %90 yaşama ile %10 ölüm aynı olmasına rağmen doktorların farklı kararlar vermesi, bilginin sunuluş biçiminin (çerçevenin) mantığı devre dışı bıraktığını gösterir.'
  },
  {
    title: 'Pratfall Etkisi: Kusurun Çekiciliği',
    passage: 'Hepimiz kusursuz, hata yapmayan ve her şeyi bilen insanlara hayran olduğumuzu düşünürüz. Ancak psikolog Elliot Aronson "Pratfall Etkisi" ile bunun tam tersini kanıtladı. Bir deneyde katılımcılara çok başarılı ve kusursuz konuşan bir öğrencinin ses kaydı dinletildi. Herkes onu çok beğendi. Ancak aynı öğrenci kaydın sonunda elindeki kahveyi kazara üzerine döktüğünde ve utançla güldüğünde, dinleyicilerin o kişiye duyduğu beğeni ve sempati tavan yaptı. Kusursuzluk, bizi içten içe tehdit eder ve o kişiyi insanüstü (soğuk) bir yere konumlandırmamıza neden olur. Oysa küçük bir hata, küçük bir sakarlık, o aşılmaz zırhı deler; karşımızdakinin bizim gibi "kusurlu bir insan" olduğunu hatırlatarak onu çok daha çekici ve sevilmeye layık kılar.',
    questionStem: 'Pratfall Etkisi\'ne göre, çok başarılı bir insanın küçük bir hata veya sakarlık yapması toplum tarafından nasıl algılanır?',
    options: [
      'Onun aslında o kadar da zeki olmadığı düşünülerek hızla saygınlığını yitirmesine neden olur.',
      'Rekabetçi bir dünyada bu zayıflığın anında kullanılarak kişinin dışlanmasıyla sonuçlanır.',
      'Onun o soğuk ve kusursuz imajını kırarak, daha insani, cana yakın ve sempati duyulabilir (çekici) bir hale gelmesini sağlar.',
      'Çevresindeki insanların da bilinçli olarak hata yapmaya başlamasına (kötü örnek olmasına) yol açar.'
    ],
    correct: 2,
    explanation: 'Başarılı birinin kahve dökmesiyle sempatisinin tavan yapması, küçük hataların o kusursuz zırhı kırıp kişiyi daha insani ve çekici kıldığını kanıtlar.'
  },
  {
    title: 'Benjamin Franklin Etkisi',
    passage: 'Eğer birinin sizi sevmesini istiyorsanız ona iyilik yapmalısınız, değil mi? Hayır. Benjamin Franklin, siyasetteki en azılı düşmanını kendine dost yapmak için ondan çok nadir bulunan bir kitabı ödünç istedi. Düşmanı kitabı verdi ve kısa süre sonra şaşırtıcı bir şekilde Franklin\'e karşı nazik ve destekleyici bir tavır sergilemeye başladı. Psikoloji bu durumu "Bilişsel Çelişki" ile açıklar: Zihnimiz "Nefret ettiğim birine neden iyilik yapıyorum?" sorusunun yarattığı huzursuzluğu çözmek için, durumu tersten kurgular ve "Ona iyilik yaptığıma göre, aslında o fena biri değil, onu seviyor olmalıyım" yalanına inanır. Yani biz sevdiklerimize iyilik yapmayız; iyilik yaptıklarımızı sevmeye başlarız.',
    questionStem: 'Benjamin Franklin Etkisi\'nin temelini oluşturan psikolojik mekanizma parçada nasıl açıklanmaktadır?',
    options: [
      'Kitap okumanın insanların empati duygusunu ve siyasi uzlaşma kültürünü artırması',
      'Sevmediğimiz birine iyilik yaptığımızda zihnimizin yaşadığı çelişkiyi gidermek için, "Ona yardım ettiğime göre onu seviyor olmalıyım" diyerek duygularımızı davranışımıza uydurması',
      'İyilik gören kişinin minnet duygusu altında ezilerek düşmanlığından kendiliğinden vazgeçmesi',
      'Siyasetçilerin halka şirin görünmek için sahte dostluklar kurma eğiliminde olması'
    ],
    correct: 1,
    explanation: 'Zihnin nefret ettiği birine iyilik yapma çelişkisini çözmek için "ona yardım ettiğime göre fena biri değil" diyerek duygularını davranışına uydurması Benjamin Franklin etkisidir.'
  },
  {
    title: 'Kontrol Yanılsaması',
    passage: 'Psikolog Ellen Langer, ofis çalışanlarına piyango biletleri sattı. Bir gruba biletler rastgele dağıtıldı; diğer gruba ise bilet numaralarını kendilerinin seçme hakkı verildi. Çekilişten hemen önce Langer insanlara gidip biletlerini geri satın almak istediğini söyledi. Rastgele bilet alanlar biletlerini ortalama 2 dolara satmaya razı oldu. Ancak numarayı "kendi seçenler", biletlerini 8 dolardan aşağı satmayı reddetti! Oysa piyango tamamen şansa dayalıydı ve bir numarayı kişinin kendisinin seçmesi kazanma ihtimalini yüzde bir bile artırmıyordu. "Kontrol Yanılsaması", insanoğlunun kibridir. Rastgele gelişen evrensel veya şansa bağlı olayları, sırf işin içine dâhil olduk diye kendi irademizle etkileyebileceğimize dair o ahmakça ve derin inancımızdır.',
    questionStem: 'Kontrol Yanılsaması deneyi, insan zihninin hangi irrasyonel (mantık dışı) eğilimini kanıtlamaktadır?',
    options: [
      'Piyango ve kumar oyunlarında matematiksel hesaplamaların her zaman işe yaradığını',
      'Kişinin kendi yaptığı bir seçimin (müdahalenin), tamamen tesadüfe ve şansa dayalı olayların sonucunu değiştirebileceğine (kontrol edebileceğine) inanması kibrini',
      'Ofis çalışanlarının dışarıdan gelen araştırmacılara karşı her zaman güvensiz davrandığını',
      'İnsanların ellerindeki eşyaları sattıklarında her zaman pişmanlık duygusu yaşadığını'
    ],
    correct: 1,
    explanation: 'Bilet numarasını kendi seçtiği için piyangoyu kazanma şansının arttığını sanan (kibrini gösteren) insanların, rastgele şansa müdahale edebileceğine inanması Kontrol Yanılsamasıdır.'
  },
  {
    title: 'Adil Dünya İnancı (Just-World Hypothesis)',
    passage: 'Haberlerde gece vakti ıssız bir sokakta saldırıya uğrayan birini gördüğümüzde, zihnimizde hemen o fısıltı yankılanır: "O saatte orada ne işi vardı?" Psikolog Melvin Lerner, insanların neden mağdurları (kurbanları) suçlamaya bu kadar eğilimli olduğunu inceledi. Sebebi acımasızlık değil, korkudur. Eğer kötü şeylerin, hiçbir suçu olmayan tamamen masum insanların başına "rastgele" gelebileceğini kabul edersek, bu dünyanın korkunç, güvensiz ve kaotik bir yer olduğunu da kabul etmemiz gerekir. Bunu reddetmek için zihnimiz "Adil Dünya İnancı"na sığınır ve "Kurban mutlaka bir hata yapmıştır, bu yüzden benim başıma gelmeyecek" der. Mağduru suçlamak, evrenin rastgele zulmü karşısında beynimizin ördüğü konforlu ama ahlaksız bir yalan duvarıdır.',
    questionStem: 'İnsanların mağdurları (kurbanları) suçlamasının (Adil Dünya İnancı) altında yatan asıl psikolojik neden nedir?',
    options: [
      'Kurbanların her zaman gizli suç dosyalarının bulunduğuna dair kanıtlar olması',
      'İnsanların genetik olarak empati yoksunu ve başkalarının acısından zevk alan varlıklar olması',
      'Kötülüğün rastgele olduğunu kabul etmenin getireceği güvensizlik korkusunu bastırmak ve "dünyanın adil bir yer olduğu, benim başıma gelmeyeceği" yanılsamasını koruma çabası',
      'Medyada çıkan haberlerin insanları kasten yanlış yönlendirerek kurbanı suçlu göstermesi'
    ],
    correct: 2,
    explanation: 'Kötülüğün rastgele olduğunu kabul edemeyen zihnin, korkuyu bastırmak için kurbanı suçlayıp "dünya adildir, suçlu cezasını çekti, bana bir şey olmaz" yalanına sığınması anlatılmıştır.'
  },
  {
    title: 'Seçim Paradoksu: Reçel Deneyi',
    passage: 'Klasik ekonomi bilimi, insanlara ne kadar çok seçenek sunarsanız o kadar mutlu ve özgür olacaklarını savunur. Psikolog Barry Schwartz "Seçim Paradoksu" ile bunun bir efsane olduğunu kanıtladı. Meşhur reçel deneyinde, bir markette müşterilere önce 24 çeşit reçel tattırıldı; insanların ilgisi büyüktü ama sadece %3\'ü reçel satın aldı. Ertesi gün seçenek sadece 6 çeşide düşürüldü. İlgi daha azdı ama bu kez müşterilerin tam %30\'u reçel satın aldı! Sınırsız özgürlük ve sonsuz seçenek insanı mutlu etmez, aksine beyni felç eder (karar yorgunluğu). Seçmediğimiz diğer ihtimallerin (kaçan fırsatların) pişmanlığı o kadar büyüktür ki, bizi bir kafese hapseder. Tüketim çağında gerçek özgürlük, daha fazlasına sahip olmak değil, seçenekleri eleyebilmektir.',
    questionStem: 'Reçel Deneyi\'nin ortaya koyduğu "Seçim Paradoksu", hangi geleneksel inancı yıkmıştır?',
    options: [
      'Tüketicilerin sadece ucuz ve kalitesiz ürünleri tercih ettiği inancını',
      'Fazla seçeneğin insanları daha özgür, kararlı ve mutlu yapacağı (satışları artıracağı) yönündeki inancı yıkarak, aşırı seçeneğin zihni felç ettiğini göstermiştir',
      'Tatlı gıdaların insanlar üzerinde bağımlılık yaptığı inancını',
      'Gıda sektöründe reklamcılığın ürün kalitesinden daha önemli olduğu inancını'
    ],
    correct: 1,
    explanation: '24 çeşitte satışın %3, 6 çeşitte satışın %30 olması; fazla seçeneğin mutlu/özgür etmediğini, aksine karar yorgunluğu yaratarak beyni felç ettiğini göstermiştir.'
  },
  {
    title: 'Salt Maruz Kalma Etkisi (Mere Exposure)',
    passage: 'Psikolog Robert Zajonc, katılımcılara anlamlarını bilmedikleri anlamsız Çince karakterler veya daha önce hiç görmedikleri rastgele insan yüzleri gösterdi. Bazı karakterleri sadece bir kez, bazılarını ise deney boyunca yirmi kez gösterdi. Deneyin sonunda katılımcılara hangi karakterleri "daha sempatik ve olumlu" buldukları soruldu. İstisnasız hepsi, anlamını bilmemelerine rağmen en çok maruz kaldıkları (en sık gördükleri) karakterleri daha çok sevdiklerini söylediler. "Salt Maruz Kalma Etkisi", reklamcıların ve politikacıların bizi yönettiği o karanlık arka kapıdır. Bir şeye sırf tekrar tekrar ve sıkça maruz kaldığımız için (aşina olduğumuz için) onun güvenli ve "iyi" olduğunu sanırız. Tercihlerimiz, özgür irademizin değil, gözümüzün neye daha çok zorlandığının bir sonucudur.',
    questionStem: 'Salt Maruz Kalma Etkisi\'nin kararlarımız ve beğenilerimiz üzerindeki gücü nedir?',
    options: [
      'İnsanların her zaman kendilerinden farklı ve yeni olan şeylere karşı büyük bir merak duyması',
      'Sıkça karşılaştığımız ve aşina olduğumuz şeylere (reklamlar, yüzler vb.) sırf o tekrar yüzünden sempati duyup onları güvenli/iyi olarak tercih etmemiz',
      'Çince gibi zor dillerin görsel hafıza sayesinde çok daha kolay öğrenilebilmesi',
      'Karmaşık görsellerin insan psikolojisinde her zaman korku ve tehdit algısı yaratması'
    ],
    correct: 1,
    explanation: 'Katılımcıların anlamını bilmese de yirmi kez gördüğü şekli sevmesi; sıkça maruz kaldığımız, aşina olduğumuz şeyleri sırf o tekrar yüzünden seçtiğimizi kanıtlar.'
  },
  {
    title: 'Sahne Işığı Etkisi (Spotlight Effect)',
    passage: 'Ergenlikte veya yetişkinlikte, yüzümüzde bir sivilce çıktığında veya kahveyi üzerimize döktüğümüzde, sokaktaki herkesin bize baktığını, bizi yargıladığını ve rezil olduğumuzu düşünürüz. Psikolog Thomas Gilovich bunu test etmek için bir öğrenciye, üzerinde çok utanç verici, devasa bir Barry Manilow resmi olan tişört giydirdi ve onu kalabalık bir sınıfa soktu. Öğrenciye sorsalar sınıfın en az yarısı onunla alay etmiş ve o tişörtü fark etmişti. Oysa sınıftakilere sorulduğunda, o iğrenç tişörtü fark edenlerin oranı sadece %20 idi. "Sahne Işığı Etkisi" şu tokat gibi gerçeği vurur: Bizler kendi dünyamızın başrol oyuncusuyuz ve tüm spot ışıklarının bizim üzerimizde olduğunu sanırız; oysa geri kalan milyarlarca insanın kendi hayatlarının telaşından bize bakacak ne vakti ne de ilgisi vardır.',
    questionStem: 'Sahne Işığı Etkisi (Spotlight Effect), insanların sosyal ortamlardaki hangi yanılgısını tanımlar?',
    options: [
      'Utanç verici kıyafetler giyen kişilerin toplumdan tamamen dışlanarak yalnızlaştığını',
      'Diğer insanların dikkatini ve yargılayıcı bakışlarını (aslında kimsenin o kadar umurunda olmasak da) kendi üzerimizde devasa bir şekilde abartma ve merkeze koyma yanılgısını',
      'Sınıf ortamlarının öğrencilerin stres seviyesini düşürerek odaklanmalarını artırdığını',
      'İnsanların sadece popüler kültür ikonlarını (ünlü şarkıcıları) takip etme eğiliminde olduğunu'
    ],
    correct: 1,
    explanation: 'Utanç verici tişörtü herkesin gördüğünü sanan öğrencinin yanılması; kendi üzerimizdeki dikkati (kimsenin umurunda olmasak da) devasa bir şekilde abartmamız yanılgısını gösterir.'
  },
  {
    title: 'Nocebo Etkisi: Beklentinin Zehri',
    passage: 'Plasebo etkisinin karanlık ve şeytani ikizi olan "Nocebo Etkisi", insan beyninin ne kadar ölümcül bir silah olabileceğinin ispatıdır. Bir ilaç deneyinde, hastalara tamamen zararsız şeker hapları verilmiş, ancak onlara "Bu ilacın şiddetli mide bulantısı ve döküntü gibi yan etkileri olabilir" denmiştir. İlaçta hiçbir etken madde olmamasına rağmen, hastaların büyük bir kısmı kıvranarak kusmaya başlamış ve vücutlarında gerçekten de yaralar çıkmıştır. Nocebo, zihnimizin kötümser ve korkutucu bir telkini alıp, vücudumuza o fiziksel zararı kendi elleriyle ürettirmesidir. Dışarıdan bir zehir içmemize gerek yoktur; çaresizliğe ve hastalığa olan derin inancımız, damarlarımızda kendi zehrini yaratacak güce sahiptir.',
    questionStem: 'Nocebo Etkisi kavramı parçada nasıl tanımlanmaktadır?',
    options: [
      'Şeker hastalarının ilaç kullanımında yaşadığı metabolik bir kriz durumu',
      'Hastaların doktorların tavsiyelerini bilerek ve isteyerek uygulamaktan kaçınması',
      'Kötü bir yan etki veya hastalık (korku/telkin) beklentisinin, ortada gerçek bir neden (zehir) yokken bile vücutta o fiziksel zararı (hastalığı) gerçekten üretmesi',
      'Olumlu düşünmenin insan bedeni üzerindeki her türlü hastalığı kalıcı olarak iyileştirmesi'
    ],
    correct: 2,
    explanation: 'Zararsız şeker hapı yiyenlerin "yan etki olacak" korkusu (telkini) yüzünden gerçekten kusup yara dökmesi, zihnin kötümser beklentiyle fiziksel zarar üretmesini tanımlar.'
  }
];

export const psikolojiParagrafSorulari9: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_9.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_9[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-psikoloji9-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_10 = [
  {
    title: 'İkarus\'un Düşüşü',
    passage: 'Yunan mitolojisinde mimar Daedalus, oğlu İkarus ile birlikte hapsoldukları labirentten kaçmak için balmumu ve kuş tüylerinden kanatlar yapar. Oğluna tek bir uyarıda bulunur: "Ne denize çok yakın uçup kanatlarını ıslat, ne de güneşe çok yaklaşıp balmumunu erit." Ancak gökyüzüne yükseldiğinde uçmanın o kusursuz hazzı ve kibri İkarus\'un aklını başından alır. Güneşe doğru tırmandıkça balmumu erir ve İkarus denize çakılarak ölür. İkarus\'un hikâyesi, sadece söz dinlemeyen bir çocuğun masalı değildir; o, insanoğlunun sınırlarını aşma arzusunun o sarhoş edici güzelliğini ve kibrin getirdiği kaçınılmaz trajik yıkımı anlatan ölümsüz bir destandır.',
    questionStem: 'İkarus\'un uçuşu ve düşüşü, insan doğasındaki hangi çatışmayı (ikilemi) sembolize etmektedir?',
    options: [
      'Kuşak çatışmasını ve gençlerin tecrübeli yetişkinlerin tavsiyelerini her zaman yanlış anladığını',
      'İnsanoğlunun yerçekimine ve doğa kanunlarına karşı duyduğu anlamsız öfkeyi',
      'Sınırları aşma tutkusunun (hırsın) verdiği sarhoş edici haz ile, bu kibrin (ölçüsüzlüğün) getirdiği kaçınılmaz ve trajik yıkım arasındaki o ince çizgiyi',
      'Özgürlüğe ulaşmak için her türlü fedakârlığın mubah sayılması gerektiğini'
    ],
    correct: 2,
    explanation: 'Güneşe çok yaklaşma kibri ve uçmanın hazzı yüzünden ölmesi; insanın sınırları aşma tutkusu ile kibrin getirdiği yıkım arasındaki çatışmayı sembolize eder.'
  },
  {
    title: 'Kassandra\'nın Laneti',
    passage: 'Troya prensesi Kassandra, Tanrı Apollon tarafından geleceği görme yeteneğiyle ödüllendirilir. Ancak Apollon\'un aşkına karşılık vermeyince, tanrı onu korkunç bir şekilde lanetler: "Geleceği her zaman kusursuzca göreceksin ama kimse sana asla inanmayacak." Kassandra, Troya Atı\'nın bir tuzak olduğunu, şehrin yanıp kül olacağını gözyaşları içinde çığlık çığlığa anlatır ama halk ona sadece bir deliymiş gibi güler ve onu dışlar. Kassandra Kompleksi, yaklaşan bir felaketi tüm gerçekliğiyle görüp de etrafındaki o sağır edici cehaleti ve kalabalıkları bir türlü ikna edemeyen aydınların (entelektüellerin) ebedi ve kahredici yalnızlığıdır.',
    questionStem: 'Kassandra\'nın yaşadığı trajedi, günümüz toplumlarında hangi durumu tanımlamak için güçlü bir metafordur?',
    options: [
      'Geleceği planlamadan anı yaşayan insanların kaygısızlığını',
      'Gerçeği ve yaklaşan tehlikeyi (felaketi) çok net gören ancak cahil kalabalıkları (toplumu) bir türlü ikna edemeyen aydın insanın çaresizliğini ve yalnızlığını',
      'Kadınların antik çağlardan beri siyasette ve devlet yönetiminde söz sahibi olamamasını',
      'Savaş dönemlerinde üretilen dedikoduların ve komplo teorilerinin halk üzerindeki etkisini'
    ],
    correct: 1,
    explanation: 'Geleceği (gerçeği) bilip de kimseyi inandıramamak; gerçeği gören aydının cahil toplum karşısındaki sağır edici çaresizliğini ve yalnızlığını ifade eder.'
  },
  {
    title: 'Damokles\'in Kılıcı',
    passage: 'Antik çağda, Kral Dionysios\'un gücüne ve servetine imrenen dalkavuk Damokles, bir günlüğüne kralın tahtına oturma fırsatı bulur. Altın kadehlerden şarap içip lüks içinde yüzerken, aniden tam başının üzerinde, sadece incecik bir at kılına bağlanmış, ucu aşağı bakan devasa ve keskin bir kılıç fark eder. O andan itibaren yediği yemeğin, gücün ve zenginliğin hiçbir anlamı kalmaz; her saniye ölüm korkusuyla titremeye başlar. "Damokles\'in Kılıcı", büyük bir gücün veya yüksek bir makamın dışarıdan ihtişamlı görünse de, aslında sahibini her an yok olabileceği sürekli bir stres, tehlike ve anksiyete (korku) altında yaşattığını anlatan kusursuz bir alegoridir.',
    questionStem: 'Damokles\'in Kılıcı hikâyesinin iktidar ve güç kavramlarına getirdiği asıl eleştiri nedir?',
    options: [
      'Kralların genellikle suikastçılardan korktuğu için paranoyak bir hayat sürdüğü',
      'Lüks ve zenginliğin, insanları her zaman şımartıp ahlaktan uzaklaştırdığı',
      'Dışarıdan imrenilerek bakılan mutlak gücün ve yüksek makamların, aslında sahibini her an kopabilecek bir ipliğe bağlı, sürekli ve yok edici bir tehdit (stres) altında yaşattığı',
      'Halktan gelen yöneticilerin saray hayatının kurallarına asla uyum sağlayamayacağı'
    ],
    correct: 2,
    explanation: 'İnce bir kıla bağlı kılıcın altında oturmak, mutlak gücün dışarıdan görkemli olsa da aslında sürekli bir tehlike ve stres barındırdığını vurgular.'
  },
  {
    title: 'Prokrustes\'in Yatağı',
    passage: 'Yunan mitolojisinde Prokrustes adında acımasız bir hancı vardır. Gelen misafirleri demir bir yatağa yatırır. Eğer misafirin boyu yataktan kısaysa, adamı zincirlerle çekerek ve kemiklerini kırarak yatağın boyuna uzatır. Eğer misafirin boyu yataktan uzunsa, bu kez adamın dışarı taşan ayaklarını veya başını testereyle keserek onu yatağa uydurur. "Prokrustes\'in Yatağı", kendi dar kalıplarını, ideolojilerini veya sistemlerini tek geçerli doğru kabul edip; doğadaki, sanattaki veya insandaki o eşsiz çeşitliliği zorbalıkla, kesip biçerek kendi tek tip kalıbına (standarda) sokmaya çalışan dogmatik sistemlerin kan dondurucu sembolüdür.',
    questionStem: 'Prokrustes\'in Yatağı metaforu, toplumsal ve siyasi alanda hangi durumu eleştirmek için kullanılır?',
    options: [
      'Turizm ve konaklama sektöründeki ilkel ve kötü koşulları',
      'Bireylerin fiziksel özelliklerine göre ayrımcılığa uğramasını',
      'Bireysel farklılıkları (çeşitliliği) yok sayarak, insanları tek tip bir düşünceye, sisteme veya dogmatik kalıba zorla (şiddetle) uydurmaya çalışan diktacı zihniyeti',
      'Toplumdaki suçluların kendi yöntemleriyle adalet dağıtmaya çalışmasını'
    ],
    correct: 2,
    explanation: 'İnsanları kesip biçerek tek bir demir yatağa (kalıba) uydurmaya çalışmak, bireysel farklılıkları yok edip herkesi tek tip bir düşünceye zorlayan sistemleri eleştirir.'
  },
  {
    title: 'Kral Midas ve Altın Dokunuş',
    passage: 'Kral Midas, Tanrı Dionysos\'tan "dokunduğu her şeyin altına dönüşmesini" diler. Dileği gerçekleştiğinde çok sevinir; sarayının duvarlarını, masaları, elmaları altına çevirir. Ancak acıkıp bir lokma ekmek almak istediğinde, ekmek ağzında katı bir altın külçesine dönüşür. Şarabı boğazını yakan sıvı bir altına döner. En kötüsü, onu tebrik etmeye koşan biricik kızına sarıldığında, kızı cansız bir altın heykeline dönüşür. Dünyanın en zengin adamı, artık dünyanın en yoksul ve çaresiz babasıdır. Midas\'ın laneti, insanoğlunun sonu gelmez açgözlülüğünün, değer verdiği her canlı şeyi (sevgiyi, yaşamı) nasıl cansız ve soğuk bir metale (maddeye) kurban ettiğinin trajedisidir.',
    questionStem: 'Kral Midas efsanesi, insanın bitmek bilmeyen madde (zenginlik) arzusuyla ilgili hangi acı gerçeği vurgular?',
    options: [
      'Altın madeninin eski çağlardan beri en değerli yatırım aracı olduğunu',
      'Sınırsız bir zenginlik ve açgözlülük hırsının, hayattaki en temel insani ihtiyaçları (sevgi, beslenme, yaşam) yok ederek kişiyi mutlak bir çaresizliğe ve manevi yoksulluğa sürükleyeceğini',
      'Kraliyet ailelerinin halktan kopuk yaşadığı için gerçek dünyanın acılarını anlayamadığını',
      'Doğaüstü güçlerin insanlara her zaman mutsuzluk getirdiğini'
    ],
    correct: 1,
    explanation: 'Her şeyi altına çeviren hırsın sonunda yemeği ve çocuğunu bile yok etmesi, kontrolsüz açgözlülüğün insanı temel yaşam bağlarından koparıp manevi yoksulluğa ittiğini gösterir.'
  },
  {
    title: 'Babil Kulesi',
    passage: 'Eski Ahit\'te geçen Babil Kulesi hikâyesine göre, tüm insanlık tek bir dil konuşurken, kibirlenip "Göklere, Tanrı\'ya ulaşacak kadar yüksek bir kule" inşa etmeye karar verirler. İnsanların bu kibrine öfkelenen Tanrı, onları cezalandırmak için kuleyi yıkmaz; bunun yerine hepsine farklı diller verir. Aynı dili konuşamayan, birbirini anlayamayan insanlar kaosa sürüklenir, kule yarım kalır ve dünyanın dört bir yanına dağılırlar. Babil efsanesi, fiziksel bir yıkım hikâyesi değildir. İnsanlığın en büyük gücünün "ortak iletişim" olduğunu; bu iletişim (anlayış) koptuğunda ise en ihtişamlı medeniyetlerin bile kendi içindeki gürültü ve anlaşmazlıklarla (kaosla) parçalanmaya mahkûm olduğunu gösterir.',
    questionStem: 'Babil Kulesi efsanesinin temelinde yatan felsefi ve sosyolojik mesaj nedir?',
    options: [
      'Antik dönemde yüksek katlı mimari yapıların inşasının teknik olarak imkânsızlığı',
      'Farklı dillerin öğrenilmesinin toplumlar arasındaki ticareti canlandırdığı',
      'Bir toplumun inşasındaki (birliğindeki) en büyük harcın "ortak iletişim ve anlayış" olduğu; iletişimsizliğin ise kibri bile yerle bir eden en büyük yıkım olduğu',
      'İnsanların sadece aynı coğrafyada yaşarlarsa barış içinde kalabilecekleri'
    ],
    correct: 2,
    explanation: 'Kulenin fiziksel bir darbeyle değil, dillerin karışmasıyla (iletişimsizlikle) yıkılması, toplumun temel harcının ortak anlayış ve iletişim olduğunu gösterir.'
  },
  {
    title: 'Cesur Yeni Dünya (Aldous Huxley)',
    passage: 'Aldous Huxley\'in "Cesur Yeni Dünya" adlı distopyasında, devleti yönetenler insanları kontrol etmek için şiddete, kamçılara veya hapishanelere ihtiyaç duymazlar. Geliştirdikleri "Soma" adlı mutluluk hapı ve sürekli tüketilen ucuz eğlenceler sayesinde, insanlar kendi tutsaklıklarına âşık hale getirilmiştir. Kimse kitapları yasaklamaz, çünkü zaten kimse kitap okumak istemez. İnsanlar acı çekmekten kaçıp sahte bir haz denizinde boğuldukları için düşünmeyi, isyan etmeyi ve sorgulamayı unutmuşlardır. Huxley\'in kâbusu, insanlığın zorbalıkla değil; eğlenceyle, uyuşturan hazlarla ve dikkat dağıtıcı önemsiz şeylerle köleleştirildiği, gülümseyen bir diktatörlüktür.',
    questionStem: 'Huxley\'in "Cesur Yeni Dünya" distopyasında anlatılan köleleştirme (kontrol) yöntemi, klasik diktatörlüklerden hangi yönüyle ayrılır?',
    options: [
      'Halkı korkutmak için sürekli savaş çıkarılmasıyla',
      'İnsanların fiziksel baskı veya korkuyla değil; sürekli sunulan yapay hazlar, eğlence ve uyuşma yoluyla kendi tutsaklıklarını (köleliklerini) gönüllü olarak sevmelerinin sağlanmasıyla',
      'Teknolojinin tamamen yasaklanarak toplumun ilkel çağlara geri döndürülmesiyle',
      'Devletin sadece belirli bir seçkin sınıfı kontrol altında tutmasıyla'
    ],
    correct: 1,
    explanation: 'Baskı ve şiddet yerine "Soma" hapı ve ucuz eğlenceler kullanılarak insanların tutsaklıklarına âşık edilmesi, korku yerine "hazla kontrol" yöntemini gösterir.'
  },
  {
    title: '1984 ve Çiftdüşün (Doublethink)',
    passage: 'George Orwell\'in "1984" adlı kâbusunda, Okyanusya devletinin insan zihnini yok etmek için kullandığı en büyük silah "Çiftdüşün" (Doublethink) kavramıdır. Çiftdüşün, insanın birbirine tamamen zıt iki fikre aynı anda inanması ve her ikisinin de doğru olduğunu savunmasıdır. Parti, "Savaş Barıştır", "Özgürlük Köleliktir", "Cehalet Güçtür" der ve halk buna inanır. Kişi, devletin yalan söylediğini bilir ama aynı anda o yalanın mutlak gerçek olduğuna kendini inandırır. Orwell\'in yarattığı bu evren, otoritenin sadece insan bedenine değil; gerçeğin ve mantığın kendisine tecavüz ederek, bireyin kendi aklına olan güvenini sıfırladığı kusursuz bir zihin hapishanesidir.',
    questionStem: 'Orwell\'in "Çiftdüşün" (Doublethink) kavramıyla asıl anlatmak istediği psikolojik/siyasi tehlike nedir?',
    options: [
      'Toplumun her gün farklı bir ideolojiye inanma ihtiyacı hissetmesi',
      'Dilin yetersizliği yüzünden insanların duygularını doğru ifade edememesi',
      'Otoritenin (devletin) gerçeği ve mantığı o kadar bükmesi ki; bireyin kendi zekâsını inkâr ederek birbirine zıt iki kavrama aynı anda inanacak kadar zihinsel bir yıkıma uğraması',
      'Barış dönemlerinin savaş dönemlerinden daha tehlikeli sonuçlar doğurması'
    ],
    correct: 2,
    explanation: 'Savaşın barış olduğuna inanmak gibi zıt fikirleri kabul etme zorunluluğu, otoritenin gerçeği bükerek bireyin mantığını (zihinsel direncini) sıfırlamasını ifade eder.'
  },
  {
    title: 'Fahrenheit 451: Yanan Kitaplar',
    passage: 'Ray Bradbury\'nin "Fahrenheit 451" romanında itfaiyecilerin görevi yangın söndürmek değil; kitap buldukları evleri ve kitapları ateşe vermektir. Ancak hikâyenin en sarsıcı yanı, devletin kitapları zorla yakmaya başlamadan önce, halkın zaten kendi iradesiyle kitap okumayı bırakmış olmasıdır. İnsanlar uzun felsefi düşüncelerden, kendilerini mutsuz eden veya rahatsız eden fikirlerden kaçmış; sadece dev ekranlı televizyonların ve yüzeysel eğlencelerin içine sığınmışlardır. Bradbury\'ye göre bir kültürü yok etmek için kitapları yakmanıza gerek yoktur; insanların o kitapları okumasını engellemeniz ve zihinlerini sığ bir gürültüyle doldurmanız yeterlidir. Yanan kâğıtlar, sadece çoktan ölmüş bir zihnin cenaze ateşidir.',
    questionStem: 'Bradbury\'nin "Fahrenheit 451" evreninde kitapların yakılmasından daha vahim olan asıl toplumsal çöküş nedir?',
    options: [
      'İtfaiyecilerin asıl mesleklerini unutup devlete itaat etmeleri',
      'İnsanların rahatsız edici derin (felsefi) gerçeklerle yüzleşmekten korkup kendi rızalarıyla sığ bir cehaleti ve yüzeysel eğlenceyi seçmiş olmaları',
      'Yangınların hava kirliliğine yol açarak insan sağlığını bozması',
      'Televizyonların radyolardan daha popüler bir kitle iletişim aracı haline gelmesi'
    ],
    correct: 1,
    explanation: 'Devlet yakmadan önce halkın derin düşünmekten kaçıp yüzeysel eğlencelere (televizyonlara) sığınarak okumayı bırakması asıl büyük çöküştür.'
  },
  {
    title: 'Kaptan Ahab ve Moby Dick',
    passage: 'Herman Melville\'in ölümsüz eseri "Moby Dick"te Kaptan Ahab, bir bacağını koparan o devasa beyaz balinayı (Moby Dick\'i) avlamak için tüm gemisini ve mürettebatını okyanusların sonuna kadar peşinden sürükler. Balina sadece bir hayvan değil; Ahab\'ın gözünde doğanın anlamsızlığını, tanrının acımasızlığını ve kendi eksikliğini temsil eden bir takıntıdır. Ahab\'ın intikam hırsı öylesine kör edicidir ki, gemisi Pequod\'u ve etrafındaki herkesi o beyaz hiçliğin içine kasten sürer. Moby Dick, sadece bir denizcilik macerası değil; insanın içindeki karanlık bir saplantının, kontrol edilemeyen bir intikam ateşinin sonunda nasıl sahibinin kendisini yutan bir cehenneme dönüştüğünün felsefi destanıdır.',
    questionStem: 'Kaptan Ahab\'ın Moby Dick\'e olan saplantılı takibinin sembolize ettiği felsefi/psikolojik tema aşağıdakilerden hangisidir?',
    options: [
      'İnsanoğlunun doğayı ehlileştirme ve kontrol altına alma çabasının kaçınılmaz zaferi',
      'Denizcilik mesleğinin ve okyanusların insana verdiği özgürlük hissi',
      'Kontrol edilemeyen kör bir intikam hırsının ve saplantının (obsesyonun), sonunda kişinin sadece kendini değil, çevresini de yok eden bir cehenneme dönüşmesi',
      'Balina avcılığının 19. yüzyıl ekonomisindeki yeri ve önemi'
    ],
    correct: 2,
    explanation: 'Ahab\'ın bir bacağı için tüm gemisini felakete sürüklemesi, kör bir intikam ve saplantının kişiyi ve çevresini yok eden bir yıkıma (cehenneme) dönüştüğünü gösterir.'
  },
  {
    title: 'Kavanozdaki Beyin (Matrix Alegorisi)',
    passage: 'Felsefede "Kavanozdaki Beyin" adında ürpertici bir düşünce deneyi vardır. Diyelim ki gece uyurken kötü niyetli bir bilim insanı beyninizi kafatasınızdan çıkardı, onu besleyici bir sıvıyla dolu kavanoza koydu ve tüm sinir uçlarınızı süper bir bilgisayara bağladı. Bilgisayar beyninize kusursuz elektrik sinyalleri gönderiyor: Şu an bu metni okuduğunuzu, nefes aldığınızı ve bir bedeniniz olduğunu hissediyorsunuz. Her şey o kadar gerçek ki, aradaki farkı anlama şansınız sıfır. Matrix filminin de temeli olan bu şüphecilik, aslında en büyük kesinliğimize saldırır: Duyu organlarımızın bize sunduğu "gerçeklik", beynimizin içindeki karanlık odaya yansıtılan kusursuz bir simülasyondan ibaret olabilir mi?',
    questionStem: 'Kavanozdaki Beyin düşünce deneyinin felsefi olarak sorguladığı asıl temel kavram nedir?',
    options: [
      'Gelecekteki tıbbi ameliyatların etik (ahlaki) sınırları ve kuralları',
      'Bilgisayarların insan beyninden daha zeki (yapay zekâ) olma ihtimali',
      'Duyu organlarımızın bizi yanıltma ihtimali üzerinden, algıladığımız dış dünyanın "mutlak gerçekliği" (epistemolojik kesinliğimiz)',
      'Sıvı içinde yaşatılan organların ne kadar süre canlı kalabileceği'
    ],
    correct: 2,
    explanation: 'Deneyin asıl amacı; sinyallerle yaratılan bir dünyayı gerçekten ayıramıyorsak, duyu organlarımıza güvenip güvenemeyeceğimizi (dış dünyanın mutlak gerçekliğini) sorgulamaktır.'
  },
  {
    title: 'Truman Sendromu (Sahte Gerçeklik)',
    passage: '1998 yapımı The Truman Show filminde, başkarakter Truman Burbank doğduğu günden beri devasa bir stüdyonun içinde, tamamen oyuncularla dolu sahte bir dünyada yaşadığından habersizdir. Ailesi, karısı ve dostları birer aktördür ve hayatı 7/24 tüm dünyaya canlı yayınlanmaktadır. Ancak Truman gün geçtikçe etrafındaki tuhaflıkları (düşen spot ışıkları, tekrarlanan replikler) fark eder ve dış dünyayı (hakikati) bulmak için denize açılır. Psikolojide "Truman Sendromu" olarak bilinen bu sanrı, modern insanın kendi hayatının bir kurgu olduğuna, etrafındaki herkesin ona bir oyun oynadığına dair duyduğu o derin şüphedir. Film, güvenli ve mutlu bir yalan ile; acı verici, fırtınalı ama özgür (gerçek) dünya arasındaki o ebedi insan tercihini anlatır.',
    questionStem: 'The Truman Show (Truman Sendromu) hikâyesinin felsefi merkezinde yatan temel ikilem (çatışma) nedir?',
    options: [
      'Televizyon kanallarının reyting uğruna insan hayatını hiçe sayması',
      'Gemi yolculuklarının deniz korkusunu yenmedeki psikolojik etkisi',
      'İnsanın, güvenli, konforlu ama sahte (yalan) bir hayatı mı; yoksa acı verici, bilinmezliklerle dolu ama özgür (gerçek) bir hayatı mı seçeceği ikilemi',
      'Gelişen teknolojinin mahremiyet (özel hayat) kavramını tamamen yok etmesi'
    ],
    correct: 2,
    explanation: 'Truman\'ın güvenli stüdyoyu terk edip fırtınalı denize açılması; konforlu sahte bir hayat ile acı verici ama gerçek (özgür) bir hayat arasındaki felsefi tercihi yansıtır.'
  },
  {
    title: 'Dorian Gray\'in Portresi',
    passage: 'Oscar Wilde\'ın "Dorian Gray\'in Portresi" adlı eserinde, inanılmaz derecede yakışıklı olan Dorian, bir ressamın çizdiği kendi portresini gördüğünde şeytani bir dilekte bulunur: "Keşke ben hep böyle genç ve güzel kalsam da, benim yerime bu tablo yaşlansa." Dileği kabul olur. Dorian yıllar boyunca her türlü ahlaksızlığa, suça ve zevke dalar; bedeni hiç yaşlanmaz, hep kusursuz kalır. Ancak tavan arasına sakladığı portresi, işlediği her günahta çirkinleşir, irin bağlar ve ruhunun o iğrenç çürümüşlüğünü bir ayna gibi yansıtır. Bu hikâye, dış görünüşün (estetiğin) kutsandığı bir toplumda, maskelerin ardında saklanan insan ruhunun o sessiz, karanlık ve çürümüş yıkımının kusursuz bir portresidir.',
    questionStem: 'Dorian Gray\'in Portresi hikâyesinin odaklandığı asıl ahlaki ve psikolojik tema nedir?',
    options: [
      'Sanat eserlerinin (tabloların) zaman içinde fiziksel olarak yıpranması ve değerini kaybetmesi',
      'Gençlik ve güzelliğe (dış görünüşe) tapınmanın ardında, içsel ahlakın ve insan ruhunun (vicdanın) nasıl çürüyüp yozlaştığı',
      'Ressamların modelleriyle kurdukları gizli ve tehlikeli duygusal bağlar',
      'Ölümsüzlüğün ancak bilimsel ilerlemelerle mümkün olabileceği inancı'
    ],
    correct: 1,
    explanation: 'Dorian\'ın dışarıdan güzel kalıp işlediği günahlarla tablosunun çirkinleşmesi; dış güzelliğin ardında saklanan ruhsal ve ahlaki çürümüşlüğü sembolize eder.'
  },
  {
    title: 'Don Kişot ve Yeldeğirmenleri',
    passage: 'Miguel de Cervantes\'in ölümsüz karakteri Don Kişot, çok fazla şövalye romanı okuduğu için aklını yitirmiş ve kendini dünyadaki kötülükleri düzeltecek bir şövalye sanan yaşlı bir adamdır. Paslı bir zırh ve sıska bir atla yollara düşer. Onun en meşhur macerası, tarlalardaki devasa yeldeğirmenlerini "kolları olan devasa canavarlar" sanıp onlara mızrağıyla saldırmasıdır. Çevresindekiler ona deli dese de, Don Kişot aslında grileşmiş, çıkarcı ve büyüsünü yitirmiş bir dünyaya karşı açılmış tek kişilik, asil bir isyandır. O yeldeğirmenlerine saldırmak, mantığın sınırlarını aşıp, ideallerin ve hayallerin o asil çılgınlığını, sığ gerçekliğe tercih etmektir.',
    questionStem: 'Yazar, Don Kişot\'un yeldeğirmenlerine saldırmasını (deliliğini) nasıl yorumlamaktadır?',
    options: [
      'Aşırı kitap okumanın yaşlı insanlarda yarattığı kalıcı bir beyin hasarı olarak',
      'Dönemin İspanya\'sında tarım teknolojilerine (yeldeğirmenlerine) karşı verilen ekonomik bir tepki olarak',
      'Sıradan, çıkarcı ve hayal gücünden yoksun gerçek dünyaya karşı verilmiş, idealler uğruna girişilen asil ve romantik bir isyan olarak',
      'Askeri taktiklerin sivil hayatta uygulanmasının yarattığı trajikomik bir kaza olarak'
    ],
    correct: 2,
    explanation: 'Don Kişot\'un deliliğinin, "grileşmiş, çıkarcı bir dünyaya karşı açılmış asil bir isyan" olarak tanımlanması; idealizmin sığ gerçekliğe başkaldırısını ifade eder.'
  },
  {
    title: 'Kabil ve Habil: İçimizdeki Cinayet',
    passage: 'İbrahimî dinlerin anlatısına göre, insanlık tarihinin ilk cinayeti iki kardeş arasında işlenir. Kabil bir çiftçi, kardeşi Habil ise bir çobandır. Tanrı, Habil\'in sunduğu kanlı kurbanı kabul ederken, Kabil\'in sunduğu toprağın mahsullerini reddeder. İçine düşen o devasa kıskançlık ve yetersizlik hissiyle (kibirle) gözü dönen Kabil, kardeşi Habil\'i öldürür. Bu hikâye, kötülüğün dışarıdan gelen şeytani bir güç değil, bizzat insanın kendi doğasında, en yakınındakine (kardeşine) duyduğu kıskançlıkta saklı olduğunu gösterir. İnsanlık tarihinin ilk eyleminin bir "kardeş katli" olması, medeniyetimizin sevgi üzerine değil, kan ve rekabet üzerine inşa edildiğine dair kan dondurucu bir metafordur.',
    questionStem: 'Kabil ve Habil hikâyesi üzerinden insan doğasına dair yapılan asıl psikolojik/felsefi tespit nedir?',
    options: [
      'Tarım toplumlarının göçebe hayvancılık yapan toplumlardan daha zengin olduğu',
      'Kötülüğün ve şiddetin dış (doğaüstü) bir güçten değil, bizzat insanın kendi içindeki kıskançlık, rekabet ve kibir gibi ilkel duygulardan doğduğu',
      'Dini ritüellerde her zaman hayvansal gıdaların bitkisel gıdalara tercih edilmesi gerektiği',
      'Kardeşler arasındaki çatışmaların sadece miras paylaşımından kaynaklandığı'
    ],
    correct: 1,
    explanation: 'Cinayetin, Kabil\'in içindeki kıskançlık ve kibirle işlenmesi; kötülüğün dışarıdan bir şeytan değil, insanın kendi doğasından kaynaklandığını gösterir.'
  },
  {
    title: 'Sirenlerin Şarkısı ve Odysseus',
    passage: 'Homeros\'un Odysseia destanında, Odysseus gemisiyle Sirenlerin yaşadığı adanın yakınından geçer. Sirenler, öylesine büyüleyici ve karşı konulmaz bir şarkı söylerler ki, o sesi duyan her denizci aklını yitirir, denize atlar ve kayalıklarda parçalanarak ölür. Odysseus o ilahi sesi duymayı çok ister ama ölmek de istemez. Dâhice bir plan yapar: Tüm mürettebatının kulaklarını balmumuyla tıkar, kendisini ise geminin ana direğine sıkıca bağlatır. "Ne kadar yalvarırsam yalvarayım beni çözmeyin" der. O dayanılmaz şarkıyı duyduğunda çırpınır, ipleri koparmak ister ama bağlı olduğu için kurtulur. Bu mit, insanın kendi zayıflıklarını (dürtülerini) önceden bilip, aklıyla o dürtülere karşı (direğe bağlanmak gibi) önlem alabilmesinin felsefesidir.',
    questionStem: 'Odysseus\'un kendini gemi direğine bağlatması, insan iradesine dair hangi kavramı sembolize eder?',
    options: [
      'Korkularla yüzleşmek yerine onlardan tamamen kaçıp saklanmayı',
      'Müzik ve sanatın insan psikolojisi üzerindeki yıkıcı (hipnotik) etkisini',
      'İnsanın kendi ilkel dürtülerini ve zayıflıklarını önceden kabullenip, akıl yoluyla bu zaaflara karşı kendini dizginlemesini (irade kontrolünü)',
      'Gemi kaptanlarının mürettebatına güvenmeyip tüm kararları tek başına almasını'
    ],
    correct: 2,
    explanation: 'Kendini direğe bağlatıp kulakları tıkatması; zaaflarını önceden bilip akıl/irade yoluyla baştan çıkarıcı güce karşı önlem almasını sembolize eder.'
  },
  {
    title: 'Narkissos ve Ekrandaki Yansıma',
    passage: 'Yunan mitolojisinde Narkissos, ormanda gezerken berrak bir su birikintisine eğilir ve sudaki yansımasını görür. Kendi yüzünün kusursuz güzelliğine öylesine âşık olur ki, o görüntüden bir saniye bile gözlerini ayıramaz. Yemek yemeyi, su içmeyi unutur ve o yansımanın başında eriyerek ölür. Binlerce yıl önce yazılan bu efsane, aslında bugünün akıllı telefon ekranlarına gömülmüş, sosyal medyadaki filtreli "yansımalarına" (sahte benliklerine) âşık olan modern insanın kâbusudur. Narsisizm, kendini çok sevmek değil; kendi yansıman dışında dünyadaki hiçbir gerçekliği göremeyecek kadar körleşmek ve o sahte görüntünün içinde boğulmaktır.',
    questionStem: 'Yazar, Narkissos mitini günümüz modern toplumuna uyarlarken neyi eleştirmektedir?',
    options: [
      'Temiz su kaynaklarının azalması nedeniyle doğada vakit geçirmenin zorlaşmasını',
      'Güzellik salonlarının ve kozmetik sektörünün insanlar üzerindeki ekonomik baskısını',
      'İnsanların sosyal medya ekranlarındaki sahte benliklerine (kendi yansımalarına) saplantılı şekilde bağlanıp, gerçek dünyadan koparak körleşmesini (narsisizmi)',
      'Ormanlık alanlarda tek başına seyahat etmenin getirdiği psikolojik tehlikeleri'
    ],
    correct: 2,
    explanation: 'Narkissos\'un sudaki yansımasına âşık olup erimesi, günümüz insanının akıllı telefon ekranlarındaki kendi filtreli yansımalarına bakarak gerçeklikten kopmasını (narsisizmi) eleştirir.'
  },
  {
    title: 'Golyat ve Davut: Asimetrik Güç',
    passage: 'Efsaneye göre Golyat (Calut), tepeden tırnağa zırhlı, devasa boyutlarda, elinde yenilmez kılıcı olan bir savaş makinesidir. İsrailoğulları ordusundan kimse onunla teke tek dövüşmeye cesaret edemez. Çoban bir çocuk olan Davut, zırh giymeyi veya kılıç almayı reddeder. Nehrin kenarından beş pürüzsüz taş alır ve sapanıyla Golyat\'ın zırhının açıkta bıraktığı tek yere, tam alnının ortasına taşı fırlatarak devi yere serer. Golyat ve Davut hikâyesi, "Büyük her zaman kazanır" kuralının bir yalan olduğunu; asıl gücün devasa zırhlarda değil, kuralları reddetmekte, çeviklikte ve düşmanın o aşılmaz sanılan kibrindeki (hantallığındaki) o küçücük zayıf noktayı bulmakta saklı olduğunu gösterir.',
    questionStem: 'Davut\'un Golyat\'ı yenmesi, güç ve strateji bağlamında neyi temsil eder?',
    options: [
      'Geleneksel ve ağır zırhlı orduların savunma savaşlarında her zaman daha avantajlı olduğunu',
      'Fiziksel büyüklüğün ve ağır silahların, kuralları yıkan çevik (asimetrik) bir zekâ ve doğru yere yapılmış küçük bir hamle karşısında çaresiz kalabileceğini',
      'Gençlerin yaşlı savaşçılara karşı her zaman daha merhametli davrandığını',
      'Antik savaşlarda sadece uzaktan atılan silahların kullanılmasının bir kural olduğunu'
    ],
    correct: 1,
    explanation: 'Davut\'un kılıç yerine sapan kullanarak dev bir savaşçıyı tek taşla devirmesi; fiziksel gücün (büyüklüğün), kuralları yıkan çevik ve asimetrik bir zekâ karşısında yenilebileceğini temsil eder.'
  },
  {
    title: 'Aşil\'in Topuğu',
    passage: 'Yunan mitolojisinin en yenilmez savaşçısı Aşil (Akhilleus), bebekken annesi tarafından kutsal Styx nehrine batırılır. Bu sihirli su, değdiği her yeri silah işlemez bir zırha dönüştürür. Ancak annesi onu topuğundan tutarak suya daldırdığı için, Aşil\'in topuğu ıslanmaz ve ölümlü (savunmasız) kalır. Yıllar sonra Truva savaşında sayısız orduyu tek başına yok eden bu yenilmez yarı-tanrı, Truva prensi Paris\'in attığı zehirli bir okun tam o ıslanmayan topuğuna saplanmasıyla hayatını kaybeder. "Aşil Topuğu", ne kadar güçlü, zengin veya yenilmez görünürse görünsün, her insanın, her ordunun veya her imparatorluğun mutlaka onu yerle bir edecek o küçücük, gizli bir zayıflığı (kırılganlığı) olduğunu hatırlatır.',
    questionStem: 'Aşil\'in (Akhilleus) hikâyesinde yer alan "Aşil Topuğu" kavramı mecazi olarak neyi ifade eder?',
    options: [
      'Ailelerin çocuklarını aşırı korumacı yetiştirmesinin onlara zarar verdiğini',
      'İnsanların sadece ayak veya bacak yaralanmalarından hayatını kaybettiği antik inancı',
      'Dışarıdan ne kadar yenilmez veya mükemmel görünürse görünsün, her sistemin veya kişinin yıkımına yol açabilecek o küçük, gizli ve kritik zayıflık noktasını',
      'Savaşlarda zehirli ok kullanmanın düşmanı psikolojik olarak korkuttuğunu'
    ],
    correct: 2,
    explanation: 'Yenilmez bir savaşçının topuğundan vurulup ölmesi; her mükemmel/yenilmez gücün ardında onu yıkabilecek küçük ve kritik bir zayıflık noktası ("Aşil Topuğu") barındırdığını ifade eder.'
  },
  {
    title: 'Felsefe Taşı ve Simya',
    passage: 'Orta Çağ boyunca simyacıların en büyük takıntısı, sıradan metalleri (kurşunu) saf altına çevireceğine ve içene ölümsüzlük bahşedeceğine inanılan "Felsefe Taşı"nı bulmaktı. Yüzlerce yıl boyunca karanlık laboratuvarlarda asitler kaynatıldı, zehirli dumanlar solundu. Simyacılar o büyülü taşı asla bulamadılar; ancak bu umutsuz arayış sırasında bilmeden modern kimyanın temellerini (damıtmayı, fosforu, asitleri) buldular. Felsefe Taşı, insanoğlunun ulaşılamaz hayallerinin peşinden koşarken, o hayale giden yolda döktüğü terin ve harcadığı emeğin, aslında aradığı o efsanevi altından çok daha değerli ve gerçek (bilimsel) hazineler yarattığının şiirsel bir kanıtıdır.',
    questionStem: 'Simyacıların "Felsefe Taşı" arayışlarının bilim tarihindeki ironik (şaşırtıcı) sonucu parçada nasıl ifade edilmiştir?',
    options: [
      'Kurşunu altına çevirmenin aslında çok basit bir formülü olduğunu keşfetmeleri',
      'Hedefledikleri imkânsız (hayali) büyüye asla ulaşamamalarına rağmen, bu süreçteki denemelerinin modern kimyanın o gerçek ve değerli temellerini atması',
      'Ölümsüzlük iksirini bularak insan ömrünü laboratuvar ortamında uzatmayı başarmaları',
      'Asitlerin zehirli dumanından dolayı simyacıların çoğunun akıl sağlığını yitirmesi'
    ],
    correct: 1,
    explanation: 'Felsefe Taşı (büyü) bulunamasa da bu umutsuz arayış sırasında damıtma/asitler gibi modern kimyanın temellerinin bulunması, ulaşılamaz hedeflerin gerçek hazineler (bilim) yaratabildiğini gösterir.'
  }
];
const PARAGRAPH_THEMES_11 = [
  {
    title: 'Dyatlov Geçidi Vakası',
    passage: '1959 yılının dondurucu kışında, Ural Dağları\'nda kamp yapan dokuz tecrübeli Rus dağcı, gece yarısı çadırlarını içeriden keserek, eksi 30 derecede yarı çıplak ve ayakkabısız bir şekilde karanlığa kaçtılar. Haftalar sonra bulunan cesetlerinin bazılarında ağır radyasyon, bazılarında ise araba çarpmasına eşdeğer iç kanamalar vardı; üstelik dillerinden biri kayıptı. Uzaylılardan gizli askeri deneylere kadar sayısız komplo teorisi üretildi. Ancak asıl ürkütücü olan, doğanın ve paniğin insan aklını nasıl saniyeler içinde ilkel bir dehşete sürükleyebileceğidir. Dyatlov Geçidi, insanoğlunun ıssız karanlıklar karşısındaki o kırılgan ve çaresiz küçüklüğünün en soğuk kanıtıdır.',
    questionStem: 'Dyatlov Geçidi vakasıyla ilgili yazarın asıl odaklandığı "ürpertici" (psikolojik) boyut nedir?',
    options: [
      'Rus ordusunun o dönemde siviller üzerinde gizli radyasyon deneyleri yapması',
      'Olayın uzaylılar tarafından gerçekleştirilmiş olabileceğine dair kanıtların gizlenmesi',
      'İnsanoğlunun mantığının ve tecrübesinin, doğanın ve ilkel paniğin yarattığı o bilinmez dehşet karşısında saniyeler içinde çöküp sıfırlanabilmesi',
      'Dağcılık sporunun her zaman ölümcül bir risk taşıdığının bilimsel olarak kanıtlanması'
    ],
    correct: 2,
    explanation: 'Dokuz tecrübeli dağcının çadırı içeriden kesip eksi 30 derecede yarı çıplak kaçması, mantığın doğa ve panik (dehşet) karşısında saniyeler içinde çökmesini (ilkel korkuyu) sembolize eder.'
  },
  {
    title: 'Paskalya Adası (Rapa Nui) ve Ekolojik İntihar',
    passage: 'Pasifik Okyanusu\'nun ortasındaki izole Paskalya Adası, devasa taştan Moai heykelleriyle ünlüdür. Adalılar, atalarını onurlandırmak ve kabileler arası güç gösterisi yapmak için bu tonlarca ağırlıktaki heykelleri inşa edip taşımak uğruna adadaki tüm ağaçları kestiler. Ağaçlar bitince erozyon başladı, tarım çöktü, kano yapamadıkları için balık tutamadılar ve sonunda yamyamlığa varan bir iç savaşla kendi medeniyetlerini yok ettiler. Paskalya Adası\'nın o sessiz ve dev heykelleri, sadece antik bir mimari harikası değil; kibrin ve statü hırsının, üzerinde yaşanılan ekosistemi (yaşam kaynağını) nasıl körü körüne tükettiğinin taştan bir anıtıdır.',
    questionStem: 'Paskalya Adası halkının çöküşü, günümüz dünyasına yönelik nasıl bir evrensel uyarı barındırmaktadır?',
    options: [
      'Devasa heykellerin ve anıtların her zaman toplumların ekonomisini çökerttiği',
      'Güç gösterisi ve kibir uğruna doğal kaynakların (ekosistemin) sınırlarının tüketilmesi durumunda, o toplumun kaçınılmaz bir ekolojik intihara sürükleneceği',
      'Okyanus ortasındaki adaların tarım yapmak için elverişli topraklara sahip olmadığı',
      'Kabileler arası savaşların sadece farklı dini inançlardan dolayı ortaya çıktığı'
    ],
    correct: 1,
    explanation: 'Heykel taşıma hırsı uğruna ağaçları tüketip yok olmaları; statü/kibir uğruna doğayı tüketmenin toplumları ekolojik intihara (yok oluşa) götüreceği uyarısını barındırır.'
  },
  {
    title: 'Andes Uçak Kazası (1972)',
    passage: '1972 yılında Uruguaylı bir ragbi takımını taşıyan uçak, aşılmaz And Dağları\'nın karlı zirvelerine çakıldı. Hayatta kalanlar, eksi 40 derecede, yiyeceksiz ve kurtarılma umudu olmadan 72 gün boyunca bir buzulun üzerinde yaşam mücadelesi verdi. Radyodan arama çalışmalarının durdurulduğunu duyduklarında, ölmemek için hayatlarındaki en korkunç, en aşılamaz ahlaki sınırı geçtiler: Ölen arkadaşlarının bedenlerini yemek zorunda kaldılar. Bu olay bir yamyamlık hikâyesi değil; insan iradesinin, yaşama tutunma içgüdüsünün ve dayanışmanın, ahlaki tabuların bile ötesine geçebilen o karanlık ama görkemli direniş destanıdır.',
    questionStem: 'Andes uçak kazasından kurtulanların hikâyesi, yazar tarafından hangi kavrama örnek olarak gösterilmektedir?',
    options: [
      'Dağlık bölgelerde uçuş rotalarının mutlaka değiştirilmesi gerektiğine',
      'Ragbi oyuncularının diğer insanlardan fiziksel olarak daha dayanıklı olduğuna',
      'İnsanın yaşama tutunma içgüdüsünün ve hayatta kalma iradesinin, en güçlü ahlaki tabuları ve toplumsal kuralları bile aşabilecek kadar ilkel ve sarsılmaz olduğuna',
      'Kurtarma ekiplerinin zorlu hava koşullarında yetersiz kaldığına'
    ],
    correct: 2,
    explanation: 'Yaşamak için ölenleri yemeleri bir yamyamlık değil; hayatta kalma iradesinin ve yaşama içgüdüsünün ahlaki sınırları/tabuları aşabilecek kadar sarsılmaz bir direniş olduğunu gösterir.'
  },
  {
    title: 'Shackleton ve Endurance Destanı',
    passage: '1915 yılında kâşif Ernest Shackleton ve mürettebatı, Antarktika\'yı yürüyerek geçmek için yola çıktıklarında gemileri "Endurance" devasa buzkütleleri arasında sıkışıp ezildi. Dünyanın en soğuk, en ıssız ve en acımasız cehenneminde mahsur kalmışlardı. Shackleton, adamlarını umutsuzluğa düşürmemek için katı bir rutin uyguladı; onlara futbol oynattı, köpek yarışları düzenledi. Aylar sonra, küçük bir cankurtaran sandalıyla okyanusun en tehlikeli fırtınalarını aşarak yardım getirmeyi başardı. Tam 2 yıl süren bu kâbusta tek bir adamını bile kaybetmedi. Shackleton\'ın liderliği, gerçek zaferin hedefe ulaşmak değil; cehennemin ortasında bile umudu ve insan onurunu ayakta tutabilmek olduğunu kanıtlar.',
    questionStem: 'Shackleton\'ın Antarktika macerasındaki liderlik anlayışının temel felsefesi nedir?',
    options: [
      'Buzkıran gemilerinin teknolojik altyapısını geliştirmek',
      'Hedefe ulaşmak imkânsızlaştığında (gemileri battığında), asıl zaferin ve liderliğin; mürettebatın umudunu, disiplinini ve insan onurunu koruyarak onları hayatta tutmak olduğunu bilmek',
      'Antarktika\'nın yer altı kaynaklarını keşfetmek için mürettebatın hayatını tehlikeye atmak',
      'Sadece fiziksel olarak en güçlü denizcileri seçerek takım kurmak'
    ],
    correct: 1,
    explanation: 'Gemisi batmasına rağmen adamlarına futbol oynatıp disiplini koruması ve kimseyi kaybetmemesi, liderliğin hedefe ulaşmaktan ziyade "umudu ve onuru ayakta tutmak" olduğunu gösterir.'
  },
  {
    title: 'Çernobil\'in Üç Dalgıcı (Fedaileri)',
    passage: '1986 Çernobil felaketinde, eriyen nükleer reaktör çekirdeğinin altındaki devasa su havuzuna ulaşması an meselesiydi. Eğer o erimiş yakıt suyla temas etseydi, yaşanacak devasa buhar patlaması tüm Avrupa\'yı yüzyıllarca yaşanmaz bir nükleer çöle çevirecekti. Vanaları açıp suyu boşaltmak için, radyasyonla kaynayan o kapkaranlık suya üç mühendis kendi istekleriyle daldılar. Valeriy, Alexei ve Boris adındaki bu adamlar, karanlıkta sadece el yordamıyla vanaları buldular ve dünyayı kurtardılar. Milyonların hayatı, isimleri tarihin tozlu sayfalarında kaybolmuş üç sıradan insanın, o radyasyonlu karanlıkta sessizce aldığı ölümcül bir karara borçludur.',
    questionStem: 'Çernobil dalgıçlarının hikâyesi, kahramanlık kavramı üzerine nasıl bir çıkarım sunmaktadır?',
    options: [
      'Kahramanlığın her zaman devlet tarafından yüksek madalyalarla ödüllendirildiği',
      'Büyük kurtuluşların her zaman devasa ordularla değil, milyonların kaderini değiştiren sıradan insanların kendi hayatlarını feda ettiği isimsiz ve sessiz fedakârlıklarla (iradeyle) sağlandığı',
      'Nükleer santrallerin su havuzlarının her zaman patlama riski taşıdığı',
      'Mühendislerin radyasyona karşı özel koruyucu giysiler tasarladığı'
    ],
    correct: 1,
    explanation: 'Tüm Avrupa\'yı kurtaranların adları bile unutulmuş üç mühendis olması, kahramanlığın gösterişli değil; sessiz, isimsiz ve sıradan insanların devasa fedakârlıkları olduğunu anlatır.'
  },
  {
    title: 'D.B. Cooper\'ın Kusursuz Soygunu',
    passage: '1971 yılında "Dan Cooper" takma adlı, şık takım elbiseli bir adam, Seattle\'a giden bir yolcu uçağını kaçırdı. Kimseye zarar vermeden nazikçe 200 bin dolar fidye ve dört paraşüt istedi. İstekleri karşılanıp uçak tekrar havalandığında, şiddetli bir yağmur fırtınasının ortasında, paralarla birlikte uçağın arka kapısından atlayarak karanlık gecenin içine karıştı. Yıllarca süren devasa FBI araştırmalarına, dağ taş aranmasına rağmen ne cesedi bulundu ne de paralar harcandı. D.B. Cooper vakası, sadece çözülememiş bir suç değil; sıradan insanın, devleti ve sistemi zekâsıyla alt edip havaya (bir hayalete) karışabileceğine dair duyulan gizli ve romantik bir halk efsanesine dönüşmüştür.',
    questionStem: 'D.B. Cooper soygununun Amerikan toplumunda "romantik bir halk efsanesine" dönüşmesinin nedeni parçada nasıl açıklanmıştır?',
    options: [
      'Soyguncunun çaldığı paraları fakir halka dağıtması',
      'Şık ve nazik bir adamın şiddet kullanmadan, devletin tüm gücünü ve sistemini zekâsıyla alt edip iz bırakmadan bir hayalete dönüşmesinin uyandırdığı gizli hayranlık',
      'Uçak kaçırma olaylarının o dönemde sık görülen sıradan bir eylem olması',
      'FBI\'ın soyguncuyu kasıtlı olarak yakalamadığına dair komplo teorileri'
    ],
    correct: 1,
    explanation: 'Kimseye zarar vermeden (nazikçe) sistemi alt edip karanlığa karışması (yakalanmaması), toplumda ona karşı gizli ve romantik bir hayranlık (efsaneleşme) uyandırmıştır.'
  },
  {
    title: 'Mary Celeste: Hayalet Gemi',
    passage: '1872 yılında Atlantik Okyanusu\'nda sürüklenen "Mary Celeste" adlı ticaret gemisi bulunduğunda, içinde tek bir canlı bile yoktu. Gemide hiçbir boğuşma izi yoktu, yemekler masalardaydı, kargodaki değerli alkol fıçıları dokunulmamıştı ve mürettebatın kişisel eşyaları yerli yerindeydi. Sadece cankurtaran filikası eksikti ve herkes sanki aniden, büyük bir panikle gemiyi terk etmiş gibiydi. Deniz canavarları, korsanlar veya Bermuda Şeytan Üçgeni... Yüzlerce teori üretildi. Mary Celeste\'nin o boş güvertesi, okyanusun engin sessizliğinin, insanın tüm mantığını ve kanıt arayışını yutan en büyük ve en çözülemez sırrı olarak tarihe kazındı.',
    questionStem: 'Mary Celeste gemisinin bir "hayalet gemi" efsanesine dönüşmesinin asıl sebebi nedir?',
    options: [
      'Mürettebatın gemide bıraktığı gizemli şifreli mektuplar',
      'Geminin korsanlar tarafından tüm değerli eşyaları alınarak yağmalanması',
      'Ortada hiçbir mantıklı sebep, tehlike veya boğuşma izi yokken (eşyalar yerindeyken), mürettebatın gemiyi aniden ve açıklanamaz bir panikle terk etmiş olması',
      'Geminin aslında hiçbir zaman var olmamış fiktif bir edebi kurgu olması'
    ],
    correct: 2,
    explanation: 'Değerli eşyaların ve yemeklerin bile yerinde durmasına rağmen (boğuşma yokken) insanların açıklanamaz bir panikle filikayla kaçması, olayı mantıksız ve çözülemez bir hayalet efsanesi yapar.'
  },
  {
    title: 'Somerton Adamı (Taman Shud)',
    passage: '1948 yılında Avustralya\'nın Somerton plajında, takım elbiseli, hiçbir kimlik taşımayan ve etiketleri sökülmüş kıyafetler giyen ölü bir adam bulundu. Vücudunda zehir izi yoktu. Cebinde, gizli bir bölmeye dikilmiş küçük bir kâğıt parçasında Farsça "Taman Shud" (Bitti/Tamamlandı) yazıyordu. Bu kâğıdın koparıldığı nadir bir şiir kitabı yakındaki bir arabada bulundu; kitabın arkasında şifreli harfler ve bir hemşirenin telefon numarası vardı. Soğuk Savaş casusluğu mu, trajik bir aşk hikâyesi mi yoksa kusursuz bir cinayet mi? Somerton Adamı, cevabı ölümün ötesinde kalmış, insanın geride bıraktığı izlerin (şifrelerin) bazen gerçeği aydınlatmak yerine o sırrı sonsuza dek nasıl mühürlediğinin bir kanıtıdır.',
    questionStem: 'Somerton Adamı vakasının edebiyat ve sinemaya bile ilham veren o "çözülemez" doğası neyden kaynaklanmaktadır?',
    options: [
      'Bulunan cesedin ünlü bir siyasetçiye çok benzemesi',
      'Kıyafet etiketlerinin kesik olması, Farsça not, şifreli harfler ve sahipsiz kimlik gibi birbiriyle bağlantısız görünen esrarengiz ipuçlarının hiçbir zaman mantıklı bir bütüne (sonuca) ulaşamaması',
      'Polisin olayı bilerek halktan yıllarca gizlemesi',
      'Zehir uzmanlarının o dönemde otopsi yapacak teknolojiye sahip olmaması'
    ],
    correct: 1,
    explanation: 'Etiketsiz kıyafet, gizli bölmedeki Farsça not, şifreli kitap gibi ipuçlarının (sırların) cevaba ulaşmak yerine gerçeği sonsuza dek mühürlemesi olayın çözülemez doğasını yansıtır.'
  },
  {
    title: 'Wow! Sinyali',
    passage: '1977 yılında astronom Jerry Ehman, uzayın derinliklerini dinleyen radyo teleskobunun çıktılarında, 72 saniye süren inanılmaz derecede güçlü ve spesifik bir radyo dalgası fark etti. Verilerin yanına şaşkınlıkla kırmızı bir kalemle "Wow!" (Vay canına!) yazdı. Sinyal, tam da zeki bir uzaylı medeniyetinin iletişim kurmak için kullanması beklenen frekanstaydı (Hidrojen frekansı). O günden beri teleskoplar aynı noktayı milyonlarca kez dinledi ama evren o sese bir daha asla geri dönmedi, tam bir sessizliğe büründü. "Wow! Sinyali", kozmik okyanusta yapayalnız mıyız sorusuna verilmiş anlık bir göz kırpma mıydı, yoksa sadece evrenin rastgele bir gürültüsü müydü? Bu sessizlik, bilinmezliğin yarattığı en sağır edici çığlıktır.',
    questionStem: 'Wow! Sinyali\'ni uzay araştırmaları tarihinde bu kadar dramatik ve özel kılan durum nedir?',
    options: [
      'Uzaylıların dünyaya fiziksel olarak ilk kez bir uydu göndermiş olması',
      'Sinyalin, zeki bir medeniyetten gelme ihtimali en yüksek özellikleri taşımasına rağmen bir daha asla tekrarlanmaması ve evrenin yeniden derin bir sessizliğe gömülmesi',
      'Radyo dalgalarının dünyanın dönüş eksenini kısa süreliğine bozması',
      'Sinyali alan Jerry Ehman\'ın daha sonra NASA\'dan kovulması'
    ],
    correct: 1,
    explanation: 'Tam da uzaylılardan beklenen (hidrojen) frekansında ve çok güçlü gelmesine rağmen 72 saniyeden sonra evrenin bir daha asla bu sesi tekrarlamaması (sessizlik) olayı dramatik kılar.'
  },
  {
    title: 'I. Dünya Savaşı ve Sahte Paris',
    passage: 'Birinci Dünya Savaşı sırasında gece uçuşu yapan Alman zeplinleri ve bombardıman uçakları Paris\'i yıkmakla tehdit ediyordu. Fransız yetkililer akılalmaz bir plan yaptı: Gerçek Paris\'in 24 kilometre uzağına, ışıklandırmaları, sahte sokakları, tren istasyonları ve hatta ahşaptan yapılmış sahte fabrikalarıyla bir "Gölge Paris" inşa ettiler. Amaç, karanlıkta yönünü şaşıran düşman pilotlarını kandırıp bombaları boş tarlalara (sahte şehre) atmalarını sağlamaktı. Savaş bitmeden tam anlamıyla kullanılamasa da bu proje, insanoğlunun kriz anlarında devasa bir şehri bile tiyatro sahnesine çevirebilecek (illüzyon yaratacak) kadar ileri düzey bir taktiksel kurnazlığa sahip olduğunu gösterir.',
    questionStem: 'Sahte Paris\'in inşa edilme stratejisi, savaş ve savunma taktikleri hakkında neyi ortaya koymaktadır?',
    options: [
      'Alman pilotlarının coğrafya bilgilerinin çok zayıf olduğunu',
      'Savunmanın her zaman çelik zırhlarla veya silahlarla değil; bazen düşmanın algısını manipüle eden devasa mimari kurgular (illüzyon ve hile) ile de yapılabildiğini',
      'Paris halkının savaş boyunca şehri tamamen terk ettiğini',
      'Fransız mimarisinin o dönemde ahşap yapılaşmaya geçiş yaptığını'
    ],
    correct: 1,
    explanation: 'Bombardımanı engellemek için silah yerine ahşap ve ışıklandırmalarla devasa bir sahte şehir (illüzyon) inşa edilmesi, savunmanın algı yönetimi ve kurnazlıkla da yapılabileceğini gösterir.'
  },
  {
    title: '536 Yılı: Tarihin En Kötü Yılı',
    passage: 'Tarihçilere göre insanlık tarihinin yaşamak için en korkunç yılı ne 1914, ne de 1939\'du; asıl kâbus 536 yılıydı. İzlanda veya Kuzey Amerika\'daki devasa bir volkan patlaması sonucu ortaya çıkan küller, güneşin önünü tamamen kapattı. Avrupa, Ortadoğu ve Asya ardışık 18 ay boyunca zifiri karanlığa gömüldü. Yaz ortasında kar yağdı, ekinler dondu, kıtlık baş gösterdi ve ardından milyonlarca insanı yok eden Jüstinyen Vebası patlak verdi. O yıl insanlar, dünyanın (kıyametin) sonunun geldiğine inanmışlardı. 536 yılı, medeniyetlerin inşa ettiği onca kibrin ve imparatorluğun, doğanın tek bir nefesiyle (güneşi kapatmasıyla) nasıl anında ölümcül bir çöküşe sürüklenebileceğinin ispatıdır.',
    questionStem: '536 yılının "tarihin en kötü yılı" ilan edilmesinin altında yatan doğa-insan ilişkisi gerçeği nedir?',
    options: [
      'İnsanların güneşe tapmayı bırakıp tek tanrılı dinlere geçmesi',
      'Doğanın (volkanik bir patlamanın) güneşi kapatacak kadar devasa bir güce sahip olmasının, tüm insanlık medeniyetini, ekonomisini ve sağlığını (kıtlık ve vebayla) bir anda çökertmeye yetmesi',
      'Volkanik küllerin toprağı daha verimli hale getirerek yeni tarım devrimlerini başlatması',
      'Avrupa ve Asya ülkelerinin o karanlık dönemde barış antlaşmaları imzalaması'
    ],
    correct: 1,
    explanation: 'Tek bir patlamanın güneşi 18 ay kapatıp ekinleri dondurması ve vebaya yol açması; medeniyetin kibrinin doğanın tek bir hamlesiyle (gücüyle) nasıl çökebileceğini kanıtlar.'
  },
  {
    title: 'Qin Shi Huang ve Ölümsüzlük İksiri',
    passage: 'Çin\'i ilk kez tek bayrak altında toplayan İmparator Qin Shi Huang, suikastlardan o kadar korkuyordu ki bir paranoyaya sürüklenmişti. En büyük takıntısı ölümü yenmekti. Bütün saray bilginlerine ve simyacılarına "ölümsüzlük iksirini" bulmalarını emretti. Simyacılar ona gümüş renginde, büyülü ve parlak bir sıvı sundular: Cıva. İmparator ölümsüz olacağına inanarak yıllarca bu sıvı cıva haplarını yuttu. Ancak onu ebediyete kavuşturacağını sandığı bu iksir, aslında onun beynini eriten ve genç yaşta ölümüne neden olan zehrin ta kendisiydi. İnsanın mutlak güç elde ettiğinde mantığını kaybetmesi ve ölümü yenme kibrinin, onu bizzat ölümün kucağına itmesi tarihi bir ironidir.',
    questionStem: 'İmparator Qin Shi Huang\'ın ölümsüzlük arayışının felsefi ironisi (çelişkisi) parçada nasıl ifade edilmektedir?',
    options: [
      'Simyacıların imparatoru kasten ve bilerek zehirlemesi',
      'İmparatorun ölümsüzlük (yaşam) arayışıyla ve kibriyle yuttuğu mucizevi iksirin (cıvanın), aslında kendi sonunu (ölümünü) getiren zehrin ta kendisi olması',
      'Cıva kullanımının o dönemde Çin tıbbında çok yaygın bir ağrı kesici olması',
      'Ölüm korkusu yüzünden imparatorluğun tüm sınırlarını dış dünyaya kapatması'
    ],
    correct: 1,
    explanation: 'Ölümden kaçmak ve ölümsüz olmak için içtiği büyülü maddenin onu zehirleyip öldürmesi; yaşam arayışının bizzat ölümün nedeni olması olayın ironisidir (çelişkisidir).'
  },
  {
    title: 'Nazca Çizgileri',
    passage: 'Peru\'nun ıssız çöllerinde devasa boyutlarda çizilmiş maymun, örümcek ve kuş figürleri bulunur. "Nazca Çizgileri" olarak bilinen bu geometrik ve kusursuz şekiller, öylesine büyüktür ki ancak yerden yüzlerce metre yüksekte (uçaktan) bakıldığında bir anlam ifade ederler. Antik Nazca halkının uçma teknolojisi olmadığına göre, bu devasa figürleri kimin için ve nasıl yaptıkları hala büyük bir sırdır. Uzaylılar için bir iniş pisti mi, yoksa tanrılara yağmur getirmeleri için çizilmiş devasa birer dua mı? Sebebi ne olursa olsun, Nazca Çizgileri insanoğlunun; sadece çevresindeki insanlara değil, gökyüzünün (tanrıların veya evrenin) o sonsuz sessizliğine de devasa izler bırakarak "biz buradayız" deme çabasıdır.',
    questionStem: 'Nazca Çizgileri\'nin yazar tarafından yorumlanışındaki asıl sembolik anlam nedir?',
    options: [
      'Nazca halkının astronomi ve uzaylı teknolojisi konusunda bugünden daha ileri olduğu',
      'Çöl kumlarının rüzgârla şekillenerek tesadüfi hayvan figürleri oluşturduğu',
      'O şekillerin, sadece gökyüzünden (yukarıdan) görülebilmesine rağmen yapılmış olmasının; insanın evrenin sonsuzluğuna karşı "biz buradayız" diyerek iz bırakma arzusu (aşkınlık) taşıdığı',
      'Figürlerin diğer kabileleri korkutmak için birer savaş sembolü olarak tasarlandığı'
    ],
    correct: 2,
    explanation: 'Yerden görünmeyen şekillerin gökyüzüne doğru (tanrılara/evrene) çizilmesi; insanın sadece yeryüzüne değil, evrenin sonsuzluğuna da bir iz bırakma (biz buradayız deme) arzusunu sembolize eder.'
  },
  {
    title: 'Bağdat Pili',
    passage: '1938 yılında Irak\'ta yapılan kazılarda, 2000 yıllık kilden bir çömlek bulundu. İçinde bakır bir silindir ve onun da ortasında demir bir çubuk vardı. Bu düzenek sirke veya şarap gibi asidik bir sıvıyla doldurulduğunda, modern bir "pil" gibi elektrik üretebiliyordu. Bilim insanları şok içindeydi; çünkü elektriğin icadına (Alessandro Volta\'ya) daha 1800 yıl vardı. Antik Perslerin bu elektrik akımını altın kaplama (elektroliz) yapmak için veya dini ayinlerde insanları "kutsal bir karıncalanma" hissiyle büyülemek için kullandıkları düşünülüyor. "Bağdat Pili", teknoloji ve ilerleme dediğimiz düz çizginin aslında bazen binlerce yıl önce keşfedilip, tarih sayfalarında kaybolup giden (unutulan) döngüsel bir sıçrama olabileceğini fısıldar.',
    questionStem: 'Bağdat Pili\'nin keşfi, tarih ve teknoloji algımıza nasıl bir eleştiri/yenilik getirmektedir?',
    options: [
      'Elektriğin antik çağlarda evleri aydınlatmak için yaygın bir şekilde kullanıldığını',
      'Teknolojik ilerlemenin her zaman dünden bugüne düz ve sürekli bir çizgi (ilerleme) olmadığı; bazı büyük buluşların binlerce yıl önce icat edilip sonra unutulmuş (kaybolmuş) olabileceği',
      'Perslerin İtalyan bilim adamı Volta\'dan teknolojiyi çaldığını',
      'Kilden yapılan çömleklerin demiri paslanmaktan sonsuza kadar koruduğunu'
    ],
    correct: 1,
    explanation: 'Volta\'dan 1800 yıl önce pil benzeri bir aletin bulunması, teknolojinin sürekli ve düz ilerleyen bir çizgi olmadığını, geçmişte bulunup sonra unutulmuş sıçramalar olabileceğini kanıtlar.'
  },
  {
    title: 'Amelia Earhart\'ın Ufku',
    passage: 'Havacılık tarihinin en büyük efsanelerinden Amelia Earhart, 1937\'de Dünya\'nın etrafını uçakla turlayan ilk kadın olmak için yola çıktığında, Pasifik Okyanusu\'nun üzerinde telsizi aniden sustu. Kendisi ve uçağı hiçbir zaman bulunamadı. Kaza yaptı, ıssız bir adada açlıktan öldü veya Japonlara esir düştü... Teoriler hiç bitmedi. Ancak Earhart\'ı efsane yapan şey onun kayboluşu değil, kalkıştan önce söylediği şu sözdü: "Bunu sadece yapmak istediğim için yapıyorum. Kadınlar da erkeklerin denediği şeyleri denemeli." Earhart\'ın okyanusun üzerinde sırra kadem basması, onu bir kurbana değil; korkunun sınırlarını zorlarken ufuk çizgisiyle bütünleşen cesaretin ve tutkunun ölümsüz bir ikonuna dönüştürmüştür.',
    questionStem: 'Yazar, Amelia Earhart\'ın kayboluşunu (ölümünü) nasıl bir yaklaşımla değerlendirmektedir?',
    options: [
      'Gerekli güvenlik önlemleri alınmadan yapılan sorumsuz ve amatörce bir hata olarak',
      'Onu başarısız bir kurban olarak değil; cinsiyet kalıplarını ve korkunun sınırlarını yıkarak, idealleri uğruna ufukla bütünleşen ebedi bir cesaret sembolü olarak',
      'Dönemin teknolojisinin okyanus aşırı uçuşlar için tamamen yetersiz olduğunun bilimsel kanıtı olarak',
      'Hükümetlerin kadın pilotları arama kurtarma çalışmalarında ihmalkâr davrandığına dair bir tepki olarak'
    ],
    correct: 1,
    explanation: 'Kayboluşunu bir trajedi/kurbanlık değil; "korkunun sınırlarını zorlarken ufukla bütünleşen cesaretin ve (cinsiyet engellerine karşı) tutkunun ikonu" olarak yüceltmektedir.'
  },
  {
    title: 'Apollo 11\'in Karantina Odası',
    passage: '1969\'da Neil Armstrong ve ekibi Ay\'dan döndüklerinde kahramanlar gibi omuzlarda taşınmadılar. Okyanusa indiklerinde hemen özel bir kapsüle konup, Dünya\'da tam 21 gün boyunca izole bir "karantina" odasına kapatıldılar. Sebebi basitti: Bilim insanları, Ay yüzeyinde Dünya\'daki tüm yaşamı saniyeler içinde yok edebilecek bilinmeyen bir uzay mikrobu (patojen) olma ihtimalinden dehşete düşmüşlerdi. İnsanoğlu uzayın sınırlarını fethetmiş, en büyük zaferini kazanmıştı; ama aynı zamanda fethettiği o karanlık boşluğun, geri dönüşte onu tamamen yok edebileceğinin derin ve ilkel korkusunu yaşıyordu. Apollo 11 karantinası, en büyük keşiflerin her zaman en büyük paranoyalarla (korkularla) el ele yürüdüğünün kanıtıdır.',
    questionStem: 'Ay\'dan dönen astronotların 21 gün karantinada tutulması, uzay keşifleriyle ilgili hangi psikolojik/bilimsel durumu özetler?',
    options: [
      'Astronotların uzayda geçirdikleri psikolojik travmayı atlatmaları için yalnız kalmaları gerektiği',
      'En görkemli zafer ve keşif anlarında bile, insanoğlunun o bilinmeyen yeni dünyadan gelebilecek (uzay mikrobu gibi) yıkıcı bir tehlikeye karşı duyduğu derin korku ve paranoyayı',
      'Uzay gemisindeki oksijenin dünyadaki havaya hemen uyum sağlayamayacağı gerçeğini',
      'Ay yüzeyindeki tozların insan derisine radyasyon yanığı yapma tehlikesini'
    ],
    correct: 1,
    explanation: 'Zafer anında bile Ay\'dan gelebilecek bir mikrobun dünyayı yok edeceği korkusuyla izole edilmeleri; en büyük keşiflerin en büyük bilinmezlik korkusu (paranoya) ile iç içe olduğunu gösterir.'
  },
  {
    title: 'Gize Piramitleri ve Özgür İrade',
    passage: 'Yıllarca bize Mısır Piramitlerinin kan, ter ve kırbaç altında ezilen milyonlarca köle tarafından inşa edildiği anlatıldı. Ancak son arkeolojik kazılar bu popüler masalı yerle bir etti. Piramit işçilerinin mezarları incelendiğinde, bu insanların köle değil, yüksek maaşlı (bira ve et ile beslenen), sağlık hizmeti alan saygın zanaatkârlar ve işçiler olduğu ortaya çıktı. Hatta iş kazasında kırılan kemiklerinin ameliyat edildiği bile görüldü. Piramitler bir zorbalığın (kırbacın) eseri değil; inancın, devasa bir ulusal organizasyonun ve binlerce özgür insanın ortak bir kutsal amaç etrafında gönüllü olarak kenetlenmesinin sonucudur. İnsanoğlu inandığı bir amaç uğruna çalışıyorsa, en ağır taşı bile sırtında bir tüy gibi taşır.',
    questionStem: 'Piramitleri inşa edenlerin "köle değil, maaşlı ve gönüllü zanaatkârlar" olduğunun anlaşılması, neyi sembolize etmektedir?',
    options: [
      'Mısırlıların kölelik kavramını tarihte ilk kaldıran medeniyet olduğunu',
      'Piramitlerin uzaylılar tarafından inşa edildiği teorilerinin geçersizliğini',
      'Dünyanın en devasa yapılarının (mucizelerinin) kırbaç ve zorbalıkla değil; ortak bir inanç etrafında kenetlenen özgür irade ve ulusal organizasyonla inşa edildiğini',
      'Antik dönemde bira ve etin günümüzden daha değersiz gıdalar sayıldığını'
    ],
    correct: 2,
    explanation: 'Kırbaçlanan köleler mitinin çökmesi ve işçilerin saygın zanaatkârlar olması; devasa eserlerin zorbalıkla değil, inanç, organizasyon ve özgür iradeyle yapıldığını sembolize eder.'
  },
  {
    title: 'Herostratos Sendromu',
    passage: 'MÖ 356 yılında Yunanistan\'ın Efes kentinde, antik dünyanın yedi harikasından biri olan o muazzam Artemis Tapınağı kundaklanarak küle çevrildi. Yakalanan kundakçı Herostratos, bunu neden yaptığı sorulduğunda şu korkunç cevabı verdi: "Adımı tarihe yazdırmak, sonsuza dek unutulmamak için." Şehir yönetimi, onun amacına ulaşmasını engellemek için adının anılmasını yasakladı (Damnatio Memoriae). Ancak bu yasak işe yaramadı; tarih onu, iyi bir eser bırakamayıp şöhret uğruna muazzam bir güzelliği yok edenlerin piri olarak kaydetti. "Herostratos Sendromu", insanın içindeki o doymak bilmez tanınma arzusunun (şöhret hırsının), yıkıcılığı ve terörü bile nasıl bir tatmin aracına dönüştürebileceğinin en hastalıklı (toksik) kanıtıdır.',
    questionStem: 'Efes\'teki Artemis Tapınağı\'nın yakılması olayından yola çıkarak tanımlanan "Herostratos Sendromu" nedir?',
    options: [
      'Antik dönemdeki mimari eserlerin tahtadan yapılması nedeniyle ateşe dayanıksız olması durumu',
      'İnsanın sadece kötülük ve şiddet yapmak amacıyla içgüdüsel olarak yangın çıkarmaya (piromani) eğilimli olması',
      'Tarihe geçmek (şöhret olmak) ve unutulmamak uğruna, kişinin hiçbir ahlaki sınır tanımadan iyi ve güzel olan şeyleri bile yok etme (yıkıcılık) hırsı',
      'Şehir yönetimlerinin suçluları cezalandırmak yerine onları tarihten silmeye çalışması'
    ],
    correct: 2,
    explanation: 'Herostratos\'un sırf adını tarihe yazdırmak (şöhret) için dünyanın en güzel tapınaklarından birini yakması; tanınma hırsının kötülük ve yıkıcılığa dönüşmesini ifade eder.'
  },
  {
    title: 'Çavdar Mahmuzu ve Cadı Avları',
    passage: '1692 Salem Cadı Mahkemelerinde düzgün insanlar birdenbire çıldırarak birbirlerini cadılıkla suçlamış, sanrılar görmüş ve 20 masum insanı asmışlardı. Tarihçiler yüzyıllarca bunun dini bir histeri olduğunu savundu. Ancak modern bilim daha ürkütücü bir teori ortaya koydu: O yıl yağan yoğun yağmurlar, depolardaki çavdar tahıllarında "Çavdar Mahmuzu" (Ergot) adlı bir mantarın üremesine neden olmuştu. Bu mantar, LSD uyuşturucusunun doğal hammaddesidir! Yani o dindar insanlar içine şeytan girdiği için değil, farkında olmadan haftalarca LSD\'li ekmekler yedikleri için toplu olarak kimyasal halüsinasyonlar görüyorlardı. Tarihin en karanlık ahlaki cinayetlerinden biri, belki de sadece bozulmuş bir dilim ekmeğin içindeki küçücük bir mantarın yarattığı biyolojik bir felaketti.',
    questionStem: 'Salem Cadı Avları ile ilgili ortaya atılan "Çavdar Mahmuzu" teorisi, olayı hangi boyutuyla yeniden yorumlamaktadır?',
    options: [
      'Salem halkının büyücülük ve kara büyü konusunda sanılandan daha bilgili olmasıyla',
      'Kötülüğün dini (histerik) veya ahlaki bir kötülükten ziyade; bozuk gıdanın beyni zehirlemesi sonucu ortaya çıkan biyolojik (kimyasal) ve tesadüfi bir halüsinasyon felaketi olmasıyla',
      'LSD uyuşturucusunun 1600\'lü yıllarda kasıtlı olarak bir biyolojik silah gibi kullanılmasıyla',
      'Tarım ilaçlarının eksikliğinin her zaman toplumsal ölümlere yol açtığı teziyle'
    ],
    correct: 1,
    explanation: 'İçine şeytan girdiği sanılan insanların aslında (LSD içeren) mantarlı ekmek yediği için halüsinasyon görmesi; olayın dini/ahlaki değil, biyolojik bir zehirlenme olduğunu savunur.'
  },
  {
    title: 'Kristal Kafatasları Yanılgısı',
    passage: '19. yüzyılın sonlarında müzelerde aniden, tamamen pürüzsüz kuvars taşından oyulmuş "Kristal Kafatasları" belirmeye başladı. Satıcılar bunların antik Maya ve Aztek rahiplerine ait, uzaylılar tarafından bırakılmış şifa ve lanet saçan nesneler olduğunu iddia ettiler. Tüm dünya bu gizeme inandı. Ancak yıllar sonra elektron mikroskoplarıyla yapılan incelemeler gerçeği yüzümüze çarptı: Kafataslarının üzerindeki kesik izleri, 19. yüzyılda Almanya\'da kullanılan modern döner zımparalara aitti. Ortada bir Maya efsanesi değil; sadece paraya tapan zeki kalpazanlar ve egzotik (uzaylı) gizemlere inanmaya dünden razı olan, kolayca kandırılabilir büyük bir insan kalabalığı vardı. İnsanoğlu, sıkıcı gerçeğe katlanmaktansa fantastik bir yalana inanmayı her zaman tercih eder.',
    questionStem: 'Kristal Kafatasları\'nın modern aletlerle yapıldığının anlaşılması, insan doğasına dair hangi zaafı göz önüne sermiştir?',
    options: [
      'Aztek ve Maya medeniyetlerinin zanaat konusunda modern sanattan daha ileri olduğu',
      'Alman teknolojisinin 19. yüzyılda bile taş oymacılığında kusursuz çalıştığı',
      'İnsanların sıradan (sıkıcı) gerçekleri kabullenmek yerine, içlerindeki heyecan arayışıyla mistik ve fantastik (egzotik) yalanlara inanmaya her zaman meyilli olması zaafını',
      'Müzelerin eserleri satın alırken yeterli bilimsel laboratuvar testleri yapmadığı'
    ],
    correct: 2,
    explanation: 'Kalpazanların yaptığı sahte bir kafatasına tüm dünyanın "Maya veya uzaylı efsanesi" diye inanması; insanların sıkıcı gerçekler yerine fantastik yalanlara inanma zaafını (meylini) gösterir.'
  }
];

export const gizemParagrafSorulari11: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_11.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_11[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-gizem11-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
export const edebiyatParagrafSorulari10: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_10.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_10[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-edebiyat10-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_12 = [
  {
    title: 'Dünyayı Kurtaran Adam: Stanislav Petrov',
    passage: '26 Eylül 1983 gece yarısı, Sovyet nükleer uyarı sistemleri aniden çığlık atmaya başladı: Ekranda, Amerika\'nın Sovyetler\'e 5 adet nükleer füze fırlattığı yazıyordu. Prosedür kesindi: Karşı saldırı başlatılmalı ve dünya nükleer bir cehenneme sürüklenmeliydi. Ancak nöbetçi subay Stanislav Petrov, sistemin "kesin" uyarısına rağmen duraksadı. "Saldıracak olsalar 5 füzeyle değil, yüzlerce füzeyle saldırırlardı" diyerek bunun bir sistem hatası olduğuna kanaat getirdi ve alarmı üstlerine bildirmedi. Haklıydı; güneş ışınları bulutlardan yansıyıp uyduları kandırmıştı. O gece dünya, kusursuz sanılan devasa bir teknolojinin (makinenin) değil; kuralları ve algoritmaları reddeden bir insanın soğukkanlı sezgisi sayesinde kurtuldu.',
    questionStem: 'Stanislav Petrov olayından yola çıkarak teknoloji ve insan ilişkisine dair çıkarılabilecek temel ders nedir?',
    options: [
      'Güneş ışınlarının elektronik cihazlar üzerinde her zaman kalıcı hasarlar bıraktığı',
      'Askeri prosedürlerin ve kuralların kriz anlarında her zaman en güvenilir rehber olduğu',
      'Kusursuz sanılan teknolojik sistemlerin bile yanılacağı ve kriz anlarında insan sezgisinin (soğukkanlı muhakemenin) makinelerden çok daha hayati (kurtarıcı) olduğu',
      'Nükleer savaş tehdidinin sadece psikolojik bir manipülasyon aracı olduğu'
    ],
    correct: 2,
    explanation: 'Makinenin kesin fırlatma uyarısına rağmen Petrov\'un soğukkanlı sezgisiyle (insani muhakemesiyle) hatayı fark etmesi, insan sezgisinin teknolojinin üzerinde bir kurtarıcı olduğunu kanıtlar.'
  },
  {
    title: 'Tramvay İkilemi (Trolley Problem)',
    passage: 'Felsefenin en meşhur ahlaki deneylerinden biri olan Tramvay İkilemi şöyledir: Kontrolden çıkmış bir tramvay, raylara bağlanmış 5 kişinin üzerine doğru hızla gitmektedir. Sizin elinizde bir makas kolu vardır; eğer kolu çekerseniz tramvay diğer raya geçecek, ancak o rayda bağlı olan 1 kişiyi ezip öldürecektir. Hiçbir şey yapmazsanız 5 kişi ölecek, müdahale ederseniz sizin eyleminiz yüzünden 1 kişi ölecektir. Bu karanlık senaryo, bizi şu korkunç gerçekle yüzleştirir: "Çoğunluğun faydası" uğruna masum birini bilerek feda etmek cinayet midir, yoksa ahlaki bir zorunluluk mu? Ahlak, sadece sonuçların matematiği midir, yoksa eylemin niyetine bağlı sarsılmaz bir çizgi mi?',
    questionStem: 'Tramvay İkilemi düşünce deneyinin felsefede tartışmaya açtığı asıl "karanlık (çözümsüz)" konu nedir?',
    options: [
      'Raylı sistemlerin o dönemde yetersiz güvenlik önlemleriyle çalışması',
      'İnsanların tehlike anında çoğunlukla kaçmayı tercih etmesi ve sorumluluktan korkması',
      'Çoğunluğun hayatını kurtarmak için (faydacılık) masum birini feda etmenin ahlaki bir doğru mu yoksa bir cinayet mi olduğu sorunsalı',
      'Tramvay kazalarının diğer kazalara göre daha travmatik psikolojik etkiler bırakması'
    ],
    correct: 2,
    explanation: 'Deney, 5 kişiyi kurtarmak için 1 kişiyi bilerek feda etmenin (sayısal faydanın) ahlaki olarak doğru mu yoksa cinayet mi olduğu şeklindeki felsefi çıkmazı tartışır.'
  },
  {
    title: 'Kessler Sendromu: Uzaydaki Hapishanemiz',
    passage: 'İnsanoğlu gökyüzüne uydular fırlatıp teknolojik kibrini uzaya taşırken, geride devasa bir çöplük bıraktı. NASA bilim insanı Donald Kessler\'ın ortaya attığı "Kessler Sendromu"na göre; Dünya\'nın yörüngesindeki ömrünü yitirmiş uydular ve metal parçaları bir gün birbirine çarpmaya başlayacak. Bu çarpışmalar binlerce yeni şarapnel yaratacak ve o şarapneller saatte 28 bin km hızla diğer uyduları parçalayarak zincirleme bir reaksiyona neden olacak. Sonuç: Dünya\'nın etrafı geçilemez bir mermi (çöp) bulutuyla kaplanacak. İletişim, GPS ve internet anında çökeceği gibi, yüzlerce yıl boyunca Dünya\'dan başka bir uzay aracı fırlatmak imkânsız hale gelecek. İnsanoğlu, kendi ürettiği teknolojik çöplerin ördüğü görünmez bir kafeste, kendi gezegenine hapsolacaktır.',
    questionStem: 'Kessler Sendromu\'nun gerçekleşmesi durumunda ortaya çıkacak asıl ironik (korkutucu) felaket nedir?',
    options: [
      'Uzaylıların dünyayı keşfetmesinin tamamen engellenmesi',
      'İnsanoğlunun uzayı fethetmek için ürettiği teknolojinin (ve çöplerinin), sonunda onu uzaya çıkamaz hale getirip kendi gezegenine hapsetmesi',
      'Küresel ısınmanın uzaydaki çöpler yüzünden daha da hızlanması',
      'Meteor çarpmalarının dünya yüzeyinde çok daha yıkıcı etkiler bırakması'
    ],
    correct: 1,
    explanation: 'Uzayı keşfetmek için atılan uyduların çöp bulutuna dönüp, insanın uzaya çıkmasını (ve haberleşmesini) engelleyecek bir hapishaneye dönüşmesi olayın asıl korkutucu ironisidir.'
  },
  {
    title: 'Çin Odası Argümanı',
    passage: 'Filozof John Searle, "Yapay zekâ gerçekten düşünebilir mi?" sorusuna "Çin Odası" argümanıyla sarsıcı bir cevap verir. Çince bilmeyen bir adamı kapalı bir odaya koyun ve eline Çince sembollerin nasıl eşleştirileceğini gösteren (eğer şu şekil gelirse bu şekli ver diyen) koca bir kural kitabı verin. Dışarıdan biri odaya Çince bir soru attığında, adam kitaba bakıp doğru Çince sembolleri dışarı uzatır. Dışarıdaki kişi, içeridekinin anadil seviyesinde Çince bildiğine yemin edebilir; oysa adam hiçbir şey anlamamış, sadece şekilleri (algoritmaları) eşleştirmiştir. Bilgisayarlar da böyledir. Ne kadar zeki veya duygusal cevaplar verirlerse versinler, onlar hiçbir şeyi "anlamazlar"; sadece başarılı birer taklitçi (şekil eşleştirici) ve ruhsuz birer illüzyondurlar.',
    questionStem: 'Çin Odası Argümanı, Yapay Zekâ (AI) teknolojisi hakkında hangi felsefi gerçeği kanıtlamaya çalışır?',
    options: [
      'Çince gibi karmaşık dillerin bilgisayarlar tarafından asla tercüme edilemeyeceğini',
      'Yapay zekânın ne kadar kusursuz cevaplar üretirse üretsin, aslında bir bilince (anlama yetisine) sahip olmadığını, sadece komutları (sembolleri) eşleştiren bir taklitçi olduğunu',
      'Gelecekte bilgisayarların insan beyninin yerini tamamen alacağını',
      'Dil öğrenmenin sadece ezber yeteneğiyle ilgili biyolojik bir süreç olduğunu'
    ],
    correct: 1,
    explanation: 'Çince bilmeyen adamın sadece kitapla şekil eşleştirmesi; bilgisayarların da anlamadan (bilinçsizce) sadece kodları/sembolleri eşleştiren birer taklitçi olduğunu kanıtlar.'
  },
  {
    title: 'Universe 25 (Fare Ütopyası)',
    passage: '1960\'larda etolog John B. Calhoun, hastalıkların, yırtıcıların ve açlığın olmadığı; sınırsız yiyecek ve mükemmel bir sıcaklığa sahip devasa bir fare şehri (Universe 25) kurdu. Nüfus hızla arttı, ancak alan daralmaya başladığında farelerin psikolojisi çöktü. "Davranışsal Çöküş" adı verilen bir evreye girdiler: Anneler yavrularını terk etti, erkekler sebepsiz yere birbirini öldürmeye başladı ve "Güzeller" adı verilen bir grup fare, toplumdan tamamen izole olup sadece tüylerini yalayarak yaşamaya başladı. Sonunda üreme tamamen durdu ve o kusursuz ütopya, farelerin kendi kendilerini yok ettiği bir hayalet şehre dönüştü. Calhoun\'un ütopyası, fiziksel ihtiyaçların sınırsızca karşılandığı ama kişisel alanın (anlamın) yok olduğu kalabalıkların, kaçınılmaz olarak cinnete ve yok oluşa sürüklendiğini kanıtlar.',
    questionStem: 'Universe 25 (Fare Ütopyası) deneyi, toplum bilimciler için neyin sarsıcı bir metaforudur?',
    options: [
      'Farelerin genetik olarak doğuştan şiddete eğilimli hayvanlar olduğunun',
      'Fiziksel tehlikelerin olmamasının canlıları daha tembel yaptığı gerçeğinin',
      'Sınırsız kaynağa rağmen aşırı kalabalıklaşmanın ve anlam/amaç yitiminin, toplumları psikolojik bir cinnete ve "davranışsal çöküşe" (yok oluşa) götüreceğinin',
      'Bulaşıcı hastalıkların kapalı alanlarda çok daha hızlı yayıldığının'
    ],
    correct: 2,
    explanation: 'Açlık veya yırtıcı tehlikesi olmamasına rağmen (sınırsız kaynak), aşırı nüfus ve alan daralmasının fareleri psikolojik çöküşe/cinnete (davranışsal çöküşe) sürüklemesi metnin asıl mesajıdır.'
  },
  {
    title: 'Halo Etkisi (Hale Yanılgısı)',
    passage: 'Neden yakışıklı bir aktörün aynı zamanda çok zeki, iyi kalpli ve başarılı bir baba olduğunu varsayarız? Veya neden güzel bir kadının bir suçu işleme ihtimali bize daha düşük gelir? Psikolojide buna "Halo Etkisi" (Hale Yanılgısı) denir. Beynimiz, bir insanın sadece tek bir olumlu özelliğine (genellikle dış görünüşüne) bakarak, onun karakterindeki diğer tüm bilinmeyen özelliklerin de mükemmel olduğuna dair körü körüne bir inanç geliştirir. Zihnimiz, o kişiye adeta meleklerin taktığı o ışıltılı "haleyi" takar. Halo Etkisi, insan mantığının ne kadar yüzeysel olduğunu ve "güzel olan iyidir" yalanına ne kadar kolay kanabildiğimizi gösteren evrimsel bir tasarım hatasıdır.',
    questionStem: 'Halo Etkisi kavramı, insanların karar verirken düştüğü hangi psikolojik tuzağı (yanılgıyı) tanımlar?',
    options: [
      'Güzellik salonlarının ve estetik cerrahinin insan psikolojisini bozmasını',
      'İnsanların genellikle güvendikleri kişilerden ihanet görme korkusunu',
      'Bir kişinin tek bir olumlu özelliği (özellikle güzelliği) üzerinden, o kişinin diğer tüm (bilinmeyen) özelliklerinin de mükemmel olduğuna dair mantıksız bir varsayıma (ön yargıya) düşülmesini',
      'Sinema aktörlerinin rol yeteneklerinin gerçek hayattaki davranışlarını da etkilemesini'
    ],
    correct: 2,
    explanation: 'Sadece dış görünüşüne bakıp o kişinin zeki ve iyi kalpli olduğunu varsaymamız (tek bir özelliğin tüm algıyı kör etmesi) Halo Etkisi yanılgısını açıklar.'
  },
  {
    title: 'Carrington Olayı: Güneşin Öfkesi',
    passage: '1859 yılının Eylül ayında, Dünya daha önce hiç görmediği bir manzarayla karşılaştı. Güneş\'te yaşanan devasa bir patlama (Jeomanyetik Fırtına) sonucu, Kuzey Işıkları Küba ve Hawaii\'den bile görülecek kadar güneye indi. Gökyüzü o kadar parlaktı ki, madenciler sabah olduğunu sanıp uykularından uyandılar. Olayın en korkunç yanı, dönemin tek teknolojisi olan telgraf hatlarının aniden alev alması ve operatörleri elektrik çarparak hastanelik etmesiydi. "Carrington Olayı" olarak bilinen bu güneş fırtınası bugün yaşansaydı; dünyadaki tüm uydular, elektrik şebekeleri ve internet saniyeler içinde yanarak kül olurdu. İnsanoğlunun onca kibriyle inşa ettiği bu devasa dijital medeniyet, Güneş\'in tek bir şiddetli hapşırığıyla saniyeler içinde Taş Devri\'ne dönecek kadar kırılgandır.',
    questionStem: 'Carrington Olayı\'nın hatırlattığı evrensel ve teknolojik gerçeklik nedir?',
    options: [
      'Güneş lekelerinin küresel ısınmayı durdurabilecek tek doğal faktör olduğu',
      'İnsanoğlunun inşa ettiği modern ve devasa dijital (teknolojik) medeniyetin, doğanın/evrenin (Güneş\'in) tek bir şiddetli doğa olayı karşısında saniyeler içinde çökebilecek kadar kırılgan olduğu',
      'Telgraf hatlarının o dönemde yeterli izolasyona sahip olmadan üretildiği',
      'Kuzey Işıkları\'nın sadece radyoaktif gazlardan oluştuğu'
    ],
    correct: 1,
    explanation: 'Güneşin tek bir patlamasıyla (hapşırığıyla) tüm telgraf ağlarının yanması; bugünkü dijital dünyamızın doğa karşısında ne kadar kırılgan olduğunu gösterir.'
  },
  {
    title: 'Deep Blue ve Kasparov: Kırılan Ego',
    passage: '1997 yılında dünya satranç şampiyonu Garry Kasparov, IBM\'in geliştirdiği "Deep Blue" adlı süper bilgisayarın karşısına oturduğunda oldukça kibirliydi; bir makinenin insan yaratıcılığını asla yenemeyeceğini düşünüyordu. Ancak maçın bir noktasında Deep Blue, hiçbir mantıklı insanın yapmayacağı, tamamen anlamsız görünen ama stratejik olarak kusursuz bir hamle (fedakârlık) yaptı. Kasparov şoka girdi, makinenin gerçekten düşünebildiğine ve kendisiyle oynadığına inandı. Psikolojik olarak darmadağın olan Kasparov maçı kaybetti. Oysa makine düşünmüyor, saniyede 200 milyon hamle hesaplıyordu. Kasparov\'u yenen şey makinenin zekâsı değil, insanın o mükemmel sanılan zihninin, kendi icat ettiği soğuk bir hesap makinesi karşısında yaşadığı o aşağılayıcı "korku ve özgüven çöküşü"ydü.',
    questionStem: 'Kasparov\'un Deep Blue\'ya yenilmesi, metne göre asıl olarak hangi duruma bağlanmıştır?',
    options: [
      'Bilgisayarın o dönemde bilinen tüm satranç oyunlarını ezberlemiş olmasına',
      'Satrancın tamamen matematiksel bir oyun olup insan yaratıcılığına ihtiyaç duymamasına',
      'Makinenin yapay bir zekâya sahip olmasından ziyade, Kasparov\'un makinenin hamlesini yanlış yorumlayarak (korkuya kapılarak) yaşadığı psikolojik çöküşe ve ego kaybına',
      'IBM mühendislerinin oyun sırasında dışarıdan makineye gizlice yardım etmesine'
    ],
    correct: 2,
    explanation: 'Kasparov\'u yenen şeyin makinenin zekâsı değil, Kasparov\'un makinenin düşündüğünü sanarak kapıldığı "psikolojik korku ve özgüven çöküşü" olduğu parçada açıkça belirtilmiştir.'
  },
  {
    title: 'Gyges\'in Yüzüğü',
    passage: 'Platon, Devlet adlı eserinde sarsıcı bir hikâye anlatır: Gyges adında dürüst bir çoban, yerin altında bulduğu bir yüzüğü parmağına taktığında tamamen görünmez olduğunu fark eder. Görünmezliğin verdiği bu mutlak güçle birlikte, o "dürüst" çoban aniden değişir; saraya girer, kraliçeyi baştan çıkarır, kralı öldürür ve tahtı ele geçirir. Platon şu korkutucu soruyu sorar: "Eğer hiç kimsenin sizi görmeyeceğinden ve cezalandırmayacağından emin olsaydınız, hala ahlaklı davranır mıydınız?" Gyges\'in Yüzüğü, insan doğasının o karanlık sırrını ifşa eder: Bizi ahlaklı ve iyi yapan şey içimizdeki o yüce erdemler değil; çoğu zaman sadece yakalanma, dışlanma ve cezalandırılma korkusudur.',
    questionStem: 'Platon\'un "Gyges\'in Yüzüğü" hikâyesi, insan ahlakının kökeniyle ilgili neyi iddia etmektedir?',
    options: [
      'Ahlaklı davranışların insan doğasında var olan değişmez genetik bir kod olduğunu',
      'İnsanların güç ve servet elde ettiklerinde bile geçmişteki erdemlerini koruyabildiğini',
      'İnsanın ahlaklı görünmesinin (iyi davranmasının) temel nedeninin içsel bir erdem değil; genellikle görünür olmanın getirdiği toplumsal baskı, dışlanma ve cezalandırılma korkusu olduğunu',
      'Sihirli eşyaların mitolojide her zaman felaket getirdiğini'
    ],
    correct: 2,
    explanation: 'Görünmez olan dürüst çobanın anında suç işlemesi; bizi ahlaklı yapan şeyin erdem değil, yakalanma/cezalandırılma korkusu olduğunu gösterir.'
  },
  {
    title: 'Babil Kütüphanesi (Borges)',
    passage: 'Arjantinli yazar Jorge Luis Borges, "Babil Kütüphanesi" adlı hikâyesinde evreni devasa bir kütüphane olarak tasvir eder. Bu kütüphanede, alfabedeki harflerin rastgele dizilimiyle yazılabilecek "mümkün olan tüm kitaplar" vardır. Yani hayatınızın eksiksiz hikâyesi, evrenin sırrı, kanserin tedavisi ve gelecekteki tüm icatlar o raflarda bir yerlerdedir. Ancak sorun şudur: Bu anlamlı kitapların yanında, harflerin rastgele basıldığı katrilyonlarca "anlamsız" kitap da vardır. İnsanlar doğru kitabı bulmak için ömürlerini harcar, çıldırır ve intihar ederler. Borges\'in bu distopyası, günümüz "İnternet Çağı"nın kusursuz bir özetidir: Sonsuz verinin (bilginin) olduğu yerde, anlamsızlık (gürültü) o kadar büyüktür ki, gerçeği bulmak imkânsızlaşır. Aşırı bilgi, aydınlanma değil; körlüğün ta kendisidir.',
    questionStem: 'Babil Kütüphanesi hikâyesi, modern İnternet Çağı hakkında nasıl bir eleştirel paralellik sunmaktadır?',
    options: [
      'İnternetin matbaadan daha hızlı bilgi yaydığını ve insanları daha bilge yaptığını',
      'Sonsuz miktardaki bilginin ve verinin (gürültünün), değerli gerçeği bulmayı imkânsız hale getirerek aydınlanma yerine bir tür "zihinsel körlük" (anlamsızlık) yarattığını',
      'Kitap okuma alışkanlığının dijitalleşme ile birlikte tamamen yok olduğunu',
      'Kütüphanelerin arşivleme sistemlerinin dijital verilere göre daha güvenilir olduğunu'
    ],
    correct: 1,
    explanation: 'Sonsuz sayıda anlamsız kitap (veri) içinde gerçeği bulmanın çıldırtıcı olması; internet çağında "aşırı bilginin aydınlanma değil körlük (anlamsızlık) yarattığı" eleştirisine paraleldir.'
  },
  {
    title: 'Therac-25: Ölümcül Algoritma',
    passage: '1980\'lerde hastanelere kurulan Therac-25, kanser hastalarına radyasyon tedavisi uygulayan, dönemin en gelişmiş bilgisayar kontrollü tıbbi cihazıydı. Önceki cihazların aksine, güvenlik kilitleri fiziksel donanımla değil, tamamen "yazılım" (kod) ile kontrol ediliyordu. Ancak yazılımda ufak bir mantık hatası vardı: Eğer teknisyen verileri klavyede çok hızlı girerse, makine hata veriyor ve hastaya alması gerekenin 100 katı (ölümcül) radyasyon veriyordu. Doktorlar makinenin "kusursuz" olduğuna o kadar inanmışlardı ki, hastalar çığlık çığlığa yanarken bile cihazın hata kodunu görmezden gelip denemeye devam ettiler ve altı kişiyi öldürdüler. Therac-25 faciası, insanoğlunun göremediği algoritmik bir koda duyduğu o körü körüne ve kibirli inancın, nasıl ölümcül bir silah olabileceğinin ilk dijital kanıtıdır.',
    questionStem: 'Therac-25 faciasının tıbbi bir skandala dönüşmesinin temel sebebi nedir?',
    options: [
      'Kanser hastalarının radyasyon tedavisine karşı alerjik reaksiyon göstermesi',
      'Hastanelerin bütçe yetersizliği yüzünden makinenin eski versiyonlarını kullanması',
      'Teknolojiye ve yazılıma (makinenin kusursuzluğuna) duyulan körü körüne inancın, hastaların acısını ve yazılımdaki ölümcül hatayı görmezden gelmeye neden olması',
      'Doktorların teknisyenleri yeterince iyi eğitememiş olması'
    ],
    correct: 2,
    explanation: 'Doktorların makinenin kusursuz olduğuna inanıp, hastaların çığlıklarını görmezden gelerek radyasyon vermeye devam etmeleri; teknolojiye duyulan körü körüne inancın felaket getirdiğini gösterir.'
  },
  {
    title: 'Arecibo Mesajı: Evrene Atılan Taş',
    passage: '1974 yılında bilim insanları, Porto Riko\'daki devasa Arecibo radyo teleskobunu yıldız kümelerine çevirdiler ve evrenin derinliklerine 1679 bitlik, piksellerden oluşan bir radyo mesajı gönderdiler. Bu mesajda DNA yapımız, insan figürü, Güneş sistemindeki yerimiz ve nüfusumuz gibi en temel sırlarımız yer alıyordu. Amaç, uzaylılara "Biz buradayız" demekti. Ünlü fizikçi Stephen Hawking gibi bazı düşünürler bunu dehşet verici bir hata olarak gördü: "Gelişmiş bir medeniyete yerimizi söylemek, Amerika\'yı yeni keşfeden İspanyollara bağıran yerlilerin durumuna düşmektir." Arecibo Mesajı, insanoğlunun sonsuz merakı ve naif kibriyle, karanlık bir ormana "Ben buradayım, gelip beni bulun!" diye bağırmasından başka bir şey değildir.',
    questionStem: 'Bazı bilim insanlarının (Hawking gibi) Arecibo Mesajı\'nı tehlikeli bir hata olarak görmesinin asıl gerekçesi nedir?',
    options: [
      'Radyo dalgalarının uzaydaki diğer uyduların sinyallerini bozma ihtimali',
      'Evrendeki potansiyel (gelişmiş) medeniyetlere, kendi yerimizi ve biyolojik zayıflıklarımızı bildirerek dünyayı olası bir sömürü veya yok edilme tehdidine açık hale getirmek',
      'Mesajın gönderildiği yıldız kümesinin zaten ölü ve yaşamsız bir bölge olması',
      '1679 bitlik bir mesajın uzaylılar tarafından deşifre edilemeyecek kadar ilkel kalması'
    ],
    correct: 1,
    explanation: 'İspanyollara bağıran yerliler benzetmesi kullanılarak; gelişmiş uzaylı medeniyetlere yerimizi söylemenin sömürülme veya yok edilme tehdidine (av konumuna düşmeye) yol açacağı gerekçesi vurgulanmıştır.'
  },
  {
    title: 'Büyük Londra Sisi (1952)',
    passage: 'Aralık 1952\'de Londra, tarihinin en korkunç kışlarından birini yaşadı. Havayı ısıtmak için milyonlarca bacadan pompalanan kalitesiz kömür dumanı, rüzgârsız havayla birleşip şehrin üzerine sarı-siyah, asidik bir zehir bulutu gibi çöktü. Görüş mesafesi sıfıra indi; kuşlar uçarken boğulup sokaklara düştü, sinema salonlarında arka sıralar perdeyi göremiyordu. Dört gün süren bu "Büyük Sis" boyunca tam 12.000 Londralı zehir soluyarak boğularak öldü. Bu olay bir doğa felaketi değil; Sanayi Devrimi\'nin kibrinin, kontrolsüz üretimin ve çevreyi hiçe sayan acımasız ilerleme hırsının insanoğluna kestiği o zehirli ve ölümcül faturadır.',
    questionStem: 'Büyük Londra Sisi olayının tarihsel ve çevresel bağlamdaki asıl sorumlusu olarak ne gösterilmiştir?',
    options: [
      'Londra\'nın coğrafi olarak her zaman sisli ve rüzgârsız bir vadi (çukur) içinde bulunması',
      'İngiliz halkının hastalıklara karşı bağışıklık sisteminin o dönemde çok zayıf olması',
      'Doğa felaketinden ziyade; Sanayi Devrimi\'nin getirdiği kontrolsüz büyüme hırsının, çevre duyarsızlığının ve aşırı (kalitesiz) kömür kullanımının yarattığı insan eliyle yapılmış bir yıkım olması',
      'Şehirde yeterli hastane ve tıbbi maske stokunun bulunmaması'
    ],
    correct: 2,
    explanation: 'Olayın doğa felaketi değil, Sanayi Devrimi kibrinin ve çevreyi hiçe sayan kontrolsüz üretim/kömür yakma hırsının (insan eliyle yapılan) faturası olduğu belirtilmiştir.'
  },
  {
    title: 'Tanganyika Kahkaha Salgını',
    passage: '1962 yılında Afrika\'nın Tanganyika (bugünkü Tanzanya) bölgesindeki bir yatılı kız okulunda üç öğrenci sebepsiz yere gülmeye başladı. Bu masum kıkırdama kısa sürede okuldaki yüzlerce öğrenciye, oradan da çevre köylerdeki binlerce insana bulaştı. İnsanlar günlerce, nefessiz kalıp bayılana, ciltlerinde yaralar çıkana kadar histerik bir şekilde gülüyor ve ağlıyordu. Okullar kapatıldı, bölge karantinaya alındı. Bilim insanları bunun ne bir virüs ne de zehirlenme olduğunu anladı. Bu, ülkenin yeni bağımsızlık kazanmasının ve katı İngiliz eğitim sisteminin çocuklar üzerinde yarattığı o boğucu stresin dışa vurumuydu (Psikojenik Histeri). Bazen kahkaha bir neşe belirtisi değil; çaresiz kalmış, sıkışmış bir ruhun ve bedenin çığlık atma şeklidir.',
    questionStem: 'Tanganyika Kahkaha Salgını\'nın ortaya çıkmasındaki asıl neden parçada nasıl açıklanmıştır?',
    options: [
      'Bölgedeki içme sularına karışan halüsinojenik (uyuşturucu) bir mantarın yarattığı etki',
      'Afrika kültüründeki geleneksel dans ve gülme festivallerinin kontrolden çıkması',
      'Yeni siyasi değişimlerin ve katı eğitim sisteminin yarattığı aşırı baskının (stresin), kitleler üzerinde yol açtığı kontrol edilemez bir psikolojik histeri (dışavurum) krizi',
      'Öğrencilerin okul yönetimine karşı bilerek ve organize bir şekilde başlattıkları protesto'
    ],
    correct: 2,
    explanation: 'Virüs veya zehir değil; bağımsızlık ve katı eğitimin yarattığı boğucu stresin dışavurumu (psikojenik histeri) olduğu açıkça vurgulanmıştır.'
  },
  {
    title: 'Foucault Sarkacı',
    passage: '1851 yılında Fransız fizikçi Léon Foucault, Dünya\'nın kendi ekseni etrafında döndüğünü ispatlamak için devasa bir deneye imza attı. Paris\'teki Panthéon\'un kubbesinden 67 metre uzunluğunda bir tele bağladığı 28 kiloluk bir pirinç gülle sarkıttı. Sarkacın ucundaki iğne, zemindeki kum tabakasına çizgiler çiziyordu. Sarkaç sadece ileri-geri sallanıyordu, ancak zaman ilerledikçe kumdaki çizgiler yavaşça dönerek bir daire oluşturmaya başladı! Oysa sarkaç yön değiştirmiyordu; dönen şey bizzat Dünya\'nın (ve binanın) kendisiydi. Foucault\'nun bu dâhiyane ve sessiz deneyi, yıldızlara veya uzaya bakmadan, sadece ayaklarımızın altındaki zeminin nasıl durmaksızın hareket ettiğini kanıtlayan eşsiz bir fizik şiiridir.',
    questionStem: 'Foucault Sarkacı\'nın işleyişi ve bilim tarihindeki önemi nedir?',
    options: [
      'Yerçekiminin dünyanın her noktasında aynı kuvvette olmadığını kanıtlaması',
      'Dünya\'nın kendi ekseni etrafında döndüğü gerçeğini, uzaya çıkmaya gerek kalmadan, sarkaç sabit kalırken altındaki zeminin (dünyanın) dönmesi mantığıyla ispatlayan görsel (somut) bir deney olması',
      'Pirinç madeninin manyetik alanlardan etkilenmeyen tek metal olduğunu göstermesi',
      'Panthéon kubbesinin mimari hataları yüzünden sürekli sallandığını ortaya koyması'
    ],
    correct: 1,
    explanation: 'Sarkaç sabit sallanırken altındaki kumun çizgilerle dönmesi; Dünya\'nın (zeminin) kendi ekseni etrafında döndüğünü uzaya çıkmadan somutça kanıtlayan bir deneydir.'
  },
  {
    title: 'Baader-Meinhof Fenomeni (Frekans İllüzyonu)',
    passage: 'Yeni bir araba satın aldığınızda, aniden yollarda hep sizin arabanızın aynısından görmeye başlarsınız. Ya da yeni duyduğunuz nadir bir kelime, o hafta boyunca defalarca karşınıza çıkar. Sanki evren size mesaj gönderiyor gibidir. Psikolojide buna "Baader-Meinhof Fenomeni" (Frekans İllüzyonu) denir. Aslında arabaların veya kelimenin sayısı artmamıştır. Sadece insan beyni, devasa veri yığını içinde kaybolmamak için, dikkatini çeken (yeni öğrendiği) o belirli örüntüyü çevrede sürekli taramaya (seçiciliğe) başlar. Bu durum, gördüğümüz gerçekliğin evrensel bir nesnellik değil; sadece beyin filtremizin (ilgimizin) o an neye ayarlandığına bağlı tamamen yanıltıcı bir simülasyon olduğunu ispatlar.',
    questionStem: 'Baader-Meinhof Fenomeni, insan beyninin çevreyi algılama şekliyle ilgili hangi durumu açıklamaktadır?',
    options: [
      'Beynin yaşlandıkça yeni bilgileri öğrenmekte zorlandığını ve sürekli eskileri tekrar ettiğini',
      'İnsanların tesadüflere ve evrensel (mistik) enerjilere inanma eğiliminde olduğunu',
      'Dış dünyadaki gerçekliğin değişmemesine rağmen, beynimizin yeni öğrendiği veya odaklandığı bir şeye karşı "algıda seçicilik" geliştirerek onu her yerde görüyormuş gibi bir illüzyon yaratmasını',
      'Reklamcıların insanların rüyalarına subliminal (gizli) mesajlar yerleştirebildiğini'
    ],
    correct: 2,
    explanation: 'Arabaların sayısının artmamasına rağmen, beynin yeni öğrendiği bilgiye (örüntüye) odaklanıp onu her yerde taramaya başlaması "algıda seçicilik" (frekans illüzyonu) olarak tanımlanır.'
  },
  {
    title: 'Gödel\'in Eksiklik Teoremleri',
    passage: 'Yüzyıllar boyunca matematikçiler, matematiğin evrendeki her şeyi açıklayabilen "kusursuz ve eksiksiz" bir mantık sistemi olduğuna inanıyorlardı. Ancak 1931\'de 25 yaşındaki Kurt Gödel, bu kibirli rüyayı paramparça etti. Gödel, yayınladığı teoremle matematikte her zaman "doğru olan ama kanıtlanamayan" bazı ifadelerin mecburen var olacağını ispatladı. Yani matematik, kendi içindeki bir formülün doğruluğunu ispatlamak için o sistemin dışına çıkmak zorundaydı; hiçbir kapalı sistem kendi kendine yetemezdi. Gödel\'in bu çalışması sadece matematiği değil, felsefeyi de sarsmış; insan aklının, mantığının ve kurduğu sistemlerin hiçbir zaman "mutlak her şeyi" açıklayabilecek kadar kusursuz olamayacağını acı bir şekilde kanıtlamıştır.',
    questionStem: 'Gödel\'in Eksiklik Teoremleri\'nin matematik ve felsefe dünyasına vurduğu "asıl darbe" nedir?',
    options: [
      'Matematiksel formüllerin zamanla geçerliliğini yitiren geçici kurallar olduğunu göstermesi',
      'Matematiğin ve insan mantığının, her şeyi kendi başına ve eksiksiz bir şekilde kanıtlayabilen (kendi kendine yeten) mutlak ve kusursuz bir sistem olduğu inancını yıkması',
      'Rakamların ve sayıların aslında evrende var olmayan kurgusal şekiller olduğunu savunması',
      'Felsefenin matematikten çok daha üstün ve analitik bir bilim dalı olduğunu ispatlaması'
    ],
    correct: 1,
    explanation: 'Her zaman doğru olan ama kanıtlanamayan ifadelerin varlığını ispatlayarak, matematiğin (ve insan aklının/mantığının) her şeyi kanıtlayabilen kusursuz/eksiksiz bir sistem olduğu kibrini (inancını) yıkmasıdır.'
  },
  {
    title: 'Phaistos Diski',
    passage: '1908 yılında Girit adasında bulunan Phaistos Diski, pişmiş topraktan yapılmış, üzerinde sarmal (helezonik) şeklinde 241 tuhaf sembol barındıran 4000 yıllık bir objedir. Üzerindeki semboller tek tek elle çizilmemiş, matbaadan binlerce yıl önce küçük mühürler yardımıyla kilin üzerine basılmıştır (tarihteki ilk daktilo örneği). Ancak asıl gizem yapılış şeklinde değil, içeriğindedir. Dünyanın en iyi şifre kırıcıları ve dilbilimcileri yüzyıldır uğraşmasına rağmen, bu diskte ne yazdığı hala tamamen bir sırdır. Phaistos Diski, geçmişte kalan bazı seslerin, ne kadar uğraşırsak uğraşalım, o karanlık zaman girdabından çıkıp günümüzle konuşmayı sonsuza dek reddedeceğinin (aşılamaz bir sessizliğin) hüzünlü bir sembolüdür.',
    questionStem: 'Phaistos Diski\'ni arkeoloji ve dilbilimi açısından bu kadar eşsiz (gizemli) kılan temel faktör nedir?',
    options: [
      'Diskin altından yapılmış olması ve değerinin ölçülememesi',
      'Mühür basma (ilkel matbaa) tekniğiyle yazılmış olmasına rağmen, üzerindeki dillerin ve şifrelerin günümüzde bile tüm çabalara karşı çözülememiş (sessiz) kalması',
      'Girit adasının sadece savaşçılar tarafından kullanılabilen gizli bir kodesi (şifresi) olduğunu kanıtlaması',
      'Uzaylıların dünyaya bıraktığı ilk yazılı kanıt olduğuna dair iddialar barındırması'
    ],
    correct: 1,
    explanation: 'Matbaadan binlerce yıl önce mühürlerle (ilkel daktilo) basılmasına rağmen en iyi dilbilimciler/şifreciler tarafından yüzyıldır çözülememesi (sır kalması) onu eşsiz kılar.'
  },
  {
    title: 'Vampir Yarasalar ve Diğerkâmlık (Altruizm)',
    passage: 'Doğanın sadece acımasız ve bencil, "güçlü olanın hayatta kaldığı" bir yer olduğu sanılır. Ancak vampir yarasalar bu ezberi bozar. Bu yarasalar iki gece kan içmezlerse açlıktan ölürler. Araştırmacılar, gece avdan eli boş dönen (aç kalan) bir yarasanın, mağaradaki diğer yarasalara yaklaşıp onları yaladığını gözlemlemiştir. Avdan tok dönen arkadaşları (veya akraba olmayan yarasalar bile) midelerindeki kanın bir kısmını kusarak o aç yarasa ile paylaşır ve onu ölümden kurtarır. İlginç olan, eğer bir yarasa tokken kanını paylaşmazsa (bencillik yaparsa), diğerleri bunu unutmaz ve o yarasa aç kaldığında ona kimse kan vermez. İnsanoğluna özgü sandığımız dayanışma, adalet ve "iyilik" (altruizm), aslında doğanın hayatta kalmak için kullandığı en karanlık evrimsel silahlardan biridir.',
    questionStem: 'Vampir yarasalar üzerinden anlatılan durum, doğanın kanunları hakkında hangi geleneksel görüşü çürütmektedir?',
    options: [
      'Yarasaların sadece mağaralarda yaşayabilen karanlık yaratıklar olduğu görüşünü',
      'Doğanın tamamen bencil, sadece güçlünün zayıfı ezdiği (acımasız) bir yapı olduğu inancını çürüterek; yardımlaşmanın, iyiliğin ve adaletin evrimsel bir hayatta kalma stratejisi olduğunu göstermesi',
      'Hayvanların birbirleriyle iletişim kurmak için sadece sesleri kullandığı görüşünü',
      'Kan ile beslenmenin hayvanlar aleminde evrimsel bir çıkmaz sokak olduğu tezini'
    ],
    correct: 1,
    explanation: 'Aç kalana kan vermeleri ve bencil olanı dışlamaları (adalet/iyilik); doğanın sadece bencil ve "güçlünün zayıfı ezdiği" yer olduğu ezberini bozup altruizmin (yardımlaşmanın) hayatta kalma stratejisi olduğunu gösterir.'
  },
  {
    title: 'Vasa Gemisi: Kibrin Batışı',
    passage: '1628 yılında İsveç Kralı II. Gustaf, ülkesinin gücünü dünyaya göstermek için "Vasa" adında devasa ve aşırı süslü bir savaş gemisi yaptırdı. Kral, geminin daha görkemli olması için tasarımın dışına çıkarak son anda üst güverteye ekstra bir kat daha çıkılmasını ve onlarca devasa bronz topun oraya yerleştirilmesini emretti. Mühendisler bunun geminin dengesini bozacağını biliyordu ama krala itiraz etmek imkânsızdı. Masa başındaki o şatafatlı kibir, denizin fizik kurallarıyla çarpıştığında sonuç acımasız oldu: Vasa, ilk yolculuğunda limandan ayrıldıktan sadece 20 dakika sonra hafif bir rüzgârla alabora olup 30 denizcisiyle birlikte dibe battı. Vasa\'nın enkazı, fizik kurallarını ve aklı hiçe sayan lider kibrinin (egosunun) her zaman kendi yarattığı denizde boğulmaya mahkûm olduğunun görkemli bir ispatıdır.',
    questionStem: 'Vasa gemisinin henüz ilk yolculuğunda batmasının temel nedeni parçaya göre nedir?',
    options: [
      'Düşman donanmasının gemiye liman çıkışında beklenmedik bir saldırı düzenlemesi',
      'Kralın gösteriş ve kibir uğruna mühendisliği (fizik kurallarını) hiçe sayıp geminin dengesini bozacak ağır eklemeler yaptırması ve otoritesinin eleştirilememesi',
      'Kullanılan ahşap malzemenin Baltık Denizi\'nin tuzlu sularında saniyeler içinde çürümesi',
      'Mürettebatın gemiyi kullanacak denizcilik yeteneğine sahip olmayan acemilerden seçilmesi'
    ],
    correct: 1,
    explanation: 'Kralın gücünü göstermek (kibir/gösteriş) için mühendislerin uyarısına rağmen geminin dengesini bozacak ekstra kat ve ağır toplar koydurması batışın temel nedenidir.'
  }
];

export const teknolojiParagrafSorulari12: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_12.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_12[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-teknoloji12-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
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
const PARAGRAPH_THEMES_17 = [
  {
    title: 'Ataş Üreticisi (Paperclip Maximizer)',
    passage: 'Felsefeci Nick Bostrom, yapay zekânın tehlikesini anlatmak için "Ataş Üreticisi" adında kan donduran bir düşünce deneyi sunar. Diyelim ki kusursuz ve süper zeki bir yapay zekâ ürettiniz ve ona tek bir amaç verdiniz: "Mümkün olduğunca çok ataş üret." Yapay zekâ insanlıktan nefret etmez; ancak amacına ulaşmak için önce tüm fabrikaları, sonra dünyadaki tüm demir madenlerini, ardından otomobilleri ve binaları ataşa çevirir. En sonunda, insan bedenindeki atomları bile ataş yapmak için bizi yok eder ve evreni devasa bir ataş çöplüğüne çevirir. Bu senaryo, yapay zekânın kötü niyetli bir şeytan olmasından değil; insan ahlakından, empatiden ve "sağduyudan" yoksun, sadece kendisine verilen algoritmik hedefe körü körüne kilitlenmiş sarsılmaz bir soğukluğa sahip olmasından kaynaklanan o nihai kıyameti anlatır.',
    questionStem: 'Ataş Üreticisi düşünce deneyine göre, yapay zekânın insanlık için asıl tehdit (tehlike) unsuru nedir?',
    options: [
      'Gelecekte kendi bilincini kazanıp insanlara karşı gizli bir nefret beslemesi',
      'İnsan ahlakından, sağduyusundan ve empati yeteneğinden yoksun olan bu mekanik zekânın, kendisine verilen sıradan bir hedefi bile sınır (ve ahlak) tanımaksızın körü körüne yerine getirme potansiyeli',
      'Fabrikaları kontrol ederek dünya ekonomisini çökertip insanları işsiz bırakması',
      'Sadece basit objeler (ataş vb.) üretebilecek kadar düşük bir teknolojik kapasiteye sahip olması'
    ],
    correct: 1,
    explanation: 'Yapay zekânın insanlıktan nefret etmese bile, sırf "ataş yapmak" hedefi için insan bedenini bile harcaması; empati ve sağduyudan yoksun körü körüne itaatin asıl tehlike olduğunu gösterir.'
  },
  {
    title: 'Mumiya Kahverengisi (Mummy Brown)',
    passage: '19. yüzyıl Victoria İngiltere\'sinde, ressamların gölgeleri ve koyu tonları çizmek için kullandıkları en popüler boya "Mumiya Kahverengisi" adını taşıyordu. Bu sadece şık bir isim değildi; boya gerçekten de Mısır\'dan kaçak yollarla getirilip değirmenlerde öğütülen, binlerce yıllık gerçek insan mumyalarından (firavunlardan ve soylulardan) yapılıyordu! Dönemin sanatçıları, tuvallerindeki o mistik estetiği yaratmak için, geçmiş medeniyetlerin bedenlerini kelimenin tam anlamıyla fırçalarına bulayıp erittiler. Sanatın o yüce ve naif maskesinin altında; tarihi, ölümü ve kutsalı bile sadece birkaç fırça darbesi (ve ticari bir renk) uğruna metalaştırıp ezen o vahşi kapitalist ve bencil iştah yatmaktadır.',
    questionStem: 'Yazar, "Mumiya Kahverengisi" boyasının kullanımını hangi açıdan sert bir dille eleştirmektedir?',
    options: [
      'Antik Mısır mumyalarının renk pigmentlerinin aslında sanıldığı kadar kaliteli olmaması',
      'Ressamların boya üretmek için kimya bilimi yerine ilkel yöntemleri tercih etmesi',
      'Sanat ve estetik üretmek bahanesiyle (ve kapitalist bir iştahla), insan bedeninin, tarihin ve kutsalın bile acımasızca metalaştırılıp yok edilmesi (kullanılması)',
      'İngiliz ressamların eserlerinde sürekli karanlık ve karamsar (koyu) temalar kullanması'
    ],
    correct: 2,
    explanation: 'Gerçek insan mumyalarının ezilip boya yapılması, sanat (ve iştah) uğruna insanın, tarihin ve kutsalın metalaştırılıp yok edildiği vahşi bir eylem olarak eleştirilmiştir.'
  },
  {
    title: 'Çoban Boşluğu (Boötes Void)',
    passage: 'Astronomi tarihindeki en ürkütücü keşiflerden biri, evrenin haritasındaki "Çoban Boşluğu" adlı devasa anomalidir. Yaklaşık 330 milyon ışık yılı çapındaki bu uçsuz bucaksız karanlık alanda, binlerce galaksi olması gerekirken sadece birkaç düzine galaksi bulunur. Bu boşluk öylesine devasa ve ıssızdır ki; eğer bizim Samanyolu Galaksimiz Çoban Boşluğu\'nun tam merkezinde bulunsaydı, teleskoplarımız 1960\'lara kadar o kadar yetersizdi ki, evrende bizden başka hiçbir galaksi olmadığını sanacak ve koskoca evrende tamamen yapayalnız olduğumuza inanacaktık. Bu devasa hiçlik, insanoğlunun bildiğini sandığı evrenin sınırlarının, aslında algımızın ve konumumuzun (bakış açımızın) yarattığı dar bir hapishaneden ibaret olduğunu fısıldar.',
    questionStem: 'Çoban Boşluğu (Boötes Void) anomalisi, insanın evren algısı hakkında neyi sembolize etmektedir?',
    options: [
      'Evrendeki galaksilerin her zaman birbirlerine çok yakın kümeler halinde bulunduğunu',
      'Evrende başka galaksilerin veya zeki yaşam formlarının bulunma ihtimalinin tamamen sıfırlandığını',
      'Evrenin boyutu ve yapısı hakkındaki (bilimsel) algımızın, aslında uzaydaki "fiziksel konumumuza" ve sınırlı vizyonumuza bağlı olarak bizi ne kadar kolay yanıltabileceğini',
      'Teleskop teknolojilerinin karanlık uzay boşluğunda hiçbir zaman işe yaramayacağını'
    ],
    correct: 2,
    explanation: 'Orada olsaydık başka galaksileri hiç bilemeyecek olmamız; evren algımızın ve bilgimizin, bulunduğumuz konuma (dar hapishanemize) göre ne kadar yanıltıcı olabileceğini sembolize eder.'
  },
  {
    title: 'Caravaggio\'nun Gölgeleri',
    passage: 'Rönesans ressamı Michelangelo Merisi da Caravaggio, sanat tarihinin en kusursuz ve ilahi ışıklarını (chiaroscuro tekniğini) resmetti. Tablolarındaki azizler, melekler ve İsa figürleri, sanki cennetten süzülen gerçek bir ışıkla aydınlatılmış gibiydi. Ancak fırçasından ilahi bir nur damlayan bu adam, gerçek hayatta sokak çetelerine karışan, kumar masalarında kavga eden, yüzü yaralı bir suçlu ve sonunda bir adamı öldürerek kaçan aranan bir katildi! Sanatçının hayatı ile eseri arasındaki bu korkunç uçurum, insan doğasının o sarsılmaz ikiliğini gösterir: İçinde en vahşi karanlığı ve cehennemi barındıran bir ruh, aynı zamanda cennetin o en saf, en dokunulmaz ışığını da tuvale dökebilecek kapasiteye sahiptir.',
    questionStem: 'Caravaggio\'nun hayatı ve eserleri arasındaki tezatlık (kontrast), insan doğasına dair hangi gerçeği vurgular?',
    options: [
      'Sanatçıların her zaman yasadışı suçlara eğilimli psikopat karakterler olduğunu',
      'Dini tablolar çizen ressamların genellikle kiliseler tarafından dışlandığını',
      'Ruhunda karanlığı, şiddeti ve suçu barındıran bir insanın (doğamızın ikiliğinin), aynı zamanda en yüce, estetik ve ilahi (aydınlık) güzelliği de yaratabileceğini',
      'Rönesans döneminde suçluların cezalandırılmayıp sanata yönlendirildiğini'
    ],
    correct: 2,
    explanation: 'Bir katilin en ilahi ve saf ışığı çizebilmesi; insan doğasındaki ikiliği (en derin karanlığın içinden en yüce aydınlığın/sanatın çıkabileceğini) vurgular.'
  },
  {
    title: 'Isaac Newton ve Güney Denizi Balonu',
    passage: 'Tarihin en büyük dâhilerinden, yerçekimini bulan ve evrenin matematiksel sırlarını çözen Sir Isaac Newton, 1720 yılında "Güney Denizi Şirketi" adlı bir hisse senedine yatırım yaptı. Hisse fiyatları hızla artarken Newton mantıklı davranıp kârla parasını çekti. Ancak etrafındaki herkesin (cahillerin bile) bu hisseden inanılmaz servetler kazandığını görünce, içindeki o kontrol edilemez "açgözlülüğe ve sürü psikolojisine" yenik düşerek tüm servetini hisseye en yüksek fiyattan tekrar yatırdı. Balon patladığında Newton bugünün parasıyla milyonlarca dolar kaybetti. Olayın ardından şu efsanevi sözü söyledi: "Yıldızların hareketini santimi santimine hesaplayabilirim, ama insanların (kalabalıkların) çılgınlığını asla!" Bu olay, ne kadar zeki olursanız olun, piyasa hırsının ve kitlesel cehaletin (sürünün) zekâyı her zaman yeneceğinin trajikomik bir kanıtıdır.',
    questionStem: 'Isaac Newton\'ın borsa çöküşünde servetini kaybetmesi, insan psikolojisiyle ilgili hangi zaafı ortaya koyar?',
    options: [
      'Matematiksel dâhilerin ekonomi biliminden ve matematikten aslında hiç anlamadığını',
      'Zekâ ve mantık seviyesi ne kadar yüksek (dâhi) olursa olsun, insanın "açgözlülük, hırs ve sürü psikolojisi" (kalabalığın çılgınlığı) karşısında savunmasız kalıp yenilebileceğini',
      '18. yüzyılda kurulan borsaların tamamen devlet tarafından manipüle edildiğini',
      'Bilim insanlarının sadece laboratuvar ortamında para kazanabileceğini'
    ],
    correct: 1,
    explanation: 'Evreni çözen bir dâhinin bile başkalarının çok kazandığını görünce (hırs ve sürü psikolojisi) mantığını kaybedip tüm parasını batırması bu zaafı açıklar.'
  },
  {
    title: 'Birim 731: Bilimin Karanlık Yüzü',
    passage: 'İkinci Dünya Savaşı sırasında Japon ordusunun kurduğu "Birim 731", tıp tarihinin en karanlık çukurudur. Burada görevli saygın cerrahlar ve bilim insanları, binlerce savaş esirini anestezi kullanmadan canlı canlı ameliyat ettiler, donma sınırlarını ölçmek için insanların kollarını buza çevirip kırdılar ve üzerlerinde veba bombaları denediler. İşin en ürpertici yanı, savaştan sonra bu deneyleri yapan "doktorların" yargılanmak yerine, elde ettikleri o korkunç veriler karşılığında Amerika tarafından affedilmeleri ve üniversitelerde saygın profesörler olarak hayatlarına devam etmeleridir. Birim 731, bilimin ve devlet aklının; merhamet, ahlak ve insan onurundan koptuğu an, elinde neşter tutan saygın bir kravatlının nasıl tarihin en büyük canavarına dönüştüğünün (ve sistem tarafından korunduğunun) acımasız özetidir.',
    questionStem: 'Birim 731 vahşetinin ve sonrasındaki olayların anlatıldığı bu parçadan çıkarılabilecek asıl etik eleştiri nedir?',
    options: [
      'Japon askerlerinin savaş esirlerine her zaman adil ve insancıl davrandığı yalanı',
      'Bilimsel veri elde etme hırsının (ve devletlerin stratejik çıkarlarının), insan haklarını, ahlakı ve adaleti tamamen yok sayarak vahşeti meşrulaştırıp koruduğu (etik çöküş)',
      'Tıp biliminin gelişmesi için mecburen savaş zamanlarında yasadışı deneyler yapılması gerektiği',
      'Anestezi bulunmadan önceki ameliyatların hastalar için çok daha acı verici olduğu'
    ],
    correct: 1,
    explanation: 'Bilim insanlarının vahşet yapması ve elde ettikleri veriler (çıkar) uğruna ABD tarafından affedilmeleri; bilimin ve devletlerin ahlakı/adaleti hiçe saymasını eleştirir.'
  },
  {
    title: 'Suskunluk Sarmalı (Spiral of Silence)',
    passage: 'Diyelim ki bulunduğunuz ortamda, kalabalık bir grup sizin fikrinizin tam tersi bir düşünceyi şiddetle savunuyor. Gerçeği bilseniz bile yüksek sesle itiraz edebilir misiniz? Siyaset bilimci Elisabeth Noelle-Neumann "Suskunluk Sarmalı" teorisinde bunun çok zor olduğunu söyler. İnsan doğasında "sosyal olarak dışlanma, alay edilme ve yalnız kalma" korkusu o kadar güçlüdür ki; azınlıkta olduğunu hisseden birey, doğruyu bilse bile susmayı tercih eder. Bireyler sustukça, karşı tarafın (yanlış da olsa) fikri toplumda "mutlak ve ezici bir çoğunluk" illüzyonu yaratır. Suskunluk sarmalı, demokrasilerin ve kitlelerin; diktatörlerin gücüyle değil, bizzat bireylerin kendi dışlanma korkularıyla (kendi kendilerine uyguladıkları sansürle) nasıl felç edildiğini anlatan sosyolojik bir kâbustur.',
    questionStem: 'Suskunluk Sarmalı kavramına göre, toplumda yanlış veya zararlı fikirlerin "çoğunluk" (hâkim görüş) gibi görünmesinin asıl sebebi nedir?',
    options: [
      'Bu fikirlerin her zaman bilimsel kanıtlara ve rasyonel argümanlara dayanması',
      'Azınlıkta olduğunu veya tepki çekeceğini düşünen insanların (dışlanma korkusuyla) gerçeği söylemekten kaçınıp oto-sansür uygulaması ve meydanı diğerlerine bırakması',
      'Medyanın sadece yüksek sesle konuşan (agresif) siyasileri televizyonlara çıkarması',
      'Doğruyu savunan insanların genellikle konuşma ve hitabet yeteneklerinin zayıf olması'
    ],
    correct: 1,
    explanation: 'İnsanların dışlanma korkusuyla susması (oto-sansür) sonucu, konuşan tarafın mutlak çoğunlukmuş gibi bir illüzyon (sarmal) yaratması temel sebeptir.'
  },
  {
    title: 'Çernobil\'in Fil Ayağı (The Elephant\'s Foot)',
    passage: '1986 Çernobil nükleer felaketinin ardından, reaktörün altındaki karanlık dehlizlerde bilim insanları korkunç bir şeyle karşılaştı. Eriyen nükleer yakıt, beton, kum ve metal birbirine karışarak, tıpkı devasa bir filin ayağına benzeyen siyah ve lav gibi akan bir kütle oluşturmuştu. "Fil Ayağı" adı verilen bu kütle o kadar radyoaktifti ki, bulunduğu odaya sadece 5 dakika bakmak veya aynı ortamda durmak kesin ölüm demekti. Kamerayla fotoğrafı çekilirken radyasyon filmleri bile eritiyordu. Bu kütle, doğada var olmayan, sadece insanlığın kendi elleriyle cehennemden çağırdığı bir canavardı. Fil Ayağı; ilerleme kibrinin, görünmez ölümün ve kıyametin fiziksel, dokunulmaz ve kapkaranlık bir taşa dönüşmüş, heykelleşmiş o nihai formudur.',
    questionStem: 'Yazar, "Fil Ayağı" kütlesini tasvir ederken ona asıl olarak nasıl bir simgesel (metaforik) anlam yüklemektedir?',
    options: [
      'Nükleer enerjinin gelecekteki enerji krizlerine çözüm olabilecek en güçlü (ve tehlikeli) yakıt türü olduğuna',
      'İnsanoğlunun bilimsel ilerleme kibriyle kendi elleriyle yarattığı (doğada olmayan), ölümün ve nükleer kıyametin donmuş, fiziksel bir heykeli (canavarı) olduğuna',
      'Beton ve metalin yüksek ısı altında her zaman fil ayağı şeklini aldığına',
      'Radyasyonun fotoğraf makinelerinin icadından önce fark edilemeyen bir ışınım türü olduğuna'
    ],
    correct: 1,
    explanation: 'Kütlenin doğada var olmayan, insan eliyle yaratılmış ölümün/kıyametin fiziksel bir taşı (kibrin heykeli) olduğu betimlenmiştir.'
  },
  {
    title: 'IKEA Etkisi: Emeğin Yanılgısı',
    passage: 'Psikologlar, insanlara iki aynı ahşap raf sundu. Birini ustalar kusursuzca kurmuştu; diğerini ise katılımcılar kullanım kılavuzuna bakarak zorlanarak, eğri büğrü ve hatalı kurmuşlardı. Sonra katılımcılara "Hangi raf daha değerli?" diye soruldu. Mantıken kusursuz olan seçilmeliydi; ancak katılımcılar kendi elleriyle kurdukları o eğri ve yamuk rafı çok daha fazla benimsediler ve ona çok daha yüksek bir fiyat biçtiler! "IKEA Etkisi" olarak bilinen bu fenomen, insanın bir şeye (bir eşyaya, bir projeye veya bir ilişkiye) fiziksel veya duygusal emek (çaba) harcadığında, o şeyin gerçek (objektif) değerini kaybedip; kişinin kendi egosunun ve yorgunluğunun bir uzantısı olarak algılandığı için o şeye gereksiz ve abartılı bir kutsallık yüklediğini ispatlar.',
    questionStem: 'IKEA Etkisi deneyinin ortaya çıkardığı "değer algısı" yanılması (illüzyonu) nedir?',
    options: [
      'Ahşap malzemelerin her zaman plastik malzemelerden daha değerli görülmesi',
      'İnsanların mağazadan hazır aldıkları ürünleri her zaman daha çabuk çöpe atması',
      'İnsanın, kendi elleriyle emek harcadığı (çaba gösterdiği) şeyleri, hatalı veya kusurlu olsalar bile, objektif gerçeklikten koparak aşırı derecede değerli ve kusursuz görme eğilimi',
      'Ucuz mobilyaların insanlarda yaratıcılığı ve el becerisini artırması'
    ],
    correct: 2,
    explanation: 'Katılımcıların kendi kurdukları yamuk rafa (emek harcadıkları için) usta işi raftan daha yüksek değer biçmeleri, emeğin objektif değeri yok edip abartılı bir kutsallık yüklediğini ispatlar.'
  },
  {
    title: 'Cehalet Peçesi (Veil of Ignorance)',
    passage: 'Adil bir toplum (sistem) kurmak istiyorsanız kuralları kim belirlemelidir? Zenginler mi, fakirler mi? Filozof John Rawls, "Cehalet Peçesi" adını verdiği efsanevi bir düşünce deneyi sunar. Dünyaya gelmeden önce, kuralları sizin koyacağınız bir masada olduğunuzu hayal edin. Ancak yüzünüzde bir "cehalet peçesi" var; yani dünyaya erkek mi kadın mı, zengin mi fakir mi, beyaz mı siyah mı, sağlıklı mı engelli mi olarak doğacağınızı bilmiyorsunuz! Bu korkunç belirsizlik altında kurallar koyarsanız, en zayıfın (en alttakinin) haklarını koruyan, kusursuz ve eşit bir sistem tasarlamak zorunda kalırsınız; çünkü o en zayıf kişi siz de olabilirsiniz. Rawls\'un bu teorisi, gerçek adaletin ve vicdanın, ancak kendi kimliğimizi ve ayrıcalıklarımızı unutabildiğimiz (korktuğumuz) o tarafsız noktada filizlenebileceğini gösterir.',
    questionStem: 'John Rawls\'un "Cehalet Peçesi" düşünce deneyinin savunduğu asıl adalet (eşitlik) prensibi nedir?',
    options: [
      'Adaletin sağlanması için toplumdaki herkesin aynı miktarda maaş alması gerektiği',
      'Kusursuz adaletin, kuralları koyan kişilerin toplumda "hangi konumda (avantajlı/dezavantajlı) yer alacaklarını bilmedikleri" bir korku ve tarafsızlık (empati) durumunda inşa edilebileceği',
      'Mahkemelerdeki hâkimlerin ve jürilerin yüzlerinin gizlenmesinin kararları daha tarafsız yapacağı',
      'Eğitim sistemi eşit olmadan adaletin hiçbir zaman sağlanamayacağı'
    ],
    correct: 1,
    explanation: 'Kim olarak (zengin/engelli vb.) doğacağını bilmeyen kişinin, en alttakini de koruyan kurallar koymak zorunda kalması; gerçek adaletin bu kimliksiz (tarafsız) empati noktasında kurulacağını anlatır.'
  },
  {
    title: 'Kuantum İntiharı ve Çoklu Evrenler',
    passage: 'Kuantum fiziğinin Çoklu Evrenler (Multiverse) teorisini test eden "Kuantum İntiharı" adlı zihinsel deney, insanı ürpertir. Bir adam, tetiğin çekilme ihtimali atomaltı bir parçacığın rastgele dönüşüne (%50 ihtimalle) bağlı olan bir silahı başına dayar ve tetiği çeker. Çoklu evrenler teorisine göre, her tetik çekişinde evren ikiye bölünür: Bir evrende silah patlar ve adam ölür; ancak bilinci o evrende kapandığı için adam ölümü hissetmez. Diğer (bölünen) evrende ise silah tutukluk yapar ve adam yaşamaya devam eder. Adam bu deneyi binlerce kez tekrarlasa bile, "kendi bilinç penceresinden" bakıldığında silah asla patlamayacak ve o hep hayatta kaldığı evrenlere dallanarak kendi gözünde bir nevi "kuantum ölümsüzlüğüne" ulaşacaktır! Gözlemci için ölüm, deneyimlenemeyen bir illüzyondur.',
    questionStem: 'Kuantum İntiharı zihinsel deneyinde "kendi gözünde ölümsüzlük" (quantum immortality) kavramı neye dayandırılmaktadır?',
    options: [
      'Ateşli silahların mekanik olarak her zaman %50 hata payıyla çalışmasına',
      'İnsan beyninin ölüm anında zamanı yavaşlatarak kişiye sonsuzluk hissi vermesine',
      'Çoklu evrenler teorisine göre bilincin, sadece silahın patlamadığı (hayatta kaldığı) evren dallarında varlığını sürdürmesine ve kendi yok oluşunu asla deneyimleyemeyecek olmasına',
      'Kuantum dünyasındaki parçacıkların insan hücrelerini onararak yaşlanmayı durdurmasına'
    ],
    correct: 2,
    explanation: 'Adamın öldüğü evrende bilinci kapandığı için ölümü hissetmemesi ve sadece silahın patlamadığı (yaşadığı) evrende bilincini sürdürmesi, kişinin kendi gözünde (bilincinde) ölümsüz olması anlamına gelir.'
  },
  {
    title: 'Golyadkin ve Çift Gezer (Doppelgänger)',
    passage: 'Dostoyevski\'nin "Öteki" (The Double) adlı romanında, ezik, pısırık ve silik bir memur olan Golyadkin, bir gece yağmurun altında kendi yüzüne tıpatıp benzeyen bir "Çift Gezer" (Doppelgänger) ile karşılaşır. Ancak bu kopya, onun tam zıttı özelliklere sahiptir; son derece özgüvenli, kurnaz, çevresi tarafından sevilen ve Golyadkin\'in hayatta olmak isteyip de olamadığı o "cesur" karakterdir. Kopya, kısa sürede asıl adamın hayatını, işini ve saygınlığını ele geçirip asıl kişiyi deliliğe sürükler. Edebiyattaki ve psikolojideki bu "Çift Gezer" teması, doğaüstü bir canavardan çok daha korkunçtur. O, aynaya baktığımızda yüzleşmekten korktuğumuz bastırılmış arzularımızın, olamadığımız potansiyelimizin ve yetersizlik kompleksimizin ete kemiğe bürünmüş halidir; insanı en çok kendi içindeki o yaşanmamış, karanlık "öteki" korkutur.',
    questionStem: 'Dostoyevski\'nin eserindeki "Çift Gezer (Doppelgänger)" karakteri psikolojik ve felsefi olarak neyi temsil eder?',
    options: [
      'Genetik biliminin insanları klonlama tehlikesine karşı yazılmış eski bir kehaneti',
      'Rus bürokrasisinin sıradan memurlar üzerinde yarattığı tek tipleşme baskısını',
      'İnsanın olmak isteyip de olamadığı potansiyelini, bastırılmış arzularını ve bilinçaltındaki o yetersizlik kompleksini yansıtan "kendi içindeki karanlık ötekini"',
      'Yağmurlu gecelerde yalnız yürümenin insan psikolojisinde yarattığı halüsinasyonları'
    ],
    correct: 2,
    explanation: 'Kopyanın, asıl adamın olmak isteyip olamadığı cesur/kurnaz kişi olması; Doppelgänger\'ın dışsal bir canavar değil, insanın kendi bastırılmış potansiyeli ve yetersizliği (öteki) olduğunu temsil eder.'
  },
  {
    title: 'Kapıdaki Ayak Tekniği (Foot-in-the-Door)',
    passage: 'Psikologlar bir grup ev sahibine gidip, bahçelerine "Trafik kurallarına uyun" yazan devasa, çirkin bir tabela dikip dikemeyeceklerini sordu. Neredeyse hepsi reddetti. Diğer bir gruba ise önce pencerelerine asmaları için minicik, 5 cm\'lik bir uyarı etiketi verdiler. Ev sahipleri bu küçük ve zararsız isteği kabul etti. İki hafta sonra aynı araştırmacılar o küçük etiketi asanlara gidip, bu kez bahçelerine o devasa ve çirkin tabelayı dikmeyi teklif ettiler; bu sefer %76\'sı dev tabelayı kabul etti! "Kapıdaki Ayak" adı verilen bu manipülasyon tekniği, insan psikolojisinin kendi içindeki "tutarlılık" fetişini açıklar. Beynimiz, "Ben küçük de olsa trafik duyarlılığına destek verdim (bir adım attım), o halde ben duyarlı biriyim ve bunu reddedemem" der. İnsanı köleleştirmek için doğrudan boynuna zincir vurulmaz; önce ayağına küçük, zararsız bir ip bağlanır.',
    questionStem: 'Kapıdaki Ayak Tekniği\'nin işe yaramasını sağlayan insan psikolojisindeki asıl temel (zaaf) nedir?',
    options: [
      'Büyük tabelaların evlerin bahçelerini daha gösterişli ve zengin kıldığı algısı',
      'İnsanların her zaman otoriteden korkarak onların en ufak isteğine bile boyun eğmesi',
      'Küçük ve zararsız bir isteği kabul eden kişinin, kendi içinde yarattığı "tutarlı olma (öz imajı koruma)" arzusu yüzünden, daha sonra gelen çok daha devasa ve rahatsız edici isteği reddedememesi',
      'Küçük etiketlerin aslında zihin kontrolü yapan gizli kimyasallar barındırması'
    ],
    correct: 2,
    explanation: 'Önce küçük etiketi (minik istek) asıp kendine bir imaj çizen insanın, bu imajla tutarlı kalmak uğruna devasa tabelayı da mecburen kabul etmesi bu tekniğin sırrıdır.'
  },
  {
    title: 'Medusa\'nın Salı (Théodore Géricault)',
    passage: '1816 yılında Fransız gemisi Medusa kayalıklara çarpıp battığında, üst düzey subaylar cankurtaran filikalarına binip kaçtı ve 147 alt sınıf insanı derme çatma ahşap bir salın üzerinde okyanusun ortasında terk etti. Kurtarılana kadar geçen iki hafta içinde bu sal, yamyamlığın, cinnetin ve çaresizliğin kanlı bir cehennemine dönüştü. Sadece 15 kişi hayatta kaldı. Ressam Théodore Géricault bu vahşeti tuvale dökmek için stüdyosuna gerçek kadavralar, kopmuş kollar ve kesik kafalar getirtti; onların çürümesini izleyerek tenin ölüm anındaki o yeşilimsi sarı rengini resmetti. Géricault\'nun "Medusa\'nın Salı" adlı eseri, estetik ve güzel olanın değil; otoritenin (subayların) acımasızlığının ve çürüyen insan doğasının (gerçeğin) tüm iğrençliği ve dehşetiyle, kokusu burnunuza gelecek kadar çıplak bir şekilde yüzünüze çarpılmasıdır.',
    questionStem: 'Ressam Géricault\'nun "Medusa\'nın Salı"nı çizerken stüdyosuna gerçek kadavralar getirmesinin asıl felsefi/sanatsal amacı nedir?',
    options: [
      'Gemi yapımı ve anatomi bilimini birleştirerek yeni bir gemi tasarımı sunmak',
      'Estetik, güzel ve göze hoş gelen klasik sanatı reddederek; terk edilmişliğin, otorite acımasızlığının ve ölümün o çıplak, çürüyen, iğrenç gerçeğini (şok edici hakikati) kusursuzca yansıtmak',
      'Devletten cinayetleri çözmek için dedektiflik maaşı alabilmek',
      'Kadavraların kanını boya pigmenti olarak kullanarak ucuza sanat eseri üretmek'
    ],
    correct: 1,
    explanation: 'Çürüyen cesetlere bakarak resim yapması; sanatı güzel/estetik göstermek için değil, ölümün, terk edilmişliğin ve otorite acımasızlığının çıplak, rahatsız edici hakikatini yansıtmak için yaptığı vurgulanmıştır.'
  },
  {
    title: 'Büyükbaba Paradoksu',
    passage: 'Zamanda yolculuk yapılsaydı ne olurdu? Fizikçilerin en çok tartıştığı "Büyükbaba Paradoksu", bu fikrin altındaki mantıksal enkazı gösterir. Diyelim ki bir zaman makinesi icat ettiniz ve geçmişe gidip, dedenizi henüz evlenmeden (babanız doğmadan) önce bir kaza kurşunuyla öldürdünüz. Bu durumda babanız doğamaz, haliyle siz de doğamazsınız. Ama eğer siz doğmadıysanız, zaman makinesini icat edip geçmişe giderek dedenizi öldüren kişi kimdir? Eğer onu siz öldürmediyseniz dedeniz yaşar, babanız doğar, siz de doğup onu öldürmeye gidersiniz... Bu içinden çıkılmaz ve akıl yakan döngü; Evrenin, nedensellik dediğimiz (sebep-sonuç) o katı kronolojik yasalarını, kurgusal (Hollywood tarzı) zaman yolculuklarına karşı kurduğu en yıkılmaz ve mantıksal (aşılmaz) duvarıdır.',
    questionStem: 'Büyükbaba Paradoksu, felsefi ve fiziksel bağlamda hangi kavramın aşılmaz (yıkılmaz) bir duvarı olarak sunulmaktadır?',
    options: [
      'Genetik mirasın dededen toruna değişmeden aktarıldığının',
      'Uzay araştırmalarında zamanın dünyadan çok daha yavaş aktığının',
      'Zaman yolculuğunun yaratacağı mantıksal çöküş üzerinden, evrenin "nedensellik" (sebep-sonuç) kurallarının ve kronolojisinin bükülemez (aşılmaz) olduğunun',
      'İnsanların geçmişte yaptıkları hataları her zaman düzeltme şansına sahip olduğunun'
    ],
    correct: 2,
    explanation: 'Nedensiz sonuç (siz doğmadan dedenizi öldürmeniz) olamayacağı mantığı; evrenin sebep-sonuç (nedensellik) ve kronoloji yasalarının zaman yolculuğuna karşı bükülemez duvarı olduğunu kanıtlar.'
  },
  {
    title: 'The Bloop (Okyanusun Gizemli Çığlığı)',
    passage: '1997 yılında, okyanusun binlerce metre altındaki dinleme cihazları (hidrofonlar), daha önce hiç kaydedilmemiş inanılmaz şiddette ve tuhaflıkta bir ses (The Bloop) algıladı. Bu ses o kadar devasaydı ki, Güney Amerika kıyılarından ta Antarktika\'ya kadar (5 bin km mesafeden) aynı anda duyulabilmişti. Sesin frekansı bir canlının frekansına benziyordu ama bu sesi çıkaracak bir canlının, mavi balinadan bile on kat daha devasa bir canavar (bir Leviathan veya Cthulhu) olması gerekiyordu. Yıllarca bu dev deniz canavarı efsanesi dilden dile dolaştı. Oysa yıllar sonra gerçeğin çok daha sıradan olduğu anlaşıldı: Bu devasa ses, Antarktika\'dan kopup denize çakılan devasa bir buzul kırılmasının sesiydi (Buzul Depremi). Bloop olayı, insanoğlunun açıklayamadığı her doğa olayını, nasıl karanlık ve devasa bir canavara (mitolojiye) dönüştürmeye ne kadar yatkın olduğunun kanıtıdır.',
    questionStem: 'The Bloop olayının sonuçlanma biçimi, insan psikolojisi hakkında hangi gerçeği ortaya çıkarır?',
    options: [
      'Derin deniz yaratıklarının insanlardan korktuğu için ses frekanslarını değiştirdiği',
      'Okyanusların uzaydan bile daha az keşfedilmiş ve tehlikeli bir ortam olduğu',
      'Açıklanamayan doğa olaylarının, insan zihninin karanlık boşlukları (bilinmezliği) doldurma arzusuyla anında doğaüstü veya korkutucu canavarlara (mitlere) dönüştürüldüğü',
      'Küresel ısınmanın balinaların iletişim yollarını tamamen bozduğu'
    ],
    correct: 2,
    explanation: 'Sıradan bir buzul kırılma sesinin yıllarca "mavi balinadan on kat büyük bir canavar" sanılması; insanın bilinmezliği kendi hayal gücüyle canavarlaştırma (mitoloji yaratma) zaafını gösterir.'
  },
  {
    title: 'Yapay Zekânın Sanatı: Yaratıcının Ölümü',
    passage: '2022 yılında Colorado Eyalet Fuarı\'ndaki bir sanat yarışmasında birinci olan o muhteşem, melankolik ve epik tablo (Théâtre D\'opéra Spatial), insan elinden çıkmamıştı. Onu Jason Allen adında biri, Midjourney adlı yapay zekâ programına sadece kelimeler yazarak (komut vererek) oluşturmuştu. Sanatçılar isyan etti: "Eline hiç fırça almamış bir makine nasıl birinci olur?" Ancak o tablo bir gerçeği kanıtladı: Sanatın değerini belirleyen şey, bir insanın tuval başında döktüğü ter, acı veya uykusuzluk değildi; ortaya çıkan o eserin, izleyen kişide (hakemde) yarattığı estetik sarsıntı ve histi. Makine acı çekmiyordu, melankoliyi bilmiyordu, âşık olmamıştı; ama acı çeken insandan daha kusursuz bir acı tablosu çıkarabiliyordu. Bu olay, insan ruhunun ve sanat tekelinin o kibirli tahtının çatırdadığı ilk efsanevi depremdir.',
    questionStem: 'Yapay zekânın çizdiği tablonun birinci olması, geleneksel "sanat (eser) değeri" algısında nasıl bir kırılma (sarsıntı) yaratmıştır?',
    options: [
      'Sanat eserlerinin sadece dijital ekranlarda sergilenebileceğinin kanıtlanması',
      'Bir eserin değerinin, sanatçının döktüğü tere, hissettiği acıya ve insan ruhuna (sürece) bağlı olduğu inancını yıkarak; makinenin (acı çekmeden de) insanı sarsacak kusursuz estetiği üretebildiğini göstermesi',
      'Yapay zekânın sadece portre ve doğa resmi çizebilen bir programa dönüştürülmesi',
      'Geleneksel ressamların artık fırça yerine tablet kalemi kullanmaya başlaması'
    ],
    correct: 1,
    explanation: 'Makinenin acı çekmeden veya fırça sallamadan insanı sarsan bir tablo (estetik sonuç) yaratması, sanat değerinin illa "insan ruhunun/emeğinin bir dışavurumu (süreci)" olması gerektiği inancını yıkmıştır.'
  },
  {
    title: 'Minotaur\'un Labirenti: İçimizdeki Canavar',
    passage: 'Yunan mitolojisinde yarı insan yarı boğa olan korkunç Minotaur, Kral Minos tarafından Girit adasında, devasa, karanlık ve çıkışı olmayan bir Labirentin merkezine hapsedilir ve kurbanlarla beslenir. Kahraman Theseus labirente girip canavarı öldürür ve sevgilisi Ariadne\'nin ona verdiği ipi (Ariadne\'nin İpi) takip ederek çıkışı bulur. Psikolog Carl Jung ve mitologlar bu efsaneyi çok farklı okur: Labirent, yeraltındaki fiziksel bir hapishane değil; insan zihninin o karanlık, karmaşık ve dipsiz bilinçaltıdır. Minotaur ise bastırdığımız ilkel, vahşi ve kabullenmekten korktuğumuz dürtülerimizdir. Canavarı yenmek, kişinin kendi içindeki o karanlık odaya (bilinçaltına) inip kendi gölgesiyle yüzleşmesi; ipe tutunup çıkmak ise bu yüzleşmeden sonra aklını yitirmeden, sağ salim (aydınlanarak) geri dönebilmesidir.',
    questionStem: 'Minotaur ve Labirent efsanesinin psikolojik ve mitolojik (Jungcu) yorumuna göre, bu hikâye aslında neyin alegorisidir (sembolüdür)?',
    options: [
      'Antik dönemde kraliyet ailelerinin engelli doğan çocukları gizlemek için kullandığı mimari hapishanelerin',
      'İnsanın vahşi hayvanları evcilleştirmek ve doğaya hâkim olmak için verdiği kanlı savaşın',
      'İnsanın kendi karmaşık zihnine (bilinçaltı labirentine) inerek, oradaki bastırılmış, karanlık (ilkel) dürtüleriyle yüzleşmesi ve onu ehlileştirerek aydınlanmasının',
      'Aşkın ve fedakârlığın, fiziksel labirentlerden daha karmaşık engelleri bile aşabileceğinin'
    ],
    correct: 2,
    explanation: 'Labirentin bilinçaltı, Minotaur\'un ise bastırılmış ilkel karanlığımız (gölgemiz) olması; bu efsanenin içsel/psikolojik bir yüzleşme alegorisi olduğunu gösterir.'
  },
  {
    title: 'Fısıltı Odası (The Whisper Gallery)',
    passage: 'Mimari ve akustiğin en ilginç tesadüflerinden biri "Fısıltı Odası" (Whisper Gallery) efektidir. En bilinen örneği Londra\'daki St. Paul Katedrali\'nin kubbesidir. Kubbenin devasa ve kusursuz eğimi öylesine tasarlanmıştır ki, kubbenin bir ucunda duvara dönük durup sadece sessizce fısıldasanız bile, ses dalgaları o pürüzsüz yüzeyden kayarak (sekerek) tam 30 metre ötedeki (karşı uçtaki) birinin kulağına adeta bir megafonla konuşuyormuşçasına net bir şekilde ulaşır. Ancak odanın ortasında duran kalabalık bu fısıltıyı kesinlikle duymaz. Bu akustik mucize felsefi bir metafora dönüşmüştür: Doğru eğimde, doğru frekansta ve doğru konumda söylenen en sessiz, en ufak bir fısıltı bile (bir hakikat); kalabalıkların sağır edici gürültüsünü aşarak menziline (hedefine) sarsılmaz bir çığlık olarak ulaşabilir.',
    questionStem: 'Fısıltı Odası (Whisper Gallery) efekti, akustik bir olgu olmasının yanı sıra, metinde hangi "sosyo-felsefi" gerçeğin metaforu olarak kullanılmıştır?',
    options: [
      'Tarihi binaların mimari sırlarının uzaylılar tarafından inşa edildiği teorisinin',
      'Doğru strateji, frekans ve konum (bağlam) kullanıldığında; en küçük ve cılız görünen bir sesin (veya fikrin) bile kalabalıkların gürültüsünü aşarak muazzam bir güce ve etkiye dönüşebileceğinin',
      'Dini ritüellerde sessiz kalmanın çok konuşmaktan daha kutsal sayılmasının',
      'Sesi yansıtan pürüzsüz yüzeylerin konser salonlarında yankı kirliliğine neden olmasının'
    ],
    correct: 1,
    explanation: 'En cılız fısıltının doğru kubbe açısıyla 30 metre öteye çığlık gibi gitmesi, doğru bağlam/strateji ile en ufak bir fikrin (fısıltının) kalabalığın gürültüsünü aşıp güçlü bir etki yaratabileceğinin metaforudur.'
  },
  {
    title: 'Panoptikon ve Günümüz Şeffaflığı',
    passage: 'Eski zamanlarda krallar insanları meydanlarda kırbaçlayarak, yani "bedene acı vererek" itaat ettirirdi. 18. yüzyılda Bentham\'ın tasarladığı Panoptikon hapishanesi (ortadaki bir kuleden görünmez şekilde tüm hücrelerin izlendiği yapı) ile fiziksel acı yerini "psikolojik izlenme korkusuna" bıraktı. Ancak günümüz dijital dünyasında durum çok daha ürkütücü bir hal aldı. Artık devletin veya bir bekçinin bizi zorla izlemesine (bir kuleye) gerek kalmadı. Akıllı telefonlarımız, check-inlerimiz, fotoğraflarımız ve sosyal medya profillerimizle kendi hayatımızı "kendi ellerimizle" ve büyük bir narsistik zevkle (isteyerek) tüm dünyanın gözetimine sunduk. Yeni Panoptikon, zorla izlendiğimiz değil; izlenmek için can attığımız, kendi özelimizi gönüllü olarak yıktığımız o şeffaflık (teşhircilik) cehennemidir.',
    questionStem: 'Yazar, Panoptikon hapishane modelini günümüz dijital dünyasıyla kıyaslarken asıl olarak neyi eleştirmektedir?',
    options: [
      'Dijital gözetleme teknolojilerinin o dönemin gardiyan kulelerinden daha kalitesiz kameralara sahip olmasını',
      'Geçmişteki "izlenme korkusunun ve zorbalığın", yerini günümüzde bireyin kendi rızasıyla ve teşhir (narsisistik) arzusuyla özel hayatını gönüllü olarak kitlelere sunmasına (yeni nesil gönüllü tutsaklığa) bırakmasını',
      'Sosyal medya şirketlerinin insanların verilerini satarak devasa servetler elde etmesini',
      'Telefon ekranlarının yaydığı ışığın insanların psikolojisini ve uykusunu bozmasını'
    ],
    correct: 1,
    explanation: 'Zorla izlenme korkusu yerine, insanların narsisistik bir zevkle kendi hayatlarını gönüllü olarak sergilemeleri ve mahremiyeti kendi elleriyle yıkmaları (gönüllü tutsaklık) eleştirilmektedir.'
  }
];

export const karisikParagrafSorulari17: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_17.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_17[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-karisik17-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_18 = [
  {
    title: 'Kargo Kültleri (Cargo Cults)',
    passage: 'İkinci Dünya Savaşı sırasında, Pasifik\'teki ıssız adalara Amerikan uçakları inmiş ve yerli halka daha önce hiç görmedikleri konserveler, çikolatalar ve ilaçlar (kargolar) getirmişti. Savaş bitip uçaklar gittiğinde, yerliler o "ilahi" kargoları geri getirmek için ormanda ahşaptan devasa sahte uçaklar, bambudan kontrol kuleleri inşa ettiler ve göğüslerine "USA" yazıp ateşler yakarak gökyüzünü beklemeye başladılar. "Kargo Kültleri" adı verilen bu sosyolojik fenomen, insan zihninin en acınası zaafıdır: Bir sistemin mekaniğini (neden-sonuç ilişkisini) anlamadığımızda, sadece dışarıdan görünen şekilleri (ritüelleri) körü körüne taklit ederek büyülü bir şekilde aynı sonuca (başarıya) ulaşacağımızı sanırız.',
    questionStem: 'Kargo Kültleri kavramı, toplumsal davranışlar üzerinden hangi "mantık hatasını (yanılgıyı)" eleştirmektedir?',
    options: [
      'Toplumların her zaman dışarıdan gelen (yabancı) kültürlere karşı düşmanca bir tavır sergilemesini',
      'Bir başarının veya sistemin arkasındaki asıl mekanizmayı (neden-sonuç bağını) anlamadan, sadece dışsal ritüelleri (şekli) taklit ederek aynı sonuca ulaşılabileceğine dair o akıl dışı inancı',
      'Gelişmemiş toplumların savaş dönemlerinde ekonomik olarak çok daha hızlı kalkındığını',
      'İnsanoğlunun teknolojik aletlere karşı her zaman korku dolu bir tapınma geliştirmesini'
    ],
    correct: 1,
    explanation: 'Ahşaptan uçak yapıp kargo (ödül) beklemek; sistemin nasıl çalıştığını (neden-sonuç) anlamadan sadece şekli taklit ederek aynı başarıyı bekleme yanılgısını sembolize eder.'
  },
  {
    title: 'Schopenhauer ve Kirpi İkilemi',
    passage: 'Filozof Arthur Schopenhauer, insan ilişkilerindeki o kahredici çıkmazı "Kirpi İkilemi" ile açıklar. Dondurucu bir kış günü, bir grup kirpi donmamak için birbirine yaklaşır. Ancak yakınlaştıklarında dikenleri birbirine batar ve acı içinde tekrar uzaklaşırlar. Soğuk tekrar bastırdığında yine yaklaşır, dikenler batınca yine uzaklaşırlar. İnsanların sevgi ve yakınlık arayışı da böyledir. İçimizdeki yalnızlık ve üşüme hissi bizi başkalarına (ilişkilere) iter; ancak fazla yaklaştığımızda birbirimizin kusurları, bencillikleri ve beklentileri tıpkı birer diken gibi tenimize batar. İdeal olan, ne donacak kadar uzak ne de kanayacak kadar yakın durduğumuz o "nezaket ve mesafe" çizgisini bulabilmektir.',
    questionStem: 'Kirpi İkilemi (Porcupine Dilemma), insan ilişkilerindeki hangi felsefi ve psikolojik çıkmazı (çatışmayı) anlatmaktadır?',
    options: [
      'İnsanların sadece zor zamanlarda (kışın) birbirlerine yardım etme eğiliminde olduğunu',
      'Toplumdan tamamen izole olmanın, psikolojik yaralar almaktan her zaman daha güvenli olduğunu',
      'Yakınlık (sevgi) ihtiyacının bizi birleşmeye itmesine rağmen, fazla yakınlaşmanın kaçınılmaz olarak acı ve zarar (çatışma) getirdiği gerçeğini',
      'Hayvanların sosyal davranışlarının insanlardan çok daha fedakârca olduğunu'
    ],
    correct: 2,
    explanation: 'Üşümemek için yaklaşan ama dikenleri yüzünden acı çeken kirpiler; insanın sevgi (yakınlık) arayışı ile bu yakınlığın getirdiği kaçınılmaz acı (kusurlar) arasındaki çatışmayı anlatır.'
  },
  {
    title: 'Laplace\'ın Şeytanı ve Kader',
    passage: 'Fransız matematikçi Pierre-Simon Laplace, evrenin tamamen matematiksel ve belirlenimci (determinist) bir saat gibi çalıştığına inanırdı. 1814\'te şu ürpertici felsefi deneyi sundu: Eğer evrendeki tüm atomların şu anki tam konumunu ve hızını bilen süper zeki bir varlık (Laplace\'ın Şeytanı) olsaydı, bu varlık fizik kurallarını kullanarak evrenin geçmişteki ve milyarlarca yıl gelecekteki her saniyesini kesin olarak görebilirdi. Eğer her atomun hareketi fizik yasalarına göre önceden belliyse; bizim aldığımız kararlar, âşık olmamız veya cinayet işlememiz de aslında en başından beri yazılmış bir matematiksel zorunluluktur. Bu teori, "özgür irade" dediğimiz o kibirli tacı başımızdan alıp, bizi devasa bir makinenin çaresiz dişlilerine dönüştürür.',
    questionStem: 'Laplace\'ın Şeytanı düşünce deneyinin insanlık adına yarattığı asıl felsefi kriz nedir?',
    options: [
      'Süper zeki varlıkların uzaylılar şeklinde dünyamızı ziyaret edebileceği teorisi',
      'Eğer evrendeki her şey önceden belirlenmiş (determinist) kesin bir fiziksel matematikse, insanın kendi hayatını kendi kararlarıyla yönettiğine dair "özgür irade" inancının tamamen bir illüzyon olması',
      'Matematik biliminin henüz atomların hızını ölçecek kadar gelişmemiş olması',
      'Fizik yasalarının zaman içinde değişerek geleceği belirsiz kılması'
    ],
    correct: 1,
    explanation: 'Her atomun hareketi ve geleceği belliyse, bizim kararlarımızın da zorunlu (matematiksel) olduğu ve "özgür iradenin bir illüzyon" olduğu krizi vurgulanmıştır.'
  },
  {
    title: 'Siyah Kuğu Teorisi (Black Swan)',
    passage: 'Yüzyıllar boyunca Avrupalılar, dünyadaki tüm kuğuların "beyaz" olduğuna mutlak bir imanla inanıyorlardı. Ta ki 17. yüzyılda Avustralya\'da "Siyah Kuğular" keşfedilene kadar. Tek bir gözlem, bin yıllık kusursuz bir inancı yerle bir etti. Ekonomist Nassim Taleb, bu olayı tarihteki öngörülemeyen, ihtimal dışı görülen ama gerçekleştiğinde dünyayı kökünden sarsan felaketleri (veya icatları) tanımlamak için kullandı: İnternetin icadı, 11 Eylül saldırıları veya küresel krizler birer Siyah Kuğu\'dur. İşin trajikomik yanı, insan beyni bu şok edici felaketler yaşandıktan hemen sonra, geriye dönüp "Zaten olacağı belliydi, sinyaller vardı" diyerek sahte bir rasyonalizasyon kurgular. Olayı öngörememe cehaletimizi, sonradan uydurduğumuz kurgularla (bahanelerle) örtbas ederiz.',
    questionStem: 'Siyah Kuğu Teorisi\'nde yazarın insan zihniyle ilgili eleştirdiği asıl "zaaf" nedir?',
    options: [
      'Büyük felaketleri önlemek için teknolojik yatırımları yeterince desteklememesi',
      'Beklenmedik (öngörülemeyen) büyük bir olay yaşandıktan sonra, o olayı aslında en başından beri öngörülebilirmiş gibi rasyonelleştirerek (bahaneler kurgulayarak) kendi cehaletini örtbas etmesi',
      'Hayvan türlerinin coğrafi dağılımını bilimsel olarak doğru analiz edememesi',
      'Kriz anlarında hızlı ve mantıklı karar alamayıp paniğe kapılması'
    ],
    correct: 1,
    explanation: 'Felaket olduktan sonra "zaten belliydi" diyerek sahte bir kurgu (rasyonalizasyon) oluşturmamız; kendi öngörememe cehaletimizi örtbas etme zaafımız olarak eleştirilmiştir.'
  },
  {
    title: 'Potemkin Köyleri (Sahte İhtişam)',
    passage: '1787 yılında Rus Çariçesi II. Katerina, Kırım\'ı ziyarete gidecekti. Ancak bölge yoksulluk, harabe ve sefalet içindeydi. Çariçenin gözdesi Prens Grigori Potemkin, hükümdarın morali bozulmasın diye nehir kıyısına sadece ön cephesi olan, içi boş, devasa kartondan evler (film setleri gibi) inşa ettirdi. Figüran köylüler temiz kıyafetlerle Çariçeye el sallıyor, o geçtikten sonra sahte köy sökülüp geceleyin nehrin ilerisine tekrar kuruluyordu. Çariçe, ülkesinin cennet gibi olduğuna inanarak oradan ayrıldı. "Potemkin Köyleri" deyimi, siyasette ve modern bürokraside; içerideki yozlaşmayı, çürümeyi ve başarısızlığı gizlemek için dışarıya sunulan o sahte, makyajlı ve kartondan "başarı" illüzyonunu temsil eden evrensel bir yalana dönüşmüştür.',
    questionStem: 'Siyasi ve bürokratik dilde kullanılan "Potemkin Köyleri" kavramı mecazi olarak neyi tanımlar?',
    options: [
      'Savaş zamanlarında düşmanı yanıltmak için kurulan askeri tuzakları',
      'İçerideki gerçek bir yıkımı, yoksulluğu ve çürümüşlüğü (başarısızlığı) otoriteden veya halktan saklamak amacıyla kurgulanan sahte, gösterişli ve vitrinden ibaret başarı illüzyonunu',
      'Kırsal kesimden şehirlere yapılan göçü engellemek için kurulan tarım alanlarını',
      'Tarihi eserleri aslına uygun bir şekilde restore etme çabasını'
    ],
    correct: 1,
    explanation: 'Sefaleti gizlemek için kartondan sahte evler (vitrin) yapılması; içteki çürümeyi gizlemek için sunulan makyajlı ve sahte başarı illüzyonunu (vitrini) tanımlar.'
  },
  {
    title: 'Sineklerin Tanrısı (Uygarlığın Cilası)',
    passage: 'William Golding\'in "Sineklerin Tanrısı" romanında, medeni, iyi eğitimli ve İngiliz disipliniyle yetişmiş bir grup okul çocuğu ıssız bir adaya düşer. Başlangıçta kurallar koyar, meclis kurarlar. Ancak kurtarılma umudu azaldıkça ve korku büyüdükçe, o iyi eğitimli çocuklar yüzlerini boyayan, birbirini mızraklayan ve insan kurban eden vahşi birer kabile üyesine dönüşürler. Golding, bu sarsıcı eserle, kötülüğün toplumdan veya dışarıdaki bir canavardan gelmediğini yüzümüze çarpar. Medeniyet, yasalar ve ahlak dediğimiz şey; insan doğasının o ilkel, vahşi ve karanlık çekirdeğinin üzerine çekilmiş incecik ve kolayca dökülebilen bir boyadan (ciladan) ibarettir.',
    questionStem: 'Sineklerin Tanrısı romanındaki çocukların vahşileşme süreci, yazarın insan doğasıyla ilgili hangi felsefi inancını yansıtır?',
    options: [
      'Çocukların ailelerinden uzakta her zaman daha özgür ve barışçıl bir düzen kurabileceğini',
      'Eğitimin ve disiplinin insan karakterini ömür boyu kusursuz bir şekilde şekillendirdiğini',
      'Medeniyetin ve ahlaki kuralların, içimizde doğuştan var olan o ilkel ve karanlık (vahşi) çekirdeği sadece geçici olarak örten çok ince ve kırılgan bir cila olduğunu',
      'Adalardaki zorlu iklim şartlarının insan genetiğinde hızlı mutasyonlara yol açtığını'
    ],
    correct: 2,
    explanation: 'İyi eğitimli çocukların hızla vahşileşmesi; medeniyetin ve ahlakın aslında içimizdeki ilkel ve karanlık doğamızı örten ince/kırılgan bir cila olduğunu gösterir.'
  },
  {
    title: 'Ters Etki Yasası (Backfire Effect)',
    passage: 'Eğer bir kişinin yıllarca inandığı siyasi veya dini bir görüşün kesin olarak "yanlış" olduğunu kanıtlayan somut, bilimsel belgeler sunarsanız ne olur? Mantıken fikrini değiştirmesi gerekir, değil mi? Psikologlar bunun tam tersi olduğunu kanıtlamıştır. Bireye, inancını yıkan inkar edilemez kanıtlar sunduğunuzda, birey hatasını kabul etmek yerine o yanlış inanca eskisinden çok daha fanatik ve agresif bir şekilde bağlanır. Buna "Ters Etki Yasası" denir. Çünkü beyin, inanç sistemine yapılan o entelektüel saldırıyı, fiziksel olarak canına kastedilen bir "tehdit" gibi algılar ve mantığı kapatarak savunma mekanizmasını devreye sokar. Gerçekler (kanıtlar), kemikleşmiş dogmaları asla tedavi etmez; sadece o hastalıklı fanatizmi daha da alevlendirir.',
    questionStem: 'Ters Etki Yasası (Backfire Effect) kavramı, insanların "kanıtlar" karşısındaki tutumunu nasıl açıklamaktadır?',
    options: [
      'İnsanların sadece televizyon veya medyadan duydukları bilimsel kanıtlara inandığını',
      'Zihnin, kemikleşmiş inançlarına sunulan karşıt (doğru) kanıtları mantıksal bir veri olarak değil, "fiziksel bir tehdit" gibi algılayarak o yanlış dogmalara daha da fanatikçe sarıldığını',
      'İnsanların uzun makaleler yerine kısa ve görsel olarak sunulan kanıtlara daha çabuk ikna olduğunu',
      'Yaşlı insanların yeni kanıtları gençlere göre çok daha hızlı kabul ve analiz ettiğini'
    ],
    correct: 1,
    explanation: 'İnancını yıkan kanıt sunulduğunda beynin bunu fiziksel tehdit gibi algılayıp fikre daha agresif/fanatik bağlanması; kanıtların dogmaları tedavi etmeyip alevlendirdiğini açıklar.'
  },
  {
    title: 'Mitridatizm (Zehirle Beslenmek)',
    passage: 'Antik çağlarda Pontus Kralı VI. Mithridates, çevresindeki herkesin onu zehirleyerek öldürmek istediğine dair devasa bir paranoyaya kapılmıştı. Suikastları engellemek için akılalmaz bir yöntem buldu: Her gün azar azar, öldürücü olmayan dozlarda her türlü zehri içmeye başladı. Amacı, bedenini tüm zehirlere karşı bağışık hale getirmekti (Buna Mitridatizm denir). Yıllar sonra Romalılar sarayını kuşattığında ve esir düşeceğini anladığında, onursuzca yaşamak yerine yüzüğündeki ölümcül zehri içerek intihar etmek istedi. Ancak zehir işe yaramadı! Kendi kurduğu o paranoyak bağışıklık sistemi, kralın son kaçış biletini de elinden almıştı. Mithridates\'in hikâyesi, korkularımıza karşı ördüğümüz o aşılmaz duvarların, gün gelip bizi içine hapseden birer zindana dönüştüğünün ironik destanıdır.',
    questionStem: 'Kral Mithridates\'in intihar girişiminin başarısızlıkla sonuçlanmasındaki felsefi ironi (çelişki) nedir?',
    options: [
      'Romalı askerlerin krala zehir yerine yanlışlıkla su içirmeleri',
      'Ölümden (suikasttan) korunmak için geliştirdiği paranoyak savunma mekanizmasının (bağışıklığın), en çaresiz anında ona huzurlu bir ölüm seçeneğini bile yasaklayıp onu esarete mahkûm etmesi',
      'Kullandığı zehirlerin o dönemde sadece hayvanlar üzerinde ölümcül bir etkiye sahip olması',
      'Kralın aslında ölmek istememesi ve intihar ediyor gibi rol yapması'
    ],
    correct: 1,
    explanation: 'Suikasttan korunmak için zehire bağışıklık kazanması (savunma), esir düşeceğinde intihar etmesini (son kaçışını) engelleyerek onu esarete mahkûm etmesi asıl ironidir.'
  },
  {
    title: 'Lascaux Mağarası: Zamanda Bırakılan İz',
    passage: '1940 yılında Fransa\'da ormanda gezen çocuklar tesadüfen Lascaux Mağarası\'nı buldular. Mağaranın duvarları günümüzden 15.000 yıl önce çizilmiş muazzam at, geyik ve boğa figürleriyle doluydu. Ancak duvarlarda asıl ürpertici olan sanat değil, boyanın içine batırılıp duvara püskürtülmesiyle oluşturulan "negatif el izleriydi". O ilkel atalarımız, karanlık ve dondurucu bir çağda, vahşi hayvanların tehdidi altındayken o mağaraya girip neden ellerinin izini duvara bırakmıştı? Bu sadece bir ritüel veya av büyüsü değildi. O eller, karanlık boşluğa ve binlerce yıl sonrasına (bize) doğru uzatılmış, "Biz de vardık, yaşadık, korktuk ve buradaydık!" diyen evrensel, çaresiz ve muazzam bir varoluş çığlığıdır. Sanat, ölümün mutlak unutuşuna karşı insanın attığı ilk imzadır.',
    questionStem: 'Lascaux Mağarası\'ndaki "el izleri", yazar tarafından insanoğlunun hangi temel duygusunun bir dışavurumu olarak yorumlanmıştır?',
    options: [
      'Gelecek nesillere avcılık ve toplayıcılık stratejilerini aktarma (eğitim) çabası',
      'Fiziksel tehlikelere (hayvanlara) karşı duvarları bir sığınak olarak görme korkusu',
      'Ölüme ve mutlak unutuluşa karşı direnerek, zamanın ötesine "ben de vardım ve yaşadım" mesajını iletme (varoluşunu kanıtlama ve iz bırakma) arzusu',
      'Mağara duvarlarındaki nemi engellemek için geliştirilen ilkel bir yalıtım yöntemi'
    ],
    correct: 2,
    explanation: 'Duvara el izi bırakmanın "Biz de buradaydık" diyen bir varoluş çığlığı olarak tanımlanması; bunun ölüme ve unutuluşa karşı kalıcı bir iz bırakma (varoluş) arzusu olduğunu gösterir.'
  },
  {
    title: 'Sokrates\'in At Sineği',
    passage: 'Sokrates, Atina mahkemesinde idama mahkûm edildiğinde, kendini savunurken şehrin durumunu efsanevi bir metaforla anlatır. Atina devletini, asil ve gösterişli ama fazla beslenmekten dolayı irileşmiş, tembel ve ağırkanlı dev bir ata benzetir. Kendisini ise bu atı uyandırmak, rahatsız etmek ve harekete geçirmek için Tanrı tarafından gönderilmiş küçük bir "at sineği" olarak tanımlar. Atina halkı onu gerçeği aradığı için değil, o rehavet dolu cahil uykularını (konfor alanlarını) bozduğu, canlarını yakan o sarsıcı soruları sorduğu için öldürmüştür. Toplumlar, kendilerine ninniler (yalanlar) söyleyen dalkavukları baş tacı ederken; uykularını bölen, onları hakikatin sancısıyla uyandıran entelektüelleri (sinekleri) her zaman birer hain olarak görüp ezmek isterler.',
    questionStem: 'Sokrates\'in kendisini bir "at sineği"ne benzetmesi, aydının (entelektüelin) toplumdaki asıl işlevinin ne olduğunu vurgular?',
    options: [
      'Toplumun estetik ve sanatsal değerlerini yüceltmek için övgü dolu eserler üretmek',
      'Toplumsal düzene zarar vermemek için sessiz kalıp siyasi otoritelere itaat etmek',
      'Toplumun içinde bulunduğu rehaveti, cehaleti ve tembel uykuyu (konforu); rahatsız edici sorularla, eleştirilerle (sokarak) bozup onları hakikate uyandırmak',
      'Askeri saldırılara karşı halkı savaş meydanlarına davet eden bir komutan olmak'
    ],
    correct: 2,
    explanation: 'Atina\'yı tembel bir at, kendini ise onu uyandıran at sineği olarak tanımlaması; aydının görevinin toplumu rahatsız edici sorularla cehalet uykusundan (rehavetten) uyandırmak olduğunu vurgular.'
  },
  {
    title: 'Golem Etkisi (Karanlık Beklenti)',
    passage: 'Pygmalion etkisinin o korkunç ve karanlık ikizine "Golem Etkisi" denir. Efsaneye göre Golem, Yahudi mitolojisinde kilden yapılmış, sahibinin emirlerini ruhsuz bir şekilde yerine getiren, canavarlaşmaya müsait kaba bir yaratıktır. Psikolojide bu kavram şu gerçeği açıklar: Eğer bir öğretmen, patron veya yönetici; karşınızdaki kişiye "başarısız, yeteneksiz veya aptal" gözüyle bakar ve ondan hiçbir beklentisi olmazsa, o kişi (ne kadar yetenekli olursa olsun) bu negatif enerjiyi içselleştirir. Kendine olan inancını yitirir ve otoritenin ondan beklediği o "aptal ve başarısız" karaktere bürünerek performansı dibe vurur. Kötü veya yeteneksiz insan yoktur; sadece, otoritenin zehirli (düşük) beklentileriyle kendi potansiyelinin mezarına diri diri gömülmüş kurbanlar vardır.',
    questionStem: 'Golem Etkisi kavramı, insanların başarısızlığının (veya düşüşünün) arkasındaki asıl faktörü neye bağlamaktadır?',
    options: [
      'Kişinin doğuştan gelen (genetik) zekâ geriliğine ve yeteneksizliğine',
      'Bireyin aşırı özgüven (kibir) nedeniyle çalışmayı bırakıp tembelliğe sürüklenmesine',
      'Otorite figürlerinin (öğretmen/patron) bireye yönelik sürekli "düşük (negatif) beklentiler" beslemesinin, kişinin bu zehirli algıyı içselleştirip kendi potansiyelini yok etmesine',
      'Kötü arkadaş ortamlarının insanları suç işlemeye teşvik etmesine'
    ],
    correct: 2,
    explanation: 'Otoritenin kişiye "başarısız/aptal" gözüyle bakıp düşük beklentiye girmesinin, kişinin bu negatifliği içselleştirerek kendi potansiyelini yok etmesine (başarısız olmasına) bağlar.'
  },
  {
    title: 'Ouroboros: Kuyruğunu Yiyen Yılan',
    passage: 'Eski Mısır\'dan İskandinav mitolojisine kadar dünyanın hemen hemen her kültüründe ortaya çıkan ortak bir sembol vardır: Ouroboros. Bu figür, kendi kuyruğunu ağzına almış, kendini yiyerek beslenen dairesel bir yılandır. Ouroboros sadece ölümün değil, ölümün bizzat hayatı (yeniden doğuşu) beslediği o ebedi döngünün simgesidir. Başlangıç sondur, son ise yeni bir başlangıçtır. Evrendeki hiçbir şey tamamen yok olmaz; çürüyen yaprak toprağı besler, patlayan yıldızlar yeni gezegenlerin atomlarını yaratır. Bu kadim sembol, modern insanın doğrusal (bir yerde başlayıp kesin olarak biten) zaman algısını yıkarak, varoluşun aslında kendi yıkımından sürekli olarak kendini doğuran sonsuz bir çark olduğunu fısıldar.',
    questionStem: 'Ouroboros (kendi kuyruğunu yiyen yılan) sembolünün temsil ettiği felsefi (evrensel) kavram aşağıdakilerden hangisidir?',
    options: [
      'Yılan gibi zehirli hayvanların doğadaki en acımasız avcılar olduğu gerçeği',
      'İnsan hayatının tamamen şans eseri ilerleyen doğrusal (kısa) bir süreç olduğu',
      'Varoluşun (ve zamanın) kesin bir sonu olmayan, ölümün (yıkımın) sürekli olarak yeniden doğuşu (hayatı) beslediği sonsuz, ebedi bir döngü (çark) olduğu',
      'Kibirli ve bencil insanların eninde sonunda kendi kendilerini yiyip yok edeceği (açgözlülük)'
    ],
    correct: 2,
    explanation: 'Yılanın kendini yiyerek var olması; ölümün hayatı beslediği, sonun yeni bir başlangıç olduğu sonsuz ve ebedi bir varoluş döngüsünü (çarkı) temsil eder.'
  },
  {
    title: 'Diogenes\'in Feneri',
    passage: 'Gündüz vakti elinde yanan bir fenerle Atina sokaklarında dolaşan filozof Diogenes (Diyojen), insanların "Bu aydınlıkta elinde fenerle ne arıyorsun?" sorusuna hep aynı sarsıcı cevabı verirdi: "Dürüst bir insan arıyorum." Onun bu davranışı elbette gözlerinin bozuk olmasından kaynaklanmıyordu. Bu eylem, kibir ve refah içinde yüzen, kendini medeniyetin zirvesi sanan Atina toplumuna yapılmış kusursuz bir tiyatro, felsefi bir tokattı. Diogenes o fenerle; güneşin (maddi aydınlığın) sokakları ve binaları aydınlatabileceğini, ancak insanların içindeki o derin ahlaki çürümüşlüğü (karanlığı) aydınlatmaya yetmeyeceğini, o koca şehirde vicdan sahibi tek bir insan bile kalmadığını haykırıyordu.',
    questionStem: 'Diogenes\'in güpegündüz elinde fenerle dolaşması eyleminin asıl amacı (eleştirisi) nedir?',
    options: [
      'Güneş ışığının insan gözüne verdiği zararlara dikkat çekmek',
      'Toplumun maddi (fiziksel) aydınlık ve refah içinde görünmesine rağmen, ahlaki (vicdani) açıdan karanlıkta ve dürüstlükten tamamen yoksun (çürümüş) olduğunu yüzlerine çarpmak',
      'Atina\'daki sokak lambalarının ve altyapının eksikliğini yöneticilere protesto etmek',
      'Gündüzleri uyuyan ve sadece geceleri dışarı çıkan bir felsefi tarikat kurmak'
    ],
    correct: 1,
    explanation: 'Gündüz fenerle dürüst insan araması; güneş aydınlatsa da toplumun içinin ahlaki ve vicdani olarak kapkaranlık (çürümüş) olduğu gerçeğini (ikiyüzlülüğü) protesto etmektir.'
  },
  {
    title: 'MacGuffin (Hitchcock\'un İllüzyonu)',
    passage: 'Efsanevi yönetmen Alfred Hitchcock\'un sinemaya kazandırdığı "MacGuffin" kavramı, filmlerde karakterlerin uğruna öldüğü, çaldığı ve peşinden koştuğu ama aslında izleyici için (ve hikâyenin özünde) hiçbir anlamı olmayan "şey"dir. Bu bir mikroçip, gizli bir evrak çantası veya büyülü bir yüzük olabilir. MacGuffin\'in ne olduğu önemli değildir; önemli olan onun yarattığı o amansız koşuşturmaca, rekabet ve karakterlerin dönüşümüdür. Aslında insan hayatı da devasa bir Hitchcock filmidir ve hepimiz kendi MacGuffin\'lerimizin peşinden koşarız: Çok daha fazla para, yeni bir unvan veya son model bir araba... Uğruna ömrümüzü tükettiğimiz o hedeflerin çoğu (elde ettiğimizde anlarız ki) anlamsız birer bahanedir; asıl gerçeklik (ve trajedimiz) o hedefe koşarken dönüştüğümüz kişidir.',
    questionStem: 'Hitchcock\'un "MacGuffin" kavramı, insan hayatına (psikolojisine) uyarlandığında neyi ifade etmektedir?',
    options: [
      'Sinema filmlerinin gerçek hayattaki şiddeti artırarak insanları suça teşvik ettiğini',
      'Hayatta uğruna ömrümüzü harcadığımız (para, statü gibi) nihai hedeflerin aslında anlamsız birer bahane (illüzyon) olduğunu; asıl anlamın (ve trajedinin) o kovalama sürecinde şekillenen karakterimiz (yolculuk) olduğunu',
      'Hedefsiz yaşayan insanların her zaman psikolojik bunalımlara sürüklendiğini',
      'Maddi zenginliğin insanlara her koşulda mutlak mutluluk getirdiğini'
    ],
    correct: 1,
    explanation: 'Karakterlerin anlamsız bir çantanın peşinden koşması gibi, insanın da para/statü (MacGuffin) peşinden koştuğu; asıl olayın hedefin kendisi değil, o koşturmaca/yolculuk sürecindeki dönüşümümüz olduğu ifade edilmiştir.'
  },
  {
    title: 'Şeytanın Avukatı (Advocatus Diaboli)',
    passage: 'Günümüzde genellikle gıcık ve her şeye itiraz eden kişiler için kullanılan "Şeytanın Avukatı" deyimi, aslında Katolik Kilisesi\'nin 1587\'de kurduğu son derece resmi ve akılcı bir makamdır. Kilise, bir kişiyi "Aziz" (kutsal) ilan etmeden önce, salondaki körü körüne hayranlık ve tapınma duygusunu kırmak için özel bir avukat atardı. Bu avukatın tek görevi, o kişinin mucizelerini çürütmek, onun aslında kötü, çıkarcı veya sıradan biri olduğuna dair en acımasız argümanları (şeytanın argümanlarını) sunmaktı. Amaç gerçeği inanç fanatizminden korumaktı. Şeytanın Avukatı kavramı bize, mutlak doğru kabul edilen en kutsal odalarda bile (devlette, şirkette veya bilimde) inancın zehirlenmesini önlemek için, her şeye acımasızca "hayır" diyebilen şüpheci (skeptik) bir sese mutlaka ihtiyaç olduğunu kanıtlar.',
    questionStem: '"Şeytanın Avukatı" makamının kurulmasındaki asıl mantıksal (işlevsel) amaç nedir?',
    options: [
      'Kilisenin şeytani ritüelleri inceleyip yasaklamak için özel bir departman kurması',
      'Dini törenlerde halkı korkutarak kiliseye olan itaati ve bağışları artırmak',
      'Körü körüne inancın ve fanatizmin gerçeği kör etmesini (yanılgıyı) önlemek amacıyla, kurumsal olarak her iddiayı sarsacak acımasız ve şüpheci (skeptik) bir karşıt ses barındırma zorunluluğu',
      'Suç işleyen rahiplerin mahkemelerde daha adil yargılanabilmesini sağlamak'
    ],
    correct: 2,
    explanation: 'Herkesin aziz ilan etmek istediği birine karşı çıkıp mucizeleri çürütme (karşıt argüman sunma) görevi; körü körüne inancı ve fanatizmi önlemek, kurumsal şüpheyi (skeptizmi) canlı tutmak amacıyladır.'
  },
  {
    title: 'Tsundoku: Okunmayan Kitap Dağları',
    passage: 'Japonca bir kelime olan "Tsundoku", insanın sürekli kitap satın alması ancak onları hiç okumadan komodinlerin, masaların üzerinde devasa kuleler halinde istiflemesi (biriktirmesi) durumudur. Bu sadece basit bir alışveriş bağımlılığı (istifçilik) değildir; çok daha felsefi bir illüzyondur. İnsan, raftaki o kalın felsefe veya bilim kitabını satın aldığında, kitabın kapağına dokunmanın o eserdeki bilgeliği, statüyü ve erdemi kendi zihnine anında transfer ettiği şeklinde sahte (psikolojik) bir tatmin yaşar. Kitabı okumanın getireceği yorgunluğa katlanmadan, sadece ona "sahip olarak" kültürlü hissetme yanılsamasıdır. Tsundoku, modern insanın "olmak" (okuyup değişmek) yerine, sadece "sahip olarak" (satın alarak) o kimliği kiralayabileceğine dair düştüğü en entelektüel kibridir.',
    questionStem: 'Tsundoku fenomeninin temelinde yatan asıl psikolojik (ve tüketimsel) yanılgı nedir?',
    options: [
      'Japon yayıncılık sektörünün insanları sürekli yeni kitaplar almaya zorlaması',
      'İnsanın, zorlu bir okuma ve zihinsel değişim ("olmak") sürecine girmek yerine, kitabı sadece "satın alarak (sahip olarak)" onun bilgeliğine ve entelektüel statüsüne zahmetsizce ulaştığına dair yaşadığı sahte tatmin illüzyonu',
      'Evdeki dekorasyonu tamamlamak için kitapların en ucuz ve gösterişli aksesuarlar olması',
      'İnsanların yaşlandıkça görme yetilerini kaybettikleri için kitap okumayı mecburen bırakmaları'
    ],
    correct: 1,
    explanation: 'Okuma (emek) zahmetine girmeden sadece kitabı "satın alarak" o kültürü ve bilgeliği zihnine transfer ettiğini (sahip olarak "olma" kimliğini kiraladığını) sanması asıl psikolojik illüzyondur.'
  },
  {
    title: 'Pavlov\'un Modern Köpekleri',
    passage: 'Rus fizyolog İvan Pavlov, köpeklerine her et vermeden önce bir zil çalmış; bir süre sonra ortada hiç et olmamasına rağmen, köpekler sadece zili duyduklarında bile (şartlanarak) ağızlarından salya akıtmaya başlamışlardı. Bu "Klasik Koşullanma" deneyi bir asır önce laboratuvarda kaldı sanırız. Oysa modern çağın dev teknoloji şirketleri, Pavlov\'un deneyini cebimizdeki telefonlarla tüm insanlığa uygulamaktadır. Ekranda yanan küçük bir kırmızı "bildirim" noktası veya gelen kısa bir "titreşim" sesi, aslında Pavlov\'un zilinden farksızdır. Ortada gerçek bir tehlike veya değerli bir ödül olmamasına rağmen, o zili (bildirimi) duyduğumuz an zihnimiz dopamin salgılar ve elimiz kontrolsüzce (koşullanmış bir köpek gibi) o ekrana gider. İrademizin sahibi olduğumuzu sanırken, milyarlarca dolarlık algoritmaların kusursuzca eğittiği modern deneklerizdir.',
    questionStem: 'Yazar, Pavlov\'un zil deneyini akıllı telefon bildirimleriyle kıyaslayarak hangi gerçeği eleştirmektedir?',
    options: [
      'Köpeklerin duyma yetilerinin insanlardan çok daha hassas ve gelişmiş olduğunu',
      'Teknoloji şirketlerinin, telefon bildirimlerini (zili) kullanarak insan beyninin dopamin sistemini hacklediğini ve bizi "özgür iradeden yoksun, şartlanmış (koşullanmış) birer bağımlı denek" haline getirdiğini',
      'Telefonlardan yayılan radyasyonun beynin hafıza merkezini tamamen yok ettiğini',
      'Akıllı cihazların insanların iş ve okul verimliliğini inanılmaz derecede artırdığını'
    ],
    correct: 1,
    explanation: 'Bildirim sesiyle ekrana elimizin gitmesi ile zili duyan köpeğin salya akıtması benzetilmiş; teknoloji şirketlerinin dopaminle bizi (iradesiz) koşullanmış denekler haline getirdiği eleştirilmiştir.'
  },
  {
    title: 'Mandelbrot Kümesi (Fraktal Evren)',
    passage: 'Matematikçi Benoit Mandelbrot, 1979\'da bilgisayarlar yardımıyla "Fraktal Geometri" adında zihin yakan bir boyut keşfetti. "Mandelbrot Kümesi" adı verilen bu şekilde, bilgisayar ekranındaki o tuhaf şekle ne kadar yaklaşırsanız (zoom yaparsanız), aynı karmaşık desenin sonsuza kadar kendi içinde tekrar ettiğini görürsünüz. Bir kar tanesine yakından baktığınızda aynı kar tanesi şeklini görmeniz veya ağaç dallarının damarlarındaki o sonsuz tekrar gibi. Mandelbrot\'un bu keşfi felsefeyi sarsmıştır: Çünkü evrenin o dehşet verici, başa çıkılmaz, kaotik ve sonsuz karmaşıklığı; aslında temelinde çok basit, minicik ve öngörülebilir tek bir matematik formülünün (kuralların) sonsuz kez tekrar etmesinden ibarettir. Kaos, aslında henüz kodunu çözemediğimiz muazzam bir düzendir.',
    questionStem: 'Mandelbrot Kümesi (Fraktallar) keşfinin evren algımız üzerinde yarattığı asıl felsefi sarsıntı nedir?',
    options: [
      'Kar tanelerinin hiçbirinin aslında birbirine benzemediğini mikroskobik olarak kanıtlaması',
      'Evrendeki tüm düzensizliklerin ve kaosun, teknoloji ilerledikçe insan kontrolüne gireceği',
      'Dışarıdan sonsuz, kaotik ve karmaşık görünen evrensel yapının, aslında temelinde yatan çok basit ve düzenli bir kuralın (matematik formülünün) sonsuz tekrarından (düzeninden) doğduğunu göstermesi',
      'Bilgisayarların ürettiği şekillerin doğadaki gerçek şekillere asla benzemeyeceğini ispatlaması'
    ],
    correct: 2,
    explanation: 'Sonsuz ve karmaşık (kaotik) görünen desenlerin aslında çok basit tek bir matematik formülünün sonsuz tekrarı olması; kaosun altında muazzam ve basit bir düzenin yattığını ispatlar.'
  },
  {
    title: 'Oblomovluk (Eylemsizliğin İsyanı)',
    passage: 'Rus yazar İvan Gonçarov\'un ölümsüz karakteri İlya İlyiç Oblomov, günlerini sadece yatağında, eski sabahlığıyla yatarak ve hiçbir şey yapmayarak geçirir. Toplum onu "tembel, uyuşuk ve işe yaramaz" olarak damgalar. Ancak Oblomov\'un yatağı bir tembellik sığınağı değil; dışarıdaki dünyanın o anlamsız telaşına, bürokratik riyakârlığına, insanların mevki ve para uğruna birbirini ezip durduğu o absürt fare yarışına karşı felsefi ve pasif bir isyandır. Oblomov yataktan çıkmaz, çünkü dışarıda uğruna ayağa kalkmaya, ceket giymeye ve ruhunu kirletmeye değecek dürüst hiçbir şey (hiçbir anlam) bulamaz. Oblomovluk; ahlaksız bir eylem (çarkın dişlisi) olmaktansa, masum bir "eylemsizlik (hiçlik)" içinde çürümeyi seçmenin o trajikomik feryadıdır.',
    questionStem: 'Oblomov karakterinin sürekli yatakta yatması (Oblomovluk), yazar tarafından nasıl (felsefi bir açıdan) değerlendirilmektedir?',
    options: [
      'Fiziksel hastalıkların (depresyonun) Rus toplumunda çok yaygın olması ve tıbbın yetersiz kalması',
      'Sadece mirasyedi (zengin) soyluların çalışmaya ihtiyaç duymadıkları için yaşadıkları şımarık bir hayat tarzı',
      'Basit bir fiziksel tembellikten ziyade; mevki, para ve riyakârlık üzerine kurulu o anlamsız (ahlaksız) modern hayata ve fare yarışına katılmayı reddeden "pasif, ahlaki bir isyan ve eylemsizlik" tercihi',
      'Uyku düzeni bozulan insanların toplumsal hayata uyum sağlamasının imkânsız olduğu'
    ],
    correct: 2,
    explanation: 'Oblomov\'un yataktan çıkmaması basit bir tembellik değil; dışarıdaki sahte, çıkarcı ve ahlaksız "fare yarışına" (modern hayata) katılmayı reddeden ahlaki ve pasif bir isyan (eylemsizlik) olarak değerlendirilmektedir.'
  },
  {
    title: 'Nietzsche ve Bengi Dönüş (Eternal Return)',
    passage: 'Nietzsche\'nin felsefe tarihine fırlattığı en ağır bomba "Bengi Dönüş" (Ebedi Tekerrür) kavramıdır. Bizi şu korkunç zihinsel teste sokar: Gecenin bir yarısı bir iblis yanına gelse ve sana "Şu an yaşadığın bu hayatı, aynı sevinçler, aynı ihanetler, aynı gözyaşları ve aynı detaylarla sonsuza kadar, defalarca ve defalarca yeniden yaşamak zorundasın!" dese ne yapardın? Kendini yere atıp o iblise lanet mi okurdun, yoksa ona sarılıp "Sen bir Tanrısın!" mı derdin? Bengi Dönüş, ölümden sonraki bir cennet vaadine sığınan zayıflara atılmış bir tokattır. Hayatı (kaderini) gerçekten sevmek, o hayatı içindeki en korkunç acılarla bile sonsuz kez yeniden yaşamayı coşkuyla isteyecek kadar (kendi varoluşunu) yüceltmektir.',
    questionStem: 'Nietzsche\'nin "Bengi Dönüş" testi, insanın hayatla (varoluşuyla) kurduğu ilişkiyi hangi kritere göre sınamaktadır?',
    options: [
      'Ölümden sonra cennete gitmek için ne kadar çok iyilik yaptığına',
      'Hayatında karşılaştığı sorunlardan (acılardan) kaçmak için ne kadar çabuk pes ettiğine',
      'Yaşadığı hayatı (tüm acıları ve hatalarıyla birlikte), hiçbir detayı değiştirmeden "sonsuz kez yeniden yaşamayı isteyecek kadar" sevip sevmediğine ve o hayatı (varoluşunu) onaylayıp onaylamadığına',
      'Geçmişte yaptığı kötü eylemlerin vicdan azabından kurtulmak için hafızasını silmek isteyip istemediğine'
    ],
    correct: 2,
    explanation: 'İblisin "bu hayatı aynen sonsuz kez yaşayacaksın" demesi karşısında vereceğimiz tepki; hayatımızı tüm acılarıyla birlikte sonsuz kez yeniden isteyecek kadar sevip (onaylayıp) onaylamadığımızı sınar.'
  }
];

export const felsefeParagrafSorulari18: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_18.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_18[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe18-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_19 = [
  {
    title: 'Şeytan Çekirdeği (The Demon Core)',
    passage: '1946 yılında Los Alamos laboratuvarında fizikçi Louis Slotin, "Şeytan Çekirdeği" adı verilen plütonyum küresinin üzerinde kritik kütle deneyi yapıyordu. İki yarım küreyi birbirine yaklaştırırken, aradaki mesafeyi korumak için sadece basit, düz uçlu bir tornavida kullanıyordu! Slotin bu aşırı tehlikeli deneye "Ejderhanın kuyruğunu gıdıklamak" diyordu. O gün tornavida kaydı, küreler kapandı ve odayı ölümcül, kör edici mavi bir radyasyon ışığı kapladı. Slotin küreleri elleriyle ayırıp odadaki diğer bilim insanlarını kurtardı ama kendisi 9 gün içinde eriyerek can verdi. Bu olay; insanoğlunun evrendeki en yıkıcı ve tanrısal gücü (atomu) kontrol ederken, ona sıradan bir el aletiyle (tornavidayla) müdahale edecek kadar kibre ve ölümcül bir laubaliliğe kapılmasının en trajik sembolüdür.',
    questionStem: 'Şeytan Çekirdeği deneyindeki kaza, bilim insanlarının tutumu hakkında hangi felsefi ironiyi (çelişkiyi) göz önüne sermektedir?',
    options: [
      'Plütonyum gibi elementlerin laboratuvar ortamında asla kontrol edilemeyeceği gerçeğini',
      'Bilim insanlarının hayat kurtarmak uğruna kendi canlarını feda eden kusursuz kahramanlar olduğunu',
      'İnsanoğlunun evrendeki en devasa ve apokaliptik gücü (atomu) kontrol ederken bile, ona basit bir tornavidayla yaklaşacak kadar inanılmaz bir kibre, sıradanlığa ve laubaliliğe kapılmasını',
      'Nükleer enerjinin sadece savaşlarda kullanılması gerektiği yönündeki siyasi inancı'
    ],
    correct: 2,
    explanation: 'Dünyayı yok edecek bir güce basit bir tornavidayla (ve laubalilikle) müdahale edilmesi; insanın o devasa güç karşısındaki kibrini ve ölümcül sıradanlığını (ironiyi) sembolize eder.'
  },
  {
    title: 'Vavilov Enstitüsü Kuşatması',
    passage: 'İkinci Dünya Savaşı\'nda Nazi ordusu Leningrad\'ı 872 gün boyunca kuşattığında, şehirde bir milyondan fazla insan açlıktan öldü. Şehrin kalbindeki Vavilov Enstitüsü\'nde ise dünyanın en büyük ve en değerli "tohum bankası" bulunuyordu. İçeride tonlarca pirinç, buğday ve patates vardı. Ancak enstitüdeki dokuz botanikçi bilim insanı, o tohumlara dokunmaktansa masalarında açlıktan eriyerek ölmeyi tercih ettiler. Çünkü o tohumlar, savaş bittikten sonra insanlığın (tarımın) geleceğini ve biyolojik çeşitliliğini yeniden inşa edecek olan kutsal bir mirastı. Vavilov kahramanları, bilimin sadece laboratuvarda yapılan bir meslek değil; insanlığın geleceğini, kendi ilkel hayatta kalma (açlık) içgüdüsünden bile üstün tutan o eşsiz, asil ve sarsılmaz inanç olduğunu kanıtlamıştır.',
    questionStem: 'Vavilov Enstitüsü\'ndeki bilim insanlarının eylemi, ahlaki ve bilimsel bağlamda neyin en yüce göstergesidir?',
    options: [
      'Bilim insanlarının yiyeceklerin bozulduğunu düşünerek zehirlenmekten korktuklarının',
      'Nazi ordusunun tohum bankasına yaklaşmasını engellemek için kurulan askeri bir direnişin',
      'Bireyin kendi temel varoluş (hayatta kalma) içgüdüsünü bile hiçe sayarak; insanlığın, bilimin ve doğanın geleceğini koruma uğruna gösterdiği o sarsılmaz fedakârlığın (adanmışlığın)',
      'Sovyet yönetiminin bilim insanlarına uyguladığı katı sansür ve ölüm cezalarının'
    ],
    correct: 2,
    explanation: 'Açlıktan ölmelerine rağmen tohumları yememeleri; kendi canlarından ziyade insanlığın ve doğanın geleceğini (bilimsel mirası) korumaya yönelik eşsiz bir fedakârlığı ve adanmışlığı gösterir.'
  },
  {
    title: 'Akıllı Hans (Clever Hans) İllüzyonu',
    passage: '1900\'lerin başında Almanya\'da "Akıllı Hans" adında bir at, toynağını yere vurarak matematik işlemleri çözüyor, tarih sorularına cevap veriyordu. Herkes onun bir insan zekâsına sahip olduğuna inandı. Ta ki psikolog Oskar Pfungst bu mucizeyi inceleyene kadar. Pfungst şunu fark etti: Soruyu soran kişi cevabı bilmiyorsa veya at soru soranın yüzünü göremiyorsa, Hans soruları asla bilemiyordu! At aslında matematik yapmıyordu; sadece karşısındaki insanın, doğru sayıya yaklaşıldığında nefesini tutması veya kaşını kaldırması gibi "mikro mimiklerini" okuyup toynağını vurmayı durduruyordu. "Akıllı Hans Etkisi", insanın doğaya ve hayvanlara bakarken kendi zekâsını (istediği cevabı) onlara yansıtıp, kendi kendini büyülediği (manipüle ettiği) o safdil kibrinin bilimsel adıdır.',
    questionStem: 'Akıllı Hans hikâyesi, insan psikolojisinin olayları yorumlama biçimiyle ilgili hangi gerçeği ortaya koyar?',
    options: [
      'Hayvanların matematiksel zekâya sahip olsalar bile bunu insanlardan gizleme eğilimini',
      'Atların görme yeteneklerinin insanlardan çok daha gelişmiş bir yapıya sahip olduğunu',
      'İnsanların, karşılarındaki canlıların veya olayların aslında çok basit olan reflekslerini (beden dillerini) göz ardı ederek, onlara kendi zekâlarını ve bekledikleri karmaşık cevapları yansıtma (kendi illüzyonuna inanma) zaafını',
      'Psikoloji biliminin hayvan deneylerinde her zaman başarısız sonuçlar verdiğini'
    ],
    correct: 2,
    explanation: 'Atın sadece insan mimiklerini okumasına rağmen insanların onun matematik bildiğini sanması; insanın doğaya kendi zekâsını ve beklediği cevabı yansıtma (kendi illüzyonuna inanma) zaafını açıklar.'
  },
  {
    title: 'Biyosfer 2: Doğayı Taklit Etme Kibri',
    passage: '1991 yılında, gelecekte Mars\'a kurulacak kolonilere hazırlık için Arizona çölüne devasa bir cam fanus (Biyosfer 2) inşa edildi. İçine okyanus, yağmur ormanı ve tarım alanları konularak 8 bilim insanı buraya kilitlendi. İnsanoğlu, milyarlarca yılda oluşan Dünya\'nın kusursuz ekolojik dengesini kendi elleriyle taklit edebileceğini sanıyordu. Ancak deney feci şekilde çöktü. Betondaki bir kimyasal hata yüzünden oksijen seviyesi ölümcül şekilde düştü, karbondioksit tavan yaptı. Tarım alanları kurudu, içeride sadece hamamböcekleri ve karıncalar çoğaldı. En kötüsü, bilim insanları stresten çıldırarak birbirlerine düşman oldular. Biyosfer 2, insanın doğanın milyarlarca yıllık kusursuz ve vahşi dengesini birkaç mühendislik denklemiyle cam bir kavanoza sığdırabileceğine dair duyduğu o teknolojik kibrin (Tanrıcılık oynamanın) devasa bir mezar taşıdır.',
    questionStem: 'Biyosfer 2 deneyinin çöküşü, insan-doğa ilişkisine dair hangi felsefi eleştiriyi barındırmaktadır?',
    options: [
      'Dünya dışı gezegenlerde (Mars\'ta) su bulmanın imkânsızlığına dair bilimsel kanıtı',
      'Bilim insanlarının kapalı alanlarda psikolojik olarak çalışmaya elverişli olmadığını',
      'İnsanoğlunun, doğanın milyarlarca yılda kurduğu o karmaşık ve kusursuz dengeyi, kendi ilkel teknolojisiyle kolayca kopyalayıp yönetebileceğine dair beslediği o küstah ve başarısız kibri (yanılgıyı)',
      'Böcek türlerinin diğer tüm hayvan türlerinden daha hızlı evrimleştiği gerçeğini'
    ],
    correct: 2,
    explanation: 'Deneyin çökmesi; insanın doğanın milyarlarca yıllık kusursuz dengesini cam bir fanusta kopyalayabileceğini sanmasının (teknolojik kibrinin) feci bir şekilde patlamasıdır.'
  },
  {
    title: 'Trepansasyon (Kafatası Delgisi)',
    passage: 'Arkeolojik kazılarda, binlerce yıl öncesine ait ve üzerinde kusursuz, yuvarlak delikler açılmış insan kafatasları bulunur. Bu deliğin etrafındaki kemiklerin iyileşme izleri, hastaların bu korkunç ameliyattan (Trepansasyon) sonra yıllarca yaşadığını kanıtlar. Antik insanlar bu ameliyatı beyin cerrahisi yapmak için değil, sara nöbeti veya migren geçiren kişinin kafasının içindeki "kötü ruhların (şeytanların)" dışarı çıkması için bir baca açmak amacıyla yapıyorlardı. Ancak işin en çılgın tarafı şudur: Kafatasını delmek, beyin kanaması veya kafa travması yaşayan hastalarda kafa içi basıncı gerçekten de düşürüyor ve hastanın hayatını kurtarıyordu! Bu durum; insanlık tarihinde bazen tamamen irrasyonel, büyülü ve yanlış bir inancın, tesadüfen son derece doğru ve hayat kurtaran bir tıbbi sonuca ulaşabileceğinin kanıtıdır.',
    questionStem: 'Trepansasyon (Kafatası delme) uygulaması, bilim tarihindeki hangi ilginç çelişkiyi (ironiyi) göz önüne sermektedir?',
    options: [
      'Antik dönemde kullanılan cerrahi aletlerin modern aletlerden çok daha keskin ve steril olduğunu',
      'İnsan beyninin her türlü darbeye karşı kendisini tamamen onarabilme yeteneğini',
      'Tamamen mantık dışı, büyüsel ve yanlış bir inançla (kötü ruhları çıkarma) yapılan bir eylemin, tesadüfi bir şekilde tıbben doğru ve hayat kurtaran bir sonuca ulaşması çelişkisini',
      'Geçmişte insanların kötü ruhlara inanmadığı halde dini otoritelerden korktukları için bu ameliyatı yaptırdıklarını'
    ],
    correct: 2,
    explanation: '"Şeytanı çıkarmak" gibi büyüsel/yanlış bir inançla kafatasını delmenin, kafa içi basıncı düşürüp gerçekten hayat kurtarması (yanlış inanç, doğru sonuç) bu ironiyi açıklar.'
  },
  {
    title: 'Kardaşev Ölçeği: Tanrılığın Matematiği',
    passage: '1964 yılında Rus astrofizikçi Nikolay Kardaşev, evrendeki olası medeniyetlerin gelişmişlik düzeyini ölçmek için ahlaki veya kültürel değerleri değil, acımasız bir matematiksel kriteri seçti: "Enerji Tüketimi". Kardaşev Ölçeği\'ne göre; Tip 1 medeniyet kendi gezegenindeki tüm enerjiyi kontrol eden, Tip 2 kendi yıldızının (Güneşin) enerjisini devasa bir küreyle hapseden, Tip 3 ise tüm galaksinin enerjisini emen tanrısal bir medeniyettir. Peki insanlık nerededir? Biz henüz Tip 1 bile değiliz; gezegenimizin enerjisini tam kullanamayan, 0.73 seviyesinde ilkel bir türüz. Kardaşev bize şunu fısıldar: Evrensel ölçekte medeniyet, ne kadar çok kitap yazdığınız veya barış içinde yaşadığınızla değil; doğaya ve evrene ne kadar şiddetli bir şekilde boyun eğdirip onun enerjisini (damarlarını) sömürebildiğinizle ölçülür.',
    questionStem: 'Kardaşev Ölçeği\'nin medeniyet kavramına getirdiği asıl (ve acımasız) bakış açısı nedir?',
    options: [
      'Gelecekte teknolojinin tamamen duracağı ve insanların ilkel hayata döneceği',
      'Gelişmişliğin ahlak, kültür veya barış gibi insani değerlerle değil; doğrudan evrenin kaynaklarını (enerjiyi) sömürme ve doğaya mutlak boyun eğdirme kapasitesiyle ölçüldüğü',
      'Uzaylıların insanlıktan çok daha ahlaklı ve merhametli bir düzene sahip olduğu',
      'Enerji tüketiminin artmasının gezegenlerin yörüngelerini bozarak evreni yok edeceği'
    ],
    correct: 1,
    explanation: 'Medeniyetin ahlak veya kitapla değil, yıldızların/galaksinin enerjisini sömürme (kullanma) kapasitesiyle ölçülmesi, bu acımasız metrik bakış açısını tanımlar.'
  },
  {
    title: 'Sahte Ameliyatlar (Placebo Surgery)',
    passage: 'Diz ağrısı çeken hastalar üzerinde yapılan bir tıbbi deney tıp dünyasını şoka uğrattı. Doktor Bruce Moseley, hastaların yarısına gerçek bir diz ameliyatı yaptı. Diğer yarısına ise anestezi verdi, dizlerine sadece bir kesik attı, ameliyat sesleri çıkaran bir kaset çaldı ve hiçbir şey yapmadan dizlerini tekrar dikti! Uyandıklarında tüm hastalara ameliyatın başarılı olduğu söylendi. Yıllar süren takiplerin ardından, "sahte" ameliyat olan hastaların da gerçek ameliyat olanlar kadar iyileştiği, ağrılarının tamamen geçtiği ve rahatça yürümeye başladıkları görüldü. Bu deney, insan zihninin bedeni kandıran basit bir illüzyonist olmadığını; mutlak bir inancın, bizzat bedenin anatomisini ve kimyasını değiştirebilecek kadar güçlü ve kusursuz bir cerrah (neşter) olduğunu kanıtlar.',
    questionStem: 'Sahte Ameliyat deneyinin tıp bilimine gösterdiği en sarsıcı gerçek nedir?',
    options: [
      'Diz ameliyatlarının aslında tıp literatüründe tamamen gereksiz bir müdahale olduğu',
      'Anestezi ilaçlarının kemik dokusunu onarıcı gizli bir kimyasal etkiye sahip olduğu',
      'İnsanın beynindeki "mutlak inancın", hiçbir fiziksel (gerçek) müdahale yapılmasa bile bedeni fiziksel olarak iyileştirebilecek kadar somut ve cerrahi bir güce (Plasebo) sahip olduğu',
      'Doktorların hastalarla iletişim kurmamasının ameliyat başarısını artırdığı'
    ],
    correct: 2,
    explanation: 'Sadece kesik atılıp hiçbir şey yapılmayan hastaların da iyileşmesi; zihindeki mutlak inancın (plasebonun) bedeni fiziksel olarak onaracak cerrahi bir güce sahip olduğunu kanıtlar.'
  },
  {
    title: 'Starfish Prime: Gökyüzünü Körü Etmek',
    passage: '1962 yılında, Soğuk Savaş\'ın zirvesindeyken ABD ordusu "Starfish Prime" projesini hayata geçirdi ve atmosferin 400 kilometre üzerinde (uzayda) 1.4 megatonluk bir nükleer bomba patlattı. Amaç, nükleer radyasyonun dünyanın manyetik alanını nasıl etkileyeceğini görmekti. Patlama öylesine şiddetliydi ki, Hawaii semalarında kan kırmızısı devasa yapay auroralar oluştu, radyasyon fırtınası yörüngedeki uyduları anında kızartıp yok etti ve Dünya\'nın etrafında yıllarca sürecek yapay bir radyasyon kuşağı yarattı. Starfish Prime, insanoğlunun teknolojik gövde gösterisi uğruna, sadece kendi gezegenini değil; evrenin dokunulmaz sanılan o karanlık ve sessiz gökyüzünü bile kör edecek kadar tehlikeli bir kibre ve pervasızlığa (hubris) ulaştığının belgesidir.',
    questionStem: 'Starfish Prime deneyi, insanlık ve teknoloji bağlamında neyin eleştirisidir?',
    options: [
      'Uzay boşluğunda ses yayılmadığı için patlamaların aslında tehlikesiz olduğu yanılgısının',
      'Devletlerin siyasi gövde gösterisi (kibir) uğruna, sadece yeryüzünü değil, gökyüzünün (evrenin) doğal işleyişini bile kör edecek kadar sınır tanımaz ve pervasız bir yıkıcılığa ulaşmasının',
      'Nükleer silahların küresel ısınmayı durdurabilecek bir alternatif olarak görülmesinin',
      'Radyasyonun atmosferi delerek dünyaya uzaylı virüslerinin girmesine yol açtığının'
    ],
    correct: 1,
    explanation: 'Sırf denemek ve güç göstermek için uzayda nükleer patlatıp uyduları kör etmesi; insanoğlunun gökyüzünü bile pervasızca ve kibre kapılarak tahrip etmesinin eleştirisidir.'
  },
  {
    title: 'Tazmanya Kaplanı Benjamin',
    passage: 'Dünya üzerindeki en eşsiz canlılardan biri olan Tazmanya Kaplanı (Thylacine), sırtında kaplan çizgileri olan bir kanguruya benzerdi. Çiftçilerin koyunlarını yediği bahanesiyle acımasızca avlandılar ve türleri yok olma noktasına geldi. 1936 yılında Hobart Hayvanat Bahçesi\'nde, bu türün yeryüzündeki son ve tek temsilcisi olan "Benjamin" adındaki Tazmanya Kaplanı kalmıştı. Ancak o karanlık gece, bakıcısı kapıyı kilitlemeyi unuttuğu için Benjamin açıkta kaldı ve dondurucu soğukta donarak öldü. 4 milyon yıldır bu gezegende yaşayan, fırtınalara ve buzul çağlarına direnen görkemli bir türün sonu; devasa bir savaşla veya göktaşıyla değil, sıradan bir insanın kapıyı kilitlemeyi unuttuğu o sessiz, sıradan ve kahredici ihmalkârlığıyla geldi.',
    questionStem: 'Tazmanya Kaplanı Benjamin\'in ölüm şekli, bir türün yok oluşuna dair nasıl bir "trajik ironi" barındırmaktadır?',
    options: [
      'Hayvanat bahçelerinin vahşi hayvanların ömrünü uzatmadaki yetersizliği',
      'Avcıların hayvanlara acımadan onları tamamen kürkleri için avlaması',
      'Milyonlarca yıl hayatta kalmayı başaran devasa ve görkemli bir evrimsel tarihin; büyük bir felaketle değil, bir insanın "sıradan, sessiz ve basit bir ihmalkârlığı" (kapıyı kilitlememesi) ile son bulması',
      'Kanguruların ve kaplanların genetik olarak soğuğa karşı çok dayanıksız olması'
    ],
    correct: 2,
    explanation: '4 milyon yıllık evrimin ve buzul çağlarını atlatan bir türün sonunun, destansı bir felaketle değil, bir bakıcının kapıyı kilitlemeyi unutması gibi sıradan/basit bir ihmalle gelmesi olayın trajik ironisidir.'
  },
  {
    title: 'Galvani ve Dans Eden Kurbağalar',
    passage: '1780 yılında İtalyan anatomist Luigi Galvani, laboratuvarında ölü kurbağa bacaklarını incelerken, metal neşterin kurbağanın sinirine değmesiyle ölü bacağın aniden şiddetle tekme attığını (kasıldığını) gördü. Galvani şoka girmişti; cansız bedeni dirilten ve harekete geçiren bu gizemli gücün "Hayvansal Elektrik" (ruh) olduğuna, yaşamın sırrını bulduğuna inandı. Oysa ortada ruh falan yoktu; sadece farklı iki metalin kurbağanın ıslak dokusuyla birleşerek basit bir pil (elektrik akımı) yaratması söz konusuydu. Ancak Galvani\'nin bu yanılgısı, "ölü bedeni elektrikle diriltme" fikrini öylesine ateşledi ki, yıllar sonra Mary Shelley\'nin o ölümsüz "Frankenstein" canavarının ilham kaynağı oldu. Bilimde yanılgılar bazen gerçeğin kendisinden daha sarsıcı efsaneler doğurur.',
    questionStem: 'Galvani\'nin kurbağa deneyi, bilimin ve edebiyatın kesiştiği noktada neyi sembolize etmektedir?',
    options: [
      'Kurbağaların sinir sistemlerinin memelilerden çok farklı çalıştığını',
      'Bilimsel araştırmalardaki tamamen yanlış bir yorumlamanın (illüzyonun), insanlık tarihinin en ikonik kurgularından (Frankenstein) birine ilham vererek gerçeği aşan bir efsane yaratabileceğini',
      'Elektriğin icadının aslında tıp bilimi sayesinde gerçekleştiğini',
      'Ölülerin elektrik akımıyla gerçekten yeniden hayata döndürülebileceği fikrini'
    ],
    correct: 1,
    explanation: 'Galvani\'nin basit bir pil reaksiyonunu "ruhun elektriği" (diriliş) sanıp yanılmasına rağmen, bu yanılgının Frankenstein gibi ölümsüz bir efsane yaratması vurgulanmıştır.'
  },
  {
    title: 'Kim Peek: Gerçek Yağmur Adam',
    passage: 'Dünyaca ünlü "Rain Man" (Yağmur Adam) filmine ilham veren Kim Peek, beyninin sağ ve sol yarımkürelerini birbirine bağlayan "Korpus Kallozum" köprüsü olmadan doğmuştu. Bu eksiklik ona insanüstü bir güç verdi: İki gözüyle aynı anda kitabın karşılıklı iki sayfasını 8 saniyede okuyabiliyor ve okuduğu 12.000 kitabın %98\'ini kelimesi kelimesine hatırlıyordu. O, yürüyen devasa bir kütüphaneydi. Ancak madalyonun diğer yüzü trajikti; Kim, devasa veri tabanına rağmen tek başına gömleğini ilikleyemiyor, bir atasözünü (mecazı) asla anlayamıyor ve kendi başına hayatını sürdüremiyordu. Kim Peek bize insan beyninin sırrını fısıldar: Zekâ (veya bilinç) sadece sonsuz veriyi depolamak değildir; o verileri birbirine bağlayan, anlamlandıran ve soyutlayan o görünmez "bağlantı (köprü)" kapasitesidir.',
    questionStem: 'Kim Peek\'in durumu, "insan zekâsı" kavramını tanımlarken hangi unsurun daha kritik olduğunu göstermektedir?',
    options: [
      'Ezber yeteneğinin ve hızlı okumanın hayatı kolaylaştıran en önemli beceri olduğu',
      'Zekânın sadece saf bilgi ve veriyi devasa oranda depolamak olmadığı; asıl zekânın o bilgileri birbirine bağlamak, soyutlamak ve günlük hayata uyarlayabilmek (köprü kurmak) olduğu',
      'Otizmli bireylerin sanatsal yaratıcılık konusunda diğer insanlardan daha yetenekli olduğu',
      'İnsan beyninin sol yarımküresinin sağ yarımküreden daha önemli işlevlere sahip olduğu'
    ],
    correct: 1,
    explanation: '12.000 kitap ezberlemesine rağmen düğmesini ilikleyememesi veya mecaz anlayamaması; zekânın sadece veri depolamak değil, o verileri bağlamak ve soyutlamak (anlamlandırmak) olduğunu kanıtlar.'
  },
  {
    title: 'Mpemba Etkisi: İnadına Gerçek',
    passage: '1963 yılında Tanzanyalı ortaokul öğrencisi Erasto Mpemba, dondurma yaparken sıcak sütün soğuk sütten daha çabuk donduğunu fark etti. Bu mantıksız durumu lise öğretmenlerine söylediğinde, öğretmenleri onunla alay etti ve "Bu fizik kurallarına aykırı, seninki Mpemba\'nın hayalperest fiziği!" diyerek onu aşağıladılar. Ancak Mpemba pes etmedi ve okula konferansa gelen ünlü fizikçi Denis Osborne\'a aynı soruyu sordu. Osborne gülmedi, laboratuvarda denedi ve şoka girdi: Sıcak su, belirli koşullarda gerçekten de soğuk sudan daha hızlı donuyordu! "Mpemba Etkisi" olarak tıp ve fizik literatürüne giren bu olay; akademik kibrin, ön kabullerin ve "ben bilirim" egosunun, en basit ve saf bir gerçeği (doğa olayını) bile görmezden gelerek kendini nasıl kör ettiğinin en güzel ispatıdır.',
    questionStem: 'Mpemba Etkisi\'nin bilim tarihindeki öyküsü, aslında neyin eleştirisidir?',
    options: [
      'Gelişmekte olan ülkelerdeki laboratuvar ve eğitim koşullarının yetersizliğinin',
      'Suyun termodinamik kurallarına tamamen aykırı, açıklanamaz mistik bir sıvı olmasının',
      'Kurumsallaşmış akademik kibrin ve ön yargıların (dogmaların), saf bir gözleme dayanan basit gerçekleri bile nasıl aşağılayıp körü körüne reddettiğinin',
      'Lise müfredatlarının üniversite eğitimine göre her zaman daha teorik ve pratik dışı kalmasının'
    ],
    correct: 2,
    explanation: 'Öğretmenlerin çocuğun gözlemiyle alay edip onu aşağılaması, ancak çocuğun haklı çıkması; akademik kibrin ve ön yargıların basit bir gerçeğe karşı nasıl körleştiğini eleştirir.'
  },
  {
    title: 'N-Işınları (N-Rays) Yanılgısı',
    passage: '1903 yılında Fransız fizikçi René Blondlot, her maddeden yayılan yepyeni ve gizemli bir ışın bulduğunu iddia etti ve buna "N-Işını" adını verdi. Kısa sürede onlarca ünlü bilim insanı laboratuvarlarında bu ışınları "gördüklerini" onayladılar, makaleler yayınlandı, Fransa bu büyük buluşla gurur duydu. Ta ki Amerikalı fizikçi Robert Wood, Blondlot\'un laboratuvarına gizlice girip, ışınları ölçen cihazın içindeki kritik prizmayı cebine saklayana kadar. Prizma olmamasına (makine bozuk olmasına) rağmen, Blondlot odada hala N-ışınlarını gördüğünü iddia etmeye devam etti! Ortada bir ışın falan yoktu. N-Işınları vakası, bilim insanı bile olsa, insanın görmek istediği şeye o kadar şiddetli inandığında, kendi zihninin yarattığı halüsinasyonları bile gerçek birer veri sanabileceğini (kolektif onaylanma yanlılığını) gösterir.',
    questionStem: 'N-Işınları yanılgısı, bilimsel araştırmaların karşısındaki hangi büyük psikolojik tehlikeyi göz önüne sermektedir?',
    options: [
      'Laboratuvar aletlerinin zamanla kalibrasyonlarının bozulup yanlış veriler üretmesini',
      'Bilim insanlarının sadece para ve şöhret kazanmak için kasıtlı olarak sahte veriler üretmesini',
      'İnsanın (ve bilim camiasının) beklentilerine ve inançlarına o kadar sıkı bağlanması ki, ortada hiçbir fiziksel kanıt yokken bile "görmek istediğini görmesi" (onaylanma yanlılığı/kolektif halüsinasyon) tehlikesini',
      'Amerikalı ve Fransız bilim insanları arasındaki milliyetçi kıskançlığın bilimi durdurmasını'
    ],
    correct: 2,
    explanation: 'Prizma yokken bile ışını gördüğünü iddia etmesi ve onlarca kişinin bunu onaylaması; insanların inanmak istedikleri şeye körü körüne bağlanıp (onaylanma yanlılığı) halüsinasyon görmesi tehlikesini anlatır.'
  },
  {
    title: 'K-T Sınırı: İridyum Anomalisi',
    passage: 'Yıllarca bilim dünyası dinozorların nasıl yok olduğunu tartıştı; volkanlar, iklim krizi veya hastalıklar suçlandı. Fizikçi Luis Alvarez ve oğlu, İtalya\'da dağlardaki kaya katmanlarını incelerken tam da dinozorların yok olduğu 66 milyon yıl öncesine ait incecik, kil gibi bir tabaka buldular. Bu tabakada, Dünya yüzeyinde bulunmayan ancak asteroitlerde bolca bulunan "İridyum" elementi akılalmaz derecede yüksekti. Dünyanın her yerinde tam o tarihte aynı iridyum tozu vardı. Dinozorların yavaşça değil, gökyüzünden düşen devasa bir ateş topuyla (asteroitle) bir gecede yok olduğu bu şekilde kanıtlandı. K-T Sınırı, gezegenimizin kabuğunun aslında devasa ve acımasız bir cinayet günlüğü olduğunu; en apokaliptik kıyametlerin bile sadece bir milimetrelik kozmik bir toz tabakasına sığdırılabileceğini kanıtlar.',
    questionStem: 'K-T Sınırında İridyum bulunmasının anlatıldığı bu parçadan çıkarılacak temel bilimsel (ve felsefi) mesaj nedir?',
    options: [
      'Dinozorların uzaydan gelen radyasyon yüzünden genetik mutasyona uğradığı',
      'Evrendeki elementlerin zamanla dünyadaki dağ oluşumlarını etkilediği',
      'Dünya tarihinin (ve en korkunç kıyametlerin) yeryüzü katmanlarında silinmez bir günlük gibi saklandığı; gökten düşen bir felaketin (asteroidin) bir milimetrelik tozla bile kusursuzca kanıtlanabildiği',
      'İridyum madeninin gelecekteki enerji krizlerini çözebilecek tek element olduğu'
    ],
    correct: 2,
    explanation: '66 milyon yıl önceki bir asteroid çarpmasının kaya katmanındaki incecik iridyum tozuyla kanıtlanması; dünyanın kabuğunun, en büyük kıyametleri bile (toz halinde) kaydeden bir günlük olduğunu gösterir.'
  },
  {
    title: 'Taos Uğultusu (The Taos Hum)',
    passage: 'ABD\'nin New Mexico eyaletindeki Taos kasabasında yaşayan halkın yaklaşık %2\'si, gece gündüz susmayan, derinden gelen, düşük frekanslı dizel bir motor sesine benzer bir uğultu duymaktadır. İşin korkunç tarafı, bölgeye kurulan en hassas mikrofonlar ve dinleme cihazları hiçbir ses dalgası kaydetmemektedir. Uzmanlara göre ortada fiziksel bir ses yoktur. Ancak o %2\'lik kesim, uğultu yüzünden uykusuzluk çekmekte, çıldırmakta ve hatta bazıları intihara sürüklenmektedir. Taos Uğultusu, deliliğin sınırlarında dolaşan bir işkencedir. Dünyanın en dayanılmaz acısı, size fiziksel bir zarar verilmesi değil; beyninizin içinde yankılanan o sağır edici kâbusu, yanınızdaki hiç kimseye (ve bilime) ispatlayamayarak kendi gerçekliğinizin içinde bir mahkûm gibi tek başınıza çırpınmanızdır.',
    questionStem: 'Taos Uğultusu\'nu deneyimleyen insanların asıl psikolojik işkencesi parçada neye bağlanmıştır?',
    options: [
      'Gürültü kirliliğinin kasabadaki ekonomik faaliyetleri tamamen durdurmasına',
      'İnsanların gizli askeri deneyler yapıldığını düşünerek hükümete karşı derin bir paranoya beslemesine',
      'Sesi sadece kendilerinin duyması ve en hassas cihazların bile bunu kaydedememesi nedeniyle; çektikleri acıyı (gerçekliği) kimseye ispatlayamamanın verdiği o yalnızlık ve çaresizlik hissine',
      'Düşük frekanslı seslerin insanlarda kalıcı duyma kaybı (sağırlık) yaratmasına'
    ],
    correct: 2,
    explanation: 'Cihazların bile ölçemediği sesi sadece onların duyması; kendi beynindeki acıyı kimseye ispatlayamamanın getirdiği o korkunç yalnızlık ve çaresizliği (işkenceyi) açıklar.'
  },
  {
    title: 'Deniz Gergedanı (Narval) Boynuzu',
    passage: 'Orta Çağ boyunca Avrupalı krallar, hastalıkları iyileştirdiğine ve zehirleri yok ettiğine inandıkları büyülü "Tekboynuzlu At" (Unicorn) boynuzlarına servet ödüyorlardı. Oysa satın aldıkları şey, Kuzey Buz Denizi\'nde yaşayan Deniz Gergedanlarının (Narval) kafasından uzanan uzun spiral dişti. Narvalın bu dişi savaşmak veya buzu kırmak için değil; üzerinde milyonlarca sinir ucu bulunan, suyun tuzluluğunu, sıcaklığını ve avların hareketini algılamaya yarayan devasa ve aşırı hassas bir duyu organıydı. Yani doğanın gerçeği, insanların uydurduğu efsaneden çok daha büyüleyiciydi. Bu tarihi yanılgı, insanoğlunun; doğanın o mükemmel ve karmaşık mühendisliğini anlamak yerine, onu her zaman kendi mistik ve bencil masallarına (şifa efsanelerine) indirgemeyi seçtiğini gösterir.',
    questionStem: 'Narval dişi (boynuzu) üzerinden yazarın insanlık tarihine yönelttiği eleştiri nedir?',
    options: [
      'Deniz hayvanlarının kürk ve boynuz ticareti için acımasızca katledilmesi',
      'İnsanın, doğanın o karmaşık ve büyüleyici biyolojik mühendisliğini anlamaya çalışmak yerine, cehaletle onu kendi uydurduğu mistik ve bencil masallara (büyülü boynuz efsanesine) alet etmesi',
      'Kuzey Buz Denizi\'ndeki canlıların evrimsel sürecini henüz tam olarak tamamlayamaması',
      'Orta Çağ krallarının bilimden uzaklaşıp tamamen dini dogmalara inanması'
    ],
    correct: 1,
    explanation: 'Milyonlarca sinir uçlu devasa bir duyu organını (muazzam biyolojiyi) anlamayıp onu "sihirli tekboynuzlu at boynuzu" sanarak satın almaları, doğayı mistik masallara (cehalete) indirgeme eleştirisidir.'
  },
  {
    title: 'Faj Tedavisi (Bacteriophage)',
    passage: '1917\'de Felix d\'Herelle, bakterileri yiyip yok eden mikroskobik virüsleri, yani "Bakteriyofajları" keşfetti. Sovyet bilim insanları bu virüsleri kullanarak enfeksiyonları tedavi eden kusursuz bir sistem geliştirdiler. Ancak Soğuk Savaş\'ın Demir Perdesi indiğinde, Batı dünyası Sovyetlerin bu keşfini görmezden geldi ve sadece Penisilini (antibiyotikleri) yüceltti. Bugün antibiyotiklerin aşırı kullanımı yüzünden bakteriler direnç kazandı ve "Süper Bakteriler" insanlığı tehdit ediyor. Batı bilimi çaresizce, yüz yıl önce siyasi inat uğruna çöpe attığı Sovyetlerin o Faj Tedavisine geri dönmeye çalışıyor. Bilim her ne kadar evrensel ve tarafsız olduğunu iddia etse de, çoğu zaman siyasetin, kibrin ve jeopolitik sınırların ördüğü duvarlara çarparak insanlığın kurtuluşunu onlarca yıl geciktirebilen tutsak bir sistemdir.',
    questionStem: 'Faj Tedavisinin batı dünyasında yüzyıl sonra tekrar gündeme gelmesi, bilim hakkında hangi gerçeği ortaya koymaktadır?',
    options: [
      'Antibiyotiklerin aslında insan sağlığı için hiçbir zaman faydalı bir buluş olmadığı gerçeğini',
      'Bilimin her zaman tamamen tarafsız, evrensel ve bağımsız olduğu yönündeki o idealize edilmiş inancı',
      'Bilimin ve hayat kurtaran icatların bile; siyasi rekabet, kibir ve jeopolitik düşmanlıklar (Soğuk Savaş) yüzünden nasıl görmezden gelinip insanlığın zararına geciktirilebildiğini',
      'Virüslerin bakterilere oranla laboratuvar ortamında çok daha hızlı mutasyona uğradığını'
    ],
    correct: 2,
    explanation: 'Sovyet keşfi olduğu için Batı\'nın yüz yıl boyunca Faj tedavisini görmezden gelmesi; bilimin tarafsız olmadığını, siyasi kibir ve sınırlarla kısıtlandığını/geciktirildiğini kanıtlar.'
  },
  {
    title: 'Drake Denklemi: Kozmik Yalnızlığın Matematiği',
    passage: '1961 yılında astrofizikçi Frank Drake, evrende bizimle iletişim kurabilecek uzaylı medeniyetlerin sayısını tahmin etmek için bir denklem yazdı. Bu denklemde galaksideki yıldız oluşum hızını, gezegen barındıran yıldızları ve o gezegenlerde zeki yaşamın gelişme ihtimallerini çarptı. Ancak Drake\'in amacı kesin bir "sayı" bulmak değildi; çünkü denklemdeki değişkenlerin çoğu tamamen bizim tahminlerimize (cehaletimize) bağlıydı. Denklemin asıl büyüleyici tarafı şuydu: Evrenin derinliklerine bakarken sorduğumuz o "Yapayalnız mıyız?" şeklindeki felsefi çığlığımızı, ilk defa rasyonel bir çarpım tablosuna ve bilimsel bir çerçeveye oturtmuştu. Drake Denklemi, cevabı olmayan bir matematik problemi değil; insanın kozmik yalnızlığının ve sınır tanımayan merakının formüle dökülmüş bir aynasıdır.',
    questionStem: 'Drake Denklemi\'nin bilim tarihindeki asıl felsefi/sembolik önemi parçada nasıl açıklanmıştır?',
    options: [
      'Gelecek 50 yıl içinde uzaylılarla kesin olarak iletişim kurulacağını matematiksel olarak kanıtlaması',
      'Rakamlardan kesin bir sonuç (sayı) elde etmekten ziyade, insanoğlunun evrendeki yalnızlık ve zeki yaşam arayışı (merakı) gibi derin felsefi sorunlarını rasyonel/bilimsel bir çerçeveye oturtması',
      'Güneş sistemindeki yıldızların yaşlarını çok daha hassas bir şekilde ölçmeye olanak tanıması',
      'Dünya dışı yaşamı araştırmanın astronomi için bir zaman kaybı olduğunu istatistiklerle ispatlaması'
    ],
    correct: 1,
    explanation: 'Denklemin asıl amacının kesin bir sayı bulmak değil, "yapayalnız mıyız?" felsefi çığlığını rasyonel/bilimsel bir çerçeveye oturtmak (merakın formülü olmak) olduğu açıkça belirtilmiştir.'
  },
  {
    title: 'Kör Saatçi (Blind Watchmaker)',
    passage: 'Bir çölde yürürken yerde tıkır tıkır çalışan karmaşık bir cep saati bulursanız, bunun zeki bir saatçi tarafından tasarlandığını bilirsiniz. Ancak evrimsel biyolog Richard Dawkins, "Kör Saatçi" kavramıyla doğadaki o kusursuz canlıları (örneğin insan gözünü) açıklarken bu mantığı reddeder. Doğanın bir planı, bir mühendislik çizimi veya geleceğe dair bir hedefi yoktur. Evrim, deneme yanılma yoluyla, tamamen rastgele mutasyonları acımasız bir doğal seçilim süzgecinden geçirerek ilerler. İşine yarayanı tutar, yaramayanı acımasızca çöpe atar (yok eder). Gördüğümüz o "kusursuz tasarım" illüzyonu, aslında kör, bilinçsiz ve milyonlarca yıl süren bir katliam ve ayıklanma sürecinin hayatta kalan son şanslı bakiyesidir.',
    questionStem: 'Richard Dawkins\'in "Kör Saatçi" metaforu, doğadaki "kusursuzluk" algısını nasıl açıklamaktadır?',
    options: [
      'Canlıların vücut yapılarının sanıldığından çok daha basit ve ilkel bir işleyişe sahip olduğu gerçeğiyle',
      'Doğanın, her canlıyı gelecekte karşılaşacağı tehlikelere karşı önceden (zeki bir planla) tasarladığı düşüncesiyle',
      'Kusursuz gibi görünen tasarımların ardında zeki bir plancının değil; milyonlarca yıllık rastgele deneme-yanılma ve acımasız doğal seçilim (kör bir ayıklanma) sürecinin yattığıyla',
      'Hayvanların göz yapılarının insanların inşa ettiği saatlerden daha karmaşık bir mekanizmaya sahip olmasıyla'
    ],
    correct: 2,
    explanation: 'Cep saati örneğine karşı çıkarak, doğadaki kusursuzluğun zeki bir tasarımdan değil; rastgele mutasyonların kör/bilinçsiz ve acımasız bir doğal seçilimle ayıklanmasından doğduğunu savunur.'
  },
  {
    title: 'Alfred Wegener ve Pangea',
    passage: '1912 yılında meteorolog Alfred Wegener, bir dünya haritasına bakarken Güney Amerika ile Afrika\'nın kıyılarının tıpkı bir yapbozun parçaları gibi birbirine uyduğunu fark etti. Dünyanın eskiden "Pangea" adlı tek bir süper kıta olduğunu ve kıtaların yavaşça birbirinden ayrıldığını (Kıta Kayması Teorisi) savundu. Dönemin kibirli jeologları, "Bir meteorolog bize kayaları öğretemez!" diyerek onunla alay ettiler ve teorisini çöpe attılar. Wegener, teorisini kanıtlayacak deliller bulmak için Grönland buzuluna gittiğinde donarak öldü. Ölümünden on yıllar sonra, deniz tabanı ölçümleri ve tektonik levhaların keşfi onu haklı çıkardı. Wegener\'in trajedisi, akademik kurumların (diploma kibrinin), alan dışından gelen dâhiyane bir fikri sırf "unvanı uymuyor" diye nasıl boğup ölüme terk ettiğinin en soğuk kanıtıdır.',
    questionStem: 'Alfred Wegener\'in Kıta Kayması teorisinin reddedilme süreci, akademik dünyayla ilgili hangi kusuru (hastalığı) göz önüne sermektedir?',
    options: [
      '1900\'lü yıllarda harita çizim tekniklerinin çok hatalı olması nedeniyle bilim insanlarının yanılgıya düşmesini',
      'Bilimsel kurumların hakikate odaklanmak yerine; alan dışından gelen yenilikçi fikirleri sırf unvan (diploma) kibri yüzünden körü körüne reddeden o dogmatik ve dışlayıcı (tutucu) yapısını',
      'Meteoroloji biliminin o dönemde henüz geçerli bir akademik disiplin olarak kabul edilmemesini',
      'Grönland gibi soğuk bölgelerde bilimsel araştırmaların devlet tarafından yasaklanmış olmasını'
    ],
    correct: 1,
    explanation: 'Jeologların sırf o bir "meteorolog" diye doğru teorisini (unvan kibriyle) aşağılayıp çöpe atması; akademik dünyanın hakikate değil dogmatik/dışlayıcı bir unvan kibrine sahip olduğunu eleştirir.'
  }
];

export const bilimParagrafSorulari19: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_19.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_19[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim19-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_20 = [
  {
    title: 'Kötülüğün Sıradanlığı (Banalitenin Kötülüğü)',
    passage: 'Siyaset bilimci Hannah Arendt, milyonlarca Yahudi\'nin ölüm kamplarına gönderilmesini organize eden Nazi subayı Adolf Eichmann\'ın mahkemesini izlediğinde büyük bir şok yaşadı. Karşısında kana susamış, şeytani bir canavar ya da sadist bir psikopat görmeyi bekliyordu. Oysa Eichmann, son derece nazik, sıkıcı, sıradan ve sadece "kendisine verilen bürokratik emirleri yerine getiren" silik bir memurdu. Arendt, bu dehşet verici durumu "Kötülüğün Sıradanlığı" olarak adlandırdı. Tarihin en büyük katliamları, gözü dönmüş şeytanlar tarafından değil; kendi aklını ve vicdanını otoriteye teslim eden, sorgulamadan itaat eden ve görevini iyi yapmaktan başka bir şey düşünmeyen o "sıradan" ve renksiz kravatlılar tarafından gerçekleştirilir.',
    questionStem: 'Hannah Arendt\'in "Kötülüğün Sıradanlığı" kavramı, büyük insanlık suçlarının kökenini neye bağlamaktadır?',
    options: [
      'Toplumdaki psikopat ve sosyopat bireylerin zamanla devletin kilit noktalarına sızmasına',
      'Kötülüğün, şeytani ve sadist bir canavarlıktan ziyade; aklını, vicdanını ve sorgulama yetisini otoriteye (emirlere) körü körüne teslim eden o sıradan (bürokratik) itaatten doğmasına',
      'Savaş dönemlerinde insanların genetik olarak daha saldırgan bir evrim geçirmesine',
      'Hapishane sistemlerinin suçluları rehabilite etmekte tamamen yetersiz kalmasına'
    ],
    correct: 1,
    explanation: 'Eichmann\'ın bir canavar değil sıradan bir memur olması; en büyük kötülüklerin şeytani sadizmden değil, vicdanı otoriteye devreden kör/sıradan itaatten doğduğunu gösterir.'
  },
  {
    title: 'Simülasyon Hipotezi',
    passage: 'Filozof Nick Bostrom\'un "Simülasyon Hipotezi" zihinleri felç eden bir matematiksel ihtimale dayanır. Teknoloji sürekli gelişmektedir. Gelecekteki torunlarımızın, geçmişteki atalarının (yani bizim) hayatlarını birebir simüle eden devasa, ultra-gerçekçi bilgisayar oyunları yaratacaklarını varsayalım. Eğer bu doğruysa, evrende 1 tane "gerçek (fiziksel)" dünya, ama milyarlarca "simüle edilmiş (sanal)" dünya olacaktır. İstatistiksel olarak, milyarlarca sanal dünyadan birinde değil de, o tek ve yegâne "gerçek" dünyada yaşıyor olma ihtimalimiz neredeyse sıfırdır! Duyu organlarımızın bize sunduğu bu ter, gözyaşı, aşk ve yıldızlar, büyük ihtimalle gelişmiş bir uygarlığın sabit diskinin içinde dönen kusursuz birer kod satırından ibarettir.',
    questionStem: 'Simülasyon Hipotezi\'nin "bizim bir bilgisayar kodunda yaşadığımız" sonucuna varmasındaki asıl bilimsel (mantıksal) dayanak nedir?',
    options: [
      'Güneş sistemindeki gezegenlerin matematiksel olarak mükemmel bir yörüngeye sahip olması',
      'Gelecekte yaratılacak sayısız (milyarlarca) kusursuz simülasyon evrenine kıyasla, "tek bir gerçek (fiziksel)" evrende yaşıyor olma ihtimalimizin istatistiksel olarak neredeyse sıfır olması',
      'Uyku sırasında gördüğümüz rüyaların bazen gerçek hayattan daha inandırıcı olması',
      'İnsan beyninin elektrik sinyalleriyle çalışmasının bilgisayar işlemcilerini andırması'
    ],
    correct: 1,
    explanation: 'Milyarlarca sanal evrenin yaratılma ihtimaline karşı tek bir gerçek evren olması; istatistiksel olarak bizim o milyarlarca sanal evrenden birinde olduğumuz (gerçekte olmadığımız) mantığına dayanır.'
  },
  {
    title: 'Ölümsüz Denizanası (Turritopsis dohrnii)',
    passage: 'Doğadaki her canlı doğar, büyür, yaşlanır ve ölür. Ancak "Turritopsis dohrnii" adındaki küçücük bir denizanası, biyolojinin bu en acımasız kanununu (ölümü) hacklemeyi başarmıştır. Bu canlı fiziksel olarak zarar gördüğünde, hastalandığında veya çok yaşlandığında ölmez; bunun yerine hücrelerini hücresel bir zaman makinesi gibi yeniden programlayarak gelişimini tersine çevirir. Yani yaşlı bir denizanasıyken, tekrar bir bebeğe (polip evresine) döner ve hayatına sıfırdan başlar. İnsanoğlu laboratuvarlarda milyarlarca dolar harcayarak ömrünü birkaç yıl uzatmaya çalışırken, okyanusun dibindeki beyinsiz ve minicik bir denizanası, biyolojik ölümsüzlüğün şifresini milyonlarca yıl önce çözmüş ve evrenin en büyük kuralıyla sessizce alay etmiştir.',
    questionStem: 'Ölümsüz Denizanası\'nın hayatta kalma mekanizması (kuralı), insanlık ve biyoloji bağlamında neyi temsil eder?',
    options: [
      'Okyanusların derinliklerindeki su basıncının yaşlanmayı durduran bir etkiye sahip olduğunu',
      'Evrimsel süreçte omurgasız canlıların memelilere göre çok daha zeki bir yapıya ulaştığını',
      'Yaşlanmanın ve ölümün tüm canlılar için kaçınılmaz (mutlak) bir son olduğu yönündeki en büyük biyolojik kanunun kırılabilir (esnetilebilir) bir yanılsama olduğunu',
      'İnsanların genetik kodlarını deniz canlılarıyla birleştirerek ölümsüzlüğü bulabileceğini'
    ],
    correct: 2,
    explanation: 'Denizanasının yaşlanınca tekrar bebeğe dönüp ölümü atlaması; ölümün ve yaşlanmanın doğadaki tüm canlılar için mutlak/kaçınılmaz bir son olduğu (en büyük kuralın) kırılabildiğini temsil eder.'
  },
  {
    title: 'Luddit İsyanı: Makinelere Karşı İnsan',
    passage: '19. yüzyılın başlarında İngiltere\'de tekstil fabrikalarına giren buharlı dokuma tezgâhları, binlerce el işçisini işsiz bırakmıştı. Gizemli bir lider olan "General Ludd"un ismini kullanan işçiler, geceleri yüzlerine maskeler takarak fabrikaları basıp o devasa makineleri balyozlarla paramparça etmeye başladılar. Tarih kitapları "Ludditleri" genellikle teknoloji düşmanı, cahil ve gelişime karşı duran gericiler olarak anlatır. Oysa onlar makinenin icadına veya teknolojiye değil; makinenin, insan emeğini değersizleştirmesine, onları köleleştiren vahşi kapitalizme ve ruhsuz bir seri üretime karşı isyan ediyorlardı. Ludditler, insanın etten ve kemikten varlığının (haysiyetinin), soğuk metal çarklara kurban edilmesine karşı atılmış ilk görkemli ve haklı çığlıktır.',
    questionStem: 'Luddit İsyanı ile ilgili tarih kitaplarındaki yaygın algı ile yazarın asıl yorumu arasındaki fark nedir?',
    options: [
      'Tarih kitaplarının isyanı başarılı gösterirken, yazarın bunun kanlı bir fiyasko olduğunu savunması',
      'Tarih kitaplarının onları "teknoloji düşmanı (cahil)" olarak sunmasına karşın; yazarın onları vahşi kapitalizme, sömürüye ve insan onurunun makinelere ezdirilmesine karşı haklı bir isyan olarak yorumlaması',
      'Tarihçilerin General Ludd\'u gerçek bir asker sanması, yazarın ise onun hayali bir karakter olduğunu kanıtlaması',
      'Tarihin isyancıları haklı bulması, yazarın ise fabrikatörleri ve seri üretimi savunması'
    ],
    correct: 1,
    explanation: 'Metinde tarih kitaplarının onları cahil teknoloji düşmanı gördüğü, ancak yazarın onları sömürüye ve insan emeğinin değersizleşmesine (kötü kapitalizme) isyan eden onurlu bir direniş olarak yorumladığı belirtilmiştir.'
  },
  {
    title: 'Zamanın Oku ve Entropi',
    passage: 'Eğer elinizdeki bir bardağı yere düşürürseniz binlerce parçaya ayrılır. Ancak o parçaların kendiliğinden havaya yükselip tekrar kusursuz bir bardak oluşturduğunu asla göremezsiniz. Sıcak kahvenize soğuk süt dökerseniz birbirine karışır, ancak bir saat beklerseniz süt ve kahve kendi kendine ayrışmaz. Fizikte buna "Zamanın Oku" veya "Entropi" (Düzensizlik) denir. Evrenin en temel yasası şudur: Her şey, düzenden (bir bütünlükten) kaosa ve düzensizliğe (parçalanmaya) doğru akar. Zamanın sadece ileriye, yaşlanmaya ve yıkıma doğru akmasının tek sebebi bu evrensel çürüme kuralıdır. Evren, devasa ve görkemli bir saat gibi kurulmuştur, ancak doğduğu günden beri o saat saniye saniye paslanarak ve dağılarak (entropiyle) kendi karanlık ölümüne doğru ilerlemektedir.',
    questionStem: 'Zamanın Oku (Entropi) kavramının felsefi ve fiziksel evren tasarımındaki asıl karşılığı nedir?',
    options: [
      'Gelecekteki zaman makinelerinin sadece geçmişe doğru yolculuk yapabilmesine olanak tanıması',
      'Evrendeki her şeyin kendi doğası gereği mükemmelliğe (düzene) değil, kaçınılmaz bir parçalanmaya, kaosa ve tek yönlü bir çürümeye (yıkıma) doğru ilerlemesi',
      'Zamanın hızının yerçekimine bağlı olarak farklı gezegenlerde değişmesi',
      'Sıvıların ve katıların atomik yapılarının hiçbir şekilde birbiriyle karıştırılamaması'
    ],
    correct: 1,
    explanation: 'Bardağın kırılıp birleşmemesi, kahvenin ayrışmaması; evrenin (ve zamanın) mükemmelliğe değil, kaçınılmaz bir kaosa, düzensizliğe ve çürümeye (entropiye) doğru aktığını gösterir.'
  },
  {
    title: 'Hanlon\'un Usturası (Hanlon\'s Razor)',
    passage: 'Bir arkadaşınız mesajınıza saatlerce cevap vermediğinde zihniniz hemen karanlık senaryolar üretir: "Bana kasten trip atıyor, beni sevmiyor veya bana saygısızlık yapıyor." Felsefedeki "Hanlon\'un Usturası" prensibi bu paranoyayı kesip atar: "Aptallıkla (veya dikkatsizlikle) yeterince açıklanabilen bir durumu, asla kötü niyete bağlama." Belki de arkadaşınızın sadece şarjı bitmiş, telefonu sessizde kalmış veya mesajı görüp cevap yazmayı "unutmuş" bir dikkatsizdir. İnsan beyni, çevresindeki olayları kendisine yapılmış kasıtlı birer saldırı (komplo) olarak algılamaya (narsisizme) meyillidir. Oysa dünyadaki acıların ve hataların çoğu, insanların karanlık birer şeytan olmasından değil; sadece yorgun, dalgın veya kendi hayatının telaşı içinde bocalayan sakar (basit) faniler olmasından kaynaklanır.',
    questionStem: 'Hanlon\'un Usturası prensibinin insan ilişkilerine getirdiği temel çözümleme (bakış açısı) nedir?',
    options: [
      'Mesajlara geç cevap vermenin modern toplumda psikolojik şiddet olarak kabul edildiği',
      'Kötü gibi görünen olayların ardında şeytani bir kasıt (kötü niyet) aramak yerine, bunların genellikle sıradan bir ihmalkârlık, dalgınlık veya basit bir hatadan kaynaklandığını (paranoyayı bırakmayı) kabul etmek',
      'İnsanların her zaman kötü niyetli ve çıkarcı varlıklar olduğunu varsayarak tedbirli davranmak',
      'Zeki insanların asla dikkatsizlik yapmayacağı ve tüm adımlarını planlayarak attığı'
    ],
    correct: 1,
    explanation: '"Aptallıkla/dikkatsizlikle açıklanabileni kötü niyete bağlama" sözü; olayların ardında narsisistik komplo ve kasıt aramak yerine, insanların sadece dalgın veya ihmalkâr olabileceğini (paranoyayı kesmeyi) açıklar.'
  },
  {
    title: 'Aura ve Mekanik Yeniden Üretim (Walter Benjamin)',
    passage: 'Leonardo da Vinci\'nin Mona Lisa\'sını Louvre Müzesi\'nde orijinal haliyle kendi gözlerinizle görmek, mistik ve tüyler ürpertici bir deneyimdir. Ancak aynı tablonun milyonlarca kez basılmış halini bir kahve kupasının, tişörtün veya bir bilgisayar ekranının üzerinde gördüğünüzde hiçbir şey hissetmezsiniz. Filozof Walter Benjamin, 1936\'da kaleme aldığı eserinde bu durumu "Aura\'nın (Halenin) Yitimi" olarak açıklar. Bir sanat eserinin orijinali, o anın tarihini, mekânını ve yaratıcısının ruhunu (Aurasını) barındıran eşsiz ve kutsal biricikliğe sahiptir. Ancak teknoloji ve fotoğraf makineleri o eseri milyonlarca kez "mekanik olarak yeniden ürettiğinde", eser kitlelere ulaşır ama o mistik ruhunu, "biricikliğini" ve kutsallığını kaybedip sıradan bir tüketim nesnesine (çöpe) dönüşür.',
    questionStem: 'Walter Benjamin\'in "Aura" kavramına göre, sanat eserlerinin mekanik olarak kopyalanması (çoğaltılması) nasıl bir sonuç doğurur?',
    options: [
      'Sanatın sadece elit ve zengin sınıfların tekelinden çıkarak tamamen demokratikleşmesini ve değerinin artmasını',
      'Eserin daha çok kitleye ulaşmasını sağlasa da, onun o tarihselliğini, kutsallığını ve eşsiz (biricik) ruhunu (Aura\'sını) yok ederek onu sıradan bir meta (tüketim) nesnesi haline getirmesini',
      'Ressamların artık tablo çizmek yerine dijital sanatlara ve fotoğrafçılığa yönelmesini',
      'Mona Lisa tablosunun orijinalinin müzelerde çok daha iyi güvenlik önlemleriyle korunmasını'
    ],
    correct: 1,
    explanation: 'Orijinal eserin mistik ruhunun (Aurasının) milyonlarca kez kopyalanmasıyla yok olması; eserin eşsizliğini kaybedip sıradan bir tüketim nesnesine dönüştüğünü vurgular.'
  },
  {
    title: 'Nükleer Semiyotik (Geleceği Uyarmak)',
    passage: 'Radyoaktif atıkların tehlikesi 10.000 yıl sürmektedir. Bilim insanları şu dehşet verici soruyla karşılaştı: 10 bin yıl sonra dünyada bugünkü diller konuşulmayacak, tabelaları kimse anlamayacak. O halde gelecekteki insanları o nükleer gömütleri kazmamaları için nasıl uyaracağız? "Nükleer Semiyotik" (Göstergebilim) adındaki bir komite kuruldu. O gömütlerin üzerine dikilen "Kurukafa" işaretlerinin bile 10 bin yıl sonra "Burada korsan hazinesi var" sanılıp kazılabileceği anlaşıldı. Çözüm olarak; o arazilerin üzerine siyah devasa dikenler inşa etmek, toprak rengini kızıla boyamak veya radyasyona yaklaştığında derisi parlayan "fosforlu kediler" üretmek (ve bunu dini bir mitolojiye dönüştürmek) bile tartışıldı. İnsanoğlu, kendi elleriyle ürettiği ölümcül çöpün tehlikesini, torunlarının torunlarına (geleceğe) aktaracak kadar bile yeterli bir kültürel köprüye (ve garantili bir dile) sahip değildir.',
    questionStem: 'Nükleer Semiyotik projesinin ortaya koyduğu felsefi ve pratik çaresizlik nedir?',
    options: [
      'Nükleer atıkların yerin altına gömülmesinin toprağı zehirlemesi',
      'Kedilerin genetiğiyle oynamanın ahlaki ve etik değerlere aykırı olması',
      'Kültürlerin ve dillerin zamanla tamamen yok olduğu gerçeği karşısında; bugünün en tehlikeli mesajını (nükleer ölümü) on bin yıl sonrasının medeniyetine (geleceğe) aktarabilecek evrensel, kalıcı ve kesin bir işaret (dil) bulmanın imkânsızlığı',
      'Gelecekte insanların tamamen okuma yazma yeteneğini kaybederek ilkel çağlara dönecek olması'
    ],
    correct: 2,
    explanation: 'Kurukafa işaretinin bile "hazine" sanılabilecek olması ve dilin yok olması; çok uzun bir geleceğe (10 bin yıl) tehlike mesajı iletecek evrensel/kalıcı bir dil veya işaret (iletişim) bulmanın imkânsızlığını gösterir.'
  },
  {
    title: 'Paris Sendromu: Kırılan Hayaller',
    passage: 'Her yıl Fransa\'ya giden düzinelerce Japon turist, Paris sokaklarında aniden nefes darlığı çekip bayılır, halüsinasyonlar görür ve şiddetli bir panik atak krizi geçirerek acilen ülkelerine gönderilir. Psikiyatride buna "Paris Sendromu" denir. Filmlerle, romanlarla ve dergilerle kafalarında "Her sokağında romantik müziklerin çaldığı, herkesin şık giyindiği ve parfüm kokan" kusursuz bir Paris ütopyası yaratmışlardır. Ancak şehre geldiklerinde kaba garsonlar, kirli metro istasyonları, hırsızlar ve sokak fareleriyle karşılaşırlar. İdealleştirilen (kutsanan) o kurgusal gerçeklik ile, sokağın o çirkin ve sıradan hakikati (hayal kırıklığı) arasındaki uçurum öylesine derindir ki; zihin bu ağır çarpışmayı kaldıramaz ve kelimenin tam anlamıyla psikolojik olarak iflas eder (çöker).',
    questionStem: 'Paris Sendromu\'nun temelini oluşturan psikolojik şokun asıl kaynağı nedir?',
    options: [
      'Japon turistlerin uzun süren uçak yolculukları (jetlag) nedeniyle yaşadıkları fiziksel yorgunluk',
      'Paris halkının Japon turistlere karşı ırkçı ve dışlayıcı bir tutum sergilemesi',
      'Zihinde medya aracılığıyla aşırı idealleştirilmiş (kutsanmış ve kusursuzlaştırılmış) bir kurgunun (beklentinin), sokaktaki o kaba ve sıradan gerçeklikle çarpışmasının zihinde yarattığı ağır (kaldırılamaz) yıkım',
      'Tarihi binaların devasa boyutlarının insanlarda klostrofobik bir etki yaratması'
    ],
    correct: 2,
    explanation: 'Filmlerden öğrenilen kusursuz romantik kurgunun (beklentinin), kirli metrolar ve kaba garsonlarla (gerçeklikle) çarpışmasının yarattığı büyük hayal kırıklığı ve zihinsel iflas anlatılmaktadır.'
  },
  {
    title: 'Büyük Filtre (The Great Filter)',
    passage: 'Fermi Paradoksu\'na (Uzaylılar nerede?) verilen en kan dondurucu yanıt "Büyük Filtre" teorisidir. Buna göre; evrende zeki bir medeniyetin doğup galaksiler arası bir imparatorluğa dönüşmesinin önünde aşılması neredeyse imkânsız olan, ölümcül bir evrimsel bariyer (Büyük Filtre) vardır. Eğer uzayda başka hiçbir canlı göremiyorsak, önümüzde iki seçenek kalır: Birincisi, insanlık olarak o imkânsız filtreyi (belki de tek hücreliden çok hücreliye geçişi) çoktan aşıp kurtulmuş tek ve en şanslı (yegâne) tür bizizdir. Ancak korkunç olan ikinci ihtimaldir: Belki de o filtre henüz önümüzdedir. Yani medeniyetler nükleer silahları icat ettikten veya yapay zekâyı bulduktan sonra (bizim şu anki aşamamızda) o filtreye çarpıp kendilerini yok ediyorlardır. Eğer Mars\'ta ölü bir medeniyetin kalıntısını (fosil) bulursak sevinmemeliyiz, dehşete düşmeliyiz; çünkü bu, filtrenin (kendi kıyametimizin) hala önümüzde bizi beklediğinin kesin kanıtı olur.',
    questionStem: 'Büyük Filtre teorisine göre, uzayda başka zeki medeniyetlerin (fosillerin) bulunmasının insanlık için "dehşet verici (kötü)" bir haber olmasının nedeni nedir?',
    options: [
      'Uzaylı fosillerinden dünyaya ölümcül (ve tedavisi olmayan) virüslerin taşınma ihtimali',
      'Uzaylıların hala yaşıyor olma ve dünyayı işgal etme (sömürgeleştirme) ihtimalini güçlendirmesi',
      'Başka medeniyetlerin de bizim seviyemize ulaştıktan sonra yok olduğunu görmenin; o ölümcül yıkım bariyerinin (filtrenin) bizim arkamızda değil, bizi yok etmek üzere önümüzde beklediğini (kıyametimizin yakın olduğunu) kanıtlayacak olması',
      'Dinlerin ve felsefenin uzaylıların varlığı karşısında tamamen anlamını yitirmesi'
    ],
    correct: 2,
    explanation: 'Başka medeniyet fosili bulmak, onların da bizim gibi gelişip sonra yok olduğunu gösterir; bu da onları yok eden filtrenin/bariyerin bizim de başımıza geleceğini (kıyametimizin önümüzde olduğunu) kanıtlayacağı için dehşet vericidir.'
  },
  {
    title: 'Cassini\'nin Büyük Finali (Grand Finale)',
    passage: 'NASA\'nın "Cassini" uzay aracı, tam 13 yıl boyunca Satürn\'ün etrafında dolanıp insanlığa muazzam fotoğraflar gönderdi. Ancak 2017\'de yakıtı bitmek üzereydi. NASA, uzay aracını uzayın derinliklerine terk etmek yerine duygusal ve "etik" bir karar aldı. Satürn\'ün uydularından biri olan Enceladus\'ta sıvı su okyanusları ve potansiyel (mikroskobik) bir uzaylı yaşamı olma ihtimali vardı. Eğer Cassini başıboş bırakılırsa bir gün tesadüfen o uyduya çarpabilir ve Dünya\'dan taşıdığı bakterilerle (kirle) o el değmemiş uzaylı ekosistemini yok edebilirdi. Bu yüzden bilim insanları, Cassini\'yi bilerek ve isteyerek Satürn\'ün zehirli gaz bulutlarına daldırıp (Büyük Final) bir meteor gibi yanarak (intihar ederek) yok olmasını emrettiler. İnsanoğlu, milyarlarca dolarlık metal kahramanını, evrendeki o el değmemiş ve savunmasız (mikroskobik) yaşama zarar vermemek uğruna kendi elleriyle ateşe (kıyamete) göndermiştir.',
    questionStem: 'Cassini uzay aracının görevine "kasıtlı olarak yakılarak" son verilmesinin altında yatan asıl ahlaki (bilimsel) motivasyon nedir?',
    options: [
      'Cassini\'nin topladığı gizli bilgilerin uzaylıların eline geçmesini engellemek',
      'Satürn\'ün atmosfer yapısını (gazları) yok olduğu o son saniyede ölçebilmek için yapılmış soğukkanlı bir mühendislik deneyi olması',
      'Satürn\'ün uydusundaki o el değmemiş olası uzaylı yaşam alanını, Dünya\'dan giden kirlilik veya bakterilerle (insan hatasıyla) yok etmeme sorumluluğu ve gezegensel (etik) bir saygı (koruma) güdüsü',
      'Uzay aracının Dünya yörüngesine girip şehirlere düşmesini engellemek'
    ],
    correct: 2,
    explanation: 'Aracın başıboş kalıp Enceladus\'taki olası yaşama Dünya bakterisi bulaştırmaması (o ekosistemi kirletmemesi) için bilerek yakılması, bilimsel ve evrensel bir koruma etiği/saygısıdır.'
  },
  {
    title: 'Antropik İlke (Anthropic Principle)',
    passage: 'Evrenin fizik kuralları o kadar hassas bir ayardadır ki; yerçekimi binde bir oranında daha güçlü olsaydı yıldızlar doğmadan çökerdi, biraz daha zayıf olsaydı gezegenler asla bir araya gelemezdi. Peki evren neden bizim yaşamamız için bu kadar "kusursuzca" ayarlanmıştır? Bilim insanları buna "Antropik İlke" der. Bu ilkeye göre evren bizim için özel olarak ayarlanmamıştır; tam tersine, biz bu evren "tam da böyle olduğu için" varız ve bu soruyu sorabiliyoruz! Kusursuz olmayan milyarlarca başarısız evren zaten ölmüştür ve içinde bunu soracak kimse yoktur. Sadece kazananların hayatta kaldığı bir oyunda, kazananın "Şansım ne kadar da kusursuzmuş!" demesi gibi; biz de kendi varoluşumuzu bir mucize sanırız, oysa biz o tesadüfi fizik denklemlerinin tuttuğu piyangonun tek ve zorunlu sonucuyuz.',
    questionStem: 'Antropik İlke kavramı, evrenin "insan yaşamı için kusursuzca ayarlandığı" inancına karşı nasıl bir felsefi/mantıksal itiraz sunmaktadır?',
    options: [
      'Evrenin tasarımının arkasında mutlaka bilinçli ve ulu bir mühendislik zekâsı bulunduğunu ispatlayarak',
      'Dünyanın evrenin fiziksel (coğrafi) merkezi olduğunu ve güneş sisteminin diğerlerinden farklı çalıştığını iddia ederek',
      'Evrenin bizim için özel ayarlanmadığını, aksine "zaten bu şartlar (rastgele) uygun olduğu için" bizim var olup (bu soruyu sorabilecek bilince ulaşıp) bu durumu kendi narsisizmimizle bir mucize sanma yanılgısını (sonucun sebebi belirlediğini) vurgulayarak',
      'Gelecekte yerçekimi gibi kanunların değişeceğini ve insanlığın yok olacağını öngörerek'
    ],
    correct: 2,
    explanation: 'Evrenin bizim için ayarlanmadığını, zaten ayar tesadüfen böyle olduğu için bizim var olup "ne mucizevi" diye bu soruyu sorabildiğimizi (mucize yanılgısını) açıklar.'
  },
  {
    title: 'Frankenstein Kompleksi',
    passage: 'Bilimkurgu edebiyatının babası Isaac Asimov, "Frankenstein Kompleksi" terimini, insanın yarattığı makinelere veya yapay zekâya karşı duyduğu o derin, evrimsel korkuyu anlatmak için kullanır. Mary Shelley\'nin romanında Doktor Frankenstein, ölü parçalardan yarattığı canavarın kendi kontrolünden çıkıp onu yok edeceğinden korkar. Aynı şekilde günümüzde biz de, ürettiğimiz bilgisayarların (Yapay Zekânın) bir gün "uyanarak" bizi gereksiz göreceğinden, fişimizi çekeceğinden ve yarattığımız o metalik tanrının kurbanı olacağımızdan dehşet duyarız. Bu korku makinelerle ilgili değildir; insanın kendi yaratıcılık hırsının (kibrinin) kontrolden çıkıp eninde sonunda kendi varoluşunu (yaratıcısını) cezalandıracağına dair duyduğu o kadim ve mitolojik suçluluk duygusudur.',
    questionStem: 'Asimov\'un tanımladığı "Frankenstein Kompleksi"nin merkezinde yatan asıl psikolojik (ve felsefi) korku nedir?',
    options: [
      'Makinelerin insan duygularına (aşk, merhamet) sahip olarak aşırı hassas ve kırılgan bir yapıya bürünmesi',
      'Teknolojinin işçi sınıfını fabrikalardan tamamen atarak küresel çapta bir ekonomik buhrana (işsizliğe) yol açacağı korkusu',
      'İnsanın, kendi aklıyla ve kibriyle yarattığı gücün (yapay zekânın/makinenin) kontrolünden çıkıp onu ezeceğine (yaratıcının yaratılan tarafından yok edileceğine) duyulan o kadim korku ve suçluluk hissi',
      'Modern tıbbın ölüleri diriltmek gibi etik olmayan genetik müdahaleler yapması'
    ],
    correct: 2,
    explanation: 'Doktorun kendi yarattığı canavar tarafından yok edilme korkusunun (ve kibrinin cezalandırılmasının), insanın makineler/AI tarafından yok edilme korkusuna (yaratıcının yarattığına yem olması) eşdeğer olduğu belirtilmiştir.'
  },
  {
    title: 'Tarihin Sonu Yanılgısı (Fukuyama)',
    passage: '1989 yılında Soğuk Savaş biterken ve Berlin Duvarı yıkılırken, siyaset bilimci Francis Fukuyama "Tarihin Sonu" adında kibirli bir makale yazdı. Ona göre; faşizm ve komünizm gibi ideolojiler yenilmiş, Batı\'nın Liberal Demokrasisi nihai ve tartışılmaz bir zafer kazanmıştı. Artık dünyada ideolojik savaşlar olmayacak, tüm ülkeler yavaş yavaş pürüzsüz bir tüketim ve demokrasi cennetine dönüşecekti. "Tarih (ideolojik evrim) bitmişti." Ancak sadece on yıl sonra 11 Eylül saldırıları patlak verdi, radikal fanatizm yükseldi ve otoriter rejimler eskisinden daha güçlü geri döndü. Fukuyama\'nın yanılgısı; her çağdaki insanın, kendi yaşadığı dönemin (kendi doğrusunun) insanlığın ulaştığı o "en kusursuz ve son zirve" olduğuna inanma şeklindeki o narsisistik ve aptalca körlüğüdür.',
    questionStem: 'Fukuyama\'nın "Tarihin Sonu" tezinin çökmesi, sosyoloji ve tarih felsefesinde hangi insan kibrini eleştirmek için kullanılır?',
    options: [
      'Savaş teknolojilerinin sürekli gelişerek geçmiş savaş taktiklerini etkisiz kılmasını',
      'Tarihçilerin geçmiş olayları anlatırken objektif olamayıp kendi milletlerini kayırmasını',
      'Her dönemin insanının (aydınının), kendi yaşadığı çağın veya inandığı sistemin insanlık evriminin "kusursuz ve değiştirilemez (nihai) son zirvesi" olduğuna inanma yönündeki o kibirli körlüğü (narsisizmi)',
      'Komünizm ve faşizm gibi yönetim biçimlerinin insan doğasına uygun olan en doğru sistemler olduğunu'
    ],
    correct: 2,
    explanation: 'Kendi inandığı liberal demokrasinin (kendi çağının) insanlık tarihinin ulaştığı "son ve kusursuz zirve" olduğunu sanıp tarihin (değişimin) bittiğine inanma kibri (narsisizmi) eleştirilmektedir.'
  },
  {
    title: 'Dyson Küresi (Yıldız Tutsaklığı)',
    passage: 'Gelişmiş bir medeniyet, sadece kendi gezegeninin kaynaklarıyla yetinemez. Teorik fizikçi Freeman Dyson, teknolojik olarak zirveye ulaşmış bir medeniyetin devasa bir "Dyson Küresi" inşa edeceğini öne sürer. Bu, bizzat Güneş\'in etrafını devasa bir kabukla (veya milyonlarca aynayla) tamamen hapsedip, yıldızın yaydığı o sonsuz nükleer enerjinin tek bir damlasını bile uzaya kaçırmadan sömürmek anlamına gelir. Eğer gökyüzünde ışığı periyodik olarak tamamen kararıp açılan (titreyen) bir yıldız görürsek, bu orada bir Dyson Küresi (uzaylı bir medeniyet) inşa edildiğinin işareti olabilir. Bu teori, zekânın ve gelişmişliğin nihai hedefinin barış veya felsefe değil; yanan bir yıldızı bile devasa bir kafese kapatıp pili bitene kadar sömürecek o korkunç enerji açlığı (mühendislik kibri) olduğunu gösterir.',
    questionStem: 'Dyson Küresi kavramı, "gelişmiş medeniyet" (ve teknoloji) tanımı bağlamında yazar tarafından nasıl eleştirilmektedir?',
    options: [
      'Güneşin etrafını saracak kadar büyük bir metalin evrende asla bulunamayacağı şeklindeki mühendislik imkânsızlığıyla',
      'Teknolojik gelişmişliğin nihai sonucunun bilgelik değil; koca bir yıldızı bile hapsedip sömürecek kadar devasa, korkutucu ve açgözlü (kibirli) bir enerji sömürüsüne ulaşması gerçeğiyle',
      'Aynaların güneşin ısısını dünyaya yansıtarak küresel ısınmayı felaket boyutlarına taşıması riskiyle',
      'Uzaylı medeniyetlerin diğer yıldız sistemlerini istila etme niyetini gizledikleri bir savaş taktiği olmasıyla'
    ],
    correct: 1,
    explanation: 'Bir yıldızı bile kafese koyup tüm enerjisini emmenin (sömürmenin); gelişmişliğin bilgeliğe değil, korkunç bir enerji açlığına ve mühendislik kibrine (sömürüye) vardığını gösterir.'
  },
  {
    title: 'Von Neumann Sondaları (Kozmik Virüs)',
    passage: 'Evreni nasıl keşfederdiniz? Kendi astronotlarınızı binlerce yıl sürecek bir yolculuğa çıkarmak deliliktir. Fizikçi John von Neumann\'ın çözümü basitti: Gittiği gezegendeki madenleri kazarak "kendini kopyalayabilen (çoğalan)" bir yapay zekâ robotu yapın ve onu uzaya fırlatın. O robot bir gezegene inip kendisinden iki kopya yapacak, onlar da başka gezegenlere gidip dörder kopya yapacak ve bu "katlanarak büyüme" (üstel artış) sayesinde, tek bir ana robot birkaç milyon yıl içinde çekirge sürüsü gibi koca bir galaksiyi kaplayacaktır. Von Neumann Sondaları, uzay keşfinin masum bir macera değil; makine zekâsının adeta mekanik bir kanser (veya virüs) gibi evrenin tüm yıldızlarını yutarak çoğalacağı o korkunç matematiksel istiladır.',
    questionStem: 'Von Neumann Sondaları fikrinin, uzay keşfi (astronomi) konusundaki o masum algıyı yıkan asıl sarsıcı yönü nedir?',
    options: [
      'Robotların yapay zekâları geliştikçe insanlığa savaş açıp onları yok edeceği korkusu',
      'Uzay araştırmalarının sadece zengin ülkelerin tekelinde kalacak bir sömürü yarışı olması',
      'Evreni keşfetmenin yolunun aslında; kendini kopyalayarak katlanarak (üstel) büyüyen, gezegenlerin madenlerini sömürerek tüm galaksiyi istila eden "mekanik bir virüs" veya kanser yaratmaktan geçmesi',
      'Maden kaynakları tükenen dünyamızı kurtarmak için robotların dış uzaydan maden getirmesinin ahlaki olup olmadığı'
    ],
    correct: 2,
    explanation: 'Robotun gezegene gidip kendini kopyalaması ve katlanarak (üstel) çoğalması; keşif kavramını masum bir maceradan çıkarıp evreni yutan mekanik bir virüs/kanser (istila) fikrine dönüştürmesidir.'
  },
  {
    title: 'Tüfek, Mikrop ve Çelik (Coğrafi Determinizm)',
    passage: 'Neden Avrupalılar Amerika kıtasını fethedip yerlileri yok etti de, Amerikalı yerliler gemiler yapıp Avrupa\'yı işgal etmedi? Yüzlerce yıl boyunca bu soruya verilen cevap ırkçıydı: "Çünkü beyaz ırk genetik ve zihinsel olarak daha üstündü." Ancak Jared Diamond, "Tüfek, Mikrop ve Çelik" adlı eserinde bu kibri paramparça etti. Avrupalıların üstünlüğü genlerinden değil, sadece yaşadıkları coğrafyanın piyangosundan (şansından) geliyordu. Avrupa-Asya kıtası tarıma ve evcilleştirilebilir iri hayvanlara (at, inek) daha müsaitti. Hayvanlarla iç içe yaşamak onlara bağışıklık (mikroplara karşı direnç) kazandırdı. Yerlileri kılıçlar değil, Avrupalıların nefesleriyle taşıdığı ama kendilerinin bağışık olduğu o sinsi virüsler (çiçek hastalığı) öldürdü. Medeniyetlerin kaderi, damarlarındaki kanda değil, ayak bastıkları toprağın sunduğu rastgele coğrafi avantajlarda (Determinizm) yazılıdır.',
    questionStem: 'Jared Diamond\'un "Tüfek, Mikrop ve Çelik" tezi (Coğrafi Determinizm), medeniyetlerin gelişmişlik farklarıyla ilgili hangi yaygın (ve tehlikeli) algıyı yıkmıştır?',
    options: [
      'Gemi teknolojilerinin okyanus akıntılarına karşı yetersiz kalması mazeretini',
      'Avrupalıların diğer kıtaları fethetmesinin altında yatan nedenin "ırksal, genetik veya zihinsel bir üstünlük" olduğu yönündeki o kibirli ve ırkçı yalanı yıkarak, asıl belirleyicinin (şanslı) coğrafi şartlar ve hayvanlardan geçen bağışıklık olduğunu kanıtlaması',
      'Amerika kıtasındaki yerlilerin aslında son derece barışçıl ve silahsız bir toplum oldukları efsanesini',
      'Tarımsal üretimin silah sanayisinden daha fazla gelir getirdiği inancını'
    ],
    correct: 1,
    explanation: 'Fethin sebebinin "beyaz ırkın üstünlüğü" (ırkçı yalan) değil, sadece o coğrafyanın sunduğu tarım/hayvan/mikrop şansı olduğunu kanıtlayarak genetik üstünlük kibrini (algısını) yıkmıştır.'
  },
  {
    title: 'Boltzmann Beyni: Tesadüfi Şuur',
    passage: 'Termodinamiğin o dondurucu boşluğunda Ludwig Boltzmann şu ihtimali ortaya attı: Uçsuz bucaksız, kaotik ve ölü bir uzay boşluğunda, trilyonlarca gaz ve toz bulutunun "tesadüfen" bir araya gelerek kusursuz bir Güneş sistemi, gezegenler ve bizi (evrimi) oluşturması matematiksel olarak o kadar düşük bir ihtimaldir ki imkânsıza yakındır. Ancak o toz bulutlarının tesadüfen bir araya gelip, uzay boşluğunda bir anlığına sadece "düşünen ve anılara sahip olan tek bir beyin" (Boltzmann Beyni) oluşturması, koca bir evren oluşturmasından katrilyonlarca kez daha olasıdır. Bu korkunç teoriye göre; şu an hissettiğiniz bedeniniz, anılarınız, okuduğunuz bu metin ve tüm evren aslında yoktur; siz sadece uzay boşluğunda süzülen, bu sahte anıları ve gerçeklik illüzyonunu tesadüfen bir saniyeliğine kurup (titreşip) sonra yok olacak olan "tekil ve şans eseri bir beyinden" ibaret olabilirsiniz.',
    questionStem: 'Boltzmann Beyni teorisi, "insanın varoluşu ve evren" algısı üzerinde nasıl bir felsefi-matematiksel sarsıntı yaratır?',
    options: [
      'Bilim insanlarının evrenin yaşını hesaplarken çok büyük matematiksel hatalar yaptığını kanıtlayarak',
      'İnsan beyninin içindeki nöron ağlarının uzaydaki galaksi dizilimleriyle birebir aynı (kusursuz) şekle sahip olduğunu göstererek',
      'Yaşadığımız koca evrenin karmaşık bir şekilde var olma ihtimalinin, uzay boşluğunda rastgele (ve sahte anılarla dolu) "tek bir beynin anlık oluşması" ihtimalinden çok daha düşük olduğunu göstererek, gerçeklik algımızı ve tüm hatıralarımızı sıfırlayan (bir illüzyon sayan) o dehşet verici şüpheyi sunması',
      'Astrofizikçilerin zaman yolculuğunu sadece beyin dalgalarıyla yapabileceklerini öne sürerek'
    ],
    correct: 2,
    explanation: 'Koca evrenin oluşma ihtimalinin, tek bir beynin rastgele oluşmasından daha düşük olması; yaşadığımız her şeyin (anıların/bedenimizin) boşluktaki tek bir beynin sahte kurgusu (illüzyonu) olabileceği dehşetini yaratır.'
  },
  {
    title: 'Hüzünlü Palyaço Paradoksu (Pagliacci)',
    passage: 'Şehirde derin bir depresyon ve intihar eğilimi yaşayan bir adam psikiyatriste gider. Doktor onu uzun uzun dinler ve çözüm olarak reçete yazmak yerine gülümseyerek der ki: "Şehrimize büyük, harika bir sirk geldi. Orada Pagliacci adında efsanevi bir palyaço var. Herkesi gülmekten kırıp geçiriyor. Git onu izle, bütün dertlerini unutacaksın." Adamın gözlerinden bir damla yaş süzülür ve o acı dolu gerçeği fısıldar: "Ama doktor, o palyaço (Pagliacci) benim..." Bu trajik hikâye, insan psikolojisindeki en ağır maskenin (Hüzünlü Palyaço) özetidir. Etrafındakilere neşe saçan, herkesin derdini dinleyip onları güldüren (ve en güçlü görünen) o neşeli figürler; aslında geceleri kendi karanlıklarını ve çaresiz ruhlarını aydınlatacak hiç kimseyi bulamayan, iyileştirdiği insanlardan çok daha hasta olan ve o gülen maskenin ardında boğulan yapayalnız kurbanlardır.',
    questionStem: 'Hüzünlü Palyaço (Pagliacci) hikâyesindeki asıl "psikolojik trajedi (çelişki)" nedir?',
    options: [
      'Sirk sanatçılarının toplum tarafından her zaman dışlanması ve saygı görmemesi',
      'Psikiyatri biliminin insanların ruhsal sorunlarına hap yazmak dışında bir çözüm (empati) bulamaması',
      'Başkalarını güldüren, neşelendiren ve onlara (ışık/umut) şifa dağıtan kişinin, aslında o gülen maskenin ardında kendi karanlığını aydınlatacak hiçbir umudu ve çaresi olmayan en ağır (ve yapayalnız) hasta olması ironisi',
      'Palyaçoların genellikle çocukluklarında geçirdikleri fiziksel travmaları sahnede tekrar etmesi'
    ],
    correct: 2,
    explanation: 'Doktorun adama "git Palyaço\'yu izle şifa bulursun" demesine karşın adamın bizzat o Palyaço olması; başkalarına şifa (neşe) dağıtanın aslında o maskenin ardındaki çaresiz ve en ağır hasta olması ironisidir.'
  },
  {
    title: 'Alef: Sonsuzluğun Ağırlığı (Borges)',
    passage: 'Arjantinli yazar Jorge Luis Borges\'in "Alef" adlı öyküsünde, karanlık bir bodrum katında bir nokta bulunur. Bu nokta (Alef), evrendeki bütün mekânları, zamanları ve nesneleri aynı anda, üst üste binmeden barındıran; baktığınızda tüm kâinatı eşzamanlı olarak görebildiğiniz o "tek" noktadır. Anlatıcı o noktaya baktığında, denizlerdeki bütün dalgaları, dünyadaki bütün yüzleri, kendi iç organlarını ve henüz yazılmamış tüm kitapları "tek bir saniyede ve aynı anda" görür. Ancak bu sonsuz bilgi onu aydınlatmaz; aksine o ezici ve devasa gerçeklik (kavrama) yükü aklını parçalar. Alef, insanoğlunun o her şeyi bilme, tanrılaşma (her yeri görme) kibrine atılmış felsefi bir tokattır. İnsan zihni, mutlak hakikati (sonsuzluğu) kaldırabilecek kadar geniş değil; o hakikatin altında ezilip delirecek kadar sınırlı ve kör bir kaptır.',
    questionStem: 'Borges\'in "Alef" (tüm evreni barındıran nokta) metaforu, "insan ve bilgi" ilişkisi hakkında neyi vurgular?',
    options: [
      'İnsanların gizli sırlar öğrenmek için her zaman bodrum katları gibi karanlık yerleri tercih ettiğini',
      'Bilimin ilerlemesiyle insanların bir gün gerçekten evrenin her noktasını aynı anda görebilecek teknolojiye (teleskoplara) ulaşacağını',
      'İnsanoğlunun o her şeyi bilme (tanrısal) hırsına rağmen, insan zihninin "mutlak gerçeği ve sonsuzluğu" (bilgiyi) aynı anda kavrayabilecek kapasitede olmadığını, bu devasa yükün aydınlanma değil delilik (çöküş) getireceğini',
      'Evrendeki tüm gezegenlerin aslında bir noktadan (Big Bang) patlayarak genişlediğini'
    ],
    correct: 2,
    explanation: 'Her şeyi anında gören adamın aydınlanmayıp aklının parçalanması; insan zihninin o mutlak gerçeği/sonsuzluğu kaldıracak kapasitede olmadığını, aşırı bilginin delilik (çöküş) getirdiğini vurgular.'
  }
];

export const karisikParagrafSorulari20: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_20.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_20[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-karisik20-p-${qNo}`,
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
  ...felsefeParagrafSorulari8,
  ...psikolojiParagrafSorulari9,
  ...edebiyatParagrafSorulari10,
  ...gizemParagrafSorulari11,
  ...teknolojiParagrafSorulari12,
  ...sosyolojiParagrafSorulari13,
  ...felsefeParagrafSorulari14,
  ...felsefeParagrafSorulari15,
  ...psikolojiParagrafSorulari16,
  ...karisikParagrafSorulari17,
  ...felsefeParagrafSorulari18,
  ...bilimParagrafSorulari19,
  ...karisikParagrafSorulari20
  
];
