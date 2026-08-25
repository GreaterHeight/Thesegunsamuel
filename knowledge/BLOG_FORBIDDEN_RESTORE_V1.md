# Blog + Forbidden Restore v1

## Restored production content

- Blog · Declassified: 12 supplied canonical essays
- Forbidden: 10 supplied canonical essays
- Total: 22 canonical essays

## Routes

- `/blog/`
- `/blog/[slug]/`
- `/forbidden/`
- `/forbidden/[slug]/`

## Behaviour

### Blog
- Live text search
- Topic filtering
- Pagination (6 per page)
- Result count
- Individual detail pages
- Shared global navigation

### Forbidden
- Same discovery mechanics as Blog
- Distinct publication identity
- Reading-threshold experience
- Session-based entry state
- Detail pages
- Shared global navigation

## Content fidelity

The article bodies are sourced from the supplied canonical migration staging data. No new article body content was invented.

## Media

The supplied canonical migration data does not include production hero/audio/in-essay media assignments. No fabricated media has been attached. Media can be connected later through `content_media`.

## Backend

The canonical content staging SQL remains available under `backend/migration/003_blog_forbidden_content_staging.sql`.

## QA

- 12 Blog detail pages generated.
- 10 Forbidden detail pages generated.
- 2 hub pages generated.
- Required global navigation links present.
- Forbidden content is hidden until the reading threshold is entered.
