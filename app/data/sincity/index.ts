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
    title: 'Şehrin Anatomisi',
    passage: 'Şehir, paslı bir neşter gibi her gece umutlarımızı derimizden kazıyordu. Sokak lambalarının cılız ışığı, kaldırımlardaki kan lekelerini aydınlatmak yerine onları gölgelerle birleştirip saklıyordu. Binalar, gökyüzüne uzanan kibirli mezar taşlarıydı. Burada hayatta kalmanın tek kuralı vardı: Vicdanını, ilk köşedeki rehin dükkanına satıp karşılığında sessizlik satın almak.',
    questionStem: 'Bu parçada şehirle ilgili asıl vurgulanmak istenen aşağıdakilerden hangisidir?',
    options: [
      'Geceleri suç oranının gündüze göre daha fazla arttığı',
      'İnsanların manevi değerlerini yok eden, acımasız ve yozlaştırıcı bir yapıya sahip olduğu',
      'Mimari yapısının insan psikolojisini olumsuz yönde etkilediği',
      'Ekonomik zorlukların insanları suça iten en temel etken olduğu'
    ],
    correct: 1,
    explanation: 'Şehrin umutları kazıyan paslı bir neştere benzetilmesi ve hayatta kalmak için vicdanın satılması gerektiği vurgusu, şehrin yozlaştırıcı ve acımasız yapısını gösterir.'
  },
  {
    title: 'Sahte Adalet',
    passage: 'Kör tanrıçanın terazisi bu metropolde çoktan bozulmuştu; artık ağır basan taraf haklı olan değil, kefeye daha fazla kanlı banknot koyabilendi. Adalet sarayının mermer merdivenleri, kravatlı hırsızların ayak sesleriyle aşınırken, dışarıdaki yağmur sadece fakirlerin günahlarını yıkamakla meşguldü. Yasalar, zenginleri koruyan çelik bir yelek, yoksulların ise boynuna dolanan bir ipten ibaretti.',
    questionStem: 'Yazarın "hukuk sistemi"ne yönelik temel eleştirisi aşağıdakilerden hangisidir?',
    options: [
      'Kanunların zamanın gerisinde kalıp güncellenememesi',
      'Hâkim ve savcıların yeterli eğitime sahip olmaması',
      'Adaletin ekonomik güce göre şekillenip sınıfsal bir eşitsizlik yaratması',
      'Suç oranlarının artmasıyla mahkemelerin iş yükünün altından kalkamaması'
    ],
    correct: 2,
    explanation: 'Parçada adaletin terazisinin paraya göre tarttığı ve yasaların zenginleri koruyup yoksulları cezalandırdığı (sınıfsal eşitsizlik) ifade edilmiştir.'
  },
  {
    title: 'Geçmişin Hayaletleri',
    passage: 'Geçmiş, ucuz bir motelin rutubetli tavanı gibiydi; ne kadar gözünü kaçırmaya çalışırsan çalış, o kahverengi su lekeleri hep oradaydı. Yıllar önce tetiği çekerken hissettiğim o anlık soğukkanlılık, şimdi her gece uykumu bölen sağır edici bir çığlığa dönüşmüştü. Hafıza, insanın kendi kendine oynadığı en acımasız kumardı ve ben bütün fişlerimi o karanlık sokakta çoktan kaybetmiştim.',
    questionStem: 'Kahramanın "geçmiş" ile olan ilişkisi aşağıdakilerin hangisinde doğru ifade edilmiştir?',
    options: [
      'Geçmişteki başarılarından güç alarak geleceğe umutla bakmaktadır.',
      'Yaptığı hataları unutarak kendine yeni ve temiz bir sayfa açmıştır.',
      'Hafızasından silmek istediği eylemlerin vicdani yükü altında ezilmektedir.',
      'Eski dostlarının ihanetini bir türlü kabullenememektedir.'
    ],
    correct: 2,
    explanation: 'Geçmişin tavandaki rutubet lekesi gibi sürekli orada olması ve tetiği çekmenin uykularını bölen bir çığlığa dönüşmesi, kahramanın vicdani bir azap çektiğini (ezildiğini) gösterir.'
  },
  {
    title: 'Neon Yalanlar',
    passage: 'Göz alıcı neon tabelalar, şehrin çürüyen cesedini saklayan pahalı bir makyajdan farksızdı. Kırmızı ve mavi ışıkların asfalttaki yansımaları, pencerelerin ardında sessizce ağlayanların gözyaşlarına karışıyordu. Herkes bu ışıltılı illüzyona bilerek kanıyor, vitrinlerin sahte vaatlerine tapınarak kendi karanlık gerçekliklerinden kaçıyordu.',
    questionStem: 'Parçadaki "neon tabelalar" neyi sembolize etmektedir?',
    options: [
      'Şehrin ekonomik kalkınmasını ve modernleşmesini',
      'Gerçek acıları ve toplumsal çürümüşlüğü örten aldatıcı bir vitrini',
      'Karanlık sokakları aydınlatarak güvenliği sağlayan bir unsuru',
      'İnsanların sanata ve estetiğe olan duyarlılığını'
    ],
    correct: 1,
    explanation: 'Neon tabelalar, şehrin çürüyen cesedini saklayan pahalı bir makyaj olarak betimlenerek, gerçeği örten aldatıcı bir vitrin/illüzyon olarak sembolize edilmiştir.'
  },
  {
    title: 'İhanetin Anatomisi',
    passage: 'İhanet, bu sokaklarda bir istisna değil, nefes almak kadar sıradan bir refleksti. Sırtımda hissettiğim o soğuk namlu, bir düşmanın değil, yıllarca aynı ekmeği böldüğüm adamın elindeydi. Şaşırmadım. Bu şehirde sadakat, cebinde paran bitene kadar kiralayabildiğin ucuz bir fahişeydi sadece. Dostluklar ise, ilk kurşun atılana kadar süren kırılgan ateşkeslerden ibaretti.',
    questionStem: 'Bu metinden ihanetle ilgili olarak aşağıdakilerden hangisi çıkarılabilir?',
    options: [
      'Sadece zayıf karakterli insanların başvurduğu bir yöntemdir.',
      'Şehrin doğasına işlemiş, kaçınılmaz ve sıradanlaşmış bir durumdur.',
      'Genellikle dışarıdan, hiç tanınmayan insanlardan gelir.',
      'Sadece büyük ekonomik krizlerin yaşandığı dönemlerde ortaya çıkar.'
    ],
    correct: 1,
    explanation: 'İhanetin nefes almak kadar sıradan bir refleks olduğu ve dostlukların kırılgan ateşkeslerden ibaret olduğu belirtilerek, ihanetin o şehirde kaçınılmaz ve sıradan bir şey (normalize olmuş) olduğu vurgulanmıştır.'
  },
  {
    title: 'Duygusuzluk',
    passage: 'Artık kimsenin ölümü haber değeri taşımıyordu. Dün gece köşebaşında vurulan adamın kanı henüz kurumadan, sabahın ilk saatlerinde takım elbiseli kalabalıklar o kanın üzerinden atlayarak işlerine yetişme telaşına düştüler. Ölüm, trajik bir son olmaktan çıkmış, sadece trafiği aksatan can sıkıcı bir pürüze dönüşmüştü. Bizler ruhumuzu beton dökerken kaybetmiştik.',
    questionStem: 'Bu parçada asıl yakınılan (şikâyet edilen) durum nedir?',
    options: [
      'İş hayatının stresi altında ezilen insanların yorgunluğu',
      'Medyanın olayları halka eksik ve taraflı yansıtması',
      'Şiddetin kanıksanması ve insan hayatının değersizleşmesi',
      'Emniyet güçlerinin suçluları yakalamada yetersiz kalması'
    ],
    correct: 2,
    explanation: 'Ölümün trafik aksatan bir pürüz olarak görülmesi ve insanların kanın üzerinden atlayıp geçmesi, toplumun ölüme ve şiddete karşı duyarsızlaştığını (insan hayatının değersizleştiğini) gösterir.'
  },
  {
    title: 'Korkunun Kokusu',
    passage: 'Korku bu şehirde soyut bir kelime değildi; paslı demir, ter ve bayat sigara dumanından oluşan genzi yakan bir kokusu vardı. O koku ciğerlerinize dolduğunda, sokağın sonundaki gölgenin sizin için orada olduğunu anlardınız. Kaçmak faydasızdı; çünkü korku sizden daha hızlı koşar ve her zaman sizi kendi evinizde, en güvendiğiniz kilidin ardında beklerdi.',
    questionStem: 'Parçadaki "korku" kavramıyla ilgili anlatılmak istenen aşağıdakilerden hangisidir?',
    options: [
      'İnsanların sadece karanlık sokaklarda hissettiği geçici bir duygudur.',
      'Kaçınılması imkânsız, fiziksel olarak hissedilebilen ve bireyi her yerde bulan bir tehdittir.',
      'Sadece suçluların kendi iç dünyalarında yaşadıkları psikolojik bir yanılsamadır.',
      'Cesaretle üzerine gidildiğinde kolayca yenilebilen zihinsel bir zayıflıktır.'
    ],
    correct: 1,
    explanation: 'Korkunun somut bir kokusu olduğunun söylenmesi ve kaçmanın faydasız olup her yerde kişiyi bulması, onun kaçınılmaz ve fiziksel olarak da varlığını hissettiren bir tehdit olduğunu ifade eder.'
  },
  {
    title: 'Umut Zehri',
    passage: 'Umut, çaresizlere satılan en tehlikeli uyuşturucuydu. \"Yarın daha iyi olacak\" yalanı, insanların isyan etmesini engelleyen, onları çürümüş sisteme itaatkâr köleler haline getiren kusursuz bir kilit mekanizmasıydı. Ben bu zehri yıllar önce içmeyi bıraktım. Artık biliyordum ki, bu şehirde güneş sadece gökdelenlerin en üst katlarındaki camları parlatmak için doğardı.',
    questionStem: 'Kahramanın "umut" kavramına bakış açısı aşağıdakilerden hangisidir?',
    options: [
      'Hayatta kalmak için tutunulması gereken en güçlü manevi dayanaktır.',
      'Sistemin sömürüsünü gizleyen, bireyi pasifleştirip isyanı önleyen bir yalandır.',
      'Sadece zenginlerin ulaşabileceği pahalı ve lüks bir duygudur.',
      'Toplumdaki yardımlaşma ve dayanışma duygusunu artıran birleştirici bir unsurdur.'
    ],
    correct: 1,
    explanation: 'Umut; insanları itaatkâr köleler yapan, isyanı engelleyen tehlikeli bir uyuşturucu ve yalan olarak betimlenmiştir. Bu da onu bireyi pasifleştiren bir araç yapar.'
  },
  {
    title: 'Gece ve Maskeler',
    passage: 'Güneş battığında, insanların yüzlerindeki o saygın vatandaş maskeleri de eriyip kaybolurdu. Gece, herkesin asıl kimliğine kavuştuğu devasa bir günahkârlar balosuydu. Gündüz adliye koridorlarında dürüstlük nutukları atanlar, gece en izbe barlarda ruhlarını şeytana pazarlardı. Karanlık, kusurları örtmezdi bu şehirde; aksine onları tüm çıplaklığıyla sahneye çıkarırdı.',
    questionStem: 'Bu parçada "gece" kavramına yüklenen işlev aşağıdakilerden hangisidir?',
    options: [
      'İnsanların günün yorgunluğunu attığı huzurlu bir sığınak olması',
      'Suçluların kimliklerini gizleyerek rahatça hareket etmesini sağlaması',
      'Toplumsal ikiyüzlülüğün sona erip, insanların gerçek (karanlık) yüzlerinin ortaya çıkması',
      'Sadece yalnız ve mutsuz insanların uyanık kaldığı melankolik bir zaman dilimi olması'
    ],
    correct: 2,
    explanation: 'Metne göre gece olduğunda maskeler düşmekte, gündüz saygın görünenlerin asıl çirkin ve günahkâr kimlikleri (ikiyüzlülükleri) ortaya çıkmaktadır.'
  },
  {
    title: 'Sessizliğin Çığlığı',
    passage: 'Siren sesleri sustuğunda başlayan o ağır sessizlik, huzurun değil, yaklaşan fırtınanın habercisiydi. Pencerelerin ardına saklanıp nefesini tutan halk, dışarıda kopan kıyamete kör ve sağır kalmayı seçmişti. Çünkü bu şehirde hayatta kalmanın ilk kuralı, hiçbir şey görmemiş ve hiçbir şey duymamış olmaktı. Dilsiz şeytanların krallığıydı burası; ve sükût, en büyük suç ortaklığıydı.',
    questionStem: 'Yazar "sükût, en büyük suç ortaklığıydı" sözüyle ne anlatmak istemiştir?',
    options: [
      'Sessiz kalmanın insanları dinlendiren ve ruhu arındıran bir meditasyon olduğunu',
      'Haksızlıklar karşısında tepki vermemenin, suçu işleyenleri onaylamak ve desteklemek anlamına geldiğini',
      'Tehlike anında panik yapmayıp sessizce beklemenin en mantıklı savunma yöntemi olduğunu',
      'Konuşmanın yasak olduğu baskıcı rejimlerde insanların birbirine yabancılaştığını'
    ],
    correct: 1,
    explanation: 'Kötülükler ve suçlar karşısında görmezden gelip sessiz kalmak (sükût), o suça göz yummak yani suça ortak olmak demektir.'
  },
  {
    title: 'Satılık Vicdanlar',
    passage: 'Vicdan, lüks restoranların menülerinde bulunmayan ama arka sokaklardaki karanlık anlaşmalarda ilk masaya sürülen para birimiydi. Herkesin bir fiyatı vardı; kimi bir avuç bozukluğa, kimi lüks bir arabaya ruhunu devrediyordu. Satın alınamayan adamlar ise dürüst oldukları için değil, sadece onlara teklif edilen rakam henüz yeterince büyük olmadığı için öyle görünüyorlardı.',
    questionStem: 'Parçaya göre "vicdan ve dürüstlük" ile ilgili yazarın savunduğu düşünce nedir?',
    options: [
      'Dürüstlüğün doğuştan gelen değiştirilemez bir karakter özelliği olduğu',
      'Ekonomik zorlukların insanları ister istemez vicdansızlığa ittiği',
      'Gerçek anlamda dürüst kimsenin olmadığı, herkesin bir menfaat karşılığında ilkelerinden vazgeçebileceği',
      'Zenginlerin fakirlere göre vicdani konularda daha hassas olduğu'
    ],
    correct: 2,
    explanation: 'Metinde herkesin bir fiyatı olduğu ve satın alınamayanların sadece teklif edilen rakam az olduğu için henüz satılmadığı (yani herkesin çıkar karşılığı taviz verebileceği) savunulmuştur.'
  },
  {
    title: 'Kaderin Zarları',
    passage: 'Kendi seçimlerimizle yaşadığımızı sanmak, bu devasa kumarhanede krupiyenin bize anlattığı en güzel masaldı. Biz zarları attığımızı zannederken, masanın altındaki görünmez bir el çoktan hangi rakamın geleceğini belirlemişti. Özgür irade, kaybedenlerin teselli bulmak için uydurduğu şık bir kelimeden ibaretti. Çark dönüyor, bilye düşüyor ve biz sadece bize biçilen trajedinin figüranlığını yapıyorduk.',
    questionStem: 'Parçada "özgür irade" kavramına yönelik yazarın yaklaşımı hangisidir?',
    options: [
      'İnsanın kaderini kendi çabası ve seçimleriyle şekillendirebileceği',
      'Özgür iradenin bir yanılsama olduğu ve olayların önceden kurgulanmış bir sistemin kontrolünde ilerlediği',
      'Kumara ve şansa dayalı hayatların insanı iradesizleştirdiği',
      'Yalnızca güçlü ve zengin insanların özgür iradeye sahip olabileceği'
    ],
    correct: 1,
    explanation: 'Seçimlerimizin bir masal olduğu, zarların sonucunun görünmez bir el tarafından belirlendiği ve özgür iradenin bir teselli (yanılsama) olduğu anlatılmıştır (Determinizm).'
  },
  {
    title: 'Aşkın Rengi',
    passage: 'Onun dudaklarındaki gülümseme, içine düşeceğimi bildiğim zehirli bir sarmaşık gibiydi. Gözlerindeki sahte masumiyetin ardında, pusuya yatmış bir engereğin sabrı saklıydı. Bu şehirde aşk, iki kişinin birbirini iyileştirmesi değil; kimin diğerini daha önce yok edeceği üzerine oynanan ölümcül bir rus ruletiydi. Onu sevmek, kendi idam fermanımı sevinçle imzalamaktı.',
    questionStem: 'Bu metinde "aşk", aşağıdaki kavramlardan hangisiyle özdeşleştirilmiştir?',
    options: [
      'Fedakârlık ve karşılıksız bağlılık',
      'Geçmişin yaralarını saran manevi bir sığınak',
      'Kaçınılmaz bir yıkım ve ölümcül bir tuzak',
      'Toplumsal kurallara karşı bir başkaldırı'
    ],
    correct: 2,
    explanation: 'Aşk zehirli bir sarmaşığa, engereğe, rus ruletine ve idam fermanına benzetilerek; iyileştirici değil, yok edici (yıkıcı) bir tuzak olarak gösterilmiştir (Femme Fatale motifi).'
  },
  {
    title: 'Mekanik Hayatlar',
    passage: 'Her sabah aynı gri binalardan, aynı asık suratlarla kusan milyonlarca yürüyen cesettik biz. Kan damarlarımızda kan değil, kredi kartı borçları ve ödenmemiş faturaların stresi akıyordu. Saat çarklarının arasında ezilen et parçalarından farksızdık. Kimse birbirinin gözünün içine bakmıyor, sadece önündeki ekrana kilitlenmiş halde kendi dijital zindanında çürümeyi bekliyordu.',
    questionStem: 'Parçada modern şehir insanıyla ilgili olarak aşağıdakilerden hangisi eleştirilmektedir?',
    options: [
      'İnsanların doğadan uzaklaşıp kırsal yaşama özlem duyması',
      'Maddi kaygılar ve mekanik rutinler içinde insani duyguların ve iletişimin yitirilmesi',
      'Teknolojinin yetersiz kalması sonucu iş hayatının zorlaşması',
      'Kredi kartı kullanımının ekonomik krizi daha da derinleştirmesi'
    ],
    correct: 1,
    explanation: 'Yürüyen cesetlere benzetilen insanların borç stresiyle mekanikleştiği, göz teması kurmayarak (iletişimsizlik) dijital ekranlara gömüldüğü ve hissizleştiği eleştirilmiştir.'
  },
  {
    title: 'Silahın Ağırlığı',
    passage: 'Namlunun ucundan çıkan bir saniyelik alev, bir insanın tüm geçmişini ve geleceğini silip atmaya yetiyordu. Silahı elinde tutan güçlendiğini sanır, oysa asıl tetik, tutanın ruhunda çekilirdi. Verdiğim her canla birlikte kendi insanlığımdan bir parça kopardığımı hissediyordum. Belimde taşıdığım bu paslı metal, beni koruyan bir kalkan değil; ruhumu azar azar emen kara bir delikti.',
    questionStem: 'Silah kullanmanın kahraman üzerindeki etkisi aşağıdakilerden hangisidir?',
    options: [
      'Kendini şehrin yenilmez ve tek hakimi hissetmesini sağlamıştır.',
      'Düşmanlarına karşı ona büyük bir güven ve huzur vermiştir.',
      'Karşı tarafı yok ederken aslında kendi ruhsal çöküşünü ve insanlığından uzaklaşmasını hızlandırmıştır.',
      'Adaleti sağlamak adına girdiği yolda onun en büyük yardımcısı olmuştur.'
    ],
    correct: 2,
    explanation: 'Her canla birlikte kendi insanlığından koptuğunu ve silahın ruhunu emen bir kara delik olduğunu söylemesi, şiddetin kişinin kendi ruhunu (insanlığını) da yok ettiğini gösterir.'
  },
  {
    title: 'Aynadaki Yabancı',
    passage: 'Aynaya her baktığımda karşılaştığım yüz, yıllar önce yola çıkarken sahip olduğum idealist adama ait değildi artık. Çizgilerde sadece yaşlılığın değil, verilen tavizlerin, söylenen yalanların ve yutulan gururun izleri vardı. Canavarlarla savaşırken canavara dönüşmemek için yemin etmiştim; oysa şimdi, avladığım adamların nefesini kendi ciğerlerimde hissediyordum.',
    questionStem: 'Bu metne göre kahramanın "aynaya baktığında" hissettiği asıl duygu nedir?',
    options: [
      'Yılların geçmesiyle kaybettiği gençliğine duyduğu derin özlem',
      'Zamanla ideallerini yitirip, mücadele ettiği kötü niyetli insanlara benzemesinden duyduğu acı bir yüzleşme',
      'Bütün zorluklara rağmen hayatta kalmayı başarmış olmanın verdiği gurur',
      'Kendine yeni hedefler belirleyememenin yarattığı vizyonsuzluk'
    ],
    correct: 1,
    explanation: 'Canavarla savaşırken canavara dönüşmesi, söylenen yalanlar ve yutulan gurur; kahramanın ideallerini kaybedip savaştığı kötülüğün bir parçası haline geldiğini gösterir.'
  },
  {
    title: 'Küller ve Şehir',
    passage: 'Yangın bittikten sonra geriye kalan sadece gri bir kül yığını değildi; o küller, bu şehrin temeline harç yapılmış ihanetlerin ve gözyaşlarının kalıntısıydı. Yeniden inşa edilen her gökdelen, bir öncekini yakanların cebini dolduruyordu. Yıkım, bu metropolde bir son değil; zenginlerin servetine servet katmak için periyodik olarak sahneledikleri vahşi bir tiyatroydu sadece.',
    questionStem: 'Yazar, şehirdeki "yıkım ve yeniden inşa" süreçlerini nasıl yorumlamaktadır?',
    options: [
      'Şehrin modernleşmesi ve daha sağlam yapılara kavuşması için zorunlu bir adım',
      'Eski mimarinin korunmamasının yol açtığı kültürel bir yozlaşma',
      'Güç odaklarının (zenginlerin) kendi ekonomik çıkarları uğruna kasten yarattığı sömürü odaklı bir döngü',
      'Doğal afetlerin şehir planlaması üzerindeki kaçınılmaz ve yıkıcı etkisi'
    ],
    correct: 2,
    explanation: 'Metinde yangın/yıkımın zenginlerin servetini artırmak için sahneledikleri "vahşi bir tiyatro" olduğu söylenerek, yıkımın rant (ekonomik çıkar) amaçlı kurgulandığı vurgulanmıştır.'
  },
  {
    title: 'Saat Tik-Takları',
    passage: 'Odamdaki antika duvar saatinin tik-takları, zamanın ilerlediğini değil; ölümün ağır ağır ayak sesleriyle bana yaklaştığını haber veriyordu. Beklemek, bir kurşun yemekten çok daha eziyetliydi. Namlu şakağınıza dayandığında her şey bir saniyede biterdi; ama o odada, sessizliğin ve tik-takların arasında kendi sonunuzu beklerken binlerce kez ölür, binlerce kez dirilirdiniz.',
    questionStem: 'Bu parçada kahramanın psikolojisi ile ilgili aşağıdakilerden hangisi söylenebilir?',
    options: [
      'Zamanı iyi değerlendiremediği için derin bir pişmanlık duymaktadır.',
      'Sessizlik ve bekleyişin getirdiği belirsizlik, ona fiziksel acıdan veya ölümden daha fazla ruhsal eziyet çektirmektedir.',
      'Antika saatlerin nostaljik yapısı ona geçmişte yaptığı hataları hatırlatmaktadır.',
      'Ölüm korkusunu yenmek için zaman algısını tamamen yitirmeyi arzulamaktadır.'
    ],
    correct: 1,
    explanation: 'Kurşun yemenin bir saniye süreceği ancak saatin tik-takları arasında ölümü beklemenin insana binlerce kez ölümü yaşattığı (bekleyişin/belirsizliğin büyük eziyet olduğu) ifade edilmiştir.'
  },
  {
    title: 'Kiralık Kalemler',
    passage: 'Gerçeği yazmak eskiden gazetecilerin namusuydu. Şimdi ise haber daireleri, büyük şirketlerin basın bültenlerini halka kusan gösterişli birer hoparlörden ibaret. Kelimelerin gücü, onları kimin finanse ettiğine bağlı olarak şekil değiştiriyor. Halk, manşetlerde kendi gerçeğini değil; sadece elitlerin onların inanmasını istediği parlak ve uyuşturucu senaryoları okuyor.',
    questionStem: 'Parçada "basın ve medya" kurumlarına yöneltilen asıl eleştiri nedir?',
    options: [
      'Gazetecilerin dil ve yazım kurallarına yeterince dikkat etmemesi',
      'Teknolojinin gelişmesiyle basılı gazetelerin yerini dijital haberlerin alması',
      'Medyanın halkı aydınlatma görevini terk edip güç odaklarının (elitlerin) çıkarlarına hizmet eden bir manipülasyon aracı olması',
      'Halkın haber okuma alışkanlığının giderek azalması ve basına olan ilgisizliği'
    ],
    correct: 2,
    explanation: 'Gazetelerin şirketlerin hoparlörüne dönüştüğü ve halka gerçekler yerine elitlerin senaryolarının yutturulduğu söylenerek medyanın manipülatif (yönlendirici) ve satılmış yapısı eleştirilmiştir.'
  },
  {
    title: 'Yağmurun Sırrı',
    passage: 'Bazıları yağmurun gökyüzünün gözyaşları olduğuna inanır, romantik şiirler yazarlardı. Oysa ben o kara bulutların, şehre bakıp mideleri bulandığı için asfalta tükürdüklerini düşünüyordum. Bu kadar çok günahı, bu kadar ihaneti ve pisliği başka hangi su temizleyebilirdi ki? Ama nafileydi; su buharlaşıp uçar, geriye yine o genzi yakan çürüme kokusu kalırdı.',
    questionStem: 'Kahramanın "yağmur" doğa olayına yüklediği anlama göre, aşağıdakilerden hangisi onun dünya görüşüyle örtüşür?',
    options: [
      'Doğa, insanların yarattığı kirliliği her zaman affeden ve temizleyen şefkatli bir annedir.',
      'Şehirdeki ahlaki kirlilik ve yozlaşma o kadar derindir ki, hiçbir doğa olayı veya çaba bu çürümüşlüğü kalıcı olarak temizleyemez.',
      'İklim değişiklikleri ve doğa olayları, insanların sanayileşme hırsının kaçınılmaz bir sonucudur.',
      'İnsanların duygu durumları, havanın güneşli veya yağmurlu olmasına göre sürekli değişkenlik gösterir.'
    ],
    correct: 1,
    explanation: 'Yağmurun romantik değil, şehrin pisliğine duyulan bir tiksinti (tükürük) olduğu ve suyu uçunca geriye yine çürümenin kaldığı belirtilerek yozlaşmanın kalıcılığı (temizlenemezliği) vurgulanmıştır.'
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
