import { AppBar, Container, Paper, Toolbar, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography>
          Miguel Gacuma
        </Typography>
        <Paper >
            <Link to="/hq/">Home</Link>
            <Link to="/hq/#Summary">Summary</Link>
            <Link to="/hq/todo-app">Todo App</Link>
        </Paper>
      </Toolbar>
    </AppBar>
    
  )
}

export default NavBar;
