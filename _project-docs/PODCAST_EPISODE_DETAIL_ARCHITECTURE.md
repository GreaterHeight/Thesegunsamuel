# Podcast Episode Detail — Production Architecture

The episode detail template is now structured as:

1. Identity — breadcrumb, episode number/type, title, guest, artwork.
2. Consume — Listen / Watch / Read; transcript.
3. Understand — premise, Key Questions, Major Ideas, Frameworks Discussed, Key Quotes.
4. Apply — Reflection Questions and Action Steps.
5. Build — Learning Journey, Related Articles, Related Episodes, Connected Knowledge.
6. Continue — final Keep Going CTA.

## Audio behavior

The audio player is always visible. When no real `audioUrl` is assigned, clicking Play displays exactly:

**The audio is coming soon**

No fake audio source is generated.

## Source treatment

The supplied Building Systems That Outlive You page is treated as a real recorded conversation for production. The example/illustrative disclaimer is not displayed.
