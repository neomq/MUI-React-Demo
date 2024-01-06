import { ReactElement, ReactNode, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Header from "./Header";
import Drawer from "@mui/material/Drawer";
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

  const drawer = (
    <List>
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
          <ListItemButton>
            <ListItemIcon sx={sideNavStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
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
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#101f33",
                color: "rgba(255, 255, 255, 0.7)",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#101f33",
                color: "rgba(255, 255, 255, 0.7)",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Stack>

      <Stack>
        <Header
          title={selectedMenuItem?.label}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Stack style={{ marginTop: "64px" }}>{children}</Stack>
      </Stack>
    </Stack>
  );
};

export default SideNavigation;
