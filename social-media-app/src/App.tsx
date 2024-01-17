import { useState } from 'react';
import { Box, CssBaseline, createTheme, PaletteMode, ThemeProvider } from "@mui/material"
import CreatePost from './components/CreatePost'
import AppContent from './components/AppContent';
import './App.css'

function App() {
  const [mode, setMode] = useState<PaletteMode | undefined>("light")
  const appTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={appTheme}>
      <Box bgcolor="#FAFCFF" color="text.primary">
        <CssBaseline />
        <AppContent mode={mode} setMode={setMode} />
        <CreatePost />
      </Box>
    </ThemeProvider>
  )
}

export default App
