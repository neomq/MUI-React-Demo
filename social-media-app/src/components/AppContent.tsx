import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { PaletteMode } from "@mui/material"
import SideNavigation from './SideNavigation';
import Header from './Header';
import AppPages from './AppPages';

interface AppContentProps {
    mode: string | undefined
    setMode: Dispatch<SetStateAction<PaletteMode | undefined>>
}

const AppContent = ({ mode, setMode }: AppContentProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    }

    return (
        <Fragment>
            <Header handleDrawerToggle={handleDrawerToggle} />
                <SideNavigation
                    mode={mode}
                    setMode={setMode}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                    setIsClosing={setIsClosing}
                >
                    <AppPages/>
                </SideNavigation>
        </Fragment>
    )
}

export default AppContent