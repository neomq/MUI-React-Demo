import { useState, useEffect, SyntheticEvent } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Stack, Typography, Toolbar, AppBar, Button, IconButton, Box, Badge, Tabs, Tab } from "@mui/material"
import { Menu, Notifications, Help } from "@mui/icons-material"
import CommonButton from "./CommonButton"
import ProfileMenu from "./ProfileMenu"
import { styled } from "@mui/material/styles"
import { MenuItemChildren, clickEvent } from "../types/types"

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

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
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
    <AppBar position="sticky" sx={{ backgroundColor: "#624BFF" }} elevation={0}>
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu fontSize="small" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button sx={{ color: '#fff', textTransform: 'capitalize', fontWeight: 'normal' }}>
          Docs
        </Button>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="error">
            <Notifications fontSize="small" />
          </Badge>
        </IconButton>
        <ProfileMenu />
      </StyledToolbar>
      <Stack direction="row" sx={{
        mt: 1,
        height: 'fit-content',
        paddingX: 3,
        paddingBottom: activeTabId ? 0 : 3,
      }}>
          <Typography
            variant="h5"
            noWrap
            component="h1"
            sx={{
              fontSize: 26,
              letterSpacing: 0.5,
              flexGrow: 1,
              width: '140px',
            }}
          >
            {title}
          </Typography>
        <CommonButton size="small" variant="outlined" style="outlineBtnLight">
          Web setup
        </CommonButton>
        <IconButton
          color="inherit"
          sx={{ marginLeft: 1, py: 0 }}
        >
          <Help />
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
            "& .MuiTab-root": { 
              color: "#b5aaff",
              marginX: 2,
              paddingX: 0,
              minWidth: "max-content",
              textTransform: "capitalize",
              fontWeight: "normal" 
            },
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