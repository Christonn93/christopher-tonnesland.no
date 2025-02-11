import { createTheme } from "@mui/material/styles";
import { getPalette } from "./palette";

export const getTheme = (mode: "light" | "dark") =>
 createTheme({
  palette: getPalette(mode),
  typography: {
   fontFamily: "'Roboto', sans-serif",
   h1: { fontSize: "2.25rem" },
   h2: { fontSize: "1.875rem" },
  },
 });
