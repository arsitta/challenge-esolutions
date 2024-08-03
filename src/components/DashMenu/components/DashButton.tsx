import { Button } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    onClick: () => void;
}

export const DashButton = ({ children, onClick }: Props) => {
    return (
        <Button onClick={onClick} sx={{ aspectRatio: "1/1", p: 0, minWidth: "50px" }} variant="contained" color="primary">
            {children}
        </Button>
    )
}
