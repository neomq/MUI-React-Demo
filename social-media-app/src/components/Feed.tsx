import { Box } from "@mui/material"
import PostCard from './PostCard';
import Post from "./Post";

const Feed = () => {
  return (
    <Box p={2}>
      <PostCard />
      <Post />
    </Box>
  )
}

export default Feed
