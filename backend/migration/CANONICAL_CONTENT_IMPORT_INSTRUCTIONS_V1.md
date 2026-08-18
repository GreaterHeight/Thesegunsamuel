# Canonical Content Import — Required Source Package

## Blog

The Blog build specification explicitly says the reference HTML files contain illustrative example posts and that the real list of Blog posts must come from the site owner.

Therefore this migration package does **not** import the example titles, teasers or bodies from `Blog-Hub-Reference.html` or `Blog-Post-Reference.html` as production content.

Required real Blog data:

| Field | Required |
|---|---|
| slug | Yes |
| title | Yes |
| date | Yes |
| topic(s) | Yes |
| teaser | Yes |
| body | Yes |
| read time | Recommended |
| hero image | If assigned |
| audio | If assigned |

## Forbidden

The Forbidden specification has the same source-of-truth rule: its reference HTML contains illustrative examples and must not be treated as the real production post catalogue.

Required real Forbidden data:

| Field | Required |
|---|---|
| slug | Yes |
| title | Yes |
| date | Yes |
| topic(s) | Yes |
| teaser | Yes |
| body | Yes |
| read time | Recommended |
| hero image | If assigned |
| in-essay images | If assigned |
| audio | If assigned |

## Import policy

The migration will preserve the supplied content rather than rewrite it.

The importer will create:
- one canonical `content_items` record;
- tags;
- media references;
- explicitly supported relationships.

It will not invent:
- new titles;
- new categories;
- new relationships;
- aliases;
- dates;
- bodies.

## Current blocker

The current source set provides the architecture and reference templates but not the real production Blog/Forbidden content lists.

Therefore the backend is ready, but canonical content import is intentionally waiting for the real content manifest.
