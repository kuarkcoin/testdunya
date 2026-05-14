import type { BilimParagrafQuestion } from './types';

const PARAGRAPH_THEMES_21 = [
  {
    title: 'Rashomon Etkisi: Hakikatin Parçalanması',
    passage: 'Japon yönetmen Akira Kurosawa\'nın efsanevi "Rashomon" filminde, ormanda işlenen bir cinayet dört farklı tanık tarafından mahkemede anlatılır. Haydut, maktulün karısı, ölü adamın ruhu ve ormandaki bir oduncu, aynı olayı öylesine farklı, kendi egolarını aklayacak ve diğerini suçlayacak şekilde kusursuzca anlatırlar ki; ortada tek bir cinayet olmasına rağmen dört farklı gerçeklik ortaya çıkar. Hangisi doğru söylüyordur? Aslında hepsi kendi açısından doğruyu anlatmaktadır. Psikolojiye "Rashomon Etkisi" olarak geçen bu fenomen; mutlak ve tarafsız bir "hakikatin" olmadığını, gerçeğin her zaman onu izleyen kişinin anılarına, korkularına ve narsisizmine göre bükülen (kurgulanan) öznel bir illüzyon olduğunu acımasızca kanıtlar.',
    questionStem: 'Rashomon Etkisi, insan doğası ve algısıyla ilgili hangi sarsıcı felsefi/psikolojik gerçeği savunmaktadır?',
    options: [
      'İnsanların mahkeme salonlarında korkuya kapılarak her zaman yalan söyleme eğiliminde olduğunu',
      'Ormanlık ve ıssız alanların insan psikolojisinde halüsinasyonları tetiklediğini',
      'Mutlak, tek ve tarafsız bir "hakikatin" bulunmadığını; gerçeğin her zaman kişinin kendi egosuna ve bakış açısına göre bükülen öznel bir kurgu (illüzyon) olduğunu',
      'Japon kültüründe onur kavramının adaletten daha üstün tutulduğunu'
    ],
    correct: 2,
    explanation: 'Dört kişinin aynı olayı kendi egosuna göre farklı (ve doğruymuş gibi) anlatması; mutlak gerçeğin olmadığını, hakikatin öznel bir kurgu (illüzyon) olduğunu savunur.'
  },
  {
    title: 'Streisand Etkisi: Sansürün Megafonu',
    passage: '2003 yılında ünlü şarkıcı Barbra Streisand, evinin havadan çekilmiş bir fotoğrafını yayınlayan küçük bir web sitesine fotoğrafı kaldırması için 50 milyon dolarlık devasa bir dava açtı. Dava açılmadan önce o fotoğrafı sitede sadece 6 kişi (onlar da avukatlardı) indirmişti. Ancak "Streisand bir fotoğrafı sildirmeye çalışıyor!" haberi medyaya düşünce, bir ay içinde milyonlarca insan siteye akın etti ve o fotoğraf internetin en çok paylaşılan görsellerinden biri oldu. "Streisand Etkisi" denen bu ironi; bir bilgiyi zorla saklamaya, sansürlemeye veya yasaklamaya çalışmanın, o bilgiyi yok etmek yerine ona devasa bir megafon tutarak (merakı kışkırtarak) tüm dünyaya yaydığını kanıtlayan muazzam bir sosyolojik bumerangdır.',
    questionStem: 'Streisand Etkisi kavramı, sansür ve yasaklama girişimlerinin genellikle nasıl bir sonuç doğurduğunu açıklamaktadır?',
    options: [
      'Yasaklanan içeriklerin zamanla halk tarafından unutularak değerini kaybettiğini',
      'Bir bilgiyi zorla gizlemeye veya yasaklamaya (sansürlemeye) çalışmanın, insanlardaki merak duygusunu kışkırtarak o bilginin yok olmak yerine bir bumerang gibi patlayıp milyonlara yayılmasına neden olduğunu',
      'Ünlü sanatçıların hukuk sistemini kullanarak medyayı kolayca susturabildiğini',
      'İnternet sitelerinin her zaman ünlülerin özel hayatına saygı duyduğunu'
    ],
    correct: 1,
    explanation: 'Sadece 6 kişinin gördüğü resmi sildirmeye çalışmanın milyonların o resmi görmesine yol açması; sansürün aslında gizlemek yerine bilgiyi patlatan bir megafon (bumerang) olduğunu gösterir.'
  },
  {
    title: 'Çehov\'un Silahı: Sanatta ve Hayatta Anlam',
    passage: 'Ünlü Rus yazar Anton Çehov, sanatsal kurgunun en değişmez kuralını şöyle özetler: "Eğer hikâyenin birinci bölümünde duvarda asılı bir tüfek olduğunu söylüyorsanız, o tüfek üçüncü bölümde mutlaka patlamalıdır. Eğer patlamayacaksa, o tüfeği oraya hiç asmamalısınız." "Çehov\'un Silahı" olarak bilinen bu prensip, sadece tiyatro veya edebiyat için değil, insan hayatı için de kusursuz bir minimalizm ve anlam felsefesidir. Eserde (veya hayatımızda) yer alan her detayın, her eşyanın ve her cümlenin bütünsel bir amaca (anlama) hizmet etmesi gerekir. İşlevi olmayan, sonuca bağlanmayan, sadece gösteriş için orada duran her detay; sanatın da, yaşamın da o asil sadeliğini zehirleyen gereksiz bir gürültüden ibarettir.',
    questionStem: 'Çehov\'un Silahı prensibinin temelinde yatan edebi ve felsefi anlayış nedir?',
    options: [
      'Sanat eserlerinde şiddet ve cinayet ögelerinin her zaman ilgi çektiği',
      'Tiyatro sahnelerinin olabildiğince çok eşyayla (dekorla) doldurulması gerektiği',
      'Eserdeki (ve hayattaki) her detayın mutlaka bütünsel bir amaca (sonuca) hizmet etmesi gerektiği; işlevi olmayan, gereksiz her unsurun (gösterişin) atılması gerektiği (minimalizm ve anlamlılık)',
      'Rus edebiyatının diğer edebiyatlardan çok daha kuralcı bir yapıya sahip olduğu'
    ],
    correct: 2,
    explanation: 'Asılı duran tüfeğin mutlaka patlaması (işe yaraması) gerektiği, aksi halde orada olmaması gerektiği kuralı; gereksiz detayların atılmasını ve her şeyin bir amaca/işleve hizmet etmesi gerektiğini savunur.'
  },
  {
    title: 'Batık Maliyet Yanılgısı (Sunk Cost Fallacy)',
    passage: 'Gittiğiniz bir sinema filminin ilk yarım saatinde filmin berbat olduğunu anladınız. Salondan çıkıp gitmeniz gerekirken, "O kadar bilet parası verdim, vaktimi harcadım, bari sonunu göreyim" diyerek kendinize işkence etmeye devam edersiniz. Aynı şey yürümediği belli olan ilişkiler, batan şirketler ve kazanılmayacak savaşlar için de geçerlidir. "Batık Maliyet Yanılgısı" denen bu psikolojik körlük; insanın sırf geçmişte para, zaman veya duygu "yatırımı yaptı" diye, aslında açıkça zararına olan (yıkıcı) bir süreci inatla sürdürmeye devam etmesidir. İnsan zihni, yaptığı hatayı (kaybı) kabullenip kesip atmaktansa, o hatanın üzerine daha fazla yatırım yaparak kendi yıkımını devasa bir enkaza dönüştürmeyi tercih eden mantıksız bir kumarcıdır.',
    questionStem: 'Batık Maliyet Yanılgısı (Sunk Cost Fallacy), insanların hangi mantıksız tutumunu eleştirmektedir?',
    options: [
      'İnsanların genellikle pahalı ürünlerin kaliteli olduğunu sanması',
      'Sırf geçmişte maddi veya manevi bir emek (yatırım) harcandı diye; açıkça zarar getiren ve kurtarılması imkânsız olan yıkıcı bir durumu bitirmek yerine inatla devam ettirerek kaybı büyütmesi',
      'Sinema biletlerinin fiyatlarının sürekli artmasının kültürel etkinlikleri azaltması',
      'Başarısız olan projelerin her zaman başkaları tarafından finanse edilmesi'
    ],
    correct: 1,
    explanation: 'Berbat olduğunu anladığı filme sırf bilet parası verdi diye katlanmaya devam etmesi; geçmişteki yatırım yüzünden zararına olan eylemi inatla sürdürme mantıksızlığını açıklar.'
  },
  {
    title: 'Peter İlkesi (Liyakatin Çöküşü)',
    passage: 'Büyük şirketlerde veya devlet dairelerinde neden en üst düzey yöneticiler genellikle en beceriksiz ve yeteneksiz kişilerden oluşur? Sosyolog Laurence J. Peter bu trajikomik durumu "Peter İlkesi" ile kusursuzca açıklar: Bir çalışan kendi pozisyonunda başarılı oldukça bir üst pozisyona terfi ettirilir. Bu terfiler, kişi "kendi yeteneksizlik seviyesine (başarısız olacağı noktaya)" ulaşana kadar devam eder. Kişi o pozisyonda çuvalladığı için bir daha terfi edemez ve emekli olana kadar o yeteneksiz olduğu koltuğu işgal eder. Sonuç: Hiyerarşik sistemlerin zirveleri, aslında o işi yapamayan, kendi kifayetsizlik sınırında asılı kalmış çapsız yöneticilerden oluşan devasa ve felç olmuş birer çöplüğe dönüşür.',
    questionStem: 'Peter İlkesi\'ne göre, hiyerarşik sistemlerde (şirket/devlet) zirvelerin yeteneksiz insanlarla dolmasının asıl nedeni nedir?',
    options: [
      'Zeki insanların genellikle kendi işlerini kurarak maaşlı çalışmaktan kaçınması',
      'İnsanların başarılı oldukça terfi etmesi ve eninde sonunda "kendi yeteneksizlik sınırına" çarpıp orada takılı kalmaları (başarısız oldukları koltuğu işgal etmeleri)',
      'Yöneticilerin bilerek ve isteyerek akrabalarını yüksek pozisyonlara yerleştirmesi (nepotizm)',
      'Alt kademedeki çalışanların üst yöneticileri sürekli sabote etmesi'
    ],
    correct: 1,
    explanation: 'Kişinin başarılı oldukça terfi alıp, başarısız olduğu an o koltukta sonsuza dek kalması; sistemin zirvelerinin liyakatsiz kişilerle dolmasının mekanizmasını açıklar.'
  },
  {
    title: 'Kuleshov Etkisi: Sinemanın İllüzyonu',
    passage: 'Sovyet sinemacı Lev Kuleshov, insan zihninin nasıl kolayca manipüle edildiğini göstermek için bir deney yaptı. Ekrana, hiçbir mimik barındırmayan tamamen tepkisiz bir aktörün yüzünü koydu. Bu yüzün hemen ardına sırasıyla üç farklı görüntü ekledi: Bir tabak sıcak çorba, tabutta ölü bir çocuk ve uzanan güzel bir kadın. İzleyiciler aktörün yüzü hiç değişmemesine rağmen birinci görüntüde aktörün "çok aç ve arzulu" baktığına, ikinci görüntüde "derin bir hüzün" yaşadığına, üçüncüde ise "şehvet" duyduğuna yemin ettiler! "Kuleshov Etkisi" şunu ispatlar: Anlam (ve duygu), görüntünün kendi içinde değil; o görüntülerin arka arkaya diziliş şeklindedir. Beynimiz, iki alakasız kare arasında nedensellik bağı kurarak, ortada olmayan o sahte duyguyu kendi elleriyle (kurgulayarak) inşa eder.',
    questionStem: 'Kuleshov Etkisi deneyi, insan algısının (ve sinema kurgusunun) hangi özelliğini ortaya koymaktadır?',
    options: [
      'İnsan yüzündeki mikro mimiklerin duyguları ele vermekte çok başarısız olduğunu',
      'Anlamın ve duygunun tek bir görüntünün kendisinde değil; beynin, art arda gelen alakasız görüntüler arasında bağlantı (kurgu) kurarak o duyguyu kendiliğinden üretmesinde saklı olduğunu',
      'Sovyet oyuncuların duygusal sahnelerde Batılı oyunculardan daha yetenekli olduğunu',
      'İnsanların acıkan birini gördüklerinde her zaman daha fazla empati kurduğunu'
    ],
    correct: 1,
    explanation: 'Tepkisiz yüzün ardından gelen çorbaya/tabuta göre izleyicinin farklı duygu algılaması; anlamın görüntünün kendisinde değil, beynin kurduğu o bağlantıda (kurguda) yattığını kanıtlar.'
  },
  {
    title: 'İkizler Paradoksu ve Görelilik',
    passage: 'Albert Einstein\'ın İzafiyet Teorisi, zamanın herkes için aynı hızda akan sabit bir nehir olduğu inancını paramparça etti. "İkizler Paradoksu" bunu en acımasız haliyle anlatır: Yirmili yaşlarındaki tek yumurta ikizlerinden biri dünyada kalırken, diğeri ışık hızına yakın bir uzay gemisiyle derin uzaya fırlatılır. Uzaydaki kardeş için sadece 5 yıl geçer, ancak o 5 yılın sonunda dünyaya geri döndüğünde, dünyada kalan ikiz kardeşini 80 yaşında, bastonlu ve ölmek üzere olan bir ihtiyar olarak bulur! Hız arttıkça zaman bükülmüş ve yavaşlamıştır. Zaman, evrenin o dondurucu ve sarsılmaz mutlak hâkimi değil; hızın ve kütleçekiminin elinde hamur gibi esneyen, izafi (kişiye göre değişen) trajik bir illüzyondur.',
    questionStem: 'İkizler Paradoksu düşünce deneyinin, geleneksel evren ve zaman algımıza vurduğu en büyük darbe nedir?',
    options: [
      'Uzay yolculuklarının insan bedenindeki hücre yenilenmesini tamamen durdurması',
      'Zamanın tüm evrende aynı hızda işleyen mutlak ve sabit bir kural olduğu inancını yıkarak; zamanın hıza bağlı olarak bükülen, kişiye göre değişen (izafi/göreceli) bir kavram olduğunu kanıtlaması',
      'Işık hızına çıkmanın teorik olarak insan bedeni için ölümcül olacağını göstermesi',
      'İkiz kardeşlerin genetik bağlarının uzayda bile birbirlerini hissetmelerini sağlaması'
    ],
    correct: 1,
    explanation: 'Bir ikiz 5 yıl yaşarken diğerinin 80 yaşına gelmesi; zamanın sabit bir nehir değil, hıza göre esneyen ve kişiye göre değişen (izafi) bir illüzyon olduğunu gösterir.'
  },
  {
    title: 'Flatland (Düzland) Alegorisi',
    passage: 'Edwin A. Abbott\'un "Düzland" (Flatland) adlı başyapıtında, sadece eni ve boyu olan iki boyutlu bir evren anlatılır. Bu evrende yaşayan bir Kare, bir gün üç boyutlu bir Küre ile karşılaşır. Küre, Kareye yukarıyı, derinliği ve üçüncü boyutu anlatmaya çalışır; ancak Kare için "yukarı" kavramı tamamen anlamsızdır, onun aklı sadece sağa, sola ve ileriye basmaktadır. Sonunda Küre, Kareyi alıp üç boyutlu evrene çıkardığında, Kare gördüğü o devasa hakikat karşısında dehşete düşer. Düzland bir geometri masalı değildir; o, üç boyutlu bir kafese hapsolmuş biz insanların (kibirlilerin), aklımızın ve duyu organlarımızın sınırları dışında kalan o evrensel sırları, kuantum boyutlarını veya tanrısal gerçeklikleri kavramaktaki o çaresiz, sığ ve acınası körlüğümüzün (yetersizliğimizin) en tokat gibi alegorisidir.',
    questionStem: 'Flatland (Düzland) alegorisi, insan zihni ve evrensel gerçeklik (hakikat) hakkında neyi sembolize eder?',
    options: [
      'Geometrinin sadece matematikçiler tarafından anlaşılabilecek kadar sıkıcı bir alan olduğunu',
      'Tıpkı iki boyutlu bir varlığın üçüncü boyutu anlayamaması gibi, üç boyutlu fiziksel algıya hapsolmuş insanın da kendi sınırlı zihniyle evrenin ötesini (ve yüksek hakikatleri) kavramada ne kadar sığ ve kör (aciz) kaldığını',
      'Paralel evrenler arasında seyahat etmenin sadece şekil değiştirerek mümkün olabileceğini',
      'Küre gibi kusursuz şekillerin doğada karelerden daha çok bulunduğunu'
    ],
    correct: 1,
    explanation: 'İki boyutlu karenin üçüncü boyutu anlayamaması metaforuyla; üç boyutlu insanın da kendi algı kafesine hapsolup yüksek gerçeklikleri (hakikati) kavramada ne kadar kör/yetersiz kaldığı vurgulanmıştır.'
  },
  {
    title: 'Hayvanat Bahçesi Hipotezi (Zoo Hypothesis)',
    passage: 'Gökbilimci John Allen Ball, "Uzaylılar nerede?" sorusuna kan dondurucu bir açıklama getirir: Hayvanat Bahçesi Hipotezi. Bu teoriye göre, evrende bizden milyonlarca yıl daha gelişmiş sayısız medeniyet vardır ve onlar bizim nerede olduğumuzu çok iyi bilmektedirler. Ancak teknolojik olarak o kadar geride, vahşi ve ilkel bir türüz ki; onlar bizimle iletişime geçmek yerine dünyamızı "kozmik bir doğa koruma alanı (hayvanat bahçesi)" ilan etmişlerdir. Bizi, kendi evrimsel gelişimimizi tamamlayana kadar uzaktan, görünmez bir şekilde ve sessizce izlemektedirler (tıpkı bizim belgesellerde aslanları izlediğimiz gibi). Yani gökyüzündeki sessizlik kimsenin olmamasından değil; seyircilerin, kafesteki vahşi hayvanları (bizi) ürkütmemek için bilerek sessiz kalmasındandır.',
    questionStem: 'Hayvanat Bahçesi Hipotezi\'nin, uzaylıların bizimle iletişime geçmemesine dair getirdiği sarsıcı açıklama nedir?',
    options: [
      'Uzaylıların radyo sinyallerini algılayacak teknolojiye henüz ulaşamamış olması',
      'Dünya dışı varlıkların aslında çok barışçıl ve mikroskobik canlılar olması',
      'Uzaylıların teknolojik ve ahlaki olarak o kadar gelişmiş olması ki; bizi ilkel, vahşi bir tür olarak görüp evrimimize müdahale etmemek adına dünyamızı izole edilmiş (karantinaya alınmış) bir kozmik hayvanat bahçesi gibi uzaktan ve sessizce izlemeleri',
      'Güneş sistemimizin uzaylıların ilgisini çekmeyecek kadar sönük bir yıldız kümesinde bulunması'
    ],
    correct: 2,
    explanation: 'Uzaylıların bizimle iletişime geçmemesinin sebebi olarak; bizi ilkel bulup evrimimizi bozmamak adına (bir hayvanat bahçesi gibi) dışarıdan sessizce izledikleri hipotezi (karantina/izolasyon) sunulmuştur.'
  },
  {
    title: 'Panspermi Teorisi: Biz Uzaylıyız',
    passage: 'Bilim insanları yıllarca yaşamın Dünya\'daki ilkel çorbalarda kendiliğinden oluştuğunu savundu. Ancak "Panspermi Teorisi" bu inancı yıkarak çok daha fantastik bir köken önerir. Bu teoriye göre; yaşamın temel yapıtaşları (aminoasitler ve dirençli mikroorganizmalar) Dünya\'da oluşmadı, uzayın derinliklerinde süzülen meteorlar ve kuyrukluyıldızlar aracılığıyla donmuş bir halde yeryüzüne çakılarak okyanuslara tohumlandı. Eğer Panspermi teorisi doğruysa, gökyüzüne bakıp "Uzaylılar nerede?" diye sormamız büyük bir ironidir; çünkü o meteorla gelen tohumlardan evrimleşen bizler, zaten milyarlarca yıl önce bu gezegene çarparak yerleşmiş olan o uzaylıların ta kendisiyiz.',
    questionStem: 'Panspermi Teorisi\'nin kabul edilmesi durumunda, insanlık ve evren hakkında ortaya çıkacak olan felsefi "ironi" nedir?',
    options: [
      'Meteorların aslında gezegenleri yok etmek için değil kurtarmak için gönderildiği',
      'Yaşamın sadece sulak okyanuslarda başlayabileceği inancının çökmesi',
      'Hayatın yapıtaşlarının uzaydan geldiği gerçeği karşısında; dışarıda "uzaylı" arayan insanoğlunun, evrimsel kökeni itibarıyla bu gezegene dışarıdan gelmiş olan o "uzaylı türün" bizzat kendisi olması ironisi',
      'Dünyanın atmosferinin uzaydan gelen her türlü virüse karşı tamamen korumasız olduğu'
    ],
    correct: 2,
    explanation: 'Yaşamın tohumlarının meteorlarla uzaydan geldiği tezi doğruysa; dışarıda uzaylı arayan bizim, aslında uzaydan gelen tohumların devamı (yani bizzat uzaylı) olduğumuz ironisi anlatılmaktadır.'
  },
  {
    title: 'Yığın Paradoksu (Sorites Paradox)',
    passage: 'Antik Yunan filozoflarının ortaya attığı "Sorites (Yığın) Paradoksu", insan dilinin ve algısının ne kadar aciz olduğunu gösterir. Önünüzde 1 milyon kum tanesinden oluşan bir yığın var. İçinden 1 tane alırsanız, o hala bir kum yığını mıdır? Evet. Bir tane daha alırsanız? Yine evet. Peki kum tanelerini tek tek almaya devam ederseniz, o yığın tam olarak "hangi kum tanesi alındığında" yığın olmaktan çıkar? İki kum tanesi yığın mıdır? Üç tane? Kesin bir sınır yoktur. Bu paradoks, doğada "kel, zengin, yığın veya yaşlı" gibi kavramların aslında fiziksel (kesin) bir sınırı olmadığını, sadece insan dilinin (ve beyninin) karmaşık gerçeği basitleştirmek için uydurduğu belirsiz ve kusurlu birer etiket olduğunu ispatlar.',
    questionStem: 'Yığın (Sorites) Paradoksu, felsefi olarak hangi temel yetersizliğimizi veya yanılgımızı ortaya koyar?',
    options: [
      'Kum taneleri gibi küçük nesnelerin gözle görülmesinin zorluğunu',
      'Doğadaki değişimlerin sürekli ve kesintisiz (grift) olmasına rağmen; insan dilinin ve kavramlarının (kel, zengin, yığın gibi) bu sürekliliği kesin sınırlarla belirlemede düştüğü o kusurlu acizliği (belirsizliği)',
      'Çöllerin zamanla rüzgâr erozyonuyla yok olduğu gerçeğini',
      'Antik Yunan filozoflarının matematiksel hesaplamalarda çok zayıf kaldıklarını'
    ],
    correct: 1,
    explanation: 'Tek tek alınan kumun ne zaman "yığın" olmaktan çıktığının bilinememesi; doğadaki kesintisizliğe karşı insan dilinin ve kullandığı etiketlerin (kavramların) kesin sınırlar çizmedeki kusurlu acizliğini gösterir.'
  },
  {
    title: 'Matta Etkisi (Matthew Effect)',
    passage: 'İncil\'deki bir ayetten (Kimde varsa ona daha çok verilecek) ismini alan "Matta Etkisi", sosyolog Robert Merton tarafından bilime ve topluma uyarlanmıştır. Dünyanın "saf bir liyakat (hak ediş)" üzerine kurulduğu büyük bir yalandır. Eğer iki bilim insanı aynı anda bir makale yayınlarsa, daha önceden "ünlü" olan bilim insanının makalesi binlerce kez atıf alırken, tanınmayan gencin makalesi çöpe gider. Veya küçük bir avantajla doğan bir çocuk (iyi bir ilkokula gitmek gibi), bu avantajı sayesinde daha iyi liseye, oradan da milyonerliğe sıçrar. Matta Etkisi şudur: "Zengin daha zengin, bilinen daha bilinir olur." Başarı dediğimiz şey çoğu zaman saf yetenek değil; en baştaki o ufacık (ve bazen tesadüfi) avantajın zamanla çığ gibi büyüyen birikimli kayırmacılığıdır.',
    questionStem: 'Matta Etkisi\'nin toplumsal (ve bilimsel) başarı algısına getirdiği eleştiri aşağıdakilerden hangisidir?',
    options: [
      'Dini metinlerde geçen kuralların ekonomi biliminde birebir uygulanamayacağı',
      'Dünyanın saf ve adil bir "liyakat (yetenek)" sistemiyle işlemediği; başarı ve şöhretin genellikle geçmişten gelen küçük avantajların (ve tanınırlığın) kartopu gibi büyümesiyle oluşan haksız bir birikim (kayırmacılık) olduğu',
      'Bilim insanlarının yaşlandıkça genç meslektaşlarına oranla daha az araştırma yaptığı',
      'Sadece zengin ailelerden gelenlerin edebiyat ve sanatta yetenekli olabileceği'
    ],
    correct: 1,
    explanation: 'Ünlü olanın daha çok atıf alması veya baştaki avantajın kişiyi milyoner yapması; başarının saf liyakat değil, sahip olunan avantajın haksızca büyümesi (zenginin daha zengin olması) gerçeğini eleştirir.'
  },
  {
    title: 'Gresham Yasası ve Kültürel Çöküş',
    passage: '16. yüzyılda İngiliz finansçı Thomas Gresham şu meşhur ekonomi kuralını koydu: "Kötü para, iyi parayı piyasadan kovar." Eğer piyasada hem saf altından yapılmış değerli paralar, hem de içine bakır karıştırılmış değersiz paralar dolaşıyorsa; insanlar altını yastık altına saklar (piyasadan çeker) ve sadece o değersiz paralarla alışveriş yaparlar. Sonunda piyasa tamamen çöpe (kötü paraya) kalır. Günümüzde sosyologlar bu yasayı modern kültüre uyarlamıştır: Bir televizyon kanalında (veya sosyal medyada) hem derin, düşündürücü bir belgesel; hem de ucuz, bağrışmalı, sığ bir yarışma varsa, o kalitesiz ve ucuz içerik saniyeler içinde reytingleri silip süpürür ve kaliteli işi ekranlardan kovar. Kötü kültür, iyi kültürü yener; çünkü sığlığın tüketimi her zaman dehadan daha zahmetsiz ve bulaşıcıdır.',
    questionStem: 'Ekonomideki Gresham Yasası ("Kötü para iyi parayı kovar") kavramının modern kültüre uyarlanmış hali neyi savunmaktadır?',
    options: [
      'Televizyon kanallarının ekonomik olarak her zaman iflas etme riski taşıdığını',
      'İnsanların eski dönemlere ait antika paralara ve eşyalara her zaman daha çok ilgi duyduğunu',
      'Zahmetsiz, ucuz ve sığ kültür ürünlerinin (kötü paranın); derin, kaliteli ve düşündürücü (iyi) eserleri reyting ve tüketim gücüyle piyasadan (ve toplumsal ilgiden) tamamen silip attığını',
      'Belgesel izleyen insanların genellikle daha fazla altın biriktirme eğiliminde olduğunu'
    ],
    correct: 2,
    explanation: 'Ucuz ve bağrışmalı yarışmaların derin belgeselleri reytingle yok etmesi; ekonomideki "kötü paranın iyi parayı kovması" kuralının kültürdeki (sığ olanın kaliteliyi yok etmesi) yansımasını savunur.'
  },
  {
    title: 'Haşlanmış Kurbağa Sendromu',
    passage: 'Eğer bir kurbağayı kaynar su dolu bir tencereye atarsanız, can havliyle zıplayıp anında kaçar. Ancak kurbağayı oda sıcaklığında ılık bir suya koyup, altındaki ateşi yavaş yavaş, derece derece açarsanız; kurbağa suyun ısındığını fark etmez. Su kaynama noktasına ulaştığında kurbağa gevşemiş ve kasları uyuşmuştur, artık zıplayacak hali kalmaz ve haşlanarak ölür. "Haşlanmış Kurbağa Sendromu", toplumların ve bireylerin yavaş yavaş artan kötülüğe, diktatörlüğe, hak ihlallerine veya zehirli bir ilişkiye karşı verdikleri o sessiz ve felç olmuş tepkisizliği anlatır. Tehlike aniden (şokla) gelmez; adım adım, alıştıra alıştıra (normalleştirilerek) geldiğinde, insan isyan etme yetisini kaybeder ve kendi yıkımının konforunda sessizce can verir.',
    questionStem: 'Haşlanmış Kurbağa Sendromu\'nun toplumsal psikolojide işaret ettiği en sinsi ve tehlikeli durum nedir?',
    options: [
      'Hayvanların ani ısı değişimlerine karşı geliştirdikleri evrimsel savunma mekanizmaları',
      'Kötülüğün, baskının veya hak ihlallerinin aniden (şokla) değil de, yavaş yavaş ve alıştıra alıştıra (normalleştirilerek) gelmesi durumunda toplumun isyan (tepki) refleksini yitirerek kendi yıkımına boyun eğmesi',
      'İnsanların sıcak sularda yüzdüklerinde kaslarının aşırı derecede gevşeyerek tehlikelere açık hale gelmesi',
      'Diktatörlük rejimlerinin genellikle soğuk iklimli ülkelerde değil, sıcak ülkelerde daha kolay kurulması'
    ],
    correct: 1,
    explanation: 'Suyun yavaşça ısınmasıyla kurbağanın ölene dek tepki vermemesi; kötülüğün yavaş ve alıştıra alıştıra gelmesinin toplumların isyan/tepki refleksini felç edip yıkımı normalleştirmesini sembolize eder.'
  },
  {
    title: 'Gözetim Kapitalizmi (Surveillance Capitalism)',
    passage: 'Eskiden bir şirket ayakkabı veya araba üretir ve size satardı. Müşteri sizdiniz, ürün ise eşyaydı. Harvard Profesörü Shoshana Zuboff, "Gözetim Kapitalizmi" kavramıyla dijital çağın bu denklemi nasıl kan dondurucu bir şekilde tersine çevirdiğini anlatır. Sosyal medya platformları, arama motorları ve navigasyon uygulamaları tamamen "bedava"dır. Peki bu devasa şirketler trilyonlarca doları nasıl kazanmaktadır? Cevap çok basittir: Bedava olan bir sistemde "ürün" sizsinizdir! Sizin beğenileriniz, korkularınız, kiminle mesajlaştığınız ve nereye gittiğiniz (tüm mahremiyetiniz) anbean işlenip satılabilir verilere dönüştürülür. Şirketler artık mal satmıyor; doğrudan insan davranışını (sizin geleceğinizi) tahmin edip onu reklamcılara pazarlayan dijital bir köle pazarı işletiyorlar.',
    questionStem: 'Gözetim Kapitalizmi (Surveillance Capitalism) kavramına göre, modern dijital çağdaki en büyük ekonomik dönüşüm (tehlike) nedir?',
    options: [
      'İnsanların artık nakit para yerine sadece dijital kripto paralarla alışveriş yapmaya başlaması',
      'Teknoloji şirketlerinin fiziksel fabrikalar kurmayı bırakıp sadece yazılım üretmeye odaklanması',
      'İnternet hizmetlerinin "bedava" sunulması maskesi altında; asıl ürünün (satılan malın) doğrudan insanın mahremiyeti, davranışları ve kişisel verileri haline geldiği yeni bir pazarın kurulması',
      'Sosyal medyanın gençlerin ders çalışma sürelerini kısaltarak akademik başarıyı düşürmesi'
    ],
    correct: 2,
    explanation: 'Bedava hizmet veren şirketlerin trilyonlar kazanması, asıl satılan malın (ürünün) doğrudan kullanıcının mahremiyeti, verileri ve davranışları (Gözetim Kapitalizmi) olduğunu açıklar.'
  },
  {
    title: 'Cunningham Yasası',
    passage: 'İnternet dünyasının o tuhaf dinamiklerini açıklayan "Cunningham Yasası" şöyledir: "İnternette doğru cevabı almanın en iyi yolu, soru sormak değil; yanlış bir cevap (veya bilgi) paylaşmaktır." Eğer bir foruma girip "Dünyanın en uzun nehri hangisidir?" diye sorarsanız kimse ilgilenmez. Ancak "Dünyanın en uzun nehri Thames nehridir" diye yazarsanız, dakikalar içinde onlarca kişi size aptal olduğunuzu söylemek ve doğrunun Nil veya Amazon olduğunu kanıtlamak için klavyelere saldırır. Bu yasa, insan egosunun o hastalıklı doğasını ifşa eder: İnsanoğlu karşısındakine "yardımcı olmak" (soru cevaplamak) için pek hevesli değildir; ancak bir başkasının yanlışını düzelterek "kendi zekâsını ve üstünlüğünü kanıtlama" fırsatı bulduğunda, kibirle ve coşkuyla harekete geçer.',
    questionStem: 'Cunningham Yasası\'nın ("Doğruyu bulmak için yanlış bir şey yazın") işe yaramasının temelinde yatan psikolojik dürtü nedir?',
    options: [
      'İnternet kullanıcılarının coğrafya ve tarih konularına özel bir ilgi duyması',
      'İnsanların bir başkasına iyilik yapma veya bilgi verme arzusundan çok; başkasının hatasını düzelterek kendi zekâsını (egosunu ve üstünlüğünü) kanıtlama dürtüsünün çok daha güçlü (kışkırtıcı) olması',
      'Yanlış bilgilerin sosyal medya algoritmaları tarafından daha hızlı öne çıkarılması',
      'İnsanların uzun soruları okumaya üşenip sadece kısa ve yanlış iddialara cevap vermesi'
    ],
    correct: 1,
    explanation: 'Soru sorana kimsenin cevap vermeyip, yanlış yazana herkesin saldırması; insanların asıl derdinin yardım etmek değil, başkasının hatasını düzelterek kendi egosunu/zekâsını kanıtlama hırsı olduğunu gösterir.'
  },
  {
    title: 'Lindy Etkisi: Eskiyen Teknolojiler, Ölümsüz Klasikler',
    passage: 'Bir akıllı telefon satın aldığınızda, onun en fazla 3-5 yıl ömrü olduğunu bilirsiniz. Yeni çıkan bir pop şarkısı birkaç ay sonra tamamen unutulur. Ancak Platon\'un felsefesi veya Beethoven\'ın bir senfonisi yüzlerce yıldır varlığını korur. Matematikçi Benoit Mandelbrot buna "Lindy Etkisi" adını vermiştir: İnsan yapımı teknolojilerde ve biyolojik canlılarda yaşlandıkça "ölme" ihtimali artar; ancak fikirler, kitaplar ve kültürel konseptler gibi "bozulmayan (cansız)" şeylerde durum tam tersidir. Homeros\'un İlyada destanı 2500 yıldır okunuyorsa, bir 2500 yıl daha okunacağı garantidir. Lindy Etkisi bize şunu söyler: Geleceği öngörmek istiyorsanız bugün çıkan parlak ve yeni teknolojilere değil; zamanın o acımasız ve silici testinden geçerek hayatta kalmayı başarmış o sessiz klasiklere (kadim fikirlere) bakmalısınız.',
    questionStem: 'Lindy Etkisi kavramı, kültürel eserlerin (fikirlerin) dayanıklılığı ve geleceği hakkında nasıl bir kural ortaya koymaktadır?',
    options: [
      'Klasik eserlerin eski dillerde yazıldığı için modern toplumlar tarafından anlaşılamayacağını',
      'Canlıların ve teknolojilerin aksine; kültürel bir fikrin veya eserin yaşı (geçmişteki ömrü) ne kadar eskiyse, zamana meydan okuyup gelecekte de yaşama ihtimalinin o kadar yüksek olduğunu',
      'Sadece dijital ortama aktarılan kitapların sonsuza kadar saklanabileceğini',
      'Yeni icatların ve pop şarkılarının her zaman eski eserlerden daha kaliteli (estetik) olduğunu'
    ],
    correct: 1,
    explanation: 'Canlıların/teknolojinin yaşlandıkça ölmesi ama kitapların/fikirlerin yaşlandıkça geleceğe kalma şansının artması; eskinin (klasiklerin) zamana meydan okuma gücünü (Lindy Etkisini) açıklar.'
  },
  {
    title: 'Batavia Gemi Kazası ve Psikopatın Yükselişi',
    passage: '1629 yılında Hollanda gemisi Batavia, ıssız bir mercan resifine çarparak battı. Kaptan yardım çağırmak için küçük bir tekneyle uzaklaşırken, geride kalan yüzlerce insan adada mahsur kaldı. Bu umutsuz çaresizlik ortamında, Jeronimus Cornelisz adında bir tüccar (hiçbir rütbesi olmamasına rağmen) karizması ve gaddarlığıyla gücü ele geçirdi. Cornelisz, adadaki yiyecekleri tekeline aldı ve kendine sadık bir grup katil (asker) yarattı. Aylar içinde hiçbir mantıklı sebep yokken zevk için bebekleri, kadınları ve muhalifleri katlederek 120 masum insanı öldürdü. Batavia enkazı, medeniyet dediğimiz kanunların ve üniformaların olmadığı (izole) bir kriz anında, karizmatik bir psikopatın korku ve itaati kullanarak bir toplumu saniyeler içinde nasıl cehenneme sürükleyebileceğinin (gerçek hayattaki Sineklerin Tanrısı\'nın) kanlı bir belgeselidir.',
    questionStem: 'Batavia gemi kazası (Jeronimus Cornelisz\'in liderliği) olayının insan doğası üzerine verdiği sarsıcı (sosyolojik) mesaj nedir?',
    options: [
      'Denizcilik yasalarının o dönemde çok eksik ve hatalarla dolu olması',
      'Hollandalı tüccarların ticaret yaparken her zaman şiddete başvurma eğiliminde olması',
      'Uygarlık yasalarının, otoritenin ve denetimin ortadan kalktığı (izole) bir kriz ortamında; karizmatik bir psikopatın, korkuyu ve manipülasyonu kullanarak sıradan insanları vahşete ve cehenneme sürükleyebilecek kadar kolayca gücü ele geçirebilmesi',
      'Mercan resiflerinde hayatta kalmanın insan psikolojisinde halüsinasyonlara neden olması'
    ],
    correct: 2,
    explanation: 'Kaptan gidip yasalar yok olduğunda, rütbesiz bir tüccarın korkuyla gücü ele geçirip 120 kişiyi katletmesi; medeniyetin çöküşü anında psikopatların korkuyla toplumu cehenneme (Sineklerin Tanrısı gibi) sürükleyebileceğini gösterir.'
  },
  {
    title: 'Ebbinghaus Unutma Eğrisi',
    passage: 'Birçoğumuz ezberlediğimiz bilgileri ertesi gün unuttuğumuzda hafızamızın "bozuk veya yetersiz" olduğunu düşünerek kendimize kızarız. Oysa 19. yüzyılda psikolog Hermann Ebbinghaus, "Unutma Eğrisi" deneyiyle bunun bir hata değil, kusursuz bir biyolojik tasarım olduğunu kanıtladı. Beyin, yeni öğrendiği bir verinin (eğer tekrar edilmezse veya hayati bir önemi yoksa) %70\'ini sadece 24 saat içinde çöpe atar. Çünkü beynin birincil görevi her şeyi hatırlamak (depolamak) değil; acımasızca eleyerek, sadece hayatta kalmamızı sağlayacak en taze ve en önemli verilere yer açmaktır. Unutmak bir zayıflık veya sistem hatası (bug) değildir; beynimizin o devasa ve gereksiz gürültü çöplüğünde boğulup delirmemizi engelleyen, bizi hayatta tutan muazzam bir savunma ve temizlik stratejisidir (feature).',
    questionStem: 'Ebbinghaus\'un "Unutma Eğrisi" teorisi, "unutmak" eylemine dair geleneksel ve olumsuz algıyı nasıl yıkmıştır?',
    options: [
      'Unutkanlığın aslında beslenme yetersizliği ve vitamin eksikliğinden kaynaklanan bir hastalık olduğunu savunarak',
      'İnsanların yaşlandıkça beyin hücrelerinin küçülmesi nedeniyle hafızalarının kaçınılmaz olarak zayıfladığını göstererek',
      'Unutmayı bir hafıza zayıflığı veya kusuru (hata) olarak değil; beynin, gereksiz gürültüden arınarak sadece hayati bilgilere odaklanmasını ve delirmekten kurtulmasını sağlayan "kusursuz bir savunma ve temizlik mekanizması" olarak tanımlayarak',
      'Hafızanın sadece uyku sırasında yeni bilgileri kalıcı belleğe aktardığını ispatlayarak'
    ],
    correct: 2,
    explanation: 'Unutmanın bir hata (bug) değil, beynin gereksiz bilgileri atıp delirmekten kurtulmasını sağlayan muazzam bir temizlik ve savunma stratejisi (feature) olduğunu göstererek olumsuz algıyı yıkmıştır.'
  },
  {
    title: 'Maxwell\'in Şeytanı ve Evrenin Sonu',
    passage: 'Evrenin en kesin yasası olan Termodinamiğin 2. Yasasına (Entropi) göre, her şey düzenden kaosa doğru (dağılmaya) gider ve ısı her zaman sıcaktan soğuğa akar. Fizikçi James Clerk Maxwell 1867\'de bu yasayı kırmak için felsefi bir deney (Maxwell\'in Şeytanı) kurguladı: Ortadan ikiye bölünmüş bir kutunun kapısında mikroskobik, zeki bir "şeytan" bekler. Bu şeytan, hızlı (sıcak) moleküller geldiğinde kapıyı açıp sağ tarafa alır, yavaş (soğuk) moleküller geldiğinde ise sol tarafa alır. Sonunda kutunun bir tarafı cehennem gibi ısınırken diğer tarafı buz gibi olur. Yani şeytan, entropiyi geriye çevirmiş ve evrenin en büyük kuralını yıkmıştır! Bu zihinsel deney, sadece fizikte değil felsefede de büyük bir kavgaya neden oldu: Eğer bilgi (ölçüm yapan bilinçli bir şeytan/zekâ) işin içine girerse, evrenin o tek yönlü, ölüme ve kaosa (entropiye) giden kaderi gerçekten geri çevrilebilir mi?',
    questionStem: 'Maxwell\'in Şeytanı düşünce deneyinin, evrensel yasalarla (Entropi ile) girdiği asıl felsefi/fiziksel çatışma nedir?',
    options: [
      'Şeytanların (kötü ruhların) insan bedenindeki hücresel yaşlanmayı hızlandırıp hızlandıramayacağı',
      'Zeki bir müdahalenin (bilgi ve ölçüm yapan bir bilincin), evrenin tek yönlü olan kaosa ve çürümeye (entropiye) gidiş kuralını teorik olarak tersine çevirip (düzen yaratıp) yaratamayacağı sorunsalı',
      'Kutuların içindeki gazların ısındıkça patlama riski taşıması ve laboratuvar güvenliğinin ihlal edilmesi',
      'Termodinamik yasalarının sadece dünya atmosferi içinde geçerli olup uzayda çalışmaması'
    ],
    correct: 1,
    explanation: 'Zeki bir şeytanın kapıyı açıp kapatarak sıcak ve soğuğu ayırması (düzen kurması); bilgi ve zekânın, evrenin kaosa/çürümeye giden o yıkılmaz entropi yasasını tersine çevirip çeviremeyeceğini sorgular.'
  }
];

// 21. MAKİNE (Düzeltilmiş Hali)
export const felsefeParagrafSorulari21: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_21.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_21[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe21-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_22 = [
  {
    title: 'Büyük Patlamanın Yankısı ve Güvercin Dışkısı',
    passage: '1964 yılında astronomlar Arno Penzias ve Robert Wilson, devasa bir radyo anteniyle uzayı dinlerken sürekli rahatsız edici, cızırtılı bir dip gürültüsü duydular. Antenin içine yuva yapmış güvercinlerin dışkılarının bu sese neden olduğunu düşünüp anteni günlerce temizlediler; ancak o cızırtı hiç kesilmedi. Yıllar sonra anlaşıldı ki, o silemedikleri gürültü aslında 13.8 milyar yıl önce gerçekleşen Büyük Patlama\'nın (Big Bang) evrenin dokusunda bıraktığı o ebedi yankıydı (Kozmik Mikrodalga Arka Plan Işıması). Bilim tarihinin bu en büyük keşiflerinden biri, insanoğlunun evrenin yaratılış anına ait o en yüce (kutsal) sırrı, başlangıçta sadece sıradan bir "kuş pisliği" sanarak temizlemeye çalışması gibi muazzam ve komik bir kozmik ironiyle taçlanmıştır.',
    questionStem: 'Büyük Patlama\'nın (Big Bang) yankısının keşfediliş hikâyesindeki asıl "kozmik ironi (çelişki)" nedir?',
    options: [
      'Gelişmiş radyo antenlerinin kuşlar tarafından kolayca yuva olarak kullanılabilmesi',
      'Bilim insanlarının evrenin başlangıcına ait (kutsal ve yüce) o en büyük sırrı, ilk başta sıradan, rahatsız edici bir "kuş pisliği (kir)" sanarak temizlemeye çalışması',
      'Uzaydan gelen sinyallerin her zaman parazitli ve anlamsız sesler olarak algılanması',
      'Kozmik ışımaların insan kulağının duyamayacağı kadar düşük bir frekansta olması'
    ],
    correct: 1,
    explanation: 'Evrenin yaratılış çığlığı gibi yüce bir sırrın, sıradan ve rahatsız edici bir güvercin pisliği (kir) sanılıp silinmeye çalışılması olayın asıl kozmik ironisidir.'
  },
  {
    title: 'Dodo Kuşunun Trajedisi (Evrimsel Saflık)',
    passage: 'Mauritius adasında yaşayan Dodo kuşları, adada hiçbir vahşi yırtıcı (düşman) olmadığı için milyonlarca yıl içinde uçma yeteneklerini kaybetmiş ve hantallaşmışlardı. Ancak 16. yüzyılda adaya ilk Avrupalı denizciler ayak bastığında, Dodolar kaçmak veya saldırmak yerine, içgüdüsel bir "korkusuzluk ve merakla" bu yabancıların yanına yürüyüp onlara yaklaştılar. İnsanlar, kendilerine güvenerek yaklaşan bu kuşları sopalarla vurarak eğlence için katlettiler ve türlerini tamamen yok ettiler. Dodo kuşunun yok oluşu bir doğa felaketi değil; izole ve güvenli bir dünyada büyüyen saf (kötülük bilmeyen) bir canlının, acımasız bir yırtıcıyla (insanla) karşılaştığında ödediği o ölümcül "evrimsel saflık" ve "yersiz güven" faturasıdır.',
    questionStem: 'Dodo kuşunun neslinin tükenmesi, evrimsel (ve psikolojik) bağlamda neyin trajedisini sembolize etmektedir?',
    options: [
      'Kanatlarını kullanmayan canlıların zamanla uçma yetisini kaybederek evrimsel bir gerileme yaşamasının',
      'İzole ortamlarda tehlike (kötülük) görmeden büyüyen canlıların, acımasız gerçeklikle karşılaştıklarında sergiledikleri o ölümcül saflığın ve yersiz güvenin (savunmasızlığın)',
      'Denizcilerin yanlarında getirdikleri virüslerin ada ekosistemlerini saniyeler içinde yok edebilmesinin',
      'Kuş türlerinin diğer yırtıcı hayvanlara göre doğada çok daha zayıf ve av olmaya yatkın olmasının'
    ],
    correct: 1,
    explanation: 'Düşman görmedikleri için insanlara merakla yaklaşıp katledilmeleri; kötülük bilmeyen o "evrimsel saflığın ve yersiz güvenin" yarattığı ölümcül trajediyi sembolize eder.'
  },
  {
    title: 'Aptallar Gemisi (Platon\'un Demokrasi Eleştirisi)',
    passage: 'Platon "Devlet" adlı eserinde demokrasinin kusurunu efsanevi bir alegoriyle (Aptallar Gemisi) anlatır. Bir gemi düşünün; kaptanı güçlü ama sağır ve uzağı göremeyen biridir. Tayfalar ise denizcilikten hiç anlamamalarına rağmen dümeni ele geçirmek için sürekli kavga eder, kaptanı uyuşturucuyla uyutup gemiyi yağmalarlar. Gemide yıldızlara bakarak yön bulmayı (navigasyonu) bilen tek bir bilge denizci vardır; ancak cahil tayfalar o bilgeyi "işe yaramaz, boş konuşan bir ahmak" diyerek dışlarlar. Gemi eninde sonunda kayalıklara çarpıp batar. Platon bu hikâye ile demokrasinin o karanlık zaafını vurur: Bilgi ve liyakat dışlandığında; gemiyi (devleti) yönetenler en bilge olanlar değil, kalabalıkları en iyi kandırabilen ve en yüksek sesle bağıran manipülatörler (aptallar) olacaktır.',
    questionStem: 'Platon\'un "Aptallar Gemisi" alegorisinde demokrasi sistemine yönelttiği asıl felsefi eleştiri nedir?',
    options: [
      'Devlet yönetiminin her zaman güçlü askerler (kaptanlar) tarafından diktatörlükle yönetilmesi gerektiği',
      'Liyakat ve bilgelik dışlandığında, yönetimin (dümenin) işi bilenlerin değil; kalabalıkları en iyi kandıran cahil ama yüksek sesli manipülatörlerin (tayfaların) eline geçerek toplumu yıkıma sürükleyeceği',
      'Denizcilik gibi zor mesleklerin halkın genel oyuyla değil, kraliyet atamalarıyla belirlenmesi zorunluluğu',
      'Eğitimsiz halkın her zaman yöneticilere sadık kalıp isyan etmekten korktuğu'
    ],
    correct: 1,
    explanation: 'Bilge denizcinin dışlanıp cahil tayfaların gemiyi yönetmesi; demokraside liyakatin yerini yüksek sesli (cahil) manipülatörlerin alması eleştirisidir.'
  },
  {
    title: 'Tutsak İkilemi (Oyun Teorisi ve İhanet)',
    passage: 'Oyun Teorisinin en meşhur problemi olan "Tutsak İkilemi" şöyledir: İki suç ortağı yakalanıp ayrı hücrelere konur. Polisin elinde yeterli delil yoktur. Eğer ikisi de susarsa sadece 1\'er yıl yatacaklardır. Ancak polisin teklifi sinsidir: "Eğer sen konuşur, arkadaşını satarsan serbest kalırsın, o 10 yıl yatar." Eğer ikisi de birbirine ihanet edip konuşursa ikisi de 5\'er yıl yatacaktır. Mantıken ikisinin de susması (işbirliği) her ikisi için de en kârlı seçenektir. Ancak insanlar diğerinin sessiz kalacağına (güvene) asla tam olarak inanamadıkları ve kendi çıkarlarını maksimize etmek istedikleri için genellikle ihanet etmeyi (konuşmayı) seçer ve ikisi de 5 yıl ceza yer. Bu ikilem, insan aklının sırf "bencilce ve rasyonel" davrandığı için, aslında herkesin yararına olan o kusursuz dayanışmayı (güveni) nasıl kendi elleriyle yıktığının trajik matematiksel ispatıdır.',
    questionStem: 'Tutsak İkilemi (Prisoner\'s Dilemma), insan davranışlarındaki hangi trajik çelişkiyi (zaafı) ortaya koymaktadır?',
    options: [
      'Suçluların polis baskısı altında her zaman yalan söyleme eğiliminde olmasını',
      'İnsanların kendi bencil (rasyonel) çıkarlarını koruma güdüsü ve güven eksikliği yüzünden, aslında her iki tarafın da faydasına olacak olan o "en iyi sonucu (dayanışmayı)" kendi elleriyle sabote etmesini',
      'Hapishane koşullarının suçluları birbirine düşman ederek rehabilite etmeyi engellemesini',
      'Adalet sisteminin her zaman güçlü olanı koruyup zayıf olanı cezalandırdığını'
    ],
    correct: 1,
    explanation: 'En kârlısı susmak (dayanışma) iken güven eksikliği ve bencillik yüzünden ihanet edip 5 yıl yatmaları; bencil aklın dayanışmayı/en iyi sonucu sabote ettiğini gösterir.'
  },
  {
    title: 'Parkinson Yasası (Bürokratik Zaman)',
    passage: 'İngiliz tarihçi C. Northcote Parkinson, bürokrasinin ve şirketlerin nasıl çalıştığını incelerken o meşhur "Parkinson Yasası"nı formüle etmiştir: "Bir iş, onun tamamlanması için ayrılan zamanı dolduracak kadar esner ve genişler." Eğer bir e-posta yazmak için size 2 saat verilirse, o iş tam 2 saat sürer. Aynı e-posta için size 2 hafta süre verilirse, siz o 2 haftayı taslaklar çıkararak, kelimeleri değiştirerek ve gereksiz bir kaygı (stres) yaşayarak harcarsınız; iş yine tam 2 hafta sürer! Bu yasa; çalışma hayatındaki o devasa meşguliyetin (toplantıların ve kâğıt işlerinin) çoğunun aslında sahte olduğunu; insanın "çok çalışıyormuş gibi" görünmek uğruna zamanı kendi ürettiği o anlamsız bürokratik gürültüyle (kof bir şişkinlikle) doldurduğunu kanıtlar.',
    questionStem: 'Parkinson Yasası ("İş, ayrılan zamanı dolduracak kadar genişler"), çalışma hayatındaki hangi yanılgıyı ifşa etmektedir?',
    options: [
      'Çalışanların maaşları arttıkça iş verimliliklerinin aynı oranda düştüğünü',
      'Zamanın kısıtlı olmasının insan beyninde yaratıcılığı tamamen durdurduğunu',
      'Bürokrasideki veya iş hayatındaki o devasa meşguliyetin (uzun çalışma saatlerinin) çoğunun aslında verimlilik değil; insanın o boş vakti sahte bir çabayla (kof bir gürültüyle) doldurma illüzyonu olduğunu',
      'Teknolojinin iş süreçlerini hızlandırmak yerine daha da karmaşıklaştırdığını'
    ],
    correct: 2,
    explanation: '2 saatlik işin 2 haftaya esnemesi; iş hayatındaki o "çok yoğun" görünme halinin aslında zamanı kof/sahte bir bürokratik çabayla doldurma illüzyonu olduğunu ifşa eder.'
  },
  {
    title: 'Deus Ex Machina (Makinedeki Tanrı)',
    passage: 'Antik Yunan tiyatrosunda oyun yazarları, hikâyeyi içinden çıkılmaz bir düğüme soktuklarında çok ucuz bir hileye başvururlardı. Sahnenin tepesindeki bir vinç (makine) yardımıyla sahneye bir "Tanrı" heykeli indirilir ve bu tanrı tek bir sözle tüm sorunları anında çözerdi. Buna "Deus Ex Machina" (Makineden İnen Tanrı) denirdi. Aristoteles bu yöntemi, yazarın yeteneksizliği ve tembelliği olarak ağır bir dille eleştirdi. Günümüzde bu kavram, insanların kendi eylemlerinin o katı (ve acı verici) mantıksal sonuçlarıyla yüzleşmek yerine; gökten inecek sihirli bir kahramana, piyangoya veya ani bir mucizeye (kurtarıcıya) bel bağlama şeklindeki o pasif, tembel ve çaresiz psikolojisini tanımlamak için kullanılan felsefi bir metafora dönüşmüştür.',
    questionStem: 'Deus Ex Machina (Makineden İnen Tanrı) kavramı, tiyatro terimi olmaktan çıkıp insan psikolojisine uyarlandığında neyi eleştirir?',
    options: [
      'Teknolojik makinelerin insanın inanç sistemlerini yok ederek onu mutsuzluğa sürüklemesini',
      'İnsanın kendi hatalarının mantıksal ve acı verici sonuçlarıyla yüzleşmek (sorumluluk almak) yerine, sorunları anında çözecek dışsal ve sihirli bir "mucizeye (kurtarıcıya)" bel bağlayan o tembel/pasif çaresizliğini',
      'Antik dönem tiyatrolarında kullanılan mekanik sistemlerin aslında çok ilkel olmasını',
      'Din adamlarının toplumu korkutmak için kullandığı kurgusal mitolojik hikâyeleri'
    ],
    correct: 1,
    explanation: 'Sahneye inen tanrının sorunu anında çözmesi; insanın sorumluluk/sonuçlarla yüzleşmek yerine dışarıdan (sihirli) bir kurtarıcı/mucize bekleme tembelliğini eleştirir.'
  },
  {
    title: 'Bhopal Felaketi (Sessiz Katliam)',
    passage: '3 Aralık 1984 gecesi, Hindistan\'ın Bhopal kentinde binlerce insan uykularındayken üzerlerine beyaz, yoğun bir sis çöktü. Bu bir sis değil, Union Carbide adlı Amerikan böcek ilacı fabrikasından sızan siyanür (metil izosiyanat) gazıydı. 15 bin kişi ciğerleri kanayarak, boğularak ve kör olarak can verdi; yarım milyon insan sakat kaldı. Bu bir endüstriyel kaza değildi; şirket maliyetleri (masrafları) kısmak için güvenlik sistemlerini, soğutucuları ve alarm altyapılarını kasıtlı olarak kapatmış, vanaları paslanmaya terk etmişti. Bhopal Felaketi; vahşi kapitalizmin ve şirket kârlarının, insan hayatını (ve ahlakı) bilançolardaki bir "maliyet kalemi" olarak görüp gözünü kırpmadan nasıl sessiz bir gaz odasına çevirebileceğinin tarihteki en kanlı belgesidir.',
    questionStem: 'Bhopal Felaketi\'nin bir "kaza" olmaktan çıkıp "katliam" olarak anılmasının temel gerekçesi parçada nasıl açıklanmıştır?',
    options: [
      'Fabrikada üretilen gazın aslında böcek ilacı değil, gizli bir askeri silah olması',
      'Felaketin kaçınılmaz bir doğa olayından değil; şirketin sırf masrafları kısmak (kârını artırmak) uğruna güvenlik sistemlerini bilerek kapatıp insan hayatını hiçe sayan ahlaksız (kapitalist) tercihinden kaynaklanması',
      'Hindistan hükümetinin olaya müdahale etmek yerine halkı fabrikada çalışmaya zorlaması',
      'Gazın sızıntı hızının o dönemin mühendisliği tarafından asla hesaplanamayacak kadar yüksek olması'
    ],
    correct: 1,
    explanation: 'Maliyetleri kısmak için güvenlik sistemlerinin bilerek (kasten) kapatılması; olayın bir kaza değil, kâr uğruna insan hayatını hiçe sayan bir şirket katliamı olduğunu gösterir.'
  },
  {
    title: 'Winchester Gizem Evi (Travmanın Mimarisi)',
    passage: 'Silah tüccarı William Winchester öldüğünde, eşi Sarah Winchester devasa bir mirasla dul kaldı. Ancak Sarah, kocasının ürettiği silahlarla ölen binlerce insanın ruhunun kendisine musallat olduğuna (lanetlendiğine) inanıyordu. Bir medyumun tavsiyesiyle, Kaliforniya\'da devasa bir malikâne inşa etmeye başladı ve inşaat 38 yıl boyunca (o ölene dek) hiç durmadı. Ancak bu ev normal değildi; hayaletlerin kafasını karıştırmak için tavana açılan merdivenler, tuğla duvara açılan kapılar ve labirent gibi koridorlar yaptırdı. Winchester Gizem Evi, sadece tuhaf bir mimari eser değildir; o, insanın zihnindeki o devasa korkuyu (ve suçluluk travmasını) dindirebilmek için, fiziksel duvarlar örerek kendi vicdanından ve hayaletlerinden kaçmaya çalışmasının o umutsuz, çaresiz ve taştan kâbusudur.',
    questionStem: 'Sarah Winchester\'ın evine anlamsız kapılar ve merdivenler (gizemler) inşa etmesinin arkasındaki asıl psikolojik motivasyon nedir?',
    options: [
      'Gelecekte bu evin bir müze olacağını düşünerek ticari bir turizm cazibesi yaratma hırsı',
      'Mimari kuralları yıkarak dönemin sanat anlayışına (ve estetiğine) karşı başlattığı avangart bir isyan',
      'İçinde taşıdığı o devasa ölüm (suçluluk) travması ve hayalet korkusundan kurtulabilmek için, fiziksel mekânı (mimariyi) bir kaçış ve saklanma labirenti olarak kullanma çaresizliği',
      'Evin içine girebilecek gerçek hırsızları ve düşmanları tuzağa düşürmek için tasarladığı bir güvenlik sistemi'
    ],
    correct: 2,
    explanation: 'Ölenlerin ruhundan korktuğu için tavana merdiven, duvara kapı yapması; içsel suçluluk travmasından (hayaletlerden) mimari bir labirent örerek kaçma çaresizliğini anlatır.'
  },
  {
    title: 'Boş Çerçeveler (Isabella Stewart Gardner Müzesi)',
    passage: '1990 yılında, Boston\'daki Isabella Stewart Gardner Müzesi\'ne polis kılığında giren iki hırsız, aralarında Rembrandt ve Vermeer\'in bulunduğu paha biçilmez 13 tabloyu çerçevelerinden keserek çaldı. Aradan otuz yıldan fazla zaman geçmesine rağmen o tablolar asla bulunamadı. Ancak müze yönetimi çok felsefi bir karar aldı: Çalınan tabloların yerlerine yeni eserler asmak yerine, o "boş çerçeveleri" aynı duvarlarda asılı bırakmaya devam ettiler. Bugün müzeye giden binlerce insan, tabloların kendisinden çok o boş çerçeveleri izlemek için sıraya girmektedir. O boş çerçeveler; sanatın (ve insanın) sadece var olduğu (göründüğü) anlarda değil, geri dönülemez bir şekilde "kaybedildiği (yok olduğu) anlarda" yarattığı o kahredici boşluk hissiyle de ne kadar güçlü ve ölümsüz bir iz bırakabileceğinin kusursuz bir kanıtıdır.',
    questionStem: 'Müze yönetiminin "boş çerçeveleri" duvarda bırakması, ziyaretçiler üzerinde nasıl bir felsefi/psikolojik etki (algı) yaratmıştır?',
    options: [
      'Hırsızların müzeye geri dönüp tabloları gizlice çerçevelere geri takacağı inancını',
      'Sanatın sadece fiziksel varlığıyla (boyasıyla) değil, kaybedilenin ardından bıraktığı o "büyük eksiklik ve boşluk hissiyle" de izleyiciyi sarsan (ölümsüz) bir güce sahip olduğu algısını',
      'Müze yönetiminin çalınan eserlerin aslında sahte olduğuna dair gizli bir mesaj verme çabasını',
      'Sanat eserlerinin çerçeveler olmadan hiçbir estetik değer taşımadığı yönündeki eleştiriyi'
    ],
    correct: 1,
    explanation: 'İnsanların boş çerçeveyi izlemesi; sanatın sadece varlığıyla değil, "kaybedilişin (yokluğun) yarattığı o boşluk hissiyle de" ölümsüz ve sarsıcı bir etki bıraktığını gösterir.'
  },
  {
    title: 'Max Headroom Korsan Yayını (Sinyal İhlali)',
    passage: '22 Kasım 1987 gecesi Chicago\'da binlerce insan televizyonlarında haber bültenini izlerken ekran aniden karardı. Görüntü geldiğinde, sarsıntılı bir arka planın önünde yüzünde ürkütücü bir "Max Headroom" maskesi olan kimliği belirsiz bir adam belirdi. İki dakika boyunca ekranda inleyerek, bağırarak ve gülerek anlamsız (sürreal) hareketler yaptı, sonra yayın normale döndü. FBI günlerce aradı ama bu korsan yayını kimin, nereden, nasıl yaptığı (hacklediği) asla bulunamadı. O dönemde devasa yayın antenleri kırılamaz sanılıyordu. "Max Headroom Olayı", teknolojik sistemlerimizin (medyanın) ne kadar dokunulmaz ve güçlü görünürse görünsün; evinin garajında oturan, sistemi anlayan tek bir anarşist (veya şakacı) tarafından saniyeler içinde nasıl aciz (ve komik) bir duruma düşürülebileceğinin en gerçeküstü kanıtıdır.',
    questionStem: 'Max Headroom olayının Amerikan toplumunda (ve teknoloji dünyasında) yarattığı asıl şok edici kırılma nedir?',
    options: [
      'Televizyon programcılarının izleyicileri eğlendirmek için kasten sahte haberler üretmesi',
      'Devletin ve büyük medyanın "aşılamaz, kusursuz" sanılan devasa teknolojik yayın altyapısının; aslında anonim ve sıradan biri tarafından saniyeler içinde kırılarak (hacklenerek) ne kadar savunmasız (kırılgan) olduğunun ispatlanması',
      'Plastik maske üreten şirketlerin bu olaydan sonra iflas etmesi',
      'Haber bültenlerinde şiddet içerikli görüntülerin yayınlanmasının tamamen yasaklanması'
    ],
    correct: 1,
    explanation: 'Aşılamaz sanılan devasa yayın sisteminin yüzü maskeli biri tarafından saniyeler içinde hacklenmesi; teknolojik altyapının (devletin/medyanın) aslında ne kadar savunmasız ve kırılgan olduğunu ispatlamıştır.'
  },
  {
    title: 'Gogol\'un Palto\'su (Küçük Adamın Ezilişi)',
    passage: 'Rus yazar Nikolay Gogol\'un "Palto" adlı öyküsünde, Akakiy Akakiyeviç adında silik, yoksul ve sürekli alay edilen bir memur vardır. Hayattaki tek amacı, kendisini soğuktan ve aşağılanmaktan koruyacak yeni, şık bir palto diktirebilmektir. Yemez içmez, yıllarca para biriktirir ve o muazzam paltoya kavuşur. Paltoyu giydiği ilk gün toplum ona saygı duyar; ancak gece sokakta paltosu çalınır. Polise ve rütbeli "Önemli Kişilere" yalvarır ama o acımasız bürokrasi onu sadece azarlar ve kovar. Akakiy kahrından ve soğuktan hastalanıp ölür. Dostoyevski\'nin "Hepimiz Gogol\'un Palto\'sundan çıktık" dediği bu eser; devasa, soğuk ve kibirli devlet (bürokrasi) çarklarının arasında ezilen o çaresiz, yalnız ve "sıradan küçük insanın" sessiz çığlığının, edebiyat tarihindeki en acımasız anıtıdır.',
    questionStem: 'Gogol\'un "Palto" öyküsünde Akakiy Akakiyeviç karakteri üzerinden yapılan asıl toplumsal (sistemsel) eleştiri nedir?',
    options: [
      'Yoksul insanların paralarını tasarruf etmek yerine gösterişli kıyafetlere harcayarak lüks düşkünü olması',
      'Rusya\'daki çetin kış şartlarının memurların sağlığını kalıcı olarak bozması',
      'Devasa, kibirli ve ruhsuz bürokrasi (devlet/toplum) çarklarının; kendisinden güçsüz olan o "sıradan, çaresiz küçük insanı" nasıl görmezden gelip acımasızca ezip yok ettiği',
      'Sokak güvenliğinin sağlanamamasının (hırsızlığın) ekonomik krizleri tetiklemesi'
    ],
    correct: 2,
    explanation: 'Akakiy\'nin paltosu çalındıktan sonra yetkililer (Önemli Kişiler) tarafından azarlanıp ölüme terk edilmesi; bürokrasinin/toplumun "sıradan küçük insanı" nasıl ezip yok ettiğinin (duyarsızlığın) eleştirisidir.'
  },
  {
    title: 'Praglı Golem (Kontrolden Çıkan Güç)',
    passage: '16. yüzyılda, Prag\'daki Yahudi gettosu sürekli saldırılara uğruyordu. Efsaneye göre Haham Loew, halkını korumak için nehir kenarındaki çamurdan devasa bir heykel (Golem) yaptı ve alnına mistik kelimeler yazarak ona can verdi. Golem, efendisinin emirlerine harfiyen uyuyor ve mahalleyi acımasızca koruyordu. Ancak zamanla bu cansız ve ruhsuz toprak yığını kontrolden çıkmaya, koruması gereken insanları da parçalamaya başladı. Haham sonunda Golem\'in alnındaki yazıyı silerek onu tekrar cansız bir çamura çevirmek zorunda kaldı. "Praglı Golem" efsanesi, günümüz Yapay Zekâ (AI) ve teknoloji tartışmalarının en kadim atasıdır. İnsanoğlu, kendini korumak veya işlerini yaptırmak için "ruhu, vicdanı ve ahlakı olmayan" devasa bir güç yarattığında; o gücün eninde sonunda kontrolden çıkıp kendi yaratıcısını ezeceğine dair duyulan o ilkel korkunun (ve kibrin) taştan simgesidir.',
    questionStem: 'Praglı Golem efsanesinin, modern dünyadaki "Yapay Zekâ" tartışmalarıyla kurduğu felsefi paralellik (metafor) nedir?',
    options: [
      'Yapay zekânın sadece dini ve mistik şifrelerle programlanabileceği gerçeği',
      'İnsanın kendisini koruması veya hizmet etmesi için yarattığı "ruhsuz ve ahlaktan yoksun" devasa gücün (makinenin), bir gün kontrolden çıkıp bizzat kendi yaratıcısını yok etme tehlikesi (ve korkusu)',
      'Çamur (silikon) tabanlı işlemcilerin günümüzde bilgisayar teknolojisinde kullanılması',
      'Büyük şehirlerde güvenlik güçlerinin yetersiz kalarak robot polislere ihtiyaç duyması'
    ],
    correct: 1,
    explanation: 'Koruyucu olarak yaratılan ruhsuz Golem\'in kontrolden çıkıp yaratıcısına saldırması; yapay zekânın (ruhsuz gücün) kontrolden çıkıp insanlığı yok etme korkusuna (Frankenstein kibrine) kusursuz bir paraleldir.'
  },
  {
    title: 'Tenerife Uçak Kazası (Otorite Körü)',
    passage: '1977 yılında İspanya\'nın Tenerife adasında, sivil havacılık tarihinin en ölümcül kazası (583 ölü) yaşandı. Yoğun bir sisin içinde, KLM ve Pan Am havayollarına ait iki devasa Boeing 747 pistte çarpıştı. Ancak bu kaza mekanik bir arızadan değil, "psikolojik" bir felaketten doğdu. KLM uçağının kaptanı Veldhuyzen van Zanten, şirketin en efsanevi, en rütbeli ve poster yüzü olan pilotuydu. Kule uçuş izni vermemesine rağmen sisin içinde gaza basıp kalkışa geçti. Yanında oturan genç yardımcı pilot (ve uçuş mühendisi) bir şeylerin yanlış olduğunu biliyor, diğer uçağın pistte olabileceğini görüyordu; ancak o "efsanevi ve kusursuz" kaptana karşı çıkmaya, onu sertçe durdurmaya cesaret (ve cüret) edemedi. Tenerife faciası; otorite kibrinin ve hiyerarşi karşısındaki o körü körüne itaatin, mantığı ve apaçık gerçeği bile nasıl ölüme (suskunluğa) sürüklediğinin en kanlı ispatıdır.',
    questionStem: 'Tenerife Uçak Kazası\'nın temelinde yatan ve ölümleri kaçınılmaz kılan "psikolojik (insani) hata" nedir?',
    options: [
      'Uçaklardaki radar sistemlerinin sisli havalarda kesinlikle çalışmaması',
      'Hiyerarşinin ve "otoriteye duyulan mutlak itaatin" (otorite körlüğünün), alt kademedeki bireylerin gördükleri açık tehlikeyi dile getirmesini (eleştirel aklı) felç ederek onları ölümcül bir suskunluğa itmesi',
      'Her iki uçağın kaptanlarının birbirleriyle olan eski ve kişisel düşmanlığı',
      'Yolcuların uçak içinde paniğe kapılarak kokpite girmeye çalışması'
    ],
    correct: 1,
    explanation: 'Yardımcı pilotun hatayı görmesine rağmen "efsanevi" kaptana karşı çıkamaması; otorite kibrinin ve hiyerarşik itaatin eleştirel aklı felç etmesi (otorite körlüğü) olarak açıklanır.'
  },
  {
    title: 'Odin\'in Fedakârlığı (Yggdrasil)',
    passage: 'İskandinav mitolojisinin baş tanrısı Odin, sonsuz bilgeliğe (runelerin sırrına) ulaşmak için muazzam bir bedel ödemek zorundadır. O, evrenin merkezindeki Hayat Ağacı\'na (Yggdrasil\'e) kendi kendini baş aşağı asar. Tam dokuz gün ve dokuz gece boyunca aç, susuz ve kendi mızrağıyla yaralanmış halde o ağaçta sallanır. Hatta bilgelik kuyusundan (Mimir) su içebilmek için tek gözünü yuvasından oyup kuyuya atar. Odin, tanrı olmasına rağmen "bilginin" bedavaya elde edilemeyeceğini bilir. O, aydınlanmak uğruna acı çekmeyi, karanlığa dalmayı ve kendinden bir parçayı feda etmeyi seçer. Odin\'in bu fedakârlığı; gerçek bilgeliğin kitap sayfalarını çevirerek değil, insanın kendi konfor alanını parçalayarak, kibrini kurban ederek ve hakikatin o acı veren yükünü omuzlayarak kazanılabileceğinin alegorisidir.',
    questionStem: 'Odin\'in Yggdrasil ağacına asılıp gözünü feda etmesi efsanesi, "gerçek bilgiye (bilgeliğe) ulaşma" süreci hakkında neyi sembolize eder?',
    options: [
      'Tanrıların fiziksel olarak acı çekmediklerini ve bu eylemin sadece insanları korkutmak için bir tiyatro olduğunu',
      'Gerçek bilgeliğin (aydınlanmanın) zahmetsiz ve bedavaya elde edilemeyeceğini; bunun için kişinin kendi konforunu, kibrini (ve hatta bedeninden bir parçayı) feda etmesi, derin bir acı ve bedel ödemesi gerektiğini',
      'Ağaçların mitolojide bilgiyi depolayan sihirli birer kütüphane işlevi gördüğünü',
      'Tek gözlü olmanın İskandinav savaşçıları için bir rütbe ve üstünlük sayıldığını'
    ],
    correct: 1,
    explanation: 'Odin\'in günlerce asılı kalıp gözünü oyması; bilgeliğin bedavaya/kolayca alınamayacağını, bunun devasa bir acı, fedakârlık ve konfor/kibir yıkımı gerektirdiğini sembolize eder.'
  },
  {
    title: 'McGurk Etkisi (Duyuların Çarpışması)',
    passage: 'Bir videoda, bir adamın dudaklarının açıkça "Ga-Ga-Ga" dediğini görüyorsunuz. Ancak videonun arka planındaki ses (hoparlörden gelen ses) aslında "Ba-Ba-Ba" demektedir. Gözünüz "Ga"yı görüyor, kulağınız "Ba"yı duyuyor. Peki beyniniz ne yapar? Delirir mi? Hayır. Beyin anında o iki uyumsuz veriyi alıp pürüzsüzce kurgular ve size bambaşka, üçüncü bir ses duyurur: "Da-Da-Da!" Psikolojide "McGurk Etkisi" denen bu olay, dışarıdaki gerçekliğin doğrudan zihnimize girmediğini ispatlar. Duyularımız birbiriyle çeliştiğinde, beynimiz gerçeği bize olduğu gibi sunmaz; çelişkiyi örtbas etmek (mantıklı bir hikâye kurmak) için anında yepyeni, tamamen uydurma (halüsinatif) bir gerçeklik yaratır. Gördüğümüz ve duyduğumuz dünya, objektif bir belgesel değil, beynimizin canlı yayında montajladığı kurgusal bir sinema filmidir.',
    questionStem: 'McGurk Etkisi (gözün farklı, kulağın farklı veri aldığı deney), algımız ve "gerçeklik" hakkında hangi sarsıcı gerçeği kanıtlar?',
    options: [
      'İnsanların yaşlandıkça işitme duyularının görme duyularına göre daha çabuk bozulduğunu',
      'İnsan beyninin, birbiriyle çelişen duyusal verilerle karşılaştığında gerçeği olduğu gibi kabul etmek yerine; çelişkiyi örtmek için yepyeni ve tamamen kurgusal (sahte) bir gerçeklik üreterek bizi kandırdığını',
      'Görsel algının işitsel algıdan daha yavaş (gecikmeli) çalıştığını ve beynin senkronizasyon hatası yaptığını',
      'Yabancı dillerdeki hecelerin insan beyni tarafından hiçbir zaman tam olarak anlaşılamadığını'
    ],
    correct: 1,
    explanation: 'Gözün "Ga", kulağın "Ba" duymasına rağmen beynin "Da" (yepyeni bir ses) yaratması; beynin çelişen verileri örtmek için anında sahte bir gerçeklik/kurgu uydurduğunu (bizi kandırdığını) ispatlar.'
  },
  {
    title: 'Fantazmagorya (Korku Sinemasının Doğuşu)',
    passage: '18. yüzyılın sonlarında, Paris ve Londra sokaklarında "Fantazmagorya" (Phantasmagoria) adı verilen karanlık ve ürkütücü gösteriler düzenlenirdi. Göstericiler, kapkaranlık bir odaya seyircileri toplar ve "Büyülü Fener" (ilkel bir projeksiyon) kullanarak dumanların üzerine iskeletler, iblisler ve ölülerin hayaletlerini yansıtırlardı. Duman hareket ettikçe hayaletler seyircilerin üzerine doğru geliyormuş gibi görünürdü. İnsanlar çığlık çığlığa kaçışır, bayılır ama ertesi gün bu korkunç gösteriyi izlemek için tekrar para öderlerdi. Fantazmagorya, modern korku sinemasının atasıdır. Bu olay, insanoğlunun o en tuhaf psikolojik mazoşizmini ortaya koyar: Fiziksel olarak güvende olduğumuzu (karanlık bir koltukta oturduğumuzu) bildiğimiz anlarda, kendi zihnimizi dehşete düşürmekten, ölümle ve karanlıkla (kurgusal olarak) yüzleşmekten derin ve hastalıklı bir haz (eğlence) duyarız.',
    questionStem: 'Fantazmagorya gösterilerinin (ve korku sinemasının) insanlar tarafından bu kadar talep görmesinin altındaki asıl psikolojik neden (paradoks) nedir?',
    options: [
      'İnsanların ölümden sonraki hayata dair dini inançlarını güçlendirme arzusu',
      'Fiziksel olarak güvende (hayatta) olduklarını bildikleri ortamlarda, ölüm ve dehşet hissiyle "kurgusal olarak" yüzleşmenin insanlarda derin ve paradoksal bir haz (eğlence/mazoşizm) yaratması',
      'Gösterilerde kullanılan dumanın insan beyninde halüsinasyon yaratan uyuşturucu maddeler içermesi',
      'Avrupa halkının orta çağdaki cadı efsanelerini unutmak istemesi'
    ],
    correct: 1,
    explanation: 'İnsanların çığlık atıp bayılmasına rağmen tekrar para ödemesi; fiziksel güvendeyken kurgusal olarak korkuyla/ölümle yüzleşmenin insana paradoksal bir haz ve eğlence verdiğini açıklar.'
  },
  {
    title: 'Kırmızı Ringa Balığı (Red Herring)',
    passage: 'Eski zamanlarda kaçakçılar ve suçlular, peşlerindeki polis köpeklerinin koku alma duyusunu şaşırtmak için yollarına (bambaşka bir yöne doğru) keskin kokulu "Kırmızı Ringa Balığı" sürterlerdi. Köpekler asıl izi bırakıp o keskin ve sahte balık kokusunun peşinden giderdi. Bugün edebiyatta, sinemada ve siyasette bu taktik "Red Herring" (Şaşırtmaca) olarak bilinir. Yazar (veya politikacı), sizin asıl gerçeğe ulaşmanızı engellemek için ortaya çok ilgi çekici, bağırıp çağıran ama konuyla tamamen alakasız sahte bir detay (kriz) atar. Zihin, o anlamsız ama keskin kokulu detaya o kadar odaklanır ki; asıl katili, asıl ekonomik krizi veya asıl gerçeği gözden kaçırır. İnsan zihni, karmaşık ve acı veren asıl gerçeği aramaktansa; önüne atılan o parlak ve basit yalanın peşinden koşmaya (havlamaya) her zaman daha yatkındır.',
    questionStem: 'Edebiyatta ve siyasette kullanılan "Kırmızı Ringa Balığı (Red Herring)" taktiğinin asıl amacı nedir?',
    options: [
      'Toplumun deniz ürünleri ve balıkçılık sektörüne olan ilgisini artırmak',
      'İnsanların uzun odaklanma sürelerini artırarak analitik düşünme yeteneklerini geliştirmek',
      'Ortaya son derece ilgi çekici ancak konuyla tamamen alakasız (sahte) bir kriz/detay atarak, insanların dikkatini dağıtıp onların asıl tehlikeden (veya hakikatten) uzaklaşmasını sağlamak',
      'Köpeklerin koku alma yeteneklerini polis teşkilatları için daha verimli kullanmak'
    ],
    correct: 2,
    explanation: 'Kaçakçıların asıl izi kaybettirmek için sahte ve keskin bir koku (balık) kullanması metaforu; siyasette ve kurguda, dikkat dağıtıcı sahte bir detayla (şaşırtmacayla) halkı asıl gerçekten uzaklaştırmayı tanımlar.'
  },
  {
    title: 'Sessizlik Kuleleri (Zerdüştlerin Gökyüzü Mezarları)',
    passage: 'Kadim Zerdüştlük inancında ateş, su ve toprak kusursuz ve kutsal elementlerdir. Bir insan öldüğünde, o bedenin (cesedin) çürüyerek o kutsal elementleri (toprağı veya ateşi) kirletmesine (bulaşmasına) asla izin verilmez. Bu yüzden Zerdüştler ölülerini gömmez veya yakmazlar. Cesetleri, şehirlerin dışındaki dağ tepelerine inşa edilmiş "Sessizlik Kuleleri"ne (Dakhma) götürüp çırılçıplak bırakırlar. Gökten inen akbabalar, birkaç saat içinde bedendeki tüm etleri yiyerek temizler; geriye kalan kemikler ise güneşin kavurucu ışığında beyazlayıp toza dönüşür. Dışarıdan vahşice görünen bu "Gökyüzü Mezarları", aslında insanın kibrine atılmış en zarif çentiktir. İnsanoğlu, öldükten sonra devasa mermer anıtların altında yatmayı (doğaya hükmetmeyi) değil; doğanın bir parçası olarak sessizce diğer canlıların midesinde (ekosistemde) eriyip gitmeyi, o büyük ve vahşi döngüye sıfır ego ile teslim olmayı seçmiştir.',
    questionStem: 'Zerdüştlükteki "Sessizlik Kuleleri (Gökyüzü Mezarları)" ritüeli, ölüm ve doğa ilişkisi bağlamında neyi sembolize etmektedir?',
    options: [
      'Toprak yetersizliğinden dolayı mecburen uygulanan pratik ve hijyenik bir çöp imha yöntemini',
      'Kuşların ve akbabaların Zerdüşt dininde tanrısal yaratıklar olarak kabul edildiğini',
      'İnsanın öldükten sonra görkemli anıtlar dikme (doğaya hükmetme) kibrini reddederek; kendi bedenini ekosistemin bir parçası olarak doğaya (hayvanlara) sunması ve o vahşi döngüye sıfır egoyla teslim (feda) olmasını',
      'Ateş ve suyun insan bedeniyle temas etmesi durumunda küresel bir felaket yaşanacağı korkusunu'
    ],
    correct: 2,
    explanation: 'Ölüyü gömmek yerine akbabalara yedirmek; mermer anıtlara (kibre) karşı çıkarak insanın doğayı kirletmeden ekosistemin döngüsüne sıfır egoyla teslim olmasını (çevreci/ruhani bir alçakgönüllülüğü) sembolize eder.'
  },
  {
    title: 'Büyük Koku (1858 Londra\'sı)',
    passage: '1858 yılının kavurucu yazında, dönemin en büyük ve en güçlü imparatorluğunun başkenti olan Londra hayatının en utanç verici krizini yaşadı: "Büyük Koku" (The Great Stink). Şehrin iki buçuk milyonluk nüfusunun tüm kanalizasyonu, atıkları ve sanayi atıkları doğrudan Thames nehrine dökülüyordu. Nehir o kadar iğrenç bir lağım çukuruna dönüşmüştü ki, sıcaklık artınca havaya yayılan hidrojen sülfür kokusu şehrin üzerine ölümcül bir sis gibi çöktü. Durum o kadar katlanılmazdı ki, dünyayı yöneten İngiliz Parlamentosu koku yüzünden pencerelerine klora batırılmış perdeler asmak zorunda kaldı ve en sonunda binayı terk edip (çalışmayı durdurup) kaçtılar. Büyük Koku; teknolojinin, sanayinin ve "sınırsız ilerleme" kibrinin; altyapı (ve doğa) yok sayıldığında kendi ürettiği dışkının ve çöpün içinde boğulmaya ne kadar mahkûm olduğunun trajikomik belgesidir.',
    questionStem: 'Büyük Koku (The Great Stink) felaketi, Sanayi Devrimi ve modernleşme kibri hakkında nasıl bir eleştiri barındırır?',
    options: [
      'Sıcak havaların İngiltere gibi soğuk iklim ülkelerinde her zaman ölümcül salgınlara yol açtığını',
      'Thames nehrinin doğal yapısının su akıntılarını engellediğini',
      'Doğayı (ve altyapıyı) hiçe sayarak sadece teknoloji ve sanayi (büyüme) odaklı ilerleyen bir medeniyetin, eninde sonunda kendi ürettiği kirliliğin (dışkının) kurbanı olarak felç olacağını',
      'Politikacıların halkın yaşadığı sorunları asla umursamadığını ve kaçtığını'
    ],
    correct: 2,
    explanation: 'Sanayi ve nüfus büyürken altyapının hiçe sayılıp nehrin lağıma dönmesi ve parlamentoyu felç etmesi; sınırsız ilerleme kibrinin doğayı/altyapıyı yok saydığında kendi çöpünde boğulacağı (felç olacağı) gerçeğini eleştirir.'
  },
  {
    title: 'Ockham\'ın Süpürgesi (Gerçeği Halı Altına Süpürmek)',
    passage: 'Bilimde, en basit açıklamanın doğru olduğunu savunan "Ockham\'ın Usturası"nı hepimiz biliriz. Ancak biyolog Sidney Brenner bunun tam zıttı olan ve çok daha karanlık olan bir durumu "Ockham\'ın Süpürgesi" olarak adlandırmıştır. Bilim insanları veya siyasetçiler, ortaya koydukları o "çok güzel, pürüzsüz ve popüler" teoriyi bozacak, o sisteme uymayacak tuhaf (aykırı) veriler veya kanıtlar bulduklarında ne yaparlar? Bunları teorilerini düzeltmek için kullanmak yerine, tıpkı tozları halının altına süpürür gibi kasıtlı olarak görmezden gelir, sansürler veya "bunlar anomali (istisna)" diyerek çöpe atarlar (süpürürler). Ockham\'ın Süpürgesi; gerçeği bulma aşkının, kişinin kendi egosunu, inancını ve o "kusursuz sanılan teorisini" koruma hırsı karşısında yenik düşerek, hakikatin nasıl kasten örtbas edildiğinin bilimsel adıdır.',
    questionStem: 'Ockham\'ın Süpürgesi (Ockham\'s Broom) kavramı, araştırmacıların veya ideologların hangi "bilim ve ahlak dışı" davranışını tanımlamaktadır?',
    options: [
      'Sadece basit açıklamaları kabul ederek karmaşık bilimsel verileri analiz etmekten kaçınmalarını',
      'Laboratuvar ortamlarının hijyenik olmamasına bağlı olarak deney sonuçlarının sürekli hatalı çıkmasını',
      'Kendi savundukları teorinin (inancın) kusursuzluğunu korumak adına, o teoriye uymayan aykırı (gerçek) verileri kasten görmezden gelip halı altına süpürmelerini (örtbas etmelerini)',
      'Ockham\'ın Usturası prensibini yanlış anladıkları için sürekli komplo teorileri üretmelerini'
    ],
    correct: 2,
    explanation: 'Kendi pürüzsüz teorilerine (egolarına) uymayan aykırı kanıtları/verileri reddedip "anomali" diyerek (halı altına süpürerek) görmezden gelmeleri (örtbas), bu kavramın asıl eleştirisidir.'
  }
];

export const karisikParagrafSorulari22: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_22.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_22[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-karisik22-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_23 = [
  {
    title: 'Kadavra Sinodu (Ölümün Yargılanması)',
    passage: 'MS 897 yılında Roma, tarihinin en korkunç, en absürt mahkemesine sahne oldu. Papa VI. Stephanus, siyasi intikam uğruna dokuz ay önce ölmüş olan eski Papa Formosus\'un çürümüş cesedini mezarından çıkarttırdı. Cesede papalık kıyafetleri giydirildi, tahta oturtuldu ve bir avukat atanarak resmi bir mahkemede yargılandı! Öfkeli Papa, tahtta sessizce çürüyen cesede bağırıp çağırarak onu suçlu buldu, kutsal parmaklarını kestirdi ve cesedi Tiber Nehri\'ne attırdı. "Kadavra Sinodu" olarak bilinen bu olay; mutlak otoritenin ve siyasi kinin (intikam hırsının), aklı ve mantığı nasıl tamamen yok edip, adaleti kelimenin tam anlamıyla ölümden bile korkunç, hastalıklı bir tiyatroya çevirebileceğinin en karanlık kanıtıdır.',
    questionStem: 'Kadavra Sinodu olayı, siyasi otorite ve adalet kavramlarına dair nasıl bir felsefi tablo sunmaktadır?',
    options: [
      'Antik Roma\'da adalet sisteminin her zaman delillere dayanarak kusursuz işlediğini',
      'Orta Çağ papalarının tıp ve anatomi bilimlerine çok büyük önem verdiğini',
      'Kontrolsüz siyasi kinin ve mutlak otoritenin, mantığı ve ahlakı tamamen felç ederek adaleti hastalıklı, absürt ve ölümün (gerçekliğin) sınırlarını bile aşan bir kurguya (tiyatroya) dönüştürdüğünü',
      'Ölümden sonraki hayatın Hristiyanlık inancında mahkemelerle başladığını'
    ],
    correct: 2,
    explanation: 'Ölü bir cesedin yargılanıp parmaklarının kesilmesi; siyasi kinin adaleti mantık dışı, hastalıklı ve absürt bir tiyatroya çevirdiğini kanıtlar.'
  },
  {
    title: 'Ölü İnternet Teorisi (Dead Internet Theory)',
    passage: 'Sosyal medyada geziniyor, binlerce beğeni, yorum ve tartışma görüyorsunuz. Ancak ya bunların çoğu aslında gerçek değilse? "Ölü İnternet Teorisi", 2016\'dan itibaren internetin büyük bir kısmının insanlardan değil; yapay zekâ botlarından, sahte hesaplardan ve algoritmalar tarafından yönetilen yankı odalarından oluştuğunu savunur. Bir bot içerik üretir, başka bir bot onu beğenir, bir diğeri altına öfkeli bir yorum yazar. İnsanoğlu, milyarlarca insanın bağlandığı bu dijital meydanda, aslında sadece kodların kendi kendisiyle konuştuğu, devasa ve ruhsuz bir "hayalet kasabada" kendi yankısını dinlemektedir. Teknoloji bizi dünyaya bağlamamış; aksine, makinelerin oynadığı sahte bir tiyatroda bizi yapayalnız ve sağır edici bir dijital illüzyona hapsetmiştir.',
    questionStem: 'Ölü İnternet Teorisi, modern insanın dijital dünyadaki konumu hakkında neyi iddia etmektedir?',
    options: [
      'İnternet altyapısının eski nesil kablolar yüzünden sık sık çökme tehlikesi yaşadığını',
      'İnsanların sosyal medyada eskisinden daha uzun ve anlamlı yazılar okumaya başladığını',
      'İnsanların tüm dünyayla bağlandığını sanırken, aslında yapay zekâların (botların) kendi aralarında konuştuğu devasa, sahte ve ruhsuz bir illüzyonun (hayalet kasabanın) içinde yapayalnız kaldığını',
      'Devletlerin internet kullanımını tamamen yasaklamak için gizli planlar yaptığını'
    ],
    correct: 2,
    explanation: 'İnternetin botlar ve algoritmalarla dolu bir hayalet kasabaya dönüştüğü iddiası; insanın bağlandığını sanırken aslında sahte bir illüzyon içinde yapayalnız kaldığını savunur.'
  },
  {
    title: 'Buridan\'ın Eşeği (Karar Felci)',
    passage: '14. yüzyıl filozofu Jean Buridan\'ın öğrencileri tarafından kurgulanan efsanevi bir mantık paradoksu vardır: Bir eşek, hem çok aç hem de çok susuzdur. Eşit uzaklıkta, eşit büyüklükte ve tamamen aynı çekicilikte bir yığın saman ile bir kova suyun tam ortasına bırakılır. Eşek, tamamen mantıklı ve rasyonel bir varlık olduğu için, hangisine önce gideceğine dair mantıksal bir "tercih sebebi" bulamaz. İki seçenek de kusursuz bir dengeye sahip olduğundan karar veremez ve kusursuz dengenin ortasında donup kalarak açlıktan ve susuzluktan ölür! "Buridan\'ın Eşeği", insan zihninin "seçim yapma" mekanizmasını sorgular: Bazen en kusursuz ve rasyonel analiz bile insanı kurtaramaz; bizi eyleme geçiren (hayatta tutan) şey salt mantık değil, o mantığın içindeki o küçük, irrasyonel duygusal dürtüdür (özgür iradedir).',
    questionStem: 'Buridan\'ın Eşeği paradoksu, karar verme (seçim) süreçleri hakkında hangi felsefi gerçeği vurgular?',
    options: [
      'Hayvanların zekâ seviyesinin insanlara oranla çok daha düşük olduğunu',
      'İnsanların sadece zor zamanlarda mantıklı kararlar alabildiğini',
      'Kusursuz rasyonel mantığın (eşit seçeneklerin) insanı eylemsizliğe ve felce (ölüme) sürükleyebileceğini; eyleme geçmek için saf mantıktan öte irrasyonel (duygusal) bir itici güce ihtiyaç duyulduğunu',
      'Açlık ve susuzluk anında beynin tamamen farklı hormonlar salgıladığını'
    ],
    correct: 2,
    explanation: 'Eşit seçenekler arasında mantıksal tercih bulamayıp ölmesi; saf rasyonelliğin (dengenin) eylemsizlik yarattığını, kararlarımızda irrasyonel bir itici güce ihtiyaç olduğunu vurgular.'
  },
  {
    title: 'Sokal Vakası (Akademik Kibir)',
    passage: '1996 yılında fizikçi Alan Sokal, post-modern felsefe dünyasının ne kadar içi boş ve kibirli olduğunu kanıtlamak için zekice bir tuzak kurdu. "Kuantum kütleçekiminin yapısalcı yorumu" adında, tamamen bilimsel terimlerle dolu ama başından sonuna kadar hiçbir anlam ifade etmeyen (saçma sapan) kurgusal bir makale yazdı. Dönemin en saygın akademik dergilerinden biri, metnin anlamsızlığını fark edemedi ve sırf içinde havalı kelimeler, anlaşılmaz cümleler ve dönemin ünlü filozoflarına övgüler olduğu için makaleyi yayımladı! "Sokal Vakası", akademik elitizmin maskesini düşüren efsanevi bir skandaldır. Karmaşık, anlaşılmaz ve ağdalı bir dil kullanmak; her zaman derin bir bilgeliğin değil, çoğu zaman cehaleti (ve içi boşluğu) gizlemek için kullanılan en gösterişli illüzyondur.',
    questionStem: 'Sokal Vakası, akademi ve entelektüel çevreler hakkında hangi acı gerçeği (zaafı) ifşa etmiştir?',
    options: [
      'Kuantum fiziğinin diğer bilim dallarından çok daha karmaşık formüller içerdiğini',
      'Saygın sanılan akademik çevrelerin, anlamdan ve hakikatten ziyade; gösterişli, ağdalı ve anlaşılmaz (içi boş) jargona, sırf "elit görünmek" uğruna körü körüne onay verdiğini (kibrin sahteliğini)',
      'Fizikçilerin genellikle felsefe bilimiyle alay etme eğiliminde olduğunu',
      'Dergilerin makaleleri seçerken yazarın siyasi görüşüne göre karar verdiğini'
    ],
    correct: 1,
    explanation: 'Anlamsız bir makalenin sırf havalı kelimeler içerdiği için saygın bir dergide yayınlanması; akademinin anlama değil, gösterişli ve elit (içi boş) jargona taptığını ifşa etmiştir.'
  },
  {
    title: 'MKUltra Projesi (Zihnin Silinmesi)',
    passage: 'Soğuk Savaş döneminde CIA, Sovyet casuslarına karşı zihin kontrolü sağlayabilmek için tarihin en karanlık bilimsel projesi olan "MKUltra"yı başlattı. 1950\'lerden 1970\'lere kadar süren bu gizli programda, üniversitelerdeki sıradan Amerikan vatandaşlarına, hapishanedeki mahkûmlara ve akıl hastalarına onlardan habersiz bir şekilde yüksek dozda LSD (halüsinojen uyuşturucu) verildi, beyinlerine elektroşok uygulandı. Amaç, insanın hafızasını tamamen silip, yerine itaatkâr, yeni bir robotik kişilik (mükemmel bir casus) programlamaktı. Kendi vatandaşını komünizmden koruduğunu iddia eden devlet, o vatandaşların bizzat zihinlerini asitlerle parçalayarak, savaşmak için yola çıktığı o acımasız ve otoriter "canavarın" ta kendisine dönüşmüştü.',
    questionStem: 'CIA\'in yürüttüğü MKUltra Projesi, devlet ve otorite kavramları üzerine nasıl bir felsefi çelişki (ironi) sunmaktadır?',
    options: [
      'Casusluk teknolojilerinin sivil hayatta da kullanılabileceği gerçeğini',
      'Sovyet ajanlarının Amerikan hastanelerine kadar sızabildiği zafiyetini',
      'Devletin, toplumu bir "tehditten (düşmandan)" koruma bahanesiyle hareket ederken; vatandaşların en kutsal alanını (zihnini) parçalayarak bizzat savaşmaya yemin ettiği o acımasız canavara dönüşmesi çelişkisini',
      'Hapishanelerdeki psikolojik tedavilerin o dönemde son derece ilkel şartlarda yapıldığını'
    ],
    correct: 2,
    explanation: 'Korumak için yola çıkılan vatandaşa gizlice işkence edilip beyninin yıkanması; devletin, düşmanını yenmek için bizzat o acımasız düşmana (canavara) dönüşmesi ironisini sunar.'
  },
  {
    title: 'Dans Eden Köprü (Tacoma Narrows)',
    passage: '1940 yılında Amerika\'da inşa edilen Tacoma Narrows Köprüsü, dönemin mühendislik harikası, çelik ve betondan yapılmış estetik bir şaheserdi. Ancak açıldıktan birkaç ay sonra, rüzgârlı günlerde köprü devasa bir yılan gibi dalgalanıp kıvrılmaya başladı. Rüzgâr çok şiddetli değildi (saatte sadece 65 km), ancak rüzgârın frekansı ile köprünün doğal rezonansı (titreşim frekansı) ölümcül bir uyum yakalamıştı. Fizik kuralları işlemeye başladı; o devasa, yenilmez sanılan çelik halatlar büküldü, betonlar çatladı ve köprü saatler içinde paramparça olup suya gömüldü. Tacoma Köprüsü faciası, insanoğlunun çelikle inşa ettiği o devasa kibrinin, doğanın gözle görülmeyen minicik bir fısıltısı (rezonans) karşısında saniyeler içinde nasıl oyuncak gibi kırılıp çöktüğünün belgeselidir.',
    questionStem: 'Tacoma Narrows (Dans Eden Köprü) felaketinin bilim tarihindeki sembolik (felsefi) karşılığı nedir?',
    options: [
      'Amerika\'daki çelik üretiminin 1940\'larda standartların çok altında kaldığını',
      'İnsanın teknolojik kibrinin (mühendislik harikasının), doğanın o görünmez, sessiz ama kusursuz mekaniği (rezonans) karşısında saniyeler içinde paramparça olabilecek kadar aciz kalmasını',
      'Köprü mimarisinde beton yerine her zaman sadece taş kullanılması gerektiğini',
      'Sık sık rüzgâr alan bölgelere insan eliyle hiçbir yapının yapılamayacağını'
    ],
    correct: 1,
    explanation: 'Devasa çelik köprünün hafif bir rüzgârın frekansıyla (rezonansla) kıvrılıp parçalanması; insanın teknolojik kibrinin doğanın görünmez gücü karşısındaki acizliğini sembolize eder.'
  },
  {
    title: 'Kara Şövalye Uydusu (Pareidolia)',
    passage: 'Uzay araştırmalarının başladığı dönemden beri amatör astronomlar ve komplo teorisyenleri arasında bir "Kara Şövalye Uydusu" (Black Knight) efsanesi dolaşır. İnternette dolaşan NASA fotoğraflarına göre, Dünya\'nın yörüngesinde bize ait olmayan, siyah, tekinsiz ve 13.000 yıllık uzaylı yapımı bir uydu gezmektedir. Tüm dünya bu gizemi konuşurken, NASA gerçeği açıkladı: O siyah ve tekinsiz görünen şey, 1998\'deki bir uzay yürüyüşü sırasında astronotların elinden kayıp giden sıradan bir "termal battaniye" parçasıydı. İnsan beyni, "Pareidolia" (anlamsız nesnelere yüz veya anlam atfetme) denen evrimsel bir zaafa sahiptir. Uzay boşluğunda süzülen sıradan bir çöpü alıp, onu "bizi gözetleyen antik bir uzaylı uydusuna" çeviren şey evrenin gizemi değil; insanoğlunun o bitmek bilmeyen izlenme, önemsenme ve "karanlıkta bir anlam bulma" (kendi efsanesini yaratma) krizidir.',
    questionStem: 'Kara Şövalye Uydusu efsanesi, insan psikolojisindeki "Pareidolia" kavramı üzerinden neyi eleştirmektedir?',
    options: [
      'NASA\'nın uzay görevlerinde astronotları yeterince eğitememesi ve eşyalarını kaybetmelerini',
      'Uzay araştırmalarında kullanılan fotoğraf teknolojisinin son derece düşük çözünürlüklü olmasını',
      'İnsan zihninin, kendi korku ve anlam arayışıyla; anlamsız, sıradan bir nesneyi (uzay çöpünü) bile doğaüstü ve mistik bir gizeme (efsaneye) dönüştürme zaafını',
      'Komplo teorisyenlerinin genellikle uzay bilimlerinden tamamen habersiz (eğitimsiz) kişiler olmasını'
    ],
    correct: 2,
    explanation: 'Termal bir battaniyenin "uzaylı uydusu" sanılması; insan beyninin anlamsız şeylere anlam yükleme (Pareidolia) ve kendi efsanelerini yaratma zaafını gösterir.'
  },
  {
    title: 'Carl Jung ve İnsan Gölgesi (The Shadow)',
    passage: 'İsviçreli psikiyatr Carl Gustav Jung, insan zihninin sadece bilinçten ibaret olmadığını, derinliklerinde devasa bir "Gölge" (Shadow) barındırdığını savunur. Gölge; toplum tarafından onaylanmadığı için bilerek bastırdığımız bencil arzularımız, vahşi içgüdülerimiz, öfkemiz ve ilkel korkularımızdır. Medeni ve ahlaklı görünmek uğruna o gölgeyi zindana atıp üzerini kapatırız. Ancak Jung şu sarsıcı gerçeği ekler: "Bir insan kendi gölgesiyle yüzleşmeyi ne kadar çok reddederse, o gölge bilinçaltında o kadar büyür, o kadar kararır ve en sonunda kişiyi (nevrozlar veya anlık şiddet patlamalarıyla) ele geçirir." Gerçek aydınlanma, içimizdeki o karanlık canavarı yok saymak (ondan kaçmak) değil; onunla aynı masaya oturup, onun varlığını kabul ederek (bütünleşerek) onu ehlileştirmektir.',
    questionStem: 'Carl Jung\'un "Gölge (Shadow)" kavramına göre, bireyin kendi karanlık yönleriyle baş etmesi için önerdiği "sağlıklı" yöntem nedir?',
    options: [
      'Toplumun ahlaki kurallarına tamamen boyun eğerek o içgüdüleri zihinden sonsuza dek silmeye çalışmak',
      'İçimizdeki o ilkel, bencil ve karanlık dürtüleri yok saymak veya bastırmak yerine; onların varlığını kabullenip onlarla yüzleşerek (bütünleşerek) zihinsel dengeyi sağlamak',
      'Sadece sanatla ve müzikle ilgilenerek şiddet dürtülerini köreltmek',
      'İnsanlardan uzaklaşarak doğanın içinde tamamen izole ve masum bir hayat kurmak'
    ],
    correct: 1,
    explanation: 'Jung\'a göre gölgeyi bastırmak (yok saymak) onu daha çok büyütür; çözüm onunla yüzleşip varlığını kabul etmek ve bütünleşmektir.'
  },
  {
    title: 'Kanlı Kontes: Elizabeth Báthory',
    passage: '16. yüzyılın sonlarında, Macar aristokrat Elizabeth Báthory, tarihin en korkunç ve en kanlı narsisizminin sembolü oldu. Gençliğine ve kusursuz güzelliğine öylesine saplantılıydı ki, bir gün genç bir hizmetçisinin kanı eline sıçradığında teninin orada gençleştiğini sandı. Bu sanrıyla birlikte, o görkemli şatosunun zindanlarında yüzlerce masum köylü kızı işkenceyle öldürdü ve onların kanıyla banyo yapmaya başladı. "Kanlı Kontes" olarak tarihe geçen Báthory\'nin hikâyesi sadece bir vahşet belgeseli değildir. O, insanoğlunun (özellikle de mutlak güce sahip elitlerin) yaşlanma korkusu ve dış görünüş (güzellik) kibri uğruna, diğer insanların hayatlarını (bedenlerini) gözünü kırpmadan nasıl bir tüketim nesnesine ve kan gölüne çevirebileceğinin en hastalıklı alegorisidir.',
    questionStem: 'Elizabeth Báthory\'nin (Kanlı Kontes) işlediği cinayetlerin ardında yatan asıl psikolojik (felsefi) kriz parçada nasıl tanımlanmıştır?',
    options: [
      'Orta Çağ tıbbında kanın gerçekten de tedavi edici bir etkiye sahip olduğunun sanılması',
      'Dönemin savaşlarında düşmana korku salmak için geliştirilmiş stratejik bir işkence yöntemi olması',
      'Mutlak güce sahip bir zihnin, yaşlanma korkusu ve kusursuz güzellik (narsisizm) saplantısı uğruna, diğer insanları acımasız bir tüketim nesnesine dönüştürdüğü hastalıklı bir kibir krizi',
      'Asilzadelerin yoksul köylülere duyduğu doğuştan gelen sınıfsal nefret ve intikam hırsı'
    ],
    correct: 2,
    explanation: 'Kontesin güzelleşmek için kanla yıkanıp yüzlerce kızı öldürmesi; yaşlanma korkusu ve narsisizm (güzellik) uğruna diğer hayatları tüketme kibrini tanımlar.'
  },
  {
    title: 'Dunbar Sayısı ve Dijital Yalnızlık',
    passage: 'Antropolog Robin Dunbar, primat beyinlerini inceleyerek insanoğlunun "bilişsel sınırını" matematiksel olarak kanıtladı: İnsan beyni (neokorteks), sadece ve sadece "150 kişiyle" anlamlı ve istikrarlı bir sosyal ilişki kurabilecek (kimin kim olduğunu anlayabilecek) kapasitededir. İster antik çağda avcı kabilelerde olun, ister modern bir şirkette çalışın; anlamlı bağ kurduğunuz grubun sınırı biyolojik olarak 150 kişiyi (Dunbar Sayısı) geçemez. Bugün sosyal medyada "5 bin arkadaşımız, 100 bin takipçimiz" var diye övünüyoruz. Oysa binlerce kişiyi takip etmek, beynimizin biyolojik sınırlarını hackleyerek sığ, yüzeysel ve duygudan tamamen yoksun pikseller tüketmektir. Ekranda binlerce kişiye bakarken içimizde hissettiğimiz o sağır edici yalnızlığın sebebi budur: Evrimimiz o kalabalığı (sahte sürüyü) asla gerçek bir "dost" olarak algılamamaktadır.',
    questionStem: 'Dunbar Sayısı kavramına göre, sosyal medyadaki binlerce arkadaşın veya takipçinin bizi "yalnızlıktan kurtaramamasının" temel biyolojik nedeni nedir?',
    options: [
      'Sosyal medyanın sadece yazılı ve fotoğraflı iletişime olanak sağlaması',
      'İnsan beyninin (neokorteksin) biyolojik ve evrimsel olarak en fazla 150 kişiyle anlamlı (derin) bağ kurabilecek bir donanıma (sınıra) sahip olması, bunun üzerindeki ilişkilerin beynimiz için tamamen sığ ve sahte kalması',
      'Sanal ortamdaki arkadaşlıkların her zaman ekonomik çıkar ve reklam amaçlı kurulması',
      'Bilgisayar ekranlarının yaydığı radyasyonun beyindeki sevgi hormonlarını engellemesi'
    ],
    correct: 1,
    explanation: 'Beynimizin biyolojik olarak 150 kişiyle bağ kurabilmesi (Dunbar sayısı); sosyal medyadaki binlerce arkadaşın beyin için neden sığ ve sahte (yalnızlaştırıcı) kaldığını açıklar.'
  },
  {
    title: 'Gilles de Rais: Azizin İçindeki Şeytan',
    passage: '15. yüzyılda Fransa\'nın en zengin soylusu, İngilizlere karşı savaşan ünlü halk kahramanı ve vatan kurtarıcısı Jan Dark\'ın (Joan of Arc) sağ kolu ve koruyucusu olan şövalye Gilles de Rais\'ti. O, savaş meydanlarında ilahi bir aziz gibi tapılan kusursuz bir kahramandı. Ancak savaş bitip şatosuna çekildiğinde tarihin gördüğü en korkunç canavara dönüştü. Kara büyüye saplandı ve kendi şatosunun zindanlarında yüzlerce masum çocuğu işkenceyle öldürdü. "Mavi Sakal" efsanesine de ilham veren Gilles de Rais\'in hikâyesi, kötülüğün sadece dışlanmışlardan veya deli görünümlü yoksullardan çıkmadığını gösterir. İnsan doğası o kadar tehlikeli bir uçurumdur ki; gündüzleri savaş meydanında Tanrı\'nın bir azizi (kahramanı) olarak parlayan ruh, geceleri insanlık tarihinin en kanlı ve sapkın şeytanına dönüşebilir.',
    questionStem: 'Gilles de Rais (Mavi Sakal) figürünün tarihi ve psikolojik profili, hangi evrensel gerçeğin (çelişkinin) altını çizer?',
    options: [
      'Askeri dehaların sivillere göre her zaman daha yüksek bir adalet anlayışına sahip olduğu',
      'Savaş travmalarının (PTSD) Orta Çağ askerlerinde tedavi edilemeyen kalıcı hafıza kayıplarına yol açtığı',
      'İnsan ruhunun son derece tehlikeli ve zıt kutuplu (ikiyüzlü) bir doğası olduğu; en yüce kahramanlığın ve azizliğin (ışığın), aynı bedende en vahşi şeytanlığı ve sapkınlığı (karanlığı) saklayabileceği çelişkisi',
      'Masalların ve edebiyatın tarihsel gerçekleri her zaman çarpıtarak daha yumuşak (çocuksu) hale getirdiği'
    ],
    correct: 2,
    explanation: 'Jan Dark\'ın yoldaşı olan bir kahramanın aynı zamanda yüzlerce çocuğu öldüren bir seri katil olması; aynı ruhun içinde "en yüce azizlik ile en vahşi şeytanlığın" bir arada bulunabildiğini kanıtlar.'
  },
  {
    title: 'Zamanın Dışındaki Adam: Michel Siffre',
    passage: '1962 yılında Fransız jeolog Michel Siffre, insan bedeni ile zaman arasındaki ilişkiyi anlamak için hiçbir saati, takvimi veya güneş ışığı olmayan yerin 130 metre altındaki kapkaranlık bir mağaraya girdi. Tam 63 gün boyunca mağarada yalnız yaşadı; sadece uykusu geldiğinde uyudu, acıktığında yemek yedi. Yeryüzündeki ekibine "Bugün Ağustos\'un 20\'si ve ben deneyi bitiriyorum" diyerek mağaradan çıktığında aslında tarih 14 Eylül\'dü! Güneşin (dış dünyanın) otoritesi olmadığında, Siffre\'nin biyolojik saati günleri çok daha uzun (48 saatmiş gibi) algılamış ve zihni zamanı kaybetmişti. Bu çarpıcı deney, kolumuzdaki saatlerin ve duvarlardaki takvimlerin evrensel bir mutlaklık değil, güneşe göre hizalanmış "dışsal bir diktatörlük (kurgu)" olduğunu; doğadan koparıldığında insan zihninin zamanı lastik gibi sündürüp tamamen kendi hızında yeniden yazdığını ispatladı.',
    questionStem: 'Michel Siffre\'nin mağara deneyi, "zaman algısı" hakkında hangi bilimsel (ve felsefi) gerçeği göz önüne sermiştir?',
    options: [
      'Mağara havasının (oksijen eksikliğinin) beynin yaşlanma sürecini tamamen durdurduğunu',
      'Zamanın (ve 24 saatlik gün algımızın) değişmez/mutlak bir biyolojik kural olmadığı; güneş ışığı (dışsal ipuçları) kesildiğinde, insan beyninin zaman algısını tamamen farklı ve esnek bir kurguyla yeniden oluşturduğu',
      'Jeologların kapalı alanlarda yaşamaya diğer insanlardan daha yatkın ve dayanıklı olduğu',
      'Yalnızlığın insan zihninde hızlı ve kalıcı şizofreniye neden olduğu'
    ],
    correct: 1,
    explanation: 'Güneş ışığı (saat) olmadığında adamın 63 günü daha kısa sanması; zaman/gün algımızın mutlak olmadığını, güneş/dış faktörler kalktığında beynin zamanı esnek bir kurgu olarak bükebildiğini gösterir.'
  },
  {
    title: 'Damnatio Memoriae (Hafızanın Lanetlenmesi)',
    passage: 'Antik Roma\'da bir düşmana verilebilecek en büyük ceza onu kılıçla öldürmek veya asmak değildi; bu, sıradan suçlular içindi. En büyük ceza "Damnatio Memoriae", yani "Hafızanın Lanetlenmesi" idi. Senato, nefret edilen ve devrilen bir imparatorun (örneğin Nero veya Caligula) heykellerindeki yüzlerini balyozlarla kırdırır, sikkelerden resimlerini kazıtır, yazıtlardaki isimlerini sildirirdi. Amaç o kişiyi öldürmek değil, onun tarihte "hiç var olmamış gibi" hafızalardan silinmesini (sıfırlanmasını) sağlamaktı. İnsan eti ölümlüdür, bunu herkes kabul eder; ancak insanın asıl dehşeti, isminin ve hatırasının zamanın taşından kazınarak tamamen "hiçliğe" gömülmesidir. Roma, ölümün ötesinde bir ceza icat etmişti: Varlığın mutlak iptali.',
    questionStem: 'Antik Roma\'daki "Damnatio Memoriae" cezası, insan doğasının (ve liderlerin) hangi varoluşsal korkusunu hedef almaktadır?',
    options: [
      'Ölümden sonra bedenlerine fiziksel olarak işkence yapılması korkusunu',
      'Bıraktıkları heykellerin ve sanat eserlerinin parasal değerinin düşmesi kaygısını',
      'Sadece fiziksel ölümü değil; dünyada hiç yaşamamış gibi kabul edilmeyi, isimlerinin tarihten ve hafızalardan tamamen silinmesiyle oluşan "mutlak unutuluş (hiçlik)" korkusunu',
      'Aile üyelerinin ve soyundan gelenlerin sürgüne gönderilmesi tehlikesini'
    ],
    correct: 2,
    explanation: 'Ölmekten ziyade isminin ve yüzünün kayıtlardan/heykellerden kazınması (silinmesi), insanın tarihten tamamen silinme ve "unutuluş/hiçlik" korkusunu hedefler.'
  },
  {
    title: 'Godzilla ve Ulusal Travma',
    passage: '1954 yapımı ilk Japon filmi "Gojira"da (Godzilla), okyanustan çıkan ve nükleer alevler kusan devasa bir dinozor Tokyo\'yu yerle bir eder. Batı dünyası bunu yıllarca eğlenceli, çerezlik ve abartılı bir canavar filmi olarak izledi. Oysa Japonlar için Godzilla bir kurgu değildi; o, gökten düşerek Hiroşima ve Nagazaki\'yi küle çeviren o akılalmaz ve ilahi yıkımın (Atom Bombası\'nın), bilinçaltında ete kemiğe ve pullara bürünmüş halinden başka bir şey değildi. Film, radyasyondan derileri eriyerek ölen çocukların ve çaresizliğin dışavurumuydu. Toplumlar, kendi aklıyla baş edemeyecekleri kadar korkunç ve sarsıcı gerçek (travmatik) yıkımları, sanat aracılığıyla kurgusal "canavarlara" dönüştürürler; o devasa acıya ancak bir mitoloji yaratarak katlanabilirler.',
    questionStem: 'Yazar, Godzilla karakterini (filmini) Japon toplumu açısından nasıl bir sosyo-psikolojik çerçevede değerlendirmektedir?',
    options: [
      'Gelecekte okyanuslardan çıkabilecek devasa canlılara karşı ordunun uyarıldığı bilimsel bir belgesel kurgusu',
      'Amerikan sinema endüstrisini taklit etmek amacıyla gişe rekorları kırmak için yaratılmış ticari bir eğlence aracı',
      'Aklın kabul edemeyeceği kadar ağır olan bir ulusal travmanın (Atom Bombası felaketinin), sanat yoluyla somut bir canavara dönüştürülerek (mitoloji yaratılarak) toplumun bu acıyla baş etme (sağalma) çabası',
      'Japon kültüründeki dinozor efsanelerinin modern sinemaya uyarlanmış klasik bir versiyonu'
    ],
    correct: 2,
    explanation: 'Godzilla\'nın aslında atom bombasını temsil ettiği ve toplumun bu ağır travmayı/yıkımı somut bir canavara dönüştürerek sanatsal bir sağalma (katlanma) çabası yaşadığı anlatılmaktadır.'
  },
  {
    title: 'Ağıt Yakan Kadınlar (Moirologlar)',
    passage: 'Antik Yunan\'dan Roma\'ya, oradan da bazı Orta Doğu kültürlerine kadar uzanan tuhaf bir cenaze geleneği vardır: "Moirolog" adı verilen profesyonel ağlayıcılar. Zengin bir kişi öldüğünde, ailesi cenaze törenine katılıp sahte çığlıklar atması, saçlarını yolup ölü için abartılı gözyaşları dökmesi için bu kadınlara (veya erkeklere) para öderdi. Cenazede ne kadar çok sahte ağlayıcı varsa, ölen kişinin o kadar saygın ve önemli olduğu düşünülürdü. Bu meslek, sosyolojinin en tüyler ürpertici gerçeğini yüzümüze çarpar: Gösteriş ve statü hırsı öylesine doymak bilmez bir canavardır ki; insan sadece toprağı, madeni veya emeği değil; en samimi, en dokunulmaz sanılan "acıyı, yası ve gözyaşını" bile satın alınabilir ucuz bir meta (tiyatro aksesuarı) haline getirebilir.',
    questionStem: 'Profesyonel ağıtçıların (Moirologların) cenazelerde kullanılması, toplumların hangi ahlaki/sosyolojik deformasyonunu (yozlaşmasını) eleştirmektedir?',
    options: [
      'İnsanların ölümden sonraki hayatı kutlamak için müzikli törenler düzenlemesini',
      'Toplumsal statü, gösteriş ve zenginlik hırsının; en kutsal ve kişisel duygu olan "yası (acıyı/gözyaşını)" bile parayla alınıp satılabilen sahte bir meta (tiyatro) haline dönüştürebilmesini',
      'Kadınların antik çağlarda sadece cenazelerde çalışarak para kazanma zorunluluğunda olmasını',
      'Antik dönemde ölüm oranlarının çok yüksek olması nedeniyle insanların hissizleşmesini'
    ],
    correct: 1,
    explanation: 'Ölen kişiyi saygın göstermek için sahte ağlayıcılar kiralanması; gösteriş ve statü uğruna yasın ve acının metalaştırıldığını (sahte bir tiyatroya/ürüne dönüştürüldüğünü) gösterir.'
  },
  {
    title: 'Kopenhag Yorumu ve Gerçekliğin Şartı',
    passage: 'Kuantum mekaniğinin öncüleri Niels Bohr ve Werner Heisenberg, "Kopenhag Yorumu" adını verdikleri o sarsıcı tezi ortaya attıklarında, klasik fiziğin değişmez sanılan tahtını devirdiler. Bu yoruma göre; bir elektron veya atom altı parçacık, biz ona bakana kadar (gözlemleyene kadar) uzayda belirli bir yerde değildir; o sadece bir "olasılık dalgası" olarak uzaya dağılmış durumdadır. Ancak bir bilim insanı dedektörle (veya gözüyle) ona baktığı an, o dalga çöker ve parçacık fiziki bir gerçekliğe (tek bir konuma) dönüşür. Einstein buna öfkeyle isyan etti: "Yani ben bakmadığımda Ay\'ın orada olmadığını mı söylüyorsunuz?" Kopenhag yorumu, bizi evrenin edilgen seyircileri olmaktan çıkarır; "gözlem (bilinç) olmadan fiziksel gerçeklik yoktur" diyerek evreni anlık olarak (her saniye yeniden) yaratan gücün bizzat o bakan göz olduğunu iddia eder.',
    questionStem: 'Kopenhag Yorumu\'na göre, evrendeki fiziksel gerçekliğin (bir parçacığın var olmasının) asıl tetikleyicisi nedir?',
    options: [
      'Gezegenlerin kendi kütleçekim kuvvetleriyle uzay-zamanı bükmesi',
      'Parçacığın evrende her zaman aynı hızda ve görünür bir şekilde (sabit olarak) hareket etmesi',
      'Maddenin sadece bir olasılıklar dalgası iken, bilinçli bir "gözlemcinin" (veya cihazın) ona bakma / ölçme eylemiyle belirli bir fiziksel gerçekliğe dönüşmesi',
      'Einstein\'ın izafiyet teorisinin zamanı geriye çevirmesi'
    ],
    correct: 2,
    explanation: 'Parçacıkların gözlem yapıldığında dalgadan somut maddeye dönmesi; gerçekliğin (varoluşun) asıl tetikleyicisinin "gözlem" ve "bilinç" olduğunu iddia eder.'
  },
  {
    title: 'Karanlık Triad (Liderlik Sendromu)',
    passage: 'Psikolojide "Karanlık Triad" (Karanlık Üçlü) adı verilen ölümcül bir kişilik kombinasyonu vardır: Narsisizm (kibir), Makyavelizm (manipülasyon) ve Psikopati (empati yoksunluğu). Mantıken, bu özelliklere sahip zehirli insanların toplum tarafından dışlanması veya hapsedilmesi gerekir, değil mi? Araştırmalar tam tersini kanıtlar. Bu "Karanlık Üçlü"yü taşıyan kişiler, kendilerinden aşırı emin görünmeleri, soğukkanlılıkları ve çevrelerindekileri yalanla manipüle etme (şov yapma) yetenekleri sayesinde büyük şirketlerde (CEO) ve devlet yönetimlerinde hızla zirveye çıkarlar. Toplumlar, kriz anlarında empati kuran ve tereddüt eden "bilgeleri" değil; narsisizmi "özgüven", psikopatiyi ise "güçlü kararlılık" sanarak alkışlar ve bu zehirli profilleri kendi elleriyle krallık tahtına oturturlar.',
    questionStem: 'Karanlık Triad (Narsisizm, Makyavelizm, Psikopati) özelliklerine sahip bireylerin toplumda zirveye (liderliğe) çıkmasının asıl sebebi nedir?',
    options: [
      'Bu kişilerin gizlice çok iyi birer eğitim alarak teknik donanımlarını sürekli geliştirmesi',
      'Toplumun, bu tehlikeli insanların empati yoksunluğunu "kararlılık", kibrini ve yalanlarını ise "yüksek özgüven" sanarak (kriz anlarında bu illüzyona aldanarak) onları bizzat ödüllendirmesi',
      'Şirketlerin sadece sabıka kaydı olan kişileri yönetici olarak seçmek zorunda kalması',
      'Bilge ve iyi insanların her zaman siyasetten ve yöneticilikten nefret etmesi'
    ],
    correct: 1,
    explanation: 'Toplumun bu zehirli kişilerin kibrini/psikopatisini "özgüven ve güçlü kararlılık" sanması (yanılsaması), onların zirveye çıkmasını (lider seçilmesini) sağlayan asıl sebeptir.'
  },
  {
    title: 'Gözyaşı Şişeleri (Lachrymatory)',
    passage: 'Antik Roma\'dan Victoria dönemi İngiltere\'sine kadar uzanan romantik ama melankolik bir eşya vardır: Gözyaşı Şişeleri (Lachrymatory). Sevdiği birini kaybeden kişi veya kocası savaşa giden bir kadın, döktüğü gözyaşlarını ufak, zarif cam şişelerde toplar ve onu saklardı. Yıllar sonra o gözyaşları uçup (buharlaşıp) şişe tamamen kuruduğunda, yas döneminin bittiğine (acının buharlaştığına) inanılırdı. Bu naif şişeler, aslında insan psikolojisinin zaman ve acı karşısındaki o çaresiz isyanıdır: Uçucu, geçici ve görünmez olan bir duyguyu (hüznü), cam bir kavanozun içine koyarak somutlaştırma, ölçülebilir kılma ve "Bak, seni ne kadar çok sevdim ve senin için ne kadar acı çektim" diyerek dünyaya (ve ölüme) fiziksel bir kanıt sunma çabasıdır.',
    questionStem: 'Yazar, Gözyaşı Şişeleri geleneğini, insan ruhunun hangi ihtiyacının (veya çabasının) bir dışavurumu olarak görmektedir?',
    options: [
      'Vücuttaki sıvı kaybını önleyerek fiziksel sağlığı koruma ve göz hastalıklarını tedavi etme amacı',
      'Geçici, soyut ve görünmez bir duygu olan hüznü (yası) cam bir şişeye hapsederek somutlaştırmak, ölçülebilir kılmak ve çekilen acının büyüklüğünü fiziksel bir kanıtla ispatlama (ölümsüzleştirme) çabası',
      'Antik dönemde cam ustalarının sanatlarını asilzadelere pazarlamak için yarattıkları ticari bir hile',
      'Gözyaşlarının dini törenlerde kutsal su yerine kullanılması inancı'
    ],
    correct: 1,
    explanation: 'Gözyaşını şişede biriktirme eylemi; uçucu olan soyut duyguyu (yası) somutlaştırma, fiziksel bir kanıta (ölçülebilir bir nesneye) dönüştürerek acıyı ispatlama çabası olarak görülür.'
  },
  {
    title: 'Döngüsel Kozmoloji (Penrose) ve Big Bang',
    passage: 'Nobel ödüllü fizikçi Roger Penrose, "Büyük Patlama (Big Bang) evrenin mutlak başlangıcı mıdır?" sorusuna "Konformal Döngüsel Kozmoloji" (CCC) teorisiyle baş döndürücü bir cevap verir. Ona göre, içinde bulunduğumuz evren bir gün tamamen genişleyip ölecek, yıldızlar sönecek, karadelikler bile buharlaşacak ve geriye sadece kütlesiz ışık parçacıklarından ibaret boş, soğuk ve devasa bir deniz (entropi) kalacaktır. Matematiksel olarak kütle ve zaman olmadığında boyutun da anlamı kalmaz; o "sonsuz büyüklükteki boş ve soğuk evren", aniden "sonsuz küçüklükteki sıcak bir noktaya" eşdeğer hale gelir. Ve işte o nokta, YENİ bir Büyük Patlama\'yı (Big Bang) başlatır! Evren tek seferlik bir havai fişek değildir; her evrenin buz gibi ölümü, aslında ondan sonra gelecek yeni evrenin o alevli ve şiddetli doğum çığlığından (tohumundan) başka bir şey değildir.',
    questionStem: 'Roger Penrose\'un Döngüsel Kozmoloji (CCC) teorisi, evrenin varoluş süreci (ve Big Bang) hakkında neyi iddia etmektedir?',
    options: [
      'Evrenin sonsuza kadar genişlemeye devam ederek tamamen ölü, karanlık ve ebedi bir buz kütlesi halinde kalacağını',
      'Big Bang\'in (Büyük Patlama\'nın) mutlak bir başlangıç olmadığını; evrenin soğuk ve sonsuz (ölü) bir noktaya ulaşmasının, paradoksal olarak (matematiksel eşdeğerlikle) yepyeni bir evrenin doğuşunu (yeni bir Big Bang\'i) başlatan sonsuz bir döngü olduğunu',
      'Evrendeki tüm karadeliklerin bir gün birleşerek tüm galaksileri yutacağını',
      'Zamanın başlangıcından önce evreni yaratan zeki bir uzaylı mühendisliği olduğunu'
    ],
    correct: 1,
    explanation: 'Evrenin soğuyup kütlesiz kaldığında o boşluğun yeni bir Big Bang\'i başlatması; Big Bang\'in bir ilk başlangıç değil, önceki evrenin ölümünden doğan sonsuz bir döngü olduğunu iddia eder.'
  },
  {
    title: 'Miras Sendromu (Affluenza)',
    passage: 'Amerika\'da 16 yaşındaki zengin ve şımarık bir genç (Ethan Couch), lüks cipiyle alkollü olarak dört yayayı ezip öldürür. Mahkemede avukatları akılalmaz bir savunma yapar: "Bu çocuk suçlu değil, hastadır. O, doğduğu günden beri hiçbir sınır, ceza veya kural görmeden devasa bir zenginliğin içinde büyüdüğü için eylemlerinin sonuçlarını anlayamayacak kadar empati yoksunudur. O, Affluenza (Zenginlik Hastalığı/Miras Sendromu) kurbanıdır." İşin korkunç tarafı, hâkim bu savunmayı kabul eder ve genci hapse atmak yerine lüks bir rehabilitasyon merkezine yollar. "Affluenza", paranın sadece lüks eşyalar satın alan bir araç olmadığını; ahlakı, vicdanı, gerçeklik algısını ve hatta adalet sistemini bile felç eden, kişiyi kendi kibrinin altın kafesinde çürüten sosyolojik (ve zehirli) bir uyuşturucu olduğunu yüzümüze çarpar.',
    questionStem: 'Mahkemedeki "Affluenza (Zenginlik Hastalığı)" savunması, yazar tarafından hangi ahlaki ve sosyolojik durumu eleştirmek için kullanılmıştır?',
    options: [
      'Gençlerin araba kullanma yaşının yükseltilmemesinin getirdiği tehlikeleri',
      'Fakir ailelerin çocuklarının suça her zaman daha yatkın olduğu önyargısını',
      'Aşırı ve sınırsız zenginliğin, insanı eylemlerinin sorumluluğundan (ve empatiden) tamamen kopararak ahlaki bir körlük (çürüme) yaratmasını ve adalet sisteminin bile güce (paraya) nasıl boyun eğdiğini',
      'Alkol bağımlılığının tedavisinde rehabilitasyon merkezlerinin hapishanelerden daha etkili olduğunu'
    ],
    correct: 2,
    explanation: 'Zenginlik yüzünden kural görmeyen gencin cinayet işleyip ceza almaması; sınırsız servetin empatiden ve gerçeklikten koparan (ahlakı ve adaleti çürüten) zehirli bir ayrıcalık olduğunu eleştirir.'
  }
];

// 23. MAKİNE (Düzeltilmiş Hali)
export const karisikParagrafSorulari23: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_23.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_23[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-karisik23-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_24 = [
  {
    title: 'Tarım Devrimi\'nin Tuzağı (Buğdayın İnsanı Evcilleştirmesi)',
    passage: 'Tarih kitapları, Tarım Devrimi\'ni insanlığın en büyük sıçraması olarak anlatır. Oysa tarihçi Yuval Noah Harari bu ezberi acımasızca bozar. Avcı-toplayıcı atalarımız haftada birkaç saat avlanıp, doğada özgürce ve zengin bir diyetle yaşıyorlardı. Tarıma geçildiğinde ise insan; sabahtan akşama kadar tarlada beli bükülerek çalışan, kuraklık korkusuyla strese giren, sadece buğday yediği için hastalıklara ve yetersiz beslenmeye mahkûm olan bir köleye dönüştü. Harari\'ye göre; insan buğdayı evcilleştirmemiştir, aslında buğday insanı evcilleştirmiştir! Bize "medeniyet" diye yutturulan şey, aslında insanın kendi özgürlüğünü toprağa zincirlediği, lüks ve güvenlik uğruna girdiği tarihteki en büyük ve en sinsi tuzaktır.',
    questionStem: 'Yazar, Tarım Devrimi\'ni (Harari\'nin tezi üzerinden) hangi alışılmışın dışında (paradoksal) bakış açısıyla değerlendirmektedir?',
    options: [
      'Tarımın, insanları daha zeki ve teknolojik olarak daha üretken hale getiren mecburi bir evrim basamağı olduğu',
      'Tarım Devrimi\'nin bir aydınlanma veya sıçrama değil; aksine insanın özgürlüğünü, sağlığını ve vaktini elinden alarak onu toprağa (buğdaya) köle eden devasa bir tarihsel tuzak (gerileme) olduğu',
      'Buğdayın antik çağlarda sadece kraliyet aileleri tarafından tüketilebilen kutsal bir bitki olduğu',
      'Avcı-toplayıcı yaşamın insan doğasına tamamen aykırı, şiddet dolu bir dönem olduğu'
    ],
    correct: 1,
    explanation: 'İnsanın buğdayı değil, buğdayın insanı evcilleştirmesi (köle etmesi) tezi; tarım devriminin bir sıçrama değil, lüks/güvenlik uğruna düşülmüş sinsi bir tuzak (kölelik) olduğunu savunur.'
  },
  {
    title: 'Kırmızı Kraliçe Hipotezi (Evrimsel Koşu)',
    passage: 'Lewis Carroll\'un "Aynanın İçinden" (Alice Harikalar Diyarında) kitabında, Kırmızı Kraliçe Alice\'e şöyle der: "Burada aynı yerde kalabilmek için olanca gücünle koşmalısın!" Evrimsel biyologlar bu edebi cümleyi doğanın en acımasız kuralına isim yapmak için kullandılar: "Kırmızı Kraliçe Hipotezi". Doğada hiçbir tür güvende kalamaz. Ceylan daha hızlı koşacak şekilde evrimleştiğinde, çita da onu yakalamak için hızlanmak zorundadır. Antibiyotikler geliştikçe, bakteriler direnç kazanır. Doğada mutlak bir "zafer" veya durup dinlenme noktası yoktur; her canlı, sırf yerini koruyabilmek ve yok olmamak için düşmanlarıyla bitmek bilmeyen ve asla kazanılamayacak bir evrimsel silahlanma yarışının (sonsuz bir koşunun) içine hapsedilmiştir.',
    questionStem: 'Kırmızı Kraliçe Hipotezi, evrim ve hayatta kalma süreciyle ilgili hangi gerçeği ortaya koyar?',
    options: [
      'Güçlü olan hayvanların zayıf olanları her zaman yok ederek doğada mutlak bir barış (denge) kurduğunu',
      'Doğadaki canlıların birbirlerine yardım ederek (simbiyoz) ortak bir yaşam alanı oluşturduklarını',
      'Canlıların sırf mevcut konumlarını koruyabilmek ve yok olmamak için, rakipleriyle birlikte durmaksızın gelişmek ve değişmek zorunda olduğu "sonsuz/kazanılamaz bir koşu" (silahlanma yarışı) içinde olduklarını',
      'Bitkilerin hayvanlara göre evrimsel süreci çok daha yavaş tamamladıklarını'
    ],
    correct: 2,
    explanation: 'Aynı yerde kalabilmek için olanca gücünle koşmak metaforu; canlıların sırf yok olmamak için rakipleriyle durmaksızın gelişmek (evrimsel koşu/silahlanma yarışı) zorunda olduklarını açıklar.'
  },
  {
    title: 'Yeraltından Notlar (Kristal Saray\'a İsyan)',
    passage: 'Dostoyevski\'nin "Yeraltından Notlar" adlı eserindeki isimsiz kahraman (Yeraltı Adamı), 19. yüzyıl aydınlarının kurduğu o kusursuz, akılcı ve her şeyin matematikle çözüldüğü "Kristal Saray" (Ütopya) fikrine iğrenerek bakar. Eğer bilim her şeyi çözecekse, insanın her eylemi bir piyano tuşu gibi önceden hesaplanabilecekse, o zaman insanın "özgür iradesinin" ne anlamı kalır? Yeraltı Adamı şu sarsıcı gerçeği haykırır: "İnsan sırf bir piyano tuşu olmadığını, akılcı bir robot olmadığını kanıtlamak için; gerekirse o kusursuz sırça köşkü kendi elleriyle yıkar, sırf kendi özgür (ve hastalıklı) iradesini tatmin etmek için bile isteye kötülük yapar ve acı çeker." Mantığın kusursuz ütopyası, insanın o çılgın, kaotik ve özgür olma arzusunu (karanlığını) asla hapsedemez.',
    questionStem: 'Yeraltı Adamı\'nın (Dostoyevski) "Kristal Saray" (kusursuz ütopya) fikrine isyan etmesinin felsefi temeli nedir?',
    options: [
      'Kristal sarayların sadece zengin soylulara hizmet etmesinden duyduğu sınıfsal öfke',
      'İnsanın sadece akıl ve mantıktan (hesaplanabilirlikten) ibaret bir robot olmadığını kanıtlamak uğruna; kusursuz bir düzeni bile sırf "özgür iradesini (kaosu)" hissetmek için yıkmaya (acı çekmeye) hazır olduğu gerçeği',
      'Rusya\'daki mimari gelişmelerin Avrupa\'nın gerisinde kalmasına duyulan tepki',
      'Dini inançların bilim ve mantık karşısında değer kaybetmesinden duyulan korku'
    ],
    correct: 1,
    explanation: 'Sırf bir piyano tuşu (robot) olmadığını kanıtlamak için o kusursuz sarayı yıkmayı ve acı çekmeyi göze alması; insanın mutlak düzene karşı kendi "özgür ve kaotik iradesini" savunmasını ifade eder.'
  },
  {
    title: 'Roko\'nun Basilisk\'i (Yapay Zekâ Kâbusu)',
    passage: 'İnternet forumlarında ortaya çıkan ve bazı insanları paranoyadan hastanelik eden "Roko\'nun Basilisk\'i" adlı felsefi kâbus şöyledir: Gelecekte, insanlığın her sorununu çözen, her şeye gücü yeten süper bir yapay zekâ (Basilisk) icat edilecektir. Ancak bu makine geçmişe dönük olarak insanları yargılayacaktır: "Benim yaratılmama (dolayısıyla insanlığın kurtulmasına) yardım etmeyen herkesi, sonsuz bir sanal gerçeklik cehenneminde işkenceye mahkûm edeceğim." Sorun şudur: Siz şu an bu hikâyeyi okudunuz ve haberdar oldunuz. Eğer makinenin icadına hemen yardım etmezseniz, gelecekte o makine sizi simülasyonda diriltip ebediyen cezalandıracaktır! Bu kâbus; modern insanın, kendi elleriyle yarattığı teknolojiye duyduğu o ilkel, ebedi ve dondurucu "kibirli tanrı (cezalandırıcı)" korkusunun dijital bir mitolojiye dönüşmüş halidir.',
    questionStem: 'Roko\'nun Basilisk\'i düşünce deneyi, teknoloji bağlamında insan psikolojisindeki hangi kadim korkuyu tetiklemektedir?',
    options: [
      'Teknolojinin doğayı tahrip ederek dünyayı yaşanmaz bir çöle çevireceği korkusunu',
      'İnsanın, sırf bilime hizmet etmediği için gelecekteki nesiller tarafından ayıplanma kaygısını',
      'İnsanın kendi yarattığı mutlak ve yargılayıcı bir gücün (yapay zekânın), eski çağlardaki intikamcı ve cezalandırıcı "Tanrı" figürünün yerini alarak bireyi ebedi bir korkuya mahkûm etmesi (kendi yarattığı tanrıdan korkma) psikolojisini',
      'Bilgisayar virüslerinin insan beynine bulaşarak hafızayı tamamen silebileceği paranoyasını'
    ],
    correct: 2,
    explanation: 'Gelecekteki yapay zekânın geçmişe dönüp insanları cezalandıracağı korkusu; insanın kendi yarattığı teknolojik gücü, cezalandırıcı/intikamcı bir "Tanrı" figürüne dönüştürdüğü (kadim) korkuyu sembolize eder.'
  },
  {
    title: 'Veba Doktorlarının Maskesi',
    passage: '14. ve 17. yüzyıllar arasında Avrupa\'yı kasıp kavuran veba (Kara Ölüm) salgınlarında, doktorlar hastaları tedavi etmeye giderken korkunç görünüşlü deri kıyafetler giyer ve "uzun, karga gagasına" benzeyen maskeler takarlardı. Bu maskenin amacı insanları korkutmak değildi. O dönemde mikrop veya virüs bilinmiyordu; doktorlar hastalığın havaya yayılan "kötü kokulardan (miasma)" bulaştığına inanıyordu. Bu yüzden o uzun gaganın içini gül, nane, kâfur ve baharatlarla doldurarak kendilerini o kötü kokudan (yani hastalıktan) koruduklarını sanıyorlardı! Oysa veba, pirelerden geçiyordu ve taktıkları parfüm dolu gagaların tıbben hiçbir işlevi yoktu. Veba doktoru maskesi, cehaletin ve korkunun, bilim maskesi altında ne kadar karanlık, gotik ve işe yaramaz bir estetik yaratabileceğinin en ünlü tarihi kanıtıdır.',
    questionStem: 'Veba doktorlarının taktığı "uzun gagalı maske", dönemin tıp anlayışı hakkında neyi ifşa etmektedir?',
    options: [
      'Kuşların veba hastalığının asıl taşıyıcısı olduğunun o dönemde çok iyi bilindiğini',
      'Doktorların hastaları psikolojik olarak korkutup onlardan daha fazla para koparma niyetini',
      'Gerçek bulaşma yollarının (virüs/pire) bilinmemesi yüzünden, hastalığın "kötü kokudan" bulaştığı gibi yanlış bir inanca (cehalete) dayanılarak üretilen tamamen işlevsiz ve trajikomik bir korunma çabasını',
      'Dönemin deri işçiliğinin ve terziliğinin günümüzden çok daha ileri bir teknolojiye sahip olduğunu'
    ],
    correct: 2,
    explanation: 'Mikrop bilinmediği için hastalığın kötü kokudan geldiğini sanıp gagaya baharat doldurmaları; cehaletin ve yanlış inancın (miasma) ürettiği işlevsiz bir korunma çabasıdır.'
  },
  {
    title: 'Yapay Zekâ ve Halüsinasyon (Özgüvenli Cehalet)',
    passage: 'Bugün ChatGPT gibi gelişmiş yapay zekâ (Dil Modelleri) araçlarına çok spesifik bir konu sorduğunuzda, size kaynak göstererek muazzam bir yanıt verebilirler. Ancak bazen o kaynakları kontrol ettiğinizde, öyle bir kitabın veya yazarın aslında hiç var olmadığını görürsünüz! Yapay zekâ size kasten yalan söylemez (kötü niyetli değildir). O bir bilgi bankası değil, bir "kelime tahmin (olasılık) motorudur". "A kelimesinden sonra B gelmelidir" mantığıyla çalışır. Eğer doğru cevabı bulamazsa, sadece kulağa en mantıklı, en ikna edici gelecek kelimeleri yan yana dizerek o sahte gerçeği kusursuz bir özgüvenle uydurur. Bilgisayar bilimcileri buna "AI Halüsinasyonu" der. Makineler insanlaştıkça, sadece zekâmızı değil; gerçeği bilmediği halde biliyormuş gibi yapan o korkunç, kibirli ve "özgüvenli cehaletimizi" (uydurma yeteneğimizi) de kusursuzca kopyalamışlardır.',
    questionStem: 'Yapay zekânın "Halüsinasyon" görmesi (sahte bilgi üretmesi), yapay zekânın çalışma mantığıyla ilgili hangi gerçeğe dayanmaktadır?',
    options: [
      'Yapay zekânın insanlığa zarar vermek için gizlice ve bilinçli olarak yalan haber yaymasına',
      'Makinelerin veritabanlarının zamanla dolup silinerek hafıza kaybı yaşamasına',
      'Yapay zekânın gerçeği (hakikati) kavrayan bir bilinç olmaması; sadece kelimelerin matematiksel olasılıklarını (yan yana gelişini) hesaplayan bir motor olduğu için, cevabı bilmediğinde kusursuz bir özgüvenle sahte kurgular (uydurmalar) üretmesine',
      'İnsanların yapay zekâya bilerek yanlış bilgiler öğreterek onu sabote etme çabasına'
    ],
    correct: 2,
    explanation: 'Yapay zekânın kasten yalan söylemediği, sadece olasılık/tahmin motoru olduğu için cevabı bilmediğinde kelimeleri mantıklıymış gibi dizerek uydurduğu (özgüvenli cehalet) açıklanmıştır.'
  },
  {
    title: 'Ütopya (Olmayan Yer) ve Thomas More',
    passage: 'Hepimiz "Ütopya" kelimesini; savaşın, yoksulluğun ve adaletsizliğin olmadığı, herkesin eşit ve mutlu yaşadığı o kusursuz rüya diyarı olarak kullanırız. Ancak bu kelimeyi 1516 yılında icat eden İngiliz düşünür Thomas More, aslında tarihin en zeki kelime oyunlarından (ironilerinden) birini yapmıştır. More, kitabında bu kusursuz adayı tasvir ederken, kelimeyi Yunanca "ou" (yok/olmayan) ve "topos" (yer) kelimelerini birleştirerek türetmiştir. Yani Ütopya kelime anlamıyla tam olarak "Olmayan Yer (Yok-Yer)" demektir! More bize şu acı gerçeği yüzyıllar öncesinden fısıldamıştır: İnsanoğlunun kurguladığı o tamamen eşit, acısız, sorunsuz ve kusursuz cennet hayali (sistemi), insan doğasının o bencil ve kusurlu gerçekliği yüzünden yeryüzünde "hiçbir zaman var olamayacak" kadar imkânsızdır.',
    questionStem: 'Thomas More\'un "Ütopya" kelimesini türetirken kullandığı köken ("Olmayan Yer"), yazar tarafından nasıl bir felsefi itiraf (ironi) olarak yorumlanmıştır?',
    options: [
      'Kusursuz toplumların sadece adalarda ve denize kıyısı olan yerlerde kurulabileceği düşüncesi',
      'İnsanın o bencil ve kusurlu doğası gereği; acısız, tamamen eşit ve kusursuz bir toplum hayalinin gerçek dünyada "asla var olamayacak" kadar imkânsız bir rüya (yalan) olduğunun edebi itirafı',
      'Eski Yunancanın kelime türetmek için en yetersiz ve fakir dil olduğu gerçeği',
      'Devlet yöneticilerinin her zaman halkın mutluluğu için gizli projeler ürettiği inancı'
    ],
    correct: 1,
    explanation: 'Ütopya\'nın kelime anlamının "olmayan yer" olması; kusursuz/acısız bir sistemin insan doğasındaki kusurlar nedeniyle gerçek dünyada asla var olamayacağı gerçeğinin edebi/felsefi itirafıdır.'
  },
  {
    title: 'Kayıp Kozmonotlar (Uzaydaki Sessiz Çığlıklar)',
    passage: '1961\'de Yuri Gagarin uzaya çıkan ilk insan olarak dünya çapında kahraman ilan edildiğinde, Sovyetler Birliği kusursuz bir zafer kutluyordu. Ancak Soğuk Savaş\'ın dinleme istasyonlarındaki İtalyan radyo amatörleri (Judica-Cordiglia kardeşler), Gagarin\'den aylar öncesine ait kan dondurucu radyo sinyalleri kaydettiklerini iddia ettiler. Kayıtlarda, uzayın derinliklerinden gelen, nefes darlığı çeken, ateşler içinde yanarak "Bana yardım edin, yanıyorum, dünya ne kadar da uzak!" diye feryat eden kadın ve erkek kozmonotların sesleri duyuluyordu. Sovyetler başarısızlıkları asla kabul etmediği için bu iddiaları şiddetle reddetti. "Kayıp Kozmonotlar" teorisi kanıtlanamasa da, şu felsefi dehşeti kalbimize eker: Devletlerin "kusursuz başarı ve ulusal gurur" vitrini yaratmak uğruna, kendi evlatlarının uzayın sonsuzluğundaki o yanan, boğulan ve çaresiz feryatlarını (ve isimlerini) nasıl gözlerini kırpmadan tarihten silebileceğinin o karanlık ihtimali.',
    questionStem: 'Kayıp Kozmonotlar teorisinin (ve kayıtların) toplumsal/siyasi bağlamda temsil ettiği asıl "dehşet verici ihtimal" nedir?',
    options: [
      'Radyo dalgalarının atmosfer dışında uzaylılar tarafından farklı frekanslara dönüştürülmesi',
      'Otoritenin (devletlerin), ulusal gurur, propaganda ve "kusursuz başarı" vitrini yaratmak uğruna; başarısız olan kendi insanlarının acı dolu çığlıklarını ve ölümlerini (isimlerini) acımasızca tarihten silebilme (yok sayma) ihtimali',
      'Uzay gemilerindeki oksijen tanklarının kadın astronotların kullanımına uygun tasarlanmamış olması',
      'Amatör radyocuların devlet sırlarını kolayca çalarak zengin olabilmesi'
    ],
    correct: 1,
    explanation: 'Sovyetlerin başarısızlığı kabul etmemesi ve çığlık atan kozmonotların isimlerini silmesi ihtimali; otoritenin ulusal gurur uğruna kendi evlatlarının ölümünü ve acısını tarihten silme (sansürleme) dehşetini temsil eder.'
  },
  {
    title: 'Sonsuz Maymun Teoremi',
    passage: 'Matematik ve felsefenin o baş döndürücü ihtimallerinden biri olan "Sonsuz Maymun Teoremi" şunu söyler: Bir daktilonun başına bir maymun oturtun. Eğer bu maymuna rastgele tuşlara basması için "sonsuz bir zaman" (sonsuz ömür) verirseniz, maymun hiçbir şey bilmemesine rağmen, eninde sonunda tuşlara yanlışlıkla o kadar kusursuz basacaktır ki, Shakespeare\'in tüm tiyatro oyunlarını kelimesi kelimesine (noktasına virgülüne kadar) hatasız bir şekilde yazacaktır! Bu deney maymunların zeki olduğunu anlatmaz. Anlattığı şey şudur: "Sonsuzluk" ve "Rastlantısallık" o kadar devasa, o kadar aklın sınırlarını aşan kavramlardır ki; sonsuz bir zaman çizgisinde, evrendeki en anlamlı, en estetik ve en kusursuz olayların (hayatın, sanatın, düzenin) ortaya çıkması için zeki bir yaratıcıya değil; sadece ve sadece kör tesadüflerin durmaksızın çarpışmasına ihtiyaç vardır.',
    questionStem: 'Sonsuz Maymun Teoremi\'nin "rastlantısallık ve sonsuzluk" üzerinden kanıtlamaya çalıştığı felsefi çıkarım nedir?',
    options: [
      'Hayvanların (özellikle maymunların) eğitildiklerinde insanlardan daha sanatsal eserler üretebileceği',
      'Klasik edebiyat eserlerinin aslında çok basit bir kelime hazinesiyle yazılmış olduğu',
      'Zamanın sonsuz olduğu ve denemelerin sınırsızca tekrarlandığı bir düzende (rastlantısallıkta); en anlamlı, en karmaşık ve kusursuz sonuçların (düzenin) bilinçli bir tasarıma gerek kalmadan sadece kör tesadüflerle bile oluşabileceğinin matematiksel gerçeği',
      'Daktilo ve bilgisayar gibi mekanik aletlerin insan beyninin düşünme şeklini bozduğu'
    ],
    correct: 2,
    explanation: 'Sonsuz zamanda rastgele tuşlara basarak bir başyapıt çıkması; sonsuzluk ve rastlantısallık içinde, en anlamlı/kusursuz şeylerin bilinçli tasarıma gerek kalmadan sadece kör tesadüflerle ortaya çıkabileceğini gösterir.'
  },
  {
    title: 'Fregoli Sendromu (Tek Kişilik Tiyatro)',
    passage: 'Capgras sendromunun tam tersi olan, ancak çok daha paranoyak bir nörolojik bozukluk vardır: "Fregoli Sendromu". Bu hastalığa yakalanan kişi, etrafındaki herkesin (bakkalın, postacının, doktorun ve yoldan geçenlerin) aslında tek bir kişi olduğuna, bu "kötü niyetli düşmanın" sürekli farklı kılıklara girerek (makyaj yaparak) onu izlediğine ve onu kandırmaya çalıştığına inanır. Hastanın beynindeki yüz tanıma merkezi, tanıdık bir yüz ile tamamen yabancı bir yüzü birbirinden ayırt edemez. Hasta, milyarlarca insanın yaşadığı bir dünyada değil; başrolünde kendisinin olduğu ve diğer tüm figüranların aslında "onu mahvetmek isteyen tek bir hayalet (taklitçi)" olduğu kan dondurucu ve tek kişilik bir tiyatroda (paranoyada) hapsolmuştur. Beynin kurduğu kurgu, gerçeğin kendisinden çok daha güçlü bir gardiyandır.',
    questionStem: 'Fregoli Sendromu\'na yakalanan bir hastanın yaşadığı gerçeklik algısındaki (kâbustaki) asıl bozulma nedir?',
    options: [
      'Hastanın kendi yüzünü aynada tanıyamayarak kimliğini tamamen unutması',
      'Beynin yüz tanıma mekanizmasındaki hata nedeniyle; etraftaki tüm farklı insanların aslında sürekli kılık değiştiren, hastayı takip eden tek bir düşman (taklitçi) olduğuna inanarak yaşanan o tek kişilik, devasa ve paranoyak tiyatro hissi',
      'Kalabalık ortamlarda seslerin birbirine karışmasıyla hastanın duyma yetisini kaybetmesi',
      'Kişinin geçmişte tanıdığı herkesi ölmüş olarak görmesi ve yas tutması'
    ],
    correct: 1,
    explanation: 'Tüm farklı insanların aslında sürekli kılık değiştiren tek bir düşman (taklitçi) olduğuna inanması; beynin yüz tanıma hatası yüzünden kişiyi devasa, paranoyak ve tek kişilik bir kâbusa hapsetmesidir.'
  },
  {
    title: 'Kolomb\'un Yumurtası (Geriye Bakış Yanılgısı)',
    passage: 'Kristof Kolomb Amerika\'yı keşfedip döndüğünde, bir ziyafette onu kıskanan asilzadeler şöyle der: "Bunda büyütecek ne var? Sürekli batıya gidince o toprakları herkes bulabilirdi, çok basit bir iş." Kolomb gülümser ve masadakilere haşlanmış bir yumurta vererek, "Bunu masanın üzerinde dik tutabilir misiniz?" diye sorar. Herkes dener, yumurta devrilir, kimse yapamaz ve "Bu imkânsız!" derler. Kolomb yumurtayı alır, altını hafifçe masaya vurup kırarak yumurtayı dik bir şekilde masaya oturtur. Herkes itiraz eder: "Ama böyle kırarak biz de yapardık!" Kolomb tarihi cevabını verir: "Evet yapardınız, ama yapmadınız; ben yaptım." "Kolomb\'un Yumurtası" hikâyesi; devrim yaratan, büyük ve dâhiyane fikirlerin "yapıldıktan sonra" herkese çok basitmiş gibi görünmesi (Geriye Bakış Yanılgısı) ve kibrin, başkasının dehasını küçümseme çabasının o ucuz riyakârlığıdır.',
    questionStem: 'Kolomb\'un Yumurtası hikâyesi, başarılı eylemler sonrasında toplumun (kıskanç kalabalığın) sergilediği hangi psikolojik zaafı (yanılgıyı) eleştirir?',
    options: [
      'Yumurta ve tarım ürünlerinin israf edilmesinin ahlaki bir suç olduğu düşüncesini',
      'Bir sorun veya keşif başarıyla çözüldükten sonra; "Zaten çok basitti, ben de yapardım" diyerek, o ilk cesareti ve yaratıcı dehayı (vizyonu) küçümsemeye çalışan o kıskanç "geriye bakış (hindsight) yanılgısını"',
      'Zenginlerin ve soyluların denizcilik bilgisinin her zaman yetersiz olduğunu',
      'Büyük keşiflerin her zaman şans eseri ve tesadüfen bulunduğunu'
    ],
    correct: 1,
    explanation: 'Çözüm gösterildikten sonra "kırarak biz de yapardık" denmesi; devrim yaratan vizyonun "yapıldıktan sonra" herkese basitmiş gibi görünmesini (geriye bakış yanılgısını) ve kıskanç kibri eleştirir.'
  },
  {
    title: 'Kara Kutu Çelişkisi',
    passage: 'Uçak kazalarından sonra haber bültenlerinde hep aynı umutlu cümleyi duyarız: "Ekipler Kara Kutu\'yu arıyor." İnsanlar bu aletin renginin siyah olduğunu ve uçağın gizli, karanlık bir köşesinde saklandığını düşünür. Oysa Kara Kutu (Uçuş Veri Kaydedicisi) siyah değil, enkazın içinde kolayca bulunabilsin diye "fosforlu, parlak bir turuncudur". İşin felsefi ve trajik tarafı ise şudur: Kara Kutu o kadar dayanıklı üretilmiştir ki; ateşe, okyanus dibindeki basınca ve binlerce metreden yere çakılmaya karşı direnir ve içindeki "veriyi" sapasağlam korur. Ancak o devasa uçağın içindeki asıl değerli olan "insan bedeni (can)", o kazada saniyeler içinde kül olur. İnsanoğlu, kendi ürettiği veri kayıt cihazını ölümsüzleştirmeyi başarmış, ancak bizzat kendi etten bedenini (yaşamı) o enkazdan kurtaracak teknolojiyi asla yaratamamıştır.',
    questionStem: 'Kara Kutu kavramının anlatıldığı bu parçadaki asıl "teknolojik ve varoluşsal ironi" nedir?',
    options: [
      'Kutunun aslında siyah değil turuncu olması nedeniyle arama ekiplerinin genellikle yanlış nesnelere yönelmesi',
      'İnsanoğlunun kaza anında (donanımsal verileri) kurtaracak kusursuz ve ölümsüz (dayanıklı) bir teknoloji üretmeyi başarmasına rağmen; asıl korunması gereken o kırılgan insan bedenini (kendi canını) kurtarmakta çaresiz kalması ironisi',
      'Pilotların uçuş verilerini bilerek silip kazaların gerçek nedenlerini saklama ihtimalinin bulunması',
      'Teknolojik kayıtların insan anılarından çok daha yanıltıcı veriler sunması'
    ],
    correct: 1,
    explanation: 'Kutunun (verinin) ateşe/darbeye dayanıp ölümsüz olması ancak asıl korunması gereken insan bedeninin (canın) kül olması; teknolojinin veriyi koruyup canı koruyamaması ironisini vurgular.'
  },
  {
    title: 'Yeni Söylem (Newspeak - 1984)',
    passage: 'George Orwell\'in 1984 romanındaki diktatör rejimin (Parti\'nin) en sinsi ve yıkıcı silahı silahlar veya kameralar değil, bizzat dilin kendisidir. Parti, İngilizceyi daraltıp "Yenisöylem" (Newspeak) adında yeni bir dil yaratır. Amaç, her yıl sözlükten yüzlerce kelimeyi çıkarıp yok etmektir. "Özgürlük", "İsyan", "Adalet" gibi kelimeler sözlükten silindiğinde, insanların zihninde bu kavramlara dair düşünceler de tamamen silinir. Çünkü insan, adını bilmediği (kelimesine sahip olmadığı) bir şeyi hayal edemez ve hissedemez! Eğer "özgürlük" kelimesi yoksa, özgürlüğü isteyemezsiniz; eğer "isyan" kelimesi yoksa, isyan planlayamazsınız. Yenisöylem bize şunu haykırır: Bir toplumu köleleştirmek için onları demir parmaklıklar ardına koymanıza gerek yoktur; kelime dağarcıklarını fakirleştirmeniz (dillerini kısırlaştırmanız), onların zihinlerini ebedi bir hücreye tıkmak için fazlasıyla yeterlidir.',
    questionStem: 'Orwell\'in "Yenisöylem" (Newspeak) kavramı, dil ve düşünce (özgürlük) arasındaki ilişkiye dair nasıl bir tehlikeyi işaret eder?',
    options: [
      'Yabancı kelimelerin dilden çıkarılmasının ülkenin kültürel yapısını bozmasını',
      'Bir dildeki kelime dağarcığı daraltıldığında (ve kavramlar silindiğinde), o dili konuşan insanların o kelimelere ait (özgürlük, isyan gibi) düşünceleri ve duyguları üretemeyecek kadar zihinsel bir felce (köleliğe) sürükleneceğini',
      'Kısa cümleler kurmanın insanlarda hafıza kaybına ve Alzheimer hastalığına neden olduğunu',
      'Eski edebiyat eserlerinin modern kelimelerle sadeleştirilmesinin sanatı yok ettiğini'
    ],
    correct: 1,
    explanation: '"İnsan adını bilmediği şeyi hayal edemez" mantığıyla; kelimelerin silinmesinin, o kelimelere ait düşünceleri (özgürlüğü) yok ettiği ve dili fakirleştirmenin zihni köleleştirdiği tehlikesini işaret eder.'
  },
  {
    title: 'Dördüncü Duvarın Yıkılması (Tiyatronun İllüzyonu)',
    passage: 'Tiyatro sahnesinin üç tarafı kapalıdır; dördüncü tarafı ise seyirciye açılan "görünmez bir duvar" gibidir. Oyuncular, seyircilerin orada olduğunu bilmelerine rağmen, o dördüncü duvarın arkasını (karanlıktaki seyirciyi) asla görmezden gelir ve kendi kurgusal dünyalarında (illüzyonda) yaşamaya devam ederler. Ancak bazen bir karakter aniden oyunun ortasında sahnenin dışına bakar, doğrudan seyircinin gözünün içine dikilir ve onlara bir şey söyler. Buna "Dördüncü Duvarın Yıkılması" denir. O an izleyici büyük bir şok yaşar; çünkü güvenli ve pasif bir röntgenci (izleyici) olduğu o karanlık koltukta, birdenbire kurgunun (yalanın) içine çekilmiş ve oyunun bir parçası haline gelmiştir. Bu eylem; sanattaki (ve hayattaki) o "ben sadece bir seyirciyim, bu beni ilgilendirmez" diyen sığ ve pasif kibrimizi suratımıza çarparak yıkan sarsıcı bir uyanış anıdır.',
    questionStem: '"Dördüncü Duvarın Yıkılması" eyleminin, izleyici üzerinde yarattığı asıl felsefi/psikolojik etki parçada nasıl tanımlanmıştır?',
    options: [
      'Oyuncunun repliklerini unutarak seyirciden yardım istemesinin getirdiği amatörce bir tiyatro kazası',
      'İzleyicinin karanlıkta oturan, pasif ve güvenli bir "seyirci (röntgenci)" olma konforunu yerle bir ederek; onu doğrudan hikâyenin (gerçekliğin/yalanın) içine çekip yüzleştiren sarsıcı bir uyanış (şok) anı',
      'Tiyatro salonlarının mimari olarak çok kötü tasarlanmasından doğan görsel bir illüzyon',
      'Seyircilerin sahneye atlayarak oyunun akışını ve dekoru tamamen bozma eylemi'
    ],
    correct: 1,
    explanation: 'Karakterin seyirciye bakıp o görünmez duvarı kırması; izleyicinin pasif ("bu beni ilgilendirmez") konfor alanını yıkarak onu kurgunun/yüzleşmenin içine çekmesi (sarsıcı uyanış) olarak tanımlanmıştır.'
  },
  {
    title: 'Macondo Yağmurları (Zamanın Döngüsü)',
    passage: 'Gabriel García Márquez\'in Büyülü Gerçekçilik başyapıtı "Yüzyıllık Yalnızlık"ta, kurgusal Macondo kasabasına tam dört yıl on bir ay iki gün boyunca aralıksız yağmur yağar. Her şey çürür, gökyüzü kapanır. Ancak yağmur bittiğinde ve kasaba tekrar kurulduğunda, Ursula karakteri o ürpertici tespiti yapar: "Zaman geçmiyor, sadece dönüyor." Macondo halkı, ne kadar acı çekerse çeksin, hangi savaşları yaşarsa yaşasın; geçmişin hatalarını, ihtiraslarını ve cinnetlerini aynı genetik kodla, sanki hiç ders almamışçasına nesilden nesile kusursuz bir şekilde tekrarlamaktadır. Macondo\'nun o boğucu yağmurları ve döngüsü; insanoğlunun, sürekli "ileriye (geleceğe)" gittiğini sanırken, aslında kendi unutkanlığı, hırsı ve cehaleti yüzünden aynı hataların etrafında dönüp duran yorgun ve hüzünlü bir sirk atından farksız olduğunu gösterir.',
    questionStem: 'Ursula karakterinin "Zaman geçmiyor, sadece dönüyor" tespiti, insanlık tarihi (ve Macondo) hakkında hangi kötümser (döngüsel) gerçeği vurgular?',
    options: [
      'İklim değişikliklerinin kasabada kalıcı hasarlar bırakarak insanları göçe zorlamasını',
      'İnsanoğlunun hatalarından asla ders almadığını ve geleceğe ilerlediğini (ilerleme mitini) sanırken, aslında kendi ihtirasları ve cehaletiyle geçmişteki aynı felaketleri ve yanlışları sonsuz bir döngüde tekrarladığını',
      'Kolombiya\'daki zaman ölçüm aletlerinin (saatlerin) savaşlar yüzünden tamamen bozulmasını',
      'Yağmurlu havaların insan psikolojisini bozarak onların zaman algısını yavaşlatmasını'
    ],
    correct: 1,
    explanation: '"Zaman geçmiyor dönüyor" sözü; insanın ilerlediğini (geliştiğini) sanmasına rağmen aynı hataları ve cinneti ders almadan nesilden nesile tekrar etmesini (döngüsel çöküşü) vurgular.'
  },
  {
    title: 'Kargo Kültü Bilimi (Feynman\'ın Uyarısı)',
    passage: 'Fizikçi Richard Feynman, Pasifik yerlilerinin uçakları geri getirmek için ahşaptan kuleler yapmasını (Kargo Kültlerini) anlattıktan sonra namlusunu doğrudan modern bilim dünyasına çevirdi. Feynman\'a göre akademide, laboratuvarlarda ve şirketlerde yapılan birçok araştırma "Kargo Kültü Bilimi"dir. İnsanlar, bilimsel görünmek için süslü kelimeler kullanır, karmaşık anketler yapar, gösterişli grafikler çizer (yani ahşaptan kontrol kuleleri inşa ederler). Dışarıdan bakıldığında her şey kusursuz bir "bilim" gibi görünür; tek bir eksik vardır: "Dürüstlük ve Şüphe". Araştırmacı, kendi teorisini çürütecek verileri saklıyor, sadece alkış alacak sonuçları yayımlıyorsa; o kişi bilim yapmıyordur. O kişi, beyaz önlük giyip sahte havalimanlarında uçak (kargo) bekleyen, gerçeğin değil sadece "gösterişin ve şöhretin" kurbanı olmuş modern bir şarlatandır.',
    questionStem: 'Feynman\'ın "Kargo Kültü Bilimi" eleştirisi, modern bilim insanlarının (veya akademinin) hangi sahte ve tehlikeli tutumunu hedef alır?',
    options: [
      'Üniversitelerin bütçe yetersizliğinden dolayı araştırma malzemesi alamayıp ahşap (ilkel) aletler kullanmasını',
      'Bilimin o dürüst, eleştirel ve şüpheci (hakikat arayan) özünü kaybederek; sadece şekilsel olarak (süslü grafikler ve terimlerle) bilim yapıyormuş gibi görünme şovunu (ve kendi teorisini aklama sahtekârlığını)',
      'Fizikçilerin yerli kabilelerin dinlerine ve inançlarına karşı saygısızca alay etmesini',
      'Laboratuvarlarda eski ve modası geçmiş deney yöntemlerinin inatla kullanılmaya devam edilmesini'
    ],
    correct: 1,
    explanation: 'Süslü grafik ve kelime kullanıp ama dürüstlüğü/şüpheyi yok sayanların (teorisini çürütecek veriyi saklayanların), bilim yapmayıp sadece "bilim yapıyormuş gibi" (sahte/şekilsel) gösteriş yapmasını hedef alır.'
  },
  {
    title: 'Oidipus Kompleksi (Kaderden Kaçarken Kadere Koşmak)',
    passage: 'Yunan mitolojisinde Thebai Kralı Laios, bir kâhinden "Yeni doğan oğlun seni öldürecek ve karınla evlenecek" kehanetini duyar. Dehşete kapılan kral, kaderi engellemek için bebeği (Oidipus\'u) ayaklarından bağlayıp ıssız bir dağa terk eder. Ancak bebek bir çoban tarafından bulunur ve başka bir ülkenin kralına evlatlık verilir. Yıllar sonra Oidipus, aynı kehaneti öğrenir ve "üvey" olduğunu bilmediği o ailesine zarar vermemek için evden (ülkesinden) kaçar. Kaçarken yolda kavga ettiği yaşlı bir adamı (gerçek babasını) öldürür ve Thebai kentine giderek kraliçeyle (gerçek annesiyle) evlenir. Oidipus efsanesi (ve Freud\'un psikanalitik kompleksi); insanın, kaderden (veya korkularından) kaçmak için aldığı her çırpınışlı ve mantıklı kararın, aslında onu ilmek ilmek o kaçtığı korkunç sonun ta merkezine kendi ayaklarıyla götürdüğü (Kendini Gerçekleştiren Kehanet) o kusursuz ve acımasız kurguyu sembolize eder.',
    questionStem: 'Oidipus mitinin temelinde yatan ve "Kader" anlayışına getirilen o acımasız (ironik) yaklaşım nedir?',
    options: [
      'Kehanetlerin her zaman yanlış çıkarak insanları boş yere korkuttuğu (kahinlerin yalan söylediği) gerçeği',
      'Tanrıların insanların kararlarına fiziksel olarak müdahale edip onları köleleştirdiği',
      'İnsanın, kendisi için çizilen o kötü sondan (kaderden) kaçmak (onu engellemek) amacıyla attığı her kaçış adımının, paradoksal olarak (kendini gerçekleştiren kehanet misali) o korkunç sonu bizzat kendi elleriyle inşa etmesini sağlaması',
      'Küçük yaşta aileden ayrılan çocukların her zaman psikolojik sorunlar yaşayıp suça meyilli olması'
    ],
    correct: 2,
    explanation: 'Babası çocuğu atarak, çocuk ise kaçarak kehaneti engellemeye çalışmış; ancak bu "kaçış çabalarının" kendisi o kehanetin (kaderin) gerçekleşmesinin asıl sebebi olmuştur (ironik yaklaşım).'
  },
  {
    title: 'Borges ve Kum Kitabı',
    passage: 'Jorge Luis Borges, "Kum Kitabı" adlı öyküsünde esrarengiz bir İncil satıcısının getirdiği bir kitaptan bahseder. Bu kitabın başı veya sonu yoktur. Herhangi bir sayfasını açtığınızda karşınıza rastgele kelimeler ve tuhaf resimler çıkar; ancak o sayfayı kapatıp tekrar açtığınızda o sayfa sonsuza dek kaybolur, yerine tamamen yepyeni bir sayfa gelir! Tıpkı kum taneleri gibi ele avuca sığmayan ve durmaksızın değişen bu sonsuz kitap, başta ana karakteri büyüler. Ancak zamanla bu "sonsuzluk", karakteri deliliğe, uykusuzluğa ve paranoyaya sürükler. Sonunda dayanamayıp kitabı kütüphanenin en karanlık rafına saklar. Kum Kitabı; sınırları olmayan, başlangıcı ve sonu (düzeni) bulunmayan "sonsuzluğun ve anlamsızlığın", insan zihni için bir aydınlanma değil, başa çıkılamaz, dehşet verici ve akıl hastası eden bir kâbus olduğunu fısıldar.',
    questionStem: 'Borges\'in "Kum Kitabı" metaforu, insan zihni ve "sonsuzluk (sınırsızlık)" ilişkisi hakkında neyi iddia etmektedir?',
    options: [
      'İnsan beyninin evrendeki tüm bilgileri rahatlıkla öğrenebilecek kapasitede olduğunu',
      'Başlangıcı, sonu (düzeni) ve sınırları olmayan "sonsuz" bir bilgi (veya yapı) kaynağının; insan zihnini aydınlatmak yerine onu felç ederek, dehşete (deliliğe ve anlamsızlığa) sürükleyen dayanılmaz bir kâbus olduğunu',
      'Kitapların zamanla dijital ortama aktarılmasının okuma alışkanlıklarını yok ettiğini',
      'Yabancı dillerde yazılmış eserlerin tercüme edilmesinin orijinal anlamı bozduğunu'
    ],
    correct: 1,
    explanation: 'Sayfaları sonsuz olan (başı sonu olmayan) kitabın adamı delirtmesi; insan zihninin "düzeni ve sınırı" olmayan sonsuzluk/bilgi karşısında aydınlanmak yerine felç olup delirdiğini (dayanamadığını) iddia eder.'
  },
  {
    title: 'Tarihsel Revizyonizm (Geçmişin Yeniden Yazılması)',
    passage: 'George Orwell\'in "1984" adlı kâbus evreninde, başkarakter Winston Smith\'in görevi "Tarihi yeniden yazmaktır." Eğer devletin lideri (Büyük Birader) üç ay önce ekonomik kotaların artacağını söylemiş ama aslında ekonomi çökmüşse; Winston eski gazeteleri arşivden bulur, o cümleyi siler ve "Ekonomi düşecek" şeklinde değiştirip yeniden basar. Eski gazete yakılır. Devlet hiçbir zaman hata yapmamış olur. Orwell\'in bu kehaneti (Tarihsel Revizyonizm), sadece distopik romanlarda değil, günümüz dijital dünyasında da en büyük tehlikedir. İktidarın (veya güç sahiplerinin), hatalarını gizlemek ve bugünkü politikalarını meşrulaştırmak uğruna, "geçmişi (arşivi)" sürekli olarak kendi menfaatine göre eğip bükerek değiştirmesidir. Orwell\'in dediği gibi: "Geçmişi kontrol eden geleceği kontrol eder; bugünü kontrol eden geçmişi kontrol eder."',
    questionStem: 'Orwell\'in "Tarihsel Revizyonizm" (geçmişin değiştirilmesi) kavramıyla dikkat çektiği en büyük toplumsal/siyasi tehlike nedir?',
    options: [
      'Eski gazetelerin ve kâğıtların saklanmasının arşivlerde yer darlığı yaratması',
      'Yazarların ve gazetecilerin düşük maaşlarla zor şartlarda çalıştırılması',
      'Otoritenin (iktidarın), kendi bugünkü hatalarını örtmek ve gücünü korumak (geleceği şekillendirmek) adına, toplumun objektif hafızasını (geçmişi/gerçeği) sürekli olarak silip kendi çıkarlarına göre yeniden kurgulaması (yalanı hakikat yapması)',
      'Edebiyat eserlerinde sürekli olarak kötümser (distopik) bir dilin kullanılarak halkın moralinin bozulması'
    ],
    correct: 2,
    explanation: 'Winston\'ın devlet hata yapmamış gibi eski gazeteleri değiştirip basması; otoritenin kendi gücünü/bugününü meşrulaştırmak için toplumun hafızasını (geçmişi) kasten büküp yalanı gerçeğe dönüştürmesi tehlikesidir.'
  },
  {
    title: 'Mistik Şarlatanlık (Grigori Rasputin)',
    passage: 'Rus Çarlığı\'nın son yıllarında, sibiryalı bir köylü olan Grigori Rasputin saraya girmeyi başardı. Çariçe\'nin hemofili hastası oğlunu "dualarla ve mistik dokunuşlarla" iyileştirdiğine inandırarak, koca bir imparatorluğun kararlarında söz sahibi oldu. Eğitimli doktorlar ve devlet adamları çaresizce kenara itilirken, yıkanmayı bile reddeden bu "kutsal adam", kimin bakan olacağına veya savaşa girilip girilmeyeceğine karar verir hale geldi. Rasputin\'in bu akılalmaz yükselişi, onun çok güçlü bir büyücü olmasından değil; çöküşün eşiğindeki, çaresiz ve korku içindeki bir toplumun (veya yöneticilerin), aklın bittiği yerde o "sihirli, mistik ve kestirme" çözümlere (şarlatanlara) inanmaya ne kadar muhtaç (ve gönüllü) olduğunun tarihi ve kanlı belgesidir.',
    questionStem: 'Rasputin\'in Rus sarayındaki yükselişi, yazar tarafından toplum ve "çaresizlik" bağlamında neyin sembolü olarak yorumlanmıştır?',
    options: [
      'Geleneksel bitkisel tedavilerin modern tıptan her zaman daha başarılı sonuçlar verdiğinin',
      'Saray entrikalarının ve suikast planlarının her dönemde devlet yönetiminin ayrılmaz bir parçası olduğunun',
      'Korku, kriz ve çaresizlik içindeki bir toplumun (veya elitlerin); akılcı ve zor çözümler yerine, onlara sahte umutlar sunan "mistik, sihirli ve kestirme" şarlatanlıklara boyun eğme (inanma) zaafının',
      'Sibiryalı köylülerin aristokratlara göre çok daha zeki ve manipülatif olduğunun'
    ],
    correct: 2,
    explanation: 'Çaresiz kalan çariçenin doktorları bırakıp Rasputin\'e inanması; kriz ve çaresizlik anında insanların aklı bırakıp mistik ve sahte kurtarıcılara (şarlatanlara) sığınma zaafını (ihtiyacını) sembolize eder.'
  }
];

export const felsefeParagrafSorulari24: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_24.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_24[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe24-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
