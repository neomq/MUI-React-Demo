import { List, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { profileMenuStyle } from '../styles/styles';
import { profileMenu, userProfile } from '../data/data';

interface ProfileMenuItemsProps {
    handleClose: () => void
}

const ProfileMenuItems = ({ handleClose }: ProfileMenuItemsProps) => {
    const { 
        profileHeaderTextPri,
        profileHeaderTextSec,
        profileHeaderBtn,
        profileMenuItemBtn,
        navItemIcon,
        navItemText
    } = profileMenuStyle
    const { firstName, lastName } = userProfile
    const navigate = useNavigate();

    return (
        <List disablePadding>
            <ListItemButton
                sx={profileHeaderBtn}
                onClick={() => navigate('/profile')}
                disableRipple
            >
                <ListItemText
                    primary={`${firstName} ${lastName}`}
                    primaryTypographyProps={profileHeaderTextPri}
                    secondary="View My Profile"
                    secondaryTypographyProps={profileHeaderTextSec}
                    sx={{ my: 0 }}
                />
            </ListItemButton>
            <Divider />
            <List sx={{ paddingBottom: "4px" }}>
                {profileMenu.map((item) => (
                    <ListItemButton
                        disableRipple
                        sx={profileMenuItemBtn}
                        onClick={handleClose}
                    >
                        <ListItemIcon sx={navItemIcon}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={navItemText}
                        />
                    </ListItemButton>
                ))}
            </List>
        </List>
    )
}

export default ProfileMenuItems