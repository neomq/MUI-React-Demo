import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { drawerWidth } from "../styles/sidenavigation";

interface HeaderProps {
  title?: string;
  handleDrawerToggle: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, handleDrawerToggle } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {title || "Responsive Header"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
