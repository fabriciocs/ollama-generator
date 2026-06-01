import Typography from '@mui/material/Typography';
import { AppCard } from '../components/AppCard';

export const EmptyState = ({ message }: { message: string }) => (
  <AppCard sx={{ p: 3 }}>
    <Typography>{message}</Typography>
  </AppCard>
);
