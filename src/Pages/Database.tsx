import { Typography, Container, Box } from "@mui/material";
import { colours } from '../styles/styles'

const Database = () => {
  return (
    <Container>
    <Box sx={{ marginTop: 5 }}>
        <Typography variant="body1" mt={3} textAlign="center" color={colours.grayscale.metal}>
          Nothing on this page.
        </Typography>
    </Box>
  </Container>
  );
};

export default Database;
