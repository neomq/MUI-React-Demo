// SideNav Items
import { 
    People,
    Image,
    Public,
    SettingsEthernet,
    SettingsInputComponent,
    Dns, 
    AutoGraph,
    StarBorder,
    Settings,
    Logout
} from '@mui/icons-material'

export const sideNavItems = [
    {
        id: 1,
        icon: <People fontSize="small"/>,
        label: 'Authentication',
        route: '/authentication',
        children: [
            {
                id: 10,
                label: 'Users',
                route: '/authentication/users'
            },
            {
                id: 11,
                label: 'Sign-In Method',
                route: '/authentication/signinmethod'
            },
            {
                id: 12,
                label: 'Templates',
                route: '/authentication/templates'
            },
            {
                id: 13,
                label: 'Usage',
                route: '/authentication/usage'
            }
        ]
    },
    {
        id: 2,
        icon: <Dns fontSize="small"/>,
        label: 'Database',
        route: '/database',
    },
    {
        id: 3,
        icon: <Image fontSize="small"/>,
        label: 'Storage',
        route: '/storage',
    },
    {
        id: 4,
        icon: <Public fontSize="small"/>,
        label: 'Hosting',
        route: '/hosting',
    },
    {
        id: 5,
        icon: <SettingsEthernet fontSize="small"/>,
        label: 'Functions',
        route: '/functions',
    },
    {
        id: 6,
        icon: <SettingsInputComponent fontSize="small"/>,
        label: 'Machine Learning',
        route: '/machine-learning',
    },
]

export const profileMenu = [
    {
        icon: <AutoGraph fontSize="small"/>,
        label: 'Analytics',
        route: '/analytics'
    },
    {
        icon: <StarBorder fontSize="small"/>,
        label: 'Go PRO',
        route: '/pro'
    },
    {
        icon: <Settings fontSize="small"/>,
        label: 'Settings',
        route: 'settings'
    },
    {
        icon: <Logout fontSize="small"/>,
        label: 'Log Out',
        route: '/login'
    },
]

export const userProfile = {
    firstName: "Lillie",
    lastName: "Lee",
    username: "@lileelee",
    email: "leelee@email.com",
    photo: "https://mui.com/static/images/avatar/3.jpg",
    backgroundImg: "https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}