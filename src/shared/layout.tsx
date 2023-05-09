import { Box, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./navigation/nav-bar";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#657c92',
    },
    secondary: {
      main: '#608b8b',
    },
  }
});

export function Layout() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
        <Outlet />
    </ThemeProvider>
  )
};
