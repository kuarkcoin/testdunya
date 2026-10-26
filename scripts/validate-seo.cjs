#!/usr/bin/env node
'use strict';

// Source/data checks only. Real Next metadata inheritance, rendering, status codes
// and redirects are checked separately by validate-seo-build.cjs after next build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createRequire, stripTypeScriptTypes } = require('node:module');
const { execFileSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');

function createSourceLoader(root = ROOT) {
  const cache = new Map();
  const projectRequire = createRequire(path.join(root, 'package.json'));
  let ts;
  try { ts = projectRequire('typescript'); } catch { /* Node 24 supports a dependency-free source check. */ }
  if (!ts && !stripTypeScriptTypes) throw new Error('Install project dependencies or use Node 24 for source validation.');

  function resolveFile(request, parent) {
    const base = path.resolve(path.dirname(parent), request);
    const filename = [base, `${base}.ts`, `${base}.json`, path.join(base, 'index.ts')]
      .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
    if (!filename) throw new Error(`Cannot resolve ${request} from ${parent}`);
    return filename;
  }

  function requireFrom(request, parent) {
    if (request === 'server-only') return {};
    // Source checks run outside React's server dispatcher; disabling memoization
    // exercises the real I/O and normalization functions on every call.
    if (request === 'react') return { cache: (fn) => fn };
    if (request === 'next') return {}; // Type-only metadata namespaces in older source files.
    if (request === 'next/navigation') return {
      notFound() { throw Object.assign(new Error('NEXT_NOT_FOUND'), { code: 'NEXT_NOT_FOUND' }); },
    };
    if (request.startsWith('node:')) return require(request);
    if (!request.startsWith('.')) throw new Error(`Unexpected runtime import in source-only check: ${request}`);
    return load(resolveFile(request, parent));
  }

  function load(filename) {
    filename = path.resolve(root, filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    if (filename.endsWith('.json')) return JSON.parse(fs.readFileSync(filename, 'utf8'));
    assert.equal(path.extname(filename), '.ts', `Source loader deliberately does not execute JSX: ${filename}`);
    const module = { exports: {} };
    cache.set(filename, module);
    const source = fs.readFileSync(filename, 'utf8');
    let code;
    if (ts) {
      code = ts.transpileModule(source, { fileName: filename, compilerOptions: {
        module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true,
      } }).outputText;
    } else {
      code = stripTypeScriptTypes(source, { mode: 'strip', sourceUrl: filename });
      const exported = [];
      code = code.replace(/^\s*import\s+(['"])([^'"]+)\1\s*;?/gm, (_, quote, specifier) => `require(${JSON.stringify(specifier)});`);
      code = code.replace(/^\s*import\s+([\s\S]*?)\s+from\s+(['"])([^'"]+)\2\s*;?/gm, (_, bindings, quote, specifier) => {
        const request = `require(${JSON.stringify(specifier)})`;
        bindings = bindings.trim();
        if (bindings.startsWith('{')) {
          return `const ${bindings.replace(/\bas\b/g, ':')} = ${request};`;
        }
        if (bindings.startsWith('* as ')) return `const ${bindings.slice(5)} = ${request};`;
        assert.match(bindings, /^[\w$]+$/, `Unsupported import in ${filename}: ${bindings}`);
        return `const ${bindings} = (() => { const value = ${request}; return value.default ?? value; })();`;
      });
      code = code.replace(/\bexport\s+default\s+/g, 'module.exports.default = ');
      code = code.replace(/\bexport\s+(async\s+)?(function|const|let|var|class)\s+(\w+)/g, (_, async, kind, name) => {
        exported.push(name);
        return `${async || ''}${kind} ${name}`;
      });
      code = code.replace(/^\s*export\s*\{([^}]+)\}\s*;?/gm, (_, names) => names.split(',').map((entry) => {
        const [local, exposed = local] = entry.trim().split(/\s+as\s+/);
        return `module.exports[${JSON.stringify(exposed)}] = ${local};`;
      }).join('\n'));
      assert(!/^\s*(?:import|export)\b/m.test(code), `Unhandled module syntax: ${filename}`);
      code += `\nObject.assign(module.exports, { ${exported.join(', ')} });`;
    }
    const run = new vm.Script(`(function(require,module,exports,__filename,__dirname){\n${code}\n})`, { filename }).runInThisContext();
    run((request) => requireFrom(request, filename), module, module.exports, filename, path.dirname(filename));
    return module.exports;
  }
  load.engine = ts ? `TypeScript ${ts.version} transpileModule (not type checking)` : 'Node stripTypeScriptTypes (not type checking)';
  return load;
}

function listFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(filename) : [filename];
  });
}

async function collectRouteData(load = createSourceLoader()) {
  const seo = load('lib/seo.ts');
  const staticSeo = load('lib/seo-pages.ts');
  const grade5 = load('app/data/grade5/seo.ts');
  const grade6 = load('app/data/grade6/seo.ts');
  const generic = load('lib/test-data.ts');
  const catalog = await generic.getTestCatalog();
  const chess = load('public/data/satranc-testleri.json').tests.filter((test) => test.questions?.length);
  const games = load('components/turkce-oyunlari/turkce-games-config.ts').TURKCE_GAMES_CONFIG;
  const subjects = await load('app/gorevde-yukselme/data.ts').getGorevdeSubjects();
  const indexable = new Set(staticSeo.STATIC_SEO_PAGES.filter((page) => page.index !== false).map((page) => page.path));
  const dynamic = new Set();
  function add(route) { indexable.add(route); dynamic.add(route); }
  for (const [grade, registry] of [[5, grade5], [6, grade6]]) {
    for (const subject of registry[`grade${grade}Subjects`]) {
      add(`/${grade}-sinif/${subject.id}`);
      for (const test of registry[`getGrade${grade}Tests`](subject.id)) add(`/${grade}-sinif/${subject.id}/${test.slug}`);
    }
  }
  for (const test of catalog) if (test.id === test.canonicalId) add(`/test/${test.id}`);
  for (const test of chess) add(`/chess-tests/${test.id}`);
  for (const game of games) add(`/turkce-oyunlari/${game.slug}`);
  for (const subject of subjects) if (subject.tests.length) add(`/gorevde-yukselme/${subject.slug}`);
  return { seo, staticSeo, grade5, grade6, generic, catalog, chess, games, subjects, indexable, dynamic };
}

function validateMetadata(metadata, pathname, index, seo) {
  assert.equal(typeof metadata.title, 'string', `${pathname}: page title`);
  assert(metadata.title.trim().length > 2, `${pathname}: meaningful title`);
  assert(!metadata.title.includes('| TestDünya'), `${pathname}: root template supplies the brand once`);
  assert.equal(typeof metadata.description, 'string', `${pathname}: description`);
  assert(metadata.description.trim().length >= 30, `${pathname}: meaningful description`);
  const canonical = seo.absoluteUrl(pathname);
  assert.equal(metadata.alternates.canonical, canonical, `${pathname}: canonical`);
  assert.equal(metadata.openGraph.url, canonical, `${pathname}: OG URL must not inherit home`);
  assert.equal(metadata.openGraph.description, metadata.description, `${pathname}: OG description`);
  assert.equal(metadata.openGraph.title, `${metadata.title} | ${seo.SITE_NAME}`, `${pathname}: OG title`);
  assert.equal(metadata.twitter.title, metadata.openGraph.title, `${pathname}: Twitter title`);
  assert.equal(metadata.twitter.card, 'summary_large_image', `${pathname}: social preview`);
  assert.equal(metadata.openGraph.images[0].url, seo.SOCIAL_IMAGE.url);
  if (index === false) {
    assert.equal(metadata.robots.index, false, `${pathname}: noindex`);
    assert.equal(metadata.robots.googleBot.index, false, `${pathname}: Google noindex override`);
    assert.equal(metadata.robots.follow, true, `${pathname}: follow links`);
  } else {
    assert.notEqual(metadata.robots?.index, false, `${pathname}: public content index policy`);
  }
}

function stableGrade5Routes(registry) {
  const summarize = (subject) => registry.getGrade5Tests(subject).map((test) => ({
    subject, term: test.term, originalKey: test.originalKey, testNo: test.testNo, slug: test.slug,
    questionIds: test.questions.map((question) => question.id), questionCount: test.questions.length, hasImages: test.hasImages,
  }));
  const original = registry.grade5Subjects.flatMap(({ id }) => summarize(id));
  if (process.env.SEO_GRADE5_BASELINE) {
    const baseline = JSON.parse(fs.readFileSync(process.env.SEO_GRADE5_BASELINE, 'utf8'));
    assert.deepEqual(original, baseline.mapping, 'Published grade5 URLs and question identities changed');
  }
  for (const { id } of registry.grade5Subjects) {
    const before = summarize(id);
    const data = registry.grade5Data[id];
    const key = 'test99999';
    assert(!(key in data.term1), 'Temporary regression key must be unused');
    data.term1[key] = [registry.getGrade5Tests(id)[0].questions[0]];
    try {
      const after = summarize(id);
      assert.equal(after.length, before.length + 1);
      assert.equal(new Set(after.map((test) => test.slug)).size, after.length);
      for (const oldTest of before) {
        assert.deepEqual(after.find((test) => test.term === oldTest.term && test.originalKey === oldTest.originalKey), oldTest,
          `${id}: adding a term1 test must not change an already published URL`);
      }
    } finally { delete data.term1[key]; }
  }
  return original.length;
}

function verifyBaselineData(root) {
  const ref = process.env.SEO_BASELINE_REF;
  if (!ref) return { status: 'not requested', instruction: 'Set SEO_BASELINE_REF to compare original question-data bytes with a git revision.' };
  const files = execFileSync('git', ['ls-tree', '-r', '--name-only', ref, '--', 'app/data', 'public/data'], { cwd: root, encoding: 'utf8' })
    .trim().split('\n').filter((name) => name && !/\/seo\.ts$/.test(name));
  for (const filename of files) {
    const before = execFileSync('git', ['show', `${ref}:${filename}`], { cwd: root, maxBuffer: 20 * 1024 * 1024 });
    assert(before.equals(fs.readFileSync(path.join(root, filename))), `Question data changed: ${filename}`);
  }
  return { status: 'passed', revision: ref, files: files.length };
}

async function validateSource(root = ROOT) {
  process.chdir(root);
  const load = createSourceLoader(root);
  const data = await collectRouteData(load);
  const { seo, staticSeo, grade5, grade6, generic, catalog, chess, games, indexable, dynamic } = data;
  assert.equal(seo.SITE_URL, 'https://testdunya.net');
  for (const invalid of ['https://other.example', '//other.example', '/\\other.example', '/test?id=1', '/test#answer']) {
    assert.throws(() => seo.absoluteUrl(invalid), undefined, `Reject unsafe canonical path ${invalid}`);
  }
  assert.equal(seo.absoluteUrl('/6-sinif/fen/test-12'), 'https://testdunya.net/6-sinif/fen/test-12');
  const dangerous = { text: 'Türkçe "alıntı"\n</script><script>alert(1)</script>\u2028\u2029&', nested: ['a', 12] };
  const serialized = seo.serializeJsonLd(dangerous);
  assert.deepEqual(JSON.parse(serialized), dangerous, 'Safe JSON-LD serialization must preserve the payload');
  assert(!serialized.includes('<') && !serialized.includes('\u2028') && !serialized.includes('\u2029'), 'JSON-LD cannot escape its script element');
  assert.throws(() => seo.serializeJsonLd(undefined));
  const crumbs = seo.breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: '6. Sınıf', path: '/6-sinif' }]);
  assert.equal(crumbs['@type'], 'BreadcrumbList');
  assert.deepEqual(crumbs.itemListElement.map((item) => [item.position, item.item]), [[1, seo.absoluteUrl('/')], [2, seo.absoluteUrl('/6-sinif')]]);

  assert.equal(new Set(staticSeo.STATIC_SEO_PAGES.map((page) => page.path)).size, staticSeo.STATIC_SEO_PAGES.length, 'Unique static page policies');
  for (const page of staticSeo.STATIC_SEO_PAGES) {
    const directory = path.join(root, 'app', page.path.slice(1));
    const filename = path.join(directory, 'page.tsx');
    assert(fs.existsSync(filename), `${page.path}: static policy must have a real page`);
    const pageSource = fs.readFileSync(filename, 'utf8');
    const layoutFile = path.join(directory, 'layout.tsx');
    const source = pageSource + (fs.existsSync(layoutFile) ? fs.readFileSync(layoutFile, 'utf8') : '');
    const usesStaticPolicy = source.includes(`getStaticPageMetadata('${page.path}')`) || source.includes(`getStaticPageMetadata("${page.path}")`);
    const usesCustomMetadata = source.includes('createPageMetadata') && (source.includes(`path: '${page.path}'`) || source.includes(`path: "${page.path}"`));
    const usesGameMetadata = page.path.startsWith('/turkce-oyunlari/') && source.includes('getGamePageData');
    assert(usesStaticPolicy || usesCustomMetadata || usesGameMetadata, `${page.path}: page/layout must declare metadata for its route`);
    validateMetadata(staticSeo.getStaticPageMetadata(page.path), page.path, page.index, seo);
  }
  assert.equal(staticSeo.STATIC_SEO_PAGES.find((page) => page.path === '/mistakes').index, false);
  assert.equal(staticSeo.STATIC_SEO_PAGES.find((page) => page.path === '/gorevde-yukselme/karma').index, false);
  assert.notEqual(staticSeo.STATIC_SEO_PAGES.find((page) => page.path === '/dashboard').index, false, 'Dashboard is a public game hub, not personal results');

  const normalizer = load('lib/test-types.ts');
  const fixture = [{ id: 1, soru: 'Örnek soru', options: ['Bir', 'İki'], correct: 0, Açıklama: 'Çözüm' }];
  const beforeFixture = JSON.stringify(fixture);
  const normalized = normalizer.normalizeTestQuestions(fixture, 'fixture');
  assert.equal(JSON.stringify(fixture), beforeFixture, 'Normalization must not mutate source questions');
  assert.equal(normalized.questions[0].answer, 'A');
  assert.equal(normalized.questions[0].explanation, 'Çözüm');
  assert.deepEqual(normalized.questions[0].choices, [{ id: 'A', text: 'Bir' }, { id: 'B', text: 'İki' }]);
  assert.equal(normalizer.normalizeTestQuestions([{ question: 'No valid answer', options: ['a', 'b'] }], 'fixture').questions.length, 0);
  for (const invalid of ['../secret', '%2e%2e', 'a/b', 'a\\b', '', '.env', 'x?y', 'x#y']) {
    assert.equal(generic.isValidTestId(invalid), false, `Invalid test ID: ${invalid}`);
    assert.equal(await generic.getTestData(invalid), null);
  }
  assert.equal(await generic.getTestData('seo-validation-missing-test-918273'), null);
  assert.equal(await generic.getTestData('gy-karma-1234567890'), null, 'Personal tests never enter public catalog');
  assert.equal(new Set(catalog.map((test) => test.id)).size, catalog.length);
  for (const entry of catalog) {
    const test = await generic.getTestData(entry.id);
    assert(test && test.questions.length > 0, `${entry.id}: catalog needs real usable questions`);
    assert.equal(test.questionCount, test.questions.length);
    assert.equal(entry.questionCount, test.questionCount);
    assert.equal(entry.canonicalId, test.canonicalId);
    const canonicalTest = await generic.getTestData(test.canonicalId);
    assert(canonicalTest, `${entry.id}: canonical target has real content`);
    assert.equal(canonicalTest.canonicalId, canonicalTest.id, `${entry.id}: no canonical chains`);
    if (test.id !== test.canonicalId) {
      const comparable = (questions) => questions.map(({ id, ...question }) => question);
      assert.deepEqual(comparable(test.questions), comparable(canonicalTest.questions), `${entry.id}: only identical content can share a canonical`);
    }
    assert.equal(new Set(test.questions.map((question) => question.id)).size, test.questionCount);
    for (const question of test.questions) {
      assert(question.prompt.trim());
      assert(question.choices.length >= 2);
      assert(question.choices.some((choice) => choice.id === question.answer), `${entry.id}/${question.id}: answer maps to original option`);
    }
  }
  for (const [duplicate, canonical] of [['lgs-sozel-test-3', 'lgs-sozel-test-2'], ['lgs-sozel-test-4', 'lgs-sozel-test-2'], ['lgs-sayisal-test-3', 'lgs-sayisal-test-2'], ['lgs-sayisal-test-4', 'lgs-sayisal-test-2'], ['tus-deneme-31', 'tus-deneme-24'], ['tus-deneme-33', 'tus-deneme-24']]) {
    assert.equal((await generic.getTestData(duplicate)).canonicalId, canonical, `${duplicate}: preserved content duplicate policy`);
    assert(!indexable.has(`/test/${duplicate}`), `${duplicate}: duplicate excluded from sitemap`);
    assert(indexable.has(`/test/${canonical}`), `${canonical}: canonical included in sitemap`);
  }
  const paragraph = load('app/data/paragrafTests.ts');
  for (const test of paragraph.PARAGRAF_TESTS) {
    const payload = await generic.getTestData(test.dataId);
    assert(payload, `Paragraph data ID ${test.dataId} must resolve, not just its filename alias`);
    assert.equal(payload.questionCount, test.questionCount);
    assert.equal(payload.questions[0].prompt, paragraph.getParagrafTestQuestions(test.id)[0].prompt);
  }
  for (const id of ['lgs-sozel-test-1', 'lgs-sayisal-test-1', 'paragraf-test-1']) assert(await generic.getTestData(id), `Representative quiz ${id}`);

  const grade5StableTests = stableGrade5Routes(grade5);
  const gradeCounts = {};
  for (const [grade, registry] of [[5, grade5], [6, grade6]]) {
    const tests = registry[`grade${grade}Subjects`].flatMap(({ id }) => registry[`getGrade${grade}Tests`](id));
    gradeCounts[grade] = { tests: tests.length, questions: tests.reduce((sum, test) => sum + test.questions.length, 0) };
    assert.equal(registry[`getGrade${grade}TestParams`]().length, tests.length);
    for (const subject of registry[`grade${grade}Subjects`]) {
      const subjectTests = registry[`getGrade${grade}Tests`](subject.id);
      assert.equal(new Set(subjectTests.map((test) => test.slug)).size, subjectTests.length);
      for (const test of subjectTests) assert.deepEqual(registry[`getGrade${grade}Test`](subject.id, test.slug), test, `${grade}/${subject.id}/${test.slug}: detail payload matches listing`);
      assert.equal(registry[`getGrade${grade}Test`](subject.id, 'test-999999'), undefined);
    }
  }

  const sitemap = await load('app/sitemap.ts').default();
  const sitemapPaths = sitemap.map((entry) => {
    const url = new URL(entry.url);
    assert.equal(url.origin, seo.SITE_URL, `Sitemap origin: ${entry.url}`);
    assert(!url.search && !url.hash, `Sitemap is canonical: ${entry.url}`);
    assert.equal(entry.url, seo.absoluteUrl(url.pathname));
    assert(!('lastModified' in entry), 'A build time is not a content modification date');
    return url.pathname;
  });
  assert.equal(new Set(sitemapPaths).size, sitemapPaths.length, 'No duplicate sitemap URLs');
  assert.deepEqual([...sitemapPaths].sort(), [...indexable].sort(), 'Sitemap matches actual indexable static pages and valid dynamic content exactly');
  for (const route of ['/mistakes', '/gorevde-yukselme/karma', '/yks', '/kpss', '/tus', '/dus', '/hmgs', '/8-sinif-lgs', '/paragraf/test-1', '/zeka-bulmacalari/test-1', '/test/gy-karma-1234567890']) assert(!indexable.has(route), `Exclude noncanonical, empty or personal route ${route}`);
  for (const route of indexable) {
    if (dynamic.has(route)) continue;
    assert(fs.existsSync(path.join(root, 'app', route, 'page.tsx')), `Sitemap route has no static page: ${route}`);
  }
  for (const filename of ['app/5-sinif/[subject]/[testSlug]/page.tsx', 'app/6-sinif/[subject]/[testSlug]/page.tsx', 'app/test/[testId]/page.tsx', 'app/chess-tests/[testId]/page.tsx', 'app/turkce-oyunlari/[slug]/page.tsx', 'app/gorevde-yukselme/[subject]/page.tsx']) {
    const source = fs.readFileSync(path.join(root, filename), 'utf8');
    assert(/generateMetadata/.test(source), `${filename}: server metadata entry`);
    assert(/notFound|getGamePageData/.test(source), `${filename}: validates unknown dynamic IDs`);
    assert(!/^\s*['"]use client['"]/m.test(source), `${filename}: server route wrapper`);
  }
  const robots = load('app/robots.ts').default();
  assert.equal(robots.sitemap, seo.absoluteUrl('/sitemap.xml'));
  const general = robots.rules.find((rule) => rule.userAgent === '*');
  assert.equal(general.allow, '/');
  for (const route of [...indexable, '/mistakes', '/gorevde-yukselme/karma']) {
    assert(!(general.disallow || []).some((prefix) => route.startsWith(prefix)), `${route}: crawling must allow reading its index/noindex policy`);
  }
  const blockedBots = robots.rules.flatMap((rule) => (rule.disallow || []).includes('/') ? [].concat(rule.userAgent) : []);
  for (const bot of ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'Google-Extended', 'CCBot', 'anthropic-ai']) assert(blockedBots.includes(bot), `Preserve bot policy: ${bot}`);

  const schemaSources = listFiles(path.join(root, 'app')).filter((filename) => /\.(tsx|ts)$/.test(filename)).filter((filename) => fs.readFileSync(filename, 'utf8').includes('application/ld+json'));
  for (const filename of schemaSources) {
    const source = fs.readFileSync(filename, 'utf8');
    assert(source.includes('serializeJsonLd'), `${filename}: safe JSON-LD boundary`);
    assert(!/__html\s*:\s*JSON\.stringify/.test(source), `${filename}: raw JSON can terminate a script element`);
  }
  assert(!fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8').includes('SearchAction'), 'Do not advertise a nonexistent search route');
  return {
    status: 'passed', layer: 'source/data', loader: load.engine,
    staticPages: staticSeo.STATIC_SEO_PAGES.length, sitemapUrls: sitemapPaths.length, genericTests: catalog.length,
    canonicalGenericTests: catalog.filter((test) => test.id === test.canonicalId).length,
    paragraphTests: paragraph.PARAGRAF_TESTS.length, chessTests: chess.length, turkishGames: games.length,
    grades: gradeCounts, grade5StableTests, safeJsonLdSources: schemaSources.length,
    baselineData: verifyBaselineData(root),
    limitations: ['This script does not type-check or render TSX.', 'React cache is an identity shim outside the server dispatcher.', 'Run validate-seo-build.cjs after a real Next build for rendered metadata, HTTP and SSR checks.'],
  };
}

module.exports = { ROOT, createSourceLoader, collectRouteData, validateMetadata, validateSource };
if (require.main === module) validateSource().then((report) => console.log(JSON.stringify(report, null, 2))).catch((error) => {
  console.error(`SEO source validation failed: ${error.stack || error}`);
  process.exitCode = 1;
});
