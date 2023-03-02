import { AppBar, Container, Grid, List, ListItem, Paper, Toolbar, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
            <Grid container direction={{xs: 'column',sm: 'row'}} columnSpacing={{xs: 0, sm: 2}}>
              <Grid item>
                <Link to="/hq/"><Typography variant="h4">Home</Typography></Link>
              </Grid>
              <Grid item>
                <Link to="/hq/todo-app"><Typography variant="h4">Todo App</Typography></Link>
              </Grid>
              <Grid item>
                <Link to="/hq/quiz-app"><Typography variant="h4">Quiz App</Typography></Link>
              </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;
