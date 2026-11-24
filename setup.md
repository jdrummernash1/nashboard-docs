---
title: Set it up
---

[← Nashboard](index.md)

# Set it up

> **Downloads are not open yet.** Nashboard 1.0 is out as a preview of what it does; the app files are not offered for download yet. This guide is here so you can see what installing will take. Downloads will be announced on [What is new](changelog.md).

This page takes a working Home Assistant to a working Nashboard. It is written for someone who has never seen the
project. If you only want to look around first, see [Try the demo](#try-the-demo-first).

<div class="nb-chips"><span class="nb-chip">About 15 minutes</span><span class="nb-chip">Home Assistant admin needed</span><span class="nb-chip">No account or add-on</span></div>

## What you need

| Need | Why |
|---|---|
| **Home Assistant**, any install type, reachable from your screens | Nashboard is a page that runs inside it. It has no server of its own. |
| **An admin sign-in** | To add the two files and the dashboard. Family members do not need to be admins. |
| **The two app files**: `dashboard.html` and `dash-embed.js` | The whole app is these two files. They will come with a Nashboard release once downloads open (not yet). |
| **A way to put files in Home Assistant's `config/www` folder** | The File editor, Studio Code Server or Samba add-on all work. |

Nothing else is required. Every page beyond Home, Rooms and Weather appears once Home Assistant has what it needs
(see [What each page needs](#what-each-page-needs)).

## Try the demo first

Once the files are in place (step 1 below), open `/local/dashboard.html?demo=1` on your Home Assistant address. The app
runs on a made-up sample house: no sign-in, read-only, and nothing from your real house is read or changed. A DEMO strip
shows on every page.

## Install, step by step

1. **Copy the two files** into `config/www/` in Home Assistant (create the `www` folder if it is not there, then
   restart Home Assistant once so it starts serving the folder). They are now served at `/local/dashboard.html` and
   `/local/dash-embed.js`.
2. **Add the card as a resource.** Settings → Dashboards → the ⋮ menu → Resources → Add resource. URL
   `/local/dash-embed.js?v=1`, type **JavaScript module**. (Bump the `?v=` number whenever you replace the file.)
3. **Make a dashboard for it.** Settings → Dashboards → Add dashboard → New dashboard from scratch. Give it a name and
   an icon and turn on "Show in sidebar".
4. **Put the card on it.** Open the new dashboard, Edit, add a view with the **Panel (single card)** type, then add a
   **Manual** card with:

   ```yaml
   type: custom:dash-embed-card
   ```

5. **Open it.** The card shows Nashboard full size and signs it in as you. The first time, a short welcome tour runs.
6. **Make it the start page** (optional): in your Home Assistant profile, set this dashboard as the default on each
   wall tablet or phone.

That is the whole install. No add-on, no custom integration, no cloud account.

## First run: the Getting started list

Open **System** (the gear in the top bar) and find the **Setup checklist**. Its first part, **Getting
started**, is the short list that makes the app feel alive. Each row checks Home Assistant live and says what to add:

| Row | What to do in Home Assistant | What you get |
|---|---|---|
| **Rooms** | Put your devices into areas (Settings → Areas) | A room page for every area, made automatically |
| **Weather** | Add a weather integration (the built-in Met.no works) and set your home location | The Weather page and the banner's weather |
| **Calendar** | Add Google Calendar, CalDAV or Local Calendar | The Calendar page and Home's agenda |
| **Shopping list** | Add a to-do list for shopping (Shopping List, Local To-do, Google Tasks or Mealie) | The Shopping page, with voice entry |
| **Cameras** | Add your cameras (their own integration, ONVIF, or a recorder such as Frigate) | The Cameras page and camera tiles on Home |
| **Speakers and music** | Add your speakers or TVs (Cast, Sonos and others) | Now Playing |
| **Phones** | Install the Home Assistant app on each phone and sign in | Who is home, phone alerts, phone sensors |
| **Commute** | Open Commute from Menu pages → More to set up, and add a trip; a travel-time sensor (for example Waze Travel Time) gives it live times | Drive times and "leave soon" |

Below it, **Optional extras** lists everything else the app can use (camera detection, a family mailbox, game accounts,
a UPS, leak sensors, a pool monitor and more). They are folded away and never counted: add only what your house has.

## What each page needs

| Always there | Appears when Home Assistant has it | Waits under More to set up |
|---|---|---|
| Home, Rooms, Weather, Air & Allergy, Planes, Map, Space, Packages, Pantry & Fridge, Recipes, Storage, Garage, Family Board, Guest, Maintenance, Hobbies, Workout, Kids, Activity, Security, Automations, Wellbeing, Finance, Network, Multi-view, Settings, System, About | Cameras (a camera), Calendar (a calendar), Now Playing (a speaker), Shopping (a shopping list), Sports (a team sensor) | Commute, Pets, Pool, Utilities, Energy |

Pages in the last column are set up on the page itself. **Menu pages → More to set up** lists them with a **Set up**
button, which opens the page and adds it to your menu.

## Optional: lines for `configuration.yaml`

A few cards read public web pages through Home Assistant (stock quotes, some plane and launch data), so that nothing is
fetched from the browser directly. They use one small command. Add it, then restart Home Assistant:

{% raw %}
```yaml
rest_command:
  fetch_page:
    url: "{{ url }}"
    method: get
    timeout: 20
    headers:
      User-Agent: "Mozilla/5.0 (compatible; HomeAssistant)"
```
{% endraw %}

Without it those cards say what is missing; everything else works. The background phone alerts described on
[Automations](automations.md) are Home Assistant automations and helpers you can add later, one at a time. The app
never needs them to run.

## AI is optional, and local by default

Summaries, document import, vision checks and the bedtime story use whatever AI is set up in Home Assistant (an AI Task
entity or a conversation agent). With none, those cards show a plain rule-based version or stay hidden. Until an admin
switches on "Allow cloud AI" (System → AI privacy), only a local model is ever used.

## Where your data lives

Everything a person enters (lists, settings, places, notes) is saved in Home Assistant's own storage, per person or for
the household, never only in the browser. It is included in Home Assistant backups. The System page's **Saved data**
card shows every saved setting with Undo, and a dated copy is kept every night.

## Updating

Replace the two files in `config/www/` with the new ones and bump the resource's `?v=` number. Every open screen checks
its own version every few minutes and reloads itself, so the whole house updates without anyone touching it. Saved
data is never reset by an update.

## For TVs, wall tablets, phones and the car

See the [Device setup checklist](device-setup.md). In short: cast the dashboard to a TV from the cast button, use a
kiosk browser on a wall tablet, and install the Home Assistant app on phones.

## How the files fit together

- **`dashboard.html`**: the whole dashboard as one generated page. In the project it is written as about 290 small
  source pieces (one per feature or page) that a build script joins and checks; nobody edits the generated page.
- **`dash-embed.js`**: a small dashboard card that shows the page full size inside Home Assistant and hands it the
  signed-in user's access token. Opened from the Google Cast app, where Home Assistant forbids framing, the card loads
  the page inline instead.
- **Home Assistant's own configuration** (optional): sensors, helpers and automations for the background phone alerts.

Behind the scenes, the project's own tools (build, checks, deploy with a dated backup first) are described on
[Developer tools](developer-tools.md).
