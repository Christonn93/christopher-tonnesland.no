import { handleSubmit } from "../../utils/handlers/handleContactForm";
import { initialValues, validationSchema } from "../../config";
import { InputWrapper } from "../input/InputWrapper";
import { FormButton } from "../button/FormButton";
import { Formik, Form } from "formik";
import { Box, Typography } from "@mui/material";

export const ContactForm = () => {
 return (
  <Box className="form-container">
   <Typography variant="h2">Kontakt meg</Typography>
   <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
    {({ isSubmitting }) => (
     <Form className="form">
      <InputWrapper label="Name" name="name" />
      <InputWrapper label="Email" name="email" />
      <InputWrapper label="Message" name="message" />
      <FormButton isSubmitting={isSubmitting} />
     </Form>
    )}
   </Formik>
  </Box>
 );
};
