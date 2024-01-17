import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Toolbar, PaletteMode, Container, Stack } from "@mui/material"
import SideNavItems from './SideNavItems'
import SideNavDrawer from './SideNavDrawer'
import { drawerWidth } from '../styles/styles'
import { sideMenuItems } from '../data/data'

interface SideNavigationProps {
    mode: string | undefined
    setMode: Dispatch<SetStateAction<PaletteMode | undefined>>
    mobileOpen: boolean
    setMobileOpen: Dispatch<SetStateAction<boolean>>
    setIsClosing: Dispatch<SetStateAction<boolean>>
    children: React.ReactNode
}

type SideMenuItem = {
    id: number
    icon: JSX.Element
    label: string
    route: string
}

const SideNavigation = ({ mode, setMode, mobileOpen, setMobileOpen, setIsClosing, children }: SideNavigationProps) => {
    const [activeItem, setActiveItem] = useState<SideMenuItem | undefined>()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname) {
            const currentPage = sideMenuItems.find(item => item.route === location.pathname)
            setActiveItem(currentPage)
        }
    }, [location.pathname])

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const drawer = (
        <div>
            <Toolbar />
            <SideNavItems mode={mode} setMode={setMode} activeItem={activeItem} />
        </div>
    )

    return (
        <Container maxWidth="lg" disableGutters>
            <Box sx={{ display: 'flex' }}>
                <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                    <SideNavDrawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        display={{ xs: 'block', sm: 'none' }}
                    >
                        {drawer}
                    </SideNavDrawer>
                    <SideNavDrawer
                        variant="permanent"
                        display={{ xs: 'none', sm: 'block' }}
                        open>
                        {drawer}
                    </SideNavDrawer>
                </Box>
                <Stack
                    direction="row"
                    component="main"
                    sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    {children}
                </Stack>
            </Box>
        </Container>
    )
}

export default SideNavigation