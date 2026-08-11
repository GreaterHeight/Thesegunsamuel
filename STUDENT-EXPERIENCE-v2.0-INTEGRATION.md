# v2.0 — Student Experience Integration

Integrated into the v1.9.1 master website.

## Added
- `/student/` dashboard
- Enrollment-ready data contract
- My Courses
- Course progress
- Continue Learning
- Learning Paths entry point
- Student state model
- Production backend boundary documentation

## Security boundary
The current GitHub Pages implementation is a frontend architecture/demo state.
Authentication, payment verification, authorization, private course access,
progress persistence and certificates require a secure backend/database.

## SEO
`/student/` is intentionally `noindex,follow` because it is a student/private experience,
not a public search landing page.
