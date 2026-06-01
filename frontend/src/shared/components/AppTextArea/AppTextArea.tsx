import TextField from '@mui/material/TextField';
import { AppTextAreaProps } from './AppTextArea.types';

export const AppTextArea = (props: AppTextAreaProps) => (
  <TextField
    multiline
    minRows={8}
    fullWidth
    sx={{
      '& .MuiOutlinedInput-root': {
        bgcolor: 'background.paper',
        alignItems: 'flex-start',
      },
    }}
    {...props}
  />
);
