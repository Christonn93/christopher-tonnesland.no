import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const theme = createTheme({
 palette, // Use the palette imported here
 typography: {
  fontFamily: "'Roboto', sans-serif", // Default font family
  h1: {
   fontSize: "2.25rem", // Adjust font sizes
  },
  h2: {
   fontSize: "1.875rem",
  },
  // You can further customize other typography variants
 },
 // Add any other MUI theme customization here (spacing, overrides, etc.)
});

export default theme;
