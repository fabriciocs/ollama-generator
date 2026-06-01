import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AppCard } from '../../components/AppCard';
import { ProgressTimelineProps } from './ProgressTimeline.types';

export const ProgressTimeline = ({ generation }: ProgressTimelineProps) => {
  const completed =
    generation?.steps.filter((step) => step.status === 'completed').length ?? 0;
  const total = generation?.steps.length ?? 0;
  const progress = total ? (completed / total) * 100 : 0;

  return (
    <AppCard sx={{ p: 2 }}>
      <Stack spacing={1.5}>
        <Typography variant="h6">Progresso operacional</Typography>
        <Typography color="text.secondary">
          {generation
            ? `${generation.productName} • etapa atual ${generation.currentStepKey ?? 'n/a'}`
            : 'Nenhuma geracao em andamento'}
        </Typography>
        <LinearProgress variant="determinate" value={progress} color="secondary" />
        <Typography variant="body2">{Math.round(progress)}% concluido</Typography>
      </Stack>
    </AppCard>
  );
};
