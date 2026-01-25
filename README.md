# Dipak’s Portfolio (Vite + React)

A fast, interactive personal portfolio built with Vite and React, featuring animated sections, custom typography, a 3D planet model, and smooth UI details.

## ✨ Features

- **Animated hero and headers**: Components like `AnimatedHeaderSection`, `AnimatedTextLInes`, and `Marquee` for delightful motion.
- **3D model**: `Planet.glb` rendered via the `Planet` component.
- **Structured sections**: `Hero`, `About`, `Services`, `Works`, and `Contact` with summaries.
- **Custom fonts**: Amiamie font family embedded locally (`public/fonts/amiamie`).
- **Optimized build**: Vite for instant dev server and production-optimized builds.

## 🧰 Tech Stack

- **Framework**: React 18 + Vite
- **Language**: JavaScript (ES Modules)
- **Styling**: CSS (global styles in `src/index.css`, component styles in `src/App.css`)
- **Assets**: Local images, backgrounds, and GLB model in `public/`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+ (or pnpm/yarn)

### Installation

```bash
npm install
```

### Development

Start the dev server with hot module reloading:

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
```

The output will be generated in `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` build locally.

## 📁 Project Structure

```
public/
  assets/
    backgrounds/           # Hero/background imagery
    projects/              # (Optional) project thumbnails/logos
  fonts/
    amiamie/               # Local Amiamie font (otf/ttf)
  images/
    Dipak_pic.jpeg         # Profile image
  models/
    Planet.glb             # 3D model used in Planet component
src/
  assets/                  # App-specific assets (if any)
  components/
    AnimatedHeaderSection.jsx
    AnimatedTextLInes.jsx
    Marquee.jsx
    Planet.jsx
  constants/
    index.js               # Reusable constants (nav links, copy, etc.)
  sections/
    About.jsx
    Contact.jsx
    ContactSummary.jsx
    Hero.jsx
    Navbar.jsx
    Services.jsx
    ServiceSummary.jsx
    Works.jsx
  App.css
  App.jsx
  index.css
  main.jsx                 # App bootstrap (Vite + React)
index.html                 # Vite HTML entry
vite.config.js             # Vite configuration
```

## 🔤 Fonts

This project embeds the Amiamie font family (OTF/TTF) under `public/fonts/amiamie`. Ensure the CSS `@font-face` declarations correctly reference these files (usually relative to `/fonts/amiamie/...`).

## 🖼️ Assets

- Background images live in `public/assets/backgrounds/`.
- Profile image in `public/images/Dipak_pic.jpeg`.
- The 3D model (`Planet.glb`) is in `public/models/` and loaded by `Planet.jsx`.

If you move or rename assets, update the import/URL paths accordingly in components and CSS.

## 🧩 Notable Components

- `Planet.jsx`: Renders the GLB model. If using three.js or react-three-fiber, ensure those dependencies are installed and imports are correct.
- `AnimatedTextLInes.jsx`: Animated line-by-line text display (used in headers/sections).
- `Marquee.jsx`: Repeating marquee text/brand strip.

## 🔧 Scripts

Common npm scripts available in `package.json`:

- `dev`: Start Vite dev server
- `build`: Build for production
- `preview`: Preview the production build
- `lint`: (If configured) Run ESLint

## 🛠 Development Tips

- Place static assets under `public/` when they should be referenced by absolute paths at runtime.
- Co-locate small component-specific assets under `src/` and import them in your components.
- Keep section components focused and reusable; use `constants/index.js` for shared copy/links.

## 📦 Deployment

Any static host that supports serving the Vite `dist/` output works:

- GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.

Typical steps:

1. `npm run build`
2. Upload `dist/` or connect repository to your host and set the build command to `npm run build` and output directory to `dist`.

## 📝 License

This repository is provided under the MIT License (unless noted otherwise in the repository). See `LICENSE` if present.

## 🙌 Credits

- Designed and developed by **Dipak**.
- Fonts: Amiamie family in `public/fonts/amiamie` by their respective authors.
- Images and models are local assets; ensure you have rights to use and distribute them.
