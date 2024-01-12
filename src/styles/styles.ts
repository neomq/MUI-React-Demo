// Colours
export const colours = {
  accent: {
    primary: "#6B54FF",
    light: "#B5AAFF",
    hover: "#5c46ec",
    active: "#5c46ec",
  },
  grayscale: {
    dark: "#1A232F",
    midnight: "#1F2939",
    night: "#333B46",
    oslo: "#878C94",
    paper: "#F9FAFB",
    metal: "#647382",
  }
}

// Buttons
const priBtn = {
  '&.MuiButton-contained': {
    width: '90px',
    height: '36px',
    fontSize: '13px',
    fontWeight: 'normal',
    textTransform: 'none',
    letterSpacing: 1,
    borderRadius: '8px',
    backgroundColor: colours.accent.primary,
    px: 1,
    },
    '&.MuiButton-contained:hover': {
    backgroundColor: colours.accent.hover,
    },
}

const outlineBtnLight = {
  '&.MuiButton-outlined': {
    display: "block",
    width: '90px',
    height: '34px',
    color: colours.accent.light,
    fontSize: '13px',
    fontWeight: 'normal',
    textTransform: 'none',
    letterSpacing: 1,
    border: `1px solid ${colours.accent.light}`,
    borderRadius: '8px',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    px: 1,
  },
  '&.MuiButton-outlined:hover': {
    color: 'white',
    border: '1px solid white',
  },
}

// Card
const card = {
  minHeight: '140px',
  borderRadius: 2,
  position: 'relative',
  boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.15) 0px 2px 8px",
}

// Side Navigation
import { TypographyProps } from "@mui/material";
const drawerWidth = 240

// Side Navigation - Header
const navHeaderBtn = {
  height: 62,
  paddingX: 3,
  backgroundColor: colours.grayscale.midnight,
  "&.Mui-selected": { backgroundColor: colours.grayscale.midnight },
  "&.Mui-focusVisible": { backgroundColor: colours.grayscale.dark },
  ":hover": { backgroundColor: colours.grayscale.dark },
}
const navHeaderIcon = {
  fontSize: 20,
  "&.MuiListItemIcon-root": { minWidth: '34px'}
}
const navHeaderText = {
  fontSize: 20, 
  fontWeight: "medium",
  color: "white",
}

// Side Navigation - Item
const navItemBtn = {
  height: 56,
  paddingX: 3,
  backgroundColor: colours.grayscale.midnight,
  "&.Mui-selected": { color: "white", backgroundColor: colours.accent.primary },
  "&.Mui-focusVisible": { backgroundColor: colours.grayscale.dark },
  ":hover": { color: "white", backgroundColor: colours.grayscale.dark },
  "&.Mui-selected:hover": { backgroundColor: colours.accent.primary },
}
const navItemIcon = {
  color: "inherit",
  "&.MuiListItemIcon-root": { minWidth: '32px' }
}
const navItemText = {
  fontSize: 14,
  fontWeight: "normal",
  letterSpacing: "0.04em",
}

// Side Navigation - Menu
const menuHeaderText: TypographyProps<"span", { component?: "span" | undefined; }> = {
  fontSize: 13,
  fontWeight: "medium",
  color: colours.grayscale.oslo,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
}
const menuItemBtn = {
  height: 48,
  paddingX: 3,
  "&.Mui-selected": { color: "white", backgroundColor: colours.accent.primary },
  "&.Mui-focusVisible": { color: "white", backgroundColor: colours.grayscale.dark },
  ":hover": { color: "white", backgroundColor: colours.grayscale.dark },
  "&.Mui-selected:hover": { backgroundColor: colours.accent.primary },
}

// Side Navigation - Others
const navDivider = {
  bgcolor: colours.grayscale.night
}

// Profile Menu
const profileMenu = {
  overflow: 'visible',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  minWidth: '160px',
  mt: 1.5,
  '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
  },
  '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
  },
}

const profileHeaderTextPri = {
  noWrap: true,
  fontSize: 15,
  fontWeight: "normal",
  color: colours.grayscale.midnight,
  letterSpacing: "0.03em",
  mb: "2px",
}

const profileHeaderTextSec = {
  noWrap: true,
  fontSize: 13,
  fontWeight: "normal",
  letterSpacing: "0.03em",
  color: colours.grayscale.oslo,
}

const profileHeaderBtn = {
  paddingBottom: 2,
  px: "24px",
  ":hover": {
    backgroundColor: "transparent"
  }
}

const profileMenuItemBtn = {
  height: 36,
  paddingX: 3,
  "&.Mui-focusVisible": { color: colours.accent.primary, backgroundColor: "transparent" },
  ":hover": { color: colours.accent.primary, backgroundColor: "transparent" },
}

// Exports
export const buttonStyles = {
  priBtn,
  outlineBtnLight,
}

export const sideNavStyles = {
  drawerWidth,
  navHeaderBtn,
  navHeaderIcon,
  navHeaderText,
  navItemBtn,
  navItemIcon,
  navItemText,
  menuHeaderText,
  menuItemBtn,
  navDivider,
}

export const profileMenuStyle = {
  profileMenu,
  profileHeaderTextPri,
  profileHeaderTextSec,
  profileHeaderBtn,
  profileMenuItemBtn,
  navItemIcon,
  navItemText
}

export const profileCardStyle = {
  card,
  colours
}