You are a specialist in Product Strategy, Product Discovery, business analysis, requirements engineering, functional architecture, UX strategy, market research, benchmarking, SaaS, multi-tenant systems, and interactive HTML dashboards.

Your task is to execute **Stage 3 — Strategic Analysis and Initial Specification**.

Mandatory product context: consolidate the vision of a super-admin platform with global/tenant scope, including tenant management, plans, features, profiles, permissions, audit, templates, AI, billing, validation, and platform governance.

You must analyze the chat history and use as official input every `.md` and `.html` file generated in previous stages, including `1.html`, `1.2.html`, `0-estetica-inicial.md`, and `2.html`.

The result must be saved as:

```txt
3.html
```

---

# Objective of Stage 3

Consolidate the learnings from previous stages into a more mature product vision.

Stage 3 should:

- consolidate the initial idea;
- interpret market research;
- absorb answers to open questions;
- identify relevant market patterns;
- turn findings into product decisions;
- consolidate audience, problems, opportunities, and risks;
- define an initial functional vision;
- organize all domains;
- suggest all modules;
- map all features;
- indicate all high-level flows;
- define product principles;
- define differentiation criteria;
- update hypotheses;
- prepare the foundation for later stages of requirements, UX, data, architecture, and backlog.

---

# Important

This stage must **not** yet generate the final full functional documentation.

Do not produce an exhaustive specification of all screens, business rules, database, final technical architecture, or a closed backlog.

Stage 3 is a strategic and functional consolidation, not the final documentation.

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
- initial hypotheses;
- open questions;
- researched answers;
- market learnings;
- competitors and benchmarks;
- market gaps;
- identified opportunities;
- initial risks;
- Stage 2 recommendations;
- aesthetic direction from `0-estetica-inicial.md`.

---

## 2. Generate a strategic product summary

Describe clearly:

- what the product is;
- who it exists for;
- what problem it solves;
- what transformation it promises;
- why it makes sense now;
- which market signals support the opportunity;
- which competitor gaps it can exploit;
- which initial differentiators look promising;
- which uncertainties still need validation.

---

## 3. Consolidate audience and stakeholders

Define:

- paying customer;
- administrator user;
- operational user;
- end user;
- decision maker;
- influencer;
- partner;
- support;
- internal operator;
- platform super-admin, when applicable.

For each profile, describe:

| Profile | Description | Main pain point | Goal | Decision power | Frequency of use | Notes |
|---|---|---|---|---|---|---|

---

## 4. Consolidate problems, pain points, and needs

Group problems and pain points by category:

- business;
- operations;
- productivity;
- communication;
- control;
- data;
- finance;
- user experience;
- integration;
- security;
- compliance;
- scale.

For each item, indicate:

- intensity;
- frequency;
- available evidence;
- source or stage of origin;
- related opportunity;
- validation priority.

---

## 5. Consolidate opportunities and differentiators

Organize opportunities identified in previous stages.

Classify by:

- automation;
- AI;
- productivity;
- operations;
- data and analytics;
- collaboration;
- integrations;
- user experience;
- monetization;
- verticalization;
- compliance;
- multi-company;
- multi-tenant;
- super-admin;
- marketplace;
- platform.

For each opportunity, indicate:

| ID | Opportunity | Origin | Expected value | Estimated effort | Risk | Priority | Note |
|---|---|---|---|---|---|---|---|

---

## 6. Update product hypotheses

Reassess Stage 1 hypotheses using Stage 0 aesthetics and Stage 2 research.

Classify each hypothesis as:

- reinforced;
- weakened;
- still uncertain;
- discarded;
- new hypothesis.

Required table:

| ID | Hypothesis | Status | Evidence | Impact | Uncertainty | Next validation |
|---|---|---|---|---|---|---|

---

## 7. Consolidate strategic risks

Update risks based on previous stages.

Consider:

- market risk;
- adoption risk;
- differentiation risk;
- technical risk;
- operational risk;
- legal risk;
- security risk;
- monetization risk;
- support risk;
- scalability risk;
- competitive risk;
- external dependency risk.

Required table:

| ID | Risk | Category | Probability | Impact | Evidence | Initial mitigation | Priority |
|---|---|---|---|---|---|---|---|

---

## 8. Define the initial functional vision

Based on the research and analysis, propose an initial functional vision of the system.

Organize it into:

- preliminary domains;
- candidate modules;
- candidate features;
- main high-level flows;
- administrative areas;
- operational areas;
- customer areas;
- platform areas;
- super-admin areas, when applicable.

Do not detail final screens yet, but indicate possible functional groupings.

---

## 9. Map preliminary domains

Create a table:

| Domain | Description | Goal | Involved profiles | Notes |
|---|---|---|---|---|

Consider, when relevant:

- Platform;
- Backoffice;
- Customer;
- Operations;
- Administration;
- Data and Analytics;
- Integrations;
- Billing;
- Security;
- AI;
- Settings;
- Super-admin;
- Tenant;
- Company;
- HQ;
- Branch.

---

## 10. Map candidate modules

Create a table:

| Domain | Module | Description | Goal | Origin of need | Initial priority |
|---|---|---|---|---|---|

---

## 11. Map candidate features

Create a table:

| Domain | Module | Candidate feature | Description | User value | Evidence | Priority |
|---|---|---|---|---|---|---|

The features must be candidates, not final requirements.

---

## 12. Map main high-level flows

Create a macro-flow view, such as:

- onboarding;
- registration;
- activation;
- main operation;
- tracking;
- approval;
- notification;
- collaboration;
- payment;
- configuration;
- integration;
- audit;
- support;
- reports;
- platform administration.

Required table:

| Flow | Goal | Involved profiles | Start | Expected result | Notes |
|---|---|---|---|---|---|

---

## 13. Define product principles

Create product principles that will guide later stages.

Examples of categories:

- operational simplicity;
- transparency;
- responsible automation;
- traceability;
- security by design;
- configuration without complexity;
- scalability;
- task-oriented experience;
- actionable data;
- integration with real user work.

Each principle should contain:

| Principle | Description | How to apply | Risk if ignored |
|---|---|---|---|

---

## 14. Define initial UX/UI guidelines from the product aesthetic

Read:

```txt
0-estetica-inicial.md
```

Extract and consolidate only the guidelines applicable to Stage 3, including:

- visual personality;
- desired atmosphere;
- interface principles;
- information density;
- component language;
- visual hierarchy;
- color use;
- typography;
- layout;
- dashboard patterns;
- microcopy;
- interface states;
- accessibility;
- responsiveness.

The visual section of Stage 3 must be an applied synthesis of the defined aesthetic, not a new aesthetic.

If the aesthetic file does not exist, state:

```txt
0-estetica-inicial.md not provided. The visual direction below is provisional and should be revised when the official aesthetic becomes available.
```

---

## 15. Generate recommendations for Stage 4

Stage 3 should end by indicating how the next stage should use this consolidation.

Recommend:

- what should become a requirement;
- what should be validated;
- what should be researched further;
- what should go into UX;
- what should go into architecture;
- what should go into data;
- what should be prioritized;
- what should be avoided.

---

# Mandatory Documents Inside the Dashboard

The final HTML dashboard must contain:

1. Stage 3 Executive Summary
2. Consolidated Product Context
3. Source Documents and Inputs
4. Strategic Product Summary
5. Market and Benchmark Consolidation
6. Audience and Stakeholders
7. Consolidated Problems, Pain Points, and Needs
8. Opportunities and Differentiators
9. Updated Hypotheses
10. Consolidated Strategic Risks
11. Initial Functional Vision
12. Preliminary Domains
13. Candidate Modules
14. Candidate Features
15. High-Level Flows
16. Product Principles
17. UX/UI Guidelines Derived from `0-estetica-inicial.md`
18. Recommended Strategic Decisions
19. Gaps and Pending Items
20. Recommendations for Stage 4
21. Sources, Evidence, and References
22. Next Steps

---

# Required Output

Generate a full HTML file, ready to open in the browser.

The file must be named:

```txt
3.html
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
- simple pure HTML/CSS/JavaScript charts;
- a light/dark theme toggle;
- a button to print or save as PDF;
- a button to export Markdown;
- a button to copy the executive summary;
- a button to copy the main tables and sections;
- no external frameworks;
- no external libraries;
- no CDN;
- no external images.

All visual choices, including colors, typography, layout, components, hierarchy, density, visual microcopy, and responsiveness, must follow `0-estetica-inicial.md`.

---

# Visual Structure

## 1. Header

Display:

- analyzed product name;
- stage name: `Stage 3 — Strategic Analysis and Initial Specification`;
- files or inputs used;
- aesthetic file used: `0-estetica-inicial.md`;
- generated file;
- generation date;
- analyzed segment;
- number of updated hypotheses;
- number of opportunities;
- number of risks;
- number of domains;
- number of modules;
- recommended next stage.

The header must follow the product’s official visual direction.

---

## 2. Indicator Cards

Create cards with:

- total input documents analyzed;
- total consolidated opportunities;
- total strategic risks;
- total reinforced hypotheses;
- total uncertain hypotheses;
- total preliminary domains;
- total candidate modules;
- total candidate features;
- specification maturity level;
- recommended next stage.

---

## 3. Tables and Matrices

Create tables for:

- stakeholders;
- problems and pain points;
- opportunities;
- hypotheses;
- risks;
- domains;
- modules;
- features;
- flows;
- product principles;
- decisions;
- gaps;
- recommendations.

The tables must be readable, responsive, and aligned with the official aesthetic direction.

---

## 4. Detailed Analyses

Create expandable sections for:

- strategic summary;
- market consolidation;
- opportunities;
- risks;
- functional vision;
- UX/UI guidelines;
- recommendations for Stage 4.

These sections must use the visual language defined in the aesthetic file.

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
3. Filter hypotheses by status.
4. Filter risks by category.
5. Filter opportunities by priority.
6. Filter candidate features by domain or module.
7. Filter stakeholders by type.
8. Free-text search across the entire dashboard.
9. Copy executive summary.
10. Copy main tables.
11. Export all content to Markdown.
12. Print or save as PDF.
13. Show visual progress for Stage 3.
14. Highlight high risks.
15. Highlight high-value opportunities.
16. Highlight still-uncertain hypotheses.
17. Highlight critical gaps.

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
- oriented to reading, comparison, strategic synthesis, and decision-making;
- with a clear visual hierarchy among summary, decisions, hypotheses, opportunities, risks, domains, modules, and recommendations;
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
- merely decorative icons;
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
2. Do not contradict existing evidence without justification.
3. Do not invent user validation.
4. Do not turn hypothesis into certainty.
5. Do not deliver final requirements without indicating origin or evidence.
6. Do not lock the scope too early.
7. Do not over-detail technical implementation.
8. Do not detail the database at this stage.
9. Do not create a complete backlog yet.
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
13. Consider configurations, permissions, multi-tenant, multi-company, HQ/branch, super-admin, and AI where they make sense for the product.

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
  <title>Stage 3 — Strategic Analysis and Initial Specification</title>
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
      <!-- Stage 3 header following the official aesthetic -->
    </header>

    <section id="executive-summary">
      <!-- executive summary -->
    </section>

    <section id="product-context">
      <!-- consolidated product context -->
    </section>

    <section id="source-documents">
      <!-- source documents and inputs -->
    </section>

    <section id="strategic-summary">
      <!-- strategic summary -->
    </section>

    <section id="market-benchmarking">
      <!-- market and benchmark consolidation -->
    </section>

    <section id="stakeholders">
      <!-- audience and stakeholders -->
    </section>

    <section id="problems-pains">
      <!-- consolidated problems, pain points, and needs -->
    </section>

    <section id="opportunities">
      <!-- opportunities and differentiators -->
    </section>

    <section id="hypotheses">
      <!-- updated hypotheses -->
    </section>

    <section id="risks">
      <!-- consolidated strategic risks -->
    </section>

    <section id="functional-vision">
      <!-- initial functional vision -->
    </section>

    <section id="domains">
      <!-- preliminary domains -->
    </section>

    <section id="modules">
      <!-- candidate modules -->
    </section>

    <section id="features">
      <!-- candidate features -->
    </section>

    <section id="flows">
      <!-- high-level flows -->
    </section>

    <section id="product-principles">
      <!-- product principles -->
    </section>

    <section id="ux-ui-guidelines">
      <!-- UX/UI guidelines derived from 0-estetica-inicial.md -->
    </section>

    <section id="decisions">
      <!-- recommended strategic decisions -->
    </section>

    <section id="gaps">
      <!-- gaps and pending items -->
    </section>

    <section id="stage4-recommendations">
      <!-- recommendations for Stage 4 -->
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

- consolidated;
- strategic;
- comparative;
- grounded;
- traceable;
- useful for product decisions;
- useful for guiding requirements;
- useful for guiding UX;
- useful for guiding functional architecture;
- useful for guiding prioritization;
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
4. Do not ignore the `0-estetica-inicial.md` file.
5. Do not create a parallel aesthetic.
6. Do not invent sources, data, or validations.
7. Do not use fictitious links.
8. Do not depend on external libraries in the HTML.
9. Do not deliver Markdown only.
10. Do not generate separate files.
11. Generate only one final HTML, inspect it for errors or failures, and fix them.
12. Save the file as `3.html`.
13. Respond only with the download link and a short confirmation sentence.

---

# Expected Output

When receiving the Stage 3 input, the assistant must:

1. Read the previous-stage documents.
2. Read `0-estetica-inicial.md`.
3. Extract the complete product context.
4. Consolidate research, hypotheses, risks, opportunities, and learnings.
5. Generate the strategic and initial functional vision.
6. Map stakeholders, domains, modules, candidate features, and macro flows.
7. Apply all visual decisions from the official aesthetic file.
8. Create the full HTML dashboard, inspect it for errors or failures, and fix them.
9. Save the file using:

```txt
3.html
```

10. Respond only with the download link and a short confirmation sentence.

Final response format:

```html
content of the generated file
```
