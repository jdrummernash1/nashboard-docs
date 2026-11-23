---
title: Nashboard
---


<!-- stats:start -->
<style>.nbs{position:relative;border-radius:18px;overflow:hidden;margin:1.2rem 0 1.6rem;padding:calc(min(100%,1600px) * .2) 18px 18px;padding-top:20%;background:#0b0e14 url(images/hero-night.jpg) center top/100% auto no-repeat;box-shadow:0 10px 30px rgba(0,0,0,.25)}.nbs::before{content:"";position:absolute;inset:0;background:none}.nbs-g{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.nbs-t{padding:14px 16px;border-radius:14px;background:rgba(20,22,28,.42);border:1px solid rgba(255,255,255,.22);-webkit-backdrop-filter:blur(14px) saturate(140%);backdrop-filter:blur(14px) saturate(140%);color:#fff}.nbs-t b{display:block;font-size:1.5rem;line-height:1.2;font-weight:700;color:#fff}.nbs-t span{font-size:.82rem;color:rgba(255,255,255,.85)}@media (max-width:640px){.nbs{padding-top:132px!important;background-size:auto 140px!important;background-position:left top!important;padding-left:12px;padding-right:12px}.nbs-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.nbs-t{padding:10px 12px}.nbs-t b{font-size:1.2rem}}.nbs-u{position:relative;margin:12px 2px 0;font-size:.82rem;color:rgba(255,255,255,.9)}.nbs-u a{color:#ffd28a}</style>
<div class="nbs" role="img" aria-label="Nashboard: the illustrated house at night, with project stats"><div class="nbs-g"><div class="nbs-t"><b>32,723</b><span>Lines of custom code</span></div><div class="nbs-t"><b>$205k–$409k</b><span>Market value · about 2,727 developer hours</span></div><div class="nbs-t"><b>44</b><span>Pages</span></div><div class="nbs-t"><b>.256</b><span>Latest build number</span></div><div class="nbs-t"><b>27</b><span>Open backlog items</span></div><div class="nbs-t"><b>5</b><span>Open bugs</span></div><div class="nbs-t"><b>346</b><span>Changes shipped, last 7 days</span></div></div><p class="nbs-u">Updated Nov 23 2026 · <a href="changelog.html">Change log</a></p></div>
<!-- stats:end -->

<!-- whatsnew:start -->
<style>.wn{border:1px solid rgba(255,181,71,.45);background:rgba(255,181,71,.08);border-radius:16px;padding:14px 18px;margin:0 0 1.4rem}.wn h2{margin:0 0 .3rem;font-size:1.15rem;border:0}.wn p{margin:.2rem 0 .5rem;opacity:.85}.wn ul{margin:.3rem 0 0;padding-left:1.1rem}.wn li{margin:.18rem 0}.wn-b{display:inline-block;min-width:2.6em;font-weight:700;color:#d98a00}</style>
<div class="wn"><h2>What's new · latest release build .256</h2>
<p>Everything shipped since the last docs update (build .253) · updated Nov 23 2026 · <a href="changelog.html">full change log</a></p>
<ul><li><span class="wn-b">.256</span> Bug button focuses the Jot box on mobile</li><li><span class="wn-b">.256</span> Doorbell person matching widened, debug guide written (idea b45d2b8e, check HA entities).</li><li><span class="wn-b">.256</span> Markets refresh about once a minute</li><li><span class="wn-b">.256</span> Jot box pastes pictures</li><li><span class="wn-b">.256</span> Touch scrolling smoothed</li><li><span class="wn-b">.256</span> Real car photos</li><li><span class="wn-b">.256</span> YouTube counts as playing on TVs</li><li><span class="wn-b">.256</span> Wishlist Purchased fixed.</li><li><span class="wn-b">.256</span> Home order model with Lower priority, prettier cards first, full-screen card notice, Today at a glance AI summary, New marks, kid's colour, oven / window / nursery sensors, Sitter page, Guest mode and guest traffic.</li><li><span class="wn-b">.256</span> Laundry, pool, Energy and Bills Labs page, leak sensors, UPS, printer, garage door, smoker, smart plugs, earbuds and internet provider cards.</li><li><span class="wn-b">.256</span> Frigate package, doorbell and closings cards, video states and mail truck, camera alert settings, cast timeout countdown, TV leveler, wall display (wake on approach, Nest Hub kitchen view).</li><li><span class="wn-b">.256</span> AI suggestions card, Family inbox, toolbox photo import and picture, bedtime library, house photo colour fallback.</li><li><span class="wn-b">.256</span> Native Android Auto app scaffold (android-auto/), not yet built or tested in a car.</li><li><span class="wn-b">.256</span> Data store phase 2a helper (dsx) and key inventory</li><li><span class="wn-b">.256</span> Nothing converted yet.</li><li><span class="wn-b">.255</span> Jot box stays put (no jumping, touch scroll works while focused)</li><li><span class="wn-b">.255</span> Pantry and other grids use the shared gap</li><li><span class="wn-b">.255</span> System cards fill the row</li><li><span class="wn-b">.255</span> About has one full-width Roll credits card, all cards open</li><li><span class="wn-b">.255</span> Room chips filter or jump.</li><li><span class="wn-b">.254</span> Terminal tiles back (idle tiles stay), open backlog count in the top bar, new builds reach every screen within a minute, nav stays put on hover, trivia tidbits removed, pets keep playing while scrolling.</li></ul>
</div>
<!-- whatsnew:end -->

Nashboard is a custom dashboard for [Home Assistant](https://www.home-assistant.io/). It runs inside Home Assistant
(through a small Lovelace card), so it works anywhere Home Assistant does: wall tablets, phones, laptops, and TVs
through casting.

**How it is built, in short.** The code is written as about 190 small source pieces (JavaScript and CSS, one piece per
feature or page), not as one big file. A build script joins the pieces in order, checks that the result parses, and
writes one generated page that Home Assistant serves. Nobody edits that generated page by hand. Before every deploy a set
of automatic checks loads the real app in a headless browser and fails on any broken design rule (card gaps and widths,
overlapping controls, one Right now area per page, name clashes, saved data, maps, legends, speed, and nothing personal
hardcoded). Values that belong to one household (teams, trips, rooms) live in small seed files and in saved settings,
never in the code. The app is built by a main Claude chat with helper agents, steered from a private control panel; see
[How the AI builds it](ai-build-system.md).

*Docs schedule: this site is refreshed on every build that ends in 0, starting at build .260.*

It is built around one idea: **the screen should show what matters right now, and get out of the way otherwise.**
Cards appear on their own when something needs attention (a plane overhead, the garage left open, rain coming,
trash night) and leave on their own when it no longer does.

![The Home page on a laptop](images/snip-home.jpg)

![Home and the Nursery room on phones](images/snip-phones.jpg)

*Screenshots use a made-up demo house; no real data.*

## Contents

- [Why Nashboard](why-nashboard.md): what problem it solves, for someone new to smart homes (you don't have to do anything)
- [Guided tour](tour.md): a step-by-step visual walkthrough of every page, one screenshot each
- [Living with Nashboard](living-with-nashboard.md): the everyday habits that get the most out of it, for everyone in
  the family (no smart-home experience needed)
- [How it all connects](how-it-connects.md): the story from devices and data sources through Home Assistant to the
  cards, phone alerts and screens, with worked examples
- [How it's built](how-its-built.md): the design models and rules behind the app, the automatic quality checks, the
  build and deploy pipeline, and how it was built with Claude (a coordinator session and its helper agents)
- [How the AI builds it](ai-build-system.md): the main chat and its helpers (Claude, local and free cloud models), usage
  tracking, the autopilot panel, the idea-to-deploy flow and the safety nets
- [Diagrams](diagrams.md): how the app works and the AI architecture, as two flow diagrams
- [App architecture](app-architecture.md): how the finished app is structured, how its data is protected, and the server
  placement and hardware it needs
- [Developer workflow](developer-workflow.md): how ideas jotted in the dashboard become builds, with the live backlog,
  Claude's suggestions, quality checks, update chimes and the autopilot panel
- [Developer tools](developer-tools.md): the build pipeline, quality checks, autopilot panel, stuck watcher, live status, usage monitoring and the efficiency engine
- [Design engine](design-engine.md): every design rule and data rule in plain language, and the checks that enforce them
- [Themes](themes.md): every look, light/dark mode and accent colour, and when each suits
- [Design kit](design-kit.md): the design rules as one shareable file you can drop into your own dashboard project
- [Every feature](features.md): the complete list, including every automatic Home card
- [Change log](changelog.md): everything shipped, newest first
- [Home page](home.md): the banner, every Home card, and the pop-up cards
- [All pages](pages.md): every page in menu order, with a screenshot of each
- [Settings and personalisation](settings.md): menu pages, per-user settings, interface scale, alerts
- [Automations](automations.md): everything the house does on its own (phone alerts, reminders, confirm-first garage),
  what triggers each one and how to turn it off, plus the "make your own" templates
- [Data sources](integrations.md): every Home Assistant integration and free service the app uses, what each one powers,
  how to set it up and its limits
- [Device setup checklist](device-setup.md): what each TV, phone, car and watch needs
- [How it works and installing](setup.md): the files, the card, deploying, backups

## Highlights

- **Illustrated home banner** with live lights, a mailbox that opens when mail is due, a compact weather overlay,
  status chips and a rotating "tidbit".
- **Smart Home cards**: overhead aircraft, the Space Station when it's up, live games, commute times, packages,
  breaking news, gas prices, and more, each shown only when useful.
- **Pop-up cards** (garage open, rain coming, freeze tonight, lights still on, maintenance due, trash night and others) that stay at least three minutes and say when the situation clears.
- **Stable layout**: once a page settles, cards never jump sideways; new cards drop into the emptiest spot.
- **More than 30 pages**, from Rooms, Cameras and Calendar to Planes, Space, Air & Allergy, Network & Storage, a Family
  Board, a Guest page, Storage, Hobbies, Workout, an Activity timeline and per-room dashboards such as a calm Nursery
  screen, plus a Kitchen tablet mode for a wall screen.
- **Background automations** that reach every phone with the screen off: medicine OK again, the dog timeout, birthdays,
  the week ahead, the goodnight check, gas price drops, a package left outside, planes and the Space Station. See
  [Automations](automations.md).
- **Medicine & fever tracking** per child, **pet medicine by NFC tag**, cars by VIN with recall checks, and a house
  inventory with printable QR labels.
- **Per-user settings** that follow each Home Assistant user to every device.
- **Casting** to TVs and a full-screen **Display** mode.
- **Phone compass**: the sky dials and the plane map turn as you turn the phone.

## Pages at a glance

| Page | In one line |
|---|---|
| [Home](pages.md#home) | Banner, status, and the cards that matter right now |
| [Rooms](pages.md#rooms) | Every room's lights and devices, with room dashboards |
| [Cameras](pages.md#cameras) | Camera wall with layouts and live view |
| [Calendar](pages.md#calendar) | Day, week and month views; add and edit events; Google Tasks |
| [Activity](pages.md#activity) | Today's timeline: doorbell, doors, garage, arrivals, packages |
| [Now Playing](pages.md#now-playing) | Music around the house, speaker groups, browsing |
| [Shopping](pages.md#shopping) | The shared shopping list |
| [Packages](pages.md#packages) | Shipments from any carrier, email import, autoship |
| [Recipes](pages.md#recipes) | Recipe book and meal plan from Mealie |
| [Pantry & Fridge](pages.md#pantry--fridge) | What's on hand and what expires soon |
| [Storage](pages.md#storage) | Where things are kept, with QR labels and warranties |
| [Garage](pages.md#garage) | Tool storage: toolboxes, drawers and every tool, searchable |
| [Kids](pages.md#kids) | Big-button page for a kid's tablet: bedtime, star chart, coat check, shows |
| [Weather](pages.md#weather) | Forecast, radar, sun and moon |
| [Air & Allergy](pages.md#air--allergy) | Air quality, UV, pollen, "open the windows?" |
| [Sports](pages.md#sports) | Your teams' games and live scores |
| [Commute](pages.md#commute) | Live drive times for each trip |
| [Planes](pages.md#planes) | Live aircraft map, airport boards, highest plane worldwide |
| [Map](pages.md#map) | People and devices on a map |
| [Space](pages.md#space) | Space Station passes, launches, satellites, sky dial |
| [Multi-view](pages.md#multi-view) | Several pages on one big screen |
| [Display](pages.md#display) | Full-screen TV mode, a different setup per TV |
| [Kitchen tablet](pages.md#kitchen-tablet) | Home on a kitchen wall screen, back to Home when idle, dim at night |
| [Finance](pages.md#finance) | Watchlist and charts |
| [Room dashboards](pages.md#room-dashboards) | A page per room; the Nursery has its own design |
| [Network & Storage](pages.md#network--storage) | Internet, router, NAS, devices online |
| [Family Board](pages.md#family-board) | Kitchen screen: who's home, today, trash, lists, medicine, birthdays, intercom |
| [Guest](pages.md#guest) | Wi-Fi QR code and house info for guests |
| [Maintenance](pages.md#maintenance) | Recurring house jobs with countdowns |
| [Pets](pages.md#pets) | Pet characters, dog timeout and feeder, pet medicine, litter box |
| [Hobbies](pages.md#hobbies) | Each person's hobbies with shared cards |
| [Workout](pages.md#workout) | Interval timer, routines and a workout log |
| [Automations](pages.md#automations) | What the house does on its own; make your own |
| [System](pages.md#system) | Health, updates, backups, settings, device setup |
| [About](pages.md#about) | Version, what's new, features, credits, the tour |
| [Labs](pages.md#labs) | Experiments such as a 3D printer monitor |
