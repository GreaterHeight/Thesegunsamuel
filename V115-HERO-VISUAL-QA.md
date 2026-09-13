# SegunSamuel.com V115 — Hero Visual QA

## Purpose
V115 is a precision refinement of the V114 Hero V3 integration based on the deployed-page visual review supplied after V114.

## Changes
- Reduced desktop hero scrim opacity so the cinematic footage retains more environmental detail while maintaining copy contrast.
- Reduced the desktop copy column slightly to preserve more visual breathing room around the subject.
- Explicitly retained centered desktop video positioning; tablet/mobile crop rules remain unchanged.
- Preserved reduced-motion poster fallback, autoplay/muted/loop/playsinline behavior, existing CTA routes, and all non-hero homepage sections.

## No changes
- No video regeneration.
- No replacement of approved hero footage.
- No typography family changes.
- No homepage section architecture changes.
- No cookie-consent redesign changes.

## Browser QA required after deployment
1. Desktop: confirm video autoplay and subject/copy balance at 1440px and 1920px.
2. Tablet: confirm crop and CTA wrapping around 768–1024px.
3. Mobile: confirm crop, readable copy, full-width CTA buttons, and no horizontal overflow at 320/375/390px.
4. Reduced motion: confirm poster displays with video hidden.
5. Slow network: confirm poster remains visible before video loads.
6. Cookie banner: confirm it remains above hero content.
7. Header/mobile menu: confirm it remains above hero media.
8. GitHub Pages subpath: confirm `about/` and `courses/` CTA links resolve correctly under `/Thesegunsamuel/`.
