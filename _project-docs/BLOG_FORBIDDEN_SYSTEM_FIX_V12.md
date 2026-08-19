# Blog + Forbidden System Fix V12

- `/forbidden/` publication introduction now has explicit high-contrast text.
- Forbidden detail pages now contain the same `blog-tag-area` and `blog-tags` structural convention as Blog detail pages, with Forbidden-specific dark styling.
- All 12 Blog and 10 Forbidden articles have exact image filenames and generation prompts in `docs/IMAGE-PROMPTS.md`.
- Detail hero placeholders are controlled components with a centered Segun badge and automatic replacement when the exact JPG exists.
- Publication listing placeholders also carry exact article filenames and automatically replace when the exact JPG exists.
- All 22 detail pages have an MP3 filename contract under `/audio/`.
- Audio uses the supplied HTML architecture concept: `<audio>`, `<source>`, play/pause toggle, progress bar, current time, duration and unavailable fallback.
- All detail share controls are active for Facebook, LinkedIn, X, Instagram/device-share fallback and copy-link.
