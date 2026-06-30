# Project Instructions: Developer Portfolio

Welcome to the **Developer Portfolio** project. This repository contains the Next.js personal website/portfolio for Aditya Mhatre, deployed to Firebase Hosting and hosted at [adityamhatre.com](https://adityamhatre.com), featuring responsive layouts, modular components, and embedded static mini-applications.

---

## 🛠️ Tech Stack & Environment

- **Core Framework:** [Next.js 15.1.7](https://nextjs.org/) (Static Export Configured)
- **Library:** [React 19.0.0](https://react.dev/)
- **Styling:** Bootstrap 5 & Reactstrap (using the Argon Design System), custom CSS
- **PWA Support:** `next-pwa` integration
- **Deployment:** [Firebase Hosting](https://firebase.google.com/) (Output folder: `out`)

---

## 📂 Key Directory Structure

```
/
├── components/          # Reusable UI cards and layouts (Navigation, ExperienceCard, SEO, etc.)
├── containers/          # Major section containers (Greetings, Education, Experience, Projects, Skills)
├── pages/               # Next.js pages (index.js entry point, _app.js setup)
├── public/              # Static assets, images, resume, fonts, and sub-apps
│   ├── img/             # Profile pictures, badges, university/company logos
│   ├── lottie/          # JSON animations for DisplayLottie
│   ├── audio-visualizer/# Embedded P5.js interactive audio project
│   ├── office-dvd/      # TypeScript canvas DVD bouncing logo game
│   ├── street-fight/    # TypeScript 2D canvas street fighting game
│   ├── pb/              # Firebase integration playground / sub-app
│   ├── qr/              # QR-code utility page
│   └── valentine-app/   # Custom web-based interactive greeting app
├── styles/              # Global stylesheets, FontAwesome, and Argon Design System CSS
├── portfolio.js         # CENTRAL DATA STORE (Holds all text, credentials, jobs, and project configs)
├── next.config.js       # Next.js configurations (Static Export, images, and PWA setup)
└── firebase.json        # Firebase deployment configurations pointing to the static "out/" folder
```

---

## 🚀 Development Workflows & Commands

All standard development tasks are run from the project root using `npm`:

| Command | Action / Description | Output Target / Notes |
| :--- | :--- | :--- |
| `npm run dev` | Starts the Next.js local development server | `http://localhost:3000` |
| `npm run build` | Compiles the Next.js site to a static export | Exports static site to `/out` |
| `npm run start` | Serves the locally compiled static output using `serve` | Runs `npx serve@latest out` |
| `npm run lint` | Runs ESLint for codebase linting and formatting check | Uses Next core web vitals eslint config |
| `firebase deploy` | Deploys the exported `/out` folder to Firebase Hosting | Production release |

---

## 🎨 Design & Coding Conventions

### 1. Portfolio Customization & Data Store (`portfolio.js`)
- **Single Source of Truth:** All professional experience, skills, greetings, education history, and social links are centralized in `portfolio.js`.
- **Do NOT** hardcode professional details directly in component files. Always export them from `portfolio.js` and import/render them dynamically in the relevant containers.

### 2. Static Site Export Limits
- The project uses Next.js static export (`output: "export"`).
- **No Server-Side Operations:** Do not use `getServerSideProps` or SSR/ISR features. Everything must compile to static HTML/CSS/JS and run client-side.
- **Images:** Since standard Next.js image optimization is not supported during static export, `next.config.js` sets `images.unoptimized = true`. Standard HTML `<img>` elements are also commonly used (with the Next.js eslint rule disabled for ease of image rendering).

### 3. Embedded Static Sub-Apps (`public/`)
- Interactive projects such as `street-fight`, `office-dvd`, and `audio-visualizer` live in the `public/` directory.
- These sub-apps are served as static files under their respective paths (e.g. `/street-fight/`, `/office-dvd/`).
- `next.config.js` is configured with `trailingSlash: true` to ensure correct routing and resource asset mapping for these sub-apps.
- If editing TypeScript source files inside `public/office-dvd/src` or `public/street-fight/src`, you must recompile/build those sub-apps locally to update their deployed outputs in their respective `dist/` or static directories.

### 4. Styles, CSS, and Theme Integration
- The project integrates **Reactstrap** and **Argon Design System CSS**.
- **No Tailwind CSS:** Styling is based entirely on vanilla CSS, Argon, and Bootstrap utility classes. Avoid adding TailwindCSS or other styling utilities unless requested.
- FontAwesome is used for icons (loaded locally via CSS file from `styles/vendor/font-awesome`).

---

## 🔒 Security & Deployment Integrity
- **No Secrets in Repo:** Never include Firebase API credentials, API keys, or private environment variables in the repository. Keep configurations client-side safe since the entire static package is exported.
- **Static Output Validation:** Before deploying via Firebase, always run `npm run build` followed by `npm run start` to inspect and verify the static `out/` build is clean and completely functional without missing assets.
