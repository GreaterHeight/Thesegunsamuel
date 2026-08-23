# Ecosystem Relationship Graph v3

The global discovery system now consumes the complete explicit relationship layer.

## Relationship coverage
- 138 explicit relationships from the canonical Knowledge Graph.
- 4 additional `USES_FRAMEWORK` relationships derived from existing case-study page metadata.
- 142 total registered relationships.

## Explicit relationship types
- part_of
- contains
- related_to
- source_of
- connects_to
- teaches
- possible_alias_of
- delivered_through
- extends
- demonstrates
- USES_FRAMEWORK

## Integrity rule
No relationship is inferred merely from keyword similarity. Search and Explore display only registered relationships.

## Discovery impact
Global Search and Explore now consume `knowledge/data/knowledge-relationships.json` rather than the earlier reduced relationship subset.
