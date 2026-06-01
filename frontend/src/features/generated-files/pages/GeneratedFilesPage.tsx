import { useEffect, useState } from 'react';
import { GeneratedFileRecord } from '../../../core/types/api.types';
import { AppShell } from '../../../shared/layout/AppShell';
import { PageHeader } from '../../../shared/layout/PageHeader';
import { GeneratedFilesList } from '../../../shared/widgets/GeneratedFilesList';
import { EmptyState } from '../../../shared/states/EmptyState';
import { generationsApi } from '../../generations/services/generations.api';
import { generatedFilesApi } from '../services/generated-files.api';

export const GeneratedFilesPage = () => {
  const [files, setFiles] = useState<GeneratedFileRecord[]>([]);

  useEffect(() => {
    void (async () => {
      const generations = await generationsApi.list();
      if (generations[0]?.id) {
        setFiles(await generatedFilesApi.list(generations[0].id));
      }
    })();
  }, []);

  return (
    <AppShell>
      <PageHeader title="Arquivos gerados" subtitle="Ultimos artefatos persistidos no disco." />
      {files.length ? <GeneratedFilesList files={files} /> : <EmptyState message="Nenhum arquivo gerado ainda." />}
    </AppShell>
  );
};
