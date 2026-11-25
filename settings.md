---
title: Settings and personalisation
---

[← Nashboard](index.md)

# Settings and personalisation

## The Settings page

**Settings** is a page in the menu. It holds your own settings in one place, in five sections. A row of chips at the
top jumps to each one, and each has its own address (`#/settings/you`, `/screen`, `/household`, `/alerts`, `/app`).
The scale button in the top bar opens **This screen**.

| Section | What is in it |
|---|---|
| **You** | Who you are signed in as, with a link to your Home Assistant profile (name, language, password). **Menu pages**: which pages are in your menu and in what order, saved to your account. |
| **This screen** | Only this device. **Look and size**: theme (dark, light, or follow the device), the **Interface scale** sheet (size, the Look, accent colour, background picture, left- or right-handed layout, holiday decorations). **Location use**: what used this device's location, or a zip code instead. **Screen options**: start page, kid lock, kitchen tablet, picture frame and wake on approach. **Smart layout**: on by default; a switch for this device only turns it off; see [Smart layout](pages.md#home-smart-layout). Casting to a TV stays in the Cast button. **Wall screen user** (admins): mark a non-administrator login as a wall screen; see [Wall screen user](pages.md#home-wall-screen-user). |
| **Household** | **Your house** (the banner house), the **Kids** list, and shortcuts to Home settings, the Family Board and the Guest page. |
| **Alerts** | **Household quiet hours**, the Alerts and notifications sheet (chimes, plane and Space Station alerts, phone alerts) with switches for Swipe between pages, Page intros, the New build sound, the Connection lost alert and the location pin, **Card change notices**, and (admins) Demo page alerts. |
| **House and app** | A link to the System page (updates, backups, saved data, device setup) and the **Maintainer tools** switch. |

Under **Household** there is also **Cards on each page**: take a card off a page for everyone at home, or show a card from another page on it. Removed cards are only hidden, so nothing saved in them is lost. **This screen** has **Raise cards and pages you use**, which lets Smart layout move cards you use up a little (see [Raise cards and pages you use](pages.md#home-raise-cards-and-pages-you-use)).

### Instant switches

Every switch flips the moment you tap it and saves in the background. If the save fails, it flips back and says so.

### Household quiet hours (Settings, Alerts)

One schedule for the whole house, saved for everyone. It is **off until you turn it on**; then pick a start and end time.
These follow it, each with its own switch: chimes and tones, card change notices (a small message instead of the big
one), announcements, the intercom (new messages are not played aloud; the card still shows), screen dim on the kitchen
tablet and wall screens, and security phone alerts (smoke, CO and water leaks always come through). While it is active,
wall screens and TVs show a "Quiet hours until..." line.

- A **room** can opt out: Room settings, Quiet hours, **Follow household quiet hours**.
- A **camera** can keep its doorbell chime.
- Quiet hours you already set (a room's own, card notices, security, camera, kitchen tablet night) keep working. The
  household schedule only adds quiet time. The card lists what still keeps its own times.

### Card change notices (Settings, Alerts)

A full-screen notice when an urgent card appears or clears by itself. **Off by default.** When on, it shows on wall
screens and TVs only; a phone, tablet or computer joins in when you switch on **On this screen too** there (saved on
that device). Its own quiet hours, and household quiet hours, swap it for a small message. Saved for the whole household.

### Notifications

The full list of notifications the app can send, what triggers each and where it shows, is on the **About** page and on
[Notifications](notifications.md). Phone alerts have their own switches in Settings, Alerts.

### Maintainer tools (Settings, House and app)

One switch, saved for you, hides everything about building the app: the bug button, the open backlog count, the Claude
status light, the usage card, lines of code, market value facts, "Claude started" notices and Design Studio. It is **on for
admins and off for everyone else** until you choose. The switch shows for admins and for anyone who turned it on, so you
can always turn it back on.

Other settings that live elsewhere:

- **Page summaries** (System page): one switch for the "At a glance" sentence on Weather, Commute, Packages, Family
  Board, Pantry & Fridge and Security.
- **AI privacy** (System page, admins): local AI only, unless an admin allows cloud AI. Every AI feature follows it.
- **Background picture** (This screen, Interface scale, next to Look): an optional soft picture behind every page, off by default.
  Public-domain art by theme, or whatever the picture frame shows. It changes slowly and is dimmed so text stays readable.
- **Looks** (Interface scale): Classic, Glass and the other looks, plus seven accent colours. See [Themes](themes.md).
- **Guest mode** (Guest page, admins): one switch turns every house screen into a simple guest view (the Guest page
  first, a short menu, no settings or editing) until you turn it off or a date you choose. A grown-up PIN lifts it on
  one screen.
- **Kid lock** (Settings, This screen, with a Kids start page): keeps a tablet on the Kids page behind a 4-digit grown-up PIN. The same PIN
  opens **Grown-ups** on the Kids page.
- **Room settings** (each room page): the room's layout, which sections show, and cards added to that room.

## Saved per Home Assistant user (follows you to every device)

- **Menu pages**: choose which pages appear in your side menu (System → Menu pages, or More → Customize menu). The menu is grouped under Everyday, House, Family, Out & about, Fun & info, Labs and System, and your choices work inside each group. A **Frequent** group of your most-used pages comes first on the side menu and the phone and tablet page bar.
  Home always stays. Hidden pages still open from links, Multi-view and Display.
- **Alerts and sounds**: overhead plane alerts, Space Station alerts, emergency (7700) alerts, connection-lost
  alerts, the doorbell/person chime and the garage chime. With **phone alerts** on, Home Assistant also notifies phones
  (screen off too) about low planes overhead, a Space Station pass 10 minutes before, and 7700 emergencies within 200 nm.
- **Menu order**: My order, or Most used (visit counts follow you; Home and the tab bar stay put).
- **Quiet rows fold**: whether a page's "All quiet" fold is open or shut is remembered for you.
- **Hidden cards**: cards you hid with the ⋯ menu's Hide just for me (bring them back from Customize menu → Hidden cards).
- **Theme colour**: one of seven accents (Interface scale).
- **Hand**: left- or right-handed phone layout (Interface scale → Hand).
- **User manual link**: kept for every user, remembered on each screen.
- **Hobbies** you picked on the Hobbies page.
- **Page intros**: a switch in Settings, Alerts (or the Hide button on the line itself) hides the short intro under each page title.
- **Collapsed cards**: tap a card's top bar to collapse or expand it; what you collapsed is remembered for you on
  every screen.
- **Pages you switched on** from More to set up, and whether Labs pages show.

These are stored in Home Assistant's own per-user storage, so they move with your login.

## Saved for everyone (shared)

- Calendar colours
- Guest page information
- Family Board trash and recycling schedule
- Maintenance jobs and Chores (Home Assistant to-do lists)
- Room pictures (when shared pictures are set up), room icons and Room settings (layout, hidden sections, added cards)
- Cards an admin turned off for everyone
- Cards removed from or added to a page (Cards on each page)
- The Storage inventory, Pantry places, cars, birthdays added by hand, holiday traditions, carry-out orders, family
  favorites, for-sale items, kids' ages, hobby cards and the workout log
- Quiet hours on room TVs: a room's quiet hours also mute a TV or display in that room
- Child in this room (Room settings): shows the kids' cards in that bedroom
- Cast setups per TV and the banner windows map
- The Out the door checklist and its ticks, and the three kitchen timers and their names
- The background phone-alert switches kept in Home Assistant (plane and space alerts, gas price alert with its fuel and
  price): one setting for the whole house. See [Automations](automations.md).

Only Home Assistant admins can change the shared Guest information and pickup schedule.

## Saved on each device

- Light or dark theme
- Interface scale (re-packs cards, columns and text; the toolbar stays)
- Whether this screen also shows the full-screen card notice ("On this screen too")
- Card drag order, with Reset order in the card menu to go back to the default
- Planes map style, radius, flight paths and centring
- The phone compass on or off
- Cards swiped away for the day
- Kitchen tablet mode (on or off) and the last page the Browser showed

## Design Studio (backlog and ideas)

System → **Design Studio** (also in the More menu; shown only while Maintainer tools are on) opens the project backlog inside the dashboard. Anyone can
**jot down an idea** there, by typing or with the microphone button; ideas go into a shared Home Assistant to-do list and are filed into the backlog at the
next working session, after which they tick off automatically. The backlog itself is searchable, with sections that
open and close and a "Show done" switch that opens the Done list and scrolls to it. Ignored Claude suggestions are archived in a collapsed
list with Bring back.

## Phone compass

On phones and tablets, the **Compass** button (Space page sky card, and the Planes map controls) turns the view so
the direction the phone points is at the top. iPhones ask for motion access once. Browsers only provide compass
readings on secure (https) addresses, such as a Home Assistant Cloud link.

## Full window and full screen

Maps, radar and some pages have a button that grows them to fill the window, and then the whole screen.
