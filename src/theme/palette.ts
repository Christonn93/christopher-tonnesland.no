import { PaletteMode } from "@mui/material";

export const getPalette = (mode: PaletteMode) => ({
 mode,
 primary: {
  main: mode === "dark" ? "#90caf9" : "#1976d2",
 },
 secondary: {
  main: mode === "dark" ? "#f48fb1" : "#d81b60",
 },
 background: {
  default: mode === "dark" ? "#121212" : "#f5f5f5",
  paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
 },
 text: {
  primary: mode === "dark" ? "#ffffff" : "#000000",
  secondary: mode === "dark" ? "#b0bec5" : "#4f4f4f",
 },
});
