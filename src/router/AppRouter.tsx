import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashMenu } from '../components/DashMenu/DashMenu'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { NotificationsScreen } from '../screens/NotificationsScreen/NotificationsScreen'
import { SettingsScreen } from '../screens/SettingsScreen/SettingsScreen'
import { appRoutes } from './appRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashMenu />}>
                    <Route path={appRoutes.HOME} element={<HomeScreen />} />
                    <Route path={appRoutes.NOTIFICATIONS} element={<NotificationsScreen />} />
                    <Route path={appRoutes.SETTINGS} element={<SettingsScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
