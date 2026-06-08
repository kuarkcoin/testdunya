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
        "id": "e5-1-t6-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the visual. Where is the post office?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-01.webp",
        "options": [
          "It is next to the library.",
          "It is opposite the school.",
          "It is between the cafe and the bank.",
          "It is under the hospital."
        ],
        "correct": 2,
        "explanation": "Görselde postane, kafe ile bankanın tam ortasındadır. 'Arasında' demek için 'between' kullanılır."
      },
      {
        "id": "e5-1-t6-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, what is his favorite activity?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-02.webp",
        "options": [
          "Playing checkers",
          "Hiking in the mountains",
          "Doing origami",
          "Collecting stamps"
        ],
        "correct": 1,
        "explanation": "Görselde sırt çantası ve yürüyüş batonuyla dağda yürüyen bir çocuk var. Bu aktivite 'hiking'dir."
      },
      {
        "id": "e5-1-t6-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clocks. What time does Tom have breakfast?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-03.webp",
        "options": [
          "At quarter past seven.",
          "At half past seven.",
          "At quarter to eight.",
          "At seven o'clock."
        ],
        "correct": 1,
        "explanation": "Görseldeki saat 07:30'u göstermektedir. Buçuğu ifade etmek için 'half past' kullanılır."
      },
      {
        "id": "e5-1-t6-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with the girl in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-04.webp",
        "options": [
          "She has a broken arm.",
          "She has a stomachache.",
          "She has a headache.",
          "She has a toothache."
        ],
        "correct": 2,
        "explanation": "Görseldeki kız ellerini başına koymuş ve acı çekmektedir. Bu durum 'headache' (baş ağrısı) olarak adlandırılır."
      },
      {
        "id": "e5-1-t6-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the flag and the landmark. Where is she from?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-05.webp",
        "options": [
          "She is from Italy.",
          "She is from Spain.",
          "She is from Britain.",
          "She is from Germany."
        ],
        "correct": 2,
        "explanation": "Görselde İngiltere bayrağı ve Big Ben kulesi var. Bu yüzden 'Britain' seçilmelidir."
      },
      {
        "id": "e5-1-t6-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, the boy ________ play chess, but he ________ play football.",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-06.webp",
        "options": [
          "can / can",
          "can't / can",
          "can / can't",
          "can't / can't"
        ],
        "correct": 2,
        "explanation": "Görselde satranç tahtasında gülen çocuk (can) ve futbol oynarken düşen çocuk (can't) görülmektedir."
      },
      {
        "id": "e5-1-t6-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the morning schedule. What is the correct order?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-07.webp",
        "options": [
          "Wash face -> Get dressed -> Have breakfast",
          "Have breakfast -> Wash face -> Get dressed",
          "Get dressed -> Have breakfast -> Wash face",
          "Wash face -> Have breakfast -> Get dressed"
        ],
        "correct": 0,
        "explanation": "Görseldeki numaralandırılmış rutine göre önce yüz yıkama, sonra giyinme ve en son kahvaltı gelmektedir."
      },
      {
        "id": "e5-1-t6-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Which school subject do these items belong to?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-08.webp",
        "options": [
          "Music",
          "Art",
          "Maths",
          "Science"
        ],
        "correct": 1,
        "explanation": "Görseldeki palet, fırçalar ve tuval Görsel Sanatlar (Art) dersine aittir."
      },
      {
        "id": "e5-1-t6-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the map. To go to the cinema, go straight and ________.",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-09.webp",
        "options": [
          "turn right",
          "turn left",
          "cross the bridge",
          "go back"
        ],
        "correct": 0,
        "explanation": "Görseldeki ok işareti düz gittikten sonra sağa doğru bir dönüşü işaret etmektedir."
      },
      {
        "id": "e5-1-t6-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with him? He should ________.",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-10.webp",
        "options": [
          "carry heavy things",
          "drink cold water",
          "rest and sleep",
          "play in the rain"
        ],
        "correct": 2,
        "explanation": "Görselde yorgun ve hasta görünen bir çocuk var. En uygun tavsiye dinlenmesi (rest) ve uyumasıdır."
      },
      {
        "id": "e5-1-t6-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where are the students in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-11.webp",
        "options": [
          "At the bakery",
          "At the library",
          "At the playground",
          "At the hospital"
        ],
        "correct": 2,
        "explanation": "Görselde kaydırak ve salıncakta oynayan öğrenciler var. Burası oyun parkıdır (playground)."
      },
      {
        "id": "e5-1-t6-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the speech bubble. Which language is this?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-12.webp",
        "options": [
          "Spanish",
          "Italian",
          "Turkish",
          "German"
        ],
        "correct": 0,
        "explanation": "Konuşma balonunda 'Hola' yazmaktadır. Bu kelime İspanyolca (Spanish) bir selamlamadır."
      },
      {
        "id": "e5-1-t6-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is her favorite hobby in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-13.webp",
        "options": [
          "Taking photos",
          "Drawing pictures",
          "Playing the piano",
          "Riding a horse"
        ],
        "correct": 0,
        "explanation": "Görseldeki kızın elinde bir fotoğraf makinesi var ve manzara çekiyor. Hobisi fotoğraf çekmektir (taking photos)."
      },
      {
        "id": "e5-1-t6-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "How does he feel in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-14.webp",
        "options": [
          "He is thirsty.",
          "He is hungry.",
          "He is tired.",
          "He is energetic."
        ],
        "correct": 1,
        "explanation": "Görseldeki çocuk karnını tutuyor ve aklında bir sandviç hayal ediyor. Bu acıktığını (hungry) gösterir."
      },
      {
        "id": "e5-1-t6-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the pharmacy in the visual?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-15.webp",
        "options": [
          "It is opposite the museum.",
          "It is behind the cafe.",
          "It is near the pool.",
          "It is next to the school."
        ],
        "correct": 0,
        "explanation": "Görselde eczane ve müze caddenin karşılıklı iki tarafındadır (opposite)."
      },
      {
        "id": "e5-1-t6-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What does he do at 08:30 every morning?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-16.webp",
        "options": [
          "He goes to bed.",
          "He arrives at school.",
          "He leaves home.",
          "He has lunch."
        ],
        "correct": 1,
        "explanation": "Görselde saat 08:30'dur ve çocuk okulun kapısından içeri girmektedir (arrives at school)."
      },
      {
        "id": "e5-1-t6-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the sign. You shouldn't ________ here.",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-17.webp",
        "options": [
          "read books",
          "eat or drink",
          "listen to music",
          "wear a backpack"
        ],
        "correct": 1,
        "explanation": "Görselde bir kütüphane ortamı ve üzeri çizilmiş bir hamburger/içecek sembolü var. Yemek-içmek yasaktır."
      },
      {
        "id": "e5-1-t6-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What does she need for her illness?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-18.webp",
        "options": [
          "She needs a plaster.",
          "She needs some lemon and honey.",
          "She needs a blanket.",
          "She needs a wheelchair."
        ],
        "correct": 1,
        "explanation": "Görselde boğazı ağrıyan bir kız ve yanında bal-limon karışımı var."
      },
      {
        "id": "e5-1-t6-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Which game is the boy playing?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-19.webp",
        "options": [
          "Chess",
          "Checkers",
          "Tag",
          "Puzzle"
        ],
        "correct": 0,
        "explanation": "Görseldeki çocuk siyah-beyaz kareli bir tahtada at ve kale gibi taşlarla oynamaktadır (chess)."
      },
      {
        "id": "e5-1-t6-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. What time does she go to the library?",
        "imageUrl": "/images/grade5/ingilizce/test6/e5-t6-img-20.webp",
        "options": [
          "At quarter to four.",
          "At quarter past four.",
          "At four o'clock.",
          "At half past four."
        ],
        "correct": 1,
        "explanation": "Görseldeki saat 04:15'i göstermektedir. Bu da 'dördü çeyrek geçiyor' (quarter past four) demektir."
      }
    ],
    test7: [
      {
        "id": "e5-1-t7-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. Where is the cat? It is ________ the box.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-01.webp",
        "options": [
          "on",
          "in",
          "under",
          "at"
        ],
        "correct": 1,
        "explanation": "Görselde kedi kutunun 'içinde'dir. Bir şeyin içinde olma durumunu belirtmek için 'in' edatı kullanılır."
      },
      {
        "id": "e5-1-t7-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where are the books? They are ________ the desk.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-02.webp",
        "options": [
          "on",
          "in",
          "at",
          "under"
        ],
        "correct": 0,
        "explanation": "Kitaplar masanın 'üzerinde' (yüzeyine temas ediyor) olduğu için 'on' edatı kullanılır."
      },
      {
        "id": "e5-1-t7-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the dog. It is sleeping ________ the bed.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-03.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 3,
        "explanation": "Köpek yatağın 'altında' uyumaktadır. Altında anlamı katan edat 'under' kelimesidir."
      },
      {
        "id": "e5-1-t7-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the boy? He is waiting ________ the bus stop.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-04.webp",
        "options": [
          "at",
          "in",
          "on",
          "under"
        ],
        "correct": 0,
        "explanation": "Otobüs durağı, kapı önü gibi belirli bir noktada bekleme durumlarında 'at' (at the bus stop) kullanılır."
      },
      {
        "id": "e5-1-t7-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. I wake up ________ 08:00 every morning.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-05.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 2,
        "explanation": "İngilizcede saatleri söylerken her zaman 'at' edatı kullanılır (at 8 o'clock)."
      },
      {
        "id": "e5-1-t7-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the calendar. We play basketball ________ Sundays.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-06.webp",
        "options": [
          "in",
          "at",
          "on",
          "under"
        ],
        "correct": 2,
        "explanation": "Gün isimlerinden (Sunday, Monday vb.) önce daima 'on' edatı gelir."
      },
      {
        "id": "e5-1-t7-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the visual. My birthday is ________ May.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-07.webp",
        "options": [
          "at",
          "on",
          "under",
          "in"
        ],
        "correct": 3,
        "explanation": "Aylardan (May, June vb.) ve yıllardan önce İngilizcede 'in' edatı kullanılır (in May)."
      },
      {
        "id": "e5-1-t7-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where is the clock? The clock is ________ the wall.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-08.webp",
        "options": [
          "on",
          "in",
          "at",
          "under"
        ],
        "correct": 0,
        "explanation": "Duvar (wall) bir yüzeydir. Bir yüzeyin üzerinde asılı/duruyor olma durumunda 'on' (on the wall) kullanılır."
      },
      {
        "id": "e5-1-t7-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Someone is knocking. There is a man ________ the door.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-09.webp",
        "options": [
          "in",
          "under",
          "at",
          "on"
        ],
        "correct": 2,
        "explanation": "Kapıda (kapının önünde/o noktada) bekleyen biri için belirli bir konum bildiren 'at the door' ifadesi kullanılır."
      },
      {
        "id": "e5-1-t7-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "It is very hot. The dog is sleeping ________ the tree.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-10.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 3,
        "explanation": "Görselde köpek ağacın gölgesinde, yani 'altında' yatmaktadır. Bu yüzden 'under' kullanılır."
      },
      {
        "id": "e5-1-t7-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What a beautiful day! There are many clouds ________ the sky.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-11.webp",
        "options": [
          "on",
          "at",
          "in",
          "under"
        ],
        "correct": 2,
        "explanation": "Gökyüzü (sky) 3 boyutlu geniş bir alan olarak kabul edilir, bu nedenle gökyüzünde derken 'in the sky' kalıbı kullanılır."
      },
      {
        "id": "e5-1-t7-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the moon and stars. Bats fly ________ night.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-12.webp",
        "options": [
          "in",
          "on",
          "under",
          "at"
        ],
        "correct": 3,
        "explanation": "Günün bölümlerinde 'in the morning/afternoon' denilse de, gece için özel bir istisna vardır ve daima 'at night' denir."
      },
      {
        "id": "e5-1-t7-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at this old photo. Who is the tall man ________ the picture?",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-13.webp",
        "options": [
          "on",
          "at",
          "in",
          "under"
        ],
        "correct": 2,
        "explanation": "Fotoğrafların, resimlerin veya kitapların içindeki nesnelerden/kişilerden bahsederken 'in' (in the picture) kullanılır."
      },
      {
        "id": "e5-1-t7-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "I love this channel. There is a great cartoon ________ TV right now.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-14.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 1,
        "explanation": "Televizyon, internet veya radyo gibi elektronik yayın/ekranlardan bahsederken her zaman 'on' (on TV, on the internet) kullanılır."
      },
      {
        "id": "e5-1-t7-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the visual. We don't go to school ________ the weekend.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-15.webp",
        "options": [
          "in",
          "on",
          "under",
          "at"
        ],
        "correct": 3,
        "explanation": "Hafta sonu derken İngiliz İngilizcesinde (ve okullarımızdaki müfredatta) yaygın olarak 'at the weekend' kalıbı kullanılır."
      },
      {
        "id": "e5-1-t7-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the map. She lives ________ Istanbul.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-16.webp",
        "options": [
          "at",
          "on",
          "in",
          "under"
        ],
        "correct": 2,
        "explanation": "Şehir, ülke veya kıta gibi geniş coğrafi alanların içinde yaşandığını belirtmek için 'in' (in Istanbul) kullanılır."
      },
      {
        "id": "e5-1-t7-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look up! There is a big spider ________ the ceiling.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-17.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 1,
        "explanation": "Tavan (ceiling) düz bir yüzeydir. Yüzeye tutunan/yapışan nesneler için (tıpkı duvardaki gibi) 'on' kullanılır."
      },
      {
        "id": "e5-1-t7-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where are the students? They are ________ school right now.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-18.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 2,
        "explanation": "Okul, hastane, iş yeri gibi kurumsal yerlerde (o anda o kurumda bulunma anlamında) genellikle 'at' (at school) kullanılır."
      },
      {
        "id": "e5-1-t7-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the living room. The nice rug is ________ the floor.",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-19.webp",
        "options": [
          "in",
          "on",
          "at",
          "under"
        ],
        "correct": 1,
        "explanation": "Zemin (floor) bir yüzeydir. Halı da bu yüzeyin üzerine serildiği için 'on the floor' denir."
      },
      {
        "id": "e5-1-t7-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the room in the picture. Which sentence is CORRECT?",
        "imageUrl": "/images/grade5/ingilizce/test7/e5-t7-img-20.webp",
        "options": [
          "The dog is on the table.",
          "The bird is under the cage.",
          "The cat is on the sofa.",
          "The cat is at the sofa."
        ],
        "correct": 2,
        "explanation": "Görselde kedi kanepenin üzerindedir (on the sofa). Köpek masanın altında (under), kuş ise kafesin içindedir (in)."
      }
    ],
 test8: [
      {
        "id": "e5-1-t8-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the flag. Where is he from?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-01.webp",
        "options": [
          "He is from German.",
          "He is from Germany.",
          "He is from France.",
          "He is from English."
        ],
        "correct": 1,
        "explanation": "Görseldeki bayrak Almanya (Germany) bayrağıdır. Ülke sorulduğu için milliyet (German) değil, ülke ismi (Germany) seçilmelidir."
      },
      {
        "id": "e5-1-t8-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the speech bubbles. How many languages does she speak?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-02.webp",
        "options": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "correct": 1,
        "explanation": "Görselde kızın hem 'Konnichiwa' (Japonca) hem de 'Ciao' (İtalyanca) dediği görülmektedir. Bu da onun 2 dil (Two) konuştuğunu gösterir."
      },
      {
        "id": "e5-1-t8-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. Where is the pharmacy?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-03.webp",
        "options": [
          "It is next to the hospital.",
          "It is opposite the hospital.",
          "It is under the hospital.",
          "It is behind the hospital."
        ],
        "correct": 1,
        "explanation": "Görselde eczane (pharmacy) ve hastane (hospital) caddenin karşılıklı iki tarafındadır. Karşısında olmak 'opposite' kelimesiyle ifade edilir."
      },
      {
        "id": "e5-1-t8-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the map. How can I go to the toy shop?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-04.webp",
        "options": [
          "Turn left.",
          "Take the second left.",
          "Go straight and take the first right.",
          "Cross the street."
        ],
        "correct": 2,
        "explanation": "Haritadaki ok işareti düz gidip birinci sağdan (first right) dönmeyi göstermektedir."
      },
      {
        "id": "e5-1-t8-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "According to the picture, he loves playing ________.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-05.webp",
        "options": [
          "tag",
          "dodgeball",
          "blindman's buff",
          "checkers"
        ],
        "correct": 2,
        "explanation": "Görselde gözleri bağlı bir şekilde ebelemece oynayan mutlu bir çocuk var. Körebe oyununun İngilizcesi 'blindman's buff'tır."
      },
      {
        "id": "e5-1-t8-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the picture. She ________ roller skate.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-06.webp",
        "options": [
          "can",
          "can't",
          "should",
          "must"
        ],
        "correct": 1,
        "explanation": "Görselde paten kayarken düşen ve üzerinde kırmızı çarpı (X) olan bir kız var. Bu onun paten kayamadığını (can't) gösterir."
      },
      {
        "id": "e5-1-t8-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the clock. What time is it?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-07.webp",
        "options": [
          "It is quarter past two.",
          "It is quarter to three.",
          "It is half past two.",
          "It is quarter to two."
        ],
        "correct": 1,
        "explanation": "Saat 02:45'i (üçe çeyrek var) göstermektedir. Çeyrek var ifadesi 'quarter to' ile söylenir (quarter to three)."
      },
      {
        "id": "e5-1-t8-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What time does he brush his teeth?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-08.webp",
        "options": [
          "At quarter to seven.",
          "At half past seven.",
          "At quarter past seven.",
          "At seven o'clock."
        ],
        "correct": 2,
        "explanation": "Görselde diş fırçalayan çocuğun yanındaki saat 07:15'i (yediyi çeyrek geçiyor) göstermektedir. Bu da 'quarter past seven' demektir."
      },
      {
        "id": "e5-1-t8-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is the matter with her in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-09.webp",
        "options": [
          "She has a sore throat.",
          "She has a runny nose.",
          "She has a broken arm.",
          "She has a stomachache."
        ],
        "correct": 1,
        "explanation": "Görselde burnu kızarmış ve sürekli peçete kullanan bir kız var. Burun akıntısı 'runny nose' olarak ifade edilir."
      },
      {
        "id": "e5-1-t8-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He has a stomachache. He ________ eat fast food.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-10.webp",
        "options": [
          "should",
          "can",
          "shouldn't",
          "must"
        ],
        "correct": 2,
        "explanation": "Görselde karnı ağrıyan bir çocuk ve üzeri çizilmiş bir hamburger menüsü var. Mide ağrısı çeken biri fast food yememelidir (shouldn't)."
      },
      {
        "id": "e5-1-t8-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the birthday cake. How old is he?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-11.webp",
        "options": [
          "Ten",
          "Eleven",
          "Twelve",
          "Thirteen"
        ],
        "correct": 1,
        "explanation": "Görseldeki pastanın üzerinde tam 11 adet mum bulunmaktadır. Bu yüzden çocuk on bir (Eleven) yaşındadır."
      },
      {
        "id": "e5-1-t8-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Where are they in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-12.webp",
        "options": [
          "At the butcher",
          "At the bakery",
          "At the pharmacy",
          "At the library"
        ],
        "correct": 1,
        "explanation": "Görselde taze ekmekler, kruvasanlar ve hamur işleri satın alan insanlar var. Bu mekan bir fırın/pastanedir (bakery)."
      },
      {
        "id": "e5-1-t8-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the objects. You need these to play ________.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-13.webp",
        "options": [
          "checkers",
          "chess",
          "dodgeball",
          "origami"
        ],
        "correct": 1,
        "explanation": "Görselde at, kale, şah gibi siyah-beyaz taşlar ve kareli bir tahta var. Bu malzemeler satranç (chess) oynamak içindir."
      },
      {
        "id": "e5-1-t8-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What are they doing in the ________?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-14.webp",
        "options": [
          "morning",
          "afternoon",
          "evening",
          "night"
        ],
        "correct": 2,
        "explanation": "Görselde akşam yemeği yiyen bir aile var ve camdan dışarıda ay görünüyor. Akşam yemeği ve akşam vakti 'evening' kelimesiyle belirtilir."
      },
      {
        "id": "e5-1-t8-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "He has a cut on his finger. He needs a ________.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-15.webp",
        "options": [
          "blanket",
          "tissue",
          "plaster",
          "pill"
        ],
        "correct": 2,
        "explanation": "Görselde parmağı kesilmiş bir çocuk ve yara bandı var. Yara bandının İngilizcesi 'plaster'dır."
      },
      {
        "id": "e5-1-t8-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the visual. What do they say to each other?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-16.webp",
        "options": [
          "Good evening",
          "Good morning",
          "Good night",
          "Goodbye"
        ],
        "correct": 1,
        "explanation": "Görselde güneş yeni doğarken (sabah vakti) el sallayarak selamlaşan iki çocuk var. Sabah selamlaşması 'Good morning'dir."
      },
      {
        "id": "e5-1-t8-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the kids. Hopscotch is an ________ game.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-17.webp",
        "options": [
          "indoor",
          "board",
          "outdoor",
          "computer"
        ],
        "correct": 2,
        "explanation": "Görselde seksek (hopscotch) oynayan çocuklar açık havada (park/sokak) bulunmaktadır. Bu yüzden bu bir dış mekan (outdoor) oyunudur."
      },
      {
        "id": "e5-1-t8-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the calendar. She doesn't go to school on the ________.",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-18.webp",
        "options": [
          "weekdays",
          "weekend",
          "Monday",
          "Friday"
        ],
        "correct": 1,
        "explanation": "Takvimde 'Saturday' (Cumartesi) ve 'Sunday' (Pazar) günleri kırmızı kalemle yuvarlak içine alınmıştır. Bu günlere hafta sonu (weekend) denir."
      },
      {
        "id": "e5-1-t8-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "What is this object in the picture?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-19.webp",
        "options": [
          "Plaster",
          "Thermometer",
          "Cough syrup",
          "Tissue"
        ],
        "correct": 2,
        "explanation": "Görselde bir şurup şişesi ve bir ilaç kaşığı var. Bu, öksürük şurubu yani 'cough syrup'tır."
      },
     {
        "id": "e5-1-t8-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the sign. Where can you see this rule?",
        "imageUrl": "/images/grade5/ingilizce/test8/e5-t8-img-20.webp",
        "options": [
          "In a hospital",
          "In a library",
          "In a park",
          "In a cafe"
        ],
        "correct": 1,
        "explanation": "Görselde kitaplarla dolu bir odada 'Keep Quiet' (Sessiz Olun) işareti yapan bir görsel var. Bu kural en belirgin olarak kütüphanelerde (library) geçerlidir."
      }
    ],
  test9: [
      {
        "id": "e5-1-t9-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the dialogue. Mia: 'What are you doing this afternoon?' Tom: 'I ________ my room right now.'",
        "options": [
          "tidy",
          "am tidying",
          "tidies",
          "is tidying"
        ],
        "correct": 1,
        "explanation": "Diyalogda 'right now' (şu an) ifadesi kullanıldığı için Şimdiki Zaman (Present Continuous) gerekir. 'I' öznesi ile 'am + V(ing)' kullanılır."
      },
      {
        "id": "e5-1-t9-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the sentence. 'Tom usually ________ computer games in the afternoon, but today is different.'",
        "options": [
          "plays",
          "play",
          "is playing",
          "playing"
        ],
        "correct": 0,
        "explanation": "'Usually' (genellikle) kelimesi Geniş Zaman (Simple Present) gerektirir. 'Tom' (He) öznesi olduğu için fiil '-s' takısı alır (plays)."
      },
      {
        "id": "e5-1-t9-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the text. 'My sister is preparing the food and my parents ________ a barbecue in the garden today.'",
        "options": [
          "has",
          "have",
          "is having",
          "are having"
        ],
        "correct": 3,
        "explanation": "'Today' (bugün) kelimesi ve devam eden bir eylem anlatıldığı için Şimdiki Zaman kullanılır. 'My parents' (Onlar) çoğul olduğu için 'are having' olur."
      },
      {
        "id": "e5-1-t9-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the text. 'Hello! I'm Bruce. It is 6:30 pm now. My mother ________ dinner in the kitchen.'",
        "options": [
          "prepares",
          "prepare",
          "is preparing",
          "are preparing"
        ],
        "correct": 2,
        "explanation": "Bruce o an (now) saat 6:30'da olanları anlatmaktadır. 'My mother' (She) tekil özne olduğu için 'is preparing' (hazırlıyor) kullanılır."
      },
      {
        "id": "e5-1-t9-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the text. 'Bruce and his sister play chess in the evening because they ________ playing board games.'",
        "options": [
          "likes",
          "like",
          "are liking",
          "is liking"
        ],
        "correct": 1,
        "explanation": "Sevmek, hoşlanmak (like) fiili Geniş Zaman ile kullanılır. 'They' (Onlar) öznesi olduğu için fiil ek almaz (like)."
      },
      {
        "id": "e5-1-t9-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank with the correct option: ________ two knives on the kitchen table.",
        "options": [
          "There is",
          "There are",
          "Is there",
          "Are there"
        ],
        "correct": 1,
        "explanation": "Cümledeki 'iki bıçak' (two knives) çoğuldur. Çoğul nesnelerin varlığını belirtmek için 'There are' kalıbı kullanılır."
      },
      {
        "id": "e5-1-t9-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank with the correct option: ________ a TV on the wall in the living room.",
        "options": [
          "There are",
          "Are there",
          "There is",
          "Is there"
        ],
        "correct": 2,
        "explanation": "Cümledeki 'bir televizyon' (a TV) tekildir. Tekil nesnelerin varlığını belirtmek için 'There is' kalıbı kullanılır."
      },
      {
        "id": "e5-1-t9-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the question: ________ an oven in the kitchen?",
        "options": [
          "Are there",
          "Is there",
          "There is",
          "There are"
        ],
        "correct": 1,
        "explanation": "Soru işareti (?) olan bu cümlede 'bir fırın' (an oven) sorulmaktadır. Tekil soru kalıbı 'Is there' ile başlar."
      },
      {
        "id": "e5-1-t9-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the short dialogue. A: 'Are there any pillows on the sofa?' B: 'Yes, ________.'",
        "options": [
          "there are",
          "there is",
          "they are",
          "it is"
        ],
        "correct": 0,
        "explanation": "'Are there...?' (Çoğul) sorusuna olumlu cevap verilirken 'Yes, there are' kalıbı kullanılır."
      },
      {
        "id": "e5-1-t9-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A castle is ________ than a flat. (large)",
        "options": [
          "more large",
          "larger",
          "largest",
          "large"
        ],
        "correct": 1,
        "explanation": "İki şeyi karşılaştırırken (Comparative) 'large' gibi tek heceli sıfatların sonuna '-r' veya '-er' eklenir. Doğru cevap 'larger' (daha büyük) olur."
      },
      {
        "id": "e5-1-t9-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A village is ________ than a city. (peaceful)",
        "options": [
          "peacefuler",
          "peaceful",
          "more peaceful",
          "most peaceful"
        ],
        "correct": 2,
        "explanation": "'Peaceful' (huzurlu) çok heceli bir kelimedir. Çok heceli kelimelerin önüne 'more' (daha) getirilerek karşılaştırma yapılır."
      },
      {
        "id": "e5-1-t9-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A city is ________ than a town. (crowded)",
        "options": [
          "more crowded",
          "crowdeder",
          "crowded",
          "crowdest"
        ],
        "correct": 0,
        "explanation": "'Crowded' (kalabalık) çok heceli bir sıfat olduğu için 'daha kalabalık' demek için başına 'more' getirilir."
      },
      {
        "id": "e5-1-t9-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A shopping mall is ________ than a sports centre. (big)",
        "options": [
          "biger",
          "more big",
          "biggest",
          "bigger"
        ],
        "correct": 3,
        "explanation": "'Big' kelimesi tek hecelidir ve son harfi ikileşerek '-er' takısı alır (bigger = daha büyük)."
      },
      {
        "id": "e5-1-t9-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A flat is ________ than a house with a garden. (small)",
        "options": [
          "small",
          "more small",
          "smaller",
          "smallest"
        ],
        "correct": 2,
        "explanation": "'Small' (küçük) kelimesi tek hecelidir, bu yüzden sonuna '-er' takısı alarak 'smaller' (daha küçük) olur."
      },
      {
        "id": "e5-1-t9-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: Our new house is ________ than our old house. (comfortable)",
        "options": [
          "comfortabler",
          "comfortable",
          "more comfortable",
          "most comfortable"
        ],
        "correct": 2,
        "explanation": "'Comfortable' (rahat) kelimesi uzun (çok heceli) olduğu için önüne 'more' kelimesi eklenir."
      },
      {
        "id": "e5-1-t9-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: Traffic in the city centre is ________ than in a town. (bad)",
        "options": [
          "bader",
          "worse",
          "more bad",
          "badder"
        ],
        "correct": 1,
        "explanation": "Dikkat! 'Bad' (kötü) düzensiz bir sıfattır. Karşılaştırma yaparken tamamen değişerek 'worse' (daha kötü) kelimesine dönüşür."
      },
      {
        "id": "e5-1-t9-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A balcony is ________ than a corridor. (wide)",
        "options": [
          "wider",
          "more wide",
          "wide",
          "widest"
        ],
        "correct": 0,
        "explanation": "'Wide' (geniş) sıfatı 'e' harfi ile bittiği için sonuna sadece '-r' takısı alarak 'wider' olur."
      },
      {
        "id": "e5-1-t9-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: My room is ________ than yours. (good)",
        "options": [
          "gooder",
          "more good",
          "better",
          "best"
        ],
        "correct": 2,
        "explanation": "Dikkat! 'Good' (iyi) düzensiz bir sıfattır. 'Daha iyi' demek için tamamen değişerek 'better' kelimesine dönüşür."
      },
      {
        "id": "e5-1-t9-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: Canada is ________ than Turkiye. (cold)",
        "options": [
          "cold",
          "more cold",
          "colder",
          "coldest"
        ],
        "correct": 2,
        "explanation": "'Cold' (soğuk) tek hecelidir ve karşılaştırma durumunda sonuna '-er' takısı alarak 'colder' olur."
      },
      {
        "id": "e5-1-t9-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: A house is ________ than a flat. (expensive)",
        "options": [
          "expensiver",
          "more expensive",
          "expensive",
          "most expensive"
        ],
        "correct": 1,
        "explanation": "'Expensive' (pahalı) çok heceli bir sıfattır, bu yüzden önüne 'more' (daha) getirilerek karşılaştırma yapılır."
      }
    ],
    test10: [
      {
        "id": "e5-1-t10-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the sentence and fill in the blank: 'I ________ up at 7 o'clock every morning.'",
        "options": [
          "wakes",
          "wake",
          "am waking",
          "waking"
        ],
        "correct": 1,
        "explanation": "'Every morning' (her sabah) ifadesi Geniş Zaman (Simple Present) gerektirir. 'I' öznesi ile fiil ek almaz, yalın halinde kullanılır (wake)."
      },
      {
        "id": "e5-1-t10-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the time: 08:45. Which option is correct?",
        "options": [
          "It is quarter past eight.",
          "It is quarter to eight.",
          "It is quarter to nine.",
          "It is half past eight."
        ],
        "correct": 2,
        "explanation": "08:45 saati 'dokuza çeyrek var' şeklinde okunur. İngilizcede 'çeyrek var' ifadesi 'quarter to' kalıbıyla söylenir (quarter to nine)."
      },
      {
        "id": "e5-1-t10-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the dialogue. A: '________ do you have lunch?' B: 'At half past twelve.'",
        "options": [
          "Where",
          "What",
          "Who",
          "What time"
        ],
        "correct": 3,
        "explanation": "Cevapta 'buçukta' (at half past twelve) diyerek bir saat/zaman belirtildiği için soruda 'Saat kaçta?' anlamına gelen 'What time' sorulmalıdır."
      },
      {
        "id": "e5-1-t10-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the sentence: 'She has a terrible toothache.' What is your advice?",
        "options": [
          "She should eat some chocolate.",
          "She shouldn't go to the dentist.",
          "She shouldn't eat candies.",
          "She should drink cold water."
        ],
        "correct": 2,
        "explanation": "Dişi ağrıyan (toothache) birine verilecek en mantıklı tavsiye 'şeker yememesi gerektiği'dir (shouldn't eat candies)."
      },
      {
        "id": "e5-1-t10-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: 'He has a runny nose. He needs a ________.'",
        "options": [
          "plaster",
          "tissue",
          "blanket",
          "syrup"
        ],
        "correct": 1,
        "explanation": "Burun akıntısı (runny nose) olan birinin peçeteye/kağıt mendile (tissue) ihtiyacı vardır."
      },
      {
        "id": "e5-1-t10-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the dialogue. Doctor: 'What is the ________ with you?' Patient: 'I feel cold and tired.'",
        "options": [
          "illness",
          "health",
          "matter",
          "problem"
        ],
        "correct": 2,
        "explanation": "İngilizcede 'Neyin var? / Sorun nedir?' diye sormak için kalıplaşmış olan 'What is the matter with you?' ifadesi kullanılır."
      },
      {
        "id": "e5-1-t10-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: 'My brother ________ play the piano, but he can play the guitar.'",
        "options": [
          "can",
          "can't",
          "should",
          "must"
        ],
        "correct": 1,
        "explanation": "Cümledeki 'but' (ama) bağlacı zıtlık bildirir. Gitar çalabildiğine (can) göre, piyanoyu çalamıyordur (can't)."
      },
      {
        "id": "e5-1-t10-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the dialogue. A: 'Do you like board games?' B: 'Yes, I really enjoy playing ________.'",
        "options": [
          "dodgeball",
          "tag",
          "chess",
          "hide and seek"
        ],
        "correct": 2,
        "explanation": "Soru 'masa oyunlarını' (board games) sormaktadır. Şıklardaki tek masa oyunu satrançtır (chess)."
      },
      {
        "id": "e5-1-t10-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: 'He is from Spain. He speaks ________.'",
        "options": [
          "Spain",
          "Spanish",
          "English",
          "Italian"
        ],
        "correct": 1,
        "explanation": "İspanya'dan (Spain) gelen biri İspanyolca (Spanish) konuşur."
      },
      {
        "id": "e5-1-t10-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: 'The hospital is ________ the pharmacy and the park.'",
        "options": [
          "next to",
          "opposite",
          "between",
          "under"
        ],
        "correct": 2,
        "explanation": "İki farklı yer (pharmacy and park) belirtildiği için hastane bu iki yerin 'arasında' (between) olmalıdır."
      },
      {
        "id": "e5-1-t10-11",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the sentence: 'I want to buy some medicine. I should go to the ________.'",
        "options": [
          "bakery",
          "library",
          "pharmacy",
          "toy shop"
        ],
        "correct": 2,
        "explanation": "İlaç (medicine) satın almak isteyen birinin eczaneye (pharmacy) gitmesi gerekir."
      },
      {
        "id": "e5-1-t10-12",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the direction: '________ straight ahead and take the second right.'",
        "options": [
          "Turn",
          "Cross",
          "Go",
          "Take"
        ],
        "correct": 2,
        "explanation": "Düz gitmek anlamındaki yön tarifi kalıbı 'Go straight ahead' şeklinde kullanılır."
      },
      {
        "id": "e5-1-t10-13",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the dialogue. A: 'Can you ride a horse?' B: 'No, ________.'",
        "options": [
          "I am not",
          "I don't",
          "I can",
          "I can't"
        ],
        "correct": 3,
        "explanation": "Soru 'Can' yardımcı fiili ile sorulduğu için ve cevap 'No' (Hayır) ile başladığı için 'I can't' kullanılmalıdır."
      },
      {
        "id": "e5-1-t10-14",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the text: 'He loves folding paper and making shapes. His favorite hobby is ________.'",
        "options": [
          "collecting stamps",
          "doing origami",
          "playing checkers",
          "hiking"
        ],
        "correct": 1,
        "explanation": "Kağıt katlayıp şekiller yapmak (folding paper) origami yapmaktır (doing origami)."
      },
      {
        "id": "e5-1-t10-15",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the text: 'We usually play ________ in the garden. One person closes their eyes and tries to catch us.'",
        "options": [
          "tic-tac-toe",
          "chess",
          "blind man's buff",
          "dodgeball"
        ],
        "correct": 2,
        "explanation": "Bir kişinin gözlerini kapatıp (closes their eyes) diğerlerini yakalamaya çalıştığı oyun körebedir (blind man's buff)."
      },
      {
        "id": "e5-1-t10-16",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: 'I wash my ________ before breakfast.'",
        "options": [
          "teeth",
          "hair",
          "hands and face",
          "clothes"
        ],
        "correct": 2,
        "explanation": "Sabah rutinlerinde kahvaltıdan önce eller ve yüz (hands and face) yıkanır. Dişler fırçalanır (brush), saç taranır (comb)."
      },
      {
        "id": "e5-1-t10-17",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the sentence: 'My mother is ________ dinner in the kitchen right now.'",
        "options": [
          "prepare",
          "prepares",
          "preparing",
          "prepared"
        ],
        "correct": 2,
        "explanation": "'Right now' (şu an) ifadesi ve 'is' yardımcı fiili kullanıldığı için fiile '-ing' takısı getirilmelidir (preparing)."
      },
      {
        "id": "e5-1-t10-18",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank with the correct question form: '________ a hospital near here?'",
        "options": [
          "Is there",
          "Are there",
          "There is",
          "There are"
        ],
        "correct": 0,
        "explanation": "Cümle bir soru cümlesidir ve 'bir hastane' (a hospital) tekil olduğu için soru 'Is there' kalıbıyla başlar."
      },
      {
        "id": "e5-1-t10-19",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Fill in the blank: 'A cheetah is ________ than a turtle.'",
        "options": [
          "fast",
          "faster",
          "more fast",
          "fastest"
        ],
        "correct": 1,
        "explanation": "İki hayvan karşılaştırılmaktadır. 'Fast' (hızlı) tek heceli bir sıfat olduğu için sonuna '-er' takısı alarak 'faster' (daha hızlı) olur."
      },
      {
        "id": "e5-1-t10-20",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the sentence: 'The library is ________ the school. They are face to face across the street.'",
        "options": [
          "next to",
          "behind",
          "under",
          "opposite"
        ],
        "correct": 3,
        "explanation": "'Face to face across the street' (caddenin karşısında yüz yüze) ifadesi, iki binanın 'karşılıklı' (opposite) olduğunu gösterir."
      }
    ]
  },
  term2: {
   test1: [
      // --- 2. DÖNEM GÖRSEL ODAKLI VE SEÇMELİ SORULAR ---
      {
        id: "e5-2-t1-img-01",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki yiyeceğe göre boşluğu doldurunuz. 'I love traditional Italian food. My favorite is ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/pasta.webp", // Makarna görseli
        options: ["pizza", "pasta", "pancake", "pide"],
        correct: 1,
        explanation: "Görselde İtalyan mutfağına ait makarna (pasta) görülmektedir.",
      },
      {
        id: "e5-2-t1-img-02",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki hayvana ve cümleye göre uygun kelimeyi seçiniz. 'A elephant is ________ than a monkey.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/elephant-monkey.webp", // Fil ve maymun yan yana
        options: ["smaller", "heavier", "thinner", "faster"],
        correct: 1,
        explanation: "Fil, maymundan daha ağırdır. Karşılaştırma cümlesinde 'daha ağır' anlamına gelen 'heavier' kullanılmalıdır.",
      },
     {
        id: "e5-2-t1-img-03",
        subject: "ingilizce",
        term: 2, // <-- İŞTE UNUTULAN VE SİSTEMİ DURDURAN O KÜÇÜK SATIR BURADA!
        prompt: "Görseldeki parti malzemesine göre boşluğu doldurunuz. 'We need lots of colorful ____ for the birthday party.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/balloons.webp",
        options: ["candles", "invitation cards", "balloons", "presents"],
        correct: 2,
        explanation: "Görselde doğum günü partileri için kullanılan renkli balonlar (balloons) yer almaktadır.",
      },
      {
        id: "e5-2-t1-img-04",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki fitness aktivitesine göre cümleyi tamamlayınız. 'He likes ________ in the park at weekends.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/jogging.webp", // Hafif tempo koşan adam
        options: ["jogging", "swimming", "lifting weights", "playing chess"],
        correct: 0,
        explanation: "Görseldeki kişi parkta hafif tempolu koşu (jogging) yapmaktadır.",
      },
      {
        id: "e5-2-t1-img-05",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki vahşi hayvanın yaşam alanına (habitat) göre boşluğu doldurunuz. 'Lions are wild animals. They live in the ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/savannah.webp", // Savan/Doğa görseli
        options: ["ocean", "desert", "savannah", "farm"],
        correct: 2,
        explanation: "Aslanlar vahşi hayvanlardır ve doğal yaşam alanları savanlardır (savannah).",
      },
      {
        id: "e5-2-t1-img-06",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki içeceğe göre diyalogdaki boşluğu doldurunuz. A: 'Would you like some ____?' B: 'Yes, please. I am very thirsty.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/lemonade.webp", // Limonata bardağı
        options: ["tea", "coffee", "lemonade", "milk"],
        correct: 2,
        explanation: "Görselde buzlu ve limonlu bir bardak limonata (lemonade) sunulmaktadır.",
      },
      {
        id: "e5-2-t1-img-07",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki çiftlik hayvanının yaptığı eyleme göre boşluğu doldurunuz. 'Look at the horse! It is ____ fast.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/horse-running.webp", // Koşan at
        options: ["swimming", "running", "flying", "climbing"],
        correct: 1,
        explanation: "Görseldeki at hızla koşmaktadır (running). Şimdiki zaman yapısına uygundur.",
      },
      {
        id: "e5-2-t1-img-08",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki davetiyeye göre parti ne zamandır? 'When is the party?'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/invitation-card.webp", // Üzerinde "Sunday, 4 pm" yazan kart
        options: ["On Monday", "On Saturday", "On Wednesday", "On Sunday"],
        correct: 3,
        explanation: "Davetiye kartının (invitation card) üzerinde gün olarak Pazar (Sunday) belirtilmiştir.",
      },
      {
        id: "e5-2-t1-img-09",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki spor kartına göre canlının türünü seçiniz. 'Dolphins live in the ocean. They are ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/dolphin.webp", // Yunus balığı görseli
        options: ["reptiles", "birds", "mammals", "amphibians"],
        correct: 2,
        explanation: "Yunuslar okyanusta yaşarlar ancak balık değil, memeli (mammals) hayvanlardır.",
      },
      {
        id: "e5-2-t1-img-10",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki kutlama türüne göre boşluğu doldurunuz. 'They are celebrating their ____ with a big cake.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/birthday-party.webp", // Doğum günü pastalı çocuk partisi
        options: ["Halloween", "New Year", "Birthday", "Graduation"],
        correct: 2,
        explanation: "Görselde üzerinde mumlar olan bir pasta ile doğum günü (birthday) kutlanmaktadır.",
      },
      {
        id: "e5-2-t1-img-11",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki menü kartına göre hangisi bir tatlıdır (dessert)?",
        imageUrl: "/images/grade5/ingilizce/term2/test1/menu.webp", // Menü görseli (Soup, Pizza, Tea, Pudding içeren)
        options: ["Soup", "Pizza", "Tea", "Pudding"],
        correct: 3,
        explanation: "Menüdeki seçeneklerden puding (pudding) bir tatlı (dessert) çeşididir.",
      },
      {
        id: "e5-2-t1-img-12",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki kaplumbağa ve tavşan kıyaslamasına göre boşluğu doldurunuz. 'A turtle is ________ than a rabbit.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/turtle-rabbit.webp", // Kaplumbağa ve tavşan
        options: ["faster", "slower", "taller", "bigger"],
        correct: 1,
        explanation: "Kaplumbağa tavşandan daha yavaştır. 'Daha yavaş' demek için 'slower' yapısı kullanılır.",
      },
      {
        id: "e5-2-t1-img-13",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki aktiviteye göre boşluğu doldurunuz. 'My favorite fitness activity is ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/cycling.webp", // Bisiklete binen çocuk
        options: ["cycling", "trekking", "swimming", "workout"],
        correct: 0,
        explanation: "Görselde bisiklete binme sporu yani 'cycling' yapılmaktadır.",
      },
      {
        id: "e5-2-t1-img-14",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki tabelaya göre evcil hayvan sahibinin ne yapması gerekir? 'You should ________ your dog.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/walk-dog.webp", // Köpeğini gezdiren adam tabelası
        options: ["feed", "vaccinate", "walk", "adopt"],
        correct: 2,
        explanation: "Görselde köpeği tasmasından tutup yürütme sembolü vardır. Köpek gezdirmek 'walk the dog' kalıbıdır.",
      },
      {
        id: "e5-2-t1-img-15",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki vahşi hayvana göre cümleyi tamamlayınız. 'The ________ is a dangerous reptile with big teeth.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/crocodile.webp", // Timsah görseli
        options: ["crocodile", "shark", "tiger", "snake"],
        correct: 0,
        explanation: "Görseldeki büyük dişli, tehlikeli sürüngen bir timsahtır (crocodile).",
      },
      {
        id: "e5-2-t1-img-16",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki doğum günü detayına göre soruyu cevaplayınız. 'How many candles are there on the cake?'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/cake-candles.webp", // Üzerinde 5 mum olan pasta
        options: ["three", "four", "five", "six"],
        correct: 2,
        explanation: "Görseldeki pastanın üzerinde tam 5 (five) adet mum bulunmaktadır.",
      },
      {
        id: "e5-2-t1-img-17",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki restoranda garsona ne sipariş edersiniz? 'I want to drink something hot. Can I have a cup of ____, please?'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/tea.webp", // Fincanda sıcak çay
        options: ["orange juice", "lemonade", "tea", "iced water"],
        correct: 2,
        explanation: "Görselde fincan içinde dumanı tüten sıcak bir çay (tea) resmi vardır.",
      },
      {
        id: "e5-2-t1-img-18",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki tabelaya göre doğayı korumak için ne yapmalıyız? 'We should ________.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/plant-trees.webp", // Fidan diken eller sembolü
        options: ["cut down trees", "plant trees", "pollute the environment", "hunt wild animals"],
        correct: 1,
        explanation: "Görselde fidan dikme / ağaçlandırma eylemi gösterilmektedir (plant trees).",
      },
      {
        id: "e5-2-t1-img-19",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki hayvan barınağı (shelter) aktivitesine göre boşluğu doldurunuz. 'The girl is ____ the street dogs.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/feeding-dogs.webp", // Köpeklere mama veren kız
        options: ["buying", "feeding", "frightening", "riding"],
        correct: 1,
        explanation: "Görseldeki kız köpekleri beslemektedir (feeding).",
      },
      {
        id: "e5-2-t1-img-20",
        subject: "ingilizce",
        term: 2,
        prompt: "Görseldeki çocuğun fitness yapmak istememe sebebini belirten kelimeyi seçiniz. 'I can't lift this weight. I am very ________.'",
        imageUrl: "/images/grade5/ingilizce/term2/test1/weak-boy.webp", // Halteri kaldıramayan cılız çocuk
        options: ["strong", "fast", "heavy", "weak"],
        correct: 3,
        explanation: "Halteri kaldıramayan çocuk güçsüz / zayıf (weak) olduğunu belirtmektedir.",
      }
    ],
    test2: [
      // --- 5. SINIF İNGİLİZCE 2. DÖNEM TEST 2 ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "e5-2-t2-img-01",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the picture. Fill in the blank according to the classroom rule. 'Please, ________ your hand to speak.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/raise-hand.webp",
        options: ["raise", "open", "listen", "write"],
        correct: 0,
        explanation: "Görselde parmak kaldıran bir student vardır. Sınıfta söz istemek için el kaldırmak 'raise your hand' kalıbı ile ifade edilir."
      },
      {
        id: "e5-2-t2-img-02",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the picture and complete the family life activity. 'My father and I love ________ the car together on weekends.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/washing-car.webp",
        options: ["driving", "washing", "buying", "repairing"],
        correct: 1,
        explanation: "Görselde babasıyla birlikte bahçede araba yıkayan bir çocuk vardır. Araba yıkamak 'washing the car' eylemidir."
      },
      {
        id: "e5-2-t2-img-03",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the visual. What is the weather like in nature today? 'It is ________ and windy.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/stormy-weather.webp",
        options: ["sunny", "hot", "stormy", "warm"],
        correct: 2,
        explanation: "Görselde şimşeklerin çaktığı, fırtınalı bir doğa resmi yer almaktadır. Fırtınalı 'stormy' anlamına gelir."
      },
      {
        id: "e5-2-t2-img-04",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the neighborhood map. Where is the museum? 'The museum is ________ the park and the bank.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/map-between.webp",
        options: ["next to", "opposite", "between", "behind"],
        correct: 2,
        explanation: "Görseldeki haritada müze binası, park ile bankanın tam ortasında (arasında) konumlanmıştır; yani 'between' kullanılmalıdır."
      },
      {
        id: "e5-2-t2-img-05",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the future life prediction illustration. 'In the future, people will have ________ to travel into space.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/flying-cars.webp",
        options: ["flying cars", "telephones", "traditional books", "old houses"],
        correct: 0,
        explanation: "Görselde geleceğin teknolojik dünyasında gökyüzünde uçan arabalar (flying cars) şematize edilmiştir."
      },
      {
        id: "e5-2-t2-img-06",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the world globe graphic. Neil is from Canada. His nationality is ________.",
        imageUrl: "/images/grade5/ingilizce/term2/test2/canada-globe.webp",
        options: ["Canadian", "British", "French", "German"],
        correct: 0,
        explanation: "Kanada (Canada) ülkesinde yaşayan bir bireyin milliyeti 'Canadian' (Kanadalı) olarak söylenir."
      },
      {
        id: "e5-2-t2-img-07",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the picture about personal daily routine. 'I always ________ my teeth twice a day.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/brush-teeth.webp",
        options: ["wash", "brush", "comb", "clean"],
        correct: 1,
        explanation: "Görselde dişlerini fırçalayan bir çocuk görülmektedir. Diş fırçalamak 'brush teeth' kalıbıdır."
      },
      {
        id: "e5-2-t2-img-08",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the school objects. Which class do these school items belong to? 'They are for ________ class.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/art-palette.webp",
        options: ["Maths", "Art", "Science", "History"],
        correct: 1,
        explanation: "Görselde resim tuvali, fırçalar og boya paleti bulunmaktadır. Bu malzemeler Görsel Sanatlar (Art) dersine aittir."
      },
      {
        id: "e5-2-t2-img-09",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the picture. Fill in the blank with the correct phrase about the text message. 'Don't cross the street. Look at the light. It is ________.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/red-light.webp",
        options: ["green", "yellow", "red", "blue"],
        correct: 2,
        explanation: "Görselde yayalar için durulması gerektiğini belirten kırmızı trafik ışığı (red light) yanmaktadır."
      },
      {
        id: "e5-2-t2-img-10",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the animal in nature. 'A ________ can run very fast, but it can't climb trees.'",
        imageUrl: "/images/grade5/ingilizce/term2/test2/cheetah.webp",
        options: ["cheetah", "turtle", "monkey", "koala"],
        correct: 0,
        explanation: "Görselde doğada hızla koşan bir çita (cheetah) şematize edilmiştir."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "e5-2-t2-11",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the classroom dialogue. Teacher: '________ is the dictionary?' Student: 'It is on the teacher's desk.'",
        options: ["What", "Where", "When", "Who"],
        correct: 1,
        explanation: "Cevapta sözlüğün öğretmenin masasında (on the desk) olduğu belirtilerek yer bildirilmiştir. Yer soran soru kelimesi 'Where'dir."
      },
      {
        id: "e5-2-t2-12",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the text about family life: 'My mother cooks delicious food in the ________, and we have dinner together.'",
        options: ["bathroom", "bedroom", "kitchen", "garage"],
        correct: 2,
        explanation: "Yemek pişirme eylemi evin mutfak (kitchen) bölümünde gerçekleştirilir."
      },
      {
        id: "e5-2-t2-13",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct option about nature and animals: 'Birds can ________ high in the sky, but they can't swim.'",
        options: ["run", "fly", "jump", "walk"],
        correct: 1,
        explanation: "Kuşların gökyüzünde gerçekleştirebildiği doğal yetenek uçmaktır (fly)."
      },
      {
        id: "e5-2-t2-14",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about city life: 'I want to buy some fresh bread. I should go to the ________ in our neighborhood.'",
        options: ["pharmacy", "bakery", "hospital", "library"],
        correct: 1,
        explanation: "Taze ekmek satın almak için mahalledeki fırına (bakery) gidilir."
      },
      {
        id: "e5-2-t2-15",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the future life prediction: 'In the year 2050, robots ________ do all the hard housework for people.'",
        options: ["did", "will", "are", "were"],
        explanation: "Geleceğe yönelik plan ve tahminlerde (In the year 2050) gelecek zaman yardımcı fiili olan 'will' kullanılır.",
        correct: 1
      },
      {
        id: "e5-2-t2-16",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the dialogue about life in the world. Tom: 'Where is Amy from?' Jack: 'She is from Germany. She speaks ________.'",
        options: ["German", "Germany", "French", "English"],
        correct: 0,
        explanation: "Almanya'dan (Germany) gelen bir kişi dil olarak Almanca (German) konuşur."
      },
      {
        id: "e5-2-t2-17",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the text about personal routine: 'I am a successful student. I always ________ my homework before I watch TV.'",
        options: ["make", "do", "has", "have"],
        correct: 1,
        explanation: "İngilizcede ödev yapmak eylemi daima 'do homework' kalıbı ile birleşir."
      },
      {
        id: "e5-2-t2-18",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about school life: 'We have fun experiments in the ________ lab in our school.'",
        options: ["music", "art", "science", "history"],
        correct: 2,
        explanation: "Eğlenceli bilimsel deneyler okulun fen laboratuvarında (science lab) yapılır."
      },
      {
        id: "e5-2-t2-19",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct comparative form: 'An elephant is ________ than a tiger.' (heavy)",
        options: ["heavier", "heavy", "more heavy", "heaviest"],
        correct: 0,
        explanation: "Tek heceli/kısa sıfatlarda karşılaştırma (Comparative) yapılırken sıfatın sonuna '-er/ier' takısı gelir (heavier)."
      },
      {
        id: "e5-2-t2-20",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the conversation about city rules. Officer: 'Excuse me! You ________ park your car here. Look at the sign.'",
        options: ["should", "can", "mustn't", "must"],
        correct: 2,
        explanation: "Tabelaya göre yasak olan durumlarda veya kurallara aykırı durumlarda 'mustn't' (yasak/yapmamalısın) kullanılır."
      }
    ], 
    test3: [
      // --- 5. SINIF İNGİLİZCE 2. DÖNEM TEST 3 ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "e5-2-t3-img-01",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the movie poster. What type of movie is this? 'I think it is a/an ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/animation-poster.webp",
        options: ["horror movie", "animation", "documentary", "western"],
        correct: 1,
        explanation: "Görselde renkli, sevimli hayvan karakterlerinin yer aldığı bir çizgi sinema/animasyon (animation) afişi bulunmaktadır."
      },
      {
        id: "e5-2-t3-img-02",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the visual. What does the boy think about this movie? 'He thinks it is ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/scared-boy-movie.webp",
        options: ["funny", "scary", "boring", "pleasant"],
        correct: 1,
        explanation: "Görselde korkunç bir sahne izlerken gözlerini kapatan ve çok korkan bir çocuk var. Bu yüzden film onun için korkutucudur (scary)."
      },
      {
        id: "e5-2-t3-img-03",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the party list. What do we need for the decoration? 'We need some ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/party-decor-list.webp",
        options: ["beverages", "confetti and balloons", "birthday cake", "invitation cards"],
        correct: 1,
        explanation: "Görseldeki parti hazırlık listesinde süsleme (decoration) başlığının altında konfeti ve balonlar (confetti and balloons) yer almaktadır."
      },
      {
        id: "e5-2-t3-img-04",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the birthday cake in the picture. Complete the sentence. 'Tim is ________ years old today.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/birthday-cake-11.webp",
        options: ["nine", "ten", "eleven", "twelve"],
        correct: 2,
        explanation: "Görseldeki doğum günü pastasının üzerinde tam 11 (eleven) adet mum yanmaktadır."
      },
      {
        id: "e5-2-t3-img-05",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the invitation card. When is the party? 'It is on ________.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/party-card-date.webp",
        options: ["Saturday", "Sunday", "Friday", "Wednesday"],
        correct: 0,
        explanation: "Davetiye kartının (invitation card) üzerinde partinin günü Cumartesi (Saturday) olarak açıkça belirtilmiştir."
      },
      {
        id: "e5-2-t3-img-06",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the fitness activity in the picture. Complete the sentence. 'My brother likes ________ in the pool on Fridays.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/swimming-pool.webp",
        options: ["jogging", "cycling", "swimming", "hiking"],
        correct: 2,
        explanation: "Görselde havuzda yüzen bir çocuk modellenmiştir. Yüzmek 'swimming' elemidir."
      },
      {
        id: "e5-2-t3-img-07",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the picture. Which sport can she do? 'She is very strong. She can ____.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/weightlifting.webp",
        options: ["play tennis", "lift weights", "ride a horse", "do origami"],
        correct: 1,
        explanation: "Görselde spor salonunda ağırlık/halter kaldıran güçlü bir kız gösterilmektedir. Ağırlık kaldırmak 'lift weights' sporudur."
      },
      {
        id: "e5-2-t3-img-08",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the animal shelter sign. What should the children do? 'They should ________ the animals.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/adopt-animals.webp",
        options: ["hunt", "frighten", "adopt", "sell"],
        correct: 2,
        explanation: "Görseldeki barınak panosunda 'Don't buy, adopt!' (Satın almayın, sahiplenin!) yazmaktadır. Hayvanları sahiplenmek 'adopt' kelimesidir."
      },
      {
        id: "e5-2-t3-img-09",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the child at the animal shelter. What is he doing? 'He is ________ the street cats.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/feeding-cats.webp",
        options: ["feeding", "riding", "washing", "buying"],
        correct: 0,
        explanation: "Görselde kedilerin kabına mama döken merhametli bir çocuk vardır. Hayvan beslemek 'feeding' eylemidir."
      },
      {
        id: "e5-2-t3-img-10",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the poster about saving nature. Complete the slogan. 'We must ________.'",
        imageUrl: "/images/grade5/ingilizce/term2/test3/save-water-poster.webp",
        options: ["waste energy", "cut down trees", "save water", "pollute rivers"],
        correct: 2,
        explanation: "Görseldeki çevre afişinde damlayan bir musluk resmi ve altında su tasarrufu yapılması gerektiğini belirten 'save water' sloganı vardır."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "e5-2-t3-11",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the movie conversation. Sue: 'What is the film about?' Tim: 'It is about a clever dog. It is very ________.'",
        options: ["boring", "intelligent", "frightening", "scary"],
        correct: 1,
        explanation: "Soruda köpeğin 'clever' (akıllı) olduğu söylenmiştir. Şıklarda buna eş anlam olabilecek kelime 'intelligent' (zeki) seçeneğidir."
      },
      {
        id: "e5-2-t3-12",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about movie preferences: 'I don't like horror movies because I think they are ________.'",
        options: ["funny", "exciting", "scary", "entertaining"],
        correct: 2,
        explanation: "Korku filmlerini sevmeme sebebi onların korkutucu (scary) olmasıyla açıklanabilir."
      },
      {
        id: "e5-2-t3-13",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the party dialogue. Sally: 'Can I join your birthday party?' Kevin: 'Sure! Here is your ________.'",
        options: ["shopping list", "invitation card", "beverage", "birthday cake"],
        correct: 1,
        explanation: "Birini partiye davet ederken veya kabul ederken ona davetiye kartı (invitation card) verilir."
      },
      {
        id: "e5-2-t3-14",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about party preparations: 'We must buy some ________ like fruit juice and lemonade for the guests.'",
        options: ["candles", "presents", "beverages", "decorations"],
        correct: 2,
        explanation: "Meyve suyu ve limonata gibi içeceklere genel olarak İngilizcede 'beverages' (içecekler) denir."
      },
      {
        id: "e5-2-t3-15",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct phrase for fitness life: 'To stay healthy and fit, we should ________ every morning.'",
        options: ["eat junk food", "do exercise", "watch TV for hours", "sleep all day"],
        correct: 1,
        explanation: "Sağlıklı ve formda kalmak (healthy and fit) için her sabah egzersiz yapmak (do exercise) gerekir."
      },
      {
        id: "e5-2-t3-16",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the text about sports: 'Mary loves outdoor sports. Her favorite activity is ________ in the green forest.'",
        options: ["trekking", "playing chess", "doing origami", "watching cartoons"],
        correct: 0,
        explanation: "Yeşil ormanda açık havada yapılabilecek en uygun doğa sporu doğa yürüyüşüdür (trekking)."
      },
      {
        id: "e5-2-t3-17",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the conversation about an animal shelter. Pupil: 'Can we ________ the dogs in the shelter?' Officer: 'Yes, but don't give them unhealthy food.'",
        options: ["hunt", "feed", "frighten", "sell"],
        correct: 1,
        explanation: "Barınaktaki köpeklere yiyecek verilmesinden bahsedildiği için boşluğa beslemek anlamına gelen 'feed' fiili gelmelidir."
      },
      {
        id: "e5-2-t3-18",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct option about animal care: 'Vets (veterinarians) ________ sick or injured animals at the shelter.'",
        options: ["examine and treat", "hunt and kill", "scare", "sell"],
        correct: 0,
        explanation: "Veterinerlerin (vets) görevi hasta veya yaralı hayvanları muayene ve tedavi etmektir (examine and treat)."
      },
      {
        id: "e5-2-t3-19",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct comparative sentence about nature: 'A jungle is ________ than a small park.' (beautiful)",
        options: ["beautifuler", "more beautiful", "beautiful", "beautifulest"],
        correct: 1,
        explanation: "'Beautiful' çok heceli/uzun bir sıfat olduğu için karşılaştırma (Comparative) kuralına göre başına 'more' alır."
      },
      {
        id: "e5-2-t3-20",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the slogan about a green city: 'We shouldn't ________ the environment. We must keep our city clean.'",
        options: ["protect", "save", "pollute", "plant"],
        correct: 2,
        explanation: "Şehri temiz tutmak istiyorsak çevreyi kirletmemeliyiz (shouldn't pollute)."
      }
    ],
    test4: [
      // --- 5. SINIF İNGİLİZCE 2. DÖNEM TEST 4 ---
      // [1-10 Arası Sorular: Görsel Odaklı / Şekilli Sorular]
      {
        id: "e5-2-t4-img-01",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the visual. What are they doing on their family life day? 'We are planting ________ in our garden today.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/planting-flowers.webp",
        options: ["trees", "flowers", "vegetables", "fruits"],
        correct: 1,
        explanation: "Görselde bahçede renkli çiçekler (crumbs/flowers) diken bir aile şematize edilmiştir."
      },
      {
        id: "e5-2-t4-img-02",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the classroom picture. Fill in the blank according to the student's action. 'Timothy, please don't ________ in the classroom.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/running-classroom.webp",
        options: ["read", "run", "listen", "write"],
        correct: 1,
        explanation: "Görselde sınıf içinde koşan ve kuralı ihlal eden bir çocuk vardır. Sınıfta koşmak 'run' fiili ile belirtilir."
      },
      {
        id: "e5-2-t4-img-03",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the neighborhood map. Where is the post office? 'The post office is ________ the library.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/map-opposite.webp",
        options: ["next to", "opposite", "between", "behind"],
        correct: 1,
        explanation: "Görseldeki haritada postane binası ve kütüphane caddenin karşılıklı iki tarafında (yüz yüze) konumlanmıştır; yani 'opposite' kullanılmalıdır."
      },
      {
        id: "e5-2-t4-img-04",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the animal in nature. 'A ________ is a wild animal with sharp teeth. It lives in the ocean.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/shark.webp",
        options: ["dolphin", "shark", "whale", "crocodile"],
        correct: 1,
        explanation: "Görselde okyanustaki tehlikeli ve keskin dişli vahşi bir köpekbalığı (shark) şematize edilmiştir."
      },
      {
        id: "e5-2-t4-img-05",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the visual about future technology prediction. 'In the future, robots will cook and clean. They will be our ________.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/robot-helper.webp",
        options: ["teachers", "helpers", "drivers", "doctors"],
        correct: 1,
        explanation: "Görselde ev işlerine yardım eden, yemek pişiren teknolojik bir yardımcı robot (helper) resmi yer almaktadır."
      },
      {
        id: "e5-2-t4-img-06",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the world chart. Hans is from Germany. He can speak ________.",
        imageUrl: "/images/grade5/ingilizce/term2/test4/germany-flag.webp",
        options: ["German", "Germany", "French", "English"],
        correct: 0,
        explanation: "Almanya (Germany) ülkesinden gelen bir bireyin konuştuğu dil 'German' (Almanca) olarak ifade edilir."
      },
      {
        id: "e5-2-t4-img-07",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the personal life routine image. 'I always ________ my hair before I go to school.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/comb-hair.webp",
        options: ["wash", "brush", "comb", "cut"],
        correct: 2,
        explanation: "Görselde aynanın önünde saçını tarayan bir çocuk görülmektedir. Saç taramak 'comb hair' kalıbıdır."
      },
      {
        id: "e5-2-t4-img-08",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the school objects. Which subject do these items belong to? 'They are for ________ class.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/geography-globe.webp",
        options: ["Maths", "Art", "Social Studies", "Science"],
        correct: 2,
        explanation: "Görselde dünya küresi, harita ve pusula bulunmaktadır. Bu materyaller Sosyal Bilgiler (Social Studies) dersine aittir."
      },
      {
        id: "e5-2-t4-img-09",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the picture. Choose the correct food name on the table. 'For breakfast, I prefer eating ________ and honey.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/butter-honey.webp",
        options: ["butter", "cheese", "olives", "eggs"],
        correct: 0,
        explanation: "Görselde balın yanında duran geleneksel kahvaltılık tereyağı (butter) resmi bulunmaktadır."
      },
      {
        id: "e5-2-t4-img-10",
        subject: "ingilizce",
        term: 2,
        prompt: "Look at the fitness and health activity. 'They love ________ in the green park on sunny days.'",
        imageUrl: "/images/grade5/ingilizce/term2/test4/cycling-park.webp",
        options: ["cycling", "swimming", "running", "hiking"],
        correct: 0,
        explanation: "Görselde yeşil alanda bisiklet süren çocuklar şematize edilmiştir. Bisiklet sürmek 'cycling' anlamına gelir."
      },

      // [11-20 Arası Sorular: Teorik / Bilgi Odaklı Sorular]
      {
        id: "e5-2-t4-11",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the classroom life request. Student: 'Can I borrow your ________, please?' classmate: 'Sure! Here is my pencil.'",
        options: ["notebook", "pencil", "ruler", "eraser"],
        correct: 1,
        explanation: "Cevapta 'İşte benim kurşun kalemim' (Here is my pencil) dendiği için soruda kalem (pencil) istenmiştir."
      },
      {
        id: "e5-2-t4-12",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about family life: 'My brother usually ________ his bicycle in the afternoon after school.'",
        options: ["rides", "ride", "is riding", "riding"],
        correct: 0,
        explanation: "Cümledeki 'usually' (genellikle) kelimesi Geniş Zaman (Simple Present) gerektirir. 'My brother' (He) tekil özne olduğu için fiil '-s' takısı alır (rides)."
      },
      {
        id: "e5-2-t4-13",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct description about life in nature: 'A ________ is a slow animal with a hard shell on its back.'",
        options: ["rabbit", "turtle", "cheetah", "monkey"],
        correct: 1,
        explanation: "Sırtında sert kabuğu olan yavaş doğa canlısı kaplumbağadır (turtle)."
      },
      {
        id: "e5-2-t4-14",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about city life: 'Excuse me, where is the nearest ________? I need to buy some medicine.'",
        options: ["bakery", "pharmacy", "library", "hospital"],
        correct: 1,
        explanation: "İlaç (medicine) satın alınabilecek mahalle veya şehir mekanı eczanedir (pharmacy)."
      },
      {
        id: "e5-2-t4-15",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the future life prediction sentence: 'Scientists believe that flying cars ________ be very common in the next fifty years.'",
        options: ["do", "did", "will", "are"],
        correct: 2,
        explanation: "Gelecek elli yıl içindeki tahminleri ve gelecek zamanı belirtmek için 'will' yardımcı fiili kullanılır."
      },
      {
        id: "e5-2-t4-16",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the dialogue about life in the world. Kevin: 'Are you from Britain?' Leo: 'Yes, I am. I speak ________.'",
        options: ["British", "English", "French", "Spanish"],
        correct: 1,
        explanation: "Büyük Britanya'dan (Britain) gelen kişilerin resmi ana dili İngilizcedir (English)."
      },
      {
        id: "e5-2-t4-17",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the text about personal routine: 'I have a healthy lifestyle. I ________ have a big breakfast every morning.'",
        options: ["always", "never", "seldom", "rarely"],
        correct: 0,
        explanation: "Sağlıklı yaşam tarzına (healthy lifestyle) sahip biri her sabah kahvaltısını 'her zaman' (always) yapar."
      },
      {
        id: "e5-2-t4-18",
        subject: "ingilizce",
        term: 2,
        prompt: "Complete the sentence about school life: 'Our teacher writes the English words on the classroom ________.'",
        options: ["desk", "board", "chair", "window"],
        correct: 1,
        explanation: "Sınıfta öğretmen kelimeleri veya notları yazı tahtasına (board) yazar."
      },
      {
        id: "e5-2-t4-19",
        subject: "ingilizce",
        term: 2,
        prompt: "Choose the correct comparative adjective form: 'A giraffe is ________ than a horse.' (tall)",
        options: ["tall", "taller", "more tall", "tallest"],
        correct: 1,
        explanation: "'Tall' (uzun) tek heceli/kısa bir sıfat olduğu için karşılaştırma kalıbında sonuna '-er' takısı eklenir (taller)."
      },
      {
        id: "e5-2-t4-20",
        subject: "ingilizce",
        term: 2,
        prompt: "Read the neighborhood conversation. Jack: 'We should protect the street animals.' Paul: 'You are right. We can ________ a dog from the shelter.'",
        options: ["hunt", "sell", "adopt", "frighten"],
        correct: 2,
        explanation: "Sokak hayvanlarını korumak için barınaktan bir köpek 'sahiplenilebilir' (adopt)."
      }
    ],// <-- test2 dizisi bitti
  } // <-- term2 nesnesi bitti
}; // <-- ingilizceData ana nesnesi bitti (Dosyanın tamamen kapanışı)
