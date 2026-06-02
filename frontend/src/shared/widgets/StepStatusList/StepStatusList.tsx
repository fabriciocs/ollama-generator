import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ReplayIcon from '@mui/icons-material/Replay';
import { AppBadge } from '../../components/AppBadge';
import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { StepStatusListProps } from './StepStatusList.types';

export const StepStatusList = ({ steps, onRetryStep }: StepStatusListProps) => (
  <AppCard sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Linha de producao documental
    </Typography>
    <List dense disablePadding>
      {steps.map((step, index) => (
        <ListItem key={step.id} divider disableGutters sx={{ py: 1.5 }}>
          <ListItemText
            primary={`${index + 1}. ${step.title}`}
            secondaryTypographyProps={{ component: 'div' }}
            secondary={
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mt={0.5}>
                <span>{step.outputFile}</span>
                {step.durationMs ? <span>{step.durationMs} ms</span> : null}
                {step.errorMessage ? <span>{step.errorMessage}</span> : null}
                {step.executions?.length ? (
                  <span>{step.executions.length} tentativas</span>
                ) : null}
              </Stack>
            }
          />
          <Stack direction="row" spacing={1} alignItems="center">
            {step.status === 'error' ? (
              <AppButton
                size="small"
                variant="outlined"
                startIcon={<ReplayIcon />}
                onClick={() => onRetryStep(step.id)}
              >
                Repetir passo
              </AppButton>
            ) : null}
            <AppBadge
              label={step.status}
              tone={
                step.status === 'completed'
                  ? 'success'
                  : step.status === 'error'
                    ? 'error'
                    : step.status === 'running'
                      ? 'warning'
                      : 'default'
              }
            />
          </Stack>
        </ListItem>
      ))}
    </List>
  </AppCard>
);
