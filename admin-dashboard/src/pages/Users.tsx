import SearchBar from '../components/SearchBar';
import { Typography } from "@mui/material";
import PageWrapper from '../components/wrappers/PageWrapper';
import PaperWrapper from '../components/wrappers/PaperWrapper';

const Users = () => {
  return (
    <PageWrapper>
      <PaperWrapper>
        <SearchBar />
        <Typography
          variant="body1" mt={3}
          textAlign="center"
          color="grayscale.metal"
        >
          No users for this project yet.
        </Typography>
      </PaperWrapper>
    </PageWrapper>
  );
};

export default Users;
