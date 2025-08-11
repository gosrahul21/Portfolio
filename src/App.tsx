import Dashboard from "./Dashboard";

/*
  Single-file React component for a next-level portfolio.
  Features added:
   - Magnetic morphing cursor with trail
   - 3D tilt project cards (react-parallax-tilt)
   - Scroll-triggered reveals (framer-motion + IntersectionObserver)
   - Glassmorphism, dark-mode toggle, and subtle particle background

  Required packages:
    npm install framer-motion react-parallax-tilt

  TailwindCSS required. This component uses Tailwind utility classes.
  Drop into a Vite/CRA/Next page and ensure Tailwind is configured.
*/

export default function CoolestPortfolioV2() {
  return <Dashboard />;
}
