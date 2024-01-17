import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, ListItem, Switch, PaletteMode } from "@mui/material"
import { sideMenuItems } from '../data/data'
import { cardStyle } from '../styles/styles'

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
  const listStyle = {...cardStyle}
  listStyle.paddingBottom = 2
  
  return (
    <Box p={2}>
        <List sx={listStyle} subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ pt: "8px", pl: "32px", borderRadius: "8px" }}>
            Menu
          </ListSubheader>
        }>
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
                    "&.Mui-selected": { color: "#4D8AFF", backgroundColor: "#F0F6FF", borderLeft: "3px solid #4D8AFF", paddingLeft: "29px",},
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
        </List>

        <List disablePadding sx={{ marginTop: "16px", background: "white", borderRadius: "8px", boxShadow: "0px 4px 24px 0px rgba(60, 68, 91, 0.08)" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#" sx={{ paddingX: "32px" }}>
              <ListItemText primary="Dark Mode" primaryTypographyProps={{ fontSize: 14 }} />
              <Switch onChange={() => setMode((mode === "light") ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>

    </Box>
  )
}

export default SideNavItems 