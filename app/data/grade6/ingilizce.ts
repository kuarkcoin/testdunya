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
]
  },
  "term2": {}
};
