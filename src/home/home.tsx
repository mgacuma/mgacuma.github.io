import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import NavToTop from "../shared/navigation/nav-to-top";
import Education from "./components/education";
import Experience from "./components/experience";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Summary from "./components/summary";

export function Home() {

  return ( 
  <Paper sx={{backgroundColor: "#f2f2f2"}}>
    <Profile />
    <Summary />
    <Experience />
    <Education />
    <Skills />
  </Paper>
  );
};
