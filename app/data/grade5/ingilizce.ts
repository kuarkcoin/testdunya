import { SubjectData } from "./types";

export const ingilizceData: SubjectData = {
  term1: {
     test1: [
  // --- GÖRSEL ODAKLI SORULAR ---
  {
    id: "e5-1-t1-img-01",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki bayrağa göre boşluğu doldurunuz. 'She is from Japan. She is ____.'",
    imageUrl: "/images/grade5/ingilizce/test1/japan-flag.webp", // Japon bayrağı görseli olmalı
    options: ["British", "Japanese", "Turkish", "German"],
    correct: 1,
    explanation: "Japonya'dan (Japan) gelen birinin milliyeti Japon'dur (Japanese).",
  },
  {
    id: "e5-1-t1-img-02",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki mekana göre soruyu cevaplayınız. 'Where are they?'",
    imageUrl: "/images/grade5/ingilizce/test1/bakery-scene.webp", // Fırın/Pastane görseli olmalı
    options: ["At the pharmacy", "At the bakery", "At the library", "At the hospital"],
    correct: 1,
    explanation: "Görselde ekmek ve pastaların satıldığı bir fırın (bakery) görülmektedir.",
  },
  {
    id: "e5-1-t1-img-03",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki çocuğun yaptığı aktiviteye göre cümleyi tamamlayınız. 'Ali can ____ fast.'",
    imageUrl: "/images/grade5/ingilizce/test1/boy-running.webp", // Koşan bir çocuk görseli olmalı
    options: ["swim", "jump", "run", "sing"],
    correct: 2,
    explanation: "Görseldeki çocuk koşmaktadır, bu nedenle 'run' (koşmak) fiili gelmelidir.",
  },
  {
    id: "e5-1-t1-img-04",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki saat kaçı göstermektedir? 'What time is it?'",
    imageUrl: "/images/grade5/ingilizce/test1/clock-08-30.webp", // Saat 08:30'u gösteren görsel
    options: ["It is eight o'clock.", "It is half past eight.", "It is quarter past eight.", "It is half past nine."],
    correct: 1,
    explanation: "Saat 08:30'dur. Buçuklu saatlerde 'half past' kullanılır. 'It is half past eight.'",
  },
  {
    id: "e5-1-t1-img-05",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki topun konumuna göre boşluğu doldurunuz. 'The ball is ____ the box.'",
    imageUrl: "/images/grade5/ingilizce/test1/ball-under-box.webp", // Kutunun ALTINDA bir top görseli
    options: ["in", "on", "under", "behind"],
    correct: 2,
    explanation: "Top kutunun altındadır. 'Altında' demek için 'under' kullanılır.",
  },
  {
    id: "e5-1-t1-img-06",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki çocuğun sağlık problemine göre cümleyi tamamlayınız. 'He feels hot and tired. He has a ____.'",
    imageUrl: "/images/grade5/ingilizce/test1/fever-thermometer.webp", // Ateşi olan, termometreli çocuk görseli
    options: ["broken leg", "fever", "toothache", "cut"],
    correct: 1,
    explanation: "Çocuğun ateşi vardır ve sıcak hissetmektedir. Ateş 'fever' demektir.",
  },
  {
    id: "e5-1-t1-img-07",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki tabelaya göre hangi yöne gitmelisiniz? 'Excuse me, where is the bank?'",
    imageUrl: "/images/grade5/ingilizce/test1/turn-left-sign.webp", // Sola dönüşü gösteren ok işareti görseli
    options: ["Go straight ahead.", "Turn right.", "Turn left.", "Cross the street."],
    correct: 2,
    explanation: "Tabela sola dönüşü göstermektedir. 'Turn left.' (Sola dön).",
  },
  {
    id: "e5-1-t1-img-08",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki ders araçlarına göre Zeynep'in en sevdiği ders hangisidir? 'Zeynep loves doing experiments. Her favorite class is ____.'",
    imageUrl: "/images/grade5/ingilizce/test1/science-lab-tools.webp", // Deney tüpleri, mikroskop vb. Fen Bilgisi araçları
    options: ["Social Studies", "Art", "Maths", "Science"],
    correct: 3,
    explanation: "Görselde deney malzemeleri vardır. Deney yapılan ders Fen Bilimleri'dir (Science).",
  },
  {
    id: "e5-1-t1-img-09",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki film türü hakkında konuşan iki arkadaşın diyaloğunu tamamlayınız. A: 'Do you like cartoons?' B: 'Yes. They are ____.'",
    imageUrl: "/images/grade5/ingilizce/test1/cartoon-movie-poster.webp", // Eğlenceli bir çizgi film afişi
    options: ["scary", "boring", "entertaining", "frightening"],
    correct: 2,
    explanation: "Çizgi filmleri seven biri onların 'eğlenceli' (entertaining) olduğunu düşünür.",
  },
  {
    id: "e5-1-t1-img-10",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki çocuğun sabah rutinine göre cümleyi tamamlayınız. 'I ____ my face every morning.'",
    imageUrl: "/images/grade5/ingilizce/test1/washing-face.webp", // Yüzünü yıkayan çocuk görseli
    options: ["brush", "wash", "comb", "get"],
    correct: 1,
    explanation: "Görseldeki kişi yüzünü yıkamaktadır. 'Wash my face' (Yüzümü yıkarım).",
  },
  {
    id: "e5-1-t1-img-11",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki konumlara göre kütüphanenin yerini tarif ediniz. 'The library is ____ the cinema and the cafe.'",
    imageUrl: "/images/grade5/ingilizce/test1/map-between.webp", // Ortada kütüphane, sağında kafe, solunda sinema olan bir sokak görseli
    options: ["next to", "opposite", "between", "behind"],
    correct: 2,
    explanation: "Kütüphane, sinema ile kafenin 'arasındadır' (between).",
  },
  {
    id: "e5-1-t1-img-12",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki çocuğun durumunu ifade eden kelimeyi seçiniz. 'She is very ____. She needs a sandwich.'",
    imageUrl: "/images/grade5/ingilizce/test1/hungry-girl.webp", // Karnını tutan, aç görünen kız görseli
    options: ["thirsty", "angry", "full", "hungry"],
    correct: 3,
    explanation: "Sandviçe ihtiyacı olduğuna göre 'açtır' (hungry).",
  },
  {
    id: "e5-1-t1-img-13",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki takvim yaprağına göre doğum günü ne zamandır? 'My birthday is on the ____ of April.'",
    imageUrl: "/images/grade5/ingilizce/test1/calendar-april-23.webp", // 23 Nisan'ı gösteren takvim görseli
    options: ["twenty-three", "twenty-third", "third-twenty", "thirteenth"],
    correct: 1,
    explanation: "Tarihlerde sıra sayıları kullanılır. 23. demek için 'twenty-third' denir.",
  },
  {
    id: "e5-1-t1-img-14",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki kişinin oynadığı oyuna göre cümleyi tamamlayınız. 'Ahmet likes playing ____. It is a board game.'",
    imageUrl: "/images/grade5/ingilizce/test1/playing-chess.webp", // Satranç oynayan kişiler görseli
    options: ["football", "hopscotch", "chess", "tag"],
    correct: 2,
    explanation: "Görselde satranç (chess) oynanmaktadır ve satranç bir masa oyunudur (board game).",
  },
  {
    id: "e5-1-t1-img-15",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki binanın işlevine göre boşluğu doldurunuz. 'I am a doctor. I work at the ____.'",
    imageUrl: "/images/grade5/ingilizce/test1/hospital-building.webp", // Üzerinde H harfi veya kırmızı haç olan hastane binası görseli
    options: ["school", "hospital", "pharmacy", "police station"],
    correct: 1,
    explanation: "Doktorlar hastanede (hospital) çalışır.",
  },
  {
    id: "e5-1-t1-img-16",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki hava durumuna ve çocuğun kıyafetine göre cümleyi tamamlayınız. 'It is snowy and ____ today.'",
    imageUrl: "/images/grade5/ingilizce/test1/snowy-cold-day.webp", // Karlı havada sıkı giyinmiş, üşüyen bir çocuk görseli
    options: ["hot", "sunny", "cold", "warm"],
    correct: 2,
    explanation: "Hava karlıysa genellikle 'soğuktur' (cold).",
  },
  {
    id: "e5-1-t1-img-17",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki doğum günü partisi öğesine göre boşluğu doldurunuz. 'There are lots of colorful ____ at the party.'",
    imageUrl: "/images/grade5/ingilizce/test1/balloons.webp", // Renkli balonlar görseli
    options: ["candles", "cakes", "presents", "balloons"],
    correct: 3,
    explanation: "Görselde renkli balonlar (balloons) vardır.",
  },
  {
    id: "e5-1-t1-img-18",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki saat kaçı göstermektedir? 'What time is it?'",
    imageUrl: "/images/grade5/ingilizce/test1/clock-10-15.webp", // Saat 10:15'i gösteren görsel
    options: ["It's quarter past ten.", "It's quarter to ten.", "It's ten fifteen.", "It's half past ten."],
    correct: 0,
    explanation: "Saat 10'u çeyrek geçmektedir. 'It's quarter past ten.'",
  },
  {
    id: "e5-1-t1-img-19",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki öğrencinin okula nasıl gittiğini ifade eden cümleyi seçiniz.",
    imageUrl: "/images/grade5/ingilizce/test1/school-bus.webp", // Okul servisine (otobüse) binen çocuklar görseli
    options: ["I go to school on foot.", "I go to school by bus.", "I go to school by car.", "I go to school by bicycle."],
    correct: 1,
    explanation: "Öğrenciler okul otobüsüne binmektedir. Vasıta ile gidilirken 'by' kullanılır. 'by bus' (otobüsle).",
  },
  {
    id: "e5-1-t1-img-20",
    subject: "ingilizce",
    term: 1,
    prompt: "Görseldeki süper kahramanın yeteneğine göre cümleyi tamamlayınız. 'Superman can ____.'",
    imageUrl: "/images/grade5/ingilizce/test1/superman-flying.webp", // Uçan bir süper kahraman görseli
    options: ["fly", "swim", "cook", "play guitar"],
    correct: 0,
    explanation: "Görseldeki süper kahraman uçmaktadır (fly).",
  },
],
  
    test2: [
      {
        id: "e5-1-t2-01",
        subject: "ingilizce",
        term: 1,
        prompt: "Clara: 'I am from Germany.' Mark: 'So, you can speak ____.'",
        options: ["German", "Germany", "English", "French"],
        correct: 0,
        explanation:
          "Germany (Almanya) ülkesinden olan biri German (Almanca) konuşur. Dil ve ülke isimleri karıştırılmamalıdır.",
      },
      {
        id: "e5-1-t2-02",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I am good at drawing pictures and painting, but I dislike solving problems. My favorite lesson is ____.",
        options: ["Maths", "Science", "Art", "Social Studies"],
        correct: 2,
        explanation:
          "Resim yapmayı ve boyamayı seven birinin en sevdiği ders Görsel Sanatlar (Art) dersidir.",
      },
      {
        id: "e5-1-t2-03",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ many languages do you speak?' B: 'Two. Turkish and English.'",
        options: ["What", "How", "Where", "When"],
        correct: 1,
        explanation:
          "Kaç tane (sayılabilenler için) sorusu sorulurken 'How many' kalıbı kullanılır.",
      },
      {
        id: "e5-1-t2-04",
        subject: "ingilizce",
        term: 1,
        prompt:
          "To go to the cinema, go straight on Green Street and ____ the second left.",
        options: ["turn", "take", "go", "look"],
        correct: 1,
        explanation:
          "Yol tariflerinde 'ikinci soldan dön/ikinci sola sap' anlamında 'take the second left' kullanılır.",
      },
      {
        id: "e5-1-t2-05",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The hospital is ____ the library. You must cross the street to go there.",
        options: ["opposite", "between", "next to", "near"],
        correct: 0,
        explanation:
          "Caddeyi geçmeniz gerekiyorsa hastane kütüphanenin 'karşısında' (opposite) yer alıyordur.",
      },
      {
        id: "e5-1-t2-06",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I enjoy playing checkers and chess, but I ____ playing dodgeball.",
        options: ["love", "like", "don't like", "am"],
        correct: 2,
        explanation:
          "Cümledeki 'but' (ama) kelimesi anlamın zıt yöne kayacağını gösterir. İlk kısım olumluysa ikinci kısım olumsuz olmalıdır.",
      },
      {
        id: "e5-1-t2-07",
        subject: "ingilizce",
        term: 1,
        prompt: "Susan is from Britain. She is ____.",
        options: ["English", "British", "American", "German"],
        correct: 1,
        explanation:
          "Britain (Britanya) ülkesinden olanların milliyeti 'British' (İngiliz/Britanyalı) olarak adlandırılır.",
      },
      {
        id: "e5-1-t2-08",
        subject: "ingilizce",
        term: 1,
        prompt: "Which of the following is an 'outdoor' game?",
        options: ["Board games", "Computer games", "Hide and seek", "Chess"],
        correct: 2,
        explanation:
          "Saklambaç (Hide and seek) genellikle dışarıda oynanan bir oyundur (outdoor game).",
      },
      {
        id: "e5-1-t2-09",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'Excuse me, is there a mosque near here?' B: 'Yes, it is ____ the museum and the bank.'",
        options: ["under", "between", "on", "behind"],
        correct: 1,
        explanation:
          "İki yer arasında olma durumu 'between' (arasında) edatı ile ifade edilir.",
      },
      {
        id: "e5-1-t2-10",
        subject: "ingilizce",
        term: 1,
        prompt: "I ____ play table tennis very well, but I can't swim.",
        options: ["am", "do", "can", "is"],
        correct: 2,
        explanation:
          "Yeteneklerden bahsederken 'can' (yapabilmek) modal fiili kullanılır.",
      },
      {
        id: "e5-1-t2-11",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ is your favorite hobby?' B: 'Collecting stamps.'",
        options: ["Where", "Who", "What", "How"],
        correct: 2,
        explanation:
          "Hobinin ne olduğunu sorarken 'What' (Ne) soru kelimesi kullanılır.",
      },
      {
        id: "e5-1-t2-12",
        subject: "ingilizce",
        term: 1,
        prompt: "Ninety minus fifteen equals ____.",
        options: ["Eighty-five", "Seventy-five", "Sixty-five", "Fifty-five"],
        correct: 1,
        explanation: "90 - 15 = 75 (Seventy-five).",
      },
      {
        id: "e5-1-t2-13",
        subject: "ingilizce",
        term: 1,
        prompt: "To get to the post office, ____ left into Rose Street.",
        options: ["go", "turn", "take", "cross"],
        correct: 1,
        explanation:
          "Bir sokağa 'dönmek' anlamında 'turn left/right' kalıbı kullanılır.",
      },
      {
        id: "e5-1-t2-14",
        subject: "ingilizce",
        term: 1,
        prompt: "Which matching is 'WRONG'?",
        options: [
          "USA - American",
          "France - French",
          "Egypt - Egyptian",
          "Spain - Spanishly",
        ],
        correct: 3,
        explanation:
          "Spain (İspanya) ülkesinin milliyeti 'Spanish' olmalıdır. Spanishly diye bir kullanım yoktur.",
      },
      {
        id: "e5-1-t2-15",
        subject: "ingilizce",
        term: 1,
        prompt: "My sister can play origami, but she ____ play tic-tac-toe.",
        options: ["can", "isn't", "can't", "don't"],
        correct: 2,
        explanation:
          "'But' bağlacı yeteneğin diğer oyunda olmadığını (olumsuzluk) gösterir.",
      },
      {
        id: "e5-1-t2-16",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Nice to meet you, Paul.' B: '____.'",
        options: ["Fine, thanks", "Me too", "Good morning", "Goodbye"],
        correct: 1,
        explanation:
          "Tanıştığına memnun olan birine 'Ben de (memnun oldum)' anlamında 'Me too' veya 'Nice to meet you, too' denir.",
      },
      {
        id: "e5-1-t2-17",
        subject: "ingilizce",
        term: 1,
        prompt:
          "Where is the pharmacy? It is ____ the bus stop. You can see it just behind the stop.",
        options: ["next to", "opposite", "behind", "near"],
        correct: 2,
        explanation:
          "Soruda 'arkasında' ipucu verildiği için 'behind' (arkasında) seçilmelidir.",
      },
      {
        id: "e5-1-t2-18",
        subject: "ingilizce",
        term: 1,
        prompt: "I am interested in experiment. My favorite subject is ____.",
        options: ["Science", "Art", "Maths", "Music"],
        correct: 0,
        explanation:
          "Deney (experiment) yapmaya ilgi duyan birinin favori dersi Fen Bilimleri (Science) olur.",
      },
      {
        id: "e5-1-t2-19",
        subject: "ingilizce",
        term: 1,
        prompt: "Which word is 'DIFFERENT'?",
        options: ["Hiking", "Fishing", "Camping", "Library"],
        correct: 3,
        explanation:
          "Hiking, Fishing ve Camping aktivitelerdir; Library (Kütüphane) ise bir yer ismidir.",
      },
      {
        id: "e5-1-t2-20",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ is the toy shop?' B: 'Go straight and turn right. It is next to the cafe.'",
        options: ["What", "Where", "Who", "How"],
        correct: 1,
        explanation:
          "Yer tarifi yapılan sorularda konum sormak için 'Where' (Nerede) kullanılır.",
      },
    ],
    test3: [
      {
        id: "e5-1-t3-01",
        subject: "ingilizce",
        term: 1,
        prompt:
          "Clara: 'I speak French and Italian.' This means Clara knows two ____.",
        options: ["countries", "nationalities", "languages", "classes"],
        correct: 2,
        explanation:
          "French (Fransızca) ve Italian (İtalyanca) birer dildir (language). Ülke veya milliyet isimleriyle karıştırılmamalıdır.",
      },
      {
        id: "e5-1-t3-02",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I am interested in experiments and nature. My favorite school subject is ____.",
        options: ["Maths", "Science", "P.E.", "History"],
        correct: 1,
        explanation:
          "Deneyler (experiments) ve doğa (nature) ile ilgili olan ders Fen Bilimleri (Science) dersidir.",
      },
      {
        id: "e5-1-t3-03",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ is the barber's?' B: 'It is next to the post office.'",
        options: ["What", "When", "Where", "Who"],
        correct: 2,
        explanation:
          "Bir yerin konumunu sorarken 'Where' (Nerede) soru kelimesi kullanılır.",
      },
      {
        id: "e5-1-t3-04",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The toy shop is ____ the stationery and the pharmacy. It is in the middle.",
        options: ["under", "behind", "between", "on"],
        correct: 2,
        explanation:
          "'In the middle' (ortasında) ifadesi, yerin iki şeyin 'arasında' (between) olduğunu gösterir.",
      },
      {
        id: "e5-1-t3-05",
        subject: "ingilizce",
        term: 1,
        prompt: "Jack can play basketball very well, but he ____ play tennis.",
        options: ["can", "do", "can't", "is"],
        correct: 2,
        explanation:
          "'But' (ama) bağlacı cümleye zıtlık katar. İlk kısım olumluysa ikinci kısım olumsuz (can't) olmalıdır.",
      },
      {
        id: "e5-1-t3-06",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Where is he from?' B: 'He is from ____.'",
        options: ["Spanish", "France", "Turkish", "British"],
        correct: 1,
        explanation:
          "'Where is from' sorusuna ülke ismiyle (France) cevap verilir. Diğer şıklar milliyet/dil isimleridir.",
      },
      {
        id: "e5-1-t3-07",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I love solving problems and working with numbers. My favorite class is ____.",
        options: ["Art", "Social Studies", "Maths", "Music"],
        correct: 2,
        explanation:
          "Problem çözme ve sayılarla uğraşma Matematik (Maths) dersinin temel özelliğidir.",
      },
      {
        id: "e5-1-t3-08",
        subject: "ingilizce",
        term: 1,
        prompt: "Which of the following is 'NOT' a board game?",
        options: ["Checkers", "Chess", "Dodgeball", "Tic-tac-toe"],
        correct: 2,
        explanation:
          "Dodgeball (yakantop) fiziksel bir oyundur; checkers ve chess ise masa başı (board game) oyunlarıdır.",
      },
      {
        id: "e5-1-t3-09",
        subject: "ingilizce",
        term: 1,
        prompt:
          "To find the bakery, go straight and ____ the first right into Blue Street.",
        options: ["turn", "look", "take", "cross"],
        correct: 2,
        explanation:
          "Yol tariflerinde 'birinci/ikinci sağdan dön' derken 'take the first/second right' kalıbı kullanılır.",
      },
      {
        id: "e5-1-t3-10",
        subject: "ingilizce",
        term: 1,
        prompt: "My father is American. He is from ____.",
        options: ["the USA", "the UK", "Germany", "Japan"],
        correct: 0,
        explanation:
          "Milliyeti American (Amerikalı) olan birinin ülkesi the USA (ABD) olur.",
      },
      {
        id: "e5-1-t3-11",
        subject: "ingilizce",
        term: 1,
        prompt: "Where is the cat? It is ____ the box. It is inside.",
        options: ["on", "under", "in", "next to"],
        correct: 2,
        explanation: "İçeride olma durumu 'in' edatı ile ifade edilir.",
      },
      {
        id: "e5-1-t3-12",
        subject: "ingilizce",
        term: 1,
        prompt: "Twenty plus thirty equals ____.",
        options: ["Forty", "Fifty", "Sixty", "Seventy"],
        correct: 1,
        explanation: "20 + 30 = 50 (Fifty).",
      },
      {
        id: "e5-1-t3-13",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ languages do you speak?' B: 'I speak Turkish and French.'",
        options: ["How many", "What", "Who", "Where"],
        correct: 0,
        explanation:
          "Sayı belirtilen cevaplarda (iki dil gibi) 'Kaç tane' anlamında 'How many' kullanılır.",
      },
      {
        id: "e5-1-t3-14",
        subject: "ingilizce",
        term: 1,
        prompt: "I want to buy some bread. Where should I go?",
        options: ["Hospital", "Bakery", "Cinema", "Museum"],
        correct: 1,
        explanation: "Ekmek (bread) alınan yer fırındır (bakery).",
      },
      {
        id: "e5-1-t3-15",
        subject: "ingilizce",
        term: 1,
        prompt: "Can you do origami? - Yes, but I ____ do it very well.",
        options: ["can", "am", "can't", "is"],
        correct: 2,
        explanation:
          "'Yes, but' yapısı bir kısıtlama getirir. 'Evet ama çok iyi yapamam' (can't) anlamı çıkar.",
      },
      {
        id: "e5-1-t3-16",
        subject: "ingilizce",
        term: 1,
        prompt: "Which matching is 'CORRECT'?",
        options: [
          "Spain - Spanish",
          "Egypt - Egyptian",
          "Japan - Japanese",
          "All of them",
        ],
        correct: 3,
        explanation:
          "Verilen tüm ülke-milliyet eşleştirmeleri (İspanya, Mısır, Japonya) doğrudur.",
      },
      {
        id: "e5-1-t3-17",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Nice to meet you!' B: '____.'",
        options: ["Fine, thanks", "Me too", "I am ten", "Hello"],
        correct: 1,
        explanation:
          "Tanıştığına memnun olan birine 'Ben de' (Me too) diye karşılık verilir.",
      },
      {
        id: "e5-1-t3-18",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The museum is ____ the library. You don't need to cross the street.",
        options: ["opposite", "next to", "under", "in"],
        correct: 1,
        explanation:
          "Caddeyi geçmeye gerek yoksa bu yerler 'yan yana' (next to) konumdadır.",
      },
      {
        id: "e5-1-t3-19",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I like playing computer games and watching cartoons. I ____ Art and Music.",
        options: ["hate", "enjoy", "dislike", "can't"],
        correct: 1,
        explanation:
          "Önceki cümlelerde sevdiği şeylerden bahsettiği için devamında da 'enjoy' (zevk almak) gelir.",
      },
      {
        id: "e5-1-t3-20",
        subject: "ingilizce",
        term: 1,
        prompt:
          "Where is the post office? - Go straight, ____ left and it is on your right.",
        options: ["turn", "go", "take", "cross"],
        correct: 0,
        explanation: "'Sola dön' anlamında 'turn left' kalıbı kullanılır.",
      },
    ],
    test4: [
      {
        id: "e5-1-t4-01",
        subject: "ingilizce",
        term: 1,
        prompt: "I ____ breakfast at 07:30, but my brother ____ it at 08:15.",
        options: ["have / have", "has / have", "have / has", "has / has"],
        correct: 2,
        explanation:
          "İngilizcede 'I' öznesi 'have', 'He/She/It' (my brother) özneleri 'has' fiilini kullanır.",
      },
      {
        id: "e5-1-t4-02",
        subject: "ingilizce",
        term: 1,
        prompt:
          "What is the matter with him? - He has a ____. He should see a dentist.",
        options: ["sore throat", "toothache", "stomachache", "backache"],
        correct: 1,
        explanation:
          "Diş hekimine (dentist) gitmesi gereken birinin 'diş ağrısı' (toothache) vardır.",
      },
      {
        id: "e5-1-t4-03",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ does Sally go to the library?' B: 'In the afternoons.'",
        options: ["Where", "What time", "When", "Who"],
        correct: 2,
        explanation:
          "Eylem zamanını (öğleden sonraları) sormak için 'When' (Ne zaman) kullanılır.",
      },
      {
        id: "e5-1-t4-04",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I have a terrible cold. I ____ go outside. I ____ stay in bed.",
        options: [
          "should / should",
          "shouldn't / shouldn't",
          "shouldn't / should",
          "should / shouldn't",
        ],
        correct: 2,
        explanation:
          "Ağır bir soğuk algınlığında dışarı çıkmamalı (shouldn't), yatakta kalmalıdır (should).",
      },
      {
        id: "e5-1-t4-05",
        subject: "ingilizce",
        term: 1,
        prompt: "Which of the following is 'NOT' a morning routine?",
        options: ["Get dressed", "Wash face", "Brush teeth", "Go to bed"],
        correct: 3,
        explanation:
          "Yatağa gitmek (Go to bed) bir akşam rutinidir, sabah rutini değildir.",
      },
      {
        id: "e5-1-t4-06",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'I have a fever.' B: 'You should ____.'",
        options: [
          "drink cold water",
          "take a warm shower",
          "eat candies",
          "play outside",
        ],
        correct: 1,
        explanation:
          "Ateşi olan (fever) birine ılık duş alması (take a warm shower) tavsiye edilir.",
      },
      {
        id: "e5-1-t4-07",
        subject: "ingilizce",
        term: 1,
        prompt:
          "Tom ____ homework after school, but he ____ computer games in the evening.",
        options: ["does / plays", "do / play", "does / play", "do / plays"],
        correct: 0,
        explanation:
          "Geniş zamanda 'He' (Tom) öznesi fiillere '-s' takısı getirir (does / plays).",
      },
      {
        id: "e5-1-t4-08",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ are you from?' B: 'I am from Greece. I am ____.'",
        options: [
          "Where / Greek",
          "Where / Greece",
          "What / Greek",
          "How / Greek",
        ],
        correct: 0,
        explanation:
          "Yer sormak için 'Where' kullanılır. Greece (Yunanistan) ülkesinden olan kişi Greek (Yunan) olur.",
      },
      {
        id: "e5-1-t4-09",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The pharmacy is ____ the bank and the pool. You can't miss it.",
        options: ["under", "between", "on", "at"],
        correct: 1,
        explanation:
          "İki yer arasında olma durumu 'between' edatı ile anlatılır.",
      },
      {
        id: "e5-1-t4-10",
        subject: "ingilizce",
        term: 1,
        prompt: "I am crazy about ____. I have many dolls and cars in my room.",
        options: [
          "solving puzzles",
          "playing chess",
          "collecting toys",
          "riding a bike",
        ],
        correct: 2,
        explanation:
          "Oda dolusu oyuncak bebek ve arabası olan biri oyuncak biriktirmeyi (collecting toys) seviyordur.",
      },
      {
        id: "e5-1-t4-11",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Can you ride a horse?' B: 'No, ____.'",
        options: ["I am not", "I can't", "I don't", "I haven't"],
        correct: 1,
        explanation:
          "'Can' ile sorulan sorulara yine 'can' veya 'can't' ile cevap verilir.",
      },
      {
        id: "e5-1-t4-12",
        subject: "ingilizce",
        term: 1,
        prompt: "Eight o'clock + Forty-five minutes = ____.",
        options: [
          "Quarter to nine",
          "Quarter past nine",
          "Half past eight",
          "Quarter past eight",
        ],
        correct: 0,
        explanation:
          "08:00 + 45 dk = 08:45. Bu da dokuza çeyrek var (Quarter to nine) demektir.",
      },
      {
        id: "e5-1-t4-13",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'I have a broken arm.' B: 'You ____ carry heavy things.'",
        options: ["should", "can", "mustn't", "do"],
        correct: 2,
        explanation:
          "Kolu kırık (broken arm) olan biri kesinlikle ağır şeyler taşımamalıdır (mustn't).",
      },
      {
        id: "e5-1-t4-14",
        subject: "ingilizce",
        term: 1,
        prompt: "Which subject is about numbers and calculations?",
        options: ["Social Studies", "Music", "Maths", "P.E."],
        correct: 2,
        explanation:
          "Sayılar ve hesaplamalarla ilgili olan ders Matematik (Maths) dersidir.",
      },
      {
        id: "e5-1-t4-15",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ is the post office?' B: 'It is opposite the park.'",
        options: ["What", "Where", "When", "Who"],
        correct: 1,
        explanation: "Konum sormak için 'Where' kullanılır.",
      },
      {
        id: "e5-1-t4-16",
        subject: "ingilizce",
        term: 1,
        prompt:
          "My sister ____ up at 10:00 on Sundays because she doesn't have school.",
        options: ["get", "gets", "is", "does"],
        correct: 1,
        explanation:
          "Tekil öznelerde (my sister) fiil '-s' takısı alır (gets up).",
      },
      {
        id: "e5-1-t4-17",
        subject: "ingilizce",
        term: 1,
        prompt: "I have a sore throat. I should ____.",
        options: [
          "drink cold coke",
          "eat ice-cream",
          "drink warm tea with lemon",
          "shout loudly",
        ],
        correct: 2,
        explanation:
          "Boğaz ağrısı (sore throat) olan biri limonlu ılık çay (warm tea with lemon) içmelidir.",
      },
      {
        id: "e5-1-t4-18",
        subject: "ingilizce",
        term: 1,
        prompt: "Which one is 'NOT' a health problem?",
        options: ["The flu", "A headache", "A backache", "Playing tennis"],
        correct: 3,
        explanation:
          "Tenis oynamak bir aktivitedir, bir sağlık sorunu değildir.",
      },
      {
        id: "e5-1-t4-19",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Do you like cartoons?' B: 'Yes, I ____ them.'",
        options: ["hate", "dislike", "love", "can't stand"],
        correct: 2,
        explanation:
          "Olumlu cevabı (Yes) sadece 'love' (sevmek) tamamlar; diğerleri olumsuz anlam taşır.",
      },
      {
        id: "e5-1-t4-20",
        subject: "ingilizce",
        term: 1,
        prompt: "Fifty + Twenty = ?",
        options: ["Sixty", "Seventy", "Eighty", "Ninety"],
        correct: 1,
        explanation: "50 + 20 = 70 (Seventy).",
      },
    ],
    test5: [
      {
        id: "e5-1-t5-01",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ is the concert hall?' B: 'Go straight, turn right and it is between the museum and the library.'",
        options: ["What", "Where", "When", "Who"],
        correct: 2,
        explanation:
          "Bir yerin konumunu veya adresini sormak için 'Where' (Nerede) soru kelimesi kullanılır.",
      },
      {
        id: "e5-1-t5-02",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I have a terrible toothache. I ____ eat candies or drink cold things.",
        options: ["should", "can", "shouldn't", "must"],
        correct: 2,
        explanation:
          "Diş ağrısı (toothache) çeken birine şeker yememesi veya soğuk içmemesi tavsiye edilir (shouldn't).",
      },
      {
        id: "e5-1-t5-03",
        subject: "ingilizce",
        term: 1,
        prompt: "My cousin is from Egypt. He is ____.",
        options: ["Egypt", "Egyptian", "English", "French"],
        correct: 1,
        explanation:
          "Egypt (Mısır) ülkesinden olanların milliyeti 'Egyptian'dır.",
      },
      {
        id: "e5-1-t5-04",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'Can he play dodgeball?' B: 'No, but he ____ play checkers.'",
        options: ["can", "do", "can't", "is"],
        correct: 0,
        explanation:
          "Cümledeki 'but' (ama) zıtlık verir. İlk kısım olumsuzsa (can't/no), ikinci kısım olumlu (can) olmalıdır.",
      },
      {
        id: "e5-1-t5-05",
        subject: "ingilizce",
        term: 1,
        prompt: "Which one is 'NOT' a school subject?",
        options: ["Science", "Maths", "Pharmacy", "History"],
        correct: 2,
        explanation:
          "Science, Maths ve History ders isimleridir; Pharmacy (Eczane) ise bir yer ismidir.",
      },
      {
        id: "e5-1-t5-06",
        subject: "ingilizce",
        term: 1,
        prompt: "Mark ____ homework at 18:00, but I ____ my homework at 16:30.",
        options: ["do / does", "does / do", "do / do", "does / does"],
        correct: 1,
        explanation: "He (Mark) öznesi 'does', I öznesi 'do' fiilini kullanır.",
      },
      {
        id: "e5-1-t5-07",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'What is the matter with you?' B: 'I have a ____. I need a tissue (mendil).'",
        options: ["broken leg", "runny nose", "backache", "toothache"],
        correct: 1,
        explanation:
          "Mendil ihtiyacı duyan birinin 'burnu akıyordur' (runny nose).",
      },
      {
        id: "e5-1-t5-08",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The cinema is ____ the stationery and the toy shop. It is in the middle.",
        options: ["next to", "opposite", "between", "near"],
        correct: 2,
        explanation:
          "İki yerin 'ortasında' (in the middle) olma durumu 'between' (arasında) edatıyla ifade edilir.",
      },
      {
        id: "e5-1-t5-09",
        subject: "ingilizce",
        term: 1,
        prompt: "Which activity is an 'indoor' hobby?",
        options: ["Camping", "Hiking", "Playing board games", "Fishing"],
        correct: 2,
        explanation:
          "Board games (masa başı oyunları) kapalı alanlarda (indoor) yapılır; diğerleri dış mekan aktiviteleridir.",
      },
      {
        id: "e5-1-t5-10",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ languages does she speak?' B: 'French and Spanish.'",
        options: ["What", "How many", "Who", "Where"],
        correct: 1,
        explanation:
          "Dillerin sayısını veya hangi diller olduğunu sormak için 'How many' (kaç tane) kalıbı kullanılır.",
      },
      {
        id: "e5-1-t5-11",
        subject: "ingilizce",
        term: 1,
        prompt: "My sister has a sore throat. She ____ drink cold water.",
        options: ["should", "mustn't", "can", "shouldn't"],
        correct: 3,
        explanation:
          "Boğaz ağrısı (sore throat) olan biri soğuk su içmemelidir (shouldn't).",
      },
      {
        id: "e5-1-t5-12",
        subject: "ingilizce",
        term: 1,
        prompt: "Ten o'clock + Fifteen minutes = ____.",
        options: [
          "Quarter past ten",
          "Quarter to eleven",
          "Half past ten",
          "Ten o'clock",
        ],
        correct: 0,
        explanation:
          "10:00 + 15 dakika = 10:15. Bu da 'onun on beş geçmesi' (quarter past ten) demektir.",
      },
      {
        id: "e5-1-t5-13",
        subject: "ingilizce",
        term: 1,
        prompt: "I am from France. I am French. I speak ____.",
        options: ["France", "French", "English", "Germany"],
        correct: 1,
        explanation:
          "Fransız olan biri Fransızca (French) konuşur. Ülke ve dil isimleri karıştırılmamalıdır.",
      },
      {
        id: "e5-1-t5-14",
        subject: "ingilizce",
        term: 1,
        prompt:
          "To go to the library, go straight and ____ the second left into Apple Street.",
        options: ["turn", "take", "go", "look"],
        correct: 1,
        explanation:
          "Yol tariflerinde 'ikinci soldan sap' anlamında 'take the second left' kullanılır.",
      },
      {
        id: "e5-1-t5-15",
        subject: "ingilizce",
        term: 1,
        prompt: "Which matching is 'WRONG'?",
        options: [
          "Headache - Head",
          "Stomachache - Stomach",
          "Toothache - Foot",
          "Backache - Back",
        ],
        correct: 2,
        explanation:
          "Toothache (diş ağrısı) dişle (tooth) ilgilidir, ayakla (foot) değil.",
      },
      {
        id: "e5-1-t5-16",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ is your favorite hoby?' B: 'Doing origami.'",
        options: ["What", "Who", "Where", "When"],
        correct: 0,
        explanation: "Hobinin ne olduğunu sormak için 'What' (Ne) kullanılır.",
      },
      {
        id: "e5-1-t5-17",
        subject: "ingilizce",
        term: 1,
        prompt: "I have a cough. I should ____.",
        options: [
          "drink cold coke",
          "eat ice-cream",
          "drink cough syrup",
          "shout",
        ],
        correct: 2,
        explanation:
          "Öksürüğü (cough) olan birinin öksürük şurubu (cough syrup) içmesi gerekir.",
      },
      {
        id: "e5-1-t5-18",
        subject: "ingilizce",
        term: 1,
        prompt:
          "Where is the post office? It is ____ the park. You must cross the street to go there.",
        options: ["opposite", "next to", "under", "on"],
        correct: 0,
        explanation: "Caddeyi geçmek gerekiyorsa yer 'karşıdadır' (opposite).",
      },
      {
        id: "e5-1-t5-19",
        subject: "ingilizce",
        term: 1,
        prompt: "My father ____ up very early every morning.",
        options: ["get", "gets", "is", "do"],
        correct: 1,
        explanation:
          "Geniş zamanda 'He' (my father) öznesi fiile '-s' takısı getirir (gets up).",
      },
      {
        id: "e5-1-t5-20",
        subject: "ingilizce",
        term: 1,
        prompt: "Sixty + Thirty = ?",
        options: ["Seventy", "Eighty", "Ninety", "One hundred"],
        correct: 2,
        explanation: "60 + 30 = 90 (Ninety).",
      },
    ],
    test6: [
      {
        id: "e5-1-t6-01",
        subject: "ingilizce",
        term: 1,
        prompt: "I am from Italy. I speak ____ and my nationality is ____.",
        options: [
          "Italy / Italian",
          "Italian / Italian",
          "Italian / Italy",
          "Italy / Italy",
        ],
        correct: 1,
        explanation:
          "İtalya'dan olan biri hem İtalyanca (Italian) konuşur hem de milliyeti İtalyan (Italian) olur.",
      },
      {
        id: "e5-1-t6-02",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ is the chemist's?' B: 'It is opposite the library.'",
        options: ["What", "When", "Who", "Where"],
        correct: 3,
        explanation:
          "Bir yerin konumunu sorarken 'Where' (Nerede) soru kelimesi kullanılır.",
      },
      {
        id: "e5-1-t6-03",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'What is the matter with him?' B: 'He has a ____. He should drink warm tea with lemon.'",
        options: ["broken leg", "sore throat", "toothache", "stomachache"],
        correct: 1,
        explanation:
          "Limonlu ılık çay içmesi önerilen birinin boğazı ağrıyordur (sore throat).",
      },
      {
        id: "e5-1-t6-04",
        subject: "ingilizce",
        term: 1,
        prompt: "My father ____ to work at 08:30 every morning.",
        options: ["go", "goes", "is", "doing"],
        correct: 1,
        explanation:
          "Geniş zamanda 'He' (my father) öznesi fiile '-es' takısı getirir (goes).",
      },
      {
        id: "e5-1-t6-05",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'I have a terrible backache.' B: 'You ____ carry heavy bags.'",
        options: ["should", "must", "can", "shouldn't"],
        correct: 3,
        explanation:
          "Sırtı ağrıyan (backache) birine ağır çantalar taşımaması tavsiye edilir (shouldn't).",
      },
      {
        id: "e5-1-t6-06",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The stationery is ____ the cinema and the cafe. It is between them.",
        options: ["under", "next to", "between", "on"],
        correct: 2,
        explanation:
          "İki yerin arasında olma durumu 'between' edatı ile ifade edilir.",
      },
      {
        id: "e5-1-t6-07",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I am interested in Information Technology. My favorite subject is ____.",
        options: ["I.T.", "Art", "Maths", "Music"],
        correct: 0,
        explanation:
          "Bilişim teknolojilerine ilgi duyan birinin favori dersi 'I.T.' (Bilişim) dersidir.",
      },
      {
        id: "e5-1-t6-08",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Can she play chess?' B: 'No, but she ____ play checkers.'",
        options: ["can", "do", "can't", "is"],
        correct: 0,
        explanation:
          "'But' (ama) bağlacı zıtlık verir. İlk kısım olumsuzsa ikinci kısım olumlu (can) olmalıdır.",
      },
      {
        id: "e5-1-t6-09",
        subject: "ingilizce",
        term: 1,
        prompt: "What time is it? (09:45)",
        options: [
          "It is a quarter past nine.",
          "It is a quarter to ten.",
          "It is half past nine.",
          "It is nine o'clock.",
        ],
        correct: 1,
        explanation: "09:45, 'on'a çeyrek var' (quarter to ten) demektir.",
      },
      {
        id: "e5-1-t6-10",
        subject: "ingilizce",
        term: 1,
        prompt: "I want to buy some medicine. Where should I go?",
        options: ["Bakery", "Library", "Pharmacy", "Cinema"],
        correct: 2,
        explanation: "İlaç (medicine) alınan yer eczanedir (pharmacy).",
      },
      {
        id: "e5-1-t6-11",
        subject: "ingilizce",
        term: 1,
        prompt: "I ____ up at 07:00, but my sister ____ up at 08:30.",
        options: ["get / gets", "gets / get", "get / get", "gets / gets"],
        correct: 0,
        explanation:
          "'I' öznesi fiilin yalın halini (get), 'she' (my sister) öznesi '-s' takılı halini (gets) alır.",
      },
      {
        id: "e5-1-t6-12",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'I have a high temperature.' B: 'You should ____.'",
        options: [
          "drink cold water",
          "take a warm shower",
          "eat candies",
          "shout",
        ],
        correct: 1,
        explanation:
          "Ateşi yüksek olan (high temperature) birine ılık duş (warm shower) önerilir.",
      },
      {
        id: "e5-1-t6-13",
        subject: "ingilizce",
        term: 1,
        prompt: "Which activity is an 'outdoor' game?",
        options: [
          "Blind man's buff",
          "Computer games",
          "Board games",
          "Puzzle",
        ],
        correct: 0,
        explanation:
          "Körebe (Blind man's buff) genellikle dışarıda oynanır; diğerleri kapalı alan hobileridir.",
      },
      {
        id: "e5-1-t6-14",
        subject: "ingilizce",
        term: 1,
        prompt:
          "To go to the museum, go straight and ____ the first right into Flower Street.",
        options: ["look", "turn", "take", "cross"],
        correct: 2,
        explanation:
          "Yol tariflerinde 'birinci sağdan sap' derken 'take the first right' kalıbı kullanılır.",
      },
      {
        id: "e5-1-t6-15",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ is your favorite hoby?' B: 'Riding a bike.'",
        options: ["What", "Who", "Where", "When"],
        correct: 0,
        explanation: "Hobinin ne olduğunu sormak için 'What' kullanılır.",
      },
      {
        id: "e5-1-t6-16",
        subject: "ingilizce",
        term: 1,
        prompt: "I am from France. I speak ____.",
        options: ["French", "France", "English", "Germany"],
        correct: 0,
        explanation:
          "Fransa'dan (France) olan biri Fransızca (French) konuşur.",
      },
      {
        id: "e5-1-t6-17",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The hospital is ____ the bank. You can't miss it, it's just next door.",
        options: ["next to", "opposite", "under", "between"],
        correct: 0,
        explanation:
          "'Next door' (kapı komşusu) ifadesi yerin 'yanında' (next to) olduğunu gösterir.",
      },
      {
        id: "e5-1-t6-18",
        subject: "ingilizce",
        term: 1,
        prompt: "Which subject is about numbers and calculations?",
        options: ["History", "Music", "Maths", "P.E."],
        correct: 2,
        explanation:
          "Sayılar ve hesaplamalar Matematik (Maths) dersinin konusudur.",
      },
      {
        id: "e5-1-t6-19",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Can you swim?' B: 'Yes, but I ____ swim very well.'",
        options: ["can", "do", "can't", "is"],
        correct: 2,
        explanation:
          "'Yes, but' yapısı bir kısıtlama getirir: 'Evet ama çok iyi yüzemem' (can't).",
      },
      {
        id: "e5-1-t6-20",
        subject: "ingilizce",
        term: 1,
        prompt: "Seventy + Twenty = ?",
        options: ["Eighty", "Ninety", "One hundred", "Sixty"],
        correct: 1,
        explanation: "70 + 20 = 90 (Ninety).",
      },
    ],
    test7: [
      {
        id: "e5-1-t7-01",
        subject: "ingilizce",
        term: 1,
        prompt: "I am from Japan. I speak ____ and my nationality is ____.",
        options: [
          "Japan / Japanese",
          "Japanese / Japanese",
          "Japanese / Japan",
          "Japan / Japan",
        ],
        correct: 1,
        explanation:
          "Japonya'dan olan birinin dili de (Japanese) milliyeti de (Japanese) aynı kelimeyle ifade edilir.",
      },
      {
        id: "e5-1-t7-02",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ is your favorite subject?' B: 'I love experiments, so it is Science.'",
        options: ["Where", "Who", "What", "When"],
        correct: 2,
        explanation:
          "Bir şeyin ne olduğunu (favori dersin ne?) sormak için 'What' kullanılır.",
      },
      {
        id: "e5-1-t7-03",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The library is ____ the park. You must cross the street to go there.",
        options: ["next to", "opposite", "under", "between"],
        correct: 1,
        explanation:
          "Caddeyi geçmek (cross the street) gerekiyorsa, o yer 'karşıdadır' (opposite).",
      },
      {
        id: "e5-1-t7-04",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I ____ my teeth after breakfast, but my little sister ____ them before breakfast.",
        options: [
          "brush / brush",
          "brushes / brush",
          "brush / brushes",
          "brushes / brushes",
        ],
        correct: 2,
        explanation:
          "'I' öznesi takısız (brush), 'she' (little sister) öznesi '-es' takılı (brushes) fiil alır.",
      },
      {
        id: "e5-1-t7-05",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'What is the matter with her?' B: 'She has a ____. She shouldn't drink cold beverages.'",
        options: ["broken arm", "sore throat", "backache", "headache"],
        correct: 1,
        explanation:
          "Soğuk içecekler içmemesi gereken birinin boğazı ağrıyordur (sore throat).",
      },
      {
        id: "e5-1-t7-06",
        subject: "ingilizce",
        term: 1,
        prompt:
          "The mosque is ____ the museum and the bank. It is in the middle.",
        options: ["between", "behind", "near", "on"],
        correct: 0,
        explanation:
          "İki yerin 'ortasında' (in the middle) olma durumu 'between' (arasında) edatıyla anlatılır.",
      },
      {
        id: "e5-1-t7-07",
        subject: "ingilizce",
        term: 1,
        prompt: "I am good at solving problems. My favorite lesson is ____.",
        options: ["Music", "P.E.", "Maths", "Art"],
        correct: 2,
        explanation:
          "Problem çözme yeteneği Matematik (Maths) dersiyle ilgilidir.",
      },
      {
        id: "e5-1-t7-08",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Can you play chess?' B: 'No, but I ____ play checkers.'",
        options: ["can", "am", "can't", "is"],
        correct: 0,
        explanation:
          "'But' bağlacı zıtlık verir. İlk kısım 'No' (can't) ise ikinci kısım 'can' olmalıdır.",
      },
      {
        id: "e5-1-t7-09",
        subject: "ingilizce",
        term: 1,
        prompt: "What time is it? (10:15)",
        options: [
          "It is quarter to ten.",
          "It is quarter past ten.",
          "It is half past ten.",
          "It is ten o'clock.",
        ],
        correct: 1,
        explanation: "10:15, 'onu çeyrek geçiyor' (quarter past ten) demektir.",
      },
      {
        id: "e5-1-t7-10",
        subject: "ingilizce",
        term: 1,
        prompt: "I want to watch a movie. Where should I go?",
        options: ["Bakery", "Pharmacy", "Cinema", "Library"],
        correct: 2,
        explanation: "Film izlemek için sinemaya (cinema) gidilir.",
      },
      {
        id: "e5-1-t7-11",
        subject: "ingilizce",
        term: 1,
        prompt: "Which of the following is an 'outdoor' game?",
        options: ["Hide and seek", "Board games", "Chess", "Computer games"],
        correct: 0,
        explanation: "Saklambaç (Hide and seek) dışarıda oynanan bir oyundur.",
      },
      {
        id: "e5-1-t7-12",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'I have a high temperature.' B: 'You ____ stay in bed and rest.'",
        options: ["can't", "should", "shouldn't", "mustn't"],
        correct: 1,
        explanation:
          "Ateşi olan birine yatakta kalıp dinlenmesi tavsiye edilir (should).",
      },
      {
        id: "e5-1-t7-13",
        subject: "ingilizce",
        term: 1,
        prompt: "To go to the toy shop, go straight and ____ the first right.",
        options: ["look", "turn", "take", "cross"],
        correct: 2,
        explanation:
          "Yol tariflerinde 'sağdan sap' derken 'take the first/second right' kullanılır.",
      },
      {
        id: "e5-1-t7-14",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ languages do you speak?' B: 'Two. German and English.'",
        options: ["Where", "What", "How many", "Who"],
        correct: 2,
        explanation:
          "Kaç tane (sayılabilen) olduğunu sormak için 'How many' kullanılır.",
      },
      {
        id: "e5-1-t7-15",
        subject: "ingilizce",
        term: 1,
        prompt: "I enjoy ____. I have a tent and a flashlight.",
        options: ["fishing", "camping", "hiking", "cycling"],
        correct: 1,
        explanation:
          "Çadır (tent) ve el feneri (flashlight) kamp yapmak (camping) ile ilgilidir.",
      },
      {
        id: "e5-1-t7-16",
        subject: "ingilizce",
        term: 1,
        prompt: "My father is from the UK. He is ____.",
        options: ["American", "German", "British", "French"],
        correct: 2,
        explanation:
          "Birleşik Krallık (UK) vatandaşı olan kişilere 'British' denir.",
      },
      {
        id: "e5-1-t7-17",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'Excuse me, ____ is the post office?' B: 'It is next to the cafe.'",
        options: ["What", "Who", "Where", "When"],
        correct: 2,
        explanation: "Yer sormak için 'Where' kullanılır.",
      },
      {
        id: "e5-1-t7-18",
        subject: "ingilizce",
        term: 1,
        prompt: "Which matching is 'WRONG'?",
        options: [
          "Art - Painting",
          "Maths - Numbers",
          "P.E. - Singing",
          "Science - Experiments",
        ],
        correct: 2,
        explanation:
          "P.E. (Beden Eğitimi) dersi sporla ilgilidir, şarkı söylemek (singing) Müzik dersiyle ilgilidir.",
      },
      {
        id: "e5-1-t7-19",
        subject: "ingilizce",
        term: 1,
        prompt: "I don't like horror movies. They are ____.",
        options: ["funny", "frightening", "exciting", "enjoyable"],
        correct: 1,
        explanation:
          "Korku filmlerini sevmeme nedeni onların 'korkutucu' (frightening) olmasıdır.",
      },
      {
        id: "e5-1-t7-20",
        subject: "ingilizce",
        term: 1,
        prompt: "Sixty + Twenty = ?",
        options: ["Seventy", "Eighty", "Ninety", "One hundred"],
        correct: 1,
        explanation: "60 + 20 = 80 (Eighty).",
      },
    ],
    test8: [
      {
        id: "e5-1-t8-01",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I ____ my face and hands in the morning, but my father ____ a shower.",
        options: [
          "wash / take",
          "washes / takes",
          "wash / takes",
          "washes / take",
        ],
        correct: 2,
        explanation:
          "'I' öznesi fiilin yalın halini (wash), 'he' (my father) öznesi '-s' takılı halini (takes) alır.",
      },
      {
        id: "e5-1-t8-02",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: '____ is the barber's?' B: 'It is opposite the toy shop. You should cross the street.'",
        options: ["What", "Where", "When", "Who"],
        correct: 1,
        explanation: "Yer/konum sormak için 'Where' (Nerede) kullanılır.",
      },
      {
        id: "e5-1-t8-03",
        subject: "ingilizce",
        term: 1,
        prompt:
          "I have a terrible cough. I ____ drink cold water and I ____ see a doctor.",
        options: [
          "should / shouldn't",
          "shouldn't / should",
          "should / should",
          "shouldn't / shouldn't",
        ],
        correct: 1,
        explanation:
          "Öksürüğü olan biri soğuk su içmemeli (shouldn't), doktora gitmelidir (should).",
      },
      {
        id: "e5-1-t8-04",
        subject: "ingilizce",
        term: 1,
        prompt: "What time is it? (07:45)",
        options: [
          "It is quarter past seven.",
          "It is quarter to eight.",
          "It is half past seven.",
          "It is eight o'clock.",
        ],
        correct: 1,
        explanation: "07:45, 'sekize çeyrek var' (quarter to eight) demektir.",
      },
      {
        id: "e5-1-t8-05",
        subject: "ingilizce",
        term: 1,
        prompt: "Sally is from Spain. She speaks ____.",
        options: ["Spain", "Spanish", "French", "English"],
        correct: 1,
        explanation:
          "İspanya'dan (Spain) olan biri İspanyolca (Spanish) konuşur.",
      },
      {
        id: "e5-1-t8-06",
        subject: "ingilizce",
        term: 1,
        prompt: "Which subject is about doing sports and physical activities?",
        options: ["Maths", "P.E.", "Science", "Social Studies"],
        correct: 1,
        explanation:
          "Spor ve fiziksel aktiviteler Beden Eğitimi (P.E.) dersinin konusudur.",
      },
      {
        id: "e5-1-t8-07",
        subject: "ingilizce",
        term: 1,
        prompt:
          "To go to the museum, go straight and ____ the second right into King Street.",
        options: ["turn", "look", "take", "cross"],
        correct: 2,
        explanation:
          "Yol tariflerinde 'ikinci sağdan sap' derken 'take the second right' kalıbı kullanılır.",
      },
      {
        id: "e5-1-t8-08",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'I have a broken leg.' B: 'You ____ play football.'",
        options: ["should", "can", "mustn't", "do"],
        correct: 2,
        explanation:
          "Bacağı kırık olan biri kesinlikle futbol oynamamalıdır (mustn't).",
      },
      {
        id: "e5-1-t8-09",
        subject: "ingilizce",
        term: 1,
        prompt: "I am interested in Art. I like ____.",
        options: [
          "solving problems",
          "doing experiments",
          "sculpting and painting",
          "playing football",
        ],
        correct: 2,
        explanation:
          "Resim ve heykel (sculpting and painting) Görsel Sanatlar dersiyle ilgilidir.",
      },
      {
        id: "e5-1-t8-10",
        subject: "ingilizce",
        term: 1,
        prompt: "A: '____ languages do you speak?' B: 'Turkish and German.'",
        options: ["What", "How many", "Where", "Who"],
        correct: 1,
        explanation: "Dillerin sayısını sormak için 'How many' kullanılır.",
      },
      {
        id: "e5-1-t8-11",
        subject: "ingilizce",
        term: 1,
        prompt: "I ____ breakfast at 08:00 every morning.",
        options: ["do", "has", "have", "gets"],
        correct: 2,
        explanation:
          "'I' öznesi kahvaltı yapmak eylemi için 'have' fiilini kullanır.",
      },
      {
        id: "e5-1-t8-12",
        subject: "ingilizce",
        term: 1,
        prompt:
          "Where is the post office? It is ____ the cafe. It is behind it.",
        options: ["next to", "opposite", "behind", "on"],
        correct: 2,
        explanation:
          "Soruda 'arkasında' ipucu verildiği için 'behind' seçilmelidir.",
      },
      {
        id: "e5-1-t8-13",
        subject: "ingilizce",
        term: 1,
        prompt: "I am very ____. Can I have a glass of fruit juice?",
        options: ["hungry", "thirsty", "tired", "happy"],
        correct: 1,
        explanation: "İçecek isteyen biri 'susamıştır' (thirsty).",
      },
      {
        id: "e5-1-t8-14",
        subject: "ingilizce",
        term: 1,
        prompt: "Fifty + Forty = ?",
        options: ["Eighty", "Ninety", "One hundred", "Seventy"],
        correct: 1,
        explanation: "50 + 40 = 90 (Ninety).",
      },
      {
        id: "e5-1-t8-15",
        subject: "ingilizce",
        term: 1,
        prompt:
          "A: 'Do you like cartoons?' B: 'No, I ____ them. They are boring.'",
        options: ["love", "dislike", "enjoy", "can"],
        correct: 1,
        explanation: "Sıkıcı bulduğu bir şeyi sevmiyordur (dislike).",
      },
      {
        id: "e5-1-t8-16",
        subject: "ingilizce",
        term: 1,
        prompt: "My mother ____ up at 06:30 to prepare breakfast.",
        options: ["get", "is", "gets", "do"],
        correct: 2,
        explanation: "Tekil öznelerde (she/my mother) fiil '-s' takısı alır.",
      },
      {
        id: "e5-1-t8-17",
        subject: "ingilizce",
        term: 1,
        prompt: "I need to buy some medicine. I am at the ____.",
        options: ["Bakery", "Library", "Pharmacy", "Cinema"],
        correct: 2,
        explanation: "İlaç alınan yer eczanedir (pharmacy).",
      },
      {
        id: "e5-1-t8-18",
        subject: "ingilizce",
        term: 1,
        prompt: "Which one is an 'indoor' activity?",
        options: ["Camping", "Hiking", "Playing chess", "Fishing"],
        correct: 2,
        explanation:
          "Satranç içeride oynanır (indoor); diğerleri dış mekan aktiviteleridir.",
      },
      {
        id: "e5-1-t8-19",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'Nice to meet you, Jane.' B: '____.'",
        options: ["Hello", "Fine, thanks", "Me too", "Goodbye"],
        correct: 2,
        explanation:
          "Tanışma ifadesine karşılık 'Me too' (Ben de memnun oldum) denir.",
      },
      {
        id: "e5-1-t8-20",
        subject: "ingilizce",
        term: 1,
        prompt: "A: 'I have a fever.' B: 'You ____ take an aspirin and rest.'",
        options: ["should", "shouldn't", "can't", "mustn't"],
        correct: 0,
        explanation:
          "Ateşi olan birine ilaç alıp dinlenmesi tavsiye edilir (should).",
      },
    ],
  },
  term2: {
    test1: [
      {
        id: "e5-2-06",
        subject: "ingilizce",
        term: 2,
        prompt: "What time is it? (08:30)",
        options: [
          "It is eight o'clock.",
          "It is half past eight.",
          "It is quarter past eight.",
          "It is nine o'clock.",
        ],
        correct: 1,
        explanation: "Buçuk yarım demektir.",
      },
      {
        id: "e5-2-07",
        subject: "ingilizce",
        term: 2,
        prompt: "I ____ my teeth every morning.",
        options: ["wash", "comb", "brush", "eat"],
        correct: 2,
        explanation: "Fırçalamak brush'tır.",
      },
      {
        id: "e5-2-08",
        subject: "ingilizce",
        term: 2,
        prompt: "He ____ lunch at 12 o'clock.",
        options: ["has", "have", "do", "does"],
        correct: 0,
        explanation: "He has alır.",
      },
      {
        id: "e5-2-09",
        subject: "ingilizce",
        term: 2,
        prompt: "Would you like some cake?",
        options: ["Yes, please", "No, I am not", "I am ten", "Fine, thanks"],
        correct: 0,
        explanation: "Kabul ederken Yes please.",
      },
      {
        id: "e5-2-10",
        subject: "ingilizce",
        term: 2,
        prompt: "Which animal lives in the forest?",
        options: ["Cow", "Chicken", "Bear", "Cat"],
        correct: 2,
        explanation: "Ayı ormanda yaşar.",
      },
      {
        id: "e5-2-12",
        subject: "ingilizce",
        term: 2,
        prompt: "I feel ____. I need a glass of water.",
        options: ["hungry", "happy", "thirsty", "tired"],
        correct: 2,
        explanation: "Susayan su ister.",
      },
      {
        id: "e5-2-14",
        subject: "ingilizce",
        term: 2,
        prompt: "How can I go to the hospital? - ____ straight and turn left.",
        options: ["Go", "Read", "Wait", "Look"],
        correct: 0,
        explanation: "Gitmek go'dur.",
      },
      {
        id: "e5-zn-12",
        subject: "ingilizce",
        term: 2,
        prompt: "Which one is a health problem?",
        options: ["Happy", "Broken leg", "Hungry", "Tall"],
        correct: 1,
        explanation: "Kırık bacak problemdir.",
      },
      {
        id: "e5-zn-14",
        subject: "ingilizce",
        term: 2,
        prompt: "I ____ breakfast every morning.",
        options: ["do", "go", "have", "play"],
        correct: 2,
        explanation: "Kahvaltı yapmak have'dir.",
      },
      {
        id: "e5-zn-16",
        subject: "ingilizce",
        term: 2,
        prompt: "I am thirsty. I want to drink ____.",
        options: ["Pizza", "Water", "Sandwich", "Apple"],
        correct: 1,
        explanation: "Su içilir.",
      },
      {
        id: "e5-zn-18",
        subject: "ingilizce",
        term: 2,
        prompt: "What is the weather like? - It is ____. Take your umbrella.",
        options: ["Sunny", "Rainy", "Hot", "Windy"],
        correct: 1,
        explanation: "Yağmurda şemsiye alınır.",
      },
      {
        id: "e5-zn-20",
        subject: "ingilizce",
        term: 2,
        prompt: "Dogs are ____ animals.",
        options: ["Wild", "Jungle", "Dangerous", "Friendly"],
        correct: 3,
        explanation: "Dost canlısıdırlar.",
      },
      {
        id: "e5-hard-nv-02",
        subject: "ingilizce",
        term: 2,
        prompt:
          "Doctor: 'What is the matter with you?' Patient: 'I feel very cold and I am shivering.' Doctor: 'You have ____.'",
        options: ["a broken leg", "a toothache", "the flu", "a sore throat"],
        correct: 2,
        explanation: "Titreme grip belirtisidir.",
      },
      {
        id: "e5-hard-nv-03",
        subject: "ingilizce",
        term: 2,
        prompt: "Which of the following is 'NOT' a morning routine?",
        options: [
          "Get out of bed",
          "Have breakfast",
          "Do homework",
          "Wash hands and face",
        ],
        correct: 2,
        explanation: "Ödev akşam yapılır.",
      },
      {
        id: "e5-hard-nv-05",
        subject: "ingilizce",
        term: 2,
        prompt: "Tom: '____ is the party?' Jerry: 'It is at eight o'clock.'",
        options: ["Where", "What time", "Who", "How many"],
        correct: 1,
        explanation: "Zaman sorulur.",
      },
      {
        id: "e5-adv-02",
        subject: "ingilizce",
        term: 2,
        prompt: "A: '____ is the chemist's?' B: 'It is opposite the bank.'",
        options: ["What", "Who", "Where", "When"],
        correct: 2,
        explanation: "Yer sormak Where.",
      },
      {
        id: "e5-adv-03",
        subject: "ingilizce",
        term: 2,
        prompt: "Which activity is 'not' related to health and fitness?",
        options: ["Hiking", "Eating junk food", "Cycling", "Jogging"],
        correct: 1,
        explanation: "Abur cubur zararlıdır.",
      },
      {
        id: "e5-adv-05",
        subject: "ingilizce",
        term: 2,
        prompt:
          "Sally: 'I have a high temperature and a backache.' Advice: 'You ____ go outside.'",
        options: ["should", "can", "mustn't", "don't"],
        correct: 2,
        explanation: "Çıkmamalıdır.",
      },
    ],
    test2: [],
  },
};
