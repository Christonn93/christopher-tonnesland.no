import { Card, IconButton, Typography, Box } from "@mui/material";

export const ProjectCard: React.FC = () => {
 return (
  <Card sx={{ position: "relative", width: 190, height: 254, display: "flex", justifyContent: "center", alignItems: "center", background: "transparent", boxShadow: "none" }}>
   <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(315deg,#03a9f4,#ff0058)", filter: "blur(30px)", zIndex: 1 }} />
   <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(315deg,#03a9f4,#ff0058)", zIndex: 0 }} />

   <Box
    sx={{
     position: "absolute",
     zIndex: 3,
     bottom: 0,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     transition: "0.5s",
     transform: "scale(0)",
     "&:hover": { transform: "scale(1)", bottom: 25 },
    }}
   >
    <Typography variant="h6" sx={{ color: "#fff", fontWeight: 500, textAlign: "center", textTransform: "uppercase" }}>
     Some Famous
     <br />
     <span style={{ fontWeight: 300, fontSize: "0.70em" }}>Creative Designer</span>
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, marginTop: 1 }}>
     <IconButton sx={{ background: "rgba(0, 0, 0, 0.2)", "&:hover": { background: "rgba(0, 0, 0, 0.4)", color: "white" } }}>
      {/* <Facebook sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20 }} /> */}
     </IconButton>
     <IconButton sx={{ background: "rgba(0, 0, 0, 0.2)", "&:hover": { background: "rgba(0, 0, 0, 0.4)", color: "white" } }}>
      {/* <Twitter sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20 }} /> */}
     </IconButton>
     <IconButton sx={{ background: "rgba(0, 0, 0, 0.2)", "&:hover": { background: "rgba(0, 0, 0, 0.4)", color: "white" } }}>
      {/* <LinkedIn sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20 }} /> */}
     </IconButton>
     <IconButton sx={{ background: "rgba(0, 0, 0, 0.2)", "&:hover": { background: "rgba(0, 0, 0, 0.4)", color: "white" } }}>
      {/* <Instagram sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20 }} /> */}
     </IconButton>
    </Box>
   </Box>
  </Card>
 );
};
