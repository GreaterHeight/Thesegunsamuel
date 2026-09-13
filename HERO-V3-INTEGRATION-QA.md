# SegunSamuel.com — Hero V3 Integration QA

## Source
Integrated into the supplied `SegunSamuel_V113_Cookie_Consent_Redesign(1)` website source.

## Hero assets
- `assets/hero/segun-samuel-hero.mp4` — 1920×1080 master
- `assets/hero/segun-samuel-hero-720p.mp4` — 1280×720 lightweight version
- `assets/hero/hero-video-poster.jpg` — poster / reduced-motion fallback

## Homepage implementation
- Replaced the previous static `.hero` block on `/index.html`.
- Preserved existing global header/navigation, page sections, footer, cookie-consent system and other site functionality.
- Added dedicated `assets/css/home-hero-video-v3.css`.
- Added dedicated `assets/js/home-hero-video-v3.js`.

## Video behavior
- muted autoplay
- playsinline
- loop
- poster fallback
- 1080p source for larger screens
- 720p source for smaller screens
- `prefers-reduced-motion` displays poster instead of moving video
- autoplay failure leaves the poster available rather than breaking the hero

## Editorial/brand alignment
- Headline: “A Better, Higher, More Human Future.”
- Positioning: Marketplace Architect · Strategic Foresight Mentor · Pattern Intelligence
- Intersection: Technology · Spirituality · Business
- Forest-green visual foundation
- Cormorant Garamond / Crimson Pro / Tenor Sans through existing site typography variables
- No baked-in hero text inside the video

## Important implementation note
The hero copy is HTML, not part of the MP4. This preserves accessibility, SEO and responsive typography.

## Recommended final browser QA
1. Desktop Chrome/Edge/Safari: verify autoplay and poster fallback.
2. Mobile Safari/Chrome: verify crop keeps the subject visually safe and text readable.
3. Test `prefers-reduced-motion`.
4. Test with slow network throttling.
5. Verify no horizontal overflow.
6. Verify cookie popup remains above the video hero.
7. Verify navigation dropdowns remain above the hero.
