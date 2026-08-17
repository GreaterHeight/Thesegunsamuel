# Knowledge Relationship System v2

## Purpose
Turn the existing Knowledge Graph from a searchable catalogue into a relationship-aware knowledge system.

## Relationship sources
1. `explore/data/knowledge-graph.json`
   - `parent_id` becomes `PARENT`
   - `related_ids` becomes `RELATED`
2. Existing framework registry and case-study page metadata
   - explicit framework labels on case-study pages become `USES_FRAMEWORK`
3. No semantic relationship is promoted to confirmed unless the source already establishes it.

## Explore
`/explore/` now:
- searches the canonical graph;
- filters by entity type;
- shows node counts and registered relationship counts;
- displays registered connections on each result;
- links to routed entities where a route exists.

## Detail pages
Framework and case-study detail pages expose a reusable Connected Knowledge section.

## Current scale
The relationship registry is derived from the current build. It is intentionally conservative: missing relationships are left unresolved rather than invented.

## Next evolution
The next knowledge-system stage can formalise the broader ecosystem graph:
Book ↔ Framework ↔ Course ↔ Learning Path ↔ Case Study ↔ Podcast ↔ Article/Insight ↔ Application,
but only after each edge is explicitly approved/registered.
