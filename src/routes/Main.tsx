import { Box } from "@mui/material";
import { ContactForm } from "../components/form/ContactForm";
import { SectionWrapper } from "../components/common/SectionWrapper";

export const Main = () => {
 return (
  <Box>
   <SectionWrapper id={"contact"} isFlex>
    <ContactForm />
   </SectionWrapper>
  </Box>
 );
};
