# Utiltrix Toolkit (https://tools.utiltrix.com/)

**Free Online Calculators & Tools — Fast, No Signup**

A growing collection of free, browser-based utility tools organised by category. Built as a fully static site for maximum performance and SEO.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | [Astro 4](https://astro.build) (static output) | Zero JS by default, component model, TypeScript, sitemap built-in |
| Styling | Vanilla CSS with custom properties | No runtime overhead, full dark/light mode support |
| Scripting | Vanilla JavaScript (`<script>` per page) | No framework bundle — each tool only ships what it needs |
| Hosting | Cloudflare Pages | Static deploy, global CDN, no adapter needed |
| Content (blog) | Astro Content Collections (Markdown) | Type-safe frontmatter, auto-routes, no CMS dependency |

No CSS frameworks (Tailwind, Bootstrap). No JS frameworks (React, Vue, Svelte). No client-side router. Every interactive tool is self-contained vanilla JS in its own page file.

---

## Project Structure

```
toolset/
├── public/
│   ├── favicon.svg          # SVG favicon (indigo rounded-square with three lines)
│   └── robots.txt           # Points to sitemap-index.xml
│
├── src/
│   ├── data/
│   │   └── tools.ts         # ★ SINGLE SOURCE OF TRUTH for all tools and categories
│   │
│   ├── components/
│   │   ├── SEO.astro        # <title>, meta, canonical, OG, Twitter, JSON-LD injection
│   │   ├── Header.astro     # Sticky header, desktop nav, mobile drawer, theme toggle
│   │   ├── Footer.astro     # Category links, site links, copyright
│   │   └── ToolCard.astro   # Card component used in grids (links to ready tools, shows "Soon" badge otherwise)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro # HTML shell: <head> (theme script + SEO), Header, Footer, <slot />
│   │   └── ToolLayout.astro # Wraps BaseLayout; adds breadcrumb, tool header, sidebar, FAQ accordion
│   │
│   ├── pages/
│   │   ├── index.astro                                    → /
│   │   ├── math/
│   │   │   ├── index.astro                                → /math/
│   │   │   └── percentage-calculator/
│   │   │       └── index.astro                            → /math/percentage-calculator/
│   │   ├── finance/
│   │   │   ├── index.astro                                → /finance/
│   │   │   └── compound-interest-calculator/
│   │   │       └── index.astro                            → /finance/compound-interest-calculator/
│   │   ├── health/index.astro                             → /health/
│   │   ├── date-time/index.astro                          → /date-time/
│   │   ├── text/index.astro                               → /text/
│   │   ├── converters/index.astro                         → /converters/
│   │   ├── developer/index.astro                          → /developer/
│   │   └── blog/
│   │       ├── index.astro                                → /blog/
│   │       └── [slug].astro                               → /blog/{slug}/
│   │
│   ├── content/
│   │   ├── config.ts        # Zod schema for blog collection frontmatter
│   │   └── blog/
│   │       └── *.md         # Blog post Markdown files
│   │
│   ├── styles/
│   │   └── global.css       # All styles: design tokens, reset, layout, components
│   │
│   └── env.d.ts             # Astro type references (auto-generated, do not edit)
│
├── astro.config.mjs          # Astro config: site URL, trailingSlash, sitemap integration
├── package.json
└── tsconfig.json
```

> **Generated at build time** (not committed): `dist/` and `.astro/` are both gitignored.

---

## Core Concepts

### 1. `src/data/tools.ts` is the registry — change it first

Every tool and category is defined here. Pages, cards, navigation, and sidebars all derive from this file. When adding a tool:

1. Add a `Tool` entry to the `tools` array in this file.
2. Create the corresponding page file.

Never hardcode tool names or URLs in component files — always read from `tools.ts`.

**Tool object shape:**
```ts
{
  slug: string;          // URL segment, e.g. 'percentage-calculator'
  name: string;          // Display name
  shortDescription: string; // One-line description used on cards
  description: string;   // Full description used in tool page header and SEO meta
  category: CategorySlug; // Must match a valid category slug
  tags: string[];        // Used for homepage search/filter
  featured?: boolean;    // Shows on homepage "Featured Tools" section
  isNew?: boolean;       // Shows green "New" badge on card
  isReady?: boolean;     // true = links to tool page; false = "Coming Soon" card (non-clickable)
}
```

**Category object shape:**
```ts
{
  slug: CategorySlug;    // URL segment, e.g. 'math'
  name: string;          // Display name
  description: string;   // Short description (used on category cards)
  longDescription: string; // Full description (used in category page hero)
  icon: string;          // Inline SVG string rendered with set:html
  accentColor: string;   // Hex color for the category icon background
}
```

---

### 2. URL structure

URLs follow the pattern `/{category}/{tool-slug}/` with trailing slashes enforced by `trailingSlash: 'always'` in `astro.config.mjs`. Cloudflare Pages serves `index.html` files from these directories automatically.

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/math/` | `src/pages/math/index.astro` |
| `/math/percentage-calculator/` | `src/pages/math/percentage-calculator/index.astro` |
| `/blog/` | `src/pages/blog/index.astro` |
| `/blog/how-to-calculate-percentage/` | `src/content/blog/how-to-calculate-percentage.md` (rendered by `src/pages/blog/[slug].astro`) |

---

### 3. Layout inheritance

```
BaseLayout.astro
  └── ToolLayout.astro   (used by all tool pages)
  └── (used directly by category pages, homepage, blog pages)
```

**BaseLayout** handles everything in `<head>`: the no-flash theme script, SEO component, favicon, viewport, and `theme-color` meta. It also renders Header and Footer.

**ToolLayout** adds the two-column page grid (main content + sidebar), breadcrumb navigation, tool header, FAQ accordion, and injects the correct JSON-LD schemas (SoftwareApplication, BreadcrumbList, FAQPage).

---

### 4. SEO component (`src/components/SEO.astro`)

Injected by BaseLayout. Accepts:

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | required |
| `description` | `string` | required |
| `canonical` | `string` | current page URL |
| `ogImage` | `string` | `/og-default.png` |
| `ogType` | `'website' \| 'article'` | `'website'` |
| `jsonLd` | object or array | — |
| `noindex` | `boolean` | `false` |

If `title` does not already contain "Utiltrix Toolkit", the component appends " | Utiltrix Toolkit" automatically.

The canonical URL is always built from `https://tools.utiltrix.com` + the current pathname. **The site URL must be updated in `astro.config.mjs` (`site:` field) and in `SEO.astro` when the real domain is confirmed.**

---

### 5. JSON-LD structured data

ToolLayout automatically generates three schemas for tool pages:

- `SoftwareApplication` — describes the tool itself (name, description, free offer)
- `BreadcrumbList` — home → category → tool
- `FAQPage` — only added when the `faqs` prop is non-empty

The homepage uses `WebSite` schema with a `SearchAction` (for Google Sitelinks Searchbox eligibility).

Blog posts use `BlogPosting` schema with `datePublished`, `dateModified`, and `author`.

---

### 6. Theme system

Dark/light mode is controlled by a `data-theme` attribute on `<html>`:

- `<html data-theme="light">` → light theme (default)
- `<html data-theme="dark">` → dark theme

CSS selectors in `global.css`:
- `:root` defines the **light** theme tokens
- `[data-theme="dark"]` overrides to dark tokens

An inline `<script is:inline>` in `BaseLayout.astro` runs **before paint** to read `localStorage.getItem('theme')`, falling back to `window.matchMedia('(prefers-color-scheme: dark)')`. This prevents any flash of wrong theme on load.

The toggle button in `Header.astro` writes the choice back to `localStorage` and updates `document.documentElement.dataset.theme`.

**Do not** use `@media (prefers-color-scheme: dark)` for new component styles. Use `[data-theme="dark"] .your-class` instead, so manual overrides are respected.

---

### 7. CSS architecture

All styles live in `src/styles/global.css`. There are no CSS modules or scoped styles. The file is structured as:

1. Design tokens (CSS custom properties on `:root`)
2. Dark theme overrides (`[data-theme="dark"]`)
3. CSS reset
4. Typography helpers
5. Layout utilities (`.container`, `.sr-only`)
6. Header styles
7. Footer styles
8. Hero section
9. Search bar
10. Section titles
11. Category cards (`.categories-grid`, `.category-card`)
12. Tool cards (`.tools-grid`, `.tool-card`)
13. Page sections
14. Breadcrumb
15. Tool page layout (two-column grid)
16. Calculator widget (tabs, panels, inputs, buttons, result box)
17. Tool sidebar
18. FAQ accordion
19. Content prose (blog/article pages)
20. Category hero
21. Blog cards
22. Responsive data table
23. Utility classes

**Design tokens** (key values to stay consistent with):
```css
--color-primary: #4F46E5     /* Indigo — brand colour */
--color-bg: #FFFFFF          /* Page background */
--color-bg-secondary: #F8FAFC /* Slightly off-white, used for cards/sections */
--color-bg-card: #FFFFFF
--color-border: #E2E8F0
--color-text: #0F172A
--color-text-secondary: #475569
--color-text-muted: #94A3B8
--font-sans: system font stack (no web fonts loaded)
--max-width: 1200px
```

---

### 8. Tool page pattern

Every tool page follows this structure:

```astro
---
import ToolLayout from '../../../layouts/ToolLayout.astro';
import { tools } from '../../../data/tools';

const tool = tools.find((t) => t.slug === 'your-tool-slug')!;

const faqs = [
  { q: 'Question?', a: 'Answer.' },
];
---

<ToolLayout tool={tool} faqs={faqs}>
  <!-- Calculator widget HTML -->
  <div class="calculator" role="region" aria-label="Your tool name">
    ...
  </div>

  <!-- Optional explainer prose for SEO -->
  <section class="mt-8 prose" aria-labelledby="how-it-works">
    <h2 id="how-it-works">How It Works</h2>
    <p>...</p>
  </section>
</ToolLayout>

<script>
  // Vanilla JS for the tool's interactivity
</script>
```

The `<script>` tag is processed by Astro/Vite — TypeScript is supported. Each tool's script is bundled separately; they do not share a bundle.

The `.calculator` widget uses these CSS classes from `global.css`:
- `.calc-tabs` / `.calc-tab` / `.calc-tab.active` — tab bar
- `.calc-panel` / `.calc-panel.active` — tab content
- `.field-group`, `.field`, `.field-row`, `.field-sep` — form layout
- `.input`, `.select` — form controls
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-full` — buttons
- `.result-box` / `.result-box.visible` — animated result display
- `.result-label`, `.result-value`, `.result-formula` — result text

---

### 9. Blog / content posts

Blog posts are Markdown files in `src/content/blog/`. The schema (defined in `src/content/config.ts`) requires:

```yaml
---
title: string          # required
description: string    # required — used in SEO meta
pubDate: date          # required — ISO 8601 or natural date string
updatedDate: date      # optional
author: string         # defaults to "Utiltrix Toolkit Team"
tags: string[]         # first tag shown as category label on card
relatedTools: string[] # tool slugs — for future related-tools widget
featured: boolean      # defaults to false
---
```

The slug used in the URL is the filename without `.md`. File `how-to-calculate-percentage.md` → `/blog/how-to-calculate-percentage/`.

---

### 10. Sitemap and robots

`sitemap-index.xml` is auto-generated by `@astrojs/sitemap` at build time and written to `dist/`. All pages under `src/pages/` are included automatically. The sitemap URL in `robots.txt` must match the `site` value in `astro.config.mjs`.

**Live domain:** `https://tools.utiltrix.com`

**Sitemap URL (submit to Google Search Console):**
```
https://tools.utiltrix.com/sitemap-index.xml
```

> ⚠️ **Always rebuild after adding, renaming, or removing a page.** The sitemap is
> generated from the built output, so a new tool will be missing from the live sitemap
> until you run `npm run build` and redeploy `dist/`. Never edit the sitemap by hand.
>
> Verify a new URL made it in:
> ```bash
> npm run sitemap:list | grep <tool-slug>
> ```
>
> Full checklist in [`CLAUDE.md`](CLAUDE.md) and [`TOOLS.md`](TOOLS.md).

---

## Adding a New Tool (step-by-step)

**1. Register it in `src/data/tools.ts`:**
```ts
{
  slug: 'tip-calculator',
  name: 'Tip Calculator',
  shortDescription: 'Split the bill and calculate tips instantly.',
  description: 'Calculate how much to tip and split the total between any number of people.',
  category: 'finance',
  tags: ['tip calculator', 'split bill', 'gratuity'],
  featured: false,
  isReady: true,   // set to true once the page exists
}
```

**2. Create the page file:**
```
src/pages/finance/tip-calculator/index.astro
```

**3. Use ToolLayout, look up the tool, build the widget:**
```astro
---
import ToolLayout from '../../../layouts/ToolLayout.astro';
import { tools } from '../../../data/tools';
const tool = tools.find((t) => t.slug === 'tip-calculator')!;
---
<ToolLayout tool={tool} faqs={[]}>
  <!-- your calculator markup -->
</ToolLayout>
<script>/* your calculator logic */</script>
```

**4. Run `npm run build` and confirm the page appears in the build output.**

The tool will automatically appear on the homepage, the Finance category page, and in the search/filter. The breadcrumb, sidebar, SEO tags, and JSON-LD are all inherited from ToolLayout.

---

## Adding a New Category

1. Add a `Category` entry to the `categories` array in `src/data/tools.ts`. Choose a slug that is URL-safe (lowercase, hyphens only).
2. Add the `CategorySlug` union type to the `CategorySlug` type in the same file.
3. Create `src/pages/{slug}/index.astro` following the same pattern as `src/pages/math/index.astro`.
4. The category will appear in the Header nav, Footer, and Homepage grid automatically (Header shows the first 5 categories; to change this, edit the `navCategories` slice in `Header.astro`).

---

## Development Commands

```bash
npm run dev      # Start local dev server at http://localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview the built dist/ locally
```

---

## Deployment (Cloudflare Pages)

The site is purely static (`output: 'static'` — Astro's default). No adapter or server-side runtime is needed.

Cloudflare Pages build settings:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18 or above

Trailing slashes are handled by Astro (`trailingSlash: 'always'`). Cloudflare Pages serves `index.html` files from subdirectories automatically, so no `_redirects` file is needed for routing.

---

## What Not to Change

| File / Pattern | Reason |
|---|---|
| `src/env.d.ts` | Auto-generated by Astro — do not edit |
| `astro.config.mjs` `trailingSlash: 'always'` | Changing this breaks all existing URLs and sitemap entries |
| `:root` CSS variable names | Used by name across all component styles — renaming breaks the design system |
| `[data-theme]` attribute selector pattern | Used by the inline theme script in BaseLayout — do not switch back to `@media (prefers-color-scheme)` |
| `is:inline` on the theme `<script>` in BaseLayout | This attribute tells Astro not to process/defer the script — it must run synchronously before paint to avoid theme flash |
| `src/data/tools.ts` exported function signatures | `getCategory`, `getToolsByCategory`, `getFeaturedTools`, `getReadyTools` are imported in multiple pages |
