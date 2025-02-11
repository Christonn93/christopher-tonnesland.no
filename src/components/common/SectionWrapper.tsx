import { Box } from "@mui/material";
import { containerWrapper, flexWrapper, gridWrapper } from "../../theme";

type SectionWrapperProps = {
 children: React.ReactNode;
 isFlex?: boolean;
 isGrid?: boolean;
 id?: string;
};

export const SectionWrapper = ({ children, isFlex, isGrid, id }: SectionWrapperProps) => {
 return (
  <Box component={"section"} id={id} sx={isFlex ? flexWrapper : isGrid ? gridWrapper : containerWrapper}>
   {children}
  </Box>
 );
};
