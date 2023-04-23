import { AppBar, Box, Button, Container, Divider, Drawer, Grid, IconButton, List, ListItem, Menu, MenuItem, Paper, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import React, { ReactElement, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NavLinks } from "./nav-links";
import NavToTop from "./nav-to-top";

export function NavBar() {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
      <Tabs
        value={
          useLocation().pathname
        }
      >
        <Tab
          value='/hq/'
          label="Home"
          component={Link}
          to={'/hq/'}
        />
        <Tab
          value='/hq/todo-app'
          label="Todo App"
          component={Link}
          to='/hq/todo-app'
        />
        <Tab
          value='/hq/quiz-app'
          label="Quiz App"
          component={Link}
          to='/hq/quiz-app'
        />
      </Tabs>
          
          
      <Box display={{xs: 'flex', sm: 'none'}} sx={{height: 64}}>
        <Button onClick={e => setDrawer(!drawer)} sx={{color: '#27323d'}}>
          <MenuIcon fontSize="large" />
        </Button>

        <Drawer open={drawer} anchor='left' onClose={() => setDrawer(false)}>

            
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

      <NavToTop />
    </AppBar>
  )
}

export default NavBar;
