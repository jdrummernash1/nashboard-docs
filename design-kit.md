---
title: Design kit
---

[← Nashboard](index.md)

# Dashboard design kit

A portable set of design rules for a card-based home dashboard. It is written so you can drop this one file into your
own project and hand it to your own AI coding assistant (or your team) as the house style. It describes *how things
should look and behave*, not any particular code, so it works with any framework or none.

## How to use this kit

1. **Copy this file** into your project (for example as `DESIGN.md`) and tell your assistant: "Follow every rule in
   DESIGN.md for every change. When something new has no rule yet, write one here first."
2. **Map the names to your code.** Where the kit says "colour tokens", "the card helper" or "the packing grid", decide
   what those are in your project and note it at the top of the file.
3. **Automate the checks** in the last section, one at a time. A rule that nothing checks will drift.
4. **Grow it.** Every time you fix a design problem, add the rule that would have prevented it, then apply it across
   the whole app (see [Fix once, fix everywhere](#fix-once-fix-everywhere)).
5. **Run the checklist** at the end before every release.

The words **must** and **never** are hard rules. **Prefer** means the default unless there is a good reason.

---

## 1. The card model

Everything on a page is a **card**. Cards have only three sizes:

| Size | Width | Use for |
|---|---|---|
| **Standard** | 1 column | Almost everything |
| **Wide** | 2 columns | Rich content that needs room: cameras, a calendar, news, a grid of rooms |
| **Full** | The whole row | Rare: page-wide strips such as a timeline |

- New cards **must** be built with one shared card helper (title, body, size, actions) rather than hand-written markup,
  so every card gets the same header, spacing and behaviour for free.
- **Never** give a card a one-off pixel width. Its size is one of the three above.

### The packing grid

- Every page's cards sit in a **packing grid** (masonry style): equal-width columns, each new card dropped into the
  shortest column, so there are no gaps under short cards.
- Column width comes from **one shared token** (for example `--col-min: 320px`) and the gap from another
  (`--gap`). A page of unusually large cards may use a second shared token (`--col-wide`, for example 420px). **Never** a
  one-off width for one page.
- Cards in the grid **always fill their column** exactly; grid items can **never** widen their column (in CSS:
  `min-width: 0` on grid children, `width: auto` on cards).
- Groups of cards that can't fill the row are **centred**.
- **Stable layout:** once a page has settled, cards never jump sideways. A card that appears later goes into the
  emptiest spot.
- Every page's card container **must** pack. No plain grids that leave holes, unless the page is a deliberate fixed
  layout (a kiosk or a single-purpose screen).

### One single-card width per page

Every standard card on a page is **exactly one column wide**, including cards that live outside the grid (a "Right
now" strip, a now-playing bar). Measure the column width once and expose it (for example as `--cw`) so those outside
cards can match it. Two slightly different widths for single cards on one page is a bug.

### Container cards

A card that holds a grid of tiles (rooms, cameras, scenes):

- Spans exactly as many columns as the cards beside it.
- Keeps the same number of tiles visible at every size.
- Lays tiles out landscape, up to three across, so the group squares up, then centres that group.
- Tile titles wrap or shrink, with **at least one whole word always visible**. Never cut a name down to "Li…".

### Very text-heavy cards

Huge cards that are mostly text (an ideas inbox, a full backlog, a feature list) are at least a third of the page wide,
never more than three across. Every other card keeps the standard width.

### Show more

Long card content gets a **Show more** control rather than growing without limit. Anything without Show more must fit
its box (see [Text never overruns its box](#8-text-never-overruns-its-box)).

---

## 2. Cards live on their page; Home shows copies

This is the core idea: **the screen shows what matters right now and gets out of the way otherwise.**

- **Every card has a home page** where it always shows: "Rain coming" lives on Weather, "Trash night" on a family page,
  "Leave soon" on Commute, the dog on Pets. On its page it shows all the time, with a calm line when nothing is happening
  ("No rain expected soon").
- **Home never owns a card.** When a card's information matters (it has a clear show rule), Home shows a **copy** of it.
  When it stops mattering (a clear hide rule), the copy goes away by itself.
- Give every pop-up copy a **minimum time on screen** (a few minutes) so it doesn't flicker, and let it say when the
  situation clears.
- **Related pages share cards.** A card made on one page also appears on the page it relates to: a pet note on the pet
  page, a dishwasher filter reminder on the kitchen's room page, a low battery on that device's room.
- Whenever you build a new feature, ask: **is there an automatic Home card here** that should appear when this matters and
  disappear after?

---

## 3. Page width

- Content **never spreads wider than about five standard cards** (a `--page-max` token derived from the column token).
  On wide screens it centres with side margins.
- Prefer a little side margin over empty space at the bottom: stack single cards into fewer, taller columns.
- **Full window** mode (below) ignores the cap.

---

## 4. Type

- **One font family everywhere.** Every element inherits the body font; nothing sets a new family. The only exceptions:
  the logo, and monospace for codes, passwords and anything tabular like a flight board.
- **One size scale.** Use a small set of size tokens (for example `--fs1` to `--fs6`) and nothing in between.
- **Title bar:** one line on wide screens and TVs. On phones, two lines: the page title (it may wrap, never cut off), then
  the time and connection status, with the logo reduced to a small badge.

---

## 5. Colour, light and dark

- All colours come from **tokens** defined once and redefined for dark mode. Never a raw colour in a component.
- **Every change must look right and stay readable in both light and dark.**
- **Text that carries meaning** (accent, warning, error, success, info) uses dedicated **text tokens** that are darker in
  light mode (for example `--warn-tx`, `--bad-tx`, `--ok-tx`). **Never** put a bright accent colour straight on text; it
  is unreadable on a light background.
- **Text on an accent background** (selected chips, primary buttons) uses a fixed dark ink, never the accent text token.
- **Minimum contrast:** text must reach at least 3:1 against its background in both themes (aim higher for body text).
  The exception is text over a live map or photo, which is judged by eye.
- If people can pick an accent colour, check every choice in both themes.

---

## 6. Full window

- Every page header gets a standard **Full window** button automatically, and cards or multi-view panes can have one too.
- Full window **always fits**: it scales the content so the whole page fits the window with no scrolling. This applies to
  every past and future Full window button without per-page work.
- On phones that lack a fullscreen API (iPhone browsers), Full window still works as an in-page mode.

---

## 7. Card headers collapse

- **Tapping a card's header** collapses or expands it, on every page. Links and buttons inside the header keep working.
- Card actions live in a **⋯ menu** in the header, which also works while the card is collapsed.
- The collapsed state is **remembered per person** (saved with their other settings on the server), so it follows them to
  every device and survives reloads, while other people see their own layout.

---

## 8. Text never overruns its box

- Anything without a Show more or expand option **shrinks to fit**: single lines scale their font between a minimum and a
  maximum; blocks (like cooking steps) scale as a unit.
- Never let text spill out of a card, button or tile, and never clip it mid-word without a way to see the rest.

---

## 9. Overflowing button rows

Rows of buttons that can be wider than the screen (map controls, tab rows, chip rows, the top bar on phones) **never get
cut off**. They scroll sideways with momentum, a hidden scrollbar, and a **soft fade at the end** that shows there is more.

---

## 10. Phones

- Everything **must work on both Android and iPhone**. Test layouts at a typical Android size (about 412 × 915) and an
  iPhone size (about 390 × 844).
- Know the iPhone limits and plan fallbacks in code:
  - **No speech recognition** inside some embedded web views: fall back to the keyboard's own mic.
  - **No Fullscreen API:** Full window must still work as an in-page mode.
  - **No vibration.**
- Every quick-add list input gets a **voice mic**.
- No character limits on text boxes or list inputs, except fixed formats such as a postal code.
- **Phone notifications** set both Android options (channel, importance, car display) and iPhone options (sound,
  interruption level).
- If you support cars (Android Auto, CarPlay): one-glance states, six items or fewer, and nothing physical (locks,
  garage doors) on a single tap; always confirm first.

---

## 11. Legends for every colour and line style

Anything that carries meaning through **colour, line style (solid, dotted, dashed) or icons** (maps, compasses, charts,
radar, routes, diagrams) **must have a legend** in the same card covering every style it draws. When you add a new
style, add its legend entry in the same change. Purely decorative artwork can be exempted, with a written reason.

---

## 12. Maps at every zoom

- Every map **must work at every zoom level**, including fractional zooms from pinch-zoom and from Full window scaling,
  and zooms beyond the base map's last tile level.
- No missing tiles, no blank areas, and markers stay exactly on their true positions at every zoom.
- Satellite and other base layers follow the same rule.

---

## 13. Location fallback order

Every map, radar and "near me" feature finds the user's location with **one shared function**, in this order:

1. **This device's real location**, if the browser allows it.
2. If blocked, **where the signed-in person's own plan says they are** right now (for example a commute or calendar
   plan), if you have one.
3. A **postal code saved on this device**.
4. Otherwise, **home**.

If a feature uses a nearby source instead (the nearest radar station), it names that source and still pins the user.

---

## 14. Data is sacred

People will trust the dashboard with real things: lists, notes, medicine logs, settings. Losing any of it is the worst
bug there is.

- **Everything a person enters is saved on the server**, never only in the page or in browser storage. Browser storage is
  for per-device conveniences only (theme on this screen, display size).
- **All saving goes through one central data layer** that reads the latest copy and merges into it, so two screens saving
  at once never wipe each other out.
- **Never save a value that hasn't loaded.** A screen may only write a shared setting after it has successfully read it.
- **Versioned migrations.** When the shape of saved data changes, ship a migration with a version number that carries
  every old field into the new design, keeps fields it doesn't recognise, and leaves the old copy in place until the new
  one has saved. Never drop or reset saved data.
- **Never shrink a list a lot without confirming.** A save that would empty a list, or remove more than a couple of items
  at once, asks first or is refused. The same guard applies to any list file you publish.
- **Keep data on a failed refresh.** A refresh that fails, comes back empty or arrives half-written never replaces data
  already on screen.
- **History and undo.** Keep the last several versions of saved data with an Undo, and export a dated copy regularly.
- **Back up before every deploy**, and prune old backups on a schedule (for example the newest few plus one per week
  and one per month).

---

## 15. Other conventions worth adopting

- **Every page has a short subtitle** that describes it, shown in the phone menu. Keep it accurate when the page changes.
- **New pages get a NEW tag** in menus for their first day (or week). **Changed pages get an "Updated" dot** on their
  icon that clears when opened.
- **Hidden cards are always recoverable**: listed in one place (a System or Settings page) with Show again.
- **Self-updating screens**: wall screens reload themselves on a new build, wait while someone is typing, and may play a
  short chime (never in quiet hours).
- **Playful animations are rare and optional.** Keep them to the pages they belong to, and let a Calm/Off setting and the
  system's reduced-motion preference always win.
- **Names that clash:** in a large codebase built in parts, give each part its own short name prefix so two parts never
  define the same thing.

---

## Fix once, fix everywhere

Whenever you fix a design problem anywhere:

1. **Turn the fix into a rule** and add it to this file.
2. **Review the entire app** (every page, card, dialog and phone layout) for anything the new rule applies to.
3. **Bring everything up to date in the same pass**, not "later".

And whenever you build something that has no rule yet, write the rule first (or while building it), then apply it
everywhere it fits. Every design direction someone gives becomes a written rule, and changes to the rules are announced,
never made silently.

---

## Quality checks worth automating

Each of these can be a small script that loads your real dashboard in a headless browser and fails loudly. Run them
before every deploy and block the deploy on any failure.

| Check | What it should fail on | Run it |
|---|---|---|
| **Layout gaps** | A card that doesn't exactly fill the columns it spans; single cards of different widths on one page; uneven gaps. At desktop, tablet and phone widths. | Every UI change |
| **Contrast** | Any text under 3:1, on every page, in **both** light and dark. | Every UI change |
| **Data retention** | Person-entered data kept only in browser storage; a seeded value that doesn't survive a rebuild and reload; a save that empties or sharply shrinks a list without a confirm. | Every build |
| **Maps** | Missing tiles, blank areas or drifting markers at whole and fractional zooms, in satellite view and in Full window. | Any map change |
| **Legends** | A colour, line style or icon drawn without a matching legend entry. | Any chart, map or diagram change |
| **Name clashes** | Two parts of the code declaring the same top-level name or shared state key. | Every build |
| **Performance** | Render time, long tasks, memory or page size more than about 30% worse than a saved baseline. | Every few deploys |
| **Phones** | Layout shots at an Android and an iPhone size, plus a code scan for iPhone-unsupported APIs used without a fallback. | Phone-affecting changes |

Tips: run long page lists in groups so each run finishes quickly; crop screenshots to the part that changed; and refresh
a baseline only after a deliberate change.

---

## Checklist

Before shipping any change, confirm:

- [ ] Every new card uses the shared card helper and one of the three sizes (standard, wide, full).
- [ ] The page's cards are in a packing grid, fill their columns, and share one single-card width.
- [ ] Container cards square up their tiles and never cut a name below one whole word.
- [ ] The card lives on its own page; any Home copy has a clear show rule and hide rule.
- [ ] Related pages show the card too.
- [ ] Content stays within the page width cap (except in Full window).
- [ ] Only the body font family and the size scale tokens are used.
- [ ] Colours come from tokens; meaning text uses the darker text tokens; ink on accent backgrounds is the fixed dark ink.
- [ ] Looks right and passes 3:1 contrast in **both** light and dark.
- [ ] Full window fits the whole page with no scrolling.
- [ ] Card headers collapse on tap; actions are in the ⋯ menu; collapse state is saved per person.
- [ ] No text overruns its box; it shrinks to fit or has Show more.
- [ ] Wide button rows scroll with momentum and a fade.
- [ ] Works on Android **and** iPhone, with fallbacks for missing speech, fullscreen and vibration.
- [ ] Every colour, line style and icon with meaning has a legend entry.
- [ ] Maps work at every zoom, including fractional zooms and Full window.
- [ ] Location uses the shared fallback order.
- [ ] Everything entered is saved on the server through the central data layer, with a migration if the shape changed.
- [ ] No save can empty or sharply shrink a list without confirming; failed refreshes keep old data.
- [ ] The fix (if this was a fix) is now a written rule and has been applied across the whole app.
- [ ] All automated checks pass.
