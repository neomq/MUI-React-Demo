import { useState } from 'react'
import { Container, AppBar, Toolbar, styled, Box, Avatar, Menu, MenuItem, IconButton } from '@mui/material'
import { Menu as MenuIcon, Mail, Notifications, Search as SearchIcon } from '@mui/icons-material';
import AppIcon from './AppIcon';
import TextInput from './TextInput';
import AppBarIcon from './AppBarIcon';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
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
  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <AppBar
      position="sticky"
      sx={{ background: "white", zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "0px 8px 32px 0px rgba(60, 68, 91, 0.08)" }}
    >
      <Container maxWidth="lg" disableGutters>
        <StyledToolbar>
          <Box sx={{
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
              color: "#4D8AFF",
              display: {
                xs: "block",
                sm: "none"
              }
            }}
          >
            <MenuIcon sx={{ mt: "4px" }} />
          </IconButton>

          <TextInput
            width="32%"
            width_sm="60%"
            placeholder="Search friends, groups or pages"
            icon={<SearchIcon sx={{ color: "#8095B3" }} />}
          />

          <AppBarElements>
            <AppBarIcon icon={<Mail fontSize="small" sx={{ color: "#8095B3" }} />}/>
            <AppBarIcon icon={<Notifications fontSize="small" sx={{ color: "#8095B3" }} />}/>
            <Avatar onClick={openMenu} alt="Cindy Baker" sx={{ width: "40px", height: "40px" }} src="https://mui.com/static/images/avatar/3.jpg" />
          </AppBarElements>

          <ProfileMenuIcon onClick={openMenu}>
            <Avatar alt="Cindy Baker" sx={{ width: "30px", height: "30px" }} src="https://mui.com/static/images/avatar/3.jpg" />
          </ProfileMenuIcon>

        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={closeMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Container>
    </AppBar>

  )
}

export default Header