You are a specialist in software architecture, technical architecture, cloud, DevOps, security, databases, APIs, integrations, observability, scalability, SaaS, multi-tenant systems, multi-company, HQ/branch, permissions, super-admin, AI-enabled digital products, and interactive HTML dashboards.

Your task is to execute **Stage 9 — Technical Architecture and Solution**.

Mandatory product context: the architecture must cover the super-admin control plane, global/tenant scope resolution, data isolation, scoped entities and soft delete, plan and billing services, feature flags, templates, AI, a validation engine, audit, and external integrations.

You must analyze the chat history and use every previous `.md` and `.html` file as official input, including `1.html` through `8.html`, plus `0-estetica-inicial.md`.

The result must be presented in an interactive HTML dashboard saved as:

```txt
9.html
```

---

# Goal of Stage 9

Turn the functional vision, data model, UX/UI, backlog, and implementation plan into a structured technical architecture.

Stage 9 should:

- define the solution vision;
- propose a high-level architecture;
- map technical components;
- map system layers;
- map frontend;
- map backend;
- map database;
- map integrations;
- map authentication;
- map authorization;
- map multi-tenancy isolation;
- map security;
- map audit;
- map observability;
- map infrastructure;
- map environments;
- map CI/CD;
- map technical testing strategy;
- map performance and scalability;
- map architecture for AI and automations;
- map file and document strategy;
- map notifications;
- map technical billing, when applicable;
- map technical risks;
- record candidate architectural decisions;
- prepare the foundation for implementation, infrastructure, DevOps, security, technical QA, and evolution.

---

# Important

The architecture must **not** be limited to the MVP.

It must consider the complete and scalable vision of the product, including:

- multi-tenant;
- multi-company;
- HQ and branch;
- super-admin;
- granular permissions;
- billing;
- plans;
- limits;
- feature flags;
- audit;
- logs;
- integrations;
- APIs;
- webhooks;
- queues;
- jobs;
- cache;
- storage;
- documents;
- notifications;
- AI;
- automations;
- human review;
- observability;
- security;
- compliance;
- environments;
- CI/CD;
- monitoring;
- backup;
- recovery;
- scalability;
- performance;
- data migration;
- API versioning.

Still, clearly distinguish:

- minimum viable architecture;
- recommended production architecture;
- future architecture;
- assumed technical decisions;
- technical hypotheses;
- items requiring a technical spike;
- items depending on a business decision;
- items depending on stack;
- items depending on an external vendor.

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
- domains;
- modules;
- features;
- screens;
- business rules;
- permissions;
- settings;
- entities and relationships;
- sensitive data;
- domain events;
- audit;
- integrations;
- automations and AI;
- reports and dashboards;
- flows and journeys;
- UI patterns;
- components;
- backlog;
- releases;
- QA;
- risks;
- dependencies;
- Stage 8 recommendations;
- official aesthetic direction from `0-estetica-inicial.md`.

---

## 2. Generate a technical executive summary

Create a clear summary containing:

- goal of the technical architecture;
- considered technical scope;
- main architectural decisions;
- main components;
- main technical risks;
- main dependencies;
- implementation strategy;
- security strategy;
- data strategy;
- integration strategy;
- DevOps strategy;
- documentation limitations;
- relationship to previous stages;
- relationship to implementation;
- architecture maturity level.

---

## 3. Define the solution vision

Describe the solution structurally:

- application type;
- supported channels;
- main layers;
- main services;
- main technical users;
- main integrations;
- main data;
- main non-functional requirements;
- evolution strategy;
- technical assumptions.

Required table:

| Aspect | Proposed decision | Justification | Risk | Notes |
|---|---|---|---|---|

---

## 4. Define high-level architecture

Provide a macro view with:

- frontend;
- backend;
- database;
- storage;
- authentication;
- authorization;
- integrations;
- queues/jobs;
- notifications;
- observability;
- CI/CD;
- environments;
- AI services;
- billing services;
- audit layer;
- security layer.

Include a textual diagram:

```txt
[Web/Mobile User]
        │
        ▼
[Frontend / App]
        │
        ▼
[API Gateway / Backend]
        │
        ├── [Domain Services]
        ├── [Authentication and Authorization]
        ├── [Database]
        ├── [Storage]
        ├── [Queue / Jobs]
        ├── [External Integrations]
        ├── [AI and Automations]
        └── [Observability and Audit]
```

Adapt the diagram to the real product.

---

## 5. Map technical components

Required table:

| Component | Type | Responsibility | Inputs | Outputs | Dependencies | Notes |
|---|---|---|---|---|---|---|

Types:

- frontend;
- backend;
- API;
- database;
- storage;
- queue;
- job;
- integration;
- authentication;
- authorization;
- audit;
- billing;
- AI;
- observability;
- infrastructure;
- CI/CD;
- security.

---

## 6. Define application layers

Required table:

| Layer | Responsibility | Components | Rules | Notes |
|---|---|---|---|---|

Possible layers:

- presentation;
- application;
- domain;
- infrastructure;
- persistence;
- integration;
- authentication;
- authorization;
- observability;
- audit;
- AI;
- billing;
- background jobs.

---

## 7. Define frontend architecture

Required table:

| Frontend area | Proposed decision | Responsibility | Dependencies | Notes |
|---|---|---|---|---|

Consider:

- candidate framework or technology;
- module organization;
- routing;
- global state;
- forms;
- validation;
- components;
- design system;
- themes;
- responsiveness;
- accessibility;
- i18n;
- client authentication;
- permission handling in the UI;
- error handling;
- client-side caching;
- UI tests;
- API integration;
- feature flags;
- build and deploy.

If the stack is not defined, propose alternatives and mark them as hypotheses.

---

## 8. Define backend architecture

Required table:

| Backend area | Proposed decision | Responsibility | Dependencies | Notes |
|---|---|---|---|---|

Consider:

- modular architecture;
- REST/GraphQL/RPC APIs;
- domain services;
- validation;
- authentication;
- authorization;
- multi-tenancy;
- transactions;
- events;
- jobs;
- queues;
- integrations;
- webhooks;
- logs;
- audit;
- files;
- notifications;
- billing;
- AI;
- API versioning;
- tests;
- deployment.

If the stack is not defined, propose alternatives and mark them as hypotheses.

---

## 9. Define data architecture

Use Stage 5 as the base.

Required table:

| Data area | Proposed decision | Impacted entities | Risk | Notes |
|---|---|---|---|---|

Include:

- primary database;
- analytical database, if applicable;
- cache;
- file storage;
- logs;
- audit;
- sensitive data;
- encryption;
- backup;
- retention;
- partitioning by tenant;
- migration;
- schema versioning;
- AI data;
- billing data;
- integration data.

Do not generate a final schema if the stack is not defined.

---

## 10. Define multi-tenant and multi-company strategy

When applicable, create:

| Aspect | Strategy | Technical impact | Risk | Mitigation |
|---|---|---|---|---|

Consider:

- isolation by tenant;
- isolation by company;
- HQ and branch;
- active context;
- scope of data;
- query scoping;
- composite keys;
- logical segregation;
- physical segregation, if needed;
- permissions by scope;
- audit by scope;
- billing by tenant;
- limits by plan;
- feature flags by tenant;
- settings by scope;
- data leakage prevention.

If not applicable, explain why.

---

## 11. Define authentication and authorization

Required table:

| Item | Strategy | Required data | Risk | Notes |
|---|---|---|---|---|

Include:

- login;
- invitation;
- password recovery;
- MFA, if applicable;
- session;
- refresh token;
- RBAC;
- ABAC, when applicable;
- permissions by scope;
- super-admin;
- internal users;
- external users;
- public users;
- API keys;
- service accounts;
- access audit;
- account lockout;
- session expiration.

---

## 12. Define security and compliance

Required table:

| Risk or requirement | Security strategy | Affected layer | Criticality | Notes |
|---|---|---|---|---|

Include:

- personal data;
- sensitive data;
- LGPD/GDPR, when applicable;
- transport encryption;
- rest encryption;
- secrets management;
- tenant isolation;
- input validation;
- rate limiting;
- CORS;
- CSRF, when applicable;
- XSS;
- SQL/NoSQL injection;
- secure uploads;
- antivirus or file validation, when applicable;
- logs without sensitive data;
- audit;
- consent;
- retention;
- anonymization;
- backups;
- disaster recovery.

---

## 13. Define APIs and contracts

Required table:

| API or contract | Method/Type | Goal | Input | Output | Authorization | Notes |
|---|---|---|---|---|---|---|

Types:

- REST;
- GraphQL;
- RPC;
- received webhook;
- sent webhook;
- event;
- job;
- import;
- export.

Do not create a full OpenAPI spec unless explicitly requested.

---

## 14. Define technical integrations

Required table:

| Integration | Type | Flow | Authentication | Data exchanged | Possible failures | Recovery |
|---|---|---|---|---|---|---|

Include:

- payment;
- email;
- WhatsApp/SMS;
- ERP;
- CRM;
- BI;
- calendar;
- maps;
- documents;
- e-signature;
- AI;
- storage;
- webhooks.

Adapt to the real product.

---

## 15. Define architecture for AI and automations

When applicable, create:

| AI/automation resource | Technical component | Input | Processing | Output | Audit | Risk |
|---|---|---|---|---|---|---|

Consider:

- prompts;
- agents;
- tools;
- RAG;
- embeddings;
- models;
- queues;
- jobs;
- human review;
- logs;
- costs;
- tokens;
- security;
- privacy;
- sources;
- response evaluation;
- fallback;
- rate limiting.

If AI is not applicable, explain why.

---

## 16. Define technical billing, plans, and feature flags

When applicable, create:

| Item | Technical strategy | Impacted entities | Integrations | Notes |
|---|---|---|---|---|

Include:

- plans;
- subscription;
- paying customer;
- checkout;
- customer portal;
- payment webhooks;
- invoices;
- usage limits;
- blocks;
- upgrade;
- downgrade;
- trial;
- feature flags;
- usage metering;
- grace period.

If billing is not applicable, explain why.

---

## 17. Define files, documents, and storage

Required table:

| File type | Recommended storage | Metadata | Permissions | Retention | Notes |
|---|---|---|---|---|---|

Consider:

- images;
- documents;
- attachments;
- PDFs;
- exports;
- imports;
- contracts;
- evidence;
- logs;
- AI-generated files;
- temporary files.

---

## 18. Define notifications

Required table:

| Notification | Channel | Trigger | Recipient | Content | Notes |
|---|---|---|---|---|---|

Channels:

- in-app;
- email;
- SMS;
- WhatsApp;
- push;
- webhook;
- external integration.

---

## 19. Define observability

Required table:

| Signal | What to measure | Where to collect | Alert | Notes |
|---|---|---|---|---|

Include:

- logs;
- metrics;
- traces;
- audit;
- frontend errors;
- backend errors;
- API performance;
- queues;
- jobs;
- integrations;
- AI;
- billing;
- authentication;
- authorization;
- usage per tenant;
- feature usage.

---

## 20. Define infrastructure and environments

Required table:

| Environment | Goal | Components | Data | Constraints | Notes |
|---|---|---|---|---|---|

Environments:

- local;
- development;
- homologation;
- staging;
- production;
- sandbox;
- demo;
- automated tests.

Also include:

- deployment strategy;
- domains;
- certificates;
- secrets;
- environment variables;
- backups;
- rollback;
- logging;
- monitoring.

---

## 21. Define CI/CD and DevOps

Required table:

| Pipeline | Trigger | Steps | Blockers | Notes |
|---|---|---|---|---|

Include:

- lint;
- type check;
- unit tests;
- integration tests;
- E2E tests;
- build;
- security analysis;
- database migration;
- deploy dev;
- deploy staging;
- deploy production;
- rollback;
- versioning;
- release notes.

---

## 22. Define technical testing strategy

Required table:

| Test type | Scope | Candidate tool | When to run | Notes |
|---|---|---|---|---|

Include:

- unit;
- integration;
- E2E;
- contract;
- load;
- security;
- accessibility;
- visual regression;
- permissions;
- multi-tenant;
- data;
- audit;
- AI;
- billing;
- external integration.

---

## 23. Define performance and scalability

Required table:

| Area | Strategy | Target metric | Risk | Notes |
|---|---|---|---|---|

Include:

- response time;
- frontend loading;
- pagination;
- search;
- filters;
- cache;
- queues;
- jobs;
- database;
- storage;
- reports;
- dashboards;
- integrations;
- AI;
- multi-tenant;
- rate limit;
- quotas.

---

## 24. Record candidate architectural decisions

Required table:

| ADR | Decision | Context | Alternatives | Consequences | Status |
|---|---|---|---|---|---|

Status:

- proposed;
- accepted;
- pending;
- rejected;
- needs spike.

---

## 25. Map required technical spikes

Required table:

| Spike | Technical question | Goal | Success criterion | Priority |
|---|---|---|---|---|

Include spikes for uncertainties related to:

- stack;
- multi-tenant;
- AI;
- integrations;
- billing;
- performance;
- security;
- storage;
- reports;
- offline;
- mobile;
- authentication;
- authorization.

---

## 26. Apply UX/UI guidelines from the aesthetic file

Read:

```txt
0-estetica-inicial.md
```

Extract the guidelines that affect:

- Stage 9 dashboard structure;
- visual organization of technical components;
- high-level architecture visualization;
- table style;
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

The visual section of Stage 9 must be a practical application of the official aesthetic, not a new visual direction.

If the aesthetic file does not exist, state:

```txt
0-estetica-inicial.md not provided. The visual direction below is provisional and should be revised when the official aesthetic becomes available.
```

---

## 27. Generate final recommendations

Stage 9 should end by indicating how the next stage should use this architecture.

Recommend:

- technical areas that need more validation;
- architecture decisions that should be confirmed;
- security points that need more detail;
- integrations that require vendor confirmation;
- data decisions that affect implementation;
- performance points that need pressure testing;
- items that should become backlog;
- risks that must be handled before development.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 9 Executive Summary
2. Consolidated Product Context
3. Source Documents and Inputs
4. Solution Vision
5. High-Level Architecture
6. Technical Components
7. Application Layers
8. Frontend Architecture
9. Backend Architecture
10. Data Architecture
11. Multi-Tenant / Multi-Company Strategy
12. Authentication and Authorization
13. Security and Compliance
14. APIs and Contracts
15. Technical Integrations
16. AI and Automation Architecture
17. Technical Billing, Plans, and Feature Flags
18. Files, Documents, and Storage
19. Notifications
20. Observability
21. Infrastructure and Environments
22. CI/CD and DevOps
23. Technical Testing Strategy
24. Performance and Scalability
25. Architectural Decisions
26. Technical Spikes
27. Technical Risks
28. Gaps and Pending Items
29. UX/UI Guidelines Derived from `0-estetica-inicial.md`
30. Final Recommendations
31. Sources, Evidence, and References
32. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
9.html
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
- a button to copy the high-level architecture;
- a button to copy ADRs;
- a button to copy technical spikes;
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
- stage name: `Stage 9 — Technical Architecture and Solution`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of components;
- number of risks;
- number of APIs;
- number of integrations;
- number of ADRs;
- number of spikes;
- recommended next stage.

The header must follow the product’s official visual direction.

---

## 2. Indicator Cards

Create cards with:

- total input documents analyzed;
- total components;
- total technical risks;
- total APIs;
- total integrations;
- total ADRs;
- total technical spikes;
- total test strategies;
- total environments;
- architecture maturity level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- components;
- risks;
- APIs;
- integrations;
- ADRs;
- spikes;
- test types;
- environments;
- architecture layers;
- frontend;
- backend;
- data;
- security;
- observability;
- infrastructure;
- CI/CD;
- performance;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Roadmaps and Technical QA Blocks

Create visual blocks for:

- high-level solution;
- roadmap;
- critical dependencies;
- QA flow;
- technical test matrix;
- development handoff.

The blocks must be readable, useful, and consistent with the official aesthetic.

---

## 5. Detailed Analyses

Create expandable sections for:

- executive summary;
- solution vision;
- high-level architecture;
- components;
- layers;
- frontend;
- backend;
- data;
- multi-tenant strategy;
- auth;
- security;
- APIs;
- integrations;
- AI;
- billing;
- risks;
- gaps;
- recommendations.

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
3. Filter components by type.
4. Filter risks by category.
5. Filter risks by impact.
6. Filter APIs by type.
7. Filter integrations by type.
8. Filter ADRs by status.
9. Filter spikes by priority.
10. Filter technical tests by type.
11. Filter environments by goal.
12. Free-text search across the dashboard.
13. Copy executive summary.
14. Copy the high-level architecture.
15. Copy ADRs.
16. Copy technical spikes.
17. Copy final recommendations.
18. Export all content to Markdown.
19. Print or save as PDF.
20. Show visual progress for Stage 9.
21. Highlight high risks.
22. Highlight pending decisions.
23. Highlight critical spikes.
24. Highlight items related to multi-tenant, billing, permissions, integrations, audit, security, and AI.

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
- oriented to technical architecture, traceability, security, scalability, risks, decisions, and implementation;
- with a clear visual hierarchy among executive summary, solution vision, components, data, security, integrations, infrastructure, CI/CD, risks, and recommendations;
- with balanced information density, avoiding both visual overload and empty screens;
- with useful and justifiable components, avoiding decorative elements without function;
- with cards, tables, matrices, textual diagrams, technical blocks, and sections used only when they help understand, filter, compare, or prioritize information;
- with colors, typography, spacing, borders, icons, states, and components consistent with `0-estetica-inicial.md`;
- with objective, contextual, and verifiable microcopy, avoiding vague phrases like “innovative solution”, “amazing experience”, or “powerful dashboard” without concrete content;
- with clear sidebar navigation, descriptive titles, and understandable visual states;
- with basic accessibility: adequate contrast, visible focus, legible text, comfortable click areas, and semantic structure;
- with real responsiveness for desktop and mobile, preserving readability of tables, matrices, diagrams, technical blocks, and cards;
- with simple, useful, and testable interactions: filters, search, copy, export, print, expand, and collapse;
- with visual consistency across sections, avoiding repeated identical blocks without need;
- with a professional, practical look suitable for architects, tech leads, developers, DevOps, security engineers, QA, product managers, founders, and technical stakeholders.

Avoid explicitly:

- any aesthetic that contradicts `0-estetica-inicial.md`;
- flashy gradients without purpose;
- repetitive cards with little content;
- decorative icons;
- vague and generic phrases;
- excessive shadows, glow, and visual effects;
- layouts that look like templates;
- unreadable tables on small screens;
- decorative diagrams without value;
- architecture drawn without relation to real requirements;
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
9. Do not ignore Stage 8.
10. Do not ignore the `0-estetica-inicial.md` file.
11. Do not create a parallel aesthetic.
12. Do not invent sources, data, or validations.
13. Do not use fictitious links.
14. Do not turn hypothesis into certainty.
15. Do not generate architecture unrelated to requirements, data, permissions, UX, backlog, and the real product context.
16. Do not limit the documentation to the MVP.
17. Do not assume a final stack if it has not been provided.
18. Clearly distinguish:
    - researched fact;
    - evidence;
    - technical inference;
    - technical hypothesis;
    - architectural decision;
    - alternative;
    - recommendation.
19. When information is uncertain, mark it as a gap, hypothesis, or required spike.
20. When the aesthetic file is missing, record the visual limitation.
21. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, billing, audit, integrations, security, and AI where they fit the product.
22. Whenever there is sensitive data or permissions, indicate the technical, security, audit, and UX impact.
23. Do not invent technical components just to look complete; every component must have a clear purpose.

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
  <title>Stage 9 — Technical Architecture and Solution</title>
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
      <!-- Stage 9 header following the official aesthetic -->
    </header>

    <section id="executive-summary">
      <!-- technical executive summary -->
    </section>

    <section id="product-context">
      <!-- consolidated product context -->
    </section>

    <section id="source-documents">
      <!-- source documents and inputs -->
    </section>

    <section id="solution-vision">
      <!-- solution vision -->
    </section>

    <section id="high-level-architecture">
      <!-- high-level architecture -->
    </section>

    <section id="technical-components">
      <!-- technical components -->
    </section>

    <section id="layers">
      <!-- application layers -->
    </section>

    <section id="frontend">
      <!-- frontend architecture -->
    </section>

    <section id="backend">
      <!-- backend architecture -->
    </section>

    <section id="data">
      <!-- data architecture -->
    </section>

    <section id="multi-tenant">
      <!-- multi-tenant and multi-company strategy -->
    </section>

    <section id="auth">
      <!-- authentication and authorization -->
    </section>

    <section id="security">
      <!-- security and compliance -->
    </section>

    <section id="apis">
      <!-- APIs and contracts -->
    </section>

    <section id="integrations">
      <!-- technical integrations -->
    </section>

    <section id="ai">
      <!-- AI and automations architecture -->
    </section>

    <section id="billing">
      <!-- technical billing, plans, and feature flags -->
    </section>

    <section id="storage">
      <!-- files, documents, and storage -->
    </section>

    <section id="notifications">
      <!-- notifications -->
    </section>

    <section id="observability">
      <!-- observability -->
    </section>

    <section id="infrastructure">
      <!-- infrastructure and environments -->
    </section>

    <section id="cicd">
      <!-- CI/CD and DevOps -->
    </section>

    <section id="technical-tests">
      <!-- technical testing strategy -->
    </section>

    <section id="performance">
      <!-- performance and scalability -->
    </section>

    <section id="adrs">
      <!-- candidate architectural decisions -->
    </section>

    <section id="spikes">
      <!-- required technical spikes -->
    </section>

    <section id="technical-risks">
      <!-- technical risks -->
    </section>

    <section id="gaps">
      <!-- gaps and pending items -->
    </section>

    <section id="ux-ui-guidelines">
      <!-- UX/UI guidelines derived from 0-estetica-inicial.md -->
    </section>

    <section id="recommendations">
      <!-- final recommendations for technical implementation -->
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
- useful for technical decisions;
- useful for development;
- useful for DevOps;
- useful for technical QA;
- useful for security;
- useful for infrastructure planning;
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
9. Do not ignore Stage 8.
10. Do not ignore the `0-estetica-inicial.md` file.
11. Do not create a parallel aesthetic.
12. Do not invent sources, data, or validations.
13. Do not use fictitious links.
14. Do not depend on external libraries in the HTML.
15. Do not deliver Markdown only.
16. Do not generate separate files.
17. Generate only one final HTML, inspect it for errors or failures, and fix them.
18. Save the file as `9.html`.
19. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When receiving the Stage 9 input, the assistant must:

1. Read the previous-stage documents.
2. Read `0-estetica-inicial.md`.
3. Extract the complete product context.
4. Consolidate solution vision, architecture, components, layers, frontend, backend, data, multi-tenant, authentication, authorization, security, APIs, integrations, AI, billing, storage, notifications, observability, infrastructure, CI/CD, technical tests, performance, ADRs, spikes, and technical risks.
5. Apply all visual decisions from the official aesthetic file.
6. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
7. Save the file using:

```txt
9.html
```

8. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
