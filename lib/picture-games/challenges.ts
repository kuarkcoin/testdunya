import type { Level, PictureId } from './content';

export type SequencePuzzle = {
  id: string;
  level: Level;
  sequence: PictureId[];
  choices: PictureId[];
  hint: string;
  explanation: string;
};

export type GridPuzzle = {
  id: string;
  level: Level;
  size: 3 | 4;
  symbols: PictureId[];
  cells: (PictureId | null)[];
  solution: PictureId[];
  hint: string;
  explanation: string;
};

function sequence(level: Level, number: number, pictures: PictureId[], choices: PictureId[]): SequencePuzzle {
  return {
    id: `sequence-${level}-${number}`, level, sequence: pictures, choices,
    hint: level <= 2
      ? 'Resimleri küçük bir öykü gibi düşün. Sonra öyküyü baştan anlatır gibi sıraya koy.'
      : 'Sırayı ikili veya üçlü küçük gruplara ayır. Aynı resim yeniden gelirse onu yeniden seçebilirsin.',
    explanation: 'Resimleri gördüğün sırayla geri getirdin. Dikkatle baktın ve sırayı hatırladın!',
  };
}

/** Self-paced viewing followed by recall; no countdown or reading requirement. */
export const SEQUENCE_PUZZLES: SequencePuzzle[] = [
  sequence(1, 1, ['fox', 'rabbit', 'cat'], ['fox', 'rabbit', 'cat', 'owl']),
  sequence(1, 2, ['apple', 'pear', 'strawberry'], ['apple', 'pear', 'strawberry', 'carrot']),
  sequence(1, 3, ['sun', 'cloud', 'moon'], ['sun', 'cloud', 'moon', 'star']),
  sequence(1, 4, ['car', 'boat', 'rocket'], ['car', 'boat', 'rocket', 'ball']),
  sequence(1, 5, ['tree', 'flower', 'carrot'], ['tree', 'flower', 'carrot', 'apple']),
  sequence(1, 6, ['fish', 'turtle', 'owl'], ['fish', 'turtle', 'owl', 'rabbit']),

  sequence(2, 1, ['rabbit', 'owl', 'fox', 'cat'], ['rabbit', 'owl', 'fox', 'cat', 'turtle']),
  sequence(2, 2, ['pear', 'carrot', 'apple', 'strawberry'], ['pear', 'carrot', 'apple', 'strawberry', 'flower']),
  sequence(2, 3, ['cloud', 'star', 'sun', 'moon'], ['cloud', 'star', 'sun', 'moon', 'ball']),
  sequence(2, 4, ['boat', 'ball', 'car', 'rocket'], ['boat', 'ball', 'car', 'rocket', 'fish']),
  sequence(2, 5, ['flower', 'apple', 'tree', 'carrot'], ['flower', 'apple', 'tree', 'carrot', 'pear']),
  sequence(2, 6, ['turtle', 'rabbit', 'fish', 'owl'], ['turtle', 'rabbit', 'fish', 'owl', 'cat']),

  sequence(3, 1, ['fox', 'rabbit', 'fox', 'owl', 'cat'], ['fox', 'rabbit', 'owl', 'cat', 'fish']),
  sequence(3, 2, ['apple', 'pear', 'strawberry', 'pear', 'carrot'], ['apple', 'pear', 'strawberry', 'carrot', 'flower']),
  sequence(3, 3, ['sun', 'cloud', 'moon', 'sun', 'star'], ['sun', 'cloud', 'moon', 'star', 'ball']),
  sequence(3, 4, ['car', 'boat', 'rocket', 'boat', 'ball'], ['car', 'boat', 'rocket', 'ball', 'tree']),
  sequence(3, 5, ['tree', 'flower', 'carrot', 'flower', 'apple'], ['tree', 'flower', 'carrot', 'apple', 'pear']),
  sequence(3, 6, ['fish', 'turtle', 'owl', 'rabbit', 'fish'], ['fish', 'turtle', 'owl', 'rabbit', 'fox']),

  sequence(4, 1, ['cat', 'owl', 'cat', 'fox', 'owl', 'rabbit'], ['cat', 'owl', 'fox', 'rabbit', 'fish', 'turtle']),
  sequence(4, 2, ['strawberry', 'apple', 'pear', 'strawberry', 'carrot', 'pear'], ['strawberry', 'apple', 'pear', 'carrot', 'flower', 'tree']),
  sequence(4, 3, ['moon', 'sun', 'star', 'moon', 'cloud', 'star'], ['moon', 'sun', 'star', 'cloud', 'ball', 'flower']),
  sequence(4, 4, ['rocket', 'car', 'boat', 'car', 'ball', 'rocket'], ['rocket', 'car', 'boat', 'ball', 'cloud', 'fish']),
  sequence(4, 5, ['flower', 'tree', 'flower', 'carrot', 'apple', 'tree'], ['flower', 'tree', 'carrot', 'apple', 'pear', 'strawberry']),
  sequence(4, 6, ['owl', 'fish', 'turtle', 'owl', 'rabbit', 'turtle'], ['owl', 'fish', 'turtle', 'rabbit', 'fox', 'cat']),

];

function grid(level: Level, number: number, symbols: PictureId[], layout: number[], blanks: number[]): GridPuzzle {
  const solution = layout.map((symbol) => symbols[symbol]);
  const empty = new Set(blanks);
  return {
    id: `grid-${level}-${number}`, level, size: symbols.length as 3 | 4,
    symbols, solution, cells: solution.map((picture, index) => empty.has(index) ? null : picture),
    hint: level <= 2
      ? 'Bir boş kutunun satırına bak. Eksik resmi bul, sonra aynı kutunun sütununu da kontrol et.'
      : 'En az boş kutusu olan satır veya sütundan başla. Eklediğin her resim başka bir kutu için yeni bir ipucu olur.',
    explanation: 'Tablo tamam! Her satırda ve her sütunda bütün resimler birer kez yer alıyor.',
  };
}

/** These are Latin picture grids: only row/column rules apply, with no subgrids. */
export const GRID_PUZZLES: GridPuzzle[] = [
  grid(1, 1, ['fox', 'rabbit', 'owl'], [1, 0, 2, 0, 2, 1, 2, 1, 0], [7, 8]),
  grid(1, 2, ['apple', 'pear', 'strawberry'], [1, 0, 2, 2, 1, 0, 0, 2, 1], [1, 8]),
  grid(1, 3, ['sun', 'moon', 'star'], [1, 0, 2, 2, 1, 0, 0, 2, 1], [0, 3]),
  grid(1, 4, ['car', 'boat', 'rocket'], [2, 1, 0, 0, 2, 1, 1, 0, 2], [0, 3]),
  grid(1, 5, ['tree', 'flower', 'carrot'], [2, 1, 0, 0, 2, 1, 1, 0, 2], [1, 8]),
  grid(1, 6, ['fish', 'turtle', 'cat'], [1, 0, 2, 2, 1, 0, 0, 2, 1], [1, 7]),

  grid(2, 1, ['fox', 'rabbit', 'owl'], [2, 1, 0, 0, 2, 1, 1, 0, 2], [1, 5, 7, 8]),
  grid(2, 2, ['apple', 'pear', 'strawberry'], [2, 0, 1, 1, 2, 0, 0, 1, 2], [1, 4, 6]),
  grid(2, 3, ['sun', 'moon', 'star'], [2, 0, 1, 1, 2, 0, 0, 1, 2], [1, 3, 5, 7]),
  grid(2, 4, ['car', 'boat', 'rocket'], [1, 2, 0, 2, 0, 1, 0, 1, 2], [3, 5, 6]),
  grid(2, 5, ['tree', 'flower', 'carrot'], [0, 2, 1, 1, 0, 2, 2, 1, 0], [1, 2, 5, 6]),
  grid(2, 6, ['fish', 'turtle', 'cat'], [2, 1, 0, 1, 0, 2, 0, 2, 1], [1, 4, 8]),

  grid(3, 1, ['fox', 'rabbit', 'cat', 'owl'], [0, 1, 3, 2, 3, 2, 1, 0, 1, 0, 2, 3, 2, 3, 0, 1], [0, 2, 6, 8, 11, 13]),
  grid(3, 2, ['apple', 'pear', 'strawberry', 'carrot'], [0, 1, 2, 3, 2, 3, 1, 0, 1, 0, 3, 2, 3, 2, 0, 1], [3, 5, 9, 10, 12]),
  grid(3, 3, ['sun', 'moon', 'star', 'cloud'], [1, 0, 2, 3, 2, 1, 3, 0, 0, 3, 1, 2, 3, 2, 0, 1], [3, 6, 8, 12, 13, 14]),
  grid(3, 4, ['car', 'boat', 'rocket', 'ball'], [1, 0, 3, 2, 0, 2, 1, 3, 2, 3, 0, 1, 3, 1, 2, 0], [1, 4, 9, 11, 14]),
  grid(3, 5, ['tree', 'flower', 'apple', 'pear'], [3, 1, 0, 2, 0, 2, 1, 3, 1, 3, 2, 0, 2, 0, 3, 1], [2, 5, 9, 10, 11, 12]),
  grid(3, 6, ['fish', 'turtle', 'owl', 'rabbit'], [2, 0, 1, 3, 3, 1, 0, 2, 1, 2, 3, 0, 0, 3, 2, 1], [0, 6, 9, 11, 14]),

  grid(4, 1, ['fox', 'rabbit', 'cat', 'owl'], [2, 3, 0, 1, 1, 2, 3, 0, 3, 0, 1, 2, 0, 1, 2, 3], [0, 1, 4, 5, 10, 11, 12, 15]),
  grid(4, 2, ['apple', 'pear', 'strawberry', 'carrot'], [3, 2, 1, 0, 1, 0, 2, 3, 0, 1, 3, 2, 2, 3, 0, 1], [0, 2, 3, 6, 8, 9, 14]),
  grid(4, 3, ['sun', 'moon', 'star', 'cloud'], [0, 1, 2, 3, 1, 2, 3, 0, 3, 0, 1, 2, 2, 3, 0, 1], [1, 4, 5, 7, 8, 10, 11, 12]),
  grid(4, 4, ['car', 'boat', 'rocket', 'ball'], [2, 0, 1, 3, 1, 3, 2, 0, 3, 2, 0, 1, 0, 1, 3, 2], [0, 5, 10, 11, 12, 14, 15]),
  grid(4, 5, ['tree', 'flower', 'apple', 'pear'], [3, 2, 0, 1, 1, 0, 2, 3, 2, 1, 3, 0, 0, 3, 1, 2], [1, 3, 4, 6, 7, 8, 9, 15]),
  grid(4, 6, ['fish', 'turtle', 'owl', 'rabbit'], [3, 0, 2, 1, 1, 2, 0, 3, 2, 3, 1, 0, 0, 1, 3, 2], [3, 4, 6, 10, 12, 13, 14]),

];
