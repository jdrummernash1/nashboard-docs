---
title: FAQ
---

[← Nashboard](index.md)

# Questions people ask

## The basics

**What is Nashboard?**
A dashboard for [Home Assistant](https://www.home-assistant.io/). It shows what matters right now and gets out of the
way otherwise: cards appear by themselves when something needs you (rain coming, the garage left open, time to leave)
and leave when it no longer does. Every card also has a permanent home on the page it belongs to.

**What do I need to run it?**
A working Home Assistant and an admin sign-in. Nashboard is two files inside Home Assistant; it has no server, add-on
or account of its own. See [Set it up](setup.md).

**Can I download it now?**
Not yet. Nashboard is out as a preview (now at version <!-- ver -->1.23<!-- /ver -->): these pages show what it does and what installing takes. Downloads will be announced on [What is new](changelog.md).

**Does it cost anything?**
There is no charge and no subscription. If it is useful to you, you can
[buy me a coffee](https://buymeacoffee.com/jdrummernash1). That never changes what the app does.

**Can I look before I set anything up?**
Yes. Open the dashboard address with `?demo=1` on the end. It runs on a made-up sample house, is read-only, and never
reads or changes your real house. A DEMO strip shows on every page. An admin can get an alert when someone opens the demo (Settings → Alerts).

## Privacy and data

**Where is my data kept?**
In Home Assistant's own storage: per person for your own choices, shared for household things such as lists and
schedules. It is part of Home Assistant backups. The System page lists every saved setting with Undo.

**If I delete something on one screen, can it come back from another?**
No. A delete is remembered, so it stays deleted on every screen, even one that was offline and later saves an older copy of the list. Undo brings the item back everywhere. Nashboard keeps the memory of a deletion for 90 days and then forgets it quietly, so it never grows without end. This covers shared lists such as shopping, packages and autoship.

**Does anything go to the cloud?**
The app itself talks to your Home Assistant. Public data (weather, planes overhead, launches, stock quotes) is read
from free public services, most of it through Home Assistant. AI features use only a **local** model until an admin
switches on Allow cloud AI under System → AI privacy.

**What do guests and sitters see?**
Guest mode turns every screen into a simple guest view: the Guest page first, a short menu, no settings, and nothing
about the family's commute or routine. A grown-up PIN lifts it on one screen.

**Can the kids change things?**
The Kids page shows no settings, no editing and no set-up text. Adding and importing sit behind a Grown-ups button
and a 4-digit PIN, and a kid lock can keep a tablet on that page.

## Screens

**Does it work on phones and tablets?**
Yes, on Android and iPhone, in the Home Assistant app or a browser. Phones and tablets get a bottom page bar that slides through every page (your most-used pages first, More always pinned at the end); the
layout re-packs to the screen instead of shrinking, and card text grows to fill each card. More lists the other pages under the same headings as the side menu.

**And on a TV?**
The cast button shows a Display view made for across the room: bigger type, no buttons, rotating screens, and each TV
can have its own setup. A display can also be a picture frame when the room is empty.

**Can I make everything bigger or smaller?**
Interface scale (Settings → This screen → Look and size) re-packs cards, columns and text to the size you choose, per device. It is
not a browser zoom, so nothing is cut off.

## Cards

**Why did a card appear, and why did it go?**
Each automatic card has a rule (for example, the garage has been open more than ten minutes). It stays at least three
minutes so the screen does not flicker, and says when the situation clears. The full list is on
[Every feature](features.md#home-automatic-cards).

**Can I hide a card?**
Yes, from its ⋯ menu: for today, for good (just for you), or, as an admin, for everyone. Hidden cards come back from
Menu pages → Hidden cards or the System page.

**What decides the order on Home?**
Priority. Urgent cards (a leak, a power cut, someone at the door) come first, then what needs doing today, then the
rest; quiet single-row cards are stacked together under Lower priority. Today at a glance is always first under the
banner.

**What is "Right now" on each page?**
The live cards that belong to that page. Everything quiet folds into one line ("All quiet · 8 things watched") that
you can open. Rows for things your house does not have are not shown.

**Will a big notice take over my screen?**
Not unless you ask for it. Card change notices are off by default. When switched on they are only for urgent cards,
on wall screens and TVs; a phone joins in only if you turn it on for that phone. At night, household quiet hours (Settings → Alerts) turn it into a small message.

**Can I make the house quiet at night?**
Yes. Household quiet hours (Settings → Alerts) is one schedule that chimes, notices, announcements, the intercom, screen dim and phone alerts follow. It is off until you turn it on. A room can opt out, and smoke, CO and water-leak alerts always come through.

## Setting up

**A page is missing from my menu.**
Some pages appear once Home Assistant has what they show (a camera, a calendar, a speaker, a shopping list). Others
(Commute, Pets, Pool, Utilities, Energy) wait under Settings → You → Menu pages → More to set up, each with a Set up button.

**What should I set up first?**
The Getting started list in the Setup checklist on the System page: rooms, weather, a calendar, a shopping list,
cameras, speakers, phones and a commute. Everything else is optional. See [Getting started](getting-started.md).

**Do I have to create rooms?**
No. Every Home Assistant area becomes a room page automatically.

**Do I need AI?**
No. Without one, summaries are simple rule-based sentences and the AI-only cards stay out of the way.

## Updates and trouble

**How do updates arrive?**
Replace the two files and every open screen reloads itself within a few minutes. Saved data is never reset.

**Something looks stale.**
Tap Refresh in the top bar (a long press reloads the app). A failed or empty load never replaces what is already on
screen.

**I changed something by mistake.**
System → Saved data keeps the last 20 versions of every saved setting, with Undo, and a dated copy every night.

**Is there a car screen?**
Today the car uses the Home Assistant app's own Android Auto favourites, which Nashboard feeds. A purpose-built car
app is a prototype only: see [Future: car app](car-app.md).
