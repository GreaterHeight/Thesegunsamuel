V28 SITE-WIDE CONSISTENCY CONTRACT

1. Every HTML page receives the same Segun Samuel favicon:
   /Thesegunsamuel/assets/images/segunsamuel-logo-badge-01.png

2. Every page receives the canonical global footer. Pages that previously
   had no footer (events, application, consulting and other special pages)
   now inherit the same footer.

3. Desktop footer architecture:
   BRAND | EXPLORE | THE WORK | KNOWLEDGE | PARTICIPATE | LEGAL & PRIVACY

4. Responsive reflow:
   <=1100px: brand spans full row; information groups reflow.
   <=760px: two columns.
   <=560px: single column.

5. The final CSS block is intentionally appended after legacy footer rules
   so older page-specific footer-grid declarations cannot scatter the layout.
