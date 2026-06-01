import { useEffect, useState } from 'react';
import { HealthResponse } from '../../../core/types/api.types';
import { AppShell } from '../../../shared/layout/AppShell';
import { PageHeader } from '../../../shared/layout/PageHeader';
import { HealthStatusWidget } from '../../../shared/widgets/HealthStatusWidget';
import { healthApi } from '../services/health.api';

export const HealthPage = () => {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  useEffect(() => {
    void healthApi.get().then(setHealth).catch(() => setHealth(null));
  }, []);
  return (
    <AppShell>
      <PageHeader title="Health checks" subtitle="API, SQLite e Ollama em um unico painel." />
      <HealthStatusWidget health={health} />
    </AppShell>
  );
};
