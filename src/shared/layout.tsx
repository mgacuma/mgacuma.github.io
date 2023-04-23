import { createTheme, CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navigation/nav-bar";

import './styles/styles.css'

const theme = createTheme({});

export function Layout() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Paper
        elevation={0}
        style={{ padding: 0, margin: 0, backgroundColor: "#f2f2f2" }}
      >
        <NavBar />
        <Outlet />
      </Paper>
    </ThemeProvider>
  )
};
