# Engagement Intake & Routing v1

## Purpose
Create a structured professional-entry point between the Applications / Consulting / Speaking system and the contact workflow.

## Routes
- `/engagement/intake/` — structured engagement intake.
- `/contact/` — final contact/message workflow, now able to hydrate the intake draft.

## Intake dimensions
- Name
- Organisation / Company
- Email
- Engagement type
- Problem / Context
- Desired outcome
- Timing

## Routing
The intake is currently client-side and prepares a draft in `sessionStorage`, then routes to Contact for review. This deliberately avoids inventing a backend, CRM, email provider, payment system or commercial acceptance workflow.

## Professional pathways
- Strategic Consulting
- Strategic Advisory
- Speaking / Keynote
- Workshop / Intensive
- Executive Session
- Applied Project

## Next backend phase
A real production implementation should connect the reviewed intake to an approved backend/CRM/email workflow. That requires an actual destination and credentials/configuration; none have been assumed here.
