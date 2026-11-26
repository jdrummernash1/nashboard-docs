# The design engine and the rules behind it

Nashboard is built from a small set of design rules that every page, card and sheet follows. When something new has no rule yet,
a rule is written first, then applied everywhere it fits. This page explains the rules in plain language, why they exist, how the
app treats its data, and which automatic checks enforce them.

## How the engine works

- **One card model.** Almost everything on screen is a card made with a single shared builder. A card has a size (standard = one
  column, wide = two columns, full = a whole row), a header, a menu and optional "Show more". Because every card comes from the same
  model, a fix to one card style fixes all of them.
- **Fix once, fix everywhere.** When a design element is fixed anywhere, the fix becomes a standard, and the whole app (every page,
  card, sheet and phone layout) is reviewed in the same pass for anything the standard applies to.
- **Rules before building.** A new kind of element gets its rule written before or while it is built, so the next one matches.

## Layout and packing

- **Cards pack, never leave gaps.** Every page's card container packs its cards into columns. Plain grids that leave holes are not
  allowed (the only exceptions are deliberate fixed layouts). Why: empty space at the bottom of a page looks broken.
- **One single-card width per page.** Every single card on a page is exactly one column wide, including cards outside the grid.
  Columns are never widened by their contents. Why: two slightly different widths on one page look sloppy.
- **Shared width tokens.** Page grids use the shared card width and gap tokens; pages of big cards use a wider token. Never a
  one-off pixel width.
- **Container cards** (a card holding a grid of tiles, such as rooms or cameras) span as many columns as their neighbours, lay tiles
  out landscape, and centre the squared-up group. Tile titles wrap or shrink but always keep at least one whole word visible.
- **Huge, text-heavy cards** are at least a third of the page wide (never more than three across). Everything else stays standard.
- **Page width cap.** Content never spreads wider than about five standard cards; on wide screens it centres with side margins. A
  little side margin is preferred over empty space at the bottom. Full window ignores the cap.
- **Full window always fits.** Every Full window button zooms the content so the whole page fits with no scrolling.
- **Title bar.** One line on wide screens and TVs. On phones, two lines: the title (may wrap, never cut off), then the time and
  connection dot, with the name shown as a small badge.
- **Text never overruns its box.** Anything without a Show more option shrinks to fit. Overflowing button, tab and chip rows scroll
  with momentum and a soft fade at the end, so nothing is cut off.

## Cards and Home copies

- **Cards live on their own page first.** Every card has a home on the page it relates to, where it always shows. The Home page never
  owns a card: when a card's state matters, Home shows a copy, and the copy goes away again afterwards.
- **Automatic Home cards.** Always look for a Home card that appears on its own when the information matters and hides after.
- **Linked everywhere it belongs.** A card shown on one page also appears on the dedicated page it relates to (for example, a pet
  note on the Pets page, a maintenance task in its room, a low battery in the device's room).
- **Rooms.** Every Home Assistant area gets a room page automatically, with room settings (type, show or hide sections, add a card).
  New room features respect those settings.
- **Card headers.** Tapping a card's top bar collapses or expands it; actions live in the menu, which also works when collapsed.
  Collapsed or expanded state is remembered per person.
- **Hidden cards** are always listed in their own section on the System page with a Show again button, as well as in the Customize menu.
- **Standard page extras.** Every page header gets a Full window button automatically, and every quick-add list form gets a voice mic.
- **Pages.** Every page has a short subtitle (shown in the phone More menu), new pages show a NEW tag for a day, and About is always
  the last page.
- **Home facts.** The rotating fact chip gets a new fact whenever a feature adds an interesting number or status.

## Typography and colour tokens

- **One font family everywhere.** Text inherits the body font. Only the logo (rounded) and codes, passwords and the flight board
  (monospace) differ. Sizes come from a six-step scale, never ad-hoc values.
- **Colours come from tokens.** Text that carries meaning (accent, warning, error, success, info) uses dedicated text tokens, never a
  bright accent colour straight on text. Text on an accent background (selected chips, primary buttons) uses a fixed dark ink.
- **League and team names** go through one helper so raw tracker labels never appear.

## Light and dark mode

- Every UI change must look right and stay readable in both modes. The text tokens are darker in light mode on purpose.
- Why: bright accent colours that look fine on dark backgrounds can vanish on light ones. The quality check renders every page in
  both modes and fails text under a 3:1 contrast ratio. Map overlays are excluded because the background is the map itself.

## Phones and car

- **Everything works on Android and iPhone.** Layouts are checked at both phone sizes. In code, the known iPhone limits are
  respected: no speech recognition inside the iPhone app (fall back to the keyboard mic), no Fullscreen API (Full window still works),
  no vibration.
- **Notifications** come from Home Assistant automations sent to every phone, with both Android and iPhone settings.
- **Companion apps.** When a feature can use phone sensors, notifications, watch tiles, widgets or car integration, the setup steps
  are listed in the to-dos. A device setup checklist in the app and docs stays current as features ship.
- **Car (Android Auto and CarPlay).** Car features are Home Assistant entities, scripts and notifications shown by the companion app
  (no web pages in the car). They are one-glance states, six items or fewer, and nothing physical (locks, garage) happens on one tap:
  it is always confirmed through an actionable notification. Why: safety and distraction.
- **Location.** Every map uses one location helper: the device's real location first, then the signed-in person's commute plan, then
  a saved zip code, otherwise home. Commute trips belong to a person and are shared.

## Maps and legends

- **Legends always.** Anything that carries meaning through line styles, colours or icons (maps, compasses, charts, radar, routes)
  has a legend covering every style it draws. Why: a dotted line means nothing if you cannot look up what it means.
- **Maps work at every zoom**, including fractional zooms from Full window and pinch. Why: tiles or markers that drift at odd zooms
  make a map untrustworthy. The quality check renders maps at a spread of zooms and fails on missing tiles or drifting markers.

## Motion and pets

- **Pets live on the interface, never in the house illustration.** They walk along card edges, sit on headers, peek from behind
  corners, nap on cards, hop onto cards that appear, and chase each other. They never cover text or buttons.
- **Playful animation is rare outside pet pages.** It lives mostly on the Pets page and pet-related cards, and appears elsewhere only
  every 15 to 30 minutes at most. Chases are favoured when both a dog and a cat exist.
- **Calm and Off modes, and reduced motion, always win.**

## Tap targets

- Every button, switch, chip, link and nav item is at least 48 by 48 px to touch (44 px is the hard floor), spaced so neighbours are
  not hit by mistake. Small visuals get a larger invisible hit area, and a switch row toggles from anywhere on the row.
- Why: this is a family dashboard used on phones, tablets and wall displays, often with one hand or wet hands.

## Accessibility

- Contrast is checked in both modes (see above), text never gets clipped, meaning is never carried by colour alone (legends and
  icons), tap targets are large, and reduced-motion and Calm settings are honoured. Phone and TV layouts are tested, and voice input
  is offered on quick-add lists where the device supports it.

## Data rules: how the app works with its data

The family relies on this data, so these rules are the top priority.

- **Data is sacred.** Every configuration, link, list and preference a person enters must survive every build, bug or broken screen,
  for past, current and future features.
- **Configuration lives in Home Assistant**, in its frontend system data or per-person user data, or in Home Assistant helpers and
  to-do lists. It never lives in the dashboard file, so a new build can never wipe it, and never only in the page or browser storage.
- **Per person or per device.** Per-person settings (hidden pages and a list of synced preferences such as alert switches) follow the
  person across devices. Anything not on that list, such as theme, interface scale or location pin, stays on that one device.
- **Guarded saving.** Every shared setting is saved through one function that refuses to save a key that has not loaded successfully
  on that screen. New shared settings must load before they can save. Why: saving before loading is how data gets overwritten with
  blanks.
- **Data never disappears from the screen.** A refresh that fails, comes back empty or half-written never replaces data already
  shown (keepData).
- **Migrations.** When a change alters how saved data is shaped, it ships with a versioned migration that carries every old field into
  the new design, keeps fields it does not know, and leaves the old copy under a versioned name until the new one has saved.
- **Central data layer.** Saving uses the latest-copy merge, versions, migrations, history with undo and a nightly export.
- **Published lists are checked.** The deploy refuses to publish a list that would drop more than a couple of items or empty it, and
  reads it back to verify every row arrived.
- **Backups.** Before any deploy or edit of the dashboard or main configuration, a dated backup is made on the Home Assistant machine.
  Backups are also made hourly while working, and after every batch of shipped items. Retention keeps the newest few, plus the newest
  of each week and each month. Deploys also back up saved frontend data, which never leaves the home server. Secrets and the database
  are never copied.
- **Source of truth.** The dashboard is built from about 460 small source pieces that a build script joins into one generated page. The built file is never edited by hand,
  and files are always pulled from Home Assistant first so a stale local copy is never assumed current.
- **YAML safety.** Configuration files are syntax-checked before copying, and Home Assistant reloads them automatically afterwards.

## The quality checks that enforce the rules

- **Gap check:** every card exactly fills its grid columns, every gap is identical (desktop and phone widths).
- **Contrast check:** every page in dark and light, failing text below 3:1.
- **Name-clash check:** no two code pieces declare the same function, state slot or action key.
- **Map check:** zooms (including fractional), satellite, Full window, tile gaps and marker drift.
- **Legend check:** every colour or line style needs a legend entry.
- **Performance check:** render time, long tasks, memory, page size and idle CPU against a stored baseline; more than 30% worse blocks
  the deploy.
- **Tap-target check:** fails anything smaller than the minimum size.
- **Data check:** inventory of saved values, a round trip (seed, rebuild, reload, verify), and no silent shrinking of lists.
- **Source and YAML checks:** the built dashboard must match its pieces, and configuration files must parse.

## Newer rules

- **Locked in place:** expanding or collapsing a card never moves it or any other card; scroll stays anchored to the toggled card. Enforced by the jump check.
- **Cross-posting:** a card's content can be posted to its other relevant pages or Home copies without duplicating the saved data.
- **Linked check boxes:** check boxes that stand for the same thing stay in step wherever they appear.
- **Rich descriptions:** items carry a fuller description where it helps, shown with Show more when long.
- **Right now width exception:** the Right now card fills the full width, an exception to one single-card width per page.
- **Checks:** the jump check joins the list above, and the performance check also catches scripts stuck in a page-mutation loop.
