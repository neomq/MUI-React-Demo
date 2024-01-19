import { Box, AvatarGroup, Avatar, ListItem } from "@mui/material"
import ListWrapper from "./Wrapper/ListWrapper"

const FeaturedContent = () => {

  return (
    <Box
      p={2}
      sx={{ display: { xs: "none", md: "block" }}}>

      <ListWrapper title="online" pb={3}>
        <ListItem sx={{ px: 4 }}>
          <AvatarGroup max={5}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
          </AvatarGroup>
        </ListItem>
        </ListWrapper>

    </Box>
  )
}

export default FeaturedContent