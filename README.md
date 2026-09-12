# TackPadIonic

A cross-platform note-taking app ("TackPad") built with Ionic + Angular and backed by
Firebase — sign up, log in and manage your personal notes from web, iOS or Android.

## Features

- Email/password authentication with Firebase Auth (`_services/auth.service.ts`).
- Register, login and welcome flow.
- Notes list (`notizen`) with a note detail view (`notiz-detail`) for creating,
  viewing and editing notes.
- User profile page.
- Native builds via Capacitor for iOS and Android.

## Tech

- Ionic Framework + Angular 13
- TypeScript
- Firebase (Auth) via AngularFire
- Capacitor (native iOS/Android)

> The Firebase config in `src/environments/` contains only the public web `apiKey`,
> which is safe to expose by design.

## Run

```bash
npm install
npm start        # or: ionic serve
```

Then open http://localhost:8100.

### Native builds

```bash
npm run build
npx cap sync
npx cap open ios      # or: npx cap open android
```
