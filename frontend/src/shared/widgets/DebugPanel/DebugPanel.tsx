import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSyncExternalStore } from 'react';
import { frontendLogStore } from './DebugPanel.store';
import { DebugPanelProps } from './DebugPanel.types';

export const DebugPanel = ({ backendEvents }: DebugPanelProps) => {
  const frontendEvents = useSyncExternalStore(
    frontendLogStore.subscribe,
    frontendLogStore.getSnapshot,
  );

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Painel de debug</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <Button onClick={() => frontendLogStore.clear()} size="small">
            Limpar logs visuais
          </Button>
          <Typography variant="subtitle2">Frontend</Typography>
          <pre>{frontendEvents.map((entry) => JSON.stringify(entry)).join('\n')}</pre>
          <Typography variant="subtitle2">Backend</Typography>
          <pre>{backendEvents.map((entry) => JSON.stringify(entry)).join('\n')}</pre>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
