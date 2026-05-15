import type { SincityParagrafQuestion } from './types';

const PARAGRAPH_THEMES_59 = [
  {
    title: 'Robbers Cave Deneyi (Yapay Düşmanlık)',
    passage: '1954 yılında psikolog Muzafer Sherif, tamamen sağlıklı, normal ve birbirini hiç tanımayan 11 yaşındaki 22 çocuğu bir yaz kampına (Robbers Cave) götürdü. Çocukları rastgele iki gruba ("Kartallar" ve "Çıngıraklı Yılanlar") ayırdı. Başlangıçta her şey normaldi. Ancak araştırmacılar gruplar arasında (kupa için) rekabetçi oyunlar başlattığında kan dondurucu bir değişim yaşandı. Sadece birkaç gün içinde o masum ve medeni çocuklar; birbirlerinin bayraklarını yakan, yatakhanelerini basan, taşlarla saldıran ve karşı tarafı "insanlık dışı canavarlar" olarak gören vahşi birer kabileye (fanatiğe) dönüştüler! Sherif deneyi anında durdurmak zorunda kaldı. "Robbers Cave Deneyi", ırkçılığın ve savaşların o karanlık matematiğini ifşa eder: İnsanların birbirinden nefret etmesi için genetik bir kine, tarihi bir düşmanlığa veya haklı bir sebebe ihtiyaçları yoktur. Onları sadece "Biz ve Onlar" diye iki yapay kampa bölüp aralarına küçücük bir rekabet (kıtlık/ödül) atmanız; o medeni insanları saniyeler içinde birbirinin kanını içmeye hazır vahşi birer kabileye dönüştürmeye (aklı felç etmeye) fazlasıyla yeterlidir.',
    questionStem: 'Muzafer Sherif\'in "Robbers Cave Deneyi"nde sıradan çocukların saniyeler içinde birbirine saldıran iki vahşi kabileye dönüşmesi, "Düşmanlık ve Irkçılık" hakkında neyi kanıtlamaktadır?',
    options: [
      'Çocukların yaz kamplarında ailelerinden uzak kalınca her zaman agresifleşerek psikolojik çöküş yaşadıklarını',
      'Düşmanlığın, önyargının ve savaşların doğuştan gelen derin bir nedene ihtiyaç duymadığını; otoritenin kitleleri sadece "Biz ve Onlar" diye yapay (kurgusal) iki kampa bölüp rekabete sokmasının, medeniyeti anında çökerterek vahşi bir kabilecilik (nefret) yaratmaya yettiğini',
      'Kamp oyunlarındaki spor aletlerinin çocuklarda fiziksel bir adrenalin zehirlenmesine yol açtığını',
      '11 yaşındaki çocukların hiçbir zaman ahlaki kuralları kavrayamayacak kadar zihinsel olarak ilkel olduklarını'
    ],
    correct: 1,
    explanation: 'Rastgele ayrılan masum çocukların rekabetle hemen birbirine düşman olması; nefretin ve ırkçılığın derin nedenlere değil, otoritenin yarattığı yapay "Biz ve Onlar (kutuplaşma/rekabet)" algısına dayanan kolayca kurgulanabilen vahşi bir kabilecilik (illüzyon) olduğunu kanıtlar.'
  },
  {
    title: 'Afantazi (Zihnin Kör Gözü)',
    passage: 'Gözlerinizi kapatın ve zihninizde "kırmızı bir elma" hayal edin. Çoğu insan o elmanın rengini, şeklini ve parlaklığını kafatasının içinde (karanlıkta) net bir sinema perdesi gibi görür. Ancak dünya nüfusunun %2\'si için bu eylem mutlak bir imkânsızlıktır! Psikolojide buna "Afantazi" (Aphantasia - Zihnin Körlüğü) denir. Afantazi hastası gözlerini kapattığında hiçbir görüntü, hiçbir renk veya şekil göremez; onun zihni kelimenin tam anlamıyla "zifiri, sağır edici ve boş bir karanlıktır." Onlar bir elmayı görsel olarak değil, sadece mantıksal bir "veri (kırmızı, yuvarlak ve meyve)" olarak kelimelerle tanımlayabilirler. İşin en sarsıcı yanı; bu insanların çoğu ömürlerinin sonuna kadar "diğer insanların zihinlerinde gerçekten resimler gördüğünü" bilmezler! Bunun sadece bir "mecaz" olduğunu sanırlar. Afantazi, o çok güvendiğimiz "ortak gerçeklik" algısını parçalar: Hepimiz aynı fiziksel dünyada yürüdüğümüzü sanırız; oysa her birimizin kafatasının içindeki o kapalı oda (bilincimiz), diğerinin asla anlayamayacağı ve tecrübe edemeyeceği kadar farklı, izole ve tamamen yabancı birer (kör veya renkli) simülasyondur.',
    questionStem: 'Afantazi (zihinde görsel hayal kuramama) hastalığına sahip insanların, diğerlerinin hayal kurabildiğini bilmemesi, "İnsan Bilinci ve Gerçeklik" algısına dair neyi ifşa eder?',
    options: [
      'İnsanların gözlerini kapattıklarında oksijen eksikliğinden dolayı kısa süreli felç geçirdiklerini',
      'İnsanların beynindeki görsel hafızanın sadece çocukluk döneminde çalışıp yetişkinlikte kapandığını',
      'Hepimizin "aynı fiziksel gerçekliği aynı şekilde algıladığımız" yönündeki o kibirli yanılgıyı yıkarak; aslında her insanın kendi kafatasının içinde (bilincinde) diğerine tamamen yabancı, izole ve asla paylaşılamayacak (bambaşka) bir içsel evren yaşadığı gerçeğini',
      'Elma ve benzeri meyvelerin genetik olarak insan hafızasında yer tutmayan anlamsız nesneler olduğunu'
    ],
    correct: 2,
    explanation: 'Zihni kör olanın başkalarının hayal gördüğünü "mecaz" sanması; hepimizin dünyayı aynı şekilde (ortak gerçeklikle) algıladığımız kibrini yıkarak, her insanın kendi bilincinde başkasına tamamen yabancı ve izole bir içsel evren (simülasyon) yaşadığını ifşa eder.'
  },
  {
    title: 'Hilbert\'in Oteli (Sonsuzluğun Matematiği)',
    passage: 'Alman matematikçi David Hilbert, insan aklının "Sonsuzluk" kavramını algılamaktaki o acınası yetersizliğini (kibrini) kırmak için o meşhur ve çıldırtıcı düşünce deneyini kurguladı: "Sonsuz odası olan ve BÜTÜN ODALARI DOLU olan devasa bir otel düşünün." Gece yarısı otele yeni bir müşteri gelir. Normal (sonlu) bir otelde müdür "Yerimiz yok" der. Ancak Hilbert\'in otelinde müdür gülümser ve mikrofondan anons yapar: "Herkes oda numarasını bir artırarak (1 numaradakiler 2\'ye, 2\'dekiler 3\'e) yandaki odaya geçsin!" Sonsuz sayıda müşteri bir yana kaydığında, anında "1 numaralı oda" yeni müşteri için boşalmış olur! Otele bir kişi değil, "sonsuz sayıda yeni müşteri" gelse bile; herkes kendi oda numarasını ikiyle çarparak (çift numaralı odalara) geçer ve anında sonsuz tane tek numaralı oda yeni gelenler için açılır! Otel hem ağzına kadar %100 DOLUDUR hem de içine "yepyeni sonsuzluklar" alabilecek kadar BOŞTUR! Hilbert\'in Oteli; insan beyninin dünyevi, sınırlı ve kaba (gündelik) mantığının; matematiğin o ucu bucağı olmayan, kuralları büken ve aklı paralize eden o uçsuz bucaksız "sonsuzluk krallığı" karşısında nasıl kilitlenip iflas ettiğinin dondurucu bir kanıtıdır.',
    questionStem: 'Hilbert\'in Oteli\'nde "Ağzına kadar tam dolu olan otelin, sonsuz yeni müşteri kabul edebilmesi" (Paradoks), yazar tarafından neyin metaforik ve mantıksal bir ispatı olarak kullanılmıştır?',
    options: [
      'Gelecekteki otellerin mimari olarak hareketli duvarlarla tasarlanarak büyütülebileceğinin',
      'İnsanoğlunun "gündelik, kaba ve sonlu" dünyevi mantığının; matematiğin o kuralları büken, aklı felç eden ve paradokslar barındıran "sonsuzluk (uçsuz bucaksız)" kavramı karşısında tamamen iflas edip yetersiz kaldığının',
      'Turizm sektöründe matematikçilerin kullanılmasının her zaman kâr marjını artırdığı yönündeki ekonomik kuralın',
      'Sonsuzluğun aslında uzay boşluğunda eriyerek sonlu bir maddeye dönüştüğü fiziksel gerçeğinin'
    ],
    correct: 1,
    explanation: 'Dolu otelin içine sonsuz kişi alabilmesi paradoksu; insan beyninin gündelik (sonlu/sınırlı) mantığının, matematiğin o akıl almaz, kuralları büken "sonsuzluk krallığı" karşısında çaresiz kalıp iflas ettiğini kanıtlar.'
  },
  {
    title: 'Bağdat Pili (Tarihsel Anakronizm)',
    passage: '1938 yılında Irak\'ın Bağdat yakınlarındaki bir köyde (MÖ 250 yılına ait Part İmparatorluğu kalıntılarında) arkeologlar akılalmaz bir anomali buldular. Kilden yapılmış küçük bir küpün içine bakır bir silindir, onun da içine demir bir çubuk (asfaltla mühürlenerek) yerleştirilmişti. Üzerinde asidik sıvı (üzüm suyu veya sirke) kalıntıları vardı. Bilim insanları bu kalıntının aynısını laboratuvarda ürettiklerinde şoka girdiler: Bu sistem tam yarım volt elektrik üretiyordu! Ortada bir "Bağdat Pili" (Baghdad Battery) vardı! Elektriğin (galvanik hücrenin) 1800 yılında Alessandro Volta tarafından icat edildiğini sanan modern bilim donup kaldı. Partların bu pili lambaları yakmak için değil, altın kaplama (elektroliz) yapmak veya dini ritüellerde cemaati hafifçe çarparak "Tanrı\'nın gücünü hissettirmek" için kullandıkları düşünülüyor. Bağdat Pili, tarihin o kibirli "Düz Çizgi" dogmasını yıkar: İnsanoğlu geçmişi hep cahil ve ilkelden, moderne doğru tırmanan kesintisiz bir merdiven sanır. Oysa kâinat; çoktan bulunmuş, unutulmuş, toprağın altında çürümüş ve binlerce yıl sonra modern sanılarak "yeniden (kibirle) icat edilmiş" teknolojik sırların ve kopuk kayıp çağların devasa bir mezarlığıdır.',
    questionStem: 'Bağdat Pili\'nin (MÖ 250 yılında elektrik üreten bir cihazın bulunması) arkeolojik ve felsefi anlamı, "Tarihin İlerlemesi" hakkında hangi dogmayı yerle bir etmektedir?',
    options: [
      'Elektriğin aslında uzaylılar tarafından insanlara hediye edilmiş tehlikeli bir teknoloji olduğu inancını',
      'Tarihin "ilkelden moderne doğru sürekli, kesintisiz ve düz bir çizgi halinde ilerlediği" kibrini yıkarak; aslında medeniyetin, bulunup unutulan, kopuk ve binlerce yıl sonra yeniden (sanki ilkmiş gibi) icat edilen devasa kayıp bilgi mezarlıklarıyla dolu olduğunu',
      'Asitli sıvıların o dönemde sadece silah yapmak için kullanıldığı yönündeki askeri teoriyi',
      'Antik dönemde insanların karanlıktan korktukları için kasten yeraltına şehirler kurduklarını'
    ],
    correct: 1,
    explanation: '2000 yıl önce pil (elektrik) yapılmış olması; tarihin hep "ilkelden moderne doğru (kesintisiz/düz)" ilerlediği kibrini yıkarak, medeniyetin aslında kaybolan, unutulan ve kopuk teknolojilerin mezarlığı olduğunu kanıtlar.'
  },
  {
    title: 'Nyos Gölü Felaketi (Sessiz Boğulma)',
    passage: 'Doğal felaketleri hep gürültülü depremler, fırtınalar veya alev kusan volkanlar olarak hayal ederiz. Ancak Kamerun\'daki "Nyos Gölü", 21 Ağustos 1986 gecesi kıyametin "tamamen sessiz ve dilsiz" de olabileceğini kanıtladı. Nyos, volkanik bir kraterin üzerinde duran derin, sakin ve mavi bir göldü. Yıllar boyunca volkandan sızan milyonlarca ton Karbondioksit (CO2) gazı, gölün en dibindeki soğuk sularda (basınçla) sinsi bir saatli bomba gibi birikmişti. O gece, ufak bir toprak kayması (veya rüzgâr) gölün suyunu karıştırdı (Limnik Patlama). Göl aniden suları havaya kustu ve o devasa, renksiz, kokusuz (havadan ağır) ölümcül karbondioksit bulutu vadiden aşağıya saatte 100 kilometre hızla akmaya başladı. Uyuyan köylerin üzerine çöktüğünde hiçbir ses, hiçbir alev yoktu; oksijen anında buharlaştı. Sadece birkaç saat içinde o vadideki 1.746 insan ve 3.500 hayvan uykularında tek bir çığlık bile atamadan sessizce boğularak (kavrularak) can verdi. Nyos Gölü Felaketi; doğanın insanlığı yok etmek için her zaman gürültüye veya ateşe ihtiyaç duymadığını; en sakin ve durgun sandığımız manzaranın (suyun) bile, altındaki o görünmez ve dilsiz birikimle saniyeler içinde devasa bir ölüm odasına (sessiz bir kıyamete) dönüşebileceğini gösteren korkutucu bir manifestodur.',
    questionStem: 'Kamerun\'daki Nyos Gölü Felaketi\'nin (renksiz gazın uykudaki binlerce insanı boğması) yıkıcı doğası, felaketler (ve doğa) algımız hakkında neyi sarsmaktadır?',
    options: [
      'Göl kenarında kurulan köylerin su baskınlarına karşı hiçbir zaman güvenli olmadığını',
      'Felaketlerin (kıyametin) her zaman gürültülü, alevli ve şiddetli olması gerektiği inancını sarsarak; doğanın en sakin, dilsiz ve görünmez yüzünün (gazın) bile saniyeler içinde koca bir şehri boğan sessiz, acımasız ve mutlak bir katliama dönüşebileceğini',
      'Afrika iklimindeki rüzgarların insan ciğerlerini kasten hedef alarak solunumu kestiğini',
      'Karbondioksit gazının sadece fabrikalardan çıkarak dünyayı ısıtan bir madde olduğu yalanını'
    ],
    correct: 1,
    explanation: 'Sakin gölün kokusuz gazla binlerce insanı sessizce boğması; kıyametlerin/felaketlerin hep gürültülü ve alevli olması gerektiği beklentisini yıkarak, doğanın en sakin/görünmez halinin bile mutlak ve dilsiz bir katliama dönüşebileceğini gösterir.'
  },
  {
    title: 'Birim 731 (Veri Uğruna Bağışlanan Vahşet)',
    passage: 'İkinci Dünya Savaşı denilince akla Nazi kampları gelir; oysa Asya\'nın karanlığında Japon İmparatorluk Ordusu\'na ait "Birim 731" (Unit 731) adında öyle şeytani bir biyolojik silah laboratuvarı vardı ki, Naziler bile onların yanında çırak kalırdı. Komutan Shiro Ishii liderliğinde, binlerce Çinli ve Rus savaş esiri ("Kütükler" adını verdikleri insanlar) üzerinde anestezi olmadan canlı canlı otopsiler (viviseksiyon) yapıldı, dondurucu soğukta uzuvları kırılarak kangren testleri uygulandı, kasıtlı olarak veba mikrobu şırınga edildi. İnsan bedeni, ruhsuz bir makine parçası gibi parçalanıyordu. Savaş bittiğinde dünya adaletin tecelli etmesini, bu şeytanların asılmasını bekledi. Peki galip Amerika Birleşik Devletleri ne yaptı? Bilimin (ve devlet aklının) o en ahlaksız sözleşmesini imzaladı! ABD, "Japonların insanlar üzerinde yaptığı o devasa (ve Amerikan biliminin asla ahlaki olarak yapamayacağı) paha biçilmez biyolojik ve kimyasal test VERİLERİNİ (notlarını)" alabilmek karşılığında; Birim 731\'in komutanı Shiro Ishii\'ye ve o katil doktorlara "Tam Dokunulmazlık (Af)" verdi! Birim 731 gerçeği; devletlerin ve bilimin "saf bilgi, stratejik veri ve teknolojik üstünlük" söz konusu olduğunda; adaleti, insan onurunu ve ahlakı saniyeler içinde çöpe atıp şeytanla bile gözünü kırpmadan masaya oturduğunun en dondurucu ve iğrenç belgesidir.',
    questionStem: 'ABD\'nin Birim 731\'deki (Unit 731) Japon savaş suçlularını "deney verilerini (notlarını) almak karşılığında" affetmesi, "Devlet Aklı ve Bilim" hakkında neyin en karanlık kanıtıdır?',
    options: [
      'Japon doktorların aslında mahkûmları iyileştirmeye çalıştıkları için Amerika tarafından ödüllendirildiklerinin',
      'Modern devletlerin (ve bilimin), "stratejik veri, bilgi ve teknolojik üstünlük" elde etme fırsatı (çıkarı) bulduğunda; en iğrenç savaş suçlarını, ahlakı ve adaleti saniyeler içinde çöpe atıp şeytanla bile (pragmatik) bir anlaşma yapabilecek kadar "vicdansız (ahlaksız)" olduğunun',
      'Veba mikrobunun o dönemde Amerikan topraklarında da yayıldığı için acil olarak şifaya ihtiyaç duyulduğunun',
      'Savaş esirlerinin her zaman gönüllü olarak tıbbi testlere katılmaktan büyük onur duyduklarının'
    ],
    correct: 1,
    explanation: 'ABD\'nin vahşice katliam yapan Japon doktorları sırf "bilimsel verilerini/notlarını" almak için affetmesi; devletin ve bilimin pragmatik çıkar/veri uğruna ahlakı ve adaleti (vicdanı) saniyeler içinde çöpe atabildiğinin en ahlaksız ve vicdansız kanıtıdır.'
  },
  {
    title: 'Cıvık Mantar Zekâsı (Beyinsiz Mühendislik)',
    passage: 'İnsanoğlu zekânın sadece kafatasındaki "bir beyinle (merkezi sinir sistemiyle)" var olduğuna inanır. Ancak biyologlar "Cıvık Mantar" (Physarum polycephalum) adında, beyni, sinir sistemi, midesi veya gözü OLMAYAN tek hücreli (sarı yapışkan) bir organizmayı incelediklerinde akıllarını yitirdiler. Araştırmacılar, laboratuvarda "Tokyo ve çevresindeki şehirleri" temsil eden bir harita kurdular, her şehrin olduğu yere bu mantarın sevdiği yulaf tanelerini koydular ve ortasına o beyinsiz mantarı bıraktılar. Mantar saniyeler içinde kollara ayrılıp yulaflara (şehirlere) ulaşmaya başladı. Ancak 24 saat sonra dondurucu bir şey oldu: Mantar, yulaflara giden o en kısa, en verimli ve en hızlı damar ağını (rotayı) oluşturmuş, gereksiz tüm kollarını geri çekmişti. Bilim insanları o mantarın çizdiği bu sarı damar ağına baktıklarında şoka girdiler: O beyinsiz mantarın sadece 24 saatte çizdiği (kurguladığı) ağ; Tokyo\'daki en iyi mühendislerin milyarlarca dolar ve on yıllar harcayarak planladığı "Tokyo Metro Ağının (Raylı Sistemin)" MİLİMETRİK OLARAK BİREBİR AYNISIYDI! Cıvık Mantar; kâinattaki "Mühendislik, problem çözme ve Zekâ" kavramlarının sadece insan aklına (nöronlara) ait bir tekel olmadığını; doğanın, en ilkel ve beyinsiz sarı bir çamurun içine bile, şehirlerimizi ve mantığımızı ezip geçen devasa, dilsiz ve merkeziyetsiz bir evrimsel "Algoritma (Deha)" yerleştirdiğini yüzümüze çarpan sarı bir tokat gibidir.',
    questionStem: 'Beyni olmayan Cıvık Mantar\'ın (Physarum polycephalum) yiyecek ararken 24 saatte "Tokyo Metro Ağı"nın birebir aynısını çizmesi, insanlığın "Zekâ ve Mühendislik" kibrine dair neyi ispatlar?',
    options: [
      'Mantarların sadece Japonya ikliminde yaşayabildikleri için oradaki şehirleri iyi tanıdıklarını',
      'İnsan mühendisliğinin ve yüksek aklının o övündüğü (devasa bütçeli) "problem çözme ve ağ kurma (zekâ)" kapasitesinin; aslında merkezi bir beyne (sinire) bile ihtiyaç duymayan, doğanın içine kodlanmış, dilsiz, ilkel ve "merkeziyetsiz bir biyolojik algoritma (çamur)" tarafından bile saniyeler içinde kusursuzca yaratılabileceğini',
      'Tokyo metrosunun yapımında kasten çürük malzemeler kullanıldığı için hatların sürekli çöktüğünü',
      'Uzaydan gelen bitki türlerinin dünyadaki şehir planlamalarını bozarak radyasyon yaydığını'
    ],
    correct: 1,
    explanation: 'Beyni olmayan mantarın insan aklıyla (mühendislerle) yapılan metronun aynısını (en verimli yolu) çizmesi; zekânın (mühendisliğin) insan beynine has bir tekel olmadığını, doğanın merkeziyetsiz/ilkel bir biyolojik algoritmaya bile bu kusursuz "deha"yı kodlayabildiğini (insan kibrini yıkarak) ispatlar.'
  },
  {
    title: 'Hasta H.M. (Dünü Olmayan Adam)',
    passage: '1953 yılında Henry Molaison (tıp dünyasındaki adıyla Hasta H.M.) şiddetli epilepsi nöbetlerini durdurmak için ameliyat masasına yattı. Cerrah, beynin her iki yanındaki "Hipokampus" bölgesini söküp aldı. Henry uyandığında nöbetleri geçmişti, zekâsı ve konuşması sapasağlamdı. Ancak doktorlar onunla konuşup odadan çıktılar, 5 dakika sonra geri döndüklerinde Henry onlara "Siz kimsiniz? Sizi ilk kez görüyorum!" dedi! Hipokampus olmadan Henry, hayatının son 55 yılı boyunca (ölesiye dek) artık ASLA yeni bir anı, isim veya yüz kaydedemedi (İleriye dönük amnezi). O, sürekli olarak 1953 yılında yaşadığını sanan, zihni 5 dakikada bir sıfırlanan "Dünü Olmayan Adam"dı. Ancak bilim dünyasını asıl şoka sokan olay başkaydı: Doktorlar ona aynaya bakarak "yıldız çizmeyi" gösterdiler. Henry bunu her gün yaptı, her gün doktorlara "Bunu ilk defa yapıyorum" diyordu ama elleri o yıldızı her gün DAHA KUSURSUZ çiziyordu! Kafasındaki anı merkezi (bilinci) yoktu ama "Bedeni (Kasları)" öğrenmeye devam ediyordu! Hasta H.M. bilime o en karanlık sırrı hediye etti: Hafıza dediğimiz şey, beynin içinde tek bir havuzda biriken homojen bir anı deposu değildir; "Kim olduğumuz (bilincimiz/hatıralarımız)" ile "Ne yapabildiğimiz (bedenimizin motor becerileri)" birbirinden tamamen kopuk, ayrı kablolara bağlanan şizofrenik ve parçalanmış birer çekmecedir.',
    questionStem: 'Hasta H.M.\'nin (Henry Molaison) yeni hiçbir anı (isim/olay) hatırlamamasına rağmen "ayna karşısında yıldız çizmeyi (bedensel yeteneği) öğrenmeye devam etmesi", insan hafızası hakkında hangi nörolojik devrimi kanıtlamıştır?',
    options: [
      'Görsel zekâya sahip insanların sadece aynalara bakarak geçmişteki hatalarını telafi edebildiğini',
      'Hafızanın tek ve bütünsel (homojen) bir kayıt cihazı olmadığını; "Bilincin (olayları/kimliği hatırlamanın)" ile "Motor becerilerin (bedenin yapmayı öğrenmesinin)" birbirinden tamamen farklı, bağımsız ve kopuk nörolojik sistemler (ayrı çekmeceler) olduğunu',
      'Hipokampus ameliyatlarının insanlarda anında ve kalıcı bir körlüğe (görme kaybına) yol açtığını',
      'Bedenin zamanla yaşlanarak zihinden bağımsız bir şekilde kendi kendini çürütmeye programlandığını'
    ],
    correct: 1,
    explanation: 'Henry\'nin dünü unutmasına rağmen elinin (kaslarının) çizmeyi öğrenmesi; hafızanın tek parça olmadığını, "olayları hatırlama (bilinç)" ile "kasların öğrenmesi (motor beceri)" sistemlerinin beyinde birbirinden tamamen ayrı/kopuk çalıştığını kanıtlayan en büyük devrimdir.'
  },
  {
    title: 'Ayrık Beyin Deneyleri (Kafatasındaki İki Ruh)',
    passage: 'Beynimizin sağ ve sol yarımküresini birbirine bağlayan kalın sinir ağını (Korpus Kallozum) keserseniz içinizdeki "Benliğe" ne olur? 1960\'larda Nobel ödüllü Roger Sperry bu ameliyatı geçiren (Ayrık Beyin) hastalarla o dondurucu deneyi yaptı. Konuşma merkezi SOL beyindedir; SAĞ beyin ise dilsizdir ama sol kolu yönetir. Hastanın sadece "SAĞ" beyninin göreceği şekilde ekrana "Yürü" kelimesini yansıttılar. Hasta anında ayağa kalktı ve yürümeye başladı! Araştırmacı hastaya sordu: "Neden yürüyorsun?" Oysa "Yürü" komutunu sadece dilsiz sağ beyin görmüştü, konuşan sol beynin (ve hastanın bilincinin) o kelimeden ZERRE KADAR haberi yoktu! Peki konuşan sol beyin ne yaptı? "Bilmiyorum" demek yerine anında dondurucu bir YALAN (Kurgu) üretti: "Iııı... Canım kola çekmişti, gidip kola alacaktım!" dedi! Sol beyin, kendi kontrolü dışında (sağ beyin tarafından) yapılan bu otonom eylemi kabullenememiş, o karanlık boşluğu (gerçekliği) saniyeler içinde "Kendisi karar vermiş gibi" sahte bir niyetle (rasyonalizasyonla) doldurarak kendini (ve bizi) kandırmıştır. Ayrık Beyin deneyleri; o kutsal sandığımız "Bütünsel Benliğimizin (Ruhumuzun)", aslında beynin sol tarafının karanlıkta olup biten her şeye durmaksızın kılıf ve mantık uydurarak bize anlık kurguladığı bir "basın sözcüsü (veya kurgusal bir yazar)" illüzyonundan ibaret olduğunu ifşa eder.',
    questionStem: 'Ayrık Beyin (Split-brain) deneyinde, sağ beynin emriyle yürüyen hastanın sol beyniyle (konuşarak) "Kola almaya gidiyorum" yalanını uydurması, o yüce "Benlik (Bilinç)" algımıza dair hangi kâbusu kanıtlar?',
    options: [
      'Sinir ağlarının ameliyatlarda koptuğunda ayak kaslarına felç benzeri ağrılar yolladığını',
      'İnsanoğlunun o "Kusursuz ve bütünsel bir bilincim (benliğim) var" algısının koca bir yalan olduğunu; bilincimizin (sol beynin), aslında vücudun (karanlıkta) bizden habersiz yaptığı eylemlere anında "sanki kendi rızasıyla yapmış gibi" sahte, mantıklı bahaneler (kılıflar/kurgular) uyduran çaresiz bir "masalcı (illüzyon makinesi)" olduğunu',
      'İnsanların sadece acıktıklarında ve susadıklarında yalan söyleme eğiliminde olduklarını',
      'Sağ ve sol beynin birbirinden nefret ederek kişiyi her zaman intihara sürüklemeye çalıştığını'
    ],
    correct: 1,
    explanation: 'Dilsiz sağ beynin eylemine, habersiz olan sol beynin "ben kola alacaktım" diye kılıf uydurması; o sarsılmaz "Benlik" (bilinç) hissimizin aslında, kontrolümüz dışındaki eylemlere "ben seçtim" diyerek sahte kurgular üreten beynin bir illüzyonu (masalcı bir basın sözcüsü) olduğunu kanıtlar.'
  },
  {
    title: 'Lima Sendromu (Celladın Merhameti)',
    passage: 'Stockholm Sendromu\'nu (Rehinenin kendisini rehin alan teröriste âşık olmasını) hepimiz biliriz. Ancak psikolojinin omuzlarına çöken çok daha karanlık (ve absürt) bir ayna daha vardır: "Lima Sendromu". 1996 yılında Peru\'nun başkenti Lima\'da, kana susamış (ve acımasız) Tupac Amaru gerillaları Japonya Büyükelçiliğini bastı ve yüzlerce diplomatı, askeri, siyasetçiyi rehin aldı. Dünyanın en elit insanlarını öldürmekle tehdit ediyorlardı. Ancak günler geçtikçe akılalmaz bir kırılma yaşandı. Teröristler (Silahlı zorbalar), ellerinde tuttukları o rehinelerle konuşmaya, onların dertlerini dinlemeye ve yavaş yavaş onlarla "Empati" kurmaya başladılar! O kana susamış katiller, bir süre sonra rehinelere kıyamayarak onları acıyarak serbest bırakmaya (ve bazılarıyla dost olmaya) başladılar! "Lima Sendromu", şiddetin ve ideolojinin (zırhının) insan doğası karşısındaki çöküşüdür: İnsanoğlunun beyni; düşmanını kâğıt üzerinde (ve uzaktan) bir sayı veya "kötü bir canavar" olarak nefretle kodlayabilir; ancak onu yakından gördüğünde, gözlerinin içine baktığında, insanın içindeki o kadim ve zorunlu "Ayna Nöronlar (Empati)", en soğukkanlı celladın bile elindeki o kılıcı (ideolojiyi) eritip onu aciz ve merhametli birine dönüştürecek kadar karşı konulamaz ve evrensel bir biyolojik virüstür.',
    questionStem: 'Lima Sendromu\'nda (Silahlı teröristlerin ellerindeki rehinelere acıyarak onları serbest bırakması), şiddet ve insan psikolojisi bağlamında neyin (biyolojik) bir ispatı yatmaktadır?',
    options: [
      'Rehinelerin aslında teröristlerden daha zeki olduğu için onları zihinsel olarak manipüle ettiklerinin',
      'İdeolojik nefretin ve soğukkanlı (silahlı) zorbalığın; insanları yakından tanıyıp göz teması kurduğunda devreye giren o kadim, engel olunamaz "Empati ve Şefkat (Ayna nöronlar)" mekanizması karşısında saniyeler içinde eriyip çöken, geçici ve sahte bir zırh olduğunun ispatı',
      'Güney Amerika\'daki gerillaların aslında hiçbir zaman silahlı eylemler yapacak cesarete sahip olmadıklarının',
      'Büyükelçilik binalarındaki ortamın insan beynini uyuşturarak her zaman barışçıl düşüncelere ittiğinin'
    ],
    correct: 1,
    explanation: 'Katillerin rehineleri tanıyınca acıyıp serbest bırakması (Lima Sendromu); uzaktan duyulan ideolojik nefretin/şiddetin, insanla yüz yüze (yakın temas) gelindiğinde çalışan o kaçınılmaz biyolojik Empati/Şefkat mekanizması karşısında eriyip çöken sahte bir zırh olduğunu ispatlar.'
  },
  {
    title: 'Çehov\'un Silahı (Kurgunun Mekanik Yasası)',
    passage: 'Eğer bir roman okuyorsanız veya bir film izliyorsanız, her detayın bir amacı olduğuna güvenirsiniz. Büyük Rus yazar Anton Çehov, sanattaki ve hayattaki bu beklentiyi "kestirip atan" o efsanevi kuralıyla (Çehov\'un Silahı) formüle etmiştir: "Eğer bir tiyatro oyununun birinci perdesinde duvarda asılı bir tüfek olduğunu izleyiciye gösteriyorsanız; o tüfek ikinci veya üçüncü perdede mutlaka patlamak (kullanılmak) ZORUNDADIR! Eğer patlamayacaksa, o tüfeği o duvara baştan hiç asmamalısınız!" Çehov, hikâye anlatıcılığındaki gereksiz süslemeleri, anlamsız detayları ve izleyiciyi oyalayan çöp yığınlarını bu acımasız yasayla kesip atar. Bu kural sadece edebiyatı değil, insan aklının "Nedensellik (Anlam) Beklentisini" de özetler: Zihnimiz, etrafında gördüğü (dikkatine sunulan) her nesnenin, her detayın ve her olayın sonunda bir amaca, bir patlamaya (büyük bir finale) hizmet etmesini bekleyen; anlamsızlığa, boşluğa (ve süslemeye) tahammülü olmayan kurgusal (ve takıntılı) bir anlam makinesidir.',
    questionStem: 'Anton Çehov\'un "Duvardaki tüfek gösteriliyorsa, mutlaka patlamalıdır" (Çehov\'un Silahı) kuralı, edebiyat felsefesinden öte "İnsan Zihni ve Nedensellik" hakkında neyi sembolize etmektedir?',
    options: [
      'Tiyatro salonlarının ve sahnelerinin her zaman şiddete ve silahlara yer vermesi gerektiği kuralını',
      'Silahların sadece tiyatro oyunlarında kullanıldığında yasal ve sanatsal bir değere sahip olduğunu',
      'Sanattaki kurgusal arınmanın yanı sıra; insan zihninin, dikkatine sunulan her eylemin (veya detayın) eninde sonunda mantıklı (ve anlamlı) bir nedensellik zincirine (büyük bir amaca/patlamaya) hizmet etmesini bekleyen, anlamsız (boş) süslemelere tahammülü olmayan takıntılı bir anlam arayışı makinesi olduğunu',
      'Roman yazarlarının her zaman savaş hikâyeleri anlattığında daha çok okuyucu (ilgi) bulduğunu'
    ],
    correct: 2,
    explanation: 'Çehov\'un gösterilen silahın patlaması gerektiği kuralı, insanın dikkat ettiği her detayın mutlaka bir amacı ve sonucu (nedenselliği/patlaması) olmasını beklediğini, boş ve anlamsız süslere beynin tahammül edemediğini (anlam arayışı) sembolize eder.'
  },
  {
    title: 'Godwin Yasası (Tartışmanın Hitler Noktası)',
    passage: 'İnternet üzerinde siyaset, felsefe veya sadece "kedi mamasının zararları" hakkında bile bir tartışma başlatsanız, tartışma uzadıkça akılalmaz ve ironik bir sona (uçuruma) doğru yelken açar. 1990 yılında Mike Godwin, modern dijital iletişimin bu felsefi iflasını bir kanunla (Godwin Yasası) mühürledi: "Bir internet tartışması ne kadar uzarsa (büyürse), o tartışmaya katılanlardan birinin, karşısındakini \'Hitler\'e veya Nazilere\' benzetme ihtimali istatistiksel olarak 1\'e (Yani %100 Kesinliğe) yaklaşır!" İster iklim krizini, ister oyun konsollarını tartışın; argümanlar tükendiğinde, öfke ve fanatizm (radikalleşme) devreye girer. Karşı tarafı yenecek rasyonel ve mantıklı kelimeler kalmadığında, insan zihni en kestirme, en ucuz ve en ezici silaha sarılarak muhatabını "Mutlak Kötülükle (Hitler\'le)" damgalamayı seçer. Godwin Yasası; iletişim çağının, medeni tartışmaları (fikirleri) ilerletmek yerine; insanları aklın iflas ettiği o kutuplaşmış, mantıksız ve şeytanlaştırma (linç) batağına (Hitler noktasına) sürükleyen devasa, toksik bir yankı odası olduğunun en komik ve dondurucu ispatıdır.',
    questionStem: 'Godwin Yasası (Tartışma uzadıkça konunun eninde sonunda Hitler veya Nazilere gelme kesinliği), internet çağında "İletişim ve Tartışma" kültürü hakkında neyin ironik bir ispatıdır?',
    options: [
      'Tarihsel bilgilerin sadece sosyal medya üzerinden doğru bir şekilde kitlelere aktarılabileceğini',
      'İnsanların dijital ortamda tartışırken rasyonel (mantıklı) argümanları tükendiğinde (veya öfke arttığında); fikirleri savunmak yerine en kestirme ve mantıksız yola saparak karşısındakini "mutlak kötülükle (Nazilerle) şeytanlaştırma/linç etme" (aklın iflası) kolaycılığına düşmesini',
      'Almanya tarihinin internet forumlarında her zaman en çok tıklanan ve okunan başlıklar olduğunu',
      'Tartışmaların sadece siyasi içerik taşıdığında Hitler konusuna odaklandığı yönündeki temelsiz inancı'
    ],
    correct: 1,
    explanation: 'Her tartışmanın uzadığında "Sen Hitler gibisin" suçlamasına gelmesi (Godwin); insanların mantıklı argümanları bitince kolaycılığa kaçıp (aklın iflası) karşısındakini mutlak kötülükle şeytanlaştırma (linç etme) refleksini ifşa eder.'
  },
  {
    title: 'Güney Denizi Balonu (Newton\'ın İflası)',
    passage: 'Sir Isaac Newton; yerçekimini, fiziğin temellerini ve kâinatın matematiksel sırlarını çözen, insanlık tarihinin en büyük zekâlarından biridir. Ancak 1720 yılında İngiltere\'de yaşanan "Güney Denizi Şirketi" (South Sea Company) krizinde, o tanrısal zekâ bile yerle bir oldu. Şirketin hisseleri, Amerika\'daki (hayali ve yalan) zenginliklerle şişirilip satılıyordu. Herkes hisse alıp zenginleşirken (sürü psikolojisi), Newton başta rasyonel davranıp parasını çekti. Ancak hisseler akıl dışı bir şekilde tırmanmaya devam edip etrafındaki herkes (aptallar bile) zenginleşince; Newton o kibre (ve sürüye kapılma hırsına) yenik düştü! Gitti ve tüm servetini o hisselere (o anlamsız balona) geri yatırdı! Sadece haftalar sonra balon patladı ve koca dâhi, bugünün parasıyla milyonlarca dolar kaybederek tamamen iflas etti! Newton o acı verici, efsanevi cümleyi kurdu: "Yıldızların hareketini (ve kâinatı) santimi santimine hesaplayabilirim; ancak insanların (kitlelerin) deliliğini asla!" Güney Denizi Balonu; en yüce ve en üstün aklın bile (matematiğin bile), toplumun "açgözlü, bulaşıcı ve rasyonellikten uzak (sürü) deliliği" (ve piyasa kibri) karşısında saniyeler içinde yenik düşüp kendi çöküşünü imzalayabileceğinin en acı verici ekonomi dersidir.',
    questionStem: 'Isaac Newton\'ın "Güney Denizi Balonu" krizinde sürüye uyarak tüm servetini kaybetmesi ve "Yıldızları hesaplarım ama kitlelerin deliliğini asla" demesi, insan aklı ve kitle psikolojisi hakkında neyi ispatlar?',
    options: [
      'Fizikçilerin ekonomiden anlamadıkları için her zaman bankalardan uzak durması gerektiği kuralını',
      'Yıldızları (fiziği) çözecek kadar kusursuz (ve rasyonel) bir zekânın bile; kitlelerin o "açgözlü, bulaşıcı ve irrasyonel sürü psikolojisi (deliliği)" girdabına girdiğinde, kendi mantığını ezip geçerek iflasa (ve kibre) sürüklenmekten kurtulamayacağını',
      'Güney Amerika denizlerinde batan gemilerin o dönemki borsaları kasten sabote ettiğini',
      'Şirketlerin sadece matematikçileri çalıştırarak borsada yükselme yalanı uydurduğunu'
    ],
    correct: 1,
    explanation: 'Newton\'ın sürüye kapılıp iflas etmesi; en kusursuz (fiziksel/rasyonel) zekânın bile, açgözlü (irrasyonel) sürü psikolojisinin/deliliğinin o bulaşıcı girdabına (ve hırsına) yenik düşebileceğini ispatlar.'
  },
  {
    title: 'Filojiston Teorisi (Kimyanın Hayaleti)',
    passage: '17. ve 18. yüzyılda, dünyanın en zeki kimyagerleri "yanma (ateş)" olayını açıklamak için o dondurucu dogmaya, "Filojiston" teorisine tapıyorlardı. Onlara göre yanan her nesnenin (odunun veya kâğıdın) içinde "Filojiston" adında görünmez, gizemli bir madde (ruh) vardı. Nesne yandıkça bu madde havaya karışıp uçuyor, geriye kalan küller ise "Filojistonsuz" olduğu için yanmıyordu. Yüzyıl boyunca tüm akademik tezler, tüm kitaplar bu hayalet madde (yalan) üzerine kuruldu. Hatta bir metal yandığında (oksitlendiğinde) ağırlaştığını gördüklerinde, "Demek ki Filojistonun negatif (eksi) bir ağırlığı var!" diyerek o yalanı korumak için daha da absürt yalanlar uydurdular! Ta ki 1770\'lerde Antoine Lavoisier gelip, yanan şeyin içinden bir ruhun çıkmadığını, aksine havadaki "Oksijen"in o maddeyle birleştiğini (ve onu ağırlaştırdığını) tartarak kanıtlayana dek. "Filojiston Teorisi", bilimin o en utanç verici kibridir: Akademik otorite, "anlayamadığı" bir gerçeği (ateşi) kabullenmek yerine; hiç var olmayan görünmez hayaletler (Filojiston) uydurmaya ve o yalanı ayakta tutmak için yüzyıllarca kendini körleştirmeye programlanmış (dogmatik) bir uydurma sanatıdır.',
    questionStem: 'Kimyagerlerin yanma olayını açıklamak için hiç var olmayan "Filojiston" maddesini uydurması ve koruması, "Bilimsel İlerleme ve Otorite" bağlamında neyin sembolüdür?',
    options: [
      'Görünmez maddelerin kimyada her zaman en değerli elementler olduğu gerçeğinin',
      'Havadaki oksijenin sadece bitkiler tarafından üretildiği yönündeki eski bir inancın',
      'Bilimsel otoritenin ve akademik kibrin; anlayamadığı gerçekler (boşluklar) karşısında cehaletini kabullenmektense, tamamen kurgusal/sahte hayaletler (teoriler) uydurup onu asırlarca "dogmatik ve kör bir inatla" savunma (yanılgıyı koruma) zaafının',
      'Ateşin aslında sadece ruhani ve dini bir cezalandırma aracı olduğu yönündeki mistik yaklaşımın'
    ],
    correct: 2,
    explanation: 'Kimyagerlerin 100 yıl boyunca var olmayan Filojiston elementine (ve negatif ağırlığına) inanması; otoritenin gerçeği kabullenmektense uydurma (hayalet) teoriler yaratıp onu dogmatik bir inatla koruma (bilimsel körlük) zaafının sembolüdür.'
  },
  {
    title: 'Çıplak Körfareler (Memelilerin Kovan Aklı)',
    passage: 'İnsanoğlu, "Kraliçe, işçiler ve askerler" şeklinde bir hiyerarşiyle, tamamen kendi benliğini yok edip "Kovanı (Koloniyi)" korumak için yaşayan kölece (ösoyal) yapının sadece arılara ve karıncalara (böceklere) özgü bir ilkel sistem olduğuna inanır. Oysa Afrika çöllerinin yeraltında yaşayan "Çıplak Körfareler" (Naked Mole-Rats), memelilerin o övündüğü bireysellik (ve bencillik) kibrini tek ısırıkta parçalar! Bu memeli hayvanlar; tıpkı karıncalar gibi devasa bir "Kraliçe Körfare"nin emrinde çalışırlar. Kraliçe, salgıladığı özel idrarı (feromonları) diğer körfarelere yürüdükleri tünellerde yürüterek onların üreme organlarını (ve bireysel hırslarını) kimyasal olarak FELÇ EDER! Milyonlarca körfare, kendi çocukları olmadan, sadece kraliçeye hizmet etmek, tünel kazmak ve yılanlara karşı "canlı canlı yem olmak (askerlik yapmak)" için kendilerini (bireyselliklerini) feda ederler (Eusosyalite). Çıplak Körfareler, evrimin o korkutucu uyarısıdır: En gelişmiş canlı sınıfı olan memelilerin bile içinde; şartlar zorlaştığında bireyselliği ve özgürlüğü (benliği) anında çöpe atarak; kimyasal bir tiranlığın, körü körüne itaatin ve hastalıklı bir "Kovan Aklı"nın uysal (ve dilsiz) bir kölesine dönüşebilme potansiyeli (kâbusu) kodlanmıştır.',
    questionStem: 'Çıplak Körfarelerin (memeli olmalarına rağmen) tıpkı arılar gibi kraliçeye hizmet edip bireyselliklerini yok etmeleri (Kovan Aklı / Eusosyalite), evrim felsefesinde neyin (ürpertici) bir ispatıdır?',
    options: [
      'Yeraltında yaşayan hayvanların genetik olarak körleşip sadece koku alma duyularını geliştirdiğinin',
      'Farelerin çöl ikliminde su bulabilmek için kasten birbirlerini yiyerek hayatta kaldıklarının',
      'Gelişmiş "bireysellik ve özgür irade" ile övünen memeliler sınıfında bile; doğanın zorlayıcı şartları altında, bireyliği çöpe atıp "kimyasal bir diktatörlüğün (kraliçenin) ve kör itaatin (Kovan Aklının)" mutlak kölesine dönüşme potansiyelinin (evrimsel uysallığın) var olduğunun',
      'Sadece Afrika kıtasında yaşayan canlıların diğer kıtalara göre daha saldırgan olduğunun'
    ],
    correct: 2,
    explanation: 'Memeli olan farelerin kraliçenin kimyasallarıyla "karınca gibi" köleye dönmesi (Kovan aklı/Eusosyalite); gelişmiş/bireysel sandığımız memelilerde bile, zor şartlarda bireyselliğin çöpe atılıp mutlak itaatkâr/kimyasal bir diktatörlüğe (Kovan aklına) dönüşebilme potansiyelinin olduğunu ispatlar.'
  },
  {
    title: 'Ames Odası (Gözün İhaneti)',
    passage: 'Bir odaya bakıyorsunuz; sol köşede cüce kadar küçük bir adam, sağ köşede ise tavana değen dev gibi bir adam duruyor. Gözleriniz bu orantısızlığa yemin edebilir. Ancak o "cüce" adam yürüyüp sağ köşeye geçtiğinde, o saniye gözlerinizin önünde büyüyüp bir DEVE dönüşür, diğeri ise sol köşeye geçtiğinde küçücük bir cüce olarak büzülür! İnsan beynini felç eden bu algı oyununun adı "Ames Odası"dır (Ames Room). Aslında iki adam da tamamen aynı boydadır. İşin sırrı (kâbusu) odanın kendisindedir: Oda, pencereleri ve zeminiyle çarpık, yamuk ve asimetrik (yamuk bir kutu) olarak inşa edilmiştir. Ancak beynimiz, "Odalar her zaman dikdörtgen (düz) olur" kibrine o kadar inatçı ve körü körüne (ezberden) bağlıdır ki; odanın yamuk (hatalı) olduğunu KABUL ETMEK YERİNE, fizik kurallarını ve mantığını çöpe atarak "İnsanların saniyeler içinde büyüyüp küçüldüğüne" inanmayı tercih eder! Ames Odası; güvendiğimiz o sarsılmaz "Gözlerime inanırım" algısının; aslında beynin kendi ezberleri (ve önkabulleri) uğruna fiziksel gerçeği anında büküp bizi kasten kör ettiği (ve kandırdığı) dilsiz bir optik hapishane olduğunu kanıtlar.',
    questionStem: 'Ames Odası yanılsamasında, beynimizin "odanın yamuk olduğunu" anlamak yerine "insanların büyüyüp küçüldüğünü" görmesi, insan algısı (ve zihni) hakkında neyi ifşa eder?',
    options: [
      'İnsan gözünün 3 boyutlu nesneleri algılamakta doğuştan tamamen yetersiz ve felçli olduğunu',
      'Beynimizin; geçmişten gelen "ezberlerine ve önkabullerine (oda düzdür kibrine)" öylesine fanatikçe bağlı olduğunu ki; bu ezberi bozmamak uğruna, fiziksel gerçeği ezip geçerek en absürt (mantıksız) durumlara (adamın büyümesine) bile inanmayı tercih eden kusurlu ve kendini kandıran bir illüzyon makinesi olduğunu',
      'Göz doktorlarının optik yanılsamaları her zaman yanlış teşhis ettiği yönündeki tıbbi eleştiriyi',
      'Mimarideki asimetrik yapıların insanları sadece estetik olarak rahatsız ettiğini'
    ],
    correct: 1,
    explanation: 'Odanın yamukluğunu reddedip adamın büyümesine inanmamız (Ames Odası); beynimizin kendi "ezberlerini (önkabullerini)" korumak uğruna fiziksel gerçeği ve mantığı ezip geçerek bizi kasten o en absürt illüzyona inandırmaya dünden razı bir makine olduğunu ifşa eder.'
  },
  {
    title: 'Eben Byers ve Radithor (Şifalı Radyasyon Kibri)',
    passage: '1920\'lerde Amerika\'nın en ünlü zenginlerinden (ve sporcularından) olan Eben Byers, kolundaki bir ağrıyı iyileştirmek için doktorunun tavsiyesiyle mucizevi bir ilaca başladı: "Radithor". Bu ilaç, içine "Radyum" elementi (radyasyon) katılmış saf ve pahalı bir sudan ibaretti! O dönem tıp dünyası, radyoaktif maddelerin hücreleri canlandırdığına, güç verdiğine ve yaşlanmayı durdurduğuna dair akıl dışı (ve kibirli) bir sahte bilime tapıyordu. Byers o sulardan günde üç şişe (toplam 1.400 şişe) içti. Vücudunu ve kemiklerini kelimenin tam anlamıyla radyasyona boğdu. 1932 yılına gelindiğinde o korkunç son yaşandı: Byers\'ın çenesi radyasyondan çürüyerek kelimenin tam anlamıyla "yüzünden düştü", kafatasında delikler açıldı ve kemikleri içeriden eriyerek canice can verdi! Bedeni o kadar radyoaktifti ki, cesedini kurşun kaplı (ve yüzyıllarca açılamayacak) bir tabuta koyup mühürlemek zorunda kaldılar. Eben Byers (ve Radithor çılgınlığı); tıp biliminin ve kapitalizmin (pazarlamanın), "Yenilik ve Şifa" maskesi altında; radyasyon gibi ölümcül bir cehennemi bile "sağlıklı bir enerji içeceği" olarak (göz göre göre) kitlelerin damarlarına (ve kemiklerine) zerk edebilecek kadar cahil, kör ve yıkıcı bir kibir yuvası olabileceğinin kemiksiz ve erimiş anıtıdır.',
    questionStem: 'Eben Byers\'ın sağlığına kavuşmak için "Radyumlu (Radyasyonlu) Sular" içip çenesinin düşerek ölmesi, tıp ve inovasyon (yenilik) algımız hakkında neyin ölümcül bir uyarısıdır?',
    options: [
      'Zengin insanların her zaman yoksul halktan daha kısa ömürlü olduğunun genetik ispatıdır',
      'Su tüketiminin aşırıya kaçtığında insan midesini delerek zehirlenmeye yol açtığının',
      'Bilim ve kapitalizmin "Yeni, şifalı ve mucizevi" diyerek (kibirle) pazarladığı o popüler inovasyonların; uzun vadeli etkileri (ve zehri) bilinmediğinde, kitlelerin vücuduna ölümcül bir kıyameti (ve erimeyi) "şifa maskesi" altında satabilen kör (ve yıkıcı) bir tehlike olduğunun uyarısıdır',
      'Radyum elementinin sadece sporculara enerji vermek için üretilen masum bir takviye olduğunun'
    ],
    correct: 2,
    explanation: 'Radyasyonun (cehalet ve kâr hırsıyla) "şifa" diye pazarlanıp adamın çenesini eriterek öldürmesi; bilimin/kapitalizmin "yeni inovasyon" maskesi altında, ölümcül/test edilmemiş bir zehri bile kitlelere (kibirle) şifa diye yutturabilen yıkıcı körlüğünün uyarısıdır.'
  },
  {
    title: 'Vela Olayı (Kozmik ve Siyasi Körlük)',
    passage: '22 Eylül 1979 gecesi, Amerikan "Vela 6911" uydusu, Dünya\'nın en ıssız bölgelerinden birinde, Güney Atlantik ve Hint Okyanusu arasında (Prens Edward Adaları yakınlarında) gökyüzünü yırtan o çifte parlaklığı (Double Flash) tespit etti. Bu çifte flaş, nükleer bir patlamanın ("Atom Bombasının") %100 kesin, şaşmaz ve inkar edilemez imzası (parmak izi) idi. Patlama 2 ila 3 kiloton (küçük ama ölümcül) gücündeydi. Bütün dünyada alarm verildi; okyanusun ortasında gizlice nükleer bomba patlatan kimdi? İsrail mi, Güney Afrika mı, yoksa Sovyetler mi? Amerika Birleşik Devletleri hükümeti paniğe kapıldı ama asıl korkunç olanı (ve siyasi kâbusu) sonrasında yaptı: Gerçeği bulmak yerine, siyasi dengeleri (ve anlaşmaları) bozmamak adına alelacele bir komisyon kurdular. Bu komisyon (Ruina Paneli) bilimsel gerçekleri ezip geçerek; o nükleer parlamanın aslında "Uydunun kamerasına küçük bir meteoritin (mikrometeor) çarpmasıyla oluşan bir yansıma hatası (göz yanılgısı)" olduğunu söyleyerek olayı arsızca örtbas etti! Vela Olayı, bilim ve hakikatin siyasetin soğuk dehlizlerinde nasıl buharlaştığının ispatıdır: Devlet aklı; kendi uluslararası çıkarları ve korkuları zedelendiğinde; koca bir okyanusun ortasında patlayan bir nükleer cehennemi (kıyameti) bile, "Kameraya toz kaçtı" diyerek o sarsılmaz bilimin gözlerinin içine baka baka silebilen en yüzsüz (ve karanlık) illüzyonisttir.',
    questionStem: '1979 Vela Olayı\'nda (uydunun nükleer patlama tespit etmesine rağmen hükümetin bunu "kameraya çarpan bir taş" diyerek örtbas etmesi), "Devlet Aklı ve Hakikat" ilişkisine dair neyin dondurucu bir (siyasi) ispatıdır?',
    options: [
      'Göktaşlarının atmosfere girdiğinde her zaman nükleer bomba kadar güçlü patlamalar yarattığının',
      'Devlet aklının (ve siyasi çıkarların/korkuların); kendi menfaati zedeleneceği zaman, bilimsel ve kesin (nükleer) bir hakikati bile "kameraya toz kaçtı" gibi arsız, uydurma ve yüzsüz bahanelerle saniyeler içinde silebilen karanlık bir örtbas (illüzyon) makinesi olduğunun',
      'Uyduların kameralarının okyanus üzerindeki yansımalardan dolayı her zaman körleşip bozulduğunun',
      'Nükleer denemelerin her zaman barışçıl amaçlarla ve kimseye zarar vermeden yapıldığının'
    ],
    correct: 1,
    explanation: 'Nükleer flaşı "kameraya çarpan meteor" yalanıyla örtbas etmeleri; devlet aklının (çıkarları uğruna) en kesin/bilimsel (ve yıkıcı) bir hakikati bile "yüzsüz/arsız" yalanlarla silip illüzyon yaratabilen karanlık doğasını ispatlar.'
  },
  {
    title: 'Alvarez Hipotezi ve İridyum (Taştaki Kıyamet)',
    passage: 'Yıllarca paleontologlar dinozorların yavaş yavaş, hastalıklardan veya küçük iklim değişikliklerinden dolayı "zamanla sönümlenerek" yok olduğuna inandılar. Felaket teorileri bilim dünyasında her zaman alay konusuydu. Ancak 1980 yılında fizikçi Luis Alvarez ve jeolog oğlu Walter Alvarez, İtalya ve Danimarka\'daki 66 milyon yıllık kaya katmanlarını (K-T Sınırını) incelerken aklı felç eden bir kimyasal imza buldular. Kayaların tam o incecik çizgisinde (katmanında), dünya yüzeyinde çok nadir bulunan ama uzaydaki asteroitlerde bolca olan "İridyum" elementi normalin yüzlerce katı yoğunluğundaydı! Bilim dünyasına o tokat gibi gerçeği (Alvarez Hipotezini) sundular: Dinozorlar hastalıktan ölmedi; Everest Dağı büyüklüğünde uzaylı bir asteroit dünyaya çarptı ve yeryüzünü saniyeler içinde kavurarak (toz bulutuyla güneşi keserek) aniden ve mutlak bir kıyametle yeryüzünden sildi! Alvarez\'in o incecik İridyum tozu, bilimin "Her şey yavaş yavaş değişir" (Üniformitaryanizm) kibrini dinamitlemiştir. Doğa ve tarih her zaman uslu bir nehir gibi yavaş akmaz; evren, o uslu nehri saniyeler içinde uzaydan gelen dilsiz bir kayayla ezip küle çevirebilen, şiddetli, ani ve mutlak felaketlerin (Kıyametlerin) arenasıdır.',
    questionStem: 'Alvarez\'in kaya katmanlarında uzaydan gelen "İridyum" elementini bularak dinozorların asteroitle aniden yok olduğunu ispatlaması, o dönemki "Tarih ve Evrim" algısındaki hangi (uslu) yanılgıyı yıkmıştır?',
    options: [
      'Dinozorların aslında uzaylılar tarafından diğer gezegenlere kasten taşındıkları tezini',
      'Dünya tarihinin ve evrimin her zaman "yavaş yavaş, sakin ve kademeli (uslu bir nehir gibi)" değiştiği yanılgısını (kibrini) yıkarak; tarihin (ve doğanın) uzaydan gelen ani, şiddetli ve koca ekosistemleri saniyeler içinde yok eden mutlak felaketlerle (kıyametlerle) şekillendiği gerçeğini',
      'İridyum metalinin aslında volkanik dağların eteklerinde üretilen sahte bir materyal olduğunu',
      'Fizikçilerin jeoloji ve fosil bilimine karışmalarının akademik olarak yasaklanması gerektiğini'
    ],
    correct: 1,
    explanation: 'İridyum tozuyla dinozorların "aniden/göktaşıyla" yok olduğunun ispatı; tarihin ve evrimin hep "yavaş/kademeli" değiştiği kibrini (üniformitaryanizm) yıkarak, doğanın ani, şiddetli ve mutlak kıyametlerle (felaketlerle) şekillendiğini gösterdi.'
  },
  {
    title: 'Proje Güvercin (Füzeyi Süren Kuşlar)',
    passage: 'İkinci Dünya Savaşı sırasında (1943), füzelerin hedefini (gemileri) kusursuzca vurmasını sağlayacak otonom bilgisayarlar henüz icat edilmemişti. Akıllı füzeler yoktu. Oysa Amerikalı davranışçı psikolog B.F. Skinner, "Gelişmiş silikon çiplere ihtiyacımız yok, doğanın o en aptal (ama eğitilebilir) canlısını, güvercinleri füzelerin beyni yapabiliriz!" diyerek o dehşet verici (ve distopik) "Project Pigeon"ı (Proje Güvercin) sundu. Skinner, füzelerin burun (uç) kısmına küçük birer ekran ve üç adet canlı güvercin koydu. Füzeler havadayken, güvercinler o küçük ekranlarda düşman gemisini görüyor ve gagalarıyla (ödül yemi almak için) sürekli hedef geminin olduğu yere ekranı tıklıyorlardı (gagalıyorlardı). Onların o otonom gagalamaları füzeye yön veriyor ve bombayı kusursuzca (canlı canlı) hedefin üstüne sürüyordu! Proje son anda iptal edildi (çok absürt bulunduğu için). Ancak "Proje Güvercin", insanoğlunun o en karanlık faydacılığının (ve kibir sınırının) manifestosudur: Bizim "Öldürme ve teknoloji" hırsımız o kadar soğuk ve dilsizdir ki; en gelişmiş silahları (ölüm makinelerini) hedefe sürmek için, doğanın en masum canlısını (kuşları) bile; kafese kapatılmış, yem uğruna kendi kendini (ve koca gemileri) havaya uçuran "gönüllü ve biyolojik (et) kamikazelere (yazılımlara)" dönüştürmekten zerre kadar utanmaz ve tereddüt etmeyiz.',
    questionStem: 'B.F. Skinner\'ın füzeleri hedefe uçurmak için "ekranı gagalayan canlı güvercinleri" (Proje Güvercin) kullanması, insanoğlunun teknoloji ve "doğayı (canlıları) sömürme" hırsı hakkında neyi sembolize eder?',
    options: [
      'Güvercinlerin aslında insanlardan daha zeki varlıklar olduğu ve savaşları yönettiği fantezisini',
      'Kuşların göz yapısının ekranlardaki siyah beyaz görüntüleri her zaman bulanık gördüğü gerçeğini',
      'İnsanoğlunun (ve savaş endüstrisinin) o soğuk "yıkım (ve faydacılık)" hırsı uğruna; doğanın en masum canlılarını bile (biyolojik birer çip/köle gibi) kullanarak, onları kendi katliam mekanizmalarını (bombaları) süren "ölümcül (ve sömürülen) kamikazelere" dönüştürmekten zerre utanmayacağını',
      'İkinci Dünya Savaşı\'nda Amerikan uçaklarının kuş çarpmaları yüzünden sürekli düştüğünü'
    ],
    correct: 2,
    explanation: 'Bombaları yönlendirmek için füzeye güvercin yerleştirmeleri; insanın savaş ve yıkım hırsı uğruna, masum canlıları ahlaksızca "biyolojik çipler (kamikazeler/köleler)" olarak ölüm silahlarına entegre etmekten çekinmediğini (faydacılığını) sembolize eder.'
  }
];

export const bilimParagrafSorulari59: SincityParagrafQuestion[] = Array.from({ length: PARAGRAPH_THEMES_59.length }, (_, idx) => {
  const theme = PARAGRAPH_THEMES_59[idx];
  const qNo = idx + 1;

  return {
    id: `turkce-bilim59-p-${qNo}`,
    subject: 'turkce',
    term: 2,
    prompt: `${theme.passage}\n\n${theme.questionStem}`,
    options: [...theme.options],
    correct: theme.correct,
    explanation: theme.explanation ? `${theme.explanation} (Soru ${qNo})` : `(Soru ${qNo})`
  };
});
