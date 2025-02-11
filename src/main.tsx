import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./constants/queryClient";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("root")!).render(
 <QueryClientProvider client={queryClient}>
  <ThemeProvider>
   <App />
  </ThemeProvider>
 </QueryClientProvider>
);
