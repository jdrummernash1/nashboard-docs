---
title: Nashboard 1.0
---

[← Nashboard](index.md)

# Nashboard 1.0

Nashboard is a dashboard for Home Assistant, made for wall tablets, phones and TVs. It is built on one idea: the screen
shows what matters right now and gets out of the way otherwise. Cards appear on their own when something needs you
(rain coming, the garage left open, time to leave) and go away when it no longer does. Every card also has a permanent
home on the page it belongs to.

1.0 is the first release meant for other households. Rooms, people, pets, trips and teams all come from your own
Home Assistant and from what you enter.

## What is in 1.0

- **More than 40 pages.** Home, Rooms (a page for every Home Assistant area, made automatically), Cameras, Calendar,
  Weather, Air & Allergy, Planes, Space, Map, Commute, Sports, Packages, Shopping, Recipes, Pantry & Fridge, Storage,
  Garage, Family Board, Kids, Pets, Guest, Maintenance, Hobbies, Workout, Security, Activity, Automations, Network,
  Finance, Settings, System and About, plus Utilities, Pool, Wellbeing, a Sitter monitor and Energy (in Labs).
- **Home that sorts itself.** About 95 automatic cards, each with a priority. Urgent ones (a water leak, a power cut,
  someone at the door) come first; quiet ones are stacked together. Today at a glance, a short summary of the day, is
  the first card under the banner.
- **Right now on every page.** Each page shows what is live there. Everything quiet folds into one line, and rows for
  things your house does not have are not shown.
- **Made for every screen.** Phones get a bottom tab bar and a layout that re-packs instead of shrinking. TVs get a
  Display view with large type and rotating screens, and each TV can have its own setup. A wall tablet can wake when
  someone walks up, and a display can be a picture frame when the room is empty.
- **Family tools.** Medicine and fever tracking, chores with a star chart, a Kids page with a grown-up PIN, guest mode
  for every screen, opt-in location and mood sharing, and an intercom.
- **Make it yours.** Move, collapse or hide any card; choose your menu pages; seven accent colours, several looks,
  light and dark, an interface scale, and a left- or right-handed phone layout. Your choices follow your sign-in.
- **Your data is safe.** Everything you enter is saved in Home Assistant, never only in the browser. Saves merge with
  the newest copy, the last 20 versions can be undone, a dated copy is kept every night, and a failed or empty load
  never replaces what is on screen.
- **Private by default.** AI features use only a local model unless an admin allows cloud AI. Guests do not see the
  family's routine. A demo mode (`?demo=1`) runs on a made-up house and never touches real data.
- **A real starting list.** The Setup checklist begins with Getting started (rooms, weather, calendar, shopping list,
  cameras, speakers, phones, commute). Optional extras are folded away and never counted.
- **Checked before every release.** Automatic checks load the real app and fail on card gaps, overlapping controls,
  small tap targets, low contrast, cards that do not line up, unsafe saves and anything personal in the code.

## What you need

- **Home Assistant**, with an admin sign-in to install. This is the only requirement.
- **The Home Assistant app** on each phone, for who is home, notifications and phone sensors (optional).
- **Cameras, speakers, a calendar, a shopping list:** each page appears once Home Assistant has what it shows.
- **A camera detector such as Frigate** for person, package and doorbell alerts (optional).
- **An AI set up in Home Assistant** for summaries, photo import, camera checks and bedtime stories (optional; local
  first).
- **NFC tags** for pet medicine and toolbox drawers (optional).

## Not in 1.0

- A car app for Android Auto and CarPlay is a design prototype only. Today the car uses the Home Assistant app's own
  favourites.
- The 3D printer page in Labs is a placeholder.

## Can I install it?

Not yet. 1.0 is out as a preview: the docs show every page and what installing will take (two files and one
dashboard card). Downloads will be announced on the docs site.

If Nashboard is useful to you, you can buy me a coffee: [buymeacoffee.com/jdrummernash1](https://buymeacoffee.com/jdrummernash1)
