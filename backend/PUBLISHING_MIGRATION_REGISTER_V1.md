# Publishing Migration Register v1

| Legacy/current system | Publication code | Canonical content type | Action |
|---|---|---|---|
| `/blog/` | `blog_declassified` | `blog_post` | Preserve |
| `/forbidden/` | `forbidden` | `forbidden_post` | Preserve |
| `/editorial/` | `editorial` | `editorial_project` / `editorial_series` | Curate |
| `/newsletter/` | `newsletter` | `newsletter_issue` | Reposition as distribution |
| `/books/` | `books` | `book` | Preserve |
| `/podcast/` | `podcast` | `podcast_episode` | Preserve |
| `/courses/` | `courses` | `course` | Preserve |
| `/frameworks/` | `frameworks` | `framework` | Preserve |

## Do not merge

Blog and Forbidden must not be merged into a single publication.

Newsletter must not become a duplicate article archive.

Editorial must not duplicate article bodies.

## Next migration step

Import the actual Blog and Forbidden reference/content records into `content_items`, preserving their existing URLs and metadata.
