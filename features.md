---
title: Every feature
---

# Every feature

The complete list of what Nashboard does, written the way each piece was asked for: what it should feel like to use,
not just what it is. Everything here is built and running unless it is marked **(planned)**. Screenshots elsewhere in
these docs use a made-up demo house.

**The big idea:** the screen shows what matters right now and gets out of the way otherwise. Cards appear by
themselves when something needs you and disappear when it doesn't. Anything shown on one page also appears on the
page it relates to (a dishwasher reminder shows on the Kitchen room, a pet's medicine on the Pets page).

---

## Home: automatic cards

Each one shows itself only while it matters, then hides again. Every card can be hidden per screen.

| Card | Shows when | What you can do |
|---|---|---|
| **Garage open** | The garage door is open | See how long it has been open |
| **Litter-Robot** | The litter box needs emptying or has a problem | Jump to the Pets page |
| **Dog timeout** | A dog timeout timer is running | See minutes left and the let-out time; Done |
| **Dog feeder** | A feeding time is coming up | See the next feeding time |
| **Markets** | Weekdays around the stock market open and close, and for two hours after a big move | Watchlist movers at a glance |
| **UV high** | The UV index is high during the day | Reminder for sunscreen and shade |
| **Rocket launch** | A launch you can watch is about to happen | Countdown and where to look |
| **Chores today** | A chore is due today or overdue | Tick it Done |
| **Severe weather** | The National Weather Service has a warning or watch for your area | Read the alert |
| **Leave soon** | Your commute says it is time to go (traffic included) | Open turn-by-turn directions |
| **Nursery asleep** | The nursery sound machine is playing at night | Sounds are muted on every screen while the baby sleeps |
| **New on Wi-Fi** | A device joined the network that has not been seen before | Mark it as known |
| **House health** (admins) | Home Assistant needs attention: updates, errors, offline devices | Jump to System |
| **Internet outage** | A service the house depends on (remote access, Cloudflare, GitHub, Discord) reports a problem | See the status |
| **Fever** | A temperature of 100.4°F or higher was logged in the last 12 hours | See when Tylenol or ibuprofen is next OK |
| **Medicine** | A medicine was given and the next dose is not OK yet | "Next dose OK at …" |
| **Pantry: use soon** | Food in the pantry expires in the next 3 days or just expired | Used up |
| **Birthday coming up** | A birthday on the calendar is within two weeks | Add "Gift for …" to the shopping list; then it shows a ✓ |
| **Intercom** | Someone recorded a message in the last 10 minutes | Play it |
| **On the way home** | Someone's commute home has started | Arrival time and whether traffic is slower than usual |
| **Rain coming** | Rain is likely in the next hours | When it starts and the chance |
| **Freeze tonight** | It will drop below freezing overnight | Reminder for pipes, plants and pets |
| **Dinner tonight** | The meal plan has dinner today | Open the recipe |
| **Autoship soon** | A pet food autoship is about to arrive or bill | See the date |
| **Maintenance due** | A home maintenance job is due or overdue | Done (resets the schedule) |
| **Trash night** | Trash or recycling pickup is tomorrow | "Take the bins out tonight" |
| **Lights still on** | Lights are on late or when nobody is home | All off |
| **Plane overhead** | An aircraft passes within 5 nm (military within 15 nm) | Flight, aircraft, route, photo |
| **Emergency squawk** | An aircraft within 200 nm squawks 7700 | See it on the map |
| **Space Station** | The International Space Station is above the horizon, from 10 minutes before it rises | Live sky dial with where to look and whether you can see it |
| **Breaking news** | Big top stories from the last couple of hours, plus local news | Read the story |
| **Live game** | One of your teams is playing | Live score and where to watch |
| **Pollen** | Pollen is medium-high or worse | Today, tomorrow and asthma levels |
| **Claude** | Claude Code usage | Plan limits, an "almost at the limit" note, and a free usage reset reminder |

**Tidbit chip** (top of the banner): one fun fact about the house at a time. Tap it to rotate through every fact:
lines of code, an estimated market value of the app (developer hours from the line count × contract rates, kept
current automatically), days since Home Assistant restarted, packages tracked, pantry items, the next birthday, the next
holiday, teams, the drive home, pollen, chores, and more. Every new feature adds a fact when it has a number worth
showing.

---

## The Home banner

- **An illustrated version of the house** that changes with the time of day and the weather; windows light up when
  that room's lights are on; the porch light and mailbox are live.
- **The mailbox flag** goes up when mail is expected.
- **Weather** sits in the banner on wide screens, and as a compact card on phones (current conditions, the next few
  hours, rain, wind, sunrise) that opens to the full forecast with a tap and opens by itself when rain is likely.
- **Info chips** for packages, low batteries, the thermostat, lights on and the garage.
- **Pet characters**: your pets as little flat-style characters. The dog sits by the door and the cat naps on the
  porch (up on the rooftops on wide screens). Tails wag, cats breathe. When someone is at the front door (doorbell or a
  person on the front camera), the dog jumps up and wags hard. Late at night the cat curls up in the front window. Choose cat or dog, coat colour and pattern on
  the Pets page.
- **Holiday themes**: New Year, Valentine's Day, St. Patrick's Day, Easter, Mother's and Father's Day, the first day
  of school, the Fourth of July, Halloween, Thanksgiving, Christmas and birthdays in the house each tint the banner
  and add a light animation (falling leaves, snow, hearts, confetti, fireworks) on the day and the days before. On,
  Calm (no animation) or Off per screen.
- **House picture import** to make the banner look like your own house **(planned)**.

---

## Pages

- **Home**: everything above.
- **Rooms**: every room with its lights, climate, media and sensors. Rooms with a matching dashboard get their own
  layout (the Nursery). Each room also shows the cards that belong to it: its maintenance jobs, low batteries, pet
  device problems, tonight's dinner and expiring pantry food (Kitchen), packages out for delivery (front of the house),
  the Medicine & fever card (Nursery).
- **Nursery**: a big calm clock, the night light (gentle colours, brightness), the sound machine (sleep sounds,
  bedtime and wake-up tracks, Hatch favourites), **presets** that save the sound, volume and light under a name and
  recall them in one tap, a bedtime routine, the nursery speaker, and a **sleep log** of the last 7 nights (bedtime,
  wake time, length, average) worked out from when the sound machine played: nothing to tap.
- **Cameras**: live camera grid with Full window and full screen controls.
- **Calendar**: month, week and agenda views of every calendar; add and delete events. Calendar events from a photo
  of a flyer or a daycare lunch menu **(planned)**. Google Tasks **(planned)**.
- **Now Playing**: what every speaker is playing, with controls and Music Assistant browsing.
- **Shopping**: shared shopping lists with voice entry.
- **Pantry**: what's on hand and when it expires, kept in a shared Home Assistant to-do list. Scan a barcode with the
  phone camera (the product name is looked up in Open Food Facts) or type it, add the expiration date and amount.
  "Use soon" lists anything expiring within 3 days; **Used up** removes an item, and the cart button also adds it to the
  shopping list. Reading the date from a photo, separate sell-by and use-by dates, and Mealie integration
  **(planned)**.
- **Recipes**: the family recipe book from Mealie. Paste a link to save any recipe. **Cook mode** shows one step at a
  time in big text; each step shows the **amounts inline** ("whisk the **2 cups** flour") and a row of the step's
  ingredients with a little picture for each (flour, salt, eggs…). Sending a recipe to the shopping list first asks
  **"Use what's in the pantry?"** and leaves the ticked items off the list (and can take them off the pantry).
- **Packages**: every tracked package from 17TRACK and shipper emails, with carrier, status and delivery day.
- **Weather**: current conditions, hourly and 10-day forecasts, radar (your location, nearest station named),
  alerts, sunrise and sunset.
- **Air & Allergy**: air quality and pollen (today, tomorrow, top pollens, asthma index).
- **Sports**: your teams' live scores, upcoming games and **final scores from the last two days**. Add a team by
  picking the league, then the team from a dropdown; remove any team.
- **Commute**: trips for each person (they belong to a person, are shared with everyone, and know where you are by
  time of day), live travel times, typical times, a Navigate button, leave-soon timing.
- **Planes**: a live map of aircraft around you (or around home), flight details and photos, the highest and fastest
  planes in the world, emergencies (7700) worldwide.
- **Map**: everyone's location, with a path of where they've been today.
- **Space**: the Space Station's passes for the next 3 days (visible ones highlighted), the sky right now with the
  brightest satellites, and upcoming rocket launches.
- **Multi-view**: several pages on one screen at once.
- **Finance**: a watchlist from a Google Sheet with day moves and sparklines, market indexes, and a **Bitcoin
  long-term power law** chart that zooms (preset windows or drag across it) and remembers the zoom.
- **Network**: devices on the Wi-Fi, new-device alerts, internet speed history, and an **Internet services** card
  with the status of the services the house depends on.
- **Family Board**: the clock and weather, who's home, trash and recycling days, today's events, chores, the
  **Medicine & fever** card, **Birthdays**, the **Intercom**, the shopping list and emergency contacts.
- **Guest**: everything a guest or sitter needs (Wi-Fi with a QR code, contacts, how-tos, pet notes) and a few safe
  controls. Guest mode for every screen at once **(planned)**.
- **Maintenance**: recurring home jobs with due dates; done resets the schedule; jobs also show on their room.
- **Pets**: pet devices (litter box, feeder), the dog timeout and feeder times, and the pet characters.
- **System**: Home Assistant health, updates, batteries, backups, Display size.
- **Design Studio**: the full backlog, searchable, and **Jot it down** for new ideas (voice and a photo or screenshot
  attached). New ideas are filed into the backlog automatically.
- **Display**: a full-screen rotating dashboard for TVs and wall screens (see Casting).
- **Labs**: a **Browser** for quick look-ups (address bar with voice, bookmarks; in Full window it works like a real
  browser with back, forward and reload) and a 3D printer page.

---

## Medicine & fever

Made as a **trailing record of what was given**, with quick buttons.

- **One tap logs a dose**: Tylenol, ibuprofen, Zyrtec and Xyzal to start; add any medicine.
- **Each medicine has its own rules** (Edit → Rules & info): how often (once a day, resetting at midnight, or every
  4, 6, 8, 12 or 24 hours), the most doses in a day, whether it **alternates** with another (Tylenol and ibuprofen
  rotate, each every 4 hours, with an "Up next" badge), and a dose note.
- Tiles show **OK now**, **Next OK 1:40 AM** or **Given today**, and dim while it's too soon. Logging too soon asks
  first.
- **Bottle artwork** in each brand's colour (no copied logos).
- **Temperature log**: type a reading; fevers are flagged in red.
- **Symptom buttons**: cough, runny nose, rash, threw up, diaper, fluids and nap, one tap each, counted for the day and
  included in the Recent list, History and doctor summary.
- **Recent** list on the card and a 7-day **History** for the doctor, with a **fever chart** (temperatures over 3 days, the
  100.4° fever line and each dose marked in its colour) and **Copy a summary for the doctor** (paste into a text or the
  patient portal).
- **Drug facts with citations**: active ingredient, what it's for, warnings, when to ask a doctor and directions
  (including children's dosing) from the official FDA drug label (openFDA / DailyMed), with links to DailyMed, WebMD
  and the WebMD interaction checker. For information only, not medical advice.
- **Duplicate checks**: a heads-up when two medicines on the card are the same kind (two antihistamines, two NSAIDs)
  or share an active ingredient, on the card and when logging a dose.
- **Phone notification** the minute an every-few-hours medicine is OK to give again.
- Shows on the Family Board, the Nursery room and Home (Medicine and Fever cards).
- Planned: dose by weight, a profile per child, a "sick day" Home card,
  and **pet medicine by NFC tag** (tap the bottle with your phone to log a dose for the cat).

---

## Phone, watch, TV and car

- **Phones**: everything works on Android and iPhone. Phone layouts have a two-line title bar, the bug button, a compact
  weather card and touch-friendly cards.
- **Phone notifications** (from Home Assistant, so they arrive with the screen off, on every phone with the app):
  planes overhead, Space Station passes 10 minutes before, 7700 emergencies within 200 nm, bad commute traffic, the dog
  timeout ending, the dog feeder, medicine OK to give again, the Claude usage limit and free reset, garage confirm.
  Android channels and iPhone time-sensitive alerts are set for each.
- **Pixel Watch and Wear OS**: tiles for shortcuts (arriving home, garage with confirm, dog timeout) and a template tile
  with car home status and the drive home (setup steps in the to-dos).
- **Android Auto and CarPlay**: one-glance car items (car home status, the drive home, arriving home, garage door with
  a confirm step). Nothing physical happens on one tap; it always asks through a notification first.
- **Casting and Display**: cast to any TV or Nest display. Choose **rotating** or **one screen**, how long each screen
  shows, which screens rotate (Home, Radar, Cameras) and **night dimming**. Home's automatic cards show as a strip on the
  radar and camera screens, and a new one jumps the rotation back to Home. A different setup per TV **(planned)**.

---

## Whole-app conveniences

- **Full window** on every page (and full screen on the second tap), with exit controls.
- **Voice input** on every list (say "milk, eggs, bread").
- **Bug button** in the title bar (phones too): jumps straight to Jot it down with the keyboard up, then back.
- **Welcome tour** the first time someone signs in: choose menu pages, alerts, location, then a few tips.
- **Per-person settings**: menu pages and alert switches follow each Home Assistant user to every device.
- **Location everywhere uses this device first**; if the browser blocks it, where your commute plan says you are; then
  a zip code you can set; then home.
- **Card controls**: collapse, text size and hide on every card; cards pack neatly and centre, never wider than about
  five cards.
- **One font** throughout; light and dark themes; adjustable display size per page.
- **Self-updating**: every screen reloads itself when a new version is deployed.
- **Build number and lines of code** in the title bar.
- **Claude usage** card with plan limits, an alert at 90% and a free reset reminder.
- **Home intercom**: record up to 15 seconds and it plays on every dashboard screen (quiet while the nursery sleeps).

---

## Integrations and data sources

Home Assistant integrations: Hatch (sound machine and night light), Litter-Robot and pet feeders, Google Calendar, local
to-do lists, Mealie, 17TRACK, Waze travel time, Flightradar24, Team Tracker (ESPN), Music Assistant and Cast, Android TV
remote, NWS weather, IQVIA pollen, router and network devices, the Home Assistant companion apps (phones, watch, car),
Aladdin Connect (garage; camera-based state planned), mobile notifications.

Free services: adsb.lol (planes and 7700s), OpenSky (highest plane), CelesTrak (satellites), Launch Library 2 (rocket
launches), Google News (breaking news), blockchain.com and Yahoo (Bitcoin and markets), statuspage feeds (internet
services), Open Food Facts (pantry barcodes), openFDA and DailyMed (drug labels), zippopotam.us (zip codes).

Planned: Frigate camera detection (people, packages, the mail truck, garage state), Google Tasks, package emails from any
store, Kroger shopping sync, an APC UPS, a Camp Chef smoker, a Brother printer, a pool sensor, power-monitoring plugs for
laundry and energy, Google Find My Device, a garage workout dashboard (heart rate from the Pixel Watch, iFit/NordicTrack),
YouTube Music and YouTube TV.

---

## Planned (from the backlog)

House picture import and characterisation; calendar events from a photo; Google Tasks; package emails from any shipper;
guest mode; true portfolio numbers; nursery temperature and camera; a type scale; new design concepts; a different cast
setup per TV; garage workout dashboard; activity timeline; energy and bills; laundry; pool; more pet reactions and pet
characters from a photo; pet medicine by NFC; kids' medicine extras; organising the code into modules; a custom Android
Auto app; more car items; and the docs telling the story of how everything connects.
