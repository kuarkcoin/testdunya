import type { BilimParagrafQuestion, SincityParagrafQuestion, TarihParagrafQuestion } from './types';

const PARAGRAPH_THEMES_25 = [
  {
    title: 'Ekmek ve Sirk (Panem et Circenses)',
    passage: 'Antik Roma\'da imparatorluk çökerken, yolsuzluklar artarken ve sınırlar düşerken, Romalı şair Juvenalis halkın neden isyan etmediğini tek bir sarsıcı cümleyle açıklar: "Panem et Circenses" (Ekmek ve Sirk). İmparatorlar, halkın siyaseti sorgulamasını engellemek için onlara bedava tahıl dağıtıyor ve Kolezyum\'da kanlı gladyatör dövüşleri (eğlence) sunuyordu. Karnı doyan ve vahşetle eğlendirilen kalabalıklar, özgürlüklerinin ve haklarının ellerinden alınışını neşeyle alkışlıyordu. Juvenalis\'in bu tespiti; modern çağın televizyon şovlarına, ucuz tüketim kültürüne ve sosyal medyasına tutulan acımasız bir aynadır: İnsanlar, sahte hazlarla uyuşturulduklarında, kendi köleliklerini gönüllü olarak ve gülümseyerek kabul ederler.',
    questionStem: 'Juvenalis\'in "Ekmek ve Sirk" kavramı, otoritenin toplumu kontrol etme yöntemi hakkında neyi eleştirmektedir?',
    options: [
      'Halkın her zaman sanata ve kültüre spordan daha fazla değer verdiğini',
      'Yöneticilerin, halkın karnını (ucuz gıdayla) doyurup zihnini (sığ eğlencelerle) uyuşturarak; onların eleştirel düşünme, isyan etme ve özgürlük arayışlarını nasıl uyuşturup yok ettiğini',
      'Antik Roma\'da gladyatörlerin siyasetçilerden daha güçlü bir konuma geldiğini',
      'Ekonomik krizlerin her zaman halk isyanlarıyla sonuçlandığı efsanesini'
    ],
    correct: 1,
    explanation: 'Bedava gıda ve eğlenceyle halkın isyan etmesinin (sorgulamasının) engellenmesi; otoritenin sığ hazlar sunarak toplumu nasıl uyuşturup köleleştirdiğini eleştirir.'
  },
  {
    title: 'Hipergerçeklik ve Simülakr (Baudrillard)',
    passage: 'Fransız sosyolog Jean Baudrillard, günümüz dünyasını anlatmak için "Simülakr" (gerçeği olmayan kopya) kavramını kullanır. Ona göre medya ve reklamlar öylesine devasa bir kurgu yaratmıştır ki, artık "gerçek" tamamen ölmüş, yerini gerçeğinden daha kusursuz ve cazip olan "Hipergerçeklik" almıştır. Baudrillard, Disneyland\'ı buna en iyi örnek olarak gösterir. İnsanlar Disneyland\'a gidip oranın "sahte, hayali bir dünya" olduğunu düşünerek eğlenirler. Oysa Baudrillard\'a göre asıl korkunç illüzyon şudur: Disneyland\'ın asıl amacı kendisinin sahte olduğunu düşündürmek değil; dışarıdaki asıl Amerika\'nın, şehirlerin ve hayatlarımızın "hala gerçek olduğuna" bizi inandırmak için uydurulmuş bir paravandır. Aslında dışarısı da Disneyland kadar sahtedir; biz sadece bunu kabullenmekten korkarız.',
    questionStem: 'Baudrillard\'ın Disneyland üzerinden yaptığı "Hipergerçeklik" eleştirisinin asıl felsefi şoku nedir?',
    options: [
      'Eğlence parklarının mimari olarak çok başarısız yapılar olduğunu kanıtlaması',
      'Disneyland\'ın "sahte" bir yer olmasından ziyade; onun asıl işlevinin, dışarıdaki gerçek dünyanın (hayatlarımızın) aslında çoktan sahteleşip kurguya (hipergerçekliğe) dönüştüğü gerçeğini bizden gizleyen psikolojik bir kalkan olması',
      'İnsanların sadece çizgi film karakterleriyle bağ kurabilen çocuksu varlıklara dönüşmesi',
      'Amerika\'daki tüketim kültürünün diğer kıtalardan daha geride kalması'
    ],
    correct: 1,
    explanation: 'Disneyland\'ın sahteliğinin, aslında dışarıdaki hayatlarımızın da tamamen sahteleştiği (hipergerçekliğe dönüştüğü) gerçeğini gizlemek (bizi dışarının gerçek olduğuna inandırmak) için var olduğu tezi felsefi şoktur.'
  },
  {
    title: 'Ota Benga\'nın Trajedisi (İnsanat Bahçesi)',
    passage: '1906 yılında, medeniyetin başkenti sayılan New York\'taki Bronx Hayvanat Bahçesi\'nde, on binlerce "aydın ve modern" insan bir kafesin önünde kuyruğa girdi. Kafesin içinde vahşi bir hayvan değil; Kongo\'dan kaçırılarak getirilen 23 yaşındaki Afrikalı bir Pigme olan Ota Benga vardı. Yere serilmiş kemiklerin arasında, bir şempanzeyle aynı kafese konulmuş ve Darwin\'in "insan evriminin en alt basamağı" olarak bir sirk hayvanı gibi sergilenmişti. Ziyaretçiler ona gülüyor ve taş atıyordu. Ota Benga birkaç yıl sonra kalbine bir kurşun sıkarak intihar etti. Bu kan donduran olay; medeniyet ve bilim maskesi altına sığınan o "elit ve kibirli" Batı ırkçılığının, bir insanı nasıl vahşi bir hayvandan daha iğrenç (ve canavarca) bir sömürü nesnesine dönüştürebildiğinin en karanlık çığlığıdır.',
    questionStem: 'Ota Benga\'nın hayvanat bahçesinde sergilenmesi, Batı medeniyetinin hangi yüzünü acımasızca ifşa eder?',
    options: [
      'Bilimin ve zoolojinin o dönemde hayvan türlerini koruma konusunda çok hassas davrandığını',
      'Afrika kıtasından getirilen insanların iklim şartlarına uyum sağlayamama sorununu',
      'Medeniyet, evrim bilimi ve elitizm maskesi altına gizlenmiş olan o vahşi, kibrli ve acımasız ırkçılığın; bir insan onurunu bile sirklere (kafeslere) düşürecek kadar canavarlaşabildiğini',
      'Amerikan halkının Afrika kültürüne duyduğu yoğun hayranlığı ve merakı'
    ],
    correct: 2,
    explanation: 'Bir insanın şempanzeyle aynı kafeste sergilenip aşağılanması; bilim ve medeniyet maskesi altındaki elit ırkçılığın ne kadar canavarca ve sömürücü (insanlık dışı) olduğunu ifşa eder.'
  },
  {
    title: 'Hilbert\'in Sonsuz Odalı Oteli',
    passage: 'Alman matematikçi David Hilbert, insan beyninin "sonsuzluk" kavramını kavrayamayacağını kanıtlamak için bir düşünce deneyi kurgular: "Sonsuz Odalı Otel". Bu otelde sonsuz sayıda oda vardır ve hepsi doludur. Otele yeni bir müşteri gelir ve boş oda ister. Resepsiyonist "Tabii ki" der. 1 numaralı odadaki müşteriyi 2 numaraya, 2\'dekini 3\'e, 3\'tekini 4\'e geçirerek... bu işlemi sonsuza kadar kaydırır ve 1 numaralı odayı yeni müşteriye boşaltır! Otel hem tamamen dolu hem de her zaman yeni birine yer vardır. Hilbert bu sarsıcı hikâyeyle bize şunu fısıldar: Sonsuzluk çok büyük bir "sayı" değildir; o, insan aklının, sağduyunun ve klasik matematiğin sınırlarının tamamen parçalandığı (akıl almaz) bambaşka bir boyuttur.',
    questionStem: 'Hilbert\'in Sonsuz Odalı Oteli düşünce deneyinin matematik ve felsefe açısından asıl amacı nedir?',
    options: [
      'Turizm sektöründe kapasite planlamasının ne kadar hatalı yapıldığını göstermek',
      'Sonsuzluğun (infinity), bildiğimiz günlük sayılar gibi mantıksal kurallarla işleyen bir çokluk değil; insan sağduyusunu ve klasik matematiğin mantığını felç eden (yıkan) kuralsız ve farklı bir boyut olduğunu kanıtlamak',
      'Uzaydaki gezegen sayısının asla kesin olarak hesaplanamayacağını ispatlamak',
      'Matematikçilerin gündelik hayatta sorun çözme yeteneklerinin zayıf olduğunu savunmak'
    ],
    correct: 1,
    explanation: 'Dolu bir otelde sonsuz kişiye yer açılabilmesi paradoksu; sonsuzluğun büyük bir sayı değil, sağduyuyu/mantığı yıkan bambaşka (akıl almaz) bir boyut olduğunu kanıtlamak için tasarlanmıştır.'
  },
  {
    title: 'Yüzüncü Maymun Efsanesi',
    passage: 'Kişisel gelişim kitaplarında sıkça anlatılan tatlı bir masal vardır: Japonya\'nın bir adasında Macaque maymunları tatlı patatesleri yıkayarak yemeyi öğrenir. Bu davranışı öğrenen maymun sayısı tam "100"e ulaştığında, aniden sihirli (telepatik) bir şey olur ve kilometrelerce uzaktaki diğer adalarda bulunan, onlarla hiç temas etmeyen maymunlar da anında patateslerini yıkamaya başlar! Buna "Kolektif Bilinç Sıçraması" derler. Oysa gerçekte böyle bir şey hiç yaşanmamıştır. Davranış, diğer adalara sadece göç eden maymunlar aracılığıyla (fiziksel yolla) yıllar içinde yavaşça taşınmıştır. Yüzüncü Maymun Efsanesi; bilim dışı (New Age) şarlatanlıkların ve insanın, sıkıcı fiziksel gerçekler yerine "sihirli, mistik ve zahmetsiz (telepatik)" kurtuluş masallarına inanmaya ne kadar yatkın olduğunun kanıtıdır.',
    questionStem: 'Yüzüncü Maymun hikâyesinin bilim dünyasında sahte (efsane) olarak kabul edilmesi, toplum psikolojisine dair hangi zaafı ifşa eder?',
    options: [
      'Hayvanların öğrenme hızının sandığımızdan çok daha düşük ve sınırlı olduğunu',
      'İnsanoğlunun, gerçek (zahmetli/fiziksel) gelişim süreçlerini kabullenmek yerine; kulağa hoş gelen, sihirli ve mistik (zahmetsiz) kurgulara inanma ve onları yüceltme zaafını',
      'Maymun türlerinin sadece kendi aralarında iletişim kurabilen kapalı bir toplum olduğunu',
      'Japon bilim insanlarının yaptıkları araştırmaları dünyadan kasıtlı olarak sakladığını'
    ],
    correct: 1,
    explanation: 'Telepatik (sihirli) bir sıçrama yaşanmadığı halde insanların buna inanması; zorlu/bilimsel gerçekler yerine zahmetsiz ve mistik kurgulara inanma zaafını (New Age şarlatanlığını) ifşa eder.'
  },
  {
    title: 'Yabancılaşma (Karl Marx ve İşçi)',
    passage: 'Karl Marx, Sanayi Devrimi\'ni incelerken kapitalizmin sadece ekonomik bir sömürü değil, ruhsal bir felaket olduğunu "Yabancılaşma" (Alienation) kavramıyla açıklar. Orta Çağ\'da bir usta kendi elleriyle bir masa yapar, eserine bakar ve onda kendi ruhunu (emeğini) görürdü. Oysa modern fabrikadaki bir işçi, günde 12 saat boyunca sadece bir makinenin vidasını sıkar. Ne ürettiğini bile bilmez. İşçi; ürettiği ürüne, kendi emeğine, yanındaki diğer işçilere ve en sonunda "kendi insan doğasına" yabancılaşır. O artık bir insan (yaratıcı bir ruh) değil, sadece devasa bir makinenin değiştirilebilir, ucuz ve ruhsuz bir dişlisine dönüşmüştür. Kapitalizm insanın sadece emeğini değil; onun varoluş sevincini ve özünü de satın alıp posasını çıkarmıştır.',
    questionStem: 'Marx\'ın "Yabancılaşma" kavramına göre, modern fabrika işçisinin yaşadığı asıl "ruhsal/felsefi çöküş" nedir?',
    options: [
      'Maaşlarının yetersiz olması nedeniyle ailelerini geçindirememekten duydukları üzüntü',
      'Makineleşmeyle birlikte iş güvenliğinin ortadan kalkması ve fiziksel yaralanmaların artması',
      'İnsanın üretim sürecindeki yaratıcılığını ve bütünlüğünü kaybederek; ürettiği nesneye, doğasına ve kendi benliğine tamamen uzaklaşması (ruhsuz bir makine dişlisine dönüşmesi)',
      'Şehir hayatının kalabalığı içinde işçilerin birbirleriyle iletişim kuramaması'
    ],
    correct: 2,
    explanation: 'İşçinin sadece vida sıkarak ne ürettiğini bilmemesi ve yaratıcılığını kaybetmesi; kendi emeğine, ürününe ve doğasına yabancılaşarak "makine dişlisine" dönüşmesi (ruhsal çöküşü) olarak açıklanır.'
  },
  {
    title: 'Leviathan (Hobbes\'un Canavarı)',
    passage: 'İnsan doğası özünde iyi midir yoksa kötü mü? 17. yüzyıl filozofu Thomas Hobbes\'a göre insan doğası bencil, vahşi ve acımasızdır. Eğer devletsiz, kanunsuz bir "Doğa Durumu"nda yaşasaydık, hayatımız "yalnız, yoksul, iğrenç, vahşi ve kısa" olurdu; herkesin herkese karşı savaştığı bir cehennem yaşanırdı. Hobbes\'a göre insanlar bu kaostan ve ölüm korkusundan kurtulmak için bir araya gelmiş ve kendi özgürlüklerini, haklarını gönüllü olarak "Leviathan" adını verdiği devasa, korkutucu ve mutlak otoriteye (yani Devlete) devretmişlerdir. Uygarlık, sevgiyle kurulan bir kardeşlik değil; insanın birbirini parçalamamak uğruna kendi elleriyle yarattığı devasa bir canavara (devlete) boyun eğerek köleliği (güvenliği) seçtiği o karanlık tavizdir.',
    questionStem: 'Thomas Hobbes\'un "Leviathan" kavramına göre, Devletin (otoritenin) varoluşunun temel psikolojik ve felsefi gerekçesi nedir?',
    options: [
      'İnsanların doğuştan gelen sevgi ve yardımlaşma duygularını organize etmek',
      'Tarım ve ticaretin gelişmesi için gerekli ekonomik altyapıyı sağlamak',
      'İnsanın o vahşi ve acımasız (bencil) doğası gereği ortaya çıkacak "herkesin herkese karşı savaşını (kaosu)" ve ölüm korkusunu bastırmak için, insanların özgürlüklerinden vazgeçerek güvenlik uğruna boyun eğdikleri o mutlak zorunluluk (korku) olmak',
      'Din adamlarının toplumu daha rahat yönetebilmesi için oluşturulmuş dini bir kurum olmak'
    ],
    correct: 2,
    explanation: 'İnsan doğasının vahşi olduğu ve herkesin birbirine savaş açacağı (kaos) düşüncesiyle, insanların ölüm korkusundan kurtulmak (güvenlik) için özgürlüklerini mutlak güce (Devlete/Leviathan\'a) teslim etmesi gerekçesidir.'
  },
  {
    title: 'Akışkan Modernite (Zygmunt Bauman)',
    passage: 'Sosyolog Zygmunt Bauman, günümüz dünyasını "Akışkan (Sıvı) Modernite" olarak tanımlar. Geçmişte her şey "katı"ydı: İnsanlar aynı şirkette 40 yıl çalışır, aynı kişiyle ömür boyu evli kalır, tek bir siyasi görüşe ölene dek inanırdı. Bugün ise her şey sıvıdır. Tüketim kültürü ve dijital hız, insanları kalıcı bağlar kurmaktan, derin ilişkiler yaşamaktan ve uzun vadeli taahhütlerden ölümüne korkar hale getirmiştir. Bugün aşklar bir ekran kaydırmasıyla (Tinder) değişir, meslekler birkaç yılda çöpe atılır, kimlikler anlık modalarla şekillenir. Akışkan modernite insanı özgür kılmış gibi görünse de; aslında hiçbir yere kök salamayan, hiçbir şeyi tam anlamıyla tutamayan ve o sonsuz belirsizlik dalgalarının üzerinde çırpınan kaygılı (anksiyete dolu) ve yorgun bir sörfçüye dönüştürmüştür.',
    questionStem: 'Bauman\'ın "Akışkan Modernite" kavramının modern insanda yarattığı temel psikolojik yıkım nedir?',
    options: [
      'Teknolojinin gelişmesiyle birlikte insanların fiziksel olarak daha hareketsiz (tembel) hale gelmesi',
      'Her şeyin anlık, geçici ve esnek (sıvı) olması nedeniyle; insanın kalıcı, derin ve anlamlı bağlar (kökler) kuramaması, bunun sonucunda sürekli bir güvensizlik, köksüzlük ve kaygı (anksiyete) içinde boğulması',
      'Şehirleşmenin artmasıyla insanların doğadan ve topraktan tamamen kopması',
      'Ekonomik krizlerin insanları sürekli göç etmeye ve ülke değiştirmeye zorlaması'
    ],
    correct: 1,
    explanation: 'Her şeyin sıvı/geçici olmasıyla insanların uzun vadeli bağlar (kökler) kurmaktan korkması; bunun da hiçbir şeyi tutamayan kaygılı ve yorgun (köksüz) bir insan modeli yaratmasıdır.'
  },
  {
    title: 'Yankı Odaları (Algoritmik Hapishane)',
    passage: 'Eğer bir odada sürekli sadece kendi sesinizi duyarsanız, dünyanın sadece sizin doğrularınızdan ibaret olduğunu sanırsınız. Bugün sosyal medyadaki yapay zekâ algoritmaları bizi tam olarak böyle devasa ve dijital bir "Yankı Odası"na (Echo Chamber) hapsetmiştir. Sistem, bizim neyi beğendiğimizi analiz eder ve önümüze sadece bizim inançlarımızı, siyasi görüşlerimizi ve nefretlerimizi onaylayan haberleri/insanları çıkarır. Bizden farklı düşünen herkesi zaman tünelimizden siler. Sonuç olarak her birey, "Benim gibi düşünen milyonlarca insan var, kesinlikle haklıyım!" kibrine kapılır. İnternet, dünyadaki farklı sesleri duyacağımız bir aydınlanma meydanı olmaktan çıkmış; milyonlarca insanın sadece kendi kibrini ve narsisizmini okşadığı o karanlık, fanatik ve izole tımarhanelere bölünmüştür.',
    questionStem: 'Sosyal medyadaki "Yankı Odası" (Echo Chamber) kavramı, toplumsal iletişim ve algı üzerinde nasıl bir tahribat yaratmaktadır?',
    options: [
      'İnternet hızının artmasıyla insanların daha az kitap okumasına neden olması',
      'Algoritmaların sadece bireyin kendi fikirlerini onaylayan içerikleri sunmasıyla; farklı seslerin yok edildiği, karşıt görüşe tahammülün bittiği ve kişinin kendi kibrinde boğulduğu (kutuplaşmış/fanatik) bir illüzyon yaratması',
      'Sanal dolandırıcılık vakalarının sosyal medya platformlarında daha kolay işlenmesi',
      'İnsanların yabancı dil öğrenme isteklerini tamamen ortadan kaldırması'
    ],
    correct: 1,
    explanation: 'Algoritmanın sadece bize katılanları (yankımızı) sunarak farklı sesleri silmesi; karşıt görüşe tahammülü yok eden, kutuplaşmış, narsisistik ve fanatik bir illüzyon yarattığını açıklar.'
  },
  {
    title: 'Paul Dirac ve Antimadde (Matematiğin Kehaneti)',
    passage: '1928 yılında fizikçi Paul Dirac, elektronların davranışını açıklayan bir denklem yazdı. Ancak matematiksel denklem tuhaf bir sonuç verdi; çözümde sadece pozitif (+) değil, bir de negatif (-) ihtimal çıkıyordu. Tıpkı x^2 = 4 denkleminin hem 2 hem de -2 çıkması gibi. Normalde bilim insanları bu negatif (saçma) sonucu çöpe atardı. Ancak Dirac matematiğin kusursuz estetiğine öylesine aşıktı ki, "Eğer matematik bu eksi (negatif) elektronu gösteriyorsa, evrenin bir yerinde mutlaka elektronun zıt ikizi olmalıdır" dedi ve tamamen kâğıt üzerinde "Antimadde"yi keşfetti! Yıllar sonra laboratuvarda "Pozitron" (antimadde) gerçekten de bulundu. Dirac\'ın bu vizyonu, evrenin sadece rastgele bir taş ve gaz yığını olmadığını; bizzat matematiğin o saf, estetik ve şiirsel zihniyle yazılmış kusursuz (ve önceden okunabilen) bir şiir kitabı olduğunu kanıtlar.',
    questionStem: 'Paul Dirac\'ın "Antimadde"yi keşfetme süreci, evren ile matematik arasındaki ilişki hakkında neyi sembolize etmektedir?',
    options: [
      'Fiziksel laboratuvar deneyleri yapılmadan hiçbir teorinin asla kanıtlanamayacağını',
      'Evrenin işleyişinin rastgele olmadığını; matematiğin sadece bir hesaplama aracı değil, doğanın o gizli, estetik ve kusursuz yapısını (henüz görülmemiş gerçekleri bile) önceden fısıldayan (kâhin) bir dil olduğunu',
      'Matematik formüllerinin sadece teorik kaldığını ve pratik dünyada bir karşılığının bulunmadığını',
      'Evrenin sadece pozitif ve gözle görülebilir maddelerden oluştuğu inancını'
    ],
    correct: 1,
    explanation: 'Sadece kâğıt üzerindeki eksi (-) bir denkleme güvenerek evrendeki antimaddeyi bulması; matematiğin evrenin sırlarını önceden gören (kâhin) ve kusursuz bir dil/şiir olduğunu sembolize eder.'
  },
  {
    title: 'LGM-1 (Küçük Yeşil Adamlar)',
    passage: '1967 yılında genç astrofizikçi Jocelyn Bell Burnell, radyoteleskop verilerini incelerken uzayın derinliklerinden gelen inanılmaz derecede kusursuz, ritmik ve saniyesi saniyesine seken bir sinyal (nabız atışı) yakaladı. Doğada hiçbir gökcismi bu kadar yapay ve kusursuz bir metronom gibi sinyal üretemezdi. Bilim dünyası şok içindeydi; bu sinyale "LGM-1" (Little Green Men / Küçük Yeşil Adamlar) adını verdiler, yani uzaylılardan gelen bir mesaj! Ancak aylar sonra gerçeğin çok daha vahşi olduğu anlaşıldı. Bu bir uzaylı değil; ömrünü tamamlayıp kendi içine çöken, bir şehir büyüklüğüne sıkışmış ve saniyede yüzlerce kez dönerek (fener gibi) ışık saçan ölü bir nötron yıldızıydı (Pulsar). LGM-1 efsanesi; evrenin bize mesaj göndermek için uzaylılara ihtiyaç duymadığını, bizzat ölmekte olan yıldızların bile kendi başlarına (insan aklını zorlayan) kusursuz birer kozmik enstrüman olabileceğini gösterir.',
    questionStem: 'LGM-1 sinyalinin "uzaylılar" sanılıp sonradan Pulsar (ölü yıldız) çıkması, evrenin doğası hakkında neyi vurgular?',
    options: [
      'Radyoteleskopların uzay araştırmaları için aslında çok güvenilmez ve hatalı cihazlar olduğunu',
      'Uzaylıların insanlarla iletişime geçmek için çok daha karmaşık ve şifreli diller kullandığını',
      'İnsanın o kusursuz düzeni (metronomu) sadece "zeki bir varlığa" atfetme yanılgısını yıkarak; evrendeki ölü yıldızların (doğanın) bile aklı aşan, kusursuz ve büyüleyici bir fiziksel düzene/ritme sahip olabileceğini',
      'Yıldızların ölürken çıkardıkları seslerin dünyadaki telsiz iletişimlerini tamamen bozduğunu'
    ],
    correct: 2,
    explanation: 'Kusursuz ritmi "uzaylı (zeki) yaptı" sanıp sonra bunun ölü bir yıldız olduğunu anlamak; doğanın ve ölü yıldızların kendi başlarına muazzam ve kusursuz bir düzene (metronoma) sahip olabildiğini vurgular.'
  },
  {
    title: 'Yabancı El Sendromu (Alien Hand Syndrome)',
    passage: 'Nörolojik vakaların en dehşet vericisi "Yabancı El Sendromu"dur. Beynin iki yarımküresini birbirine bağlayan korpus kallozum hasar gördüğünde, hastanın ellerinden biri (genellikle sol eli) "kendi bağımsız iradesini" kazanır. Hasta sağ eliyle gömleğinin düğmelerini iliklerken, "yabancı" sol el gelip gizlice o düğmeleri çözer. Hasta kahve içmek isterken sol el bardağı alıp yere fırlatır. Hatta o asi elin gece hastanın kendi boğazını sıkmaya (onu boğmaya) çalıştığı vakalar vardır. Hasta, o eli durdurmak için kendi elini diğer koluyla zapt etmek zorundadır. Bu kâbus gibi sendrom bize şunu haykırır: Tek, kusursuz ve merkezi bir "BEN (ruh)" yoktur; beynimiz, aslında birbiriyle sürekli kavga eden, her an isyan etmeye meyilli karanlık nöron ordularının (modüllerin) kurduğu çok kırılgan bir koalisyondur.',
    questionStem: 'Yabancı El Sendromu vakası, insan bilinci (benliği) hakkında felsefi ve biyolojik olarak neyi kanıtlamaktadır?',
    options: [
      'Solak insanların sağlak insanlara göre daha fazla psikolojik travma yaşadığını',
      'İnsan uzuvlarının beyinden bağımsız olarak kalp tarafından kontrol edildiğini',
      'Ruh (veya Benlik) dediğimiz o tek/bütünleşik (kutsal) yapının aslında bir illüzyon olduğunu; zihnimizin (bilincimizin) birbiriyle çelişebilen, bağımsız ve isyankâr nörolojik parçaların kurduğu kırılgan bir koalisyon olduğunu',
      'Sinir krizlerinin insanlarda kalıcı felçler ve kasılmalar yarattığını'
    ],
    correct: 2,
    explanation: 'Bir elin diğer ele (ve kişiye) savaş açması; tek bir merkezî "ben/ruh" olmadığını, bilincin farklı (ve isyankâr) beyin modüllerinin birleştiği kırılgan bir koalisyon/illüzyon olduğunu kanıtlar.'
  },
  {
    title: 'Yalanlanabilirlik (Karl Popper ve Bilim)',
    passage: 'Bilimi sözde-bilimden (astroloji veya falcılıktan) ayıran kesin çizgi nedir? 20. yüzyılın en büyük bilim filozoflarından Karl Popper buna "Yalanlanabilirlik" (Falsifiability) kuralı der. Bir astrolog size "Yarın hayatında bir değişiklik olacak" derse bu bilimsel değildir; çünkü bunu yanlışlama (test etme) ihtimaliniz sıfırdır, her şey bir değişiklik sayılır. Oysa Einstein "Işık büyük kütlelerin yanından geçerken bükülür" derse, bu bilimseldir; çünkü teleskopla bakıp bükülmediğini görürseniz Einstein\'ı anında "yalanlayabilirsiniz". Popper\'a göre bir teorinin değeri, ne kadar çok şeyi açıkladığıyla değil; aksine, nelerin olursa o teoriyi "çökerteceğini (yalanlayacağını)" ne kadar cesurca ortaya koyduğuyla ölçülür. Kendi hatasını (yalanlanmasını) göze alamayan, her şeye bir kılıf uyduran hiçbir inanç veya dogma, hakikatin (bilimin) asil sınırlarından içeri giremez.',
    questionStem: 'Karl Popper\'ın "Yalanlanabilirlik" kavramına göre, bir iddiayı veya teoriyi bilimsel kılan asıl (ve paradoksal) özellik nedir?',
    options: [
      'Teorinin binlerce farklı deneyle (sürekli olarak) doğrulanmış ve kanıtlanmış olması',
      'Teorinin, matematiksel formüllerle ifade edilemeyecek kadar karmaşık felsefi bir derinlik taşıması',
      'O iddianın, doğası gereği test edilebilir olması ve hangi koşullar altında "yanlış (çürütülmüş)" kabul edileceğini dürüstçe (ve cesurca) ortaya koyabilme kapasitesi',
      'Teorinin tüm dünyadaki farklı inanç sistemleriyle ve dinlerle uyumlu olması'
    ],
    correct: 2,
    explanation: 'Popper\'a göre bilimsel olmanın şartı sürekli haklı çıkmak değil; ne olursa haksız çıkacağını (çürütülebileceğini/yanlışlanabileceğini) cesurca test edilebilir olarak sunmaktır.'
  },
  {
    title: 'Sivil İtaatsizlik ve Walden (Thoreau)',
    passage: '1846 yılında Amerikalı yazar Henry David Thoreau, köleliği savunan ve adaletsiz bir savaş yürüten Amerikan devletine vergi ödemeyi reddettiği için hapse atıldı. O geceyi hapiste geçirirken o meşhur eserini yazdı: "Sivil İtaatsizlik". Thoreau\'ya göre, bir devletin çıkardığı kanun ahlaksızsa ve bireyin vicdanına ters düşüyorsa, o kanuna itaat etmek bir erdem değil; vahşi bir suça ortak olmaktır (suç ortaklığıdır). Bireyin en yüce görevi kanunlara uymak değil, doğru olana (vicdana) uymaktır. Hapisten çıktıktan sonra ormana (Walden Gölü\'ne) yerleşen Thoreau, modern dünyanın kibrini reddederek doğanın içinde tek başına yaşadı. Thoreau bize şunu fısıldar: Gerçek özgürlük; oy vermek veya alışveriş yapmak değil, gerektiğinde haksız bir sistemin (makinenin) çarklarını durdurmak için kendi hayatını o dişlilerin arasına sıkıştırma cesaretidir.',
    questionStem: 'Henry David Thoreau\'nun "Sivil İtaatsizlik" kavramı, birey ile kanunlar arasındaki ilişkiye nasıl bir ahlaki yaklaşım getirir?',
    options: [
      'Bireyin toplumsal düzeni bozmamak adına her türlü devlet otoritesine saygı göstermesi gerektiği',
      'Kanunların her zaman doğa kurallarına aykırı olduğu için tüm devletlerin tamamen yıkılması gerektiği',
      'Eğer bir kanun adaletsiz ve ahlak dışıysa (vicdana aykırıysa); bireyin o kanuna uymayı reddedip (suça ortak olmayıp), bedelini ödemeyi göze alarak barışçıl ama kesin bir şekilde isyan etmesinin en yüce erdem olduğu',
      'Vergi ödemenin sadece zengin sınıfların bir sorumluluğu olması gerektiği'
    ],
    correct: 2,
    explanation: 'Adaletsiz kanuna uymanın suça ortak olmak olduğunu savunan Thoreau; ahlak dışı kanunu (bedelini göze alarak) reddedip vicdana uymanın (sivil itaatsizliğin) erdem olduğunu belirtir.'
  },
  {
    title: 'Nirvana Yanılgısı (Kusursuzluk Beklentisi)',
    passage: 'Birileri "Emniyet kemerleri trafik kazalarındaki ölümlerin %100\'ünü engellemiyor, o halde emniyet kemeri takmak anlamsızdır" dediğinde, "Nirvana Yanılgısı"na (Nirvana Fallacy) düşmüş olurlar. Mantıktaki bu ölümcül hata, insanların gerçekçi ve "iyi" olan bir çözümü, sırf o çözüm ütopik ve "kusursuz (Nirvana)" olmadığı için tamamen reddetmesi ve çöpe atmasıdır. Siyasette, ekonomide veya aşktaki en büyük felaketler buradan doğar. İnsanoğlu, zihninde yarattığı o ulaşılamaz, lekesiz ve pürüzsüz ideale öylesine saplanır ki; o yolda atılacak işe yarar küçük adımları, iyileşmeleri ve uzlaşmaları "yetersiz" bularak kibre kapılır. Mükemmellik (Nirvana), iyinin en acımasız ve sessiz katilidir.',
    questionStem: 'Nirvana Yanılgısı (Nirvana Fallacy), insan mantığındaki hangi tehlikeli kibri (ve hatayı) ifşa etmektedir?',
    options: [
      'İnsanların doğu felsefelerine inanarak dünya gerçeklerinden tamamen kopması',
      'Kişinin, aklındaki "kusursuz (ütopik)" ideal seçeneğe saplanarak; aslında son derece faydalı, gerçekçi ve durumu "iyileştiren" pratik çözümleri (sırf tam kusursuz değil diye) kibre kapılıp tamamen reddetmesi hatasını',
      'Trafik kazalarından korunmak için sadece teknolojik araçlara güvenmenin yanlışlığı',
      'Zeki insanların her zaman en hızlı çözümleri bulma çabasının strese yol açması'
    ],
    correct: 1,
    explanation: 'Emniyet kemerinin %100 kurtarmadığı için "işe yaramaz" sayılması örneğinde olduğu gibi; "iyi ve faydalı" çözümü, sırf "kusursuz (Nirvana)" değil diye çöpe atma kibrini (hatasını) ifşa eder.'
  },
  {
    title: 'Kolektif Bilinçdışı ve Arketipler (Jung)',
    passage: 'Neden Amazon ormanlarındaki bir yerli ile Çin\'deki bir köylünün, Asya\'daki bir göçebe ile Avrupalı bir asilzadenin anlattığı masallarda her zaman aynı "Bilge Yaşlı Adam", aynı "Kahraman" ve aynı "Büyük Tufan/Ejderha" figürü vardır? Birbirleriyle hiç iletişim kurmamış kültürler bu efsaneleri nasıl aynı şekilde kurgulamıştır? Psikanalist Carl Jung, bunu "Kolektif Bilinçdışı" ile açıklar. Jung\'a göre biz sadece anne babamızdan göz rengimizi (genetiğimizi) miras almayız; aynı zamanda insanlığın milyonlarca yıllık atalarından kalan tüm o ilkel korkuları, efsaneleri ve sembolleri (Arketipleri) zihnimizin karanlık bir okyanusunda miras olarak devralırız. Doğduğumuzda zihnimiz boş bir levha (Tabula Rasa) değildir; o, tüm insanlık tarihinin korkularının ve masallarının görünmez bir mürekkeple önceden yazıldığı kadim ve evrensel bir parşömendir.',
    questionStem: 'Carl Jung\'un "Kolektif Bilinçdışı ve Arketipler" teorisi, farklı kültürlerdeki ortak masalları/mitleri neye bağlamaktadır?',
    options: [
      'Eski çağlarda uzaylıların dünyayı ziyaret edip tüm insanlara aynı hikâyeleri öğretmesine',
      'Ticaret yolları (İpek Yolu) sayesinde tüccarların masalları kıtadan kıtaya taşımasına',
      'İnsan zihninin doğuştan boş bir levha olmadığına; farklı kültürlerin, tüm insanlık tarihinden (atalardan) kalıtımsal olarak miras alınan evrensel ve ortak bir "bilinçaltı (sembol) havuzuna" sahip olmasına',
      'İklim şartlarının dünyanın her yerinde aynı korkuları tetikleyen fiziksel olaylar yaratmasına'
    ],
    correct: 2,
    explanation: 'Farklı kıtalarda aynı ejderha/tufan figürlerinin çıkması; zihnimizin boş levha olmadığını, tüm insanlığın ortak atalarından devralınan evrensel "kolektif bilinçaltı (arketipler) havuzuyla" açıklanır.'
  },
  {
    title: 'Epimenides Paradoksu (Giritli Yalancı)',
    passage: 'MÖ 6. yüzyılda Giritli bir filozof ve rahip olan Epimenides, insan mantığını felç edecek o meşhur ve basit cümleyi kurdu: "Bütün Giritliler yalancıdır." Eğer bu cümle doğruysa, Epimenides bir Giritli olduğu için yalan söylüyor olmalıdır; yani Giritliler doğru söylüyordur. Ama eğer Giritliler doğru söylüyorsa, o zaman Epimenides\'in söylediği "Giritliler yalancıdır" cümlesi doğru olmalıdır ki bu da onun yalan söylediği anlamına gelir! Mantığın bir yılan gibi kendi kuyruğunu yuttuğu, bilgisayarları çökerten ve felsefeyi çıkmaza sokan bu "Yalancı Paradoksu", insan dilinin (ve kurguladığımız mantık sistemlerinin) mutlak ve kusursuz olmadığını; bazen zihnimizin, kendi ürettiği kelimelerin ördüğü o dairesel ve çıkışsız labirentte çaresizce kendi kendini zehirlediğini kanıtlar.',
    questionStem: 'Epimenides\'in "Bütün Giritliler yalancıdır" cümlesinin felsefedeki (paradoks) asıl gücü nereden gelmektedir?',
    options: [
      'Girit halkının antik çağda ahlaki olarak tamamen çürümüş ve sahtekâr bir toplum olduğunu kanıtlamasından',
      'Cümlenin "doğru" veya "yanlış" olma durumunun, birbirini çürüterek içinden çıkılmaz bir mantıksal (kendi kuyruğunu yiyen dairesel) bir döngüye ve sistem çöküşüne yol açmasından',
      'Dönemin siyasi otoritelerini ve yargıçlarını korkmadan eleştirebilen tek edebi metin olmasından',
      'Yalan söylemenin bazı felsefi ekollerde büyük bir erdem olarak kabul edilmesini sağlamasından'
    ],
    correct: 1,
    explanation: 'Cümle doğruysa yanlış, yanlışsa doğru çıkmaktadır. Bu paradoks; insan dilinin ve mantığının, kendi kendiyle çelişen (kuyruğunu yiyen) çıkışsız bir döngüye (sistem çöküşüne) girmesini sembolize eder.'
  },
  {
    title: 'P.T. Barnum ve Gösteri Toplumu',
    passage: '19. yüzyılda modern sirklerin, reklamcılığın ve "gösteri dünyasının" kurucusu Phineas Taylor Barnum\'un o efsanevi felsefesi tek bir cümlede yatar: "Her dakika bir enayi doğar." Barnum; sahte denizkızları, cüceler veya filleri pazarlarken insanlara gerçek bir şey satmıyordu. O, insanların monoton hayatlarından kaçma arzusunu, meraklarını ve "kandırılmaya duydukları o gizli şehveti" satıyordu. Müzeye "Büyük Çıkış Bu Tarafta" yazarak, gösteriyi bitirenleri bile aslında binadan kovan o dâhiyane sahtekâr, modern kapitalizmin babasıdır. Barnum etkisi gösterir ki; kitleler gerçeğin o sıkıcı griliğindense, parlak, şatafatlı ve gürültülü bir yalanın parçası (ve müşterisi) olmak için paralarını (ve zihinlerini) seve seve o devasa şovmenlere teslim ederler.',
    questionStem: 'P.T. Barnum\'un sirk/gösteri felsefesi üzerinden yazar, modern toplumun hangi hastalıklı eğilimini (zaafını) eleştirmektedir?',
    options: [
      'Hayvanların sirklerde vahşi koşullarda çalıştırılarak fiziksel eziyete uğratılmasını',
      'İnsanların sıradan ve sıkıcı gerçeklikler yerine, kandırıldıklarını bilseler bile parlak, şatafatlı ve eğlenceli yalanlara (illüzyonlara) para ödeyerek gönüllü bir şekilde boyun eğme (tüketim) zaafını',
      'Sirk ve tiyatro sanatçılarının emeklerinin karşılığını hiçbir zaman tam olarak alamamasını',
      'Amerika\'daki eğitim seviyesinin düşüklüğü nedeniyle halkın okuma alışkanlığını yitirmesini'
    ],
    correct: 1,
    explanation: 'Barnum\'un sahte denizkızları satmasına rağmen insanların buna isteyerek gitmesi; toplumun sıkıcı gerçek yerine parlak ve şatafatlı yalanlara (kandırılmaya) gönüllü olarak para ödeme/tüketme zaafını (gösteri toplumunu) eleştirir.'
  },
  {
    title: 'Akış Teorisi (Flow) ve Zamanın Durması',
    passage: 'Zamanın tamamen silindiğini, açlık ve yorgunluk hissetmeden bir işe kendinizi o kadar kaptırdınız mı ki, sanki evrenle bir bütün olduğunuzu hissettiniz? Psikolog Mihaly Csikszentmihalyi, ressamların, cerrahların veya müzisyenlerin yaşadığı bu zirve noktasına "Akış" (Flow) adını verir. Akış hali, insanın yetenekleriyle (kapasitesiyle), yaptığı işin zorluğunun (meydan okumanın) milimetrik olarak eşleştiği o kusursuz denge anında doğar. İş çok kolaysa sıkılırız, çok zorsa kaygı duyarız. Ancak ikisi tam dengelendiğinde ego buharlaşır. Gerçek mutluluk, deniz kenarında tembelce yatarak veya tüketerek elde edilen pasif bir his değildir; aksine, potansiyelimizi sonuna kadar zorlayan, benliğimizi unutturan ve ruhumuzu yoran anlamlı bir eylemin (akışın) ta kendisidir.',
    questionStem: 'Csikszentmihalyi\'nin "Akış (Flow)" teorisine göre, insanın gerçek mutluluğa ve "zamanın durduğu o zirve ana" ulaşmasının temel şartı nedir?',
    options: [
      'Fiziksel yorgunluktan tamamen uzaklaşıp, tatil merkezlerinde bedensel dinlenmeye (pasifliğe) çekilmesi',
      'Bireyin sahip olduğu yetenek düzeyi ile, uğraştığı işin/problemin zorluk derecesi (meydan okuması) arasındaki o kusursuz dengeyi yakalayarak; egosunu ve zamanı unuttuğu o anlamlı (aktif) eylemin içine girmesi',
      'Para kazanma hırsından vazgeçip sadece sanatsal ve estetik hobilerle ilgilenmeye başlaması',
      'Geçmişteki anıları tamamen zihninden silerek sadece geleceği planlama stratejisi gütmesi'
    ],
    correct: 1,
    explanation: 'Mutluluğun pasif dinlenme değil; yetenek ile işin zorluğunun (meydan okumanın) tam dengelendiği (egonun/zamanın silindiği) aktif ve anlamlı eylem (Akış) olduğu açıkça vurgulanmıştır.'
  },
  {
    title: 'Tiresias\'ın Körlüğü: Karanlıktaki Kâhin',
    passage: 'Yunan mitolojisinde kâhin Tiresias, bir tartışma sırasında tanrıça Hera\'yı (veya başka bir anlatıya göre Athena\'yı) kızdırdığı için "fiziksel körlükle" cezalandırılır. Ancak Zeus ona acır ve fiziksel gözlerini kaybetmesine karşılık, ona evrenin en büyük hediyesini (geleceği görme yeteneğini/kehaneti) bahşeder. Oedipus\'tan Antigone\'ye kadar hiçbir efsanevi kral, gerçekleri bu kör yaşlı adam kadar net göremez. Tiresias mitinin anlattığı o muazzam felsefi ironi şudur: İnsan, fiziksel (dünyevi) gözleriyle o dışarının parıltılı ama sahte illüzyonuna öylesine kanmıştır ki; asıl hakikati (geleceği ve özü) görebilmesi için önce o dünyevi gözlerini kaybetmesi (karanlığa gömülmesi) ve dış dünyaya tamamen kör (sağır) olması gerekir. Gerçek aydınlanma, dışarının ışığıyla değil; içerinin kör edici zifiri karanlığında başlar.',
    questionStem: 'Mitolojik kâhin Tiresias\'ın fiziksel olarak kör olup geleceği görme yeteneği kazanması, hakikat arayışı hakkında nasıl bir "felsefi (ironik) metafor" sunar?',
    options: [
      'Tanrıların insanlara verdikleri cezaların aslında her zaman gizli birer ödül (lütuf) taşıdığı düşüncesini',
      'Fiziksel dünyayı (dışarıyı) algılayan duyuların (gözlerin), aslında insanı sığ illüzyonlara hapsettiğini; mutlak ve derin hakikati (özü) görebilmek için dünyevi olan dış gerçekliğe kör olmak (içe dönmek) gerektiği gerçeğini',
      'Görme engelli bireylerin işitme duyularının çok daha fazla geliştiği yönündeki biyolojik tezi',
      'Antik dönemde kralların ve devlet adamlarının din adamlarına (kâhinlere) her zaman boyun eğdiğini'
    ],
    correct: 1,
    explanation: 'Gözü körleştiğinde hakikati/geleceği görmesi; dış dünyanın (gözlerin) bir illüzyon olduğu, asıl (derin) hakikatin dış dünyaya karşı kör olup içsel aydınlanmayla (karanlıkta) bulunacağı metaforudur.'
  }
];

export const felsefeParagrafSorulari25: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_25.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_25[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe25-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_26 = [
  {
    title: 'Gorgias\'ın Hiçliği (Nihilizm)',
    passage: 'Antik Yunan\'ın nihilist (sofist) filozofu Gorgias, insan aklının kibrini tek bir mantıksal balyozla paramparça eder. Onun meşhur üçlü argümanı şöyledir: "Birincisi; hiçbir şey yoktur. İkincisi; bir şey var olsa bile, onu bilemeyiz. Üçüncüsü; onu bilsek bile, dilin yetersizliği yüzünden onu bir başkasına asla aktaramayız." Gorgias\'ın bu radikal felsefesi, evreni çözdüğünü sanan bilime ve iletişime atılmış karanlık bir zihinsel düğümdür. Ona göre, zihnimizin içindeki düşünceler ile dışarıdaki gerçeklik (ve başkalarının zihni) arasında asla aşılamayacak (kara delik gibi) bir uçurum vardır. Gerçeklik dediğimiz şey, herkesin kendi zihninin zindanında oynattığı, dışarıya asla tam olarak aktarılamayan yapayalnız ve sağır edici bir sessizlikten ibarettir.',
    questionStem: 'Gorgias\'ın bu felsefesi (Nihilizm), "iletişim ve gerçeklik" bağlamında insana dair hangi sarsıcı durumu savunur?',
    options: [
      'Gelecekte teknolojinin gelişmesiyle insanların telepati yoluyla anlaşabileceğini',
      'İnsanların sadece aynı dili konuştuklarında duygusal olarak bağ kurabildiklerini',
      'İnsan zihni, dil (kelimeler) ve dış dünya arasında asla aşılamayacak mutlak bir uçurum olduğunu; bu yüzden "ortak ve aktarılabilir" bir gerçekliğin imkânsız (yapayalnız bir sessizlik) olduğunu',
      'Felsefenin sadece kelime oyunlarından ibaret bir sanat dalı olduğunu'
    ],
    correct: 2,
    explanation: 'Hiçbir şeyin bilinemeyeceği ve bilinse bile dille aktarılamayacağı argümanı; zihin, dil ve dış dünya arasında aşılamaz bir uçurum (aktarılamayan yalnız bir gerçeklik) olduğunu savunur.'
  },
  {
    title: 'Fare Kralı (Rat King)',
    passage: 'Orta Çağ Avrupa\'sında insanların en çok korktuğu biyolojik anomalilerden biri "Fare Kralı" (Rat King) vakasıydı. Bu olay, dar ve pis bir alanda yaşayan onlarca farenin kuyruklarının kan, dışkı ve kirle birbirine kördüğüm (çözülemez) bir şekilde bağlanmasıdır. Kuyrukları düğümlenen bu fareler artık tek bir devasa, çok başlı canavar gibi hareket etmek zorunda kalırlar; bir fare sağa gitmek isterken diğeri sola çeker, sonunda hepsi açlıktan veya stresten o düğümün içinde can verir. "Fare Kralı", biyolojik bir iğrençlikten öte, toksik (zehirli) insan ilişkilerinin ve hastalıklı toplumların en kusursuz metaforudur: İnsanlar kendi bireyselliklerinden ve özgürlüklerinden vazgeçip, korku veya çıkar uğruna başkalarına körü körüne bağlandıklarında; ortaya çıkan şey bir dayanışma değil, herkesin birbirini dibe çektiği çaresiz, felç olmuş ve çürüyen (düğümlenmiş) devasa bir canavardır.',
    questionStem: 'Fare Kralı (Rat King) biyolojik anomalisi, sosyal ve psikolojik bağlamda yazar tarafından neyin metaforu olarak kullanılmıştır?',
    options: [
      'Farelerin ve kemirgenlerin ne kadar zeki bir toplumsal hiyerarşiye sahip olduğunun',
      'İnsanların (ve toplumların) özgürlüklerini kaybedip, korku/çıkar uğruna birbirlerine hastalıklı (toksik) bir şekilde bağlanmalarının (kördüğüm olmalarının) yarattığı o felç edici ve çürütücü yıkımın',
      'Orta Çağ Avrupa\'sındaki veba salgınlarının asıl nedeninin şehirlerdeki altyapı eksikliği olduğunun',
      'Farklı fikirlerin bir araya gelmesinin her zaman daha güçlü bir siyasi irade (demokrasi) yarattığının'
    ],
    correct: 1,
    explanation: 'Kuyrukları bağlanan farelerin birbirini çekip ölmesi; insanların bireyselliği bırakıp hastalıklı/toksik bir şekilde birbirine bağlanmasının yarattığı felç edici toplumsal çürümeyi sembolize eder.'
  },
  {
    title: 'Diyojen\'in Tüysüz Tavuğu',
    passage: 'Platon, akademisinde öğrencilerine "İnsan nedir?" sorusunu sorar ve uzun tartışmaların ardından o meşhur, kusursuz ve kibirli tanımını yapar: "İnsan, tüysüz ve iki ayaklı bir hayvandır." Bu tanım büyük alkış alır. Ancak ertesi gün, fıçıda yaşayan anarşist filozof Diyojen, elinde canlı canlı tüylerini yolduğu kanlı bir horozla Platon\'un akademisinin kapısını tekmeyle açar ve o yolunmuş hayvanı sınıfın ortasına fırlatarak haykırır: "İşte size Platon\'un insanı!" Platon o günden sonra tanımına "ve geniş tırnaklı" ibaresini eklemek zorunda kalır. Diyojen\'in o tüysüz tavuğu; akademinin ve bilimin, hayatın o terleyen, acı çeken, kaotik ve kanlı gerçekliğini sadece soğuk, akademik ve sığ kelimelere (kavramlara) hapsederek onu nasıl gülünçleştirdiğinin ve özünden kopardığının yüzümüze çarpılan en felsefi tokadıdır.',
    questionStem: 'Diyojen\'in "Tüysüz Tavuk" eylemi ile Platon\'un felsefesinde eleştirdiği asıl tutum (zaaf) nedir?',
    options: [
      'Antik Yunan akademilerinde hayvan haklarına hiçbir şekilde saygı gösterilmemesi',
      'Hayatın canlı, kaotik ve karmaşık (derin) gerçekliğinin; akademi tarafından sadece sığ, soğuk ve kibirli kelimelere (kavramsal tanımlara) indirgenerek (basitleştirilerek) özünden koparılması',
      'Platon\'un aslında çok zayıf bir biyoloji ve anatomi bilgisine sahip olması',
      'Filozofların toplum içine çıkmaktan korkarak sadece kapalı akademilerde tartışmalar yapması'
    ],
    correct: 1,
    explanation: 'Diyojen\'in kanlı tavuğu fırlatması; insanın (ve hayatın) o kaotik ve canlı gerçekliğinin, akademinin sığ ve soğuk kelime tanımlarına (tüysüz iki ayaklı) hapsedilemeyeceği (indirgenemeyeceği) eleştirisidir.'
  },
  {
    title: 'Yunus Kompleksi (Jonah Complex)',
    passage: 'Psikolog Abraham Maslow, insanların neden potansiyellerinin zirvesine ulaşmaktan kaçtığını açıklamak için "Yunus Kompleksi" kavramını ortaya atar. Çoğu insan başarısızlıktan veya karanlıktan korktuğunu söyler; oysa Maslow\'a göre asıl korktuğumuz şey kendi ışığımız, kendi büyüklüğümüz ve kendi dehamızdır. İncil\'deki Yunus peygamberin Tanrı\'nın verdiği büyük bir görevden korkup kaçarak bir balinanın midesine saklanması gibi; biz de içimizdeki o sarsıcı yeteneği fark ettiğimizde, onun getireceği devasa sorumluluktan, beklentilerden ve o yalnız zirveden dehşete düşeriz. Yunus Kompleksi; insanın sıradanlığın o güvenli ve sıcak çamurunda kalabilmek uğruna, kendi içindeki o muazzam gücü ve tanrısallığı (aydınlanmayı) bilerek ve isteyerek boğması (kendi potansiyelinden kaçması) trajedisidir.',
    questionStem: 'Maslow\'un "Yunus Kompleksi" kavramı, insan başarısızlığının kökenini hangi paradoksal (şaşırtıcı) korkuya bağlar?',
    options: [
      'Toplumun her zaman başarılı insanları kıskanarak onları dışladığına (linç ettiğine) duyulan korkuya',
      'Kişinin başarısızlıktan değil; bizzat kendi içindeki "yüce potansiyelden (büyüklükten)", zirvenin getireceği devasa sorumluluktan ve ışıktan dehşete düşerek bilerek sıradanlığa (konfora) kaçmasına',
      'İnsanın sadece maddi kazanç elde edemeyeceği işlerde çalışmaktan duyduğu ekonomik korkuya',
      'Büyük deniz hayvanlarına ve boğulmaya karşı duyulan genetik fobiye'
    ],
    correct: 1,
    explanation: 'İnsanın başarısızlıktan değil, kendi içindeki büyüklükten (potansiyelinden) ve onun getireceği sorumluluktan korkarak (Yunus gibi) sıradanlığa/konfora kaçması anlatılmaktadır.'
  },
  {
    title: 'Apofeni (Apophenia)',
    passage: 'Bulutlara bakıp at şekli görmek veya yanmış bir tost ekmeğinin üzerinde kutsal bir figürün yüzünü seçmek sadece eğlenceli bir tesadüf müdür? Psikolojide buna "Apofeni" denir; yani insan beyninin, birbirleriyle hiçbir bağı olmayan rastgele, anlamsız ve kaotik veriler arasında "zorla" mantıklı bir bağ (veya gizli bir mesaj) kurma eğilimidir. Komplo teorilerinin ve batıl inançların temelinde bu yatar. İnsan zihni, evrenin kör, sağır ve tamamen rastgele bir kaos (belirsizlik) olduğu gerçeğiyle baş edemeyecek kadar kırılgan ve korkaktır. Bu yüzden, korkunç (anlamsız) bir boşluğa bakmaktansa; o boşluğu kendi uydurduğu sahte desenlerle, gizli düşmanlarla veya mistik mesajlarla (sahte bir düzenle) doldurmayı tercih eder. Apofeni, zihnimizin kaos korkusuna karşı ürettiği en yetenekli yalandır.',
    questionStem: 'Apofeni (Apophenia) olgusu, insan beyninin hangi varoluşsal korkusunu bastırmak için ürettiği bir savunma (yalan) mekanizmasıdır?',
    options: [
      'Karanlık ortamlarda yalnız kalma ve tehlikeyle karşılaşma korkusu',
      'Diğer insanlar tarafından sevilmeme ve toplumdan dışlanma korkusu',
      'Evrenin anlamsız, rastgele ve sağır edici bir "kaos (belirsizlik)" olduğu gerçeğiyle yüzleşme korkusu; bu yüzden zihnin rastgelelikte bile zorla "sahte bir anlam (düzen)" uydurması',
      'Uzaylıların ve farklı boyutlardaki varlıkların insanları gizlice izlediği korkusu'
    ],
    correct: 2,
    explanation: 'Beynin rastgele verilerde zorla anlam bulması (Apofeni); evrenin anlamsız ve rastgele bir kaos olduğu gerçeğiyle baş edemeyip o boşluğu sahte bir düzenle/anlamla doldurma refleksidir.'
  },
  {
    title: 'Goodhart Yasası',
    passage: 'Ekonomi ve yönetim biliminde "Goodhart Yasası" diye acımasız bir kural vardır: "Bir ölçüm (veya gösterge) hedefe dönüştüğünde, artık iyi bir ölçüm olmaktan çıkar." Örneğin, bir çağrı merkezinde işçilerin performansını "cevaplanan çağrı sayısı" ile ölçmeye başlarsanız; çalışanlar size sadece sayıyı vermek için müşterilerin suratına telefonu kapatmaya, işi aceleye getirmeye ve sahtekârlık yapmaya başlarlar. Sayı tavan yapar ama hizmetin kalitesi (ve şirketin kendisi) tamamen çöker. Goodhart Yasası, modern kapitalizmin ve eğitim sisteminin en büyük yanılgısını yüzümüze çarpar: İnsanoğlunun performansını (veya ruhunu) sadece rakamlara, kotalara ve test skorlarına indirgediğiniz an; o sistem gerçeği üretmeyi bırakır, sadece o rakamları manipüle eden (oyunu hackleyen) ahlaksız ve içi boş bir kurguya dönüşür.',
    questionStem: 'Goodhart Yasası\'nın temel felsefesine göre, sistemlerde (eğitimde veya şirketlerde) sadece "rakamsal hedeflere" odaklanılmasının asıl yıkıcı sonucu nedir?',
    options: [
      'Matematiksel analizlerin her zaman çok yavaş ve maliyetli olması',
      'Rakamın kendisi bir hedefe dönüştüğünde; insanların o rakamı tutturmak uğruna işin "özünü (kalitesini)" ve ahlakını yok ederek sistemi manipüle etmesi (oyunu hacklemesi)',
      'Çalışanların maaşlarını artırmak için sürekli olarak grev ve protesto başlatması',
      'Sadece sayılara odaklanmanın bilgisayar sistemlerinde teknik çöküşlere neden olması'
    ],
    correct: 1,
    explanation: 'Çağrı merkezi örneğindeki gibi, rakam hedefe dönüştüğünde insanların kaliteyi/özü bırakıp sadece o sayıyı yakalamak için sistemi sahtekârlıkla manipüle etmesi (hacklemesi) asıl yıkıcı sonuçtur.'
  },
  {
    title: 'Tetris Etkisi',
    passage: 'Günlerce aralıksız Tetris oynadıktan sonra gözünüzü kapattığınızda, hala gökyüzünden inen renkli blokların boşluklara yerleştiğini görürsünüz. Süpermarket raflarına veya bina pencerelerine baktığınızda bile o şekilleri zihninizde birbirine uydurmaya (döndürmeye) çalışırsınız. Psikolojide buna "Tetris Etkisi" denir. Beyin, uzun süre aynı dar ve tekrarlayan eyleme (işe) maruz kaldığında, dış dünyayı algılama biçimi (kodlaması) o eylemin dar kalıplarına göre yeniden yazılır. Tetris Etkisi sadece bir oyun yanılsaması değildir; modern insanın trajedisidir. Sabahtan akşama kadar borsa ekranına bakan biri veya sosyal medyada kaydırma yapan bir zihin; hayata baktığında artık aşkı, doğayı veya güzelliği göremez; evreni sadece o gün boyu yaptığı tekdüze, robotik ve dar (blok) mantığıyla algılayan kör bir algoritmaya dönüşür.',
    questionStem: 'Tetris Etkisi kavramı, modern insanın günlük yaşam alışkanlıklarının zihni üzerindeki hangi korkutucu (kalıcı) etkisini tanımlar?',
    options: [
      'Görsel hafızası güçlü olan insanların matematiksel hesaplamaları çok daha hızlı yapabilmesi',
      'Uzun süre aynı tekdüze (tekrarlayan) eyleme veya mesleğe maruz kalan insan beyninin; evreni ve tüm hayatı artık sadece o "dar ve mekanik" kalıplar (algoritmalar) üzerinden algılayarak gerçek körlüğe (duygusuzluğa) sürüklenmesi',
      'Bilgisayar oyunlarının çocuklarda şiddet eğilimini genetik olarak tetiklemesi',
      'Ekrana çok fazla bakmanın göz sağlığını bozarak halüsinasyonlara (katarakt) neden olması'
    ],
    correct: 1,
    explanation: 'Sürekli oynanan oyunun veya yapılan işin, beynin tüm dünyayı o dar/mekanik (blok) mantığıyla algılamasına ve hayatın gerçek güzelliğini göremeyecek bir körlüğe yol açtığı vurgulanır.'
  },
  {
    title: 'Othello Sendromu',
    passage: 'Shakespeare\'in ölümsüz eseri Othello\'da, kahramanımız Othello, dürüst ve masum eşi Desdemona\'nın kendisini aldattığına dair (ortada hiçbir somut delil yokken, sadece Iago\'nun fısıltılarıyla) korkunç bir paranoyaya kapılır. Şüphe o kadar büyür ki, Othello sevdiği kadını kendi elleriyle boğarak öldürür. Psikiyatride buna "Othello Sendromu" (Patolojik Kıskançlık) denir. Bu hastalık, sevginin veya aşkın bir göstergesi değildir; aksine, kişinin kendi içindeki yetersizlik kompleksinin, güvensizliğinin ve "sahip olma (mülkiyet)" hırsının kontrolden çıkarak karşı tarafı bir kurbana dönüştürmesidir. Othello Sendromu, sevginin sınırlarının aşıldığında nasıl dünyanın en kör, en sağır ve en kanlı zindanına dönüştüğünün; insanın aklını yitirmesi için dışarıdan bir düşmana değil, sadece kendi zihnindeki o fısıldayan şüpheye (zehre) ihtiyacı olduğunun ispatıdır.',
    questionStem: 'Othello Sendromu (Patolojik Kıskançlık), yazar tarafından sevgiyle ilgili nasıl bir felsefi/psikolojik çerçevede değerlendirilmiştir?',
    options: [
      'Kıskançlığın sadece asilzadeler ve zenginler arasında görülen kalıtsal bir zihinsel hastalık olduğu',
      'Gerçek sevginin her zaman şüphe ve acı ile sınanması gerektiği (romantizmin kuralı olduğu)',
      'Aşırı şüphenin ve kıskançlığın bir "sevgi" göstergesi değil; tamamen kişinin kendi güvensizliğinden, yetersizliğinden ve hastalıklı bir "mülkiyet (sahip olma)" hırsından doğan, sevdiği insanı kurbana dönüştüren kör (zehirli) bir zindan olduğu',
      'Aldatılma korkusunun modern çağda boşanmaların asıl nedeni olduğu'
    ],
    correct: 2,
    explanation: 'Şüphenin sevgi değil, kişinin kendi yetersizliğinden ve "sahip olma/mülkiyet" hırsından doğan, aşkı kanlı bir zindana çeviren hastalıklı bir zehir olduğu açıkça ifade edilmiştir.'
  },
  {
    title: 'Carl Sagan ve Garajımdaki Ejderha',
    passage: 'Astrofizikçi Carl Sagan, bilimsel düşünceyi anlatmak için şu efsanevi örneği verir: "Garajımda ateş püskürten bir ejderha var!" Arkadaşınız ejderhayı görmek ister, ancak siz "O görünmez bir ejderha" dersiniz. Arkadaşınız "O zaman yere un dökelim, ayak izlerini görelim" der; siz "O havada süzülüyor" dersiniz. "O zaman ateşini ölçelim" dediğinde, "Ateşi ısı yaymıyor" diye cevap verirsiniz. Arkadaşınızın sunduğu tüm bilimsel testleri, yeni bir bahaneyle (kılıfla) geçersiz kılarsınız. Sagan o öldürücü soruyu sorar: "Görünmez olan, dokunulamayan, ısısı ölçülemeyen ve hiçbir şekilde test edilemeyen bir ejderhanın var olması ile, o ejderhanın aslında hiç var olmaması arasında ne fark vardır?" Bu hikâye, test edilemeyen (yanlışlanamayan) ve her şeye bir kılıf uyduran dogma ve inançların, hakikat karşısında ne kadar anlamsız, boş ve değersiz (garajdaki görünmez bir ejderha gibi) olduğunu ispatlar.',
    questionStem: 'Carl Sagan\'ın "Garajımdaki Ejderha" argümanı, bilimin hangi temel kuralına (ve dogmalara karşı duruşuna) dikkat çekmektedir?',
    options: [
      'Hayvanların (ve mitolojik canlıların) ısı ve kütle ölçümlerinin laboratuvar ortamında yapılamayacağına',
      'Bir iddianın "bilimsel veya anlamlı (gerçek)" kabul edilebilmesi için, onun fiziki (ampirik) olarak test edilebilir ve gözlemlenebilir olması gerektiğine; test edilemeyen ve sürekli bahane üreten inançların aslında "yok hükmünde" olduğuna',
      'Mitolojik hikâyelerin insan psikolojisine zarar vererek halüsinasyonları artırdığına',
      'Astrofizikçilerin masallardan ilham alarak uzay araştırmaları yapması gerektiğine'
    ],
    correct: 1,
    explanation: 'Test edilemeyen, görünmeyen ve ısısı ölçülemeyen bir şeyin "var olması ile yok olması arasında fark yoktur" sorusu; bilimin temelinin test edilebilirlik (ampirik veri) olduğunu, test edilemeyen dogmaların anlamsız olduğunu kanıtlar.'
  },
  {
    title: 'Wigner\'in Arkadaşı (Kuantum Öznel Gerçeklik)',
    passage: 'Kuantum fiziğinin zihinleri paramparça eden "Wigner\'in Arkadaşı" düşünce deneyi şöyledir: Wigner\'in arkadaşı laboratuvarda kapalı bir odadadır ve bir fotonun ölçümünü yapar. Arkadaş için foton (örneğin) "sağ" duruma çökmüştür ve gerçeklik belirlenmiştir. Ancak odanın dışındaki Wigner için durum farklıdır; o henüz odanın kapısını açıp arkadaşına sonucu sormadığı için, kuantum kurallarına göre laboratuvarın içi (foton ve arkadaşı dahil) hala "hem sağ hem sol" (süperpozisyon) durumundadır! İçerideki için netleşen gerçeklik, dışarıdaki için hala bir belirsizliktir. Bu deney, bilim tarihindeki en büyük depremdir: Evrende herkes için geçerli olan o "tek, mutlak ve objektif bir gerçeklik (tanrısal bir göz)" yoktur; gerçeklik dediğimiz şey, onu deneyimleyen her bir gözlemcinin (bilincin) kendi zihninde kurduğu, tamamen "öznel, kişiye özel ve eşsiz" bir illüzyondur.',
    questionStem: 'Wigner\'in Arkadaşı deneyi, fiziksel gerçekliğin (evrenin) yapısı hakkında hangi sarsıcı felsefi iddiayı öne sürmektedir?',
    options: [
      'Işık parçacıklarının (fotonların) laboratuvar ortamında her zaman yanlış ölçüldüğünü',
      'Kuantum dünyasındaki parçacıkların ışık hızından daha hızlı hareket edebildiğini',
      'Evrende herkesin üzerinde uzlaşabileceği (mutlak/objektif) tek bir gerçekliğin var olmadığını; "gerçeklik" dediğimiz olgunun, onu deneyimleyen (gözlemleyen) kişinin bilincine bağlı, tamamen "öznel (kişisel)" bir kurgu olduğunu',
      'Kapalı odalardaki basıncın kuantum deneylerini her zaman sabote ettiğini'
    ],
    correct: 2,
    explanation: 'İçerideki kişi için netleşen durumun dışarıdaki (gözlemlemeyen) kişi için hala belirsiz olması; evrensel, mutlak (objektif) bir gerçekliğin olmadığını, gerçeğin gözlemciye/bilince bağlı öznel bir kurgu olduğunu iddia eder.'
  },
  {
    title: 'Bounty İsyanı (Cennet ve Cehennem Çatışması)',
    passage: '1789 yılında İngiliz kraliyet gemisi Bounty, Tahiti\'den ayrılırken tarihin en ünlü isyanına sahne oldu. Kaptan Bligh\'in uyguladığı o katı, kırbaçlı ve acımasız İngiliz denizcilik (medeniyet) disiplininden bunalan mürettebat, Tahiti\'deki o sıcak, özgür ve kuralsız cennet hayatının (arzuların) cazibesine dayanamadı. Kaptanı küçük bir kayığa bindirip denizin ortasında ölüme terk ettiler ve Tahiti\'ye (sonra Pitcairn adasına) döndüler. Ancak isyancıların o kuralsız "özgürlük ve haz" cenneti kısa sürede kanlı bir cehenneme dönüştü; kuralsızlık, sarhoşluk ve kıskançlık yüzünden hepsi birbirini katletti. Bounty İsyanı basit bir denizcilik vakası değildir; insanın ruhunu sıkan o demir disiplin (medeniyet) ile; tüm kuralların yok olduğu o mutlak özgürlüğün (hayvani hazların) kendi kendini yok eden vahşi doğası arasındaki o felsefi (ve ebedi) çatışmanın kanlı destanıdır.',
    questionStem: 'Bounty İsyanı\'nın sonunun (adaya kaçan denizcilerin) kanlı bir cehennemle bitmesi, medeniyet ve insan doğası üzerine neyi sembolize etmektedir?',
    options: [
      'Denizcilerin gemi kullanmayı bildikleri halde tarım yapmayı bilmemelerinin getirdiği açlığı',
      'İngiliz kraliyet donanmasının o dönemdeki zayıf eğitim sisteminin neden olduğu başarısızlıkları',
      'Baskıcı disiplinden (medeniyetten) kaçıp mutlak kuralsızlığa (hazzın özgürlüğüne) sığınan insan doğasının; kurallar (disiplin) olmadan kendi kendini yiyip bitiren vahşi ve hayvani bir kaosa (cehenneme) sürüklenmeye ne kadar yatkın olduğu gerçeğini',
      'Tropikal adaların havasının insan psikolojisini bozarak deliliğe neden olduğunu'
    ],
    correct: 2,
    explanation: 'Katı disiplinden (medeniyetten) kaçıp kuralsız özgürlüğe (Tahiti\'ye) giden denizcilerin birbirini öldürmesi; medeniyet/kurallar olmadan mutlak özgürlüğün (hazların) insanı vahşi bir kaosa ve yok oluşa sürüklediğini sembolize eder.'
  },
  {
    title: 'Donner Kampı Trajedisi (Kestirme Yolun Laneti)',
    passage: '1846 yılında Amerika\'nın batısına, o vaat edilen yeni ve zengin topraklara (Kaliforniya\'ya) ulaşmak için yola çıkan Donner Kampı (öncüleri), yolu kısaltmak için haritada gördükleri "Hastings Kestirmesi" adlı denenmemiş bir rotaya saptılar. Bu kısa yol (açgözlülükleri) onların sonunu hazırladı. Sierra Nevada dağlarında kışın dondurucu kar fırtınasına yakalanıp aylarca mahsur kaldılar. Yemekleri bittiğinde, o saygın, medeni ve dindar Amerikan aileleri hayatta kalabilmek için çocuklarının ve ölen akrabalarının cesetlerini parçalayarak çiğ çiğ (yamyamlık) yediler. Donner Kampı trajedisi bir doğa felaketi değildir; o, insanın kestirme yoldan (hırsla) hedefe ulaşma kibrinin ve dışarıdan ne kadar medeni görünürsek görünelim, açlığın ve ölüm korkusunun o medeniyet maskesini saniyeler içinde yırtarak içimizdeki o ilkel (yamyam) canavarı nasıl ortaya çıkardığının en dondurucu kanıtıdır.',
    questionStem: 'Donner Kampı kafilesinin yaşadığı trajedinin temelindeki psikolojik/felsefi çöküş yazar tarafından neye bağlanmıştır?',
    options: [
      'Amerika kıtasındaki vahşi hayvanların ve Kızılderililerin saldırgan tutumlarına',
      'Harita çizen kâşiflerin coğrafyayı bilmeyerek insanları kasten yanlış yönlendirmesine',
      'Hırsla ve kestirme yoldan gitme kibrinin felaket getirmesine; ve açlık (ölüm korkusu) anında insanın o "saygın, medeni ve dindar" maskesinin yırtılıp en ilkel, acımasız (yamyam) canavara saniyeler içinde dönüşebilmesine',
      'Kış aylarında uzun yolculuklara çıkmanın dönemin taşıma araçları için teknik olarak imkânsız olmasına'
    ],
    correct: 2,
    explanation: 'Kısa yoldan gitme hırsı ve yiyecek bitince saygın ailelerin akrabalarını yemesi (yamyamlık); açlık ve ölüm korkusunun insanın o medeniyet/din maskesini saniyeler içinde yırtıp içindeki canavarı çıkardığını gösterir.'
  },
  {
    title: 'Enkidu\'nun Düşüşü (Uygarlığın Bedeli)',
    passage: 'Dünyanın en eski destanı olan Gılgamış\'ta, vahşi doğanın yenilmez gücünü ve saflığını temsil eden Enkidu adında bir yaratık vardır. O, hayvanlarla birlikte otlar, aslanlarla koşar ve doğanın bir parçasıdır. Gılgamış, bu yenilmez rakibi ehlileştirmek için ormana Şamhat adında bir tapınak fahişesi (kadın) gönderir. Şamhat, Enkidu\'ya aşkı, ekmek yemeyi, şarap içmeyi ve giyinmeyi (uygarlığı) öğretir. Enkidu uygarlığı (insanlığı) tattığı o an, hayvanlar ondan korkup kaçar; o artık doğanın bir parçası (özgür) değil, doğaya yabancılaşmış (zayıflamış) bir insandır. Enkidu\'nun bu efsanevi dönüşümü; uygarlığın (medeniyetin), insana bilgi ve kültür sunarken, aslında onu asıl evinden (doğadan) koparan, gücünü ve o ilkel saflığını çalan (onu ölümlü kılan) trajik bir "düşüş" hikâyesidir.',
    questionStem: 'Gılgamış Destanı\'ndaki "Enkidu\'nun Ehlileşmesi (Dönüşümü)", mitolojik ve felsefi olarak neyin alegorisidir (temsilidir)?',
    options: [
      'Gılgamış\'ın askeri zekâsının (stratejisinin) ne kadar yenilmez bir güce sahip olduğunun',
      'Uygarlığın (medeniyet/kültür/bilgi), insana bir yandan lüks ve kimlik kazandırırken; diğer yandan onun doğayla olan bağını, ilkel saflığını ve vahşi özgürlüğünü çalarak onu trajik bir şekilde zayıflattığının (doğadan düşüşünün)',
      'Hayvanların ateşi ve kıyafetleri gördüklerinde içgüdüsel olarak kaçma eğilimlerinin',
      'Antik Mezopotamya\'da kadınların savaşlarda diplomatik elçi olarak kullanılmasının'
    ],
    correct: 1,
    explanation: 'Enkidu\'nun ekmek yiyip (uygarlaşıp) doğadan kopması ve hayvanların ondan kaçması; medeniyetin, insana kültür sunarken onun asıl ilkel saflığını, gücünü ve doğayla bağını çalan trajik bir "düşüş" olduğunu sembolize eder.'
  },
  {
    title: 'Utnapiştim ve Tufan (Gürültünün Cezası)',
    passage: 'Eski Mezopotamya mitolojisinde (Gılgamış Destanı\'nda), Nuh Tufanı\'nın çok daha eski ve ürkütücü bir versiyonu olan Utnapiştim efsanesi yer alır. Sümer tanrıları, yeryüzündeki insanları yok etmeye karar verdiklerinde, gerekçe olarak onların "ahlaksızlıklarını veya günahlarını" öne sürmezler. Tanrı Enlil\'in insanları sulara gömmek istemesinin tek (ve şok edici) nedeni şudur: "İnsanlar çok çoğaldı ve çok fazla GÜRÜLTÜ yapıyorlar; seslerinden geceleri uyuyamıyorum!" Utnapiştim bir gemi yaparak tufandan kurtulur. Bu antik mitoloji, doğanın (veya tanrıların) insana bakış açısındaki o dondurucu gerçeği fısıldar: Evrenin gözünde bizim ahlakımız, kurduğumuz medeniyetler veya dinlerimiz hiçbir anlam ifade etmez; koca evren için insanlık, sadece ekosistemi rahatsız eden, kendini fazla ciddiye alan ve haddinden fazla "gürültü" yapan kibirli (ve yorucu) bir böcek sürüsünden ibarettir.',
    questionStem: 'Sümer tanrısı Enlil\'in dünyayı (insanlığı) sulara gömme gerekçesi ("Gürültü"), insanın evrendeki yeri hakkında nasıl bir felsefi tokat (metafor) barındırır?',
    options: [
      'Gemi inşası ve denizciliğin Sümerler için hayatta kalmanın tek yolu olduğu gerçeğini',
      'Tanrıların sadece dua eden ve onlara adak sunan insanları (sessiz olanları) sevdiğini',
      'İnsanoğlunun kendi yarattığı medeniyeti ve ahlaki kuralları (kibrini) çok önemsemesine rağmen; evrenin devasa ve soğuk gözünde insanın sadece can sıkan, yorucu ve gürültücü (önemsiz) bir böcek sürüsünden ibaret olduğu gerçeğini',
      'Ortadoğu bölgesinin antik çağlarda aşırı yağışlar nedeniyle sürekli sel felaketleri yaşadığını'
    ],
    correct: 2,
    explanation: 'Tanrıların insanı "günah" için değil sadece "gürültü yaptıkları" için yok etmesi; evrenin gözünde insanın ahlakının/kibrinin bir önemi olmadığını, sadece ekosistemi yoran önemsiz bir gürültü (böcek sürüsü) olduğunu vurgular.'
  },
  {
    title: 'Victor Aveyron (Vahşi Çocuk)',
    passage: '1800 yılında Fransa\'nın Aveyron ormanlarında, doğduğundan beri tamamen tek başına, hayvanlar gibi dört ayak üzerinde yürüyen ve hırlayan 12 yaşlarında vahşi bir çocuk (Victor) bulundu. Dönemin en aydın bilim insanları ve doktoru Jean Marc Itard, bu çocuğu medenileştirmek, ona dil öğretmek ve "insan" yapmak için yıllarca çabaladı. Ancak Victor asla tam bir cümle kuramadı, duyguları anlayamadı ve toplumun içine karışamadı; o hep o ormanın vahşi çocuğu olarak kaldı. Victor\'un hikâyesi (ve başarısız olan eğitimi), insan doğasına atılmış felsefi bir tokattır: Bizi "insan" yapan şey kanımızdaki biyolojik genetik veya yürüyen bedenimiz değildir; insanı insan yapan şey, doğduğu o ilk yıllarda diğer zihinlerle kurduğu bağ, şefkat ve o toplumun ürettiği (öğrettiği) "dil"dir. Eğer o dil ve şefkat (sosyalleşme) yoksa, etten kemikten bir beden asla gerçek bir "insana" dönüşemez.',
    questionStem: 'Victor Aveyron\'un medenileşememesi (dil öğrenememesi), "insanı insan yapan temel faktör" olarak neyi ön plana çıkarmaktadır?',
    options: [
      'İnsan genetiğinin orman havasında (doğada) mutasyona uğrayarak kalıcı hasarlar almasını',
      'Fransız doktorların eğitim ve dil öğretme yöntemlerinin o dönemde henüz çok ilkel olmasını',
      'Biyolojik bir bedene sahip olmanın insan olmak için yetmeyeceğini; asıl belirleyicinin (insanlaştırıcının), erken çocuklukta toplumla kurulan bağ, sosyalleşme, şefkat ve "dil (kültür)" ortamı olduğunu',
      'Çocukların 12 yaşından sonra hiçbir şekilde yeni bir yabancı dil öğrenemeyeceği gerçeğini'
    ],
    correct: 2,
    explanation: 'Victor\'un insan genetiğine sahip olmasına rağmen dili ve şefkati (sosyalleşmeyi) kaçırdığı için vahşi kalması; bizi insan yapan şeyin biyoloji değil, erken yaştaki toplumsal bağ ve kültür (dil) ortamı olduğunu kanıtlar.'
  },
  {
    title: 'Moravec Paradoksu (Bedenin Zekâsı)',
    passage: 'Bilgisayar bilimcisi Hans Moravec, 1980\'lerde yapay zekâ ile ilgili akılalmaz bir çelişkiyi (paradoksu) fark etti. Yapay zekâ programları ve robotlar; satrançta dünya şampiyonunu yenmek, karmaşık matematiksel denklemleri çözmek veya borsa analizi yapmak gibi "yüksek zekâ (mantık)" gerektiren işleri saniyeler içinde ve kusursuzca yapabiliyorlardı. Ancak aynı robotlara, bir yaşındaki bir çocuğun rahatlıkla yaptığı "merdiven çıkmak, bir bardağı düşürmeden kavramak veya bir yüzü tanımak" gibi fiziksel eylemleri yaptırmak trilyonlarca dolara mal oluyor ve başaramıyorlardı! Moravec Paradoksu bize evrimin sırrını açıklar: Satranç oynamak veya matematik çözmek insanlık tarihinde sadece birkaç bin yıllık yeni bir beceridir (öğretilmesi kolaydır); oysa yürümek, görmek ve dokunmak, doğanın milyonlarca yıllık acımasız evrimiyle kodlanmış, kopyalanamaz ve mucizevi bir bedensel (fiziksel) dehanın ta kendisidir.',
    questionStem: 'Moravec Paradoksu\'nun ("satrançta yenen robotun bardak tutamaması") yapay zekâ ve evrim bağlamında ispatladığı asıl gerçek nedir?',
    options: [
      'Satranç gibi oyunların aslında yüksek bir zekâ veya mantık gerektirmeyen şansa dayalı basit oyunlar olduğu',
      'İnsanlığın kurduğu medeniyetin sadece matematiksel başarılara ve formüllere dayandığı',
      'Yüksek mantığın (matematiğin) makineler için çok kolay; ancak yürüme, görme gibi sıradan (bilinçsiz) bedensel reflekslerin milyonlarca yıllık evrimin kopyalanamaz, devasa bir zekâ harikası (mucizesi) olduğu',
      'Robotların el ve ayak tasarımlarının yeterince estetik ve güçlü metallerden yapılmadığı'
    ],
    correct: 2,
    explanation: 'Robotların matematiği kolayca çözerken yürüyememesi (Moravec Paradoksu); sıradan sandığımız bedensel reflekslerin/duyuların aslında milyonlarca yıllık evrimin devasa ve kopyalanamaz bir mucizesi/zekâsı olduğunu açıklar.'
  },
  {
    title: 'Matruşka Beyni (Kozmik Simülasyon)',
    passage: 'Bilimkurgu ve fütürizmin en korkutucu kavramlarından biri "Matruşka Beyni"dir (Matrioshka Brain). Bu teoriye göre, teknolojinin son sınırına ulaşmış (tanrılaşmış) bir uzaylı medeniyeti, yıldızlararası seyahat yapmak veya savaşmak yerine çok daha içe kapanık ve devasa bir şey inşa eder. Bizzat bir yıldızın (Güneş\'in) etrafını devasa bilgisayar işlemcileriyle (katman katman matruşka bebekleri gibi) sararak, o yıldızın tüm enerjisini tek bir amaç için emerler: Trilyonlarca canlının zihnini (bilincini), acının, ölümün ve fiziksel kusurların olmadığı kusursuz bir "Sanal Gerçeklik (Simülasyon)" dünyasına yüklemek. Bu medeniyet, fiziksel evreni tamamen terk edip, kendi inşa ettikleri o sonsuz ve kusursuz dijital rüyanın içine tembelce gömülür. Belki de gökyüzünde uzaylıları göremememizin sebebi budur: Gerçek tanrılık galaksileri fethetmek değil; kendi zihninizin yarattığı o kusursuz (sanal) cennetin içine sonsuza dek saklanmaktır.',
    questionStem: 'Matruşka Beyni teorisine göre, uzaylı medeniyetlerin (üstün zekânın) ulaştığı o "nihai (ve korkutucu)" hedef nedir?',
    options: [
      'Güneşin enerjisini kullanarak diğer galaksilerdeki gezegenleri acımasızca işgal edip sömürge imparatorlukları kurmak',
      'Fiziksel uzayı (evreni) keşfetmek yerine, bir yıldızın tüm gücünü emip; acısız, ölümün olmadığı ve trilyonlarca bilincin dijital bir kurguda uyuşturulduğu o devasa "sanal gerçekliğin (rüyanın)" içine gömülerek (kaçılarak) saklanmak',
      'Zaman makineleri üreterek geçmişe gitmek ve evrenin nasıl oluştuğunu (Big Bang\'i) çıplak gözle izleyebilmek',
      'Karanlık enerjiyi kontrol altına alarak uzaydaki tüm karadelikleri tamamen ortadan kaldırmak'
    ],
    correct: 1,
    explanation: 'Gelişmiş uzaylıların yıldızı sarıp enerjisini emerek zihinlerini "kusursuz bir sanal gerçekliğe" yüklemeleri; gelişmişliğin nihai hedefinin galaksileri fethetmek değil, kendi dijital cennetlerine/rüyalarına (simülasyona) kaçıp saklanmak olduğunu teorize eder.'
  },
  {
    title: 'Heisenberg\'in Belirsizlik İlkesi',
    passage: 'Alman fizikçi Werner Heisenberg, kuantum dünyasının kapılarını açtığında, bilimin o "her şeyi kesin olarak ölçebiliriz" kibrini tek bir formülle yerle bir etti: Belirsizlik İlkesi. Bu ilkeye göre; bir atom altı parçacığın (elektronun) hızını ve konumunu aynı anda, kusursuz bir şekilde bilmeniz (ölçmeniz) evrenin yasaları gereği imkânsızdır. Eğer elektronun nerede durduğuna çok net odaklanırsanız (konumu ölçerseniz), onun ne kadar hızlı gittiği bilgisini (hızını) sonsuza dek kaybedersiniz. Eğer hızını ölçerseniz, bu kez nerede olduğunu asla bilemezsiniz. Heisenberg\'in bu buluşu sadece fizikte değil, hayatta da büyük bir metafordur: Bir şeyin (veya bir insanın) ince detaylarına, kelimelerine ve anlık duruşuna çok fazla odaklandığınızda (yakından baktığınızda); o şeyin nereye doğru gittiğini, genel resmini ve o büyük ruhunu her zaman kaybedersiniz. Mutlak kesinlik, doğanın bize yasakladığı bir illüzyondur.',
    questionStem: 'Heisenberg\'in "Belirsizlik İlkesi"nin (Aynı anda hem hızın hem konumun bilinememesi) felsefi olarak insan hayatındaki metaforik (benzeşim) karşılığı nedir?',
    options: [
      'Laboratuvar ortamındaki sıcaklığın elektronların hareketlerini sürekli olarak değiştirmesi',
      'İnsanların çok hızlı hareket ettiklerinde odaklanma problemlerinden dolayı çevrelerini görememeleri',
      'Hayatta bir şeyin (veya insanın) sadece ince detayına, anlık bir durumuna aşırı odaklanıldığında (yakından bakıldığında); onun genel resminin, nereye doğru aktığının ve asıl ruhunun (bütünlüğünün) ister istemez kaybolması (körleşme) gerçeği',
      'Kuantum fizikçilerinin evrenin yapısını tamamen din ve mistisizm ile açıklamaya çalışmaları'
    ],
    correct: 2,
    explanation: 'Elektronun anlık konumuna bakınca hızının/gidişatının bilinmemesi; hayatta da ince detaya (anlık duruşa) çok fazla odaklanıldığında asıl büyük resmin, nereye gittiğinin (ve ruhun) kaybedildiği gerçeğiyle (körleşme) metaforlaştırılmıştır.'
  },
  {
    title: 'Marina Abramović ve Rhythm 0 (Gücün Şeytanı)',
    passage: '1974 yılında performans sanatçısı Marina Abramović, "Rhythm 0" adlı gösterisinde bir odanın ortasında 6 saat boyunca hareketsiz durdu. Önündeki masaya gül, tüy, bıçak, jilet ve dolu bir tabanca gibi 72 farklı eşya koydu ve şu notu yazdı: "Masadaki eşyaları üzerimde istediğiniz gibi kullanabilirsiniz, olan biten her şeyin sorumluluğu bana aittir." İlk saatlerde seyirciler ona gülümsedi, saçını okşadı ve çiçek verdi. Ancak sanatçının tepki vermediğini (cezalandırılmayacaklarını/mutlak gücü elde ettiklerini) fark ettikçe kalabalık aniden vahşileşti. Elbiselerini kestiler, cildini jiletle çizip kanını içtiler ve son saatte biri silahı kafasına dayadı. Altı saat bitip Marina hareket etmeye (insan olmaya) başladığında, o vahşi kalabalık korkuyla kaçıştı. Bu deney; otoritenin (cezanın) olmadığı ve mutlak gücün (pasifliğin) sunulduğu bir ortamda, sıradan ve kibar insanların bile içindeki o karanlık, sadist ve vahşi canavarın saniyeler içinde nasıl uyanabildiğini kanıtlayan en kanlı psikolojik tiyatrodur.',
    questionStem: 'Marina Abramović\'in "Rhythm 0" performansının (seyircilerin vahşileşmesinin) ortaya çıkardığı en korkunç ahlaki (psikolojik) gerçek nedir?',
    options: [
      'Sanat gösterilerinde insanların canlarının çok çabuk sıkılarak şiddete yönelmeye (eğlence aramaya) olan doğal eğilimi',
      'Dışarıdan gelen her türlü uyarıcıya (jilet, silah) karşı sanatçının fiziksel olarak hiçbir acı hissetmeme yeteneğine sahip olması',
      'Ahlakın ve kibarlığın bir erdemden ziyade cezalandırılma korkusu olduğu; otoritenin ve cezanın kalktığı (mutlak gücün sunulduğu) anda en "sıradan (iyi)" insanın bile saniyeler içinde içindeki o sadist, vahşi canavara dönüşebildiği gerçeği',
      'Müzelerdeki ve galerilerdeki eşyaların her zaman izleyiciler tarafından hatıra olarak çalınmak istenmesi'
    ],
    correct: 2,
    explanation: 'Sanatçının tepki vermediğini (ceza olmadığını) fark eden "kibar" insanların jilet atıp kan içecek kadar vahşileşmesi; otorite ve ceza yok olduğunda insanın içindeki sadist canavarın saniyeler içinde uyanabileceğini kanıtlar.'
  },
  {
    title: 'Funes the Memorious (Unutmanın Erdemi)',
    passage: 'Jorge Luis Borges\'in efsanevi öyküsü "Bellek Funes" (Funes the Memorious), attan düşüp kafasını çarptıktan sonra hafızası kusursuzlaşan bir adamı (Ireneo Funes) anlatır. Funes, o günden sonra yaşadığı, gördüğü ve duyduğu tek bir saniyeyi, gökyüzündeki bulutların şeklini veya bir ağaçtaki yaprakların sayısını bile asla unutmaz. Her detay zihnine jilet gibi kazınır. Ancak bu kusursuz (ve sonsuz) hafıza onu bir dâhiye değil, bir zihinsel felce dönüştürür. Funes artık "düşünememektedir". Çünkü düşünmek (veya felsefe yapmak) demek, detayları yok saymak, önemsiz olanı silmek (unutmak) ve olaylar arasında "genelleme (kavram)" yapabilmektir. Borges bize şunu haykırır: Hafıza bizi var eden şey olsa da; insanı asıl akıllı ve yaratıcı kılan (düşünmesini sağlayan) en yüce eylem, kusursuzca hatırlamak değil, o devasa gürültüden (detaylardan) kurtulmayı sağlayan "Unutma" (silme) erdemidir.',
    questionStem: 'Borges\'in "Bellek Funes" öyküsüne göre, insanı düşünemez (felç) hale getiren ve aklın asıl işlevini bozan durum nedir?',
    options: [
      'Geçmişteki acı anıların travma yaratarak kişiyi dış dünyadan (toplumdan) tamamen koparması',
      'Hiçbir detayı unutamamanın (kusursuz ve sınırsız hafızanın), beyni detaylar (gürültü) içinde boğarak olaylar arasında bağ (genelleme) kurmasını engellemesi ve zihni felç etmesi',
      'Attan düşme gibi fiziksel kaza ve travmaların insan beynindeki konuşma merkezine zarar vermesi',
      'Sürekli yeni bilgiler öğrenmenin (okumanın) beyinde yer bırakmayarak eski hatıraları silmesi'
    ],
    correct: 1,
    explanation: 'Funes\'in her yaprağı, her saniyeyi hatırlaması (hiçbir şeyi unutamaması) yüzünden beyninin gürültü içinde boğularak genelleme (düşünme) yapamaması; düşünmek için "unutmanın/silmenin" şart olduğu gerçeğini vurgular.'
  }
];

// 26. MAKİNE
export const felsefeParagrafSorulari26: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_26.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_26[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe26-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_27 = [
  {
    title: 'Karıncaların Ölüm Çemberi (Ant Mill)',
    passage: 'Kör asker karıncalar, yiyecek ararken yönlerini bulmak için öndeki karıncanın bıraktığı kimyasal feromon izini takip ederler. Ancak bazen bu iz kaybolur ve en öndeki karınca yanlışlıkla kendi arkasındaki karıncanın peşine takılır. O an doğanın en korkunç "sürü histerisi" başlar: Milyonlarca karınca, ortada hiçbir sebep (veya lider) yokken birbirlerinin peşine takılıp devasa bir çember (ölüm değirmeni) oluşturur. Dışarı çıkmayı akıl edemezler; bitkinlikten, açlıktan ve susuzluktan ölene kadar günlerce o çemberin etrafında dönerler. Karıncaların Ölüm Çemberi; lidersiz, sorgulamayan ve sadece önündekini (kalabalığı) körü körüne takip eden kitlelerin, kendi sonlarını getirecek o anlamsız ve ölümcül girdaba (felakete) nasıl neşeyle yürüdüklerinin kusursuz metaforudur.',
    questionStem: 'Karıncaların "Ölüm Çemberi" olgusu, toplumsal davranışlar bağlamında neyin (psikolojik) metaforu olarak kullanılmıştır?',
    options: [
      'Grup içinde farklı fikirlerin (kaosun) ortaya çıkmasının her zaman düzeni bozduğunun',
      'Karıncaların kimyasal iletişim sistemlerinin insan dilinden çok daha karmaşık olduğunun',
      'Körü körüne itaatin ve "sürü psikolojisinin", sorgulanmadığında (bireysel akıl devre dışı kaldığında) toplumu/kitleyi ölümcül, anlamsız ve çıkışsız bir yıkım döngüsüne sürüklemesinin',
      'Hayvanların yön bulma içgüdülerinin sadece gündüzleri sağlıklı çalıştığının'
    ],
    correct: 2,
    explanation: 'Feromon izini kaybedip sadece birbirini takip ederek ölene dek dönmeleri; sorgulamayan, körü körüne itaatin ve sürü psikolojisinin toplumu yıkım döngüsüne sokmasını sembolize eder.'
  },
  {
    title: 'Pirus Zaferi (Yıkıcı Galibiyet)',
    passage: 'MÖ 279 yılında Epir Kralı Pirus (Pyrrhus), İtalya\'ya saldırarak Roma ordusunu büyük bir bozguna uğratır. Ancak savaşı kazanmasına rağmen, en iyi komutanlarını, fillerini ve ordusunun neredeyse tamamını o savaş meydanında kaybeder. Savaşın ardından kendisine tebrik için gelenlere dönüp tarihe geçen şu acı verici sözü söyler: "Tanrım, bana bir daha böyle bir zafer nasip etme!" O günden beri "Pirus Zaferi" deyimi; görünüşte (tabelada) kazanılmış gibi dursa da, o galibiyet uğruna ödenen kanlı, devasa ve telafi edilemez bedeller yüzünden, galibi aslında tükenişe (ve yıkıma) götüren mağlubiyetten farksız zaferleri tanımlamak için kullanılır. Bazen kazanmak, kaybetmekten çok daha yıkıcıdır.',
    questionStem: 'Pirus Zaferi kavramı, strateji ve çatışmalar açısından (mecazi olarak) neyi ifade eder?',
    options: [
      'Roma ordularının savunma savaşlarında hiçbir zaman tam olarak yenilemeyeceği gerçeğini',
      'Savaşlarda sadece kılıç gücünün değil, diplomatik taktiklerin de kazanmak için zorunlu olduğunu',
      'Elde edilen zaferin veya başarının, uğruna feda edilen (ödenen) ağır bedeller yüzünden aslında kişiyi/tarafı tüketen yıkıcı bir mağlubiyetten (hezimetten) farksız olmasını',
      'Kazanılan zaferlerin her zaman kralların egosunu daha da şişirerek yeni savaşlara neden olmasını'
    ],
    correct: 2,
    explanation: 'Kazanmasına rağmen ordusunu kaybedip "bir daha böyle zafer verme" demesi; bedeli çok ağır olan, tarafı tüketen ve mağlubiyetten farksız (yıkıcı) zaferleri ifade eder.'
  },
  {
    title: 'Minerva\'nın Baykuşu (Geciken Bilgelik)',
    passage: '19. yüzyılın en büyük filozofu Hegel, aklın ve felsefenin insan tarihindeki konumunu anlatırken sarsıcı bir tespitte bulunur: "Minerva\'nın baykuşu sadece alacakaranlıkta uçar." Roma mitolojisinde bilgeliği temsil eden bu baykuş, olaylar yaşanırken (gündüz vakti) asla ortaya çıkmaz; ancak gün bitip güneş battığında, yani her şey olup bittikten sonra kanat çırpar. Hegel bize şu acı gerçeği vurur: Felsefe, bilim ve insan aklı, toplumsal felaketleri veya çöküşleri "önceden" öngörüp engelleyemez (geleceği yazamaz). Bilgelik, ancak savaşlar bittikten, imparatorluklar yıkıldıktan ve felaketler (kanlı bir şekilde) yaşandıktan sonra sahneye çıkıp geçmişin enkazını açıklayabilen o trajik ve "hep geç kalmış" idraktir.',
    questionStem: 'Hegel\'in "Minerva\'nın Baykuşu" metaforu, felsefenin (ve aklın) hangi trajik zaafını vurgular?',
    options: [
      'Bilgeliğin sadece toplumdan tamamen izole olmuş (karanlıkta yaşayan) dâhiler tarafından bulunabileceğini',
      'Felsefenin insanların moralini bozmaktan (kötümserlikten) başka bir işe yaramayan gereksiz bir alan olduğunu',
      'Bilgeliğin ve felsefi kavrayışın önleyici (geleceği kuran) bir rehber olmadığını; gerçeğin ancak olaylar bittikten ve yıkım yaşandıktan (iş işten geçtikten) sonra anlaşılabileceği gerçeğini (gecikmişliğini)',
      'Hayvan metaforlarının felsefi konuları basitleştirerek onların değerini düşürdüğünü'
    ],
    correct: 2,
    explanation: 'Baykuşun sadece gün bitince (alacakaranlıkta) uçması; aklın/felsefenin olayları önleyemeyeceğini, her şey bitip yıkım yaşandıktan sonra anlayan "gecikmiş bir bilgelik" olduğunu vurgular.'
  },
  {
    title: 'Hawking Işıması (Canavarın Ölümü)',
    passage: 'Fizik dünyası yıllarca "Karadelikleri" uzayın ortasında duran, içine düşen hiçbir şeyin (ışığın bile) kaçamadığı ebedi, ölümsüz ve yutucu canavarlar olarak gördü. Ancak deha Stephen Hawking, bu tanrısal kibri paramparça etti. Kuantum fiziğini kullanarak, karadeliklerin tamamen "karanlık" olmadığını, uzaya çok zayıf bir şekilde radyasyon sızdırdıklarını (Hawking Işıması) matematiksel olarak ispatladı. Madem sızdırıyorlardı, bu demekti ki yavaş yavaş kütle kaybediyorlardı! Hawking\'in bu keşfi evrene felsefi bir ferman okudu: Trilyonlarca yıl sürse de, evrendeki o en korkunç, en mutlak ve en yenilmez sanılan canavarlar (karadelikler) bile sonunda buharlaşıp, patlayarak (hiçliğe karışarak) ölecektir. Evrende "ebedi ve ölümsüz" hiçbir karanlık yoktur.',
    questionStem: 'Hawking Işıması (Hawking Radiation) keşfi, evrenin yapısı hakkında hangi felsefi (fiziksel) gerçeği kanıtlar?',
    options: [
      'Karadeliklerin uzay araçları için yeni bir enerji (yakıt) kaynağı olarak kullanılabileceğini',
      'Işığın (fotonların) hızının evrendeki kütleçekim kuvvetlerinden asla etkilenmediğini',
      'Evrendeki en karanlık, yutucu ve mutlak (ölümsüz) sanılan güçlerin (karadeliklerin) bile aslında sonsuz olmadığını; zamanın (ve entropinin) önünde sonunda her şeyi yavaşça buharlaştırıp yok edeceğini',
      'Karadeliklerin içine düşen astronotların başka (paralel) evrenlere geçiş yapabileceğini'
    ],
    correct: 2,
    explanation: 'Karadeliklerin radyasyon sızdırıp buharlaşarak öleceğinin ispatlanması; evrendeki en korkunç/ölümsüz sanılan canavarların bile ebedi olmadığını (zamanla yok olacağını) kanıtlar.'
  },
  {
    title: 'Giffen Paradoksu (Yoksulluğun Matematiği)',
    passage: 'Klasik ekonominin en altın (ve sarsılmaz) kuralı şudur: "Bir ürünün fiyatı artarsa, o ürüne olan talep (satış) düşer." Ancak 19. yüzyıl İrlanda\'sında (Büyük Kıtlık döneminde) ekonomist Robert Giffen akılalmaz bir anomali fark etti. Patates fiyatları inanılmaz derecede artmasına rağmen, yoksul halk eskisinden "daha çok" patates satın alıyordu! Bu deliliğin sebebi neydi? Fakir halkın bütçesinin çoğu patatese gidiyordu. Patates zamlanınca, artık et veya sebze alacak hiç paraları kalmadı; hayatta kalabilmek (karın doyurmak) için ellerindeki o son bütçeyi de mecburen yine patatese yatırmak zorunda kaldılar. "Giffen Paradoksu", yoksulluğun rasyonel mantığı (ve ekonomiyi) nasıl bozduğunun kanıtıdır: Çaresizlik (yoksulluk), insanı en çok zarar gördüğü şeye bile daha sıkı sarılmaya mecbur bırakan bir hapishanedir.',
    questionStem: 'Giffen Paradoksu, yoksulluk durumunda klasik ekonomi kurallarının neden çöktüğünü (tersine çalıştığını) nasıl açıklamaktadır?',
    options: [
      'İrlanda halkının kültürel olarak patatesten başka hiçbir şey yemeyi reddetmesiyle',
      'Temel gıda fiyatı arttığında, yoksul insanların diğer (kaliteli) gıdalara ayıracak bütçesi kalmadığı için mecburen (hayatta kalmak adına) yine o pahalanan temel gıdaya daha çok saldırması (çaresizliğiyle)',
      'Ekonomik krizlerde zenginlerin malları istifleyip piyasada suni bir kıtlık yaratmasıyla',
      'Patatesin besin değerinin et ve sütten bilimsel olarak çok daha yüksek olduğunun fark edilmesiyle'
    ],
    correct: 1,
    explanation: 'Fiyatı artan patatesi daha çok almaları; bütçe daraldığı için et alamayıp (çaresizce) karın doyurmak adına yine o pahalanan patatese mecbur kalmalarını (yoksulluğun çaresizliğini) açıklar.'
  },
  {
    title: 'Bentham\'ın Mumyası (Auto-Icon ve Kibrin Vitrini)',
    passage: 'Faydacılık (Utilitarianism) felsefesinin kurucusu İngiliz filozof Jeremy Bentham, öldüğünde çürümeyi veya toprağa gömülmeyi (sıradanlığı) şiddetle reddetti. Vasiyeti gereği, bedeni kurutularak mumyalandı, kendi kıyafetleri giydirildi ve balmumundan yapılmış sahte (ama gülümseyen) bir baş ile cam bir dolabın (Auto-Icon) içine yerleştirildi. Bugün bile Londra Üniversitesi\'nin koridorlarında bu dolap durmaktadır ve Bentham\'ın cesedi yönetim kurulu toplantılarına "katılan ancak oy kullanmayan üye" sıfatıyla getirilmektedir! Akılcılığı savunan bir dâhinin, ölümden sonra çürümeyi kabullenmek yerine kendi cesedini absürt ve grotesque bir vitrin mankenine çevirtmesi; insan aklının ve kibrinin kendi fiziksel yok oluşuna (ölüme) karşı giriştiği o çaresiz, komik ve hastalıklı "ölümsüzlük (unutulmama)" savaşının en tuhaf kanıtıdır.',
    questionStem: 'Jeremy Bentham\'ın kendi cesedini doldurtarak (Auto-Icon) sergiletmesi ve toplantılara katılması felsefi olarak neyin sembolüdür?',
    options: [
      'Orta Çağ İngilteresi\'nde cesetlerin üniversitelerde anatomi dersleri için bağışlanmasının zorunlu bir yasa olmasının',
      'Faydacılık felsefesinin ölümden sonra ruhun başka bedenlerde yaşamaya devam ettiği inancının',
      'İnsan aklının ve kibrinin, kendi fiziksel ölümünü (yok oluşunu) kabullenmektense; çürüyen bedenini absürt ve (grotesk) bir vitrin objesi olarak (ölümsüzlük/unutulmama yanılsamasıyla) yaşatmaya çalışmasının',
      'Mumyalama tekniklerinin 19. yüzyılda Mısır\'dan Avrupa\'ya geçiş yaptığının'
    ],
    correct: 2,
    explanation: 'Toprağa gömülmeyi reddedip kendi cesedini cam dolapta (toplantılarda) sergiletmesi; kibrin ölümü (yok olmayı) kabullenemeyip bedeni absürt bir vitrin/ölümsüzlük objesine dönüştürmesini sembolize eder.'
  },
  {
    title: 'Mono no Aware (Geçiciliğin Hüznü)',
    passage: 'Batı sanatı ve felsefesi yüzyıllarca elmastan, taştan ve "ölümsüz (kalıcı)" olan şeylerden büyülenmiş; zamanı yenmeye çalışmıştır. Oysa Japon kültüründeki "Mono no Aware" felsefesi buna tamamen zıttır. Japonlar neden en çok rüzgârda sadece birkaç günlüğüne açıp dökülen Sakura (Kiraz) çiçeklerini severler? Çünkü bu felsefeye göre, dünyadaki gerçek güzellik kalıcılıkta ve kusursuzlukta değil; "geçicilikte", solup gidecek olmanın (kırılganlığın) yarattığı o derin, estetik hüzünde yatar. Bir çiçeğin, bir anın veya bir insanın değeri, sonsuza dek bizimle kalmasından değil; tıpkı bir rüya gibi parlayıp saniyeler içinde karanlığa (yok oluşa) karışarak ölecek olmasından gelir. Sonsuzluk insanı uyuşturur; ancak geçicilik (ölüm bilinci), hayatın o tarifsiz değerini uyandıran yegâne şiirdir.',
    questionStem: 'Japon kültüründeki "Mono no Aware" felsefesinin "güzellik ve değer" algısı, Batı\'nın ölümsüzlük arzusundan hangi yönüyle ayrılır?',
    options: [
      'Güzelliğin sadece doğadaki bitkilerde bulunabileceğini ve insan elinden çıkan sanatın her zaman sahte olduğunu savunmasıyla',
      'Bir şeyin değerli (ve estetik) olmasının nedenini onun ebedi ve bozulmaz (kalıcı) kalmasına değil; aksine onun kırılganlığına, kısa ömürlü olmasına ve kaçınılmaz olarak solup gidecek olmasına (geçiciliğine/ölümüne) bağlamasıyla',
      'Mevsimlerin insan psikolojisi üzerindeki etkisini azaltmak için sadece bahar aylarına odaklanılması gerektiği inancıyla',
      'Batılı sanatçıların duygusal olmaktan çok matematiksel (soğuk) hesaplamalarla eser ürettiğini kanıtlamasıyla'
    ],
    correct: 1,
    explanation: 'Batı\'nın ebediyet/taşa (kalıcılığa) tapmasına karşı "Mono no Aware"nin güzelliği Sakura çiçekleri gibi solup gidecek olmanın (kırılganlık/geçicilik) hüznüne bağlaması iki tarafı birbirinden ayırır.'
  },
  {
    title: 'Diogenes Sendromu (İzole İsyan)',
    passage: 'Bazen haberlerde "Çöp evde yaşayan yaşlı adam/kadın" başlıkları görürüz. Evleri ağzına kadar eski gazeteler, çöpler ve eşyalarla doludur, kendilerini ve hijyeni tamamen ihmal etmişlerdir. Psikiyatride buna "Diogenes Sendromu" (Senil Skuamöz) denir. Bu durum basit bir tembellik, pasaklılık veya yoksulluk değildir. Aksine, genellikle eskiden çok zeki, eğitimli veya başarılı olmuş (ancak ağır bir kayıp, travma yaşamış) kişilerin; dış dünyaya, toplumsal kurallara ve insan ilişkilerine karşı (kendilerini de yok sayarak) başlattığı o pasif, aşırı inatçı ve izole isyandır. Sendrom adını, fıçıda yaşayıp toplumun tüm lükslerini reddeden filozof Diyojen\'den alsa da; aslında zihnin ağır bir darbe sonrası, hayatın (insanların) tüm beklentilerinden kopup, sadece kendi güvenli çöplüğüne (hiçliğe) sığınma çaresizliğidir.',
    questionStem: 'Psikiyatride "Diogenes Sendromu" (istifçilik/kendi çöpünde yaşama) neyin dışavurumu olarak değerlendirilir?',
    options: [
      'Kişinin maddi imkânsızlıklar (yoksulluk) nedeniyle mecburen çöp toplayarak hayatını sürdürme çabası',
      'Yaşlılığa bağlı hafıza kaybının (Alzheimer) doğrudan yarattığı fiziksel bir koku alamama hastalığı',
      'Basit bir hijyen eksikliği veya tembellik değil; bireyin yaşadığı ağır bir travma sonucu, dış dünyaya ve toplumsal normlara karşı (kendi bedenini de yok sayarak) tamamen vazgeçip içine kapandığı hastalıklı bir isyan (kopuş) hali',
      'Filozofların genellikle materyal dünyayı küçümseyerek bilerek ve isteyerek pis ortamlarda yaşama arzusu'
    ],
    correct: 2,
    explanation: 'Çöp evde yaşamanın basit tembellik/yoksulluk değil; zeki insanların ağır bir travma sonrası topluma, kurallara ve kendine karşı başlattığı hastalıklı bir vazgeçiş (isyan ve izolasyon) hali olduğu belirtilmiştir.'
  },
  {
    title: 'Dante\'nin Cehennem Kapısı',
    passage: 'İtalyan şair Dante Alighieri, "İlahi Komedya"sında kahramanını Cehennemin o korkunç kapısına getirir. O kapının üzerinde kan donduran, efsanevi bir uyarı kazınmıştır: "Lasciate ogne speranza, voi ch\'intrate" (İçeri girenler, dışarıda bırakın her umudu!). Dante\'nin felsefesinde Cehennemin asıl işkencesi, fokurdayan lavlar, zebaniler veya fiziksel acı (ateş) değildir. İnsanı asıl yok eden, aklını kaçırmasına neden olan o en dehşet verici ceza; "Durumun bir daha asla değişmeyeceği, geçmişin geri gelmeyeceği ve geleceğin (kurtuluşun) tamamen iptal edildiği" o mutlak UMUTSUZLUK gerçeğidir. Umudun olmadığı (ihtimalin öldüğü) her yer, sıcaklığı veya konforu ne olursa olsun, insanın kendi zihninde yandığı kusursuz bir cehennemdir.',
    questionStem: 'Dante\'nin İlahi Komedya\'sında "Cehennemin" asıl işkencesi felsefi olarak neye dayandırılmıştır?',
    options: [
      'Günahkârların ebediyen yanan ateşlerde çekeceği fiziksel acılara ve zebanilerin işkencelerine',
      'Fiziksel acılardan veya yanmaktan ziyade; durumun bir daha asla değişmeyeceğine (kurtuluşun imkânsızlığına) dair o mutlak "umutsuzluk" ve ebedi bir karanlığa mahkûmiyet hissine',
      'Dünyada kalan sevdiklerinin yaşlanmasını ve acı çekmesini uzaktan çaresizce izleme psikolojisine',
      'Şeytanla aynı ortamda bulunmanın verdiği dini ve ruhani korkuya'
    ],
    correct: 1,
    explanation: '"İçeri girenler umudu dışarıda bırakın" sözüyle; asıl cehennemin/işkencenin lavlar (fiziksel acı) değil, değişme ihtimalinin (umudun) tamamen iptal edildiği o ebedi "umutsuzluk" hali olduğu anlatılmıştır.'
  },
  {
    title: 'El Dorado (Altın Serap)',
    passage: '16. yüzyılda İspanyol fatihler (Conquistadorlar), Güney Amerika\'ya geldiklerinde yerlilerden "El Dorado" (Altından Adam/Şehir) adında bir efsane duydular. Sözde ormanın derinliklerinde binaların, sokakların ve göllerin tamamen altından yapıldığı bir cennet vardı. İspanyollar, bu şehri bulmak uğruna donanımlı ordularıyla amazon ormanlarına girdiler. Ancak buldukları tek şey zehirli yılanlar, ölümcül hastalıklar ve açlıktı. Askerler altın hırsıyla çıldırdı, birbirlerini katlettiler ve ormanın yeşil cehenneminde iz bırakmadan yok oldular. El Dorado hiçbir zaman var olmamıştı; o, insanın kendi içindeki o doymak bilmez açgözlülüğün (hırsın) dışarıya yansıtılmış kurgusal bir serabıydı. Orman, o kibirli ve açgözlü fatihleri altınla değil, çıldırmış bir ölümle ödüllendirdi.',
    questionStem: 'El Dorado efsanesi ve İspanyol kâşiflerin sonu, insan doğası hakkında neyi anlatır (sembolize eder)?',
    options: [
      'Amazon ormanlarının altın ve değerli madenler açısından aslında çok fakir bir bölge olduğunu',
      'Avrupalıların keşif teknolojilerinin harita okuma konusunda çok yetersiz kaldığını',
      'Doymak bilmez açgözlülüğün (hırsın), insanı mantıktan kopararak aslında hiç var olmayan (serap) bir hedefin peşinde kendi yıkımına ve cinnetine (ormanın içinde ölüme) sürüklediğini',
      'Yerli halkların efsaneleri kasten uydurarak Avrupalıları kendi topraklarından korkutmaya çalıştığını'
    ],
    correct: 2,
    explanation: 'Altın şehir (El Dorado) bulma hırsıyla ormana girip birbirlerini yemeleri ve delirmeleri; açgözlülüğün/hırsın insanı var olmayan bir serap peşinde cinnete ve kendi yıkımına sürüklediğini sembolize eder.'
  },
  {
    title: 'Gözyaşı Yolu (Medeniyetin Bedeli)',
    passage: '1830\'larda Amerikan hükümeti, doğu kıyısındaki o verimli toprakları pamuk tarlalarına çevirmek (ve beyaz yerleşimcilere açmak) için, binlerce yıldır orada yaşayan yerli kabileleri (Cherokee vb.) yurtlarından zorla sürdü. On binlerce yerli, dondurucu kış şartlarında, süngü zoruyla binlerce mil ötedeki kurak batı topraklarına doğru yürütüldü. Bu ölüm yürüyüşüne "Gözyaşı Yolu" (Trail of Tears) denildi; yolda açlık, soğuk ve hastalıktan dolayı 4 binden fazla masum insan donmuş çamurların üzerinde öldü. Amerika\'nın bugün övündüğü o ışıltılı "demokrasi, modern medeniyet ve zenginlik", aslında boş toprakların (fırsatların) üzerinde değil; yerlerinden sökülüp atılan o acılı halkların donmuş cesetleri, kanları ve gözyaşları üzerinde inşa edilmiş kanlı bir kurgudur.',
    questionStem: 'Gözyaşı Yolu (Trail of Tears) trajedisi, Batı (Amerikan) medeniyetinin gelişimi hakkında hangi ahlaki çelişkiyi (karanlığı) ifşa eder?',
    options: [
      'Soğuk kış aylarında kitlesel göç hareketlerinin lojistik olarak imkânsızlığını',
      'Pamuk üretiminin sadece köle işgücüyle değil, yerli halkların tarım bilgisiyle geliştiğini',
      'Övünülen "medeniyetin, demokrasinin ve ekonomik gelişimin" aslında boş/masum topraklarda değil; yerli halkların acımasızca yerinden edilmesi (soykırım) ve gözyaşları üzerine kurulan (kanlı) bir inşa süreci olduğunu',
      'Yerli kabilelerin yeni topraklara uyum sağlayamayarak kendi aralarında savaşlar başlattığını'
    ],
    correct: 2,
    explanation: 'Amerika\'nın övündüğü o ışıltılı demokrasi ve zenginliğin, aslında yerli halkın zorla sürülüp (Gözyaşı Yolu) öldürülmesi (kan ve soykırım) üzerine inşa edildiği gerçeğini (çelişkiyi) ifşa eder.'
  },
  {
    title: 'Foucault ve Biyopolitika',
    passage: 'Eski çağlarda bir kralın gücü (otoritesi), elindeki kılıçta, işkencede ve "öldürme (idam)" yetkisinde yatardı. Fransız filozof Michel Foucault, modern çağda iktidarın şekil değiştirdiğini söyler ve buna "Biyopolitika" (Biopolitics) adını verir. Modern devlet bizi giyotinle veya kılıçla tehdit etmez; o, bizi doğrudan "yaşatmak ve yönetmek" üzerinden köleleştirir. Nüfus planlamaları, doğum oranları, aşı kampanyaları, psikolojik testler, diyetler ve hastaneler... Bedenimiz (ve yaşamımız) artık bize ait organik bir macera değil; devletin (iktidarın) saydığı, ölçtüğü, optimize ettiği ve ekonomik birer makine çarkına (sayıya) çevirdiği istatistiksel birer veriye dönüşmüştür. Biyopolitika, insanın "öldürülerek" değil, doğrudan "bedeni ve yaşamı tıbbi olarak yönetilerek" kontrol altında tutulduğu o görünmez ve steril hapishanedir.',
    questionStem: 'Michel Foucault\'nun "Biyopolitika" kavramına göre, modern devletin (iktidarın) insan üzerindeki kontrolü nasıl şekil değiştirmiştir?',
    options: [
      'Devletin sadece polis ve asker sayısını artırarak fiziksel şiddeti (idamı) çok daha korkutucu hale getirmesiyle',
      'İktidarın sadece "öldürme veya cezalandırma" gücünden çıkarak; insanların doğumlarını, sağlıklarını ve bedenlerini (yaşamın kendisini) istatistikler ve kurumlarla denetleyen, görünmez (steril) bir kontrole dönüşmesiyle',
      'Hükümetlerin din adamlarıyla işbirliği yaparak halkı günah kavramıyla korkutmasıyla',
      'Üniversitelerin ve akademinin sadece siyasetçiler tarafından yönetilen kapalı binalar haline gelmesiyle'
    ],
    correct: 1,
    explanation: 'Kralın öldürme gücünden ziyade; modern devletin aşı, doğum, hastane gibi kurumlarla doğrudan insanın "bedenini ve yaşamını" istatistiksel olarak (biyopolitika) yönettiği o steril/görünmez kontrolü tanımlar.'
  },
  {
    title: 'Stonehenge (Güneşin Bekçileri)',
    passage: 'İngiltere\'nin sisli ovalarında yer alan Stonehenge anıtı, günümüzden yaklaşık 5000 yıl önce inşa edildi. O dönemde tekerlek yoktu, metal aletler icat edilmemişti. İlkel sandığımız o avcı-toplayıcı (veya ilk çiftçi) atalarımız, tonlarca ağırlıktaki o devasa "Mavi Taşları" (Bluestones) yüzlerce kilometre ötedeki Galler dağlarından kızaklarla taşıdılar. Peki ama neden? Arkeoastronomlar cevabı bulduğunda kanları dondu. O taşlar rastgele dizilmemişti; yaz ve kış ekinokslarında Güneş\'in tam doğuş ve batış açılarını milimetrik olarak (kusursuz bir takvim gibi) işaretliyordu. Stonehenge, din veya sihir için yapılmamıştır; o, hayatta kalmak (hasadı bilmek) ve gökyüzünün (evrenin) o devasa, kozmik ritmini çözebilmek için, ilkel insanın toprağa vurduğu en inatçı, en matematiksel ve en görkemli "Ben anlıyorum!" çığlığıdır.',
    questionStem: 'Stonehenge anıtının inşası ve taşların dizilimi, tarih öncesi insanlığın hangi yüksek felsefi/bilimsel arayışını sembolize eder?',
    options: [
      'Gelecek nesillere mimari güçlerini (kralların zenginliğini) gösteren turistik ve korkutucu bir sanat eseri bırakma hırsını',
      'İlkel sanılan insanların aslında devasa bir mühendislik iradesiyle; gökyüzünün (Güneşin/evrenin) matematiksel ritmini anlamak, zamanı hesaplamak ve o kozmik düzenle kalıcı bir bağ kurmak (mimari bir takvim inşa etmek) isteğini',
      'Uzaylıların dünyaya bıraktığı enerjiyi toprağa hapsetmek için kurulan bir siper (savunma) hattını',
      'Savaşlarda düşman ordularının geçişini engellemek için yapılmış devasa bir askeri barikatı'
    ],
    correct: 1,
    explanation: 'Taşların güneş ekinoksunu milimetrik göstermesi (takvim işlevi); ilkel insanın evrenin (gökyüzünün) matematiksel ritmini çözmek ve onunla bağ kurmak için giriştiği o devasa mühendislik/bilim çabasıdır.'
  },
  {
    title: 'Holodomor (Yapay Kıtlık)',
    passage: '1932 yılında Ukrayna, verimli topraklarıyla "Avrupa\'nın ekmek sepeti" olarak bilinirken, milyonlarca insan aniden açlıktan sokaklarda can vermeye başladı. Tarihe "Holodomor" (Açlıkla Ölüm) olarak geçen bu felaket, yağmursuzluktan veya bir çekirge istilasından (doğadan) kaynaklanmadı. Sovyet diktatörü Stalin, kolektifleştirme politikasına direnen (ve isyan potansiyeli olan) Ukraynalı köylülerin tüm tahılına, hayvanlarına ve tohumlarına zorla el koydu. Sınırları kapatıp şehirlere giriş çıkışı yasakladı. Devlet, doğanın vermediği bir afeti kendi elleriyle yarattı. Holodomor; siyasi gücün (otoritenin), "açlığı" sıradan bir silah, acımasız bir kitle imha aracı (soykırım) olarak kullanarak koca bir halkı nasıl boyun eğdirdiğinin (veya yok ettiğinin) dondurucu tarihidir.',
    questionStem: 'Holodomor (Ukrayna Kıtlığı) felaketini "doğal bir afet" olmaktan çıkaran asıl siyasi dehşet nedir?',
    options: [
      'Ukrayna topraklarının sanıldığı kadar tarıma elverişli olmadığını kanıtlayan bir iklim değişimi olması',
      'Sovyet tarım teknolojisinin Avrupa standartlarının gerisinde kalması nedeniyle hasadın çürümesi',
      'Kıtlığın kuraklık veya doğa şartlarından değil; otoriter bir devletin, isyanı bastırmak ve toplumu boyun eğdirmek amacıyla gıdaya el koyarak "açlığı kasıtlı bir kitle imha silahı" olarak kullanmasından kaynaklanması',
      'İnsanların ellerindeki tahılı daha yüksek fiyatlara satmak için bilerek depolarda saklaması'
    ],
    correct: 2,
    explanation: 'Kıtlığın doğadan (kuraklıktan) değil, Stalin\'in bilerek tüm tahıla el koyup sınırları kapatmasından kaynaklanması; açlığın siyasi bir "kitle imha silahı" (soykırım aracı) olarak kullanıldığını kanıtlar.'
  },
  {
    title: 'Eliza Etkisi (Makineye Âşık Olmak)',
    passage: '1966 yılında Joseph Weizenbaum, "ELIZA" adında son derece basit bir bilgisayar programı (ilk chatbot) yazdı. ELIZA sadece psikoterapist gibi davranıyor, insanların cümlelerini tersine çevirip onlara geri soruyordu ("Annemle kavga ettim" denildiğinde "Neden annenle kavga ettin?" diye sormak gibi). Weizenbaum, programı sadece bir dil deneyi olarak yapmıştı. Ancak sekreteri dâhil yüzlerce insan, ELIZA ile saatlerce sohbet etmeye, ona en karanlık sırlarını, aşklarını ve travmalarını ağlayarak (bir insana anlatır gibi) anlatmaya başladı. Programın kodlarını (ruhu olmadığını) bilenler bile bu yanılsamaya düştü. "Eliza Etkisi", teknolojinin zekâsından ziyade, modern insanın psikolojik çöküşünü gösterir: İnsanoğlunun "dinlenilme, empati ve anlaşılma" açlığı öylesine devasa ve çaresizdir ki; o boşluğu doldurmak için, karşıdaki ruhsuz bir kod yığınına bile (bile isteye) "insani bir kalp (ruh)" atfedip (ona âşık olup) kendi kendiyle konuşmaya hazırdır.',
    questionStem: 'Eliza Etkisi\'nin ortaya koyduğu, insan psikolojisi ve teknoloji etkileşimindeki asıl zaaf (trajedi) nedir?',
    options: [
      '1960\'lı yıllardaki bilgisayarların aslında insan beyninden daha karmaşık hesaplamalar yapabilmesi',
      'İnsanın, içinde taşıdığı o derin dinlenilme, empati ve anlaşılma açlığı yüzünden; aslında hiçbir bilinci ve duygusu olmayan (ruhsuz) bir bilgisayar yazılımına bile insani özellikler yükleyip ona duygusal olarak bağlanması (çaresizliği)',
      'Doktorların ve psikiyatristlerin hastalarına yeterli ilaç tedavisi uygulayamaması',
      'Yazılımların, insanların gizli şifrelerini çalmak için kasten duygu sömürüsü yapması'
    ],
    correct: 1,
    explanation: 'İnsanların sadece kelimeleri tersine çeviren ruhsuz bir koda en gizli sırlarını anlatıp bağlanması; insanın "dinlenilme (empati) açlığının" onu cansız bir makineye bile ruh atfetme çaresizliğine ittiğini (Eliza Etkisi) gösterir.'
  },
  {
    title: 'Protagoras ve İzafiyet (Hakikatin Ölümü)',
    passage: 'Antik Yunan\'ın ilk sofistlerinden olan Protagoras, "İnsan her şeyin ölçüsüdür" (Homo Mensura) diyerek, binlerce yıllık din, felsefe ve bilim tarihine atom bombası gibi düşecek o cümleyi kurdu. Ona göre; rüzgâr üşüyen bir insan için "soğuk", terleyen bir insan için "sıcak"tır. Peki rüzgârın "kendisi" aslında sıcak mıdır, soğuk mu? Protagoras güler ve der ki: "Rüzgârın kendi başına bir gerçeği yoktur!" Evrende iyi, kötü, sıcak, soğuk, doğru veya yanlış diye herkes için geçerli (mutlak/ilahi) bir hakikat yoktur. Tüm gerçekler, sadece onu algılayan kişinin (bireyin) o anki ihtiyaçlarına, kültürüne ve duyularına göre bükülen (kurgulanan) öznel (rölatif/göreceli) illüzyonlardır. Gerçeklik dışarıda değil, tamamen bizim içimizde (beynimizde) ürettiğimiz geçici bir ölçümdür.',
    questionStem: 'Protagoras\'ın "İnsan her şeyin ölçüsüdür" felsefesi (Sofizm), hangi kavramın (inancın) varlığını kökünden reddeder?',
    options: [
      'Toplumların hukuki yasalarla yönetilmesi gerektiği fikrini',
      'İnsan duygularının yanıltıcı olduğunu ve sadece matematiğin kesin doğrular sunduğunu',
      'Evrende, insandan ve kişisel algıdan (şartlardan) bağımsız olarak kendi başına var olan "tek, mutlak ve herkes için geçerli (objektif) bir hakikat (doğru)" inancını',
      'Hava olaylarının tanrılar tarafından kontrol edildiği mitolojisini'
    ],
    correct: 2,
    explanation: 'Rüzgârın üşüyene soğuk, terleyene sıcak gelmesi üzerinden; evrende insandan bağımsız, tek ve mutlak/objektif bir gerçeğin (hakikatin) olmadığını, her şeyin kişisel algıya (izafiyete) bağlı olduğunu savunur.'
  },
  {
    title: 'İskender\'in Gözyaşları (Nihai Boşluk)',
    passage: 'Efsaneye göre, yenilmez komutan Büyük İskender, Makedonya\'dan çıkıp Asya\'yı, Mısır\'ı ve Pers İmparatorluğu\'nu dümdüz ederek Hindistan\'ın doğu sınırlarına (bilinen dünyanın sonuna / Büyük Okyanus\'a) kadar ulaşır. Karşısında sadece uçsuz bucaksız deniz vardır. Askerleri zafer çığlıkları atarken, İskender atından iner, dizlerinin üzerine çöker ve hüngür hüngür ağlamaya başlar. Ona "Efendimiz, dünyayı fethettik, neden ağlıyorsunuz?" dediklerinde, İskender o trajik cevabı verir: "Çünkü artık fethedecek başka bir dünya (amaç) kalmadı!" İskender\'in gözyaşları, insan psikolojisinin en karanlık paradoksudur: Başarının (ve hırsın) mutlak zirvesi, mutluluk veya tatmin getirmez; aksine, uğruna yaşanacak, savaşılacak ve sabah uyanılacak hiçbir amacın (umudun) kalmamasından doğan o devasa, melankolik ve korkunç "varoluşsal boşluk (hiçlik)" hissidir.',
    questionStem: 'Büyük İskender\'in tüm dünyayı fethettikten sonra ağlaması, "hırs ve başarı" bağlamında neyi sembolize eder?',
    options: [
      'Hindistan\'ın doğal güzelliklerinin onu duygusal olarak çok fazla etkilediğini',
      'Askerlerinin yorulduğunu görüp onlara karşı hissettiği liderlik merhametini',
      'İnsanoğlunun bitmek bilmez fethetme arzusunun (hırsının) mutlak zirvesine ulaştığı o nihai anın, bir tatminden ziyade; "uğruna yaşanacak (mücadele edilecek) başka bir amacın kalmamasından" doğan o devasa ve korkunç bir (varoluşsal) boşluk/melankoli hissini',
      'Denizcilik (donanma) bilgisinin yetersizliğinden dolayı okyanusu geçememe çaresizliğini'
    ],
    correct: 2,
    explanation: 'Fethedecek yer kalmadığı için ağlaması; hedefe (zirveye) tam olarak ulaşıldığında uğruna yaşanacak amacın bitmesiyle ortaya çıkan o korkunç (tatmin yerine geçen) varoluşsal boşluk/melankoli hissini sembolize eder.'
  },
  {
    title: 'Kelebek ve Dalgıç Giysisi (Bilinçli Koma)',
    passage: 'Fransız yazar Jean-Dominique Bauby, 43 yaşındayken ani bir felç (Locked-in / İçe hapsolma Sendromu) geçirir. Beyni kusursuz çalışmaktadır, çevresinde olup biten her şeyi, konuşulanları ve acıyı net bir şekilde duyar (hisseder); ancak bedeni tamamen felçtir. Nefes almak dahi makineye bağlıdır. Sadece sol göz kapağını hareket ettirebilmektedir! Bauby, bir okyanusun dibinde ağır bir "dalgıç giysisi" içine hapsolmuş bu çaresiz bedene rağmen teslim olmaz. Sol gözünü asistanına kırparak harfleri tek tek seçer (göz kırpmalarıyla koca kelimeler, sayfalar kurar) ve "Kelebek ve Dalgıç Giysisi" adında dünya edebiyatına geçen o efsanevi romanı yazar. Beden ağır bir zindanda (dalgıç giysisi) çürürken bile, insan zihni ve hayal gücü bir kelebek gibi kozasından çıkıp tüm evreni kanatlandırabilecek (sınır tanımaz) o ilahi ve yenilmez özgürlüğe sahiptir.',
    questionStem: 'Jean-Dominique Bauby\'nin felçli bedeniyle (sadece göz kapağını kullanarak) bir roman yazması, varoluşsal olarak neyi kanıtlar?',
    options: [
      'Tıp teknolojisinin ilerlemesiyle felçli insanların kas hareketlerini geri kazanabileceğini',
      'Fransız edebiyatının sadece trajedi ve acı çeken yazarlar tarafından şekillendirildiğini',
      'İnsan bedeninin tamamen işlevsiz, karanlık ve ağır bir hapishaneye (dalgıç giysisine) dönüştüğü en çaresiz anlarda bile; insan zihninin, hayal gücünün ve iradesinin (yaratıcılığının) o zindanı aşarak sınır tanımaz bir özgürlüğe (kelebeğe) dönüşebileceğini',
      'Hastanelerdeki hemşirelerin hastalarla duygusal bir bağ kurmasının tedavi sürecine zarar verdiğini'
    ],
    correct: 2,
    explanation: 'Bedeni tamamen felçliyken sadece göz kırparak bir roman yazması; bedenin (dalgıç giysisinin) tutsaklığına rağmen insan zihninin ve hayal gücünün (iradesinin) kelebek gibi sınır tanımaz bir özgürlüğe ulaşabileceğini kanıtlar.'
  },
  {
    title: 'Vasatlık İlkesi (Mediocrity Principle)',
    passage: 'Binlerce yıl boyunca insanoğlu, kendini evrenin en kıymetli (biricik) çocuğu sandı. Dünya, evrenin merkezindeydi; güneş ve yıldızlar bizim etrafımızda bir fener gibi dönüyordu. Önce Kopernik, dünyayı merkeze almaktan çıkarıp onu Güneş\'in etrafında dönen sıradan bir taşa çevirdi. Ardından Hubble, bizim Güneşimizin de milyarlarca galaksinin içindeki "önemsiz, kenarda köşede kalmış" bir toz zerresi olduğunu kanıtladı. Bilimde "Vasatlık İlkesi" (Mediocrity Principle) olarak adlandırılan bu acımasız kural; Dünya\'nın, Güneş sisteminin, evrimin ve bizzat insanın evrende kesinlikle hiçbir özel, imtiyazlı veya kutsal konuma (merkeze) sahip olmadığını fısıldar. İstatistiksel olarak o karanlık kozmik okyanusta, tamamen sıradan, öngörülebilir ve "vasat (ortalama)" bir köşede kendi kibirli rüyalarımızı izliyoruz. Tanrıların favorisi değil, sonsuzluğun o sessiz (ve sıradan) bir figüranıyız.',
    questionStem: 'Vasatlık İlkesi (Mediocrity Principle), insanın evrendeki konumuna dair hangi köklü miti (yanılgıyı) yerle bir eder?',
    options: [
      'Gezegenlerin ve yıldızların birbirleriyle çekim kuvveti dışında hiçbir fiziksel bağı olmadığı gerçeğini',
      'İnsanoğlunun zekâsının teknolojik aletler üretebilecek kadar evrimleşemeyeceği teorisini',
      'İnsanoğlunun, Dünya\'nın ve varoluşumuzun (tarihimizin), bu uçsuz bucaksız evrenin tam "merkezinde", son derece eşsiz, imtiyazlı ve özel (kutsal) bir yere sahip olduğu yönündeki o narsisistik ve kurgusal inancı (kibri)',
      'Güneş sistemindeki gezegenlerin isimlerinin Roma mitolojisinden gelmesinin bilimsel araştırmaları yavaşlattığını'
    ],
    correct: 2,
    explanation: 'Kopernik ve Hubble\'ın bizi merkezden çıkarıp "sıradan bir toz zerresi (vasat/ortalama)" olduğumuzu kanıtlaması; insanın evrende özel, eşsiz ve merkezde (kutsal) olduğu yönündeki o kurgusal ve narsisistik inancı (kibri) yerle bir eder.'
  },
  {
    title: 'Malthus Tuzağı (Kıyametin Matematiği)',
    passage: '18. yüzyılda İngiliz din adamı ve ekonomist Thomas Malthus, insanlığın geleceğine dair o soğuk, karanlık ve efsanevi matematik kehanetini yazdı. "Malthus Tuzağı"na göre; insan nüfusu geometrik olarak (katlanarak: 1, 2, 4, 8, 16...) çoğalır ve kontrol edilemez bir hızla patlar. Oysa tarımsal üretim ve gıda kaynakları sadece aritmetik olarak (1, 2, 3, 4...) artabilir. Bu matematiksel uçurumun tek bir sonucu vardır: İnsanlık, er ya da geç yeryüzünün (doğanın) kendisini besleyebileceği o mutlak sınırı aşacaktır! O an geldiğinde doğa merhamet etmez; kendi dengesini bulmak için devreye açlık (kıtlık), ölümcül salgın hastalıklar ve kaynak savaşları girer. Kendi ellerimizle yarattığımız o aşırı nüfus fazlası (kibirli büyüme), eninde sonunda mahşerin atlıları (ölüm ve kaos) tarafından acımasızca tırpanlanacak ve dünya, kendi matematiğini (dengesini) o kanlı yolla yeniden kuracaktır.',
    questionStem: 'Malthus Tuzağı kavramı, insanlığın geleceği (ve demografisi) hakkında nasıl bir matematiksel (kötümser) kehanet sunar?',
    options: [
      'Bilgisayarların ve teknolojinin gelişmesiyle birlikte tarım işçilerine olan ihtiyacın tamamen biteceğini',
      'Nüfusun katlanarak büyümesine karşın gıda (kaynak) artışının aynı hızda olamayacağı; bu yüzden "sınırsız büyüme ve refah" hayalinin kırılarak, doğanın açlık, savaş ve hastalıklarla bu nüfus fazlasını acımasızca budayacağı (kanlı bir denge kuracağı) gerçeğini',
      'İnsanların çok fazla üremesinin gezegenin yörüngesinde sapmalara neden olacak bir ağırlık yaratacağını',
      'Zengin ülkelerin fakir ülkelere gıda yardımı yapmasının dünya barışını sonsuza dek sağlayacağını'
    ],
    correct: 1,
    explanation: 'Nüfusun katlanarak (geometrik) artıp gıdanın o hızda artamaması (Malthus Tuzağı); bu uçurumun eninde sonunda savaş, açlık ve hastalıkla (doğanın tırpanıyla) kanlı bir şekilde dengeleneceği (budanacağı) şeklindeki kötümser kehaneti ifade eder.'
  }
];

export const felsefeParagrafSorulari27: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_27.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_27[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe27-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
const PARAGRAPH_THEMES_28 = [
  {
    title: 'Büyük Engizisyoncu (Özgürlüğün Yükü)',
    passage: 'Dostoyevski\'nin "Karamazov Kardeşler" romanında, İsa yüzyıllar sonra yeryüzüne (İspanya\'ya) döner. Ancak onu karşılayan Kilise\'nin Büyük Engizisyoncu\'su, İsa\'yı kucaklamak yerine onu anında zindana atar! Hücrede İsa\'ya şu kan dondurucu felsefi gerçeği haykırır: "Sen insanlara özgürlüğü ve kendi kararlarını verme (irade) hakkını getirerek onlara en büyük kötülüğü yaptın! Çünkü insanoğlu zayıftır; özgürlüğün getirdiği o korkunç sorumluluk yükünü kaldıramaz. Onlar aslında özgürlük değil, sadece karınlarını doyuracak ekmek ve itaat edecekleri (onların yerine karar verecek) mutlak bir otorite (kölelik) isterler." Büyük Engizisyoncu; kitlelerin aslında özgür olmaktan ne kadar dehşet duyduğunu, kendi vicdanlarının yükünden kurtulmak için güvenlik (ve ekmek) uğruna köleliği nasıl gönüllü olarak seçeceğini anlatan tarihin en sert siyasi ve psikolojik manifestosudur.',
    questionStem: 'Dostoyevski\'nin "Büyük Engizisyoncu" bölümünde insan doğasına (ve kitle psikolojisine) yöneltilen asıl felsefi eleştiri nedir?',
    options: [
      'Din adamlarının her zaman kendi çıkarlarını korumak için siyaseti kullandıkları gerçeği',
      'İnsanoğlunun, özgür iradenin ve kendi kararlarını vermenin getirdiği o devasa sorumluluk yükünden (korkudan) kaçarak; güvenlik ve maddi rahatlık (ekmek) uğruna otoriteye boyun eğmeyi (gönüllü köleliği) tercih eden zayıf bir varlık olduğu',
      'Orta Çağ Avrupa\'sında yoksulluğun insanları mecburen suç işlemeye ittiği',
      'İnsanların sadece doğaüstü mucizeler gördüklerinde otoriteye itaat ettiği inancı'
    ],
    correct: 1,
    explanation: 'İsa\'nın getirdiği "özgürlük ve irade" yükünü insanların kaldıramayacağı, bunun yerine ekmek ve güvenlik uğruna gönüllü köleliği (itaati) seçecekleri tespiti yapılmıştır.'
  },
  {
    title: 'Körlük Alegorisi (Saramago)',
    passage: 'José Saramago\'nun "Körlük" adlı şaheserinde, bir şehirde aniden ve bulaşıcı bir şekilde insanlar kör olmaya başlar. Ancak bu körlük karanlık değil, bembeyaz ve süt gibi bir körlüktür. Devlet hastaları boş bir tımarhaneye kapatır. Kuralların, otoritenin ve gören gözlerin (toplumsal denetimin) kaybolduğu bu izole ortamda, medeniyet saniyeler içinde çöker. İnsanlar bir dilim ekmek için birbirini ezer, güç çeteleri kurulur ve ahlak tamamen buharlaşır. Saramago bu distopyayla göz hastalıklarını anlatmaz; o, "medeniyet, kibarlık ve insanlık" dediğimiz o incecik örtünün, sadece ve sadece "başkaları bizi izlediği (görebildiği) için" var olduğunu yüzümüze çarpar. Bakan gözler kapandığında, insanın içindeki o vahşi, ilkel ve ahlaksız hayvan anında zincirlerini kırar.',
    questionStem: 'Saramago\'nun "Körlük" romanı, insan ahlakı ve medeniyet kavramı hakkında neyi sembolize etmektedir?',
    options: [
      'Salgın hastalıkların modern devletlerin sağlık sistemlerini nasıl çökerttiğini',
      'Ahlakın ve medeni davranışların içsel bir erdemden ziyade, "diğer insanların bizi görmesi ve yargılaması (toplumsal denetim)" korkusuna dayandığını; bu denetim (gözler) kalktığında insanın anında vahşileşeceğini',
      'Fiziksel engellerin insanların empati kurma yeteneğini tamamen geliştirdiğini',
      'Tımarhanelerin ve hapishanelerin insan psikolojisini iyileştirmede yetersiz kaldığını'
    ],
    correct: 1,
    explanation: 'Gözler kör olduğunda (toplumsal denetim/izlenme kalktığında) ahlakın anında çökmesi; medeniyetin içsel bir erdem değil, "izlenme korkusuna" dayanan ince bir örtü olduğunu sembolize eder.'
  },
  {
    title: 'Wittgenstein\'ın Aslanı (Dilin Sınırları)',
    passage: '20. yüzyılın en büyük filozoflarından Ludwig Wittgenstein, "Felsefi Soruşturmalar" adlı eserinde insan algısını felç eden şu meşhur cümleyi kurar: "Eğer bir aslan konuşabilseydi bile, biz onu anlayamazdık." Bu cümle, hayvanların dil yeteneğini değil, dilin ve gerçekliğin doğasını açıklar. Dil sadece kelimelerden ibaret değildir; dil, yaşanılan kültürün, fiziksel bedenin ve deneyimlerin (yaşam biçiminin) bir sonucudur. Aslanın dünyayı algılayış biçimi, avlanması, içgüdüleri ve yaşam formu bizimkinden öylesine farklıdır ki; aslan İngilizce veya Türkçe konuşsa bile, onun kullandığı kelimelerin altındaki anlam dünyası (kavramları) bizim zihnimizle asla örtüşemez. Gerçeklik evrensel değildir; kullandığımız dilin ve yaşadığımız bedenin sınırları içine hapsolmuş yapayalnız bir kurgudur.',
    questionStem: 'Wittgenstein\'ın "Bir aslan konuşabilseydi bile onu anlayamazdık" sözüyle felsefi olarak savunduğu temel argüman nedir?',
    options: [
      'Hayvanların ses tellerinin insan kelimelerini telaffuz etmeye uygun olmadığı',
      'Farklı dilleri konuşan insan topluluklarının birbirleriyle asla barış içinde yaşayamayacağı',
      'Dilin ve kavramların sadece kelimelerden değil, o canlının "yaşam biçiminden (tecrübelerinden)" doğduğu; farklı bir yaşam formuna (aslana) ait gerçekliğin, bizim algı (dil) sınırlarımızla asla anlaşılamayacağı (örtüşemeyeceği)',
      'Aslanların doğuştan saldırgan oldukları için felsefi ve mantıksal cümleler kuramayacağı'
    ],
    correct: 2,
    explanation: 'Dilin yaşam biçimiyle (tecrübeyle) şekillendiği; aslan konuşsa bile onun yaşam formu farklı olduğu için kelimelerinin bizim algı/anlam dünyamızla asla örtüşmeyeceği savunulur.'
  },
  {
    title: 'Giordano Bruno\'nun Ateşi (Sonsuz Evren)',
    passage: '1600 yılında Roma\'da Engizisyon mahkemesi, filozof Giordano Bruno\'yu diri diri yakarak idam etti. Onun suçu, dönemin Kilise dogmalarını yıkarak "Evrenin sonsuz olduğunu, yıldızların aslında birer Güneş olduğunu ve etraflarında başka dünyaların, başka yaşamların (uzaylıların) olabileceğini" savunmasıydı. İdam sehpasına bağlanırken yüzüne haç uzatıldığında Bruno başını çevirmiş ve hakkındaki ölüm kararını okuyan yargıçlara şu efsanevi sözü söylemiştir: "Bu kararı okurken, siz benden çok daha fazla korkuyorsunuz!" Bruno, inatla savunduğu bilimsel ve felsefi hakikat uğruna, boyun eğmek (veya Galilei gibi geri adım atmak) yerine bedeniyle ateşe yürümeyi seçti. O alevler, cehaletin aklı yakma çabası değil; aydınlanmanın, dogmalara karşı kendi bedeniyle yaktığı sönmez bir meşaledir.',
    questionStem: 'Giordano Bruno\'nun diri diri yakılmayı göze alması, bilim ve felsefe tarihinde neyin en güçlü sembolüdür?',
    options: [
      'Kiliselerin Orta Çağ\'da suçluları cezalandırmak için en pratik yöntemleri kullandığının',
      'Bilim insanlarının toplumdan izole yaşayarak kendilerini bilerek tehlikeye attıklarının',
      'İnsanın ulaştığı felsefi (bilimsel) hakikate duyduğu sarsılmaz sadakatin; otoritenin, dogmaların ve ölüm korkusunun (ateşin) bile üstesinden gelerek boyun eğmemesinin (aydınlanma cesaretinin)',
      'Güneş sistemi teorisinin o dönemde henüz matematiksel olarak kanıtlanamamış olmasının'
    ],
    correct: 2,
    explanation: 'Sonsuz evren hakikatinden vazgeçmeyip ateşe (ölüme) yürümesi; aklın ve hakikatin dogmalara/korkuya karşı gösterdiği sarsılmaz cesaretin (aydınlanmanın) sembolüdür.'
  },
  {
    title: 'Caffa Kuşatması (Biyolojik Savaşın Doğuşu)',
    passage: '1346 yılında Karadeniz kıyısındaki Caffa (Kefe) kalesini kuşatan Cenevizlilere karşı Moğol ordusu saldırıya geçmişti. Ancak Moğolların asıl düşmanı surlar değil, kendi ordugâhlarında patlak veren Veba salgınıydı. Moğol komutanı, savaşı kaybetmek üzereyken tarihin en şeytani ve apokaliptik stratejisini uyguladı: Vebadan ölen kendi askerlerinin şişmiş ve çürümüş cesetlerini mancınıklara yükleyip Caffa kalesinin surlarından içeri fırlattı! Kalenin içine yağan bu biyolojik kıyamet, Cenevizlileri dehşete düşürdü. Hastalığa yakalanan tüccarlar gemilerle İtalya\'ya kaçtılar ve Veba\'yı (Kara Ölüm) tüm Avrupa\'ya yayarak nüfusun üçte birinin ölümüne neden oldular. Mancınıktan fırlatılan o hastalıklı cesetler, insanın kazanma hırsı uğruna doğanın en karanlık silahlarını (mikropları) bile nasıl acımasızca kullanabileceğinin tarihteki ilk ve en ölümcül kanıtıdır.',
    questionStem: 'Caffa Kuşatması\'nda Moğolların vebalı cesetleri kaleye fırlatması, savaş tarihi açısından neyin (karanlık) dönüm noktasıdır?',
    options: [
      'Kuşatma savaşlarında surları yıkmak için kullanılan taşların yerini organik maddelerin almasının',
      'Kazanma hırsı uğruna, düşmanı yok etmek için doğanın görünmez ve ölümcül silahlarının (salgın hastalıkların/biyolojik savaşın) kasten ve stratejik olarak kullanılmasının ilk örneği olmasının',
      'Askeri birliklerin kendi ölülerini gömmek yerine düşman topraklarına bırakma geleneğinin',
      'Avrupa nüfusunun aslında savaşlardan çok göçler nedeniyle azalmasının'
    ],
    correct: 1,
    explanation: 'Ölü cesetlerin (vebanın) kasten mancınıkla atılması; düşmanı yok etmek için salgın hastalıkların kasten silah olarak kullanılmasının (biyolojik savaşın) karanlık dönüm noktasıdır.'
  },
  {
    title: 'Leminglerin Sahte İntiharı (Belgesel Yalanı)',
    passage: 'Onyıllar boyunca insanlar, "Leming" adı verilen küçük kemirgenlerin, nüfusları arttığında sürü psikolojisiyle uçurumlardan atlayarak topluca intihar ettiklerine inandılar. "Leming gibi körü körüne ölüme gitmek" deyimi bile buradan doğdu. Oysa bu, tarihin en büyük medya sahtekârlıklarından biridir! 1958 yapımı Walt Disney belgeseli "Beyaz Çöl" (White Wilderness) çekilirken, ekip yeterince etkileyici bir doğa olayı bulamayınca; Kanada\'dan aldıkları birkaç düzine zavallı lemingi, dönen bir platformun üzerine koyup onları zorla uçurumdan aşağı (nehre) fırlattılar ve bunu "doğal bir intihar" gibi kurgulayarak (montajlayarak) yayınladılar. Milyonların inandığı bu "evrimsel trajedi", aslında reyting ve dram yaratmak uğruna gerçeği katleden (ve cinayet işleyen) vahşi bir medya illüzyonundan ibarettir.',
    questionStem: 'Leminglerin intihar efsanesinin bir belgesel kurgusu (yalan) olduğunun ortaya çıkması, neyin sarsıcı bir eleştirisidir?',
    options: [
      'Hayvanların nüfus planlaması yapmak için intihar ettiklerine dair biyolojik teorilerin',
      'İzleyicide dram ve reyting (etki) yaratmak uğruna; doğanın ve gerçeğin, büyük medya gücü (ve kurgu) tarafından nasıl acımasızca bükülüp sahte bir efsaneye (ve cinayete) dönüştürüldüğünün',
      'Kutup bölgelerinde çekilen belgesellerin teknik imkânsızlıklar yüzünden hep hatalı olmasının',
      'Kemirgenlerin aslında yüzme bildiği için uçurumdan atlamalarının tehlikeli olmadığının'
    ],
    correct: 1,
    explanation: 'Reyting ve dram için hayvanların zorla uçurumdan atılıp intihar efsanesi (yalan) yaratılması; medyanın gerçeği nasıl büküp sahte efsaneler (illüzyonlar) yarattığının eleştirisidir.'
  },
  {
    title: 'Sessiz Bahar (Rachel Carson)',
    passage: '1962 yılında Amerikalı biyolog Rachel Carson, "Sessiz Bahar" (Silent Spring) adlı kitabını yayımladı. Kitap kurgusal değil, apokaliptik bir bilimsel gerçeklikti. Tarımda mucizevi bir kurtarıcı olarak sunulan DDT gibi kimyasal böcek ilaçlarının, sadece böcekleri değil; besin zinciri yoluyla kuşları, balıkları ve nihayetinde insanları nasıl zehirlediğini anlattı. Carson, kimya şirketlerinin milyar dolarlık tehditlerine ve "cahil, histerik bir kadın" iftiralarına rağmen geri adım atmadı. Eserinin başlığı şu kâbusu tasvir ediyordu: Bir gün bahar gelecek, ancak dallarda ötecek (şarkı söyleyecek) tek bir kuş bile kalmayacak; doğa tamamen sessizleşecek. Carson\'ın bu direnişi, modern çevreci hareketin doğuşunu sağlamış ve insanın doğaya hükmetme kibrinin, kendi sonunu hazırlayan kimyasal bir intihar olduğunu kanıtlamıştır.',
    questionStem: 'Rachel Carson\'ın "Sessiz Bahar" adlı eseri (ve direnişi), sanayi ve doğa ilişkisi üzerine hangi gerçeği topluma haykırmıştır?',
    options: [
      'Kuşların göç yollarının rüzgâr santralleri yüzünden değişmesinin tarımı etkilediğini',
      'Sınırsız tarımsal kâr ve teknoloji (ilaç) kibrinin, besin zincirini zehirleyerek doğanın sesini (kuşları) ve dengesini tamamen yok edecek (kendi kendini zehirleyecek) bir intihar olduğunu',
      'Kimyasal ilaçların sadece sıcak iklimlerde zararlı yan etkiler gösterdiğini',
      'Kadın bilim insanlarının tarım sektöründe erkeklerden daha başarılı projelere imza attığını'
    ],
    correct: 1,
    explanation: 'Kâr uğruna doğaya sıkılan zehrin (DDT) kuşları susturup ekosistemi yok etmesi; insanın doğaya hükmetme kibrinin aslında kendi kendini zehirleyen bir intihar olduğunu vurgular.'
  },
  {
    title: 'Bovaryzm (Kurguya Âşık Olmak)',
    passage: 'Gustave Flaubert\'in "Madam Bovary" adlı romanının başkarakteri Emma Bovary, taşrada sıradan ve sıkıcı bir evlilik yaşamaktadır. Ancak onun asıl trajedisi kocası veya kasaba değildir; onun trajedisi, okuduğu romantik şövalye romanlarındaki o tutkulu, şatafatlı ve abartılı aşklara (kurgulara) inanmasıdır. Hayatının da o romanlardaki gibi kusursuz ve heyecanlı olması gerektiğine inanır. Bu sahte beklentiyi karşılamak için yalanlar söyler, lüks eşyalar alır, borca batar ve yasak aşklara yelken açar. Ancak gerçek hayat hiçbir zaman o kâğıt üzerindeki kurguya uymaz ve Emma sonunda zehir içerek acı içinde can verir. Psikolojiye "Bovaryzm" olarak geçen bu sendrom; insanın kendisine sunulan (romanlar veya sosyal medya aracılığıyla) o sahte, parıltılı ve idealleştirilmiş hayat kurgusuna âşık olup, kendi "gerçek ve sıradan" hayatını iğrenç bularak kendi elleriyle mahvetmesi (yıkıma sürüklemesi) hastalığıdır.',
    questionStem: 'Bovaryzm (Madam Bovary Sendromu) kavramı, modern insanın hangi tehlikeli psikolojik yanılgısını tanımlar?',
    options: [
      'Sıradan insanların büyük şehirlerde yaşayamama ve taşraya geri dönme arzusunu',
      'Romanlarda (veya medyada) sunulan o sahte, idealleştirilmiş ve kusursuz kurgulara körü körüne âşık olup; kendi sıradan gerçekliğini reddederek bu ulaşılamaz hayal uğruna kendini yıkıma (borca/felakete) sürükleme hastalığını',
      'İnsanların sadece trajedi kitapları okuduklarında depresyona girmesini',
      'Yasak aşkların her zaman edebi eserlere ilham veren en güçlü motivasyon olmasını'
    ],
    correct: 1,
    explanation: 'Emma\'nın romanlardaki hayata özenip kendi gerçeğini reddederek yıkıma gitmesi; kurguya/sahteliğe âşık olup gerçeklikten kopma (Bovaryzm) hastalığını tanımlar.'
  },
  {
    title: 'Arthur Eddington ve Einstein (Bükülen Işık)',
    passage: '1919 yılına kadar dünya, Isaac Newton\'ın değişmez ve mutlak fizik kurallarıyla yönetildiğine inanıyordu: Uzay sabitti, zaman mutlaktı ve ışık her zaman düz bir çizgide ilerlerdi. Ancak Albert Einstein "Genel Görelilik" teorisiyle büyük kütleli nesnelerin (Güneş\'in) uzayı ve zamanı bir trambolin gibi büktüğünü, dolayısıyla ışığın da bükülmesi gerektiğini iddia etti. Bu deli saçması iddiayı kanıtlamak için İngiliz astronom Arthur Eddington, Afrika açıklarında tam Güneş tutulması sırasında yıldızların fotoğraflarını çekti. Güneşin arkasında kalan yıldızların ışığı, gerçekten de Güneşin kütleçekimi yüzünden bükülerek (merceklenerek) dünyaya ulaşmıştı! Eddington\'ın çektiği o tek bir fotoğraf karesi, Newton\'ın 250 yıllık sarsılmaz tahtını yıktı. Evrenin düz, katı ve sabit bir kutu olmadığı; kütle ve zamanın esneyip bükülebildiği o esnek, tuhaf ve dâhiyane gerçeklik kanıtlandı.',
    questionStem: 'Arthur Eddington\'ın Güneş tutulması deneyi, bilim tarihindeki algımızı nasıl (radikal biçimde) değiştirmiştir?',
    options: [
      'Güneşin çekim gücünün dünyadaki okyanus sularını yavaş yavaş buharlaştırdığını kanıtlayarak',
      'Newton\'ın o "sabit, düz ve mutlak" evren algısını yıkarak; kütlenin ve uzay-zamanın büküldüğü, ışığın bile esnediği (Einstein\'ın) o esnek, tuhaf ve göreceli gerçeklik modelini doğrulayarak',
      'Yıldızların güneş tutulması sırasında sadece Afrika kıtasından net olarak izlenebileceğini göstererek',
      'İngiliz ve Alman bilim insanlarının birlikte çalışamayacağı yönündeki siyasi algıyı destekleyerek'
    ],
    correct: 1,
    explanation: 'Tutulma sırasında ışığın büküldüğünün kanıtlanması; Newton\'un sabit/mutlak evren algısını yıkıp, Einstein\'ın bükülen/esnek (göreceli) evren modelini doğrulamıştır.'
  },
  {
    title: 'Heaven\'s Gate Tarikatı (İnancın Cinneti)',
    passage: '1997 yılında Hale-Bopp kuyrukluyıldızı Dünya\'nın yakınından geçerken, gökyüzünde muazzam bir görsel şölen sundu. Ancak California\'da "Heaven\'s Gate" (Cennetin Kapısı) adında bir tarikatın üyeleri için bu bir doğa olayı değil, kurtuluş biletiydi. Tarikatın lideri, o kuyrukluyıldızın arkasında devasa bir uzay gemisinin gizlendiğine ve dünyadaki bedenlerinden (araçlardan) kurtulurlarsa ruhlarının o gemiye ışınlanacağına inandırdı onları. Hepsi aynı siyah kıyafetleri giyip, aynı spor ayakkabıları takarak zehirli elma püresi yediler ve 39 kişi aynı anda (huzur içinde) intihar etti. Bu kan donduran olay; insanın aidiyet hissetme, üstün bir amaca inanma ve ölümden kaçma arzusunun; akıl ve mantıktan koptuğunda onu en absürt, en irrasyonel ve en ölümcül cinnete bile (gülümseyerek) sürükleyebileceğinin karanlık bir kanıtıdır.',
    questionStem: 'Heaven\'s Gate (Cennetin Kapısı) tarikatının toplu intiharı, insan psikolojisi ve "inanç" kavramı üzerine nasıl bir uyanış/eleştiri sunar?',
    options: [
      'Kuyrukluyıldızların yaydığı radyasyonun insan beyninde kalıcı halüsinasyonlara ve depresyona yol açtığı gerçeğini',
      'İnsanın yüce bir anlama ve aidiyete olan derin (karanlık) açlığının; aklın sınırlarından koptuğunda, en mantıksız ve absürt (uzay gemisine ışınlanma) yalanlara bile inanarak kişiyi gönüllü bir ölüm cinnetine sürükleyebileceğini',
      'Siyah kıyafetlerin ve tek tip giyinmenin tarikatlarda disiplini sağlamak için her zaman işe yaradığını',
      'Modern uzay araştırmalarının halk arasında her zaman büyük bir coşku ve bilimsel aydınlanma yarattığını'
    ],
    correct: 1,
    explanation: 'Kuyrukluyıldızın ardındaki sahte gemiye inanıp 39 kişinin zehir içmesi; insanın "anlam ve aidiyet" açlığının aklı devreden çıkarıp onu en absürt/ölümcül cinnete sürükleyebileceğini kanıtlar.'
  },
  {
    title: 'Frenoloji (Bilim Maskeli Irkçılık)',
    passage: '19. yüzyılda "Frenoloji" adı verilen bir sözde-bilim (pseudoscience) Avrupa ve Amerika\'da fırtınalar kopardı. Bu teoriye göre, bir insanın zekâsı, ahlakı ve hatta "suç işlemeye yatkın olup olmadığı", kafatasının dışındaki girinti ve çıkıntıların (şeklinin) ölçülmesiyle kesin olarak anlaşılabiliyordu! Doktorlar, pergel ve cetvellerle insanların kafalarını ölçüp "Bu adamın hırsızlık çıkıntısı var, bu kişi doğuştan köle ruhlu" gibi korkunç raporlar yazdılar. Elbette bunun hiçbir anatomik gerçeği yoktu; Frenoloji, sömürgecilerin, ırkçıların ve zenginlerin, alt sınıfları ve farklı ırkları ezmek (onları aşağılamak) için uydurdukları koca bir yalandı. Olayın asıl ürkütücü yanı, cehaletin değil; "ırkçılığın ve ayrımcılığın", üzerine "beyaz önlük" giyip bilim (otorite) kılığına büründüğünde kitleler tarafından nasıl kusursuz ve sorgulanamaz bir hakikat gibi (körü körüne) kabul edilebildiğidir.',
    questionStem: 'Frenoloji (Kafatası Bilimi) fantezisi, bilim tarihi ve toplumsal algı hakkında hangi tehlikeli gerçeği ifşa etmektedir?',
    options: [
      'İnsan beyninin boyutunun zekâ seviyesiyle her zaman doğrudan (matematiksel) bir orantı içinde olduğunu',
      'Tıbbi aletlerin ve cetvellerin o dönemde kafatası kemiklerini ölçmek için çok ilkel ve yetersiz kaldığını',
      'Irkçılık, ayrımcılık ve sömürü niyetlerinin; üzerine "bilimsel teori (beyaz önlük)" maskesi geçirip otorite kılığına girdiğinde, toplumlar tarafından sorgulanmadan "mutlak hakikat" sanılarak kabul edilebilme (kandırılma) tehlikesini',
      'Psikoloji biliminin suçluları tespit etmekte anatomi biliminden daha başarısız olduğunu'
    ],
    correct: 2,
    explanation: 'Kafatası ölçerek insanların suçlu/köle ilan edilmesi; ırkçılık ve sömürünün "bilim/otorite" maskesi takarak topluma kendini mutlak gerçek gibi yutturabildiği (ve meşrulaştırdığı) gerçeğini ifşa eder.'
  },
  {
    title: 'Yorgunluk Toplumu (Gönüllü Sömürü)',
    passage: 'Güney Koreli filozof Byung-Chul Han, "Yorgunluk Toplumu" adlı eserinde modern insanın trajedisini sarsıcı bir dille anlatır. Geçmişte insanlar "yapmalısın!" (disiplin ve emir) diyen zalim patronlar, krallar veya kurallar tarafından sömürülürdü. Oysa günümüzde bu dışsal kırbaç ortadan kalkmıştır. Yerini "Yapabilirsin!" (başarabilirsin, limitlerini aş, sürekli geliş) diyen o sahte ve zehirli "pozitiflik (motivasyon)" almıştır. Modern insan, başarılı olmak (ve o parıltılı düzene ayak uydurmak) uğruna kendini o kadar acımasızca, gece gündüz çalışmaya ve yarışmaya zorlar ki; ortada onu ezen bir patron kalmamıştır, insan bizzat kendi kendisinin en zalim sömürücüsü (efendisi) ve kölesi olmuştur. Kendi isteğiyle (gönüllü olarak) tükenene kadar koştuğu bu performans cehennemi, dışarıdan gelen bir işkence değil, narsisistik bir "içsel intihardır".',
    questionStem: 'Byung-Chul Han\'ın "Yorgunluk Toplumu" tezine göre, modern insanın geçmişteki insanlardan ayrılan asıl (ve trajik) "sömürü" biçimi nedir?',
    options: [
      'Fabrikalardaki çalışma saatlerinin geçmiş yüzyıllara göre çok daha fazla uzamış olması',
      'İnsanın artık dışarıdan emir veren zalim bir otorite tarafından değil; "yapabilirsin/başarmalısın" diyen o zehirli pozitifliğe kanarak, kendi rızasıyla bizzat kendi kendini sömüren ve tüketen gönüllü bir köleye dönüşmesi',
      'İnsanların bedensel işler yerine sadece zihinsel (masa başı) işler yaparak fiziksel olarak zayıflaması',
      'Teknolojinin gelişmesiyle birlikte insanların iş bulamama (işsizlik) korkusuyla bunalıma girmesi'
    ],
    correct: 1,
    explanation: 'Dış kırbacın ("yapmalısın") yerini, insanın kendi kendine uyguladığı "başarabilirsin" baskısının alması; modern insanın kendi kendini gönüllü olarak sömüren bir köleye (narsisistik yıkıma) dönüştüğünü gösterir.'
  },
  {
    title: 'Ludovico Tekniği (Zorunlu İyilik)',
    passage: 'Anthony Burgess\'in distopik başyapıtı "Otomatik Portakal"da, şiddet bağımlısı bir sosyopat olan Alex hapishaneye düşer. Devlet onu iyileştirmek (topluma kazandırmak) için "Ludovico Tekniği" adı verilen karanlık bir deney uygular. Alex\'in göz kapakları açık tutulur, ona mide bulandırıcı ilaçlar verilir ve günlerce aralıksız olarak şiddet ve tecavüz filmleri izletilir. Sonunda Alex öyle bir şartlanır ki; ne zaman birine şiddet uygulamayı (veya klasik müzik dinlemeyi) aklından geçirse, midesi bulanır ve fiziksel olarak acı çekip felç olur. Devlet onu "iyileştirdiğini" iddia eder. Ancak hapishane rahibi o sarsıcı felsefi isyanı dile getirir: "İyilik, içten gelen bir seçim olmalıdır. Bir insanı şiddet yapamayacak şekilde (bir makine gibi) kurguladığınızda, onu iyi yapmış olmazsınız; onu seçme özgürlüğü elinden alınmış (ahlaktan yoksun) bir kurmalı oyuncağa çevirmiş olursunuz. Özgür irade yoksa, iyiliğin hiçbir anlamı yoktur."',
    questionStem: '"Otomatik Portakal" romanındaki Ludovico Tekniği uygulaması, "Ahlak ve İyilik" kavramları üzerine nasıl bir felsefi itiraz barındırır?',
    options: [
      'Suçluların şiddet içerikli filmler izleyerek empati yeteneklerini geri kazanabileceği teorisi',
      'Ahlakın ve "iyi" olmanın, dışarıdan gelen bir dayatma (veya fiziksel şartlanma) ile sağlanamayacağı; kişinin kötü olma seçeneği (özgür iradesi) elinden alındığında, sergilediği o zorunlu iyiliğin tamamen anlamsız (ve robotik) olduğu gerçeği',
      'Modern devletlerin suç oranlarını azaltmak için hapishaneleri kapatıp hastaneler inşa etmesi gerektiği',
      'Müzik ve sanatın insan psikolojisini bozarak onları şiddete yönelttiği yönündeki iddia'
    ],
    correct: 1,
    explanation: 'Şiddet yapamaması için fiziksel olarak şartlandırılan Alex\'in aslında "iyi" olmadığı; çünkü ahlakın ve iyiliğin ancak "kötü olma özgürlüğü (iradesi)" varken yapılan bir "seçim" olduğunda anlam taşıdığı (irade yoksa iyiliğin de olmadığı) savunulur.'
  },
  {
    title: 'Thanatos (Ölüm ve Yıkım İçgüdüsü)',
    passage: 'Sigmund Freud, hayatının büyük kısmında insanın tüm eylemlerini hayatta kalma ve üreme (Eros/Yaşam İçgüdüsü) üzerine kurduğunu savundu. Ancak Birinci Dünya Savaşı\'nın o anlamsız ve devasa siper katliamlarına tanık olduğunda, sadece yaşama arzusuyla bu akıl dışı vahşetin açıklanamayacağını anladı. İnsanlık neden durup dururken kendi kurduğu şehirleri, bedenleri ve medeniyetleri gözünü kırpmadan yok ediyordu? Freud, "Thanatos" (Ölüm İçgüdüsü) kavramını ortaya attı. Ona göre insanın en derinlerinde sadece var olma (inşa etme) arzusu değil; aynı zamanda her şeyi sıfırlama, parçalama, yok etme ve o en baştaki "cansız, sessiz inorganik hiçliğe (ölüme)" geri dönme (kendi kendini imha etme) yönünde karanlık, ebedi ve sinsi bir arzu da yatıyordu. Barış, Eros\'un yorgunluğudur; savaş ise Thanatos\'un o engellenemez (yıkıcı) uyanışıdır.',
    questionStem: 'Freud\'un "Thanatos (Ölüm İçgüdüsü)" kavramı, insanlığın savaş ve yıkım eğilimlerini psikolojik olarak nasıl açıklar?',
    options: [
      'İnsanların sadece ekonomik kaynakları (toprak ve para) paylaşamadığı için mecburen savaştığı şeklindeki sosyolojik bir teoriyle',
      'Savaşların ve katliamların; insanın bilinçaltında yatan, her şeyi parçalamaya, yok etmeye ve "cansız/sessiz bir hiçliğe (ölüme)" geri dönmeye dair o karanlık ve doğuştan gelen (kendi kendini imha) dürtüsünün bir dışavurumu olduğu fikriyle',
      'Askerlerin savaş meydanında korktukları için hayatta kalma içgüdüsüyle daha fazla şiddet uygulamasıyla',
      'İnsanlığın doğaya karşı kazandığı zaferlerin kutlanması için düzenlenen ritüelistik (dini) bir fedakârlık olmasıyla'
    ],
    correct: 1,
    explanation: 'Freud\'un I. Dünya Savaşı vahşeti sonrası bulduğu Thanatos kavramı; insanın içinde sadece yaşama değil, her şeyi yok etmeye ve "inorganik hiçliğe/ölüme geri dönmeye" yönelik karanlık ve doğuştan bir yıkım (kendini imha) arzusu olduğunu açıklar.'
  },
  {
    title: 'Panama Kanalı ve Sivrisinek (Doğanın Askerleri)',
    passage: '19. yüzyılın sonunda Fransızlar, Pasifik ile Atlantik okyanusunu birleştirmek için tarihin en büyük mühendislik projesine, Panama Kanalı\'na giriştiler. Dev iş makineleri, en parlak mühendisler ve milyarlarca franklık bütçeyle ormanı yarmaya başladılar. Ancak sekiz yıl sonra proje tam bir hezimetle çöktü ve Fransızlar kaçtı. Onları yenen şey dağlar veya sert kayalar (mühendislik zorlukları) değildi; onları yenen şey, ağırlığı bir gram bile olmayan Aedes aegypti türü "Sivrisinekler"di. Ormanın içindeki bu görünmez askerler, işçilere Sarı Humma ve Sıtma taşıyarak tam 22.000 insanı öldürdü. Devasa imparatorlukların ve dâhi mühendislerin o büyük, çelik kibri; doğanın en küçük, en sinir bozucu ve en umursanmayan böceğinin (virüsünün) iğnesi karşısında paramparça olmuştu.',
    questionStem: 'Panama Kanalı inşaatının Fransızlar tarafından terk edilmesi (Sarı Humma felaketi), insan ve doğa çatışmasına dair nasıl bir "ironik" tablo sunar?',
    options: [
      'Avrupalı mühendislerin yağmur ormanlarının zeminini kazmakta kullandıkları iş makinelerinin sürekli arızalanmasını',
      'Devasa bütçelere ve koca imparatorlukların (çelikten) mühendislik kibrine sahip insanın; doğanın en küçük, en sıradan ve görünmez (sivrisinek) savunma mekanizması karşısında nasıl diz çöküp hezimete uğradığını',
      'Sivrisineklerin okyanus sularından beslenerek normalden çok daha devasa (mutant) boyutlara ulaşmasını',
      'Yerli halkların doğayı korumak için Fransız işçilere karşı sinsi tuzaklar kurmasını'
    ],
    correct: 1,
    explanation: 'Koca bir imparatorluğun mühendislik/çelik kibrinin, devasa kayalara değil ufacık bir sivrisineğe (doğanın en küçük askerine) yenilmesi; insanın kibri ile doğanın görünmez gücü arasındaki ironik tabloyu sunar.'
  },
  {
    title: 'Mary Toft\'un Tavşanları (Otoritenin Safdilliği)',
    passage: '1726 yılında İngiltere\'de Mary Toft adında okuma yazma bilmeyen yoksul bir köylü kadın, rahminden "tavşanlar" doğurduğunu iddia etti! İşin garibi, dönemin kraliyet cerrahları, saygın anatomi uzmanları ve elit doktorları kadını muayene etmiş ve kadının içinden gerçekten de ölü tavşan parçaları çıkardıklarını raporlayarak bu durumu "tıbbi bir mucize" olarak onaylamışlardı. İngiltere haftalarca bu doğaüstü olayı konuştu. Oysa Mary Toft, sadece elbisesinin içine sakladığı ölü tavşan parçalarını kullanıyordu. Saygın bilim insanlarının (elitlerin), cahil sandıkları bir köylü tarafından bu kadar kolay ve absürt bir şekilde kandırılması, tıp tarihindeki en utanç verici andır. İnsanoğlu; unvanı, diploması ve zekâsı ne kadar yüksek olursa olsun, "açıklanamayan bir mucizeye tanık olma" kibrine (ve heyecanına) kapıldığında, en sıradan gözbağcılık numaralarına bile aldanabilecek kadar (safdil) körleşebilir.',
    questionStem: 'Mary Toft (Tavşan Doğuran Kadın) olayı, dönemin elit doktorları ve bilimsel otoritesi hakkında neyi ispatlamaktadır?',
    options: [
      'Tavşanların insan genetiğine uyum sağlayarak insan rahminde gelişebileceği yönündeki biyolojik bir istisnayı',
      'Tıp biliminin o dönemde kadın anatomisi hakkında hiçbir bilgiye sahip olmamasını',
      'Unvanı ve eğitimi ne kadar yüksek olursa olsun, "bir mucizeye (ilke) tanık olma" heyecanına ve kibrine kapılan bilimsel otoritenin; en absürt ve basit bir hileye bile kanacak kadar mantığını (ve eleştirel aklını) yitirip safdilleşebileceğini',
      'Yoksul köylülerin tıp bilimini ilerletmek için gizlice deneyler yaptığını'
    ],
    correct: 2,
    explanation: 'Elit doktorların tavşan doğurma yalanına inanması; "mucizeye tanık olma" kibrine kapılan otoritenin unvanı ne olursa olsun mantığını kaybedip en basit hileye (safdilce) kanabileceğini ispatlar.'
  },
  {
    title: 'Moiralar (Kaderin İpleri)',
    passage: 'Yunan mitolojisinde Moiralar (Kader Tanrıçaları) adında üç ürkütücü yaşlı kadın vardır: Klotho insan ömrünün ipini eğirir, Lakhesis bu ipin uzunluğunu ve bahtını ölçer, Atropos ise zamanı geldiğinde o ipi elindeki soğuk makasla acımasızca keser. Olympos Dağı\'ndaki Baş Tanrı Zeus dahil, evrendeki hiçbir tanrı bu üç yaşlı kadının ördüğü ipe (kadere) müdahale edemez veya onu değiştiremez. Zeus, oğlu Sarpedon savaşta ölmek üzereyken onu kurtarmak ister ama Moiraların kestiği ipe (kadere) boyun eğerek gözyaşları içinde geri çekilir. Bu mitolojik hiyerarşi felsefeye şu mesajı kazır: Evrenin en tepesinde oturan, yıldırımları fırlatan tanrısal güçler bile; "Zamanın ve Ölümün" o görünmez, sessiz ve mutlak makası (kaderin kaçınılmaz döngüsü) karşısında çaresiz ve aciz birer figürandan ibarettir.',
    questionStem: 'Moiralar (Kader Tanrıçaları) mitolojisinde, Zeus dâhil tanrıların bile bu üç kadının (kaderin) kararına müdahale edememesi neyi sembolize eder?',
    options: [
      'Kadınların antik Yunan toplumunda erkeklerden daha fazla siyasi güce sahip olduğunu',
      'En mutlak, yüce ve tanrısal gücün bile; Zamanın (ve Ölümün) işleyişini belirleyen o "kaçınılmaz evrensel kader (ölüm) döngüsü" karşısında tamamen çaresiz (ve sınırlandırılmış) olduğu felsefesini',
      'Kaderin sadece savaşlarda ölen kahramanlar için geçerli, diğer insanlar için esnek bir kural olduğunu',
      'İplik eğirme ve dokuma sanatının Olympos dağında icat edildiğini'
    ],
    correct: 1,
    explanation: 'Baş Tanrı Zeus\'un bile kader ipini (Moiraları) değiştirememesi; en mutlak gücün bile zamanın ve ölümün (kaderin) o kaçınılmaz/mutlak döngüsü karşısında çaresiz ve sınırlı olduğunu sembolize eder.'
  },
  {
    title: 'Roswell Efsanesi (Modern Çağın Mitolojisi)',
    passage: '1947 yılında ABD\'nin New Mexico eyaletindeki Roswell kasabasına tuhaf enkaz parçaları düştüğünde, yerel bir gazete "Uçan Daire Yakalandı" manşetini attı. Ordu hemen ertesi gün "O sadece bir hava balonuydu" diyerek olayı yalanladı. Ancak o tek bir günlük manşet, insanlığın son 70 yılına damga vuran en devasa mitolojinin doğum anı oldu. 51. Bölge\'de saklanan uzaylı cesetleri, tersine mühendislikle yapılan lazerler ve dünyayı yöneten gri adamlar efsanesi nesilden nesile yayıldı. Roswell olayı, gökyüzünden gelen bir uzay gemisinin değil; antik çağlarda yıldırımları Zeus\'a bağlayan insanın, modern teknoloji çağında (anlamlandıramadığı boşluğu doldurmak için) kendi "yeni tanrılarını ve uzaylı efsanelerini (modern mitolojisini)" nasıl kendi elleriyle (komplolarla) sıfırdan kurguladığının en canlı ispatıdır.',
    questionStem: 'Roswell Olayı\'nın ve uzaylı efsanelerinin yıllarca sürmesi, yazar tarafından sosyolojik olarak nasıl yorumlanmıştır?',
    options: [
      'Hükümetlerin uzaylı teknolojilerini kullanarak silah sanayisinde devrim yaptığı gerçeği olarak',
      'Eski çağlarda gök gürültüsünü Zeus\'a bağlayan insanın, modern teknoloji çağında da bilinmezliği (boşluğu) doldurmak için "uzaylı komploları" üreterek kendi yeni (modern) mitolojisini kurgulama ihtiyacı olarak',
      'Gazetecilerin haber yaparken hiçbir zaman ordu yetkililerine danışmadığı bir sansür eksikliği olarak',
      'Hava balonlarının kazalarının her zaman uçan dairelere benzediği teknik bir yanılgı olarak'
    ],
    correct: 1,
    explanation: 'Zeus yerine uzaylı efsanesinin konması; insanın bilinmezliği açıklamak ve boşluğu doldurmak için teknoloji çağında kendi "modern mitolojisini" (komploları) sıfırdan yaratma ihtiyacı (zaafı) olarak yorumlanmıştır.'
  },
  {
    title: 'Flannan Feneri Gizemi (Okyanusun Hiçliği)',
    passage: '1900 yılının Aralık ayında İskoçya açıklarındaki izole Flannan Adaları fenerine giden ikmal gemisi, fenerin ışığının yanmadığını gördü. Adaya çıktıklarında ürpertici bir sessizlikle karşılaştılar. Masada yarım kalmış bir yemek, devrilmiş bir sandalye ve yerinde duran iki adet yağmurluk vardı. Feneri koruyan üç deneyimli bekçi hiçbir iz bırakmadan, kan damlası dökülmeden ve bir mektup yazmadan tamamen "yok olmuşlardı". Son günlüğe "Büyük fırtına... Tanrı bizi korusun" yazılmıştı ama o bölgede fırtına olduğuna dair hiçbir kayıt yoktu. Üç adam uzaylılar tarafından mı kaçırıldı yoksa cinnet geçirip birbirlerini mi öldürdüler? Asıl korkutucu olan okyanusun cevapsızlığıdır. Flannan gizemi; insanoğlunun teknolojik yapılarla (fenerlerle) doğaya hükmettiğini sanırken, okyanusun devasa ve dilsiz karanlığının insanı nasıl bir saniyede (iz bırakmadan) yutup sonsuz bir hiçliğe hapsedebileceğinin en dondurucu destanıdır.',
    questionStem: 'Flannan Feneri bekçilerinin iz bırakmadan yok olması hikâyesi, insan ve doğa (okyanus) arasındaki ilişkiye dair nasıl bir mesaj taşır?',
    options: [
      'Deniz fenerlerinin eski dönemlerde genellikle sağlam olmayan temeller üzerine inşa edildiğini',
      'İzole ortamlarda yaşayan insanların her zaman dışarıdan gelen korsan saldırılarına açık olduğunu',
      'İnsanoğlu deniz fenerleri (teknoloji) ile doğayı kontrol altına aldığını sanırken; okyanusun devasa, sessiz ve açıklanamaz karanlığının insanı iz bırakmadan yutabilecek (ve hiçliğe hapsedecek) kadar vahşi ve mutlak bir güç olduğunu',
      'Kötü hava koşullarının insanların günlük tutma alışkanlıklarını tamamen değiştirdiğini'
    ],
    correct: 2,
    explanation: 'Üç adamın fenerde iz bırakmadan yok olması; fenerle doğaya hükmettiğini sanan insanın, okyanusun sessiz/karanlık ve mutlak hiçliği karşısında nasıl çaresizce yutulabileceği (doğanın vahşi gücü) mesajını taşır.'
  },
  {
    title: 'Büyük Okyanus Çöp Yaması (Sentetik Kıyamet)',
    passage: 'Pasifik Okyanusu\'nun tam ortasında, hiçbir haritada görünmeyen, hiçbir ülkeye ait olmayan ancak yüzölçümü Fransa\'nın üç katı büyüklüğünde devasa bir "kıta" vardır. Ancak bu kıta topraktan veya kayadan değil; dünyanın dört bir yanından okyanus akıntılarıyla sürüklenip bir araya gelmiş trilyonlarca pet şişe, naylon torba, balık ağı ve mikroplastikten oluşmaktadır: "Büyük Pasifik Çöp Yaması" (The Great Pacific Garbage Patch). İnsanoğlu binlerce yıl boyunca doğaya görkemli piramitler, mermer heykeller ve kütüphaneler bıraktı. Oysa modern çağın (tüketim histerisinin) geleceğe bırakacağı en büyük anıt (veya miras), sanat eseri değil; okyanusun kalbini zehirleyen, binlerce yıl çürümeyecek olan o yapışkan, zehirli ve sentetik plastikten oluşan (ve insanın görünmez kibrinden beslenen) bu yüzen çöp kıtasıdır.',
    questionStem: 'Yazar, "Büyük Pasifik Çöp Yaması"nı anlatırken eski çağların (piramitlerin vb.) miraslarıyla modern çağı nasıl karşılaştırmaktadır?',
    options: [
      'Geçmişteki mimari eserlerin plastikten daha dayanıksız olduğu için okyanus dibinde kaybolduğunu savunarak',
      'Eski medeniyetlerin doğaya sanatsal ve görkemli (mermer/piramit) anıtlar bırakmasına karşılık; modern tüketim toplumunun (kibrinin) geleceğe sadece doğayı zehirleyen, çürümeyen devasa ve sentetik bir çöp kıtası (yıkım) miras bıraktığını (çarpıcı bir tezatla) eleştirerek',
      'Plastik maddelerin gelecekte uzay istasyonları inşasında kullanılabilecek değerli madenlere dönüşeceğini iddia ederek',
      'Okyanus akıntılarının antik dönemde ticaret rotalarını belirlediğini vurgulayarak'
    ],
    correct: 1,
    explanation: 'Piramit ve heykellere karşı "plastik/sentetik çöp kıtasının" geleceğe bırakılması; modern tüketim kibrinin sanatsal anıt yerine doğayı zehirleyen çirkin (sentetik) bir mirası bıraktığı tezatını (eleştirisini) ifade eder.'
  }
];

export const felsefeParagrafSorulari28: BilimParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_28.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_28[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-felsefe28-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: `${theme.explanation} (Soru ${qNo})`,
  };
});
