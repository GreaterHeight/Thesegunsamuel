# Programme 7 — Platform Infrastructure & Production Readiness v1

## Static QA
- HTML pages scanned: 289
- Duplicate-ID defects: 0
- Missing title defects: 0
- Missing meta-description defects: 0
- Missing canonical defects (excluding 404): 0
- Sitemap URLs: 206 unique
- Sitemap targets missing: 0
- Non-Podcast missing local references: 0
- Parked Podcast references: 21
- Missing JS/CSS references: 0

Podcast references are deliberately untouched because Podcast is parked under **Resume Podcast**.

## Accessibility
- Keyboard skip-to-content link added.
- Main content target standardized as `#main-content`.
- Image alt attributes audited.

## SEO / discovery
- robots.txt present.
- sitemap.xml present.
- llms.txt present.
- Canonicals verified.
- Meta descriptions verified.

## Production boundary
This repository is a static GitHub Pages frontend. Production authentication, database persistence, payment verification/webhooks, server-side learning entitlements, transactional email, analytics and response security headers require backend/edge infrastructure.

Recommended architecture:

`Static Frontend → API/Backend → Database`

`Payment Provider → Webhook → Order Verification → Enrollment Entitlement → Student Access`

`Consent → Analytics`

`Edge/CDN → Security Headers`
