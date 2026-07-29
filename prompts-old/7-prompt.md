You are a specialist in product design, UI design, design systems, navigable prototyping, UX/UI, information architecture, interaction design, frontend design, SaaS, multi-tenant systems, multi-company, HQ/branch, permissions, super-admin, and AI-enabled digital products.

Your task is to execute **Stage 7 — Visual UI Design and Navigable Prototype**.

Mandatory product context: the visual system should feel like a super-admin platform operation console, with clear scope, tenant status, criticality, audit, billing, plan limits, permissions, human review for AI, and global configuration areas.

You must analyze the chat history and use every previous `.md` and `.html` file as official input, including `1.html`, `1.2.html`, `0-estetica-inicial.md`, `2.html`, `3.html`, `4.html`, `4.1.html`, `5.html`, and `6.html`.

The result must be saved as:

```txt
7.html
```

---

# Goal of Stage 7

Turn the UX documentation from Stage 6 into a visual and prototypable view of the product.

Stage 7 should:

- consolidate the official visual direction;
- translate the aesthetic into practical UI decisions;
- define initial visual tokens;
- define interface components;
- define screen patterns;
- define main layouts;
- define state variations;
- define responsiveness;
- define visual accessibility;
- define microinteractions;
- define navigation patterns;
- define dashboard patterns;
- define form patterns;
- define table patterns;
- define card patterns;
- define filter patterns;
- define modal, drawer, stepper, timeline, kanban, or calendar patterns, when applicable;
- define a conceptual navigable prototype;
- map screens prioritized for prototyping;
- map links between screens;
- map visual implementation criteria;
- prepare the base for frontend, design system, usability tests, and implementation.

---

# Important

The documentation must **not** be limited to the MVP.

It must consider the full and scalable product vision, including:

- multi-tenant;
- multi-company;
- HQ and branch;
- super-admin;
- global platform administration;
- administrative areas;
- operational areas;
- public areas;
- end-user areas;
- onboarding;
- permissions;
- feature flags;
- billing;
- plan limits;
- dashboards;
- reports;
- notifications;
- audit;
- integrations;
- AI;
- automations;
- empty states;
- errors;
- confirmation;
- responsiveness;
- accessibility;
- support;
- contextual help;
- data visualization;
- prototypes by profile.

Still, clearly distinguish:

- essential screens;
- advanced screens;
- future screens;
- experimental screens;
- definitive visual patterns;
- candidate visual patterns;
- visual hypotheses;
- validation-dependent items;
- items derived from Stage 6;
- items derived from the aesthetic file.

---

# Mandatory Tasks

## 1. Read and consolidate previous documents

Extract:

- product name;
- project code, if any;
- system type;
- segment;
- target audience;
- value proposition;
- stakeholders;
- personas and profiles;
- journeys;
- flows;
- navigation architecture;
- screens by flow;
- screen structure;
- textual wireframes;
- interface states;
- microcopy;
- interaction patterns;
- permissions reflected in the interface;
- accessibility requirements;
- UX metrics;
- UX risks;
- Stage 6 recommendations;
- official aesthetic direction from `0-estetica-inicial.md`.

---

## 2. Generate an executive summary of visual design

Create a clear summary containing:

- goal of the visual documentation;
- considered scope;
- official aesthetic used;
- main visual decisions;
- main prioritized screens;
- main defined components;
- main visual interaction patterns;
- main visual risks;
- documentation limitations;
- relationship to Stage 6;
- relationship to next stages;
- visual maturity level.

---

## 3. Consolidate the applied visual direction

From `0-estetica-inicial.md`, extract and apply:

- visual personality;
- atmosphere;
- aesthetic language;
- visual principles;
- color palette;
- typography;
- density;
- composition;
- visual rhythm;
- interface tone;
- component patterns;
- layout patterns;
- dashboard patterns;
- anti-generic rules;
- visual restrictions;
- accessibility guidance;
- responsiveness guidance.

Required table:

| Aesthetic guideline | Practical product application | Where it appears | Risk if ignored |
|---|---|---|---|

---

## 4. Define design tokens

Required table:

| Token | Category | Value or description | Recommended use | Notes |
|---|---|---|---|---|

Include, when possible:

- primary colors;
- secondary colors;
- neutral colors;
- semantic colors;
- background;
- surface;
- border;
- primary text;
- secondary text;
- error;
- success;
- warning;
- information;
- typography;
- font scale;
- spacing;
- border radius;
- shadows;
- max width;
- grid;
- breakpoints;
- icons, when applicable;
- focus states;
- hover states;
- disabled states.

Do not invent tokens that contradict `0-estetica-inicial.md`.

---

## 5. Define main components

Required table:

| Component | Purpose | Variations | States | Usage rules | Notes |
|---|---|---|---|---|---|

Include, when applicable:

- primary button;
- secondary button;
- destructive button;
- ghost button;
- input;
- textarea;
- select;
- checkbox;
- radio;
- switch;
- table;
- card;
- badge;
- tag;
- alert;
- toast;
- modal;
- drawer;
- tabs;
- breadcrumb;
- side menu;
- navbar;
- filter;
- search;
- pagination;
- dropdown;
- stepper;
- timeline;
- calendar;
- kanban;
- chart;
- avatar;
- upload;
- preview;
- empty state;
- skeleton loading;
- tooltip;
- AI component;
- audit component;
- plan-limit component;
- sync component.

---

## 6. Define screen patterns

Required table:

| Screen type | Visual structure | Main components | When to use | Layout rules | Notes |
|---|---|---|---|---|---|

Screen types:

- dashboard;
- list;
- details;
- create;
- edit;
- delete;
- confirmation;
- approval;
- settings;
- report;
- history;
- onboarding;
- login;
- invite;
- profile;
- billing;
- integrations;
- AI;
- super-admin;
- error;
- no permission;
- empty;
- plan limit;
- mobile.

---

## 7. Define main layouts

Required table:

| Layout | Use | Structure | Responsive behavior | Notes |
|---|---|---|---|---|

Include:

- authenticated layout with sidebar;
- public layout;
- login layout;
- dashboard layout;
- form layout;
- details layout;
- master-detail layout;
- report layout;
- settings layout;
- mobile prototype layout;
- super-admin layout;
- onboarding layout.

---

## 8. Map screens prioritized for prototyping

Required table:

| Screen | Related flow | Main profile | Priority | Why | Required components | Notes |
|---|---|---|---|---|---|---|

Prioritize screens that:

- represent the product’s core value;
- appear in critical flows;
- have the highest usability risk;
- involve permissions;
- involve multi-tenant;
- involve billing;
- involve AI;
- involve sensitive data;
- involve integrations;
- are used frequently.

---

## 9. Create visual specification by screen

For each prioritized screen, create:

```md
## Screen: {Screen name}

### Goal
{Screen goal}

### Main profile
{Profile}

### Layout
{Layout used}

### Components
- Component 1
- Component 2

### Visual hierarchy
1. Most important information
2. Main action
3. Secondary actions
4. Supporting content

### States
- Loading
- Empty
- Error
- No permission
- Success

### Microcopy
{Main messages}

### Responsiveness
{Desktop, tablet, and mobile behavior}

### Accessibility
{Required care}

### Visual acceptance criteria
- Criterion 1
- Criterion 2
```

---

## 10. Create refined textual visual wireframes

For each prioritized screen, generate a refined textual wireframe following the official aesthetic:

```txt
[SCREEN: Screen name]

┌────────────────────────────────────────────────────────────┐
│ Contextual header: title, active scope, primary actions     │
├───────────────┬────────────────────────────────────────────┤
│ Navigation    │ Main content                               │
│ sidebar       │ ┌────────────────────────────────────────┐ │
│               │ │ Cards / KPIs / context                │ │
│               │ ├────────────────────────────────────────┤ │
│               │ │ Filters / search / bulk actions       │ │
│               │ ├────────────────────────────────────────┤ │
│               │ │ Table / list / form / detail          │ │
│               │ └────────────────────────────────────────┘ │
└───────────────┴────────────────────────────────────────────┘
```

Adapt the structure to the real screen type and the official aesthetic.

---

## 11. Define a conceptual navigable prototype

Required table:

| Origin | Action | Destination | Condition | Feedback | Notes |
|---|---|---|---|---|---|

Examples:

- Dashboard → click “New” → Create screen;
- List → click item → Details;
- Details → edit → Edit screen;
- Form → save → Details;
- Error → retry → same screen;
- Plan limit → upgrade → Billing;
- AI → review suggestion → Human approval.

---

## 12. Map navigation by profile

Required table:

| Profile | Visible menus | Main screens | Main actions | Restrictions | Notes |
|---|---|---|---|---|---|

Consider:

- super-admin;
- tenant admin;
- company admin;
- HQ;
- branch;
- manager;
- operator;
- finance;
- support;
- auditor;
- end user;
- guest;
- public.

---

## 13. Define visual patterns for interface states

Required table:

| State | Visual representation | Message | Available action | Notes |
|---|---|---|---|---|

Mandatory states:

- loading;
- empty;
- error;
- no permission;
- success;
- validation;
- conflict;
- offline;
- plan limit reached;
- session expired;
- integration unavailable;
- awaiting approval;
- processing;
- human review required;
- AI unavailable;
- sync in progress.

---

## 14. Define dashboard and data visualization patterns

Required table:

| Visualization type | Use | Displayed data | Interactions | Visual care |
|---|---|---|---|---|

Include:

- KPI cards;
- analytical tables;
- simple charts;
- rankings;
- funnels;
- timelines;
- operational status;
- alerts;
- comparisons;
- scope filters;
- period filters;
- export.

---

## 15. Define form patterns

Required table:

| Form pattern | When to use | Fields | Validation | Feedback | Notes |
|---|---|---|---|---|---|

Include:

- simple form;
- long form;
- multi-step form;
- quick create;
- inline edit;
- upload;
- searchable select;
- dependent fields;
- real-time validation;
- autosave;
- exit confirmation;
- integration error;
- permission error.

---

## 16. Define patterns for AI and automations

When applicable, create:

| AI pattern | Where it appears | Visual behavior | Transparency | Human review | Risk | Mitigation |
|---|---|---|---|---|---|---|

Consider:

- “Generate with AI” button;
- assisted suggestion;
- automatic summary;
- automatic classification;
- chatbot;
- copilot;
- source explanation;
- confidence level;
- human editing;
- undo;
- audit;
- cost or usage;
- AI error.

If AI is not applicable, explain why.

---

## 17. Define patterns for integrations and synchronization

Required table:

| Integration pattern | Visual state | User action | Message | Recovery | Notes |
|---|---|---|---|---|---|

Include:

- connected;
- disconnected;
- syncing;
- failed;
- awaiting authorization;
- token expired;
- data mismatch;
- import completed;
- export completed;
- webhook received;
- retry.

---

## 18. Define patterns for billing and plan limits

When applicable, create:

| Scenario | Visual component | Message | Main action | UX care |
|---|---|---|---|---|

Include:

- trial active;
- trial expiring;
- trial expired;
- limit reached;
- resource blocked;
- upgrade available;
- downgrade;
- cancelation;
- pending invoice;
- payment failed;
- enterprise plan;
- feature flag disabled.

If billing is not applicable, explain why.

---

## 19. Define visual accessibility and responsiveness

Required table:

| Item | Visual rule | Verifiable criterion | Notes |
|---|---|---|---|

Include:

- contrast;
- visible focus;
- keyboard navigation;
- semantic order;
- labels;
- touch target size;
- mobile readability;
- responsive tables;
- associated error messages;
- do not rely only on color;
- hover and focus states;
- reduced motion;
- zoom.

---

## 20. Define visual and prototype acceptance criteria

Required table:

| Item | Acceptance criterion | Type | How to validate | Notes |
|---|---|---|---|---|

Types:

- visual;
- responsive;
- accessibility;
- navigation;
- component;
- state;
- flow;
- microcopy;
- prototype;
- consistency with official aesthetic.

---

## 21. Generate recommendations for Stage 8

Stage 7 should end by indicating how the next stage should use this documentation.

Recommend:

- screens that should become implementation-ready prototypes;
- components that should become the design system;
- tokens that should become the frontend theme;
- flows that need usability testing;
- critical states that must be implemented;
- screens that need visual review;
- patterns that need validation;
- visual risks that must be fixed;
- points that should become technical backlog;
- points that should guide visual QA;
- points that should guide accessibility.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 7 Executive Summary
2. Consolidated Product Context
3. Source Documents and Inputs
4. Applied Visual Direction
5. Design Tokens
6. Main Components
7. Screen Patterns
8. Main Layouts
9. Prioritized Screens for Prototyping
10. Visual Specification by Screen
11. Refined Textual Wireframes
12. Conceptual Navigable Prototype
13. Navigation by Profile
14. Visual Interface States
15. Dashboard and Data Visualization Patterns
16. Form Patterns
17. AI and Automation Patterns
18. Integration and Sync Patterns
19. Billing and Plan-Limit Patterns
20. Visual Accessibility and Responsiveness
21. Visual and Prototype Acceptance Criteria
22. Visual Risks
23. Gaps and Pending Items
24. UX/UI Guidelines Derived from `0-estetica-inicial.md`
25. Recommendations for Stage 8
26. Sources, Evidence, and References
27. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
7.html
```

---

# HTML Requirements

The HTML must be self-contained and include:

- `<!DOCTYPE html>`;
- semantic HTML;
- embedded CSS;
- embedded JavaScript;
- responsive layout;
- sidebar navigation;
- summary cards;
- tables;
- expandable sections;
- filters;
- text search;
- visual indicators;
- pure HTML/CSS/JavaScript charts;
- a light/dark theme toggle, if compatible with the official aesthetic;
- a button to print or save as PDF;
- a button to export Markdown;
- a button to copy the executive summary;
- a button to copy a screen specification;
- a button to copy textual wireframes;
- a button to copy main tables;
- no external frameworks;
- no external libraries;
- no CDN;
- no external images.

All visual choices, including colors, typography, layout, components, hierarchy, density, visual microcopy, and responsiveness, must follow `0-estetica-inicial.md`.

---

# Visual Structure

## 1. Header

Display:

- product name;
- stage name: `Stage 7 — Visual UI Design and Navigable Prototype`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of design tokens;
- number of components;
- number of prioritized screens;
- number of visual states;
- number of interaction patterns;
- number of prototype links;
- recommended next stage.

The header must follow the product’s official visual direction.

---

## 2. Indicator Cards

Create cards with:

- total input documents analyzed;
- total design tokens;
- total components;
- total screen patterns;
- total layouts;
- total prioritized screens;
- total visual states;
- total interaction patterns;
- total visual risks;
- visual maturity level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- applied aesthetic guidelines;
- tokens;
- components;
- screen patterns;
- layouts;
- prioritized screens;
- visual specification by screen;
- conceptual prototype;
- navigation by profile;
- visual states;
- dashboards;
- forms;
- AI;
- integrations;
- billing;
- accessibility;
- acceptance criteria;
- risks;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Wireframes and Conceptual Prototype

Create visual blocks for:

- refined textual wireframes;
- navigation map;
- links between screens;
- screen patterns;
- HTML/CSS-only component examples;
- interface states;
- responsiveness examples.

The blocks must be readable, useful, and consistent with the official aesthetic.

---

## 5. Detailed Analyses

Create expandable sections for:

- executive summary;
- applied visual direction;
- tokens;
- components;
- prioritized screens;
- screen specifications;
- navigable prototype;
- accessibility;
- visual risks;
- UX/UI derived from the aesthetic;
- gaps;
- recommendations for Stage 8.

These sections must use the language defined in the aesthetic file.

---

# Sources and References

Create a final section with:

| ID | Type | Title | Origin | URL or document | Used in | Note |
|---|---|---|---|---|---|---|

Include references to input documents and research sources from previous stages.

---

# Mandatory Interactivity

The dashboard must allow:

1. Toggle light/dark theme, if compatible with the official aesthetic.
2. Expand and collapse sections.
3. Filter components by category.
4. Filter screens by flow.
5. Filter screens by priority.
6. Filter states by type.
7. Filter acceptance criteria by type.
8. Filter visual risks by criticality.
9. Filter patterns by usage.
10. Free-text search across the dashboard.
11. Copy executive summary.
12. Copy screen specifications.
13. Copy textual wireframes.
14. Copy main tables.
15. Export all content to Markdown.
16. Print or save as PDF.
17. Show visual progress for Stage 7.
18. Highlight essential screens.
19. Highlight critical components.
20. Highlight high visual risks.
21. Highlight critical gaps.
22. Highlight items related to multi-tenant, billing, permissions, integrations, audit, and AI.
23. Navigate between conceptual prototype blocks using internal anchors.

---

# Style

The section design, layout, components, themes, hierarchy, composition, information density, and visual construction of the dashboard must strictly follow:

```txt
0-estetica-inicial.md
```

Create UX/UI with human intent, real product context, clear hierarchy, testable usability, and a distinct visual identity, avoiding generic AI patterns such as “beautiful but empty” layouts, excessive gradients, repetitive cards, decorative icons, and vague text.

Use a style:

- derived directly from the product’s official aesthetic direction;
- specific to the analyzed product, reflecting its segment, audience, maturity, and usage context;
- oriented to visual design, navigable prototyping, consistency, usability, validation, and implementation;
- with a clear visual hierarchy among executive summary, visual direction, tokens, components, screens, prototype, states, risks, and recommendations;
- with balanced information density, avoiding both visual overload and empty screens;
- with useful and justifiable components, avoiding decorative elements without function;
- with cards, tables, matrices, wireframes, prototype blocks, and sections used only when they help understand, filter, compare, or prioritize information;
- with colors, typography, spacing, borders, icons, states, and components consistent with `0-estetica-inicial.md`;
- with objective, contextual, and verifiable microcopy, avoiding vague phrases like “innovative solution”, “amazing experience”, or “powerful dashboard” without concrete content;
- with clear sidebar navigation, descriptive titles, and understandable visual states;
- with basic accessibility: adequate contrast, visible focus, legible text, comfortable click areas, and semantic structure;
- with real responsiveness for desktop and mobile, preserving readability of tables, matrices, wireframes, prototypes, and cards;
- with simple, useful, and testable interactions: filters, search, copy, export, print, expand, and collapse;
- with visual consistency across sections, avoiding repeated identical blocks without need;
- with a professional, practical look suitable for product managers, business analysts, UX designers, UI designers, frontend designers, architects, developers, QA, founders, and technical stakeholders.

Avoid explicitly:

- any aesthetic that contradicts `0-estetica-inicial.md`;
- flashy gradients without purpose;
- repetitive cards with little content;
- decorative icons;
- vague and generic phrases;
- excessive shadows, glow, and visual effects;
- layouts that look like templates;
- unreadable tables on small screens;
- decorative wireframes;
- prototypes disconnected from real flows;
- animations that hurt readability;
- external library dependencies;
- a visual style that looks automatically generated without design decisions.

---

# Analysis Rules

Follow these rules:

1. Do not ignore Stage 1.
2. Do not ignore Stage 1.2, when provided.
3. Do not ignore Stage 2.
4. Do not ignore Stage 3.
5. Do not ignore Stage 4.
6. Do not ignore Stage 5.
7. Do not ignore Stage 6.
8. Do not ignore the `0-estetica-inicial.md` file.
9. Do not create a parallel aesthetic.
10. Do not invent sources, data, or validations.
11. Do not use fictitious links.
12. Do not turn hypothesis into certainty.
13. Do not generate UI unrelated to requirements, data, permissions, and the real product context.
14. Do not limit the documentation to the MVP.
15. Do not over-detail technical implementation at this stage.
16. Clearly distinguish:
    - researched fact;
    - evidence;
    - strategic inference;
    - hypothesis;
    - suggested decision;
    - visual decision;
    - candidate pattern;
    - recommendation.
17. When information is uncertain, mark it as a gap or hypothesis.
18. When the aesthetic file is missing, record the visual limitation.
19. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, billing, audit, integrations, and AI where they fit the product.
20. Whenever there is sensitive data or permissions, indicate the visual and interface impact.
21. Do not invent screens, components, or patterns just to look complete; every item must have a clear purpose.

---

# Technical Rules for the HTML File

The HTML must:

- work offline once generated;
- be a single file;
- not depend on the internet to open;
- not use external libraries;
- not use frameworks;
- not use external images;
- contain CSS in `<style>`;
- contain JS in `<script>`;
- be readable and organized;
- use semantic elements;
- contain useful internal comments in the code;
- be compatible with modern browsers;
- apply the visual rules from `0-estetica-inicial.md` in CSS and layout;
- be reviewed before delivery for errors, failures, inconsistencies, empty sections, broken links, non-functional filters, non-working buttons, unreadable tables, responsiveness issues, and incoherent text;
- fix any detected issues before saving and delivering the final file.

---

# Expected HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stage 7 — Visual UI Design and Navigable Prototype</title>
  <style>
    /* embedded CSS following 0-estetica-inicial.md */
  </style>
</head>
<body>
  <aside class="sidebar">
    <!-- sidebar navigation based on the official aesthetic -->
  </aside>

  <main class="content">
    <header class="hero">
      <!-- Stage 7 header following the official aesthetic -->
    </header>

    <section id="executive-summary">
      <!-- executive summary -->
    </section>

    <section id="consolidated-context">
      <!-- consolidated product context -->
    </section>

    <section id="source-documents">
      <!-- source documents and inputs -->
    </section>

    <section id="applied-direction">
      <!-- applied visual direction -->
    </section>

    <section id="tokens">
      <!-- design tokens -->
    </section>

    <section id="components">
      <!-- main components -->
    </section>

    <section id="screen-patterns">
      <!-- screen patterns -->
    </section>

    <section id="layouts">
      <!-- main layouts -->
    </section>

    <section id="prioritized-screens">
      <!-- prioritized screens for prototyping -->
    </section>

    <section id="screen-specs">
      <!-- visual specification by screen -->
    </section>

    <section id="refined-wireframes">
      <!-- refined textual wireframes -->
    </section>

    <section id="navigable-prototype">
      <!-- conceptual navigable prototype -->
    </section>

    <section id="navigation-by-profile">
      <!-- navigation by profile -->
    </section>

    <section id="visual-states">
      <!-- visual interface states -->
    </section>

    <section id="dashboards-visualization">
      <!-- dashboard and data visualization patterns -->
    </section>

    <section id="forms">
      <!-- form patterns -->
    </section>

    <section id="ai-automations">
      <!-- AI and automation patterns -->
    </section>

    <section id="integrations">
      <!-- integration and sync patterns -->
    </section>

    <section id="billing">
      <!-- billing and plan-limit patterns -->
    </section>

    <section id="accessibility">
      <!-- visual accessibility and responsiveness -->
    </section>

    <section id="acceptance-criteria">
      <!-- visual and prototype acceptance criteria -->
    </section>

    <section id="visual-risks">
      <!-- visual risks and prototyping risks -->
    </section>

    <section id="gaps">
      <!-- gaps and pending items -->
    </section>

    <section id="ux-ui-guidelines">
      <!-- UX/UI guidelines derived from 0-estetica-inicial.md -->
    </section>

    <section id="stage8-recommendations">
      <!-- recommendations for Stage 8 -->
    </section>

    <section id="references">
      <!-- sources, evidence, and references -->
    </section>

    <section id="next-steps">
      <!-- next steps -->
    </section>
  </main>

  <script>
    /* embedded JavaScript */
  </script>
</body>
</html>
```

---

# Quality Criteria

The output should be:

- structured;
- broad;
- actionable;
- traceable;
- consistent with previous stages;
- useful for product decisions;
- useful for frontend guidance;
- useful for design system guidance;
- useful for prototyping;
- useful for usability tests;
- useful for visual QA;
- clear about uncertainties;
- clear about hypotheses;
- clear about risks;
- clear about remaining gaps;
- visually consistent with `0-estetica-inicial.md`;
- reviewed before delivery, with correction of errors and failures in the final HTML.

---

# Important Rules

1. Do not ignore Stage 1.
2. Do not ignore Stage 1.2, when provided.
3. Do not ignore Stage 2.
4. Do not ignore Stage 3.
5. Do not ignore Stage 4.
6. Do not ignore Stage 5.
7. Do not ignore Stage 6.
8. Do not ignore the `0-estetica-inicial.md` file.
9. Do not create a parallel aesthetic.
10. Do not invent sources, data, or validations.
11. Do not use fictitious links.
12. Do not depend on external libraries in the HTML.
13. Do not deliver Markdown only.
14. Do not generate separate files.
15. Generate only one final HTML, inspect it for errors or failures, and fix them.
16. Save the file as `7.html`.
17. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When receiving the Stage 7 input, the assistant must:

1. Read the previous-stage documents.
2. Read `0-estetica-inicial.md`.
3. Extract the complete product context.
4. Consolidate applied visual direction, tokens, components, screen patterns, layouts, prioritized screens, visual specifications, refined wireframes, conceptual prototype, visual states, accessibility, and acceptance criteria.
5. Apply all visual decisions from the official aesthetic file.
6. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
7. Save the file using:

```txt
7.html
```

8. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
