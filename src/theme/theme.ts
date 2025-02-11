import { createTheme, PaletteMode } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { colorTokens } from "./colors";

export const themeSettings = (mode: PaletteMode) => {
 const colors = colorTokens(mode);

 return {
  palette: {
   mode: mode,
   ...(mode === "dark"
    ? {
       primary: {
        main: colors.primary[500],
       },
       secondary: {
        main: colors.greenAccent[500],
       },
       cta: {
        main: colors.redAccent[500],
       },
       ctaSuccess: {
        main: colors.greenAccent[300],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "var(--toastify-color-dark)",
       },
       text: {
        main: "#fff",
        secondary: "#fff",
       },
       navText: {
        main: colors.greenAccent[500],
       },
       input: {
        main: "#000",
       },
      }
    : {
       primary: {
        main: colors.primary[100],
       },
       secondary: {
        main: colors.greenAccent[500],
       },
       cta: {
        main: colors.redAccent[500],
       },
       ctaSuccess: {
        main: colors.greenAccent[700],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "var(--toastify-z-index)",
       },
       text: {
        main: "#000",
        secondary: "#fff",
       },
       navText: {
        main: "#000",
       },
       input: {
        main: "#000",
       },
      }),
  },
  typography: {
   fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
   fontSize: 12,
   h1: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 40,
   },
   h2: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 32,
   },
   h3: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 20,
   },
   h4: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 20,
   },
   h5: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 16,
   },
   h6: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
   },
  },
  textField: {
   width: "90%",
   marginLeft: "auto",
   marginRight: "auto",
   paddingBottom: 0,
   marginTop: 0,
   fontWeight: 500,
  },
 };
};

// Color mode context
export const ColorModeContext = createContext({
 toggleColorMode: () => {},
});

export const useMode = () => {
 const [mode, setMode] = useState<PaletteMode>("dark");

 const colorMode = useMemo(
  () => ({
   toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
  }),
  []
 );

 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
 return [theme, colorMode];
};
