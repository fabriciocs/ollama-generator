import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { ResponsiveContainer } from './ResponsiveContainer';

const links = [
  ['/', 'Landing'],
  ['/generations', 'Geracoes'],
  ['/files', 'Arquivos'],
  ['/prompts', 'Prompts'],
  ['/health', 'Health'],
  ['/debug', 'Debug'],
  ['/settings', 'Configuracoes'],
] as const;

export const AppShell = ({ children }: PropsWithChildren) => (
  <ResponsiveContainer>
    <Stack spacing={3}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(49,92,77,.18)',
          pb: 2,
        }}
      >
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              color: isActive ? '#315c4d' : '#6d746d',
              textDecoration: 'none',
              fontWeight: 600,
            })}
          >
            {label}
          </NavLink>
        ))}
      </Box>
      {children}
    </Stack>
  </ResponsiveContainer>
);
