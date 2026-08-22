# Forbidden Reference Rebuild V8

V8 addresses the deployment failure visible in the V7 screenshot.

The previous V7 visual rules were appended to the shared stylesheet. V8 adds a dedicated,
uniquely named `assets/css/forbidden-v8.css` and a small inline critical layer on every
Forbidden detail page. This removes dependence on the shared stylesheet's cache/parser state.

All ten Forbidden detail pages use the same V8 template. Existing global header/footer,
article text, assets, and navigation remain in the package. The V8 template uses the supplied
placeholder + Segun badge for missing imagery and a deliberate dark editorial mobile layout.
