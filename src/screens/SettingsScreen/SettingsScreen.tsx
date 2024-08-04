import { Box, Container, Typography } from '@mui/material'

export const SettingsScreen = () => {
    return (
        <Box component="section" sx={{ minHeight: "100vh", backgroundColor: "#3c134a" }} >
            <Container>
                <Typography variant='h1' color="white">
                    Settings
                </Typography>

                <Typography variant="h6" color="white">
                    Caso con popover y rememberFinished=false <br></br>
                    (mostrara siempre el popover, aunque ya se lo haya finalizado)
                </Typography>
            </Container>
        </Box>
    )
}
