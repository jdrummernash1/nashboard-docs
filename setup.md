---
title: How it works and installing
---

[← Nashboard](index.md)

# How it works and installing

## The pieces

- **`www/dashboard.html`**: the whole dashboard in one file (HTML, CSS and JavaScript). It lives in Home Assistant's
  `www` folder and is served at `/local/dashboard.html`. In the repo the code is kept in numbered pieces
  (`src/dashboard/`) that a small build script joins back into the one file before each deploy.
- **`www/dash-embed.js`**: a small Lovelace card that shows the dashboard full-size inside a Home Assistant
  dashboard and hands it the signed-in user's access token. When the dashboard is opened from the Google Cast app
  (where Home Assistant forbids framing), the card loads the page inline instead.
- **`configuration.yaml`** additions: REST sensors (worldwide emergencies, highest plane), template sensors
  (airport movements, mail), SNMP sensors and utility meters for the router, the router device tracker, and the
  helpers (switches, numbers, text boxes, a timer and a date) that let the dashboard hand work to background
  automations.
- **`automations.yaml`** and **`scripts.yaml`**: the phone alerts, reminders and confirm-first car actions described on
  [Automations](automations.md).

## Installing

1. Copy `dashboard.html` and `dash-embed.js` into Home Assistant's `/config/www/`.
2. Add `/local/dash-embed.js` as a dashboard resource (Settings → Dashboards → Resources), type "JavaScript
   module". Add a version query (e.g. `?v=2`) and bump it whenever the file changes.
3. Create a dashboard with a single panel view containing the embed card.
4. Open it. Pages appear as their integrations are found.

## Updating

The dashboard checks its own version every few minutes and reloads itself when a newer file is deployed, so
every screen in the house updates without anyone touching it.

## Tools in this repo

- `tools/pull-from-ha.ps1`: copy the current files from Home Assistant into the repo, to review edits made there.
- `tools/deploy-dashboard.ps1`: copy the dashboard back to Home Assistant, after a dated backup; it refuses if the
  live file was changed since the last commit.
- `tools/ha-backup.ps1`: dated backups with pruning (the five newest plus the newest of each month).
- `tools/claude-usage.js`: writes the AI usage summary the Home card reads.
