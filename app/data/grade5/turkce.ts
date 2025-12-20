 import { SubjectData } from './types';

export const turkceData: SubjectData = {
  term1: {
    test1: [
      { id: "t5-1-01", subject: "turkce", term: 1, prompt: "'Kırmak' kelimesi hangi cümlede mecaz anlamda kullanılmıştır?", options: ["Bardağı kazayla kırdı.", "Dalları fırtına kırmış.", "Sözleriyle kalbimi kırdı.", "Odunları baltayla kırdı."], correct: 2, explanation: "Gönül/kalp kırmak, üzmek anlamında kullanılan bir mecazdır." },
      { id: "t5-1-02", subject: "turkce", term: 1, prompt: "Hangi kelimenin zıt anlamlısı yanlış verilmiştir?", options: ["Taze - Bayat", "Yavaş - Hızlı", "Zengin - Fakir", "Siyah - Kara"], correct: 3, explanation: "Siyah ve Kara eş anlamlıdır." },
      { id: "t5-1-03", subject: "turkce", term: 1, prompt: "Aşağıdaki cümlelerin hangisinde nesnel bir anlatım vardır?", options: ["En güzel renk mavidir.", "Türkiye'nin başkenti Ankara'dır.", "Bu film çok sıkıcı.", "Dondurma harika bir yiyecek."], correct: 1, explanation: "Başkent bilgisi kanıtlanabilir gerçektir." },
      { id: "t5-1-04", subject: "turkce", term: 1, prompt: "Aşağıdaki kelimelerden hangisi yapım eki almıştır?", options: ["Evler", "Gözlük", "Masa", "Kalemim"], correct: 1, explanation: "Göz'den gözlük türemiştir." },
      { id: "t5-1-05", subject: "turkce", term: 1, prompt: "Hangisi bir deyimdir?", options: ["Göz atmak", "Kitap okumak", "Okula gitmek", "Yemek yemek"], correct: 0, explanation: "Göz atmak kalıplaşmış bir deyimdir." },
      { id: "t5-1-11", subject: "turkce", term: 1, prompt: "Aşağıdakilerden hangisi bir 'atasözü' değildir?", options: ["Damlaya damlaya göl olur.", "Sakla samanı gelir zamanı.", "Kitap okumak faydalıdır.", "Ayağını yorganına göre uzat."], correct: 2, explanation: "Bu genel bir bilgi cümlesidir." },
      { id: "t5-1-14", subject: "turkce", term: 1, prompt: "'Yüz' kelimesi hangi cümlede farklı bir anlamda kullanılmıştır?", options: ["Denizde yüzmeyi çok severim.", "Defterine bir yüz çizdi.", "Bayramda yüz lira topladı.", "Düğünde yüz kişi vardı."], correct: 0, explanation: "Yüzmek fiildir." },
      { id: "t5-1-16", subject: "turkce", term: 1, prompt: "'Çocuklar parkta neşeyle oynuyor.' cümlesinde işi yapan (özne) kimdir?", options: ["Parkta", "Neşeyle", "Çocuklar", "Oynuyor"], correct: 2, explanation: "Özne çocuklardır." },
      { id: "t5-1-18", subject: "turkce", term: 1, prompt: "'Okumak' kelimesine hangi ek gelirse 'okuma işini yapan kişi' anlamı kazanır?", options: ["-luk", " -cu", " -an", " -man"], correct: 2, explanation: "Okuyan anlamı verir." },
      { id: "t5-zn-11", subject: "turkce", term: 1, prompt: "Aşağıdaki kelimelerden hangisi 'soyut' bir anlam taşır?", options: ["Hava", "Sevgi", "Gözlük", "Çiçek"], correct: 1, explanation: "Sevgi soyuttur." },
      { id: "t5-zn-13", subject: "turkce", term: 1, prompt: "'Sıcak' kelimesi hangi cümlede gerçek anlamı dışında (mecaz) kullanılmıştır?", options: ["Sıcak çorba içti.", "Hava bugün çok sıcak.", "Bizi çok sıcak karşıladı.", "Sıcak sudan eli yandı."], correct: 2, explanation: "Sıcak karşılamak mecazdır." },
      { id: "t5-zn-15", subject: "turkce", term: 1, prompt: "Hangi atasözü 'çalışkanlık' ile ilgilidir?", options: ["Damlaya damlaya göl olur.", "İşleyen demir ışıldar.", "Ayağını yorganına göre uzat.", "Sakla samanı gelir zamanı."], correct: 1, explanation: "Çalışkanlığı vurgular." },
      { id: "t5-zn-17", subject: "turkce", term: 1, prompt: "Aşağıdakilerden hangisi bir 'nesnel' cümledir?", options: ["Mavi en güzel renktir.", "Dondurma çok lezzetlidir.", "Türkiye üç tarafı denizlerle çevrili bir yarımadadır.", "Bu film çok sıkıcı."], correct: 2, explanation: "Nesnel bir gerçektir." },
      { id: "t5-zn-19", subject: "turkce", term: 1, prompt: "Hangisi bir 'hikaye unsuru' değildir?", options: ["Yer", "Zaman", "Kişiler", "Ana fikir"], correct: 3, explanation: "Ana fikir mesajdır." },
      { id: "t5-hard-nv-01", subject: "turkce", term: 1, prompt: "'Kuyumcu titizliğiyle çalışmak' sözüyle anlatılmak istenen temel düşünce nedir?", options: ["Çok zengin olmak", "Çok yavaş hareket etmek", "İşini büyük bir özen ve dikkatle yapmak", "Değerli taşlarla uğraşmak"], correct: 2, explanation: "Aşırı özen anlamındadır." },
      { id: "t5-hard-nv-03", subject: "turkce", term: 1, prompt: "'Ağır' kelimesi hangi cümlede 'ciddi, vakarlı' anlamında kullanılmıştır?", options: ["Bu çanta çok ağır.", "Bugün ağır bir yemek yedik.", "Onun çok ağır bir kişiliği vardı.", "Ağır adımlarla yürüdü."], correct: 2, explanation: "Vakarlı anlamındadır." },
      { id: "t5-adv-01", subject: "turkce", term: 1, prompt: "'Bakmak' kelimesi aşağıdaki cümlelerin hangisinde 'incelemek, araştırmak' anlamında kullanılmıştır?", options: ["Pencereden dışarı bakıyor.", "Annem bize çok iyi baktı.", "Bu konuya sözlükten bakmalısın.", "Eski fotoğraflara bakıp ağladı."], correct: 2, explanation: "Sözlükten bakmak araştırmaktır." },
      { id: "t5-adv-03", subject: "turkce", term: 1, prompt: "Hangi seçenekteki deyim 'çok korkmak / telaşlanmak' anlamını karşılar?", options: ["Gözüne girmek", "Kulak asmamak", "Etekleri tutuşmak", "Ağzı kulaklarına varmak"], correct: 2, explanation: "Korku ve telaş anlamındadır." },
      { id: "t5-adv-05", subject: "turkce", term: 1, prompt: "Aşağıdaki kelimelerin hangisi hem 'yapım eki' hem 'çekim eki' almıştır?", options: ["Kitapçıdan", "Gözlük", "Masanın", "Kalemler"], correct: 0, explanation: "Kitap-çı-dan." }
    ],
    test2: []
  },
  term2: {
    test1: [
      { id: "t5-2-06", subject: "turkce", term: 2, prompt: "Hangi cümlede noktalama hatası vardır?", options: ["Elma, armut aldım.", "Sende geldin mi?", "Eyvah, yangın var!", "Dün İzmir'e gittim."], correct: 1, explanation: "Sen de geldin mi olmalı." },
      { id: "t5-2-07", subject: "turkce", term: 2, prompt: "Metnin ana fikri nedir?", options: ["Konusu", "Yardımcı fikirleri", "Verilmek istenen ders", "Başlığı"], correct: 2, explanation: "Verilmek istenen mesajdır." },
      { id: "t5-2-08", subject: "turkce", term: 2, prompt: "Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması vardır?", options: ["Kitapçı", "Ağacı", "Simitçi", "Sütçü"], correct: 1, explanation: "Ağaç -> ağacı." },
      { id: "t5-2-09", subject: "turkce", term: 2, prompt: "Hangi cümle bir soru cümlesidir?", options: ["Bize geleceğini söyledi.", "Neden gelmediğini bilmiyorum.", "Okula ne zaman gideceksin?", "Gidince haber ver."], correct: 2, explanation: "Soru sorar." },
      { id: "t5-2-10", subject: "turkce", term: 2, prompt: "'Pırıl pırıl' ikilemesi cümleye hangi anlamı katmıştır?", options: ["Hızlı", "Yavaş", "Temiz/Parlak", "Gürültülü"], correct: 2, explanation: "Temiz ve parlak." },
      { id: "t5-2-12", subject: "turkce", term: 2, prompt: "Hangisi büyük ünlü uyumuna uyar?", options: ["Kitap", "Kalem", "Okul", "Tiyatro"], correct: 2, explanation: "Okul uyar." },
      { id: "t5-2-13", subject: "turkce", term: 2, prompt: "Hikayenin unsurlarından hangisi 'olay'ı kapsar?", options: ["Zaman", "Yer", "Kişiler", "Olay örgüsü"], correct: 3, explanation: "Olayların bütünüdür." },
      { id: "t5-2-15", subject: "turkce", term: 2, prompt: "Aşağıdakilerden hangisi bir 'öznel' yargıdır?", options: ["Kitap 200 sayfadan oluşuyor.", "Yazarın son kitabı çok etkileyici.", "Film İstanbul'da çekilmiş.", "Hafta yedi gündür."], correct: 1, explanation: "Kişisel görüştür." },
      { id: "t5-2-17", subject: "turkce", term: 2, prompt: "Hangi kelime grubunda yazım yanlışı vardır?", options: ["Türk Dil Kurumu", "Ayşe teyze", "Ankara kalesi", "Güneş sistemi"], correct: 2, explanation: "Kalesi büyük olmalı." },
      { id: "t5-zn-12", subject: "turkce", term: 2, prompt: "Hangisi bir 'özne-yüklem' uyumsuzluğu içermez?", options: ["Kuşlar uçuyorlar.", "Ben ve o gittik.", "Herkes sustular.", "Çiçekler soldu."], correct: 3, explanation: "İnsan dışı çoğul varlık özne olduğunda yüklem tekil olur." },
      { id: "t5-zn-14", subject: "turkce", term: 2, prompt: "Aşağıdaki cümlelerin hangisinde 'ki'nin yazımı yanlıştır?", options: ["Seninki gelmiş.", "Evdeki hesap çarşıya uymaz.", "Öyle bir çocukki anlatamam.", "Bahçedeki çiçekler kurumuş."], correct: 2, explanation: "Çocuk ki olmalı." },
      { id: "t5-zn-16", subject: "turkce", term: 2, prompt: "'Kitapçı' kelimesinin kökü ve aldığı ek türü nedir?", options: ["Kitap-çı (Çekim eki)", "Kitap-çı (Yapım eki)", "Kita-pçı (Yapım eki)", "Kitapçı (Kök)"], correct: 1, explanation: "Kitap kök, -çı yapım eki." },
      { id: "t5-zn-18", subject: "turkce", term: 2, prompt: "Aşağıdaki kelimelerin hangisinde ünsüz benzeşmesi (sertleşme) vardır?", options: ["Dolapta", "Kitabı", "Sütçü", "Ağaca"], correct: 0, explanation: "Dolap-ta (d->t)." },
      { id: "t5-zn-20", subject: "turkce", term: 2, prompt: "Aşağıdaki deyimlerden hangisi 'çok sevinmek' anlamındadır?", options: ["Göz atmak", "Etekleri zil çalmak", "Kulak misafiri olmak", "Burnu havada olmak"], correct: 1, explanation: "Sevinci ifade eder." },
      { id: "t5-hard-nv-02", subject: "turkce", term: 2, prompt: "(1) Kitap okumak hayal dünyasını zenginleştirir. (2) Yeni yerler görmemizi sağlar. (3) Türkiye'de kağıt fiyatları her yıl artmaktadır. (4) Bu yüzden her gün okumalıyız. Akışı bozan cümle hangisidir?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Konu dışı bilgi." },
      { id: "t5-hard-nv-04", subject: "turkce", term: 2, prompt: "Aşağıdaki cümlelerin hangisinde neden-sonuç ilişkisi vardır?", options: ["Seni görmek için geldim.", "Yağmur yağdığı için maç iptal oldu.", "Düzenli çalışırsan kazanırsın.", "Okula gitmek üzere çıktı."], correct: 1, explanation: "Yağmur nedeniyle iptal." },
      { id: "t5-hard-nv-05", subject: "turkce", term: 2, prompt: "Hangi atasözü emek vermeden başarıya ulaşılamayacağını anlatır?", options: ["Damlaya damlaya göl olur.", "Sakla samanı gelir zamanı.", "Emek olmadan yemek olmaz.", "Ak akçe kara gün içindir."], correct: 2, explanation: "Emek vurgusu." },
      { id: "t5-adv-02", subject: "turkce", term: 2, prompt: "Aşağıdaki cümlelerin hangisinde 'karşılaştırma' yapılmıştır?", options: ["Bugün hava çok güzel.", "Onun kadar çalışkan birini görmedim.", "Ders çalışmak için odasına gitti.", "Kitap okumayı çok seviyor."], correct: 1, explanation: "Kadar edatıyla kıyas." },
      { id: "t5-adv-04", subject: "turkce", term: 2, prompt: "'Yazarın dili çok akıcı olduğu için kitap bir solukta bitti.' cümlesinden hangi yargı kesin olarak çıkarılır?", options: ["Kitap çok sürükleyicidir.", "Yazarın en iyi kitabıdır.", "Kitap çok kalındır.", "Yazar sadece macera yazar."], correct: 0, explanation: "Sürükleyicilik anlamı verir." }
    ],
    test2: []
  },
  { 
  id: "t5-1-20", 
  subject: "turkce", 
  term: 1, 
  prompt: "Aşağıdaki cümlelerin hangisinde 'kişileştirme' (insana ait özelliklerin başka varlıklara verilmesi) sanatı yapılmıştır?", 
  options: [
    "Güneş her sabah erkenden doğar.", 
    "Kuşlar ağaçlarda neşeyle ötüyor.", 
    "Rüzgar bugün çok sert esiyor.", 
    "Güneş, bulutların arkasına saklanmış bize küsmüştü."
  ], 
  correct: 3, 
  explanation: "Güneşin 'küsmesi' insana ait bir özelliktir. Bu özelliğin doğadaki bir varlığa (güneş) verilmesine kişileştirme denir." 
}
};
