# SegunSamuel Global Information Architecture v1

## Primary content architecture

### HOME
The ecosystem gateway.

### LEARN
Learning, capability development and structured education.
- Learn Overview
- Courses
- Learning Paths
- Masterclasses

### THINK
Intellectual property, ideas, interpretation and editorial development.
- Think Overview
- Frameworks
- Models & Principles
- Books
- Insights
- Editorial
- Newsletter

### APPLY
Turning knowledge into organisational, professional and practical action.
- Apply Overview
- Case Studies
- Applications
- Consulting
- Speaking
- Events

### LISTEN
Long-form audio and podcast content.
- Podcast

### EXPLORE
Cross-ecosystem discovery / Knowledge Graph.

### SEARCH
Global search.

## Secondary/system modules

These are intentionally NOT primary navigation items because they are utility, legal, transactional, or system surfaces:
- About
- Contact
- Community
- Engagement
- Cart
- Checkout
- Enrollment Confirmation
- Student
- Learning
- Library
- Knowledge Graph
- Privacy
- Terms
- Disclaimer
- Cookie Preferences
- Data Requests
- Data Processing

They remain directly accessible and may be surfaced contextually from relevant pages.

## Core orphan correction

Previously these core modules existed without an obvious place in the primary information architecture:
- Consulting
- Speaking
- Editorial
- Newsletter

They are now integrated into:
- THINK → Editorial
- THINK → Newsletter
- APPLY → Consulting
- APPLY → Speaking

## Navigation rule

The canonical primary navigation is defined once in `js/site-shell.js`.

Every page should either:
1. use `<nav data-site-nav></nav>` with the shared shell, or
2. reproduce the exact canonical navigation contract.

No page-specific variations should be introduced.


## Verification
- Canonical inline navigation variants: 1
- Pages checked: 213
- Pages missing required Overview/core links: 0
