# ay0503.github.io

My personal portfolio website. Built with Next.js and deployed via GitHub Pages.

**Live:** [ay0503.github.io](https://ay0503.github.io)

## Stack

- **Framework:** Next.js 14 (static export)
- **Styling:** Vanilla CSS with custom properties
- **Icons:** react-icons
- **Deployment:** GitHub Pages via GitHub Actions

## Structure

```
components/
  Nav.js          # Sticky nav with scroll tracking
  Hero.js         # Name, title, photo, socials
  About.js        # Bio + highlight cards
  Experience.js   # Work timeline
  Projects.js     # Project cards with links
  Skills.js       # Core tech chips
  Contact.js      # Email, LinkedIn, GitHub
  Footer.js       # Footer
pages/
  index.js        # Single-page layout
  _app.js         # Global head + CSS import
  _document.js    # HTML meta tags
styles/
  globals.css     # All styles (dark theme)
```

## Development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output goes to `./out/`.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/nextjs.yml`), which builds and deploys to GitHub Pages automatically.
