import { createContext } from "react";

type ThemeContextProps = {
 mode: "light" | "dark";
 toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
