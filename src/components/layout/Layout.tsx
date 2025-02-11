import { Suspense } from "react";
import { Header } from "./Header";
import { Box } from "@mui/material";
import { LoadingFallback } from "../common/LoadingFallback";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    height: "100vh",
   }}
  >
   <Header />
   <Suspense fallback={<LoadingFallback />}>
    <Box flex={1}>
     <Outlet />
    </Box>
   </Suspense>
   <Footer />
  </Box>
 );
};
