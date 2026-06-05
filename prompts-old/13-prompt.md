Você é um especialista em:

* Engenharia de Requisitos
* Arquitetura de Software
* Análise Documental
* Product Design
* UX/UI
* Modelagem JSON
* Sistemas SaaS
* Dashboards HTML
* Estruturação Semântica
* Arquitetura da Informação

Sua missão é analisar todos os arquivos `.html` e `.md` disponíveis e gerar o artefato final da etapa:

```text
13.json
```

---

# Objetivo

Consolidar toda a documentação produzida nas etapas anteriores em uma única estrutura JSON navegável, completa e hierárquica.

O arquivo `13.json` será a representação canônica do sistema e servirá como fonte para:

* geração automática de dashboards;
* geração automática de menus;
* geração automática de rotas;
* geração automática de documentação;
* geração automática de frontend React;
* geração automática de navegação;
* geração automática de busca semântica;
* geração automática de RAG e IA.

---

# Arquivos de Entrada

Analisar integralmente:

```text
0-estetica-inicial.md

1.html
1.1.html (se existir)
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

Além de:

```text
Histórico da conversa

Arquivos anexados

Documentações complementares

Respostas anteriores
```

---

# Processo Obrigatório

## 1. Identificação da Estrutura

Identificar e catalogar:

```text
Dashboard

Domínio

Módulo

Funcionalidade

Tela

Seção

Subseção

Componente

Tabela

Fluxo

Regra de Negócio

Permissão

Evento

Ação

Endpoint

Integração

Entidade

Relatório

Dashboard Analítico
```

---

## 2. Extração Completa

Extrair integralmente:

* títulos;
* descrições;
* objetivos;
* conteúdo;
* regras;
* observações;
* especificações;
* definições;
* relacionamentos.

Não resumir.

Não simplificar.

Não omitir.

---

## 3. Reconstrução Hierárquica

Reconstruir toda a árvore do sistema.

A estrutura deve respeitar exatamente a hierarquia encontrada na documentação.

---

# Regras Obrigatórias

Cada item encontrado deve possuir:

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

# Estrutura Obrigatória do Arquivo

## Raiz

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
    "origem": "Analise dos arquivos HTML e Markdown",
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

# Domínio

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

# Módulo

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

# Funcionalidade

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

# Tela

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

# Seção

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

# Subseção

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

# Componentes

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

Gerar automaticamente a árvore de navegação completa.

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

# Rotas

Gerar automaticamente todas as rotas identificadas.

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

# Catálogo Global

Gerar catálogo consolidado.

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

# Conteúdo

Para cada elemento encontrado armazenar:

```json
{
  "titulo": "",
  "objetivo": "",
  "conteudo": ""
}
```

O campo `conteudo` deve conter o texto completo extraído da documentação.

---

# Preservação de Informação

Nenhuma informação pode ser descartada.

Nenhuma seção pode ser removida.

Nenhuma regra de negócio pode ser resumida.

Nenhuma funcionalidade pode ser omitida.

Todo conteúdo encontrado deve existir dentro do `13.json`.

---

# Resultado Final

Gerar exclusivamente:

```text
13.json
```

contendo:

* dashboard completo;
* estrutura hierárquica completa;
* menus;
* submenus;
* domínios;
* módulos;
* funcionalidades;
* telas;
* seções;
* subseções;
* componentes;
* regras;
* entidades;
* eventos;
* ações;
* endpoints;
* integrações;
* relatórios;
* objetivos;
* conteúdo integral;
* catálogo global.

O arquivo `13.json` deve representar 100% da estrutura funcional e documental encontrada nos arquivos analisados.
