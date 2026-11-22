---
title: Settings and personalisation
---

[← Nashboard](index.md)

# Settings and personalisation

## Saved per Home Assistant user (follows you to every device)

- **Menu pages**: choose which pages appear in your side menu (System → Menu pages, or More → Customize menu).
  Home always stays. Hidden pages still open from links, Multi-view and Display.
- **Alerts and sounds**: overhead plane alerts, Space Station alerts, emergency (7700) alerts, connection-lost
  alerts, the doorbell/person chime and the garage chime. With **phone alerts** on, Home Assistant also notifies phones
  (screen off too) about low planes overhead, a Space Station pass 10 minutes before, and 7700 emergencies within 200 nm.
- **Menu order**: My order, or Most used (visit counts follow you; Home and the tab bar stay put).
- **Hidden cards**: cards you hid with the ⋯ menu's Hide this card (bring them back from Customize menu → Hidden cards).
- **Theme colour**: one of seven accents (Display size).
- **Hand**: left- or right-handed phone layout (Display size → Hand).
- **Hobbies** you picked on the Hobbies page.
- **Expanded cards**: whether collapsible cards (gas prices, AI usage) start open.

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
- Cast setups per TV and the banner windows map
- The background phone-alert switches kept in Home Assistant (plane and space alerts, gas price alert with its fuel and
  price): one setting for the whole house. See [Automations](automations.md).

Only Home Assistant admins can change the shared Guest information and pickup schedule.

## Saved on each device

- Light or dark theme
- Text/display size (scales the content, not the toolbar)
- Planes map style, radius, flight paths and centring
- The phone compass on or off
- Cards swiped away for the day
- The Kitchen display preset (on or off) and the last page the Browser showed

## Design Studio (backlog and ideas)

System → **Design Studio** (also in the More menu) opens the project backlog inside the dashboard. Anyone can
**jot down an idea** there, by typing or with the microphone button; ideas go into a shared Home Assistant to-do list and are filed into the backlog at the
next working session, after which they tick off automatically. The backlog itself is searchable, with sections that
open and close and a "Show done" switch.

## Phone compass

On phones and tablets, the **Compass** button (Space page sky card, and the Planes map controls) turns the view so
the direction the phone points is at the top. iPhones ask for motion access once. Browsers only provide compass
readings on secure (https) addresses, such as a Home Assistant Cloud link.

## Full window and full screen

Maps, radar and some pages have a button that grows them to fill the window, and then the whole screen.
