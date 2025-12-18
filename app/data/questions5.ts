export type SubjectType = 'matematik' | 'turkce' | 'ingilizce' | 'fen';
export type TermType = 1 | 2;

export interface Question5 {
  id: string;
  subject: SubjectType;
  term: TermType;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string; // ✅ Yeni eklendi
}
 export const questions5: Question5[] = [
  // ==========================================
  // MATEMATİK (13 Soru)
  // ==========================================
  {
    id: "m5-1-01", subject: "matematik", term: 1,
    prompt: "847.302 sayısında milyonlar bölüğündeki rakamların toplamı kaçtır?",
    options: ["11", "15", "19", "21"],
    correct: 2,
    explanation: "Sayının milyonlar bölüğünde 8, 4 ve 7 rakamları bulunur. 8 + 4 + 7 = 19 eder."
  },
  {
    id: "m5-1-02", subject: "matematik", term: 1,
    prompt: "5² + 2³ işleminin sonucu kaçtır?",
    options: ["16", "25", "31", "33"],
    correct: 3,
    explanation: "5² = 25 ve 2³ = 8'dir. 25 + 8 = 33 sonucuna ulaşılır."
  },
  {
    id: "m5-1-03", subject: "matematik", term: 1,
    prompt: "Bir bölme işleminde bölen 15, bölüm 10 ve kalan 7 ise bölünen kaçtır?",
    options: ["150", "157", "165", "172"],
    correct: 1,
    explanation: "Bölünen = (Bölen x Bölüm) + Kalan -> (15 x 10) + 7 = 157."
  },
  {
    id: "m5-1-04", subject: "matematik", term: 1,
    prompt: "Aşağıdaki kesirlerden hangisi birim kesirdir?",
    options: ["2/5", "1/8", "5/5", "4/1"],
    correct: 1,
    explanation: "Payı 1 olan kesirlere birim kesir denir."
  },
  {
    id: "m5-1-05", subject: "matematik", term: 1,
    prompt: "Hangi sayı 54.000 sayısının 100'e bölünmüş halidir?",
    options: ["54", "540", "5400", "5.4"],
    correct: 1,
    explanation: "Bir sayıyı 100'e bölerken sağdan iki sıfır silinir. 54.000 -> 540."
  },
  {
    id: "m5-2-06", subject: "matematik", term: 2,
    prompt: "0,45 ondalık gösteriminin okunuşu hangisidir?",
    options: ["Sıfır tam onda beş", "Sıfır tam yüzde kırk beş", "Sıfır tam binde kırk beş", "Kırk beş tam sıfır"],
    correct: 1,
    explanation: "Virgülden sonra iki basamak olduğu için 'yüzde' diye okunur."
  },
  {
    id: "m5-2-07", subject: "matematik", term: 2,
    prompt: "%35 ifadesinin ondalık gösterimi aşağıdakilerden hangisidir?",
    options: ["0,035", "0,35", "3,5", "35,0"],
    correct: 1,
    explanation: "%35 ifadesi 35/100 demektir, bu da 0,35 olarak yazılır."
  },
  {
    id: "m5-2-08", subject: "matematik", term: 2,
    prompt: "Bir dik açının ölçüsü kaç derecedir?",
    options: ["45", "90", "180", "360"],
    correct: 1,
    explanation: "Dik açılar tam olarak 90 derecedir."
  },
  {
    id: "m5-2-09", subject: "matematik", term: 2,
    prompt: "Aşağıdaki üçgenlerden hangisi açılarına göre bir çeşit değildir?",
    options: ["Dar açılı", "Dik açılı", "Eşkenar", "Geniş açılı"],
    correct: 2,
    explanation: "Eşkenar, kenarlarına göre bir üçgen çeşididir. Diğerleri açılarına göredir."
  },
  {
    id: "m5-2-10", subject: "matematik", term: 2,
    prompt: "Yarıçapı 5 cm olan bir çemberin çapı kaç cm'dir?",
    options: ["2,5", "5", "10", "15"],
    correct: 2,
    explanation: "Çap, yarıçapın iki katıdır. 5 x 2 = 10 cm."
  },
  {
    id: "m5-1-11", subject: "matematik", term: 1,
    prompt: "24 sayısının çarpanlarından biri hangisi değildir?",
    options: ["4", "6", "9", "12"],
    correct: 2,
    explanation: "24 sayısı 9'a tam bölünmez."
  },
  {
    id: "m5-2-12", subject: "matematik", term: 2,
    prompt: "Hangi dörtgenin tüm kenarları birbirine eşittir?",
    options: ["Dikdörtgen", "Yamuk", "Kare", "Paralelkenar"],
    correct: 2,
    explanation: "Karenin dört kenarı da her zaman birbirine eşittir."
  },
  {
    id: "m5-2-13", subject: "matematik", term: 2,
    prompt: "1 litre kaç mililitredir (ml)?",
    options: ["10", "100", "1000", "10000"],
    correct: 2,
    explanation: "Sıvı ölçü birimlerinde 1 Litre = 1000 Mililitre'dir."
  },

  // ==========================================
  // TÜRKÇE (13 Soru)
  // ==========================================
  {
    id: "t5-1-01", subject: "turkce", term: 1,
    prompt: "'Kırmak' kelimesi hangi cümlede mecaz anlamda kullanılmıştır?",
    options: ["Bardağı kazayla kırdı.", "Dalları fırtına kırmış.", "Sözleriyle kalbimi kırdı.", "Odunları baltayla kırdı."],
    correct: 2,
    explanation: "Gönül/kalp kırmak, üzmek anlamında kullanılan bir mecazdır."
  },
  {
    id: "t5-1-02", subject: "turkce", term: 1,
    prompt: "Hangi kelimenin zıt anlamlısı yanlış verilmiştir?",
    options: ["Taze - Bayat", "Yavaş - Hızlı", "Zengin - Fakir", "Siyah - Kara"],
    correct: 3,
    explanation: "Siyah ve Kara eş anlamlıdır, zıt anlamlı değildir."
  },
  {
    id: "t5-1-03", subject: "turkce", term: 1,
    prompt: "Aşağıdaki cümlelerin hangisinde nesnel bir anlatım vardır?",
    options: ["En güzel renk mavidir.", "Türkiye'nin başkenti Ankara'dır.", "Bu film çok sıkıcı.", "Dondurma harika bir yiyecek."],
    correct: 1,
    explanation: "Ankara'nın başkent olması kişiden kişiye değişmeyen, kanıtlanabilir bir gerçektir."
  },
  {
    id: "t5-1-04", subject: "turkce", term: 1,
    prompt: "Aşağıdaki kelimelerden hangisi yapım eki almıştır?",
    options: ["Evler", "Gözlük", "Masa", "Kalemim"],
    correct: 1,
    explanation: "Göz kelimesinden 'gözlük' (yeni bir nesne) türediği için yapım eki almıştır."
  },
  {
    id: "t5-1-05", subject: "turkce", term: 1,
    prompt: "Hangisi bir deyimdir?",
    options: ["Göz atmak", "Kitap okumak", "Okula gitmek", "Yemek yemek"],
    correct: 0,
    explanation: "Göz atmak, bir şeyi kısaca incelemek anlamında kalıplaşmış bir deyimdir."
  },
  {
    id: "t5-2-06", subject: "turkce", term: 2,
    prompt: "Hangi cümlede noktalama hatası vardır?",
    options: ["Elma, armut aldım.", "Sende geldin mi?", "Eyvah, yangın var!", "Dün İzmir'e gittim."],
    correct: 1,
    explanation: "Bağlaç olan 'de' ayrı yazılmalıdır: 'Sen de geldin mi?' olmalı."
  },
  {
    id: "t5-2-07", subject: "turkce", term: 2,
    prompt: "Metnin ana fikri nedir?",
    options: ["Konusu", "Yardımcı fikirleri", "Verilmek istenen ders", "Başlığı"],
    correct: 2,
    explanation: "Ana fikir, bir metnin okuyucuya vermek istediği temel mesaj veya derstir."
  },
  {
    id: "t5-2-08", subject: "turkce", term: 2,
    prompt: "Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması vardır?",
    options: ["Kitapçı", "Ağacı", "Simitçi", "Sütçü"],
    correct: 1,
    explanation: "Ağaç kelimesine ünlü gelince 'ç' harfi 'c'ye dönüşmüştür (yumuşama)."
  },
  {
    id: "t5-2-09", subject: "turkce", term: 2,
    prompt: "Hangi cümle bir soru cümlesidir?",
    options: ["Bize geleceğini söyledi.", "Neden gelmediğini bilmiyorum.", "Okula ne zaman gideceksin?", "Gidince haber ver."],
    correct: 2,
    explanation: "Bu cümle bilgi almayı amaçlayan bir soru ifadesidir."
  },
  {
    id: "t5-2-10", subject: "turkce", term: 2,
    prompt: "'Pırıl pırıl' ikilemesi cümleye hangi anlamı katmıştır?",
    options: ["Hızlı", "Yavaş", "Temiz/Parlak", "Gürültülü"],
    correct: 2,
    explanation: "Pırıl pırıl, çok temiz veya parlak olma durumunu ifade eder."
  },
  {
    id: "t5-1-11", subject: "turkce", term: 1,
    prompt: "Aşağıdakilerden hangisi bir 'ataseözü' değildir?",
    options: ["Damlaya damlaya göl olur.", "Sakla samanı gelir zamanı.", "Kitap okumak faydalıdır.", "Ayağını yorganına göre uzat."],
    correct: 2,
    explanation: "Bu genel bir bilgi cümlesidir, kalıplaşmış bir atasözü değildir."
  },
  {
    id: "t5-2-12", subject: "turkce", term: 2,
    prompt: "Hangisi büyük ünlü uyumuna uyar?",
    options: ["Kitap", "Kalem", "Okul", "Tiyatro"],
    correct: 2,
    explanation: "Okul kelimesindeki 'o' ve 'u' harflerinin ikisi de kalındır."
  },
  {
    id: "t5-2-13", subject: "turkce", term: 2,
    prompt: "Hikayenin unsurlarından hangisi 'olay'ı kapsar?",
    options: ["Zaman", "Yer", "Kişiler", "Olay örgüsü"],
    correct: 3,
    explanation: "Hikayede yaşanan durumların bütününe olay örgüsü denir."
  },

  // ==========================================
  // FEN BİLİMLERİ (12 Soru)
  // ==========================================
  {
    id: "f5-1-01", subject: "fen", term: 1,
    prompt: "Güneş, Dünya ve Ay'ın şekli neye benzer?",
    options: ["Küp", "Üçgen", "Küre", "Dikdörtgen"],
    correct: 2,
    explanation: "Bu gök cisimlerinin hepsi küresel bir şekle sahiptir."
  },
  {
    id: "f5-1-02", subject: "fen", term: 1,
    prompt: "Ay'ın ana evreleri kaç tanedir?",
    options: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "Yeniay, İlk dördün, Dolunay ve Son dördün olmak üzere 4 ana evre vardır."
  },
  {
    id: "f5-1-03", subject: "fen", term: 1,
    prompt: "Mikroskobik canlıları görmek için ne kullanılır?",
    options: ["Teleskop", "Mikroskop", "Büyüteç", "Gözlük"],
    correct: 1,
    explanation: "Mikroskobik canlılar sadece mikroskop yardımıyla görülebilir."
  },
  {
    id: "f5-1-04", subject: "fen", term: 1,
    prompt: "Hangisi mantarların bir çeşidi değildir?",
    options: ["Küf Mantarı", "Şapkalı Mantar", "Çiçek Mantarı", "Maya Mantarı"],
    correct: 2,
    explanation: "Mantarların çiçekli bir türü yoktur; bitki değillerdir."
  },
  {
    id: "f5-1-05", subject: "fen", term: 1,
    prompt: "Kuvvetin birimi nedir?",
    options: ["Gram", "Newton", "Derece", "Metre"],
    correct: 1,
    explanation: "Kuvvet, Isaac Newton'un anısına 'Newton' (N) birimiyle ölçülür."
  },
  {
    id: "f5-2-06", subject: "fen", term: 2,
    prompt: "Sürtünme kuvvetini azaltmak için hangisi yapılır?",
    options: ["Yüzeyi pürüzlü yapmak", "Yağlama yapmak", "Ağırlığı artırmak", "Kum dökmek"],
    correct: 1,
    explanation: "Yağlama, yüzeyler arasındaki pürüzleri kapatarak sürtünmeyi azaltır."
  },
  {
    id: "f5-2-07", subject: "fen", term: 2,
    prompt: "Maddenin ısı alarak sıvı halden gaz hale geçmesine ne denir?",
    options: ["Donma", "Erime", "Buharlaşma", "Yoğuşma"],
    correct: 2,
    explanation: "Sıvıdan gaza geçiş buharlaşmadır."
  },
  {
    id: "f5-2-08", subject: "fen", term: 2,
    prompt: "Hangisi bir ısı kaynağıdır?",
    options: ["Ay", "Güneş", "Ayna", "Bulut"],
    correct: 1,
    explanation: "Güneş, Dünya'nın en büyük doğal ısı ve ışık kaynağıdır."
  },
  {
    id: "f5-2-09", subject: "fen", term: 2,
    prompt: "Işık nasıl yayılır?",
    options: ["Eğrisel", "Dairesel", "Doğrusal", "Sadece aşağı doğru"],
    correct: 2,
    explanation: "Işık, engelle karşılaşmadığı sürece her yöne doğrusal (düz) çizgiler halinde yayılır."
  },
  {
    id: "f5-2-10", subject: "fen", term: 2,
    prompt: "Gölge oluşumu için ne gereklidir?",
    options: ["Saydam madde", "Opak madde", "Su", "Ayna"],
    correct: 1,
    explanation: "Opak (ışığı geçirmeyen) maddeler ışığı engellediği için arkalarında gölge oluşur."
  },
  {
    id: "f5-1-11", subject: "fen", term: 1,
    prompt: "Ay'ın yüzeyindeki derin çukurlara ne denir?",
    options: ["Krater", "Vadi", "Deniz", "Ova"],
    correct: 0,
    explanation: "Gök taşlarının çarpmasıyla oluşan bu çukurlara krater denir."
  },
  {
    id: "f5-2-12", subject: "fen", term: 2,
    prompt: "Hangisi biyoçeşitliliği tehdit eden bir durumdur?",
    options: ["Ağaç dikmek", "Av yasağı", "Çevre kirliliği", "Milli parklar"],
    correct: 2,
    explanation: "Hava, su ve toprak kirliliği canlı türlerinin azalmasına neden olur."
  },

  // ==========================================
  // İNGİLİZCE (12 Soru)
  // ==========================================
  {
    id: "e5-1-01", subject: "ingilizce", term: 1,
    prompt: "A: 'How are you?' B: '____, thanks.'",
    options: ["Hello", "Good morning", "Fine", "Goodbye"],
    correct: 2,
    explanation: "'Nasılsın?' sorusuna 'İyiyim' (Fine) cevabı verilir."
  },
  {
    id: "e5-1-02", subject: "ingilizce", term: 1,
    prompt: "I am from Turkey. I am ____.",
    options: ["Turkish", "English", "French", "German"],
    correct: 0,
    explanation: "Türkiye'den gelen biri Türk'tür (Turkish)."
  },
  {
    id: "e5-1-03", subject: "ingilizce", term: 1,
    prompt: "Which one is a school subject?",
    options: ["Library", "Science", "Pencil case", "Teacher"],
    correct: 1,
    explanation: "Science (Fen Bilimleri) bir okul dersidir."
  },
  {
    id: "e5-1-04", subject: "ingilizce", term: 1,
    prompt: "The bakery is ____ the pharmacy and the cafe.",
    options: ["under", "between", "on", "at"],
    correct: 1,
    explanation: "İki yer arasını tarif etmek için 'between' (arasında) kullanılır."
  },
  {
    id: "e5-1-05", subject: "ingilizce", term: 1,
    prompt: "I can play football but I ____ play the piano.",
    options: ["can", "am", "can't", "do"],
    correct: 2,
    explanation: "'But' zıtlık bildirir; bir şeyi yapabiliyorsan diğerini yapamıyor (can't) olmalısın."
  },
  {
    id: "e5-2-06", subject: "ingilizce", term: 2,
    prompt: "What time is it? (08:30)",
    options: ["It is eight o'clock.", "It is half past eight.", "It is quarter past eight.", "It is nine o'clock."],
    correct: 1,
    explanation: "Buçuklu saatler 'half past' olarak ifade edilir."
  },
  {
    id: "e5-2-07", subject: "ingilizce", term: 2,
    prompt: "I ____ my teeth every morning.",
    options: ["wash", "comb", "brush", "eat"],
    correct: 2,
    explanation: "Dişler fırçalanır (brush)."
  },
  {
    id: "e5-2-08", subject: "ingilizce", term: 2,
    prompt: "He ____ lunch at 12 o'clock.",
    options: ["has", "have", "do", "does"],
    correct: 0,
    explanation: "Geniş zamanda 'He' öznesiyle 'has' kullanılır."
  },
  {
    id: "e5-2-09", subject: "ingilizce", term: 2,
    prompt: "Would you like some cake?",
    options: ["Yes, please", "No, I am not", "I am ten", "Fine, thanks"],
    correct: 0,
    explanation: "Bir ikram teklifine 'Evet, lütfen' (Yes, please) şeklinde cevap verilir."
  },
  {
    id: "e5-2-10", subject: "ingilizce", term: 2,
    prompt: "Which animal lives in the forest?",
    options: ["Cow", "Chicken", "Bear", "Cat"],
    correct: 2,
    explanation: "Bear (Ayı) ormanda yaşayan vahşi bir hayvandır."
  },
  {
    id: "e5-1-11", subject: "ingilizce", term: 1,
    prompt: "Where is the book? It is ____ the table.",
    options: ["at", "on", "between", "next"],
    correct: 1,
    explanation: "Nesne masanın üstündeyse 'on' kullanılır."
  },
  {
    id: "e5-2-12", subject: "ingilizce", term: 2,
    prompt: "I feel ____. I need a glass of water.",
    options: ["hungry", "happy", "thirsty", "tired"],
    correct: 2,
    explanation: "Su içme ihtiyacı susamış (thirsty) olmayı gerektirir."
  },
  // Mevcut questions5 dizisine eklenecek 10'ar soruluk ek paket:

// ==========================================
// MATEMATİK (+10 Soru) - Toplam 23
// ==========================================
  {
    id: "m5-1-16", subject: "matematik", term: 1,
    prompt: "Bir sinema salonunda 24 sıra ve her sırada 18 koltuk vardır. Bir film gösteriminde 35 koltuk boş kaldığına göre kaç izleyici vardır?",
    options: ["397", "432", "400", "467"],
    correct: 0,
    explanation: "Toplam koltuk: 24 x 18 = 432. İzleyici sayısı: 432 - 35 = 397."
  },
  {
    id: "m5-2-17", subject: "matematik", term: 2,
    prompt: "Bir koşucu 5 km'lik yolun önce 1250 metresini, sonra 2100 metresini koşmuştur. Geriye kaç metre yolu kalmıştır?",
    options: ["1650", "3350", "1350", "1750"],
    correct: 0,
    explanation: "Toplam yol 5000 m. Koşulan: 1250 + 2100 = 3350 m. Kalan: 5000 - 3350 = 1650 m."
  },
  {
    id: "m5-1-18", subject: "matematik", term: 1,
    prompt: "72 sayısının 2/3'ü kaçtır?",
    options: ["24", "48", "36", "54"],
    correct: 1,
    explanation: "72'yi 3'e böleriz (24) ve 2 ile çarparız: 24 x 2 = 48."
  },
  {
    id: "m5-2-19", subject: "matematik", term: 2,
    prompt: "0,6 > A > 0,45 sıralamasında A yerine aşağıdakilerden hangisi gelebilir?",
    options: ["0,39", "0,42", "0,51", "0,65"],
    correct: 2,
    explanation: "0,6 sayısı 0,60 demektir. 0,45 ile 0,60 arasında sadece 0,51 vardır."
  },
  {
    id: "m5-2-20", subject: "matematik", term: 2,
    prompt: "Bir dikdörtgenin uzun kenarı 12 cm, kısa kenarı uzun kenarın yarısıdır. Bu dikdörtgenin çevresi kaç cm'dir?",
    options: ["18", "24", "36", "48"],
    correct: 2,
    explanation: "Kısa kenar = 6 cm. Çevre = 2 x (12 + 6) = 2 x 18 = 36 cm."
  },
  {
    id: "m5-1-21", subject: "matematik", term: 1,
    prompt: "Hangi sayının 4 katının 10 eksiği 30'dur?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "Ters işlem yapılır: 30 + 10 = 40. 40 / 4 = 10."
  },
  {
    id: "m5-2-22", subject: "matematik", term: 2,
    prompt: "Bir geniş açının ölçüsü aşağıdakilerden hangisi olamaz?",
    options: ["91", "120", "179", "185"],
    correct: 3,
    explanation: "Geniş açılar 90 ile 180 derece arasındadır. 185 derece geniş açı değildir."
  },
  {
    id: "m5-2-23", subject: "matematik", term: 2,
    prompt: "Ali parasının %40'ı ile kitap almıştır. Geriye parasının kaçta kaçı kalmıştır?",
    options: ["2/5", "3/5", "1/4", "3/4"],
    correct: 1,
    explanation: "Kalan para %60'tır. 60/100 sadeleşince 3/5 olur."
  },

// ==========================================
// TÜRKÇE (+10 Soru) - Toplam 23
// ==========================================
  {
    id: "t5-1-14", subject: "turkce", term: 1,
    prompt: "'Yüz' kelimesi hangi cümlede farklı bir anlamda kullanılmıştır?",
    options: ["Denizde yüzmeyi çok severim.", "Defterine bir yüz çizdi.", "Bayramda yüz lira topladı.", "Düğünde yüz kişi vardı."],
    correct: 0,
    explanation: "İlk cümlede 'yüzmek' eylemi, diğerlerinde sayı veya çehre anlamı vardır."
  },
  {
    id: "t5-2-15", subject: "turkce", term: 2,
    prompt: "Aşağıdakilerden hangisi bir 'öznel' yargıdır?",
    options: ["Kitap 200 sayfadan oluşuyor.", "Yazarın son kitabı çok etkileyici.", "Film İstanbul'da çekilmiş.", "Hafta yedi gündür."],
    correct: 1,
    explanation: "Etkileyici olması kişiden kişiye değişen bir yorumdur."
  },
  {
    id: "t5-1-16", subject: "turkce", term: 1,
    prompt: "'Çocuklar parkta neşeyle oynuyor.' cümlesinde işi yapan (özne) kimdir?",
    options: ["Parkta", "Neşeyle", "Çocuklar", "Oynuyor"],
    correct: 2,
    explanation: "Oynama işini yapan 'çocuklar'dır."
  },
  {
    id: "t5-2-17", subject: "turkce", term: 2,
    prompt: "Hangi kelime grubunda yazım yanlışı vardır?",
    options: ["Türk Dil Kurumu", "Ayşe teyze", "Ankara kalesi", "Güneş sistemi"],
    correct: 2,
    explanation: "Özel isme dahil olduğu için 'Ankara Kalesi' şeklinde büyük yazılmalıydı."
  },
  {
    id: "t5-1-18", subject: "turkce", term: 1,
    prompt: "'Okumak' kelimesine hangi ek gelirse 'okuma işini yapan kişi' anlamı kazanır?",
    options: ["-luk", " -cu", " -an", " -man"],
    correct: 2,
    explanation: "Okuyan (okuyan kişi) veya Okur şeklinde türetilir, ancak şıklarda '-an' sıfat fiili kişiyi belirtir."
  },

// ==========================================
// FEN BİLİMLERİ (+10 Soru) - Toplam 22
// ==========================================
  {
    id: "f5-2-13", subject: "fen", term: 2,
    prompt: "Isı ve sıcaklık ile ilgili hangisi yanlıştır?",
    options: ["Isı bir enerjidir.", "Sıcaklık termometre ile ölçülür.", "Isı birimi derecedir.", "Isı akışı sıcaktan soğuğa doğrudur."],
    correct: 2,
    explanation: "Isı birimi Kalori veya Joule'dür. Derece (°C) sıcaklık birimidir."
  },
  {
    id: "f5-1-14", subject: "fen", term: 1,
    prompt: "Çiçekli bir bitkinin üreme organı neresidir?",
    options: ["Kök", "Gövde", "Yaprak", "Çiçek"],
    correct: 3,
    explanation: "Bitkilerde tohumun oluştuğu ve üremenin gerçekleştiği yer çiçektir."
  },
  {
    id: "f5-2-15", subject: "fen", term: 2,
    prompt: "Güneş tutulması sırasında hangisi ortada bulunur?",
    options: ["Dünya", "Ay", "Güneş", "Yıldızlar"],
    correct: 1,
    explanation: "Güneş tutulmasında Ay, Güneş ile Dünya'nın arasına girer."
  },
  {
    id: "f5-2-16", subject: "fen", term: 2,
    prompt: "Aşağıdakilerden hangisi yapay bir ışık kaynağıdır?",
    options: ["Yıldız", "Şimşek", "Mum", "Ateş böceği"],
    correct: 2,
    explanation: "Mum insanlar tarafından yapıldığı için yapaydır; diğerleri doğaldır."
  },

// ==========================================
// İNGİLİZCE (+10 Soru) - Toplam 22
// ==========================================
  {
    id: "e5-1-13", subject: "ingilizce", term: 1,
    prompt: "I am interested in ____. I love solving problems.",
    options: ["Art", "Maths", "Music", "P.E."],
    correct: 1,
    explanation: "Problem çözmeyi seven biri Matematik (Maths) dersini sever."
  },
  {
    id: "e5-2-14", subject: "ingilizce", term: 2,
    prompt: "How can I go to the hospital? - ____ straight and turn left.",
    options: ["Go", "Read", "Wait", "Look"],
    correct: 0,
    explanation: "Yer tarifinde 'Düz git' anlamında 'Go straight' kullanılır."
  },
  {
    id: "e5-1-15", subject: "ingilizce", term: 1,
    prompt: "My father's brother is my ____.",
    options: ["Cousin", "Aunt", "Uncle", "Grandpa"],
    correct: 2,
    explanation: "Babanın erkek kardeşi amcadır (Uncle)."
  },
  // ==========================================
// MATEMATİK (Ek +10 Soru)
// ==========================================
{
  id: "m5-zn-11", subject: "matematik", term: 1,
  prompt: "Bir fabrikada üretilen 45.000 kalemin 2/5'i kırmızı, kalanı mavidir. Mavi kalem sayısı kaçtır?",
  options: ["18.000", "22.500", "27.000", "30.000"],
  correct: 2,
  explanation: "45.000 / 5 = 9.000. Kırmızı: 9.000 x 2 = 18.000. Mavi: 45.000 - 18.000 = 27.000."
},
{
  id: "m5-zn-12", subject: "matematik", term: 2,
  prompt: "Bir kenar uzunluğu 8 cm olan bir karenin alanı, kısa kenarı 4 cm olan bir dikdörtgenin alanına eşittir. Dikdörtgenin uzun kenarı kaç cm'dir?",
  options: ["12", "16", "24", "32"],
  correct: 1,
  explanation: "Karenin alanı: 8 x 8 = 64. Dikdörtgenin alanı da 64 olmalı. 64 / 4 = 16 cm."
},
{
  id: "m5-zn-13", subject: "matematik", term: 1,
  prompt: "Bir bölme işleminde kalan 12 ise, bölen aşağıdakilerden hangisi olamaz?",
  options: ["13", "15", "11", "20"],
  correct: 2,
  explanation: "Bölme işleminde bölen her zaman kalandan büyük olmalıdır. 11, 12'den küçük olduğu için bölen olamaz."
},
{
  id: "m5-zn-14", subject: "matematik", term: 2,
  prompt: "360 sayısının %25'i kaçtır?",
  options: ["80", "90", "100", "120"],
  correct: 1,
  explanation: "%25 demek dörtte bir (1/4) demektir. 360 / 4 = 90."
},
{
  id: "m5-zn-15", subject: "matematik", term: 1,
  prompt: "3³ - 2⁴ işleminin sonucu kaçtır?",
  options: ["11", "9", "5", "1"],
  correct: 0,
  explanation: "3³ = 27, 2⁴ = 16. 27 - 16 = 11."
},
{
  id: "m5-zn-16", subject: "matematik", term: 2,
  prompt: "Hangi ondalık gösterim 0,7'den daha büyüktür?",
  options: ["0,69", "0,08", "0,71", "0,70"],
  correct: 2,
  explanation: "0,7 sayısı 0,70'e eşittir. 0,71 > 0,70."
},
{
  id: "m5-zn-17", subject: "matematik", term: 1,
  prompt: "987.654.321 sayısında on milyonlar basamağındaki rakam kaçtır?",
  options: ["9", "8", "7", "6"],
  correct: 1,
  explanation: "Sırasıyla: Birler, Onlar, Yüzler, Binler, On Binler, Yüz Binler, Milyonlar, On Milyonlar(8)."
},
{
  id: "m5-zn-18", subject: "matematik", term: 2,
  prompt: "Bir geniş açının ölçüsü bir dik açının ölçüsünden 45 derece fazladır. Bu açı kaç derecedir?",
  options: ["125", "135", "145", "155"],
  correct: 1,
  explanation: "Dik açı 90 derecedir. 90 + 45 = 135 derece."
},
{
  id: "m5-zn-19", subject: "matematik", term: 2,
  prompt: "Günde 250 ml süt içen bir çocuk, 12 günde toplam kaç litre süt içer?",
  options: ["2", "3", "4", "5"],
  correct: 1,
  explanation: "250 x 12 = 3000 ml. 3000 ml = 3 Litre."
},
{
  id: "m5-zn-20", subject: "matematik", term: 1,
  prompt: "Paydası 12 olan birim kesir aşağıdakilerden hangisidir?",
  options: ["12/1", "1/12", "12/12", "6/12"],
  correct: 1,
  explanation: "Birim kesirlerin payı her zaman 1'dir."
},

// ==========================================
// TÜRKÇE (Ek +10 Soru)
// ==========================================
{
  id: "t5-zn-11", subject: "turkce", term: 1,
  prompt: "Aşağıdaki kelimelerden hangisi 'soyut' bir anlam taşır?",
  options: ["Hava", "Sevgi", "Gözlük", "Çiçek"],
  correct: 1,
  explanation: "Sevgi beş duyu organıyla algılanamaz, zihinsel bir kavramdır."
},
{
  id: "t5-zn-12", subject: "turkce", term: 2,
  prompt: "Hangisi bir 'özne-yüklem' uyumsuzluğu içermez?",
  options: ["Kuşlar uçuyorlar.", "Ben ve o gittik.", "Herkes sustular.", "Çiçekler soldu."],
  correct: 3,
  explanation: "İnsan dışı çoğul varlıklar özne olduğunda yüklem tekil olur: Çiçekler soldu."
},
{
  id: "t5-zn-13", subject: "turkce", term: 1,
  prompt: "'Sıcak' kelimesi hangi cümlede gerçek anlamı dışında (mecaz) kullanılmıştır?",
  options: ["Sıcak çorba içti.", "Hava bugün çok sıcak.", "Bizi çok sıcak karşıladı.", "Sıcak sudan eli yandı."],
  correct: 2,
  explanation: "Sıcak karşılamak; samimi ve içten davranmak anlamında mecazdır."
},
{
  id: "t5-zn-14", subject: "turkce", term: 2,
  prompt: "Aşağıdaki cümlelerin hangisinde 'ki'nin yazımı yanlıştır?",
  options: ["Seninki gelmiş.", "Evdeki hesap çarşıya uymaz.", "Öyle bir çocukki anlatamam.", "Bahçedeki çiçekler kurumuş."],
  correct: 2,
  explanation: "Bağlaç olan 'ki' ayrı yazılır: 'çocuk ki' olmalı."
},
{
  id: "t5-zn-15", subject: "turkce", term: 1,
  prompt: "Hangi atasözü 'çalışkanlık' ile ilgilidir?",
  options: ["Damlaya damlaya göl olur.", "İşleyen demir ışıldar.", "Ayağını yorganına göre uzat.", "Sakla samanı gelir zamanı."],
  correct: 1,
  explanation: "Çalışan insanın yeteneklerinin körelmeyeceğini anlatır."
},
{
  id: "t5-zn-16", subject: "turkce", term: 2,
  prompt: "'Kitapçı' kelimesinin kökü ve aldığı ek türü nedir?",
  options: ["Kitap-çı (Çekim eki)", "Kitap-çı (Yapım eki)", "Kita-pçı (Yapım eki)", "Kitapçı (Kök)"],
  correct: 1,
  explanation: "Kitap köktür, '-çı' eki ise yeni bir anlam türettiği için yapım ekidir."
},
{
  id: "t5-zn-17", subject: "turkce", term: 1,
  prompt: "Aşağıdakilerden hangisi bir 'nesnel' cümledir?",
  options: ["Mavi en güzel renktir.", "Dondurma çok lezzetlidir.", "Türkiye üç tarafı denizlerle çevrili bir yarımadadır.", "Bu film çok sıkıcı."],
  correct: 2,
  explanation: "Bilimsel olarak kanıtlanabilir, kişiden kişiye değişmez."
},
{
  id: "t5-zn-18", subject: "turkce", term: 2,
  prompt: "Aşağıdaki kelimelerin hangisinde ünsüz benzeşmesi (sertleşme) vardır?",
  options: ["Dolapta", "Kitabı", "Sütçü", "Ağaca"],
  correct: 0,
  explanation: "Dolap-da -> Dolapta (d sesi t'ye dönüşmüştür)."
},
{
  id: "t5-zn-19", subject: "turkce", term: 1,
  prompt: "Hangisi bir 'hikaye unsuru' değildir?",
  options: ["Yer", "Zaman", "Kişiler", "Ana fikir"],
  correct: 3,
  explanation: "Ana fikir metnin mesajıdır, olay örgüsünün bir parçası veya unsuru değildir."
},
{
  id: "t5-zn-20", subject: "turkce", term: 2,
  prompt: "Aşağıdaki deyimlerden hangisi 'çok sevinmek' anlamındadır?",
  options: ["Göz atmak", "Etekleri zil çalmak", "Kulak misafiri olmak", "Burnu havada olmak"],
  correct: 1,
  explanation: "Etekleri zil çalmak deyimi büyük bir sevinç ve heyecanı ifade eder."
},

// ==========================================
// FEN BİLİMLERİ (Ek +10 Soru)
// ==========================================
{
  id: "f5-zn-11", subject: "fen", term: 1,
  prompt: "Ay'ın Dünya etrafındaki dolanma süresi yaklaşık kaç gündür?",
  options: ["24", "27", "30", "365"],
  correct: 1,
  explanation: "Ay, Dünya etrafındaki turunu yaklaşık 27.3 günde tamamlar."
},
{
  id: "f5-zn-12", subject: "fen", term: 2,
  prompt: "Aşağıdakilerden hangisi opak bir maddedir?",
  options: ["Cam", "Su", "Tahta", "Hava"],
  correct: 2,
  explanation: "Işığı hiç geçirmeyen maddelere opak denir. Tahta opaktır."
},
{
  id: "f5-zn-13", subject: "fen", term: 1,
  prompt: "Aşağıdaki canlılardan hangisi omurgalı hayvanlar grubuna girer?",
  options: ["Kelebek", "Yılan", "Toprak solucanı", "Sinek"],
  correct: 1,
  explanation: "Sürüngenler (yılan) omurgalı hayvanlar sınıfındadır."
},
{
  id: "f5-zn-14", subject: "fen", term: 2,
  prompt: "Sıvı bir maddenin ısı kaybederek katı hale geçmesine ne denir?",
  options: ["Erime", "Donma", "Yoğuşma", "Süblimleşme"],
  correct: 1,
  explanation: "Sıvıdan katıya geçiş donmadır."
},
{
  id: "f5-zn-15", subject: "fen", term: 1,
  prompt: "Dinamometre neyi ölçmek için kullanılır?",
  options: ["Sıcaklık", "Kütle", "Kuvvet", "Zaman"],
  correct: 2,
  explanation: "Kuvvetin büyüklüğü dinamometre ile ölçülür."
},
{
  id: "f5-zn-16", subject: "fen", term: 2,
  prompt: "Aşağıdakilerden hangisi bir 'ısı' birimidir?",
  options: ["Derece", "Gram", "Joule", "Metre"],
  correct: 2,
  explanation: "Isı enerji olduğu için Joule veya Kalori ile ifade edilir."
},
{
  id: "f5-zn-17", subject: "fen", term: 1,
  prompt: "Bitkinin topraktan su ve mineral almasını sağlayan yapısı hangisidir?",
  options: ["Çiçek", "Gövde", "Yaprak", "Kök"],
  correct: 3,
  explanation: "Kökler bitkiyi toprağa bağlar ve su ihtiyacını karşılar."
},
{
  id: "f5-zn-18", subject: "fen", term: 2,
  prompt: "Sürtünme kuvveti ile ilgili hangisi doğrudur?",
  options: ["Hareketi kolaylaştırır.", "Sadece sıvılarda olur.", "Harekete zıt yöndedir.", "Yüzey pürüzsüzleştikçe artar."],
  correct: 2,
  explanation: "Sürtünme kuvveti her zaman hareket yönüne zıt ve hareketi zorlaştırıcıdır."
},
{
  id: "f5-zn-19", subject: "fen", term: 1,
  prompt: "Mikroskobik canlıların yararlarından biri hangisidir?",
  options: ["Hastalık yapması", "Sütün peynire dönüşmesi", "Besinleri küçültmesi", "Dişleri çürütmesi"],
  correct: 1,
  explanation: "Mayalanma olayını sağlayan bazı mikroskobik canlılar faydalıdır."
},
{
  id: "f5-zn-20", subject: "fen", term: 2,
  prompt: "Işığın bir yüzeye çarpıp geri dönmesine ne denir?",
  options: ["Kırılma", "Yansıma", "Soğurulma", "Yayılma"],
  correct: 1,
  explanation: "Işığın geri dönmesi olayı yansımadır."
},

// ==========================================
// İNGİLİZCE (Ek +10 Soru)
// ==========================================
{
  id: "e5-zn-11", subject: "ingilizce", term: 1,
  prompt: "Where do you study? - I study at ____.",
  options: ["Hospital", "School", "Bakery", "Park"],
  correct: 1,
  explanation: "Ders çalışma veya eğitim yeri okuldur (school)."
},
{
  id: "e5-zn-12", subject: "ingilizce", term: 2,
  prompt: "Which one is a health problem?",
  options: ["Happy", "Broken leg", "Hungry", "Tall"],
  correct: 1,
  explanation: "Broken leg (kırık bacak) bir sağlık sorunudur."
},
{
  id: "e5-zn-13", subject: "ingilizce", term: 1,
  prompt: "A: '____ is the museum?' B: 'It is on the Apple Street.'",
  options: ["What", "Who", "Where", "When"],
  correct: 2,
  explanation: "Yer sormak için 'Where' (Nerede) kullanılır."
},
{
  id: "e5-zn-14", subject: "ingilizce", term: 2,
  prompt: "I ____ breakfast every morning.",
  options: ["do", "go", "have", "play"],
  correct: 2,
  explanation: "Kahvaltı yapmak 'have breakfast' kalıbıyla söylenir."
},
{
  id: "e5-zn-15", subject: "ingilizce", term: 1,
  prompt: "Is she Chinese? - No, she is ____. She is from Japan.",
  options: ["English", "French", "Japanese", "Turkish"],
  correct: 2,
  explanation: "Japonya'dan gelen biri Japondur (Japanese)."
},
{
  id: "e5-zn-16", subject: "ingilizce", term: 2,
  prompt: "I am thirsty. I want to drink ____.",
  options: ["Pizza", "Water", "Sandwich", "Apple"],
  correct: 1,
  explanation: "Susamış (thirsty) biri su (water) içmek ister."
},
{
  id: "e5-zn-17", subject: "ingilizce", term: 1,
  prompt: "Which one is an indoor game?",
  options: ["Chess", "Football", "Basketball", "Tennis"],
  correct: 0,
  explanation: "Satranç (Chess) kapalı alanda oynanan bir oyundur."
},
{
  id: "e5-zn-18", subject: "ingilizce", term: 2,
  prompt: "What is the weather like? - It is ____. Take your umbrella.",
  options: ["Sunny", "Rainy", "Hot", "Windy"],
  correct: 1,
  explanation: "Şemsiye (umbrella) alınması gerekiyorsa hava yağmurludur (rainy)."
},
{
  id: "e5-zn-19", subject: "ingilizce", term: 1,
  prompt: "Seven + Eight = ?",
  options: ["Twelve", "Thirteen", "Fourteen", "Fifteen"],
  correct: 3,
  explanation: "7 + 8 = 15 (fifteen)."
},
{
  id: "e5-zn-20", subject: "ingilizce", term: 2,
  prompt: "Dogs are ____ animals.",
  options: ["Wild", "Jungle", "Dangerous", "Friendly"],
  correct: 3,
  explanation: "Köpekler arkadaş canlısı (friendly) hayvanlardır."
}
]; 
  
