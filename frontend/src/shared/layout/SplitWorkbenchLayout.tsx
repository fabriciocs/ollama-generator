import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
export const SplitWorkbenchLayout = ({
  primary,
  secondary,
}: {
  primary: ReactNode;
  secondary: ReactNode;
}) => (
  <Grid container spacing={3}>
    <Grid size={{ xs: 12, lg: 7 }}>{primary}</Grid>
    <Grid size={{ xs: 12, lg: 5 }}>{secondary}</Grid>
  </Grid>
);
