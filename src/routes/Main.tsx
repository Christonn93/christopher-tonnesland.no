import { Box } from "@mui/material";
import { ContactForm } from "../components/form/ContactForm";
import { SectionWrapper } from "../components/common/SectionWrapper";
import { mockProject } from "../mock/MockProject";
import { ProjectCard } from "../components/card/ProjectCard";

export const Main = () => {
 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 1,
   }}
  >
   <SectionWrapper id={"contact"} isFlex>
    <Box
     sx={{
      margin: "0 auto",
      display: "flex",
      gap: 3,
     }}
    >
     {mockProject.map((project) => (
      <ProjectCard key={project.id} project={project} />
     ))}
    </Box>
   </SectionWrapper>

   <SectionWrapper id={"contact"} isFlexCol>
    <ContactForm />
   </SectionWrapper>
  </Box>
 );
};
