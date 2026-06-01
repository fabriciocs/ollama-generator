import { createTheme } from '@mui/material/styles';

export const materialTheme = createTheme({
  palette: {
    primary: { main: '#315c4d' },
    secondary: { main: '#b46a3c' },
    success: { main: '#2f7d57' },
    warning: { main: '#b8872d' },
    error: { main: '#a8453d' },
    background: {
      default: '#f3efe7',
      paper: '#fffdf7',
    },
    text: {
      primary: '#1f2421',
      secondary: '#6d746d',
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Fraunces", Georgia, serif' },
    h2: { fontFamily: '"Fraunces", Georgia, serif' },
    h3: { fontFamily: '"Fraunces", Georgia, serif' },
    button: { fontWeight: 600, textTransform: 'none' },
  },
});
