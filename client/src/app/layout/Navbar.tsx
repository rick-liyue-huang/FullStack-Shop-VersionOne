
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const middleLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

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
        <List sx={{display: 'flex', gap: 2, marginLeft: 'auto'}}>
        {
          middleLinks.map(({title, path}) => (
            <ListItem component={NavLink} to={path} key={title} 
              sx={{
                color: 'inherit', typography: 'h6', 
                '&:hover': {
                  color: 'grey.500',
                  borderBottom: '1px solid',
                  borderColor: 'primary.main'
                },
                '&.active': {
                  color: 'grey.500',
                  borderBottom: '1px solid',
                  borderColor: 'primary.main'
                }
              }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))
        }
        </List>

        <IconButton sx={{marginLeft: 'auto'}}>
          <Badge badgeContent={4} color='secondary'>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{display: 'flex', gap: 2}}>
        {
          rightLinks.map(({title, path}) => (
            <ListItem component={NavLink} to={path} key={title} sx={{color: 'inherit', typography: 'h6'}}>
              {title.toUpperCase()}
            </ListItem>
          ))
        }
        </List>
      </Toolbar>
    </AppBar>
  )
}
