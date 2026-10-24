import { SubjectData } from "./types";

// Özgün sorular. Test 1–2: kullanıcının Life / Yummy Breakfast konu isteğine göre yenilenmiştir.
// Güncel MEB ilk temaları School Life / Classroom Life; kullanıcı etiketleri resmî tema adı iddiası değildir.
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
            "prompt": "Look at Ece's breakfast tray. Which sentence is correct?",
            "options": [
                  "She has cheese and tea.",
                  "She has eggs and milk.",
                  "She has jam and milk.",
                  "She has olives and orange juice."
            ],
            "correct": 1,
            "explanation": "Tepside yumurta, peynir, zeytin ve süt vardır. Çay, reçel veya portakal suyu gösterilmemiştir.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/ingilizce/test-2/soru-01.svg",
            "imageAlt": "Ece’nin kahvaltı tepsisi: eggs, cheese, olives ve milk; her yiyecek çizimle ve adıyla gösterilmiş."
      },
      {
            "id": "e6-1-t2-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the chart. Which food do BOTH children like?",
            "options": [
                  "Eggs",
                  "Olives",
                  "Cheese",
                  "Jam"
            ],
            "correct": 2,
            "explanation": "İki çocuk da peyniri sever. Ali yumurtayı severken Mia sevmez; zeytinde bunun tersi geçerlidir. Reçel tabloda yoktur.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/ingilizce/test-2/soru-02.svg",
            "imageAlt": "Ali: eggs YES, cheese YES, olives NO. Mia: eggs NO, cheese YES, olives YES."
      },
      {
            "id": "e6-1-t2-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the offer and Deniz's choice. Which reply completes the conversation?",
            "options": [
                  "Yes, please. I love tea.",
                  "No, thanks. I don't want any milk.",
                  "Yes, please. Some tea, please.",
                  "No, thanks. Can I have some milk?"
            ],
            "correct": 3,
            "explanation": "Teklif çaydır; Deniz çay istemeyip süt istemektedir. 'No, thanks' teklifi kibarca reddeder; 'Can I have some milk?' süt ister.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/ingilizce/test-2/soru-03.svg",
            "imageAlt": "Teklif: Would you like some tea? Deniz’in seçim kartında tea NO, milk YES; çay fincanı ve süt bardağı resimleri."
      },
      {
            "id": "e6-1-t2-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the café menu. Amy wants eggs and a drink, but she doesn't like tea. What can she order?",
            "options": [
                  "Eggs and orange juice, please.",
                  "Pancakes and orange juice, please.",
                  "Eggs and tea, please.",
                  "Eggs and hot chocolate, please."
            ],
            "correct": 0,
            "explanation": "Menüde yumurta ve portakal suyu vardır. Amy çay istemez; hot chocolate menüde bulunmaz. Pancakes içeren seçenek yumurta isteğini karşılamaz.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/ingilizce/test-2/soru-04.svg",
            "imageAlt": "Kafe menüsünde eggs, pancakes, tea ve orange juice; dört yiyecek/içecek çizimiyle."
      },
      {
            "id": "e6-1-t2-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the breakfast choices. Complete the sentence: 'Lara ____ olives, but she ____ cheese.'",
            "options": [
                  "likes / likes",
                  "doesn't like / likes",
                  "likes / doesn't like",
                  "doesn't like / doesn't like"
            ],
            "correct": 1,
            "explanation": "Lara’nın zeytin seçimi NO, peynir seçimi YES’tir. Üçüncü tekil şahısta olumsuz 'doesn't like', olumlu 'likes' olur.",
            "imageWidth": 360,
            "imageHeight": 360,
            "imageUrl": "/grade6/ingilizce/test-2/soru-05.svg",
            "imageAlt": "Lara’nın seçimleri: olives NO; cheese YES. Zeytin ve peynir çizimleri büyük gösterilmiş."
      },
      {
            "id": "e6-1-t2-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the two breakfast plates. Which sentence is correct?",
            "options": [
                  "Only Ben has bread.",
                  "Both children have eggs.",
                  "Both children have bread, but only Ben has eggs.",
                  "Only Eva has cheese."
            ],
            "correct": 2,
            "explanation": "İki tabakta da ekmek vardır. Yumurta yalnız Ben’in tabağındadır; peynir de yalnız Ben’dedir. Eva’nın diğer yiyeceği reçeldir.",
            "imageWidth": 360,
            "imageHeight": 490,
            "imageUrl": "/grade6/ingilizce/test-2/soru-06.svg",
            "imageAlt": "Ben’in tabağı: bread, eggs, cheese. Eva’nın tabağı: bread, jam. Yiyecekler adlarıyla ve resimlerle gösterilmiş."
      },
      {
            "id": "e6-1-t2-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the order card and the tray. Which sentence should the customer say?",
            "options": [
                  "I ordered milk, but this is orange juice.",
                  "I ordered cheese, but these are eggs.",
                  "Everything is correct. Thank you.",
                  "I ordered orange juice, but this is milk."
            ],
            "correct": 3,
            "explanation": "Siparişte ekmek, peynir ve portakal suyu vardır. Tepside ekmek ve peynir doğru, içecek ise süttür. Son seçenek bu farkı açıklar.",
            "imageWidth": 360,
            "imageHeight": 440,
            "imageUrl": "/grade6/ingilizce/test-2/soru-07.svg",
            "imageAlt": "Order: bread, cheese, orange juice. Tray: bread, cheese, milk; tepside üç ürün resimlenmiş."
      },
      {
            "id": "e6-1-t2-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\n\nMum: Would you like some cheese?\nLeo: ____. I'd love some cheese.",
            "options": [
                  "Yes, please",
                  "No, thanks",
                  "I don't like it",
                  "No, I wouldn't"
            ],
            "correct": 0,
            "explanation": "Leo peynir istediğini açıkça söylüyor; teklifi kibarca kabul eden uygun cevap 'Yes, please' olur."
      },
      {
            "id": "e6-1-t2-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Sara likes eggs and cheese, but not olives. Her brother likes olives and cheese, but not eggs. Their mother likes eggs and olives, but not cheese.\n\nWhich sentence is NOT correct?",
            "options": [
                  "Sara and her mother both like eggs.",
                  "Sara's brother and mother both like olives.",
                  "Everyone in the family likes cheese.",
                  "Sara and her brother both like cheese."
            ],
            "correct": 2,
            "explanation": "Sara’nın annesi peyniri sevmez; bu yüzden herkesin peynir sevdiğini söyleyen C seçeneği yanlıştır. A, B ve D seçeneklerindeki ortak tercihler metinle uyumludur."
      },
      {
            "id": "e6-1-t2-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\n\nA: Does Melis like orange juice?\nB: Yes, she ____. She ____ it at breakfast.",
            "options": [
                  "do / drinks",
                  "does / drinks",
                  "does / drink",
                  "do / drink"
            ],
            "correct": 1,
            "explanation": "'Does Melis...?' sorusuna 'Yes, she does' denir. Olumlu geniş zaman cümlesinde 'she' ile 'drinks' kullanılır."
      }
],
    "test3": [
      {
            "id": "e6-1-t3-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the town map. Which sentence is correct?",
            "options": [
                  "The library is next to the bank.",
                  "The bakery is opposite the park.",
                  "The bank is opposite the library.",
                  "The library is opposite the park."
            ],
            "correct": 3,
            "explanation": "Kütüphane yolun bir tarafında, park tam karşısındadır. Kütüphanenin yanında fırın; parkın yanında banka vardır.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/ingilizce/test-3/soru-01.svg",
            "imageAlt": "Harita: üst sırada solda library, sağda bakery; yolun karşısında solda park, sağda bank."
      },
      {
            "id": "e6-1-t3-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the children in the park now. What are they doing?",
            "options": [
                  "Ece is riding a bike and Ali is reading.",
                  "Ece is reading and Ali is riding a bike.",
                  "They are both reading.",
                  "They are both riding bikes."
            ],
            "correct": 1,
            "explanation": "Ece açık kitabı okuyor, Ali bisiklete biniyor. Şu anda yapılan işler 'is reading' ve 'is riding' ile anlatılır.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/ingilizce/test-3/soru-02.svg",
            "imageAlt": "Parkta Ece oturmuş açık kitap okuyor. Ali iki tekerlekli bisikletin üzerinde, gidonu tutuyor. İsimler çizimlerin altında."
      },
      {
            "id": "e6-1-t3-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the building heights. Which sentence is correct?",
            "options": [
                  "The hospital is taller than the library.",
                  "The school is taller than the hospital.",
                  "The library is shorter than the school.",
                  "The hospital and the school are the same height."
            ],
            "correct": 0,
            "explanation": "Hastane 20 m, kütüphane 12 m, okul 8 m’dir. Hastane kütüphaneden uzundur: 'taller than'.",
            "imageWidth": 360,
            "imageHeight": 400,
            "imageUrl": "/grade6/ingilizce/test-3/soru-03.svg",
            "imageAlt": "Binaların aynı tabandan çizilmiş yükseklikleri: library 12 m, school 8 m, hospital 20 m."
      },
      {
            "id": "e6-1-t3-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the two street scenes at the same time. Which comparison matches the pictures?",
            "options": [
                  "The village street is more crowded than the city street.",
                  "The city street has fewer cars than the village street.",
                  "The city street is more crowded than the village street.",
                  "The two streets have the same number of people."
            ],
            "correct": 2,
            "explanation": "Şehir sokağında daha çok insan ve araç görülür. Bu iki resimde şehir sokağı köy sokağından daha kalabalıktır. Bu, tüm şehirler ve köyler için değişmez bir kural değildir.",
            "imageWidth": 360,
            "imageHeight": 420,
            "imageUrl": "/grade6/ingilizce/test-3/soru-04.svg",
            "imageAlt": "Aynı andaki iki sokak: city street altı kişi ve üç araba; village street iki kişi ve bir araba."
      },
      {
            "id": "e6-1-t3-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the bus stop now. Complete the sentence: 'The children ____ for the bus. They ____ football.'",
            "options": [
                  "wait / play",
                  "are waiting / aren't playing",
                  "is waiting / isn't playing",
                  "are playing / aren't waiting"
            ],
            "correct": 1,
            "explanation": "Çocuklar otobüs durağında bekliyor; futbol oynamıyor. Çoğul özne 'the children' ile 'are waiting' ve 'aren't playing' kullanılır.",
            "imageWidth": 360,
            "imageHeight": 380,
            "imageUrl": "/grade6/ingilizce/test-3/soru-05.svg",
            "imageAlt": "BUS STOP tabelası altında iki çocuk oturuyor. Top veya oyun sahası yok; resim şimdi olan durumu gösteriyor."
      },
      {
            "id": "e6-1-t3-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the opening hours. It is 18:30 now. Which place is still open?",
            "options": [
                  "The bank",
                  "The bakery",
                  "The school",
                  "The library"
            ],
            "correct": 3,
            "explanation": "18.30’da kütüphane açıktır; 19.00’da kapanır. Banka 17.00, fırın 18.00, okul 16.00’da kapanmıştır.",
            "imageWidth": 360,
            "imageHeight": 460,
            "imageUrl": "/grade6/ingilizce/test-3/soru-06.svg",
            "imageAlt": "Açılış-kapanış saatleri: bank 09:00–17:00, bakery 07:00–18:00, school 08:00–16:00, library 10:00–19:00."
      },
      {
            "id": "e6-1-t3-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the speeds of the three vehicles in this example. Which sentence is correct?",
            "options": [
                  "The bus is faster than the bike but slower than the car.",
                  "The bike is faster than the car.",
                  "The car is slower than the bus.",
                  "The bus and the bike are equally fast."
            ],
            "correct": 0,
            "explanation": "Bu örnekte bisiklet 20, otobüs 40, araba 60 km/h hızındadır. Otobüs bisikletten hızlı, arabadan yavaştır.",
            "imageWidth": 360,
            "imageHeight": 430,
            "imageUrl": "/grade6/ingilizce/test-3/soru-07.svg",
            "imageAlt": "Üç araç çizimi ve bu örnekteki hızları: bike 20 km/h, bus 40 km/h, car 60 km/h."
      },
      {
            "id": "e6-1-t3-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\n\nA: Where are your parents?\nB: They are at the market. They ____ some fruit now, but my brother ____ with them.",
            "options": [
                  "buys / isn't shopping",
                  "are buying / aren't shopping",
                  "are buying / isn't shopping",
                  "is buying / doesn't shopping"
            ],
            "correct": 2,
            "explanation": "'They' ile 'are buying', 'my brother' tekil olduğu için 'isn't shopping' kullanılır. 'Now' şu anda yapılan işi gösterir."
      },
      {
            "id": "e6-1-t3-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Mina is in the city centre now. Many people are shopping, and the streets are busy. Her cousin lives in a quiet village. Today, he is visiting Mina and taking photos of the tall buildings.\n\nWhich sentence is NOT correct?",
            "options": [
                  "Mina is in the city centre.",
                  "Her cousin is taking photos today.",
                  "There are many shoppers in the city centre.",
                  "Her cousin is in his village now."
            ],
            "correct": 3,
            "explanation": "Kuzeni bugün Mina’yı ziyaret ederek şehirdeki binaların fotoğraflarını çekiyor. Bu nedenle şu anda köyünde olduğunu söyleyen seçenek yanlıştır."
      },
      {
            "id": "e6-1-t3-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "The museum is 15 metres tall. The bank is 10 metres tall, and the hotel is 25 metres tall.\n\nComplete the sentence: 'The museum is ____ than the bank, but ____ than the hotel.'",
            "options": [
                  "shorter / taller",
                  "taller / shorter",
                  "taller / taller",
                  "shorter / shorter"
            ],
            "correct": 1,
            "explanation": "Müze 15 m ile bankadan (10 m) uzun, otelden (25 m) kısadır. Bu yüzden 'taller / shorter' kullanılır."
      }
]
  },
  "term2": {}
};
