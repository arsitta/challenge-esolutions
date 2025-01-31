import { Box } from '@mui/material'
import './App.css'
import { DashMenu } from './components/DashMenu/DashMenu'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <Box>
      <AppRouter></AppRouter>
    </Box>
  )
}

export default App
