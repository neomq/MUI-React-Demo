import { ReactElement } from 'react'
import { useNavigate } from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sideNavItems } from '../constants/sidenavitems';
import { SvgIconProps } from '@mui/material';
import { sideNavStyles } from '../styles/sidenavigation';


type MenuItem = {
  id: number
  icon: ReactElement<SvgIconProps>
  label: string
  route: string
}

const menu: MenuItem[] = sideNavItems

const SideNavigation = () => {
  const navigate = useNavigate()
  return (
    <Drawer
      sx={sideNavStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {menu.map((item) => (
          <ListItem 
            key={item.id}
            onClick={()=>navigate(item.route)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon sx={sideNavStyles.icons}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default SideNavigation