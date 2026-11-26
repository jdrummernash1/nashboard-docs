---
title: Forks and models
---

[← Nashboard](index.md)

# Forks and models

Some parts of Nashboard are useful far beyond one house. Those parts are kept as **separately maintained forks and
models**: small, self-contained packages you can pick up for your own project, without taking the rest of the app.

Each one follows the same rule, called a **one-way split**. The working copy inside Nashboard is the only place a
change is made. A publish step rewrites it as plain principles, checks that nothing personal is in it, and copies it
into its own private repository. The split copy is never edited by hand, so it cannot drift away from the source.

<svg viewBox="0 0 720 300" role="img" aria-label="One source, three one-way arrows, three separately maintained packages: design guides, quality checks, autopilot panel" style="width:100%;height:auto;max-width:720px;display:block;margin:20px auto">
<defs><marker id="fm-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="var(--acc-tx)"/></marker></defs>
<rect x="250" y="20" width="220" height="64" rx="16" fill="var(--card2)" stroke="var(--acc-tx)" stroke-width="2"/>
<text x="360" y="48" text-anchor="middle" fill="var(--tx)" font-size="16" font-weight="700">Nashboard</text>
<text x="360" y="68" text-anchor="middle" fill="var(--mut)" font-size="12">the one place changes are made</text>
<path d="M300 84 C260 130 160 140 120 196" fill="none" stroke="var(--acc-tx)" stroke-width="2" marker-end="url(#fm-ar)"/>
<path d="M360 84 L360 196" fill="none" stroke="var(--acc-tx)" stroke-width="2" marker-end="url(#fm-ar)"/>
<path d="M420 84 C460 130 560 140 600 196" fill="none" stroke="var(--acc-tx)" stroke-width="2" marker-end="url(#fm-ar)"/>
<text x="196" y="150" text-anchor="middle" fill="var(--mut)" font-size="11">rewrite as principles</text>
<text x="404" y="150" text-anchor="start" fill="var(--mut)" font-size="11">make independent of the app</text>
<text x="560" y="168" text-anchor="middle" fill="var(--mut)" font-size="11">strip, then check</text>
<g>
<rect x="20" y="200" width="200" height="80" rx="16" fill="var(--card)" stroke="var(--line)"/>
<text x="120" y="232" text-anchor="middle" fill="var(--tx)" font-size="15" font-weight="700">Design guides</text>
<text x="120" y="254" text-anchor="middle" fill="var(--mut)" font-size="12">two guides</text>
<rect x="260" y="200" width="200" height="80" rx="16" fill="var(--card)" stroke="var(--line)"/>
<text x="360" y="232" text-anchor="middle" fill="var(--tx)" font-size="15" font-weight="700">UI quality checks</text>
<text x="360" y="254" text-anchor="middle" fill="var(--mut)" font-size="12">generic check tools</text>
<rect x="500" y="200" width="200" height="80" rx="16" fill="var(--card)" stroke="var(--line)"/>
<text x="600" y="232" text-anchor="middle" fill="var(--tx)" font-size="15" font-weight="700">Autopilot panel</text>
<text x="600" y="254" text-anchor="middle" fill="var(--mut)" font-size="12">panel and control model</text>
</g>
</svg>

## The packages

<div class="nb-doors">
<div class="nb-door"><b>Design guides</b><small>Two guides, kept up to date as features are added. One describes how to design a rich, automatic Home Assistant dashboard (cards that appear when needed, calm layout, saved data that is never lost). The other is a generic GUI design guide that fits any app.</small></div>
<div class="nb-door"><b>UI quality checks</b><small>The automatic checks that load a real page in a headless browser and fail on a broken design rule: tap target size, text contrast, sibling button sizes, layout jumps, cards landing on each other. Rewritten so they work on any page list, not just this one.</small></div>
<div class="nb-door"><b>Autopilot panel</b><small>One small page that steers a long-running AI coding assistant (auto on or off, pause, usage stop lines, work order, notes, one-tap requests) and shows what it reports back, plus the written control model it follows.</small></div>
</div>

| Package | What you get | Who it suits | State |
|---|---|---|---|
| Design guides | A Home Assistant dashboard design model and a generic GUI design guide, as principles | Anyone designing a card-based dashboard or any interface | Private repository created; guides drafted from the design rules |
| UI quality checks | Generic, page-list-independent check tools | Anyone who wants rules checked automatically in a browser | Private repository created; tools being made independent of the app |
| Autopilot panel | A one-file control panel and the control model | Anyone running an AI assistant through a backlog on its own | Packaged and ready to publish as its own private repository |

## How each package is kept current

1. **Edit here, never there.** The working copy inside Nashboard is the source. Nobody edits a split repository directly.
2. **Refreshed on a schedule.** Each package is refreshed every five versions, on the same schedule as these docs.
3. **Privacy check first.** A publish step searches the package for names, addresses, device lists, accounts and
   anything specific to one household, and stops if it finds any.
4. **Private until chosen.** The repositories start private. Making one public is a separate decision that also needs a
   licence.

## What makes a part portable

- It does not mention a person, a place or a device.
- It reads its settings from one small document with safe defaults.
- It works without the rest of the app, or says plainly what it needs from the host.
- It has a short README that says what it is, what it needs, and how to make it yours.

## Looking for more

Other generic tools in the project are reviewed for the same treatment as they appear. A part is a good candidate when
it already has no household data in it and is useful in a different project.

See also: [Design kit](design-kit.md) (the design rules as one shareable file),
[How the AI builds it](ai-build-system.md) (the autopilot panel in use) and
[Developer tools](developer-tools.md) (the automatic checks).
