import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const useColorMode = () => React.useContext(ColorModeContext);

export default function AppTheme({
  children,
  disableCustomTheme,
}: {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  if (disableCustomTheme) {
    return <>{children}</>;
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
