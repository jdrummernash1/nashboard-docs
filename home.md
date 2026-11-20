---
title: Home page
---

[← Nashboard](index.md)

# Home page

Home is the page most screens sit on. It has a banner at the top and a grid of cards below. Most cards are
**conditional**: they appear when they're useful and disappear when they aren't.

![Home page, dark theme](images/home-dark.jpg)

![Home page, light theme](images/home-light.jpg)

## The banner

- **House illustration** drawn in the browser, with day and night skies, stars and the moon. Windows light up
  when that room's lights are on; the porch light and lamp post follow the front-yard lights.
- **Driveway and mailbox**: the mailbox (a stone pillar) swings its door open with envelopes when mail is
  expected today, from USPS Informed Delivery emails. It stays beside the driveway and moves clear of the chips.
- **Compact weather overlay** on wide banners: temperature, conditions, the next hours and quick facts. Narrow
  screens get a regular weather card instead.
- **Status chips**: lights on, garage, indoor temperature and humidity, mail and packages, low batteries,
  open doors and windows, updates available, pet problems. Tap a chip to act on it or open its details.
- **Tidbit chip**: one fun fact per page load, rotating through topics (lines of code in the dashboard, planes
  overhead, Space Station passes, packages this year, devices reporting, daylight and more).

The top bar shows the greeting, the time and date, how many lines of custom code the dashboard has, and the
connection status.

## Cards

| Card | When it shows |
|---|---|
| **Weather** | Always, unless the banner overlay is showing it; phones also get a card for the phone's own location |
| **Calendar / Up next** | Upcoming events, sized to fit names |
| **Rooms** | Every room with quick controls; tap a room name for its room dashboard, or "Rooms" for the Rooms page |
| **Cameras** | Camera snapshots |
| **Overhead** | A plane within 5 nm: photo, airline, route, altitude, speed and live distance. Stays at least 3 minutes and follows the plane as it leaves |
| **Space Station** | From 10 minutes before the ISS rises until it sets: a live sky dial with the pass track and where to look |
| **Games** | Your teams' games from a day before to a few hours after; live games show a pulsing dot and scores flash when they change |
| **Commute** | Each family trip's live drive time, delay and when to leave |
| **Gas prices** | Cheapest nearby premium and diesel; collapsible |
| **Claude usage** | AI plan usage for the house's Claude account; collapsible |
| **Air quality** | Whenever outdoor air quality is Moderate or worse (AQI 51+): the same card as the Air page, with the next 12 hours and today's pollen when available. Stays at least 3 minutes |
| **Breaking news** | Recent big headlines, local first |

Swipe a card sideways to hide it for the rest of the day.

## Pop-up cards

Pop-up cards appear at the top when something needs attention. Each stays **at least 3 minutes** so the screen
doesn't flicker; if the situation clears sooner the card says so ("Closed now", "Lights are off now") and then
leaves. Several have a one-tap action button.

| Pop-up | Shows when | Action |
|---|---|---|
| Garage open | A garage door has been open more than 10 minutes | Close (tap twice to confirm) |
| Litter-Robot | Waste drawer nearly full, litter low, or a fault | |
| Rain coming | Rain or snow likely in the next few hours | |
| Freeze tonight | The overnight low will be at or below freezing | |
| Dinner tonight | Tonight's dinner from the meal plan | |
| Autoship soon | A recurring order ships within two days | |
| Maintenance due | A house job is due or overdue | Done |
| Trash night | The evening before (and morning of) trash or recycling pickup | |
| Lights still on | Late at night with two or more lights on | All off |

Add `?popdemo=1` to the dashboard address to preview every pop-up card with sample text.

## Layout behaviour

<img src="images/home-phone.jpg" alt="Home on a phone" width="320">

The grid packs cards to leave the least empty space while the page loads. After that, positions are fixed: a card
that grows (for example when expanded) pushes only the cards below it, and a new card drops into the shortest
column. Nothing jumps sideways.
