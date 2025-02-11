import { useThemeMode } from "../../hooks/handlers/useThemeMode";
import { Button } from "@mui/material";

export const ThemeToggle = () => {
 const { mode, toggleTheme } = useThemeMode();

 return (
  <Button onClick={toggleTheme} variant="contained">
   {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
  </Button>
 );
};
