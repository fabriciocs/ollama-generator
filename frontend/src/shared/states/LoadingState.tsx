import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const LoadingState = ({ message = 'Carregando...' }: { message?: string }) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <CircularProgress size={24} />
    <Typography>{message}</Typography>
  </Stack>
);
