import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AppBadge } from '../../components/AppBadge';
import { AppCard } from '../../components/AppCard';
import { HealthStatusWidgetProps } from './HealthStatusWidget.types';

export const HealthStatusWidget = ({ health }: HealthStatusWidgetProps) => (
  <AppCard sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Estado da infraestrutura
    </Typography>
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
      <AppBadge label={`API ${health?.api ?? 'unknown'}`} />
      <AppBadge label={`SQLite ${health?.database ?? 'unknown'}`} />
      <AppBadge label={`Ollama ${health?.ollama ?? 'unknown'}`} />
    </Stack>
  </AppCard>
);
