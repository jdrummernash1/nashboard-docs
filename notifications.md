---
title: Notifications
---

[← Nashboard](index.md)

# Notifications

Every notification Nashboard can send, in plain words. **Phone** means a push notification from Home Assistant to the phones that have the Home Assistant app; **Screen** means a pop-up, banner or chime on a Nashboard screen. Most can be switched off in **Settings → Alerts**, and the ones that go to phones only go to people who are set up to get them.

This list is generated from the real automations and the Alerts sheet, and a check fails the build when a new notification is not described here, so it stays complete. Currently **43** notifications.

## Doors, cameras and packages

| Notification | Where | When it appears |
|---|---|---|
| Package left outside | Phone | A tracked delivery is marked delivered and left outside. |
| Someone at the front | Phone | A camera sees a person at the front door or yard, with a picture. |
| Package still on the porch | Phone | A camera sees a package left outside and it stays there. |
| Package arriving today | Phone | A shipping email says a package is out for delivery or arriving today. |
| Camera alert (person, car, animal or package) | Phone | A camera tracks something you chose in the Camera alerts settings, with a picture. Off until you switch it on; replaces the older front person alert. |
| Front yard look | Phone | Asked for from the car or a phone: sends a current picture of the front yard. |
| Open or close the garage? | Phone | Asked for from the car or a phone: a notification with Open or Close to confirm before anything moves. |

## Getting around

| Notification | Where | When it appears |
|---|---|---|
| Heavy traffic on the commute | Phone | On commuting mornings, once a day, when the usual drive is 10 or more minutes slower than typical. |
| Gas price drop | Phone | Gas near home gets cheaper than your usual price. |

## Pets and family

| Notification | Where | When it appears |
|---|---|---|
| Pet timeout finished | Phone | A pet's timeout timer ends. |
| Pet feeder runs soon | Phone | Five minutes before a scheduled feeding. |
| Medicine OK to give again | Phone | Enough time has passed since the last dose that the next one is allowed. |
| Pet medicine logged from a tag | Phone | Someone taps the NFC tag to log a pet's medicine. |
| Pet medicine missed | Phone | A pet's medicine has not been logged by its due time. |
| Pet care due | Phone | The cat's medicine is an hour past due (at most every 6 hours); feeder tasks show only on the Home card. |

## Sky and space

| Notification | Where | When it appears |
|---|---|---|
| Plane overhead | Phone | A plane passes low nearby (military within 15 nautical miles), if turned on for phones. |
| Space Station pass | Phone | Shortly before a visible pass of the International Space Station. |
| Aircraft emergency nearby | Phone | An aircraft within 200 nautical miles squawks an emergency code. |

## Daily summaries and reminders

| Notification | Where | When it appears |
|---|---|---|
| Week ahead | Phone | Sunday evening: how many events are coming and which day is busiest. |
| Birthday in two weeks | Phone | Two weeks before a birthday on the calendar. |
| Closing or delay today | Phone | A closing or delay is announced for today. |
| Sticky note reminder due | Phone | A reminder on the Sticky notes card reaches its due day (8 AM). |

## Home status

| Notification | Where | When it appears |
|---|---|---|
| Goodnight check | Phone | At bedtime, if doors, lights or the garage still need attention. |
| Everyone left, something still on | Phone | The last person leaves and a light, the garage door or similar is still on or open. |
| Garage open too long | Phone | The garage door has been open for 10 minutes, or a few minutes after the bedtime hour you pick; repeats once. |
| Garage closed | Phone | Clears the garage-open alert from phones when the door closes. |
| Power is out, running on battery | Phone | A UPS reports battery power for more than 30 seconds (needs a UPS set up in Home Assistant). |
| Garage cannot be opened from Home Assistant yet | Notice in Home Assistant | Someone tries to open the garage cover and no opener is connected; the state comes from the camera. |
| Garage cannot be closed from Home Assistant yet | Notice in Home Assistant | Someone tries to close the garage cover and no opener is connected; the state comes from the camera. |

## Messages and tags

| Notification | Where | When it appears |
|---|---|---|
| Storage tag scanned | Phone | Someone taps a storage NFC tag; the notification opens that place. |
| Intercom message | Phone | Someone records an intercom message in the app; silent during quiet hours. |

## Nashboard on screen

| Notification | Where | When it appears |
|---|---|---|
| Chime on person detected | Screen | A two-note chime and a note when a front camera detects a person. |
| Garage door open / close chime | Screen | A rising chime when the garage opens, a falling one when it closes. |
| Planes overhead | Screen | A pop-up and tone when a plane passes low nearby. |
| Planes overhead on phones (switch) | Screen | The switch that sends the plane alert to phones as well. |
| Space Station passes | Screen | A Home card, pop-up and chime 15 minutes before a visible pass. |
| 7700 emergencies | Screen | A Home card when an aircraft squawks an emergency within 200 nautical miles. |
| Connection lost | Screen | A banner and tone when the screen loses its connection to Home Assistant. |
| New build sound | Screen | A short soft chime the first time a screen loads a new version (not overnight). |
| AI assistant started work | Screen | A note when the AI assistant starts a backlog item, plus a Home card while work is under way. |

## About the app itself

| Notification | Where | When it appears |
|---|---|---|
| AI usage near the limit | Phone | The AI assistant that maintains the app is close to its usage limit. |
| The AI assistant is waiting | Phone | The AI assistant needs an answer or approval before it can continue. |
| Someone opened the demo | Phone | The public demo is opened (at most once every 10 minutes); also shows a short pop-up on screen. Can be muted in Settings, Alerts. |
