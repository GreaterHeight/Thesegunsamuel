# SegunSamuel Website — v3.5 Complete Website Foundation

This release uses **v2.2 — Books + Intellectual Property Library** as the clean base and consolidates the planned v2.3 through v3.5 website scope into one coherent build.

## Included
- Framework IP Registry and detail pages
- Models, Principles and Mental Models Registry
- Masterclasses and detail pages
- Learning Paths and detail pages
- Case Studies and detail pages
- Applications / Projects
- Podcast and episode pages
- Events and event pages
- Cart, quantity controls and removal
- Checkout architecture
- Paystack, Stripe, Bank Transfer and WhatsApp payment routes
- Nigerian Naira pricing/intake data architecture
- Student Area front-end architecture
- Global Explore / Knowledge Graph
- Search and cross-discovery
- Responsive and semantic refinements
- SEO metadata on generated pages
- Consolidated Knowledge Graph index
- Correct Markdown formatting

## Production boundary
Payment UI is implemented as front-end architecture. Live Stripe/Paystack processing requires secure backend integration, production credentials, server-side verification, webhooks and transaction persistence.

The Student Area is a front-end architecture. Real authentication, database-backed progress, access control and certificate issuance require a secure backend.

## Intellectual Architecture
Book / Originating Work
→ Framework
→ Model / Principle / Mental Model
→ Method / Operating System
→ Course / Masterclass
→ Learning Path
→ Case Study
→ Application / Evidence

Podcast, Insights and Events operate as distribution, conversation and engagement layers.

## Final website-foundation boundary
**v3.5 is the final numbered website-foundation release.**

Future work should be classified as:
1. Content / IP development
2. Maintenance / bug fixes
3. Backend / platform expansion

## Version history
### v1.7 — Commerce & Student Experience
Cart, quantity controls, checkout/payment routes and student dashboard front-end architecture.

### v1.8 — Knowledge Graph & Global Search
Unified Explore/search and cross-discovery architecture.

### v1.9 — Editorial Insights
Static editorial publishing architecture with Insights landing/detail pages and related concepts.

### v2.0 — Knowledge Graph Explorer
Dedicated graph interface, relationship metadata, connected-node discovery and filters.

### v2.1 — Personal Brand / Founder Experience
Founder-facing experience integrated into the wider knowledge ecosystem.

### v2.2 — Books + Intellectual Property Library
Books and originating intellectual-work architecture.

### v2.3–v3.5 — Consolidated
Framework IP, Models/Principles, Masterclasses, Learning Paths, Case Studies, Applications, Podcast, Events, Commerce, Student Area, Search/Knowledge Graph finalization and production-quality refinements are consolidated in this release.

## Important
This is a **complete website foundation**, not a claim that all intellectual content, payment credentials, authentication, backend services or production data have been populated.


## Global Navigation — v3.5 Navigation Fix

The website now uses one canonical navigation system across all HTML pages.

### Primary navigation
- Home
- Learn
  - Courses
  - Learning Paths
  - Masterclasses
- Think
  - Frameworks
  - Models & Principles
  - Books
  - Insights
- Apply
  - Case Studies
  - Applications
- Listen
- Events
- Explore
- Student Area
- Cart

The navigation is implemented centrally through `assets/js/global-nav.js` and a shared navigation structure. Page depth is handled automatically so deep pages do not change or break the menu.

### Design principle
The primary navigation represents the user's journey:

**Learn → Think → Apply → Listen → Explore**

Content types remain discoverable without forcing every content type into the top-level navigation.


## v1.7 Final Source QA Fix

The final uploaded source was structurally audited and corrected.

- 200 HTML pages audited.
- Global navigation normalized to one canonical shell.
- Global footer normalized to one canonical shell.
- All global shell internal links use the `/Thesegunsamuel/` canonical base.
- One broken Explore/Knowledge Graph dynamic route was fixed.
- Source-level release status: **GO**.
- Browser/deployment smoke testing remains the final external verification.
