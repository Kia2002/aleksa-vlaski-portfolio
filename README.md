# Aleksa Vlaški — Portfolio

Personal portfolio website showcasing projects, skills, and experience. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

**Live site:** [aleksa-vlaski-portfolio.vercel.app](https://aleksa-vlaski-portfolio.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion |
| Contact form | EmailJS (no backend) |
| Deploy | Vercel |

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

### Other commands

```bash
npm run build      # type-check + production build
npm run preview    # serve production build locally
npm run lint       # ESLint
```

---

## Project Structure

```
src/
├── components/    # one file per section + Navbar + Footer
├── data/          # all personal content (never hardcoded in components)
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── education.ts
│   ├── about.ts
│   └── contact.ts
├── types/
│   └── index.ts   # shared TypeScript interfaces
├── assets/        # photo.JPG, cv.pdf
├── App.tsx
├── index.css      # Tailwind import + design tokens (@theme)
└── main.tsx
```

---

## Design

- Dark theme — deep navy (`#070d1b`) with a single cyan accent (`#22d3ee`)
- Fonts: Space Grotesk (headings) + DM Sans (body) via Google Fonts
- Scroll-triggered entrance animations, staggered cards, mobile-responsive

---

## Contact

- **Email:** aleksavlaski22@gmail.com
- **LinkedIn:** [aleksa-vlaski-56643133a](https://www.linkedin.com/in/aleksa-vlaski-56643133a/)
- **GitHub:** [Kia2002](https://github.com/Kia2002)
