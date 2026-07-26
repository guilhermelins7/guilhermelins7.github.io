# Agent Notes for portfolio-2

## Commands

- `npm run dev` — start Vite dev server.
- `npm run build` — typecheck (`tsc -b`) then build (`vite build`). Build depends on lint/typecheck being clean.
- `npm run lint` — ESLint across the repo.
- `npm run preview` — preview the production build.
- No test runner is configured.

## Stack

React 19, TypeScript 6, Vite 8, Tailwind CSS v4 (via `@tailwindcss/vite` plugin).

## Tailwind CSS v4 quirks

There is no `tailwind.config.js` file. Theme configuration is declared in `src/index.css` using `@theme` and `@custom-variant`.

Use the defined tokens instead of raw values:

- Colors: `primary`, `background-light`, `background-dark`, `surface-light`, `surface-dark`
- Fonts: `font-display` (Space Grotesk), `font-body` (Inter)

## Dark mode

Class-based dark mode. The custom variant is defined in `src/index.css` as `dark (&:is(.dark *))`. The `.dark` class is toggled on `<html>` by `src/components/ToggleThemeButton.tsx` and persisted in `localStorage`. Always add matching `dark:` variants when introducing themed styles.

## Icons

Google Material Icons and Material Symbols Outlined are loaded via CDN in `index.html`. Use `<span className="material-icons">icon_name</span>` or `react-icons` (also available in `package.json`).

## Repo layout

- `src/sections/` — top-level page sections composed in `App.tsx` (Header, Hero, Sobre, Experience, Skills).
- `src/components/` — smaller reusable components.
- `design.html` is in `.gitignore`; it is local design scratch space and not part of the built app.

## Conventions

- Some UI text and component names are in Portuguese (`Sobre` = About, etc.). Keep this convention when adding or renaming sections.
- `public/favicon.svg` and `public/icons.svg` are the only static assets served at the root.
