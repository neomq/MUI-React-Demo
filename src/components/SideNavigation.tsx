import { ReactElement, ReactNode, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import NavDrawer from "./NavDrawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SvgIconProps } from "@mui/material";
import { sideNavItems } from "../constants/sidenavitems";
import { sideNavStyles, drawerWidth } from "../styles/sidenavigation";

type MenuItem = {
  id: number;
  icon: ReactElement<SvgIconProps>;
  label: string;
  route: string;
  children?: MenuItemChildren[];
};

type MenuItemChildren = {
  id: number;
  label: string;
  route: string;
}

type selectedMenuItem = MenuItem | undefined;

interface SideNavProps {
  children: ReactNode;
}

const SideNavigation = ({ children }: SideNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menu: MenuItem[] = sideNavItems;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<selectedMenuItem>(menu[0]);
  
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

  const navItems = (
    <List
      sx={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <ListItem sx={{ height: 64, paddingX: 3 }}>
        <ListItemText
          primary="Build"
          primaryTypographyProps={{
            fontSize: 13,
            fontWeight: "medium",
            color: "#f9f9f980",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        />
      </ListItem>
      {menu.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => {
            navigateToPage(item)
            if (mobileOpen) {
              setMobileOpen(false);
            }
          }}
          disablePadding
        >
          <ListItemButton
            selected={selectedMenuItem?.id === item.id}
            sx={{
              height: 48,
              paddingX: 3,
              "&.Mui-selected": {
                color: "#ffffff",
                backgroundColor: "#6B54FF",
              },
              "&.Mui-focusVisible": {
                color: "#ffffff",
                backgroundColor: "#181C3F40",
              },
              ":hover": {
                color: "#ffffff",
                backgroundColor: "#181C3F40",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#6B54FF",
              },
            }}
          >
            <ListItemIcon sx={{ 
              color: "inherit",
              "&.MuiListItemIcon-root": { 
                minWidth: '32px',
              }
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
