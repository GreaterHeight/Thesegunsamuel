# Knowledge Discovery Intelligence v1

## Purpose
Convert the explicit relationship graph into a deliberate "Where this idea leads" navigation layer.

## Behaviour
On canonical detail pages, the engine:
1. identifies the current canonical entity from its route;
2. reads the unified relationship registry;
3. selects up to six registered connections, preferring diverse knowledge types;
4. uses second-hop relationships only when fewer than six direct connections exist;
5. links only to assets with registered routes;
6. states when no registered next step exists.

## Integrity
No recommendation is inferred from keyword similarity. The UI labels the result as registered knowledge connections.

## Coverage
The engine is installed on the canonical detail pages across Frameworks, Case Studies, Courses, Books, Podcast, Insights, Learning Paths, Masterclasses, Events and Models.

## Future phase
The next layer can add deliberate editorial pathways and user-intent discovery, but those should be explicitly authored/approved rather than inferred as fact.
