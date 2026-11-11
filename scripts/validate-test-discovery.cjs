#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const { ROOT, createSourceLoader, collectRouteData } = require('./validate-seo.cjs');

async function validateTestDiscovery(root = ROOT) {
  const load = createSourceLoader(root);
  const { catalog, generic, indexable } = await collectRouteData(load);
  const navigation = load('lib/test-navigation.ts');
  const { isPersonalTestId } = load('lib/test-types.ts');
  const expected = catalog.filter((test) => test.id === test.canonicalId && test.questionCount > 0 && !isPersonalTestId(test.id));
  const groups = navigation.groupCanonicalTests(catalog);
  const listed = groups.flatMap((group) => group.tests);
  const listedIds = listed.map((test) => test.id);
  const expectedIds = new Set(expected.map((test) => test.id));
  assert(expected.length > 0, 'The real test catalog must not be empty');
  assert.equal(listedIds.length, new Set(listedIds).size, 'Each canonical test has exactly one catalog card');
  assert.deepEqual([...listedIds].sort(), [...expectedIds].sort(), 'The catalog must cover every published canonical generic test');
  assert(indexable.has('/testler'), 'The discovery hub is an indexable sitemap page');
  assert.equal(new Set(groups.map((group) => group.category.anchor)).size, groups.length, 'Category anchors are unique');
  for (const group of groups) {
    assert(group.tests.length, 'Do not publish empty category sections');
    assert.equal(group.questionCount, group.tests.reduce((sum, test) => sum + test.questionCount, 0), `${group.category.key}: question total agrees with actual tests`);
    for (const test of group.tests) {
      assert.equal(navigation.getTestCategory(test.id).key, group.category.key, `${test.id}: correct category`);
      assert(indexable.has(`/test/${test.id}`), `${test.id}: catalog links to an indexable canonical URL`);
      const actual = await generic.getTestData(test.id);
      assert(actual && actual.questions.length === test.questionCount, `${test.id}: real data and displayed question count agree`);
    }
  }

  const previouslyUnlinked = [
    ...Array.from({ length: 20 }, (_, i) => `yks-sozel-deneme-${i + 11}`),
    ...Array.from({ length: 11 }, (_, i) => `kpss-sozel-${i + 11}`),
    ...Array.from({ length: 4 }, (_, i) => `lgs-test-${i + 1}`),
  ];
  for (const id of previouslyUnlinked) assert(listedIds.includes(id), `${id}: previously unlinked valid test has a catalog entry`);
  for (const test of catalog.filter((entry) => entry.id !== entry.canonicalId)) assert(!listedIds.includes(test.id), `${test.id}: duplicate alias must not have its own card`);
  for (const id of ['dus-deneme-18', 'dus-deneme-19', 'dus-deneme-20', 'gy-karma-1234567890']) assert(!listedIds.includes(id), `${id}: empty or private content is not discoverable as a public test`);

  const fixture = expected[0];
  const pollutedCatalog = [
    ...catalog, fixture,
    { ...fixture, id: 'empty-fixture', canonicalId: 'empty-fixture', questionCount: 0 },
    { ...fixture, id: 'gy-karma-1234567890', canonicalId: 'gy-karma-1234567890' },
    { ...fixture, id: '../invalid-fixture', canonicalId: '../invalid-fixture' },
  ];
  assert.deepEqual(navigation.groupCanonicalTests(pollutedCatalog).flatMap((group) => group.tests.map((test) => test.id)), listedIds, 'Duplicate, empty, private and invalid inputs cannot introduce public links');

  let relatedLinks = 0;
  for (const test of catalog) {
    const related = navigation.getRelatedTests(catalog, test.id);
    const ids = related.map((entry) => entry.id);
    assert(ids.length <= 6, `${test.id}: related navigation stays bounded`);
    assert.equal(ids.length, new Set(ids).size, `${test.id}: related links are unique`);
    assert(!ids.includes(test.canonicalId), `${test.id}: related links exclude the current canonical page`);
    for (const item of related) {
      assert(expectedIds.has(item.id), `${test.id}: related target is a valid canonical test`);
      assert.equal(item.id, item.canonicalId, `${test.id}: no duplicate aliases in related links`);
      assert.equal(navigation.getTestCategory(item.id).key, navigation.getTestCategory(test.canonicalId).key, `${test.id}: related tests remain in the same subject category`);
    }
    const parent = navigation.getTestParent(test.canonicalId);
    assert(indexable.has(parent.breadcrumbPath), `${test.id}: breadcrumb parent exists in the indexable registry`);
    assert(!/[?#]/.test(parent.breadcrumbPath), `${test.id}: structured breadcrumb uses a page URL without fragments`);
    if (parent.href.includes('#')) {
      const [pathname, anchor] = parent.href.split('#');
      assert.equal(pathname, '/testler', `${test.id}: fragment parent is the catalog`);
      assert(groups.some((group) => group.category.anchor === anchor), `${test.id}: catalog parent anchor exists`);
    } else assert(indexable.has(parent.href), `${test.id}: parent link is a published hub`);
    relatedLinks += related.length;
  }
  assert.deepEqual(navigation.getRelatedTests(catalog, 'unknown-discovery-test'), [], 'Missing content has no related links');
  assert.deepEqual(navigation.getRelatedTests(catalog, expected[0].id, 0), [], 'Zero requested related links stays empty');
  return {
    status: 'passed', layer: 'source/data discovery contracts', loader: load.engine,
    canonicalTests: listed.length, categories: groups.length, previouslyUnlinkedTestsCovered: previouslyUnlinked.length,
    duplicateAliasesExcluded: catalog.length - expected.length, relatedLinksChecked: relatedLinks,
    limitations: ['Checks the source registry and navigation policy; validate-seo-build.cjs separately checks real rendered HTML links.', 'Does not determine whether Google has indexed any URL.'],
  };
}

module.exports = { validateTestDiscovery };
if (require.main === module) validateTestDiscovery().then((report) => console.log(JSON.stringify(report, null, 2))).catch((error) => {
  console.error(`Test discovery validation failed: ${error.stack || error}`);
  process.exitCode = 1;
});
