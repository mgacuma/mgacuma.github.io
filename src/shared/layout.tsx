import { Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar";

import './styles/styles.css'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: "#f2f2f2" }}
    >
      <NavBar />
      <Outlet />
    </Paper>
  )
};

export default Layout;
