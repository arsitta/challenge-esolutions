import { Box, Button, ButtonProps, Popover, Stack, styled, Typography } from '@mui/material';
import { ReactNode, useRef, useState } from 'react';

interface Props {
    id: string;
    renderOpenButton?: (onClick: () => void) => ReactNode;
    handleFinish: () => void;
    arrStepsContent: ReactNode[];
    rememberFinished?: boolean;
}

const NavigationPopoverButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: "50px",
    padding: "2px 20px",
    textTransform: "none",
    fontSize: "0.9rem",
    fontWeight: 400,
}))


export const StepsTutorialPopover = ({
    id,
    renderOpenButton,
    handleFinish,
    arrStepsContent,
    rememberFinished,
}: Props) => {

    const buttonContainerRef = useRef(null)
    const [open, setOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const [wasFinished, setWasFinished] = useState(false)

    const handleShow = () => {
        if (rememberFinished && wasFinished) return handleFinish()

        setCurrentStep(0)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleNext = () => {
        setCurrentStep(st => st + 1)
    }

    const handleFinishTutorial = () => {
        if (rememberFinished) setWasFinished(true)

        handleClose()
        handleFinish()
    }

    return (
        <>
            <Box
                ref={buttonContainerRef}
            >
                {
                    renderOpenButton ?
                        renderOpenButton(handleShow)
                        :
                        <Button variant="contained" onClick={handleShow}>
                            Abrir
                        </Button>
                }
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={buttonContainerRef.current}
                anchorReference="anchorEl"

                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 30,
                    horizontal: -40,
                }}
                sx={{
                    ".MuiPopover-paper": {
                        width: 300,
                        height: 370,
                        px: 4,
                        py: 3,
                        borderRadius: 2,
                        overflow: 'visible',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '-17px',
                            top: "35px",
                            width: 0,
                            height: 0,
                            borderTop: '20px solid transparent',
                            borderBottom: '20px solid transparent',
                            borderRight: '20px solid #ffffff',
                        },
                    }
                }}

            >
                <Stack height={"100%"} gap={1}>
                    <Typography variant="body2" color="primary" >
                        Paso {currentStep + 1} de {arrStepsContent.length}
                    </Typography>

                    <Box sx={{ flexGrow: 2, }}>
                        {arrStepsContent[currentStep]}
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "end", gap: "0.7rem" }} >
                        <NavigationPopoverButton variant="outlined" color="info" size="small" onClick={handleClose}>Cancelar</NavigationPopoverButton>
                        {
                            currentStep < arrStepsContent.length - 1 ?
                                <NavigationPopoverButton variant="contained" size="small" onClick={handleNext}>Aceptar</NavigationPopoverButton>
                                :
                                <NavigationPopoverButton variant="contained" size="small" onClick={handleFinishTutorial}>Finalizar</NavigationPopoverButton>
                        }
                    </Box>
                </Stack>
            </Popover >

        </>
    )
}
