# Croyez Immigration — Frontend Assessment

Screenshot-to-code implementation of the Croyez Immigration **About** page.

---

# Tech Stack

* Next.js 15
* Tailwind CSS v4

---

# Folder Structure

```text id="w0vk4h"
/public
  └── immigration.jpg         # Banner image

/app
  ├── layout.js               # Root layout (NavHead + Footer)
  ├── globals.css             # Global styles & custom utilities
  ├── page.js                 # Home page (redirects to /about)

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

  └── /components
      ├── Footer.jsx
      └── /nav
          ├── NavHead.jsx
          ├── Navbar.jsx
          ├── NavLinks.jsx
          └── Topbar.jsx
```

---

# Setup & Run

## 1. Install Dependencies

```bash id="0k9ln5"
npm install
```

## 2. Run Development Server

```bash id="d00f50"
npm run dev
```

Open:

```text id="ij6mrx"
http://localhost:3000
```

## 3. Build & Run Production

```bash id="zv16ta"
npm run build
npm start
```

---

# Notes

* Banner and WhoWeAre sections are eagerly loaded for better First Contentful Paint (FCP).
* Remaining sections are lazy loaded using `next/dynamic`.
* Custom utility classes are defined in `globals.css`.
* Inline SVGs are used instead of external icon libraries.
* Accessibility and semantic HTML practices are followed throughout the project.

---

# Known Limitations

* Implementation is based solely on the provided screenshot reference.
* Exact original assets were unavailable, so similar placeholder/stock assets were used.

---

# Repository Information

* Includes `.gitignore` for excluding unnecessary files and folders.
* Optimized folder structure for scalability and maintainability.
