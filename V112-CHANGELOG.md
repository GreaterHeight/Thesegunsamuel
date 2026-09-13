# V112 — Guides & Ebooks Precision Pass

## Scope
- Removed the visible breadcrumb from `/ebooks-guides/`.
- Removed the now-stale BreadcrumbList JSON-LD from the page.
- Added explicit high-contrast styling for the **Free Guides** section label.
- Reworked **Who This Is For** into a restrained three-column editorial audience treatment that collapses cleanly on smaller screens.
- Rebuilt the **NEWSLETTER CTA** styling to match the supplied reference: deep green field, centered hierarchy, mint eyebrow, cream/teal headline treatment, short gradient rule, and compact crimson newsletter button.
- No guide content, forms, modal behavior, navigation, footer, or commerce functionality was changed.

## V113 — Cookie Consent Editorial Redesign
- Replaced the previous compact dark cookie banner with a full-width editorial privacy panel based on the supplied reference window.
- Added **PRIVACY** eyebrow, **Your cookie choices** heading, explanatory copy, and **READ OUR COOKIE POLICY** link.
- Reordered consent actions into **ACCEPT ALL**, **REJECT NON-ESSENTIAL**, and **MANAGE PREFERENCES**.
- Updated consent logic so **ACCEPT ALL** enables both optional analytics and marketing preferences, while **REJECT NON-ESSENTIAL** keeps both disabled.
- Preserved the existing `/cookie-preferences/` management route and localStorage consent key.
- Added responsive layouts and visible keyboard focus states.
