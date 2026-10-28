#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { createSourceLoader } = require('./validate-seo.cjs');


// Independent small Latin-square solver, not the application's answer checker.
// It stops after finding a second solution: ambiguity is a content error.
function solveGridIndependently(puzzle) {
  const board = [...puzzle.cells];
  const solutions = [];
  function visit() {
    if (solutions.length >= 2) return;
    let chosen = -1;
    let candidates;
    for (let index = 0; index < board.length; index++) {
      if (board[index] !== null) continue;
      const row = Math.floor(index / puzzle.size);
      const column = index % puzzle.size;
      const possible = puzzle.symbols.filter((picture) => !board.some((entry, other) => entry === picture
        && (Math.floor(other / puzzle.size) === row || other % puzzle.size === column)));
      if (!possible.length) return;
      if (!candidates || possible.length < candidates.length) { chosen = index; candidates = possible; }
    }
    if (chosen < 0) {
      for (let line = 0; line < puzzle.size; line++) {
        const row = board.slice(line * puzzle.size, (line + 1) * puzzle.size);
        const column = board.filter((_, index) => index % puzzle.size === line);
        if (new Set(row).size !== puzzle.size || new Set(column).size !== puzzle.size) return;
      }
      solutions.push([...board]);
      return;
    }
    for (const picture of candidates) { board[chosen] = picture; visit(); }
    board[chosen] = null;
  }
  visit();
  return solutions;
}

function validatePictureGames() {
  const load = createSourceLoader();
  const { PICTURES, PUZZLES, LEVELS, MODES, MEMORY_POOLS } = load('lib/picture-games/content.ts');
  const learning = load('lib/picture-games/learning.ts');
  const { SEQUENCE_PUZZLES, GRID_PUZZLES } = load('lib/picture-games/challenges.ts');
  const pictureIds = Object.keys(PICTURES);
  assert.equal(pictureIds.length, 20, 'Twenty illustrated objects');
  assert.equal(new Set(pictureIds.map((id) => PICTURES[id].label)).size, 20, 'Distinct accessible picture names');
  pictureIds.forEach((id) => assert(PICTURES[id].label.trim() && PICTURES[id].category.trim(), id + ': named and categorized'));
  assert.deepEqual(LEVELS.map((level) => level.id), [1, 2, 3, 4]);
  assert.deepEqual(MODES.map((mode) => mode.id).sort(), ['detective', 'grid', 'memory', 'pattern', 'sequence']);
  assert.equal(PUZZLES.length, 48, 'Six exercises for each of two puzzle games at four levels');
  assert.equal(new Set(PUZZLES.map((puzzle) => puzzle.id)).size, PUZZLES.length, 'Stable unique exercise identities');

  for (const level of [1, 2, 3, 4]) {
    for (const mode of ['pattern', 'detective']) {
      assert.equal(PUZZLES.filter((puzzle) => puzzle.level === level && puzzle.mode === mode).length, 6, mode + ' level ' + level);
    }
    const pool = MEMORY_POOLS[level];
    assert.equal(pool.length, { 1: 3, 2: 4, 3: 6, 4: 8 }[level]);
    assert.equal(new Set(pool).size, pool.length, 'Memory pictures are distinct');
    pool.forEach((picture) => assert(pictureIds.includes(picture)));
    for (const seed of [0, 1, 42, 801]) {
      const cards = learning.makeMemoryCards(level, seed);
      assert.equal(cards.length, pool.length * 2);
      assert.equal(new Set(cards.map((card) => card.id)).size, cards.length, 'Each duplicate face has its own card identity');
      pool.forEach((picture) => assert.equal(cards.filter((card) => card.picture === picture).length, 2, 'Exactly one pair: ' + picture));
      assert.deepEqual(cards, learning.makeMemoryCards(level, seed), 'Deterministic initial board avoids hydration mismatch');
    }
  }

  for (const puzzle of PUZZLES) {
    assert(['pattern', 'detective'].includes(puzzle.mode));
    assert([1, 2, 3, 4].includes(puzzle.level));
    assert(puzzle.prompt.trim().length > 8 && puzzle.hint.trim().length > 8 && puzzle.explanation.trim().length > 8, puzzle.id + ': child-facing guidance');
    assert(puzzle.choices.length >= 3 && puzzle.choices.length <= 6, puzzle.id + ': manageable choice count');
    assert.equal(new Set(puzzle.choices).size, puzzle.choices.length);
    assert.equal(puzzle.choices.filter((choice) => choice === puzzle.answer).length, 1);
    [...puzzle.sequence, ...puzzle.choices].forEach((picture) => assert(pictureIds.includes(picture), puzzle.id + ': real illustration'));
    if (puzzle.mode === 'pattern') {
      const period = Array.from({ length: Math.floor(puzzle.sequence.length / 2) }, (_, index) => index + 1)
        .find((size) => puzzle.sequence.every((picture, index) => picture === puzzle.sequence[index % size]));
      assert(period, puzzle.id + ': at least two visible repeats establish a rule');
      assert.equal(puzzle.answer, puzzle.sequence[puzzle.sequence.length % period], puzzle.id + ': next picture follows the smallest repeated cycle');
      assert(new Set(puzzle.sequence).size > 1, puzzle.id + ': meaningful repeating pattern');
    }
  }

  // Independent semantic fixtures make every clue's answer unique among its choices.
  // Botanical/visual properties are intentionally distinct from the simple food categories.
  const category = (name) => (picture) => PICTURES[picture].category === name;
  const oneOf = (...pictures) => (picture) => pictures.includes(picture);
  const detectiveRules = {
    'detective-1-1': [/bir hayvan/, category('Hayvan')],
    'detective-1-2': [/bir meyve/, category('Meyve')],
    'detective-1-3': [/bir taşıt/, category('Taşıt')],
    'detective-1-4': [/bir oyuncak/, category('Oyuncak')],
    'detective-1-5': [/bir sebze/, category('Sebze')],
    'detective-1-6': [/gökyüzünde/, category('Gökyüzü')],
    'detective-2-1': [/hayvan değil/, (picture) => !category('Hayvan')(picture)],
    'detective-2-2': [/meyve değil/, (picture) => !category('Meyve')(picture)],
    'detective-2-3': [/taşıt değil/, (picture) => !category('Taşıt')(picture)],
    'detective-2-4': [/yüzgeçleri/, oneOf('fish')],
    'detective-2-5': [/sert bir kabuk/, oneOf('turtle')],
    'detective-2-6': [/suyun üzerinde/, oneOf('boat')],
    'detective-3-1': [/hayvan.*kanatları/, oneOf('owl')],
    'detective-3-2': [/taşıt.*tekerlekleriyle/, oneOf('car')],
    'detective-3-3': [/bitki.*gövdesi ve dalları/, oneOf('tree')],
    'detective-3-4': [/hayvan.*uzun kulakları/, oneOf('rabbit')],
    'detective-3-5': [/gökyüzünde.*yağmur/, oneOf('cloud')],
    'detective-3-6': [/hayvan.*yüzgeçleriyle/, oneOf('fish')],
    'detective-4-1': [/taşıt.*Yolda gitmiyor.*Suyun üzerinde de gitmiyor/, (picture) => category('Taşıt')(picture) && !['car', 'boat'].includes(picture)],
    'detective-4-2': [/hayvan.*Ne kanatları ne yüzgeçleri.*sert bir kabuk/, oneOf('turtle')],
    'detective-4-3': [/meyve.*Elma değil.*Armut da değil/, (picture) => category('Meyve')(picture) && !['apple', 'pear'].includes(picture)],
    'detective-4-4': [/Gökyüzünde.*Yağmur getirmiyor.*ne yuvarlak ne de hilal/, (picture) => category('Gökyüzü')(picture) && !['cloud', 'sun', 'moon'].includes(picture)],
    'detective-4-5': [/hayvan.*Kedi ya da tilki değil.*Kabuğu, kanatları ve yüzgeçleri de yok/, (picture) => category('Hayvan')(picture) && !['cat', 'fox', 'turtle', 'owl', 'fish'].includes(picture)],
    'detective-4-6': [/taşıt.*Roket değil.*Tekerlekleri de yok/, (picture) => category('Taşıt')(picture) && !['rocket', 'car'].includes(picture)],
  };
  for (const puzzle of PUZZLES.filter((item) => item.mode === 'detective')) {
    const fixture = detectiveRules[puzzle.id];
    assert(fixture, puzzle.id + ': reviewed clue fixture');
    assert.match(puzzle.prompt, fixture[0], puzzle.id + ': fixture corresponds to actual clue');
    assert.deepEqual(puzzle.choices.filter(fixture[1]), [puzzle.answer], puzzle.id + ': exactly one semantic answer');
  }

  assert.equal(SEQUENCE_PUZZLES.length, 24);
  assert.equal(GRID_PUZZLES.length, 24);
  for (const level of [1, 2, 3, 4]) {
    assert.equal(SEQUENCE_PUZZLES.filter((puzzle) => puzzle.level === level).length, 6);
    assert.equal(GRID_PUZZLES.filter((puzzle) => puzzle.level === level).length, 6);
  }
  for (const puzzle of SEQUENCE_PUZZLES) {
    assert.equal(puzzle.sequence.length, puzzle.level + 2, puzzle.id + ': ordered memory load increases with level');
    assert(puzzle.id.startsWith('sequence-'));
    assert(puzzle.hint.length > 8 && puzzle.explanation.length > 8);
    assert.equal(new Set(puzzle.choices).size, puzzle.choices.length);
    puzzle.choices.forEach((picture) => assert(pictureIds.includes(picture)));
    puzzle.sequence.forEach((picture) => assert(puzzle.choices.includes(picture), puzzle.id + ': every target can be selected'));
    if (puzzle.level >= 3) assert(new Set(puzzle.sequence).size < puzzle.sequence.length, puzzle.id + ': repeated pictures must remain selectable');
    const snapshot = JSON.stringify(puzzle);
    const answer = [...puzzle.sequence];
    assert(learning.isSequenceCorrect(puzzle, answer));
    assert(!learning.isSequenceCorrect(puzzle, answer.slice(1)), 'Partial sequence cannot complete');
    assert(!learning.isSequenceCorrect(puzzle, [...answer, answer[0]]), 'Extra pictures cannot complete');
    const wrong = [...answer];
    const different = wrong.findIndex((picture) => picture !== wrong[0]);
    assert(different > 0, 'More than one kind of picture requires remembering order');
    [wrong[0], wrong[different]] = [wrong[different], wrong[0]];
    assert(!learning.isSequenceCorrect(puzzle, wrong), 'Same pictures in the wrong order must fail');
    assert.deepEqual(answer, puzzle.sequence, 'Checking answers never mutates them');
    assert.equal(JSON.stringify(puzzle), snapshot, 'Checking answers never mutates content');
  }
  for (const puzzle of GRID_PUZZLES) {
    assert.equal(puzzle.size, puzzle.level <= 2 ? 3 : 4, puzzle.id + ': board size progression');
    assert.equal(puzzle.cells.length, puzzle.size * puzzle.size);
    assert.equal(puzzle.solution.length, puzzle.cells.length);
    assert.equal(puzzle.symbols.length, puzzle.size);
    assert.equal(new Set(puzzle.symbols).size, puzzle.size);
    puzzle.symbols.forEach((picture) => assert(pictureIds.includes(picture)));
    puzzle.cells.forEach((picture, index) => {
      assert(picture === null || puzzle.symbols.includes(picture));
      if (picture !== null) assert.equal(picture, puzzle.solution[index], puzzle.id + ': givens match solution');
    });
    const blanks = puzzle.cells.filter((picture) => picture === null).length;
    const expectedBlanks = { 1: [2], 2: [3, 4], 3: [5, 6], 4: [7, 8] }[puzzle.level];
    assert(expectedBlanks.includes(blanks), puzzle.id + ': graded number of blanks');
    const solutions = solveGridIndependently(puzzle);
    assert.equal(solutions.length, 1, puzzle.id + ': row/column constraints determine exactly one completion');
    assert.deepEqual(solutions[0], puzzle.solution, puzzle.id + ': published solution matches independent solver');
    const snapshot = JSON.stringify(puzzle);
    assert(learning.isGridCorrect(puzzle, [...puzzle.solution]));
    assert(!learning.isGridCorrect(puzzle, [...puzzle.cells]), 'Unfilled board cannot complete');
    const firstBlank = puzzle.cells.indexOf(null);
    const wrong = [...puzzle.solution];
    wrong[firstBlank] = puzzle.symbols.find((picture) => picture !== wrong[firstBlank]);
    assert(!learning.isGridCorrect(puzzle, wrong), 'Incorrect row/column entry cannot complete');
    assert(!learning.isGridCorrect(puzzle, puzzle.solution.slice(1)), 'Wrong board length cannot complete');
    const sparse = [...puzzle.solution];
    delete sparse[firstBlank];
    assert(!learning.isGridCorrect(puzzle, sparse), 'Sparse arrays cannot hide an unfilled cell');
    const swappedSymbols = puzzle.solution.map((picture) => puzzle.symbols[(puzzle.symbols.indexOf(picture) + 1) % puzzle.size]);
    assert(!learning.isGridCorrect(puzzle, swappedSymbols), 'A valid Latin grid that overwrites givens must fail');
    assert.equal(JSON.stringify(puzzle), snapshot, 'Checking a grid never mutates its givens or solution');
  }

  const ids = learning.getRoundIds();
  const expected = [...PUZZLES, ...SEQUENCE_PUZZLES, ...GRID_PUZZLES].map((puzzle) => puzzle.id).concat(LEVELS.map((level) => 'memory-' + level.id));
  assert.deepEqual([...ids].sort(), expected.sort());
  assert.equal(new Set(ids).size, 100, 'Progress counts actual exercises across five games and four levels');
  assert.equal(learning.STORAGE_KEY, 'testdunya.picture-games.v1', 'Existing browser storage key is retained');
  const legacyPuzzles = PUZZLES.filter((puzzle) => puzzle.level <= 3);
  assert.equal(createHash('sha256').update(JSON.stringify(legacyPuzzles)).digest('hex'),
    '95204a2687361d8e2ae1d8ed4835cd2023882f177b6459e31a33a47307b250f2', 'The original 36 puzzles retain their content and identities');
  const legacyIds = legacyPuzzles.map((puzzle) => puzzle.id).concat(['memory-1', 'memory-2', 'memory-3']);
  assert.equal(legacyIds.length, 39);
  assert.deepEqual(learning.parseProgress(JSON.stringify({ version: 1, completed: legacyIds })), legacyIds, 'All 39 old completions survive the expansion');
  assert.deepEqual([MEMORY_POOLS[1], MEMORY_POOLS[2], MEMORY_POOLS[3]], [
    ['fox', 'apple', 'car'], ['rabbit', 'pear', 'boat', 'sun'], ['owl', 'turtle', 'strawberry', 'flower', 'rocket', 'moon'],
  ], 'Existing memory levels retain their pictures');
  for (const raw of [null, '', '{bad', 'null', '42', '[]', '{"version":2,"completed":[]}', '{"version":1,"completed":"bad"}']) {
    assert.deepEqual(learning.parseProgress(raw), [], 'Malformed storage recovers safely');
  }
  const subset = [ids[0], ids[5], 'memory-3'];
  assert.deepEqual(learning.parseProgress(learning.serializeProgress(subset)), subset, 'Progress survives serialization');
  assert.deepEqual(learning.parseProgress(JSON.stringify({ version: 1, completed: [ids[0], ids[0], 'unknown', null, 7] })), [ids[0]], 'Only known, unique exercises count');
  assert.deepEqual(learning.parseProgress(learning.serializeProgress([ids[0], ids[0], 'unknown'])), [ids[0]], 'Writes also remove phantom and repeated completion');
  const original = ['fox', 'fox', 'owl', 'cat'];
  const copy = original.slice();
  const shuffled = learning.shuffled(original, 59);
  assert.deepEqual(original, copy, 'Shuffle does not mutate content');
  assert.deepEqual([...shuffled].sort(), [...copy].sort(), 'Shuffle preserves each physical card');
  assert.deepEqual(shuffled, learning.shuffled(original, 59));
  assert.deepEqual(learning.shuffled([], 0), []);

  return { status: 'passed', layer: 'picture game content and progress', pictures: pictureIds.length, puzzles: PUZZLES.length,
    memoryPairs: [3, 4, 6, 8], sequencePuzzles: SEQUENCE_PUZZLES.length, uniqueGridPuzzles: GRID_PUZZLES.length, progressItems: ids.length,
    limitations: ['Checks validate game rules and state; they do not measure intelligence or developmental outcomes.'] };
}

module.exports = { validatePictureGames };
if (require.main === module) {
  try { console.log(JSON.stringify(validatePictureGames(), null, 2)); }
  catch (error) { console.error('Picture game source validation failed: ' + (error.stack || error)); process.exitCode = 1; }
}
