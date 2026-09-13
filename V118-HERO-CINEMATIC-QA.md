# V118 — Cinematic Hero Height Refinement

## Objective
Restore enough vertical space for the 16:9 hero footage to retain meaningful lower-frame detail without returning to the oversized V115 composition.

## Changes
- Desktop hero minimum height increased to `clamp(620px, 72vh, 700px)`.
- Removed V117's forced short-screen `430px` hero override.
- Desktop video framing restored to natural `object-position: center center`.
- Preserved V116/V115 typography hierarchy and reduced scrim.
- Added balanced desktop copy padding for the larger cinematic frame.
- Hero video assets were not regenerated or modified.
- Mobile/tablet behavior remains separately controlled.

## Design principle
The hero is treated as the opening cinematic scene of the homepage, not merely the portion that must fit above the fold.

## Browser QA targets
- Chrome desktop 100% zoom
- 1366×768
- 1440×900
- 1920×1080
- 320 / 375 / 390 mobile
- Safari/iOS autoplay and `playsinline`
- Reduced motion
- Cookie banner layering
- Mobile navigation layering
- No horizontal overflow

## Expected result
Segun's full head, torso, table/map/environment and surrounding participants should remain materially more visible across the hero sequence, while the hero no longer relies on aggressive vertical cropping.
