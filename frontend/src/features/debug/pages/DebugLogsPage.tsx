import { useEffect, useState } from 'react';
import { DebugResponse } from '../../../core/types/api.types';
import { AppShell } from '../../../shared/layout/AppShell';
import { PageHeader } from '../../../shared/layout/PageHeader';
import { LogsPanel } from '../../../shared/widgets/LogsPanel';
import { debugApi } from '../services/debug.api';

export const DebugLogsPage = () => {
  const [debug, setDebug] = useState<DebugResponse | null>(null);
  useEffect(() => {
    void debugApi.recent().then(setDebug).catch(() => setDebug(null));
  }, []);
  return (
    <AppShell>
      <PageHeader title="Logs e diagnostico" subtitle="Eventos recentes do backend e das geracoes." />
      <LogsPanel items={[...(debug?.backend ?? []), ...(debug?.generations ?? [])]} />
    </AppShell>
  );
};
