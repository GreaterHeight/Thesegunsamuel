# Knowledge Asset Canonicalisation v1

## Result

The 134 non-canonical Global Search assets were classified without silently merging content.

- **122** promoted to canonical entities.
- **8** retained as collection/landing pages.
- **4** held for editorial review because of same-type title collisions.

Canonical Knowledge Graph size is now **184 entities**.

## Duplicate groups held back

### Course
- Systems & Strategic Architecture — `/courses/systems-strategic-architecture/`
- Systems & Strategic Architecture — `/courses/systems-architecture/`

### Podcast
- The Architecture of Seeing — `/podcast/the-architecture-of-seeing/`
- Building Systems That Outlive You — currently carrying the same extracted title in the search metadata.

These were not merged because the available source material does not establish which one is canonical.

## Collection pages retained page-only

The following remain navigation infrastructure:
- Courses
- Books
- Podcast
- Insights
- Learning Paths
- Masterclasses
- Events
- Models

## Canonicalisation rule

A dedicated published detail page can become a first-class Knowledge Graph entity when:
1. it has its own route;
2. it is a substantive ecosystem asset;
3. it has no unresolved same-type title collision.

Cross-type title reuse is not treated as duplication. For example, a Book and a Model can legitimately share a title.

## New files

- `knowledge/data/canonical-asset-registry.json`
- `knowledge/data/knowledge-relationships.json` updated to canonical IDs
- `data/ecosystem-search.json` updated to canonical IDs
- `explore/data/knowledge-graph.json` expanded with promoted entities
