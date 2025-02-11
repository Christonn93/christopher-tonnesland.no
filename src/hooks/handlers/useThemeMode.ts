import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

export const useThemeMode = () => {
 const context = useContext(ThemeContext);
 if (!context) throw new Error("useThemeMode must be used within a ThemeProvider");
 return context;
};
