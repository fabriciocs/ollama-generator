import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { env } from '../../../core/config/env';
import { AppCard } from '../../../shared/components/AppCard';
import { AppShell } from '../../../shared/layout/AppShell';
import { PageHeader } from '../../../shared/layout/PageHeader';

export const SettingsPage = () => (
  <AppShell>
    <PageHeader title="Configuracoes" subtitle="Variaveis consumidas pelo frontend." />
    <AppCard sx={{ p: 2 }}>
      <Stack spacing={1}>
        <Typography>VITE_API_BASE_URL: {env.apiBaseUrl}</Typography>
        <Typography>VITE_LOG_LEVEL: {env.logLevel}</Typography>
        <Typography>VITE_ENABLE_TRACE: {String(env.enableTrace)}</Typography>
      </Stack>
    </AppCard>
  </AppShell>
);
