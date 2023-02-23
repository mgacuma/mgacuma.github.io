import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Education from "./components/education";
import Experience from "./components/experience";
import Profile from "./components/Profile";
import Skills from "./components/skills";
import Summary from "./components/summary";

const Home: React.FC = () => {

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

export default Home
