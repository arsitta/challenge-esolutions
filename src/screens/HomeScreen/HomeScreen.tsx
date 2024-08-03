import { Box, Container, Typography } from '@mui/material'

export const HomeScreen = () => {
    return (
        <Box component="section" sx={{ height: "100vh", backgroundColor: "#1d1c36" }} >
            <Container>
                <Typography variant='h1' color="white">
                    Home
                </Typography>

                <Typography variant="h6" color="white">
                    Caso con popover y rememberFinished=true <br></br>
                    (una vez finalizado no vuelve a mostrar popover)
                </Typography>
            </Container>
        </Box>
    )
}
