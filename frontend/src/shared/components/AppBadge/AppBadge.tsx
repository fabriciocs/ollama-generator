import Chip from '@mui/material/Chip';
import { AppBadgeProps } from './AppBadge.types';

export const AppBadge = ({ label, tone = 'default' }: AppBadgeProps) => (
  <Chip
    label={label}
    color={tone === 'default' ? undefined : tone}
    variant="outlined"
    size="small"
  />
);
