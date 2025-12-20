import { SubjectData } from './types';

export const matematikData: SubjectData = {
  term1: {
    test1: [
      { id: "m5-1-01", subject: "matematik", term: 1, prompt: "847.302 sayısında milyonlar bölüğündeki rakamların toplamı kaçtır?", options: ["11", "15", "19", "21"], correct: 2, explanation: "Sayının milyonlar bölüğünde 8, 4 ve 7 rakamları bulunur. 8 + 4 + 7 = 19 eder." },
      { id: "m5-1-02", subject: "matematik", term: 1, prompt: "5² + 2³ işleminin sonucu kaçtır?", options: ["16", "25", "31", "33"], correct: 3, explanation: "5² = 25 ve 2³ = 8'dir. 25 + 8 = 33 sonucuna ulaşılır." },
      { id: "m5-1-03", subject: "matematik", term: 1, prompt: "Bir bölme işleminde bölen 15, bölüm 10 ve kalan 7 ise bölünen kaçtır?", options: ["150", "157", "165", "172"], correct: 1, explanation: "Bölünen = (Bölen x Bölüm) + Kalan -> (15 x 10) + 7 = 157." },
      { id: "m5-1-04", subject: "matematik", term: 1, prompt: "Aşağıdaki kesirlerden hangisi birim kesirdir?", options: ["2/5", "1/8", "5/5", "4/1"], correct: 1, explanation: "Payı 1 olan kesirlere birim kesir denir." },
      { id: "m5-1-05", subject: "matematik", term: 1, prompt: "Hangi sayı 54.000 sayısının 100'e bölünmüş halidir?", options: ["54", "540", "5400", "5.4"], correct: 1, explanation: "Bir sayıyı 100'e bölerken sağdan iki sıfır silinir. 54.000 -> 540." },
      { id: "m5-1-11", subject: "matematik", term: 1, prompt: "24 sayısının çarpanlarından biri hangisi değildir?", options: ["4", "6", "9", "12"], correct: 2, explanation: "24 sayısı 9'a tam bölünmez." },
      { id: "m5-1-16", subject: "matematik", term: 1, prompt: "Bir sinema salonunda 24 sıra ve her sırada 18 koltuk vardır. Bir film gösteriminde 35 koltuk boş kaldığına göre kaç izleyici vardır?", options: ["397", "432", "400", "467"], correct: 0, explanation: "Toplam koltuk: 24 x 18 = 432. İzleyici sayısı: 432 - 35 = 397." },
      { id: "m5-1-18", subject: "matematik", term: 1, prompt: "72 sayısının 2/3'ü kaçtır?", options: ["24", "48", "36", "54"], correct: 1, explanation: "72'yi 3'e böleriz (24) ve 2 ile çarparız: 24 x 2 = 48." },
      { id: "m5-1-21", subject: "matematik", term: 1, prompt: "Hangi sayının 4 katının 10 eksiği 30'dur?", options: ["5", "10", "15", "20"], correct: 1, explanation: "Ters işlem yapılır: 30 + 10 = 40. 40 / 4 = 10." },
      { id: "m5-zn-11", subject: "matematik", term: 1, prompt: "Bir fabrikada üretilen 45.000 kalemin 2/5'i kırmızı, kalanı mavidir. Mavi kalem sayısı kaçtır?", options: ["18.000", "22.500", "27.000", "30.000"], correct: 2, explanation: "45.000 / 5 = 9.000. Kırmızı: 9.000 x 2 = 18.000. Mavi: 45.000 - 18.000 = 27.000." },
      { id: "m5-zn-13", subject: "matematik", term: 1, prompt: "Bir bölme işleminde kalan 12 ise, bölen aşağıdakilerden hangisi olamaz?", options: ["13", "15", "11", "20"], correct: 2, explanation: "Bölen her zaman kalandan büyük olmalıdır. 11, 12'den küçüktür." },
      { id: "m5-zn-15", subject: "matematik", term: 1, prompt: "3³ - 2⁴ işleminin sonucu kaçtır?", options: ["11", "9", "5", "1"], correct: 0, explanation: "3³ = 27, 2⁴ = 16. 27 - 16 = 11." },
      { id: "m5-zn-17", subject: "matematik", term: 1, prompt: "987.654.321 sayısında on milyonlar basamağındaki rakam kaçtır?", options: ["9", "8", "7", "6"], correct: 1, explanation: "On milyonlar basamağı 8'dir." },
      { id: "m5-zn-20", subject: "matematik", term: 1, prompt: "Paydası 12 olan birim kesir aşağıdakilerden hangisidir?", options: ["12/1", "1/12", "12/12", "6/12"], correct: 1, explanation: "Birim kesirlerin payı her zaman 1'dir." },
      { id: "m5-hard-nv-01", subject: "matematik", term: 1, prompt: "Bir bölme işleminde bölen 14, bölüm 25'tir. Bu bölme işleminde bölünen sayının alabileceği 'en büyük' değer kaçtır?", options: ["350", "363", "364", "365"], correct: 1, explanation: "En büyük kalan 13'tür. (14 x 25) + 13 = 363." },
      { id: "m5-hard-nv-02", subject: "matematik", term: 1, prompt: "3 katının 15 fazlası 60 olan sayının yarısı kaçtır?", options: ["7,5", "15", "22,5", "45"], correct: 0, explanation: "60-15=45, 45/3=15. Yarısı 7,5." },
      { id: "m5-adv-02", subject: "matematik", term: 1, prompt: "Bir sayı örüntüsü 4'ten başlayarak her adımda bir önceki sayının 2 katının 3 eksiği şeklinde ilerliyor. Bu örüntünün 4. terimi kaçtır?", options: ["5", "7", "11", "19"], correct: 2, explanation: "4 -> 5 -> 7 -> 11." },
      { id: "m5-adv-05", subject: "matematik", term: 1, prompt: "$A \\times 100 = 4500$ ve $B \\div 10 = 45$ ise $A + B$ işleminin sonucu kaçtır?", options: ["90", "450", "495", "500"], correct: 2, explanation: "A=45, B=450. Toplam 495." }
    ],
    test2: []
  },
  term2: {
    test1: [
      { id: "m5-2-06", subject: "matematik", term: 2, prompt: "0,45 ondalık gösteriminin okunuşu hangisidir?", options: ["Sıfır tam onda beş", "Sıfır tam yüzde kırk beş", "Sıfır tam binde kırk beş", "Kırk beş tam sıfır"], correct: 1, explanation: "Virgülden sonra iki basamak olduğu için 'yüzde' diye okunur." },
      { id: "m5-2-07", subject: "matematik", term: 2, prompt: "%35 ifadesinin ondalık gösterimi aşağıdakilerden hangisidir?", options: ["0,035", "0,35", "3,5", "35,0"], correct: 1, explanation: "%35 ifadesi 35/100 demektir, bu da 0,35 olarak yazılır." },
      { id: "m5-2-08", subject: "matematik", term: 2, prompt: "Bir dik açının ölçüsü kaç derecedir?", options: ["45", "90", "180", "360"], correct: 1, explanation: "Dik açılar tam olarak 90 derecedir." },
      { id: "m5-2-09", subject: "matematik", term: 2, prompt: "Aşağıdaki üçgenlerden hangisi açılarına göre bir çeşit değildir?", options: ["Dar açılı", "Dik açılı", "Eşkenar", "Geniş açılı"], correct: 2, explanation: "Eşkenar, kenarlarına göre bir üçgen çeşididir." },
      { id: "m5-2-10", subject: "matematik", term: 2, prompt: "Yarıçapı 5 cm olan bir çemberin çapı kaç cm'dir?", options: ["2,5", "5", "10", "15"], correct: 2, explanation: "Çap, yarıçapın iki katıdır. 5 x 2 = 10 cm." },
      { id: "m5-2-12", subject: "matematik", term: 2, prompt: "Hangi dörtgenin tüm kenarları birbirine eşittir?", options: ["Dikdörtgen", "Yamuk", "Kare", "Paralelkenar"], correct: 2, explanation: "Karenin dört kenarı da her zaman birbirine eşittir." },
      { id: "m5-2-13", subject: "matematik", term: 2, prompt: "1 litre kaç mililitredir (ml)?", options: ["10", "100", "1000", "10000"], correct: 2, explanation: "Sıvı ölçü birimlerinde 1 Litre = 1000 Mililitre'dir." },
      { id: "m5-2-17", subject: "matematik", term: 2, prompt: "Bir koşucu 5 km'lik yolun önce 1250 metresini, sonra 2100 metresini koşmuştur. Geriye kaç metre yolu kalmıştır?", options: ["1650", "3350", "1350", "1750"], correct: 0, explanation: "5000 - (1250 + 2100) = 1650 m." },
      { id: "m5-2-19", subject: "matematik", term: 2, prompt: "0,6 > A > 0,45 sıralamasında A yerine aşağıdakilerden hangisi gelebilir?", options: ["0,39", "0,42", "0,51", "0,65"], correct: 2, explanation: "0,60 ile 0,45 arasındadır." },
      { id: "m5-2-20", subject: "matematik", term: 2, prompt: "Bir dikdörtgenin uzun kenarı 12 cm, kısa kenarı uzun kenarın yarısıdır. Bu dikdörtgenin çevresi kaç cm'dir?", options: ["18", "24", "36", "48"], correct: 2, explanation: "Çevre = 2 x (12 + 6) = 36 cm." },
      { id: "m5-2-22", subject: "matematik", term: 2, prompt: "Bir geniş açının ölçüsü aşağıdakilerden hangisi olamaz?", options: ["91", "120", "179", "185"], correct: 3, explanation: "Geniş açılar 90 ile 180 arasındadır." },
      { id: "m5-2-23", subject: "matematik", term: 2, prompt: "Ali parasının %40'ı ile kitap almıştır. Geriye parasının kaçta kaçı kalmıştır?", options: ["2/5", "3/5", "1/4", "3/4"], correct: 1, explanation: "%60 kalmıştır, o da 3/5'tir." },
      { id: "m5-zn-12", subject: "matematik", term: 2, prompt: "Bir kenar uzunluğu 8 cm olan bir karenin alanı, kısa kenarı 4 cm olan bir dikdörtgenin alanına eşittir. Dikdörtgenin uzun kenarı kaç cm'dir?", options: ["12", "16", "24", "32"], correct: 1, explanation: "64 / 4 = 16 cm." },
      { id: "m5-zn-14", subject: "matematik", term: 2, prompt: "360 sayısının %25'i kaçtır?", options: ["80", "90", "100", "120"], correct: 1, explanation: "360 / 4 = 90." },
      { id: "m5-zn-16", subject: "matematik", term: 2, prompt: "Hangi ondalık gösterim 0,7'den daha büyüktür?", options: ["0,69", "0,08", "0,71", "0,70"], correct: 2, explanation: "0,71 > 0,70." },
      { id: "m5-zn-18", subject: "matematik", term: 2, prompt: "Bir geniş açının ölçüsü bir dik açının ölçüsünden 45 derece fazladır. Bu açı kaç derecedir?", options: ["125", "135", "145", "155"], correct: 1, explanation: "90 + 45 = 135." },
      { id: "m5-zn-19", subject: "matematik", term: 2, prompt: "Günde 250 ml süt içen bir çocuk, 12 günde toplam kaç litre süt içer?", options: ["2", "3", "4", "5"], correct: 1, explanation: "250 x 12 = 3000 ml = 3 L." },
      { id: "m5-hard-nv-03", subject: "matematik", term: 2, prompt: "Bir sınıftaki öğrencilerin 3/8'i erkektir. Sınıfta 15 kız öğrenci olduğuna göre, sınıf mevcudu kaçtır?", options: ["20", "24", "30", "32"], correct: 1, explanation: "Kızlar 5/8'dir. 15/5=3. 8x3=24." },
      { id: "m5-hard-nv-04", subject: "matematik", term: 2, prompt: "Ali parasının 0,4'ü ile kitap, %25'i ile defter almıştır. Ali'nin parasının yüzde kaçı kalmıştır?", options: ["35", "40", "45", "50"], correct: 0, explanation: "100 - (40+25) = 35." },
      { id: "m5-hard-nv-05", subject: "matematik", term: 2, prompt: "Bir kenarı 10 cm olan bir karenin çevresi, kısa kenarı 8 cm olan bir dikdörtgenin çevresine eşittir. Dikdörtgenin alanı kaç cm²'dir?", options: ["80", "96", "100", "120"], correct: 1, explanation: "Çevre 40. Uzun kenar 12. Alan 12x8=96." },
      { id: "m5-adv-01", subject: "matematik", term: 2, prompt: "Çevresi 60 cm olan bir dikdörtgenin kenar uzunlukları birer tam sayıdır. Bu dikdörtgenin alanı 'en fazla' kaç $cm^2$ olabilir?", options: ["125", "200", "221", "225"], correct: 3, explanation: "Kenarlar birbirine en yakın seçilmelidir. 15x15=225." },
      { id: "m5-adv-03", subject: "matematik", term: 2, prompt: "Bir su deposunun $3/7$'si doludur. Depoya 20 litre daha su eklendiğinde deponun yarısı doluyor. Deponun tamamı kaç litre su alır?", options: ["140", "280", "300", "350"], correct: 1, explanation: "1/2 - 3/7 = 1/14. 20 x 14 = 280 L." },
      { id: "m5-adv-04", subject: "matematik", term: 2, prompt: "0, 2, 5, 8 rakamlarının tamamı kullanılarak yazılabilecek, tam kısmı bir basamaklı olan 'en büyük' ondalık gösterim ile 'en küçük' ondalık gösterim arasındaki fark kaçtır?", options: ["6,462", "6,172", "6,472", "8,320"], correct: 0, explanation: "8,520 - 2,058 = 6,462." }
    ],
    test2: []
  }
};
 