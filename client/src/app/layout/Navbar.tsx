import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material';


export const Navbar = ({darkMode, handleToggleDarkMode}: {darkMode: boolean, handleToggleDarkMode: () => void}) => {

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6'>
          FullStack Store
        </Typography>
        <IconButton onClick={handleToggleDarkMode}>
          {darkMode ? <DarkMode sx={{color: 'yellowgreen'}} /> : <LightMode sx={{color: 'orange'}} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
