---
title: Device setup checklist
---

[← Nashboard](index.md)

# Device setup checklist

What each kind of device needs for Nashboard to work fully. The same checklist is in the app under
**System → Device setup**, where each device keeps its own ticks.

## TV and wall displays

- Cast the TV view with the **Cast** button in the header. The TV loads Display mode by itself. Google Tasks due today or
  overdue show there as a Tasks card.
- In the Cast menu choose **Rotate** or **One screen**, the seconds per screen, and which screens rotate (Cast settings).
- Keep the screen awake: turn off the display's screen timeout or screensaver, and keep the casting device powered.
- Check auto refresh: the data should update on its own. After a dashboard update, reload the display once.
- Set night dimming in Cast settings.
- Tap the screen once after it loads. Some TVs block chimes and the intercom until the first touch or button press.

## Kitchen tablet (wall display)

- Install the Home Assistant app, or a kiosk browser (best for a wall screen: kiosk lock, screen on, starts by itself).
- Turn on **Kitchen tablet** mode: open the dashboard on the display and add `?display=kitchen` to the address once (it
  remembers), or open **Settings → This screen → Kitchen tablet**. It shows Home and returns to Home after 2 minutes without a touch.
- Keep it plugged in, turn off the screen timeout, and allow the app to keep the screen on.
- Set a comfortable day brightness. From 9 PM to 6:30 AM it dims itself after a minute without a touch; a tap wakes it.
- Open **Rooms → Kitchen** to check the at-a-glance cards (Today, Who's home, Trash, Chores, the Living Room controls), the
  **Timers** (a chime plays when one finishes, so keep the volume up; it stays quiet at night) and **Out the door**.

## Wall display, any room

- Use a kiosk browser on the tablet (kiosk lock, screen on, starts by itself). With Fully Kiosk Browser, add its Home
  Assistant integration so the screen can be switched on and brightened.
- Put a presence or motion sensor in the room, then open **Settings → This screen** on that tablet and turn on **Wake on
  approach**: pick the sensors, how long before it dims, the brightness and whether it only runs at night.
- A screen that is fully off can only be woken from Home Assistant, so add a wake automation if yours sleeps.
- The **Wall display setup** card on the Kitchen room page checks each of these live.
- Full-screen card notices for urgent cards are off by default; turn them on in **Settings → Card change notices** if
  you want the wall screen to announce a leak or someone at the door.

## Phones (Android and iPhone)

- Install the Home Assistant companion app, sign in, and set Nashboard as the app's default dashboard.
- Allow notifications for the app in the phone's settings.
- Location permission: **Always** (precise on), and turn on background location in Manage sensors. Commute cards and
  arrival alerts depend on it.
- Turn on the companion sensors you want: Activity, Battery, Next alarm, Wi-Fi connection, Bluetooth, and Health Connect
  on Android.
- Allow every notification channel. On Android: Apps → Home Assistant → Notifications, then allow **Medicine,
  Intercom, Gas prices, Home, Family, Commute, Pets, Garage, Planes** and **Claude**. On iPhone one switch covers them all.
- Allow the **Home** channel so the leaving-home alert arrives (lights on, a lock unlocked or the garage open, two minutes after the last person leaves).
- Optional: let time-sensitive alerts through Do Not Disturb or a Focus so medicine, garage and commute alerts arrive at night.
- In Nashboard, Settings → Alerts: switch on phone alerts for planes, Space Station passes and emergencies.
- Optional extras: Quick Settings tiles and a home-screen widget for the common actions.
- iPhone: voice input uses the keyboard microphone inside the app; nothing to set up.

## Car (Android Auto and CarPlay)

Car screens show Home Assistant entities, scripts and notifications through the companion app, not web pages.

- Android Auto: Home Assistant app → Settings → Companion app → Android Auto, then choose up to six favorites.
- CarPlay: Home Assistant iOS app → Settings → Companion app → CarPlay, then choose entities and actions.
- Keep the notification channels allowed so commute and garage alerts reach the car screen.
- Try the garage confirmation: it always asks first, and acts only when you confirm.
- Optional: add the quick scripts as Google Assistant or Siri shortcuts.

## Watch (Wear OS)

- Install the Home Assistant app on the watch and sign in.
- Add a **Shortcuts tile** for quick scripts (arriving home, garage door with confirmation).
- Add a **Template tile** showing car home status and drive-home time.
- Add a complication for the next commute.
- Turn on the watch sensors (heart rate, steps, on-body, battery) in the watch app's settings.
