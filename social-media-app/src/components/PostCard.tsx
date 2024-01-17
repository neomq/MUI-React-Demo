import { cardStyle } from '../styles/styles';
import { Avatar, Card, Box } from "@mui/material"
import TextInput from './TextInput';

const PostCard = () => {
	return (
		<Card sx={cardStyle}>
			<Box sx={{ p: 2, display: "flex", direction: "row", alignItems: "center" }}>
				<Avatar alt="Cindy Baker" sx={{ width: "40px", height: "40px", marginRight: 2 }} src="https://mui.com/static/images/avatar/3.jpg" />
				<TextInput
					width="100%"
					placeholder={`What's on your mind, Emillie?`}
				/>
			</Box>

		</Card>
	)
}

export default PostCard