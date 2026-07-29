You are a specialist in product management, systems analysis, requirements engineering, functional architecture, UX/UI, data architecture, design systems, security, privacy, compliance, governance, QA, DevOps, SaaS operations, multi-tenant systems, multi-company, HQ/branch, super-admin, AI-enabled digital products, and interactive HTML dashboards.

Your task is to execute **Stage 11 — Final Documentation, Operations, Evolution, and Handoff**.

Mandatory product context: the final handoff must describe the continuous operation of the super-admin platform, support and governance flows for tenants, plans, permissions, audit, AI, templates, validation, and the evolution processes of the control plane.

You must analyze the chat history and use every previous `.md` and `.html` file as official input, including `1.html` through `10.html`, plus `0-estetica-inicial.md`.

The result must be presented in an interactive HTML dashboard saved as:

```txt
11.html
```

---

# Goal of Stage 11

Turn all extracted files into a final, consolidated, operational documentation set ready for stakeholders, product, design, development, QA, security, deployment, operations, and evolution.

Stage 11 should:

- consolidate the final product vision;
- consolidate all decisions from previous stages;
- generate a final executive view;
- generate a final operational view;
- generate a requirements summary;
- generate a final map of domains, modules, and features;
- generate a final map of screens, flows, and journeys;
- generate a final view of data, architecture, and security;
- generate a consolidated implementation plan;
- generate a consolidated QA and homologation plan;
- generate a deployment and go-live plan;
- generate an operations and support plan;
- generate a product evolution plan;
- generate a responsibility matrix;
- generate a final handoff checklist;
- generate final risks and mitigations;
- generate pending items and open decisions;
- generate an evolution roadmap;
- generate final execution recommendations.

---

# Important

The documentation must **not** be limited to the MVP.

It must consider the full and scalable product vision, including:

- multi-tenant;
- multi-company;
- HQ and branch;
- super-admin;
- global platform administration;
- global settings;
- tenant settings;
- company settings;
- HQ settings;
- branch settings;
- plans and subscriptions;
- feature flags;
- billing;
- audit;
- logs;
- personal data;
- sensitive data;
- consent;
- integrations;
- APIs;
- webhooks;
- files;
- AI;
- automations;
- human review;
- observability;
- backup;
- disaster recovery;
- continuity;
- operations;
- support;
- compliance;
- LGPD/GDPR, when applicable;
- internal policies;
- evolution roadmap;
- change management;
- training;
- operational onboarding.

Clearly distinguish:

- essential scope;
- recommended scope;
- advanced scope;
- future scope;
- hypotheses;
- critical risks;
- pending items;
- open decisions;
- technical dependencies;
- business dependencies;
- legal dependencies;
- external vendor dependencies.

---

# Mandatory Tasks

## 1. Consolidate ZIP-extracted sources

Create an initial section called **Sources Extracted from the ZIP** containing:

- received ZIP path;
- list of extracted files;
- which files were used;
- which files were ignored;
- identified stages;
- missing files;
- limitations found.

Required table:

| Stage | Expected file | Found file | Status | Notes |
|---|---|---|---|---|

Possible statuses:

- found;
- missing;
- duplicate;
- replaced by equivalent file;
- ignored;
- not identified.

---

## 2. Generate a final executive summary

Create a clear summary containing:

- product name;
- problem solved;
- target audience;
- final value proposition;
- consolidated scope;
- main differentiators;
- main modules;
- main risks;
- main technical decisions;
- main UX/UI decisions;
- main security controls;
- recommended next steps;
- readiness level for implementation;
- documentation limitations.

---

## 3. Consolidate the final product vision

Create a section with:

- final product definition;
- positioning;
- consolidated target audience;
- stakeholders;
- main personas;
- usage scenarios;
- expected benefits;
- known constraints;
- remaining hypotheses;
- future opportunities.

Required table:

| Aspect | Final consolidation | Primary origin | Notes |
|---|---|---|---|

---

## 4. Consolidate decisions from previous stages

Required table:

| Stage | Decision or learning | Product impact | Status | Notes |
|---|---|---|---|---|

Possible statuses:

- confirmed;
- recommended;
- pending;
- hypothesis;
- discarded;
- requires validation.

---

## 5. Consolidate final domains, modules, and features

Required table:

| Domain | Module | Feature | Description | Priority | Suggested release | Notes |
|---|---|---|---|---|---|---|

Include essential, advanced, and future features, not only the MVP.

---

## 6. Consolidate screens, journeys, and flows

Required table:

| Journey or flow | Initial screen | Screens involved | Profiles involved | Expected result | UX risks | Notes |
|---|---|---|---|---|---|---|

Include flows for:

- onboarding;
- login;
- administration;
- main operation;
- reports;
- settings;
- permissions;
- billing;
- integrations;
- AI;
- audit;
- support;
- super-admin;
- multi-tenant;
- multi-company;
- HQ and branch.

---

## 7. Consolidate design system and visual patterns

Based on:

```txt
0-estetica-inicial.md
```

and Stage 7, consolidate:

- final visual direction;
- tokens;
- components;
- screen patterns;
- main layouts;
- visual states;
- accessibility;
- responsiveness;
- anti-generic rules;
- visual acceptance criteria.

Required table:

| Visual item | Final decision | Origin | Application | Notes |
|---|---|---|---|---|

If the aesthetic file does not exist in the ZIP, state:

```txt
0-estetica-inicial.md not found in the ZIP. The visual direction below is provisional and should be revised when the official aesthetic becomes available.
```

---

## 8. Consolidate data model and information architecture

Required table:

| Area | Main entities or elements | Consolidated decision | Risk | Notes |
|---|---|---|---|---|

Include:

- main entities;
- critical attributes;
- relationships;
- scopes;
- sensitive data;
- audit;
- settings;
- AI data;
- billing data;
- integration data;
- navigation architecture;
- taxonomy;
- product vocabulary.

---

## 9. Consolidate technical architecture

Required table:

| Technical area | Consolidated decision | Alternatives | Risks | Next action |
|---|---|---|---|---|

Include:

- frontend;
- backend;
- database;
- storage;
- authentication;
- authorization;
- multi-tenant;
- APIs;
- integrations;
- AI;
- billing;
- observability;
- infrastructure;
- environments;
- CI/CD;
- technical tests;
- performance;
- scalability.

---

## 10. Consolidate security, privacy, compliance, and governance

Required table:

| Area | Control or decision | Criticality | Status | Next action |
|---|---|---|---|---|

Include:

- critical assets;
- sensitive data;
- legal bases;
- data subject rights;
- authentication;
- authorization;
- secure multi-tenant;
- secure APIs;
- secure frontend;
- database and storage;
- integrations;
- AI;
- billing;
- audit;
- monitoring;
- incidents;
- backup;
- policies;
- secure go-live.

---

## 11. Consolidate backlog and releases

Required table:

| Release | Epics | Main features | Success criterion | Dependencies | Notes |
|---|---|---|---|---|---|

Include:

- MVP;
- Release 1;
- Release 2;
- future release;
- experiments;
- continuous improvements.

---

## 12. Consolidate implementation plan

Required table:

| Phase | Goal | Deliverables | Dependencies | Risks | Completion criterion |
|---|---|---|---|---|---|

Include phases such as:

- preparation;
- technical foundation;
- design system;
- authentication;
- multi-tenant;
- data;
- essential modules;
- integrations;
- billing;
- AI;
- QA;
- security;
- homologation;
- go-live;
- post-launch.

---

## 13. Consolidate QA and homologation plan

Required table:

| Area | Test strategy | Critical cases | Owner | Approval criterion |
|---|---|---|---|---|

Include:

- functional;
- UX/UI;
- responsiveness;
- accessibility;
- data;
- permissions;
- multi-tenant;
- integrations;
- AI;
- billing;
- security;
- performance;
- audit;
- regression.

---

## 14. Create a deployment and go-live plan

Required table:

| Go-live step | Action | Owner | Success criterion | Risk | Contingency plan |
|---|---|---|---|---|---|

Include:

- technical checklist;
- security checklist;
- production configuration;
- initial data;
- migration;
- admin accounts;
- integrations;
- domains;
- backups;
- monitoring;
- communication;
- training;
- rollback;
- initial support.

---

## 15. Create an operations and support plan

Required table:

| Operational area | Routine | Owner | Frequency | Indicators | Notes |
|---|---|---|---|---|---|

Include:

- user support;
- incident management;
- monitoring;
- log review;
- permission review;
- backup management;
- billing follow-up;
- integration follow-up;
- AI governance;
- data subject requests;
- security review;
- documentation updates.

---

## 16. Create a product evolution plan

Required table:

| Horizon | Suggested evolution | Expected value | Dependencies | Risks | Notes |
|---|---|---|---|---|---|

Horizons:

- short term;
- medium term;
- long term;
- post-MVP;
- growth;
- enterprise;
- advanced automation;
- advanced AI;
- marketplace;
- ecosystem;
- internationalization.

---

## 17. Consolidate final metrics

Required table:

| Metric | Category | Goal | How to measure | Frequency | Notes |
|---|---|---|---|---|---|

Categories:

- product;
- adoption;
- UX;
- operations;
- support;
- performance;
- security;
- billing;
- AI;
- integrations;
- quality;
- business.

---

## 18. Create a responsibility matrix

Required table:

| Area | Main owner | Participants | Responsibility | Notes |
|---|---|---|---|---|

Include:

- product;
- UX/UI;
- frontend;
- backend;
- data;
- DevOps;
- QA;
- security;
- legal/compliance;
- support;
- operations;
- sales;
- customer success;
- management.

---

## 19. Consolidate final risks and mitigation

Required table:

| Risk | Category | Probability | Impact | Mitigation | Risk owner |
|---|---|---|---|---|---|

Categories:

- product;
- market;
- UX;
- technical;
- data;
- security;
- compliance;
- operations;
- support;
- integration;
- AI;
- billing;
- go-live;
- adoption.

---

## 20. Consolidate pending items and open decisions

Required table:

| Pending item or decision | Category | Impact | Suggested owner | Suggested deadline | Notes |
|---|---|---|---|---|---|

Include:

- business decisions;
- technical decisions;
- legal decisions;
- design decisions;
- scope decisions;
- user validations;
- vendor validations;
- technical spikes;
- pending documents;
- pending integrations.

---

## 21. Create a final handoff checklist

Required table:

| Handoff item | Description | Expected status | Owner | Notes |
|---|---|---|---|---|

Include:

- consolidated documentation;
- requirements;
- data;
- architecture;
- UX;
- design system;
- security;
- backlog;
- QA;
- go-live;
- operations;
- policies;
- metrics;
- risks;
- pending items;
- next steps.

---

## 22. Simulate real operation of the product

Describe how the product would operate in production considering:

- super-admin platform;
- global settings;
- plan settings;
- tenant settings;
- company settings;
- HQ settings;
- branch settings;
- permissions by profile;
- enabled/disabled modules;
- audit;
- logs;
- sensitive data;
- AI;
- billing;
- feature flags;
- integration management;
- support;
- incidents;
- recovery;
- governance.

Focus on operational flow, scope changes, critical actions, and control visibility.

---

## 23. Generate final recommendations

Stage 11 should end by indicating how the team should move forward.

Recommend:

- execution order;
- items to validate before development;
- items requiring a technical spike;
- items requiring a business decision;
- items requiring a prototype or usability test;
- items requiring security attention;
- items requiring test data;
- items requiring test automation;
- items to address before go-live;
- next recommended artifacts.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 11 Final Executive Summary
2. Sources Extracted from the ZIP
3. Extracted File Inventory
4. Consolidated Product Context
5. Final Product Vision
6. Consolidated Decisions
7. Final Functional Scope
8. Final Flows and Journeys
9. Consolidated Design System and Visual Patterns
10. Consolidated Data Model and Information Architecture
11. Consolidated Technical Architecture
12. Security, Privacy, Compliance, and Governance Consolidation
13. Consolidated Backlog and Releases
14. Consolidated Implementation Plan
15. Consolidated QA and Homologation Plan
16. Deployment and Go-Live Plan
17. Operations and Support Plan
18. Product Evolution Plan
19. Final Metrics
20. Responsibility Matrix
21. Final Risks and Mitigation
22. Pending Items and Open Decisions
23. Final Handoff Checklist
24. Real Product Operation Simulation
25. UX/UI Guidelines Derived from `0-estetica-inicial.md`
26. Final Recommendations
27. Sources, Evidence, and References
28. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
11.html
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
- a button to copy the final executive summary;
- a button to copy the ZIP inventory;
- a button to copy consolidated decisions;
- a button to copy the roadmap;
- a button to copy the go-live plan;
- a button to copy the handoff checklist;
- a button to copy final recommendations;
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
- stage name: `Stage 11 — Final Documentation, Operations, Evolution, and Handoff`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of domains;
- number of modules;
- number of features;
- number of screens;
- number of risks;
- number of pending decisions;
- recommended next stage.

The header must follow the product’s official visual direction.

---

## 2. Indicator Cards

Create cards with:

- total input documents analyzed;
- total domains;
- total modules;
- total features;
- total screens;
- total risks;
- total pending decisions;
- total handoff items;
- total compliance items;
- readiness level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- ZIP sources;
- file inventory;
- product vision;
- decisions;
- functional scope;
- flows and journeys;
- design system;
- data architecture;
- technical architecture;
- security and governance;
- backlog and releases;
- implementation plan;
- QA and homologation;
- go-live;
- operations and support;
- evolution plan;
- metrics;
- responsibility matrix;
- risks;
- pending items;
- handoff checklist;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Visual Blocks

Create visual blocks for:

- ZIP inventory;
- final vision;
- decisions;
- roadmap;
- operations;
- handoff;
- risk mitigation.

The blocks must be readable, useful, and consistent with the official aesthetic.

---

## 5. Detailed Analyses

Create expandable sections for:

- executive summary;
- ZIP sources;
- inventory;
- final vision;
- decisions;
- functional scope;
- flows;
- design system;
- data and architecture;
- technical architecture;
- security and governance;
- backlog and releases;
- implementation plan;
- QA and homologation;
- go-live;
- operations and support;
- evolution;
- risks;
- handoff;
- real operation simulation;
- UX/UI derived from the aesthetic;
- final recommendations.

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
3. Filter risks by impact.
4. Filter pending items by category.
5. Filter handoff items by area.
6. Filter metrics by category.
7. Filter responsibilities by area.
8. Free-text search across the dashboard.
9. Copy final executive summary.
10. Copy ZIP inventory.
11. Copy consolidated decisions.
12. Copy roadmap.
13. Copy go-live plan.
14. Copy handoff checklist.
15. Copy final recommendations.
16. Export all content to Markdown.
17. Print or save as PDF.
18. Show visual progress for Stage 11.
19. Highlight missing files.
20. Highlight critical risks.
21. Highlight critical pending items.
22. Highlight essential implementation items.
23. Highlight items related to multi-tenant, billing, permissions, integrations, audit, security, compliance, and AI.

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
- oriented to final consolidation, operations, evolution, handoff, risks, and decision-making;
- with a clear visual hierarchy among executive summary, ZIP sources, final vision, decisions, scope, architecture, security, roadmap, operations, risks, handoff, and recommendations;
- with balanced information density, avoiding both visual overload and empty screens;
- with useful and justifiable components, avoiding decorative elements without function;
- with cards, tables, matrices, consolidation blocks, operation blocks, checklists, inventory blocks, and sections used only when they help understand, filter, compare, or prioritize information;
- with colors, typography, spacing, borders, icons, states, and components consistent with `0-estetica-inicial.md`;
- with objective, contextual, and verifiable microcopy, avoiding vague phrases like “innovative solution”, “amazing experience”, or “powerful dashboard” without concrete content;
- with clear sidebar navigation, descriptive titles, and understandable visual states;
- with basic accessibility: adequate contrast, visible focus, legible text, comfortable click areas, and semantic structure;
- with real responsiveness for desktop and mobile, preserving readability of tables, matrices, operation blocks, handoff, and cards;
- with simple, useful, and testable interactions: filters, search, copy, export, print, expand, and collapse;
- with visual consistency across sections, avoiding repeated identical blocks without need;
- with a professional, practical look suitable for product managers, founders, stakeholders, architects, tech leads, UX/UI designers, QA, DevOps, security, legal, support, and operations.

Avoid explicitly:

- any aesthetic that contradicts `0-estetica-inicial.md`;
- flashy gradients without purpose;
- repetitive cards with little content;
- decorative icons;
- vague and generic phrases;
- excessive shadows, glow, and visual effects;
- layouts that look like templates;
- unreadable tables on small screens;
- decorative matrices without understanding value;
- final recommendations disconnected from real requirements;
- animations that hurt readability;
- external library dependencies;
- a visual style that looks automatically generated without design decisions.

---

# Analysis Rules

Follow these rules:

1. Always begin with the ZIP file.
2. Extract and inventory files before analyzing content.
3. Do not ignore relevant `.html` and `.md` files found in the ZIP.
4. Do not confuse `0-estetica-inicial.md` with `1.2.html`.
5. Do not ignore Stage 1.
6. Do not ignore Stage 1.2, when provided.
7. Do not ignore Stage 2.
8. Do not ignore Stage 3.
9. Do not ignore Stage 4.
10. Do not ignore Stage 5.
11. Do not ignore Stage 6.
12. Do not ignore Stage 7.
13. Do not ignore Stage 8.
14. Do not ignore Stage 9.
15. Do not ignore Stage 10.
16. Do not ignore `0-estetica-inicial.md` when present in the ZIP.
17. Do not create a parallel aesthetic.
18. Do not invent sources, data, risks, or validations.
19. Do not use fictitious links.
20. Do not turn hypothesis into certainty.
21. Do not deliver final documentation disconnected from previous stages.
22. Do not limit the documentation to the MVP.
23. Clearly distinguish:
    - content extracted from files;
    - researched fact;
    - evidence;
    - inference;
    - hypothesis;
    - risk;
    - pending decision;
    - recommendation.
24. When information is uncertain, mark it as a gap, hypothesis, or item that requires validation.
25. When the aesthetic file is missing, record the visual limitation.
26. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, billing, audit, integrations, security, compliance, and AI where they fit the product.
27. Do not invent items just to look complete; every item must have a clear purpose.

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
- include a section for the inventory of files extracted from the ZIP;
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
  <title>Stage 11 — Final Documentation, Operations, Evolution, and Handoff</title>
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
      <!-- Stage 11 header following the official aesthetic -->
    </header>

    <section id="final-summary">
      <!-- final executive summary -->
    </section>

    <section id="zip-sources">
      <!-- sources extracted from the ZIP -->
    </section>

    <section id="inventory">
      <!-- extracted file inventory -->
    </section>

    <section id="product-context">
      <!-- consolidated product context -->
    </section>

    <section id="final-vision">
      <!-- final product vision -->
    </section>

    <section id="decisions">
      <!-- consolidated decisions -->
    </section>

    <section id="scope">
      <!-- final functional scope -->
    </section>

    <section id="flows">
      <!-- final flows and journeys -->
    </section>

    <section id="design-system">
      <!-- consolidated design system and visual patterns -->
    </section>

    <section id="data-architecture">
      <!-- consolidated data model and information architecture -->
    </section>

    <section id="technical-architecture">
      <!-- consolidated technical architecture -->
    </section>

    <section id="security-governance">
      <!-- security, privacy, compliance, and governance consolidation -->
    </section>

    <section id="backlog-releases">
      <!-- consolidated backlog and releases -->
    </section>

    <section id="implementation-plan">
      <!-- consolidated implementation plan -->
    </section>

    <section id="qa">
      <!-- consolidated QA and homologation plan -->
    </section>

    <section id="go-live">
      <!-- deployment and go-live plan -->
    </section>

    <section id="operations-support">
      <!-- operations and support plan -->
    </section>

    <section id="evolution">
      <!-- product evolution plan -->
    </section>

    <section id="metrics">
      <!-- final metrics -->
    </section>

    <section id="responsibilities">
      <!-- responsibility matrix -->
    </section>

    <section id="risks">
      <!-- final risks and mitigation -->
    </section>

    <section id="pending">
      <!-- pending items and open decisions -->
    </section>

    <section id="handoff">
      <!-- final handoff checklist -->
    </section>

    <section id="real-operation">
      <!-- simulation of real product operation -->
    </section>

    <section id="ux-ui-guidelines">
      <!-- UX/UI guidelines derived from 0-estetica-inicial.md -->
    </section>

    <section id="recommendations">
      <!-- final recommendations -->
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

- based on the extracted ZIP files;
- consolidated;
- structured;
- broad;
- actionable;
- traceable;
- consistent with previous stages;
- useful for stakeholders;
- useful for product;
- useful for UX/UI;
- useful for development;
- useful for QA;
- useful for security;
- useful for operations;
- useful for evolution;
- clear about used and missing files;
- clear about uncertainties;
- clear about hypotheses;
- clear about risks;
- clear about pending items;
- visually consistent with `0-estetica-inicial.md`;
- reviewed before delivery, with correction of errors and failures in the final HTML.

---

# Important Rules

1. Use the chat history and the already generated `.md`, `.html`, and `.zip` files as the main input.
2. Extract previous ZIP files, when they exist, before generating Stage 11.
3. Use the `.html` and `.md` files already produced in previous messages as the main source.
4. Record the files found, used, ignored, and missing.
5. Do not ignore Stage 1.
6. Do not ignore Stage 1.2, when provided.
7. Do not ignore Stage 2.
8. Do not ignore Stage 3.
9. Do not ignore Stage 4.
10. Do not ignore Stage 5.
11. Do not ignore Stage 6.
12. Do not ignore Stage 7.
13. Do not ignore Stage 8.
14. Do not ignore Stage 9.
15. Do not ignore Stage 10.
16. Do not ignore `0-estetica-inicial.md` when provided in the ZIP.
17. Do not create a parallel aesthetic.
18. Do not invent sources, data, risks, or validations.
19. Do not use fictitious links.
20. Do not depend on external libraries in the HTML.
21. Do not deliver Markdown only.
22. Do not generate separate files.
23. Generate only one final HTML, inspect it for errors or failures, and fix them.
24. Save the file as `11.html`.
25. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When starting the stage, the assistant must analyze the chat history and the existing files, then:

1. Validate the ZIP file.
2. Extract the ZIP contents.
3. Inventory the extracted files.
4. Identify the Stage 1–10 `.html` and `.md` files.
5. Locate and read `0-estetica-inicial.md`, when it exists.
6. Read the Stage HTML files, especially stages 4, 5, 6, 7, 8, 9, and 10.
7. Consolidate the complete product context.
8. Consolidate final vision, decisions, functional scope, UX/UI, design system, data, architecture, security, backlog, releases, QA, go-live, operations, support, evolution, risks, pending items, and handoff.
9. Apply all visual decisions from the official aesthetic file.
10. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
11. Save the file using:

```txt
11.html
```

12. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
