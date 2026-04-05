# ChessMaster - Learn Chess from Zero

A beginner-friendly chess course website with structured lessons, digital products, and payment integration.

## Features

- 8 structured chess lessons (Basics, Openings, Tactics, Endgame)
- Interactive lesson viewer with chess board diagrams
- Progress tracking with localStorage
- Digital product store (ebooks, cheat sheets, bundles)
- Shopping cart with Stripe payment integration
- Responsive design (mobile to desktop)

## Tech Stack

- React 18 + Vite
- Tailwind CSS 4
- React Router v6
- Stripe Checkout (client-side)

## Getting Started

```bash
npm install
npm run dev
```

## Stripe Setup (Optional)

Copy `.env.example` to `.env` and add your Stripe publishable key. The app works in dev mode without it.

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`.

