import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { queryClient } from "./constants/queryClient";
import theme from "./theme/theme";

createRoot(document.getElementById("root")!).render(
 <QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
   <App />
  </ThemeProvider>
 </QueryClientProvider>
);
