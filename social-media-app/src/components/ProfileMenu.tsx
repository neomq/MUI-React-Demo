import { Divider, ListItemIcon, Menu } from '@mui/material'
import { List, ListItemButton, ListItemText } from '@mui/material'
import { Logout, Settings, Help, Forum } from '@mui/icons-material';
import UserAvatar from './UserAvatar';

interface ProfileMenuProps {
    anchorEl: HTMLElement | null
    open: boolean
    handleClose: () => void
}

const profileMenuItems = [
    {
        icon: <Settings fontSize="small"/>,
        label: "Settings"
    },
    {
        icon: <Help fontSize="small"/>,
        label: "Help & Support"
    },
    {
        icon: <Forum fontSize="small"/>,
        label: "Feedback"
    },
    {
        icon: <Logout fontSize="small"/>,
        label: "Logout"
    },
]

const ProfileMenu = ({ handleClose, ...rest }: ProfileMenuProps) => {
    return (
        <Menu
            id="profile-menu"
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        border: '1px solid #EEEEF2',
                        overflow: 'visible',
                        boxShadow: "0px 8px 32px 0px rgba(60, 68, 91, 0.08)",
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        }
                    },
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            {...rest}
        >
            <List disablePadding>
                <ListItemButton
                    sx={{
                        paddingBottom: 2,
                        px: 4,
                        color: "#3C4A71",
                        ":hover": {
                            color: "#4D8AFF",
                            backgroundColor: "transparent"
                        }
                    }}
                    disableRipple
                >   
                    <UserAvatar size="40px" />
                    <ListItemText
                        primary='Emillie Lily'
                        primaryTypographyProps={{
                            noWrap: true,
                            fontSize: 16,
                            fontWeight: "normal",
                            letterSpacing: "0.03em",
                            marginLeft: 1,
                        }}
                        secondary="My Profile"
                        secondaryTypographyProps={{
                            noWrap: true,
                            fontSize: 12,
                            fontWeight: "normal",
                            letterSpacing: "0.03em",
                            marginLeft: 1
                        }}
                        sx={{ my: 0 }}
                    />
                </ListItemButton>
                <Divider />
                <List sx={{ paddingBottom: "4px" }}>
                {profileMenuItems.map((item) => (
                    <ListItemButton
                        disableRipple
                        sx={{
                            height: 36,
                            paddingX: 4,
                            paddingY: 2.5,
                            color: "#3C4A71",
                            "&.Mui-focusVisible": { color: "accent.primary", backgroundColor: "transparent" },
                            ":hover": { color: "#4D8AFF", backgroundColor: "transparent" },
                        }}
                        onClick={handleClose}
                    >
                        <ListItemIcon sx={{
                            color: "inherit",
                            "&.MuiListItemIcon-root": { minWidth: '40px' }
                        }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "normal",
                                letterSpacing: "0.04em",
                            }}
                        />
                    </ListItemButton>
                ))}

                </List>
            </List>
        </Menu>
    )
}

export default ProfileMenu