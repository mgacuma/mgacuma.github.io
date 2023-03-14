import { AppBar, Box, Button, Container, Drawer, Grid, IconButton, List, ListItem, Menu, MenuItem, Paper, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Grid container direction={{xs: 'column',sm: 'row'}} columnSpacing={{xs: 0, sm: 2}} display={{xs: 'none', sm: 'flex'}}>
            <Grid item>
              <Link to="/hq/"><Typography variant="h4">Home</Typography></Link>
            </Grid>
            <Grid item>
              <Link to="/hq/todo-app"><Typography variant="h4">Todo App</Typography></Link>
            </Grid>
            <Grid item>
              <Link to="/hq/quiz-app"><Typography variant="h4">Quiz App</Typography></Link>
            </Grid>
            <Grid item>
              <Link to="https://github.com/mgacuma" rel="noopener noreferrer" target="_blank">
                <GitHubIcon sx={{}}/>
              </Link>
            </Grid>
            <Grid item>
              <Link to="https://linkedin.com/in/mgacuma" rel="noopener noreferrer" target="_blank">
                <LinkedinIcon sx={{}}/>
              </Link>
            </Grid>
          </Grid>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
            }} open={false}            >
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;
