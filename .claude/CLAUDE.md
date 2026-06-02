# CLAUDE.md — Aleksa Vlaški Portfolio

This file provides guidance to Claude Code when working with this repository.

## Commands

```bash
npm run dev       # start dev server (HMR)
npm run build     # type-check + production build (tsc -b && vite build)
npm run lint      # ESLint
npm run preview   # serve the production build locally
```

No test runner is configured.

---

## What this is
Personal portfolio website for Aleksa Vlaški, software engineering intern/aspiring full-stack developer from Pančevo/Belgrade, Serbia. Goal: impress employers, showcase projects, make it easy to contact me.

Reference design: kecman.co — clean, single-page, scroll-based, professional.

---

## Stack
- React 19 + TypeScript + Vite 8
- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin — no `tailwind.config.js`, theme defined in CSS
- **Framer Motion** (`framer-motion`) for all animations
- **EmailJS** (`@emailjs/browser`) for the contact form — no backend
- Deploy: Vercel

---

## Design tokens

All tokens defined in `src/index.css` under `@theme {}`. Available as Tailwind utility classes:

| Token | Value | Classes |
|---|---|---|
| `--color-bg` | `#070d1b` | `bg-bg`, `text-bg` |
| `--color-surface` | `#0c1525` | `bg-surface` |
| `--color-card` | `#0f1c35` | `bg-card` |
| `--color-accent` | `#22d3ee` | `text-accent`, `bg-accent`, `border-accent` |
| `--color-muted` | `#94a3b8` | `text-muted` |
| `--color-border` | `#1a2d4a` | `border-border` |
| `--color-text` | `#f1f5f9` | `text-text` |
| `--font-display` | Space Grotesk | `font-display` |
| `--font-body` | DM Sans | `font-body` |

**Fonts**: Space Grotesk (headings/display, `font-display`) + DM Sans (body). Loaded via Google Fonts in `index.html`. Body font set globally on `body` in CSS. NOT Inter/Roboto/Arial.

**Opacity modifiers** work on custom tokens: `bg-accent/10`, `border-accent/40`, etc.

**Arbitrary shadows**: `shadow-[0_0_60px_rgba(34,211,238,0.2)]` for the accent glow effect.

**Alternating section backgrounds**: Hero→`bg-bg`, About→`bg-surface`, Skills→`bg-bg`, Experience→`bg-surface`, Projects→`bg-bg`, Education→`bg-surface`, Contact→`bg-bg`.

---

## Design
- Dark theme (deep navy/near-black), light text, single sharp accent: cyan `#22d3ee`
- Minimal and professional — not flashy, not a template
- No purple gradients, no particle backgrounds
- Main text: `text-white` / `text-slate-300` (NOT `text-text` — that class exists but use slate for prose)
- Accent used sparingly: labels, active states, timeline dots, section underlines, CTA buttons

---

## Animation patterns

**Hero entrance** — staggered `motion` elements with `initial/animate`:
```tsx
function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }
}
```

**Section entrance** — reusable object spread onto `motion.div`, fires once on scroll:
```tsx
const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}
// Override transition when adding delay:
<motion.div {...sectionAnim} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}>
```

**Staggered cards** — inline `initial/whileInView` with `delay: i * 0.08`:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
>
```

**Hover effects** — Tailwind transitions only (`hover:border-accent/40 transition-colors duration-300`), no Framer Motion needed.

---

## Sections & Order
1. Hero
2. About
3. Skills
4. Experience
5. Projects
6. Education
7. Contact

Fixed top navbar with links to each section + GitHub + LinkedIn icons. Becomes `bg-bg/90 backdrop-blur-md` with a bottom border after 20px scroll. Mobile hamburger with `AnimatePresence` slide-down drawer.

---

## My Links
- Email: aleksavlaski22@gmail.com
- Phone: +381 64 234 80 57
- GitHub: https://github.com/Kia2002
- LinkedIn: https://www.linkedin.com/in/aleksa-vlaski-56643133a/

---

## Projects & Repos
1. **Full Stack Food Delivery App** — `Laravel, React, MySQL` — https://github.com/Kia2002/QuickBite---aplikacija-za-dostavu-hrane
2. **Fitness Training Booking System** — `Java, MySQL, Sockets` — https://github.com/Kia2002/Seminarski-rad---aplikacija-za-zakazivanje-treninga
3. **Stock Price Trend Prediction (ML)** — `Python, Scikit-learn, NumPy, Pandas` — https://github.com/Kia2002/stock-trend-prediction-ffnn
4. **Medical Appointment App** — `.NET, SQL Server` — https://github.com/Kia2002/MedicalAppointmentApp
5. **Harry Potter Characters App** — https://github.com/Kia2002/HarryPotterCharactersApp

---

## Skills Summary
- **Languages**: Java (proficient), C# (proficient), Python (strong)
- **Web**: .NET, Laravel, React, REST APIs, HTML, CSS
- **Databases**: MySQL, SQL Server, MongoDB, PostgreSQL
- **Tools**: Git, GitHub, VS Code, Visual Studio, Agile/Scrum, Clean Architecture
- **Learning**: Swift/iOS, TypeScript

---

## Project structure

```
src/
├── components/        ← one file per section + Navbar + Footer
├── data/              ← all personal content lives here, NOT hardcoded in components
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── education.ts
│   ├── about.ts       ← infoCards (location, focus, email, availability)
│   └── contact.ts     ← contactLinks (email, phone, GitHub, LinkedIn)
├── types/
│   └── index.ts       ← shared TypeScript interfaces
├── assets/
│   ├── photo.JPG      ← profile photo (used in Hero)
│   └── cv.pdf         ← CV download (linked in Hero)
├── App.tsx
├── App.css            ← intentionally empty; all styling via Tailwind
├── index.css          ← Tailwind import + @theme tokens + base/reset styles
└── main.tsx
```

---

## Data layer

All personal content in `src/data/` as typed constants. Components import and render — no hardcoded personal strings inside components. To update content, only touch data files.

### `src/types/index.ts` — actual interfaces

```ts
export interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  gpa?: string        // optional — omit or leave empty string to hide
}

export interface SkillGroup {
  category: string
  skills: string[]
}
```

- `projects.ts` → `projects: Project[]`
- `experience.ts` → `experience: Experience[]`, most recent first
- `skills.ts` → `skills: SkillGroup[]` grouped by category
- `education.ts` → `education: Education[]`
- `about.ts` → `infoCards: { label: string; value: string }[]`
- `contact.ts` → `contactLinks: { label: string; value: string; href: string }[]`

---

## EmailJS setup

Contact form uses EmailJS. Credentials are three constants at the top of `src/components/Contact.tsx`:

```ts
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

Template variables sent: `from_name`, `from_email`, `message`, `to_name` (hardcoded "Aleksa").

---

---

## TypeScript notes

`tsconfig.app.json` does **not** have `strict: true` — `strictNullChecks` is off by default. However `noUnusedLocals: true` and `noUnusedParameters: true` are active. Keep all imports and parameters used; TypeScript will error on unused ones.

---

## Code rules
- Functional components + hooks only, no `any`
- Tailwind for all styling — `index.css` for base/reset only, `App.css` is empty
- Framer Motion for all animations (entrance, scroll-triggered); Tailwind for hover/transition
- One responsibility per component
- Data never hardcoded inside components — always from `src/data/`

---

## TODOs
- [x] Real experience data → `src/data/experience.ts`
- [x] Real education data → `src/data/education.ts`
- [x] Tech stack for Harry Potter Characters App (check repo)
- [x] Confirm which project repos are public

## Instructions for Claude
After any significant change, update the relevant section of this CLAUDE.md:
- New dependency added → update Stack section
- Design change → update Design tokens or Design section  
- New section added → update Sections & Order
- TODO completed → check it off in TODOs
Do NOT update CLAUDE.md for bug fixes, text changes, or minor styling tweaks.

## Playwright
Use Playwright only when explicitly asked. 
Do not use it for regular code changes or fixes.

## Hero photo
Photo is at `src/assets/photo.JPG` (uppercase extension). 
Already integrated in Hero.tsx.