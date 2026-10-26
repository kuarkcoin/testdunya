#!/usr/bin/env node
'use strict';

// Run only after a real `next build`. Starts that build on an ephemeral loopback
// port, requests actual HTML, and always terminates the temporary server.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const { spawn } = require('node:child_process');
const { createRequire } = require('node:module');
const { once } = require('node:events');
const { ROOT, createSourceLoader, collectRouteData } = require('./validate-seo.cjs');

function decodeEntities(text) {
  return text.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (all, entity) => {
    if (entity[0] === '#') return String.fromCodePoint(entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)));
    return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }[entity.toLowerCase()];
  });
}
const normalize = (value) => decodeEntities(String(value)).replace(/\s+/g, ' ').trim();

function attributes(tag) {
  const result = {};
  const pattern = /([^\s=<>/'"]+)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  for (const match of tag.matchAll(pattern)) result[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
  return result;
}

function visibleText(html) {
  // A deliberately small text extractor, not a browser. It excludes RSC scripts,
  // head metadata, hidden suspense shells and templates. Closed <details> remain
  // included because their real HTML can be expanded and read without hydration.
  const stack = [];
  const text = [];
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  for (const token of html.matchAll(/<!--[\s\S]*?-->|<[^>]*>|[^<]+/g)) {
    const value = token[0];
    if (value.startsWith('<!--') || /^<!/i.test(value)) continue;
    if (value.startsWith('</')) {
      const name = /^<\/\s*([^\s>]+)/.exec(value)?.[1].toLowerCase();
      const index = stack.map((entry) => entry.name).lastIndexOf(name);
      if (index >= 0) stack.splice(index);
    } else if (value.startsWith('<')) {
      const name = /^<\s*([^\s/>]+)/.exec(value)?.[1].toLowerCase();
      if (!name) continue;
      const attrs = attributes(value);
      const excluded = stack.at(-1)?.excluded || ['script', 'style', 'head', 'template', 'noscript'].includes(name)
        || Object.hasOwn(attrs, 'hidden') || attrs['aria-hidden'] === 'true';
      if (!voidTags.has(name) && !value.endsWith('/>')) stack.push({ name, excluded });
      text.push(' ');
    } else if (!stack.at(-1)?.excluded) text.push(value);
  }
  return normalize(text.join(' '));
}

function parseHtml(html) {
  const metas = [...html.matchAll(/<meta\b([^>]+)>/gi)].map((match) => attributes(match[1]));
  const links = [...html.matchAll(/<link\b([^>]+)>/gi)].map((match) => attributes(match[1]));
  const schemas = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (attributes(match[1]).type !== 'application/ld+json') continue;
    schemas.push(JSON.parse(match[2]));
  }
  function meta(name) {
    const values = metas.filter((item) => item.name === name || item.property === name).map((item) => item.content);
    assert.equal(values.length, 1, `Expected exactly one ${name} meta, found ${values.length}`);
    return values[0];
  }
  return {
    html, metas, links, schemas, meta, text: visibleText(html),
    titles: [...html.matchAll(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/gi)].map((match) => normalize(match[1])),
    h1s: [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => visibleText(match[1])),
  };
}

function schemaNodes(value) {
  if (Array.isArray(value)) return value.flatMap(schemaNodes);
  if (!value || typeof value !== 'object') return [];
  return [value, ...Object.values(value).flatMap(schemaNodes)];
}

function assertVisible(document, content, label) {
  const parts = String(content).replace(/<[^>]*>/g, ' ').split(/\$[^$]*\$/g)
    .map((part) => normalize(part).replace(/\*\*/g, '')).filter((part) => part.length >= 8).sort((a, b) => b.length - a.length);
  if (!parts.length) return; // All-math strings are checked against exact JSON-LD separately.
  const fragment = parts[0].slice(0, 140);
  assert(document.text.includes(fragment), `${label}: content absent from readable SSR HTML: ${fragment}`);
}

async function freePort() {
  const probe = net.createServer();
  probe.listen(0, '127.0.0.1');
  await once(probe, 'listening');
  const port = probe.address().port;
  await new Promise((resolve, reject) => probe.close((error) => error ? reject(error) : resolve()));
  return port;
}

function checkTrace(root) {
  const filename = path.join(root, '.next/server/app/test/[testId]/page.js.nft.json');
  assert(fs.existsSync(filename), 'Real Next generic test file trace is missing');
  const trace = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const traced = new Set(trace.files.map((file) => path.resolve(path.dirname(filename), file)));
  const files = fs.readdirSync(path.join(root, 'public/data/tests')).filter((file) => file.endsWith('.json'));
  for (const file of files) assert(traced.has(path.join(root, 'public/data/tests', file)), `Serverless trace omits test data: ${file}`);
  return files.length;
}

async function validateBuild(root = ROOT) {
  process.chdir(root);
  assert(fs.existsSync(path.join(root, '.next/BUILD_ID')), 'No completed Next build. Run npm run build first; this script never creates mock HTML.');
  const projectRequire = createRequire(path.join(root, 'package.json'));
  let nextBin;
  try { nextBin = projectRequire.resolve('next/dist/bin/next'); } catch { throw new Error('Next dependencies are missing; rendered validation was not run.'); }
  const tracedJsonFiles = checkTrace(root);
  const load = createSourceLoader(root);
  const data = await collectRouteData(load);
  const { seo, staticSeo, generic, grade5, grade6, chess, games, subjects, indexable } = data;
  const port = await freePort();
  const origin = `http://127.0.0.1:${port}`;
  const server = spawn(process.execPath, [nextBin, 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
    cwd: root, env: { ...process.env, NODE_ENV: 'production', NEXT_TELEMETRY_DISABLED: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let logs = '';
  let startupError;
  const record = (chunk) => { logs = (logs + chunk.toString()).slice(-40000); };
  server.stdout.on('data', record);
  server.stderr.on('data', record);
  server.on('error', (error) => { startupError = error; });
  const request = (pathname) => fetch(`${origin}${pathname}`, {
    redirect: 'manual', signal: AbortSignal.timeout(20000),
    // A documented HTML-limited crawler receives complete blocking metadata.
    // No browser scripts are executed and RSC payloads never count as visible HTML.
    headers: { 'user-agent': 'Twitterbot/1.0', accept: 'text/html' },
  });
  const checked = [];
  try {
    const deadline = Date.now() + 60000;
    let ready = false;
    while (Date.now() < deadline) {
      if (startupError) throw startupError;
      if (server.exitCode !== null) throw new Error(`Next server exited during startup (${server.exitCode})\n${logs}`);
      try { await request('/robots.txt'); ready = true; break; } catch { /* Wait for the actual socket. */ }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    assert(ready, `Next did not start within 60 seconds\n${logs}`);

    async function page(pathname, { index = true, canonical = pathname, requireHeading = true, type, questionData, genericData, grade } = {}) {
      const response = await request(pathname);
      assert.equal(response.status, 200, `${pathname}: HTTP status`);
      assert.match(response.headers.get('content-type') || '', /text\/html/i);
      const document = parseHtml(await response.text());
      assert.equal(document.titles.length, 1, `${pathname}: one resolved title`);
      assert.equal((document.titles[0].match(/TestDünya/g) || []).length, 1, `${pathname}: brand appears once`);
      if (requireHeading) assert(document.h1s.some((text) => text.length > 2), `${pathname}: readable server-rendered heading`);
      assert(document.meta('description').trim().length >= 30, `${pathname}: page description`);
      const canonicals = document.links.filter((link) => link.rel === 'canonical');
      assert.equal(canonicals.length, 1, `${pathname}: one canonical`);
      assert.equal(canonicals[0].href, seo.absoluteUrl(canonical), `${pathname}: canonical target`);
      assert.equal(document.meta('og:url'), seo.absoluteUrl(canonical), `${pathname}: OG URL`);
      assert.equal(document.meta('og:title'), document.titles[0], `${pathname}: resolved/social titles agree`);
      assert.equal(document.meta('og:description'), document.meta('description'), `${pathname}: social description`);
      assert.equal(document.meta('twitter:card'), 'summary_large_image');
      const imageUrl = new URL(document.meta('og:image'));
      assert.equal(imageUrl.origin, seo.SITE_URL, `${pathname}: production social image origin`);
      assert.equal(imageUrl.pathname, '/opengraph-image', `${pathname}: generated social image`);
      const directives = document.meta('robots');
      const googleDirectives = document.meta('googlebot');
      assert.equal(/\bnoindex\b/.test(directives), !index, `${pathname}: robots index policy`);
      assert.equal(/\bnoindex\b/.test(googleDirectives), !index, `${pathname}: inherited Googlebot index policy`);
      assert(!/\bnoindex\b/.test(response.headers.get('x-robots-tag') || '') || !index, `${pathname}: production response headers agree with indexing`);
      const nodes = document.schemas.flatMap(schemaNodes);
      assert(nodes.some((node) => node['@type'] === 'WebSite'), `${pathname}: global WebSite schema`);
      assert(!nodes.some((node) => node['@type'] === 'SearchAction'), `${pathname}: no unsupported search action`);
      if (type) assert(nodes.some((node) => node['@type'] === type), `${pathname}: ${type} structured data`);
      for (const node of nodes) {
        if (node['@type'] === 'BreadcrumbList') {
          const items = node.itemListElement;
          assert.deepEqual(items.map((item) => item.position), items.map((_, i) => i + 1), `${pathname}: breadcrumb positions`);
          assert.equal(items[0].item, seo.absoluteUrl('/'));
          assert.equal(items.at(-1).item, seo.absoluteUrl(canonical), `${pathname}: breadcrumb matches canonical page`);
          for (const item of items) assert.equal(new URL(item.item).origin, seo.SITE_URL);
        }
        if (node['@type'] === 'FAQPage') {
          for (const question of node.mainEntity || []) {
            assertVisible(document, question.name, `${pathname} FAQ question`);
            assertVisible(document, question.acceptedAnswer.text, `${pathname} FAQ answer`);
          }
        }
      }
      if (questionData) {
        const quiz = nodes.find((node) => node['@type'] === 'Quiz');
        assert.equal(quiz.url, seo.absoluteUrl(canonical));
        assert.equal(quiz.hasPart.length, questionData.length, `${pathname}: all real questions in schema`);
        for (const [i, question] of questionData.entries()) {
          const expectedPrompt = grade === 5 ? question.prompt.replace(/\$/g, '') : question.prompt;
          assert.equal(quiz.hasPart[i].text, expectedPrompt, `${pathname}: schema prompt ${i + 1}`);
          if (grade === 6) assert(quiz.hasPart[i].acceptedAnswer.text.includes(question.options[question.correct]), `${pathname}: schema correct answer ${i + 1}`);
          assertVisible(document, question.prompt, `${pathname} question ${i + 1}`);
          if (grade === 6) assertVisible(document, question.explanation, `${pathname} explanation ${i + 1}`);
          for (const choice of question.options) assertVisible(document, choice, `${pathname} option ${i + 1}`);
        }
      }
      if (genericData) {
        assertVisible(document, genericData.questions[0].questionPrompt || genericData.questions[0].prompt, `${pathname} first quiz question`);
        for (const choice of genericData.questions[0].choices) assertVisible(document, choice.text, `${pathname} first question option`);
      }
      checked.push({ path: pathname, status: 200, canonical, index, schemas: document.schemas.length });
      return document;
    }

    for (const pathname of ['/', '/lgs/sozel', '/ielts/speaking', '/paragraf', '/dashboard']) await page(pathname);
    // Saved mistakes exist only in browser storage; its private page mounts after hydration.
    await page('/mistakes', { index: false, requireHeading: false });
    await page('/gorevde-yukselme/karma', { index: false });
    await page('/test/gy-karma-1234567890', { index: false });
    const science = grade6.getGrade6Test('fen', 'test-12');
    assert(science, 'Representative grade6 test must exist');
    await page('/6-sinif/fen/test-12', { type: 'Quiz', questionData: science.questions, grade: 6 });
    const maths = grade5.getGrade5Test('matematik', 'test-22');
    assert(maths, 'Published grade5 second-term URL must exist');
    await page('/5-sinif/matematik/test-22', { type: 'Quiz', questionData: maths.questions, grade: 5 });
    for (const id of ['lgs-sozel-test-1', 'paragraf-test-1', 'lgs-sozel-test-3', 'tus-deneme-31']) {
      const test = await generic.getTestData(id);
      assert(test, `Representative generic data ${id}`);
      await page(`/test/${id}`, { type: 'Quiz', genericData: test, canonical: `/test/${test.canonicalId || test.id}` });
    }
    await page(`/chess-tests/${chess[0].id}`, { type: 'Quiz' });
    await page(`/turkce-oyunlari/${games[0].slug}`, { type: 'LearningResource' });
    const availableSubject = subjects.find((subject) => subject.tests.length);
    const emptySubject = subjects.find((subject) => !subject.tests.length);
    assert(availableSubject && emptySubject, 'Exercise both populated and empty subject policies');
    await page(`/gorevde-yukselme/${availableSubject.slug}`, { type: 'CollectionPage' });
    await page(`/gorevde-yukselme/${emptySubject.slug}`, { index: false });

    for (const pathname of ['/test/seo-validation-no-such-test-918273', '/chess-tests/seo-validation-no-such-test', '/turkce-oyunlari/seo-validation-no-such-game', '/gorevde-yukselme/seo-validation-no-such-subject', '/6-sinif/fen/test-999999', '/5-sinif/matematik/test-999999', '/paragraf/test-999999']) {
      const response = await request(pathname);
      assert.equal(response.status, 404, `${pathname}: unknown content must have a real 404 status`);
      const document = parseHtml(await response.text());
      assert(document.metas.some((meta) => meta.name === 'robots' && /\bnoindex\b/.test(meta.content)), `${pathname}: missing content is noindex`);
      checked.push({ path: pathname, status: 404 });
    }
    for (const [from, to, status] of [
      ['/5-sinif/matematik/test22', '/5-sinif/matematik/test-22', 308],
      ['/paragraf/test-1', '/test/paragraf-test-1', 308],
      ['/zeka-bulmacalari/test-1', '/test/zeka-bulmaca-1', 308],
      ['/satranc-testleri', '/chess-tests', 301],
    ]) {
      const response = await request(from);
      assert.equal(response.status, status, `${from}: permanent legacy redirect`);
      assert.equal(new URL(response.headers.get('location'), origin).pathname, to, `${from}: redirect destination`);
      checked.push({ path: from, status, location: to });
    }

    const sitemapResponse = await request('/sitemap.xml');
    assert.equal(sitemapResponse.status, 200);
    assert.match(sitemapResponse.headers.get('content-type') || '', /xml/i);
    const sitemapText = await sitemapResponse.text();
    const sitemapUrls = [...sitemapText.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map((match) => decodeEntities(match[1]));
    assert.equal(new Set(sitemapUrls).size, sitemapUrls.length);
    assert.deepEqual(sitemapUrls.sort(), [...indexable].map(seo.absoluteUrl).sort(), 'Served sitemap equals valid canonical content registry');
    assert(!sitemapText.includes('<lastmod>'), 'Served sitemap must not claim a fresh content date on every build');
    const robotsResponse = await request('/robots.txt');
    assert.equal(robotsResponse.status, 200);
    const robotsText = await robotsResponse.text();
    assert(robotsText.includes(`Sitemap: ${seo.absoluteUrl('/sitemap.xml')}`));
    assert(/User-Agent:\s*\*/i.test(robotsText));
    assert(!/Disallow:\s*\/(?:mistakes|gorevde-yukselme\/karma)/i.test(robotsText), 'Noindex pages remain crawlable');

    const imageResponse = await request('/opengraph-image');
    assert.equal(imageResponse.status, 200, 'Generated OG image HTTP status');
    assert.match(imageResponse.headers.get('content-type') || '', /image\/png/i);
    const png = Buffer.from(await imageResponse.arrayBuffer());
    assert(png.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), 'OG endpoint returns actual PNG bytes');
    assert.equal(png.readUInt32BE(16), 1200, 'OG width');
    assert.equal(png.readUInt32BE(20), 630, 'OG height');
    return {
      status: 'passed', layer: 'real Next production build over HTTP',
      buildId: fs.readFileSync(path.join(root, '.next/BUILD_ID'), 'utf8').trim(),
      pages: checked, sitemapUrls: sitemapUrls.length, tracedJsonFiles, ogImage: { width: 1200, height: 630, bytes: png.length },
      limitations: ['Crawler HTML is tested without executing client JavaScript; interactive quiz scoring is outside this script.', 'Production URLs are checked in metadata on a local production server; deployment routing and platform headers require separate deployment verification.'],
    };
  } catch (error) {
    if (logs) console.error(`Temporary Next server output:\n${logs}`);
    throw error;
  } finally {
    if (server.exitCode === null && server.signalCode === null) {
      const exited = once(server, 'exit');
      server.kill('SIGTERM');
      await Promise.race([exited, new Promise((resolve) => setTimeout(resolve, 3000))]);
      if (server.exitCode === null && server.signalCode === null) {
        server.kill('SIGKILL');
        await Promise.race([exited, new Promise((resolve) => setTimeout(resolve, 3000))]);
      }
    }
  }
}

module.exports = { parseHtml, visibleText, validateBuild };
if (require.main === module) validateBuild().then((report) => console.log(JSON.stringify(report, null, 2))).catch((error) => {
  console.error(`SEO build validation failed: ${error.stack || error}`);
  process.exitCode = 1;
});
