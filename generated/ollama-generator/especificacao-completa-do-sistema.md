# Especificacao Completa do Sistema

## 1. Visao Geral

O sistema e uma aplicacao full-stack para transformar uma ideia inicial em uma cadeia sequencial de documentos gerados via Ollama. O objetivo central nao e apenas produzir texto, mas organizar um processo rastreavel, auditavel e repetivel para evoluir uma proposta de produto desde a intuicao inicial ate uma documentacao consolidada.

A arquitetura combina:
- Backend NestJS com TypeORM e SQLite.
- Frontend React + Vite + Material UI.
- Persistencia de artefatos em disco.
- Prompts locais versionados em arquivos Markdown.
- Logs estruturados e observabilidade operacional.

O produto foi concebido como uma linha de producao documental. Cada etapa gera um artefato que alimenta a proxima etapa. A etapa 0 funciona como referencia estetica obrigatoria e influencia todas as etapas seguintes.

## 2. Objetivo do Produto

### 2.1 Objetivo principal
Receber uma ideia em linguagem natural e gerar um conjunto sequencial de documentos estruturados para apoiar discovery, especificacao, arquitetura, planejamento e operacao.

### 2.2 Objetivos secundarios
- Dar rastreabilidade a cada etapa executada.
- Salvar cada saida em disco e no banco.
- Permitir retomada de execucao apos falhas.
- Expor status, logs, arquivos e health checks em tempo real.
- Organizar prompts como ativos locais do sistema.

### 2.3 Resultado esperado
Ao final de uma execucao bem-sucedida, o usuario deve ter:
- uma pasta propria da geracao;
- arquivos numerados por etapa;
- status final de conclusao;
- logs da geracao e do backend;
- registros persistidos em SQLite;
- visibilidade clara do estado da infraestrutura.

## 3. Leitura dos Documentos Markdown

### 3.1 README raiz
O README raiz e o documento mais importante para entender o produto. Ele define:
- a proposta da aplicacao;
- a divisao entre backend, frontend e generated;
- os requisitos de ambiente;
- o uso de Ollama;
- o fluxo sequencial das etapas;
- a estrategia de logs e verificacao;
- a filosofia anti-slop da interface;
- a organizacao modular do frontend e do backend.

### 3.2 README do backend
O README do backend e um scaffold do NestJS e nao descreve o dominio especifico do produto. Ele e util apenas como referencia de setup, testes e deploy do framework base.

### 3.3 README do frontend
O README do frontend tambem e um scaffold do Vite + React e nao descreve o produto em si. Ele serve como contexto tecnico da stack, nao como especificacao funcional do negocio.

### 3.4 README e direcao estetica
O arquivo `generated/ollama-generator/0-estetica-inicial-ollama-generator.md` define a direcao visual e funcional da experiencia:
- atelie operacional editorial;
- paleta quente;
- tipografia com contraste entre editorial e tecnica;
- componentizacao com identidade;
- leitura de fluxo, logs e arquivos como parte central da experiencia.

Essa direcao nao e um adorno. Ela deve orientar telas, componentes, estados e prototipos visuais.

## 4. Escopo Funcional

### 4.1 O que o sistema faz
- Recebe uma ideia inicial.
- Cria uma pasta de saida com slug do produto.
- Descobre prompts locais na pasta configurada.
- Cria etapas de execucao com base nesses prompts.
- Executa cada etapa de forma sequencial usando Ollama.
- Persiste cada resultado em arquivo Markdown.
- Salva logs e status em SQLite.
- Expõe informacoes de acompanhamento para o frontend.

### 4.2 O que o sistema nao faz
- Nao gera em paralelo.
- Nao substitui o julgamento humano de discovery.
- Nao depende de prompts remotos.
- Nao usa um orquestrador externo.
- Nao trata a interface como dashboard genérico.

## 5. Publico e Contexto de Uso

### 5.1 Publico provavel
- Product owners.
- Analistas de negocio.
- Designers de produto.
- Lideres tecnicos.
- Desenvolvedores que precisam de briefing estruturado.

### 5.2 Contexto de uso
- Ambientes de escritorio.
- Sessões longas de planejamento.
- Ciclos de refinamento iterativo.
- Operacao com necessidade de rastreio e retomada.

### 5.3 Tensao do produto
Converter ambiguidade em documentacao concreta sem perder contexto e sem esconder falhas.

## 6. Arquitetura de Alto Nivel

### 6.1 Backend
Responsavel por:
- orquestrar a geracao;
- validar e armazenar configuracoes;
- gravar arquivos;
- registrar logs;
- persistir entidades no SQLite;
- consultar health;
- fornecer dados ao frontend.

### 6.2 Frontend
Responsavel por:
- capturar a ideia inicial;
- mostrar progresso e status;
- exibir logs resumidos;
- listar arquivos gerados;
- mostrar health da infraestrutura;
- fornecer painel de debug;
- expor configuracoes relevantes.

### 6.3 Persistencia
- SQLite para entidades operacionais.
- Sistema de arquivos para artefatos Markdown e snapshots.
- Logs em arquivo no diretorio `logs/`.

## 7. Modulos do Backend

### 7.1 Config Module
Responsabilidade:
- carregar e validar variaveis de ambiente.
- expor configuracoes tipadas para o sistema.

Variaveis principais:
- `PORT`
- `DATABASE_URL`
- `OLLAMA_BASE_URL`
- `OLLAMA_MODEL`
- `OUTPUT_BASE_DIR`
- `PROMPTS_BASE_DIR`
- `OLLAMA_TIMEOUT_MS`
- `LOG_LEVEL`
- `LOG_DIR`
- `LOG_TO_FILE`
- `LOG_INCLUDE_CONTENT`

Resultado esperado:
- o sistema inicia com configuracao consistente e previsivel.

### 7.2 Database Module
Responsabilidade:
- configurar TypeORM com SQLite;
- registrar entidades;
- manter `synchronize: true`.

Entidades registradas:
- `GenerationEntity`
- `GenerationStepEntity`
- `GenerationStepExecutionEntity`
- `GeneratedFileEntity`
- `GenerationLogEntity`
- `PromptFileEntity`

Resultado esperado:
- persistencia simples e direta para ambiente local e de desenvolvimento.

### 7.3 Filesystem Module
Responsabilidade:
- leitura e escrita segura de arquivos;
- garantia de que caminhos ficam dentro do diretorio permitido;
- criacao de diretorios;
- estatistica de arquivos.

Regras:
- caminhos sao resolvidos com `assertInsideBaseDir`;
- tentativa de path traversal e bloqueada;
- arquivos sao sempre escritos com `utf8`.

Resultado esperado:
- nenhum artefato pode ser gravado fora do output permitido.

### 7.4 Prompts Module
Responsabilidade:
- descobrir prompts locais;
- ler prompts;
- catalogar arquivos;
- salvar metadados de prompt em SQLite.

Componentes:
- `PromptDiscoveryService`
- `PromptReaderService`
- `PromptCatalogService`
- `PromptsService`
- `PromptFileRepository`

Resultado esperado:
- os prompts sao tratados como ativos locais controlados.

### 7.5 Ollama Module
Responsabilidade:
- informar base URL, modelo e timeout;
- executar health check;
- realizar chat com mensagens estruturadas.

Resultado esperado:
- a geracao depende de um modelo local acessivel e configurado.

### 7.6 Generated Files Module
Responsabilidade:
- gravar artefatos gerados;
- registrar metadados do arquivo;
- listar arquivos por geracao;
- recuperar a versao mais recente dos artefatos.

Resultado esperado:
- cada saida de etapa existe como arquivo fisico e como registro consultavel.

### 7.7 Generation Logs Module
Responsabilidade:
- registrar eventos de geracao por nivel;
- persistir mensagens com metadata;
- listar logs recentes e logs por geracao.

Resultado esperado:
- o usuario e o sistema conseguem inspecionar a execucao em detalhe.

### 7.8 Generations Module
Responsabilidade:
- criar geracoes;
- montar etapas com base nos prompts;
- rodar a orquestracao;
- permitir resume;
- permitir retry por etapa;
- expor status consolidado.

Resultado esperado:
- a geracao e o eixo central do sistema e pode ser acompanhada, retomada e auditada.

### 7.9 Health Module
Responsabilidade:
- verificar API, banco e Ollama.

Resultado esperado:
- o frontend sabe se a infraestrutura esta disponivel.

### 7.10 Debug Module
Responsabilidade:
- expor logs recentes do backend;
- combinar logs do backend e da geracao.

Resultado esperado:
- o painel de debug fornece contexto imediato para suporte e diagnóstico.

### 7.11 Logging Module
Responsabilidade:
- implementar logger estruturado;
- persistir logs em arquivos;
- manter buffer dos eventos recentes em memoria;
- registrar request logging.

Resultado esperado:
- todo o fluxo fica audivel por linha de log.

## 8. Modulos do Frontend

### 8.1 Core
Inclui:
- API client;
- logging;
- router;
- theme;
- hooks;
- tipos globais;
- configuracao de ambiente.

### 8.2 Shared Layout
Componentes:
- `ResponsiveContainer`
- `AppShell`
- `PageHeader`
- `PageSection`
- `SplitWorkbenchLayout`

Objetivo:
- padronizar estrutura e navegacao entre as telas.

### 8.3 Shared Components
Componentes:
- `AppButton`
- `AppCard`
- `AppInput`
- `AppSelect`
- `AppTextArea`
- `AppBadge`
- `AppAlert`
- `AppModal`
- `AppTable`

Objetivo:
- consolidar a linguagem visual e reduzir divergencia entre telas.

### 8.4 Shared States
Componentes:
- `EmptyState`
- `LoadingState`
- `ErrorState`
- `SuccessState`
- `PermissionDeniedState`

Objetivo:
- padronizar estados de interface e feedback.

### 8.5 Widgets
Widgets principais:
- `IdeaWorkbenchForm`
- `ProgressTimeline`
- `StepStatusList`
- `GeneratedFilesList`
- `LogsPanel`
- `HealthStatusWidget`
- `DebugPanel`

Objetivo:
- reunir a telemetria operacional do produto em blocos funcionais.

### 8.6 Features
Rotas e telas:
- landing;
- generations;
- generated files;
- prompts;
- health;
- debug;
- settings.

Observacao importante:
- `GenerationCreatePage`, `GenerationDetailPage` e `GenerationProgressPage` reutilizam a landing como tela principal.

## 9. Entidades e Modelo de Dados

### 9.1 GenerationEntity
Representa uma execucao de geracao.

Atributos:
- `id`
- `idea`
- `productName`
- `outputDir`
- `status`
- `currentStepKey`
- `errorMessage`
- `lastGeneratedFile`
- `finishedAt`
- `createdAt`
- `updatedAt`

Objetivo:
- representar a execução inteira do pipeline.

Resultado esperado:
- cada geracao tem identidade, pasta, estado e historico de progresso.

### 9.2 GenerationStepEntity
Representa uma etapa da geracao.

Atributos:
- `id`
- `generationId`
- `stepKey`
- `title`
- `promptPath`
- `outputFile`
- `status`
- `orderIndex`
- `startedAt`
- `finishedAt`
- `durationMs`
- `errorMessage`
- `createdAt`
- `updatedAt`

Objetivo:
- rastrear o ciclo de cada etapa e sua ordenacao.

### 9.3 GenerationStepExecutionEntity
Representa uma tentativa de execucao de uma etapa.

Atributos:
- `id`
- `generationId`
- `stepId`
- `attemptNumber`
- `status`
- `promptPath`
- `outputFile`
- `inputSnapshotJson`
- `outputHash`
- `startedAt`
- `finishedAt`
- `durationMs`
- `errorMessage`
- `createdAt`
- `updatedAt`

Objetivo:
- registrar retries e execucoes repetidas com rastreabilidade.

### 9.4 GeneratedFileEntity
Representa um arquivo persistido no output.

Atributos:
- `id`
- `generationId`
- `stepId`
- `fileName`
- `relativePath`
- `absolutePath`
- `mimeType`
- `sizeBytes`
- `createdAt`
- `updatedAt`

Objetivo:
- garantir indexacao consultavel dos artefatos de saida.

### 9.5 GenerationLogEntity
Representa um log de negocio ou operacao relacionado a uma geracao.

Atributos:
- `id`
- `generationId`
- `stepId`
- `level`
- `message`
- `metadataJson`
- `createdAt`

Objetivo:
- registrar eventos relevantes do fluxo com nivel e contexto.

### 9.6 PromptFileEntity
Representa um prompt local descoberto pelo backend.

Atributos:
- `id`
- `fileName`
- `absolutePath`
- `relativePath`
- `sizeBytes`
- `createdAt`
- `updatedAt`

Objetivo:
- catalogar prompts como ativos locais versionados.

## 10. Contratos de API

### 10.1 Generations
Base: `/api/generations`

#### POST `/api/generations`
Entrada:
- `idea: string`

Validacao:
- string obrigatoria;
- minimo de 10 caracteres;
- maximo de 10.000 caracteres.

Resultado esperado:
- cria a geracao;
- cria a pasta do produto;
- gera as etapas com base nos prompts;
- inicia a execucao assincrona;
- retorna o status atual da geracao.

#### GET `/api/generations`
Resultado esperado:
- lista todas as geracoes em ordem decrescente de criacao, com status consolidado.

#### GET `/api/generations/:generationId`
Resultado esperado:
- retorna o status detalhado de uma geracao especifica.

#### POST `/api/generations/:generationId/resume`
Resultado esperado:
- retoma a execucao na primeira etapa nao concluida.

#### POST `/api/generations/:generationId/steps/:stepId/retry`
Resultado esperado:
- reinicia a partir da etapa especificada;
- redefine as etapas posteriores para `pending`;
- preserva contexto anterior quando aplicavel.

### 10.2 Generated Files
Base: `/api/generated-files`

#### GET `/api/generated-files/:generationId`
Resultado esperado:
- lista os arquivos gerados para a geracao.

### 10.3 Generation Logs
Base: `/api/generation-logs`

#### GET `/api/generation-logs/recent`
Parametros:
- `limit` opcional.

Resultado esperado:
- devolve logs recentes do sistema.

#### GET `/api/generation-logs/:generationId`
Resultado esperado:
- devolve logs vinculados a uma geracao.

### 10.4 Prompts
Base: `/api/prompts`

#### GET `/api/prompts`
Resultado esperado:
- lista prompts locais catalogados e suas informacoes de arquivo.

### 10.5 Health
Base: `/api/health`

#### GET `/api/health`
Resultado esperado:
- retorna status geral da API, banco e Ollama.

#### GET `/api/health/database`
Resultado esperado:
- retorna o estado do banco.

#### GET `/api/health/ollama`
Resultado esperado:
- retorna o estado do Ollama e o modelo configurado.

### 10.6 Debug
Base: `/api/debug/logs`

#### GET `/api/debug/logs/recent`
Resultado esperado:
- retorna logs recentes do backend e logs recentes da geracao.

## 11. Fluxo Funcional End-to-End

### 11.1 Abertura da tela
O usuario entra na landing page e encontra:
- area de entrada da ideia;
- controles de geracao e atualizacao;
- feedback de infraestrutura;
- progresso da execucao;
- linha de producao de etapas;
- lista de arquivos;
- logs resumidos;
- painel de debug.

### 11.2 Criacao da geracao
Quando o usuario envia uma ideia:
1. O frontend chama `POST /api/generations`.
2. O backend valida o texto.
3. O sistema cria um slug de produto seguro.
4. O sistema cria a pasta de saida.
5. O sistema descobre os prompts em `PROMPTS_BASE_DIR`.
6. O sistema cria a geracao e suas etapas.
7. O sistema salva o snapshot inicial.
8. O runner inicia a execucao assincrona.

### 11.3 Execucao sequencial
Para cada etapa:
1. O backend marca a etapa como `running`.
2. Cria uma execution attempt.
3. Lê o prompt local.
4. Monta o contexto com:
   - prompt do sistema;
   - ideia original;
   - saida estetica de referencia;
   - saidas anteriores.
5. Envia mensagens para o Ollama.
6. Grava o arquivo de resposta.
7. Atualiza status e tempos.
8. Registra logs.
9. Atualiza o snapshot de status.

### 11.4 Finalizacao
Quando todas as etapas terminam sem erro:
- a geracao vira `completed`;
- `currentStepKey` fica nulo;
- `finishedAt` e preenchido;
- os arquivos finais ficam persistidos;
- o frontend exibe sucesso.

### 11.5 Falha
Se uma etapa falhar:
- a etapa vira `error`;
- a geracao vira `error`;
- a mensagem de erro e registrada;
- o snapshot e atualizado;
- o frontend pode exibir estado de erro e permitir resume/retry.

## 12. Regras de Negocio

### 12.1 Ordem dos prompts
Os prompts sao descobertos no diretorio local e ordenados por:
- etapa numerica;
- subetapa decimal quando existir;
- numero do passo.

Isso garante previsibilidade na sequencia.

### 12.2 Etapa 0 como referencia
A etapa 0 e uma referencia obrigatoria para as etapas seguintes.
Ela funciona como base estetica e contextual da saida final.

### 12.3 Resume
O resume reinicia a partir da primeira etapa nao concluida.
Se nao existir etapa pendente, o status atual e retornado.

### 12.4 Retry
O retry:
- nao permite repetir etapa concluida;
- reseta a etapa alvo e as etapas posteriores;
- preserva o contexto do que foi concluido antes dela;
- reexecuta a partir do ponto pedido.

### 12.5 Persistencia de snapshots
Cada mudanca relevante gera `_generation-status.json` dentro do output.
Isso permite acompanhar o estado mesmo fora do banco.

### 12.6 Contexto acumulado
Os artefatos anteriores sao lidos ou reaproveitados durante a execucao.
Isso reduz perda de contexto e reforca a continuidade entre as etapas.

### 12.7 Segurança de caminho
Todo acesso a arquivo e validado para permanecer dentro do base dir.
Tentativas de escape de diretorio sao bloqueadas.

## 13. Modelo de Interface

### 13.1 Landing / Workbench
Comportamentos:
- captura da ideia;
- botoes para gerar, atualizar, continuar e copiar caminho;
- bloco de health;
- bloco de timeline/progresso;
- lista de etapas;
- lista de arquivos;
- logs resumidos;
- painel de debug.

Resultado esperado:
- o usuario acompanha a geracao como uma bancada de trabalho, nao como um sistema abstrato.

### 13.2 Pagina de arquivos
Comportamentos:
- lista os artefatos persistidos da geracao mais recente.

Resultado esperado:
- acesso rapido aos documentos finais.

### 13.3 Catalogo de prompts
Comportamentos:
- lista os prompts locais;
- mostra caminho e tamanho.

Resultado esperado:
- transparencia sobre a materia-prima da geracao.

### 13.4 Health
Comportamentos:
- mostra API, SQLite e Ollama.

Resultado esperado:
- diagnostico imediato de disponibilidade.

### 13.5 Debug
Comportamentos:
- mostra logs recentes do backend;
- agrega logs da geracao;
- permite limpar logs visuais no painel local.

Resultado esperado:
- suporte e diagnostico mais rapido.

### 13.6 Settings
Comportamentos:
- expõe variaveis de frontend relevantes.

Resultado esperado:
- conferência rápida de ambiente.

## 14. Componentes e Widgets

### 14.1 AppShell
Papel:
- navega entre as rotas principais.

Resultado esperado:
- interface consistente entre paginas.

### 14.2 PageHeader
Papel:
- apresenta titulo e subtitulo com assinatura editorial.

Resultado esperado:
- contextualizacao rapida da tela.

### 14.3 IdeaWorkbenchForm
Papel:
- captura a ideia inicial;
- dispara a geracao;
- oferece atualizacao, resume e copia do caminho.

Resultado esperado:
- ponto unico de entrada da jornada.

### 14.4 ProgressTimeline
Papel:
- mostra progresso consolidado.

Resultado esperado:
- leitura rapida do estado da geracao.

### 14.5 StepStatusList
Papel:
- lista etapas e status;
- oferece retry por etapa com erro.

Resultado esperado:
- rastreio funcional do pipeline.

### 14.6 GeneratedFilesList
Papel:
- lista arquivos gerados e tamanho.

Resultado esperado:
- visibilidade dos artefatos finais.

### 14.7 LogsPanel
Papel:
- mostra logs resumidos em formato tecnico.

Resultado esperado:
- contexto rapido sem abrir ferramentas externas.

### 14.8 HealthStatusWidget
Papel:
- mostra os tres principais sinais da infraestrutura.

Resultado esperado:
- disponibilidade operacional facilmente percebida.

### 14.9 DebugPanel
Papel:
- agrega logs do frontend e backend;
- permite limpar a visualizacao.

Resultado esperado:
- diagnostico visual direto.

### 14.10 AppCard, AppButton, AppInput, AppSelect, AppTextArea, AppBadge, AppAlert, AppModal, AppTable
Papel:
- padronizar componentes visuais e de interacao.

Resultado esperado:
- reduzir inconsistencias e acelerar composicao de telas.

## 15. Estados do Sistema

### 15.1 GenerationStatus
Valores:
- `created`
- `running`
- `completed`
- `error`

### 15.2 StepStatus
Valores:
- `pending`
- `running`
- `completed`
- `error`
- `skipped`

### 15.3 Estados de interface
- vazio;
- carregando;
- sucesso;
- erro;
- sem permissao.

Resultado esperado:
- o usuario entende imediatamente o que acontece e o que pode fazer a seguir.

## 16. Observabilidade e Logs

### 16.1 Logger de aplicacao
O logger:
- grava em stdout/stderr;
- persiste em arquivos `backend-*.log`;
- mantém buffer recente em memoria;
- respeita nivel de log.

### 16.2 Request logging
Cada request HTTP recebe:
- correlation id;
- log de inicio;
- log de conclusao;
- duracao.

### 16.3 Erros HTTP
O filtro global de excecao:
- padroniza resposta;
- registra o erro;
- inclui correlationId;
- devolve timestamp.

### 16.4 Logs de geracao
Os logs de negocio registram:
- leitura de prompt;
- inicio/fim de passo;
- sucesso;
- erro;
- metadados de tentativa.

Resultado esperado:
- qualquer falha pode ser rastreada do endpoint ate a etapa da geracao.

## 17. Segurança e Integridade

### 17.1 Protecao contra path traversal
O sistema bloqueia escrita/leitura fora do diretorio permitido.

### 17.2 Slug seguro
O nome do produto e gerado por slugificacao e evita duplicacao de pasta.

### 17.3 Validacao de entrada
O texto da ideia precisa respeitar limites minimos e maximos.

### 17.4 Prompts locais
O backend usa prompts do filesystem local e nao depende de prompt remoto para operar.

### 17.5 Saida previsivel
Todos os arquivos sao nomeados e guardados de forma consistente.

## 18. Requisitos Nao Funcionais

### 18.1 Confiabilidade
- falhas devem ser registradas;
- a geracao pode ser retomada;
- o estado deve sobreviver via banco e snapshot.

### 18.2 Rastreabilidade
- cada etapa tem id, status, tempo e historico de execucoes.

### 18.3 Simplicidade operacional
- backend local;
- SQLite;
- arquivos locais;
- Ollama local.

### 18.4 Legibilidade da interface
- foco em leitura longa;
- hierarquia clara;
- estados bem definidos;
- densidade informacional sem ruido.

### 18.5 Escalabilidade funcional
O sistema foi desenhado para adicionar novas etapas via novos prompts locais, sem reestruturar a arquitetura principal.

## 19. Resultados Esperados Por Módulo

### 19.1 Backend
Esperado:
- criar e acompanhar geracoes;
- executar etapas em sequencia;
- persistir todos os artefatos e registros;
- expor status e logs de forma confiavel.

### 19.2 Frontend
Esperado:
- capturar ideia;
- exibir progresso;
- permitir diagnostico;
- mostrar arquivos e health;
- oferecer uma experiencia coesa e operacional.

### 19.3 Armazenamento
Esperado:
- cada geracao cria uma pasta;
- cada etapa gera um arquivo;
- snapshots e logs sao salvos;
- registros do banco acompanham os artefatos fisicos.

### 19.4 Ollama
Esperado:
- responder aos prompts locais;
- manter contexto sequencial;
- produzir saidas consistentes com a etapa atual.

### 19.5 Operacao
Esperado:
- o usuario consegue iniciar, pausar visualmente, retomar, repetir etapas e auditar o que foi gerado.

## 20. Critérios de Aceitacao

### 20.1 Criacao de geracao
- uma ideia com pelo menos 10 caracteres cria uma geracao valida;
- uma pasta de saida e criada;
- etapas sao geradas a partir dos prompts locais;
- o status inicial e retornado.

### 20.2 Execucao
- as etapas sao executadas em ordem;
- cada etapa gera um artefato;
- os logs sao gravados;
- o status e atualizado apos cada passo.

### 20.3 Falha
- se uma etapa falhar, a geracao vai para `error`;
- o erro aparece no status;
- o usuário pode retomar ou repetir.

### 20.4 Consulta
- o frontend consegue consultar:
  - status;
  - arquivos;
  - prompts;
  - health;
  - logs recentes.

### 20.5 Observabilidade
- toda acao importante gera log;
- o debug panel e alimentado;
- o usuário ve contexto suficiente para agir.

## 21. Definicao de Pronto

Uma geracao e considerada pronta quando:
- todas as etapas foram concluídas;
- os arquivos finais existem;
- o status final e `completed`;
- o snapshot final foi atualizado;
- a interface consegue refletir o resultado sem inconsistencias.

## 22. Conclusao

Este sistema nao e apenas um gerador de textos. Ele e uma linha de producao documental com estado, logs, arquivo fisico, persistencia relacional e interface de acompanhamento. A proposta de valor esta em transformar uma ideia imprecisa em uma trilha estruturada de documentos, com controle operacional e linguagem visual coerente com o ato de produzir especificacoes.

O resultado esperado e uma plataforma que:
- organiza conhecimento;
- reduz o caos do ponto de partida;
- preserva contexto entre etapas;
- permite analise, retomada e auditoria;
- apresenta uma experiencia visual especifica, humana e funcional.
