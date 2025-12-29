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
  },
  // ==========================
  // 📐 MATEMATİK (EK +15)
  // ==========================
  {
    id: 'm13',
    category: 'Matematik',
    question: '120 sayısının yarısı kaçtır?',
    options: ['50', '60', '120', '30'],
    answer: '60'
  },
  {
    id: 'm14',
    category: 'Matematik',
    question: 'Bir üçgenin iç açıları toplamı kaç derecedir?',
    options: ['90', '180', '270', '360'],
    answer: '180'
  },
  {
    id: 'm15',
    category: 'Matematik',
    question: '7 × 8 işleminin sonucu kaçtır?',
    options: ['54', '56', '64', '48'],
    answer: '56'
  },
  {
    id: 'm16',
    category: 'Matematik',
    question: '1 metre kaç santimetredir?',
    options: ['10', '100', '1000', '1'],
    answer: '100'
  },
  {
    id: 'm17',
    category: 'Matematik',
    question: 'Hangisi çift sayıdır?',
    options: ['13', '21', '34', '55'],
    answer: '34'
  },
  {
    id: 'm18',
    category: 'Matematik',
    question: '9 × 0 işleminin sonucu kaçtır?',
    options: ['0', '9', '1', 'Hata'],
    answer: '0'
  },
  {
    id: 'm19',
    category: 'Matematik',
    question: 'En küçük tek sayı hangisidir?',
    options: ['0', '1', '2', '3'],
    answer: '1'
  },
  {
    id: 'm20',
    category: 'Matematik',
    question: 'Saat 14:30, öğleden sonra saat kaçtır?',
    options: ['2:30', '12:30', '4:30', '1:30'],
    answer: '2:30'
  },
  {
    id: 'm21',
    category: 'Matematik',
    question: '5 onluk + 3 birlik kaçtır?',
    options: ['8', '53', '35', '503'],
    answer: '53'
  },
  {
    id: 'm22',
    category: 'Matematik',
    question: 'Bir dikdörtgenin karşılıklı kenarları nasıldır?',
    options: ['Eşit', 'Farklı', 'Yamuk', 'Üçgen'],
    answer: 'Eşit'
  },
  {
    id: 'm23',
    category: 'Matematik',
    question: 'Hangisi bir doğal sayı değildir?',
    options: ['5', '12', '-3', '0'],
    answer: '-3'
  },
  {
    id: 'm24',
    category: 'Matematik',
    question: '10’un çarpanlarından biri hangisidir?',
    options: ['3', '4', '5', '7'],
    answer: '5'
  },
  {
    id: 'm25',
    category: 'Matematik',
    question: '1 kilogram kaç gramdır?',
    options: ['10', '100', '1000', '500'],
    answer: '1000'
  },
  {
    id: 'm26',
    category: 'Matematik',
    question: 'Bir tam sayının 1/2’si ne demektir?',
    options: ['Yarım', 'Çeyrek', 'Tam', 'İki katı'],
    answer: 'Yarım'
  },
  {
    id: 'm27',
    category: 'Matematik',
    question: 'Hangisi bir ölçü birimi değildir?',
    options: ['Metre', 'Litre', 'Kilogram', 'Sayı'],
    answer: 'Sayı'
  },

  // ==========================
  // 🔬 FEN (EK +15)
  // ==========================
  {
    id: 'f13',
    category: 'Fen',
    question: 'Isı alan maddeler genellikle ne yapar?',
    options: ['Büzülür', 'Genleşir', 'Kırılır', 'Yok olur'],
    answer: 'Genleşir'
  },
  {
    id: 'f14',
    category: 'Fen',
    question: 'Hangisi bir duyu organımız değildir?',
    options: ['Göz', 'Kulak', 'Kalp', 'Burun'],
    answer: 'Kalp'
  },
  {
    id: 'f15',
    category: 'Fen',
    question: 'Güneş hangi tür gök cismidir?',
    options: ['Gezegen', 'Uydu', 'Yıldız', 'Meteor'],
    answer: 'Yıldız'
  },
  {
    id: 'f16',
    category: 'Fen',
    question: 'Hangisi ışık kaynağıdır?',
    options: ['Ayna', 'Ay', 'Güneş', 'Bulut'],
    answer: 'Güneş'
  },
  {
    id: 'f17',
    category: 'Fen',
    question: 'Ses hangi ortamda yayılmaz?',
    options: ['Hava', 'Su', 'Katı', 'Boşluk'],
    answer: 'Boşluk'
  },
  {
    id: 'f18',
    category: 'Fen',
    question: 'Hangisi bir mıknatıs özelliğidir?',
    options: ['Camı çeker', 'Plastiği iter', 'Demiri çeker', 'Tahtayı çeker'],
    answer: 'Demiri çeker'
  },
  {
    id: 'f19',
    category: 'Fen',
    question: 'Bitkiler besinlerini nasıl üretir?',
    options: ['Fotosentez', 'Solunum', 'Sindirim', 'Boşaltım'],
    answer: 'Fotosentez'
  },
  {
    id: 'f20',
    category: 'Fen',
    question: 'Hangisi yenilenebilir enerji kaynağıdır?',
    options: ['Kömür', 'Petrol', 'Güneş', 'Doğalgaz'],
    answer: 'Güneş'
  },
  {
    id: 'f21',
    category: 'Fen',
    question: 'Canlıların büyüyüp gelişmesini sağlayan şey nedir?',
    options: ['Besin', 'Işık', 'Ses', 'Rüzgar'],
    answer: 'Besin'
  },
  {
    id: 'f22',
    category: 'Fen',
    question: 'Hangisi katı bir maddedir?',
    options: ['Su', 'Hava', 'Taş', 'Buhar'],
    answer: 'Taş'
  },
  {
    id: 'f23',
    category: 'Fen',
    question: 'Dünya kendi etrafında ne yapar?',
    options: ['Dolanır', 'Dönmez', 'Döner', 'Durur'],
    answer: 'Döner'
  },
  {
    id: 'f24',
    category: 'Fen',
    question: 'Hangisi çevre kirliliğine neden olur?',
    options: ['Ağaç dikmek', 'Geri dönüşüm', 'Çöp atmak', 'Tasarruf'],
    answer: 'Çöp atmak'
  },
  {
    id: 'f25',
    category: 'Fen',
    question: 'İnsan kaç duyu organına sahiptir?',
    options: ['3', '4', '5', '6'],
    answer: '5'
  },
  {
    id: 'f26',
    category: 'Fen',
    question: 'Hangisi bir gazdır?',
    options: ['Taş', 'Su', 'Hava', 'Buz'],
    answer: 'Hava'
  },
  {
    id: 'f27',
    category: 'Fen',
    question: 'Ay ışığını nereden alır?',
    options: ['Kendinden', 'Dünya’dan', 'Güneş’ten', 'Yıldızlardan'],
    answer: 'Güneş’ten'
  },

  // ==========================
  // 📚 TÜRKÇE (EK +15)
  // ==========================
  {
    id: 't12',
    category: 'Türkçe',
    question: '"Mutlu" kelimesinin zıt anlamlısı nedir?',
    options: ['Sevinçli', 'Neşeli', 'Üzgün', 'Keyifli'],
    answer: 'Üzgün'
  },
  {
    id: 't13',
    category: 'Türkçe',
    question: 'Hangisi bir noktalama işaretidir?',
    options: ['Ve', 'Ama', '!', 'İle'],
    answer: '!'
  },
  {
    id: 't14',
    category: 'Türkçe',
    question: '"Hızlı" kelimesinin eş anlamlısı nedir?',
    options: ['Yavaş', 'Çabuk', 'Ağır', 'Geç'],
    answer: 'Çabuk'
  },
  {
    id: 't15',
    category: 'Türkçe',
    question: 'Hangisi bir özel isimdir?',
    options: ['şehir', 'Ali', 'okul', 'öğrenci'],
    answer: 'Ali'
  },
  {
    id: 't16',
    category: 'Türkçe',
    question: 'Cümlelerin sonuna genellikle ne konur?',
    options: ['Virgül', 'Nokta', 'Tire', 'Parantez'],
    answer: 'Nokta'
  },
  {
    id: 't17',
    category: 'Türkçe',
    question: '"Kitaplarım masada." cümlesinde yüklem hangisidir?',
    options: ['Kitaplarım', 'Masada', 'Masada kitaplarım', 'Yok'],
    answer: 'Masada'
  },
  {
    id: 't18',
    category: 'Türkçe',
    question: 'Hangisi bir fiildir?',
    options: ['Koşmak', 'Koşu', 'Koşucu', 'Koşak'],
    answer: 'Koşmak'
  },
  {
    id: 't19',
    category: 'Türkçe',
    question: 'Hangisi mecaz anlamlıdır?',
    options: ['Tatlı elma', 'Sert taş', 'Tatlı çocuk', 'Uzun yol'],
    answer: 'Tatlı çocuk'
  },
  {
    id: 't20',
    category: 'Türkçe',
    question: 'Hangisi bir deyimdir?',
    options: ['Kitap okumak', 'Göz atmak', 'Okula gitmek', 'Kalem almak'],
    answer: 'Göz atmak'
  },
  {
    id: 't21',
    category: 'Türkçe',
    question: '"Eyvah!" kelimesi hangi tür sözcüktür?',
    options: ['İsim', 'Fiil', 'Ünlem', 'Zamir'],
    answer: 'Ünlem'
  },
  {
    id: 't22',
    category: 'Türkçe',
    question: 'Hangisi soru cümlesidir?',
    options: ['Bugün hava güzel.', 'Okula gittim.', 'Saat kaç?', 'Kitap aldım.'],
    answer: 'Saat kaç?'
  },
  {
    id: 't23',
    category: 'Türkçe',
    question: 'Hangisi zarf değildir?',
    options: ['Çok', 'Hemen', 'Ev', 'Yavaşça'],
    answer: 'Ev'
  },
  {
    id: 't24',
    category: 'Türkçe',
    question: '"Kırmızı elbise" söz grubunda kırmızı neyi niteler?',
    options: ['Fiil', 'Zamir', 'İsim', 'Sıfat'],
    answer: 'Sıfat'
  },
  {
    id: 't25',
    category: 'Türkçe',
    question: 'Hangisi hece sayısı bakımından doğrudur?',
    options: ['Kalem (1)', 'Defter (1)', 'Okul (2)', 'Çanta (3)'],
    answer: 'Okul (2)'
  },
  {
    id: 't26',
    category: 'Türkçe',
    question: 'Hangisi büyük harfle başlar?',
    options: ['pazartesi', 'ankara', 'Ali', 'okul'],
    answer: 'Ali'
  },

  // ==========================
  // 🌍 İNGİLİZCE (EK +15)
  // ==========================
  {
    id: 'e13',
    category: 'İngilizce',
    question: '"Teacher" ne demektir?',
    options: ['Öğrenci', 'Öğretmen', 'Doktor', 'Müdür'],
    answer: 'Öğretmen'
  },
  {
    id: 'e14',
    category: 'İngilizce',
    question: '"Blue" hangi renktir?',
    options: ['Kırmızı', 'Mavi', 'Yeşil', 'Sarı'],
    answer: 'Mavi'
  },
  {
    id: 'e15',
    category: 'İngilizce',
    question: 'Hangisi bir fiildir?',
    options: ['Run', 'Table', 'Book', 'Apple'],
    answer: 'Run'
  },
  {
    id: 'e16',
    category: 'İngilizce',
    question: '"I am ___ student." boşluğa ne gelir?',
    options: ['a', 'an', 'the', 'is'],
    answer: 'a'
  },
  {
    id: 'e17',
    category: 'İngilizce',
    question: '"Dog" kelimesinin çoğulu nedir?',
    options: ['Doges', 'Dogs', 'Dogies', 'Dog'],
    answer: 'Dogs'
  },
  {
    id: 'e18',
    category: 'İngilizce',
    question: 'Hangisi bir meyvedir?',
    options: ['Car', 'Apple', 'Chair', 'Book'],
    answer: 'Apple'
  },
  {
    id: 'e19',
    category: 'İngilizce',
    question: '"Good night" ne zaman söylenir?',
    options: ['Sabah', 'Öğlen', 'Akşam', 'Uyurken'],
    answer: 'Uyurken'
  },
  {
    id: 'e20',
    category: 'İngilizce',
    question: 'Hangisi sayı değildir?',
    options: ['One', 'Two', 'Ten', 'Tree'],
    answer: 'Tree'
  },
  {
    id: 'e21',
    category: 'İngilizce',
    question: '"My name is Ayşe." cümlesi ne anlatır?',
    options: ['Yaş', 'İsim', 'Ülke', 'Hobi'],
    answer: 'İsim'
  },
  {
    id: 'e22',
    category: 'İngilizce',
    question: 'Hangisi bir gün değildir?',
    options: ['Monday', 'Sunday', 'April', 'Friday'],
    answer: 'April'
  },
  {
    id: 'e23',
    category: 'İngilizce',
    question: '"How old are you?" sorusu ne sorar?',
    options: ['İsim', 'Yaş', 'Ülke', 'Meslek'],
    answer: 'Yaş'
  },
  {
    id: 'e24',
    category: 'İngilizce',
    question: '"Cat" ne demektir?',
    options: ['Köpek', 'Kedi', 'Kuş', 'Balık'],
    answer: 'Kedi'
  },
  {
    id: 'e25',
    category: 'İngilizce',
    question: 'Hangisi bir sınıf eşyasıdır?',
    options: ['Bed', 'Pencil', 'Shoe', 'Door'],
    answer: 'Pencil'
  },
  {
    id: 'e26',
    category: 'İngilizce',
    question: '"See you!" ne anlama gelir?',
    options: ['Merhaba', 'Görüşürüz', 'Hoş geldin', 'Teşekkürler'],
    answer: 'Görüşürüz'
  },
  {
    id: 'e27',
    category: 'İngilizce',
    question: 'Hangisi bir renk değildir?',
    options: ['Red', 'Blue', 'Green', 'Milk'],
    answer: 'Milk'
  }
];
