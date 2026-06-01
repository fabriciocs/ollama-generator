# Prompt para Codex — Sistema Gerador de Documentação Completa com Estética Anti-Slop e Ollama

Você é um agente de desenvolvimento full-stack sênior, especialista em Node.js, TypeScript, React, Material Design 3, UX/UI, design systems, automação com Ollama, geração de documentos Markdown/HTML e criação de sistemas locais robustos.

Sua tarefa é criar um sistema web completo que permita ao usuário digitar uma ideia de sistema em uma landing page e, a partir dessa ideia, executar uma cadeia sequencial de prompts locais usando Ollama.

O sistema deve gerar uma pasta `{nome-do-produto}/`, salvar todas as respostas das etapas dentro dessa pasta e usar a estética inicial anti-slop como referência obrigatória para todas as etapas posteriores.

---

## 1. Objetivo do sistema

Criar uma aplicação web com:

1. landing page responsiva;
2. input/textarea para o usuário inserir uma ideia de sistema;
3. botão para iniciar a geração;
4. backend que lê arquivos de prompt locais;
5. integração com Ollama na rede local em `192.168.0.103`;
6. execução sequencial de etapas;
7. criação automática da pasta `{nome-do-produto}/`;
8. salvamento das respostas de cada etapa;
9. reaproveitamento da estética inicial nas próximas etapas;
10. acompanhamento visual do progresso;
11. logs detalhados de debug e trace no frontend e backend;
12. monitoramento ativo de logs durante configure, install, build e run;
13. correção completa de qualquer warn ou erro encontrado;
14. README de execução local;
15. `.env.example` com todas as variáveis necessárias;
16. scripts de desenvolvimento para frontend e backend;
17. estrutura de código clara, modular e fácil de evoluir;
18. frontend componentizado, separando páginas, componentes e widgets;
19. implementação do frontend em ordem obrigatória: componentes/widgets compartilhados, core do sistema e páginas por funcionalidade;
20. backend modularizado com pastas, arquivos, controllers, services, DTOs, entities/repositories e testes por módulo;
21. cada funcionalidade implementada como unidade rastreável no frontend e no backend.

---

## 2. Stack obrigatória

Use:

- Backend: Node.js + TypeScript + NestJS
- Frontend: React + TypeScript + Vite
- UI: Material Design 3 ou Material UI com customização visual própria
- Ambiente principal: WSL/Linux
- Banco de dados: SQLite
- ORM sugerido: TypeORM com SQLite, ou Prisma com SQLite se preferir
- Armazenamento de artefatos: arquivos Markdown/HTML em disco
- Ollama na rede local

Configuração do Ollama:

```txt
OLLAMA_BASE_URL=http://192.168.0.103:11434
OLLAMA_MODEL=llama3.1:8b
```

Pasta base dos prompts:

```txt
PROMPTS_BASE_DIR=C:\Users\Fabricio.Cunha\Downloads\prompts\novos
```

Endpoint de chat:

```txt
http://192.168.0.103:11434/api/chat
```

Modelo:

```txt
llama3.1:8b
```

---

## 3. Princípio estético obrigatório

A interface do sistema não pode parecer um dashboard SaaS genérico.

A aplicação deve ter uma direção visual própria, contextual e funcional.

Antes de construir o frontend, implemente uma estética baseada no conceito:

```txt
Ateliê de Geração Estratégica
```

A interface deve parecer uma bancada de trabalho digital onde uma ideia bruta entra, passa por etapas de refinamento e sai como documentação estruturada.

Evite:

- dashboard genérico com cards iguais;
- gradiente roxo/azul sem propósito;
- glassmorphism decorativo;
- excesso de sombra;
- layout de template;
- botões sem personalidade;
- copy genérica;
- ícones decorativos sem função;
- telas vazias sem orientação;
- estética de “AI SaaS genérico”;
- Inter, Roboto, Arial e fontes de sistema como escolha automática;
- Space Grotesk como fallback recorrente;
- cards brancos arredondados repetidos;
- sombras e brilhos decorativos;
- componentes pasteurizados;
- visual que poderia servir para qualquer produto.

Priorize:

- aparência de processo editorial/produtivo;
- sensação de oficina técnica;
- fluxo visual claro de etapas;
- hierarquia forte;
- feedbacks explícitos;
- componentes densos, mas legíveis;
- estados completos;
- tokens de design reutilizáveis;
- acessibilidade real;
- microinterações úteis;
- decisões visuais com função, contexto e intenção;
- estética específica ao produto;
- implementação frontend realista.

---

## 4. Diagnóstico anti-slop obrigatório no frontend

Antes de implementar a interface, crie uma seção no README chamada:

```txt
Diagnóstico anti-slop da interface
```

Ela deve listar os riscos visuais do próprio sistema e como foram evitados.

Inclua, no mínimo:

| Risco visual | Como apareceria | Por que prejudica | Como evitar na implementação |
|---|---|---|---|
| Dashboard SaaS previsível | Cards iguais e métricas sem contexto | Parece template e não comunica processo | Usar linha de produção documental por etapas |
| Gradiente roxo/azul genérico | Hero com brilho de IA | Reduz especificidade visual | Usar paleta editorial quente com verde operacional e terracota |
| Glassmorphism sem função | Painéis translúcidos decorativos | Prejudica leitura e parece modismo | Usar superfícies sólidas com bordas úteis |
| Ícones decorativos | Ícones de IA sem ação clara | Cria ruído visual | Usar ícones apenas quando indicarem status ou ação |
| Copy genérica | “Gerencie tudo em um só lugar” | Não explica o fluxo real | Usar linguagem de geração documental e etapas |
| Cards brancos repetidos | Interface fragmentada e monótona | Não representa transformação progressiva | Usar timeline, painel de processo e logs editoriais |
| Animações gratuitas | Pulsos e brilhos constantes | Distraem durante geração longa | Animar somente status, progresso e feedback |

---

## 5. Direção estética inicial do próprio sistema

Use esta direção para criar o frontend do sistema gerador.

### Nome da direção

```txt
Ateliê Operacional Anti-Slop
```

### Metáfora visual

Uma linha de produção editorial onde cada etapa transforma a ideia em um artefato mais maduro.

### Sensação desejada

- produtivo;
- confiável;
- técnico;
- artesanal;
- preciso;
- focado em transformação;
- não decorativo.

### Frase norteadora

```txt
A interface deve mostrar a ideia sendo lapidada, não apenas processada.
```

### O que a interface nunca deve parecer

- painel genérico de IA;
- clone de SaaS com cards brancos;
- landing page de template;
- dashboard abstrato sem relação com geração documental;
- interface cheia de brilhos sem função.

---

## 6. Paleta visual obrigatória

Use uma paleta sóbria, editorial e operacional.

```css
:root {
  --color-bg: #F3EFE7;
  --color-surface: #FFFDF7;
  --color-surface-raised: #F8F2E8;
  --color-text: #1F2421;
  --color-muted: #6D746D;
  --color-border: #D8CDBB;

  --color-primary: #315C4D;
  --color-primary-strong: #24463A;
  --color-accent: #B46A3C;
  --color-accent-soft: #F1D4BE;

  --color-success: #2F7D57;
  --color-warning: #B8872D;
  --color-error: #A8453D;
  --color-info: #3E6F8E;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;

  --font-display: "Fraunces", "Georgia", serif;
  --font-body: "IBM Plex Sans", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "Consolas", monospace;
}
```

### Regras de uso

- fundo principal em tom quente claro;
- superfícies com contraste sutil;
- verde profundo para ações principais;
- terracota para destaques e progresso;
- bordas visíveis, sem excesso de sombras;
- tipografia editorial nos títulos;
- tipografia técnica nos logs, caminhos e status;
- usar cor para função, não para decoração.

---

## 7. Tipografia obrigatória

Use:

- títulos: Fraunces ou alternativa serifada editorial;
- corpo: IBM Plex Sans;
- dados técnicos/logs: IBM Plex Mono;
- botões: IBM Plex Sans com peso 600;
- labels: IBM Plex Sans em caixa normal, sem visual genérico.

Não use Inter, Roboto, Arial ou fontes de sistema como escolha principal, exceto como fallback técnico.

---

## 8. UX da landing page

A landing page deve ser uma tela única, responsiva, com aparência de ferramenta séria.

Elementos obrigatórios:

1. hero section;
2. título claro;
3. subtítulo explicativo;
4. textarea grande para a ideia;
5. botão principal “Gerar documentação completa”;
6. painel lateral ou inferior de etapas;
7. card de status da geração;
8. área de logs resumidos;
9. lista de arquivos gerados;
10. botão para copiar caminho da pasta;
11. botão para atualizar status;
12. estado de sucesso;
13. estado de erro;
14. estado de carregamento;
15. estado vazio;
16. indicador visual de etapa atual;
17. visualização do caminho de saída;
18. mensagem de orientação antes da primeira geração.

Título sugerido:

```txt
Gerador de Especificação Completa de Sistemas
```

Subtítulo sugerido:

```txt
Transforme uma ideia inicial em uma documentação estratégica, funcional, técnica, visual e operacional usando uma cadeia sequencial de prompts com Ollama.
```

---

## 9. Componentes visuais obrigatórios

Implemente componentes com identidade própria.

### Botão principal

- fundo verde profundo;
- borda inferior levemente mais escura;
- ícone funcional opcional;
- estado loading com texto claro;
- não usar gradiente decorativo;
- feedback de clique discreto.

### Textarea da ideia

- grande;
- confortável;
- com borda visível;
- contador de caracteres;
- placeholder orientativo;
- foco com borda terracota;
- mensagem de validação quando vazio.

### Lista de etapas

Cada etapa deve exibir:

- número;
- nome;
- status;
- arquivo de saída;
- tempo de início;
- tempo de conclusão;
- erro, se houver.

Status possíveis:

```txt
pending
running
completed
error
skipped
```

### Card de progresso

Deve mostrar:

- produto;
- pasta de saída;
- etapa atual;
- total de etapas;
- percentual;
- último arquivo gerado.

### Logs

- usar fonte monoespaçada;
- mostrar eventos relevantes;
- evitar log gigante na tela principal;
- permitir expandir detalhes;
- destacar erros sem poluir o restante da interface.

### Empty state

Quando nenhuma geração existir, mostrar uma mensagem contextual:

```txt
Digite uma ideia para iniciar a primeira linha de produção documental.
```

### Error state

Erro deve indicar:

- etapa que falhou;
- causa provável;
- arquivo de prompt usado;
- se foi erro de Ollama, filesystem ou timeout;
- ação sugerida para tentar novamente.

---

## 10. Movimento e microinterações

Use apenas movimentos úteis:

- feedback de clique no botão;
- foco no textarea;
- transição discreta de status da etapa;
- loading visível enquanto o Ollama responde;
- expansão suave dos logs;
- confirmação ao copiar caminho;
- destaque temporário quando um arquivo é salvo;
- erro com foco visual no card afetado.

Não anime:

- textos longos;
- logs em atualização constante;
- painel técnico filtrável por nível: trace, debug, info, warn e error;
- indicador explícito de frontend online, backend online, SQLite conectado e Ollama acessível;
- elementos decorativos sem função;
- fundo da página;
- cards de forma exagerada.

---

## 11. Fluxo principal da aplicação

Quando o usuário enviar a ideia:

1. frontend envia `POST /api/generations`;
2. backend valida o texto;
3. backend gera `{nome-do-produto}`;
4. backend cria `./generated/{nome-do-produto}/`;
5. backend cria `_generation-status.json`;
6. backend executa a Etapa 0;
7. backend salva o resultado da Etapa 0;
8. backend usa o arquivo da Etapa 0 como referência estética obrigatória;
9. backend executa as demais etapas, uma por vez;
10. cada etapa só começa após a anterior terminar completamente;
11. backend atualiza status depois de cada etapa;
12. frontend consulta status periodicamente;
13. ao final, frontend mostra sucesso e lista de arquivos.

Não execute etapas em paralelo.

Não simule respostas.

Não pule etapas.

Não inicie uma etapa antes da conclusão total da anterior.

---

## 12. Geração do nome do produto

Crie função `slugifyProductName`.

Regras:

- converter para minúsculas;
- remover acentos;
- trocar espaços por hífen;
- remover caracteres especiais;
- remover hífens duplicados;
- limitar a 60 caracteres;
- remover hífen no começo e no fim;
- se vazio, usar `produto-gerado`;
- se a pasta existir, adicionar sufixo incremental.

Exemplos:

```txt
Sistema de Gestão de Obras Pequenas
sistema-de-gestao-de-obras-pequenas

Plataforma SaaS para Agentes de IA
plataforma-saas-para-agentes-de-ia
```

---

## 13. Diretórios e arquivos gerados

Base padrão:

```txt
./generated
```

Configurável por variável:

```txt
OUTPUT_BASE_DIR=./generated
```

Estrutura esperada dos artefatos gerados:

```txt
generated/
  {nome-do-produto}/
    _generation-status.json
    _contexto-resumido.md
    _logs.md
    0-estetica-inicial-{nome-do-produto}.md
    1-ideia-inicial-e-enquadramento-do-problema.md
    1.2-perguntas-abertas-dashboard-html.md
    10-seguranca-privacidade-compliance-e-governanca.md
    11-documentacao-final-operacao-e-evolucao.md
    2-pesquisa-de-mercado-e-benchmarking.md
    3-analise-estrategica-e-especificacao-inicial.md
    4-especificacao-funcional-estruturada.md
    5-modelo-de-dados-e-arquitetura-da-informacao.md
    6-ux-fluxos-jornadas-e-prototipacao.md
    7-design-visual-ui-e-prototipo-navegavel.md
    8-backlog-plano-de-implementacao-e-qa.md
    9-arquitetura-tecnica-e-solucao.md
```

---

## 14. Persistência com SQLite

Use SQLite como banco de dados local da aplicação.

O SQLite deve guardar o controle operacional da geração, enquanto os documentos finais continuam sendo salvos como arquivos em disco.

Configuração padrão:

```env
DATABASE_URL=file:./data/app.sqlite
```

Use NestJS com TypeORM + SQLite, salvo se houver justificativa clara para usar Prisma. Se usar TypeORM, configure `TypeOrmModule.forRoot` com entidades explícitas e migrations ou sincronização apenas em ambiente de desenvolvimento.

Entidades obrigatórias:

### Generation

Campos mínimos:

- `id`: UUID;
- `idea`: texto original do usuário;
- `productName`;
- `outputDir`;
- `status`: `created`, `running`, `completed`, `error`;
- `currentStepKey`;
- `createdAt`;
- `updatedAt`;
- `finishedAt`;
- `errorMessage`.

### GenerationStep

Campos mínimos:

- `id`: UUID;
- `generationId`;
- `stepKey`;
- `title`;
- `promptPath`;
- `outputFile`;
- `status`: `pending`, `running`, `completed`, `error`, `skipped`;
- `startedAt`;
- `finishedAt`;
- `durationMs`;
- `errorMessage`;
- `orderIndex`.

### GeneratedFile

Campos mínimos:

- `id`: UUID;
- `generationId`;
- `stepId`;
- `fileName`;
- `relativePath`;
- `absolutePath`;
- `mimeType`;
- `sizeBytes`;
- `createdAt`.

### GenerationLog

Campos mínimos:

- `id`: UUID;
- `generationId`;
- `stepId`;
- `level`: `trace`, `debug`, `info`, `warn`, `error`, `fatal`;
- `message`;
- `metadataJson`;
- `createdAt`.

Regras:

- crie uma migration ou rotina de inicialização do banco;
- salve status no SQLite após cada transição de etapa;
- salve logs estruturados no SQLite;
- continue gerando `_generation-status.json` como snapshot portável;
- não dependa apenas de memória para acompanhar o progresso;
- ao reiniciar a aplicação, deve ser possível consultar gerações anteriores.

---

## 15. Observabilidade, logs detalhados e rastreabilidade obrigatória

Implemente logs detalhados em todo o sistema, tanto no frontend quanto no backend.

### Backend — NestJS

Crie um módulo de logging centralizado, por exemplo:

```txt
backend/src/logging/logging.module.ts
backend/src/logging/app-logger.service.ts
backend/src/logging/request-logging.interceptor.ts
backend/src/logging/http-exception.filter.ts
```

O backend deve registrar logs em níveis:

```txt
trace
debug
info
warn
error
fatal
```

O nível de log deve ser configurável por variável de ambiente:

```txt
LOG_LEVEL=trace
LOG_PRETTY=true
LOG_TO_FILE=true
LOG_DIR=./logs
```

Logs obrigatórios no backend:

- boot da aplicação;
- carregamento de variáveis de ambiente;
- conexão com SQLite;
- criação/validação das tabelas;
- início e fim de cada requisição HTTP;
- método, rota, status code, duração e correlationId;
- criação de uma geração;
- criação da pasta do produto;
- leitura de cada prompt;
- tamanho do conteúdo lido de cada prompt;
- início de cada chamada ao Ollama;
- fim de cada chamada ao Ollama;
- duração da chamada ao Ollama;
- modelo usado;
- endpoint usado;
- tamanho da resposta;
- escrita de cada arquivo gerado;
- atualização de status no SQLite;
- atualização de `_generation-status.json`;
- warnings de contexto grande;
- erros de filesystem;
- erros de rede;
- erros do Ollama;
- timeouts;
- exceções não tratadas.

Cada geração deve possuir um `correlationId` ou `generationId` presente em todos os logs relacionados.

Nunca registre segredos, tokens, senhas ou conteúdo sensível em logs. Para prompts e respostas, registre tamanho, hash e caminho do arquivo, não o conteúdo completo, exceto quando `LOG_INCLUDE_CONTENT=true` em ambiente local.

### Frontend — React

Crie um logger de frontend, por exemplo:

```txt
frontend/src/lib/logger.ts
frontend/src/lib/trace.ts
```

O frontend deve registrar:

- inicialização da aplicação;
- carregamento das variáveis `VITE_*`;
- renderização da landing page;
- alteração do input, sem registrar o texto completo por padrão;
- clique no botão de geração;
- início e fim das chamadas HTTP;
- status code das respostas;
- duração das chamadas;
- polling de status;
- mudança de estado de cada etapa;
- erros de rede;
- erros de validação;
- erros inesperados de renderização;
- warnings de acessibilidade detectáveis durante desenvolvimento.

Use níveis:

```txt
trace
debug
info
warn
error
```

Variáveis do frontend:

```txt
VITE_API_BASE_URL=http://localhost:3000
VITE_LOG_LEVEL=trace
VITE_ENABLE_TRACE=true
```

A interface deve incluir um painel de debug recolhível, visível em desenvolvimento, com:

- últimos eventos do frontend;
- últimos eventos retornados pelo backend;
- status da API;
- status da geração atual;
- erros recentes;
- botão para limpar logs visuais;
- botão para copiar diagnóstico técnico.

### Arquivos de log

Crie arquivos de log separados:

```txt
backend/logs/backend-debug.log
backend/logs/backend-error.log
backend/logs/backend-trace.log
frontend/logs/frontend-debug.log, se aplicável em scripts locais
```

Quando log em arquivo no frontend não for viável no browser, registre no console e exponha no painel de debug. Para execução automatizada com Playwright ou scripts de validação, capture console warnings/errors.

### Health checks

Implemente endpoints:

```http
GET /api/health
GET /api/health/ollama
GET /api/health/database
GET /api/debug/logs/recent
```

`/api/health` deve retornar:

```json
{
  "status": "ok",
  "api": "ok",
  "database": "ok",
  "ollama": "ok",
  "timestamp": "ISO_DATE"
}
```

---

## 16. Execução obrigatória pelo Codex: configure, install, build, run e correção total

Após implementar o projeto, execute obrigatoriamente os comandos de configuração, instalação, build e execução do backend e do frontend.

Não pare ao primeiro erro. Diagnostique, corrija e execute novamente até que backend e frontend estejam funcionando sem erros e sem warnings relevantes.

### Backend — configure

Execute uma etapa de configuração do backend:

```bash
cd backend
cp .env.example .env || true
npm run configure || true
```

Se `npm run configure` não existir inicialmente, crie esse script.

O script `configure` deve:

- validar Node.js e npm;
- validar `.env`;
- validar `OLLAMA_BASE_URL`;
- validar `PROMPTS_BASE_DIR`;
- criar diretórios necessários;
- criar diretório de logs;
- criar diretório de banco SQLite;
- testar permissões de escrita;
- imprimir diagnóstico claro.

### Backend — install

Execute:

```bash
cd backend
npm install
```

Corrija:

- conflitos de dependência;
- pacotes faltantes;
- problemas de TypeScript;
- scripts ausentes;
- imports incorretos;
- warnings relevantes de instalação.

### Backend — build

Execute:

```bash
cd backend
npm run build
```

Corrija completamente:

- erros de TypeScript;
- erros de NestJS;
- DTOs incorretos;
- entidades SQLite incorretas;
- imports quebrados;
- paths inválidos;
- tipagens implícitas problemáticas;
- warnings relevantes.

### Backend — run

Execute:

```bash
cd backend
npm run start:dev
```

Monitore os logs do backend.

Valide:

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/health/database
curl http://localhost:3000/api/health/ollama
```

Se houver erro ou warn relevante, corrija e reinicie.

### Frontend — configure

Execute:

```bash
cd frontend
cp .env.example .env || true
npm run configure || true
```

Se `npm run configure` não existir inicialmente, crie esse script.

O script `configure` deve:

- validar Node.js e npm;
- validar `VITE_API_BASE_URL`;
- validar estrutura de pastas;
- validar arquivos principais;
- testar acesso ao backend quando possível;
- imprimir diagnóstico claro.

### Frontend — install

Execute:

```bash
cd frontend
npm install
```

Corrija dependências, imports e warnings relevantes.

### Frontend — build

Execute:

```bash
cd frontend
npm run build
```

Corrija completamente:

- erros de TypeScript;
- erros do Vite;
- imports quebrados;
- componentes inválidos;
- props mal tipadas;
- problemas de CSS;
- warnings relevantes.

### Frontend — run

Execute:

```bash
cd frontend
npm run dev
```

Monitore:

- console do Vite;
- console do browser, se usar Playwright;
- chamadas para a API;
- erros de CORS;
- warnings de React;
- falhas de renderização.

### Validação ponta a ponta

Crie e execute um script de validação, por exemplo:

```bash
npm run verify
```

Ou scripts separados:

```bash
cd backend && npm run verify
cd frontend && npm run verify
```

A validação deve checar:

- backend compila;
- frontend compila;
- SQLite inicializa;
- API responde `/api/health`;
- API consegue testar conexão com Ollama;
- frontend consegue chamar backend;
- não há erros no console;
- não há warnings críticos;
- arquivos de log são criados;
- endpoints principais existem.

### Regra de correção obrigatória

Se qualquer comando produzir erro ou warning relevante:

1. leia o log completo;
2. identifique a causa raiz;
3. corrija o código ou configuração;
4. rode novamente o comando que falhou;
5. continue até passar;
6. registre no README a correção feita se for uma decisão importante.

Não finalize com build quebrado.

Não finalize com backend sem subir.

Não finalize com frontend sem subir.

Não finalize com erro no health check.

Não finalize com warning relevante não explicado.

Ao final da implementação, informe no resumo técnico quais comandos foram executados, quais erros/warnings apareceram, quais correções foram aplicadas e qual foi o estado final dos logs.

---

## 17. Sequência obrigatória de prompts

Execute exatamente nesta ordem.

### Etapa 0 — Estética inicial anti-slop

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/0-prompt-estetica-inicial-anti-slop.md
```

User:

```txt
{ideia digitada na landing page}
```

Salvar como:

```txt
0-estetica-inicial-{nome-do-produto}.md
```

Regra obrigatória:

A resposta desta etapa deve ser usada como referência estética para todas as próximas etapas.

---

### Etapa 1 — Ideia inicial e enquadramento do problema

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/1-prompt-etapa-1-ideia-inicial-e-enquadramento-do-problema-ajustado.md
```

Salvar como:

```txt
1-ideia-inicial-e-enquadramento-do-problema.md
```

---

### Etapa 1.2 — Perguntas abertas

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/1.2-prompt-etapa-1-2-perguntas-abertas-dashboard-html-atualizado.md
```

Salvar como:

```txt
1.2-perguntas-abertas-dashboard-html.md
```

---

### Etapa 10 — Segurança, privacidade, compliance e governança

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/10-prompt-etapa-10-seguranca-privacidade-compliance-e-governanca.md
```

Salvar como:

```txt
10-seguranca-privacidade-compliance-e-governanca.md
```

---

### Etapa 11 — Documentação final, operação e evolução

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/11-prompt-etapa-11-documentacao-final-operacao-e-evolucao.md
```

Salvar como:

```txt
11-documentacao-final-operacao-e-evolucao.md
```

---

### Etapa 2 — Pesquisa de mercado e benchmarking

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/2-prompt-etapa-2-pesquisa-de-mercado-e-benchmarking.md
```

Salvar como:

```txt
2-pesquisa-de-mercado-e-benchmarking.md
```

---

### Etapa 3 — Análise estratégica e especificação inicial

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/3-prompt-etapa-3-analise-estrategica-e-especificacao-inicial.md
```

Salvar como:

```txt
3-analise-estrategica-e-especificacao-inicial.md
```

---

### Etapa 4 — Especificação funcional estruturada

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/4-prompt-etapa-4-especificacao-funcional-estruturada.md
```

Salvar como:

```txt
4-especificacao-funcional-estruturada.md
```

---

### Etapa 5 — Modelo de dados e arquitetura da informação

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/5-prompt-etapa-5-modelo-de-dados-e-arquitetura-da-informacao.md
```

Salvar como:

```txt
5-modelo-de-dados-e-arquitetura-da-informacao.md
```

---

### Etapa 6 — UX, fluxos, jornadas e prototipação

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/6-prompt-etapa-6-ux-fluxos-jornadas-e-prototipacao.md
```

Salvar como:

```txt
6-ux-fluxos-jornadas-e-prototipacao.md
```

---

### Etapa 7 — Design visual UI e protótipo navegável

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/7-prompt-etapa-7-design-visual-ui-e-prototipo-navegavel.md
```

Salvar como:

```txt
7-design-visual-ui-e-prototipo-navegavel.md
```

---

### Etapa 8 — Backlog, plano de implementação e QA

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/8-prompt-etapa-8-backlog-plano-de-implementacao-e-qa.md
```

Salvar como:

```txt
8-backlog-plano-de-implementacao-e-qa.md
```

---

### Etapa 9 — Arquitetura técnica e solução

System:

```txt
C:\Users\Fabricio.Cunha\Downloads\prompts\novos/9-prompt-etapa-9-arquitetura-tecnica-e-solucao.md
```

Salvar como:

```txt
9-arquitetura-tecnica-e-solucao.md
```

---

## 16. Montagem da mensagem user para etapas após a Etapa 0

Para todas as etapas após a Etapa 0, monte a mensagem `user` com este formato:

```md
# Ideia original do usuário

{ideia original}

# Produto

{nome do produto}

# Direção estética obrigatória

Inclua aqui o conteúdo completo do arquivo:
0-estetica-inicial-{nome-do-produto}.md

A estética definida nesse arquivo é obrigatória para qualquer decisão de UX, UI, layout, tema, dashboard HTML, design visual, prototipação, componentes, frontend, documentação visual e handoff.

# Arquivos já gerados

{lista de arquivos existentes na pasta do produto}

# Conteúdo das etapas anteriores

{conteúdo completo ou resumo dos arquivos anteriores}

# Instrução da etapa atual

Execute a próxima etapa conforme a mensagem system.
Gere a saída completa da etapa atual.
Não explique o processo.
Entregue diretamente o conteúdo final do documento.
Respeite obrigatoriamente a direção estética inicial anti-slop.
```

---

## 17. Estratégia de contexto grande

Se o conteúdo acumulado ficar muito grande:

1. use o conteúdo completo da Etapa 0 sempre;
2. use o conteúdo completo das últimas 2 etapas;
3. use resumo das etapas anteriores;
4. salve ou atualize o arquivo:

```txt
_contexto-resumido.md
```

O resumo deve preservar:

- ideia original;
- decisões principais;
- direção estética;
- módulos definidos;
- entidades;
- regras de negócio;
- requisitos multi-tenant;
- requisitos de IA;
- requisitos de segurança;
- requisitos de UX/UI;
- arquivos já gerados.

---

## 18. API backend NestJS

Implemente os endpoints abaixo usando NestJS, com `GenerationsModule`, `GenerationsController`, `GenerationsService`, DTOs com `class-validator` e tratamento de erros por exceptions HTTP.

### Criar geração

```http
POST /api/generations
```

Body:

```json
{
  "idea": "ideia digitada pelo usuário"
}
```

Resposta:

```json
{
  "generationId": "uuid",
  "productName": "nome-do-produto",
  "outputDir": "./generated/nome-do-produto",
  "status": "running"
}
```

### Consultar status

```http
GET /api/generations/:generationId
```

Resposta:

```json
{
  "generationId": "uuid",
  "productName": "nome-do-produto",
  "status": "running",
  "currentStep": "etapa-3",
  "steps": [
    {
      "id": "0",
      "title": "Estética inicial anti-slop",
      "status": "completed",
      "outputFile": "0-estetica-inicial-produto.md",
      "startedAt": "ISO_DATE",
      "finishedAt": "ISO_DATE",
      "error": null
    }
  ]
}
```

### Listar arquivos gerados

```http
GET /api/generations/:generationId/files
```

Resposta:

```json
{
  "generationId": "uuid",
  "files": [
    {
      "name": "0-estetica-inicial-produto.md",
      "path": "./generated/produto/0-estetica-inicial-produto.md",
      "size": 12345
    }
  ]
}
```

### Ler arquivo gerado

```http
GET /api/generations/:generationId/files/:fileName
```

Retorne o conteúdo do arquivo em texto.

Valide o nome do arquivo para evitar path traversal.

---

## 19. Serviço de chamada ao Ollama

Implemente um `OllamaService` no NestJS com um método robusto:

```ts
@Injectable()
export class OllamaService {
  async callChat(params: {
    system: string;
    user: string;
    model?: string;
  }): Promise<string> {
    // implementação real
  }
}
```

Payload esperado:

```json
{
  "model": "llama3.1:8b",
  "messages": [
    {
      "role": "system",
      "content": "conteúdo do arquivo de prompt"
    },
    {
      "role": "user",
      "content": "conteúdo da etapa"
    }
  ],
  "stream": false
}
```

A função deve:

- usar `fetch` ou biblioteca HTTP confiável;
- aplicar timeout configurável;
- validar resposta vazia;
- extrair `message.content`;
- registrar erro com contexto;
- retornar apenas o texto final do modelo.

Trate erros como:

- Ollama indisponível;
- timeout;
- resposta vazia;
- arquivo de prompt inexistente;
- erro de escrita em disco;
- JSON inválido;
- modelo indisponível;
- conexão recusada;
- permissão negada ao criar pasta.

---

## 20. Persistência de status

Mantenha um arquivo de controle dentro da pasta do produto:

```txt
_generation-status.json
```

Estrutura:

```json
{
  "generationId": "uuid",
  "idea": "texto original",
  "productName": "nome-do-produto",
  "status": "running",
  "createdAt": "ISO_DATE",
  "updatedAt": "ISO_DATE",
  "outputDir": "./generated/nome-do-produto",
  "currentStep": "0",
  "steps": []
}
```

Atualize esse arquivo:

- ao criar a geração;
- antes de iniciar cada etapa;
- depois de concluir cada etapa;
- se ocorrer erro;
- no final do processo.

Status globais possíveis:

```txt
created
running
completed
error
```

---

## 21. Logs

Crie também:

```txt
_logs.md
```

Registre eventos como:

```md
# Logs da geração

- [2026-01-01T10:00:00.000Z] Geração criada.
- [2026-01-01T10:00:01.000Z] Etapa 0 iniciada.
- [2026-01-01T10:03:20.000Z] Etapa 0 concluída: 0-estetica-inicial-produto.md.
```

Não salve chaves secretas ou dados sensíveis no log.

---


## 21.1 Arquitetura obrigatória de componentização do frontend

O frontend deve ser programado de forma componentizada e evolutiva. Não implemente telas grandes com toda a lógica dentro de um único arquivo.

A implementação deve seguir exatamente esta ordem:

### Fase A — Base visual, componentes e widgets compartilhados

Antes de criar páginas específicas, implemente a base compartilhada:

1. tokens de design;
2. tema Material Design 3 customizado;
3. estilos globais;
4. sistema de layout;
5. componentes de formulário;
6. componentes de feedback;
7. componentes de status;
8. componentes de navegação;
9. widgets de debug/logs;
10. widgets de progresso;
11. widgets de arquivos gerados;
12. estados reutilizáveis: vazio, erro, loading, sem permissão e sucesso.

Componentes compartilhados obrigatórios:

```txt
frontend/src/shared/components/
  AppButton/
    AppButton.tsx
    AppButton.types.ts
    index.ts
  AppTextArea/
    AppTextArea.tsx
    AppTextArea.types.ts
    index.ts
  AppInput/
    AppInput.tsx
    AppInput.types.ts
    index.ts
  AppSelect/
    AppSelect.tsx
    AppSelect.types.ts
    index.ts
  AppCard/
    AppCard.tsx
    AppCard.types.ts
    index.ts
  AppBadge/
    AppBadge.tsx
    AppBadge.types.ts
    index.ts
  AppTable/
    AppTable.tsx
    AppTable.types.ts
    index.ts
  AppModal/
    AppModal.tsx
    AppModal.types.ts
    index.ts
  AppAlert/
    AppAlert.tsx
    AppAlert.types.ts
    index.ts
```

Widgets compartilhados obrigatórios:

```txt
frontend/src/shared/widgets/
  DebugPanel/
    DebugPanel.tsx
    DebugPanel.types.ts
    DebugPanel.store.ts
    index.ts
  LogsPanel/
    LogsPanel.tsx
    LogsPanel.types.ts
    index.ts
  ProgressTimeline/
    ProgressTimeline.tsx
    ProgressTimeline.types.ts
    index.ts
  StepStatusList/
    StepStatusList.tsx
    StepStatusList.types.ts
    index.ts
  GeneratedFilesList/
    GeneratedFilesList.tsx
    GeneratedFilesList.types.ts
    index.ts
  HealthStatusWidget/
    HealthStatusWidget.tsx
    HealthStatusWidget.types.ts
    index.ts
```

Estados reutilizáveis obrigatórios:

```txt
frontend/src/shared/states/
  EmptyState.tsx
  ErrorState.tsx
  LoadingState.tsx
  PermissionDeniedState.tsx
  SuccessState.tsx
```

Layout compartilhado obrigatório:

```txt
frontend/src/shared/layout/
  AppShell.tsx
  PageHeader.tsx
  PageSection.tsx
  SplitWorkbenchLayout.tsx
  ResponsiveContainer.tsx
```

Regras:

- componentes compartilhados não podem conhecer regras de negócio específicas de geração;
- widgets podem combinar componentes e receber dados por props;
- páginas devem apenas orquestrar hooks, widgets e chamadas de serviço;
- nenhuma página deve conter blocos gigantes de JSX repetitivo;
- toda lógica reaproveitável deve ficar em hooks, services, stores ou utils;
- todo componente deve ter tipos explícitos;
- exporte cada componente por `index.ts`;
- use nomes semânticos e consistentes;
- evite acoplamento entre páginas.

### Fase B — Core do sistema frontend

Depois dos componentes e widgets compartilhados, implemente o core do frontend:

```txt
frontend/src/core/
  api/
    apiClient.ts
    apiErrors.ts
    httpTrace.ts
  config/
    env.ts
    constants.ts
  logging/
    logger.ts
    trace.ts
    logStore.ts
  router/
    AppRouter.tsx
    routes.ts
  theme/
    tokens.css
    theme.ts
    materialTheme.ts
  hooks/
    usePolling.ts
    useAsyncAction.ts
    useCopyToClipboard.ts
    useDebouncedValue.ts
  types/
    api.types.ts
    status.types.ts
```

O core deve conter:

- cliente HTTP com logs de request/response;
- tratamento padronizado de erros;
- tracing de frontend;
- router centralizado;
- tema e tokens globais;
- hooks genéricos;
- tipos compartilhados;
- configuração por variáveis `VITE_*`.

### Fase C — Páginas e funcionalidades

Somente depois de implementar shared e core, implemente as páginas por funcionalidade.

Estruture cada funcionalidade em `frontend/src/features/{feature-name}`.

Cada funcionalidade deve possuir, quando aplicável:

```txt
frontend/src/features/{feature-name}/
  pages/
    {Feature}ListPage.tsx
    {Feature}DetailPage.tsx
    {Feature}CreatePage.tsx
    {Feature}EditPage.tsx
  components/
    {Feature}Form.tsx
    {Feature}Filters.tsx
    {Feature}Card.tsx
  widgets/
    {Feature}SummaryWidget.tsx
  hooks/
    use{Feature}.ts
    use{Feature}Actions.ts
  services/
    {feature}.api.ts
  types/
    {feature}.types.ts
  index.ts
```

Funcionalidades mínimas do sistema:

```txt
frontend/src/features/landing/
frontend/src/features/generations/
frontend/src/features/generated-files/
frontend/src/features/prompts/
frontend/src/features/health/
frontend/src/features/debug/
frontend/src/features/settings/
```

Páginas obrigatórias:

```txt
LandingPage
GenerationCreatePage
GenerationDetailPage
GenerationProgressPage
GeneratedFilesPage
PromptCatalogPage
HealthPage
DebugLogsPage
SettingsPage
```

Para cada página de cada funcionalidade, implemente:

- estrutura responsiva;
- loading state;
- empty state;
- error state;
- validações;
- logs de renderização em modo trace;
- componentes compartilhados;
- widgets específicos, se necessário;
- acessibilidade básica;
- semântica HTML correta.

Nenhuma funcionalidade deve ser implementada somente como um componente isolado em `App.tsx`.

---

## 21.2 Arquitetura obrigatória de modularização do backend

O backend em NestJS deve ser modularizado por domínio e por parte de cada funcionalidade. Não crie um único service gigante.

Cada módulo deve ter responsabilidade clara e estrutura própria.

Estrutura base obrigatória:

```txt
backend/src/
  main.ts
  app.module.ts

  common/
    decorators/
    filters/
    guards/
    interceptors/
    pipes/
    types/
    utils/
      slugify.ts
      safe-file-name.ts
      path-safety.ts
      hash.ts
      time.ts

  config/
    config.module.ts
    app.config.ts
    env.validation.ts

  database/
    database.module.ts
    migrations/
    seed/

  health/
    health.module.ts
    health.controller.ts
    health.service.ts
    dto/
    tests/

  debug/
    debug.module.ts
    debug.controller.ts
    debug.service.ts
    dto/
    tests/

  ollama/
    ollama.module.ts
    controllers/
      ollama-health.controller.ts
    services/
      ollama.service.ts
      ollama-chat.service.ts
    dto/
      ollama-chat-request.dto.ts
      ollama-chat-response.dto.ts
    types/
      ollama.types.ts
    tests/

  prompts/
    prompts.module.ts
    controllers/
      prompts.controller.ts
    services/
      prompts.service.ts
      prompt-reader.service.ts
      prompt-catalog.service.ts
    dto/
      prompt-file.dto.ts
    entities/
      prompt-file.entity.ts
    repositories/
      prompt-file.repository.ts
    tests/

  generations/
    generations.module.ts
    controllers/
      generations.controller.ts
    services/
      generations.service.ts
      generation-runner.service.ts
      generation-context.service.ts
      generation-status.service.ts
      generation-step-orchestrator.service.ts
    dto/
      create-generation.dto.ts
      generation-status.dto.ts
      generation-step.dto.ts
    entities/
      generation.entity.ts
      generation-step.entity.ts
    repositories/
      generation.repository.ts
      generation-step.repository.ts
    constants/
      generation-steps.ts
    tests/

  generated-files/
    generated-files.module.ts
    controllers/
      generated-files.controller.ts
    services/
      generated-files.service.ts
      generated-file-writer.service.ts
      generated-file-reader.service.ts
    dto/
      generated-file.dto.ts
    entities/
      generated-file.entity.ts
    repositories/
      generated-file.repository.ts
    tests/

  generation-logs/
    generation-logs.module.ts
    controllers/
      generation-logs.controller.ts
    services/
      generation-logs.service.ts
      generation-log-writer.service.ts
    dto/
      generation-log.dto.ts
    entities/
      generation-log.entity.ts
    repositories/
      generation-log.repository.ts
    tests/

  filesystem/
    filesystem.module.ts
    services/
      filesystem.service.ts
      path-safety.service.ts
      output-directory.service.ts
    tests/
```

### Regra de estrutura por módulo

Cada módulo de funcionalidade deve conter, quando aplicável:

```txt
{module}/
  {module}.module.ts
  controllers/
  services/
  dto/
  entities/
  repositories/
  mappers/
  constants/
  types/
  tests/
```

### Ordem obrigatória de implementação do backend

Implemente o backend nesta ordem:

1. `config` e validação de ambiente;
2. `common` com filtros, interceptors, utils e logger;
3. `database` com SQLite;
4. `health` para API, banco e Ollama;
5. `debug` para logs recentes e diagnóstico;
6. `filesystem` para segurança de paths e escrita/leitura;
7. `prompts` para catálogo e leitura dos prompts locais;
8. `ollama` para health e chamadas chat;
9. `generated-files` para persistência dos arquivos gerados;
10. `generation-logs` para trilha de eventos;
11. `generations` para orquestração completa;
12. testes, build, run e correções finais.

### Regras obrigatórias para services

- `generations.service.ts` não deve concentrar toda a lógica;
- orquestração longa deve ficar em `generation-runner.service.ts`;
- montagem de contexto deve ficar em `generation-context.service.ts`;
- atualização de status deve ficar em `generation-status.service.ts`;
- execução das etapas deve ficar em `generation-step-orchestrator.service.ts`;
- leitura de prompt deve ficar em `prompt-reader.service.ts`;
- chamada ao Ollama deve ficar em `ollama-chat.service.ts`;
- escrita de arquivo deve ficar em `generated-file-writer.service.ts`;
- logs de geração devem ficar em `generation-log-writer.service.ts`.

### Regras obrigatórias para controllers

Controllers devem ser finos e conter apenas:

- validação via DTO;
- extração de parâmetros;
- chamada ao service correto;
- retorno padronizado.

Não coloque regra de negócio nos controllers.

### Banco SQLite

Crie tabelas/entidades separadas para:

- generations;
- generation_steps;
- generated_files;
- generation_logs;
- prompt_files, se útil;
- app_settings, se útil.

Cada entidade deve ter:

- id;
- createdAt;
- updatedAt;
- campos de status quando aplicável;
- índices úteis;
- relação clara com `generationId`.

### Testes mínimos por módulo

Crie testes básicos para:

- slugify;
- path safety;
- leitura de prompts;
- chamada mockada ao Ollama;
- criação de geração;
- atualização de status;
- escrita de arquivo;
- health check.

---

## 21.3 Regras de implementação incremental e validação por camada

O Codex deve implementar em camadas, sempre validando antes de avançar.

Ordem global obrigatória:

1. criar estrutura do monorepo/app;
2. configurar backend NestJS;
3. configurar SQLite;
4. configurar logs debug/trace do backend;
5. implementar módulos backend base;
6. implementar módulos backend de negócio;
7. executar configure/install/build/run do backend;
8. corrigir todos os erros e warnings do backend;
9. configurar frontend React/Vite;
10. implementar tokens, tema e estilos globais;
11. implementar componentes compartilhados;
12. implementar widgets compartilhados;
13. implementar core frontend;
14. implementar páginas por funcionalidade;
15. executar configure/install/build/run do frontend;
16. corrigir todos os erros e warnings do frontend;
17. executar frontend e backend juntos;
18. monitorar logs dos dois processos;
19. corrigir qualquer warning ou erro restante;
20. validar fluxo completo com uma ideia de teste.

A implementação só deve ser considerada concluída quando:

- backend compilar sem erro;
- frontend compilar sem erro;
- nenhum warning relevante permanecer sem correção ou justificativa técnica;
- backend iniciar corretamente;
- frontend iniciar corretamente;
- health checks responderem;
- logs debug/trace funcionarem;
- fluxo de geração criar registros no SQLite;
- fluxo de geração criar arquivos no disco;
- frontend exibir status real das etapas.


## 22. Estrutura de pastas da aplicação

Crie a aplicação com estrutura modular e componentizada. A árvore abaixo é uma referência mínima; preserve a separação entre `shared`, `core` e `features` no frontend e a separação por módulos de domínio no backend.

Crie a aplicação com estrutura semelhante a:

```txt
app/
  backend/
    src/
      main.ts
      app.module.ts
      config/
        env.validation.ts
        app.config.ts
      database/
        database.module.ts
      generations/
        generations.module.ts
        generations.controller.ts
        generations.service.ts
        dto/
          create-generation.dto.ts
        entities/
          generation.entity.ts
          generation-step.entity.ts
          generated-file.entity.ts
          generation-log.entity.ts
      ollama/
        ollama.module.ts
        ollama.service.ts
      prompts/
        prompts.module.ts
        prompts.service.ts
      files/
        files.module.ts
        files.service.ts
      common/
        utils/
          slugify.ts
          safe-file-name.ts
          path-safety.ts
        filters/
          http-exception.filter.ts
    data/
      .gitkeep
    package.json
    tsconfig.json
    nest-cli.json
    .env.example

  frontend/
    src/
      App.tsx
      main.tsx
      pages/
        LandingPage.tsx
      components/
        GenerationProgress.tsx
        StepStatusList.tsx
        IdeaInput.tsx
        GeneratedFilesList.tsx
        LogsPanel.tsx
        EmptyState.tsx
        ErrorState.tsx
      services/
        api.ts
      styles/
        tokens.css
        global.css
    package.json
    vite.config.ts
    .env.example

  README.md
```

---

## 23. Variáveis de ambiente

Crie `.env.example` no backend:

```env
PORT=3333
DATABASE_URL=file:./data/app.sqlite
OLLAMA_BASE_URL=http://192.168.0.103:11434
OLLAMA_MODEL=llama3.1:8b
OUTPUT_BASE_DIR=./generated
PROMPTS_BASE_DIR=C:\Users\Fabricio.Cunha\Downloads\prompts\novos
OLLAMA_TIMEOUT_MS=600000
NODE_ENV=development
```

Crie `.env.example` no frontend:

```env
VITE_API_BASE_URL=http://localhost:3333
VITE_LOG_LEVEL=trace
VITE_ENABLE_TRACE=true
VITE_ENABLE_DEBUG_PANEL=true
```

---

## 24. Validações obrigatórias

Valide:

- ideia vazia;
- ideia curta demais;
- diretório de prompts inexistente;
- arquivo de prompt ausente;
- falha de conexão com Ollama;
- resposta vazia do modelo;
- falha ao criar pasta;
- tentativa de ler arquivo fora da pasta da geração;
- geração inexistente;
- status inexistente.

---

## 27. Segurança básica

Implemente:

- sanitização do nome do produto;
- bloqueio de path traversal;
- leitura apenas dentro de `OUTPUT_BASE_DIR`;
- leitura de prompts apenas dentro de `PROMPTS_BASE_DIR`;
- limite de tamanho para input inicial;
- tratamento seguro de erros;
- não expor stack trace completo no frontend;
- CORS configurado para desenvolvimento local.

---

## 27.1 Critérios adicionais de aceite para componentização e modularização

A entrega também deve atender aos seguintes critérios:

1. frontend não pode concentrar a aplicação em `App.tsx`;
2. frontend deve possuir `shared`, `core` e `features`;
3. componentes e widgets compartilhados devem ser implementados antes das páginas;
4. cada página deve usar componentes compartilhados, widgets, hooks e services;
5. cada funcionalidade frontend deve ter sua própria pasta em `features`;
6. backend não pode concentrar a lógica em um único service;
7. backend deve possuir módulos separados para generations, prompts, ollama, generated-files, generation-logs, filesystem, health e debug;
8. cada módulo backend deve possuir controllers, services, DTOs, entities/repositories e testes quando aplicável;
9. logs debug/trace devem identificar módulo, operação, duração e correlationId;
10. configure, install, build e run devem ser executados para frontend e backend;
11. os logs de frontend e backend devem ser monitorados após o run;
12. qualquer warning ou erro encontrado deve ser corrigido completamente antes de concluir.

---

## 28. README obrigatório

Crie um `README.md` com:

1. descrição do projeto;
2. arquitetura geral;
3. pré-requisitos;
4. configuração do Ollama;
5. variáveis de ambiente;
6. como instalar backend;
7. como instalar frontend;
8. como executar;
9. como testar conexão com Ollama;
10. fluxo das etapas;
11. como os arquivos são salvos;
12. diagnóstico anti-slop da interface;
13. solução de problemas comuns;
14. seção “Execução, logs e verificação”;
15. como rodar configure, install, build e run do backend;
16. como rodar configure, install, build e run do frontend;
17. como interpretar logs de debug e trace;
18. arquitetura de componentização do frontend;
19. arquitetura modular do backend;
20. ordem de implementação em camadas;
18. checklist de warnings e erros corrigidos.

Inclua comandos:

```bash
curl http://192.168.0.103:11434/api/tags
```

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

Inclua também comandos completos de verificação:

```bash
cd backend
npm run configure
npm install
npm run build
npm run verify
npm run start:dev
```

```bash
cd frontend
npm run configure
npm install
npm run build
npm run verify
npm run dev
```

---

## 29. Critérios de aceite

A implementação será considerada concluída quando:

1. a landing page abrir corretamente;
2. o usuário conseguir digitar uma ideia;
3. o backend receber a ideia;
4. a pasta `{nome-do-produto}/` for criada;
5. a etapa 0 for executada usando o prompt correto;
6. a estética inicial gerada for salva;
7. a estética inicial for incluída no contexto das próximas etapas;
8. cada etapa seguinte aguardar a anterior terminar;
9. todos os arquivos forem salvos na pasta;
10. o frontend mostrar progresso real;
11. erros forem exibidos claramente;
12. o sistema puder ser executado localmente com comandos simples;
13. houver README completo;
14. houver `.env.example` no frontend e backend;
15. a interface seguir a estética anti-slop definida;
16. os componentes possuírem estados completos;
17. a aplicação tratar falhas do Ollama;
18. a aplicação impedir path traversal;
19. o SQLite persistir gerações, etapas, arquivos e logs;
20. a estrutura NestJS estiver modular;
21. não houver simulação de respostas;
22. backend possuir logs debug/trace estruturados;
23. frontend possuir logs debug/trace e painel de debug em desenvolvimento;
24. comandos configure, install, build e run terem sido executados no backend;
25. comandos configure, install, build e run terem sido executados no frontend;
26. health checks passarem;
27. logs terem sido monitorados;
28. warnings e erros relevantes terem sido corrigidos completamente;
29. README documentar a execução e validação.

---

## 30. Entregáveis esperados

Crie todos os arquivos necessários do projeto.

Inclua:

- backend NestJS funcional;
- frontend funcional;
- README.md;
- `.env.example`;
- scripts de execução;
- tipos TypeScript;
- tratamento de erro;
- logs detalhados em debug e trace;
- painel de debug no frontend;
- endpoints de health check;
- scripts configure, verify, build e run;
- estrutura de geração sequencial;
- tokens CSS;
- componentes visuais customizados;
- status por etapa persistido em SQLite;
- listagem dos arquivos gerados;
- endpoint para leitura dos arquivos.

---

## 31. Regra final de execução

Implemente o sistema real.

Não entregue apenas explicações.

Não crie mock de resposta do Ollama, exceto em teste isolado claramente separado.

Não execute prompts em paralelo.

Não altere a ordem das etapas.

Não ignore a estética inicial.

Não use visual genérico.

Antes de finalizar, execute configure, install, build e run para frontend e backend, monitore os logs, corrija completamente qualquer erro ou warning relevante e entregue o projeto em estado executável.

Ao final da implementação, informe:

1. quais arquivos foram criados;
2. como instalar;
3. como executar;
4. como testar a conexão com Ollama;
5. como iniciar uma geração pela interface.
