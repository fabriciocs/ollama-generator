import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouter } from './core/router/AppRouter';
import { materialTheme } from './core/theme/materialTheme';

export default function App() {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
