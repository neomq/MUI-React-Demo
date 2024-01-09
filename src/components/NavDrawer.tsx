import { ReactNode } from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { drawerWidth } from "../styles/sidenavigation";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Home from "@mui/icons-material/Home";

interface NavDrawerProps {
  variant: DrawerProps["variant"];
  open: boolean;
  onClose?: () => void;
  modalProps?: any;
  display: any;
  children: ReactNode;
}

const NavDrawer = ({ children, display, ...rest }: NavDrawerProps) => {
  return (
    <Drawer
      sx={{
        display: display,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "#2A2E56",
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
          <ListItemButton
            sx={{
              height: 62,
              backgroundColor: "#181C3F80",
              "&.Mui-selected": {
                backgroundColor: "#6B54FF",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "#6B54FF",
              },
              ":hover": {
                backgroundColor: "#181C3F40",
              },
            }}
          >
            <ListItemIcon sx={{ fontSize: 20 }}>
              <LocalFloristIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Flower"
              primaryTypographyProps={{
                fontSize: 20, 
                fontWeight: "medium",
                color: "#fff",
              }}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ bgcolor: "#f9f9f920" }} />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: 56,
              backgroundColor: "#181C3F80",
              "&.Mui-selected": {
                backgroundColor: "#6B54FF",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "#6B54FF",
              },
              ":hover": {
                backgroundColor: "#181C3F40",
              },
            }}
          >
            <ListItemIcon>
              <Home sx={{ color: "#C6C7CF" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Project Overview"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ bgcolor: "#f9f9f920" }} />
      </List>

      {children}
    </Drawer>
  );
};

export default NavDrawer;
