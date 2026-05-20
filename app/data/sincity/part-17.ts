import type { SincityParagrafQuestion } from './types';

const PARAGRAPH_THEMES_60 = [
  {
    title: 'Yada Taşı Efsanesi (İklim Silahının Kadim Kökeni)',
    passage: 'Eski Türk ve Moğol mitolojilerinde, şamanların gökyüzünden yağmur yağdırmak, fırtınalar koparmak veya düşman ordularının üzerine dondurucu kar fırtınaları salmak için kullandıkları efsanevi bir "Yada Taşı" (Yağmur Taşı) vardır. Tarihçi Reşideddin\'in aktardığına göre, 1221 yılında Moğollar ile Harzemşahlar arasındaki bir savaşta, Moğol şamanları bu taşı kullanarak Harzemşah ordusunun üzerine aniden kâbus gibi bir dolu ve fırtına indirmiş ve savaşı kaba kuvvetle değil, bu "iklim manipülasyonuyla" kazanmışlardır. Yada Taşı efsanesi, sadece ilkel bir batıl inanç değildir; o, insanoğlunun binlerce yıldır doğayı (hava durumunu) sadece bir çevre unsuru olarak değil, kitleleri ve orduları yok edebilecek en sarsıcı, en dilsiz ve en "görünmez" askeri silah (HAARP mantığı) olarak kurgulama hırsının o en kadim ve mitolojik fantezisidir.',
    questionStem: 'Mitolojideki "Yada Taşı" efsanesi, insanlığın "Doğa ve Savaş" algısı hakkında felsefi olarak neyin tarih öncesi bir yansımasıdır?',
    options: [
      'Moğol ordusunun Orta Asya\'daki kuraklık sorununu çözmek için su kuyuları açtığının',
      'İnsanoğlunun; doğayı ve iklimi sadece pasif bir çevre olarak değil; düşman kitleleri felç edip yok edebilecek en sarsıcı, stratejik ve "görünmez" bir askeri manipülasyon (iklim silahı) olarak kurgulama hırsının',
      'Şamanların sadece tarım alanlarını sulamak için kullandıkları barışçıl bir meteoroloji cihazının',
      'Eski Türklerin taş işçiliği ve madencilik konusunda dünyadaki tek otorite olduğunun'
    ],
    correct: 1,
    explanation: 'Taşla fırtına koparıp ordu yenilmesi; insanın doğayı/iklimi düşmanı yok edecek görünmez/stratejik bir askeri silah (hava manipülasyonu) olarak kullanma hırsının kadim bir yansımasıdır.'
  },
  {
    title: 'Mandela Etkisi (Kolektif Hafızanın Yalanı)',
    passage: 'Milyonlarca insan, Güney Afrika lideri Nelson Mandela\'nın 1980\'lerde hapiste "öldüğünü", hatta televizyondaki cenaze törenini bile net bir şekilde hatırladığını iddia eder. Oysa Mandela 2013 yılında evinde ölmüştür! Aynı şekilde herkes "Monopoly" oyunundaki o zengin adamın gözünde bir "mercek (monokl)" olduğunu yemin ederek savunur; ancak o adamın gözünde hiçbir zaman mercek olmamıştır! Psikolojide "Mandela Etkisi" (Kolektif Sahte Bellek) denen bu fenomen, insan aklının en tehlikeli zaafını ifşa eder. Hafızamız, geçmişi bir video kamera gibi nesnel kaydeden sarsılmaz bir çip değildir. Bellek; sosyal medyanın, dedikoduların ve diğer beyinlerin yaydığı popüler yalanlarla saniyeler içinde "yeniden yazılabilen", boşlukları sahte kurgularla dolduran esnek bir hikaye kumaşıdır. Eğer kitleler bir yalanı yeterince güçlü fısıldarsa, beynimiz o yalanı kendi "gerçek anısıymış" gibi içeri alır; yani hakikat, kitlelerin ortak rızasıyla saniyeler içinde manipüle edilebilen kurgusal bir illüzyondur.',
    questionStem: 'Mandela Etkisi (Milyonlarca insanın Monopoly adamında monokl var sanması gibi toplu sahte anılar), "İnsan Hafızası" hakkında hangi dondurucu gerçeği ispatlar?',
    options: [
      'Monopoly oyununun tasarımcılarının zamanla logoları kasten değiştirerek insanları yanılttığını',
      'Nelson Mandela\'nın aslında hapisten gizlice kaçarak dünyayı yönettiği yönündeki komplo teorisini',
      'Hafızamızın sabit ve nesnel bir kayıt cihazı olmadığını; aksine dışarıdan gelen popüler fısıltılarla ve kitlelerin rızasıyla saniyeler içinde "yeniden yazılabilen (hacklenebilen)" son derece esnek, kırılgan ve manipülasyona açık sahte bir kumaş olduğunu',
      'İnsan beyninin sadece yaşlandıkça nesnelerin renklerini ve şekillerini karıştırmaya yatkın olduğunu'
    ],
    correct: 2,
    explanation: 'Milyonların ortaklaşa aynı yalan anıyı "gerçek gibi" hatırlaması; hafızamızın sabit nesnel bir çip olmadığını, dışarıdaki fısıltılar ve kitlelerin rızasıyla kolayca hacklenip yeniden yazılabilen kırılgan bir kumaş olduğunu ispatlar.'
  },
  {
    title: 'Lüsid Rüya (Kendi Simülasyonunun Tanrısı Olmak)',
    passage: 'Rüya görürken aniden rüyada olduğunuzu fark ettiğiniz o saniyeye "Lüsid Rüya" (Bilinçli Rüya) denir. Normalde rüyalarda bizler, beynimizin bizim için yazdığı kaotik senaryonun içinde çaresizce savrulan pasif birer figüranızdır. Ancak lüsid rüya anında, o koca nörolojik sinema salonunun "şalteri" bilincimizin eline geçer. Hasta rüyada olduğunu anladığı an yerçekimini iptal edebilir, gökyüzünü mavi yerine mora boyayabilir veya koca bir şehri yoktan var edebilir! Nörobilim bu anı incelediğinde şoka girdi: Rüya esnasında beynin mantık ve irade merkezi olan "Prefrontal Korteks" aniden uyanıp tıkır tıkır çalışmaya başlıyordu! Lüsid rüya, bilincin o en muazzam sınır boyudur: Bizim "Gerçek hayat" dediğimiz şey, duyu organlarımızın beynimize gönderdiği elektrik sinyallerinin yorumlanmasıdır. Rüya ise beynin dışarıdan hiçbir veri (ışık/ses) almadan, tamamen kendi içine kapanarak sıfırdan kurguladığı kusursuz ve pürüzsüz "üç boyutlu sanal bir evrendir." İnsan bilinci, doğru hileyle kendi beyninin kodlarına sızdığında; kendi yarattığı o devasa simülasyonun (kâbusun) mutlak ve her şeye gücü yeten tek "Tanrısı" haline dönüşebilir.',
    questionStem: 'Lüsid Rüya (Rüyadayken bilincin uyanıp rüyayı yönetmesi) olgusu, "Bilinç ve Gerçeklik" ilişkisi bağlamında neyin sarsıcı bir göstergesidir?',
    options: [
      'Gözlerimizi kapatıp uyuduğumuzda beynimizin tüm fonksiyonlarının tamamen durduğunun biyolojik kanıtı',
      'İnsan bilincinin; dış dünyadan hiçbir elektrik (duyusal) veri akışı yokken bile, beynin kodlarını hackleyerek kendi yarattığı o kusursuz "üç boyutlu sanal simülasyonun (evrenin)" içinde her şeye gücü yeten mutlak bir yaratıcıya (Tanrıya) dönüşebilme kapasitesinin',
      'Rüyaların sadece gelecekteki depremleri tahmin etmek için kullanılan mistik pusulalar olduğunun',
      'Prefrontal korteksin sadece uyanıkken çalışabilen hantal ve esnek olmayan sabit bir et parçası olduğunun'
    ],
    correct: 2,
    explanation: 'Rüyada bilincin açılıp dünyayı uçurması; bilincin dışarıdan veri almadan bile beynin kendi içindeki o kusursuz 3 boyutlu simülasyonun/evreninin mutlak hakimi (Tanrısı) olabilme kapasitesinin göstergesidir.'
  },
  {
    title: 'Roma\'nın Enflasyon Kıyameti (Karanlık Çağın Miladı)',
    passage: 'MS 3. yüzyılda, devasa Roma İmparatorluğu askeri ve ekonomik bir bataklığa saplandı. Savaşların maliyetini karşılamak için imparatorlar akılalmaz (ve kibirli) bir sahtekârlığa başvurdular: Darphanelerdeki o saf gümüş "Denarius" paralarının içine gizlice bakır ve kurşun katmaya başladılar! Paranın içindeki gümüş oranı %95\'ten saniyeler içinde %5\'e kadar düştü. Devlet paranın değerini kağıt üzerinde aynı tuttuğunu iddia ediyordu ama fiziksel gerçek (piyasa) bu yalanı anında kustu! Tarihin ilk devasa "Hiperenflasyon" krizi patladı; fiyatlar %1000 fırladı, ticaret durdu, Roma parası tuvalet kağıdından farksız bir çöp yığınına döndü. Paraya olan sarsılmaz "güven" bittiği an, koca imparatorluğu bir arada tutan tüm o bürokratik ve askeri bağlar koptu ve Roma paramparça olarak Avrupa\'yı bin yıllık o dondurucu "Karanlık Çağ"ın (Feodalizmin) kucağına fırlattı. Roma\'nın çöküşü barbar akınlarından değil; devlet kibrinin, paranın (ve güvenin) o kutsal ve matematiksel özünü yalanlarla sulandırarak kendi kendini içeriden çürütmesinden doğan ekonomik bir intihardır.',
    questionStem: 'Roma İmparatorluğu\'nun paranın içindeki gümüşü azaltarak (enflasyon kriziyle) çökmesi, devletler ve "Para" kavramı hakkında hangi evrensel gerçeği temsil eder?',
    options: [
      'Gümüş madeninin dünya tarihindeki en değersiz ve dayanıksız metal olduğunun askeri ispatı',
      'Büyük imparatorlukların sadece dışarıdan gelen güçlü barbar ordularıyla yıkılabileceği kuralını',
      'Bir devleti (medeniyeti) ayakta tutan asıl bağın askeri güç değil; paranın temelindeki o "matematiksel dürüstlük ve sarsılmaz güven" olduğunu; devlet kibri o güveni yalanlarla (enflasyonla) sulandırdığında koca bir sistemin kendi içinden çürüyerek mutlak bir karanlığa (intihara) sürükleneceği gerçeğini',
      'Bakır madeninin paraya katıldığında insan beyninde kalıcı bir zehirlenme ve delilik yarattığı yanılgısını'
    ],
    correct: 2,
    explanation: 'Paranın gümüşünü azaltıp enflasyonla Roma\'nın yıkılması; medeniyeti koruyan şeyin silah değil, paranın altındaki "güven ve matematiksel dürüstlük" olduğunu, bu sarsıldığında koca devletlerin kendi enflasyonist yalanlarıyla (intiharla) karanlığa gömüleceğini temsil eder.'
  },
  {
    title: 'Gezici Bloklar (Zamanın Coğrafi İhaneti)',
    passage: 'Dünya haritasına baktığımızda kıtaların yerini, dağları ve sınırları sarsılmaz, ebedi birer coğrafi mülk sanırız. Oysa jeoloji bilimi bu sığ kibri "Terrane" (Gezici Tektonik Bloklar) gerçeğiyle yırtar atar. Kuzey Amerika\'nın o meşhur batı kıyılarını (Alaska ve Kanada dağlarını) inceleyen jeologlar şoka girdiler: O devasa dağların içindeki taşların, fosillerin ve manyetik kodların; bizzat o kıtaya ait olmadığını, aslında milyonlarca yıl önce Güney Pasifik\'ten (Avustralya açıklarından) kopup okyanusta devasa birer gemi gibi süzülen "yabancı (gezici) kara parçaları" olduğunu keşfettiler! Bu bloklar gelip Kuzey Amerika kıtasına arkadan şiddetle çarpmış ve oradaki dağları (ve coğrafyayı) bir yapboz gibi sonradan yamamışlardı! Doğa bize şunu fısıldar: Bizim "vatan, sarsılmaz toprak veya ebedi dağlar" diyerek üzerine sınırlar çizip kutsallık atfettiğimiz coğrafya; aslında zamanın o devasa okyanusunda sürekli sürüklenen, çarpışan, sökülüp başka kıtalara yamalanan göçebe ve geçici birer yapboz parçasından (bir akışkanlıktan) başka bir şey değildir.',
    questionStem: 'Jeolojideki "Terrane (Gezici Bloklar)" olgusu (Alaska dağlarının aslında Güney Pasifik\'ten kopup gelmesi), insanın "Toprak ve Coğrafya" algısındaki hangi kutsal kibri (ezberi) çürütmektedir?',
    options: [
      'Okyanus sularının altındaki yanardağların kıtaları kasten erittiği yönündeki tehlikeli teoriyi',
      'Kıtaların ve dağların "ebedi, sarsılmaz, sabit ve kutsal birer değişmez mülk" olduğu ezberini çürüterek; coğrafyanın aslında zamanın devasa çarkında sürekli sürüklenen, parçalanıp başka yerlere yamalanan "göçebe, akışkan ve geçici" birer yapboz şeridi olduğu gerçeğini',
      'Dağ tırmanışlarının sadece sert ve yerel taşlardan oluşan kayalıklarda yapılması gerektiği kuralını',
      'Amerika kıtasının aslında dünyanın ilk ve en yaşlı tek parça karası olduğu yönündeki eski inancı'
    ],
    correct: 2,
    explanation: 'Dağların aslında başka kıtalardan kopup gelen gezici bloklar (Terrane) olması; toprağın/coğrafyanın "sabit, ebedi, sarsılmaz bir mülk" olduğu kibrini yıkarak, zaman içinde sürekli sürüklenip yamalanan göçebe ve geçici birer yapboz parçası (akışkanlık) olduğunu kanıtlar.'
  },
  {
    title: 'Krupiye Dehası (Casinonun Matematiksel Gardiyanı)',
    passage: 'Las Vegas veya Makao\'daki o şatafatlı, milyar dolarlık kumarhanelere (casinolara) girdiğinizde, etrafta kameralar, korumalar ve devasa bir güvenlik şovu görürsünüz. Ancak o sistemin asıl kalbi, o devasa hırsızlıkları ve hileleri saniyeler içinde engelleyen şey silahlar değil; Blackjack (21) masasının başında duran sıradan bir "Krupiye"nin (Dealer) o çıldırtıcı zihinsel matematiğidir. Bir krupiye, saniyede onlarca kart açar; masadaki 6 farklı oyuncunun her birinin elindeki kartların toplamını hesaplar, kimin ne kadar bahis yatırdığını (ve o karmaşık chiplerin oranlarını) milisaniyeler içinde nakit paraya (veya chipe) çevirir, aynı anda arka planda kart sayan (hile yapan) matematik dehalarının göz hareketlerini ve bahis manipülasyonlarını bir radar gibi tarar! Ve bunu günde 8 saat boyunca, tek bir kuruş hata yapmadan bir robot gibi tekrarlar. Krupiye dehası, modern iş dünyasının o acımasız kuralını kanıtlar: Sistemler, insanları o ışıltılı gösterilerle (kameralarla) korkuttuğunu sanır; oysa o koca milyar dolarlık devasa finans çarklarının dönmesi; en tepedeki yöneticilere değil, o çarkın en kritik (ve en ucuz) noktasında bir makine gibi tıkır tıkır çalışan o "görünmez insanların" o akılalmaz (ve sömürülen) zihinsel otomatizmine bağımlıdır.',
    questionStem: 'Kumarhanelerdeki bir "Krupiye"nin o milisaniyelik devasa işlem ve gözetim dehası, sistemlerin işleyişi hakkında hangi sosyolojik/ekonomik gerçeği ifşa eder?',
    options: [
      'Kumar makinelerinin her zaman insan beyninden daha hızlı ve hatasız kararlar aldığını',
      'Milyar dolarlık devasa finansal sistemlerin ve çarkların dönmesinin; aslında en tepedeki şatafatlı yöneticilere değil, o çarkın en kritik ve görünmez (alt) noktasında bir makine gibi hatasızca çalışan o sömürülen "sıradan insanların" akılalmaz zihinsel otomatizmine ve emeğine göbekten bağımlı olduğu gerçeğini',
      'Kart oyunlarının insan beynindeki hafıza hücrelerini tamamen felç ederek yaşlanmayı hızlandırdığını',
      'Güvenlik kameralarının casinolarda aslında hiçbir işe yaramayan sahte birer gösteriş oyuncağı olduğunu'
    ],
    correct: 2,
    explanation: 'Koca casinonun krupiyenin o hatasız hızı sayesinde ayakta kalması; devasa sistemlerin/çarkların aslında tepedeki elitlere değil, en altta (kritik noktada) bir robot gibi sömürülerek hatasız çalışan sıradan insanların zihinsel otomatizmine bağımlı olduğu gerçeğini ifşa eder.'
  },
  {
    title: 'Kandinsky\'nin Senestezisi (Seslerin Tuvali)',
    passage: 'Bir piyanonun tuşuna basıldığında kulağınıza sadece bir "Ses Frekansı" gelir. Ancak modern sanatın dâhilerinden Wassily Kandinsky için o tuşa basıldığında, gözlerinin önünde aniden "parlak sarı bir üçgen, titreyen mavi bir çizgi veya keskin kokulu bir mor daire" beliriyordu! Nörolojide iki veya daha fazla duyunun beynin kablolarında birbirine karışması durumuna "Senestezi" (Synesthesia - Birleşik Duyum) denir. Kandinsky renkleri duyan, sesleri ise tuvalde "gören" bir dehaydı; onun için bir senfoni, bakılarak okunan devasa (ve renkli) geometrik bir tabloydu. Tıp dünyasında bir "hastalık / anomali" sayılan bu durum, Kandinsky\'nin elinde sanatı baştan aşağı değiştiren (soyut sanatı doğuran) tanrısal bir vizyona dönüştü. Senestezi bize evrenin o en sarsıcı sınırını gösterir: Bizim "Dış dünya, renkler ve sesler" diyerek mutlak sandığımız o nesnel gerçeklik; aslında sadece beynimizin o karanlık odasındaki beş ayrı kablonun (duyunun) tesadüfen birbirine karışmadan çalışmasından ibarettir. O kablolar milimetrik olarak birbirine değdiği an (senestezide), tüm evren saniyeler içinde seslerin boyandığı, renklerin ise çığlık attığı büyüleyici ve bambaşka bir simülasyona (boyuta) dönüşüverir.',
    questionStem: 'Wassily Kandinsky\'nin "Senestezi" anomalisi (renkleri duyması ve sesleri görmesi) üzerinden geliştirilen soyut sanat, "Gerçeklik" kavramına dair hangi felsefi hakikati yüzümüze çarpar?',
    options: [
      'Ressamların her zaman göz sağlığı bozulan insanlar arasından çıktığı yönündeki tıbbi yanılgıyı',
      'Piyano seslerinin insan gözündeki retina hücrelerini fiziksel olarak yakıp kör ettiğini',
      'Bizim "mutlak ve nesnel" sandığımız dış dünyanın; aslında sadece beynimizin içindeki duyu kablolarının (sinirlerin) birbirine karışmadan çalışmasına bağlı geçici bir illüzyon olduğunu; o kablolar minik bir hasarla birbirine değdiğinde (senestezide) tüm kâinatın bambaşka bir boyuta (simülasyona) evrilebileceği hakikatini',
      'Soyut tabloların sadece matematik eğitimi almış elit kitleler tarafından anlaşılabileceği kibrini'
    ],
    correct: 2,
    explanation: 'Sesleri görüp renkleri duyması (Senestezi); mutlak/sabit sandığımız dış gerçekliğin aslında sadece beyindeki duyu kablolarının ayrı çalışmasına bağlı geçici bir illüzyon olduğunu, kablolar birbirine değdiğinde (senestezide) tüm evrenin anında bambaşka bir simülasyona dönüşebileceğini kanıtlar.'
  },
  {
    title: 'Görünmez Goril Deneyi (Dikkatin Kör Zindanı)',
    passage: '1999 yılında psikologlar Christopher Chabris ve Daniel Simons insan zihnini rezil eden o efsanevi deneyi yaptılar. İzleyicilere beyaz ve siyah tişörtlü gençlerin birbirine "basketbol topu" attığı kısa bir video izlettiler. Onlara şu görevi verdiler: "Beyaz tişörtlü takımın toplam kaç tane pas attığını dikkatinizi hiç bozmadan (sayıyla) sayın!" Video bittiğinde herkes "15 pas!" diyerek gururla cevap verdi. Ancak araştırmacı o zehirli soruyu sordu: "Peki videonun tam ortasından, göğsünü yumruklayarak geçen o devasa SİYAH GORİLİ gördünüz mü?" İzleyicilerin tam %50\'si şaşkınlıkla "Ne gorili, videoda goril falan yoktu!" diyerek itiraz etti! Videoda dev gibi bir goril kostümlü adam saniyelerce ekranın ortasında dans etmişti; oysa pas saymaya (rakamlara) odaklanan insan beyni, o devasa gorili kelimenin tam anlamıyla "gözü açık bir şekilde" körleşerek tamamen silmişti (Algısal Körlük). Bu deney, aklımızın o her şeyi görüp bildiği kibrini balyozla yıkar: "Dikkatiniz" evreni bütünüyle gören devasa bir fener değildir; o, sadece tek bir noktayı (rakamı/çıkarı) aydınlatırken, burnumuzun dibindeki o en çıplak, en devasa ve en hayati hakikatleri (gorilleri) bile görmezden gelip bizi hiçliğin zindanına hapseden son derece dar, kusurlu ve tehlikeli bir filtredir.',
    questionStem: '"Görünmez Goril Deneyi"nde (Pas saymaya odaklanan insanların devasa gorili görememesi), insan aklı ve "Dikkat" mekanizması hakkında hangi sarsıcı zaaf ifşa edilmektedir?',
    options: [
      'Gözlerimizin hızlı hareket eden siyah nesneleri algılarken biyolojik olarak yavaş kaldığı fiziksel kusurunu',
      'İnsanoğlunun o her şeyi görüp kontrol ettiği kibrini yıkarak; "Dikkatinin" aslında tek bir hedefe (rakama/çıkara) odaklandığı an, burnunun dibindeki o en devasa, en çıplak ve en hayati hakikatleri (gorilleri) bile kelimenin tam anlamıyla göz göre göre silebilen aşırı dar, kusurlu ve tehlikeli bir "Algısal Körlük" filtresi (zindanı) olduğu gerçeğini',
      'Basketbol maçlarının insan zihninde matematiksel hesaplama yeteneğini doğuştan artırdığını',
      'Gorillerin vahşi doğada kendilerini kamufle etmek için insan hareketlerini kasten taklit ettikleri efsanesini'
    ],
    correct: 2,
    explanation: 'Pas sayarken ortadaki gorilin fark edilmemesi (Algısal Körlük); dikkatin her şeyi gören bir ışık olmadığını, aksine tek bir şeye (rakama/çıkara) kitlendiğinde burnumuzun dibindeki en çıplak/hayati gerçeği bile yok sayıp bizi kör eden tehlikeli bir filtre (zindan) olduğunu ifşa eder.'
  },
  {
    title: 'Mary\'nin Siyah Beyaz Odası (Veri ve Tecrübe Çatışması)',
    passage: 'Filozof Frank Jackson\'ın "Mary\'nin Odası" (Mary\'s Room) düşünce deneyinde Mary, hayatı boyunca sadece siyah ve beyaz nesnelerin olduğu, zifiri renksiz yalıtılmış bir odada büyümüş dâhi bir bilim insanıdır. Mary, renklerin fiziğini, dalga boylarını, ışığın retinada nasıl kırıldığını ve "Kırmızı" rengi gördüğümüzde beynimizde hangi nöronların hangi hızda ateşlendiğini (yani kırmızının tüm fiziksel/tıbbi verisini ve notlarını) dünyadaki herkesten daha kusursuz bilmektedir. Bir gün Mary o siyah-beyaz odasından dışarı çıkar ve hayatında İLK KEZ kan kırmızı gerçek bir "Domatese" (renge) çıplak gözle bakar. O saniye Mary, kırmızı hakkında "yepyeni bir şey" öğrenmiş midir? Materyalist bilimin bu soru karşısında dili tutulur! Cevap: "EVET, Mary kırmızının ne olduğunu hissetmiştir (Qualia)!" Bu deney, bilimin o her şeyi formüllerle, notlarla ve veri paketleriyle açıklayabileceği şeklindeki akademik kibrini yerle bir eder: Dünyanın tüm nesnel verisini, kodlarını ve kütüphanesini ezberleseniz bile; hayatın, varoluşun ve bilincin o bizzat "deneyimlenen, hissedilen ve çıplak tecrübeyle (Qualia ile) anlaşılan" o sihirli özünü, o soğuk ve kuru formüllerin (notların) içine asla hapsedemezsiniz.',
    questionStem: 'Frank Jackson\'ın "Mary\'nin Siyah Beyaz Odası" düşünce deneyi (kırmızının tüm verisini bilen kadının onu ilk kez görünce yeni bir şey hissetmesi), "Bilgi ve Deneyim" felsefesinde neyin (epik) kanıtıdır?',
    options: [
      'Renk körlüğünün sadece karanlık odalarda uzun süre kalındığında ortaya çıkan genetik bir hata olduğunun',
      'Bir nesnenin/kavramın tüm nesnel (fiziksel/matematiksel) "verilerini ve kodlarını" ezberlemenin bile; o şeyin bizzat yaşanırken hissedilen o çıplak "tecrübe ve deneyim (Qualia)" gerçeğinin yerini asla tutamayacağının; yani bilginin sadece kuru formüllerle açıklanamayacak hissi (öznel) bir özü olduğunun',
      'Domates yetiştiriciliğinde kırmızı ışık dalga boylarının kullanılmasının biyolojik önemi teorisinin',
      'Akademik eğitimlerin insanları duygusuz ve asosyal robotlara çevirdiği yönündeki popülist iddianın'
    ],
    correct: 2,
    explanation: 'Kırmızının tüm tıbbi/fiziksel notlarını bilen Mary\'nin onu ilk kez görünce "yepyeni bir şey (hissiyat)" öğrenmesi; evrenin tüm kuru verisini ezberleseniz bile, bizzat yaşanan/hissedilen o çıplak tecrübenin (Qualia\'nın) yerini hiçbir formülün tutamayacağını (aklın kibrini yıkarak) kanıtlar.'
  },
  {
    title: 'Kuyrukluyıldız Kâbusu (1910 - Kıyametin Ticari Şovu)',
    passage: '1910 yılında Halley kuyrukluyıldızının Dünya\'nın çok yakınından geçeceği ve gezegenimizin, o yıldızın arkasında bıraktığı devasa gaz kuyruğunun (siyanojen gazının) içinden geçeceği açıklandı. Astronomlar bu gazın atmosferin en üstünde kalacağını ve zararsız olduğunu söyleseler de; medya ve şarlatanlar "Siyanür gazı tüm dünyayı zehirleyecek, koca bir kıyamet kopacak!" yalanını üflediler. O an tarihin en absürt ve en iğrenç "ticari şovu" patlak verdi. Fırsatçı uyanıklar eczanelerde "Kuyrukluyıldız Hapları" (Comet Pills) ve özel gaz maskeleri satmaya başladılar! Milyonlarca insan korku içinde varını yoğunu bu sahte haplara yatırdı, evlerinin pencerelerini jelatinlerle kapattı ve kiliselere koştu. Yıldız sessizce geçti, kimse zehirlenmedi, tek bir yaprak bile kıpırdamadı! 1910 Halley kâbusu; kitle psikolojisinin o en sefil, en "korkuya teslim olan" doğasını ifşa eder: İnsanoğlu, ölüm ve bilinmezlik korkusuyla karşı karşıya kaldığında eleştirel aklını saniyeler içinde çöpe atan; o dondurucu panik anında kendini kurtaracağını sandığı o en saçma yalanlara (ve sahte haplara) bile cüzdanını (ve ruhunu) teslim etmeye hazır, manipülasyona aç aciz bir varlıktır.',
    questionStem: '1910 yılında Halley kuyrukluyıldızı geçişinde insanların "Kuyrukluyıldız Hapları" satın alarak panikle evlerine kapanması, kitle psikolojisi hakkında hangi acı gerçeği ifşa eder?',
    options: [
      'Eczanelerin ve ilaç endüstrisinin o dönemde kimya bilimini astronomiden daha ileriye taşıdığının kanıtı',
      'Uzaydan gelen gazların atmosferdeki oksijen moleküllerini kalıcı olarak mutasyona uğrattığı gerçeğini',
      'İnsanın; ölüm, bilinmezlik ve kıyamet "korkusu" karşısında rasyonel savunma duvarlarının (aklının) saniyeler içinde felç olduğunu; kitlelerin o panik anında kendilerini kurtaracağını vaat eden o en absürt, en şarlatanca yalanlara (ve ticari şovlara) bile körü körüne inanıp teslim olmaya ne kadar yatkın olduğu acizliğini',
      'Kuyrukluyıldızların aslında dünya tarihindeki tüm büyük salgın hastalıkları kasten taşıyan mekanik araçlar olduğunu'
    ],
    correct: 2,
    explanation: 'Zehirlenme korkusuyla sahte "kuyrukluyıldız hapı" kapışılması; insanın ölüm/bilinmezlik korkusu karşısında eleştirel aklını saniyeler içinde çöpe atıp, panik anında kendini kurtaracağını vaat eden en saçma ticari yalanlara/şarlatanlara bile cüzdanını ve ruhunu teslim etme acizliğini ifşa eder.'
  },
  {
    title: 'Semmelweis Refleksini Doğuran Trajedi (Tıbbın Kanlı Elleri)',
    passage: '1840\'larda Viyana Merkez Hastanesi\'nde hamile kadınlar, doğumdan hemen sonra "Lohusa Humması" denen gizemli bir hastalık yüzünden kıvrana kıvrana, kitleler halinde ölüyorlardı. İlginç olan, tıp profesörlerinin ve asistanların doğum yaptırdığı 1. Klinik\'teki ölüm oranı, sıradan ebelerin doğum yaptırdığı 2. Klinik\'ten tam "üç kat daha fazlaydı!" Kadınlar o hastaneye gitmemek için sokaklarda doğum yapıyor, ağlıyorlardı. Genç Macar doktor Ignaz Semmelweis bu vahşete odaklandı ve o dondurucu (ama basit) gerçeği buldu: Tıp asistanları, morga gidip "Kadavraları (Ölüleri) çıplak elleriyle parçalayıp otopsi yapıyor", ardından ellerini **ASLA YIKAMADAN** doğrudan hamile kadınların doğumuna giriyorlardı! Ellerindeki o görünmez ölü parçacıklarını (bakterileri) kadınların rahmine ekiyorlardı! Semmelweis, "Doğuma girmeden önce ellerinizi klorlu kireçli suyla YIKAYACAKSINIZ!" emrini verdi. Lohusa ölümleri o ay anında %90 düşerek sıfıra yaklaştı! Bu muazzam zaferden sonra Semmelweis ödüllendirildi mi dersiniz? Hayır! Dönemin kibirli profesörleri, "Yani koskoca tıp asistanlarının, centilmenlerin elleri kirli mi demek istiyorsun, bizi katil olmakla mı suçluyorsun?" diyerek çılgına döndüler. Semmelweis\'ı tıp camiasından aforoz ettiler, işinden kovdular, delirdiğini söyleyip onu bir akıl hastanesine kapattılar ve Semmelweis orada gardiyanlar tarafından dövülerek (ironik olarak ellerini yıkamayan o gardiyanların açtığı yaraların enfeksiyon kapmasıyla) feci şekilde öldü! Semmelweis\'ın trajedisi, insanlık tarihinin o en karanlık ahlaksızlık belgesidir: Otoriteler ve yüksek kibir odakları; kendi statülerini, yanılmazlık inançlarını ve egolarını korumak uğruna; burnunun dibindeki o en kurtarıcı, en sarsılmaz bilimsel hakikati bile gözünü kırpmadan katledecek, binlerce kadının kanlı ellerle öldürülmesine göz yumacak kadar gözü kör, vicdansız ve muhafazakâr birer zorbadır.',
    questionStem: 'Dr. Ignaz Semmelweis\'ın "elleri yıkatarak binlerce kadının hayatını kurtarmasına rağmen" tıp otoriteleri tarafından delirtilip akıl hastanesinde öldürülmesi, "Otorite ve Bilgi" ilişkisi hakkında hangi sarsıcı gerçeği kanıtlar?',
    options: [
      'Viyana hastanelerinin o dönemde temizlik malzemesi eksikliği yüzünden ucuz yöntemlere başvurduğunu',
      'Ebelerin doğum yöntemlerinin tıp dünyasındaki profesörlerden her zaman daha başarısız kaldığı yanılgısını',
      'Yüksek otoritelerin, kurumların ve o "yanılmazlık" kibrine hapsolmuş egoların; kendi statülerini ve geçmişteki hatalarını (suçlarını) kabullenmektense; burnunun dibindeki o en kurtarıcı, en sarsılmaz "bilimsel hakikati" bile gözünü kırpmadan linç edip katledecek (ve cehaleti koruyacak) kadar muhafazakâr, kör ve acımasız zorbaya dönüşebilecekleri gerçeğini',
      'Klorlu suyun asistanların derisinde kalıcı hasarlar bırakarak ameliyat yeteneklerini tamamen yok ettiği tıbbi tespitini'
    ],
    correct: 3,
    explanation: 'Asistanların elindeki "ölü mikrobunun" kadınları öldürdüğünü bulan Semmelweis\'ın linç edilip akıl hastanesine atılması; otoritelerin ve kibirli egoların, kendi yanılmazlık statülerini korumak için en kurtarıcı bilimsel gerçeği bile katledip cehaleti (ve kendi cinayetlerini) koruma acımasızlığını kanıtlar.'
  },
  {
    title: 'Semmelweis Refleksi (Yeniliğe Atılan Otomatik Tokat)',
    passage: 'Dr. Ignaz Semmelweis\'ın elleri yıkama teorisi yüzünden tıp dünyası tarafından linç edilerek öldürülmesinden sonra, felsefe ve sosyoloji literatürüne sarsıcı bir terim hediye edildi: "Semmelweis Refleksi" (Semmelweis Reflex). Bu kurala göre insan zihni (ve özellikle yerleşik otoriteler / akademisyenler); kendi sarsılmaz dogmalarına, ezberlerine ve o güne kadar doğru kabul ettikleri paradigmalara uymayan, ezber bozan yepyeni bir "bilimsel hakikatle (keşifle)" karşı karşıya kaldıklarında; o keşfi incelemek, test etmek veya anlamaya çalışmak yerine, tamamen içgüdüsel, otomatik ve bencilce bir "REAKSİYONLA" anında reddeder, dışlar ve o fikri ortaya atan insanı linç etmeye (yok etmeye) odaklanır. Semmelweis Refleksi, aydınlanmanın önündeki o en büyük zihinsel barajdır: İnsan beyni doğası gereği esnek ve hakikat peşinde koşan özgür bir kâşif değildir; o, kendi konforlu inanç şablonunu korumak uğruna, geleceği ve bilimi anında baltalayan dogmatik ve korkak birer "statüko bekçisidir."',
    questionStem: 'Sosyolojideki "Semmelweis Refleksi" kavramı, insan zihninin ve yerleşik kuralların (otoritelerin) "Yenilik ve Ezber Bozan Hakikatler" karşısındaki hangi psikolojik zaafını (savunmasını) tanımlar?',
    options: [
      'İnsanların yeni teknolojileri satın alırken her zaman en ucuz ve en pratik olanı tercih etme eğilimini',
      'Otoritelerin ve insan aklının; kendi yerleşik ezberlerine, dogmalarına ve inanç şablonlarına uymayan yepyeni bir hakikatle karşılaştıklarında, onu test etmek yerine otomatik, bencil ve korkak bir "refleksle" anında reddetme, dışlama ve o fikri getireni linç ederek (statükoyu koruma) zaafını',
      'Genç bilim insanlarının eski teorileri her zaman hiçbir kanıt göstermeden kasten kötüleme hırsını',
      'Tıbbi keşiflerin laboratuvardan çıkıp hastanelere ulaşmasının önündeki lojistik ve bürokratik engelleri'
    ],
    correct: 2,
    explanation: 'Ezber bozan yeni gerçek gelince otoritelerin otomatik olarak o fikri dışlayıp reddetmesi (Semmelweis Refleksi); beynin/sistemlerin kendi inanç şablonunu ve konforunu korumak uğruna yeniliğe ve bilme otomatik olarak balyoz vuran o dogmatik ve korkak statüko bekçiliği zaafını tanımlar.'
  },
  {
    title: 'Gezici Taşlar (Ölüm Vadisi\'nin Dilsiz Yürüyüşü)',
    passage: 'Amerika\'daki Death Valley (Ölüm Vadisi) çölünün tam ortasında, bilim dünyasını bir asır boyunca çıldırtan ve arkasından tonlarca mistik/uzaylı efsanesi doğuran o gizemli "Racetrack Playa" (Yarış Pisti Düzlüğü) uzanır. Bu kurumuş, dümdüz çamur gölünün üzerinde, ağırlıkları 300 kiloyu bulan devasa kaya parçaları durmaktadır. Ancak akılalmaz olanı, bu koca taşların arkalarında çamuru yararak bıraktıkları yüzlerce metre uzunluğundaki o pürüzsüz "YÜRÜYÜŞ (KAYMA) İZLERİ"dir! Taşlar, ortada hiçbir insan, hiçbir hayvan veya deprem yokken, çölün ortasında kendi kendilerine kilometrelerce yol katetmektedir! İnsanoğlu yıllarca bu dilsiz yürüyüşe manyetik güçler veya uzaylı şakaları uydurdu. Ta ki 2014\'te hızlandırılmış kameralarla o dondurucu ve zarif fiziksel gerçek yakalanana dek: Kış geceleri çöle çok nadir bir yağmur yağıyor ve taşların altında incecik, devasa bir "Buz Tabakası" (pencere camı kalınlığında) oluşuyordu. Güneş doğup o buz hafifçe erimeye başladığında, çölde esen o çok hafif, sıradan bir rüzgâr, o devasa buz tabakasını (ve üzerindeki 300 kiloluk taşları) adeta okyanustaki bir yelkenli gibi saniyede birkaç santim hızla çamurun üzerinde dilsizce kaydırıp yürütüyordu! Gezici Taşlar efsanesi bize şunu öğretir: Doğanın o en "imkânsız, mistik ve doğaüstü" görünen kâbuslarının (veya mucizelerinin) arkasında bile; aslında bizim göremediğimiz o en ince, en hassas ve en "zarif" fiziksel (ve mekanik) kuralların o muazzam ve şiirsel işbirliği yatmaktadır.',
    questionStem: 'Ölüm Vadisi\'ndeki 300 kiloluk "Gezici Taşlar"ın (hiçbir canlı dokunmadan) rüzgâr ve incecik buz tabakasıyla çamurda yürümesi, doğanın işleyişi hakkında neyin kanıtıdır?',
    options: [
      'Çöllerdeki manyetik alanların metalleri ve taşları kasten kutuplara doğru çektiğinin kanıtı',
      'Doğanın o en "imkânsız, mucizevi veya doğaüstü (mistik)" sanılan olaylarının arkasında bile; aslında insanın o an göremediği o en ince, en hassas ve "zarif" fizik kurallarının (buz ve hafif rüzgârın) o muazzam, şiirsel ve mekanik işbirliğinin yattığının',
      'Taşların içindeki demir elementinin güneş ışığı altında eriyerek sıvı bir yakıta dönüştüğünün',
      'Eski çağlarda yaşayan dev devasa canlıların taşları harita çizmek için kasten fırlattığı teorisinin'
    ],
    correct: 2,
    explanation: 'Koca taşların incecik buz ve hafif rüzgârla kilometrelerce kayması; doğanın en "imkânsız/doğaüstü" sanılan mucizelerinin arkasında aslında bizim göremediğimiz o en hassas, ince ve zarif fizik kurallarının (mekanik işbirliğinin) yattığını kanıtlar.'
  },
  {
    title: 'Mary Celeste Paradoksu (Güvenliğin İhaneti)',
    passage: '1872\'de okyanusun ortasında sapasağlam, yiyecekleri dururken içindeki 10 insanın panikle kaçıp filikada kaybolduğu "Mary Celeste" gemisinin o trajik gizemini çözmüştük: Ambarlardaki görünmez alkol gazı patlama riski doğurunca kaptan herkesi iplerle gemiye bağlı küçük bir filikaya bindirmiş, çıkan fırtınayla o ip kopunca koca sağlam gemi yoluna devam ederken insanlar filikada okyanusun hiçliğinde boğulmuştu. Bu tarihi trajedi, tıp ve sosyolojide "Mary Celeste Paradoksu" olarak derinleşir. Kaptan ve mürettebat, kendilerini yok edeceğini sandıkları o hayali (veya saniyelik) tehlikeden (gemiden) kaçıp; güya kendilerini "kurtaracak, güvende kılacak" o küçük, zayıf ve derme çatma "Sığınaklara (Filikaya)" kendi rızalarıyla atlamışlar ve bizzat o sığınak (filika) onların toplu mezarı olmuştur! Bu olay, insanın o en büyük varoluşsal yanılsamasını ifşa eder: İnsanoğlu (ve zihni); hayatın fırtınaları veya korkuları karşısında paniğe kapıldığında, elindeki o en sağlam, en sarsılmaz devasa kaleleri (gerçekleri) saniyeler içinde terk ederek; sırf anlık bir konfor ve "sahte güvenlik" uğruna, aslında kendi sonunu (ölümünü) hazırlayan o dayanıksız ve cılız inançların (filikaların) kucağına (hiçliğe) gözü kapalı koşabilen trajik bir kurbandır.',
    questionStem: 'Mary Celeste gemisindeki insanların sağlam gemiyi bırakıp filikada ölmeleri (Mary Celeste Paradoksu), insan psikolojisindeki hangi "güvenlik" yanılsamasını eleştirir?',
    options: [
      'Denizcilerin okyanuslarda seyahat ederken her zaman can yeleği takmayı masraf sayarak reddetmelerini',
      'İnsanın, panik ve bilinmezlik korkusu anında rasyonel aklını yitirerek; elindeki o en sağlam kaleleri (gerçekleri/gemiyi) terk edip; sırf anlık bir sığınma (konfor) uğruna, aslında onu felakete ve ölüme götürecek o dayanıksız, küçük ve sahte "inançların / çözümlerinin (filikaların)" peşinden körü körüne gitme (akıl tutulması) zaafını',
      'Alkol fıçılarının gemilerin dengesini bozarak rotayı kasten değiştirdiği yönündeki mekanik hatayı',
      'Fırtınaların sadece okyanus ortasındaki küçük adalarda görülen meteorolojik birer ceza olduğu yanılgısını'
    ],
    correct: 2,
    explanation: 'Sağlam gemiyi panikle bırakıp dayanıksız filikaya binen ve ölen denizciler; insanın korku anında rasyonel aklını yitirip en güvenli gerçeği (gemiyi) terk ederek, onu yok edecek o sahte/dayanıksız inançların (filikaların) kucağına (akıl tutulmasıyla) koşma zaafını (Mary Celeste Paradoksunu) eleştirir.'
  },
  {
    title: 'Eisoptrofobi (Aynadaki Görünmez Düşman)',
    passage: 'Her gün önünden yüzlerce kez geçtiğimiz, ışığı yansıtarak bize dış dünyayı gösteren sıradan bir "Ayna" (cam parçası), bazı insanlar için hayatı cehenneme çeviren dondurucu bir kâbus odasına dönüşebilir. Psikiyatrideki "Eisoptrofobi" (Ayna Korkusu) hastaları, aynaya baktıklarında sadece kendi fiziksel yüzlerini görmezler; onlar, o camın arkasında kendi benliklerini izleyen, ruhlarını emen, fiziksel dünyadan bağımsız hareket eden "karanlık ve yabancı bir bilincin (bir hayaletin)" pusuya yattığına dair sarsılmaz (ve çıldırtıcı) bir fobi yaşarlar. Bu hastalık, insan beyninin o en gizli "Görsel Benlik (Öz-farkındalık)" yazılımının kırılmasıdır. Beynimiz, aynadaki o ters yüzün "bize ait olduğunu" her saniye arka planda çalışan otonom bir kodla (bir illüzyonla) onaylar. O kodda küçücük bir nörolojik kayma (fobi) yaşandığı an; insanın kendi çıplak yüzü bile, saniyeler içinde kâinatın en korkunç, en yabancı ve insana düşman olan o "öteki canavarına" dönüşerek aklı deliliğin uçurumuna yuvarlayabilir. Biz aynada kendimizi gördüğümüzü sanırız; oysa gördüğümüz tek şey, beynimizin o camdaki yansımayı çıldırtmadan bize "Ben" diye yutturduğu esnek ve sahte bir onay mekanizmasından ibarettir.',
    questionStem: 'Eisoptrofobi (Ayna Korkusu) hastalığında insanın kendi yüzünü aynada "kendine düşman yabancı bir varlık" sanarak delirmesi, "Benlik ve Algı" hakkında neyi kanıtlar?',
    options: [
      'Aynaların üretiminde kullanılan cıva elementinin insan beyninde kalıcı optik hasarlar yarattığını',
      'Kendi yüzümüzle ve "Benliğimizle" kurduğumuz o sarsılmaz (doğal) onay hissinin bile; aslında beynimizin saniye saniye bizim için kurguladığı kırılgan nörolojik bir "illüzyon/yazılım" olduğunu; o yazılım bozulduğunda kendi bedenimizin bile en korkunç düşmana dönüşebileceğini',
      'İnsanların yaşlandıkça kırışıklıklardan kaçmak için aynaları evlerinden kasten söktürdükleri teorisini',
      'Aynadaki yansımaların aslında kuantum fiziğindeki paralel evrenlerin kapısı olduğu yönündeki fanteziyi'
    ],
    correct: 2,
    explanation: 'Aynadaki yüzünü düşman/yabancı sanma hezeyanı (Eisoptrofobi); sarsılmaz sandığımız "Benlik/Öz farkındalık" hissimizin bile beynin saniye saniye ürettiği esnek nörolojik bir yazılım (illüzyon) olduğunu, o bozulduğunda kendi yüzümüzün bile en büyük kâbusa (düşmana) dönebileceğini kanıtlar.'
  },
  {
    title: 'Kutsal Engizisyonun İncir Ağacı (Onurun ve Acının Ağacı)',
    passage: 'Orta Çağ Avrupa\'sında, Katolik Kilisesi\'nin o en kanlı, en kibirli ve en karanlık kurumu olan Engizisyon Mahkemeleri, sapkın (!) ilan ettikleri insanlara işkence etmek ve onların onurunu, iradesini (ruhunu) kırmak için akılalmaz "mekanik" aygıtlar icat etti. Bunların en iğrenci ve en dondurucu olanı "Fica" (İspanyol İnciri / İşkence Armudu) adındaki metal nesneydi. Armut şeklindeki bu ağır çelik alet, kurbanın ağzına (veya vücut boşluklarına) kilitleniyor, ardından işkenceci arkadaki vidayı çevirdikçe metal armut içeriden yaprak yaprak açılarak genişliyor, kurbanın çenesini, kemiklerini ve etini canlı canlı, içeriden parçalayarak genişliyordu! Kurbanın tek bir çığlık atacak veya "İtiraf ediyorum!" diyecek bir ağzı (veya dili) bile kalmıyordu; çünkü alet içeriden her şeyi eziyordu. Bu dondurucu mekanizma, dinsel kibrin ve otorite çılgınlığının ulaştığı o en ahlaksız zirvedir: İktidar (Kilise), insanın o en kutsal "Onurunu, sözcüklerini ve iradesini" dışarıdan bir kılıçla değil; bizzat insanın kendi bedeninin içine (ağzına) sızıp onu içeriden metal vidalarla genişleterek parçalayan, insanı kendi etinin ve acısının içinde dilsiz birer et yığınına çeviren o en organize ve endüstriyel sadizmin (canavarlığın) belgesidir.',
    questionStem: 'Engizisyonun "İşkence Armudu (Fica)" adındaki metal vidayı ağızda genişleterek çeneyi parçalayan mekanizması, iktidar ve "Bireysel İrade/Onur" bağlamında neyin karanlık bir sembolüdür?',
    options: [
      'Orta Çağ\'da demir ve çelik işleme sanayisinin cerrahi alet üretiminde ne kadar geri kaldığının',
      'İktidarın ve dinsel kibrin; bireyin o en kutsal "onurunu, sesini ve iradesini" kırmak için; dışsal saldırılarla yetinmeyip, bizzat insanın kendi mahrem beden boşluklarına (ağzına) sızarak onu içeriden vidalarla genişletip parçalayan, insanı kendi acısında dilsizleştiren o "organize, mekanik ve acımasız" (endüstriyel) sadizminin',
      'Hırsızlık suçunu işleyen insanların dillerini kesmek için kullanılan basit bir hukuk aygıtı olduğunun',
      'İspanyol mühendislerin tıp dünyasına katkı sağlamak için kasten anatomi cihazları tasarladıkları yalanını'
    ],
    correct: 2,
    explanation: 'Metal armudun ağızda vidayla genişletilerek çeneyi ve dili ezmesi; iktidarın ve dinsel gücün, bireyin sesini/onurunu ve iradesini kırmak için insanın kendi bedeninin içine sızıp onu içeriden mekanik vidalarla genişleterek dilsizleştiren o organize, mekanik ve acımasız sadizminin (canavarlığının) sembolüdür.'
  },
  {
    title: 'Kadavra Sinodu (Ölümden Sonra Bile Yargılanmak)',
    passage: 'Tarihin gördüğü en absürt, en iğrenç ve en akıl dışı "mahkeme" olayı, MS 897 yılının Ocak ayında Roma\'daki San Giovanni kilisesinde yaşandı: "Kadavra Sinodu" (Cadaver Synod). Katolik Kilisesi\'nin o dönemki kibirli ve intikamcı lideri Papa VI. Stephanus, kendinden önceki ölmüş olan düşmanı "Papa Formosus"tan nefret ediyordu. Hırsını alamadı ve akıllara zarar o emri verdi: Papa Formosus\'un **TAM 9 AY ÖNCE ÖLMÜŞ VE TOPRAĞA GÖMÜLMÜŞ OLAN CESEDİ** mezardan çıkarıldı! O çürümüş, kokmuş, kurtlanmış kadavraya (iskelete) süslü papalık kıyafetleri giydirildi ve kilisedeki sanık koltuğuna (tahta) oturtuldu! Karşısına bir avukat kondu. Yeni Papa, o 9 aylık kokmuş cesede bakarak saatlerce bağırdı, onu vatana ihanetle suçladı. Tabii ki ceset cevap veremedi (sustu). Mahkeme sonunda ceset "Suçlu" bulundu; Formosus\'un papalık kutsaması iptal edildi, cesedin kutsal işaret yapan "üç parmağı baltayla kesildi" ve o çürük kadavra Roma sokaklarında sürüklenip Tiber Nehri\'ne fırlatıldı! Kadavra Sinodu, siyasetin ve gücün o sınır tanımaz, şizofrenik kibrinin en dondurucu anıtıdır: İktidar hırsı ve nefret o kadar kör, o kadar hudutsuzdur ki; adaleti ve hukuku, mezardaki dilsiz ve çürümüş bir "iskeletle" bile savaşacak, ölü bir eti yargılayıp parmaklarını kesecek kadar akıl dışı, şovmen ve hastalıklı bir tiyatro sahnesine (cinnete) çevirmekten zerre kadar utanmaz.',
    questionStem: 'MS 897\'deki "Kadavra Sinodu" vakası (9 aylık ölü papanın mezardan çıkarılıp mahkemede yargılanması ve parmaklarının kesilmesi), "İktidar ve Güç Psikolojisi" hakkında hangi karanlık gerçeği ifşa eder?',
    options: [
      'Orta Çağ\'da mezarlıkların hijyen kurallarına uymadığı için salgın hastalıklara yol açtığı gerçeğini',
      'Katolik Kilisesi\'nin hukuk sisteminin dünyadaki tüm anayasalardan daha şeffaf ve adil çalıştığı yanılgısını',
      'Siyasi ve dini gücün (nefretin) o sınır tanımaz, şizofrenik ve muazzam "kibrini" ifşa ederek; iktidar hırsının, adaleti ve mantığı mezardaki çürümüş dilsiz bir "iskeletle" bile savaşacak, ölü bir eti yargılayıp parmaklarını kesecek kadar akıl dışı, hastalıklı ve şovmen bir cinnete (tiyatroya) dönüştürebilme potansiyelini',
      'Nehre atılan cesetlerin suyun kimyasal yapısını bozarak balık ölümlerine neden olduğunun ekonomik açıklamasını'
    ],
    correct: 3,
    explanation: 'Mezardan çıkarılan 9 aylık kokmuş cesedin tahta oturtulup yargılanması ve parmaklarının kesilmesi; iktidar/siyaset kibrinin ve nefretinin o kadar kör ve şizofrenik olduğunu ki, adaleti mezardaki dilsiz iskeletle bile savaşacak kadar akıl dışı, şovmen ve hastalıklı bir tiyatro sahnesine (cinnete) çevirebileceğini ifşa eder.'
  },
  {
    title: 'Geryon\'un Sürüsü (Mülkiyetin Kanlı Masalı)',
    passage: 'Yunan mitolojisinde Geryon, üç kafalı, üç gövdeli ve altı kollu devasa bir canavardır. Dünyanın en güzel, parlak ve kızıl renkli sığır sürüsüne (mülkiyetine) sahiptir. Bu sürüyü korumak için iki kafalı canavar bir köpek (Orthrus) ve acımasız bir çoban kiralamıştır. Geryon kimseye saldırmaz; tek yaptığı, o koca adasında oturup o kızıl sığır sürüsünü (zenginliğini) bencilce izlemek ve mülkiyetini korumaktır. Ancak Herkül, kendine verilen "10. Görev" uğruna o adaya gelir; hiçbir suçu olmayan Geryon\'u okla vurarak katleder, köpeğinin kafasını ezer ve o muazzam kızıl sığır sürüsünü bencilce çalarak kralına götürür. Karl Marx ve felsefe bu masaldaki o buz gibi "Mülkiyet" ironisini söker alır: Hikâyedeki asıl "canavar" üç kafalı Geryon değil; sırf başkasına ait olan o parlak, çekici zenginliği (sürüyü) bencilce çalmak, fethetmek ve yağmalamak için o adayı kana bulayan kahraman (!) kılıklı "Herkül"ün (Emperyalizmin) ta kendisidir. Tarih, kazanan o "hırsız tiranları (Herkülleri)" kahraman ilan ederken; tek suçu kendi mülkünü korumak olan dürüst yerlileri (Geryonları) canavar gibi gösteren devasa bir propaganda sinemasıdır.',
    questionStem: 'Mitolojideki Geryon ve Herkül masalı (Herkül\'ün sığır sürüsü için Geryon\'u öldürüp mülkünü çalması), "Mülkiyet, Savaş ve Tarih" felsefesinde neyin eleştirel bir metaforudur?',
    options: [
      'Hayvancılık sektörünün antik dünyada krallıklar arasında en büyük ticaret savaşı nedeni olduğunun',
      'Canavarların her zaman iki kafalı köpekler kullanarak insanları kasten korkutmaya çalıştığı inancının',
      'Tarihin ve mitlerin o iki yüzlü kibrini yıkarak; asıl "canavar ve zalim" olan gücün, başkasının zenginliğini (mülkünü) sömürmek ve yağmalamak için adaları kana bulayan kahraman (!) maskeli "Herküller (Emperyalizm)" olduğu; tarihin ise bu hırsızları aklayan bir propaganda (yalan) şovu olduğu gerçeğinin',
      'Herkül\'ün aslında sadece fakir halkı korumak için zenginlerin topraklarını kamulaştıran adil bir lider olduğunun'
    ],
    correct: 3,
    explanation: 'Kendi sürüsünü izleyen 3 kafalı devin Herkül (kahraman) tarafından öldürülüp sürüsünün çalılması; asıl canavarın mülkü sömürmek için adayı basan kahraman maskeli "Herküller (Emperyalizm)" olduğu ve tarihin bu hırsızları akalayan bir yalan/propaganda şovu olduğunun metaforudur.'
  },
  {
    title: 'Kutup Ayılarının Siyah Derisi (Görünüşün İllüzyonu)',
    passage: 'Kutup ayılarını (Ursus maritimus) o dondurucu Arktik buzullarının üzerinde izlediğimizde, onları bembeyaz, pamuk gibi kusursuz ve karla kaplı beyaz bir kürkün içinde görürüz. Gözümüz bize "Bu hayvan bembeyazdır" diye yemin eder. Oysa biyoloji bilimi mikroskoptan baktığında o dondurucu ve şoke edici illüzyonu yırtar atar: Kutup ayılarının tek bir tane bile beyaz tüyü (veya beyaz kılı) yoktur! Kutup ayısının kürkünü oluşturan o kılların içi tamamen boş, şeffaf ve renksiz "cam (kuvars) tüplerden" ibarettir! Bu şeffaf tüpler, güneş ışığını doğrudan içeri (deriye) geçirir ve tıpkı bir seranın camı gibi ışığı hapseder. En akılalmaz olanı ise o beyaz tüy illüzyonunun altındaki çıplak tendir: **KUTUP AYILARININ GERÇEK DERİSİ SİMSİYAHTIR!** Zifiri siyah olan o deri, şeffaf kıllardan sızan güneş enerjisini emerek hayvanı sıcak tutar. Gördüğümüz o beyazlık, şeffaf kılların ışığı yansıtmasından doğan optik bir yalandır. Kutup ayısı bize varoluşun o buz gibi kuralını fısıldar: Bizim "Beyaz, temiz, saf ve sarsılmaz" sanarak taptığımız o en parlak dış vitrinlerin (veya insanların) tam altını kazıdığınızda; karşınıza çıkacak olan asıl gerçeğin, o sistemi ayakta tutan o "zifiri, simsiyah ve karanlık" bir makine (biyolojik bir hile) olduğunu anlarsınız.',
    questionStem: 'Kutup ayılarının aslında "şeffaf kıllara ve simsiyah bir deriye" sahip olmasına rağmen gözümüze "bembeyaz" görünmesi, nesnelerin doğası hakkında hangi felsefi hakikatin metaforudur?',
    options: [
      'Buzul iklimlerinde hayvanların kürk renklerinin avcılardan kaçmak için kasten mutasyona uğradığının',
      'Bizim dışarıdan bakıp "Saf, temiz, beyaz ve sarsılmaz" sandğımız o en parlak dış vitrinlerin ve kurguların; aslında derinlerinde (altında) o sistemi ayakta tutan, güneş enerjisini emen "zifiri, simsiyah ve tamamen farklı" mekanik birer hile (karanlık bir makine) barındırdığı ironisinin',
      'Şeffaf malzemelerin güneş ışınlarını yansıtırken her zaman enerjiyi sıfırlayıp dünyayı soğuttuğunun',
      'Kutup ayılarının aslında siyah ayıların kutuplara göç ederek evrimleşmesiyle oluşan temelsiz bir tür olduğunun'
    ],
    correct: 2,
    explanation: 'Beyaz tüy sanılan şeyin şeffaf cam tüp çıkması ve altındaki derinin simsiyah olması; bizim dışarıdan bakıp "saf, temiz, beyaz" sandığımız parlak vitrinlerin/insanların aslında derinlerinde o sistemi yaşatan zifiri, simsiyah ve tamamen farklı mekanik birer hile (karanlık makine) sakladığının metaforudur.'
  },
  {
    title: 'Gutenberg Galaksisi (Aklın Mekanikleşmesi)',
    passage: '1440 yılında Johannes Gutenberg hareketli parçalarla çalışan matbaayı (baskı makinesini) icat ettiğinde, sadece kitapları çoğaltmadı; insan beyninin düşünme ve dünyayı algılama kurallarını baştan aşağı "mekanik olarak" yeniden formatladı. Matbaadan önce insanlık bilgiyi kulaktan kulağa, seslerle, ritimlerle ve toplu olarak (bütünsel/akışkan) yaşıyordu. Ancak Marshall McLuhan\'ın "Gutenberg Galaksisi" kitabında özetlediği gibi; bilginin kâğıt üzerine düz çizgiler halinde, harf harf, kutu kutu ve peş peşe (lineer) basılmaya başlanmasıyla birlikte; insan zihni de bilgiyi parçalara bölen, sınırlandıran, bireysel (bencilce) okuyan ve hayatı "düz bir çizgi (ilerleme)" sanan mekanik bir robota dönüştü. Matbaa, insanı özgürleştirmedi; aksine, aklımızı o kâğıttaki siyah harflerin o dar, köşeli ve hiyerarşik kutularının içine hapsederek, bizi doğanın o akışkan ve çok boyutlu gerçekliğinden koparıp "Lineer (Düz çizgisel) bir kibrin" kölesi yaptı.',
    questionStem: 'Johannes Gutenberg\'in matbaayı icat etmesinin insan zihni üzerindeki asıl "felsefi ve sosyolojik" etkisi (Gutenberg Galaksisi) nedir?',
    options: [
      'Kitap fiyatlarının ucuzlamasıyla birlikte kütüphanelerin devlet hazinesine daha çok vergi ödemesini sağlaması',
      'İnsanın dünyayı işitme ve dokunma duyularıyla algılamasını hızlandırarak sanatta devrim yaratması',
      'Bilgiyi kâğıda düz çizgiler ve harf kutuları halinde basarak; insan aklını da olayları parçalara bölen, bireyselleştiren, hayatı "düz bir çizgi (lineer)" sanan mekanik, hiyerarşik ve sınırlı bir algı şablonuna (kibre) hapsetmesi',
      'Kağıt üretiminde ağaçların kullanılmasının Avrupa ormanlarını tamamen yok eden ekolojik kriz doğurması'
    ],
    correct: 3,
    explanation: 'Matbaanın bilgiyi satırlara/kutulara dizmesiyle aklın da lineerleşmesi; insanın dünyayı o harf kutuları gibi parçalara bölen, bireyselleştiren ve hayatı düz bir çizgi (ilerleme) sanan mekanik/hiyerarşik bir algı kibrine hapsedildiğini (Gutenberg Galaksisini) kanıtlar.'
  }
];

export const bilimParagrafSorulari60: SincityParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_60.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_60[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim60-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: theme.explanation ? `${theme.explanation} (Soru ${qNo})` : `(Soru ${qNo})`
  };
});
