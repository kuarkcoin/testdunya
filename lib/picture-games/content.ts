export type PictureId =
  | 'fox' | 'rabbit' | 'cat' | 'owl' | 'fish' | 'turtle'
  | 'apple' | 'pear' | 'strawberry' | 'carrot' | 'tree' | 'flower'
  | 'sun' | 'moon' | 'star' | 'cloud' | 'car' | 'boat' | 'rocket' | 'ball';

export type Level = 1 | 2 | 3;
export type GameMode = 'pattern' | 'detective' | 'memory';

export const PICTURES: Record<PictureId, { label: string; category: string }> = {
  fox: { label: 'Tilki', category: 'Hayvan' },
  rabbit: { label: 'Tavşan', category: 'Hayvan' },
  cat: { label: 'Kedi', category: 'Hayvan' },
  owl: { label: 'Baykuş', category: 'Hayvan' },
  fish: { label: 'Balık', category: 'Hayvan' },
  turtle: { label: 'Kaplumbağa', category: 'Hayvan' },
  apple: { label: 'Elma', category: 'Meyve' },
  pear: { label: 'Armut', category: 'Meyve' },
  strawberry: { label: 'Çilek', category: 'Meyve' },
  carrot: { label: 'Havuç', category: 'Sebze' },
  tree: { label: 'Ağaç', category: 'Bitki' },
  flower: { label: 'Çiçek', category: 'Bitki' },
  sun: { label: 'Güneş', category: 'Gökyüzü' },
  moon: { label: 'Ay', category: 'Gökyüzü' },
  star: { label: 'Yıldız', category: 'Gökyüzü' },
  cloud: { label: 'Bulut', category: 'Gökyüzü' },
  car: { label: 'Araba', category: 'Taşıt' },
  boat: { label: 'Tekne', category: 'Taşıt' },
  rocket: { label: 'Roket', category: 'Taşıt' },
  ball: { label: 'Top', category: 'Oyuncak' },
};

export const LEVELS: { id: Level; label: string }[] = [
  { id: 1, label: 'İlk adım' },
  { id: 2, label: 'Biraz düşün' },
  { id: 3, label: 'Yeni meydan okuma' },
];

export const MODES: { id: GameMode; title: string; description: string; instruction: string }[] = [
  {
    id: 'pattern', title: 'Örüntü Treni',
    description: 'Resimlerin sırasını keşfet, eksik vagonu tamamla.',
    instruction: 'Resimlere soldan sağa bak. Tekrar eden sırayı bul. Soru işaretinin yerine gelecek resmi seç.',
  },
  {
    id: 'detective', title: 'Resim Dedektifi',
    description: 'İpucunu dinle, doğru resmi bul.',
    instruction: 'Soruyu oku ya da dinle. İpucuna uyan resmi seç. Yardım istersen ipucu düğmesine dokun.',
  },
  {
    id: 'memory', title: 'Hafıza Kartları',
    description: 'Kartları çevir, aynı resimlerin yerini hatırla.',
    instruction: 'İki kart aç. Resimler aynıysa eşini buldun. Farklıysa yerlerini hatırla ve yeniden dene. Bütün çiftleri bul.',
  },
];

export type PicturePuzzle = {
  id: string;
  mode: 'pattern' | 'detective';
  level: Level;
  prompt: string;
  sequence: PictureId[];
  choices: PictureId[];
  answer: PictureId;
  hint: string;
  explanation: string;
};

function pattern(
  level: Level, number: number, unit: PictureId[], length: number,
  choices: PictureId[], hint: string,
): PicturePuzzle {
  const answer = unit[length % unit.length];
  const rule = unit.map((picture) => PICTURES[picture].label.toLocaleLowerCase('tr-TR')).join(', ');
  return {
    id: `pattern-${level}-${number}`, mode: 'pattern', level,
    prompt: 'Sırada hangi resim var?',
    sequence: Array.from({ length }, (_, index) => unit[index % unit.length]),
    choices, answer, hint,
    explanation: `Sıra şöyle tekrar ediyor: ${rule}. Şimdi ${PICTURES[answer].label.toLocaleLowerCase('tr-TR')} gelmeli.`,
  };
}

function detective(
  level: Level, number: number, prompt: string, choices: PictureId[],
  answer: PictureId, hint: string, explanation: string,
): PicturePuzzle {
  return { id: `detective-${level}-${number}`, mode: 'detective', level, prompt, sequence: [], choices, answer, hint, explanation };
}

/** Short, untimed activities. Each clue has one answer among its displayed choices. */
export const PUZZLES: PicturePuzzle[] = [
  pattern(1, 1, ['sun', 'moon'], 6, ['star', 'sun', 'cloud'], 'Güneş ve Ay sırayla geliyor.'),
  pattern(1, 2, ['rabbit', 'fox'], 5, ['cat', 'rabbit', 'fox'], 'Tavşandan sonra tilki geliyor. Son resme bak.'),
  pattern(1, 3, ['apple', 'pear'], 6, ['pear', 'strawberry', 'apple'], 'Bir elma, bir armut. Sonra aynı sıra yeniden başlıyor.'),
  pattern(1, 4, ['car', 'boat'], 5, ['boat', 'rocket', 'car'], 'Araba ve tekne sırayla geliyor.'),
  pattern(1, 5, ['tree', 'flower'], 6, ['carrot', 'tree', 'flower'], 'Ağaçtan sonra çiçek, çiçekten sonra ağaç geliyor.'),
  pattern(1, 6, ['fish', 'turtle'], 5, ['owl', 'fish', 'turtle'], 'Bir balık, bir kaplumbağa. Bu ikili tekrar ediyor.'),

  pattern(2, 1, ['apple', 'pear', 'strawberry'], 6, ['strawberry', 'apple', 'pear', 'carrot'], 'Resimleri üçerli düşün: elma, armut, çilek.'),
  pattern(2, 2, ['cat', 'cat', 'rabbit'], 7, ['fox', 'rabbit', 'owl', 'cat'], 'İki kedi ve bir tavşan tekrar ediyor. Son kedi, yeni üçlünün ilk resmi.'),
  pattern(2, 3, ['sun', 'moon', 'moon'], 8, ['moon', 'star', 'sun', 'cloud'], 'Bir Güneşten sonra iki Ay geliyor. Son Güneşten sonraki Ayları say.'),
  pattern(2, 4, ['car', 'boat', 'rocket'], 7, ['car', 'ball', 'boat', 'rocket'], 'Üçlü sıra araba, tekne, roket. Sonra yeniden araba geliyor.'),
  pattern(2, 5, ['flower', 'flower', 'tree'], 6, ['tree', 'carrot', 'flower', 'apple'], 'İki çiçek ve bir ağaç, iki çiçek ve bir ağaç.'),
  pattern(2, 6, ['fish', 'turtle', 'turtle'], 7, ['owl', 'fish', 'rabbit', 'turtle'], 'Her balıktan sonra iki kaplumbağa geliyor.'),

  pattern(3, 1, ['sun', 'cloud', 'moon', 'star'], 8, ['star', 'moon', 'sun', 'cloud'], 'Dört resimlik grubu bul: Güneş, bulut, Ay, yıldız.'),
  pattern(3, 2, ['fox', 'rabbit', 'fox', 'owl'], 9, ['rabbit', 'owl', 'fox', 'cat'], 'Tilki, tavşan, tilki, baykuş. Son tilki yeni grubun başlangıcı.'),
  pattern(3, 3, ['apple', 'apple', 'pear', 'strawberry'], 10, ['apple', 'strawberry', 'carrot', 'pear'], 'İki elma, bir armut ve bir çilek tekrar ediyor. Sondaki iki elmadan sonra ne gelir?'),
  pattern(3, 4, ['car', 'boat', 'boat', 'rocket'], 11, ['boat', 'rocket', 'car', 'ball'], 'Bir araba, iki tekne ve bir roket. Sondaki iki tekneye dikkat et.'),
  pattern(3, 5, ['tree', 'flower', 'carrot', 'carrot'], 8, ['flower', 'carrot', 'tree', 'pear'], 'Ağaç, çiçek, havuç, havuç. Bu dört resim birlikte tekrar ediyor.'),
  pattern(3, 6, ['fish', 'turtle', 'owl', 'fish'], 9, ['fish', 'owl', 'cat', 'turtle'], 'Balık, kaplumbağa, baykuş, balık. Gruplar birleşince yan yana iki balık oluyor.'),

  detective(1, 1, 'Hangisi bir hayvan?', ['apple', 'cat', 'car'], 'cat',
    'Miyavlayan dostumuzu bul.', 'Kedi bir hayvandır. Elma bir meyve, araba bir taşıttır.'),
  detective(1, 2, 'Hangisi bir meyve?', ['boat', 'rabbit', 'pear'], 'pear',
    'Bir ağacın dalında yetişebilir ve yenir.', 'Armut bir meyvedir. Tekne ve tavşan meyve değildir.'),
  detective(1, 3, 'Hangisi bir taşıt?', ['car', 'flower', 'fish'], 'car',
    'İnsanları bir yerden başka bir yere götürür. Tekerlekleri vardır.', 'Araba bir taşıttır. Yolda tekerlekleriyle ilerler.'),
  detective(1, 4, 'Hangisi bir oyuncak?', ['tree', 'ball', 'owl'], 'ball',
    'Onu atabilir, tutabilir ve yuvarlayabilirsin.', 'Topla oyun oynarız. Ağaç bir bitki, baykuş bir hayvandır.'),
  detective(1, 5, 'Hangisi bir sebze?', ['carrot', 'moon', 'fox'], 'carrot',
    'Tavşan hikâyelerinde de karşına çıkar. Turuncu kökü yenir.', 'Havuç bir sebzedir. Ay ve tilki sebze değildir.'),
  detective(1, 6, 'Hangisi gökyüzünde görülür?', ['turtle', 'strawberry', 'cloud'], 'cloud',
    'Gökyüzünde dolaşır. Bazıları yağmur getirir.', 'Bulut gökyüzünde görülür. Kaplumbağa ve çilek bulut değildir.'),

  detective(2, 1, 'Hangisi hayvan değil?', ['fox', 'rabbit', 'flower', 'cat'], 'flower',
    'Üç resim hayvan. Toprakta büyüyen bitkiyi bul.', 'Çiçek bir bitkidir. Tilki, tavşan ve kedi hayvandır.'),
  detective(2, 2, 'Hangisi meyve değil?', ['apple', 'pear', 'carrot', 'strawberry'], 'carrot',
    'Üç meyveye bir sebze karışmış.', 'Havuç bir sebzedir. Elma, armut ve çileği meyve olarak yeriz.'),
  detective(2, 3, 'Hangisi taşıt değil?', ['car', 'boat', 'ball', 'rocket'], 'ball',
    'Üçü yolculukta kullanılır. Biriyle oyun oynarız.', 'Top bir oyuncaktır. Araba, tekne ve roket taşıttır.'),
  detective(2, 4, 'Hangi hayvanın yüzgeçleri vardır?', ['rabbit', 'fish', 'cat', 'owl'], 'fish',
    'Suda yüzerken yüzgeçlerini kullanır.', 'Balığın yüzgeçleri vardır. Bu resimlerdeki diğer hayvanların yüzgeçleri yoktur.'),
  detective(2, 5, 'Hangi hayvanın sırtında sert bir kabuk vardır?', ['fox', 'owl', 'turtle', 'rabbit'], 'turtle',
    'Sırtında koruyucu bir kabuk taşır.', 'Kaplumbağanın sert kabuğu bedenini korur.'),
  detective(2, 6, 'Hangi taşıt suyun üzerinde gider?', ['rocket', 'car', 'boat', 'ball'], 'boat',
    'Denizde ya da gölde yol alabilir.', 'Tekne suyun üzerinde gider. Araba yolda, roket gökyüzüne doğru ilerler.'),

  detective(3, 1, 'Hem hayvan olan hem de kanatları bulunan hangisi?', ['owl', 'rocket', 'cat', 'car'], 'owl',
    'Uçabilen bir hayvanı arıyoruz. Taşıtları ele.', 'Baykuş kanatları olan bir hayvandır. Roket ve araba hayvan değildir; kedinin kanatları yoktur.'),
  detective(3, 2, 'Hem taşıt olan hem de tekerlekleriyle yolda ilerleyen hangisi?', ['boat', 'ball', 'car', 'rocket'], 'car',
    'Yuvarlanabilen her şey taşıt değildir. Yolda yolcu taşıyanı bul.', 'Araba tekerlekleriyle yolda ilerleyen bir taşıttır. Top bir oyuncaktır.'),
  detective(3, 3, 'Hem bitki olan hem de kalın bir gövdesi ve dalları bulunan hangisi?', ['flower', 'tree', 'carrot', 'rabbit'], 'tree',
    'Önce hayvanı ele. Sonra yüksek, dallı bitkiyi bul.', 'Ağacın kalın bir gövdesi ve dalları vardır. Çiçek ve havuç da bitkidir ama ağaç gövdesi taşımaz.'),
  detective(3, 4, 'Hem hayvan olan hem de çok uzun kulakları bulunan hangisi?', ['rabbit', 'fish', 'moon', 'turtle'], 'rabbit',
    'Resimlerdeki hayvanların kulaklarını karşılaştır.', 'Tavşanın uzun kulakları vardır. Ay hayvan değildir; balık ve kaplumbağanın tavşan gibi uzun kulakları yoktur.'),
  detective(3, 5, 'Hem gökyüzünde görülen hem de yağmur getirebilen hangisi?', ['star', 'sun', 'cloud', 'moon'], 'cloud',
    'Dördü de gökyüzünde görülür. Yağmur damlaları hangisinden düşer?', 'Yağmur bulutlardan düşer. Güneş, Ay ve yıldız yağmur bulutu değildir.'),
  detective(3, 6, 'Hem hayvan olan hem de yüzgeçleriyle suda yüzen hangisi?', ['boat', 'fish', 'turtle', 'rocket'], 'fish',
    'Suda gidenleri düşün. Taşıtları ele, sonra yüzgeçleri ara.', 'Balık yüzgeçleriyle suda yüzen bir hayvandır. Tekne taşıttır; bu kaplumbağanın ayakları vardır.'),
];

export const MEMORY_POOLS: Record<Level, PictureId[]> = {
  1: ['fox', 'apple', 'car'],
  2: ['rabbit', 'pear', 'boat', 'sun'],
  3: ['owl', 'turtle', 'strawberry', 'flower', 'rocket', 'moon'],
};
