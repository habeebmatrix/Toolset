# Utiltrix Toolkit — Project Guide

Static utility-tool website built with **Astro 4**, deployed at `https://tools.utiltrix.com`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build → dist/ (ALSO regenerates the sitemap)
npm run preview    # preview the production build
npm run sitemap:list   # print every URL currently in the built sitemap
```

## Architecture

- **`src/data/tools.ts`** — the single source of truth for every tool and category.
  Nothing is auto-discovered from the filesystem: a tool must be registered here to
  appear on the homepage, in category listings, or in navigation.
- **`src/layouts/ToolLayout.astro`** — wraps every tool page. Emits breadcrumbs,
  related-tool links, the FAQ accordion, and JSON-LD (`SoftwareApplication`,
  `BreadcrumbList`, and `FAQPage` when `faqs` are supplied).
- **`src/components/SEO.astro`** — title, meta description, canonical, Open Graph,
  Twitter cards, and JSON-LD injection.
- **Routing** — file-based. `src/pages/<category>/<tool>/index.astro` becomes
  `/<category>/<tool>/`. `trailingSlash: 'always'` is enforced in `astro.config.mjs`.
- **No client framework.** Tool logic is vanilla TypeScript inside a `<script>` tag,
  bundled per page. Styling uses CSS custom properties from `src/styles/global.css`;
  dark mode is driven by `[data-theme="dark"]`, not `prefers-color-scheme`.

---

## ⚠️ Sitemap: ALWAYS regenerate after adding or renaming a tool

The sitemap is **generated at build time** by `@astrojs/sitemap` from the pages Astro
actually outputs. It is **not** a file you edit by hand — there is no `sitemap.xml` in
`src/` or `public/`, and hand-editing `dist/` is always wrong because the next build
overwrites it.

This means: **adding a page is not enough. You must run `npm run build`,** or the
deployed sitemap will not contain the new URL and search engines will not discover it.

### Required steps when adding any new tool

1. **Register the tool** in `src/data/tools.ts` (add to the `tools` array).
   Set `isReady: true`, otherwise the card renders as a "coming soon" placeholder.
2. **Create the page** at `src/pages/<category>/<tool-slug>/index.astro`,
   wrapping content in `<ToolLayout tool={tool} faqs={faqs}>`.
3. **Run `npm run build`.** This regenerates `dist/sitemap-index.xml` and
   `dist/sitemap-0.xml`. Confirm the page count increased as expected.
4. **Verify the new URL is in the sitemap:**
   ```bash
   npm run sitemap:list | grep <tool-slug>
   ```
   If it prints nothing, the page did not build — fix that before committing.
5. **Update `TOOLS.md`** — add a row to the relevant category table.
6. **Commit and push.** Deploy the freshly built `dist/` so the live sitemap updates.

### Also rebuild the sitemap when you

- rename or move a tool (its URL changes — the old URL must drop out of the sitemap),
- delete a tool or category,
- change `site` or `trailingSlash` in `astro.config.mjs`,
- add any new page anywhere under `src/pages/`.

The public sitemap index submitted to Google Search Console is
`https://tools.utiltrix.com/sitemap-index.xml`. It never changes, so it only needs
submitting once — but it only reflects reality after a rebuild and redeploy.

---

## SEO conventions for tool pages

Every tool page should carry all of the following. These are what actually drive
organic traffic, so treat them as required, not optional:

- **`seoTitle`** — under ~60 characters, leads with the primary keyword, and is
  *different* from the H1. Without it `ToolLayout` falls back to
  `"<name> — Free Online Calculator"`.
- **`seoDescription`** — 150–160 characters, contains the primary keyword and a
  concrete benefit. Do not let it default to the long `description` field.
- **`alsoKnownAs`** — array of real keyword variants people search for (e.g. a mortgage
  calculator is also a "home loan calculator" and a "PITI calculator"). Rendered under
  the H1 and captures long-tail queries.
- **5–7 FAQs** — these become `FAQPage` JSON-LD and are eligible for rich results.
  Write real questions people ask, and answer them in 2–4 sentences.
- **Long-form body content** below the calculator: an `<h2>` explaining how to use it,
  `<h3>` sections covering the formula, comparison tables, and practical guidance.
  Thin tool pages do not rank; aim for 600+ words of genuinely useful text.
- **Internal links** to 2–3 related tools in a "Related Calculators" list.
- **Rich `tags`** in `tools.ts` — include singular/plural and regional spelling
  variants (e.g. `tyre` and `tire`, `amortisation` and `amortization`).

## Content conventions

- British spelling in prose (`tyre`, `amortisation`, `centre`) — but include American
  variants in `tags` for search coverage.
- Amounts are currency-agnostic: plain formatted numbers with no currency symbol, so
  one page serves every market.
- Never invent ratings, review counts, or testimonials in JSON-LD.
