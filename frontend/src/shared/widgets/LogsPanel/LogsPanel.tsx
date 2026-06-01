import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppCard } from '../../components/AppCard';
import { LogsPanelProps } from './LogsPanel.types';

export const LogsPanel = ({ items }: LogsPanelProps) => (
  <AppCard sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Logs resumidos
    </Typography>
    <Box
      component="pre"
      sx={{
        m: 0,
        maxHeight: 260,
        overflow: 'auto',
        fontFamily: '"IBM Plex Mono", Consolas, monospace',
        fontSize: 12,
      }}
    >
      {items.slice(0, 20).map((item) => JSON.stringify(item)).join('\n')}
    </Box>
  </AppCard>
);
