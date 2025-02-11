import { Alert, Typography } from "@mui/material";

export const ErrorFallback = ({ error }: { error: Error }) => {
 return (
  <Alert>
   <Typography variant="h2">An error occurred: {error.message}</Typography>
   <Typography variant="body1">{error.stack}</Typography>
  </Alert>
 );
};
