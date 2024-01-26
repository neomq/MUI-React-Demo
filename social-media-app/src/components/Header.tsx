import React, { useState, Fragment } from 'react'
import { styled } from '@mui/material/styles';
import { Container, AppBar, Toolbar, Box, IconButton } from '@mui/material'
import { Menu as MenuIcon, Mail, Notifications } from '@mui/icons-material';
import AppIcon from './AppIcon';
import AppBarIcon from './AppBarIcon';
import SearchBar from './SearchBar';
import UserAvatar from './UserAvatar';
import ProfileMenu from './ProfileMenu';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  "&.MuiToolbar-root": {
    padding: "0 16px",
  },
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

const Header = ({ handleDrawerToggle }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
        <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "white", boxShadow: "0px 8px 32px 0px rgba(60, 68, 91, 0.08)" }}>
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
                <IconButton
                    onClick={handleClick}
                    aria-controls={open ? 'profile-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}>
                  <UserAvatar size="40px"/>
                </IconButton>
              </AppBarElements>

              <ProfileMenuIcon>
                <IconButton
                  onClick={handleClick}
                  aria-controls={open ? 'profile-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}>
                  <UserAvatar size="30px" />
                </IconButton>
              </ProfileMenuIcon>
            </StyledToolbar>
          </Container>
          <ProfileMenu 
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
          />
        </AppBar>
    </Fragment>

  )
}

export default Header