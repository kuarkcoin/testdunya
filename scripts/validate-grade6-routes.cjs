const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

require.extensions['.ts'] = (module, filename) => module._compile(
  ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017, esModuleInterop: true },
  }).outputText,
  filename,
);

const grade6 = require('../app/data/grade6/seo.ts');
const grade5 = require('../app/data/grade5/seo.ts');
const sitemap = require('../app/sitemap.ts').default();
const routes = [
  '/6-sinif',
  ...grade6.getGrade6SubjectParams().map(({ subject }) => `/6-sinif/${subject}`),
  ...grade6.getGrade6TestParams().map(({ subject, testSlug }) => `/6-sinif/${subject}/${testSlug}`),
];
const tests = grade6.grade6Subjects.flatMap((subject) => grade6.getGrade6Tests(subject.id));
assert.equal(routes.length, 1 + grade6.grade6Subjects.length + tests.length);
assert.equal(new Set(routes).size, routes.length);
assert.equal(grade6.getGrade6Subject('invalid-subject'), undefined);
assert.equal(grade6.getGrade6Test('matematik', 'test-999'), undefined);
const sitemapUrls = new Set(sitemap.map((entry) => entry.url));
assert.equal(sitemapUrls.size, sitemap.length, 'Duplicate sitemap URL');
assert.equal(sitemap.filter((entry) => entry.url.includes('/6-sinif')).length, routes.length);
for (const route of routes) {
  const url = `${grade6.canonicalBase}${route}`;
  assert(sitemapUrls.has(url), `Missing sitemap entry: ${route}`);
  const file = path.resolve('.next/server/app', `${route.slice(1)}.html`);
  assert(fs.existsSync(file), `Missing generated page (run npm run build first): ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert(html.includes(`<link rel="canonical" href="${url}"`), `Wrong canonical: ${route}`);
  assert(html.includes('maximum-scale=5'), `Mobile zoom disabled: ${route}`);
  const test = tests.find((item) => route === `/6-sinif/${item.subject.id}/${item.slug}`);
  if (test) {
    assert.equal((html.match(/aria-pressed="false"/g) || []).length, 4, `Expected four options: ${route}`);
    assert(html.includes(`aria-valuemax="${test.questions.length}"`), `Wrong question count: ${route}`);
    const firstQuestion = test.questions[0];
    if (firstQuestion.imageUrl) {
      assert(html.includes(`src="${firstQuestion.imageUrl}"`), `Missing initial diagram: ${route}`);
      assert(html.includes('aria-label="Soru görselini büyüt"'), `Missing image zoom trigger: ${route}`);
      assert(html.includes('aria-describedby="grade6-image-description"'), `Missing accessible zoom description: ${route}`);
      const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      assert(html.includes(`alt="${escapeHtml(firstQuestion.imageAlt)}"`), `Missing diagram description: ${route}`);
      assert(html.includes(`width="${firstQuestion.imageWidth}" height="${firstQuestion.imageHeight}"`), `Wrong diagram aspect ratio: ${route}`);
    }
  }
}
for (const subject of grade5.grade5Subjects) {
  assert(sitemapUrls.has(`${grade6.canonicalBase}/5-sinif/${subject.id}`));
  for (const test of grade5.getGrade5Tests(subject.id)) {
    assert(sitemapUrls.has(`${grade6.canonicalBase}/5-sinif/${subject.id}/${test.slug}`), 'Existing grade-5 URL missing');
  }
}
const home = fs.readFileSync('.next/server/app/index.html', 'utf8');
assert(home.includes('href="/6-sinif"'), 'Homepage grade-6 link missing');
assert(home.includes('href="/5-sinif"'), 'Existing homepage grade-5 link missing');

// Existing links stay stable when new questions are added to either term.
const oldSlugs = grade6.getGrade6Tests('matematik').map((test) => test.slug);
const math = grade6.grade6Data.matematik;
const nextKey = (term) => `test${Math.max(0, ...Object.keys(term).map((key) => Number(key.slice(4))).filter(Number.isFinite)) + 1}`;
const term1Key = nextKey(math.term1);
const term2Key = nextKey(math.term2);
try {
  math.term1[term1Key] = math.term1.test1;
  math.term2[term2Key] = math.term1.test1;
  const expanded = grade6.getGrade6Tests('matematik');
  assert(oldSlugs.every((slug) => expanded.some((test) => test.slug === slug)));
  assert(expanded.some((test) => test.slug === `test-${term1Key.slice(4)}`));
  assert(expanded.some((test) => test.slug === `2-donem-test-${term2Key.slice(4)}`));
} finally {
  delete math.term1[term1Key];
  delete math.term2[term2Key];
}
console.log(`PASS: ${routes.length} generated grade-6 pages and sitemap URLs, homepage link, canonical URLs, mobile zoom, quiz and diagram markup, stable test URLs, and existing grade-5 sitemap entries. Browser interactions are not covered.`);
