# Gerador de Especificacao Completa de Sistemas

Aplicacao full-stack para transformar uma ideia inicial em uma cadeia sequencial de documentos gerados via Ollama. O backend usa NestJS + TypeORM + SQLite para rastreabilidade operacional; o frontend usa React + Vite + Material UI com uma direcao visual de atelie editorial.

## Arquitetura geral

- `backend/`: API NestJS, SQLite, logs estruturados, health checks, prompts locais, orquestracao sequencial e persistencia de artefatos.
- `frontend/`: landing page operacional, progresso em tempo real, debug panel, health/status e catalogos auxiliares.
- `generated/`: artefatos Markdown/HTML produzidos por geracao.

## Pre-requisitos

- Node.js 22+
- npm 11+
- Ollama acessivel em `http://192.168.0.103:11434`
- Pasta de prompts local configurada em `PROMPTS_BASE_DIR`

## Configuracao do Ollama

```bash
curl http://192.168.0.103:11434/api/tags
```

Defina no backend:

```env
OLLAMA_BASE_URL=http://192.168.0.103:11434
OLLAMA_MODEL=llama3.1:8b
```

## Variaveis de ambiente

- Backend: copie `backend/.env.example`
- Frontend: copie `frontend/.env.example`

## Instalacao

```bash
npm run install:all
```

Ou manualmente:

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

## Execucao, logs e verificacao

Backend:

```bash
cd backend
npm run configure
npm install
npm run build
npm run verify
npm run start:dev
```

Frontend:

```bash
cd frontend
npm run configure
npm install
npm run build
npm run verify
npm run dev
```

Na raiz:

```bash
npm run configure
npm run install:all
npm run build
npm run verify
```

Windows com duas janelas separadas:

```bash
npm run start:windows
```

Ou direto:

```bash
start-dev-windows.cmd
```

Esse launcher abre:

- uma janela para o backend rodando `configure`, `install`, `build`, `verify` e `start:dev`
- outra janela para o frontend rodando `configure`, `install`, `build`, `verify` e `dev`
- logs em tela e tambem em `backend/logs/backend-session.log` e `frontend/logs/frontend-session.log`

Logs principais:

- `backend/logs/backend-debug.log`
- `backend/logs/backend-error.log`
- `backend/logs/backend-trace.log` quando houver eventos nesse nivel
- painel de debug no frontend para eventos locais e do backend

## Fluxo das etapas

1. Frontend envia `POST /api/generations`.
2. Backend valida a ideia e cria o slug do produto.
3. Backend cria a pasta em `OUTPUT_BASE_DIR`.
4. Backend inicializa `_generation-status.json`.
5. Etapas rodam em sequencia, sem paralelismo.
6. Cada resposta do Ollama e salva em disco e registrada no SQLite.
7. A Etapa 0 vira referencia obrigatoria para as proximas etapas.
8. Frontend faz polling do status e atualiza progresso, logs e arquivos.

## Como os arquivos sao salvos

Cada geracao cria:

- `_generation-status.json`
- `_contexto-resumido.md`
- `_logs.md`
- arquivos numerados por etapa, como `0-estetica-inicial-{produto}.md`

## Diagnostico anti-slop da interface

| Risco visual | Como apareceria | Por que prejudica | Como evitar na implementacao |
|---|---|---|---|
| Dashboard SaaS previsivel | Cards iguais e metricas sem contexto | Parece template e nao comunica processo | Usar linha de producao documental por etapas |
| Gradiente roxo/azul generico | Hero com brilho de IA | Reduz especificidade visual | Usar paleta editorial quente com verde operacional e terracota |
| Glassmorphism sem funcao | Paineis translucidos decorativos | Prejudica leitura e parece modismo | Usar superficies solidas com bordas uteis |
| Icones decorativos | Icones de IA sem acao clara | Cria ruido visual | Usar icones apenas quando indicarem status ou acao |
| Copy generica | "Gerencie tudo em um so lugar" | Nao explica o fluxo real | Usar linguagem de geracao documental e etapas |
| Cards brancos repetidos | Interface fragmentada e monotona | Nao representa transformacao progressiva | Usar timeline, painel de processo e logs editoriais |
| Animacoes gratuitas | Pulsos e brilhos constantes | Distraem durante geracao longa | Animar somente status, progresso e feedback |

## Arquitetura de componentizacao do frontend

- `src/shared/`: componentes, widgets, states e layout reutilizaveis
- `src/core/`: API client, logger, router, theme, hooks e tipos globais
- `src/features/`: landing, generations, generated-files, prompts, health, debug e settings

## Arquitetura modular do backend

- `config`, `database`, `logging`, `filesystem`
- `health`, `debug`, `prompts`, `ollama`
- `generated-files`, `generation-logs`, `generations`

## Ordem de implementacao em camadas

1. Scaffold do backend e frontend
2. Configuracao de ambiente, logs e SQLite
3. Modulos backend base
4. Orquestracao de geracao
5. Shared/core/features no frontend
6. Build, verify e run das duas apps

## Solucao de problemas comuns

- `Prompt file not found`: confira `PROMPTS_BASE_DIR` e os nomes esperados das etapas.
- `Ollama unavailable`: valide a conectividade com `curl http://192.168.0.103:11434/api/tags`.
- `Generation not found`: o ID consultado nao existe no SQLite atual.
- `Path traversal blocked`: houve tentativa de acessar arquivo fora do diretorio permitido.

## Checklist de warnings e erros corrigidos

- Estrutura padrao do scaffold substituida por arquitetura modular.
- Persistencia local com SQLite adicionada.
- Logging estruturado no backend e store de logs no frontend adicionados.
- Endpoints de health, prompts, debug, generation logs e generated files adicionados.
- Landing page ligada ao backend real com polling de status.

## Como iniciar uma geracao pela interface

1. Inicie backend e frontend.
2. Abra a URL do Vite no navegador.
3. Digite a ideia no textarea principal.
4. Clique em `Gerar documentacao completa`.
5. Acompanhe o progresso, os logs e os arquivos gerados no painel lateral.
