export const ErrorFallback = ({ error }: { error: Error }) => {
 return (
  <div>
   <h2>An error occurred: {error.message}</h2>
   <pre>{error.stack}</pre>
  </div>
 );
};
