# SegunSamuel Backend & Data Architecture v1

## 1. Purpose

Convert the existing static ecosystem into an operational platform without breaking the current GitHub Pages frontend.

The backend is the authoritative layer for:

- identity
- customer/student accounts
- orders
- payment verification
- enrollment entitlement
- lesson progress
- engagement intake
- knowledge-graph persistence
- auditability

The frontend remains the presentation/discovery layer.

## 2. System boundary

```text
GitHub Pages / Frontend
        |
        | HTTPS API
        v
Backend / API Layer
        |
        +---- Authentication / Identity
        +---- Commerce / Orders
        +---- Payment Webhooks
        +---- Enrollment Entitlements
        +---- Learning Progress
        +---- Engagement Intake
        +---- Knowledge Graph
        |
        v
PostgreSQL / Supabase
```

## 3. Authoritative ownership

| Domain | Authority |
|---|---|
| Course catalogue | Database/CMS |
| Course pricing | Database |
| Cart | Browser until checkout |
| Order | Server |
| Payment status | Server + provider webhook |
| Enrollment | Server |
| Lesson entitlement | Server |
| Lesson progress | Server |
| Knowledge graph | Database/registry |
| Engagement intake | Database |
| Analytics | Approved analytics provider |
| Authentication | Auth provider/backend |

## 4. Critical commerce rule

Never trust the browser to declare payment success.

Required sequence:

`Create Order → Redirect/Initiate Payment → Provider → Webhook → Verify Transaction → Mark Order Paid → Create Enrollment → Grant Learning Access`

A successful browser redirect is NOT proof of payment.

Webhook processing must be idempotent using the provider event ID/reference.

## 5. Identity model

Use an external/authenticated identity as the root identity.

`auth.users.id → profiles.id`

The public profile must never expose credentials, payment secrets, session tokens or privileged role mutation.

Role changes must occur through an administrative backend path.

## 6. Student entitlement model

An enrollment is created only after verified payment or an authorised assisted-enrollment action.

```text
User
  |
  +-- Orders
  |
  +-- Enrollments
        |
        +-- Course
              |
              +-- Modules
                    |
                    +-- Lessons
                          |
                          +-- Lesson Progress
```

This prevents a student from gaining course access merely by manipulating localStorage.

## 7. Knowledge architecture

The current static registry contains:

- 208 canonical entities
- 173 relationships
- 220 searchable records

Those become importable seed data, but the database becomes authoritative once the backend is operational.

Recommended distinction:

- `knowledge_entities` = nodes
- `knowledge_relationships` = edges
- `metadata` = extensible attributes
- `provenance` = why the relationship exists
- `confidence` = relationship certainty

## 8. Engagement intake

The current frontend intake becomes a controlled API submission.

`POST /api/engagement/intakes`

The API should validate:

- email
- engagement type
- required context
- abuse/rate limits
- consent where required

The client must never be able to set privileged status values such as `qualified`, `accepted`, or `closed`.

## 9. API contract

### Authentication
- `POST /api/auth/profile`
- `GET /api/me`

### Commerce
- `POST /api/orders`
- `GET /api/orders/:orderNumber`
- `POST /api/payments/:provider/initialize`
- `POST /api/webhooks/:provider`

### Enrollment
- `GET /api/me/enrollments`
- `GET /api/me/courses/:courseId/access`

### Learning
- `GET /api/courses/:courseId`
- `GET /api/courses/:courseId/lessons`
- `GET /api/me/progress/:courseId`
- `PUT /api/me/progress/:lessonId`

### Knowledge
- `GET /api/knowledge/search`
- `GET /api/knowledge/entities/:id`
- `GET /api/knowledge/entities/:id/relationships`

### Engagement
- `POST /api/engagement/intakes`
- `GET /api/admin/engagement/intakes` (admin only)

## 10. API security rules

- Validate every request server-side.
- Use parameterized database queries.
- Apply rate limits to public endpoints.
- Use CSRF protection where cookie authentication is used.
- Never expose service-role keys to the browser.
- Verify webhook signatures.
- Make payment webhook processing idempotent.
- Log privileged actions.
- Return generic authentication errors where appropriate.
- Validate uploaded files if file upload is introduced.
- Do not trust price values submitted by the browser; resolve price from the server catalogue.

## 11. Migration strategy

### Phase A — Shadow backend
Import the current canonical course/knowledge data without changing the public frontend.

### Phase B — Identity
Introduce authentication and profile creation.

### Phase C — Commerce
Move order creation to the server.

### Phase D — Payment
Connect Paystack/Stripe and verify callbacks/webhooks.

### Phase E — Enrollment
Generate server-side entitlements after verified payment.

### Phase F — Learning
Move progress from localStorage to the database.

### Phase G — Engagement
Move intake submissions into the database and administrative workflow.

### Phase H — Cutover
Switch the frontend from local/demo state to API state.

## 12. What must NOT happen

Do not:

- put database credentials in HTML/JS;
- put Paystack/Stripe secret keys in the frontend;
- trust a `payment=success` URL parameter;
- create enrollment from cart state;
- allow a student to edit their role;
- expose unpublished lesson content to unauthorised users;
- replace the knowledge graph with an unrelated CMS taxonomy;
- destroy the existing static site during backend migration.

## 13. Production architecture decision

A PostgreSQL-compatible backend is the preferred database foundation because the ecosystem already has relational structures for:

- courses
- modules
- lessons
- users
- orders
- enrollments
- progress
- knowledge relationships
- engagement records

Supabase is a suitable implementation option because it can provide PostgreSQL + Auth + Row Level Security + storage/API capabilities. The architecture itself remains provider-independent.

## 14. Definition of done for Backend v1

Backend v1 is not complete until:

1. A user can authenticate.
2. A course can be selected.
3. An order is created server-side.
4. Payment is initialized server-side.
5. A webhook is verified.
6. The order becomes paid only after verification.
7. Enrollment is created exactly once.
8. The student can see only entitled courses.
9. Lesson progress persists server-side.
10. Engagement intake is stored server-side.
11. Privileged actions are audited.
12. Secrets are absent from the frontend repository.
