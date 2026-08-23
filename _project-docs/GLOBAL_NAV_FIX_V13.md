# Global Navigation Fix V13

## Canonical navigation

The Home page navigation is now the single canonical global navigation for the entire SegunSamuel site.

Every HTML page uses the same menu structure:

- HOME
- LEARN
  - LEARN OVERVIEW
  - COURSES
  - LEARNING PATHS
  - MASTERCLASSES
- THINK
  - THINK OVERVIEW
  - FRAMEWORKS
  - MODELS & PRINCIPLES
  - BOOKS
  - INSIGHTS
  - BLOG · DECLASSIFIED
  - EDITORIAL
  - FORBIDDEN
  - NEWSLETTER
- APPLY
  - APPLY OVERVIEW
  - CASE STUDIES
  - APPLICATIONS
  - EVENTS
- LISTEN
- EXPLORE
- SEARCH

Right-side actions:

- STUDENT AREA
- CART

## Important implementation rule

The header is no longer allowed to have page-specific menu variants. New pages must reuse the same global header structure.

All canonical navigation URLs use `/Thesegunsamuel/...` absolute site paths, while the brand logo also uses an absolute asset path so nested pages do not break the logo.

This specifically resolves:
- SEARCH missing from article/detail/course pages.
- LEARN OVERVIEW missing from course pages.
- APPLY OVERVIEW missing from course pages.
- Any future drift caused by copying an older page-specific navigation block.
