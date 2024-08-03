import { HomeOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
import { Box, Drawer, List, ListItem } from '@mui/material';
import { Outlet, useNavigate } from 'react-router';
import { appRoutes } from '../../router/appRoutes';
import { DashButton } from './components/DashButton/DashButton';
import { HomePopover } from './components/popovers/HomePopover/HomePopover';
import { SettingsPopover } from './components/popovers/SettingsPopover/SettingsPopover';

const dashMenuOptions = [
    {
        title: "Home",
        renderDashButton: (handleClick: () => void) =>
            <HomePopover
                handleFinish={handleClick}
                renderOpenButton={(onClick) => <DashButton onClick={onClick}><HomeOutlined htmlColor='white' fontSize='large' /></DashButton>}
            />,
        path: appRoutes.HOME,
    },
    {
        title: "Settings",
        renderDashButton: (handleClick: () => void) =>
            <SettingsPopover
                handleFinish={handleClick}
                renderOpenButton={(onClick) => <DashButton onClick={onClick}><SettingsOutlined htmlColor='white' fontSize='large' /></DashButton>}
            />,
        path: appRoutes.SETTINGS,
    },
    {
        title: "Notifications",
        renderDashButton: (handleClick: () => void) => <DashButton onClick={handleClick}><NotificationsOutlined htmlColor='white' fontSize='large' /></DashButton>,
        path: appRoutes.NOTIFICATIONS,
    }
]

export const DashMenu = () => {

    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <Box>
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <List sx={{ width: "70px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    {
                        dashMenuOptions.map(ctOption =>
                            <ListItem key={ctOption.title} disableGutters sx={{ width: "fit-content" }}>
                                {ctOption.renderDashButton(() => handleNavigate(ctOption.path))}
                            </ListItem>
                        )
                    }
                </List>
            </Drawer>
            <Box sx={{ ml: "70px", bgcolor: "red" }}>
                <Outlet></Outlet>
            </Box>
        </Box >
    )
}
