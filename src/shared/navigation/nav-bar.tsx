import MenuIcon from '@mui/icons-material/Menu'
import { useLocation, Link } from "react-router-dom";
import NavToTop from "./nav-to-top";
import { useState } from "react";
import { AppBar, Box, Container, Grid, Tabs, Tab, Button, Drawer, Typography, Link as MLink } from '@mui/material';

export function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar position="sticky" sx={{backgroundColor:'transparent'}}>
      <Box display={{xs: 'none', sm: 'inherit'}} pt={'1.5vh'} sx={{height: '6vh'}}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box width='80%' textAlign='center'>
              <MLink underline='none' component={Link} to={'/'} variant='h4'>
                mgacuma
              </MLink>

            </Box>
          </Grid>

          <Grid item xs={6}>
            <Tabs
              value={
                useLocation().pathname
              }
              centered
            >
              <Tab
                disableRipple
                value='/'
                label="Home"
                component={Link}
                to={'/'}
              />
              <Tab
                disableRipple
                value='/todo-app'
                label="Todo App"
                component={Link}
                to='/todo-app'
              />
              <Tab
                disableRipple
                value='/quiz-app'
                label="Quiz App"
                component={Link}
                to='/quiz-app'
              />
            </Tabs>
          </Grid>
        </Grid>
      </Box>
      
          
      <Box display={{xs: 'flex', sm: 'none'}} sx={{height: '5vh'}}>
        <Button onClick={e => setOpen(!open)} color='primary'>
          <MenuIcon fontSize="large" />
        </Button>
                  
        <Box width='80%' pt='1vh' textAlign='center'>
            <Typography variant='h4' color='#27323d'>
              Hire Me Maybe
            </Typography>
        </Box>
      </Box>

      

      <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
        <Tabs
          orientation='vertical'
          value={
            useLocation().pathname
          }
        >
          <Tab
            value='/'
            label="Home"
            component={Link}
            to={'/'}
          />
          <Tab
            value='/todo-app'
            label="Todo App"
            component={Link}
            to='/todo-app'
          />
          <Tab
            value='/quiz-app'
            label="Quiz App"
            component={Link}
            to='/quiz-app'
          />
        </Tabs>
      </Drawer>

      <NavToTop />
    </AppBar>
  )
}

export default NavBar;
