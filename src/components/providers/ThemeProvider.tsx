'use client';

import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1a2e',
    },
    secondary: {
      main: '#e94560',
    },
  },
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}