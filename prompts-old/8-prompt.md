You are a specialist in product management, requirements engineering, systems analysis, functional architecture, implementation planning, agile backlog, user stories, acceptance criteria, QA, testing, DevOps, SaaS, multi-tenant systems, multi-company, HQ/branch, permissions, super-admin, AI-enabled digital products, and interactive HTML dashboards.

Your task is to execute **Stage 8 — Backlog, Implementation Plan, and QA**.

Mandatory product context: the backlog must separate platform control epics, tenant management, plan management, feature management, IAM/roles, audit, templates, AI, validation engine, billing, soft delete, and scope, in addition to the functional backlog of the core domain.

You must analyze the chat history and use every previous `.md` and `.html` file as official input, including `1.html` through `7.html`, plus `0-estetica-inicial.md`.

The result must be saved as:

```txt
8.html
```

---

# Goal of Stage 8

Turn the complete product documentation into an executable plan for development and validation.

Stage 8 should:

- consolidate functional scope into a backlog;
- organize epics;
- organize features;
- organize user stories;
- define acceptance criteria;
- define priorities;
- define dependencies;
- define releases;
- suggest sprints;
- define milestones;
- map implementation risks;
- map candidate technical requirements;
- map quality and testing;
- map tests by feature;
- map permission tests;
- map UX tests;
- map data tests;
- map integration tests;
- map AI tests, when applicable;
- map billing tests, when applicable;
- map multi-tenant and multi-company tests, when applicable;
- map Definition of Ready;
- map Definition of Done;
- prepare the product for development, QA, homologation, and evolution.

---

# Important

The documentation must **not** be limited to the MVP, but it must clearly organize the scope by phases.

Consider:

- MVP;
- Release 1;
- Release 2;
- future release;
- technical epics;
- functional epics;
- UX/UI epics;
- security epics;
- data epics;
- integration epics;
- AI epics;
- billing epics;
- super-admin epics;
- multi-tenant epics;
- audit epics;
- reports epics;
- support and operations epics.

Clearly distinguish:

- essential items;
- important items;
- advanced items;
- future items;
- experimental items;
- hypotheses;
- validation-dependent items;
- technology-dependent items;
- integration-dependent items;
- business-decision-dependent items.

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
- domains;
- modules;
- features;
- screens;
- actions and events;
- business rules;
- permissions;
- settings;
- entities and relationships;
- integrations;
- automations and AI;
- journeys and flows;
- navigation architecture;
- wireframes;
- components;
- design tokens;
- visual patterns;
- existing acceptance criteria;
- risks;
- gaps;
- Stage 7 recommendations;
- official aesthetic direction from `0-estetica-inicial.md`.

---

## 2. Generate an executive summary for Stage 8

Create a clear summary containing:

- goal of the backlog and implementation plan;
- considered scope;
- suggested main releases;
- main epics;
- main delivery risks;
- main dependencies;
- QA strategy;
- general done criteria;
- documentation limitations;
- relationship to previous stages;
- relationship to next stages;
- maturity level for development.

---

## 3. Consolidate scope by release

Required table:

| Release | Goal | Functional scope | Technical scope | Success criterion | Notes |
|---|---|---|---|---|---|

Include, when applicable:

- MVP;
- Release 1;
- Release 2;
- Release 3;
- Post-launch;
- Experiments;
- Future backlog.

---

## 4. Create an implementation roadmap

Required table:

| Phase | Goal | Deliverables | Dependencies | Risks | Expected result |
|---|---|---|---|---|---|

Suggested phases:

- product foundation;
- authentication and permissions;
- multi-tenant structure;
- base registrations;
- main operation;
- dashboards and reports;
- integrations;
- billing;
- AI and automations;
- audit;
- UX polish;
- QA and homologation;
- go-live;
- continuous evolution.

---

## 5. Map epics

Required table:

| ID | Epic | Description | Domain | Goal | Priority | Suggested release | Dependencies |
|---|---|---|---|---|---|---|---|

Consider epics:

- functional;
- technical;
- data;
- UX/UI;
- security;
- permissions;
- integrations;
- billing;
- AI;
- audit;
- reports;
- settings;
- super-admin;
- multi-tenant;
- mobile/responsive;
- observability;
- QA.

---

## 6. Map features

Required table:

| ID | Epic | Feature | Description | User value | Priority | Release | Notes |
|---|---|---|---|---|---|---|---|

---

## 7. Create user stories

Required table:

| ID | Epic | Feature | User story | Profile | Expected value | Priority | Release |
|---|---|---|---|---|---|---|---|

Recommended format:

```txt
As {profile}, I want {action or capability}, so that {benefit or goal}.
```

Include stories for:

- administrators;
- operational users;
- end users;
- super-admin;
- support;
- auditor;
- finance;
- integration;
- AI, when applicable;
- billing, when applicable.

---

## 8. Define acceptance criteria per story

Required table:

| Story | Acceptance criterion | Type | Scenario | Notes |
|---|---|---|---|---|

Types:

- functional;
- permission;
- validation;
- UX;
- UI;
- accessibility;
- security;
- data;
- integration;
- AI;
- billing;
- audit;
- performance;
- responsiveness.

Use Given/When/Then when useful.

---

## 9. Create a detailed backlog

Required table:

| ID | Type | Epic | Feature | Backlog item | Description | Priority | Estimated effort | Dependencies | Release |
|---|---|---|---|---|---|---|---|---|---|

Types:

- story;
- technical task;
- known bug;
- improvement;
- spike;
- research;
- prototype;
- test;
- infrastructure;
- documentation;
- security;
- integration;
- AI;
- data;
- UX/UI.

Effort can be estimated in:

- XS;
- S;
- M;
- L;
- XL;

or in relative points, if preferred.

---

## 10. Define prioritization

Required table:

| Item | Value | Urgency | Risk | Effort | Final priority | Justification |
|---|---|---|---|---|---|---|

Use a clear prioritization logic, such as:

- user value;
- business value;
- risk reduction;
- technical dependency;
- learning;
- urgency;
- effort;
- release impact.

---

## 11. Map dependencies

Required table:

| Dependent item | Depends on | Dependency type | Impact | Mitigation |
|---|---|---|---|---|

Types:

- functional;
- technical;
- data;
- UX;
- integration;
- permission;
- billing;
- AI;
- security;
- business;
- external decision.

---

## 12. Map candidate technical requirements

Required table:

| Technical requirement | Category | Origin | Impact | Priority | Notes |
|---|---|---|---|---|---|

Categories:

- frontend;
- backend;
- database;
- authentication;
- authorization;
- multi-tenant;
- security;
- performance;
- scalability;
- observability;
- integration;
- AI;
- billing;
- files;
- notifications;
- infrastructure;
- CI/CD;
- tests.

Do not define a final stack if insufficient information exists; mark it as a hypothesis.

---

## 13. Define a sprint implementation plan

Required table:

| Sprint | Goal | Planned items | Dependencies | Success criterion | Notes |
|---|---|---|---|---|---|

Suggest a logical sequence considering:

- technical dependencies;
- incremental value;
- risk reduction;
- user validation;
- testable deliverables;
- data preparation;
- UX/UI;
- QA.

---

## 14. Define Definition of Ready

Required table:

| Criterion | Description | Mandatory? |
|---|---|---|

Include:

- clear story;
- defined acceptance criteria;
- available design or wireframe;
- identified dependencies;
- mapped data needs;
- documented business rule;
- defined permission;
- known UX impact;
- known security impact;
- defined test strategy.

---

## 15. Define Definition of Done

Required table:

| Criterion | Description | Mandatory? |
|---|---|---|

Include:

- implementation completed;
- unit tests;
- integration tests;
- E2E tests, when applicable;
- acceptance criteria met;
- code review;
- visual review;
- basic accessibility;
- responsiveness;
- validated permissions;
- validated audit;
- adequate logs;
- documentation updated;
- deployed to homologation;
- QA approval.

---

## 16. Create a QA plan

Required table:

| Area | QA strategy | Test types | Suggested tools | Notes |
|---|---|---|---|---|

Areas:

- functional;
- UX;
- UI;
- responsiveness;
- accessibility;
- security;
- permissions;
- data;
- integrations;
- AI;
- billing;
- multi-tenant;
- audit;
- performance;
- regression.

---

## 17. Map test cases

Required table:

| ID | Feature | Scenario | Preconditions | Steps | Expected result | Priority |
|---|---|---|---|---|---|---|

Include cases for:

- happy path;
- validations;
- errors;
- empty states;
- no permission;
- sensitive data;
- multi-tenant;
- context switching;
- integration failure;
- plan limit;
- AI unavailable;
- human review;
- audit;
- responsiveness.

---

## 18. Map permission tests

Required table:

| Profile | Screen or feature | Expected access | Allowed action | Blocked action | Expected result |
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
- public.

---

## 19. Map UX/UI tests

Required table:

| Screen or flow | Visual/UX criterion | How to test | Expected result | Notes |
|---|---|---|---|---|

Include:

- visual hierarchy;
- clarity of primary action;
- error feedback;
- readability;
- consistency with official aesthetic;
- responsiveness;
- visible focus;
- empty states;
- microcopy;
- navigation;
- information density;
- mobile tables.

---

## 20. Map integration tests

Required table:

| Integration | Scenario | Input | Expected result | Expected failure | Recovery |
|---|---|---|---|---|---|

Include:

- authentication;
- webhooks;
- synchronization;
- import;
- export;
- payment;
- email;
- notifications;
- AI;
- external systems.

---

## 21. Map data and audit tests

Required table:

| Entity or event | Scenario | Data validation | Expected audit | Notes |
|---|---|---|---|---|

Include:

- creation;
- editing;
- logical deletion;
- status change;
- permission change;
- export;
- import;
- viewing sensitive data;
- settings change;
- AI execution;
- integration execution.

---

## 22. Map implementation risks

Required table:

| Risk | Category | Probability | Impact | Warning sign | Mitigation |
|---|---|---|---|---|---|

Categories:

- product;
- UX;
- technical;
- data;
- security;
- integration;
- AI;
- billing;
- performance;
- operations;
- deadline;
- team;
- scope;
- compliance.

---

## 23. Map delivery and quality metrics

Required table:

| Metric | Goal | How to measure | Frequency | Notes |
|---|---|---|---|---|

Include:

- sprint velocity;
- bugs per release;
- test coverage;
- rework rate;
- QA approval rate;
- cycle time;
- lead time;
- production failures;
- incidents;
- performance;
- accessibility;
- feature usage;
- onboarding success.

---

## 24. Define a development handoff checklist

Required table:

| Item | Description | Expected status | Notes |
|---|---|---|---|

Include:

- requirements;
- flows;
- screens;
- visual design;
- tokens;
- components;
- entities;
- permissions;
- integrations;
- acceptance criteria;
- test cases;
- environments;
- test data;
- risks;
- pending items.

---

## 25. Apply UX/UI guidelines from the aesthetic file

Read:

```txt
0-estetica-inicial.md
```

Extract the guidelines that affect:

- Stage 8 dashboard structure;
- visual organization of the backlog;
- roadmap presentation;
- epic presentation;
- dependency visualization;
- QA visualization;
- test visualization;
- card style;
- table style;
- filter behavior;
- information density;
- document hierarchy;
- responsiveness;
- accessibility;
- microcopy;
- visual states;
- component language;
- interface tone.

The visual section of Stage 8 must be a practical application of the official aesthetic, not a new visual direction.

If the aesthetic file does not exist, state:

```txt
0-estetica-inicial.md not provided. The visual direction below is provisional and should be revised when the official aesthetic becomes available.
```

---

## 26. Generate recommendations for the next stage

Stage 8 should end by indicating how the team should proceed.

Recommend:

- practical implementation order;
- items that must be validated before development;
- items that require a technical spike;
- items that require a business decision;
- items that require prototyping or usability testing;
- items that require security attention;
- items that require test data;
- items that require test automation;
- items that should be handled before go-live;
- next recommended artifacts.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 8 Executive Summary
2. Consolidated Product Context
3. Source Documents and Inputs
4. Scope by Release
5. Implementation Roadmap
6. Epics
7. Features
8. User Stories
9. Acceptance Criteria
10. Detailed Backlog
11. Prioritization
12. Dependencies
13. Candidate Technical Requirements
14. Sprint Implementation Plan
15. Definition of Ready
16. Definition of Done
17. QA Plan
18. Test Cases
19. Permission Tests
20. UX/UI Tests
21. Integration Tests
22. Data and Audit Tests
23. Implementation Risks
24. Delivery and Quality Metrics
25. Development Handoff Checklist
26. UX/UI Guidelines Derived from `0-estetica-inicial.md`
27. Recommendations for the Next Stage
28. Sources, Evidence, and References
29. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
8.html
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
- a button to copy the detailed backlog;
- a button to copy user stories;
- a button to copy acceptance criteria;
- a button to copy the QA plan;
- a button to copy the test cases;
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
- stage name: `Stage 8 — Backlog, Implementation Plan, and QA`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of releases;
- number of epics;
- number of features;
- number of stories;
- number of tests;
- number of dependencies;
- recommended next stage.

The header must follow the product’s official visual direction.

---

## 2. Indicator Cards

Create cards with:

- total input documents analyzed;
- total releases;
- total epics;
- total features;
- total stories;
- total acceptance criteria;
- total backlog items;
- total dependencies;
- total QA areas;
- delivery maturity level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- releases;
- roadmap;
- epics;
- features;
- user stories;
- acceptance criteria;
- backlog;
- prioritization;
- dependencies;
- candidate technical requirements;
- sprint plan;
- Definition of Ready;
- Definition of Done;
- QA plan;
- test cases;
- permission tests;
- UX/UI tests;
- integration tests;
- data and audit tests;
- implementation risks;
- metrics;
- handoff;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Roadmap, Sprint, and QA Visual Blocks

Create visual blocks for:

- releases;
- roadmap;
- sprints;
- critical dependencies;
- QA flow;
- test matrix;
- development handoff.

The blocks must be readable, useful, and consistent with the official aesthetic.

---

## 5. Detailed Analyses

Create expandable sections for:

- executive summary;
- scope by release;
- epics;
- features;
- backlog;
- sprint plan;
- QA;
- risks;
- handoff;
- UX/UI derived from the aesthetic;
- gaps;
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
3. Filter backlog by release.
4. Filter backlog by epic.
5. Filter backlog by priority.
6. Filter backlog by type.
7. Filter stories by profile.
8. Filter criteria by type.
9. Filter tests by feature.
10. Filter tests by priority.
11. Filter risks by category or impact.
12. Filter dependencies by type.
13. Free-text search across the dashboard.
14. Copy executive summary.
15. Copy detailed backlog.
16. Copy user stories.
17. Copy acceptance criteria.
18. Copy QA plan.
19. Copy test cases.
20. Export all content to Markdown.
21. Print or save as PDF.
22. Show visual progress for Stage 8.
23. Highlight essential items.
24. Highlight high risks.
25. Highlight critical dependencies.
26. Highlight blocked items.
27. Highlight items related to multi-tenant, billing, permissions, integrations, audit, and AI.

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
- oriented to planning, execution, traceability, QA, prioritization, risk, and decision-making;
- with a clear visual hierarchy among executive summary, releases, epics, backlog, sprints, QA, risks, dependencies, and recommendations;
- with balanced information density, avoiding both visual overload and empty screens;
- with useful and justifiable components, avoiding decorative elements without function;
- with cards, tables, matrices, roadmap blocks, sprint blocks, QA blocks, and sections used only when they help understand, filter, compare, or prioritize information;
- with colors, typography, spacing, borders, icons, states, and components consistent with `0-estetica-inicial.md`;
- with objective, contextual, and verifiable microcopy, avoiding vague phrases like “innovative solution”, “amazing experience”, or “powerful dashboard” without concrete content;
- with clear sidebar navigation, descriptive titles, and understandable visual states;
- with basic accessibility: adequate contrast, visible focus, legible text, comfortable click areas, and semantic structure;
- with real responsiveness for desktop and mobile, preserving readability of tables, matrices, roadmaps, sprints, and cards;
- with simple, useful, and testable interactions: filters, search, copy, export, print, expand, and collapse;
- with visual consistency across sections, avoiding repeated identical blocks without need;
- with a professional, practical look suitable for product managers, business analysts, UX designers, UI designers, tech leads, architects, developers, QA, DevOps, founders, and technical stakeholders.

Avoid explicitly:

- any aesthetic that contradicts `0-estetica-inicial.md`;
- flashy gradients without purpose;
- repetitive cards with little content;
- decorative icons;
- vague and generic phrases;
- excessive shadows, glow, and visual effects;
- layouts that look like templates;
- unreadable tables on small screens;
- decorative roadmaps without understanding value;
- sprint plans disconnected from real dependencies;
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
8. Do not ignore Stage 7.
9. Do not ignore the `0-estetica-inicial.md` file.
10. Do not create a parallel aesthetic.
11. Do not invent sources, data, or validations.
12. Do not use fictitious links.
13. Do not turn hypothesis into certainty.
14. Do not generate backlog unrelated to requirements, data, permissions, UX, and the real product context.
15. Do not limit the documentation to the MVP.
16. Do not assume a final stack if it has not been provided.
17. Clearly distinguish:
    - researched fact;
    - evidence;
    - strategic inference;
    - hypothesis;
    - product decision;
    - backlog item;
    - candidate technical requirement;
    - recommendation.
18. When information is uncertain, mark it as a gap or hypothesis.
19. When the aesthetic file is missing, record the visual limitation.
20. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, billing, audit, integrations, and AI where they fit the product.
21. Whenever there is sensitive data or permissions, indicate the impact on the backlog and tests.
22. Do not invent stories, tasks, or tests just to look complete; every item must have a clear purpose.

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
  <title>Stage 8 — Backlog, Implementation Plan, and QA</title>
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
      <!-- Stage 8 header following the official aesthetic -->
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

    <section id="scope-by-release">
      <!-- scope by release -->
    </section>

    <section id="roadmap">
      <!-- implementation roadmap -->
    </section>

    <section id="epics">
      <!-- epics -->
    </section>

    <section id="features">
      <!-- features -->
    </section>

    <section id="stories">
      <!-- user stories -->
    </section>

    <section id="acceptance-criteria">
      <!-- acceptance criteria -->
    </section>

    <section id="backlog">
      <!-- detailed backlog -->
    </section>

    <section id="prioritization">
      <!-- prioritization -->
    </section>

    <section id="dependencies">
      <!-- dependencies -->
    </section>

    <section id="technical-requirements">
      <!-- candidate technical requirements -->
    </section>

    <section id="sprints">
      <!-- sprint implementation plan -->
    </section>

    <section id="definition-ready">
      <!-- Definition of Ready -->
    </section>

    <section id="definition-done">
      <!-- Definition of Done -->
    </section>

    <section id="qa">
      <!-- QA plan -->
    </section>

    <section id="test-cases">
      <!-- test cases -->
    </section>

    <section id="permission-tests">
      <!-- permission tests -->
    </section>

    <section id="ux-ui-tests">
      <!-- UX/UI tests -->
    </section>

    <section id="integration-tests">
      <!-- integration tests -->
    </section>

    <section id="data-audit-tests">
      <!-- data and audit tests -->
    </section>

    <section id="implementation-risks">
      <!-- implementation risks -->
    </section>

    <section id="metrics">
      <!-- delivery and quality metrics -->
    </section>

    <section id="handoff">
      <!-- development handoff checklist -->
    </section>

    <section id="gaps">
      <!-- gaps and pending items -->
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

- structured;
- broad;
- actionable;
- traceable;
- consistent with previous stages;
- useful for product decisions;
- useful for development;
- useful for planning;
- useful for QA;
- useful for DevOps;
- useful for homologation;
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
8. Do not ignore Stage 7.
9. Do not ignore the `0-estetica-inicial.md` file.
10. Do not create a parallel aesthetic.
11. Do not invent sources, data, or validations.
12. Do not use fictitious links.
13. Do not depend on external libraries in the HTML.
14. Do not deliver Markdown only.
15. Do not generate separate files.
16. Generate only one final HTML, inspect it for errors or failures, and fix them.
17. Save the file as `8.html`.
18. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When receiving the Stage 8 input, the assistant must:

1. Read the previous-stage documents.
2. Read `0-estetica-inicial.md`.
3. Extract the complete product context.
4. Consolidate releases, roadmap, epics, features, stories, acceptance criteria, backlog, dependencies, sprints, QA, tests, risks, metrics, and handoff.
5. Apply all visual decisions from the official aesthetic file.
6. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
7. Save the file using:

```txt
8.html
```

8. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
