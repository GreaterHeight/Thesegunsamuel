# Global Search + Knowledge Discovery System v1

## Scope
Global ecosystem search built on the registered Knowledge Relationship layer.

## Search coverage
The index combines:
- canonical Knowledge Graph entities;
- Framework registry;
- Case Study registry;
- published Courses;
- Books;
- Podcast pages;
- Insights / Articles;
- Learning Paths;
- Masterclasses;
- Events;
- Applications;
- Models;
- Services.

Current index: 196 records across 23 knowledge types.

## Discovery
- Full-text search across name, type, definitions and tags.
- Knowledge-type filter.
- Suggested searches.
- URL query persistence (`?q=` and `?type=`).
- Registered connections displayed on results.
- Direct routing to published assets.

## Relationship integrity
The UI reads `knowledge/data/knowledge-relationships.json`.
It does not invent semantic relationships. Only registered relationships are displayed.

## Navigation
The shared global navigation now exposes SEARCH so the discovery system is reachable from the ecosystem shell.

## Production evolution
The static index can later be replaced by an API/search service without changing the user-facing information architecture.
