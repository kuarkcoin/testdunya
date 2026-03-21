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
        prompt: "What time is it in the picture?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-01.webp",
        options: [
          "It is eight o'clock.",
          "It is half past eight.",
          "It is quarter past eight.",
          "It is nine o'clock."
        ],
        correct: 1,
        explanation: "Görselde saat 08:30'dur. 'Buçuk' anlamında 'half past' kullanılır."
      },
      {
        id: "e5-1-t2-02",
        subject: "ingilizce",
        term: 1,
        prompt: "Look at the picture. What does he do every morning?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-02.webp",
        options: [
          "He washes his face.",
          "He combs his hair.",
          "He brushes his teeth.",
          "He eats breakfast."
        ],
        correct: 2,
        explanation: "Görseldeki çocuk dişlerini fırçalamaktadır. Diş fırçalamak 'brush teeth' demektir."
      },
      {
        id: "e5-1-t2-03",
        subject: "ingilizce",
        term: 1,
        prompt: "According to the picture, she ________ lunch at school.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-03.webp",
        options: ["has", "have", "do", "does"],
        correct: 0,
        explanation: "Görselde öğle yemeği yiyen bir kız var. 'She' öznesi ile 'have' fiili 'has' şekline dönüşür."
      },
      {
        id: "e5-1-t2-04",
        subject: "ingilizce",
        term: 1,
        prompt: "Which game are the children playing in the picture?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-04.webp",
        options: ["Tag", "Dodgeball", "Blind man's buff", "Hide and seek"],
        correct: 2,
        explanation: "Görselde gözleri bağlı bir şekilde oynayan çocuklar vardır. Körebe 'Blind man's buff' demektir."
      },
      {
        id: "e5-1-t2-05",
        subject: "ingilizce",
        term: 1,
        prompt: "Look at the flag. Where is he from?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-05.webp",
        options: [
          "He is from France.",
          "He is from Germany.",
          "He is from Spain.",
          "He is from Italy."
        ],
        correct: 1,
        explanation: "Görseldeki bayrak Almanya (Germany) bayrağıdır."
      },
      {
        id: "e5-1-t2-06",
        subject: "ingilizce",
        term: 1,
        prompt: "What is the matter with her in the picture?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-06.webp",
        options: [
          "She has a backache.",
          "She has a broken arm.",
          "She has a sore throat.",
          "She has a toothache."
        ],
        correct: 2,
        explanation: "Görseldeki kız eliyle boğazını tutmaktadır, bu da boğaz ağrısı (sore throat) olduğunu gösterir."
      },
      {
        id: "e5-1-t2-07",
        subject: "ingilizce",
        term: 1,
        prompt: "Look at the sign. To go to the hospital, you should ________.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-07.webp",
        options: [
          "go straight",
          "turn right",
          "turn left",
          "cross the street"
        ],
        correct: 2,
        explanation: "Görseldeki ok sola dönüşü göstermektedir. Sola dönmek 'turn left' demektir."
      },
      {
        id: "e5-1-t2-08",
        subject: "ingilizce",
        term: 1,
        prompt: "He has a broken leg. He ________ play football.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-08.webp",
        options: ["should", "must", "can", "mustn't"],
        correct: 3,
        explanation: "Görselde bacağı kırık bir çocuk ve üzeri çizilmiş bir futbol topu var. Kesinlikle oynamamalıdır (mustn't)."
      },
      {
        id: "e5-1-t2-09",
        subject: "ingilizce",
        term: 1,
        prompt: "According to the picture, the bird ________ sing, but it ________ play the guitar.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-09.webp",
        options: [
          "can / can",
          "can't / can",
          "can / can't",
          "can't / can't"
        ],
        correct: 2,
        explanation: "Görselde kuşun şarkı söyleyebildiği (can) ama gitar çalamadığı (can't) gösterilmektedir."
      },
      {
        id: "e5-1-t2-10",
        subject: "ingilizce",
        term: 1,
        prompt: "What is his favorite hobby?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-10.webp",
        options: [
          "Doing origami",
          "Collecting stamps",
          "Playing chess",
          "Fishing"
        ],
        correct: 1,
        explanation: "Görselde büyüteçle pulları inceleyen biri vardır. Pul biriktirmek 'collecting stamps' demektir."
      },
      {
        id: "e5-1-t2-11",
        subject: "ingilizce",
        term: 1,
        prompt: "Where is the bank? It is ________ the cafe and the school.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-11.webp",
        options: ["under", "next to", "opposite", "between"],
        correct: 3,
        explanation: "Görselde banka, kafe ile okulun 'arasında' (between) yer almaktadır."
      },
      {
        id: "e5-1-t2-12",
        subject: "ingilizce",
        term: 1,
        prompt: "He likes playing chess, but he ________ playing football.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-12.webp",
        options: ["loves", "dislikes", "enjoys", "is"],
        correct: 1,
        explanation: "Görselde çocuğun futboldan hoşlanmadığı yüz ifadesiyle belirtilmiştir (dislikes)."
      },
      {
        id: "e5-1-t2-13",
        subject: "ingilizce",
        term: 1,
        prompt: "What is the matter with the child in the picture? He has ________.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-13.webp",
        options: [
          "the flu",
          "a toothache",
          "a broken arm",
          "a backache"
        ],
        correct: 0,
        explanation: "Yatakta titreyen, ağzında derece olan ve yanında peçete bulunan çocuğun gribi (the flu) vardır."
      },
      {
        id: "e5-1-t2-14",
        subject: "ingilizce",
        term: 1,
        prompt: "How does he go to school every morning?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-14.webp",
        options: ["By car", "On foot", "By bus", "By bike"],
        correct: 2,
        explanation: "Görselde öğrenci bir okul otobüsüne binmektedir (by bus)."
      },
      {
        id: "e5-1-t2-15",
        subject: "ingilizce",
        term: 1,
        prompt: "Look at the map. She is from Turkey. She speaks ________.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-15.webp",
        options: ["Turkey", "Turkish", "English", "Germany"],
        correct: 1,
        explanation: "Türkiye'den olan biri Türkçe (Turkish) konuşur. Ülke ve dil isimleri karıştırılmamalıdır."
      },
      {
        id: "e5-1-t2-16",
        subject: "ingilizce",
        term: 1,
        prompt: "Where is the pharmacy? It is ________ the hospital. You must cross the street.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-16.webp",
        options: ["next to", "behind", "in front of", "opposite"],
        correct: 3,
        explanation: "Görselde eczane ve hastane yolun karşılıklı iki tarafındadır (opposite)."
      },
      {
        id: "e5-1-t2-17",
        subject: "ingilizce",
        term: 1,
        prompt: "Look at the objects. Which school subject is this?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-17.webp",
        options: ["Maths", "Art", "Science", "History"],
        correct: 2,
        explanation: "Görseldeki mikroskop, deney tüpleri ve koruyucu gözlük Fen Bilimleri (Science) dersine aittir."
      },
      {
        id: "e5-1-t2-18",
        subject: "ingilizce",
        term: 1,
        prompt: "He has a terrible stomachache. He ________ eat fast food.",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-18.webp",
        options: ["should", "can", "shouldn't", "must"],
        correct: 2,
        explanation: "Karın ağrısı çeken biri hamburger gibi hazır yiyecekler yememelidir (shouldn't). Görseldeki iptal işareti bunu destekler."
      },
      {
        id: "e5-1-t2-19",
        subject: "ingilizce",
        term: 1,
        prompt: "Look at the clock. What time does she get up?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-19.webp",
        options: [
          "She gets up at quarter to seven.",
          "She gets up at quarter past seven.",
          "She gets up at half past seven.",
          "She gets up at seven o'clock."
        ],
        correct: 1,
        explanation: "Görselde saat 07:15'i göstermektedir. 15 geçiyor demek için 'quarter past' kalıbı kullanılır."
      },
      {
        id: "e5-1-t2-20",
        subject: "ingilizce",
        term: 1,
        prompt: "What are they doing in the picture?",
        imageUrl: "/images/grade5/ingilizce/test2/e5-t2-img-20.webp",
        options: [
          "They are hiking.",
          "They are fishing.",
          "They are camping.",
          "They are doing origami."
        ],
        correct: 2,
        explanation: "Görselde çadır kurmuş olan çocuklar vardır. Bu eylem kamp yapmak (camping) anlamına gelir."
      }
    ],
     
    test3: [
      {
        "id": "e5-1-t3-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the flag. Where is she from?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-01.webp",
        "options": [
          "She is from Japan.",
          "She is from Spain.",
          "She is from France.",
          "She is from Britain."
        ],
        "correct": 0,
        "explanation": "Görseldeki bayrak, beyaz zemin üzerine kırmızı daireden oluşan Japonya (Japan) bayrağıdır."
      },
      {
        "id": "e5-1-t3-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the objects. Which school subject is this?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-02.webp",
        "options": [
          "Maths",
          "Science",
          "Music",
          "P.E."
        ],
        "correct": 2,
        "explanation": "Görseldeki notalar ve enstrümanlar Müzik (Music) dersine aittir."
      },
      {
        "id": "e5-1-t3-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, what language does he speak?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-03.webp",
        "options": [
          "English",
          "French",
          "Turkish",
          "German"
        ],
        "correct": 1,
        "explanation": "Görseldeki Eyfel Kulesi Fransa'yı temsil eder. Oradaki biri Fransızca (French) konuşur."
      },
      {
        "id": "e5-1-t3-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the sign. To go to the park, you should ________.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-04.webp",
        "options": [
          "go straight",
          "turn left",
          "turn right",
          "cross the street"
        ],
        "correct": 2,
        "explanation": "Görseldeki ok sağa dönüşü göstermektedir. Sağa dönmek 'turn right' demektir."
      },
      {
        "id": "e5-1-t3-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the cat in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-05.webp",
        "options": [
          "It is under the table.",
          "It is on the table.",
          "It is next to the table.",
          "It is behind the table."
        ],
        "correct": 0,
        "explanation": "Kedi masanın altındadır. 'Altında' kelimesinin İngilizcesi 'under'dır."
      },
      {
        "id": "e5-1-t3-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "I am hungry. I want to buy some bread. I should go to the ________.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-06.webp",
        "options": [
          "pharmacy",
          "bakery",
          "hospital",
          "library"
        ],
        "correct": 1,
        "explanation": "Görselde taze ekmeklerin olduğu bir fırın görülmektedir. Fırın 'bakery' demektir."
      },
      {
        "id": "e5-1-t3-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the cafe? It is ________ the cinema and the toy shop.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-07.webp",
        "options": [
          "opposite",
          "next to",
          "between",
          "behind"
        ],
        "correct": 2,
        "explanation": "Görselde kafe, sinema ile oyuncakçının 'arasında' (between) yer almaktadır."
      },
      {
        "id": "e5-1-t3-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Which game is this in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-08.webp",
        "options": [
          "Checkers",
          "Chess",
          "Tic-tac-toe",
          "Dodgeball"
        ],
        "correct": 2,
        "explanation": "Görseldeki X ve O işaretlerinden oluşan oyun 'Tic-tac-toe' (XOX) oyunudur."
      },
      {
        "id": "e5-1-t3-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is her hobby?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-09.webp",
        "options": [
          "Doing origami",
          "Playing board games",
          "Fishing",
          "Collecting stamps"
        ],
        "correct": 0,
        "explanation": "Görseldeki kız kağıt katlayarak şekiller yapmaktadır. Bu eylem 'doing origami'dir."
      },
      {
        "id": "e5-1-t3-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, he ________ swim, but he ________ ride a bike.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-10.webp",
        "options": [
          "can / can",
          "can't / can",
          "can / can't",
          "can't / can't"
        ],
        "correct": 2,
        "explanation": "Görselde yüzme eyleminde yeşil tik (can), bisiklete binmede kırmızı çarpı (can't) vardır."
      },
      {
        "id": "e5-1-t3-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. He ________ playing dodgeball.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-11.webp",
        "options": [
          "hates",
          "loves",
          "dislikes",
          "can't stand"
        ],
        "correct": 1,
        "explanation": "Çocuğun mutlu yüz ifadesi yakantop oynamayı 'çok sevdiğini' (loves) göstermektedir."
      },
      {
        "id": "e5-1-t3-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. What time is it?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-12.webp",
        "options": [
          "It is quarter to ten.",
          "It is quarter past ten.",
          "It is half past ten.",
          "It is ten o'clock."
        ],
        "correct": 1,
        "explanation": "Görselde saat 10:15'i göstermektedir. 'Onu çeyrek geçiyor' ifadesi 'quarter past ten'dir."
      },
      {
        "id": "e5-1-t3-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is he doing in the morning?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-13.webp",
        "options": [
          "He is washing his face.",
          "He is getting dressed.",
          "He is having breakfast.",
          "He is sleeping."
        ],
        "correct": 1,
        "explanation": "Görselde üzerine okul kıyafetlerini giyen bir çocuk vardır (getting dressed)."
      },
      {
        "id": "e5-1-t3-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "I wake up at ________ every morning.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-14.webp",
        "options": [
          "half past five",
          "half past six",
          "five o'clock",
          "quarter past five"
        ],
        "correct": 0,
        "explanation": "Görseldeki çalar saat 05:30'u göstermektedir. Bu da 'half past five' demektir."
      },
      {
        "id": "e5-1-t3-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with him in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-15.webp",
        "options": [
          "He has a headache.",
          "He has a toothache.",
          "He has the flu.",
          "He has a backache."
        ],
        "correct": 1,
        "explanation": "Eliyle yanağını tutan ve acı çeken çocuğun diş ağrısı (toothache) vardır."
      },
      {
        "id": "e5-1-t3-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "She has a cough. She ________ drink cold water.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-16.webp",
        "options": [
          "should",
          "can",
          "must",
          "shouldn't"
        ],
        "correct": 3,
        "explanation": "Görselde öksüren bir kız ve üzeri çarpı ile çizilmiş soğuk bir içecek var. Soğuk su içmemelidir (shouldn't)."
      },
      {
        "id": "e5-1-t3-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He needs a tissue because he has a ________.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-17.webp",
        "options": [
          "broken arm",
          "stomachache",
          "runny nose",
          "sore throat"
        ],
        "correct": 2,
        "explanation": "Burnu akan ve mendil kullanan çocuğun durumu 'runny nose' (burun akıntısı) olarak ifade edilir."
      },
      {
        "id": "e5-1-t3-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He cut his finger. He needs a ________.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-18.webp",
        "options": [
          "blanket",
          "plaster",
          "cough syrup",
          "thermometer"
        ],
        "correct": 1,
        "explanation": "Görselde parmağı kesilmiş bir çocuk yara bandı aramaktadır. Yara bandı 'plaster' demektir."
      },
      {
        "id": "e5-1-t3-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the sign. You must be quiet in the ________.",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-19.webp",
        "options": [
          "cinema",
          "library",
          "pharmacy",
          "toy shop"
        ],
        "correct": 1,
        "explanation": "Görselde kitaplar ve 'sessiz ol' işareti bulunmaktadır. Bu kurallar kütüphane (library) içindir."
      },
      {
        "id": "e5-1-t3-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What are they doing in the evening?",
        "imageUrl": "/images/grade5/ingilizce/test3/e5-t3-img-20.webp",
        "options": [
          "They are having breakfast.",
          "They are having lunch.",
          "They are having dinner.",
          "They are doing homework."
        ],
        "correct": 2,
        "explanation": "Pencereden akşam (evening) olduğu görülen görselde aile akşam yemeği (having dinner) yemektedir."
      }
    ],
   test4: [
      {
        "id": "e5-1-t4-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. He ________ breakfast every morning.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-01.webp",
        "options": [
          "has",
          "have",
          "do",
          "does"
        ],
        "correct": 0,
        "explanation": "Görselde kahvaltı yapan bir çocuk var. Geniş zamanda 'He/She/It' özneleriyle 'have' fiili 'has' olarak kullanılır."
      },
      {
        "id": "e5-1-t4-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with the boy in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-02.webp",
        "options": [
          "He has a backache.",
          "He has a toothache.",
          "He has a sore throat.",
          "He has a broken leg."
        ],
        "correct": 1,
        "explanation": "Görseldeki çocuk eliyle şişmiş yanağını tutmaktadır, bu diş ağrısı (toothache) olduğunu gösterir."
      },
      {
        "id": "e5-1-t4-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What time does Sally go to bed?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-03.webp",
        "options": [
          "At quarter past nine.",
          "At half past nine.",
          "At quarter to ten.",
          "At nine o'clock."
        ],
        "correct": 1,
        "explanation": "Görseldeki saat 09:30'u göstermektedir. Buçuğu ifade etmek için 'half past' kalıbı kullanılır."
      },
      {
        "id": "e5-1-t4-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. He has a terrible cold. He ________ go outside.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-04.webp",
        "options": [
          "should",
          "can",
          "shouldn't",
          "must"
        ],
        "correct": 2,
        "explanation": "Görselde hasta bir çocuk ve üzeri kırmızı çarpı ile çizilmiş bir oyun parkı var. Dışarı çıkmamalıdır (shouldn't)."
      },
      {
        "id": "e5-1-t4-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is her morning routine in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-05.webp",
        "options": [
          "Getting dressed",
          "Washing her face",
          "Brushing her teeth",
          "Having breakfast"
        ],
        "correct": 1,
        "explanation": "Görseldeki kız lavaboda yüzünü yıkamaktadır (Washing her face)."
      },
      {
        "id": "e5-1-t4-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "She has a high fever. She should ________.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-06.webp",
        "options": [
          "drink cold water",
          "take a warm shower",
          "eat candies",
          "play outside"
        ],
        "correct": 1,
        "explanation": "Görselde yüksek ateş gösteren bir derece ve ılık duş alan bir çocuk vardır. Ateşi olan biri ılık duş almalıdır (take a warm shower)."
      },
      {
        "id": "e5-1-t4-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, Tom ________ computer games in the evening.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-07.webp",
        "options": [
          "play",
          "plays",
          "doing",
          "does"
        ],
        "correct": 1,
        "explanation": "Görselde bilgisayar oyunu oynayan Tom görülüyor. 'He' öznesi olduğu için fiil '-s' takısı alır (plays)."
      },
      {
        "id": "e5-1-t4-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the flag. She is from ________.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-08.webp",
        "options": [
          "Greece",
          "Greek",
          "English",
          "Britain"
        ],
        "correct": 0,
        "explanation": "Görseldeki bayrak Yunanistan (Greece) bayrağıdır. 'From' edatından sonra ülke ismi gelir."
      },
      {
        "id": "e5-1-t4-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the pharmacy?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-09.webp",
        "options": [
          "It is under the bank.",
          "It is between the bank and the pool.",
          "It is next to the library.",
          "It is opposite the park."
        ],
        "correct": 1,
        "explanation": "Görselde eczane, banka ile havuzun ortasındadır (between)."
      },
      {
        "id": "e5-1-t4-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is her hobby?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-10.webp",
        "options": [
          "Solving puzzles",
          "Playing chess",
          "Collecting toys",
          "Riding a bike"
        ],
        "correct": 2,
        "explanation": "Görselde etrafı bir sürü oyuncakla dolu mutlu bir kız var. Hobisi oyuncak biriktirmektir (collecting toys)."
      },
      {
        "id": "e5-1-t4-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. Can he ride a horse?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-11.webp",
        "options": [
          "Yes, he can.",
          "No, he can't.",
          "Yes, he is.",
          "No, he isn't."
        ],
        "correct": 1,
        "explanation": "Görselde attan düşen korkmuş bir çocuk ve kırmızı bir çarpı (X) var. At binemediğini (No, he can't) gösterir."
      },
      {
        "id": "e5-1-t4-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What time is it in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-12.webp",
        "options": [
          "It is quarter to nine.",
          "It is quarter past nine.",
          "It is half past eight.",
          "It is quarter past eight."
        ],
        "correct": 0,
        "explanation": "Görseldeki saat 08:45'i göstermektedir. Bu, 'dokuza çeyrek var' (quarter to nine) demektir."
      },
      {
        "id": "e5-1-t4-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He has a broken arm. He ________ carry heavy things.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-13.webp",
        "options": [
          "should",
          "can",
          "mustn't",
          "does"
        ],
        "correct": 2,
        "explanation": "Görselde kolu alçıda olan bir çocuk ve üzeri çizilmiş ağır bir koli var. Ağır taşımaması gerekir (mustn't)."
      },
      {
        "id": "e5-1-t4-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Which school subject is this?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-14.webp",
        "options": [
          "Social Studies",
          "Music",
          "Maths",
          "P.E."
        ],
        "correct": 2,
        "explanation": "Görseldeki tahtada sayılar ve hesaplama sembolleri var, bu Matematik (Maths) dersidir."
      },
      {
        "id": "e5-1-t4-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the post office?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-15.webp",
        "options": [
          "It is opposite the park.",
          "It is under the park.",
          "It is behind the cafe.",
          "It is in the middle."
        ],
        "correct": 0,
        "explanation": "Görselde postane, parkın karşısında (caddenin diğer tarafında) yer almaktadır (opposite)."
      },
      {
        "id": "e5-1-t4-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "My sister ________ up at 10:00 on Sundays.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-16.webp",
        "options": [
          "get",
          "gets",
          "is",
          "does"
        ],
        "correct": 1,
        "explanation": "Görselde pazar sabahı 10:00'da kalkan bir kız var. 'She' öznesi olduğu için fiil '-s' takısı alır (gets up)."
      },
      {
        "id": "e5-1-t4-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He has a sore throat. He should ________.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-17.webp",
        "options": [
          "drink cold coke",
          "eat ice-cream",
          "drink warm tea with lemon",
          "shout loudly"
        ],
        "correct": 2,
        "explanation": "Görselde boğazı ağrıyan ve elinde limonlu ılık çay olan bir çocuk var. Boğaz ağrısına iyi gelir."
      },
      {
        "id": "e5-1-t4-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with the man in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-18.webp",
        "options": [
          "He has a backache.",
          "He has the flu.",
          "He has a headache.",
          "He has a broken leg."
        ],
        "correct": 0,
        "explanation": "Görselde belini tutan ve acı çeken bir adam var, bu bel ağrısıdır (backache)."
      },
      {
        "id": "e5-1-t4-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, he ________ watching cartoons.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-19.webp",
        "options": [
          "hates",
          "dislikes",
          "loves",
          "can't stand"
        ],
        "correct": 2,
        "explanation": "Görselde çizgi film izlerken etrafında kalpler uçuşan çok mutlu bir çocuk var. Bu, çok sevdiğini (loves) gösterir."
      },
      {
        "id": "e5-1-t4-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the map. To go to the library, you should ________.",
        "imageUrl": "/images/grade5/ingilizce/test4/e5-t4-img-20.webp",
        "options": [
          "turn right",
          "go straight",
          "turn left",
          "cross the street"
        ],
        "correct": 1,
        "explanation": "Görseldeki ok işareti doğrudan ileriye doğru gitmeyi (go straight) göstermektedir."
      }
    ],
    test5: [
      {
        "id": "e5-1-t5-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. ________ is the concert hall?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-01.webp",
        "options": [
          "What",
          "Where",
          "When",
          "Who"
        ],
        "correct": 1,
        "explanation": "Görselde elinde harita olan ve yol arayan biri var. Bir yerin konumunu veya adresini sormak için 'Where' (Nerede) soru kelimesi kullanılır."
      },
      {
        "id": "e5-1-t5-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He has a terrible toothache. He ________ eat candies.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-02.webp",
        "options": [
          "should",
          "can",
          "shouldn't",
          "must"
        ],
        "correct": 2,
        "explanation": "Görselde diş ağrısı (toothache) çeken bir çocuk ve üzeri kırmızı ile çizilmiş şekerler var. Şeker yememelidir (shouldn't)."
      },
      {
        "id": "e5-1-t5-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the flag. He is from Egypt. He is ________.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-03.webp",
        "options": [
          "Egypt",
          "Egyptian",
          "English",
          "French"
        ],
        "correct": 1,
        "explanation": "Görseldeki Mısır (Egypt) bayrağıdır. Mısır ülkesinden olanların milliyeti 'Egyptian' (Mısırlı) olur."
      },
      {
        "id": "e5-1-t5-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, he ________ play dodgeball, but he ________ play checkers.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-04.webp",
        "options": [
          "can / can",
          "can't / can",
          "can / can't",
          "can't / can't"
        ],
        "correct": 1,
        "explanation": "Görselde yakantop (dodgeball) üzerinde çarpı işareti (can't), dama (checkers) üzerinde onay işareti (can) vardır."
      },
      {
        "id": "e5-1-t5-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the objects. Which school subject is this?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-05.webp",
        "options": [
          "Science",
          "Maths",
          "Social Studies",
          "Music"
        ],
        "correct": 2,
        "explanation": "Görseldeki dünya küresi, eski haritalar ve pusula Sosyal Bilgiler (Social Studies) dersine aittir."
      },
      {
        "id": "e5-1-t5-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. Mark ________ his homework at 18:00.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-06.webp",
        "options": [
          "do",
          "does",
          "have",
          "has"
        ],
        "correct": 1,
        "explanation": "Görselde ödev yapan Mark görülüyor. 'He' (Mark) öznesi geniş zamanda 'do' fiilini 'does' olarak alır."
      },
      {
        "id": "e5-1-t5-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with the boy in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-07.webp",
        "options": [
          "He has a broken leg.",
          "He has a runny nose.",
          "He has a backache.",
          "He has a toothache."
        ],
        "correct": 1,
        "explanation": "Görselde elinde mendil (tissue) olan ve burnu akan bir çocuk var. Burun akıntısı 'runny nose' demektir."
      },
      {
        "id": "e5-1-t5-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the cinema? It is ________ the stationery and the toy shop.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-08.webp",
        "options": [
          "next to",
          "opposite",
          "between",
          "near"
        ],
        "correct": 2,
        "explanation": "Görselde sinema binası, kırtasiye ile oyuncakçı dükkanının 'arasında' (between) durmaktadır."
      },
      {
        "id": "e5-1-t5-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What are they doing in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-09.webp",
        "options": [
          "Camping",
          "Hiking",
          "Playing board games",
          "Fishing"
        ],
        "correct": 2,
        "explanation": "Görselde evin içinde masaüstü kutu oyunu oynayan çocuklar var. Bu eylem 'playing board games' olarak adlandırılır."
      },
      {
        "id": "e5-1-t5-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the speech bubbles. ________ languages does she speak?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-10.webp",
        "options": [
          "What",
          "How many",
          "Who",
          "Where"
        ],
        "correct": 1,
        "explanation": "Görselde kızın iki farklı dilde ('Bonjour' ve 'Hola') konuştuğu görülüyor. Adet sormak için 'How many' (kaç tane) kalıbı kullanılır."
      },
      {
        "id": "e5-1-t5-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "My sister has a sore throat. She ________ drink cold water.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-11.webp",
        "options": [
          "should",
          "mustn't",
          "can",
          "shouldn't"
        ],
        "correct": 3,
        "explanation": "Görselde boğazı ağrıyan (sore throat) biri ve üzeri çizilmiş soğuk su var. Soğuk su içmemelidir (shouldn't)."
      },
      {
        "id": "e5-1-t5-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. What time is it?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-12.webp",
        "options": [
          "It is quarter past ten.",
          "It is quarter to eleven.",
          "It is half past ten.",
          "It is ten o'clock."
        ],
        "correct": 0,
        "explanation": "Görseldeki saat 10:15'i göstermektedir. Bu da 'onu on beş (çeyrek) geçiyor' (quarter past ten) demektir."
      },
      {
        "id": "e5-1-t5-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the flag. She is from France. She speaks ________.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-13.webp",
        "options": [
          "France",
          "French",
          "English",
          "Germany"
        ],
        "correct": 1,
        "explanation": "Görseldeki Fransa (France) bayrağıdır. Fransız olan biri Fransızca (French) konuşur."
      },
      {
        "id": "e5-1-t5-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the map. To go to the library, you should ________.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-14.webp",
        "options": [
          "take the first right",
          "take the second right",
          "go straight ahead",
          "cross the street"
        ],
        "correct": 1,
        "explanation": "Görseldeki haritada ok işareti birinci sokağı geçip 'ikinci sağdan' dönmektedir. Bu 'take the second right' demektir."
      },
      {
        "id": "e5-1-t5-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with the man in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-15.webp",
        "options": [
          "He has a headache.",
          "He has a stomachache.",
          "He has a toothache.",
          "He has a backache."
        ],
        "correct": 3,
        "explanation": "Görselde elini beline koymuş ve acı çeken bir adam var. Bel/sırt ağrısı 'backache' demektir."
      },
      {
        "id": "e5-1-t5-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is her favorite hobby?",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-16.webp",
        "options": [
          "Doing origami",
          "Playing dodgeball",
          "Riding a bike",
          "Fishing"
        ],
        "correct": 0,
        "explanation": "Görselde renkli kağıtları katlayarak şekiller yapan (origami) bir kız çocuğu vardır."
      },
      {
        "id": "e5-1-t5-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He has a bad cough. He should drink ________.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-17.webp",
        "options": [
          "cold coke",
          "coffee",
          "cough syrup",
          "lemonade"
        ],
        "correct": 2,
        "explanation": "Görselde şiddetle öksüren (cough) bir çocuk ve yanında öksürük şurubu (cough syrup) vardır."
      },
      {
        "id": "e5-1-t5-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the post office? It is ________ the park.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-18.webp",
        "options": [
          "opposite",
          "next to",
          "under",
          "on"
        ],
        "correct": 0,
        "explanation": "Görselde postane ve park caddenin karşılıklı iki tarafındadır. Karşısında olmak 'opposite' kelimesiyle ifade edilir."
      },
      {
        "id": "e5-1-t5-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "My father ________ up very early every morning.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-19.webp",
        "options": [
          "get",
          "gets",
          "is",
          "do"
        ],
        "correct": 1,
        "explanation": "Görselde sabah erken uyanan bir baba var. Geniş zamanda 'He' (my father) öznesi fiile '-s' takısı getirir (gets up)."
      },
      {
        "id": "e5-1-t5-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. I go to bed at ________.",
        "imageUrl": "/images/grade5/ingilizce/test5/e5-t5-img-20.webp",
        "options": [
          "half past eight",
          "nine o'clock",
          "half past nine",
          "quarter to ten"
        ],
        "correct": 2,
        "explanation": "Görseldeki saat 09:30'u göstermektedir. 30 (buçuk) 'half past' olarak ifade edilir (half past nine)."
      }
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
