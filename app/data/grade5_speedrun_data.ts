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
  }

];