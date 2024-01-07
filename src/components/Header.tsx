import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

interface HeaderProps {
  title?: string;
  handleDrawerToggle: () => void;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  //paddingBottom: theme.spacing(1),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 48,
  },
}));

const Header = (props: HeaderProps) => {
  const { title, handleDrawerToggle } = props;

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolbar>
      <Typography
        variant="h5"
        noWrap
        component="h1"
        sx={{
          paddingX: 3,
          paddingBottom: 2,
          fontSize: 26,
          fontWeight: "medium",
          letterSpacing: 0.5,
        }}
      >
        {title || "Responsive Header"}
      </Typography>
    </AppBar>
  );
};

export default Header;
