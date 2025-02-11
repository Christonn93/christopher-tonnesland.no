import { Box, FormControl } from "@mui/material";
import { TextInput } from "./TextInput";

type InputWrapperProps = {
 label: string;
 name: string;
};

export const InputWrapper = ({ label, name }: InputWrapperProps) => {
 return (
  <Box className="form-group">
   <FormControl fullWidth>
    <TextInput name={name} label={label} />
   </FormControl>
  </Box>
 );
};
