---
title: How it all connects
---

[← Nashboard](index.md)

# How it all connects

Most of these docs go page by page. This one tells the other story: how a doorbell, a weather forecast or a timer on
the Pets page turns into a card on the kitchen screen and a buzz on everyone's phone. It is written for two readers at
once: a curious family member who wants to know "how does it know?", and a Home Assistant user who wants to know which
piece does what.

*Everything here describes the design; examples use a made-up house.*

## The big picture

Information flows in one direction, left to right, and only the last step is something you see or feel.

<style>
.hc{margin:1.4rem 0 1.8rem;color:inherit}
.hc-row{display:flex;flex-wrap:wrap;align-items:stretch;gap:6px}
.hc-box{flex:1 1 150px;min-width:150px;border:2px solid currentColor;border-radius:14px;padding:12px 12px 10px;background:rgba(127,127,127,.08)}
.hc-box b{display:block;font-size:1rem;margin-bottom:4px}
.hc-box small{display:block;font-size:.8rem;line-height:1.35;opacity:.85}
.hc-num{display:inline-block;min-width:1.5em;height:1.5em;line-height:1.5em;text-align:center;border-radius:50%;border:1.5px solid currentColor;font-size:.75rem;font-weight:700;margin-right:6px}
.hc-arrow{flex:0 0 22px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;opacity:.7}
.hc-loop{margin-top:8px;border:1.5px dashed currentColor;border-radius:12px;padding:8px 12px;font-size:.82rem;opacity:.85}
@media (max-width:720px){.hc-row{flex-direction:column}.hc-box{min-width:0}.hc-arrow{flex-basis:auto;transform:rotate(90deg);height:22px}}
</style>
<div class="hc" role="img" aria-label="Diagram: data sources feed Home Assistant, which feeds the dashboard and automations, which reach the screens and phones">
<div class="hc-row">
<div class="hc-box"><b><span class="hc-num">1</span>Data sources</b><small>Integrations: lights, locks, garage, doorbell, cameras, calendars, weather, packages, speakers, the router, pet devices, phones. Free web services: planes, Space Station, scores, news, air quality.</small></div>
<div class="hc-arrow" aria-hidden="true">→</div>
<div class="hc-box"><b><span class="hc-num">2</span>Home Assistant</b><small>Entities (one per sensor or switch), helpers (timers, text boxes, switches), to-do lists (shopping, pantry, chores) and the saved app data store (every Nashboard setting, merged and versioned).</small></div>
<div class="hc-arrow" aria-hidden="true">→</div>
<div class="hc-box"><b><span class="hc-num">3</span>The dashboard</b><small>Pages, each with its own cards. A card always lives on its page; Home shows a copy only while it matters. Rules decide when automatic cards appear and leave.</small></div>
<div class="hc-arrow" aria-hidden="true">→</div>
<div class="hc-box"><b><span class="hc-num">4</span>Automations</b><small>Run inside Home Assistant even when every screen is off. Watch helpers, clocks and sensors, then send notifications to phones, watches and car screens.</small></div>
<div class="hc-arrow" aria-hidden="true">→</div>
<div class="hc-box"><b><span class="hc-num">5</span>Screens</b><small>Phones, laptops, wall tablets, the kitchen tablet, TVs through casting, watch tiles and Android Auto / CarPlay.</small></div>
</div>
<div class="hc-loop">↺ The loop back: the dashboard also <b>writes</b> to Home Assistant. Tapping Done, starting a timer or adding to a list changes an entity or helper, and the dashboard writes its answers ("2 packages outside", "medicine OK at 1:40 AM") into helpers so automations can act on them.</div>
</div>

## 1. Data sources: where the facts come from

Everything starts with something that knows a fact about the house or the world:

- **Home Assistant integrations** talk to the devices and accounts: lights, locks, the garage door, door and window
  sensors, the doorbell and cameras, the calendar and Google Tasks, the recipe server, package tracking and a mail
  account, drive times, speakers, the router and NAS, the litter box, the sound machine, and the Home Assistant phone
  app (location, notifications, NFC tags).
- **Free web services** are read by the dashboard directly: weather and air quality, National Weather Service alerts
  and radar, aircraft overhead, the Space Station and satellites, rocket launches, sports scores, news, barcodes, drug
  labels and car recalls.

The full list, with what each one powers and how to set it up, is in [Data sources](integrations.md).

## 2. Home Assistant: the house's memory

Home Assistant is the hub. The dashboard never talks to a light bulb; it talks to Home Assistant, which keeps:

- **Entities**: one for every sensor and switch ("garage door: open", "front door lock: unlocked", "person: away").
  Each **area** (room) groups its entities, and every area automatically gets a room page.
- **Helpers**: small values that live in Home Assistant, such as the dog timeout **timer**, a text box holding "packages
  left outside", or a switch for an alert. Helpers are how the dashboard and the automations pass notes to each other.
- **To-do lists**: the shopping list, the pantry (each item with its place and date), chores and Google Tasks. Any
  screen can add to them, and so can a voice assistant.
- **The saved app data store**: every Nashboard setting that is shared (commute trips, pets, birthdays, storage
  inventory, room settings, medicine rules, hobbies) or follows a person (their menu, hidden cards, alert switches).
  Every save goes through one layer that reads the latest copy first and merges it, so two screens saving at once never
  wipe each other out. A save that would suddenly shrink a list asks first, the last 20 versions are kept with Undo, and
  a dated copy is exported every night. **System → Saved data** lists every saved setting with its size, entries, last
  save, who saved it and the version.

Because all of this lives in Home Assistant and not in the dashboard file, a new version of the dashboard never wipes
anything, and every screen sees the same data.

## 3. The dashboard: pages and the cards that live on them

The dashboard is one web page that runs inside Home Assistant on every screen. It is organised around a few rules:

- **Every card lives on its page first.** Rain coming and Freeze tonight live on Weather, Trash night on the Family
  Board, the dog timeout on Pets, Leave soon on Commute, Maintenance due on Maintenance. Each page has a **Right now**
  card that always shows its cards, with a calm line when nothing is happening ("No rain expected soon").
- **Home never owns a card.** When a card's situation matters, Home shows a **copy**, and the copy leaves again when it
  stops mattering. The Home page is the "what matters right now" view of the whole house.
- **Automatic cards follow the same rules everywhere:**
  - each one has a clear condition for showing ("a garage door open more than 10 minutes", "rain likely in the next few
    hours", "the evening before trash pickup");
  - once it shows, it stays **at least three minutes**, so the screen doesn't flicker;
  - when the situation clears it says so before leaving ("Closed now", "Bins handled", "Rain no longer expected",
    "All caught up");
  - many have a one-tap fix (Close, All off, Done, Add to list), and anything physical (locks, the garage) needs a
    second tap to confirm;
  - anyone can hide a card for today or for good, just for them; admins can turn one off for everyone.
- **A card shows wherever it relates.** A dishwasher-filter job shows on Maintenance, on Home when due, and on the
  Kitchen room page. A low battery shows on System and on that device's room. Packages out for delivery show on the
  front-of-the-house room. Pet notes typed on the Guest page show on Pets.

The full table of automatic cards, with when each shows and which page it lives on, is in
[Every feature](features.md#home-automatic-cards).

## 4. Automations: what keeps working when every screen is off

A dashboard only works while someone is looking at it. **Automations** run inside Home Assistant around the clock:

- The dashboard does the thinking it's good at (when the next Space Station pass is, when a medicine is OK again, which
  packages are sitting outside) and writes the answer into a **helper**.
- An automation watches that helper (or a clock, or a sensor) and sends the alert at the right moment.
- Alerts go to **every phone with the Home Assistant app**, Android and iPhone, each on its own notification channel so
  one kind can be silenced without losing the rest. The same notifications can show on a **watch** and on **Android
  Auto / CarPlay**.
- **Nothing physical happens on one tap from a notification.** The garage always asks to confirm first.

Every shipped automation, what triggers it and how to turn it off: [Automations](automations.md).

## 5. Screens: the same app everywhere

- **Phones** run it inside the Home Assistant app (Android and iPhone), with a phone layout, left- or right-handed
  controls and a sideways swipe between pages.
- **Wall tablets and laptops** run the same page full size.
- **The kitchen tablet** runs the normal Home page, goes back to Home after two minutes untouched and dims at night.
- **TVs** get the dashboard by **casting**. Each TV gets its own view in Home Assistant's TV dashboard, so it remembers
  which TV it is (and its own setup: rotating or still, which screens, night dimming) even after a reload.
- **Watches and cars** don't show web pages: they get one-glance tiles and items built from Home Assistant entities
  and scripts.

When a new version is deployed, every screen reloads itself (waiting while someone types), and can play a short soft
chime so you hear the wall screens update.

---

## Worked examples

### When a package is delivered and nobody is home…

1. **Data source**: package tracking (and shipping emails) reports the package as delivered.
2. **Home Assistant**: the person entities say everyone is away.
3. **Dashboard**: the Packages page marks it delivered, the Activity timeline logs it, and the **Package left outside**
   card shows in Packages' Right now and as a copy on Home. The banner's info chips count it.
4. **Automation**: the dashboard writes "1 package outside" into a helper; an automation sees the number go up and sends
   every phone one notification on the Packages channel (only when the count rises, so it never repeats).
5. **Screens**: phones buzz even with the screen off; the kitchen tablet and any TV showing Home have the card. When
   someone gets home, or it's brought in, the card says so and leaves after its three minutes.

The same thing happens after dark even if someone is home, because a package on the porch overnight matters too.

### When the dog timeout starts…

1. **Dashboard**: someone taps 30 minutes on the Pets page (or on a watch tile).
2. **Home Assistant**: that starts the dog timeout **timer** helper, so the countdown lives in Home Assistant, not on
   one screen.
3. **Dashboard, everywhere**: the Dog timeout card counts down on the Pets page's Right now, and a copy appears on Home
   on every screen, with the little dog character sitting on its header. **Done** on any screen ends it for all.
4. **Automation**: when the timer runs out, every phone gets "Time to let the dog out", even if no screen is open.
5. **Afterwards**: the card leaves Home; Pets still shows the timer, ready for next time.

### When it's about to rain and a window is open…

1. **Data sources**: the weather forecast says rain is likely in the next few hours; a window sensor and the garage
   door report open.
2. **Home Assistant**: those are just entities ("window: open", "garage: open").
3. **Dashboard**: the **Rain coming** card shows on the Weather page's Right now and as a copy on Home, saying when it
   starts and the chance, and it **flags the open windows and the open garage**, with Close for the garage (tap twice
   to confirm). On phones the compact weather card opens by itself when rain is likely.
4. **Screens**: everyone sees it on the kitchen tablet, the TVs (Home's cards also show as a strip on the radar and
   camera screens) and phones.
5. **When it clears**: once the windows are shut, the card stops flagging them; when the rain passes, it says "Rain no
   longer expected" and leaves.

### More connections, in one line each

- **Recipe → shopping list → pantry**: paste a recipe link, send it to the shopping list, and it first asks "Use what's
  in the pantry?", leaving off what you already have (and can take it off the pantry).
- **Pantry → use soon**: undated items get a suggested use-by date from standard food storage times; food expiring in
  three days shows on Pantry, the Kitchen room and Home.
- **Maintenance → Home → the room**: a house job coming due shows on Maintenance, pops onto Home, and lives on its
  room's page; Done resets its schedule everywhere.
- **Calendar → commute → leave soon**: an event with a location, or a saved commute trip, becomes a Leave soon card
  with live drive time and a Navigate button.
- **Chores → the Kids page**: a chore ticked on the Family Board earns a star on the Kids page's star chart.
- **Storage → Garage**: toolboxes and drawers are just Storage places, so a tool added on the Garage page is found by
  the Storage search, and the Garage room page shows a Tool storage card.
- **Doorbell → everywhere**: a ring shows a snapshot on Home, the Family Board and every room page on the Activity timeline with the time.

---

See also: [Every feature](features.md) · [All pages](pages.md) · [Automations](automations.md) ·
[Data sources](integrations.md) · [Living with Nashboard](living-with-nashboard.md)
