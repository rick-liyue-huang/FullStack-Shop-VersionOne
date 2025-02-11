import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Catalog } from "../../features/catalog/Catalog";
import { Box, Container } from "@mui/material";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";



function App() {

  const [darkMode, setDarkMode] = useState(true);

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#6abcef' : '#071550)'
      }
    },
  });

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />

      <Box sx={{minHeight: '100vh', background: darkMode ? '#071550' : '#6abcef'}}>
        <Container maxWidth="xl" sx={{pt: 12}}>
          <Outlet />
        </Container>
      </Box>
      
    </ThemeProvider>
  )
}

export default App
