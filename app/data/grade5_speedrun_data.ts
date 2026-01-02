// app/data/grade5_speedrun_data.ts

export type SpeedQuestion = {
  id: string;
  category: 'Matematik' | 'Fen' | 'Türkçe' | 'İngilizce';
  question: string;
  options: string[];
  answer: string;
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
  // 🔬 FEN
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
  // EK SORULAR (+60)
  // ==========================
  // 📐 MATEMATİK (+15)
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

  // 🔬 FEN (+15)
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

  // 📚 TÜRKÇE (+15)
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

  // 🌍 İNGİLİZCE (+15)
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
  },
    // ==========================
  // ➕ EK SORULAR (YENİ)
  // ==========================
  
  // 📐 MATEMATİK (Devam)
  {
    id: 'm28',
    category: 'Matematik',
    question: 'Aşağıdaki kesirlerden hangisi yarımdan büyüktür?',
    options: ['1/3', '2/5', '3/4', '4/9'],
    answer: '3/4'
  },
  {
    id: 'm29',
    category: 'Matematik',
    question: 'Okunuşu "üç tam onda beş" olan sayı hangisidir?',
    options: ['3,05', '3,5', '3,005', '3,50'],
    answer: '3,5'
  },
  {
    id: 'm30',
    category: 'Matematik',
    question: '%25 sembolü ile gösterilen ifade aşağıdakilerden hangisine eşittir?',
    options: ['Yarım', 'Bütün', 'Çeyrek', 'Hiçbiri'],
    answer: 'Çeyrek'
  },
  {
    id: 'm31',
    category: 'Matematik',
    question: 'Bir üçgenin en fazla kaç tane geniş açısı olabilir?',
    options: ['1', '2', '3', '0'],
    answer: '1'
  },
  {
    id: 'm32',
    category: 'Matematik',
    question: 'Hangisi bir "doğru parçası" modelidir?',
    options: ['İki ucu açık yol', 'Bir ucu açık ışın', 'İki ucu kapalı cetvel', 'Güneş ışığı'],
    answer: 'İki ucu kapalı cetvel'
  },
  {
    id: 'm33',
    category: 'Matematik',
    question: '4500 saniye kaç dakika eder?',
    options: ['45', '60', '75', '90'],
    answer: '75'
  },

  // 🔬 FEN BİLİMLERİ (Devam)
  {
    id: 'f28',
    category: 'Fen',
    question: 'Basit bir elektrik devresinde enerji kaynağı hangisidir?',
    options: ['Pil', 'Ampul', 'Anahtar', 'Kablo'],
    answer: 'Pil'
  },
  {
    id: 'f29',
    category: 'Fen',
    question: 'Maddenin ayırt edici özelliklerinden biri hangisidir?',
    options: ['Kütle', 'Hacim', 'Erime Noktası', 'Renk'],
    answer: 'Erime Noktası'
  },
  {
    id: 'f30',
    category: 'Fen',
    question: 'Aşağıdaki yüzeylerin hangisinde sürtünme kuvveti daha azdır?',
    options: ['Çakıllı yol', 'Buz pisti', 'Halı', 'Toprak yol'],
    answer: 'Buz pisti'
  },
  {
    id: 'f31',
    category: 'Fen',
    question: 'Isı akışı hangi yöne doğru olur?',
    options: ['Soğuktan sıcağa', 'Sıcaktan soğuğa', 'Eşit sıcaklıkta', 'Aşağıdan yukarıya'],
    answer: 'Sıcaktan soğuğa'
  },
  {
    id: 'f32',
    category: 'Fen',
    question: 'Hangisi çiçeksiz bir bitkidir?',
    options: ['Gül', 'Papatya', 'Eğrelti Otu', 'Lale'],
    answer: 'Eğrelti Otu'
  },
  {
    id: 'f33',
    category: 'Fen',
    question: 'Biyoçeşitliliği tehdit eden en büyük faktör nedir?',
    options: ['Doğal afetler', 'İnsan faaliyetleri', 'Mevsimler', 'Yağmur'],
    answer: 'İnsan faaliyetleri'
  },

  // 📚 TÜRKÇE (Devam)
  {
    id: 't27',
    category: 'Türkçe',
    question: '"Kır" kelimesi aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?',
    options: ['Bardak yere düşüp kırıldı.', 'Odunları baltayla kırdı.', 'Bu sözlerinle beni çok kırdın.', 'Cevizleri taşla kırdık.'],
    answer: 'Bu sözlerinle beni çok kırdın.'
  },
  {
    id: 't28',
    category: 'Türkçe',
    question: 'Aşağıdaki kelimelerden hangisi türemiş kelimedir?',
    options: ['Kitap', 'Gözlük', 'Masa', 'Yol'],
    answer: 'Gözlük'
  },
  {
    id: 't29',
    category: 'Türkçe',
    question: '"Akıl akıldan üstündür." sözü ne tür bir sözdür?',
    options: ['Deyim', 'Atasözü', 'Özdeyiş', 'Tekerleme'],
    answer: 'Atasözü'
  },
  {
    id: 't30',
    category: 'Türkçe',
    question: '"O, sınıfın en çalışkan öğrencisidir." cümlesinde hangi sözcük "karşılaştırma" bildirir?',
    options: ['O', 'Sınıfın', 'En', 'Öğrencisidir'],
    answer: 'En'
  },
  {
    id: 't31',
    category: 'Türkçe',
    question: 'Aşağıdaki cümlelerin hangisinde "de / da" bağlacının yazımı yanlıştır?',
    options: ['Sen de gel.', 'Ev de oturduk.', 'Kalemim Ahmet\'te kalmış.', 'Bunu ben de biliyorum.'],
    answer: 'Ev de oturduk.'
  },
  {
    id: 't32',
    category: 'Türkçe',
    question: '"Doktor" kelimesinin eş anlamlısı nedir?',
    options: ['Hekim', 'Hemşire', 'Öğretmen', 'Mühendis'],
    answer: 'Hekim'
  },

  // 🌍 İNGİLİZCE (Devam)
  {
    id: 'e28',
    category: 'İngilizce',
    question: '"My father\'s mother" is my...?',
    options: ['Sister', 'Aunt', 'Grandmother', 'Cousin'],
    answer: 'Grandmother'
  },
  {
    id: 'e29',
    category: 'İngilizce',
    question: '"I ____ brush my teeth every morning." boşluğa ne gelir?',
    options: ['always', 'never', 'am', 'is'],
    answer: 'always'
  },
  {
    id: 'e30',
    category: 'İngilizce',
    question: '"What time is it?" sorusuna hangisi cevap olabilir?',
    options: ['It is a cat', 'It is 5 o\'clock', 'I am fine', 'Yes, I do'],
    answer: 'It is 5 o\'clock'
  },
  {
    id: 'e31',
    category: 'İngilizce',
    question: '"Cheese, Olive, Egg" hangi öğünle ilgilidir?',
    options: ['Dinner', 'Lunch', 'Breakfast', 'School'],
    answer: 'Breakfast'
  },
  {
    id: 'e32',
    category: 'İngilizce',
    question: 'Hangi ülke "Japan" dır?',
    options: ['Çin', 'Japonya', 'Almanya', 'İtalya'],
    answer: 'Japonya'
  },
  {
    id: 'e33',
    category: 'İngilizce',
    question: '"Don\'t run!" ne demektir?',
    options: ['Koş!', 'Koşma!', 'Yürüme!', 'Otur!'],
    answer: 'Koşma!'
  },
    // ==========================
  // 🚀 EKSTRA 50 SORU (YENİ PAKET)
  // ==========================

  // 📐 MATEMATİK (+13 Soru)
  {
    id: 'm34',
    category: 'Matematik',
    question: '0,5 + 0,2 işleminin sonucu kaçtır?',
    options: ['0,7', '0,3', '0,07', '7,0'],
    answer: '0,7'
  },
  {
    id: 'm35',
    category: 'Matematik',
    question: 'Tüm kenar uzunlukları eşit olan üçgene ne denir?',
    options: ['İkizkenar', 'Çeşitkenar', 'Eşkenar', 'Dik üçgen'],
    answer: 'Eşkenar'
  },
  {
    id: 'm36',
    category: 'Matematik',
    question: '200 sayısının %50\'si kaçtır?',
    options: ['50', '100', '20', '150'],
    answer: '100'
  },
  {
    id: 'm37',
    category: 'Matematik',
    question: 'Bir yılda kaç hafta vardır?',
    options: ['12', '30', '52', '365'],
    answer: '52'
  },
  {
    id: 'm38',
    category: 'Matematik',
    question: 'Bir küpün kaç ayrıtı (kenarı) vardır?',
    options: ['6', '8', '12', '4'],
    answer: '12'
  },
  {
    id: 'm39',
    category: 'Matematik',
    question: '(10 + 5) × 2 işleminin sonucu kaçtır?',
    options: ['20', '25', '30', '150'],
    answer: '30'
  },
  {
    id: 'm40',
    category: 'Matematik',
    question: '3 kilometre kaç metredir?',
    options: ['30', '300', '3000', '30000'],
    answer: '3000'
  },
  {
    id: 'm41',
    category: 'Matematik',
    question: 'Paydaları eşit kesirlerde toplama yaparken ne toplanır?',
    options: ['Paydalar', 'Paylar', 'Hepsi', 'Hiçbiri'],
    answer: 'Paylar'
  },
  {
    id: 'm42',
    category: 'Matematik',
    question: 'Ölçüsü 90 derece olan açıya ne denir?',
    options: ['Dar Açı', 'Geniş Açı', 'Dik Açı', 'Doğru Açı'],
    answer: 'Dik Açı'
  },
  {
    id: 'm43',
    category: 'Matematik',
    question: 'Bir bölme işleminde kalan, bölen sayıdan...?',
    options: ['Büyük olmalıdır', 'Küçük olmalıdır', 'Eşit olmalıdır', 'Fark etmez'],
    answer: 'Küçük olmalıdır'
  },
  {
    id: 'm44',
    category: 'Matematik',
    question: '17 sayısını en yakın onluğa yuvarlarsak kaç olur?',
    options: ['10', '15', '20', '170'],
    answer: '20'
  },
  {
    id: 'm45',
    category: 'Matematik',
    question: 'Çeyrek saat kaç dakikadır?',
    options: ['15', '30', '45', '20'],
    answer: '15'
  },
  {
    id: 'm46',
    category: 'Matematik',
    question: 'Hangisi birim kesirdir?',
    options: ['3/5', '1/9', '7/2', '5/5'],
    answer: '1/9'
  },

  // 🔬 FEN BİLİMLERİ (+13 Soru)
  {
    id: 'f34',
    category: 'Fen',
    question: 'Dünya\'nın kendi etrafında bir tam dönüşü ne kadar sürer?',
    options: ['1 yıl', '1 ay', '24 saat', '1 hafta'],
    answer: '24 saat'
  },
  {
    id: 'f35',
    category: 'Fen',
    question: 'Uçabilen memeli hayvan hangisidir?',
    options: ['Kartal', 'Yarasa', 'Sine', 'Penguen'],
    answer: 'Yarasa'
  },
  {
    id: 'f36',
    category: 'Fen',
    question: 'Saf suyun kaynama noktası kaç derecedir?',
    options: ['0°C', '50°C', '100°C', '150°C'],
    answer: '100°C'
  },
  {
    id: 'f37',
    category: 'Fen',
    question: 'Toprağın su veya rüzgarla taşınmasına ne denir?',
    options: ['Heyelan', 'Erozyon', 'Deprem', 'Çığ'],
    answer: 'Erozyon'
  },
  {
    id: 'f38',
    category: 'Fen',
    question: 'Gölge boyu ne zaman en kısa olur?',
    options: ['Sabah', 'Öğle', 'İkindi', 'Akşam'],
    answer: 'Öğle'
  },
  {
    id: 'f39',
    category: 'Fen',
    question: 'Elektrik devresini açıp kapamaya yarayan eleman hangisidir?',
    options: ['Duy', 'Kablo', 'Anahtar', 'Pil Yatağı'],
    answer: 'Anahtar'
  },
  {
    id: 'f40',
    category: 'Fen',
    question: 'Gaz halindeki maddenin ısı vererek sıvı hale geçmesine ne denir?',
    options: ['Yoğuşma', 'Buharlaşma', 'Erime', 'Donma'],
    answer: 'Yoğuşma'
  },
  {
    id: 'f41',
    category: 'Fen',
    question: 'Hangisi ısı yalıtımı malzemesidir?',
    options: ['Demir', 'Bakır', 'Köpük (Strafor)', 'Altın'],
    answer: 'Köpük (Strafor)'
  },
  {
    id: 'f42',
    category: 'Fen',
    question: 'Bir canlının yaşamını sürdürdüğü doğal alana ne denir?',
    options: ['Kafes', 'Habitat', 'Akvaryum', 'Laboratuvar'],
    answer: 'Habitat'
  },
  {
    id: 'f43',
    category: 'Fen',
    question: 'Dünya\'yı saran gaz tabakasına ne ad verilir?',
    options: ['Atmosfer', 'Taş Küre', 'Su Küre', 'Çekirdek'],
    answer: 'Atmosfer'
  },
  {
    id: 'f44',
    category: 'Fen',
    question: 'Yer çekimi kuvvetinin yönü nereye doğrudur?',
    options: ['Gökyüzüne', 'Sağa', 'Sola', 'Yerin merkezine'],
    answer: 'Yerin merkezine'
  },
  {
    id: 'f45',
    category: 'Fen',
    question: 'Mantar bir bitki midir?',
    options: ['Evet', 'Hayır', 'Bazen', 'Bilmiyorum'],
    answer: 'Hayır'
  },
  {
    id: 'f46',
    category: 'Fen',
    question: 'Genleşme en çok hangi maddelerde görülür?',
    options: ['Katı', 'Sıvı', 'Gaz', 'Hepsi eşit'],
    answer: 'Gaz'
  },

  // 📚 TÜRKÇE (+12 Soru)
  {
    id: 't33',
    category: 'Türkçe',
    question: 'Eş görevli sözcükleri ayırmak için ne kullanılır?',
    options: ['Nokta', 'Virgül', 'Soru İşareti', 'Ünlem'],
    answer: 'Virgül'
  },
  {
    id: 't34',
    category: 'Türkçe',
    question: '"Zengin" kelimesinin zıt anlamlısı nedir?',
    options: ['Varlıklı', 'Fakir', 'Güçlü', 'Cömert'],
    answer: 'Fakir'
  },
  {
    id: 't35',
    category: 'Türkçe',
    question: 'Satır sonuna sığmayan kelimeler ne ile ayrılır?',
    options: ['Kısa çizgi', 'Uzun çizgi', 'Eğik çizgi', 'Nokta'],
    answer: 'Kısa çizgi'
  },
  {
    id: 't36',
    category: 'Türkçe',
    question: 'İsmi niteleyen sözcüklere ne denir?',
    options: ['Zamir', 'Sıfat', 'Fiil', 'Zarf'],
    answer: 'Sıfat'
  },
  {
    id: 't37',
    category: 'Türkçe',
    question: '"Etekleri zil çalmak" deyimi ne anlama gelir?',
    options: ['Çok üzülmek', 'Çok sevinmek', 'Çok korkmak', 'Çok yorulmak'],
    answer: 'Çok sevinmek'
  },
  {
    id: 't38',
    category: 'Türkçe',
    question: '"Kitaplık" kelimesindeki "-lık" eki ne ekidir?',
    options: ['Çekim eki', 'Yapım eki', 'Çoğul eki', 'İyelik eki'],
    answer: 'Yapım eki'
  },
  {
    id: 't39',
    category: 'Türkçe',
    question: 'Olayın geçtiği zamana ne denir?',
    options: ['Mekan', 'Şahıs', 'Zaman', 'Olay'],
    answer: 'Zaman'
  },
  {
    id: 't40',
    category: 'Türkçe',
    question: 'Hangisi hayal ürünü bir ifadedir?',
    options: ['Çiçekler sulandı', 'Güneş bize gülümsedi', 'Kedi süt içti', 'Araba bozuldu'],
    answer: 'Güneş bize gülümsedi'
  },
  {
    id: 't41',
    category: 'Türkçe',
    question: '"Birkaç" kelimesi nasıl yazılır?',
    options: ['Bir kaç', 'Birkaç', 'Bi kaç', 'Bir-kaç'],
    answer: 'Birkaç'
  },
  {
    id: 't42',
    category: 'Türkçe',
    question: '"Keşke o gün oraya gitmeseydim." cümlesinde hangi duygu vardır?',
    options: ['Sevinç', 'Pişmanlık', 'Özlem', 'Şaşkınlık'],
    answer: 'Pişmanlık'
  },
  {
    id: 't43',
    category: 'Türkçe',
    question: '"Gül" kelimesi eş sesli midir?',
    options: ['Evet', 'Hayır', 'Bazen', 'Belirsiz'],
    answer: 'Evet'
  },
  {
    id: 't44',
    category: 'Türkçe',
    question: 'Masallarda genellikle nasıl bir son vardır?',
    options: ['Mutsuz son', 'Belirsiz son', 'Mutlu son', 'Yarım kalan son'],
    answer: 'Mutlu son'
  },

  // 🌍 İNGİLİZCE (+12 Soru)
  {
    id: 'e34',
    category: 'İngilizce',
    question: '"Twenty" hangi sayıdır?',
    options: ['12', '20', '30', '2'],
    answer: '20'
  },
  {
    id: 'e35',
    category: 'İngilizce',
    question: '"Swim" fiilinin anlamı nedir?',
    options: ['Koşmak', 'Yüzmek', 'Uçmak', 'Yürümek'],
    answer: 'Yüzmek'
  },
  {
    id: 'e36',
    category: 'İngilizce',
    question: 'The book is ____ the table. (Üstünde)',
    options: ['in', 'under', 'on', 'at'],
    answer: 'on'
  },
  {
    id: 'e37',
    category: 'İngilizce',
    question: '"Lion" hangi hayvandır?',
    options: ['Kaplan', 'Aslan', 'Ayı', 'Kurt'],
    answer: 'Aslan'
  },
  {
    id: 'e38',
    category: 'İngilizce',
    question: 'Film izlemek için nereye gideriz?',
    options: ['Hospital', 'Cinema', 'Bakery', 'Pharmacy'],
    answer: 'Cinema'
  },
  {
    id: 'e39',
    category: 'İngilizce',
    question: '"Uncle" kimdir?',
    options: ['Teyze', 'Amca/Dayı', 'Kardeş', 'Dede'],
    answer: 'Amca/Dayı'
  },
  {
    id: 'e40',
    category: 'İngilizce',
    question: '"Hot" kelimesinin zıttı nedir?',
    options: ['Cold', 'Warm', 'Big', 'Small'],
    answer: 'Cold'
  },
  {
    id: 'e41',
    category: 'İngilizce',
    question: 'Görmemizi sağlayan organ hangisidir?',
    options: ['Ear', 'Nose', 'Eye', 'Hand'],
    answer: 'Eye'
  },
  {
    id: 'e42',
    category: 'İngilizce',
    question: 'Öğleden sonra ne denir?',
    options: ['Good morning', 'Good afternoon', 'Good night', 'Hello'],
    answer: 'Good afternoon'
  },
  {
    id: 'e43',
    category: 'İngilizce',
    question: '"Sit down" ne demektir?',
    options: ['Ayağa kalk', 'Otur', 'Gel', 'Git'],
    answer: 'Otur'
  },
  {
    id: 'e44',
    category: 'İngilizce',
    question: '"Who" sorusu neyi sorar?',
    options: ['Nerede', 'Ne zaman', 'Kim', 'Nasıl'],
    answer: 'Kim'
  },
  {
    id: 'e45',
    category: 'İngilizce',
    question: 'Hangi gün Çarşamba\'dır?',
    options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    answer: 'Wednesday'
  },
  // ==========================
  // 🧩 EKSTRA +50 SORU (PAKET 2)
  // ==========================

  // ==========================
  // 📐 MATEMATİK (+13)  m47 - m59
  // ==========================
  {
    id: 'm47',
    category: 'Matematik',
    question: '6 × 7 işleminin sonucu kaçtır?',
    options: ['36', '42', '48', '56'],
    answer: '42'
  },
  {
    id: 'm48',
    category: 'Matematik',
    question: 'Bir dikdörtgenin alanı nasıl bulunur?',
    options: ['Kenarları toplarız', 'Uzun kenar × kısa kenar', 'Kenarları böleriz', 'Çevreyi 2’ye böleriz'],
    answer: 'Uzun kenar × kısa kenar'
  },
  {
    id: 'm49',
    category: 'Matematik',
    question: '2/8 kesri sadeleştirilirse hangisi olur?',
    options: ['1/2', '1/4', '2/4', '4/8'],
    answer: '1/4'
  },
  {
    id: 'm50',
    category: 'Matematik',
    question: '0,25 sayısı hangi kesre eşittir?',
    options: ['1/2', '1/4', '3/4', '1/5'],
    answer: '1/4'
  },
  {
    id: 'm51',
    category: 'Matematik',
    question: 'Bir üçgende iki kenar 5 cm ve 7 cm ise üçüncü kenar en fazla kaç cm olabilir?',
    options: ['12', '13', '11', '10'],
    answer: '11'
  },
  {
    id: 'm52',
    category: 'Matematik',
    question: 'Hangisi asal sayıdır?',
    options: ['9', '15', '17', '21'],
    answer: '17'
  },
  {
    id: 'm53',
    category: 'Matematik',
    question: '3/5 + 1/5 işleminin sonucu kaçtır?',
    options: ['4/10', '4/5', '3/10', '2/5'],
    answer: '4/5'
  },
  {
    id: 'm54',
    category: 'Matematik',
    question: 'Bir sayının 3 katı 27 ise sayı kaçtır?',
    options: ['7', '8', '9', '10'],
    answer: '9'
  },
  {
    id: 'm55',
    category: 'Matematik',
    question: '1,2 + 0,8 işleminin sonucu kaçtır?',
    options: ['1,10', '2,0', '2,8', '0,4'],
    answer: '2,0'
  },
  {
    id: 'm56',
    category: 'Matematik',
    question: 'Bir tam sayının %10’u ne demektir?',
    options: ['10’da 1’i', '2’de 1’i', '4’te 1’i', '5’te 1’i'],
    answer: '10’da 1’i'
  },
  {
    id: 'm57',
    category: 'Matematik',
    question: 'Bir doğru üzerinde iki nokta seçilirse kaç doğru parçası oluşur?',
    options: ['0', '1', '2', '3'],
    answer: '1'
  },
  {
    id: 'm58',
    category: 'Matematik',
    question: '2 saat 45 dakika toplam kaç dakikadır?',
    options: ['145', '155', '165', '175'],
    answer: '165'
  },
  {
    id: 'm59',
    category: 'Matematik',
    question: 'Bir sayının 1/5’i 8 ise sayının tamamı kaçtır?',
    options: ['35', '40', '45', '50'],
    answer: '40'
  },

  // ==========================
  // 🔬 FEN (+12)  f47 - f58
  // ==========================
  {
    id: 'f47',
    category: 'Fen',
    question: 'Bitkiler kökleriyle en çok neyi alır?',
    options: ['Işık', 'Su ve mineraller', 'Karbondioksit', 'Oksijen'],
    answer: 'Su ve mineraller'
  },
  {
    id: 'f48',
    category: 'Fen',
    question: 'Hangisi bir gezegendir?',
    options: ['Güneş', 'Ay', 'Mars', 'Kutup Yıldızı'],
    answer: 'Mars'
  },
  {
    id: 'f49',
    category: 'Fen',
    question: 'Mıknatısın N ve S uçları birbirini nasıl etkiler?',
    options: ['Aynı uçlar çeker', 'Aynı uçlar iter', 'Hepsi çeker', 'Hepsi iter'],
    answer: 'Aynı uçlar iter'
  },
  {
    id: 'f50',
    category: 'Fen',
    question: 'Hangi madde saydamdır?',
    options: ['Tahta', 'Cam', 'Metal', 'Taş'],
    answer: 'Cam'
  },
  {
    id: 'f51',
    category: 'Fen',
    question: 'Bir devrede ampul yanmıyorsa ilk kontrol edilmesi gereken nedir?',
    options: ['Kablonun rengi', 'Pil ve bağlantılar', 'Ampulün şekli', 'Anahtarın adı'],
    answer: 'Pil ve bağlantılar'
  },
  {
    id: 'f52',
    category: 'Fen',
    question: 'Su döngüsünde suyun buharlaşıp gökyüzüne çıkmasına ne denir?',
    options: ['Yoğuşma', 'Buharlaşma', 'Donma', 'Erime'],
    answer: 'Buharlaşma'
  },
  {
    id: 'f53',
    category: 'Fen',
    question: 'Hangisi canlıların ortak özelliği değildir?',
    options: ['Büyüme', 'Üreme', 'Hareket etme', 'Paslanma'],
    answer: 'Paslanma'
  },
  {
    id: 'f54',
    category: 'Fen',
    question: 'İnsanlarda kanı vücuda pompalayan organ hangisidir?',
    options: ['Akciğer', 'Mide', 'Kalp', 'Böbrek'],
    answer: 'Kalp'
  },
  {
    id: 'f55',
    category: 'Fen',
    question: 'Aşağıdaki duyu organlarından hangisi tat almamızı sağlar?',
    options: ['Dil', 'Kulak', 'Göz', 'Burun'],
    answer: 'Dil'
  },
  {
    id: 'f56',
    category: 'Fen',
    question: 'Sıvıların belirli bir şekli var mıdır?',
    options: ['Evet, hep aynı', 'Hayır, kabın şeklini alır', 'Sadece kare olur', 'Sadece yuvarlak olur'],
    answer: 'Hayır, kabın şeklini alır'
  },
  {
    id: 'f57',
    category: 'Fen',
    question: 'Hangisi katıdan gaza geçişe örnektir?',
    options: ['Buzun erimesi', 'Suyun donması', 'Kuru buzun uçması', 'Suyun kaynaması'],
    answer: 'Kuru buzun uçması'
  },
  {
    id: 'f58',
    category: 'Fen',
    question: 'Güneş ışınlarının Dünya’ya geliş açısı en dik olduğu zaman hangisidir?',
    options: ['Sabah', 'Öğle', 'Akşam', 'Gece'],
    answer: 'Öğle'
  },

  // ==========================
  // 📚 TÜRKÇE (+12)  t45 - t56
  // ==========================
  {
    id: 't45',
    category: 'Türkçe',
    question: 'Aşağıdakilerden hangisi eş anlamlıdır?',
    options: ['Kara - Siyah', 'Büyük - Küçük', 'Hızlı - Yavaş', 'Aç - Tok'],
    answer: 'Kara - Siyah'
  },
  {
    id: 't46',
    category: 'Türkçe',
    question: 'Aşağıdaki cümlelerin hangisinde soru işareti kullanılmalıdır?',
    options: ['Bugün hava çok güzel.', 'Ne zaman geleceksin', 'Harika bir gün!', 'Kitap okuyorum.'],
    answer: 'Ne zaman geleceksin'
  },
  {
    id: 't47',
    category: 'Türkçe',
    question: '"Kalemim" kelimesinde hangi ek vardır?',
    options: ['Çoğul eki', 'İyelik eki', 'Hâl eki', 'Yapım eki'],
    answer: 'İyelik eki'
  },
  {
    id: 't48',
    category: 'Türkçe',
    question: 'Aşağıdakilerden hangisi zıt anlamlıdır?',
    options: ['Uzak - Irak', 'Güzel - Hoş', 'Sıcak - Soğuk', 'Mutlu - Sevinçli'],
    answer: 'Sıcak - Soğuk'
  },
  {
    id: 't49',
    category: 'Türkçe',
    question: 'Öyküde olayların geçtiği yere ne denir?',
    options: ['Kahraman', 'Zaman', 'Mekân', 'Konu'],
    answer: 'Mekân'
  },
  {
    id: 't50',
    category: 'Türkçe',
    question: 'Aşağıdakilerden hangisi “öznel” bir cümledir?',
    options: ['Ankara Türkiye’nin başkentidir.', 'Su 100°C’de kaynar.', 'Bu film çok güzeldi.', 'Dün pazara gittim.'],
    answer: 'Bu film çok güzeldi.'
  },
  {
    id: 't51',
    category: 'Türkçe',
    question: '"Çalışkan" kelimesi hangi tür sözcüktür?',
    options: ['İsim', 'Sıfat', 'Zarf', 'Zamir'],
    answer: 'Sıfat'
  },
  {
    id: 't52',
    category: 'Türkçe',
    question: 'Aşağıdaki cümlelerin hangisinde “ki” ayrı yazılmalıdır?',
    options: ['İyi ki geldin.', 'Dünkü maç çok iyiydi.', 'Baktımki gelmiyor.', 'Evdeki kitaplar.'],
    answer: 'İyi ki geldin.'
  },
  {
    id: 't53',
    category: 'Türkçe',
    question: 'Hangisi bir atasözü değildir?',
    options: ['Damlaya damlaya göl olur.', 'Ağaç yaşken eğilir.', 'Göz atmak', 'Sakla samanı, gelir zamanı.'],
    answer: 'Göz atmak'
  },
  {
    id: 't54',
    category: 'Türkçe',
    question: 'Aşağıdaki kelimelerden hangisi sesteştir?',
    options: ['Kalem', 'Gül', 'Defter', 'Silgi'],
    answer: 'Gül'
  },
  {
    id: 't55',
    category: 'Türkçe',
    question: 'Cümlede işi yapanı bildiren öğe hangisidir?',
    options: ['Yüklem', 'Özne', 'Nesne', 'Zarf tümleci'],
    answer: 'Özne'
  },
  {
    id: 't56',
    category: 'Türkçe',
    question: '"Koşarak geldi." cümlesinde “koşarak” hangi tür sözcüktür?',
    options: ['İsim', 'Zarf', 'Sıfat', 'Zamir'],
    answer: 'Zarf'
  },

  // ==========================
  // 🌍 İNGİLİZCE (+13)  e46 - e58
  // ==========================
  {
    id: 'e46',
    category: 'İngilizce',
    question: '"She ____ to school every day." boşluğa hangisi gelir?',
    options: ['go', 'goes', 'going', 'gone'],
    answer: 'goes'
  },
  {
    id: 'e47',
    category: 'İngilizce',
    question: '"There is" ne demektir?',
    options: ['Orada yok', 'Var', 'Nerede', 'Neden'],
    answer: 'Var'
  },
  {
    id: 'e48',
    category: 'İngilizce',
    question: '"How many" sorusu neyi sorar?',
    options: ['Nerede', 'Kaç tane', 'Ne zaman', 'Neden'],
    answer: 'Kaç tane'
  },
  {
    id: 'e49',
    category: 'İngilizce',
    question: '"Hungry" ne demektir?',
    options: ['Tok', 'Aç', 'Yorgun', 'Mutlu'],
    answer: 'Aç'
  },
  {
    id: 'e50',
    category: 'İngilizce',
    question: '"I have got a pen." cümlesi ne anlama gelir?',
    options: ['Benim bir kalemim var.', 'Ben kalem alıyorum.', 'Kalemim yok.', 'Kalem istiyorum.'],
    answer: 'Benim bir kalemim var.'
  },
  {
    id: 'e51',
    category: 'İngilizce',
    question: '"Between" ne demektir?',
    options: ['Üstünde', 'Altında', 'Arasında', 'Yanında'],
    answer: 'Arasında'
  },
  {
    id: 'e52',
    category: 'İngilizce',
    question: '"He is ____ the park." (Parkta)',
    options: ['in', 'on', 'at', 'under'],
    answer: 'in'
  },
  {
    id: 'e53',
    category: 'İngilizce',
    question: 'Hangisi bir ay değildir?',
    options: ['June', 'March', 'Sunday', 'April'],
    answer: 'Sunday'
  },
  {
    id: 'e54',
    category: 'İngilizce',
    question: '"Milk" hangi içecektir?',
    options: ['Milk', 'Juice', 'Water', 'Tea'],
    answer: 'Milk'
  },
  {
    id: 'e55',
    category: 'İngilizce',
    question: '"I can ____ a bike." boşluğa hangisi gelir?',
    options: ['ride', 'read', 'sleep', 'drink'],
    answer: 'ride'
  },
  {
    id: 'e56',
    category: 'İngilizce',
    question: '"Opposite" ne demektir?',
    options: ['Yakın', 'Karşı', 'Arka', 'Ön'],
    answer: 'Karşı'
  },
  {
    id: 'e57',
    category: 'İngilizce',
    question: '"Where is the library?" sorusu ne sorar?',
    options: ['Kütüphane nerede?', 'Kütüphaneye git.', 'Kütüphane var mı?', 'Kütüphane kapalı mı?'],
    answer: 'Kütüphane nerede?'
  },
  {
    id: 'e58',
    category: 'İngilizce',
    question: '"I ____ eleven years old." boşluğa hangisi gelir?',
    options: ['am', 'is', 'are', 'be'],
    answer: 'am'
  },
    // ==========================
  // 🚀 YENİ EKSTRA 40 SORU (KARMA)
  // ==========================

  // 📐 MATEMATİK (+10) - m60'tan m69'a
  {
    id: 'm60',
    category: 'Matematik',
    question: '100 sayısının 1/4\'ü kaçtır?',
    options: ['20', '25', '40', '50'],
    answer: '25'
  },
  {
    id: 'm61',
    category: 'Matematik',
    question: 'Bir açısı 120 derece olan üçgen ne tür bir üçgendir?',
    options: ['Dar açılı', 'Dik açılı', 'Geniş açılı', 'Eşkenar'],
    answer: 'Geniş açılı'
  },
  {
    id: 'm62',
    category: 'Matematik',
    question: '4 x 4 x 4 ifadesinin üslü sayı olarak gösterimi nedir?',
    options: ['4²', '3⁴', '4³', '12'],
    answer: '4³'
  },
  {
    id: 'm63',
    category: 'Matematik',
    question: '0,8 - 0,3 işleminin sonucu kaçtır?',
    options: ['0,5', '1,1', '0,05', '5'],
    answer: '0,5'
  },
  {
    id: 'm64',
    category: 'Matematik',
    question: 'Bir saatin 1/3\'ü kaç dakikadır?',
    options: ['15', '20', '30', '40'],
    answer: '20'
  },
  {
    id: 'm65',
    category: 'Matematik',
    question: 'En küçük asal sayı kaçtır?',
    options: ['0', '1', '2', '3'],
    answer: '2'
  },
  {
    id: 'm66',
    category: 'Matematik',
    question: '10² - 5² işleminin sonucu kaçtır?',
    options: ['5', '25', '50', '75'],
    answer: '75'
  },
  {
    id: 'm67',
    category: 'Matematik',
    question: 'İki basamaklı en büyük çift sayı kaçtır?',
    options: ['90', '98', '99', '100'],
    answer: '98'
  },
  {
    id: 'm68',
    category: 'Matematik',
    question: '5000 metre kaç kilometredir?',
    options: ['5', '50', '500', '0,5'],
    answer: '5'
  },
  {
    id: 'm69',
    category: 'Matematik',
    question: 'Bir karenin çevresi 40 cm ise bir kenarı kaç cm\'dir?',
    options: ['5', '10', '20', '160'],
    answer: '10'
  },

  // 🔬 FEN BİLİMLERİ (+10) - f59'dan f68'e
  {
    id: 'f59',
    category: 'Fen',
    question: 'Ay\'ın evrelerinin tamamlanması yaklaşık kaç gün sürer?',
    options: ['15 gün', '29 gün', '365 gün', '24 saat'],
    answer: '29 gün'
  },
  {
    id: 'f60',
    category: 'Fen',
    question: 'Maddenin dışarıdan ısı alarak katıdan sıvıya geçmesine ne denir?',
    options: ['Donma', 'Erime', 'Buharlaşma', 'Yoğuşma'],
    answer: 'Erime'
  },
  {
    id: 'f61',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi mikroskobik bir canlıdır?',
    options: ['Karınca', 'Amip', 'Sinek', 'Papatya'],
    answer: 'Amip'
  },
  {
    id: 'f62',
    category: 'Fen',
    question: 'Dinamometre içindeki yay ne kadar çok uzarsa, ölçülen kuvvet o kadar...?',
    options: ['Küçüktür', 'Büyüktür', 'Değişmez', 'Sıfırdır'],
    answer: 'Büyüktür'
  },
  {
    id: 'f63',
    category: 'Fen',
    question: 'Ay\'ın yüzeyindeki meteor çarpması sonucu oluşan çukurlara ne denir?',
    options: ['Vadi', 'Krater', 'Dağ', 'Deniz'],
    answer: 'Krater'
  },
  {
    id: 'f64',
    category: 'Fen',
    question: 'Işığı hiç geçirmeyen maddelere ne denir?',
    options: ['Saydam', 'Yarı Saydam', 'Opak', 'Parlak'],
    answer: 'Opak'
  },
  {
    id: 'f65',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi bir yapay ışık kaynağıdır?',
    options: ['Güneş', 'Yıldız', 'Şimşek', 'Mum'],
    answer: 'Mum'
  },
  {
    id: 'f66',
    category: 'Fen',
    question: 'Tam gölge oluşumu ışığın hangi özelliğini kanıtlar?',
    options: ['Hızlı yayılmasını', 'Doğrusal yayılmasını', 'Yansımasını', 'Isıtmasını'],
    answer: 'Doğrusal yayılmasını'
  },
  {
    id: 'f67',
    category: 'Fen',
    question: 'Sesin hızı en fazla hangi ortamda yayılır?',
    options: ['Katı', 'Sıvı', 'Gaz', 'Boşluk'],
    answer: 'Katı'
  },
  {
    id: 'f68',
    category: 'Fen',
    question: 'Bir elektrik devresinde pillerin yerleştirildiği bölüme ne denir?',
    options: ['Duy', 'Anahtar', 'Pil yatağı', 'Kablo'],
    answer: 'Pil yatağı'
  },

  // 📚 TÜRKÇE (+10) - t57'den t66'e
  {
    id: 't57',
    category: 'Türkçe',
    question: '"Güzel" kelimesinin zıt anlamlısı nedir?',
    options: ['Hoş', 'Çirkin', 'İyi', 'Fena'],
    answer: 'Çirkin'
  },
  {
    id: 't58',
    category: 'Türkçe',
    question: '"Gözden düşmek" deyimi ne anlama gelir?',
    options: ['Çok sevilmek', 'Değerini yitirmek', 'Gözü bozulmak', 'Dikkatli bakmak'],
    answer: 'Değerini yitirmek'
  },
  {
    id: 't59',
    category: 'Türkçe',
    question: 'Aşağıdaki kelimelerin hangisinde "ünsüz benzeşmesi" kuralına uyulmamıştır?',
    options: ['Kitapçı', 'Sokakta', 'Dolabda', 'Ağaçtan'],
    answer: 'Dolabda'
  },
  {
    id: 't60',
    category: 'Türkçe',
    question: 'Cümledeki korku, sevinç gibi duyguları belirten noktalama işareti hangisidir?',
    options: ['Nokta', 'Virgül', 'Ünlem', 'Soru İşareti'],
    answer: 'Ünlem'
  },
  {
    id: 't61',
    category: 'Türkçe',
    question: '"Yaz" kelimesi aşağıdaki hangi özelliği gösterir?',
    options: ['Eş anlamlı', 'Eş sesli', 'Zıt anlamlı', 'Terim anlamlı'],
    answer: 'Eş sesli'
  },
  {
    id: 't62',
    category: 'Türkçe',
    question: 'Bir yazıda okuyucuya verilmek istenen temel düşünceye ne denir?',
    options: ['Ana fikir', 'Konu', 'Başlık', 'Yardımcı fikir'],
    answer: 'Ana fikir'
  },
  {
    id: 't63',
    category: 'Türkçe',
    question: '"Okuldan eve geldim" cümlesinde "okuldan" kelimesi ismin hangi halindedir?',
    options: ['Yalın', 'Belirtme', 'Yönelme', 'Ayrılma'],
    answer: 'Ayrılma'
  },
  {
    id: 't64',
    category: 'Türkçe',
    question: '"Simitçi" kelimesindeki "-çi" ekinin türü nedir?',
    options: ['Çoğul eki', 'Yapım eki', 'Çekim eki', 'Soru eki'],
    answer: 'Yapım eki'
  },
  {
    id: 't65',
    category: 'Türkçe',
    question: '"Damlaya damlaya göl olur" sözü aşağıdakilerden hangisidir?',
    options: ['Deyim', 'Atasözü', 'Özdeyiş', 'Tekerleme'],
    answer: 'Atasözü'
  },
  {
    id: 't66',
    category: 'Türkçe',
    question: 'Aşağıdakilerden hangisi hayal ürünü bir cümledir?',
    options: ['Kuşlar gökyüzünde uçuyor.', 'Bulutlar bize gülümsedi.', 'Balıklar denizde yüzüyor.', 'Güneş sabah doğdu.'],
    answer: 'Bulutlar bize gülümsedi.'
  },

  // 🌍 İNGİLİZCE (+10) - e59'dan e68'e
  {
    id: 'e59',
    category: 'İngilizce',
    question: '"I have a headache." diyen biri nereye gitmelidir?',
    options: ['Cinema', 'Hospital', 'Bakery', 'Library'],
    answer: 'Hospital'
  },
  {
    id: 'e60',
    category: 'İngilizce',
    question: '"Turn right" ifadesinin Türkçe karşılığı nedir?',
    options: ['Sola dön', 'Düz git', 'Sağa dön', 'Geri dön'],
    answer: 'Sağa dön'
  },
  {
    id: 'e61',
    category: 'İngilizce',
    question: '"How can I go to the bank?" sorusu neyi sormaktadır?',
    options: ['Banka kaçta açılıyor?', 'Banka nerede?', 'Bankaya nasıl gidebilirim?', 'Bankada kim var?'],
    answer: 'Bankaya nasıl gidebilirim?'
  },
  {
    id: 'e62',
    category: 'İngilizce',
    question: '"Elephant" kelimesinin Türkçe karşılığı nedir?',
    options: ['Zürafa', 'Aslan', 'Fil', 'Maymun'],
    answer: 'Fil'
  },
  {
    id: 'e63',
    category: 'İngilizce',
    question: '"Seventy" hangi sayıdır?',
    options: ['17', '7', '70', '77'],
    answer: '70'
  },
  {
    id: 'e64',
    category: 'İngilizce',
    question: '"Excuse me" ifadesi ne zaman kullanılır?',
    options: ['Veda ederken', 'Özür dilerken/İzin isterken', 'Teşekkür ederken', 'Selam verirken'],
    answer: 'Özür dilerken/İzin isterken'
  },
  {
    id: 'e65',
    category: 'İngilizce',
    question: '"What is your favorite movie?" sorusuna hangisi uygun bir cevaptır?',
    options: ['I am Ali', 'It is Batman', 'I like pizza', 'Yes, it is'],
    answer: 'It is Batman'
  },
  {
    id: 'e66',
    category: 'İngilizce',
    question: '"Strong" kelimesinin zıt anlamlısı nedir?',
    options: ['Fast', 'Big', 'Weak', 'Happy'],
    answer: 'Weak'
  },
  {
    id: 'e67',
    category: 'İngilizce',
    question: 'Hangi eşleşme yanlıştır?',
    options: ['Red - Kırmızı', 'Blue - Mavi', 'Yellow - Yeşil', 'Black - Siyah'],
    answer: 'Yellow - Yeşil'
  },
  {
    id: 'e68',
    category: 'İngilizce',
    question: '"I ____ a student." boşluğa hangisi gelir?',
    options: ['is', 'are', 'am', 'do'],
    answer: 'am'
  },
    // ==========================
  // 🚀 EKSTRA 40 SORU (PAKET 3)
  // ==========================

  // 📐 MATEMATİK (+10) - m70 - m79
  {
    id: 'm70',
    category: 'Matematik',
    question: '3/10 + 4/10 işleminin sonucu kaçtır?',
    options: ['7/10', '7/20', '1/10', '12/10'],
    answer: '7/10'
  },
  {
    id: 'm71',
    category: 'Matematik',
    question: '400 sayısının %10\'u kaçtır?',
    options: ['4', '40', '400', '10'],
    answer: '40'
  },
  {
    id: 'm72',
    category: 'Matematik',
    question: '1 ton kaç kilogramdır?',
    options: ['10', '100', '1000', '500'],
    answer: '1000'
  },
  {
    id: 'm73',
    category: 'Matematik',
    question: '15 x 4 işleminin sonucu kaçtır?',
    options: ['45', '50', '60', '70'],
    answer: '60'
  },
  {
    id: 'm74',
    category: 'Matematik',
    question: 'Bir doğru açının ölçüsü kaç derecedir?',
    options: ['90', '180', '270', '360'],
    answer: '180'
  },
  {
    id: 'm75',
    category: 'Matematik',
    question: 'Çeyrek kilogram kaç gramdır?',
    options: ['100', '200', '250', '500'],
    answer: '250'
  },
  {
    id: 'm76',
    category: 'Matematik',
    question: '120 ÷ 6 işleminin sonucu kaçtır?',
    options: ['20', '30', '40', '15'],
    answer: '20'
  },
  {
    id: 'm77',
    category: 'Matematik',
    question: '5.432 sayısında "4" rakamının basamak değeri kaçtır?',
    options: ['4', '40', '400', '4000'],
    answer: '400'
  },
  {
    id: 'm78',
    category: 'Matematik',
    question: 'Çevresi 15 cm olan bir eşkenar üçgenin bir kenarı kaç cm\'dir?',
    options: ['3', '5', '7', '10'],
    answer: '5'
  },
  {
    id: 'm79',
    category: 'Matematik',
    question: 'Hangisi bir "dar açı"dır?',
    options: ['89°', '90°', '91°', '180°'],
    answer: '89°'
  },

  // 🔬 FEN BİLİMLERİ (+10) - f69 - f78
  {
    id: 'f69',
    category: 'Fen',
    question: 'Su kaç santigrat derecede donmaya başlar?',
    options: ['-10', '0', '10', '100'],
    answer: '0'
  },
  {
    id: 'f70',
    category: 'Fen',
    question: 'Mikroskobik canlıları görmek için hangi alet kullanılır?',
    options: ['Teleskop', 'Büyüteç', 'Mikroskop', 'Dürbün'],
    answer: 'Mikroskop'
  },
  {
    id: 'f71',
    category: 'Fen',
    question: 'Ay, Dünya etrafındaki bir tam dönüşünü yaklaşık kaç günde tamamlar?',
    options: ['1', '7', '27', '365'],
    answer: '27'
  },
  {
    id: 'f72',
    category: 'Fen',
    question: 'Pürüzlü yüzeylerde sürtünme kuvveti nasıldır?',
    options: ['Az', 'Çok', 'Yoktur', 'Sabit'],
    answer: 'Çok'
  },
  {
    id: 'f73',
    category: 'Fen',
    question: 'Hangi besin grubu vücudumuza öncelikli olarak enerji verir?',
    options: ['Proteinler', 'Vitaminler', 'Karbonhidratlar', 'Mineraller'],
    answer: 'Karbonhidratlar'
  },
  {
    id: 'f74',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi bir ışık kaynağı değildir?',
    options: ['Güneş', 'Mum', 'Ayna', 'Yıldız'],
    answer: 'Ayna'
  },
  {
    id: 'f75',
    category: 'Fen',
    question: 'Bitkinin toprağa tutunmasını ve su almasını sağlayan bölümü hangisidir?',
    options: ['Gövde', 'Yaprak', 'Çiçek', 'Kök'],
    answer: 'Kök'
  },
  {
    id: 'f76',
    category: 'Fen',
    question: 'Sıvı bir maddenin ısı vererek katı hale geçmesine ne denir?',
    options: ['Erime', 'Donma', 'Buharlaşma', 'Yoğuşma'],
    answer: 'Donma'
  },
  {
    id: 'f77',
    category: 'Fen',
    question: 'Işık kaynağı engele yaklaştırılırsa tam gölgenin boyu nasıl değişir?',
    options: ['Küçülür', 'Büyür', 'Değişmez', 'Kaybolur'],
    answer: 'Büyür'
  },
  {
    id: 'f78',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi omurgalı bir hayvandır?',
    options: ['Kelebek', 'Kedi', 'Salyangoz', 'Solucan'],
    answer: 'Kedi'
  },

  // 📚 TÜRKÇE (+10) - t67 - t76
  {
    id: 't67',
    category: 'Türkçe',
    question: '"Cevap" kelimesinin eş anlamlısı aşağıdakilerden hangisidir?',
    options: ['Soru', 'Yanıt', 'Söz', 'Cümle'],
    answer: 'Yanıt'
  },
  {
    id: 't68',
    category: 'Türkçe',
    question: '"Islak" kelimesinin zıt anlamlısı nedir?',
    options: ['Nemli', 'Kuru', 'Yaş', 'Sulu'],
    answer: 'Kuru'
  },
  {
    id: 't69',
    category: 'Türkçe',
    question: '"Ağzı kulaklarına varmak" deyimi ne anlama gelir?',
    options: ['Çok üzülmek', 'Çok şaşırmak', 'Çok sevinmek', 'Çok konuşmak'],
    answer: 'Çok sevinmek'
  },
  {
    id: 't70',
    category: 'Türkçe',
    question: 'Aşağıdakilerden hangisi bir ünlem cümlesidir?',
    options: ['Okula gittim.', 'Yarın gelecek misin?', 'Eyvah, ödevimi unuttum!', 'Kitap okumayı severim.'],
    answer: 'Eyvah, ödevimi unuttum!'
  },
  {
    id: 't71',
    category: 'Türkçe',
    question: '"Kitapçıdan yeni bir kalem aldım." cümlesinde işi yapan kimdir?',
    options: ['Kitapçı', 'Kalem', 'Ben (Gizli Özne)', 'Yeni'],
    answer: 'Ben (Gizli Özne)'
  },
  {
    id: 't72',
    category: 'Türkçe',
    question: 'Aşağıdaki kelimelerden hangisi sesteştir (eş sesli)?',
    options: ['Kalem', 'Masa', 'Bin', 'Kitap'],
    answer: 'Bin'
  },
  {
    id: 't73',
    category: 'Türkçe',
    question: 'Özel isimlerin ilk harfi her zaman nasıl yazılır?',
    options: ['Küçük', 'Büyük', 'Eğik', 'Renkli'],
    answer: 'Büyük'
  },
  {
    id: 't74',
    category: 'Türkçe',
    question: '"Dün akşam bize geldi." cümlesinde zaman bildiren ifade hangisidir?',
    options: ['Bize', 'Dün akşam', 'Geldi', 'Dün'],
    answer: 'Dün akşam'
  },
  {
    id: 't75',
    category: 'Türkçe',
    question: '"Balık" kelimesinin çoğul hali hangisidir?',
    options: ['Balıkçı', 'Balıklar', 'Balıklarız', 'Balıkta'],
    answer: 'Balıklar'
  },
  {
    id: 't76',
    category: 'Türkçe',
    question: '"Okul yolu" tamlamasında "okul" sözcüğü hangi türdedir?',
    options: ['İsim', 'Fiil', 'Sıfat', 'Zamir'],
    answer: 'İsim'
  },

  // 🌍 İNGİLİZCE (+10) - e69 - e78
  {
    id: 'e69',
    category: 'İngilizce',
    question: '"Shark" kelimesinin Türkçe karşılığı nedir?',
    options: ['Balina', 'Yunus', 'Köpekbalığı', 'Ahtapot'],
    answer: 'Köpekbalığı'
  },
  {
    id: 'e70',
    category: 'İngilizce',
    question: '"Bed" kelimesi hangi odada bulunur?',
    options: ['Kitchen', 'Bathroom', 'Bedroom', 'Living room'],
    answer: 'Bedroom'
  },
  {
    id: 'e71',
    category: 'İngilizce',
    question: '"Wednesday" hangi gündür?',
    options: ['Salı', 'Çarşamba', 'Perşembe', 'Cuma'],
    answer: 'Çarşamba'
  },
  {
    id: 'e72',
    category: 'İngilizce',
    question: '"Yellow" hangi renktir?',
    options: ['Mavi', 'Sarı', 'Yeşil', 'Turuncu'],
    answer: 'Sarı'
  },
  {
    id: 'e73',
    category: 'İngilizce',
    question: '"Ride a horse" ne demektir?',
    options: ['Bisiklete binmek', 'Ata binmek', 'Koşmak', 'Yüzmek'],
    answer: 'Ata binmek'
  },
  {
    id: 'e74',
    category: 'İngilizce',
    question: 'Where does a "Doctor" work?',
    options: ['School', 'Farm', 'Hospital', 'Police station'],
    answer: 'Hospital'
  },
  {
    id: 'e75',
    category: 'İngilizce',
    question: 'What is the opposite of "Fast"?',
    options: ['Slow', 'Quick', 'Big', 'Strong'],
    answer: 'Slow'
  },
  {
    id: 'e76',
    category: 'İngilizce',
    question: '"Seven" hangi sayıdır?',
    options: ['6', '7', '8', '9'],
    answer: '7'
  },
  {
    id: 'e77',
    category: 'İngilizce',
    question: '"Pencil case" nedir?',
    options: ['Kitaplık', 'Kalemlik', 'Sıra', 'Çanta'],
    answer: 'Kalemlik'
  },
  {
    id: 'e78',
    category: 'İngilizce',
    question: 'How do you answer "How are you?"',
    options: ['I am 10', 'I am fine', 'My name is Ali', 'I am from Turkey'],
    answer: 'I am fine'
  },
    // ==========================
  // 🚀 EKSTRA 40 SORU (PAKET 4)
  // ==========================

  // 📐 MATEMATİK (+10) - m80 - m89
  {
    id: 'm80',
    category: 'Matematik',
    question: 'Aşağıdaki sayılardan hangisi 10 ile kalansız bölünür?',
    options: ['105', '213', '450', '999'],
    answer: '450'
  },
  {
    id: 'm81',
    category: 'Matematik',
    question: '0,4 + 0,02 işleminin sonucu kaçtır?',
    options: ['0,6', '0,42', '0,06', '4,2'],
    answer: '0,42'
  },
  {
    id: 'm82',
    category: 'Matematik',
    question: '6 sayısının küpü (6³) kaçtır?',
    options: ['18', '36', '216', '126'],
    answer: '216'
  },
  {
    id: 'm83',
    category: 'Matematik',
    question: '2 gün toplam kaç saattir?',
    options: ['24', '36', '48', '60'],
    answer: '48'
  },
  {
    id: 'm84',
    category: 'Matematik',
    question: 'Paydası 100 olan kesirlere ne ad verilir?',
    options: ['Birim Kesir', 'Yüzdelik', 'Bileşik Kesir', 'Tam Sayılı'],
    answer: 'Yüzdelik'
  },
  {
    id: 'm85',
    category: 'Matematik',
    question: 'Bir kenarı 8 cm olan karenin çevresi kaç cm\'dir?',
    options: ['16', '32', '64', '24'],
    answer: '32'
  },
  {
    id: 'm86',
    category: 'Matematik',
    question: '56.000 ÷ 1000 işleminin sonucu kaçtır?',
    options: ['5,6', '56', '560', '5600'],
    answer: '56'
  },
  {
    id: 'm87',
    category: 'Matematik',
    question: '84 sayısını en yakın onluğa yuvarlarsak sonuç ne olur?',
    options: ['80', '85', '90', '100'],
    answer: '80'
  },
  {
    id: 'm88',
    category: 'Matematik',
    question: 'Ölçüsü 180 derece olan açıya ne denir?',
    options: ['Dik Açı', 'Tam Açı', 'Doğru Açı', 'Geniş Açı'],
    answer: 'Doğru Açı'
  },
  {
    id: 'm89',
    category: 'Matematik',
    question: '4532 + 1200 işleminin sonucu kaçtır?',
    options: ['5732', '5632', '5532', '6732'],
    answer: '5732'
  },

  // 🔬 FEN BİLİMLERİ (+10) - f79 - f88
  {
    id: 'f79',
    category: 'Fen',
    question: 'Ay bir ışık kaynağı mıdır?',
    options: ['Evet, doğal kaynaktır', 'Hayır, Güneşten aldığı ışığı yansıtır', 'Evet, yapay kaynaktır', 'Sadece dolunayda kaynaktır'],
    answer: 'Hayır, Güneşten aldığı ışığı yansıtır'
  },
  {
    id: 'f80',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi gaz halindeki bir maddedir?',
    options: ['Buz', 'Su', 'Hava', 'Demir'],
    answer: 'Hava'
  },
  {
    id: 'f81',
    category: 'Fen',
    question: 'Ses en yavaş hangi ortamda yayılır?',
    options: ['Katı', 'Sıvı', 'Gaz', 'Boşlukta yayılmaz'],
    answer: 'Gaz'
  },
  {
    id: 'f82',
    category: 'Fen',
    question: 'Kuvvetin büyüklüğünü ölçen birim nedir?',
    options: ['Metre', 'Litre', 'Newton', 'Gram'],
    answer: 'Newton'
  },
  {
    id: 'f83',
    category: 'Fen',
    question: 'Pürüzsüz ve kaygan yüzeylerde sürtünme nasıldır?',
    options: ['Çok fazladır', 'Azdır', 'Hiç yoktur', 'Yüzeye bağlı değildir'],
    answer: 'Azdır'
  },
  {
    id: 'f84',
    category: 'Fen',
    question: 'Basit bir elektrik devresinde enerjiyi taşıyan eleman hangisidir?',
    options: ['Pil', 'Lamba', 'Anahtar', 'İletken Kablo'],
    answer: 'İletken Kablo'
  },
  {
    id: 'f85',
    category: 'Fen',
    question: 'Aşağıdakilerden hangisi bir "omurgasız" hayvandır?',
    options: ['Kuş', 'Kurbağa', 'Arı', 'Yılan'],
    answer: 'Arı'
  },
  {
    id: 'f86',
    category: 'Fen',
    question: 'Bitkilerin kendi besinini üretmesine ne ad verilir?',
    options: ['Terleme', 'Fotosentez', 'Boşaltım', 'Solunum'],
    answer: 'Fotosentez'
  },
  {
    id: 'f87',
    category: 'Fen',
    question: 'Isı yalıtımı için binalarda ne kullanılır?',
    options: ['Demir levha', 'Cam yünü', 'Bakır tel', 'Alüminyum'],
    answer: 'Cam yünü'
  },
  {
    id: 'f88',
    category: 'Fen',
    question: 'Toprağın akarsu ve rüzgarla taşınması olayına ne denir?',
    options: ['Deprem', 'Sel', 'Erozyon', 'Heyelan'],
    answer: 'Erozyon'
  },

  // 📚 TÜRKÇE (+10) - t77 - t86
  {
    id: 't77',
    category: 'Türkçe',
    question: '"Pabuç" kelimesinin eş anlamlısı hangisidir?',
    options: ['Şapka', 'Ayakkabı', 'Çorap', 'Gömlek'],
    answer: 'Ayakkabı'
  },
  {
    id: 't78',
    category: 'Türkçe',
    question: '"Kalın" kelimesinin zıt anlamlısı nedir?',
    options: ['Zayıf', 'İnce', 'Geniş', 'Dar'],
    answer: 'İnce'
  },
  {
    id: 't79',
    category: 'Türkçe',
    question: '"Göz kulak olmak" deyimi ne anlama gelir?',
    options: ['Görmemek', 'Dinlemek', 'Korumak, bakmak', 'Uyumak'],
    answer: 'Korumak, bakmak'
  },
  {
    id: 't80',
    category: 'Türkçe',
    question: 'Özel adlara getirilen iyelik ekleri ne ile ayrılır?',
    options: ['Nokta', 'Virgül', 'Kesme İşareti', 'Kısa Çizgi'],
    answer: 'Kesme İşareti'
  },
  {
    id: 't81',
    category: 'Türkçe',
    question: 'Aşağıdaki kelimelerden hangisi yapım eki almıştır?',
    options: ['Kitaplar', 'Evden', 'Gözlük', 'Masanın'],
    answer: 'Gözlük'
  },
  {
    id: 't82',
    category: 'Türkçe',
    question: 'Sonunda ders verme amacı güden, hayvanların konuşturulduğu masallara ne denir?',
    options: ['Roman', 'Hikaye', 'Fabl', 'Anı'],
    answer: 'Fabl'
  },
  {
    id: 't83',
    category: 'Türkçe',
    question: '"Dal" kelimesi aşağıdaki hangi anlamda sesteştir?',
    options: ['Ağaç dalı / Suya dalmak', 'Kırılmak / Kopmak', 'Uyumak / Bakmak', 'Yürümek / Koşmak'],
    answer: 'Ağaç dalı / Suya dalmak'
  },
  {
    id: 't84',
    category: 'Türkçe',
    question: '"Sınavı kazandığı için çok mutlu." cümlesinde hangi anlam ilişkisi vardır?',
    options: ['Amaç-Sonuç', 'Neden-Sonuç', 'Koşul-Sonuç', 'Benzetme'],
    answer: 'Neden-Sonuç'
  },
  {
    id: 't85',
    category: 'Türkçe',
    question: '"O kitap okuyor." cümlesinde "O" hangi tür sözcüktür?',
    options: ['İsim', 'Fiil', 'Zamir', 'Sıfat'],
    answer: 'Zamir'
  },
  {
    id: 't86',
    category: 'Türkçe',
    question: '"Sıcak bir karşılama oldu." cümlesindeki "sıcak" kelimesi hangi anlamdadır?',
    options: ['Gerçek Anlam', 'Mecaz Anlam', 'Terim Anlam', 'Zıt Anlam'],
    answer: 'Mecaz Anlam'
  },

  // 🌍 İNGİLİZCE (+10) - e79 - e88
  {
    id: 'e79',
    category: 'İngilizce',
    question: '"I am hungry. Let\'s eat ____."',
    options: ['Water', 'Milk', 'Pizza', 'Music'],
    answer: 'Pizza'
  },
  {
    id: 'e80',
    category: 'İngilizce',
    question: '"I feel ____. (Mutluyum)"',
    options: ['Sad', 'Angry', 'Happy', 'Tired'],
    answer: 'Happy'
  },
  {
    id: 'e81',
    category: 'İngilizce',
    question: '"My mother\'s sister" is my...?',
    options: ['Aunt', 'Uncle', 'Cousin', 'Brother'],
    answer: 'Aunt'
  },
  {
    id: 'e82',
    category: 'İngilizce',
    question: '"Purple" hangi renktir?',
    options: ['Pembe', 'Mor', 'Turuncu', 'Gri'],
    answer: 'Mor'
  },
  {
    id: 'e83',
    category: 'İngilizce',
    question: '"The ball is ____ the box. (Kutunun altında)"',
    options: ['On', 'In', 'Under', 'Next to'],
    answer: 'Under'
  },
  {
    id: 'e84',
    category: 'İngilizce',
    question: '"Turtle" hangi hayvandır?',
    options: ['Tavşan', 'Kaplumbağa', 'Kuş', 'Maymun'],
    answer: 'Kaplumbağa'
  },
  {
    id: 'e85',
    category: 'İngilizce',
    question: '"One hundred" hangi sayıdır?',
    options: ['10', '50', '100', '1000'],
    answer: '100'
  },
  {
    id: 'e86',
    category: 'İngilizce',
    question: 'Hangisi bir "Classroom Object"tir?',
    options: ['Bed', 'Fridge', 'Scissors', 'Soap'],
    answer: 'Scissors'
  },
  {
    id: 'e87',
    category: 'İngilizce',
    question: '"Wash your hands" ne demektir?',
    options: ['Yüzünü yıka', 'Ellerini yıka', 'Dişlerini fırçala', 'Saçını tara'],
    answer: 'Ellerini yıka'
  },
  {
    id: 'e88',
    category: 'İngilizce',
    question: '"Goodbye" ne zaman söylenir?',
    options: ['Tanışırken', 'Sabah kalkınca', 'Ayrılırken', 'Yemek yerken'],
    answer: 'Ayrılırken'
  }

];