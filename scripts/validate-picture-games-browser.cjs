#!/usr/bin/env node
'use strict';

// Run after a production build. CI uses the hosted runner's installed Chrome.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { ROOT, createSourceLoader } = require('./validate-seo.cjs');

const ROUTE = '/1-sinif/resimli-oyunlar';

async function freePort() {
  const probe = net.createServer();
  probe.listen(0, '127.0.0.1');
  await once(probe, 'listening');
  const port = probe.address().port;
  await new Promise((resolve, reject) => probe.close((error) => error ? reject(error) : resolve()));
  return port;
}

// Speech behavior is instrumented explicitly; this does not assess voice quality.
function instrumentSpeech() {
  window.__pictureSpoken = [];
  window.__pictureCancelled = 0;
  const voices = [{ lang: 'en-US', name: 'English', default: true }, { lang: 'tr-TR', name: 'Türkçe', default: false }];
  Object.defineProperty(window, 'SpeechSynthesisUtterance', { configurable: true, value: class {
    constructor(text) { this.text = text; }
  } });
  Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
    getVoices: () => voices,
    speak: (utterance) => { window.__pictureSpoken.push({ text: utterance.text, lang: utterance.lang, voice: utterance.voice?.name }); },
    cancel: () => { window.__pictureCancelled += 1; },
    addEventListener() {}, removeEventListener() {},
  } });
}

async function validatePictureGamesBrowser() {
  process.chdir(ROOT);
  assert(fs.existsSync(path.join(ROOT, '.next/BUILD_ID')), 'A completed real Next production build is required');
  const load = createSourceLoader();
  const { PUZZLES, PICTURES, MEMORY_POOLS } = load('lib/picture-games/content.ts');
  const { STORAGE_KEY } = load('lib/picture-games/learning.ts');
  const port = await freePort();
  const origin = 'http://127.0.0.1:' + port;
  const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
    cwd: ROOT, env: { ...process.env, NODE_ENV: 'production', NEXT_TELEMETRY_DISABLED: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let logs = '';
  let launchError;
  server.stdout.on('data', (chunk) => { logs = (logs + chunk).slice(-20000); });
  server.stderr.on('data', (chunk) => { logs = (logs + chunk).slice(-20000); });
  server.on('error', (error) => { launchError = error; });
  let browser;
  const checks = [];
  const errors = [];
  try {
    let ready = false;
    const deadline = Date.now() + 60000;
    while (Date.now() < deadline) {
      if (launchError) throw launchError;
      if (server.exitCode !== null) throw new Error('Next exited during startup: ' + logs);
      try {
        const response = await fetch(origin + ROUTE, { signal: AbortSignal.timeout(3000) });
        if (response.ok) { ready = true; break; }
      } catch { /* Await the real server socket. */ }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    assert(ready, 'Next server did not become ready');
    browser = await chromium.launch({ headless: true, ...(process.env.READING_BROWSER_CHANNEL ? { channel: process.env.READING_BROWSER_CHANNEL } : {}) });
    const context = await browser.newContext({ viewport: { width: 1280, height: 960 }, reducedMotion: 'reduce' });
    await context.route('**/*', (route) => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await context.addInitScript(instrumentSpeech);
    const page = await context.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(origin + '/');
    await expect(page.locator('a[href="' + ROUTE + '"]').first()).toBeVisible();
    await page.goto(origin + '/1-sinif');
    await expect(page.locator('a[href="' + ROUTE + '"]').first()).toBeVisible();
    const response = await page.goto(origin + ROUTE);
    assert.equal(response.status(), 200);
    await expect(page.getByTestId('picture-island')).toBeVisible();
    await expect(page).toHaveTitle(/Keşif Adası.*TestDünya/);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('Resimli Keşif Adası');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://testdunya.net' + ROUTE);
    assert(await page.evaluate((route) => [...document.querySelectorAll('script[type="application/ld+json"]')]
      .flatMap((script) => [].concat(JSON.parse(script.textContent)))
      .some((node) => node['@type'] === 'LearningResource' && node.url === 'https://testdunya.net' + route), ROUTE));
    assert.equal(await page.evaluate(() => window.__pictureSpoken.length), 0, 'No speech before user gesture');
    await page.getByTestId('speak-instructions').click();
    const spoken = await page.evaluate(() => window.__pictureSpoken.at(-1));
    assert(spoken.text.length > 10);
    assert.equal(spoken.lang, 'tr-TR');
    assert.equal(spoken.voice, 'Türkçe');
    checks.push('Home and grade-one links, rendered metadata/schema, user-triggered Turkish instructions');

    const completed = new Set();
    const progress = page.getByTestId('game-progress');
    const expectProgress = () => expect(progress).toHaveAttribute('data-completed', String(completed.size));
    await expectProgress();
    async function select(mode, level) {
      await page.getByTestId('mode-' + mode).click();
      await page.getByTestId('level-' + level).click();
      await expect(page.getByTestId('mode-' + mode)).toHaveAttribute('aria-pressed', 'true');
      await expect(page.getByTestId('level-' + level)).toHaveAttribute('aria-pressed', 'true');
    }
    async function currentPuzzle() {
      const id = await page.getByTestId('puzzle').getAttribute('data-puzzle-id');
      const puzzle = PUZZLES.find((item) => item.id === id);
      assert(puzzle, 'Rendered exercise matches a known content record');
      return puzzle;
    }
    const choice = (picture) => page.locator('[data-testid="choice"][data-picture="' + picture + '"]');
    async function solvePuzzle({ wrong = false, keyboard = false } = {}) {
      const puzzle = await currentPuzzle();
      if (wrong) {
        await choice(puzzle.choices.find((picture) => picture !== puzzle.answer)).click();
        await expect(page.getByTestId('game-feedback')).not.toBeEmpty();
        await expectProgress();
      }
      if (keyboard) {
        await choice(puzzle.answer).focus();
        await page.keyboard.press('Enter');
      } else await choice(puzzle.answer).click();
      completed.add(puzzle.id);
      await expectProgress();
      await expect(page.getByTestId('game-feedback')).toContainText(puzzle.explanation);
      return puzzle;
    }
    await solvePuzzle({ wrong: true, keyboard: true });
    await select('detective', 1);
    await solvePuzzle({ wrong: true });
    assert((await page.evaluate(() => window.__pictureCancelled)) > 0, 'Switching activities stops current speech');
    await select('pattern', 1);
    const repeated = await currentPuzzle();
    assert(completed.has(repeated.id));
    await solvePuzzle();
    for (let round = 1; round < 6; round++) {
      await page.getByTestId('next-puzzle').click();
      await solvePuzzle();
    }
    await page.getByTestId('next-puzzle').click();
    await expect(page.getByTestId('replay-game')).toBeVisible();
    await page.getByTestId('replay-game').click();
    await expect(page.getByTestId('choice').first()).toBeEnabled();
    await expectProgress();
    for (const level of [2, 3]) {
      for (const mode of ['pattern', 'detective']) {
        await select(mode, level);
        const puzzle = await solvePuzzle({ wrong: true });
        assert.equal(puzzle.level, level);
        assert.equal(puzzle.mode, mode);
      }
    }
    checks.push('All puzzle levels, wrong-answer retry, keyboard input, unique completion, six-round finish and replay');

    let exercisedMismatch = false;
    for (const level of [1, 2, 3]) {
      await select('memory', level);
      const cards = page.getByTestId('memory-card');
      await expect(cards).toHaveCount(MEMORY_POOLS[level].length * 2);
      const known = new Map();
      const card = (id) => page.locator('[data-testid="memory-card"][data-card-id="' + id + '"]');
      for (const tile of await cards.all()) {
        assert.equal(await tile.getAttribute('data-picture'), null, 'Hidden card does not expose its face as rendered data');
        const name = (await tile.getAttribute('aria-label') || '').toLocaleLowerCase('tr-TR');
        assert(!Object.values(PICTURES).some((picture) => name.includes(picture.label.toLocaleLowerCase('tr-TR'))), 'Hidden card label does not reveal its face');
      }
      let attempts = 0;
      while (await page.locator('[data-testid="memory-card"][data-open="false"]').count()) {
        assert(++attempts < 80, 'Memory board can be solved in a bounded number of visible attempts');
        const hidden = await page.locator('[data-testid="memory-card"][data-open="false"]').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-card-id')));
        const knownPair = hidden.flatMap((id, index) => hidden.slice(index + 1).filter((other) => known.has(id) && known.get(id) === known.get(other)).map((other) => [id, other]))[0];
        const first = knownPair?.[0] || hidden.find((id) => !known.has(id)) || hidden[0];
        await card(first).click();
        await expect(card(first)).toHaveAttribute('data-open', 'true');
        const firstFace = await card(first).getAttribute('data-picture');
        assert(PICTURES[firstFace]);
        known.set(first, firstFace);
        const remaining = hidden.filter((id) => id !== first);
        const second = knownPair?.[1] || remaining.find((id) => known.get(id) === firstFace) || remaining.find((id) => !known.has(id)) || remaining[0];
        await card(second).click();
        await expect(card(second)).toHaveAttribute('data-open', 'true');
        const secondFace = await card(second).getAttribute('data-picture');
        assert(PICTURES[secondFace]);
        known.set(second, secondFace);
        if (firstFace !== secondFace) {
          await expect(page.getByTestId('memory-retry')).toBeVisible();
          await expectProgress();
          const third = hidden.find((id) => id !== first && id !== second);
          if (third) {
            await expect(card(third)).toBeDisabled();
            await expect(card(third)).toHaveAttribute('data-open', 'false');
          }
          await page.getByTestId('memory-retry').click();
          await expect(card(first)).toHaveAttribute('data-open', 'false');
          await expect(card(second)).toHaveAttribute('data-open', 'false');
          exercisedMismatch = true;
        } else {
          await expect(card(first)).toBeDisabled();
          await expect(card(second)).toBeDisabled();
        }
      }
      completed.add('memory-' + level);
      await expectProgress();
      await expect(page.getByTestId('replay-game')).toBeVisible();
      await page.getByTestId('replay-game').click();
      await expect(page.locator('[data-testid="memory-card"][data-open="false"]')).toHaveCount(MEMORY_POOLS[level].length * 2);
      await expectProgress();
    }
    assert(exercisedMismatch, 'Exercise an actual mismatched pair, not only successful guesses');
    checks.push('Three memory board sizes, hidden-face accessibility, explicit mismatch retry, third-card lock, complete pairs and replay');

    await page.reload();
    await expectProgress();
    await page.waitForFunction(({ key, count }) => JSON.parse(localStorage.getItem(key)).completed.length === count, { key: STORAGE_KEY, count: completed.size });
    const reset = page.getByTestId('reset-game-progress');
    if (!await reset.isVisible()) await page.locator('details').filter({ has: reset }).locator('summary').click();
    await reset.click();
    await page.getByTestId('cancel-reset-game-progress').click();
    await expectProgress();
    await reset.click();
    await page.getByTestId('confirm-reset-game-progress').click();
    completed.clear();
    await expectProgress();
    await page.waitForFunction((key) => JSON.parse(localStorage.getItem(key)).completed.length === 0, STORAGE_KEY);
    await page.evaluate((key) => localStorage.setItem(key, '{broken'), STORAGE_KEY);
    await page.reload();
    await expectProgress();
    await solvePuzzle();
    checks.push('Reload persistence, reset cancellation and confirmation, malformed saved-progress recovery');

    fs.mkdirSync(path.join(ROOT, 'artifacts'), { recursive: true });
    await select('pattern', 3);
    await page.screenshot({ path: path.join(ROOT, 'artifacts/picture-games-desktop.png'), fullPage: true });
    await page.evaluate(() => document.documentElement.classList.add('dark'));
    const contrast = await page.getByTestId('game-prompt').evaluate((element) => {
      const luminance = (value) => value.match(/[\d.]+/g).slice(0, 3).map(Number).map((value) => {
        const channel = value / 255;
        return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
      }).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
      let background = element;
      while (background && ['rgba(0, 0, 0, 0)', 'transparent'].includes(getComputedStyle(background).backgroundColor)) background = background.parentElement;
      const foreground = luminance(getComputedStyle(element).color);
      const backdrop = luminance(getComputedStyle(background || document.body).backgroundColor);
      return (Math.max(foreground, backdrop) + 0.05) / (Math.min(foreground, backdrop) + 0.05);
    });
    assert(contrast >= 4.5, 'Game instructions remain readable in dark mode');
    await page.screenshot({ path: path.join(ROOT, 'artifacts/picture-games-dark.png'), fullPage: true });
    await page.evaluate(() => document.documentElement.classList.remove('dark'));
    for (const width of [375, 320]) {
      await page.setViewportSize({ width, height: 850 });
      for (const mode of ['pattern', 'detective', 'memory']) {
        await select(mode, 3);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No horizontal overflow at ' + width + 'px in ' + mode);
      }
      if (width === 375) await page.screenshot({ path: path.join(ROOT, 'artifacts/picture-games-mobile.png'), fullPage: true });
    }
    checks.push('Desktop, mobile and dark screenshots; readable contrast and all games at 320px and 375px without overflow');

    const fallback = await browser.newContext({ viewport: { width: 375, height: 850 }, reducedMotion: 'reduce' });
    await fallback.route('**/*', (route) => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await fallback.addInitScript(() => {
      for (const name of ['speechSynthesis', 'SpeechSynthesisUtterance']) {
        let owner = window;
        while (owner && !Object.prototype.hasOwnProperty.call(owner, name)) owner = Object.getPrototypeOf(owner);
        if (owner) Reflect.deleteProperty(owner, name);
      }
      Storage.prototype.getItem = () => { throw new DOMException('Storage blocked', 'SecurityError'); };
      Storage.prototype.setItem = () => { throw new DOMException('Storage blocked', 'SecurityError'); };
    });
    const fallbackPage = await fallback.newPage();
    fallbackPage.on('pageerror', (error) => errors.push(error.message));
    await fallbackPage.goto(origin + ROUTE);
    await expect(fallbackPage.getByTestId('picture-island')).toBeVisible();
    await fallbackPage.getByTestId('speak-instructions').click();
    const fallbackId = await fallbackPage.getByTestId('puzzle').getAttribute('data-puzzle-id');
    const fallbackAnswer = PUZZLES.find((puzzle) => puzzle.id === fallbackId).answer;
    await fallbackPage.locator('[data-testid="choice"][data-picture="' + fallbackAnswer + '"]').click();
    await expect(fallbackPage.getByTestId('game-progress')).toHaveAttribute('data-completed', '1');
    await fallbackPage.getByTestId('mode-memory').click();
    await fallbackPage.getByTestId('memory-card').first().click();
    await expect(fallbackPage.getByTestId('memory-card').first()).toHaveAttribute('data-open', 'true');
    checks.push('Blocked storage and unsupported speech preserve playable picture and memory games');
    assert.deepEqual(errors, [], 'No uncaught browser or hydration exceptions');
    return { status: 'passed', layer: 'Chrome against a real Next production build', checks,
      screenshots: ['artifacts/picture-games-desktop.png', 'artifacts/picture-games-mobile.png', 'artifacts/picture-games-dark.png'],
      limitations: ['Speech API calls use test doubles; real device voice quality and developmental benefits are not assessed.'] };
  } catch (error) {
    console.error('Temporary Next server output:\n' + logs);
    throw error;
  } finally {
    if (browser) await browser.close();
    if (server.exitCode === null && server.signalCode === null) {
      const exited = once(server, 'exit');
      server.kill('SIGTERM');
      await Promise.race([exited, new Promise((resolve) => setTimeout(resolve, 3000))]);
      if (server.exitCode === null && server.signalCode === null) server.kill('SIGKILL');
    }
  }
}

module.exports = { validatePictureGamesBrowser };
if (require.main === module) validatePictureGamesBrowser().then((report) => console.log(JSON.stringify(report, null, 2))).catch((error) => {
  console.error('Picture game browser validation failed: ' + (error.stack || error));
  process.exitCode = 1;
});
