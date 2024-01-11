import { Stack, Alert, AlertTitle } from "@mui/material"

const PageNotFound = () => {
  return (
    <Stack>
       <Alert severity="error">
        <AlertTitle>Page Not Found</AlertTitle>
        Oops, looks like this page does not exist yet.
      </Alert>
    </Stack>
    
  );
};

export default PageNotFound;
