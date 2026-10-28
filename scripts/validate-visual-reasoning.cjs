#!/usr/bin/env node
'use strict';

// Native unit/data tests. No browser automation, and no claims of psychometric validation.
const assert = require('node:assert/strict');
const { createSourceLoader } = require('./validate-seo.cjs');

function validateVisualReasoning() {
  const load = createSourceLoader();
  const api = load('app/iq-test/attempt.ts');
  const {
    createAttempt, restoreAttempt, tickAttempt, answerAttempt, navigateAttempt,
    finishAttempt, remainingSeconds, summarizeAttempt, DURATION_MS, bankVersion,
  } = api;
  const now = 1793160000000;
  const fixtures = Array.from({ length: 30 }, (_, index) => ({
    id: `fixture-${index + 1}`, category: ['matrix', 'sequence', 'rotation', 'spatial'][index % 4],
    correct: index % 4, options: [0, 1, 2, 3].map((n) => ({ label: `choice-${n}` })),
  }));
  let checks = 0;
  function check(name, fn) {
    try { fn(); checks++; } catch (error) { error.message = `${name}: ${error.message}`; throw error; }
  }
  function seeded(seed) {
    let state = seed >>> 0;
    return () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  }
  function fresh(seed = 42) { return createAttempt(fixtures, now, seeded(seed)); }
  function roundTrip(attempt, time = attempt.lastSeenAt) { return restoreAttempt(JSON.stringify(attempt), fixtures, time); }
  const initial = fresh();

  check('Explicit start fixes an exact thirty-minute deadline and begins with no answers', () => {
    assert.equal(initial.startedAt, now);
    assert.equal(initial.deadline, now + 30 * 60 * 1000);
    assert.equal(DURATION_MS, 30 * 60 * 1000);
    assert.equal(initial.endedAt, null);
    assert(initial.answers.every((answer) => answer === null));
    assert.equal(remainingSeconds(initial, now), 1800);
  });
  check('One hundred attempts each have balanced correct display slots and four-option permutations', () => {
    const orders = new Set();
    const extraSlotPairs = new Set();
    for (let seed = 1; seed <= 100; seed++) {
      const a = fresh(Math.imul(seed, 2654435761));
      const counts = [0, 0, 0, 0];
      a.optionOrders.forEach((order, index) => {
        assert.deepEqual([...order].sort(), [0, 1, 2, 3]);
        counts[order.indexOf(fixtures[index].correct)]++;
      });
      assert.deepEqual([...counts].sort(), [7, 7, 8, 8]);
      extraSlotPairs.add(counts.map((value, index) => value === 8 ? index : '').join(','));
      orders.add(JSON.stringify(a.optionOrders));
      assert.deepEqual(roundTrip(a).attempt, a);
    }
    assert.equal(orders.size, 100);
    assert.equal(extraSlotPairs.size, 6, 'All pairs can receive the extra slots');
  });
  check('Seeded shuffling is deterministic but different seeds differ', () => {
    assert.deepEqual(fresh(72), fresh(72));
    assert.notDeepEqual(fresh(72).optionOrders, fresh(73).optionOrders);
  });
  check('Original option mapping scores correctly regardless of display position', () => {
    let a = fresh();
    fixtures.forEach((q, index) => {
      const displayedCorrect = a.optionOrders[index].indexOf(q.correct);
      a = answerAttempt(a, index, a.optionOrders[index][displayedCorrect], now + index);
    });
    const result = summarizeAttempt(fixtures, finishAttempt(a, now + 5000));
    assert.equal(result.correct, 30);
    assert.equal(result.wrong, 0);
    assert.equal(result.unanswered, 0);
    assert.equal(result.elapsedSeconds, 5);
    assert.deepEqual(result.byCategory.matrix, { total: 8, correct: 8, wrong: 0, unanswered: 0 });
    assert.deepEqual(result.byCategory.spatial, { total: 7, correct: 7, wrong: 0, unanswered: 0 });
  });
  check('Correct/wrong/unanswered totals and subtype counts partition all thirty questions', () => {
    let a = fresh();
    for (let index = 0; index < 10; index++) a = answerAttempt(a, index, fixtures[index].correct, now + 100);
    for (let index = 10; index < 20; index++) a = answerAttempt(a, index, (fixtures[index].correct + 1) % 4, now + 100);
    const result = summarizeAttempt(fixtures, finishAttempt(a, now + 45_000));
    assert.equal(result.total, 30);
    assert.equal(result.correct, 10);
    assert.equal(result.wrong, 10);
    assert.equal(result.unanswered, 10);
    assert.equal(result.elapsedSeconds, 45);
    for (const key of ['total', 'correct', 'wrong', 'unanswered']) {
      assert.equal(Object.values(result.byCategory).reduce((sum, category) => sum + category[key], 0), result[key]);
    }
  });
  check('No speed bonus or weighted score: identical answers have identical count results', () => {
    const a = answerAttempt(fresh(), 0, fixtures[0].correct, now);
    const early = summarizeAttempt(fixtures, finishAttempt(a, now + 1000));
    const late = summarizeAttempt(fixtures, finishAttempt(a, now + 1000000));
    assert.deepEqual({ ...early, elapsedSeconds: 0 }, { ...late, elapsedSeconds: 0 });
    assert.deepEqual(Object.keys(early).sort(), ['byCategory', 'correct', 'elapsedSeconds', 'testScore', 'total', 'unanswered', 'wrong']);
  });
  check('Raw 0–100 performance uses all thirty questions, including unanswered items', () => {
    for (const [correct, expected] of [[24, 80], [0, 0], [30, 100], [1, 3]]) {
      let a = fresh();
      for (let index = 0; index < correct; index++) a = answerAttempt(a, index, fixtures[index].correct, now + 100);
      const result = summarizeAttempt(fixtures, finishAttempt(a, now + 1000));
      assert.equal(result.testScore, expected, `${correct}/30 raw test score`);
      assert.equal(result.unanswered, 30 - correct, 'Blanks stay in the score denominator');
    }
    let a = fresh();
    for (let index = 0; index < 24; index++) a = answerAttempt(a, index, fixtures[index].correct, now + 100);
    for (let index = 24; index < 30; index++) a = answerAttempt(a, index, (fixtures[index].correct + 1) % 4, now + 100);
    assert.equal(summarizeAttempt(fixtures, finishAttempt(a, now + 1000)).testScore, 80, 'Wrong answers have no negative weights');
  });
  check('Answer changes and clear preserve mapping and do not mutate earlier state', () => {
    const original = fresh();
    const selected = answerAttempt(original, 2, 3, now + 1000);
    const changed = answerAttempt(selected, 2, 1, now + 2000);
    const cleared = answerAttempt(changed, 2, null, now + 3000);
    assert.equal(original.answers[2], null);
    assert.equal(selected.answers[2], 3);
    assert.equal(changed.answers[2], 1);
    assert.equal(cleared.answers[2], null);
    assert.deepEqual(cleared.optionOrders, original.optionOrders);
  });
  check('Navigator clamps ends, supports jumps and preserves answers/options', () => {
    const answered = answerAttempt(fresh(), 15, 2, now + 5);
    const last = navigateAttempt(answered, 100, now + 10);
    assert.equal(last.currentIndex, 29);
    assert.equal(navigateAttempt(last, -5, now + 20).currentIndex, 0);
    assert.equal(navigateAttempt(last, 12, now + 20).currentIndex, 12);
    assert.equal(navigateAttempt(last, NaN, now + 20).currentIndex, 29);
    assert.equal(last.answers[15], 2);
    assert.deepEqual(last.optionOrders, answered.optionOrders);
  });
  check('Skipped questions remain unanswered, not silently wrong', () => {
    const a = navigateAttempt(fresh(), 29, now + 500);
    const result = summarizeAttempt(fixtures, finishAttempt(a, now + 1000));
    assert.equal(result.unanswered, 30);
    assert.equal(result.wrong, 0);
  });
  check('Elapsed countdown is based on time, not on number of interval ticks', () => {
    assert.equal(remainingSeconds(initial, now + 1), 1800);
    assert.equal(remainingSeconds(initial, now + 1000), 1799);
    assert.equal(remainingSeconds(initial, initial.deadline - 1), 1);
    const delayed = tickAttempt(initial, now + 15 * 60 * 1000);
    assert.equal(remainingSeconds(delayed, now + 15 * 60 * 1000), 900);
  });
  check('Background or suspended tab expires at the original deadline', () => {
    const expired = tickAttempt(initial, initial.deadline + 60 * 60 * 1000);
    assert.equal(expired.endReason, 'expired');
    assert.equal(expired.endedAt, initial.deadline);
    assert.equal(expired.lastSeenAt, initial.deadline);
    assert.equal(remainingSeconds(expired, initial.deadline + 60 * 60 * 1000), 0);
    assert.equal(summarizeAttempt(fixtures, expired).elapsedSeconds, 1800);
  });
  check('Answer at/after expiry cannot slip in before the next scheduled tick', () => {
    for (const at of [initial.deadline, initial.deadline + 1]) {
      const a = answerAttempt(initial, 0, fixtures[0].correct, at);
      assert.equal(a.answers[0], null);
      assert.equal(a.endReason, 'expired');
    }
    const justBefore = answerAttempt(initial, 0, fixtures[0].correct, initial.deadline - 1);
    assert.equal(justBefore.answers[0], fixtures[0].correct);
  });
  check('Expiry also guards navigation and finish', () => {
    assert.equal(navigateAttempt(initial, 5, initial.deadline).currentIndex, 0);
    assert.equal(navigateAttempt(initial, 5, initial.deadline).endReason, 'expired');
    assert.equal(finishAttempt(initial, initial.deadline).endReason, 'expired');
  });
  check('Finish is idempotent and locks answers/clock', () => {
    const done = finishAttempt(initial, now + 5000);
    assert.equal(done.endReason, 'submitted');
    assert.equal(done.endedAt, now + 5000);
    assert.strictEqual(finishAttempt(done, now + 6000), done);
    assert.strictEqual(answerAttempt(done, 0, 1, now + 6000), done);
    assert.strictEqual(tickAttempt(done, now + 60_000), done);
    assert.strictEqual(navigateAttempt(done, 5, now + 60_000), done);
    assert.equal(remainingSeconds(done, now + 6000), 0);
  });
  check('Refresh restores answer, active index and stable shuffle without restarting time', () => {
    let a = answerAttempt(fresh(), 6, 2, now + 1000);
    a = navigateAttempt(a, 11, now + 2000);
    const restored = roundTrip(a, now + 60_000);
    assert.equal(restored.issue, null);
    assert.equal(restored.attempt.startedAt, now);
    assert.equal(restored.attempt.deadline, initial.deadline);
    assert.equal(restored.attempt.currentIndex, 11);
    assert.equal(restored.attempt.answers[6], 2);
    assert.deepEqual(restored.attempt.optionOrders, a.optionOrders);
    assert.equal(remainingSeconds(restored.attempt, now + 60_000), 1740);
  });
  check('Refresh after expiry produces result rather than a fresh timer', () => {
    const restored = roundTrip(initial, initial.deadline + 10000);
    assert.equal(restored.attempt.endReason, 'expired');
    assert.equal(restored.attempt.endedAt, initial.deadline);
    assert.equal(summarizeAttempt(fixtures, restored.attempt).unanswered, 30);
  });
  check('Completed results survive reload unchanged', () => {
    const done = finishAttempt(answerAttempt(initial, 9, 3, now + 2), now + 54321);
    assert.deepEqual(roundTrip(done, now + DURATION_MS * 5).attempt, done);
  });
  check('Clock rollback terminates rather than extending duration', () => {
    const active = tickAttempt(initial, now + 10000);
    const ended = tickAttempt(active, now + 9999);
    assert.equal(ended.endReason, 'clock-changed');
    assert.equal(ended.endedAt, now + 10000);
    assert.equal(ended.deadline, initial.deadline);
    assert.equal(remainingSeconds(active, now + 9999), 0);
    const restored = roundTrip(active, now + 9000);
    assert.equal(restored.attempt.endReason, 'clock-changed');
    assert.match(restored.issue, /saati/);
    assert.equal(answerAttempt(active, 0, 1, now + 9000).answers[0], null);
  });
  check('Invalid runtime timestamps terminate active attempts safely', () => {
    for (const time of [NaN, Infinity, -1, 1.5]) assert.equal(tickAttempt(initial, time).endReason, 'clock-changed');
    for (const time of [NaN, Infinity, -1, 1.5, Number.MAX_SAFE_INTEGER]) assert.throws(() => createAttempt(fixtures, time));
  });
  check('Invalid answer inputs cannot enter persisted state', () => {
    for (const [index, choice] of [[-1, 0], [30, 0], [0.5, 0], [0, 4], [0, -1], [0, 1.5], [0, undefined]]) {
      assert.deepEqual(answerAttempt(initial, index, choice, now).answers, initial.answers);
    }
  });
  check('Absent save returns ordinary introduction, corrupted JSON returns clear restart notice', () => {
    assert.deepEqual(restoreAttempt(null, fixtures, now), { attempt: null, issue: null });
    for (const raw of ['', '{broken', 'null', '[]', '1', '{}', 'x'.repeat(100001)]) {
      const result = restoreAttempt(raw, fixtures, now);
      assert.equal(result.attempt, null);
      assert.match(result.issue, /Yeni bir deneme/);
    }
  });
  check('Strict persistence validation rejects version, chronology, shape and mapping corruption', () => {
    const corruptions = [
      (a) => { a.version = 0; }, (a) => { a.bankVersion = 'old-bank'; },
      (a) => { a.extra = 1; }, (a) => { delete a.startedAt; },
      (a) => { a.startedAt = 'now'; }, (a) => { a.deadline += 1; },
      (a) => { a.lastSeenAt = a.startedAt - 1; }, (a) => { a.lastSeenAt = a.deadline + 1; },
      (a) => { a.currentIndex = 30; }, (a) => { a.currentIndex = -1; },
      (a) => { a.currentIndex = 0.5; }, (a) => { a.answers.pop(); },
      (a) => { a.answers[0] = 4; }, (a) => { a.answers[0] = true; },
      (a) => { a.optionOrders.pop(); }, (a) => { a.optionOrders[0] = [0, 0, 2, 3]; },
      (a) => { a.optionOrders[0] = [0, 1, 2]; }, (a) => { a.optionOrders[0] = [0, 1, 2, 4]; },
      (a) => { a.optionOrders = {}; }, (a) => { a.answers = {}; },
      (a) => { a.endReason = 'submitted'; }, (a) => { a.endedAt = now + 500; },
      (a) => { a.endedAt = a.lastSeenAt; a.endReason = 'expired'; },
      (a) => { a.endedAt = a.lastSeenAt = a.deadline; a.endReason = 'submitted'; },
      (a) => { a.lastSeenAt = a.deadline; },
      (a) => { a.optionOrders = fixtures.map((q) => [q.correct, ...[0, 1, 2, 3].filter((n) => n !== q.correct)]); },
    ];
    corruptions.forEach((corrupt, index) => {
      const a = JSON.parse(JSON.stringify(initial)); corrupt(a);
      assert.equal(roundTrip(a, now + DURATION_MS).attempt, null, `corruption ${index}`);
    });
    const raw = JSON.stringify(initial).replace(/}$/, ',"__proto__":{"polluted":true}}');
    assert.equal(restoreAttempt(raw, fixtures, now).attempt, null);
    assert.equal({}.polluted, undefined);
  });
  check('Edited question text/options/bank cannot reinterpret old answers', () => {
    for (const edit of [(q) => { q.id += 'x'; }, (q) => { q.options[0].label += 'x'; }, (q) => { q.prompt = 'updated'; }]) {
      const changed = JSON.parse(JSON.stringify(fixtures)); edit(changed[0]);
      assert.notEqual(bankVersion(changed), bankVersion(fixtures));
      assert.equal(restoreAttempt(JSON.stringify(initial), changed, now).attempt, null);
    }
  });
  check('Malformed question banks and random sources fail before starting', () => {
    assert.throws(() => createAttempt([], now));
    assert.throws(() => createAttempt([fixtures[0], fixtures[0]], now));
    assert.throws(() => createAttempt([{ ...fixtures[0], options: [0, 1, 2] }], now));
    assert.throws(() => createAttempt([{ ...fixtures[0], correct: 4 }], now));
    for (const value of [-1, 1, Infinity, NaN]) assert.throws(() => createAttempt(fixtures, now, () => value));
  });

  const { questions, practiceQuestions, categories } = load('app/data/questions.ts');
  check('Original adult bank has thirty main and two separate unscored practice items', () => {
    assert.equal(questions.length, 30);
    assert.equal(practiceQuestions.length, 2);
    assert.equal(new Set([...questions, ...practiceQuestions].map((q) => q.id)).size, 32);
    assert.deepEqual(Object.keys(categories).sort(), ['matrix', 'rotation', 'sequence', 'spatial']);
    assert.equal(new Set(questions.map((q) => q.category)).size, 4);
  });
  check('Every item has a valid key, four distinct visual options, Turkish prompt and explanation', () => {
    const baseCounts = [0, 0, 0, 0];
    for (const q of [...questions, ...practiceQuestions]) {
      assert.equal(typeof q.id, 'string');
      assert.equal(q.options.length, 4, q.id);
      assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id);
      assert(categories[q.category], q.id);
      assert(q.prompt.length >= 15 && q.explanation.length >= 30, q.id);
      assert(q.figure && typeof q.figure === 'object', q.id);
      assert(q.options.every((option) => option.figure && typeof option.label === 'string' && option.label.length > 2), q.id);
      assert.equal(new Set(q.options.map((option) => JSON.stringify({ columns: option.figure.columns, sequence: option.figure.sequence, cells: option.figure.cells.map((cell) => cell && cell.elements) }))).size, 4, q.id + ': distinct source figures');
      if (questions.includes(q)) baseCounts[q.correct]++;
    }
    assert.deepEqual([...baseCounts].sort(), [7, 7, 8, 8]);
  });
  check('Real bank can start/resume and yields correct raw/category totals without practice contamination', () => {
    let a = createAttempt(questions, now, seeded(91));
    questions.forEach((q, index) => { a = answerAttempt(a, index, q.correct, now + index); });
    const done = finishAttempt(a, now + 100000);
    assert.deepEqual(restoreAttempt(JSON.stringify(done), questions, now + DURATION_MS).attempt, done);
    const result = summarizeAttempt(questions, done);
    assert.equal(result.correct, 30);
    assert.equal(result.total, 30);
    assert.equal(Object.values(result.byCategory).reduce((sum, value) => sum + value.total, 0), 30);
  });
  console.log(`Visual reasoning: ${checks} unit/data checks passed (100 shuffled attempts, timing/resume/corruption/navigation/counts and 32-item structure).`);
  return { checks, questions: questions.length, practice: practiceQuestions.length };
}

if (require.main === module) {
  try { validateVisualReasoning(); } catch (error) { console.error(error); process.exitCode = 1; }
}
module.exports = { validateVisualReasoning };
