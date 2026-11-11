#!/usr/bin/env node
'use strict';

// An anonymous HTTP audit, not a Search Console or Google indexing report.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const USER_AGENT = 'TestDunya-SEO-Audit/1.0 (public technical SEO verification)';
const GOOGLEBOT_USER_AGENT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const ALLOWED_HOSTS = new Set(['testdunya.net', 'www.testdunya.net']);
const MAX_BODY_BYTES = 5 * 1024 * 1024;

function decodeEntities(value) {
  return value.replace(/&(?:amp|lt|gt|quot|apos|nbsp|#\d+|#x[\da-f]+);/gi, (entity) => {
    const key = entity.slice(1, -1).toLowerCase();
    if (key.startsWith('#')) {
      const point = key[1] === 'x' ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
      return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : '\ufffd';
    }
    return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }[key];
  });
}

function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    result[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4]);
  }
  return result;
}

function normalizedUrl(value, base) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value, base);
    if (!/^https?:$/.test(url.protocol) || url.username || url.password) return null;
    url.hash = '';
    return url.href;
  } catch { return null; }
}

function allowedUrl(value) {
  const url = new URL(value);
  return /^https?:$/.test(url.protocol) && ALLOWED_HOSTS.has(url.hostname) && !url.username && !url.password && !url.port;
}

function isPublicPageUrl(value, origin) {
  const url = new URL(value);
  return allowedUrl(value) && url.origin === origin && !url.search
    && !/^\/(?:api|_next|private|admin)(?:\/|$)/i.test(url.pathname)
    && !/\.(?!html?$)[a-z0-9]{1,8}$/i.test(url.pathname);
}

function parsePage(html, url) {
  // Metadata can be streamed outside <head> by Next.js; inspect the full HTML.
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
  const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0]));
  const titles = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((match) => decodeEntities(match[1]).trim());
  const descriptions = metas.filter((meta) => meta.name?.toLowerCase() === 'description').map((meta) => meta.content || '');
  const canonicals = linkTags.filter((link) => /(?:^|\s)canonical(?:\s|$)/i.test(link.rel || '')).map((link) => normalizedUrl(link.href, url));
  const robotMetas = metas.filter((meta) => /^(?:robots|googlebot)$/i.test(meta.name || '')).map((meta) => ({ agent: meta.name.toLowerCase(), value: meta.content || '' }));
  const anchors = new Set();
  const documentMarkup = html.replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  for (const match of documentMarkup.matchAll(/<a\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    if (!attrs.href || /(?:^|\s)nofollow(?:\s|$)/i.test(attrs.rel || '')) continue;
    const target = normalizedUrl(attrs.href, url);
    if (target && new URL(target).origin === new URL(url).origin) anchors.add(target);
  }
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  const text = decodeEntities(main.replace(/<(script|style|head|template|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  return {
    titles, descriptions, canonicals, robotMetas, anchors: [...anchors],
    h1Count: [...html.matchAll(/<h1\b/gi)].length,
    textCharacters: text.length,
    textFingerprint: crypto.createHash('sha256').update(text).digest('hex'),
  };
}

function parseRobots(text) {
  const groups = [];
  const sitemaps = [];
  let group = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    const colon = line.indexOf(':');
    if (colon < 0) continue;
    const field = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    if (field === 'sitemap') { sitemaps.push(value); continue; }
    if (field === 'user-agent') {
      if (!group || group.rules.length) { group = { agents: [], rules: [] }; groups.push(group); }
      group.agents.push(value.toLowerCase());
    } else if (group && (field === 'allow' || field === 'disallow') && value) {
      group.rules.push({ allow: field === 'allow', path: value });
    }
  }
  return { groups, sitemaps };
}

function robotsAllows(robots, url, agent = 'googlebot') {
  const ranked = robots.groups.map((group) => ({ group, rank: Math.max(-1, ...group.agents.map((name) => name === '*' ? 0 : agent.toLowerCase().includes(name) ? name.length : -1)) }));
  const bestRank = Math.max(-1, ...ranked.map((entry) => entry.rank));
  if (bestRank < 0) return true;
  const target = new URL(url);
  const pathname = target.pathname + target.search;
  const matches = ranked.filter((entry) => entry.rank === bestRank).flatMap((entry) => entry.group.rules).filter((rule) => {
    const end = rule.path.endsWith('$');
    const raw = end ? rule.path.slice(0, -1) : rule.path;
    const expression = raw.split('*').map((piece) => piece.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*');
    return new RegExp(`^${expression}${end ? '$' : ''}`).test(pathname);
  }).sort((a, b) => b.path.replace(/[*$]/g, '').length - a.path.replace(/[*$]/g, '').length || Number(b.allow) - Number(a.allow));
  return matches[0]?.allow ?? true;
}

function headerNoindexForGooglebot(value) {
  let applies = true;
  for (let directive of (value || '').split(',')) {
    const scoped = directive.trim().match(/^([a-z][\w-]*):\s*(.*)$/i);
    if (scoped) { applies = /^(?:googlebot|\*)$/i.test(scoped[1]); directive = scoped[2]; }
    if (applies && /\b(?:noindex|none)\b/i.test(directive)) return true;
  }
  return false;
}

async function fetchDocument(url, userAgent = USER_AGENT) {
  const redirects = [];
  let current = url;
  for (let hop = 0; hop <= 5; hop++) {
    if (!allowedUrl(current)) return { requestedUrl: url, url: current, redirects, error: 'Redirect target is outside the permitted public site hosts.' };
    let result;
    for (let attempt = 0; attempt < 2; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch(current, { redirect: 'manual', signal: controller.signal, headers: { 'user-agent': userAgent, accept: 'text/html,application/xml,text/xml,text/plain;q=0.9,*/*;q=0.1' } });
        const headers = {};
        for (const name of ['content-type', 'x-robots-tag', 'location', 'link']) {
          if (response.headers.has(name)) headers[name] = response.headers.get(name);
        }
        if ([301, 302, 303, 307, 308].includes(response.status)) {
          await response.body?.cancel();
          result = { status: response.status, headers, body: '' };
        } else {
          const chunks = [];
          let bytes = 0;
          for await (const chunk of response.body || []) {
            bytes += chunk.byteLength;
            if (bytes > MAX_BODY_BYTES) { controller.abort(); throw new Error('Response exceeded the 5 MiB audit limit.'); }
            chunks.push(Buffer.from(chunk));
          }
          result = { status: response.status, headers, body: Buffer.concat(chunks).toString('utf8'), bytes };
        }
        break;
      } catch (error) {
        if (attempt === 1) return { requestedUrl: url, url: current, redirects, error: String(error.message || error) };
      } finally { clearTimeout(timer); }
    }
    if ([301, 302, 303, 307, 308].includes(result.status)) {
      const target = normalizedUrl(result.headers.location, current);
      redirects.push({ from: current, status: result.status, to: target });
      if (!target) return { requestedUrl: url, url: current, redirects, error: 'Redirect has a missing or invalid Location.' };
      if (target === current || redirects.some((redirect) => redirect.from === target)) return { requestedUrl: url, url: current, redirects, error: 'Redirect loop.' };
      current = target;
      continue;
    }
    return { requestedUrl: url, url: current, redirects, ...result };
  }
  return { requestedUrl: url, url: current, redirects, error: 'More than five redirects.' };
}

async function mapLimited(items, worker, concurrency = 4) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) { const index = cursor++; results[index] = await worker(items[index], index); }
  }));
  return results;
}

function parseOptions(argv) {
  const values = {};
  for (let i = 0; i < argv.length; i++) {
    const match = argv[i].match(/^--(base|max-pages|output|concurrency)(?:=(.*))?$/);
    if (!match) throw new Error(`Unknown argument: ${argv[i]}`);
    values[match[1]] = match[2] ?? argv[++i];
  }
  const base = new URL(values.base || 'https://testdunya.net');
  if (!allowedUrl(base.href) || base.pathname !== '/' || base.search || base.hash) throw new Error('--base must be the public testdunya.net or www.testdunya.net origin.');
  const maxPages = Number(values['max-pages'] || 650);
  const concurrency = Number(values.concurrency || 4);
  if (!Number.isInteger(maxPages) || maxPages < 1 || maxPages > 650) throw new Error('--max-pages must be an integer from 1 to 650.');
  if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 4) throw new Error('--concurrency must be an integer from 1 to 4.');
  return { origin: base.origin, maxPages, concurrency, output: path.resolve(values.output || 'artifacts/seo-live-audit.json') };
}

async function audit(options) {
  const startedAt = new Date().toISOString();
  const issues = [];
  const addIssue = (code, url, detail, severity = 'warning') => issues.push({ code, severity, url, detail });
  const robotsResponse = await fetchDocument(`${options.origin}/robots.txt`);
  const robots = parseRobots(robotsResponse.status === 200 ? robotsResponse.body : '');
  if (robotsResponse.status !== 200) addIssue('robots_unavailable', `${options.origin}/robots.txt`, robotsResponse.error || `HTTP ${robotsResponse.status}`);
  const sitemapSources = [];
  const locations = [];
  const seenSitemaps = new Set();
  const pending = [...new Set([`${options.origin}/sitemap.xml`, ...robots.sitemaps.filter((url) => normalizedUrl(url) && allowedUrl(url))])];
  while (pending.length && seenSitemaps.size < 20) {
    const sitemapUrl = pending.shift();
    if (seenSitemaps.has(sitemapUrl)) continue;
    seenSitemaps.add(sitemapUrl);
    const response = await fetchDocument(sitemapUrl);
    sitemapSources.push({ url: sitemapUrl, status: response.status, redirects: response.redirects, error: response.error });
    if (response.status !== 200 || !/<(?:urlset|sitemapindex)\b/i.test(response.body || '')) {
      addIssue('sitemap_unavailable', sitemapUrl, response.error || `HTTP ${response.status}, missing sitemap XML`, 'error');
      continue;
    }
    const urls = [...response.body.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc>/gi)].map((match) => decodeEntities(match[1].trim()));
    if (/<sitemapindex\b/i.test(response.body)) {
      for (const url of urls) if (normalizedUrl(url) && allowedUrl(url) && !seenSitemaps.has(url)) pending.push(url);
    } else locations.push(...urls);
  }
  if (!locations.length) throw new Error('No URL sitemap could be read. Live SEO coverage cannot be established.');
  if (pending.length) addIssue('sitemap_limit', options.origin, 'Stopped after 20 sitemap documents.');
  const sitemapUrls = [...new Set(locations)];
  if (sitemapUrls.length !== locations.length) addIssue('duplicate_sitemap_urls', options.origin, `${locations.length - sitemapUrls.length} repeated URL entries.`);
  const candidates = [];
  for (const url of sitemapUrls) {
    const normalized = normalizedUrl(url);
    if (!normalized || new URL(normalized).origin !== options.origin || !allowedUrl(normalized)) {
      addIssue('sitemap_wrong_origin_or_invalid_url', url, 'Skipped: URL is outside the configured canonical origin.', 'error');
    } else if (/\.(?:json|js|css|png|jpe?g|webp|svg|gif|ico|pdf|woff2?)(?:$|\?)/i.test(normalized) || /^\/(?:api|_next)\//.test(new URL(normalized).pathname)) {
      addIssue('sitemap_non_page', url, 'Skipped an asset or API URL.');
    } else candidates.push(normalized);
  }
  const pages = await mapLimited(candidates.slice(0, options.maxPages), async (url, index) => {
    const response = await fetchDocument(url);
    const page = { url, finalUrl: response.url, status: response.status, redirects: response.redirects, error: response.error, xRobotsTag: response.headers?.['x-robots-tag'] || null, googlebotAllowedByRobots: robotsAllows(robots, url) };
    if (!page.googlebotAllowedByRobots) addIssue('robots_blocks_googlebot', url, 'The fetched robots.txt disallows this path for the Googlebot product token.', 'error');
    if (response.error) addIssue('fetch_error', url, response.error, 'error');
    else if (response.status !== 200) addIssue('sitemap_non_200', url, `HTTP ${response.status}`, 'error');
    if (response.redirects.length) addIssue('sitemap_redirect', url, response.redirects, 'error');
    if (response.status === 200) {
      if (!/text\/html/i.test(response.headers['content-type'] || '')) addIssue('not_html', url, response.headers['content-type'] || 'No Content-Type', 'error');
      else {
        Object.assign(page, parsePage(response.body, response.url));
        if (page.titles.length !== 1 || !page.titles[0]) addIssue('missing_or_multiple_titles', url, page.titles);
        if (page.descriptions.length !== 1 || !page.descriptions[0]) addIssue('missing_or_multiple_descriptions', url, page.descriptions);
        if (page.canonicals.length !== 1 || page.canonicals[0] !== url) addIssue('canonical_mismatch', url, page.canonicals, 'error');
        if (page.robotMetas.some((meta) => /\b(?:noindex|none)\b/i.test(meta.value)) || headerNoindexForGooglebot(page.xRobotsTag)) addIssue('sitemap_noindex', url, { meta: page.robotMetas, header: page.xRobotsTag }, 'error');
        if (!page.h1Count) addIssue('missing_h1', url, 'No h1 element in the anonymous HTML response.');
      }
    }
    if ((index + 1) % 50 === 0) console.log(`SEO audit: ${index + 1}/${Math.min(candidates.length, options.maxPages)} responses checked.`);
    return page;
  }, options.concurrency);
  const incoming = new Map(pages.map((page) => [page.url, new Set()]));
  for (const page of pages) for (const target of page.anchors || []) if (target !== page.url && incoming.has(target)) incoming.get(target).add(page.url);
  const allSitemapUrls = new Set(sitemapUrls.map((url) => normalizedUrl(url)).filter(Boolean));
  const linkedTargets = new Map();
  for (const page of pages) {
    for (const target of page.anchors || []) {
      if (allSitemapUrls.has(target) || !isPublicPageUrl(target, options.origin)) continue;
      if (!linkedTargets.has(target)) linkedTargets.set(target, new Set());
      linkedTargets.get(target).add(page.url);
    }
  }
  const linkedPages = await mapLimited([...linkedTargets.keys()].sort().slice(0, 250), async (url) => {
    const response = await fetchDocument(url);
    const result = { url, finalUrl: response.url, status: response.status, redirects: response.redirects, error: response.error, incomingSourceCount: linkedTargets.get(url).size, incomingSourceExamples: [...linkedTargets.get(url)].slice(0, 5) };
    if (response.error) addIssue('linked_page_fetch_error', url, result, 'error');
    else if (response.status >= 400) addIssue('broken_internal_link', url, result, 'error');
    // Successful legacy redirects and deliberate noindex pages are valid links.
    return result;
  }, options.concurrency);
  for (const page of pages) {
    page.incomingLinksFromCrawledSitemapPages = incoming.get(page.url).size;
    page.incomingLinkExamples = [...incoming.get(page.url)].slice(0, 5);
    page.outgoingInternalLinkCount = page.anchors?.length || 0;
    delete page.anchors;
    if (!page.incomingLinksFromCrawledSitemapPages && new URL(page.url).pathname !== '/') addIssue('no_incoming_links_from_crawled_sitemap_pages', page.url, 'No direct followable incoming link was found in this audit sample. This is not a claim that the page has no links elsewhere.');
  }
  const hostVariants = await mapLimited(['http://testdunya.net/', 'http://www.testdunya.net/', 'https://www.testdunya.net/', 'https://testdunya.net/'], async (url) => {
    const response = await fetchDocument(url);
    const result = { url, finalUrl: response.url, status: response.status, redirects: response.redirects, error: response.error };
    if (response.status !== 200 || response.url !== `${options.origin}/`) addIssue('host_variant_not_consolidated', url, result);
    else if (response.redirects.some((redirect) => ![301, 308].includes(redirect.status))) addIssue('host_variant_temporary_redirect', url, result);
    return result;
  }, options.concurrency);
  const sampleUrls = [...new Set([
    `${options.origin}/`, pages.find((page) => /\/test\//.test(page.url))?.url,
    pages.find((page) => /\/[56]-sinif\/.+\/test-/.test(page.url))?.url,
    ...['tus-', 'yks-', 'kpss-'].map((prefix) => candidates.find((url) => new URL(url).pathname.startsWith(`/test/${prefix}`))),
  ].filter(Boolean))];
  const userAgentComparisons = await mapLimited(sampleUrls, async (url) => {
    const normal = await fetchDocument(url);
    const bot = await fetchDocument(url, GOOGLEBOT_USER_AGENT);
    const summary = (response) => {
      const parsed = response.status === 200 && /text\/html/i.test(response.headers?.['content-type'] || '') ? parsePage(response.body, response.url) : null;
      return { status: response.status, finalUrl: response.url, error: response.error, xRobotsTag: response.headers?.['x-robots-tag'] || null, titles: parsed?.titles, canonicals: parsed?.canonicals, robotMetas: parsed?.robotMetas };
    };
    const normalResult = summary(normal);
    const googlebotUserAgentResult = summary(bot);
    const different = JSON.stringify(normalResult) !== JSON.stringify(googlebotUserAgentResult);
    if (different) addIssue('user_agent_metadata_difference', url, { normal: normalResult, googlebotUserAgent: googlebotUserAgentResult });
    return { url, different, normal: normalResult, googlebotUserAgent: googlebotUserAgentResult };
  }, options.concurrency);
  const issueCounts = {};
  for (const issue of issues) issueCounts[issue.code] = (issueCounts[issue.code] || 0) + 1;
  return {
    origin: options.origin, startedAt, checkedAt: new Date().toISOString(),
    method: { anonymous: true, userAgent: USER_AGENT, concurrency: options.concurrency, timeoutMs: 15000, maxRetries: 1, maxPages: options.maxPages, maxLinkedPages: 250, maxBodyBytes: MAX_BODY_BYTES },
    coverage: { sitemapEntries: locations.length, uniqueSitemapUrls: sitemapUrls.length, eligiblePages: candidates.length, checkedPages: pages.length, completeEligibleSitemapCoverage: pages.length === candidates.length, nonSitemapLinkedPages: linkedTargets.size, checkedLinkedPages: linkedPages.length, completeLinkedPageSample: linkedPages.length === linkedTargets.size },
    counts: { status200: pages.filter((page) => page.status === 200).length, fetchErrors: pages.filter((page) => page.error).length, errors: issues.filter((issue) => issue.severity === 'error').length, warnings: issues.filter((issue) => issue.severity === 'warning').length, byIssue: issueCounts },
    robots: { url: `${options.origin}/robots.txt`, status: robotsResponse.status, error: robotsResponse.error, parsed: robots },
    sitemapSources, hostVariants, userAgentComparisons, issues, pages, linkedPages,
    limitations: [
      'This report describes anonymous HTTP responses and HTML links, not Google Search Console indexing status or the reasons for excluded URLs.',
      'A Googlebot User-Agent comparison is a simulation from this runner, not a request from verified Googlebot infrastructure.',
      'Incoming links are counted only from the sitemap pages fetched here, without executing JavaScript. Other pages, external backlinks and JavaScript-generated links are outside this coverage.',
      'Up to 250 additional same-origin HTML page targets linked from the audited sitemap pages are checked for broken links; those targets are not recursively crawled. Private paths, queries and assets are excluded.',
      'Text character counts and fingerprints are diagnostics, not Google content quality scores or indexing guarantees.',
    ],
  };
}

module.exports = { audit, parseOptions, parsePage, parseRobots, robotsAllows, normalizedUrl, headerNoindexForGooglebot, isPublicPageUrl };
if (require.main === module) {
  Promise.resolve().then(async () => {
    const options = parseOptions(process.argv.slice(2));
    const report = await audit(options);
    fs.mkdirSync(path.dirname(options.output), { recursive: true });
    fs.writeFileSync(options.output, `${JSON.stringify(report, null, 2)}\n`);
    console.log(`SEO audit complete: ${report.coverage.checkedPages}/${report.coverage.eligiblePages} sitemap pages; ${report.counts.errors} errors, ${report.counts.warnings} warnings. Report: ${options.output}`);
  }).catch((error) => { console.error(`SEO audit could not complete: ${error.message}`); process.exitCode = 1; });
}
