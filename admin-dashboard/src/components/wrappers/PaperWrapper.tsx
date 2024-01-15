import { Paper } from "@mui/material";

interface CardWrapperProps {
    children: React.ReactNode
}

const CardWrapper = ({ children }: CardWrapperProps) => {
    return (
        <Paper sx={{
            minHeight: '140px',
            borderRadius: 2,
            boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.15) 0px 2px 8px",
        }}>
            {children}
        </Paper>
    )
}

export default CardWrapper