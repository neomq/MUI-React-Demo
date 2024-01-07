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
          backgroundColor: "#101f33",
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
              "&.Mui-selected": {
                backgroundColor: "#2e8b57",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "#2e8b57",
              },
              ":hover": {
                backgroundColor: "#112947",
              },
            }}
          >
            <ListItemIcon sx={{ fontSize: 20 }}>
              <LocalFloristIcon sx={{ color: "#f9f9f9" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Flower"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                color: "#f9f9f9",
              }}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ bgcolor: "#f9f9f920" }} />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: 56,
              "&.Mui-selected": {
                backgroundColor: "#2e8b57",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "#2e8b57",
              },
              ":hover": {
                backgroundColor: "#112947",
              },
            }}
          >
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Project Overview"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "bold",
                color: "primary",
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
