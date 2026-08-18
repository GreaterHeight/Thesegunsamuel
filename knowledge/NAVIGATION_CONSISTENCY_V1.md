# Global Navigation Consistency v1

## Canonical navigation
The Home page primary navigation is the canonical navigation contract.

### LEARN
- LEARN OVERVIEW
- COURSES
- LEARNING PATHS
- MASTERCLASSES

### THINK
- THINK OVERVIEW
- FRAMEWORKS
- MODELS & PRINCIPLES
- BOOKS
- INSIGHTS

### APPLY
- APPLY OVERVIEW
- CASE STUDIES
- APPLICATIONS
- EVENTS

Top-level navigation also contains:
HOME · LISTEN · EXPLORE · SEARCH

## Correction
The shared `js/site-shell.js` navigation now exactly matches Home. All 213 pages containing inline primary navigation were normalised to the same structure.

This restores the missing Overview entries on pages that had abbreviated menus.

## Rule
New pages should use `<nav data-site-nav></nav>` and load the shared `js/site-shell.js`. Do not create page-specific primary navigation.
