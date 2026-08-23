# Explore / Knowledge Graph — Final QA Notes

## Root cause
The page contained two independent Knowledge Graph renderers: the original `.results/.node` renderer and a second `#knowledgeGraphCards/.kg-card` renderer. Both loaded the same graph data, causing duplicate cards and inconsistent card styling.

## Correction
- Removed the duplicate `#knowledgeGraphCards` container.
- Removed the duplicate `knowledge-graph-v394` renderer.
- Retained one Knowledge Graph renderer (`#results`).
- Standardized cards as a responsive CSS grid.
- Cards use flex layout with a consistent minimum height and bottom-aligned action.
- Desktop: 3 columns.
- Tablet: 2 columns.
- Mobile: 1 column.
- Search and OPEN/VIEW CONNECTIONS behavior preserved.
- Static link audit for this page: 0 broken internal links.

## Release note
This is a targeted page correction, not a new site version.
