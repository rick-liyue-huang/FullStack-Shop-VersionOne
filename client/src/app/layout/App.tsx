import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ProductType } from "../models/product";
import { Catalog } from "../../features/catalog/Catalog";
import { Box, Container } from "@mui/material";
import { Navbar } from "./Navbar";



function App() {

  const [products, setProducts] = useState<ProductType[]>([]);
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

  useEffect(() => {
    fetch('https://localhost:5166/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));

    return () => {
      console.log('cleanup');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />

      <Box sx={{minHeight: '100vh', background: darkMode ? '#071550' : '#6abcef'}}>
        <Container maxWidth="xl" sx={{pt: 12}}>
          <Catalog products={products} />
        </Container>
      </Box>
      
    </ThemeProvider>
  )
}

export default App
