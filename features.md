---
title: Every feature
---

[← Nashboard](index.md)

# Every feature

The complete list of what Nashboard does, written the way each piece was asked for: what it should feel like to use,
not just what it is. Everything here is built and running unless it is marked **(planned)**. Screenshots elsewhere in
these docs use a made-up demo house.

**The big idea:** the screen shows what matters right now and gets out of the way otherwise. Cards appear by
themselves when something needs you and disappear when it doesn't.

**Cards live on their page first.** Every card has a home on the page it relates to, where it always shows: Rain coming
and Freeze tonight on Weather, Trash night on the Family Board, the dog on Pets, Leave soon on Commute. Each page has a
**Right now** card under its header that shows those cards all the time, with a calm line when nothing is happening
("No rain expected soon"). **Home never owns a card**: when one matters, Home shows a copy of it, and the copy goes away
again. Anything shown on one page also appears on the page it relates to (a dishwasher reminder on the Kitchen room,
low batteries on the device's room, pet notes on Pets).

Jump to: [Home cards](#home-automatic-cards) · [Banner](#the-home-banner) · [Pages](#pages) ·
[Medicine & fever](#medicine--fever) · [Pets](#pets) · [Cars](#cars) · [Family tools](#family-tools) ·
[Phone, watch, TV and car](#phone-watch-tv-and-car) · [Automations](#automations-and-phone-alerts) ·
[Whole app](#whole-app-conveniences) · [Design Studio](#design-studio) · [Integrations](#integrations-and-data-sources) ·
[Planned](#planned-from-the-backlog)

---

## Home: automatic cards

Each one shows itself only while it matters, then hides again. A card stays **at least three minutes** so the screen
doesn't flicker, and says when the situation clears ("Closed now"). Every card can be hidden for today, hidden for good
just for you, or (admins) turned off for everyone. The "Lives on" column is the page whose Right now card always shows it.

| Card | Shows when | What you can do | Lives on |
|---|---|---|---|
| **What's new** | After an update, until you've seen it | Read every change since this screen last looked; Got it | Home |
| **Good morning** | 6 to 9 AM | Weather and today's high/low/rain, the first event, when to leave for today's trip and the drive time, trash pickup, once-a-day medicines not given yet, the next birthday | Family Board |
| **Goodnight check** | 9 PM to 1 AM, when something is left | Lights on (All off), unlocked doors (Lock, confirm), garage open (Close, confirm), TVs on (Turn off) | Family Board |
| **Doorbell** | Someone rings or a person is seen at the front door (2 minutes after the last one) | Front-door snapshot; Ignore | Family Board, every room |
| **Garage open** | A garage door has been open more than 10 minutes | Close (tap twice to confirm) | Rooms |
| **Litter-Robot** | The litter box needs emptying, litter is low, or it has a fault (uses the pet's name) | Jump to Pets | Pets |
| **Dog timeout** | The dog timeout timer is running | Minutes left (with the little dog); Done | Pets |
| **Dog feeder** | Feeding is in the next 10 minutes | See the time (with the little dog) | Pets |
| **Pet's medicine** | A pet's medicine is due | Log now | Pets |
| **Markets** | Weekdays an hour around the market open and close, and two hours after a big move (watchlist 2%+ or a stock 5%+) | Indexes, watchlist average, biggest mover | Finance |
| **UV high** | 10 AM to 4 PM when the UV index is 6 or more | Sunscreen and shade reminder | Weather |
| **Rocket launch** | 30 minutes before to 10 minutes after a liftoff | Countdown and where to look | Space |
| **Chores today** | A Family Board chore is due today or overdue | Done | Family Board |
| **Overdue tasks** | A Google Task is overdue | See them | Calendar |
| **Severe weather** | A National Weather Service warning is active where you are | Read it, until it expires | Weather |
| **Rain coming** | Rain or snow is likely in the next few hours | When it starts and the chance; flags an open garage (Close, tap twice) and open windows | Weather |
| **Freeze tonight** | The overnight low is at or below freezing | Pipes, plants and pets reminder | Weather |
| **Leave soon** | A calendar event with a location starts within the hour, or your commute says go | Navigate (Google Maps with stops) | Commute |
| **On the way home** | Someone's commute home has started | Arrival time; slower than usual? | Commute |
| **Pick up dinner?** | Someone is heading home between 4 and 8 PM | Each saved carry-out place with tap-to-call and Copy the order | Commute |
| **Gas price drop** | The cheapest nearby station for your fuel is at or below your price | Station and price | Commute |
| **Car due soon** | A car's registration, inspection or oil change is due within 30 days | See which car and when | Commute, Maintenance |
| **New car recall** | The weekly recall check finds a new recall | Read it | Commute |
| **Nursery asleep** | The nursery sound machine is playing, 6 PM to 8 AM | Chimes stay quiet on every screen meanwhile | Family Board |
| **New on Wi-Fi** | A device this screen hasn't seen joins the network | Known, or Unknown (logs it to a Follow up later list) | Network |
| **House health** (admins) | No backup in 3 days, or a storage volume isn't normal or is 90%+ full | Jump to System | System |
| **Internet outage** | A service the house depends on (remote access, Cloudflare, GitHub, Discord) reports a major problem | See the status | Network |
| **Low batteries** | Any device's battery is low | Each device with its room | System, Rooms |
| **Fever** | A temperature of 100.4°F or more was logged in the last 12 hours | When Tylenol or ibuprofen is next OK; Log temp | Family Board |
| **Medicine** | A medicine was given and the next dose isn't OK yet (per child) | "Next dose OK at …" | Family Board |
| **Medicine expiring** | A medicine in the Medicine place expires within a month | See which | Family Board, Pantry & Fridge |
| **Pantry: use soon** | Pantry, fridge or freezer food expires in the next 3 days or just expired | Used up | Pantry & Fridge |
| **Running low** | A stored item is at or below its low count | Add to shopping list | Storage |
| **Warranty ending** | An appliance warranty ends within 30 days | Serial, place and manual link | Storage |
| **Birthday coming up** | A birthday (calendar or added by hand) is within two weeks | Add "Gift for …" to the shopping list, then it shows ✓ | Family Board |
| **Holiday tradition** | The week of a holiday you've saved a tradition for | Directions | Family Board |
| **The week ahead** | Sunday 5 to 9 PM | Events, trash days, birthdays, maintenance and holiday traditions this week, weather trend | Family Board |
| **Something to do today** | Weekend mornings, 8 to 10 AM | An age-right kids' idea that fits the weather | Family Board |
| **Movie night** | Friday 5 to 9 PM | A pick from Family favorites and where to watch it | Family Board |
| **For sale** | Something has been listed for sale for a month | Sold | Family Board |
| **Intercom** | Someone recorded a message in the last 10 minutes | Play | Family Board |
| **Hobbies** | One of your hobbies has something soon (book club, plants to water, game night, a show) | See it | Hobbies |
| **Dinner tonight** | The meal plan has dinner today | When to start cooking; open the recipe | Recipes |
| **Autoship soon** | A recurring order ships or bills within two days | See the date | Packages |
| **Package left outside** | A delivery sits out with nobody home, or after dark | See it | Packages |
| **Maintenance due** | A house job is due or overdue | Done (resets the schedule) | Maintenance |
| **Trash night** | The evening before (and morning of) trash or recycling pickup | "Take the bins out tonight" | Family Board |
| **Lights still on** | Late at night with two or more lights on | All off | Family Board, Rooms |
| **Plane overhead** | An aircraft passes within 5 nm (military within 15 nm) | Flight, aircraft, route, photo, live distance | Planes |
| **Emergency squawk** | An aircraft within 200 nm squawks 7700 | See it on the map | Planes |
| **Space Station** | From 10 minutes before the ISS rises until it sets | Live sky dial: where to look and whether you can see it | Space |
| **Air quality** | Outdoor AQI is Moderate or worse (51+) | Next 12 hours and today's pollen | Air & Allergy |
| **Pollen** | Pollen is medium-high or worse (and the air quality card isn't up) | Today, tomorrow and asthma levels | Air & Allergy |
| **Breaking news** | Big top stories from the last couple of hours, plus local news | Read the story | Home |
| **Live game** | One of your teams is playing (a day before to a few hours after) | Live score (flashes on a change) and where to watch | Sports |
| **Claude** | Claude Code usage near the limit, or a free reset waiting | Plan limits, credits, what Claude is doing, next run (Autopilot for admins) | Home |

Home also always shows **Weather** (or the banner overlay), **Up next** (calendar events and tasks due today), **Rooms**
(the six most-used rooms first, with Show more), **Cameras**, **Now playing**, **Gas prices** and the **Claude** card.

**Tidbit chip** (top of the banner): one fun fact about the house at a time. Tap it to rotate through every fact: lines
of code, the estimated market value of the app (developer hours from the line count × contract rates, kept current
automatically), things shipped today, days since Home Assistant restarted, packages tracked, pantry items, the next
birthday, the next holiday, the pets' names, things for sale, family favorites, teams, the drive home, pollen, chores,
the feeder, internet services and more. Every new feature adds a fact when it has a number worth showing.

---

## The Home banner

- **An illustrated version of the house** that changes with the time of day and the weather; windows light up when
  that room's lights are on; the porch light and lamp post follow the front-yard lights.
- **Banner windows map** (System page): choose which Home Assistant room or light each window, the porch light and the
  lamp in the house picture stand for, with a Highlight button to see which is which. The lights, pets and decorations
  follow it.
- **The mailbox door** swings open with envelopes when mail is expected today (USPS Informed Delivery emails).
- **Weather** sits in the banner on wide screens, and as a compact card on phones (current conditions, the next few
  hours, rain, wind, sunrise) that opens to the full forecast with a tap and opens by itself when rain is likely.
- **Info chips** for lights on, the garage, indoor temperature and humidity, mail and packages, low batteries, open
  doors and windows, updates and pet problems. Tap one to act on it.
- **Pet characters**: your pets as little flat-style characters. The dog sits by the door and the cat naps on the
  porch (up on the rooftops on wide screens). Tails wag, cats breathe. When someone is at the front door, the dog jumps
  up and wags hard. Late at night the cat curls up in the front window. **Tap a pet** to see its name in a little speech
  bubble with a heart, and it hops. Holiday outfits: a Santa hat, witch hat, heart collar or party hat.
- **Holiday themes**: New Year (fireworks), Valentine's Day, St. Patrick's Day, Easter, Mother's and Father's Day, the
  first day of school, Memorial Day and the Fourth of July, Halloween, Thanksgiving, Hanukkah (a menorah), December and
  Christmas, snow days, game days and family birthdays (balloons and a banner) each tint the banner, **decorate the
  house itself** and add a light animation (falling leaves, snow, hearts, confetti, fireworks) on the day and the days
  before. On, Calm (no animation) or Off per screen.
- **House picture import** to make the banner look like your own house **(planned)**.

---

## Pages

Each page has a short subtitle under its title, a **Full window** button, and (where it has Home cards) a **Right now**
card. New pages get a **NEW** tag in the menu for 24 hours; a page whose Right now card has something new since you last
opened it gets an **UPDATED** dot.

- **Home**: everything above.
- **Rooms**: every Home Assistant area, including new rooms with no devices yet, with lights, climate, media and
  sensors, filter chips and a picture background. Low batteries, lights left on and the garage show in Right now.
- **Room dashboards**: every area gets its own page automatically (even one added a minute ago). Each shows the cards
  that belong to it: its maintenance jobs, low batteries, pet device problems, the doorbell, tonight's dinner and
  expiring pantry food (Kitchen), packages out for delivery (front of the house), the Medicine & fever card (Nursery),
  cars (Garage). **Room settings** on every room page: a layout by room type (kitchen, bedroom, garage, living room,
  office, outdoors, other; guessed from the name), show or hide each section, and **Add a card to this room** (any Home
  card, or weather, calendar, packages, medicine, pantry). **Room icon picker**: a searchable grid of icons, saved for
  everyone.
- **Nursery**: a big calm clock, toddler lock, the night light (gentle colours, brightness), the sound machine (sleep
  sounds, bedtime and wake-up tracks, favourites), **presets** that save the sound, volume and light under a name and
  recall them in one tap, a bedtime routine, the nursery speaker, and a **sleep log** of the last 7 nights (bedtime, wake
  time, length, average) worked out from when the sound machine played: nothing to tap.
- **Cameras**: a camera wall with layouts, grouping, live view, Full window and full screen.
- **Calendar**: day, week and a rolling 4-week month (up to 5 events a day, past days dimmed) across every calendar in
  shared colours; add and edit events; a **Tasks** card for Google Tasks (tick off, add, due dates, overdue in the warning colour).
  Calendar events from a photo of a flyer or a school lunch menu **(planned)**.
- **Activity**: today's (and yesterday's) timeline, newest first and grouped by hour: the doorbell and people at the
  door, doors and the garage, locks, people arriving and leaving, packages, alarms and smoke, intercom messages. Filter
  chips; refreshes every minute.
- **Now Playing**: what every speaker is playing, with controls, per-speaker faders in groups and Music Assistant
  browsing.
- **Shopping**: only the shopping lists (other lists stay on their own pages), with voice entry, ticks into the cart and
  Buy again.
- **Pantry & Fridge**: what's on hand and when it expires, in a shared to-do list. Each item is pantry, fridge or
  freezer. Scan a barcode with the phone camera (name from Open Food Facts) or type it, add the date and amount. "Use
  soon" lists anything expiring within 3 days; **Used up** removes it and the cart button also adds it to the shopping
  list. **Storage places** you add and remove (Medicine included), each with a container type and able to sit inside
  another place (Where shows the nesting); On hand is grouped by place. Medicines in the Medicine place warn before they
  expire. Reading the date from a photo and separate sell-by and use-by dates **(planned)**.
- **Storage** ("where's it stored"): a house inventory. Places nest (Garage › Red toolbox › Drawer 3); items have a
  count, note and photo, and appliances a serial number, purchase date, warranty end and manual link. One search box
  finds anything ("where are the christmas lights") with its full path. **Printable QR labels** for every place
  (scanning one opens that place), **low counts** with Add to shopping list, and **Running low** and **Warranty ending**
  cards.
- **Recipes**: the family recipe book from Mealie. Paste a link to save any recipe. **Cook mode** shows one step at a
  time in big text that shrinks to fit, with the **amounts inline** ("whisk the **2 cups** flour") and a row of the
  step's ingredients with a little picture for each. Sending a recipe to the shopping list first asks **"Use what's in
  the pantry?"** and leaves the ticked items off the list (and can take them off the pantry).
- **Packages**: every tracked package from 17TRACK and shipper emails (import or ignore each one), with carrier, stage
  and delivery day; autoship orders; the **Package left outside** card. Delivered cards leave after two days.
- **Weather**: current conditions, hourly and 10-day forecasts, radar (your location, nearest station named),
  National Weather Service alerts and forecast text, sunrise and sunset, and a **What to watch** card (severe, rain,
  freeze, UV).
- **Air & Allergy**: the "Open the windows?" verdict, air quality with the next 24 hours, UV, pollen (today, tomorrow,
  top pollens, asthma index), inside vs outside.
- **Sports**: your teams' live scores, upcoming games and **final scores from the last two days**. Tap a final for the
  **box score** (score by period, team stats, leaders, player tables). One Highlights and one Condensed game link per
  game; **Watch** opens the game's YouTube TV channel when its share link is saved. Add a team by picking the league,
  then the team; remove or hide any team just for you.
- **Commute**: trips for each person (they belong to a person, are shared with everyone, and know where you are by time
  of day), live travel times, typical times, a Navigate button per trip, leave-by times, Leave soon, On the way home,
  Pick up dinner?, gas price drops and car cards.
- **Planes**: a live map of aircraft around you (or around home), flight details and photos (a labelled stock photo of
  the type when the aircraft itself has none), the **highest and fastest planes in the world**, emergencies (7700)
  worldwide, arrivals boards with airport tabs, map buttons that scroll, and an INFO button that hides the legend.
- **Map**: everyone's location with a path of where they've been today, commute places and a You marker.
- **Space**: the Space Station's passes for the next 3 days (visible ones highlighted), the sky right now with the
  brightest satellites, a sky dial that turns with the phone, and upcoming rocket launches.
- **Multi-view**: up to four pages on one big screen.
- **Display**: a full-screen rotating dashboard for TVs and wall screens (see Casting).
- **Finance**: a watchlist from a Google Sheet with day moves and sparklines, market indexes, and a **Bitcoin
  long-term power law** chart that zooms (preset windows or drag across it) and remembers the zoom.
- **Network & Storage**: devices on the Wi-Fi (busiest first, weak signal in red), new-device alerts with a **Follow up
  later** list, internet speed history, router and NAS health, guest Wi-Fi, and an **Internet services** card.
- **Family Board**: made for the kitchen with bigger text: the clock and weather, who's home, trash and recycling days,
  today's events and dinner, chores, the shopping list, **Medicine & fever**, **Birthdays**, the **Intercom**,
  **Holiday traditions**, **Carry-out orders**, **Kids' activity ideas**, **Family favorites**, **For sale**, the **Week
  ahead**, emergency contacts and the Doorbell.
- **Guest**: everything a guest or sitter needs: a welcome note, Wi-Fi with a QR code, weather now and the next 6 hours,
  the live radar, contacts, how-tos, pet notes, a **Watching TV** card (remote steps and YouTube TV buttons per TV) and a
  few safe controls. Guest mode for every screen at once **(planned)**.
- **Maintenance**: recurring home jobs with due dates and countdown bars; Done resets the schedule; jobs also show on
  their room; car due dates show here too.
- **Pets**: pet characters, the dog timeout and feeder times, pet devices, pet medicine (NFC tag, Log now), pet notes and
  where the pets play most (see [Pets](#pets)).
- **Hobbies**: each person picks their hobbies (band and set lists, audio mixing and video editing, Ableton Live, book
  club, gardening, running and cycling, reading list, board game night, cooking experiments, 3D printing, or your own);
  each hobby's cards are shared, so anyone with the same hobby sees the same set lists, books or plants. A Home card when
  something is coming up.
- **Workout**: made for a TV in the garage (big digits readable across the room) and phones: an **interval timer**
  (work, rest, rounds) with a progress ring and optional beeps, saved routines, and a shared workout log with weekly
  totals per person. Heart rate, calories and treadmill data **(planned)**.
- **Automations**: everything the house does on its own, as friendly cards with on/off, last ran, description and Run
  now, plus **Make your own** templates (see [Automations](automations.md)).
- **System**: Home Assistant health, updates, backups, low batteries, **Home settings** (the household basics in one
  place, each linking to where it's edited), **Hidden cards** (Show again), **Banner windows**, the **Device setup**
  checklist, the **User manual** link, and Display size on phones.
- **About**: version and build, what's new, every feature, data-source credits, the user manual and **Run the tour
  again**.
- **Design Studio**: see [below](#design-studio).
- **Labs**: a **Browser** (just the bar: back and reload, bookmarks, address with voice; tools behind a ⋯ menu; reopens
  your last page on each device; in Full window it works like a real browser) and a 3D printer page.

### Kitchen display preset

A calm, always-on layout for a landscape wall display in the kitchen. Turn it on per device with **Cast → This device →
Kitchen display** (or open the dashboard with `?display=kitchen`; `?display=off` turns it off). It shows the clock and
weather, today's calendar and dinner, who's home, chores, trash night, the Home cards while they matter, and the Kitchen
(or Living Room) controls. Tap anywhere that isn't a control to use the full dashboard for 2 minutes (each touch restarts
the 2 minutes), then it comes back. At night (9 PM to 6:30 AM) it's very dim, with no animations or chimes.

---

## Medicine & fever

Made as a **trailing record of what was given**, with quick buttons.

- **A profile per child**: chips at the top switch child; each has their own doses, temperatures, symptoms, dose notes,
  Home cards and phone alerts.
- **One tap logs a dose**: Tylenol, ibuprofen, Zyrtec and Xyzal to start; add any medicine.
- **Each medicine has its own rules** (Edit → Rules & info): how often (once a day, resetting at midnight, or every
  4, 6, 8, 12 or 24 hours), the most doses in a day, whether it **alternates** with another (Tylenol and ibuprofen
  rotate, each every 4 hours, with an "Up next" badge), and a **dose note** that shows on its button and is saved with
  every logged dose.
- Tiles show **OK now**, **Next OK 1:40 AM** or **Given today**, and dim while it's too soon. Logging too soon asks
  first; logging an **expired** medicine (from the Pantry's Medicine place) warns first.
- **Bottle artwork** in each brand's colour (no copied logos).
- **Temperature log**: type a reading; fevers are flagged in red. The Fever Home card has a **Log temp** button.
- **Symptom buttons**: cough, runny nose, rash, threw up, diaper, fluids and nap, one tap each, counted for the day and
  included in the Recent list, History and doctor summary.
- **Recent** list on the card and a 7-day **History** with a **fever chart** (temperatures over 3 days, the 100.4°
  fever line and each dose marked in its colour) and **Copy a summary for the doctor**.
- **Drug facts with citations** from the official FDA label (openFDA / DailyMed), with links to DailyMed, WebMD and the
  WebMD interaction checker. For information only, not medical advice.
- **Duplicate checks**: a heads-up when two medicines are the same kind (two antihistamines, two NSAIDs) or share an
  active ingredient, on the card and when logging a dose.
- **Phone notification** the minute an every-few-hours medicine is OK to give again.
- Shows on the Family Board, the Nursery room and Home (Medicine and Fever cards).
- Planned: dose by weight and a "sick day" Home card.

---

## Pets

- **Pet characters** (cat or dog, coat colour and pattern) on the Home banner, the Dog timeout and feeder cards, and
  in a corner of Display mode (one at a time, swapping every few minutes). Names come from the Pets page and are used
  on the feeder, litter box and timeout cards.
- **Pets that play around the app**: now and then the dog trots along a card, the cat naps on one, they chase each
  other, and they react to taps. Mostly on the Pets page (every 25 to 60 seconds there, mostly chases), only rarely
  elsewhere. Off with holiday Calm/Off or reduced motion.
- **Dog timeout** (30 minutes, 1 hour, 2 hours) with a countdown card and a phone alert when it's up.
- **Dog feeder** times with a Home card 10 minutes before and a phone reminder 5 minutes before.
- **Pet medicine by NFC tag**: tap the tag on the bottle with your phone to log a dose (too-soon taps only warn), a
  missed-dose phone reminder, a Pets page card with Log now and a Home copy when due.
- **Litter box** status, drawer and litter level, faults and history.
- **Pet notes** from the Guest page show (and edit) here.
- More pet reactions and pet characters from a photo **(planned)**.

---

## Cars

- **Add a car by VIN**: year, make, model, trim, engine and body filled in from NHTSA, plus recalls on record with a link.
- **Car notes**: plate, insurance and tire size.
- **Dates**: registration, inspection and oil change, with a **Car due soon** card on Home, Commute and Maintenance.
- **Weekly recall re-check** with a **New car recall** Home card.
- Cars show on the Garage room and the Commute page.

---

## Family tools

- **Intercom**: record up to 15 seconds on the Family Board; it plays on every screen (quiet while the nursery sleeps)
  and sends every phone a notification (silent 8 PM to 7 AM).
- **Birthdays**: from any calendar event titled "… birthday", plus people who aren't on any calendar (name and date).
  Home card two weeks out with Add gift to list, a phone reminder two weeks out, and a tidbit countdown.
- **Holiday traditions**: what you do for each holiday, with an address or map link; a Home card the week of the
  holiday with Directions; also listed in the Week ahead.
- **Week ahead**: Sunday 5 to 9 PM on the Family Board (events, trash days, birthdays, maintenance, traditions, weather
  trend) with a Home copy and a Sunday 6 PM phone notification.
- **Good morning** and **Goodnight**: see the Home table. The Goodnight button fixes everything in one go (tap twice;
  locks and the garage included), and an 11 PM phone check lists anything left. The morning briefing can also be **read
  aloud** on a kitchen speaker on weekday mornings.
- **Carry-out orders**: saved places with their phone number and usual order; Pick up dinner? offers them on the way
  home with Copy the order.
- **Kids' activity ideas**: 68 built-in ideas, chosen for the kids' ages, the weather and the time of day, with "We did
  it"; a weekend-morning Home card.
- **Family favorites**: movies, shows and YouTube channels, plus a "blocked for kids" list; a Friday movie-night card.
- **For sale**: item, price, where it's listed, Sold; a Home nudge after a month.
- **Chores**, the **shopping list** and **emergency contacts**.

---

## Phone, watch, TV and car

- **Phones**: everything works on Android and iPhone. Phone layouts have a two-line title bar (the title, then the time,
  build number and connection dot, with Nashboard as a small centred N badge), the bug button, a compact weather card
  and touch-friendly cards.
- **Left- or right-handed** (Display size → Hand, per person): on phones the navigation, room card buttons, page header
  buttons, add and mic buttons, Home card buttons and sheet buttons mirror to your thumb's side.
- **Phone notifications** (from Home Assistant, so they arrive with the screen off, on every phone with the app):
  planes overhead (one per pass), Space Station passes, 7700 emergencies within 200 nm, bad commute traffic, the dog
  timeout and feeder, pet medicine, medicine OK again, birthdays, the week ahead, the goodnight check, intercom messages,
  gas price drops, packages left outside, garage confirm and the Claude usage limit. See [Automations](automations.md).
- **Wear OS watch**: tiles for shortcuts (arriving home, garage with confirm, dog timeout) and a template tile with car
  home status and the drive home.
- **Android Auto and CarPlay**: one-glance car items (car home status, the drive home, arriving home, garage door with
  a confirm step). Nothing physical happens on one tap; it always asks through a notification first.
- **Casting and Display**: cast to any TV or Nest display (a short rising chime confirms it loaded). Choose **rotating**
  or **one screen**, how long each screen shows, which screens rotate (Home, Radar, Cameras) and **night dimming**, and
  give **each TV its own setup**. Home's automatic cards show as a strip on the radar and camera screens, and a new one
  jumps the rotation back to Home. When the radar can't load on a TV, the National Weather Service loop is shown.
- **Device setup checklist** (System page and [docs](device-setup.md)): TVs and displays, phones, car and watch, with
  ticks kept per device.

---

## Automations and phone alerts

- **Automations page**: every Home Assistant automation as a friendly card, grouped (phone alerts, dashboard, lights,
  security and garage, pets, other), with on/off and Run now for admins, when it last ran and its description.
- **Make your own** (admins): five fill-in templates (lights on at a time, lights off at a time, door/garage/lock opens →
  phone alert, someone arrives home → lights on, lights on at sunset) saved as real Home Assistant automations.
- **The shipped automations**, what triggers each and how to turn it off: [Automations](automations.md).

---

## Whole-app conveniences

- **Card ⋯ menu** on every card header: Full window, Collapse, Hide for today, Hide this card (and, for admins, turn it
  off for everyone). It opens above everything and works on collapsed cards.
- **Tap a card's top bar** to collapse or expand it, on every page. A refresh brings every card back expanded.
- **Hidden cards** follow your login and come back from Customize menu → Hidden cards or the System page.
- **Full window** on every page (and full screen on the second tap); it zooms the page so the whole page fits.
- **Voice input** on every list (say "milk, eggs, bread").
- **No character limits** on text boxes or lists (only fixed formats like a zip code).
- **Text that fits**: long titles wrap to two lines or shrink to fit instead of being cut off; overflowing button rows
  scroll with a soft fade.
- **Bug button** in the title bar (phones too): jumps straight to Jot it down with the keyboard up, then back.
- **Welcome tour** the first time someone signs in (14 steps): menu pages, alerts, location, every page in a sentence,
  cards that come and go, the ⋯ menu, family tools, casting and the phone app; run it again from About.
- **Per-person settings**: menu pages, menu order (My order or Most used), hidden cards, alert switches, theme colour and
  hand follow each Home Assistant user to every device.
- **Theme colours**: seven accent colours (Amber, Coral, Rose, Violet, Blue, Teal, Green), per person, readable in light
  and dark.
- **Location everywhere uses this device first**; if the browser blocks it, where your commute plan says you are; then
  a zip code you can set; then home.
- **Cards pack neatly** in equal-width columns and centre, never wider than about five cards; once a page settles,
  nothing jumps sideways.
- **One font** throughout on one size scale; light and dark themes (dark-enough colours in light mode); adjustable
  display size.
- **Self-updating**: every screen reloads itself when a new version is deployed, but waits while someone is typing.
  Lists never go blank on a failed refresh, and shared settings can't be wiped by an update.
- **Build number and lines of code** in the title bar; "Family OS" subtitle.
- **Home intercom** (see Family tools).

---

## Design Studio

Opened from System or the More menu.

- **Jot it down**: type or say an idea, attach a photo or screenshot, swipe left to remove one. New ideas are filed into
  the backlog automatically (**Import now** asks for it at the next check-in). Claude's own **suggestions** show here,
  marked and dated, with **Accept** and **Ignore**.
- **Backlog**: the full plan, searchable, sections collapsed until you search, with "Show done".
- **Every feature**: the running feature list, searchable.
- **Change log**: one heading per day and one expandable box per build.
- **Shipped per day** chart (last 14 days with a 7-day average).
- **Hardware wishlist**: saved displays and gadgets; add a product link, remove with ×, **Bought** moves it to Purchased;
  refreshes every minute.
- **Autopilot** button for admins (the private link is kept in Home Assistant, not in the dashboard).

---

## Integrations and data sources

Home Assistant integrations: areas and devices, people, calendars (Google Calendar), Google Tasks, local to-do lists,
Mealie, 17TRACK and an email account, Waze Travel Time, Flightradar24, Team Tracker (ESPN), Music Assistant and Cast,
Android TV remote, a weather integration, IQVIA pollen, the router (SNMP, device tracker), a NAS, Speedtest.net,
GasBuddy, Hatch, Litter-Robot, cameras and doorbells, a garage door, the companion apps (phones, watch, car, NFC tags),
mobile notifications.

Free services: Open-Meteo (weather and air quality), the National Weather Service (alerts, radar), adsb.lol and other
ADS-B feeds (planes and 7700s), OpenSky (highest and fastest plane), Planespotters and Wikipedia (aircraft photos),
CelesTrak (satellites), Launch Library 2 (rocket launches), ESPN and MLB's stats feed (scores and box scores), Google News
(breaking news), Yahoo Finance and blockchain.com (markets and Bitcoin), statuspage feeds (internet services), Open Food
Facts (barcodes), openFDA and DailyMed (drug labels), NHTSA (VINs and recalls), OpenStreetMap and Leaflet (maps),
zippopotam.us (zip codes).

Details for each, with setup and limits: [Data sources](integrations.md).

---

## Planned (from the backlog)

House picture import and characterisation; calendar events from a photo; package emails from any shipper; Frigate camera
detection (people, packages, the mail truck, garage state); doorbell two-way talk; guest mode for every screen; true
portfolio numbers; nursery temperature and camera; new design concepts; live heart rate and treadmill data on the Workout
page; energy and bills; laundry; pool; a smoker; a printer; a UPS battery backup; Kroger shopping sync; Google Find My
Device; YouTube Music; more pet reactions and pet characters from a photo; medicine dose by weight and a sick-day card;
a custom Android Auto app; more car items; and the docs telling the story of how everything connects.
