# Developer Guide: Local Spotlight Mail Site

This guide provides technical reference for developer agents and engineers working on the `localspotlightmail-site` codebase.

---

## 1. Codebase Architecture

The project is built on **Next.js** and TypeScript. It features a single-page landing site that dynamically re-renders based on the active campaign location/town.

```mermaid
graph TD
    A[app/[slug]/page.tsx] -->|Delegates slug via initialSlug| B[app/page.tsx]
    C[app/page.tsx] -->|Imports data| D[data/townAverages.ts]
    C -->|Imports routing layouts| E[data/routes.ts]
```

### Core Code Files:
- [app/page.tsx](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/app/page.tsx): Contains the complete landing page implementation, state management (active slug, active postcard side, billing duration, contact form), and CSS styling classes.
- [app/[slug]/page.tsx](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/app/%5Bslug%5D/page.tsx): Dynamic location path segment. Automatically forwards paths like `/lake-mary` or `/sanford` to the root `page.tsx` as `initialSlug`.
- [data/townAverages.ts](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/data/townAverages.ts): Defines the `TownAverage` interface and maps all demographics, card type, standard price numbers, and assets path for the 5 target cities.
- [data/routes.ts](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/data/routes.ts): Stores the layout arrays and slots definitions for the standard 9x12 and community 6x11 postcard slot previews.

---

## 2. Naming & Path Constraints
* **Slugs MUST use hyphens:** All slug keys must use exact hyphenated styling:
  - `altamonte-springs`
  - `lake-mary`
  - `markham-woods`
  - `sanford`
  - `wekiva-springs`
* **Route Resolution Fallbacks:** When slug parameter is missing or invalid, resolve to `"altamonte-springs"` as the first alphabetical town and root fallback.

---

## 3. Data Flow and Synchronization
* **Town Averages CSV:** The spreadsheet `town averages.csv` represents the operational source of truth. Whenever this file is changed, the updates must be manually applied to [data/townAverages.ts](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/data/townAverages.ts) and [data/routes.ts](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/data/routes.ts).
* **Per Door Pricing:** Per door pricing is computed dynamically inside [app/page.tsx](file:///Users/kyle/Documents/projects/9x12-method/localspotlightmail-site/app/page.tsx) using the `getPricePerDoor` method:
  `cost = (discountedPrice / doorsCount) * 100` rounded to the nearest integer cent. For standard spots under 1 month commitments, this rounds to exactly `10¢`.
* **Savings Copy:** Cost savings statements throughout the site must reflect the latest co-op calculations, which is currently `83%` / `83%+` cost reduction compared to running solo direct mail runs.

---

## 4. Maintenance Commands

### Start local dev server:
```bash
npm run dev
```

### Validate TS and build package:
```bash
npm run build
```

### Lint checks:
```bash
npm run lint
```
