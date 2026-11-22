---
title: Nashboard
---

![Nashboard: the illustrated house banner at night](images/hero-night.jpg)

# Nashboard

<!-- stats:start -->
<style>.nbs{position:relative;border-radius:18px;overflow:hidden;margin:1.2rem 0 1.6rem;padding:22px;background:#0d0f13 url(images/hero-day.jpg) 78% 60%/cover no-repeat;box-shadow:0 10px 30px rgba(0,0,0,.25)}.nbs::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,10,14,.15),rgba(8,10,14,.55))}.nbs-g{position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}.nbs-t{padding:14px 16px;border-radius:14px;background:rgba(20,22,28,.42);border:1px solid rgba(255,255,255,.22);-webkit-backdrop-filter:blur(14px) saturate(140%);backdrop-filter:blur(14px) saturate(140%);color:#fff}.nbs-t b{display:block;font-size:1.5rem;line-height:1.2;font-weight:700;color:#fff}.nbs-t span{font-size:.82rem;color:rgba(255,255,255,.85)}.nbs-u{position:relative;margin:12px 2px 0;font-size:.82rem;color:rgba(255,255,255,.9)}.nbs-u a{color:#ffd28a}</style>
<div class="nbs" role="group" aria-label="Project stats"><div class="nbs-g"><div class="nbs-t"><b>15,417</b><span>Lines of custom code</span></div><div class="nbs-t"><b>$96k–$193k</b><span>Market value · about 1,285 developer hours</span></div><div class="nbs-t"><b>35</b><span>Pages</span></div><div class="nbs-t"><b>199</b><span>Builds shipped</span></div><div class="nbs-t"><b>69</b><span>Open backlog items</span></div><div class="nbs-t"><b>3</b><span>Open bugs</span></div><div class="nbs-t"><b>212</b><span>Shipped this week</span></div></div><p class="nbs-u">Updated Nov 21 2026 · <a href="changelog.html">Change log</a></p></div>
<!-- stats:end -->

**Version 2.0** (November 2026): medicine & fever tracking, the pantry, pet characters, holiday themes, birthdays,
the intercom, a welcome tour, background phone alerts and much more. See [Every feature](features.md).

Nashboard is a custom dashboard for [Home Assistant](https://www.home-assistant.io/). It is one HTML file that runs
inside Home Assistant (through a small Lovelace card), so it works anywhere Home Assistant does: wall tablets,
phones, laptops, and TVs through casting.

It is built around one idea: **the screen should show what matters right now, and get out of the way otherwise.**
Cards appear on their own when something needs attention (a plane overhead, the garage left open, rain coming,
trash night) and leave on their own when it no longer does.

![The Home page on a laptop](images/snip-home.jpg)

![Home and the Nursery room on phones](images/snip-phones.jpg)

*Screenshots use a made-up demo house; no real data.*

## Contents

- [Living with Nashboard](living-with-nashboard.md): the everyday habits that get the most out of it, for everyone in
  the family (no smart-home experience needed)
- [Every feature](features.md): the complete list, including every automatic Home card
- [Change log](changelog.md): everything shipped, newest first
- [Home page](home.md): the banner, every Home card, and the pop-up cards
- [All pages](pages.md): every page in menu order, with a screenshot of each
- [Settings and personalisation](settings.md): menu pages, per-user settings, display size, alerts
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
