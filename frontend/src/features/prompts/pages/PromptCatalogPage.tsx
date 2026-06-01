import { useEffect, useState } from 'react';
import { PromptFile } from '../../../core/types/api.types';
import { AppShell } from '../../../shared/layout/AppShell';
import { PageHeader } from '../../../shared/layout/PageHeader';
import { AppCard } from '../../../shared/components/AppCard';
import { AppTable } from '../../../shared/components/AppTable';
import { promptsApi } from '../services/prompts.api';

export const PromptCatalogPage = () => {
  const [prompts, setPrompts] = useState<PromptFile[]>([]);
  useEffect(() => {
    void promptsApi.list().then(setPrompts).catch(() => setPrompts([]));
  }, []);

  return (
    <AppShell>
      <PageHeader title="Catalogo de prompts" subtitle="Arquivos locais lidos pelo backend." />
      <AppCard sx={{ p: 2 }}>
        <AppTable
          headers={['Arquivo', 'Tamanho', 'Caminho']}
          rows={prompts.map((prompt) => [prompt.fileName, `${prompt.sizeBytes}`, prompt.relativePath])}
        />
      </AppCard>
    </AppShell>
  );
};
