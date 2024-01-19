import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { useScrollTrigger, Container, AppBar, Toolbar, Box, Avatar, Menu, MenuItem, IconButton } from '@mui/material'
import { Menu as MenuIcon, Mail, Notifications } from '@mui/icons-material';
import AppIcon from './AppIcon';
import AppBarIcon from './AppBarIcon';
import SearchBar from './SearchBar';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "transparent",
})

const AppBarElements = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "16px",
  alignItems: "center",
  // if sm or bigger than sm ("up"), display flex
  // else, if smaller than sm, display none
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const ProfileMenuIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  // if sm or bigger than sm ("up"), display none
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

interface HeaderProps {
  handleDrawerToggle: () => void
}

interface ElevationScrollProps {
  children: React.ReactElement;
}

const Header = ({ handleDrawerToggle }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const closeMenu = () => {
    setAnchorEl(null);
  }

  const ElevationScroll = (props: ElevationScrollProps) => {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      style: {
        backgroundColor: trigger ? "white" : "#FAFCFF",
        transition: "0.5s",
        boxShadow: trigger ? "0px 8px 32px 0px rgba(60, 68, 91, 0.08)" : "none",
      }
    });
  }

  return (
    <ElevationScroll>
      <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg" disableGutters>
          <StyledToolbar>
            <Box sx={{ display: "flex", direction: "row", pr: 2, flexGrow: 1 }}>
              <Box sx={{
                paddingRight: 3,
                direction: "row",
                gap: 1,
                alignItems: "center",
                display: {
                  xs: "none",
                  sm: "flex"
                }
              }}>
                <AppIcon />
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  paddingRight: 2,
                  color: "#4D8AFF",
                  display: {
                    xs: "block",
                    sm: "none"
                  }
                }}
              >
                <MenuIcon sx={{ mt: "4px" }} />
              </IconButton>

              <SearchBar />
            </Box>

            <AppBarElements>
              <AppBarIcon icon={<Mail fontSize="small" sx={{ color: "#8095B3" }} />} />
              <AppBarIcon icon={<Notifications fontSize="small" sx={{ color: "#8095B3" }} />} />
              <Avatar onClick={openMenu} alt="Cindy Baker" sx={{ width: "40px", height: "40px" }} src="https://mui.com/static/images/avatar/3.jpg" />
            </AppBarElements>

            <ProfileMenuIcon onClick={openMenu}>
              <Avatar alt="Cindy Baker" sx={{ width: "30px", height: "30px" }} src="https://mui.com/static/images/avatar/3.jpg" />
            </ProfileMenuIcon>

          </StyledToolbar>
          <Menu
            anchorEl={anchorEl}
            id="profile-menu"
            open={open}
            onClose={closeMenu}
            onClick={closeMenu}
            slotProps={{
              paper: {
                elevation: 0, sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  minWidth: '160px',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                }
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Container>
      </AppBar>
    </ElevationScroll>

  )
}

export default Header