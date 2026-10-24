import { SubjectData } from "./types";

// Özgün sorular. Test 1: kullanıcının Life / günlük rutinler isteğine göre yenilenmiştir.
// Güncel MEB ilk tema adı School Life; Life etiketi güncel resmî tema adı iddiası değildir.
// Müfredat kapsamı: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/752
// Müfredat kapsamı: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/753
export const ingilizceData: SubjectData = {
  "term1": {
    "test1": [
      {
            "id": "e6-1-t1-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the clock. Emma gets up at this time every morning. Which sentence is correct?",
            "options": [
                  "She gets up at a quarter to seven.",
                  "She gets up at half past seven.",
                  "She gets up at a quarter past seven.",
                  "She gets up at a quarter past eight."
            ],
            "correct": 2,
            "explanation": "Yelkovan 3’ü, akrep 7’yi biraz geçmiş konumu gösterir: 07.15. 'A quarter past seven' yediyi çeyrek geçe demektir.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/ingilizce/test-1/soru-01.svg",
            "imageAlt": "Emma’nın kalkış saati: analog saatte yelkovan 3’te, akrep 7 ile 8 arasında 7’ye yakın. Saat 07.15."
      },
      {
            "id": "e6-1-t1-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Mia's morning routine. What does she do after breakfast but before she leaves home?",
            "options": [
                  "She brushes her teeth.",
                  "She gets up.",
                  "She has breakfast.",
                  "She leaves home."
            ],
            "correct": 0,
            "explanation": "Kahvaltı 07.10, diş fırçalama 07.25, evden çıkış 07.40’tır. Kahvaltıdan sonra ve çıkıştan önce dişlerini fırçalar.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/ingilizce/test-1/soru-02.svg",
            "imageAlt": "Mia’nın sıralı sabah programı: 06.45 kalkış, 07.10 kahvaltı, 07.25 diş fırçalama, 07.40 evden çıkış."
      },
      {
            "id": "e6-1-t1-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Ben's after-school plan. Which sentence is correct?",
            "options": [
                  "He plays football on Tuesday.",
                  "He goes swimming on Friday.",
                  "He does homework on Monday.",
                  "He plays football on Monday and Friday."
            ],
            "correct": 3,
            "explanation": "Ben pazartesi ve cuma futbol oynar; bu, haftada iki gündür. Salı ödev, çarşamba yüzme, perşembe okuma vardır.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/ingilizce/test-1/soru-03.svg",
            "imageAlt": "Ben’in okul sonrası planı: Monday football; Tuesday homework; Wednesday swimming; Thursday reading; Friday football."
      },
      {
            "id": "e6-1-t1-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the two clocks. Which sentence is correct?",
            "options": [
                  "Aylin leaves home after her lessons start.",
                  "Aylin leaves home before her lessons start.",
                  "Aylin leaves home at half past eight.",
                  "Her lessons start at a quarter to eight."
            ],
            "correct": 1,
            "explanation": "Aylin 07.45’te evden çıkar; dersleri 08.30’da başlar. 'Before' önce demektir; çıkış ders başlangıcından öncedir.",
            "imageWidth": 360,
            "imageHeight": 550,
            "imageUrl": "/grade6/ingilizce/test-1/soru-04.svg",
            "imageAlt": "İki analog saat: Aylin leaves home 07.45; lessons start 08.30. Her saatin akrebi ara konuma uygun çizilmiştir."
      },
      {
            "id": "e6-1-t1-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the chart. Complete the sentence: 'Tom ____ to school, but Anna ____ to school.'",
            "options": [
                  "takes the bus / walks",
                  "walks / walks",
                  "walks / takes the bus",
                  "takes the bus / takes the bus"
            ],
            "correct": 2,
            "explanation": "Tom yürüyerek, Anna otobüsle gider. Her iki özne de üçüncü tekil şahıstır: 'walks' ve 'takes the bus' kullanılır.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/ingilizce/test-1/soru-05.svg",
            "imageAlt": "Ulaşım tablosu: Tom için walk YES, bus NO; Anna için walk NO, bus YES."
      },
      {
            "id": "e6-1-t1-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Leo's evening routine. Which question has the answer 'At half past eight'?",
            "options": [
                  "What time does Leo have dinner?",
                  "What time does Leo do his homework?",
                  "What time does Leo go to bed?",
                  "What time does Leo read a book?"
            ],
            "correct": 3,
            "explanation": "Tabloda kitap okuma saati 20.30’dur; bu 'half past eight' olarak söylenir. Yemek 18.30, ödev 19.00, yatış 21.15’tir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/ingilizce/test-1/soru-06.svg",
            "imageAlt": "Leo’nun akşam programı: dinner 18.30, homework 19.00, read a book 20.30, go to bed 21.15."
      },
      {
            "id": "e6-1-t1-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Elif's weekly piano chart. She has a lesson only on the marked days. Which answer is correct?\n\n'How often does Elif have piano lessons?'",
            "options": [
                  "Three times a week.",
                  "Every day.",
                  "Once a week.",
                  "Twice a week."
            ],
            "correct": 0,
            "explanation": "Pazartesi, çarşamba ve cuma işaretlidir. Haftada üç kez için 'Three times a week' denir.",
            "imageWidth": 360,
            "imageHeight": 440,
            "imageUrl": "/grade6/ingilizce/test-1/soru-07.svg",
            "imageAlt": "Elif’in haftalık piyano çizelgesi: Mon YES, Tue NO, Wed YES, Thu NO, Fri YES, Sat NO, Sun NO."
      },
      {
            "id": "e6-1-t1-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "On weekdays, Oliver gets up at seven and has breakfast at half past seven. He walks to school at eight. At weekends, he gets up at nine.\n\nWhich sentence is correct?",
            "options": [
                  "He gets up at nine on weekdays.",
                  "He has breakfast before he goes to school on weekdays.",
                  "He goes to school by bus.",
                  "He gets up at the same time every day."
            ],
            "correct": 1,
            "explanation": "Oliver hafta içi 07.30’da kahvaltı yapar, 08.00’de okula yürür. Bu nedenle kahvaltı okula gitmeden öncedir. Hafta sonu kalkış saati farklıdır."
      },
      {
            "id": "e6-1-t1-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\n\nNora: Does your brother play basketball after school?\nSam: No, he ____. He ____ his homework first.",
            "options": [
                  "don't / do",
                  "doesn't / do",
                  "don't / does",
                  "doesn't / does"
            ],
            "correct": 3,
            "explanation": "'Does your brother...?' sorusuna olumsuz kısa cevap 'No, he doesn't' olur. Sonraki olumlu cümlede 'he' ile 'does his homework' kullanılır."
      },
      {
            "id": "e6-1-t1-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Lily says, 'I finish school at three. I rest for a short time, then I do my homework. I play games after my homework.'\n\nWhich is the correct order?",
            "options": [
                  "School → games → homework → rest",
                  "School → homework → rest → games",
                  "School → rest → homework → games",
                  "Rest → school → games → homework"
            ],
            "correct": 2,
            "explanation": "Lily önce okuldan çıkar, kısa süre dinlenir, sonra ödev yapar ve en son oyun oynar. 'Then' sonra, 'after' ardından anlamını verir."
      }
],
    "test2": [
      {
        "id": "e6-1-t2-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look! The students ____ their books right now.",
        "options": [
          "reads",
          "are reading",
          "read every day",
          "is reading"
        ],
        "correct": 1,
        "explanation": "'Look!' ve 'right now' şu anda yapılan bir işi gösterir. Çoğul özne 'the students' ile 'are reading' kullanılır."
      },
      {
        "id": "e6-1-t2-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the sentence: 'Zeynep ____ English for twenty minutes every evening.'",
        "options": [
          "studies",
          "study",
          "are studying",
          "studying"
        ],
        "correct": 0,
        "explanation": "'Every evening' bir alışkanlığı anlatır. 'Zeynep' (she) ile geniş zamanda 'study' fiili 'studies' olur."
      },
      {
        "id": "e6-1-t2-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the sentence: 'I usually ____ my homework at home, but I ____ in the library now.'",
        "options": [
          "am doing / work",
          "does / is working",
          "do / am working",
          "doing / works"
        ],
        "correct": 2,
        "explanation": "'Usually' ile alışkanlık için 'do', 'now' ile şu anki eylem için 'am working' kullanılır. Her iki bölümün öznesi 'I' olduğundan bu biçimler uygundur."
      },
      {
        "id": "e6-1-t2-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Teacher: Please work in pairs.\nWhat should the students do?",
        "options": [
          "Work alone.",
          "Leave the classroom.",
          "Put away all their books.",
          "Work with one partner."
        ],
        "correct": 3,
        "explanation": "'Work in pairs', ikili çalışmak demektir. Her öğrenci bir arkadaşıyla çalışır."
      },
      {
        "id": "e6-1-t2-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The teacher says, 'Please turn to page two hundred and forty-six.' Which page should you open?",
        "options": [
          "264",
          "426",
          "246",
          "206"
        ],
        "correct": 2,
        "explanation": "'Two hundred' 200, 'forty-six' 46 demektir. Birlikte 246 sayısını oluştururlar."
      },
      {
        "id": "e6-1-t2-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "How do you write 315 in words?",
        "options": [
          "Three hundred and fifty",
          "Three hundred and fifteen",
          "One hundred and thirty-five",
          "Three hundred and five"
        ],
        "correct": 1,
        "explanation": "315, 'three hundred and fifteen' şeklinde yazılır. 'Fifteen' 15, 'fifty' ise 50 anlamına gelir."
      },
      {
        "id": "e6-1-t2-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Lina is number 21 in the reading list. Complete the sentence: 'She is the ____ student on the list.'",
        "options": [
          "twelfth",
          "thirty-first",
          "twentieth",
          "twenty-first"
        ],
        "correct": 3,
        "explanation": "21. sırası 'twenty-first' ile ifade edilir. 'Twentieth' 20., 'twelfth' ise 12. demektir."
      },
      {
        "id": "e6-1-t2-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The class finishes activity number 50. Complete the sentence: 'This is our ____ activity.'",
        "options": [
          "fifteenth",
          "fortieth",
          "fiftieth",
          "fifth"
        ],
        "correct": 2,
        "explanation": "50. sıra sayısının İngilizcesi 'fiftieth'tir. 'Fifteenth' ise 15. anlamındadır."
      },
      {
        "id": "e6-1-t2-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Ali: Are you writing a story now?\nMina: No, ____. I am reading a poem.",
        "options": [
          "I'm not",
          "I doesn't",
          "I isn't",
          "I don't"
        ],
        "correct": 0,
        "explanation": "'Are you ...?' sorusuna kişi kendi adına 'No, I'm not.' diye cevap verir. Mina şu anda hikâye yazmadığını, şiir okuduğunu söylüyor."
      },
      {
        "id": "e6-1-t2-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the routine: 'Before class, I check my bag. During class, I take notes. After school, I revise my notes.' What does the student do during class?",
        "options": [
          "Takes notes.",
          "Checks the school bag.",
          "Revises notes at home.",
          "Plays in the garden."
        ],
        "correct": 0,
        "explanation": "Metindeki 'During class, I take notes.' cümlesi ders sırasında not alındığını açıkça belirtir."
      }
    ],
    "test3": [
      {
        "id": "e6-1-t3-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The class rule says, 'Raise your hand before you speak.' Which student follows the rule?",
        "options": [
          "A student who shouts an answer.",
          "A student who talks over a friend.",
          "A student who starts talking immediately.",
          "A student who puts a hand up and waits."
        ],
        "correct": 3,
        "explanation": "Kural, konuşmadan önce el kaldırmayı ister. Elini kaldırıp bekleyen öğrenci kurala uyar."
      },
      {
        "id": "e6-1-t3-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Elif has English club meetings on Monday and Thursday every week. How often does she attend the club?",
        "options": [
          "Once a month.",
          "Twice a week.",
          "Once a week.",
          "Every day."
        ],
        "correct": 1,
        "explanation": "Pazartesi ve perşembe iki ayrı gündür. Bu nedenle Elif kulübe haftada iki kez, yani 'twice a week' katılır."
      },
      {
        "id": "e6-1-t3-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Mert usually reads quietly after lunch. Today, he is preparing a poster with his friends. What is he doing today?",
        "options": [
          "Cleaning the library.",
          "Reading quietly.",
          "Taking a maths test.",
          "Preparing a poster."
        ],
        "correct": 3,
        "explanation": "Metin, Mert'in bugün arkadaşlarıyla poster hazırladığını söylüyor. 'Usually reads' onun olağan alışkanlığıdır; bugünkü etkinliği değildir."
      },
      {
        "id": "e6-1-t3-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the sentence: 'My friends ____ their notebooks to school every day.'",
        "options": [
          "bring",
          "brings",
          "is bringing",
          "bringing"
        ],
        "correct": 0,
        "explanation": "'Every day' düzenli yapılan işi gösterir. Çoğul özne 'my friends' (they) ile geniş zamanda fiilin yalın biçimi 'bring' kullanılır."
      },
      {
        "id": "e6-1-t3-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the question: 'What ____ the teacher doing now?'",
        "options": [
          "do",
          "is",
          "does",
          "are"
        ],
        "correct": 1,
        "explanation": "Şu an yapılan eylem 'is doing' yapısıyla sorulur. Tekil özne 'the teacher' için 'is' uygundur."
      },
      {
        "id": "e6-1-t3-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "A library has 480 books. How do you read this number?",
        "options": [
          "Four hundred and eighteen",
          "One hundred and forty-eight",
          "Four hundred and eighty",
          "Four hundred and eight"
        ],
        "correct": 2,
        "explanation": "480, 400 ve 80'den oluşur. İngilizce karşılığı 'four hundred and eighty'dir; 'eighteen' 18 demektir."
      },
      {
        "id": "e6-1-t3-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Deniz is number 32 on the class list. Which sentence is correct?",
        "options": [
          "Deniz is the twenty-third student.",
          "Deniz is the thirty-second student.",
          "Deniz is the thirteenth student.",
          "Deniz is the forty-second student."
        ],
        "correct": 1,
        "explanation": "32. sıra sayısı 'thirty-second'tır. Diğer seçeneklerde 23., 13. ve 42. sıralar belirtilmiştir."
      },
      {
        "id": "e6-1-t3-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The school notice says, 'Bring your coloured pencils on Tuesday. We are making celebration posters.' What should students bring?",
        "options": [
          "Sports shoes",
          "Lunch boxes",
          "Musical instruments",
          "Coloured pencils"
        ],
        "correct": 3,
        "explanation": "Duyuruda 'Bring your coloured pencils' deniyor. Öğrencilerden renkli kalemlerini getirmeleri isteniyor."
      },
      {
        "id": "e6-1-t3-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the information: 'In Türkiye, we celebrate Victory Day on 30 August.' Which question does 'on 30 August' answer?",
        "options": [
          "When do we celebrate Victory Day?",
          "Who celebrates Victory Day?",
          "Where do we celebrate Victory Day?",
          "How do we celebrate Victory Day?"
        ],
        "correct": 0,
        "explanation": "'On 30 August' bir tarih, yani zaman bildirir. Zamanı öğrenmek için 'When?' sorusu sorulur."
      },
      {
        "id": "e6-1-t3-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Teacher: Can you read the first sentence, please?\nStudent: ____",
        "options": [
          "It is on the second floor.",
          "There are three hundred books.",
          "Of course. I can read it.",
          "My bag is blue."
        ],
        "correct": 2,
        "explanation": "Öğretmen ilk cümleyi okumasını istiyor. 'Of course. I can read it.' (Elbette. Onu okuyabilirim.) bu isteğe uygun cevaptır."
      }
    ]
  },
  "term2": {}
};
