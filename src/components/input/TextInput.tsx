import { TextField } from "@mui/material";
import { useField } from "formik";

type TextInputProps = {
 name: string;
 label: string;
};

export const TextInput = ({ name, label }: TextInputProps) => {
 const [field, meta, helper] = useField(name);

 return <TextField {...field} label={label} fullWidth helperText={meta.touched && meta.error} error={meta.touched && !!meta.error} />;
};
