---
title: Automations
---

[← Nashboard](index.md)

# Automations: what the house does on its own

The dashboard is what you see. **Automations** are what keeps working when every screen is off: Home Assistant runs them
in the background and sends notifications to phones (and watches and car screens). Nashboard ships a set of them, plus a
few **scripts** (one-tap actions), and the **Automations page** in the app shows every one in plain language.

How they fit together:

- **The dashboard does the thinking it's good at** (working out the next Space Station pass, when a medicine is OK
  again, which packages are sitting outside) and writes the answer into a small Home Assistant **helper** (a text box,
  number or switch that lives in Home Assistant).
- **An automation watches that helper** (or a clock, or a sensor) and sends the phone alert at the right moment, even if
  no screen is open.
- **Every phone alert goes to every phone with the Home Assistant app** that has checked in during the last 14 days, on
  Android and iPhone. Phones that were removed or haven't been used in two weeks are skipped.
- **Each alert has its own notification channel** on Android (Medicine, Intercom, Gas prices, Home, Family, Commute, Pets,
  Packages, Garage, Planes, Claude), so you can silence one kind in the phone's settings without losing the rest. On
  iPhone, urgent ones (garage, commute) are time-sensitive and gentle ones (gas prices) are passive.
- **Nothing physical happens from a notification on one tap.** Garage doors always ask first; the Goodnight phone check
  only lists what's left.

---

## The Automations page

Menu → **Automations** (subtitle: "What the house does on its own").

- **Every automation in Home Assistant** shows as a friendly card row, grouped: Phone alerts, Dashboard / Nashboard,
  Lights, Security & garage, Pets, and Other. Each group's header says how many are on ("5 of 6 on").
- Each row shows the name, **when it last ran** ("Last ran 2 hours ago" or "Hasn't run yet") and whether it's off.
- **Tap a row** to read its description (the plain-English note saved with the automation). Phone-alert automations that
  have a matching switch in the dashboard say so ("Plane and space alerts switch is on, also in Alerts & notifications").
- **Admins** get an on/off switch on each row and a **Run now** button (tap twice, so it can't happen by accident).
- A **search box** at the top finds any automation by name.
- Nobody edits automation code here; anything fancier than the templates below is made in Home Assistant itself (there's
  an "Open Home Assistant automations" button).

### Make your own (admins)

A **Make your own** card turns a simple "when this, do that" into a real Home Assistant automation, no code. Pick a
template, fill in the blanks, and it shows a plain sentence of what it will do ("Turn on Porch light at 18:00 on
weekdays"). Saving asks twice (Save → "Yes, continue" → "Save now"), then it starts working right away and shows up in
the list with "(mine)" in its name and a note saying who made it.

| Template | You choose | What it does |
|---|---|---|
| **Turn on lights at a time** | Lights (tick any), a time, "only on weekdays" | Turns those lights on at that time every day (or Mon–Fri) |
| **Turn off lights at a time** | Lights, a time, "only on weekdays" | Turns those lights off at that time |
| **Door, garage or lock opens: phone alert** | A door or window sensor, garage door or lock | Sends every phone "Front door opened" when it opens or unlocks |
| **Someone arrives home: turn on lights** | A person, lights | Turns the lights on when that person's phone arrives home |
| **At sunset: turn on lights** | Lights | Turns the lights on at sunset every day |

If Home Assistant won't accept it from the dashboard, the card shows the automation as text to copy and paste into a new
automation in Home Assistant instead.

---

## Phone alerts: planes and space

All three share one switch: **Alerts & notifications → Plane and space alerts** in the dashboard (a Home Assistant
switch called "Phone alerts for planes overhead"). They match the Home cards of the same name, so the phone and the
screens agree.

### Plane overhead
- **Triggers:** a plane passes low nearby (within 5 nm and below 25,000 ft), or a plane in the home area squawks an
  emergency.
- **Does:** one notification per pass, for the closest plane (flight, aircraft, altitude), at most once every 10 minutes;
  planes that join while one is already close don't add more alerts. Also shows on Android Auto.
- **Relates to:** the Plane overhead Home card and the Planes page.

### Space Station pass
- **Triggers:** 10 minutes before a Space Station pass that you can actually see from home. The dashboard works out the
  next visible pass and saves it in a helper.
- **Does:** "Space Station pass at 6:42 PM", with which direction to look, how high it gets and where it sets ("a bright
  moving star that doesn't blink").
- **Relates to:** the Space Station Home card and the Space page.

### Emergency squawk within 200 nm
- **Triggers:** a new aircraft squawking 7700 (general emergency) within 200 nm of home, from the free worldwide
  emergency list.
- **Does:** one notification per new emergency aircraft.
- **Relates to:** the Emergency squawk Home card and the Planes page.

---

## Family and medicine

### Overnight fever and medicine summary
- **What it does:** if a temperature or a medicine dose was logged between 8 PM and 7 AM, one line on the Family page (and Home) from 6 to 11 AM sums the night up, for example "Fever 100.8 at 2 AM, Tylenol given at 2:10 AM, 99.1 at 5 AM, back to normal".
- **Copy for the doctor** copies the same facts as plain text; **Done** hides it for the day.
- **Logged values only:** it never gives advice. The wording is built by a plain rule, and local AI (never the cloud) may reword it only when every number and time is kept.

### Medicine OK to give again
- **Triggers:** checks every minute; the Medicine & fever card keeps a helper up to date with when each every-few-hours
  medicine (for example Tylenol or ibuprofen) is next OK, per child.
- **Does:** a notification the minute it's OK again ("Ibuprofen OK to give again"). Once-a-day medicines don't
  notify.
- **On/off:** the Automations page (admins), or silence the Medicine channel on a phone.
- **Relates to:** the Medicine and Fever Home cards and the Medicine & fever card on the Family Board and Nursery.

### Birthday in two weeks
- **Triggers:** every morning at 9:12, looks at every calendar for a birthday exactly 14 days away (events with
  "birthday" or "bday" in the title).
- **Does:** one notification ("…'s birthday is in 2 weeks. Add a gift on the Family Board."), so there's time to plan.
- **Relates to:** the Birthday coming up Home card (with Add gift to list) and the Birthdays card on the Family Board.

### Week ahead
- **Triggers:** Sunday at 6 PM.
- **Does:** one notification with how many events are coming up this week and the busiest day, pointing to the Week ahead
  card.
- **Relates to:** the Week ahead card on the Family Board (Sunday 5 to 9 PM) and its Home copy.

### Intercom message (script)
- **Triggers:** the dashboard calls it when someone records an intercom message.
- **Does:** every phone gets "New message from …"; between 8 PM and 7 AM it arrives silently (nursery quiet hours).
- **Relates to:** the Intercom card on the Family Board and the Intercom Home card (with Play).

### Morning briefing read aloud
- **Triggers:** weekday mornings, only when the Home Assistant switch **Read the morning briefing aloud** is on.
- **Does:** reads a short good-morning briefing on a Kitchen speaker: the weather, high and low, chance of rain and the
  first calendar event. It uses the first text-to-speech service and the first speaker in the Kitchen area, so it quietly
  does nothing if either is missing.
- **On/off:** the "Read the morning briefing aloud" switch (a helper in Home Assistant's Settings → Devices & services →
  Helpers, or its entity in the Home Assistant app).
- **Relates to:** the Good morning Home card (6 to 9 AM).

---

## Pets

### Dog timeout finished
- **Triggers:** the dog timeout timer (started on the Pets page: 30 minutes, 1 hour or 2 hours) runs out.
- **Does:** every phone gets "Time to let the dog out".
- **Relates to:** the Dog timeout Home card (counts down, with Done) and the Pets page.

### Dog feeder in 5 minutes
- **Triggers:** checks every minute against the feeding times typed on the Pets page (the feeder itself doesn't need to
  be connected).
- **Does:** a reminder five minutes before each feeding.
- **Relates to:** the Dog feeder Home card (10 minutes before) and the Pets page.

### Pet medicine NFC tag
- **Triggers:** someone taps the NFC tag stuck on a pet's medicine bottle with their phone (a tag named with the pet's
  medicine).
- **Does:** logs a dose with the time and tells every phone it was logged. If it's too soon (less than 90% of the usual
  spacing since the last dose), it doesn't log; every phone gets a "too soon" warning instead. Doses can also be logged from the Pets page.
- **Setup:** write the tag with the Home Assistant app; set how often the medicine is given (in hours) on the Pets page.
- **Relates to:** the pet medicine card on the Pets page (with Log now) and its Home copy when a dose is due.

### Pet medicine missed
- **Triggers:** checked hourly; the medicine is two hours past due.
- **Does:** one reminder, at most every 12 hours ("Last given Tue 8:05 AM. Tap the tag on the bottle when it's given").

---

## Packages

### Package left outside
- **Triggers:** the dashboard notices a delivered package with nobody home, or still out after dark, and writes the count
  into a helper.
- **Does:** every phone gets one notification, only when the count goes up (so it doesn't repeat).
- **Relates to:** the Package left outside card on Home and the Packages page.

### Email shipment imported or ignored (script)
- **Triggers:** tapping Import or Ignore on a shipment found in email (Packages page).
- **Does:** removes it from the review list so it's never offered again.

---

## Commute and cars

### Bad traffic alert
- **Triggers:** on chosen weekday mornings, when the drive to work (including a stop on the way) is 10 or more minutes
  slower than typical.
- **Does:** one alert per day with the total drive time, how much slower it is and the route, with a tap to open
  directions. Time-sensitive on iPhone and shown on Android Auto.
- **Relates to:** the Commute page and the Leave soon Home card.

### Gas price drop
- **Triggers:** every 2 hours from 7 AM to 9 PM, when the **gas price alert** switch is on and a price is set.
- **Does:** looks up stations around home, and if the cheapest one for the chosen fuel is at or below your price, sends
  "Gas below $X: Premium is $Y at …". At most once every 12 hours.
- **On/off:** Alerts & notifications → Gas prices (switch, fuel type and price). The dashboard keeps the Home Assistant
  helpers in sync.
- **Relates to:** the Gas price drop card on Home and Commute.

### Arriving home (script, for the car and watch)
- **Does:** after dark, turns on the porch and front lights. Safe on one tap from Android Auto, CarPlay or a watch tile
  because it never touches doors or locks.

### Garage door, confirm first (script and automation)
- **Triggers:** tapping the Garage door item on a car screen, watch tile or Quick Settings.
- **Does:** sends every phone (and the car screen) "Open the garage?" or "Close the garage?" with Open/Close and Cancel
  buttons; the request expires after a minute. Only when someone taps Open or Close does a second automation actually
  move the door.
- **Relates to:** the Garage open Home card and the Goodnight check.

---

## Home and safety

### Goodnight check (11 PM)
- **Triggers:** 11 PM, only if something is left: lights on, a door unlocked or the garage open.
- **Does:** one notification listing what's left ("Still left: 3 lights on; Front door unlocked"). Nothing is changed
  from the notification; open the Goodnight card to fix it.
- **Relates to:** the Goodnight check Home card (9 PM to 1 AM, with All off, Lock and Close, each confirmed) and the one
  **Goodnight** button that fixes everything at once (tap twice; locks and the garage included).

### Leaving the house (phone alert)
- **Triggers:** two minutes after the last person leaves home, only if lights are on, a lock is unlocked or the garage is
  open.
- **Does:** one notification to every phone listing what's left. Nothing physical happens on its own: locks and the
  garage are only changed from the Leaving the house card, with two taps.
- **Relates to:** the Leaving the house card on Rooms (Right now) and Home.

### Kitchen timers (helpers)
- **Triggers:** a kitchen timer finishes.
- **Does:** three Home Assistant timer helpers, each with a name, power the Timers card on the Kitchen room page; open
  screens play a chime and show a message when one ends (the kitchen tablet stays quiet at night).
- **Relates to:** the Timers card and the countdown card on Home.

---

## Dashboard housekeeping

### Claude usage near the limit
- **Triggers:** the plan usage summary reaches 90%, or a free usage reset is waiting in the account.
- **Does:** a reminder notification. Optional; specific to how this dashboard is maintained.
- **Relates to:** the Claude Home card.

### Reload YAML when requested
- **Triggers:** the maintainer's tools write a new timestamp to a small file Home Assistant watches.
- **Does:** reloads all of Home Assistant's YAML (automations, scripts, helpers, templates, REST sensors) so changes
  take effect within a minute without anyone pressing reload. New integrations still need a restart.

---

## Helpers the automations use

Created by Nashboard's Home Assistant configuration. You normally never touch these directly; the dashboard sets them.

| Helper | Type | Set by | Used by |
|---|---|---|---|
| Phone alerts for planes overhead | Switch | Alerts & notifications | Plane overhead, Space Station pass, Emergency squawk |
| Phone alerts for gas prices | Switch | Alerts & notifications → Gas prices | Gas price drop |
| Gas alert fuel / Gas alert price | Choice / number | Alerts & notifications → Gas prices | Gas price drop |
| Read the morning briefing aloud | Switch | Home Assistant (Helpers) | Morning briefing read aloud |
| Dog timeout | Timer | Pets page | Dog timeout finished |
| Dog feeder times | Text | Pets page | Dog feeder in 5 minutes |
| Medicine next OK | Text | Medicine & fever card | Medicine OK to give again |
| Next Space Station pass | Text | The dashboard (Space) | Space Station pass |
| Packages left outside | Text | The dashboard (Packages) | Package left outside |
| Kitchen timers (three) and their names | Timer / Text | Kitchen room page | Kitchen timers |
| Pet medicine every (hours) / last given | Number / date | Pets page, NFC tag | Pet medicine tag and missed reminder |

## Turning things off

- **For yourself:** silence that notification channel in your phone's settings (Android), or turn off the matching
  switch in Alerts & notifications where there is one.
- **For everyone:** an admin turns the automation off on the Automations page (the switch on its row). It stays in Home
  Assistant and can be turned back on any time.
