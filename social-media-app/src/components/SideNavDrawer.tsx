import React from 'react'
import { Drawer } from "@mui/material"
import { drawerWidth } from '../styles/styles'

type DisplayType = {
    xs: string
    sm: string
}

type ModalPropsType = {
    keepMounted: boolean
}

interface SideNavDrawer {
    variant: "permanent" | "persistent" | "temporary" | undefined
    open: boolean
    onTransitionEnd?: () => void
    onClose?: () => void
    ModalProps?: ModalPropsType
    display?: DisplayType
    children?: React.ReactNode
}

const SideNavDrawer = ({ display, children, ...rest }: SideNavDrawer) => {
    return (
        <Drawer
            sx={{ 
                display: display,
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    width: drawerWidth,
                    border: "none",
                    background: "#FAFCFF",
                    left: "auto"
                }
            }}
            {...rest}
        >
            {children}
        </Drawer>
    )
}

export default SideNavDrawer