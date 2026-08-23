# Site Navigation — Blog + Forbidden Integration v1

## Completed

The canonical THINK dropdown now exposes:

1. THINK OVERVIEW
2. FRAMEWORKS
3. MODELS & PRINCIPLES
4. BOOKS
5. INSIGHTS
6. BLOG · DECLASSIFIED
7. EDITORIAL
8. FORBIDDEN
9. NEWSLETTER

### Canonical routes

- Blog · Declassified: `/Thesegunsamuel/blog/`
- Forbidden: `/Thesegunsamuel/forbidden/`

## Coverage

- Canonical `ss-primary-nav` files: 213
- Canonical files containing both Blog and Forbidden: 213
- Restored/custom Blog/Forbidden nav files: 24
- Restored/custom files containing both: 24

## Mobile

The existing `assets/js/global-nav.js` already controls the hamburger button and the same primary navigation DOM on mobile. Therefore adding the two links to the THINK dropdown automatically makes them available to the mobile navigation on canonical pages.

## Scope

No content was rewritten.

No new publication was created.

This change only exposes the already-restored Blog and Forbidden publications through the site navigation and aligns the THINK dropdown.

## QA rule

Both links must remain present in every canonical primary navigation:

`/Thesegunsamuel/blog/`

`/Thesegunsamuel/forbidden/`
