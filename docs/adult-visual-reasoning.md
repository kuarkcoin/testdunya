# Görsel Mantık ve Akıl Yürütme Testi (`/iq-test`)

## Product contract

- Turkish interface for adults aged 18+. No name, date of birth, or account collection.
- The legacy URL stays; the homepage card and route metadata describe visual reasoning, not an IQ estimate.
- Thirty original scored SVG items: 8 visual sequences, 8 matrices/shape relationships, 7 mental rotations, 7 spatial relationships. Two additional practice examples are separate, unscored, untimed, and never part of the result denominator.
- Ordering is editorial, from single-feature to compound operations. It is **not** empirically calibrated difficulty, adaptive testing, a standardized assessment, a percentile, a diagnosis, or a measure of general intelligence. No licensed IQ item bank is used.
- This must not be used for clinical evaluation, recruitment, or personnel selection. Accessibility accommodations have not been shown to produce equivalent results.

## Score and timing

The user-facing **Test puanın** (visual-reasoning test performance) is `Math.round(correct / 30 * 100)`, an integer from 0 to 100. Unanswered items remain in the denominator. Every correct answer has equal weight; wrong answers do not subtract points. There is no speed bonus. For example, 24 correct gives 80/100, and 1 correct gives 3/100. This is a raw proportion of correct answers, **not an IQ score or population percentile**. Correct, wrong, unanswered, elapsed time, and per-category counts remain visible.

The thirty-minute limit is a product-design choice, not a validated test standard. No scored question is rendered before the explicit Start action. The start event records an absolute timestamp and deadline. Each answer, navigation, finish action, interval, focus, pageshow, pagehide and visibility-change check enforces that deadline. Background throttling cannot grant additional answering time: the next action checks the wall-clock deadline before accepting an answer. Expired attempts end at the deadline, not when the tab eventually wakes. A detected backward clock change ends the attempt rather than granting time.

## Local persistence and answer mapping

`app/iq-test/attempt.ts` contains pure state functions. Local storage has a versioned key and a content fingerprint over the actual bank. Restore validates the exact schema, integer timestamps and chronology, answer lengths/ranges, current index, balanced answer-key positions, and four-item permutations. Corrupt or stale-version records are discarded with a visible restart message. Storage denial is caught and explained; the in-memory attempt can continue, but refresh recovery is not promised.

Each attempt balances the correct displayed positions (8/8/7/7, with the two extra positions randomized), shuffles distractors, and persists all mappings. The internal answers always store original option indexes. Refresh, back/forward question navigation, and review do not reshuffle. Question order stays fixed to preserve the intended progression. Cross-tab events read the newest storage value instead of replaying potentially queued stale event payloads. The UI advises using one tab.

This is client-side practice, not a tamper-resistant exam: device clocks and local storage can be manually altered, source code contains the bank, and a browser without storage cannot resume. No anti-cheat or secure assessment guarantee is made.

## Accessibility and figures

Figures are self-contained responsive SVGs with accessible titles/descriptions. No meaning depends on colour alone. Each choice is a native labelled radio input with visible keyboard-focus and selected-state indicators. Question navigation uses native buttons and explicit answered/empty labels. An inline enlarge control provides a larger, keyboard-scrollable question figure. Practice answers explain the example; scored-item explanations are only shown after finishing. The timer does not announce every second; coarse remaining-time notices use a live region.

## Verification

Run from the repository root using the exact package-lock dependencies:

```sh
node scripts/validate-visual-reasoning.cjs
node scripts/validate-visual-reasoning-ssr.cjs
npx tsc --noEmit --incremental false
node scripts/validate-grade6.cjs
npm run build
```

The first script checks shuffle, stable mapping, start/expiry, refresh/corruption/rollback, navigation and raw scoring (including 24/30 = 80). The second uses real React server rendering plus an explicitly mocked hook/host harness to verify markup and event wiring. It is **not** a browser, a React lifecycle simulator, or an end-to-end browser test. The build additionally runs source SEO, reading-content regressions and HTTP/SSR SEO checks against a temporary local Next production server.

Independent content review derives each answer from the displayed geometry and rule, checks all four options are distinct in rendered pixels, and renders contact sheets at narrow-screen figure sizes. These artifacts are engineering QA, not psychometric validation.

Browser automation is unavailable/denied in this task and was not retried. Actual browser hydration, screen-reader announcements, focus/keyboard behaviour, responsive page layout and real browser lifecycle/storage events require later manual verification. Passing native tests must not be presented as having exercised those browser interactions. Production deployment is not part of this change; preview publication is handled separately.
