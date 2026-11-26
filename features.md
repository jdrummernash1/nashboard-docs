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
**Right now** card under its header that shows what is live there. Everything quiet folds into one line ("All quiet ·
8 things watched") that opens to the full list, and a row for something the house does not have is left out.
**Home never owns a card**: when one matters, Home shows a copy of it, and the copy goes away
again. Anything shown on one page also appears on the page it relates to (a dishwasher reminder on the Kitchen room,
low batteries on the device's room, pet notes on Pets).

Jump to: [Home cards](#home-automatic-cards) · [Banner](#the-home-banner) · [Pages](#pages) ·
[Medicine & fever](#medicine--fever) · [Pets](#pets) · [Cars](#cars) · [Family tools](#family-tools) ·
[Phone, watch, TV and car](#phone-watch-tv-and-car) · [Automations](#automations-and-phone-alerts) ·
[Whole app](#whole-app-conveniences) · [Design Studio](#design-studio) · [Integrations](#integrations-and-data-sources) ·
[Planned](#planned-from-the-backlog) · [Where AI decides](#where-the-app-uses-ai-to-decide-for-you)

---

## Where the app uses AI to decide for you

Most of the app is plain rules. These are the places where an AI makes a call for you, and each one is marked **AI decides here** on its page:

- **Summaries:** Today at a glance on Home, and the At a glance sentence on six pages ([Weather](pages.md#weather), [Commute](pages.md#commute), [Packages](pages.md#packages), [Family Board](pages.md#family-board), [Pantry & Fridge](pages.md#pantry--fridge) and [Security](pages.md#security)), choose what to say. Without an AI a plain sentence from the same facts is used.
- **Ask AI** on Home answers a question you type.
- **Camera event filters:** on the Cameras page, today's Frigate events can be filtered by camera, zone and kind (person, car, package, animal), with a timeline of the day; tap an event to play its clip or see its snapshot. Your filter choice is remembered. Needs the Frigate integration; without it the card is absent.
- **Camera vision checks** decide whether a snapshot shows something that needs doing (long grass, snow, a windshield to scrape, cats fed). See [Cameras: vision alarms](pages.md#cameras-vision-alarms).
- **Import a document** reads a flyer, calendar or schedule and proposes events and items. **Family inbox** decides what kind of thing each email is.
- **Photos:** Tools from a photo (toolbox and drawers) and the House picture photo reader propose what they see; you review before anything is saved.
- **Estimates and stories:** the Insurance list value estimate and bedtime stories.
- **New in 1.25:** Slow internet explained (a rule line an at-home AI may reword), Deadlines from email (items the Family inbox's AI found) and the Ollama warm-up. Storm prep, Water running at night, Litter box pattern note, Repeat dinner, Needs attention and Household mode are plain rules, not AI.
- **Suggestions:** Suggested for your home (Ask the AI) and the Businesses card picking which needs to show.

Always true of these: a local AI is used unless an admin turns on cloud AI; whatever the AI proposes waits for your review or has Undo; nothing is applied to Home Assistant by itself; and a failed answer never replaces what is shown. **Card order, priorities and the Right now card are plain rules, not AI.**

---

## New for 1.0

- **Pages open on their content.** Right now shows only what is live; quiet rows fold into one line; set-up and
  settings cards sit after the page's own cards. A room page shows only its own rows.
- **Right now tells the truth.** No more "Power is on" with no UPS: a feature that is not set up has no row, and quiet
  rows read the real state.
- **Home order you can trust.** Every automatic card has a priority, so a leak or someone at the door is never filed
  under Lower priority. **Today at a glance** is the first card under the banner. Chips on titles only say something
  new (minutes left, overdue).
- **Full-screen card notices are off by default**, and when on they are for urgent cards on wall screens and TVs.
- **A real starting list.** The Setup checklist begins with Getting started (rooms, weather, calendar, shopping list,
  cameras, speakers, phones, commute); optional extras are folded away and not counted.
- **A grouped menu:** the side menu, the phone More sheet and Menu pages share headings (Everyday, House, Family, Out & about, Fun & info, Labs, System), and cards waiting for set-up fold into one More to set up card at the end of each page. On a desktop the groups are colour-tinted containers instead of heading words, with a Frequent group of your most-used pages first.
- **Phone and tablet page bar:** slides through every page (Frequent first, tinted groups, More pinned), buttons at least 48 px.
- **Card text fills the card:** titles and main values grow to use the space each card already has, without making any card taller.
- **Pages that wait until set up** (Commute, Pets, Pool, Utilities, Energy) are listed under More to set up in Menu
  pages with a Set up button, instead of hiding with no way in.
- **Kids page for kids:** no set-up text or edit buttons in front of a child; a Grown-ups button behind the PIN.
- **Privacy:** local AI only unless an admin allows cloud AI, guests do not see the family's commute, and the app's
  maintainer tools are out of the family's view.
- **Workout** never takes a pet scale for your weight: health values are only picked from your own phone app.
- **Demo mode** stays quiet unless you tap something, and the phone tab bar is solid.
- **Banner and top bar:** the banner clock is bigger with the info chip stacked under it, and top-bar text tightens its spacing before it starts to scroll. The About page facts (card counts, checks, models) are written at build time, and the Design Studio status comes from one live model.
- **Cameras (1.11):** sound tries WebRTC first and falls back to HLS; the camera-model wizard picks frames from past footage (any camera in the HA media browser) or from a snapshot collector; each camera chooses which kinds of detection reach phones.
- **House picture (1.11):** more choices in Your house (lawn tone, front walk, flower beds, hedge, yard tree type and side, chimney, solar panels, house number plaque), and the photo reader now fills them in for you to review.
- **Map (1.11):** markers that would overlap are spread apart, and an untrained garage camera model shows a neutral "Camera model not trained yet" pill.
- **Demo and speed (1.11, 1.12):** the demo house is generated from the screenshot sample house, the Home page uses far less CPU when idle, and background work waits until you stop scrolling.
- **First-screen check:** a quality check fails any page whose main card starts too far down or leaves the first screen mostly empty.

## New in 1.27 to 1.30

Newest first. Items marked *Suggested by Claude* came from the project's own suggestion review; the rest were asked for by the family (Human). Each is described on its page, and ideas taken from other open-source projects are listed in the [credits](credits.md).

**1.30**

- **Calendar and list settings (1.30):** the first part of two-way sync with Google Calendar and Google Tasks. Admins choose who sees each calendar and to-do list (everyone, grown-ups, or only its owner) in Settings > Household, and each person chooses where their new events and tasks go in Settings > You. A shared Family calendar is picked up on its own once it exists in Home Assistant. Wall and shared screens show no calendars until these settings have loaded.
- **Make the list for you (1.30):** when Chores or Shopping has no to-do list yet, an admin screen offers to make one with two taps, through Home Assistant's own local to-do list. Undo removes it while it is still empty; wall, guest and kid screens never make anything.
- **Lists that could not load (1.30):** list-based cards say "Could not load the list" with a Retry button instead of looking empty. *Suggested by Claude.*
- **Everyone home (1.30):** the summary counts only the people who share their place. *Suggested by Claude.*
- **Privacy and polish (1.30):** a full review of the code closed several places where a wall or shared screen could see grown-up details (AI summaries, the busy-time suggestion, the camera timeline, the family inbox), fixed double taps, lost emails, a medicine dose that could be logged twice and the reward Approve button, and made card layout about twice as fast on phones. *Suggested by Claude.*

**1.29**

- **Camera wall Main layout and Last 24 hours (1.29):** *Suggested by Claude.* The Cameras page gets a **Main** layout with one big live picture and the other cameras beside it (below it on a phone); tap a small one to swap it in. A **Last 24 hours** card draws people (green) and vehicles (amber) on a 24-hour line; tap it to pick a moment and open that camera, with the latest visitor pictures under it. Needs Frigate detection sensors; hidden without them. Idea from ultimate-hikvision-nvr-card ([Cameras](pages.md#cameras)).
- **PTZ joystick with tap-to-aim (1.29):** *Suggested by Claude.* When a camera can pan and tilt, its live view shows a round joystick (hold toward a direction to move, let go to stop), zoom buttons, and you can tap a spot on the picture to aim there. Cameras that cannot move show nothing extra, and wall screens never get the controls. Idea from ultimate-hikvision-nvr-card ([Cameras](pages.md#cameras-pan-tilt-and-zoom)).
- **Vacuum map (1.29):** *Suggested by Claude.* On the Rooms page, when Home Assistant has a vacuum: your own floor picture with rooms you draw on it and a moving dot for the vacuum. Tap one or more rooms and Clean to send them (by the vacuum's segment number, or by a script of your own), plus Start, Pause and Dock. The picture and rooms are saved for everyone at home. Idea from t90-map-card ([Rooms](pages.md#rooms-floor-plan-and-vacuum-map)).
- **Lite mode (1.29):** *Suggested by Claude.* A switch under Settings, This screen, for old tablets, phones and Kindles: it turns off animations, blur, shadows and the holiday and weather effects, refreshes less often, and keeps every card working. It is saved on that screen only, and a screen that looks slow is offered it once. Inspired by HA-SlimDash ([Settings](pages.md#settings)).
- **This year versus last year (1.29):** *Suggested by Claude.* The Energy page and the Weather page show each complete month of this year next to the same month last year (power use, outdoor temperature and rain), with one plain sentence. It uses Home Assistant's long-term statistics and does not appear until last year's readings exist ([Energy](pages.md#labs-energy-and-bills), [Weather](pages.md#weather)).
- **Export history as CSV (1.29):** *Suggested by Claude.* Every card's menu has **Export history (CSV)**: pick a sensor, pick a range (24 hours, 7 days, 30 days, 12 months or two dates) and download a spreadsheet file. It is not offered on wall screens or in guest mode ([Things every page has](pages.md#things-every-page-has)).
- **Finance plan (1.29):** *Suggested by Claude, inspired by ledger-home-finance.* Three private Finance cards, saved only in your own Home Assistant account and never shown on a wall screen or the Display. **Left before next paycheck** shows the next payday, the bills due before it and what is left of the money you chose to count. **Budgets** are a set amount or a percent of your income, with what you spent this month. **Debt payoff** shows the month you would be debt free and the interest at the minimums or with an extra amount. All of it is arithmetic on numbers you type, not advice; until you add a paycheck each card shows one calm line ([Finance](pages.md#finance)).
- **Run it now or wait (1.29):** *Suggested by Claude.* A short Energy card that says, for hot water and car charging, whether to run now or wait for the cheapest or cleanest window of the next day (or run now when solar is making power). It only appears when a price, grid or solar sensor exists, and is for grown-ups only ([Energy](pages.md#labs-energy-and-bills)).
- **Month view on the Up next calendar card (1.29):** *Suggested by Claude.* Switch the card between a list and a month grid with a dot on every busy day; tap a day to see its events. It works on a phone ([Calendar](pages.md#calendar)).

**1.28**

- **Rain in the next 60 minutes (1.28):** *Suggested by Claude.* A thin 60-cell ribbon on Weather shows dry, light, moderate or heavy rain minute by minute for the next hour, with a line like "Dry for 42 min, then light rain" and a colour legend. Home shows a small copy only while rain is expected within the hour. Uses free 15-minute rain data from Open-Meteo for your location; if it is not reachable the card says so. Idea from juju35's Rain Card ([Weather](pages.md#weather)).
- **Event directions (1.28):** *Suggested by Claude.* An event's place is a link on the Calendar agenda and the event sheet. Tap it to open directions in Google Maps, Apple Maps (iPhone and iPad only) or Waze. Tick **Always use my choice** and later taps open that app straight away; a **Change** button on the notice brings the choice back. Only the address goes into the link, and your pick is saved to your own Home Assistant account ([Calendar](pages.md#calendar)).
- **Bookshelf (1.28):** one family library on the Kids page with covers, per-person shelves and e-book provider links ([Kids](pages.md#kids)).
- **Swipe left to turn a card off (1.28):** on Home, swiping a card left turns it off for good and swiping right hides it for today, both with Undo.
- **Kids rewards and chores (1.28):** *Suggested by Claude.* A reward store with grown-up approval, streaks and badges, chore turns and first-come chores, and a screen-time card ([Kids](pages.md#kids-streaks-and-badges), [Family](pages.md#family-chore-turns-and-first-come-chores)).
- **Around the house (1.28):** *Suggested by Claude.* A floor plan with live lights and doors ([Rooms](pages.md#rooms-floor-plan-and-vacuum-map)), weather on calendar days, per-person calendar columns and private calendars shown as busy blocks ([Calendar](pages.md#calendar)), a sleep timer and a listening recap ([Now Playing](pages.md#now-playing-listening-recap)), a guest jukebox ([Guest](pages.md#guest-jukebox)), radar layers ([Weather](pages.md#weather)), live power flow and running cost per appliance ([Energy](pages.md#labs-energy-and-bills)), mail pictures ([Packages](pages.md#packages)), fridge door drift ([Pantry & Fridge](pages.md#pantry--fridge)), a fever night summary ([Family Board](pages.md#family-board)), plus a battery fleet, QR and NFC maintenance labels, warranty endings, recall checks, car service from mileage, plant thirst and a sleep-friendly night mode suggestion.

**1.27**

- **Undo button (1.27):** a 48 px button in the top bar that undoes the last layout change on this screen: hiding a card by swiping, turning a card off, resizing, moving or folding a card, and Done on a Right now row. Each tap goes one step further back, through the same save the change used ([Pages](pages.md#more-on-every-page)).
- **Import a document: Undo and history (1.27):** an **Undo** right after **Add**, an **Import history** with **Undo** per import (anything changed since stays), a **Tell the AI about this document** box for your own notes, better first choices for the lunch menu calendar and reminders list, and a missing **Lunch menu** calendar or **Reminders** list made for you on admin screens ([Calendar](pages.md#calendar)).
- **Coffee supporters card (1.27):** a calm Home card for grown-ups that names the latest people who bought the maintainer a coffee, for three days. It reads one small Home Assistant helper that a ready automation fills from the Buy Me a Coffee webhook, stores only the display name, amount and time, and does not appear until that is set up ([Home](pages.md#home)).
- **Smoother pages (1.27, 1.29):** cards slide smoothly when they move, the System page on phones redraws in place without flicker or lost typing, and from 1.29 every page redraws its cards in place.

## New in 1.25

Items marked *Suggested by Claude* came from the project's own suggestion review; the rest were Human. Each is described on its page.

- **Needs attention (1.25):** *Suggested by Claude.* Offline cameras, unresponsive devices, low batteries and waiting updates in one card, with Done and Snooze that reach every screen ([Home](pages.md#home-needs-attention)).
- **Household mode (1.25):** *Suggested by Claude.* Home, Away, Sleep or Guests sets which cards show and what counts as quiet time; safety cards always stay ([Home](pages.md#home-household-mode)).
- **Everyone home and Last one out, Announce (1.25):** *Suggested by Claude.* Arrive and leave times, a reminder of what was left on, and speech to chosen speakers with quiet hours ([Family](pages.md#family-everyone-home-and-last-one-out)).
- **Storm prep and Water running at night (1.25):** *Suggested by Claude.* A short task list during a storm warning, and a steady-flow alarm between 1 and 5 AM ([Weather](pages.md#weather), [Utilities](pages.md#utilities)).
- **Private cards (1.25):** *Suggested by Claude.* Four more private Family cards, each saved only in your own Home Assistant account and never shown on the Display, a wall screen or to a guest. My to-dos is a private list for errands and surprises. Private reminders hold dated reminders, plus automatic ones: start shopping three weeks before a birthday and order a gift a week before its date in My gift ideas; due ones show on your own Home and as a private marker on your Calendar. My wish list keeps things you would like with a link and a price. Gift dates and sizes keeps sizes, favourite brands, allergies and what a person already has. Gift deadlines also appear on your own calendar ([Family](pages.md#family-private-cards-my-to-dos-private-reminders-my-wish-list-gift-dates-and-sizes)).
- **Slow internet explained, Litter box pattern note, Deadlines from email, Repeat dinner (1.25):** *Suggested by Claude.* Four cards from the AI-card review ([Network](pages.md#network--storage), [Pets](pages.md#pets), [Family](pages.md#family-deadlines-from-email), [Recipes](pages.md#recipes)).
- **Ask AI warm-up (1.25):** the local AI model is woken before you ask, so the first answer is quick ([Home](pages.md#home-ask-ai-warm-up)).
- **Tombstone cleanup (1.25):** *Suggested by Claude.* The 90-day clean-up of deleted-item memory now runs only once every list has finished loading, and Saved data shows how many old deletions were cleaned up.
- **Wall user calm page (1.25):** *Suggested by Claude.* A wall screen user sees one Right now card and three cards above the fold.
- **Sticky paper follows the Look (1.25):** *Suggested by Claude.* Paper, Glass and Bold each restyle the banner notes without changing their size.

---

## New in versions 1.21 to 1.26

- **Energy outlook and power bill (1.26):** Energy shows the cheapest or cleanest hours for the next 24 hours with best times for the dishwasher, laundry and car (when a price or grid-intensity forecast exists), and one plain sentence on why power use went up or down over the last 7 days. Both are for grown-ups only.
- **Ask AI knows the house (1.26):** Ask AI can answer from the house picture settings, the house jobs list and live states, only when a local AI answers; it says which it used.
- **Move and resize cards (1.21, 1.23):** drag a card with the mouse (or long-press on a phone) to move it, and use **Wider** and **Narrower** in the card's menu to change its width one step. Both are saved per person and survive a reload ([Things every page has](pages.md#things-every-page-has)).
- **Let the app place this card (1.24):** a card you moved by hand gets **Let the app place this card** in its menu. One tap puts it back where the app would place it, and use order can raise it again. Moving that card later places it by hand again, and **Reset card order** clears the whole page.
- **Loading wheels (1.21, 1.23):** anywhere something waits for information, including the title bar, a small wheel shows and the content appears once it arrives; after a timeout a **Retry** button appears.
- **Fewer, bigger cards (1.21 to 1.23):** related Home cards are combined into one: House status, Plans and food, Weather, Deliveries, Family today, Pets and Car in 1.21 and 1.22, then Health, Home upkeep and Daily routine in 1.23. Each combined card keeps its own sections, menu and How it works entry.
- **Deleted stays deleted (1.21):** about 25 lists remember what was removed so a deletion on one screen reaches every other screen; the memory is cleaned up after 90 days.
- **Printers (1.21, 1.22):** add any kind of printer, control it from its card (controls need two taps and are hidden on wall screens), a Print reports card, and low toner can go onto the shopping list.
- **Hardware (1.21):** one layout for every Hardware card, and a Phones and laptops battery card.
- **One camera alerts card (1.21):** every camera alert kind in one card with a live status.
- **Use order (1.21):** cards and pages are ordered by use, with a **Raised for you** mark; Right now, the banner and hand-placed cards never move.
- **Wall screens (1.21):** a calm self-check, plus a scroll health line on System.
- **Scale button (1.22):** the top-bar Scale button opens the Interface scale sheet on the page you are on, on phones too.
- **Shopping (1.22, 1.23):** the list is sorted by store department, and the **Show aisles** view choice is saved per person.
- **Businesses (1.22):** the card has a kinds picker (Black-owned by default, or other kinds).
- **Arriving today (1.22):** a packages card for what is due today.
- **Packages (1.23):** duplicate rows with the same tracking number are merged without losing data and new duplicates are stopped, delivery checks refresh correctly, and a **USPS email fallback** finds USPS shipments when 17TRACK cannot.
- **One phone alert per security event (1.23):** a shared marker means only one phone notification goes out for the same event, however many screens are open.
- **Location sharing (1.23):** **Share my place** can only be changed by the person it belongs to, and the card is hidden on guest and wall screens.
- **Welcome tour and defaults (1.23):** a much shorter tour and fewer pages and cards on by default.
- **Banner chips (1.23):** a little more margin from the banner edge and slightly smaller chip text; the strip still scrolls.
- **Sticky note countdowns (1.23):** a countdown note reads "N days until" automatically.
- **Camera and Cast (1.23):** **Take a photo** in Import a document opens the camera on phones, and the Cast button works on TVs again.
- **Right now heights (1.23):** two Right now cards side by side on a page keep their own heights.
- **Local text AI (1.23):** AI requests with no picture go to a local text model, leaving the vision model free.
- **Always the latest build (1.23):** open screens reload into a new build by themselves, never while you are typing or touching.
- **Import a document (1.23):** a review step before anything is saved, with **Location** and **Room** fields, a lunch menu calendar, a marker you confirm, and pack-a-lunch reminders ([Calendar](pages.md#calendar)).
- **About and Backlog (1.23):** both sit on the Smart layout like other pages.
- **Docs (1.23):** a contents list, previous and next links on every page, and an intro to Home Assistant OS.

## New in versions 1.6 to 1.20

- **Smart layout on by default (1.17, 1.19):** Home and every page with a Right now box (Family, System, Commute, Finance, Space, Network, Packages, Recipes, Pantry, Pets, Rooms, Activity) are one canvas with small section labels and a row of section chips. A card you move into another section stays there, and use order weighs where cards sit. **Settings, This screen, Smart layout** turns it off for that screen only ([Smart layout](pages.md#home-smart-layout)).
- **Right now Done everywhere (1.19):** Done, Seen, Got it or Dismiss on a Right now row hides it on every screen at once, says who tapped, offers Undo and expires after 6 hours ([Right now Done](pages.md#home-right-now-done-hides-a-row-everywhere)).
- **Wall screen user (1.19):** an administrator marks a non-administrator login as a wall screen; on it, grown-ups' and personal cards are hidden and only a few shared lists can be changed ([Wall screen user](pages.md#home-wall-screen-user)).
- **Sticky notes on the banner (1.20):** a small notes button with a count sits on the Home banner, and one or two open notes show as small yellow paper notes pinned to it ([Sticky notes](pages.md#home-sticky-notes)).
- **Banner safety net (1.20):** the Home banner never stretches tall; if something pushes it past its normal height it repairs itself.
- **Cancel move (1.20):** while Move mode is on, a Cancel move button sits beside Done and leaves the order unchanged.
- **Empty Add hints (1.20):** an empty Add list (garage, wellbeing, hobbies) says what to type instead of staying blank.
- **Game-day balloons (1.20):** on a game day, balloons in the team colours float by the mailbox ([Themes](themes.md)).
- **Display keeps the screen awake (1.20):** the Display uses one screen wake lock, reused and released when you leave it.
- **Privacy on wall screens (1.20):** cards only grown-ups use stay out of the shared Recently used list, so a wall screen never shows them.
- **Businesses card (1.18, 1.19):** the home's AI can pick the needs (seasonal ones too), with a one-tap web search when no directory is set, and **Kinds of business to support** lets you choose Black-owned (the default) or other kinds ([Home](home.md#cards)).
- **Ask AI and cloud (1.19):** the claude.ai choice appears only when an admin allowed cloud AI.
- **Colours and scrolling (1.17, 1.18):** the card 3-dot icon, menu SOON badge, Finance tags, Print monitor icon, Wellbeing breathing text, banner pill and sun icon meet the readable-colour standard in dark and light; phone scrolling waits out a whole swipe before background work runs; house decor sway is off on phones.
- **House picture (1.16 to 1.19):** the banner's windows, porch light and lamp can be linked to rooms and lights, the mailbox glows while mail waits, the garage door shows open and the solar panels shimmer while producing, each only when Home Assistant has the matching device and each with its own switch in Your house. Up to two trees per side, and the photo reader asks for one or two.
- **Signing in on another device (1.17):** a person's set-aside settings come back when they sign in again, and the look switches at once.
- **Docs visit count (1.19):** these docs can count visits with a privacy-friendly counter, only once an owner turns it on; nothing is added until then.
- **Ask AI (1.16):** the Home question card is now **Ask AI** and answers inside the card. It tries an AI in your home first, then Ollama, then a cloud AI (only when an admin allowed cloud AI), then Claude. A drop-down lists only what is available now and remembers your pick for you ([Home](home.md#cards)).
- **My gift ideas (1.16):** a private Family card for gifts you plan to give. It is saved only in your own Home Assistant account, so another person signed in on the same home cannot see it, and it never appears on the TV, wall or kiosk screens. A home AI can suggest ideas, shown for you to keep or skip ([Family](pages.md#family-my-gift-ideas-private)).
- **Light buttons (1.16):** a light's button tints with its live colour, or a warm or cool white for a colour-temperature light.
- **Space (1.16):** a backup source for the Station's orbit and launches, the last good data kept when a source fails, a retry every 5 minutes and calm notes saying how old the data is ([Space](pages.md#space)).
- **Planes (1.16):** one **Closest** card; the map no longer repeats it.
- **Hardware (1.16):** a PC that is connected but not sending readings shows numbered steps to finish in HASS.Agent ([Hardware](pages.md#hardware)).
- **Design Studio (1.16, admins):** the AI usage card refreshes itself and lists every model, agents hide after 5 idle minutes, and the org chart shows the 12 standard team leads.
- **Sign-in switch (1.16):** when someone else signs in on a device, the first person's saved copy there is set aside, never sent up or deleted.
- **Cards on each page (1.15):** take a card off a page, or show a card from another page on it, from the card's menu or one screen ([Things every page has](pages.md#things-every-page-has), [Settings](settings.md)).
- **Raise cards and pages you use (1.15, 1.16):** with Smart layout on (the default), cards you use often move up a little and are marked with a small arrow, and in the menu a page you open often moves up inside its group ([Raise cards and pages you use](pages.md#home-raise-cards-and-pages-you-use)).
- **Black-owned businesses (1.15):** a Home suggestion card that turns upcoming home jobs, the shopping list and calendar events into generic search words and lists businesses from a directory an admin sets up ([Home](home.md#cards)).
- **Sticky notes and the trash reminder (1.15):** notes edit in place with Undo, dated reminders can reach phones at 8 AM, and the trash Done button shows who took the bins out.
- **House picture (1.15):** the photo reader also fills in walk, chimney, flower beds, hedge, yard tree, solar, driveway shape, porch, gutters, flag, skylight and garage style for you to review.
- **Hardware (1.12, 1.14):** one card per PC running HASS.Agent, found automatically, each with an **Add another PC** how-to and a set-up card for a PC that is connected but has no sensors yet ([Hardware](pages.md#hardware)).
- **Card options (1.13, 1.14):** a card's ⋯ menu opens right under its own button on every screen and lists the card's related settings; new cards get entries automatically ([Things every page has](pages.md#things-every-page-has)).
- **Home (1.14):** [Sticky notes](pages.md#home-sticky-notes) (notes, reminders, countdowns), a **Done** button on the trash-cans reminder, cat medicine copies that update together, and a Packages card whose title and tracking number wrap.
- **Display and TV (1.13, 1.14):** a live games window with team stats, the plane map beside the radar, the cast strip using the Home chips, a more forgiving bedroom-TV cast, and What's new that fits any screen ([Display](pages.md#display)).
- **Pictures and documents (1.14):** one picker everywhere a picture goes into AI (camera first, **or choose a file**), and **Import a document** only on Calendar and the Family Board.
- **Kids (1.14):** a configurable [baby monitor](pages.md#kids) card for any camera, with night view and a sound or motion alert.
- **Admin (1.13, 1.14):** a **Visits** card for demo visits, a **Throttle the Model** card on About (see [How the AI builds it](ai-build-system.md)), and agent activity that keeps refreshing on throttled devices ([Design Studio](pages.md#design-studio)).
- **Looks and checks (1.14):** room and card icons readable on and off in dark and light (the contrast check now tests icons), and card headers 48 px tall.
- **Layout (1.14, 1.15):** [Smart layout](pages.md#home-smart-layout), now on by default (Settings, This screen turns it off per screen), the first step of the dynamic layout model; the packer fills free columns beside a wide card; Family scrolls smoothly on a phone.

- **Pages:** a [Hardware](pages.md#hardware) page (the host, a desktop PC, printers, a 3D printer, the router and the NAS); an [Activity](pages.md#activity) timeline with a Security chip and shared unseen marks; **Start shopping** by aisle on [Shopping](pages.md#shopping); **Picture mode** on [Kids](pages.md#kids).
- **Garage and Storage:** car **Colour & look**, toolbox brand badges, an insurance list with room and spot, and a **Lives here** card on each room page. See [Garage](pages.md#garage) and [Storage](pages.md#storage).
- **Home cards:** Power cut, Garage open too long, Pet care due and a yearly Insurance list review (rows in the table below).
- **Whole app:** household quiet hours (Settings, Alerts), one highlighted **Right now** container when a page has several cards, a clock on the Home banner, and a More sheet that is a two-column grid with search.
- **Planes and Pets:** flight restriction zones on the map and in the plane popup, a phone compass arrow, and pets that follow the interface scale.
- **TV:** a new TV starts on one still screen built around the live camera wall ([Display](pages.md#display)).

## Additions just before 1.0 (versions 0.256 to 0.261)

- **New pages:** Utilities (leaks, UPS, printer), Pool, Wellbeing, Sitter monitor, and Energy and bills in Labs. See [All pages](pages.md).
- **Home and whole app:** Today at a glance (short summary card), a card order that puts urgent and richer cards first, an open backlog chip in the top bar, New marks on new cards, a Labs on/off switch, smooth touch scrolling, full-screen Card change notices, and a read-only Demo mode (`?demo=1`).
- **Family:** Where is everyone (opt-in place sharing, Ring my phone), Family inbox (email filed into cards), daycare and school closings, Guest mode with a grown-up PIN, a favourite colour per child, a Bedtime library, and a Bookshelf (read-aloud, paper and e-books in one library, private shelves per person, e-book imports).
- **House and security:** Camera alerts, Frigate package, doorbell, video-state and mail-truck cards, Garage door, Smart plugs, a Laundry card and TV helpers (cast countdown and volume leveler).
- **Garage and cars:** real car pictures, car value estimate, EV charging with nearby chargers, and Toolbox photo import.
- **Hobbies, music and display:** Gaming (Steam, Xbox, PlayStation), Smoker, a Workout health card with treadmill sessions, YouTube Music playlists with a YouTube TV launcher, and a Picture frame mode for displays.
- **Planes:** air traffic status, restricted airspace, flight restrictions and listen-and-world tiles.
- **Now Playing and look:** a YouTube playlists card with YouTube and YouTube TV launch buttons (also on the cast pop-up), and an optional dimmed Background picture behind the pages (public-domain art or the Picture frame source). See [All pages](pages.md#now-playing-youtube-playlists-and-launch-buttons).
- **Setup:** a Setup checklist card on the System page that detects which integrations and devices are still missing. See [All pages](pages.md#system-setup-checklist).
- **Automations:** AI suggestions for new automations and rules, never applied automatically.
- **Vision alarms:** camera snapshots read by a local AI by default (cloud only if allowed per check): grass getting long, scrape the windshield, it snowed and cats fed. See [All pages](pages.md#cameras-vision-alarms).
- **Top bar and summaries:** a Refresh button in the top bar, and a one-sentence At a glance summary card on Weather, Commute, Packages, Family Board, Pantry & Fridge and Security.
- **Planes:** a glass photo card for the overhead plane, an AIR map layer for special-use airspace and active flight restrictions, and an Air restrictions near home card on Home.
- **Energy:** solar, generator and grid cards (with a Power outage card on Home).
- **Wellbeing:** opt-in family sharing of a mood dot and chosen gratitude notes, shown in How we're doing on the Family Board.
- **Workout:** 14-day sleep and weight trends, a card for 2 hours after a workout, and Cast Workout page.
- **Garage:** a drawn toolbox picture and NFC tags that open a drawer.
- **Family Board:** the page heading is back, and the schedule can no longer be saved before it loads.
- **Shopping and packages:** a Kroger-family store card and a Shop import card.
- **Devices:** an Earbuds battery card (System) and an Internet provider card (Network).
- **Wall and TV displays:** wake on approach, a Nest Hub kitchen view, and large-type TV cards.

---

## Earlier additions (versions 0.230–0.234)

- **Interface scale:** one control replaces Interface scale. Cards, columns and text re-pack to the size you pick instead of zooming the page. A small scale control also floats in Full window.
- **Cards and layout:** cards restack when one is hidden or dismissed (no gaps), keep their column when one collapses or expands, and collapsed cards show a one-line summary in the header (weather, air, UV, commute, cameras, calendar, packages, next event and more). A Reset order entry in the card menu puts cards back in the default order. Right now fills the full width first.
- **Page intros and How this works:** a friendly line under every page title says what the page is for (a switch in Settings hides it), and every card menu has a How this works sheet.
- **Smarter Home order:** urgent and recently changed cards float to the top with a small reason chip.
- **Leftovers tracker:** on Pantry & Fridge, with an Eat this first card on Home.
- **Barcode scanning:** a scan button on the shopping, pantry and storage add forms (camera, photo or typed code, looked up in Open Food Facts).
- **Gigs card:** replaces the Band card with start, setup (2 hours before), show length, breakdown, a timeline, and import from an event link. Home gig suggestions show the be-there-by time.
- **Wall calendar:** big Add event and Add to list buttons with a microphone.
- **Rooms:** a Now playing card (with a turntable icon, and channel and artwork for video players) while something plays in that room, and kids' cards in any bedroom with a child set in Room settings. Quiet hours also mute a TV or display in that room.
- **Garage:** car cards are also shown on the Garage page.
- **Claude and agents:** Ask AI (everyone) is split from Claude admin; the Agents card shows free and paid tallies with a bar per job; Right now shows the Claude card only while it is working. System page gets a Who's on card (live screens and people).
- **Touch and polish:** chips, switches, top bar buttons, tile menus and card header buttons have 44 px tap areas; pets never vanish on a redraw; Home chips scroll in a marquee below the house; Full window icon on every radar.
- **Medicine:** the medicine log and its matching to-do stay in sync both ways.
- **About and tools:** a scrolling Credits card, the pieces count, NFC "Copy add-item link", and a jot-it-down trash button with Undo.

## Earlier additions (versions 0.211–0.229)

- **Looks:** Classic, Paper, Glass and Bold designs; Auto follows the season and the theme button says what Auto follows.
- **Storage NFC tags:** stick a tag on a storage box or garage drawer to open it. A tag link ending in add opens the box with Add item ready. Shared storage places, and Pantry & Fridge has its own fridge icon.
- **Packages from email:** once a mailbox is connected, a shipping email from a carrier or shop adds the package, moves it along (shipped, out for delivery, delivered) and clears it a day after delivery. Gifts stay hidden so surprises stay secret. A package that is out for delivery or due today also shows as an automatic **Arriving today** card on Home, and a phone alert goes out only for that moment. Until email is connected, Packages shows one calm line explaining how to turn it on; packages already added are never touched.
- **Pantry:** sell-by and use-by dates, and missing ingredients for dinner.
- **Kids page:** pickup time, and a bedtime story.
- **Collapsed cards are remembered per person**; pet and Pi cards collapse the same way; page icons show an Updated dot.
- **Claude and agents:** the Home Claude card shows cost totals and an Ask Claude box, gets an accent outline and moves to the top while Claude is working. An Agents card shows status lights and job bars, and the top bar reads "N agents, building" during deploys. Claude status (idle, waiting) shows in the top bar.
- **Right now links:** tapping a row scrolls to the matching card and outlines it.
- **About:** a "Provided by Home Assistant" card with the Core, OS and Supervisor versions; lines of code and pieces are counted at build time.
- **Settings page and Your house editor**, with alerts when work starts.
- **Top bar:** tight buttons that scroll past half the bar, the open-backlog count in the version line, and text that scrolls instead of being cut off (replaces the earlier two-row top bar). A small house icon shows in the browser tab.
- **Pantry and Recipes buttons:** every chip delete button and meal-plan handle or remove button has its own 44 px touch area, so none overlap.
- **Quiet hours per room:** a room's chimes and tones stay muted on that room's screen (a kid's room defaults to 8 PM to 8 AM).
- **Week ahead:** duplicates, daily chores and trash entries are hidden with a "+N routine items hidden" note.
- **Notes box:** grows as you type, newest first, with photo thumbnails, an Edit button and no limit.
- **Hobbies:** "How this works" on every hobby card.
- **Cars:** the next three typical service milestones per car from its mileage, feeding Car due soon within 500 miles.
- **Cameras:** Frigate camera entities are left out of camera lists, and a camera without a snapshot yet no longer shows Offline.
- **Crypto and Finance:** crypto updates around the clock.
- **Design Studio:** a Right now strip with credits left and 5-hour and weekly bars, an AI market watchdog with a "New free AI options" card (Add to Jot it down), and checked-out items on top of the Backlog card.
- **Tools and checks:** tap targets are at least 48 px (tap-target audit tool), a stuck check restarts anything idle, and AI helper tools split work between a local model and free cloud models.
- **New docs pages:** why Nashboard, themes, diagrams, developer tools and the design engine.

## Earlier additions (versions 0.207–0.210)

- **Document import:** snap or paste a flyer, schedule, menu, receipt, label or link. Home Assistant's AI reads it and the app shows a preview of what it will create (calendar events, pantry or shopping items, packages, medicines, warranties, Storage items, featured posts). Nothing is added until you confirm. A daily class schedule becomes a Daily agenda card for that kid (now, next, pickup and the full day), and menu days with the month's marker get "Pack a lunch" and "Text the teacher" reminders. Photos are shrunk and turned the right way up before the AI reads them; a local vision model with thinking off reads one in about half a minute. Needs an AI integration in Home Assistant.
- **Featured posts:** add a post (link, text, picture) to the Family Board; Home shows it until the date you pick, then it moves to an archive.
- **Start page and kid lock:** each screen can open on its own page and go back to it when idle. A kid's tablet can be locked to the Kids page, with a PIN to leave (stored only as a salted hash).
- **Family favorites:** posters, Play on the TV (opens the right streaming app), and a From your favorites row on Now Playing; titles blocked for kids never show on kid screens.
- **Intercom transcripts:** messages are written out (Home Assistant speech-to-text, or the browser) on the cards and in phone notifications.
- **Pet photos:** match a photo to set a pet's coat colour and pattern, now including a second colour and calico; keep a small picture on the card.
- **Invite someone:** admins can create an account and person after a preview, then copy a designed welcome email (or a plain one) to send themselves.
- **Hobbies:** import a band set list (pasted text or a playlist link) and get quiet Home suggestions from your hobbies (dry spell for the garden, a good running window, practice coming up).
- **Finance:** optional Shares and Cost basis columns give real position values, today's change in dollars and gain/loss; crypto keeps updating around the clock.
- **Design Studio:** a live "Checked out now" strip on the Backlog card shows what is being worked on, with finished items below.
- **Quality checks:** map zoom, legend, name-clash, data and performance checks run with the builds.

## Home: automatic cards

Each one shows itself only while it matters, then hides again. A card stays **at least three minutes** so the screen
doesn't flicker, and says when the situation clears ("Closed now"). Every card can be hidden for today, hidden for good
just for you, or (admins) turned off for everyone. The "Lives on" column is the page whose Right now card always shows it.

| Card | Shows when | What you can do | Lives on |
|---|---|---|---|
| **What's new** | After an update, until you've seen it | Read every change since this screen last looked; Got it | Home |
| **Good morning** | 6 to 9 AM | Weather and today's high/low/rain, the first event, when to leave for today's trip and the drive time, trash pickup, once-a-day medicines not given yet, the next birthday | Family Board |
| **Goodnight check** | 9 PM to 1 AM, when something is left | Lights on (All off), unlocked doors (Lock, confirm), garage open (Close, confirm), TVs on (Turn off) | Family Board |
| **Leaving the house** | Everyone has left (for 45 minutes after) and something is left on or open | Lights on (All off), unlocked locks (Lock), open garage (Close), open doors and windows; locks and the garage take two taps | Rooms |
| **Kitchen timer** | A kitchen timer is running | Countdown with the timer's name; pause or cancel | Kitchen room |
| **Out the door** | Weekday mornings 6:00 to 9:30, until everything is ticked or everyone has left | Tick off Backpack, Snacks, Water bottle, Lunch, Meds | Kitchen room |
| **Doorbell** | Someone rings or a person is seen at the front door (2 minutes after the last one) | Front-door snapshot; Ignore | Family Board, every room |
| **Sticky notes** | A button on the Home banner (paper notes pinned there while one or two are open) | Post a note, reminder or countdown; mark reminders Done | Home |
| **Today at a glance** | Whenever there is something to say; always the first card under the banner | Read the day in two or three sentences; Refresh; an admin can allow cloud AI | Home |
| **Fire alarm** | A smoke, CO, heat or gas sensor is on, or a camera hears an alarm | Call button, the escape steps, steps full screen | Family Board |
| **Water leak** | A leak sensor is wet | See which sensor and room; one chime | Utilities |
| **Power outage** | The grid sensor you picked reports an outage | See since when | Energy (Labs) |
| **Power cut (running on battery)** | The UPS has been on battery for 30 seconds | About how many minutes are left and what goes down first; "Power is back" for 2 minutes after | Utilities |
| **Person at the door** | A camera's person sensor fired in the last 2 minutes (and the Doorbell card is not already up) | Snapshot, Talk, Open camera, Ignore | Family Board, front rooms |
| **Security alerts** | There are unseen important security events | Open the Security log | Security |
| **Garage open** | A garage door has been open more than 10 minutes | Close (tap twice to confirm) | Rooms |
| **Garage open too long** | The door you picked has been open longer than the time you chose, or it is past the bedtime hour you set | Close (tap twice to confirm), only when the door can be closed from here | Garage |
| **Plug in the car** | After 6 PM, the car's battery is under your level and it is not plugged in | See charge and range | Garage |
| **Roll up the car windows** | A car window is open and rain is likely where the car is | See which windows | Commute |
| **Nursery temperature** | The nursery is warmer or colder than the range you set | See the reading | Family Board |
| **Closings and delays today** | A daycare or school you watch is closed or delayed today | See why, open the source | Family Board |
| **Internet provider outage** | The connection has been down for 2 minutes | Open your provider's outage page | Network |
| **Laundry** | A load finished (until the door opens or you tap Done); a reminder if it sits | Done | Laundry room |
| **Dishwasher** | It is running, or clean and waiting to be emptied | Emptied | Kitchen room |
| **Package on the porch** | A camera's package sensor sees a package | Snapshot, Open camera | Packages |
| **Vision alerts** | A camera check says yes (grass getting long, frost on the windshield, fresh snow) | Dismiss; Commute button on snow days | Cameras |
| **Cats not fed yet** | The feeding camera has not seen them fed by the time you set | Fed them | Pets |
| **Camera sees something** | A camera state you watch has held for your minutes | Open camera | Security |
| **Mail truck** | A vehicle stopped out front, or the mail is due about now | Yes, mail truck / Not it | Security |
| **Added from email** | The Family inbox filed something in the last day, or an email waits for a tap | Open or undo on the Family Board | Family Board |
| **Pool** | A reading is out of range or a test is overdue | Open Pool, Log a test | Pool |
| **Smoker** | A cook is running, or the meat reached its goal | Dismiss | Hobbies |
| **Gaming** and **Achievement** | Someone is playing, or unlocked something in the last 3 hours | See who and what | Hobbies |
| **Earbuds battery** | A level is at or under your limit | See which bud | System |
| **Printer ink low** | A level is under your limit | See which colour | Utilities |
| **Bills due** | A bill is due within your reminder days, or overdue | See the bill | Energy (Labs) |
| **Air restrictions near home** | A flight restriction or ground stop is active near home | See the details | Planes |
| **Workout summary** | For 2 hours after a workout | See the session | Workout |
| **Litter-Robot** | The litter box needs emptying, litter is low, or it has a fault (uses the pet's name) | Jump to Pets | Pets |
| **Dog timeout** | The dog timeout timer is running | Minutes left (with the little dog); Done | Pets |
| **Dog feeder** | Feeding is in the next 10 minutes | See the time (with the little dog) | Pets |
| **Pet's medicine** | A pet's medicine is due | Log now | Pets |
| **Pet care due** | The cat's medicine or the dog's feeder is due | Done; says overdue after an hour | Pets |
| **Markets** | Weekdays an hour around the market open and close, and two hours after a big move (watchlist 2%+ or a stock 5%+) | Indexes, watchlist average, biggest mover | Finance |
| **UV high** | 10 AM to 4 PM when the UV index is 6 or more | Sunscreen and shade reminder | Weather |
| **Rocket launch** | 30 minutes before to 10 minutes after a liftoff | Countdown and where to look | Space |
| **Chores today** | A Family Board chore is due today or overdue | Done | Family Board |
| **Overdue tasks** | A Google Task is overdue | See them | Calendar |
| **Severe weather** | A National Weather Service warning is active where you are | Read it, until it expires | Weather |
| **Rain coming** | Rain or snow is likely in the next few hours | When it starts and the chance; flags an open garage (Close, tap twice) and open windows | Weather |
| **Rain radar** | At the top of Home while rain is coming or falling | Live radar map with your location pinned and a legend | Weather |
| **Freeze tonight** | The overnight low is at or below freezing | Pipes, plants and pets reminder | Weather |
| **Leave soon** | A calendar event with a location starts within the hour, or your commute says go | Navigate (Google Maps with stops) | Commute |
| **On the way home** | Someone's commute home has started | Arrival time; slower than usual? | Commute |
| **Pick up dinner?** | Someone is heading home between 4 and 8 PM | Each saved carry-out place with tap-to-call and Copy the order | Commute |
| **Gas price drop** | The cheapest nearby station for your fuel is at or below your price | Station and price | Commute |
| **Car due soon** | A car's registration, inspection or oil change is due within 30 days | See which car and when | Commute, Maintenance |
| **Car service due** | A car's oil change or a typical mileage service is due (within 300 miles or 14 days) | Drafts a service request (what is due, current mileage, last service) with a Copy button for a shop's booking form; hides when nothing is due | Garage |
| **New car recall** | The weekly recall check finds a new recall | Read it | Commute |
| **Recall for something you own** | A new product recall (CPSC) may match an appliance, toy or baby item saved in Storage | Read notice, or Dismiss | Home |
| **Nursery asleep** | The nursery sound machine is playing, 6 PM to 8 AM | Chimes stay quiet on every screen meanwhile | Family Board |
| **New on Wi-Fi** | A device this screen hasn't seen joins the network | Known, or Unknown (logs it to a Follow up later list) | Network |
| **House health** (admins) | No backup in 3 days, or a storage volume isn't normal or is 90%+ full | Jump to System | System |
| **Internet outage** | A service the house depends on (remote access, Cloudflare, GitHub, Discord) reports a major problem | See the status | Network |
| **Low batteries** | Any device's battery is low | Each device with its room | System, Rooms |
| **Fever** | A temperature of 100.4°F or more was logged in the last 12 hours | When Tylenol or ibuprofen is next OK; Log temp | Family Board |
| **Medicine** | A medicine was given and the next dose isn't OK yet (per child) | "Next dose OK at …" | Family Board |
| **Medicine expiring** | A medicine in the Medicine place expires within a month | See which | Family Board, Pantry & Fridge |
| **Medicine running low** | A medicine expires within two weeks, or its quantity is 1 or low | See which; Add to list | Family Board, Pantry & Fridge |
| **Pantry: use soon** | Pantry, fridge or freezer food expires in the next 3 days or just expired | Used up | Pantry & Fridge |
| **Running low** | A stored item is at or below its low count | Add to shopping list | Storage |
| **Insurance list** | Once a year, or when valuables have no serial number or a value older than 12 months | Review; Remind me in a month | Storage |
| **Warranty ending** | An appliance warranty ends within 30 days | Serial, place and manual link | Storage |
| **Warranty about to end** | A warranty ends within 30 days | "Anything wrong with this?" with serial and receipt link; All fine or Not now (asks again in 3 days) | Maintenance, Home |
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
| **Claude** | Claude Code usage near the limit, or a free reset waiting; while Claude is working it gets an accent outline and moves to the top | Plan limits, credits, what Claude is doing, next run, Ask AI (Autopilot for admins) | Home |
| **New free AI options** | The weekly AI market watchdog finds a new free model or service | Read it; Add to Jot it down | Design Studio |
| **Steam Deck battery** | The Deck's battery is under 20% and not charging | See the level (a smart plug part is still open) | Hobbies |

On the Display / TV view, Google Tasks due today or overdue show as a **Tasks** card.

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
  lamp in the house picture stand for, with a Highlight button to see which is which. The lights and decorations
  follow it.
- **The mailbox** stands on the outside edge of the driveway (or where you choose in Your house) and its door swings open with envelopes when mail is expected today (USPS Informed Delivery emails).
- **Art to the edges, chip strip in place:** the banner picture reaches every edge of its card (no grey band), and the strip of **two-line chips** (label on top, detail below, a long line scrolls inside its chip) sits between the horizon and the banner's bottom edge at every width. On phones the banner shows the whole house.
- **Clock** card at the top right of the banner on wide screens (1100 px and up), opposite the weather card: time, weekday and date in the device's time zone (the same as the top bar). Phones and tablets show the time in the top bar instead.
- **Weather** sits in the banner on wide screens, and as a compact card on phones (current conditions, the next few
  hours, rain, wind, sunrise) that opens to the full forecast with a tap and opens by itself when rain is likely.
- **Info chips** for lights on, the garage, indoor temperature and humidity, mail and packages, low batteries, open
  doors and windows, updates and pet problems. Tap one to act on it.
- **Pets live on the app, not in the house picture**: the pet characters sit on card headers instead (the dog on the
  Dog timeout card, a cat on the medicine and litter cards), walk along card edges, nap, peek and chase each other
  across the cards. Tails wag, cats breathe. **Tap a pet** to see its name in a little speech bubble with a heart, and
  it hops. Holiday outfits: a Santa hat, witch hat, heart collar or party hat. See [Pets](#pets).
- **Holiday themes**: New Year (fireworks), Valentine's Day, St. Patrick's Day, Easter, Mother's and Father's Day, the
  first day of school, Memorial Day and the Fourth of July, Halloween, Thanksgiving, Hanukkah (a menorah), December and
  Christmas, snow days, game days and family birthdays (balloons and a banner) each tint the banner, **decorate the
  house itself** and add a light animation (falling leaves, snow, hearts, confetti, fireworks) on the day and the days
  before. On, Calm (no animation) or Off per screen.
- **Tap the house banner** to see why it looks the way it does: a bubble explains what drives the sky (holiday, weather
  effect, sunrise and sunset) and what drives the house (lights on, packages delivered today, holiday decorations), with
  links to the pages behind each.
- **Your house from a photo**: the Your house editor reads a photo of your home and suggests the roof, walls, trim, door and trees for the banner (with an AI in Home Assistant, or from the photo's colours on the device, where the photo never leaves it). You review every choice before saving. The editor also has a **Mailbox** section (spot: outside or inside edge of the driveway, by the front walk, on the porch wall or none; style: classic post box, stone or brick pillar, modern box, wall-mounted; colour), a **Driveway** (side, straight or curved, surface colour), a **fence** (none, picket, privacy, split rail, with colour), **shutter colour**, **garage door** style and colour, and switches for **path lights**, **string lights** and **holiday decorations**. A live preview shows each choice.

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
  cars (Garage), and **Storage here**: the containers from the Storage page whose place name contains the room's name.
  **Room settings** on every room page: a layout by room type (kitchen, bedroom, garage, living room,
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
  **Import** reads a photo, screenshot, pasted text or link (a flyer, a school lunch menu, a daycare schedule) with the AI set up in Home Assistant and offers the events to add.
- **Activity**: today's (and yesterday's) timeline, newest first and grouped by hour: the doorbell and people at the
  door, doors and the garage, locks, people arriving and leaving, packages, alarms and smoke, intercom messages. Filter
  chips; refreshes every minute.
- **Now Playing**: what every speaker is playing, with controls, per-speaker faders in groups and Music Assistant
  browsing.
- **Shopping**: only the shopping lists (other lists stay on their own pages), with voice entry, ticks into the cart and
  Buy again, and **Start shopping** to regroup the list by store section.
- **Pantry & Fridge**: what's on hand and when it expires, in a shared to-do list. Each item is pantry, fridge or
  freezer. Scan a barcode with the phone camera (name from Open Food Facts) or type it, add the date and amount. "Use
  soon" lists anything expiring within 3 days; **Used up** removes it and the cart button also adds it to the shopping
  list. **Storage places** you add and remove (Medicine included), each with a container type and able to sit inside
  another place (Where shows the nesting); On hand is grouped by place. Medicines in the Medicine place warn before they
  expire. **Suggested use-by dates**: an item with no date gets a suggestion from standard food storage times (USDA
  FoodKeeper, about 200 foods, for pantry, fridge or freezer), marked as suggested, with one-tap **Accept**.
- **Storage** ("where's it stored"): a house inventory. Places nest (Garage › Red toolbox › Drawer 3); items have a
  count, note and photo, and appliances a serial number, purchase date, warranty end and manual link. One search box
  finds anything ("where are the christmas lights") with its full path. **Printable QR labels** for every place
  (scanning one opens that place), **low counts** with Add to shopping list, and **Running low** and **Warranty ending**
  cards.
- **Garage** (tool storage): toolboxes and tool chests with their drawers and the tools in each, one search box ("10 mm
  socket"), a small photo per drawer and printable QR labels. It is built on the Storage page's places and items, so the
  Storage search finds tools too, and the Garage room page shows a **Tool storage** card. **Tools from a photo**: photograph a
  toolbox or drawer and the AI lists the drawers and tools for you to review before saving.
- **Kids**: one big-button page for a kid's tablet, made only from things that already exist: the time and a bedtime
  countdown, **Coat check** from the weather, a **star chart** (each Family Board chore done earns a star), the **Out
  the door** checklist, shows and channels from Family favorites (anything blocked for kids never shows), the pets, a
  plane overhead and the Space Station, and big music buttons. A child sees no settings, no editing and no set-up text; adding and
  importing sit behind a **Grown-ups** button and the 4-digit PIN. **Tell me a story** makes a gentle bedtime story from
  the day, and a **kid lock** keeps a tablet on this page.
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
  worldwide, arrivals boards with airport tabs, map buttons that scroll, and a legend for every colour and line
  (altitude colours, military aircraft, trails) that the INFO button hides.
- **Map**: everyone's location with a path of where they've been today (with a legend), commute places and a You marker.
- **Space**: the Space Station's passes for the next 3 days (visible ones highlighted), the sky right now with the
  brightest satellites, a sky dial that turns with the phone (with a legend, also on the Home card), and upcoming rocket
  launches.
- **Multi-view**: up to four pages on one big screen.
- **Display**: a full-screen dashboard for TVs and wall screens (see Casting). A new TV starts on one still screen built around the live camera wall; rotating screens are a choice.
- **Finance**: a watchlist from a Google Sheet with day moves and sparklines, market indexes, and a **Bitcoin
  long-term power law** chart (with a legend) that zooms (preset windows or drag across it) and remembers the zoom.
- **Network & Storage**: devices on the Wi-Fi (busiest first, weak signal in red), new-device alerts with a **Follow up
  later** list, internet speed history, router and NAS health, guest Wi-Fi, and an **Internet services** card.
- **Hardware**: the machines behind the house in one place: the Home Assistant host, a card for each desktop PC with live gauges and an Add another PC how-to, printers, a 3D printer, the router and the NAS (each only when set up).
- **Family Board**: made for the kitchen with bigger text: the clock and weather, who's home, trash and recycling days,
  today's events and dinner, chores, the shopping list, **Medicine & fever**, **Birthdays**, the **Intercom**,
  **Holiday traditions**, **Carry-out orders**, **Kids' activity ideas**, **Family favorites**, **For sale**, the **Week
  ahead**, emergency contacts and the Doorbell.
- **Guest**: everything a guest or sitter needs: a welcome note, Wi-Fi with a QR code, weather now and the next 6 hours,
  the live radar, contacts, how-tos, pet notes, a **Watching TV** card (remote steps and YouTube TV buttons per TV) and a
  few safe controls. **Guest mode** turns every house screen into a simple guest view (no commute or family routine, no settings) until you turn it off or a date you set; a grown-up PIN lifts it on one screen.
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
  totals per person. A **health card** shows steps, heart rate, sleep and weight from your own phone app's sensors and times treadmill sessions; a value from anywhere else is never picked for you.
- **Automations**: everything the house does on its own, as friendly cards with on/off, last ran, description and Run
  now, plus **Make your own** templates (see [Automations](automations.md)).
- **System**: Home Assistant health, updates, backups, low batteries, **Home settings** (the household basics in one
  place, each linking to where it's edited), **Hidden cards** (Show again), **Banner windows**, the **Device setup**
  checklist, the **User manual** link (kept for every user, remembered on each screen), **Saved data** (every saved app
  setting with its size, entries, last save, who saved it and the version, plus Undo), and Interface scale on phones.
- **About**: version and build, what's new, every feature, data-source credits, the user manual and **Run the tour
  again**. It is always the last page in the menu, and an **i** button in the top bar opens it from anywhere. When the
  top-bar buttons don't fit on a phone, they scroll with a soft fade at the end.
- **Design Studio**: see [below](#design-studio).
- **Labs**: a **Browser** (just the bar: back and reload, bookmarks, address with voice; tools behind a ⋯ menu; reopens
  your last page on each device; in Full window it works like a real browser) and a 3D printer page.

### Kitchen tablet

A wall display in the kitchen runs the normal **Home** page. Turn it on per device with **Cast → This device → Kitchen
tablet** (or open the dashboard with `?display=kitchen`; `?display=off` turns it off). After 2 minutes without a touch it
goes back to Home and closes anything left open, and it keeps the screen awake. At night (9 PM to 6:30 AM) it dims to a
very low level after a minute without a touch (a tap wakes it), with no animations or chimes.

The kitchen at-a-glance cards live on the **Kitchen room page**: Today (calendar and dinner), Who's home, Trash &
recycling and Chores (copies of the Family Board cards), next to the room's own Maintenance, Pantry, Dinner tonight and
device cards, plus the Living Room's controls when there's a living room. Hide them with the room's automatic cards in
Room settings.

Two more cards live on the Kitchen room page:

- **Timers**: three named kitchen timers. Buttons for 5, 10, 15, 30 and 60 minutes, a form for a name and minutes, and
  pause, resume and cancel. While one runs, Home shows a countdown card. When one finishes, open screens play a chime
  and show a message; the kitchen tablet stays quiet at night.
- **Out the door**: a checklist (Backpack, Snacks, Water bottle, Lunch, Meds; editable) shared between screens, with the
  ticks reset every morning. On weekday mornings from 6:00 to 9:30 a copy shows on Home until everything is ticked or
  everyone has left.

---

### Battery fleet (Maintenance)

Under the low-battery list, Maintenance shows every battery that reports a percentage, with how fast it has been draining (worked out from the last 30 days, since the most recent battery swap), a replace-by date, and the battery type you set for it (AA, CR2032 and so on). One button adds the batteries needed within 30 days, counted by type, to the shopping list. Types are saved in Home Assistant. If no battery sensors exist, the section does not appear. Inspired by iluebbe/maintenance_supporter.

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

- **Pet characters** (cat or dog, coat colour and pattern; more than one of each) that live on the cards rather than in
  the house picture: on card headers (the dog on Dog timeout and feeder, a cat on the medicine and litter cards), on the
  Kids page, and in a corner of Display mode (one at a time, swapping every few minutes). Names come from the Pets page and are used
  on the feeder, litter box and timeout cards.
- **Pets that play around the app**: now and then the dog trots along a card, the cat naps on one, they chase each
  other, and they react to taps. Mostly on the Pets page (every 25 to 60 seconds there, mostly chases), only rarely
  elsewhere. Off with holiday Calm/Off or reduced motion.
- **Dog timeout** (30 minutes, 1 hour, 2 hours) with a countdown card and a phone alert when it's up.
- **Dog feeder** times with a Home card 10 minutes before and a phone reminder 5 minutes before.
- **Pet medicine by NFC tag**: tap the tag on the bottle with your phone to log a dose (too-soon taps only warn), a
  missed-dose phone reminder, a Pets page card with Log now and a Home copy when due.
- **Cat medicine bottle**: the Pets page's cat medicine card shows the medicine bottle from Pantry & Fridge with its
  expiration date.
- **Litter box** status, drawer and litter level, faults and history.
- **Pet notes** from the Guest page show (and edit) here.
- **Pet characters from a photo**: a photo suggests the coat colour and pattern, with a before and after drawing; the photo stays on the device.
- More pet reactions **(planned)**.

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
- **Kids' activity ideas**: 72 built-in ideas, chosen for the kids' ages, the weather and the time of day, with "We did
  it"; a weekend-morning Home card.
- **Family favorites**: movies, shows and YouTube channels, plus a "blocked for kids" list; a Friday movie-night card.
- **For sale**: item, price, where it's listed, Sold; a Home nudge after a month.
- **Chores**, the **shopping list** and **emergency contacts**.

---

## Phone, watch, TV and car

- **Phones**: everything works on Android and iPhone. Phone layouts have a two-line title bar (the title, then the time,
  version and connection dot, with Nashboard as a small centred N badge), the bug button, a compact weather card
  and touch-friendly cards.
- **Left- or right-handed** (Interface scale → Hand, per person): on phones the navigation, room card buttons, page header
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
  give **each TV its own setup**. Casting creates (or refreshes) a view for that TV in Home Assistant's TV dashboard, so
  the TV knows which one it is even after a reload. Home's automatic cards show as a strip on the radar and camera screens, and a new one
  jumps the rotation back to Home. When the radar can't load on a TV, the National Weather Service loop is shown.
- **Device setup checklist** (System page and [docs](device-setup.md)): TVs and displays, phones, car and watch, with
  ticks kept per device.

---

## Automations and phone alerts

- **Automations page**: every Home Assistant automation as a friendly card, grouped (phone alerts, dashboard, lights,
  security and garage, pets, other), with on/off and Run now for admins, when it last ran and its description.
- **Make your own** (admins): five fill-in templates (lights on at a time, lights off at a time, door/garage/lock opens →
  phone alert, someone arrives home → lights on, lights on at sunset) saved as real Home Assistant automations.
- **Leaving-home phone alert**: two minutes after the last person leaves, every phone is told if lights are on, a lock is
  unlocked or the garage is open. Nothing physical happens on its own.
- **The shipped automations**, what triggers each and how to turn it off: [Automations](automations.md).

---

## Whole-app conveniences

- **Card ⋯ menu** on every card header: Full window, Collapse, Hide for today, Hide just for me (and, for admins, turn it
  off for everyone), plus the card's related settings. It opens under its own button, above everything, and works on collapsed cards.
- **Tap a card's top bar** to collapse or expand it, on every page. What you collapse is remembered for you on every screen; other people keep their own view.
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
  interface scale.
- **Swipe between pages** on phones: a clear sideways swipe on empty page or a card body moves to the next or previous
  page in menu order, with a short slide and a page-name hint. Card swipes, chip and tab rows, maps, the radar, charts
  and sliders keep their own gestures. Switch in Alerts & notifications.
- **Legends everywhere**: any card, map or chart whose colours, line styles or symbols carry meaning has a legend for
  every one of them (the Space sky dial, the Planes map, the Map path, the Bitcoin chart; the radar has its colour bar).
- **Self-updating**: every screen reloads itself when a new version is deployed, but waits while someone is typing.
  The first time a screen loads a new build it plays a short, soft **chime** with the "updated" message (once per build
  per screen, never in quiet hours or on Calm/Off, with a switch in Settings), so you hear that the wall screens updated.
- **One safe data store**: every saved setting goes through one layer that reads the latest copy and merges it, so two
  screens saving at once never wipe each other out. A save that would suddenly shrink a list asks first (or is refused),
  the last 20 versions are kept with Undo on System → Saved data, and a dated copy is exported every night and kept 30
  days. Lists never go blank on a failed refresh, and shared settings can't be wiped by an update. See
  [How it all connects](how-it-connects.md).
- **Build number and lines of code** in the title bar; "Family OS" subtitle.
- **Home intercom** (see Family tools).

---

## Design Studio

Opened from System or the More menu.

- **Jot it down**: type or say an idea, attach a photo or screenshot, swipe left to remove one. New ideas are filed into
  the backlog automatically (**Import now** asks for it at the next check-in). Claude's own **suggestions** show here,
  marked and dated, with **Accept** and **Ignore**. Ignored suggestions are archived in a collapsed **Ignored
  suggestions** list, each with **Bring back**.
- **Backlog**: the full plan, searchable, sections collapsed until you search. **Show done** opens the Done list and
  scrolls straight to it.
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
mobile notifications, Frigate (camera detection), and Ollama and Google Gemini in Home Assistant (the AI behind document import).

AI helper tools: a worker script sends jobs to a local Ollama model (the only place personal data may go) or, when a job has no personal data, to free cloud models (Groq, Gemini, OpenRouter free) within their free limits.

Free services: Open-Meteo (weather and air quality), the National Weather Service (alerts, radar), adsb.lol and other
ADS-B feeds (planes and 7700s), OpenSky (highest and fastest plane), Planespotters and Wikipedia (aircraft photos),
CelesTrak (satellites), Launch Library 2 (rocket launches), ESPN and MLB's stats feed (scores and box scores), Google News
(breaking news), Yahoo Finance and blockchain.com (markets and Bitcoin), statuspage feeds (internet services), Open Food
Facts (barcodes), USDA FoodKeeper storage times (built in, for suggested use-by dates), openFDA and DailyMed (drug labels), NHTSA (VINs and recalls), OpenStreetMap and Leaflet (maps),
zippopotam.us (zip codes).

Details for each, with setup and limits: [Data sources](integrations.md).

---

## Planned (from the backlog)

Not built yet:

- A car app for Android Auto and CarPlay (a design prototype exists; see [Future: car app](car-app.md)). Today the car
  uses the Home Assistant app's own favourites.
- Package tracking through the postal service's own developer feed.
- Medicine dose by weight and a "sick day" Home card.
- More pet reactions.
- A 3D printer page (the Labs page is a placeholder).
- A database add-on behind the saved-data layer.
