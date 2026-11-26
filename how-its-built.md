---
title: How it's built
---

# How it's built

Nashboard is a large app (tens of thousands of lines, more than 40 pages) that was designed and built almost entirely
in conversation with Claude, Anthropic's AI model. What keeps something that size consistent is not a framework: it is
a written set of **design models and rules**, a handful of **automatic quality checks** that enforce them, and a
**build and deploy pipeline** that refuses to lose anything. This page explains all three, and then how the work itself
is organised between a coordinator session and its helper agents.

**On this page**

1. [The core idea](#the-core-idea)
2. [Design principles](#design-principles)
3. [The card model and the packing grid](#the-card-model-and-the-packing-grid)
4. [Home cards: live on their page, visit Home](#home-cards-live-on-their-page-visit-home)
5. [Type, colour, light and dark](#type-colour-light-and-dark)
6. [Phones, TVs, cars and Full window](#phones-tvs-cars-and-full-window)
7. [Data is sacred](#data-is-sacred)
8. [The quality checks](#the-quality-checks)
9. [How the build works](#how-the-build-works)
10. [How it was built with Claude](#how-it-was-built-with-claude)
11. [Rules that grow](#rules-that-grow)

<style>
.hb{margin:1.4rem 0 1.8rem;color:inherit}
.hb-row{display:flex;flex-wrap:wrap;align-items:stretch;gap:6px}
.hb-box{flex:1 1 140px;min-width:140px;border:2px solid currentColor;border-radius:14px;padding:12px 12px 10px;background:rgba(127,127,127,.08)}
.hb-box b{display:block;font-size:1rem;margin-bottom:4px}
.hb-box small{display:block;font-size:.8rem;line-height:1.35;opacity:.85}
.hb-arrow{flex:0 0 22px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;opacity:.7}
.hb-note{margin-top:8px;border:1.5px dashed currentColor;border-radius:12px;padding:8px 12px;font-size:.82rem;opacity:.85}
.hb-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;max-width:560px}
.hb-card{border:2px solid currentColor;border-radius:10px;padding:8px;font-size:.78rem;line-height:1.3;min-height:58px;background:rgba(127,127,127,.08)}
.hb-card.w{grid-column:span 2}
.hb-card.t{min-height:96px}
.hb-card.f{grid-column:1/-1;min-height:34px;border-style:dashed}
.hb-hub{display:grid;grid-template-columns:1fr;gap:6px;max-width:640px}
.hb-hub .hb-row .hb-box{flex-basis:110px;min-width:110px}
.hb-lead{border:2.5px solid currentColor;border-radius:14px;padding:12px;text-align:center;background:rgba(127,127,127,.14)}
.hb-lead small{display:block;font-size:.8rem;opacity:.85}
.hb-down{text-align:center;font-size:1.2rem;opacity:.7;line-height:1}
@media (max-width:720px){.hb-row{flex-direction:column}.hb-box{min-width:0}.hb-arrow{flex-basis:auto;transform:rotate(90deg);height:22px}.hb-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hb-card.w{grid-column:1/-1}}
</style>

## The core idea

Every rule on this page serves one sentence: **the screen should show what matters right now, and get out of the way
otherwise.** A wall tablet that is always full of everything stops being looked at. A screen that is calm most of the
time, and then shows "the garage has been open 20 minutes" in a card nobody had to ask for, gets trusted.

Three consequences shape the whole design:

- **Automatic cards.** Information appears on its own when it matters and leaves when it no longer does.
- **One way to do each thing.** Every card, grid, button, list and map follows a single shared model, so a person who
  learns one page has learned them all, and a fix in one place is a fix everywhere.
- **Nothing is ever lost.** Lists, notes and settings that people type in are treated as the most valuable thing in the
  system, more valuable than any feature.

## Design principles

The rules are kept in one written file that every working session reads before it starts. They are short, concrete
and testable. In general terms:

| Principle | What it means in practice |
|---|---|
| **Fix once, fix everywhere** | When a design problem is fixed anywhere, the fix becomes a written standard, and the entire app (every page, card, sheet and phone layout) is reviewed and brought up to it in the same pass. |
| **Every new thing gets a standard** | If something is built that has no rule yet, a rule is written first and then applied everywhere it fits. |
| **Directions become rules** | Any design direction from the owner ("make it look like this", "this should behave like that") is written into the rules right away, and the change is always announced, never made silently. |
| **Cards live on their page** | Every card has a home page where it always shows. Home never owns a card; it shows a copy while the card matters. |
| **Related pages share cards** | A card made on one page also appears on the page it relates to (a pet note on the guest page, a kitchen maintenance job on the kitchen's room page, a low battery on that device's room). |
| **Every room gets a page** | Every area in Home Assistant gets a room page automatically, with its own settings (type, sections to show or hide, extra cards). |
| **No dead ends** | Every page gets the standard header with a Full window button; every quick-add list gets a voice mic; every page has a short subtitle in the phone menu; new pages carry a NEW tag for their first day. |
| **Text never overruns** | Anything without a Show more option shrinks to fit its box. Names wrap or shrink, but at least one whole word always stays visible; never "Li...". |
| **Scroll, don't cut** | Rows of buttons or chips that are too wide scroll sideways with momentum and a soft fade that hints there is more. |
| **Legends always** | Anything that carries meaning through colour, dashes or icons (maps, charts, compasses, radar, routes) has a legend covering every style it draws. |
| **Calm wins** | Playful animations live mostly on the pets page and appear rarely elsewhere; a Calm setting and the device's reduced-motion setting always switch them off. |
| **No arbitrary limits** | Text boxes and lists have no character limits, except fixed formats such as a postal code. |

## The card model and the packing grid

Almost everything on screen is a **card**. Cards are built by one shared function, not by hand, so they all get the
same header, the same collapse behaviour (tap the top bar), the same ⋯ menu for actions, the same Show more, and the
same spacing.

### Only three widths

A card is **standard** (one column, used for nearly everything), **wide** (two columns, for rich content such as
cameras, the calendar or news) or **full** (a full-width row). There are no in-between sizes. The column width comes from
one shared token (about 320 px), with a larger token for pages of big device cards, and the gap between cards is another
shared token. No page invents its own pixel width.

### The packing grid

Cards sit in a **packing grid** ("masonry"): columns of equal width, with each new card dropped into the emptiest
spot so there are no holes. Once a page settles, cards never jump sideways. Groups that cannot fill the width are
centred.

<div class="hb" role="img" aria-label="Diagram: a four-column packing grid with standard one-column cards, two wide two-column cards, a tall card and a full-width row, all aligned to the same columns with identical gaps">
<div class="hb-grid">
<div class="hb-card"><b>Standard</b><br>1 column</div>
<div class="hb-card w"><b>Wide</b><br>2 columns (cameras, calendar)</div>
<div class="hb-card t"><b>Standard</b><br>taller content packs below the short ones</div>
<div class="hb-card"><b>Standard</b></div>
<div class="hb-card"><b>Standard</b></div>
<div class="hb-card"><b>Standard</b></div>
<div class="hb-card w"><b>Wide</b></div>
<div class="hb-card"><b>Standard</b></div>
<div class="hb-card f"><b>Full</b>: a full-width row</div>
</div>
<div class="hb-note">Every card exactly fills the columns it spans, so all single cards on a page share one width and every gap is identical. The layout check measures this on every page.</div>
</div>

Rules that keep the grid honest:

- **One single-card width per page.** Every single card is exactly one column wide, including cards that live outside
  the grid (such as "Right now" and "Now playing"), which read the measured column width. A grid item can never stretch
  its column.
- **Container cards** (a card holding a grid of tiles, such as rooms or cameras on Home) span exactly as many columns as
  the cards beside them, lay their tiles out landscape (up to three across) and centre the squared-up group.
- **Huge, text-heavy cards** (a long backlog list, the full feature list) are at least a third of the page wide and never
  more than three across. Everything else keeps the standard width.
- **Every page packs.** A page's card container is either a packing grid or a deliberate fixed layout (a calm nursery
  screen, a kitchen board). Plain grids that leave gaps are not allowed.

### Smart layout

Home and the pages with a Right now box use **Smart layout**, which is on by default (a per-screen switch under Settings, This screen). Each card is sized to fit what it shows, every card packs in one flow, section names become small labels with a row of section chips, and your card order is kept: a card moved into another section stays there. Cards slide gently into place and never under a finger. Turn it off and the plain packing grid above applies.

### Page width

On very wide screens, content never spreads wider than about **five standard cards**. It centres with side margins
instead. A little side margin is preferred over empty space at the bottom, so single cards stack into fewer, taller
columns. Full window ignores the cap.

## Home cards: live on their page, visit Home

The Home page is the heart of the app, and it follows a strict model. A card such as "Rain coming", "Freeze tonight",
"Trash night", "Leave soon" or "Garage open" **always lives on its own page** (Weather, the family board, Commute,
Garage) where it is always visible. Home only shows a **copy** while a rule says it matters, and the copy leaves when the
situation clears.

<div class="hb" role="img" aria-label="Diagram: a card lives on its home page; when its show rule is true a copy appears on Home; when the rule clears the copy goes away">
<div class="hb-row">
<div class="hb-box"><b>Its own page</b><small>The card always shows here: Weather, Commute, Pets, Garage, the family board.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Show rule</b><small>A simple condition: rain within the hour, garage open more than a few minutes, time to leave for a trip.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Copy on Home</b><small>Appears on its own, stays at least a few minutes, says when the situation has cleared.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Gone again</b><small>When the rule clears, the copy leaves. Home is calm again.</small></div>
</div>
<div class="hb-note">Every new feature is asked the same question: is there a Home card that should show itself when this matters, and hide again after?</div>
</div>

Because Home never owns anything, nothing is ever only on Home, and hiding a card never hides the information. Hidden
cards are always listed in their own section on the System page (each with Show again) and in the Customize menu.

## Type, colour, light and dark

### One font family

The whole app uses **one font family**, inherited from the page. Only three things differ: the Nashboard logo (rounded),
and codes, passwords and the flight board (monospace). Sizes come from a **six-step type scale**, so there are no one-off
font sizes.

### Colour tokens

Colours are never typed in directly. They come from named tokens: a background, a card surface, text, muted text, and
accent colours for meaning (accent, warning, bad, good, info, blue).

The rule that matters most for readability: **meaningful text uses the text version of a token**, which is darker in
light mode, and never a bright accent colour straight on text. Text *on* an accent background (a selected chip, a
primary button) uses a dark ink colour, so it stays readable on the bright fill in both modes.

### Light and dark

Every change must look right and stay readable in **both** light and dark mode. The layout check runs every page in
both modes and fails any text with a contrast ratio under 3:1. (This documentation site follows the same idea: it
switches to dark when your device is in dark mode.)

### Accessibility

Accessibility is built into the shared pieces rather than bolted on: buttons are real buttons with labels, diagrams
carry text descriptions, charts and maps have legends so colour is never the only signal, text keeps readable contrast
in both modes, motion respects the reduced-motion setting, and interface scale can be adjusted per device.

## Phones, TVs, cars and Full window

### Phones

Everything must work on **both Android and iPhone**. Phone layouts are checked at two phone sizes, one with an iPhone
browser identity. Because the test browser is Chromium, iPhone limits are also handled in code:

- no speech recognition inside the Home Assistant app on iPhone, so the mic falls back to the keyboard's own dictation;
- no Fullscreen API on iPhone, so Full window zooms the page instead;
- no vibration.

On phones the title bar becomes two lines (the title, which may wrap but is never cut off, then the time and a connection
dot); on wide screens and TVs it is a single line. Phone notifications come from Home Assistant automations sent to
every phone, with both Android settings (channels, importance, car display) and iPhone settings (sound, interruption
level).

### Full window

Every Full window button (on pages, multi-view windows and cards) zooms the content so **the whole page fits the window
with no scrolling**. This is automatic for every Full window button, past and future, which is what makes any page usable
as a TV or wall display.

### Location

Every map and radar uses one location helper: the device's real location first; if that is blocked, where the signed-in
person's commute plan says they are; then a postal code saved on the device; otherwise home. Radar may use the nearest
station, but it names the station and pins the viewer.

### Maps at every zoom

Every map must work at every zoom level, including the fractional zooms that pinching and Full window produce. A map
check renders each map at a spread of zooms and fails on missing tiles or markers that drift from their real position.

### Cars

Car features (Android Auto and CarPlay) follow their own short design document. The car never shows a web page: car
features are Home Assistant entities, scripts and notifications displayed by the companion app. Each is readable at one
glance, there are six items or fewer, and **nothing physical happens on one tap**: locking a door or moving the garage
always goes through a confirm notification first.

## Data is sacred

This is the top-priority rule. Everything a person has typed in (lists, notes, places, trips, medicine rules, room
settings, preferences) must survive every build, every bug and every broken screen, for past, recent and future features
alike.

<div class="hb" role="img" aria-label="Diagram: a screen saves through one data layer which reads the latest copy, merges, checks for shrinking lists, versions the value, and stores it in Home Assistant with history and a nightly export">
<div class="hb-row">
<div class="hb-box"><b>A screen saves</b><small>Any page, any device, possibly at the same moment as another.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>One data layer</b><small>Reads the latest copy first and merges, so two screens never wipe each other. Refuses to save a value that never loaded on that screen.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Guards</b><small>A save that would empty a list or shrink it a lot asks first. Shape changes ship with a versioned migration that keeps every old field.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Home Assistant</b><small>Stored outside the app file, with recent versions and Undo, plus a dated export every night.</small></div>
</div>
</div>

The supporting rules:

- **Configuration lives in Home Assistant, never in the app file.** Shared settings live in Home Assistant's saved app
  data; personal settings live in that person's user data and follow them to every device. A new build therefore can
  never wipe anything.
- **Only device conveniences stay on the device** (theme, interface scale, a location pin). Anything a person enters is
  never kept only in the browser.
- **Keep data on a failed refresh.** A refresh that fails, comes back empty or arrives half-written never replaces data
  already on screen.
- **Migrations, not resets.** When the shape of a saved value changes, a numbered migration carries every old field into
  the new design, keeps fields it doesn't recognise, and leaves the old copy in place until the new one has saved.
- **Published lists are guarded.** The deploy refuses to publish a list file that would drop more than a couple of items
  or empty a list, and reads it back afterwards to check every row arrived.

## The quality checks

Rules only hold if something checks them. Each check is a small script that loads the real app in a headless browser
(or reads the source) and exits with a failure the moment a rule is broken. A failure blocks the deploy until it is
fixed.

| Check | What it enforces | When it runs |
|---|---|---|
| **Layout and contrast** (gapcheck) | Every card in a packing grid exactly fills the columns it spans, so single cards share one width and every gap is identical, vertically too; a lone card is not stretched; cards outside the grid match the column; no text under 3:1 contrast. Runs every page in dark and light, on desktop, tablet and phone widths. | After every UI change |
| **Overlap** (overlapcheck) | No button, link or field sits on top of another, including each card's 3-dot button. | After every UI change |
| **One Right now** (rightnowcheck) | Every page has exactly one Right now area. | After every UI change |
| **Nothing personal in code** (genericcheck) | No name, place or device is hardcoded in the code; household values live in settings and seed files. | Every build |
| **Data retention** (datacheck) | Lists every place the app saves or reads data; fails any person-entered value kept only in the browser instead of Home Assistant. | Every build |
| **Name clashes** (namecheck) | No two source pieces may declare the same top-level function, shared state slot or button action, since the later one would silently win. | Every build |
| **Maps** (mapcheck) | Renders each map at whole and fractional zooms, past the base map's last tile zoom and in Full window; fails on uncovered areas, markers away from their true position, or a blank map. | Any map change |
| **Legends** (legendcheck) | Every chart, map or diagram that uses colour or line style for meaning has a legend in the same card covering each style. Pure decoration is allowlisted with a reason. | Any chart, map layer or coloured diagram change |
| **No jumping** (jumpcheck) | Collapsing or expanding a card moves no other card and not the card itself. | Any card change |
| **Holiday house** (housecheck) | Falling or flying holiday effects never pass in front of the house on Home. | Any holiday look change |
| **Device** (devicecheck) | Phone and tablet behaviour with real touch events, a slow CPU, rotation, offline and the companion app. | Any touch or layout change |
| **First screen** (firstscreencheck) | The main card starts on the first screen and no tall card is mostly empty. | After every UI change |
| **Words** (wordscheck) | Plurals, typos, doubled words and page intros on every page. | After every UI change |
| **Moving cards** (movecheck) | Every card size can be lifted, dragged and dropped with a 44 px handle. | Any card or layout change |
| **Contrast** (contrastcheck) | Text and icons meet WCAG AA contrast in dark and light. | After every UI change |
| **Touch size** (tapcheck) | Every control has a hit area of at least 44 px (aim 48). | After every UI change |
| **Page flow** (flowcheck) | Whole-page card flow: no cards touching or closer than the gap, no card alone beside empty columns, one column grid. | After every UI change |
| **Switches** (togglecheck) | Every switch flips within 100 ms. | After every UI change |
| **How it works** (howcheck) | Every card has exactly one How it works entry. | After every UI change |
| **Button sizes** (sizecheck) | Sibling buttons in a bar or group are the same size. | After every UI change |
| **Smooth scrolling** (scrollcheck) | Touch scrolling stays smooth. | After every UI change |
| **Saves** (savecheck) | Every save waits for its data to load first, never writes empty over data, keeps no person-entered data only in the browser, and versions object data. | Every build |
| **Load** (loadcheck) | Loads the app without a browser and fails on a load-time crash. | Every build |
| **Performance** (perfcheck) | Per-page render time, long tasks, memory and page size, plus idle CPU on Home, compared with a saved baseline; fails anything more than 30% worse. | Every fifth deploy |

The checks run page groups in batches so each run finishes quickly (each stops itself after 5 minutes, and a shared queue lets 4 run at once), and phone layouts are checked at both an Android
and an iPhone size.

## How the build works

The app is **written as more than 450 numbered pieces** (JavaScript, CSS and a few HTML parts) and **served as one generated page** that runs inside Home Assistant through a small dashboard card. Editing one huge file is error-prone, and impossible for several workers at once, so the source is split: head, styles, body, then the script by feature, then the closing part. A build script joins them in file-name order, checks that the joined script parses, and writes the page. Nobody edits the generated page by hand.

<div class="hb" role="img" aria-label="Diagram: numbered source pieces are joined by a build script, checked, backed up, deployed to Home Assistant, and the backlog and wishlist are published with list guards">
<div class="hb-row">
<div class="hb-box"><b>Source pieces</b><small>Numbered files: head, styles, body, one script piece per feature, then the end. New features slot in before the closing piece.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Build</b><small>Joins the pieces in order into the generated app page and stops if it does not parse. A check mode confirms the built file matches the pieces exactly.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Checks</b><small>Syntax, name clashes, data retention, then the layout and contrast pass (plus maps, legends, performance when due).</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Deploy</b><small>Dated backup first, then copy to Home Assistant. Refuses if the live file was changed outside the repo.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Publish lists</b><small>The backlog and wishlist go out with guards: no big drops, read back to verify.</small></div>
</div>
<div class="hb-note">Configuration files (automations, scripts, sensors) are copied separately; Home Assistant then reloads them on its own within about a minute, triggered by a small request sensor.</div>
</div>

Details that make this safe:

- **Backups before every change.** Every deploy makes a dated backup of the app and the configuration. Retention keeps
  the newest few plus the newest of each week and each month, and prunes the rest automatically. Saved app data is
  backed up too, and never leaves the house's server.
- **Pull before you push.** Before changing anything, the current files are pulled from Home Assistant and compared, so
  an edit made directly on the server is never overwritten.
- **Cache busting.** After a deploy the TV view's file version is bumped so cast screens pick up the new build.
- **Secrets stay put.** Secret files, the database and the rest of Home Assistant's private storage are never copied
  into the repository.
- **Batched deploys.** Several finished backlog items share one syntax check, one quality pass and one deploy.

## How it was built with Claude

Nashboard was built by one person working with **Claude**: **Claude Opus** for design, coordination, reviews, audits and
documentation, and **Claude Sonnet** for contained, well-defined builds. Simple lookups and mechanical edits go to a
lighter model when that saves usage.

### A coordinator and its helpers

One **coordinator session** owns the plan. It reads the backlog, picks the next batch of work, and decides which parts
can run in parallel. It can hand pieces of the batch to **up to ten helper agents** at once.

<div class="hb" role="img" aria-label="Diagram: one coordinator session at the top hands work to several helper agents, each owning its own source piece; the coordinator integrates, checks and deploys">
<div class="hb-hub">
<div class="hb-lead"><b>Coordinator session</b><small>Reads the backlog, plans the batch, assigns work, integrates, runs every check, deploys, updates the backlog.</small></div>
<div class="hb-down" aria-hidden="true">&darr; &darr; &darr;</div>
<div class="hb-row">
<div class="hb-box"><b>Helper A</b><small>Owns one new feature piece. Sonnet.</small></div>
<div class="hb-box"><b>Helper B</b><small>Owns a different piece. Sonnet.</small></div>
<div class="hb-box"><b>Helper C</b><small>Config-only work (automations, scripts).</small></div>
<div class="hb-box"><b>Helper D</b><small>Review, audit or docs. Opus.</small></div>
</div>
<div class="hb-down" aria-hidden="true">&uarr; &uarr; &uarr;</div>
<div class="hb-note">Each helper gets its own file (or named files) and a short name prefix, never commits or deploys, and hands its result back. Two helpers never edit the same file at the same time.</div>
</div>
</div>

The ground rules for helpers:

- **Own files only.** Each helper gets its own new source piece, or edit rights to specific named pieces, and nothing
  else. That is why the source is split into pieces in the first place.
- **Own prefix.** Each helper uses a short prefix for its function and state names; the name-clash check catches any
  slip.
- **No shipping.** Helpers never commit, deploy, or touch the backlog. The coordinator integrates their work, runs every
  check, and ships one batch.
- **Right model for the job.** Opus for reviews, audits and documentation; Sonnet for contained builds. Models are throttled by usage, complexity and price, and a small controller moves each kind of job up or down a level based on how well the last results checked out; see [How the AI builds it](ai-build-system.md).

### From an idea to a build

<div class="hb" role="img" aria-label="Diagram: an idea jotted in the app is filed into the backlog, built, checked and deployed, and the app ticks the idea off">
<div class="hb-row">
<div class="hb-box"><b>Jot it down</b><small>Anyone types an idea into the app's design studio page, in plain words, with no category.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Filed</b><small>Claude picks the topic, rewrites it as a buildable item, suggests a matching automatic Home card, and keeps its tag.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Backlog</b><small>One list grouped by topic, easiest items first. The single source of truth.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Built</b><small>Batched, checked and deployed. The item moves to Done with a line in the dated shipped log.</small></div>
<div class="hb-arrow" aria-hidden="true">&rarr;</div>
<div class="hb-box"><b>Ticked off</b><small>The app sees the tag in the published backlog and marks the idea done.</small></div>
</div>
<div class="hb-note">Claude also proposes its own ideas. They appear in Jot it down with Accept and Ignore, and nothing is built until a person accepts it.</div>
</div>

### Live work status and usage

While work is running, the coordinator writes a short status (current build, what it is doing, items open, bugs left,
what shipped today) that shows on a Claude card on the app's Home page, next to the plan's usage limits. A private
control panel lets the owner pause work, set limits and queue requests, and the coordinator reads it between items.

Work runs in long autonomous stretches: finish a request, then carry straight on through the backlog, easiest items
first, importing new ideas after every deploy and making a backup at least once an hour. Usage is checked between items,
and the run stops at a clean point (everything committed, deployed and pushed) before the usage window runs out, then
schedules itself to resume after the reset.

### Finish mode

When the backlog grows faster than it shrinks, the owner can switch on **finish mode**: no new work is accepted, every
jotted idea is still filed so nothing is lost, Claude's own suggestions wait in the Accept / Ignore list, and the effort
goes into finishing what is already planned.

### Saving usage

Efficiency rules are part of the workflow too: targeted searches instead of reading whole files, no re-reading files
that were just edited, screenshots only for layout changes and cropped to the part that changed, short tool output,
batched deploys, and lighter models for easy work.

## Rules that grow

The rule file is a living document. Every time a problem is found and fixed, the question is "what rule would have
prevented this?", and that rule is written down, announced, applied across the whole app, and (where possible) turned
into a check. Most of the checks on this page exist because a specific bug once slipped through: two pieces silently
overriding each other's functions led to the name-clash check; a map with blank tiles at an in-between zoom led to the
map check; a list that could have been wiped led to the data rules.

The result is an app that one person and an AI can keep extending, page after page, without it drifting apart.

See also: [How it all connects](how-it-connects.md) for how data flows from devices to screens, and
[Set it up](setup.md) for the files and installing.
