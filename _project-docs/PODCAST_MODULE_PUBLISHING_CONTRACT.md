# Podcast Module — Publishing Contract

The podcast module is now structurally complete for the current 20-episode catalogue.

## Implemented
- 19 episode records.
- Search across titles, descriptions, themes and connected frameworks.
- Theme filtering.
- 9-item pagination.
- Featured episode treatment.
- Consistent episode detail template.
- Responsive podcast library and detail pages.
- Episode artwork placeholder using the site's approved placeholder standard.
- Native media-player integration point.
- Connected knowledge links using relationships already present in the existing episode pages.
- Related episode discovery.
- Existing global navigation and footer retained.

## Media truth
The current site contains no published audio URLs/files for these episodes. `audioUrl` is therefore empty in the data rather than fabricated. Populate it when the real media is published.

## Editorial truth
The current site contains no supplied transcripts. The transcript/show-notes area is therefore a publishing slot, not invented transcript content.

## Publishing fields
Each episode record supports: `audioUrl`, `embedUrl`, `duration`, `published`, and `image`.

When those fields are populated, the page architecture does not need to change.
