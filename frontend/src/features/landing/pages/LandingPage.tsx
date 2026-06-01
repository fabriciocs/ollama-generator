import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { traceRender } from '../../../core/logging/trace';
import { EmptyState } from '../../../shared/states/EmptyState';
import { ErrorState } from '../../../shared/states/ErrorState';
import { SuccessState } from '../../../shared/states/SuccessState';
import { AppShell } from '../../../shared/layout/AppShell';
import { PageHeader } from '../../../shared/layout/PageHeader';
import { DebugPanel } from '../../../shared/widgets/DebugPanel';
import { GeneratedFilesList } from '../../../shared/widgets/GeneratedFilesList';
import { HealthStatusWidget } from '../../../shared/widgets/HealthStatusWidget';
import { LogsPanel } from '../../../shared/widgets/LogsPanel';
import { ProgressTimeline } from '../../../shared/widgets/ProgressTimeline';
import { StepStatusList } from '../../../shared/widgets/StepStatusList';
import { IdeaWorkbenchForm } from '../components/IdeaWorkbenchForm';
import { useLanding } from '../hooks/useLanding';

export const LandingPage = () => {
  traceRender('LandingPage');
  const { generation, files, health, debug, createGeneration, refreshGeneration } =
    useLanding();

  const frontendSummary = useMemo(
    () => debug?.backend?.slice(0, 8) ?? [],
    [debug?.backend],
  );

  return (
    <AppShell>
      <Stack spacing={3}>
        <PageHeader
          title="Gerador de Especificacao Completa de Sistemas"
          subtitle="Transforme uma ideia inicial em uma documentacao estrategica, funcional, tecnica, visual e operacional usando uma cadeia sequencial de prompts com Ollama."
        />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={3}>
              <IdeaWorkbenchForm
                onSubmit={async (idea) => {
                  await createGeneration(idea);
                }}
                outputDir={generation?.outputDir}
                onRefresh={() => void refreshGeneration()}
              />
              {!generation ? (
                <EmptyState message="Digite uma ideia para iniciar a primeira linha de producao documental." />
              ) : null}
              {generation?.errorMessage ? <ErrorState message={generation.errorMessage} /> : null}
              {generation?.status === 'completed' ? (
                <SuccessState message="Geracao concluida com sucesso." />
              ) : null}
              <LogsPanel items={frontendSummary} />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={3}>
              <HealthStatusWidget health={health} />
              <ProgressTimeline generation={generation} />
              {generation?.steps?.length ? <StepStatusList steps={generation.steps} /> : null}
              {files.length ? <GeneratedFilesList files={files} /> : null}
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          A interface mostra a ideia sendo lapidada, nao apenas processada.
        </Typography>
        <DebugPanel backendEvents={debug?.backend ?? []} />
      </Stack>
    </AppShell>
  );
};
