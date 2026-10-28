#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const { createSourceLoader } = require('./validate-seo.cjs');

function validatePictureGames() {
  const load = createSourceLoader();
  const { PICTURES, PUZZLES, LEVELS, MODES, MEMORY_POOLS } = load('lib/picture-games/content.ts');
  const learning = load('lib/picture-games/learning.ts');
  const pictureIds = Object.keys(PICTURES);
  assert.equal(pictureIds.length, 20, 'Twenty illustrated objects');
  assert.equal(new Set(pictureIds.map((id) => PICTURES[id].label)).size, 20, 'Distinct accessible picture names');
  pictureIds.forEach((id) => assert(PICTURES[id].label.trim() && PICTURES[id].category.trim(), id + ': named and categorized'));
  assert.deepEqual(LEVELS.map((level) => level.id), [1, 2, 3]);
  assert.deepEqual(MODES.map((mode) => mode.id).sort(), ['detective', 'memory', 'pattern']);
  assert.equal(PUZZLES.length, 36, 'Six exercises for each of two puzzle games at three levels');
  assert.equal(new Set(PUZZLES.map((puzzle) => puzzle.id)).size, PUZZLES.length, 'Stable unique exercise identities');

  for (const level of [1, 2, 3]) {
    for (const mode of ['pattern', 'detective']) {
      assert.equal(PUZZLES.filter((puzzle) => puzzle.level === level && puzzle.mode === mode).length, 6, mode + ' level ' + level);
    }
    const pool = MEMORY_POOLS[level];
    assert.equal(pool.length, { 1: 3, 2: 4, 3: 6 }[level]);
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
    assert([1, 2, 3].includes(puzzle.level));
    assert(puzzle.prompt.trim().length > 8 && puzzle.hint.trim().length > 8 && puzzle.explanation.trim().length > 8, puzzle.id + ': child-facing guidance');
    assert(puzzle.choices.length >= 3 && puzzle.choices.length <= 5, puzzle.id + ': manageable choice count');
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
  };
  for (const puzzle of PUZZLES.filter((item) => item.mode === 'detective')) {
    const fixture = detectiveRules[puzzle.id];
    assert(fixture, puzzle.id + ': reviewed clue fixture');
    assert.match(puzzle.prompt, fixture[0], puzzle.id + ': fixture corresponds to actual clue');
    assert.deepEqual(puzzle.choices.filter(fixture[1]), [puzzle.answer], puzzle.id + ': exactly one semantic answer');
  }

  const ids = learning.getRoundIds();
  const expected = [...PUZZLES.map((puzzle) => puzzle.id), 'memory-1', 'memory-2', 'memory-3'];
  assert.deepEqual([...ids].sort(), expected.sort());
  assert.equal(new Set(ids).size, 39, 'Progress counts actual exercises, including three memory boards');
  assert.equal(typeof learning.STORAGE_KEY, 'string');
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
    memoryPairs: [3, 4, 6], progressItems: ids.length,
    limitations: ['Checks validate game rules and state; they do not measure intelligence or developmental outcomes.'] };
}

module.exports = { validatePictureGames };
if (require.main === module) {
  try { console.log(JSON.stringify(validatePictureGames(), null, 2)); }
  catch (error) { console.error('Picture game source validation failed: ' + (error.stack || error)); process.exitCode = 1; }
}
