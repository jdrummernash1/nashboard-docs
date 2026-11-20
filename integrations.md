---
title: Data sources
---

[← Nashboard](index.md)

# Data sources

Nashboard reads everything through Home Assistant's websocket and REST APIs with the signed-in user's own access.
A few pages also call free public services directly from the browser.

| Page or card | Home Assistant integrations | Free services |
|---|---|---|
| Rooms, room dashboards | Areas, lights, switches, climate, media players, sensors | |
| Cameras | Any camera integration (e.g. Synology DSM Surveillance Station) | |
| Calendar | Calendar integrations (e.g. Google Calendar, Mealie) | |
| Now Playing | Cast, Music Assistant | |
| Shopping, Maintenance, Chores | To-do lists (Shopping list, Local To-do, Mealie) | |
| Packages | USPS Informed Delivery emails (IMAP), 17TRACK | |
| Recipes | Mealie | |
| Weather | Weather integration, forecasts | Open-Meteo, NOAA radar |
| Air & Allergy | IQVIA (pollen), climate | Open-Meteo Air Quality |
| Sports | TeamTracker (custom) | ESPN via TeamTracker |
| Commute | Waze Travel Time | |
| Planes | Flightradar24 (custom), REST sensors for emergencies and the highest plane | airplanes.live / adsb.lol, OpenSky (via Home Assistant), Planespotters photos |
| Space | | CelesTrak orbits, launch schedule |
| Map | Person and device trackers | |
| Finance | | A published spreadsheet and market data |
| Network & Storage | UPnP, SNMP (router), Synology SRM device tracker, Synology DSM, Speedtest.net, Supervisor | |
| Family Board | Person, calendars, Mealie, to-do lists | |
| Pets | Litter-Robot | |
| Nursery | Hatch (custom), Cast | |
| Gas prices | GasBuddy (custom) | |

Pages hide themselves when their integration isn't there.
