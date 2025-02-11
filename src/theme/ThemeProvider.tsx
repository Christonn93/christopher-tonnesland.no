import { ThemeContext } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode, useState } from "react";
import { getTheme } from "./theme";

export const ThemeProviderComp = ({ children }: { children: ReactNode }) => {
 const [mode, setMode] = useState<"light" | "dark">("light");

 const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

 const theme = getTheme(mode);

 return (
  <ThemeContext.Provider value={{ mode, toggleTheme }}>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
   </ThemeProvider>
  </ThemeContext.Provider>
 );
};
