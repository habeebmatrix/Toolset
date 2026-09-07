# Utiltrix Toolkit — Tools & Categories Catalog

This document tracks every category and tool on **Utiltrix Toolkit**
(`https://tools.utiltrix.com`). It is the human-readable companion to the single
source of truth in [`src/data/tools.ts`](src/data/tools.ts).

> **Keep in sync:** When you add, rename, or change the status of a tool in
> `src/data/tools.ts`, update this file too.

## Status legend

| Badge | Meaning |
|-------|---------|
| ✅ Ready | `isReady: true` — page built and live |
| 🚧 Planned | `isReady: false` — registered but page not yet built |
| ⭐ Featured | `featured: true` — surfaced on the homepage |
| 🆕 New | `isNew: true` — flagged as recently added |

## Summary

- **Categories:** 9
- **Tools registered:** 25
- **Tools live (ready):** 21
- **Tools planned:** 4
- **Built pages:** 34

---

## 1. Math
**Slug:** `math` · **Accent:** `#4F46E5`
Solve everyday math problems instantly — percentages, ratios, averages, and more.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Percentage Calculator | `percentage-calculator` | ✅ ⭐ | Find X% of Y, percentage change, increase/decrease, add/subtract a percentage. |
| Ratio Calculator | `ratio-calculator` | ✅ | Simplify ratios, solve proportions, scale up or down. |
| Average Calculator | `average-calculator` | ✅ | Mean, median, mode, and range from a list of numbers. |

## 2. Finance
**Slug:** `finance` · **Accent:** `#059669`
Smarter financial decisions — interest, loans, ROI, and savings.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Compound Interest Calculator | `compound-interest-calculator` | ✅ ⭐ | Growth with monthly/quarterly/annual compounding + year-by-year breakdown. |
| Loan EMI Calculator | `loan-emi-calculator` | ✅ | Monthly repayment, total interest, full amortisation schedule. |
| Tip Calculator | `tip-calculator` | ✅ | Calculate tips and split the bill between any number of people. |
| Investment Calculator (SIP & Lumpsum) | `investment-calculator` | ✅ ⭐ 🆕 | SIP, lumpsum, or both combined, with annual step-up and year-by-year growth. |
| Mortgage Payment Calculator | `mortgage-calculator` | ✅ ⭐ 🆕 | Monthly payment with tax/insurance/HOA/PMI and amortisation by year and month. |

## 3. Health & Fitness
**Slug:** `health` · **Accent:** `#DC2626`
Science-backed health metrics.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| BMI Calculator | `bmi-calculator` | ✅ | Body Mass Index with metric/imperial units and a visual range indicator. |
| Calorie Calculator | `calorie-calculator` | ✅ | BMR & TDEE via Mifflin-St Jeor, with loss/maintain/gain targets. |

## 4. Date & Time
**Slug:** `date-time` · **Accent:** `#D97706`
Work with dates and times easily.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Days Between Dates | `days-between-dates` | ✅ | Exact days, weeks, months, and working days between two dates. |
| Age Calculator | `age-calculator` | ✅ | Exact age in years/months/days, total days lived, next birthday countdown. |

## 5. Text & Writing
**Slug:** `text` · **Accent:** `#7C3AED`
Text utilities for writers, developers, and students.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Word & Character Counter | `word-counter` | ✅ | Words, characters, sentences, paragraphs, reading/speaking time. |
| Text Case Converter | `case-converter` | ✅ | Upper, lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case. |

## 6. Automotive
**Slug:** `automotive` · **Accent:** `#B45309`
Vehicle calculators for every driver.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Tyre Age Calculator | `tyre-age-calculator` | ✅ ⭐ | Tyre age & safety assessment from the 4-digit DOT date code. |
| Fuel Cost Calculator | `fuel-cost-calculator` | ✅ | Trip fuel cost from distance, efficiency, and price (imperial/metric). |
| MPG & Fuel Efficiency Calculator | `mpg-calculator` | ✅ | Calculate MPG and convert between MPG, L/100km, and km/L. |
| Tyre Pressure Converter | `tyre-pressure-converter` | ✅ | Convert tyre pressure between PSI, bar, and kPa instantly. |
| Car Depreciation Calculator | `car-depreciation-calculator` | ✅ | Current value & total depreciation with a year-by-year breakdown. |
| Road Trip Cost Calculator | `road-trip-cost-calculator` | ✅ | Full trip cost (fuel, hotel, food) with per-person split. |
| GPS Speedometer | `gps-speedometer` | ✅ 🆕 | Real-time GPS speed as an analog gauge + digital readout, with session stats. |

## 7. Office & Design
**Slug:** `office-design` · **Accent:** `#1D4ED8`
Practical tools for the office and creative work.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Test Print Page | `test-print-page` | ✅ ⭐ 🆕 | Printer test page: colour accuracy, grayscale, ink coverage, gradients, text legibility, alignment, and a 1 cm grid. |

## 8. Unit Converters
**Slug:** `converters` · **Accent:** `#0891B2`
Convert any unit to any other unit.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| Length Converter | `length-converter` | 🚧 | Metres, km, cm, feet, inches, yards, miles. |
| Temperature Converter | `temperature-converter` | 🚧 | Celsius, Fahrenheit, Kelvin. |

## 9. Developer Tools
**Slug:** `developer` · **Accent:** `#0F172A`
Handy tools for developers.

| Tool | Slug | Status | Description |
|------|------|--------|-------------|
| JSON Formatter | `json-formatter` | 🚧 | Format, validate, and minify JSON. |
| Base64 Encoder / Decoder | `base64-encoder` | 🚧 | Encode text to Base64 and decode back. |

---

## URL structure

Every tool lives at:

```
https://tools.utiltrix.com/<category-slug>/<tool-slug>/
```

Each category has an index page at:

```
https://tools.utiltrix.com/<category-slug>/
```

## Adding a new tool

> **The sitemap is generated at build time — never edit it by hand.**
> Adding a page is not enough; you must rebuild or the live sitemap will not
> contain the new URL. Full details in [`CLAUDE.md`](CLAUDE.md).

1. Add the tool object to the `tools` array in [`src/data/tools.ts`](src/data/tools.ts)
   with `isReady: true` and rich `tags` (include regional spelling variants).
2. Create `src/pages/<category-slug>/<tool-slug>/index.astro`, wrapping content in
   `<ToolLayout tool={tool} faqs={faqs} seoTitle={…} seoDescription={…} alsoKnownAs={…}>`.
3. **Run `npm run build`** — this regenerates `dist/sitemap-index.xml` and
   `dist/sitemap-0.xml`. Confirm the page count increased and there are no errors.
4. **Verify the URL landed in the sitemap:**
   ```bash
   npm run sitemap:list | grep <tool-slug>
   ```
5. Update the relevant table in this file and the counts in the Summary section.
6. Commit, push, and deploy the rebuilt `dist/`.

## Sitemap

| | |
|---|---|
| Generated by | `@astrojs/sitemap` (configured in `astro.config.mjs`) |
| Output | `dist/sitemap-index.xml` + `dist/sitemap-0.xml` |
| Regenerated | On every `npm run build` — automatically, from the built pages |
| Submit to Google | `https://tools.utiltrix.com/sitemap-index.xml` (once only) |
| Inspect locally | `npm run sitemap:list` |

There is no sitemap file in `src/` or `public/` to edit. If a URL is missing from the
sitemap, the cause is always that the page did not build or the tool was not registered
in `src/data/tools.ts`.
