# Image Swap Architecture V20 — Deterministic Publication Media

V20 replaces the previous JavaScript-dependent image swap with a deterministic
browser-native state contract.

## Real image contract

Each publication image has a real `<img>` element whose `src` is the exact
production asset path, for example:

`/Thesegunsamuel/assets/images/architecture-of-a-manipulator.jpg`

The image is hidden by default. It becomes visible only after the browser
successfully fires `load` and the parent receives `.has-real-image`.

## Failure contract

If the image fails to load, the inline `onerror` handler removes the failed
`src`, keeps the image hidden, and leaves the Segun placeholder intact.
Therefore the browser cannot display a broken-image glyph in the visible UI.

## Success contract

When the image loads:

1. `.has-real-image` is added to the media component.
2. The Segun badge pseudo-element is removed.
3. `IMAGE PLACEHOLDER` is removed.
4. The real image becomes visible.
5. No JavaScript-created `<img>` is required.

## Hero contract

Blog and Forbidden detail heroes use three explicit layers:

- Z0: real image
- Z1: cinematic overlay
- Z5: kicker, title and metadata

The image therefore cannot cover the title.

## Cache contract

The V20 CSS and JS use new filenames (`publication-images-v20.*`) rather than
reusing the old V12 asset names. This prevents a stale browser/CDN copy of the
previous image implementation from silently reappearing.

## Required production filenames

The filename is the article slug plus `.jpg`, and the file must be placed in:

`/assets/images/`

Examples:

- `architecture-of-a-manipulator.jpg`
- `battle-of-identity.jpg`
- `planning-room-battlefield.jpg`

No HTML editing is required when a correctly named image is added.
