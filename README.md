# Croyez Immigration — Frontend Assessment

Screenshot to code implementation of the Croyez Immigration **About** page.

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Folder Structure

/public
  └── immigration.jpg         # Banner image

/app
  ├── layout.js               # Root layout (NavHead + Footer)
  ├── globals.css             # Global styles & custom utilities
  ├── page.js                 # Home page (redirects to /about)
  │
  ├── /about
  │   ├── page.js             # About page (lazy loads sections)
  │   └── /sections
  │       ├── Banner.jsx
  │       ├── WhoWeAre.jsx
  │       ├── WhyChoose.jsx
  │       ├── Services.jsx
  │       ├── Steps.jsx
  │       ├── ClientReviews.jsx
  │       └── Achievements.jsx
  │
  └── /components
      ├── Footer.jsx
      └── /nav
          ├── NavHead.jsx
          ├── Navbar.jsx
          ├── NavLinks.jsx
          └── Topbar.jsx

## Setup & Run

**1. Install dependencies**
npm install

**2. Run in development mode**
npm run dev
Open http://localhost:3000 in your browser.

**3. Build & run production**
npm run build
npm start

Open http://localhost:3000 to verify the production build.

## Known Limitations

- Implementation is based solely on the screenshot reference.
- Exact images and illustrations used in the original design were not available, so similar stock images and placeholders have been used in their place.

## Notes

- `Banner` and `WhoWeAre` are eagerly loaded for fast First Contentful Paint (FCP).
- All remaining sections are lazy loaded using `next/dynamic` for better performance.
- Custom layout utilities (`container`, `banner-text`, `btn-primary`, etc.) are defined in `globals.css` using Tailwind's `@utility` API.
- SVGs are used inline for icons and decorative elements — no external icon library needed.
- ARIA attributes are applied throughout for accessibility and semantic structure.