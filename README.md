# Portfolio Site

React + Tailwind CSS + shadcn/ui-style portfolio, built with Vite.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
```

The output goes to `dist/` — deploy it anywhere that serves static files
(Vercel, Netlify, GitHub Pages, etc).

## Structure

```
src/
  components/
    ui/                  shadcn-style primitives (Button, Card, Badge)
    Nav.jsx              Section nav (side rail on desktop, top bar on mobile)
    ParallaxBackdrop.jsx Fixed, full-page layered parallax background
    About.jsx            "About me" — hero parallax + education blurb
    Projects.jsx          Personal projects (3, each with an image carousel)
    Teams.jsx             Engineering teams (2, each with an image carousel)
    Experience.jsx        Work experience — minimal alternating timeline
    Skills.jsx             Skills grouped by category
    Contact.jsx             Contact links
    Carousel.jsx            Reusable image carousel w/ captions + dots
    TopoLines.jsx           Decorative SVG used in the About section layers
  hooks/
    useParallax.js           Element-position scroll parallax (About shapes)
    useBackgroundParallax.js Scroll-driven background-position parallax (site backdrop)
    useMouseParallax.js       Pointer-driven parallax offset (About floating shapes)
    useReveal.js              IntersectionObserver-based one-shot reveal (timeline)
  lib/
    utils.js                shadcn's cn() className helper
```

## Customizing content

All placeholder copy lives directly in the component files — there's no CMS
or data file, so just edit the arrays/JSX at the top of each file:

- `About.jsx` — name, tagline, bio, degree/GPA/coursework, interest tags
- `Projects.jsx` — the `projects` array (title, description, highlights,
  skills, GitHub/demo links, `images: [{ src, caption }]`)
- `Teams.jsx` — the `teams` array (name, company, role, description, focus
  areas, `images: [{ src, caption }]`)
- `Experience.jsx` — the `roles` array (title, company, period only, by design)
- `Skills.jsx` — the `groups` array
- `Contact.jsx` — email and social links

### Adding more projects, teams, or images

Everything is array-driven, so scaling up is just adding entries:

- Add a 4th/5th project by appending to the `projects` array in `Projects.jsx`
  — the grid re-flows automatically.
- Same for `teams` in `Teams.jsx`.
- Each project/team's `images` array can hold any number of
  `{ src, alt, caption }` objects — the `Carousel` component and its dot
  indicators scale to however many you add (1 image just hides the arrows/dots).

**Replace the placeholder images.** `Projects.jsx` and `Teams.jsx` currently
point at picsum.photos placeholder photos so the layout has something to
show — swap `src` for real screenshots of your own projects/teams before
publishing.

## Design tokens

Colors, fonts, and spacing live in `tailwind.config.js` under `theme.extend`.
The palette is ink navy / paper / teal / brass — change the hex values there
to re-theme the whole site.

## Adding real shadcn/ui components

Only `button`, `card`, and `badge` are included (hand-written to match
shadcn's conventions, since this project wasn't scaffolded with the CLI).
To pull in more official shadcn/ui components, run the shadcn CLI's `add`
command in this project once you have it set up locally.

## Parallax — lives on the content, not the background

The background (`ParallaxBackdrop.jsx`) is now deliberately simple: one
static dot-grid texture, fixed behind the page, with no scroll listener and
no motion at all. All of the parallax happens on actual content, via the one
`useParallax(speed)` hook (`hooks/useParallax.js`):

- **Hero text** (`About.jsx`): the eyebrow, headline, bio paragraph,
  education card, and interest tags each move at a different speed
  (0.55 → 1.4) as you scroll past the hero, so the block visibly "pulls
  apart" rather than moving as one flat image.
- **Project / team cards** (`Projects.jsx`, `Teams.jsx`): each card gets an
  alternating speed (0.88 / 1.12 by index) so the grid has real depth as you
  scroll — even-numbered cards lag slightly behind, odd-numbered cards lead
  slightly ahead.
- **Section headers**: the eyebrow + heading pair in Projects, Teams,
  Experience, Skills, and Contact all drift at 0.9x, a subtler version of
  the same effect that ties every section together.

Separately, the work-experience timeline uses `useReveal`
(IntersectionObserver) to fade/slide each role in the first time it scrolls
into view — a one-shot reveal rather than continuous parallax, since a fixed
title/company/period list reads better as a clean timeline than a moving one.

All motion respects `prefers-reduced-motion: reduce` (parallax freezes at
neutral position, timeline items render already visible).

## Layout notes

- The nav rail's horizontal clearance is now handled once, on `<main>` in
  `App.jsx` (`pl-28`/`pl-32` at md/lg), rather than as a per-section margin
  hack. Every section just does `max-w-content mx-auto` inside it, so
  centering is consistent everywhere (this fixed an earlier bug where
  sections looked off-center).
- Section vertical padding is `py-16 md:py-20` (down from `py-28 md:py-40`)
  and header margins are smaller, so sections sit closer together.
