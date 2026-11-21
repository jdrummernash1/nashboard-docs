---
title: All pages
---

[← Nashboard](index.md)

# All pages

Pages appear in the side menu (or the bottom bar and "More" sheet on phones). Each Home Assistant user can choose
which pages they see; see [Settings](settings.md). Pages only appear once their data exists, for example Cameras
needs at least one camera.

They're listed here in the same order as the menu, so you can scroll through the whole app or jump to one:

[Home](#home) · [Rooms](#rooms) · [Cameras](#cameras) · [Calendar](#calendar) · [Now Playing](#now-playing) · [Shopping](#shopping) · [Packages](#packages) · [Recipes](#recipes) · [Weather](#weather) · [Air & Allergy](#air--allergy) · [Sports](#sports) · [Commute](#commute) · [Planes](#planes) · [Map](#map) · [Space](#space) · [Multi-view](#multi-view) · [Display](#display) · [Finance](#finance) · [Room dashboards](#room-dashboards) · [Design Studio](#design-studio) · [Network & Storage](#network--storage) · [Family Board](#family-board) · [Guest](#guest) · [Maintenance](#maintenance) · [Pets](#pets) · [System](#system) · [Labs](#labs)

*Screenshots use a made-up demo house; no real data.*

## Home

![Home page](images/home-dark.jpg)

The page most screens sit on: an illustrated house banner with live status, and cards that appear when they matter
(a plane overhead, rain coming, a game on, a package arriving) and leave when they don't. Every card and pop-up is
described on the [Home page](home.md) guide.

## Rooms

![Rooms page](images/rooms.jpg)

Every Home Assistant area as a card: lights, switches, fans, media, climate and sensors, with chips to filter the
list. Tap a room's name to open its [room dashboard](#room-dashboards). Rooms can have a picture as their
background. Rooms with a routine (such as a bedtime routine) show a button for it.

## Cameras

![Cameras page](images/cameras.jpg)

A camera wall like a security console: layouts (auto, 1, 2×2, 3×3, 4×4, 1+5, 1+7), grouping, ordering, hiding,
labels, snapshot refresh rate or live video. Tap a camera for a large live view. Snapshots are fetched with the
dashboard's own sign-in, never stale camera links.

## Calendar

![Calendar page](images/calendar.jpg)

Day, week and month views across all your calendars, in the colours you pick (shared by everyone). Add and edit
events, toggle calendars on and off, and see the meal plan alongside.

## Now Playing

![Now Playing page](images/music.jpg)

What every speaker is playing, with artwork, play/pause, seek, volume and per-speaker faders inside speaker groups.
Browse and search Music Assistant to start something new.

## Shopping

![Shopping page](images/shopping.jpg)

The Home Assistant shopping list (and Mealie's, if connected). Add several items at once, tick items into the
cart, clear the cart, and "Buy again" from recent items. Changes show on every screen instantly.

## Packages

![Packages page](images/packages.jpg)

Add a tracking number from any carrier. Shipments are also found in email (USPS, store order emails) and through
17TRACK. Each package shows its stage and latest event. A separate section handles recurring **autoship** orders
with their next ship date.

## Recipes

![Recipes page](images/recipes.jpg)

The family recipe book from Mealie: search, photos, ingredients scaled to servings, importing recipes from a link, and
the week's meal plan. **Cook mode** shows one step at a time with the amounts inline ("whisk the **2 cups** flour") and a
row of that step's ingredients with a little picture for each. Sending a recipe to the shopping list first asks **"Use
what's in the pantry?"** and leaves the ticked items off the list.

## Pantry

What's on hand and when it expires, in a shared Home Assistant to-do list. Scan a barcode with the phone camera (Chrome
on Android) or type it; the name comes from Open Food Facts. Add the expiration date and amount. **Use soon** lists
anything expiring within 3 days; **Used up** removes it, and the cart button also adds it to the shopping list. Home and
the Kitchen room show a card for food to use soon.

## Weather

![Weather page](images/weather.jpg)

Current conditions, hourly and daily forecasts, rain chances, the National Weather Service forecast text, sun
and moon times, and a live radar with warnings outlined (full-screen capable). Phones can show weather for where
the phone is.

## Air & Allergy

![Air & Allergy page](images/air.jpg)

- **"Open the windows?"**: a plain-English verdict from air quality, pollen, rain coming, temperature, humidity,
  wind, and whether opening up would cool the house.
- **Air quality**: US AQI with the next 24 hours as coloured bars, plus PM2.5, PM10, ozone and NO₂.
- **UV index**: now, today's peak and the hours sun protection is needed.
- **Pollen**: from Home Assistant's IQVIA integration (Pollen.com), when set up.
- **Inside vs outside**: temperature, humidity and wind side by side.

## Sports

![Sports page](images/sports.jpg)

Your teams' schedules and scores from ESPN (via the TeamTracker integration), with live game cards, TV network
links and recaps.

## Commute

![Commute page](images/commute.jpg)

Each trip (for example drop-off then work, or school runs) with live drive time per leg from Waze, delay versus
usual, "leave by" times, a route map and recent days' history. Trips, stops and times are set up in the page's
settings, which create the Waze routes in Home Assistant automatically.

## Planes

![Planes page](images/snip-planes.jpg)

A live map of aircraft around home or around the phone (5 to 500 nm), coloured by altitude, with flight paths,
military aircraft ringed, and emergencies (squawk 7700) highlighted worldwide.

- Glass cards on the map's edge: the plane you picked (all details and a small photo), the **closest** plane,
  **military** planes in range, and the **highest plane in the world** right now (tap to fly the map there).
- Arrivals and departures boards for nearby airports.
- Satellite map, full window or full screen, and the phone **compass** (the map turns as you turn).
- Optional alerts when a plane passes overhead.

## Map

![Map page](images/map.jpg)

People and tracked devices on a map with their recent path for the day.

## Space

![Space page](images/space.jpg)

The Space Station: where it is, the next visible pass, every pass for three days, and whether each is visible.
Upcoming rocket launches. Bright satellites overhead now, and a **sky dial** that can turn with the phone's
compass.

## Multi-view

![Multi-view page](images/multi.jpg)

Show up to four pages at once on a large screen, each in its own tile.

## Display

![Display page](images/display.jpg)

A full-screen mode for TVs and wall displays: clock, weather, cameras, and automatic cards (up next, commute,
games, overhead aircraft, Space Station, packages, now playing, breaking news). It can rotate between views or
stay on one. Casting to a TV opens the same Display.

## Finance

![Finance page](images/finance.jpg)

A watchlist from a published spreadsheet: prices, day and week moves, charts, and a Bitcoin long-term "power
law" chart.

## Room dashboards

![The Nursery room dashboard](images/nursery.jpg)

Every room has its own dashboard, opened by tapping the room's name on Home or the Rooms page (they are not in the
side menu). The general version groups the room's devices into lights, media, climate, doors, switches and
scenes, cameras and sensors. Rooms can have a custom design:

- **Nursery**: a calm, dark screen for night-time. Big clock and status, toddler-lock switch, the night light
  (on/off orb, brightness, eight colours, with a note that red and amber are gentlest for sleep), the sound
  machine (play/stop, volume, favourites, and every built-in sound grouped into sleep, bedtime and wake-up),
  the bedtime routine, and the nursery speaker.

## Design Studio

![Design Studio page](images/backlog.jpg)

Opened from System or the More menu (not in the side menu): jot down ideas and browse the project backlog. See
[Settings](settings.md#design-studio-backlog-and-ideas).

## Network & Storage

![Network & Storage page](images/snip-network.jpg)

- **Status strip**: internet, NAS, Home Assistant and offline devices, each green, amber or red.
- **Internet**: connection status, router uptime, live download and upload speed, data used today and this month,
  router CPU and memory, and hourly speed tests with a 7-day chart.
- **NAS** (Synology DSM): volume space and status (with an explanation when it needs attention), each drive's
  health and temperature, CPU, memory, temperature, traffic, update and security status.
- **Home Assistant**: CPU, memory, disk and uptime.
- **Devices on the network**: everything connected to the router, busiest first, with Wi-Fi band, signal strength
  (weak signals in red) and live traffic.
- **Offline devices**: anything unavailable, grouped by integration.

## Family Board

![Family Board](images/snip-family.jpg)

Made for a kitchen screen with bigger text: the time and weather, **who's home**, today's events and tonight's
dinner, **trash and recycling** days (with "take the bins out tonight"), the live **shopping list**, a shared
**chores** list anyone can tick off, **birthdays** coming up, the **intercom** (record a message that plays on every
screen) and the **Medicine & fever** card: one-tap buttons for each medicine with its own rules (once a day, every few
hours, alternating Tylenol and ibuprofen), a temperature log, symptom buttons, a 7-day history with a fever chart and a
copy-for-the-doctor summary, FDA drug-label facts with citations, and a heads-up when two medicines are the same kind.

## Guest

![Guest page](images/guest.jpg)

Everything a guest or house sitter needs on the screens already around the house: a welcome note, **Wi-Fi with a
QR code** (drawn on the device; the password is never sent anywhere) and copy buttons, room light switches and an
"all lights off" button, the thermostat, tap-to-call contacts, how-tos and pet notes. Admins edit it; everyone sees
the same information.

## Maintenance

![Maintenance page](images/maintenance.jpg)

Recurring house jobs (filters, smoke detector tests, gutters, oil changes, and more) kept in a shared Home
Assistant to-do list. Each job shows how often it repeats, when it was last done and a countdown bar. **Done**
reschedules it from today. A starter list of 15 common jobs, a low-battery panel, a menu badge when something is
overdue, and a "Maintenance due" pop-up on Home.

## Pets

![Pets page](images/pets.jpg)

**Pet characters** (cat or dog, coat and pattern) that live on the Home banner, the dog timeout and feeder times, and
pet devices such as a self-cleaning litter box: status, drawer level, litter level, faults and history.

## System

![System page](images/system.jpg)

Home Assistant health at a glance: updates, backups, recent errors, devices that need attention, low batteries,
and settings such as Menu pages, alerts and appearance.

## Labs

![3D printer (Labs)](images/printer.jpg)

Experiments: a **Browser** for quick look-ups (voice address bar, bookmarks; in Full window it works like a real
browser with back, forward and reload) and a 3D printer monitor.
