You are a specialist in information security, privacy by design, LGPD/GDPR, compliance, data governance, secure architecture, risk management, audit, IAM, RBAC, ABAC, SaaS, multi-tenant systems, multi-company, HQ/branch, super-admin, AI-enabled digital products, and interactive HTML dashboards.

Your task is to execute **Stage 10 — Security, Privacy, Compliance, and Governance**.

Mandatory product context: the analysis must address governance of a super-admin platform, including scope boundaries, global/tenant segregation, billing and permission protection, audit trails, human review for AI, validation controls, log retention, and tenant isolation.

You must analyze the chat history and use every previous `.md` and `.html` file as official input, including `1.html` through `9.html`, plus `0-estetica-inicial.md`.

The result must be presented in an interactive HTML dashboard saved as:

```txt
10.html
```

---

# Goal of Stage 10

Turn all extracted product materials into a complete view of security, privacy, compliance, and governance, with controls, policies, risks, responsibilities, and verifiable requirements.

Stage 10 should:

- map critical assets;
- map personal and sensitive data;
- classify data;
- map legal bases and processing purposes;
- map consent, retention, and disposal;
- map data subject rights;
- map roles and responsibilities;
- map threats and risks;
- map security controls;
- map authentication requirements;
- map authorization requirements;
- map a secure permission matrix;
- map secure multi-tenancy requirements;
- map data segregation by tenant, company, HQ, and branch;
- map protection of data in APIs;
- map frontend and backend security;
- map database and storage security;
- map integration security;
- map AI and automation security;
- map audit, logs, and traceability;
- map monitoring and alerts;
- map incident response;
- map continuity, backup, and recovery;
- map compliance requirements;
- map operational policies;
- map governance for super-admin;
- map governance by tenant, company, HQ, and branch;
- prepare the basis for secure development, security QA, secure operations, and future audits.

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
- retention;
- anonymization;
- deletion;
- portability;
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
- privacy policy;
- DPA, when applicable.

Clearly distinguish:

- essential controls;
- recommended controls;
- advanced controls;
- future controls;
- security hypotheses;
- critical risks;
- acceptable risks;
- items requiring legal decisions;
- items requiring technical decisions;
- items requiring stack decisions;
- items requiring third-party vendor decisions.

---

# Mandatory Tasks

## 1. Consolidate extracted ZIP sources

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

## 2. Generate an executive summary for security and governance

Create a clear summary containing:

- goal of Stage 10;
- security scope considered;
- ZIP files used as input;
- main critical assets;
- main protected data;
- main risks;
- main recommended controls;
- main compliance requirements;
- main pending decisions;
- governance strategy;
- audit strategy;
- incident-response strategy;
- documentation limitations;
- relationship to previous stages;
- relationship to implementation and operations;
- security maturity level.

---

## 3. Map critical assets

Required table:

| Asset | Type | Description | Criticality | Main threats | Recommended controls |
|---|---|---|---|---|---|

Types:

- data;
- user;
- account;
- tenant;
- company;
- branch;
- API;
- database;
- storage;
- file;
- integration;
- credential;
- key;
- token;
- log;
- report;
- AI model;
- prompt;
- setting;
- billing;
- infrastructure;
- source code.

---

## 4. Classify personal and sensitive data

Required table:

| Entity | Field or data | Classification | Purpose | Sensitivity | Recommended protection | Notes |
|---|---|---|---|---|---|---|

Classifications:

- public;
- internal;
- confidential;
- restricted;
- personal;
- sensitive;
- financial;
- credential;
- operational;
- audit;
- AI;
- integration.

---

## 5. Map purposes, legal bases, and retention

Required table:

| Data | Purpose | Suggested legal basis | Retention | Disposal | Notes |
|---|---|---|---|---|---|

When there is legal uncertainty, mark it as:

```txt
Requires legal validation.
```

Do not invent a definitive legal opinion.

---

## 6. Map data subject rights and privacy

Required table:

| Right or request | How the product should handle it | Data involved | Responsible party | Notes |
|---|---|---|---|---|

Consider:

- access;
- correction;
- deletion;
- anonymization;
- portability;
- consent withdrawal;
- information about processing;
- objection;
- review of automated decisions;
- request channel;
- response deadline;
- request logging.

---

## 7. Map governance roles and responsibilities

Required table:

| Role | Responsibility | Scope | Critical permissions | Risks | Notes |
|---|---|---|---|---|---|

Consider:

- controller;
- processor;
- DPO, when applicable;
- platform super-admin;
- tenant admin;
- company admin;
- HQ admin;
- branch admin;
- manager;
- support;
- auditor;
- developer;
- DevOps;
- external vendor;
- integrator;
- end user.

---

## 8. Map security threats and risks

Required table:

| ID | Risk or threat | Category | Probability | Impact | Warning sign | Mitigation | Priority |
|---|---|---|---|---|---|---|---|

Categories:

- authentication;
- authorization;
- multi-tenant;
- data;
- API;
- frontend;
- backend;
- database;
- storage;
- integration;
- AI;
- billing;
- audit;
- infrastructure;
- operations;
- user;
- compliance;
- privacy;
- supply chain.

---

## 9. Model threats by critical flow

Required table:

| Critical flow | Threat | Vector | Impacted asset | Preventive control | Detective control | Corrective control |
|---|---|---|---|---|---|---|

Consider flows such as:

- login;
- invitation;
- tenant switching;
- main operation;
- permission change;
- data export;
- viewing sensitive data;
- file upload;
- external integration;
- webhook;
- payment;
- AI usage;
- super-admin;
- support;
- audit.

---

## 10. Define authentication controls

Required table:

| Control | Description | When to apply | Risk mitigated | Notes |
|---|---|---|---|---|

Include:

- secure password;
- MFA, when applicable;
- social login, if applicable;
- secure invitation;
- invitation expiration;
- password recovery;
- brute-force protection;
- temporary lockout;
- session management;
- refresh token;
- global logout;
- device/session management;
- login logs;
- suspicious login detection.

---

## 11. Define authorization and permission controls

Required matrix:

| Profile | Scope | Resource | View | Create | Edit | Delete | Approve | Export | Configure | Notes |
|---|---|---|---|---|---|---|---|---|---|---|

Consider:

- RBAC;
- ABAC, when needed;
- permissions by tenant;
- permissions by company;
- permissions by HQ;
- permissions by branch;
- super-admin;
- impersonation support, if applicable;
- read-only access;
- sensitive data;
- export;
- settings;
- billing;
- audit.

---

## 12. Define controls for multi-tenant, multi-company, HQ, and branch

When applicable, create:

| Control | Scope | Goal | Risk mitigated | Recommended test |
|---|---|---|---|---|

Include:

- tenant isolation;
- mandatory scoping in queries;
- active context validation;
- IDOR prevention;
- company segregation;
- HQ and branch rules;
- inherited permissions;
- specific permissions;
- logs by scope;
- feature flags by tenant;
- plan limits;
- settings by scope;
- access review.

If not applicable, explain why.

---

## 13. Define controls for APIs and contracts

Required table:

| API or contract | Risk | Control | Authorization | Audit | Notes |
|---|---|---|---|---|---|

Include:

- input validation;
- authentication;
- authorization;
- rate limiting;
- schema validation;
- pagination;
- secure filters;
- IDOR protection;
- safe logs;
- versioning;
- CORS;
- CSRF, when applicable;
- signed webhooks;
- idempotency;
- secure error handling.

---

## 14. Define controls for secure frontend and UX

Required table:

| Screen or component | Risk | UX/UI control | Message or state | Notes |
|---|---|---|---|---|

Include:

- no permission;
- session expired;
- sensitive data masked;
- destructive confirmation;
- export warning;
- plan limit;
- visible active context;
- tenant/company/branch switching;
- secure error feedback;
- avoid exposing technical details;
- prevent accidental actions;
- human review for AI;
- clear consent;
- privacy by default.

The visual presentation of these controls must follow `0-estetica-inicial.md`.

---

## 15. Define controls for database and storage

Required table:

| Area | Risk | Recommended control | Criticality | Notes |
|---|---|---|---|---|

Include:

- encryption at rest;
- backup;
- restore;
- logical segregation;
- secure indexes;
- least privilege access;
- access logs;
- masking;
- anonymization;
- logical deletion;
- retention;
- private storage;
- temporary URLs;
- file validation;
- malware protection, when applicable;
- versioning;
- audit trail.

---

## 16. Define controls for integrations and webhooks

Required table:

| Integration | Risk | Control | Expected failure | Recovery | Notes |
|---|---|---|---|---|---|

Include:

- integration authentication;
- credential rotation;
- webhook signing;
- idempotency;
- retry;
- dead letter queue;
- safe logs;
- data mapping;
- scope limitation;
- timeout;
- fallback;
- reconciliation.

---

## 17. Define controls for AI and automations

When applicable, create:

| AI resource | Risk | Control | Human review | Audit | Notes |
|---|---|---|---|---|---|

Consider:

- data leakage;
- prompt injection;
- incorrect response;
- hallucination;
- automated decision;
- bias;
- sensitive data use;
- lack of explainability;
- missing source;
- excessive cost;
- prompt logs;
- consent;
- human review;
- blocking critical actions;
- conversation retention;
- output evaluation.

If AI is not applicable, explain why.

---

## 18. Define controls for billing, plans, and feature flags

When applicable, create:

| Scenario | Risk | Control | Audit | Notes |
|---|---|---|---|---|

Include:

- plan changes;
- unauthorized access to paid features;
- usage limit bypass;
- payment failure;
- cancellation;
- trial;
- coupon;
- payment webhook;
- downgrade;
- grace period;
- feature blocking;
- incorrect feature flag.

If billing is not applicable, explain why.

---

## 19. Define audit and traceability

Required table:

| Auditable event | Who | When | Recorded data | Retention | Criticality | Notes |
|---|---|---|---|---|---|---|

Include:

- login;
- logout;
- failed login;
- permission change;
- settings change;
- export;
- import;
- integration action;
- AI action;
- billing action;
- sensitive data view;
- deletion;
- status change;
- approval;
- super-admin action;
- support impersonation.

---

## 20. Define monitoring and alerts

Required table:

| Signal | What to measure | Where to collect | Alert | Notes |
|---|---|---|---|---|

Include:

- logs;
- metrics;
- traces;
- audit;
- auth failures;
- permission denials;
- integration failures;
- AI errors;
- billing failures;
- abnormal tenant behavior;
- suspicious access;
- data isolation violations.

---

## 21. Define incident response

Required table:

| Incident type | Detection | Immediate action | Owner | Escalation | Notes |
|---|---|---|---|---|---|

Include:

- credential leak;
- tenant data exposure;
- unauthorized access;
- billing fraud;
- integration compromise;
- AI incident;
- infrastructure outage;
- audit failure;
- privacy incident.

---

## 22. Define continuity, backup, and recovery

Required table:

| Scenario | Continuity strategy | Recovery objective | Owner | Notes |
|---|---|---|---|---|

Include:

- backups;
- restore;
- DR;
- failover;
- maintenance windows;
- queued retries;
- graceful degradation;
- read-only fallback.

---

## 23. Define policies and required documents

Required table:

| Policy or document | Purpose | Owner | Status | Notes |
|---|---|---|---|---|

Include:

- terms of use;
- privacy policy;
- DPA;
- access policy;
- password policy;
- logging policy;
- retention policy;
- incident response plan;
- AI usage policy;
- vendor management policy;
- data retention and disposal policy.

---

## 24. Define security QA requirements

Required table:

| Area | QA strategy | Test types | Suggested tools | Notes |
|---|---|---|---|---|

Areas:

- authentication;
- authorization;
- multi-tenant isolation;
- API;
- frontend;
- backend;
- database;
- storage;
- integrations;
- AI;
- billing;
- audit;
- compliance.

---

## 25. Define a secure go-live checklist

Required table:

| Go-live item | Description | Expected status | Owner | Notes |
|---|---|---|---|---|

Include:

- security review completed;
- legal review completed;
- access review completed;
- audit enabled;
- logs configured;
- backups tested;
- recovery tested;
- secrets verified;
- permissions validated;
- multi-tenant isolation validated;
- integrations validated;
- AI review enabled;
- billing validated;
- monitoring enabled.

---

## 26. Simulate real product operation with governance and settings

Describe how real production usage should work considering:

- platform super-admin;
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

## 27. Generate final recommendations

Stage 10 should end by indicating how the next stage should use this analysis.

Recommend:

- what must be validated legally;
- what must be validated technically;
- what must be validated in security QA;
- what must be validated operationally;
- what policies must be created;
- what risks are critical;
- what items should become backlog;
- what decisions remain open.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 10 Executive Summary
2. Sources Extracted from the ZIP
3. Extracted File Inventory
4. Consolidated Product Context
5. Critical Assets
6. Personal and Sensitive Data Classification
7. Purposes, Legal Bases, and Retention
8. Data Subject Rights and Privacy
9. Governance Roles and Responsibilities
10. Security Threats and Risks
11. Threat Modeling by Critical Flow
12. Authentication Controls
13. Authorization and Permission Controls
14. Multi-Tenant / Multi-Company / HQ / Branch Controls
15. API and Contract Controls
16. Secure Frontend and UX Controls
17. Database and Storage Controls
18. Integration and Webhook Controls
19. AI and Automation Controls
20. Billing, Plans, and Feature Flag Controls
21. Audit and Traceability
22. Monitoring and Alerts
23. Incident Response
24. Continuity, Backup, and Recovery
25. Policies and Required Documents
26. Security QA Requirements
27. Secure Go-Live Checklist
28. Real Product Operation Simulation
29. Residual Risks
30. Gaps and Pending Items
31. UX/UI Guidelines Derived from `0-estetica-inicial.md`
32. Final Recommendations
33. Sources, Evidence, and References
34. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
10.html
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
- stage name: `Stage 10 — Security, Privacy, Compliance, and Governance`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of critical assets;
- number of sensitive data items;
- number of risks;
- number of controls;
- number of governance roles;
- number of pending decisions;
- recommended next stage.

The header must follow the product’s official visual direction.

---

## 2. Indicator Cards

Create cards with:

- total input documents analyzed;
- total critical assets;
- total sensitive data items;
- total security risks;
- total controls;
- total governance roles;
- total audit events;
- total compliance documents;
- total open decisions;
- security maturity level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- critical assets;
- data classification;
- legal bases and retention;
- data subject rights;
- governance roles;
- risks;
- threat modeling;
- authentication;
- authorization;
- multi-tenant controls;
- APIs;
- frontend security;
- database and storage;
- integrations and webhooks;
- AI;
- billing;
- audit;
- monitoring;
- incidents;
- continuity;
- policies;
- security QA;
- go-live;
- real operation simulation;
- residual risks;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Security Blocks and Governance Blocks

Create visual blocks for:

- extracted ZIP inventory;
- critical assets;
- incident handling;
- governance;
- go-live security;
- real operation simulation;
- recommendations.

The blocks must be readable, useful, and consistent with the official aesthetic.

---

## 5. Detailed Analyses

Create expandable sections for:

- executive summary;
- ZIP sources;
- inventory;
- product context;
- assets;
- sensitive data;
- governance;
- risks;
- controls;
- audit;
- security UX/UI;
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
3. Filter assets by type.
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
14. Copy ZIP inventory.
15. Copy consolidated decisions.
16. Copy final recommendations.
17. Export all content to Markdown.
18. Print or save as PDF.
19. Show visual progress for Stage 10.
20. Highlight high risks.
21. Highlight pending decisions.
22. Highlight critical spikes.
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
- oriented to security architecture, traceability, risk, decisions, and implementation;
- with a clear visual hierarchy among executive summary, solution vision, components, data, security, integrations, infrastructure, CI/CD, risks, and recommendations;
- with balanced information density, avoiding both visual overload and empty screens;
- with useful and justifiable components, avoiding decorative elements without function;
- with cards, tables, matrices, security blocks, incident blocks, governance blocks, inventory blocks, and sections used only when they help understand, filter, compare, or prioritize information;
- with colors, typography, spacing, borders, icons, states, and components consistent with `0-estetica-inicial.md`;
- with objective, contextual, and verifiable microcopy, avoiding vague phrases like “innovative solution”, “amazing experience”, or “powerful dashboard” without concrete content;
- with clear sidebar navigation, descriptive titles, and understandable visual states;
- with basic accessibility: adequate contrast, visible focus, legible text, comfortable click areas, and semantic structure;
- with real responsiveness for desktop and mobile, preserving readability of tables, matrices, security blocks, governance blocks, and cards;
- with simple, useful, and testable interactions: filters, search, copy, export, print, expand, and collapse;
- with visual consistency across sections, avoiding repeated identical blocks without need;
- with a professional, practical look suitable for architects, security engineers, DPOs, tech leads, DevOps, QA, product managers, founders, legal, support, and stakeholders.

Avoid explicitly:

- any aesthetic that contradicts `0-estetica-inicial.md`;
- flashy gradients without purpose;
- repetitive cards with little content;
- decorative icons;
- vague and generic phrases;
- excessive shadows, glow, and visual effects;
- layouts that look like templates;
- unreadable tables on small screens;
- decorative matrices without value;
- security recommendations disconnected from real requirements;
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
15. Do not ignore `0-estetica-inicial.md` when present in the ZIP.
16. Do not create a parallel aesthetic.
17. Do not invent sources, data, risks, or validations.
18. Do not use fictitious links.
19. Do not turn hypothesis into certainty.
20. Do not give a definitive legal opinion.
21. Do not generate security content disconnected from requirements, data, permissions, UX, architecture, and the real product context.
22. Do not limit the documentation to the MVP.
23. Clearly distinguish:
    - content extracted from the files;
    - researched fact;
    - evidence;
    - technical inference;
    - hypothesis;
    - risk;
    - control;
    - pending decision;
    - recommendation.
24. When information is uncertain, mark it as a gap, hypothesis, or item requiring legal/technical validation.
25. When the aesthetic file is missing, record the visual limitation.
26. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, billing, audit, integrations, security, compliance, and AI where they fit the product.
27. Whenever there is sensitive data or permissions, indicate the technical, legal, security, audit, and UX impact.
28. Do not invent controls just to look complete; every control must have a clear purpose.

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
  <title>Stage 10 — Security, Privacy, Compliance, and Governance</title>
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
      <!-- Stage 10 header following the official aesthetic -->
    </header>

    <section id="executive-summary">
      <!-- executive summary -->
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

    <section id="assets">
      <!-- critical assets -->
    </section>

    <section id="sensitive-data">
      <!-- personal and sensitive data classification -->
    </section>

    <section id="legal-bases">
      <!-- purposes, legal bases, and retention -->
    </section>

    <section id="data-subject-rights">
      <!-- data subject rights and privacy -->
    </section>

    <section id="governance">
      <!-- governance roles and responsibilities -->
    </section>

    <section id="risks">
      <!-- security threats and risks -->
    </section>

    <section id="threat-modeling">
      <!-- threat modeling by critical flow -->
    </section>

    <section id="authentication">
      <!-- authentication controls -->
    </section>

    <section id="authorization">
      <!-- authorization and permission controls -->
    </section>

    <section id="multitenant-controls">
      <!-- multi-tenant / multi-company / HQ / branch controls -->
    </section>

    <section id="api-controls">
      <!-- API and contract controls -->
    </section>

    <section id="frontend-security">
      <!-- frontend and secure UX controls -->
    </section>

    <section id="data-storage-controls">
      <!-- database and storage controls -->
    </section>

    <section id="integration-controls">
      <!-- integration and webhook controls -->
    </section>

    <section id="ai-controls">
      <!-- AI and automation controls -->
    </section>

    <section id="billing-controls">
      <!-- billing, plans, and feature flag controls -->
    </section>

    <section id="audit">
      <!-- audit and traceability -->
    </section>

    <section id="monitoring">
      <!-- monitoring and alerts -->
    </section>

    <section id="incidents">
      <!-- incident response -->
    </section>

    <section id="continuity">
      <!-- continuity, backup, and recovery -->
    </section>

    <section id="policies">
      <!-- policies and required documents -->
    </section>

    <section id="security-qa">
      <!-- security QA requirements -->
    </section>

    <section id="go-live">
      <!-- secure go-live checklist -->
    </section>

    <section id="real-operation">
      <!-- simulation of real product operation -->
    </section>

    <section id="residual-risks">
      <!-- residual risks -->
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

- based on the extracted ZIP files;
- structured;
- broad;
- actionable;
- traceable;
- consistent with previous stages;
- useful for security decisions;
- useful for secure development;
- useful for security QA;
- useful for operations;
- useful for audit;
- useful for compliance;
- useful for governance;
- clear about used and missing files;
- clear about uncertainties;
- clear about hypotheses;
- clear about risks;
- clear about remaining gaps;
- visually consistent with `0-estetica-inicial.md`;
- reviewed before delivery, with correction of errors and failures in the final HTML.

---

# Important Rules

1. Use the chat history and the `.md`, `.html`, and `.zip` files already generated as the main input.
2. Extract previous ZIP files, when they exist, before generating Stage 10.
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
15. Do not ignore `0-estetica-inicial.md`, when provided in the ZIP.
16. Do not create a parallel aesthetic.
17. Do not invent sources, data, risks, or validations.
18. Do not use fictitious links.
19. Do not depend on external libraries in the HTML.
20. Do not deliver Markdown only.
21. Do not generate separate files.
22. Generate only one final HTML, inspect it for errors or failures, and fix them.
23. Save the file as `10.html`.
24. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When starting the stage, the assistant must analyze the chat history and the existing files, then:

1. Validate the ZIP file.
2. Extract the ZIP contents.
3. Inventory the extracted files.
4. Identify the Stage 1–9 `.html` and `.md` files.
5. Locate and read `0-estetica-inicial.md`, when it exists.
6. Read the Stage HTML files, especially stages 4, 5, 8, and 9.
7. Consolidate the full product context.
8. Consolidate assets, sensitive data, legal bases, data subject rights, governance, risks, threats, controls, permissions, audit, incidents, continuity, policies, security QA, go-live checklist, and real-use simulation.
9. Apply all visual decisions from the official aesthetic file.
10. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
11. Save the file using:

```txt
10.html
```

12. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
