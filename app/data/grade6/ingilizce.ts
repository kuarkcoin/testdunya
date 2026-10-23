import { SubjectData } from "./types";

// Özgün sorular; 1. dönem başlangıç konularıyla sınırlıdır.
// Müfredat kapsamı: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/752
// Müfredat kapsamı: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/753
export const ingilizceData: SubjectData = {
  "term1": {
    "test1": [
      {
        "id": "e6-1-t1-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Ms Green works in the school library. She helps students find and borrow books. Who is she?",
        "options": [
          "A bus driver",
          "A cook",
          "A librarian",
          "A student"
        ],
        "correct": 2,
        "explanation": "Okul kütüphanesinde kitap bulmaya ve ödünç almaya yardımcı olan kişi kütüphanecidir. İngilizcesi 'librarian'dır."
      },
      {
        "id": "e6-1-t1-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The classroom rule is: 'Keep our classroom clean.' Which action follows this rule?",
        "options": [
          "Leave paper on the floor.",
          "Put rubbish in the bin.",
          "Draw on the desks.",
          "Drop food under your chair."
        ],
        "correct": 1,
        "explanation": "Sınıfı temiz tutmak için çöpler çöp kutusuna atılır. 'Put rubbish in the bin.' bu kurala uygun davranıştır."
      },
      {
        "id": "e6-1-t1-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Eren: How do you go to school?\nMaya: ____",
        "options": [
          "At eight o'clock.",
          "In the library.",
          "With my maths book.",
          "By bus."
        ],
        "correct": 3,
        "explanation": "'How do you go to school?' okula hangi ulaşım yoluyla gidildiğini sorar. 'By bus.' otobüsle demektir."
      },
      {
        "id": "e6-1-t1-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the sentence: 'Kerem ____ to school at eight every morning.'",
        "options": [
          "go",
          "goes",
          "going",
          "are going"
        ],
        "correct": 1,
        "explanation": "'Every morning' düzenli yapılan bir işi gösterir. Geniş zamanda 'Kerem' (he) ile 'goes' kullanılır."
      },
      {
        "id": "e6-1-t1-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the question: '____ your sister wear a school uniform every day?'",
        "options": [
          "Do",
          "Does",
          "Is",
          "Are"
        ],
        "correct": 1,
        "explanation": "Günlük alışkanlığı soran geniş zaman sorusunda 'your sister' (she) ile 'Does' kullanılır. Ana fiil 'wear' yalın hâlde kalır."
      },
      {
        "id": "e6-1-t1-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Arda is on time for every lesson. He is ____ late for class.",
        "options": [
          "usually",
          "always",
          "never",
          "often"
        ],
        "correct": 2,
        "explanation": "Arda her derse zamanında geliyorsa hiç geç kalmaz. 'Never', 'asla/hiçbir zaman' anlamındadır."
      },
      {
        "id": "e6-1-t1-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Mr White is the head of our school. He manages the school and works with the teachers. He is the ____.",
        "options": [
          "student",
          "librarian",
          "bus driver",
          "headteacher"
        ],
        "correct": 3,
        "explanation": "Okulu yöneten kişi okul müdürüdür. 'Headteacher', okul müdürü anlamında kullanılır."
      },
      {
        "id": "e6-1-t1-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Which national day do we celebrate in Türkiye on 29 October?",
        "options": [
          "Republic Day",
          "National Sovereignty and Children's Day",
          "Commemoration of Atatürk, Youth and Sports Day",
          "Victory Day"
        ],
        "correct": 0,
        "explanation": "29 Ekim'de Cumhuriyet Bayramı kutlanır. İngilizcede bu bayram 'Republic Day' olarak adlandırılır."
      },
      {
        "id": "e6-1-t1-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Our school is preparing a celebration for National Sovereignty and Children's Day. What is the date of this national day?",
        "options": [
          "23 April",
          "30 August",
          "29 October",
          "19 May"
        ],
        "correct": 0,
        "explanation": "Ulusal Egemenlik ve Çocuk Bayramı 23 Nisan'dır. İngilizcede tarih '23 April' biçiminde yazılabilir."
      },
      {
        "id": "e6-1-t1-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the school programme: '09:00: Flag ceremony. 09:30: Songs. 10:00: Folk dances.' When do the folk dances start?",
        "options": [
          "At nine o'clock.",
          "At half past nine.",
          "At half past ten.",
          "At ten o'clock."
        ],
        "correct": 3,
        "explanation": "Programda halk oyunları '10:00' olarak verilmiştir. Bunun karşılığı 'at ten o'clock'tur."
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
