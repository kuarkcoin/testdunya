import { SubjectData } from './types';

export const fenData: SubjectData = {
  term1: {
    test1: [
      { id: "f5-1-01", subject: "fen", term: 1, prompt: "Güneş, Dünya ve Ay'ın şekli neye benzer?", options: ["Küp", "Üçgen", "Küre", "Dikdörtgen"], correct: 2, explanation: "Gök cisimleri küreseldir." },
      { id: "f5-1-02", subject: "fen", term: 1, prompt: "Ay'ın ana evreleri kaç tanedir?", options: ["2", "4", "6", "8"], correct: 1, explanation: "4 ana evre vardır." },
      { id: "f5-1-03", subject: "fen", term: 1, prompt: "Mikroskobik canlıları görmek için ne kullanılır?", options: ["Teleskop", "Mikroskop", "Büyüteç", "Gözlük"], correct: 1, explanation: "Mikroskop kullanılır." },
      { id: "f5-1-04", subject: "fen", term: 1, prompt: "Hangisi mantarların bir çeşidi değildir?", options: ["Küf Mantarı", "Şapkalı Mantar", "Çiçek Mantarı", "Maya Mantarı"], correct: 2, explanation: "Çiçek mantarı yoktur." },
      { id: "f5-1-05", subject: "fen", term: 1, prompt: "Kuvvetin birimi nedir?", options: ["Gram", "Newton", "Derece", "Metre"], correct: 1, explanation: "Birim Newton'dur." },
      { id: "f5-1-11", subject: "fen", term: 1, prompt: "Ay'ın yüzeyindeki derin çukurlara ne denir?", options: ["Krater", "Vadi", "Deniz", "Ova"], correct: 0, explanation: "Krater denir." },
      { id: "f5-1-14", subject: "fen", term: 1, prompt: "Çiçekli bir bitkinin üreme organı neresidir?", options: ["Kök", "Gövde", "Yaprak", "Çiçek"], correct: 3, explanation: "Üreme organı çiçektir." },
      { id: "f5-zn-11", subject: "fen", term: 1, prompt: "Ay'ın Dünya etrafındaki dolanma süresi yaklaşık kaç gündür?", options: ["24", "27", "30", "365"], correct: 1, explanation: "Yaklaşık 27 gündür." },
      { id: "f5-zn-13", subject: "fen", term: 1, prompt: "Aşağıdaki canlılardan hangisi omurgalı hayvanlar grubuna girer?", options: ["Kelebek", "Yılan", "Toprak solucanı", "Sinek"], correct: 1, explanation: "Yılan omurgalıdır." },
      { id: "f5-zn-15", subject: "fen", term: 1, prompt: "Dinamometre neyi ölçmek için kullanılır?", options: ["Sıcaklık", "Kütle", "Kuvvet", "Zaman"], correct: 2, explanation: "Kuvvet ölçer." },
      { id: "f5-zn-17", subject: "fen", term: 1, prompt: "Bitkinin topraktan su ve mineral almasını sağlayan yapısı hangisidir?", options: ["Çiçek", "Gövde", "Yaprak", "Kök"], correct: 3, explanation: "Kök sağlar." },
      { id: "f5-zn-19", subject: "fen", term: 1, prompt: "Mikroskobik canlıların yararlarından biri hangisidir?", options: ["Hastalık yapması", "Sütün peynire dönüşmesi", "Besinleri küçültmesi", "Dişleri çürütmesi"], correct: 1, explanation: "Mayalanma yararlıdır." },
      { id: "f5-hard-nv-01", subject: "fen", term: 1, prompt: "Aynı miktarda su bulunan kaplardan birine 10 gr tuz, diğerine 50 gr tuz ekleniyor. Bu deneyde 'bağımsız değişken' hangisidir?", options: ["Su miktarı", "Tuz miktarı", "Çözünme hızı", "Sıcaklık"], correct: 1, explanation: "Bilinçli değiştirilen tuz miktarıdır." },
      { id: "f5-hard-nv-04", subject: "fen", term: 1, prompt: "Ay'ın yüzeyinde rüzgar ve yağmur gibi hava olaylarının görülmemesinin temel sebebi nedir?", options: ["Çok soğuk olması", "Atmosferinin yok denecek kadar az olması", "Dünya'dan uzak olması", "Işık kaynağı olmaması"], correct: 1, explanation: "Atmosferin yokluğudur." },
      { id: "f5-hard-nv-05", subject: "fen", term: 1, prompt: "Hangi canlı grubu kendi besinini güneş ışığı yardımıyla üretebilir?", options: ["Mantarlar", "Hayvanlar", "Bitkiler", "Mikroskobik canlılar"], correct: 2, explanation: "Bitkiler üreticidir." },
      { id: "f5-adv-02", subject: "fen", term: 1, prompt: "Ay'ın yüzeyinde gece ve gündüz arasındaki sıcaklık farkının Dünya'dan çok daha fazla olmasının temel nedeni nedir?", options: ["Güneş'e yakın olması", "Atmosferinin yok denecek kadar az olması", "Kendi ekseni etrafında yavaş dönmesi", "Işığı yansıtmaması"], correct: 1, explanation: "Atmosferin ısı dengeleme etkisinin yokluğudur." },
      { id: "f5-adv-04", subject: "fen", term: 1, prompt: "Hangi canlı grubunda yer alan tüm üyeler mikroskop yardımı olmadan 'kesinlikle' görülemez?", options: ["Mantarlar", "Bitkiler", "Bakteriler", "Omurgasız hayvanlar"], correct: 2, explanation: "Bakteriler gözle görülmez." },
{ 
  id: "f5-1-21", subject: "fen", term: 1, 
  prompt: "Güneş'e çıplak gözle veya dürbünle bakmak neden tehlikelidir?", 
  options: ["Gözlerimizi kamaştırdığı için", "Göz merceğimize zarar verip kalıcı körlüğe neden olabileceği için", "Güneş çok uzak olduğu için", "Hava çok sıcak olduğu için"], 
  correct: 1, 
  explanation: "Güneş ışınları çok yüksek enerji taşır ve optik araçlarla (dürbün vb.) bakıldığında bu enerji gözün retina tabakasına odaklanarak kalıcı hasar verir." 
},
{ 
  id: "f5-1-22", subject: "fen", term: 1, 
  prompt: "Ay'ın yüzeyinde rüzgar, yağmur gibi olayların görülmemesinin ana sebebi nedir?", 
  options: ["Ay'ın çok soğuk olması", "Ay'ın yüzeyinin tozla kaplı olması", "Ay'ın yok denecek kadar az olan atmosferi", "Dünya'ya uzak olması"], 
  correct: 2, 
  explanation: "Hava olaylarının gerçekleşmesi için kalın bir atmosfer tabakası gerekir. Ay'da atmosfer yok denecek kadar azdır." 
},
{ 
  id: "f5-1-23", subject: "fen", term: 1, 
  prompt: "Sütten peynir yapılması ve hamurun mayalanması hangi canlı grubu sayesinde gerçekleşir?", 
  options: ["Mantarlar", "Bitkiler", "Mikroskobik Canlılar", "Hayvanlar"], 
  correct: 2, 
  explanation: "Bazı bakteriler (mikroskobik canlılar) fermantasyon yaparak gıdaların yapısını değiştirir ve mayalanmayı sağlar." 
}
    ],
    test2: [
  { 
    id: "f5-1-t2-01", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş ve Dünya'nın hareketleri ile ilgili; I. Her ikisi de kendi ekseni etrafında döner. II. Her ikisi de saat yönünün tersine döner. III. Dünya, Güneş etrafında dolanma hareketi yapar. ifadelerinden hangileri doğrudur?", 
    options: ["I ve II", "II ve III", "I ve III", "I, II ve III"], 
    correct: 3, 
    explanation: "Güneş ve Dünya hem kendi eksenleri etrafında dönerler, hem de bu dönüşleri saat yönünün tersine (batıdan doğuya) gerçekleştirirler. Ayrıca Dünya, Güneş etrafında dolanır." 
  },
  { 
    id: "f5-1-t2-02", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay'ın ana evreleri arasındaki süre yaklaşık 1 haftadır. Buna göre 'Yeni Ay' evresinden yaklaşık 21 gün sonra hangi ana evre görülür?", 
    options: ["İlk Dördün", "Dolunay", "Son Dördün", "Hilal"], 
    correct: 2, 
    explanation: "7 gün sonra İlk Dördün, 14 gün sonra Dolunay, 21 gün sonra ise Son Dördün evresi görülür." 
  },
  { 
    id: "f5-1-t2-03", 
    subject: "fen", 
    term: 1, 
    prompt: "Mikroskobik canlılar ile ilgili hangi ifade 'yanlıştır'?", 
    options: ["Bazıları sütten yoğurt yapılmasını sağlar.", "Tamamı insan sağlığı için zararlıdır.", "Uygun sıcaklık ve besin bulduklarında hızla çoğalırlar.", "Besinlerin bozulmasına neden olabilirler."], 
    correct: 1, 
    explanation: "Mikroskobik canlıların tamamı zararlı değildir; bağırsaklarımızdaki K ve B vitamini üreten bakteriler veya sütten peynir yapanlar yararlıdır." 
  },
  { 
    id: "f5-1-t2-04", 
    subject: "fen", 
    term: 1, 
    prompt: "Bir bitkinin çiçekli mi yoksa çiçeksiz mi olduğuna karar vermek için aşağıdakilerden hangisinin varlığına bakmak yeterlidir?", 
    options: ["Kök", "Gövde", "Yaprak", "Tohum"], 
    correct: 3, 
    explanation: "Sadece çiçekli bitkiler tohum ve meyve oluşturabilirler. Kök, gövde ve yaprak bazı çiçeksiz bitkilerde (eğrelti otu gibi) de bulunabilir." 
  },
  { 
    id: "f5-1-t2-05", 
    subject: "fen", 
    term: 1, 
    prompt: "Yarasa ile ilgili verilen bilgilerden hangisi onu diğer kuşlardan ayırarak 'memeliler' grubuna dahil eder?", 
    options: ["Uçabilmesi", "Yavrularını sütle beslemesi", "Kanatlarının olması", "Gece avlanması"], 
    correct: 1, 
    explanation: "Yarasa uçabilen tek memelidir. Yavrularını doğurması ve sütle beslemesi onun memeli olduğunun kanıtıdır." 
  },
  { 
    id: "f5-1-t2-06", 
    subject: "fen", 
    term: 1, 
    prompt: "Hassas ölçüm yapabilen bir dinamometre yapmak isteyen bir öğrenci aşağıdakilerden hangisini seçmelidir?", 
    options: ["Kalın ve sert bir yay", "Kısa ve kalın bir yay", "İnce ve esnek bir yay", "Plastik bir çubuk"], 
    correct: 2, 
    explanation: "İnce ve esnek yaylar küçük kuvvetlerde bile uzama gösterdiği için daha hassas ölçümler yapabilir." 
  },
  { 
    id: "f5-1-t2-07", 
    subject: "fen", 
    term: 1, 
    prompt: "Dünya'dan bakıldığında Ay'ın hep aynı yüzünün görülmesinin temel sebebi nedir?", 
    options: ["Ay'ın ışık kaynağı olmaması", "Ay'ın Dünya etrafında dolanması", "Ay'ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresinin eşit olması", "Dünya'nın Ay'dan daha büyük olması"], 
    correct: 2, 
    explanation: "Ay kendi etrafında ve Dünya etrafında yaklaşık 27.3 günde döner. Bu süre eşitliği hep aynı tarafı görmemize neden olur." 
  },
  { 
    id: "f5-1-t2-08", 
    subject: "fen", 
    term: 1, 
    prompt: "Mantarlar ile ilgili verilenlerden hangisi doğrudur?", 
    options: ["Kendi besinini üretebilirler.", "Çiçeksiz bitkiler grubuna girerler.", "Bazı türleri besin olarak tüketilirken bazıları zehirlidir.", "Kökleri sayesinde topraktan mineralleri kendileri üretirler."], 
    correct: 2, 
    explanation: "Mantarlar bitki değildir, kendi besinlerini üretemezler. Şapkalı mantarların bazıları besleyiciyken bazıları öldürücü derecede zehirlidir." 
  },
  { 
    id: "f5-1-t2-09", 
    subject: "fen", 
    term: 1, 
    prompt: "Aşağıdaki canlılardan hangisi omurgasız hayvanlar grubunda yer alır?", 
    options: ["Yılan", "Kurbağa", "Ahtapot", "Sazan balığı"], 
    correct: 2, 
    explanation: "Ahtapotun vücudunda kemik veya kıkırdaktan oluşan bir iskelet (omurga) bulunmaz." 
  },
  { 
    id: "f5-1-t2-10", 
    subject: "fen", 
    term: 1, 
    prompt: "10 bölmeli, en fazla 50 Newton ölçebilen bir dinamometrede her bir bölme kaç Newton'ı gösterir?", 
    options: ["2", "5", "10", "50"], 
    correct: 1, 
    explanation: "Maksimum kuvvet / Bölme sayısı = 50 / 10 = 5 Newton." 
  },
  { 
    id: "f5-1-t2-11", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay'ın yüzeyindeki kraterlerin milyonlarca yıl boyunca bozulmadan kalmasının sebebi nedir?", 
    options: ["Ay'ın çok sert olması", "Ay'da hava olaylarının (rüzgar, yağmur) görülmemesi", "Ay'ın Dünya'dan uzak olması", "Ay'ın Güneş ışığını yansıtması"], 
    correct: 1, 
    explanation: "Ay'da atmosfer yok denecek kadar azdır. Bu yüzden rüzgar ve yağmur gibi aşındırıcı hava olayları olmaz, izler silinmez." 
  },
  { 
    id: "f5-1-t2-12", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş'in büyüklüğünü bir basketbol topuna benzetirsek, Dünya'yı neye benzetmemiz en uygun olur?", 
    options: ["Karpuz", "Voleybol topu", "Nohut tanesi", "Toplu iğne başı"], 
    correct: 2, 
    explanation: "Güneş içine yaklaşık 1.3 milyon Dünya sığabilir. Basketbol topu yanındaki bir nohut tanesi bu oranı temsil edebilir." 
  },
  { 
    id: "f5-1-t2-13", 
    subject: "fen", 
    term: 1, 
    prompt: "Balina ve Yunus hangi canlı grubuna girer?", 
    options: ["Balıklar", "Sürüngenler", "Memeliler", "Amfibiler"], 
    correct: 2, 
    explanation: "Balina ve yunus suda yaşamalarına rağmen doğurarak çoğalır ve yavrularını sütle beslerler, bu yüzden memelidirler." 
  },
  { 
    id: "f5-1-t2-14", 
    subject: "fen", 
    term: 1, 
    prompt: "Kuvvet ile ilgili; I. Dinamometre ile ölçülür. II. Birimi Newton'dur. III. Cisimlerin şeklini değiştirebilir. ifadelerinden hangileri doğrudur?", 
    options: ["I ve II", "II ve III", "I ve III", "I, II ve III"], 
    correct: 3, 
    explanation: "Kuvvet bir enerji değil etkidir; Newton birimiyle ölçülür ve cisimlerin yönünü, hızını, şeklini değiştirebilir." 
  },
  { 
    id: "f5-1-t2-15", 
    subject: "fen", 
    term: 1, 
    prompt: "Aşağıdaki canlılardan hangisi kendi besinini güneş ışığı kullanarak üretemez?", 
    options: ["Papatya", "Eğrelti Otu", "Küf Mantarı", "Çam Ağacı"], 
    correct: 2, 
    explanation: "Küf mantarı bir mantardır. Mantarlar fotosentez yapamaz, besinlerini dışarıdan hazır alırlar." 
  },
  { 
    id: "f5-1-t2-16", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay'ın Dünya etrafındaki bir tam dolanımı ne kadar sürer?", 
    options: ["24 saat", "27.3 gün", "29.5 gün", "365 gün"], 
    correct: 1, 
    explanation: "Ay'ın Dünya etrafındaki dolanma süresi yaklaşık 27 gündür." 
  },
  { 
    id: "f5-1-t2-17", 
    subject: "fen", 
    term: 1, 
    prompt: "Hangi mikroskobik canlı türü hastalıklara neden olabilir?", 
    options: ["Bazı bakteriler", "Maya mantarları", "Yararlı bakteriler", "Küf mantarları"], 
    correct: 0, 
    explanation: "Bakterilerin bazı türleri verem, kolera, boğaz enfeksiyonu gibi hastalıklara yol açar." 
  },
  { 
    id: "f5-1-t2-18", 
    subject: "fen", 
    term: 1, 
    prompt: "Bitkilerde terleme ve gaz alışverişinin en yoğun yapıldığı bölüm hangisidir?", 
    options: ["Kök", "Gövde", "Yaprak", "Çiçek"], 
    correct: 2, 
    explanation: "Yapraklar üzerindeki gözenekler sayesinde bitki nefes alır (gaz alışverişi) ve fazla suyu atar (terleme)." 
  },
  { 
    id: "f5-1-t2-19", 
    subject: "fen", 
    term: 1, 
    prompt: "En fazla 20 Newton ölçen bir dinamometreye 25 Newton'lık bir cisim asılırsa ne olur?", 
    options: ["Ölçüm hatasız yapılır.", "Dinamometrenin yayı esnekliğini kaybedip bozulabilir.", "Dinamometre 5 Newton gösterir.", "Yay hiç uzamaz."], 
    correct: 1, 
    explanation: "Her dinamometrenin bir ölçüm sınırı vardır. Bu sınır aşılırsa yay esneklik özelliğini kaybederek kalıcı olarak bozulur." 
  },
  { 
    id: "f5-1-t2-20", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş yüzeyindeki koyu renkli görünen bölgelere ne ad verilir?", 
    options: ["Krater", "Güneş Lekesi", "Güneş Işığı", "Alev"], 
    correct: 1, 
    explanation: "Güneş üzerinde çevrelerine göre daha soğuk olan ve bu yüzden koyu görünen bölgelere 'Güneş Lekesi' denir." 
  }
],
    test3: [
  { 
    id: "f5-1-t3-01", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş'in yapısı ile ilgili verilenlerden hangisi 'kesinlikle' doğrudur?", 
    options: ["Dünya'ya en uzak yıldızdır.", "Yüzey sıcaklığı merkez sıcaklığından fazladır.", "Katmanları yoktur, tek bir parçadan oluşur.", "Sıcak gazlardan oluşan orta büyüklükte bir yıldızdır."], 
    correct: 3, 
    explanation: "Güneş orta büyüklükte bir yıldızdır ve sıcak gazlardan oluşur. Merkez sıcaklığı (yaklaşık 15 milyon °C) yüzey sıcaklığından (yaklaşık 6000 °C) çok daha fazladır." 
  },
  { 
    id: "f5-1-t3-02", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay'ın 'İlk Dördün' evresinden yaklaşık 14 gün sonra hangi ana evre görülür?", 
    options: ["Dolunay", "Son Dördün", "Yeni Ay", "Şişkin Ay"], 
    correct: 1, 
    explanation: "Ay'ın ana evreleri arası 7 gündür. İlk Dördün'den 7 gün sonra Dolunay, ondan 7 gün sonra (toplam 14 gün) Son Dördün evresi görülür." 
  },
  { 
    id: "f5-1-t3-03", 
    subject: "fen", 
    term: 1, 
    prompt: "Mikroskobik canlılar sadece mikroskopla görülebilir. Ancak bazı durumlarda varlıklarını gözle fark edebiliriz. Aşağıdakilerden hangisi buna örnektir?", 
    options: ["Sütün içinde bakteri olduğunu görmek", "Yoğurdun tadının ekşimesi", "Ekmek üzerindeki küf tabakasının oluşması", "Havada uçuşan tozları görmek"], 
    correct: 2, 
    explanation: "Küf mantarları mikroskobik canlılardır. Tek başlarına görünmeseler de koloniler (gruplar) oluşturduklarında ekmek üzerinde renkli tabakalar halinde gözle görülebilirler." 
  },
  { 
    id: "f5-1-t3-04", 
    subject: "fen", 
    term: 1, 
    prompt: "Çiçeksiz bitkiler ile ilgili verilen bilgilerden hangisi 'yanlıştır'?", 
    options: ["Tohum ve meyve oluşturamazlar.", "Kendi besinlerini üretebilirler.", "Gövde ve yaprakları bulunmaz.", "Nemli bölgelerde yaşamayı severler."], 
    correct: 2, 
    explanation: "Eğrelti otu gibi çiçeksiz bitkilerin de kök, gövde ve yaprakları vardır. Sadece çiçekleri ve tohumları yoktur." 
  },
  { 
    id: "f5-1-t3-05", 
    subject: "fen", 
    term: 1, 
    prompt: "Bir öğrenci elindeki dinamometre ile bir taşı ölçtüğünde yayın 4 cm uzadığını görüyor. Aynı dinamometreye taştan iki kat daha ağır bir cisim asarsa yayın uzama miktarı ne olur?", 
    options: ["2 cm", "4 cm", "8 cm", "12 cm"], 
    correct: 2, 
    explanation: "Dinamometrelerde yayın uzama miktarı, asılan kuvvet ile doğru orantılıdır. Kuvvet iki katına çıkarsa uzama da iki katına çıkar (4 x 2 = 8 cm)." 
  },
  { 
    id: "f5-1-t3-06", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay'da yürüyen bir astronotun ayak izlerinin bozulmadan kalmasının nedeni aşağıdakilerden hangisidir?", 
    options: ["Ay'ın kütle çekiminin az olması", "Ay'ın yüzeyinin çok sert taşlardan oluşması", "Ay'da rüzgar ve yağmurun olmaması", "Ay'ın Dünya'dan çok uzak olması"], 
    correct: 2, 
    explanation: "Hava olayları (rüzgar, yağmur) atmosfer sayesinde oluşur. Ay'da atmosfer olmadığı için hava olayları yaşanmaz ve yüzeydeki izler bozulmaz." 
  },
  { 
    id: "f5-1-t3-07", 
    subject: "fen", 
    term: 1, 
    prompt: "Mantarların bazı türlerinden ilaç (antibiyotik) üretiminde yararlanılır. Bu mantar türü hangisidir?", 
    options: ["Şapkalı Mantar", "Maya Mantarı", "Küf Mantarı", "Parazit Mantar"], 
    correct: 2, 
    explanation: "Penisilin adı verilen ilk antibiyotik, bir küf mantarı türünden (Penicillium) elde edilmiştir." 
  },
  { 
    id: "f5-1-t3-08", 
    subject: "fen", 
    term: 1, 
    prompt: "Kurbağaların hem karada hem suda yaşaması, onları hangi hayvan grubuna dahil eder?", 
    options: ["Sürüngenler", "Memeliler", "Amfibiler (İki yaşamlılar)", "Balıklar"], 
    correct: 2, 
    explanation: "Kurbağalar yaşamlarının bir kısmını suda (larva), bir kısmını karada geçirdikleri için 'iki yaşamlılar' olarak adlandırılırlar." 
  },
  { 
    id: "f5-1-t3-09", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş'in kendi ekseni etrafında dönme hareketi yaptığını kanıtlayan bilim insanı kimdir?", 
    options: ["Isaac Newton", "Galileo Galilei", "Ali Kuşçu", "Albert Einstein"], 
    correct: 1, 
    explanation: "Galileo, kendi yaptığı teleskopla Güneş lekelerini gözlemlemiş ve bu lekelerin hep aynı yöne kaydığını görerek Güneş'in döndüğünü kanıtlamıştır." 
  },
  { 
    id: "f5-1-t3-10", 
    subject: "fen", 
    term: 1, 
    prompt: "50 Newton'lık bir yükü en hassas şekilde ölçmek için hangi dinamometreyi seçmelisiniz?", 
    options: ["0-10 N arası ölçen", "0-60 N arası ölçen", "0-100 N arası ölçen", "0-500 N arası ölçen"], 
    correct: 1, 
    explanation: "Bir cismi ölçmek için, o cismin ağırlığına en yakın ama kapasitesi cisimden büyük olan dinamometre seçilir. 60 N'lık olan 50 N'ı ölçerken daha çok bölme kullanarak hassasiyet sağlar." 
  },
  { 
    id: "f5-1-t3-11", 
    subject: "fen", 
    term: 1, 
    prompt: "Bitkilerin kökleri ile ilgili verilenlerden hangisi 'yanlıştır'?", 
    options: ["Bitkiyi toprağa bağlar.", "Su ve mineralleri topraktan alır.", "Bitkinin dik durmasını sağlar.", "Kendi besinini köklerde güneş ışığıyla üretir."], 
    correct: 3, 
    explanation: "Besin üretimi (fotosentez) güneş ışığı alan yeşil yapraklarda gerçekleşir, toprak altındaki köklerde değil." 
  },
  { 
    id: "f5-1-t3-12", 
    subject: "fen", 
    term: 1, 
    prompt: "Aşağıdaki canlılardan hangisinin vücudu tüylerle kaplıdır ve yumurtayla çoğalır?", 
    options: ["Yarasa", "Penguen", "Yunus", "Balina"], 
    correct: 1, 
    explanation: "Penguen bir kuştur; vücudu tüylerle kaplıdır ve yumurtlar. Yarasa, yunus ve balina memelidir, vücutlarında kıl bulunur ve doğururlar." 
  },
  { 
    id: "f5-1-t3-13", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay, Dünya etrafında dolanırken bazen Güneş ve Dünya arasına girer. Bu durumun sonucunda ne oluşur?", 
    options: ["Ay Tutulması", "Güneş Tutulması", "Mevsimler", "Gece ve Gündüz"], 
    correct: 1, 
    explanation: "Ay, Güneş ile Dünya arasına girdiğinde Güneş ışığını engeller ve Dünya üzerinde gölge oluşturur, buna Güneş tutulması denir." 
  },
  { 
    id: "f5-1-t3-14", 
    subject: "fen", 
    term: 1, 
    prompt: "Kuvvetin büyüklüğünü ölçerken kullanılan birim Newton (N) olarak ifade edilir. Bu birim adını hangi bilim insanından almıştır?", 
    options: ["Galileo", "Pasteur", "Newton", "Edison"], 
    correct: 2, 
    explanation: "Yer çekimi ve hareket yasalarını bulan Sir Isaac Newton'ın onuruna kuvvet birimine Newton denmiştir." 
  },
  { 
    id: "f5-1-t3-15", 
    subject: "fen", 
    term: 1, 
    prompt: "Sütten peynir yapılması olayında hangi canlı grubu rol oynar?", 
    options: ["Bitkiler", "Mantarlar", "Mikroskobik Canlılar", "Hayvanlar"], 
    correct: 2, 
    explanation: "Peynir, yoğurt ve turşu yapımı bazı yararlı bakteriler (mikroskobik canlılar) sayesinde gerçekleşir." 
  },
  { 
    id: "f5-1-t3-16", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş, Dünya ve Ay'ın büyüklükleri ile ilgili hangisi 'yanlıştır'?", 
    options: ["Güneş > Dünya > Ay", "Ay, Güneş'ten daha küçüktür.", "Dünya, Ay'dan daha büyüktür.", "Güneş, Dünya'dan daha küçüktür."], 
    correct: 3, 
    explanation: "Güneş sistemimizdeki en büyük cisimdir; içine yaklaşık 1 milyon Dünya sığabilir." 
  },
  { 
    id: "f5-1-t3-17", 
    subject: "fen", 
    term: 1, 
    prompt: "Aşağıdakilerden hangisi omurgalı hayvanların ortak özelliklerinden biridir?", 
    options: ["Sadece suda yaşamaları", "Doğurarak çoğalmaları", "Vücutlarında iskelet yapısının bulunması", "Uçabilmeleri"], 
    correct: 2, 
    explanation: "Tüm omurgalılar (balık, kurbağa, sürüngen, kuş, memeli) vücutlarında kemik veya kıkırdaktan oluşan bir iç iskelete sahiptir." 
  },
  { 
    id: "f5-1-t3-18", 
    subject: "fen", 
    term: 1, 
    prompt: "Dinamometrenin yapısında bulunan yayın esneklik özelliği ile ilgili hangisi doğrudur?", 
    options: ["Her yay her kuvvetle sonsuza kadar uzayabilir.", "Yayın kalınlığı hassasiyeti etkilemez.", "Yaya taşıyabileceğinden fazla kuvvet uygulanırsa esneklik özelliği bozulur.", "Plastik yaylar en doğru ölçümü yapar."], 
    correct: 2, 
    explanation: "Her esnek maddenin bir sınırı vardır. Bu sınır aşılırsa yay eski haline dönemez ve dinamometre bozulur." 
  },
  { 
    id: "f5-1-t3-19", 
    subject: "fen", 
    term: 1, 
    prompt: "Güneş'ten gelen ısı ve ışık enerjisi hangi maddelerin dönüşümü ile ortaya çıkar?", 
    options: ["Odun ve Kömür", "Hidrojen ve Helyum", "Su ve Oksijen", "Demir ve Bakır"], 
    correct: 1, 
    explanation: "Güneş'in merkezinde hidrojen gazı helyuma dönüşürken çok büyük bir enerji (ısı ve ışık) açığa çıkar." 
  },
  { 
    id: "f5-1-t3-20", 
    subject: "fen", 
    term: 1, 
    prompt: "Ay'ın yüzeyinde kraterlere çarpan gök cisimlerine ne ad verilir?", 
    options: ["Gezegen", "Yıldız", "Göktaşı (Meteor)", "Kuyruklu Yıldız"], 
    correct: 2, 
    explanation: "Ay'ın yüzeyine çarparak kraterleri oluşturan uzaydan gelen taşlara göktaşı veya meteor denir." 
  }
]
  },
  term2: {
    test1: [
      { id: "f5-2-06", subject: "fen", term: 2, prompt: "Sürtünme kuvvetini azaltmak için hangisi yapılır?", options: ["Yüzeyi pürüzlü yapmak", "Yağlama yapmak", "Ağırlığı artırmak", "Kum dökmek"], correct: 1, explanation: "Yağlama azaltır." },
      { id: "f5-2-07", subject: "fen", term: 2, prompt: "Maddenin ısı alarak sıvı halden gaz hale geçmesine ne denir?", options: ["Donma", "Erime", "Buharlaşma", "Yoğuşma"], correct: 2, explanation: "Buharlaşmadır." },
      { id: "f5-2-08", subject: "fen", term: 2, prompt: "Hangisi bir ısı kaynağıdır?", options: ["Ay", "Güneş", "Ayna", "Bulut"], correct: 1, explanation: "Güneş en büyük kaynaktır." },
      { id: "f5-2-09", subject: "fen", term: 2, prompt: "Işık nasıl yayılır?", options: ["Eğrisel", "Dairesel", "Doğrusal", "Sadece aşağı doğru"], correct: 2, explanation: "Işık doğrusal yayılır." },
      { id: "f5-2-10", subject: "fen", term: 2, prompt: "Gölge oluşumu için ne gereklidir?", options: ["Saydam madde", "Opak madde", "Su", "Ayna"], correct: 1, explanation: "Opak madde engeller." },
      { id: "f5-2-12", subject: "fen", term: 2, prompt: "Hangisi biyoçeşitliliği tehdit eden bir durumdur?", options: ["Ağaç dikmek", "Av yasağı", "Çevre kirliliği", "Milli parklar"], correct: 2, explanation: "Kirlilik tehdit eder." },
      { id: "f5-2-13", subject: "fen", term: 2, prompt: "Isı ve sıcaklık ile ilgili hangisi yanlıştır?", options: ["Isı bir enerjidir.", "Sıcaklık termometre ile ölçülür.", "Isı birimi derecedir.", "Isı akışı sıcaktan soğuğa doğrudur."], correct: 2, explanation: "Isı birimi Kalori veya Joule'dur." },
      { id: "f5-2-15", subject: "fen", term: 2, prompt: "Güneş tutulması sırasında hangisi ortada bulunur?", options: ["Dünya", "Ay", "Güneş", "Yıldızlar"], correct: 1, explanation: "Ay araya girer." },
      { id: "f5-2-16", subject: "fen", term: 2, prompt: "Aşağıdakilerden hangisi yapay bir ışık kaynağıdır?", options: ["Yıldız", "Şimşek", "Mum", "Ateş böceği"], correct: 2, explanation: "Mum yapaydır." },
      { id: "f5-zn-12", subject: "fen", term: 2, prompt: "Aşağıdakilerden hangisi opak bir maddedir?", options: ["Cam", "Su", "Tahta", "Hava"], correct: 2, explanation: "Tahta opaktır." },
      { id: "f5-zn-14", subject: "fen", term: 2, prompt: "Sıvı bir maddenin ısı kaybederek katı hale geçmesine ne denir?", options: ["Erime", "Donma", "Yoğuşma", "Süblimleşme"], correct: 1, explanation: "Donmadır." },
      { id: "f5-zn-16", subject: "fen", term: 2, prompt: "Aşağıdakilerden hangisi bir 'ısı' birimidir?", options: ["Derece", "Gram", "Joule", "Metre"], correct: 2, explanation: "Joule ısı birimidir." },
      { id: "f5-zn-18", subject: "fen", term: 2, prompt: "Sürtünme kuvveti ile ilgili hangisi doğrudur?", options: ["Hareketi kolaylaştırır.", "Sadece sıvılarda olur.", "Harekete zıt yöndedir.", "Yüzey pürüzsüzleştikçe artar."], correct: 2, explanation: "Harekete zıt yöndedir." },
      { id: "f5-zn-20", subject: "fen", term: 2, prompt: "Işığın bir yüzeye çarpıp geri dönmesine ne denir?", options: ["Kırılma", "Yansıma", "Soğurulma", "Yayılma"], correct: 1, explanation: "Yansımadır." },
      { id: "f5-hard-nv-02", subject: "fen", term: 2, prompt: "Isıca yalıtılmış bir ortamda, 80 °C'deki bir demir bilye, 20 °C'deki bir miktar suyun içine atılıyor. Isı alışverişi tamamlandığında aşağıdakilerden hangisi 'kesinlikle' gerçekleşmez?", options: ["Demirin sıcaklığı düşer.", "Suyun sıcaklığı artar.", "Suyun son sıcaklığı 90 °C olur.", "Isı akışı demirden suya doğru olur."], correct: 2, explanation: "Son sıcaklık iki değer arasında olmalıdır." },
      { id: "f5-hard-nv-03", subject: "fen", term: 2, prompt: "Farklı yüzeylerde bir topun durma süreleri ölçülüyor: Camda 10 sn, Halıda 3 sn, Buzda 15 sn. Bu verilere göre sürtünme kuvvetinin en az ve en çok olduğu yüzeyler hangisidir?", options: ["Buz - Halı", "Cam - Halı", "Halı - Buz", "Buz - Cam"], correct: 0, explanation: "En geç duran buz (en az), en erken duran halı (en çok)." },
      { id: "f5-adv-01", subject: "fen", term: 2, prompt: "Bir öğrenci özdeş iki bilyeyi aynı yükseklikten biri cam zemin, diğeri halı zemin üzerine bırakıyor. Cam zemindeki bilyenin daha uzağa gittiğini gözlemliyor. Bu deneyin 'bağımlı değişkeni' hangisidir?", options: ["Zemin türü", "Bilyenin kütlesi", "Gidilen mesafe", "Bırakılan yükseklik"], correct: 2, explanation: "Sonuç olan gidilen mesafedir." },
      { id: "f5-adv-03", subject: "fen", term: 2, prompt: "Bir kapta bulunan buza sürekli ısı veriliyor. Buzun tamamen erimesi sırasında termometredeki değer için ne söylenebilir?", options: ["Sürekli artar.", "Sürekli azalır.", "Hal değişimi bitene kadar sabit kalır.", "Önce artar sonra sabit kalır."], correct: 2, explanation: "Hal değişimi sırasında sıcaklık sabittir." },
      { id: "f5-adv-05", subject: "fen", term: 2, prompt: "Bir dinamometreye 50 N ağırlığında bir cisim asıldığında yay 10 cm uzuyor. Aynı dinamometreye 15 N ağırlığında bir cisim asılırsa yay kaç cm uzar?", options: ["2", "3", "5", "6"], correct: 1, explanation: "Her 5N için 1cm uzar." }
    ],
    test2: []
  }
};
 
