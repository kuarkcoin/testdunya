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
],
    "test4": [
      {
            "id": "e6-1-t4-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the sample forecast. Which sentence is correct?",
            "options": [
                  "It is rainy on Monday.",
                  "Tuesday is warmer than Monday.",
                  "It is rainy and 12°C on Tuesday.",
                  "Wednesday is sunny and 18°C."
            ],
            "correct": 2,
            "explanation": "Salı gününde yağmur simgesi ve 12°C görülür. Pazartesi güneşli ve 18°C, çarşamba bulutlu ve 15°C olduğundan yalnız C doğrudur.",
            "imageWidth": 360,
            "imageHeight": 470,
            "imageUrl": "/grade6/ingilizce/test-4/soru-01.svg",
            "imageAlt": "Örnek tahmin: pazartesi güneşli 18°C, salı yağmurlu 12°C, çarşamba bulutlu 15°C."
      },
      {
            "id": "e6-1-t4-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the sample forecast. Complete the sentence: “Izmir is ____ than Rize, and Ankara is ____ than Rize.”",
            "options": [
                  "warmer / colder",
                  "colder / warmer",
                  "warmer / warmer",
                  "colder / colder"
            ],
            "correct": 0,
            "explanation": "İzmir 19°C ile Rize’den (11°C) sıcak, Ankara 5°C ile Rize’den soğuktur. Doğru sıralama warmer / colder olur.",
            "imageWidth": 360,
            "imageHeight": 470,
            "imageUrl": "/grade6/ingilizce/test-4/soru-02.svg",
            "imageAlt": "Örnek şehir tahminleri: Ankara karlı 5°C, İzmir güneşli 19°C, Rize yağmurlu 11°C."
      },
      {
            "id": "e6-1-t4-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "It is snowing today. Look at the two friends and read their words. Which sentence is correct?",
            "options": [
                  "Both children are happy about the snow.",
                  "Leo is sad because he misses the sun.",
                  "Mia is excited about her picnic today.",
                  "Leo is happy, but Mia is unhappy."
            ],
            "correct": 3,
            "explanation": "Leo karı sevdiğini söyleyerek gülümsüyor. Mia güneşi özlediğini söylüyor; pikniği yok ve üzgün görünüyor. Yorum yalnız bu iki kişinin söz ve ifadelerine dayanır.",
            "imageWidth": 360,
            "imageHeight": 490,
            "imageUrl": "/grade6/ingilizce/test-4/soru-03.svg",
            "imageAlt": "Leo gülümseyerek karı sevdiğini söylüyor; kardan adam zamanı. Mia üzgün, güneşi özlüyor; bugün piknik yok."
      },
      {
            "id": "e6-1-t4-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the park scene and read the child’s words. Which question can you answer with “It is windy”?",
            "options": [
                  "How do you feel today?",
                  "What is the weather like at the park?",
                  "What time do you fly your kite?",
                  "Where is your school?"
            ],
            "correct": 1,
            "explanation": "Uçurtma ve hareket eden hava rüzgârı gösterir. “It is windy” hava durumunu belirtir; bu yüzden parkta havanın nasıl olduğunu soran B seçeneğine cevap olur.",
            "imageWidth": 360,
            "imageHeight": 450,
            "imageUrl": "/grade6/ingilizce/test-4/soru-04.svg",
            "imageAlt": "Parkta uçurtma uçuran çocuk; hareket çizgileri rüzgârı gösteriyor. Çocuk uçurtmasının uçtuğunu ve havanın hareket ettiğini söylüyor."
      },
      {
            "id": "e6-1-t4-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the mountain forecast. Which advice is suitable for this trip?",
            "options": [
                  "Wear a T-shirt because it is hot.",
                  "Take sunglasses because it is sunny and 30°C.",
                  "Wear a warm coat because it is snowy and cold.",
                  "Wear shorts because it is warm and dry."
            ],
            "correct": 2,
            "explanation": "Dağda kar ve −2°C tahmini var; gezi de sabah boyunca açık havada. Bu koşullara uygun öneri sıcak tutan bir mont giymektir.",
            "imageWidth": 360,
            "imageHeight": 450,
            "imageUrl": "/grade6/ingilizce/test-4/soru-05.svg",
            "imageAlt": "Cumartesi dağ gezisi: karlı, eksi 2°C; sabah boyunca dışarıda kalınacak."
      },
      {
            "id": "e6-1-t4-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Ella and read her words. Why does she want someone to stay with her?",
            "options": [
                  "She feels scared because of the loud thunder.",
                  "She is excited about playing in the sun.",
                  "She feels happy because she loves storms.",
                  "She is bored because there is no wind."
            ],
            "correct": 0,
            "explanation": "Ella gök gürültüsünün yüksek olduğunu ve korktuğunu açıkça söylüyor. Yanında birinin kalmasını bu nedenle istiyor; bu, herkese genellenen bir hava–duygu ilişkisi değildir.",
            "imageWidth": 360,
            "imageHeight": 470,
            "imageUrl": "/grade6/ingilizce/test-4/soru-06.svg",
            "imageAlt": "Dışarıda şimşekli fırtına; Ella korkmuş görünüyor ve yüksek gök gürültüsünden korktuğunu söyleyerek yanında birinin kalmasını istiyor."
      },
      {
            "id": "e6-1-t4-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Ben says, “I want a sunny day warmer than 20°C for our picnic.” Look at the sample forecast. Which plan matches his wish?",
            "options": [
                  "Have the picnic on Saturday because it is sunny.",
                  "Have the picnic on Sunday because it is warmer than 20°C.",
                  "Have the picnic on Saturday because it is 22°C.",
                  "Have the picnic on Friday because it is sunny and 22°C."
            ],
            "correct": 3,
            "explanation": "Ben hem güneşli hem 20°C’den sıcak bir gün istiyor. İki koşulu birlikte yalnız cuma (güneşli, 22°C) sağlıyor. Cumartesi güneşli olsa da 16°C ile yeterince sıcak değildir; pazar 24°C olsa da bulutludur.",
            "imageWidth": 360,
            "imageHeight": 470,
            "imageUrl": "/grade6/ingilizce/test-4/soru-07.svg",
            "imageAlt": "Örnek tahmin: cuma güneşli 22°C, cumartesi güneşli 16°C, pazar bulutlu 24°C."
      },
      {
            "id": "e6-1-t4-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\nA: What is the weather like in your town today?\nB: ____\nA: Then take an umbrella when you go out.",
            "options": [
                  "I feel excited about the school trip.",
                  "It is rainy, and I need to go to the shops.",
                  "It is sunny, and I am staying at home.",
                  "I like snowy days in winter."
            ],
            "correct": 1,
            "explanation": "Soru bugünkü hava durumunu soruyor; sonraki cümle dışarı çıkarken şemsiye almayı öneriyor. Yağmurlu olduğunu ve alışverişe çıkacağını söyleyen B, iki cümleyle de uyumludur."
      },
      {
            "id": "e6-1-t4-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the text.\n“I am Nora. Rainy days make me feel relaxed. I like listening to the rain at home. My brother Tim feels bored on rainy days because he cannot play football outside.”\n\nWhich sentence is NOT correct?",
            "options": [
                  "Nora enjoys listening to the rain.",
                  "Tim wants to play football outside.",
                  "Both Nora and Tim feel relaxed on rainy days.",
                  "Tim feels bored when it rains."
            ],
            "correct": 2,
            "explanation": "Nora yağmurlu günlerde rahatladığını, Tim ise dışarıda futbol oynayamadığı için sıkıldığını söylüyor. İkisinin de rahatladığını söyleyen C metne aykırıdır."
      },
      {
            "id": "e6-1-t4-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Choose the correct words.\n“The weather is ____ today. The trees are moving in the wind. I feel ____ because I can fly my new kite.”",
            "options": [
                  "windy / excited",
                  "wind / exciting",
                  "rain / excited",
                  "sunny / boring"
            ],
            "correct": 0,
            "explanation": "Hava durumunu anlatırken sıfat olan windy kullanılır. Kişinin hissettiği heyecan için excited uygundur; exciting ise heyecan veren şeyi niteler. Rüzgârda hareket eden ağaçlar da windy ifadesini destekler."
      }
],
    "test5": [
      {
            "id": "e6-1-t5-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the rides. Ece says, “I like going round slowly and looking at the town from above. I do not want a fast ride on a track.” Which ride does she describe?",
            "options": [
                  "Bumper cars.",
                  "The Ferris wheel.",
                  "The roller coaster.",
                  "The carousel."
            ],
            "correct": 1,
            "explanation": "Ece yukarıdan şehri seyrederek yavaşça dönmek istiyor; ray üzerinde hızlı gitmek istemiyor. Bu tarife görseldeki dönme dolap (Ferris wheel) uyar.",
            "imageWidth": 360,
            "imageHeight": 500,
            "imageUrl": "/grade6/ingilizce/test-5/soru-01.svg",
            "imageAlt": "Üstte kabinli dönme dolap; altta kıvrımlı ray üzerinde hız treni, İngilizce adlarıyla."
      },
      {
            "id": "e6-1-t5-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the scene. Which sentence describes what is happening now?",
            "options": [
                  "Dad is driving a bumper car with Ben.",
                  "Mia is waiting outside the ride.",
                  "Ben and Mia are riding a Ferris wheel.",
                  "Ben and Mia are driving bumper cars."
            ],
            "correct": 3,
            "explanation": "Ben ve Mia çarpışan arabaların içinde, babaları ise alanın dışında gösteriliyor. Şu an yapılan eylemi D seçeneğindeki are driving bumper cars anlatır.",
            "imageWidth": 360,
            "imageHeight": 450,
            "imageUrl": "/grade6/ingilizce/test-5/soru-02.svg",
            "imageAlt": "Ben ve Mia iki ayrı çarpışan arabada; babaları oyun alanının dışında."
      },
      {
            "id": "e6-1-t5-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Amy and Leo want to choose a ride they both like. Look at their choices. Which suggestion is suitable?",
            "options": [
                  "Let’s ride the Ferris wheel together.",
                  "Let’s ride the carousel together.",
                  "Let’s choose a ride only Amy likes.",
                  "Let’s avoid the Ferris wheel."
            ],
            "correct": 0,
            "explanation": "İkisi de dönme dolap için YES diyor; atlıkarıncayı ise yalnız Amy seviyor. Ortak tercihleri dönme dolap olduğundan A önerisi uygundur.",
            "imageWidth": 360,
            "imageHeight": 600,
            "imageUrl": "/grade6/ingilizce/test-5/soru-03.svg",
            "imageAlt": "Dönme dolap çizimi altında Amy YES, Leo YES; atlıkarınca çizimi altında Amy YES, Leo NO."
      },
      {
            "id": "e6-1-t5-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the entrance rule and the children’s heights. Which sentence is correct?",
            "options": [
                  "Both children can ride because they are taller than 140 cm.",
                  "Tom can ride, but Lily cannot.",
                  "Lily can ride, but Tom is too short.",
                  "Neither child is tall enough to ride."
            ],
            "correct": 2,
            "explanation": "Kural en az 140 cm boy gerektiriyor. Lily 145 cm olduğu için binebilir; Tom 135 cm olduğu için bu oyuncağa binmek için yeterince uzun değildir.",
            "imageWidth": 360,
            "imageHeight": 475,
            "imageUrl": "/grade6/ingilizce/test-5/soru-04.svg",
            "imageAlt": "Hız treni girişinde en az 140 cm kuralı; Tom 135 cm, Lily 145 cm."
      },
      {
            "id": "e6-1-t5-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read Zoe’s opinions. Which comparison agrees with her?",
            "options": [
                  "The carousel is more exciting than the roller coaster.",
                  "The roller coaster is more exciting than the carousel.",
                  "Both rides are boring.",
                  "The roller coaster is more boring than the carousel."
            ],
            "correct": 1,
            "explanation": "Zoe hız trenini çok heyecan verici, atlıkarıncayı sıkıcı buluyor. Onun görüşüne göre hız treni atlıkarıncadan daha heyecan vericidir; bu görüş herkese genellenmez.",
            "imageWidth": 360,
            "imageHeight": 515,
            "imageUrl": "/grade6/ingilizce/test-5/soru-05.svg",
            "imageAlt": "Zoe hız treni için Very exciting, atlıkarınca için The carousel is boring diyor."
      },
      {
            "id": "e6-1-t5-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Both rides close at 18:00. It is 10:30 now. Read the opening times. Which plan is possible?",
            "options": [
                  "Ride the bumper cars now and the Ferris wheel at 09:00.",
                  "Ride both rides now.",
                  "Ride the Ferris wheel at 09:30 and the bumper cars at 10:30.",
                  "Ride the Ferris wheel now and the bumper cars at 11:00."
            ],
            "correct": 3,
            "explanation": "Saat 10.30’da dönme dolap açıktır çünkü 10.00’da açılır. Çarpışan arabalar 11.00’de açıldığı için o saati beklemek gerekir. İki oyuncağın da 18.00’e kadar açık kalacağı soruda belirtilmiştir.",
            "imageWidth": 360,
            "imageHeight": 530,
            "imageUrl": "/grade6/ingilizce/test-5/soru-06.svg",
            "imageAlt": "Dönme dolap saat 10.00’da, çarpışan arabalar saat 11.00’de açılıyor."
      },
      {
            "id": "e6-1-t5-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Nina’s friend asks, “Would you like to ride the Ferris wheel?” Which reply matches Nina’s words?",
            "options": [
                  "Yes, please. I love being high up.",
                  "Of course. I think it is relaxing.",
                  "No, thanks. I feel scared up there.",
                  "Yes, let’s go on it again."
            ],
            "correct": 2,
            "explanation": "Nina yukarıda korktuğunu ve dönme dolaba binmek istemediğini açıkça söylüyor. No, thanks ile başlayan C seçeneği hem kibar bir ret hem de kendi duygusuna uygun bir gerekçe içerir.",
            "imageWidth": 360,
            "imageHeight": 500,
            "imageUrl": "/grade6/ingilizce/test-5/soru-07.svg",
            "imageAlt": "Nina dönme dolabın yanında yukarıda korktuğunu ve binmek istemediğini söylüyor."
      },
      {
            "id": "e6-1-t5-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\nAli: What do you think of the ghost train?\nBeth: ____\nAli: Really? I disagree. I think it is fun.",
            "options": [
                  "I think it is boring.",
                  "It is next to the ticket office.",
                  "It opens at ten o’clock.",
                  "I have two tickets."
            ],
            "correct": 0,
            "explanation": "Ali bir görüş soruyor ve ardından katılmadığını söyleyip eğlenceli bulduğunu belirtiyor. Beth’in sıkıcı bulduğunu söylemesi bu görüş ayrılığına uyar; diğer seçenekler görüş bildirmez."
      },
      {
            "id": "e6-1-t5-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the text.\n“Sam loves bumper cars but dislikes the ghost train. His sister Eva enjoys both rides. They want to go on one ride together, and neither wants to choose a ride they dislike.”\n\nWhich sentence is correct?",
            "options": [
                  "They should choose the ghost train.",
                  "Eva dislikes bumper cars.",
                  "Sam enjoys both rides.",
                  "Bumper cars are suitable for both of them."
            ],
            "correct": 3,
            "explanation": "Sam çarpışan arabaları seviyor, korku trenini sevmiyor. Eva ikisini de seviyor. İkisinin de sevdiği seçenek çarpışan arabalardır."
      },
      {
            "id": "e6-1-t5-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Choose the correct words.\n“I think the roller coaster is ____ than the carousel. I feel ____ when I ride it because I enjoy going fast.”",
            "options": [
                  "exciting / bored",
                  "more exciting / excited",
                  "more excited / exciting",
                  "excited / boring"
            ],
            "correct": 1,
            "explanation": "Than ile karşılaştırma için more exciting gerekir. Kişinin hissettiği heyecan excited ile anlatılır; exciting ise heyecan veren oyuncağı niteler."
      }
],
    "test6": [
      {
            "id": "e6-1-t6-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Maya’s routine. Which sentence is correct?",
            "options": [
                  "She leaves home at a quarter to eight, after breakfast.",
                  "She has breakfast at a quarter past seven.",
                  "School starts before she leaves home.",
                  "She leaves home at a quarter past eight."
            ],
            "correct": 0,
            "explanation": "Maya 07.20’de kahvaltı yapar, 07.45’te evden çıkar. 07.45, a quarter to eight olarak söylenir. Okul ise 08.15’te başlar.",
            "imageWidth": 360,
            "imageHeight": 520,
            "imageUrl": "/grade6/ingilizce/test-6/soru-01.svg",
            "imageAlt": "Maya’nın sabah rutini: analog ve dijital saatlerle 07.20 kahvaltı, 07.45 evden çıkış, 08.15 okul başlangıcı."
      },
      {
            "id": "e6-1-t6-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Omar checks his order and his tray. Which request completes his breakfast order?",
            "options": [
                  "Can I have some jam, please?",
                  "Can I have some more tea, please?",
                  "Can I have some cheese, please?",
                  "Can I have some eggs, please?"
            ],
            "correct": 2,
            "explanation": "Siparişte ekmek, peynir ve çay vardır. Tepside ekmek ile çay bulunduğu için eksik olan peynir istenmelidir. Diğer seçenekler eksik siparişi tamamlamaz.",
            "imageWidth": 360,
            "imageHeight": 520,
            "imageUrl": "/grade6/ingilizce/test-6/soru-02.svg",
            "imageAlt": "Omar ekmek, peynir ve çay sipariş etmiş; tepsisinde ekmek, çay ve eksik yiyeceği gösteren soru işaretli boş tabak var."
      },
      {
            "id": "e6-1-t6-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the street map. Nora is at the bakery. She wants to borrow a book without crossing Oak Street. Where should she go?",
            "options": [
                  "To the museum across the street.",
                  "To the library next to the bakery.",
                  "To the bakery again.",
                  "To the museum next to the library."
            ],
            "correct": 1,
            "explanation": "Kitap ödünç almak için kütüphaneye gidilir. Haritada kütüphane fırının yanında, caddenin aynı tarafındadır. Müze ise yolun karşı tarafındadır.",
            "imageWidth": 360,
            "imageHeight": 500,
            "imageUrl": "/grade6/ingilizce/test-6/soru-03.svg",
            "imageAlt": "Oak Street’in üst tarafında yan yana fırın ve kütüphane, karşı tarafında müze bulunuyor."
      },
      {
            "id": "e6-1-t6-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read Saturday’s forecast. The children want to play outside when it is sunny and warmer. Which suggestion is suitable?",
            "options": [
                  "Let’s play at nine because it is sunny then.",
                  "Let’s play at nine because it is warmer then.",
                  "Let’s play at two because it is rainy then.",
                  "Let’s play at two because it is sunny and warmer then."
            ],
            "correct": 3,
            "explanation": "09.00’da hava yağmurlu ve 14°C; 14.00’te güneşli ve 21°C’dir. İki koşulu birlikte sağlayan saat öğleden sonra ikidir.",
            "imageWidth": 360,
            "imageHeight": 530,
            "imageUrl": "/grade6/ingilizce/test-6/soru-04.svg",
            "imageAlt": "Cumartesi 09.00: yağmurlu 14°C; 14.00: güneşli 21°C. Yağmur ve güneş simgeleri var."
      },
      {
            "id": "e6-1-t6-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Evan’s journeys. Choose the words that complete the sentence.\n“Evan usually ____ the bus to school, but today he ____.”",
            "options": [
                  "takes / is walking",
                  "is taking / walks",
                  "take / is walking",
                  "takes / walk"
            ],
            "correct": 0,
            "explanation": "Usually düzenli alışkanlığı anlatır; Evan üçüncü tekil kişi olduğu için takes kullanılır. Today, right now şu anı gösterir; yürüyüş için is walking gerekir.",
            "imageWidth": 360,
            "imageHeight": 540,
            "imageUrl": "/grade6/ingilizce/test-6/soru-05.svg",
            "imageAlt": "Evan genellikle okul otobüsüyle gider; bugün şu anda yürüyerek gidiyor. Otobüs ve yürüyen kişi çizimleri var."
      },
      {
            "id": "e6-1-t6-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Lena has £4 and wants to buy one ride ticket. Look at the prices. Which statement is correct?",
            "options": [
                  "The bumper cars are cheaper than the Ferris wheel.",
                  "She can buy a ticket for either ride.",
                  "She can afford the Ferris wheel, but not the bumper cars.",
                  "She cannot afford a ticket for either ride."
            ],
            "correct": 2,
            "explanation": "Dönme dolap bileti 3 sterlin, çarpışan arabalar bileti 5 sterlindir. Lena’nın 4 sterlini olduğundan yalnız dönme dolap biletine parası yeter. Can afford, parasının yetmesi anlamındadır.",
            "imageWidth": 360,
            "imageHeight": 530,
            "imageUrl": "/grade6/ingilizce/test-6/soru-06.svg",
            "imageAlt": "Dönme dolap çizimi ve 3 sterlinlik bilet; çarpışan araba çizimi ve 5 sterlinlik bilet; Lena’nın 4 sterlini var."
      },
      {
            "id": "e6-1-t6-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the temperatures and read Ella’s words. Which sentence agrees with both?",
            "options": [
                  "Hilltown is warmer, and Ella feels happy there.",
                  "Lakeside is colder, and Ella feels unhappy there.",
                  "Both towns have the same temperature.",
                  "Lakeside is warmer, and Ella feels happy there."
            ],
            "correct": 3,
            "explanation": "Lakeside 20°C ile 8°C olan Hilltown’dan daha sıcaktır. Ella Lakeside’da mutlu olduğunu açıkça söylüyor. Bu duygu Ella’nın kişisel ifadesidir, herkes için genellenmez.",
            "imageWidth": 360,
            "imageHeight": 500,
            "imageUrl": "/grade6/ingilizce/test-6/soru-07.svg",
            "imageAlt": "Hilltown yağmurlu ve 8°C: Ella burada mutsuz hissettiğini söylüyor. Lakeside güneşli ve 20°C: burada mutlu hissettiğini söylüyor."
      },
      {
            "id": "e6-1-t6-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\nWaiter: Would you like some milk?\nRuby: No, thanks. I don’t like milk. ____\nWaiter: Of course. Here is your orange juice.",
            "options": [
                  "Yes, milk is my favourite drink.",
                  "Can I have some orange juice instead?",
                  "Do you have any bread?",
                  "I never drink orange juice."
            ],
            "correct": 1,
            "explanation": "Garsonun portakal suyu getirmesi, Ruby’nin sütü kibarca reddedip yerine portakal suyu istemesiyle uyumludur. Instead burada onun yerine anlamındadır."
      },
      {
            "id": "e6-1-t6-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the text.\n“On weekdays, Arda gets up early and goes to school. It is Sunday today. He is visiting the fair with his cousin now. They are waiting for the carousel.”\n\nWhich question has NO answer in the text?",
            "options": [
                  "At exactly what time does Arda get up on weekdays?",
                  "Where is Arda now?",
                  "Who is Arda with?",
                  "What are they waiting for?"
            ],
            "correct": 0,
            "explanation": "Metin Arda’nın hafta içi erken kalktığını söyler ancak tam saat vermez. Şu an lunaparkta olduğu, kuzeniyle bulunduğu ve atlıkarıncayı beklediği belirtilmiştir."
      },
      {
            "id": "e6-1-t6-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the dialogue.\nLeo: I think the ghost train is fantastic. Let’s ride it!\nMina: I disagree. I think it is frightening.\nLeo: ____",
            "options": [
                  "Great! You think it is fantastic, too.",
                  "You are right. We both love the ghost train.",
                  "OK. Let’s choose a different ride.",
                  "Yes, the ghost train is your favourite."
            ],
            "correct": 2,
            "explanation": "Mina korku trenini korkutucu buluyor ve Leo’ya katılmıyor. Başka bir oyuncak seçmeyi önermek bu görüş ayrılığına uygun yanıttır. Diğer seçenekler Mina’nın söyledikleriyle çelişir."
      }
],
    "test7": [
      {
            "id": "e6-1-t7-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Owen follows this club timetable. His cousin can join him only at the weekend. When can they go swimming together?",
            "options": [
                  "On Thursday at five o’clock.",
                  "On Saturday at a quarter past nine.",
                  "On Tuesday at half past four.",
                  "On Sunday at a quarter past nine."
            ],
            "correct": 1,
            "explanation": "Kuzen yalnız hafta sonu katılabiliyor. Programdaki hafta sonu etkinliği cumartesi 09.15’tedir; bu saat a quarter past nine olarak söylenir. Pazar günü yüzme yoktur.",
            "imageWidth": 360,
            "imageHeight": 530,
            "imageUrl": "/grade6/ingilizce/test-7/soru-01.svg",
            "imageAlt": "Yüzme kulübü takvimi: salı 16.30, perşembe 17.00, cumartesi 09.15; diğer günlerde yüzme yok. Altta yüzen kişi çizimi."
      },
      {
            "id": "e6-1-t7-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the children’s complete breakfast meals today. Which question has NO answer in the picture?",
            "options": [
                  "What does Jack have for breakfast?",
                  "Which child has an egg?",
                  "Which child has honey?",
                  "At what time does Lucy have breakfast?"
            ],
            "correct": 3,
            "explanation": "Görselde Jack’in peynir ve bal, Lucy’nin peynir ve yumurta yediği anlaşılır. Ancak herhangi bir saat bilgisi verilmediği için Lucy’nin kahvaltıyı saat kaçta yaptığı yanıtlanamaz.",
            "imageWidth": 360,
            "imageHeight": 540,
            "imageUrl": "/grade6/ingilizce/test-7/soru-02.svg",
            "imageAlt": "Lucy’nin kahvaltısında peynir ve yumurta, Jack’in kahvaltısında peynir ve bal bulunan etiketli tabaklar."
      },
      {
            "id": "e6-1-t7-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Liam gets on the bus at the school at eight. He wants to visit his grandfather, who is ill in hospital. Which instruction is correct?",
            "options": [
                  "Get off at the second stop at ten past eight.",
                  "Get off at the third stop at twenty past eight.",
                  "Stay at the first stop until half past eight.",
                  "Get off at the museum at ten past eight."
            ],
            "correct": 0,
            "explanation": "Hasta dedesini hastanede ziyaret etmek isteyen Liam ikinci durakta inmelidir. Haritada hastanenin saati 08.10, yani ten past eight olarak verilmiştir. Müze üçüncü duraktır.",
            "imageWidth": 360,
            "imageHeight": 560,
            "imageUrl": "/grade6/ingilizce/test-7/soru-03.svg",
            "imageAlt": "Aşağı yönlü otobüs güzergâhında 1: okul 08.00, 2: hastane 08.10, 3: müze 08.20."
      },
      {
            "id": "e6-1-t7-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Ada sends this picture and message to her friend. Which reply shows that her friend understands BOTH the weather and Ada’s feelings?",
            "options": [
                  "I’m sorry the rainy weather makes you sad.",
                  "You feel bored because there is no wind.",
                  "The windy weather is great for your kite. You sound excited!",
                  "The snowy weather is making you feel cold."
            ],
            "correct": 2,
            "explanation": "Ada kuvvetli rüzgâr sayesinde uçurtmasının yükseldiğini ve heyecanlı olduğunu söylüyor. C seçeneği hem rüzgârlı havayı hem de Ada’nın açıkça belirttiği duyguyu doğru yansıtır.",
            "imageWidth": 360,
            "imageHeight": 540,
            "imageUrl": "/grade6/ingilizce/test-7/soru-04.svg",
            "imageAlt": "Rüzgâr çizgileri altında uçurtma uçuran Ada; mesajı: rüzgâr kuvvetli, uçurtmam yüksekte, heyecanlı hissediyorum."
      },
      {
            "id": "e6-1-t7-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "It is 14:00. Finn wants to visit the fair today. Which message should his friend send him after reading these signs?",
            "options": [
                  "Come now! Every ride in the picture is open.",
                  "We can ride the Ferris wheel now, but not the carousel.",
                  "The carousel opens at two today.",
                  "We must wait until six for the Ferris wheel to open."
            ],
            "correct": 1,
            "explanation": "Atlıkarınca bugün kapalıdır. Dönme dolap 10.00–18.00 arasında açık olduğundan saat 14.00’te binilebilir. B seçeneği iki tabelayı birlikte doğru yorumlar.",
            "imageWidth": 360,
            "imageHeight": 590,
            "imageUrl": "/grade6/ingilizce/test-7/soru-05.svg",
            "imageAlt": "Sunset Fair’de atlıkarınca girişinde bugün kapalı tabelası; dönme dolapta 10.00–18.00 açık bilgisi."
      },
      {
            "id": "e6-1-t7-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the park scene. Which sentence describes the people’s activities correctly?",
            "options": [
                  "Dad and Emma are reading while Noah is playing football.",
                  "Dad is playing football while Emma and Noah are reading.",
                  "All three people are playing football together.",
                  "Noah is reading while Dad and Emma are running."
            ],
            "correct": 0,
            "explanation": "Baba ve Emma’nın ellerinde açık kitaplar vardır; Noah ise futbol topuyla oynuyor. Şu anda aynı anda yapılan eylemler are reading ve is playing ile anlatılır.",
            "imageWidth": 360,
            "imageHeight": 560,
            "imageUrl": "/grade6/ingilizce/test-7/soru-06.svg",
            "imageAlt": "Parkın üst bölümünde baba ve Emma açık kitap okuyor; alt bölümde Noah futbol topuyla oynuyor. Üç kişinin adı çizimlerin üzerinde."
      },
      {
            "id": "e6-1-t7-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "It is 18:45. Sophie wants to finish all the tasks on her board before dinner. What should she do next?",
            "options": [
                  "Pack her school bag for the first time today.",
                  "Start her homework because it is not done.",
                  "Have dinner now because it starts at a quarter to seven.",
                  "Feed the cat before seven o’clock."
            ],
            "correct": 3,
            "explanation": "Ödev bitmiş, okul çantası hazırlanmıştır. Henüz yapılmayan görev kediyi beslemektir. Akşam yemeği 19.00’da başlar; Sophie kalan görevi bu saatten önce tamamlamalıdır.",
            "imageWidth": 360,
            "imageHeight": 550,
            "imageUrl": "/grade6/ingilizce/test-7/soru-07.svg",
            "imageAlt": "Sophie’nin görev panosu: ödev bitti, okul çantası hazır, kediyi besleme henüz yapılmadı. Akşam yemeği 19.00’da."
      },
      {
            "id": "e6-1-t7-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the dialogue.\nWaiter: Would you like some pancakes?\nNora: Yes, please. But no honey on mine.\nWaiter: How about some jam instead?\nNora: That sounds lovely!\n\nWhich order matches Nora’s answers?",
            "options": [
                  "Pancakes with honey and jam.",
                  "Honey without pancakes.",
                  "Pancakes with jam, but no honey.",
                  "Pancakes without honey or jam."
            ],
            "correct": 2,
            "explanation": "Nora pankeki kabul eder ancak bal istemez. Bal yerine reçel önerisine olumlu yanıt verdiği için doğru sipariş ballı değil, reçelli pankektir."
      },
      {
            "id": "e6-1-t7-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read Deniz’s message.\n“Our new home is in a village. There are fewer cars here than in the city. I can hear birds in the morning instead of busy traffic. I like living here more than living in the city.”\n\nWhich sentence agrees with Deniz’s message?",
            "options": [
                  "He prefers the quieter village to the busy city.",
                  "There are more cars in the village than in the city.",
                  "He dislikes hearing birds in the morning.",
                  "He thinks the village is noisier than the city."
            ],
            "correct": 0,
            "explanation": "Deniz köyde daha az araba olduğunu, trafik yerine kuşları duyduğunu ve bu sakin yeri sevdiğini söylüyor. Bu ifadeler, kalabalık şehre göre daha sakin köyü tercih ettiğini gösterir."
      },
      {
            "id": "e6-1-t7-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Choose the question that completes the dialogue.\nMia: ____\nLeo: Because I think it is exciting.\nMia: I see. I prefer the carousel because it is slower.",
            "options": [
                  "Where is the roller coaster?",
                  "Why do you like the roller coaster?",
                  "When does the carousel open?",
                  "How often do you visit the fair?"
            ],
            "correct": 1,
            "explanation": "Leo Because ile başlayıp heyecan verici bulmasını gerekçe gösteriyor. Bu yanıta neden soran Why do you like the roller coaster sorusu uyar; yer, saat ve sıklık soruları uymaz."
      }
],
    "test8": [
      {
            "id": "e6-1-t8-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Both clocks show afternoon times. Which sentence describes the homework session correctly?",
            "options": [
                  "It starts at a quarter to five and finishes at a quarter past six.",
                  "It starts at half past five and finishes at six o’clock.",
                  "It starts at a quarter past five and finishes at a quarter to six.",
                  "It starts at a quarter past six and finishes at a quarter to seven."
            ],
            "correct": 2,
            "explanation": "İlk saatte yelkovan 3’ü, akrep 5’i biraz geçmişi gösterir: 17.15, a quarter past five. İkinci saatte yelkovan 9’dadır ve akrep 6’ya yaklaşır: 17.45, a quarter to six.",
            "imageWidth": 360,
            "imageHeight": 540,
            "imageUrl": "/grade6/ingilizce/test-8/soru-01.svg",
            "imageAlt": "Ödevin başlangıç saati 17.15, bitiş saati 17.45 olan iki analog saat."
      },
      {
            "id": "e6-1-t8-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the menu. Ben wants one drink and two different foods. Which order matches his plan?",
            "options": [
                  "Milk, cheese and olives.",
                  "Milk, tea and cheese.",
                  "Tea and olives only.",
                  "Cheese and olives, but no drink."
            ],
            "correct": 0,
            "explanation": "Süt bir içecektir; peynir ve zeytin iki farklı yiyecektir. B seçeneğinde iki içecek, C’de yalnızca bir yiyecek vardır. D’de ise içecek yoktur.",
            "imageWidth": 360,
            "imageHeight": 524,
            "imageUrl": "/grade6/ingilizce/test-8/soru-02.svg",
            "imageAlt": "Kahvaltı menüsünde süt kutusu, peynir dilimi, zeytin tabağı ve çay fincanı; İngilizce adlarıyla gösteriliyor."
      },
      {
            "id": "e6-1-t8-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the buildings on the same street. Which comparison is correct?",
            "options": [
                  "The library is taller than the hotel.",
                  "The museum is shorter than the library.",
                  "The hotel is shorter than the museum.",
                  "The museum is taller than the library but shorter than the hotel."
            ],
            "correct": 3,
            "explanation": "Binalar aynı zemin üzerindedir. Kütüphane iki, müze üç, otel beş kat yüksekliğinde çizilmiştir. Müze kütüphaneden yüksek, otelden alçaktır.",
            "imageWidth": 360,
            "imageHeight": 516,
            "imageUrl": "/grade6/ingilizce/test-8/soru-03.svg",
            "imageAlt": "Aynı zeminde solda iki katlı kütüphane, ortada beş katlı otel, sağda üç katlı müze."
      },
      {
            "id": "e6-1-t8-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the weather report. Which question CANNOT be answered using only the report?",
            "options": [
                  "Which day is colder?",
                  "How does Zoe feel about the snow?",
                  "Which day is sunny?",
                  "What is the weather like on Monday?"
            ],
            "correct": 1,
            "explanation": "Rapor pazartesinin daha soğuk ve karlı, salının ise güneşli olduğunu gösterir. Ancak Zoe’nin bu hava hakkındaki duygularıyla ilgili hiçbir bilgi verilmez.",
            "imageWidth": 360,
            "imageHeight": 520,
            "imageUrl": "/grade6/ingilizce/test-8/soru-04.svg",
            "imageAlt": "Hava raporu: pazartesi kar simgesi ve −2 °C; salı güneş simgesi ve 12 °C."
      },
      {
            "id": "e6-1-t8-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Everyone shown is waiting for a ride. Max chooses the queue with fewer people than BOTH other queues. Which ride does he choose?",
            "options": [
                  "The bumper cars, because only two people are waiting.",
                  "The Ferris wheel, because it has fewer people than the carousel.",
                  "The carousel, because its queue has only two people.",
                  "The bumper cars, because their queue has fewer people than the Ferris wheel."
            ],
            "correct": 2,
            "explanation": "Çarpışan araba sırasında altı, atlıkarıncada iki, dönme dolapta dört kişi vardır. Her iki diğer sıradan da daha az kişili olan sıra, atlıkarıncanın iki kişilik sırasıdır.",
            "imageWidth": 360,
            "imageHeight": 560,
            "imageUrl": "/grade6/ingilizce/test-8/soru-05.svg",
            "imageAlt": "Üç bekleme alanı: çarpışan arabalar için altı, atlıkarınca için iki, dönme dolap için dört kişi."
      },
      {
            "id": "e6-1-t8-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at the bakery scene. Which question can the baker answer with “Yes, I am”?",
            "options": [
                  "Are you watering a flower?",
                  "Are you reading a book?",
                  "Are you drinking tea?",
                  "Are you carrying bread?"
            ],
            "correct": 3,
            "explanation": "Fırıncı ekmekli tepsiyi taşıyor. Bu nedenle Are you carrying bread sorusuna Yes, I am diye yanıt verebilir. Çiçeği sulayan kişi ise alttaki çiçekçi dükkânındadır.",
            "imageWidth": 360,
            "imageHeight": 596,
            "imageUrl": "/grade6/ingilizce/test-8/soru-06.svg",
            "imageAlt": "Fırında bir kişi ekmekli tepsiyi taşıyor; çiçekçi dükkânında başka bir kişi saksıdaki çiçeği suluyor."
      },
      {
            "id": "e6-1-t8-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "This is Nina’s diary for one school week. Which sentence matches the pictures?",
            "options": [
                  "She cycles to school on three days and walks on two days.",
                  "She walks to school every day.",
                  "She cycles on Tuesday and Thursday only.",
                  "She walks on Monday, Wednesday and Friday."
            ],
            "correct": 0,
            "explanation": "Pazartesi, çarşamba ve cuma satırlarında bisiklet; salı ve perşembede yürüyen kişi simgesi vardır. Nina üç gün bisikletle, iki gün yürüyerek okula gitmiştir.",
            "imageWidth": 360,
            "imageHeight": 632,
            "imageUrl": "/grade6/ingilizce/test-8/soru-07.svg",
            "imageAlt": "Nina’nın okul ulaşım günlüğü: pazartesi bisiklet, salı yürüme, çarşamba bisiklet, perşembe yürüme, cuma bisiklet."
      },
      {
            "id": "e6-1-t8-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the dialogue.\nEce: Would you like to come to the fair after school?\nTom: I’d love to, but I have a piano lesson then. Maybe on Saturday?\n\nWhat does Tom do in his reply?",
            "options": [
                  "He accepts the invitation for today.",
                  "He refuses for today, gives a reason and suggests another day.",
                  "He says he never wants to visit the fair.",
                  "He asks Ece to give him a piano lesson."
            ],
            "correct": 1,
            "explanation": "Tom o saatte piyano dersi olduğu için bugünkü daveti kabul edemiyor. Nedenini açıklayıp cumartesiyi öneriyor; lunaparka hiçbir zaman gitmek istemediğini söylemiyor."
      },
      {
            "id": "e6-1-t8-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the message.\n“Hi, Sam! It is raining heavily here, so we cannot have our picnic outside. I feel sad about that. My sister is making sandwiches, and we are going to eat them at home instead.”\n\nWhich statement is NOT correct?",
            "options": [
                  "They are changing their picnic plan.",
                  "The rain stops them from eating outside.",
                  "The sister is preparing food now.",
                  "The writer is happy about the rainy weather."
            ],
            "correct": 3,
            "explanation": "Yazar yağmur yüzünden dışarıda piknik yapamadığı için üzgün olduğunu açıkça söylüyor. Bu yüzden yağmurlu hava hakkında mutlu olduğunu söyleyen D seçeneği yanlıştır. Diğer üç ifade metinle uyumludur."
      },
      {
            "id": "e6-1-t8-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the conversation.\nTina: Do you help at your uncle’s café every day?\nAli: No, only on Saturdays. I serve breakfast there from nine to eleven. On weekdays, I am at school.\n\nWhich question is answered in this conversation?",
            "options": [
                  "How does Ali travel to the café?",
                  "What is Ali’s favourite breakfast food?",
                  "How often does Ali help at the café?",
                  "How many customers visit the café?"
            ],
            "correct": 2,
            "explanation": "Ali yalnızca cumartesileri yardım ettiğini söyleyerek sıklık sorusunu yanıtlar. Ulaşım şekli, en sevdiği kahvaltılık ve müşteri sayısı verilmemiştir."
      }
],
    "test9": [
      {
            "id": "e6-1-t9-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Leo waters the plants only on the days with a plant picture. Which sentence describes his plan for these five days?",
            "options": [
                  "He waters them every day.",
                  "He waters them twice, on Monday and Thursday.",
                  "He waters them three times, on Tuesday, Wednesday and Friday.",
                  "He never waters them on weekdays."
            ],
            "correct": 1,
            "explanation": "Bitki simgesi yalnızca pazartesi ve perşembede vardır. Bu beş günlük planda Leo bitkileri iki kez sular. Çizelge hafta sonuyla ilgili bilgi vermez.",
            "imageWidth": 360,
            "imageHeight": 602,
            "imageUrl": "/grade6/ingilizce/test-9/soru-01.svg",
            "imageAlt": "Leo’nun pazartesi–cuma çizelgesinde yalnızca pazartesi ve perşembe satırlarında bitki simgesi; diğer satırlarda çizgi vardır."
      },
      {
            "id": "e6-1-t9-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Compare the order with the tray. Which request corrects the mistake?",
            "options": [
                  "Can I have cheese instead of bread?",
                  "Can I have jam instead of eggs?",
                  "Can I have milk instead of water?",
                  "Can I have water instead of milk?"
            ],
            "correct": 3,
            "explanation": "Siparişte yumurta, ekmek ve su istenir; tepside yumurta, ekmek ve süt vardır. Yanlış gelen süt yerine su istemek siparişi düzeltir.",
            "imageWidth": 360,
            "imageHeight": 546,
            "imageUrl": "/grade6/ingilizce/test-9/soru-02.svg",
            "imageAlt": "Sipariş: yumurta, ekmek ve su. Tepside yumurta, ekmek dilimi ve süt kutusu çizilmiş."
      },
      {
            "id": "e6-1-t9-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "All four buildings are on the same side of the street. I am in the building between the bank and the cinema. Where am I?",
            "options": [
                  "At the bookshop.",
                  "At the museum.",
                  "At the bank.",
                  "At the cinema."
            ],
            "correct": 0,
            "explanation": "Aynı sokak tarafındaki sıra banka, kitapçı, sinema ve müzedir. Banka ile sinema arasında kitapçı bulunur.",
            "imageWidth": 360,
            "imageHeight": 628,
            "imageUrl": "/grade6/ingilizce/test-9/soru-03.svg",
            "imageAlt": "Sokağın aynı tarafında yukarıdan aşağıya banka, kitapçı, sinema ve müze binaları."
      },
      {
            "id": "e6-1-t9-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Which message agrees with BOTH weather reports?",
            "options": [
                  "It is snowy in London and sunny in Rome.",
                  "London is hotter than Rome today.",
                  "It is raining in London, and Rome is hotter than London.",
                  "It is raining in both cities at noon."
            ],
            "correct": 2,
            "explanation": "Londra’da yağmur simgesi ve 18 °C, Roma’da güneş simgesi ve 30 °C vardır. Londra yağmurludur; Roma, Londra’dan daha sıcaktır.",
            "imageWidth": 360,
            "imageHeight": 552,
            "imageUrl": "/grade6/ingilizce/test-9/soru-04.svg",
            "imageAlt": "Öğle hava raporu: Londra yağmurlu 18 °C, Roma güneşli 30 °C."
      },
      {
            "id": "e6-1-t9-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Look at Oscar and Mia. Which sentence describes what they are doing now?",
            "options": [
                  "Oscar is eating an ice cream, and Mia is taking a photo.",
                  "Oscar and Mia are both eating ice creams.",
                  "Oscar is taking a photo, and Mia is eating an ice cream.",
                  "Oscar and Mia are both reading books."
            ],
            "correct": 0,
            "explanation": "Oscar dondurmayı ağzına yaklaştırır; Mia fotoğraf makinesini yüzünün önünde tutar. Şu anda yapılan bu eylemler is eating ve is taking ile anlatılır.",
            "imageWidth": 360,
            "imageHeight": 589,
            "imageUrl": "/grade6/ingilizce/test-9/soru-05.svg",
            "imageAlt": "Üstte Oscar elindeki dondurmayı ağzına yaklaştırıyor; altta Mia yüzüne tuttuğu fotoğraf makinesiyle fotoğraf çekiyor."
      },
      {
            "id": "e6-1-t9-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Amy attends the clubs in the picture. Which sentence gives the correct times for music and art?",
            "options": [
                  "Music starts at ten to ten, and art starts at twenty past eleven.",
                  "Music starts at ten past eleven, and art starts at twenty to two.",
                  "Music starts at twenty past ten, and art starts at twenty to twelve.",
                  "Music starts at ten past ten, and art starts at twenty to twelve."
            ],
            "correct": 3,
            "explanation": "10.10, ten past ten; 11.40 ise on ikiye yirmi kala, twenty to twelve olarak söylenir. Yüzme saati bu soruda sorulmamıştır.",
            "imageWidth": 360,
            "imageHeight": 585,
            "imageUrl": "/grade6/ingilizce/test-9/soru-06.svg",
            "imageAlt": "Amy’nin cumartesi kulüpleri: müzik 10.10, resim 11.40, yüzme 14.20."
      },
      {
            "id": "e6-1-t9-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "A reporter describes the two pictures. Which sentence does NOT match them?",
            "options": [
                  "One person is reading at the library.",
                  "Both people are playing football in the park.",
                  "The person in the park is playing football.",
                  "The two people are doing different activities."
            ],
            "correct": 1,
            "explanation": "Kütüphanedeki kişi kitap okur; parktaki kişi futbol oynar. İkisinin de parkta futbol oynadığını söyleyen B seçeneği görsellerle uyuşmaz.",
            "imageWidth": 360,
            "imageHeight": 593,
            "imageUrl": "/grade6/ingilizce/test-9/soru-07.svg",
            "imageAlt": "Üstte kütüphanede açık kitap okuyan kişi; altta parkta futbol topuna ayağını uzatan kişi."
      },
      {
            "id": "e6-1-t9-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the conversation.\nSue: Does your brother have cereal for breakfast?\nDan: No, he _____. He usually _____ toast and cheese.",
            "options": [
                  "don’t / eat",
                  "doesn’t / eating",
                  "doesn’t / eats",
                  "isn’t / eat"
            ],
            "correct": 2,
            "explanation": "Does ile sorulan üçüncü tekil kişi sorusunun olumsuz kısa yanıtı doesn’t olur. He öznesiyle geniş zamanda olumlu fiil eats biçimindedir."
      },
      {
            "id": "e6-1-t9-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the dialogue.\nBen: This queue is very long. I feel bored.\nLina: Look! It is our turn to get on the Ferris wheel now.\nBen: Great! I am excited!\n\nWhat happens in the dialogue?",
            "options": [
                  "Ben’s feelings change when it is their turn.",
                  "Ben is angry with Lina throughout the conversation.",
                  "Ben says all the rides are boring.",
                  "Lina refuses to get on the Ferris wheel."
            ],
            "correct": 0,
            "explanation": "Ben uzun sırada beklerken sıkılır; binme sıraları gelince heyecanlanır. Duygusu durum değişince değişir. Diğer seçeneklerdeki öfke, tüm oyuncakları sıkıcı bulma ve Lina’nın reddi konuşmada yoktur."
      },
      {
            "id": "e6-1-t9-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the dialogue.\nWaiter: Would you like some orange juice with your breakfast?\nLily: Yes, please. But no sugar, thank you.\n\nWhat does Lily mean?",
            "options": [
                  "She refuses the juice and asks for tea.",
                  "She wants juice with extra sugar.",
                  "She does not want any drink.",
                  "She accepts the juice but does not want added sugar."
            ],
            "correct": 3,
            "explanation": "Lily Yes, please diyerek portakal suyunu kabul eder; no sugar diyerek içine şeker eklenmesini istemez. İçeceğin doğal şeker içeriği hakkında bir iddiada bulunmaz."
      }
],
    "test10": [
      {
            "id": "e6-1-t10-01",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Which sentence correctly describes the order of Ella’s morning activities?",
            "options": [
                  "She leaves home before she packs her bag.",
                  "She feeds the cat before she packs her bag.",
                  "She feeds the cat after she packs her bag but before she leaves home.",
                  "She packs her bag after she leaves home."
            ],
            "correct": 2,
            "explanation": "Çantayı hazırlama 07.10, kediyi besleme 07.30, evden çıkma 07.50’dedir. Kedi besleme, çantayı hazırlamadan sonra ve evden çıkmadan öncedir.",
            "imageWidth": 360,
            "imageHeight": 603,
            "imageUrl": "/grade6/ingilizce/test-10/soru-01.svg",
            "imageAlt": "Ella’nın sabah planı: çanta hazırlama 07.10, kediyi besleme 07.30, evden çıkma 07.50; her eylemin simgesi vardır."
      },
      {
            "id": "e6-1-t10-02",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "The picture shows Maya’s breakfast today. Which question CANNOT be answered from the picture?",
            "options": [
                  "How often does Maya have olives for breakfast?",
                  "What is Maya drinking with her breakfast?",
                  "Is there toast on the table?",
                  "Is Maya having breakfast at home today?"
            ],
            "correct": 0,
            "explanation": "Görsel yalnızca bugünkü kahvaltıyı gösterir; zeytini ne sıklıkla yediği bilinmez. Süt, tost ekmeği ve bugün evde olduğu görselde belirtilir.",
            "imageWidth": 360,
            "imageHeight": 514,
            "imageUrl": "/grade6/ingilizce/test-10/soru-02.svg",
            "imageAlt": "Maya’nın bugünkü ev kahvaltısı: tost ekmeği, zeytinler ve süt; alt yazıda bugün evde ifadesi vardır."
      },
      {
            "id": "e6-1-t10-03",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Sam wants to complete the tasks in the picture. Where should he go for Task 1 and Task 2, in that order?",
            "options": [
                  "To the bank, then the cinema.",
                  "To the post office, then the library.",
                  "To the bakery, then the hospital.",
                  "To the library, then the post office."
            ],
            "correct": 3,
            "explanation": "Öykü kitabı ödünç almak için kütüphaneye, mektup göndermek için postaneye gidilir. Soruda görevlerin sırası korunmalıdır.",
            "imageWidth": 360,
            "imageHeight": 523,
            "imageUrl": "/grade6/ingilizce/test-10/soru-03.svg",
            "imageAlt": "Birinci görev açık kitap simgesiyle öykü kitabı ödünç almak, ikinci görev zarf simgesiyle mektup göndermek olarak gösterilir."
      },
      {
            "id": "e6-1-t10-04",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Nora and Jack are packing for the weather in the picture. Which advice is suitable for BOTH of them?",
            "options": [
                  "Nora needs a warm coat, and Jack needs shorts.",
                  "Nora can take a sun hat, and Jack needs a warm coat.",
                  "Both of them need shorts for hot weather.",
                  "Both of them need warm coats for snow."
            ],
            "correct": 1,
            "explanation": "Nora sıcak ve güneşli 32 °C hava için güneş şapkası alabilir. Jack soğuk ve karlı −4 °C hava için sıcak tutan mont almalıdır.",
            "imageWidth": 360,
            "imageHeight": 536,
            "imageUrl": "/grade6/ingilizce/test-10/soru-04.svg",
            "imageAlt": "Nora için güneş simgesi ve sıcak güneşli 32 °C; Jack için kar taneleri ve soğuk karlı −4 °C hava gösterilir."
      },
      {
            "id": "e6-1-t10-05",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Which invitation matches the ride in the picture?",
            "options": [
                  "Shall we ride the horses on the carousel?",
                  "Shall we go into the ghost train?",
                  "Shall we drive the bumper cars together?",
                  "Shall we go up on the Ferris wheel?"
            ],
            "correct": 2,
            "explanation": "Görselde koruyucu tamponları ve direksiyonları olan çarpışan arabalar vardır. Uygun davet bumper cars sürmeyi öneren C seçeneğidir.",
            "imageWidth": 360,
            "imageHeight": 480,
            "imageUrl": "/grade6/ingilizce/test-10/soru-05.svg",
            "imageAlt": "Lunapark pistinde direksiyonlu ve kalın tamponlu iki çarpışan araba; her arabada bir sürücü vardır."
      },
      {
            "id": "e6-1-t10-06",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "A teacher asks, “Is Zoe reading a book now?” Which reply matches the picture?",
            "options": [
                  "No, she isn’t. She is painting.",
                  "Yes, she is. Liam is painting, too.",
                  "No, she doesn’t. She reads every day.",
                  "Yes, she does. She likes books."
            ],
            "correct": 0,
            "explanation": "Zoe elindeki fırçayla resim yaparken Liam kitap okumaktadır. Is Zoe reading sorusuna No, she isn’t kısa yanıtı verilip mevcut eylemi She is painting ile açıklanır.",
            "imageWidth": 360,
            "imageHeight": 578,
            "imageUrl": "/grade6/ingilizce/test-10/soru-06.svg",
            "imageAlt": "Üstte Liam açık kitap okuyor; altta Zoe elindeki fırçayla bir tabloya resim yapıyor."
      },
      {
            "id": "e6-1-t10-07",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "You want to visit the toy shop while it is open today. Which time is suitable?",
            "options": [
                  "Half past twelve.",
                  "Quarter to one.",
                  "Quarter past six in the evening.",
                  "Quarter past one in the afternoon."
            ],
            "correct": 3,
            "explanation": "Mağaza 12.00–13.00 arasında öğle molası nedeniyle kapalıdır; 18.00’de kapanır. 13.15, öğleden sonraki 13.00–18.00 açık aralığındadır.",
            "imageWidth": 360,
            "imageHeight": 580,
            "imageUrl": "/grade6/ingilizce/test-10/soru-07.svg",
            "imageAlt": "Oyuncakçı saatleri: 09.00–12.00 açık, 12.00–13.00 öğle molası, 13.00–18.00 açık."
      },
      {
            "id": "e6-1-t10-08",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Which sentence gives a personal opinion about a funfair ride?",
            "options": [
                  "The carousel opens at ten o’clock.",
                  "I think the ghost train is exciting.",
                  "A ticket for the Ferris wheel is three pounds.",
                  "The bumper cars close at six o’clock."
            ],
            "correct": 1,
            "explanation": "I think ifadesiyle başlayan cümle, kişinin korku treni hakkındaki öznel değerlendirmesidir. Diğer cümleler açılış/kapanış saati veya fiyat bilgisi verir."
      },
      {
            "id": "e6-1-t10-09",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Complete the conversation.\nEce: _____ do you have breakfast on school days?\nPaul: At seven o’clock.\nEce: And _____ do you have?\nPaul: Bread, cheese and tea.",
            "options": [
                  "Where / when",
                  "What / where",
                  "What time / what",
                  "How often / who"
            ],
            "correct": 2,
            "explanation": "At seven o’clock saat bildirdiğinden ilk soru What time ile sorulur. Bread, cheese and tea yiyecek/içecek yanıtı olduğundan ikinci soru What ile sorulur."
      },
      {
            "id": "e6-1-t10-10",
            "subject": "ingilizce",
            "term": 1,
            "prompt": "Read the message.\n“Hi, Amy! I am at the fair with my sister. She loves the big rides, but I don’t. I am waiting near the ticket office while she is on the roller coaster.”\n\nWhich statement is correct?",
            "options": [
                  "The writer and the writer’s sister are both on the roller coaster now.",
                  "Amy is waiting near the ticket office.",
                  "The writer’s sister dislikes big rides.",
                  "The writer and the writer’s sister have different preferences."
            ],
            "correct": 3,
            "explanation": "Mesajı yazan kişi büyük oyuncakları sevmezken kız kardeşi sever. Şu anda yazar bilet gişesi yakınında bekler, kardeşi hız trenindedir. Amy mesajın alıcısıdır."
      }
],
    "test11": [
      {
        "id": "e6-1-t11-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The chart shows all of Max's and Lily's chess club days. How often do they go to the club on the same day?",
        "options": [
          "Once a week.",
          "Twice a week.",
          "Three times a week.",
          "Every day."
        ],
        "correct": 1,
        "explanation": "Max pazartesi, perşembe ve cumartesi; Lily salı, perşembe ve cumartesi kulübe gider. İkisinin de gittiği ortak günler perşembe ve cumartesidir. Bu nedenle aynı gün kulübe haftada iki kez giderler: Twice a week. Her birinin tek başına üç gün gitmesi, üçünün de ortak gün olduğu anlamına gelmez.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-01.svg",
        "imageWidth": 360,
        "imageHeight": 580,
        "imageAlt": "Chess club başlıklı tam haftalık çizelge. Sütunlar Day, Max, Lily. Mon: Max evet, Lily hayır; Tue: Max hayır, Lily evet; Wed: ikisi de hayır; Thu: ikisi de evet; Fri: ikisi de hayır; Sat: ikisi de evet; Sun: ikisi de hayır. Onay işareti kulübe gitmeyi, çizgi gitmemeyi gösterir. Başlıkta satranç taşı simgesi vardır."
      },
      {
        "id": "e6-1-t11-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Ella and Max want the same food and one drink each for breakfast. Look at what they like. Which order is suitable?",
        "options": [
          "Eggs for both, milk for Ella and tea for Max.",
          "Toast for both, tea for Ella and milk for Max.",
          "Cheese for both, milk for Ella and tea for Max.",
          "Toast for both, milk for Ella and tea for Max."
        ],
        "correct": 3,
        "explanation": "İki çocuğun da sevdiği yiyecek kızarmış ekmektir. Yumurtayı yalnız Ella, peyniri yalnız Max sever. Ella sütü, Max çayı sever; diğer içecekleri sevmezler. Bu yüzden ikisine kızarmış ekmek, Ella'ya süt ve Max'e çay isteyen D siparişi tüm tercihlere uyar.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-02.svg",
        "imageWidth": 360,
        "imageHeight": 540,
        "imageAlt": "Breakfast likes tablosunda yiyecek ve içecekler küçük resimleriyle gösteriliyor. Sütunlar Ella ve Max. Toast: ikisi de sever; Eggs: Ella sever, Max sevmez; Cheese: Ella sevmez, Max sever; Milk: Ella sever, Max sevmez; Tea: Ella sevmez, Max sever. Onay işareti Likes, çarpı işareti Doesn't like anlamındadır."
      },
      {
        "id": "e6-1-t11-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Your friend sends this message: 'Meet me opposite the bakery, next to the library.' Look at the map. Where should you meet your friend?",
        "options": [
          "At the café.",
          "At the park.",
          "At the bank.",
          "At the cinema."
        ],
        "correct": 0,
        "explanation": "Haritanın üst sırasında kütüphane, kafe ve sinema; alt sırasında park, fırın ve banka vardır. Kafe fırının tam karşısında, kütüphanenin yanındadır. Opposite karşısında, next to yanında demektir. Diğer yerler iki konum ipucunu birlikte sağlamaz.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-03.svg",
        "imageWidth": 360,
        "imageHeight": 480,
        "imageAlt": "İki sırayı ayıran yatay bir yol bulunan şehir haritası. Yolun üstünde soldan sağa Library, Café, Cinema; yolun altında soldan sağa Park, Bakery, Bank. Library ile Park, Café ile Bakery, Cinema ile Bank birbirinin tam karşısındadır. Aynı sıradaki komşu yerler bitişik gösterilmiştir; her yerin bina veya park simgesi vardır."
      },
      {
        "id": "e6-1-t11-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "It is a hot day. Look at Alex's plan and read his message. Why is Alex excited?",
        "options": [
          "Because he can play football outside.",
          "Because it is cold and snowy.",
          "Because he can draw with his sister at home.",
          "Because he wants to draw alone."
        ],
        "correct": 2,
        "explanation": "Görselde hava güneşli ve 32 °C'dir. Alex evde kalıp kız kardeşiyle resim çizebileceğini ve heyecanlı olduğunu açıkça söyler. Heyecanının nedeni birlikte yapacakları etkinliktir. Dışarıda futbol, soğuk ve karlı hava veya tek başına resim yapma görseldeki planla uyuşmaz.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-04.svg",
        "imageWidth": 360,
        "imageHeight": 560,
        "imageAlt": "Üstte güneş simgesi, Sunny ve 32 °C yazıları. Our plan başlıklı alanda evin içinde aynı masada resim çizen Alex ve kız kardeşinin tasviri; kâğıtlar ve kalemler görünüyor. Alex'in mesajı İngilizce: Let's stay at home. I can draw with my sister. I feel excited! Bu sahne planlanan etkinliği gösterir."
      },
      {
        "id": "e6-1-t11-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at Maya's opinions. Her friend asks, 'Do you like all three rides?' Which reply matches Maya's opinions?",
        "options": [
          "Yes. I like all three rides.",
          "No. I think the bumper cars are boring.",
          "No. I don't like any of them.",
          "No. I think the Ferris wheel is frightening."
        ],
        "correct": 1,
        "explanation": "Maya dönme dolabı rahatlatıcı, atlıkarıncayı eğlenceli bulur ve ikisini de sevdiğini söyler. Çarpışan arabaları ise sıkıcı bulur ve sevmez. Bu yüzden üç oyuncağın hepsini sevip sevmediği sorusuna No diyerek çarpışan arabaları sıkıcı bulduğunu söyleyen B yanıtı uygundur. Bunlar Maya'nın kişisel görüşleridir.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-05.svg",
        "imageWidth": 360,
        "imageHeight": 600,
        "imageAlt": "Maya's opinions başlığı altında üç oyuncak çizimi ve Maya'nın İngilizce sözleri var. Ferris wheel: I like it! Relaxing! Carousel: I like it! Fun! Bumper cars: I don't like them. Boring! Dönme dolap kabinli büyük tekerlek, atlıkarınca atlı dönen düzenek, çarpışan arabalar tamponlu araçlar olarak gösteriliyor."
      },
      {
        "id": "e6-1-t11-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the children's usual breakfast jobs and what they are doing today. Which statement is correct?",
        "options": [
          "Ben is doing both jobs today.",
          "Ava is doing both jobs today.",
          "Ben is doing Ava's usual job, and Ava is doing Ben's.",
          "They are both doing their usual jobs today."
        ],
        "correct": 2,
        "explanation": "Olağan kahvaltı görevlerinde Ben masayı kurar, Ava meyve suyu doldurur. Bugünkü görselde Ben meyve suyu doldururken Ava masaya tabak koyar. Bu nedenle bugün her biri diğerinin olağan görevini yapmaktadır; C seçeneği iki görseli birlikte doğru yorumlar. İki işi de tek bir kişi yapmamaktadır.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-06.svg",
        "imageAlt": "Breakfast jobs başlığı altında iki bölüm. USUAL JOBS bölümünde Ben'in olağan kahvaltı görevi tabak ve çatal-kaşıkla masayı kurmak, Ava'nın görevi sürahiden bardağa meyve suyu dökmek olarak ad ve nesne simgeleriyle gösteriliyor. TODAY bölümünde Ben sürahiden bardağa meyve suyu döküyor; Ava masaya tabak koyuyor. Her eylemin yanında kişinin adı var.",
        "imageWidth": 360,
        "imageHeight": 540
      },
      {
        "id": "e6-1-t11-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Tim wants to travel to the fair on the class bus. Which plan follows the notice?",
        "options": [
          "Wait at the fair at quarter past nine.",
          "Arrive at the school gate at quarter to ten.",
          "Get on the class bus at ten o'clock.",
          "Meet at the school gate at quarter past nine."
        ],
        "correct": 3,
        "explanation": "Duyuruda pazar günü okul kapısında buluşma 09.15, otobüsün kalkışı 09.30 ve lunaparka varış 10.00 olarak verilmiştir. Quarter past nine, 09.15 demektir. Sınıfla birlikte yolculuk için D seçeneğindeki buluşma yeri ve saati uygundur. 09.45'te okul kapısına gelmek kalkıştan sonradır; 10.00 ise varış saatidir.",
        "imageUrl": "/grade6/ingilizce/test-11/soru-07.svg",
        "imageAlt": "CLASS TRIP ve SUNDAY başlıklı pazar günü sınıf gezisi duyurusu. Okul kapısı simgesi yanında Meet, School gate ve 09:15; otobüs simgesi yanında Bus leaves ve 09:30; dönme dolap simgesi yanında At the fair ve 10:00 yazıyor. Sıra okul kapısında buluşma, otobüsle hareket ve lunaparka varış şeklinde.",
        "imageWidth": 360,
        "imageHeight": 580
      },
      {
        "id": "e6-1-t11-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Choose the best sentence to complete the conversation.\nNoah: The music here is very loud.\nLily: Let's meet at quarter to four.\nNoah: _____\nLily: At quarter to four.",
        "options": [
          "Can you say the time again, please?",
          "Who is your favourite singer?",
          "What do you have for breakfast?",
          "Do you like this ride?"
        ],
        "correct": 0,
        "explanation": "Yüksek sesli müzik, Noah'nın söylenen saati tekrar istemesini anlamlı kılar. Lily son cümlede buluşma saatini tekrar eder; bu yanıt A seçeneğindeki nazik tekrar isteğine uygundur. Diğer sorular şarkıcı, kahvaltı veya oyuncakla ilgili görüş sorar; saat yanıtı onlara uymaz."
      },
      {
        "id": "e6-1-t11-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read Elif's message to Sam.\n“Hi, Sam! Our class picnic is on Saturday. I'm bringing sandwiches. Mia is bringing fruit. Can you bring some water or juice?”\n\nWhich statement is correct?",
        "options": [
          "Elif is bringing fruit.",
          "The picnic is on Sunday.",
          "Elif asks Sam to bring drinks.",
          "Mia is bringing sandwiches."
        ],
        "correct": 2,
        "explanation": "Elif sandviç, Mia meyve getirecektir. Elif, Sam'den su veya meyve suyu ister; bunlar içecek olduğu için C seçeneği doğrudur. Mesajda pikniğin cumartesi günü olduğu açıkça yazılıdır."
      },
      {
        "id": "e6-1-t11-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the conversation with the correct question words.\nNora: _____ do you like this café?\nLeo: Because the food is delicious.\nNora: _____ do you usually come here with?\nLeo: My family.",
        "options": [
          "When / Who",
          "Why / Who",
          "Why / Where",
          "What / When"
        ],
        "correct": 1,
        "explanation": "Because the food is delicious bir neden bildirdiğinden ilk soru Why ile sorulur. My family kişi bildirdiğinden ikinci soru Who ile sorulur. Who do you usually come here with? sorusu, buraya genellikle kiminle geldiğini sorar."
      }
    ],
    "test12": [
      {
        "id": "e6-1-t12-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The music club has a new starting time today. Which message gives the correct new time?",
        "options": [
          "It starts at a quarter to four.",
          "It starts at half past three.",
          "It starts at a quarter past four.",
          "It starts at a quarter past three."
        ],
        "correct": 2,
        "explanation": "Duyurudaki eski saat 15.30'un üzeri çizilmiştir. Yeni saati gösteren analog saatte yelkovan 3'te, akrep 4'ü biraz geçmiş durumdadır; öğleden sonra 16.15'tir. A quarter past four, dördü çeyrek geçe demektir. Eski saat yerine güncellenmiş saati bildiren C mesajı doğrudur.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-01.svg",
        "imageWidth": 360,
        "imageHeight": 580,
        "imageAlt": "Music club ve Today başlıklı saat değişikliği duyurusu. Old time bölümünde 15:30 yazısının üzeri çizilmiş. Aşağı yönlü ok New time bölümüne gidiyor. Bu bölümde analog saatin yelkovanı 3'te, akrebi 4 ile 5 arasında 4'e yakın; saat 4.15'i gösteriyor. Altında Afternoon yazıyor."
      },
      {
        "id": "e6-1-t12-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "A customer says, 'Can I have some pancakes, please?' Look at the café counter now. Which reply matches the food available?",
        "options": [
          "Sorry, there are no pancakes left. Would you like some eggs?",
          "Of course. Here are your pancakes.",
          "Sorry, we have no food left.",
          "We have pancakes, but there are no eggs left."
        ],
        "correct": 0,
        "explanation": "Tezgâhta yumurta ve kızarmış ekmek vardır; pankek bölümünde None left, yani hiç kalmadı yazmaktadır. Garson pankek kalmadığını söyleyip mevcut yumurtayı alternatif olarak teklif edebilir. Diğer seçenekler ya pankek varmış gibi davranır ya da tezgâhta görünen yiyeceklerin olmadığını söyler.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-02.svg",
        "imageWidth": 360,
        "imageHeight": 500,
        "imageAlt": "Café counter ve NOW başlıklı kahvaltı tezgâhında üç etiketli bölüm var. Eggs bölümünde yumurtalı dolu tabak ve Available; Toast bölümünde kızarmış ekmek dilimleri ve Available yazıyor. Pancakes bölümünde boş tabak ve None left yazısı var. Boş bölümün pankeklere ait olduğu açıkça belirtilmiş."
      },
      {
        "id": "e6-1-t12-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Ben is at the school. His friend says, 'Walk towards the cinema. Go past the bank and stop at the next building.' Where should Ben stop?",
        "options": [
          "At the bank.",
          "At the cinema.",
          "At the school.",
          "At the post office."
        ],
        "correct": 3,
        "explanation": "Haritadaki yukarı yönlü yürüyüş sırasında okuldan sonra banka, ardından postane, en ileride sinema vardır. Go past the bank, bankayı geç demektir. Bankadan sonraki ilk bina postane olduğu için Ben orada durmalıdır; sinemaya kadar gitmesi istenmiyor.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-03.svg",
        "imageWidth": 360,
        "imageHeight": 560,
        "imageAlt": "Düz bir sokağın aynı tarafındaki dört bina alttan üste doğru School, Bank, Post office, Cinema şeklinde sıralanmış. Ben başlangıçtaki okulun yanında. Sokaktaki yön oku okuldan sinemaya doğru, yukarıyı gösteriyor. Binalar arasında başka bina veya kavşak yok."
      },
      {
        "id": "e6-1-t12-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Mia is at the school gate. Look at the weather and read her message. Which reply offers her help?",
        "options": [
          "I don't like rainy days, either.",
          "Don't worry. You can use my umbrella.",
          "What time do you usually get up?",
          "I am watching TV at home."
        ],
        "correct": 1,
        "explanation": "Görselde yağmur yağmaktadır. Mia endişelendiğini ve eve yürümek zorunda olduğunu açıkça söylüyor. Don't worry. You can use my umbrella yanıtı hem onu rahatlatır hem de şemsiyesini kullanmayı teklif ederek ihtiyacına somut yardım sunar. Diğer seçenekler görüş, soru veya kişinin kendi etkinliği hakkında bilgi verir; yardım teklif etmez.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-04.svg",
        "imageWidth": 360,
        "imageHeight": 540,
        "imageAlt": "Yağmur bulutu, yağmur damlaları ve Rainy etiketi altında okul kapısının yakınında duran Mia görülüyor. Mia'nın elinde şemsiye yok. Mesajında İngilizce 'I feel worried. I have to walk home.' yazıyor. Kapıda School etiketi var; Mia henüz yürümeye başlamamış."
      },
      {
        "id": "e6-1-t12-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Leah is holding an ice cream at the carousel entrance. Look at the sign. Which action follows the rule?",
        "options": [
          "Eat her ice cream during the ride.",
          "Buy a drink to take on the ride.",
          "Finish her ice cream before the ride.",
          "Take her ice cream on the ride without eating it."
        ],
        "correct": 2,
        "explanation": "Tabelada No food or drinks on this ride, yani bu oyuncağa yiyecek veya içecekle binilmez yazıyor. Leah dondurmasını binmeden önce bitirirse kurala uyar. Dondurmayı içeride yemek, yemeden yanında taşımak veya içecek götürmek kuralla uyuşmaz.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-05.svg",
        "imageWidth": 360,
        "imageHeight": 560,
        "imageAlt": "Carousel girişinde elinde külahlı dondurma tutan Leah, girişin dışında duruyor. Tabelada İngilizce 'No food or drinks on this ride' yazıyor; yanında üzerleri çizilmiş dondurma ve içecek bardağı simgeleri var. Girişin arkasında atlıkarıncanın çatısı ve bir at figürü görülüyor. Leah henüz oyuncağa binmemiş."
      },
      {
        "id": "e6-1-t12-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at what the children are doing. Which child is most likely to say, “Can I have three apples, please?”",
        "options": [
          "Anna",
          "Sam",
          "Ela",
          "Leo"
        ],
        "correct": 3,
        "explanation": "Can I have three apples, please? bir satıcıdan nazikçe üç elma istemek için kullanılır. Görselde meyve tezgâhında alışveriş yapan çocuk Leo'dur. Anna kitap okur, Sam köpeğini gezdirir, Ela fotoğraf çeker; onların gösterilen etkinlikleri bu alışveriş isteğine uymaz.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-06.svg",
        "imageAlt": "IN TOWN başlıklı dört sahne. Üst solda ANNA açık bir kitap okuyor. Üst sağda SAM tasmalı köpeğini gezdiriyor. Alt solda ELA göz hizasında tuttuğu fotoğraf makinesiyle fotoğraf çekiyor. Alt sağda LEO elma bulunan bir meyve tezgâhından alışveriş yapıyor; satıcıya para uzatıyor. Her sahnede çocuğun adı yazılı.",
        "imageWidth": 360,
        "imageHeight": 600
      },
      {
        "id": "e6-1-t12-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Leo and Max want to ride the carousel. Which plan follows BOTH signs?",
        "options": [
          "They each use a ticket and wait in line.",
          "They share one ticket and wait in line.",
          "They each use a ticket and go to the front of the queue without waiting.",
          "They share one ticket and go to the front of the queue without waiting."
        ],
        "correct": 0,
        "explanation": "1 PERSON = 1 TICKET tabelası her kişi için ayrı bilet gerektiğini gösterir. WAIT YOUR TURN, sıranı bekle demektir. Bu nedenle iki arkadaşın ayrı bilet kullanıp sırada beklediği A seçeneği iki kurala da uyar. Tek bilet paylaşmak ilk kurala, bekleyenlerin önüne geçmek ikinci kurala uymaz.",
        "imageUrl": "/grade6/ingilizce/test-12/soru-07.svg",
        "imageAlt": "CAROUSEL başlıklı atlıkarınca girişindeki iki tabela. İlk tabelada bir kişi ve bir bilet simgesiyle 1 PERSON = 1 TICKET yazıyor. İkinci tabelada bir giriş çizgisinin gerisinde sırayla bekleyen kişiler ve WAIT YOUR TURN yazısı var. Atlıkarınca simgesi girişin hangi oyuncağa ait olduğunu gösteriyor.",
        "imageWidth": 360,
        "imageHeight": 520
      },
      {
        "id": "e6-1-t12-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Choose the best reply to complete the conversation at a café.\nMila: Excuse me, is this seat free?\nNoah: Yes, it is.\nMila: Can I sit here?\nNoah: _____",
        "options": [
          "I usually have tea here.",
          "Of course. Please sit down.",
          "The café closes at five.",
          "Two eggs and some cheese."
        ],
        "correct": 1,
        "explanation": "Mila önce sandalyenin boş olup olmadığını, ardından oraya oturup oturamayacağını sorar. Of course. Please sit down. yanıtı nazikçe izin verir ve konuşmayı tamamlar. Diğer seçenekler içecek alışkanlığı, kapanış saati veya yiyecek siparişi bildirir; oturma isteğini yanıtlamaz."
      },
      {
        "id": "e6-1-t12-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read Lucy's text.\n“On Saturday mornings, I help my grandmother at the market. She gives me empty bags. I put apples into them. Then I give the bags to the customers.”\n\nWhat does “them” refer to in the text?",
        "options": [
          "The apples.",
          "The customers.",
          "Saturday mornings.",
          "The empty bags."
        ],
        "correct": 3,
        "explanation": "Lucy'nin büyükannesi ona boş poşetler verir. Sonraki cümlede Lucy elmaları bu poşetlerin içine koyduğunu söyler. Bu nedenle into them içindeki them, önceki cümledeki empty bags ifadesinin yerini tutar. Elmalar, müşteriler veya zaman ifadesi bu gönderimin karşılığı değildir."
      },
      {
        "id": "e6-1-t12-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Complete the breakfast conversation.\nWaiter: How _____ eggs would you like?\nNora: Two, please.\nWaiter: And how _____ milk would you like?\nNora: Just a little, please.",
        "options": [
          "many / much",
          "much / many",
          "many / many",
          "much / much"
        ],
        "correct": 0,
        "explanation": "Eggs adet olarak sayılabilen çoğul bir isimdir; kaç yumurta istendiği How many eggs ile sorulur. Milk burada bir sıvının miktarını belirtir; ne kadar süt istendiği How much milk ile sorulur. Two ve just a little yanıtları da bu ayrımı destekler."
      }
    ],
    "test13": [
      {
        "id": "e6-1-t13-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Mia and Leo want to spend a full thirty minutes together in the park today. They cannot leave their clubs early, and they must leave the park by the times on their cards. The park is next to both clubs; ignore walking time. Which plan is possible?",
        "options": [
          "Meet at quarter past three and leave at quarter to four.",
          "Meet at half past three and leave at four.",
          "Meet at quarter to four and leave at quarter past four.",
          "Meet at four and leave at half past four."
        ],
        "correct": 1,
        "explanation": "Mia'nın kulübü 15.15'te, Leo'nunki 15.30'da biter; buluşma en erken 15.30 olabilir. Mia en geç 16.00'da, Leo 16.15'te ayrılmalıdır. Ortak 30 dakikalık aralık 15.30–16.00'dır. A, Leo'nun kulübü bitmeden başlar; C ve D, Mia'nın ayrılma sınırını aşar.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-01.svg",
        "imageAlt": "Mia: club ends 15:15, leave park by 16:00. Leo: club ends 15:30, leave park by 16:15. Two clock cards and park icon.",
        "imageWidth": 360,
        "imageHeight": 740
      },
      {
        "id": "e6-1-t13-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read Eva's breakfast note and look at the four trays. She wants ONE tray with everything she asks for and nothing she refuses. Which tray should the waiter bring?",
        "options": [
          "Tray A",
          "Tray B",
          "Tray C",
          "Tray D"
        ],
        "correct": 2,
        "explanation": "Eva yumurtayı bugün istemez; her zamanki yumurtası yerine peynir, ayrıca kızarmış ekmek ister. Çayı yalnız süt eklenmeden kabul eder. C tepsisinde peynir, kızarmış ekmek ve sütsüz çay bulunur. A yumurtalıdır; B'nin çayında süt vardır; D'de kızarmış ekmek yerine pankek vardır.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-02.svg",
        "imageAlt": "Eva: I usually have eggs. Not today! Cheese instead, please, and toast. Tea is fine, but no milk in it. A eggs toast plain tea; B cheese toast tea with milk; C cheese toast plain tea; D cheese pancakes plain tea.",
        "imageWidth": 360,
        "imageHeight": 1000
      },
      {
        "id": "e6-1-t13-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Arda says, 'I want a café that is quieter than Oak Café but cheaper than River Café.' In the chart, more people means a noisier café. Which café meets BOTH conditions?",
        "options": [
          "Oak Café",
          "River Café",
          "Hill Café",
          "Park Café"
        ],
        "correct": 3,
        "explanation": "Oak'ta 12 kişi vardır; daha sakin seçenek 12'den az kişili olmalıdır. River'da çay 4 sterlindir; daha ucuz seçenek 4 sterlinden düşük olmalıdır. Park, 8 kişi ve 3 sterlinle ikisini sağlar. Hill sakindir ama 5 sterlinle pahalıdır. Oak kendisinden daha sakin, River kendisinden daha ucuz değildir.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-03.svg",
        "imageAlt": "Four cafés: Oak 12 people tea £2; River 6 people tea £4; Hill 4 people tea £5; Park 8 people tea £3. Person icons and tea cups, count and price labels.",
        "imageWidth": 360,
        "imageHeight": 920
      },
      {
        "id": "e6-1-t13-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Lina wants to fly her kite when it is windy but not rainy. Sam wants to take photos outside when it is sunny and warmer than 15°C. They can choose different times. Which message matches BOTH plans?",
        "options": [
          "Lina: Saturday afternoon. Sam: Sunday morning.",
          "Lina: Saturday morning. Sam: Sunday morning.",
          "Lina: Sunday morning. Sam: Sunday afternoon.",
          "Lina: Sunday afternoon. Sam: Saturday afternoon."
        ],
        "correct": 0,
        "explanation": "Lina için cumartesi öğleden sonra rüzgârlı ama yağmursuzdur. Cumartesi sabahı yağmurludur. Sam için pazar sabahı güneşli ve 18°C'dir; pazar öğleden sonrası güneşli olsa da 12°C ile yeterince sıcak değildir. Her iki koşulu aynı anda sağlayan plan A'dır.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-04.svg",
        "imageAlt": "Forecast: Saturday morning rainy windy 16°C; Saturday afternoon cloudy windy 17°C; Sunday morning sunny calm 18°C; Sunday afternoon sunny calm 12°C. Four weather icons.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "e6-1-t13-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "It is 14:30. Nora wants a ride that goes slowly and lets her see the town from above. Ben agrees, but says, 'Let's choose something we can ride NOW, not later.' Look at the signs. Which reply follows their plan?",
        "options": [
          "Let’s ride the Ferris wheel now.",
          "Let’s take the sky train now.",
          "Let’s ride the roller coaster now.",
          "Let’s ride the carousel now."
        ],
        "correct": 1,
        "explanation": "İki kişi yavaş, yüksekten manzara sunan ve şu an açık olan bir oyuncak ister. Sky train üç koşulu da karşılar. Ferris wheel uygun türde olsa da 15.00'te açılır; roller coaster hızlıdır; carousel yüksekten manzara sağlamaz.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-05.svg",
        "imageAlt": "Ferris wheel opens 15:00 slow high; skytrain open 14:00–18:00 slow high; rollercoaster open fast; carousel open slow near ground. Illustrations of four rides. The sky train sign explicitly says Town view.",
        "imageWidth": 360,
        "imageHeight": 1000
      },
      {
        "id": "e6-1-t13-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the four people in town now. One of them says, 'I am not shopping. I am doing the same activity as Lisa, but I am not sitting down.' Who is speaking?",
        "options": [
          "Anna",
          "Tom",
          "Max",
          "Lisa"
        ],
        "correct": 2,
        "explanation": "Lisa oturarak kitap okur. Aynı etkinliği yapan ama oturmayan kişi ayakta kitap okuyan Max'tir. Anna kitap okumaz, Tom alışveriş yapar. Lisa okuyor olsa da oturmadığını söyleyemez. İki ipucu birlikte kullanılmalıdır.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-06.svg",
        "imageAlt": "Four scenes: Anna stands with an empty basket; Tom buys apples from a seller; Lisa sits on a bench reading a blue book; Max stands reading a red book. Names clear; no activity labels.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "e6-1-t13-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the two messages and look at the map. The friends need a meeting place. Which building should they choose?\nAli: 'Let's meet opposite the bank.'\nBeth: 'There are two buildings opposite it. Not the one next to the bakery! Choose the other one.'",
        "options": [
          "The bakery.",
          "The bank.",
          "The cinema.",
          "The library."
        ],
        "correct": 3,
        "explanation": "Haritada bankanın karşı tarafında sinema ve kütüphane vardır. Sinema fırının yanındadır; Beth bu binayı istemez. Kütüphane diğer adaydır. Fırın adaylardan biri değildir; banka ise karşısında buluşulacak referans binadır.",
        "imageUrl": "/grade6/ingilizce/test-13/soru-07.svg",
        "imageAlt": "Across wide street from bank are cinema and library. Bakery immediately next to cinema, library farther beyond park gap. Opposite zone indicated clearly.",
        "imageWidth": 360,
        "imageHeight": 820
      },
      {
        "id": "e6-1-t13-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the conversation.\nAva: 'The roller coaster is more exciting than the carousel.'\nOmar: 'Then let’s ride it!'\nAva: 'Not today. I want a slower ride. Let’s choose the carousel.'\n\nWhich sentence correctly gives BOTH Ava’s opinion and her choice today?",
        "options": [
          "She thinks the roller coaster is more exciting, but chooses the carousel.",
          "She thinks the roller coaster is more exciting and chooses it.",
          "She thinks the carousel is more exciting and chooses it.",
          "She thinks the carousel is more exciting, but chooses the roller coaster."
        ],
        "correct": 0,
        "explanation": "Ava hız trenini atlıkarıncadan daha heyecanlı bulur; ancak bugün daha yavaş bir oyuncak istediği için atlıkarıncayı seçer. Daha heyecanlı bulduğu şey ile o gün tercih ettiği şey aynı olmak zorunda değildir. A iki bilgiyi de doğru birleştirir; diğer seçenekler görüşü veya seçimi değiştirir."
      },
      {
        "id": "e6-1-t13-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the messages.\nMina: 'I am buying cheese for our breakfast. Ali is bringing bread. Can you bring a drink?'\nEce: 'Sure. Would you like milk or orange juice?'\nMina: 'Ali likes both, but I don't like milk.'\nEce: 'Then I can bring the other one for both of you.'\n\nWhat does Ece choose, and why?",
        "options": [
          "Milk, because Mina asks for it after Ece offers two drinks.",
          "Orange juice, because Ali refuses milk in his reply.",
          "Orange juice, because Ali likes it and Mina refuses milk.",
          "Milk, because Ali likes both drinks and Mina makes no choice."
        ],
        "correct": 2,
        "explanation": "The other one, iki içecekten süt dışındaki portakal suyudur. Ali her ikisini sever; Mina sütü istemez. C bu iki kişiye ait bilgiyi doğru ayırır. A Mina'nın süt istediğini, B Ali'nin sütü reddettiğini, D Mina'nın tercih belirtmediğini yanlış söyler."
      },
      {
        "id": "e6-1-t13-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the text.\n'On Mondays and Fridays, Leo walks to school with his sister. On Tuesdays, Wednesdays and Thursdays, he takes the bus. His sister walks every school day. Today is Wednesday, but the buses are not running. Leo is walking with his sister.'\n\nWhich sentence correctly compares their usual Wednesday journeys with today?",
        "options": [
          "Both children are going to school in their usual way.",
          "His sister is going in her usual way, but Leo is not.",
          "Leo is going in his usual way, but his sister is not.",
          "Both children are going to school in a different way from usual."
        ],
        "correct": 1,
        "explanation": "Çarşamba günleri Leo normalde otobüse biner; kız kardeşi ise her okul günü yürür. Bugün ikisi de yürüdüğüne göre kız kardeşinin ulaşım biçimi alışılmış olanla aynıdır, Leo'nunki değişmiştir. Pazartesi ve cuma birlikte yürümeleri, çarşamba rutinini değiştirmez."
      }
    ],
    "test14": [
      {
        "id": "e6-1-t14-01",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The diary shows all of Eda's activities this week. She says, 'On every day with a music lesson, I also help at home. But I don't have a music lesson on every day I help at home.' Which statement agrees with BOTH the diary and her words?",
        "options": [
          "She helps at home only on Tuesday and Thursday.",
          "She has music lessons on three days and helps at home on two.",
          "She has music lessons on Tuesday and Thursday, and also helps at home on Saturday.",
          "She helps at home on Tuesday and Thursday, but not on her music days."
        ],
        "correct": 2,
        "explanation": "Müzik dersleri salı ve perşembedir; bu iki gün evde yardım da vardır. Cumartesi ise evde yardım vardır ama müzik dersi yoktur. Bu nedenle müzik günlerinin hepsi yardım günüdür, fakat yardım günlerinin hepsi müzik günü değildir. C iki yönü de korur.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-01.svg",
        "imageAlt": "Weekly diary: Tuesday music and help at home; Thursday music and help at home; Saturday help at home only. Monday and Wednesday reading; Friday football.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "e6-1-t14-02",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Two friends have breakfast at the café. They want one food each, and their foods must be different. They want the SAME drink. Read their notes and the menu. Which order follows all their requests?",
        "options": [
          "Cheese for Ada, eggs for Ben, and tea for both.",
          "Eggs for Ada, cheese for Ben, and tea for both.",
          "Cheese for Ada, eggs for Ben, and milk for both.",
          "Cheese for Ada, pancakes for Ben, and tea for both."
        ],
        "correct": 0,
        "explanation": "Ada yumurtayı istemez; mevcut seçeneklerden peynir uygundur. Ben peyniri istemez ve pankek bitmiştir; yumurta uygundur. Ada çay veya sütü kabul ederken Ben sütü istemez, bu nedenle ortak içecek çaydır. A iki yiyecek ve ortak içeceği doğru eşleştirir.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-02.svg",
        "imageAlt": "Menu: eggs, cheese, tea, milk available; pancakes sold out. Ada: no eggs; tea or milk is fine. Ben: no cheese and no milk. Two individual notes beside food icons.",
        "imageWidth": 360,
        "imageHeight": 960
      },
      {
        "id": "e6-1-t14-03",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the three towers. In this picture, towers with more floors are taller. A smaller year means an older building. Which sentence is TRUE?",
        "options": [
          "North is taller and older than both other towers.",
          "East is shorter than West but older than North.",
          "West is taller than East and older than North.",
          "North is taller than West, but East is older than North."
        ],
        "correct": 3,
        "explanation": "North 8 katla West'ten (6 kat) uzundur. East 1950 yapımıdır; North 1980 yapımı olduğundan East daha eskidir. North en eski değildir; East, West'ten kısa değildir; West de East'ten uzun değildir. D iki farklı karşılaştırmayı doğru birleştirir.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-03.svg",
        "imageAlt": "Three towers: North 8 floors built 1980; East 10 floors built 1950; West 6 floors built 2000. Floor-count building silhouettes and year labels.",
        "imageWidth": 360,
        "imageHeight": 820
      },
      {
        "id": "e6-1-t14-04",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the morning and afternoon reports for the SAME town. Which message correctly describes what changes and what stays the same?",
        "options": [
          "It is warmer in the afternoon, and the wind stops.",
          "It is colder in the afternoon; the rain stops, but it is still windy.",
          "It is colder in the afternoon, and it starts raining.",
          "The temperature stays the same, but the wind gets stronger."
        ],
        "correct": 1,
        "explanation": "Sabah 16°C, yağmurlu ve rüzgârlıdır. Öğleden sonra 11°C ile daha soğuk, yağmursuz fakat yine rüzgârlıdır. B değişen sıcaklık ve yağışı, devam eden rüzgârdan ayırır. Rüzgârın güçlenme bilgisi yoktur.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-04.svg",
        "imageAlt": "Same town: morning 16°C rain and wind; afternoon 11°C cloudy, no rain, wind. Weather icons and a temperature for each time.",
        "imageWidth": 360,
        "imageHeight": 780
      },
      {
        "id": "e6-1-t14-05",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Look at the fair map and read the messages.\nNora: 'I am in the queue for the ride with horses.'\nEli: 'I am not in your queue. I am waiting for the ride NEXT TO yours, not the one opposite it.'\n\nWhich ride is Eli waiting for?",
        "options": [
          "The Ferris wheel.",
          "The roller coaster.",
          "The carousel.",
          "The ghost train."
        ],
        "correct": 0,
        "explanation": "Atlı oyuncak carousel'dir. Haritada carousel'in hemen yanında Ferris wheel, karşısında roller coaster vardır. Eli yanındaki oyuncağı seçtiğini, karşıdakini seçmediğini söyler; cevap Ferris wheel'dir. Ghost train aynı sırada yakın komşu değildir.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-05.svg",
        "imageAlt": "Fair map: carousel and Ferris wheel side by side north of path; roller coaster directly south of carousel; ghost train south of Ferris wheel. Ride drawings, labels and path.",
        "imageWidth": 360,
        "imageHeight": 900
      },
      {
        "id": "e6-1-t14-06",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "The pictures show the same people at TWO different times. Which sentence correctly describes a change from Picture 1 to Picture 2?",
        "options": [
          "The boy is reading in both pictures, but the woman is not.",
          "The girl is playing with the ball in Picture 1 and reading in Picture 2.",
          "The woman is reading in Picture 1 and giving a drink to the boy in Picture 2.",
          "The boy is drinking in Picture 1 and the girl is drinking in Picture 2."
        ],
        "correct": 2,
        "explanation": "İlk resimde kadın kitap okur; ikinci resimde çocuğa içecek uzatır. Kız iki resimde de topla oynar. Erkek çocuk ilk resimde bankta oturur, ikinci resimde içeceği alır. C, aynı kişinin iki zamandaki etkinliğini doğru karşılaştırır.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-06.svg",
        "imageAlt": "Picture 1: woman reads on bench; boy sits beside her; girl plays with ball. Picture 2: woman stands and gives a cup to boy; girl still plays with ball. Same clothes identify each person. Each person is labelled Woman, Boy or Girl in both frames.",
        "imageWidth": 360,
        "imageHeight": 1000
      },
      {
        "id": "e6-1-t14-07",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "A school group is choosing a bus to the fair. They must arrive BEFORE 10:00, not at 10:00. They can leave school only AFTER their lesson ends at 09:15. The bus stop is at the school gate. Which bus can they take?",
        "options": [
          "Bus A",
          "Bus B",
          "Bus C",
          "Bus D"
        ],
        "correct": 3,
        "explanation": "Dersi 09.15'te bittiği için 09.10'da kalkan A'ya yetişemezler. B tam 10.00'da varır; before 10:00 koşulunu karşılamaz. C 10.05'te varır. D, 09.30'da kalkıp 09.55'te vararak hem ders sonrası kalkış hem 10.00'dan önce varış koşulunu sağlar.",
        "imageUrl": "/grade6/ingilizce/test-14/soru-07.svg",
        "imageAlt": "Four bus cards with departure and arrival times: A 09:10–09:45; B 09:20–10:00; C 09:25–10:05; D 09:30–09:55. Lesson ends 09:15, arrive before 10:00.",
        "imageWidth": 360,
        "imageHeight": 940
      },
      {
        "id": "e6-1-t14-08",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the messages from the SAME town.\nAva: 'It is snowing! I am excited because I can make a snowman.'\nBen: 'Our football match is cancelled because of the snow. I feel sad about that.'\n\nWhich statement is supported by BOTH messages?",
        "options": [
          "Both children dislike snowy weather because it stops outdoor activities.",
          "The same weather gives them different feelings because it affects their plans differently.",
          "Ben dislikes every snowy day, but Ava enjoys every kind of weather.",
          "Both children feel sad, but Ava decides to play outside."
        ],
        "correct": 1,
        "explanation": "İki çocuk aynı karlı havayı farklı planlarla ilişkilendirir: Ava kardan adam yapabileceği için heyecanlı, Ben maçı iptal olduğu için üzgündür. B her iki gerekçeyi korur. Ben'in bütün karlı günlerden hoşlanmadığı veya Ava'nın her türlü havayı sevdiği söylenmez."
      },
      {
        "id": "e6-1-t14-09",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Read the breakfast order.\nDeniz: 'Two cheese sandwiches, please: one for me and one for Ela.'\nEla: 'Wait! No cheese in mine. Can I have an egg in it instead?'\nWaiter: 'Of course. Anything to drink?'\nDeniz: 'Tea for me.'\nEla: 'The same for me, please.'\n\nWhat is the FINAL order?",
        "options": [
          "Two egg sandwiches and two teas.",
          "Two cheese sandwiches and one tea.",
          "One cheese sandwich, one egg sandwich and two teas.",
          "One cheese sandwich, one egg sandwich and one tea."
        ],
        "correct": 2,
        "explanation": "İlk sipariş iki peynirli sandviçtir; Ela yalnız kendi sandviçindeki peyniri yumurtayla değiştirir. Deniz'in sandviçi peynirli kalır. Ela'nın the same ifadesi hemen önceki çay isteğine gönderme yapar; ikisine de çay gelir. Son sipariş C'dir."
      },
      {
        "id": "e6-1-t14-10",
        "subject": "ingilizce",
        "term": 1,
        "prompt": "Put the parts of the conversation in a meaningful order.\nI. Maya: 'At half past four.'\nII. Leo: 'Do you have a music lesson on Tuesday?'\nIII. Leo: 'And what time does it start?'\nIV. Maya: 'No. Tuesday is my football day.'\nV. Maya: 'On Thursday, after school.'\nVI. Leo: 'Then when is your music lesson?'",
        "options": [
          "II – IV – III – V – VI – I",
          "VI – IV – II – V – III – I",
          "II – V – VI – IV – III – I",
          "II – IV – VI – V – III – I"
        ],
        "correct": 3,
        "explanation": "Salı günü müzik dersi olup olmadığını soran II, No ile başlayan IV ile yanıtlanır. VI bu kez müzik dersinin ne zaman olduğunu sorar; V perşembe gününü söyler. III başlangıç saatini ister; I saat 16.30'u verir. Doğru sıra II–IV–VI–V–III–I'dır."
      }
    ]
  },
  "term2": {}
};

