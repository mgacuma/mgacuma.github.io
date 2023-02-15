import { Paper, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = React.memo(({ children }) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">Todo App</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Paper>
));

export default Layout;
