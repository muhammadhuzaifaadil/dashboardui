import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import { Box, createTheme, CssBaseline, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React from "react";
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const darkThemeChosen = React.useMemo(()=>
    createTheme({...darkTheme

  }),
  [mode],
);
const lightThemeChose = React.useMemo(()=>
    createTheme({...lightTheme

  }),
  [mode],
);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode==='light'? lightThemeChose:darkThemeChosen}>
        <SessionProvider session={session}>
    <CssBaseline />
   
  <Component {...pageProps} />

</SessionProvider>
</ThemeProvider >
</ColorModeContext.Provider>
  )
  }

  export default App;
