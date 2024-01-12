import { Typography, Fab, Avatar, Card, CardMedia, CardContent, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { profileCardStyle } from '../styles/styles';
import { userProfile } from '../data/data';

const ProfileCard = () => {
	const { card, colours } = profileCardStyle
	const { firstName, lastName, username, photo, backgroundImg } = userProfile
	return (
		<Card sx={card}>
			<CardMedia
				component="img"
				height="140"
				image={backgroundImg}
			/>
			<Fab
				color="primary"
				size="small"
				aria-label="edit"
				sx={{
					position: 'absolute',
					zIndex: 3,
					right: 24,
					top: 24,
					backgroundColor: colours.accent.primary,
					':hover': { backgroundColor: colours.accent.hover } 
				}}
			>
				<EditIcon />
			</Fab>
			<Avatar
				src={photo}
				sx={{
					width: 120,
					height: 120,
					position: 'absolute',
					zIndex: 2,
					left: 24,
					transform: 'translate(0, -32%)',
				}}
			/>
			<CardContent sx={{ "&.MuiCardContent-root": { pb: 4 } }}>
				<Box sx={{ marginLeft: 19 }}>
					<Typography gutterBottom variant="h5" component="div" color={colours.grayscale.midnight} sx={{ mb: "2px" }}>
						{firstName} {lastName}
					</Typography>
					<Typography variant="body1" color={colours.grayscale.oslo}>
						{username}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}

export default ProfileCard