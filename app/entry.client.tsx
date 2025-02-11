import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import React, { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import theme from "./theme/theme";

startTransition(() => {
 hydrateRoot(
  document,
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <RemixBrowser />
   </ThemeProvider>
  </React.StrictMode>
 );
});
