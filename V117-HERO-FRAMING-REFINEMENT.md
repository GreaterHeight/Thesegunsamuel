# V117 — Hero Framing Refinement

## Issue addressed
At 100% desktop Chrome zoom, the shortened V116 hero container caused the 16:9 hero video to crop vertically with `object-position: center center`. In the standing portrait frames, that center crop cut off the top of Segun’s head.

## Change
Desktop hero video framing changed from `50% center` to `50% 25%`, prioritising the upper subject area while retaining the V116 hero height and proportions.

## Locked
- Hero video assets unchanged
- Hero copy unchanged
- Hero height/proportion unchanged from V116
- Scrim unchanged from V115/V116
- Mobile/tablet rules unchanged

## QA target
At desktop 100% zoom, the standing frames must keep Segun’s full head visible. The hero must continue to show the complete copy and preserve the intended above-the-fold relationship with the next section.
