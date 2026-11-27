---
title: Change log
---

# Change log

Everything shipped, newest first. Each build is a small batch of improvements. See [Every feature](features.md) for the full list.

Updated Nov 26 2026.

<p class="src-key"><b>Where each change came from</b>, in the Source column: <span class="src src-h">Human</span> asked for by the family · <span class="src src-c">Claude</span> suggested by Claude, or a fix Claude found in its own checks and reviews · <span class="src src-f">Free AI</span> found by a free AI helper · <span class="src src-g">GitHub</span> an open source project that inspired it (linked). Early builds with no record of who asked show no badge.</p>

## Versions 1.34 to 1.36 · Nov 26 2026

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Jot it down fast at live size (newest 20 with Show all, Undo on remove; fold and unfold about 30 ms)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Calendar redesign (Agenda view on phones, one compact toolbar, readable month and week, weather off the date, no jump)</td><td><span class="src src-h">Human</span><a class="src src-g" href="https://github.com/FamousWolf/week-planner-card" title="FamousWolf/week-planner-card on GitHub">GitHub · week-planner-card</a></td></tr>
<tr><td>Compact All lights slider with a % label</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Sliders work by touch on the floor bar, room cards and room pages</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Changelog shown as a table with Human, Claude and Other GitHub columns</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home Assistant updates are cheap (page updates at most every 0.6 s, entity index rebuilt only when entities change, cached scans: Home 9.7 to 4.3 s, Rooms 8.2 to 3.6 s, System 6.4 to 1.2 s of CPU per 10 s at live size)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Cards update in place instead of being rebuilt</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/bigskysoftware/idiomorph" title="bigskysoftware/idiomorph on GitHub">GitHub · idiomorph</a><a class="src src-g" href="https://github.com/patrick-steele-idem/morphdom" title="patrick-steele-idem/morphdom on GitHub">GitHub · morphdom</a></td></tr>
<tr><td>Home entity updates in place, Right now, Family and Kids redraw less often</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>System Right now no longer rebuilt every pack, Batteries shows the lowest 30</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Packages refreshes batched and cards appear already placed</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Planes map error fixed and page headers measured correctly</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Faster text fitting</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Calmer animations</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Lazy images and load yielding</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Heavy parsing in a worker</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Google sync for chores, wall quick add, email filing and document import</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Undo on 14 more deletes, Family load guard, toggles stay flipped, sitter cards, family inbox and TV mail-truck picture kept off wall screens, contrast fixes. New checks: live-size test data, page speed limits, jotperfcheck, slidercheck, synccheck, rules audit, stuck watchdog, binding CPU governor</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Inline Web Worker (062-worker.js) for backlog text derive, quote parse and Bitcoin fit, main-thread fallback, equality test</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Animations: pause while scrolling, transform/opacity-only loops (rain, snow, shimmer, equaliser, pulses, glow), calm set on phones</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Deep polish release. Full 4-part code review of every dashboard piece (Claude in four chats, free helpers pre-reviewing 8 files): about 50 fixes, including garage add forms that never worked, family inbox emails lost when filing failed, the Mail today card on wall screens, Undo on 5 deletes, wall-screen camera privacy, speaker timers, double announcements, wall note length, litter trend, repeat dinner, dishwasher and finance parsing, retry loops, and contrast fixes. Pets page first placement is always final. Bigger findings filed under Bugs. Docs read-through (Fable): 12 pages updated for 1.34, stale facts fixed, intros, no personal hardware details. Full deadcheck: no dead controls found</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Sticky note button back at the top right of the Home banner</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>All lights bar (all on, all off, brightness, Undo) on every floor and room</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Compact Medicine card and a dose-log-only doctor export</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>About page opens with Nashboard OS then the credits roll, idea counts Human vs Claude vs other projects on About and the docs banner, moonshot line</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Planes services card can no longer grow over Right now</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Pets page no longer flickers or jumps (cards swapped in place, page shown once ready), camera alerts card shows the last phone alert</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Wellbeing sharing asks before showing on wall screens</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Google sync write path with a waiting queue, retries, Undo and a Settings block (Tasks card first)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Jump-bar groups can be folded (saved per person)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Deadcheck tests in chunks (Home 95 and Rooms 77 controls, none dead)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>ESP32-C6 nursery bedtime and salt sensor configs drafted</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Portable design guides and an always-on Try the demo button on the docs</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>13 new ideas for 1.36 posted to Suggested by Claude</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>About 25 fixes (lost regex backslashes in NAS alerts, recipe times and cook timers; Wi-Fi icons all showing off; a carry-out list that could be saved over after a failed load; a room-preset save before load; two retry loops)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Portable design models drafted (HA dashboard and generic GUI design guides,)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Try the demo button on the docs home (opens the demo instructions until a public demo address is set)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Top bar Undo button now the same size as the other buttons</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Typing in Jot it down never raises a &quot;would remove entries&quot; warning, with a savecheck guard</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Plant care limits and problem badges on Hobbies</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/Olen/homeassistant-plant" title="Olen/homeassistant-plant on GitHub">GitHub · homeassistant-plant</a><a class="src src-g" href="https://github.com/Olen/lovelace-flower-card" title="Olen/lovelace-flower-card on GitHub">GitHub · lovelace-flower-card</a></td></tr>
<tr><td>Meals today card with missed-meal line on Pets</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/jjjonesjr33/petlibro" title="jjjonesjr33/petlibro on GitHub">GitHub · petlibro</a><a class="src src-g" href="https://github.com/RobertD502/home-assistant-petkit" title="RobertD502/home-assistant-petkit on GitHub">GitHub · home-assistant-petkit</a></td></tr>
<tr><td>Parcel app sensors as a Packages source</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/jmdevita/parcel-ha" title="jmdevita/parcel-ha on GitHub">GitHub · parcel-ha</a><a class="src src-g" href="https://github.com/ha-parcel-integrations/ha-parcel-aggregator" title="ha-parcel-integrations/ha-parcel-aggregator on GitHub">GitHub · ha-parcel-aggregator</a></td></tr>
<tr><td>Automation ideas card on System</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/ITSpecialist111/ai_automation_suggester" title="ITSpecialist111/ai_automation_suggester on GitHub">GitHub · ai_automation_suggester</a></td></tr>
<tr><td>ISS accuracy label and where-to-look chart, plane watch list (wildcards, quiet hours, snooze, photo), weather now marker and legend, indoor comfort and mould-risk score on Air</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Everyone-home privacy, generic hardware PC match, spoken alerts save-on-change, to-do list load failure line with retry, family inbox grown-ups only, idempotent to-do dose, chore credit from the tick, one garage warning at the chosen time, reward approve needs a grown-up, weekend plan privacy</td><td></td></tr>
<tr><td>PTZ joystick with tap-to-aim in the camera live view</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/deekay2153/ultimate-hikvision-nvr-card" title="deekay2153/ultimate-hikvision-nvr-card on GitHub">GitHub · ultimate-hikvision-nvr-card</a></td></tr>
<tr><td>Vacuum map with live position, tap-a-room cleaning and your own floor image</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/gdelagardelle/t90-map-card" title="gdelagardelle/t90-map-card on GitHub">GitHub · t90-map-card</a></td></tr>
<tr><td>Finance gets three private cards: Left before next paycheck, Budgets and Debt payoff</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/moeckjeremy/ledger-home-finance" title="moeckjeremy/ledger-home-finance on GitHub">GitHub · ledger-home-finance</a></td></tr>
<tr><td>Lite mode for old tablets, phones and Kindles (Settings &gt; This screen), with a one-time suggestion on slow screens</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Credit myB0B/HA-SlimDash</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/myB0B/HA-SlimDash" title="myB0B/HA-SlimDash on GitHub">GitHub · HA-SlimDash</a></td></tr>
<tr><td>Page swipe spot avoids card 3-dot hit areas</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Card swipe steps use the first visible card and clean up synced state. Check-only, no app change</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Swipe a Home card left to turn it off for good (right still hides for today), both with Undo</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Gesturecheck step 4b</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog de-duplicated and shipped 1.23-1.26 items ticked and moved to Done</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Merge driver so release merges keep ticks and never duplicate lines</td><td><span class="src src-c">Claude</span></td></tr>
</tbody></table>

## Versions 1.23 to 1.33

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Home &quot;Overhead&quot; card: photo shows only once loaded (falls back to Planespotters if the first photo fails), header padding fixed, distance no longer cut off, model not repeated</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Planes page: glass cards on the map's left edge for the picked plane (all details, small photo), the closest plane and military planes in range</td><td></td></tr>
<tr><td>The big detail panel under the map is gone. Picking a plane centres it beside the cards</td><td></td></tr>
<tr><td>Home cards keep their place once the page has loaded: expanding a card makes it longer in place instead of re-planning the grid (full re-plan only in the first 3 s, or when cards appear/disappear)</td><td></td></tr>
<tr><td>Commute cards say why there's no time (route missing / Waze not responding / no route yet) instead of &quot;Waiting for Waze…&quot;</td><td></td></tr>
<tr><td>Live games come back on Home even if swiped away earlier</td><td></td></tr>
<tr><td>Live dot and score flash</td><td></td></tr>
<tr><td>GasBuddy and Claude cards collapse to their top half</td><td></td></tr>
<tr><td>Tap the header to expand (saved per user)</td><td></td></tr>
<tr><td>Frigate: Mosquitto + Frigate apps, Garage stream live, Frigate integration copied in (Front Yard tabled)</td><td></td></tr>
<tr><td>Tidbits chip on the Home banner (rotates topic per load, Home only)</td><td></td></tr>
<tr><td>Compact weather overlay on the Home banner</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Separate weather card hidden on wide screens</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Mailbox redrawn from the real pillar photo</td><td></td></tr>
<tr><td>Casting fix: inline (srcdoc) rendering in the cast app to get around X-Frame-Options</td><td></td></tr>
<tr><td>Display mode shows &quot;Partly cloudy&quot; instead of &quot;Partlycloudy&quot;</td><td></td></tr>
<tr><td>House image no longer flattens: redrawn as soon as the banner resizes, and never squashed while waiting</td><td></td></tr>
<tr><td>Weather overlay only on banners ≥ 920px wide</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Narrower banners show the regular weather card</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Live sky dial with the pass track, where to look, visible or not, time left. Replaces the small alert while shown</td><td></td></tr>
<tr><td>&quot;Nashboard&quot; title in the top bar beside the greeting</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Choose which pages show in the sidebar</td><td></td></tr>
<tr><td>Home is locked on. Saved per Home Assistant user</td><td></td></tr>
<tr><td>Alert and notification switches (planes, Space Station, 7700, connection lost, person chime, garage chime) now saved per user too, so they follow you to every device</td><td></td></tr>
<tr><td>One Display everywhere: TV dashboard loads Display mode itself</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Casting and Open show the same thing. Toggle Rotate / One screen</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>One setting for all displays</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Automatic cards on Display: Up next, Commute, Games, Overhead aircraft (live distance), Space Station, Packages, Now playing, Breaking news</td><td></td></tr>
<tr><td> Garage open, Litter-Robot, Rain coming, Freeze tonight, Dinner tonight (Mealie), Autoship soon, Lights still on. Preview with `?popdemo=1`</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Uniform card titles on Home: icon + title, full width</td><td></td></tr>
<tr><td>Full-window zoom: Planes map, Map page, radar</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>System cleanup: cameras, Waze, Music Assistant reconnected after outage</td><td></td></tr>
<tr><td>Failed backup re-run</td><td></td></tr>
<tr><td>Google News rate limit fixed</td><td></td></tr>
<tr><td>Broken FR24 airport sensors off</td><td></td></tr>
<tr><td>Cameras self-heal</td><td></td></tr>
<tr><td>Backlog page shows each item's planned version chip (1.N, or Later)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio status cards update in place with a calm first draw</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs say where AI decides (overview in features plus notes on each page)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Shopping nudge, No dinner planned use these first, Spoken urgent alerts (Suggested by Claude)</td><td></td></tr>
<tr><td>Why is that alert on?, Sitter brief and Surprise planner (source: Suggested by Claude)</td><td></td></tr>
<tr><td>Run it now or wait energy card, Month view on the Up next calendar card</td><td><a class="src src-g" href="https://github.com/murre87/energywizard" title="murre87/energywizard on GitHub">GitHub · energywizard</a><a class="src src-g" href="https://github.com/alexpfau/calendar-card-pro" title="alexpfau/calendar-card-pro on GitHub">GitHub · calendar-card-pro</a></td></tr>
<tr><td>This year versus last year (Energy and Weather) and Export history (CSV) in card menus ()</td><td><span class="src src-c">Claude</span><a class="src src-g" href="https://github.com/bertel2020/HA-Apps" title="bertel2020/HA-Apps on GitHub">GitHub · HA-Apps</a></td></tr>
<tr><td>Camera wall Main layout (one big live picture, tap to swap) and Last 24 hours person and vehicle timeline with visitor pictures (source: Claude)</td><td><a class="src src-g" href="https://github.com/deekay2153/ultimate-hikvision-nvr-card" title="deekay2153/ultimate-hikvision-nvr-card on GitHub">GitHub · ultimate-hikvision-nvr-card</a></td></tr>
<tr><td>Smooth card motion (FLIP) and live slide-away while dragging</td><td></td></tr>
<tr><td>Home swipe split built, left-swipe check open</td><td></td></tr>
<tr><td>System page on phones redraws in place: no more flicker, lost typing or jank from live updates</td><td></td></tr>
<tr><td>New sysphonecheck quality check</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Undo button in the top bar, coffee supporters card with ready Buy Me a Coffee YAML, docs privacy filter and pagenav check, features page fixes, models section kept current</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nov 26 2026: Version 1.27 (BUILD .292). Import a document: Undo, import history, &quot;Tell the AI about this document&quot; notes, sensible default calendars and lists, calendars and lists made automatically</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Camera inside the dashboard for Take a photo</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>System page on phones redraws in place, new sysphonecheck</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Smooth card motion and live slide-away while dragging, Home swipe right to hide for today (Human; swipe left still being fixed for 1.28)</td><td></td></tr>
<tr><td>Ideas card for bought hardware</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Gigs spending section removed, opaque How it works, top bar see-through fix, medicine &quot;1 days ago&quot;, daily agenda cleanup, pet care rises when overdue, Move to top, bigger sports balls</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Ollama helpers yield while the family uses the AI</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Spoken alerts with no screen open, shared speak path, local AI alert wording, surprise reveal sharing, learned shopping pairs, camera picture queue (Suggested by Claude)</td><td></td></tr>
<tr><td>Backlog cleanup and merge driver</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 26 2026: Version 1.28 (BUILD .293). Bookshelf: one family library on the Kids page with covers, per-person shelves and e-book provider links</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home swipe left turns a card off for good, with Undo</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Kids reward store with grown-up approval, streaks and badges, chore rotation and first-come pool, screen-time card (Suggested by Claude, juju35)</td><td><a class="src src-g" href="https://github.com/ccpk1/ChoreOps" title="ccpk1/ChoreOps on GitHub">GitHub · ChoreOps</a><a class="src src-g" href="https://github.com/JVarhol/HA-Family-Hub" title="JVarhol/HA-Family-Hub on GitHub">GitHub · HA-Family-Hub</a></td></tr>
<tr><td>Rain in the next 60 minutes, weather on calendar days, event directions in Maps or Waze, sleep timer, listening recap, guest jukebox, per-person calendar columns, private calendars as busy blocks, radar layers, power flow, per-appliance cost, battery fleet, QR/NFC maintenance labels, warranty ending, recall check, camera event filters, mail picture strip, floor plan, fridge door drift, plant thirst, car service from mileage, fever night summary, sleep-friendly night mode (Suggested by Claude, GitHub crawl). Google sync phases 0-1 still being built</td><td></td></tr>
<tr><td>Nov 26 2026: Version 1.29 (BUILD .294). Camera wall with one big picture and a 24-hour person and vehicle timeline with visitor pictures</td><td><a class="src src-g" href="https://github.com/deekay2153/ultimate-hikvision-nvr-card" title="deekay2153/ultimate-hikvision-nvr-card on GitHub">GitHub · ultimate-hikvision-nvr-card</a></td></tr>
<tr><td>PTZ joystick with tap-to-aim and a vacuum map with tap-a-room cleaning</td><td></td></tr>
<tr><td>Old-device lite mode</td><td><a class="src src-g" href="https://github.com/myB0B/HA-SlimDash" title="myB0B/HA-SlimDash on GitHub">GitHub · HA-SlimDash</a></td></tr>
<tr><td>This year versus last year for weather and power, CSV export of any sensor history</td><td><a class="src src-g" href="https://github.com/bertel2020/HA-Apps" title="bertel2020/HA-Apps on GitHub">GitHub · HA-Apps</a></td></tr>
<tr><td>Left before next paycheck, budgets and debt payoff on Finance</td><td><a class="src src-g" href="https://github.com/moeckjeremy/ledger-home-finance" title="moeckjeremy/ledger-home-finance on GitHub">GitHub · ledger-home-finance</a></td></tr>
<tr><td>Run it now or wait energy line and a month view on the Up next card</td><td><a class="src src-g" href="https://github.com/murre87/energywizard" title="murre87/energywizard on GitHub">GitHub · energywizard</a><a class="src src-g" href="https://github.com/alexpfau/calendar-card-pro" title="alexpfau/calendar-card-pro on GitHub">GitHub · calendar-card-pro</a></td></tr>
<tr><td>Cards redraw in place on every page (all Suggested by Claude)</td><td></td></tr>
<tr><td>Touch check fixes</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 26 2026: Version 1.30 (BUILD .295), docs-publish and deep-polish build. Two-way Google sync phases 0-1: per-person and household calendar and list settings, shared Family calendar pickup, audit and round-trip tools</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>&quot;Make the list for you&quot; on Chores and Shopping</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Full 4-part code review: 23 bugs fixed (wall-screen privacy leaks in AI summaries, the busy-clash suggestion, the camera timeline, kid schedule and car value; family inbox lost mail; double taps; screen-time limit; plurals and &quot;ago&quot; wording) plus 10 review follow-ups (Everyone home counts only people who share, no hardcoded PC name, list cards say when a list could not load, family inbox grown-ups only, medicine dose not logged twice, first-come chore credit, garage warning once, reward approve gated, weekend plan keeps private titles out)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Card packer about twice as fast on phones, hardening sweep</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs pass: one New in 1.27 to 1.30 section, What's new fixed, page entries for 1.28-1.29 features</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 26 2026: Version 1.31 (BUILD .296). 20 GitHub-crawl ideas (all Suggested by Claude, each credited): Right now snooze and daily quiet windows (button only), speaker timers and alarms on Home, a note for the wall screen, wall screen remote controls</td><td></td></tr>
<tr><td>Next visible ISS pass with a where-to-look chart, plane watch list with quiet hours and photo, weather now marker, indoor comfort and mould-risk score</td><td></td></tr>
<tr><td>Cook mode step timers and swipes, pantry running-low with optional auto-add and Undo, appliance time left and finish time, compost and custom pickup days</td><td></td></tr>
<tr><td>Calendar day badges and saved views, bills checklist with who pays, room presence (opt-in), guest Wi-Fi voucher</td><td></td></tr>
<tr><td>Plant care limits and badges, pet meals today, Parcel app sensors in Packages, automation ideas on System. The private Finance bills Home row is renamed &quot;My bills due&quot;</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 26 2026: Version 1.32 (BUILD .297). Top bar Undo button now the same size as every other bar button, new rule: all toolbar buttons the same size</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Typing in Jot it down (or any text box) can no longer trigger the &quot;this would remove saved entries&quot; warning, and nothing is written while you type</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Five Anthropic Claude Code skills added to the project's own skills with credits (webapp-testing, frontend-design, accessibility-review, design-critique, ux-copy; Human)</td><td></td></tr>
<tr><td>Household and private bills linked by name so a bill shows once on Home and Mark paid ticks both</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 26 2026: Version 1.33 (BUILD .298). One Import button on Packages' &quot;Found in your email&quot;</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Watch and phone battery picks only a real 0-100 % sensor</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Agents card is a table with Active now and Done today bars</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Hardware cards compact under the new rule</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>The Jot it down list clears filed ideas by itself, only from an admin screen, never deleting</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Medicine logs kept 14 days</td><td><span class="src src-h">Human</span></td></tr>
</tbody></table>

## Versions 1.15 to 1.26

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Nov 25 2026: Version 1.26 (BUILD .291): live activity strip in the Home banner, Tonight's plan, Heads-up on the week</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Energy outlook, why the power bill was up, Ask AI knows the house</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Shopping nudge, no dinner planned use these first, spoken urgent alerts</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Why is that alert on, sitter brief, surprise planner</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Camera alert zones, which package is that, while you were out, who is at the door in words</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Adaptive lighting, tomorrow's trips vs the charge, why the drive is slow, news that touches the house</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Phone alert digest, quiet-day recap, gift shop finder, home jobs from a sticky note, stock car photo</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>When-this-do-that builder with reviewable automation drafts</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 25 2026: Version 1.25 (BUILD .290), a docs-publish build: Needs attention card and Household modes</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Everyone home / last one out and Announce</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Storm prep list and Water running at night</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Private cards: my to-dos, private reminders, wish list, gift dates and sizes, gift deadlines</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Scene suggestions, light tint, raised cards feed Right now, sticky notes become chores, trash Done on the Family Board, Space data age on the TV</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Slow internet explained, litter box pattern, deadlines from email, repeat dinner with a swap, Ollama warm-up</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Door, lock and sensor history, locks by person with guest code, Sunday chores balance</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Tombstone cleanup, wall user calm page, sticky paper follows the Look</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Wall screen can save scene counts and the trash streak (needs the HA wall-save update)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs: changelog cleaned (no duplicates, no internal paths), page links fixed</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Nov 25 2026: Jot import filed 25 ideas (all with idea ids; 2 pairs merged; marker &quot;IMPORT NOW&quot; handled)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Printer controls on the Printer card, Print reports card, low supply to shopping list</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nov 25 2026: Hardware cards share one layout (hwdCard): status dot, one row of numbers with bars, Details fold, calm not-reporting line</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Table fixes and tablecheck, plain-list contents, previous/next links on every docs page, Home Assistant OS and free-to-run section</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nov 25 2026: Version 1.23 (BUILD .288): card drag and Wider/Narrower resize saved per person</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Title-bar loading wheels</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Combined cards round 3 (Health, Home upkeep, Daily routine)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>One phone alert per security event</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Location share only by its owner</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Package dedupe , delivery-check fixes and USPS email fallback</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Shorter welcome tour and lighter defaults</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Banner chips , sticky countdown, Take a photo opens the camera, Cast fix and castcheck</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Right now side-by-side heights on pages</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Text-only AI to a local text model</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Screens always reach the latest build</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Document import review flow (Location + Room, lunch menu calendar, marker confirm, pack-a-lunch reminders; reading the menu and agenda photos continues in 1.24)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Wall screens drop the finance cache</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>About and Backlog on Smart layout</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>A gone card closes its gap once</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs tables, contents list, prev/next links and Home Assistant OS intro</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Private cards: My to-dos, Private reminders, My wish list, Gift dates and sizes, Gift deadlines on the calendar</td><td></td></tr>
<tr><td>Tombstone drop gated on loads finished plus dropped count in Saved data</td><td></td></tr>
<tr><td>Wall user calm limits (1 Right now, 3 cards)</td><td></td></tr>
<tr><td>Sticky paper follows the Look (Paper, Glass, Bold)</td><td></td></tr>
<tr><td>Recent activity per door, lock and sensor, Locks: who and how with Guest code via, Chores balance on Sunday (local AI only, plain fallback)</td><td></td></tr>
<tr><td>Nov 25 2026: Version 1.24 (BUILD .289): document import reads photos reliably (shrink, rotate, marker check) with Location + Room fields and a per-kid Daily agenda card</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>100% CPU alarm card for every computer</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Card drag/resize saved per person, Wider/Narrower</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Calm-layout fixes on Family, System, Hardware, Utilities, Design Studio</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Performance: observer merge, timer fix, off-screen animation pause</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Claude suggestions card and per-build suggestion pass</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Workout and Documents read each person's own copy</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Nine settings never fall back to defaults</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Home Right now side-by-side heights</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Companion app phone cards on Hardware</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Now playing speakers, queue, favorites and radio</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Wall picture-frame privacy mode</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Banner layers, Now playing Stop sends stop, kid medicine to shopping list</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Planned versions on the Backlog page, docs say where AI decides</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Camera sound and phone camera alerts ready for HA</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>GitHub credits on About and a docs Credits page</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Peak tasks stat on About and docs</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Gesture and print checks</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Changelog marks Human or Claude</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs Listen mode and forks page</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Let the app place this card</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs page Forks and models, autopilot fork packaged in with push steps, AI review pass with 7 new suggestions, per-build review rule. Committed Nov 25</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>&quot;Show aisles&quot; view choice saved per person in HA (synced prefs) instead of only in this browser</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Datacheck FAIL cleared. Committed Nov 25</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>The combined-card groups that missed 1.21 (Weather, Deliveries, Family today, Pets, Car) , review fixes (printer controls need two taps and are hidden on wall screens, Send to printer only to notify/script actions, the loading wheel only on real placeholders, clearing the last package saves properly, card order version) , the Scale button works on every page, the weather card starts collapsed off the banner , car fixes (stable ids, adding waits for load) , phone banner strip above the house art for the notes button and holiday chip, shopping list sorted by store department, hobbies project file monitor, sticky notes no longer duplicate, data package history, Black-owned and other businesses card with a kinds picker , Arriving today packages card</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Printers (Add a printer for any printer type, printer controls, Print reports card, low toner to the shopping list) , deleted items stay deleted across screens (about 25 lists, cleaned up after 90 days; packages and autoship now versioned) , loading wheels everywhere with Retry after a timeout, drag cards with the mouse and set a card width, combined cards on Home (House status, Plans and food; the Weather, Deliveries, Family today, Pets and Car groups were left out of 1.21 by mistake and ship in 1.22) , one layout for every Hardware card , Phones and laptops battery card, leftovers trash button with history, cards and pages ordered by use with a Raised for you mark , wall screen calm self-check, scroll health line on System , print buttons on more pages , one camera alerts card</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>The top-bar Scale button opens the Interface scale sheet on the page you are on, on phones too</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>The weather card outside the Home banner always loads collapsed and keeps a person's own open choice</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Printers (Add a printer for any printer type, printer controls, Print reports card, low toner to the shopping list) , deleted items stay deleted across screens (about 25 lists, cleaned up after 90 days; packages and autoship now versioned) , loading wheels everywhere with Retry after a timeout, drag cards with the mouse and set a card width , combined cards on Home (House status, Plans and food, Weather, Deliveries, Family today, Pets, Car) , one layout for every Hardware card , Phones and laptops battery card, leftovers trash button with history, cards and pages ordered by use with a Raised for you mark , wall screen calm self-check, scroll health line on System , print buttons on more pages , one camera alerts card</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Version 1.20 (BUILD .285), the polish release: calm layout (banner full width from the first frame, cards placed before they show, no cards moving on their own; re-layout at most every 5 minutes and never on screen), sticky notes as a banner button, banner never stretches tall , smoother phone scrolling , tighter cards, top-bar badge under tablet width, game-day balloons</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>A full code review (about 60 fixes: data that could be lost, crashes on bad saved data, unsafe links, privacy on wall and kid screens), dead-button sweep (no dead controls found) , Move mode Cancel button, empty-Add hints , Display wake lock fix</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs and pictures updated</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Cards no longer stack on top of each other on a phone, the page stays put while cards change size , Smart layout on by default (per-screen off switch), wall screen user (private and grown-ups cards hidden on a marked login), Right now Done hides a row on every screen with Undo and syncs to the car, sticky notes as a yellow paper Home card, businesses card picks home needs with AI and offers a one-tap search, kinds of business to support, Ask AI lists claude.ai only when cloud AI is allowed , GoatCounter ready for a site code , contrast fixes , 2.0 prep (home network address out of the tools, finance link only in settings, licence draft)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Readable colours on the card 3-dot icon and the menu SOON badge , Finance tags , the Print monitor icon and the Wellbeing breathing text</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Commute history card no longer stretches</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Checks cover every page and width</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Smart layout trial on every page with a Right now box (one canvas, section chips, moves into another section stick, use order weighs placement) , smoother phone scrolling (background work waits out a whole swipe series) , signing back in on a tablet brings back your own settings and switches the look at once, house trees stay on the banner and the photo reader asks one or two trees , house decor sway off on phones</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Ask AI card (local AI first, model drop-down, answers in the card), My gift ideas card (private to your own account), light buttons show the live colour, Space page loads again (fallback sources, keeps last data, retries), one Closest card on Planes, plain HASS.Agent steps on Hardware, add a card on Home and the Family Board plus 6 more addable cards, pages rise by use too, house picture links and live touches, businesses card local AI words , sign-in switch keeps each person's settings apart , Design Studio AI usage refreshes itself and lists every model, idle agents hide after 5 minutes, org chart shows the standard teams , docs visit row , kitchen display switch instant , wording fixes , check tools fixed</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Smart layout trial on Family and System (one canvas), cards rise by use with a Raised for you mark , add or remove a card on any page (Home and Family Board too) , Black-owned businesses card (local AI words), sticky notes edit in place and phone reminders , trash Done by , house picture links and live touches (mailbox glow, garage open, solar shimmer), Family scroll freeze fixed at the packer , contrast fixes (Display chip strip, card menus on phones, weather, nursery) , kitchen display switch instant , room words fixed , docs for 1.12-1.15 with all pictures retaken, Claude Max month in the costs</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Most tasks at once stat: (sampled by ai-usage panel, PEAK RECORD log line when broken), About page line and docs banner tile</td><td></td></tr>
<tr><td>Live activity strip on Home (laundry, dishwasher, oven, car charging, timers; reserved fixed-height slot, never moves cards), Tonight's plan (4 to 6 PM, local AI with rule-based fallback), Heads-up on the week (Sunday 5 to 9 PM, top 3 things, private)</td><td></td></tr>
<tr><td>Adaptive lighting (daylight colour-temperature curve, per-room switch in Room settings, ready automation)</td><td></td></tr>
<tr><td>Tomorrow's trips vs the charge (Home and Garage, after 6 PM)</td><td></td></tr>
<tr><td>Why the drive is slow (one reason on the commute line and trip card, local AI picks a headline, plain fallback)</td><td></td></tr>
<tr><td>News that touches the house (Home card, local AI sorts headlines, plain keyword fallback). Source: Suggested by Claude</td><td></td></tr>
<tr><td>Live activity strip on Home (laundry, dishwasher, oven, car charging, timers; first built as a reserved slot), Tonight's plan (4 to 6 PM, local AI with rule-based fallback), Heads-up on the week (Sunday 5 to 9 PM, top 3 things, private)</td><td></td></tr>
<tr><td>Live activity strip redesigned to sit over the bottom-right of the Home banner (inside its height, no blank gap, sticky notes avoid it)</td><td></td></tr>
<tr><td>Gift shop finder (shop kind on a gift, Find a shop uses the businesses search)</td><td></td></tr>
<tr><td>Sticky paper follows the Look (Paper, Glass, Bold)</td><td></td></tr>
</tbody></table>

## Versions 0.260 to 1.14

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Hardware page matches HASS.Agent sensors with a setup guide for PCs with none, Pi card text wraps, live games window, TV plane map beside the radar, sticky notes on Home , related settings in card menus , camera-first picture picker , baby monitor card, Import a document only on Calendar and Family, admin Visits card, Throttle the Model card, bedroom TV cast fixes, icons readable on and off , empty-state icons readable</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Card options open under their own 3-dot everywhere (optioncheck) , What's new fits any screen , cast strip uses the Home chips, cat medicine copies update together , trash Done button , wishlist links survive the name filter , Packages text in full, &quot;N Open in B/L&quot; , agent activity keeps refreshing on throttled devices , Family patches only changed sections, TV view at phone width , card headers 48 px , contrast and tap fixes on every page , System/Packages/Hobbies cards movable</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Hardware page shows one card per PC running HASS.Agent (found automatically, Add another PC how-to) , Home idle CPU cut by two thirds, smoother phone scrolling , banner clock matches the top bar, phone top bar keeps the clock in view, chip strip fades at its edges , demo sports card, Kids and hobby chips show their state, Kids card loads on Settings , fewer repeat AI summary calls , Buy me a coffee on the About page , all docs pictures retaken without maintainer chips, device check tuned</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Camera sound over WebRTC first, camera-model training wizard (past footage, snapshot collector) , per-kind phone alerts per camera , map garage label , more house picture options and the photo reader filling them, demo built from the screenshot data , scroll-safe page timers , map markers spread apart , faster device lookups , Family card on the column grid , savecheck and loadcheck warnings nearly cleared, How it works audit (18 fixes) , HA camera alerts automation (off until switched on) and vision switches</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Camera control bar with tap-for-sound and Talk , every vision alert on one screen with camera detections grouped on Home , Camera models (setup, lighting checklist, hold time, Frigate steps), cards in wrappers move again , Security page folded into Activity , one Agents card plus an org chart, a Kids list in Settings, hobby owners and spending , wording check clean on every page , docs keep one version everywhere. Tools: overlapcheck skips closed sections, scrollcheck closes its browsers</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Rule: learn which models get stuck on which work and adjust teams over time (rules/teams.md &quot;Learn and adjust&quot;, notes in)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Bigger banner clock with the info chip stacked under it , top bar text tightens before it scrolls , About page facts generated at build time (109 Home cards, 306 cards, checks, models) , Design Studio status from one live model , docs written from the app , first-screen check (Commute chart no longer mostly empty) , a 44 px move handle and a new card-move check , check runs stop at 5 minutes</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Top bar, Agents card, Live agents and Claude usage agree on the count, team leads show as their own tiles, and stale data says &quot;no update since X&quot; instead of 0 or idle. (Team AK)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Version 1.8: honest Claude status, instant toggles everywhere , More sheet search and recent pages, one Settings home with five sections, a maintainer tools switch , Design Studio in one flow , Right now cards in one box, a banner clock , flight restrictions on the plane map and popup with a phone compass arrow , a demo-visit phone alert, a notifications list , an insurance list with room and spot, Lives here on room pages, house style from the photo import, cars drawn in their real colour , one How it works for every card , the TV camera-wall screen, and pets that land their jumps. (BUILD .273)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Honest Claude status in the top bar (counts every running helper, tap to list them), Live agents card hides agents idle 30+ min, backlog count refreshes every minute and on return, bug button focuses the Jot it down box, and a live toast plus phone push when someone opens the demo (at most one per 10 min, switch in Settings, Alerts). (version 1.8)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Planes: TFR zones on the map show their type and state on hover or tap</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>The plane popup and card say when a plane is inside or within 3 nm of an active restriction</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>On phones a live compass arrow points at the plane (fixed-bearing fallback, iPhone permission button). (version 1.8)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Phone banner chips a little smaller so the house shows more. (BUILD .271)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Phone and tablet page bar slides through every page (Frequent first, colour-tinted groups), card text grows to fill each card, two-line banner chips, the house editor gains mailbox, driveway, fence, shutters, garage door and lights choices, the phone banner shows the whole house. (BUILD .270)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Banner art reaches every edge (no grey band or hairline ring), colour-grouped side menu on desktop, Pantry and Recipes buttons no longer overlap, readable banner weather card on a day sky, an icon in the browser tab. (BUILD .269)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home banner: the chip strip sits exactly on the banner's bottom edge and just under the horizon at every width, the mailbox stands still on the outside edge of the driveway. (BUILD .268)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Top bar rebuilt for narrow screens: tight buttons that scroll past half the bar, the backlog count in the version line, scrolling text that is never cut off</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card header links clear of the ⋯ button with a mouse. (BUILD .267)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>One version number everywhere: major before the decimal point, build after it (this is 1.1; builds before 1.0 are 0.xxx)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs lead with the version</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>About page pictures added to the Diagrams docs page. (BUILD .266)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Set-up cards fold into one &quot;More to set up&quot; card, the quiet-rows fold is remembered, the menu is grouped into sections, readable weather hour labels, Fire safety cards full width on the Family Board, readable NEW badge. (BUILD .265)</td><td></td></tr>
<tr><td>Nashboard 1.0. Version label in About, docs site published with the 1.0 page, GitHub release v1.0 with the coffee link (preview: downloads open later). (BUILD .264)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Ask Claude opens only a new tab (no error page), plane cards as a list under the map on phones, readable weather text on day and cloudy skies, Planes status text and icons in light mode. (BUILD .263)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Final 1.0 polish: Right now shows only live , real rows (quiet ones fold into one line, set-up cards move below) , every Home card ranked, honest chips, card notices only for urgent cards on wall screens , Today at a glance under the banner , set-up pages stay out of the menu until set up , Getting started checklist, Kids page grown-ups lock , solid phone tab bar, easier-to-read text and bigger tap targets</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs site restyled like the app with Getting started , FAQ and a car app preview</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Backups now kept per account. (BUILD .262)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
<tr><td>Privacy before 1.0: no seed or car-art files in the public folder, names filtered out of the published backlog, neutral picture file names, guest mode without commute, local-AI-only gate on every AI feature (AI privacy card), Who is on without pages, no hardcoded household values</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Developer tools (bug button, backlog count, Claude card) admin-only and out of the family view. (BUILD .261)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Release candidate 1.0: TV view with compact weather and radar , banner colours and leaves in front, same-size buttons everywhere (sizecheck), 44 px tap targets on every page (tapcheck), contrast check, camera sound , Garage on shared storage places , bug button always on screen , Family Board document import, Amazon status updates, crisp About diagrams, smooth Home scrolling, longest idle agent, dishwasher seconds. (BUILD .260)</td><td><span class="src src-h">Human</span><span class="src src-c">Claude</span></td></tr>
</tbody></table>

## Before 1.0 · Versions 0.227 to 0.259

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Hotfix: Refresh button the same size as the other top bar buttons. (BUILD .259)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Import now request handled</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Data store phase 2: all saved data through one safe-save helper (no empty-over-real, merge with the freshest copy, versioned, photo-free inventory backup)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Sports preferences load for the first time</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Bedtime library Listen mode</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>House shape from a photo</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>NFC tag map</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Device setup ticks saved in HA</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>System overlap fix</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Speed fixes for hidden tabs. Parallel quality checks. (BUILD .258)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Every page packs with no holes (flowcheck passes everywhere)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Claude needs-you banner on every screen + phone push when Claude waits on an Allow prompt. (BUILD .257)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Bug button focuses the Jot box on mobile</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Doorbell person matching widened, debug guide written ( check HA entities). (BUILD .256)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Markets refresh about once a minute</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot box pastes pictures</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Touch scrolling smoothed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Real car photos</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>YouTube counts as playing on TVs</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Wishlist Purchased fixed. (BUILD .256)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home order model with Lower priority, prettier cards first, full-screen card notice, Today at a glance AI summary, New marks, kid's colour, oven / window / nursery sensors, Sitter page, Guest mode and guest traffic. (BUILD .256)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Laundry, pool, Energy and Bills Labs page, leak sensors, UPS, printer, garage door, smoker, smart plugs, earbuds and internet provider cards. (BUILD .256)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Frigate package, doorbell and closings cards, video states and mail truck, camera alert settings, cast timeout countdown, TV leveler, wall display (wake on approach, Nest Hub kitchen view). (BUILD .256)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>AI suggestions card, Family inbox, toolbox photo import and picture, bedtime library, house photo colour fallback. (BUILD .256)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Native Android Auto app scaffold (android-auto/), not yet built or tested in a car. (BUILD .256)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Data store phase 2a helper (dsx) and key inventory</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nothing converted yet. (BUILD .256)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Import now request handled</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot box jumping already fixed in .255</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot box stays put (no jumping, touch scroll works while focused)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Pantry and other grids use the shared gap</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>System cards fill the row</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>About has one full-width Roll credits card, all cards open</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Room chips filter or jump. (BUILD .255)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Terminal tiles back (idle tiles stay), open backlog count in the top bar, new builds reach every screen within a minute, nav stays put on hover, trivia tidbits removed, pets keep playing while scrolling. (BUILD .254)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs published at build .253: factual architecture intro, autopilot panel, stuck watcher, live status</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs refresh every build ending in 0 from .260</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Equal vertical gaps (Home fix + new gapcheck vertical test)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Filed ideas leave the Jot card within a minute of filing. (BUILD .253)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio packs: Live agents in the Right now row, short Agents bars</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Gapcheck catches lone cards and stretched Right now cards. (BUILD .252)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Marquee always scrolls</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Photo note clears on submit</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Filed ideas leave the Jot card</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nashboard title colour restored</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Add button first in Tab order</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Page icons beside titles. (BUILD .251)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>One Right now container per page: Design Studio's two sections merged</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>New rightnowcheck quality check. (BUILD .250)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Dishwasher card: type time left, see the end time, Clean/Dirty flip sign. (BUILD .250)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Agents card counts only agents active in the last 5 minutes. (BUILD .236)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Blocked work items clear themselves once the agent moves on. (BUILD .236)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home &quot;Recently used&quot; card for cards used in the last 4 hours. (BUILD .236)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Live-game ball on Sports, drawn car with drive-in from its VIN, two Easter eggs. (BUILD .236)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Small-tile rows (rooms, devices, cameras, Home Now playing) fill the width first. (BUILD .236)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card spec for AI-generated cards (rules/card-spec.md). (BUILD .236)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pantry &amp; Fridge offers only food places (pantry, fridge, freezer). (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio Live agents: terminal tiles per agent, grouped. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home cards ordered by one priority score with reason chips</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Urgent cards stay expanded. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Gig night card on Home on a gig day. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Interface scale: cards, columns and text re-pack instead of zooming. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>How this works in every card menu (31 cards written). (BUILD .234)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Full-window announcement of what is new, once per build per device. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>TV display: more rows per card, smaller type, 3 columns. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Drag to reorder cards on any page (Move in the card menu), saved for everyone. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Page intro lines under every page title (Hide intros switch). (BUILD .234)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Public change log now also filters pet and child names. (BUILD .234)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Agents card: main chat pinned (Working/Idle), then Free and Paid tallies with job bars. (BUILD .233)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs site banner shows the build number. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Missing icons added (music, user, image). (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Calendar zoom to fit sizes rows correctly in Full window. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Barcode scan button on shopping, pantry and storage add forms (camera, photo or typed; Open Food Facts lookup). (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Car cards cross-posted to the Garage page. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Right now cards reviewed: Claude card only while working and says what</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Idle placeholders gone. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Leftovers tracker on Pantry &amp; Fridge with a Home &quot;Eat this first&quot; card. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Collapsed card summaries: real keys checked, Weather, Air, UV, Commute, Cameras and Calendar added. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Wall calendar: big Add event / Add to list buttons with mic. (BUILD .233)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Now playing card on room dashboards while something in that room plays. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Kids' cards in any bedroom with a child set in Room settings. (BUILD .233)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Agents card: every agent in the count gets a bar (status posts count as jobs). (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Top bar top-left corner back to its earlier look. (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot it down: trash button clears the entry, with Undo. (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Now playing gets a turntable icon. (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Gig suggestions on Home say &quot;Gig&quot; and show the be-there-by (setup) time. (BUILD .232)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Collapsed cards show a one-line summary in the header (weather, Litter-Robot, packages, next event, trash night). (BUILD .232)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Cards keep their column when one collapses or expands (no jumping). (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pets never vanish or flicker on re-render or page change</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Exits fade. (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home chips moved from over the house into a scrolling marquee below it. (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Display scale control in Full window</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Calendar keeps its scroll position after zoom to fit. (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Wishlist &quot;bought&quot; requests match Purchased rows by ASIN or name (app and read-ideas). (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Now playing shows the channel and artwork for YouTube-style players (root cause still open). (BUILD .232)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio Agents card: one &quot;Helpers ×N&quot; row</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Job bars split free vs paid with a legend. (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Right now strip fills the full width first</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Few cards stretch to fill the row. (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Quiet hours also mute a TV/display whose cast entity is in that room's area. (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Full window icon flips on every radar (Home copy too). (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tap targets: chips and switches get invisible 44 px touch areas. (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Band card becomes Gigs: start, setup (2 h before), show length, breakdown (1 h after), timeline, import from event link. (BUILD .231)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Home Claude card split into Ask Claude (everyone) and Claude admin. (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>System page &quot;Who's on&quot; card (live screens and people, last minute). (BUILD .231)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Cards restack when one is hidden or dismissed (no gaps left). (BUILD .230)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tap targets: top bar buttons, tile menus and card header buttons now 44 px (chips and switches next). (BUILD .230)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home Rain radar gets the Full window button. (BUILD .230)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>NFC sheet &quot;Copy add-item link&quot;</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>About card shows the pieces count. (BUILD .230)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Frigate camera entities left out of camera lists</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>A camera without a snapshot yet no longer shows Offline. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Lines of code and pieces computed at build time (About card and market value tidbit). (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Agents card with status lights and job bars. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Top bar switches to two rows on any device when it does not fit. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Auto look follows the season (Glass, Paper, Classic, Bold). (BUILD .229)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Home card when the Deck battery is under 20% and not charging (smart plug part still open). (BUILD .229)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>NFC tag link with ?add=1 opens the box with Add item focused. (BUILD .229)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs/why-nashboard.md. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs/themes.md. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs/diagrams.md (two Mermaid diagrams with legends). (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs/developer-tools.md. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs/design-engine.md. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Duplicates, daily chores and trash entries hidden with a &quot;+N routine items hidden&quot; note. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Growing text box, newest first, photo thumbnails, Edit button, no limit. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>&quot;How this works&quot; on every hobby card. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Next 3 typical milestones per car from its mileage</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Feeds Car due soon within 500 mi. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pantry &amp; Fridge gets its own fridge icon everywhere</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Room page sofa. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>A Rain radar card appears at the top of Home while rain is coming or falling. (BUILD .229)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tap-target audit tool (BUILD .229)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Home Claude card gets an accent outline and moves to the top while Claude is working. (BUILD .228)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>About page &quot;Provided by Home Assistant&quot; card with Core, OS and Supervisor versions</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>About button tooltip names it. (BUILD .228)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tapping a Right now row scrolls to the matching card and outlines it. (BUILD .228)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Top bar reads &quot;N agents · building&quot; during deploys. (BUILD .228)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio Right now strip with credits left and 5-hour / weekly bars. (BUILD .228)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>AI market watchdog + &quot;New free AI options&quot; card with Add to Jot it down (BUILD .227)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Rule: tap targets 48 px</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Autopilot panel switches enlarged. Stuck check tool</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>BUILD .237: Ask Claude card under the banner (admin card anchors only while working)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Holiday and weather effects pass behind the house (housecheck)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Holiday leaves/clovers/hearts placement fixed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs screenshots hide the admin card</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs release .235 published: every page refreshed, text diagrams rebuilt as SVG, holiday looks grid, new screenshots (no admin card)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .238: top bar buttons scroll again instead of squeezing (invisible tap areas)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>6 Jot ideas filed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .239: How this works text on 93 more cards</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Edit setup on Holiday traditions</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog card hides checked-in ideas</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>YouTube now playing fix</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card jump re-check passes</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>What's new block on the docs home</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .240: tapping a line in Good morning and other summary cards opens the real card</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Car animations get body-type shapes</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Space page screenshot shows real-looking sky and launch data</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .241: household cars drawn to look like the real models, saved with each car</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>New car imports get their own drawing once</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .242: third car drawn from its real shape</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Real paint colours</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Colour picker after a car import and Edit colour on each car</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .243: generic by default: room extras (nursery, kids art, bedtime, house windows), commute places and trips, local news area, minor-league team and team suggestions are now settings any household can fill in</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nothing personal is left in the code</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>New genericcheck quality check</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .244: new Security page with a saved alert history</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Fire safety (alarm card, escape plan, detector reminders, fire drill)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Valuables list for insurance</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Place picker by kind and pantry items in storage search</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .245: Claude icon and build number on phones too</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Compact Jot it down that moves up to a full-width card while typing</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Roll up the car windows alert when rain is coming where the car is</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .246: Security modes (Away, Home, Night, Off) with alert choices, phone alerts and quiet hours</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Change log days collapse</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Next up card shows the next 10 backlog items</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .247: chips marquee docked inside the house banner</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Agents card and Claude light show agents running now</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Touch drag and drop on lists and meals</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Local traffic card on the Guest page</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Animations pause in hidden tabs</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BUILD .248: card buttons never sit under the 3-dot button (new overlap check)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Fastest plane always on the Planes map</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Jot it down shows the next import time</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Camera order drag and drop</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Self-restarting stuck watcher</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>BUILD .249: Markets card shades gains and losses and shows top watchlist movers</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Urgent phone alerts now arrive with the screen off (high priority, no expiry)</td><td><span class="src src-h">Human</span></td></tr>
</tbody></table>

## Before 1.0 · Versions 0.205 to 0.222

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Kids page pickup time (BUILD .221)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>HA restarted twice: fixed the YAML that blocked restarts, all automations/timers/car items loaded, reload trigger and Claude usage sensors now read from disk</td><td></td></tr>
<tr><td>Automatic YAML reload confirmed (20 s)</td><td></td></tr>
<tr><td>Claude status in the top bar, idle and waiting states (BUILD .220)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Flight board styles moved to their own slice, no visual change (BUILD .219)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Settings page, Your house editor, work-started alerts (BUILD .218)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Claude cost totals and Ask Claude on the Home Claude card (BUILD .217)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Collapsed cards remembered per person, collapse on pet and Pi cards, Updated dots on page icons (BUILD .216)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Kids bedtime story, gift masking in the email panel, styles split (BUILD .215)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Shared storage places, band members, Garage load fix</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs: how it's built and dark mode (BUILD .214)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Looks (Paper, Glass, Bold), pantry dates and missing ingredients, packages from email with hidden gifts, Storage NFC tags (BUILD .213)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Band name on Hobbies, theme button says what Auto follows (BUILD .212)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design looks (Classic, Paper, Glass, Bold), NFC tags on storage boxes and garage drawers, packages added from email with gifts hidden, pantry sell-by/use-by and missing ingredients for dinner</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot import: 4 ideas filed (BUILD .211)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Checked-out items on top of the Backlog card</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Name-clash fixes (Google Tasks, work status, Workout)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Namecheck tool (BUILD .210)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Pet drawings: second colour and calico (BUILD .209)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Crypto 24/7 on Finance, About credit line (BUILD .208)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Document import, featured posts, start page and kid lock, favorites posters and play on TV, intercom transcripts, pet photo matching, invite with HTML email, hobbies import and suggestions, finance shares, legends check, live work status, type scale, docs tour (BUILD .207)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot import: featured post card filed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Kids page, pantry use-by suggestions, Garage tool storage, map zoom check, Storage here count fix (BUILD .206)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Swipe between pages on phones, Planes map zoom fixes (tile seams, blank past zoom 16), trail entries in the map legend (BUILD .205)</td><td><span class="src src-h">Human</span></td></tr>
</tbody></table>

## Before 1.0 · Versions 0.110 to 0.204

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Each TV gets its own TV-dashboard view (survives reloads), legend on the Map path (BUILD .204)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>New build chime, wishlist links show at once with a Pending tag, legends on the Planes map and Bitcoin chart (BUILD .203)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Central data store phase 1 (merge, shrink guard, history + Undo, nightly export), System → Saved data card, ISS legend on Space and Home, banner bubble lag and Thanksgiving pennants fixed (BUILD .202)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Jot import: house decorations bug, ISS legend, legends rule, new-build chime, pending wishlist links, purchased-hardware ideas, Kids page, TV volume leveler filed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Wishlist link saved</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pets on the GUI instead of the house picture (BUILD .201)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Data retention: datacheck tool, person data synced per user, settings-sync migration, load-first guard</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Manual link opens the docs home (BUILD .200)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Jot import: kitchen counter Nest Hub filed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Ignored-suggestions archive, medicine running low, leaving-the-house check, kitchen timers, out-the-door checklist (BUILD .199)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Bigger batches: 5-10 items per build</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tap the banner to see why (BUILD .198)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Storage here on room pages, NEW-tag release switch, docs stats header and change log (BUILD .197)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tasks on the TV view, cat medicine bottle expiry, pet walking bug closed (BUILD .196)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Show done fix, About last + i button + scrolling top bar, user manual link for everyone (BUILD .195)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Kitchen tablet mode and kitchen cards on the Kitchen room page</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs refreshed (BUILD .194)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Medicine sync safety fix, code review fixes, pet walk/run poses (BUILD .193)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Kitchen display preset, package-outside phone alert, pet play on the Pets page (BUILD .192)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Leave-by time in the morning briefing, dinner pickup prompt, automation templates, pet name on tap (BUILD .191)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>More holiday looks and birthdays, medicine per child, car dates (BUILD .190)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Storage QR labels and low counts, every card on its page, cat medicine by NFC (BUILD .189)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tap card headers to collapse, refresh resets cards, banner windows map, fit text, pet extras, morning briefing read aloud (BUILD .188)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>About page, Automations page, Google Tasks (BUILD .187)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Every area listed on Rooms (BUILD .186)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Type scale, cast per TV, room settings and cards (BUILD .185)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Workout page, holiday decorations on the house, pets that play around the app (BUILD .184)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Activity page, package left outside, carry-out orders, kids' activity ideas (BUILD .183)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Storage page, Hobbies page, Home settings card (BUILD .182)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Handedness, device setup checklist, longer welcome tour, birthday reminder, pet tidbits (BUILD .181)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Gas price phone alerts (BUILD .180)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Doorbell card in every room, gas price alerts, medicine doses on buttons (BUILD .179)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Stock aircraft photos for any type</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home gaps closed (BUILD .178)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Change log by build, What's new card, room icon picker, theme colours (BUILD .177)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Wishlist and backlog can't go blank (BUILD .175)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card menu fixes, light-mode readability, dark + light quality check (BUILD .174)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Box scores, wishlist Purchased, birthdays not on a calendar, Log temp (BUILD .172; first batch built with helper agents)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Code split into pieces with a build step (no change to the app)</td><td></td></tr>
<tr><td>Pantry place editor and types, Full window fits, card ⋯ menu, equal card widths + gap check (BUILD .171)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Shared settings save guard (BUILD .167)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Car notes and recall alerts, Family favorites and movie night (BUILD .166)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Import now button, intercom phone notifications, pantry container types (BUILD .165)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pet names on feeder and litter, User manual card and tour link (BUILD .164)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Rain + garage, week-ahead traditions, Hidden cards section on System (BUILD .163)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card off for everyone, low batteries card, week-ahead maintenance (BUILD .161)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Goodnight button and 11 PM check, week-ahead notification, For sale card (BUILD .160)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Single-card widths, container card layout, wishlist × (BUILD .159)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>YouTube TV channel links for Sports (BUILD .158)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Claude card shows credits and auto mode (BUILD .157)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Medicine expiring card and expired-dose warning (BUILD .156)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Autopilot button in the Design Studio (BUILD .155)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Build number on phones (BUILD .154)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog header count fixed (BUILD .153)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>One plane alert per pass</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pantry &amp; Fridge storage places (BUILD .152)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nashboard Autopilot control panel (private Claude page)</td><td></td></tr>
<tr><td>New on Wi-Fi: Unknown button and Follow up later list (BUILD .151)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Phone alerts no longer call removed devices (plane overhead repair)</td><td></td></tr>
<tr><td>Sunday week-ahead card (BUILD .149)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>NEW tag on recently added pages (BUILD .148)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Change log: one heading per day</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>N badge drawn as a centered shape so the letter sits in the middle on every phone (BUILD .147)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Wishlist refreshes on its own (BUILD .146)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Every feature and Change log cards: compact rows, no blank gaps (BUILD .145)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>UI standard: every page card grid on the shared card width (Air, Guest, Network, System, Rooms, Space, Sports, Packages, Pets) (BUILD .144)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio cards a third wide (BUILD .143)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Goodnight check card (BUILD .142)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Morning briefing card (BUILD .141)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Design Studio and Pantry on the standard columns (BUILD .140)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog sections start collapsed</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Six accepted suggestions filed (BUILD .139)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Cook mode text shrinks to fit (BUILD .138)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Suggestions in Jot it down with Accept / Ignore (BUILD .137)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Cars by VIN (BUILD .136)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Guest Watching TV card (BUILD .135)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Hide any card, bring it back from Customize menu (BUILD .134)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Planes map buttons scroll on small screens</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design rule: everything follows the standards, new things get one (BUILD .133)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design Studio and Pantry cards pack properly (BUILD .132)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Swipe to remove jotted ideas (BUILD .131)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Fastest plane details fixed (BUILD .130)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Map page grey boxes on first load fixed (BUILD .129)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Guest page weather (BUILD .128)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Browser cleanup and reopen last page (BUILD .127)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Sports: one highlights and one condensed link per game (BUILD .126)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>N badge: original letter styling back, still centred on the toolbar (BUILD .125)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>No input character limits</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Photo icon</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Change log card (BUILD .124)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>No Jot it down character limit</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Commute trips off Home (BUILD .123)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>N badge centred</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Family OS subtitle</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Jot it down stays put and keeps drafts</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Updates wait while typing (BUILD .122)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Every feature card: rows no longer overlap (BUILD .120)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Holiday traditions (BUILD .119)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Menu ordered by most used, optional (BUILD .118)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Every feature card in the Design Studio (BUILD .117)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Right now cards on 10 pages: each page shows its Home cards all the time with a calm status (BUILD .116)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Shipped-per-day chart in the Design Studio (BUILD .115)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Planes map INFO toggle</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Arrivals board tabs fixed on phones (BUILD .114)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pantry &amp; Fridge rename with pantry/fridge/freezer (BUILD .113)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Phone title bar: N logo centered (BUILD .112)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Weather page: What to watch card (severe, rain, freeze, UV) always shown, Home shows copies (BUILD .111)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Design rule: cards live on their page first</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home shows copies when they matter</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Dog timeout uses the dog's name from Pet characters (BUILD .110)</td><td><span class="src src-h">Human</span></td></tr>
</tbody></table>

## Before 1.0 · Versions 0.18 to 0.109

<table class="srct"><thead><tr><th>Change</th><th>Source</th></tr></thead><tbody>
<tr><td>Shopping page shows only shopping lists (BUILD .109)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs version 2.0: Living with Nashboard guide, Home pop-up table and pages refreshed, Pantry page added</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Cat curls up in the front window late at night (BUILD .107)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Symptom buttons on the medicine card (BUILD .106)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Fever chart and doctor summary (BUILD .105)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Dog reacts to the doorbell (BUILD .104)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Market value tidbit (BUILD .103)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs: full feature list (docs/features.md), linked from the docs home and README (not published yet)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pantry check on recipes</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Medicine rules, FDA label facts and duplicate checks (BUILD .102)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Pet characters on the Home banner (BUILD .100)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Welcome tour (BUILD .97)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Holiday themes and animations (BUILD .96)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Birthday reminders (BUILD .95)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Medicine rules (once a day, alternating fever medicines), recent record, OK-again phone alert (BUILD .94)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Medicine &amp; fever card with quick tiles, fever log and history (BUILD .93)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Compact phone weather, bug button to Jot it down, real-browser Full window (BUILD .92)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Pantry page (BUILD .90)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Self-service YAML reload for Claude sessions</td><td></td></tr>
<tr><td>Free reset and 90% notes merged into the existing Claude card</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Duplicate card removed (BUILD .89)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home intercom (BUILD .88)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>One font family throughout (BUILD .87)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Bug button on phones (BUILD .86)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home cards on the TV/Display rotation</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Build number in the top bar (BUILD .85)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Cast menu and Cast settings (BUILD .84)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Little browser page in Labs (BUILD .83)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nursery sleep log (BUILD .82)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Zip code location fallback (BUILD .81)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Photos on jotted ideas (BUILD .80)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Phone title bar: two lines and a brand badge (BUILD .79)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Cook mode: per-step ingredient list with pictures (BUILD .78)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>BTC power law zoom</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Free usage reset alert on the Claude usage card (BUILD .77)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Claude usage Home card and phone alert (BUILD .76)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Recipes: amounts in the steps and cook mode (BUILD .75)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Phone alerts: Space Station passes and 7700 emergencies within 200 nm, from Home Assistant (BUILD .74)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: on the way home</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Tidbit chip rotates on tap with new facts (BUILD .73)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Kid medicine tracker on the Family Board and Home (BUILD .71)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Nursery: Hatch presets (BUILD .70)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Internet services outage monitor on Network and Home (BUILD .69)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: house health for admins (BUILD .68)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: new devices on Wi-Fi (BUILD .67)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: nursery asleep, with quiet chimes (BUILD .66)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: leave soon for an event, with Navigate (BUILD .65)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: severe weather warnings (BUILD .64)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home card: chores due today (BUILD .63)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Cast confirmation chime on the TV (BUILD .62)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Dinner tonight: start-cooking time (BUILD .61)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home cards: rocket launch and UV high (BUILD .60)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home Markets card around the open and close and after big moves (BUILD .59)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Dog timeout timer and feeder reminders, with phone notifications (BUILD .58)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Car screens via the Home Assistant app (Android Auto and CarPlay)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>CAR-DESIGN.md</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>No more XXX league labels (BUILD .57)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog page renamed Design Studio (BUILD .56)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Location standard (device, then commute plan, then home) on every map and radar</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Commute trips tied to people (BUILD .54)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Radar works on the cast TV: NWS radar loop fallback (BUILD .53)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog page: Hardware wishlist with add-by-link and remove (BUILD .50)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Commute: Navigate button on every trip card, on phones and Home (BUILD .49)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Quick-add forms and card text boxes fit any card width (Add shows just + in narrow cards) (BUILD .48)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Home Assistant restarted</td><td></td></tr>
<tr><td>All teams back through the Teams picker</td><td></td></tr>
<tr><td>Quick wins: commute cards only around the trip</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Refresh after reconnect</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Shared loading and empty look (BUILD .45)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Sports: all teams removable (moved out of configuration.yaml)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Team dropdown by league (BUILD .44)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Full window button on every page</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Mic on every quick-add list (BUILD .34)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Page width baseline raised to five standard cards (BUILD .33)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Page width rule: content capped at about four standard cards and centred on wide screens</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Single cards stack (BUILD .32)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card model done (batch 6: Weather lower section packs) (BUILD .27)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card model batch 5: Guest pet notes, Wi-Fi and contacts shown on Pets, Network and Family Board (BUILD .26)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Room dashboards show related cards from other pages (maintenance, batteries, pets, dinner, packages)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Room grids pack (BUILD .25)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card model batch 3: Air &amp; Allergy, Pets and System pack</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Breaking news Show more (BUILD .24)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Card model batches 1–2: sizes and builder, Show more, fill-the-line text</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home Rooms and calendar, pop-ups, Network and Guest (BUILD .23)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Calendar redesign (4-week month)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Camera Full window controls stay visible (BUILD .21)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Full window keeps the rounded corner (BUILD .20)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Bugs: Map page sizing</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Packages cards pack tightly (BUILD .19)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Bigger Weather radar, radar on Guest, fastest plane in the world (BUILD .18; needs a RESTful reload)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Quick wins: Shopping shows only shopping lists</td><td></td></tr>
<tr><td>Delivered packages clear after 2 days</td><td></td></tr>
<tr><td>Commute page no longer needs an unused route</td><td></td></tr>
<tr><td>Map fits commute places</td><td></td></tr>
<tr><td>Backlog page: jotted ideas show instantly under &quot;Inbox&quot; at the top of the backlog list, until a session files them</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog page: instant ideas, narrower cards</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>System page: no full-width small cards</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Toolbar bug button to the Backlog</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs screenshots and artwork (demo house, hero banners, framed snips) embedded in docs/ and the README</td><td></td></tr>
<tr><td>Kit in</td><td></td></tr>
<tr><td>Top bar: the brand name hides on narrow phones so the clock is not clipped</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home layout: cards no longer get stuck in three squeezed columns on a phone after the screen was briefly wider (rotation, window resize, first load)</td><td><span class="src src-c">Claude</span></td></tr>
<tr><td>Docs: every page in menu order with a screenshot and a jump list</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Demo data for Commute, Map, Packages, Recipes, Pets and Finance</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog page in the app with an ideas inbox Claude reads each session</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Backlog consolidated into one topic list</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Docs/ site for pages and features (kept public-safe)</td><td><span class="src src-h">Human</span></td></tr>
<tr><td>Home: Air quality card (Moderate or worse), shared with the Air page</td><td></td></tr>
<tr><td>Earlier Nov 20: highest plane worldwide, card debounce, stable card placement, Air &amp; Allergy, Guest, Family Board, Network &amp; Storage, Speedtest.net, router SNMP and SRM device list</td><td><span class="src src-h">Human</span></td></tr>
</tbody></table>
