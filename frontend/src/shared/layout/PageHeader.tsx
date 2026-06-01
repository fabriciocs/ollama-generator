import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const PageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <Stack spacing={1}>
    <Typography variant="overline" color="secondary.main">
      Atelie Operacional Anti-Slop
    </Typography>
    <Typography variant="h3">{title}</Typography>
    {subtitle ? <Typography color="text.secondary">{subtitle}</Typography> : null}
  </Stack>
);
