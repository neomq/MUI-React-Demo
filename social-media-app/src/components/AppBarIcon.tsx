import { Box, Badge } from '@mui/material'

interface AppBarIconProps {
    icon: JSX.Element
}

const AppBarIcon = ({ icon }: AppBarIconProps) => {
    return (
        <Box sx={{ background: "#FAFCFF", width: "40px", height: "40px", borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Badge badgeContent={4} color="error">
                {icon}
            </Badge>
        </Box>
    )
}

export default AppBarIcon