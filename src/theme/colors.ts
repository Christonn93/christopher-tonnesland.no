export const colorTokens = (mode: string) => ({
 ...(mode === "dark"
  ? {
     primary: {
      100: "#f5f5f5",
      500: "#f50057",
      700: "#ab003c",
     },
     greenAccent: {
      100: "#f5f5f5",
      300: "#00bfa5",
      500: "#00bfa5",
      700: "#00766c",
     },
     redAccent: {
      100: "#f5f5f5",
      300: "#ff1744",
      500: "#ff1744",
      700: "#c4001d",
     },
     grey: {
      100: "#f5f5f5",
      300: "#e0e0e0",
      500: "#9e9e9e",
      700: "#616161",
     },
     text: {
      primary: "#fff",
      secondary: "#000",
     },
     background: {
      default: "#253f58",
     },
    }
  : {
     primary: {
      100: "#f5f5f5",
      500: "#f50057",
      700: "#ab003c",
     },
     greenAccent: {
      100: "#f5f5f5",
      300: "#00bfa5",
      500: "#00bfa5",
      700: "#00766c",
     },
     redAccent: {
      100: "#f5f5f5",
      300: "#ff1744",
      500: "#ff1744",
      700: "#c4001d",
     },
     grey: {
      100: "#f5f5f5",
      300: "#e0e0e0",
      500: "#9e9e9e",
      700: "#616161",
     },
     text: {
      primary: "#000",
      secondary: "#fff",
     },
     background: {
      default: "#f5f5f5",
     },
    }),
});
