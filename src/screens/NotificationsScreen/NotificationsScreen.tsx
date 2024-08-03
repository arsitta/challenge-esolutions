import { Box, Container, Typography } from '@mui/material'

export const NotificationsScreen = () => {
    return (
        <Box component="section" sx={{ height: "100vh", backgroundColor: "#1c2e36" }} >
            <Container>
                <Typography variant='h1' color="white">
                    Notifications
                </Typography>

                <Typography variant="h6" color="white">
                    Caso navegacion sin popover
                </Typography>
            </Container>
        </Box>
    )
}
