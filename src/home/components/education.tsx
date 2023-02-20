import { Container, Grid, Typography } from "@mui/material"

const Education: React.FC = () => {
  return (
    <Grid container className="Education" >
      <Container sx={{backgroundColor: "beige"}} maxWidth="lg">
        <Grid item container direction="column" alignItems="center">
        
          <Container sx={{backgroundColor: "teal"}} maxWidth="sm">
            <Typography component="h2">
                Education
            </Typography>
          </Container>

          <Grid item container>
            <Container maxWidth="xs" sx={{backgroundColor: "#27323d" }}>
              <Typography>
                November 2021
              </Typography>
              <Typography>
                Bachelor of Science
              </Typography>
              <Typography>
                Computer Engineering
              </Typography>
              <Typography>
                San Francisco State University
              </Typography>
            </Container>
          </Grid>

        </Grid>
      </Container>
    </Grid>
  )
}

export default Education