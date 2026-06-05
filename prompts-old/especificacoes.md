O domínio **Superadministrador** representa a camada mais alta de governança da plataforma SaaS Multi-Tenant. É responsável pela administração global da plataforma, gestão de tenants, configuração de inteligência artificial, templates, automações, monitoramento e parametrizações globais.

---

# 1. Objetivo do Domínio

Permitir que operadores da plataforma (e não clientes) realizem:

* Administração global do sistema
* Gestão de tenants
* Gestão de planos
* Configurações globais
* Configurações de IA
* Gestão de prompts
* Gestão de templates
* Monitoramento de execuções
* Auditoria
* Governança
* Billing
* Feature Flags
* Controle de módulos

---

# 2. Fluxo Inicial de Acesso

## Caso de Uso: Login Superadministrador

### Tela: Login

Campos:

| Campo  | Tipo     | Obrigatório |
| ------ | -------- | ----------- |
| E-mail | Email    | Sim         |
| Senha  | Password | Sim         |

Botões:

* Entrar
* Esqueci minha senha

Validações:

* Usuário ativo
* Perfil Superadministrador
* Senha válida

---

# 3. Seleção de Contexto

Após autenticação:

Tela:

## Selecionar Tenant

Objetivo:

Permitir operar:

* Contexto Global
* Tenant específico

Campos:

| Campo  | Tipo          |
| ------ | ------------- |
| Tenant | Select Search |

Opções:

* Global (Control Plane)
* Tenant A
* Tenant B
* Tenant C
* Tenant N

Filtros:

* Nome
* Código
* Status

Ações:

* Entrar no Tenant
* Entrar no Contexto Global

---

# 4. Dashboard Superadministrador

## Tela Principal

KPIs

### Plataforma

* Total de Tenants
* Tenants Ativos
* Tenants Suspensos
* Usuários Totais
* Usuários Online

### Inteligência Artificial

* Prompts Cadastrados
* Agentes Ativos
* Execuções Hoje
* Tokens Consumidos
* Custos de IA

### Templates

* Templates de E-mail
* Templates de Notificação
* Templates de Documento

### Operação

* Jobs Ativos
* Filas
* Integrações
* Erros

---

# Estrutura de Menu

## Dashboard

* Visão Geral
* Métricas
* Monitoramento

---

# Tenant Management

## Tenants

### Listagem

Filtros:

* Nome
* Status
* Plano
* Data criação

Ações:

* Visualizar
* Editar
* Suspender
* Reativar
* Excluir
* Impersonar

---

### Detalhe Tenant

Dados Gerais

Configurações

Planos

Módulos

Limites

Integrações

Usuários

Filiais

Logs

Billing

Feature Flags

---

# Configurações

## Configurações Globais

Categorias:

* Sistema
* Segurança
* IA
* E-mail
* Notificações
* Armazenamento
* Auditoria

---

# Templates

## Templates de Documento

Fluxos:

### Listagem

Filtros:

* Nome
* Categoria
* Status

Ações:

* Visualizar
* Editar
* Duplicar
* Excluir

---

### Cadastro

Campos

| Campo         | Tipo   |
| ------------- | ------ |
| Nome          | Texto  |
| Código        | Texto  |
| Categoria     | Select |
| Conteúdo HTML | Editor |
| Variáveis     | JSON   |

---

# Templates de E-mail

## Fluxos

### Listagem

Filtros

* Nome
* Evento
* Status

---

### Cadastro

Campos

| Campo         | Tipo  |
| ------------- | ----- |
| Nome          | Texto |
| Código        | Texto |
| Assunto       | Texto |
| Template HTML | HTML  |
| Variáveis     | JSON  |

---

### Exemplo

```html
Olá {{nome}}

Seu pedido {{pedido}}
foi aprovado.
```

---

# Templates de Notificação

Tipos:

* Push
* In-App
* SMS
* WhatsApp
* Teams
* Slack

---

Campos

| Campo    | Tipo   |
| -------- | ------ |
| Nome     | Texto  |
| Código   | Texto  |
| Canal    | Select |
| Template | Editor |

---

# Inteligência Artificial

## Menu IA

Submenus:

* Agentes
* Prompts
* Execuções
* Modelos
* Custos
* Configurações

---

# Agentes IA

Representam entidades autônomas configuráveis.

## Estrutura

### Listagem

Filtros

* Nome
* Tipo
* Modelo
* Status

---

### Cadastro

Campos

| Campo     | Tipo          |
| --------- | ------------- |
| Nome      | Texto         |
| Código    | Texto         |
| Descrição | Texto         |
| Status    | Ativo/Inativo |

---

### Configuração do Agente

| Campo              | Tipo           |
| ------------------ | -------------- |
| Modelo padrão      | Select         |
| Temperatura padrão | Decimal        |
| Context Window     | Número         |
| Max Tokens         | Número         |
| Prompt Base        | Relacionamento |

---

# Gestão de Prompts

Um dos módulos mais importantes.

---

# Fluxos

## Listagem de Prompts

Filtros

* Código
* Nome
* Modelo
* Agente
* Status
* Versão

Ações

* Visualizar
* Editar
* Duplicar
* Versionar
* Arquivar

---

# Cadastro de Prompt

## Informações Gerais

| Campo     | Tipo                  |
| --------- | --------------------- |
| ID        | UUID                  |
| Código    | String Única          |
| Nome      | Texto                 |
| Descrição | Texto                 |
| Categoria | Select                |
| Versão    | Número                |
| Status    | Draft/Ativo/Arquivado |

---

## Configuração de Modelo

| Campo             | Tipo    |
| ----------------- | ------- |
| Provider          | Select  |
| Model             | Select  |
| Temperatura       | Decimal |
| Top P             | Decimal |
| Frequency Penalty | Decimal |
| Presence Penalty  | Decimal |
| Max Tokens        | Número  |
| Seed              | Número  |

---

## Contexto

| Campo          | Tipo    |
| -------------- | ------- |
| Context Window | Número  |
| Memória Curta  | Sim/Não |
| Memória Longa  | Sim/Não |
| Knowledge Base | Select  |

---

## Template de Entrada

Editor

Exemplo:

```text
Você é um especialista em análise.

Dados recebidos:

{{dados}}
```

Suporte:

* Variáveis
* JSON
* Markdown
* XML

---

## Template de Saída

Exemplo:

```json
{
  "titulo": "",
  "descricao": "",
  "acoes": []
}
```

Validações:

* JSON Schema
* XML Schema
* Texto Livre

---

## Ferramentas Associadas

Relacionamentos:

* APIs
* MCP Servers
* Web Search
* Banco de Dados
* Vector DB
* Integrações

---

# Visualização de Prompt

Abas:

## Dados Gerais

## Entrada

Visualização renderizada

## Saída

Visualização renderizada

## Histórico

Versões

## Auditoria

Logs

---

# Execuções

Permite monitorar cada execução.

---

## Listagem

Filtros

* Data
* Prompt
* Modelo
* Tenant
* Status

---

## Detalhe da Execução

### Identificação

| Campo        | Tipo    |
| ------------ | ------- |
| Execution ID | UUID    |
| Prompt ID    | UUID    |
| Tenant       | Tenant  |
| Usuário      | Usuário |

---

### Configuração Utilizada

* Modelo
* Temperatura
* Tokens
* Ferramentas

---

### Entrada

Prompt final enviado ao modelo

---

### Saída

Resposta retornada

---

### Métricas

| Campo          |
| -------------- |
| Input Tokens   |
| Output Tokens  |
| Total Tokens   |
| Latência       |
| Tempo Execução |
| Custo          |

---

### Logs

* Eventos
* Ferramentas chamadas
* Erros
* Retry

---

# Modelos IA

Cadastro centralizado.

Campos:

| Campo          | Tipo    |
| -------------- | ------- |
| Nome           | Texto   |
| Provider       | Select  |
| Código         | Texto   |
| Context Window | Número  |
| Max Output     | Número  |
| Custo Input    | Decimal |
| Custo Output   | Decimal |

---

# Auditoria

## Logs Globais

Registro de:

* Login
* Logout
* Alterações
* Exclusões
* Configurações
* IA

---

# Permissões do Superadministrador

Perfis:

### Super Admin Master

Controle total da plataforma.

### Super Admin Operacional

Operação diária.

### Super Admin IA

Gestão de agentes e prompts.

### Super Admin Financeiro

Billing e cobrança.

### Super Admin Auditor

Somente leitura.

---

# Entidades Principais do Domínio

```text
SuperAdminUser
Tenant
TenantPlan
GlobalSettings

DocumentTemplate
EmailTemplate
NotificationTemplate

AiAgent
AiPrompt
AiPromptVersion

AiModel

AiExecution
AiExecutionLog

FeatureFlag

AuditLog

SystemConfiguration
```

---

# Resultado Esperado da Navegação Inicial

```text
Login
 └── Seleção Tenant
      ├── Global
      │     └── Dashboard SuperAdmin
      │            ├── Tenants
      │            ├── Configurações
      │            ├── Templates
      │            ├── IA
      │            │      ├── Agentes
      │            │      ├── Prompts
      │            │      ├── Execuções
      │            │      └── Modelos
      │            ├── Auditoria
      │            ├── Billing
      │            └── Feature Flags
      │
      └── Tenant Específico
             └── Operação Contextualizada


## Módulo: Gestão de Planos (Subscription Management)

A Gestão de Planos é responsável por controlar a comercialização, licenciamento, ativação de funcionalidades, limites operacionais e integração com cobrança.

O módulo deve ser totalmente integrado ao Stripe e ao mecanismo interno de Feature Flags, Licenciamento e Controle de Consumo.

---

# Estrutura do Menu

```text
Superadministrador
 ├── Dashboard
 ├── Tenants
 ├── Planos
 │     ├── Planos
 │     ├── Produtos Stripe
 │     ├── Assinaturas
 │     ├── Cobranças
 │     ├── URLs de Pagamento
 │     └── Histórico
 ├── Funcionalidades
 ├── Perfis
 ├── Auditoria
 ├── Templates
 ├── IA
 └── Configurações
```

---

# Domínio: Gestão de Planos

## Objetivo

Definir:

* Produtos comercializados
* Funcionalidades habilitadas
* Limites de utilização
* Integração Stripe
* Preços
* Ciclos de cobrança
* Licenciamento

---

# Fluxos Obrigatórios

Todos os módulos devem possuir:

## Listagem

## Visualização

## Detalhamento

## Inclusão

## Edição

## Exclusão Lógica

## Histórico

## Auditoria

---

# Entidade Plano

```text
Plan
```

## Campos

| Campo              | Tipo          |
| ------------------ | ------------- |
| Id                 | UUID          |
| Código             | String Única  |
| Nome               | Texto         |
| Descrição          | Texto         |
| Status             | Ativo/Inativo |
| Stripe Product ID  | String        |
| Stripe Price ID    | String        |
| Tipo Cobrança      | Mensal/Anual  |
| Valor              | Decimal       |
| Trial Dias         | Número        |
| Ordem Exibição     | Número        |
| Destaque Comercial | Boolean       |
| Criado Em          | Data          |
| Atualizado Em      | Data          |

---

# Tela: Listagem de Planos

## Filtros

* Código
* Nome
* Status
* Produto Stripe
* Data Criação

## Colunas

* Código
* Nome
* Valor
* Tipo Cobrança
* Produto Stripe
* Status

## Ações

* Visualizar
* Editar
* Duplicar
* Desativar
* Gerar Checkout
* Histórico

---

# Tela: Inclusão de Plano

## Seção Dados Gerais

Campos:

| Campo     | Tipo   |
| --------- | ------ |
| Nome      | Texto  |
| Código    | Texto  |
| Descrição | Texto  |
| Status    | Select |

---

## Seção Stripe

### Opção 1

Selecionar Produto Existente

Campo:

```text
Produto Stripe
```

Busca dinâmica dos produtos existentes.

---

### Opção 2

Criar Novo Produto Stripe

Ao salvar:

```text
Sistema
↓
Cria Produto Stripe
↓
Recebe Product ID
↓
Salva no Plano
```

---

# Preço

Campos

| Campo         | Tipo       |
| ------------- | ---------- |
| Valor         | Decimal    |
| Moeda         | Select     |
| Periodicidade | Mensal     |
| Periodicidade | Trimestral |
| Periodicidade | Semestral  |
| Periodicidade | Anual      |

Ao salvar:

```text
Criar Price Stripe
```

Retorno:

```text
Stripe Price ID
```

---

# URL de Pagamento

Botão:

```text
Gerar URL de Checkout
```

Fluxo:

```text
Plano
 ↓
Stripe Checkout Session
 ↓
URL Checkout
 ↓
Salvar Histórico
```

Campos:

| Campo          | Tipo    |
| -------------- | ------- |
| URL            | Texto   |
| Data Expiração | Data    |
| Status         | Ativo   |
| Utilizada      | Sim/Não |

---

# Funcionalidades do Plano

## Conceito

O plano não habilita módulos.

O plano habilita funcionalidades específicas.

---

# Gestão de Funcionalidades

Novo domínio:

```text
Feature Management
```

---

# Estrutura

```text
Sistema
 └── Domínio
      └── Módulo
           └── Funcionalidade
```

---

# Exemplo

```text
Financeiro
 └── Contas a Receber
      ├── Criar Conta
      ├── Editar Conta
      ├── Excluir Conta
      ├── Exportar Conta
```

---

# Cadastro de Funcionalidade

## Entidade

```text
Feature
```

---

## Dados Básicos

| Campo     | Tipo   |
| --------- | ------ |
| Id        | UUID   |
| Código    | String |
| Nome      | Texto  |
| Descrição | Texto  |
| Domínio   | Select |
| Módulo    | Select |
| Categoria | Select |

---

## Navegação

| Campo         | Tipo  |
| ------------- | ----- |
| Menu          | Texto |
| Submenu       | Texto |
| Tela          | Texto |
| Rota Frontend | Texto |

---

## Backend

| Campo        | Tipo   |
| ------------ | ------ |
| Endpoint     | Texto  |
| Método HTTP  | Select |
| Serviço      | Texto  |
| Microserviço | Texto  |

---

## Segurança

| Campo                 | Tipo    |
| --------------------- | ------- |
| Requer Login          | Sim/Não |
| Requer Permissão      | Sim/Não |
| Auditoria Obrigatória | Sim/Não |

---

# Limites por Funcionalidade

Cada funcionalidade pode possuir limites.

---

## Exemplo

```text
Clientes
```

Limites:

| Tipo                | Valor |
| ------------------- | ----- |
| Registros           | 1000  |
| Inclusões por Dia   | 100   |
| Exportações por Dia | 20    |

---

```text
Usuários
```

| Tipo            | Valor |
| --------------- | ----- |
| Máximo Usuários | 50    |

---

```text
IA
```

| Tipo         | Valor     |
| ------------ | --------- |
| Tokens Mês   | 1.000.000 |
| Chamadas API | 50.000    |

---

# Associação Plano x Funcionalidade

Tabela:

```text
PlanFeature
```

---

Campos

| Campo            | Tipo |
| ---------------- | ---- |
| Plano            |      |
| Funcionalidade   |      |
| Limite Registros |      |
| Limite Operações |      |
| Limite Usuários  |      |
| Limite Tokens    |      |
| Habilitada       |      |

---

# Gestão de Perfis

Novo domínio:

```text
Identity & Access Management
```

---

# Entidade

```text
Profile
```

---

# Fluxos

* Listagem
* Visualização
* Inclusão
* Edição
* Histórico
* Auditoria

---

# Cadastro de Perfil

## Dados Gerais

| Campo     | Tipo          |
| --------- | ------------- |
| Nome      | Texto         |
| Código    | Texto         |
| Descrição | Texto         |
| Status    | Ativo/Inativo |

---

# Escopo

| Campo   | Tipo    |
| ------- | ------- |
| Global  | Sim/Não |
| Tenant  | Sim/Não |
| Empresa | Sim/Não |
| Filial  | Sim/Não |

---

# Permissões Estruturadas

## Domínios

Exemplo

```text
Financeiro
RH
CRM
IA
SuperAdmin
```

---

## Menus

```text
Dashboard
Clientes
Usuários
Configurações
```

---

## Telas

```text
Listagem
Detalhamento
Inclusão
Edição
```

---

## Ações

```text
Visualizar
Criar
Editar
Excluir
Exportar
Importar
Aprovar
Cancelar
```

---

## Eventos

```text
LOGIN
LOGOUT
CREATE
UPDATE
DELETE
EXPORT
IMPORT
```

---

## Endpoints

Controle fino:

```text
GET /api/clientes

POST /api/clientes

PUT /api/clientes/{id}

DELETE /api/clientes/{id}
```

---

# Matriz de Permissões

Modelo RBAC Expandido

```text
Perfil
 ↓
Domínio
 ↓
Menu
 ↓
Tela
 ↓
Ação
 ↓
Endpoint
```

---

# Auditoria Avançada

Novo domínio:

```text
Audit Management
```

---

# Objetivo

Determinar:

* O que auditar
* Quando auditar
* Nível de log
* Retenção

---

# Configuração de Auditoria

## Entidade

```text
AuditConfiguration
```

---

## Escopo

| Campo          | Tipo   |
| -------------- | ------ |
| Domínio        | Select |
| Módulo         | Select |
| Funcionalidade | Select |
| Tela           | Select |
| Evento         | Select |

---

# Níveis de Log

```text
TRACE
DEBUG
INFO
WARNING
ERROR
CRITICAL
```

---

# Configuração por Tela

Exemplo

```text
Financeiro
 └── Contas Receber
      └── Tela Inclusão
```

Eventos:

* Abriu Tela
* Salvou
* Editou
* Excluiu
* Exportou

Nível:

```text
INFO
```

---

# Configuração por Ação

Exemplo

```text
Excluir Cliente
```

Nível:

```text
ERROR
```

---

# Configuração por Evento

Exemplo

```text
Login
```

Nível:

```text
INFO
```

```text
Tentativa Login Inválido
```

Nível:

```text
WARNING
```

---

# Logs Capturados

Cada log deve armazenar:

| Campo           |
| --------------- |
| Id              |
| Tenant          |
| Usuário         |
| Perfil          |
| Domínio         |
| Módulo          |
| Funcionalidade  |
| Tela            |
| Ação            |
| Evento          |
| Endpoint        |
| Método HTTP     |
| Payload Entrada |
| Payload Saída   |
| IP              |
| Navegador       |
| Data Hora       |

---

# Estrutura Completa das Novas Entidades

```text
Plan

PlanFeature

Feature

FeatureLimit

Profile

ProfilePermission

Domain

Module

Menu

Screen

Action

Endpoint

AuditConfiguration

AuditEvent

AuditLog

StripeProduct

StripePrice

StripeCheckoutSession
```

---

# Resultado Arquitetural

Com essa expansão, o Superadministrador passa a controlar centralmente:

* Catálogo de produtos e planos
* Integração Stripe
* Feature Flags e licenciamento
* Controle de limites operacionais
* Gestão completa de funcionalidades
* Gestão completa de perfis e permissões
* Controle de menus, telas, ações e endpoints
* Auditoria configurável por domínio, módulo, funcionalidade, tela e evento
* Governança global de todos os tenants da plataforma


# Expansão do Domínio Superadministrador — Escopo Global e Escopo Tenant

Essa funcionalidade transforma o Superadministrador em uma central de operação multi-tenant, permitindo que um operador alterne entre o contexto global da plataforma e o contexto operacional de qualquer tenant sem necessidade de novo login.

---

# Conceito de Escopo de Acesso

Após autenticação, o usuário possui um contexto de trabalho ativo.

## Escopos Disponíveis

### Escopo Global

Representa toda a plataforma.

Permite:

* Gestão de tenants
* Gestão de planos
* Gestão de produtos Stripe
* Gestão de funcionalidades
* Gestão de perfis
* Gestão de IA
* Gestão de templates
* Gestão de auditoria
* Gestão de billing
* Configurações globais

---

### Escopo Tenant

Representa um tenant específico.

Permite:

* Visualizar o tenant como administrador
* Configurar o tenant
* Gerenciar usuários
* Gerenciar empresas
* Gerenciar filiais
* Consultar dashboards
* Consultar consumo
* Consultar auditoria
* Configurar módulos

---

# Troca de Escopo

## Componente Global

Localização:

```text
Header Superior
```

Exemplo:

```text
[ Global ▼ ]
```

ou

```text
[ Tenant XPTO ▼ ]
```

---

## Modal de Troca de Escopo

Filtros:

* Nome Tenant
* Código
* Status
* Plano

Lista:

```text
Global

Tenant A

Tenant B

Tenant C
```

---

## Permissões

Nem todo superadministrador pode acessar todos os tenants.

Campos:

| Campo                  | Tipo    |
| ---------------------- | ------- |
| Pode acessar Global    | Sim/Não |
| Pode acessar Tenants   | Sim/Não |
| Pode Impersonar Tenant | Sim/Não |
| Pode Editar Tenant     | Sim/Não |

---

# Dashboard do Tenant

Quando o superadministrador entra em um tenant:

```text
Global
 ↓
Selecionar Tenant
 ↓
Dashboard Tenant
```

---

# Dashboard Tenant

## Indicadores

### Usuários

* Total Usuários
* Usuários Ativos
* Usuários Bloqueados
* Últimos Acessos

---

### Empresas

* Empresas Ativas
* Empresas Bloqueadas

---

### Filiais

* Total Filiais
* Filiais Ativas

---

### IA

* Tokens Consumidos
* Chamadas Executadas
* Agentes Ativos

---

### Operação

* Registros Criados
* Notificações
* Integrações

---

# Administração do Tenant

Novo submenu:

```text
Tenant
 ├── Dashboard
 ├── Configurações
 ├── Usuários
 ├── Empresas
 ├── Filiais
 ├── Auditoria
 ├── Consumo
 └── Assinatura
```

---

# Gestão de Usuários do Tenant

## Fluxos

* Listagem
* Visualização
* Detalhamento
* Inclusão
* Edição
* Bloqueio
* Ativação
* Reset de Senha
* Reenvio de Convite

---

# Tela de Usuários

Filtros:

* Nome
* E-mail
* Status
* Perfil

---

## Colunas

* Nome
* E-mail
* Perfil
* Status
* Último Login

---

## Ações

### Visualizar

Exibe:

* Dados cadastrais
* Perfis
* Permissões
* Empresas vinculadas
* Filiais vinculadas
* Histórico

---

### Bloquear

Altera status:

```text
Ativo
↓
Bloqueado
```

---

### Ativar

```text
Bloqueado
↓
Ativo
```

---

### Reenviar Alteração de Senha

Fluxo:

```text
Usuário
 ↓
Gerar Token
 ↓
Enviar E-mail
 ↓
Registrar Auditoria
```

---

### Reenviar Convite

Fluxo:

```text
Usuário
 ↓
Gerar Novo Convite
 ↓
Enviar E-mail
```

---

# Dados do Usuário

## Informações Gerais

| Campo        | Tipo |
| ------------ | ---- |
| Nome         |      |
| E-mail       |      |
| Telefone     |      |
| Status       |      |
| Último Login |      |
| Data Criação |      |

---

## Segurança

| Campo                | Tipo |
| -------------------- | ---- |
| MFA Ativado          |      |
| Senha Expirada       |      |
| Conta Bloqueada      |      |
| Tentativas Inválidas |      |

---

# Configurações do Tenant

## Dados Gerais

* Nome
* Razão Social
* Documento
* Domínio
* Subdomínio

---

## Configurações Operacionais

* Idioma
* Fuso Horário
* Moeda

---

## Configurações de IA

* Modelo padrão
* Limite de tokens

---

## Configurações de E-mail

* SMTP
* Remetente padrão

---

# Evolução da Gestão de Planos

## Tipo do Plano

Novo campo obrigatório.

| Campo      | Tipo                  |
| ---------- | --------------------- |
| Tipo Plano | Pessoal / Empresarial |

---

# Plano Pessoal

Voltado para:

* Pessoa Física
* Profissionais Autônomos
* Consultores

---

## Limites

| Recurso  | Limite |
| -------- | ------ |
| Usuários | 1      |
| Empresas | 1      |
| Filiais  | 0      |
| Equipes  | 0      |

---

# Plano Empresarial

Voltado para:

* Empresas
* Franquias
* Redes
* Grupos Econômicos

---

## Limites Configuráveis

| Campo              | Tipo |
| ------------------ | ---- |
| Máximo Usuários    |      |
| Máximo Empresas    |      |
| Máximo Filiais     |      |
| Máximo Equipes     |      |
| Máximo Perfis      |      |
| Máximo Integrações |      |

---

# Seção Estrutura Organizacional

Nova seção do cadastro de plano.

## Empresas

| Campo               | Tipo |
| ------------------- | ---- |
| Empresas Permitidas |      |
| Empresas Ilimitadas |      |

---

## Filiais

| Campo              | Tipo |
| ------------------ | ---- |
| Filiais Permitidas |      |
| Filiais Ilimitadas |      |

---

## Usuários

| Campo               | Tipo |
| ------------------- | ---- |
| Usuários Permitidos |      |
| Usuários Ilimitados |      |

---

# Regras de Validação

## Empresas

```text
Plano permite 3 empresas
Tenant possui 3 empresas

Nova inclusão
↓
Bloquear operação
```

---

## Filiais

```text
Plano permite 50 filiais

Tenant possui 50

Nova inclusão
↓
Bloquear
```

---

## Usuários

```text
Plano permite 100 usuários

Tenant possui 100

Novo usuário
↓
Bloquear inclusão
```

---

# Assinatura do Tenant

Cada tenant possui uma assinatura vinculada.

## Dados

| Campo                  | Tipo |
| ---------------------- | ---- |
| Plano Atual            |      |
| Stripe Customer ID     |      |
| Stripe Subscription ID |      |
| Próxima Cobrança       |      |
| Status Assinatura      |      |

---

## Histórico

* Alteração de Plano
* Upgrade
* Downgrade
* Cancelamento
* Renovação

---

# Novo Modelo de Navegação do Superadministrador

```text
Superadministrador
│
├── Alternador de Escopo
│     ├── Global
│     └── Tenant
│
├── Dashboard Global
├── Tenants
│     ├── Dashboard Tenant
│     ├── Usuários
│     ├── Empresas
│     ├── Filiais
│     ├── Auditoria
│     ├── Consumo
│     └── Assinatura
│
├── Planos
│     ├── Pessoal
│     ├── Empresarial
│     ├── Produtos Stripe
│     ├── Assinaturas
│     └── Checkout
│
├── Funcionalidades
├── Perfis
├── IA
├── Templates
├── Auditoria
├── Billing
└── Configurações Globais
```

Com essa evolução, o Superadministrador passa a operar em dois níveis distintos:

1. **Control Plane Global** (administração da plataforma inteira).
2. **Tenant Administration Plane** (administração completa de qualquer tenant individual).

Isso elimina a necessidade de múltiplos acessos administrativos e fornece uma visão centralizada de governança, billing, licenciamento, usuários, empresas, filiais, funcionalidades e consumo para toda a plataforma.


# Domínio Superadministrador — Módulo LGPD (Governança de Privacidade e Proteção de Dados)

O módulo **LGPD** é responsável pela gestão centralizada de todos os documentos legais, termos, consentimentos, políticas e registros relacionados à conformidade com a Lei Geral de Proteção de Dados.

Este módulo deve ser administrado exclusivamente pelo Superadministrador e disponibilizar documentos globais para todos os tenants ou documentos específicos por tenant.

---

# Estrutura do Menu

```text
Superadministrador
 ├── Dashboard
 ├── Tenants
 ├── Planos
 ├── Funcionalidades
 ├── Perfis
 ├── Auditoria
 ├── LGPD
 │     ├── Dashboard LGPD
 │     ├── Documentos
 │     ├── Versões
 │     ├── Consentimentos
 │     ├── Finalidades
 │     ├── Bases Legais
 │     ├── Solicitações do Titular
 │     ├── Configurações
 │     └── Auditoria LGPD
 ├── IA
 ├── Templates
 └── Configurações
```

---

# Objetivos do Módulo

Permitir:

* Gestão de documentos LGPD
* Gestão de versões
* Publicação controlada
* Histórico completo
* Controle de aceite
* Registro de consentimentos
* Auditoria legal
* Gestão de retenção de dados
* Gestão de solicitações dos titulares

---

# Dashboard LGPD

## Indicadores

### Documentos

* Total de documentos
* Documentos publicados
* Documentos em revisão
* Documentos expirados

### Consentimentos

* Consentimentos ativos
* Consentimentos revogados

### Solicitações

* Solicitações abertas
* Solicitações concluídas
* Solicitações pendentes

### Auditoria

* Alterações realizadas
* Novas versões publicadas

---

# Gestão de Documentos LGPD

## Fluxos Obrigatórios

Todos os documentos devem possuir:

* Listagem
* Visualização
* Detalhamento
* Inclusão
* Edição
* Versionamento
* Publicação
* Arquivamento
* Histórico
* Auditoria

---

# Tipos de Documentos

O sistema deve vir com os tipos padrão já cadastrados.

## Política de Privacidade

```text
PRIVACY_POLICY
```

---

## Termos de Uso

```text
TERMS_OF_USE
```

---

## Política de Cookies

```text
COOKIE_POLICY
```

---

## Política de Segurança

```text
SECURITY_POLICY
```

---

## Consentimento de Marketing

```text
MARKETING_CONSENT
```

---

## Consentimento de Tratamento de Dados

```text
DATA_PROCESSING_CONSENT
```

---

## Contrato de Processamento de Dados

```text
DPA
```

---

## Política de Retenção de Dados

```text
DATA_RETENTION_POLICY
```

---

## Código de Conduta

```text
CODE_OF_CONDUCT
```

---

## Documento Personalizado

```text
CUSTOM_DOCUMENT
```

---

# Entidade Principal

```text
LgpdDocument
```

---

# Campos do Documento

## Identificação

| Campo          | Tipo                      |
| -------------- | ------------------------- |
| Id             | UUID                      |
| Código         | String Única              |
| Nome           | Texto                     |
| Tipo Documento | Select                    |
| Categoria      | Select                    |
| Status         | Draft/Publicado/Arquivado |
| Versão         | Texto                     |
| Tenant         | Opcional                  |
| Global         | Sim/Não                   |

---

## Controle

| Campo                 | Tipo    |
| --------------------- | ------- |
| Data Publicação       | Data    |
| Data Expiração        | Data    |
| Exigir Aceite         | Sim/Não |
| Aceite Obrigatório    | Sim/Não |
| Requer Nova Aceitação | Sim/Não |

---

## Conteúdo

| Campo       | Tipo  |
| ----------- | ----- |
| HTML        | HTML  |
| Texto Puro  | Texto |
| Observações | Texto |

---

# Tela de Listagem

## Filtros

* Código
* Nome
* Tipo
* Status
* Tenant
* Versão

---

## Colunas

* Código
* Nome
* Tipo
* Versão
* Status
* Publicação

---

## Ações

* Visualizar
* Detalhar
* Editar
* Duplicar
* Publicar
* Arquivar
* Histórico

---

# Tela de Visualização

Modo somente leitura.

Abas:

```text
Dados Gerais

Conteúdo

Versões

Aceites

Auditoria
```

---

# Tela de Inclusão

## Seção Dados Gerais

Campos básicos.

---

## Seção Conteúdo

Editor HTML.

---

## Seção Configurações

Configurações de aceite.

---

# Tela de Edição

Permite alterar:

* Metadados
* HTML
* Configurações
* Regras de aceite

Sempre gerando auditoria.

---

# Componente HTML Editor

## Objetivo

Permitir criação visual e técnica de documentos.

---

# Componente

```text
HtmlEditor
```

---

# Funcionalidades

## Modo Visual

Editor WYSIWYG

Botões:

```text
Negrito

Itálico

Sublinhado

Títulos

Listas

Tabelas

Links

Imagens

Vídeos

Anexos
```

---

## Modo Código

Editor HTML completo.

Exemplo:

```html
<h1>Política de Privacidade</h1>

<p>
Texto da política.
</p>
```

---

## Modo Split

```text
HTML | Preview
```

Visualização simultânea.

---

# Componente HTML Preview

## Objetivo

Renderizar exatamente como será exibido.

Componente:

```text
HtmlRenderer
```

---

## Funcionalidades

### Renderização Segura

Permitir:

```html
<h1>
<h2>
<p>
<ul>
<li>
<table>
<img>
<a>
```

---

### Sanitização

Bloquear:

```html
<script>
```

```html
<iframe não autorizado>
```

```html
javascript:
```

---

### Preview Responsivo

Visualizações:

```text
Desktop

Tablet

Mobile
```

---

# Versionamento

Toda edição gera versão.

---

# Entidade

```text
LgpdDocumentVersion
```

---

## Campos

| Campo     |
| --------- |
| Id        |
| Documento |
| Versão    |
| HTML      |
| Publicada |
| Data      |
| Usuário   |

---

# Histórico

Permite comparar versões.

Exemplo:

```text
Versão 1.0

Versão 1.1

Versão 2.0
```

---

## Comparação

Mostrar:

```text
Texto removido

Texto adicionado

Texto alterado
```

---

# Controle de Aceite

## Entidade

```text
LgpdAcceptance
```

---

## Registro

| Campo     |
| --------- |
| Usuário   |
| Documento |
| Versão    |
| Data      |
| IP        |
| Navegador |
| Tenant    |

---

# Configurações de Aceite

## Obrigatório no Login

```text
Sim/Não
```

---

## Obrigatório no Cadastro

```text
Sim/Não
```

---

## Obrigatório na Renovação

```text
Sim/Não
```

---

# Solicitações do Titular

Submódulo LGPD.

---

## Tipos

### Acesso aos Dados

```text
DATA_ACCESS
```

---

### Correção

```text
DATA_CORRECTION
```

---

### Exclusão

```text
DATA_DELETION
```

---

### Portabilidade

```text
DATA_PORTABILITY
```

---

### Revogação Consentimento

```text
CONSENT_WITHDRAWAL
```

---

# Configuração por Tenant

Os documentos podem ser:

## Globais

Disponíveis para todos os tenants.

---

## Tenant-Specific

Documentos personalizados.

Exemplo:

```text
Tenant A
Política própria

Tenant B
Política própria
```

---

# Auditoria LGPD

Todas as ações devem ser registradas.

Eventos:

```text
DOCUMENT_CREATED

DOCUMENT_UPDATED

DOCUMENT_PUBLISHED

DOCUMENT_ARCHIVED

DOCUMENT_ACCEPTED

DOCUMENT_REJECTED

VERSION_CREATED

VERSION_RESTORED
```

---

# Permissões

Novo conjunto de permissões.

```text
LGPD_VIEW

LGPD_CREATE

LGPD_EDIT

LGPD_PUBLISH

LGPD_ARCHIVE

LGPD_AUDIT

LGPD_MANAGE_ACCEPTANCE
```

---

# Estrutura de Entidades

```text
LgpdDocument

LgpdDocumentVersion

LgpdAcceptance

LgpdCategory

LgpdPurpose

LgpdLegalBasis

LgpdRequest

LgpdRequestHistory

LgpdConfiguration

LgpdAuditLog
```

---

# Componentes Compartilhados da Plataforma

Além do módulo LGPD, os componentes abaixo devem ser reutilizáveis por todo o sistema:

```text
HtmlEditor

HtmlRenderer

HtmlPreview

HtmlSanitizer

VersionComparisonViewer
```

Esses componentes também poderão ser reutilizados posteriormente nos módulos de Templates de E-mail, Templates de Notificação, Templates de Documentos, Base de Conhecimento, Central de Ajuda, CMS, Landing Pages, Contratos Digitais e qualquer funcionalidade que necessite edição e renderização avançada de HTML.



# Domínio Superadministrador — Módulo de Assinaturas (Subscription Management)

O módulo **Assinaturas** é responsável pela gestão completa do ciclo de vida comercial e financeiro dos tenants, incluindo integração bidirecional com Stripe, monitoramento operacional, análise estratégica, upgrades, downgrades, faturamento, inadimplência e indicadores executivos da plataforma.

Este módulo é uma evolução da Gestão de Planos e funciona como a camada operacional das assinaturas efetivamente contratadas pelos tenants.

---

# Estrutura do Menu

```text
Superadministrador
 ├── Dashboard Global
 ├── Tenants
 ├── Planos
 ├── Assinaturas
 │     ├── Dashboard
 │     ├── Assinaturas
 │     ├── Pagamentos
 │     ├── Inadimplência
 │     ├── Upgrades e Downgrades
 │     ├── Cobranças
 │     ├── Relatórios
 │     ├── Stripe Sync
 │     └── Auditoria
 ├── Billing
 ├── Auditoria
 └── Configurações
```

---

# Objetivos

Permitir:

* Monitorar assinaturas ativas
* Monitorar assinaturas canceladas
* Monitorar inadimplência
* Visualizar pagamentos
* Controlar upgrades e downgrades
* Integrar com Stripe
* Emitir relatórios financeiros
* Analisar métricas estratégicas
* Identificar churn
* Identificar expansão de receita

---

# Dashboard de Assinaturas

## Objetivo

Fornecer uma visão executiva da saúde financeira da plataforma.

---

# Dashboard Executivo

## KPIs Financeiros

### Receita

| Indicador                       |
| ------------------------------- |
| MRR (Monthly Recurring Revenue) |
| ARR (Annual Recurring Revenue)  |
| Receita Total                   |
| Receita Prevista                |
| Receita Recebida                |
| Receita Pendente                |
| Receita Perdida                 |

---

### Assinaturas

| Indicador                 |
| ------------------------- |
| Total Assinaturas         |
| Assinaturas Ativas        |
| Assinaturas Trial         |
| Assinaturas Suspensas     |
| Assinaturas Canceladas    |
| Assinaturas Inadimplentes |

---

### Crescimento

| Indicador             |
| --------------------- |
| Novos Clientes        |
| Upgrades              |
| Downgrades            |
| Cancelamentos         |
| Churn Rate            |
| Net Revenue Retention |

---

### Stripe

| Indicador              |
| ---------------------- |
| Clientes Stripe        |
| Assinaturas Stripe     |
| Cobranças Falhadas     |
| Pagamentos Pendentes   |
| Pagamentos Confirmados |

---

# Filtros Globais

Todos os dashboards devem suportar:

## Tenant

```text
Tenant específico
Múltiplos tenants
Todos os tenants
```

---

## Status

```text
Ativo

Trial

Suspenso

Cancelado

Inadimplente
```

---

## Período

```text
Hoje

Últimos 7 dias

Últimos 30 dias

Últimos 90 dias

Ano Atual

Personalizado
```

---

## Produto

```text
Produto Stripe
Plano
Categoria
```

---

## Preço

```text
Faixa de Valor
```

Exemplo:

```text
0 a 99

100 a 499

500 a 999

1000+
```

---

## Tipo de Pessoa

```text
Pessoa Física

Pessoa Jurídica
```

---

## Tipo de Plano

```text
Pessoal

Empresarial
```

---

# Componentes do Dashboard

## Receita por Mês

Gráfico temporal.

---

## Assinaturas por Status

Gráfico de pizza.

---

## Crescimento de Assinaturas

Gráfico de linha.

---

## Receita por Plano

Gráfico de barras.

---

## Receita por Produto Stripe

Gráfico de barras.

---

## Assinaturas por Tipo de Pessoa

```text
Pessoa Física

Pessoa Jurídica
```

---

## Top Tenants

Classificação por:

* Receita
* Usuários
* Consumo
* Crescimento

---

## Inadimplência

Indicadores:

* Valor em aberto
* Quantidade de clientes
* Dias médios em atraso

---

# Gestão de Assinaturas

## Fluxos Obrigatórios

* Listagem
* Visualização
* Detalhamento
* Histórico
* Relatórios
* Sincronização Stripe

---

# Tela de Listagem

## Filtros

### Tenant

### Plano

### Produto Stripe

### Status

### Tipo Pessoa

### Data Contratação

### Próximo Vencimento

### Faixa de Valor

---

# Colunas

| Campo               |
| ------------------- |
| Tenant              |
| Plano               |
| Tipo Pessoa         |
| Status              |
| Valor               |
| Próximo Pagamento   |
| Stripe Subscription |
| Data Contratação    |

---

# Status da Assinatura

```text
TRIAL

ACTIVE

PAST_DUE

UNPAID

SUSPENDED

CANCELED

EXPIRED
```

---

# Ações

* Visualizar
* Detalhar
* Histórico
* Ver Pagamentos
* Ver Stripe
* Ver Upgrade
* Ver Downgrade
* Exportar

---

# Detalhamento da Assinatura

## Aba Geral

### Tenant

Dados completos.

---

### Contratação

| Campo            |
| ---------------- |
| Data Contratação |
| Data Renovação   |
| Data Vencimento  |
| Ciclo            |
| Status           |

---

### Plano

| Campo          |
| -------------- |
| Plano          |
| Produto Stripe |
| Price Stripe   |
| Valor          |

---

### Stripe

| Campo           |
| --------------- |
| Customer ID     |
| Subscription ID |
| Checkout ID     |
| Invoice ID      |
| Payment Method  |

---

# Aba Financeira

## Resumo

| Campo             |
| ----------------- |
| Total Pago        |
| Total Pendente    |
| Total Estornado   |
| Receita Acumulada |

---

# Aba Consumo

Dados do tenant:

* Usuários
* Empresas
* Filiais
* Tokens IA
* Armazenamento
* Funcionalidades utilizadas

---

# Aba Histórico

Eventos:

```text
Criação

Renovação

Pagamento

Upgrade

Downgrade

Cancelamento

Reativação
```

---

# Gestão de Pagamentos

## Tela de Pagamentos

Filtros:

* Tenant
* Status
* Período
* Plano

---

# Status Pagamento

```text
PAGO

PENDENTE

ATRASADO

ESTORNADO

CANCELADO

FALHOU
```

---

# Colunas

| Campo          |
| -------------- |
| Tenant         |
| Valor          |
| Data           |
| Método         |
| Status         |
| Invoice Stripe |

---

# Detalhamento do Pagamento

## Dados Financeiros

| Campo    |
| -------- |
| Valor    |
| Desconto |
| Juros    |
| Multa    |
| Total    |

---

## Stripe

| Campo          |
| -------------- |
| Invoice ID     |
| Payment Intent |
| Charge ID      |
| Receipt URL    |

---

# Gestão de Inadimplência

## Dashboard

Indicadores:

* Quantidade inadimplentes
* Receita em atraso
* Tempo médio atraso

---

# Faixas

```text
1 a 15 dias

16 a 30 dias

31 a 60 dias

61 a 90 dias

90+
```

---

# Ações

* Notificar Tenant
* Gerar Checkout
* Reprocessar Cobrança
* Suspender Tenant
* Reativar Tenant

---

# Upgrades e Downgrades

## Objetivo

Controlar mudanças de plano.

---

# Eventos

```text
UPGRADE

DOWNGRADE
```

---

# Registro

## Antes

Plano atual.

---

## Depois

Plano novo.

---

## Impactos

* Valor
* Limites
* Usuários
* Empresas
* Filiais
* Funcionalidades

---

# Dashboard de Expansão

KPIs:

* Receita expandida
* Receita perdida
* Receita recuperada

---

# Relatórios

## Relatório de Assinaturas

Filtros:

* Tenant
* Plano
* Produto
* Status
* Período

---

## Relatório Financeiro

Filtros:

* Receita
* Pagamentos
* Inadimplência

---

## Relatório de Crescimento

Indicadores:

* Novos clientes
* Churn
* Upgrades
* Downgrades

---

## Relatório de Consumo

Indicadores:

* Usuários
* Empresas
* Filiais
* Tokens IA

---

# Integração Stripe

## Sincronização Automática

Webhooks:

```text
customer.created

customer.updated

customer.deleted

checkout.session.completed

invoice.created

invoice.paid

invoice.payment_failed

invoice.voided

subscription.created

subscription.updated

subscription.deleted
```

---

# Sincronização Manual

Tela:

```text
Stripe Sync
```

Ações:

* Sincronizar Clientes
* Sincronizar Produtos
* Sincronizar Preços
* Sincronizar Assinaturas
* Sincronizar Faturas
* Sincronizar Pagamentos

---

# Auditoria

Eventos auditados:

```text
SUBSCRIPTION_CREATED

SUBSCRIPTION_UPDATED

SUBSCRIPTION_CANCELED

SUBSCRIPTION_RENEWED

PAYMENT_RECEIVED

PAYMENT_FAILED

UPGRADE_EXECUTED

DOWNGRADE_EXECUTED

STRIPE_SYNC_EXECUTED
```

---

# Entidades do Domínio

```text
Subscription

SubscriptionHistory

SubscriptionUpgrade

SubscriptionDowngrade

SubscriptionUsage

Payment

Invoice

StripeCustomer

StripeSubscription

StripeInvoice

StripePaymentIntent

StripeCharge

StripeWebhook

BillingDashboard

RevenueMetric

ChurnMetric

SubscriptionReport
```

---

# Relacionamentos Principais

```text
Tenant
 └── Subscription
       ├── Plan
       ├── Payments
       ├── Invoices
       ├── Usage
       ├── Upgrades
       ├── Downgrades
       ├── Stripe Customer
       └── Stripe Subscription
```

O resultado é um módulo de **Subscription & Revenue Management Enterprise**, totalmente integrado ao Stripe, permitindo ao Superadministrador visualizar operacionalmente cada tenant e, simultaneamente, possuir uma camada executiva de análise de receita, crescimento, inadimplência, churn, upgrades, downgrades e expansão da plataforma SaaS.



# Domínio Superadministrador — Módulo Segurança (Security Management)

O módulo **Segurança** é o centro de governança, proteção, monitoramento, auditoria e conformidade de toda a plataforma SaaS Multi-Tenant.

Seu objetivo não é apenas configurar autenticação e permissões, mas administrar todas as políticas de segurança da plataforma, tenants, usuários, APIs, integrações, IA, dados, LGPD e infraestrutura.

---

# Estrutura do Menu

```text
Superadministrador
 ├── Segurança
 │
 ├── Dashboard Segurança
 │
 ├── Políticas de Segurança
 │
 ├── Autenticação
 │
 ├── Autorização
 │
 ├── MFA
 │
 ├── Sessões
 │
 ├── Dispositivos Confiáveis
 │
 ├── Controle de Acesso
 │
 ├── IPs Permitidos
 │
 ├── Geolocalização
 │
 ├── APIs e Tokens
 │
 ├── Segredos e Chaves
 │
 ├── Integrações
 │
 ├── Certificados
 │
 ├── Criptografia
 │
 ├── Auditoria
 │
 ├── SIEM
 │
 ├── Eventos de Segurança
 │
 ├── Detecção de Ameaças
 │
 ├── LGPD e Compliance
 │
 ├── Backup e Recuperação
 │
 ├── Retenção de Dados
 │
 ├── Segurança IA
 │
 ├── Incidentes
 │
 └── Relatórios
```

---

# Dashboard de Segurança

## Objetivo

Visão executiva da segurança da plataforma.

---

# Indicadores

## Autenticação

* Total de logins
* Logins falhos
* Logins bloqueados
* MFA habilitado
* MFA desabilitado

---

## Usuários

* Usuários ativos
* Usuários bloqueados
* Contas expiradas
* Contas privilegiadas

---

## APIs

* Tokens ativos
* Tokens expirados
* Chamadas API
* Falhas autenticação API

---

## Segurança

* Eventos críticos
* Alertas ativos
* Incidentes abertos
* Incidentes resolvidos

---

## Compliance

* Conformidade LGPD
* Pendências
* Consentimentos expirados

---

# Políticas de Segurança

## Fluxos

* Listar
* Visualizar
* Detalhar
* Incluir
* Alterar
* Versionar
* Publicar

---

# Entidade

```text
SecurityPolicy
```

---

# Campos

| Campo     | Tipo          |
| --------- | ------------- |
| Policy ID | UUID          |
| Código    | String        |
| Nome      | Texto         |
| Descrição | Texto         |
| Categoria | Select        |
| Escopo    | Global/Tenant |
| Status    | Ativo/Inativo |

---

# Categorias

```text
AUTHENTICATION

AUTHORIZATION

PASSWORD

SESSION

API

NETWORK

DATA

AI

LGPD

COMPLIANCE
```

---

# Autenticação

## Configurações

### Senha

| Campo                     |
| ------------------------- |
| Tamanho mínimo            |
| Tamanho máximo            |
| Exigir maiúscula          |
| Exigir minúscula          |
| Exigir número             |
| Exigir caractere especial |

---

### Expiração

| Campo                 |
| --------------------- |
| Dias validade senha   |
| Histórico senhas      |
| Bloqueio reutilização |

---

### Login

| Campo            |
| ---------------- |
| Máx tentativas   |
| Tempo bloqueio   |
| Login simultâneo |
| Sessão única     |

---

# MFA

## Métodos

```text
TOTP

SMS

E-mail

Authenticator

Passkey

FIDO2

WebAuthn
```

---

## Configurações

| Campo               |
| ------------------- |
| MFA obrigatório     |
| MFA administradores |
| MFA superadmin      |
| MFA por tenant      |

---

# Gestão de Sessões

## Sessões Ativas

Listagem:

* Usuário
* Tenant
* IP
* Navegador
* Sistema Operacional
* Localização
* Data Login

---

## Ações

* Encerrar sessão
* Encerrar todas
* Bloquear dispositivo

---

# Dispositivos Confiáveis

## Entidade

```text
TrustedDevice
```

---

## Campos

| Campo         |
| ------------- |
| Device ID     |
| Usuário       |
| Sistema       |
| Navegador     |
| Último acesso |

---

# Controle de Acesso

Modelo:

```text
RBAC + ABAC
```

---

# RBAC

Controle por:

* Perfil
* Função
* Grupo

---

# ABAC

Controle por:

* Tenant
* Empresa
* Filial
* Horário
* Localização
* IP
* Dispositivo

---

# Controle de IP

## Whitelist

Permitir acesso somente de IPs autorizados.

---

## Blacklist

Bloquear IPs.

---

## Campos

| Campo     |
| --------- |
| IP        |
| Descrição |
| Escopo    |
| Status    |

---

# Geolocalização

Permitir restrições por:

* País
* Estado
* Cidade

---

## Exemplo

```text
Permitir apenas Brasil
```

---

# APIs e Tokens

## API Keys

Fluxos:

* Listar
* Visualizar
* Criar
* Revogar

---

## Campos

| Campo     |
| --------- |
| API Key   |
| Tenant    |
| Escopo    |
| Expiração |

---

# OAuth

Suporte:

```text
OAuth2

OpenID Connect

JWT
```

---

# Segredos e Chaves

## Entidade

```text
SecretVault
```

---

## Armazenar

* API Keys
* Tokens
* Segredos
* Certificados
* Chaves IA

---

# Certificados

## Gestão

* SSL
* TLS
* Certificados Cliente

---

## Campos

| Campo     |
| --------- |
| Nome      |
| Emissor   |
| Validade  |
| Algoritmo |

---

# Criptografia

## Dados em Trânsito

Obrigatório:

```text
TLS 1.3
```

---

## Dados em Repouso

Obrigatório:

```text
AES-256
```

---

# Dados Sensíveis

Criptografar:

* CPF
* CNPJ
* Tokens
* Segredos
* Dados bancários

---

# Auditoria de Segurança

## Eventos

```text
LOGIN

LOGOUT

LOGIN_FAILURE

PASSWORD_CHANGE

PASSWORD_RESET

MFA_ENABLED

MFA_DISABLED

TOKEN_CREATED

TOKEN_REVOKED

PERMISSION_CHANGED

SECURITY_POLICY_CHANGED
```

---

# SIEM

Security Information and Event Management.

---

## Fontes

* Aplicação
* Banco
* API
* Infraestrutura
* IA

---

## Correlação

Detectar:

* Força bruta
* Escalação privilégio
* Login suspeito
* Vazamento credenciais

---

# Eventos de Segurança

## Severidade

```text
INFO

LOW

MEDIUM

HIGH

CRITICAL
```

---

# Detecção de Ameaças

## Casos

### Força Bruta

Múltiplos logins inválidos.

---

### Credential Stuffing

Tentativas massivas.

---

### Session Hijacking

Mudança suspeita de IP.

---

### Escalação de Privilégio

Alteração indevida de permissões.

---

### Token Abuse

Uso excessivo de APIs.

---

# Segurança de IA

Novo subdomínio.

---

# Objetivo

Proteger:

* Prompts
* Agentes
* Modelos
* Ferramentas
* Dados enviados à IA

---

# Configurações

## Prompt Protection

Detectar:

* Prompt Injection
* Jailbreak
* Data Leakage

---

## Output Protection

Bloquear:

* Dados sensíveis
* Segredos
* Informações restritas

---

# LGPD e Compliance

## Controles

* Consentimento
* Retenção
* Anonimização
* Exclusão

---

# Backup e Recuperação

## Configurações

| Campo      |
| ---------- |
| Frequência |
| Retenção   |
| Região     |

---

## Tipos

```text
FULL

INCREMENTAL

DIFFERENTIAL
```

---

# Plano de Recuperação

RPO:

```text
15 minutos
```

---

RTO:

```text
1 hora
```

---

# Incidentes

## Fluxos

* Listar
* Visualizar
* Registrar
* Atualizar
* Encerrar

---

# Severidade

```text
BAIXA

MÉDIA

ALTA

CRÍTICA
```

---

# Relatórios

## Segurança

* Logins
* MFA
* Sessões

---

## Compliance

* LGPD
* Auditoria
* Consentimentos

---

## APIs

* Consumo
* Erros
* Tokens

---

# Configurações Recomendadas para Ambiente Enterprise

## Obrigatórias

```text
TLS 1.3

AES-256

JWT Assinado

MFA Obrigatório

Passkeys

RBAC + ABAC

Rate Limiting

WAF

Anti-CSRF

CSP

XSS Protection

SQL Injection Protection

Segregação Multi-Tenant

Criptografia de Backups

SIEM

Auditoria Imutável

Logs Assinados

Segredos em Vault
```

---

# Entidades do Domínio Segurança

```text
SecurityPolicy

AuthenticationPolicy

PasswordPolicy

MfaPolicy

SessionPolicy

AccessPolicy

TrustedDevice

IpRule

GeoRule

ApiKey

OAuthClient

SecretVault

Certificate

EncryptionPolicy

SecurityEvent

SecurityIncident

ThreatDetectionRule

SecurityAuditLog

SecurityDashboard

ComplianceReport

BackupPolicy

RecoveryPolicy

AiSecurityPolicy
```

---

# Objetivo Arquitetural Final

O módulo Segurança torna-se o centro de governança de segurança da plataforma, controlando:

* Identidade
* Autenticação
* Autorização
* Sessões
* APIs
* Integrações
* Dados
* IA
* Compliance
* Auditoria
* Incidentes
* Monitoramento
* Backup
* Recuperação

garantindo um ambiente SaaS Multi-Tenant Enterprise com segurança de nível corporativo, rastreabilidade completa, segregação de tenants, proteção contra ameaças modernas e aderência a LGPD, auditoria e requisitos de conformidade.




# Regra Arquitetural Global — Modelo Universal de Escopo de Dados (Data Scope Management)

## Objetivo

Esta é uma das regras mais importantes da plataforma.

**Todo registro criado, alterado, consultado, listado, exportado, auditado ou excluído deve obrigatoriamente possuir um escopo de acesso associado.**

Nenhum dado pode existir sem contexto de escopo.

Essa regra garante:

* Isolamento Multi-Tenant
* Segurança
* Governança
* Controle de acesso
* Auditoria
* Compartilhamento controlado
* Escalabilidade empresarial
* Compatibilidade com matriz e filial

---

# Princípio Arquitetural

Todo registro da plataforma deve possuir metadados obrigatórios de escopo.

## Estrutura Base

```text
Entity
 ├── ScopeType
 ├── TenantId
 ├── CompanyId
 ├── BranchId
 ├── UserId
 ├── ProfileId
 └── VisibilityRule
```

---

# Entidade Universal

## ScopeContext

```text
ScopeContext
```

Campos:

| Campo         | Obrigatório |
| ------------- | ----------- |
| Scope Type    | Sim         |
| Tenant Id     | Dependente  |
| Company Id    | Dependente  |
| Branch Id     | Dependente  |
| User Id       | Dependente  |
| Profile Id    | Dependente  |
| Created Scope | Sim         |
| Current Scope | Sim         |

---

# Tipos de Escopo

## Global

```text
GLOBAL
```

Visível apenas para:

* Super Administrador

Exemplos:

* Planos
* Produtos Stripe
* Modelos IA Globais
* Configurações Globais

---

## Tenant

```text
TENANT
```

Visível para:

* Tenant inteiro

Exemplos:

* Configurações Tenant
* Templates Tenant
* Integrações Tenant

---

## Empresa

```text
COMPANY
```

Visível para:

* Usuários da empresa

Exemplos:

* Clientes
* Contratos
* Financeiro

---

## Filial

```text
BRANCH
```

Visível para:

* Usuários da filial

Exemplos:

* Estoque
* Vendas
* Atendimento

---

## Usuário

```text
USER
```

Visível somente para:

* Proprietário

Exemplos:

* Preferências
* Favoritos
* Rascunhos

---

## Perfil

```text
PROFILE
```

Visível para:

* Grupo específico

Exemplos:

* Dashboards
* Relatórios
* Configurações

---

# Hierarquia de Escopo

```text
GLOBAL
 └── TENANT
      └── COMPANY
           └── BRANCH
                └── PROFILE
                     └── USER
```

---

# Contexto de Login

Ao autenticar:

```text
Login
 ↓
Resolver Contexto
 ↓
Gerar ScopeContext
 ↓
Aplicar em toda requisição
```

---

# Exemplo

Usuário:

```text
Tenant:
TENANT_A

Empresa:
EMPRESA_1

Filial:
FILIAL_3

Perfil:
VENDEDOR

Usuário:
123
```

Contexto:

```json
{
  "scopeType": "BRANCH",
  "tenantId": "TENANT_A",
  "companyId": "EMPRESA_1",
  "branchId": "FILIAL_3",
  "profileId": "VENDEDOR",
  "userId": "123"
}
```

---

# Regra para Inclusão

Toda inclusão deve herdar automaticamente o escopo atual.

---

## Exemplo

Usuário cria cliente.

Sistema grava:

```json
{
  "id": "123",
  "nome": "Cliente A",
  "tenantId": "TENANT_A",
  "companyId": "EMPRESA_1",
  "branchId": "FILIAL_3",
  "scopeType": "BRANCH"
}
```

---

# Regra para Alteração

Ao alterar:

* Escopo original não pode ser alterado sem permissão especial.

---

Campos protegidos:

```text
TenantId
CompanyId
BranchId
ScopeType
```

---

# Regra para Exclusão

Antes da exclusão:

```text
Verificar Escopo
 ↓
Verificar Permissão
 ↓
Executar
```

---

# Regra para Listagem

Toda consulta deve aplicar filtro automático.

---

## Exemplo SQL

```sql
WHERE tenant_id = :tenantId
```

---

## Empresa

```sql
WHERE tenant_id = :tenantId
AND company_id = :companyId
```

---

## Filial

```sql
WHERE tenant_id = :tenantId
AND company_id = :companyId
AND branch_id = :branchId
```

---

# Regra para Detalhamento

Ao abrir um registro:

```text
Buscar Registro
 ↓
Validar Escopo
 ↓
Permitir Visualização
```

---

# Visibilidade por Perfil

## Superadministrador

Pode visualizar:

```text
GLOBAL
TENANT
COMPANY
BRANCH
PROFILE
USER
```

---

## Administrador Tenant

Pode visualizar:

```text
TENANT
COMPANY
BRANCH
PROFILE
USER
```

Somente dentro do tenant.

---

## Administrador Empresa

Pode visualizar:

```text
COMPANY
BRANCH
PROFILE
USER
```

Somente da empresa.

---

## Administrador Filial

Pode visualizar:

```text
BRANCH
PROFILE
USER
```

---

## Usuário Comum

Pode visualizar:

```text
USER
```

ou

```text
PROFILE
```

quando autorizado.

---

# Compartilhamento de Dados

Nem todo dado precisa ser restrito.

---

## Visibilidade

Campo:

```text
VisibilityRule
```

---

Valores:

```text
PRIVATE

PROFILE

BRANCH

COMPANY

TENANT

GLOBAL
```

---

# Exemplo

Documento criado por usuário.

```json
{
  "scopeType": "USER",
  "visibilityRule": "COMPANY"
}
```

Resultado:

* Proprietário pode editar.
* Empresa pode visualizar.

---

# Escopo em Auditoria

Todo log deve registrar:

```json
{
  "tenantId": "",
  "companyId": "",
  "branchId": "",
  "profileId": "",
  "userId": "",
  "scopeType": ""
}
```

---

# Escopo em APIs

Toda API recebe:

```http
X-Tenant-Id

X-Company-Id

X-Branch-Id

X-Profile-Id

X-User-Id
```

---

# Escopo em Eventos

Todo evento publicado:

```json
{
  "event": "CLIENT_CREATED",
  "tenantId": "",
  "companyId": "",
  "branchId": "",
  "userId": ""
}
```

---

# Escopo em IA

Prompts também possuem escopo.

Exemplo:

```text
GLOBAL
```

Prompt compartilhado para todos.

---

```text
TENANT
```

Prompt exclusivo.

---

```text
COMPANY
```

Prompt específico.

---

# Escopo em Documentos

Documentos podem ser:

```text
GLOBAL
```

Política LGPD Global.

---

```text
TENANT
```

Política do tenant.

---

```text
COMPANY
```

Contrato da empresa.

---

# Escopo em Templates

Templates podem existir em:

```text
GLOBAL
TENANT
COMPANY
```

---

# Escopo em Configurações

Toda configuração possui escopo.

Exemplo:

```text
SMTP
```

Pode existir:

```text
Global

Tenant

Empresa
```

---

# Entidade Base Obrigatória

Todas as tabelas da plataforma devem herdar:

```text
BaseScopedEntity
```

Campos obrigatórios:

```text
Id

ScopeType

TenantId

CompanyId

BranchId

ProfileId

UserId

VisibilityRule

CreatedBy

CreatedAt

UpdatedBy

UpdatedAt

DeletedBy

DeletedAt
```

---

# Middleware Universal de Escopo

Toda requisição passa por:

```text
Authentication
 ↓
Authorization
 ↓
Scope Resolution
 ↓
Scope Validation
 ↓
Business Logic
```

---

# Regra Arquitetural Obrigatória

Nenhuma entidade funcional da plataforma poderá ser criada sem implementar:

```text
IScopedEntity
```

e possuir:

```text
ScopeType
TenantId
CompanyId
BranchId
ProfileId
UserId
VisibilityRule
```

---

# Benefício Arquitetural

Esse modelo cria uma arquitetura de **Segregação Hierárquica Universal Multi-Tenant**, onde:

* Todo dado possui proprietário.
* Todo dado possui contexto.
* Toda consulta é filtrada automaticamente.
* Toda auditoria é rastreável.
* Todo acesso é validado.
* Toda funcionalidade respeita a hierarquia organizacional.
* O Superadministrador possui visão global.
* O Tenant possui isolamento completo.
* Empresas e filiais possuem segregação operacional.
* Usuários possuem privacidade e governança.

Essa regra deve ser considerada uma **regra estrutural obrigatória de toda a plataforma**, aplicada a todos os domínios, módulos, funcionalidades, telas, APIs, eventos, integrações, auditorias, documentos, templates, IA e configurações.



# Especificação Arquitetural Global — Padrão Universal de CRUD, Soft Delete e Escopo

## Objetivo

Esta especificação define um padrão obrigatório para toda a plataforma.

**Toda funcionalidade cadastrável da plataforma deve seguir exatamente o mesmo ciclo de vida operacional e arquitetural.**

Isso garante:

* Consistência de UX
* Consistência de APIs
* Governança
* Auditoria
* Rastreabilidade
* Segurança
* Recuperação de dados
* Compatibilidade Multi-Tenant

---

# Regra Fundamental

Toda funcionalidade que manipula dados deve obrigatoriamente possuir:

```text
Listagem
Visualização
Detalhamento
Inclusão
Edição
Exclusão (Soft Delete)
Auditoria
Controle de Escopo
```

Não é permitido criar funcionalidades que implementem apenas parte desse padrão sem justificativa arquitetural formal.

---

# Estrutura Universal de Telas

Toda funcionalidade deve possuir as seguintes telas:

## 1. Tela de Listagem

Rota padrão:

```text
/{modulo}/{funcionalidade}
```

Exemplos:

```text
/tenants
/usuarios
/empresas
/perfis
/documentos
```

---

## Componentes Obrigatórios

### Barra de Filtros

Filtros específicos da entidade.

Filtros padrão:

```text
Código
Nome
Status
Data Criação
Data Alteração
Criado Por
```

---

### Filtro de Escopo

Aplicado automaticamente.

O usuário não visualiza dados fora do seu escopo.

---

### Filtro de Exclusão

```text
[ ] Exibir registros excluídos
```

Disponível apenas para administradores autorizados.

---

### Grid

Colunas:

```text
ID
Código
Nome
Status
Criado Em
Atualizado Em
```

---

### Ações

```text
Visualizar
Editar
Excluir
Auditoria
```

---

# 2. Tela de Visualização

Modo somente leitura.

Rota:

```text
/{modulo}/{funcionalidade}/{id}
```

---

## Abas Obrigatórias

### Dados Gerais

### Auditoria

### Histórico

### Relacionamentos

---

# 3. Tela de Inclusão

Rota:

```text
/{modulo}/{funcionalidade}/novo
```

---

## Comportamento

Ao salvar:

```text
Validar Escopo
↓
Validar Permissões
↓
Persistir Registro
↓
Gerar Auditoria
```

---

## Campos Automáticos

Não exibidos:

```text
Id
CreatedAt
CreatedBy
TenantId
CompanyId
BranchId
ProfileId
UserId
DeletedAt
DeletedBy
```

Esses campos são preenchidos automaticamente.

---

# 4. Tela de Edição

Rota:

```text
/{modulo}/{funcionalidade}/{id}/editar
```

---

## Comportamento

Ao abrir:

```text
Validar Escopo
↓
Carregar Registro
↓
Permitir Alteração
```

---

Ao salvar:

```text
Validar Escopo
↓
Validar Permissões
↓
Persistir Alterações
↓
Gerar Auditoria
```

---

# 5. Exclusão

## Regra Global

Nenhum dado será removido fisicamente.

A plataforma opera exclusivamente com:

```text
SOFT DELETE
```

---

# Tela de Confirmação

Ao excluir:

```text
Deseja realmente excluir este registro?

[Cancelar]
[Confirmar Exclusão]
```

---

## Exclusão Nunca Executa DELETE

Proibido:

```sql
DELETE FROM usuarios
```

---

Permitido:

```sql
UPDATE usuarios
SET
    deleted_at = NOW(),
    deleted_by = :usuario
WHERE id = :id
```

---

# Estrutura Obrigatória

Toda entidade deve possuir:

```text
DeletedAt
DeletedBy
DeletionReason
```

---

# Exemplo

```json
{
  "id": "123",
  "deletedAt": "2026-06-04T12:30:00",
  "deletedBy": "admin",
  "deletionReason": "Cadastro duplicado"
}
```

---

# Estados do Registro

## Ativo

```text
DeletedAt = NULL
```

---

## Excluído

```text
DeletedAt != NULL
```

---

# Recuperação

Opcional por funcionalidade.

Ação:

```text
Restaurar Registro
```

---

Operação:

```sql
UPDATE tabela
SET
    deleted_at = NULL,
    deleted_by = NULL,
    deletion_reason = NULL
WHERE id = :id
```

---

# Regra Global de Consulta

Toda consulta obrigatoriamente deve considerar:

## Escopo

e

## Soft Delete

---

# Consulta Padrão

```sql
SELECT *
FROM clientes
WHERE
    deleted_at IS NULL
```

---

# Consulta Tenant

```sql
SELECT *
FROM clientes
WHERE
    tenant_id = :tenantId
AND deleted_at IS NULL
```

---

# Consulta Empresa

```sql
SELECT *
FROM clientes
WHERE
    tenant_id = :tenantId
AND company_id = :companyId
AND deleted_at IS NULL
```

---

# Middleware Global de Dados

Toda operação passa por:

```text
Resolver Escopo
↓
Validar Escopo
↓
Aplicar Filtro Soft Delete
↓
Executar Consulta
```

---

# Interfaces Arquiteturais Obrigatórias

## IScopedEntity

```text
ScopeType
TenantId
CompanyId
BranchId
ProfileId
UserId
VisibilityRule
```

---

## ISoftDeleteEntity

```text
DeletedAt
DeletedBy
DeletionReason
```

---

## IAuditableEntity

```text
CreatedAt
CreatedBy

UpdatedAt
UpdatedBy
```

---

# Entidade Base Obrigatória

Todas as entidades devem herdar:

```text
BaseEntity
```

---

## Estrutura

```text
Id

ScopeType
TenantId
CompanyId
BranchId
ProfileId
UserId
VisibilityRule

CreatedAt
CreatedBy

UpdatedAt
UpdatedBy

DeletedAt
DeletedBy
DeletionReason
```

---

# APIs

Todas as APIs devem respeitar:

## GET

Somente:

```text
DeletedAt = NULL
```

---

## POST

Preencher automaticamente:

```text
Escopo
Auditoria
```

---

## PUT

Validar:

```text
Escopo
Permissões
```

---

## DELETE

Executar:

```text
Soft Delete
```

Nunca:

```text
DELETE físico
```

---

# Auditoria

Toda exclusão gera evento.

Exemplo:

```text
ENTITY_DELETED
```

Payload:

```json
{
  "entity": "Cliente",
  "entityId": "123",
  "deletedBy": "admin",
  "deletedAt": "2026-06-04T12:30:00",
  "scopeType": "COMPANY"
}
```

---

# Regras para Relatórios

Por padrão:

```text
Não exibir registros excluídos
```

---

Administradores podem habilitar:

```text
Incluir registros excluídos
```

---

# Regras para Integrações

Exportações:

```text
Excluir registros deletados
```

---

Sincronizações:

```text
Ignorar registros deletados
```

ou

```text
Enviar status DELETED
```

dependendo da integração.

---

# Regra Arquitetural Obrigatória da Plataforma

Toda funcionalidade desenvolvida deve possuir obrigatoriamente:

```text
✓ Tela de Listagem

✓ Tela de Visualização

✓ Tela de Inclusão

✓ Tela de Edição

✓ Exclusão com Confirmação

✓ Soft Delete

✓ Auditoria

✓ Controle de Escopo

✓ Controle de Permissões

✓ Histórico

✓ Filtros

✓ APIs Compatíveis

✓ Suporte a Multi-Tenant
```

---

# Resultado Arquitetural

Essa especificação estabelece um **Framework Universal de Gestão de Entidades** para toda a plataforma.

Qualquer novo domínio, módulo ou funcionalidade criada futuramente (Clientes, Contratos, Produtos, Atendimentos, IA, Documentos, Financeiro, RH, CRM, Help Desk, etc.) herdará automaticamente:

* Estrutura de telas padronizada.
* Controle de escopo hierárquico.
* Auditoria completa.
* Soft Delete obrigatório.
* Segurança Multi-Tenant.
* Consistência de APIs.
* Governança de dados.
* Recuperação de registros.
* Conformidade LGPD e compliance corporativo.



# Funcionalidade: Gestão de Validações (Validation Engine)

## Objetivo

Permitir que o Superadministrador configure, sem necessidade de programação, todas as regras de validação utilizadas pelo sistema.

A funcionalidade deve atuar como um mecanismo centralizado de validação aplicável a qualquer entidade, campo, formulário, API, integração ou processo da plataforma.

---

# Domínio

```text
Superadministrador
```

---

# Módulo

```text
Configuração de Validações
```

---

# Funcionalidade

```text
Gestão de Validações
```

---

# Objetivo de Negócio

Eliminar validações hardcoded.

Todas as validações devem ser configuráveis através do sistema.

Isso permite:

* Alteração sem deploy
* Customização por tenant
* Reutilização
* Governança
* Auditoria
* Multi-tenant
* Multiempresa

---

# Estrutura da Entidade

## ValidationRule

```text
ValidationRule
```

Campos:

| Campo          | Tipo     |
| -------------- | -------- |
| Id             | UUID     |
| Code           | String   |
| Name           | String   |
| Description    | Text     |
| EntityId       | UUID     |
| FieldId        | UUID     |
| ScopeType      | Enum     |
| ValidationType | Enum     |
| Active         | Boolean  |
| CreatedAt      | Datetime |
| UpdatedAt      | Datetime |

---

# Tipos de Escopo

## Plataforma

```text
GLOBAL
```

Aplica para todos os tenants.

---

## Tenant

```text
TENANT
```

Aplica apenas para um tenant.

---

## Empresa

```text
COMPANY
```

Aplica apenas para uma empresa.

---

# Estrutura da Tela

## Listagem

Filtros:

```text
Código
Nome
Entidade
Campo
Tipo Validação
Escopo
Status
```

Ações:

```text
Visualizar
Editar
Duplicar
Desativar
Excluir
```

---

# Inclusão

Fluxo:

```text
Selecionar Entidade
↓
Selecionar Campo
↓
Configurar Label
↓
Configurar Máscara
↓
Configurar Validação
↓
Salvar
```

---

# Seleção da Entidade

Lista automática de:

```text
Clientes
Usuários
Empresas
Filiais
Produtos
Documentos
Contratos
...
```

Todas as entidades cadastradas no sistema.

---

# Seleção do Campo

Após selecionar a entidade.

Exemplo:

```text
Cliente
```

Campos:

```text
Nome
CPF
Email
Telefone
DataNascimento
```

---

# Configuração de Label

Permite sobrescrever o label padrão.

Exemplo:

```text
Campo:
CPF

Label:
CPF do Cliente
```

---

# Configuração de Máscara

Tipos:

```text
Nenhuma

CPF

CNPJ

CPF/CNPJ

Telefone

Celular

CEP

Moeda

Percentual

Data

DataHora

Hora

Placa

Chave PIX

Personalizada
```

---

# Tipo de Validação

## Obrigatório

```text
REQUIRED
```

Exemplo:

```text
Campo obrigatório
```

---

## Tamanho Mínimo

```text
MIN_LENGTH
```

Parâmetros:

```text
Quantidade mínima
```

---

## Tamanho Máximo

```text
MAX_LENGTH
```

Parâmetros:

```text
Quantidade máxima
```

---

## Valor Mínimo

```text
MIN_VALUE
```

---

## Valor Máximo

```text
MAX_VALUE
```

---

## Intervalo

```text
RANGE
```

---

# Validação de Unicidade

## Tipo

```text
UNIQUE
```

---

## Escopo da Unicidade

### Global

```text
GLOBAL
```

Exemplo:

```text
Email único em toda plataforma
```

Consulta:

```sql
SELECT COUNT(*)
FROM users
WHERE email = ?
```

---

### Tenant

```text
TENANT
```

Exemplo:

```text
Código interno único por tenant
```

Consulta:

```sql
SELECT COUNT(*)
FROM clientes
WHERE tenant_id = ?
AND codigo = ?
```

---

### Empresa

```text
COMPANY
```

Exemplo:

```text
Matrícula única por empresa
```

Consulta:

```sql
SELECT COUNT(*)
FROM funcionarios
WHERE company_id = ?
AND matricula = ?
```

---

# Validação Regex

## Tipo

```text
REGEX
```

Campos:

```text
Expressão Regular
Mensagem
```

Exemplo:

```regex
^[A-Z]{3}[0-9]{4}$
```

Mensagem:

```text
Placa inválida
```

---

# Validação por Função

## Tipo

```text
FUNCTION
```

Permite chamar uma função registrada.

Exemplo:

```text
validateCPF()
validateCNPJ()
validateEmail()
validatePhone()
```

---

Cadastro:

```text
Nome Função
Descrição
Parâmetros
```

---

# Validação por Regra

## Tipo

```text
RULE
```

Motor de regras.

---

Exemplo:

```text
Idade >= 18
```

Expressão:

```text
idade >= 18
```

---

Exemplo:

```text
DataFim > DataInicio
```

---

Exemplo:

```text
Plano = Empresarial
→ QuantidadeUsuarios > 1
```

---

# Regra Composta

Tipo:

```text
COMPOSITE
```

Permite combinar regras.

---

Exemplo

```text
CPF obrigatório

E

CPF válido

E

CPF único
```

---

# Operadores

```text
AND
OR
NOT
```

---

# Prioridade

Campo:

```text
Priority
```

Exemplo:

```text
1
2
3
...
```

Define ordem de execução.

---

# Mensagens

Cada validação possui:

```text
Mensagem Sucesso

Mensagem Erro

Mensagem Aviso
```

---

Exemplo

```text
CPF já cadastrado
```

---

# Execução

## Frontend

Validação imediata.

```text
OnChange

OnBlur

OnSubmit
```

---

## Backend

Validação obrigatória.

Mesmo que frontend valide.

---

# Histórico

Toda alteração gera auditoria.

Registrar:

```text
Quem alterou

Quando alterou

Valor anterior

Valor novo
```

---

# Versionamento

Toda validação possui versão.

```text
1.0
1.1
2.0
```

---

# Importação

Permitir:

```text
JSON
YAML
XML
```

---

# Exportação

Permitir:

```text
JSON
YAML
XML
Excel
```

---

# API

## Listar

```http
GET /api/validation-rules
```

---

## Detalhar

```http
GET /api/validation-rules/{id}
```

---

## Criar

```http
POST /api/validation-rules
```

---

## Alterar

```http
PUT /api/validation-rules/{id}
```

---

## Excluir (Soft Delete)

```http
DELETE /api/validation-rules/{id}
```

---

# Integração com Metadados

A funcionalidade deve consumir automaticamente o módulo:

```text
Gestão de Domínios
Gestão de Módulos
Gestão de Funcionalidades
Gestão de Telas
Gestão de Campos
```

para descobrir:

```text
Entidades
Campos
Tipos
Relacionamentos
```

sem necessidade de cadastro manual.

---

# Integração com Form Engine

Toda tela do sistema deve consultar o Validation Engine.

Fluxo:

```text
Tela
↓
Form Engine
↓
Validation Engine
↓
Executa Regras
↓
Exibe Resultado
```

---

# Benefício Arquitetural

A Gestão de Validações torna-se um mecanismo central de governança de dados da plataforma, permitindo que qualquer tenant, empresa ou superadministrador configure:

* Máscaras
* Labels
* Obrigatoriedade
* Unicidade
* Regex
* Funções
* Regras de negócio
* Regras compostas
* Validações frontend
* Validações backend

sem necessidade de alteração de código-fonte.




