import Button from '@mui/material/Button';
import { AppButtonProps } from './AppButton.types';

export const AppButton = (props: AppButtonProps) => (
  <Button
    variant="contained"
    sx={{
      borderRadius: '14px',
      boxShadow: 'none',
      borderBottom: '3px solid #24463a',
      px: 2.5,
      py: 1.2,
    }}
    {...props}
  />
);
