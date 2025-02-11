import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import theme from "./theme/theme";

startTransition(() => {
 hydrateRoot(
  document,
  <ThemeProvider theme={theme}>
   <CssBaseline />
   <RemixBrowser />
  </ThemeProvider>
 );
});
