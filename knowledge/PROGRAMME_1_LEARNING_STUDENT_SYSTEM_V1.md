# Programme 1 — Learning + Student System v1

## Current state

### Course catalogue
The existing course catalogue remains intact, including its deterministic search/filter engine.

### Learning paths
The existing learning-path portfolio remains intact.

### Checkout / enrolment
The existing frontend checkout and `SegunSamuelEnrollment` demo adapter remain intact. Enrolment is explicitly frontend/demo state; no secure payment or backend entitlement is claimed.

### Student Area
The Student Area now has an authoritative dashboard adapter:
- merges demo/local enrolments with the published demo student state;
- reads each enrolled course's learning data where available;
- reads persisted lesson completion from `localStorage`;
- calculates current completion, total lessons and overall progress;
- surfaces active/next course;
- links into the course player.

### Course player
Removed the obsolete duplicate player script that referenced stale DOM IDs. The current course player remains responsible for:
- loading course data;
- loading persisted completion state;
- selecting lessons;
- marking lessons complete/incomplete;
- previous/next navigation;
- progress display.

## Canonical ecosystem integration

Added:
- `LEARN-001` — Student Learning Environment
- Student route: `/student/`
- explicit platform relationships to Courses and Learning Paths.

## Deliberate boundary

This is still a frontend/demo learning system. It does not claim:
- secure authentication;
- server-side entitlement enforcement;
- protected lesson delivery;
- production payment confirmation;
- server-side progress persistence;
- certificate issuance;
- LMS backend;
- instructor administration.

Those are the next production infrastructure layer and require actual backend/provider decisions.
