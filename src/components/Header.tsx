import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from "@mui/material/styles";

type clickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>

type MenuItemChildren = {
  id: number | string;
  label: string;
  route: string;
}
interface HeaderProps {
  title?: string
  tabs?: MenuItemChildren[]
  handleDrawerToggle: () => void;
}
interface TabLinkProps {
  value: number | string
  label: string
  href: string
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  "@media all": {
    minHeight: 48,
  },
}));

const Header = (props: HeaderProps) => {
  const { title, handleDrawerToggle, tabs } = props;
  const [tabsData, setTabsData] = useState<MenuItemChildren[]>([])
  const [activeTabId, setActiveTabId] = useState<number | string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if ( tabs && tabs.length > 0 ){
      setTabsData(tabs)
      setActiveTabId(tabs[0].id)
    } else {
      setTabsData([])
      setActiveTabId("")
    }
  },[tabs])

  useEffect(() => {
    if (tabsData && tabsData.length > 0) {
      const activeTab = tabsData.find((tabItem) => tabItem.route === location.pathname)
      console.log("active tab", activeTab)
      activeTab && setActiveTabId(activeTab.id)
    }
  }, [tabsData, location.pathname]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTabId(newValue);
  };

  const TabLink = ({ value, label, href, ...rest }: TabLinkProps) => (
      <Tab
        component="a"
        onClick={(e: clickEvent) => {
          e.preventDefault()
          navigate(href)
        }}
        value={value}
        label={label}
        href={href}
        {...rest}
      />
  )

  console.log("tabsData", tabsData)

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#181C3F" }}>
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
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button sx={{ color: '#fff' }}>
          Docs
        </Button>
        <IconButton
          color="inherit"
          sx={{ marginRight: 2 }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#f9f9f920" }} />
        <Tooltip title="My Profile">
          <IconButton color="inherit" sx={{ marginLeft: 2 }}>
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </StyledToolbar>
      <Stack direction="row" sx={{
        mt: 1,
        paddingX: 3,
        paddingBottom: activeTabId ? 1 : 3,
      }}>
          <Typography
            variant="h5"
            noWrap
            component="h1"
            sx={{
              fontSize: 26,
              letterSpacing: 0.5,
              flexGrow: 1,
            }}
          >
            {title || "Responsive Header"}
          </Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{
            '&.MuiButton-outlined': {
              color: '#C0C1CD',
              letterSpacing: 1,
              border: '1px solid #C0C1CD',
              borderRadius: '8px',
              px: 2,
            },
            '&.MuiButton-outlined:hover': {
              backgroundColor: '#21254A',
            },
          }}>
          Web setup
        </Button>
        <IconButton
          color="inherit"
          sx={{ marginLeft: 2 }}
        >
          <HelpIcon />
        </IconButton>
      </Stack>
      
      {(tabsData && activeTabId) &&
        <Tabs
          value={activeTabId}
          onChange={handleTabChange}
          role="navigation"
          sx={{
            mt: 2,
            paddingLeft: 1,
            paddingRight: 3,
            "& .MuiTab-root": { color: "#C8C9D280", marginX: 2, paddingX: 0, minWidth: "max-content", textTransform: "capitalize", fontWeight: "normal" },
            "& .MuiTabs-indicator": { backgroundColor: "#ffffff" },
            "& .MuiTab-root.Mui-selected": { color: "#ffffff" },
          }}
        >
          {tabsData.map((tabItem)=>(
            <TabLink key={tabItem.id} value={tabItem.id} label={tabItem.label} href={tabItem.route} />
          ))}
        </Tabs>
      }
    </AppBar>
  );
};

export default Header;