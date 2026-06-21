# Keshav Dahal — Flutter Developer Portfolio

A modern, responsive single-page portfolio built with **React 18**, **Vite**, and **Tailwind CSS**. Includes dark mode, an animated typing hero with a code window, animated stat counters, a categorized tech stack, project cards, an experience timeline, testimonials, a working contact form, and a custom logo/favicon.

## 📬 Make the contact form send real emails (free, no backend)

The form works out of the box in **demo mode**. To receive real submissions:

1. Create a free form at **https://formspree.io**.
2. Copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Open `src/data/content.js` and paste it into `FORMSPREE_ENDPOINT`.

That's it — submissions will now arrive in your email. (EmailJS works similarly if you prefer.)

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

> Requires Node.js 18+.

## ✏️ Personalize it

Everything you need to edit lives in **`src/data/content.js`**:

- `PROFILE` — your name, role, tagline, email, location, social links, resume URL, bio, and stats
- `SKILLS` — skill names and proficiency levels (the animated bars)
- `SKILL_STRIP` — tags shown in the scrolling marquee
- `PROJECTS` — your featured projects (title, description, tags, accent gradient, emoji icon, link)
- `EXPERIENCE` — your work history timeline

No need to touch the components for content changes.

## 🎨 Customize the look

- **Colors:** edit the `brand` palette in `tailwind.config.js`
- **Fonts:** swap the Google Fonts `<link>` in `index.html` and the `fontFamily` in `tailwind.config.js`
- **Animations:** defined in `tailwind.config.js` (`blob`, `float`, `marquee`) and `src/index.css`

## 📁 Project structure

```
flutter-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Root component
    ├── index.css           # Tailwind + global styles
    ├── data/
    │   └── content.js      # ← Edit your content here
    └── components/
        ├── shared.jsx      # Icons + reveal hook
        ├── Section.jsx     # Section wrapper + Social
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 📦 Deploy

The production build outputs to `dist/`. Deploy it to any static host:

- **Vercel / Netlify:** connect the repo, build command `npm run build`, output dir `dist`
- **GitHub Pages:** push `dist/` or use an action

---

Built with ❤️ using React, Vite & Tailwind CSS.
