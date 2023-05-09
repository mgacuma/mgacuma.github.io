import { Box } from "@mui/material";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";
import "./styles/home.css"
import Header from "./components/header";

export function Home() {

  return ( 
  <Box style={{
    backgroundColor: '#151515',
    fontFamily: 'Space Grotesk',
    overflow: 'hidden',
    // color: 'white'
    }}>
    <Header />
    <Profile />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Box>
  );
};
