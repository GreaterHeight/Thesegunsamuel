# Backend API Contract v1

All protected endpoints require authenticated identity. Admin endpoints require an elevated server-side role.

## Orders

### POST /api/orders
Input:
```json
{"items":[{"courseId":"course-slug","quantity":1}]}
```

Server responsibilities:
- resolve course and current server price;
- reject unpublished/unavailable courses;
- calculate totals;
- create order + order items;
- return order number.

Never accept `unitPrice`, `total`, or `paymentStatus` as authoritative client input.

### GET /api/orders/:orderNumber
Returns the authenticated user's order summary only.

## Payments

### POST /api/payments/paystack/initialize
Input:
```json
{"orderNumber":"SS-XXXX"}
```
Server verifies ownership and amount before initialization.

### POST /api/payments/stripe/initialize
Same principle.

### POST /api/webhooks/paystack
- Verify provider signature.
- Store event using `(provider, provider_event_id)` uniqueness.
- Process only once.
- Verify transaction amount/currency/reference.
- Mark order paid.
- Create enrollment exactly once.

### POST /api/webhooks/stripe
Same principles using Stripe signature verification and event ID idempotency.

## Enrollment

### GET /api/me/enrollments
Returns only authenticated user's active/completed enrollments.

### GET /api/me/courses/:courseId/access
Returns entitlement/access information only if an enrollment exists.

## Learning

### PUT /api/me/progress/:lessonId
Input:
```json
{"completed":true}
```

Server verifies:
1. user identity;
2. lesson exists;
3. lesson belongs to a course;
4. user has active entitlement.

## Engagement

### POST /api/engagement/intakes
Input:
```json
{
  "name":"...",
  "organisation":"...",
  "email":"...",
  "engagementType":"Strategic Consulting",
  "context":"...",
  "desiredOutcome":"...",
  "timing":"..."
}
```

Server validates and stores the intake. Public clients cannot assign workflow status.

## Knowledge

### GET /api/knowledge/search?q=...
Searches canonical entities and relationship metadata.

### GET /api/knowledge/entities/:id
Returns the entity and permitted metadata.

### GET /api/knowledge/entities/:id/relationships
Returns connected nodes and relationship provenance.
