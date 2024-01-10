// SideNav Items
import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const sideNavItems = [
    {
        id: 1,
        icon: <PeopleIcon fontSize="small"/>,
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
        icon: <DnsIcon fontSize="small"/>,
        label: 'Database',
        route: '/database',
    },
    {
        id: 3,
        icon: <ImageIcon fontSize="small"/>,
        label: 'Storage',
        route: '/storage',
    },
    {
        id: 4,
        icon: <PublicIcon fontSize="small"/>,
        label: 'Hosting',
        route: '/hosting',
    },
    {
        id: 5,
        icon: <SettingsEthernetIcon fontSize="small"/>,
        label: 'Functions',
        route: '/functions',
    },
    {
        id: 6,
        icon: <SettingsInputComponentIcon fontSize="small"/>,
        label: 'Machine Learning',
        route: '/machine-learning',
    },
]