# Aquavibe Marine Services

A premium maritime logistics and supply provider website built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

## 🚢 Overview

Aquavibe Marine Services (operates as Sultan Fleet Serves) is a leading ship chandler in Bangladesh, supplying vessels calling at the major ports of Chittagong, Mongla, and Payra. 

This repository contains the front-end codebase for their corporate website which is designed to convert fleet managers, vessel masters, and maritime companies by visually projecting trust, reliability, and engineering excellence. It uses a custom-developed premium nautical theme.

### Key Features
- **Premium Maritime Theme:** A cohesive, customized branding system implementing a tailored dark navy (`primary`: `#08214a`) and gold accent (`secondary`: `#e4a04f`) color palette.
- **Dynamic Animations:** Graceful entrance and scroll animations powered by Framer Motion. 
- **Modern UI Paradigms:** Employs glassmorphism, responsive grids, continuous marquee banners, and interactive hover states.
- **Micro-interactions:** Custom hover state text logic and dynamic layout behaviors to maintain visual clarity on both light backgrounds and dark overlays.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v16.2.2 with App Router)
- **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4), `clsx`, `tailwind-merge`
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (v12)
- **Icons:** [Lucide React](https://lucide.dev/), `react-icons`
- **Components:** `embla-carousel-react` for Hero sliders and marquees.
- **Language:** TypeScript 

## 🚀 Getting Started

To run the development server locally:

1. Copy `.env.local.example` to `.env.local` and add relevant keys (if necessary).
2. Install the application dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Launch the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System Configuration

The global design system colors are implemented via Tailwind CSS v4's modern CSS variables injected into global scope. 

Modifying the look and feel can be done by editing `tailwind.config.ts`, where the core utility arrays reside. The site aggressively avoids legacy specific hex codes scattered in TSX files in favor of standard `bg-primary`, `text-secondary` semantic classnames.

## 📁 Project Structure

Key directories:
- `/app` — Next.js 16 App Router foundation (`page.tsx`, `layout.tsx`, global CSS).
- `/app/Home/partials` — Reusable front-page components (`HeroSlider`, `AboutSection`, `ProductsSection`, `WhyChooseUs`, `ContactUs`, etc.)
- `/components` — Shared generic UI components (Header, Footer, Navigation wrappers).
- `/public` — Static assets, images, and fonts.

## 📜 License

Designed and developed for Aquavibe Marine Services. All rights reserved.
