import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material';
import { StepsTutorialPopover } from '../../StepsTutorialPopover/StepsTutorialPopover';

interface Props {
    handleFinish: () => void;
    renderOpenButton: (onClick: () => void) => ReactNode;
}

const PrimerStepHomePopover = () => {
    return (
        <Box>
            <Typography variant='h6' sx={{ fontWeight: 900 }} >Conoce Home</Typography>
            <Typography variant='body2' sx={{ lineHeight: "1.2em" }}>Comienza con el recorrido de nuestra nueva plataforma dinamica</Typography>
            <Typography variant="body2" color="primary" fontWeight={500} sx={{ lineHeight: "1em" }}>Conoce mas</Typography>

            <Box sx={{ width: "100%", height: "100px", bgcolor: "gray", mt: 2, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>VIDEO</Box>
            <Typography variant="body2" component={"p"} textAlign="center" mt={1}>Texto descriptivo</Typography>
        </Box>
    )
}

export const HomePopover = ({ handleFinish, renderOpenButton }: Props) => {

    const arrHomeSteps = [
        <PrimerStepHomePopover />,
        <Box><Typography variant='h6'>Este es el 2do step</Typography><Typography variant='body1'>del popover de Home</Typography></Box>,
        <Box><Typography variant='h6'>Este es el 3er step</Typography><Typography variant='body1'>del popover de Home</Typography></Box>,
    ]

    return (
        <StepsTutorialPopover
            id="HomePopover"
            handleFinish={handleFinish}
            arrStepsContent={arrHomeSteps}
            renderOpenButton={renderOpenButton}
            rememberFinished={true}
        />
    )
}

