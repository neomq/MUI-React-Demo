import { Avatar } from '@mui/material'

interface UserAvatarProps {
    size: string
}

const UserAvatar = ({ size = "30px" }: UserAvatarProps) => {
    return (
        <Avatar
            sx={{ width: size, height: size }}
            src="https://mui.com/static/images/avatar/3.jpg"
        />
    )
}

export default UserAvatar