import React from "react";
import { AppBar, Button, Toolbar, Typography, useTheme } from "@mui/material";

export const Header: React.FC = () => {
 const theme = useTheme();

 return (
  <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
   <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
     My Portfolio
    </Typography>
    <Button color="inherit">Login</Button>
   </Toolbar>
  </AppBar>
 );
};
