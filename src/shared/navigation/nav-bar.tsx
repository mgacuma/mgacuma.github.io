import { AppBar, Box, Button, Container, Drawer, Grid, IconButton, List, ListItem, Menu, MenuItem, Paper, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import React, { ReactElement, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLinks } from "./nav-links";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>

          <NavLinks />
          
          <Box display={{xs: 'flex', sm: 'none'}} sx={{height: 64}}>
            <Button onClick={e => setDrawer(!drawer)} sx={{color: '#27323d'}}>
              <MenuIcon fontSize="large" />
            </Button>

            <Drawer open={drawer} anchor='left' onClose={() => setDrawer(false)}>
                  <Link to="/hq/" onClick={() => {setDrawer(false)}} style={{textDecoration: 'none', color: '#27323d'}}><Typography paddingY={1} variant="h4">Home</Typography></Link>
                  <Link to="/hq/todo-app" onClick={() => {setDrawer(false)}} style={{textDecoration: 'none', color: '#27323d'}}><Typography variant="h4">Todo App</Typography></Link>
                  <Link to="/hq/quiz-app" onClick={() => {setDrawer(false)}} style={{textDecoration: 'none', color: '#27323d'}}><Typography paddingY={1} variant="h4">Quiz App</Typography></Link>
                  
                  <Box justifyContent={'center'} alignItems='center'>
                    <Link to="https://github.com/mgacuma" rel="noopener noreferrer" target="_blank">
                      <GitHubIcon  sx={{color: '#27323d'}}/> 
                    </Link>
                    <Link to="https://linkedin.com/in/mgacuma" rel="noopener noreferrer" target="_blank">
                      <LinkedinIcon sx={{color: '#27323d'}}/>
                    </Link>
                  </Box>
            </Drawer>
          </Box>


        </Toolbar>
    </AppBar>
  )
}

export default NavBar;
