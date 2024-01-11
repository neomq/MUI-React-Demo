import { Fragment, useState } from 'react'
import { Avatar, Menu, IconButton } from '@mui/material';
import ProfileMenuItems from './ProfileMenuItems';
import { profileMenuStyle } from '../styles/styles';

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { profileMenu } = profileMenuStyle

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'profile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{
                        width: 30,
                        height: 30,
                        cursor: 'pointer'
                    }}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="profile-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{ paper: { elevation: 0, sx: profileMenu }}}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <ProfileMenuItems handleClose={handleClose}/>
            </Menu>
        </Fragment>
    )
}

export default ProfileMenu