#  Olive - Food Scanner Landing Page

🔗 **Live Demo:** [https://canopy-frontend-seven.vercel.app](https://canopy-frontend-seven.vercel.app)

A modern Next.js landing page for **Olive**, a grocery scanning app that helps families identify harmful ingredients and make healthier food choices.

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS v4** with custom design tokens
- **Lucide React** for icons
- **Google Fonts** - Oswald (display) + Inter (body)

## Project Structure

```
├── app/
│   ├── globals.css        # Tailwind config + design tokens
│   ├── layout.js          # Root layout with fonts
│   └── page.js            # Home page
└── components/
    ├── Navbar.jsx          # Responsive navbar with mega dropdowns
    └── HeroSection.jsx     # Animated product carousel hero
```

## Key Features

- **Animated phone mockup** - auto-rotating product card carousel with slide transitions
- **Mega menu dropdowns** - Solutions, Blog, and Food category nav with hover interactions
- **Responsive design** - mobile drawer + desktop nav
- **Custom design system** - CSS variables for colors, typography, and spacing via `@theme`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design Tokens

All design tokens are defined in `globals.css` under `@theme`:

| Token | Value | Usage |
|---|---|---|
| `bg-container` | `#f5faf6` | Main card/section background |
| `brand-primary` | `#afba41` | Olive green accent |
| `text-headline` | `#1e3510` | Primary headings |
| `text-muted` | `#7a8a6a` | Secondary text |
