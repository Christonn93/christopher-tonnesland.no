import { Button } from "@mui/material";

type FormButtonProps = {
 isSubmitting: boolean;
};

export const FormButton = ({ isSubmitting }: FormButtonProps) => {
 return (
  <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting} className="form-submit-btn">
   Send
  </Button>
 );
};
