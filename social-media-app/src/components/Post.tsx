import { Avatar, Checkbox, Card, CardHeader, CardContent, CardMedia, CardActions, Typography, IconButton } from "@mui/material"
import { MoreVert, Favorite, FavoriteBorder, Share } from '@mui/icons-material';
import { cardStyle } from "../styles/styles";

const Post = () => {
    const style = {...cardStyle}
    style.marginTop = 3

  return (
    <Card sx={style}>
        <CardHeader
          avatar={
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2016"
          titleTypographyProps={{ fontSize: "15px", fontWeight: 500, color: "#3C4A71" }}
          subheaderTypographyProps={{ fontSize: "13px", color: "#8095B3" }}
        />
        
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="body2" color="#3C445B" fontSize="15px" lineHeight={1.4}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with mussels,
            if you like 👨‍🍳
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="320px"
          image="https://images.unsplash.com/photo-1668665772052-cf22d9c40ecb?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paella dish"
          sx={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="like" sx={{ p: 0 }}>
            <Checkbox icon={<FavoriteBorder sx={{ "&.MuiSvgIcon-root": { strokeWidth: "0.75px", stroke: "#ffffff", color: "#3C445B" } }}/>} checkedIcon={<Favorite sx={{ color: "#FF436F" }}/>} />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post