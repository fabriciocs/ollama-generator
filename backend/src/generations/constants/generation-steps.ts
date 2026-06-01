export const generationSteps = [
  {
    stepKey: 'step-0',
    title: 'Estetica inicial',
    promptFile: '0-prompt-estetica-inicial-anti-slop.md',
    outputFileTemplate: (productName: string) =>
      `0-estetica-inicial-${productName}.md`,
  },
  {
    stepKey: 'step-1',
    title: 'Ideia inicial e enquadramento do problema',
    promptFile:
      '1-prompt-etapa-1-ideia-inicial-e-enquadramento-do-problema-ajustado.md',
    outputFileTemplate: () => '1-ideia-inicial-e-enquadramento-do-problema.md',
  },
  {
    stepKey: 'step-1-2',
    title: 'Perguntas abertas dashboard html',
    promptFile:
      '1.2-prompt-etapa-1-2-perguntas-abertas-dashboard-html-atualizado.md',
    outputFileTemplate: () => '1.2-perguntas-abertas-dashboard-html.md',
  },
  {
    stepKey: 'step-2',
    title: 'Pesquisa de mercado e benchmarking',
    promptFile: '2-prompt-etapa-2-pesquisa-de-mercado-e-benchmarking.md',
    outputFileTemplate: () => '2-pesquisa-de-mercado-e-benchmarking.md',
  },
  {
    stepKey: 'step-3',
    title: 'Analise estrategica e especificacao inicial',
    promptFile:
      '3-prompt-etapa-3-analise-estrategica-e-especificacao-inicial.md',
    outputFileTemplate: () =>
      '3-analise-estrategica-e-especificacao-inicial.md',
  },
  {
    stepKey: 'step-4',
    title: 'Especificacao funcional estruturada',
    promptFile: '4-prompt-etapa-4-especificacao-funcional-estruturada.md',
    outputFileTemplate: () => '4-especificacao-funcional-estruturada.md',
  },
  {
    stepKey: 'step-5',
    title: 'Modelo de dados e arquitetura da informacao',
    promptFile:
      '5-prompt-etapa-5-modelo-de-dados-e-arquitetura-da-informacao.md',
    outputFileTemplate: () =>
      '5-modelo-de-dados-e-arquitetura-da-informacao.md',
  },
  {
    stepKey: 'step-6',
    title: 'UX fluxos jornadas e prototipacao',
    promptFile: '6-prompt-etapa-6-ux-fluxos-jornadas-e-prototipacao.md',
    outputFileTemplate: () => '6-ux-fluxos-jornadas-e-prototipacao.md',
  },
  {
    stepKey: 'step-7',
    title: 'Design visual UI e prototipo navegavel',
    promptFile: '7-prompt-etapa-7-design-visual-ui-e-prototipo-navegavel.md',
    outputFileTemplate: () => '7-design-visual-ui-e-prototipo-navegavel.md',
  },
  {
    stepKey: 'step-8',
    title: 'Backlog plano de implementacao e QA',
    promptFile: '8-prompt-etapa-8-backlog-plano-de-implementacao-e-qa.md',
    outputFileTemplate: () => '8-backlog-plano-de-implementacao-e-qa.md',
  },
  {
    stepKey: 'step-9',
    title: 'Arquitetura tecnica e solucao',
    promptFile: '9-prompt-etapa-9-arquitetura-tecnica-e-solucao.md',
    outputFileTemplate: () => '9-arquitetura-tecnica-e-solucao.md',
  },
  {
    stepKey: 'step-10',
    title: 'Seguranca privacidade compliance e governanca',
    promptFile:
      '10-prompt-etapa-10-seguranca-privacidade-compliance-e-governanca.md',
    outputFileTemplate: () =>
      '10-seguranca-privacidade-compliance-e-governanca.md',
  },
  {
    stepKey: 'step-11',
    title: 'Documentacao final operacao e evolucao',
    promptFile: '11-prompt-etapa-11-documentacao-final-operacao-e-evolucao.md',
    outputFileTemplate: () => '11-documentacao-final-operacao-e-evolucao.md',
  },
] as const;
