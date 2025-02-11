import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Theme } from "@emotion/react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
 const [theme, colorMode] = useMode() as [Theme, { toggleColorMode: () => void }];

 return (
  <ColorModeContext.Provider value={colorMode}>
   <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
   </MUIThemeProvider>
  </ColorModeContext.Provider>
 );
};
