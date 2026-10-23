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
assert.equal(routes.length, 17);
assert.equal(new Set(routes).size, routes.length);
assert.equal(grade6.getGrade6Subject('invalid-subject'), undefined);
assert.equal(grade6.getGrade6Test('matematik', 'test-999'), undefined);
const sitemapUrls = new Set(sitemap.map((entry) => entry.url));
assert.equal(sitemapUrls.size, sitemap.length, 'Duplicate sitemap URL');
assert.equal(sitemap.filter((entry) => entry.url.includes('/6-sinif')).length, 17);
for (const route of routes) {
  const url = `${grade6.canonicalBase}${route}`;
  assert(sitemapUrls.has(url), `Missing sitemap entry: ${route}`);
  const file = path.resolve('.next/server/app', `${route.slice(1)}.html`);
  assert(fs.existsSync(file), `Missing generated page (run npm run build first): ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert(html.includes(`<link rel="canonical" href="${url}"`), `Wrong canonical: ${route}`);
  assert(html.includes('maximum-scale=5'), `Mobile zoom disabled: ${route}`);
  if (route.includes('/test-')) {
    assert.equal((html.match(/aria-pressed="false"/g) || []).length, 4, `Expected four options: ${route}`);
    assert(html.includes('aria-valuemax="10"'), `Wrong question count: ${route}`);
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
grade6.grade6Data.matematik.term1.test4 = grade6.grade6Data.matematik.term1.test1;
grade6.grade6Data.matematik.term2.test1 = grade6.grade6Data.matematik.term1.test1;
const expanded = grade6.getGrade6Tests('matematik');
assert(oldSlugs.every((slug) => expanded.some((test) => test.slug === slug)));
assert(expanded.some((test) => test.slug === '2-donem-test-1'));
console.log('PASS: 17 generated grade-6 pages and sitemap URLs, homepage link, canonical URLs, mobile zoom, quiz markup, stable test URLs, and existing grade-5 sitemap entries. Browser interactions are not covered.');
