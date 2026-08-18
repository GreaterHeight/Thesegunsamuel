# Publishing Backend Integration v1

## Canonical identity

Every published intellectual object receives exactly one canonical `content_items` record.

The publication field identifies the system in which the canonical object lives.

Examples:

- Blog article → `blog_declassified`
- Forbidden dispatch → `forbidden`
- Newsletter issue → `newsletter`
- Editorial project → `editorial`
- Book → `books`
- Podcast episode → `podcast`

## Important rule

A newsletter may reference a Blog article without creating a duplicate Blog article record.

A Podcast episode may reference a Framework without becoming a second Framework record.

A Book may reference a Framework without duplicating the Framework.

The relationship belongs in `content_relationships`.

## Relationship vocabulary

Initial relationship types:

- `develops`
- `explains`
- `references`
- `extends`
- `curates`
- `interprets`
- `discusses`
- `teaches`
- `applies`
- `derived_from`
- `related_to`

Only substantively true relationships should be recorded.

## Global Search

Search should index `content_items`, tags and relationship metadata while preserving:

- publication
- content type
- canonical URL
- publication date
- status

This allows one global search experience without collapsing the identity of Blog, Forbidden, Newsletter, Editorial, Books, Podcast, Courses or Frameworks.

## Editorial

Editorial projects are containers/curatorial records. They point to canonical content through relationships instead of copying article bodies.

## Newsletter

Newsletter issues are canonical content objects with an optional `newsletter_issues` record.

An issue can be exclusive or can curate existing ecosystem objects.

## Forbidden

Forbidden remains a separate publication identity. Its content-warning threshold and visual behaviour belong to the frontend renderer, not to the publication identity itself.

## Migration principle

Existing static content should be imported as canonical records first.

Do not redesign or rewrite the content during migration.

The migration should preserve:
- slug
- title
- summary
- body
- date
- tags
- route
- media references
- publication identity

## Frontend consequence

The current static frontend can continue operating during the shadow-backend phase.

The backend becomes authoritative only after content import, authentication, publishing workflow and API read paths are verified.
