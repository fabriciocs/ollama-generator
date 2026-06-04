# 0 - Estetica Inicial Anti-Slop - Ollama Generator

## 1. Leitura rapida do produto
- Tipo de sistema: plataforma full-stack para transformar uma ideia inicial em uma cadeia sequencial de documentos gerados via Ollama.
- Publico provavel: product owners, analistas, designers, devs e lideres tecnicos que precisam estruturar um produto a partir de um ponto de partida vago.
- Contexto de uso: escritorio, area operacional, planejamento de produto e acompanhamento de geracao longa.
- Maturidade esperada dos usuarios: media a alta; o usuario entende fluxo, etapas, logs e artefatos.
- Tensao principal do produto: converter ambiguidade em documentos concretos sem perder rastreabilidade operacional.
- Hipoteses assumidas: o produto e usado em ambiente profissional, com necessidade de leitura prolongada, auditoria e iteracao continua.

## 2. Risco de esttica generica
| Risco visual | Como apareceria | Por que prejudica | Como evitar |
|---|---|---|---|
| Dashboard SaaS previsivel | cards identicos, metricas vazias e hero generico | apaga o diferencial de processo documental | usar composicao em linha de producao, com etapas e artefatos nomeados |
| Gradiente roxo/azul de IA | brilho central, neon e fundo abstrato | comunica moda, nao dominio | usar paleta quente com verde operacional e terracota editorial |
| Glassmorphism decorativo | paineis transluidos sem funcao | piora leitura e transmite efeito gratuito | usar superficies solidas com bordas uteis e contraste alto |
| Cards brancos repetidos | blocos iguais em toda a tela | fragmenta a narrativa do produto | variar densidade, hierarquia e papel de cada painel |
| Icones decorativos | simbolos de IA sem acao clara | adiciona ruido visual | usar icones apenas como sinal de status, fluxo ou acao |
| Copy vaga | "gerencie tudo em um so lugar" | nao explica o que o sistema faz | usar linguagem de etapas, artefatos, logs e orquestracao |
| Animações gratuitas | pulso, brilho e movimento continuo | distrai durante geracao longa | animar apenas progresso, foco, estado e transicoes criticas |
| Tipografia neutra demais | Inter/Roboto sem contraste de personalidade | deixa a interface anonima | combinar serifada editorial em titulos com sans funcional no corpo |

## 3. Conceito visual inicial
- Nome da direcao: Atelie Operacional Editorial.
- Metafora visual: mesa de producao de documentos, com bancada de entrada, linha de etapas e gaveta de artefatos.
- Sensacao desejada: rigor, clareza, artesanalidade tecnica e confianca operacional.
- Frase norteadora: transformar ideia vaga em documento confiavel, etapa por etapa.
- O que a interface nunca deve parecer: um painel SaaS reciclado, uma vitrine de IA genérica ou um dashboard decorativo.

## 4. Personalidade visual
- Editorial, porque o produto produz documentos e precisa parecer uma oficina de edicao, nao uma central de graficos.
- Operacional, porque existe um fluxo sequencial com logs, status e persistencia real.
- Terrosa, porque a paleta quente evita o clichê roxo/azul e passa solidez.
- Precisa, porque cada etapa tem responsabilidade clara e o layout deve reforcar isso.
- Calma, porque o processo pode ser longo e o usuario precisa de leitura estavel.
- Densa, porque ha muitos sinais de contexto, mas sem virar bagunca.
- Honesta, porque o visual deve expor o estado real do sistema, inclusive erro e atraso.
- Modular, porque o frontend e composto por areas distintas com funcoes bem definidas.

## 5. Paleta inicial
| Papel | Cor sugerida | HEX | Uso | Justificativa |
|---|---|---|---|---|
| fundo | areia quente | #F3EFE7 | background geral | cria base editorial e reduz frieza de dashboard tecnico |
| superficie | marfim | #FFFDF7 | cards, modais e paineis | melhora leitura e separa blocos sem agressividade |
| texto principal | grafite | #1F2421 | titulos e corpo | garante contraste forte e senso de confianca |
| texto secundario | verde cinza | #6D746D | legendas e ajuda contextual | diminui hierarquia sem perder legibilidade |
| borda | bege mineral | #D8CDBB | contornos sutis | organiza a pagina sem parecer grade dura |
| cor primaria | verde operacional | #315C4D | acao principal, status ativo, navegacao | conecta com estabilidade, processo e controle |
| cor de destaque | terracota | #B46A3C | acentos, chamadas e marcacao de etapas | adiciona calor e identidade de atelier editorial |
| sucesso | verde vivo contido | #2F7D57 | concluidos e confirmacoes | comunica progresso sem euforia visual |
| alerta | dourado seco | #B8872D | pendencias e atencao | avisa sem parecer erro critico |
| erro | vermelho queimado | #A8453D | falhas e bloqueios | sinaliza problema com seriedade |
| informacao | azul sisal | #3E6F8E | contexto tecnico e notas | separa informacao de acao sem quebrar a paleta |

## 6. Tipografia inicial
| Uso | Fonte sugerida | Alternativa segura | Por que usar |
|---|---|---|---|
| titulos | Fraunces | Georgia, serif | traz identidade editorial e diferencia o produto de um SaaS genérico |
| texto | IBM Plex Sans | Segoe UI, sans-serif | da legibilidade e neutralidade para leitura longa |
| dados tecnicos | IBM Plex Mono | Consolas, monospace | reforca logs, caminhos, IDs e saidas sequenciais |
| labels | IBM Plex Sans Semi Bold | Segoe UI Semibold, sans-serif | sustenta micro-hierarquias sem pesar demais |
| botoes | IBM Plex Sans Semi Bold | Segoe UI Semibold, sans-serif | leitura clara de acao com tom funcional |

## 7. Layout e composicao
- Estrutura principal: hero editorial no topo, bancada de entrada a esquerda, painel de estado e pipeline a direita, e gaveta de logs/arquivos na base ou lateral.
- Densidade: media-alta, porque o usuario precisa ver progresso, logs, etapas e arquivos ao mesmo tempo.
- Grid: 12 colunas em desktop, com divisao forte entre area de composicao e area de monitoramento.
- Ritmo visual: blocos grandes para contexto, blocos menores para status e detalhes, sempre com respiro suficiente entre grupos.
- Uso de espaco: margens amplas na periferia e compactacao interna nos cards para transmitir oficina ativa.
- Comportamento mobile: empilhar a bancada de entrada primeiro, depois status e timeline, e por ultimo logs e arquivos.
- Como evitar layout de template: dar papel especifico a cada painel, variar alturas, usar textos concretos e nao repetir cards sem funcao.

## 8. Componentes com identidade
| Componente | Aparencia desejada | Estado obrigatorio | Diferencial anti-slop |
|---|---|---|---|
| botao | cheio, com base verde e borda inferior discreta | hover, pressed, disabled | parece ferramenta principal da bancada, nao botao padrao de kit |
| input | fundo claro, borda mineral e foco marcado | focus, erro, preenchido | lembra superficie de escrita, nao campo burocratico |
| select | discreto, com seta funcional e densidade media | aberto, selecionado, vazio | organiza escolhas sem virar controle genérico |
| tabela | linhas limpas, headers fortes e densidade controlada | vazio, carregando, ordenacao | privilegia rastreabilidade e leitura operacional |
| card | fundo marfim, borda sutil e titulo editorial | default, hover, ativo | cada card tem uma funcao na cadeia, nao apenas uma caixa |
| badge | pill compacta, sem brilho excessivo | sucesso, alerta, erro, neutro | comunica status rapido e legivel |
| menu | contextual, denso e curto | aberto, item ativo, desabilitado | evita menus decorativos e privilegia acao real |
| painel | estrutura de observacao com cabecalho forte | expandido, recolhido | funciona como janela de monitoramento, nao ornamento |
| alerta | bloco com contraste real e iconografia minima | info, warning, error, success | fala o necessario e para de falar quando nao ajuda |
| modal | superficie solida, titulo forte e area de acao clara | aberto, fechamento, foco | parece resolucao de tarefa, nao pop-up promocional |
| empty state | texto especifico, ilustração abstrata minima e proxima acao | vazio, sem dados | evita humor visual e explica o proximo passo |
| loading | barras, skeletons e progresso verdadeiro | inicial, parcial, aguardando | mostra processo em vez de efeitos decorativos |
| erro | vermelho queimado, texto objetivo e CTA de recuperacao | falha, retry, bloqueado | trata erro como parte do fluxo, nao como interrupcao abstrata |
| sem permissao | aviso seco, pouco ornamento e caminho de retorno | negado, solicitar acesso | mantém a seriedade do produto e reduz frustração |

## 9. Movimento e microinteracoes
- Feedback de clique: leve compressao do botao e contraste imediato de estado.
- Foco: contorno visivel e consistente em inputs, selects e areas interativas.
- Carregamento: skeletons discretos e barra de progresso real, sem shimmer exagerado.
- Expansao: abrir paineis de debug e logs com transicao curta e previsivel.
- Mudanca de status: badges e etapas trocam de cor e texto com suavidade.
- Transicao entre etapas: destaque linear do passo atual na timeline.
- Erro: aparicao clara, sem tremor ou excesso de animacao.
- Sucesso: confirmacao contida, sem fogos visuais.
- Quando nao animar: em leitura de logs, tabelas longas, areas densas e estados estaticos, porque movimento continuo atrapalha foco.

## 10. Tokens CSS iniciais
```css
:root {
  --color-bg: #f3efe7;
  --color-surface: #fffdf7;
  --color-text: #1f2421;
  --color-muted: #6d746d;
  --color-border: #d8cdbb;
  --color-primary: #315c4d;
  --color-accent: #b46a3c;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'IBM Plex Sans', 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', Consolas, monospace;
}
```

## 11. Diretrizes de implementacao frontend
- HTML semantico: usar sections, headers, aside, main e footer para explicitar a leitura da pagina.
- CSS: preferir variaveis, bordas sutis, sombras contidas e densidade controlada.
- React: dividir a tela em blocos com papel claro, evitando componentes monstros e cards decorativos.
- Flutter, se aplicavel: mapear os mesmos tokens de cor, radius e tipografia para manter a linguagem do produto.
- Responsividade: preservar a ordem mental do fluxo, nao apenas reempilhar blocos.
- Acessibilidade: contraste alto, foco visivel, labels claros e mensagens de erro descritivas.
- Estados: tratar vazio, carregando, sucesso, erro e bloqueado como estados de primeira classe.
- Tema: manter um unico tema quente por padrao; escuro so se houver necessidade real de operacao noturna.
- Componentes reutilizaveis: buttons, badges, cards, panels, timelines e alerts devem obedecer aos mesmos tokens.

## 12. Checklist anti-slop
- [ ] A tela parece desenhada para geracao sequencial de documentos, e nao para analytics generico.
- [ ] A paleta evita roxo/azul como atalho de IA.
- [ ] Cada card tem funcao operacional clara.
- [ ] O hero explica o produto sem slogan vazio.
- [ ] Os logs parecem parte central do sistema.
- [ ] A tipografia tem contraste entre editorial e tecnico.
- [ ] Os estados de erro e loading sao serios e utilitarios.
- [ ] A densidade visual e suficiente para operar, mas nao caotica.
- [ ] Os botoes parecem ferramentas, nao enfeites.
- [ ] Os badges informam status real e nao apenas cor.
- [ ] A composicao evita simetria demais e monotonia de template.
- [ ] O layout mobile preserva hierarquia e leitura.
- [ ] O visual remete a oficina editorial, nao a dashboard SaaS padrao.
- [ ] Ha espaco para rastreabilidade, etapas e artefatos.

## 13. Recomendacoes finais
- Use esta esttica como base unica para a landing page, o painel de progresso e os catalogos auxiliares.
- Mantenha a narrativa de mesa de producao: entrada da ideia, processamento por etapas e saida de artefatos.
- Leve a mesma paleta e tipografia para os estados vazios, de erro e de sucesso.
- Evite adicionar brilhos, gradientes intensos ou componentes muito ornamentados nas proximas etapas.
- Em prototipacao, priorize hierarquia, densidade e leitura; em implementacao, priorize tokens reutilizaveis e componentes consistentes.
