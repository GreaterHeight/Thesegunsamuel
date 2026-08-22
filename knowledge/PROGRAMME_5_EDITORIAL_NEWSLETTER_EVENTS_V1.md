# Programme 5 — Editorial / Newsletter / Events System v1

## Built

### Editorial
- Added `/editorial/` as the editorial control hub.
- Connects Insights, Newsletter and Events.
- Frames the publishing flow as Publish → Develop → Discuss → Apply.
- Uses the canonical insight and event registries rather than inventing content.

### Newsletter
- Added `/newsletter/` as the newsletter channel surface.
- Added canonical `NEWS-001` Newsletter entity.
- Connected Newsletter explicitly to the Editorial platform.
- The page defines editorial territories and the publishing promise.
- No external subscriber provider, archive, delivery automation or fabricated subscriber data has been introduced.

### Events
- Upgraded `/events/` to expose all canonical event records.
- Added event-type filtering based on event titles.
- Preserved the rule that unpublished dates/registration details are not invented.
- Existing event detail pages remain intact.

## Ecosystem
- Editorial platform has a route.
- Events platform has a route.
- Newsletter is a first-class canonical entity.
- Editorial connects to Newsletter and Events.
- Global Search receives the Newsletter entity.

## Remaining backend phase
The next production layer is Editorial Publishing & Distribution:
- CMS/source of truth;
- newsletter provider;
- subscriber management;
- publication scheduling;
- event registration;
- calendar/attendance;
- analytics;
- notifications.

Those integrations require an actual provider/account and are intentionally not fabricated here.
