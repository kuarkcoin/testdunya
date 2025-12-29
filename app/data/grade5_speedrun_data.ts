// app/data/grade5_speedrun_data.ts

export type SpeedQuestion = {
  id: string;
  category: 'Matematik' | 'Fen' | 'Türkçe' | 'İngilizce';
  question: string;
  options: string[];
  answer: string; // Doğru cevap
};

export const speedRunQuestions: SpeedQuestion[] = [
  // ==========================
  // 📐 MATEMATİK
  // ==========================
  {
    id: 'm1',
    category: 'Matematik',
    question: 'Bir kenarı 6 cm olan karenin alanı kaçtır?',
    options: ['36 cm²', '24 cm²', '12 cm²', '30 cm²'],
    answer: '36 cm²'
  },
  {
    id: 'm2',
    category: 'Matematik',
    question: '8 sayısının karesi (8²) kaçtır?',
    options: ['16', '64', '80', '18'],
    answer: '64'
  },
  {
    id: 'm3',
    category: 'Matematik',
    question: 'En küçük geniş açı kaç derecedir?',
    options: ['89', '90', '91', '100'],
    answer: '91'
  },
  {
    id: 'm4',
    category: 'Matematik',
    question: '3 saat 20 dakika toplam kaç dakikadır?',
    options: ['180', '200', '220', '320'],
    answer: '200'
  },
  {
    id: 'm5',
    category: 'Matematik',
    question: 'Payı 1 olan kesirlere ne denir?',
    options: ['Bileşik', 'Tam Sayılı', 'Birim Kesir', 'Ondalık'],
    answer: 'Birim Kesir'
  },
  {
    id: 'm6',
    category: 'Matematik',
    question: 'Hangi sayı 5 ile kalansız bölünemez?',
    options: ['105', '500', '235', '123'],
    answer: '123'
  },
  {
    id: 'm7',
    category: 'Matematik',
    question: 'Bir sayının 1/4\'ü "çeyrek" ise, 1/2\'si nedir?',
    options: ['Bütün', 'Yarım', 'Üç çeyrek', 'Hiçbiri'],
    answer: 'Yarım'
  },
  {
    id: 'm8',
    category: 'Matematik',
    question: '2500 ÷ 100 işleminin sonucu kaçtır?',
    options: ['25', '250', '2,5', '25000'],
    answer: '25'
  },
  {
    id: 'm9',
    category: 'Matematik',
    question: 'Aşağıdakilerden hangisi bir "Dar Açı"dır?',
    options: ['90°', '120°', '45°', '180°'],
    answer: '45°'
  },
  {
    id: 'm10',
    category: 'Matematik',
    question: 'Dikdörtgenin çevresini bulmak için ne yaparız?',
    options: ['Tüm kenarları toplarız', 'İki kenarı çarparız', 'Sadece uzunları toplarız', 'Böleriz'],
    answer: 'Tüm kenarları toplarız'
  },
  {
    id: 'm11',
    category: 'Matematik',
    question: '5² + 2³ işleminin sonucu kaçtır?',
    options: ['33', '29', '17', '31'],
    answer: '33'
  },
  {
    id: 'm12',
    category: 'Matematik',
    question: 'Hangisi 9 basamaklı en büyük sayıdır?',
    options: ['999.999.999', '100.000.000', '987.654.321', '900.000.000'],
    answer: '999.999.999'
  },

  // ==========================
  // 🔬 FEN BİLİMLERİ
  // ==========================
  {
    id: 'f1',
    category: 'Fen',
    question: 'Kuvveti ölçen alet hangisidir?',
    options: ['Termometre', 'Dinamometre', 'Barometre', 'Metre'],
    answer: 'Dinamometre'
  },
  {
    id: 'f2',
    category: 'Fen',
    question: 'Ay\'ın Dünya\'ya bakan yüzünün tamamen aydınlık olduğu evre hangisidir?',
    options: ['Yeni Ay', 'İlk Dördün', 'Dolunay', 'Son Dördün'],
    answer: 'Dolunay'
  },
  {
    id: 'f3',
    category: 'Fen',
    question: 'Isı alan tellerin uzamasına ne denir?',
    options: ['Büzülme', 'Genleşme', 'Erime', 'Buharlaşma'],
    answer: 'Genleşme'
  },
  {
    id: 'f4',
    category: 'Fen',
    question: 'Sürtünme kuvveti hareketi nasıl etkiler?',
    options: ['Hızlandırır', 'Zorlaştırır', 'Etkilemez', 'Başlatır'],
    answer: 'Zorlaştırır'
  },
  {
    id: 'f5',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi bir enerji türüdür?',
    options: ['Sıcaklık', 'Isı', 'Derece', 'Kütle'],
    answer: 'Isı'
  },
  {
    id: 'f6',
    category: 'Fen',
    question: 'Hangisi bir "Omurgalı Hayvan"dır?',
    options: ['Salyangoz', 'Kelebek', 'Balık', 'Solucan'],
    answer: 'Balık'
  },
  {
    id: 'f7',
    category: 'Fen',
    question: 'Işık nasıl yayılır?',
    options: ['Eğrisel', 'Doğrusal', 'Dairesel', 'Yayılmaz'],
    answer: 'Doğrusal'
  },
  {
    id: 'f8',
    category: 'Fen',
    question: 'Işığı geçirmeyen maddelere ne denir?',
    options: ['Saydam', 'Yarı Saydam', 'Opak', 'Parlak'],
    answer: 'Opak'
  },
  {
    id: 'f9',
    category: 'Fen',
    question: 'Katı bir maddenin ısı alarak sıvı hale geçmesine ne denir?',
    options: ['Donma', 'Erime', 'Buharlaşma', 'Süblimleşme'],
    answer: 'Erime'
  },
  {
    id: 'f10',
    category: 'Fen',
    question: 'Ay\'ın ana evreleri arasında kaçar gün vardır?',
    options: ['1 gün', '1 hafta', '2 hafta', '1 ay'],
    answer: '1 hafta'
  },
  {
    id: 'f11',
    category: 'Fen',
    question: 'Kuvvetin birimi nedir?',
    options: ['Kilogram', 'Metre', 'Newton', 'Litre'],
    answer: 'Newton'
  },
  {
    id: 'f12',
    category: 'Fen',
    question: 'Güneş, Dünya ve Ay\'dan hangisi en büyüktür?',
    options: ['Dünya', 'Ay', 'Güneş', 'Hepsi eşittir'],
    answer: 'Güneş'
  },

  // ==========================
  // 📚 TÜRKÇE
  // ==========================
  {
    id: 't1',
    category: 'Türkçe',
    question: '"Siyah" kelimesinin eş anlamlısı nedir?',
    options: ['Beyaz', 'Ak', 'Kara', 'Kırmızı'],
    answer: 'Kara'
  },
  {
    id: 't2',
    category: 'Türkçe',
    question: '"Cesur" kelimesinin zıt anlamlısı hangisidir?',
    options: ['Korkak', 'Yiğit', 'Güçlü', 'Atılgan'],
    answer: 'Korkak'
  },
  {
    id: 't3',
    category: 'Türkçe',
    question: 'Hangi kelime "sesteş" (eş sesli) değildir?',
    options: ['Yüz', 'Çay', 'Ben', 'Kitap'],
    answer: 'Kitap'
  },
  {
    id: 't4',
    category: 'Türkçe',
    question: '"Keskin bakışları vardı." cümlesinde "keskin" hangi anlamda kullanılmıştır?',
    options: ['Gerçek', 'Mecaz', 'Terim', 'Zıt'],
    answer: 'Mecaz'
  },
  {
    id: 't5',
    category: 'Türkçe',
    question: '"Mektep" kelimesinin eş anlamlısı nedir?',
    options: ['Hastane', 'Okul', 'Kütüphane', 'Bahçe'],
    answer: 'Okul'
  },
  {
    id: 't6',
    category: 'Türkçe',
    question: 'Aşağıdaki kelimelerin hangisinde yazım yanlışı vardır?',
    options: ['Herkez', 'Herkes', 'Yalnız', 'Yanlış'],
    answer: 'Herkez'
  },
  {
    id: 't7',
    category: 'Türkçe',
    question: '"Çok çalıştığı için sınavı kazandı." cümlesinde hangi ilişki vardır?',
    options: ['Amaç-Sonuç', 'Neden-Sonuç', 'Koşul-Sonuç', 'Benzetme'],
    answer: 'Neden-Sonuç'
  },
  {
    id: 't8',
    category: 'Türkçe',
    question: 'Özel isimlere gelen ekler ne ile ayrılır?',
    options: ['Nokta', 'Virgül', 'Kesme İşareti', 'Ünlem'],
    answer: 'Kesme İşareti'
  },
  {
    id: 't9',
    category: 'Türkçe',
    question: '"Güz" kelimesinin eş anlamlısı nedir?',
    options: ['İlkbahar', 'Kış', 'Yaz', 'Sonbahar'],
    answer: 'Sonbahar'
  },
  {
    id: 't10',
    category: 'Türkçe',
    question: 'Soru eki olan "mi" nasıl yazılır?',
    options: ['Bitişik', 'Ayrı', 'Kelimeden önce', 'Tire ile'],
    answer: 'Ayrı'
  },
  {
    id: 't11',
    category: 'Türkçe',
    question: '"Kedi gibi uysaldı." cümlesinde ne yapılmıştır?',
    options: ['Abartma', 'Kişileştirme', 'Benzetme', 'Eleştiri'],
    answer: 'Benzetme'
  },

  // ==========================
  // 🌍 İNGİLİZCE
  // ==========================
  {
    id: 'e1',
    category: 'İngilizce',
    question: '"Science" kelimesinin Türkçe karşılığı nedir?',
    options: ['Matematik', 'Fen Bilimleri', 'Resim', 'Müzik'],
    answer: 'Fen Bilimleri'
  },
  {
    id: 'e2',
    category: 'İngilizce',
    question: 'Hangi gün hafta sonudur (Weekend)?',
    options: ['Monday', 'Tuesday', 'Friday', 'Sunday'],
    answer: 'Sunday'
  },
  {
    id: 'e3',
    category: 'İngilizce',
    question: '"Library" kelimesi ne anlama gelir?',
    options: ['Eczane', 'Hastane', 'Kütüphane', 'Fırın'],
    answer: 'Kütüphane'
  },
  {
    id: 'e4',
    category: 'İngilizce',
    question: '"I ____ football." boşluğa hangisi gelmelidir?',
    options: ['play', 'go', 'do', 'read'],
    answer: 'play'
  },
  {
    id: 'e5',
    category: 'İngilizce',
    question: '"Twelve" hangi sayıdır?',
    options: ['11', '12', '20', '21'],
    answer: '12'
  },
  {
    id: 'e6',
    category: 'İngilizce',
    question: 'Hangi mevsim "Winter"dır?',
    options: ['Yaz', 'Sonbahar', 'Kış', 'İlkbahar'],
    answer: 'Kış'
  },
  {
    id: 'e7',
    category: 'İngilizce',
    question: '"Headache" ne demektir?',
    options: ['Karın ağrısı', 'Diş ağrısı', 'Baş ağrısı', 'Öksürük'],
    answer: 'Baş ağrısı'
  },
  {
    id: 'e8',
    category: 'İngilizce',
    question: 'Ankara is in the ____ of Turkey.',
    options: ['North', 'South', 'West', 'Center'],
    answer: 'Center'
  },
  {
    id: 'e9',
    category: 'İngilizce',
    question: '"Good Morning" ne zaman söylenir?',
    options: ['Akşam', 'Gece', 'Öğlen', 'Sabah'],
    answer: 'Sabah'
  },
  {
    id: 'e10',
    category: 'İngilizce',
    question: 'Hangisi bir "Okul Eşyası" (School Object) değildir?',
    options: ['Pencil', 'Eraser', 'Apple', 'Ruler'],
    answer: 'Apple'
  },
  {
    id: 'e11',
    category: 'İngilizce',
    question: '"Where are you from?" sorusunun cevabı hangisi olabilir?',
    options: ['I am 10 years old', 'I am from Turkey', 'My name is Ali', 'I like pizza'],
    answer: 'I am from Turkey'
  },
  {
    id: 'e12',
    category: 'İngilizce',
    question: '2. ay hangisidir? (2nd month)',
    options: ['January', 'March', 'April', 'February'],
    answer: 'February'
  }
];
