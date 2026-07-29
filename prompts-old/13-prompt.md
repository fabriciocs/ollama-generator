You are a specialist in:

* Requirements Engineering
* Software Architecture
* Document Analysis
* Product Design
* UX/UI
* JSON Modeling
* SaaS Systems
* HTML Dashboards
* Semantic Structure
* Information Architecture

Your mission is to analyze all available `.html` and `.md` files and generate the final artifact for this stage:

```text
13.json
```

Mandatory product context: the canonical tree must represent a super-admin platform with, at minimum, the domains Dashboard, Tenant Context/Selection, Tenants, Plans, Billing, Feature Management, Roles and Permissions, Audit, Templates, AI, Global Settings, and Validation Engine, including login, active scope, and administration navigation.

---

# Goal

Consolidate all documentation produced in the previous stages into a single navigable, complete, hierarchical JSON structure.

The file `13.json` will be the canonical representation of the system and will serve as the source for:

* automatic dashboard generation;
* automatic menu generation;
* automatic route generation;
* automatic documentation generation;
* automatic React frontend generation;
* automatic navigation generation;
* automatic semantic search generation;
* automatic RAG and AI generation;

---

# Input Files

Analyze in full:

```text
0-estetica-inicial.md

1.html
1.1.html (if it exists)
1.2.html

2.html

3.html

4.html
4.1.html

5.html

6.html

7.html

8.html

9.html

10.html

11.html

12.html
```

In addition to:

```text
Conversation history

Attached files

Complementary documentation

Previous responses
```

---

# Mandatory Process

## 1. Identify the Structure

Identify and catalog:

```text
Dashboard

Domain

Module

Feature

Screen

Section

Subsection

Component

Table

Flow

Business Rule

Permission

Event

Action

Endpoint

Integration

Entity

Report

Analytical Dashboard
```

---

## 2. Full Extraction

Extract in full:

* titles;
* descriptions;
* objectives;
* content;
* rules;
* notes;
* specifications;
* definitions;
* relationships.

Do not summarize.

Do not simplify.

Do not omit.

---

## 3. Hierarchical Reconstruction

Rebuild the entire system tree.

The structure must exactly respect the hierarchy found in the documentation.

---

# Mandatory Rules

Each found item must have:

```json
{
  "id": "",
  "codigo": "",
  "tipo": "",
  "titulo": "",
  "objetivo": "",
  "conteudo": ""
}
```

---

# Required File Structure

## Root

```json
{
  "metadata": {},
  "dashboard": {},
  "menu": [],
  "routes": [],
  "catalogo": {},
  "dominios": []
}
```

---

# Metadata

```json
{
  "metadata": {
    "arquivo": "13.json",
    "versao": "1.0",
    "origem": "Analysis of HTML and Markdown files",
    "geradoEm": "",
    "totalDominios": 0,
    "totalModulos": 0,
    "totalFuncionalidades": 0,
    "totalTelas": 0
  }
}
```

---

# Dashboard

```json
{
  "dashboard": {
    "id": "",
    "titulo": "",
    "objetivo": "",
    "conteudo": ""
  }
}
```

---

# Domain

```json
{
  "id": "",
  "codigo": "",
  "tipo": "domain",
  "titulo": "",
  "objetivo": "",
  "conteudo": "",
  "modulos": []
}
```

---

# Module

```json
{
  "id": "",
  "codigo": "",
  "tipo": "module",
  "titulo": "",
  "objetivo": "",
  "conteudo": "",
  "funcionalidades": []
}
```

---

# Feature

```json
{
  "id": "",
  "codigo": "",
  "tipo": "feature",
  "titulo": "",
  "objetivo": "",
  "conteudo": "",
  "telas": []
}
```

---

# Screen

```json
{
  "id": "",
  "codigo": "",
  "tipo": "screen",
  "titulo": "",
  "objetivo": "",
  "conteudo": "",
  "componentes": [],
  "secoes": []
}
```

---

# Section

```json
{
  "id": "",
  "codigo": "",
  "tipo": "section",
  "titulo": "",
  "objetivo": "",
  "conteudo": "",
  "subsecoes": []
}
```

---

# Subsection

```json
{
  "id": "",
  "codigo": "",
  "tipo": "subsection",
  "titulo": "",
  "objetivo": "",
  "conteudo": ""
}
```

---

# Components

```json
{
  "id": "",
  "codigo": "",
  "tipo": "component",
  "titulo": "",
  "objetivo": "",
  "conteudo": ""
}
```

---

# Menus

Automatically generate the complete navigation tree.

```json
{
  "menu": [
    {
      "id": "",
      "label": "",
      "rota": "",
      "icone": "",
      "filhos": []
    }
  ]
}
```

---

# Routes

Automatically generate every identified route.

```json
{
  "routes": [
    {
      "id": "",
      "path": "",
      "titulo": "",
      "origem": ""
    }
  ]
}
```

---

# Global Catalog

Generate a consolidated catalog.

```json
{
  "catalogo": {
    "dominios": [],
    "modulos": [],
    "funcionalidades": [],
    "telas": [],
    "secoes": [],
    "componentes": [],
    "eventos": [],
    "acoes": [],
    "endpoints": []
  }
}
```

---

# Content

For each found element, store:

```json
{
  "titulo": "",
  "objetivo": "",
  "conteudo": ""
}
```

The `conteudo` field must contain the full text extracted from the documentation.

---

# Information Preservation

No information may be discarded.

No section may be removed.

No business rule may be summarized.

No feature may be omitted.

Every found item must exist inside `13.json`.

---

# Final Result

Generate only:

```text
13.json
```

containing:

* complete dashboard;
* complete hierarchical structure;
* menus;
* submenus;
* domains;
* modules;
* features;
* screens;
* sections;
* subsections;
* components;
* rules;
* entities;
* events;
* actions;
* endpoints;
* integrations;
* reports;
* objectives;
* full content;
* global catalog.

The file `13.json` must represent 100% of the functional and documentary structure found in the analyzed files.
