# IMAGE-PROMPTS.md
## Segun Samuel — Canonical Master Image Generation Register

### Production workflow — READ THIS

This is a **prompt library**. Do **not** execute the entire file at once.

For every image:

**Find the exact image entry → copy that individual finished prompt → paste it into Nano Banana Pro → generate → save using the exact filename.**

The individual prompt must be self-contained. The image model must not be expected to read this master file to discover missing demographic, composition or generation instructions.

### Source hierarchy

This master is built from the **latest `IMAGE-PROMPTS_UPDATED.md`** in the project File Library, with the complete prompt entries that exist only in the older `D-IMG-PROMPTS.md` retained below so no older prompt is lost. Where the same filename exists in both sources, the current canonical entry above takes precedence.

### Permanent human-subject rule

When people appear, the final individual prompt must explicitly specify the intended human composition. Do not use “African atmosphere”, “global professionals”, “international audience” or “diverse professionals” as a substitute for an actual demographic choice.

- **Segun:** a distinguished Nigerian man in his 50s, or the supplied reference photograph.
- **Black African group:** a group of distinguished Black African professionals.
- **Mixed group:** a deliberately mixed group of African, European, and Asian professionals.
- **White European group:** a group of distinguished White European professionals, only when deliberately requested.
- **No people:** explicitly state that no people are visible where that absence is part of the concept.

`[SUBJECT]` is a drafting token only. It must never remain unresolved in a prompt copied into Nano Banana Pro.

### Placeholder / real-image contract

Every declared image placeholder must have either:

1. a complete copy-ready generation prompt in this file; or
2. an explicit **DO NOT GENERATE / SUPPLIED ASSET / REAL SOURCE** designation.

The exact filename is the production contract. The approved gradient + `segunsamuel-logo-badge-01.png` is the fallback. When the exact real file is supplied, the website replaces the placeholder without changing the layout.

---

# PART I — CURRENT CANONICAL REGISTER

# IMAGE GENERATION PROMPTS — segunsamuel.com

## DIVERSITY OPTIONS — GLOBAL SUBJECT SYSTEM

Each image-generation prompt that contains **`[SUBJECT]`** uses the following controlled diversity system. Do not rewrite the creative prompt when changing representation; replace only the `[SUBJECT]` token with the appropriate option.

- **Option A — Mixed:** replace `[SUBJECT]` with **“a distinguished Nigerian man in his 50s”** for portraits of Segun; for group scenes use **“a diverse group of African, European, and Asian professionals”**.
- **Option B — All Black:** portraits as Option A; group scenes use **“a group of distinguished Black African professionals”**.
- **Option C — All White:** only applicable to group/atmosphere scenes where the subject is not Segun himself; use **“a group of White European professionals”**. **Portraits representing Segun should always depict a Nigerian man.**

### Usage rule

`[SUBJECT]` is a controlled substitution token, not a prompt instruction to leave unresolved. Before generation, choose the required diversity option and replace `[SUBJECT]` with the corresponding subject phrase.

**Identity rule:** Any image representing Segun Samuel himself must use the Nigerian-man subject specification. Option C must never be used for a Segun portrait.

**Prompt architecture:** Keep the master prompt intact and vary only `[SUBJECT]` when diversity variation is required. Do not create three duplicated prompts merely to represent the three options.

---


### For Nano Banana Pro (or any high-end image model)

This is the canonical image-generation register for the current SegunSamuel website build.

This document deliberately follows the supplied `Sample-image-prompts.md` convention: **every generated image has an exact filename in a `###` heading, followed by what the image represents and where it is used.** The filename is the production contract.

Every real generated asset belongs in `/assets/images/` or the exact subfolder stated below. The site remains functional before the real image is supplied by displaying the approved gradient + `segunsamuel-logo-badge-01.png` fallback.

**Real-image rule:** declare the filename first. If the exact file exists, display it. If it does not exist, show the placeholder. Supplying the exact file later must automatically replace the placeholder without redesigning the page.

**Source discipline:** This register is based on the current website build plus the supplied prompt-file convention. It does not silently turn supplied logos or real publisher covers into AI-generated assets.

### Diversity token examples

The following examples demonstrate the intended `[SUBJECT]` implementation:

- **`segun-portrait-studio.png`** — `[SUBJECT] in an impeccably tailored deep forest-green suit...`
- **`og-image.jpg`** — `Wide cinematic composition: [SUBJECT] in a forest-green suit...`

For a Segun portrait, `[SUBJECT]` resolves to **“a distinguished Nigerian man in his 50s”**. For a group/atmosphere scene, it resolves according to Option A, B, or C above.

---


## Global style block — append to every generated-image prompt

> Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos.

## Global rules

- Exact filenames are case-sensitive.
- No website copy, UI labels, prices, course metadata, buttons, logos or watermarks inside generated artwork.
- Keep important subjects away from extreme crop edges.
- Master images must survive desktop, tablet and mobile crops.
- Use the stated aspect ratio.
- Real external book covers must be publisher/source-authorised; do not generate substitute covers.
- Use supplied reference photographs where identity must be preserved.
- Crimson is a restrained accent, not the dominant field colour.


---

# 1. CORE / UTILITY PAGES


### `home` — Home
**Route:** `/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `about` — About
**Route:** `/about/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `learn` — LEARN
**Route:** `/learn/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `think` — THINK
**Route:** `/think/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `apply` — APPLY
**Route:** `/apply/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


## 1A. APPLY — CURRENT ENGAGEMENT PAGES

The following prompts are for the current production engagement experiences inside the Segun Samuel ecosystem. They are distinct from older/reference MentoringOS imagery elsewhere in this register. The approved Mentoring visual direction is **Editorial Intelligence**: sophisticated, cinematic, restrained, intellectually serious, human and premium.

### `mentoring-hero.jpg` — Strategic Mentoring hero background (16:9, full-bleed)
**Route:** `/mentoring/`

Use the supplied Segun Samuel reference photograph to preserve likeness. Create a premium editorial-cinematic portrait of Segun Samuel as a thoughtful strategic mentor rather than a conventional corporate coach: a distinguished Nigerian man in his 50s, calm and composed, wearing an impeccably tailored deep forest-green suit with an understated cream shirt, no tie, standing in a refined contemporary study or architectural advisory room with dark wood, deep green wall planes, warm natural window light and subtle evening ambience. Place Segun primarily in the **right third of the frame**, with generous, visually quiet negative space across the left half for the page's overlaid eyebrow, headline and supporting copy. His expression should communicate intellectual confidence, attention and quiet authority—not performance or salesmanship. Include restrained architectural depth, books, a leather notebook or one subtle brass object as environmental details, but keep the composition uncluttered. Deep forest green, warm cream, muted amber and a very restrained crimson accent. No visible UI, no readable books, no signage, no text, no logos, no watermark. The image must remain sophisticated when cropped on tablet and mobile; keep the face and torso comfortably inside the safe central/right crop area. **Horizontal 16:9 master, minimum 2400px on the long edge.**

### `inner-dimension.jpg` — The Inner Dimension / The War Within background (16:9, full-bleed)
**Route:** `/mentoring/` — “The Inner Dimension” section

Use the supplied Segun Samuel reference photograph to preserve likeness if Segun is visible. Create a psychologically rich editorial-cinematic scene about the inner life of leadership: Segun Samuel in quiet three-quarter profile or standing contemplatively within a dark, elegant study beside a tall window or architectural mirror, with his reflection or a subtle layered reflection suggesting the tension between the person seen by the world and the person confronting himself. The scene should feel contemplative, intelligent and slightly mysterious rather than dramatic or theatrical. Deep forest-green walls, dark wood, warm amber practical light, controlled shadow, a faint city or architectural skyline beyond the glass, subtle atmospheric depth and a restrained sense of solitude. Place the principal figure and strongest visual detail toward the **right half**, leaving calmer darker space on the left for overlaid “The Inner Dimension” copy. The visual metaphor must communicate identity, perception, ambition, fear, self-mastery and the conflict within without depicting violence, distress or literal psychological clichés. No broken mirrors, no horror imagery, no chains, no battlefield imagery, no readable text, no logos, no watermark. Preserve natural skin tone and realistic proportions. **Horizontal 16:9 master, minimum 2400px on the long edge.**

### `mentoring-session-editorial.jpg` — Strategic Mentoring conversation (16:10, optional supporting image)
**Route:** `/mentoring/` — optional future editorial section

Use a two-reference workflow if Segun's reference photograph is available. Segun Samuel sits across a small round table from a distinguished professional, both in thoughtful three-quarter profile rather than facing camera. The conversation is already underway: Segun listening with focused attention, the other leader considering a difficult point. A leather notebook and fountain pen sit between them; no laptops or phones. Quiet private study, deep green walls, dark wood, warm pool of lamplight, softly blurred bookshelves and distant city lights. The atmosphere should communicate confidentiality, intellectual seriousness and undivided attention. No coaching clichés, no handshake, no staged smiling, no readable text. Horizontal 16:10.

### Image-direction rule for current Mentoring
The approved Mentoring page uses **photographic background imagery as part of the composition**, not decorative card thumbnails. The hero and “The Inner Dimension” images must therefore be generated as complete cinematic environments with intentional negative space for HTML typography. Do not substitute abstract gradients, geometric rings, generic business stock photography or isolated headshots for these two backgrounds. The image itself is an editorial compositional element.


### `speaking-hero.jpg` — Speaking hero / audience room (16:9, full-bleed)
**Route:** `/speaking/` — hero background

Create a premium editorial-cinematic photograph of a serious keynote environment: a large contemporary conference audience composed of distinguished Black African professionals, seated in a sophisticated auditorium, viewed from a slightly elevated side/front angle, with the speaker's presence implied through the composition rather than requiring a visible identifiable face. All visible audience members should be Black African professionals, with natural variation in adult age, appearance, hairstyle and professional dress. The audience should feel attentive and intellectually engaged, not staged or celebratory. Deep forest-green and near-black architectural planes, subtle warm amber practical lights and restrained bokeh in the distance, with enough controlled darkness across the **left half** to support large cream HTML headline typography. The right half can carry more audience detail and warm light. Sophisticated African professional atmosphere without generic corporate-stock clichés. Do not introduce White or Asian audience members. No readable screens, no signage, no text, no logos, no watermark. Strong natural contrast, realistic skin tones, believable auditorium materials. **Horizontal 16:9 master, minimum 2400px on the long edge.**

### `speaking-room.jpg` — The Room / speaking atmosphere (16:9, full-bleed)
**Route:** `/speaking/` — “The Room” editorial section

Create a cinematic editorial photograph representing the moment ideas alter a room: a distinguished keynote speaker addressing a large professional audience in a refined contemporary auditorium, with the audience in the foreground and the speaker separated by a pool of warm stage light. Use a sophisticated deep-green architectural environment with selective warm amber highlights and restrained crimson detail. Keep the strongest visual information toward the **right and centre**, while maintaining a darker, quieter area for overlaid HTML copy. The scene should communicate authority, attention, movement and intellectual consequence—not entertainment spectacle. No readable presentation text, no logos, no watermark, no exaggerated stage effects. **Horizontal 16:9 master, minimum 2400px on the long edge.**

### `consulting-hero.jpg` — Consulting hero / strategic advisory table (16:9, full-bleed)
**Route:** `/consulting/` — hero background

Create a premium editorial-cinematic photograph of a high-stakes strategic advisory session viewed close to the working surface: two or three senior professionals in a sophisticated boardroom or advisory room reviewing a large architectural/strategic document, with one hand writing or annotating a plan while another person studies the material. The scene should suggest diagnosis, systems thinking and consequential decision-making rather than routine office work. Deep forest-green architectural surfaces, warm cream paper, dark wood, muted brass and a single restrained crimson detail such as a notebook edge or pen. Leave the **left third darker and visually quieter** for HTML eyebrow, headline and CTA copy; place the strongest hands/document/action toward the centre-right. No readable document text, no logos, no watermark, no generic stock-photo smiles. **Horizontal 16:9 master, minimum 2400px on the long edge.**

### `strategic-room.jpg` — The Strategic Room / organisational architecture (16:9, full-bleed)
**Route:** `/consulting/` — “The Strategic Room” section

Create a sophisticated architectural-cinematic image representing systems, infrastructure, scale and long-term organisational design: a dramatic contemporary city/business architecture viewed from a low-to-mid perspective, layered glass, steel and structural lines converging upward, with subtle human-scale presence suggesting the organisations and institutions operating within the system. Deep teal and forest-green grading, warm late-day light, restrained gold reflections and a very subtle crimson accent. The composition should feel intelligent, structural and consequential—not like a real-estate advertisement. Keep a darker, calmer area for HTML overlay copy while allowing the architecture to carry visual authority. No readable signs, company names, logos, watermark or artificial futuristic effects. **Horizontal 16:9 master, minimum 2400px on the long edge.**

### Image-direction rule for Speaking and Consulting
The approved Speaking and Consulting pages use **cinematic photographic backgrounds as compositional elements**, with HTML typography layered above them. Generate the images with intentional negative space and controlled luminance where copy will sit. Do not replace these backgrounds with gradients, decorative geometric graphics, generic stock photography or images containing baked-in website text. The generated artwork must remain legible behind cream/gold typography and must survive desktop, tablet and mobile `cover` crops.


### `listen` — LISTEN
**Route:** `/listen/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `explore--knowledge-graph` — Explore / Knowledge Graph
**Route:** `/explore/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `contact` — Contact
**Route:** `/contact/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `student-area` — Student Area
**Route:** `/student/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `search` — Search
**Route:** `/search/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `knowledge-graph` — Knowledge Graph
**Route:** `/knowledge-graph/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `cart` — Cart
**Route:** `/cart/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `checkout` — Checkout
**Route:** `/checkout/`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `courses-cart` — Courses Cart
**Route:** `/courses/cart.html`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `courses-checkout` — Courses Checkout
**Route:** `/courses/checkout.html`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.


### `404` — 404
**Route:** `/404.html`
No custom photographic asset is currently assigned in the current build. Preserve the architectural placeholder system if an image slot is introduced later; do not invent a new image requirement merely to populate this register.



---

# 2. COURSES — CATALOGUE CARD IMAGES


### `courses/advanced-data-analytics-power-bi.jpg` — Advanced Data Analytics & Power BI, catalogue card image (2:3)
A sophisticated analytics command centre with abstract dashboards, charts, data tables, a laptop and notebook arranged as one coherent strategic analysis workspace, no readable interface text. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/sql-database-development.jpg` — SQL & Database Development, catalogue card image (2:3)
A disciplined database engineering environment showing connected relational structures, layered data architecture, terminal-like abstract glow and an engineering desk, no readable code or logos. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/generalist-data-ai-skills-academy.jpg` — Generalist Data & AI Skills Academy, catalogue card image (2:3)
A modern professional learning environment combining data analysis, AI and visualisation, adult learners around a large screen showing abstract data patterns, warm daylight, serious collaborative atmosphere. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/ai-mastery-from-zero-to-ai-practitioner.jpg` — AI Mastery: From Zero to AI Practitioner, catalogue card image (2:3)
A visual progression from foundational computing to applied artificial intelligence: layered neural structures, workstation geometry and a clear sense of increasing capability, no readable code or text. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/ai-for-business-professional-productivity.jpg` — AI for Business & Professional Productivity, catalogue card image (2:3)
Executive productivity scene where AI-assisted workflows connect documents, planning, communication and decision support around a professional desk, sophisticated business environment, no readable interface text. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/python-for-data-analytics.jpg` — Python for Data Analytics, catalogue card image (2:3)
Professional analyst workstation with Python-inspired abstract code structure, charts, notebooks and exploratory data analysis, realistic engineering environment, no readable code. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/pattern-intelligence.jpg` — Pattern Intelligence, catalogue card image (2:3)
Strategic analyst studying interconnected signals, maps, data fragments and patterns on a large planning table, visual relationships rather than literal diagrams. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/strategic-foresight.jpg` — Strategic Foresight, catalogue card image (2:3)
Premium foresight planning room with horizon maps, scenario cards, subtle signal markers and a compass, communicating multiple plausible futures without readable text. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/leadership-intelligence.jpg` — Leadership Intelligence, catalogue card image (2:3)
Composed leadership strategy session with professionals around a table, a central leader listening and interpreting, warm natural light and deep green architecture. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/systems-strategic-architecture.jpg` — Systems & Strategic Architecture, catalogue card image (2:3)
Architectural systems-thinking scene with layered structures, interconnected components and pathways forming one coherent operating system, no readable labels. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/execution-intelligence.jpg` — Execution Intelligence, catalogue card image (2:3)
Disciplined execution war-room with project artefacts, timeline markers, documents and coordinated professionals translating strategy into action, no readable text. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/institutional-intelligence.jpg` — Institutional Intelligence, catalogue card image (2:3)
Durable institutional environment with boardroom, governance documents, archival shelves and architectural details suggesting continuity, succession and institutional memory. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/ai-for-strategic-capability.jpg` — AI for Strategic Capability, catalogue card image (2:3)
Senior strategist using AI for research and decision support, abstract analytical layers on a screen, sophisticated executive environment, deep green and warm cream palette. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


### `courses/thinking-clearly.jpg` — Thinking Clearly in a Complex World, catalogue card image (2:3)
Minimal strategic thinking scene with open notebook, decision pieces, two paths on an architectural drawing and directional light, quiet intellectual atmosphere. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated professional colour grading using the SegunSamuel palette: deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B. Rich but natural contrast, no artificial plastic skin, no excessive HDR, no pure black unless specifically requested, shadows leaning toward deep green. Medium-format camera character, 85mm editorial lens look where appropriate, believable materials and environments, premium intelligent strategic contemporary aesthetic. No watermark, no random text, no fake logos. Vertical 2:3.


## Course detail media — shared filename contract

### `course-detail-hero-[course-slug].jpg` — Course detail hero (16:9)
Create a visual metaphor specific to the course topic. Keep the focal subject upper-centred and safely inside the crop. No readable text or logos. Horizontal 16:9.

### `testimonial-[person-slug]-photo.jpg` — Testimonial author photo (4:5)
Use the supplied participant reference photograph when one exists. Preserve identity and natural proportions. Vertical 4:5.

### `testimonial-[person-slug]-poster.jpg` — Testimonial video poster (16:10)
Use the participant reference photograph as the starting frame/reference. Natural speaking-to-camera composition, no on-screen text or logos. Horizontal 16:10.

### `testimonial-[person-slug].mp4` — Testimonial video
Image-to-video prompt: use the supplied participant reference image; natural thoughtful speech, subtle head movement and restrained hand gesture, realistic breathing and eye movement, consistent lighting, no text, no logos, 5–8 seconds.

**Supplied course portrait:** `instructors/segun-samuel.png` — do not regenerate.


---

# 3. BOOKS — BOOKS · INTELLECTUAL PROPERTY / THE SHELF


### `book-war-within.jpg` — The War Within — featured book / The Shelf (2:3)
Premium editorial product photograph of a real hardcover book standing upright on deep forest-green marble, subtle geometric embossing, restrained crimson ribbon accent, dramatic natural side light, no invented readable cover text. Vertical 2:3.


### `book-prepared-mind.jpg` — The Prepared Mind Method™ — The Shelf (2:3)
Refined cream/green book object with understated compass symbolism on a dark green surface, warm natural light, premium intellectual product photography, no invented readable cover text. Vertical 2:3.


### `book-war-within-workbook.jpg` — The War Within — Companion Workbook — The Shelf (2:3)
Matte forest-green workbook with restrained grid embossing, crimson closure band and pencil on a strategic planning desk, overhead editorial lighting, no invented readable text. Vertical 2:3.


### `course-90day-war-within.jpg` — The 90-Day War Within Campaign Protocol — The Shelf (2:3)
Strategic war-room campaign map on deep green felt: 90-day planning grid, brass compass, leather tactical journal and crimson pencil accent, no readable numbers or text. Vertical 2:3.


### `book-prepared-mind.jpg` — The Prepared Mind Intensive — The Shelf (2:3), current asset reuse
Use the same approved `book-prepared-mind.jpg` artwork; this current card reuses that asset rather than introducing a second filename. Vertical 2:3.


### `course-techspibus-masterclass.jpg` — The Laws of Strategic Thinking — The Shelf (2:3), current artwork slot
Abstract triptych combining circuitry, illuminated-manuscript texture and a city skyline into one coherent intellectual composition, restrained crimson thread, deep green grading, no readable text. Vertical 2:3.


## Reading List — real publisher/source covers

The Reading List uses `rec-01.jpg` through `rec-30.jpg`. These are real external book covers. **Do not generate replacement covers.** Use publisher-authorised or legitimately sourced cover images and preserve the actual cover faithfully.


### `rec-01.jpg` — Recommended Books Reading List card 1 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-02.jpg` — Recommended Books Reading List card 2 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-03.jpg` — Recommended Books Reading List card 3 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-04.jpg` — Recommended Books Reading List card 4 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-05.jpg` — Recommended Books Reading List card 5 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-06.jpg` — Recommended Books Reading List card 6 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-07.jpg` — Recommended Books Reading List card 7 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-08.jpg` — Recommended Books Reading List card 8 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-09.jpg` — Recommended Books Reading List card 9 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-10.jpg` — Recommended Books Reading List card 10 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-11.jpg` — Recommended Books Reading List card 11 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-12.jpg` — Recommended Books Reading List card 12 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-13.jpg` — Recommended Books Reading List card 13 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-14.jpg` — Recommended Books Reading List card 14 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-15.jpg` — Recommended Books Reading List card 15 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-16.jpg` — Recommended Books Reading List card 16 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-17.jpg` — Recommended Books Reading List card 17 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-18.jpg` — Recommended Books Reading List card 18 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-19.jpg` — Recommended Books Reading List card 19 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-20.jpg` — Recommended Books Reading List card 20 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-21.jpg` — Recommended Books Reading List card 21 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-22.jpg` — Recommended Books Reading List card 22 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-23.jpg` — Recommended Books Reading List card 23 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-24.jpg` — Recommended Books Reading List card 24 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-25.jpg` — Recommended Books Reading List card 25 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-26.jpg` — Recommended Books Reading List card 26 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-27.jpg` — Recommended Books Reading List card 27 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-28.jpg` — Recommended Books Reading List card 28 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-29.jpg` — Recommended Books Reading List card 29 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.


### `rec-30.jpg` — Recommended Books Reading List card 30 (2:3)
Real cover/source image for the corresponding Reading-List-Data entry. No AI generation prompt; source the actual cover. Export/source at sufficient resolution for the 2:3 card crop.



---

# 4. PODCAST / LISTEN


### `podcast-hero.jpg` — Podcast library hero / FEATURED EPISODE visual (16:9)
Premium editorial-cinematic artwork representing the Segun Samuel Podcast as an intellectual conversation platform: two thoughtful professionals in a sophisticated conversation environment, subtle sound-wave and architectural motifs, layered pathways suggesting dialogue, interpretation and discovery, modern African/global intellectual aesthetic, forest green, deep teal, warm cream and restrained gold, cinematic depth, no text, no logos, no watermark. Horizontal 16:9.

**Route:** `/podcast/`

### `building-systems-that-outlive-you.jpg` — Building Systems That Outlive You, podcast detail hero (16:9)
Create a sophisticated editorial-cinematic image about durable systems, institutional architecture, succession and long-term impact: interconnected structural forms, layered pathways, a visual sense of continuity extending beyond one person, subtle human-scale presence, premium modern African/global intellectual aesthetic, forest green, deep teal, warm cream and muted gold, no text, no logos, no watermark. The real image must work as a full rectangular hero artwork, not a circular badge crop. Horizontal 16:9.

**Route:** `/podcast/building-systems-that-outlive-you/`


### `segunsamuel-logo-badge-01.png` — Podcast placeholder/fallback badge
Supplied brand asset. Do not regenerate. It is used only until the declared real episode image exists.


---

# 5. FRAMEWORKS

### `framework-[slug].jpg` — Framework detail visual (16:9)
Symbolic architectural representation of the framework's central mechanism using objects, spaces, pathways and structural relationships rather than literal diagrams. No readable text or logos. Horizontal 16:9.

**Pages covered:**


---

# 6. MODELS / PRINCIPLES

### `model-[slug].jpg` — Model/principle detail visual (16:9)
Refined symbolic representation of the model's mechanism through objects, decision pathways, architecture or systems. No readable text. Horizontal 16:9.

**Pages covered:**


---

# 7. LEARNING PATHS

### `learning-path-[slug].jpg` — Learning Path hero/card visual (16:9)
Sequence of increasingly sophisticated architectural spaces, steps or thresholds visibly leading to the next stage, symbolising progression and capability development. No readable text. Horizontal 16:9.

**Pages covered:**


---

# 8. MASTERCLASSES

### `masterclass-[slug].jpg` — Masterclass hero/card visual (16:9)
Premium masterclass environment with facilitator and small group of professionals around a table, serious discussion and notebooks, natural light, sophisticated editorial quality. Horizontal 16:9.

**Pages covered:**


---

# 9. CASE STUDIES

### `case-study-[slug].jpg` — Case Study hero/card visual (16:9)
Editorial reconstruction of the real-world problem context represented by the case study, using symbolic environmental details and professionals where appropriate. No fabricated logos or confidential text. Horizontal 16:9.

**Pages covered:**


---

# 10. APPLICATIONS / PROJECTS

### `application-[slug].jpg` — Application/Project visual (16:9)
Professionals examining a completed project artefact, dashboard, system architecture or physical prototype appropriate to the application. Communicate implementation and evidence. No readable text. Horizontal 16:9.

**Pages covered:**


---

# 11. EVENTS

The Events system uses the established **gradient placeholder + Segun Samuel badge** until the exact production image exists. The placeholder is not the final creative direction; it is a controlled pre-production state. Each event image below therefore has its own generation contract.

**Image contract:** Each exact filename is the same production asset referenced by the corresponding event experience. Use the master at **16:9**, with the focal subject safely inside the central 70% so the same image can survive the listing-card crop and the wide event-detail hero. No readable text, no fabricated logos, no watermark, no event UI, no invented book covers.

### `event-events.jpg` — Events landing page hero / featured-events visual (16:9 master)
Create a premium editorial-cinematic image representing **the rooms where ideas become real**: a sophisticated live intellectual gathering in Lagos, Nigeria, with a diverse audience of African and international professionals seated in a refined contemporary room while a thoughtful Nigerian male facilitator leads a serious discussion at the front. The scene should communicate workshops, masterclasses, roundtables, launches and strategic conversations without becoming a generic corporate conference photograph. Use architectural depth, warm practical lighting, deep forest-green and warm-cream environmental tones, subtle crimson accents and restrained gold highlights. Show genuine attention, notebooks, considered body language and an atmosphere of intellectual seriousness rather than staged applause. Keep the facilitator slightly off-centre and leave clean negative space suitable for hero typography. No readable presentation text or logos. Horizontal 16:9 master.

**Route:** `/events/`
**Used for:** Events landing hero / featured event visual.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-ai-strategy-workshop.jpg` — AI & Strategic Capability Workshop (16:9 master)
Create a premium editorial-cinematic photograph of a focused **AI strategy workshop** in a sophisticated Lagos boardroom: a Nigerian facilitator guiding a small group of senior professionals around a table with laptops, notebooks and printed strategic material. The visual language should communicate deliberate AI capability building, systems thinking, experimentation becoming operating capability, and serious decision-making. Include subtle screens or interface shapes only as abstract visual texture; absolutely no readable UI, code or fake product logos. Natural interaction, intelligent expressions, warm directional light, dark forest-green architectural elements and restrained gold accents. The facilitator should not look like a stereotypical tech salesman. Keep the central working group visually coherent and preserve crop-safe negative space. Horizontal 16:9 master.

**Route:** `/events/ai-strategy-workshop/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-architects-roundtable.jpg` — The Architects Roundtable (16:9 master)
Create a premium editorial-cinematic image of a **small strategic roundtable**: six to eight thoughtful African professionals seated around a dark wood circular or oval table in an intimate architectural room, engaged in a serious discussion rather than posing for a camera. The atmosphere should suggest institutional design, systems architecture, strategic judgment and difficult questions. Use layered architectural lines, warm window or practical lighting, forest-green and warm-cream tones, subtle gold details and believable notebooks/documents without readable text. No podium, no large audience, no generic conference staging. The composition should feel private, intelligent and consequential, with natural gestures and eye contact. Horizontal 16:9 master.

**Route:** `/events/architects-roundtable/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-case-study-lab.jpg` — Case Study Lab (16:9 master)
Create a premium editorial-cinematic photograph of a **case-study analysis laboratory**: a group of distinguished Black African professionals gathered around a large table examining a complex real-world situation through printed maps, charts, notes and a Black African facilitator guiding the diagnosis. The visual story is situation → diagnosis → interpretation → application. All visible participants are Black African professionals. Avoid generic classroom imagery; make it feel like a strategic working session where people are testing assumptions and connecting evidence. Use warm controlled lighting, deep green and cream surroundings, restrained crimson and gold accents, natural human interaction and tactile paper materials. No readable text, logos or legible chart labels. Horizontal 16:9 master.

**Route:** `/events/case-study-lab/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-frameworks-in-practice.jpg` — Frameworks in Practice (16:9 master)
Create a premium editorial-cinematic photograph showing a **framework being applied to a real problem**: a facilitator and a small group of leaders working at a table with cards, diagrams represented only as abstract shapes, notebooks and a central problem statement represented visually but without readable text. The scene should communicate practical architecture, pattern recognition, disciplined interpretation and collaborative reasoning. Use a refined studio/workshop environment with forest-green wall planes, warm cream surfaces, soft directional light and restrained gold accents. The people should be actively reasoning, pointing, listening and revising rather than posing. No generic motivational workshop clichés, no readable text, no logos. Horizontal 16:9 master.

**Route:** `/events/frameworks-in-practice/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-institution-builders-forum.jpg` — Institution Builders Forum (16:9 master)
Create a premium editorial-cinematic image of an **institution-builders forum** in an elegant African/global leadership setting: senior leaders and institution builders seated in a semicircle or long-table forum discussing governance, continuity, institutional memory and endurance. The mood should be sober, constructive and future-oriented. Include subtle architectural cues suggesting permanence—columns, long lines, layered rooms or a civic/institutional interior—without becoming governmental propaganda. Diverse African leadership presence, authentic expressions and thoughtful listening. Deep forest green, warm cream, restrained gold and subtle crimson accents. No podium-heavy conference staging, no readable text, no logos. Horizontal 16:9 master.

**Route:** `/events/institution-builders-forum/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-leadership-power-systems-workshop.jpg` — Leadership, Power & Systems Workshop (16:9 master)
Create a premium editorial-cinematic photograph of a **leadership, power and systems workshop**: a Nigerian facilitator leading a group of experienced executives through a serious systems conversation in a contemporary boardroom. Visually communicate leadership behaviour, power dynamics, organisational structure and consequence through posture, spatial relationships and architectural geometry rather than literal symbols. Show participants in genuine dialogue around a table, with one person explaining a systems relationship while others consider the implications. Warm natural lighting, deep green architecture, cream surfaces, restrained gold details and subtle crimson accents. No readable presentation text or logos. Horizontal 16:9 master.

**Route:** `/events/leadership-power-systems-workshop/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-prepared-mind-live.jpg` — Prepared Mind Live (16:9 master)
Create a premium editorial-cinematic image for **Prepared Mind Live**: an intimate live intellectual session where a Nigerian speaker stands before a small, attentive audience, with the room arranged to feel like a strategic briefing rather than entertainment. The visual story is awareness before action, preparation before consequence and deliberate decision-making. Use a refined stage or studio environment with dark forest-green backdrop planes, warm practical lighting, subtle architectural framing and restrained gold accents. Audience members should appear deeply attentive, taking notes or reflecting, with natural expressions. Keep the speaker composed and intelligent, not theatrical. No readable slides, logos or text. Horizontal 16:9 master.

**Route:** `/events/prepared-mind-live/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-strategic-intelligence-intensive.jpg` — Strategic Intelligence Intensive (16:9 master)
Create a premium editorial-cinematic photograph representing an **intensive strategic intelligence masterclass**: a concentrated group of senior leaders in a premium learning environment, working through patterns, signals and strategic choices with a Nigerian facilitator. The scene should feel more immersive and demanding than a conventional seminar—focused faces, notebooks, deliberate gestures, layered working surfaces and a sense of sustained intellectual concentration. Suggest foresight and pattern recognition through abstract maps, connected materials and architectural geometry, but do not create readable diagrams or text. Deep forest green, warm cream, restrained gold, sophisticated natural lighting and realistic professional diversity. Horizontal 16:9 master.

**Route:** `/events/strategic-intelligence-intensive/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

### `event-strategic-intelligence-live.jpg` — Strategic Intelligence Live (16:9 master)
Create a premium editorial-cinematic photograph of a **live strategic intelligence conversation**: a Nigerian speaker or facilitator in a refined contemporary venue speaking to a thoughtful audience while another participant or moderator engages in dialogue. The visual should communicate pattern intelligence, foresight, interpretation and strategic judgment rather than generic public speaking. Use cinematic depth, warm stage lighting balanced by deep forest-green environmental tones, cream and restrained gold accents, realistic audience diversity and natural engagement. Include subtle architectural lines and negative space for editorial cropping. No readable presentation text, no fake logos, no watermark. Horizontal 16:9 master.

**Route:** `/events/strategic-intelligence-live/`
**Used for:** Listing card and event-detail hero.
**Placeholder:** Approved gradient + `segunsamuel-logo-badge-01.png`.

**Event prompt coverage:** 10 exact production image contracts — one for the Events landing page and one for each of the nine current Event Detail pages.


# PODCAST — COMPLETED EXACT IMAGE PROMPTS FOR ALL CURRENT DETAIL PLACEHOLDERS

### `podcast-building-beyond-the-founder.jpg` — Podcast detail image (16:9)
**Prompt:** Building Beyond the Founder — Create a premium editorial-cinematic image about the transition from founder-centric leadership to durable organisational architecture: a senior African professional examining a large architectural model while layered structural forms extend beyond a single central figure, suggesting succession, systems and institutional continuity. Sophisticated modern African/global intellectual aesthetic, deep forest green, deep teal, warm cream and restrained gold, cinematic natural light, 8K detail, no readable text, no logos, no watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-building-beyond-the-founder.jpg`.
**Production contract:** `podcast-building-beyond-the-founder.jpg` in `/assets/images/`.

### `podcast-building-institutions-that-endure.jpg` — Podcast detail image (16:9)
**Prompt:** Building Institutions That Endure — Create a premium editorial-cinematic image about institutional endurance: a refined civic or organisational interior with long structural lines, layered rooms and subtle human-scale presence, suggesting governance, memory, continuity and stewardship beyond one generation. Sophisticated modern African/global intellectual aesthetic, deep forest green, deep teal, warm cream and restrained gold, cinematic natural light, 8K detail, no readable text, no logos, no watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-building-institutions-that-endure.jpg`.
**Production contract:** `podcast-building-institutions-that-endure.jpg` in `/assets/images/`.

### `podcast-intelligence-in-practice.jpg` — Podcast detail image (16:9)
**Prompt:** Intelligence in Practice — Create a premium editorial-cinematic image of strategic intelligence being applied in real time: thoughtful Black African professionals examining evidence, notes and abstract pattern materials around a refined table, with one facilitator guiding interpretation. Natural interaction, serious concentration, deep green architecture, warm cream surfaces and restrained gold. No readable text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-intelligence-in-practice.jpg`.
**Production contract:** `podcast-intelligence-in-practice.jpg` in `/assets/images/`.

### `podcast-patterns-beneath-the-surface.jpg` — Podcast detail image (16:9)
**Prompt:** Patterns Beneath the Surface — Create a premium editorial-cinematic image representing hidden patterns becoming visible: layered architectural structures, interconnected pathways, subtle human observation and a controlled beam of light revealing relationships beneath an apparently simple surface. Intelligent, restrained and metaphorical, deep forest green, warm cream, muted gold, selective crimson, 8K cinematic editorial quality, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-patterns-beneath-the-surface.jpg`.
**Production contract:** `podcast-patterns-beneath-the-surface.jpg` in `/assets/images/`.

### `podcast-power-human-behaviour.jpg` — Podcast detail image (16:9)
**Prompt:** Power & Human Behaviour — Create a premium editorial-cinematic image of a serious conversation about power and human behaviour: distinguished Black African professionals in a sophisticated room, subtle spatial asymmetry and body language communicating influence, negotiation and perception without melodrama. Deep green, warm cream, restrained gold, natural cinematic lighting, 8K editorial realism, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-power-human-behaviour.jpg`.
**Production contract:** `podcast-power-human-behaviour.jpg` in `/assets/images/`.

### `podcast-power-people-the-shadow.jpg` — Podcast detail image (16:9)
**Prompt:** Power, People & the Shadow — Create a premium editorial-cinematic image representing the visible and hidden dimensions of power in human systems: a composed group of Black African professionals in a refined boardroom, one side illuminated and another falling into controlled architectural shadow, suggesting the seen and unseen dynamics of leadership. No literal violence, no readable text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-power-people-the-shadow.jpg`.
**Production contract:** `podcast-power-people-the-shadow.jpg` in `/assets/images/`.

### `podcast-principles-that-survive-change.jpg` — Podcast detail image (16:9)
**Prompt:** Principles That Survive Change — Create a premium editorial-cinematic image of enduring principles amid changing conditions: a stable architectural structure standing within a landscape where materials and light transition from old to new, suggesting continuity without rigidity. Deep green, warm cream, restrained gold and subtle crimson, cinematic atmospheric perspective, 8K, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-principles-that-survive-change.jpg`.
**Production contract:** `podcast-principles-that-survive-change.jpg` in `/assets/images/`.

### `podcast-strategic-foresight-conversations.jpg` — Podcast detail image (16:9)
**Prompt:** Strategic Foresight Conversations — Create a premium editorial-cinematic image of two or three distinguished Black African professionals in an intimate strategic conversation, examining future scenarios through abstract maps, pathways and horizon imagery. Serious, thoughtful, natural interaction, sophisticated African/global intellectual aesthetic, deep green, warm cream and restrained gold, no readable text or logos. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-strategic-foresight-conversations.jpg`.
**Production contract:** `podcast-strategic-foresight-conversations.jpg` in `/assets/images/`.

### `podcast-strategy-in-an-uncertain-world.jpg` — Podcast detail image (16:9)
**Prompt:** Strategy in an Uncertain World — Create a premium editorial-cinematic image of a strategic leader studying multiple possible pathways through a sophisticated architectural environment, with several routes visible and one carefully illuminated direction ahead. Communicate uncertainty without chaos. Deep forest green, warm cream, muted gold, restrained crimson, cinematic 8K editorial realism, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-strategy-in-an-uncertain-world.jpg`.
**Production contract:** `podcast-strategy-in-an-uncertain-world.jpg` in `/assets/images/`.

### `podcast-technology-as-leverage.jpg` — Podcast detail image (16:9)
**Prompt:** Technology as Leverage — Create a premium editorial-cinematic image showing technology as a force multiplier for human capability: an elegant African professional working with abstract digital systems layered over physical organisational structures, connecting people, data and decisions. No readable interfaces or code. Deep green, teal, warm cream, restrained gold, cinematic natural light, 8K, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-technology-as-leverage.jpg`.
**Production contract:** `podcast-technology-as-leverage.jpg` in `/assets/images/`.

### `podcast-the-architecture-of-reality.jpg` — Podcast detail image (16:9)
**Prompt:** The Architecture of Reality — Create a premium editorial-cinematic conceptual image of reality as a constructed system: layered architectural planes, windows, pathways and a composed observer examining how perception, evidence and structure interact. Sophisticated, restrained, philosophical and contemporary, deep green, warm cream and muted gold, no readable text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-architecture-of-reality.jpg`.
**Production contract:** `podcast-the-architecture-of-reality.jpg` in `/assets/images/`.

### `podcast-the-architecture-of-seeing.jpg` — Podcast detail image (16:9)
**Prompt:** The Architecture of Seeing — Create a premium editorial-cinematic image representing disciplined perception: a thoughtful Black African professional standing before a complex architectural interior where lines, reflections and openings progressively clarify a central view. Calm strategic intelligence, deep forest green, warm cream and restrained gold, cinematic natural light, 8K, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-architecture-of-seeing.jpg`.
**Production contract:** `podcast-the-architecture-of-seeing.jpg` in `/assets/images/`.

### `podcast-the-hidden-game-of-power.jpg` — Podcast detail image (16:9)
**Prompt:** The Hidden Game of Power — Create a premium editorial-cinematic image of an elegant strategic room where visible seating and subtle spatial asymmetry reveal an unseen hierarchy, with distinguished Black African professionals engaged in restrained conversation. Communicate hidden influence through composition rather than literal symbols. Deep green, warm cream, restrained crimson and gold, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-hidden-game-of-power.jpg`.
**Production contract:** `podcast-the-hidden-game-of-power.jpg` in `/assets/images/`.

### `podcast-the-strategic-architect.jpg` — Podcast detail image (16:9)
**Prompt:** The Strategic Architect — Create a premium editorial-cinematic image of a distinguished Black African strategist examining a large architectural model or systems landscape, with connected structures extending toward a distant horizon. The visual story is design before execution, architecture before action. Deep forest green, warm cream, restrained gold, cinematic 8K realism, no readable text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-strategic-architect.jpg`.
**Production contract:** `podcast-the-strategic-architect.jpg` in `/assets/images/`.

### `podcast-the-strategic-foresight-conversation.jpg` — Podcast detail image (16:9)
**Prompt:** The Strategic Foresight Conversation — Create a premium editorial-cinematic image of a focused conversation between distinguished African professionals about future possibilities, with subtle scenario pathways, horizon light and abstract strategic materials on a table. Natural gestures, intellectual seriousness, deep green and warm cream, restrained gold, no readable text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-strategic-foresight-conversation.jpg`.
**Production contract:** `podcast-the-strategic-foresight-conversation.jpg` in `/assets/images/`.

### `podcast-the-system-behind-the-problem.jpg` — Podcast detail image (16:9)
**Prompt:** The System Behind the Problem — Create a premium editorial-cinematic image showing professionals looking beyond a visible problem to the larger system producing it: layered architecture, connected components and a small group of Black African professionals examining relationships around a table. No literal diagrams or readable labels. Deep green, warm cream, restrained gold, 8K cinematic editorial quality, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-system-behind-the-problem.jpg`.
**Production contract:** `podcast-the-system-behind-the-problem.jpg` in `/assets/images/`.

### `podcast-the-war-within.jpg` — Podcast detail image (16:9)
**Prompt:** The War Within — Create a premium editorial-cinematic image about the internal architecture of leadership and identity: a composed Nigerian man in his 50s in a refined dark study, subtle reflection or layered architectural perspective suggesting the person seen by the world and the person confronting himself. Psychological depth without violence, horror or distress. Deep forest green, warm cream, restrained crimson and gold, natural cinematic light, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-the-war-within.jpg`.
**Production contract:** `podcast-the-war-within.jpg` in `/assets/images/`.

### `podcast-thinking-beyond-the-obvious.jpg` — Podcast detail image (16:9)
**Prompt:** Thinking Beyond the Obvious — Create a premium editorial-cinematic image of a thoughtful Black African strategist looking beyond an obvious foreground path toward a secondary architectural route revealed by light and perspective. Communicate curiosity, second-order thinking and disciplined questioning. Deep green, warm cream, restrained gold, cinematic 8K editorial realism, no text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-thinking-beyond-the-obvious.jpg`.
**Production contract:** `podcast-thinking-beyond-the-obvious.jpg` in `/assets/images/`.

### `podcast-when-strategy-meets-reality.jpg` — Podcast detail image (16:9)
**Prompt:** When Strategy Meets Reality — Create a premium editorial-cinematic image showing strategic plans meeting real operating conditions: a refined planning table with architectural models, notes and practical constraints, with Black African professionals testing assumptions against reality. Serious, tactile and grounded, deep green, warm cream, restrained gold and crimson, no readable text, logos or watermark. Horizontal 16:9.
**Route:** `/podcast/` detail route corresponding to `podcast-when-strategy-meets-reality.jpg`.
**Production contract:** `podcast-when-strategy-meets-reality.jpg` in `/assets/images/`.


# 12. LIBRARY ARTICLES

### `library-[slug].jpg` — Library article visual (16:9)
Symbolic editorial image representing the article's argument through architecture, objects, systems, maps, notebooks, doors, mirrors, paths or strategic environments. No stock-photo aesthetic. No readable text. Horizontal 16:9.

**Pages covered:**


---

# 13. INSIGHTS / ARTICLES

### `insight-[slug].jpg` — Insight/article visual (16:9)
Symbolic editorial image representing the article's argument through architecture, objects, systems, maps, notebooks, paths or strategic environments. No readable text. Horizontal 16:9.

**Pages covered:**


---
# 14. KNOWLEDGE GRAPH ENTITY PAGES

### `entity-[slug].jpg` — Entity detail visual (16:9)
Each entity page receives an exact slug-specific filename. Adapt the image to the entity's canonical type:
- Framework/model/system: architecture, connected structures and mechanisms.
- Stage/battle: symbolic thresholds, paths, rooms, objects or environments; no literal violence.
- Book: authorised real book artwork where applicable.
- Course/learning product: premium learning environment.
- Podcast: conversation/media environment.
- Tool/service/application: implementation environment or artefact.

No readable text, no logos, no literal diagrams with labels. Horizontal 16:9.

**Pages covered:**


---
# 15. SUPPLIED BRAND / REFERENCE ASSETS — DO NOT REGENERATE

### `segunsamuel-logo.png` — Primary Segun Samuel logo/S-mark
Supplied brand asset. Do not regenerate or recolour.

### `segunsamuel-logo-badge-01.png` — Segun Samuel compass badge
Supplied brand asset. Used by the global placeholder system and Podcast fallbacks. Do not regenerate or recolour.

### `segunsamuel-signature-gold.png` — Footer signature
Supplied brand asset. Do not regenerate.

### `instructors/segun-samuel.png` — Instructor reference portrait
Supplied/reference asset used on course detail pages. Do not replace with an invented identity.

---
# 16. PLACEHOLDER → REAL IMAGE CONTRACT

Every image-bearing section must follow this contract:

1. The page declares one exact production filename.
2. The application checks for that exact file.
3. If the file exists, the real image is displayed.
4. If it does not exist, the approved gradient + Segun Samuel badge is displayed.
5. Supplying the real image later automatically removes the placeholder.
6. The real image must occupy the complete intended frame.
7. Rectangular hero images use `object-fit: cover`; the real artwork must not inherit the circular badge treatment.
8. The placeholder is UI fallback, not a substitute asset that needs to be manually deleted.

Canonical fallback gradient:

```css
background: linear-gradient(
  160deg,
  var(--teal-lite) 0%,
  var(--teal-pale) 45%,
  var(--cream-3) 100%
);
```

---
# 17. GENERATION / DELIVERY CHECKLIST

- [ ] Filename exactly matches this document.
- [ ] Correct `/assets/images/` folder/subfolder.
- [ ] Correct aspect ratio.
- [ ] Subject survives mobile crop.
- [ ] No baked website copy.
- [ ] No random AI lettering.
- [ ] No watermark.
- [ ] No invented third-party logos.
- [ ] No distorted hands/faces.
- [ ] Real external book covers are sourced, not generated.
- [ ] Supplied identity references are respected.
- [ ] Placeholder remains when real asset is absent.
- [ ] Placeholder automatically disappears when real asset is supplied.
- [ ] Real image fills the intended frame.

---
# 18. PAGE-BY-PAGE IMAGE COVERAGE REGISTER


This register explicitly maps every current route family to its image filename contract. Pages without a dedicated image are intentionally marked as such.


## APPLY — CURRENT ENGAGEMENT ROUTES

- `/apply/` — APPLY — SegunSamuel — **no custom image; gateway page**
- `/mentoring/` — Strategic Mentoring — SegunSamuel — **`mentoring-hero.jpg` (16:9) + `inner-dimension.jpg` (16:9); optional `mentoring-session-editorial.jpg` (16:10)**
- `/speaking/` — Speaking — SegunSamuel — **`speaking-hero.jpg` (16:9) + `speaking-room.jpg` (16:9)**
- `/consulting/` — Consulting — SegunSamuel — **`consulting-hero.jpg` (16:9) + `strategic-room.jpg` (16:9)**
- `/masterclasses/` — Masterclasses — SegunSamuel — **see `masterclass-[slug].jpg` contract below**

## Courses

- `/courses/advanced-data-analytics-power-bi.html` — Advanced Data Analytics & Power BI — **no custom image; commerce utility page**
- `/courses/advanced-data-analytics-power-bi/` — Advanced Data Analytics & Power BI — SegunSamuel — **`course-detail-hero-advanced-data-analytics-power-bi.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/ai-for-business-professional-productivity/` — AI for Business & Professional Productivity | Segun Samuel — **`course-detail-hero-ai-for-business-professional-productivity.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/ai-for-strategic-capability/` — AI for Strategic Capability — SegunSamuel — **`course-detail-hero-ai-for-strategic-capability.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/ai-mastery-from-zero-to-ai-practitioner/` — AI Mastery: From Zero to AI Practitioner | Segun Samuel — **`course-detail-hero-ai-mastery-from-zero-to-ai-practitioner.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/applied-ai/` — Artificial Intelligence: From Zero to Applied AI — SegunSamuel — **`course-detail-hero-applied-ai.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/cart.html` — Cart — SegunSamuel — **no custom image; commerce utility page**
- `/courses/checkout.html` — Checkout — SegunSamuel — **no custom image; commerce utility page**
- `/courses/execution-intelligence/` — Execution Intelligence — SegunSamuel — **`course-detail-hero-execution-intelligence.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/generalist-data-ai-skills-academy/` — Generalist Data & AI Skills Academy | Segun Samuel — **`course-detail-hero-generalist-data-ai-skills-academy.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/` — Courses — Segun Samuel — **course catalogue card images — see `courses/*.jpg` entries above**
- `/courses/institutional-intelligence/` — Institutional Intelligence — SegunSamuel — **`course-detail-hero-institutional-intelligence.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/leadership-intelligence/` — Leadership Intelligence — SegunSamuel — **`course-detail-hero-leadership-intelligence.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/pattern-intelligence/` — Pattern Intelligence — SegunSamuel — **`course-detail-hero-pattern-intelligence.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/python-for-data-analytics/` — Python for Data Analytics | Segun Samuel — **`course-detail-hero-python-for-data-analytics.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/sql-database-development/` — SQL & Database Development | Segun Samuel — **`course-detail-hero-sql-database-development.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/strategic-foresight/` — Strategic Foresight — SegunSamuel — **`course-detail-hero-strategic-foresight.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/systems-architecture/` — Systems & Strategic Architecture — SegunSamuel — **`course-detail-hero-systems-architecture.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/systems-strategic-architecture/` — Systems & Strategic Architecture — SegunSamuel — **`course-detail-hero-systems-strategic-architecture.jpg` (16:9) + shared testimonial media where applicable**
- `/courses/thinking-clearly/` — Thinking Clearly in a Complex World — SegunSamuel — **`course-detail-hero-thinking-clearly.jpg` (16:9) + shared testimonial media where applicable**

## Frameworks

- `/frameworks/ai-digital-intelligence/` — AI & Digital Intelligence — SegunSamuel Framework — **`framework-ai-digital-intelligence.jpg` (16:9)**
- `/frameworks/architect-within/` — The Architect Within — SegunSamuel Framework — **`framework-architect-within.jpg` (16:9)**
- `/frameworks/execution-intelligence/` — Execution Intelligence — SegunSamuel — **`framework-execution-intelligence.jpg` (16:9)**
- `/frameworks/five-stage-intelligence/` — Five-Stage Intelligence Architecture — SegunSamuel — **`framework-five-stage-intelligence.jpg` (16:9)**
- `/frameworks/human-behaviour-power/` — Human Behaviour & Power — SegunSamuel Framework — **`framework-human-behaviour-power.jpg` (16:9)**
- `/frameworks/human-behaviour-shadow-dynamics/` — Human Behaviour & Shadow Dynamics — SegunSamuel — **`framework-human-behaviour-shadow-dynamics.jpg` (16:9)**
- `/frameworks/ibonk/` — IBONK Framework — SegunSamuel — **`framework-ibonk.jpg` (16:9)**
- `/frameworks/` — Framework IP — SegunSamuel — **`framework-frameworks.jpg` (16:9)**
- `/frameworks/institutional-intelligence/` — Institutional Intelligence — SegunSamuel — **`framework-institutional-intelligence.jpg` (16:9)**
- `/frameworks/leadership-intelligence/` — Leadership Intelligence — SegunSamuel — **`framework-leadership-intelligence.jpg` (16:9)**
- `/frameworks/pattern-intelligence/` — Pattern Intelligence — SegunSamuel — **`framework-pattern-intelligence.jpg` (16:9)**
- `/frameworks/plan/` — PLAN Strategic Framework — SegunSamuel — **`framework-plan.jpg` (16:9)**
- `/frameworks/strategic-foresight/` — Strategic Foresight — SegunSamuel — **`framework-strategic-foresight.jpg` (16:9)**
- `/frameworks/strategic-thinking/` — Strategic Thinking — SegunSamuel Framework — **`framework-strategic-thinking.jpg` (16:9)**
- `/frameworks/systems-strategic-architecture/` — Systems & Strategic Architecture — SegunSamuel — **`framework-systems-strategic-architecture.jpg` (16:9)**
- `/frameworks/tea/` — TEA Framework — SegunSamuel — **`framework-tea.jpg` (16:9)**

## Models

- `/models/five-stage-intelligence-architecture/` — Five-Stage Intelligence Architecture — SegunSamuel — **`model-five-stage-intelligence-architecture.jpg` (16:9)**
- `/models/` — Models, Principles & Mental Models — SegunSamuel — **`model-models.jpg` (16:9)**
- `/models/plan-strategic-framework/` — PLAN Strategic Framework — SegunSamuel — **`model-plan-strategic-framework.jpg` (16:9)**
- `/models/tea-time-energy-attention/` — TEA — Time, Energy & Attention — SegunSamuel — **`model-tea-time-energy-attention.jpg` (16:9)**
- `/models/the-laws-of-strategic-thinking/` — The Laws of Strategic Thinking — SegunSamuel — **`model-the-laws-of-strategic-thinking.jpg` (16:9)**
- `/models/the-prepared-mind-method/` — The Prepared Mind Method™ — SegunSamuel — **`model-the-prepared-mind-method.jpg` (16:9)**

## Learning Paths

- `/learning-paths/ai-data-career-launchpad/` — AI & Data Career Launchpad — SegunSamuel — **`learning-path-ai-data-career-launchpad.jpg` (16:9)**
- `/learning-paths/ai-digital-intelligence/` — AI & Digital Intelligence — SegunSamuel Learning Path — **`learning-path-ai-digital-intelligence.jpg` (16:9)**
- `/learning-paths/architect-of-strategic-intelligence/` — Architect of Strategic Intelligence — SegunSamuel — **`learning-path-architect-of-strategic-intelligence.jpg` (16:9)**
- `/learning-paths/architect-within/` — The Architect Within — SegunSamuel Learning Path — **`learning-path-architect-within.jpg` (16:9)**
- `/learning-paths/data-analytical-intelligence/` — Data & Analytical Intelligence — SegunSamuel Learning Path — **`learning-path-data-analytical-intelligence.jpg` (16:9)**
- `/learning-paths/digital-intelligence-professional/` — Digital Intelligence Professional — SegunSamuel — **`learning-path-digital-intelligence-professional.jpg` (16:9)**
- `/learning-paths/execution-intelligence/` — Execution Intelligence — SegunSamuel Learning Path — **`learning-path-execution-intelligence.jpg` (16:9)**
- `/learning-paths/` — Learning Paths — SegunSamuel — **`learning-path-learning-paths.jpg` (16:9)**
- `/learning-paths/institutional-intelligence/` — Institutional Intelligence — SegunSamuel Learning Path — **`learning-path-institutional-intelligence.jpg` (16:9)**
- `/learning-paths/leader-and-institution-builder/` — Leader & Institution Builder — SegunSamuel — **`learning-path-leader-and-institution-builder.jpg` (16:9)**
- `/learning-paths/leadership-intelligence/` — Leadership Intelligence — SegunSamuel Learning Path — **`learning-path-leadership-intelligence.jpg` (16:9)**
- `/learning-paths/leadership-power-human-behaviour/` — Leadership, Power & Human Behaviour — SegunSamuel — **`learning-path-leadership-power-human-behaviour.jpg` (16:9)**
- `/learning-paths/pattern-intelligence/` — Pattern Intelligence — SegunSamuel Learning Path — **`learning-path-pattern-intelligence.jpg` (16:9)**
- `/learning-paths/strategic-architect/` — The Strategic Architect Path — SegunSamuel — **`learning-path-strategic-architect.jpg` (16:9)**
- `/learning-paths/strategic-foresight/` — Strategic Foresight — SegunSamuel Learning Path — **`learning-path-strategic-foresight.jpg` (16:9)**
- `/learning-paths/strategic-intelligence-foresight/` — Strategic Intelligence & Foresight — SegunSamuel — **`learning-path-strategic-intelligence-foresight.jpg` (16:9)**
- `/learning-paths/strategic-thinking/` — Strategic Thinking & Mental Models — SegunSamuel Learning Path — **`learning-path-strategic-thinking.jpg` (16:9)**
- `/learning-paths/systems-strategic-architecture/` — Systems & Strategic Architecture — SegunSamuel — **`learning-path-systems-strategic-architecture.jpg` (16:9)**
- `/learning-paths/the-prepared-mind/` — The Prepared Mind — SegunSamuel — **`learning-path-the-prepared-mind.jpg` (16:9)**

## Masterclasses

- `/masterclasses/ai-as-strategic-capability/` — AI as Strategic Capability — SegunSamuel — **`masterclass-ai-as-strategic-capability.jpg` (16:9)**
- `/masterclasses/architecting-systems-that-endure/` — Architecting Systems That Endure — SegunSamuel — **`masterclass-architecting-systems-that-endure.jpg` (16:9)**
- `/masterclasses/architecture-of-execution/` — The Architecture of Execution — SegunSamuel — **`masterclass-architecture-of-execution.jpg` (16:9)**
- `/masterclasses/building-enduring-institutions/` — Building Enduring Institutions — SegunSamuel — **`masterclass-building-enduring-institutions.jpg` (16:9)**
- `/masterclasses/execution-intelligence-intensive/` — Execution Intelligence Intensive — SegunSamuel — **`masterclass-execution-intelligence-intensive.jpg` (16:9)**
- `/masterclasses/five-stages-of-intelligence/` — From Perception to Execution — SegunSamuel Masterclass — **`masterclass-five-stages-of-intelligence.jpg` (16:9)**
- `/masterclasses/` — Masterclasses — SegunSamuel — **`masterclass-masterclasses.jpg` (16:9)**
- `/masterclasses/institution-that-endures/` — Building Institutions That Endure — SegunSamuel Masterclass — **`masterclass-institution-that-endures.jpg` (16:9)**
- `/masterclasses/leadership-intelligence-power-people-systems/` — Leadership Intelligence: Power, People & Systems — SegunSamuel — **`masterclass-leadership-intelligence-power-people-systems.jpg` (16:9)**
- `/masterclasses/leading-when-reality-changes/` — Leading When Reality Changes — SegunSamuel Masterclass — **`masterclass-leading-when-reality-changes.jpg` (16:9)**
- `/masterclasses/mastering-pattern-intelligence/` — Mastering Pattern Intelligence — SegunSamuel — **`masterclass-mastering-pattern-intelligence.jpg` (16:9)**
- `/masterclasses/pattern-intelligence-lab/` — Pattern Intelligence Lab — SegunSamuel — **`masterclass-pattern-intelligence-lab.jpg` (16:9)**
- `/masterclasses/power-leadership-and-human-systems/` — Power, Leadership & Human Systems — SegunSamuel — **`masterclass-power-leadership-and-human-systems.jpg` (16:9)**
- `/masterclasses/seeing-the-hidden-game/` — Seeing the Hidden Game — SegunSamuel Masterclass — **`masterclass-seeing-the-hidden-game.jpg` (16:9)**
- `/masterclasses/strategic-foresight-intensive/` — Strategic Foresight Intensive — SegunSamuel — **`masterclass-strategic-foresight-intensive.jpg` (16:9)**
- `/masterclasses/strategic-foresight-under-uncertainty/` — Strategic Foresight Under Uncertainty — SegunSamuel — **`masterclass-strategic-foresight-under-uncertainty.jpg` (16:9)**
- `/masterclasses/the-shadow-side-of-power/` — The Shadow Side of Power — SegunSamuel — **`masterclass-the-shadow-side-of-power.jpg` (16:9)**
- `/masterclasses/the-war-within/` — The War Within: The Architecture of the Inner Battle — SegunSamuel Masterclass — **`masterclass-the-war-within.jpg` (16:9)**
- `/masterclasses/thinking-in-systems/` — Thinking in Systems — SegunSamuel Masterclass — **`masterclass-thinking-in-systems.jpg` (16:9)**

## Case Studies

- `/case-studies/ai-enabled-professional-workflow/` — AI-Enabled Professional Workflow — Case Study | SegunSamuel — **`case-study-ai-enabled-professional-workflow.jpg` (16:9)**
- `/case-studies/architecting-a-sustainable-operating-system/` — Architecting a Sustainable Operating System — SegunSamuel — **`case-study-architecting-a-sustainable-operating-system.jpg` (16:9)**
- `/case-studies/attention-as-strategy/` — Attention as Strategy — SegunSamuel Case Study — **`case-study-attention-as-strategy.jpg` (16:9)**
- `/case-studies/building-institutional-memory/` — Building Institutional Memory — Case Study | SegunSamuel — **`case-study-building-institutional-memory.jpg` (16:9)**
- `/case-studies/business-performance-turnaround/` — Business Performance Turnaround — Case Study | SegunSamuel — **`case-study-business-performance-turnaround.jpg` (16:9)**
- `/case-studies/` — Case Studies — SegunSamuel — **`case-study-case-studies.jpg` (16:9)**
- `/case-studies/institution-after-the-founder/` — Institution After the Founder — SegunSamuel Case Study — **`case-study-institution-after-the-founder.jpg` (16:9)**
- `/case-studies/leadership-under-pressure/` — Leadership Under Pressure — Case Study | SegunSamuel — **`case-study-leadership-under-pressure.jpg` (16:9)**
- `/case-studies/pattern-intelligence-in-a-business-decision/` — Pattern Intelligence in a Business Decision — SegunSamuel — **`case-study-pattern-intelligence-in-a-business-decision.jpg` (16:9)**
- `/case-studies/power-without-authority/` — Power Without Authority — SegunSamuel Case Study — **`case-study-power-without-authority.jpg` (16:9)**
- `/case-studies/redesigning-an-organisation/` — Redesigning an Organisation — Case Study | SegunSamuel — **`case-study-redesigning-an-organisation.jpg` (16:9)**
- `/case-studies/signals-before-the-shift/` — Signals Before the Shift — SegunSamuel Case Study — **`case-study-signals-before-the-shift.jpg` (16:9)**
- `/case-studies/strategic-foresight-under-uncertainty/` — Strategic Foresight Under Uncertainty — SegunSamuel — **`case-study-strategic-foresight-under-uncertainty.jpg` (16:9)**
- `/case-studies/strategy-that-could-not-execute/` — The Strategy That Could Not Execute — SegunSamuel Case Study — **`case-study-strategy-that-could-not-execute.jpg` (16:9)**
- `/case-studies/strategy-under-uncertainty/` — Strategy Under Uncertainty — Case Study | SegunSamuel — **`case-study-strategy-under-uncertainty.jpg` (16:9)**
- `/case-studies/the-hidden-game/` — The Hidden Game — SegunSamuel Case Study — **`case-study-the-hidden-game.jpg` (16:9)**
- `/case-studies/the-shadow-side-of-organisational-power/` — The Shadow Side of Organisational Power — SegunSamuel — **`case-study-the-shadow-side-of-organisational-power.jpg` (16:9)**
- `/case-studies/the-system-is-the-problem/` — The System Is the Problem — SegunSamuel Case Study — **`case-study-the-system-is-the-problem.jpg` (16:9)**
- `/case-studies/when-data-is-not-insight/` — When Data Is Not Insight — SegunSamuel Case Study — **`case-study-when-data-is-not-insight.jpg` (16:9)**

## Applications

- `/application/ai-business-workflow/` — AI Business Workflow Redesign — SegunSamuel Application — **`application-ai-business-workflow.jpg` (16:9)**
- `/application/ai-capability-project/` — AI Capability Project — Application | SegunSamuel — **`application-ai-capability-project.jpg` (16:9)**
- `/application/ai-data-portfolio-project/` — AI & Data Portfolio Project — SegunSamuel — **`application-ai-data-portfolio-project.jpg` (16:9)**
- `/application/analytics-decision-system/` — Analytics-to-Decision System — SegunSamuel Application — **`application-analytics-decision-system.jpg` (16:9)**
- `/application/analytics-portfolio-project/` — Analytics Portfolio Project — Application | SegunSamuel — **`application-analytics-portfolio-project.jpg` (16:9)**
- `/application/architect-within-practice/` — The Architect Within Practice — SegunSamuel Application — **`application-architect-within-practice.jpg` (16:9)**
- `/application/execution-operating-system/` — Execution Operating System — Application | SegunSamuel — **`application-execution-operating-system.jpg` (16:9)**
- `/application/execution-war-room/` — Execution War Room — SegunSamuel Application — **`application-execution-war-room.jpg` (16:9)**
- `/application/future-scenario-studio/` — Future Scenario Studio — SegunSamuel Application — **`application-future-scenario-studio.jpg` (16:9)**
- `/application/` — Applications & Projects — SegunSamuel — **`application-application.jpg` (16:9)**
- `/application/institution-builder/` — Institution Builder Challenge — SegunSamuel Application — **`application-institution-builder.jpg` (16:9)**
- `/application/institutional-design-project/` — Institutional Design Project — Application | SegunSamuel — **`application-institutional-design-project.jpg` (16:9)**
- `/application/leadership-intelligence-field-application/` — Leadership Intelligence Field Application — SegunSamuel — **`application-leadership-intelligence-field-application.jpg` (16:9)**
- `/application/leadership-intelligence-project/` — Leadership Intelligence Project — Application | SegunSamuel — **`application-leadership-intelligence-project.jpg` (16:9)**
- `/application/leadership-power-dynamics/` — Leadership & Power Dynamics Simulation — SegunSamuel Application — **`application-leadership-power-dynamics.jpg` (16:9)**
- `/application/pattern-analysis-project/` — Pattern Analysis Project — Application | SegunSamuel — **`application-pattern-analysis-project.jpg` (16:9)**
- `/application/pattern-detection-lab/` — Pattern Detection Lab — SegunSamuel Application — **`application-pattern-detection-lab.jpg` (16:9)**
- `/application/strategic-decision-lab/` — Strategic Decision Lab — SegunSamuel — **`application-strategic-decision-lab.jpg` (16:9)**
- `/application/strategic-foresight-project/` — Strategic Foresight Project — Application | SegunSamuel — **`application-strategic-foresight-project.jpg` (16:9)**
- `/application/strategic-thinking-case/` — Strategic Thinking Decision Lab — SegunSamuel Application — **`application-strategic-thinking-case.jpg` (16:9)**
- `/application/systems-architecture-project/` — Systems Architecture Project — SegunSamuel — **`application-systems-architecture-project.jpg` (16:9)**
- `/application/systems-redesign-project/` — Systems Redesign Project — SegunSamuel Application — **`application-systems-redesign-project.jpg` (16:9)**

## Events

- `/events/ai-strategy-workshop/` — AI & Strategic Capability Workshop — Events | SegunSamuel — **`event-ai-strategy-workshop.jpg` (16:9 master)**
- `/events/architects-roundtable/` — The Architects Roundtable — Events | SegunSamuel — **`event-architects-roundtable.jpg` (16:9 master)**
- `/events/case-study-lab/` — Case Study Lab — Events | SegunSamuel — **`event-case-study-lab.jpg` (16:9 master)**
- `/events/frameworks-in-practice/` — Frameworks in Practice — Events | SegunSamuel — **`event-frameworks-in-practice.jpg` (16:9 master)**
- `/events/` — Events — SegunSamuel — **`event-events.jpg` (16:9 master)**
- `/events/institution-builders-forum/` — Institution Builders Forum — Events | SegunSamuel — **`event-institution-builders-forum.jpg` (16:9 master)**
- `/events/leadership-power-systems-workshop/` — Leadership, Power & Systems Workshop — SegunSamuel — **`event-leadership-power-systems-workshop.jpg` (16:9 master)**
- `/events/prepared-mind-live/` — Prepared Mind Live — SegunSamuel — **`event-prepared-mind-live.jpg` (16:9 master)**
- `/events/strategic-intelligence-intensive/` — Strategic Intelligence Intensive — SegunSamuel — **`event-strategic-intelligence-intensive.jpg` (16:9 master)**
- `/events/strategic-intelligence-live/` — Strategic Intelligence Live — Events | SegunSamuel — **`event-strategic-intelligence-live.jpg` (16:9 master)**

## Podcast

- `/podcast/building-beyond-the-founder/` — Building Beyond the Founder — SegunSamuel Podcast — **`podcast-building-beyond-the-founder.jpg` (16:9)**
- `/podcast/building-institutions-that-endure/` — Building Institutions That Endure — SegunSamuel — **`podcast-building-institutions-that-endure.jpg` (16:9)**
- `/podcast/building-systems-that-outlive-you/` — The Architecture of Seeing — SegunSamuel — **`podcast-building-systems-that-outlive-you.jpg` (16:9)**
- `/podcast/` — Podcast — SegunSamuel — **`podcast-hero.jpg`**
- `/podcast/intelligence-in-practice/` — Intelligence in Practice — Podcast | SegunSamuel — **`podcast-intelligence-in-practice.jpg` (16:9)**
- `/podcast/patterns-beneath-the-surface/` — Patterns Beneath the Surface — Podcast | SegunSamuel — **`podcast-patterns-beneath-the-surface.jpg` (16:9)**
- `/podcast/power-human-behaviour/` — Power & Human Behaviour — Podcast | SegunSamuel — **`podcast-power-human-behaviour.jpg` (16:9)**
- `/podcast/power-people-the-shadow/` — Power, People & the Shadow — SegunSamuel — **`podcast-power-people-the-shadow.jpg` (16:9)**
- `/podcast/principles-that-survive-change/` — Principles That Survive Change — SegunSamuel Podcast — **`podcast-principles-that-survive-change.jpg` (16:9)**
- `/podcast/strategic-foresight-conversations/` — Strategic Foresight Conversations — Podcast | SegunSamuel — **`podcast-strategic-foresight-conversations.jpg` (16:9)**
- `/podcast/strategy-in-an-uncertain-world/` — Strategy in an Uncertain World — SegunSamuel Podcast — **`podcast-strategy-in-an-uncertain-world.jpg` (16:9)**
- `/podcast/technology-as-leverage/` — Technology as Leverage — SegunSamuel Podcast — **`podcast-technology-as-leverage.jpg` (16:9)**
- `/podcast/the-architecture-of-reality/` — The Architecture of Reality — Podcast | SegunSamuel — **`podcast-the-architecture-of-reality.jpg` (16:9)**
- `/podcast/the-architecture-of-seeing/` — The Architecture of Seeing — SegunSamuel — **`podcast-the-architecture-of-seeing.jpg` (16:9)**
- `/podcast/the-hidden-game-of-power/` — The Hidden Game of Power — SegunSamuel Podcast — **`podcast-the-hidden-game-of-power.jpg` (16:9)**
- `/podcast/the-strategic-architect/` — The Strategic Architect — Podcast | SegunSamuel — **`podcast-the-strategic-architect.jpg` (16:9)**
- `/podcast/the-strategic-foresight-conversation/` — The Strategic Foresight Conversation — SegunSamuel — **`podcast-the-strategic-foresight-conversation.jpg` (16:9)**
- `/podcast/the-system-behind-the-problem/` — The System Behind the Problem — SegunSamuel Podcast — **`podcast-the-system-behind-the-problem.jpg` (16:9)**
- `/podcast/the-war-within/` — The War Within — SegunSamuel Podcast — **`podcast-the-war-within.jpg` (16:9)**
- `/podcast/thinking-beyond-the-obvious/` — Thinking Beyond the Obvious — SegunSamuel Podcast — **`podcast-thinking-beyond-the-obvious.jpg` (16:9)**
- `/podcast/when-strategy-meets-reality/` — When Strategy Meets Reality — SegunSamuel Podcast — **`podcast-when-strategy-meets-reality.jpg` (16:9)**

## Library Articles

- `/library/articles/building-institutional-memory/` — Building Institutional Memory — SegunSamuel — **`library-building-institutional-memory.jpg` (16:9)**
- `/library/articles/dark-psychology-as-a-lens/` — Dark Psychology as a Lens — SegunSamuel — **`library-dark-psychology-as-a-lens.jpg` (16:9)**
- `/library/articles/execution-is-an-architecture/` — Execution Is an Architecture — SegunSamuel — **`library-execution-is-an-architecture.jpg` (16:9)**
- `/library/articles/mental-models-for-strategic-judgment/` — Mental Models for Strategic Judgment — SegunSamuel — **`library-mental-models-for-strategic-judgment.jpg` (16:9)**
- `/library/articles/patterns-before-predictions/` — Patterns Before Predictions — SegunSamuel — **`library-patterns-before-predictions.jpg` (16:9)**
- `/library/articles/power-beneath-the-surface/` — Power Beneath the Surface — SegunSamuel — **`library-power-beneath-the-surface.jpg` (16:9)**
- `/library/articles/technology-as-capability/` — Technology Is Capability — SegunSamuel — **`library-technology-as-capability.jpg` (16:9)**
- `/library/articles/the-discipline-of-seeing/` — The Discipline of Seeing — SegunSamuel — **`library-the-discipline-of-seeing.jpg` (16:9)**
- `/library/articles/the-system-is-talking/` — The System Is Talking — SegunSamuel — **`library-the-system-is-talking.jpg` (16:9)**
- `/library/articles/the-war-within-and-the-world-without/` — The War Within and the World Without — SegunSamuel — **`library-the-war-within-and-the-world-without.jpg` (16:9)**

## Insights / Articles

- `/articles/architecture-thinking/` — Think Like an Architect, Not Merely a Problem Solver — SegunSamuel — **`insight-architecture-thinking.jpg` (16:9)**
- `/articles/execution-gap/` — The Gap Between Knowing and Doing — SegunSamuel — **`insight-execution-gap.jpg` (16:9)**
- `/articles/future-ready/` — Strategic Foresight Is Preparation, Not Prediction — SegunSamuel — **`insight-future-ready.jpg` (16:9)**
- `/articles/` — Insights — SegunSamuel — **`insight-articles.jpg` (16:9)**
- `/articles/see-reality/` — See Reality Clearly Before You Try to Change It — SegunSamuel — **`insight-see-reality.jpg` (16:9)**
- `/articles/shadow-power/` — The Shadow Side of Power in Organisations — SegunSamuel — **`insight-shadow-power.jpg` (16:9)**

## Knowledge Graph Entities

- `/entity/5ptestm/` — 5PTES™ | Segun Samuel — **`entity-5ptestm.jpg` (16:9)**
- `/entity/ai-prompts-ai-systems/` — AI Prompts / AI Systems | Segun Samuel — **`entity-ai-prompts-ai-systems.jpg` (16:9)**
- `/entity/applications-projects/` — Applications / Projects | Segun Samuel — **`entity-applications-projects.jpg` (16:9)**
- `/entity/battle-1-the-blind-warrior/` — Battle 1 — The Blind Warrior | Segun Samuel — **`entity-battle-1-the-blind-warrior.jpg` (16:9)**
- `/entity/battle-10-the-neglected-temple/` — Battle 10 — The Neglected Temple | Segun Samuel — **`entity-battle-10-the-neglected-temple.jpg` (16:9)**
- `/entity/battle-11-the-inner-saboteur/` — Battle 11 — The Inner Saboteur | Segun Samuel — **`entity-battle-11-the-inner-saboteur.jpg` (16:9)**
- `/entity/battle-12-the-isolation-trap/` — Battle 12 — The Isolation Trap | Segun Samuel — **`entity-battle-12-the-isolation-trap.jpg` (16:9)**
- `/entity/battle-13-the-comfort-trap/` — Battle 13 — The Comfort Trap | Segun Samuel — **`entity-battle-13-the-comfort-trap.jpg` (16:9)**
- `/entity/battle-14-the-starved-mind/` — Battle 14 — The Starved Mind | Segun Samuel — **`entity-battle-14-the-starved-mind.jpg` (16:9)**
- `/entity/battle-15-the-fallen-crown/` — Battle 15 — The Fallen Crown | Segun Samuel — **`entity-battle-15-the-fallen-crown.jpg` (16:9)**
- `/entity/battle-16-the-leaking-purse/` — Battle 16 — The Leaking Purse | Segun Samuel — **`entity-battle-16-the-leaking-purse.jpg` (16:9)**
- `/entity/battle-17-the-execution-gap/` — Battle 17 — The Execution Gap | Segun Samuel — **`entity-battle-17-the-execution-gap.jpg` (16:9)**
- `/entity/battle-2-the-mask-of-confusion/` — Battle 2 — The Mask of Confusion | Segun Samuel — **`entity-battle-2-the-mask-of-confusion.jpg` (16:9)**
- `/entity/battle-3-the-draining-spiral/` — Battle 3 — The Draining Spiral | Segun Samuel — **`entity-battle-3-the-draining-spiral.jpg` (16:9)**
- `/entity/battle-4-the-poisoned-heart/` — Battle 4 — The Poisoned Heart | Segun Samuel — **`entity-battle-4-the-poisoned-heart.jpg` (16:9)**
- `/entity/battle-5-the-closed-heaven/` — Battle 5 — The Closed Heaven | Segun Samuel — **`entity-battle-5-the-closed-heaven.jpg` (16:9)**
- `/entity/battle-6-the-tongue-and-the-trade/` — Battle 6 — The Tongue and the Trade | Segun Samuel — **`entity-battle-6-the-tongue-and-the-trade.jpg` (16:9)**
- `/entity/battle-7-broken-bridges/` — Battle 7 — Broken Bridges | Segun Samuel — **`entity-battle-7-broken-bridges.jpg` (16:9)**
- `/entity/battle-8-the-invisible-prison/` — Battle 8 — The Invisible Prison | Segun Samuel — **`entity-battle-8-the-invisible-prison.jpg` (16:9)**
- `/entity/battle-9-when-the-spirit-starves/` — Battle 9 — When the Spirit Starves | Segun Samuel — **`entity-battle-9-when-the-spirit-starves.jpg` (16:9)**
- `/entity/case-studies/` — Case Studies | Segun Samuel — **`entity-case-studies.jpg` (16:9)**
- `/entity/comfort-addiction-diagnostic/` — Comfort Addiction Diagnostic | Segun Samuel — **`entity-comfort-addiction-diagnostic.jpg` (16:9)**
- `/entity/community/` — Community | Segun Samuel — **`entity-community.jpg` (16:9)**
- `/entity/consulting/` — Consulting | Segun Samuel — **`entity-consulting.jpg` (16:9)**
- `/entity/courses/` — Courses | Segun Samuel — **`entity-courses.jpg` (16:9)**
- `/entity/events/` — Events | Segun Samuel — **`entity-events.jpg` (16:9)**
- `/entity/execution-gap/` — Execution Gap | Segun Samuel — **`entity-execution-gap.jpg` (16:9)**
- `/entity/execution-intelligence/` — Execution Intelligence | Segun Samuel — **`entity-execution-intelligence.jpg` (16:9)**
- `/entity/explore-knowledge-graph/` — Explore / Knowledge Graph | Segun Samuel — **`entity-explore-knowledge-graph.jpg` (16:9)**
- `/entity/fiagstm/` — FIAGS™ | Segun Samuel — **`entity-fiagstm.jpg` (16:9)**
- `/entity/financial-stewardship-architecture/` — Financial Stewardship Architecture | Segun Samuel — **`entity-financial-stewardship-architecture.jpg` (16:9)**
- `/entity/five-stage-intelligence-architecture/` — Five-Stage Intelligence Architecture | Segun Samuel — **`entity-five-stage-intelligence-architecture.jpg` (16:9)**
- `/entity/ibonk/` — IBONK | Segun Samuel — **`entity-ibonk.jpg` (16:9)**
- `/entity/insights-articles/` — Insights / Articles | Segun Samuel — **`entity-insights-articles.jpg` (16:9)**
- `/entity/institutional-intelligence/` — Institutional Intelligence | Segun Samuel — **`entity-institutional-intelligence.jpg` (16:9)**
- `/entity/learning-intellectual-architecture/` — Learning / Intellectual Architecture | Segun Samuel — **`entity-learning-intellectual-architecture.jpg` (16:9)**
- `/entity/learning-paths/` — Learning Paths | Segun Samuel — **`entity-learning-paths.jpg` (16:9)**
- `/entity/limiting-belief-diagnostic/` — Limiting-Belief Diagnostic | Segun Samuel — **`entity-limiting-belief-diagnostic.jpg` (16:9)**
- `/entity/marketplace-architect/` — Marketplace Architect | Segun Samuel — **`entity-marketplace-architect.jpg` (16:9)**
- `/entity/masterclasses/` — Masterclasses | Segun Samuel — **`entity-masterclasses.jpg` (16:9)**
- `/entity/pattern-intelligence/` — Pattern Intelligence | Segun Samuel — **`entity-pattern-intelligence.jpg` (16:9)**
- `/entity/personal-identity-statement/` — Personal Identity Statement | Segun Samuel — **`entity-personal-identity-statement.jpg` (16:9)**
- `/entity/physical-stewardship-architecture/` — Physical Stewardship Architecture | Segun Samuel — **`entity-physical-stewardship-architecture.jpg` (16:9)**
- `/entity/plan-framework/` — PLAN Framework | Segun Samuel — **`entity-plan-framework.jpg` (16:9)**
- `/entity/podcast/` — Podcast | Segun Samuel — **`entity-podcast.jpg` (16:9)**
- `/entity/purposecallingdestinyvisiongoals/` — Purpose–Calling–Destiny–Vision–Goals | Segun Samuel — **`entity-purposecallingdestinyvisiongoals.jpg` (16:9)**
- `/entity/relational-architecture/` — Relational Architecture | Segun Samuel — **`entity-relational-architecture.jpg` (16:9)**
- `/entity/social-mastery-architecture/` — Social Mastery Architecture | Segun Samuel — **`entity-social-mastery-architecture.jpg` (16:9)**
- `/entity/software-tools/` — Software / Tools | Segun Samuel — **`entity-software-tools.jpg` (16:9)**
- `/entity/speaking/` — Speaking | Segun Samuel — **`entity-speaking.jpg` (16:9)**
- `/entity/stage-i-awakening/` — Stage I — Awakening | Segun Samuel — **`entity-stage-i-awakening.jpg` (16:9)**
- `/entity/stage-ii-purging/` — Stage II — Purging | Segun Samuel — **`entity-stage-ii-purging.jpg` (16:9)**
- `/entity/stage-iii-structuring/` — Stage III — Structuring | Segun Samuel — **`entity-stage-iii-structuring.jpg` (16:9)**
- `/entity/stage-iv-reprogramming/` — Stage IV — Reprogramming | Segun Samuel — **`entity-stage-iv-reprogramming.jpg` (16:9)**
- `/entity/stage-v-ascension/` — Stage V — Ascension | Segun Samuel — **`entity-stage-v-ascension.jpg` (16:9)**
- `/entity/strategic-architecture/` — Strategic Architecture | Segun Samuel — **`entity-strategic-architecture.jpg` (16:9)**
- `/entity/strategic-foresight/` — Strategic Foresight | Segun Samuel — **`entity-strategic-foresight.jpg` (16:9)**
- `/entity/strategic-foresightarchitecture-framework/` — Strategic Foresight–Architecture Framework | Segun Samuel — **`entity-strategic-foresightarchitecture-framework.jpg` (16:9)**
- `/entity/teatm/` — TEA™ | Segun Samuel — **`entity-teatm.jpg` (16:9)**
- `/entity/techspibus/` — TECHSPIBUS | Segun Samuel — **`entity-techspibus.jpg` (16:9)**
- `/entity/the-prepared-mind-methodtm/` — The Prepared Mind Method™ | Segun Samuel — **`entity-the-prepared-mind-methodtm.jpg` (16:9)**
- `/entity/the-war-within-17-battles/` — The War Within — 17 Battles | Segun Samuel — **`entity-the-war-within-17-battles.jpg` (16:9)**

---
# 19. FINAL DELIVERY CHECKLIST
- [ ] Current `/mentoring/` imagery follows the approved Editorial Intelligence design: photographic hero + photographic Inner Dimension background, with intentional negative space for HTML copy.

- [ ] Every generated image has a `### `filename` — description` heading.
- [ ] Every filename identifies the page/section where it belongs.
- [ ] Dynamic detail pages use slug-specific filenames.
- [ ] The real filename is the production contract.
- [ ] The gradient + Segun Samuel badge is fallback only.
- [ ] Real images replace placeholders automatically.
- [ ] Rectangular real images fill their complete rectangular frame.
- [ ] Publisher-sourced book covers are never replaced by invented AI covers.
- [ ] Supplied logos and identity/reference assets are not regenerated.


# BLOG + FORBIDDEN — COMPLETE IMAGE PROMPT REGISTER V12
Every current Blog and Forbidden publication placeholder has an exact production filename below. The same master image serves the listing card and detail-page featured-image slot. Generate the image at 16:9; the site handles cropping. Place the exact file in `/assets/images/`. Until it exists, the Segun badge placeholder remains visible.
**Global visual direction for every prompt:** Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
### `architecture-of-a-manipulator.jpg` — The Architecture of a Manipulator
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/architecture-of-a-manipulator/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Architecture of a Manipulator**. Visually communicate an elegant architectural model with its hidden load-bearing structure exposed beneath the facade, manipulation as constructed architecture. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `architecture-of-a-manipulator.jpg`  
**Destination:** `/assets/images/architecture-of-a-manipulator.jpg`

### `battle-of-identity.jpg` — The Battle of Identity Comes First
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/battle-of-identity/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Battle of Identity Comes First**. Visually communicate a solitary leader before a tall architectural mirror, subtle reflections resolving into one composed figure, identity preceding every other battle. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `battle-of-identity.jpg`  
**Destination:** `/assets/images/battle-of-identity.jpg`

### `build-for-the-successor.jpg` — Build for the Successor You Have Not Met
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/build-for-the-successor/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Build for the Successor You Have Not Met**. Visually communicate an institutional desk prepared for an unseen successor, plans, keys, archival folders and an empty chair, succession and continuity. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `build-for-the-successor.jpg`  
**Destination:** `/assets/images/build-for-the-successor.jpg`

### `calling-is-not-the-career.jpg` — The Calling Is Not the Career
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/calling-is-not-the-career/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Calling Is Not the Career**. Visually communicate a person at a crossroads between a conventional career corridor and a deeper illuminated path, visually distinguishing career from calling. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `calling-is-not-the-career.jpg`  
**Destination:** `/assets/images/calling-is-not-the-career.jpg`

### `data-prophetic-instrument.jpg` — Your Data Is a Prophetic Instrument
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/data-prophetic-instrument/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Your Data Is a Prophetic Instrument**. Visually communicate a strategic analyst studying a luminous data dashboard beside a compass and field notes, data revealing direction. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `data-prophetic-instrument.jpg`  
**Destination:** `/assets/images/data-prophetic-instrument.jpg`

### `discernment-and-suspicion.jpg` — The Difference Between Discernment and Suspicion
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/discernment-and-suspicion/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Difference Between Discernment and Suspicion**. Visually communicate a person at a threshold separating a clear illuminated path from ambiguous shadows, discernment without paranoia. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `discernment-and-suspicion.jpg`  
**Destination:** `/assets/images/discernment-and-suspicion.jpg`

### `discipline-is-worship.jpg` — Discipline Is a Form of Worship
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/discipline-is-worship/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Discipline Is a Form of Worship**. Visually communicate a disciplined morning planning table with an open journal, clock, pen and ordered workspace, quiet reverence expressed through disciplined practice. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `discipline-is-worship.jpg`  
**Destination:** `/assets/images/discipline-is-worship.jpg`

### `dominion-balance-sheet.jpg` — Dominion Is a Balance Sheet Word
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/dominion-balance-sheet/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Dominion Is a Balance Sheet Word**. Visually communicate an executive workspace with ledgers, architectural plans and a precision balance, responsibility, stewardship and measurable dominion. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `dominion-balance-sheet.jpg`  
**Destination:** `/assets/images/dominion-balance-sheet.jpg`

### `executing-the-decree.jpg` — Executing the Decree — the 90-Day Standard
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/executing-the-decree/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Executing the Decree — the 90-Day Standard**. Visually communicate a ninety-day planning board with calendar milestones, sealed documents and a hand moving one decisive marker forward, execution over aspiration. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `executing-the-decree.jpg`  
**Destination:** `/assets/images/executing-the-decree.jpg`

### `gaslighting-has-a-grammar.jpg` — Gaslighting Has a Grammar
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/gaslighting-has-a-grammar/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Gaslighting Has a Grammar**. Visually communicate a dim editorial room with written notes, crossed-out statements and fragmented speech patterns on glass, language as a structured system. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `gaslighting-has-a-grammar.jpg`  
**Destination:** `/assets/images/gaslighting-has-a-grammar.jpg`

### `ibonk-five-levels.jpg` — IBONK — Five Levels of the Same Assignment
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/ibonk-five-levels/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **IBONK — Five Levels of the Same Assignment**. Visually communicate a vertical architectural structure with five connected levels rising from an individual workspace toward business, organisation, nation and a higher horizon. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `ibonk-five-levels.jpg`  
**Destination:** `/assets/images/ibonk-five-levels.jpg`

### `illusion-of-loyalty-reality-of-betrayal.jpg` — The Illusion of Loyalty and the Reality of Betrayal
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/illusion-of-loyalty-reality-of-betrayal/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Illusion of Loyalty and the Reality of Betrayal**. Visually communicate two figures separated by a table with a fractured seal and concealed documents, restrained visual language for loyalty, revelation and betrayal. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `illusion-of-loyalty-reality-of-betrayal.jpg`  
**Destination:** `/assets/images/illusion-of-loyalty-reality-of-betrayal.jpg`

### `negotiating-debt.jpg` — Negotiating Debt
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/negotiating-debt/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Negotiating Debt**. Visually communicate a controlled financial negotiation table with ledgers, contracts and a pen, psychological power expressed through composition and distance. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `negotiating-debt.jpg`  
**Destination:** `/assets/images/negotiating-debt.jpg`

### `planning-room-battlefield.jpg` — The Planning Room Is a Battlefield
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/planning-room-battlefield/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Planning Room Is a Battlefield**. Visually communicate a cinematic strategic planning room with maps, papers, markers, desk lamp and an empty executive chair, the planning table as a battlefield. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `planning-room-battlefield.jpg`  
**Destination:** `/assets/images/planning-room-battlefield.jpg`

### `praying-like-a-strategist.jpg` — Praying Like a Strategist
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/praying-like-a-strategist/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Praying Like a Strategist**. Visually communicate a quiet strategic study at dawn with an open journal, maps and notes, contemplative discipline rather than spectacle. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `praying-like-a-strategist.jpg`  
**Destination:** `/assets/images/praying-like-a-strategist.jpg`

### `regret-is-feedback-and-revelation.jpg` — Regret is Feedback and Revelation
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/regret-is-feedback-and-revelation/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Regret is Feedback and Revelation**. Visually communicate a reflective figure reviewing an old decision through documents and photographs on a quiet desk, a window opening toward clearer morning light. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `regret-is-feedback-and-revelation.jpg`  
**Destination:** `/assets/images/regret-is-feedback-and-revelation.jpg`

### `scripture-is-architecture.jpg` — Scripture Is Architecture, Not Decoration
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/scripture-is-architecture/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Scripture Is Architecture, Not Decoration**. Visually communicate architectural blueprints, an open ancient-looking scripture book and structural models on a planning table, words functioning visually as architecture. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `scripture-is-architecture.jpg`  
**Destination:** `/assets/images/scripture-is-architecture.jpg`

### `swot-without-self-deception.jpg` — SWOT Without Self-Deception
**Publication:** Blog · **Usage:** `/ blog /` listing card + `/blog/swot-without-self-deception/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **SWOT Without Self-Deception**. Visually communicate a strategy table with four analytical zones, honest notes and a clear mirror, rigorous self-assessment without corporate cliché. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `swot-without-self-deception.jpg`  
**Destination:** `/assets/images/swot-without-self-deception.jpg`

### `sympathy-is-a-weapon.jpg` — Sympathy Is a Weapon
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/sympathy-is-a-weapon/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Sympathy Is a Weapon**. Visually communicate a carefully staged interpersonal encounter where warmth conceals strategic imbalance, subtle body language and controlled composition. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `sympathy-is-a-weapon.jpg`  
**Destination:** `/assets/images/sympathy-is-a-weapon.jpg`

### `the-conquered-mind.jpg` — The Conquered Mind
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/the-conquered-mind/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Conquered Mind**. Visually communicate a solitary study surrounded by layered screens, books and visual narratives while one clear path of light emerges through the centre, cognitive sovereignty. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `the-conquered-mind.jpg`  
**Destination:** `/assets/images/the-conquered-mind.jpg`

### `why-smart-people-join-cults.jpg` — Why Smart People Join Cults
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/why-smart-people-join-cults/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **Why Smart People Join Cults**. Visually communicate an intelligent study where charismatic influence is represented indirectly through concentric symbols, social conformity and carefully arranged objects, analytical not sensational. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `why-smart-people-join-cults.jpg`  
**Destination:** `/assets/images/why-smart-people-join-cults.jpg`

### `wolf-in-the-pulpit.jpg` — The Wolf in the Pulpit
**Publication:** Forbidden · **Usage:** `/ forbidden /` listing card + `/forbidden/wolf-in-the-pulpit/` detail featured image.  
**Prompt:** Create a premium editorial-cinematic photograph representing **The Wolf in the Pulpit**. Visually communicate an empty ceremonial lectern in a refined institutional interior with a subtle shadow suggesting hidden authority, restrained symbolism. Keep the composition intelligent, restrained and metaphorical rather than literal; use believable contemporary spaces and objects with subtle human presence where appropriate. Ultra-realistic cinematic editorial photography, premium magazine quality, 8K detail, natural cinematic lighting, sophisticated modern African/global intellectual aesthetic, deep forest green #0D3D28, dark forest #003020, warm cream #FDFAF4, mint #EAF5F1, restrained crimson #8C0D0C and selective gold #C9A64B, believable contemporary materials, rich but natural contrast, medium-format camera character, refined professional colour grading, no text, no logos, no watermark, no UI, no fake typography.
**Exact filename:** `wolf-in-the-pulpit.jpg`  
**Destination:** `/assets/images/wolf-in-the-pulpit.jpg`



## Masterclasses — Landing Page Image Contracts

These six images belong to the approved `/masterclasses/` landing-page catalogue. They are not generic course thumbnails. Each image must communicate the intellectual character of its specific masterclass while remaining visually coherent with the Segun Samuel editorial system.

### `masterclass-strategic-foresight-intensive.jpg`
Create a premium editorial-cinematic photograph representing strategic foresight as disciplined anticipation. Show a sophisticated strategist or small leadership group in a quiet modern architectural environment studying layered maps, timelines, signals, scenarios and interconnected trajectories. Suggest multiple possible futures rather than a single prediction. Human presence should feel intelligent and restrained, never like corporate stock photography. Forest green, deep teal, warm cream and restrained gold, with subtle crimson only as a small point of emphasis. 16:9 landscape, intentional negative space for HTML text overlay, darker text-safe area, cinematic depth, photorealistic 8K editorial quality, no visible text, logos or watermark.

### `masterclass-thinking-in-systems.jpg`
Create a premium editorial-cinematic photograph representing systems thinking. Show an intelligent professional in a sophisticated architectural workspace observing a complex network of interconnected structures, pathways and nodes, with subtle circular relationships and layered depth suggesting feedback loops and interdependence. Avoid literal computer-dashboard aesthetics. Communicate that individual actions exist inside larger systems. Forest green, deep teal, warm cream and restrained gold. 16:9 landscape, negative space for HTML copy, darker text-safe region, cinematic lighting, photorealistic editorial quality, sophisticated African/global intellectual aesthetic, no visible text, logos or watermark.

### `masterclass-ai-as-strategic-capability.jpg`
Create a premium editorial-cinematic photograph representing artificial intelligence as strategic capability. Show a diverse senior professional or leadership team in an elegant contemporary strategy room interacting with subtle AI-inspired visual structures—abstract intelligence networks, data patterns and decision pathways integrated naturally into the physical environment. Avoid humanoid robots, glowing brains, generic futuristic interfaces or science-fiction imagery. Strategic, human-centred and credible. Forest green, deep teal, warm cream, restrained gold and subtle crimson. 16:9 landscape, sophisticated negative space for HTML typography, controlled luminance behind text, cinematic editorial photography, realistic materials and people, 8K detail, no visible text, logos or watermark.

### `masterclass-architecture-of-execution.jpg`
Create a premium editorial-cinematic photograph representing the architecture of execution. Show a leader or small execution team in a sophisticated architectural setting where plans, pathways, stages and physical structures converge into a coherent direction. Metaphorically communicate sequencing, coordination, discipline and movement from strategy into action. Avoid generic office meetings, handshakes and checklist imagery. Forest green, deep teal, warm cream and restrained gold, with subtle crimson as a deliberate point of emphasis. 16:9 landscape, strong architectural lines, visual movement toward a clear destination, negative space for HTML text, darker text-safe region, cinematic depth, photorealistic premium editorial photography, no visible text, logos or watermark.

### `masterclass-leadership-intelligence.jpg`
Create a premium editorial-cinematic photograph representing Leadership Intelligence: Power, People & Systems. Show a composed senior leader in a sophisticated institutional environment, with several people and layers of architecture subtly arranged around the central figure to suggest relationships, influence, power and organisational systems. Communicate observation, judgment and relational intelligence rather than command or dominance. Avoid stereotypical boardroom imagery. Forest green, deep teal, warm cream and restrained gold, with a restrained crimson accent. 16:9 landscape, generous negative space for HTML copy, controlled background luminance, cinematic editorial photography, realistic people and architecture, sophisticated African/global leadership aesthetic, no visible text, logos or watermark.

### `masterclass-building-institutions-that-endure.jpg`
Create a premium editorial-cinematic photograph representing institution building and endurance. Show a powerful but understated architectural institution—contemporary civic, educational or organisational architecture—with a small number of people moving through or contributing to it. Communicate permanence, continuity, stewardship and generational responsibility rather than wealth or corporate prestige. Subtle layers of old and new materials may suggest continuity across time. Forest green, deep teal, warm cream and restrained gold, with crimson only as a tiny accent if appropriate. 16:9 landscape, strong architectural depth, intentional negative space for HTML overlay text, controlled luminance and darker text-safe area, cinematic atmospheric perspective, photorealistic 8K editorial quality, sophisticated African/global institutional aesthetic, no visible text, logos or watermark.

### Masterclasses Landing Page Image Rules
- The six images must feel like one editorial family, not six unrelated stock photographs.
- Each image must communicate its specific intellectual subject without relying on text.
- Do not use generic classroom, handshake, laptop, smiling-team or corporate-stock compositions.
- Do not place generated typography, titles, logos, interface labels or watermarks inside the image.
- Preserve deliberate negative space for HTML typography.
- Control background luminance so overlay text remains readable without excessive gradients.
- Prefer cinematic realism, restrained composition, sophisticated architecture and meaningful human presence.
- Maintain forest green, deep teal, warm cream, restrained gold and selective crimson.
- All six assets are 16:9 landscape and should remain usable across responsive crops.

## Learning Ecosystem — Restored Landing Hero Image Contracts

### `hero-learn.jpg` — Learn Ecosystem Hero
**Publication:** Learn · **Usage:** `/learn/` hero.  
**Prompt:** Create a premium editorial-cinematic photograph representing structured learning as the pursuit of wisdom through disciplined practice. Show an elegant contemporary library or learning environment with books, a refined study table, subtle architectural geometry and a quiet sense of intellectual concentration. Human presence may be subtle; the image should feel contemplative rather than like classroom stock photography. Preserve generous negative space on the left for HTML typography, with the visual weight toward the right. Use deep forest green, deep teal, warm cream and restrained gold, with selective crimson only as a small accent. Ultra-realistic editorial photography, cinematic natural light, sophisticated African/global intellectual aesthetic, 16:9 landscape, 8K detail, no visible text, logos or watermark.
**Exact filename:** `hero-learn.jpg`  
**Destination:** `/assets/images/hero-learn.jpg`

### `learning-paths-hero.jpg` — Learning Paths Hero
**Publication:** Learning Paths · **Usage:** `/learning-paths/` hero.  
**Prompt:** Create a premium editorial-cinematic photograph representing a deliberate learning journey from one level of capability to another. Show a winding, carefully constructed pathway through a sophisticated natural or architectural landscape, leading toward a distant horizon and warm light. The path should communicate progression, sequence, choice and transformation without becoming a generic travel photograph. Preserve generous negative space on the left for HTML typography and keep the visual destination toward the right. Use deep forest green, deep teal, warm cream and restrained gold with selective crimson only where appropriate. Ultra-realistic cinematic editorial photography, sophisticated African/global intellectual aesthetic, 16:9 landscape, 8K detail, no visible text, logos or watermark.
**Exact filename:** `learning-paths-hero.jpg`  
**Destination:** `/assets/images/learning-paths-hero.jpg`


---

# PRESS KIT — APPROVED IMAGE PLACEHOLDERS

The Press Kit deliberately uses the approved **gradient + Segun badge placeholder system** until the exact generated image exists. The placeholder is not a substitute image and must not be replaced by an improvised stock photograph. When the named file is supplied in `/assets/images/`, the page should display it in the same frame without changing the layout.

### `press-segun-samuel-editorial-portrait.jpg` — Press Kit Editorial Portrait
**Route:** `/press/` · **Section:** Photography & Assets · **Placeholder:** Editorial portrait

**Image-generation prompt:**  
Create a premium editorial portrait of Segun Samuel for a serious international press kit. Present a composed African intellectual and marketplace leader in a sophisticated contemporary environment that subtly suggests strategy, technology, architecture and institutional thinking without becoming corporate stock photography. The expression should communicate calm intelligence, depth, responsibility and strategic foresight. Use an elegant, restrained composition with generous negative space and natural posture; sophisticated modern African/global editorial aesthetic; deep forest green, warm cream, muted teal and restrained gold accents; cinematic natural light; medium-format realism; 8K detail; believable skin texture and materials; no text, no logos, no watermark, no invented awards, no decorative typography. Preserve identity using an approved reference photograph if one is supplied.

**Production contract:** `press-segun-samuel-editorial-portrait.jpg` in `/assets/images/`.

**Placeholder behaviour:** Until the exact file exists, display the approved gradient + `segunsamuel-logo-badge-01.png` placeholder. Once supplied, replace only the placeholder artwork; preserve the existing frame, crop and layout.

### `press-ibonK-five-levels.jpg` — IBONK™ Five Levels of Influence
**Route:** `/press/` · **Section:** Photography & Assets · **Placeholder:** IBONK™ editorial concept

**Image-generation prompt:**  
Create a premium editorial-cinematic conceptual photograph representing IBONK™ — Individual, Business, Organisation, Nation, Kingdom — as five ascending levels of influence and responsibility. Visualise a continuous architectural or civic landscape rising through five distinct but connected levels, suggesting increasing scale, stewardship, systems, institutions and consequence. The image should feel intellectually serious rather than diagrammatic: layered architecture, pathways, civic scale and human-scale traces can imply the progression without placing any words, numbers or labels inside the image. Sophisticated modern African/global editorial aesthetic, deep forest green, dark teal, warm cream, restrained gold and subtle crimson accents, cinematic depth, natural light, 8K detail, premium magazine photography, no text, no logos, no watermark.

**Production contract:** `press-ibonK-five-levels.jpg` in `/assets/images/`.

**Placeholder behaviour:** Until the exact file exists, display the approved gradient + `segunsamuel-logo-badge-01.png` placeholder. Once supplied, replace only the placeholder artwork; preserve the existing frame, crop and layout.

### `press-war-within-editorial.jpg` — The War Within Editorial Image
**Route:** `/press/` · **Section:** Photography & Assets · **Placeholder:** Book/editorial concept

**Image-generation prompt:**  
Create a premium editorial-cinematic conceptual photograph representing The War Within: the internal psychological battles beneath leadership, identity, purpose, fear, comparison, discipline, relationships and consequential decision-making. Visualise one composed human figure facing a sophisticated architectural environment in which subtle reflections, pathways, thresholds and contrasting light suggest an inner conflict being examined rather than dramatised. The mood should be intelligent, restrained and psychologically deep, never violent or sensational. Sophisticated modern African/global editorial aesthetic, deep forest green, dark teal, warm cream, muted gold and restrained crimson accents, cinematic natural light, 8K detail, medium-format realism, premium magazine art direction, no text, no book cover, no logos, no watermark.

**Production contract:** `press-war-within-editorial.jpg` in `/assets/images/`.

**Placeholder behaviour:** Until the exact file exists, display the approved gradient + `segunsamuel-logo-badge-01.png` placeholder. Once supplied, replace only the placeholder artwork; preserve the existing frame, crop and layout.


# UNIVERSAL IMAGE SLOT REGISTRY — V87 AUDIT

This registry is generated from the implemented `data-image-slot` attributes. Every slot maps to an exact production filename in this canonical prompt file. Runtime loading is handled by `/assets/js/image-slots.js`; absent assets retain the approved placeholder.

| Route | Production image | Prompt present |
|---|---|---|
| `blog/index.html` | `battle-of-identity.jpg` | YES |
| `blog/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/index.html` | `data-prophetic-instrument.jpg` | YES |
| `blog/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/index.html` | `executing-the-decree.jpg` | YES |
| `blog/index.html` | `ibonk-five-levels.jpg` | YES |
| `blog/index.html` | `planning-room-battlefield.jpg` | YES |
| `blog/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/index.html` | `scripture-is-architecture.jpg` | YES |
| `blog/index.html` | `swot-without-self-deception.jpg` | YES |
| `forbidden/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/index.html` | `sympathy-is-a-weapon.jpg` | YES |
| `forbidden/index.html` | `the-conquered-mind.jpg` | YES |
| `forbidden/index.html` | `why-smart-people-join-cults.jpg` | YES |
| `forbidden/index.html` | `wolf-in-the-pulpit.jpg` | YES |
| `events/index.html` | `event-events.jpg` | YES |
| `events/index.html` | `event-ai-strategy-workshop.jpg` | YES |
| `events/index.html` | `event-architects-roundtable.jpg` | YES |
| `events/index.html` | `event-case-study-lab.jpg` | YES |
| `events/index.html` | `event-frameworks-in-practice.jpg` | YES |
| `events/index.html` | `event-institution-builders-forum.jpg` | YES |
| `events/index.html` | `event-leadership-power-systems-workshop.jpg` | YES |
| `events/index.html` | `event-prepared-mind-live.jpg` | YES |
| `events/index.html` | `event-strategic-intelligence-intensive.jpg` | YES |
| `events/index.html` | `event-strategic-intelligence-live.jpg` | YES |
| `podcast/index.html` | `podcast-hero.jpg` | YES |
| `podcast/technology-as-leverage/index.html` | `podcast-technology-as-leverage.jpg` | YES |
| `podcast/the-strategic-foresight-conversation/index.html` | `podcast-the-strategic-foresight-conversation.jpg` | YES |
| `podcast/principles-that-survive-change/index.html` | `podcast-principles-that-survive-change.jpg` | YES |
| `podcast/building-systems-that-outlive-you/index.html` | `building-systems-that-outlive-you.jpg` | YES |
| `podcast/thinking-beyond-the-obvious/index.html` | `podcast-thinking-beyond-the-obvious.jpg` | YES |
| `podcast/the-architecture-of-reality/index.html` | `podcast-the-architecture-of-reality.jpg` | YES |
| `podcast/the-war-within/index.html` | `podcast-the-war-within.jpg` | YES |
| `podcast/when-strategy-meets-reality/index.html` | `podcast-when-strategy-meets-reality.jpg` | YES |
| `podcast/power-human-behaviour/index.html` | `podcast-power-human-behaviour.jpg` | YES |
| `podcast/building-beyond-the-founder/index.html` | `podcast-building-beyond-the-founder.jpg` | YES |
| `podcast/strategic-foresight-conversations/index.html` | `podcast-strategic-foresight-conversations.jpg` | YES |
| `podcast/the-strategic-architect/index.html` | `podcast-the-strategic-architect.jpg` | YES |
| `podcast/intelligence-in-practice/index.html` | `podcast-intelligence-in-practice.jpg` | YES |
| `podcast/strategy-in-an-uncertain-world/index.html` | `podcast-strategy-in-an-uncertain-world.jpg` | YES |
| `podcast/building-institutions-that-endure/index.html` | `podcast-building-institutions-that-endure.jpg` | YES |
| `podcast/power-people-the-shadow/index.html` | `podcast-power-people-the-shadow.jpg` | YES |
| `podcast/the-system-behind-the-problem/index.html` | `podcast-the-system-behind-the-problem.jpg` | YES |
| `podcast/the-architecture-of-seeing/index.html` | `podcast-the-architecture-of-seeing.jpg` | YES |
| `podcast/patterns-beneath-the-surface/index.html` | `podcast-patterns-beneath-the-surface.jpg` | YES |
| `podcast/the-hidden-game-of-power/index.html` | `podcast-the-hidden-game-of-power.jpg` | YES |
| `events/prepared-mind-live/index.html` | `event-prepared-mind-live.jpg` | YES |
| `events/institution-builders-forum/index.html` | `event-institution-builders-forum.jpg` | YES |
| `events/frameworks-in-practice/index.html` | `event-frameworks-in-practice.jpg` | YES |
| `events/strategic-intelligence-intensive/index.html` | `event-strategic-intelligence-intensive.jpg` | YES |
| `events/ai-strategy-workshop/index.html` | `event-ai-strategy-workshop.jpg` | YES |
| `events/architects-roundtable/index.html` | `event-architects-roundtable.jpg` | YES |
| `events/case-study-lab/index.html` | `event-case-study-lab.jpg` | YES |
| `events/strategic-intelligence-live/index.html` | `event-strategic-intelligence-live.jpg` | YES |
| `events/leadership-power-systems-workshop/index.html` | `event-leadership-power-systems-workshop.jpg` | YES |
| `forbidden/gaslighting-has-a-grammar/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/gaslighting-has-a-grammar/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/gaslighting-has-a-grammar/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/gaslighting-has-a-grammar/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/gaslighting-has-a-grammar/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/gaslighting-has-a-grammar/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/illusion-of-loyalty-reality-of-betrayal/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/illusion-of-loyalty-reality-of-betrayal/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/illusion-of-loyalty-reality-of-betrayal/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/illusion-of-loyalty-reality-of-betrayal/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/illusion-of-loyalty-reality-of-betrayal/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/illusion-of-loyalty-reality-of-betrayal/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/why-smart-people-join-cults/index.html` | `why-smart-people-join-cults.jpg` | YES |
| `forbidden/why-smart-people-join-cults/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/why-smart-people-join-cults/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/why-smart-people-join-cults/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/why-smart-people-join-cults/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/why-smart-people-join-cults/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/regret-is-feedback-and-revelation/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/regret-is-feedback-and-revelation/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/regret-is-feedback-and-revelation/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/regret-is-feedback-and-revelation/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/regret-is-feedback-and-revelation/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/regret-is-feedback-and-revelation/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/architecture-of-a-manipulator/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/architecture-of-a-manipulator/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/architecture-of-a-manipulator/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/architecture-of-a-manipulator/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/architecture-of-a-manipulator/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/architecture-of-a-manipulator/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/negotiating-debt/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/negotiating-debt/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/negotiating-debt/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/negotiating-debt/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/negotiating-debt/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/negotiating-debt/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/discernment-and-suspicion/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/discernment-and-suspicion/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/discernment-and-suspicion/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/discernment-and-suspicion/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/discernment-and-suspicion/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/discernment-and-suspicion/index.html` | `regret-is-feedback-and-revelation.jpg` | YES |
| `forbidden/the-conquered-mind/index.html` | `the-conquered-mind.jpg` | YES |
| `forbidden/the-conquered-mind/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/the-conquered-mind/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/the-conquered-mind/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/the-conquered-mind/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/the-conquered-mind/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/wolf-in-the-pulpit/index.html` | `wolf-in-the-pulpit.jpg` | YES |
| `forbidden/wolf-in-the-pulpit/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/wolf-in-the-pulpit/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/wolf-in-the-pulpit/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/wolf-in-the-pulpit/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/wolf-in-the-pulpit/index.html` | `negotiating-debt.jpg` | YES |
| `forbidden/sympathy-is-a-weapon/index.html` | `sympathy-is-a-weapon.jpg` | YES |
| `forbidden/sympathy-is-a-weapon/index.html` | `architecture-of-a-manipulator.jpg` | YES |
| `forbidden/sympathy-is-a-weapon/index.html` | `discernment-and-suspicion.jpg` | YES |
| `forbidden/sympathy-is-a-weapon/index.html` | `gaslighting-has-a-grammar.jpg` | YES |
| `forbidden/sympathy-is-a-weapon/index.html` | `illusion-of-loyalty-reality-of-betrayal.jpg` | YES |
| `forbidden/sympathy-is-a-weapon/index.html` | `negotiating-debt.jpg` | YES |
| `blog/praying-like-a-strategist/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/praying-like-a-strategist/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/praying-like-a-strategist/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/praying-like-a-strategist/index.html` | `executing-the-decree.jpg` | YES |
| `blog/praying-like-a-strategist/index.html` | `scripture-is-architecture.jpg` | YES |
| `blog/praying-like-a-strategist/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/data-prophetic-instrument/index.html` | `data-prophetic-instrument.jpg` | YES |
| `blog/data-prophetic-instrument/index.html` | `executing-the-decree.jpg` | YES |
| `blog/data-prophetic-instrument/index.html` | `swot-without-self-deception.jpg` | YES |
| `blog/data-prophetic-instrument/index.html` | `planning-room-battlefield.jpg` | YES |
| `blog/data-prophetic-instrument/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/data-prophetic-instrument/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/scripture-is-architecture/index.html` | `scripture-is-architecture.jpg` | YES |
| `blog/scripture-is-architecture/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/scripture-is-architecture/index.html` | `ibonk-five-levels.jpg` | YES |
| `blog/scripture-is-architecture/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/scripture-is-architecture/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/scripture-is-architecture/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/executing-the-decree/index.html` | `executing-the-decree.jpg` | YES |
| `blog/executing-the-decree/index.html` | `planning-room-battlefield.jpg` | YES |
| `blog/executing-the-decree/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/executing-the-decree/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/executing-the-decree/index.html` | `swot-without-self-deception.jpg` | YES |
| `blog/executing-the-decree/index.html` | `data-prophetic-instrument.jpg` | YES |
| `blog/calling-is-not-the-career/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/calling-is-not-the-career/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/calling-is-not-the-career/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/calling-is-not-the-career/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/calling-is-not-the-career/index.html` | `scripture-is-architecture.jpg` | YES |
| `blog/calling-is-not-the-career/index.html` | `battle-of-identity.jpg` | YES |
| `blog/battle-of-identity/index.html` | `battle-of-identity.jpg` | YES |
| `blog/battle-of-identity/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/battle-of-identity/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/battle-of-identity/index.html` | `ibonk-five-levels.jpg` | YES |
| `blog/battle-of-identity/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/battle-of-identity/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/planning-room-battlefield/index.html` | `planning-room-battlefield.jpg` | YES |
| `blog/planning-room-battlefield/index.html` | `executing-the-decree.jpg` | YES |
| `blog/planning-room-battlefield/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/planning-room-battlefield/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/planning-room-battlefield/index.html` | `swot-without-self-deception.jpg` | YES |
| `blog/planning-room-battlefield/index.html` | `data-prophetic-instrument.jpg` | YES |
| `blog/dominion-balance-sheet/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/dominion-balance-sheet/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/dominion-balance-sheet/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/dominion-balance-sheet/index.html` | `swot-without-self-deception.jpg` | YES |
| `blog/dominion-balance-sheet/index.html` | `scripture-is-architecture.jpg` | YES |
| `blog/dominion-balance-sheet/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/build-for-the-successor/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/build-for-the-successor/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/build-for-the-successor/index.html` | `ibonk-five-levels.jpg` | YES |
| `blog/build-for-the-successor/index.html` | `swot-without-self-deception.jpg` | YES |
| `blog/build-for-the-successor/index.html` | `battle-of-identity.jpg` | YES |
| `blog/build-for-the-successor/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/discipline-is-worship/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/discipline-is-worship/index.html` | `executing-the-decree.jpg` | YES |
| `blog/discipline-is-worship/index.html` | `praying-like-a-strategist.jpg` | YES |
| `blog/discipline-is-worship/index.html` | `battle-of-identity.jpg` | YES |
| `blog/discipline-is-worship/index.html` | `calling-is-not-the-career.jpg` | YES |
| `blog/discipline-is-worship/index.html` | `planning-room-battlefield.jpg` | YES |
| `blog/swot-without-self-deception/index.html` | `swot-without-self-deception.jpg` | YES |
| `blog/swot-without-self-deception/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/swot-without-self-deception/index.html` | `dominion-balance-sheet.jpg` | YES |
| `blog/swot-without-self-deception/index.html` | `executing-the-decree.jpg` | YES |
| `blog/swot-without-self-deception/index.html` | `planning-room-battlefield.jpg` | YES |
| `blog/swot-without-self-deception/index.html` | `data-prophetic-instrument.jpg` | YES |
| `blog/ibonk-five-levels/index.html` | `ibonk-five-levels.jpg` | YES |
| `blog/ibonk-five-levels/index.html` | `build-for-the-successor.jpg` | YES |
| `blog/ibonk-five-levels/index.html` | `scripture-is-architecture.jpg` | YES |
| `blog/ibonk-five-levels/index.html` | `battle-of-identity.jpg` | YES |
| `blog/ibonk-five-levels/index.html` | `discipline-is-worship.jpg` | YES |
| `blog/ibonk-five-levels/index.html` | `dominion-balance-sheet.jpg` | YES |

---

# PART II — LEGACY PROMPTS RETAINED FROM D-IMG-PROMPTS.md

These entries existed in the older D-IMG library but not in the current canonical register. They are retained here so the master truly contains the complete prompt library. Use these entries where the exact filename is required and no newer canonical entry exists.

### `segun-portrait-studio.png` — Hero portrait (arch frame, 4:5) — shared with the About page, see §2
a distinguished Nigerian man in his 50s in an impeccably tailored deep forest-green suit with a crimson pocket square, standing in a modern executive planning room in Lagos at golden hour, floor-to-ceiling windows showing a soft-focus Lagos skyline, one hand resting on a mahogany table holding an open leather journal and a fountain pen, expression of calm strategic authority, warm rim light, deep green wall panels behind. Vertical 4:5 composition, subject occupying right two-thirds. **Export as PNG** (this file is also used with a transparent-background variant treatment elsewhere on the page).

### `og-image.jpg` — Social share card (1200×630)
Wide cinematic composition: a distinguished Nigerian man in his 50s in a forest-green suit seated at the head of a long boardroom table in a dark green-panelled room, single warm lamp illuminating an open journal, city lights bokeh in the window behind, generous negative space on the left third of frame for overlay text. Horizontal 1200×630.

### `war-within-book.jpg` — The War Within, dark flagship band (4:5)
Luxurious product photograph of a thick hardcover book standing upright on a dark green marble surface, deep forest-green cloth cover with blind-embossed geometric pattern suggesting a shield (no readable text), a crimson ribbon bookmark, dramatic side lighting against a #003020 backdrop, faint reflection. Vertical 4:5.

## 2. ABOUT PAGE

Reuses `segun-portrait-studio.png` from the Home page (§1) — no separate About-page portrait is needed; the same file fills both frames.

## 3. WORK PAGE

### `lane-technology.jpg` — GreaterHeight Technologies (16:10)
Modern African software office at dusk: a group of distinguished Black African professionals collaborating around dual monitors showing elegant data dashboards (abstract, unreadable), glass-walled meeting room in the background, deep green accent wall, warm task lighting, an atmosphere of focused engineering excellence. Horizontal 16:10.

### `lane-academy.jpg` — GreaterHeight Academy (16:10)
Bright training academy classroom in Lagos: an instructor at a large screen displaying an abstract system diagram, a group of distinguished Black African professionals of engaged adult students with laptops, morning light through tall windows, cream walls with a forest-green feature wall, a sense of upward momentum. Horizontal 16:10.

### `lane-publishing.jpg` — TECHSPIBUS™ Media & Publishing (16:10)
A refined publishing studio: a large wooden desk with hardcover book proofs, a vintage typewriter beside a modern laptop, manuscript pages with handwritten margin notes, a crimson-spined hardcover as the single red accent, dark green wall with brass picture lights, moody warm light. Horizontal 16:10. No readable text.

## 4. SPEAKING PAGE

Both images below are already wired into the live Speaking page — a keynote banner directly under the hero, and a coaching-room image inside the Executive Coaching section — using the site's standard conditional-placeholder pattern (the frame shows a branded fallback until the real file is added, then switches over automatically).

### `speaking-stage.jpg` — Keynote banner, below the hero (16:10, full-width)
**Reference-photo workflow in Nano Banana Pro:** supply Segun's reference photo alongside this text prompt — it conveniently already shows the raised, pointing-hand gesture this scene calls for, so the pose should translate directly. The reference drives facial likeness and skin tone; the prompt drives everything else (setting, lighting, wardrobe, audience).

Segun Samuel [use reference photo for likeness and skin tone] mid-keynote on a dark conference stage, forest-green stage wash and a single warm spotlight catching him mid-gesture — one hand raised at a point of emphasis, the other holding notes or a clicker, expression of controlled conviction rather than performance. **Preserve his natural warm brown skin tone exactly as in the reference photo** — the spotlight should read as warm, directional key light across his face and hands, not as a colour cast; keep his skin tone from shifting toward the green stage wash or toward orange oversaturation from the warm spotlight. Behind him, a softly silhouetted audience (a diverse group of African, European, and Asian professionals, out of focus, a few visibly taking notes) fills the foreground shadow; a large abstract emerald slide glows on a screen behind him (unreadable — pure light and geometry, no text). Atmospheric haze catching the spotlight beam, shallow depth of field keeping the audience soft and Segun sharp, wide shot showing the full stage. Horizontal 16:10 — keep the subject roughly centred so the frame still reads well when cropped tighter on mobile.

### `coaching-room.jpg` — Executive Coaching section, dark ground (16:10)
**Two-reference workflow in Nano Banana Pro:** supply Segun's reference photo alongside this text prompt for the man in the right-hand chair — the reference drives facial likeness only; the prompt below drives his pose, expression, and wardrobe. The second man has no reference photo and is generated purely from the description.

Same environment throughout — do not change it: a quiet study with deep forest-green walls and dark wood wainscoting, a floor lamp on a brass stand casting warm amber light across the room, a bookshelf of leather-bound volumes softly out of focus behind, an evening Lagos skyline glowing faintly through a window on the right, a small brass desk clock on the table. A low wooden table between two brown leather armchairs holds two cups of coffee, an open leather journal, and a fountain pen resting across it.

Now populated with two figures mid-session, facing each other across the table rather than looking at camera:

- **Right-hand chair — Segun Samuel [use reference photo for likeness].** Leaning forward with quiet intensity, one hand raised mid-gesture as if making a considered point, the other resting on the chair's arm — engaged in conversation, caught mid-exchange, not posing. Smart-casual attire consistent with his brand elsewhere on the site: an open-collared shirt or a dark green blazer, no tie.
- **Left-hand chair, facing him — a distinguished Nigerian man in his 40s** in a well-tailored charcoal or navy suit, seated attentively, leaning slightly in, listening — the visible posture of someone receiving counsel rather than giving it.

Both men in three-quarter profile toward each other, the sense of a real, confidential coaching conversation already underway. Deep green and amber grading, warm pools of lamplight against the dark room, shallow depth of field with the two men sharp and the bookshelf/skyline soft. Horizontal 16:10; graded dark enough to sit comfortably on the section's forest-deep background.

## 5. MENTORINGOS PAGE

### `mentoring-hero-portrait.jpg` — Hero section, right side (arch frame, 4:5)
A composite "content universe" portrait: a distinguished Nigerian man in his 50s in his signature deep forest-green suit, white shirt, tie draped loosely over one crossed arm rather than worn, confident direct gaze at camera, three-quarter angle, thick dark-framed glasses. Surrounding him at various depths and sizes, scattered against a subtly textured deep-green striped background, is a loose grid of small rectangular content cards — abstract book-cover and keynote-slide thumbnails in the brand's forest-green, cream, and gold palette, all with **no readable text or lettering of any kind** (blank colour-blocked rectangles with simple abstract iconography only — a compass mark, a geometric line, a muted photograph fragment). Thin white hand-drawn arrow/swoosh graphics connect a few of the cards toward the figure, as if his output orbits him. One card near the edge carries a crimson (#8C0D0C) border as a single accent, echoing the site's signature colour. Editorial composite-portrait style, confident and prolific rather than corporate. Vertical 4:5, subject centred-to-right so the composition reads well cropped into the site's arch-frame.

### `mentoring-session.jpg` — What Is MentoringOS section (4:5)
a distinguished Nigerian man in his 50s seated across a small round table from another person (a distinguished professional in their 30s–40s, back partially to camera or softly out of focus so the mentee stays anonymous), mid-conversation, leaning forward with focused attention, a leather notebook open between them, warm lamplight, deep forest-green wall behind. No laptops, no phones visible — the sense of undivided, serious counsel. Vertical 4:5.

### FIAGS diagnostic cards — 5 images (3:2, top of each card)
> No readable text in any of these — they're symbolic/object studies illustrating each "poison," not diagrams. Same global style block as the rest of this document.

**`fiags-fear.jpg`** — a single figure's shadow stretching long and distorted across an empty floor toward a closed door, the figure itself out of frame. Deep green-black tones, one thin blade of light under the door.

**`fiags-impatience.jpg`** — an hourglass mid-fall, sand frozen in motion (high-speed capture), cracked slightly at the neck as if forced open early. Dark background, warm gold sand catching the only light.

**`fiags-anxiety.jpg`** — a single chair in an otherwise empty, dark room, facing multiple doors on every wall simultaneously. Cool green-grey palette, unsettled symmetry.

**`fiags-greed.jpg`** — an ornate hand mirror reflecting a pile of coins instead of a face, gold coins spilling from the frame's edge onto a dark surface. Warm gold light, deep green shadow.

**`fiags-sentiment.jpg`** — a single wilted flower pressed inside an old, closed book, the book slightly ajar so a sliver of the flower shows. Warm amber light, dust motes visible, deep green backdrop.

### `mentoring-environment.jpg` — The Environment section (16:9, full-width banner)
A refined, quiet study or library space built for serious conversation — two or three leather armchairs arranged for discussion, floor-to-ceiling bookshelves, a large window with a soft city view, warm afternoon light. No people — the room itself communicates the standard of the environment. Deep green and warm-wood tones, editorial architecture photography. Horizontal 16:9.

## 6. TECHSPIBUS™ PAGE

Three symbolic artifacts representing the frameworks — see §11 below for the full prompts (`techspibus-convergence.jpg`, `techspibus-pillars.jpg`, `ibonk-ascent.jpg`). The three-pillar cards on this page reuse inline SVG icons, not photography — no image needed there.

## 7. PRESS PAGE

### `press-headshot-01.jpg` — Primary headshot (4:5, 300dpi)
Formal studio headshot of a distinguished Nigerian man in his 50s in a forest-green suit, cream shirt, no tie, against a seamless deep green (#0D3D28) backdrop, confident warm expression, classic Rembrandt lighting, tack-sharp eyes. Vertical 4:5.

### `press-headshot-02.jpg` — Editorial portrait (4:5, 300dpi)
a distinguished Nigerian man in his 50s seated on the edge of a desk in a planning room, sleeves considered but composed, journals and a brass compass beside him, Lagos skyline soft in the window, editorial magazine energy. Vertical 4:5.

### `press-book-mockup.jpg` — Book mock-up (4:5)
Same art direction as `war-within-book.jpg` but three-quarter angle with a second copy lying flat beneath, on a #003020 field with generous negative space. Vertical 4:5.

## 8. EBOOK & GUIDES PAGE

> Nine cover images, one per guide (3:2, matching the same image treatment used for the FIAGS cards on the MentoringOS page — image bleeds to the card's top edge with the compass badge centred over it). No readable text on the covers themselves — title and description render as real HTML beneath each image, not baked into the artwork.

1. **guide-techspibus.jpg** — a compass rose rendered as a clean geometric line illustration on a deep forest-green cover, three thin radiating lines meeting at the center point. Horizontal 3:2.
2. **guide-prepared-mind.jpg** — a single open ledger book with four small hand-drawn checkmarks down the left margin, warm gold light. Horizontal 3:2.
3. **guide-war-within.jpg** — a single lit lamp inside a stripped, unfurnished room, doorway just visible at the edge of frame. Horizontal 3:2.
4. **guide-plan-framework.jpg** — four thin arrows arranged in a compass-like cross, each pointing a different direction, converging on a single center point. Horizontal 3:2.
5. **guide-fiags.jpg** — an open hand-written worksheet with five short handwritten lines, softly out of focus so no specific text is legible. Horizontal 3:2.
6. **guide-ibonk.jpg** — five ascending platforms or steps rendered as a simple architectural line illustration, each one slightly wider than the last. Horizontal 3:2.
7. **guide-data-literacy.jpg** — a single clean line chart rendered as minimalist geometric art, one point on the line circled in gold, deep forest-green background. Horizontal 3:2.
8. **guide-mentoring-process.jpg** — two chairs facing each other at a slight angle (not head-on), warm lamplight between them, an open notebook on the small table separating them. Horizontal 3:2.
9. **guide-career-disciplines.jpg** — seven thin vertical columns of varying height rendered as a simple architectural bar-chart illustration, ascending left to right, deep forest-green with one gold column. Horizontal 3:2.

## 9. CONNECT PAGE

Uses the stylised map placeholder (pure CSS — no image required).

## 10. EVENTS PAGE

> One cover image per event, reused in two places: the listing-page card (4:3, pale-blue placeholder zone with calendar-icon fallback) and the detail page's hero banner (21:9 crop of the same image, same fallback treatment). No readable text baked into the image — date badges, price tags, and titles all render as real HTML on top.

1. **event-architects-table-live.jpg** — A distinguished Nigerian, Lagos-based professional in his early 50s sits in the chair at the head of a long wooden table, leaning slightly forward, one hand raised mid-gesture as if mid-sentence — clearly addressing the room. The chairs down both sides of the table are filled with a group of distinguished Black African professionals in tailored business attire, attentive, several turned toward the head of the table listening. Warm overhead light, rest of the table in soft focus. Ultra-realistic cinematic editorial photograph, 8K detail, shallow depth of field, professional colour grading in the site's forest-green and warm-cream palette (#0D3D28, #003020, #FDFAF4) with a single restrained crimson accent (#8C0D0C) — a pocket square, a book spine, a chair detail. Rich contrast, no pure black; shadows lean dark green. Premium magazine quality, shot on medium-format camera, 85mm lens look. No text, no watermarks, no logos. Horizontal, works at both 4:3 and 21:9 crops.
   - **Optional reference photo:** if a photo of Segun Samuel is supplied, use his likeness for the speaker at the head of the table — same pose, same gesture, same framing described above — or, alternatively, as one of the seated professionals looking toward the speaker. Either way, blend the reference face naturally into the scene's lighting and colour grade rather than pasting it in flatly.
2. **event-war-within-book-launch.jpg** — a single hardcover copy of *The War Within* by Segun Samuel, standing upright on a wooden table, warm spotlight from above, the title side facing the camera. The book's actual cover: a muscular Roman centurion in ornate gold and bronze armour, red-plumed helmet, gripping a sword hilt in both hands, set against a dark background with dramatic radiating gold light behind him like a halo; "THE WAR WITHIN" in bold gold serif type, "SEGUN SAMUEL" in white beneath it — the cover should be recognizable (the warrior figure, the gold title, the author name), though the finer subtitle and epigraph text are naturally too small to read clearly at this camera distance, which is realistic rather than an artificial blur. The surrounding scene — table, ambient lighting, background — stays in the site's own forest-green and cream palette (#0D3D28, #003020, #FDFAF4) with a restrained crimson accent (#8C0D0C); the book's own gold/black/red cover is the framed hero object within that scene, not colour-matched to it. Ultra-realistic cinematic editorial photograph, 8K detail, shallow depth of field, premium magazine quality, shot on medium-format camera, 85mm lens look, rich contrast, no pure black, shadows lean dark green. No watermarks, no added logos — the only text in frame is the book's own real cover. Horizontal, works at both 4:3 and 21:9 crops.
3. **segun-samuel-conference-and-event.jpg** — the Events hub page's full-bleed banner, sitting behind the transparent nav at the top of the page. Wide establishing shot of an engaged audience at a conference or workshop, seen from behind/the side (not close-up faces), warm stage lighting, someone speaking or presenting at the front, out of focus. Landscape, at least 1920×1200 — needs to hold up as a tall, wide banner with a dark gradient overlay across the bottom half for text legibility, so keep the top portion of the frame relatively open/uncluttered.

## 11. BOOKS & COURSES PAGE

Six cover placeholders (each 2:3 vertical, no readable text — titles are set live in HTML):

### `course-prepared-mind-intensive.jpg`
Cinematic still of a candle-warm planning room: an open leather journal, a wax-sealed decree document, and a 90-day wall grid softly out of focus behind — crimson-graded to suit the course card's crimson field.

### `testimonial-michael-oyadele.mp4` — the video itself, plus `testimonial-michael-oyadele-poster.jpg` — its poster frame (16:10), plus `testimonial-michael-oyadele-photo.jpg` — the small author photo on the card
**This is now an image-to-video generation, not text-to-video** — Michael supplied his own photo, which should be used as the starting frame/reference image, not just described in words. **Prompt** (pair with his photo as the reference image in an image-to-video tool, e.g. Runway Gen-4): The person in the reference photo speaking warmly and thoughtfully to camera, mid-sentence, with a natural hand gesture and subtle head movement as if explaining something meaningful. Soft, even studio lighting matching the reference image. Gentle handheld camera micro-movement, shallow depth of field. No on-screen text, no logos, ambient room tone only, no dialogue needed. Duration: 5 seconds.
**Note:** the quote attributed to Michael Oyadele has been reviewed and confirmed by him directly (per Segun, 2026-08-06) — no longer a draft. His photo is being generated externally (not through the Higgsfield tool in this workflow — two consecutive models hit plan-tier restrictions there) and will be supplied back once ready.

## 12. RECOMMENDED BOOKS (Books page — Reading List)

`rec-01.jpg` … `rec-30.jpg` — thirty placeholders. These should be the **real covers** of the recommended titles (photographed or publisher-supplied), not generated imagery — a generated cover risks misrepresenting a book that isn't yours. Until each is added, the branded gradient placeholder frame displays automatically, showing the book's title as text so the shelf stays legible either way. Export each as JPG, 2:3, ≥600px wide.

## 13. BLOG PAGE — all 12 dispatch images

> **Dual use, and why the export spec is stricter than a normal card image:** each `dispatch-NN.jpg` file fills two roles — the card thumbnail (16:10) on the Blog index and on the "Latest Essays" grid at the bottom of every post, **and** the full-bleed hero banner across the top of that post's own page. The banner's actual on-screen ratio varies a lot by device: on a wide desktop monitor it can reach roughly 21:9–12:5 (≈2.3–2.4), but on a phone the banner's height floor (380px) against a narrow viewport width brings it down to close to **1:1 — nearly square**. One file has to cover the full range from ~1:1 up through the 1.6 card ratio to ~2.3 on desktop, via `object-fit: cover`.
>
> **If your tool only offers fixed presets, choose 16:9, not 21:9.** 21:9 sacrifices too much vertical picture information for the square mobile crop and the 16:10 card crop to work well — most of a 21:9 image is a thin horizontal strip once cropped down to those taller ratios. 16:9 is the more versatile middle ground: it still crops acceptably on a wide desktop hero (trimming top/bottom, which the centred-upper-frame composition note below already plans for) while leaving enough height in reserve for the card and mobile-hero crops.
>
> Export **wider and higher-resolution than a card alone would need — minimum 2400px on the long edge, ideally closer to 3000px** — and keep the subject's focal point centred-to-upper-frame, since the taller crops (mobile hero, card) trim more from the top and bottom than the wide desktop crop does, and the bottom third will sit under the dark title scrim regardless of crop.

1. **dispatch-01** ("The Planning Room Is a Battlefield") — an empty boardroom at night, one chair pulled out, strategy notes and a chess king on the table, single lamp, green-black shadows. Horizontal 16:9.
2. **dispatch-02** ("The Battle of Identity Comes First") — a man's reflection in a dark window merging with the city beyond, journal in hand, contemplative, green-toned dusk. Use a distinguished Nigerian man in his 50s. Horizontal 16:9.
3. **dispatch-03** ("Your Data Is a Prophetic Instrument") — close macro of elegant abstract data visualisations glowing emerald on a dark screen, reflected in reading glasses on the desk. Horizontal 16:9.
4. **dispatch-04** ("IBONK™ — Five Levels") — five ascending stone steps in a minimalist green-lit architectural space, warm light at the top step. Horizontal 16:9.
5. **dispatch-05** ("Executing the Decree") — a wax-sealed document (crimson seal, unreadable) beside a 90-day wall calendar grid in soft focus, fountain pen mid-signature. Horizontal 16:9.
6. **dispatch-06** ("Scripture Is Architecture") — dramatic upward shot of cathedral-like columns transitioning into modern structural beams, green-gold light through high windows. Horizontal 16:9.
7. **dispatch-07** ("Dominion Is a Balance Sheet Word") — a ledger book, brass scales, and a small potted olive sapling on a mahogany desk, warm window light. Horizontal 16:9.
8. **dispatch-08** ("SWOT Without Self-Deception") — a hand wiping condensation from a mirror to reveal a clear reflection (face obscured/abstract), cool green-grey palette with warm centre. Horizontal 16:9.
9. **dispatch-09** ("The Calling Is Not the Career") — two doors side by side in a green-panelled corridor, one ajar with warm light spilling out, the other closed and corporate-grey. Horizontal 16:9.
10. **dispatch-10** ("Praying Like a Strategist") — an open journal beside folded hands on a mahogany desk, a strategy diagram faintly visible on the page (abstract), candle-warm side light. Horizontal 16:9.
11. **dispatch-11** ("Build for the Successor You Have Not Met") — a set of keys and a sealed envelope resting on architectural blueprints (abstract, unreadable), morning light, deep green grading. Horizontal 16:9.
12. **dispatch-12** ("Discipline Is a Form of Worship") — a single lit desk lamp over an exercise ledger and a wristwatch at 5 a.m., darkness beyond the pool of light. Horizontal 16:9.

### Audio narration (optional, per post — not an image)
Each post page has an audio-narration player. It is silent and inert by design until a file exists — no image or placeholder needed for it. To activate narration for a post: record or generate the essay as spoken audio (any TTS service works — ElevenLabs is a good fit), export as MP3, and save it to `/audio/<post-slug>.mp3` — the exact slug is the post's URL segment, e.g. `/audio/ibonk-five-levels.mp3`. The player detects the file automatically; no code changes needed.

## 14. FORBIDDEN PAGES — all 10 hero/card images, plus in-essay images (13 for "Negotiating Debt", 1 each for the 6 shorter posts)

> **This section has its own visual register — do not reuse the Blog dispatch aesthetic here.** Forbidden Pages runs on a deep, oppressive forest-green theme (nav to footer), and its images should read as architectural, symbolic, and shadow-heavy — never occult imagery, never literal violence, never a depiction of an actual manipulative act in progress. Every prompt below is built the same way: an object or space that *represents* the essay's mechanism (a blueprint, a mask, a locked structure) rather than a scene that *performs* it. Same dual-use export spec as the Blog dispatch images (§10) — these also serve as each post's full-bleed hero banner, so export **minimum 2400px on the long edge**, subject centred-to-upper-frame. Append the global style block from the top of this document, but note the palette shifts darker here: replace the light cream tone in that block with near-black forest (#04140D) as the shadow colour, keep the same restrained crimson accent, and add a thin gold (#C9A84C) rim-light where the prompt calls for it.

1. **fp-architecture.jpg** ("The Architecture of a Manipulator") — an architect's cutaway model of a building under construction at night, floors partially built, scaffolding still up, a single drafting lamp illuminating blueprints on a table in the foreground — the structure reads as elegant and deliberate, not sinister on its own. Deep forest-green shadow, one warm gold light source, no people. Horizontal 16:9.
2. **fp-wolf-pulpit.jpg** ("The Wolf in the Pulpit") — an ornate, empty wooden pulpit in a dark cathedral, a single shaft of light falling across it from a high window, a wolf's shadow cast long across the floor by something just out of frame (implied, not depicted literally) — symbolic, not literal. No visible wolf, no visible person. Horizontal 16:9.
3. **fp-gaslighting.jpg** ("Gaslighting Has a Grammar") — a single antique gas lamp on a dark wooden desk, its flame flickering unnaturally between two states (double-exposure effect suggesting instability), throwing shifting shadows against a wall of identical, slightly-askew framed mirrors. No people. Horizontal 16:9.
4. **fp-cult-recruitment.jpg** ("Why Smart People Join Cults") — a single open doorway glowing warm gold from within, standing alone in a vast dark room with many closed, identical doors around it — one door made to look inviting against a field of indistinguishable others. No people, no symbols, no insignia. Horizontal 16:9.
5. **fp-sympathy-weapon.jpg** ("Sympathy Is a Weapon") — a single wilting flower in an ornate crystal glass of water on a dark table, positioned so its shadow on the wall behind is shaped like something sharper and larger than the flower itself. No people. Horizontal 16:9.
6. **fp-discernment-suspicion.jpg** ("The Difference Between Discernment and Suspicion") — a pair of old brass scales in perfect balance, one side holding a small dove feather, the other a coiled rope (serpent motif, abstract — not a literal snake), warm gold light from above, deep green shadow below. No people. Horizontal 16:9.
7. **fp-conquered-mind.jpg** ("The Conquered Mind") — a single human silhouette seated in an ornate chair, head bowed, with a fine web of glowing gold threads descending from above and converging into the silhouette's skull — the threads controlled, deliberate, architectural rather than magical. Deep near-black forest background, the threads the only light source. No visible face. Horizontal 16:9.
8. **fp-loyalty-betrayal.jpg** ("The Illusion of Loyalty and the Reality of Betrayal") — two ornate antique keys on a dark velvet surface, one whole and catching the light, its twin shattered into several pieces beside it, as if it had always looked identical to the first from a distance. Deep green shadow, single warm gold light source, no people. Horizontal 16:9.
9. **fp-regret.jpg** ("Regret is Feedback and Revelation") — an old brass compass lying open on a dark wooden surface, its needle caught mid-swing rather than settled, with a faint double-exposure trail showing where it has been versus where it now points — the sense of recalibration in progress, not malfunction. Deep forest-green shadow, single warm gold light source, no people. Horizontal 16:9.
10. **fp-negotiating-debt.jpg** ("Negotiating Debt") — an ornate antique set of scales on a dark wooden desk, one side weighted with heavy iron chain links, the other side empty and rising — the balance clearly tipped, but a single hand (cropped at the wrist, not a full figure) reaching to adjust it. Deep forest-green shadow, single warm gold light source. Horizontal 16:9.

### In-essay images for "Negotiating Debt" (13 images, 16:9, appear roughly every 300 words within the post — same dual-use export spec as the hero/card images above: minimum 2400px on the long edge)
> These are symbolic object/space studies matching the section they sit in — never literal depictions of a real debt collection call, a real bank, or a real person's financial distress. No readable text, no logos, no real company names or logos of any kind.

1. **fp-debt-anthropology.jpg** — an ancient clay tablet with cuneiform-style abstract markings (illegible, decorative only) resting beside a modern folded financial statement, both lit by the same single warm light, bridging ancient and modern. Horizontal 16:9.
2. **fp-shame-architecture.jpg** — a single spotlight isolating one empty wooden chair in an otherwise completely dark room, the beam sharply defined. Horizontal 16:9.
3. **fp-manufactured-shame.jpg** — a single figure's shadow cast on a wall, the shadow distorted and rendered much larger and more looming than the figure that casts it. Horizontal 16:9.
4. **fp-leverage-performance.jpg** — an elaborate, ornate empty throne, lit from below and slightly behind so the light reveals the seat and back are hollow shells rather than solid — the grandeur is a shell. Horizontal 16:9.
5. **fp-negotiation-table.jpg** — two empty wooden chairs facing each other across a bare table, one lit warmly from a lamp, the other left in cool shadow — an unresolved conversation about to happen. Horizontal 16:9.
6. **fp-organising-self.jpg** — a set of ornate picture frames nested inside one another, each smaller than the last, the innermost frame containing nothing but bare wall. Horizontal 16:9.
7. **fp-debtor-identity.jpg** — a person's reflection in a cracked antique mirror (face soft-focus/unidentifiable), the pattern of cracks radiating upward to form the shape of a low ceiling directly above the reflection's head. Horizontal 16:9.
8. **fp-inherited-narrative.jpg** — an old sepia-toned family photograph (generic, unidentifiable faces, soft focus) with a modern ledger page laid partially over it, the two textures overlapping. Horizontal 16:9.
9. **fp-mammon-system.jpg** — an ornate brass balance scale, one side weighted down with a small pile of coins, the other side empty and lifted high, exaggerated and slightly surreal in its tilt. Horizontal 16:9.
10. **fp-season-exit.jpg** — a long, dark corridor lined with closed leather-bound ledgers stacked along both walls, a single doorway of warm light at the far end. Horizontal 16:9.
11. **fp-plan-protocol.jpg** — a hand-written ledger open on a wooden desk beside a single fountain pen, rows and columns visible but the specific text soft-focus/unreadable, a warm desk lamp overhead. Horizontal 16:9.
12. **fp-power-question.jpg** — a single overhead light illuminating one empty chair at the head of a long table, the rest of the table receding into shadow. Horizontal 16:9.
13. **fp-negotiating-freedom.jpg** — a single length of heavy iron chain coiled on a dark surface, one link visibly pried open and unclosed, catching the only light in the frame. Horizontal 16:9.

### In-essay images for the 6 shorter Forbidden Pages posts (1 image each, ~300-word mark, 16:9)
1. **fp-arch-blueprint.jpg** ("The Architecture of a Manipulator") — an architectural blueprint spread on a drafting table, one section marked with a small hidden trapdoor in red pencil annotation, otherwise clean technical linework. Horizontal 16:9.
2. **fp-wolf-vestments.jpg** ("The Wolf in the Pulpit") — ornate clergy vestments hanging empty on a wooden hook in a dim vestry, a long shadow cast on the wall behind that doesn't quite match the garment's shape. Horizontal 16:9.
3. **fp-gaslight-typewriter.jpg** ("Gaslighting Has a Grammar") — an antique typewriter on a dark desk, one key frozen mid-strike at an unnatural angle, warm desk-lamp light. Horizontal 16:9.
4. **fp-cult-belonging.jpg** ("Why Smart People Join Cults") — a quiet residential street at dusk, every house dark except one with a single warm porch light on, inviting and isolated at once. Horizontal 16:9.
5. **fp-sympathy-mask.jpg** ("Sympathy Is a Weapon") — a porcelain theatrical mask with one delicately painted tear, resting alone on a dark velvet cushion. Horizontal 16:9.
6. **fp-discernment-path.jpg** ("The Difference Between Discernment and Suspicion") — a single dirt path forking into two directions, one edge of the path lined with pale feathers, the other overgrown and untended — no literal creature shown. Horizontal 16:9.

## 15. TECHSPIBUS™ PAGE — framework artifacts

Three symbolic artifacts representing the frameworks. These are *objects and architecture*, not diagrams with labels — all wording lives in the HTML, so instruct the model: **no readable text, no letters, no numbers anywhere** (AI-generated lettering garbles and would carry wrong words).

### `techspibus-convergence.jpg` — Origin section (1:1 square)
A symbolic still-life of three domains becoming one architecture: on a deep forest-green (#003020) ground, three objects arranged in a triangle converging on a single brass compass at centre — a fine gold-traced circuit board fragment (technology), an open antique Bible with gilt page edges (spirituality), and a brass balance scale beside a ledger (business). Thin gold light-lines run from each object to the compass. Dramatic chiaroscuro lighting, museum-artifact photography, macro detail, one thin crimson (#8C0D0C) silk thread binding all three paths. Square 1:1.

### `techspibus-pillars.jpg` — The Architecture section (21:9 panoramic)
A grand colonnade of exactly seven pillars seen in perspective, carved from deep green marble with gold capitals, each pillar subtly distinct in its carving texture (gears, flame, scroll, eye, map contours, laurel, twin keys — abstract motifs only, no lettering), supporting a single unbroken gold entablature. Cathedral-meets-boardroom atmosphere: shafts of warm light between the columns, polished floor reflections, a faint city skyline glowing beyond the far end. Ultra-wide 21:9, cinematic architectural photography, forest-green and gold grading with restrained crimson banner accents high on the far wall.

### `ibonk-ascent.jpg` — IBONK™ section (16:10, sits on a dark ground)
Five monumental stone terraces ascending left-to-right into warm light, carved from dark green stone with gold-leafed edges — the first terrace intimate (a single desk and chair), the second a small workshop, the third an institutional hall, the fourth a city skyline, the fifth dissolving into radiant golden horizon and sky. One continuous gold path climbs through all five. A lone figure of a distinguished Nigerian man in his 50s in silhouette ascending between the first and second terrace. Epic matte-painting realism, deep green shadow tones (#003020) so the image sits naturally on the dark section, gold light, one crimson banner on the third terrace. Horizontal 16:10. (Diversity options A/B apply to the silhouetted figure.)

---

## Favicon / brand marks
Already supplied: `segunsamuel-logo.png` (primary S-mark) and `segunsamuel-logo-badge-01.png` (compass badge — used as favicon). Do not regenerate; do not recolour.

## Checklist after generation
- [ ] Filenames match exactly (lowercase, hyphens).
- [ ] JPG, sRGB, quality 80–85; portraits ≥1600px tall, banners ≥1920px wide, dispatch images ≥2400px on the long edge (see §10).
- [ ] og-image.jpg is exactly 1200×630.
- [ ] No embedded text, watermarks, or third-party logos in any image.
- [ ] Crimson appears as a small accent only — never dominant (brand rule: ≤8%).



---

# FINAL PLACEHOLDER-PROMPT AUDIT

This master is the copy-ready source of truth for image generation.

- Current canonical entries retained: 134
- Legacy-only entries retained: 19
- Total unique prompt/asset headings in this master: 172
- Exact V87 coverage filenames without a concrete prompt heading/family template: 0
- Unresolved `[SUBJECT]` in production prompt blocks: 0

**Missing exact coverage entries:** NONE

**Unresolved production tokens:** NONE

The Events section is now explicitly covered, including `event-case-study-lab.jpg`. The current source states that Events has 10 exact production image contracts—one landing-page image plus nine Event Detail images.
