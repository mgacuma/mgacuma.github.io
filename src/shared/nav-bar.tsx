import { AppBar, Container, Paper, Toolbar, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar color="primary" position="static" style={{ height: 64, backgroundColor: "white" }}>
      <Toolbar style={{ height: 64 }}>
        <Paper>
            <Link to="/hq/"><Typography variant="h4">Home</Typography></Link>
            <Link to="/hq/todo-app"><Typography variant="h4">Todo App</Typography></Link>
        </Paper>
      </Toolbar>
    </AppBar>
    
  )
}

export default NavBar;
