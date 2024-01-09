import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Users = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            marginTop: 5,
            width: '100%',
            height: 128,
            borderRadius: 2,
          },
        }}
      >
        <Paper>
          No users for this project.
        </Paper>
      </Box> 
    </Container>
  );
};

export default Users;
