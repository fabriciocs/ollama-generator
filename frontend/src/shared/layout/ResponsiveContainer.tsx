import Container from '@mui/material/Container';
import { PropsWithChildren } from 'react';
export const ResponsiveContainer = ({ children }: PropsWithChildren) => (
  <Container maxWidth="xl" sx={{ py: 4 }}>
    {children}
  </Container>
);
