import Stack from '@mui/material/Stack';
import { PropsWithChildren } from 'react';
export const PageSection = ({ children }: PropsWithChildren) => (
  <Stack spacing={2}>{children}</Stack>
);
