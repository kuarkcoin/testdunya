#!/usr/bin/env node
'use strict';

// Run after npm run build. CI uses Chrome already installed on the hosted runner.
// Locally, install Playwright Chromium or set READING_BROWSER_CHANNEL=chrome.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { ROOT, createSourceLoader } = require('./validate-seo.cjs');

const STORAGE_KEY = 'testdunya.reading.v1';

async function freePort() {
  const probe = net.createServer();
  probe.listen(0, '127.0.0.1');
  await once(probe, 'listening');
  const port = probe.address().port;
  await new Promise((resolve, reject) => probe.close((error) => error ? reject(error) : resolve()));
  return port;
}

// Explicit API doubles validate voice selection/cancellation, not audio quality.
// Microphone tests below use Chromium's actual MediaRecorder and fake audio device.
function instrumentBrowser() {
  window.__readingSpoken = [];
  window.__readingCancelled = 0;
  const voices = [{ lang: 'en-US', name: 'English', default: true }, { lang: 'tr-TR', name: 'Türkçe', default: false }];
  Object.defineProperty(window, 'SpeechSynthesisUtterance', { configurable: true, value: class {
    constructor(text) { this.text = text; }
  } });
  Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
    getVoices: () => voices,
    speak: (utterance) => { window.__readingSpoken.push({ text: utterance.text, lang: utterance.lang, voice: utterance.voice?.name }); },
    cancel: () => { window.__readingCancelled += 1; },
    addEventListener() {}, removeEventListener() {},
  } });
  window.__readingStreams = [];
  window.__readingMediaMode = 'real';
  window.__readingRevoked = [];
  const revoke = URL.revokeObjectURL.bind(URL);
  URL.revokeObjectURL = (url) => { window.__readingRevoked.push(url); revoke(url); };
  if (!navigator.mediaDevices?.getUserMedia) return;
  const getUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = async (constraints) => {
    if (window.__readingMediaMode === 'denied') throw new DOMException('Test permission denied', 'NotAllowedError');
    const stream = await getUserMedia(constraints);
    window.__readingStreams.push(stream);
    if (window.__readingMediaMode === 'delayed') {
      await new Promise((resolve) => { window.__readingResolvePermission = resolve; });
    }
    return stream;
  };
}

async function validateReadingBrowser() {
  process.chdir(ROOT);
  assert(fs.existsSync(path.join(ROOT, '.next/BUILD_ID')), 'A real completed Next build is required');
  const { READING_GROUPS } = createSourceLoader()('lib/reading/content.ts');
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
  const browserErrors = [];
  try {
    let ready = false;
    const deadline = Date.now() + 60000;
    while (Date.now() < deadline) {
      if (launchError) throw launchError;
      if (server.exitCode !== null) throw new Error('Next exited during startup: ' + logs);
      try {
        const response = await fetch(origin + '/1-sinif', { signal: AbortSignal.timeout(3000) });
        if (response.ok) { ready = true; break; }
      } catch { /* Wait for the real server socket. */ }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    assert(ready, 'Next server did not become ready');
    browser = await chromium.launch({ headless: true,
      ...(process.env.READING_BROWSER_CHANNEL ? { channel: process.env.READING_BROWSER_CHANNEL } : {}),
      args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce', permissions: ['microphone'] });
    await context.route('**/*', (route) => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await context.addInitScript(instrumentBrowser);
    const page = await context.newPage();
    page.on('pageerror', (error) => browserErrors.push(error.message));
    const uploads = [];
    page.on('request', (request) => { if (request.method() === 'POST' && request.url().startsWith(origin)) uploads.push(request.url()); });
    await page.goto(origin + '/');
    await expect(page.locator('a[href="/1-sinif"], a[href="/1-sinif/okuma"]').first()).toBeVisible();
    await page.goto(origin + '/1-sinif');
    await expect(page.locator('a[href="/1-sinif/okuma"]').first()).toBeVisible();
    const response = await page.goto(origin + '/1-sinif/okuma');
    assert.equal(response.status(), 200);
    await expect(page.getByTestId('reading-garden')).toBeVisible();
    await expect(page).toHaveTitle(/Okuma Bahçesi.*TestDünya/);
    await expect(page.locator('h1')).toContainText('Okuma Bahçesi');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://testdunya.net/1-sinif/okuma');
    assert(await page.evaluate(() => [...document.querySelectorAll('script[type="application/ld+json"]')]
      .flatMap((script) => [].concat(JSON.parse(script.textContent)))
      .some((node) => node['@type'] === 'LearningResource' && node.url === 'https://testdunya.net/1-sinif/okuma')), 'Reading page has its own learning resource schema');
    const count = page.getByTestId('progress-count');
    const expectCount = (value) => expect(count).toHaveAttribute('data-completed', String(value));
    await expectCount(0);
    assert.equal(await page.evaluate(() => window.__readingSpoken.length), 0, 'No speech starts without a gesture');
    await page.getByRole('button', { name: 'Harf adını dinle', exact: true }).click();
    assert.deepEqual(await page.evaluate(() => window.__readingSpoken.at(-1)), { text: 'e', lang: 'tr-TR', voice: 'Türkçe' });
    await page.getByRole('button', { name: 'Sesi durdur', exact: true }).click();
    checks.push('Public entry links, canonical metadata, user-triggered Turkish voice selection');

    async function clickValue(testId, value) {
      const buttons = page.getByTestId(testId);
      for (let index = 0; index < await buttons.count(); index++) {
        const button = buttons.nth(index);
        if (await button.getAttribute('data-value') === value && await button.isEnabled()) { await button.click(); return; }
      }
      throw new Error('No enabled ' + testId + ' for ' + value);
    }
    const letter = READING_GROUPS[0].letters[0];
    await clickValue('answer-option', READING_GROUPS[0].letters.find((value) => value !== letter));
    await expect(page.getByTestId('exercise-feedback')).toContainText('Başka bir seçenek');
    await expectCount(0);
    await clickValue('answer-option', letter);
    await expectCount(1);
    await page.getByTestId('next-exercise').click();
    await page.getByRole('button', { name: 'E harfi', exact: true }).click();
    await clickValue('answer-option', letter);
    await expectCount(1);
    await page.getByRole('button', { name: 'N harfi', exact: true }).click();
    await page.getByTestId('next-exercise').click();
    await expect(page.getByTestId('stage-syllable')).toHaveAttribute('aria-pressed', 'true');
    checks.push('Wrong letter answers earn nothing; correct and repeated answers preserve unique progress');

    await page.getByTestId('stage-syllable').click();
    const syllable = READING_GROUPS[0].syllables[0];
    await expect(page.getByTestId('exercise-target')).toHaveAttribute('data-target', syllable);
    for (const part of Array.from(syllable).reverse()) await clickValue('tile', part);
    await page.getByTestId('check-answer').click();
    await expect(page.getByTestId('exercise-feedback')).toContainText('Geri al');
    await expectCount(1);
    for (const _ of Array.from(syllable)) await page.getByTestId('undo-tile').click();
    await expect(page.getByTestId('check-answer')).toBeDisabled();
    for (const part of Array.from(syllable)) await clickValue('tile', part);
    await page.getByTestId('check-answer').click();
    await expectCount(2);
    checks.push('Syllable order, retry, undo and completion');

    await page.getByTestId('group-g3').click();
    await page.getByTestId('stage-word').click();
    const repeated = READING_GROUPS[2].words.find((word) => new Set(word.syllables).size < word.syllables.length);
    assert(repeated, 'Exercise a real repeated-syllable word');
    for (let index = 0; index < READING_GROUPS[2].words.length; index++) {
      if (await page.getByTestId('exercise-target').getAttribute('data-target') === repeated.text) break;
      await page.getByTestId('next-exercise').click();
    }
    await expect(page.getByTestId('exercise-target')).toHaveAttribute('data-target', repeated.text);
    for (const part of repeated.syllables) await clickValue('tile', part);
    assert.equal(await page.getByTestId('tile').count(), repeated.syllables.length);
    for (const tile of await page.getByTestId('tile').all()) await expect(tile).toBeDisabled();
    await page.getByTestId('check-answer').click();
    await expectCount(3);
    checks.push('Repeated syllables require separate tiles and form the correct word');

    await page.getByTestId('group-g1').click();
    await page.getByTestId('stage-story').click();
    const story = READING_GROUPS[0].stories[0];
    await expect(page.getByTestId('exercise-target')).toHaveAttribute('data-target', story.id);
    await page.getByRole('button', { name: 'Heceleri göster', exact: true }).click();
    await expect(page.getByTestId('exercise-target')).toContainText('la·le');
    await page.getByRole('button', { name: 'Kelime olarak göster', exact: true }).click();
    await clickValue('answer-option', story.choices[(story.answerIndex + 1) % story.choices.length]);
    await expectCount(3);
    await clickValue('answer-option', story.choices[story.answerIndex]);
    await expectCount(4);
    await page.getByTestId('next-exercise').click();
    await expect(page.getByTestId('exercise-target')).toHaveAttribute('data-target', READING_GROUPS[0].stories[1].id);
    await page.getByTestId('next-exercise').click();
    await expect(page.getByTestId('group-g2')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByTestId('stage-letter')).toHaveAttribute('aria-pressed', 'true');
    checks.push('Finishing each stage advances to the next stage and texts advance to the next group');
    await page.waitForFunction((key) => JSON.parse(localStorage.getItem(key)).completed.length === 4, STORAGE_KEY);
    await page.reload();
    await expectCount(4);
    checks.push('Word-level reading, syllable display, comprehension and persisted progress');

    await page.getByTestId('stage-word').focus();
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('stage-word')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByTestId('start-recording')).toBeEnabled();
    await page.getByTestId('start-recording').click();
    await expect(page.getByTestId('stop-recording')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Kelimeyi dinle', exact: true })).toBeDisabled();
    // Capture a bounded real interval so MediaRecorder has encoded audio to finalize.
    await page.waitForTimeout(650);
    await page.getByTestId('stop-recording').click();
    await expect(page.getByTestId('recording-audio')).toBeVisible();
    const blobUrl = await page.getByTestId('recording-audio').getAttribute('src');
    assert(blobUrl.startsWith('blob:'), 'Recording stays in a page-owned Blob URL');
    assert.equal(await page.getByTestId('recording-audio').getAttribute('autoplay'), null);
    await page.waitForFunction(() => window.__readingStreams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
    await expectCount(4);
    await page.getByTestId('next-exercise').click();
    await expect(page.getByTestId('recording-audio')).toHaveCount(0);
    assert(await page.evaluate((url) => window.__readingRevoked.includes(url), blobUrl));
    await page.getByTestId('start-recording').click();
    await expect(page.getByTestId('stop-recording')).toBeVisible();
    await page.getByTestId('stage-story').click();
    await page.waitForFunction(() => window.__readingStreams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
    await expect(page.getByTestId('recording-audio')).toHaveCount(0);
    checks.push('Keyboard controls, real MediaRecorder output, speech exclusion, track stop and Blob cleanup');

    await page.evaluate(() => { window.__readingMediaMode = 'denied'; });
    await page.getByTestId('start-recording').click();
    await expect(page.getByTestId('recording-status')).toContainText('Mikrofon izni verilmedi');
    await expect(page.getByRole('button', { name: 'Metni dinle', exact: true })).toBeEnabled();
    await page.evaluate(() => { window.__readingMediaMode = 'delayed'; });
    await page.getByTestId('start-recording').click();
    await page.waitForFunction(() => typeof window.__readingResolvePermission === 'function');
    await page.getByTestId('group-g2').click();
    await page.evaluate(() => { window.__readingResolvePermission(); window.__readingMediaMode = 'real'; });
    await page.waitForFunction(() => window.__readingStreams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
    await expect(page.getByTestId('stop-recording')).toHaveCount(0);
    await expect(page.getByTestId('recording-audio')).toHaveCount(0);
    assert.deepEqual(uploads, [], 'Recording does not POST audio to an application endpoint');
    checks.push('Denied microphone permission and late permission result after a lesson change');

    await page.getByText('Veli ve öğretmen köşesi', { exact: true }).click();
    await page.getByTestId('reset-progress').click();
    await page.getByTestId('cancel-reset-progress').click();
    await expectCount(4);
    await page.getByTestId('reset-progress').click();
    await page.getByTestId('confirm-reset-progress').click();
    await expectCount(0);
    await page.waitForFunction((key) => JSON.parse(localStorage.getItem(key)).completed.length === 0, STORAGE_KEY);
    await page.evaluate((key) => localStorage.setItem(key, '{corrupt'), STORAGE_KEY);
    await page.reload();
    await expectCount(0);
    await page.getByTestId('stage-letter').click();
    await clickValue('answer-option', READING_GROUPS[0].letters[0]);
    await expectCount(1);
    checks.push('Reset confirmation, reset persistence and recovery from corrupt local progress');

    fs.mkdirSync(path.join(ROOT, 'artifacts'), { recursive: true });
    await page.getByTestId('stage-story').click();
    await page.screenshot({ path: path.join(ROOT, 'artifacts/reading-desktop.png'), fullPage: true });
    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByTestId('stage-letter').click();
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No horizontal mobile overflow');
    await page.screenshot({ path: path.join(ROOT, 'artifacts/reading-mobile.png'), fullPage: true });
    await page.setViewportSize({ width: 320, height: 812 });
    for (const stage of ['letter', 'syllable', 'word', 'story']) {
      await page.getByTestId('stage-' + stage).click();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No overflow in mobile ' + stage);
    }
    checks.push('Desktop screenshots and all four mobile stages without horizontal overflow');

    const fallback = await browser.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: 'reduce' });
    await fallback.route('**/*', (route) => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await fallback.addInitScript(() => {
      for (const name of ['speechSynthesis', 'SpeechSynthesisUtterance']) {
        let owner = window;
        while (owner && !Object.prototype.hasOwnProperty.call(owner, name)) owner = Object.getPrototypeOf(owner);
        if (owner) Reflect.deleteProperty(owner, name);
      }
      Object.defineProperty(window, 'MediaRecorder', { configurable: true, value: undefined });
      Storage.prototype.getItem = () => { throw new DOMException('Storage blocked', 'SecurityError'); };
      Storage.prototype.setItem = () => { throw new DOMException('Storage blocked', 'SecurityError'); };
    });
    const fallbackPage = await fallback.newPage();
    fallbackPage.on('pageerror', (error) => browserErrors.push(error.message));
    await fallbackPage.goto(origin + '/1-sinif/okuma');
    await expect(fallbackPage.getByRole('button', { name: 'Harf adını dinle', exact: true })).toBeDisabled();
    await expect(fallbackPage.getByText('Bu tarayıcı sesli okumayı desteklemiyor.', { exact: false })).toBeVisible();
    await fallbackPage.locator('[data-testid="answer-option"][data-value="e"]').click();
    await expect(fallbackPage.getByTestId('progress-count')).toHaveAttribute('data-completed', '1');
    await fallbackPage.getByTestId('stage-word').click();
    await expect(fallbackPage.getByTestId('start-recording')).toBeDisabled();
    await expect(fallbackPage.getByTestId('recording-status')).toContainText('Bu tarayıcıda kayıt kullanılamıyor');
    await fallbackPage.getByText('Veli ve öğretmen köşesi', { exact: true }).click();
    await expect(fallbackPage.getByText('Alıştırmalar çalışmaya devam ediyor.', { exact: false })).toBeVisible();
    checks.push('Unsupported speech/microphone and blocked storage retain usable learning activities');
    assert.deepEqual(browserErrors, [], 'No uncaught browser/hydration exceptions');
    return { status: 'passed', layer: 'Chromium against a real Next production build', checks, screenshots: ['artifacts/reading-desktop.png', 'artifacts/reading-mobile.png'], limitations: ['Speech API behavior uses explicit test doubles; pronunciation quality and real device voices are not assessed.', 'Recording uses Chromium fake audio input; real microphone hardware and Safari/iOS behavior require device testing.'] };
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

if (require.main === module) validateReadingBrowser().then((report) => console.log(JSON.stringify(report, null, 2))).catch((error) => {
  console.error('Reading browser validation failed: ' + (error.stack || error));
  process.exitCode = 1;
});
module.exports = { validateReadingBrowser };
