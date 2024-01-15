import { ReactNode } from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { LocalFlorist, Home } from "@mui/icons-material";
import { sideNavStyles } from "../styles/styles";
import { modalprops, display } from "../types/types";

interface NavDrawerProps {
  variant: DrawerProps["variant"];
  open: boolean;
  onClose?: () => void;
  modalprops?: modalprops;
  display: display;
  children: ReactNode;
}

const NavDrawer = ({ children, display, ...rest }: NavDrawerProps) => {
  const { 
    drawerWidth,
    navHeaderBtn,
    navHeaderText,
    navHeaderIcon,
    navItemBtn,
    navItemIcon,
    navItemText,
    navDivider
  } = sideNavStyles
  
  return (
    <Drawer
      sx={{
        display: display,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "#1F2938",
          color: "rgba(255, 255, 255, 0.7)",
        },
      }}
      {...rest}
    >
      <List
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <ListItem disablePadding>
          <ListItemButton sx={navHeaderBtn}>
            <ListItemIcon sx={navHeaderIcon}>
              <LocalFlorist sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Flower"
              primaryTypographyProps={navHeaderText}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={navDivider} />
        <ListItem disablePadding>
          <ListItemButton sx={navItemBtn}>
            <ListItemIcon sx={navItemIcon}>
              <Home fontSize="small" />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Project Overview"
              primaryTypographyProps={navItemText}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={navDivider} />
      </List>
      {children}
    </Drawer>
  );
};

export default NavDrawer;
