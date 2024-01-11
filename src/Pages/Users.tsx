import SearchBar from '../components/SearchBar';
import { Typography, Container, Paper, Box } from "@mui/material";

const Users = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <Paper sx={{
          height: '140px',
          borderRadius: 2,
          boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.15) 0px 2px 8px",
        }}>
          <SearchBar />
          <Typography variant="body1" mt={3} textAlign="center" color="#647382">
            No users for this project yet.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Users;
