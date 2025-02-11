import { Box } from "@mui/material";
import { containerWrapper, flexColWrapper, flexWrapper, gridWrapper } from "../../theme";

type SectionWrapperProps = {
 children: React.ReactNode;
 isFlex?: boolean;
 isFlexCol?: boolean;
 isGrid?: boolean;
 id?: string;
};

export const SectionWrapper = ({ children, isFlex, isFlexCol, isGrid, id }: SectionWrapperProps) => {
 return (
  <Box component={"section"} id={id} sx={isFlex ? flexWrapper : isGrid ? gridWrapper : isFlexCol ? flexColWrapper : containerWrapper}>
   {children}
  </Box>
 );
};
