# Image Swap Fix V17

The previous V16 image resolver was correct in the detail pages but the Blog and
Forbidden archive pages were not loading `publication-v12.js`. Therefore the
archive-card placeholder could never attempt to load a real JPG.

V17 fixes this at the source:

1. `/blog/index.html` loads `publication-v12.js`.
2. `/forbidden/index.html` loads `publication-v12.js`.
3. Every publication placeholder already carries its exact filename, e.g.
   `architecture-of-a-manipulator.jpg`.
4. The resolver creates an image element and attempts:
   `/Thesegunsamuel/assets/images/architecture-of-a-manipulator.jpg`
5. On successful load, `.has-real-image` hides the badge/placeholder and shows
   the real image.
6. On failure, the designed placeholder remains visible.
7. No broken-image icon is shown.

The compact view-count eye is now CSS-rendered at approximately the same
visual scale as the MIN READ metadata, with no SVG sizing dependency.
