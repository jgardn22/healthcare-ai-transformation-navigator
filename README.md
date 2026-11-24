# Healthcare AI Navigator

An outcome-led guide for healthcare providers and health plans. Open `index.html` or serve this folder with a static HTTP server. There is no build step.

The five visual patterns describe ways of working, not a maturity ladder or a recommended deployment sequence. [Advisor reference](knowledge/advisor-reference.md) is the decision-logic source of truth. It was introduced in this refresh from the owner's supplied requirements; no earlier advisor reference or README existed.

## Maintenance

- Mondays: lightly scan the [primary sources](knowledge/sources.json). Apply only verified material corrections to existing content.
- First business day of each month: recheck every public claim, source, link and decision step. Remove unsupported items.
- After major Ignite, Build, HIMSS, Copilot or Foundry announcements, or on request: run an additional source review. The workflow supports manual dispatch with an announcement URL. It does not monitor announcements continuously.
- The repository workflow runs read-only source/link and library checks. Project-owned agent execution performs the substantive weekly/monthly research; a successful workflow is not evidence that product claims were reviewed.

For each candidate, record the change, official URL, source date when stated, review date, and inclusion or exclusion reason. Prefer the latest official Learn guidance when sources conflict. A GA product does not make every feature, tool or connector GA. Do not infer GA from a planned release date.

Only publish verified GA capabilities relevant to payer/provider outcomes. Illustrative designs must be clearly labeled and use synthetic, anonymized or approved aggregate inputs. Do not include customer names, internal reports, CRM material, private links, pricing, licensing, capacity, availability, SLA, certification or compliance-status claims. Link to official documentation, the [estimator](https://microsoft.github.io/copilot-studio-estimator/), and the customer's Microsoft account team or compliance team instead. Keep HAVEN hidden and Business Central excluded. Use plain consultative language, outcome-first headings, subtle product footnotes and no em dashes.

## Review and pull request

1. Read this file, the page and advisor reference. Inspect the latest source evidence, not just the existing catalog status labels.
2. Make minimal verified corrections. Unsupported legacy shelves may be consolidated rather than carried forward with a disclaimer.
3. Only when there is a material change, update `Last reviewed: YYYY-MM-DD`, append a short sourced `CHANGELOG.md` entry and bump every `index.html` cache query to the previous maximum plus one. Keep CRLF line endings.
4. Run `node --test tools/*.test.mjs`, `node tools/check-navigator.mjs` and `node tools/check-navigator.mjs --links`. Serve and render the page in light/dark and mobile/desktop views, including multiple Explorer filters and expanded cards. Confirm audio is muted before browser tests. Check images, alt text, headings, anchors, keyboard access and contrast. Record failures and blocked checks honestly.
5. Open a review PR on `navigator-update/YYYY-MM-DD` when branch policy allows that name. In app-managed worktrees use the app's date-based branch name and disclose its prefix instead of renaming with Git. Never push main or merge. List each change and source, then unsure/excluded items separately. Include the required Agent assessment at the top using the final full head SHA.

No material change: do not commit only a review date or source snapshot; write `No changes: no material verified updates.` in the run summary.

## Library safeguards

`node tools/sync-aibast.mjs` inventories upstream candidates without publishing them. Library lifecycle labels, synthetic demos and an official GitHub owner alone are not GA evidence. `knowledge/aibast-reviewed.json` is the explicitly reviewed allowlist. A future entry needs official capability-level evidence, a review date, explicit placement and public-safe reviewed copy.

Only `node tools/sync-aibast.mjs --write-reviewed` regenerates `aibast.js` from that allowlist. `--offline` supports deterministic local regeneration without an upstream scan. Do not hand-edit the generated file. No keyword placement, preview promotion, raw-description copying, force pushes or automatic PR edits are permitted. Existing library PRs require a fresh human review against this policy.
