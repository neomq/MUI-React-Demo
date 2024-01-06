export const drawerWidth = 240;

export const sideNavStyles = {
  drawer: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      backgroundColor: "#101f33",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  icons: { color: "rgba(255, 255, 255, 0.7)" },
  text: {},
};
