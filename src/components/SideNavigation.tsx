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
};

type selectedMenuItem = MenuItem | undefined;

interface SideNavProps {
  children: ReactNode;
}

const SideNavigation = ({ children }: SideNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<selectedMenuItem>();
  const menu: MenuItem[] = sideNavItems;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const selected = menu.find((item) => item.route === location.pathname);
    setSelectedMenuItem(selected);
  }, [location.pathname]);

  const navItems = (
    <List
      sx={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <ListItem sx={{ height: 64 }}>
        <ListItemText
          primary="Build"
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: "medium",
            color: "#f9f9f9",
          }}
        />
      </ListItem>
      {menu.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => {
            navigate(item.route);
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
              "&.Mui-selected": {
                color: "#f9f9f9",
                backgroundColor: "#2e8b57",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "#2e8b57",
              },
              ":hover": {
                backgroundColor: "#112947",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#2e8b57",
              },
            }}
          >
            <ListItemIcon sx={sideNavStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: "medium",
                variant: "body2",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Stack direction="row">
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
            modalProps={{
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

      <Stack>
        <Header
          title={selectedMenuItem?.label}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Stack>{children}</Stack>
      </Stack>
    </Stack>
  );
};

export default SideNavigation;
