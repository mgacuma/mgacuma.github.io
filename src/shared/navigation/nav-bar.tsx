import { AppBar, Box, Button, Container, Divider, Drawer, Grid, IconButton, List, ListItem, Menu, MenuItem, Paper, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import React, { ReactElement, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLinks } from "./nav-links";
import NavToTop from "./nav-to-top";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
        <Toolbar>

          <NavLinks />
          
          <Box display={{xs: 'flex', sm: 'none'}} sx={{height: 64}}>
            <Button onClick={e => setDrawer(!drawer)} sx={{color: '#27323d'}}>
              <MenuIcon fontSize="large" />
            </Button>

            <Drawer open={drawer} anchor='left' onClose={() => setDrawer(false)}>

                <Box paddingX={2}>
                  <Link to="/hq/" onClick={() => {setDrawer(false)}} style={{textDecoration: 'none', color: '#27323d'}}><Typography paddingY={1} variant="h4">Home</Typography></Link>
                  <Divider />
                  <Link to="/hq/todo-app" onClick={() => {setDrawer(false)}} style={{textDecoration: 'none', color: '#27323d'}}><Typography variant="h4">Todo App</Typography></Link>
                  <Divider />
                  <Link to="/hq/quiz-app" onClick={() => {setDrawer(false)}} style={{textDecoration: 'none', color: '#27323d'}}><Typography paddingY={1} variant="h4">Quiz App</Typography></Link>
                  <Divider />
                </Box>

                  <Box justifyContent={'center'} paddingY={1} paddingX={2} alignItems='center'>
                    <Link to="https://github.com/mgacuma" rel="noopener noreferrer" target="_blank">
                      <GitHubIcon  sx={{color: '#27323d'}}/> 
                    </Link>
                    <Link to="https://linkedin.com/in/mgacuma" rel="noopener noreferrer" target="_blank">
                      <LinkedinIcon sx={{color: '#27323d'}}/>
                    </Link>
                  </Box>
            </Drawer>
          </Box>

          <Typography sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontSize: 28,
              letterSpacing: '.007rem',
              color: '#27323d',
              textDecoration: 'none',
            }}>
            {'Hire Me Maybe'}
          </Typography>

        </Toolbar>
        <NavToTop />
    </AppBar>
  )
}

export default NavBar;
