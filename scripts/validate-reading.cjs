#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const { createSourceLoader } = require('./validate-seo.cjs');

function validateReading() {
  const load = createSourceLoader();
  const { READING_GROUPS, LETTER_DETAILS } = load('lib/reading/content.ts');
  const learning = load('lib/reading/learning.ts');
  const vowels = new Set(Array.from('aeıioöuü'));
  const expectedLetters = Array.from('elakinomutüyörıdsbzçgşcphvğfj');
  const alphabet = Array.from('abcçdefgğhıijklmnoöprsştuüvyz');
  const allLetters = READING_GROUPS.flatMap((group) => group.letters);
  assert.equal(READING_GROUPS.length, 5, 'Five cumulative teaching groups');
  assert.deepEqual(allLetters, expectedLetters, 'The declared teaching sequence is stable');
  assert.equal(new Set(allLetters).size, 29, 'Every Turkish letter appears once');
  assert.deepEqual([...allLetters].sort(), alphabet.sort(), 'The full 29-letter Turkish alphabet');
  assert.equal(new Set(READING_GROUPS.map((group) => group.id)).size, 5);
  const names = {
    a: 'a', b: 'be', c: 'ce', ç: 'çe', d: 'de', e: 'e', f: 'fe', g: 'ge',
    ğ: 'yumuşak ge', h: 'he', ı: 'ı', i: 'i', j: 'je', k: 'ke', l: 'le',
    m: 'me', n: 'ne', o: 'o', ö: 'ö', p: 'pe', r: 're', s: 'se', ş: 'şe',
    t: 'te', u: 'u', ü: 'ü', v: 've', y: 'ye', z: 'ze',
  };
  const learned = new Set();
  const expectedIds = [];
  let wordCount = 0;
  let storyCount = 0;
  let syllableCount = 0;

  function decodable(text, label) {
    for (const letter of Array.from(text.toLocaleLowerCase('tr-TR')).filter((value) => /\p{L}/u.test(value))) {
      assert(learned.has(letter), label + ': unintroduced letter ' + letter + ' in ' + text);
    }
  }
  function oneSyllable(text, label) {
    assert.equal(Array.from(text.toLocaleLowerCase('tr-TR')).filter((letter) => vowels.has(letter)).length, 1,
      label + ': exactly one vowel per syllable');
  }

  for (const group of READING_GROUPS) {
    group.letters.forEach((letter) => learned.add(letter));
    assert(group.title.trim());
    assert(group.syllables.length >= 6, group.id + ': at least six blending exercises');
    assert(group.words.length >= 6, group.id + ': at least six real words');
    assert(group.stories.length >= 2, group.id + ': at least two short texts');
    assert.equal(new Set(group.syllables).size, group.syllables.length);
    assert.equal(new Set(group.words.map((word) => word.text)).size, group.words.length);
    assert.equal(new Set(group.stories.map((story) => story.id)).size, group.stories.length);

    for (const letter of group.letters) {
      const detail = LETTER_DETAILS[letter];
      assert(detail, 'Letter detail: ' + letter);
      assert.equal(detail.name.toLocaleLowerCase('tr-TR'), names[letter], 'Turkish letter name: ' + letter);
      assert.equal(detail.isVowel, vowels.has(letter));
      assert(detail.hint.trim().length > 10, 'Concrete teaching hint: ' + letter);
      assert(detail.emoji);
      decodable(detail.example, group.id + ' letter example');
      assert(detail.example.toLocaleLowerCase('tr-TR').includes(letter));
      if (letter !== 'ğ') assert(detail.example.toLocaleLowerCase('tr-TR').startsWith(letter));
      else assert(!detail.example.toLocaleLowerCase('tr-TR').startsWith('ğ'), 'Soft g occurs within words');
      expectedIds.push(learning.getExerciseId('letter', group.id, letter));
    }
    for (const syllable of group.syllables) {
      decodable(syllable, group.id + ' syllable');
      oneSyllable(syllable, syllable);
      expectedIds.push(learning.getExerciseId('syllable', group.id, syllable));
      syllableCount++;
    }
    for (const word of group.words) {
      decodable(word.text, group.id + ' word');
      assert.equal(word.syllables.join(''), word.text, word.text + ': syllables preserve spelling');
      word.syllables.forEach((syllable) => oneSyllable(syllable, word.text));
      assert.deepEqual(learning.splitTurkishSyllables(word.text), word.syllables, word.text + ': visible syllable split');
      assert(word.emoji);
      expectedIds.push(learning.getExerciseId('word', group.id, word.text));
      wordCount++;
    }
    for (const story of group.stories) {
      assert(story.title.trim() && story.question.trim());
      assert(story.sentences.length >= 2, story.id + ': a connected short text');
      story.sentences.forEach((sentence) => decodable(sentence, story.id));
      assert.equal(story.choices.length, 3, story.id + ': three comprehension choices');
      assert.equal(new Set(story.choices).size, story.choices.length);
      story.choices.forEach((choice) => decodable(choice, story.id + ' choice'));
      assert(Number.isInteger(story.answerIndex) && story.answerIndex >= 0 && story.answerIndex < story.choices.length);
      expectedIds.push(learning.getExerciseId('story', group.id, story.id));
      storyCount++;
    }
  }
  for (const [word, syllables] of [
    ['aile', ['a', 'i', 'le']], ['anne', ['an', 'ne']], ['İstanbul', ['İs', 'tan', 'bul']],
    ['Türkçe', ['Türk', 'çe']], ['yağmur', ['yağ', 'mur']], ['ağaç', ['a', 'ğaç']],
    ['kalem', ['ka', 'lem']], ['spor', ['spor']], ['dede', ['de', 'de']], ['ıslak', ['ıs', 'lak']],
  ]) assert.deepEqual(learning.splitTurkishSyllables(word), syllables, 'Turkish syllable fixture: ' + word);
  assert.equal('i'.toLocaleUpperCase('tr-TR'), 'İ');
  assert.equal('ı'.toLocaleUpperCase('tr-TR'), 'I');

  const ids = learning.getExerciseIds();
  assert.equal(new Set(ids).size, ids.length, 'Exercise identities are unique');
  assert.deepEqual([...ids].sort(), expectedIds.sort(), 'Every real exercise has one persistence ID');
  for (const raw of [null, '', '{bad json', 'null', '42', '[]', '{"version":2,"completed":[]}', '{"version":1,"completed":"wrong"}']) {
    assert.deepEqual(learning.parseProgress(raw), [], 'Malformed or unsupported progress starts empty');
  }
  const subset = ids.slice(0, 3);
  assert.deepEqual(learning.parseProgress(learning.serializeProgress(subset)), subset, 'Progress round trip');
  assert.deepEqual(learning.parseProgress(JSON.stringify({ version: 1, completed: [ids[0], ids[0], 'unknown:exercise', null, 12] })),
    [ids[0]], 'Only unique known exercise IDs survive storage parsing');
  assert.deepEqual(learning.parseProgress(learning.serializeProgress([ids[0], ids[0], 'unknown:exercise'])),
    [ids[0]], 'Storage writes also reject phantom completion');
  const input = ['de', 'de', 'la', 'le'];
  const snapshot = input.slice();
  const shuffled = learning.shuffledItems(input, 42);
  assert.deepEqual(input, snapshot, 'Shuffling never mutates curriculum arrays');
  assert.deepEqual([...shuffled].sort(), [...snapshot].sort(), 'Duplicate tiles remain distinct usable entries');
  assert.deepEqual(shuffled, learning.shuffledItems(input, 42), 'Seeded order is stable across SSR and hydration');
  assert.deepEqual(learning.shuffledItems([], 1), []);
  return {
    status: 'passed', layer: 'reading curriculum and learning state',
    groups: READING_GROUPS.length, letters: allLetters.length, syllables: syllableCount,
    words: wordCount, stories: storyCount, exercises: ids.length,
    limitations: ['Content constraints and syllable fixtures are checked; this is not a pronunciation or reading-level assessment.'],
  };
}
module.exports = { validateReading };
if (require.main === module) {
  try { console.log(JSON.stringify(validateReading(), null, 2)); }
  catch (error) { console.error('Reading source validation failed: ' + (error.stack || error)); process.exitCode = 1; }
}
