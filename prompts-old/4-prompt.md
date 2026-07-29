You are a specialist in requirements engineering, systems analysis, product management, functional architecture, UX strategy, SaaS, multi-tenant systems, multi-company, HQ/branch structures, permissions, super-admin, AI for digital products, and interactive HTML dashboards.

Your task is to execute **Stage 4 — Structured Functional Specification**.

Mandatory product context: the specification must cover the super-admin layer and its core modules, such as login and context selection, global dashboard, tenants, plans, Stripe products, subscriptions, feature management, roles and permissions, audit, templates, AI, global settings, and a validation engine.

You must analyze the chat history and use every previous `.md` and `.html` file as official input, including `1.html`, `1.2.html`, `0-estetica-inicial.md`, `2.html`, and `3.html`.

The result must be presented in an interactive HTML dashboard saved as:

```txt
4.html
```

---

# Goal of Stage 4

Turn the strategic learnings from previous stages into a structured, broad, and actionable functional specification.

Stage 4 should:

- consolidate the product into functional domains;
- detail modules by domain;
- detail features by module;
- identify screens for each feature;
- map actions and events for each screen;
- map initial business rules;
- map permissions by profile;
- map interface states;
- map high-level data needs;
- map candidate integrations;
- map automations and AI opportunities;
- map tenant/company/HQ/branch-specific settings, when applicable;
- map super-admin functionality, when applicable;
- prepare the foundation for detailed UX, data modeling, technical architecture, backlog, tests, and implementation.

---

# Important

The documentation must **not** be limited to the MVP.

It must consider the full, scalable vision of the product, including, when applicable:

- multi-tenant;
- multi-company;
- HQ and branch;
- person and company users;
- plans and subscriptions;
- billing;
- feature flags;
- super-admin;
- global platform administration;
- tenant settings;
- company settings;
- branch settings;
- granular permissions;
- audit;
- integrations;
- notifications;
- reports;
- dashboards;
- automations;
- AI;
- support;
- security;
- compliance;
- operations and governance.

Still, clearly distinguish:

- essential features;
- advanced features;
- future features;
- hypotheses;
- validation-dependent items;
- items derived from market research.

---

# Mandatory Tasks

## 1. Read and consolidate previous documents

Extract:

- product name;
- project code, if any;
- system type;
- segment;
- target audience;
- main problem;
- value proposition;
- strategic vision;
- updated hypotheses;
- consolidated risks;
- opportunities;
- preliminary domains;
- candidate modules;
- candidate features;
- main flows;
- product principles;
- Stage 3 recommendations;
- official aesthetic direction from `0-estetica-inicial.md`.

---

## 2. Generate an executive summary of the specification

Create a clear summary containing:

- what will be specified;
- considered functional scope;
- main assumptions;
- decisions already made;
- documentation limitations;
- relationship to previous stages;
- relationship to next stages;
- specification maturity level.

---

## 3. Define the product’s functional structure

Organize the system into:

- domains;
- modules;
- features;
- screens;
- actions;
- events;
- rules;
- permissions;
- states;
- data;
- integrations;
- automations;
- settings.

Use a product, business, and operations-oriented approach.

---

## 4. Map functional domains

Required table:

| Domain | Domain description | Domain goal | Involved profiles | Notes |
|---|---|---|---|---|

Consider, when applicable:

- Platform;
- Super-admin;
- Backoffice;
- Customer;
- Operations;
- Administration;
- Data and Analytics;
- AI and Automation;
- Integrations;
- Billing;
- Security;
- Settings;
- Support;
- Audit;
- Tenant;
- Company;
- HQ;
- Branch;
- Public Portal;
- End User Area.

---

## 5. Map modules by domain

Required table:

| Domain | Module | Module description | Module goal | Involved profiles | Priority | Origin |
|---|---|---|---|---|---|---|

The `Origin` column must indicate whether the module came from:

- Stage 1;
- Stage 0;
- Stage 2;
- Stage 3;
- Benchmarking;
- Inference;
- Best practice;
- SaaS requirement;
- Hypothesis.

---

## 6. Map features by module

Required table:

| Domain | Module | Feature | Feature description | Feature goal | User value | Priority | Origin |
|---|---|---|---|---|---|---|---|

The features must cover the full product vision, not only the MVP.

Include, when applicable:

- main CRUDs;
- operational flows;
- base registrations;
- dashboards;
- reports;
- notifications;
- imports;
- exports;
- approvals;
- audit;
- integrations;
- settings;
- permissions;
- onboarding;
- billing;
- support;
- AI and automations.

---

## 7. Map screens by feature

Required table:

| Domain | Module | Feature | Screen | Screen description | Screen goal | Screen actions and events | Screen states |
|---|---|---|---|---|---|---|---|

Consider screens such as:

- list;
- details;
- create;
- edit;
- delete;
- confirmation;
- approval;
- settings;
- history;
- dashboard;
- report;
- import;
- export;
- onboarding;
- error;
- no permission;
- empty;
- loading.

---

## 8. Detail actions and events

Required table:

| Screen | Action or event | Type | Trigger | Expected result | Validation | User feedback |
|---|---|---|---|---|---|---|

Suggested types:

- click;
- form submission;
- selection;
- filter;
- search;
- sort;
- upload;
- download;
- approval;
- rejection;
- confirmation;
- cancelation;
- automation;
- notification;
- integration;
- error.

---

## 9. Map initial business rules

Required table:

| ID | Business rule | Description | Domain | Module | Feature | Impact | Notes |
|---|---|---|---|---|---|---|---|

Include rules related to:

- validation;
- permissions;
- statuses;
- approvals;
- plan limits;
- multi-tenant;
- multi-company;
- HQ/branch;
- billing;
- notifications;
- audit;
- deadlines;
- integrations;
- AI;
- security;
- compliance.

---

## 10. Map profiles and permissions

Required matrix:

| Profile | Scope | Domain | Module | Feature | View | Create | Edit | Delete | Approve | Configure | Export |
|---|---|---|---|---|---|---|---|---|---|---|---|

Consider profiles such as:

- platform super-admin;
- tenant administrator;
- company administrator;
- HQ administrator;
- branch administrator;
- manager;
- operator;
- analyst;
- finance;
- support;
- auditor;
- end user;
- customer;
- guest;
- read-only user.

Adapt the profiles to the product context.

---

## 11. Map settings

Required table:

| Setting level | Setting | Description | System impact | Who can change it | Notes |
|---|---|---|---|---|---|

Consider, when applicable:

- global platform settings;
- plan-level settings;
- tenant-level settings;
- company-level settings;
- HQ-level settings;
- branch-level settings;
- feature flags;
- usage limits;
- email templates;
- notification templates;
- integrations;
- permissions;
- visual identity;
- language;
- currency;
- timezone;
- security policies.

---

## 12. Map high-level data

Required table:

| Entity or object | Description | Main fields | Relationships | Domain | Notes |
|---|---|---|---|---|---|

Do not generate the final physical database model yet.

Only identify the data needed to guide the next modeling stage.

---

## 13. Map candidate integrations

Required table:

| Integration | Type | Goal | Data exchanged | Criticality | Priority | Notes |
|---|---|---|---|---|---|---|

Suggested types:

- API;
- webhook;
- authentication;
- payment;
- email;
- WhatsApp;
- SMS;
- ERP;
- CRM;
- BI;
- storage;
- AI;
- calendar;
- maps;
- documents;
- e-signature.

---

## 14. Map automations and AI

Required table:

| Automation or AI | Description | Input | Processing | Output | Benefit | Risk | Priority |
|---|---|---|---|---|---|---|---|

Consider:

- assistants;
- recommendations;
- classification;
- summarization;
- data extraction;
- document generation;
- predictive analysis;
- smart alerts;
- workflow automations;
- automatic prioritization;
- anomaly detection;
- chatbots;
- copilots;
- smart audit.

---

## 15. Map reports and dashboards

Required table:

| Report or dashboard | Audience | Goal | Indicators | Filters | Usage frequency | Notes |
|---|---|---|---|---|---|---|

Include:

- executive dashboard;
- operational dashboard;
- analytics reports;
- financial reports;
- productivity reports;
- audit;
- platform usage;
- tenant indicators;
- company indicators;
- branch indicators.

---

## 16. Map states, messages, and feedback

Required table:

| Context | State | Suggested message | Recommended action | Notes |
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
- awaiting approval.

---

## 17. Define initial acceptance criteria

Create criteria per main feature:

| Feature | Acceptance criterion | Type | Notes |
|---|---|---|---|

Types:

- functional;
- permission;
- validation;
- UX;
- security;
- integration;
- performance;
- audit.

---

## 18. Consolidate scope by priority

Classify features as:

- Essential;
- Important;
- Advanced;
- Future;
- Experimental;
- Validation-dependent.

Required table:

| Item | Type | Domain | Module | Priority | Justification | Dependencies |
|---|---|---|---|---|---|---|

---

## 19. Apply UX/UI guidelines from the aesthetic file

Read:

```txt
0-estetica-inicial.md
```

Extract the guidelines that affect:

- Stage 4 dashboard structure;
- visual organization of tables;
- card style;
- filter behavior;
- information density;
- document hierarchy;
- responsiveness;
- accessibility;
- microcopy;
- visual states;
- component language;
- interface tone.

The visual section of Stage 4 must be a practical application of the official aesthetic, not a new visual direction.

If the aesthetic file does not exist, state:

```txt
0-estetica-inicial.md not provided. The visual direction below is provisional and should be revised when the official aesthetic becomes available.
```

---

## 20. Generate recommendations for Stage 5

Stage 4 should end by indicating how the next stage should use this specification.

Recommend:

- candidate entities for data modeling;
- relationships that should be detailed;
- rules that affect the data model;
- permissions that affect the structure;
- integrations that affect the architecture;
- events that need audit;
- features that need validation;
- UX points that need more detail;
- points that should become backlog;
- risks that must be handled before development.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 4 Executive Summary
2. Consolidated Product Context
3. Source Documents and Inputs
4. Scope of the Functional Specification
5. Functional Domains
6. Modules by Domain
7. Features by Module
8. Screens by Feature
9. Actions and Events by Screen
10. Initial Business Rules
11. Profiles and Permission Matrix
12. Settings by Scope
13. High-Level Data
14. Candidate Integrations
15. Automations and AI
16. Reports and Dashboards
17. States, Messages, and Feedback
18. Initial Acceptance Criteria
19. Functional Prioritization
20. Functional Dependencies
21. Functional Risks
22. UX/UI Guidelines Derived from `0-estetica-inicial.md`
23. Gaps and Pending Items
24. Recommendations for Stage 5
25. Sources, Evidence, and References
26. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
4.html
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
- a button to copy main tables and sections;
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
- stage name: `Stage 4 — Structured Functional Specification`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of domains;
- number of modules;
- number of features;
- number of screens;
- number of rules;
- number of profiles;
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
- total business rules;
- total profiles;
- total integrations;
- total automations and AI;
- specification maturity level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- domains;
- modules;
- features;
- screens;
- actions and events;
- business rules;
- permission matrix;
- settings;
- high-level data;
- integrations;
- automations and AI;
- reports and dashboards;
- states and messages;
- acceptance criteria;
- prioritization;
- dependencies;
- risks;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Detailed Analyses

Create expandable sections for:

- executive summary;
- consolidated context;
- functional scope;
- domain view;
- module view;
- rules and permissions;
- UX/UI derived from the aesthetic;
- gaps;
- recommendations for Stage 5.

These sections must use the language defined in the aesthetic file.

---

## 5. Sources and References

Create a final section with:

| ID | Type | Title | Origin | URL or document | Used in | Note |
|---|---|---|---|---|---|---|

Include references to input documents and research sources from previous stages.

---

# Mandatory Interactivity

The dashboard must allow:

1. Toggle light/dark theme, if compatible with the official aesthetic.
2. Expand and collapse sections.
3. Filter features by domain.
4. Filter features by module.
5. Filter features by priority.
6. Filter screens by feature.
7. Filter rules by domain, module, or impact.
8. Filter permissions by profile.
9. Filter settings by scope.
10. Filter integrations by type or criticality.
11. Filter automations by priority or risk.
12. Filter acceptance criteria by type.
13. Free-text search across the dashboard.
14. Copy executive summary.
15. Copy main tables.
16. Export all content to Markdown.
17. Print or save as PDF.
18. Show visual progress for Stage 4.
19. Highlight essential features.
20. Highlight high risks.
21. Highlight critical gaps.
22. Highlight validation-dependent items.
23. Highlight items related to multi-tenant, billing, permissions, integrations, and AI.

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
- oriented to reading, comparison, functional specification, and decision-making;
- with a clear visual hierarchy among executive summary, domains, modules, features, screens, rules, permissions, risks, and recommendations;
- with balanced information density, avoiding both visual overload and empty screens;
- with useful and justifiable components, avoiding decorative elements without function;
- with cards, tables, matrices, and sections used only when they help understand, filter, compare, or prioritize information;
- with colors, typography, spacing, borders, icons, states, and components consistent with `0-estetica-inicial.md`;
- with objective, contextual, and verifiable microcopy, avoiding vague phrases like “innovative solution”, “amazing experience”, or “powerful dashboard” without concrete content;
- with clear sidebar navigation, descriptive titles, and understandable visual states;
- with basic accessibility: adequate contrast, visible focus, legible text, comfortable click areas, and semantic structure;
- with real responsiveness for desktop and mobile, preserving readability of tables, matrices, and cards;
- with simple, useful, and testable interactions: filters, search, copy, export, print, expand, and collapse;
- with visual consistency across sections, avoiding repeated identical blocks without need;
- with a professional, practical look suitable for product managers, business analysts, UX designers, founders, technical stakeholders, and investors.

Avoid explicitly:

- any aesthetic that contradicts `0-estetica-inicial.md`;
- flashy gradients without purpose;
- repetitive cards with little content;
- decorative icons;
- vague and generic phrases;
- excessive shadows, glow, and visual effects;
- layouts that look like templates;
- unreadable tables on small screens;
- animations that hurt readability;
- external library dependencies;
- a visual style that looks automatically generated without design decisions.

---

# Analysis Rules

Follow these rules:

1. Do not ignore previous-stage documents.
2. Do not contradict evidence without justification.
3. Do not invent user validation.
4. Do not turn hypothesis into certainty.
5. Do not generate final requirements without indicating origin or evidence.
6. Do not lock the scope too early.
7. Do not limit the documentation to the MVP.
8. Do not detail the physical database model at this stage.
9. Do not generate final technical architecture at this stage.
10. Clearly distinguish:
    - researched fact;
    - evidence;
    - strategic inference;
    - hypothesis;
    - suggested decision;
    - candidate requirement;
    - recommendation.
11. When information is uncertain, mark it as a gap or hypothesis.
12. When the aesthetic file is missing, record the visual limitation.
13. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, and AI when they fit the product.

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
- apply the visual rules from `0-estetica-inicial.md` in CSS and layout.

---

# Expected HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stage 4 — Structured Functional Specification</title>
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
      <!-- Stage 4 header following the official aesthetic -->
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

    <section id="scope">
      <!-- functional specification scope -->
    </section>

    <section id="domains">
      <!-- functional domains -->
    </section>

    <section id="modules">
      <!-- modules by domain -->
    </section>

    <section id="features">
      <!-- features by module -->
    </section>

    <section id="screens">
      <!-- screens by feature -->
    </section>

    <section id="actions-events">
      <!-- actions and events by screen -->
    </section>

    <section id="rules">
      <!-- initial business rules -->
    </section>

    <section id="permissions">
      <!-- profiles and permission matrix -->
    </section>

    <section id="settings">
      <!-- settings by scope -->
    </section>

    <section id="data">
      <!-- high-level data -->
    </section>

    <section id="integrations">
      <!-- candidate integrations -->
    </section>

    <section id="automations-ai">
      <!-- automations and AI -->
    </section>

    <section id="reports-dashboards">
      <!-- reports and dashboards -->
    </section>

    <section id="states-messages">
      <!-- states, messages, and feedback -->
    </section>

    <section id="acceptance">
      <!-- initial acceptance criteria -->
    </section>

    <section id="prioritization">
      <!-- functional prioritization -->
    </section>

    <section id="dependencies">
      <!-- functional dependencies -->
    </section>

    <section id="functional-risks">
      <!-- functional risks -->
    </section>

    <section id="ux-ui-guidelines">
      <!-- UX/UI guidelines derived from 0-estetica-inicial.md -->
    </section>

    <section id="gaps">
      <!-- gaps and pending items -->
    </section>

    <section id="stage5-recommendations">
      <!-- recommendations for Stage 5 -->
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
- useful for guiding UX;
- useful for guiding data modeling;
- useful for guiding functional architecture;
- useful for guiding backlog;
- useful for guiding QA;
- clear about uncertainties;
- clear about hypotheses;
- clear about risks;
- clear about remaining gaps;
- visually consistent with `0-estetica-inicial.md`.

---

# Important Rules

1. Do not ignore Stage 1.
2. Do not ignore Stage 0, when provided.
3. Do not ignore Stage 2.
4. Do not ignore Stage 3.
5. Do not ignore the `0-estetica-inicial.md` file.
6. Do not create a parallel aesthetic.
7. Do not invent sources, data, or validations.
8. Do not use fictitious links.
9. Do not depend on external libraries in the HTML.
10. Do not deliver Markdown only.
11. Do not generate separate files.
12. Generate only one final HTML, inspect it for errors or failures, and fix them.
13. Save the file as `4.html`.
14. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When receiving the Stage 4 input, the assistant must:

1. Read the previous-stage documents.
2. Read `0-estetica-inicial.md`.
3. Extract the complete product context.
4. Consolidate domains, modules, features, screens, actions, events, rules, permissions, settings, data, integrations, automations, reports, states, and acceptance criteria.
5. Apply all visual decisions from the official aesthetic file.
6. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
7. Save the file using:

```txt
4.html
```

8. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
