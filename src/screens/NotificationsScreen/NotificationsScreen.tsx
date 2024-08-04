import { Box, Card, CardProps, Container, styled, Typography } from '@mui/material'
import { CountrySelector } from '../../components/CountrySelector/CountrySelector'

const StyledCard = styled(Card)<CardProps>(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    borderRadius: "16px",
}))

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

                <Typography variant="h6" color="white" mt={3}> Componente selector de paises simple</Typography>
                <Box sx={{ width: "fit-content" }}>
                    <StyledCard>
                        <Typography variant="h6" mb={5}>Seleccionar un pais</Typography>
                        <CountrySelector />
                    </StyledCard>
                </Box>

                <Typography variant="h6" color="white" mt={3}> Componente selector de paises multiple</Typography>
                <Box sx={{ width: "fit-content" }}>
                    <StyledCard>
                        <Typography variant="h6" mb={5}>Seleccionar varios paises</Typography>
                        <CountrySelector isMultiSelect={true} />
                    </StyledCard>
                </Box>
            </Container>
        </Box>
    )
}
