# V116 — Hero Proportion & Above-the-Fold Refinement

## Purpose
Reduce the desktop hero's dominance at 100% browser zoom while preserving the approved Hero V3 footage, brand typography, visual identity, and mobile behavior.

## Changes
- Desktop hero reduced from `clamp(650px, 82vh, 900px)` to `clamp(430px, 66vh, 600px)`.
- Desktop hero copy column tightened to keep the proposition within the hero.
- Desktop headline reduced to a controlled `clamp(54px, 5.2vw, 78px)` scale.
- Eyebrow, rule, lede, body, and CTA spacing tightened.
- Added a compact desktop viewport rule for screens at or below 700px height so the complete proposition remains visible at 100% zoom.
- Mobile/tablet hero rules remain unchanged.
- Video assets and poster remain unchanged.

## Design Principle
The hero should establish atmosphere and identity without consuming the entire initial viewport. The opening of the next section should remain visible on normal desktop screens, while the complete hero proposition remains accessible without scrolling.
