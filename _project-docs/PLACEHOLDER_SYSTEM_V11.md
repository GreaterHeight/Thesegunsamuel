# Placeholder System V11

Corrected the Blog and Forbidden publication listing cards.

## Problem
The previous cards used two `<img>` elements:
1. `placeholder.jpg`
2. the Segun badge PNG

This caused the placeholder/badge composition to behave like ordinary image content rather than a controlled UI component.

## V11
The listing cards now use a dedicated `.ss-publication-placeholder` component:
- CSS-rendered gradient background
- controlled inner border
- centered Segun badge
- optional IMAGE PLACEHOLDER label
- no broken image state
- no duplicate image/badge stacking
- responsive badge sizing

Applied to:
- `/blog/`
- `/forbidden/`

The original image assets remain in the package for future real-image replacement.
