import { Container, Box } from "@mui/material";

interface PageWrapperProps {
    children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <Container maxWidth={false}>
            <Box sx={{ marginTop: 4 }}>
               {children}
            </Box>
        </Container>
    )
}

export default PageWrapper