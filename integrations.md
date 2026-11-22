---
title: Data sources
---

[← Nashboard](index.md)

# Data sources and integrations

Nashboard doesn't store the house's data itself. It reads everything through **Home Assistant** (its websocket and REST
APIs, signed in as whoever is using the screen) and, for a few things that have nothing to do with the house (planes,
rocket launches, drug labels, barcodes), from **free public services**. This page lists every source the app uses, what
each one powers, how to set it up, and its limits.

**Pages and cards hide themselves when their source isn't there.** If you don't have a camera, there's no Cameras page;
if Google Tasks isn't set up, the Tasks card shows a short setup note to admins only. Nothing breaks.

Quick map:

| Page or card | Home Assistant integrations | Free public services |
|---|---|---|
| Rooms, room dashboards, Activity | Areas, lights, switches, climate, covers, locks, media players, sensors, logbook | |
| Cameras, Doorbell card | Any camera integration (for example a NAS camera system), doorbell and person sensors | |
| Calendar, Up next, Birthdays, Week ahead | Calendar integrations (for example Google Calendar), Google Tasks | |
| Now Playing | Google Cast, Music Assistant | |
| Shopping, Chores, Maintenance, Pantry & Fridge | To-do lists (Shopping list, Local To-do, Mealie) | Open Food Facts (barcodes) |
| Packages, mailbox | 17TRACK, an IMAP email account (shipping and USPS Informed Delivery emails) | 17TRACK API (through Home Assistant) |
| Recipes, Dinner tonight | Mealie | |
| Weather, Rain coming, Freeze tonight, Severe weather | A weather integration | Open-Meteo, National Weather Service (alerts, radar, forecast text) |
| Air & Allergy, UV high, Pollen | IQVIA (pollen) | Open-Meteo Air Quality |
| Sports, Live game | Team Tracker (custom) | ESPN, MLB Stats API, YouTube |
| Commute, Leave soon, On the way home | Waze Travel Time, person and phone trackers | Google Maps (directions links) |
| Planes, Plane overhead, Emergency squawk | Flightradar24 (custom), REST sensors | adsb.lol / airplanes.live / adsb.fi / adsb.one, OpenSky, Planespotters, Wikipedia |
| Space, Space Station, Rocket launch | | CelesTrak, Launch Library 2 (The Space Devs) |
| Map, banner location | Person and device trackers | OpenStreetMap / Leaflet, Esri satellite tiles |
| Finance, Markets | | A published spreadsheet, Yahoo Finance, blockchain.com |
| Network & Storage, New on Wi-Fi, House health, Internet outage | Router (SNMP and device tracker), UPnP, Synology DSM, Speedtest.net, Supervisor | Public status pages |
| Gas prices, Gas price drop | GasBuddy (custom) | |
| Cars, Car due soon, New car recall | | NHTSA (VIN decoder and recalls) |
| Medicine & fever | Home Assistant helpers | openFDA / DailyMed |
| Pets, Litter box, Dog timeout, pet medicine | Litter-Robot, a timer helper, NFC tags (companion app) | |
| Nursery | Hatch (custom), Google Cast | |
| Phone, watch and car alerts | Home Assistant companion apps | |
| Breaking news | | Google News (RSS) |

---

## Home Assistant itself (the core)

**What it powers:** nearly everything. Lights, switches, fans, climate, covers (blinds and garage doors), locks, media
players, sensors and every Home Assistant **area** become the Rooms page, the room dashboards, the status chips on the
Home banner, the Goodnight check and the Activity timeline.

- **Areas** become rooms automatically. A new area added in Home Assistant gets its own room page right away (no reload)
  and appears on the Rooms page, even before it has any devices.
- **People** (`person` entities) drive "who's home" on the Family Board, the Map, commute trips (each trip belongs to a
  person) and the "arrives home" automation template.
- **To-do lists** hold the shared lists: shopping, chores, maintenance jobs, the pantry and the Design Studio ideas list.
  Every screen sees changes instantly.
- **Calendars** feed the Calendar page, the Up next card, Birthdays, the Week ahead card, Leave soon and the morning
  briefing.
- **The logbook and history** feed the Activity page (doorbell, people at the door, doors and garage, locks, arrivals,
  packages, alarms, intercom) and the Nursery sleep log (worked out from when the sound machine played).
- **Helpers** (switches, numbers, text boxes, a timer and a date) are the bridge between the dashboard and the
  background automations: the dashboard writes the next Space Station pass, the next medicine time or the packages left
  outside into a helper, and an automation reads it to send a phone alert with the screen off. See
  [Automations](automations.md).
- **Per-user storage** keeps each person's menu pages, hidden cards, alert switches, theme colour, hand and hobbies, so
  they follow that login to every device. **Shared (system) storage** keeps the things everyone sees: calendar colours,
  Guest page info, room settings, the storage inventory, workout log, cast setups per TV, banner window map and more.
- **Supervisor and backups** feed the System page and the admin-only House health card.

**Setup:** a working Home Assistant install. The dashboard runs inside it through a small Lovelace card (see
[How it works](setup.md)). Admin-only actions (editing shared info, running automations, saving new ones) use Home
Assistant's own admin flag.

**Limits:** the dashboard can only do what the signed-in user is allowed to do. Some actions (saving a new automation)
need an admin login.

---

## Home Assistant companion apps (Android and iPhone)

**What it powers:** every phone notification, phone location, the watch tiles, car screens and NFC tags.

- **Notifications** reach every phone that has the app and has checked in during the last 14 days (old, removed phones
  are skipped automatically). Each alert uses an Android notification channel (Medicine, Intercom, Gas prices, Home,
  Family, Commute, Pets, Packages, Garage, Planes, Claude) so each kind can be silenced on its own, and iPhone
  interruption levels (time-sensitive for things like the garage and commute, passive for gas prices).
- **Actionable notifications**: the garage confirmation has Open/Close and Cancel buttons; nothing moves until one is
  tapped.
- **Location**: the phone's location places you on the Map, decides whether you're "on the way home", and is the first
  choice for weather and radar.
- **NFC tags**: tapping a tag on a pet's medicine bottle logs a dose (see [Automations](automations.md)).
- **Wear OS tiles, Android Auto and CarPlay**: one-glance items (car home status, the drive home), the Arriving home
  script and the garage door with a confirm step.

**Setup:** install the app, sign in, allow notifications (and every channel on Android), allow location "Always", and
turn on the sensors you want. The full checklist is on [Device setup](device-setup.md) and in the app under System →
Device setup.

**Limits:** iPhones can't use speech recognition inside the app (the keyboard microphone is used instead), have no
Fullscreen API (Full window still works) and no vibration. Car screens show Home Assistant entities and notifications,
never web pages.

---

## Calendars (for example Google Calendar)

**What it powers:** the Calendar page (day, week, rolling 4-week month), the Up next card on Home, the Family Board's
today list, Birthdays (any event titled "… birthday" or "bday"), the Sunday Week ahead card and notification, Leave soon
(an event with a location starting within the hour), the morning briefing and the TV Display's "up next".

**Setup:** add any calendar integration in Home Assistant. Calendar colours are picked in the app and shared by everyone.
Events can be added, edited and deleted from the Calendar page when the integration allows it.

**Limits:** what can be edited depends on the calendar integration.

## Google Tasks

**What it powers:** a **Tasks** card on the Calendar page (grouped by list, due dates, overdue items in the warning colour,
tick to complete, an add box per list), tasks due today in Home's Up next card, and an **Overdue tasks** Home card (also
under Right now on the Calendar page).

**Setup:** add the Google Tasks integration in Home Assistant. Each Google Tasks list becomes a to-do list the dashboard
finds on its own.

## Mealie (recipes and meal plan)

**What it powers:** the Recipes page (search, photos, servings scaling, import from a link, cook mode), the week's meal
plan on Calendar and the Family Board, **Dinner tonight** on Home and the Kitchen room (with when to start cooking,
worked back from the recipe's total time), and Mealie's shopping list on the Shopping page.

**Setup:** run Mealie (it can run as a Home Assistant app or anywhere on the network) and add the Mealie integration.

**Limits:** cook mode and ingredient pictures depend on recipes having steps and ingredients filled in.

## To-do lists (Shopping list, Local To-do)

**What it powers:** Shopping (only shopping lists show there), Chores on the Family Board and Home, Maintenance jobs,
Pantry & Fridge items and the Design Studio ideas list. Lists are plain Home Assistant to-do lists, so they also work in
the Home Assistant app and with voice assistants.

## Open Food Facts

**What it powers:** barcode scanning on the Pantry & Fridge page. Scan a barcode with the phone camera and the product
name is looked up for free.

**Setup:** none. **Limits:** the camera scanner works in Chrome on Android; on other browsers type the barcode or the name.

---

## 17TRACK and email (packages and the mailbox)

**What it powers:** the Packages page (every shipment with carrier, stage, latest event and delivery day), the packages
chip on the banner, **Package left outside** (Home and Packages), the TV Display's packages, and the **mailbox** on the
house picture, whose door opens when mail is expected today.

- **17TRACK** tracks numbers from almost any carrier. Adding a tracking number on the Packages page registers it with
  17TRACK through Home Assistant.
- **Email (IMAP)**: shipping emails and USPS Informed Delivery digests are read by Home Assistant template sensors.
  Shipments found in email appear on the Packages page for review: import or ignore each one, and it's never offered
  again.
- **Autoship**: recurring orders (such as pet food) with their next ship date, entered by hand; an Autoship soon card
  shows two days before.
- Delivered cards leave the page two days after delivery.

**Setup:** a 17TRACK API key (kept in Home Assistant's secrets, never in the dashboard) and an IMAP email integration
for the email part.

**Limits:** USPS tracking through 17TRACK may need its own activation. Whether a package is "outside" is worked out from
delivery status, who's home and the time of day; camera confirmation is planned (Frigate).

---

## Weather: Open-Meteo, the National Weather Service and a weather integration

**What it powers:** the Weather page, the compact weather on the banner and the phone weather card, the "near you"
weather card when a phone is away from home, **Rain coming**, **Freeze tonight**, **Severe weather**, **UV high**, the
"What to watch" card, the Guest page's weather, the morning briefing and the TV Display.

- **Open-Meteo** (free, no key): current conditions, hourly and 10-day forecasts, rain chances, UV and air quality.
- **National Weather Service** (free, US only): active warnings and watches for where you are, the forecast discussion
  text, and the radar. When the interactive radar can't load (for example on a TV cast), the NWS animated loop for the
  nearest radar station is shown instead, with the station named.
- **A Home Assistant weather integration** for the house's own conditions and outdoor sensors.

**Setup:** none beyond Home Assistant's home location. Location follows the [location rule](settings.md): this device
first, then where your commute plan says you are, then a saved zip code (looked up with zippopotam.us), then home.

**Limits:** NWS alerts and radar cover the United States only.

## Air quality and pollen: Open-Meteo Air Quality and IQVIA

**What it powers:** the Air & Allergy page ("Open the windows?" verdict, US AQI with the next 24 hours, PM2.5, PM10,
ozone, NO₂, UV), the **Air quality** Home card whenever AQI is Moderate or worse (51+), and the shared **Pollen** card on
Air & Allergy, Weather and Home (medium-high or worse).

**Setup:** air quality needs nothing. Pollen needs Home Assistant's IQVIA integration (Pollen.com, US zip codes).

---

## Sports: Team Tracker (ESPN), MLB Stats API and YouTube

**What it powers:** the Sports page (each team's next game, live scores, final scores from the last two days, TV network,
recaps), the **Live game** Home card (scores flash when they change), **box scores** (tap a final score: score by period,
team stats, game leaders and player tables), **Watch** buttons and replays, and the TV Display's games.

- **Team Tracker** (a custom integration) reads ESPN for each team. Teams are added from the Sports page: pick a league,
  then the team from a dropdown; any team can be removed or hidden just for you. League names are always shown properly
  (never Team Tracker's raw "XXX").
- **ESPN's public summary feed** gives the box scores.
- **MLB Stats API** covers minor-league baseball teams ESPN doesn't (next game, final scores and box scores), or says
  "season starts in the spring".
- **YouTube / YouTube TV**: at most one Highlights and one Condensed game link per game, official channels first. Watch
  buttons open the game's YouTube TV channel when an admin has saved that network's share link on the Sports page;
  otherwise the live guide opens.

**Setup:** install Team Tracker (via HACS). Everything else is free.

**Limits:** ESPN's feeds are unofficial and can change. YouTube TV needs a subscription to actually watch.

---

## Commute: Waze Travel Time

**What it powers:** the Commute page (each trip's legs, live drive time, delay versus usual, "leave by", a route map,
recent days), **Leave soon** and **On the way home** on Home, the leave time in the morning briefing, **Pick up dinner?**
on the way home, the "drive home" summary for car screens and watch tiles, and a bad-traffic phone alert.

**Setup:** trips, stops and times are set up in the Commute page's settings; saving creates the Waze routes in Home
Assistant automatically. Each trip belongs to a Home Assistant person and is shared with everyone. Navigate buttons open
Google Maps directions with the stops.

**Limits:** Waze rate-limits frequent requests; the app spaces its checks out and backs off when told to.

---

## Planes: Flightradar24, ADS-B feeds, OpenSky, Planespotters and Wikipedia

**What it powers:** the Planes page (live map 5 to 500 nm, altitude colours, flight paths, military aircraft ringed,
arrivals and departures boards, glass cards for the picked, closest and military planes), **Plane overhead** and
**Emergency squawk** on Home, the **Highest** and **Fastest plane in the world** cards, and the plane phone alerts.

- **Flightradar24** (custom integration) gives the planes in the home area and airport boards.
- **adsb.lol, airplanes.live, adsb.fi and adsb.one** (free community ADS-B feeds) give aircraft around wherever the map
  is centred, tried in turn if one is busy, and the worldwide list of 7700 emergency squawks (a Home Assistant REST
  sensor, so phone alerts work with every screen off).
- **OpenSky Network**: one download feeds both the highest and the fastest plane in the world (REST sensors).
- **Planespotters**: a photo of the actual aircraft. When none exists, a labelled stock photo of the aircraft type comes
  from **Wikipedia**.

**Setup:** the Flightradar24 custom integration for the home area; the rest is free and set up in Home Assistant's
configuration.

**Limits:** community feeds only see aircraft within range of volunteer receivers.

## Space: CelesTrak and Launch Library 2

**What it powers:** the Space page (where the International Space Station is, every pass for three days with the visible
ones highlighted, bright satellites overhead, the sky dial), the **Space Station** Home card (from 10 minutes before it
rises), **Rocket launch** (30 minutes before to 10 minutes after liftoff) and the Space Station phone alert.

- **CelesTrak** supplies orbit data; passes are worked out in the browser.
- **Launch Library 2** (The Space Devs) lists upcoming launches.

**Setup:** none. The dashboard saves the next visible pass for home into a helper so Home Assistant can send the phone
alert.

---

## Maps: Leaflet, OpenStreetMap and Esri

**What it powers:** the Map page (people and devices with today's path, commute places, a "You" marker), the Planes map,
the radar and trip route maps. Leaflet draws the maps; tiles come from OpenStreetMap, with Esri satellite imagery as an
option. Addresses are found with OpenStreetMap's Nominatim, and "near you" place names with a free reverse-geocoder.

## Finance: a published spreadsheet, Yahoo Finance and blockchain.com

**What it powers:** the Finance page (watchlist with day and week moves and sparklines, market indexes, the Bitcoin
long-term power law chart that zooms) and the **Markets** Home card (weekdays an hour around the open and close, and two
hours after a big move).

**Setup:** publish a Google Sheet with your symbols. Prices come from Yahoo Finance and blockchain.com, fetched through
Home Assistant so the browser isn't blocked.

**Limits:** symbols the data source doesn't know are hidden. Not investment advice.

## GasBuddy

**What it powers:** the Gas prices card (cheapest nearby premium and diesel), the **Gas price drop** card on Home and
Commute, and the gas price phone alert (every 2 hours during the day, when the chosen fuel is at or below your price).

**Setup:** the GasBuddy custom integration. Pick the fuel and price in Alerts & notifications.

## NHTSA (cars)

**What it powers:** add a car by its VIN and the year, make, model, trim, engine and body are filled in from NHTSA's free
decoder, with recalls on record and a link. A weekly re-check shows a **New car recall** card on Home and Commute. Car
dates you enter (registration, inspection, oil change) drive the **Car due soon** card.

## openFDA and DailyMed (medicine)

**What it powers:** "drug facts" on the Medicine & fever card: active ingredient, what it's for, warnings, when to ask a
doctor and directions (including children's dosing) from the official FDA label, with citations and links to DailyMed
and WebMD's interaction checker. It also powers the duplicate check (two medicines of the same kind or sharing an active
ingredient). **For information only, not medical advice.**

---

## Network: router, NAS, Speedtest and status pages

**What it powers:** the Network & Storage page and the **New on Wi-Fi**, **House health** and **Internet outage** cards.

- **Router**: SNMP sensors (CPU, memory, internet traffic, data used today and this month through utility meters), UPnP,
  and the router's device tracker for every device on the network with band, signal and traffic.
- **NAS** (for example Synology DSM): volumes, drive health and temperatures, CPU, memory, updates and security status.
- **Speedtest.net**: hourly speed tests with a 7-day chart.
- **Public status pages** (statuspage.io feeds read through Home Assistant every 10 minutes) for the remote-access
  service, Cloudflare, GitHub and Discord.

**Setup:** the router's SNMP and device-tracker integrations, the NAS integration and Speedtest.net in Home Assistant.

## Music: Google Cast and Music Assistant

**What it powers:** Now Playing (artwork, play/pause, seek, volume, per-speaker faders in speaker groups), browsing and
searching music to start something new, Home's Now playing section, the intercom playback and the spoken morning
briefing (through a text-to-speech service on a Kitchen speaker).

**Setup:** Music Assistant (as a Home Assistant app) and Google Cast. **Limits:** some TVs and speakers block sound
until they've been touched once.

## TV and casting: Google Cast and Android TV remote

**What it powers:** the Cast button (put the rotating Display on any TV or Nest display, with a different setup per TV)
and the Guest page's Watching TV card (remote steps and YouTube TV buttons per TV).

## Cameras and the doorbell

**What it powers:** the Cameras page, camera snapshots on Home and room dashboards, the **Doorbell** card (front-door
snapshot when someone rings or a person is seen at the front door) on Home, every room dashboard and the Family Board,
the pet characters' reaction, and the Activity timeline.

**Setup:** any Home Assistant camera integration; doorbell buttons and person-detection sensors are found automatically.
Snapshots are fetched with the dashboard's own sign-in.

**Planned:** **Frigate** on-device video detection for people, packages, the mail truck and the garage door's state.

## Nursery: Hatch

**What it powers:** the Nursery room dashboard (night light colours and brightness, sound machine with every built-in
sound, presets, bedtime routine), the **Nursery asleep** card (screens go quiet), and the 7-night sleep log.

**Setup:** the Hatch custom integration.

## Pets: Litter-Robot, a timer and NFC tags

**What it powers:** the Pets page and the **Litter-Robot**, **Dog timeout**, **Dog feeder** and **pet medicine** cards.
The litter box comes from its integration; the dog timeout is a Home Assistant timer; feeder times are typed on the Pets
page (a feeder that isn't connected still gets reminders); pet medicine is logged by tapping an NFC tag on the bottle.

## Garage door

**What it powers:** the Garage open card, the garage chip, Rain coming's open-garage warning, the Goodnight check and the
confirm-first garage action from the phone, watch and car. Any Home Assistant cover with the garage device class works.

## News

**What it powers:** the **Breaking news** card (big top stories from the last couple of hours, plus local news) from
Google News RSS, and the TV Display's headlines.

## Claude usage

**What it powers:** the Claude card on Home (plan limits, credits, what Claude is working on) and its phone alerts. A
small script on a computer writes a usage summary that Home Assistant reads as REST sensors. This is specific to how this
dashboard is maintained and is optional.

---

## Planned sources

Frigate camera detection (people, packages, the mail truck, garage state); package emails from any store; Kroger shopping
sync; a UPS battery backup; a smoker; a printer; a pool sensor; power-monitoring plugs for laundry and energy; Google Find
My Device; heart rate and treadmill data for the Workout page (watch and Health Connect); YouTube Music.
