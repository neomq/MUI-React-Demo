import { ReactNode, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Stack, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { sideNavItems } from "../data/data";
import { sideNavStyles } from "../styles/styles";
import { MenuItem, selectedMenuItem } from "../types/types"
import Header from "./Header";
import NavDrawer from "./NavDrawer";

interface SideNavProps {
  children: ReactNode;
}

const SideNavigation = ({ children }: SideNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menu: MenuItem[] = sideNavItems;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<selectedMenuItem>(menu[0]);
  const { drawerWidth, menuHeaderText, menuItemBtn, navItemIcon, navItemText } = sideNavStyles
  
  console.log("active sidenav", selectedMenuItem)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getSelectedItem = (menu: MenuItem[], path: string) => {
    return menu.find((item) => {
      return item.children
        ? item.children.find((childItem) => childItem.route === path)
        : item.route === path
    });
  }

  useEffect(() => {
    const selected = getSelectedItem(menu, location.pathname)
    setSelectedMenuItem(selected);
  }, [menu, location.pathname]);

  const navigateToPage = ( item: MenuItem ) => {
    if( item.children ) {
      navigate(item.children[0].route)
    } else {
      navigate(item.route)
    }
  }

  const handleItemClick = (item: MenuItem) => {
    navigateToPage(item)
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }

  const navItems = (
    <List sx={{ p: 0 }}>
      <ListItem sx={{ height: 64, paddingX: 3 }}>
        <ListItemText primary="Build" primaryTypographyProps={menuHeaderText}/>
      </ListItem>
      {menu.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => handleItemClick(item)}
          disablePadding
        >
          <ListItemButton
            selected={selectedMenuItem?.id === item.id}
            sx={menuItemBtn}
          >
            <ListItemIcon sx={navItemIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={navItemText}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Stack>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <NavDrawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            modalprops={{
              keepMounted: true,
            }}
            display={{ xs: "block", sm: "none" }}
          >
            {navItems}
          </NavDrawer>
          <NavDrawer
            variant="permanent"
            open={true}
            display={{ xs: "none", sm: "block" }}
          >
            {navItems}
          </NavDrawer>
        </Box>
      </Stack>

      <Stack display="flex" flexGrow={1} sx={{ width: '100%' }}>
        <Header
          title={selectedMenuItem?.label}
          tabs={selectedMenuItem?.children || []}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Stack>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideNavigation;
