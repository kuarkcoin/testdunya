import type { BilimParagrafQuestion, SincityParagrafQuestion, TarihParagrafQuestion } from './types';

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
