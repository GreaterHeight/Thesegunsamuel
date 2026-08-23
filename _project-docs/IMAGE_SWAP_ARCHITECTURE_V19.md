# Image Swap Architecture V19

## Why V18 failed

V18 created the real image dynamically with JavaScript. When the image URL
failed, the browser could expose a broken-image glyph, and the placeholder
system could remain visually present. The implementation was therefore
dependent on JavaScript timing and error handling.

## V19 architecture

Every publication placeholder with an exact filename now contains the real
image element from the beginning:

`/Thesegunsamuel/assets/images/<exact-filename>.jpg`

The image starts `display:none`.

- If the image loads: JavaScript adds `.has-real-image`; the image becomes
  visible and all placeholder badge/label layers disappear.
- If the image fails: the image remains hidden; the placeholder remains.
- No broken-image icon can appear.
- The core swap does not depend on JavaScript creating the image element.
- Cached images are handled by the `complete/naturalWidth` check.

## Hero layering

Real image = z-index 0  
Cinematic overlay = z-index 1  
Editorial title/meta = z-index 5

Therefore the real image can never cover the hero title.

## Required filename convention

Example:

`architecture-of-a-manipulator.jpg`

must be placed at:

`/assets/images/architecture-of-a-manipulator.jpg`

The HTML already points to it. No HTML editing is required when the file is
later supplied.
