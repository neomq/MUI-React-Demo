import { Home, Settings, AccountBox, Person, Storefront, Article, Group } from '@mui/icons-material';

export const sideMenuItems = [
    { 
        id: 1, 
        icon: <Home fontSize="small" />, 
        label: "Home",
        route: "/"
    },
    { 
        id: 2, 
        icon: <Article fontSize="small" />, 
        label: "Pages",
        route: "/pages"
    },
    { 
        id: 3, 
        icon: <Group fontSize="small" />, 
        label: "Groups",
        route: "/groups"
    },
    { 
        id: 4, 
        icon: <Storefront fontSize="small" />, 
        label: "Marketplace",
        route: "/marketplace"
    },
    { 
        id: 5, 
        icon: <Person fontSize="small" />, 
        label: "Friends",
        route: "/friends"
    },
    { 
        id: 6, 
        icon: <Settings fontSize="small" />, 
        label: "Settings",
        route: "/settings"
    },
    { 
        id: 7, 
        icon: <AccountBox fontSize="small" />, 
        label: "Profile",
        route: "/profile"
    },
]