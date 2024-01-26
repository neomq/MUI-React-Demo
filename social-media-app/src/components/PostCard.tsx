import { cardStyle } from '../styles/styles';
import { Avatar, Card, Box, Stack, Divider, Button } from "@mui/material"
import { VideoCameraBack, Photo, EmojiEmotions } from '@mui/icons-material';
import TextInput from './TextInput';

const PostCard = () => {

	const postOptions = [
		{
			icon: <VideoCameraBack sx={{ color: "#F64A9F" }}/>,
			label: "Live Video"
		},
		{
			icon: <Photo sx={{ color: "#46CCCE" }}/>,
			label: "Photo / Video"
		},
		{
			icon: <EmojiEmotions sx={{ color: "#F5A75E" }}/>,
			label: "Feeling / Activity"
		}
	]

	return (
		<Card sx={cardStyle}>
			<Stack direction="column">
				<Box sx={{ p: 2, display: "flex", direction: "row", alignItems: "center" }}>
					<Avatar alt="Cindy Baker" sx={{ width: "40px", height: "40px", marginRight: 2 }} src="https://mui.com/static/images/avatar/3.jpg" />
					<TextInput
						width="100%"
						placeholder={`What's on your mind, Emillie?`}
					/>
				</Box>
				<Divider orientation="horizontal" variant="middle" sx={{ color: "#EEEFF2" }}/>
				<Box sx={{ py: 1, px: 2,  display: "flex", direction: "row", alignItems: "center", justifyContent: "space-between"}}>
					{postOptions.map(option => (
						<Button
							startIcon={option.icon}
							sx={{
								fontWeight: "500",
								fontSize: "14px",
								textTransform: "capitalize",
								borderRadius: 3,
								color: "#8095B3",
								letterSpacing: 0,
								textWrap: "nowrap",
								px: 2,
								":hover": { color: "#3C4A71", backgroundColor: "#F5F6FA" },
							}}>
							{option.label}
						</Button>
					))}
				</Box>
			</Stack>

		</Card>
	)
}

export default PostCard