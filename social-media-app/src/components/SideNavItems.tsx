import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, ListItemButton, ListItemIcon, ListItemText, ListItem, Switch, PaletteMode } from "@mui/material"
import { sideMenuItems } from '../data/data'
import ListWrapper from './Wrapper/ListWrapper'
import DarkModeIcon from '@mui/icons-material/DarkMode';

type SideMenuItem = {
  id: number
  icon: JSX.Element
  label: string
  route: string
}

interface SideNavItemsProps {
  mode: string | undefined
  setMode: Dispatch<SetStateAction<PaletteMode | undefined>>
  activeItem: SideMenuItem | undefined
}

const SideNavItems = ({ mode, setMode, activeItem }: SideNavItemsProps) => {
  const navigate = useNavigate()

  return (
    <Box p={2}>
      <ListWrapper title="menu" pb={2}>
        {sideMenuItems.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                selected={item.id === activeItem?.id}
                onClick={() => navigate(item.route)}
                sx={{
                  color: "#3C4A71",
                  paddingLeft: "32px",
                  paddingRight: "72px",
                  py: "12px",
                  ":hover": { color: "#4D8AFF", backgroundColor: "transparent" },
                  "&.Mui-selected": { color: "#4D8AFF", backgroundColor: "#F0F6FF", borderLeft: "3px solid #4D8AFF", paddingLeft: "29px", },
                }}
              >
                <ListItemIcon sx={{ color: "inherit", "&.MuiListItemIcon-root": { minWidth: '40px' } }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 15 }} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </ListWrapper>

    <Box marginTop={3}>
      <ListWrapper pb={1}>
        <ListItem sx={{ paddingX: 4, color: "#3C4A71",}}>
            <ListItemIcon sx={{ color: "inherit", "&.MuiListItemIcon-root": { minWidth: '40px' } }}><DarkModeIcon fontSize="small"/></ListItemIcon>
            <ListItemText primary="Dark Mode" primaryTypographyProps={{ fontSize: 14 }} />
            <Switch onChange={() => setMode((mode === "light") ? "dark" : "light")} />
          
        </ListItem>
      </ListWrapper>
    </Box>

      

    </Box>
  )
}

export default SideNavItems 