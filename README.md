# miguel-g-c portfolio

Personal site of Miguel García Casas, sustainability and backend engineer: calculation engines, life cycle assessment tooling and agentic systems for carbon accounting. Built with Astro and Tailwind CSS, deployed to GitHub Pages.

## Design notes

- One page, three sections on screen (experience, projects, contact). Education and a plain contact list are print-only and appear when you use the PDF button, which calls the browser's print dialog.
- Theme tokens live in `src/styles/global.css` as CSS variables and are exposed to Tailwind through `@theme inline`, so the same utilities serve light and dark. The toggle persists the choice in `localStorage`; without a saved choice the site follows the system preference.
- Project illustrations are inline SVG components in `src/components/Illustrations/`. They draw with `currentColor` and the `--accent` variable, so they follow the theme and the hover state.
- Section numbers come from a CSS counter, so print-only sections are numbered correctly in the PDF.

## Project structure

```text
/
├── public/            # favicon, avatar
├── src/
│   ├── components/    # UI pieces, Sections/ for page blocks, Illustrations/ for project art
│   ├── layouts/       # page shell, fonts, theme bootstrap
│   ├── pages/         # routes
│   └── styles/        # global.css: Tailwind, tokens, component classes
└── package.json
```

## Commands

Requires Node 22.23 or newer (the deploy workflow uses Node 24).

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally before deploying  |
| `npm run format`  | Format the sources with Prettier            |
