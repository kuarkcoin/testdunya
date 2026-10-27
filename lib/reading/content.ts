/**
 * Original practice content for beginning readers.
 * Reading targets use only each group's cumulative letter set.
 * Adult instructions and comprehension questions can be read aloud with TTS.
 * A consonant's spoken letter name is not its phoneme; ğ is practised in words.
 */
export type ReadingWord = { text: string; syllables: string[]; emoji: string };
export type ReadingStory = {
  id: string;
  title: string;
  sentences: string[];
  question: string;
  choices: string[];
  answerIndex: number;
};
export type ReadingGroup = {
  id: string;
  title: string;
  letters: string[];
  syllables: string[];
  words: ReadingWord[];
  stories: ReadingStory[];
};
export type LetterDetail = {
  name: string;
  example: string;
  emoji: string;
  hint: string;
  isVowel: boolean;
};

export const READING_GROUPS: ReadingGroup[] = [
  {
    id: 'g1', title: 'E · L · A · K · İ · N',
    letters: ['e', 'l', 'a', 'k', 'i', 'n'],
    syllables: ['el', 'al', 'ek', 'en', 'le', 'la', 'ne', 'ni'],
    words: [
      { text: 'el', syllables: ['el'], emoji: '✋' },
      { text: 'kale', syllables: ['ka', 'le'], emoji: '🏰' },
      { text: 'lale', syllables: ['la', 'le'], emoji: '🌷' },
      { text: 'nane', syllables: ['na', 'ne'], emoji: '🌿' },
      { text: 'inek', syllables: ['i', 'nek'], emoji: '🐄' },
      { text: 'kek', syllables: ['kek'], emoji: '🍰' },
    ],
    stories: [
      {
        id: 'g1-ela-ali', title: 'Ela ile Ali',
        sentences: ['Ela, lale al.', 'Ali, nane al.'],
        question: 'Laleyi kim almalı?', choices: ['Ela', 'Ali', 'Anne'], answerIndex: 0,
      },
      {
        id: 'g1-el-ele', title: 'El ele',
        sentences: ['Ali ile Ela el ele.', 'Anne ile nine el ele.'],
        question: 'Ali kiminle el ele?', choices: ['Anne', 'Ela', 'Nine'], answerIndex: 1,
      },
    ],
  },
  {
    id: 'g2', title: 'O · M · U · T · Ü · Y',
    letters: ['o', 'm', 'u', 't', 'ü', 'y'],
    syllables: ['ol', 'ot', 'on', 'mu', 'tu', 'yü', 'ün', 'ya'],
    words: [
      { text: 'kalem', syllables: ['ka', 'lem'], emoji: '✏️' },
      { text: 'okul', syllables: ['o', 'kul'], emoji: '🏫' },
      { text: 'oyun', syllables: ['o', 'yun'], emoji: '🎲' },
      { text: 'kutu', syllables: ['ku', 'tu'], emoji: '📦' },
      { text: 'limon', syllables: ['li', 'mon'], emoji: '🍋' },
      { text: 'yün', syllables: ['yün'], emoji: '🧶' },
    ],
    stories: [
      {
        id: 'g2-kalem-kutu', title: 'Kalem ile kutu',
        sentences: ['Ali, kalemi al.', 'Kalemi kutuya koy.'],
        question: 'Ali kalemi nereye koymalı?', choices: ['okula', 'kutuya', 'koliye'], answerIndex: 1,
      },
      {
        id: 'g2-oyun', title: 'Oyun',
        sentences: ['Ela ile Ali yan yana.', 'Ali, Ela ile oyun oyna.'],
        question: 'Ali kiminle oyun oynayacak?', choices: ['Mete', 'Anne', 'Ela'], answerIndex: 2,
      },
    ],
  },
  {
    id: 'g3', title: 'Ö · R · I · D · S · B',
    letters: ['ö', 'r', 'ı', 'd', 's', 'b'],
    syllables: ['ör', 'ar', 'ır', 'ba', 'dı', 'sa', 'ra', 'bir'],
    words: [
      { text: 'ördek', syllables: ['ör', 'dek'], emoji: '🦆' },
      { text: 'sarı', syllables: ['sa', 'rı'], emoji: '🟨' },
      { text: 'balık', syllables: ['ba', 'lık'], emoji: '🐟' },
      { text: 'dede', syllables: ['de', 'de'], emoji: '👴' },
      { text: 'arı', syllables: ['a', 'rı'], emoji: '🐝' },
      { text: 'orman', syllables: ['or', 'man'], emoji: '🌲' },
    ],
    stories: [
      {
        id: 'g3-ordek', title: 'Sarı ördek',
        sentences: ['Ali bir ördek arar.', 'Sarı ördek derede.'],
        question: 'Ördek nerede?', choices: ['ormanda', 'okulda', 'derede'], answerIndex: 2,
      },
      {
        id: 'g3-ari', title: 'Ormanda',
        sentences: ['Bora ormanda bir arı buldu.', 'Arı bir dala kondu.'],
        question: 'Arı nereye kondu?', choices: ['dala', 'kutuya', 'okula'], answerIndex: 0,
      },
    ],
  },
  {
    id: 'g4', title: 'Z · Ç · G · Ş · C · P',
    letters: ['z', 'ç', 'g', 'ş', 'c', 'p'],
    syllables: ['az', 'aç', 'ça', 'ge', 'şe', 'ce', 'pa', 'zil'],
    words: [
      { text: 'çilek', syllables: ['çi', 'lek'], emoji: '🍓' },
      { text: 'gemi', syllables: ['ge', 'mi'], emoji: '🚢' },
      { text: 'şapka', syllables: ['şap', 'ka'], emoji: '🧢' },
      { text: 'gece', syllables: ['ge', 'ce'], emoji: '🌙' },
      { text: 'pencere', syllables: ['pen', 'ce', 're'], emoji: '🪟' },
      { text: 'deniz', syllables: ['de', 'niz'], emoji: '🌊' },
    ],
    stories: [
      {
        id: 'g4-gemi', title: 'Sarı gemi',
        sentences: ['Can küçük bir gemi çizer.', 'Gemiyi sarıya boyar.'],
        question: 'Can ne çizer?', choices: ['şapka', 'gemi', 'pencere'], answerIndex: 1,
      },
      {
        id: 'g4-cilek', title: 'Çilek sepeti',
        sentences: ['Zeynep sepete çilek koydu.', 'Çilekleri Ece ile paylaştı.'],
        question: 'Zeynep çilekleri kiminle paylaştı?', choices: ['Ece', 'Can', 'Bora'], answerIndex: 0,
      },
    ],
  },
  {
    id: 'g5', title: 'H · V · Ğ · F · J',
    letters: ['h', 'v', 'ğ', 'f', 'j'],
    syllables: ['ha', 'va', 'fa', 'ja', 'ağ', 'dağ', 'fil', 'jet'],
    words: [
      { text: 'havuç', syllables: ['ha', 'vuç'], emoji: '🥕' },
      { text: 'fil', syllables: ['fil'], emoji: '🐘' },
      { text: 'fener', syllables: ['fe', 'ner'], emoji: '🔦' },
      { text: 'yağmur', syllables: ['yağ', 'mur'], emoji: '🌧️' },
      { text: 'ağaç', syllables: ['a', 'ğaç'], emoji: '🌳' },
      { text: 'pijama', syllables: ['pi', 'ja', 'ma'], emoji: '🛌' },
    ],
    stories: [
      {
        id: 'g5-bahce', title: 'Bahçede',
        sentences: ['Yağmur dindi.', 'Ece bahçede havuç topladı.'],
        question: 'Ece ne topladı?', choices: ['çilek', 'limon', 'havuç'], answerIndex: 2,
      },
      {
        id: 'g5-kitap', title: 'Kitap zamanı',
        sentences: ['Ece pijamasını giydi.', 'Annesi ona kitap okudu.'],
        question: "Ece'ye kim kitap okudu?", choices: ['Bora', 'annesi', 'Can'], answerIndex: 1,
      },
    ],
  },
];

export const LETTER_DETAILS: Record<string, LetterDetail> = {
  e: { name: 'e', example: 'el', emoji: '✋', hint: 'Dudaklarını hafifçe aç. E sesini uzatarak dene.', isVowel: true },
  l: { name: 'le', example: 'lale', emoji: '🌷', hint: 'Dil ucunu üst dişlerinin arkasına değdir. Sesi bir yetişkinle birlikte dene.', isVowel: false },
  a: { name: 'a', example: 'anne', emoji: '👩', hint: 'Ağzını rahatça aç. A sesini uzatarak dene.', isVowel: true },
  k: { name: 'ke', example: 'kale', emoji: '🏰', hint: 'Örnek kelimenin başındaki sesi kısa çıkar. Bir yetişkinle birlikte dene.', isVowel: false },
  i: { name: 'i', example: 'inek', emoji: '🐄', hint: 'Dudaklarını hafifçe yana aç. İ sesini uzatarak dene.', isVowel: true },
  n: { name: 'ne', example: 'nane', emoji: '🌿', hint: 'Dil ucunu üst dişlerinin arkasına değdir. Sesi bir yetişkinle birlikte dene.', isVowel: false },
  o: { name: 'o', example: 'okul', emoji: '🏫', hint: 'Dudaklarını yuvarla. O sesini uzatarak dene.', isVowel: true },
  m: { name: 'me', example: 'mum', emoji: '🕯️', hint: 'Dudaklarını birleştir. Dudakların kapalıyken sesi mırıldanarak dene.', isVowel: false },
  u: { name: 'u', example: 'uyku', emoji: '😴', hint: 'Dudaklarını küçük bir halka yap. U sesini uzatarak dene.', isVowel: true },
  t: { name: 'te', example: 'tilki', emoji: '🦊', hint: 'Dil ucunu üst dişlerinin arkasından kısa bir hareketle ayır. Bir yetişkinle dene.', isVowel: false },
  ü: { name: 'ü', example: 'ütü', emoji: '🔤', hint: 'Dudaklarını yuvarla. Ü sesini bir yetişkinle birlikte dene.', isVowel: true },
  y: { name: 'ye', example: 'yün', emoji: '🧶', hint: 'Örnek kelimenin başındaki sesi bir yetişkinle birlikte dene.', isVowel: false },
  ö: { name: 'ö', example: 'ördek', emoji: '🦆', hint: 'Dudaklarını yuvarla. Ö sesini uzatarak dene.', isVowel: true },
  r: { name: 're', example: 'renk', emoji: '🎨', hint: 'Örnek kelimenin başındaki sesi birlikte dene. Acele etmene gerek yok.', isVowel: false },
  ı: { name: 'ı', example: 'ırmak', emoji: '🏞️', hint: 'Bu harfin noktasız olduğunu gör. Örnek kelimenin başındaki sesi dinle.', isVowel: true },
  d: { name: 'de', example: 'dede', emoji: '👴', hint: 'Dil ucunu üst dişlerinin arkasından kısa bir hareketle ayır. Bir yetişkinle dene.', isVowel: false },
  s: { name: 'se', example: 'simit', emoji: '🥯', hint: 'Ön dişlerini birbirine yaklaştır. Havayı yavaşça dışarı ver.', isVowel: false },
  b: { name: 'be', example: 'balık', emoji: '🐟', hint: 'Dudaklarını birleştirip kısa bir hareketle aç. Bir yetişkinle birlikte dene.', isVowel: false },
  z: { name: 'ze', example: 'zil', emoji: '🔔', hint: 'Dişlerini birbirine yaklaştır. Sesi bir yetişkinle birlikte uzatarak dene.', isVowel: false },
  ç: { name: 'çe', example: 'çilek', emoji: '🍓', hint: 'Örnek kelimenin başındaki sesi kısa çıkar. Bir yetişkinle tekrar et.', isVowel: false },
  g: { name: 'ge', example: 'gemi', emoji: '🚢', hint: 'Örnek kelimenin başındaki sesi kısa çıkar. Bir yetişkinle tekrar et.', isVowel: false },
  ş: { name: 'şe', example: 'şapka', emoji: '🧢', hint: 'Dudaklarını hafifçe öne uzat. Havayı yavaşça dışarı ver.', isVowel: false },
  c: { name: 'ce', example: 'cam', emoji: '🪟', hint: 'Örnek kelimenin başındaki sesi kısa çıkar. Bir yetişkinle birlikte dene.', isVowel: false },
  p: { name: 'pe', example: 'pencere', emoji: '🪟', hint: 'Dudaklarını birleştirip kısa bir nefesle aç. Bir yetişkinle birlikte dene.', isVowel: false },
  h: { name: 'he', example: 'havuç', emoji: '🥕', hint: 'Ağzından hafifçe nefes vererek sesi dene.', isVowel: false },
  v: { name: 've', example: 'vazo', emoji: '🏺', hint: 'Üst dişlerini alt dudağına hafifçe yaklaştır. Sesi bir yetişkinle birlikte dene.', isVowel: false },
  ğ: { name: 'yumuşak ge', example: 'dağ', emoji: '⛰️', hint: 'Bu harfi dağ kelimesinin içinde tanı. Tek başına ayrı bir ses gibi okutulmaz; kelimeye göre önceki ünlü uzayabilir.', isVowel: false },
  f: { name: 'fe', example: 'fil', emoji: '🐘', hint: 'Üst dişlerini alt dudağına hafifçe yaklaştır. Havayı yavaşça dışarı ver.', isVowel: false },
  j: { name: 'je', example: 'jet', emoji: '🛩️', hint: 'Örnek kelimenin başındaki sesi bir yetişkinle birlikte dene.', isVowel: false },
};
