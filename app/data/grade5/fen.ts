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
    test2: []
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
 