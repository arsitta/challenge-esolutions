import { Box, Button, Card, CardProps, Container, Stack, styled, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { CountryI, CountrySelector } from '../../components/CountrySelector/CountrySelector';
import { DatePicker } from '../../components/DatePicker/DatePicker';

const StyledCard = styled(Card)<CardProps>(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    borderRadius: "16px",
}))

export const NotificationsScreen = () => {

    const [oneCountry, setOneCountry] = useState<CountryI[]>([])
    const [multiCountry, setMultiCountry] = useState<CountryI[]>([])
    const [fechaSeleccionada, setFechaSeleccionada] = useState<Dayjs | null>(null)

    return (
        <Box component="section" sx={{ minHeight: "100vh", backgroundColor: "#1c2e36" }} >
            <Container>
                <Typography variant='h1' color="white">
                    Notifications
                </Typography>

                <Typography variant="h6" color="white">
                    Caso navegacion sin popover
                </Typography>

                <Stack direction="row" sx={{ columnGap: 3, flexWrap: "wrap" }}>
                    <Box sx={{ width: "fit-content" }}>
                        <Typography variant="h6" color="white" mt={3}> Componente selector de paises simple</Typography>
                        <StyledCard>
                            <Typography variant="h6" mb={5}>Seleccionar un pais</Typography>
                            <CountrySelector values={oneCountry} onChange={setOneCountry} />
                        </StyledCard>
                    </Box>
                    <Box sx={{ width: "fit-content" }}>
                        <Typography variant="h6" color="white" mt={3}> Componente selector de paises multiple</Typography>
                        <StyledCard>
                            <Typography variant="h6" mb={5}>Seleccionar varios paises</Typography>
                            <CountrySelector values={multiCountry} onChange={setMultiCountry} isMultiSelect={true} />
                        </StyledCard>
                    </Box>
                </Stack>

                <Typography variant="h6" color="white" mt={3}> Componente DatePicker</Typography>
                <DatePicker value={fechaSeleccionada} onChange={setFechaSeleccionada} />

                <Button variant="contained" sx={{ my: 3 }} onClick={() => console.log({ oneCountry, multiCountry, fechaSeleccionada })}>LOG ESTADOS</Button>
            </Container>
        </Box>
    )
}
