import { Box, AvatarGroup, Avatar, List, ListItem, ListSubheader } from "@mui/material"
import { cardStyle } from '../styles/styles'

const FeaturedContent = () => {
  const listStyle = {...cardStyle}
  listStyle.paddingBottom = 3

  return (
    <Box
      p={2}
      sx={{ display: { xs: "none", md: "block" }}}>
      <List sx={listStyle} subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ pt: "8px", pl: "32px", borderRadius: "8px" }}>
          Online
        </ListSubheader>
      }>

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
        </List>

    </Box>
  )
}

export default FeaturedContent