# Final Checkout & Placeholder Standard

## Checkout
The oversized checkout headings were reduced using a checkout-scoped type scale.

## Placeholder standard
Temporary image placeholders now use:
- teal/cream 160-degree gradient
- `segunsamuel-logo-badge-01.png` centered over the gradient
- `.image-placeholder` or `data-placeholder="image"` as the temporary state

When the real image is assigned, remove the placeholder class/attribute and
the gradient + badge treatment disappears automatically.

## Audit
- Checkout typography fix present: True
- Pages carrying the global placeholder CSS: 281
- Existing placeholder/arch-frame containers marked: 1
- Badge asset present: True
- Reusable placeholder stylesheet present: True
