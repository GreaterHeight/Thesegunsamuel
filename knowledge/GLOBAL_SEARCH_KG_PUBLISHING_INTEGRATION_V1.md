# Global Search + Knowledge Discovery Integration v1

## Scope

Integrated the 22 restored canonical Blog/Forbidden articles into the existing Global Search and Knowledge Graph layers.

## Counts

- Blog content nodes: 12
- Forbidden content nodes: 10
- Publication nodes: 2
- Search index records: 62
- Knowledge Graph entities: 86
- Knowledge Graph relationships: 160
- Unified relationship registry: 195

## Canonical publication nodes

- `PUB-001` — Blog · Declassified — `/Thesegunsamuel/blog/`
- `PUB-002` — Forbidden — `/Thesegunsamuel/forbidden/`

## Explicit relationships added

Each restored article has one explicit `contains` relationship from its publication node.

No Framework, Book, Podcast, Course or other relationship was invented merely from topical similarity.

## Search

The 22 articles are now present in:
- `assets/knowledge-index.json`
- `data/ecosystem-search.json`

The existing global search page dynamically derives its content-type filter from the index, so Blog/Forbidden become searchable without a hard-coded filter list.

## Knowledge Graph

The canonical graph and the Explore graph copy are synchronized.

The unified relationship registry now includes the publication-to-content edges.

## Integrity

- Missing search records for restored articles: 0
- Restored content nodes missing routes: 0
- Publication-to-content edges: 22

## Boundary

Only relationships supported directly by canonical publication identity were added.

Topic similarity was not promoted to a Knowledge Graph relationship because exact canonical concept matches were not present in the existing graph.

This preserves the rule:

**Relationships must be explicit, not guessed.**

## Next step

The next knowledge-discovery enhancement should be **human-verified semantic relationship mapping** between the 22 articles and existing Frameworks, Books, Podcast episodes, Courses and Models.

That should be done from actual content/IP evidence, not keyword similarity alone.
