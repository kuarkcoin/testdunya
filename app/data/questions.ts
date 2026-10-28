/**
 * Original visual-reasoning practice items for adults (18+).
 * The order is an editorial easy-to-more-complex progression, NOT calibrated difficulty.
 * No norm group, IQ conversion, speed bonus, diagnostic interpretation or licensed item bank.
 * Attempt persistence fingerprints this complete bank; content edits invalidate old saved attempts.
 */
export type Category = 'matrix' | 'sequence' | 'rotation' | 'spatial';
export const categories: Record<Category, string> = {
  matrix: 'Matris ve şekil ilişkileri', sequence: 'Görsel örüntüler',
  rotation: 'Zihinsel döndürme', spatial: 'Uzamsal ilişkiler',
};
export type VisualElement =
  | { kind: 'circle'; cx: number; cy: number; r: number; fill?: boolean; strokeWidth?: number }
  | { kind: 'rect'; x: number; y: number; width: number; height: number; fill?: boolean; strokeWidth?: number }
  | { kind: 'path'; d: string; fill?: boolean; strokeWidth?: number }
  | { kind: 'line'; x1: number; y1: number; x2: number; y2: number; dashed?: boolean; strokeWidth?: number };
export type VisualCell = { elements: VisualElement[]; description: string };
export type VisualFigureData = { columns: number; cells: (VisualCell | null)[]; sequence?: boolean; label: string };
export type VisualQuestion = {
  id: string; category: Category; prompt: string; figure: VisualFigureData;
  options: { figure: VisualFigureData; label: string }[]; correct: number; explanation: string;
};

type Shape = 'circle' | 'square' | 'triangle';
const names: Record<Shape, string> = { circle: 'daire', square: 'kare', triangle: 'üçgen' };
const dirs = ['yukarı', 'sağa', 'aşağı', 'sola'];
const sorted = (xs: number[]) => [...new Set(xs)].sort((a, b) => a - b);
const rotate = (xs: number[], turns = 1, n = 3): number[] => {
  let out = xs;
  for (let t = 0; t < ((turns % 4) + 4) % 4; t++) out = out.map(i => (i % n) * n + n - 1 - Math.floor(i / n));
  return sorted(out);
};
const mirror = (xs: number[], n = 3) => sorted(xs.map(i => Math.floor(i / n) * n + n - 1 - i % n));
const union = (a: number[], b: number[]) => sorted([...a, ...b]);
const intersection = (a: number[], b: number[]) => sorted(a.filter(i => b.includes(i)));
const xor = (a: number[], b: number[]) => sorted([...a.filter(i => !b.includes(i)), ...b.filter(i => !a.includes(i))]);
const location = (i: number, n: number) => `${Math.floor(i / n) + 1}. satır ${i % n + 1}. sütun`;
const shapeElement = (shape: Shape, x: number, y: number, size: number, filled = false): VisualElement => {
  if (shape === 'circle') return { kind: 'circle', cx: x, cy: y, r: size / 2, fill: filled };
  if (shape === 'square') return { kind: 'rect', x: x - size / 2, y: y - size / 2, width: size, height: size, fill: filled };
  return { kind: 'path', d: `M ${x} ${y - size / 2} L ${x + size / 2} ${y + size / 2} L ${x - size / 2} ${y + size / 2} Z`, fill: filled };
};
const count = (n: number, shape: Shape = 'circle', filled = false): VisualCell => ({
  elements: Array.from({ length: n }, (_, i) => shapeElement(shape, 25 + i % 3 * 25, 25 + Math.floor(i / 3) * 25, 14, filled)),
  description: `${n} ${filled ? 'dolu' : 'içi boş'} ${names[shape]}; soldan sağa, üstten alta dizili`,
});
const single = (shape: Shape): VisualCell => ({ elements: [shapeElement(shape, 50, 50, 45)], description: `Ortada içi boş ${names[shape]}` });
const grid = (n = 3): VisualElement[] => Array.from({ length: n + 1 }, (_, i) => [
  { kind: 'line' as const, x1: 17 + i * 66 / n, y1: 17, x2: 17 + i * 66 / n, y2: 83, strokeWidth: 0.8 },
  { kind: 'line' as const, x1: 17, y1: 17 + i * 66 / n, x2: 83, y2: 17 + i * 66 / n, strokeWidth: 0.8 },
]).flat();
const tiles = (indices: number[], n = 3): VisualCell => ({
  elements: [...grid(n), ...sorted(indices).map(i => ({ kind: 'rect' as const, x: 17 + i % n * 66 / n + 1.6, y: 17 + Math.floor(i / n) * 66 / n + 1.6, width: 66 / n - 3.2, height: 66 / n - 3.2, fill: true, strokeWidth: 0.4 }))],
  description: `${n} × ${n} ızgara; dolu kareler: ${sorted(indices).map(i => location(i, n)).join('; ')}`,
});
const positions = (dot: number, square?: number, n = 3): VisualCell => {
  const pt = (i: number) => [17 + (i % n + 0.5) * 66 / n, 17 + (Math.floor(i / n) + 0.5) * 66 / n];
  const [cx, cy] = pt(dot);
  const elements: VisualElement[] = [...grid(n), { kind: 'circle', cx, cy, r: 5, fill: true }];
  if (square !== undefined) { const [x, y] = pt(square); elements.push(shapeElement('square', x, y, 11)); }
  return { elements, description: `${n} × ${n} ızgara; dolu nokta ${location(dot, n)}${square === undefined ? '' : `; içi boş kare ${location(square, n)}`}` };
};
const arrow = (direction: number, smallDots = 0, orbit?: number): VisualCell => {
  const vertices = [[0, -25], [15, -8], [6, -8], [6, 23], [-6, 23], [-6, -8], [-15, -8]];
  const angle = direction * Math.PI / 2;
  const points = vertices.map(([x, y]) => [50 + x * Math.cos(angle) - y * Math.sin(angle), 45 + x * Math.sin(angle) + y * Math.cos(angle)]);
  const elements: VisualElement[] = [{ kind: 'path', d: points.map(([x, y], i) => `${i ? 'L' : 'M'} ${x.toFixed(3)} ${y.toFixed(3)}`).join(' ') + ' Z', fill: true }];
  for (let i = 0; i < smallDots; i++) elements.push({ kind: 'circle', cx: 14 + i * 15, cy: 86, r: 4, fill: true });
  if (orbit !== undefined) { const p = [[15, 15], [85, 15], [85, 75], [15, 75]][orbit]; elements.push({ kind: 'circle', cx: p[0], cy: p[1], r: 5 }); }
  return { elements, description: `${dirs[direction % 4]} bakan ok${smallDots ? `; altta ${smallDots} dolu nokta` : ''}${orbit === undefined ? '' : `; ${['sol üst', 'sağ üst', 'sağ alt', 'sol alt'][orbit]} köşede içi boş daire`}` };
};
const fold = (indices: number[], both = false): VisualCell => ({
  ...tiles(indices, 4),
  elements: [...tiles(indices, 4).elements, { kind: 'line', x1: 50, y1: 8, x2: 50, y2: 92, dashed: true, strokeWidth: 2 }, ...(both ? [{ kind: 'line' as const, x1: 8, y1: 50, x2: 92, y2: 50, dashed: true, strokeWidth: 2 }] : [])],
  description: `${tiles(indices, 4).description}; ortada dikey${both ? ' ve yatay' : ''} kesik yansıma çizgisi`,
});
const perimeter = [0, 1, 2, 5, 8, 7, 6, 3];
const orbitPair = (black: number, ring: number): VisualCell => {
  const pt = (i: number) => [28 + i % 3 * 22, 28 + Math.floor(i / 3) * 22];
  const [bx, by] = pt(black); const [rx, ry] = pt(ring);
  return { elements: [...grid(), shapeElement('square', bx, by, 9, true), { kind: 'circle', cx: rx, cy: ry, r: 9 }], description: `3 × 3 ızgara; küçük dolu kare ${location(black, 3)}; içi boş büyük daire ${location(ring, 3)}${black === ring ? '; iki işaret aynı hücrede' : ''}` };
};
const figure = (cells: (VisualCell | null)[], columns: number, sequence = false): VisualFigureData => ({
  columns, cells, sequence,
  label: `${sequence ? 'Numaralı örüntü' : 'Şekil düzeni'}; ${columns} sütun. ${cells.map((c, i) => `${i + 1}. hücre: ${c?.description ?? 'soru işareti, eksik hücre'}`).join('. ')}`,
});
const option = (cell: VisualCell) => ({ figure: figure([cell], 1), label: cell.description });
const make = (n: number, category: Category, prompt: string, cells: (VisualCell | null)[], columns: number, answer: VisualCell, distractors: VisualCell[], explanation: string): VisualQuestion => {
  const correct = (n - 1) % 4;
  const opts = distractors.map(option); opts.splice(correct, 0, option(answer));
  return { id: `vr-${String(n).padStart(2, '0')}`, category, prompt, figure: figure(cells, columns, category === 'sequence' || [3, 4, 15, 16].includes(n)), options: opts, correct, explanation };
};
const seq = 'Numaralı hücreleri sırayla izleyin. Soru işaretinin yerine hangisi gelmeli?';
const matrix = 'Her satırda aynı ilişki geçerli. Soru işaretinin yerine hangi şekil gelmeli?';
const L = [0, 3, 6, 7];
const F = [1, 2, 3, 4, 7];

export const questions: VisualQuestion[] = [
  make(1, 'sequence', seq, [count(1), count(2), count(3), count(4), null], 3,
    count(5), [count(3), count(4), count(6)], 'Her adımda bir daire ekleniyor: 1, 2, 3, 4, 5. Eksik hücrede beş daire olmalı.'),
  make(2, 'matrix', 'Her satır ve sütunda üç farklı şekilden birer tane var. Eksik şekil hangisi?',
    [single('circle'), single('square'), single('triangle'), single('square'), single('triangle'), single('circle'), single('triangle'), single('circle'), null], 3,
    single('square'), [single('circle'), single('triangle'), count(2, 'square')], 'Son satırda ve son sütunda daire ile üçgen zaten var. Eksik olan tek kare; her hücrede yalnızca bir şekil bulunuyor.'),
  make(3, 'rotation', 'Ok her adımda aynı yönde çeyrek tur dönüyor. Son hücrede hangi ok olmalı?',
    [arrow(0), arrow(1), arrow(2), arrow(3), null], 3,
    arrow(0), [arrow(1), arrow(2), arrow(3)], 'Ok her adımda saat yönünde 90° dönüyor: yukarı, sağ, aşağı, sol; ardından yeniden yukarı.'),
  make(4, 'spatial', 'Nokta her adımda sağdaki komşu hücreye geçiyor; satırın sonundan sonra aynı satırın başına dönüyor. Eksik konum hangisi?',
    [positions(3), positions(4), positions(5), null], 2,
    positions(3), [positions(0), positions(4), positions(6)], 'Nokta orta satırda sağa ilerliyor. Orta sağ hücreden sonra aynı satırın en soluna, yani 2. satır 1. sütuna döner.'),
  make(5, 'sequence', seq, [count(1, 'circle'), count(2, 'square'), count(3, 'circle'), count(4, 'square'), null], 3,
    count(5, 'circle'), [count(5, 'square'), count(4, 'circle'), count(6, 'circle')], 'Şekil sayısı her adımda bir artıyor; daire ve kare sırayla değişiyor. Beşinci hücre beş daire içerir.'),
  make(6, 'matrix', matrix, [count(1), count(2), count(3), count(2), count(2), count(4), count(1), count(3), null], 3,
    count(4), [count(2), count(3), count(5)], 'Her satırda ilk iki hücrenin daire sayıları toplanıyor: 1 + 2 = 3 ve 2 + 2 = 4. Son satırda 1 + 3 = 4.'),
  make(7, 'rotation', 'Üst sırada soldaki şekle uygulanan döndürmeyi, alt sıradaki şekle de uygulayın. Eksik şekil hangisi?',
    [tiles(L), tiles(rotate(L)), tiles([0, 1, 4, 7]), null], 2,
    tiles(rotate([0, 1, 4, 7])), [tiles([0, 1, 4, 7]), tiles(rotate([0, 1, 4, 7], 2)), tiles(mirror([0, 1, 4, 7]))], 'Üstteki şekil saat yönünde 90° dönmüş. Alttaki şekle aynı dönüş uygulanınca dolu kareler 1. satır 3. sütun ile 2. satırın üç hücresinde olur.'),
  make(8, 'spatial', 'Üst sıradaki soldan sağa dönüşüm, altta da aynı. Eksik şekil hangisi?',
    [tiles(L), tiles(mirror(L)), tiles(F), null], 2,
    tiles(mirror(F)), [tiles(F), tiles(rotate(F)), tiles(rotate(F, 2))], 'Üstteki şekil dikey orta çizgiye göre aynalanmış; sol ve sağ yer değiştirirken üst ve alt korunmuş. Aynı yansıma alttaki şekle uygulanır.'),
  make(9, 'sequence', seq, [arrow(0, 1), arrow(1, 2), arrow(2, 3), arrow(3, 4), null], 3,
    arrow(0, 5), [arrow(1, 5), arrow(0, 4), arrow(2, 5)], 'İki özellik birlikte değişiyor: ok saat yönünde 90° dönüyor ve alttaki nokta sayısı bir artıyor. Sonuç, yukarı bakan ok ve beş noktadır.'),
  make(10, 'matrix', matrix,
    [tiles([0, 4]), tiles([2, 4]), tiles([0, 2, 4]), tiles([3, 5]), tiles([1, 5]), tiles([1, 3, 5]), tiles([0, 6]), tiles([4, 6]), null], 3,
    tiles([0, 4, 6]), [tiles([0, 4]), tiles([6]), tiles([0, 4, 6, 8])], 'Her satırda üçüncü şekil, ilk iki şeklin birleşimi. Bir konum ilk şekillerden en az birinde doluysa sonuçta dolu kalır; ortak kareler silinmez. Sonuç sol üst, orta ve sol alt karelerdir.'),
  make(11, 'rotation', 'Bu şekli, ızgaranın merkezi çevresinde saat yönünde 90° döndürün. Hangi seçenek elde edilir?', [tiles(F)], 1,
    tiles(rotate(F)), [tiles(mirror(F)), tiles(rotate(F, 2)), tiles(rotate(F, 3))], 'Saat yönünde çeyrek dönüşte her dolu kare (satır, sütun) konumundan (sütun, 4 − satır) konumuna gider. Dolu konumlar üst orta, orta sol, orta orta, orta sağ ve alt sağ olur.'),
  make(12, 'spatial', 'Her satırda iki işaret de soldaki hücreden sağdakine aynı biçimde taşınıyor. Son şekil hangisi?',
    [positions(0, 8), positions(3, 2), positions(1, 6), positions(4, 0), positions(2, 7), null], 2,
    positions(5, 1), [positions(5, 4), positions(8, 1), positions(2, 1)], 'Her iki işaret de aynı sütunda bir hücre aşağı iner; en alt satırdan sonra üst satıra döner. Son çiftte nokta üst sağdan orta sağa, kare alt ortadan üst ortaya geçer.'),
  make(13, 'sequence', seq, [count(1), count(4), count(2), count(5), count(3), count(6), null], 3,
    count(4), [count(3), count(7), count(5)], 'Tek numaralı hücrelerde 1, 2, 3, …; çift numaralı hücrelerde 4, 5, 6, … daire var. Yedinci hücre tek numaralı diziyi sürdürür ve dört daire içerir.'),
  make(14, 'matrix', matrix,
    [tiles([0, 4]), tiles([2, 4]), tiles([0, 2]), tiles([1, 3, 7]), tiles([3, 5]), tiles([1, 5, 7]), tiles([0, 2, 6]), tiles([2, 6, 8]), null], 3,
    tiles([0, 8]), [tiles([0, 2, 6, 8]), tiles([2, 6]), tiles([0, 6, 8])], 'Aynı konumda iki dolu kare üst üste gelince siliniyor; yalnızca bir şekle ait olan kareler kalıyor. Son satırda ortak sağ üst ve sol alt silinir; sol üst ile sağ alt kalır.'),
  make(15, 'rotation', 'Şekil her adımda saat yönünde dönüyor. Dönüş miktarı sırasıyla 90°, 180°, 270° ve 360°. Eksik son şekil hangisi?',
    [tiles(F), tiles(rotate(F)), tiles(rotate(F, 3)), tiles(rotate(F, 2)), null], 3,
    tiles(rotate(F, 2)), [tiles(F), tiles(rotate(F)), tiles(rotate(F, 3))], 'Başlangıca göre yönler sırasıyla 0°, 90°, 270° ve 180° olur. Son adımda 360° dönmek yönü değiştirmez; son şekil bir öncekiyle aynıdır.'),
  make(16, 'spatial', 'Nokta ile kare her adımda kendi satırlarında birer hücre hareket ediyor. Son şekil hangisi?',
    [positions(0, 15, 4), positions(1, 14, 4), positions(2, 13, 4), null], 2,
    positions(3, 12, 4), [positions(3, 15, 4), positions(0, 12, 4), positions(7, 8, 4)], 'Nokta üst satırda sağa, içi boş kare alt satırda sola ilerliyor. Son durumda nokta üst sağda, kare alt soldadır.'),
  make(17, 'sequence', seq, [count(1, 'triangle'), count(1, 'square'), count(2, 'triangle'), count(2, 'square'), count(3, 'triangle'), null], 3,
    count(3, 'square'), [count(4, 'square'), count(3, 'triangle'), count(2, 'square')], 'Bir miktar önce üçgenlerle, sonra aynı sayıda kareyle gösteriliyor. Sayı her iki hücrede bir artıyor: 1–1, 2–2, 3–3. Eksik hücre üç karedir.'),
  make(18, 'matrix', matrix,
    [count(1), count(3), count(3), count(2), count(2), count(4), count(2), count(3), null], 3,
    count(6), [count(3), count(5), count(7)], 'Üçüncü hücrenin daire sayısı, ilk iki hücredeki sayıların çarpımıdır: 1 × 3 = 3; 2 × 2 = 4; son satırda 2 × 3 = 6.'),
  make(19, 'rotation', 'Önce şekli dikey orta çizgiye göre aynalayın (sol–sağ). Sonra elde ettiğiniz şekli saat yönünde 90° döndürün. Sonuç hangisi?', [tiles(F)], 1,
    tiles(rotate(mirror(F))), [tiles(mirror(rotate(F))), tiles(rotate(F)), tiles(mirror(F))], 'İşlem sırası önemlidir: önce sol–sağ yansıma, ardından saat yönünde çeyrek dönüş. Dolu kareler üst sağ, orta sol, orta orta, orta sağ ve alt orta konumlarına gelir.'),
  make(20, 'spatial', 'Dolu kareleri dikey kesik çizginin öteki tarafına aynalayın. İlk kareler de yerinde kalacak. Tamamlanmış desen hangisi?', [fold([0, 5])], 1,
    tiles([0, 3, 5, 6], 4), [tiles([0, 2, 5, 7], 4), tiles([0, 3, 5, 10], 4), tiles([3, 6], 4)], 'Dikey yansımada 1. ve 4. sütun, 2. ve 3. sütun eşleşir; satır değişmez. Sol üstteki kareye sağ üst, 2. satır 2. sütundaki kareye 2. satır 3. sütun eklenir.'),
  make(21, 'sequence', 'Şekil türü, doluluk ve sayı örüntülerini birlikte izleyin. Eksik hücre hangisi?',
    [count(1, 'circle', false), count(2, 'square', true), count(3, 'triangle', false), count(1, 'circle', true), count(2, 'square', false), null], 3,
    count(3, 'triangle', true), [count(3, 'triangle', false), count(2, 'triangle', true), count(3, 'square', true)], 'Şekil ve sayı üçlü döngü oluşturur: bir daire, iki kare, üç üçgen. Doluluk ise her adımda boş–dolu olarak değişir. Altıncı hücre üç dolu üçgendir.'),
  make(22, 'matrix', 'Her sütunda şekil türü sabit; her satırda ve sütunda 1, 2, 3 sayıları birer kez kullanılıyor. Eksik hücre hangisi?',
    [count(1, 'circle'), count(2, 'square'), count(3, 'triangle'), count(2, 'circle'), count(3, 'square'), count(1, 'triangle'), count(3, 'circle'), count(1, 'square'), null], 3,
    count(2, 'triangle'), [count(1, 'triangle'), count(2, 'square'), count(3, 'triangle')], 'Son sütunun türü üçgendir. Son satırda 3 ile 1, son sütunda 3 ile 1 zaten var; eksik sayı 2. Bu yüzden iki üçgen gerekir.'),
  make(23, 'rotation', 'Hangi seçenek, verilen şeklin yalnızca döndürülmüş hâlidir? Aynalama yapılamaz.', [tiles(F)], 1,
    tiles(rotate(F, 2)), [tiles(mirror(F)), tiles(rotate(mirror(F))), tiles(rotate(mirror(F), 2))], 'Doğru şekil başlangıç şeklinin 180° döndürülmüş hâlidir. Diğer üç seçenek ayna görüntüsünün farklı dönüşleridir; yalnızca döndürerek başlangıç şekline getirilemezler.'),
  make(24, 'spatial', 'Deseni önce dikey, ardından yatay kesik çizgiye göre tamamlayın. Her adımda mevcut kareler de kalacak. Son desen hangisi?', [fold([0, 5], true)], 1,
    tiles([0, 3, 5, 6, 9, 10, 12, 15], 4), [tiles([0, 3, 5, 6], 4), tiles([0, 3, 5, 6, 8, 11, 13, 14], 4), tiles([0, 3, 5, 6, 9, 10, 12, 14], 4)], 'İlk yansıma üst yarıyı sol–sağ simetrik yapar. İkinci yansıma bu dört kareyi alt yarıya kopyalar. Dört köşe ile ortadaki 2 × 2 kare bloğu dolu olur; toplam sekiz kare vardır.'),
  make(25, 'sequence', 'Saat yönündeki dönüşler, iki adımlık bir döngüyle tekrarlanıyor. Numaralı dizinin son şekli hangisi?',
    [tiles(F), tiles(rotate(F)), tiles(rotate(F, 3)), tiles(F), tiles(rotate(F, 2)), null], 3,
    tiles(rotate(F, 3)), [tiles(F), tiles(rotate(F)), tiles(rotate(F, 2))], 'Dönüşler sırayla 90°, 180°, 90°, 180°, 90° olarak ilerliyor. Başlangıca göre yönler 0°, 90°, 270°, 0°, 180°, 270°; son şekil başlangıcın 270° saat yönünde dönüşüdür.'),
  make(26, 'matrix', 'Her satırda önce ilk iki şekilde ortak olan dolu kareler alınıyor; sonra bu desen aynı yönde çeyrek tur döndürülüyor. Sonuç hangisi?',
    [tiles([0, 1, 4]), tiles([1, 2, 4]), tiles(rotate(intersection([0, 1, 4], [1, 2, 4]))), tiles([0, 3, 7]), tiles([3, 6, 7]), tiles(rotate(intersection([0, 3, 7], [3, 6, 7]))), tiles([1, 4, 6, 8]), tiles([0, 4, 6, 7]), null], 3,
    tiles([0, 4]), [tiles([4, 6]), tiles([4, 8]), tiles([2, 4])], 'İlk iki satırdaki ortak kareler saat yönünde 90° döndürülmüş. Son satırda ortak olanlar orta ve sol alt karelerdir. Çeyrek dönüşten sonra orta ile sol üst kalır.'),
  make(27, 'rotation', 'Her satırda ok ile köşedeki daireye ayrı dönüşler uygulanıyor. İlk iki satırdaki kuralı son satıra uygulayın.',
    [arrow(0, 0, 0), arrow(1, 0, 3), arrow(1, 0, 1), arrow(2, 0, 0), arrow(2, 0, 2), null], 2,
    arrow(3, 0, 1), [arrow(3, 0, 3), arrow(1, 0, 1), arrow(2, 0, 1)], 'Ok saat yönünde 90°, daire ise köşeler arasında saat yönünün tersine 90° hareket ediyor. Aşağı bakan ok sola döner; sağ alttaki daire sağ üste gider.'),
  make(28, 'spatial', 'Soldaki dolu deseni bir kare sağa ve bir kare aşağı öteleyin. Sonra sağdaki desenle birleştirin; ortak kareler dolu kalır. Sonuç hangisi?',
    [tiles([0, 1, 4], 4), tiles([6, 10, 11], 4)], 2,
    tiles([5, 6, 9, 10, 11], 4), [tiles([5, 9, 10, 11], 4), tiles([1, 2, 5, 6, 10, 11], 4), tiles([4, 5, 6, 8, 10, 11], 4)], 'Ötelenen sol şeklin dolu konumları 2. satır 2–3. sütun ve 3. satır 2. sütundur. Sağdaki şekil eklenince 3. satırın 3–4. sütunları da dolar. Ortak 2. satır 3. sütun silinmez; sonuç beş karedir.'),
  make(29, 'sequence', 'İki işaret de dış kenardaki sekiz hücre boyunca ilerliyor. Ortadaki hücreye girilmiyor; işaretler aynı hücrede bulunabilir. Eksik adım hangisi?',
    [orbitPair(perimeter[0], perimeter[6]), orbitPair(perimeter[1], perimeter[5]), orbitPair(perimeter[2], perimeter[4]), orbitPair(perimeter[3], perimeter[3]), orbitPair(perimeter[4], perimeter[2]), null], 3,
    orbitPair(perimeter[5], perimeter[1]), [orbitPair(perimeter[6], perimeter[1]), orbitPair(perimeter[5], perimeter[7]), orbitPair(perimeter[1], perimeter[5])], 'Küçük dolu kare dış kenarda saat yönünde bir hücre; büyük boş daire saat yönünün tersine bir hücre ilerliyor. Beşinci adımdan sonra kare alt ortaya, daire üst ortaya gelir.'),
  make(30, 'matrix', 'Her satırda ilk iki desen üst üste konuyor: ortak dolu kareler siliniyor. Kalan desen aynı yönde çeyrek tur döndürülüyor. Eksik sonuç hangisi?',
    [tiles([0, 1, 4]), tiles([1, 4, 8]), tiles(rotate(xor([0, 1, 4], [1, 4, 8]))), tiles([0, 3, 4, 7]), tiles([3, 4, 5, 8]), tiles(rotate(xor([0, 3, 4, 7], [3, 4, 5, 8]))), tiles([0, 2, 4, 6]), tiles([0, 3, 4, 8]), null], 3,
    tiles([0, 1, 6, 8]), [tiles([2, 3, 6, 8]), tiles(rotate(union([0, 2, 4, 6], [0, 3, 4, 8]))), tiles([2, 4])], 'Önce aynı konumdaki dolu kareler birbirini götürür, ardından kalan desen saat yönünde 90° döner. Son satırda sağ üst, orta sol, sol alt ve sağ alt kalır; dönüşten sonra sol üst, üst orta, sol alt ve sağ alt dolar.'),
];

/** Practice is intentionally separate: these items never enter scoring or the timed bank. */
export const practiceQuestions: VisualQuestion[] = [
  { ...make(1, 'sequence', 'Alıştırma: Numaralı örüntüde sıradaki şekil hangisi?', [single('circle'), single('square'), single('circle'), null], 2,
    single('square'), [single('triangle'), count(2), single('circle')], 'Daire ve kare sırayla değişiyor: daire, kare, daire, kare. Alıştırmalar puana ve süreye dahil değildir.'), id: 'practice-01' },
  { ...make(2, 'rotation', 'Alıştırma: Üst sıradaki döndürmeyi alttaki oka uygulayın.', [arrow(0), arrow(1), arrow(2), null], 2,
    arrow(3), [arrow(0), arrow(1), arrow(2)], 'Üstteki ok saat yönünde 90° dönmüş. Aşağı bakan oku da aynı yönde döndürünce sola bakar. Alıştırmalar puana ve süreye dahil değildir.'), id: 'practice-02' },
];
