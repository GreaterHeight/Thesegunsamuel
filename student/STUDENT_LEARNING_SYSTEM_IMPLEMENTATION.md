# Student + Learning System — Implementation Contract

## Current build
The GitHub Pages implementation is a frontend/demo learning environment.

### Student Area
- Dashboard overview
- Active course cards
- Continue Learning
- Progress summary
- Saved-items placeholder
- Learning Paths entry
- Certificate count placeholder
- Responsive layout

### Learning Environment
- Course selected with `?course=<courseId>`
- Curriculum loaded from `/learning/data/<courseId>.json`
- Module/lesson navigation
- Lesson state
- Mark complete / incomplete
- Previous / next lesson
- Progress calculation
- LocalStorage demo persistence

## Production boundary
The existing `student-experience-contract.json` remains the source of the frontend/API contract. Production must replace local JSON/localStorage with:
- authentication
- server-side enrolment authorization
- protected lesson/content delivery
- persistent progress
- assessment state
- certificates
- payment verification
- entitlement checks

No sensitive student data should be stored in public JSON files in production.
