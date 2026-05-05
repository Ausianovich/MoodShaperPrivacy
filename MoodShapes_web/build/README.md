# MoodShapes_web build

Renders the canonical legal markdown into the static site:

- `../../PRIVACY.md` → `../privacy.html`
- `../../EULA.md`   → `../eula.html`

`../index.html` is hand-authored and is **not** produced by this script.

## Usage

```bash
cd MoodShapes_web/build
npm install      # one-time, installs `marked`
npm run build    # rewrites privacy.html and eula.html
```

Workflow when legal text changes: edit `PRIVACY.md` or `EULA.md` at the
repo root → `npm run build` → commit the `.md` source plus the
regenerated `.html` files together.

## What the script does

| Step | Behavior |
|---|---|
| 1. Parse | `marked` (GFM) renders Markdown → HTML |
| 2. Dates | `**Effective date:**` / `**Last updated:**` extracted, formatted as `5 May 2026` |
| 3. Strip H1 | Drops the leading `# Title` so the page `<h1>` is not duplicated |
| 4. Strip HRs | Removes `<hr>` between sections (sections already have a top border) |
| 5. Tables | Wraps `<table>` in `<div class="table-wrap">` for mobile scrolling |
| 6. Callouts | `<blockquote>` → `<div class="callout">`; keyword match adds `.warn` (Important / READ CAREFULLY) or `.danger` (NOT A MEDICAL DEVICE / emergency) |
| 7. Sections | Each H2 becomes `<section id="sN">` with a `Section N` tag; leading `N. ` prefix stripped from H2 text |
| 8. TOC | Auto-generated from H2 list, anchored to `#sN` |
| 9. Slot | Filled into `template.html` together with per-page metadata (title, lede, TL;DR chips, cross-link card) |

## Editing the template / per-page bits

- Layout, navigation, header shell, footer: `template.html`
- Per-page metadata (title, kicker, hero copy, TL;DR chips, cross-link target): the `PAGES` array at the top of `build.mjs`
- Visual styles (colors, callouts, tables, TOC): `../assets/site.css`
