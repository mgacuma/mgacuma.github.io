import { Container, Divider, Grid, Typography } from "@mui/material"

const Skills: React.FC = () => {
  return (
    <Grid container className="Skills" direction="column" style={{backgroundColor: "#27323d"}}>
      <Container sx={{backgroundColor: "beige"}} maxWidth="lg">
        <Container sx={{backgroundColor: "teal"}} maxWidth="sm">
          <Typography component="h2">
              Skills
          </Typography>
        </Container>
      </Container>
    </Grid>
  )
}

export default Skills