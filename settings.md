---
title: Settings and personalisation
---

[← Nashboard](index.md)

# Settings and personalisation

## The Settings page

**Settings** is a page in the menu (and a button on the System page). It holds your own settings in one place:

| Card | What is in it |
|---|---|
| **Look and size** | Theme (dark, light, or follow the device) and the **Interface scale** sheet: size, the Look, accent colour, the background picture, left- or right-handed layout and holiday decorations. Saved on this device, except the accent, Look and hand, which follow you. |
| **Alerts and notifications** | Opens the alerts sheet (chimes, plane and Space Station alerts, phone alerts), plus switches for Swipe between pages, the New build sound, the Connection lost alert and the location pin. |
| **Card change notices** | A full-screen notice when an urgent card appears or clears by itself. **Off by default.** When on, it shows on wall screens and TVs only; a phone, tablet or computer joins in when you switch on **On this screen too** there. Quiet hours swap it for a small message. Saved for the whole household. |
| **Menu pages** | Which pages are in your menu and in what order, the **Show Labs pages** switch, hidden cards, and **More to set up**: pages that wait until they have something to show (Commute, Pets, Pool, Utilities, Energy), each with a Set up button. |
| **Location use** | What used this device's location, or set a zip code instead. |
| **The house and the app** | A link to the System page: updates, backups, hidden cards, saved data, device setup. |

Other settings that live elsewhere:

- **Page summaries** (System page): one switch for the "At a glance" sentence on Weather, Commute, Packages, Family
  Board, Pantry & Fridge and Security.
- **AI privacy** (System page, admins): local AI only, unless an admin allows cloud AI. Every AI feature follows it.
- **Background picture** (Interface scale, next to Look): an optional soft picture behind every page, off by default.
  Public-domain art by theme, or whatever the picture frame shows. It changes slowly and is dimmed so text stays readable.
- **Looks** (Interface scale): Classic, Glass and the other looks, plus seven accent colours. See [Themes](themes.md).
- **Guest mode** (Guest page, admins): one switch turns every house screen into a simple guest view (the Guest page
  first, a short menu, no settings or editing) until you turn it off or a date you choose. A grown-up PIN lifts it on
  one screen.
- **Kid lock** (Cast sheet, This device): keeps a tablet on the Kids page behind a 4-digit grown-up PIN. The same PIN
  opens **Grown-ups** on the Kids page.
- **Room settings** (each room page): the room's layout, which sections show, and cards added to that room.

## Saved per Home Assistant user (follows you to every device)

- **Menu pages**: choose which pages appear in your side menu (System → Menu pages, or More → Customize menu).
  Home always stays. Hidden pages still open from links, Multi-view and Display.
- **Alerts and sounds**: overhead plane alerts, Space Station alerts, emergency (7700) alerts, connection-lost
  alerts, the doorbell/person chime and the garage chime. With **phone alerts** on, Home Assistant also notifies phones
  (screen off too) about low planes overhead, a Space Station pass 10 minutes before, and 7700 emergencies within 200 nm.
- **Menu order**: My order, or Most used (visit counts follow you; Home and the tab bar stay put).
- **Hidden cards**: cards you hid with the ⋯ menu's Hide this card (bring them back from Customize menu → Hidden cards).
- **Theme colour**: one of seven accents (Interface scale).
- **Hand**: left- or right-handed phone layout (Interface scale → Hand).
- **User manual link**: kept for every user, remembered on each screen.
- **Hobbies** you picked on the Hobbies page.
- **Page intros**: a switch in Settings (or the Hide button on the line itself) hides the short intro under each page title.
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

System → **Design Studio** (also in the More menu) opens the project backlog inside the dashboard. Anyone can
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
