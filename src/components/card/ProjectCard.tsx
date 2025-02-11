import { Box, Card, Typography } from "@mui/material";

export type ProjectCardProps = {
 id: number;
 name: string;
 description: string;
 url: string;
 imgUrl: string;
 imgAlt: string;
};

export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
 return (
  <Box className="project-card-wrapper">
   <Card
    className="project-card"
    sx={{
     width: 300,
     height: 300,
     "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s",
      boxShadow: 3,
     },
    }}
    elevation={1}
   >
    <Box>
     <header>
      <Typography variant="h6">{project.name}</Typography>
     </header>
     <main>
      <Typography variant="body1">{project.description}</Typography>
     </main>
     <footer>
      <a href={project.url} target="_blank" rel="noreferrer">
       Learn more
      </a>
     </footer>
    </Box>
   </Card>
  </Box>
 );
};
