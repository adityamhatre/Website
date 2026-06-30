# Aditya Mhatre | Developer Portfolio

Welcome to the repository for Aditya Mhatre's developer portfolio and interactive playground. The application is built with **Next.js 15**, **React 19**, **Bootstrap 5 & Reactstrap (using the Argon Design System)**, and is deployed via **Firebase Hosting**.

*   **Live Website:** [adityamhatre.com](https://adityamhatre.com)
*   **Alternate Domain:** [adityamhatre.dev](https://adityamhatre.dev)

---

## Repository Structure

```
/
├── components/          # Reusable UI component cards (SEO, Navigation, ProjectsCard, etc.)
├── containers/          # Main homepage section wrappers (Greetings, Experience, Projects)
├── pages/               # Page routing entry points
│   ├── _app.js          # Global stylesheet imports and bootstrap configurations
│   ├── _document.js     # Custom HTML document wrapper (PWA metadata, favicons, fonts)
│   └── index.js         # Main home page route
├── public/              # Static assets and standalone sub-applications
│   ├── audio-visualizer/# Embedded interactive audio oscillator visualizer
│   ├── office-dvd/      # Bouncing DVD logo TS canvas simulation
│   ├── street-fight/    # 2D street fighting TS canvas game
│   ├── solar-system/    # Artistic solar system animation using p5.js
│   ├── pb/              # Pickleball firebase playground route
│   └── qr/              # Static QR utility redirect route
├── styles/              # Global custom CSS and Argon Design System files
├── portfolio.js         # CENTRAL DATA STORE (Holds all text, credentials, jobs, and project data)
├── next.config.js       # Next.js export, PWA, and build exclusions configuration
└── firebase.json        # Firebase hosting route mappings pointing to static "out" folder
```

---

## Development Workflows & Commands

Run all command scripts from the project root using `npm`:

### 1. Local Development Server
Starts the Next.js local development environment:
```bash
npm run dev
```
*Access the site locally at:* [http://localhost:3000](http://localhost:3000)

### 2. Standalone Sub-App Compilations
Standalone TypeScript sub-apps in `public/` must be compiled separately if you make changes to their `src/` directories:
```bash
# Compile Bouncing DVD Logo sub-app
npx -p typescript tsc --project public/office-dvd/tsconfig.json

# Compile Street Fighter sub-app
npx -p typescript tsc --project public/street-fight/tsconfig.json
```
*Note: The compiled flat JS outputs are stored under the respective `dist/` subdirectories.*

### 3. Testing & Code Quality
Run ESLint to check for code quality and linting warnings:
```bash
npm run lint
```

### 4. Build & Static Export
Compiles and generates the production-ready static HTML/JS bundle:
```bash
npm run build
```
*This command exports all static pages, assets, and processed sub-apps directly into the `/out/` folder (which is ignored by Git).*

### 5. Serving Locally
Launch a local static server to verify the exported build (useful for testing routing and PWA service worker behavior before deploying):
```bash
npm run start
```
*Serves the contents of the `/out/` folder locally at:* [http://localhost:3000](http://localhost:3000)

### 6. Deployment
Deploy the static `/out/` directory directly to Firebase Hosting:
```bash
firebase deploy
```

---

## Key Architectural Design Patterns

*   **Single Source of Truth (`portfolio.js`):** All social URLs, job histories, projects, education details, and brand colors are centralized. Avoid hardcoding copies inside React component files.
*   **Sub-App Trailing Slash Rules:** Next.js static exports rewrite directories with trailing slashes. All scripts and assets inside `/public/` sub-apps use absolute paths (e.g. `/street-fight/dist/index.js` or `/lib/p5.js`) to resolve correctly with or without trailing slash page requests.
*   **Case Consistency:** TypeScript compiler options specify `"forceConsistentCasingInFileNames": true` to force case-sensitive import resolutions across Windows, macOS, and Linux filesystems.
