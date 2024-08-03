import { HomeOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
import { Box, Drawer, List, ListItem } from '@mui/material';
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
    },
    {
        title: "Settings",
        renderDashButton: (handleClick: () => void) =>
            <SettingsPopover
                handleFinish={handleClick}
                renderOpenButton={(onClick) => <DashButton onClick={onClick}><SettingsOutlined htmlColor='white' fontSize='large' /></DashButton>}
            />,
    },
    {
        title: "Notifications",
        renderDashButton: (handleClick: () => void) => <DashButton onClick={handleClick}><NotificationsOutlined htmlColor='white' fontSize='large' /></DashButton>,
    }
]

export const DashMenu = () => {

    const handleClickButton = () => {
        console.log("CLICK")
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
                                {ctOption.renderDashButton(handleClickButton)}
                            </ListItem>
                        )
                    }
                </List>
            </Drawer>
        </Box >
    )
}
