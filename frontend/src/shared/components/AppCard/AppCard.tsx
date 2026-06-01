import Card from '@mui/material/Card';
import { AppCardProps } from './AppCard.types';

export const AppCard = (props: AppCardProps) => (
  <Card
    variant="outlined"
    sx={{
      backgroundColor: 'background.paper',
      borderColor: 'rgba(49, 92, 77, 0.18)',
      boxShadow: 'none',
      ...props.sx,
    }}
    {...props}
  />
);
