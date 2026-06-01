import AutorenewIcon from '@mui/icons-material/Autorenew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useAsyncAction } from '../../../core/hooks/useAsyncAction';
import { useCopyToClipboard } from '../../../core/hooks/useCopyToClipboard';
import { AppButton } from '../../../shared/components/AppButton';
import { AppCard } from '../../../shared/components/AppCard';
import { AppTextArea } from '../../../shared/components/AppTextArea';

export const IdeaWorkbenchForm = ({
  onSubmit,
  outputDir,
  onRefresh,
}: {
  onSubmit: (idea: string) => Promise<void>;
  outputDir?: string;
  onRefresh: () => void;
}) => {
  const [idea, setIdea] = useState('');
  const { run, isLoading, error } = useAsyncAction(onSubmit);
  const { copy, copied } = useCopyToClipboard();
  const tooShort = idea.trim().length > 0 && idea.trim().length < 10;

  return (
    <AppCard sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Bancada de entrada</Typography>
        <Typography color="text.secondary">
          Digite uma ideia para iniciar a primeira linha de producao documental.
        </Typography>
        <AppTextArea
          label="Ideia do sistema"
          placeholder="Descreva o problema, o publico, o contexto operacional e o resultado esperado."
          value={idea}
          error={tooShort}
          helperText={
            tooShort
              ? 'A ideia precisa ter pelo menos 10 caracteres.'
              : `${idea.length} caracteres`
          }
          onChange={(event) => setIdea(event.target.value)}
        />
        {error ? <Typography color="error">{error}</Typography> : null}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <AppButton
            startIcon={<PlayArrowIcon />}
            disabled={isLoading || idea.trim().length < 10}
            onClick={() => void run(idea)}
          >
            {isLoading ? 'Gerando documentacao completa...' : 'Gerar documentacao completa'}
          </AppButton>
          <AppButton
            variant="outlined"
            startIcon={<AutorenewIcon />}
            onClick={onRefresh}
          >
            Atualizar status
          </AppButton>
          <AppButton
            variant="outlined"
            startIcon={<ContentCopyIcon />}
            disabled={!outputDir}
            onClick={() => outputDir && void copy(outputDir)}
          >
            {copied ? 'Caminho copiado' : 'Copiar caminho da pasta'}
          </AppButton>
        </Stack>
      </Stack>
    </AppCard>
  );
};
