import SearchBar from '../components/SearchBar';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Users = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <Paper elevation={2} sx={{
          height: '140px',
          borderRadius: 2,
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
