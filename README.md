# Ali Raza — Portfolio

A dark-themed, animated personal portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.jsx       Root layout, fonts, SEO metadata
  page.jsx          Renders the SiteShell
  globals.css       Global styles & design tokens
components/
  SiteShell.jsx      Client shell: theme state, loading screen, section order
  Navbar.jsx          Sticky nav with scroll-spy active link highlighting
  Hero.jsx            Hero with typewriter effect + floating code-window signature
  About.jsx
  Education.jsx       Scroll-triggered timeline
  Skills.jsx           Animated progress bars + badges
  Projects.jsx         Filterable, tilt-on-hover project grid
  Certifications.jsx
  Experience.jsx
  Contact.jsx           Animated contact form + direct links
  Footer.jsx
  ScrollToTop.jsx
  CustomCursor.jsx      Desktop-only cursor glow
  LoadingScreen.jsx     First-load splash animation
  ThemeToggle.jsx
lib/
  data.js               All portfolio content in one place — edit this file to update copy
```

## Customizing content

Everything text-based (name, bio, education, skills, projects, certifications, experience, contact links) lives in `lib/data.js`. Update that file and the whole site updates.

## Adding a real photo

Replace the placeholder avatar in `components/About.jsx` — swap the icon block for a Next.js `<Image />` pointing at a photo placed in `public/`.

## Notes

- The contact form is front-end only (no backend wired up). To make it functional, connect the `handleSubmit` function in `components/Contact.jsx` to an API route, or a service like Formspree/Resend.
- Reduced-motion is respected globally via `prefers-reduced-motion`.
