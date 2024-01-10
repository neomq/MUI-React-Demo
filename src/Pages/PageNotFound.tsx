import Stack from "@mui/material/Stack";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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
