import { List, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material'
import { profileMenuStyle } from '../styles/styles';
import { profileMenu } from '../data/data';

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

    return (
        <List disablePadding>
            <ListItemButton sx={profileHeaderBtn}>
                <ListItemText
                    primary="Christopher Robinson"
                    primaryTypographyProps={profileHeaderTextPri}
                    secondary="View Profile"
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