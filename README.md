# macOS Portfolio — Pavel Pugachev

An interactive portfolio for frontend developer Pavel Pugachev, styled as a macOS desktop: complete with a Dock, draggable app windows, Finder, Safari, Terminal, and other "apps" running inside the browser.

## 🖥️ Demo

> Add a link to the live site here once it's deployed.

## ✨ Features

- Welcome screen shown on load
- macOS-style desktop with a Dock and Navbar (top menu bar)
- Draggable, openable app windows with their own controls (close/minimize/maximize — `WindowControls`)
- **Finder** — file manager for navigating through portfolio sections
- **Safari** — browser-style window (e.g. for project links)
- **Terminal** — terminal emulation
- **Photos** / **Image** — image and project viewer
- **Text** — text notes viewer
- **Resume** — in-browser PDF resume viewer (`react-pdf`)
- **Contact** — contact info window
- **Trash** — trash bin
- Smooth window and UI animations powered by GSAP
- Window state and positioning managed with Zustand (`store/window.js`, `store/location.js`)
- Visitor analytics: Google Analytics (GA4) and Yandex.Metrica

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — styling
- **GSAP** (`gsap`, `@gsap/react`) — animations
- **Zustand** — state management
- **Immer** — immutable state updates
- **React PDF** — resume rendering
- **React Tooltip** — tooltips
- **Day.js** — date/time handling (e.g. the Navbar clock)
- **Lucide React** — UI icons
- **clsx** — conditional CSS classes
- **ESLint** — code linting

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

```bash
git clone <repository-url>
cd mac-os-portfolio
npm install
```

## 🚀 Running the Project

### Development mode

```bash
npm run dev
```

The app will be available at the address Vite prints in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
```

The built files will be output to the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

### Lint the code

```bash
npm run lint
```

## 📊 Analytics

Two visitor-tracking scripts are wired directly into `index.html`:

- **Google Analytics (GA4)** — Measurement ID in the form `G-XXXXXXXXXX`
- **Yandex.Metrica** — numeric counter ID (with Webvisor session recording)

To check visitor stats:

- GA4 → [analytics.google.com](https://analytics.google.com) → **Reports → Realtime**
- Yandex.Metrica → [metrika.yandex.ru](https://metrika.yandex.ru) → **Visitors** / **Webvisor**

> If you fork this project, replace the counter IDs in `index.html` with your own.

## 📁 Project Structure

```
mac-os-portfolio/
├── index.html              # root HTML + analytics scripts (GA4, Yandex.Metrica)
├── public/
│   ├── files/               # resume PDF
│   ├── icons/                # UI SVG icons (github, linkedin, wifi, trash, etc.)
│   ├── images/                # project images, wallpaper, avatar, etc.
│   └── macbook.png            # favicon
├── src/
│   ├── App.jsx                 # root app component
│   ├── main.jsx                  # entry point
│   ├── index.css                  # global styles (Tailwind)
│   ├── components/
│   │   ├── Dock.jsx                 # bottom Dock bar
│   │   ├── Navbar.jsx                 # top menu bar
│   │   ├── Welcome.jsx                  # welcome screen
│   │   ├── Home.jsx                       # desktop view
│   │   ├── WindowControls.jsx               # close/minimize/maximize buttons
│   │   └── index.js
│   ├── windows/                             # individual "app" content
│   │   ├── Finder.jsx
│   │   ├── Safari.jsx
│   │   ├── Terminal.jsx
│   │   ├── Photos.jsx
│   │   ├── Image.jsx
│   │   ├── Text.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Trash.jsx
│   │   └── index.js
│   ├── hoc/
│   │   └── WindowWrapper.jsx                 # HOC wrapper for windows (drag, resize, controls)
│   ├── store/
│   │   ├── window.js                          # open windows state
│   │   └── location.js                          # position/layout state
│   └── constants/
│       └── index.js                              # constants (app list, links, etc.)
├── vite.config.js
├── eslint.config.js
├── jsconfig.json
├── package.json
└── package-lock.json
```

## 📄 License

Personal project — Pavel Pugachev's portfolio. All rights reserved unless stated otherwise.
